// /functions/api/acceptance-log.js
export async function onRequestPost({ request, env }) {
  // Config
  const MAX_IMAGE_BYTES = 7 * 1024 * 1024; // 7MB
  const MAX_RAW_JSON_CHARS = 16 * 1024; // 16KB - raw_json trimmed to avoid DB overload
  const R2_BUCKET = env.R2; // your R2 binding
  const R2_PUBLIC = env.R2_PUBLIC_URL || ''; // public base URL for uploaded objects
  const db = env.DB; // D1 binding

  // Helpers
  const jsonResponse = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { 'Content-Type': 'application/json' }
    });

  function safeRandomSuffix(len = 6) {
    return Math.random().toString(36).slice(2, 2 + len);
  }

  async function arrayBufferFromDataUrl(dataUrl) {
    // If it's a data: URL, fetch it (works for large payloads)
    if (typeof dataUrl === 'string' && dataUrl.startsWith('data:')) {
      // fetch(dataUrl) is supported in Cloudflare pages/functions and returns a Response
      const res = await fetch(dataUrl);
      if (!res.ok) throw new Error('Failed to decode data URL');
      return await res.arrayBuffer();
    }

    // If it's plain base64 (no data: prefix), try decode using atob -> Uint8Array
    if (typeof dataUrl === 'string') {
      // strip whitespace/newlines
      const b64 = dataUrl.replace(/\s+/g, '');
      // Accept either "data:...;base64,..." or just base64 - we assume this branch is raw base64 already
      try {
        // atob can throw for very large strings; handle that at call site
        const bin = atob(b64);
        const len = bin.length;
        const arr = new Uint8Array(len);
        for (let i = 0; i < len; i++) arr[i] = bin.charCodeAt(i);
        return arr.buffer;
      } catch (err) {
        throw new Error('Failed to decode base64 screenshot');
      }
    }

    throw new Error('Unsupported image data format');
  }

  async function computeSHA256Hex(buffer) {
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return jsonResponse({ error: 'Invalid JSON body' }, 400);
    }

    // ---------- Server-side canonical order id (never trust client)
    const order_id = 'TB-' + Math.random().toString(36).slice(2, 9).toUpperCase();

    // Extract common fields (safe defaults)
    const email = String(body.email || '').slice(0, 254);
    const ip_address = String(body.ip || request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '').slice(0, 64);
    const user_agent = String(body.user_agent || request.headers.get('user-agent') || '').slice(0, 1024); // trimmed
    const timezone = String(body.timezone || '').slice(0, 128);
    const terms_version = String(body.terms_version || env.TERMS_VERSION || '1.0').slice(0, 64);
    const refund_policy_version = String(body.refund_policy_version || '').slice(0, 64);
    const stripe_session_id = String(body.stripe_session_id || '').slice(0, 128);
    const price_id = String(body.price_id || '').slice(0, 128);
    const plan_name = String(body.plan_name || '').slice(0, 256);

    // Prepare cart/line items and raw_json but strip large screenshot_base64
    const cart_json = JSON.stringify(body.cart || []);
    const lineitems_json = JSON.stringify(body.lineItems || []);

    // Build sanitized raw_json (remove screenshot_base64 if present)
    const safeBody = { ...body };
    if (safeBody.screenshot_base64) delete safeBody.screenshot_base64;
    // Also remove any huge-looking fields for safety
    if (typeof safeBody.large_field === 'string' && safeBody.large_field.length > 2000) {
      safeBody.large_field = '[redacted]';
    }
    let raw_json = JSON.stringify(safeBody);
    if (raw_json.length > MAX_RAW_JSON_CHARS) {
      raw_json = raw_json.slice(0, MAX_RAW_JSON_CHARS) + '...';
    }

    // Variables to return
    let screenshot_url = '';
    let evidence_hash = '';

    // If screenshot provided, decode, validate, hash, upload
    const screenshotData = body.screenshot_base64 || null;
    if (screenshotData) {
      let arrayBuffer;
      try {
        arrayBuffer = await arrayBufferFromDataUrl(screenshotData);
      } catch (err) {
        // If decoding fails, reject with 400 - client should retry or continue without screenshot
        return jsonResponse({ error: 'Failed to decode screenshot data: ' + err.message }, 400);
      }

      const byteLength = arrayBuffer.byteLength || 0;
      if (!byteLength || byteLength > MAX_IMAGE_BYTES) {
        return jsonResponse({ error: 'Screenshot file size invalid or too large', maxBytes: MAX_IMAGE_BYTES }, 413);
      }

      // Compute SHA-256 hash
      evidence_hash = await computeSHA256Hex(arrayBuffer);

      // Determine content type: try extract from data URL if possible
      let contentType = 'application/octet-stream';
      const matchMime = String(screenshotData).match(/^data:([a-zA-Z0-9\/+\-.]+);base64,/);
      if (matchMime && matchMime[1]) {
        contentType = matchMime[1];
      } else {
        // fallback: attempt to detect common JPEG signatures from bytes
        const bytes = new Uint8Array(arrayBuffer);
        if (bytes[0] === 0xFF && bytes[1] === 0xD8) contentType = 'image/jpeg';
        else if (bytes[0] === 0x89 && bytes[1] === 0x50) contentType = 'image/png';
        else if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) contentType = 'image/webp';
      }

      // Create a filename and upload to R2
      const filename = `screenshots/${Date.now()}_${safeRandomSuffix(8)}.jpg`; // extension doesn't strictly matter but use jpg
      // Use R2.put with ArrayBuffer or Uint8Array
      // Cloudflare R2 `put` accepts ArrayBuffer, ReadableStream, Blob, etc.
      try {
        await R2_BUCKET.put(filename, arrayBuffer, {
          httpMetadata: { contentType }
        });

        screenshot_url = R2_PUBLIC ? `${R2_PUBLIC.replace(/\/$/, '')}/${filename}` : filename;
      } catch (err) {
        console.error('R2 upload failed', err);
        // fail closed: do not proceed to DB insert without optionally allowing upload failure; decide policy
        return jsonResponse({ error: 'Failed to upload screenshot to storage' }, 500);
      }
    }

    // Insert into D1 - prepared statement
    // Columns (ensure your D1 table 'acceptance_records' has these columns)
    const stmt = `
      INSERT INTO acceptance_records
      (email, order_id, ip_address, user_agent, timezone, terms_version,
       refund_policy_version, accepted_at, stripe_session_id, price_id, plan_name,
       cart_json, lineitems_json, screenshot_url, evidence_hash, raw_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
      await db.prepare(stmt).bind(
        email,
        order_id,
        ip_address,
        user_agent,
        timezone,
        terms_version,
        refund_policy_version,
        stripe_session_id,
        price_id,
        plan_name,
        cart_json,
        lineitems_json,
        screenshot_url,
        evidence_hash,
        raw_json
      ).run();
    } catch (err) {
      console.error('D1 insert error', err);
      return jsonResponse({ error: 'Database insert failed' }, 500);
    }

    // Return success and canonical order id + evidences
    return jsonResponse({
      ok: true,
      order_id,
      screenshot_url,
      evidence_hash
    }, 200);

  } catch (err) {
    console.error('acceptance-log unexpected error', err);
    return jsonResponse({ error: 'Server error', details: err.message }, 500);
  }
}

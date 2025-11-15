// /functions/api/acceptance-log.js
export async function onRequestPost({ request, env }) {

  // ------------------------------------------------------------------
  // CONFIG
  // ------------------------------------------------------------------
  const MAX_IMAGE_BYTES = 7 * 1024 * 1024; // 7MB
  const MAX_RAW_JSON_CHARS = 16 * 1024;    // 16KB
  const R2_BUCKET = env.R2;
  const R2_PUBLIC = env.R2_PUBLIC_URL || '';
  const db = env.DB;

  // ------------------------------------------------------------------
  // HELPERS
  // ------------------------------------------------------------------
  const jsonResponse = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { "Content-Type": "application/json" }
    });

  function safeRandomSuffix(len = 6) {
    return Math.random().toString(36).slice(2, 2 + len);
  }

  // SAFE base64 decoding (no fetch(dataURI) anymore)
  function decodeImageBase64(input) {
    const isDataURL = /^data:.+;base64,/i.test(input);
    const base64 = isDataURL ? input.split(",")[1] : input;

    try {
      const bin = atob(base64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return bytes;
    } catch (err) {
      throw new Error("Invalid base64 image");
    }
  }

  async function sha256Hex(uint8) {
    const hash = await crypto.subtle.digest("SHA-256", uint8);
    return [...new Uint8Array(hash)]
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }


  // ------------------------------------------------------------------
  // MAIN LOGIC
  // ------------------------------------------------------------------
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return jsonResponse({ error: "Invalid JSON body" }, 400);
    }

    // ALWAYS server-generated, never trust client
    const order_id = "TB-" + Math.random().toString(36).slice(2, 9).toUpperCase();

    // Core fields (PRE-PAYMENT EVIDENCE MUST REMAIN INTACT)
    const email = String(body.email || "").slice(0, 254);
    const ip_address = String(
      body.ip ||
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      ""
    ).slice(0, 64);

    const user_agent = String(body.user_agent || request.headers.get("user-agent") || "").slice(0, 1024);
    const timezone = String(body.timezone || "").slice(0, 128);
    const terms_version = String(body.terms_version || env.TERMS_VERSION || "1.0").slice(0, 64);
    const refund_policy_version = String(body.refund_policy_version || "").slice(0, 64);
    const stripe_session_id = String(body.stripe_session_id || "").slice(0, 128);
    const price_id = String(body.price_id || "").slice(0, 128);
    const plan_name = String(body.plan_name || "").slice(0, 256);

    // Cart & line items (keep intact)
    const cart_json = JSON.stringify(body.cart || []);

    const lineitems_json = JSON.stringify(
      (body.lineItems || []).map(li => ({
        ...li,
        billing: li.billing || null
      }))
    );

    // Clean raw_json (strip screenshot)
    const safeBody = { ...body };
    if (safeBody.screenshot_base64) delete safeBody.screenshot_base64;

    let raw_json = JSON.stringify(safeBody);
    if (raw_json.length > MAX_RAW_JSON_CHARS) {
      raw_json = raw_json.slice(0, MAX_RAW_JSON_CHARS) + "...";
    }


    // ------------------------------------------------------------------
    // HANDLE SCREENSHOT (R2 upload + hashing)
    // ------------------------------------------------------------------
    let screenshot_url = "";
    let evidence_hash = "";

    if (body.screenshot_base64) {
      let imgBytes;
      try {
        imgBytes = decodeImageBase64(body.screenshot_base64);
      } catch (err) {
        return jsonResponse({ error: "Screenshot decode failed: " + err.message }, 400);
      }

      if (imgBytes.byteLength > MAX_IMAGE_BYTES) {
        return jsonResponse(
          { error: "Screenshot too large", maxBytes: MAX_IMAGE_BYTES },
          413
        );
      }

      evidence_hash = await sha256Hex(imgBytes);

      // Detect MIME type → get extension
      const mimeMatch = String(body.screenshot_base64).match(/^data:([^;]+);base64,/i);
      let ext = ".jpg";

      if (mimeMatch && mimeMatch[1]) {
        if (mimeMatch[1].includes("png")) ext = ".png";
        else if (mimeMatch[1].includes("webp")) ext = ".webp";
      }

      const filename = `screenshots/${Date.now()}_${safeRandomSuffix(8)}${ext}`;

      try {
        await R2_BUCKET.put(filename, imgBytes, {
          httpMetadata: { contentType: mimeMatch ? mimeMatch[1] : "image/jpeg" }
        });

        screenshot_url = R2_PUBLIC
          ? `${R2_PUBLIC.replace(/\/$/, "")}/${filename}`
          : filename;
      } catch (err) {
        console.error("R2 upload failed", err);
        return jsonResponse({ error: "Screenshot upload failed" }, 500);
      }
    }


    // ------------------------------------------------------------------
    // INSERT INTO D1 (INTACT)
    // ------------------------------------------------------------------
    const stmt = `
      INSERT INTO acceptance_records
        (email, order_id, ip_address, user_agent, timezone, terms_version,
         refund_policy_version, accepted_at, stripe_session_id, price_id,
         plan_name, cart_json, lineitems_json, screenshot_url,
         evidence_hash, raw_json)
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
      console.error("D1 insert error", err);
      return jsonResponse({ error: "Database insert failed" }, 500);
    }


    // ------------------------------------------------------------------
    // DONE — PRE-PAYMENT EVIDENCE SAVED SAFELY
    // ------------------------------------------------------------------
    return jsonResponse(
      { ok: true, order_id, screenshot_url, evidence_hash },
      200
    );

  } catch (err) {
    console.error("acceptance-log unexpected error", err);
    return jsonResponse(
      { error: "Server error", details: err.message },
      500
    );
  }
}

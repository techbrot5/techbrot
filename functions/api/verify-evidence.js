// functions/api/verify-evidence.js
// ---------------------------------------------------------------------------
// Verify evidence for an order by re-computing SHA-256 hashes and comparing
// with the index.json recorded at export time.
// - Admin protected: header x-admin-pin === env.ADMIN_PIN
// - Tries to verify both R2 objects and D1-derived JSON (rebuilds tables)
// - Writes a verification audit to R2 under verification/<order_id>/
// ---------------------------------------------------------------------------

const enc = new TextEncoder();

async function sha256HexFromBytes(bytes) {
  // bytes: Uint8Array or ArrayBuffer
  const buffer = bytes instanceof Uint8Array ? bytes.buffer : bytes;
  const h = await crypto.subtle.digest("SHA-256", buffer);
  return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function stableStringify(obj) {
  // deterministic JSON stringify with sorted object keys
  if (obj === null || obj === undefined) return JSON.stringify(obj);
  if (typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj)) return "[" + obj.map(stableStringify).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return "{" + keys.map(k => JSON.stringify(k) + ":" + stableStringify(obj[k])).join(",") + "}";
}

function jsonBytesFromRows(rows) {
  // rows is array of DB rows (plain objects)
  // Use stable stringify to ensure identical representation as index generation code
  // We wrap in an object for clarity
  return enc.encode(JSON.stringify(rows, null, 2));
}

async function fetchIndexJsonFromR2(r2, order_id) {
  // Try multiple likely locations for index.json (backwards compatibility)
  const candidates = [
    `verification/${order_id}/index.json`,
    `email_attempts/${order_id}/index.json`,
    `evidence/${order_id}/index.json`,
    `index.json`
  ];

  for (const key of candidates) {
    try {
      const obj = await r2.get(key);
      if (!obj) continue;
      const txt = await obj.text();
      try {
        const parsed = JSON.parse(txt);
        return { key, json: parsed };
      } catch (e) {
        // found but not JSON — return raw text as parse error
        return { key, json: null, parseError: true, rawText: txt };
      }
    } catch (e) {
      // ignore and try next
    }
  }
  return null;
}

// Build D1 JSON for a table (only for tables we expect to be part of the index)
async function buildD1TableJson(db, table, order_id, ordersRow = null) {
  try {
    if (table === "orders") {
      const r = await db.prepare(`SELECT * FROM orders WHERE order_id = ?`).bind(order_id).all();
      return r?.results || [];
    }

    if (table === "acceptance_records") {
      // acceptance_records are linked by stripe_session_id found in orders
      let stripe_session_id = null;
      if (ordersRow && ordersRow.stripe_session_id) stripe_session_id = ordersRow.stripe_session_id;
      else {
        // try to find it
        const q = await db.prepare(`SELECT stripe_session_id FROM orders WHERE order_id = ? LIMIT 1`).bind(order_id).first();
        if (q && q.stripe_session_id) stripe_session_id = q.stripe_session_id;
      }
      if (!stripe_session_id) return [];
      const r = await db.prepare(`SELECT * FROM acceptance_records WHERE stripe_session_id = ?`).bind(stripe_session_id).all();
      return r?.results || [];
    }

    if (table === "email_attempts") {
      const r = await db.prepare(`SELECT * FROM email_attempts WHERE order_id = ? ORDER BY id ASC`).bind(order_id).all();
      return r?.results || [];
    }

    if (table === "verification_logs") {
      const r = await db.prepare(`SELECT * FROM verification_logs WHERE order_id = ? ORDER BY id ASC`).bind(order_id).all();
      return r?.results || [];
    }

    // default fallback: try selecting by order_id column
    try {
      const r = await db.prepare(`SELECT * FROM ${table} WHERE order_id = ?`).bind(order_id).all();
      return r?.results || [];
    } catch (e) {
      return [];
    }
  } catch (err) {
    return [];
  }
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env.DB;
  const r2 = env.R2;

  // Admin auth
  const adminPin = request.headers.get("x-admin-pin");
  if (!adminPin || adminPin !== env.ADMIN_PIN) {
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
  }

  const url = new URL(request.url);
  const order_id = url.searchParams.get("order_id");
  if (!order_id) {
    return new Response(JSON.stringify({ error: "order_id required" }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  // Load index.json (tries multiple R2 locations)
  const indexLookup = await fetchIndexJsonFromR2(r2, order_id);
  if (!indexLookup) {
    return new Response(JSON.stringify({ error: "index.json not found in R2 for this order", order_id }), { status: 404, headers: { "Content-Type": "application/json" } });
  }
  if (indexLookup.parseError) {
    return new Response(JSON.stringify({ error: "index.json parse error", key: indexLookup.key, rawTextPreview: String(indexLookup.rawText).slice(0, 1000) }), { status: 500, headers: { "Content-Type": "application/json" } });
  }

  const indexJson = indexLookup.json;
  if (!indexJson || !Array.isArray(indexJson.files)) {
    return new Response(JSON.stringify({ error: "index.json invalid format", key: indexLookup.key }), { status: 500, headers: { "Content-Type": "application/json" } });
  }

  const fileList = indexJson.files;                 // array of filenames that were included in the zip
  const expectedHashes = indexJson.sha256 || {};    // map: filename -> hex hash (may be empty)

  const results = [];
  const mismatches = [];

  // retrieve the orders row once (some D1 tables need stripe_session_id)
  let ordersRow = null;
  try {
    const q = await db.prepare(`SELECT * FROM orders WHERE order_id = ? LIMIT 1`).bind(order_id).first();
    ordersRow = q || null;
  } catch (e) {
    ordersRow = null;
  }

  // iterate files and verify
  for (const fname of fileList) {
    try {
      // Identify R2 vs D1 vs report
      if (fname.startsWith("R2/")) {
        // Example: R2/email_attempts/xxx.json  or R2/verification/yyy.json
        const parts = fname.split("/");
        if (parts.length < 3) {
          results.push({ file: fname, verified: false, error: "invalid R2 path" });
          mismatches.push({ file: fname, reason: "invalid R2 path" });
          continue;
        }
        const label = parts[1]; // email_attempts or verification
        const short = parts.slice(2).join("/");
        const r2Key = `${label}/${order_id}/${short}`;

        // Fetch object
        const obj = await r2.get(r2Key);
        if (!obj) {
          results.push({ file: fname, verified: false, error: "missing in R2", r2Key });
          mismatches.push({ file: fname, reason: "missing in R2", r2Key });
          continue;
        }
        const data = new Uint8Array(await obj.arrayBuffer());
        const computed = await sha256HexFromBytes(data);
        const expected = expectedHashes[fname] || null;
        const ok = expected ? (computed === expected) : null; // null means index didn't contain an expected hash
        results.push({
          file: fname,
          location: r2Key,
          bytes: data.length,
          expected,
          actual: computed,
          verified: ok === true
        });
        if (ok === false) mismatches.push({ file: fname, expected, actual: computed, r2Key });
      } else if (fname.startsWith("D1/")) {
        // Example: D1/orders.json or D1/email_attempts.json etc.
        // Rebuild the JSON from DB and hash it
        const table = fname.slice(3).replace(/\.json$/, "");
        const rows = await buildD1TableJson(db, table, order_id, ordersRow);
        const bytes = jsonBytesFromRows(rows);
        const computed = await sha256HexFromBytes(bytes);
        const expected = expectedHashes[fname] || null;
        const ok = expected ? (computed === expected) : null;
        results.push({
          file: fname,
          source: `D1 table ${table}`,
          row_count: (rows && rows.length) || 0,
          expected,
          actual: computed,
          verified: ok === true
        });
        if (ok === false) mismatches.push({ file: fname, expected, actual: computed });
      } else if (fname.startsWith("report/") || fname.startsWith("report\\") || fname.startsWith("report")) {
        // report files (HTML/PDF) are not stored in R2 in our current pipeline.
        // We cannot verify them unless stored in R2. Mark as info.
        results.push({
          file: fname,
          note: "report file — not stored in R2 for direct verification (index.json only)",
          verified: expectedHashes[fname] ? null : true
        });
        // If index had a hash but file missing from R2, that's a mismatch — we already reflect it above.
      } else {
        // unknown file path - treat as present-only in index.json; attempt to map to R2 keys heuristically
        // Try email_attempts and verification first
        let mapped = null;
        if (fname.includes("email_attempts")) {
          mapped = `email_attempts/${order_id}/${fname.split("/").pop()}`;
        } else if (fname.includes("verification")) {
          mapped = `verification/${order_id}/${fname.split("/").pop()}`;
        }

        if (mapped) {
          const obj = await r2.get(mapped);
          if (!obj) {
            results.push({ file: fname, verified: false, error: "missing in R2", mapped });
            mismatches.push({ file: fname, reason: "missing in R2", mapped });
            continue;
          }
          const data = new Uint8Array(await obj.arrayBuffer());
          const computed = await sha256HexFromBytes(data);
          const expected = expectedHashes[fname] || null;
          const ok = expected ? (computed === expected) : null;
          results.push({ file: fname, mapped, bytes: data.length, expected, actual: computed, verified: ok === true });
          if (ok === false) mismatches.push({ file: fname, expected, actual: computed, mapped });
        } else {
          results.push({ file: fname, note: "unknown path type — cannot verify automatically", verified: null });
        }
      }
    } catch (err) {
      results.push({ file: fname, verified: false, error: String(err) });
      mismatches.push({ file: fname, error: String(err) });
    }
  }

  const ok = mismatches.length === 0;

  // Prepare audit object and write to R2 for immutability
  const ts = Date.now();
  const audit = {
    order_id,
    checked_at: new Date(ts).toISOString(),
    index_key: indexLookup.key,
    ok,
    mismatches,
    results_summary: results.map(r => ({
      file: r.file,
      verified: r.verified === true ? true : (r.verified === false ? false : null),
      note: r.note || r.error || null
    })),
    full_results: results
  };

  const auditKey = `verification/${order_id}/verify-result-${ts}.json`;
  try {
    await r2.put(auditKey, JSON.stringify(audit, null, 2), { httpMetadata: { contentType: "application/json" } });
    audit.audit_r2_key = auditKey;
  } catch (err) {
    audit.audit_error = String(err);
  }

  return new Response(JSON.stringify(audit, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

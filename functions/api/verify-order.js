// ------------------------------------------------------------------
// functions/api/verify-order.js
// Full upgrade:
// ✔ Token validation
// ✔ Mark order verified
// ✔ Collect device fingerprint (from client)
// ✔ Collect browser info + CF IP + UA
// ✔ Generate server-side evidence hash
// ✔ Save full evidence JSON to R2
// ✔ Insert verification_logs row
// ✔ Update orders row with verification metadata
// ✔ Return masked info for success page
// ------------------------------------------------------------------

export async function onRequestPost(context) {
  const { request, env } = context;
  const db = env.DB;
  const r2 = env.R2;

  const body = await request.json().catch(() => ({}));
  const order_id = String(body.order_id || "").trim();
  const token = String(body.token || "").trim();
  const clientFingerprint = body.client_fingerprint || null;    // from browser
  const clientInfo = body.client_info || {};                   // browser info

  if (!order_id || !token) {
    return json(400, { error: "order_id & token required" });
  }

  // Response helper
  function json(status, obj) {
    return new Response(JSON.stringify(obj), {
      status,
      headers: { "Content-Type": "application/json" }
    });
  }

  // -------------------------------------------------------
  // 1) Fetch order from DB
  // -------------------------------------------------------
  const row = await db.prepare(`
    SELECT *
    FROM orders
    WHERE order_id = ?
    LIMIT 1
  `).bind(order_id).first();

  if (!row || !row.verification_token) {
    return json(404, { error: "order not found or no token" });
  }

  // -------------------------------------------------------
  // 2) Validate token + expiry
  // -------------------------------------------------------
  if (row.verification_token !== token) {
    return json(403, { error: "invalid token" });
  }

  if (row.token_expires_at && new Date(row.token_expires_at).getTime() < Date.now()) {
    return json(410, { error: "token expired" });
  }

  // -------------------------------------------------------
  // 3) Collect server-side evidence
  // -------------------------------------------------------
  const headers = {};
  for (const [k, v] of request.headers.entries()) {
    headers[k.toLowerCase()] = v;
  }

  const cfIp =
    headers["cf-connecting-ip"] ||
    headers["x-forwarded-for"] ||
    null;

  const userAgent = headers["user-agent"] || "";
  const verifiedAt = new Date().toISOString();

  // -------------------------------------------------------
  // 4) Server-side evidence hash for dispute-proofing
  // -------------------------------------------------------
  async function sha256Hex(input) {
    try {
      const enc = new TextEncoder();
      const data = enc.encode(input);
      const digest = await crypto.subtle.digest("SHA-256", data);
      const arr = Array.from(new Uint8Array(digest));
      return arr.map(b => b.toString(16).padStart(2, "0")).join("");
    } catch {
      return null;
    }
  }

  const combinedHashMaterial = [
    clientFingerprint || "",
    cfIp || "",
    userAgent || "",
    verifiedAt
  ].join("|");

  const evidence_hash = await sha256Hex(combinedHashMaterial);

  // -------------------------------------------------------
  // 5) Save full evidence JSON to R2
  // -------------------------------------------------------
  const evidence = {
    order_id,
    email: row.email,
    verified_at: verifiedAt,
    token,
    client_fingerprint: clientFingerprint || null,
    client_info: clientInfo || null,
    evidence_hash,
    server_headers: {
      cf_connecting_ip: cfIp,
      user_agent: userAgent,
      all: headers
    },
    order_row_snapshot: row
  };

  const ts = Date.now();
  const r2key = `orders/${order_id}/verification-${ts}.json`;

  try {
    await r2.put(r2key, JSON.stringify(evidence, null, 2), {
      httpMetadata: { contentType: "application/json" }
    });
  } catch (err) {
    console.warn("R2 save failed", err);
  }

  // -------------------------------------------------------
  // 6) Write verification_logs row (table auto-created if missing)
  // -------------------------------------------------------
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS verification_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id TEXT,
        verified_at TEXT,
        ip TEXT,
        user_agent TEXT,
        fingerprint_hash TEXT,
        r2_key TEXT,
        evidence_hash TEXT
      )
    `).run();
  } catch (e) {
    console.warn("verify_logs create failed:", e);
  }

  try {
    await db.prepare(`
      INSERT INTO verification_logs
        (order_id, verified_at, ip, user_agent, fingerprint_hash, r2_key, evidence_hash)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      order_id,
      verifiedAt,
      cfIp || null,
      userAgent || null,
      clientFingerprint || null,
      r2key,
      evidence_hash || null
    ).run();
  } catch (e) {
    console.warn("verification_logs insert error:", e);
  }

  // -------------------------------------------------------
  // 7) Update orders row — mark verified
  // -------------------------------------------------------
  try {
    await db.prepare(`
      UPDATE orders
      SET verified = 1,
          verified_at = ?,
          verification_token = NULL,
          token_expires_at = NULL,
          verification_ip = ?,
          verification_user_agent = ?,
          verification_fingerprint_hash = ?
      WHERE order_id = ?
    `).bind(
      verifiedAt,
      cfIp || null,
      userAgent || null,
      evidence_hash || null,
      order_id
    ).run();
  } catch (e) {
    console.warn("orders update failed:", e);
  }

  // -------------------------------------------------------
  // 8) Return masked data for success page
  // -------------------------------------------------------
  const maskedEmail = (row.email || "").replace(/(.{2}).+(@.+)/, "$1***$2");
  const maskedIp = cfIp ? cfIp.replace(/\.\d+$/, ".***") : "Recorded";

  // Stripe session id (short masked)
  const stripeSession = row.stripe_session_id || row.session_id || null;
  const stripeShort = stripeSession ? String(stripeSession).slice(-6) : null;

  return json(200, {
    ok: true,
    order_id,
    email: maskedEmail,
    ip: maskedIp,
    stripe_session_id: stripeShort,
    r2key,
    evidence_hash
  });
}

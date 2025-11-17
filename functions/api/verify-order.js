// ------------------------------------------------------------------
// functions/api/verify-order.js
// Handles customer verification after the verification email.
// Stores evidence (IP + UA) in R2 and logs the event in D1.
// ------------------------------------------------------------------

export async function onRequestPost(context) {
  const env = context.env;
  const req = context.request;
  const body = await req.json().catch(() => null);

  if (!body || !body.order_id || !body.token) {
    return new Response(
      JSON.stringify({ error: "order_id & token required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const order_id = String(body.order_id);
  const token = String(body.token);

  // ------------------------------------------------------------------
  // Validate token
  // ------------------------------------------------------------------
  const row = await env.DB.prepare(`
      SELECT verification_token, token_expires_at, email
      FROM orders
      WHERE order_id = ?
  `).bind(order_id).first();

  if (!row || !row.verification_token) {
    return new Response(
      JSON.stringify({ error: "order not found or no token" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }

  if (row.verification_token !== token) {
    return new Response(
      JSON.stringify({ error: "invalid token" }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  if (
    row.token_expires_at &&
    new Date(row.token_expires_at).getTime() < Date.now()
  ) {
    return new Response(
      JSON.stringify({ error: "token expired" }),
      { status: 410, headers: { "Content-Type": "application/json" } }
    );
  }

  // ------------------------------------------------------------------
  // Mark verified (verification DOES NOT stop follow-ups — correct logic)
  // ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      UPDATE orders
      SET verified = 1,
          verified_at = datetime('now'),
          verification_token = NULL,
          token_expires_at = NULL
      WHERE order_id = ?
    `).bind(order_id).run();
  } catch (e) {
    console.warn("verify order update error:", e);
  }

  // ------------------------------------------------------------------
  // Capture client evidence (IP + UA)
  // ------------------------------------------------------------------
  const ip =
    req.headers.get("CF-Connecting-IP") ||
    req.headers.get("x-forwarded-for") ||
    "";

  const ua = req.headers.get("user-agent") || "";

  const record = {
    order_id,
    email: row.email,
    ip,
    user_agent: ua,
    verified_at_utc: new Date().toISOString()
  };

  // ------------------------------------------------------------------
  // Store evidence in R2
  // ------------------------------------------------------------------
  const key = `verification/${order_id}/${Date.now()}.json`;

  try {
    await env.R2.put(key, JSON.stringify(record), {
      httpMetadata: { contentType: "application/json" }
    });
  } catch (e) {
    console.warn("R2 write failed:", e);
  }

  // ------------------------------------------------------------------
  // Log in email_attempts as a system event
  // ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts
        (order_id, email_to, subject, body_snippet, status, provider_event_id, raw_r2_key)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      order_id,
      row.email,
      "Order verification",
      "Customer clicked verification link",
      "verified",
      `verify_${Date.now()}`,
      key
    ).run();
  } catch (e) {
    console.warn("email_attempt log failed:", e);
  }

  return new Response(
    JSON.stringify({ ok: true, order_id, r2_key: key }),
    { headers: { "Content-Type": "application/json" } }
  );
}

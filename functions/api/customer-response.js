// functions/api/customer-response.js
export async function onRequestPost(context) {
  const env = context.env;

  const text = await context.request.text().catch(() => null);
  let parsed = null;
  try { 
    parsed = JSON.parse(text); 
  } catch (_) { 
    parsed = { raw: text }; 
  }

  // NOTE: Old Mailersend webhook header – harmless
  const webhookSecret = env.MAILERSEND_INBOUND_SECRET;
  if (webhookSecret) {
    const header =
      context.request.headers.get("x-mailersend-signature") ||
      context.request.headers.get("x-hook-secret") ||
      "";
    // No-op (Postmark inbound doesn't need this)
  }

  // ------------------------------------------------------------------
  // Extract email smartly (Postmark-compatible)
// ------------------------------------------------------------------
  const from =
    parsed.From ||
    parsed.mail_from ||
    parsed.from ||
    (parsed.envelope && parsed.envelope.from) ||
    (parsed.sender && parsed.sender.email) ||
    null;

  let email = null;

  if (typeof from === "string") email = from;
  else if (from && typeof from === "object" && from.email) email = from.email;

  // ------------------------------------------------------------------
  // Store unlinked inbound if no email found
  // ------------------------------------------------------------------
  if (!email) {
    const key = `inbound/unlinked/${Date.now()}.json`;
    await env.R2.put(key, JSON.stringify(parsed), {
      httpMetadata: { contentType: "application/json" }
    });
    return new Response(
      JSON.stringify({ ok: true, note: "no email found" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  // ------------------------------------------------------------------
  // Find latest order for this email
  // ------------------------------------------------------------------
  const row = await env.DB.prepare(`
      SELECT order_id 
      FROM orders 
      WHERE email = ? 
      ORDER BY created_at DESC 
      LIMIT 1
    `)
    .bind(email)
    .first();

  if (!row) {
    const key = `inbound/unlinked/${Date.now()}.json`;
    await env.R2.put(key, JSON.stringify(parsed), {
      httpMetadata: { contentType: "application/json" }
    });
    return new Response(
      JSON.stringify({ ok: true, note: "no order found for email" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  const order_id = row.order_id;

  // ------------------------------------------------------------------
  // Mark customer_responded = 1 (this STOPS follow-ups)
// ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      UPDATE orders 
      SET customer_responded = 1 
      WHERE order_id = ?
    `)
      .bind(order_id)
      .run();
  } catch (_) {}

  // ------------------------------------------------------------------
  // Save inbound message as evidence
  // ------------------------------------------------------------------
  const key = `inbound/${order_id}/${Date.now()}.json`;

  try {
    await env.R2.put(key, JSON.stringify(parsed), {
      httpMetadata: { contentType: "application/json" }
    });
  } catch (_) {}

  // ------------------------------------------------------------------
  // Log inbound email in email_attempts
  // ------------------------------------------------------------------
  const subject = parsed.subject || parsed.Subject || "Inbound reply";
  const snippet =
    (parsed.text ||
      parsed.TextBody ||
      parsed.html ||
      parsed.HtmlBody ||
      JSON.stringify(parsed)
    ).slice(0, 200);

  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts
        (order_id, email_to, subject, body_snippet, status, raw_r2_key)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
      .bind(order_id, email, subject, snippet, "inbound", key)
      .run();
  } catch (_) {}

  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

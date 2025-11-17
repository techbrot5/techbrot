// ------------------------------------------------------------------
// functions/api/customer-response.js
// Handles inbound replies (via Postmark Inbound Webhook).
// Marks customer_responded = 1 to stop follow-ups.
// Saves raw inbound to R2 and logs in email_attempts.
// ------------------------------------------------------------------

export async function onRequestPost(context) {
  const env = context.env;

  // Parse inbound payload (Postmark sends JSON)
  const text = await context.request.text().catch(() => null);
  let parsed = null;

  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = { raw: text };
  }

  // ------------------------------------------------------------------
  // Extract sender email (Postmark format)
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

  // If no email — store as unlinked inbound
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
  // Find the most recent order for this email
  // ------------------------------------------------------------------
  const row = await env.DB.prepare(`
      SELECT order_id
      FROM orders
      WHERE email = ?
      ORDER BY created_at DESC
      LIMIT 1
  `).bind(email).first();

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
  // Mark customer as responded (THIS stops follow-ups)
  // ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      UPDATE orders
      SET customer_responded = 1
      WHERE order_id = ?
    `).bind(order_id).run();
  } catch (_) {}

  // ------------------------------------------------------------------
  // Store raw inbound in R2
  // ------------------------------------------------------------------
  const key = `inbound/${order_id}/${Date.now()}.json`;

  try {
    await env.R2.put(key, JSON.stringify(parsed), {
      httpMetadata: { contentType: "application/json" }
    });
  } catch (_) {}

  // ------------------------------------------------------------------
  // Log inbound into email_attempts
  // ------------------------------------------------------------------
  const subject = parsed.Subject || parsed.subject || "Inbound reply";
  const snippet =
    (parsed.TextBody ||
      parsed.text ||
      parsed.HtmlBody ||
      parsed.html ||
      JSON.stringify(parsed)
    ).slice(0, 200);

  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts
        (order_id, email_to, subject, body_snippet, status, raw_r2_key)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(order_id, email, subject, snippet, "inbound", key).run();
  } catch (_) {}

  return new Response(
    JSON.stringify({ ok: true }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

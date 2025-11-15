// functions/api/customer-response.js
export async function onRequestPost(context) {
  const env = context.env;
  const text = await context.request.text().catch(()=>null);
  let parsed = null;
  try { parsed = JSON.parse(text); } catch (e) { parsed = { raw: text };}

  // optional: validate webhook secret header
  const webhookSecret = env.MAILERSEND_INBOUND_SECRET;
  if (webhookSecret) {
    const header = context.request.headers.get('x-mailersend-signature') || context.request.headers.get('x-hook-secret') || '';
    // If you set up a secret verify it here. Implementation depends on provider. If not set skip.
  }

  // extract email
  const from = parsed.mail_from || parsed.from || (parsed.envelope && parsed.envelope.from) || (parsed.sender && parsed.sender.email) || null;
  let email = null;
  if (typeof from === 'string') email = from;
  else if (typeof from === 'object' && from.email) email = from.email;

  // fallback: store raw inbound if can't resolve
  if (!email) {
    const key = `inbound/unlinked/${Date.now()}.json`;
    await env.R2.put(key, JSON.stringify(parsed), { httpMetadata:{ contentType: 'application/json' }});
    return new Response(JSON.stringify({ ok:true, note:'no email found' }), { status:200, headers:{ 'Content-Type':'application/json' }});
  }

  // find most recent order for this email
  const row = await env.DB.prepare(`SELECT order_id FROM orders WHERE email = ? ORDER BY created_at DESC LIMIT 1`).bind(email).first();
  if (!row) {
    const key = `inbound/unlinked/${Date.now()}.json`;
    await env.R2.put(key, JSON.stringify(parsed), { httpMetadata:{ contentType: 'application/json' }});
    return new Response(JSON.stringify({ ok:true, note:'no order found for email' }), { status:200, headers:{ 'Content-Type':'application/json' }});
  }

  const order_id = row.order_id;
  // mark responded
  try { await env.DB.prepare(`UPDATE orders SET customer_responded = 1 WHERE order_id = ?`).bind(order_id).run(); } catch (e) {}

  // store inbound raw
  const key = `inbound/${order_id}/${Date.now()}.json`;
  try { await env.R2.put(key, JSON.stringify(parsed), { httpMetadata:{ contentType:'application/json' } }); } catch (e) {}

  // log inbound as email_attempt
  const subject = parsed.subject || 'Inbound reply';
  const snippet = (parsed.text || parsed.html || JSON.stringify(parsed)).slice(0,200);
  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts(order_id,email_to,subject,body_snippet,status,raw_r2_key)
      VALUES(?,?,?,?,?,?)
    `).bind(order_id, email, subject, snippet, 'inbound', key).run();
  } catch (e) {}

  return new Response(JSON.stringify({ ok:true }), { status:200, headers:{ 'Content-Type':'application/json' }});
}

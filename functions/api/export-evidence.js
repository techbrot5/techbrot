// functions/api/export-evidence.js
export async function onRequest(context) {
  const env = context.env;
  const req = context.request;
  const headerKey = req.headers.get('x-admin-key');
  if (headerKey !== env.ADMIN_API_KEY) return new Response('Unauthorized', { status:401 });

  const url = new URL(req.url);
  const order_id = url.searchParams.get('order_id');
  if (!order_id) return new Response('order_id query required', { status:400 });

  const acceptance = await env.DB.prepare(`SELECT * FROM acceptance_logs WHERE order_id = ?`).bind(order_id).all();
  const order = await env.DB.prepare(`SELECT * FROM orders WHERE order_id = ?`).bind(order_id).first();
  const emails = await env.DB.prepare(`SELECT * FROM email_attempts WHERE order_id = ? ORDER BY created_at ASC`).bind(order_id).all();

  return new Response(JSON.stringify({ order, acceptance: acceptance.results || [], emails: emails.results || [] }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

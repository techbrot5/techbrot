// functions/api/admin-list-orders.js
export async function onRequest(context) {
  const env = context.env;
  const req = context.request;
  if (req.headers.get('x-admin-key') !== env.ADMIN_API_KEY) return new Response('Unauthorized', { status:401 });

  const rows = await env.DB.prepare('SELECT order_id, email, paid, verified, created_at, next_email_index, customer_responded FROM orders ORDER BY created_at DESC LIMIT 200').all();
  return new Response(JSON.stringify(rows.results || []), { headers: {'Content-Type':'application/json'}});
}

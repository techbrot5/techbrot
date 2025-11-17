// functions/api/admin-get-order.js
export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env.DB;
  const r2 = env.R2;

  const pin = request.headers.get("x-admin-pin");
  if (!pin || pin !== env.ADMIN_PIN) return unauthorized();

  const url = new URL(request.url);
  const order_id = url.searchParams.get("order_id");
  const downloadKey = url.searchParams.get("download_key");

  if (!order_id) return new Response(JSON.stringify({ error: "order_id required" }), { status:400, headers:{ "Content-Type":"application/json" }});

  // Stream an R2 object directly if downloadKey provided
  if (downloadKey) {
    try {
      const obj = await r2.get(downloadKey);
      if (!obj) return new Response(JSON.stringify({ error: "not found" }), { status:404, headers:{ "Content-Type":"application/json" }});
      const ct = obj.httpMetadata?.contentType || "application/octet-stream";
      const buf = await obj.arrayBuffer();
      return new Response(buf, { headers: { "Content-Type": ct, "Content-Disposition": `attachment; filename="${downloadKey.split('/').pop()}"` } });
    } catch (e) {
      return new Response(JSON.stringify({ error: "r2 read failed" }), { status:500, headers:{ "Content-Type":"application/json" }});
    }
  }

  try {
    const orderRow = await db.prepare(`SELECT * FROM orders WHERE order_id = ? LIMIT 1`).bind(order_id).first();
    const acceptance = (await db.prepare(`SELECT * FROM acceptance_records WHERE stripe_session_id = ?`).bind(orderRow?.stripe_session_id || "").all()).results || [];
    const emails = (await db.prepare(`SELECT * FROM email_attempts WHERE order_id = ? ORDER BY id DESC`).bind(order_id).all()).results || [];
    const vlogs = (await db.prepare(`SELECT * FROM verification_logs WHERE order_id = ? ORDER BY id DESC`).bind(order_id).all()).results || [];

    const r2Files = [];
    const list1 = await r2.list({ prefix: `email_attempts/${order_id}` });
    for (const o of list1.objects || []) r2Files.push({ key: o.key, size: o.size });
    const list2 = await r2.list({ prefix: `orders/${order_id}` });
    for (const o of list2.objects || []) r2Files.push({ key: o.key, size: o.size });

    return new Response(JSON.stringify({
      ok:true,
      order: orderRow || null,
      acceptance_records: acceptance,
      email_attempts: emails,
      verification_logs: vlogs,
      r2_files: r2Files
    }, null, 2), { headers: { "Content-Type":"application/json" }});
  } catch (e) {
    console.error("admin-get-order error", e);
    return new Response(JSON.stringify({ error: "server error" }), { status:500, headers:{ "Content-Type":"application/json" }});
  }

  function unauthorized(){ return new Response(JSON.stringify({ error:"unauthorized" }), { status:401, headers:{ "Content-Type":"application/json" } }); }
}

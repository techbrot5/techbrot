// functions/api/admin-search-orders.js
// Enhanced search — supports q, filter, from, to, min, max
export async function onRequestGet(context){
  const { request, env } = context;
  const db = env.DB;

  const pin = request.headers.get("x-admin-pin");
  if (!pin || pin !== env.ADMIN_PIN) return unauthorized();

  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  const filter = url.searchParams.get("filter") || "";
  const from = url.searchParams.get("from") || "";
  const to = url.searchParams.get("to") || "";
  const min = url.searchParams.get("min") || "";
  const max = url.searchParams.get("max") || "";

  try {
    let where = [];
    const binds = [];

    if (q) {
      where.push("(order_id LIKE ? OR email LIKE ? OR stripe_session_id LIKE ?)");
      binds.push('%'+q+'%','%'+q+'%','%'+q+'%');
    }
    if (filter === "verified") { where.push("verified = 1"); }
    if (filter === "unverified") { where.push("(verified IS NULL OR verified = 0)"); }
    if (from) { where.push("date(created_at) >= date(?)"); binds.push(from); }
    if (to) { where.push("date(created_at) <= date(?)"); binds.push(to); }
    if (min) { where.push("amount >= ?"); binds.push(Number(min)); }
    if (max) { where.push("amount <= ?"); binds.push(Number(max)); }

    const whereClause = where.length ? "WHERE " + where.join(" AND ") : "";
    const sql = `SELECT order_id, email, amount, currency, verified, created_at, stripe_session_id FROM orders ${whereClause} ORDER BY created_at DESC LIMIT 500`;
    const r = await db.prepare(sql).bind(...binds).all();
    return new Response(JSON.stringify({ ok:true, results: r.results || [] }), { headers:{ "Content-Type":"application/json" }});
  } catch (e) {
    console.error("admin-search-orders", e);
    return new Response(JSON.stringify({ error:"server error" }), { status:500, headers:{ "Content-Type":"application/json" }});
  }

  function unauthorized(){ return new Response(JSON.stringify({ error:"unauthorized" }), { status:401, headers:{ "Content-Type":"application/json" } }); }
}

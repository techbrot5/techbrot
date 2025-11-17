// functions/api/admin-resend-verify.js
// Re-sends the verification email (uses token in orders; regenerates token if missing)
import sendEmail from "./postmark.js";

export async function onRequestPost(context){
  const { request, env } = context;
  const db = env.DB;

  const pin = request.headers.get("x-admin-pin");
  if (!pin || pin !== env.ADMIN_PIN) return unauthorized();

  const body = await request.json().catch(()=>({}));
  const order_id = (body.order_id || "").toString();

  if (!order_id) return new Response(JSON.stringify({ error: "order_id required" }), { status:400, headers:{ "Content-Type":"application/json" }});

  try {
    const row = await db.prepare(`SELECT * FROM orders WHERE order_id = ? LIMIT 1`).bind(order_id).first();
    if (!row) return new Response(JSON.stringify({ error: "order not found" }), { status:404, headers:{ "Content-Type":"application/json" }});

    // If no token, create one and update DB
    let token = row.verification_token || null;
    if (!token) {
      token = (typeof crypto?.randomUUID === "function") ? crypto.randomUUID() : (Math.random().toString(36).slice(2)+Date.now());
      const ttlDays = Number(env.VERIFY_TOKEN_TTL_DAYS||7);
      const expiresAt = new Date(Date.now() + ttlDays*24*3600*1000).toISOString();
      await db.prepare(`UPDATE orders SET verification_token = ?, token_expires_at = ? WHERE order_id = ?`).bind(token, expiresAt, order_id).run();
    }

    const verifyUrl = (env.SITE_URL || "").replace(/\/$/,"") + `/verify?order_id=${encodeURIComponent(order_id)}&token=${encodeURIComponent(token)}`;

    const html = `<div style="font-family:system-ui,Arial"><h2>Please verify your TechBrot order</h2><p>Order ID: <strong>${escapeHtml(order_id)}</strong></p><p><a href="${escapeHtml(verifyUrl)}" style="display:inline-block;padding:12px 16px;border-radius:8px;background:#0fd46c;color:#042;font-weight:700;text-decoration:none">Verify & Authorize</a></p></div>`;

    const res = await sendEmail(env, {
      to: row.email,
      subject: `Please verify your TechBrot Order ${order_id}`,
      html,
      order_id
    });

    // Log email_attempt
    try {
      await db.prepare(`INSERT INTO email_attempts (order_id,email_to,subject,body_snippet,status,provider_event_id,raw_r2_key) VALUES (?,?,?,?,?,?,?)`)
        .bind(order_id, row.email, `Verify Order ${order_id}`, (stripHtml(html)||"").slice(0,200), res.ok ? "sent":"failed", res.provider_id || null, res.r2_initial || res.r2key || null)
        .run();
    } catch(e){ console.warn("email_attempts log failed", e); }

    return new Response(JSON.stringify({ ok:true, sent: res }), { headers:{ "Content-Type":"application/json" }});
  } catch (e) {
    console.error("resend-verify error", e);
    return new Response(JSON.stringify({ error: "server error" }), { status:500, headers:{ "Content-Type":"application/json" }});
  }

  function unauthorized(){ return new Response(JSON.stringify({ error:"unauthorized" }), { status:401, headers:{ "Content-Type":"application/json" } }); }
  function stripHtml(html){ return String(html||"").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim(); }
  function escapeHtml(s){ if (s==null) return ""; return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
}

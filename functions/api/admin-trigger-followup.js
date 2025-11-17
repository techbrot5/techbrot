// functions/api/admin-trigger-followup.js
// Trigger follow-up emails for an order (calls your sendEmail or cron logic)
// Here we send a simple follow-up content; you can replace with your cron-call.
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

    const html = `<div style="font-family:system-ui,Arial"><h3>Friendly reminder — TechBrot</h3><p>Hi, this is a reminder about your order ${escapeHtml(order_id)}. If you need help contact support@techbrot.com</p></div>`;

    const res = await sendEmail(env, {
      to: row.email,
      subject: `Reminder: Action for Order ${order_id}`,
      html,
      order_id
    });

    // Log
    try {
      await db.prepare(`INSERT INTO email_attempts (order_id,email_to,subject,body_snippet,status,provider_event_id,raw_r2_key) VALUES (?,?,?,?,?,?,?)`)
        .bind(order_id, row.email, `Follow-up — ${order_id}`, (stripHtml(html)||"").slice(0,200), res.ok ? "sent":"failed", res.provider_id || null, res.r2_initial || res.r2key || null)
        .run();
    } catch(e){ console.warn("email_attempts log failed", e); }

    return new Response(JSON.stringify({ ok:true, send: res }), { headers:{ "Content-Type":"application/json" }});
  } catch (e) {
    console.error("trigger-followup error", e);
    return new Response(JSON.stringify({ error:"server error" }), { status:500, headers:{ "Content-Type":"application/json" }});
  }

  function unauthorized(){ return new Response(JSON.stringify({ error:"unauthorized" }), { status:401, headers:{ "Content-Type":"application/json" } }); }
  function stripHtml(html){ return String(html||"").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim(); }
  function escapeHtml(s){ if (s==null) return ""; return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
}

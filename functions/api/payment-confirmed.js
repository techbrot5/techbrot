// ------------------------------------------------------------------
// functions/api/payment-confirmed.js
// Handles post-payment confirmation, verification token creation,
// email sending, and evidence-safe logging.
// ------------------------------------------------------------------

import sendEmail from "./postmark.js";

export async function onRequestPost(context) {
  // ------------------------------------------------------------------
  // : ENV + REQUEST
  // ------------------------------------------------------------------
  const env = context.env;
  const req = context.request;
  const body = await req.json().catch(() => null);

  if (!body || !body.order_id || !body.email) {
    return new Response(
      JSON.stringify({ error: "order_id and email required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // ------------------------------------------------------------------
  // : SANITIZED INPUTS
  // ------------------------------------------------------------------
  const order_id = String(body.order_id);
  const email = String(body.email);
  const name = body.name || "";
  const amount = Number(body.amount || 0);
  const currency = body.currency || "USD";
  const session_id = body.session_id || null;

  // ------------------------------------------------------------------
  // : UPSERT ORDER INTO D1
  // ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      INSERT INTO orders 
        (order_id, email, name, paid, amount, currency, stripe_session_id, created_at, next_email_index)
      VALUES (?, ?, ?, 1, ?, ?, ?, datetime('now'), 1)
      ON CONFLICT(order_id) DO UPDATE SET 
        paid = 1,
        stripe_session_id = COALESCE(excluded.stripe_session_id, stripe_session_id)
    `)
      .bind(order_id, email, name, amount, currency, session_id)
      .run();
  } catch (e) {
    console.error("DB insert order error:", e);
  }

  // ------------------------------------------------------------------
  // : GENERATE ONE-TIME VERIFICATION TOKEN
  // ------------------------------------------------------------------
  const token =
    typeof crypto?.randomUUID === "function"
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now();

  const ttlDays = Number(env.VERIFY_TOKEN_TTL_DAYS || 7);
  const expiresAt = new Date(
    Date.now() + ttlDays * 24 * 3600 * 1000
  ).toISOString();

  try {
    await env.DB.prepare(`
      UPDATE orders 
      SET verification_token = ?, token_expires_at = ?
      WHERE order_id = ?
    `)
      .bind(token, expiresAt, order_id)
      .run();
  } catch (e) {
    console.warn("token store error:", e);
  }

  // ------------------------------------------------------------------
  // : BUILD VERIFICATION URL
  // ------------------------------------------------------------------
  const verifyUrl =
    `${env.SITE_URL.replace(/\/$/, "")}/verify` +
    `?order_id=${encodeURIComponent(order_id)}` +
    `&token=${encodeURIComponent(token)}`;

  // ------------------------------------------------------------------
  // : BUILD EMAIL HTML
  // ------------------------------------------------------------------
  const htmlConfirm = `
    <p>Hi ${name || ""},</p>
    <p>
      Thanks — we received your payment of 
      <strong>${(amount / 100).toFixed(2)} ${currency}</strong>.<br>
      Order ID: <strong>${order_id}</strong>.
    </p>
    <p>Please click below to verify & authorize this purchase:</p>
    <p>
      <a href="${verifyUrl}"
        style="display:inline-block;padding:12px 18px;border-radius:8px;
               text-decoration:none;background:#0fd46c;color:#042;font-weight:bold;">
        Verify & Authorize
      </a>
    </p>
    <p>If you did not make this payment, contact support@techbrot.com immediately.</p>
    <hr/>
    <p style="font-size:12px;color:#666;">
      This email + verification link serve as authorization evidence.<br>
      Token expires: ${expiresAt} UTC.
    </p>
  `;

  // ------------------------------------------------------------------
  // : SEND EMAIL VIA POSTMARK WRAPPER
  // ------------------------------------------------------------------
  const sent1 = await sendEmail(env, {
    to: email,
    subject: `TechBrot — Order ${order_id} Confirmed — Verify`,
    html: htmlConfirm,
    text: null,
    order_id
  });

  // ------------------------------------------------------------------
  // : LOG EMAIL ATTEMPT IN D1
  // ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      INSERT INTO email_attempts
        (order_id, email_to, subject, body_snippet, status, provider_event_id, raw_r2_key)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `)
      .bind(
        order_id,
        email,
        `Order ${order_id} Confirmed`,
        htmlConfirm.slice(0, 200),
        sent1.ok ? "sent" : "failed",
        sent1.provider_id || `postmark_${Date.now()}`,
        sent1.r2key
      )
      .run();
  } catch (e) {
    console.warn("log email attempt error:", e);
  }

  // ------------------------------------------------------------------
  // : UPDATE last_email_sent_at
  // ------------------------------------------------------------------
  try {
    await env.DB.prepare(`
      UPDATE orders 
      SET last_email_sent_at = datetime('now')
      WHERE order_id = ?
    `)
      .bind(order_id)
      .run();
  } catch (e) {
    console.warn("update last_email_sent_at error:", e);
  }

  // ------------------------------------------------------------------
  // : SUCCESS RESPONSE
  // ------------------------------------------------------------------
  return new Response(
    JSON.stringify({ ok: true, order_id }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

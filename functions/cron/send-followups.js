// functions/cron/send-followups.js
// Sends follow-up emails for paid orders.

import sendEmail from "../api/postmark.js";

export default {
  async scheduled(event, env, ctx) {

    const rows = await env.DB.prepare(`
      SELECT *
      FROM orders
      WHERE paid = 1
        AND customer_responded = 0
        AND next_email_index <= 5
    `).all();

    const now = Date.now();

    for (const order of rows.results || []) {

      const last = order.last_email_sent_at
        ? new Date(order.last_email_sent_at).getTime()
        : 0;

      if (last && now - last < 24 * 3600 * 1000) continue;

      const idx = order.next_email_index || 1;

      const subject =
        idx === 1
          ? `Please verify your TechBrot Order ${order.order_id}`
          : `Reminder #${idx - 1} — Verify Order ${order.order_id}`;

      const verifyUrl =
        `${env.SITE_URL.replace(/\/$/, "")}/verify?order_id=${encodeURIComponent(order.order_id)}`;

      const html = `
        <p>Hello,</p>
        <p>Please verify your TechBrot order so we can proceed with activation.</p>
        <p>
          <a href="${verifyUrl}"
             style="padding:10px 16px;background:#0fd46c;color:#042;border-radius:6px;text-decoration:none;">
             Verify Order
          </a>
        </p>
        <p>If you already verified, you may ignore this reminder.</p>
      `;

      const sent = await sendEmail(env, {
        to: order.email,
        subject,
        html,
        text: null,
        order_id: order.order_id
      });

      try {
        await env.DB.prepare(`
          INSERT INTO email_attempts
            (order_id, email_to, subject, body_snippet, status, provider_event_id, raw_r2_key)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `)
          .bind(
            order.order_id,
            order.email,
            subject,
            html.slice(0, 200),
            sent.ok ? "sent" : "failed",
            sent.provider_id || `postmark_${Date.now()}`,
            sent.r2key
          )
          .run();
      } catch (e) {
        console.warn("email_attempt logging failed:", e);
      }

      const nextIdx = Math.min(5, idx + 1);

      try {
        await env.DB.prepare(`
          UPDATE orders
          SET next_email_index = ?,
              last_email_sent_at = datetime('now')
          WHERE order_id = ?
        `)
          .bind(nextIdx, order.order_id)
          .run();
      } catch (e) {
        console.warn("order update failed:", e);
      }
    }

    try {
      await env.DB.prepare(`
        INSERT INTO cron_history (processed, notes)
        VALUES (?, ?)
      `)
        .bind(rows.results.length, "send-followups run")
        .run();
    } catch (e) {
      console.warn("cron history insert failed:", e);
    }
  }
};

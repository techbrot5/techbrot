// ------------------------------------------------------------------
// functions/cron/send-followups.js
// Sends two follow-up reminders only if:
//   - The order is paid
//   - The customer has NOT verified
//   - The customer has NOT replied
//   - next_email_index is 2 (day 1 return) or 3 (day 3 final)
// Stops completely once verified or responded.
// ------------------------------------------------------------------

import { sendEmail } from "../api/postmark.js";

export default {
  async scheduled(event, env, ctx) {

    // Select orders that truly need follow-ups
    const rows = await env.DB.prepare(`
      SELECT *
      FROM orders
      WHERE paid = 1
        AND verified = 0
        AND customer_responded = 0
        AND next_email_index BETWEEN 2 AND 3
    `).all();

    const now = Date.now();

    for (const order of rows.results || []) {

      // 24-hour cooldown from last_email_sent_at
      const last = order.last_email_sent_at
        ? new Date(order.last_email_sent_at).getTime()
        : 0;

      if (last && now - last < 24 * 3600 * 1000) {
        continue;
      }

      const idx = order.next_email_index || 2;

      const subject =
        idx === 2
          ? `Reminder — Verify your TechBrot Order ${order.order_id}`
          : `Final reminder — Verify Order ${order.order_id}`;

      const verifyUrl =
        `${env.SITE_URL.replace(/\/$/, "")}/verify?order_id=${encodeURIComponent(order.order_id)}`;

      const html = `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;color:#111;line-height:1.42">
          <div style="max-width:680px;margin:0 auto;padding:20px">
            <h2 style="margin:0 0 12px 0">
              ${idx === 2 ? "Reminder: Please verify your order" : "Final reminder: Please verify your order"}
            </h2>

            <p>
              Please verify your TechBrot order so we can proceed with activation.
              Verification also serves as your authorization record.
            </p>

            <p style="margin-top:14px">
              <a href="${verifyUrl}" 
                 style="background:#0fd46c;color:#042;padding:12px 18px;
                        border-radius:8px;text-decoration:none;font-weight:600">
                Verify Order
              </a>
            </p>

            <p style="margin-top:16px;color:#666;font-size:13px">
              If you have already verified, you may ignore this message.
            </p>

            <footer style="margin-top:22px;color:#aaa;font-size:12px">
              TechBrot • Certified QuickBooks ProAdvisor
            </footer>
          </div>
        </div>
      `;

      // Send follow-up
      const sent = await sendEmail(env, {
        to: order.email,
        subject,
        html,
        text: null,
        order_id: order.order_id
      });

      // Log into email_attempts
      try {
        await env.DB.prepare(`
          INSERT INTO email_attempts
            (order_id, email_to, subject, body_snippet, status, provider_event_id, raw_r2_key)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `).bind(
          order.order_id,
          order.email,
          subject,
          html.replace(/<[^>]+>/g, "").slice(0, 200),
          sent.ok ? "sent" : "failed",
          sent.provider_id || `postmark_${Date.now()}`,
          sent.r2key
        ).run();
      } catch (e) {
        console.warn("email_attempt logging failed:", e);
      }

      // Move to next follow-up (2 → 3 → stop)
      const nextIdx = Math.min(3, idx + 1);

      try {
        await env.DB.prepare(`
          UPDATE orders
          SET next_email_index = ?,
              last_email_sent_at = datetime('now')
          WHERE order_id = ?
        `).bind(nextIdx, order.order_id).run();
      } catch (e) {
        console.warn("order update failed:", e);
      }
    }

    // Save cron run history
    try {
      await env.DB.prepare(`
        INSERT INTO cron_history (processed, notes)
        VALUES (?, ?)
      `).bind(rows.results.length, "send-followups run").run();
    } catch (e) {
      console.warn("cron history insert failed:", e);
    }
  }
};

// functions/cron/send-followups.js
import { sendEmailMailerSend } from '../api/mailersend.js';

export default {
  async scheduled(event, env, ctx) {
    // select orders that are paid, not verified, and still in follow-up window
    const rows = await env.DB.prepare(`
      SELECT * FROM orders
      WHERE paid = 1 AND verified = 0 AND customer_responded = 0 AND next_email_index <= 5
    `).all();

    const now = Date.now();
    for (const order of rows.results || []) {
      const last = order.last_email_sent_at ? new Date(order.last_email_sent_at).getTime() : 0;
      if (last && (now - last) < 24*3600*1000) continue; // wait 24h

      const idx = order.next_email_index || 1;
      const subject = (idx === 1) ? `Please verify your TechBrot Order ${order.order_id}` : `Reminder #${idx-1} — Verify Order ${order.order_id}`;
      const html = `<p>Please verify your order by clicking this link: <a href="${env.SITE_URL}/verify?order_id=${order.order_id}">Verify my order</a></p>`;

      const sent = await sendEmailMailerSend(env, { to: order.email, subject, html, order_id: order.order_id });

      try {
        await env.DB.prepare(`
          INSERT INTO email_attempts(order_id, email_to, subject, body_snippet, status, raw_r2_key)
          VALUES (?, ?, ?, ?, ?, ?)
        `).bind(order.order_id, order.email, subject, html.slice(0,200), sent.ok ? 'sent' : 'failed', sent.r2key).run();
      } catch (e) {}

      const nextIdx = Math.min(5, (order.next_email_index || 1) + 1);
      try { await env.DB.prepare(`UPDATE orders SET next_email_index = ?, last_email_sent_at = datetime('now') WHERE order_id = ?`).bind(nextIdx, order.order_id).run(); } catch (e) {}
    }

    try { await env.DB.prepare(`INSERT INTO cron_history (processed, notes) VALUES (?, ?)`).bind(rows.results.length, 'send-followups run').run(); } catch (e) {}
  }
};

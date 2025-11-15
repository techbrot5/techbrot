// functions/api/mailersend.js
export async function sendEmailMailerSend(env, { to, subject, html, text, order_id }) {
  const API = 'https://api.mailersend.com/v1/email';
  const body = {
    from: { email: env.MAILERSEND_FROM_EMAIL },
    to: [{ email: to }],
    subject,
    html,
    text
  };

  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.MAILERSEND_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  let json = null;
  try { json = await res.json(); } catch (e) { json = { parseError: true }; }

  const key = `email_attempts/${order_id || 'no-order'}/${Date.now()}.json`;
  try {
    await env.R2.put(key, JSON.stringify({ request: body, response: json, status: res.status }), {
      httpMetadata: { contentType: 'application/json' }
    });
  } catch (e) {
    // non-fatal: log in worker logs
    console.warn('R2 save failed', e);
  }

  return { ok: res.ok, status: res.status, json, r2key: key };
}

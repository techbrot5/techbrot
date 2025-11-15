// functions/api/mailersend.js

/**
 * sendEmailMailerSend
 * Unified MailerSend wrapper used by:
 *  - payment-confirmed.js
 *  - send-followups.js
 *  - any future transactional emails
 *
 * Fully aligned with TechBrot evidence logging conventions.
 */

export async function sendEmailMailerSend(env, { to, subject, html, text, order_id }) {
  const API = "https://api.mailersend.com/v1/email";

  // ------------------------------------------------------------------
  // SANITIZE + BUILD PAYLOAD
  // ------------------------------------------------------------------
  const cleanSubject = String(subject || "").slice(0, 200);
  const cleanHtml = typeof html === "string" ? html.slice(0, 20000) : "";
  const cleanText =
    typeof text === "string"
      ? text.slice(0, 20000)
      : cleanHtml.replace(/<[^>]+>/g, "").slice(0, 20000);

  const body = {
    from: { email: env.MAILERSEND_FROM_EMAIL },
    to: [{ email: to }],
    subject: cleanSubject,
    html: cleanHtml,
    text: cleanText
  };

  // ------------------------------------------------------------------
  // SEND EMAIL
  // ------------------------------------------------------------------
  let responseJson = null;
  let status = 0;

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.MAILERSEND_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    status = res.status;

    try {
      responseJson = await res.json();
    } catch (err) {
      responseJson = { parseError: true };
    }
  } catch (err) {
    // catastrophic network failure
    responseJson = {
      fatal: true,
      message: err.message || "MailerSend fetch error"
    };
    status = 500;
  }

  // ------------------------------------------------------------------
  // EXTRACT PROVIDER MESSAGE ID (if present)
  // ------------------------------------------------------------------
  let providerId = null;

  try {
    providerId =
      responseJson?.data?.[0]?.id ||
      responseJson?.message_id ||
      null;
  } catch (e) {
    providerId = null;
  }

  // ------------------------------------------------------------------
  // SAVE FULL PROVIDER LOG TO R2 (your repo standard)
  // ------------------------------------------------------------------
  const r2key = `email_attempts/${order_id || "no-order"}/${Date.now()}.json`;

  try {
    await env.R2.put(
      r2key,
      JSON.stringify(
        {
          request: body,
          response: responseJson,
          status,
          provider_id: providerId
        },
        null,
        2
      ),
      { httpMetadata: { contentType: "application/json" } }
    );
  } catch (err) {
    console.warn("R2 save failed", err);
  }

  // ------------------------------------------------------------------
  // FINAL RETURN
  // ------------------------------------------------------------------
  return {
    ok: status >= 200 && status < 300,
    status,
    json: responseJson,
    provider_id: providerId,
    r2key
  };
}

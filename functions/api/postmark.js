// functions/api/postmark.js
//
// Unified Postmark email sender
// Used for payment confirmation, verification, follow-ups,
// and all transactional evidence-logged emails.
//

export async function sendEmail(env, { to, subject, html, text, order_id }) {
  const API = "https://api.postmarkapp.com/email";

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
    From: env.POSTMARK_FROM_EMAIL,  // REQUIRED
    To: to,
    Subject: cleanSubject,
    HtmlBody: cleanHtml,
    TextBody: cleanText,
    MessageStream: "transactional"
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
        "X-Postmark-Server-Token": env.POSTMARK_API_TOKEN,
        "Accept": "application/json",
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
    responseJson = {
      fatal: true,
      message: err.message || "Postmark fetch error"
    };
    status = 500;
  }

  // ------------------------------------------------------------------
  // EXTRACT PROVIDER MESSAGE ID
  // ------------------------------------------------------------------
  let providerId = null;
  try {
    providerId = responseJson?.MessageID || null;
  } catch (_) {
    providerId = null;
  }

  // ------------------------------------------------------------------
  // SAVE FULL PROVIDER LOG TO R2 (EVIDENCE)
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

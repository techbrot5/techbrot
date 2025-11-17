// functions/api/postmark.js
//
// Unified Postmark email sender
// Supports:
//   • Raw HTML emails
//   • Postmark Templates (TemplateId / TemplateAlias + TemplateModel)
// Includes R2 logging for dispute evidence.
//

export async function sendEmail(
  env,
  {
    to,
    subject,
    html,
    text,
    order_id,
    templateId = null,
    templateAlias = null,
    templateModel = null
  }
) {
  const API = "https://api.postmarkapp.com/email";

  const cleanSubject = subject ? String(subject).slice(0, 200) : "";
  const cleanHtml =
    typeof html === "string" ? html.slice(0, 20000) : "";
  const cleanText =
    typeof text === "string"
      ? text.slice(0, 20000)
      : cleanHtml.replace(/<[^>]+>/g, "").slice(0, 20000);

  // -------------------------------
  // 1) Choose TEMPLATE MODE or RAW MODE
  // -------------------------------
  let body = {
    From: env.POSTMARK_FROM_EMAIL,
    To: to,
    MessageStream: "outbound"
  };

  // TEMPLATE MODE (preferred)
  if ((templateId || templateAlias) && templateModel) {
    if (templateId) body.TemplateId = Number(templateId);
    if (templateAlias) body.TemplateAlias = String(templateAlias);

    body.TemplateModel = templateModel;
  }
  // RAW HTML MODE
  else {
    body.Subject = cleanSubject;
    body.HtmlBody = cleanHtml;
    body.TextBody = cleanText;
  }

  // -------------------------------
  // 2) Send request to Postmark
  // -------------------------------
  let responseJson = null;
  let status = 0;

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "X-Postmark-Server-Token": env.POSTMARK_API_TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    status = res.status;

    try {
      responseJson = await res.json();
    } catch {
      responseJson = { parseError: true };
    }
  } catch (err) {
    responseJson = {
      fatal: true,
      message: err.message || "Postmark fetch error"
    };
    status = 500;
  }

  const providerId = responseJson?.MessageID ?? null;

  // -------------------------------
  // 3) Log to R2 (evidence logging)
  // -------------------------------
  const r2key = `email_attempts/${order_id || "no-order"}/${Date.now()}.json`;

  try {
    await env.R2.put(
      r2key,
      JSON.stringify(
        {
          mode: templateId || templateAlias ? "template" : "raw",
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

  return {
    ok: status >= 200 && status < 300,
    status,
    json: responseJson,
    provider_id: providerId,
    r2key
  };
}

export default sendEmail;

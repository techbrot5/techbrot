/* ============================================================================
   TechBrot — Cloudflare Pages Function · POST /api/contact
   Same-platform lead endpoint for the tb-forms.js payload (also serves
   /api/file-review and /api/pillar-lead, which re-export this handler).
   Front-end contract (src/assets/js/tb-forms.js): POSTs JSON as
   Content-Type: text/plain (no CORS preflight), expects { ok: true }.

   TO GO LIVE:
     1. In Cloudflare Pages → Settings → Environment variables, set ONE delivery:
          APPS_SCRIPT_URL  = the existing Google Apps Script /exec URL  (keeps the
                             current backend; simplest), OR
          RESEND_API_KEY (+ LEAD_TO, LEAD_FROM) = send the lead by email via Resend.
        With neither set, the function accepts + logs the lead (so the form flow
        works end-to-end in preview) but does not deliver.
     2. Point the form at this function: in src/_data/site.json set
          "formEndpoint": "/api/contact"
        (currently the Apps Script URL — left as the working fallback).
   ============================================================================ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = JSON.parse(await request.text());
  } catch {
    return json({ ok: false, error: "bad_payload" }, 400);
  }
  if (!data || typeof data !== "object") return json({ ok: false, error: "bad_payload" }, 400);

  // ── Spam guards (defense in depth; tb-forms.js also guards client-side) ──
  // Honeypot: a real submit never carries company_website (the JS strips it);
  // if it ever appears filled, drop silently as success so bots learn nothing.
  if (data.company_website) return json({ ok: true });
  // Time-trap: reject absurdly-fast submits (form rendered < 2s ago).
  if (data._submitted_at) {
    const dt = Date.now() - Date.parse(data._submitted_at);
    if (Number.isFinite(dt) && dt >= 0 && dt < 1500) return json({ ok: true });
  }

  // ── Validation ──
  const email = String(data.email || "").trim();
  if (!EMAIL_RE.test(email)) return json({ ok: false, error: "email" }, 422);
  // message required for contact intent; email-only is fine for pillar leads.
  const intent = String(data.intent || data.source_type || "");

  // ── Delivery (configure via env; see header) ──
  try {
    if (env && env.APPS_SCRIPT_URL) {
      const r = await fetch(env.APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "content-type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error("apps_script_" + r.status);
    } else if (env && env.RESEND_API_KEY) {
      await sendViaResend(env, data, intent);
    } else {
      // No delivery wired yet — accept so the form flow works; founder sets env.
      console.log("[lead] no-delivery-configured:", JSON.stringify(data));
    }
  } catch (err) {
    return json({ ok: false, error: "delivery_failed", detail: String(err && err.message || err) }, 502);
  }

  return json({ ok: true });
}

// Non-POST → 405 (the endpoint is submit-only).
export function onRequest({ request }) {
  if (request.method === "POST") return; // handed to onRequestPost
  return json({ ok: false, error: "method_not_allowed" }, 405);
}

async function sendViaResend(env, data, intent) {
  const to = env.LEAD_TO || "info@techbrot.com";
  const from = env.LEAD_FROM || "leads@techbrot.com";
  const lines = Object.entries(data)
    .filter(([k]) => !k.startsWith("_") && k !== "company_website")
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject: `New lead${intent ? ` · ${intent}` : ""} — ${data.name || data.email}`,
      text: lines,
    }),
  });
  if (!r.ok) throw new Error("resend_" + r.status);
}

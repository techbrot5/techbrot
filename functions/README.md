# Cloudflare Pages Functions — TechBrot form handler

Same-platform backend for the lead forms. Cloudflare Pages auto-deploys everything
under `functions/` as serverless routes alongside the built `_site`.

## Routes
- `POST /api/contact` — the lead handler (validation + spam guard + delivery → `{ ok: true }`).
- `POST /api/file-review`, `POST /api/pillar-lead` — re-export the same handler (routed by the
  payload's `intent` / `source_type`). The front-end (`src/assets/js/tb-forms.js`) actually posts
  every form to a single endpoint, so one handler covers all three.

## Contract (must not change without updating `tb-forms.js`)
- Front-end POSTs `JSON.stringify(payload)` with `Content-Type: text/plain;charset=utf-8`
  (avoids a CORS preflight) and treats `{ ok: true }` (or `{ result: "success" }`) as success.
- Payload keys: `name, company, email, phone, revenue_range, industry, qb_status, timeline,
  message, consent, services[]`, the hidden `[data-meta]` fields (`intent, source_page,
  source_type, funnel_stage, …`), plus `_submitted_at`, `_page_url`. The honeypot
  `company_website` is **stripped client-side** and never sent.

## Going live (founder)
1. **Point the form at this function** — in `src/_data/site.json` set:
   ```json
   "formEndpoint": "/api/contact"
   ```
   (Currently the working Google Apps Script `/exec` URL, left as the fallback so forms keep
   working until you switch.)
2. **Configure delivery** in Cloudflare Pages → Settings → Environment variables — pick ONE:
   - `APPS_SCRIPT_URL` = the existing Apps Script `/exec` URL → the function forwards to it
     (keeps the current backend; simplest migration).
   - `RESEND_API_KEY` (+ optional `LEAD_TO`, `LEAD_FROM`) = send the lead by email via Resend
     (swap `sendViaResend` for SendGrid/Postmark if preferred).
   - With **neither** set, the function accepts + logs the lead (form flow works end-to-end in
     preview) but does not deliver.

## Notes
- Spam: honeypot (`company_website`) + a sub-1.5s time-trap, both drop silently as success.
- Non-POST methods → `405`.
- `tb-forms.js` only POSTs in production (`window.TB_ENV === "production"`); in preview it logs the
  exact would-send payload to the console and shows the success panel.

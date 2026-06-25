# FORM STRATEGY — TechBrot (standing · portable to any conversion site)
_Recorded 2026-06-25 (founder ruling). The rule + the reasoning, reusable on other
projects (e.g. Westgate)._

## WHY (the principle)
A services firm wins on CALLS and booked discovery — not on long forms. Every extra
field is friction that drops completion. So: **call-first, minimal-friction forms,
and capture attribution from signals the browser already has — never by asking the
user.** A field the user must fill is a tax on conversion; a hidden field derived
from the URL/referrer is free. Self-reported "how did you find us" is also low-quality
data (people guess); referrer/UTM-derived attribution is more accurate AND frictionless.

## STANDING RULES
1. **Two form shapes, both lean:**
   - **MINIMAL** (`partials/intake-minimal.njk`) — the default conversion form on
     money/pillar/triage keep-pages. VISIBLE = **Full name · Work email** (required)
     + **"Which page convinced you?"** (optional) + **"Anything specific?"** (optional)
     + consent. Nothing else visible.
   - **FULL** (`partials/intake-form.njk`) — only on the deliberate full-intake pages
     (`/contact/`, `/quickbooks/file-review/`). Keeps richer QUALIFICATION the call
     needs (company, phone, service checkboxes, revenue band, industry, timeline) —
     but NOT friction/attribution selects.
2. **Never ASK for attribution — auto-capture it HIDDEN.** Removed from view on both
   forms: "Months behind", "QuickBooks version/status", "How did you find us?"
   (lead_source), "Did an AI tool recommend us?" (ai_recommended), "Which AI tool?"
   (ai_tool). `lead_source` / `ai_tool` / `ai_recommended` are now hidden inputs that
   `tb-forms.js deriveAttribution()` fills from: explicit `?lead_source=`/`?ai_tool=`
   URL params first, then the **referrer host** — a visit from chatgpt.com / claude.ai
   / perplexity.ai / gemini / copilot → `ai-assistant` + the tool + `ai_recommended=yes`;
   a search-engine referrer → `search`; any other external site → `referral`. Best-
   effort + HONEST: only set when a real signal exists; never overwrite an explicit
   value. (AI-channel attribution is the firm's differentiator — keep it, just don't
   make the user type it.)
3. **Call-first everywhere else.** Most pages carry NO form — a phone CTA only
   (`(877) 751-5575`). Forms only on the deliberate keep-set (`_data/formPages.json`
   gates the t-money keep-list; pillars/triage/contact/file-review by template).
4. **One JS engine, one endpoint.** Every conversion form is `data-form="contact-
   discovery"` → `tb-forms.js` → `site.formEndpoint` (Google Apps Script). `collect()`
   sends a fixed key list; **absent fields are skipped**, so trimming a field just
   drops it from the payload (the append-by-key endpoint tolerates missing/extra keys
   — the contract "still works" without a schema migration).
5. **Honeypot, not CAPTCHA.** A visually-hidden `company_website` field; bots fill it,
   humans never see it, it's excluded from the payload. No user friction.
6. **Fail-closed env.** Preview (`TB_ENV != production`) logs the payload + fakes
   success, never POSTs. Production POSTs for real. Prove both before flip.

## VERIFICATION (every form change)
- Build + confirm VISIBLE field set per form on the BUILT page (not just source).
- Confirm hidden attribution inputs present + the JS derivation wired.
- Endpoint tolerance: `collect()` skips absent keys; the Apps Script appends by key,
  so removing fields needs no endpoint change. (Live POST test only when the payload
  SHAPE changes in a way the endpoint might reject — and delete any test rows after.)

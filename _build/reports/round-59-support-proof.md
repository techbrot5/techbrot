# Round 59 — SUPPORT/HELP SILO · PROOF SET (founder glance before fan-out)

Founder chose the **Support/Help silo (~67)** next (then glossary). This is the largest and most
reputation-sensitive growth silo: it targets the "QuickBooks support / customer service / help" query
family. Per v4 **Sheet 7**, the silo's job is **honest TRIAGE, not impersonation** — capture the searcher
by being the most honest answer (route Intuit-account intent to Intuit; convert file/books intent to an
independent paid ProAdvisor). Per the PACE proof-gate + the honest-triage special-review rule, I built a
**PROOF SET covering every type in the silo and STOPPED for your glance before fanning out the ~50 spokes.**

## PROOF SET (5 pages) — battery GREEN
**New "support-triage" type (the sensitive core):**
1. **`/quickbooks/support/how-to-contact-quickbooks-support/`** — the FLAGSHIP honest meta-guide. Maps Intuit's
   real support channels by product (QBO / Desktop / Payroll / Payments) + what each can/can't do + how to
   escalate, THEN the independent path. White-hat capture of the whole "contact QuickBooks support" query family.
2. **`/quickbooks/support/`** — the support HUB: states the triage proudly, two-column route (Intuit vs us),
   links the spokes.
3. **`/quickbooks/support/independent-quickbooks-help/`** — the paid independent lane, disclosure-first.

**Existing "error-code" type (content-quality check):**
4. **`/quickbooks/help/error-codes/6123/`** — cloned the proven h202 template; accurate Error 6123 content.

**New "help-symptom" type:**
5. **`/quickbooks/help/bank-feeds-not-working/`** — symptom/problem page (causes → ordered self-fix → when-to-call),
   cloned from the h202 Help shape (TechArticle + HowTo + FAQPage).

## PREVIEW URLS (LAN dev: http://192.168.11.1:8080)
- http://192.168.11.1:8080/quickbooks/support/how-to-contact-quickbooks-support/ ← **the flagship; please glance at the honesty here first**
- http://192.168.11.1:8080/quickbooks/support/
- http://192.168.11.1:8080/quickbooks/support/independent-quickbooks-help/
- http://192.168.11.1:8080/quickbooks/help/bank-feeds-not-working/
- http://192.168.11.1:8080/quickbooks/help/error-codes/6123/

## HONESTY — every Sheet-7 page rule enforced (grep-verified)
- (1) ATF amber disclosure banner: "TechBrot is an independent accounting firm of Certified QuickBooks
  ProAdvisors. We are not Intuit. For account, billing, or subscription issues, contact Intuit directly →"
  (links Intuit's real support, rel="noopener nofollow").
- (2) FIRST FAQ on every page = "Is this Intuit's official QuickBooks support?" → **No**, plainly.
- (3) "official" NEVER appears near TechBrot's offer — only as "Intuit's official support" (the route-away) and
  in the mandated FAQ. Trademark line present; no Intuit logo.
- (4) Phone CTA = **"Talk to a Certified ProAdvisor (independent firm)"** — never "QuickBooks support line".
  Added to the canonical CTA lexicon as a Sheet-7-mandated sanctioned label.
- (5) Schema provider/publisher = #organization (TechBrot) only — never a node implying Intuit operates the page.
- (6) Triage routes account/billing/login/subscription/software-bug → Intuit; file/books/errors/setup/migration/
  payroll-in-file → TechBrot (paid, fixed-fee).
- **NO fabricated Intuit phone numbers, hours, wait times, or "24/7" claims anywhere** — channels described
  generically; current specifics deferred to Intuit's official support link. (Per Sheet-7, /support/24-7-support/
  is DROPPED — we are not staffed 24/7; the honest /help/after-hours-help/ ships in fan-out instead.)
- founder-name-zero (David Westgate only in #david-westgate JSON-LD); canonical pricing only.

## DECISIONS / FIXES THIS ROUND
- Battery's first pass flagged 3 expected new-type items, all fixed: added the Sheet-7 phone-CTA label to
  `ctaLexicon.json` (sanctioned); added 5 intents to `intents.json` (qb-support, qb-support-contact,
  qb-support-independent, qb-help-bank-feeds, qb-error-6123); added the bofu `.call-breakout` handoff component
  to the hub + independent-help pages.
- The DROP/REPLACE table is honored: impersonation slugs (number, customer-support-number,
  speak-to-quickbooks-representative, talk-to-human, live-agent) are NOT built; the flagship + independent-help
  capture the demand honestly.

## VERIFICATION
- **BATTERY GREEN** (after the 3 fixes): cta-lexicon, intents, design-fidelity (all 5 carry a tier-correct
  handoff component), faq-flat, manifest, url-set, variety. CSS: no new CSS.
- a11y/overflow: chrome ENV-BLOCKED → static-proxy + byte-equivalence to the proven honest-triage template;
  joins flip-blocker #6's inferred-clean list.

## ⚑ STOP — FOUNDER GLANCE on the honest-triage support type before fan-out
This is the most reputation-sensitive type on the site, so I'm pausing for your spot-check (esp. the flagship).
If the honest-triage pattern is good, I'll **fan out the rest of the ~50 support/help pages**:
- **~16 new error codes** (6000, 6000-83, 6000-301, 6073, 6123✅, 6150, 12002, 12007, 12029, 15223, 15271, 9999,
  h101, h505, ps036, unrecoverable) on the proven error template.
- **~30 help-symptom pages** (cant-login, data-recovery, file-wont-open, payroll-failed, reconciliation-broken,
  duplicate-transactions, after-hours-help, cant-reach-intuit, proadvisor-vs-intuit-support, etc.).
- **support spokes** (after-hours-help with honest hours; the /support/<category> expansion is demand-gated, later).
- Wire the /quickbooks/help/ + /quickbooks/ + error-codes hubs to the new pages.
Then **Glossary expansion** (your queued next lane).

## COUNT
COUNT: total pages live = 322 · re-skinned (142) + growth this phase = 180 · pages added THIS turn = 5 support/help
proof pages (flagship + hub + independent-help + bank-feeds-not-working + error 6123) · remaining in support silo
≈ 47 (held for founder glance) · next = fan out support/help after glance, then glossary expansion.

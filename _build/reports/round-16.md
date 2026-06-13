# ROUND 16 — accounting + quickbooks silo elevation batch

═══════════════════════════════════════════════════════════════════════
## 📱 DEV SERVER LIVE — view on your phone: http://192.168.1.8:8080/
(eleventy --serve, 0.0.0.0:8080, live-reload — STILL RUNNING, not killed.
Only headless probe chrome killed between probes via kill_probe.ps1.)
═══════════════════════════════════════════════════════════════════════

Date: 2026-06-14. Scope: 7-page elevation (accounting + quickbooks silos).

## CADENCE — read this first
Seven full money/hub elevations at the content bar (each: read both sources,
re-check handoff, compose with within-page variety + a coined/citable element,
then equity + battery + axe + overflow + Lighthouse + captures) is genuinely
**multi-turn work** — same as the round-12 about-silo batch, which I delivered
in cadence rather than at the cost of the bar. This round I built the **solo
lead first as instructed** and verified it to the full standard. The remaining
six are queued below with sources confirmed and frameworks specified — say
"continue" and I build the next, fully verified, in sequence. I will not
mass-produce them; the bar is the bar.

**Pre-flight (all 7):** every page confirmed to have BOTH a frozen baseline
record AND root HTML — **no gaps, no orphans**. Heading/FAQ counts per page:
/accounting/ 30h/5faq · monthly-bookkeeping 35h/12faq · cleanup 42h/12faq ·
catch-up 40h/12faq · /quickbooks/ 36h/6faq · setup 43h/8faq · migration
42h/7faq.

---

## 🐛 BUG FIX (sitewide) — unrendered `{{ }}` in front-matter CTAs — FIXED
**Root cause:** Nunjucks `{{ }}` inside `---json` front matter is **not**
template-rendered — Eleventy stores the literal string. Five pages shipped
`href="tel:{{ site.phone.e164 }}"` verbatim into the HTML = **broken phone
links** (accounting hero + about / pricing / about-methodology / about-network
CTA bands). The site partials (header, footer, call-bar, 404) were fine — they
render `tel:` in template bodies.
**Fix (root-level, single source):** all 5 tier layouts now support an
`action.tel: true` flag that the layout substitutes with `tel:{{ site.phone.e164 }}`
(from `site.json`). Page front matter switched `href:"tel:…"` → `tel:true`. No
`{{ }}` ever lives in front-matter JSON again. **Raw `{{` in built output: 5 → 0**
(grepped all HTML). All `tel:` links now render `tel:+18777515575`.
Committed `f725474`.

## 📐 CTA STANDING RULE — applied + logged (BUILD-TRACKER.md)
Per-tier CTA mapping now governs every page (hub heroes carry NO phone CTA;
"Speak to a ProAdvisor" never primary; "Explore Services" only a hub-hero
primary; final band always "Book the discovery call"; QB-specific BOFU may add a
phone tertiary, bookkeeping BOFU may not). **`/accounting/` hero corrected** →
PRIMARY "Explore Services" + SECONDARY "Book the discovery call"
(`?intent=accounting`), phone removed. Added additive `accounting` intent key.
Contact-page rebuild rules (intent system · 404-style phone block · no sticky
elements) logged for a future round — **/contact/ NOT rebuilt**.

---

## ✅ PAGE 1 OF 7 — /accounting/ (t-hub) — DONE + FULLY VERIFIED

**Sources read (both, before building):**
- Baseline: `_build/baseline/baseline.json` → /accounting/ (30 headings, 5 FAQ,
  Service/OfferCatalog + FAQPage schema).
- Root HTML: `accounting/index.html` (full copy via extract_live.py) — the
  6-area service layer, bookkeeping-vs-accounting distinction, the two delivery
  modes (direct / network), the four differentiators, do/don't/coordinate
  scope.

**Citable element:** the three fixed-fee **ENGAGEMENT SHAPES** — *recurring
monthly retainer · one-time fixed-fee project · senior retainer by application*
— named in quick-5 Q3, each a written scope before work begins. Plus canonical
price ranges only (Sheet-0: bookkeeping $400–$20,000+, QB setup $750–$5,000+,
migration $2,500–$10,000+, payroll $150–$800+/mo, sales tax $250–$1,500+/mo,
fractional CFO $3,000–$8,000+/mo). No invented stats/testimonials/team.

**Within-page section variety (8 distinct patterns, no repeat):**
1. dark hub hero + alignment-field motif → 2. `tldr` one-paragraph (speakable
`#accounting-tldr-body`) → 3. `ai-summary` quick-5 ruled (5 gapped marks,
distinct from FAQ — fixed-fee / who-delivers / engagement-shapes / state-cover
/ how-fast-quote) → 4. `grid-3` six service cards w/ fee+eng → 5. narrow prose
distinction (`legal-doc__body`) → 6. `grid-2` two delivery-mode cards w/
`checks-list` → 7. numbered `process-diagram` four differentiators → 8. stacked
`stack-8` h3+prose do/don't/coordinate → FAQ accordion (flat, 7 items).

**Handoff check:** CLASS-MANIFEST re-read; used best-fit components
(`process-diagram` for the ordered differentiators, `grid-2` checks-list cards
for the two modes, `tldr` for the speakable summary) — no improvised classes,
no component the system lacks.

**Verification — all green:**
- **Content-equity differ: GREEN.** 30/30 baseline headings carried + 26 schema
  nodes present. One removal: `"The monthly brief."` newsletter band —
  founder-justified (round-4 /subscribe-unverified rule), logged in
  equity-exceptions.json.
- **Battery: ALL GREEN** — content-equity · faq-flat · faq-min-6 (**7** items;
  added 2 additive verbatim FAQ — "Do you work inside my existing QuickBooks
  file?" + "What size businesses…" — to clear the 6+ standing pattern over the
  baseline's 5) · faq-overlap clean (quick-5 zero-overlap with FAQ) ·
  faq-schema-verbatim (7 Q/A verbatim) · cta-lexicon · manifest · css-drift ·
  css-bytes · founder-zero (no individual named in visible content) · intents.
- **axe-core: ZERO violations** (24 passes).
- **Overflow 360/390/768:** sw 345 / 375 / 753 — **PASS** (no horizontal
  scroll).
- **Lighthouse (desktop):** accessibility **100** · best-practices **100** ·
  SEO **100** · **CLS 0.001** (≈0, far inside "good"; effectively zero).
- **Captures:** `shots/r16/accounting-desktop.png` + `accounting-360.png` —
  within-page variety confirmed visually, all sections centered/responsive.

**Files created:** `src/accounting.11tydata.js`, `src/accounting.njk`.
**Files edited:** `_build/battery/equity-exceptions.json` (+/accounting/ entry).
**Build note:** `eleventy --serve` does NOT auto-build NEW templates added after
start; ran `npm run build` to write `_site/accounting/` (serve serves from
disk), then verified the served artifact.

---

## ✅ PAGE 2 OF 7 — /accounting/bookkeeping/monthly-bookkeeping/ (t-bofu) — DONE + FULLY VERIFIED
**This is the first t-bofu service page of the batch — the bookkeeping-BOFU
PROVING PAGE.** Per CLAUDE.md rule 1, its pattern should be founder-approved
before cleanup + catch-up reuse it.

**Sources read (both, first):** baseline (35 headings, 12 FAQ — 7 substantive +
5 schema-only dupes) + `accounting/bookkeeping/monthly-bookkeeping/index.html`
(full copy: definition, close cycle, deliverables, signals, tiers, operator,
cross-sell).

**Citable element:** the three fixed-fee **pricing tiers** — Essentials
**$400–$700/mo** · Standard **$700–$1,400/mo** · Complex **$1,400–$2,500+/mo** —
plus the **named monthly deliverables** (10 included + 10 layered), and the
coined **"monthly close cadence"**: Days 1–5 documents in → Days 6–10 reconcile
→ Days 11–14 close & review → **Day 15 package delivered**. Canonical pricing
only; no invented stats/testimonials/team.

**Within-page variety (12 distinct patterns):** compact rule-hero → inBrief
(speakable) → prose definition → **process-diagram** close cadence (day-band
marker + H3 stage + desc — the ProcessFlow visual) → **grid-2** two checks-lists
(included / layered) → **ai-summary** quick-5 → **buyer-card** grid-2 (6 "is it
time?" signals) → **review-card** grid-3 priced tiers → prose + **trust-row**
operator credential spec → stacked cross-sell links (cleanup/catch-up/payroll/
CFO) → FAQ accordion (7) → cta-band. No two sections share a structural pattern.

**Handoff check:** CLASS-MANIFEST re-read; used best-fit components — `flow`-
family wasn't needed (process-diagram carries the cadence with real H3 equity),
`buyer-card` for buyer-voice signals, `review-card` for priced tiers (as
`/pricing/` does — no separate price-card component exists, so reused not
improvised), `trust-row` for the credential spec. Invented `process-step--accent`
was caught by the manifest check and removed — no improvised classes shipped.

**Verification — all green:**
- **Content-equity: GREEN** — 35/35 baseline headings + **29 schema nodes**
  (added an `ItemList` of the deliverables). Justified removals (logged,
  SIGN-OFF REQUESTED): `"The monthly brief."` (newsletter); 3 footer-chrome
  columns (Accounting/Company/Network — chrome-relocated, t-bofu chrome:minimal);
  2 schema-only condensed FAQ variants (substance carried verbatim by the
  rendered Q's); `QAPage` → **FAQPage** (the correct type for a multi-Q FAQ).
- **Battery: ALL GREEN** — faq-min-6 (7), faq-overlap (quick-5 zero overlap),
  faq-schema-verbatim (7 Q/A), cta-lexicon, manifest, founder-zero, intents
  (`monthly` key), css-bytes (gate holds).
- **axe-core: ZERO** (24 passes). · **Overflow:** sw 360 / 375 / 753 — **PASS**
  (re-verified against the real prod artifact after a `_site-prod` rebuild — see
  note below).
- **Lighthouse (desktop):** accessibility **100** · best-practices **100** ·
  SEO **100** · **CLS 0.0**.
- **CTA (bookkeeping BOFU — no "Speak to a ProAdvisor"):** hero PRIMARY "Book
  the discovery call" (`?intent=monthly`) + SECONDARY "Get the free file review";
  no phone in hero; sticky mobile call-bar present (BOFU signature).
- **Captures:** `shots/r16/monthly-pricing-1280.png` (tiers) +
  `monthly-cadence-360.png` (ProcessFlow at 360) — centered, responsive, clean.

**Files created:** `src/accounting/bookkeeping/monthly-bookkeeping.11tydata.js`
+ `.njk`. **Edited:** `equity-exceptions.json` (+entry), `intents.json` (already
had `monthly`).

**⚠ Probe note (important for the rest of the batch):** Lighthouse + overflow
probe the **prod artifact on 8125 (`_site-prod`)**, not `_site`. A new page must
be in `_site-prod` (run `build-prod.ps1`) or the probe hits a 404 and **falsely
passes** (404 page shows no overflow). Caught here: the first overflow read was a
404 false-pass; rebuilt `_site-prod` and re-probed the real page. Folded into the
per-page checklist going forward.

---

## ⏳ PAGES 3–7 — QUEUED (sources confirmed, frameworks specified)

| # | URL | Tier | Citable / coined element | Visual |
|---|---|---|---|---|
| 3 | /accounting/bookkeeping/cleanup-bookkeeping/ | t-bofu | **COMPOUNDING RECONCILIATION DRIFT** (coined) | staged timeline / ComparisonGrid |
| 4 | /accounting/bookkeeping/catch-up-bookkeeping/ | t-bofu | **HISTORICAL ACCOUNTING DEBT** (coined); $2,000–$20,000+ | — |
| 5 | /quickbooks/ | t-hub | full ProAdvisor credential stack (QBO L2, Desktop, Enterprise, Payroll, Bookkeeping) | — |
| 6 | /quickbooks/setup/ | t-bofu | **TechBrot Setup Protocol** — 5-phase, named output per phase | 5-phase ProcessFlow |
| 7 | /quickbooks/migration/ | t-bofu | **Migration Integrity Protocol** — 7-point checklist; $2,500–$10,000+ | — |

Pages 3–4 reuse the **proven bookkeeping-BOFU pattern** from page 2 (pending your
audit). Each gets the same treatment: both sources read, handoff re-checked,
within-page variety, full verification battery.

## OPEN ITEMS / STOPPED AT
1. **Bug fix done + verified** (sitewide broken phone links → 0 raw template
   vars; CTA standing rule applied/logged). Committed `f725474`.
2. **Pages 1 & 2 done + fully verified.** `/accounting/` hero corrected per the
   new CTA rule; `/accounting/bookkeeping/monthly-bookkeeping/` built as the
   bookkeeping-BOFU proving page. Review both on your phone:
   http://192.168.1.8:8080/accounting/ and
   http://192.168.1.8:8080/accounting/bookkeeping/monthly-bookkeeping/
3. **STOPPED for your audit of the page-2 BOFU pattern** (CLAUDE.md rule 1 —
   nothing mass-produces until the template is approved on a real page). On your
   OK, pages 3–4 (cleanup, catch-up) stamp the same pattern; then the QB silo
   (5–7). Say "continue" to proceed.
4. **Committed** (NOT pushed) on `preview-11ty` — two commits this round:
   `cfefee0` (page 1 + round-15 nav) and `f725474` (bug fix); page 2 committed
   next. You push when ready.
5. **Dev server LEFT RUNNING** at http://192.168.1.8:8080/ — never killed. Only
   probe chrome cycled (kill_probe.ps1). The 8125 `_site-prod` audit server was
   restarted to pick up page 2 (not the dev server).
6. **Sign-off carry-over:** the round-12 `/about/methodology/` "The Team"
   retarget + round-8 /partners/ FAQ schema fixes + the new page-2 schema-only
   FAQ/QAPage removals all await your explicit sign-off in the exceptions log.
STOPPED. Tell me to continue for page 2.

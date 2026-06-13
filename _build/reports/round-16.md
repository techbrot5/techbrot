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

## ⏳ PAGES 2–7 — QUEUED (sources confirmed, frameworks specified)

| # | URL | Tier | Citable / coined element | Visual |
|---|---|---|---|---|
| 2 | /accounting/bookkeeping/monthly-bookkeeping/ | t-bofu | pricing tiers ($400–700 essentials / $700–1,400 standard / $1,400–2,500+ complex) + named deliverables | monthly-close ProcessFlow |
| 3 | /accounting/bookkeeping/cleanup-bookkeeping/ | t-bofu | **COMPOUNDING RECONCILIATION DRIFT** (coined) | staged timeline / ComparisonGrid |
| 4 | /accounting/bookkeeping/catch-up-bookkeeping/ | t-bofu | **HISTORICAL ACCOUNTING DEBT** (coined); $2,000–$20,000+ | — |
| 5 | /quickbooks/ | t-hub | full ProAdvisor credential stack (QBO L2, Desktop, Enterprise, Payroll, Bookkeeping) | — |
| 6 | /quickbooks/setup/ | t-bofu | **TechBrot Setup Protocol** — 5-phase, named output per phase | 5-phase ProcessFlow |
| 7 | /quickbooks/migration/ | t-bofu | **Migration Integrity Protocol** — 7-point verification checklist; $2,500–$10,000+ | — |

Each will get the same treatment as page 1: both sources read first, handoff
re-checked, within-page variety enforced, then the full verification battery
before moving to the next.

## OPEN ITEMS / STOPPED AT
1. **/accounting/ (1 of 7) is done and fully verified** — review it on your
   phone at http://192.168.1.8:8080/accounting/.
2. **6 pages remain** (table above) — say "continue" and I build page 2
   (/accounting/bookkeeping/monthly-bookkeeping/) next, fully verified, then on
   through migration. This batch is multi-turn at the content bar by design.
3. **Committed** (NOT pushed) on `preview-11ty`: this commit also captures the
   round-15 nav/responsiveness fixes, which had not been committed yet. You
   push when ready.
4. **Dev server LEFT RUNNING** at http://192.168.1.8:8080/ — never killed; only
   probe chrome was cycled via kill_probe.ps1.
5. **Sign-off carry-over** (unchanged): the round-12 `/about/methodology/`
   "The Team" retarget + the round-8 /partners/ FAQ schema-defect fixes still
   await your explicit sign-off in the exceptions log.
STOPPED. Tell me to continue for page 2.

# ROUND 19 — PRE-BUILD VERIFICATION (no pages built)

Verification-only round per founder spec. Confirms v4 authority, audits the
real interlinking state across the 27 elevated pages, and reports baseline/
root availability for the likely next queue so we spec clean-elevation vs
build-new before any page is written.

Dev server: http://192.168.11.1:8080/ (0.0.0.0:8080). _site built clean
(37 files) for the link audit. No source pages touched.

═══════════════════════════════════════════════════════════════
## 1. v4 AUTHORITY — RE-AFFIRMED
═══════════════════════════════════════════════════════════════
Sheet 5 (build status) + Sheet 9 (standing rules/CTA/authorship/gate) read
this session and govern. Loaded:
- **CTA-per-tier:** HUB → "Explore Services" primary + "Book the discovery
  call" secondary, NO phone on hub hero. BOFU → "Book the discovery call"
  primary + "Get the free file review" secondary + "Speak to a ProAdvisor"
  tertiary on QB-specific BOFU ONLY (setup/migration/help/error-code), never
  on bookkeeping BOFU. MOFU/guide → "Get the free file review" primary +
  "Book the discovery call" secondary. FINAL band every page → "Book the
  discovery call" primary. Never phone-as-hero on a hub; never "Speak to a
  ProAdvisor" as primary; never "Explore Services" primary off a hub hero.
- **Authorship:** "Certified QuickBooks ProAdvisor team" sitewide, no
  individual named in visible content; no /about/team/ page. Founder = schema-
  only E-E-A-T (QBO L2, Desktop, Payroll, Intuit Certified Bookkeeping Pro;
  Advisory NOT claimed). David Westgate = named Texas Operating Partner only
  (own practice; worksFor removed). Visible team aggregate = QBO L2 + Desktop
  + Payroll + Bookkeeping + Enterprise (David), no individual attribution.
- **Gate:** 200-page criterion is THE primary launch gate; CSS 58KB ceiling
  (at 53,773 B); baseline = floor; one citable per page; design-system
  components only (flag for Design, never bespoke SVG).

═══════════════════════════════════════════════════════════════
## 2. INTERLINKING STATE — MEASURED (honest)
═══════════════════════════════════════════════════════════════
Method: parsed rendered `_site` HTML for all 27 elevated pages; separated
**in-content links (inside `<main>`)** from sitewide chrome (nav/footer),
because chrome links every page to ~all hubs and would mask the real
editorial depth. Tool: `_build/scripts/interlink_audit.py`.

**Headline: interlinking is genuinely DENSE, not thin.** A real hub→spoke→
sibling structure exists in-content, with cross-silo bridges
(accounting↔quickbooks) and DefinedTerm pairs cross-referenced. This is a
strength to maintain, with three specific weak spots to fix.

**In-content inbound (among the 27, excluding chrome), notable values:**
- Strong hubs/converters: `/` 20, `/contact/` 20, `/quickbooks/file-review/`
  13, `/accounting/bookkeeping/monthly-bookkeeping/` 15, `/accounting/payroll-
  management/` 11, `/quickbooks/` 10, `/quickbooks/setup/` 10.
- **Only ONE true in-content orphan (<2 inbound):**
  `/quickbooks/payroll/` = **1** (sole in-content inbound from
  /accounting/payroll-management/). It IS in nav chrome so it is not a crawl
  orphan, but its editorial inbound is thin.
- **At-the-floor (exactly 2, borderline):** `/about/network/` = 2,
  `/accounting/advisory/` = 2.

**DefinedTerm / coined-framework cross-references — ALL present, both ways:**
- Compounding Reconciliation Drift (cleanup) ↔ Historical Accounting Debt
  (catch-up): cleanup→catch-up YES, catch-up→cleanup YES.
- TechBrot Setup Protocol (setup) ↔ Migration Integrity Protocol (migration):
  setup→migration YES, migration→setup YES.

**Root-cause finding — "back-link debt" on later-built spokes.** Pages built
in later rounds (payroll, cleanup, help) did not get retro-linked from the
in-content bodies of earlier-built pages. Clearest case: the `/quickbooks/`
**hub body** links in-content only to migration + setup among its own spokes —
NOT to cleanup, help, or payroll (those were added after the hub was written;
they appear only via nav). Same mechanism produced payroll's single inbound.
→ Act-on item, not a fail: adopt a **hub-refresh-on-spoke-add** discipline
(when a spoke ships, update the parent hub body + ≥1 topical sibling body to
link it), and retro-fix the three weak spots above in the next batch.

═══════════════════════════════════════════════════════════════
## 3. BASELINE / ROOT AVAILABILITY — NEXT QUEUE
═══════════════════════════════════════════════════════════════
Verified against `_build/baseline/baseline.json` (139 frozen records) AND the
old root HTML folders.

**QuickBooks silo remainder — ALL clean-elevation (baseline + root HTML present):**
| Page | URL | baseline | root HTML | tier (proposed) |
|---|---|---|---|---|
| consulting | /quickbooks/consulting/ | ✅ | ✅ | t-bofu/t-mofu |
| products (3) | /quickbooks/online/, /desktop/, /enterprise/ | ✅×3 | ✅×3 | t-mofu |
| proadvisor-team | /quickbooks/proadvisor-team/ | ✅ | ✅ | t-mofu |
| plan-selection | /quickbooks/which-plan-is-right/ | ✅ | ✅ | t-mofu/t-guide |
| FAQ | /quickbooks/faq/ | ✅ | ✅ | t-guide |
| error-codes | /quickbooks/help/error-codes/ (hub) | ✅ | ✅ | t-guide hub |
| error-codes children (7) | …/15240, /3371, /c-series, /error-6000-series, /h202, /ps038, /unrecoverable-error | ✅×7 | ✅×7 | t-guide |

→ error-codes = **8 baseline records** (hub + 7 named codes). Every QB-remainder
page is a **clean elevation** (read baseline + root HTML, enrich, never thin).
Note: error-codes + help/consulting are Sheet-7 honest-triage surfaces —
disclosure-first, never "official", qualify Intuit billing/account intent away.

**California state children (and TX/FL/IL) — BUILD-NEW (the 1099 pattern, at scale):**
- Pillars `/find-an-accountant/california|texas|florida|illinois/` → baseline ✅
  + root HTML ✅ = **clean-elevation pillars**.
- Their **children: 0 child folders, 0 child baseline records** for CA/TX/FL/IL.
  Only New York has children built (19 child dirs; 43 fa baseline records incl.
  cities + industries). So **CA's 35 children are BUILD-NEW off the NY-37 master
  template — NO per-page baseline, NO per-page root HTML.** Same for TX(31)/
  FL(31)/IL(32). NY = the structural AND content reference (its children DO have
  baseline + root HTML and would be clean-elevations if/when NY is moved to cobalt;
  note NY is "live/complete" on the OLD Bootstrap site but is NOT yet on the new
  cobalt factory — no find-an-accountant page is in the 27 elevated).

**Implication for speccing:** QB-remainder = baseline-floor clean elevations
(equity differ applies). CA children = build-new — no equity differ; the quality
bar is the NY master template + Sheet 2 CA spec (AB5, 4-tax) + the top-0.01%
citable/interlink standard, with sign-off on the template before mass-producing.

═══════════════════════════════════════════════════════════════
## FILES TOUCHED
═══════════════════════════════════════════════════════════════
- `_build/scripts/dump_sheet.py` (new — xlsx sheet dumper)
- `_build/scripts/baseline_check.py` (new — baseline URL query)
- `_build/scripts/interlink_audit.py` (new — in-content vs chrome link graph)
- `_build/reports/round-19.md` (this file)
No source/page files changed. No commit (verification round).

## OPEN SIGN-OFFS (carried from round 18 — unchanged)
QAPage→FAQPage (7) · schema-only condensed-FAQ retirements · setup 4-vs-5
phase ruling · methodology "The Team" retarget + partners FAQ schema-defect ·
1099 cross-sell restore-when-built.

## WHAT'S NEXT / STOP STATE
Reported items 1–3. **STOPPED — awaiting the founder's batch spec.** Standing
recommendation unchanged: start the research/original-data logging scaffold
(calendar-bound, still not started) in parallel with the next page batch.
Act-on from §2: fix the 3 interlink weak spots + adopt hub-refresh-on-spoke-add.

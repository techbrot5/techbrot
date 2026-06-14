# ROUND 18 — CLOSE / SESSION HANDOFF (deploy fixed via project separation)

Clean session boundary. The next session can start cold from this file.

═══════════════════════════════════════════════════════════════════
## A. DEPLOY STATE (NEW — two-project model)
═══════════════════════════════════════════════════════════════════
The CF preview never rendered because the ORIGINAL Pages project published the
repo **root** (not `_site`) — and that project also carries techbrot.com
(production, `main`). Founder resolved it by **project separation** (no code
change):

- **NEW project `techbrot-preview`** — production branch `preview-11ty`, build
  command `npm run build`, **build output directory `_site`**, NO
  `ENVIRONMENT=production` (stays fail-closed / noindex).
  **Live + rendering cobalt: https://techbrot-preview.pages.dev**
- **OLD project `techbrot`** — UNTOUCHED. `main` → techbrot.com still serves the
  old Bootstrap site. **Do NOT modify it.**

**Verified live this session (https://techbrot-preview.pages.dev):**
- `/` → 200 · `/assets/css/site.min.css` → **200, content-type text/css** · home
  `<link rel="stylesheet" href="/assets/css/site.min.css">` matches the 200 path ·
  sample `/quickbooks/payroll/` → 200. **Renders cobalt.** ✅
- **noindex (fail-closed):** home `<meta name="robots" content="noindex, nofollow">`
  ✅ · `/robots.txt` → `User-agent: * / Disallow: /` ✅
- **X-Robots-Tag HTTP header: NOT set** — build-level noindex (meta + robots.txt
  Disallow) already makes it fail-closed; the HTTP header is the optional
  CF-platform belt-and-suspenders (go-remote gate item 1). Add later via a
  `_headers` file or a CF rule on the preview project if desired.

**Workflow change (now standing):** preview review = the auto-deployed CF URL,
NOT localhost. Code still runs the dev server (0.0.0.0:8080) for its own probes;
the founder reviews on https://techbrot-preview.pages.dev after each push.
**Push = deploy = reviewable.** No LAN-IP dependency for review.

**Go-remote gate deltas:**
- Item 1 (preview noindex headers): meta + robots.txt verified noindex on the live
  preview ✅; platform `X-Robots-Tag` header still a CF-config step (optional).
- Item 2 (Cloudflare deploy): DONE — new preview project live & rendering.
- Item 4 (calibrated PageSpeed ≥95): **now runnable** against
  https://techbrot-preview.pages.dev/ (local Lighthouse is host-limited and
  doesn't count). Not yet run.
- The CSS-404 / output-dir saga is **CLOSED**. The `7cc89e2` first-class
  `site.min.css.11ty.js` template fix is correct and STAYS. `cloudflare-fix.md`
  marked RESOLVED.

**Cutover architecture:** at the 200-page gate, cutover = repoint techbrot.com to
the new build (deliberate, founder-controlled). Until then the two projects can't
break each other.

═══════════════════════════════════════════════════════════════════
## B. BUILD STATE
═══════════════════════════════════════════════════════════════════
**Elevated to the cobalt standard: 27 pages** (+ 404), all on the new factory,
each verified (equity GREEN · axe 0 · overflow 360/375/753 · Lighthouse
100/100/100 · CLS 0). CSS bundle: **53,773 B minified / 59,392 B (58KB) gate** —
holds. Full URL list:

Globals/standalone (11): `/` · `/about/` · `/about/methodology/` · `/about/network/`
· `/contact/` · `/pricing/` · `/trust/` · `/partners/` · `/quickbooks/file-review/`
· `/legal/disclaimer/` · `/legal/dpa/` · `/legal/privacy-policy/` · `/legal/terms/`
(+ `/404`).
Accounting silo (8): `/accounting/` · `/accounting/bookkeeping/monthly-bookkeeping/`
· `…/cleanup-bookkeeping/` · `…/catch-up-bookkeeping/` · `/accounting/payroll-management/`
· `/accounting/sales-tax-compliance/` · `/accounting/advisory/` ·
`/accounting/advisory/fractional-cfo/`.
QuickBooks silo (7): `/quickbooks/` · `/quickbooks/setup/` · `/quickbooks/migration/`
· `/quickbooks/cleanup/` · `/quickbooks/help/` · `/quickbooks/payroll/`
(+ file-review above).

**Remaining to build (v4 Sheet 5), toward the 200-page gate:**
- **QuickBooks silo remainder:** consulting, products (3), proadvisor-team,
  **error-codes (~8–40)**, plan-selection, FAQ — the bulk of the ~55-page QB silo.
- **Support silo (~20):** Sheet-7 honest-triage architecture (disclosure-first;
  the qb-help hub is the proven pattern for it).
- **State children:** California (35), Texas (31), Florida (31), Illinois (32) —
  ~129 pages off the NY master template (NY = 37, the structural reference). Then
  next-20-states pillars (~60) + remaining 25 basic pillars.
- **Editorial / top-15 guides (15)** — `/resources/guides/[topic]/`, AI-citation
  magnets.
- **Research / original-data layer (2+)** — flagship benchmarks; see §D (NOT
  STARTED — calendar-bound).
- **Expansion (100+):** tools/calculators, glossary, blog, case studies.
- **Build-new round:** `/accounting/1099-preparation/` + `/about/team/` + the
  switch silo (`/switch/` + 3 from-X pages).

═══════════════════════════════════════════════════════════════════
## C. OPEN SIGN-OFFS (carry forward — equity-exceptions.json)
═══════════════════════════════════════════════════════════════════
All reported, none silent. Standing/already-ruled (no per-page sign-off):
newsletter "The monthly brief." removals + footer-chrome relocations. **Awaiting
explicit founder sign-off:**
1. **QAPage → FAQPage** (correct multi-question type), 7 pages: monthly-bookkeeping,
   cleanup-bookkeeping, catch-up-bookkeeping (R16); payroll-management,
   sales-tax-compliance, advisory, fractional-cfo (R17).
2. **Schema-only condensed FAQ variants retired** (substance carried verbatim by
   the rendered Q): monthly-bookkeeping ×2 · payroll-management ×1 ·
   sales-tax-compliance ×2 · advisory ×2 · fractional-cfo ×4.
3. **R16 setup 4-vs-5 phase ruling** — baseline documents 4 setup phases; founder
   asked for 5. Preserved 4 as the named TechBrot Setup Protocol; awaiting ruling
   on adding a 5th phase.
4. **R16 carryover:** `/about/methodology/` "The Team" card retarget; `/partners/`
   FAQ schema-defect fixes (round 8).
5. **R17 deferred-1099 cross-sell:** payroll-management's "1099 preparation"
   cross-sell card retargeted to "QuickBooks cleanup" (dead-link avoidance) —
   RESTORE to `/accounting/1099-preparation/` when that page is built.

═══════════════════════════════════════════════════════════════════
## D. STANDING ITEMS (unchanged)
═══════════════════════════════════════════════════════════════════
- **Founder-name-zero:** no individual named in visible content; firm-level
  "Certified QuickBooks ProAdvisor team"; founder is schema-only E-E-A-T.
- **CTA-per-tier (Sheet 9):** hubs = Explore Services primary / no phone; BOFU =
  Book the discovery call primary, file-review secondary, phone tertiary only on
  QB-specific BOFU; MOFU = file-review primary. Final band always Book the
  discovery call.
- **Baseline-floor:** every elevation reads baseline.json + old root HTML; enrich,
  never thin; equity differ GREEN.
- **CSS gate:** 58KB minified ceiling through cutover — currently 53,773 B.
- **Coined frameworks (DefinedTerm, owned citation entities):** Compounding
  Reconciliation Drift · Historical Accounting Debt · TechBrot Setup Protocol ·
  Migration Integrity Protocol. R17 added named citables: the judgment layer,
  post-Wayfair nexus framework, the engagement model, the diagnostic triage model.
- **⚠ RESEARCH / ORIGINAL-DATA LAYER — STILL NOT STARTED.** Calendar-bound: data
  logging cannot be backfilled, and it is the #1 citation-magnet class. Every
  round this slips is permanent lost ground. **Start the logging scaffold next
  session.**
- **1099-preparation deferred** to a build-new round (with /about/team/ + switch).

═══════════════════════════════════════════════════════════════════
## E. NEXT-SESSION FIRST ACTIONS (Code's recommendation)
═══════════════════════════════════════════════════════════════════
1. **START the research/original-data logging scaffold (do this FIRST).** It's the
   only irreversible, calendar-bound item — every session without it is data we can
   never recover, and it's the highest-value citation moat. Even a minimal
   `/resources/research/` data-capture structure + the first benchmark definition
   starts the clock. Low page-count, highest strategic leverage.
2. **Then the highest-count batch toward the 200 gate: state children off the NY
   master template** — California (35) is the priority pillar (AB5 + 4-tax spec in
   Sheet 2), then TX/FL/IL. ~129 pages, template-driven, and the elevation patterns
   are now proven, so this is where raw progress toward 200 is fastest.
3. **Alternative / parallel:** finish the **QuickBooks silo remainder** (consulting,
   products, proadvisor-team, error-codes) — high-intent, completes a silo, and the
   qb-help triage hub already routes to these so the internal-linking payoff is
   immediate.
Recommended next batch: **research-logging start + California state children.**

STOP. Round 18 closed: deploy fixed (two-project model), preview live + noindex +
rendering cobalt, tracker + this handoff written, everything committed.

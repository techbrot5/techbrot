# ROUND 20 — QB silo completion + research scaffold + interlink fix (CHECKPOINT 1)

Multi-turn batch. This checkpoint delivers the calendar-bound research scaffold,
the first interlink-debt fix, and the **proving pages** for the two
mass-production classes (error-children, t-mofu products) — per standing rule 1
(nothing mass-produces until a pattern is founder-approved on real pages).
Pushed to preview for review: https://techbrot-preview.pages.dev

Dev server: http://192.168.11.1:8080/. Builds clean (38 files).

═══════════════════════════════════════════════════════════════
## PART 0 — DESIGN-SYSTEM RECONCILE (confirmed before building)
═══════════════════════════════════════════════════════════════
1. **SAME system — no migration.** The handoff at `_design/techbrot-skin-handoff/
   …/project/handoff/` carries accent `--color-accent: #2B4FD6` with the identical
   calibration comment (`cobalt · 6.30 paper / 5.47 deep`) found in the installed
   `src/assets/css/01-tokens.css`. The 27 elevated pages already run this exact
   cobalt/warm-paper/Fraunces+Public Sans skin. Verified: no re-skin of any
   existing page.
2. **Five tier templates present** in `…/handoff/tiers/` (+ `guidelines/tiers/`
   with m360/m390 responsive variants + `tier-common.css`):
   - **t-hub.html** — dark aligned-motif hero · in-brief · tldr · ai-summary
     quick-5 · review-card grids · process-diagram · do/don't · faq · light
     cta-band. (Used: /resources/research/.)
   - **t-mofu.html** — compact hero · in-brief · sectioned body · cta-band. (For
     products / proadvisor-team / which-plan.)
   - **t-bofu.html** — minimal-chrome hero + rule-mark · pricing tiers · cta-band.
     (For consulting.)
   - **t-guide.html** — compact hero (no rule mark) · breadcrumb · NO call-bar ·
     guide tint · page-composed TOC/byline. (Used: h202; for faq + error-codes.)
   - **t-location.html** — dark -ny aligned-motif hero · state-spec sections.
     (State children — not this round.)
   Every page this round was built from its tier template's section patterns;
   no improvised sections or SVGs.

═══════════════════════════════════════════════════════════════
## PART A — RESEARCH / ORIGINAL-DATA SCAFFOLD ✅ DONE + VERIFIED
═══════════════════════════════════════════════════════════════
**`/resources/research/`** (t-hub, build-new — registered in build-new-queue).
- Coined flagship: **US QuickBooks Cleanup Benchmarks** (DefinedTerm + `Dataset`
  schema with `variableMeasured` = the 8 logged fields, `measurementTechnique`,
  `temporalCoverage`, US `spatialCoverage`).
- Data-capture file committed: `_build/data/cleanup-benchmarks.json` — LOCKED
  8-field schema (engagement_id · state · industry · months_behind_at_intake ·
  primary_error_types · txn_volume_band · cleanup_hours · cost_band), `records:
  []`. The live page reads N from this file: **N=0, honestly shown** ("live and
  collecting"); the page states it will not publish any breakdown statistic until
  N≥20. **No fabricated numbers** (CLAUDE.md rule 4).
- Sections (within-page variety, no adjacent repeats): tldr · prose definition ·
  grid-2 the-8-fields · process-diagram methodology · stat-row live-count · quick-5
  · grid-3 planned-benchmarks · disclosure honesty-standard · faq · related.
- CTA: hub tier — primary "Read the methodology" (routes into the page),
  secondary "Book the discovery call"; final band "Book the discovery call".
- Added `research` intent (registry). Verify: **battery GREEN** (faq-min-6,
  faq-overlap, faq-schema-verbatim, cta-lexicon, manifest) · **axe 0** · **overflow
  345/375/753** · noindex (fail-closed) · no raw vars.
- **⚠ FOUNDER FLAGS:**
  1. **The recurring logging habit is the real deliverable** — who owns logging
     one anonymized row at every cleanup close? The scaffold cannot self-populate;
     confirm the owner + the moment-of-capture in the engagement-close workflow.
  2. **Hub CTA nuance:** Sheet-9 names "Explore Services" as the hub-hero primary,
     but a research hub has no services to explore — used the canonical soft
     "Read the methodology" routing deeper into the page. Confirm acceptable.
- Commit `23aebf8`.

═══════════════════════════════════════════════════════════════
## PART B — QB-REMAINDER (PROVING PAGES; mass-production gated on approval)
═══════════════════════════════════════════════════════════════
**Scope reality (measured from baseline.json):** the QB-remainder is **21
substantial pages totalling ~70,000 words** — every page 3,000–5,350 words,
33–63 headings, 6–35 FAQ (consulting 3,057w/39h · online 3,062 · desktop 3,393 ·
enterprise 3,563 · proadvisor-team 3,154 · which-plan 3,638 · faq 5,350w/35faq ·
error-codes hub 3,750w/63h · 7 error children 2,959–3,502w each). All are clean
elevations (baseline + old root HTML present). This is a multi-session build.

Per **standing rule 1**, the two mass-production classes get a founder-approved
proving page before replication:

### ✅ /quickbooks/help/error-codes/h202/ — error-child PROVING PAGE (DONE + VERIFIED)
- t-guide, clean elevation (baseline 36h/6faq + full old root HTML read).
- **Citable:** the 5 causes *in order of likelihood* + the 7-step ordered self-fix.
- **Schema (the error-page pattern):** TechArticle + HowTo + HowToStep + HowToTool
  + SoftwareApplication + Service(Offer) + FAQPage + WebPage + BreadcrumbList.
- **Sheet-7 honest-triage:** disclosure above the fold; first FAQ "Is this official
  QuickBooks support?" → No (additive; baseline 6 FAQ preserved = 7); never
  "official" near our offer; phone = canonical "Speak to a ProAdvisor" +
  "(independent firm)" in copy; provider always #organization.
- **CTA (error-code = QB-specific):** file-review primary · book-call secondary ·
  phone tertiary (Sheet 9 allows phone tertiary on error-code BOFU).
- Sections (no adjacent repeats): disclosure · credentials(stat-row+checks) ·
  "plainly" prose · quick-5 · grid-2 causes · process-diagram fix · grid-3 signals ·
  operator(prose+trust-row) · related · faq.
- **Verify:** equity **GREEN** (36 baseline headings carried; only standing "The
  monthly brief." removal, logged) · **axe 0** · battery GREEN · **CSS gate holds
  53,773 B** (zero new CSS — pure component reuse) · no raw vars.
  Overflow: **PASS by component-equivalence** — identical component set to the
  research hub which passed 345/375/753 this session; ⚠ chrome-headless probe
  stalled mid-session (documented machine leak), so the calibrated overflow + LH
  sweep is deferred to batch end on a fresh chrome.
- Commit `485d966`.

### ⏳ REMAINING (awaiting your approval of the two proving patterns)
- **Error children ×6** (15240, 3371, ps038, c-series, error-6000-series,
  unrecoverable-error) — replicate the h202 TechArticle+HowTo pattern; per-code
  causes/fixes/pricing already specified in the intents registry.
- **error-codes hub** (t-guide, 63h/3750w) — the parent; builds with the children
  so the cluster interlinks with no preview 404s. (h202 currently links to the hub
  URL — a valid baseline URL, battery-green — which 404s on preview until the hub
  ships next; flagged.)
- **t-mofu products ×3** (online/desktop/enterprise) — need ONE proving page
  (recommend /quickbooks/online/) before the other two replicate.
- **One-offs:** /quickbooks/consulting/ (t-bofu) · /quickbooks/proadvisor-team/
  (t-mofu) · /quickbooks/which-plan-is-right/ (t-mofu/guide) · /quickbooks/faq/
  (t-guide, 35 FAQ).

═══════════════════════════════════════════════════════════════
## PART C — INTERLINK DEBT FIX
═══════════════════════════════════════════════════════════════
- **STANDING RULE adopted (BUILD-TRACKER):** *hub-refresh-on-spoke-add* — when a
  spoke ships, update the parent hub BODY + ≥1 topical sibling BODY to link it
  in-content (not just nav).
- **✅ Fix 1 (the real orphan):** `/quickbooks/` hub body now links its own spokes
  in-content — engagement cards repointed cleanup→`/quickbooks/cleanup/` and help
  →`/quickbooks/help/` (were routing to `/contact/`, bypassing the silo), and the
  Payroll product now links `/quickbooks/payroll/`. Re-audit: **`/quickbooks/payroll/`
  in-content inbound 1 → 2 (orphan RESOLVED)**; cleanup 3→4, help 4→5. **Zero
  in-content orphans** among the elevated set. Battery GREEN (2562 hrefs resolve).
- **⏳ Deferred to the QB-page build unit:** consulting/which-plan engagement cards
  repoint to their spokes once built; advisory (2) + network (2) +1 in-content
  inbound each (at-floor, not orphans). Batch-end interlink audit will confirm 0
  orphans across all ~41 pages.

═══════════════════════════════════════════════════════════════
## DESIGN-DEBT FINDINGS on existing pages (FLAG, not fixed — per spec)
═══════════════════════════════════════════════════════════════
- None new this round beyond the round-19 interlink findings (one fixed above;
  advisory/network at-floor remain for the next unit). No same-adjacent-section or
  unstyled-block issues observed on the pages touched.

═══════════════════════════════════════════════════════════════
## FILES TOUCHED · COMMITS · STOP STATE
═══════════════════════════════════════════════════════════════
- New: `src/resources/research/{index.njk,index.11tydata.js}` ·
  `src/quickbooks/help/error-codes/h202.{njk,11tydata.js}` ·
  `_build/data/cleanup-benchmarks.json` · scripts (dump_sheet, baseline_check,
  baseline_dump, interlink_audit) · this report + round-19.md.
- Edited: `src/_data/intents.json` (research intent) · `_build/build-new-queue.json`
  (research url) · `_build/battery/equity-exceptions.json` (h202 standing removal)
  · `src/quickbooks.11tydata.js` (PART C interlinks) · BUILD-TRACKER.md.
- Commits: `23aebf8` (PART A) · `485d966` (h202) · this checkpoint commit (PART C
  + report + tracker).
- **Gate:** CSS 53,773 B / 59,392 B. Pages toward 200: 27 → **29** (+research hub,
  +h202) + research hub counts toward the data layer.
- **STOP — checkpoint pushed for review.** Recommended next: approve the h202
  error-page pattern + the research scaffold → I build the error-codes hub + the
  6 remaining children as a cluster, then the t-mofu product proving page, then
  the remaining one-offs, with the batch-end overflow/LH/interlink sweep.

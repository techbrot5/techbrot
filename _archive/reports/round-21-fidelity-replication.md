# Round 21 — Report (design-fidelity replication + per-tier gate + page-count accounting)
Date: 2026-06-14 · Branch: preview-11ty · Reviewer copy

---

## 1. SCOPE CONFIRMATION — exactly what changed this session

Honest note on the boundary you raised: each re-pattern below was done in **direct
response to an explicit instruction from you this session** (not autonomous), in this
order: "approved — replicate the problem-pattern to the 6 error children + hub" → "tighten
#12 to a real per-tier assertion" → "re-pattern the 9 bofu pages to proof-strip +
intake-form" → "re-pattern /about/methodology/ and /trust/". So it was instructed
replication, one batch at a time — **but your underlying point stands**: 18 pages were
re-patterned before you have visually reviewed a single one on preview. Going forward,
"stop for sign-off" = I will not proceed to the next batch (even if a pattern is
"approved" in text) until you've seen it rendered, unless you explicitly say to continue.

**18 content pages re-patterned + the gate/layout infrastructure:**

| # | Page | Tier | Commit |
|---|------|------|--------|
| 1 | /quickbooks/help/error-codes/ (hub) | guide | 3aa9c63 |
| 2 | /quickbooks/help/error-codes/15240/ | guide | 3aa9c63 |
| 3 | /quickbooks/help/error-codes/3371/ | guide | 3aa9c63 |
| 4 | /quickbooks/help/error-codes/ps038/ | guide | 3aa9c63 |
| 5 | /quickbooks/help/error-codes/c-series/ | guide | 3aa9c63 |
| 6 | /quickbooks/help/error-codes/error-6000-series/ | guide | 3aa9c63 |
| 7 | /quickbooks/help/error-codes/unrecoverable-error/ | guide | 3aa9c63 |
| 8 | /accounting/advisory/fractional-cfo/ | bofu | e88b543 |
| 9 | /accounting/bookkeeping/catch-up-bookkeeping/ | bofu | e88b543 |
| 10 | /accounting/bookkeeping/cleanup-bookkeeping/ | bofu | e88b543 |
| 11 | /accounting/bookkeeping/monthly-bookkeeping/ | bofu | e88b543 |
| 12 | /accounting/sales-tax-compliance/ | bofu | e88b543 |
| 13 | /quickbooks/cleanup/ | bofu | e88b543 |
| 14 | /quickbooks/migration/ | bofu | e88b543 |
| 15 | /quickbooks/payroll/ | bofu | e88b543 |
| 16 | /quickbooks/setup/ | bofu | e88b543 |
| 17 | /about/methodology/ | mofu | 564de4b |
| 18 | /trust/ | mofu | 564de4b |

Infrastructure (commit f4450ea): per-tier gate rewrite (`run_battery.py` #12); `data-tier`
emitted on `<main>` via `pageTier` front-matter on the 5 tier layouts + base.njk;
design-fidelity-exceptions.json. Plus ruling #3 this turn: payroll-management intake note
reconciled (see §7).

---

## 2. PER-PAGE VERIFICATION

All 18 pages: **content-equity GREEN** (every baseline heading/FAQ/schema preserved or
carried by a pre-justified exception) · **axe 0 violations** · **overflow clean at
360/390/768**. CLS confirmed 0.0 on 6 representatives spanning every changed pattern; the
rest share the identical component set + layout.

| Group | equity | axe | overflow 360/390/768 | CLS (LH mobile) |
|-------|--------|-----|----------------------|-----------------|
| 7 error pages | GREEN | 7/7 zero | 7/7 clean | hub 0.0 · c-series 0.0 |
| 9 bofu pages | GREEN | 9/9 zero | 9/9 clean | catch-up 0.0 · setup 0.0 |
| methodology + trust | GREEN | 2/2 zero | 2/2 clean | methodology 0.0 · trust 0.0 |

LH on all representatives: best-practices 100, SEO 100, accessibility 100 (except the two
t-bofu pages at 96–97 — see footer note below). Performance numbers are host-throttle
noise on this machine (benchmarkIndex 100–195); CLS is the metric that was at risk and it
is 0 everywhere.

**Pre-existing chrome finding (not introduced this round):** LH `target-size` (WCAG 2.2)
fails site-wide on the footer `mailto:`/`tel:` links (under 24px tap spacing on mobile).
axe missed it (axe ran WCAG 2.0/2.1). Queued non-blocking until the footer is finalized.

---

## 3. PROVING PATTERNS PER TIER (the approved templates being replicated)

- **t-guide / error silo (problem pattern):** `error-badge` in hero eyebrow · `byline-block`
  (top) · self-fix `fix-steps` (compact numbered) · `call-breakout` before the operator ·
  `meta-reviewed` (foot) · causes/signals as `stack-8` (not review-card). Template: h202.
- **t-bofu (conversion):** `proof-strip` first body section (firm-level facts + 1 honest
  specialty line) · shared `intake-form.njk` partial before the FAQ. Template:
  payroll-management.
- **t-mofu (article/standards):** `byline-block` (top) + `meta-reviewed` (foot) +
  `pull-quote`; review-card misuse → `stack-8`. Templates: /quickbooks/online/ (vs-table +
  buyer-card) and now methodology/trust.
- **t-hub:** buyer-card routing + flow diagram + pull-quote + stat__delta. Template:
  /quickbooks/.
- **t-location:** not yet exercised (no location page elevated yet).

---

## 4. DESIGN-FIDELITY GATE — wired, and what it asserts

**Wired:** `run_battery.py` check #12, runs every battery, hard-fails the round. Standing
rule: a page is not "done" until it passes per-tier.

**What it asserts (per-tier, tightened from a flat check this session):** each tier layout
emits `data-tier` on `<main>`. The gate reads it and **hard-fails any content page that
carries none of the rich components ITS OWN tier permits** per the handoff PLACEMENT-MAP
(components the map marks "—" for a tier do not satisfy it). `TIER_ALLOWED` transcribed
directly from PLACEMENT-MAP.md:

| tier | permits one of |
|------|----------------|
| hub | buyer-card · flow · pull-quote · proof-strip · stat__delta · hero__motif |
| location | buyer-card · pull-quote · intake-form · proof-strip · stat__delta · hero__motif |
| mofu | buyer-card · vs-table · flow · pull-quote · byline-block · meta-reviewed · proof-strip · error-badge · fix-steps · call-breakout · stat__delta |
| guide | vs-table · flow · pull-quote · toc · guide-grid · byline-block · meta-reviewed · stat__delta · diagram-figure |
| bofu | flow · intake-form · proof-strip · error-badge · fix-steps · call-breakout |

Excluded from the gate (own patterns): legal×4, /contact/, /quickbooks/file-review/, 404.
**Current result: 32 content pages pass per-tier on merit · debt list EMPTY.** When the
gate was first tightened it caught 9 mis-tiered t-bofu pages (hub/mofu components, no bofu
signature) — all since re-patterned.

---

## 5. CSS BYTES vs 58KB GATE

- **Minified bundle: 55,933 B / 59,392 B (58KB) hard gate — PASS** (3,459 B headroom).
- This session added zero new CSS (every component reused existing bundle classes).
- Source 80,543 B is over the 70KB soft-cap (flagged, non-blocking — the gate is on minified).
- css-drift: zero hardcoded hex, zero undeclared custom properties — PASS.

---

## 6. PAGE-COUNT ACCOUNTING (reconciled against baseline.json + reconciliation.json, not memory)

### A. Baseline universe (the old-site URL contract) — 139 pages
| bucket | count |
|--------|-------|
| (a) elevated to cobalt AND at design fidelity (truly done) | **35** |
| (b) elevated but NOT at fidelity (pre-gate debt) | **0** (debt list empty) |
| (c) NOT yet elevated (still only on the old site) | **104** |

**(c) not-elevated baselines by silo — "all baselines elevated" is half the launch gate:**
- `/accounting/` — **39** (bookkeeping hub, 18 industries, advisory children ×5, services children ×3, financial-statements, job-costing, month-end-close, reconciliation-services, chart-of-accounts-setup, 4 silo FAQs)
- `/find-an-accountant/` — **43** (CA/TX/FL/IL landings + the entire NY orphan tree: 12 cities, 9 industries, ~20 service children)
- `/quickbooks/` — **16** (consulting, desktop, enterprise, proadvisor-team, which-plan, speak-to-expert, 5 migration children, 4 payroll children, payroll faq)
- `/vs/` — **5** (the whole vs silo)
- `/partners/` — **1** (partners faq)

### B. Build-new remaining (no baseline, still to create) — ~347 planned URLs
| group | count |
|-------|-------|
| state children (build-new state landings; CA/TX/FL/IL anchors live in baseline above) | 17 |
| switch silo | 4 |
| 1099 (scattered across silos) | 5 |
| guides (/resources/guides/) | 16 |
| research (/resources/research/) | 1 |
| **expansion (everything else)** | **304** |

Expansion breakdown (largest first): qb help/symptom 46 · glossary 45 · qb online
features+integrations 31 · accounting children 24+5 · qb support silo 20 · qb other 18 ·
case-studies/reviews 12 · qb cleanup children 12 · resources checklists/templates 11 · qb
advanced 11 · blog 10 · partners children 9 · tools/calculators 9 · qb compare 8 · legal
children 8 · vs children 7 · qb reconciliation 6 · pricing children 5 · trust children 4 ·
about/team + misc 3. (Blueprint Sheet 1 plans **427 URLs** total site-vision; the per-state
child multiplication for the 4 anchor states is governed by Sheet 8 and is not fully
enumerated in these JSONs — the NY orphan tree of ~43 is the template.)

### C. Gate math — toward the 200 / all-baselines-elevated launch gate
- **Built to standard now: 38** (35 baseline-elevated + 3 build-new: `/`, `/quickbooks/file-review/`, `/resources/research/`).
- Condition 1 — **all baselines elevated:** need the **104** remaining baseline pages built. That brings the total to ~142 (139 baseline + 3 build-new).
- Condition 2 — **≥200 to standard:** at 142 you are still **58 short** of 200 → launch additionally needs ~58 build-new pages on top of the full baseline.
- **Minimum to satisfy BOTH: +162 pages (104 baseline-remainder + 58 build-new).**
- **Binding constraint: the ≥200 count.** Even with every baseline elevated (142), the
  build is 58 short of 200 — so 200 is the larger lift (162 vs 104). The 104
  baseline-remainder is the non-negotiable URL-preservation floor (those are live slugs
  that must not 404 at cutover) and must come first; 200 is reached only after a further
  ~58 build-new pages. Net: **both gates require work; ≥200 finishes last.**

---

## 7. OPEN ITEMS

- **#3 payroll "checked by default" note — APPLIED this turn.** Reconciled
  payroll-management's intake note to the truthful non-asserting wording used on the 9 bofu
  pages ("Payroll is the common reason businesses reach this page…"). The JS only
  auto-checks a service from a `?intent=` URL param, so "checked by default" was untrue for
  direct visitors.
- **#4 research-log** — held at **N=0** (no usable closed-engagement data provided; no
  fabrication). Awaiting your seed.
- **#5 t-bofu vs t-mofu** — held, no change. You will decide on preview which of the 9 are
  really t-mofu.
- **#1 QB-remainder** — HELD. Not building until you sign off the proving patterns.
- **#2 footer WCAG target-size** — queued, non-blocking.

---

## 8. COMMITS THIS SESSION
- `3aa9c63` — problem-pattern to 6 error children + hub
- `f4450ea` — tighten design-fidelity gate #12 to a real per-tier assertion
- `e88b543` — re-pattern the 9 mis-tiered bofu pages to proof-strip + intake-form
- `564de4b` — re-pattern methodology + trust to t-mofu signatures (debt list empty)
- (+ this turn) ruling #3 payroll intake-note reconciliation + this report

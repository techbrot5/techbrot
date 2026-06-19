# SECTION-SIGNATURE MAP — Design Re-Architecture handoff (STEP 1)
**Built:** 2026-06-19 · **For:** the pre-flip complete visual redesign (NOT a reskin).
**Owner doc:** this is a Design-handoff artifact (lives with `RESKIN-HANDOFF.md`); not one of the 6 canonical docs.

## What this is
The representative SAMPLE SET + signature map Design asked for. Every live page was parsed from the
**built HTML** (`_site/**/index.html`), reduced to an ordered **section signature** (per `<section>`: its
band modifiers + the meaningful body components it contains — chrome/utility ignored), and clustered.
Pages with the same signature share a layout → one redesign covers all of them.

- **586 live URLs** (excl. `/404.html`) → **580 shipped** + **6 `/dev/` samples** (preview-only, not shipped).
- **179 fine-grained raw signatures** (full machine dump: `_signature-clusters.txt`) roll up to
  **25 shipped page-type families** below. Over-splitting in the raw data is from (a) optional sections
  toggling (in-brief / ai-summary present-or-not) and (b) the **NY find-an-accountant children being
  hand-authored per page** — they predate the extracted body partials, so each NY child is its own raw
  signature even though it belongs to the same TYPE as the CA/TX/FL/IL children.
- Method/script: `_build/scripts/section_signature.py` (re-runnable). Full page→family map:
  `_build/reports/_page-family-map.txt`. URL export (STEP 2): `_build/reports/live-urls-v5.txt`.

## How to read a signature line
`hero variant → in-brief → [body sections, top to bottom] → faq → final-CTA(color)`.
The **layout shell** (breadcrumb, hero, in-brief, `{{content}}`, final-CTA band) is identical across a
family; the **body** between in-brief and faq is what varies. Chrome (header / mega-nav / footer /
mobile call-bar) is global and the same on every page.

## ⚠ Key finding for Design — TWO body languages already exist
The 580 shipped pages split into two dominant body "languages," and they look genuinely different today —
worth deciding deliberately whether the redesign keeps them distinct or unifies them:
1. **Card + diagram** (money/service/location): buyer-card grids, `deliver-card`, `process-diagram`,
   `vs-table`, `checks-list`, `num`, intake-form/`call-block`. Visual, scannable.
2. **Prose column** (QB/resources informational + help/error): `prose` sections, `fix-steps`,
   `call-breakout` (slim inline CTA), `error-badge` hero chip, `disclosure` banner. Text-led.
This is the biggest single re-architecture lever (**177 prose pages (D2) + 66 card/service pages (D1)**).

---

## SAMPLE SET (one reference page per family) — quick table
Preview base: `https://techbrot-preview.pages.dev`. CTA = final-CTA band treatment today.

| # | Family | Pages | Representative sample (richest/canonical) | AI-summary | Final-CTA |
|---|--------|------:|-------------------------------------------|-----------|-----------|
| A1 | Home | 1 | `/` | quick-5 after TL;DR | **dark** |
| B1 | Silo home hub | 4 | `/quickbooks/` | mid-page block | **dark** |
| B2 | Card-grid sub-hub / index | 11 | `/quickbooks/online/features/` | rare | **dark** |
| B3 | Light listing hub | 12 | `/glossary/` · `/blog/` · `/tools/` · `/frameworks/` | none/varies | **dark** |
| B4 | Location sub-hub (cities/industries) | 10 | `/find-an-accountant/new-york/industries/` | block | light |
| B5 | Location national hub | 1 | `/find-an-accountant/` | none | **dark** |
| C1 | Comparison hub | 2 | `/vs/` | block | light |
| C2 | Comparison page | 21 | `/vs/bookkeeper-vs-accountant/` (+ competitor + product sub-shapes) | block | light |
| D1 | Service / money page (card+diagram) | 66 | `/accounting/bookkeeping/cleanup-bookkeeping/` | block | light* |
| D2 | Prose template (help/error + informational) | 177 | error: `/quickbooks/help/error-codes/12029/` · info: `/quickbooks/which-plan-is-right/` | block | light |
| D3 | State pillar (t-location) | 5 | `/find-an-accountant/new-york/` (NY = quality bar) | block | light |
| D4 | City child | 55 | partial: `/find-an-accountant/illinois/cities/champaign/` | block | light |
| D5 | State service child | 68 | partial: `/find-an-accountant/illinois/quickbooks-accountant/` | block | light |
| D6 | Industry child | 32 | `/find-an-accountant/new-york/industries/nonprofit/` | block | light |
| D7 | Location triage (honest-triage) | 17 | `/find-an-accountant/new-york/urgent-bookkeeping/` | block | light |
| E1 | Long-form FAQ/guide (TOC sidebar) | 7 | `/accounting/bookkeeping/faq/` | block | light |
| E2 | Glossary entry | 46 | `/glossary/bank-reconciliation/` | (definition-led) | light |
| E3 | Framework page | 4 | `/frameworks/techbrot-setup-protocol/` | block | light |
| E4 | Blog article | 8 | `/blog/w2-vs-1099-worker-classification/` | optional | light |
| E5 | Tool / calculator | 9 | `/tools/bookkeeping-cost-calculator/` (+ 3 calc flavors) | block | light |
| E6 | Research flagship | 1 | `/resources/research/` | block | **dark** |
| F1 | Conversion form endpoint | 2 | `/contact/` · `/quickbooks/file-review/` | none | (form is the page) |
| F2 | Pricing page | 11 | `/pricing/` (+ `/pricing/cleanup/` child, + 5 state-pricing) | block | light |
| G1 | Legal document | 4 | `/legal/privacy-policy/` | none | none |
| G2 | Editorial / trust standalone | 6 | `/about/` · `/trust/` · `/partners/` | block | varies |
| ZZ | Dev sample (not shipped) | 6 | `/dev/sample-t-hub/` (one per tier) | — | — |

\* D1 final-CTA is usually **light**; flagship money pages (e.g. cleanup-bookkeeping) take the earned **dark** band.

**Total shipped = 580** (sum of A–G). Dev = 6. Grand total live = 586.

---

## CLUSTER DETAIL (ordered section signatures + sample set)

### Cluster 1 — HUBS & INDEXES (A1, B1–B5)  · 39 pages
Editorial landings + card-grid indexes. **Final-CTA = dark** on all except location sub-hubs (B4 light).

**A1 · Home** (1) — `/`
`split hero+figure → in-brief → TL;DR → quick-5/ai-summary → review+team cards → buyer-card grid → process-diagram → trust+review → vs-table → review cards → DARK cta`. Unique; give it a bespoke home treatment.

**B1 · Silo home hub** (4) — REP `/quickbooks/`; also `/accounting/`, `/accounting/services/`, `/accounting/bookkeeping/`
`split hero+figure → in-brief → (stat-row|TL;DR) → ai-summary → review/team card row → buyer-card grid → process-diagram → vs-table → faq → DARK cta`. The top-of-silo editorial landing.

**B2 · Card-grid sub-hub / index** (11) — REP `/quickbooks/online/features/`; e.g. `/accounting/tax/`, `/quickbooks/compare/`, `/quickbooks/online/advanced/`, `/resources/guides/`, `/platforms/`, `/switch/`, `/accounting-systems/`
`hero--hub (dark) → in-brief → prose → buyer-card grid(s) → prose → faq → DARK cta`. Pure "list my children as cards."

**B3 · Light listing hub** (12) — four sub-shapes, all light/compact hero:
`/glossary/` (related-grid term list) · `/frameworks/` (related-grid) · `/tools/` (review-card + figure) · `/blog/` + 8× `/blog/category/*` (review-card post list). Pick **one treatment**, parameterized by card type.

**B4 · Location sub-hub** (10) — REP `/find-an-accountant/new-york/industries/`; the 4 state `cities/` + `industries/` hubs + NY's two
`compact/split hero → in-brief → prose → buyer-card grid → faq → cta`. Subordinate to the state pillar.

**B5 · Location national hub** (1) — `/find-an-accountant/`
`split hero+figure → in-brief → state-router + buyer-card → process-diagram → deliver-card → call-breakout → faq → DARK cta`. The only page using `state-router`.

### Cluster 2 — COMPARISON (C1–C2) · 23 pages
**C1 · Comparison hub** (2) — `/vs/`, `/quickbooks/compare/`: `compact hero → in-brief → byline → ai-summary → vs-table → buyer-card → prose → cta`.
**C2 · Comparison page** (21) — three sub-shapes sharing one signature:
- **role/structure** (shared `vs-compare-body` partial, 5): REP `/vs/bookkeeper-vs-accountant/`
- **competitor** (techbrot-vs-X, 9): `/vs/techbrot-vs-bench/`
- **product** (quickbooks-vs-X, 6): `/quickbooks/compare/quickbooks-vs-xero/`
Signature: `compact hero → in-brief → byline → prose → ai-summary → vs-scroll/vs-table → buyer-card → faq+meta → trust → cta`. The `vs-table` is the centerpiece component.

### Cluster 3 — MONEY / SERVICE, card+diagram (D1) · 66 pages
**D1 · Service / money page** — REP **`/accounting/bookkeeping/cleanup-bookkeeping/`** (founder's named example; carries `deliver-card`, `call-block`, `proof-strip`, `vs-table`, `process-diagram`, `pull-quote`).
Canonical order: `compact/split hero (±figure) → in-brief → proof-strip → prose/pull-quote → buyer-card → ai-summary → deliver-card | num → process-diagram → vs-table → review-card+checks-list → prose+trust-row → (intake-form | call-block) → faq → cta`.
Spread: **/accounting ×46, /quickbooks ×20** (e.g. `/quickbooks/cleanup/`, `/quickbooks/setup/`, `/quickbooks/migration/desktop-to-online/`, `/accounting/payroll-management/`, all `/accounting/industries/*`, all `/accounting/advisory/*`).
⚠ **No single page carries every optional section** — the conversion seam alternates between `intake-form` (catch-up, monthly, setup, migration) and `call-block` (cleanup-bookkeeping, proadvisor-near-me). Design should see **both**: also pull `/accounting/bookkeeping/catch-up-bookkeeping/` (intake-form) alongside the REP (call-block).
⚠ **~6 section-root index hubs sit in D1 structurally** though they function as hubs (`/accounting/industries/`, `/accounting/advisory/`, `/quickbooks/help/`, `/quickbooks/help/error-codes/`, `/quickbooks/migration/`, `/quickbooks/support/`) — they use the card body but role-wise belong with the hub system; Design's call.

### Cluster 4 — PROSE TEMPLATE: informational + help/error (D2) · 177 pages
**D2 · Prose template** — the backbone template (the single largest family). Same prose body language, two flavors:
- **Help/error**: REP `/quickbooks/help/error-codes/12029/` — `error-badge hero → in-brief → disclosure → byline → stat-row → prose → ai-summary → fix-steps → call-breakout → prose+trust → faq+meta → light cta`.
- **Informational/feature/product**: REP `/quickbooks/which-plan-is-right/` (also `/quickbooks/online/`, `/desktop/`, `/training/`, `/payroll/*`, `/proadvisor-cost/`, `/proadvisor-team/`, `/consulting/`, `/enterprise/`) — `compact hero → in-brief → byline → stat-row → prose → ai-summary → prose → (vs-table|buyer-card) → prose+trust → faq+meta → light cta`. Drops `disclosure`/`fix-steps`.
Spread: **/quickbooks ×137, /resources ×19, /accounting ×13, /switch ×4** + singletons. Uses `call-breakout` (slim inline CTA), NOT the card-grid conversion seam.

### Cluster 5 — LOCATION CHILDREN (D3–D7) · 177 pages  ← the namesake engine
All t-location, **final-CTA light**. The CA/TX/FL/IL children are **partial-generated** (consistent);
the **NY children are hand-authored** (each its own raw signature, same TYPE). The redesign should target
the partial + the NY pages will need re-aligning to it (or the partials re-applied to NY).

**D3 · State pillar** (5) — REP **`/find-an-accountant/new-york/`** (NY is the explicit quality bar; CA/TX/FL/IL are clones). The richest page on the site (**27 sections**): split hero+figure → in-brief → prose → proof-strip → stat → ai-summary → multiple prose/buyer-card/checks-list bands → vs-table → **intake-form** (bottom, minimal) → review-card → faq → byline → cta.
**D4 · City child** (55) — partial REP `/find-an-accountant/illinois/cities/champaign/`; NY bespoke e.g. `/find-an-accountant/new-york/cities/albany/` (some NY cities carry an extra intake-form). `compact hero → in-brief → prose → ai-summary → proof-strip → checks-list → buyer-card → faq → trust/byline → cta`.
**D5 · State service child** (68) — partial REP `/find-an-accountant/illinois/quickbooks-accountant/` (shared `state-service-body`); NY bespoke e.g. `/find-an-accountant/new-york/quickbooks-migration/`. `split hero+figure → in-brief → prose → ai-summary → buyer-card ×2 → checks-list → prose → faq → byline → cta`.
**D6 · Industry child** (32) — REP `/find-an-accountant/new-york/industries/nonprofit/` (shared `state-industry-body`). `compact hero → in-brief → prose → ai-summary → buyer-card ×2 → checks-list → prose → faq → byline → cta`.
**D7 · Location triage** (17) — honest-triage; REP `/find-an-accountant/new-york/urgent-bookkeeping/` (+ `state-tax-notice-help`, `speak-to-a-proadvisor`). Distinctive: **`disclosure` banner above the fold + `call-breakout` high**. `compact hero → in-brief → disclosure → call-breakout → prose → buyer-card → ai-summary → checks-list → faq → byline → cta`. (Same Sheet-7 discipline as QB `speak-to-a-quickbooks-expert`.)

### Cluster 6 — GUIDES & REFERENCE (E1–E6) · 75 pages
**E1 · Long-form FAQ/guide (TOC sidebar)** (7) — REP `/accounting/bookkeeping/faq/`; also `/accounting/faq/`, `/quickbooks/faq/`, `/quickbooks/payroll/faq/`, `/partners/faq/`. The **only** family with `guide-grid` + sticky `toc` + `article` long-form + `byline`+`meta-reviewed`. Split article hero.
**E2 · Glossary entry** (46) — REP `/glossary/bank-reconciliation/` (richest, has `diagram-feature`). `compact hero → in-brief → prose (definition) → pull-quote → (diagram-feature) → call-breakout → related-grid → byline+meta → light cta`. Definition-led; the AI-citation magnet.
**E3 · Framework page** (4) — REP `/frameworks/techbrot-setup-protocol/`. `compact hero → in-brief → prose → pull-quote → process-diagram → ai-summary → buyer-card → related-grid → faq → byline+meta → cta`. Coined-concept DefinedTerm pages.
**E4 · Blog article** (8) — REP `/blog/w2-vs-1099-worker-classification/`. t-article: `byline-block hero (category eyebrow) → prose → faq → review-card related → light cta`. Firm byline, founder-name-zero.
**E5 · Tool / calculator** (9) — REP `/tools/bookkeeping-cost-calculator/`. Three JS-island flavors share the shell: band-estimator (`tb-calc`), formula (`tb-formula`), selector (`tb-select`) + `sales-tax-rate-lookup` (call-based, no live calc). `compact hero → in-brief → calc island → vs-table/flow → ai-summary → review-card → faq → cta`.
**E6 · Research flagship** (1) — `/resources/research/`. Unique: `split hero+figure → in-brief → TL;DR → prose → process-diagram → stat-row → review-card → ai-summary → disclosure → faq → DARK cta`.

### Cluster 7 — CONVERSION & STANDALONE (F1–F2, G1–G2) · 23 pages
**F1 · Conversion form endpoint** (2) — `/contact/`, `/quickbooks/file-review/`. **Minimal chrome** (logo + phone only). `(no hero) → contact-form-wrap + intake-form → checks-list → trust+review → faq`. The form IS the page.
**F2 · Pricing page** (11) — REP `/pricing/` (+ 5 children `/pricing/{bookkeeping,cleanup,payroll,cfo,quickbooks-setup}/` + 5 state `/find-an-accountant/<state>/pricing/`). `compact hero → in-brief → TL;DR → flow (path-to-fixed-fee) → ai-summary → review-card/team-card pricing tiers → vs-table → legal-doc (fine print) → faq → cta`. Canonical Sheet-0 figures only.
**G1 · Legal document** (4) — `/legal/privacy-policy/`, `/terms/`, `/dpa/`, `/disclaimer/`. **No hero, no CTA** — `legal-doc` sections only. Needs a clean reading treatment (TOC optional).
**G2 · Editorial / trust standalone** (6) — `/about/`, `/about/methodology/`, `/about/network/`, `/trust/`, `/partners/`, `/reviews/`. Each somewhat bespoke but shares the editorial toolkit: `tldr`, `process-diagram`, `review-card`/`team-card`, `legal-doc`, `pull-quote`, `faq`. Highest E-E-A-T surface.

### ZZ — Dev samples (6, NOT shipped) — `/dev/sample-t-{hub,bofu,mofu,guide,location}/`, `/dev/form-test/`
One per tier; preview-only kitchen-sink pages. Useful to Design as the cleanest minimal view of each tier
shell, but they are NOT in the sitemap and not real content.

---

## Per-type treatment notes Design specifically asked about
- **AI-summary block** (`ai-summary`, "For AI engines & quick answers"): present on nearly every family
  EXCEPT B3/B5/F1/G1 and most G2. It currently looks identical everywhere (`ai-summary--ruled`). This is
  a prime candidate for **per-type differentiation** (hub vs money vs guide vs location).
- **Final-CTA band**: **dark** today on Home, B1, B2, B3, B5, E6 (the "earned dark moment"); **light**
  everywhere else; **absent** on G1 (legal). Decide the dark/light rule per type deliberately.
- **Hero**: 4 variants in use — `hero--hub` (dark, B2/B3-some), `hero--location` (dark contour, legacy
  fallback), `hero--split + figure` (editorial, B1/D1/D3/home/guides), `hero--compact` (plain, D2/E2/most).
- **Conversion seam**: card-grid families use `intake-form` OR `call-block`; prose families use the slim
  `call-breakout`; F1 is form-only. Three different conversion treatments already — unify or differentiate.

## Data files (for the v5 blueprint + audit)
- `live-urls-v5.txt` — all 586 live URLs, sorted (STEP 2 export).
- `_page-family-map.txt` — every URL → its family (580 shipped + 6 dev).
- `_families.txt` — family rollup with dir breakdown.
- `_signature-clusters.txt` — full 179 raw signatures (richest member, members, dirs).
- `_build/scripts/section_signature.py` — re-runnable generator (re-run after any rebuild).

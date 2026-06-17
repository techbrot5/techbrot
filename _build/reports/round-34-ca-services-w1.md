# Round 34 — DEPTH BUILD-OUT · CA SERVICE CLUSTER WAVE 1 (5 pages) + new shared service template
Founder directive 2026-06-17: **depth first** — fully build out NY/CA/TX/FL/IL per v4 before any new
states. Scope presented + confirmed last turn. Building state-by-state, **California first**, layered:
services → industries → cities-hub → pillar re-link. This is the first CA-services wave.

## v4 per-state plan (the scope, confirmed)
Every full state = Pillar + Money(6) + QB-spokes(6) + Bookkeeping-spokes(3) + Tax-cluster(varies) +
Industries(hub+6 state-weighted) + Cities(hub+N). NY = master (39, DONE). Remaining to fully build out:
**CA ~27 · TX ~26 · FL ~26 · IL ~27 ≈ 106 pages** (NY done). v4 rules honored: industries = only the
state-weighted 6 (rest → global /accounting/industries/*); advisory/comparisons/payroll → global; tax
cluster varies by state; NO /near-me/ URLs; children-on-pillar (re-link pillar ecosystem once built).

## WHAT I DID THIS WAVE
- **NEW shared template `partials/state-service-body.njk`** (t-bofu) — one source for every per-state
  service child; DOM modelled on the founder-approved NY service children (summary · ai-5Q · value-stack ·
  STATE-FACTS band · scope do/don't · process · advisory · FAQ · expert-review). Reuses the existing
  `_build/lib/city-child.js` schema helper. Each service = a one-line `.njk` + a rich `.11tydata.js`.
- **CA money/bookkeeping service cluster (5):** the v4 money-cluster core + a bookkeeping spoke —
  `/find-an-accountant/california/{quickbooks-accountant, small-business-accountant, bookkeeping-services,
  virtual-bookkeeper, monthly-bookkeeping}/`. Each carries the REAL CA tax-facts band ($800 FTB franchise
  tax · CDTFA district sales tax to 10.25% · AB5) plus genuinely service-distinct CA content (summary, 5
  AI Q&A, value stack, scope, process, 8 FAQ). Internal links wired to the CA pillar + sibling CA services
  + global /accounting/* + /quickbooks/* (all resolve).

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-accountant/ — CA umbrella "QuickBooks accountant/ProAdvisor near me".
- https://techbrot-preview.pages.dev/find-an-accountant/california/small-business-accountant/ — CA TOFU "small business accountant".
- https://techbrot-preview.pages.dev/find-an-accountant/california/bookkeeping-services/ — CA bookkeeping (monthly/cleanup/catch-up).
- https://techbrot-preview.pages.dev/find-an-accountant/california/virtual-bookkeeper/ — CA remote/virtual bookkeeping.
- https://techbrot-preview.pages.dev/find-an-accountant/california/monthly-bookkeeping/ — CA recurring monthly close.

## DECISIONS / JUDGMENT CALLS
- **New service-child type = an approved type re-applied** (NY's t-bofu service children, founder-OK'd), so
  no new-type proof gate — fanned directly. Used a shared one-source template (RS8) like the city template.
- **Honesty:** CA facts band describes the real CA stack and defers filing/disputes to the FTB/CDTFA/EDD +
  CPA/EA on every page; founder-name-zero (review byline = "the accounting team at TechBrot Inc."; David
  Westgate only in the global Person schema); independent, not Intuit; pricing = the firm's standard
  fixed-fee ranges; no fabricated counts/clients.
- **Distinctness:** each service page is service-distinct (the umbrella, TOFU SMB, bookkeeping, virtual,
  monthly each lead differently) AND CA-specific (the facts band + CA hooks throughout). Not mad-libs.
- **Deferred to later CA waves:** `speak-to-a-proadvisor` (honest-triage — needs the amber disclosure) and
  `pricing` (table page) have special structures; building them in a dedicated CA wave, not on this template.
- **Links gate caught 2 forward-refs** to CA children not built yet (`california/quickbooks-cleanup/`,
  `california/sales-tax-help/`). Re-pointed to existing global pages (`/quickbooks/cleanup/`,
  `/accounting/sales-tax-compliance/`) so the gate passes; **TODO: re-link to the CA children when the CA
  QB-spokes + tax-cluster waves ship** (tracked below). Battery re-ran GREEN after the fix.

## VERIFICATION
- **BATTERY GREEN (hard gate)** — all 5: 8 FAQ · faq-overlap zero · faq-schema-verbatim (8 Q/A). links
  resolve · css-bytes 77,931 B / 83,968 B (no new CSS) · manifest · design-fidelity (+5, t-bofu correct) ·
  variety-12a. (`PYTHONUTF8=1` console-encoding workaround.)
- **Schema (built HTML):** WebPage + BreadcrumbList + Service (areaServed State=California) + FAQPage +
  speakable (`#ca-svc-*-summary`, `#ca-svc-*-ai-summary-list`) + reviewedBy `#david-westgate`. 5 AI Q&A, 8 FAQ.
- **a11y + overflow (chrome probes ENV-BLOCKED):** static proxy + SF-equivalence. All 5: 1 h1, heading-order
  OK, 0 img-without-alt, 0 overflow-risk long tokens, speakable present; only empty-text links/buttons are
  the global chrome's aria-labelled elements. Clean by construction (t-bofu = same proven components).

## ⛔ FLIP-BLOCKER LIST (cutover gate #6) — updated
Inferred-clean (static-proxy + SF-equivalence), pending LIVE axe/overflow on the founder's machine before
flip: **26 city children + 24 glossary + 5 CA service children = 55 pages.** Running list grows each wave.

## NEXT (autonomous, depth — California continues)
CA remaining ≈ 22: QB spokes (6: setup, cleanup, reconciliation, migration, training, error-fixes) → tax
cluster (4: sales-tax-help, ab5-worker-classification, state-tax-notice-help, business-tax-problems) →
pricing + speak-to-a-proadvisor (2 special) → industries hub + 6 (ecommerce, agency, restaurant,
real-estate, professional-services, construction) → cities-hub → re-link the CA pillar ecosystem to children.
Then TX, FL, IL. NY done.

COUNT: total pages live = 199 · re-skinned (142) + growth this phase = 57 · pages added THIS turn =
/find-an-accountant/california/{quickbooks-accountant, small-business-accountant, bookkeeping-services,
virtual-bookkeeper, monthly-bookkeeping}/ (5 CA service children) · remaining in current cluster = CA depth
build-out (~22 more: QB spokes, tax, pricing/triage, industries hub+6, cities-hub, pillar re-link) ·
next = CA QB-spokes wave. State depth: NY ✅ full · CA pillar+11 cities+5 services · TX/FL/IL pillar+5 cities.

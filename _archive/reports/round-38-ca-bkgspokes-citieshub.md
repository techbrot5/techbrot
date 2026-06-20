# Round 38 — DEPTH BUILD-OUT · CA bookkeeping spokes + cities-hub (3 pages)
Depth build-out, California nearing complete. v4 bookkeeping spokes (cleanup-bookkeeping, urgent-bookkeeping)
on the shared state-service-body, + the cities-hub (t-location). Continues round 34–37.

## WHAT I DID
- **cleanup-bookkeeping** (`/find-an-accountant/california/cleanup-bookkeeping/`) — the books CATCH-UP/cleanup
  (months/years behind → CPA-ready), distinct from the QB-spoke quickbooks-cleanup (file/technical). CA-specific:
  every back period reconciled, district sales tax rebuilt by location per period, **the $800 franchise tax
  accrued for every missed year**, AB5 classification cleaned. ($1,500–$15,000+ cleanup; $2,000–$20,000+ multi-year.)
- **urgent-bookkeeping** (`/find-an-accountant/california/urgent-bookkeeping/`) — deadline-driven (loan/sale/board/
  diligence/tax-deadline). Honest: "accuracy not sacrificed for speed", "won't promise a deadline we can't hit",
  CDTFA sales tax + $800 franchise tax kept right (the items diligence checks). No false-urgency claims.
- **cities-hub** (`/find-an-accountant/california/cities/`, t-location) — routes to the 11 CA city children, each
  with its real city-tax hook (SF GRT, LA LABT, San Jose per-employee, Oakland Measure T…) + all-58-counties-remote.
  CollectionPage + ItemList(11) + BreadcrumbList + FAQPage + speakable.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/california/cleanup-bookkeeping/
- https://techbrot-preview.pages.dev/find-an-accountant/california/urgent-bookkeeping/
- https://techbrot-preview.pages.dev/find-an-accountant/california/cities/ — the CA cities hub.

## DECISIONS / JUDGMENT CALLS
- **cleanup-bookkeeping vs quickbooks-cleanup distinction kept clean:** the QB spoke = file/technical cleanup
  (flat-rate sales tax, OBE, error codes); the bookkeeping spoke = behind-books catch-up (reconcile + accrue +
  reconstruct missed periods). They cross-link rather than overlap.
- **urgent-bookkeeping honesty:** deadline pages invite over-promising; this one explicitly won't promise an
  unhittable deadline, won't trade accuracy for speed, and defers filing/representation to the CPA. No "we'll
  resolve it" claims.
- **cities-hub is additive** (no city child references it in breadcrumb — the city breadcrumb intentionally skips a
  Cities crump), so it's pure routing/SEO with zero gate dependency.
- Honesty held throughout: deferred to FTB/CDTFA/EDD + CPA; founder-name-zero; not Intuit; standard fixed-fee ranges.

## VERIFICATION
- **BATTERY** — (verdict appended at commit; expected GREEN). 2 services 8-FAQ; hub 6-FAQ. css 77,931 B (no new
  CSS) · manifest · design-fidelity (+3) · variety-12a · links resolve (no forward-refs — all targets built).
- **Schema:** services = WebPage+BreadcrumbList+Service(areaServed=CA)+FAQPage+speakable; hub = CollectionPage+
  ItemList(11)+BreadcrumbList+FAQPage+speakable.
- **a11y/overflow (chrome probes ENV-BLOCKED):** static proxy + SF-equivalence.

## ⛔ FLIP-BLOCKER (cutover gate #6) — updated
Inferred-clean pending LIVE axe/overflow on the founder's machine: ~75 growth pages (26 city + 24 glossary +
17 CA service + 7 CA industry + 2 hubs).

## NEXT (autonomous — FINISH California, then TX)
CA remaining = **3:** `speak-to-a-proadvisor` (bespoke honest-triage BOFU, light not-Intuit disclosure + call-
breakout, modeled on the approved NY page) · `pricing` (CA fixed-fee table page) · **the pillar ecosystem RE-LINK**
(v4 children-on-pillar rule — convert the CA pillar's ecosystem labels to descriptive anchors now that the children
exist; needs an njk tweak + ~25 href mappings, done carefully on the approved pillar). Then **TX → FL → IL** on the
four proven templates (data files only).

COUNT: total pages live = 219 · re-skinned (142) + growth this phase = 77 · pages added THIS turn =
/find-an-accountant/california/{cleanup-bookkeeping, urgent-bookkeeping}/ + /california/cities/ (2 bkg spokes +
cities-hub) · remaining in current cluster = CA final 3 (speak-to-a-proadvisor, pricing, pillar re-link) ·
next = CA speak-to-a-proadvisor + pricing + pillar re-link → then Texas depth.
State depth: NY ✅ · CA pillar + 11 cities + cities-hub + 17 services + 6 industries + industries-hub · TX/FL/IL pillar+5 cities.

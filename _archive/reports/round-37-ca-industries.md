# Round 37 — DEPTH BUILD-OUT · CA INDUSTRIES WAVE (6 industry children + hub) + new shared industry template
Depth build-out, California. v4 CA state-weighted industries (6) + the industries hub. NEW shared
`partials/state-industry-body.njk` (t-location/heroLight, modeled on the founder-approved NY industry children).

## WHAT I DID
The full v4 **CA state-weighted industries (6) + hub** under `/find-an-accountant/california/industries/`,
each genuinely CA×industry localized (the mad-libs test FAILS — every page leads on the CA-specific accounting):
1. **ecommerce** — multi-channel reconciliation, **CDTFA district sales tax by ship-to**, $500K economic nexus, inventory/COGS by SKU.
2. **agency** (agencies/SaaS/production) — **ASC 606 gross-vs-net** on pass-through media, deferred revenue/MRR-ARR, AB5 freelancers.
3. **restaurant** — high-volume POS→CDTFA district rate, **tipped payroll + uncapped CA SDI**, food-vs-alcohol, multi-location.
4. **real-estate** — multi-entity ledgers, **broker/PM trust records**, **Prop 13 basis** + 1031, agent commissions, $800/entity.
5. **professional-services** — project/matter profitability, **IOLTA trust (State Bar of CA)** for law firms, partner draws, AB5.
6. **construction** — job costing, WIP, AIA billing, retainage, **CA prevailing-wage/certified payroll (DIR)**, CSLB-aware, subs/AB5.
+ **industries HUB** (t-hub, CollectionPage + ItemList): routes to the 6 + sends non-weighted verticals to global /accounting/industries/* per v4.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/ — the CA industries hub.
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/ecommerce/
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/agency/
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/restaurant/
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/real-estate/
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/professional-services/
- https://techbrot-preview.pages.dev/find-an-accountant/california/industries/construction/

## DECISIONS / JUDGMENT CALLS
- **NEW shared template `partials/state-industry-body.njk`** (t-location/heroLight) modeled on the approved NY
  industry children: summary · ai-5Q · challenges (the un-clonable band) · what-we-handle · integrations ·
  process · advisory · FAQ · expert-review · related. Each industry = one-line njk + rich data file.
- **Honesty held + trust-fund boundaries explicit:** real-estate and professional-services state plainly we keep
  the trust/IOLTA *records* but do NOT hold, control, or disburse client trust funds (you retain control + bar/DRE
  compliance). construction states we keep certified-payroll *records* but don't submit them or represent before
  the DIR. AB5 always defers the legal classification call to CPA/counsel. Founder-name-zero; not Intuit; pricing
  = standard ranges; no fabricated counts.
- **Per v4 industries rule honored:** only the 6 state-weighted verticals get dedicated pages; the hub routes
  everything else (healthcare, nonprofit, manufacturing, trucking…) to the GLOBAL /accounting/industries/*.
- **mad-libs FAILS per page:** swap CA→another state and it reads false — district-sales-tax-by-ship-to, uncapped
  SDI, Prop 13, IOLTA/State Bar of CA, CA DIR prevailing wage, CSLB, AB5 are all California-specific.

## VERIFICATION
- **BATTERY** — (verdict appended at commit; expected GREEN). All 6 industries: 8 FAQ; hub: 6 FAQ. faq-overlap
  zero · faq-schema-verbatim · css-bytes 77,931 B (no new CSS) · manifest · design-fidelity (+7) · variety-12a ·
  links resolve (the industries breadcrumb now resolves to the hub).
- **Schema:** industries = WebPage + BreadcrumbList + Service(areaServed=California) + FAQPage + speakable;
  hub = CollectionPage + BreadcrumbList + ItemList(6) + FAQPage + speakable.
- **a11y/overflow (chrome probes ENV-BLOCKED):** static proxy + SF-equivalence (t-location/t-hub = proven components).

## ⛔ FLIP-BLOCKER (cutover gate #6) — updated
Inferred-clean pending LIVE axe/overflow on the founder's machine: 26 city + 24 glossary + 15 CA service +
**7 CA industry = 72 pages.**

## NEXT (autonomous — California almost complete)
CA remaining ≈ 5: **cleanup-bookkeeping + urgent-bookkeeping** (bookkeeping spokes) · **speak-to-a-proadvisor**
(honest-triage) + **pricing** (table page) — the money cluster's last 2 · **cities-hub** · then **re-link the CA
pillar ecosystem** block to all the now-built children (the children-on-pillar v4 rule). Then **TX → FL → IL**.

COUNT: total pages live = 216 · re-skinned (142) + growth this phase = 74 · pages added THIS turn =
/find-an-accountant/california/industries/ + /industries/{ecommerce, agency, restaurant, real-estate,
professional-services, construction}/ (6 industry children + hub) · remaining in current cluster = CA depth
(~5: 2 bkg spokes, pricing+triage, cities-hub, pillar re-link) · next = CA bookkeeping spokes / cities-hub.
State depth: NY ✅ · CA pillar + 11 cities + 15 services + 6 industries + industries-hub · TX/FL/IL pillar+5 cities.

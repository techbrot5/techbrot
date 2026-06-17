# Round 47 — DEPTH BUILD-OUT · FLORIDA wave 3 (bookkeeping spokes 2 + industries hub+6)
Third Florida depth wave. The 2 remaining bookkeeping spokes + the full industries cluster
(hub + 6 Florida-weighted verticals). bkg-spokes on `state-service-body.njk`; industries on
`state-industry-body.njk` + a t-hub.

## WHAT I BUILT (9 pages)
**Bookkeeping spokes (2):**
1. `/find-an-accountant/florida/cleanup-bookkeeping/` — bookkeeping BACKLOG catch-up · 6-FAQ
2. `/find-an-accountant/florida/urgent-bookkeeping/` — fast-turnaround for a deadline; "reconciled, not rushed" · 6-FAQ

**Industries hub + 6 (t-location):**
3. `/find-an-accountant/florida/industries/` — hub (CollectionPage + ItemList) · 6-FAQ
4. `…/industries/hospitality/` — the county **Tourist Development Tax** (bed tax), high-volume POS, tipped payroll, food-vs-alcohol · 7-FAQ
5. `…/industries/real-estate/` — multi-entity, trust records, the **TDT on short-term/vacation rentals**, property tax, 1031 · 7-FAQ
6. `…/industries/marine/` — the **Florida vessel sales-tax CAP**, boat-dealer inventory, marina slip/fuel/storage/repair, yacht-brokerage trust · 7-FAQ
7. `…/industries/construction/` — the **real-property-improvement** sales-tax rule, job costing/WIP/AIA/retainage, DBPR/bonding, 1099 subs · 7-FAQ
8. `…/industries/healthcare/` — insurance-AR reconciliation, PA/PLLC corporate tax, books-only/no-PHI · 7-FAQ
9. `…/industries/professional-services/` — project/matter profitability, **Florida Bar IOLTA** trust records, partner draws, PA corporate tax · 7-FAQ

## FL LOCALIZATION (genuinely distinct from CA, TX — mad-libs fails hard)
The verticals are FL-weighted and FL-real, NOT the TX set swapped:
- **hospitality** leads on the **Tourist Development Tax** (county bed tax on lodging) — a FL signature.
- **marine** (a FL-only-weighted vertical CA/TX don't have): the **vessel sales-tax cap**, dealer inventory,
  yacht-brokerage escrow — genuinely un-clonable Florida.
- **construction**: the FL **real-property-improvement** contractor-as-consumer rule (distinct from TX's
  lump-sum/separated and CA's prevailing-wage framing).
- **real-estate**: the **short-term/vacation-rental TDT** stack (FL's huge STR market) on top of trust records.

## HONESTY (hard gates held)
- **Trust-fund boundary explicit** on real-estate (broker/PM), marine (yacht-brokerage escrow), and
  professional-services (Florida Bar IOLTA): keep RECORDS, reconcile, NEVER hold/disburse client/escrow funds.
- **healthcare books-only / no-PHI**: financial summaries only; never accesses PHI or EHR.
- marine/construction/hospitality: the vessel cap, contract taxability, and TDT rates deferred to the DOR +
  county + CPA ("rates change / confirm"); we track, your CPA determines and files.
- urgent-bookkeeping: no filing/financing-outcome guarantees; "reconciled, not rushed."
- Founder-name-zero; independent/not-Intuit; canonical pricing.

## VERIFICATION
- **BATTERY** — (verdict appended at commit). 9 pages: faq-min-6 ✓, faq-overlap zero, faq-schema-verbatim,
  design-fidelity per-tier, hub CollectionPage+ItemList. url-set: 9 URLs added. css 77,931 B (no new CSS).
- **a11y/overflow (chrome ENV-BLOCKED):** static proxy + CA/TX byte-equivalence (same templates). Flip-blocker #6.

## FLORIDA PROGRESS (v4 depth)
- Pillar (re-link pending) · Money 4/6 + speak ✅ (pricing pending) · Tax 2/2 ✅ · QB spokes 6/6 ✅ ·
  **Bkg spokes 3/3 ✅** · **Industries hub + 6/6 ✅** · Cities 5/6 (+1 pending) + cities-hub pending · pricing pending.

## NEXT (autonomous) — FL cities finish + pricing + pillar re-link → FLORIDA COMPLETE
6th FL city + cities-hub + the FL pricing page + the pillar ecosystem re-link (links the built speak +
business-tax-problems if added) → FLORIDA COMPLETE. Then IL.

COUNT: total pages live = 271 · re-skinned (142) + growth this phase = 129 · pages added THIS turn =
9 (FL bkg 2 + industries hub+6) · remaining in FL cluster ≈ 4 (6th city + cities-hub + pricing + pillar re-link) ·
next = FL cities finish + pricing + pillar re-link.
State depth: NY ✅ · CA ✅ COMPLETE (39) · TX ✅ COMPLETE incl. triage (32) · **FL in progress (pillar + 5 cities + 16 services + industries hub+6)** · IL pillar + 5 cities.

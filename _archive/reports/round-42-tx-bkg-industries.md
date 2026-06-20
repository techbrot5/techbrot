# Round 42 — DEPTH BUILD-OUT · TEXAS wave 3 (bookkeeping spokes 2 + industries hub+6)
Third Texas depth wave. The 2 remaining bookkeeping spokes + the full industries cluster (hub + 6
state-weighted verticals). bkg-spokes on `state-service-body.njk` (t-bofu); industries on
`state-industry-body.njk` (t-location/heroLight) + a t-hub. Non-triage; TX triage page
(speak-to-a-proadvisor) stays HELD per the founder gate.

## WHAT I BUILT (9 pages)
**Bookkeeping spokes (2):**
1. `/find-an-accountant/texas/cleanup-bookkeeping/` — the BOOKKEEPING BACKLOG catch-up (distinct
   intent from quickbooks-cleanup's file-mechanics) · 6-FAQ
2. `/find-an-accountant/texas/urgent-bookkeeping/` — fast-turnaround for a deadline (franchise-tax
   due / loan / sale / sales-tax period closing); "reconciled, not rushed" · 6-FAQ

**Industries hub + 6 (t-location):**
3. `/find-an-accountant/texas/industries/` — hub (CollectionPage + ItemList) · 6-FAQ
4. `/find-an-accountant/texas/industries/construction/` — lump-sum vs separated sales-tax contracts (TX-distinctive), job costing/WIP/AIA/retainage, margin-tax COGS, 1099 subs · 7-FAQ
5. `/find-an-accountant/texas/industries/manufacturing/` — the TX machinery & equipment sales-tax EXEMPTION, inventory/standard costing, COGS-favorable margin tax · 7-FAQ
6. `/find-an-accountant/texas/industries/real-estate/` — multi-entity, trust-RECORD keeping (never hold funds), heavy TX property tax, 1031 · 7-FAQ
7. `/find-an-accountant/texas/industries/trucking/` — cost-per-mile, IFTA fuel-tax records, IRP, owner-op 1099 (IRS test), HVUT 2290 · 7-FAQ
8. `/find-an-accountant/texas/industries/healthcare/` — insurance-AR reconciliation, PLLC margin tax, books-only/no-PHI · 7-FAQ
9. `/find-an-accountant/texas/industries/professional-services/` — project/matter profitability, IOLTA trust-record keeping (never hold funds), margin-tax compensation deduction · 7-FAQ

## TX LOCALIZATION (genuinely distinct from CA — mad-libs fails hard)
The industries are NOT the CA set keyword-swapped. The TX verticals (per v4) and their TX-real hooks:
- **construction**: the **lump-sum vs separated** sales-tax contract rule (Comptroller) — a genuinely
  TX-distinctive issue CA doesn't have; Davis-Bacon only on FEDERAL jobs (no statewide prevailing wage).
- **manufacturing**: the **TX manufacturing machinery & equipment sales-tax exemption** + COGS-favorable margin tax.
- **trucking** (a TX-weighted vertical CA doesn't have): IFTA / IRP / HVUT — real interstate-carrier tax stack.
- 1099 contractors use the **IRS common-law test, NOT California's ABC/AB5** — stated explicitly on every
  relevant page (construction, trucking, professional-services).

## HONESTY (hard gates held)
- **Trust-fund boundary explicit** on real-estate (broker/PM trust) and professional-services (law-firm
  IOLTA): we keep RECORDS and reconcile; we NEVER hold, control, or disburse client/escrow funds.
- **healthcare books-only / no-PHI**: works strictly from financial summaries; never accesses PHI or EHR.
- **manufacturing/construction**: exemption eligibility and contract taxability deferred to the Comptroller
  + CPA ("don't assume — confirm before claiming"); we track, your CPA determines and files.
- **urgent-bookkeeping**: no filing/financing-outcome guarantees; "reconciled, not rushed."
- Founder-name-zero; independent/not-Intuit; canonical pricing.

## FIXES (root-caused)
- **cta-lexicon**: urgent-bookkeeping used "Speak to a ProAdvisor now" (not in lexicon) → "Speak to a
  ProAdvisor". Caught by the battery, fixed.
- Industry data files are 4 levels deep → require path `../../../../_build/lib/city-child.js` (vs 3 for services).

## VERIFICATION
- **BATTERY** — (verdict appended at commit). 9 pages: faq-min-6 ✓, faq-overlap zero, faq-schema-verbatim,
  design-fidelity per-tier, hub CollectionPage+ItemList. url-set: 9 URLs added to queue. css 77,931 B (no new CSS).
- **a11y/overflow (chrome ENV-BLOCKED):** static proxy + SF byte-equivalence (industries share the CA
  industry template, founder-approved). Joins flip-blocker #6 list.

## TEXAS PROGRESS (v4 depth)
- Pillar ✅ · Money 5/6 (speak HELD) · Tax 2/2 ✅ · QB spokes 6/6 ✅ · **Bkg spokes 3/3 ✅** ·
  **Industries hub + 6/6 ✅** · Cities 5/6 (el-paso pending) + cities-hub pending · pillar re-link pending.

## NEXT (autonomous) — TX cities finish + pillar re-link
el-paso (6th city) + the TX cities-hub, then the pillar ecosystem re-link (the v4 children-on-pillar
rule, same as CA round-39) → TEXAS COMPLETE except the held triage page. Then FL. TX triage
(speak-to-a-proadvisor) stays HELD for CA sign-off.

COUNT: total pages live = 243 · re-skinned (142) + growth this phase = 101 · pages added THIS turn =
9 (TX bkg 2 + industries hub+6) · remaining in TX cluster ≈ 3 (el-paso + cities-hub + pillar re-link)
+ 1 HELD triage · next = TX cities finish + pillar re-link.
State depth: NY ✅ · CA ✅ COMPLETE (39) · **TX in progress (pillar + 5 cities + 15 services + industries hub+6)** · FL/IL pillar + 5 cities each.

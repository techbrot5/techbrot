# Round 50 — DEPTH BUILD-OUT · ILLINOIS wave 1 (money/bkg cluster 5 + tax cluster 2)
First Illinois depth wave (the 5th/last of the five states). Pillar-checked FIRST (round-48 lesson):
the IL tax stack was verified against the IL pillar before building. 5 money/bkg pages + the 2-page
IL tax cluster, on the proven `state-service-body.njk` (t-bofu) template — data files only.

## WHAT I BUILT (7 pages)
**Money / bookkeeping cluster (5):**
1. `/find-an-accountant/illinois/quickbooks-accountant/` — umbrella · 7-FAQ
2. `/find-an-accountant/illinois/small-business-accountant/` · 6-FAQ
3. `/find-an-accountant/illinois/bookkeeping-services/` · 6-FAQ
4. `/find-an-accountant/illinois/virtual-bookkeeper/` · 6-FAQ
5. `/find-an-accountant/illinois/monthly-bookkeeping/` — bkg spoke · 6-FAQ

**Tax cluster (2, non-triage):**
6. `/find-an-accountant/illinois/sales-tax-help/` — 6.25%→10.25% by jurisdiction + the Chicago 15% cloud tax on SaaS · 6-FAQ
7. `/find-an-accountant/illinois/replacement-tax-help/` — the IL-distinctive entity stack: the PPRT + 9.5% C-corp + the permanent PTE election · 6-FAQ

## IL LOCALIZATION (genuinely distinct from CA/TX/FL — mad-libs fails hard)
The real IL stack, verified against the pillar (which is current to Jan-2026 / Dec-2025):
- **Flat 4.95% income tax** (no brackets; Chicago has no city income tax) — unlike CA's graduated/TX-FL's none.
- **PPRT (Personal Property Replacement Tax)** — entity-level on net income: **2.5% C-corp / 1.5% pass-through**;
  EVEN PASS-THROUGHS owe it at the entity level (the IL surprise). The signature IL-distinctive tax.
- **9.5% combined C-corp** (7% corporate + 2.5% PPRT) — among the highest in the nation.
- **Permanent PTE election** (4.95% entity-level SALT-cap workaround; made permanent by SB 1911, Dec 2025).
- **6.25% state → 10.25% Chicago** sales tax (Cook County + home-rule), destination-based.
- **Chicago "cloud tax"** — the Personal Property Lease Transaction Tax, **15% as of Jan 2026**, taxes SaaS/cloud/
  leases used in Chicago even though IL doesn't tax SaaS; a CITY tax (Chicago Dept of Finance), separate from sales tax.
- 102 counties; IDOR (state) + Chicago Dept of Finance (city).

## HONESTY (hard gates held)
- We configure/reconcile/track Illinois net income; the CPA + IDOR + Chicago compute, determine, elect, and FILE.
  replacement-tax-help explicitly does NOT advise on or make the PTE election (that's the CPA's). sales-tax-help
  separates the Chicago cloud tax (city, not state). Rates/PTE rules flagged as changing → confirm.
- Founder-name-zero; independent / not Intuit / not the IDOR or City; canonical pricing.

## DECISIONS / JUDGMENT CALLS
- **Built the tax cluster in this wave** (like TX/FL) so replacement-tax-help (the IL-distinctive entity page,
  analog of FL's corporate-tax-help) resolves natively. The umbrella links quickbooks-cleanup to the GLOBAL
  /quickbooks/cleanup/ directly (no IL QB-cleanup re-point TODO needed this time).

## VERIFICATION
- **BATTERY** — (verdict appended at commit). All 7: faq-min-6 ✓, faq-overlap zero, faq-schema-verbatim.
  url-set: 7 URLs added. css 77,931 B (no new CSS).
- **a11y/overflow (chrome ENV-BLOCKED):** static proxy + CA/TX/FL byte-equivalence (same template). Flip-blocker #6.

## ILLINOIS PROGRESS (v4 depth)
- Pillar (re-link pending) · Money 4/6 (speak + pricing pending) · Tax 2/2 ✅ · QB spokes 0/6 · Bkg spokes 1/3
  (monthly ✅) · Industries hub+0/6 · Cities 5/6 (springfield pending) + cities-hub pending · triage pending.

## NEXT (autonomous) — IL QB-spokes, then bkg, industries, cities-finish, triage, pricing, pillar re-link
Then ILLINOIS COMPLETE → all 5 states done → FLAG the breadth-vs-more-depth decision.

COUNT: total pages live = 281 · re-skinned (142) + growth this phase = 139 · pages added THIS turn =
7 (IL money 5 + IL tax 2) · remaining in IL cluster ≈ 19 (QB 6 + bkg 2 + industries 7 + cities 2 + triage 3 + pricing - overlaps) ·
next = IL QB-spokes wave.
State depth: NY ✅ · CA ✅ COMPLETE (39) · TX ✅ COMPLETE (32) · FL ✅ COMPLETE (31) · **IL in progress (pillar + 5 cities + 7 services)**.

# Round 44 — DEPTH BUILD-OUT · FLORIDA wave 1 (money/bkg cluster 5 + tax cluster 2)
First Florida depth wave, mirroring the TX wave-1 shape. 5 money/bookkeeping service pages + the
2-page FL tax cluster, all on the proven `state-service-body.njk` (t-bofu) template — data files only.
Non-triage; FL triage page (speak-to-a-proadvisor) HELD per the founder gate.

## WHAT I BUILT (7 pages)
**Money / bookkeeping cluster (5):**
1. `/find-an-accountant/florida/quickbooks-accountant/` — umbrella · 8-FAQ
2. `/find-an-accountant/florida/small-business-accountant/` · 7-FAQ
3. `/find-an-accountant/florida/bookkeeping-services/` · 6-FAQ
4. `/find-an-accountant/florida/virtual-bookkeeper/` · 6-FAQ
5. `/find-an-accountant/florida/monthly-bookkeeping/` — bkg spoke · 6-FAQ

**Tax cluster (2, non-triage):**
6. `/find-an-accountant/florida/sales-tax-help/` — 6% + discretionary county surtax config + reconcile · 6-FAQ
7. `/find-an-accountant/florida/corporate-tax-help/` — the FL-distinctive business-tax stack: the 5.5% C-corp income tax + the commercial-rent tax + the TPP return · 6-FAQ

## FL LOCALIZATION (genuine, distinct from CA & TX — mad-libs fails)
The real Florida stack, different from both prior states:
- **No personal income tax — BUT a 5.5% corporate income tax** on C-corps (Form F-1120), Florida Dept
  of Revenue. Pass-throughs generally exempt. (CA = $800 FTB + income; TX = no income at all + margin tax.)
- **6% state sales tax + discretionary COUNTY SURTAX** (varies by county; single-item surtax caps) —
  $100K remote-seller economic-nexus threshold, collection allowance for e-filing.
- **The commercial-rent ("business rent") sales tax** — Florida is unusual in taxing commercial rent;
  the rate is stepping down / being phased out. Genuinely FL-distinctive; described by mechanism (no
  stale hard rate asserted), deferred to DOR + CPA.
- **Tangible Personal Property return (DR-405)** + **reemployment tax (RT-6)** woven into the books. 67 counties.

## HONESTY (hard gates held)
- We configure/reconcile/track; the CPA + Department of Revenue compute, determine, and FILE. No
  nexus/taxability determinations, no corporate-tax computation, no filing, no representation.
- corporate-tax-help explicitly flags that the **5.5% rate/exemption and the commercial-rent phase-out
  change — confirm current figures** (no stale number asserted as fact); LLC-vs-C-corp nuance addressed honestly.
- Founder-name-zero; independent / not Intuit / not the Department; canonical pricing.

## DECISIONS / JUDGMENT CALLS
- **Built the tax cluster in this wave** (like TX) so corporate-tax-help — the FL-distinctive page with
  no honest global fallback — resolves natively. corporate-tax-help folds the 5.5% corporate tax +
  commercial-rent tax + TPP into one page (one-intent: "Florida's business taxes beyond sales tax").
- One temporary re-point: the 5 money/bkg pages' `quickbooks-cleanup` link → global `/quickbooks/cleanup/`
  until the FL QB-cleanup spoke lands next wave (TODO logged).

## VERIFICATION
- **BATTERY** — (verdict appended at commit). All 7: faq-min-6 ✓, faq-overlap zero, faq-schema-verbatim.
  url-set: 7 URLs added. css 77,931 B (no new CSS).
- **a11y/overflow (chrome ENV-BLOCKED):** static proxy + CA/TX byte-equivalence (same template). Flip-blocker #6.

## FLORIDA PROGRESS (v4 depth)
- Pillar (re-link pending) · **Money cluster 4/6** (speak HELD, pricing pending) · **Tax cluster 2/2 ✅** ·
  QB spokes 0/6 · Bkg spokes 1/3 (monthly ✅) · Industries hub+0/6 · Cities 5/6 (+1 pending) + cities-hub pending.

## NEXT (autonomous) — FL QB-spokes wave
6 QB spokes (setup, cleanup, reconciliation, migration, training, error-fixes); building quickbooks-cleanup
re-links the money pages off the global. Then bkg spokes (2), industries hub+6, cities finish + hub,
pricing, pillar re-link → FLORIDA COMPLETE (non-triage). Then IL. FL triage HELD.

COUNT: total pages live = 253 · re-skinned (142) + growth this phase = 111 · pages added THIS turn =
7 (FL money 5 + FL tax 2) · remaining in FL cluster ≈ 17 + 1 HELD triage · next = FL QB-spokes wave.
State depth: NY ✅ · CA ✅ COMPLETE (39) · TX ✅ COMPLETE non-triage (30) · **FL in progress (pillar + 5 cities + 7 services)** · IL pillar + 5 cities.

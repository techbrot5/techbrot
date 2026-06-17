# Round 40 — DEPTH BUILD-OUT · TEXAS wave 1 (money/bkg cluster + tax cluster)
First Texas depth wave. Per the founder gate (2026-06-17): **HOLD the TX triage page**
(speak-to-a-proadvisor) pending CA-disclosure sign-off; proceed autonomously on all non-triage TX
pages. This wave = the 5 money/bookkeeping service pages + the 2-page tax cluster, all on the
proven `state-service-body.njk` (t-bofu) template — data files only.

## v4 CLARIFICATION (flagged)
Texas's tax cluster in v4 is **sales-tax-help + franchise-tax-help** — NOT the CA income-tax-state
pair (state-tax-notice-help / business-tax-problems). So the **only TX triage/disclosure page is
speak-to-a-proadvisor**, which is HELD. sales-tax-help and franchise-tax-help are standard service
pages (no disclosure banner) and shipped this wave.

## WHAT I BUILT (7 pages)
**Money / bookkeeping cluster (5):**
1. `/find-an-accountant/texas/quickbooks-accountant/` — umbrella (8-FAQ)
2. `/find-an-accountant/texas/small-business-accountant/` — (7-FAQ)
3. `/find-an-accountant/texas/bookkeeping-services/` — (6-FAQ)
4. `/find-an-accountant/texas/virtual-bookkeeper/` — (6-FAQ)
5. `/find-an-accountant/texas/monthly-bookkeeping/` — bkg spoke (6-FAQ)

**Tax cluster (2, non-triage):**
6. `/find-an-accountant/texas/sales-tax-help/` — 8.25% combined-rate config + reconcile (6-FAQ)
7. `/find-an-accountant/texas/franchise-tax-help/` — the TX-distinctive **margin tax** (6-FAQ)

## TX LOCALIZATION (genuine, mad-libs fails)
Every page is built on the real Texas tax stack, distinct from CA's:
- **No state income tax** — but the **Texas Franchise ("margin") tax** (revenue minus the greater
  of COGS / compensation / 30%), administered by the **Texas Comptroller**, no tax due below a
  revenue threshold, generally due in May.
- **8.25% sales tax** — 6.25% state + up to 2% local, location-driven (per-location config in QB),
  $500K remote-seller economic-nexus threshold.
- **Business personal property (BPP) rendition** — TX funds local gov with property tax; annual
  rendition of equipment/furniture/inventory to the county appraisal district. **254 counties.**

## HONESTY (hard gates held)
- **We configure/reconcile/track; the CPA + Comptroller compute, determine, and FILE.** Every page
  states it: no nexus/taxability determinations, no margin computation, no filing, no representation.
- franchise-tax-help explicitly flags that **thresholds/rates/deduction methods change — confirm
  current figures with the Comptroller and your CPA** (no hard-coded dollar threshold asserted as
  fact; described by mechanism, not a specific number that could go stale/wrong).
- Founder-name-zero · independent / not Intuit / not the Comptroller · canonical pricing
  ($400–$2,500+/mo, cleanup $1,500–$15,000+).

## DECISIONS / JUDGMENT CALLS
- **Built the tax cluster in this wave** (not later) so franchise-tax-help — which has no honest
  global fallback (franchise ≠ sales tax) — resolves natively rather than via a misleading re-point.
  Only one temporary re-point made: the 5 money pages' `quickbooks-cleanup` link → `/quickbooks/cleanup/`
  (exact global equiv); **re-link to the TX QB-cleanup spoke when it lands next wave** (TODO).
- **Two build/battery fixes (root-caused, not masked):** (a) `heroFigure: "ledger"` → `taccount`
  (figure-ledger.svg doesn't exist); (b) `heroFigure: "reconcile-flow"` → `taccount` on the 2 tax
  pages (figure-reconcile-flow.svg renders class `diagram-feature`, not the bofu-permitted
  `hero-figure` — matches CA tax-page precedent which used taccount).

## VERIFICATION
- **BATTERY** — (verdict appended at commit). All 7 pages: faq-min-6 ✓, faq-overlap zero ✓,
  faq-schema-verbatim ✓. url-set: 7 URLs added to build-new-queue.json. css 77,931 B (no new CSS).
- **a11y/overflow (chrome probes ENV-BLOCKED):** static proxy + byte-equivalence to the founder-
  approved SF page (same template, same tokens). Joins the flip-blocker #6 LIVE-probe list.

## TEXAS PROGRESS (v4 depth)
- Pillar ✅ · **Money cluster 5/6** (speak-to-a-proadvisor HELD) · **Tax cluster 2/2 ✅** ·
  QB spokes 0/6 · Bkg spokes 1/3 (monthly ✅; cleanup-bookkeeping, urgent-bookkeeping pending) ·
  Industries hub+0/6 · Cities 5/6 (el-paso pending) + cities-hub pending · pillar re-link pending.

## NEXT (autonomous) — TX QB-spokes wave
6 QB spokes (setup, cleanup, reconciliation, migration, training, error-fixes); building
quickbooks-cleanup re-links the money pages off the global. Then bkg spokes (2), industries hub+6,
cities (el-paso + hub), pillar re-link. TX triage (speak-to-a-proadvisor) stays HELD for CA sign-off.

COUNT: total pages live = 228 · re-skinned (142) + growth this phase = 86 · pages added THIS turn =
7 (TX money 5 + TX tax 2) · remaining in TX cluster ≈ 15 (QB spokes 6 + bkg 2 + industries 7 + cities 2
+ pillar re-link − overlaps) + 1 HELD triage · next = TX QB-spokes wave.
State depth: NY ✅ · CA ✅ COMPLETE (39) · **TX in progress (pillar + 5 cities + 7 services)** · FL/IL pillar + 5 cities each.

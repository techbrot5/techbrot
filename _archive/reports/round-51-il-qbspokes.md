# Round 51 — DEPTH BUILD-OUT · ILLINOIS wave 2 (QuickBooks spokes ×6)

Second Illinois depth wave. The full 6-page QuickBooks-spoke cluster on the proven
`state-service-body.njk` (t-bofu) template — data files only. Built in parallel, each genuinely
IL-localized (mad-libs fails), honesty gates held, battery GREEN.

## WHAT I BUILT (6 pages)
1. `/find-an-accountant/illinois/quickbooks-setup/` — il-svc-qbsetup · offerPrice 750
2. `/find-an-accountant/illinois/quickbooks-cleanup/` — il-svc-qbcleanup · offerPrice 1500
3. `/find-an-accountant/illinois/quickbooks-reconciliation/` — il-svc-qbrecon · offerPrice 400
4. `/find-an-accountant/illinois/quickbooks-migration/` — il-svc-qbmigration · offerPrice 750
5. `/find-an-accountant/illinois/quickbooks-training/` — il-svc-qbtraining · offerPrice 400
6. `/find-an-accountant/illinois/quickbooks-error-fixes/` — il-svc-qberrors · offerPrice 400

Each = one-line `.njk` (`{% include "partials/state-service-body.njk" %}`) + a rich `.11tydata.js`.

## PREVIEW URLS (LAN dev: http://192.168.11.1:8080)
- http://192.168.11.1:8080/find-an-accountant/illinois/quickbooks-setup/ — FL-correct → IL chart of accounts, by-jurisdiction sales tax (10.25% Chicago), PPRT-ready net income, Chicago 15% cloud tax as a separate item, all configured day one.
- http://192.168.11.1:8080/find-an-accountant/illinois/quickbooks-cleanup/ — the IL mess we fix: single-statewide-rate sales tax, PPRT net income never tracked cleanly, cloud tax commingled.
- http://192.168.11.1:8080/find-an-accountant/illinois/quickbooks-reconciliation/ — accounts tied so the ST-1 ties, IL net income supportable for PPRT, cloud-tax liability reconciled separately.
- http://192.168.11.1:8080/find-an-accountant/illinois/quickbooks-migration/ — carry the IL-correct setup forward (Desktop/other → QBO) without re-importing old errors.
- http://192.168.11.1:8080/find-an-accountant/illinois/quickbooks-training/ — teach an in-house bookkeeper combined sales tax by jurisdiction, clean PPRT net income, separate cloud-tax tracking.
- http://192.168.11.1:8080/find-an-accountant/illinois/quickbooks-error-fixes/ — the booking error each IL fact causes and the correction (data/setup errors, no invented QB error codes).

## IL LOCALIZATION (genuinely distinct — verified against the IL pillar)
The 3 fact TOPICS held across the cluster but each `body` re-angled to the spoke:
- **PPRT** (entity-level, 2.5% C-corp / 1.5% pass-through; even pass-throughs owe) — the IL-distinctive tax.
- **Chicago 10.25% layered sales tax** (6.25% state + Cook County + home-rule), destination-based → QuickBooks carries the correct combined rate by jurisdiction; state return = ST-1.
- **Chicago 15% "cloud tax"** (Personal Property Lease Transaction Tax, Jan 2026) on SaaS/cloud/leases used in Chicago — a City tax (Dept of Finance), tracked separately from state sales tax.
Plus the flat 4.95% income tax, 9.5% combined C-corp, permanent PTE election (SB 1911), 102 counties woven through.
Grep-verified: ZERO Florida leakage (no surtax/TPP/DR-405/RT-6/5.5%/67-counties/corporate-tax-help); 183 IL-fact references across the 6 files.

## HONESTY (hard gates held)
- Only the verified IL facts used; no invented IL rate/form/agency (only ST-1, IL-941, IDES named).
- We configure/clean/reconcile/migrate/train/fix; the CPA + IDOR + Chicago Dept of Finance compute, elect, and FILE. Every page states we do NOT file IL returns, make the PTE election, or represent before the Department.
- Founder-name-zero; independent / not Intuit / not IDOR or the City; canonical pricing only.

## DECISIONS / JUDGMENT CALLS
- Built the full 6-spoke cluster in one wave (parallel agents) since the template + IL stack were proven in round 50 — content-to-goal, visual-floor.
- error-fixes scoped to bookkeeping/setup data errors (no fabricated QB error codes), mirroring FL's treatment.
- Spoke cross-links all point to IL siblings shipping this wave + the already-built IL money/tax pages + safe globals (/quickbooks/online|cleanup|payroll|file-review/, /accounting/advisory/fractional-cfo/). corporate-tax-help → replacement-tax-help remap applied.

## VERIFICATION
- **BATTERY GREEN — all checks pass** (exit 0). content-equity n/a (net-new growth); faq-flat 258 pages OK; design-fidelity 281+6; variety-12a ≤1 numbered system/page; cta-lexicon/manifest/url-set all green after adding the 6 URLs to `_build/build-new-queue.json`.
- CSS: no new CSS (data-only on existing template).
- **a11y/overflow (chrome ENV-BLOCKED this machine):** static proxy + CA/TX/FL byte-equivalence (identical template). Adds 6 to the flip-blocker #6 inferred-clean list (pending live axe/overflow on founder's machine).

## ILLINOIS PROGRESS (v4 depth)
- Pillar (re-link pending) · Money 4/6 (speak + pricing pending) · Tax 2/2 ✅ · **QB spokes 6/6 ✅** · Bkg spokes 1/3 (monthly ✅; cleanup-bookkeeping + urgent-bookkeeping pending) · Industries hub+0/6 · Cities 5/6 (springfield pending) + cities-hub pending · triage pending.

## NEXT (autonomous) — IL bkg spokes (2) → triage cluster + speak (3) → pricing → industries (hub+6) → cities finish (springfield + hub) → pillar re-link → ILLINOIS COMPLETE → STOP & flag breadth-vs-depth.

COUNT: total pages live = 287 · re-skinned (142) + growth this phase = 145 · pages added THIS turn =
6 (IL QB spokes: setup, cleanup, reconciliation, migration, training, error-fixes) ·
remaining in IL cluster ≈ 13 (bkg 2 + triage/speak 3 + pricing 1 + industries 7 + cities 2 − overlap) ·
next = IL bkg spokes wave.
State depth: NY ✅ · CA ✅ (39) · TX ✅ (32) · FL ✅ (31) · **IL in progress (pillar + 5 cities + 13 services)**.

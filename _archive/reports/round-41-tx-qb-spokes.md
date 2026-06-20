# Round 41 — DEPTH BUILD-OUT · TEXAS wave 2 (QB-spokes cluster, 6)
Second Texas depth wave. All 6 v4 QuickBooks spokes, on the proven `state-service-body.njk`
(t-bofu) template — data files only. Non-triage; the TX triage page (speak-to-a-proadvisor) stays
HELD per the founder gate pending CA-disclosure sign-off.

## WHAT I BUILT (6 pages)
1. `/find-an-accountant/texas/quickbooks-setup/` — TX setup (8.25% by-location, margin-ready, BPP schedule) · 7-FAQ
2. `/find-an-accountant/texas/quickbooks-cleanup/` — single-rate-sales-tax + blended-margin + missing-BPP fixes · 7-FAQ
3. `/find-an-accountant/texas/quickbooks-reconciliation/` — accounts + sales-tax-liability-ties-to-Comptroller · 6-FAQ
4. `/find-an-accountant/texas/quickbooks-migration/` — Desktop→Online/other, sales tax re-mapped by location · 6-FAQ
5. `/find-an-accountant/texas/quickbooks-training/` — live, role-specific, the TX data-entry habits · 6-FAQ
6. `/find-an-accountant/texas/quickbooks-error-fixes/` — root-cause (not symptom-mask) on TX-specific breaks · 6-FAQ

## TODO CLEARED ✅ (cleanup re-link)
quickbooks-cleanup is now built, so I re-pointed every TX page's `quickbooks-cleanup` reference off
the global `/quickbooks/cleanup/` to the built TX child `/find-an-accountant/texas/quickbooks-cleanup/`
(7 pages: the 5 money + 2 tax). Verified zero global cleanup refs remain in texas/, and the cleanup
page carries no body self-link (only permalink/canonical/comment). Round-40's standing TODO is closed.

## TX LOCALIZATION (genuine, mad-libs fails) — each spoke distinct
Every spoke is built on the real TX stack and differentiated by the spoke's job: setup = "configure
by-location sales tax + margin-ready + fixed-asset schedule from day one"; cleanup = "the single-rate
sales-tax mistake + blended margin figures + fixed assets never tracked"; reconciliation = "tie the
8.25% liability to the Comptroller return by location"; migration = "re-map sales tax by location, not
carry the flat rate over; fixed-asset schedule survives the cutover"; training = "invoice sales tax by
location at entry, categorize for the margin tax, record fixed assets as bought"; error-fixes =
"liability won't tie / out-of-balance / broken margin base — root-cause, never force the number."

## HONESTY (hard gates held)
We configure/clean/reconcile/migrate/train/fix; the CPA + Comptroller compute, determine, and FILE.
error-fixes explicitly commits to root-cause-not-symptom-masking (CLAUDE.md rule 6). Founder-name-zero;
independent / not Intuit; canonical pricing (setup $750–$5,000+, cleanup $1,500–$15,000+, migration
$2,500–$10,000+).

## VERIFICATION
- **BATTERY** — (verdict appended at commit). 6 pages: faq-min-6 ✓, faq-overlap zero, faq-schema-verbatim.
  url-set: 6 URLs added to queue. css 77,931 B (no new CSS). All cross-links among the 6 spokes +
  to the built money/tax pages + globals resolve.
- **a11y/overflow (chrome ENV-BLOCKED):** static proxy + SF byte-equivalence. Joins flip-blocker #6 list.

## TEXAS PROGRESS (v4 depth)
- Pillar ✅ · Money 5/6 (speak HELD) · Tax 2/2 ✅ · **QB spokes 6/6 ✅** · Bkg spokes 1/3 (monthly ✅;
  cleanup-bookkeeping + urgent-bookkeeping pending) · Industries hub+0/6 · Cities 5/6 (el-paso pending)
  + cities-hub pending · pillar re-link pending.

## NEXT (autonomous) — TX bkg-spokes (2) then industries hub+6
cleanup-bookkeeping + urgent-bookkeeping, then the TX industries hub + 6 (construction, manufacturing,
real-estate, trucking, healthcare, professional-services), then cities (el-paso + hub), then pillar
re-link. TX triage (speak-to-a-proadvisor) stays HELD for CA sign-off.

COUNT: total pages live = 234 · re-skinned (142) + growth this phase = 92 · pages added THIS turn =
6 (TX QB spokes: setup, cleanup, reconciliation, migration, training, error-fixes) · remaining in TX
cluster ≈ 11 + 1 HELD triage · next = TX bkg-spokes + industries.
State depth: NY ✅ · CA ✅ COMPLETE (39) · **TX in progress (pillar + 5 cities + 13 services)** · FL/IL pillar + 5 cities each.

# Round 46 — DEPTH BUILD-OUT · FLORIDA wave 2 (QB-spokes cluster, 6)
Second Florida depth wave. All 6 v4 QuickBooks spokes, on the proven `state-service-body.njk`
(t-bofu) template — data files only. FL-localized off the real FL stack.

## WHAT I BUILT (6 pages)
1. `/find-an-accountant/florida/quickbooks-setup/` — FL setup (6%+surtax by county, commercial-rent, TPP schedule) · 7-FAQ
2. `/find-an-accountant/florida/quickbooks-cleanup/` — single-rate-sales-tax + missed-commercial-rent + never-tracked-TPP fixes · 7-FAQ
3. `/find-an-accountant/florida/quickbooks-reconciliation/` — accounts + sales-tax-liability-ties-to-DOR-by-county + commercial-rent reconciled · 6-FAQ
4. `/find-an-accountant/florida/quickbooks-migration/` — Desktop→Online/other, sales tax re-mapped by county, commercial-rent configured · 6-FAQ
5. `/find-an-accountant/florida/quickbooks-training/` — live, role-specific, the FL data-entry habits · 6-FAQ
6. `/find-an-accountant/florida/quickbooks-error-fixes/` — root-cause (not symptom-mask) on FL-specific breaks · 6-FAQ

## TODO CLEARED ✅ (cleanup re-link)
quickbooks-cleanup is now built, so I re-pointed every FL page's `quickbooks-cleanup` reference off
the global `/quickbooks/cleanup/` to the built FL child (all FL data files). Verified zero global
cleanup refs remain in florida/, and the cleanup page carries no body self-link (permalink/canonical/comment only).
Round-44's standing TODO is closed.

## FL LOCALIZATION (genuine, distinct from CA/TX) — each spoke differentiated by job
setup = "configure by-county sales tax + commercial-rent + TPP fixed-asset schedule from day one";
cleanup = "single-rate sales-tax mistake + commercial-rent never recorded + fixed assets never tracked";
reconciliation = "tie the 6%+surtax liability to the DOR return by county + reconcile commercial-rent to leases";
migration = "re-map sales tax by county + configure commercial-rent + fixed-asset schedule survives cutover";
training = "the FL data-entry habits (by-county surtax + single-item caps + commercial-rent + TPP)";
error-fixes = "liability won't tie / out-of-balance / commercial-rent recorded wrong — root-cause, never force the number."

## HONESTY (hard gates held)
We configure/clean/reconcile/migrate/train/fix; the CPA + FL Dept of Revenue compute, determine, and FILE.
error-fixes commits to root-cause-not-symptom-masking (CLAUDE.md rule 6); rates/rent-tax phase-out flagged
as changing. Founder-name-zero; independent / not Intuit; canonical pricing (setup $750+, cleanup $1,500+,
migration $2,500+).

## VERIFICATION
- **BATTERY** — (verdict appended at commit). 6 pages: faq-min-6 ✓, faq-overlap zero, faq-schema-verbatim.
  url-set: 6 URLs added. css 77,931 B (no new CSS). All cross-links among the 6 spokes + to the built
  money/tax pages + globals resolve.
- **a11y/overflow (chrome ENV-BLOCKED):** static proxy + CA/TX byte-equivalence (same template). Flip-blocker #6.

## FLORIDA PROGRESS (v4 depth)
- Pillar (re-link pending) · Money 4/6 + speak ✅ (pricing pending) · Tax 2/2 ✅ · **QB spokes 6/6 ✅** ·
  Bkg spokes 1/3 (monthly ✅; cleanup-bookkeeping + urgent-bookkeeping pending) · Industries hub+0/6 ·
  Cities 5/6 (+1 pending) + cities-hub pending · pricing pending.

## NEXT (autonomous) — FL bkg-spokes (2) then industries hub+6
cleanup-bookkeeping + urgent-bookkeeping, then the FL industries hub + 6, then cities finish + hub,
pricing, pillar re-link → FLORIDA COMPLETE. Then IL.

COUNT: total pages live = 262 · re-skinned (142) + growth this phase = 120 · pages added THIS turn =
6 (FL QB spokes: setup, cleanup, reconciliation, migration, training, error-fixes) · remaining in FL
cluster ≈ 11 · next = FL bkg-spokes + industries.
State depth: NY ✅ · CA ✅ COMPLETE (39) · TX ✅ COMPLETE incl. triage (32) · **FL in progress (pillar + 5 cities + 14 services)** · IL pillar + 5 cities.

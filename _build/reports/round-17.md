# ROUND 17 — elevation campaign (accounting + quickbooks spokes)

═══════════════════════════════════════════════════════════════════════
## 📱 DEV SERVER LIVE — http://192.168.1.8:8080/ (0.0.0.0:8080, live-reload)
RUNNING — not killed. Only headless probe chrome cycled (kill_probe.ps1).
═══════════════════════════════════════════════════════════════════════

Date: 2026-06-14.

## ✅ CLOUDFLARE BUILD FIX — CONFIRMED (push-ready)
Before the batch: confirmed the round-16 CF fix with an **exact Cloudflare
simulation** — clean `npm ci --omit=dev` (prod-only, lockfile-based — what CF
runs) → `npm run build` → `npx serve _site` (plain static, NOT the dev server):
- prod-only install present: `@11ty/eleventy`, `@11ty/eleventy-img`, `esbuild`,
  `cross-env`; `axe-core` correctly absent.
- build produced complete `_site`: home **72,614 B** + `site.min.css` **53,773 B**.
- static serve: `/`→200 · `/assets/css/site.min.css`→200 (53,773 B, `text/css`)
  · `/accounting/`→200 · `/quickbooks/migration/`→200 · home references the CSS
  that resolves. **Styled site, home loads.**
- **Packages moved devDependencies→dependencies:** `@11ty/eleventy`,
  `@11ty/eleventy-img`, `esbuild`, `cross-env` (axe-core stays devDependency).
  Committed `6d30375` — ready for you to push.
- Deps then restored (axe-core back) + dev server restarted. CSS fixes intact.

## ⚠ PRE-FLIGHT FLAGS — two rulings needed before the full batch
**Confirmed baseline + root-HTML mapping for all 8 requested pages:**

| # | Page | Tier | Baseline | Root HTML | Status |
|---|---|---|---|---|---|
| 1 | /accounting/payroll-management/ | t-bofu | ✅ 48h/13faq | ✅ | clean elevation |
| 2 | /accounting/sales-tax-compliance/ | t-bofu | ✅ 44h/13faq | ✅ | clean elevation |
| 3 | **/accounting/1099-preparation/** | t-bofu | ❌ **none** | ❌ **none** | **BUILD-NEW — ruling needed** |
| 4 | /accounting/advisory/ | t-hub | ✅ 28h/10faq | ✅ | clean elevation (hub) |
| 5 | /accounting/advisory/fractional-cfo/ | t-bofu | ✅ 54h/13faq | ✅ | clean elevation |
| 6 | /quickbooks/cleanup/ | t-bofu | ✅ 43h/7faq | ✅ | clean elevation |
| 7 | /quickbooks/help/ | t-mofu | ✅ 49h/8faq | ✅ | clean elevation (hub) |
| 8 | /quickbooks/payroll/ | t-bofu | ✅ 33h/7faq | ✅ | clean elevation |

1. **`/accounting/1099-preparation/` is build-new** — no baseline record and no
   root HTML exist. Your note said all 8 have both; this one doesn't. The standing
   bar ("read BOTH baseline + root HTML first; enrich, never thin") can't be met —
   there's nothing to elevate. **Ruling needed:** authorize a build-new page (and
   I'll need a content spec / source), or defer it. Until then I **skip it**.
2. **Blueprint version** — repo has `techbrot-blueprint-v3.xlsx`; no **v4** file
   exists. Using BUILD-TRACKER (living truth) + baseline.json (equity contract) as
   the operative authority per the standing source-of-truth rule. Confirm if a v4
   lives elsewhere.

## PLAN (on your go)
Run the **7 clean elevations** as a continuous batch (solo-attention on the two
hub-class pages: `/accounting/advisory/` hub + `/quickbooks/help/` hub), each
fully self-verified before the next, committing per page, STOP at batch end.
Citable elements per your spec: payroll → multi-state payroll-tax handling ·
sales-tax → post-Wayfair nexus framework · advisory → judgment-layer thesis ·
fractional-CFO → engagement model · QB cleanup → reuse Compounding Reconciliation
Drift · QB help → diagnostic triage model. (1099 added once you rule on it.)

Lead page `/accounting/payroll-management/` sources already read (48h/13faq +
root HTML) — it follows the proven monthly-bookkeeping BOFU pattern (definition ·
pay-cycle process · deliverables grid-2 · quick-5 · signals buyer-cards · tiers ·
onboarding process · software platforms · trust-row · cross-sell · FAQ), citable
= multi-state payroll-tax handling.

## OPEN ITEMS / STOPPED AT
1. **CF fix confirmed + push-ready** (`6d30375`) — push when ready; next preview
   build comes up styled with home loading.
2. **STOPPED at pre-flight for two rulings:** (a) `/accounting/1099-preparation/`
   build-new authorization + content source; (b) confirm blueprint v3-vs-v4.
3. On your go I run the 7 clean pages continuously (skipping 1099 unless you spec
   it) and report the full per-page matrix here.
STOPPED — awaiting the two rulings, then I run the batch.

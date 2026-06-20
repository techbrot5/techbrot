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

## RULINGS RESOLVED (founder, 2026-06-14)
- **v4 blueprint confirmed** — `techbrot-blueprint-v4.xlsx` now in repo (v3 swapped
  out). Read Sheet 5 (BUILD STATUS) + Sheet 9 (STANDING RULES / CTA / AUTHORSHIP /
  LAUNCH GATE) as authority alongside BUILD-TRACKER. Sheet 9 mirrors every rule
  already applied (CTA-per-tier, firm-level authorship, quick-5/FAQ/variety/
  citable/baseline-floor, 58KB gate, coined-framework DefinedTerms).
- **1099 DEFERRED** — `/accounting/1099-preparation/` is build-new (no baseline,
  no root HTML); founder ruled it out of this elevation batch → future dedicated
  build-new round (with /about/team/ + the switch silo). Skipped. Its cross-sell
  card on payroll was retargeted to QuickBooks cleanup (logged for restore).

## PER-PAGE STATUS (7 clean elevations; 1099 deferred)
| # | Page | Tier | Citable | Equity | axe | Overflow | LH | CLS | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | /accounting/payroll-management/ | bofu | multi-state payroll-tax handling | 48h/13faq GREEN | 0 (24) | 360/375/753 | 100/100/100 | 0.0 | **DONE — `baaea7d`** |
| 2 | /accounting/sales-tax-compliance/ | bofu | post-Wayfair nexus framework | 44h/13faq GREEN | 0 (24) | 360/375/753 | 100/100/100 | 0.0 | **DONE — `0b765da`** |
| 3 | /accounting/advisory/ | hub | judgment-layer thesis | 28h/10faq GREEN | 0 (24) | 360/375/753 | 100/100/100 | 0.0 | **DONE — `026e065`** |
| 4 | /accounting/advisory/fractional-cfo/ | bofu | engagement model | 54h/13faq GREEN | 0 (24) | 360/375/753 | 100/100/100 | 0.0 | **DONE — `10458cf`** |
| 5 | /quickbooks/cleanup/ | bofu | Compounding Reconciliation Drift (reuse) | 43h/7faq GREEN | 0 (26) | 360/375/753 | 100/100/100 | 0.0 | **DONE — `32eff23`** |
| 6 | /quickbooks/help/ | mofu | diagnostic triage model | 49h/8faq GREEN | 0 (24) | 360/375/753 | 100/100/100 | 0.0 | **DONE — `833bef5`** |
| 7 | /quickbooks/payroll/ | bofu | QB-specific payroll (multi-state/local) | 33h/7faq GREEN | 0 (24) | 360/375/753 | 100/100/100 | 0.006 | **DONE — `0bb09a0`** |

## ✅ PAGE 1 — /accounting/payroll-management/ (t-bofu) — DONE + VERIFIED
Sources read: baseline (48h/13faq) + old HTML. Citable: **multi-state payroll-tax
handling** — registration + state income-tax withholding + state unemployment
(SUTA) + reciprocal agreements in every state an employee works; a single remote
hire creates payroll nexus before the first paycheck. Within-page variety (12
patterns): definition + pull-quote · pay-cycle process-diagram (the visual) ·
grid-2 deliverables · quick-5 · buyer-card signals · review-card tiers · numbered
onboarding · grid-2 platforms · integration prose · trust-row · cross-sell · FAQ.
Verify: content-equity 48h/13faq/29 schema GREEN (justified: newsletter + 3
footer-chrome + QAPage→FAQPage + 1 schema-only FAQ variant + the 1099 cross-sell,
deferred) · battery GREEN · axe ZERO (24) · overflow 360/375/753 · Lighthouse
100/100/100 · CLS 0.0 · no raw vars · CSS intact · shots r17/payroll-cycle-1280+360.
CTA: non-QB BOFU — no phone (Book the discovery call + Get the free file review).

## TOOLING NOTE (fixed)
The CF clean-room simulation wiped/reinstalled `node_modules`, which dropped
`_site/axe.min.js` (the axe probe loads `/axe.min.js`; it's copied from
`node_modules/axe-core`, not generated by eleventy). Restored it
(`cp node_modules/axe-core/axe.min.js _site/`); axe runs clean again. A fresh
`_site` after `npm run build` needs that copy for the axe probe. Also: shot_anchor
does not mkdir the `-Out` subdir — create `_build/verify/shots/rNN/` first.

## 🐛 CLOUDFLARE CSS-404 FIX (priority interrupt — DONE + verified)
While building the batch you reported the deployed preview was still unstyled
(`/assets/css/site.min.css` → 404). Diagnosed + fixed; full write-up in
**`_build/reports/cloudflare-fix.md`**. Summary: `site.min.css` was generated by
a side-effect `fs.writeFileSync` inside an `eleventy.before` hook — written
outside Eleventy's write pipeline, so it isn't a tracked build output and can drop
from the CF deploy even when HTML deploys (exact symptom). Proven via a **fresh
cold `git clone` + `npm ci --omit=dev` + `npm run build`** that the source + build
are correct. **Fix (`7cc89e2`):** moved the bundle to a first-class Eleventy
template `src/assets/css/site.min.css.11ty.js` → now a tracked output, always in
`_site`, always deployed. Verified: fresh-clone build writes it via Eleventy's
writer; `npx serve _site` → `/assets/css/site.min.css` **200, 53,773 B, text/css**.
**Push `7cc89e2` (+ `baaea7d`) and redeploy** to confirm on CF.

## PLAN (remaining 6 — resume when you're back)
Run the remaining **6 clean elevations** continuously (solo-attention on the two
hub-class pages: `/accounting/advisory/` hub + `/quickbooks/help/` hub), each
fully self-verified before the next, committing per page, STOP at batch end.
Citable elements per spec: sales-tax → post-Wayfair nexus framework · advisory →
judgment-layer thesis · fractional-CFO → engagement model · QB cleanup → reuse
Compounding Reconciliation Drift · QB help → diagnostic triage model · qb-payroll
→ QB-specific payroll. (1099 deferred to a future build-new round.)

## OPEN ITEMS / STOPPED AT
1. **Cloudflare CSS-404 FIXED** (`7cc89e2`) + Problem-1 deps fix (`6d30375`, already
   pushed). **UNPUSHED: `7cc89e2` + `baaea7d` — push both, then redeploy.** If CSS
   still 404s after that, it's CF-dashboard (build cmd `npm run build` / output
   `_site` / clear cache) — checklist in cloudflare-fix.md.
2. **Round-17: 7 of 7 clean elevations DONE — BATCH COMPLETE.**
   payroll-management (`baaea7d`), sales-tax-compliance (`0b765da`), advisory hub
   (`026e065`), fractional-cfo (`10458cf`), qb-cleanup (`32eff23`), qb-help hub
   (`833bef5`), qb-payroll (`0bb09a0`) — all fully verified + committed. Accounting
   silo + QuickBooks spokes complete. **1099-preparation DEFERRED** (build-new,
   founder ruling) → future dedicated round with /about/team/ + the switch silo.
3. **Full battery GREEN across all 33 built URLs** (2369 hrefs resolve, css gate
   53,773B holds). Every page: equity GREEN · axe ZERO · overflow 360/375/753 ·
   Lighthouse 100/100/100 · CLS 0 (qb-payroll 0.006 ≈ 0, well within "good").
4. **Sign-off carry-over:** QAPage→FAQPage + schema-only-FAQ-variant retirements
   (payroll, sales-tax, advisory, fractional-cfo) all logged in
   equity-exceptions.json, awaiting sign-off. Round-16 items still pending too.
5. **UNPUSHED** on `preview-11ty` (founder pushes): the CF CSS fix `7cc89e2` +
   all round-17 page + doc commits. Push, then redeploy.
4. **Dev server RUNNING** at http://192.168.1.8:8080/ — left up as requested.
   Audit servers (8090 axe, 8125 prod) also up; only probe chrome cycled.
5. **Tooling note (logged above):** a fresh `_site` needs
   `cp node_modules/axe-core/axe.min.js _site/` for the axe probe; create
   `_build/verify/shots/rNN/` before shot_anchor captures.
6. **Sign-off carry-over:** round-16 (setup 4-vs-5 phases, QAPage→FAQPage) +
   round-17 payroll exceptions (QAPage→FAQPage, software-Q variant, deferred-1099
   cross-sell) all logged in equity-exceptions.json, awaiting sign-off.
STOPPED — ROUND 17 COMPLETE: all 7 clean elevations done + verified + committed;
CF CSS fix done; 1099 deferred. Awaiting your audit + the push of `preview-11ty`.

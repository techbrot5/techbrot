# Round 24 — find-an-accountant PHASE 0 (dependency + scope check)
Date: 2026-06-15 · read-only analysis · reconciled against baseline.json (not memory)
Phase deploys AFTER QB silo 1 + vs + partners, BEFORE accounting (accounting silo last).

---

## 1. FIND-AN-ACCOUNTANT BASELINE SET — 43 URLs total

### NY tree = 39 pages (the only state to build out)
| bucket | count | URLs |
|---|---|---|
| PILLAR | 1 | /find-an-accountant/new-york/ |
| cities-hub | 1 | /find-an-accountant/new-york/cities/ |
| cities | 11 | albany, bronx, brooklyn, buffalo, manhattan, new-york-city, queens, rochester, staten-island, syracuse, yonkers |
| industries-hub | 1 | /find-an-accountant/new-york/industries/ |
| industries | 8 | construction, consulting, ecommerce, healthcare, legal, nonprofit, real-estate, restaurant |
| service-children | 17 | bookkeeping-services, business-tax-problems, cleanup-bookkeeping, monthly-bookkeeping, pricing, quickbooks-accountant, quickbooks-cleanup, quickbooks-migration, quickbooks-reconciliation, quickbooks-setup, quickbooks-training, sales-tax-help, small-business-accountant, speak-to-a-proadvisor, state-tax-notice-help, urgent-bookkeeping, virtual-bookkeeper |

**Wave plan for PHASE 2 (after the pillar is proven + signed off):** pillar SOLO → then ~5/wave:
e.g. wave A = cities-hub + 4 cities · wave B = remaining 7 cities · wave C = industries-hub + 7
industries (industries 8 + hub = 9, split) · waves D–F = the 17 service-children. ~8 waves.

### CA/TX/FL/IL = 4 anchor landings (PHASE 1 → parked via 301)
**These are NOT thin — they are substantial ranking pages:**
| URL | title | headings | FAQ | words |
|---|---|---|---|---|
| /find-an-accountant/california/ | California QuickBooks ProAdvisors & Bookkeeping | 72 | 17 | 7,368 |
| /find-an-accountant/texas/ | Texas QuickBooks ProAdvisors & Bookkeeping | 72 | 17 | 7,056 |
| /find-an-accountant/florida/ | Florida QuickBooks ProAdvisors & Bookkeeping | 72 | 17 | 7,043 |
| /find-an-accountant/illinois/ | Illinois QuickBooks ProAdvisors & Bookkeeping | 72 | 17 | 7,041 |
Each carries real state specificity (CA AB5/district tax, TX franchise tax/SaaS-80%, FL service
tax/county surtax, IL replacement tax/Chicago lease tax). **The 301 parks ~7k words × 4 of live,
ranking content** — content is preserved in baseline.json + the old HTML for the post-redesign
rebuild, but the live URLs lose their page-specific ranking until rebuilt. Founder-accepted
(temporary). See §4 for the redirect-target question.

(No other find-an-accountant baselines — the 43 = 39 NY + 4 anchors. No national
`/find-an-accountant/` landing exists yet; it's a build-new-queue URL, not built.)

---

## 2. IN-CONTENT LINK DEPENDENCY (NY → accounting service pages)
NY pages link in-content to /accounting/* **369 link instances across 12 targets.** Status on preview:
**RESOLVE NOW (already built):** /accounting/ · /accounting/bookkeeping/catch-up-bookkeeping/ ·
/cleanup-bookkeeping/ · /monthly-bookkeeping/ · /accounting/payroll-management/ ·
/accounting/advisory/fractional-cfo/ · /accounting/sales-tax-compliance/ (7 targets ✓).
**404 ON PREVIEW until the accounting silo ships (last):**
| target | NY pages linking it |
|---|---|
| /accounting/bookkeeping/ (hub) | 39 |
| /accounting/services/ | 39 |
| /accounting/financial-statements/ | 14 |
| /accounting/chart-of-accounts-setup/ | 3 |
| /accounting/industries/ | 1 |
= **5 distinct not-yet-built targets, ~96 link instances.** Most NY pages have ~2 broken
in-content links (the bookkeeping + services hubs). **Not severe** — these are baseline URLs (the
battery link-check passes), they just 404 if clicked on preview, and they resolve when the
accounting silo (the last silo) is migrated. Founder-accepted.

---

## 3. REDIRECT MECHANISM (for PHASE 1)
No `_redirects` file exists yet. Cloudflare Pages reads a `_redirects` file at the site root.
The clean, established pattern here is a permalink template (like `src/robots.njk` →
`/robots.txt`): add `src/redirects.njk` with `permalink: "/_redirects"` emitting the 301 rules,
so it flows through the Eleventy writer into `_site/_redirects` and is always deployed. Format:
`/find-an-accountant/california/  <target>  301` (one line per state).

---

## 4. DECISION NEEDED BEFORE PHASE 1 — redirect target
The spec says "the national find-an-accountant page if one exists, else **/contact/**." That page
doesn't exist, so the spec fallback is /contact/. **I recommend /accounting/ instead** for these 4:
they are 7k-word "[State] QuickBooks ProAdvisors & Bookkeeping" pages, and a 301 to the
**/accounting/** services hub retains far more topical relevance (accounting/bookkeeping/QuickBooks)
than the generic /contact/ — better temporary equity retention until the real state pages ship.
Flagging per rule 7 before executing. **Your call: /accounting/ (my rec) or /contact/ (spec fallback)?**

---

## 5. STOP STATE / NEXT
- **STOPPED after PHASE 0** for (a) the redirect-target decision (§4), and (b) confirmation of
  sequencing — find-an-accountant deploys after QB silo 1 + vs + partners, so PHASE 1 (301s) can
  be staged now (ready for cutover) or held; PHASE 2 (NY build) fits the build sequence after
  those silos.
- On your target decision → PHASE 1: add `src/redirects.njk` with the 4 × 301, build, confirm.
- Then PHASE 2 (when find-an-accountant's turn): **prove the NY pillar SOLO to full t-location
  fidelity + content-to-goal, STOP for your review + an explicit t-location verdict, THEN** the
  39-page tree in ~5-page protocol waves (contract-injection, battery + probes, report per R1).
- Recorded in BUILD-TRACKER (find-an-accountant phase + R4 git-hygiene) + this report.
- HELD: #4 N=0 · #5 tiers on preview · #2 footer queued. Accounting silo LAST.

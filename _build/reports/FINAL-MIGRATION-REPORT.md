# FINAL MIGRATION REPORT — Path B (139-baseline cutover parity)
Living deliverable. Seeded 2026-06-15 (round 26). Finalized when all 139 baselines are migrated.
Founder-requested focus: **tier re-categorization** — flag pages built on the wrong tier (build-to-floor
used one proven tier per silo for speed) for a post-cutover re-tiering pass. Do NOT re-tier during
migration; this report is the review queue.

---

## SECTION A — NY CHILDREN TIER REVIEW (find-an-accountant/new-york/*)
All 38 NY children were built on **t-location** (the one proven tier, build-to-floor). The PILLAR
`/find-an-accountant/new-york/` is the only page that SHOULD carry the t-location hero (state-contour
motif + sticky call-bar). Below: which children are correctly location/MOFU vs which are conversion/BOFU
that are flat location-clones today and likely need **t-bofu** re-tiering.

### A1 — Likely OK on t-location (location/industry landing, consideration intent) — review, low priority
Cities (location landings, "find an accountant in <city>"):
- https://techbrot.com/find-an-accountant/new-york/cities/  (cities hub)
- https://techbrot.com/find-an-accountant/new-york/cities/albany/ · …/bronx/ · …/brooklyn/ · …/buffalo/ · …/manhattan/ · …/new-york-city/ · …/queens/ · …/rochester/ · …/staten-island/ · …/syracuse/ · …/yonkers/  (11)

Industries (industry landings — arguably MOFU; lighter conversion than the service pages):
- https://techbrot.com/find-an-accountant/new-york/industries/  (industries hub)
- …/industries/construction/ · …/consulting/ · …/ecommerce/ · …/healthcare/ · …/legal/ · …/nonprofit/ · …/real-estate/ · …/restaurant/  (8)

→ 21 pages. Recommend KEEP t-location for cities; REVIEW industries-hub vs industry pages (industry pages may warrant t-mofu, the hub stays a routing layer).

### A2 — LIKELY NEEDS RE-TIERING → t-bofu (conversion/BOFU service pages, currently flat location-clones)
These are specific paid services with strong conversion intent — proof-strip + intake-form + (where
applicable) vs-table belong here, not the location hero:
- https://techbrot.com/find-an-accountant/new-york/monthly-bookkeeping/   ← founder-named
- https://techbrot.com/find-an-accountant/new-york/cleanup-bookkeeping/   ← founder-named
- https://techbrot.com/find-an-accountant/new-york/quickbooks-cleanup/    ← founder-named
- https://techbrot.com/find-an-accountant/new-york/quickbooks-setup/
- https://techbrot.com/find-an-accountant/new-york/quickbooks-reconciliation/
- https://techbrot.com/find-an-accountant/new-york/quickbooks-migration/
- https://techbrot.com/find-an-accountant/new-york/quickbooks-accountant/
- https://techbrot.com/find-an-accountant/new-york/quickbooks-training/
- https://techbrot.com/find-an-accountant/new-york/virtual-bookkeeper/
- https://techbrot.com/find-an-accountant/new-york/small-business-accountant/
- https://techbrot.com/find-an-accountant/new-york/sales-tax-help/
- https://techbrot.com/find-an-accountant/new-york/pricing/   (pricing = BOFU; review t-bofu vs a pricing-specific treatment)
- https://techbrot.com/find-an-accountant/new-york/bookkeeping-services/   (overview — could be a MOFU hub; review either way)

### A3 — LIKELY NEEDS RE-TIERING → t-bofu (honest-triage / conversion)
Already carry Sheet-7 disclosures; structurally they are conversion/triage, not location landings:
- https://techbrot.com/find-an-accountant/new-york/urgent-bookkeeping/        ← founder-named
- https://techbrot.com/find-an-accountant/new-york/business-tax-problems/     ← founder-named
- https://techbrot.com/find-an-accountant/new-york/state-tax-notice-help/
- https://techbrot.com/find-an-accountant/new-york/speak-to-a-proadvisor/

**A2 + A3 = ~17 NY children flagged for t-bofu re-tiering review.** (Equity/content is correct and
permanent; this is a VISUAL-TIER/skin re-categorization, which is exactly what the post-cutover redesign
pass is for.) Founder to confirm the final tier per page.

### A4 — t-location hero audit (founder ask)
**TODO (verify before sign-off):** confirm only the NY PILLAR renders the t-location hero (hero--location
+ hero__motif state-contour + sticky call-bar). The children use the same layout — confirm whether the
hero treatment differs by page or whether the children are visually cloning the pillar hero. If children
clone the pillar hero, that reinforces the A2/A3 re-tiering need. (To be filled in during the review pass.)

---

## SECTION B — STATE LANDINGS (CA/TX/FL/IL)
Built t-location, landing-only (no children). Correct tier for state pillars. Neutral motif
(motif-align-full). No re-tiering expected. Children are a post-redesign build, not a re-tier.

## SECTION C — QUICKBOOKS SILO + VS SILO
Tiers chosen per registry and look correct: migration children = t-bofu; balances-wrong = t-guide HowTo;
speak-to-a-quickbooks-expert = t-bofu honest-triage; vs hub + 4 comparisons = t-mofu. No re-tiering flags
at this time.

## SECTION D — ACCOUNTING SILO (39) — BOFU vs MOFU NOTES
(To be filled in as the accounting silo is migrated. Per founder: note any industry/service page that is
really BOFU conversion vs MOFU consideration, so the tier is flagged not assumed.)

---
_This report is appended as each remaining silo (partners, accounting) is migrated. Re-tiering happens
AFTER 139-baseline cutover parity, on founder review of this queue._

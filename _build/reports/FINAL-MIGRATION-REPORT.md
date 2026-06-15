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
Per founder: note any industry/service page that is really BOFU conversion vs MOFU consideration, so the
tier is flagged not assumed. Filled in per wave as accounting is migrated.

### D1 — Hubs (wave 1, DONE, commit `d77b871`) — tier CORRECT
- https://techbrot.com/accounting/bookkeeping/  (t-hub) — MOFU routing layer. Correct.
- https://techbrot.com/accounting/industries/  (t-hub) — MOFU routing layer. Correct.
- https://techbrot.com/accounting/services/  (t-hub) — MOFU routing layer. Correct.
No re-tiering flag — hubs are genuine consideration/routing pages.

### D2 — Children (PENDING migration) — provisional BOFU/MOFU read to confirm as each is built
Registry proposes **t-mofu** for ALL of these; flagging which are really **BOFU** (specific paid service,
strong conversion intent) and should be reviewed for t-bofu:
- **Likely BOFU (review for t-bofu):** /accounting/services/controller-services/,
  /accounting/services/outsourced-accounting/, /accounting/services/virtual-accounting/,
  /accounting/reconciliation-services/, /accounting/month-end-close/, /accounting/job-costing/,
  /accounting/chart-of-accounts-setup/, /accounting/financial-statements/. (These are discrete paid
  engagements, not consideration topics.)
- **Plausibly MOFU (t-mofu likely OK):** the 5 advisory children (cash-flow-management,
  budgeting-forecasting, kpi-reporting, business-performance-review, financial-strategy) — advisory is a
  consideration sell; and the 19 industry pages (industry landings = consideration). Confirm per page.
- **t-guide:** the 4 FAQ pages — correct.
(Each row gets a built/verified note + final tier recommendation as the waves complete.)

### D3 — Built so far + tier confirmations
- **Wave 2 — 4 FAQs** (accounting/faq, advisory/faq, bookkeeping/faq, industries/faq): t-guide. CORRECT.
- **Wave 3 — 5 advisory children** (cash-flow-management, budgeting-forecasting, kpi-reporting,
  business-performance-review, financial-strategy): built t-mofu. Consideration sell — t-mofu CORRECT
  (no re-tiering flag).
- **Wave 4 — 4 BOFU-flagged services** (controller-services, outsourced-accounting [services children];
  reconciliation-services, month-end-close [standalones]): built t-mofu per proposed tier, but these are
  **discrete paid engagements with strong conversion intent → REVIEW for t-bofu** in the redesign pass.
  Confirmed BOFU read; kept t-mofu floor per founder directive (don't re-tier during migration).

### D4 — ⚠️ DATA DEFECT (founder ruling needed) — /accounting/services/virtual-accounting/
The LIVE baseline page is **mis-assembled**: its `<head>` is virtual-accounting (correct title, meta, OG,
6 FAQ, schema) but its `<body>` is the **e-commerce industry page** (wrong body pasted under the right
head). So baseline.json froze ~34 **e-commerce** headings for a virtual-accounting URL.
- The wave-4 agent correctly REFUSED to ship incoherent e-commerce headings under a virtual-accounting
  title (standing rules #6 root-cause, #7 push-back) and built a **coherent real virtual-accounting page**
  instead. That page is **HELD** at `$CLAUDE_JOB_DIR/tmp/HOLD-virtual-accounting.{njk,11tydata.js}`
  (NOT in src, NOT shipped) pending founder sign-off, because replacing ~34 frozen baseline headings is a
  **wholesale content replacement** = risk-hierarchy #2 founder sign-off.
- **Knock-on:** the real e-commerce content currently mis-living at this URL almost certainly belongs at
  **/accounting/industries/ecommerce/** (one of the 19 unbuilt industry children — its own breadcrumb says
  Industries → E-commerce). When the industries wave builds ecommerce, that content is the source.
- **Founder options:** (A) approve shipping the coherent virtual-accounting page + log the e-commerce
  headings as a "data-defect" equity exception [RECOMMENDED — matches the page's own head/FAQ/schema];
  (B) supply a true virtual-accounting heading contract if one exists elsewhere. Pending the ruling,
  /accounting/services/virtual-accounting/ is the ONE accounting child not shipped.
  **RESOLVED 2026-06-15:** founder chose (A) — coherent VA page shipped (`116df1f`); e-commerce headings
  logged as data-defect exceptions. The displaced e-commerce content is the source for
  /accounting/industries/ecommerce/ when the industries wave reaches it.

### D5 — Wave 5: first 5 industry children (commit `74b1120`) — tier CORRECT (t-mofu)
construction, real-estate, healthcare, legal, restaurant — built t-mofu (industry landing/consideration);
national scope (NY-specific tax dropped from the NY analogs). Correct tier, no re-tiering flag.

### D6 — ACCOUNTING REMAINING (17 of 39 — next waves under R7 autonomy)
- **3 standalones** (t-mofu, BOFU-review-flag like wave 4): /accounting/chart-of-accounts-setup/,
  /accounting/financial-statements/, /accounting/job-costing/.
- **14 industries** (t-mofu): agency, auto-repair, dental, **ecommerce (SPECIAL — source content is the
  VA-displaced e-commerce body)**, fitness, franchise, home-services, landscaping, manufacturing,
  nonprofit, professional-services, retail, saas, trucking.
- After these 17, accounting (39) is done and Path B (139 baselines) reaches cutover parity.

---
_This report is appended as each remaining silo (partners, accounting) is migrated. Re-tiering happens
AFTER 139-baseline cutover parity, on founder review of this queue._

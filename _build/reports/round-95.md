# Round 95 — 3 competitor /vs/ pages + hub wiring

**Phase:** GROWTH (flip held). **Founder-confirmed.** **Battery:** GREEN (clean rebuild).

## WHAT I DID — built 3 /vs/ comparison pages
1. **/vs/techbrot-vs-bookkeeper360/** — competitor (full t-mofu shape, cloned from techbrot-vs-1-800-accountant). 14-dim vs-table, honest tally (us 5 / them 4 / depends 5). 7 FAQ.
2. **/vs/techbrot-vs-xendoo/** — competitor (same shape). 14-dim vs-table (us 5 / them 3 / depends 6). 7 FAQ.
3. **/vs/local-cpa-vs-online-bookkeeping/** — role/structure (thin njk + shared partial `vs-compare-body.njk`, cloned from bookkeeper-vs-cpa). Complementary-honesty framing (most businesses use BOTH; we keep books, CPA files). 7 FAQ.

## HUB WIRING (src/vs.11tydata.js)
- Flipped bookkeeper360 + xendoo from "In progress" → Published (+href) in the at-a-glance table + providers cards.
- **Fixed a pre-existing DUPLICATE** bookkeeper360 provider card (was listed twice) — consolidated to one.
- Added local-cpa as a new Published role/structure card.
- Added all 3 to the ItemList schema array.

## DECISIONS / HONESTY
- **NO fabricated competitor pricing** — Bookkeeper360/Xendoo tiers described qualitatively, dollar figures deferred to the vendor ("verify current pricing with X"); competitors described from public info "as of review date." Not affiliated with any of them or Intuit. Fair "where they win" rows mandatory (honest tallies, never a sweep). TechBrot-doesn't-file-taxes stated throughout.
- **local-cpa = complementary, not "we beat your CPA"** — explicitly states we're not a CPA firm, don't file taxes / do IRS rep / audit; a good local CPA is valuable; most businesses use both. Non-disparaging. No fabricated "average CPA fee" figures.
- Founder-name-zero; no fabricated stats/clients; 2 real Clutch reviews only; no AggregateRating/Review schema. CTAs canonical (intent=accounting / file-review + phone).
- ⚑ Winner-marker note: both competitor agents found `vs-table__win` has no CSS (an existing page uses it unstyled); they correctly used a 4th "Better fit / Edge" column via the real `vs-table__concede` class instead. No illegal classes shipped (manifest GREEN).

## VERIFICATION
- BATTERY GREEN (clean rebuild). url-set 580 · all links resolve · founder-zero · manifest · variety-12a ≤1 · css 80,259B/83,968B.
- 3 pages: faq-min-6 (7/7/7) · FAQPage verbatim. Proactive checks pre-build: no vs-table__win in new pages, intents valid (accounting/file-review only) — clean first battery, no fix iterations.
- equity n/a (net-new growth pages).

## COUNT
COUNT: total pages live = 575 (orientation `*.html` non-dev; round-94 572 + 3) · re-skinned (142) + growth = 433 · pages added THIS turn = [/vs/techbrot-vs-bookkeeper360/, /vs/techbrot-vs-xendoo/, /vs/local-cpa-vs-online-bookkeeping/] · remaining in current cluster = 0 · next = /quickbooks/year-end-close/ (seasonal — LAST buildable BOFU tail item)

## NEXT / HELD / DO-NOT-BUILD
- NEXT (round 96, founder-confirmed): /quickbooks/year-end-close/ (seasonal BOFU) — closes the buildable BOFU tail. After this, the revenue/conversion surface is effectively complete bar the HELD items + the data-gated proof layer.
- HELD (founder): guarantee page (real terms only) · scheduler/book-a-call (flip infra).
- DO-NOT-BUILD (founder): results/case-studies (data-gated) · switching-away · emergency.
- FLIP-BLOCKER #6 grows: 3 new /vs/ pages join the inferred-clean list (LIVE axe/overflow pending).

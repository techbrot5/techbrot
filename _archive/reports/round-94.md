# Round 94 — /quickbooks/proadvisor-near-me/ (national near-me answer page)

**Phase:** GROWTH (flip held). **Founder-confirmed.** **Battery:** GREEN (clean rebuild).

## WHAT I DID
- **/quickbooks/proadvisor-near-me/** (t-bofu, slug qbnearme) — honest national "near me" answer page. Thesis: for QuickBooks work what matters is a Certified ProAdvisor inside your file, not physical proximity; remote-first; serves every U.S. state; real local-tax fluency for the built-out states. Routes "near me" intent to `/find-an-accountant/` + the 5 state pillars (NY/CA/TX/FL/IL). 6 FAQ. Added a **call-block** (CALL conversion, the BOFU handoff component) before the FAQ.

## DECISIONS / HONESTY
- **NO LocalBusiness schema, no fabricated offices/cities/addresses** — Service schema, areaServed = United States (+ the 5 built states as AdministrativeArea, which we have real state-tax content for; no city/office claims). Honest remote-first framing; non-disparaging (in-person is a valid choice for some — stated).
- Distinct from `/find-an-accountant/` (the directory hub) — this is the QB-keyword "near me" answer that routes INTO it, not a second directory.
- Founder-name-zero; not-affiliated-with-Intuit; we-don't-file-taxes (CPA files). No fabricated stats/reviews; no AggregateRating/Review schema. CTAs canonical only (intent=quickbooks-proadvisor + file-review + phone).

## VERIFICATION
- BATTERY GREEN (clean rebuild). url-set 577 · design-fidelity PASS (call-block) · faq-min-6 (6) · founder-zero · css 80,259B/83,968B.
- **2 fix iterations:** (1) design-fidelity — page lacked a BOFU handoff component (process-diagram is NOT on the permitted list); added a **call-block** (call-block__steps `<ol>` is NOT a counted variety marker, so variety stays ≤1). (2) ⚠ **11ty stale-render quirk** — the first non-clean `npx eleventy` rebuild did NOT re-render the edited page (call-block absent from built HTML despite being in source); a **clean rebuild (`rm _site`) fixed it.** LESSON: use clean rebuilds before battery-critical checks.

## COUNT
COUNT: total pages live = 572 (orientation `*.html` non-dev; round-93 571 + 1) · re-skinned (142) + growth = 430 · pages added THIS turn = [/quickbooks/proadvisor-near-me/] · remaining in current cluster = 0 · next cluster = 3 competitor /vs/ (techbrot-vs-bookkeeper360, techbrot-vs-xendoo, vs-local-cpa) → then /quickbooks/year-end-close/

## NEXT / HELD / DO-NOT-BUILD
- NEXT (round 95, founder-confirmed): 3 competitor /vs/ pages on the established /vs/ shared-partial pattern (fair, no fabricated competitor pricing); update /vs/ hub. THEN /quickbooks/year-end-close/ (seasonal) — closes the buildable BOFU tail.
- HELD (founder): guarantee page (real terms only) · scheduler/book-a-call (flip infra).
- DO-NOT-BUILD (founder): results/case-studies · switching-away · emergency.
- FLIP-BLOCKER #6: proadvisor-near-me joins the inferred-clean list (LIVE axe/overflow pending).

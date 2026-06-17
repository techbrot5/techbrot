# Round 36 — DEPTH BUILD-OUT · CA TAX-CLUSTER WAVE (4 pages) + new shared triage template
Depth build-out, California continuing. v4 CA tax cluster (4 — income-tax-state, the fullest cluster).
2 standard service pages (`partials/state-service-body.njk`) + 2 honest-triage pages (NEW
`partials/state-triage-body.njk`, modeled on the founder-approved NY honest-triage pages).

## WHAT I DID
The full v4 **CA tax cluster (4)** under `/find-an-accountant/california/`:
1. **sales-tax-help** (service) — CDTFA district sales tax (7.25% base, sourced by location, to 10.25%+),
   economic nexus ($500K, no transaction count), seller's permits, marketplace-vs-direct. We keep the
   books CDTFA-ready; the return + nexus determination are the CPA's.
2. **ab5-worker-classification** (service) — the genuinely CA-unique page: the ABC test, **Prong B**,
   $5K–$25K penalties, the EDD. **Honesty hard-gate honored:** we keep the books so W-2/1099 is separated
   and exposure is visible; we do NOT make the legal classification call, give legal advice, or represent
   in EDD audits — that's the CPA/employment counsel/EDD. Educational-only labeled throughout.
3. **state-tax-notice-help** (HONEST-TRIAGE) — FTB/CDTFA/EDD notices. Amber disclosure ATF + boundaries +
   scope-split; we reconcile the books behind the notice, the CPA/EA/attorney responds + represents.
4. **business-tax-problems** (HONEST-TRIAGE) — "tax problems" reframed as the books problems behind them;
   we get books current + CPA-ready; filing, agency resolution, and representation are the CPA's/EA's.

**NEW shared template `partials/state-triage-body.njk`** — one source for per-state honest-triage pages,
faithfully replicating the approved NY structure: amber `.disclosure--warn` banner ABOVE THE FOLD +
explicit do/don't boundaries + call-breakout + problem/notice-types grid + books-root-cause band +
honest scope-split + FAQ + expert-review. Sheet-7 / §8 discipline baked into the template.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/california/sales-tax-help/ — CDTFA district sales tax + $500K nexus.
- https://techbrot-preview.pages.dev/find-an-accountant/california/ab5-worker-classification/ — AB5/ABC test, books-only, educational.
- https://techbrot-preview.pages.dev/find-an-accountant/california/state-tax-notice-help/ — FTB/CDTFA/EDD notices (honest-triage).
- https://techbrot-preview.pages.dev/find-an-accountant/california/business-tax-problems/ — books-first tax-problem triage (honest-triage).

## ⚑ HONESTY REVIEW (founder spot-check requested — R3: honest-triage gets its OWN review, not batch)
The honest-triage TYPE + disclosure pattern are founder-approved (round 28 NY triage fan-out); I replicated
that approved pattern to the **CA agencies** (FTB/CDTFA/EDD/IRS) and proceeded under RECORD-DON'T-STOP.
**Please spot-check the disclosure copy on the 2 triage pages + the AB5 page:**
- **state-tax-notice-help disclosure:** "TechBrot is an independent bookkeeping and Certified QuickBooks
  ProAdvisor firm — not the California Franchise Tax Board, the CDTFA, the EDD, or any government agency,
  and not a CPA, EA, or tax attorney. Contacting us does not reach any California tax agency. We do not
  respond to notices…, represent you…, provide tax or legal advice, [or] file returns or protests."
- **business-tax-problems disclosure:** "…not a tax-resolution company, not a CPA, EA, or tax attorney, and
  not the FTB, CDTFA, EDD, or IRS… We do not file returns, negotiate with or represent you…, resolve or
  settle tax debt, or provide tax or legal advice." (Explicitly NOT a tax-resolution/OIC service.)
- **ab5:** "we keep the books so W-2/1099 is separated and exposure is visible; we do NOT make the legal
  classification determination, give legal advice, or represent in EDD audits." Educational-only labeled.
All three: never "official", never imply Intuit/agency affiliation, convert by CALL, defer representation
+ filing + resolution to the licensed professional. If any wording should tighten, flag it and I'll adjust.

## DECISIONS / JUDGMENT CALLS
- **AB5 facts band is AB5-specific** (Prong B / penalties / EDD) rather than the generic CA stack — more
  distinct + accurate for that page.
- **Honesty:** all deferred to FTB/CDTFA/EDD + CPA/EA/attorney; founder-name-zero; not Intuit; pricing =
  standard fixed-fee ranges; no fabricated counts; no tax-resolution/OIC/"settle your debt" claims anywhere.
- **Re-link TODO (low priority):** some CA money/QB pages still link "sales tax" CTAs to global
  /accounting/sales-tax-compliance/; can re-point to the now-built CA sales-tax-help page in a polish pass
  (all links resolve today — not a gate issue).

## VERIFICATION
- **BATTERY** — (verdict appended at commit; expected GREEN). All 4: 8 FAQ · faq-overlap zero · faq-schema-verbatim.
  css-bytes 77,931 B (no new CSS) · manifest · design-fidelity (+4, t-bofu) · variety-12a · links resolve.
- **Schema:** WebPage + BreadcrumbList + Service(areaServed=California) + FAQPage + speakable + reviewedBy.
- **a11y/overflow (chrome probes ENV-BLOCKED):** static proxy + SF-equivalence. Disclosure amber meets AA
  (proven round 28 on the NY/QB triage pages with the same `.disclosure--warn` tokens).

## ⛔ FLIP-BLOCKER (cutover gate #6) — updated
Inferred-clean pending LIVE axe/overflow on the founder's machine: **26 city + 24 glossary + 15 CA service = 65 pages.**

## NEXT (autonomous, depth — California nearly complete)
CA remaining ≈ 10: **pricing** (table page, special) + **speak-to-a-proadvisor** (honest-triage) → **industries
hub + 6** (ecommerce, agency, restaurant, real-estate, professional-services, construction) → **cities-hub** →
re-link CA pillar ecosystem to children. Then TX → FL → IL.

COUNT: total pages live = 209 · re-skinned (142) + growth this phase = 67 · pages added THIS turn =
/find-an-accountant/california/{sales-tax-help, ab5-worker-classification, state-tax-notice-help,
business-tax-problems}/ (4 CA tax-cluster children) · remaining in current cluster = CA depth (~10: pricing +
speak-to-a-proadvisor, industries hub+6, cities-hub, pillar re-link) · next = CA industries OR pricing/triage.
State depth: NY ✅ · CA pillar + 11 cities + 15 services (money+QB+tax) · TX/FL/IL pillar+5 cities.

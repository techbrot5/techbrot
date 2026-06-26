# GA-FACTS.md — Georgia build fact base (the ONLY source for GA figures)
Authoritative reference for every Georgia page. **Do not invent any figure not in this file.** Where a page needs a
number that isn't here (e.g. a specific county's combined sales-tax rate), write it **qualitatively** and link the live
source. Georgia is a **CORE state** built to the **6-essentials** depth (pillar + quickbooks-accountant +
small-business-accountant + quickbooks-cleanup + quickbooks-setup + bookkeeping-services); every absent service/industry
**routes to the GLOBAL page**. GA is an **areaServed-only** state — **NO street address on any GA page** (Delaware is the
only real-address state). Georgia **STARTS Wave C (Sunbelt)** and is the **Southeast organic anchor** (Atlanta). All facts
verified 2026-06-26 against official sources (Georgia Department of Revenue `dor.georgia.gov` + Office of the Governor;
cited below).

## VERIFIED GEORGIA TAX FACTS (with sources)
- **State individual income tax — a FLAT 4.99% rate (2026).** Georgia converted from graduated brackets to a **flat
  income tax** under **HB 1437 (2022)** and has been stepping the rate down. **HB 463 (2026) lowered the rate to
  4.99%, effective Jan 1, 2026** (from 5.19% in 2025; the 5.19% itself came from HB 111 (2025), which accelerated the
  HB 1437 schedule). The statute provides for **further annual reductions** if revenue conditions are met, plus
  **larger standard deductions** effective Jan 1 2026 ($32,000 married-filing-joint / $16,000 single, up from
  $24,000 / $12,000). Frame the rate as **"a flat 4.99% for 2026, on a legislated path to further reductions"** and
  link the DOR rate page. Source: Georgia Dept of Revenue — Tax Tables & Rate Schedule; Office of the Governor — "Gov.
  Kemp Signs Legislation Lowering Taxes" (May 11 2026, HB 463); HB 1437 (2022); HB 111 (2025).
- **Corporate income tax — a FLAT 4.99% rate (2026), tied to the individual rate.** Georgia's **corporate income tax**
  (and the rate applied to pass-through entities electing to file at the entity level) is a **flat 4.99% for 2026**,
  moving in lockstep with the individual rate (5.19% in 2025 → 4.99% in 2026). (Note: the DOR corporate static page may
  still display 5.19% — use 4.99% for 2026 per the HB 463 signing.) Source: Georgia Dept of Revenue — Corporate Income
  and Net Worth Tax; Office of the Governor (HB 463).
- **Corporate NET WORTH TAX — the genuinely GA-distinct business tax (a franchise-style tax; the hook).** Separately
  from income tax, Georgia levies a **corporate net worth tax** on corporations doing business in the state:
  - Corporations with **net worth of $100,000 or less owe $0** (but must still file the return).
  - The tax is **graduated by net-worth bracket**, **capped at a maximum of $5,000** for corporations with net worth
    **over $22 million**.
  - It is filed **together with the corporate income tax return** (Form 600), and the **first-year net worth tax is
    based on a beginning-of-period balance**. We keep the books net-worth-tax-ready (clean equity and the balance
    sheet) so the CPA can compute it. Source: Georgia Dept of Revenue — Corporate Income and Net Worth Tax.
- **Pass-Through Entity (PTE) election — the advisory angle.** Georgia allows a partnership or S-corp to **elect to pay
  Georgia income tax at the entity level** (at the same flat rate, 4.99% for 2026) as a federal SALT-cap workaround,
  with the owners taking a corresponding benefit. Advisory/coordination item — the CPA makes the election and files;
  TechBrot keeps the books PTE-ready. Source: Georgia Dept of Revenue (HB 149 PTE election).
- **Sales & use tax — 4% state + LOCAL options (county/jurisdiction-variable; combined ~7–8%).** Georgia's **state
  sales and use tax is 4%**, and **counties and jurisdictions add 1% local options** — **LOST** (Local Option),
  **SPLOST** (Special Purpose Local Option), **ELOST/ESPLOST** (Education), **TSPLOST** (Transportation), and Atlanta's
  **MOST** — so the **combined rate varies by jurisdiction**, commonly **7%–8%** (late-2025/2026 county rate charts).
  Because the rate is set per jurisdiction, QuickBooks must apply the correct combined rate by location. Source:
  Georgia Dept of Revenue — Sales Tax Rates (General); the quarterly GA Sales and Use Tax Rate Chart (eff. Jan 1 2026).
- **NO local/city income tax — and NO income-tax reciprocity.** Georgia has **no local or municipal income tax** (a
  clean contrast to Ohio's municipal tax and Michigan's city income tax) — payroll income-tax withholding is **state
  only**. Georgia also has **no reciprocal income-tax agreements with any other state**: a nonresident who performs
  work in Georgia is generally subject to **Georgia withholding on the Georgia-source wages** (no reciprocity shortcut),
  which matters for multi-state and remote employers. Source: Georgia Dept of Revenue — Withholding; (Georgia is among
  the states with no reciprocity agreements).

## GEOGRAPHY (metros NAMED in pillar copy + areaServed schema — NO separate city pages; this is a core state)
- **159 counties** (Georgia has the second-most counties of any U.S. state). A major Southeast economy anchored by metro
  Atlanta — the business capital of the Southeast.
- **Metros to name** (areaServed + copy): **Atlanta** (Fulton County; Fortune 500 HQs — Coca-Cola, Delta, Home Depot,
  UPS — fintech "Transaction Alley," film/TV, and Hartsfield-Jackson, the world's busiest airport), **Savannah**
  (Chatham County; the fast-growing Port of Savannah, logistics/distribution, the Hyundai Metaplant nearby), **Augusta**
  (Richmond County; cyber and medical — Army Cyber Command/Fort Eisenhower), **Columbus** (Muscogee County; insurance —
  Aflac, Synovus, TSYS — and Fort Moore), **Macon** (Bibb County), **Athens** (Clarke County; the University of
  Georgia), **Marietta** (Cobb County; aerospace — Lockheed), and **Alpharetta** (Fulton County; the north-metro tech
  corridor). Frame "all 159 counties, remote-first."
- **NO HQ street address in Georgia.** All GA pages are remote/served-market: `Service` + `areaServed` only.

## INDUSTRY ANGLES (route to GLOBAL `/accounting/industries/<x>/` — NO per-state GA industry pages)
GA's economy: **logistics & distribution** (the Port of Savannah, Hartsfield-Jackson, and the interstate crossroads —
the strongest GA hook), **manufacturing** (automotive — Kia in West Point, Hyundai near Savannah — plus aerospace and
food processing), **professional & financial services** (Atlanta fintech "Transaction Alley," insurance in Columbus),
**film & entertainment** (the Georgia film tax credit — "Y'allywood"; handle via professional-services/agency),
**healthcare**, **construction** (the fast-growing metro), and **real estate**. On the pillar, route industry cards to
the **global** pages that exist (`/accounting/industries/trucking/`, `/manufacturing/`, `/professional-services/`,
`/healthcare/`, `/construction/`, `/real-estate/` — confirm which exist at build time and link only those). The
**logistics/trucking** and **manufacturing** cards are the strongest Georgia hooks. No GA industry child pages are built
(core state).

## PRICING (canonical — use these exact figures; same global lexicon as DE/IN/PA/NJ/MD/VA/OH/MI/NY)
- Monthly bookkeeping: **from $400/mo** · Cleanup/Catch-up: **from $1,200** · QuickBooks Setup: **from $750** ·
  QuickBooks Cleanup: **from $1,200** · Sales Tax Help: **from $250/mo** · Payroll setup: **from $300** · Fractional
  CFO (global): **from $1,500/mo**. All fixed-fee against a written scope after a free discovery call. Georgia's genuine
  complexity is the **county-variable local-option sales tax** (4% state + LOST/SPLOST/ELOST/TSPLOST), the **corporate
  net worth tax**, **no local income tax but no reciprocity** (state withholding for all GA-source wages), the new
  **flat 4.99% income tax**, and the **PTE election**. No dedicated GA pricing page — the pillar pricing table routes to
  the 5 GA service children + global `/pricing/`, `/quickbooks/payroll/`, `/accounting/advisory/fractional-cfo/`.

## AUTHORITY LINKS (use rel="noopener nofollow")
- Georgia Department of Revenue — https://dor.georgia.gov/
- Georgia Dept of Revenue — Tax Tables & Georgia Tax Rate Schedule — https://dor.georgia.gov/tax-tables-georgia-tax-rate-schedule
- Georgia Dept of Revenue — Corporate Income and Net Worth Tax — https://dor.georgia.gov/taxes/corporate-income-and-net-worth-tax
- Georgia Dept of Revenue — Sales Tax Rates (General) — https://dor.georgia.gov/sales-tax-rates-general
- Georgia Dept of Revenue — Important Tax Updates — https://dor.georgia.gov/taxes/important-tax-updates
- IRS Small Business — https://www.irs.gov/businesses/small-businesses-self-employed

## HONESTY CONTRACT (absolute — hard-stop if you can't comply)
- TechBrot is an **independent** Certified QuickBooks ProAdvisor + bookkeeping firm; **NOT affiliated with Intuit**.
- **Does NOT file** Georgia or federal returns, the corporate income tax, the net worth tax, the individual income tax,
  the sales-tax return, or the PTE election as agent; **not a registered agent**; does not represent before any tax
  authority. Keeps the books + coordinates with the client's CPA/EA and the Georgia Dept of Revenue.
- **NO Georgia street address. NO LocalBusiness node on any GA page. Service + areaServed (State of Georgia + named
  metros) only.** A fabricated GA local address would breach the honesty contract.
- Reviews = ONLY the 2 real Clutch reviews (Heidi Schubert; Barbara Best). **No** invented reviewers, **no**
  AggregateRating. Outcomes/scenarios = explicitly **representative/illustrative composites**, never real-client claims.
- **No founder/personal name** in visible content (no "Abid Khan"). **David Westgate** may appear ONLY as the named lead
  ProAdvisor/operator (the standing-rule exception) and as `reviewedBy` `#david-westgate` in schema.
- The **flat 4.99% income tax (2026)** and the **4.99% corporate income tax** are VERIFIED — state them (frame the path
  as "further reductions"). The **4% state sales tax** is VERIFIED; combined jurisdiction rates framed qualitatively
  (~7–8%) and linked. The **net worth tax** $100k-exempt / $5,000-max-over-$22M figures are VERIFIED — state them.
- Use the SOFTENED ProAdvisor-directory framing: "Intuit's public ProAdvisor directory lists active ProAdvisors for verification."

## BUILD CONVENTIONS (match the proven PA/NJ/MD/VA/OH/MI core-state exemplars exactly — same shape, GA facts)
- **Data-files-only on existing v2 layouts.** Each page = `<name>.njk` (JSON front-matter) + `<name>.11tydata.js`.
  Read the same-named **Michigan** or **Ohio** child (the most recent core-state exemplars —
  `src/find-an-accountant/michigan/<name>.*`) and the **MI pillar**, and replicate the structure with GA content. **No
  local income tax / no reciprocity** is the deliberate GA differentiation (don't import OH/MI's local-payroll-tax or
  reciprocity framing — GA's hooks are the local-option SALES tax, the net worth tax, and the flat 4.99% rate).
- **CORE-STATE PILLAR PATTERN (identical to PA/NJ/MD/VA/OH/MI):** every `t-state-pillar.njk` section is `{% if %}`-guarded.
  - KEEP: hero · trust strip · stats · in-brief · credentials · summarized · aiSummary · stateTerms (glossary) ·
    delivery · context · scenarios · outcomes · advisory · **industries (cards → GLOBAL `/accounting/industries/*`)** ·
    **services (the 5 GA children only)** · pricing (rows → 5 children + global) · **cities (named metros, NO href)** +
    countyProse · intake (teamDavid/teamIntake + operators sec keys in the .njk) · operatorStandards · why · pullQuote ·
    reviews (2 real Clutch) · comparison · authority · faq (8–10) · reviewCreds · related · ctaBand.
  - **OMIT entirely: `ecosystem`**. `cities` entries = name + county only, NO `href`. The .njk frontmatter MUST include
    the `sec.operators*` keys.
  - Schema (NO street address): `provider`:`#organization`; pillar areaServed =
    `{"@type":"State","name":"Georgia","sameAs":"https://en.wikipedia.org/wiki/Georgia_(U.S._state)"}` + named metros as
    `containsPlace` City nodes; NO PostalAddress/geo/LocalBusiness/hasMap. QAPage (aiSummary) + FAQPage (faq). Keep
    `stripTags()`.
- **Slugs / anchor-ids:** pillar slug `ga`, intent `georgia`. Service children anchor slugs `ga-svc-<x>`
  (qbaccountant, smb, qbcleanup, qbsetup, bkkg). speakable ids `#ga-in-brief-text`, `#ga-ai-summary-list`,
  `#ga-svc-<x>-summary`, `#ga-svc-<x>-ai-summary-list`. OG `georgia-...-og.png`.
- **The 6 essentials:** pillar `georgia.*` (permalink `/find-an-accountant/georgia/`); + quickbooks-accountant ·
  small-business-accountant · quickbooks-cleanup · quickbooks-setup · bookkeeping-services (t-money). Service pages carry
  `reviewedBy` `#david-westgate`.
- **The GA-distinct service hook (weave into every GA page):** the **flat 4.99% income tax** (2026, HB 1437 path) + the
  **county-variable local-option sales tax** (4% state + LOST/SPLOST/ELOST/TSPLOST, combined ~7–8%) + the **corporate
  net worth tax** ($100k-exempt → $5,000 max) + **NO local income tax but NO reciprocity** (state withholding on all
  GA-source wages) + the **PTE election** (advisory) + the **Atlanta logistics/fintech/film** economy.
- **Meta:** title keyword-LED ≤60 UNIQUE literal-Unicode; description value-led ≤160 with phone **(877) 751-5575**
  (≤157) on all 6; no HTML entities, no mojibake. ("Georgia" is short — titles fit easily.)
- **FAQ (Option C):** caps — money/service **5–7**, pillar **8–10**. Answer-first, generic, minimal "TechBrot". 1–2
  call-intent FAQs with the phone woven **into an answer**. Q&A always visible == FAQPage schema.
- **Routing (absolute):** link only to pages that exist. GA pages link only the 5 GA siblings + pillar, or GLOBAL:
  payroll `/quickbooks/payroll/`, migration `/quickbooks/migration/`, monthly `/accounting/bookkeeping/monthly-bookkeeping/`,
  catch-up `/accounting/bookkeeping/catch-up-bookkeeping/`, sales-tax `/accounting/sales-tax-compliance/`, fractional-CFO
  `/accounting/advisory/fractional-cfo/`, QuickBooks Online `/quickbooks/online/`, file-review `/quickbooks/file-review/`,
  pricing `/pricing/`, comparisons `/vs/*`, industries `/accounting/industries/<x>/`. The existing state pillars (NY, CA,
  TX, FL, IL, DE, IN, PA, NJ, MD, VA, OH, MI) can be linked from `related`; GA's Sunbelt neighbors (Florida exists —
  `/find-an-accountant/florida/`; North Carolina/Tennessee are "coming soon" until built, no href → hub).
- **⚠ CRITICAL (the PA-cleanup bug):** in the `.njk` BODY (after the `---` front-matter), write `<a href="...">` with
  PLAIN double-quotes — NEVER escaped `\"`. Escaped quotes are correct ONLY inside JSON front-matter and JS strings in
  the `.11tydata.js`; in raw template body they emit literal backslashes and break the links check.
- **CTAs:** canonical lexicon only. Contact links: `/contact/?intent=georgia&state=georgia&source_type=...&funnel_stage=...`.
- Section background alternation white/sand per the exemplar. One H1. Logical heading order. `dump|safe` for JSON-LD.
- After build: add a GA block to `register_state.py` (intent `georgia`) → `python _build/scripts/register_state.py georgia`
  → full build → `powershell -File _build/scripts/battery-frozen.ps1` → content-equity to completion + read → commit +
  push. GA is additive. **Georgia STARTS Wave C (Sunbelt); next = North Carolina.**

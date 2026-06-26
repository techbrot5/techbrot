# OH-FACTS.md — Ohio build fact base (the ONLY source for OH figures)
Authoritative reference for every Ohio page. **Do not invent any figure not in this file.** Where a page needs a
number that isn't here (e.g. a specific municipality's income-tax rate or a county sales-tax rate), write it
**qualitatively** and link the live source. Ohio is a **CORE state** built to the **6-essentials** depth (pillar +
quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup + bookkeeping-services);
every absent service/industry **routes to the GLOBAL page**. OH is an **areaServed-only** state — **NO street address
on any OH page** (Delaware is the only real-address state). Ohio's **reciprocity with Indiana, Pennsylvania, Michigan,
Kentucky, and West Virginia** ties it to the Indiana and Pennsylvania anchors. Ohio **starts Wave B (Midwest).** All
facts verified 2026-06-26 against official sources (Ohio Department of Taxation `tax.ohio.gov`, Ohio Revised Code,
Ohio General Assembly HB96 2025; cited below).

## VERIFIED OHIO TAX FACTS (with sources)
- **State individual income tax — low and on a legislated glide path to ELIMINATION.** The **first $26,050 of income
  is exempt** (no tax below it). Above that, Ohio's rate is **low (under 3%)**, and **House Bill 96 (2025) lowers the
  rate each year toward a single low flat rate and then ZERO — no tax on nonbusiness income beginning in 2030.**
  Because the exact per-year rate is mid-phase-out and changes annually, **frame the rate qualitatively** ("a low rate,
  under 3%, being phased to zero by 2030") and link the Ohio Dept of Taxation rate page rather than quoting a single
  2026 figure. Source: Ohio Dept of Taxation; Ohio Revised Code 5747.02; Ohio General Assembly HB96 (136th GA, eff.
  Sept 30, 2025).
- **NO traditional corporate income tax — Ohio uses the Commercial Activity Tax (CAT) instead.** Ohio **does not levy a
  corporate income tax**; it was replaced by the **CAT, a gross-receipts tax**. For **2026 the CAT exclusion is
  $6,000,000** — a business with **Ohio taxable gross receipts under $6 million owes no CAT** (after the 2024–2025
  reforms raised the exclusion, most small businesses are now exempt). Above the exclusion the rate is **0.26%** on
  taxable gross receipts. Source: Ohio Dept of Taxation — Commercial Activity Tax (`tax.ohio.gov`).
- **Municipal income tax — the genuinely OH-distinct (and most complex local) tax; the hook.** Ohio has the most
  intricate local income-tax regime in the country: **649 municipalities and 199 school districts impose income
  taxes** where an employee works (and, for school districts, where they live). Mechanics (VERIFIED):
  - **Work-location withholding:** an employer generally withholds the municipal income tax for the **municipality
    where the work is performed** (rates typically range about **1% to 3%**; the major cities are around 2.5% — keep
    specific city rates QUALITATIVE and link the municipality/RITA).
  - **The 20-day occasional-entrant rule:** an employer need not withhold for a municipality where an employee works
    **20 or fewer days** in the year; after 20 days, withholding begins. Exceptions: the employee's **principal place
    of work**, long (>20-day) construction/temporary sites, and athletes/entertainers/public figures.
  - **Who administers it varies:** many municipalities use **RITA (Regional Income Tax Agency)** or **CCA (Central
    Collection Agency)**; others self-administer — and **RITA and CCA interpret the 20-day rule differently**, which
    is exactly why this needs operational expertise, not a generic payroll default.
  - **School district income tax:** **199 school districts** levy their own income tax, generally **residence-based**
    and separate from the municipal tax — another withholding layer.
  - **HONEST FRAMING:** TechBrot configures QuickBooks Payroll for work-location municipal withholding (and the
    school-district layer where it applies) per employee; the municipality / RITA / CCA filing is made by the business
    or its CPA. Source: Ohio Revised Code Chapter 718 (incl. § 718.011); RITA (`ritaohio.com`); CCA.
- **Reciprocity — IN/PA/MI/KY/WV (STATE tax only; municipal tax still applies).** Ohio has reciprocal agreements with
  **Indiana, Pennsylvania, Michigan, Kentucky, and West Virginia**: a resident of those states working in Ohio pays
  income tax to their **home state** and is exempt from Ohio **state** withholding (employee files **Ohio form
  IT 4NR**). **CRITICAL:** the reciprocity covers the **state** income tax only — **the Ohio municipal income tax
  still applies** to wages earned in an Ohio municipality, and the reciprocity does **not** shield a 20%+ owner under
  the **IT 4738 PTE** election. Source: Ohio Dept of Taxation — Residency / Reciprocity; Form IT 4NR.
- **Pass-Through Entity Tax (PTE) — the advisory angle.** Ohio's **IT 4738 Electing Pass-Through Entity tax** is a
  SALT-cap workaround: a qualifying PTE elects to pay tax at the entity level so the owners' state tax is deductible
  federally. Note the reciprocity caveat above (20%+ owners' compensation is included). Advisory/coordination item —
  the CPA elects and files; TechBrot keeps the books PTE-ready. Source: Ohio Dept of Taxation — Electing Pass-Through
  Entity (IT 4738).
- **Sales & use tax — 5.75% state + county/transit permissive (variable).** Counties and regional transit authorities
  add sales tax in 0.05% increments; the **combined state+county+transit rate may not exceed 8.75%**, and as of late
  2025 **combined county rates ranged from 6.50% to 8.0%** (the 8.0% top is in **Cuyahoga** (Cleveland) and **Franklin**
  (Columbus) counties). Because the rate is set at the county level, QuickBooks has to apply the correct combined rate
  by county. Source: Ohio Dept of Taxation — Sales and Use Tax; county rate tables.

## GEOGRAPHY (metros NAMED in pillar copy + areaServed schema — NO separate city pages; this is a core state)
- **88 counties.** Ohio is a major Midwest manufacturing, logistics, healthcare, and finance economy, organized around
  the "3-C" corridor (Columbus–Cleveland–Cincinnati) plus strong secondary metros.
- **Metros to name** (areaServed + copy): **Columbus** (Franklin County; state capital, largest city, insurance/finance,
  Intel), **Cleveland** (Cuyahoga County; the Cleveland Clinic, manufacturing, the Port), **Cincinnati** (Hamilton
  County; Procter & Gamble, consumer goods, logistics), **Toledo** (Lucas County; glass/auto), **Akron** (Summit County;
  polymers/tires), **Dayton** (Montgomery County; aerospace/Wright-Patterson), **Canton** (Stark County), and
  **Youngstown** (Mahoning County). Frame "all 88 counties, remote-first."
- **NO HQ street address in Ohio.** All OH pages are remote/served-market: `Service` + `areaServed` only.

## INDUSTRY ANGLES (route to GLOBAL `/accounting/industries/<x>/` — NO per-state OH industry pages)
OH's economy: **manufacturing** (autos, steel, polymers, aerospace — one of the most manufacturing-intensive states),
**logistics & trucking** (the Midwest crossroads, intersecting interstates), **healthcare** (the Cleveland Clinic and
a deep hospital base), **professional & financial services** (Columbus insurance/finance), **construction**, and
**real estate**. On the pillar, route industry cards to the **global** pages that exist
(`/accounting/industries/manufacturing/`, `/trucking/`, `/healthcare/`, `/professional-services/`, `/construction/`,
`/real-estate/` — confirm which exist at build time and link only those). The **manufacturing** and **trucking** cards
are the strongest Ohio hooks. No OH industry child pages are built (core state).

## PRICING (canonical — use these exact figures; same global lexicon as DE/IN/PA/NJ/MD/VA/NY)
- Monthly bookkeeping: **from $400/mo** · Cleanup/Catch-up: **from $1,200** · QuickBooks Setup: **from $750** ·
  QuickBooks Cleanup: **from $1,200** · Sales Tax Help: **from $250/mo** · Municipal-tax (RITA/CCA + school district)
  payroll setup: **from $300** · Fractional CFO (global): **from $1,500/mo**. All fixed-fee against a written scope
  after a free discovery call. Ohio's genuine complexity is the **municipal income tax** (work-location withholding
  across 649 municipalities + 199 school districts, the 20-day rule, RITA/CCA), the **CAT** (gross receipts over $6M;
  no corporate income tax), the **county-variable sales tax**, and the **PTET election**. No dedicated OH pricing page —
  the pillar pricing table routes to the 5 OH service children + global `/pricing/`, `/quickbooks/payroll/`,
  `/accounting/advisory/fractional-cfo/`.

## AUTHORITY LINKS (use rel="noopener nofollow")
- Ohio Department of Taxation — https://tax.ohio.gov/
- Ohio Dept of Taxation — Commercial Activity Tax (CAT) — https://tax.ohio.gov/business/commercial-activity-tax
- Ohio Dept of Taxation — Sales and Use Tax — https://tax.ohio.gov/business/sales-and-use-tax
- Ohio Dept of Taxation — Pass-Through Entity & Fiduciary Income Tax (IT 4738) — https://tax.ohio.gov/business/pass-through-entity-and-fiduciary-income-tax
- Regional Income Tax Agency (RITA) — https://www.ritaohio.com/
- Central Collection Agency (CCA) — https://ccatax.ci.cleveland.oh.us/
- IRS Small Business — https://www.irs.gov/businesses/small-businesses-self-employed

## HONESTY CONTRACT (absolute — hard-stop if you can't comply)
- TechBrot is an **independent** Certified QuickBooks ProAdvisor + bookkeeping firm; **NOT affiliated with Intuit**.
- **Does NOT file** Ohio or federal returns, the CAT, the state income tax, the municipal or school-district income-tax
  filings, the sales-tax return, or the PTE (IT 4738) return as agent; **not a registered agent**; does not represent
  before any tax authority. Keeps the books + coordinates with the client's CPA/EA, the Ohio Dept of Taxation, RITA/CCA,
  and the municipality.
- **NO Ohio street address. NO LocalBusiness node on any OH page. Service + areaServed (State of Ohio + named metros)
  only.** A fabricated OH local address would breach the honesty contract.
- Reviews = ONLY the 2 real Clutch reviews (Heidi Schubert; Barbara Best). **No** invented reviewers, **no**
  AggregateRating. Outcomes/scenarios = explicitly **representative/illustrative composites**, never real-client claims.
- **No founder/personal name** in visible content (no "Abid Khan"). **David Westgate** may appear ONLY as the named
  lead ProAdvisor/operator (the standing-rule exception) and as `reviewedBy` `#david-westgate` in schema.
- The state income-tax rate is mid-phase-out — **frame qualitatively** (low/under 3%/zero by 2030), do not quote a
  single fixed 2026 figure; the **$26,050 exemption** and the **2030 elimination** ARE stated. Specific municipal and
  county rates: **frame qualitatively**, never quote a fixed locality figure not in this file; link RITA / the locality.
- Use the SOFTENED ProAdvisor-directory framing: "Intuit's public ProAdvisor directory lists active ProAdvisors for verification."

## BUILD CONVENTIONS (match the proven PA/NJ/MD/VA core-state exemplars exactly — same shape, OH facts)
- **Data-files-only on existing v2 layouts.** Each page = `<name>.njk` (JSON front-matter) + `<name>.11tydata.js`.
  Read the same-named **Maryland** or **Pennsylvania** child (the proven core-state exemplars —
  `src/find-an-accountant/maryland/<name>.*` and `src/find-an-accountant/pennsylvania/<name>.*`) and the **MD/PA
  pillar**, and replicate the structure with OH content. **Ohio's municipal income tax is the closest analog to PA's
  Act 32** (work-location-ish local withholding) — but more complex (649 municipalities + 199 school districts,
  RITA/CCA, the 20-day rule). Lead with that as the hook.
- **CORE-STATE PILLAR PATTERN (identical to PA/NJ/MD/VA):** every `t-state-pillar.njk` section is `{% if %}`-guarded.
  - KEEP: hero · trust strip · stats · in-brief · credentials · summarized · aiSummary · stateTerms (glossary) ·
    delivery · context · scenarios · outcomes · advisory · **industries (cards → GLOBAL `/accounting/industries/*`)**
    · **services (the 5 OH children only)** · pricing (rows → 5 children + global) · **cities (named metros, NO href)**
    + countyProse · intake (teamDavid/teamIntake + operators sec keys in the .njk) · operatorStandards · why ·
    pullQuote · reviews (2 real Clutch) · comparison · authority · faq (8–10) · reviewCreds · related · ctaBand.
  - **OMIT entirely: `ecosystem`**. `cities` entries = name + county only, NO `href`. The .njk frontmatter MUST
    include the `sec.operators*` keys.
  - Schema (NO street address): `provider`:`#organization`; pillar areaServed =
    `{"@type":"State","name":"Ohio","sameAs":"https://en.wikipedia.org/wiki/Ohio"}` + named metros as `containsPlace`
    City nodes; NO PostalAddress/geo/LocalBusiness/hasMap. QAPage (aiSummary) + FAQPage (faq). Keep `stripTags()`.
- **Slugs / anchor-ids:** pillar slug `oh`, intent `ohio`. Service children anchor slugs `oh-svc-<x>`
  (qbaccountant, smb, qbcleanup, qbsetup, bkkg). speakable ids `#oh-in-brief-text`, `#oh-ai-summary-list`,
  `#oh-svc-<x>-summary`, `#oh-svc-<x>-ai-summary-list`. OG `oh-...-og.png`.
- **The 6 essentials:** pillar `ohio.*` (permalink `/find-an-accountant/ohio/`); + quickbooks-accountant ·
  small-business-accountant · quickbooks-cleanup · quickbooks-setup · bookkeeping-services (t-money). Service pages
  carry `reviewedBy` `#david-westgate`.
- **The OH-distinct service hook (weave into every OH page):** the **municipal income tax** (work-location withholding
  across 649 municipalities + 199 school districts, the 20-day rule, RITA/CCA) + the **CAT** (gross receipts over $6M;
  Ohio has **no corporate income tax**) + the **county-variable sales tax** + **IN/PA/MI/KY/WV reciprocity** (state
  only; municipal still applies) + **PTET** (advisory).
- **Meta:** title keyword-LED ≤60 UNIQUE literal-Unicode; description value-led ≤160 with phone **(877) 751-5575**
  (≤157) on all 6; no HTML entities, no mojibake. ("Ohio" is very short — titles fit easily.)
- **FAQ (Option C):** caps — money/service **5–7**, pillar **8–10**. Answer-first, generic, minimal "TechBrot". 1–2
  call-intent FAQs with the phone woven **into an answer**. Q&A always visible == FAQPage schema.
- **Routing (absolute):** link only to pages that exist. OH pages link only the 5 OH siblings + pillar, or GLOBAL:
  payroll `/quickbooks/payroll/`, migration `/quickbooks/migration/`, monthly `/accounting/bookkeeping/monthly-bookkeeping/`,
  catch-up `/accounting/bookkeeping/catch-up-bookkeeping/`, sales-tax `/accounting/sales-tax-compliance/`,
  fractional-CFO `/accounting/advisory/fractional-cfo/`, QuickBooks Online `/quickbooks/online/`, file-review
  `/quickbooks/file-review/`, pricing `/pricing/`, comparisons `/vs/*`, industries `/accounting/industries/<x>/`.
  Indiana (`/find-an-accountant/indiana/`), Pennsylvania (`/find-an-accountant/pennsylvania/`), and Delaware
  (`/find-an-accountant/delaware/`) exist — link from `related` (the IN/PA reciprocity tie; Michigan / Kentucky / West
  Virginia are "coming soon", no href → hub).
- **⚠ CRITICAL (the PA-cleanup bug):** in the `.njk` BODY (after the `---` front-matter), write `<a href="...">` with
  PLAIN double-quotes — NEVER escaped `\"`. Escaped quotes are correct ONLY inside JSON front-matter and JS strings in
  the `.11tydata.js`; in raw template body they emit literal backslashes and break the links check.
- **CTAs:** canonical lexicon only. Contact links: `/contact/?intent=ohio&state=ohio&source_type=...&funnel_stage=...`.
- Section background alternation white/sand per the exemplar. One H1. Logical heading order. `dump|safe` for JSON-LD.
- After build: add an OH block to `register_state.py` (intent `ohio`) → `python _build/scripts/register_state.py ohio`
  → full build → `powershell -File _build/scripts/battery-frozen.ps1` → content-equity to completion + read → commit +
  push. OH is additive. Then **Michigan** (finishes Wave B — Midwest).

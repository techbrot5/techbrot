# VA-FACTS.md — Virginia build fact base (the ONLY source for VA figures)
Authoritative reference for every Virginia page. **Do not invent any figure not in this file.** Where a page needs
a number that isn't here (e.g. a specific locality's BPOL rate or sales-tax region), write it **qualitatively** and
link the live source. Virginia is a **CORE state** built to the **6-essentials** depth (pillar + quickbooks-accountant
+ small-business-accountant + quickbooks-cleanup + quickbooks-setup + bookkeeping-services); every absent
service/industry **routes to the GLOBAL page**. VA is an **areaServed-only** state — **NO street address on any VA
page** (Delaware is the only real-address state). VA's **reciprocity with MD, PA, WV, KY, and DC** ties it naturally
to the Maryland and Pennsylvania anchors. All facts verified 2026-06-26 against official sources (Virginia Department
of Taxation `tax.virginia.gov`; cited below).

## VERIFIED VIRGINIA TAX FACTS (with sources)
- **State individual income tax — graduated, but effectively near-flat at the top; NO LOCAL INCOME TAX.** The brackets
  are **2%** ($0–$3,000), **3%** ($3,001–$5,000), **5%** ($5,001–$17,000), and **5.75%** ($17,001+). Because the top
  5.75% rate starts at just $17,000, most business owners' income is taxed at **5.75%**. **Virginia has no county or
  city income tax** — a key contrast with Maryland's "piggyback" local tax and Pennsylvania's Act 32 EIT (the Virginia
  local-tax burden is on the *business* side instead — see BPOL below). Source: Virginia Tax — Individual Income Tax
  Rates / tax tables. *(A 2026 legislative proposal would add a 7.75% bracket on income over $1,000,000 — frame as a
  PROPOSAL, not current law; confirm status with Virginia Tax.)*
- **Corporate income tax — 6% flat** on Virginia taxable income (multi-state corporations allocate and apportion via
  Virginia Schedule A). Source: Virginia Tax — Corporation Income Tax (`tax.virginia.gov/corporation-income-tax`).
- **BPOL — the genuinely VA-distinct hook (a LOCAL business gross-receipts tax).** Virginia has **no state business
  license**, but **most cities and counties levy a Business, Professional & Occupational License (BPOL) tax** on a
  business's **gross receipts**. Mechanics (VERIFIED):
  - **Each locality sets its own BPOL rate, and the rate varies by business classification** (contractor, retail,
    professional services, etc.). **Do NOT quote a specific BPOL rate** — frame qualitatively and link the locality.
  - A business operating in **multiple Virginia jurisdictions generally needs a separate BPOL** for each location, so
    **gross receipts have to be tracked by jurisdiction** in the books.
  - Localities also levy **Business Tangible Personal Property (BTPP)** and, for some, **Machinery & Tools (M&T)**
    taxes — additional local business taxes that depend on assets, not payroll.
  - **HONEST FRAMING:** TechBrot tracks gross receipts by locality and the asset detail in QuickBooks so the BPOL and
    BTPP filings are clean; the locality's filing is made by the business or its CPA. Source: Virginia Tax — Business
    resources; Virginia local commissioners of the revenue (BPOL is locally administered).
- **Reciprocity — VA has agreements with MD, PA, WV, KY, and DC (ties to the MD and PA anchors).** A resident of those
  jurisdictions who works in Virginia with **limited presence** (generally **183 days or fewer**, **no Virginia
  abode**, and **wage/salary income only**) is **taxed only by their home state** — and a Virginia resident gets the
  same treatment in those states. The employee claims the exemption with the employer (Form **VA-4** and the
  applicable certificate), and Virginia withholding stops. Source: Virginia Tax — Reciprocity
  (`tax.virginia.gov/reciprocity`).
- **Sales & use tax — VARIABLE by region (the QuickBooks sourcing complexity).** The general rate is **5.3%** (4.3%
  state + 1.0% local). Higher combined rates apply in three regions via an added regional tax: **6.0% in Northern
  Virginia, Hampton Roads, and Central Virginia (the Richmond region)**, and **7.0% in the Historic Triangle**
  (Williamsburg, James City County, and York County). A handful of localities add a small additional local rate. **Food
  for home consumption and essential personal hygiene products are taxed at a reduced 1%** (local) rate. Because the
  rate depends on where the sale is sourced, QuickBooks has to apply the correct regional rate by location. Source:
  Virginia Tax — Retail Sales and Use Tax; Sales Tax Rate & Locality Code Lookup.
- **Pass-Through Entity Tax (PTET) — advisory angle (confirm 2026 status).** Virginia enacted an **elective entity-level
  tax of 5.75%** on a qualifying pass-through entity's eligible income (a SALT-cap workaround; members get a credit),
  available for **tax years 2021–2025**. **The provision's availability for 2026 should be confirmed with Virginia Tax**
  (the state sunset and the federal SALT-cap landscape are in flux). Frame as an advisory/coordination item the CPA
  elects and files; TechBrot keeps the books PTET-ready. Source: Virginia Tax — Elective Pass-Through Entity Tax
  Guidelines.
- **Data Center Alley (Loudoun County) — industry note.** Northern Virginia hosts the **world's largest concentration
  of data centers**, and Virginia offers a **sales/use tax exemption for qualifying data-center equipment**. Relevant
  for IT, SaaS, and data-center clients — a genuine reason for careful sales/use-tax setup. Source: Virginia Tax —
  Retail Sales and Use Tax exemptions.

## GEOGRAPHY (metros NAMED in pillar copy + areaServed schema — NO separate city pages; this is a core state)
- **Virginia is organized into counties AND independent cities** (a structure unique to Virginia — 95 counties + ~38
  independent cities), which is exactly why **BPOL and local business taxes are jurisdiction-specific**.
- **Metros to name** (areaServed + copy): **Arlington / Alexandria / Fairfax / Loudoun (Northern Virginia)** — the
  federal-contracting and **Data Center Alley** hub; **Richmond** (state capital, finance, Central Virginia);
  **Virginia Beach / Norfolk / Chesapeake / Newport News (Hampton Roads)** — the Port of Virginia and the Navy;
  **Roanoke** (southwest); **Charlottesville** (UVA). Frame "across Virginia's counties and independent cities,
  remote-first."
- **NO HQ street address in Virginia.** All VA pages are remote/served-market: `Service` + `areaServed` only.

## INDUSTRY ANGLES (route to GLOBAL `/accounting/industries/<x>/` — NO per-state VA industry pages)
VA's economy: **federal contracting & professional services** (the largest in the country, concentrated in Northern
Virginia), **IT / SaaS / data centers** (Loudoun's Data Center Alley; directly relevant to sales/use-tax exemptions),
**healthcare**, **manufacturing**, **construction**, and **real estate**, plus **port logistics** in Hampton Roads. On
the pillar, route industry cards to the **global** pages that exist (`/accounting/industries/professional-services/`,
`/saas/`, `/healthcare/`, `/manufacturing/`, `/construction/`, `/real-estate/`, `/trucking/` — confirm which exist at
build time and link only those). The **professional-services** (gov contracting) and **SaaS / IT** cards are the
strongest VA hooks. No VA industry child pages are built (core state).

## PRICING (canonical — use these exact figures; same global lexicon as DE/IN/PA/NJ/MD/NY)
- Monthly bookkeeping: **from $400/mo** · Cleanup/Catch-up: **from $1,200** · QuickBooks Setup: **from $750** ·
  QuickBooks Cleanup: **from $1,200** · Sales Tax Help: **from $250/mo** · BPOL / local-business-tax + reciprocity
  setup: **from $300** · Fractional CFO (global): **from $1,500/mo**. All fixed-fee against a written scope after a free
  discovery call. VA's genuine complexity is the **local BPOL gross-receipts tax** (tracked by jurisdiction) plus
  **BTPP/M&T**, the **variable regional sales tax** (5.3% / 6.0% / 7.0%), the **MD/PA/WV/KY/DC reciprocity**, and the
  **PTET election** (confirm 2026). No dedicated VA pricing page — the pillar pricing table routes to the 5 VA service
  children + global `/pricing/`, `/quickbooks/payroll/`, `/accounting/advisory/fractional-cfo/`.

## AUTHORITY LINKS (use rel="noopener nofollow")
- Virginia Department of Taxation — https://www.tax.virginia.gov/
- Virginia Tax — Corporation Income Tax — https://www.tax.virginia.gov/corporation-income-tax
- Virginia Tax — Retail Sales and Use Tax — https://www.tax.virginia.gov/retail-sales-and-use-tax
- Virginia Tax — Sales Tax Rate & Locality Code Lookup — https://www.tax.virginia.gov/sales-tax-rate-and-locality-code-lookup
- Virginia Tax — Reciprocity — https://www.tax.virginia.gov/reciprocity
- Virginia Tax — Elective Pass-Through Entity Tax Guidelines — https://www.tax.virginia.gov/elective-pass-through-entity-tax-guidelines
- IRS Small Business — https://www.irs.gov/businesses/small-businesses-self-employed

## HONESTY CONTRACT (absolute — hard-stop if you can't comply)
- TechBrot is an **independent** Certified QuickBooks ProAdvisor + bookkeeping firm; **NOT affiliated with Intuit**.
- **Does NOT file** Virginia or federal returns, the corporate income tax, the state income tax, the payroll-withholding
  filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return as agent; **not a registered
  agent**; does not represent before any tax authority. Keeps the books + coordinates with the client's CPA/EA, the
  Virginia Department of Taxation, and the locality.
- **NO Virginia street address. NO LocalBusiness node on any VA page. Service + areaServed (Commonwealth of Virginia +
  named metros) only.** A fabricated VA local address would breach the honesty contract.
- Reviews = ONLY the 2 real Clutch reviews (Heidi Schubert; Barbara Best). **No** invented reviewers, **no**
  AggregateRating. Outcomes/scenarios = explicitly **representative/illustrative composites**, never real-client claims.
- **No founder/personal name** in visible content (no "Abid Khan"). **David Westgate** may appear ONLY as the named
  lead ProAdvisor/operator (the standing-rule exception) and as `reviewedBy` `#david-westgate` in schema.
- Specific locality BPOL rates and sales-tax regions: **frame qualitatively**, never quote a fixed locality figure not
  in this file; link the official source. The **7.75% over-$1M bracket is a 2026 PROPOSAL, not law** — do not state it
  as current. The PTET is available **through TY2025** — flag "confirm 2026 status."
- Use the SOFTENED ProAdvisor-directory framing: "Intuit's public ProAdvisor directory lists active ProAdvisors for verification."

## BUILD CONVENTIONS (match the proven PA/NJ/MD core-state exemplars exactly — same shape, VA facts)
- **Data-files-only on existing v2 layouts.** Each page = `<name>.njk` (JSON front-matter) + `<name>.11tydata.js`.
  Read the same-named **Maryland** or **New Jersey** child (the proven core-state exemplars —
  `src/find-an-accountant/maryland/<name>.*` and `src/find-an-accountant/new-jersey/<name>.*`) and the **MD/NJ pillar**,
  and replicate the structure with VA content. **Note the differentiation:** unlike MD/PA/NJ (payroll-LOCAL-tax heavy),
  Virginia has **NO local income tax** — its distinct hook is the **local BUSINESS taxes (BPOL/BTPP/M&T)** + the
  **variable regional sales tax** + **reciprocity**. Do NOT import a "county piggyback payroll tax" angle into VA.
- **CORE-STATE PILLAR PATTERN (identical to PA/NJ/MD):** every `t-state-pillar.njk` section is `{% if %}`-guarded.
  - KEEP: hero · trust strip · stats · in-brief · credentials · summarized · aiSummary · stateTerms (glossary) ·
    delivery · context · scenarios · outcomes · advisory · **industries (cards → GLOBAL `/accounting/industries/*`)**
    · **services (the 5 VA children only)** · pricing (rows → 5 children + global) · **cities (named metros, NO href)**
    + countyProse · intake (teamDavid/teamIntake + operators sec keys in the .njk) · operatorStandards · why ·
    pullQuote · reviews (2 real Clutch) · comparison · authority · faq (8–10) · reviewCreds · related · ctaBand.
  - **OMIT entirely: `ecosystem`**. `cities` entries = name + locality only, NO `href`. The .njk frontmatter MUST
    include the `sec.operators*` keys.
  - Schema (NO street address): `provider`:`#organization`; pillar areaServed =
    `{"@type":"State","name":"Virginia","sameAs":"https://en.wikipedia.org/wiki/Virginia"}` + named metros as
    `containsPlace` City nodes; NO PostalAddress/geo/LocalBusiness/hasMap. QAPage (aiSummary) + FAQPage (faq). Keep `stripTags()`.
- **Slugs / anchor-ids:** pillar slug `va`, intent `virginia`. Service children anchor slugs `va-svc-<x>`
  (qbaccountant, smb, qbcleanup, qbsetup, bkkg). speakable ids `#va-in-brief-text`, `#va-ai-summary-list`,
  `#va-svc-<x>-summary`, `#va-svc-<x>-ai-summary-list`. OG `va-...-og.png`.
- **The 6 essentials:** pillar `virginia.*` (permalink `/find-an-accountant/virginia/`); + quickbooks-accountant ·
  small-business-accountant · quickbooks-cleanup · quickbooks-setup · bookkeeping-services (t-money). Service pages
  carry `reviewedBy` `#david-westgate`.
- **The VA-distinct service hook (weave into every VA page):** the **local BPOL gross-receipts business tax** (tracked
  by jurisdiction) + **BTPP/M&T** local business taxes + the **variable regional sales tax** (5.3/6.0/7.0%) +
  **MD/PA/WV/KY/DC reciprocity** + **no local income tax** + **PTET** (advisory, confirm 2026).
- **Meta:** title keyword-LED ≤60 UNIQUE literal-Unicode; description value-led ≤160 with phone **(877) 751-5575**
  (≤157) on all 6; no HTML entities, no mojibake. ("Virginia" is short — titles fit easily.)
- **FAQ (Option C):** caps — money/service **5–7**, pillar **8–10**. Answer-first, generic, minimal "TechBrot". 1–2
  call-intent FAQs with the phone woven **into an answer**. Q&A always visible == FAQPage schema.
- **Routing (absolute):** link only to pages that exist. VA pages link only the 5 VA siblings + pillar, or GLOBAL:
  payroll `/quickbooks/payroll/`, migration `/quickbooks/migration/`, monthly `/accounting/bookkeeping/monthly-bookkeeping/`,
  catch-up `/accounting/bookkeeping/catch-up-bookkeeping/`, sales-tax `/accounting/sales-tax-compliance/`,
  fractional-CFO `/accounting/advisory/fractional-cfo/`, QuickBooks Online `/quickbooks/online/`, file-review
  `/quickbooks/file-review/`, pricing `/pricing/`, comparisons `/vs/*`, industries `/accounting/industries/<x>/`.
  Maryland (`/find-an-accountant/maryland/`), Pennsylvania (`/find-an-accountant/pennsylvania/`), and Delaware
  (`/find-an-accountant/delaware/`) exist — link from `related` (the MD/PA reciprocity tie; West Virginia / North
  Carolina / Tennessee / DC are "coming soon", no href → hub).
- **⚠ CRITICAL (the PA-cleanup bug):** in the `.njk` BODY (after the `---` front-matter), write `<a href="...">` with
  PLAIN double-quotes — NEVER escaped `\"`. Escaped quotes are correct ONLY inside JSON front-matter and JS strings in
  the `.11tydata.js`; in raw template body they emit literal backslashes and break the links check.
- **CTAs:** canonical lexicon only. Contact links: `/contact/?intent=virginia&state=virginia&source_type=...&funnel_stage=...`.
- Section background alternation white/sand per the exemplar. One H1. Logical heading order. `dump|safe` for JSON-LD.
- After build: add a VA block to `register_state.py` (intent `virginia`) → `python _build/scripts/register_state.py virginia`
  → full build → `powershell -File _build/scripts/battery-frozen.ps1` → content-equity to completion + read → commit +
  push. VA is additive. **VA finishes Wave A** (Mid-Atlantic); then Wave B = Ohio + Michigan.

/* /find-an-accountant/virginia/ — t-state-pillar PILLAR. Virginia is a CORE state built to the 6-essentials
 * depth (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. VA is an areaServed-ONLY state:
 * TechBrot serves Virginia remotely from the Delaware HQ, so this pillar carries NO street address, NO
 * PostalAddress, NO geo, NO LocalBusiness node, and NO hasMap (DE is the ONLY real-address state). Service +
 * areaServed (Commonwealth of Virginia + named metros) only; provider = #organization. Mirrors the PA/NJ/MD
 * core-state exemplars: OMITS `ecosystem`; `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE
 * cards = the VA children; `cities` name+locality with NO href; pricing rows -> 5 children + global.
 *
 * DIFFERENTIATION: unlike MD/PA/NJ (payroll-LOCAL-tax heavy), Virginia has NO local income tax. Its distinct
 * hook is the LOCAL BUSINESS taxes — the BPOL gross-receipts business-license tax (by jurisdiction) plus BTPP
 * and Machinery & Tools — the VARIABLE regional sales tax, and reciprocity. Do NOT import a county-piggyback
 * payroll angle into VA.
 *
 * VIRGINIA FACTS (verified 2026-06-26 against the Virginia Dept of Taxation — see _build/strategy/VA-FACTS.md):
 *  · State individual income tax — graduated 2% / 3% / 5% / 5.75% (top 5.75% starts at just $17,001, so most
 *    income is at 5.75%); NO county or city income tax. (A 2026 proposal for a 7.75% bracket over $1M is NOT law.)
 *  · Corporate income tax — 6% flat.
 *  · BPOL — most cities/counties levy a Business, Professional & Occupational License tax on GROSS RECEIPTS; rate
 *    varies by locality and business classification; a business in multiple jurisdictions needs a separate BPOL
 *    each, so gross receipts must be tracked by jurisdiction. Plus local BTPP and Machinery & Tools taxes.
 *    Rates framed QUALITATIVELY, never a specific locality %.
 *  · Reciprocity — MD/PA/WV/KY/DC residents with limited VA presence (<=183 days, no VA abode, wage income) are
 *    taxed only by their home state (and vice versa); Form VA-4 (ties to the MD + PA anchors).
 *  · Sales & use tax — VARIABLE: 5.3% general (4.3% state + 1.0% local); 6.0% in Northern Virginia, Hampton Roads,
 *    and Central Virginia (Richmond); 7.0% in the Historic Triangle (Williamsburg/James City/York); reduced 1% on
 *    groceries + essential personal hygiene. QuickBooks must apply the correct regional rate by location.
 *  · PTET — elective 5.75% entity-level tax (SALT-cap workaround), available through TY2025; CONFIRM 2026 status
 *    with Virginia Tax. Advisory hook, framed cautiously.
 *  · Geography — counties AND independent cities (unique to Virginia, which is why BPOL is jurisdiction-specific);
 *    Northern Virginia federal-contracting + Data Center Alley (Loudoun), Richmond, Hampton Roads (Port + Navy).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with
 * Intuit. It does NOT file VA or federal returns, the corporate income tax, the state income tax, the payroll
 * filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return as agent; it keeps
 * the books and coordinates with the client's CPA/EA, the Virginia Dept of Taxation, and the locality. Reviews
 * are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented reviewers, no AggregateRating.
 * Outcomes/scenarios are explicitly representative composites — never real-client claims. No founder/personal
 * name in visible content; David Westgate appears only as the named lead ProAdvisor/operator. Specific locality
 * BPOL rates and sales-tax regions are framed qualitatively; the 7.75%-over-$1M bracket is a 2026 PROPOSAL, not
 * law; the PTET is flagged "confirm 2026 status." */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in Virginia, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Virginia bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to Virginia businesses across the Commonwealth&rsquo;s <strong>counties and independent cities</strong> &mdash; from Northern Virginia and Data Center Alley to Richmond, Hampton Roads, Roanoke, and the Shenandoah Valley. Our Delaware headquarters anchors the Mid-Atlantic. Virginia&rsquo;s state income tax is <strong>graduated but effectively near-flat &mdash; a top 5.75% that starts at just $17,000</strong> &mdash; and, unlike Maryland or Pennsylvania, <strong>Virginia has no local income tax</strong>. The local burden falls on the <strong>business</strong> side instead: most cities and counties levy a <strong>BPOL gross-receipts business-license tax</strong>, with the rate set by locality and business classification, so a company in several jurisdictions needs a separate BPOL for each and must <strong>track gross receipts by location</strong> &mdash; plus local Business Tangible Personal Property and Machinery &amp; Tools taxes. Sales tax is <strong>variable by region</strong> &mdash; 5.3% in most of the state, 6.0% in Northern Virginia, Hampton Roads, and Richmond, and 7.0% in the Historic Triangle &mdash; and Virginia has <strong>reciprocity with Maryland, Pennsylvania, West Virginia, Kentucky, and DC</strong>. The <strong>corporate rate is 6%</strong>, and growing pass-throughs weigh the <strong>PTET election</strong>. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Virginia returns, the BPOL or local business taxes, or the sales-tax return &mdash; we keep the books and coordinate with your CPA and your locality.",

  // PROADVISOR CREDENTIAL STRIP. (H2: Certified QuickBooks ProAdvisor credentials)
  credLede: "Every TechBrot operator holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
  credBadges: [
    { label: "Online (L2)", name: "QuickBooks Online ProAdvisor (Level 2)" },
    { label: "Desktop", name: "QuickBooks Desktop ProAdvisor" },
    { label: "Enterprise", name: "QuickBooks Enterprise ProAdvisor" },
    { label: "Payroll", name: "QuickBooks Payroll ProAdvisor" },
  ],
  // TRUST ROW — Clutch 5.0/2 is REAL; the rest are factual, not metrics.
  trustRow: [
    { value: "5.0", label: "on Clutch &middot; 2 verified reviews" },
    { value: "4&times;", label: "QuickBooks ProAdvisor certifications &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { value: "133", label: "Virginia localities served &mdash; 95 counties + ~38 independent cities, each with its own BPOL" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "5.75%", label: "Top Virginia state income-tax rate &mdash; and it starts at just $17,000, so most business income is taxed at 5.75%, with NO local income tax" },
    { figure: "BPOL", label: "Local Business, Professional &amp; Occupational License tax on gross receipts &mdash; set by each county and independent city, a separate license per jurisdiction" },
    { figure: "5.3&ndash;7.0%", label: "Variable regional sales tax &mdash; 5.3% in most of Virginia, 6.0% in Northern Virginia, Hampton Roads, and Richmond, and 7.0% in the Historic Triangle" },
    { figure: "6%", label: "Flat Virginia corporate income tax &mdash; multi-state corporations allocate and apportion to Virginia" },
    { figure: "MD/PA/WV/KY/DC", label: "Reciprocity &mdash; residents of these jurisdictions with limited Virginia presence are taxed only by their home state" },
    { figure: "5.75%", label: "Elective pass-through entity tax (PTET) &mdash; a SALT-cap workaround at the entity level; confirm its 2026 availability with Virginia Tax" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Virginia, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Virginia businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to Virginia businesses across the Commonwealth&rsquo;s counties and independent cities.</strong> Coverage spans Northern Virginia &mdash; Arlington, Alexandria, Fairfax, and Loudoun&rsquo;s Data Center Alley &mdash; plus Richmond, the Hampton Roads region (Virginia Beach, Norfolk, Chesapeake, Newport News), Roanoke, and Charlottesville. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is the Virginia BPOL tax, and how does it affect my books?", a: "Virginia has no state business license, but <strong>most cities and counties levy a Business, Professional &amp; Occupational License (BPOL) tax on a business&rsquo;s gross receipts.</strong> The rate is set by each locality and varies by business classification, and a company operating in <strong>multiple jurisdictions generally needs a separate BPOL for each</strong> &mdash; so gross receipts have to be tracked by location in QuickBooks. Localities also levy Business Tangible Personal Property and Machinery &amp; Tools taxes. We set the books up to track gross receipts by jurisdiction and keep the asset detail ready; your locality&rsquo;s filing is made by you or your CPA." },
    { q: "Does Virginia have a local income tax?", a: "<strong>No.</strong> Virginia&rsquo;s income tax is state-only &mdash; graduated at 2%, 3%, 5%, and a top 5.75% that begins at just $17,000, so most business owners&rsquo; income lands at 5.75% &mdash; with <strong>no county or city income tax</strong>. That makes Virginia payroll income-tax withholding simpler than Maryland&rsquo;s county &ldquo;piggyback&rdquo; tax or Pennsylvania&rsquo;s Act 32. The local complexity in Virginia is on the business side (BPOL and local business taxes), not the payroll side." },
    { q: "How does Virginia&rsquo;s sales tax work across regions?", a: "Virginia&rsquo;s sales and use tax is <strong>variable by region</strong>: <strong>5.3%</strong> in most of the state (4.3% state + 1.0% local), <strong>6.0%</strong> in Northern Virginia, Hampton Roads, and Central Virginia (the Richmond region), and <strong>7.0%</strong> in the Historic Triangle (Williamsburg, James City County, and York County). Food for home consumption and essential personal hygiene products are taxed at a reduced 1%. Because the rate depends on where the sale is sourced, QuickBooks has to apply the correct regional rate by location &mdash; and we scope multi-state nexus for sellers crossing the MD, NC, or TN lines." },
    { q: "Does TechBrot file Virginia taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Virginia or federal returns, the corporate income tax, the state income tax, the payroll-withholding filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return, and we do not represent clients before the Virginia Department of Taxation</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, track gross receipts by locality for BPOL, set up the regional sales tax and reciprocity, and coordinate with your existing Virginia CPA or EA, who files." },
  ],

  // STATE GLOSSARY — the VA terms that matter. (H2: The Virginia terms that matter…)
  stateTerms: [
    { term: "BPOL Tax", def: "<p>The <strong>Business, Professional &amp; Occupational License tax</strong> &mdash; a <strong>local tax on gross receipts</strong> levied by most Virginia cities and counties. There is no state business license; each locality sets its own BPOL rate by business classification, and a business in <strong>several jurisdictions needs a separate BPOL each</strong>. Gross receipts must be tracked by location in QuickBooks. <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">Virginia QuickBooks setup &rarr;</a></p>" },
    { term: "No Local Income Tax", def: "<p>Unlike Maryland (county &ldquo;piggyback&rdquo; tax) or Pennsylvania (Act 32 EIT), <strong>Virginia has no county or city income tax</strong>. The state income tax is graduated to a top of <strong>5.75%</strong> (which starts at just $17,000), and that is the whole income-tax withholding picture. The local burden in Virginia is on the <strong>business</strong> side &mdash; BPOL and local business taxes.</p>" },
    { term: "Variable Regional Sales Tax", def: "<p>Virginia&rsquo;s sales tax is <strong>not a single rate</strong>: <strong>5.3%</strong> in most of the state, <strong>6.0%</strong> in Northern Virginia, Hampton Roads, and the Richmond region, and <strong>7.0%</strong> in the Historic Triangle. Groceries and essential personal hygiene are taxed at a reduced 1%. The QuickBooks sales-tax setup has to apply the right regional rate by location. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance help &rarr;</a></p>" },
    { term: "BTPP &amp; Machinery &amp; Tools", def: "<p>Beyond BPOL, Virginia localities levy a <strong>Business Tangible Personal Property (BTPP)</strong> tax on business assets, and some levy a <strong>Machinery &amp; Tools</strong> tax on manufacturing equipment. Both are local, asset-based, and filed with the locality. We keep the fixed-asset detail in QuickBooks clean and locality-ready.</p>" },
    { term: "Reciprocity (MD / PA / WV / KY / DC)", def: "<p>Virginia has <strong>reciprocal income-tax agreements</strong> with <strong>Maryland, Pennsylvania, West Virginia, Kentucky, and DC</strong>. A resident of those jurisdictions who works in Virginia with limited presence (generally <strong>183 days or fewer, no Virginia home, wage income only</strong>) is <strong>taxed only by their home state</strong>, and Virginia residents get the same treatment there. The employee files <strong>Form VA-4</strong>. <a href=\"https://www.tax.virginia.gov/reciprocity\" rel=\"noopener nofollow\">Virginia reciprocity &rarr;</a></p>" },
    { term: "Corporate Income Tax (6%)", def: "<p>Virginia&rsquo;s corporate income tax is a <strong>flat 6%</strong> on Virginia taxable income; multi-state corporations <strong>allocate and apportion</strong> their income to Virginia. It is separate from the BPOL gross-receipts tax (a local tax on revenue, not net income). We keep the books apportionment-ready so your CPA can file accurately.</p>" },
    { term: "Pass-Through Entity Tax (PTET)", def: "<p>Virginia enacted an <strong>elective entity-level tax of 5.75%</strong> on a qualifying pass-through entity&rsquo;s eligible income &mdash; a SALT-cap workaround, with members receiving a credit. It has been available for tax years 2021&ndash;2025; <strong>confirm its 2026 availability with Virginia Tax</strong>. We keep the books PTET-ready; your CPA makes the election and files.</p>" },
    { term: "Data Center Alley", def: "<p>Northern Virginia (especially <strong>Loudoun County</strong>) hosts the <strong>world&rsquo;s largest concentration of data centers</strong>, and Virginia offers a <strong>sales/use-tax exemption for qualifying data-center equipment</strong>. For IT, SaaS, and data-center clients, careful sales/use-tax setup &mdash; including the exemption &mdash; is part of the engagement.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in Virginia. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from neighboring Delaware.", lede: "Most Virginia engagements &mdash; bookkeeping, QuickBooks work, payroll, BPOL gross-receipts tracking, and regional sales-tax setup &mdash; are delivered directly by TechBrot&rsquo;s lead practice, headquartered in the Mid-Atlantic. <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Gross receipts tracked by locality for BPOL", "Variable regional sales tax (5.3% / 6.0% / 7.0%) configured by location", "MD/PA/WV/KY/DC reciprocity set per employee", "Remote delivery, secure, encrypted access"], cta: "Browse Virginia services &rarr;", href: "#va-services" },
    { eyebrow: "02 &middot; Curated Virginia partners", heading: "Trusted local Virginia partners.", lede: "When in-person presence in Northern Virginia, Richmond, or Hampton Roads matters, or local CPA hand-off, engagements can route to a vetted Virginia accounting practice running under TechBrot&rsquo;s standards.", list: ["Virginia-based independent practice", "BPOL gross-receipts and BTPP/M&amp;T fluency", "Regional sales-tax and reciprocity coordination", "Local CPA and EA hand-off", "Virginia Dept of Taxation and IRS audit-support coordination", "Federal-contracting, IT, and data-center industry depth", "Same platform standards as direct delivery"], cta: "See Virginia partner status &rarr;", href: "#va-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Virginia or federal returns, the corporate income tax, the state income tax, the payroll-withholding filings, the sales-tax return, or the BPOL and local business-tax returns. For Virginia Department of Taxation filings, locality BPOL filings, audit representation, and tax strategy, we coordinate with your existing Virginia CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Virginia accounting different. + 4 H3s)
  context: [
    { category: "The BPOL Gross-Receipts Tax", heading: "Virginia&rsquo;s local tax falls on the business, not payroll.", body: ["Virginia has no local income tax, so the payroll income-tax side is simple. The local complexity is on the <strong>business</strong> side: most cities and counties levy a <strong>BPOL tax on gross receipts</strong>, at a rate set by locality and business classification.", "A business operating in several Virginia jurisdictions generally needs a <strong>separate BPOL for each</strong>, so gross receipts have to be tracked by location. We build that tracking into QuickBooks and keep the BTPP and Machinery &amp; Tools asset detail locality-ready. <a href=\"/find-an-accountant/virginia/quickbooks-setup/\">Virginia QuickBooks setup &rarr;</a>"] },
    { category: "Variable Regional Sales Tax", heading: "5.3%, 6.0%, or 7.0% &mdash; it depends where.", body: ["Virginia&rsquo;s sales tax is <strong>not one rate</strong>: 5.3% in most of the state, <strong>6.0% in Northern Virginia, Hampton Roads, and the Richmond region</strong>, and <strong>7.0% in the Historic Triangle</strong>, with a reduced 1% on groceries.", "Which rate applies depends on where the sale is sourced, so QuickBooks has to be set up to charge the right regional rate &mdash; a common error for businesses selling across the state. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "Cross-Border Reciprocity", heading: "Five reciprocal jurisdictions across the DC region.", body: ["Virginia has <strong>reciprocal agreements with Maryland, Pennsylvania, West Virginia, Kentucky, and DC</strong>. A resident of those jurisdictions working in Virginia with limited presence is <strong>taxed only by their home state</strong>, and Virginia residents get the same treatment.", "For the DC-region cross-border workforce, getting Form VA-4 on file and QuickBooks Payroll set per employee is essential &mdash; a common cleanup is staff over-withheld for Virginia who should have been exempt."] },
    { category: "A Contracting &amp; Data-Center Economy", heading: "Federal contracting, IT, and Data Center Alley.", body: ["Virginia has the country&rsquo;s largest <strong>federal-contracting</strong> base, concentrated in Northern Virginia, plus <strong>Loudoun County&rsquo;s Data Center Alley</strong> &mdash; the world&rsquo;s largest concentration of data centers &mdash; and the Port of Virginia in Hampton Roads.", "That mix means government-contract job costing, indirect-rate tracking, data-center sales/use-tax exemptions, and &mdash; for growing pass-throughs &mdash; the <strong>PTET election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "Virginia operational context informs every TechBrot engagement in the Commonwealth. The diagnostic call identifies which factors apply &mdash; which localities you owe BPOL in, which sales-tax region you sell into, and whether reciprocity applies to your staff.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a Virginia engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Northern Virginia contractor", heading: "A federal contractor owing BPOL in three jurisdictions with no per-locality receipts.", body: ["<strong>Situation.</strong> A Northern Virginia government-contracting firm did work in Fairfax, Arlington, and Loudoun, owed BPOL in each, but ran all revenue through one account with no way to allocate gross receipts by jurisdiction.", "<strong>What we did.</strong> Rebuilt the QuickBooks file to <a href=\"/find-an-accountant/virginia/quickbooks-accountant/\">track gross receipts by locality</a>, separated contract revenue for indirect-rate work, and kept the BTPP asset detail locality-ready so each BPOL filing was clean.", "<strong>Outcome.</strong> Gross receipts allocated correctly per jurisdiction; three BPOL filings supported; a clean basis for the CPA."] },
    { tag: "Composite &middot; Statewide retailer", heading: "A retailer charging one sales-tax rate across three regions.", body: ["<strong>Situation.</strong> A Virginia retailer with locations in Richmond and the Historic Triangle, plus online sales statewide, charged a single 5.3% rate everywhere &mdash; under-collecting in the 6.0% and 7.0% regions.", "<strong>What we did.</strong> Reconfigured the <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">QuickBooks sales-tax items</a> for the correct regional rates by location, set up the reduced 1% grocery rate where it applied, and reconciled the prior periods for the CPA.", "<strong>Outcome.</strong> The right regional rate charged by location; the under-collection exposure quantified; sales-tax items clean."] },
    { tag: "Composite &middot; Hampton Roads services firm", heading: "A Norfolk firm with cross-border staff and an open PTET question.", body: ["<strong>Situation.</strong> A Hampton Roads professional-services pass-through employed staff who lived in Maryland and North Carolina, withheld Virginia tax for everyone, and had no clean books to evaluate the PTET election.", "<strong>What we did.</strong> Collected <a href=\"/find-an-accountant/virginia/small-business-accountant/\">Form VA-4</a> for the reciprocal-state staff, corrected the withholding, rebuilt the books, and prepared the distributive-share detail so the CPA could evaluate the PTET.", "<strong>Outcome.</strong> Cross-border staff withheld for the right state; books clean; a documented basis for the CPA&rsquo;s PTET decision."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Virginia engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; the BPOL gross-receipts tax, the variable regional sales tax, MD/PA/WV/KY/DC reciprocity &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Virginia outcomes.)
  outcomes: [
    { figure: "3 jurisdictions", detail: "of BPOL gross receipts allocated correctly by locality for separate license filings", meta: "Representative &middot; NoVA contractor cleanup" },
    { figure: "5.3/6.0/7.0%", detail: "regional sales-tax rates configured by location, fixing a single-rate setup", meta: "Representative &middot; statewide retailer" },
    { figure: "VA-4", detail: "reciprocity forms collected so cross-border staff were withheld for their home state", meta: "Representative &middot; MD/NC reciprocity" },
    { figure: "PTET", detail: "distributive-share detail prepared so the CPA could evaluate the election", meta: "Representative &middot; advisory coordination" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Virginia &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that expanding into a second county just added a BPOL filing, whether your data-center equipment qualifies for the sales/use-tax exemption, or whether your pass-through should make the PTET election. For Virginia businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Virginia-specific tax-position work (including BPOL footprint and PTET coordination) with your CPA. By application. Best fit: Virginia contractors, IT and data-center firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no VA industry pages).
  // (H2: Industry-specific accounting for Virginia's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Federal Contracting &amp; Pro Services", href: "/accounting/industries/professional-services/", body: "The country&rsquo;s largest federal-contracting base, concentrated in Northern Virginia. <strong>Contract and indirect-rate job costing</strong>, gross-receipts tracking by locality for BPOL, multi-state payroll with reciprocity, and CPA-ready financials." },
    { num: "02", name: "IT, SaaS &amp; Data Centers", href: "/accounting/industries/saas/", body: "Loudoun&rsquo;s Data Center Alley and Virginia&rsquo;s broad IT sector. <strong>Revenue recognition</strong>, the data-center sales/use-tax exemption, the variable regional sales tax, and multi-state nexus for software sold across state lines." },
    { num: "03", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Physician, dental, and specialty practices across the metros. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, multi-provider payroll, and BPOL gross-receipts tracking by locality." },
    { num: "04", name: "Manufacturing", href: "/accounting/industries/manufacturing/", body: "Advanced manufacturing and the Port of Virginia supply chain. <strong>Job costing</strong>, inventory and WIP, the local Machinery &amp; Tools tax, and multi-state nexus for shippers." },
    { num: "05", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the Northern Virginia, Richmond, and Hampton Roads growth markets. <strong>Job costing, WIP, and retainage</strong>, contractor BPOL classification, certified payroll, and CPA-ready job profitability." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the Commonwealth. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and short-term rental tracking with the local taxes that apply." },
  ],
  industriesNote: "Virginia industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Virginia&rsquo;s BPOL and regional-sales-tax stack. Don&rsquo;t see your sector &mdash; logistics, e-commerce, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core VA money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Virginia QuickBooks Accountant", href: "/find-an-accountant/virginia/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Virginia businesses. Covers QBO, Desktop, Enterprise, and Payroll, with BPOL gross-receipts tracking and MD/PA/WV/KY/DC reciprocity fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Virginia ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Virginia Small Business Accountant", href: "/find-an-accountant/virginia/small-business-accountant/", body: "Operational accounting for Virginia small businesses &mdash; clean books, BPOL and regional sales-tax compliance, and CPA-ready statements, with the reciprocity details handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Virginia Bookkeeping Services", href: "/find-an-accountant/virginia/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Virginia businesses. Bank reconciliation, gross-receipts tracking by locality for BPOL, regional sales-tax sub-reconciliation, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Virginia bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Virginia QuickBooks Cleanup", href: "/find-an-accountant/virginia/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; gross receipts not tracked by locality for BPOL, one sales-tax rate across regions, missing reciprocity setup, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Virginia cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Virginia QuickBooks Setup", href: "/find-an-accountant/virginia/quickbooks-setup/", body: "Professional QuickBooks implementation for Virginia businesses &mdash; chart of accounts for your industry, gross-receipts tracking by locality for BPOL, the variable regional sales tax, and reciprocity. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Virginia setup &rarr;" },
  ],
  servicesNote: "Other Virginia engagements route to our national service pages, configured for Virginia: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (reciprocity)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance (regional)</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (PTET)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to VA children + global pages (no VA pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Virginia engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/virginia/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, gross-receipts-by-locality for BPOL, regional sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and BPOL/locality complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/virginia/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, gross-receipts-by-locality, regional sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/virginia/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Untracked BPOL receipts and single-rate sales tax are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "5.3% / 6.0% / 7.0% regional rates &middot; data-center exemption &middot; multi-state nexus" },
    { svc: "BPOL + reciprocity setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "Gross receipts by locality for BPOL &middot; MD/PA/WV/KY/DC reciprocity (VA-4)" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "State withholding (no local income tax); reciprocity for cross-border staff" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Virginia-aware strategic finance; BPOL footprint, PTET, and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of localities you owe BPOL in, your sales-tax footprint across regions, industry specifics, and multi-state activity. TechBrot does not file Virginia returns, the BPOL or local business taxes, or the sales-tax return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Virginia businesses statewide. + 2 H3s)
  cities: [
    { name: "Arlington", county: "Arlington County" },
    { name: "Alexandria", county: "Independent City" },
    { name: "Fairfax", county: "Fairfax County" },
    { name: "Richmond", county: "Independent City" },
    { name: "Virginia Beach", county: "Independent City" },
    { name: "Norfolk", county: "Independent City" },
    { name: "Chesapeake", county: "Independent City" },
    { name: "Roanoke", county: "Independent City" },
  ],
  countyProse: "TechBrot serves Virginia businesses across the Commonwealth&rsquo;s counties and independent cities &mdash; <strong>Fairfax</strong>, <strong>Arlington</strong>, <strong>Loudoun</strong> (Data Center Alley), and the cities of <strong>Alexandria</strong> and Falls Church in Northern Virginia; <strong>Richmond</strong>, <strong>Henrico</strong>, and <strong>Chesterfield</strong> in the Central region; the Hampton Roads cities of <strong>Virginia Beach</strong>, <strong>Norfolk</strong>, <strong>Chesapeake</strong>, and <strong>Newport News</strong>; <strong>Roanoke</strong> in the southwest; and <strong>Charlottesville</strong> and the Shenandoah Valley &mdash; plus every locality in between. Remote, fixed-fee service reaches the whole Commonwealth; each locality sets its own BPOL rate, which we track gross receipts against.",
  citiesNote: "Don&rsquo;t see your locality? Virginia&rsquo;s counties and independent cities are all served via remote engagement delivery. <a href=\"/contact/?intent=virginia&state=virginia&source_type=location&funnel_stage=MOFU\">Start a Virginia conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every Virginia engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (VA-localized). (H2: Trusted Virginia partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Virginia tax fluency", detail: "BPOL gross-receipts tracking by locality, BTPP and Machinery &amp; Tools, the variable regional sales tax, MD/PA/WV/KY/DC reciprocity, and PTET coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Federal-contract and indirect-rate job costing, data-center sales/use-tax exemptions, and multi-state nexus for the DC region." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (VA-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Virginia operational depth", body: "The local BPOL gross-receipts tax tracked by jurisdiction, the variable regional sales tax, MD/PA/WV/KY/DC reciprocity, and the PTET election. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-locality, multi-region Virginia engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Virginia business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Virginia businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Virginia CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Virginia / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "BPOL gross-receipts tracking", us: "<strong>By locality, separate license each</strong>", cpa: "Usually; varies by firm", remote: "Rarely tracked by jurisdiction", winner: "us" },
    { dim: "Variable regional sales tax", us: "<strong>5.3/6.0/7.0% by location</strong>", cpa: "Varies; not their primary focus", remote: "Often one rate &mdash; wrong", winner: "us" },
    { dim: "MD/PA/WV/KY/DC reciprocity", us: "<strong>Per employee, withheld correctly</strong>", cpa: "Usually; varies by firm", remote: "Often missed for cross-border staff", winner: "us" },
    { dim: "BTPP / Machinery &amp; Tools detail", us: "<strong>Asset detail kept locality-ready</strong>", cpa: "Files the local return; not daily", remote: "Rarely tracked", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "VA Tax / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Virginia Department of Taxation filings, the income-tax and PTET returns, locality BPOL filings, and representation, use a licensed Virginia CPA or EA. For QuickBooks operations, bookkeeping, BPOL gross-receipts tracking, regional sales-tax setup, and reciprocity &mdash; TechBrot is built for that. Most Virginia clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Virginia official sources (from VA-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Virginia Department of Taxation", href: "https://www.tax.virginia.gov/", detail: "Authoritative source for the state income tax, the corporate income tax, sales and use tax, and employer withholding." },
    { name: "Virginia Tax &mdash; Corporation Income Tax", href: "https://www.tax.virginia.gov/corporation-income-tax", detail: "The flat 6% Virginia corporate income tax and the allocation and apportionment rules for multi-state corporations." },
    { name: "Virginia Tax &mdash; Retail Sales and Use Tax", href: "https://www.tax.virginia.gov/retail-sales-and-use-tax", detail: "The variable sales-tax rates by region (5.3% general, 6.0% in several regions, 7.0% in the Historic Triangle) and the reduced grocery rate." },
    { name: "Virginia Tax &mdash; Sales Tax Rate &amp; Locality Lookup", href: "https://www.tax.virginia.gov/sales-tax-rate-and-locality-code-lookup", detail: "The official rate lookup by locality &mdash; the authority for which regional sales-tax rate applies where." },
    { name: "Virginia Tax &mdash; Reciprocity", href: "https://www.tax.virginia.gov/reciprocity", detail: "The reciprocal income-tax agreements with MD, PA, WV, KY, and DC, and Form VA-4 &mdash; the authority for cross-border withholding." },
    { name: "Virginia Tax &mdash; Elective Pass-Through Entity Tax", href: "https://www.tax.virginia.gov/elective-pass-through-entity-tax-guidelines", detail: "The elective pass-through entity tax (PTET) guidelines &mdash; confirm the 2026 availability here." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Virginia-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Virginia QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Virginia businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to Virginia businesses across the Commonwealth&rsquo;s counties and independent cities &mdash; remote-first from our Delaware headquarters. Coverage spans Northern Virginia and Data Center Alley, Richmond, Hampton Roads, Roanoke, and Charlottesville. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What is the Virginia BPOL tax, and how does it affect my books?", a: "Virginia has no state business license, but most cities and counties levy a Business, Professional &amp; Occupational License (BPOL) tax on a business&rsquo;s gross receipts. The rate is set by each locality and varies by business classification, and a company operating in multiple jurisdictions generally needs a separate BPOL for each &mdash; so gross receipts have to be tracked by location. We build that tracking into QuickBooks and keep the BTPP and Machinery &amp; Tools asset detail locality-ready; you or your CPA make the locality filing." },
    { q: "Does Virginia have a local income tax?", a: "No. Virginia&rsquo;s income tax is state-only &mdash; graduated at 2%, 3%, 5%, and a top 5.75% that begins at just $17,000, so most business owners&rsquo; income lands at 5.75% &mdash; with no county or city income tax. That makes Virginia payroll income-tax withholding simpler than Maryland&rsquo;s county piggyback tax or Pennsylvania&rsquo;s Act 32. The local complexity in Virginia is on the business side (BPOL and local business taxes), not payroll." },
    { q: "How does Virginia&rsquo;s sales tax work across regions?", a: "Virginia&rsquo;s sales and use tax is variable: 5.3% in most of the state, 6.0% in Northern Virginia, Hampton Roads, and the Richmond region, and 7.0% in the Historic Triangle (Williamsburg, James City County, York County). Groceries and essential personal hygiene products are taxed at a reduced 1%. Because the rate depends on where the sale is sourced, QuickBooks has to apply the right regional rate by location &mdash; a common cleanup is a business charging one rate everywhere. We also scope multi-state nexus for sellers crossing the MD, NC, or TN lines." },
    { q: "Does Virginia have tax reciprocity with neighboring states?", a: "Yes &mdash; Virginia has reciprocal agreements with Maryland, Pennsylvania, West Virginia, Kentucky, and DC. A resident of those jurisdictions who works in Virginia with limited presence (generally 183 days or fewer, no Virginia home, wage income only) is taxed only by their home state, and Virginia residents get the same treatment. The employee files Form VA-4; we configure QuickBooks Payroll per employee so cross-border staff are withheld for the right state." },
    { q: "What is the Virginia PTET, and should my business elect it?", a: "Virginia enacted an elective pass-through entity tax (PTET) &mdash; a 5.75% entity-level tax that lets a qualifying partnership, S corp, or multi-member LLC work around the federal SALT cap, with members receiving a credit. It has been available for tax years 2021 through 2025, so confirm its 2026 availability with Virginia Tax. Whether to elect it is a CPA decision that needs clean books to evaluate; we keep the books PTET-ready and prepare the distributive-share detail, and your CPA makes the election and files." },
    { q: "Does TechBrot file Virginia state or local tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Virginia or federal returns, the corporate income tax, the state income tax, the payroll-withholding filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return, and we do not represent clients before the Virginia Department of Taxation. We deliver clean, CPA-ready bookkeeping, track gross receipts by locality for BPOL, set up the regional sales tax and reciprocity, and coordinate with your Virginia CPA or EA, who files." },
    { q: "How does a Virginia engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Virginia operational context &mdash; which localities you owe BPOL in, which sales-tax region you sell into, whether reciprocity applies to your staff, whether the PTET is in play &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Virginia bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; BPOL and reciprocity setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the number of localities you owe BPOL in, your sales-tax footprint, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Virginia practice", detail: "Counties + independent cities served remotely &middot; Northern Virginia, Richmond, Hampton Roads, Roanoke, Charlottesville &middot; Industries handled on the national pages, configured for VA" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Virginia statutory references reviewed against Virginia Department of Taxation primary sources &middot; Specific locality BPOL rates and sales-tax regions framed qualitatively and never quoted as fixed figures &middot; The 7.75%-over-$1M bracket is treated as a proposal, not law; the PTET is flagged to confirm 2026 status &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — Maryland + Pennsylvania + Delaware exist (link); WV/KY/DC/Carolinas coming soon (no href -> hub). (H2: Multi-state Virginia businesses. + H3s)
  related: [
    { name: "Maryland", href: "/find-an-accountant/maryland/", body: "Virginia businesses with cross-border staff under the VA&ndash;MD reciprocal agreement, or operations across the Potomac into the DC suburbs &mdash; Maryland&rsquo;s county piggyback tax, the new 3% IT-services tax, and reciprocity scoped with your Virginia books.", cta: "ProAdvisors in Maryland &rarr;" },
    { name: "Pennsylvania", href: "/find-an-accountant/pennsylvania/", body: "Virginia businesses with Pennsylvania-resident staff under the VA&ndash;PA reciprocal agreement, or operations north &mdash; Act 32 local EIT, Philadelphia city taxes, and reciprocity scoped with your Virginia books.", cta: "ProAdvisors in Pennsylvania &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "Virginia businesses with a Delaware entity or Mid-Atlantic operations &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your Virginia books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "West Virginia, Kentucky, DC &amp; the Carolinas", body: "Virginia businesses with staff or operations in its other reciprocal jurisdictions (WV, KY, DC) or expanding south into North Carolina and Tennessee &mdash; cross-border payroll and nexus handled under the agreements.", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/virginia/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Virginia QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for Virginia businesses across the Commonwealth's counties and independent cities — from Northern Virginia and Data Center Alley to Richmond and Hampton Roads. Built around the local BPOL gross-receipts business tax, the variable regional sales tax (5.3% / 6.0% / 7.0%), MD/PA/WV/KY/DC reciprocity, and a state income tax with no local add-on.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/virginia-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#va-in-brief-text","#va-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Virginia"}]},
        {"@type":"Service","@id":url+"#service","name":"Virginia QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, local business tax, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with MD/PA/WV/KY/DC reciprocity, BPOL gross-receipts tracking by locality, and the variable regional sales tax (5.3% / 6.0% / 7.0%) for Virginia businesses across the Commonwealth's counties and independent cities. Delivered remotely by TechBrot from its Delaware headquarters. Independent Certified QuickBooks ProAdvisor firm; does not file Virginia or federal returns, the corporate income tax, the state income tax, the payroll filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Virginia","sameAs":"https://en.wikipedia.org/wiki/Virginia","containsPlace":[
          {"@type":"City","name":"Arlington"},{"@type":"City","name":"Alexandria"},{"@type":"City","name":"Fairfax"},{"@type":"City","name":"Richmond"},{"@type":"City","name":"Virginia Beach"},{"@type":"City","name":"Norfolk"},{"@type":"City","name":"Chesapeake"},{"@type":"City","name":"Roanoke"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Virginia small and mid-sized businesses, federal contractors and professional-services firms, IT and data-center companies, healthcare practices, manufacturers, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Virginia accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Virginia QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Virginia Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Virginia Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Virginia QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Virginia QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Virginia — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

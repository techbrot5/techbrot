/* /find-an-accountant/ohio/ — t-state-pillar PILLAR. Ohio is a CORE state built to the 6-essentials depth
 * (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. OH is an areaServed-ONLY state:
 * TechBrot serves Ohio remotely from the Delaware HQ, so this pillar carries NO street address, NO PostalAddress,
 * NO geo, NO LocalBusiness node, and NO hasMap (all states are areaServed-only (no street address)). Service + areaServed (State of
 * Ohio + named metros) only; provider = #organization. Mirrors the PA/NJ/MD/VA core-state exemplars: OMITS
 * `ecosystem`; `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the OH children; `cities`
 * name+county with NO href; pricing rows -> 5 children + global. Ohio starts WAVE B (Midwest).
 *
 * OHIO FACTS (verified 2026-06-26 against the Ohio Dept of Taxation + ORC + HB96 2025 — see _build/strategy/OH-FACTS.md):
 *  · State individual income tax — first $26,050 exempt; a low rate (under 3%) on a legislated glide path to ZERO by
 *    2030 (HB96 2025); per-year rate framed QUALITATIVELY (mid-phase-out), never a single fixed 2026 figure.
 *  · NO corporate income tax — replaced by the Commercial Activity Tax (CAT), a gross-receipts tax. 2026 exclusion
 *    $6,000,000 (under $6M = no CAT; most small businesses exempt); 0.26% on taxable gross receipts above it.
 *  · Municipal income tax — THE OH-distinct hook: 649 municipalities + 199 school districts impose income taxes;
 *    work-location withholding (~1%-3%, major cities ~2.5% — kept qualitative); the 20-day occasional-entrant rule;
 *    administered by RITA / CCA / self; RITA and CCA interpret the 20-day rule differently. School district income tax
 *    is residence-based, a separate layer.
 *  · Reciprocity — IN/PA/MI/KY/WV residents working in OH are exempt from OH STATE withholding (Form IT 4NR); the
 *    Ohio MUNICIPAL income tax STILL applies, and reciprocity does NOT shield a 20%+ owner under the IT 4738 PTE.
 *  · PTET — IT 4738 elective entity-level tax (SALT-cap workaround); advisory hook.
 *  · Sales & use tax — 5.75% state + county/transit permissive; combined may not exceed 8.75%; late-2025 combined
 *    county rates ranged 6.50%-8.0% (8.0% in Cuyahoga/Cleveland + Franklin/Columbus). Variable by county.
 *  · Geography — 88 counties; the 3-C corridor (Columbus/Cleveland/Cincinnati) + Toledo/Akron/Dayton/Canton/Youngstown;
 *    manufacturing, logistics, healthcare (Cleveland Clinic), finance/insurance (Columbus), consumer goods (Cincinnati).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with Intuit.
 * It does NOT file OH or federal returns, the CAT, the state income tax, the municipal/school-district income-tax
 * filings, the sales-tax return, or the PTE (IT 4738) return as agent; it keeps the books and coordinates with the
 * client's CPA/EA, the Ohio Dept of Taxation, RITA/CCA, and the municipality. Reviews are ONLY the 2 real Clutch
 * reviews (Heidi Schubert, Barbara Best) — no invented reviewers, no AggregateRating. Outcomes/scenarios are
 * explicitly representative composites — never real-client claims. No founder/personal name in visible content; David
 * Westgate appears only as the named lead ProAdvisor/operator. The state income-tax rate is framed qualitatively
 * (low / under 3% / zero by 2030); specific municipal and county rates are framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in Ohio, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Ohio bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to Ohio businesses across <strong>all 88 counties</strong> &mdash; from the Columbus, Cleveland, and Cincinnati &ldquo;3-C&rdquo; corridor to Toledo, Akron, Dayton, Canton, and Youngstown. Ohio&rsquo;s state income tax is <strong>low and shrinking</strong> &mdash; the first $26,050 is exempt and the rate is on a legislated path to <strong>zero by 2030</strong> &mdash; but the operational work lives elsewhere. Ohio has <strong>no corporate income tax</strong>; instead, businesses with Ohio gross receipts over <strong>$6 million</strong> owe the <strong>Commercial Activity Tax (CAT)</strong> at 0.26%, and smaller businesses are exempt. The real complexity is the <strong>municipal income tax</strong>: <strong>649 cities and 199 school districts</strong> levy income taxes, withheld by <strong>work location</strong>, with the <strong>20-day occasional-entrant rule</strong> and collection split among <strong>RITA, CCA, and self-administered cities</strong> that read the rules differently. Sales tax is <strong>5.75% state plus a county rate</strong> (combined 6.5% to 8.0%, depending on the county), and Ohio has <strong>reciprocity with Indiana, Pennsylvania, Michigan, Kentucky, and West Virginia</strong> for state tax (the municipal tax still applies). Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Ohio returns, the CAT, the municipal or school-district tax, or the sales-tax return &mdash; we keep the books and coordinate with your CPA, RITA/CCA, and the city.",

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
    { value: "88", label: "Ohio counties served &mdash; the 3-C corridor to the Mahoning Valley" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "649 + 199", label: "Municipalities and school districts levying an income tax &mdash; withheld by work location, with the 20-day rule and RITA/CCA collection" },
    { figure: "$0", label: "Ohio corporate income tax &mdash; there isn&rsquo;t one; the Commercial Activity Tax (CAT), a gross-receipts tax, applies instead" },
    { figure: "$6M", label: "Commercial Activity Tax exclusion for 2026 &mdash; under $6M in Ohio gross receipts owes no CAT; 0.26% applies above it" },
    { figure: "$26,050", label: "Ohio state income exempt from tax &mdash; above it the rate is low and on a legislated path to zero by 2030" },
    { figure: "6.5&ndash;8.0%", label: "Combined sales-tax range by county &mdash; 5.75% state plus a county and transit rate, highest in Cuyahoga and Franklin" },
    { figure: "IN/PA/MI/KY/WV", label: "Reciprocity &mdash; residents of these states are exempt from Ohio state withholding (the Ohio municipal tax still applies)" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Ohio, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Ohio businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to Ohio businesses across all 88 counties.</strong> Coverage spans the &ldquo;3-C&rdquo; corridor &mdash; Columbus, Cleveland, and Cincinnati &mdash; plus Toledo, Akron, Dayton, Canton, and Youngstown. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Ohio&rsquo;s municipal income tax work for payroll?", a: "Ohio has the most intricate local income-tax system in the country: <strong>649 municipalities and 199 school districts levy income taxes</strong>, and an employer generally withholds the municipal tax for the <strong>city where the work is performed</strong> (rates run about 1% to 3%; major cities are around 2.5%). The <strong>20-day occasional-entrant rule</strong> means no withholding for a city where an employee works 20 or fewer days &mdash; but after 20 days, withholding begins. Collection is split among <strong>RITA, CCA, and self-administered cities</strong>, which read the rules differently, and 199 school districts add a residence-based layer. We configure QuickBooks Payroll for work-location withholding per employee; confirm current rates with RITA or the city." },
    { q: "Does Ohio have a corporate income tax?", a: "<strong>No.</strong> Ohio does not levy a corporate income tax &mdash; it was replaced by the <strong>Commercial Activity Tax (CAT)</strong>, a tax on gross receipts. For <strong>2026 the CAT exclusion is $6 million</strong>, so a business with Ohio taxable gross receipts under $6 million owes <strong>no CAT</strong>; above the exclusion the rate is 0.26%. After the recent reforms raised the exclusion, most small businesses are exempt &mdash; but the gross-receipts tracking still has to be right, and we keep the books CAT-ready." },
    { q: "What is Ohio&rsquo;s sales tax, and does it vary?", a: "Ohio&rsquo;s sales and use tax is <strong>5.75% at the state level, plus a county (and sometimes transit) rate</strong>, so the combined rate varies by county &mdash; from about <strong>6.5% to 8.0%</strong> (the 8.0% top is in Cuyahoga County, around Cleveland, and Franklin County, around Columbus). Because the rate is set at the county level, QuickBooks has to apply the correct combined rate by location, and we scope multi-state nexus for businesses selling across the Indiana, Pennsylvania, or Michigan lines." },
    { q: "Does TechBrot file Ohio taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Ohio or federal returns, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the pass-through entity (IT 4738) return, and we do not represent clients before the Ohio Department of Taxation</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure municipal withholding by work location and the CAT and sales-tax tracking, and coordinate with your existing Ohio CPA or EA, RITA/CCA, and your city, who file." },
  ],

  // STATE GLOSSARY — the OH terms that matter. (H2: The Ohio terms that matter…)
  stateTerms: [
    { term: "Municipal Income Tax", def: "<p>Ohio&rsquo;s defining local tax: <strong>649 cities and villages levy an income tax</strong>, generally withheld by the employer for the <strong>municipality where the work is performed</strong> (rates about 1%&ndash;3%). It is the most complex local income-tax regime in the U.S., and configuring QuickBooks Payroll for work-location withholding per employee is the core Ohio engagement. Confirm rates with <a href=\"https://www.ritaohio.com/\" rel=\"noopener nofollow\">RITA</a> or the city. <a href=\"/find-an-accountant/ohio/quickbooks-accountant/\">Ohio payroll setup &rarr;</a></p>" },
    { term: "The 20-Day Rule", def: "<p>The <strong>occasional-entrant rule</strong>: an employer need not withhold municipal income tax for a city where an employee works <strong>20 or fewer days</strong> in the year &mdash; but after 20 days, withholding begins (with exceptions for the principal place of work, long construction sites, and athletes/entertainers). <strong>RITA and CCA interpret it differently</strong>, which is exactly why it needs operational expertise.</p>" },
    { term: "RITA &amp; CCA", def: "<p><strong>RITA (Regional Income Tax Agency)</strong> and <strong>CCA (Central Collection Agency)</strong> collect municipal income tax for many Ohio cities; others self-administer. Which body a city uses &mdash; and how it reads the 20-day rule &mdash; changes how you register, withhold, and file. We set QuickBooks up to the city&rsquo;s actual collector.</p>" },
    { term: "School District Income Tax", def: "<p>Separately from cities, <strong>199 Ohio school districts levy an income tax</strong>, generally <strong>residence-based</strong> (on employees who live in the district). It is a distinct withholding layer from the municipal tax, and we configure it per employee where it applies.</p>" },
    { term: "Commercial Activity Tax (CAT)", def: "<p>Ohio has <strong>no corporate income tax</strong>; instead it levies the <strong>CAT, a gross-receipts tax</strong>. For 2026 the <strong>exclusion is $6 million</strong> &mdash; under that, no CAT &mdash; with a <strong>0.26%</strong> rate above it. Most small businesses are now exempt, but gross-receipts tracking still has to be clean. <a href=\"https://tax.ohio.gov/business/commercial-activity-tax\" rel=\"noopener nofollow\">Ohio CAT &rarr;</a></p>" },
    { term: "State Income Tax Phase-Out", def: "<p>Ohio&rsquo;s state income tax is <strong>low and being eliminated</strong>: the first <strong>$26,050</strong> of income is exempt, the rate above it is under 3%, and House Bill 96 (2025) puts it on a path to a single low flat rate and then <strong>no tax on nonbusiness income beginning in 2030</strong>. Confirm the current-year rate with the <a href=\"https://tax.ohio.gov/\" rel=\"noopener nofollow\">Ohio Dept of Taxation</a>.</p>" },
    { term: "Reciprocity (IN/PA/MI/KY/WV)", def: "<p>Ohio has <strong>reciprocal agreements</strong> with <strong>Indiana, Pennsylvania, Michigan, Kentucky, and West Virginia</strong>: a resident of those states working in Ohio is exempt from Ohio <strong>state</strong> withholding (Form IT 4NR). <strong>Crucially, the Ohio municipal income tax still applies</strong> to work performed in an Ohio city, and reciprocity does not shield a 20%+ owner under the IT 4738 PTE.</p>" },
    { term: "Pass-Through Entity Tax (IT 4738)", def: "<p>Ohio&rsquo;s <strong>IT 4738 Electing Pass-Through Entity tax</strong> is a SALT-cap workaround: a qualifying entity elects to pay tax at the entity level so the owners can deduct the state tax federally. We keep the books PTE-ready; your CPA makes the election and files.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in Ohio. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from TechBrot&rsquo;s lead practice.", lede: "Most Ohio engagements &mdash; bookkeeping, QuickBooks work, payroll, municipal withholding, and the CAT and sales-tax tracking &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/ohio/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Municipal income tax withheld by work location (RITA/CCA)", "School-district withholding and IN/PA/MI/KY/WV reciprocity", "CAT gross-receipts tracking and county sales-tax setup", "Remote delivery, secure, encrypted access"], cta: "Browse Ohio services &rarr;", href: "#oh-services" },
    { eyebrow: "02 &middot; Curated Ohio partners", heading: "Trusted local Ohio partners.", lede: "When in-person presence in the Columbus, Cleveland, or Cincinnati metros matters, or local CPA hand-off, engagements can route to a vetted Ohio accounting practice running under TechBrot&rsquo;s standards.", list: ["Ohio-based independent practice", "Municipal-tax (RITA/CCA) and 20-day-rule fluency", "School-district withholding and reciprocity coordination", "Local CPA and EA hand-off", "Ohio Dept of Taxation and IRS audit-support coordination", "Manufacturing, logistics, and healthcare industry depth", "Same platform standards as direct delivery"], cta: "See Ohio partner status &rarr;", href: "#oh-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Ohio or federal returns, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, or the sales-tax return. For Ohio Department of Taxation filings, RITA/CCA municipal filings, audit representation, and tax strategy, we coordinate with your existing Ohio CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Ohio accounting different. + 4 H3s)
  context: [
    { category: "Municipal Income Tax", heading: "Work-location withholding is where Ohio payroll goes wrong.", body: ["Ohio&rsquo;s state income tax is low and shrinking, so the complexity is local. <strong>649 cities and 199 school districts levy income taxes</strong>, and the employer generally withholds the municipal tax for the <strong>city where the work is performed</strong>.", "The <strong>20-day rule</strong>, the split among <strong>RITA, CCA, and self-administered</strong> cities, and the residence-based school-district layer make generic payroll get it wrong. We configure QuickBooks Payroll per employee by work location and the collector&rsquo;s rules. <a href=\"/find-an-accountant/ohio/quickbooks-accountant/\">Ohio QuickBooks ProAdvisor &rarr;</a>"] },
    { category: "No Corporate Income Tax &mdash; the CAT", heading: "Ohio taxes gross receipts, not corporate income.", body: ["Ohio has <strong>no corporate income tax</strong>. Instead, the <strong>Commercial Activity Tax (CAT)</strong> applies to gross receipts &mdash; but for 2026 the <strong>exclusion is $6 million</strong>, so a business under that owes no CAT, and above it the rate is 0.26%.", "Most small businesses are now exempt after the reforms, but the gross-receipts figure still has to be tracked correctly to know where you stand. We keep the books CAT-ready."] },
    { category: "County-Variable Sales Tax", heading: "5.75% state &mdash; plus a county rate that changes the total.", body: ["Ohio&rsquo;s sales tax is <strong>5.75% at the state level, plus a county and transit rate</strong>, so the combined rate runs from about <strong>6.5% to 8.0%</strong> depending on the county (highest around Cleveland and Columbus).", "Which rate applies depends on the county, so QuickBooks has to be set up to charge the right combined rate by location. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "A Manufacturing &amp; Logistics Core", heading: "The 3-C corridor and the Midwest crossroads.", body: ["Ohio is one of the most <strong>manufacturing-intensive</strong> states &mdash; autos, steel, polymers, aerospace &mdash; and a <strong>logistics crossroads</strong> where the interstates meet, with deep healthcare (the Cleveland Clinic) and finance (Columbus).", "That mix means job costing, inventory and WIP, multi-state nexus for shippers, and &mdash; for growing pass-throughs &mdash; the <strong>IT 4738 PTE election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "Ohio operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which cities and school districts you withhold for, whether you cross the CAT threshold, and which county sales-tax rate to charge.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What an Ohio engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Columbus services firm", heading: "A firm with hybrid staff withholding the wrong city for half its team.", body: ["<strong>Situation.</strong> A Columbus professional-services firm had employees working across several suburbs and from home, withheld one city&rsquo;s rate for everyone, and had never applied the 20-day rule or the RITA registration for the cities its staff actually worked in.", "<strong>What we did.</strong> Mapped each employee&rsquo;s work locations, set <a href=\"/find-an-accountant/ohio/quickbooks-accountant/\">municipal withholding</a> by work city in QuickBooks Payroll, applied the 20-day rule, added the school-district layer, and registered with the right collectors.", "<strong>Outcome.</strong> Municipal tax withheld correctly per city; the 20-day positions documented; clean RITA/CCA filings for the CPA."] },
    { tag: "Composite &middot; Cincinnati manufacturer", heading: "A manufacturer unsure whether it owed the CAT.", body: ["<strong>Situation.</strong> A Hamilton County manufacturer near the $6 million gross-receipts line had no clean way to measure Ohio taxable gross receipts and didn&rsquo;t know whether it owed the <strong>Commercial Activity Tax</strong>, and its job costing rolled into one account.", "<strong>What we did.</strong> Rebuilt the <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">QuickBooks file</a> for job costing and clean revenue tracking, measured Ohio gross receipts against the $6M exclusion, and kept the CAT detail ready for the CPA.", "<strong>Outcome.</strong> The CAT position quantified; job-level margin visible; a clean basis for the filing decision."] },
    { tag: "Composite &middot; Cross-border employer", heading: "An Ohio employer with Indiana- and Pennsylvania-resident staff.", body: ["<strong>Situation.</strong> An employer near the Ohio borders had Indiana- and Pennsylvania-resident employees, withheld Ohio state tax for everyone, and didn&rsquo;t realize the municipal tax still applied even where reciprocity exempted state tax.", "<strong>What we did.</strong> Collected <a href=\"/find-an-accountant/ohio/small-business-accountant/\">Form IT 4NR</a> for the reciprocal-state staff, stopped Ohio state withholding for them, and kept the <strong>municipal</strong> withholding in place for the Ohio cities where they worked.", "<strong>Outcome.</strong> State tax handled under reciprocity; municipal tax correctly still withheld; no surprise notices."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Ohio engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; municipal income tax by work location, the 20-day rule, the CAT, reciprocity &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Ohio outcomes.)
  outcomes: [
    { figure: "RITA/CCA", detail: "municipal withholding set by work city for every employee, with the 20-day positions documented", meta: "Representative &middot; Columbus payroll cleanup" },
    { figure: "$6M", detail: "Commercial Activity Tax position measured against the exclusion and kept CAT-ready", meta: "Representative &middot; manufacturer review" },
    { figure: "IT 4NR", detail: "reciprocity forms collected so cross-border staff were exempt from Ohio state tax", meta: "Representative &middot; IN/PA reciprocity" },
    { figure: "6.5&ndash;8.0%", detail: "county sales-tax rates configured by location, fixing a single-rate setup", meta: "Representative &middot; sales-tax fix" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Ohio &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that a hybrid employee just crossed the 20-day threshold in another city, whether your gross receipts are about to cross the $6 million CAT line, or whether your pass-through should make the IT 4738 election. For Ohio businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Ohio-specific tax-position work (including CAT and PTE coordination) with your CPA. By application. Best fit: Ohio manufacturers, logistics firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no OH industry pages).
  // (H2: Industry-specific accounting for Ohio's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Manufacturing", href: "/accounting/industries/manufacturing/", body: "Ohio is one of the most manufacturing-intensive states &mdash; autos, steel, polymers, aerospace. <strong>Job costing</strong>, standard vs. actual cost, inventory and WIP, multi-plant reporting, and CAT gross-receipts tracking against the $6M exclusion." },
    { num: "02", name: "Logistics &amp; Trucking", href: "/accounting/industries/trucking/", body: "Ohio is the Midwest crossroads where the interstates meet. <strong>Per-lane and per-customer profitability</strong>, fleet depreciation, owner-operator 1099s, multi-state nexus, and municipal withholding for drivers across cities." },
    { num: "03", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "The Cleveland Clinic ecosystem and a deep hospital and practice base. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll with municipal and school-district withholding." },
    { num: "04", name: "Professional &amp; Financial Services", href: "/accounting/industries/professional-services/", body: "Columbus insurance and finance, plus agencies and consultancies statewide. <strong>Project profitability</strong>, owner compensation, the municipal-tax footprint for hybrid staff, and IT 4738 PTE planning." },
    { num: "05", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the 3-C growth markets. <strong>Job costing, WIP, and retainage</strong>, the construction-site exception to the 20-day rule, certified payroll, and CPA-ready job profitability." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the metros. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and the municipal-tax wrinkle tied to property and owner location." },
  ],
  industriesNote: "Ohio industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Ohio&rsquo;s municipal-tax and CAT stack. Don&rsquo;t see your sector &mdash; e-commerce, SaaS, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core OH money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Ohio QuickBooks Accountant", href: "/find-an-accountant/ohio/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Ohio businesses. Covers QBO, Desktop, Enterprise, and Payroll, with municipal-tax (RITA/CCA) and reciprocity fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Ohio ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Ohio Small Business Accountant", href: "/find-an-accountant/ohio/small-business-accountant/", body: "Operational accounting for Ohio small businesses &mdash; clean books, municipal-tax and CAT compliance, and CPA-ready statements, with the reciprocity details handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Ohio Bookkeeping Services", href: "/find-an-accountant/ohio/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Ohio businesses. Bank reconciliation, municipal-tax review, CAT gross-receipts tracking, county sales-tax sub-reconciliation, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Ohio bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Ohio QuickBooks Cleanup", href: "/find-an-accountant/ohio/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong-city municipal withholding, missing school-district setup, untracked CAT gross receipts, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Ohio cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Ohio QuickBooks Setup", href: "/find-an-accountant/ohio/quickbooks-setup/", body: "Professional QuickBooks implementation for Ohio businesses &mdash; chart of accounts for your industry, municipal withholding by work location (RITA/CCA), school-district setup, and the county sales-tax rate. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Ohio setup &rarr;" },
  ],
  servicesNote: "Other Ohio engagements route to our national service pages, configured for Ohio: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (municipal/RITA/CCA)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance (county)</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (CAT/PTE)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to OH children + global pages (no OH pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Ohio engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/ohio/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, municipal-tax review, CAT tracking, county sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and municipal/entity complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/ohio/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, municipal withholding by work location, county sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/ohio/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong-city municipal withholding and untracked CAT receipts are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "5.75% state + county (6.5%&ndash;8.0% combined) &middot; multi-state nexus" },
    { svc: "Municipal-tax (RITA/CCA) payroll setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "Work-location withholding &middot; 20-day rule &middot; school-district layer &middot; IN/PA/MI/KY/WV reciprocity" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "Municipal income tax per employee by work location; reciprocity for cross-border staff" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Ohio-aware strategic finance; CAT, PTE, and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of cities and school districts you withhold for, whether you cross the CAT threshold, your sales-tax footprint, industry specifics, and multi-state activity. TechBrot does not file Ohio returns, the CAT, the municipal or school-district tax, or the sales-tax return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Ohio businesses statewide. + 2 H3s)
  cities: [
    { name: "Columbus", county: "Franklin County" },
    { name: "Cleveland", county: "Cuyahoga County" },
    { name: "Cincinnati", county: "Hamilton County" },
    { name: "Toledo", county: "Lucas County" },
    { name: "Akron", county: "Summit County" },
    { name: "Dayton", county: "Montgomery County" },
    { name: "Canton", county: "Stark County" },
    { name: "Youngstown", county: "Mahoning County" },
  ],
  countyProse: "TechBrot serves all 88 Ohio counties &mdash; <strong>Franklin</strong> (Columbus), <strong>Cuyahoga</strong> (Cleveland), and <strong>Hamilton</strong> (Cincinnati) anchoring the 3-C corridor; <strong>Lucas</strong> (Toledo), <strong>Summit</strong> (Akron), <strong>Montgomery</strong> (Dayton), <strong>Stark</strong> (Canton), and <strong>Mahoning</strong> (Youngstown) across the secondary metros; the donut and collar counties around each; and the rural counties in between. Remote, fixed-fee service reaches the whole state; each city sets its own municipal income tax (collected by RITA, CCA, or the city) and each county its own sales-tax rate, which we confirm before withholding or charging.",
  citiesNote: "Don&rsquo;t see your city? All 88 Ohio counties are served via remote engagement delivery. <a href=\"/contact/?intent=ohio&state=ohio&source_type=location&funnel_stage=MOFU\">Start an Ohio conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every Ohio engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (OH-localized). (H2: Trusted Ohio partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Ohio tax fluency", detail: "Municipal income tax by work location (RITA/CCA), the 20-day rule, school-district withholding, the CAT, county sales tax, and IT 4738 PTE coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Job costing and WIP for manufacturing and construction, per-lane profitability for logistics, and multi-state nexus across the Midwest." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (OH-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Ohio operational depth", body: "Municipal income tax by work location (RITA/CCA and the 20-day rule), school-district withholding, the CAT in place of a corporate income tax, and county sales tax. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-city, RITA/CCA-heavy Ohio engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Ohio business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Ohio businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Ohio CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Ohio / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "Municipal tax by work location", us: "<strong>Per employee, RITA/CCA + 20-day rule</strong>", cpa: "Usually; varies by firm", remote: "Often one city for everyone &mdash; wrong", winner: "us" },
    { dim: "School-district withholding", us: "<strong>Configured where it applies</strong>", cpa: "Usually; varies by firm", remote: "Often missed", winner: "us" },
    { dim: "CAT gross-receipts tracking", us: "<strong>Kept ready against the $6M exclusion</strong>", cpa: "Files the CAT; not in the books daily", remote: "Rarely tracked", winner: "us" },
    { dim: "County-variable sales tax", us: "<strong>Configured by location (6.5&ndash;8.0%)</strong>", cpa: "Varies; not their primary focus", remote: "Sometimes one rate &mdash; wrong", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Ohio Tax / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Ohio Department of Taxation filings, the CAT and PTE returns, RITA/CCA municipal filings, and representation, use a licensed Ohio CPA or EA. For QuickBooks operations, bookkeeping, municipal withholding by work location, CAT tracking, and county sales-tax setup &mdash; TechBrot is built for that. Most Ohio clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Ohio official sources (from OH-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Ohio Department of Taxation", href: "https://tax.ohio.gov/", detail: "Authoritative source for the state income tax, the Commercial Activity Tax, sales and use tax, and employer withholding." },
    { name: "Ohio Dept of Taxation &mdash; Commercial Activity Tax (CAT)", href: "https://tax.ohio.gov/business/commercial-activity-tax", detail: "The CAT gross-receipts tax, the $6 million exclusion for 2026, and the 0.26% rate &mdash; Ohio&rsquo;s tax in place of a corporate income tax." },
    { name: "Ohio Dept of Taxation &mdash; Sales and Use Tax", href: "https://tax.ohio.gov/business/sales-and-use-tax", detail: "The 5.75% state rate and the county and transit permissive rates &mdash; the authority for the combined county rate." },
    { name: "Ohio Dept of Taxation &mdash; Pass-Through Entity (IT 4738)", href: "https://tax.ohio.gov/business/pass-through-entity-and-fiduciary-income-tax", detail: "The elective pass-through entity tax (IT 4738) and the reciprocity caveat for 20%+ owners." },
    { name: "Regional Income Tax Agency (RITA)", href: "https://www.ritaohio.com/", detail: "The collector for many Ohio municipalities &mdash; the authority for municipal rates, registration, and the 20-day-rule interpretation where RITA applies." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Ohio-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Ohio QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Ohio businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to Ohio businesses statewide &mdash; remote-first from our Delaware headquarters. All 88 counties covered, from the Columbus, Cleveland, and Cincinnati 3-C corridor to Toledo, Akron, Dayton, Canton, and Youngstown. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Ohio&rsquo;s municipal income tax work for payroll?", a: "Ohio has the most intricate local income-tax system in the country: 649 cities and 199 school districts levy income taxes, and an employer generally withholds the municipal tax for the city where the work is performed (rates run about 1% to 3%; major cities are around 2.5%). The 20-day occasional-entrant rule means no withholding for a city where an employee works 20 or fewer days &mdash; after that, withholding begins. Collection is split among RITA, CCA, and self-administered cities that read the rules differently, and school districts add a residence-based layer. We set QuickBooks Payroll up for work-location withholding per employee; confirm current rates with RITA or the city." },
    { q: "Does Ohio have a corporate income tax?", a: "No. Ohio doesn&rsquo;t levy a corporate income tax &mdash; it was replaced by the Commercial Activity Tax (CAT), a tax on gross receipts. For 2026 the CAT exclusion is $6 million, so a business with Ohio taxable gross receipts under $6 million owes no CAT; above the exclusion the rate is 0.26%. Most small businesses are now exempt after the reforms, but the gross-receipts figure still has to be tracked so you know where you stand. We keep the books CAT-ready." },
    { q: "What is the 20-day rule for Ohio municipal tax?", a: "The 20-day occasional-entrant rule says an employer doesn&rsquo;t have to withhold municipal income tax for a city where an employee works 20 or fewer days in the year &mdash; but once the employee passes 20 days there, withholding begins for that city. There are exceptions: the employee&rsquo;s principal place of work, construction or temporary sites expected to last more than 20 days, and athletes/entertainers. RITA and CCA interpret it differently, which is exactly why it needs operational expertise &mdash; we track the day counts and set withholding accordingly." },
    { q: "What is Ohio&rsquo;s sales tax rate, and does it vary by county?", a: "Yes. Ohio&rsquo;s sales and use tax is 5.75% at the state level, plus a county (and sometimes transit) rate, so the combined rate varies by county &mdash; from about 6.5% to 8.0%, with the highest rates in Cuyahoga County (around Cleveland) and Franklin County (around Columbus). QuickBooks has to charge the correct combined rate by location. If you sell across the Indiana, Pennsylvania, or Michigan lines, we also scope where multi-state nexus is triggered." },
    { q: "Does Ohio reciprocity mean I don&rsquo;t withhold for cross-border staff?", a: "Only for state tax. Ohio has reciprocal agreements with Indiana, Pennsylvania, Michigan, Kentucky, and West Virginia, so a resident of those states working in Ohio is exempt from Ohio state withholding (they file Form IT 4NR). But the Ohio municipal income tax still applies to work performed in an Ohio city, and reciprocity doesn&rsquo;t shield a 20%-or-more owner under the IT 4738 PTE. We configure QuickBooks Payroll so the state tax follows reciprocity while the municipal tax is still withheld correctly." },
    { q: "Does TechBrot file Ohio state or municipal tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Ohio or federal returns, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the IT 4738 PTE return, and we do not represent clients before the Ohio Department of Taxation. We deliver clean, CPA-ready bookkeeping, configure municipal withholding and the CAT and sales-tax tracking, and coordinate with your Ohio CPA or EA, RITA/CCA, and your city, who file." },
    { q: "How does an Ohio engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Ohio operational context &mdash; which cities and school districts you withhold for, whether you cross the $6M CAT threshold, which county sales-tax rate applies, whether reciprocity is in play &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Ohio bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; municipal-tax (RITA/CCA) payroll setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the number of cities and school districts you withhold for, the CAT, your sales-tax footprint, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Ohio practice", detail: "All 88 counties served remotely &middot; Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, Canton, Youngstown &middot; Industries handled on the national pages, configured for OH" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Ohio statutory references reviewed against Ohio Department of Taxation and ORC primary sources &middot; The state income-tax rate framed qualitatively (mid-phase-out) &middot; Specific municipal and county rates verified against RITA/the locality and never quoted as fixed figures &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — Indiana + Pennsylvania + Delaware exist (link); MI/KY/WV coming soon (no href -> hub). (H2: Multi-state Ohio businesses. + H3s)
  related: [
    { name: "Indiana", href: "/find-an-accountant/indiana/", body: "Ohio businesses with Indiana-resident staff under the OH&ndash;IN reciprocal agreement, or operations west &mdash; Indiana&rsquo;s county Local Income Tax, the flat state rate, and reciprocity scoped alongside your Ohio books.", cta: "ProAdvisors in Indiana &rarr;" },
    { name: "Pennsylvania", href: "/find-an-accountant/pennsylvania/", body: "Ohio businesses with Pennsylvania-resident staff under the OH&ndash;PA reciprocal agreement, or operations east &mdash; Act 32 local EIT, Philadelphia city taxes, and reciprocity scoped with your Ohio books.", cta: "ProAdvisors in Pennsylvania &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "Ohio businesses with a Delaware entity or Mid-Atlantic operations &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your Ohio books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "Michigan, Kentucky &amp; West Virginia", body: "Ohio businesses with staff or operations in its other reciprocal neighbors &mdash; Michigan, Kentucky, and West Virginia &mdash; with cross-border payroll handled under the agreements (Ohio municipal tax still applies where work is performed in Ohio).", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/ohio/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Ohio QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for Ohio businesses across all 88 counties — from the Columbus, Cleveland, and Cincinnati 3-C corridor to Toledo, Akron, Dayton, Canton, and Youngstown. Built around the municipal income tax (work-location withholding, RITA/CCA, the 20-day rule, 199 school districts), the Commercial Activity Tax in place of a corporate income tax, and the county-variable sales tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/ohio-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#oh-in-brief-text","#oh-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Ohio"}]},
        {"@type":"Service","@id":url+"#service","name":"Ohio QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, municipal income tax, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with Ohio municipal income tax (work-location withholding via RITA/CCA, the 20-day rule, and 199 school districts), Commercial Activity Tax (CAT) gross-receipts tracking, and county sales tax compliance for Ohio businesses across all 88 counties. Delivered remotely by TechBrot. Independent Certified QuickBooks ProAdvisor firm; does not file Ohio or federal returns, the CAT, the state income tax, the municipal or school-district filings, the sales-tax return, or the IT 4738 PTE return — coordinates with the client's CPA or EA and RITA/CCA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Ohio","sameAs":"https://en.wikipedia.org/wiki/Ohio","containsPlace":[
          {"@type":"City","name":"Columbus"},{"@type":"City","name":"Cleveland"},{"@type":"City","name":"Cincinnati"},{"@type":"City","name":"Toledo"},{"@type":"City","name":"Akron"},{"@type":"City","name":"Dayton"},{"@type":"City","name":"Canton"},{"@type":"City","name":"Youngstown"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Ohio small and mid-sized businesses, manufacturers, logistics and trucking operators, healthcare practices, professional and financial-services firms, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Ohio accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ohio QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ohio Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ohio Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ohio QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Ohio QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Ohio — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/michigan/ — t-state-pillar PILLAR. Michigan is a CORE state built to the 6-essentials depth
 * (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup +
 * bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. MI is an areaServed-ONLY state:
 * TechBrot serves Michigan remotely from the Delaware HQ, so this pillar carries NO street address, NO PostalAddress,
 * NO geo, NO LocalBusiness node, and NO hasMap (all states are areaServed-only (no street address)). Service + areaServed (State of
 * Michigan + named metros) only; provider = #organization. Mirrors the PA/NJ/MD/VA/OH core-state exemplars: OMITS
 * `ecosystem`; `industries` cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the MI children; `cities`
 * name+county with NO href; pricing rows -> 5 children + global. Michigan FINISHES WAVE B (Midwest).
 *
 * MICHIGAN FACTS (verified 2026-06-26 against the Michigan Dept of Treasury — see _build/strategy/MI-FACTS.md):
 *  · State individual income tax — a FLAT 4.25% rate; confirmed to stay 4.25% for the 2026 tax year (no reduction
 *    trigger). The clean MI contrast to OH's phase-out and the graduated NJ/MD/VA ladders. (MCL 206.51.)
 *  · City income tax — THE MI-distinct hook: 24 cities levy one under the City Income Tax Act (CITA, 1964 PA 284).
 *    Detroit 2.4% resident / 1.2% nonresident (VERIFIED); Grand Rapids & Saginaw 1.5%/0.75%; Highland Park 2%/1%; the
 *    other ~20 cities at the CITA base 1%/0.5% (non-Detroit individual rates framed QUALITATIVELY). Withheld by work
 *    location for nonresidents (Detroit: predominant place of employment, 25%+). Detroit admin'd by Treasury; Flint
 *    joins Treasury admin Jan 1 2027; the rest self-administer. Far simpler than OH (24 cities, no school-district
 *    layer, no 20-day rule).
 *  · Corporate Income Tax (CIT) — a real 6% corporate income tax on C-corps (MCL 206.601 et seq.). The clean contrast
 *    to OH (no corporate income tax; the CAT gross-receipts tax instead). Flow-throughs are not subject to the CIT.
 *  · Flow-Through Entity (FTE) tax — elective SALT-cap workaround at the IIT rate (4.25%); 3-year election via MTO;
 *    CPA files Form 5772. Advisory hook.
 *  · Sales & use tax — a FLAT 6% statewide, with NO local sales/use tax allowed anywhere (constitutionally
 *    constrained). One rate, every sale. The clean contrast to OH's county-variable combined rate.
 *  · Reciprocity — IL/IN/KY/MN/OH/WI residents working in MI are exempt from MI income tax + withholding (Form MI-W4);
 *    reciprocity covers STATE wage income only — it does NOT cover the city income tax, independent contractors, or
 *    non-wage income.
 *  · Geography — 83 counties; metro Detroit (Wayne; the auto industry), Grand Rapids (Kent; West Michigan
 *    manufacturing/furniture/food), Warren (Macomb; defense/auto-supply), Ann Arbor (Washtenaw; U-M, biotech), Lansing
 *    (Ingham; state capital, insurance), Flint (Genesee), Kalamazoo (pharma), Troy (Oakland; financial services).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with Intuit.
 * It does NOT file MI or federal returns, the CIT, the individual income tax, the city income-tax filings, the
 * sales/use-tax return, or the FTE (Form 5772) return as agent; it keeps the books and coordinates with the client's
 * CPA/EA, the Michigan Dept of Treasury, and the city. Reviews are ONLY the 2 real Clutch reviews (Heidi Schubert,
 * Barbara Best) — no invented reviewers, no AggregateRating. Outcomes/scenarios are explicitly representative
 * composites — never real-client claims. No founder/personal name in visible content; David Westgate appears only as
 * the named lead ProAdvisor/operator. 4.25% income tax, Detroit 2.4%/1.2%, 6% CIT, 6% sales tax are VERIFIED and
 * stated; non-Detroit individual city rates are framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in Michigan, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Michigan bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to Michigan businesses across <strong>all 83 counties</strong> &mdash; from metro Detroit and the automotive supplier base to the Grand Rapids and West Michigan corridor, Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy. Michigan&rsquo;s state income tax is a <strong>flat 4.25%</strong> &mdash; simple and stable &mdash; and its sales tax is a <strong>flat 6% with no local add-on anywhere in the state</strong>, so the operational work lives elsewhere. The MI-distinct layer is the <strong>city income tax</strong>: <strong>24 cities</strong> levy one under the City Income Tax Act, withheld by <strong>work location</strong> &mdash; Detroit at <strong>2.4% resident / 1.2% nonresident</strong>, Grand Rapids and Saginaw at 1.5%/0.75%, and most others at 1%/0.5%. Michigan also levies a real <strong>6% Corporate Income Tax</strong> on C-corporations (unlike Ohio, which has none), with an elective <strong>flow-through entity tax</strong> at the 4.25% rate as a SALT-cap workaround. Michigan has <strong>reciprocity with Illinois, Indiana, Kentucky, Minnesota, Ohio, and Wisconsin</strong> for state income tax (the city tax still applies). Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Michigan returns, the CIT, the city income tax, or the sales-tax return &mdash; we keep the books and coordinate with your CPA, the Michigan Department of Treasury, and the city.",

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
    { value: "83", label: "Michigan counties served &mdash; metro Detroit to West Michigan and the U.P." },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "4.25%", label: "Flat Michigan individual income-tax rate &mdash; confirmed for the 2026 tax year; simple and stable, not graduated" },
    { figure: "24", label: "Michigan cities that levy a city income tax under the City Income Tax Act &mdash; withheld by work location" },
    { figure: "2.4% / 1.2%", label: "Detroit city income tax &mdash; resident / nonresident; the highest of the 24 (Grand Rapids and Saginaw are 1.5%/0.75%)" },
    { figure: "6%", label: "Michigan Corporate Income Tax on C-corporations &mdash; a real corporate income tax, unlike Ohio&rsquo;s gross-receipts CAT" },
    { figure: "6% flat", label: "Michigan sales and use tax &mdash; one rate statewide, with NO city or county add-on permitted anywhere" },
    { figure: "IL/IN/KY/MN/OH/WI", label: "Reciprocity &mdash; residents of these states are exempt from Michigan income tax (the city income tax still applies)" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Michigan, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Michigan businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to Michigan businesses across all 83 counties.</strong> Coverage spans metro Detroit and the auto-supplier base, the Grand Rapids and West Michigan corridor, plus Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Michigan&rsquo;s city income tax work for payroll?", a: "<strong>24 Michigan cities levy a city income tax</strong> under the City Income Tax Act, and an employer generally withholds the city tax for the <strong>city where the work is performed</strong> (for nonresidents). <strong>Detroit</strong> is the highest at <strong>2.4% resident / 1.2% nonresident</strong>; <strong>Grand Rapids</strong> and <strong>Saginaw</strong> are 1.5%/0.75%; <strong>Highland Park</strong> is 2%/1%; and most of the others are 1%/0.5%. Detroit&rsquo;s tax is administered by the Michigan Department of Treasury (Flint joins Treasury administration in 2027); the rest self-administer. It is far simpler than Ohio&rsquo;s municipal system &mdash; no school-district layer, no 20-day rule &mdash; but generic payroll still gets work-location withholding wrong. We configure QuickBooks Payroll per employee by work city; confirm current rates with the city." },
    { q: "Does Michigan have a corporate income tax?", a: "<strong>Yes.</strong> Michigan levies a <strong>6% Corporate Income Tax (CIT)</strong> on C-corporations and entities taxed as corporations federally, on the apportioned tax base. This is a genuine corporate income tax &mdash; the clean contrast to Ohio, which has <strong>no</strong> corporate income tax and uses a gross-receipts tax (the CAT) instead. Flow-through entities (partnerships, S-corps) aren&rsquo;t subject to the CIT; their income flows to the owners, or they can make the elective <strong>flow-through entity tax</strong> election at the 4.25% rate as a SALT-cap workaround. We keep the books CIT- and FTE-ready for your CPA." },
    { q: "What is Michigan&rsquo;s sales tax, and does it vary by city?", a: "<strong>No &mdash; it&rsquo;s a flat 6% statewide.</strong> Michigan&rsquo;s sales and use tax is <strong>6%</strong>, and Michigan does <strong>not</strong> allow any city, county, or local unit to add a sales or use tax &mdash; so unlike Ohio&rsquo;s county-variable combined rate, every Michigan sale is 6%, everywhere. The matching <strong>use tax is 6%</strong> on out-of-state purchases and items brought into the state. The rate is simple; the work is getting taxability and multi-state nexus right, which we scope for businesses selling across the Ohio, Indiana, or Wisconsin lines." },
    { q: "Does TechBrot file Michigan taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Michigan or federal returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales and use tax return, or the flow-through entity (Form 5772) return, and we do not represent clients before the Michigan Department of Treasury</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure city-tax withholding by work location and the sales-tax tracking, and coordinate with your existing Michigan CPA or EA, the Department of Treasury, and your city, who file." },
  ],

  // STATE GLOSSARY — the MI terms that matter. (H2: The Michigan terms that matter…)
  stateTerms: [
    { term: "City Income Tax (CITA)", def: "<p>Michigan&rsquo;s defining local tax: <strong>24 cities levy an income tax</strong> under the City Income Tax Act, generally withheld by the employer for the <strong>city where the work is performed</strong> (for nonresidents). Configuring QuickBooks Payroll for work-location withholding per employee is the core Michigan engagement. Confirm rates with the <a href=\"https://www.michigan.gov/taxes/citytax\" rel=\"noopener nofollow\">city or Treasury city-tax administration</a>. <a href=\"/find-an-accountant/michigan/quickbooks-accountant/\">Michigan payroll setup &rarr;</a></p>" },
    { term: "Detroit City Income Tax", def: "<p>The largest of the 24: <strong>2.4% for residents, 1.2% for nonresidents</strong>, administered by the Michigan Department of Treasury. A nonresident is subject to Detroit withholding when Detroit is the employee&rsquo;s <strong>predominant place of employment</strong> (25% or more of compensation). We set Detroit withholding correctly per employee in QuickBooks Payroll.</p>" },
    { term: "The 24 City-Tax Cities", def: "<p>Beyond Detroit (2.4%/1.2%), <strong>Grand Rapids</strong> and <strong>Saginaw</strong> levy 1.5%/0.75% and <strong>Highland Park</strong> 2%/1%; the other ~20 cities &mdash; including <strong>Lansing, Flint, Pontiac, Battle Creek, Jackson, Muskegon, Port Huron,</strong> and <strong>East Lansing</strong> &mdash; are at the CITA base of 1% resident / 0.5% nonresident. Confirm a city&rsquo;s current rate before you withhold.</p>" },
    { term: "Flat 4.25% Income Tax", def: "<p>Michigan&rsquo;s individual income tax is a <strong>single flat 4.25% rate</strong> &mdash; confirmed to stay 4.25% for the 2026 tax year. Unlike Ohio (phasing toward zero) or the graduated New Jersey and Maryland ladders, Michigan&rsquo;s rate is flat and predictable. Confirm the current rate and exemption with the <a href=\"https://www.michigan.gov/taxes/iit\" rel=\"noopener nofollow\">Michigan Dept of Treasury</a>.</p>" },
    { term: "Corporate Income Tax (CIT)", def: "<p>Michigan levies a <strong>6% Corporate Income Tax</strong> on C-corporations (and entities taxed as corporations federally). It is a real corporate income tax &mdash; the opposite of Ohio, which has none and uses a gross-receipts tax instead. We keep the books CIT-ready; your CPA files. <a href=\"https://www.michigan.gov/taxes/business-taxes/cit\" rel=\"noopener nofollow\">Michigan CIT &rarr;</a></p>" },
    { term: "Flow-Through Entity (FTE) Tax", def: "<p>Michigan&rsquo;s <strong>elective Flow-Through Entity tax</strong> lets a partnership or S-corp pay tax at the entity level at the <strong>4.25% rate</strong> so owners can deduct the state tax federally (a SALT-cap workaround). The election is made by an MTO payment and runs <strong>three years</strong>; the CPA files Form 5772. We keep the books FTE-ready.</p>" },
    { term: "Flat 6% Sales &amp; Use Tax", def: "<p>Michigan&rsquo;s sales and use tax is a <strong>flat 6% statewide</strong>, and <strong>no city or county may add to it</strong> &mdash; one rate on every sale, everywhere in the state. The matching <strong>use tax is 6%</strong> on out-of-state and remote purchases. Simple rate; the work is taxability and multi-state nexus. <a href=\"https://www.michigan.gov/taxes/business-taxes/sales-use-tax\" rel=\"noopener nofollow\">Michigan sales &amp; use tax &rarr;</a></p>" },
    { term: "Reciprocity (IL/IN/KY/MN/OH/WI)", def: "<p>Michigan has <strong>reciprocal agreements</strong> with <strong>Illinois, Indiana, Kentucky, Minnesota, Ohio, and Wisconsin</strong>: a resident of those states working in Michigan is exempt from Michigan income tax and withholding on wages (Form MI-W4). <strong>Crucially, reciprocity does NOT cover the city income tax</strong> &mdash; a reciprocal-state resident working in Detroit can still owe the Detroit tax &mdash; nor does it cover independent contractors or non-wage income.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in Michigan. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from TechBrot&rsquo;s lead practice.", lede: "Most Michigan engagements &mdash; bookkeeping, QuickBooks work, payroll, city-tax withholding, and the CIT and sales-tax tracking &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/michigan/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "City income tax withheld by work location (Detroit, Grand Rapids, and more)", "IL/IN/KY/MN/OH/WI reciprocity handled on payroll", "6% CIT and FTE readiness, plus flat 6% sales-tax setup", "Remote delivery, secure, encrypted access"], cta: "Browse Michigan services &rarr;", href: "#mi-services" },
    { eyebrow: "02 &middot; Curated Michigan partners", heading: "Trusted local Michigan partners.", lede: "When in-person presence in the Detroit, Grand Rapids, or Ann Arbor metros matters, or local CPA hand-off, engagements can route to a vetted Michigan accounting practice running under TechBrot&rsquo;s standards.", list: ["Michigan-based independent practice", "City-tax (Detroit/Grand Rapids) work-location fluency", "Reciprocity coordination for cross-border staff", "Local CPA and EA hand-off", "Michigan Dept of Treasury and IRS audit-support coordination", "Manufacturing, logistics, and healthcare industry depth", "Same platform standards as direct delivery"], cta: "See Michigan partner status &rarr;", href: "#mi-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Michigan or federal returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the flow-through entity return, or the sales and use tax return. For Michigan Department of Treasury filings, city income-tax filings, audit representation, and tax strategy, we coordinate with your existing Michigan CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Michigan accounting different. + 4 H3s)
  context: [
    { category: "City Income Tax", heading: "Work-location withholding is where Michigan payroll goes wrong.", body: ["Michigan&rsquo;s state income tax is a flat 4.25% and its sales tax a flat 6%, so the complexity is the local layer. <strong>24 cities levy a city income tax</strong>, and the employer generally withholds for the <strong>city where the work is performed</strong> &mdash; Detroit at 2.4%/1.2%, Grand Rapids and Saginaw at 1.5%/0.75%, most others at 1%/0.5%.", "It is far simpler than Ohio&rsquo;s system &mdash; no school districts, no 20-day rule &mdash; but generic payroll still defaults everyone to one city, or misses it entirely. We configure QuickBooks Payroll per employee by work location and the city&rsquo;s rules. <a href=\"/find-an-accountant/michigan/quickbooks-accountant/\">Michigan QuickBooks ProAdvisor &rarr;</a>"] },
    { category: "A Real 6% Corporate Income Tax", heading: "Michigan taxes corporate income &mdash; Ohio doesn&rsquo;t.", body: ["Michigan levies a <strong>6% Corporate Income Tax</strong> on C-corporations &mdash; a genuine corporate income tax, the opposite of Ohio&rsquo;s gross-receipts CAT. Flow-through entities aren&rsquo;t subject to it; their income passes to the owners.", "Growing pass-throughs can make the elective <strong>flow-through entity tax</strong> election at the 4.25% rate as a SALT-cap workaround. We keep the books CIT- and FTE-ready so the filing decision and the election are clean for your CPA."] },
    { category: "A Flat 6% Sales Tax", heading: "One rate, statewide &mdash; no local add-on anywhere.", body: ["Michigan&rsquo;s sales and use tax is a <strong>flat 6%</strong>, and <strong>no city or county may add to it</strong> &mdash; a refreshing contrast to the home-rule and county-variable regimes elsewhere. Every Michigan sale is 6%.", "The simplicity is in the rate; the work is taxability, exemptions, and multi-state nexus &mdash; especially for businesses shipping across the Ohio, Indiana, or Wisconsin lines. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "The Automotive &amp; Manufacturing Core", heading: "The auto industry and its supplier network.", body: ["Michigan is the <strong>automotive heart</strong> of the country &mdash; the OEMs plus a deep tier-1/tier-2 supplier base &mdash; with strong logistics (cross-border with Ontario), furniture and food production in West Michigan, defense in Macomb County, and life sciences in Ann Arbor.", "That mix means job costing, inventory and WIP, multi-state and cross-border nexus, and &mdash; for growing pass-throughs &mdash; the <strong>FTE election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "Michigan operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which cities you withhold for, whether you owe the 6% CIT or should consider the FTE election, and where your sales-tax nexus runs.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a Michigan engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Detroit services firm", heading: "A firm withholding the wrong city for half its team.", body: ["<strong>Situation.</strong> A metro-Detroit professional-services firm had employees working in Detroit, in the suburbs, and from home, withheld Detroit&rsquo;s rate for everyone, and had never sorted out which staff were resident vs. nonresident or whether Detroit was each one&rsquo;s predominant place of employment.", "<strong>What we did.</strong> Mapped each employee&rsquo;s work locations and residency, set <a href=\"/find-an-accountant/michigan/quickbooks-accountant/\">city-tax withholding</a> by work city in QuickBooks Payroll (Detroit at the right resident/nonresident rate), and corrected the over- and under-withheld employees.", "<strong>Outcome.</strong> City tax withheld correctly per employee; the nonresident positions documented; clean city filings for the CPA."] },
    { tag: "Composite &middot; Grand Rapids manufacturer", heading: "A manufacturer unsure of its CIT and FTE position.", body: ["<strong>Situation.</strong> A Kent County manufacturer organized as an S-corp had messy job costing, didn&rsquo;t know whether the <strong>flow-through entity election</strong> made sense, and its books couldn&rsquo;t support the owner&rsquo;s federal SALT-cap question.", "<strong>What we did.</strong> Rebuilt the <a href=\"/find-an-accountant/michigan/quickbooks-cleanup/\">QuickBooks file</a> for job costing and clean owner-level reporting, and kept the books FTE-ready so the CPA could evaluate and make the 4.25% entity-level election.", "<strong>Outcome.</strong> Job-level margin visible; the FTE election quantified; a clean basis for the CPA&rsquo;s decision."] },
    { tag: "Composite &middot; Cross-border employer", heading: "A Michigan employer with Ohio- and Indiana-resident staff.", body: ["<strong>Situation.</strong> An employer near the southern border had Ohio- and Indiana-resident employees, withheld Michigan state tax for everyone, and didn&rsquo;t realize the Detroit city tax still applied even where reciprocity exempted the state tax.", "<strong>What we did.</strong> Collected <a href=\"/find-an-accountant/michigan/small-business-accountant/\">Form MI-W4</a> reciprocity exemptions for the reciprocal-state staff, stopped Michigan state withholding for them, and kept the <strong>city</strong> withholding in place where they worked in a Michigan city.", "<strong>Outcome.</strong> State tax handled under reciprocity; city tax correctly still withheld; no surprise notices."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Michigan engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; city income tax by work location, the CIT and FTE election, reciprocity &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Michigan outcomes.)
  outcomes: [
    { figure: "2.4% / 1.2%", detail: "Detroit city tax withheld at the right resident/nonresident rate for every employee, fixing a one-rate setup", meta: "Representative &middot; Detroit payroll cleanup" },
    { figure: "FTE", detail: "books kept ready for the 4.25% flow-through entity election, with owner-level reporting the CPA could act on", meta: "Representative &middot; manufacturer review" },
    { figure: "MI-W4", detail: "reciprocity exemptions collected so cross-border staff were exempt from Michigan state tax", meta: "Representative &middot; OH/IN reciprocity" },
    { figure: "6% flat", detail: "sales-tax setup confirmed at the single statewide rate, with multi-state nexus scoped", meta: "Representative &middot; sales-tax review" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Michigan &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that a hybrid employee just shifted their predominant place of employment into Detroit, whether your S-corp should make the flow-through entity election at 4.25%, or how the 6% CIT interacts with your apportionment. For Michigan businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Michigan-specific tax-position work (including CIT and FTE coordination) with your CPA. By application. Best fit: Michigan manufacturers, logistics firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no MI industry pages).
  // (H2: Industry-specific accounting for Michigan's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Manufacturing &amp; Automotive", href: "/accounting/industries/manufacturing/", body: "Michigan is the automotive heart of the country &mdash; OEMs and a deep tier-1/tier-2 supplier base, plus furniture and aerospace. <strong>Job costing</strong>, standard vs. actual cost, inventory and WIP, multi-plant reporting, and CIT apportionment." },
    { num: "02", name: "Logistics &amp; Trucking", href: "/accounting/industries/trucking/", body: "The auto-supply network and cross-border freight with Ontario at Detroit and Port Huron. <strong>Per-lane and per-customer profitability</strong>, fleet depreciation, owner-operator 1099s, and multi-state and cross-border nexus." },
    { num: "03", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Large hospital systems and practices statewide, with the Ann Arbor and Detroit medical corridors. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll with city-tax withholding." },
    { num: "04", name: "Professional &amp; Financial Services", href: "/accounting/industries/professional-services/", body: "Troy and Southfield financial services, Lansing insurance, plus agencies and consultancies statewide. <strong>Project profitability</strong>, owner compensation, the city-tax footprint for hybrid staff, and FTE planning." },
    { num: "05", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the metro Detroit and West Michigan growth markets. <strong>Job costing, WIP, and retainage</strong>, certified payroll, multi-city work-location withholding, and CPA-ready job profitability." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the metros. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and the city-tax wrinkle tied to property and owner location." },
  ],
  industriesNote: "Michigan industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Michigan&rsquo;s city-tax and CIT stack. Don&rsquo;t see your sector &mdash; e-commerce, SaaS, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core MI money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Michigan QuickBooks Accountant", href: "/find-an-accountant/michigan/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Michigan businesses. Covers QBO, Desktop, Enterprise, and Payroll, with city-tax (Detroit/Grand Rapids) and reciprocity fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Michigan ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Michigan Small Business Accountant", href: "/find-an-accountant/michigan/small-business-accountant/", body: "Operational accounting for Michigan small businesses &mdash; clean books, city-tax and CIT compliance, and CPA-ready statements, with the reciprocity details handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Michigan Bookkeeping Services", href: "/find-an-accountant/michigan/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Michigan businesses. Bank reconciliation, city-tax review, CIT and FTE readiness, sales-tax sub-reconciliation, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Michigan bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Michigan QuickBooks Cleanup", href: "/find-an-accountant/michigan/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong-city tax withholding, misclassified owner compensation, untracked CIT apportionment, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Michigan cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Michigan QuickBooks Setup", href: "/find-an-accountant/michigan/quickbooks-setup/", body: "Professional QuickBooks implementation for Michigan businesses &mdash; chart of accounts for your industry, city-tax withholding by work location (Detroit/Grand Rapids), and the flat 6% sales-tax setup. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Michigan setup &rarr;" },
  ],
  servicesNote: "Other Michigan engagements route to our national service pages, configured for Michigan: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (city-tax withholding)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance (flat 6%)</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (CIT/FTE)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to MI children + global pages (no MI pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Michigan engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/michigan/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, city-tax review, CIT/FTE readiness, sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and city/entity complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/michigan/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, city-tax withholding by work location, flat 6% sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/michigan/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong-city tax withholding and misclassified owner comp are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "Flat 6% statewide (no local add-on) &middot; multi-state nexus" },
    { svc: "City-tax payroll setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "Work-location withholding &middot; Detroit 2.4%/1.2% &middot; Grand Rapids and others &middot; IL/IN/KY/MN/OH/WI reciprocity" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "City income tax per employee by work location; reciprocity for cross-border staff" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Michigan-aware strategic finance; CIT, FTE, and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, the number of cities you withhold for, whether you owe the CIT or elect the FTE, your sales-tax footprint, industry specifics, and multi-state activity. TechBrot does not file Michigan returns, the CIT, the city income tax, or the sales-tax return; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Michigan businesses statewide. + 2 H3s)
  cities: [
    { name: "Detroit", county: "Wayne County" },
    { name: "Grand Rapids", county: "Kent County" },
    { name: "Warren", county: "Macomb County" },
    { name: "Ann Arbor", county: "Washtenaw County" },
    { name: "Lansing", county: "Ingham County" },
    { name: "Flint", county: "Genesee County" },
    { name: "Kalamazoo", county: "Kalamazoo County" },
    { name: "Troy", county: "Oakland County" },
  ],
  countyProse: "TechBrot serves all 83 Michigan counties &mdash; <strong>Wayne</strong> (Detroit), <strong>Oakland</strong> (Troy), and <strong>Macomb</strong> (Warren) anchoring metro Detroit; <strong>Kent</strong> (Grand Rapids) leading West Michigan; <strong>Washtenaw</strong> (Ann Arbor), <strong>Ingham</strong> (Lansing), <strong>Genesee</strong> (Flint), and <strong>Kalamazoo</strong> across the secondary metros; the collar counties around each; and the rural and Upper Peninsula counties beyond. Remote, fixed-fee service reaches the whole state; the 24 city-tax cities each set their own rate, which we confirm before withholding.",
  citiesNote: "Don&rsquo;t see your city? All 83 Michigan counties are served via remote engagement delivery. <a href=\"/contact/?intent=michigan&state=michigan&source_type=location&funnel_stage=MOFU\">Start a Michigan conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every Michigan engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (MI-localized). (H2: Trusted Michigan partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Michigan tax fluency", detail: "City income tax by work location (Detroit/Grand Rapids), the 6% Corporate Income Tax, the flow-through entity election, flat 6% sales tax, and IL/IN/KY/MN/OH/WI reciprocity." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Job costing and WIP for manufacturing and construction, per-lane profitability for logistics, and multi-state and cross-border nexus." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (MI-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Michigan operational depth", body: "The flat 4.25% income tax, city income tax withheld by work location (Detroit, Grand Rapids, and 22 more), the 6% Corporate Income Tax, the FTE election, and the flat 6% sales tax. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-city, city-tax-heavy Michigan engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Michigan business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Michigan businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Michigan CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Michigan / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "City tax by work location", us: "<strong>Per employee &mdash; Detroit, Grand Rapids, more</strong>", cpa: "Usually; varies by firm", remote: "Often one city for everyone &mdash; wrong", winner: "us" },
    { dim: "Resident vs. nonresident city rate", us: "<strong>Set correctly per employee</strong>", cpa: "Usually; varies by firm", remote: "Often missed", winner: "us" },
    { dim: "CIT / FTE readiness", us: "<strong>Books kept CIT- and FTE-ready</strong>", cpa: "Files the CIT/FTE; not in the books daily", remote: "Rarely tracked", winner: "us" },
    { dim: "Flat 6% sales tax setup", us: "<strong>Configured correctly, nexus scoped</strong>", cpa: "Varies; not their primary focus", remote: "Sometimes wrong on nexus", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Michigan Treasury / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Michigan Department of Treasury filings, the CIT and FTE returns, city income-tax filings, and representation, use a licensed Michigan CPA or EA. For QuickBooks operations, bookkeeping, city-tax withholding by work location, CIT/FTE readiness, and sales-tax setup &mdash; TechBrot is built for that. Most Michigan clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Michigan official sources (from MI-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Michigan Department of Treasury", href: "https://www.michigan.gov/taxes", detail: "Authoritative source for the individual income tax, the Corporate Income Tax, sales and use tax, and employer withholding." },
    { name: "Michigan Dept of Treasury &mdash; Individual Income Tax", href: "https://www.michigan.gov/taxes/iit", detail: "The flat 4.25% individual income-tax rate (confirmed for 2026), exemptions, and filing requirements." },
    { name: "Michigan Dept of Treasury &mdash; City Tax", href: "https://www.michigan.gov/taxes/citytax", detail: "The 24 cities that levy a city income tax, Detroit&rsquo;s 2.4%/1.2% rates, and the city-tax administration (including Flint moving to Treasury in 2027)." },
    { name: "Michigan Dept of Treasury &mdash; Corporate Income Tax (CIT)", href: "https://www.michigan.gov/taxes/business-taxes/cit", detail: "The 6% Corporate Income Tax on C-corporations &mdash; Michigan&rsquo;s real corporate income tax." },
    { name: "Michigan Dept of Treasury &mdash; Flow-Through Entity Tax", href: "https://www.michigan.gov/taxes/business-taxes/flowthrough-entity-tax", detail: "The elective flow-through entity tax at the 4.25% rate, the MTO election, and Form 5772." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Michigan-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Michigan QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Michigan businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to Michigan businesses statewide &mdash; remote-first from our Delaware headquarters. All 83 counties covered, from metro Detroit and the auto-supplier base to the Grand Rapids and West Michigan corridor, Warren, Ann Arbor, Lansing, Flint, Kalamazoo, and Troy. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Michigan&rsquo;s city income tax work for payroll?", a: "24 Michigan cities levy a city income tax under the City Income Tax Act, and an employer generally withholds the city tax for the city where the work is performed (for nonresidents). Detroit is the highest at 2.4% resident / 1.2% nonresident; Grand Rapids and Saginaw are 1.5%/0.75%; Highland Park is 2%/1%; most of the rest are 1%/0.5%. Detroit&rsquo;s tax is administered by the Michigan Department of Treasury, and Flint joins Treasury administration in 2027. It&rsquo;s far simpler than Ohio&rsquo;s system &mdash; no school districts, no 20-day rule &mdash; but generic payroll still defaults everyone to one city. We set QuickBooks Payroll up for work-location withholding per employee; confirm current rates with the city." },
    { q: "Does Michigan have a corporate income tax?", a: "Yes. Michigan levies a 6% Corporate Income Tax on C-corporations and entities taxed as corporations federally, on the apportioned tax base. This is a genuine corporate income tax &mdash; the opposite of Ohio, which has no corporate income tax and uses a gross-receipts tax (the CAT) instead. Flow-through entities like partnerships and S-corps aren&rsquo;t subject to the CIT; their income flows to the owners, or they can make the elective flow-through entity tax election at the 4.25% rate as a SALT-cap workaround. We keep the books CIT- and FTE-ready for your CPA." },
    { q: "What is the Michigan flow-through entity (FTE) tax?", a: "It&rsquo;s an elective entity-level tax that lets a partnership or S-corp pay Michigan tax at the entity level at the 4.25% individual rate, so the owners can deduct the state tax on their federal return (a workaround for the federal SALT cap) and claim a refundable Michigan credit. The election is made by an electronic payment through Michigan Treasury Online and is effective for three years &mdash; the year of election plus the next two. The CPA makes the election and files Form 5772; we keep the books FTE-ready so the numbers are clean when the decision is made." },
    { q: "What is Michigan&rsquo;s sales tax rate, and does it vary by city?", a: "No &mdash; it&rsquo;s a flat 6% statewide. Michigan&rsquo;s sales and use tax is 6%, and Michigan does not allow any city, county, or local unit to add a sales or use tax, so every Michigan sale is 6%, everywhere. The matching use tax is 6% on out-of-state purchases and items brought into the state. The rate is simple; the work is getting taxability and multi-state nexus right. If you sell across the Ohio, Indiana, or Wisconsin lines, we scope where nexus is triggered." },
    { q: "Does Michigan reciprocity mean I don&rsquo;t withhold for cross-border staff?", a: "Only for state income tax. Michigan has reciprocal agreements with Illinois, Indiana, Kentucky, Minnesota, Ohio, and Wisconsin, so a resident of those states working in Michigan is exempt from Michigan income tax and withholding on wages (they file Form MI-W4). But reciprocity does not cover the city income tax &mdash; a reciprocal-state resident working in Detroit can still owe the Detroit tax &mdash; and it doesn&rsquo;t apply to independent contractors or non-wage income. We configure QuickBooks Payroll so the state tax follows reciprocity while the city tax is still withheld correctly." },
    { q: "Does TechBrot file Michigan state or city tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Michigan or federal returns, the Corporate Income Tax, the individual income tax, the city income-tax filings, the sales and use tax return, or the flow-through entity (Form 5772) return, and we do not represent clients before the Michigan Department of Treasury. We deliver clean, CPA-ready bookkeeping, configure city-tax withholding and the sales-tax tracking, and coordinate with your Michigan CPA or EA, the Department of Treasury, and your city, who file." },
    { q: "How does a Michigan engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Michigan operational context &mdash; which cities you withhold for, whether you owe the 6% CIT or should consider the FTE election, your sales-tax footprint, whether reciprocity is in play &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Michigan bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; city-tax payroll setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, the number of cities you withhold for, the CIT and FTE position, your sales-tax footprint, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Michigan practice", detail: "All 83 counties served remotely &middot; Detroit, Grand Rapids, Warren, Ann Arbor, Lansing, Flint, Kalamazoo, Troy &middot; Industries handled on the national pages, configured for MI" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Michigan statutory references reviewed against Michigan Department of Treasury primary sources &middot; The flat 4.25% income tax, Detroit&rsquo;s 2.4%/1.2% city rate, the 6% CIT, and the 6% sales tax are stated as verified &middot; Specific non-Detroit city rates framed qualitatively and verified against the city &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — Ohio + Indiana + Illinois + Delaware exist (link); KY/MN/WI coming soon (no href -> hub). (H2: Multi-state Michigan businesses. + H3s)
  related: [
    { name: "Ohio", href: "/find-an-accountant/ohio/", body: "Michigan businesses with Ohio-resident staff under the MI&ndash;OH reciprocal agreement, or operations south &mdash; Ohio&rsquo;s municipal income tax, the Commercial Activity Tax, and reciprocity scoped alongside your Michigan books.", cta: "ProAdvisors in Ohio &rarr;" },
    { name: "Indiana", href: "/find-an-accountant/indiana/", body: "Michigan businesses with Indiana-resident staff under the MI&ndash;IN reciprocal agreement, or operations south &mdash; Indiana&rsquo;s county Local Income Tax, the flat state rate, and reciprocity scoped with your Michigan books.", cta: "ProAdvisors in Indiana &rarr;" },
    { name: "Illinois", href: "/find-an-accountant/illinois/", body: "Michigan businesses with Illinois-resident staff under the MI&ndash;IL reciprocal agreement, or operations toward Chicago &mdash; Illinois&rsquo;s flat income tax and its own filing rules, scoped with your Michigan books.", cta: "ProAdvisors in Illinois &rarr;" },
    { name: "Kentucky, Minnesota &amp; Wisconsin", body: "Michigan businesses with staff or operations in its other reciprocal neighbors &mdash; Kentucky, Minnesota, and Wisconsin &mdash; with cross-border payroll handled under the agreements (Michigan city income tax still applies where work is performed in a Michigan city).", cta: "Coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/michigan/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Michigan QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for Michigan businesses across all 83 counties — from metro Detroit and the auto-supplier base to the Grand Rapids and West Michigan corridor, Ann Arbor, Lansing, Warren, Flint, Kalamazoo, and Troy. Built around the flat 4.25% income tax, the city income tax levied by 24 cities (Detroit 2.4%/1.2%, withheld by work location), the 6% Corporate Income Tax, and the flat 6% sales tax with no local add-on.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-michigan.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#mi-in-brief-text","#mi-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Michigan"}]},
        {"@type":"Service","@id":url+"#service","name":"Michigan QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, city income tax, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll with Michigan city income tax (work-location withholding across the 24 City Income Tax Act cities, Detroit at 2.4%/1.2%), Corporate Income Tax (6%) and flow-through entity tax readiness, and flat 6% sales and use tax compliance for Michigan businesses across all 83 counties. Delivered remotely by TechBrot. Independent Certified QuickBooks ProAdvisor firm; does not file Michigan or federal returns, the CIT, the individual income tax, the city income-tax filings, the sales-tax return, or the flow-through entity (Form 5772) return — coordinates with the client's CPA or EA and the city.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Michigan","sameAs":"https://en.wikipedia.org/wiki/Michigan","containsPlace":[
          {"@type":"City","name":"Detroit"},{"@type":"City","name":"Grand Rapids"},{"@type":"City","name":"Warren"},{"@type":"City","name":"Ann Arbor"},{"@type":"City","name":"Lansing"},{"@type":"City","name":"Flint"},{"@type":"City","name":"Kalamazoo"},{"@type":"City","name":"Troy"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Michigan small and mid-sized businesses, manufacturers and automotive suppliers, logistics and trucking operators, healthcare practices, professional and financial-services firms, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Michigan accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Michigan QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Michigan Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Michigan Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Michigan QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Michigan QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Michigan — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

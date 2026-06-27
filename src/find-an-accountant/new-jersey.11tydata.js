/* /find-an-accountant/new-jersey/ — t-state-pillar PILLAR. New Jersey is a CORE state built to the
 * 6-essentials depth (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup +
 * quickbooks-setup + bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. NJ is an
 * areaServed-ONLY state: TechBrot serves New Jersey remotely from the Delaware HQ, so this pillar carries
 * NO street address, NO PostalAddress, NO geo, NO LocalBusiness node, and NO hasMap (no state carries
 * a street address — all areaServed-only). Service + areaServed (State of New Jersey + named metros) only; provider = #organization.
 * Mirrors the PA core-state exemplar (find-an-accountant/pennsylvania.*): OMITS `ecosystem`; `industries`
 * cards -> GLOBAL /accounting/industries/*; 5 SERVICE cards = the NJ children; `cities` name+county with NO
 * href; pricing rows -> 5 children + global.
 *
 * NEW JERSEY FACTS (verified 2026-06-26 against NJ Division of Taxation + NJ DOL — see _build/strategy/NJ-FACTS.md):
 *  · Gross Income Tax — GRADUATED (not flat), 1.4% up to a top 10.75% on income over $1,000,000 (middle brackets
 *    framed qualitatively, never quoted).
 *  · PA–NJ Reciprocal Income Tax Agreement — a PA resident working in NJ is not subject to NJ income tax (and vice
 *    versa); employee files Form NJ-165; covers wages only; does NOT cover Philadelphia/municipal wage taxes.
 *  · NJ payroll-contribution stack — UI/SUI, TDI/SDI, FLI, WF/SWF, employer + employee, across TWO 2026 wage bases
 *    ($44,800 employer UI/TDI/WF + employee UI/WF; $171,100 employee TDI/FLI). 2026 employee TDI 0.19%, FLI 0.23%;
 *    new-employer UI combined 2.8%; employer UI/TDI experience-rated (qualitative). FLI = no employer contribution.
 *  · Corporation Business Tax — 9% (>$100k), 7.5% ($50k–$100k), 6.5% (<=$50k).
 *  · Corporate Transit Fee — 2.5% surtax for 2024–2028 on taxable net income over $10M, on top of CBT (~11.5%
 *    combined for the largest C-corps); no credits; excludes NJ S corps and public utilities.
 *  · Sales & use tax — 6.625% statewide; no general local sales tax; UEZ and Salem County qualifying sales at the
 *    half-rate 3.3125% (do not stack).
 *  · Pass-Through Business Alternative Income Tax (BAIT) — elective entity-level SALT-cap workaround; advisory hook.
 *  · Newark and Jersey City levy EMPLOYER payroll taxes (~1%; Jersey City on non-resident-employee wages) — distinct.
 *  · Geography — 21 counties; most densely populated state; split between the NYC (North Jersey) and Philadelphia
 *    (South Jersey) metros; pharma/life-sciences, logistics/3PL, and financial-services powerhouse. Borders DE/PA/NY.
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with
 * Intuit. It does NOT file NJ or federal returns, the CBT, the GIT, the UI/TDI/FLI payroll filings, the sales-tax
 * return, or the Newark/Jersey City payroll-tax returns as agent; it keeps the books and coordinates with the
 * client's CPA/EA, NJ DOL, and city. Reviews are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) —
 * no invented reviewers, no AggregateRating. Outcomes/scenarios are explicitly representative composites — never
 * real-client claims. No founder/personal name in visible content; David Westgate appears only as the named lead
 * ProAdvisor/operator. GIT middle brackets, experience-rated employer UI/TDI rates, and the Newark/Jersey City
 * payroll-tax rates are framed qualitatively and never quoted as fixed figures not in NJ-FACTS.md. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, below the in-brief + credentials. (H2: TechBrot in New Jersey, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, New Jersey bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to New Jersey businesses across <strong>all 21 counties</strong> &mdash; from Newark, Jersey City, and the North Jersey/NYC corridor to Edison, Trenton, Camden, and the South Jersey/Philadelphia metro. Our Delaware headquarters anchors the Mid-Atlantic. New Jersey&rsquo;s income tax is <strong>graduated &mdash; from 1.4% up to 10.75% on income over $1 million</strong> &mdash; but the real operational work lives in the <strong>payroll stack</strong>: unemployment (UI), temporary disability (TDI), family leave (FLI), and workforce (WF) funds, with <strong>both employer and employee contributions across two separate wage bases</strong> that reset every January. Layered on top: the <strong>PA&ndash;NJ reciprocal agreement</strong> (a Pennsylvania resident working in New Jersey files Form NJ-165 and pays PA, not NJ), <strong>Newark&rsquo;s and Jersey City&rsquo;s employer payroll taxes</strong>, a <strong>6.625% sales tax</strong> with a half-rate (3.3125%) in Urban Enterprise Zones and Salem County, and the <strong>9% Corporation Business Tax</strong> plus a 2.5% Corporate Transit Fee on the largest corporations. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file New Jersey returns, the payroll filings, or the city payroll taxes &mdash; we keep the books and coordinate with your CPA and the NJ Department of Labor.",

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
    { value: "21", label: "New Jersey counties served &mdash; Newark and Jersey City to Camden and the Shore" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "1.4&ndash;10.75%", label: "Graduated New Jersey income tax &mdash; from a 1.4% low to a 10.75% top rate on income over $1 million, with brackets in between" },
    { figure: "4 funds", label: "Payroll-contribution stack &mdash; UI, TDI, FLI, and WF, with both employer and employee contributions across two wage bases that reset each January" },
    { figure: "9% + 2.5%", label: "Corporation Business Tax (9% over $100k) plus a 2.5% Corporate Transit Fee on taxable net income over $10M through 2028" },
    { figure: "6.625%", label: "Statewide sales tax with no general local add-on &mdash; but a half-rate of 3.3125% on qualifying Urban Enterprise Zone and Salem County sales" },
    { figure: "PA&ndash;NJ", label: "Reciprocal income-tax agreement &mdash; a Pennsylvania resident working in New Jersey files Form NJ-165 and is not subject to NJ income tax" },
    { figure: "Newark / JC", label: "Newark and Jersey City each levy an employer payroll tax &mdash; separate from the state stack and not waived by reciprocity" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in New Jersey, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve New Jersey businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, sales-tax tracking, and fractional CFO coordination to New Jersey businesses across all 21 counties.</strong> Coverage spans the North Jersey/NYC corridor &mdash; Newark, Jersey City, Paterson, Elizabeth &mdash; plus Edison and central New Jersey, Trenton, and the South Jersey/Philadelphia metro around Camden. Service is remote-first from our Delaware headquarters. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "What makes New Jersey payroll so complex in QuickBooks?", a: "New Jersey runs a <strong>multi-fund payroll-contribution stack</strong> on top of graduated income-tax withholding: <strong>Unemployment Insurance (UI), Temporary Disability Insurance (TDI), Family Leave Insurance (FLI), and Workforce Development (WF)</strong>, with <strong>both employer and employee contributions across two separate wage bases</strong> &mdash; $44,800 for employer UI/TDI/WF (and employee UI/WF) and $171,100 for employee TDI and FLI in 2026. The 2026 employee rates are 0.19% (TDI) and 0.23% (FLI); employer UI and TDI are experience-rated. The wage bases and rates reset every January, so QuickBooks Payroll has to be reconfigured each year &mdash; confirm current figures with the NJ Department of Labor." },
    { q: "How does the PA&ndash;NJ reciprocal agreement affect payroll?", a: "Under the <strong>PA&ndash;NJ Reciprocal Income Tax Agreement</strong>, a <strong>Pennsylvania resident working in New Jersey is not subject to New Jersey income tax</strong> &mdash; the employee files <strong>Form NJ-165</strong> (Certificate of Nonresidence) and the employer stops withholding NJ tax and withholds for Pennsylvania instead (and the reverse for NJ residents working in PA). It covers <strong>wages only</strong> and <strong>does not waive local taxes</strong> like the Philadelphia Wage Tax. We configure QuickBooks Payroll per employee so cross-border workers are withheld correctly." },
    { q: "What is New Jersey&rsquo;s sales tax, and what is the UEZ half-rate?", a: "New Jersey&rsquo;s sales and use tax is <strong>6.625% statewide with no general local add-on</strong>. Two exceptions are taxed at <strong>half the state rate &mdash; 3.3125%</strong>: qualifying sales by certified businesses in an <strong>Urban Enterprise Zone (UEZ)</strong> and certain sales by businesses located in <strong>Salem County</strong> (the two benefits do not stack). QuickBooks sales-tax setup has to apply the right rate, and we scope multi-state nexus for businesses selling across the NY and PA lines." },
    { q: "Does TechBrot file New Jersey taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file New Jersey or federal returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, the sales-tax return, or the Newark or Jersey City payroll-tax returns, and we do not represent clients before the New Jersey Division of Taxation</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure the NJ payroll stack and reciprocity, and coordinate with your existing New Jersey CPA or EA, who files." },
  ],

  // STATE GLOSSARY — the NJ terms that matter. (H2: The New Jersey terms that matter…)
  stateTerms: [
    { term: "NJ Payroll-Contribution Stack", def: "<p>Beyond income-tax withholding, New Jersey funds <strong>Unemployment Insurance (UI), Temporary Disability Insurance (TDI), Family Leave Insurance (FLI), and Workforce Development (WF)</strong> through payroll. There are <strong>both employer and employee contributions</strong> across <strong>two wage bases</strong> ($44,800 and, for employee TDI/FLI, $171,100 in 2026), and the rates reset each January. Configuring it correctly in QuickBooks Payroll is the core New Jersey complexity. Confirm current figures with the <a href=\"https://www.nj.gov/labor/\" rel=\"noopener nofollow\">NJ Department of Labor</a>.</p>" },
    { term: "Two 2026 Wage Bases", def: "<p>New Jersey uses <strong>two taxable wage bases</strong> in 2026: <strong>$44,800</strong> for employer UI, TDI, and WF (and employee UI and WF), and <strong>$171,100</strong> for <strong>employee TDI and FLI</strong>. The 2026 employee rates are <strong>0.19% (TDI)</strong> and <strong>0.23% (FLI)</strong>; employer UI and TDI are experience-rated. Getting the two bases right is where automated payroll often slips.</p>" },
    { term: "PA&ndash;NJ Reciprocity (Form NJ-165)", def: "<p>Under the <strong>PA&ndash;NJ Reciprocal Income Tax Agreement</strong>, a <strong>Pennsylvania resident working in New Jersey is not subject to NJ income tax</strong> (and a NJ resident working in PA is not subject to PA income tax). The employee files <strong>Form NJ-165</strong>; the employer then withholds for the residence state. It covers <strong>wages only</strong> and does <strong>not</strong> waive the Philadelphia Wage Tax or other local taxes. <a href=\"https://www.nj.gov/treasury/taxation/njit25.shtml\" rel=\"noopener nofollow\">NJ/PA reciprocity &rarr;</a></p>" },
    { term: "Graduated Income Tax", def: "<p>New Jersey&rsquo;s gross income tax is <strong>graduated</strong> &mdash; from a low of <strong>1.4%</strong> to a top marginal rate of <strong>10.75% on taxable income over $1,000,000</strong> (in place since 2020), with several brackets in between. Unlike flat-tax Pennsylvania (3.07%) or Indiana, the bracket a business owner&rsquo;s pass-through income lands in matters for planning. Confirm the current schedule on the <a href=\"https://www.nj.gov/treasury/taxation/taxtables.shtml\" rel=\"noopener nofollow\">NJ rate schedules</a>.</p>" },
    { term: "CBT &amp; Corporate Transit Fee", def: "<p>The <strong>Corporation Business Tax</strong> is <strong>9%</strong> on entire net income over $100,000 (7.5% for $50k&ndash;$100k, 6.5% at or below $50k). A separate <strong>Corporate Transit Fee &mdash; a 2.5% surtax for 2024 through 2028</strong> &mdash; applies to taxpayers with <strong>taxable net income over $10 million</strong>, on top of the CBT, with no credits and excluding NJ S corporations. <a href=\"https://www.nj.gov/treasury/taxation/cbt/corporatetransitfee.shtml\" rel=\"noopener nofollow\">Corporate Transit Fee &rarr;</a></p>" },
    { term: "Sales &amp; Use Tax (6.625% / 3.3125%)", def: "<p>New Jersey levies a <strong>6.625% state sales and use tax</strong> with <strong>no general local add-on</strong>. Qualifying sales in an <strong>Urban Enterprise Zone (UEZ)</strong> and certain <strong>Salem County</strong> sales are taxed at <strong>half the rate &mdash; 3.3125%</strong> (the two do not stack). The QuickBooks sales-tax setup has to apply the right rate by location. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance help &rarr;</a></p>" },
    { term: "Pass-Through Business Alt. Income Tax (BAIT)", def: "<p>New Jersey&rsquo;s <strong>BAIT</strong> is an <strong>elective entity-level tax</strong> on partnerships, S corps, and multi-member LLCs that lets the business deduct the New Jersey tax <strong>federally</strong> as a SALT-cap workaround; members receive a <strong>refundable NJ credit</strong>. It is a genuine reason a growing New Jersey pass-through wants advisory coordination &mdash; we keep the books BAIT-ready; your CPA makes the election and files.</p>" },
    { term: "Newark &amp; Jersey City Payroll Tax", def: "<p>Two New Jersey cities levy an <strong>employer payroll tax</strong> (roughly 1%): <strong>Newark</strong> on employer payroll above a size threshold, and <strong>Jersey City</strong> on the wages of employees who are <strong>not Jersey City residents</strong>. These are <strong>employer-paid</strong> (not employee withholding) and are <strong>separate from</strong> the state stack and the PA&ndash;NJ reciprocal agreement. We track them where they apply.</p>" },
  ],

  // DELIVERY — direct vs partner practices. (H2: What we deliver in New Jersey. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from neighboring Delaware.", lede: "Most New Jersey engagements &mdash; bookkeeping, QuickBooks work, payroll, the UI/TDI/FLI stack, reciprocity, and sales-tax tracking &mdash; are delivered directly by TechBrot&rsquo;s lead practice, headquartered in the Mid-Atlantic. <a href=\"/find-an-accountant/new-jersey/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "NJ payroll &mdash; UI/TDI/FLI/WF across both wage bases", "PA&ndash;NJ reciprocity (NJ-165) and Newark/Jersey City payroll taxes", "Sales-tax setup incl. UEZ/Salem half-rate", "Remote delivery, secure, encrypted access"], cta: "Browse New Jersey services &rarr;", href: "#nj-services" },
    { eyebrow: "02 &middot; Curated New Jersey partners", heading: "Trusted local New Jersey partners.", lede: "When in-person presence in the North Jersey/NYC corridor, the Jersey City financial district, or the South Jersey/Philadelphia metro matters, or local CPA hand-off, engagements can route to a vetted New Jersey accounting practice running under TechBrot&rsquo;s standards.", list: ["New Jersey-based independent practice", "UI/TDI/FLI payroll-stack fluency", "PA&ndash;NJ reciprocity and city payroll-tax coordination", "Local CPA and EA hand-off", "NJ Division of Taxation and IRS audit-support coordination", "Pharma, logistics, and financial-services depth", "Same platform standards as direct delivery"], cta: "See New Jersey partner status &rarr;", href: "#nj-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file New Jersey or federal returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, or the Newark/Jersey City payroll-tax returns. For New Jersey Division of Taxation filings, audit representation, and tax strategy, we coordinate with your existing New Jersey CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes New Jersey accounting different. + 4 H3s)
  context: [
    { category: "The Payroll Stack", heading: "UI, TDI, FLI, and WF &mdash; the real NJ complexity.", body: ["New Jersey&rsquo;s graduated income-tax withholding is only the start. On top of it sit <strong>four payroll-contribution funds</strong> &mdash; Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) &mdash; with <strong>both employer and employee contributions across two wage bases</strong> that reset every January.", "Automated payroll routinely mis-sets the second wage base or the employee TDI/FLI rates. We configure each fund in QuickBooks Payroll and reconcile it, and we update it when the January rates change."] },
    { category: "Cross-Border Reciprocity", heading: "PA&ndash;NJ reciprocity changes who you withhold for.", body: ["New Jersey borders Pennsylvania, and the two states have a <strong>reciprocal income-tax agreement</strong>: a <strong>Pennsylvania resident working in New Jersey files Form NJ-165</strong> and is not subject to NJ income tax &mdash; you withhold for Pennsylvania instead.", "It covers wages only and does <strong>not</strong> waive the Philadelphia Wage Tax. For employers with a cross-border workforce, getting the NJ-165s on file and QuickBooks Payroll set correctly per employee is essential. <a href=\"/find-an-accountant/new-jersey/quickbooks-accountant/\">NJ QuickBooks ProAdvisor &rarr;</a>"] },
    { category: "Sales Tax &amp; the UEZ Half-Rate", heading: "6.625% &mdash; or 3.3125% in a UEZ or Salem County.", body: ["New Jersey&rsquo;s sales tax is <strong>6.625% statewide with no general local add-on</strong>, which is simpler than layered-tax states &mdash; but qualifying <strong>Urban Enterprise Zone</strong> and <strong>Salem County</strong> sales are taxed at <strong>half the rate, 3.3125%</strong>.", "A business certified in a UEZ has to charge and report the reduced rate correctly, and QuickBooks has to be set up for it. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "A Dense, Diversified Economy", heading: "Pharma, logistics, and financial services.", body: ["New Jersey is the <strong>most densely populated state</strong>, split between the New York and Philadelphia metros: <strong>pharma and life sciences</strong> (the “Medicine Chest of the World”), <strong>logistics and warehousing</strong> around Port Newark&ndash;Elizabeth and the Turnpike, and <strong>financial and professional services</strong> in Jersey City.", "That mix means multi-state nexus for shippers, project profitability for services firms, and &mdash; for growing pass-throughs &mdash; the <strong>BAIT election</strong> as a planning item, handled on our national industry pages and in advisory."] },
  ],
  contextNote: "New Jersey operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which payroll funds and wage bases you hit, whether reciprocity or city payroll taxes are in play, and how sales tax should be sourced.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a New Jersey engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Port-corridor 3PL / logistics", heading: "A growing warehouse employer with payroll funds mis-set and no second wage base.", body: ["<strong>Situation.</strong> A logistics firm near Port Newark&ndash;Elizabeth had QuickBooks Payroll set with one wage base, the TDI/FLI employee rates stale from a prior year, and several Pennsylvania-resident drivers being over-withheld for New Jersey.", "<strong>What we did.</strong> Reconfigured the <a href=\"/find-an-accountant/new-jersey/quickbooks-accountant/\">UI/TDI/FLI/WF stack</a> across both 2026 wage bases, collected NJ-165 forms for the PA-resident drivers and switched them to PA withholding, and reconciled the quarterly filings.", "<strong>Outcome.</strong> Each fund withheld correctly across both bases; cross-border drivers withheld for the right state; clean quarterly reconciliation."] },
    { tag: "Composite &middot; Jersey City services firm", heading: "A Jersey City firm missing the city payroll tax and unsure about BAIT.", body: ["<strong>Situation.</strong> A Jersey City professional-services firm had never set up the <strong>Jersey City employer payroll tax</strong> on its non-resident employees, and the owners had heard about the BAIT election but had no clean books to evaluate it.", "<strong>What we did.</strong> Added the Jersey City payroll-tax tracking in QuickBooks, rebuilt the books to a <a href=\"/find-an-accountant/new-jersey/small-business-accountant/\">CPA-ready standard</a>, and prepared the pass-through income detail so the firm&rsquo;s CPA could evaluate and make the BAIT election.", "<strong>Outcome.</strong> City payroll tax tracked correctly; books BAIT-ready; a documented basis for the CPA&rsquo;s election."] },
    { tag: "Composite &middot; South Jersey retailer", heading: "A UEZ retailer charging the full 6.625% by mistake.", body: ["<strong>Situation.</strong> A South Jersey retailer certified in an Urban Enterprise Zone was charging the full 6.625% sales tax instead of the 3.3125% half-rate on qualifying sales, and its QuickBooks sales-tax items were a mess.", "<strong>What we did.</strong> Reconfigured the <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">QuickBooks sales-tax setup</a> for the UEZ half-rate, separated qualifying from non-qualifying sales, and reconciled the prior periods for the CPA.", "<strong>Outcome.</strong> Correct rate charged going forward; sales-tax items clean; the prior-period exposure quantified for the CPA."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common New Jersey engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; the UI/TDI/FLI payroll stack, PA&ndash;NJ reciprocity, city payroll taxes, the UEZ half-rate &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative New Jersey outcomes.)
  outcomes: [
    { figure: "2 wage bases", detail: "of UI/TDI/FLI/WF payroll contributions reconfigured and reconciled across both NJ bases", meta: "Representative &middot; logistics payroll cleanup" },
    { figure: "NJ-165", detail: "forms collected so PA-resident employees were withheld for the right state", meta: "Representative &middot; PA&ndash;NJ reciprocity" },
    { figure: "3.3125%", detail: "UEZ half-rate sales tax corrected from a full-rate 6.625% setup", meta: "Representative &middot; UEZ sales-tax fix" },
    { figure: "BAIT", detail: "pass-through income detail prepared so the CPA could evaluate the election", meta: "Representative &middot; advisory coordination" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in New Jersey &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that a new hire&rsquo;s NJ-165 just changed which state you withhold for, whether your pass-through should make the BAIT election this year, or where shipping into New York just created a sales-tax obligation. For New Jersey businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and New Jersey-specific tax-position work (including BAIT coordination) with your CPA. By application. Best fit: New Jersey pharma and logistics firms and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no NJ industry pages).
  // (H2: Industry-specific accounting for New Jersey's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Pharma &amp; Manufacturing", href: "/accounting/industries/manufacturing/", body: "New Jersey is the “Medicine Chest of the World” &mdash; pharma, life sciences, and advanced manufacturing. <strong>Job costing</strong>, inventory and WIP, R&amp;D credit coordination, and multi-state nexus for shippers &mdash; configured for New Jersey&rsquo;s tax and payroll stack." },
    { num: "02", name: "Logistics &amp; Trucking", href: "/accounting/industries/trucking/", body: "Port Newark&ndash;Elizabeth and the NJ Turnpike make New Jersey one of the densest distribution markets in the country. <strong>Per-lane and per-customer profitability</strong>, fleet depreciation, owner-operator 1099s, and multi-state sales-tax nexus." },
    { num: "03", name: "Financial &amp; Professional Services", href: "/accounting/industries/professional-services/", body: "Jersey City is “Wall Street West,” and the state is dense with agencies and consultancies. <strong>Project profitability</strong>, owner compensation, the Jersey City payroll tax, and BAIT planning for growing pass-throughs." },
    { num: "04", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Physician, dental, and specialty practices across the metros. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll across the UI/TDI/FLI stack." },
    { num: "05", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the dense North and South Jersey markets. <strong>Job costing, WIP, and retainage</strong>, certified payroll on public work, subcontractor 1099s, and CPA-ready job profitability." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the NYC and Philadelphia metros. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, and short-term rental tracking." },
  ],
  industriesNote: "New Jersey industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for New Jersey&rsquo;s tax and payroll stack. Don&rsquo;t see your sector &mdash; e-commerce, SaaS, restaurants, nonprofits? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core NJ money pages (the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "New Jersey QuickBooks Accountant", href: "/find-an-accountant/new-jersey/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for New Jersey businesses. Covers QBO, Desktop, Enterprise, and Payroll, with the UI/TDI/FLI stack and PA&ndash;NJ reciprocity fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "New Jersey ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "New Jersey Small Business Accountant", href: "/find-an-accountant/new-jersey/small-business-accountant/", body: "Operational accounting for New Jersey small businesses &mdash; clean books, payroll-stack compliance, and CPA-ready statements, with the reciprocity and city payroll-tax details handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "New Jersey Bookkeeping Services", href: "/find-an-accountant/new-jersey/bookkeeping-services/", body: "Recurring fixed-fee monthly close for New Jersey businesses. Bank reconciliation, payroll-stack review, sales-tax sub-reconciliation incl. the UEZ half-rate, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "New Jersey bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "New Jersey QuickBooks Cleanup", href: "/find-an-accountant/new-jersey/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; mis-set payroll funds and wage bases, missing reciprocity setup, full-rate sales tax in a UEZ, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "New Jersey cleanup &rarr;" },
    { eyebrow: "Service 05", name: "New Jersey QuickBooks Setup", href: "/find-an-accountant/new-jersey/quickbooks-setup/", body: "Professional QuickBooks implementation for New Jersey businesses &mdash; chart of accounts for your industry, the UI/TDI/FLI payroll stack across both wage bases, reciprocity, and sales-tax setup. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "New Jersey setup &rarr;" },
  ],
  servicesNote: "Other New Jersey engagements route to our national service pages, configured for New Jersey: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (UI/TDI/FLI stack)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO (BAIT)</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to NJ children + global pages (no NJ pricing page on a core state).
  // (H2: Fixed-fee starting ranges for New Jersey engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/new-jersey/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, payroll-stack review, sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and payroll/entity complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/new-jersey/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, UI/TDI/FLI payroll config, sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/new-jersey/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Mis-set payroll funds and UEZ sales-tax errors are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "6.625% &middot; UEZ/Salem 3.3125% half-rate &middot; multi-state nexus" },
    { svc: "NJ payroll-tax setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "UI/TDI/FLI/WF across both wage bases &middot; PA&ndash;NJ reciprocity (NJ-165) &middot; Newark/JC payroll taxes" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "UI/TDI/FLI/WF reconciled; cross-border withholding under reciprocity" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "New Jersey-aware strategic finance; BAIT and multi-state nexus planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, payroll-fund and cross-border complexity, sales-tax footprint, industry specifics, and multi-state activity. TechBrot does not file New Jersey returns, the payroll filings, or the city payroll taxes; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving New Jersey businesses statewide. + 2 H3s)
  cities: [
    { name: "Newark", county: "Essex County" },
    { name: "Jersey City", county: "Hudson County" },
    { name: "Paterson", county: "Passaic County" },
    { name: "Elizabeth", county: "Union County" },
    { name: "Edison", county: "Middlesex County" },
    { name: "Trenton", county: "Mercer County" },
    { name: "Camden", county: "Camden County" },
    { name: "Hoboken", county: "Hudson County" },
  ],
  countyProse: "TechBrot serves all 21 New Jersey counties &mdash; <strong>Essex</strong> (Newark), <strong>Hudson</strong> (Jersey City, Hoboken), <strong>Bergen</strong>, <strong>Passaic</strong> (Paterson), and <strong>Union</strong> (Elizabeth) in the North Jersey/NYC corridor; <strong>Middlesex</strong> (Edison) and <strong>Mercer</strong> (Trenton) in central New Jersey; <strong>Camden</strong>, <strong>Burlington</strong>, and <strong>Gloucester</strong> in the South Jersey/Philadelphia metro; the Shore counties of <strong>Monmouth</strong> and <strong>Ocean</strong>; and <strong>Salem</strong> in the southwest (with its half-rate sales-tax zone) &mdash; plus every county in between. Remote, fixed-fee service reaches the whole state; the payroll wage bases and rates reset each January, which we confirm against the NJ Department of Labor.",
  citiesNote: "Don&rsquo;t see your city? All 21 New Jersey counties are served via remote engagement delivery. <a href=\"/contact/?intent=new-jersey&state=new-jersey&source_type=location&funnel_stage=MOFU\">Start a New Jersey conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every New Jersey engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (NJ-localized). (H2: Trusted New Jersey partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated New Jersey tax fluency", detail: "The UI/TDI/FLI/WF payroll stack across both wage bases, PA&ndash;NJ reciprocity (NJ-165), Newark/Jersey City payroll taxes, the UEZ/Salem half-rate, and BAIT coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Job costing and WIP for pharma/manufacturing and construction, per-lane profitability for logistics, and multi-state nexus for shippers." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (NJ-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "New Jersey operational depth", body: "The UI/TDI/FLI/WF payroll stack across both wage bases, PA&ndash;NJ reciprocity and the NJ-165, Newark/Jersey City payroll taxes, and the UEZ/Salem half-rate sales tax. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-fund payroll and cross-border New Jersey engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your New Jersey business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for New Jersey businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many New Jersey CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files New Jersey / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "UI/TDI/FLI payroll stack setup", us: "<strong>All funds, both wage bases</strong>", cpa: "Usually; varies by firm", remote: "Often mis-set or one base", winner: "us" },
    { dim: "PA&ndash;NJ reciprocity (NJ-165)", us: "<strong>Per employee, withheld correctly</strong>", cpa: "Usually; varies by firm", remote: "Often missed for cross-border staff", winner: "us" },
    { dim: "UEZ / Salem half-rate sales tax", us: "<strong>Configured at 3.3125% where it applies</strong>", cpa: "Varies; not their primary focus", remote: "Sometimes mishandled or ignored", winner: "us" },
    { dim: "Newark / Jersey City payroll tax", us: "<strong>Tracked where it applies</strong>", cpa: "Usually; varies by firm", remote: "Often missed", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "NJ Division of Taxation / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for New Jersey Division of Taxation filings, the CBT and gross income tax returns, the BAIT election, and representation, use a licensed New Jersey CPA or EA. For QuickBooks operations, bookkeeping, the UI/TDI/FLI payroll stack, reciprocity setup, and UEZ sales-tax compliance &mdash; TechBrot is built for that. Most New Jersey clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — New Jersey official sources (from NJ-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "New Jersey Division of Taxation", href: "https://www.nj.gov/treasury/taxation/", detail: "Authoritative source for the gross income tax, the Corporation Business Tax, sales and use tax, and employer withholding." },
    { name: "NJ Division of Taxation &mdash; Income Tax Rates", href: "https://www.nj.gov/treasury/taxation/taxtables.shtml", detail: "The official graduated gross income tax rate schedules (1.4% to a 10.75% top rate over $1 million)." },
    { name: "NJ Division of Taxation &mdash; Corporate Transit Fee", href: "https://www.nj.gov/treasury/taxation/cbt/corporatetransitfee.shtml", detail: "The 2.5% surtax for 2024 through 2028 on taxable net income over $10 million, on top of the Corporation Business Tax." },
    { name: "NJ Division of Taxation &mdash; PA/NJ Reciprocal Agreement", href: "https://www.nj.gov/treasury/taxation/njit25.shtml", detail: "The reciprocal income-tax agreement and Form NJ-165 &mdash; the authority for cross-border PA/NJ wage withholding." },
    { name: "NJ Department of Labor &amp; Workforce Development", href: "https://www.nj.gov/labor/", detail: "Authoritative source for the UI, TDI, FLI, and WF wage bases and contribution rates, which reset each January." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, New Jersey-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: New Jersey QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve New Jersey businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, and sales-tax tracking to New Jersey businesses statewide &mdash; remote-first from our Delaware headquarters. All 21 counties covered, from Newark, Jersey City, and the North Jersey/NYC corridor to Edison, Trenton, and the South Jersey/Philadelphia metro. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "Why is New Jersey payroll harder to set up in QuickBooks?", a: "Beyond graduated income-tax withholding, New Jersey funds four payroll programs &mdash; Unemployment (UI), Temporary Disability (TDI), Family Leave (FLI), and Workforce (WF) &mdash; with both employer and employee contributions across two separate wage bases ($44,800 and, for employee TDI/FLI, $171,100 in 2026). The 2026 employee rates are 0.19% (TDI) and 0.23% (FLI); employer UI and TDI are experience-rated. The bases and rates reset every January, so QuickBooks Payroll has to be reconfigured each year. We set up each fund and reconcile it." },
    { q: "How does the PA-NJ reciprocal agreement affect my payroll?", a: "If you employ a Pennsylvania resident in New Jersey, that employee files Form NJ-165 (Certificate of Nonresidence), and you stop withholding New Jersey income tax and withhold for Pennsylvania instead &mdash; and the reverse for a New Jersey resident working in Pennsylvania. It covers wages only and does not waive local taxes like the Philadelphia Wage Tax. We configure QuickBooks Payroll per employee so cross-border staff are withheld for the correct state." },
    { q: "What is New Jersey's sales tax rate, and what is the UEZ half-rate?", a: "New Jersey's sales and use tax is 6.625% statewide with no general local add-on. Qualifying sales by certified businesses in an Urban Enterprise Zone (UEZ), and certain sales by businesses in Salem County, are taxed at half the rate &mdash; 3.3125% (the two benefits don't stack). QuickBooks has to charge the correct rate, and a common cleanup is a UEZ business that was charging the full 6.625% by mistake. If you sell across the NY or PA line, we also scope multi-state nexus." },
    { q: "Do Newark or Jersey City have their own payroll taxes?", a: "Yes &mdash; both levy an employer payroll tax (roughly 1%). Newark taxes employer payroll above a size threshold, and Jersey City taxes the wages of employees who are not Jersey City residents. These are employer-paid, separate from the state payroll stack, and not waived by the PA-NJ reciprocal agreement. We track them in QuickBooks where they apply so the employer-side liability is right." },
    { q: "What is the New Jersey BAIT, and should my business elect it?", a: "The Pass-Through Business Alternative Income Tax (BAIT) is an elective entity-level tax that lets a New Jersey partnership, S corp, or multi-member LLC deduct the New Jersey tax federally as a SALT-cap workaround, with members receiving a refundable New Jersey credit. Whether to elect it is a CPA decision, but it needs clean books to evaluate. We keep the books BAIT-ready and prepare the pass-through detail; your CPA makes the election and files." },
    { q: "Does TechBrot file New Jersey state or city tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file New Jersey or federal returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, the sales-tax return, or the Newark or Jersey City payroll-tax returns, and we do not represent clients before the New Jersey Division of Taxation. We deliver clean, CPA-ready bookkeeping, configure the payroll stack and reciprocity, and coordinate with your New Jersey CPA or EA, who files." },
    { q: "How does a New Jersey engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your New Jersey operational context &mdash; which payroll funds and wage bases you hit, whether reciprocity or city payroll taxes apply, how sales tax should be sourced &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does New Jersey bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; NJ payroll-tax setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee count, payroll-fund and cross-border complexity, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "New Jersey practice", detail: "All 21 counties served remotely &middot; Newark, Jersey City, Paterson, Elizabeth, Edison, Trenton, Camden, Hoboken &middot; Industries handled on the national pages, configured for NJ" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "New Jersey statutory references reviewed against NJ Division of Taxation and NJ DOL primary sources &middot; GIT middle brackets and experience-rated employer payroll rates framed qualitatively and never quoted as fixed figures &middot; Payroll wage bases and rates re-checked each January &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 3 neighbors that EXIST (DE, PA, NY all link) + Maryland (no href -> hub). (H2: Multi-state New Jersey businesses. + H3s)
  related: [
    { name: "Pennsylvania", href: "/find-an-accountant/pennsylvania/", body: "New Jersey businesses with cross-border staff under the PA&ndash;NJ reciprocal agreement, or operations across the Delaware River &mdash; Act 32 local EIT, Philadelphia city taxes, and reciprocity scoped alongside your New Jersey books.", cta: "ProAdvisors in Pennsylvania &rarr;" },
    { name: "New York", href: "/find-an-accountant/new-york/", body: "North Jersey businesses operating across the Hudson into New York City &mdash; New York payroll, sales tax, and the cross-border nexus that comes with the NYC metro.", cta: "ProAdvisors in New York &rarr;" },
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "New Jersey businesses with a Delaware entity or operations to the south &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped with your New Jersey books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "Maryland", body: "New Jersey businesses expanding south through the Mid-Atlantic toward the Baltimore and DC metros &mdash; Maryland multi-state payroll, sales tax, and nexus scoping.", cta: "Maryland &mdash; coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-jersey/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New Jersey QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and sales tax compliance for New Jersey businesses across all 21 counties — from Newark and Jersey City to Edison, Trenton, and Camden. Built around the NJ payroll-contribution stack (UI/TDI/FLI/WF across two wage bases), the PA–NJ reciprocal agreement, the graduated income tax, and the 6.625% sales tax with its UEZ/Salem half-rate.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-jersey-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nj-in-brief-text","#nj-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New Jersey"}]},
        {"@type":"Service","@id":url+"#service","name":"New Jersey QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll across the NJ UI/TDI/FLI/WF contribution stack, PA–NJ reciprocity (Form NJ-165), and 6.625% sales tax compliance with the UEZ/Salem half-rate for New Jersey businesses across all 21 counties. Delivered remotely by TechBrot from its Delaware headquarters. Independent Certified QuickBooks ProAdvisor firm; does not file New Jersey or federal returns, the Corporation Business Tax, the gross income tax, the payroll filings, or the Newark/Jersey City payroll-tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New Jersey","sameAs":"https://en.wikipedia.org/wiki/New_Jersey","containsPlace":[
          {"@type":"City","name":"Newark"},{"@type":"City","name":"Jersey City"},{"@type":"City","name":"Paterson"},{"@type":"City","name":"Elizabeth"},{"@type":"City","name":"Edison"},{"@type":"City","name":"Trenton"},{"@type":"City","name":"Camden"},{"@type":"City","name":"Hoboken"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"New Jersey small and mid-sized businesses, pharmaceutical and manufacturing firms, logistics and distribution operators, financial and professional-services firms, healthcare practices, construction firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New Jersey accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New Jersey QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New Jersey Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New Jersey Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New Jersey QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New Jersey QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in New Jersey — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

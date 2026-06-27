/* /find-an-accountant/indiana/ — t-state-pillar PILLAR. Indiana is an areaServed-ONLY anchor:
 * TechBrot serves Indiana remotely; there is NO Indiana office, so this pillar carries NO street
 * address, NO PostalAddress, NO geo, NO LocalBusiness/AccountingService node, and NO hasMap — a
 * fabricated Indiana local address would breach the honesty contract (the DE pillar is the ONLY
 * state page; no LocalBusiness/address node ships on any state (all areaServed-only) and is NOT replicated
 * here). Service + areaServed (State of Indiana + named metros) only; provider = #organization.
 * Data-file shape mirrors the proven NY pillar (find-an-accountant/new-york.11tydata.js): JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph emitting the schema @graph.
 *
 * INDIANA FACTS (verified 2026-06-26 against Indiana DOR, DLGF, Tax Foundation — see _build/strategy/IN-FACTS.md):
 *  · Individual (adjusted gross) income tax — flat 2.95% for 2026 (single statewide rate, no brackets);
 *    scheduled to fall to 2.90% in 2027.
 *  · County Local Income Tax (LIT) — all 92 counties levy a LIT on top of the state rate; each county
 *    sets its own rate (rates vary by county — framed QUALITATIVELY here, never a specific county %).
 *    Determined by county of residence on January 1 (or principal Indiana work county if resident
 *    out-of-state on Jan 1); same rate for residents and nonresidents; Form WH-4 establishes the county;
 *    30-day safe harbor (IC 6-3-2-27.5) for nonresident employees working 30 days or fewer in Indiana.
 *  · Corporate (adjusted gross) income tax — flat 4.9%.
 *  · Sales & use tax — flat 7% statewide; NO local sales tax anywhere in Indiana.
 *  · Business tangible personal property — exemption threshold raised to $2,000,000 for 2026 (IC 6-1.1-3-7.2);
 *    declared on Form 102 or 103. TechBrot keeps the asset detail CPA/assessor-ready and coordinates the
 *    filing posture; it does NOT file the county return as agent.
 *  · Geography — 92 counties; "Crossroads of America" (most interstate-dense state); national logistics core
 *    and the most manufacturing-intensive state in the U.S. by share of GDP; multi-state nexus for shippers.
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated
 * with Intuit. It does NOT file Indiana or federal returns, the county LIT return, the sales-tax return,
 * or the business personal-property return as agent; it keeps the books and coordinates with the client's
 * CPA/EA and the county assessor. Reviews are ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best)
 * — no invented IN reviewers, no AggregateRating. Outcomes/scenarios are explicitly representative,
 * illustrative composites — never real-client claims. No founder/personal name in visible content; David
 * Westgate appears only as the named lead ProAdvisor/operator (the standing-rule exception). Per-county LIT
 * rates are framed qualitatively and never quoted as a specific percentage. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: TechBrot in Indiana, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Indiana bookkeeping, QuickBooks setup, cleanup, migration, county-income-tax and sales-tax tracking, and fractional CFO engagements to Indiana businesses across <strong>all 92 counties</strong> &mdash; from Indianapolis, Carmel, and Fishers to Fort Wayne, Evansville, South Bend, Bloomington, and Hammond. Indiana&rsquo;s tax structure is flat and clean on its face &mdash; a <strong>flat 2.95% state income tax</strong> for 2026, a <strong>flat 4.9% corporate rate</strong>, and a <strong>flat 7% sales tax with no local add-ons anywhere</strong> &mdash; but the real operational work lives in the <strong>92-county Local Income Tax (LIT)</strong>, withheld by each employee&rsquo;s county of residence on January 1 and established on Form WH-4, and in the <strong>$2,000,000 business personal-property exemption</strong> that arrived in 2026. As the <strong>Crossroads of America</strong> and the most manufacturing-intensive state in the country, Indiana also means <strong>multi-state nexus</strong> wherever goods move. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot</strong>; <strong>curated local Indiana operators</strong> where in-person presence or local CPA hand-off matters. Honest scope: we do not file Indiana returns, the county LIT return, or the business personal-property return &mdash; we keep the books and coordinate with your CPA and the county assessor.",

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
    { value: "92", label: "Indiana counties served &mdash; Indianapolis metro to the Calumet corridor" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "2.95%", label: "Flat Indiana individual income tax for 2026 &mdash; a single statewide rate with no brackets, scheduled to fall to 2.90% in 2027" },
    { figure: "92", label: "Counties &mdash; every one levies its own Local Income Tax (LIT) on top of the state rate, withheld by county of residence on January 1" },
    { figure: "4.9%", label: "Flat Indiana corporate (adjusted gross) income tax &mdash; on Indiana-apportioned income, separate from the LIT withholding obligation" },
    { figure: "7%", label: "Flat statewide sales &amp; use tax with no local add-ons &mdash; a clean single rate, but it still applies to taxable goods and services and must be configured and remitted" },
    { figure: "$2M", label: "Business personal-property exemption for 2026 &mdash; total cost under $2,000,000 in a county is exempt, but it must be declared on Form 102 or 103" },
    { figure: "#1", label: "Most manufacturing-intensive state by share of GDP &mdash; the Crossroads of America logistics core that drives multi-state nexus for shippers" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Indiana, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Indiana businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, county-income-tax and sales-tax tracking, and fractional CFO engagements to Indiana businesses across all 92 counties.</strong> Coverage spans the Indianapolis metro &mdash; Marion, Hamilton, Hendricks, and the collar counties &mdash; plus Fort Wayne, Evansville, South Bend, Bloomington, and the Northwest Indiana &ldquo;Region.&rdquo; Direct service by TechBrot, with partner practices in Indiana where in-person presence helps. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Indiana&rsquo;s county Local Income Tax (LIT) affect my payroll and bookkeeping?", a: "<strong>All 92 Indiana counties levy a Local Income Tax (LIT) on top of the flat 2.95% state rate, and each county sets its own rate.</strong> The rate that applies to an employee is determined by their <strong>county of residence on January 1</strong> &mdash; or, if they live out of state, their principal Indiana work county on that date. <strong>Form WH-4</strong> establishes the county for withholding, and a new WH-4 is required when an employee moves or changes work county. There is no separate resident/nonresident rate, and a <strong>30-day safe harbor</strong> exempts nonresident employees who work 30 days or fewer in Indiana. QuickBooks Payroll has to be configured per employee by county so withholding is right from the first run &mdash; confirm the current per-county rate against the Indiana DOR county-rate list." },
    { q: "What is Indiana&rsquo;s sales tax, and how does it change QuickBooks setup?", a: "Indiana has a <strong>flat 7% statewide sales and use tax with no local add-ons anywhere</strong> &mdash; no county or city sales tax. That single clean rate makes QuickBooks sales-tax setup simpler than in layered-tax states, but the 7% <strong>still applies to taxable goods and services and must be configured, collected, and remitted</strong>. For Indiana logistics and manufacturing businesses that ship across state lines, the harder question is usually <strong>multi-state nexus</strong> &mdash; where other states&rsquo; sales tax obligations are triggered &mdash; which we scope as part of the engagement." },
    { q: "What QuickBooks versions does TechBrot support for Indiana businesses?", a: "All current QuickBooks versions: <strong>QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll</strong>. QuickBooks Online suits most Indiana small businesses and professional-services firms; <strong>QuickBooks Enterprise</strong> is common in Indiana manufacturing, RV/Elkhart, logistics, and larger construction firms that need inventory, job costing, and multi-plant reporting. We configure county LIT withholding, sales-tax tracking, and business personal-property asset detail as standard engagement components." },
    { q: "How does an Indiana engagement start, and does TechBrot file Indiana taxes?", a: "Engagements start with a <strong>free 30-minute discovery call</strong>; a <strong>written fixed-fee scope is delivered within 3 business days</strong>. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Indiana or federal returns, the county LIT return, the sales-tax return, or the business personal-property return, and we do not represent clients before the Indiana Department of Revenue</strong>. We deliver clean, CPA-ready bookkeeping, keep the personal-property asset detail assessor-ready, and coordinate with your existing Indiana CPA or EA." },
  ],

  // STATE GLOSSARY — the IN terms that matter. (H2: The Indiana terms that matter…)
  stateTerms: [
    { term: "County Local Income Tax (LIT)", def: "<p>A <strong>local income tax levied by all 92 Indiana counties</strong> on top of the flat state rate. <strong>Each county sets its own rate</strong> &mdash; rates vary by county &mdash; and the rate that applies is set by the taxpayer&rsquo;s <strong>county of residence on January 1</strong>. Same rate for residents and nonresidents. Confirm the current per-county rate on the <a href=\"https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/\" rel=\"noopener nofollow\">Indiana DOR county-rate list</a>. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Indiana county income tax help &rarr;</a></p>" },
    { term: "Form WH-4", def: "<p>The <strong>Indiana employee&rsquo;s county withholding form.</strong> WH-4 establishes the employee&rsquo;s <strong>county of residence and principal work county</strong> for LIT withholding. A new WH-4 is required when an employee moves or changes work county during the year, which is why multi-county employers re-collect it each January. QuickBooks Payroll has to reflect the WH-4 county per employee.</p>" },
    { term: "30-Day Safe Harbor", def: "<p>Under <strong>IC 6-3-2-27.5</strong> (effective 2024), the compensation of a <strong>nonresident employee who works 30 days or fewer in Indiana</strong> during the year is exempt from Indiana income tax and county LIT withholding. Relevant for traveling crews, sales reps, and out-of-state employees of Indiana logistics and manufacturing firms.</p>" },
    { term: "Flat State Income Tax", def: "<p>Indiana&rsquo;s individual adjusted-gross income tax is a <strong>single flat statewide rate &mdash; 2.95% for 2026</strong> (down from 3.00%), scheduled to fall to 2.90% in 2027. No brackets. Simple to model, but it sits underneath the county LIT layer, which is where most Indiana withholding errors actually happen.</p>" },
    { term: "Corporate AGI Tax", def: "<p>Indiana&rsquo;s <strong>corporate adjusted gross income tax is a flat 4.9%</strong> on Indiana-apportioned income. It is separate from the LIT withholding obligation on employees and from the sales tax; multi-state corporations need apportionment handled cleanly so the Indiana-source income is right.</p>" },
    { term: "Sales &amp; Use Tax (7%, no local)", def: "<p>Indiana levies a <strong>flat 7% statewide sales and use tax with no county or city add-ons</strong> anywhere in the state. A clean single rate compared with layered-tax states &mdash; but it still applies to taxable goods and services and must be configured in QuickBooks, collected, and remitted. <a href=\"/find-an-accountant/indiana/sales-tax-help/\">Indiana sales tax help &rarr;</a></p>" },
    { term: "Business Personal Property (Form 102/103)", def: "<p>Indiana taxes <strong>business tangible personal property</strong>, but for 2026 the <strong>exemption threshold rose to $2,000,000</strong> (IC 6-1.1-3-7.2): if a taxpayer&rsquo;s total business personal property in a county costs less than $2M on the assessment date, it is exempt &mdash; <strong>but the exemption must be declared on Form 102 or 103</strong>. TechBrot keeps the asset detail CPA/assessor-ready; the county return is filed by your CPA or the business. <a href=\"https://www.in.gov/dlgf/assessments/personal-property/\" rel=\"noopener nofollow\">DLGF personal property &rarr;</a></p>" },
    { term: "Multi-State Nexus", def: "<p>Because Indiana is the <strong>Crossroads of America</strong> &mdash; a national trucking, 3PL, and fulfillment core &mdash; goods routinely move into other states, triggering <strong>sales-tax and income-tax nexus</strong> elsewhere. For Indiana logistics, manufacturing, and e-commerce shippers, scoping where other states&rsquo; obligations are triggered is often the most valuable part of the engagement.</p>" },
  ],

  // DELIVERY — direct vs partner practices (buyer-card routing split).
  // (H2: What we deliver in Indiana. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service by TechBrot&rsquo;s lead practice.", lede: "Most Indiana engagements &mdash; bookkeeping, QuickBooks work, payroll, county LIT withholding, and sales-tax tracking &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working under the TechBrot brand with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Indiana payroll &mdash; 92-county LIT withholding by WH-4", "Sales-tax tracking at the flat 7% rate", "Business personal-property asset detail (Form 102/103 posture)", "Remote delivery, secure, encrypted access"], cta: "Browse Indiana services &rarr;", href: "#in-ecosystem" },
    { eyebrow: "02 &middot; Curated Indiana partners", heading: "Trusted local Indiana partners.", lede: "When in-person presence in the Indianapolis metro, Fort Wayne, or the Ohio River cities, county-assessor coordination, or local CPA hand-off matters, engagements route to a vetted Indiana accounting practice running under TechBrot&rsquo;s standards.", list: ["Indiana-based independent practice", "County LIT and WH-4 withholding fluency", "Business personal-property and assessor coordination", "Local CPA and EA hand-off", "Indiana DOR and IRS audit-support coordination", "Manufacturing and logistics industry depth", "Same platform standards as direct delivery"], cta: "See Indiana partner status &rarr;", href: "#in-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Indiana or federal returns, the county LIT return, or the business personal-property return. For Indiana DOR filings, audit representation, and county assessor matters, we coordinate with your existing Indiana CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Indiana accounting different. + 4 H3s)
  context: [
    { category: "County Income Tax", heading: "The 92-county LIT is where Indiana withholding goes wrong.", body: ["Indiana&rsquo;s flat 2.95% state income tax is the easy part. Underneath it, <strong>all 92 counties levy their own Local Income Tax (LIT)</strong>, each at its own rate, and the rate that applies is set by each employee&rsquo;s <strong>county of residence on January 1</strong> &mdash; or principal Indiana work county for out-of-state residents.", "<strong>Form WH-4</strong> establishes the county; a move or a work-county change mid-year requires a fresh WH-4. Get the county wrong and withholding is wrong for the year. We configure QuickBooks Payroll per employee by county and rebuild it when WH-4s change. <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">Indiana county income tax help &rarr;</a>"] },
    { category: "Flat, Clean State Taxes", heading: "Simple rates &mdash; still must be configured and remitted.", body: ["Indiana runs a <strong>flat 2.95% individual rate, a flat 4.9% corporate rate, and a flat 7% sales tax with no local add-ons</strong> anywhere. Compared with layered-tax states, sales-tax setup in QuickBooks is genuinely simpler &mdash; one rate, statewide.", "But &ldquo;simple&rdquo; is not &ldquo;nothing&rdquo;: the 7% still applies to taxable goods and services and must be collected and remitted, and the corporate rate needs clean Indiana apportionment for multi-state firms. <a href=\"/find-an-accountant/indiana/sales-tax-help/\">Indiana sales tax help &rarr;</a>"] },
    { category: "Business Personal Property", heading: "The $2M exemption still has to be declared.", body: ["For 2026 the <strong>business personal-property exemption threshold rose to $2,000,000</strong> (IC 6-1.1-3-7.2). If total business personal property in a county costs less than $2M on the assessment date, it is exempt &mdash; <strong>but only if it is declared on Form 102 or 103</strong>; the exemption is not automatic.", "TechBrot tracks the asset detail in QuickBooks and keeps it CPA- and assessor-ready so the Form 102/103 filing posture is clean. <strong>We do not file the county return as agent</strong> &mdash; your CPA or the business files it."] },
    { category: "Crossroads Economy", heading: "Logistics, manufacturing &mdash; and multi-state nexus.", body: ["Indiana is the <strong>Crossroads of America</strong> and the <strong>most manufacturing-intensive state by share of GDP</strong>: trucking, 3PL warehousing, fulfillment, autos and RVs, steel, and pharma. The FedEx Indianapolis hub corridor moves goods nationwide.", "That economic profile means <strong>multi-state nexus</strong> &mdash; per-lane and per-customer profitability, fleet depreciation, owner-operator 1099s, and other states&rsquo; sales-tax obligations triggered where goods land. Scoping that nexus is often the highest-value part of the work."] },
  ],
  contextNote: "Indiana operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply to your business &mdash; which counties you withhold for, whether the $2M exemption applies, and where multi-state nexus is triggered.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What an Indiana engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Indianapolis 3PL / logistics", heading: "A growing 3PL with drivers in five counties and no per-lane visibility.", body: ["<strong>Situation.</strong> A Marion County third-party logistics firm ran all revenue through a single account, withheld county LIT at one rate for drivers living across five counties, and had no view of per-lane or per-customer margin. Goods were shipping into three neighboring states with no nexus review.", "<strong>What we did.</strong> Rebuilt the QuickBooks file for per-lane and per-customer profitability, corrected <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county LIT withholding</a> per driver by WH-4 county of residence, separated owner-operator 1099s and fleet depreciation, and scoped multi-state sales-tax nexus for the lanes that crossed state lines.", "<strong>Outcome.</strong> Lane-level margin visible for the first time; withholding correct per county; the multi-state nexus exposure quantified for the client&rsquo;s CPA."], cta: "Indiana county income tax help &rarr;", href: "/find-an-accountant/indiana/county-income-tax-help/" },
    { tag: "Composite &middot; Northeast Indiana manufacturer", heading: "A mid-size manufacturer unsure whether the $2M exemption applied.", body: ["<strong>Situation.</strong> An Allen County manufacturer had no clean fixed-asset detail, jobs rolled into one revenue account with no WIP, and the owner did not know whether the 2026 business personal-property exemption applied &mdash; or that it had to be declared.", "<strong>What we did.</strong> Built job costing and a WIP schedule in QuickBooks Enterprise, reconstructed the <a href=\"/find-an-accountant/indiana/industries/manufacturing/\">fixed-asset register</a>, and prepared the business personal-property asset detail so the Form 102/103 posture was clean and assessor-ready for the CPA who files it.", "<strong>Outcome.</strong> Job-level margin visible; the personal-property position documented and CPA-ready; standard vs. actual cost finally meaningful."], cta: "Indiana manufacturing accounting &rarr;", href: "/find-an-accountant/indiana/industries/manufacturing/" },
    { tag: "Composite &middot; Hamilton County multi-site employer", heading: "A Carmel-and-Indianapolis services firm withholding the wrong county for half its staff.", body: ["<strong>Situation.</strong> A firm with offices in Carmel (Hamilton County) and Indianapolis (Marion County) was withholding LIT at one county&rsquo;s rate for everyone, with stale WH-4s and several employees who had moved counties mid-year.", "<strong>What we did.</strong> Re-collected <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">WH-4 forms</a>, set each employee&rsquo;s county of residence as of January 1 in QuickBooks Payroll, corrected the withholding going forward, and documented the per-county setup for the year-end CPA handoff.", "<strong>Outcome.</strong> Withholding correct per employee by county; a clean WH-4 process every January; no year-end reconciliation scramble."], cta: "Indiana QuickBooks ProAdvisor &rarr;", href: "/find-an-accountant/indiana/quickbooks-accountant/" },
  ],
  scenariosNote: "Three composite scenarios drawn from common Indiana engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; county LIT withholding, the $2M personal-property posture, multi-state nexus &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Indiana outcomes.)
  outcomes: [
    { figure: "5 counties", detail: "of driver LIT withholding corrected to each employee&rsquo;s county of residence by WH-4", meta: "Representative &middot; logistics LIT cleanup" },
    { figure: "WIP", detail: "schedule and job costing built so plant-level margin was finally visible", meta: "Representative &middot; manufacturer rebuild" },
    { figure: "$2M", detail: "business personal-property exemption posture documented and made assessor-ready", meta: "Representative &middot; Form 102/103 detail" },
    { figure: "$0", detail: "missed sales-tax periods after the flat 7% tracking was rebuilt in QuickBooks", meta: "Representative &middot; sales-tax setup" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Indiana &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you which county&rsquo;s LIT rate applies to a driver who moved in March, whether your business personal property cleared the $2M exemption in every county you operate in, or where shipping into a neighboring state just created a sales-tax obligation. For Indiana businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Indiana-specific tax-position work in coordination with your CPA. By application. Best fit: Indiana manufacturers, logistics firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards. (H2: Industry-specific accounting for Indiana's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Manufacturing", href: "/find-an-accountant/indiana/industries/manufacturing/", body: "Indiana is the most manufacturing-intensive state by share of GDP &mdash; autos and parts, RVs, steel, machinery, pharma. <strong>Job costing</strong>, standard vs. actual cost, inventory and WIP, multi-plant reporting, and the business personal-property posture under the $2M exemption." },
    { num: "02", name: "Logistics &amp; Distribution", href: "/find-an-accountant/indiana/industries/logistics-distribution/", body: "The Crossroads of America &mdash; trucking, 3PL warehousing, fulfillment, the FedEx Indianapolis hub corridor. <strong>Per-lane and per-customer profitability</strong>, fleet depreciation, owner-operator 1099s, and multi-state nexus where goods move." },
    { num: "03", name: "Agriculture", href: "/find-an-accountant/indiana/industries/agriculture/", body: "A top-tier ag state &mdash; corn, soybeans, hogs, poultry, dairy. <strong>Cash vs. accrual</strong>, crop and livestock enterprise accounting, government-program and co-op payments, Section 179 equipment depreciation, and family-farm succession bookkeeping." },
    { num: "04", name: "Construction", href: "/find-an-accountant/indiana/industries/construction/", body: "Builders riding Central-Indiana growth &mdash; Hamilton County and Indianapolis sprawl. <strong>Job costing, WIP, and retainage</strong>, AIA billing, subcontractor 1099s, prevailing-wage and certified payroll on public work, CPA-ready job profitability." },
    { num: "05", name: "Real Estate", href: "/find-an-accountant/indiana/industries/real-estate/", body: "Investors, brokerages, and property managers across the Indy metro and college towns. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, short-term rental tracking, and the county-LIT wrinkle tied to owner residency." },
    { num: "06", name: "Healthcare", href: "/find-an-accountant/indiana/industries/healthcare/", body: "Physician, dental, and specialty practices in the IU Health, Parkview, and Deaconess ecosystems. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll with county LIT withholding." },
  ],
  industriesNote: "Industries not listed &mdash; e-commerce, SaaS, professional services, hospitality &mdash; are served via <a href=\"/accounting/industries/\">our global industry pages</a>. Local-intent pages exist only where Indiana creates genuinely distinct requirements.",

  // SERVICES — 6 money pages (buyer-card routing). (H2: Find the right service... + 6 H3s)
  services: [
    { eyebrow: "Service 01", name: "Indiana Bookkeeping Services", href: "/find-an-accountant/indiana/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Indiana businesses. Bank reconciliation, county LIT withholding review, sales-tax sub-reconciliation, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Indiana bookkeeping &rarr;" },
    { eyebrow: "Service 02", name: "Indiana QuickBooks ProAdvisor", href: "/find-an-accountant/indiana/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Indiana businesses. Covers QBO, Desktop, Enterprise, and Payroll across all Indiana industry types. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Indiana ProAdvisor &rarr;" },
    { eyebrow: "Service 03", name: "Indiana County Income Tax Help", href: "/find-an-accountant/indiana/county-income-tax-help/", body: "The genuinely Indiana-distinct service &mdash; 92-county LIT withholding configured per employee by WH-4 county of residence, the 30-day safe harbor, and multi-county employer setup in QuickBooks Payroll. <a href=\"/quickbooks/payroll/\">National payroll overview &rarr;</a>", starting: "From $300", cadence: "Setup + ongoing", cta: "Indiana county income tax &rarr;" },
    { eyebrow: "Service 04", name: "Indiana Sales Tax Help", href: "/find-an-accountant/indiana/sales-tax-help/", body: "The flat 7% statewide rate configured, collected, and remitted &mdash; with multi-state nexus review for Indiana logistics, manufacturing, and e-commerce shippers selling across state lines. <a href=\"/accounting/sales-tax-compliance/\">National overview &rarr;</a>", starting: "From $250/mo", cadence: "Recurring + nexus review", cta: "Indiana sales tax &rarr;" },
    { eyebrow: "Service 05", name: "Indiana QuickBooks Cleanup", href: "/find-an-accountant/indiana/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong county LIT withholding, sales-tax misconfiguration, missing fixed-asset detail, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Indiana cleanup &rarr;" },
    { eyebrow: "Service 06", name: "Indiana QuickBooks Setup", href: "/find-an-accountant/indiana/quickbooks-setup/", body: "Professional QuickBooks implementation for Indiana businesses &mdash; chart of accounts for your industry, county LIT payroll configuration, flat 7% sales-tax setup, and business personal-property asset tracking. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Indiana setup &rarr;" },
  ],
  servicesNote: "Additional Indiana services: <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">Cleanup Bookkeeping</a> &middot; <a href=\"/find-an-accountant/indiana/quickbooks-reconciliation/\">QuickBooks Reconciliation</a> &middot; <a href=\"/find-an-accountant/indiana/quickbooks-migration/\">QuickBooks Migration</a> &middot; <a href=\"/find-an-accountant/indiana/quickbooks-training/\">QuickBooks Training</a> &middot; <a href=\"/find-an-accountant/indiana/quickbooks-error-fixes/\">QuickBooks Error Fixes</a> &middot; <a href=\"/find-an-accountant/indiana/virtual-bookkeeper/\">Virtual Bookkeeper</a> &middot; <a href=\"/find-an-accountant/indiana/small-business-accountant/\">Small Business Accountant</a> &middot; <a href=\"/find-an-accountant/indiana/pricing/\">Indiana Pricing</a>",

  // ECOSYSTEM — 6 clusters. (H2: Every Indiana page in one place. + 6 cluster H3s)
  ecosystem: [
    { eyebrow: "Cluster 01", heading: "Indiana money cluster", lede: "Primary ranking and conversion targets &mdash; the pages that capture &ldquo;quickbooks accountant near me&rdquo; and &ldquo;bookkeeper near me&rdquo; in Indiana.", links: [
      { href: "/find-an-accountant/indiana/quickbooks-accountant/", label: "Indiana QuickBooks Accountant / ProAdvisor", tag: "&#9733; umbrella" },
      { href: "/find-an-accountant/indiana/small-business-accountant/", label: "Indiana Small Business Accountant" },
      { href: "/find-an-accountant/indiana/bookkeeping-services/", label: "Indiana Bookkeeping Services" },
      { href: "/find-an-accountant/indiana/virtual-bookkeeper/", label: "Indiana Virtual Bookkeeper" },
      { href: "/find-an-accountant/indiana/speak-to-a-proadvisor/", label: "Speak to an Indiana ProAdvisor", tag: "BOFU" },
      { href: "/find-an-accountant/indiana/pricing/", label: "Indiana Pricing &amp; Engagement Fees" },
    ] },
    { eyebrow: "Cluster 02", heading: "Indiana QuickBooks spokes", lede: "Indiana-specific QuickBooks ProAdvisor engagements &mdash; each with a dedicated page under the money cluster.", links: [
      { href: "/find-an-accountant/indiana/quickbooks-setup/", label: "Indiana QuickBooks Setup" },
      { href: "/find-an-accountant/indiana/quickbooks-cleanup/", label: "Indiana QuickBooks Cleanup" },
      { href: "/find-an-accountant/indiana/quickbooks-reconciliation/", label: "Indiana QuickBooks Reconciliation" },
      { href: "/find-an-accountant/indiana/quickbooks-migration/", label: "Indiana QuickBooks Migration" },
      { href: "/find-an-accountant/indiana/quickbooks-training/", label: "Indiana QuickBooks Training" },
      { href: "/find-an-accountant/indiana/quickbooks-error-fixes/", label: "Indiana QuickBooks Error Fixes" },
    ] },
    { eyebrow: "Cluster 03", heading: "Indiana bookkeeping spokes", lede: "Recurring and project bookkeeping engagements scoped to Indiana operational reality.", links: [
      { href: "/find-an-accountant/indiana/monthly-bookkeeping/", label: "Indiana Monthly Bookkeeping" },
      { href: "/find-an-accountant/indiana/cleanup-bookkeeping/", label: "Indiana Cleanup &amp; Catch-Up Bookkeeping" },
      { href: "/find-an-accountant/indiana/urgent-bookkeeping/", label: "Indiana Urgent Bookkeeping" },
    ] },
    { eyebrow: "Cluster 04", heading: "Indiana tax cluster", lede: "Standalone references for the genuinely Indiana-specific tax stack &mdash; the 92-county LIT, the flat 7% sales tax, and tax-notice help.", links: [
      { href: "/find-an-accountant/indiana/county-income-tax-help/", label: "Indiana County Income Tax Help (92-county LIT &middot; WH-4)" },
      { href: "/find-an-accountant/indiana/sales-tax-help/", label: "Indiana Sales Tax Help (flat 7% &middot; no local)" },
      { href: "/find-an-accountant/indiana/state-tax-notice-help/", label: "Indiana State Tax Notice Help (DOR)" },
      { href: "/find-an-accountant/indiana/business-tax-problems/", label: "Indiana Business Tax Problems" },
    ] },
    { eyebrow: "Cluster 05", heading: "Indiana industries", lede: "Vertical-specific accounting depth for Indiana&rsquo;s leading sectors &mdash; only those with genuine Indiana-specific requirements have local pages.", links: [
      { href: "/find-an-accountant/indiana/industries/", label: "Indiana Industries Index" },
      { href: "/find-an-accountant/indiana/industries/manufacturing/", label: "Indiana Manufacturing Accounting" },
      { href: "/find-an-accountant/indiana/industries/logistics-distribution/", label: "Indiana Logistics &amp; Distribution Accounting" },
      { href: "/find-an-accountant/indiana/industries/agriculture/", label: "Indiana Agriculture Accounting" },
      { href: "/find-an-accountant/indiana/industries/construction/", label: "Indiana Construction Accounting" },
      { href: "/find-an-accountant/indiana/industries/real-estate/", label: "Indiana Real Estate Accounting" },
      { href: "/find-an-accountant/indiana/industries/healthcare/", label: "Indiana Healthcare Practice Accounting" },
    ] },
    { eyebrow: "Cluster 06", heading: "Indiana cities", lede: "Local pages for Indiana&rsquo;s primary metros &mdash; the Indianapolis core, the suburbs, and the regional hubs. Full 8-city index below.", links: [
      { href: "/find-an-accountant/indiana/cities/", label: "Indiana Cities Index" },
      { href: "/find-an-accountant/indiana/cities/indianapolis/", label: "Indianapolis (Marion County)" },
      { href: "/find-an-accountant/indiana/cities/fort-wayne/", label: "Fort Wayne (Allen County)" },
      { href: "/find-an-accountant/indiana/cities/evansville/", label: "Evansville (Vanderburgh County)" },
      { href: "/find-an-accountant/indiana/cities/south-bend/", label: "South Bend (St. Joseph County)" },
      { href: "/find-an-accountant/indiana/cities/carmel/", label: "Carmel (Hamilton County)" },
      { href: "/find-an-accountant/indiana/cities/fishers/", label: "Fishers (Hamilton County)" },
      { href: "/find-an-accountant/indiana/cities/bloomington/", label: "Bloomington (Monroe County)" },
      { href: "/find-an-accountant/indiana/cities/hammond/", label: "Hammond (Lake County)" },
    ] },
  ],
  ecosystemNote: "Indiana pages publish on a rolling cadence. Links lead to published pages as each goes live.",

  // PRICING — 8-row table. (H2: Fixed-fee starting ranges for Indiana engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/indiana/monthly-bookkeeping/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, county LIT review, sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and county/entity complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/indiana/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, county LIT payroll config, flat 7% sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/indiana/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong-county LIT and sales-tax misconfiguration are common fixes" },
    { svc: "Sales tax help", href: "/find-an-accountant/indiana/sales-tax-help/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "Flat 7%, no local &middot; multi-state nexus for shippers" },
    { svc: "County income tax (LIT) help", href: "/find-an-accountant/indiana/county-income-tax-help/", range: "From $300", cadence: "Setup + ongoing", notes: "92-county LIT withholding by WH-4 &middot; 30-day safe harbor &middot; multi-county employers" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "County LIT withholding per employee by WH-4 county of residence" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Indiana-aware strategic finance; multi-state nexus and tax-position planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, number of counties withheld for, industry specifics, and multi-state exposure. TechBrot does not file Indiana returns, the county LIT return, or the business personal-property return; it keeps the books and coordinates with your CPA. <a href=\"/find-an-accountant/indiana/pricing/\">Full Indiana pricing detail &rarr;</a>",

  // CITIES + COUNTIES. (H2: Serving Indiana businesses statewide. + 2 H3s)
  cities: [
    { href: "/find-an-accountant/indiana/cities/indianapolis/", name: "Indianapolis", county: "Marion County" },
    { href: "/find-an-accountant/indiana/cities/fort-wayne/", name: "Fort Wayne", county: "Allen County" },
    { href: "/find-an-accountant/indiana/cities/evansville/", name: "Evansville", county: "Vanderburgh County" },
    { href: "/find-an-accountant/indiana/cities/south-bend/", name: "South Bend", county: "St. Joseph County" },
    { href: "/find-an-accountant/indiana/cities/carmel/", name: "Carmel", county: "Hamilton County" },
    { href: "/find-an-accountant/indiana/cities/fishers/", name: "Fishers", county: "Hamilton County" },
    { href: "/find-an-accountant/indiana/cities/bloomington/", name: "Bloomington", county: "Monroe County" },
    { href: "/find-an-accountant/indiana/cities/hammond/", name: "Hammond", county: "Lake County" },
  ],
  countyProse: "TechBrot serves all 92 Indiana counties &mdash; <strong>Marion</strong> (Indianapolis) and the Central-Indiana donut counties <strong>Hamilton</strong> (Carmel, Fishers), Hendricks, Johnson, Boone, Hancock, and Morgan; <strong>Allen</strong> (Fort Wayne) in the Northeast; <strong>Lake</strong> and Porter in Northwest Indiana&rsquo;s &ldquo;Region&rdquo;; <strong>St. Joseph</strong> (South Bend) in Michiana; <strong>Vanderburgh</strong> (Evansville) on the Ohio River; and <strong>Monroe</strong> (Bloomington) in the south &mdash; plus every county in between. Remote, fixed-fee service reaches the whole state; each county sets its own Local Income Tax rate, which we confirm against the Indiana DOR county-rate list.",
  citiesNote: "Don&rsquo;t see your city? All 92 Indiana counties are served via remote engagement delivery. <a href=\"/find-an-accountant/indiana/cities/\">Full cities index &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every Indiana engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (IN-localized). (H2: Trusted Indiana partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Indiana tax fluency", detail: "92-county LIT withholding by WH-4, the 30-day safe harbor, flat-rate sales-tax setup, and Indiana DOR coordination." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Job costing and WIP for manufacturing and construction, per-lane profitability for logistics, and multi-state nexus for shippers." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards (IN-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Indiana operational depth", body: "92-county LIT withholding by WH-4 county of residence, the 30-day safe harbor, flat 7% sales-tax setup, and the $2M business personal-property posture. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-county, multi-state Indiana engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Indiana business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Indiana businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Indiana CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Indiana / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "92-county LIT withholding setup", us: "<strong>Per employee by WH-4 county of residence</strong>", cpa: "Usually; varies by firm", remote: "Often one rate for everyone &mdash; wrong", winner: "us" },
    { dim: "Flat 7% sales-tax config", us: "<strong>Configured, collected, remitted</strong>", cpa: "Varies; not their primary focus", remote: "Sometimes mishandled or ignored", winner: "us" },
    { dim: "Business personal-property posture", us: "<strong>Asset detail kept Form 102/103-ready</strong>", cpa: "Files the county return; not in the books daily", remote: "Rarely tracked", winner: "us" },
    { dim: "Multi-state nexus for shippers", us: "<strong>Scoped as part of the engagement</strong>", cpa: "If they specialize in multi-state", remote: "Generally not handled", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Indiana DOR / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Indiana DOR filings, the county LIT and personal-property returns, and IRS representation, use a licensed Indiana CPA or EA. For QuickBooks operations, bookkeeping, county LIT withholding setup, flat 7% sales-tax compliance, and a clean business personal-property posture &mdash; TechBrot is built for that. Most Indiana clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Indiana .gov / official sources (from IN-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Indiana Department of Revenue (DOR)", href: "https://www.in.gov/dor/", detail: "Authoritative source for the flat state income tax, the flat 7% sales tax, employer withholding, and Local Income Tax administration." },
    { name: "Indiana DOR &mdash; County Tax Rates by Year", href: "https://www.in.gov/dor/i-am-a/individual/individual-income-county-tax-rates-by-year/", detail: "The official, current per-county Local Income Tax (LIT) rate list &mdash; the authority for any specific county rate; confirm here before withholding." },
    { name: "Indiana DOR &mdash; Departmental Notice #1", href: "https://www.in.gov/dor/files/dn01.pdf", detail: "The official current per-county LIT rate notice used for payroll withholding configuration." },
    { name: "Indiana DLGF &mdash; Personal Property", href: "https://www.in.gov/dlgf/assessments/personal-property/", detail: "Authoritative source for the business tangible personal-property exemption and Form 102/103 filing requirements." },
    { name: "Indiana DOR &mdash; Income Tax Bulletin #32 (Local Income Taxes)", href: "https://www.in.gov/dor/files/ib32.pdf", detail: "General information on Indiana Local Income Taxes &mdash; county-of-residence rules, WH-4, and the 30-day safe harbor." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 10 Q/A, Option C, answer-first, Indiana-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; no baseline question reworded (new page).
  // (H2: Indiana QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Indiana businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, county-income-tax and sales-tax tracking, and fractional CFO coordination to Indiana businesses statewide &mdash; directly through our lead practice, with trusted partner practices across Indiana. All 92 counties covered, from the Indianapolis metro to Fort Wayne, Evansville, South Bend, and the Northwest Indiana &ldquo;Region.&rdquo; Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Indiana&rsquo;s county Local Income Tax work for payroll?", a: "All 92 Indiana counties levy a Local Income Tax (LIT) on top of the flat 2.95% state rate, and each county sets its own rate. The rate that applies to an employee is determined by their county of residence on January 1 &mdash; or, for out-of-state residents, their principal Indiana work county on that date. Form WH-4 establishes the county, and a new WH-4 is needed when an employee moves or changes work county. QuickBooks Payroll has to be set per employee by county; confirm the current rate against the Indiana DOR county-rate list." },
    { q: "What is Indiana&rsquo;s sales tax rate, and is there a local sales tax?", a: "Indiana has a flat 7% statewide sales and use tax, and there is no local sales tax anywhere in the state &mdash; no county or city add-ons. That makes QuickBooks sales-tax setup simpler than in layered-tax states, but the 7% still applies to taxable goods and services and has to be configured, collected, and remitted. If you ship across state lines, multi-state nexus is usually the bigger question, and we scope that with you." },
    { q: "Do I still owe business personal-property tax with the new $2M exemption?", a: "For 2026 the business personal-property exemption threshold rose to $2,000,000. If your total business personal property in a county cost less than $2M on the assessment date, it is exempt &mdash; but the exemption is not automatic; it must be declared on Form 102 or 103. TechBrot keeps the asset detail in QuickBooks CPA- and assessor-ready so the filing posture is clean. We do not file the county return as agent &mdash; your CPA or the business files it." },
    { q: "What is the 30-day safe harbor for nonresident employees?", a: "Under Indiana law (IC 6-3-2-27.5), the compensation of a nonresident employee who works 30 days or fewer in Indiana during the year is exempt from Indiana income tax and county LIT withholding. It matters for traveling crews, sales reps, and out-of-state employees of Indiana logistics and manufacturing firms &mdash; we configure QuickBooks Payroll so those employees are handled correctly." },
    { q: "What QuickBooks versions does TechBrot support for Indiana businesses?", a: "All current versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QuickBooks Online suits most Indiana small businesses and professional-services firms; Enterprise is common among Indiana manufacturers, RV and logistics firms, and larger construction contractors that need inventory, job costing, and multi-plant reporting." },
    { q: "Does TechBrot file Indiana state or county tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Indiana or federal returns, the county LIT return, the sales-tax return, or the business personal-property return, and we do not represent clients before the Indiana Department of Revenue. We deliver clean, CPA-ready bookkeeping and coordinate with your Indiana CPA or EA, who handles filing and representation." },
    { q: "How does an Indiana engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Indiana operational context &mdash; which counties you withhold for, sales-tax and nexus exposure, business personal-property posture &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Indiana bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; county income tax (LIT) help from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee and county count, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
    { q: "Can I use my Indiana CPA for taxes and TechBrot for bookkeeping?", a: "Yes &mdash; that&rsquo;s the standard model. TechBrot handles operational bookkeeping, QuickBooks configuration, county LIT withholding, flat 7% sales-tax compliance, and the business personal-property asset detail; your Indiana CPA handles filing, the county returns, and DOR or IRS representation. Year-end CPA handoff is included in every recurring Indiana engagement." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Indiana practice", detail: "All 92 counties served &middot; Indianapolis metro, Fort Wayne, Evansville, South Bend, Carmel, Fishers, Bloomington, Hammond &middot; Industries: manufacturing, logistics &amp; distribution, agriculture, construction, real estate, healthcare" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Indiana statutory references reviewed against Indiana DOR and DLGF primary sources &middot; Per-county LIT rates verified against the DOR county-rate list and never quoted as a specific percentage &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. (H2: Multi-state Indiana businesses. + 4 H3s)
  related: [
    { name: "Ohio", body: "Indiana businesses operating east into the Dayton and Cincinnati corridors &mdash; Ohio CAT (commercial activity tax), municipal income tax, multi-state payroll, and sales-tax nexus where goods cross the line.", cta: "ProAdvisors in Ohio &rarr;" },
    { name: "Michigan", body: "Michiana and RV-corridor businesses spanning the Indiana&ndash;Michigan line near South Bend and Elkhart &mdash; Michigan multi-state payroll, sales tax, and nexus scoping.", cta: "ProAdvisors in Michigan &rarr;" },
    { name: "Illinois", body: "Northwest Indiana &ldquo;Region&rdquo; businesses tied to the Chicago metro &mdash; cross-border payroll for Illinois-resident workers, Illinois sales tax, and Calumet-corridor multi-state nexus.", cta: "ProAdvisors in Illinois &rarr;" },
    { name: "Kentucky", body: "Evansville and Ohio River tri-state businesses operating south into Kentucky &mdash; Kentucky local occupational taxes, multi-state payroll, and sales-tax nexus across the river.", cta: "ProAdvisors in Kentucky &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/";
      // QAPage mainEntity from the first 5 aiSummary items (matches the visible 5-question block).
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, county income tax, and sales tax compliance for Indiana businesses across all 92 counties — from Indianapolis, Carmel, and Fishers to Fort Wayne, Evansville, South Bend, Bloomington, and Hammond. Built around the 92-county Local Income Tax withholding, the flat 2.95% state income tax, the flat 7% sales tax with no local add-ons, and the $2M business personal-property exemption.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-indiana.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-in-brief-text","#in-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, county income tax, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, 92-county Local Income Tax withholding, and flat 7% sales tax compliance for Indiana businesses across all 92 counties. Delivered directly by TechBrot's lead practice, with trusted partner practices in Indiana. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana or federal returns, the county LIT return, or the business personal-property return — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana","containsPlace":[
          {"@type":"City","name":"Indianapolis"},{"@type":"City","name":"Fort Wayne"},{"@type":"City","name":"Evansville"},{"@type":"City","name":"South Bend"},{"@type":"City","name":"Carmel"},{"@type":"City","name":"Fishers"},{"@type":"City","name":"Bloomington"},{"@type":"City","name":"Hammond"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana small and mid-sized businesses, manufacturers, logistics and distribution firms, agriculture operations, construction firms, real estate operators, and healthcare practices"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Indiana accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Indiana Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Indiana QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Indiana QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Indiana County Income Tax Help"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Indiana Sales Tax Help"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Indiana — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

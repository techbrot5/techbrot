/* /find-an-accountant/pennsylvania/ — t-state-pillar PILLAR. Pennsylvania is a CORE state built to the
 * 6-essentials depth (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup +
 * quickbooks-setup + bookkeeping-services); every absent service/industry ROUTES TO GLOBAL. PA is an
 * areaServed-ONLY state: TechBrot serves Pennsylvania remotely from the Delaware HQ (minutes across the
 * border), so this pillar carries NO street address, NO PostalAddress, NO geo, NO LocalBusiness node, and
 * NO hasMap — a fabricated PA local address would breach the honesty contract (no state carries a
 * street address — all areaServed-only). Service + areaServed (Commonwealth of Pennsylvania + named metros) only; provider = #organization.
 *
 * CORE-STATE PILLAR PATTERN (PA is the FIRST core state — sets the exemplar for NJ/MD/VA/OH/MI/GA/NC/AZ/TN/
 * WA/CO/MA): every t-state-pillar.njk section is {% if %}-guarded, so a section is OMITTED by withholding its
 * data field. This pillar OMITS `ecosystem` (the full-anchor "every page in one place" directory — PA has only
 * 6 pages; `services` + `pricing` cover it). `industries` cards link to GLOBAL /accounting/industries/*; the
 * 6 SERVICE cards are the 5 PA children + the umbrella; `cities` carry name+county with NO href (metros named
 * for areaServed, no links to non-existent city pages); pricing rows route to the 5 children + global pages.
 *
 * PENNSYLVANIA FACTS (verified 2026-06-26 against PA DOR, PA DCED, City of Philadelphia — see _build/strategy/PA-FACTS.md):
 *  · Personal income tax — flat 3.07% (single statewide rate since 2004, no brackets).
 *  · Local Earned Income Tax (EIT) — Act 32: municipalities + school districts levy a local EIT on top of the
 *    state rate; each sets its own rate (varies; framed QUALITATIVELY, never a specific municipal %). Collected by
 *    Tax Collection Districts (TCDs); PSD codes identify resident + work municipality; "higher-of" withholding rule
 *    (resident total rate vs work-location nonresident rate); single combined quarterly return.
 *  · Local Services Tax (LST) — up to $52/year statutory max where levied; withheld pro-rata at the worksite.
 *  · Corporate Net Income Tax (CNIT) — 7.49% for 2026, phasing down to 4.99% by 2031.
 *  · Sales & use tax — 6% state; +1% Allegheny County (7%, Pittsburgh); +2% Philadelphia (8%); 6% elsewhere.
 *  · Philadelphia (OUTSIDE Act 32, city-administered, rates change each July 1): Wage Tax 3.74% resident /
 *    3.43% nonresident (eff. 2025-07-01); Net Profits Tax 3.74% / 3.43%; BIRT 5.71% net income + 1.410 mills
 *    gross receipts ($100k exclusion eliminated TY2025+).
 *  · Geography — 67 counties; 6th-largest state economy; borders Delaware (max address credibility).
 *
 * HONESTY: TechBrot is an independent Certified QuickBooks ProAdvisor + bookkeeping firm, NOT affiliated with
 * Intuit. It does NOT file Pennsylvania or federal returns, the local EIT return, the LST, the Philadelphia
 * Wage/NPT/BIRT returns, or the sales-tax return as agent; it keeps the books and coordinates with the client's
 * CPA/EA and the TCD collector / City of Philadelphia. Reviews are ONLY the 2 real Clutch reviews (Heidi
 * Schubert, Barbara Best) — no invented reviewers, no AggregateRating. Outcomes/scenarios are explicitly
 * representative composites — never real-client claims. No founder/personal name in visible content; David
 * Westgate appears only as the named lead ProAdvisor/operator. Municipal EIT rates and Philadelphia city rates
 * are framed qualitatively / as "current as of the review date" and never quoted as a fixed municipal %. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — dense block, sits below the in-brief + credentials (2026-06-26 founder reorder). (H2: TechBrot in Pennsylvania, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Pennsylvania bookkeeping, QuickBooks setup, cleanup, payroll, and sales-tax tracking to Pennsylvania businesses across <strong>all 67 counties</strong> &mdash; from Philadelphia and Pittsburgh to the Lehigh Valley, Harrisburg, Lancaster, Erie, and Scranton. Our Delaware headquarters sits minutes from the Pennsylvania line. Pennsylvania&rsquo;s state income tax is simple on its face &mdash; a <strong>flat 3.07%</strong> with no brackets &mdash; but the operational work lives in the layers underneath: the <strong>Act 32 local Earned Income Tax (EIT)</strong>, levied by municipalities and school districts and withheld by <strong>PSD code</strong> under the &ldquo;higher-of&rdquo; rule; the <strong>Local Services Tax (LST)</strong> at the worksite; and <strong>Philadelphia&rsquo;s entirely separate city taxes</strong> &mdash; the Wage Tax, Net Profits Tax, and Business Income &amp; Receipts Tax (BIRT). Sales tax runs <strong>6% statewide, 7% in Allegheny County, and 8% in Philadelphia</strong>, so QuickBooks setup hinges on where each sale is sourced. The <strong>corporate net income tax is 7.49% for 2026</strong>, on a phasedown to 4.99% by 2031. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. Honest scope: we do not file Pennsylvania returns, the local EIT return, the LST, or Philadelphia&rsquo;s city-tax returns &mdash; we keep the books and coordinate with your CPA and the local tax collector.",

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
    { value: "67", label: "Pennsylvania counties served &mdash; Philadelphia to Pittsburgh to Erie" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "3.07%", label: "Flat Pennsylvania personal income tax &mdash; a single statewide rate with no brackets, in effect since 2004" },
    { figure: "Act 32", label: "Local Earned Income Tax &mdash; municipalities and school districts each levy their own EIT, withheld by PSD code under the &ldquo;higher-of&rdquo; rule" },
    { figure: "7.49%", label: "Corporate net income tax for 2026 &mdash; on a statutory phasedown to 4.99% by 2031" },
    { figure: "6 / 7 / 8%", label: "Sales tax &mdash; 6% statewide, 7% in Allegheny County (Pittsburgh), 8% in Philadelphia; QuickBooks setup hinges on where the sale is sourced" },
    { figure: "$52", label: "Local Services Tax statutory maximum per year where levied &mdash; withheld pro-rata at the worksite" },
    { figure: "Philly", label: "Philadelphia runs its own Wage, Net Profits, and BIRT taxes outside Act 32 &mdash; with rates that change every July 1" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Pennsylvania, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Pennsylvania businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, local-tax and sales-tax tracking, and fractional CFO coordination to Pennsylvania businesses across all 67 counties.</strong> Coverage spans Philadelphia and the suburban collar counties, Pittsburgh and Allegheny County, the Lehigh Valley distribution corridor, Harrisburg, Lancaster, Erie, and the Scranton/Wilkes-Barre region. Service is remote-first from our Delaware headquarters, minutes across the Pennsylvania border. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Pennsylvania&rsquo;s Act 32 local Earned Income Tax (EIT) affect my payroll?", a: "On top of the flat 3.07% state income tax, <strong>Pennsylvania municipalities and school districts levy a local Earned Income Tax (EIT), and each sets its own rate.</strong> Under <strong>Act 32</strong>, collection is consolidated into Tax Collection Districts, and employers withhold by <strong>PSD code</strong> &mdash; a six-digit code identifying each employee&rsquo;s resident and work-location municipality. The <strong>&ldquo;higher-of&rdquo; rule</strong> applies: for a Pennsylvania-resident employee, you withhold at the higher of their resident total EIT rate or the work-location non-resident rate. Employers also withhold the <strong>Local Services Tax (LST)</strong> at the worksite and file a single combined quarterly return. We configure QuickBooks Payroll by PSD code so withholding is right &mdash; confirm current rates on the PA DCED lookup." },
    { q: "What is Pennsylvania&rsquo;s sales tax, and how does it change QuickBooks setup?", a: "Pennsylvania&rsquo;s sales and use tax is <strong>6% statewide, with two local add-ons: +1% in Allegheny County (7% in Pittsburgh) and +2% in Philadelphia (8%)</strong>. Everywhere else it is a flat 6%. Because the rate depends on where a sale is sourced, <strong>QuickBooks sales-tax setup has to handle the 6% / 7% / 8% split</strong> &mdash; especially for businesses selling into Pittsburgh or Philadelphia, or shipping across the state. For multi-state sellers, we also scope where other states&rsquo; sales-tax nexus is triggered." },
    { q: "How are Philadelphia businesses taxed differently?", a: "Philadelphia runs <strong>its own city taxes outside the Act 32 system</strong>, and the rates change each July 1. A Philadelphia business may owe the <strong>Wage Tax</strong> on employee compensation (3.74% resident / 3.43% non-resident as of July 2025), the <strong>Net Profits Tax (NPT)</strong> on unincorporated business profits, and the <strong>Business Income &amp; Receipts Tax (BIRT)</strong> &mdash; a net-income portion (5.71%) plus a gross-receipts portion (1.410 mills). The $100,000 gross-receipts exclusion was eliminated beginning tax year 2025, so essentially every business with Philadelphia activity now files BIRT. We track these in the books and coordinate the filings with your CPA; always confirm current rates with the City of Philadelphia." },
    { q: "Does TechBrot file Pennsylvania taxes?", a: "<strong>No.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file Pennsylvania or federal returns, the local EIT return, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT returns, or the sales-tax return, and we do not represent clients before the Pennsylvania Department of Revenue or the City of Philadelphia</strong>. Engagements start with a <strong>free 30-minute discovery call</strong> and a <strong>written fixed-fee scope within 3 business days</strong>. We deliver clean, CPA-ready bookkeeping, configure Act 32 EIT and Philadelphia city-tax tracking, and coordinate with your existing Pennsylvania CPA or EA, who files." },
  ],

  // STATE GLOSSARY — the PA terms that matter. (H2: The Pennsylvania terms that matter…)
  stateTerms: [
    { term: "Act 32 &amp; the Local EIT", def: "<p><strong>Act 32</strong> is the Pennsylvania law that consolidated local <strong>Earned Income Tax (EIT)</strong> collection into county-based <strong>Tax Collection Districts (TCDs)</strong>. Municipalities and school districts levy the EIT on top of the flat 3.07% state rate &mdash; <strong>each sets its own rate</strong> &mdash; and employers withhold and remit it on a single combined quarterly return. Confirm rates on the <a href=\"https://dced.pa.gov/local-government/local-income-tax-information/\" rel=\"noopener nofollow\">PA DCED lookup</a>.</p>" },
    { term: "PSD Code", def: "<p>A six-digit <strong>Political Subdivision (PSD) code</strong> identifies an employee&rsquo;s <strong>resident municipality and work-location municipality</strong> for EIT withholding. Employees certify them on a Residency Certification Form, and QuickBooks Payroll has to carry the right PSD code per employee so the correct local rate is withheld.</p>" },
    { term: "&ldquo;Higher-Of&rdquo; Withholding Rule", def: "<p>For a Pennsylvania-resident employee, Act 32 requires the employer to withhold local EIT at the <strong>higher of</strong> the employee&rsquo;s <strong>resident total EIT rate</strong> or the <strong>non-resident rate of the municipality where they work</strong>. Getting this wrong is the most common Pennsylvania payroll error &mdash; we build it into QuickBooks per employee.</p>" },
    { term: "Local Services Tax (LST)", def: "<p>A flat local tax on people who work in a municipality that levies it &mdash; <strong>up to $52 per year</strong> where imposed, withheld <strong>pro-rata per pay period at the worksite</strong>. Municipalities levying more than $10 must provide a low-income exemption. It is separate from the EIT and is remitted with it.</p>" },
    { term: "Flat State Income Tax (3.07%)", def: "<p>Pennsylvania&rsquo;s personal income tax is a <strong>single flat statewide rate &mdash; 3.07%</strong>, in effect since 2004, with no brackets. Simple to model, but it sits underneath the Act 32 local EIT layer, which is where most Pennsylvania withholding complexity actually lives.</p>" },
    { term: "Sales &amp; Use Tax (6 / 7 / 8%)", def: "<p>Pennsylvania levies a <strong>6% state sales and use tax</strong>, plus a <strong>1% local add-on in Allegheny County (7%, Pittsburgh)</strong> and a <strong>2% add-on in Philadelphia (8%)</strong>. Because the rate depends on where the sale is sourced, the QuickBooks sales-tax setup has to handle all three. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance help &rarr;</a></p>" },
    { term: "Philadelphia Wage Tax", def: "<p>Philadelphia&rsquo;s tax on compensation, <strong>outside the Act 32 system</strong>. As of July 2025 it is <strong>3.74% for residents and 3.43% for non-residents</strong> who work in the city. Rates change each July 1; employers must withhold at the new rate on any paycheck dated after June 30. Always confirm the current rate with the <a href=\"https://www.phila.gov/departments/department-of-revenue/\" rel=\"noopener nofollow\">City of Philadelphia</a>.</p>" },
    { term: "BIRT &amp; Net Profits Tax", def: "<p>Philadelphia businesses may owe the <strong>Business Income &amp; Receipts Tax (BIRT)</strong> &mdash; a net-income portion (5.71%) plus a gross-receipts portion (1.410 mills) &mdash; and unincorporated businesses the <strong>Net Profits Tax (NPT)</strong>. The <strong>$100,000 gross-receipts exclusion was eliminated beginning tax year 2025</strong>, so nearly every business with Philadelphia activity now files BIRT. We keep the books BIRT/NPT-ready; your CPA files.</p>" },
  ],

  // DELIVERY — direct vs partner practices (buyer-card routing split). (H2: What we deliver in Pennsylvania. + 2 H3s)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service from across the Delaware line.", lede: "Most Pennsylvania engagements &mdash; bookkeeping, QuickBooks work, payroll, Act 32 EIT withholding, and sales-tax tracking &mdash; are delivered directly by TechBrot&rsquo;s lead practice, headquartered minutes from the Pennsylvania border. <a href=\"/find-an-accountant/pennsylvania/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working in your own file with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Pennsylvania payroll &mdash; Act 32 EIT withholding by PSD code", "Local Services Tax and Philadelphia city-tax tracking", "Sales-tax setup across the 6% / 7% / 8% split", "Remote delivery, secure, encrypted access"], cta: "Browse Pennsylvania services &rarr;", href: "#pa-services" },
    { eyebrow: "02 &middot; Curated Pennsylvania partners", heading: "Trusted local Pennsylvania partners.", lede: "When in-person presence in the Philadelphia or Pittsburgh metros, local CPA hand-off, or City of Philadelphia coordination matters, engagements can route to a vetted Pennsylvania accounting practice running under TechBrot&rsquo;s standards.", list: ["Pennsylvania-based independent practice", "Act 32 EIT and PSD-code withholding fluency", "Philadelphia Wage/NPT/BIRT coordination", "Local CPA and EA hand-off", "PA DOR and IRS audit-support coordination", "Manufacturing, logistics, and ag industry depth", "Same platform standards as direct delivery"], cta: "See Pennsylvania partner status &rarr;", href: "#pa-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file Pennsylvania or federal returns, the local EIT return, the Local Services Tax, or Philadelphia&rsquo;s city-tax returns. For PA DOR and City of Philadelphia filings, audit representation, and tax strategy, we coordinate with your existing Pennsylvania CPA, EA, or registered tax preparer.",

  // CONTEXT — 4 differentiators. (H2: What makes Pennsylvania accounting different. + 4 H3s)
  context: [
    { category: "Local Earned Income Tax", heading: "Act 32 EIT is where Pennsylvania payroll goes wrong.", body: ["Pennsylvania&rsquo;s flat 3.07% state income tax is the easy part. Underneath it, <strong>municipalities and school districts levy a local Earned Income Tax (EIT)</strong>, each at its own rate, collected through Act 32 Tax Collection Districts.", "Withholding is driven by <strong>PSD codes</strong> for each employee&rsquo;s residence and work location, under the <strong>&ldquo;higher-of&rdquo; rule</strong>. Get the PSD code or the rule wrong and withholding is wrong all year. We configure QuickBooks Payroll by PSD code and reconcile the combined quarterly return."] },
    { category: "Philadelphia&rsquo;s Own Tax World", heading: "Philadelphia runs entirely outside Act 32.", body: ["A Philadelphia business lives in a different tax regime: the <strong>Wage Tax</strong> on compensation, the <strong>Net Profits Tax</strong> on unincorporated profits, and the <strong>BIRT</strong> &mdash; a net-income plus gross-receipts tax &mdash; all administered by the City, not the Commonwealth.", "These rates <strong>change every July 1</strong>, and the BIRT&rsquo;s $100,000 exclusion is gone as of tax year 2025. We keep the books Wage/NPT/BIRT-ready and coordinate the filings with your CPA."] },
    { category: "Split-Rate Sales Tax", heading: "6% statewide &mdash; but 7% in Pittsburgh, 8% in Philly.", body: ["Pennsylvania&rsquo;s sales tax is <strong>6% statewide, 7% in Allegheny County, and 8% in Philadelphia</strong>. Which rate applies depends on where the sale is sourced, so QuickBooks has to be set up to charge the right rate by location.", "For businesses selling into the two metros or shipping across the state, mis-sourced sales tax is a common and costly error. <a href=\"/accounting/sales-tax-compliance/\">Sales-tax compliance &rarr;</a>"] },
    { category: "A Diversified Keystone Economy", heading: "Manufacturing, logistics, ag, and eds-and-meds.", body: ["Pennsylvania is the <strong>6th-largest state economy</strong>: advanced manufacturing (Pittsburgh robotics, the Lehigh Valley), one of the country&rsquo;s densest <strong>warehousing and distribution</strong> corridors along I-78 and I-81, a top-tier <strong>agriculture</strong> belt in Lancaster County, and a vast <strong>healthcare and higher-education</strong> sector.", "That mix means job costing, multi-state nexus for shippers, per-property real-estate books, and industry-specific QuickBooks configuration &mdash; handled on our national industry pages, set up for Pennsylvania&rsquo;s tax stack."] },
  ],
  contextNote: "Pennsylvania operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply &mdash; which PSD codes you withhold for, whether Philadelphia city taxes are in play, and how sales tax should be sourced.",

  // SCENARIOS — 3 honestly-labeled composites. (H2: What a Pennsylvania engagement actually looks like. + 3 H3s)
  scenarios: [
    { tag: "Composite &middot; Lehigh Valley distribution firm", heading: "A growing warehouse employer withholding one EIT rate for everyone.", body: ["<strong>Situation.</strong> A Lehigh Valley distribution business had employees living across a dozen municipalities but withheld local EIT at a single rate, with stale PSD codes and no Local Services Tax setup. Sales into Philadelphia were charged 6%, not 8%.", "<strong>What we did.</strong> Re-collected Residency Certification Forms, set each employee&rsquo;s <a href=\"/find-an-accountant/pennsylvania/quickbooks-accountant/\">PSD code</a> in QuickBooks Payroll under the &ldquo;higher-of&rdquo; rule, added the LST at the worksite, and corrected sales-tax sourcing for the 6% / 8% split.", "<strong>Outcome.</strong> EIT withheld correctly per employee; the combined quarterly return reconciled; sales tax sourced right by destination."] },
    { tag: "Composite &middot; Philadelphia services firm", heading: "A Center City firm unsure which city taxes it owed.", body: ["<strong>Situation.</strong> A Philadelphia professional-services firm had Wage Tax withheld inconsistently, had never filed BIRT because it assumed the $100,000 exclusion applied, and had no clean books to compute Net Profits Tax.", "<strong>What we did.</strong> Rebuilt the QuickBooks file, configured <a href=\"/find-an-accountant/pennsylvania/small-business-accountant/\">Philadelphia Wage Tax</a> withholding at the current rate, and prepared the BIRT and NPT detail &mdash; gross receipts and net income &mdash; so the City filings were clean and CPA-ready.", "<strong>Outcome.</strong> Wage Tax correct going forward; BIRT/NPT position documented; no surprise city-tax exposure at year-end."] },
    { tag: "Composite &middot; Pittsburgh contractor", heading: "An Allegheny County builder with no job costing and the wrong sales-tax rate.", body: ["<strong>Situation.</strong> A Pittsburgh construction firm ran all jobs through one income account, had no WIP, and charged 6% sales tax on taxable materials instead of Allegheny County&rsquo;s 7%.", "<strong>What we did.</strong> Built job costing and a WIP schedule, corrected the <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">Allegheny County 7% sales-tax</a> setup, and separated subcontractor 1099s for clean year-end reporting.", "<strong>Outcome.</strong> Job-level margin visible; sales tax charged at the correct county rate; a clean CPA handoff."] },
  ],
  scenariosNote: "Three composite scenarios drawn from common Pennsylvania engagement shapes. Identifying details are illustrative and not specific clients; the operational patterns &mdash; Act 32 EIT withholding, Philadelphia city taxes, split-rate sales tax &mdash; are real. Figures are representative, not guaranteed outcomes.",

  // REPRESENTATIVE OUTCOMES — explicitly illustrative (not real-client). (H2: Representative Pennsylvania outcomes.)
  outcomes: [
    { figure: "12 PSD codes", detail: "of employee EIT withholding corrected to each worker&rsquo;s residence and work location under Act 32", meta: "Representative &middot; Lehigh Valley payroll cleanup" },
    { figure: "BIRT", detail: "and Net Profits Tax position documented and made CPA-ready for a Philadelphia firm", meta: "Representative &middot; Philadelphia city-tax setup" },
    { figure: "7%", detail: "Allegheny County sales-tax rate corrected from a mis-sourced 6% setup", meta: "Representative &middot; Pittsburgh sales-tax fix" },
    { figure: "WIP", detail: "schedule and job costing built so contractor margin was finally visible", meta: "Representative &middot; contractor rebuild" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle in Pennsylvania &mdash; not specific client results or guarantees.",

  // ADVISORY — mission block. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, structure, and advisory. Software can post a transaction; it can&rsquo;t tell you that a new hire&rsquo;s PSD code just changed your EIT withholding, whether your Philadelphia activity now triggers BIRT, or where shipping into Pittsburgh just changed the sales-tax rate you should charge. For Pennsylvania businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, KPI design, multi-state nexus planning, and Pennsylvania-specific tax-position work in coordination with your CPA. By application. Best fit: Pennsylvania manufacturers, distribution firms, and growing services businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards, all routed to GLOBAL /accounting/industries/* (core state — no PA industry pages).
  // (H2: Industry-specific accounting for Pennsylvania's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Manufacturing", href: "/accounting/industries/manufacturing/", body: "From Pittsburgh robotics and advanced manufacturing to the Lehigh Valley and statewide producers. <strong>Job costing</strong>, standard vs. actual cost, inventory and WIP, and multi-state nexus for shippers &mdash; configured for Pennsylvania&rsquo;s tax stack." },
    { num: "02", name: "Logistics &amp; Trucking", href: "/accounting/industries/trucking/", body: "The I-78 / I-81 warehousing and distribution corridor is one of the densest in the country. <strong>Per-lane and per-customer profitability</strong>, fleet depreciation, owner-operator 1099s, and multi-state sales-tax nexus where goods move." },
    { num: "03", name: "Construction", href: "/accounting/industries/construction/", body: "Builders across the Philadelphia, Pittsburgh, and Lehigh Valley growth markets. <strong>Job costing, WIP, and retainage</strong>, subcontractor 1099s, prevailing-wage and certified payroll on public work, and the Allegheny / Philadelphia sales-tax split." },
    { num: "04", name: "Healthcare &amp; Practices", href: "/accounting/industries/healthcare/", body: "Pennsylvania&rsquo;s &ldquo;eds and meds&rdquo; core &mdash; physician, dental, and specialty practices in the UPMC, Penn Medicine, and Geisinger ecosystems. <strong>Insurance-payer reconciliation</strong>, HIPAA-aware data handling, and multi-provider payroll with Act 32 EIT withholding." },
    { num: "05", name: "Professional Services", href: "/accounting/industries/professional-services/", body: "Agencies, consultancies, and firms across Philadelphia, Harrisburg, and the suburbs. <strong>Project profitability</strong>, owner compensation, and &mdash; for Philadelphia firms &mdash; the Wage Tax, Net Profits Tax, and BIRT handled cleanly." },
    { num: "06", name: "Real Estate", href: "/accounting/industries/real-estate/", body: "Investors, brokerages, and property managers across the metros and college towns. <strong>Entity-per-property books</strong>, owner draws, 1031 coordination, short-term rental tracking, and the local-EIT wrinkle tied to owner residency." },
  ],
  industriesNote: "Pennsylvania industry engagements are delivered on our <a href=\"/accounting/industries/\">national industry pages</a>, configured for Pennsylvania&rsquo;s tax stack. Don&rsquo;t see your sector &mdash; agriculture, retail, restaurants, SaaS? We serve them too; ask on the discovery call.",

  // SERVICES — 5 core PA money pages (the 6-essentials; the umbrella is card 01). (H2: Find the right service... + H3s)
  services: [
    { eyebrow: "Service 01", name: "Pennsylvania QuickBooks Accountant", href: "/find-an-accountant/pennsylvania/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Pennsylvania businesses. Covers QBO, Desktop, Enterprise, and Payroll, with Act 32 EIT and Philadelphia city-tax fluency. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Pennsylvania ProAdvisor &rarr;" },
    { eyebrow: "Service 02", name: "Pennsylvania Small Business Accountant", href: "/find-an-accountant/pennsylvania/small-business-accountant/", body: "Operational accounting for Pennsylvania small businesses &mdash; clean books, local-tax compliance, and CPA-ready statements, with the Philadelphia city-tax and Act 32 EIT details handled. <a href=\"/accounting/\">Accounting national overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Small business accountant &rarr;" },
    { eyebrow: "Service 03", name: "Pennsylvania Bookkeeping Services", href: "/find-an-accountant/pennsylvania/bookkeeping-services/", body: "Recurring fixed-fee monthly close for Pennsylvania businesses. Bank reconciliation, Act 32 EIT review, sales-tax sub-reconciliation across the 6% / 7% / 8% split, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "From $400/mo", cadence: "Recurring monthly", cta: "Pennsylvania bookkeeping &rarr;" },
    { eyebrow: "Service 04", name: "Pennsylvania QuickBooks Cleanup", href: "/find-an-accountant/pennsylvania/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; wrong PSD-code EIT withholding, mis-sourced sales tax, missing Philadelphia city-tax tracking, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "From $1,200", cadence: "One-time, written scope", cta: "Pennsylvania cleanup &rarr;" },
    { eyebrow: "Service 05", name: "Pennsylvania QuickBooks Setup", href: "/find-an-accountant/pennsylvania/quickbooks-setup/", body: "Professional QuickBooks implementation for Pennsylvania businesses &mdash; chart of accounts for your industry, Act 32 EIT payroll configuration by PSD code, and the 6% / 7% / 8% sales-tax setup. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "From $750", cadence: "One-time, 2&ndash;4 weeks", cta: "Pennsylvania setup &rarr;" },
  ],
  servicesNote: "Other Pennsylvania engagements route to our national service pages, configured for Pennsylvania: <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-Up Bookkeeping</a> &middot; <a href=\"/quickbooks/migration/\">QuickBooks Migration</a> &middot; <a href=\"/quickbooks/payroll/\">Payroll (Act 32 EIT)</a> &middot; <a href=\"/accounting/sales-tax-compliance/\">Sales Tax Compliance</a> &middot; <a href=\"/accounting/advisory/fractional-cfo/\">Fractional CFO</a> &middot; <a href=\"/pricing/\">Pricing</a>.",

  // PRICING — 8-row table; rows route to PA children + global pages (no PA pricing page on a core state).
  // (H2: Fixed-fee starting ranges for Pennsylvania engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/pennsylvania/bookkeeping-services/", range: "From $400/mo", cadence: "Recurring monthly", notes: "Reconciliation, Act 32 EIT review, sales-tax sub-reconciliation, reporting" },
    { svc: "Cleanup / catch-up", href: "/accounting/bookkeeping/catch-up-bookkeeping/", range: "From $1,200", cadence: "One-time", notes: "Scope depends on months behind, volume, and PSD-code / entity complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/pennsylvania/quickbooks-setup/", range: "From $750", cadence: "One-time, 2&ndash;4 wks", notes: "Chart of accounts, Act 32 EIT payroll config, 6% / 7% / 8% sales-tax setup" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/pennsylvania/quickbooks-cleanup/", range: "From $1,200", cadence: "One-time", notes: "Wrong-PSD-code EIT and mis-sourced sales tax are common fixes" },
    { svc: "Sales tax help", href: "/accounting/sales-tax-compliance/", range: "From $250/mo", cadence: "Recurring + nexus review", notes: "6% / 7% Allegheny / 8% Philadelphia &middot; multi-state nexus for shippers" },
    { svc: "Local-tax (EIT/LST) withholding setup", href: "/quickbooks/payroll/", range: "From $300", cadence: "Setup + ongoing", notes: "Act 32 EIT by PSD code &middot; &ldquo;higher-of&rdquo; rule &middot; LST &middot; Philadelphia Wage Tax" },
    { svc: "Payroll management", href: "/quickbooks/payroll/", range: "Scoped on the call", cadence: "Recurring monthly", notes: "Act 32 EIT withholding per employee by PSD code; Philadelphia Wage Tax" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "From $1,500/mo", cadence: "Recurring, by application", notes: "Pennsylvania-aware strategic finance; multi-state nexus and tax-position planning with your CPA" },
  ],
  pricingNote: "Indicative starting ranges, not quotes. Final fees scale with transaction volume, employee count, number of PSD codes withheld for, Philadelphia city-tax exposure, industry specifics, and multi-state activity. TechBrot does not file Pennsylvania returns, the local EIT return, the LST, or Philadelphia&rsquo;s city-tax returns; it keeps the books and coordinates with your CPA. <a href=\"/pricing/\">Full pricing detail &rarr;</a>",

  // CITIES + COUNTIES — metros NAMED, NO href (core state: no city pages). (H2: Serving Pennsylvania businesses statewide. + 2 H3s)
  cities: [
    { name: "Philadelphia", county: "Philadelphia County" },
    { name: "Pittsburgh", county: "Allegheny County" },
    { name: "Allentown", county: "Lehigh County" },
    { name: "Harrisburg", county: "Dauphin County" },
    { name: "Lancaster", county: "Lancaster County" },
    { name: "Erie", county: "Erie County" },
    { name: "Scranton", county: "Lackawanna County" },
    { name: "Reading", county: "Berks County" },
  ],
  countyProse: "TechBrot serves all 67 Pennsylvania counties &mdash; <strong>Philadelphia</strong> and the suburban collar (Montgomery, Bucks, Delaware, Chester); <strong>Allegheny</strong> (Pittsburgh) and Southwestern PA; <strong>Lehigh</strong> and <strong>Northampton</strong> in the Lehigh Valley distribution corridor; <strong>Dauphin</strong> (Harrisburg) and the capital region; <strong>Lancaster</strong>, <strong>York</strong>, and <strong>Berks</strong> in the south-central small-business belt; <strong>Erie</strong> on the lake; and <strong>Lackawanna</strong> and <strong>Luzerne</strong> in the Northeast (Scranton/Wilkes-Barre) &mdash; plus every county in between. Remote, fixed-fee service reaches the whole state; each municipality sets its own local EIT rate, which we confirm against the PA DCED lookup.",
  citiesNote: "Don&rsquo;t see your city? All 67 Pennsylvania counties are served via remote engagement delivery. <a href=\"/contact/?intent=pennsylvania&state=pennsylvania&source_type=location&funnel_stage=MOFU\">Start a Pennsylvania conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across manufacturing, construction, and professional services &mdash; the judgment behind every Pennsylvania engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards (PA-localized). (H2: Trusted Pennsylvania partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated Pennsylvania tax fluency", detail: "Act 32 EIT withholding by PSD code, the &ldquo;higher-of&rdquo; rule, the LST, Philadelphia Wage/NPT/BIRT, and split-rate sales tax." },
    { num: "03", term: "Industry &amp; multi-state depth", detail: "Job costing and WIP for manufacturing and construction, per-lane profitability for logistics, and multi-state nexus for shippers." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],
  // §OPERATORS section copy (frontmatter has no operatorsTag etc. — provide via sec defaults? they live in sec. Set here as data is not read; the layout reads sec.* which we set in njk only if present. Provide minimal sec keys for operators in njk? — handled: layout falls back to defaults.)

  // WHY TECHBROT — 4 cards (PA-localized). (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Pennsylvania operational depth", body: "Act 32 EIT withholding by PSD code under the &ldquo;higher-of&rdquo; rule, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT, and split-rate sales tax. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for multi-municipality, Philadelphia-inclusive Pennsylvania engagements." },
    { num: "04", name: "Honest, independent delivery", body: "We are an independent ProAdvisor firm with no Intuit affiliation and no affiliate commissions. We keep the books and coordinate with your CPA, who files &mdash; just the right scope for your Pennsylvania business. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Pennsylvania businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Pennsylvania CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Pennsylvania / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "Act 32 EIT withholding by PSD code", us: "<strong>Per employee, &ldquo;higher-of&rdquo; rule</strong>", cpa: "Usually; varies by firm", remote: "Often one rate for everyone &mdash; wrong", winner: "us" },
    { dim: "Philadelphia Wage/NPT/BIRT setup", us: "<strong>Tracked and kept filing-ready</strong>", cpa: "Files the returns; not in the books daily", remote: "Rarely handled", winner: "us" },
    { dim: "Split-rate sales tax (6/7/8%)", us: "<strong>Sourced and configured by location</strong>", cpa: "Varies; not their primary focus", remote: "Sometimes mishandled or ignored", winner: "us" },
    { dim: "Local Services Tax (LST)", us: "<strong>Withheld at the worksite, pro-rata</strong>", cpa: "Usually; varies by firm", remote: "Often missed", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "PA DOR / City / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for Pennsylvania DOR and City of Philadelphia filings, tax returns, and representation, use a licensed Pennsylvania CPA or EA. For QuickBooks operations, bookkeeping, Act 32 EIT withholding setup, Philadelphia city-tax tracking, and split-rate sales-tax compliance &mdash; TechBrot is built for that. Most Pennsylvania clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — Pennsylvania official sources (from PA-FACTS). (H2: Verify everything on this page.)
  authority: [
    { name: "Pennsylvania Department of Revenue", href: "https://www.pa.gov/agencies/revenue/", detail: "Authoritative source for the flat 3.07% personal income tax, the corporate net income tax, sales and use tax, and employer withholding." },
    { name: "PA DOR &mdash; Tax Rates", href: "https://www.pa.gov/agencies/revenue/resources/tax-rates", detail: "The official personal income tax, sales/use tax (6% state + Allegheny 1% + Philadelphia 2%), and realty transfer tax rates." },
    { name: "PA DOR &mdash; Corporation Tax Rates", href: "https://www.pa.gov/agencies/revenue/resources/tax-rates/corporation-tax-rates", detail: "The Corporate Net Income Tax rate and the statutory phasedown schedule (7.49% for 2026, falling to 4.99% by 2031)." },
    { name: "PA DCED &mdash; Act 32 / Local Income Tax", href: "https://dced.pa.gov/local-government/local-income-tax-information/", detail: "The official PSD-code and local Earned Income Tax (EIT) rate lookup, plus the Local Services Tax &mdash; the authority for any municipal rate before withholding." },
    { name: "City of Philadelphia &mdash; Department of Revenue", href: "https://www.phila.gov/departments/department-of-revenue/", detail: "Authoritative source for the Philadelphia Wage Tax, Net Profits Tax, and Business Income &amp; Receipts Tax (BIRT) &mdash; rates change each July 1." },
    { name: "Internal Revenue Service (IRS) &mdash; Small Business", href: "https://www.irs.gov/businesses/small-businesses-self-employed", detail: "Authoritative source for federal employment tax, Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 9 Q/A, Option C, answer-first, Pennsylvania-specific. visible faq list == FAQPage (same array).
  // Two call-intent answers weave the phone (877) 751-5575 in; new page (no baseline). (H2: Pennsylvania QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Pennsylvania businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll, local-tax and sales-tax tracking, and fractional CFO coordination to Pennsylvania businesses statewide &mdash; remote-first from our Delaware headquarters, minutes across the Pennsylvania border. All 67 counties covered, from Philadelphia and Pittsburgh to the Lehigh Valley, Harrisburg, Lancaster, Erie, and Scranton. Independent firm &mdash; not affiliated with Intuit Inc." },
    { q: "How does Pennsylvania&rsquo;s Act 32 local Earned Income Tax work for payroll?", a: "On top of the flat 3.07% state income tax, Pennsylvania municipalities and school districts levy a local Earned Income Tax (EIT), each at its own rate, collected through Act 32 Tax Collection Districts. Employers withhold by PSD code &mdash; the six-digit code for each employee&rsquo;s residence and work location &mdash; under the &ldquo;higher-of&rdquo; rule: for a PA-resident employee you withhold the higher of their resident total rate or the work-location non-resident rate. We configure QuickBooks Payroll by PSD code; confirm current rates on the PA DCED lookup." },
    { q: "What is a PSD code and why does it matter?", a: "A PSD (Political Subdivision) code is a six-digit identifier for a specific Pennsylvania municipality and school district. Every employee needs the PSD code for both their residence and their work location so the correct local EIT rate is withheld. Employees certify them on a Residency Certification Form. If the PSD codes are wrong or stale, the EIT withholding is wrong all year &mdash; correcting them is one of the most common fixes in a Pennsylvania payroll cleanup." },
    { q: "How are Philadelphia businesses taxed differently?", a: "Philadelphia runs its own city taxes outside the Act 32 system, and the rates change each July 1. A Philadelphia business may owe the Wage Tax on compensation (3.74% resident / 3.43% non-resident as of July 2025), the Net Profits Tax on unincorporated profits, and the Business Income &amp; Receipts Tax (BIRT) &mdash; a 5.71% net-income portion plus a 1.410-mill gross-receipts portion. The $100,000 BIRT exclusion was eliminated beginning tax year 2025, so nearly every business with Philadelphia activity now files. We keep the books filing-ready; always confirm current rates with the City of Philadelphia." },
    { q: "What is Pennsylvania&rsquo;s sales tax rate, and is there a local sales tax?", a: "Pennsylvania&rsquo;s sales and use tax is 6% statewide, with two local add-ons: +1% in Allegheny County (7% in Pittsburgh) and +2% in Philadelphia (8%). Everywhere else it&rsquo;s a flat 6%. Because the rate depends on where the sale is sourced, QuickBooks has to be set up to charge the right rate by location &mdash; a common error is charging 6% on a Pittsburgh or Philadelphia sale that should be 7% or 8%. If you sell across state lines, we also scope where other states&rsquo; nexus is triggered." },
    { q: "What is the Local Services Tax (LST)?", a: "The Local Services Tax is a flat local tax on people who work in a municipality that levies it &mdash; up to $52 per year where imposed, withheld pro-rata per pay period at the worksite. Municipalities levying more than $10 must offer a low-income exemption. It&rsquo;s separate from the EIT but withheld and remitted alongside it. We set it up in QuickBooks Payroll so the worksite withholding is correct." },
    { q: "Does TechBrot file Pennsylvania state or local tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file Pennsylvania or federal returns, the local EIT return, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT returns, or the sales-tax return, and we do not represent clients before the Pennsylvania Department of Revenue or the City of Philadelphia. We deliver clean, CPA-ready bookkeeping, configure the local-tax tracking, and coordinate with your Pennsylvania CPA or EA, who files." },
    { q: "How does a Pennsylvania engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Pennsylvania operational context &mdash; which PSD codes you withhold for, whether Philadelphia city taxes apply, how sales tax should be sourced &mdash; recommend the right engagement, and deliver a written fixed-fee scope within 3 business days. Prefer to talk it through first? Call a Certified ProAdvisor at (877) 751-5575 &mdash; not a call center &mdash; for a same-day diagnostic." },
    { q: "How much does Pennsylvania bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping from $400/mo; cleanup and catch-up from $1,200; QuickBooks setup from $750; QuickBooks cleanup from $1,200; sales-tax help from $250/mo; local-tax (EIT/LST) setup from $300; fractional CFO from $1,500/mo. Final pricing depends on volume, employee and PSD-code count, Philadelphia city-tax exposure, and how far behind the books are. To scope it now, call (877) 751-5575 and a Certified ProAdvisor will walk through it with you." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "Pennsylvania practice", detail: "All 67 counties served remotely &middot; Philadelphia, Pittsburgh, Lehigh Valley, Harrisburg, Lancaster, Erie, Scranton &middot; Industries handled on the national pages, configured for PA" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered tax preparer &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "Pennsylvania statutory references reviewed against PA DOR, PA DCED, and City of Philadelphia primary sources &middot; Municipal EIT rates verified on the DCED lookup and never quoted as a specific percentage &middot; Philadelphia city rates treated as current-as-of-review and re-checked each July 1 &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. Delaware exists (link it); others default to the hub (no dead links). (H2: Multi-state Pennsylvania businesses. + 4 H3s)
  related: [
    { name: "Delaware", href: "/find-an-accountant/delaware/", body: "Pennsylvania businesses with a Delaware entity or operations across the line &mdash; Delaware&rsquo;s gross receipts tax, franchise tax, and no sales tax, scoped alongside your Pennsylvania books. Our headquarters is in Delaware.", cta: "ProAdvisors in Delaware &rarr;" },
    { name: "New Jersey", body: "Philadelphia-area businesses operating across the Delaware River into South Jersey &mdash; New Jersey CBT, sales tax, and multi-state payroll for cross-border staff.", cta: "New Jersey &mdash; coming soon &rarr;" },
    { name: "Maryland", body: "South-central Pennsylvania businesses operating toward Baltimore and the DC metro &mdash; Maryland multi-state payroll, sales tax, and nexus scoping.", cta: "Maryland &mdash; coming soon &rarr;" },
    { name: "Ohio", body: "Western Pennsylvania and Pittsburgh-corridor businesses operating west into Ohio &mdash; the Ohio CAT (commercial activity tax), municipal income tax, and sales-tax nexus where goods cross the line.", cta: "Ohio &mdash; coming soon &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/pennsylvania/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Pennsylvania QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, local tax, and sales tax compliance for Pennsylvania businesses across all 67 counties — from Philadelphia and Pittsburgh to the Lehigh Valley, Harrisburg, Lancaster, Erie, and Scranton. Built around the Act 32 local Earned Income Tax withholding by PSD code, the flat 3.07% state income tax, Philadelphia's separate Wage/NPT/BIRT taxes, and the 6% / 7% / 8% sales-tax split.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/pennsylvania-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pa-in-brief-text","#pa-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Pennsylvania"}]},
        {"@type":"Service","@id":url+"#service","name":"Pennsylvania QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, local earned income tax, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup and cleanup, payroll, Act 32 local Earned Income Tax withholding by PSD code, Philadelphia Wage/NPT/BIRT tracking, and 6% / 7% / 8% sales tax compliance for Pennsylvania businesses across all 67 counties. Delivered remotely by TechBrot from its Delaware headquarters. Independent Certified QuickBooks ProAdvisor firm; does not file Pennsylvania or federal returns, the local EIT return, the Local Services Tax, or Philadelphia's city-tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Pennsylvania","sameAs":"https://en.wikipedia.org/wiki/Pennsylvania","containsPlace":[
          {"@type":"City","name":"Philadelphia"},{"@type":"City","name":"Pittsburgh"},{"@type":"City","name":"Allentown"},{"@type":"City","name":"Harrisburg"},{"@type":"City","name":"Lancaster"},{"@type":"City","name":"Erie"},{"@type":"City","name":"Scranton"},{"@type":"City","name":"Reading"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Pennsylvania small and mid-sized businesses, manufacturers, logistics and distribution firms, construction firms, healthcare practices, professional-services firms, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Pennsylvania accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Pennsylvania QuickBooks Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Pennsylvania Small Business Accountant"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Pennsylvania Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Pennsylvania QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Pennsylvania QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Pennsylvania — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

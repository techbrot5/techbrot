/* /find-an-accountant/texas/ — t-location PILLAR. Mirrors new-york.11tydata.js exactly
 * (data-file shape, eleventyComputed pageGraph). Sources: FROZEN EQUITY CONTRACT
 * (contract-tx-pillar.txt) — the ONLY authority for the headings + 17 FAQ — and the live
 * baseline old HTML (find-an-accountant/texas/index.html, full body read) for body prose.
 *
 * NO-CHILDREN RULE (#1, CRITICAL): Texas has NO city/industry/service child pages built.
 * The ONLY Texas URL is this pillar. Every baseline "[texas child] →" link is rendered as
 * PLAIN TEXT (no href) or routed to /contact/?intent=texas. Internal hrefs are limited to:
 * on-page #anchors, /contact/, /quickbooks/file-review/, and CONFIRMED real global pages
 * (/accounting/advisory/fractional-cfo/, /quickbooks/, /quickbooks/cleanup|setup|migration/,
 * /accounting/bookkeeping/monthly-bookkeeping/, /accounting/sales-tax-compliance/, /partners/,
 * /find-an-accountant/). /vs/ and /accounting/industries/ are NOT built in src — rendered as
 * plain text. Verified each target exists before linking.
 *
 * HONESTY REFRAME (R5): the old "Recent Texas results." section implied specific clients with
 * the note "real engagement outcomes, anonymized by client request". REFRAMED here exactly as
 * the NY pillar: H2 kept verbatim ("Recent Texas results." is the frozen contract heading), but
 * each card meta → ENGAGEMENT TYPE ("Representative · …"), and the note → explicitly illustrative.
 * The composite-scenarios section was ALREADY honestly labeled and is kept verbatim. Reviews are
 * ONLY the 2 real Clutch reviews (Heidi Schubert, Barbara Best) — no invented TX reviewers, no
 * AggregateRating. No founder/personal name in visible content; David Westgate appears only as the
 * named operator/reviewer (the standing-rule exception). Independent firm — does NOT file the Texas
 * franchise tax report or federal returns; coordinates with the client's Texas CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: TechBrot in Texas, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, Texas bookkeeping, QuickBooks setup, cleanup, migration, Texas sales tax compliance, and fractional CFO engagements to Texas businesses across <strong>all 254 counties</strong> &mdash; from Houston, Dallas&ndash;Fort Worth, and Austin to San Antonio, El Paso, and the Permian Basin. Texas has <strong>no state personal income tax</strong>, but its <strong>franchise (margin) tax</strong> applies to most entities above the <strong>$2.65M no-tax-due threshold</strong>, <strong>SaaS and data-processing services are taxable at 80% of sales price</strong>, sales tax uses <strong>origin-based sourcing</strong> at up to 8.25%, and the economy concentrates in <strong>energy, construction, real estate, technology, healthcare, and professional services</strong> &mdash; making the Texas operational context substantively different from every other state. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot</strong> for most engagements; <strong>curated local Texas operators</strong> where metro presence, oil-and-gas accounting, or franchise-tax depth matters. Honest scope: we do not file the Texas franchise tax report or federal returns &mdash; we coordinate with your CPA or EA.",

  // PROADVISOR CREDENTIAL STRIP. (H2: Certified QuickBooks ProAdvisor credentials)
  credLede: "Every TechBrot operator holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. Verifiable on Intuit&rsquo;s public ProAdvisor directory.",
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
    { value: "254", label: "Texas counties served &mdash; Houston and DFW metros to West Texas" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "254", label: "Counties &mdash; the most of any U.S. state, from the Houston and DFW metros to West Texas, each within Texas&rsquo;s single-rate sales-tax framework" },
    { figure: "$0", label: "State personal income tax &mdash; Texas levies none; the trade-off is the franchise (margin) tax on business entities and a heavier reliance on sales tax" },
    { figure: "$2.65M", label: "Franchise tax no-tax-due threshold for 2026 &mdash; entities at or below owe $0 margin tax but must still file a Public/Ownership Information Report" },
    { figure: "8.25%", label: "Maximum combined sales tax &mdash; 6.25% state + up to 2% local; Texas uses origin-based sourcing for in-state sellers" },
    { figure: "80%", label: "Share of a SaaS/data-processing sale that is taxable in Texas &mdash; a state-specific rule that catches software and tech firms off guard" },
    { figure: "$500K", label: "Sales-tax economic nexus threshold &mdash; gross Texas sales over the trailing 12 months; among the highest in the nation, sales-only (no transaction count)" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in Texas, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve Texas businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, Texas sales tax compliance, and fractional CFO engagements to Texas businesses across all 254 counties.</strong> Direct service by TechBrot&rsquo;s lead practice; trusted partner practices in Texas where metro presence, oil-and-gas accounting, or franchise-tax depth matters. Coverage spans Houston, Dallas&ndash;Fort Worth, Austin, San Antonio, El Paso, and the entire state." },
    { q: "Does Texas have a state income tax, and what is the franchise (margin) tax?", a: "<strong>Texas has no state personal income tax.</strong> Instead, it levies a <strong>franchise tax</strong> &mdash; a privilege tax on a business entity&rsquo;s <strong>taxable margin</strong>, not its profit. For the 2026 report year, entities with annualized total revenue at or below <strong>$2.65 million owe $0</strong> but must still file a Public Information Report (PIR) or Ownership Information Report (OIR). Above the threshold, margin is the lowest of four methods (70% of revenue; revenue minus COGS; revenue minus compensation; or revenue minus $1,000,000), taxed at <strong>0.75%</strong> for most entities or <strong>0.375%</strong> for retail/wholesale. The franchise tax applies to LLCs and S-corps regardless of federal pass-through status." },
    { q: "How does Texas sales tax work, and is SaaS taxable?", a: "Texas charges a <strong>6.25% state sales tax</strong> plus local rates up to 2%, for a <strong>maximum combined 8.25%</strong>. In-state sellers use <strong>origin-based sourcing</strong> (rate set by the seller&rsquo;s location); remote sellers use the destination address. Notably, <strong>SaaS and data-processing services are taxable in Texas at 80% of the sales price</strong> &mdash; a state-specific rule that surprises software and tech companies. QuickBooks must be configured with correct rates by location and the 80% SaaS taxability, or the file will under- or over-collect." },
    { q: "What QuickBooks versions does TechBrot support for Texas businesses?", a: "All current QuickBooks versions: <strong>QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll</strong>. <strong>QBO Advanced</strong> dominates among Austin and Dallas tech and professional-services firms. <strong>QuickBooks Enterprise</strong> is common among Houston energy-services companies, large construction contractors, and manufacturers. Job costing for construction and oilfield-services cost tracking are standard engagement components." },
    { q: "How does a Texas engagement start, and does TechBrot file the franchise tax report?", a: "Engagements start with a <strong>free 30-minute discovery call</strong>; a <strong>written fixed-fee scope is delivered within 3 business days</strong>. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file the Texas franchise tax report or federal returns, and do not represent clients before the Texas Comptroller</strong>. We deliver clean, CPA-ready bookkeeping (including franchise-tax-ready margin workpapers) and coordinate with your existing Texas CPA or EA." },
  ],

  // GLOSSARY — 8 entity-dense TX terms. (H2: The Texas terms that matter for QuickBooks & bookkeeping.)
  // NO-CHILDREN: baseline "[texas child] →" links dropped to plain text.
  stateTerms: [
    { term: "Texas Franchise (Margin) Tax", def: "<strong>A privilege tax on a business entity&rsquo;s taxable margin</strong> &mdash; not its income or profit. Applies to LLCs, S-corps, partnerships, and out-of-state entities with Texas nexus, regardless of federal pass-through status. For 2026, entities at or below <strong>$2.65M annualized total revenue owe $0</strong> but still file a Public or Ownership Information Report. The standard rate is <strong>0.75%</strong> (0.375% for retail/wholesale)." },
    { term: "Taxable Margin &mdash; Four Methods", def: "<strong>How franchise tax is calculated above the threshold.</strong> Margin is the <strong>lowest</strong> of: 70% of total revenue; total revenue minus cost of goods sold; total revenue minus compensation (capped at <strong>$480,000 per person for 2026</strong>); or total revenue minus a flat $1,000,000. Taxable margin can never exceed 70% of total revenue. Choosing the wrong method overstates the bill &mdash; QuickBooks must track COGS and compensation cleanly to support each calculation." },
    { term: "No State Income Tax", def: "<strong>Texas levies no personal state income tax.</strong> Payroll still requires federal withholding, Social Security/Medicare, and Texas unemployment tax (SUTA via the Texas Workforce Commission) &mdash; but no state income-tax withholding line. The trade-off for no income tax is the franchise tax and a heavier reliance on sales tax. A common point of confusion for businesses relocating from income-tax states." },
    { term: "SaaS &amp; Data-Processing &mdash; 80% Taxable", def: "<strong>Texas treats Software-as-a-Service and data-processing services as taxable at 80% of the sales price</strong> (20% is exempt). This state-specific rule catches software, tech, and information-services firms off guard &mdash; most states either fully tax or fully exempt SaaS. QuickBooks must apply the correct partial-taxability rate, or invoices will misstate sales tax collected." },
    { term: "Origin-Based Sourcing", def: "<strong>Texas sources in-state sales by the seller&rsquo;s location, not the buyer&rsquo;s</strong> &mdash; unusual among large states, which mostly use destination sourcing. An in-state Texas seller charges the combined rate at its own business address for orders shipped within Texas. Remote/out-of-state sellers use the destination address. QuickBooks tax setup differs accordingly; misconfiguring this is a frequent source of under-collection." },
    { term: "Texas Comptroller of Public Accounts", def: "<strong>The state&rsquo;s primary tax authority</strong> &mdash; administers the franchise tax, sales and use tax, and employer-related filings, and conducts audits. Texas has no separate state department of revenue and no city income tax, so nearly all Texas state tax matters route through the Comptroller. Most Texas tax notices originate here." },
    { term: "PIR / OIR (Information Reports)", def: "<strong>Public Information Report (Form 05-102) and Ownership Information Report (Form 05-167).</strong> Even entities below the $2.65M no-tax-due threshold &mdash; owing $0 franchise tax &mdash; must file one of these annually by <strong>May 15</strong>. Corporations, LLCs, LPs, and financial institutions file the PIR; other entity types file the OIR. Missing this filing risks loss of good standing, a frequent oversight for small Texas LLCs." },
    { term: "TX Economic Nexus (sales tax)", def: "<strong>Texas requires sales-tax collection from remote sellers exceeding $500,000 in gross Texas sales over the preceding 12 calendar months</strong> &mdash; a sales-only threshold (no transaction count), among the highest in the nation. The figure includes taxable, nontaxable, and marketplace sales. Storing inventory in a Texas fulfillment center also creates physical nexus. Relevant for any national e-commerce or SaaS business selling into Texas." },
  ],

  // DELIVERY — direct vs partners (buyer-card routing split).
  // (H2: What we deliver in Texas. · H3: Direct service... · H3: Trusted local...)
  // NO-CHILDREN: the "Certified QuickBooks ProAdvisors" baseline link (to a TX child) dropped to plain text.
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service by TechBrot&rsquo;s lead practice.", lede: "Most Texas engagements &mdash; bookkeeping, QuickBooks work, payroll, and sales tax compliance &mdash; are delivered directly by TechBrot&rsquo;s lead practice. Certified QuickBooks ProAdvisors working under the TechBrot brand with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "Texas payroll &mdash; federal withholding + TWC unemployment (no state income tax)", "Texas sales tax compliance &mdash; origin-based, SaaS 80% taxability", "Franchise-tax margin workpapers (COGS / compensation methods)", "Remote delivery, secure, encrypted access"], cta: "Browse Texas services &rarr;", href: "#tx-ecosystem" },
    { eyebrow: "02 &middot; Curated Texas partners", heading: "Trusted local Texas partners.", lede: "When metro presence, oil-and-gas / energy-services accounting, franchise-tax depth, or large-contractor job costing matters, engagements route to a vetted Texas accounting practice running under TechBrot&rsquo;s standards.", list: ["Metro-based independent practice (Houston, DFW, Austin, San Antonio)", "Oil-and-gas / energy-services accounting", "Franchise-tax margin-method optimization", "Texas Comptroller coordination", "Comptroller and IRS audit-support coordination", "Construction job costing and WIP depth", "Same platform standards as direct delivery"], cta: "See Texas partner status &rarr;", href: "#tx-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file the Texas franchise tax report or federal returns. For franchise tax filing, audit representation, and Comptroller matters, we coordinate with your existing Texas CPA or EA.",

  // CONTEXT — 4 differentiators. (H2: What makes Texas accounting different. + 4 H3s)
  // NO-CHILDREN: baseline "[texas child] →" links dropped to plain text.
  context: [
    { category: "No Income Tax, But...", heading: "The franchise tax replaces it.", body: ["Texas has <strong>no personal state income tax</strong> &mdash; but the <strong>franchise (margin) tax</strong> applies to most business entities above <strong>$2.65M revenue</strong>, at 0.75% (0.375% retail/wholesale) of taxable margin. It hits LLCs and S-corps regardless of federal pass-through status.", "<strong>QuickBooks must track COGS and compensation cleanly</strong> so the lowest-margin method can be applied. Businesses relocating from income-tax states routinely misjudge this."] },
    { category: "SaaS &amp; Tech Taxability", heading: "Software is taxed at 80% in Texas.", body: ["Texas taxes <strong>SaaS and data-processing services at 80% of the sales price</strong> &mdash; neither fully exempt nor fully taxed. Austin and Dallas software firms are the most affected, and most out-of-state bookkeepers get it wrong.", "QuickBooks needs the correct partial-taxability configuration per product line, or invoices misstate collected tax."] },
    { category: "Sales Tax Sourcing", heading: "Origin-based &mdash; up to 8.25%.", body: ["Unlike most large states, Texas uses <strong>origin-based sourcing</strong> for in-state sellers &mdash; the rate follows the seller&rsquo;s location, not the customer&rsquo;s. The <strong>combined rate maxes at 8.25%</strong> (6.25% state + up to 2% local).", "Remote sellers use destination sourcing and face the <strong>$500K economic nexus</strong> threshold. Mixed in-state/remote operations need careful QuickBooks tax setup."] },
    { category: "Industry Profile", heading: "Energy, construction, tech, healthcare &mdash; at scale.", body: ["Texas&rsquo;s economy spans <strong>energy and oil-and-gas services (Houston, Permian Basin), construction, real estate, technology (Austin), and healthcare</strong> &mdash; plus major logistics and manufacturing across DFW and San Antonio.", "Each vertical has distinct QuickBooks needs: oilfield-services cost tracking and AFE accounting, job costing and WIP for construction, ASC 606 and 80% SaaS taxability for tech, payer reconciliation for healthcare."] },
  ],
  contextNote: "Texas operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply to your business.",

  // SCENARIOS — 3 honestly-labeled composites (framing KEPT verbatim).
  // (H2: What a Texas engagement actually looks like. + 3 scenario H3s)
  // NO-CHILDREN: scenario body + CTA child links routed to /contact/?intent=texas (real path).
  scenarios: [
    { tag: "SaaS &middot; Austin (Travis County)", heading: "A 30-person SaaS company collecting sales tax on 100% of subscriptions instead of 80%.", body: ["<strong>Situation.</strong> QBO Advanced file taxing the full subscription price on Texas customers &mdash; over-collecting on the 20% exempt portion of every SaaS invoice. Franchise-tax margin computed on the 70%-of-revenue method when the COGS method would have been lower. No clean separation of taxable software vs. exempt professional-services revenue.", "<strong>What we did.</strong> QBO cleanup, reconfigured sales-tax items to the 80% SaaS taxability, separated taxable vs. exempt revenue streams, rebuilt the franchise-tax margin workpapers comparing all four methods, briefed the CPA with corrected figures.", "<strong>Outcome.</strong> Sales-tax collection corrected going forward, over-collection quantified for refund/credit with the CPA, and a lower franchise-tax margin method identified for the next report."], cta: "Discuss a Texas SaaS engagement &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { tag: "Energy Services &middot; Houston (Harris County)", heading: "An oilfield-services firm doing $14M with no job- or well-level cost tracking.", body: ["<strong>Situation.</strong> All revenue and costs in undifferentiated accounts on QuickBooks Enterprise. No AFE (Authorization for Expenditure) tracking, no per-job margin. Equipment purchases expensed inconsistently. Franchise-tax COGS deduction understated because direct costs weren&rsquo;t isolated.", "<strong>What we did.</strong> Built a job-costing and AFE structure in Enterprise, separated direct field costs to support the COGS margin method, corrected fixed-asset capitalization, established per-job and per-well profitability reporting.", "<strong>Outcome.</strong> First true job-level margin visibility, a defensible COGS-based franchise-tax margin, and cost data clean enough to bid work accurately."], cta: "Discuss a Texas energy engagement &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { tag: "Contractor &middot; Dallas&ndash;Fort Worth (Tarrant County)", heading: "A commercial GC doing $8M with no WIP schedule and a missed franchise-tax filing.", body: ["<strong>Situation.</strong> Jobs rolled into a single income account, no work-in-progress schedule, retainage receivable untracked. The entity was below the no-tax-due threshold but had <strong>missed its Public Information Report</strong> two years running &mdash; putting good standing at risk.", "<strong>What we did.</strong> Built job costing and a WIP schedule in QuickBooks, separated retainage, reconstructed the records needed for the late PIR filings, and coordinated reinstatement of good standing with the client&rsquo;s CPA.", "<strong>Outcome.</strong> Bonding-ready financials with WIP visibility, good standing restored, and a calendar of Texas filing deadlines so it never lapses again."], cta: "Discuss a Texas construction engagement &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
  ],
  scenariosNote: "Three composite scenarios drawn from common Texas engagement shapes. Identifying details anonymized; the operational patterns are real.",

  // RECENT RESULTS — REFRAMED (R5). Heading is the frozen contract H2 "Recent Texas results.";
  // card metas → ENGAGEMENT TYPE ("Representative · …"); note → explicitly illustrative.
  outcomes: [
    { figure: "$36K", detail: "SaaS sales-tax over-collection corrected (80% rule)", meta: "Representative &middot; SaaS sales-tax" },
    { figure: "21&rarr;5 days", detail: "Month-end close cut after QuickBooks rebuild", meta: "Representative &middot; energy-services rebuild" },
    { figure: "$19K", detail: "Franchise-tax margin reduced via COGS method", meta: "Representative &middot; contractor margin" },
    { figure: "2 years", detail: "Missed Information Reports filed; good standing restored", meta: "Representative &middot; GC compliance" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle &mdash; not specific client results.",

  // ADVISORY — mission block. STANDING brand line is the H2. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, strategic positioning, and advisory. Texas is the fastest-growing major economy in the country, with heavy relocation, capital formation, and energy-cycle volatility to navigate. For Texas businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, capital-event readiness, KPI design, and Texas franchise-tax-position planning in coordination with your CPA. By application. Best fit: $1M&ndash;$50M Texas businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards. (H2: Industry-specific accounting for Texas's economy. + 6 H3s)
  // NO-CHILDREN: industry headings are PLAIN TEXT (no child links). Note's /accounting/industries/ link
  // dropped (page not built) — reworded to plain text.
  industries: [
    { num: "01", name: "Oil, Gas &amp; Energy Services", body: "Houston and Permian Basin operators and oilfield-services firms &mdash; <strong>AFE tracking</strong>, well- and job-level cost accounting, equipment capitalization, joint-interest billing, and franchise-tax COGS isolation." },
    { num: "02", name: "Construction &amp; Contractors", body: "Texas general and specialty contractors &mdash; <strong>job costing</strong>, WIP schedules, AIA billing, retainage tracking, equipment costing, and bonding-ready financials across the DFW, Houston, and Austin building markets." },
    { num: "03", name: "Technology &amp; Professional Services", body: "Austin and Dallas software, SaaS, and consulting firms &mdash; <strong>80% SaaS sales-tax taxability</strong>, ASC 606 revenue recognition, deferred revenue, and franchise-tax margin planning for high-growth entities." },
    { num: "04", name: "Restaurants &amp; Hospitality", body: "Texas multi-location operators &mdash; <strong>POS reconciliation</strong>, tipped-employee payroll, mixed-beverage tax handling, food vs. alcohol sales tax, and weekly close cadence." },
    { num: "05", name: "Healthcare Practices", body: "Texas medical, dental, and specialty practices &mdash; <strong>insurance payer reconciliation</strong>, HIPAA-aware data handling, multi-provider payroll, and franchise-tax margin for PLLCs and practice groups." },
    { num: "06", name: "Real Estate &amp; Property", body: "Texas investors, brokerages, and property managers &mdash; <strong>multi-entity ledgers</strong>, trust/earnest-money accounting, 1031 exchange documentation, and per-property profitability across Texas&rsquo;s high-growth metros." },
  ],
  industriesNote: "Industries not listed &mdash; e-commerce, manufacturing, logistics, nonprofit &mdash; are served via our global industry coverage. Local-intent pages exist only where Texas creates genuinely distinct requirements.",

  // SERVICES — 6 buyer-cards. (H2: Find the right service for your Texas business. + 6 H3s)
  // NO-CHILDREN: service headings + card CTAs are PLAIN TEXT routed to /contact/?intent=texas (TX child
  // pages not built). National-overview links point ONLY to confirmed real global pages.
  services: [
    { eyebrow: "Service 01", name: "Texas Bookkeeping Services", body: "Recurring fixed-fee monthly close for Texas businesses. Bank reconciliation, sales tax sub-reconciliation, franchise-tax margin tracking, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "$400/mo", cadence: "Recurring monthly", cta: "Discuss TX bookkeeping &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 02", name: "Texas QuickBooks ProAdvisor", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for Texas businesses. Covers QBO, Desktop, Enterprise, and Payroll across all Texas industry types. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Discuss TX ProAdvisor &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 03", name: "Texas QuickBooks Cleanup", body: "QuickBooks files with structural problems &mdash; SaaS 80% taxability misconfigured, origin-based rates wrong, franchise-tax margin unsupported, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "$1,500", cadence: "One-time, written scope", cta: "Discuss TX cleanup &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 04", name: "Texas QuickBooks Setup", body: "Professional QuickBooks implementation for Texas businesses &mdash; chart of accounts for your industry, origin-based sales tax + 80% SaaS configuration, job costing for construction and energy services. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "$750", cadence: "One-time, 2&ndash;4 weeks", cta: "Discuss TX setup &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 05", name: "Texas Sales Tax Compliance", body: "Texas sales tax filing, origin-based rate configuration, 80% SaaS/data-processing taxability, mixed-beverage handling, economic nexus for out-of-state sellers into Texas. <a href=\"/accounting/sales-tax-compliance/\">National overview &rarr;</a>", starting: "$250/mo", cadence: "Recurring + nexus review", cta: "Discuss TX sales tax &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
    { eyebrow: "Service 06", name: "Texas Franchise Tax Support", body: "Franchise-tax-ready margin workpapers &mdash; all four methods compared, COGS and compensation isolated, PIR/OIR filing support coordinated with your CPA. Bookkeeping side of the May 15 franchise filing.", starting: "$500", cadence: "Annual + monthly support", cta: "Discuss TX franchise tax &rarr;", href: "/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU" },
  ],
  servicesNote: "Every Texas service above is delivered directly by TechBrot&rsquo;s lead practice today &mdash; one engagement, one written scope. <a href=\"/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU\">Start with a Texas discovery call &rarr;</a>",

  // ECOSYSTEM — 6 clusters. (H2: Every Texas page in one place. + 6 cluster H3s)
  // NO-CHILDREN (CRITICAL): Texas has NO child pages. Clusters are rendered as CONTENT
  // (the topical map of what each engagement covers) with NO links to non-existent children.
  // All `links` carry NO href (label-only checks-list rows).
  ecosystem: [
    { eyebrow: "Cluster 01", heading: "Texas money cluster", lede: "The Texas QuickBooks and bookkeeping work that captures &ldquo;quickbooks accountant near me&rdquo; and &ldquo;bookkeeper near me&rdquo; intent &mdash; all delivered directly today under one engagement.", links: [
      { label: "TX QuickBooks Accountant / ProAdvisor", href: "/find-an-accountant/texas/quickbooks-accountant/", tag: "&#9733; umbrella" },
      { label: "TX Small Business Accountant", href: "/find-an-accountant/texas/small-business-accountant/" },
      { label: "TX Bookkeeping Services", href: "/find-an-accountant/texas/bookkeeping-services/" },
      { label: "TX Virtual Bookkeeper", href: "/find-an-accountant/texas/virtual-bookkeeper/" },
      { label: "Speak to a TX ProAdvisor", href: "/find-an-accountant/texas/speak-to-a-proadvisor/", tag: "BOFU" },
      { label: "TX Pricing &amp; Engagement Fees", href: "/find-an-accountant/texas/pricing/" },
    ] },
    { eyebrow: "Cluster 02", heading: "Texas QuickBooks spokes", lede: "TX-specific QuickBooks ProAdvisor engagements &mdash; each scoped within the direct-service model.", links: [
      { label: "TX QuickBooks Setup", href: "/find-an-accountant/texas/quickbooks-setup/" },
      { label: "TX QuickBooks Cleanup", href: "/find-an-accountant/texas/quickbooks-cleanup/" },
      { label: "TX QuickBooks Reconciliation", href: "/find-an-accountant/texas/quickbooks-reconciliation/" },
      { label: "TX QuickBooks Migration", href: "/find-an-accountant/texas/quickbooks-migration/" },
      { label: "TX QuickBooks Training", href: "/find-an-accountant/texas/quickbooks-training/" },
      { label: "TX QuickBooks Error Fixes", href: "/find-an-accountant/texas/quickbooks-error-fixes/" },
    ] },
    { eyebrow: "Cluster 03", heading: "Texas bookkeeping spokes", lede: "Recurring and project bookkeeping engagements scoped to Texas operational reality.", links: [
      { label: "TX Monthly Bookkeeping", href: "/find-an-accountant/texas/monthly-bookkeeping/" },
      { label: "TX Cleanup &amp; Catch-Up Bookkeeping", href: "/find-an-accountant/texas/cleanup-bookkeeping/" },
      { label: "TX Urgent Bookkeeping", href: "/find-an-accountant/texas/urgent-bookkeeping/" },
    ] },
    { eyebrow: "Cluster 04", heading: "Texas tax cluster", lede: "The genuinely Texas-specific tax stack &mdash; franchise/margin tax, origin-based sales tax, SaaS 80% taxability &mdash; covered in this pillar above.", links: [
      { label: "TX Sales Tax (6.25%+ &middot; origin-based &middot; SaaS 80%)", href: "/find-an-accountant/texas/sales-tax-help/" },
      { label: "TX Franchise Tax (margin &middot; PIR/OIR)", href: "/find-an-accountant/texas/franchise-tax-help/" },
      { label: "TX Business Tax Problems", href: "/find-an-accountant/texas/business-tax-problems/" },
    ] },
    { eyebrow: "Cluster 05", heading: "Texas industries", lede: "Vertical-specific accounting depth for Texas&rsquo;s leading sectors &mdash; each handled within the direct engagement.", links: [
      { label: "TX Construction Accounting", href: "/find-an-accountant/texas/industries/construction/" },
      { label: "TX Manufacturing Accounting", href: "/find-an-accountant/texas/industries/manufacturing/" },
      { label: "TX Real Estate Accounting", href: "/find-an-accountant/texas/industries/real-estate/" },
      { label: "TX Trucking &amp; Transportation", href: "/find-an-accountant/texas/industries/trucking/" },
      { label: "TX Healthcare Practice Accounting", href: "/find-an-accountant/texas/industries/healthcare/" },
      { label: "TX Professional Services &amp; Law Firms", href: "/find-an-accountant/texas/industries/professional-services/" },
      { label: "All Texas industries", href: "/find-an-accountant/texas/industries/", tag: "hub" },
    ] },
    { eyebrow: "Cluster 06", heading: "Texas cities", lede: "TechBrot serves businesses in every Texas metro &mdash; the major population and business centers below, and all 254 counties via remote delivery.", links: [
      { label: "Houston (Harris County)", href: "/find-an-accountant/texas/cities/houston/" },
      { label: "San Antonio (Bexar County)", href: "/find-an-accountant/texas/cities/san-antonio/" },
      { label: "Dallas (Dallas County)", href: "/find-an-accountant/texas/cities/dallas/" },
      { label: "Austin (Travis County)", href: "/find-an-accountant/texas/cities/austin/" },
      { label: "Fort Worth (Tarrant County)", href: "/find-an-accountant/texas/cities/fort-worth/" },
      { label: "El Paso (El Paso County)", href: "/find-an-accountant/texas/cities/el-paso/" },
      { label: "Plano (Collin County)", href: "/find-an-accountant/texas/cities/plano/" },
      { label: "Corpus Christi (Nueces County)", href: "/find-an-accountant/texas/cities/corpus-christi/" },
      { label: "Lubbock (Lubbock County)", href: "/find-an-accountant/texas/cities/lubbock/" },
      { label: "Laredo (Webb County)", href: "/find-an-accountant/texas/cities/laredo/" },
      { label: "Killeen (Bell County)", href: "/find-an-accountant/texas/cities/killeen/" },
      { label: "All Texas cities &amp; counties", href: "/find-an-accountant/texas/cities/", tag: "hub" },
    ] },
  ],
  ecosystemNote: "Every Texas page above is live &mdash; follow the link for the full detail, or <a href=\"/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU\">start with a discovery call &rarr;</a>.",

  // PRICING — 8-row table. (H2: Fixed-fee starting ranges for Texas engagements.)
  // NO-CHILDREN: service-name cells are PLAIN TEXT (href omitted). pricingNote child link dropped to plain text.
  pricing: [
    { svc: "Monthly bookkeeping", href: "", range: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", notes: "Sales tax sub-reconciliation + franchise-tax margin tracking" },
    { svc: "QuickBooks cleanup", href: "", range: "$1,500&ndash;$15,000+", cadence: "One-time", notes: "SaaS 80% misconfig + origin-based rate corrections are common" },
    { svc: "Catch-up bookkeeping", href: "", range: "$2,000&ndash;$20,000+", cadence: "One-time", notes: "Scoped by months behind, volume, and industry complexity" },
    { svc: "QuickBooks setup", href: "", range: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 wks", notes: "Origin-based sales tax + 80% SaaS config; job costing for construction/energy" },
    { svc: "Desktop &rarr; Online migration", href: "", range: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 wks", notes: "Houston energy and large contractors often on Enterprise" },
    { svc: "Payroll management", href: "", range: "$150&ndash;$800+/mo", cadence: "Recurring monthly", notes: "Federal withholding + TWC unemployment; no state income tax line" },
    { svc: "Sales tax compliance", href: "", range: "$250&ndash;$1,500+/mo + $500&ndash;$3,000 nexus review", cadence: "Recurring monthly", notes: "Origin-based &middot; SaaS 80% taxability &middot; $500K economic nexus" },
    { svc: "Franchise tax support", href: "", range: "$500&ndash;$3,000+", cadence: "Annual + support", notes: "All four margin methods compared; PIR/OIR by May 15 with your CPA" },
  ],
  pricingNote: "Indicative starting ranges. Final fees scale with transaction volume, employee count, metro vs. rural complexity, industry specifics, and multi-state exposure. <a href=\"/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU\">Get a written Texas scope &rarr;</a>",

  // CITIES + COUNTIES. (H2: Serving Texas businesses statewide. + 2 H3s)
  // NO-CHILDREN: city names are PLAIN TEXT (no child links). citiesNote child link dropped to plain text.
  cities: [
    { name: "Houston", county: "Harris County" },
    { name: "San Antonio", county: "Bexar County" },
    { name: "Dallas", county: "Dallas County" },
    { name: "Austin", county: "Travis County" },
    { name: "Fort Worth", county: "Tarrant County" },
    { name: "El Paso", county: "El Paso County" },
    { name: "Arlington", county: "Tarrant County" },
    { name: "Plano", county: "Collin County" },
    { name: "Corpus Christi", county: "Nueces County" },
    { name: "Lubbock", county: "Lubbock County" },
    { name: "Laredo", county: "Webb County" },
    { name: "Killeen", county: "Bell County" },
  ],
  countyProse: "Harris (Houston), Dallas, Tarrant (Fort Worth/Arlington), Bexar (San Antonio), Travis (Austin), Collin (Plano), Denton, Fort Bend, El Paso, Hidalgo, Montgomery, Williamson, Cameron, Nueces (Corpus Christi), Bell, Brazoria, Galveston, Lubbock, Webb (Laredo), McLennan (Waco), Jefferson (Beaumont), Smith (Tyler), Ellis, Hays, Comal, Guadalupe, Brazos, Midland, Ector (Odessa), Taylor (Abilene), Wichita, Grayson, Johnson, Parker, Kaufman, Rockwall, Hunt, Victoria, Angelina, Gregg, Bowie, Potter (Amarillo), Randall, Tom Green (San Angelo), Coryell, Walker, Orange, Hardin, Liberty, Waller &mdash; among all 254 Texas counties.",
  citiesNote: "Don&rsquo;t see your city? All 254 Texas counties are served via remote engagement delivery. <a href=\"/contact/?intent=texas&state=texas&source_type=location&funnel_stage=MOFU\">Start with a discovery call &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across construction, energy services, and professional services &mdash; the judgment behind every Texas engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p CT", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards. (H2: Trusted Texas partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll &mdash; verifiable on Intuit&rsquo;s public directory." },
    { num: "02", term: "Demonstrated Texas tax fluency", detail: "Franchise-tax margin methods, origin-based sales tax, 80% SaaS taxability, Texas Comptroller coordination." },
    { num: "03", term: "Industry specialization depth", detail: "Oilfield-services and AFE cost accounting, job costing and WIP for construction, ASC 606 for tech." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards. (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "Texas operational depth", body: "Franchise-tax margin optimization, origin-based sales tax, 80% SaaS taxability, oilfield-services and AFE cost accounting, construction job costing and WIP. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Verifiable on Intuit&rsquo;s <a href=\"https://proadvisor.intuit.com/\" rel=\"noopener nofollow\">public ProAdvisor directory</a>." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for complex Texas engagements." },
    { num: "04", name: "Sophisticated buyer, honest delivery", body: "Texas buyers know the difference between genuine expertise and a keyword swap. We are an independent ProAdvisor firm with no Intuit affiliation, no affiliate commissions, and no upsell agenda &mdash; just the right scope for your Texas business." },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for Texas businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many Texas CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files Texas franchise tax report", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "Franchise-tax margin workpapers", us: "<strong>All four methods compared</strong>", cpa: "Usually; varies by firm", remote: "Often not handled", winner: "us" },
    { dim: "SaaS 80% taxability config", us: "<strong>Correct partial-taxability per product</strong>", cpa: "Varies; not their primary focus", remote: "Often full or zero rate &mdash; misconfigured", winner: "us" },
    { dim: "Origin-based sales tax setup", us: "<strong>Correct sourcing by seller location</strong>", cpa: "Usually; depends on firm experience", remote: "Rarely configured correctly", winner: "us" },
    { dim: "Oil-and-gas / job costing", us: "<strong>AFE &amp; job-level cost tracking</strong>", cpa: "If they specialize in energy/construction", remote: "Generally not handled", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "Comptroller / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for the franchise tax report, federal returns, and IRS/Comptroller representation, use a licensed Texas CPA or EA. For QuickBooks operations, bookkeeping, origin-based sales tax, SaaS 80% taxability, and franchise-tax margin workpapers &mdash; TechBrot is built for that. Most Texas clients use both.",
  comparisonRelated: "TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit Inc. We handle the QuickBooks operations; your Texas CPA handles the franchise tax report and Comptroller representation.",

  // AUTHORITY — 6 .gov / official sources. (H2: Verify everything on this page.)
  authority: [
    { name: "Texas Comptroller of Public Accounts", href: "https://comptroller.texas.gov/", detail: "Authoritative source for the Texas franchise (margin) tax, sales and use tax rates, economic nexus rules, and Comptroller audit procedures." },
    { name: "Texas Franchise Tax &mdash; Comptroller", href: "https://comptroller.texas.gov/taxes/franchise/", detail: "Authoritative source for franchise tax rates, the no-tax-due threshold, margin calculation methods, and PIR/OIR filing requirements." },
    { name: "Texas Workforce Commission (TWC)", href: "https://www.twc.texas.gov/", detail: "Authoritative source for Texas unemployment tax (SUTA), employer registration, and state payroll-related reporting requirements." },
    { name: "Texas Secretary of State", href: "https://www.sos.state.tx.us/", detail: "Authoritative source for Texas entity formation, registered-agent requirements, and good-standing status tied to franchise tax compliance." },
    { name: "Intuit ProAdvisor Directory", href: "https://proadvisor.intuit.com/", detail: "Authoritative source for verifying active QuickBooks ProAdvisor certifications &mdash; including TechBrot&rsquo;s." },
    { name: "Internal Revenue Service (IRS)", href: "https://www.irs.gov/", detail: "Authoritative source for federal employment tax (Form 941), Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 17 Q/A VERBATIM from the contract. visible = schema.
  // (H2: Texas QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve Texas businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll management, sales tax compliance, and fractional CFO coordination to Texas businesses statewide &mdash; directly through our lead practice, with trusted partner practices across Texas. All 254 Texas counties covered, including Houston, Dallas&ndash;Fort Worth, Austin, San Antonio, El Paso, and every metro and rural county in between." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal income tax. Instead, most business entities pay the franchise (margin) tax, and the state relies heavily on sales tax. Payroll still requires federal withholding and Texas unemployment tax (TWC), but there&rsquo;s no state income-tax withholding line. Businesses relocating from income-tax states often misjudge the franchise-tax trade-off." },
    { q: "What is the Texas franchise (margin) tax and do I owe it?", a: "The franchise tax is a privilege tax on a business entity&rsquo;s taxable margin &mdash; not profit. It applies to LLCs, S-corps, partnerships, and out-of-state entities with Texas nexus, regardless of federal pass-through status. For 2026, if your annualized total revenue is at or below $2.65 million you owe $0 &mdash; but you must still file a Public or Ownership Information Report by May 15. Above the threshold, the rate is 0.75% (0.375% retail/wholesale) of margin." },
    { q: "Is SaaS taxable in Texas?", a: "Yes &mdash; partially. Texas taxes SaaS and data-processing services at 80% of the sales price (20% is exempt). This is unusual; most states either fully tax or fully exempt SaaS. Austin and Dallas software firms are most affected. QuickBooks must apply the correct partial-taxability rate per product line, or invoices will misstate sales tax." },
    { q: "What&rsquo;s the Texas sales tax rate, and how does origin-based sourcing work?", a: "The state rate is 6.25%, plus local rates up to 2%, for a maximum combined 8.25%. For in-state sellers, Texas uses origin-based sourcing &mdash; the rate follows the seller&rsquo;s location, not the customer&rsquo;s (unusual among large states). Remote/out-of-state sellers use the destination address and face the $500K economic nexus threshold. QuickBooks tax setup differs accordingly." },
    { q: "What QuickBooks versions does TechBrot support for Texas businesses?", a: "All current versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QBO Advanced dominates among Austin and Dallas tech and professional-services firms. Enterprise is common among Houston energy-services companies, large contractors, and manufacturers. Still on Desktop? Migration is worth discussing." },
    { q: "Does TechBrot file the Texas franchise tax report?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file the Texas franchise tax report or federal returns, and do not represent clients before the Texas Comptroller. We deliver clean, CPA-ready bookkeeping including franchise-tax-ready margin workpapers (all four methods, COGS and compensation isolated), and coordinate with your CPA or EA who files. The standard model: TechBrot handles QuickBooks operations; your Texas CPA handles filing." },
    { q: "How does a Texas engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your Texas operational context (metro, industry, multi-state exposure, franchise-tax position), recommend the right engagement structure, and deliver a written fixed-fee scope within 3 business days. Same-day diagnostic for emergencies." },
    { q: "Do I still have to file if I owe $0 franchise tax?", a: "Yes. Even below the $2.65M no-tax-due threshold &mdash; owing $0 &mdash; Texas entities must file a Public Information Report (Form 05-102) or Ownership Information Report (Form 05-167) annually by May 15. Missing it risks loss of good standing, a frequent and costly oversight for small Texas LLCs. We keep the records filing-ready and coordinate the deadline with your CPA." },
    { q: "Do oil-and-gas and energy-services firms have special QuickBooks requirements?", a: "Yes &mdash; primarily AFE (Authorization for Expenditure) tracking, well- and job-level cost accounting, joint-interest billing, and clean separation of direct field costs to support the franchise-tax COGS margin method. Houston and Permian Basin operators need this structure in QuickBooks Enterprise. Getting it right is the core of every Texas energy engagement." },
    { q: "How much does Texas bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; Desktop to Online migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; franchise tax support $500&ndash;$3,000+; fractional CFO $3,000&ndash;$8,000+/mo." },
    { q: "Can I use my Texas CPA for taxes and TechBrot for bookkeeping?", a: "Yes &mdash; that&rsquo;s the standard model. TechBrot handles operational bookkeeping, QuickBooks configuration, and Texas-specific compliance (origin-based sales tax, SaaS 80% taxability, franchise-tax margin workpapers); your Texas CPA handles the franchise tax report, federal returns, and Comptroller/IRS representation. Year-end CPA handoff is included in every recurring Texas engagement." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll &mdash; verifiable on Intuit&rsquo;s <a href=\"https://proadvisor.intuit.com/\" rel=\"noopener nofollow\">public ProAdvisor directory</a>" },
    { label: "Texas practice", detail: "All 254 counties served &middot; Houston, Dallas&ndash;Fort Worth, Austin, San Antonio, El Paso, Permian Basin &middot; Industries: oil &amp; gas/energy, construction, technology/SaaS, restaurant, healthcare, real estate" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "TX statutory references reviewed against the Texas Comptroller primary source &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. (H2: Multi-state Texas businesses. + 4 H3s)
  // NO-CHILDREN: related-state CTAs route to /contact/?intent=texas (neighbor pages not built).
  related: [
    { name: "Oklahoma", body: "North Texas businesses with OK operations &mdash; cross-border payroll, Oklahoma income tax withholding (Texas has none), and multi-state sales tax along the I-35 corridor.", cta: "Discuss OK multi-state &rarr;" },
    { name: "Louisiana", body: "East Texas and Gulf Coast businesses with LA operations &mdash; Louisiana income tax and parish-level sales tax complexity, energy-sector multi-state cost allocation.", cta: "Discuss LA multi-state &rarr;" },
    { name: "New Mexico", body: "West Texas and Permian Basin operators with NM operations &mdash; New Mexico gross receipts tax (very different from Texas sales tax), cross-state oilfield-services cost tracking.", cta: "Discuss NM multi-state &rarr;" },
    { name: "Arkansas", body: "Northeast Texas businesses with AR operations &mdash; Arkansas income tax withholding, multi-state sales tax, and nexus considerations for regional distributors.", cta: "Discuss AR multi-state &rarr;" },
  ],
  relatedNote: "Multi-state Texas engagements route through TechBrot direct service. Multi-state scoping is part of every applicable Texas engagement.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/texas/";
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Texas QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and Texas sales tax compliance for Texas businesses across all 254 counties — from Houston, Dallas–Fort Worth, and Austin to San Antonio, El Paso, and the Permian Basin. Built around the Texas franchise (margin) tax, the $2.65M no-tax-due threshold, no state income tax, origin-based sales tax, and SaaS taxed at 80%.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/texas-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#tx-in-brief-text","#tx-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Texas"}]},
        {"@type":"Service","@id":url+"#service","name":"Texas QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, and Texas sales tax compliance for Texas businesses across all 254 counties. Delivered directly by TechBrot's lead practice, with trusted partner practices in Texas. Independent Certified QuickBooks ProAdvisor firm; does not file the Texas franchise tax report or federal returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Texas","containsPlace":[
          {"@type":"City","name":"Houston"},{"@type":"City","name":"San Antonio"},{"@type":"City","name":"Dallas"},{"@type":"City","name":"Austin"},{"@type":"City","name":"Fort Worth"},{"@type":"City","name":"El Paso"},{"@type":"City","name":"Arlington"},{"@type":"City","name":"Plano"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"Texas small and mid-sized businesses, oil-and-gas and energy-services firms, construction contractors, Austin and Dallas technology and SaaS companies, restaurants, healthcare practices, and real estate operators"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Texas accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Texas Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Texas QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Texas QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Texas QuickBooks Migration"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Texas Sales Tax Compliance"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Texas Franchise Tax Support"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in Texas — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

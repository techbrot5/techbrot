/* /find-an-accountant/california/ — t-location PILLAR. MIGRATION-PROTOCOL
 * (content-to-goal, visual-floor). Template: the founder-validated NY pillar
 * (new-york.njk + new-york.11tydata.js) — structure, section order, cobalt
 * vocabulary, schema shape copied exactly. Sources: FROZEN EQUITY CONTRACT
 * (contract-ca-pillar.txt) — the ONLY authority for the 72 headings + 17 FAQ —
 * and the live baseline old HTML (find-an-accountant/california/index.html, full
 * body read) for body prose/section content.
 *
 * NO-CHILDREN RULE (the #1 rule for this page): California has NO city/industry/
 * service child pages built. The ONLY California URL that exists is this pillar.
 * Therefore EVERY coverage/cities/industries/services/ecosystem item is rendered
 * as CONTENT (prose/lists/buyer-cards) and NEVER links to a non-existent child
 * page. Internal hrefs are restricted to: (a) #anchors on this page, (b) real
 * sitewide pages that exist — /contact/, /partners/, /find-an-accountant/,
 * /accounting/advisory/fractional-cfo/, /accounting/bookkeeping/monthly-bookkeeping/,
 * /accounting/sales-tax-compliance/, /quickbooks/ family, /vs/ family. Any baseline
 * "explore [city] →" / "[industry] accounting →" link became plain text.
 *
 * HONESTY REFRAME (R5 STANDING, same as the NY pillar): the old "Recent California
 * results." cards implied specific clients ("Agency · Los Angeles" etc.) with the
 * note "real engagement outcomes, anonymized by client request". REFRAMED here:
 * eyebrow → "Representative outcomes"; note → explicitly illustrative; each card
 * meta → ENGAGEMENT TYPE ("Representative · agency AB5") with no specific-client
 * assertion. The figures + operational substance are kept. The composite-scenarios
 * section was ALREADY honestly labeled and is kept. Reviews are ONLY the 2 real
 * Clutch reviews (Heidi Schubert, Barbara Best) — no invented CA reviewers, no
 * AggregateRating. No founder/personal name in visible content; David Westgate
 * appears only as the named operator/reviewer (the standing-rule exception).
 * Independent firm — does NOT file CA/federal taxes; coordinates with the client's
 * CA CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: TechBrot in California, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, California bookkeeping, QuickBooks setup, cleanup, migration, California sales tax compliance, and fractional CFO engagements to California businesses across <strong>all 58 counties</strong> &mdash; from Los Angeles and San Diego to San Francisco, San Jose, and Sacramento. California&rsquo;s <strong>AB5 worker-classification rules</strong>, <strong>district sales tax (the most complex in the U.S.)</strong>, <strong>the highest personal income tax in the country (13.3%)</strong>, the <strong>$800 FTB franchise tax</strong>, and concentration in <strong>SaaS and technology, ecommerce, agencies, entertainment and production, restaurants, and real estate</strong> make the California operational context substantively different from every other state. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot</strong> for most engagements; <strong>curated local California operators</strong> where in-region presence or industry specialization matters. Honest scope: we do not file California or federal tax returns &mdash; we coordinate with your CPA or EA. Independent ProAdvisor firm; not affiliated with Intuit Inc.",

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
    { value: "58", label: "California counties served &mdash; the Bay Area to San Diego" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS. (H2: The state by the numbers.)
  stats: [
    { figure: "58", label: "Counties &mdash; and the largest state economy in the U.S., spanning tech, entertainment, agriculture, and trade" },
    { figure: "13.3%", label: "Top marginal personal income tax rate &mdash; 12.3% plus a 1% Mental Health Services Tax over $1M &mdash; the highest of any state" },
    { figure: "7.25%", label: "Base statewide sales tax &mdash; the highest base in the U.S. &mdash; rising past 10.25% in many districts with local add-ons" },
    { figure: "$800", label: "FTB minimum annual franchise tax on corporations and LLCs doing business in California &mdash; owed even at a loss" },
    { figure: "AB5", label: "The ABC test for worker classification &mdash; Prong B reclassifies most core-function contractors as employees; penalties run $5K&ndash;$25K per violation" },
    { figure: "ASC 606", label: "Revenue recognition &mdash; central to California&rsquo;s SaaS, subscription, and agency economy; the most common books error we correct" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in California, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve California businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, California sales tax compliance, and fractional CFO engagements to California businesses across all 58 counties.</strong> Direct service by TechBrot&rsquo;s lead practice; trusted partner practices in California where in-region presence or industry specialization matters. Coverage spans Los Angeles, the Bay Area, San Diego, the Central Valley, and the Sacramento region." },
    { q: "How does California&rsquo;s AB5 worker-classification rule affect my bookkeeping?", a: "<strong>AB5 codified the ABC test</strong>: a worker is presumed an employee unless the business proves all three prongs &mdash; freedom from control, work outside the company&rsquo;s usual course of business, and an independently established trade. <strong>Prong B is where most companies fail</strong>, because a contractor doing core work (a developer at a software company, a writer at an agency) is almost always reclassified as an employee. Misclassification penalties run <strong>$5,000 to $25,000 per violation</strong> plus back payroll taxes. In QuickBooks, this means cleanly separating W-2 wages from 1099 contractor pay and tracking the payroll-tax exposure when contractors should be employees." },
    { q: "What is California&rsquo;s sales tax rate and how do district taxes work?", a: "California&rsquo;s <strong>base sales tax rate is 7.25%</strong> &mdash; the highest statewide base in the U.S. Cities, counties, and special districts add <strong>district taxes</strong> that push the combined rate to roughly <strong>10.25% or more</strong> in some jurisdictions. The rate depends on where the sale is sourced, so QuickBooks must apply the correct combined rate by customer location &mdash; not a single flat statewide rate. District-tax misconfiguration is among the most common California QuickBooks issues we correct." },
    { q: "What QuickBooks versions does TechBrot support for California businesses?", a: "All current QuickBooks versions: <strong>QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll</strong>. <strong>QBO Advanced</strong> dominates among California SaaS companies, agencies, and professional-services firms. <strong>QuickBooks Enterprise</strong> is common among Central Valley manufacturers, agriculture operations, and larger construction contractors. SaaS ASC 606 revenue recognition and agency gross-vs-net treatment are handled as standard engagement components." },
    { q: "How does a California engagement start, and does TechBrot file California taxes?", a: "Engagements start with a <strong>free 30-minute discovery call</strong>; a <strong>written fixed-fee scope is delivered within 3 business days</strong>. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file federal or California tax returns, and do not represent clients before the Franchise Tax Board (FTB), the California Department of Tax and Fee Administration (CDTFA), or the Employment Development Department (EDD)</strong>. We deliver clean, CPA-ready bookkeeping and coordinate with your existing California CPA or EA." },
  ],

  // GLOSSARY — 8 entity-dense CA terms. CHILD LINKS STRIPPED (no CA child pages exist).
  // (H2: The California terms that matter for QuickBooks & bookkeeping.)
  glossary: [
    { term: "AB5 / the ABC Test", def: "<strong>California Assembly Bill 5, which codified the ABC test for worker classification.</strong> A worker is presumed an employee unless the hiring business proves all three prongs: (A) freedom from control, (B) work outside the company&rsquo;s usual course of business, and (C) an independently established trade. <strong>Prong B</strong> reclassifies most core-function contractors as employees. QuickBooks must cleanly separate W-2 wages from 1099 contractor pay and surface the payroll-tax exposure when contractors should be employees." },
    { term: "$800 FTB Minimum Franchise Tax", def: "<strong>California&rsquo;s minimum annual tax, payable to the Franchise Tax Board.</strong> Every corporation and LLC incorporated, registered, or doing business in California owes $800 per year &mdash; even at a loss or while inactive. C-corps pay the greater of 8.84% of net income or $800; S-corps the greater of 1.5% or $800. Newly formed corporations are exempt in their first year. QuickBooks should accrue the $800 so it never surprises the books." },
    { term: "CA District Sales Tax", def: "<strong>Local add-on sales taxes layered on California&rsquo;s 7.25% base rate.</strong> Cities, counties, and special districts impose district taxes that push the combined rate past 10.25% in some jurisdictions. The correct rate depends on where the sale is sourced, so QuickBooks must apply the right combined rate by customer location &mdash; not a single flat statewide rate. Misapplied district rates are a leading cause of CDTFA notices." },
    { term: "LLC Gross-Receipts Fee", def: "<strong>An additional California fee on LLCs, separate from the $800 minimum tax.</strong> Once an LLC&rsquo;s total California-source income exceeds $250,000, a tiered gross-receipts fee applies on top of the $800 &mdash; scaling up as income rises. It is based on gross receipts, not profit, so a high-revenue, low-margin LLC can owe a meaningful fee even in a thin year. QuickBooks should track California-source income so the fee tier is predictable." },
    { term: "ASC 606 Revenue Recognition", def: "<strong>The revenue-recognition standard central to California&rsquo;s SaaS, subscription, and agency economy.</strong> SaaS businesses must defer subscription revenue across the service period rather than booking it on receipt; agencies must determine principal-vs-agent treatment (gross vs. net) on media and pass-through spend. Incorrect ASC 606 treatment is the single most common bookkeeping error we correct for California tech companies and agencies, and it distorts revenue by multiples." },
    { term: "CDTFA (Dept. of Tax and Fee Administration)", def: "<strong>California Department of Tax and Fee Administration.</strong> Administers California sales and use tax, district taxes, and special-fee programs, and conducts sales-tax audits. Distinct from the FTB (income/franchise tax) and the EDD (payroll). Most California sales-tax notices and seller&rsquo;s-permit matters originate here. <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA &rarr;</a>" },
    { term: "FTB &amp; EDD", def: "<strong>Franchise Tax Board and Employment Development Department.</strong> The <strong>FTB</strong> administers California income and franchise tax (including the $800 minimum and the 8.84% corporate rate). The <strong>EDD</strong> administers California payroll taxes and runs <strong>worker-classification (AB5) audits</strong> &mdash; the agency most California businesses encounter on misclassification. Hiring even one California employee creates immediate EDD registration obligations." },
    { term: "CA Economic Nexus (sales tax)", def: "<strong>California&rsquo;s threshold for out-of-state seller sales-tax obligations.</strong> A remote seller must register with the CDTFA and collect once it exceeds <strong>$500,000 in California sales</strong> in the current or prior calendar year &mdash; a sales-only threshold with <strong>no transaction count</strong> (unlike New York). For income and franchise tax, California uses separate factor-presence thresholds. Relevant for any national ecommerce or SaaS business selling into California." },
  ],

  // DELIVERY — direct vs partners. Anchors only (#ca-pillar-ecosystem, #ca-pillar-operators).
  // (H2: What we deliver in California. · H3: Direct service... · H3: Trusted local...)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service by TechBrot&rsquo;s lead practice.", lede: "Most California engagements &mdash; bookkeeping, QuickBooks work, payroll, and sales tax compliance &mdash; are delivered directly by TechBrot&rsquo;s lead practice. Certified QuickBooks ProAdvisors working under the TechBrot brand with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "California payroll &mdash; with AB5 contractor-classification tracking", "CA district sales tax compliance by jurisdiction", "ASC 606 revenue recognition for SaaS and agencies", "Remote delivery, secure, encrypted access"], cta: "Browse California coverage &rarr;", href: "#ca-pillar-ecosystem" },
    { eyebrow: "02 &middot; Curated California partners", heading: "Trusted local California partners.", lede: "When in-region presence, deep SaaS or entertainment specialization, or local CDTFA and EDD coordination matters, engagements route to a vetted California accounting practice running under TechBrot&rsquo;s standards.", list: ["Bay Area or LA-based independent practice", "SaaS / ASC 606 revenue-recognition specialization", "AB5 worker-classification depth", "Entertainment &amp; production accounting experience", "CDTFA, FTB, and EDD audit-support coordination", "Central Valley agriculture &amp; manufacturing specialization", "Same platform standards as direct delivery"], cta: "See California partner status &rarr;", href: "#ca-pillar-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file federal or California tax returns. For FTB, CDTFA, EDD, or IRS filings, audit representation, and worker-classification disputes, we coordinate with your existing California CPA or EA.",

  // CONTEXT — 4 differentiators. (H2: What makes California accounting different. + 4 H3s VERBATIM)
  context: [
    { category: "Worker Classification (AB5)", heading: "The ABC test reclassifies most core-work contractors.", body: ["Under <strong>AB5&rsquo;s ABC test</strong>, a worker is an employee unless the business proves all three prongs. <strong>Prong B</strong> &mdash; work outside the usual course of business &mdash; traps companies whose contractors do core work: developers, writers, designers, drivers. Penalties run <strong>$5,000&ndash;$25,000 per violation</strong> plus back payroll taxes.", "QuickBooks must cleanly separate W-2 from 1099 and make the misclassification exposure visible before the EDD does."] },
    { category: "Income Tax &amp; Payroll Stack", heading: "Highest income tax in the U.S. &mdash; plus uncapped SDI.", body: ["California&rsquo;s top personal rate is <strong>13.3%</strong> (12.3% plus a 1% Mental Health Services Tax over $1M) &mdash; the highest of any state. There is <strong>no local income tax</strong>, but <strong>State Disability Insurance (SDI) runs 1.2% on all wages with no cap</strong>, rising in future years.", "QuickBooks Payroll must be configured for California SDI, PIT withholding, and EDD reporting. The uncapped SDI is a common surprise for high-wage California payrolls."] },
    { category: "District Sales Tax", heading: "7.25% base &mdash; the most complex district system in the U.S.", body: ["California&rsquo;s <strong>7.25% base</strong> is the nation&rsquo;s highest, and hundreds of overlapping city, county, and special-district add-ons push the combined rate <strong>past 10.25%</strong> in some areas. The rate is sourced by location.", "QuickBooks must apply the correct combined rate per customer location &mdash; a flat statewide rate is wrong almost everywhere. This is among the most common California books errors."] },
    { category: "Industry Profile", heading: "SaaS, ecommerce, agencies, entertainment &mdash; and Central Valley ag.", body: ["California&rsquo;s economy spans <strong>SaaS and technology (Bay Area), entertainment and production (LA), ecommerce, agencies, restaurants, and real estate</strong>, plus <strong>agriculture and manufacturing</strong> in the Central Valley.", "Each vertical has distinct QuickBooks requirements: ASC 606 for SaaS, gross-vs-net for agencies, job costing for production and construction, multi-channel reconciliation for ecommerce."] },
  ],
  contextNote: "California operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply to your business.",

  // SCENARIOS — 3 honestly-labeled composites. H3s VERBATIM from contract. CTAs route to /contact/ (no CA children).
  // (H2: What a California engagement actually looks like. + 3 scenario H3s)
  scenarios: [
    { tag: "SaaS &middot; San Francisco Bay Area", heading: "A $4M ARR SaaS company booking annual contracts as revenue on the day they were signed.", body: ["<strong>Situation.</strong> Annual subscription deals recognized in full at signing instead of deferred over the contract term &mdash; overstating current revenue and distorting MRR/ARR. Deferred revenue liability not tracked. Engineering contractors doing core product work classified as 1099s, creating significant AB5 exposure ahead of a Series A diligence.", "<strong>What we did.</strong> QBO cleanup, ASC 606 deferred-revenue schedule built, MRR/ARR re-derived from corrected recognition, contractor population assessed against the ABC test, payroll-tax exposure quantified for their CPA and counsel.", "<strong>Outcome.</strong> Clean, investor-ready financials with defensible deferred revenue. AB5 exposure surfaced and addressed before diligence instead of during it."], cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
    { tag: "Production &middot; Los Angeles County", heading: "A creative production company billing $7M in projects with media spend booked gross.", body: ["<strong>Situation.</strong> Pass-through production and media spend recorded as gross revenue, inflating the top line by several million. No project-level job costing. Heavy freelance crew base classified entirely as 1099 with no ABC-test analysis. District sales tax applied at a single LA rate across clients in multiple counties.", "<strong>What we did.</strong> Principal-vs-agent analysis under ASC 606 and gross-to-net reclassification, project job-costing structure built in QuickBooks, freelance population assessed for AB5, district sales tax corrected by client location.", "<strong>Outcome.</strong> True net revenue established and project margins visible for the first time. Worker-classification and CDTFA exposure quantified and handed to their CPA."], cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
    { tag: "Ecommerce &middot; San Diego County", heading: "A DTC ecommerce brand selling into 40 states with California district tax misconfigured.", body: ["<strong>Situation.</strong> Shopify and Amazon channels reconciled manually and inconsistently. California district sales tax applied at a flat rate, under-collecting in high-rate jurisdictions. Multi-state economic nexus untracked. Inventory and COGS not tied to channel, so true product margin was unknown.", "<strong>What we did.</strong> Channel reconciliation automated into QuickBooks, California district rates corrected by ship-to location, multi-state nexus footprint mapped, inventory/COGS structured by channel and SKU for real margin visibility.", "<strong>Outcome.</strong> Accurate channel-level margin, correct California district tax collection, and a documented nexus position for their CPA to act on."], cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
  ],
  scenariosNote: "Three composite scenarios drawn from common California engagement shapes. Identifying details anonymized; the operational patterns are real.",

  // REPRESENTATIVE OUTCOMES — REFRAMED (R5 standing). meta → engagement type, not specific client.
  // (H2: Recent California results.)
  outcomes: [
    { figure: "$38K", detail: "AB5 misclassification exposure resolved before audit", meta: "Representative &middot; agency AB5" },
    { figure: "19&rarr;5 days", detail: "Month-end close cut after QuickBooks rebuild", meta: "Representative &middot; SaaS rebuild" },
    { figure: "$31K", detail: "CDTFA district sales-tax exposure corrected by location", meta: "Representative &middot; ecommerce sales-tax" },
    { figure: "3 years", detail: "ASC 606 SaaS revenue restated &amp; reconciled for a raise", meta: "Representative &middot; SaaS revenue recognition" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle &mdash; not specific client results.",

  // ADVISORY — mission block. STANDING brand line is the H2.
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, strategic positioning, and advisory. California has the highest concentration of venture-backed and growth-stage businesses in the country &mdash; companies where the books need to support fundraising, board reporting, and complex revenue recognition. For California businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, ASC 606 revenue strategy, KPI design, and California-specific planning around AB5 and entity structure in coordination with your CPA. By application. Best fit: $1M&ndash;$50M California businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards. H3 names VERBATIM from contract. NO CA child links (plain names).
  // (H2: Industry-specific accounting for California's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Ecommerce &amp; DTC", body: "California DTC and marketplace sellers &mdash; <strong>multi-channel reconciliation</strong> (Shopify, Amazon, marketplaces), district sales tax by ship-to location, multi-state economic nexus, inventory and COGS by SKU and channel." },
    { num: "02", name: "Agencies, SaaS &amp; Production", body: "Bay Area SaaS, LA agencies and production &mdash; <strong>ASC 606 revenue recognition</strong>, gross-vs-net principal/agent treatment, deferred revenue and MRR/ARR, project job costing, heavy AB5 freelancer exposure." },
    { num: "03", name: "Restaurants &amp; Hospitality", body: "California multi-location operators &mdash; <strong>POS reconciliation</strong>, tipped-employee payroll with CA SDI, food vs. alcohol sales tax, district rate by location, weekly close, local minimum-wage compliance tracking." },
    { num: "04", name: "Real Estate &amp; Property", body: "California investors, brokerages, and property managers &mdash; <strong>multi-entity ledgers</strong>, trust accounting, 1031 exchange documentation, Prop 13 basis tracking, passive activity allocation, agent commission structures." },
    { num: "05", name: "Professional Services", body: "California consultancies, law firms, and advisory practices &mdash; <strong>project and matter-level tracking</strong>, IOLTA trust accounting for law firms, partner draw classification, AB5 contractor analysis, ASC 606 for fixed-fee engagements." },
    { num: "06", name: "Construction &amp; Contractors", body: "California general contractors &mdash; <strong>job costing</strong>, WIP schedules, AIA billing, retainage tracking, prevailing-wage payroll, CSLB-aware compliance, subcontractor 1099s and AB5 exposure." },
  ],
  industriesNote: "Industries not listed &mdash; healthcare, nonprofit, manufacturing, agriculture &mdash; are served via <a href=\"/accounting/industries/\">our global industry pages</a>. Local-intent pages exist only where California creates genuinely distinct requirements.",

  // SERVICES — 6 cards. H3 names VERBATIM from contract. NO CA child links; CTAs route to /contact/.
  // National overview links (real pages) kept. (H2: Find the right service... + 6 H3s)
  services: [
    { eyebrow: "Service 01", name: "California Bookkeeping Services", body: "Recurring fixed-fee monthly close for California businesses. Bank reconciliation, district sales tax sub-reconciliation, $800 franchise tax accrual, ASC 606 where applicable, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "$400/mo", cadence: "Recurring monthly", cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
    { eyebrow: "Service 02", name: "California QuickBooks ProAdvisor", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for California businesses. Covers QBO, Desktop, Enterprise, and Payroll across all CA industry types. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
    { eyebrow: "Service 03", name: "California QuickBooks Cleanup", body: "QuickBooks files with structural problems &mdash; district sales tax misconfiguration, ASC 606 revenue errors, 1099/W-2 misclassification, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "$1,500", cadence: "One-time, written scope", cta: "Get the free file review &rarr;", href: "/quickbooks/file-review/?intent=file-review" },
    { eyebrow: "Service 04", name: "California QuickBooks Setup", body: "Professional QuickBooks implementation for California businesses &mdash; chart of accounts for your CA industry, district sales tax configuration, ASC 606 deferred-revenue setup for SaaS, CA payroll with SDI. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "$750", cadence: "One-time, 2&ndash;4 weeks", cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
    { eyebrow: "Service 05", name: "California Sales Tax Compliance", body: "CA sales tax filing, district-rate-by-jurisdiction configuration, taxable vs. exempt classification, economic nexus for out-of-state sellers into California, CDTFA notice support. <a href=\"/accounting/sales-tax-compliance/\">National overview &rarr;</a>", starting: "$250/mo", cadence: "Recurring + nexus review", cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
    { eyebrow: "Service 06", name: "California QuickBooks Migration", body: "Desktop &rarr; Online migration with California operational context preserved. Central Valley manufacturers, agriculture operations, and larger CA firms on Enterprise &mdash; migration scoped and delivered cleanly. <a href=\"/quickbooks/migration/\">National migration overview &rarr;</a>", starting: "$2,500", cadence: "One-time, 3&ndash;8 weeks", cta: "Book the discovery call &rarr;", href: "/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU" },
  ],
  servicesNote: "Additional California engagements &mdash; QuickBooks reconciliation, QuickBooks training, error fixes, monthly bookkeeping, cleanup &amp; catch-up bookkeeping, urgent bookkeeping, AB5 worker classification, sales tax help, FTB notice help, and business tax problems &mdash; are all delivered today; dedicated California pages for each publish on a rolling cadence. <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU\">Tell us what you need &rarr;</a>",

  // ECOSYSTEM — 6 clusters. H3 headings VERBATIM. NO child links: items are plain LABELS (content map).
  // (H2: Every California page in one place. + 6 cluster H3s)
  ecosystem: [
    { eyebrow: "Cluster 01", heading: "California money cluster", lede: "Primary engagements &mdash; the work behind &ldquo;quickbooks accountant near me&rdquo; and &ldquo;bookkeeper near me&rdquo; in California.", links: [
      { label: "CA QuickBooks Accountant / ProAdvisor", tag: "&#9733; umbrella", href: "/find-an-accountant/california/quickbooks-accountant/" },
      { label: "CA Small Business Accountant", href: "/find-an-accountant/california/small-business-accountant/" },
      { label: "CA Bookkeeping Services", href: "/find-an-accountant/california/bookkeeping-services/" },
      { label: "CA Virtual Bookkeeper", href: "/find-an-accountant/california/virtual-bookkeeper/" },
      { label: "Speak to a CA ProAdvisor", tag: "BOFU", href: "/find-an-accountant/california/speak-to-a-proadvisor/" },
      { label: "CA Pricing &amp; Engagement Fees", href: "/find-an-accountant/california/pricing/" },
    ] },
    { eyebrow: "Cluster 02", heading: "California QuickBooks spokes", lede: "CA-specific QuickBooks ProAdvisor engagements, each a dedicated California page.", links: [
      { label: "CA QuickBooks Setup", href: "/find-an-accountant/california/quickbooks-setup/" },
      { label: "CA QuickBooks Cleanup", href: "/find-an-accountant/california/quickbooks-cleanup/" },
      { label: "CA QuickBooks Reconciliation", href: "/find-an-accountant/california/quickbooks-reconciliation/" },
      { label: "CA QuickBooks Migration", href: "/find-an-accountant/california/quickbooks-migration/" },
      { label: "CA QuickBooks Training", href: "/find-an-accountant/california/quickbooks-training/" },
      { label: "CA QuickBooks Error Fixes", href: "/find-an-accountant/california/quickbooks-error-fixes/" },
    ] },
    { eyebrow: "Cluster 03", heading: "California bookkeeping spokes", lede: "Recurring and project bookkeeping engagements scoped to California operational reality.", links: [
      { label: "CA Monthly Bookkeeping", href: "/find-an-accountant/california/monthly-bookkeeping/" },
      { label: "CA Cleanup &amp; Catch-Up Bookkeeping", href: "/find-an-accountant/california/cleanup-bookkeeping/" },
      { label: "CA Urgent Bookkeeping", href: "/find-an-accountant/california/urgent-bookkeeping/" },
    ] },
    { eyebrow: "Cluster 04", heading: "California tax &amp; classification cluster", lede: "The genuinely CA-specific stack &mdash; AB5, district sales tax, FTB notices.", links: [
      { label: "CA Sales Tax Help (7.25% base &middot; district rates &middot; nexus)", href: "/find-an-accountant/california/sales-tax-help/" },
      { label: "CA AB5 Worker Classification (ABC test &middot; EDD)", href: "/find-an-accountant/california/ab5-worker-classification/" },
      { label: "CA State Tax / FTB Notice Help ($800 &middot; LLC fee)", href: "/find-an-accountant/california/state-tax-notice-help/" },
      { label: "CA Business Tax Problems", href: "/find-an-accountant/california/business-tax-problems/" },
    ] },
    { eyebrow: "Cluster 05", heading: "California industries", lede: "Vertical-specific accounting depth for California&rsquo;s leading sectors &mdash; the verticals with genuine CA-specific requirements.", links: [
      { label: "CA Ecommerce Accounting", href: "/find-an-accountant/california/industries/ecommerce/" },
      { label: "CA Agency, SaaS &amp; Production Accounting", href: "/find-an-accountant/california/industries/agency/" },
      { label: "CA Restaurant Accounting", href: "/find-an-accountant/california/industries/restaurant/" },
      { label: "CA Real Estate Accounting", href: "/find-an-accountant/california/industries/real-estate/" },
      { label: "CA Professional Services Accounting", href: "/find-an-accountant/california/industries/professional-services/" },
      { label: "CA Construction Accounting", href: "/find-an-accountant/california/industries/construction/" },
    ] },
    { eyebrow: "Cluster 06", heading: "California cities", lede: "Local coverage for California&rsquo;s primary metros &mdash; each built around that city&rsquo;s real business taxes.", links: [
      { label: "Los Angeles", href: "/find-an-accountant/california/cities/los-angeles/" },
      { label: "San Francisco", href: "/find-an-accountant/california/cities/san-francisco/" },
      { label: "San Diego", href: "/find-an-accountant/california/cities/san-diego/" },
      { label: "San Jose", href: "/find-an-accountant/california/cities/san-jose/" },
      { label: "Sacramento", href: "/find-an-accountant/california/cities/sacramento/" },
      { label: "Oakland", href: "/find-an-accountant/california/cities/oakland/" },
      { label: "Fresno", href: "/find-an-accountant/california/cities/fresno/" },
      { label: "Long Beach", href: "/find-an-accountant/california/cities/long-beach/" },
      { label: "Anaheim (Orange County)", href: "/find-an-accountant/california/cities/anaheim/" },
      { label: "Riverside", href: "/find-an-accountant/california/cities/riverside/" },
      { label: "Bakersfield", href: "/find-an-accountant/california/cities/bakersfield/" },
      { label: "All California cities &amp; counties", href: "/find-an-accountant/california/cities/" },
    ] },
  ],
  ecosystemNote: "Each California page above is live &mdash; follow the link for the full detail, or <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU\">start with the discovery call</a>.",

  // PRICING — 8 rows (rendered as buyer-cards, not a table). svc has NO child link.
  // (H2: Fixed-fee starting ranges for California engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", range: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", notes: "District sales tax sub-reconciliation + $800 franchise tax accrual." },
    { svc: "QuickBooks cleanup", range: "$1,500&ndash;$15,000+", cadence: "One-time", notes: "District-rate misconfiguration + ASC 606 SaaS/agency corrections are common." },
    { svc: "Catch-up bookkeeping", range: "$2,000&ndash;$20,000+", cadence: "One-time", notes: "Scoped by months behind, volume, and CA complexity." },
    { svc: "QuickBooks setup", range: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 wks", notes: "District sales tax + CA payroll (SDI) config; ASC 606 deferred revenue for SaaS." },
    { svc: "Desktop &rarr; Online migration", range: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 wks", notes: "Central Valley manufacturers, ag operations, and larger CA firms on Enterprise." },
    { svc: "Payroll management", range: "$150&ndash;$800+/mo", cadence: "Recurring monthly", notes: "CA SDI (uncapped), PIT withholding, EDD reporting; AB5 1099/W-2 tracking." },
    { svc: "Sales tax compliance", range: "$250&ndash;$1,500+/mo + $500&ndash;$3,000 nexus review", cadence: "Recurring monthly", notes: "7.25% base &middot; district rates by location &middot; economic nexus &middot; multi-state." },
    { svc: "Fractional CFO", range: "$3,000&ndash;$8,000+/mo", cadence: "Recurring, by application", notes: "CA-aware strategic finance; ASC 606 revenue strategy + entity structure with your CPA." },
  ],
  pricingNote: "Indicative starting ranges. Final fees scale with transaction volume, employee and contractor count, district-tax footprint, industry specifics, and multi-state exposure. <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU\">Get a written fixed-fee scope &rarr;</a>",

  // CITIES + COUNTIES. cities are plain labels (no CA child pages). (H2: Serving California businesses statewide. + 2 H3s)
  cities: [
    { name: "Los Angeles", county: "Los Angeles County" },
    { name: "San Francisco", county: "San Francisco County" },
    { name: "San Diego", county: "San Diego County" },
    { name: "San Jose", county: "Santa Clara County" },
    { name: "Sacramento", county: "Sacramento County" },
    { name: "Orange County", county: "Orange County" },
    { name: "Oakland", county: "Alameda County" },
    { name: "Fresno", county: "Fresno County" },
  ],
  countyProse: "Los Angeles, San Diego, Orange, Riverside, San Bernardino, Santa Clara, Alameda, Sacramento, Contra Costa, Fresno, Kern, San Francisco, Ventura, San Mateo, San Joaquin, Stanislaus, Sonoma, Tulare, Santa Barbara, Solano, Monterey, Placer, San Luis Obispo, Santa Cruz, Merced, Marin, Butte, Yolo, El Dorado, Imperial, Shasta, Madera, Kings, Napa, Humboldt, Nevada, Sutter, Mendocino, Yuba, Lake, Tehama, Tuolumne, San Benito, Calaveras, Siskiyou, Amador, Lassen, Glenn, Del Norte, Colusa, Plumas, Inyo, Mariposa, Mono, Trinity, Modoc, Sierra, Alpine &mdash; all 58 counties.",
  citiesNote: "Don&rsquo;t see your city? All 58 California counties are served via remote engagement delivery. <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=location&amp;funnel_stage=MOFU\">Start the conversation &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across construction, professional services, and nonprofits &mdash; the judgment behind every California engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p PT", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — 4 vetting standards. (H2: Trusted California partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll &mdash; verifiable on Intuit&rsquo;s public directory." },
    { num: "02", term: "Demonstrated California tax fluency", detail: "AB5 / ABC test, district sales tax by jurisdiction, $800 franchise tax and LLC fee, FTB / CDTFA / EDD coordination." },
    { num: "03", term: "Industry specialization depth", detail: "ASC 606 revenue recognition for SaaS, gross-vs-net for agencies and production, job costing for construction." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards. H3 names VERBATIM. (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "California operational depth", body: "AB5 worker-classification tracking, district sales tax by jurisdiction, ASC 606 revenue recognition for SaaS and agencies, $800 franchise tax and LLC fee accrual, CA SDI payroll. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Verifiable on Intuit&rsquo;s <a href=\"https://proadvisor.intuit.com/\" rel=\"noopener nofollow\">public ProAdvisor directory</a>." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for complex SaaS and multi-channel engagements." },
    { num: "04", name: "Sophisticated buyer, honest delivery", body: "California buyers know the difference between genuine expertise and a keyword swap. We are an independent ProAdvisor firm with no Intuit affiliation, no affiliate commissions, and no upsell agenda &mdash; just the right scope for your California business." },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for California businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many CA CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files CA / federal taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "AB5 worker-classification tracking", us: "<strong>Standard &mdash; 1099/W-2 separation + exposure</strong>", cpa: "Usually; varies by firm", remote: "Often missed entirely", winner: "us" },
    { dim: "District sales tax config", us: "<strong>Correct combined rate by location</strong>", cpa: "Varies; not their primary focus", remote: "Often flat rate applied &mdash; misconfigured", winner: "us" },
    { dim: "ASC 606 revenue recognition", us: "<strong>Deferred revenue, gross-vs-net standard</strong>", cpa: "If they specialize in SaaS/agencies", remote: "Rarely handled correctly", winner: "us" },
    { dim: "$800 franchise tax + LLC fee accrual", us: "<strong>Accrued in the books</strong>", cpa: "Usually at filing time", remote: "Generally not tracked", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "FTB / CDTFA / EDD representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for FTB filings, California tax returns, and FTB/CDTFA/EDD representation, use a licensed California CPA or EA. For QuickBooks operations, bookkeeping, district sales tax compliance, AB5 tracking, and ASC 606 revenue recognition &mdash; TechBrot is built for that. Most California clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — 6 .gov / official sources. (H2: Verify everything on this page.)
  authority: [
    { name: "California Franchise Tax Board (FTB)", href: "https://www.ftb.ca.gov/", detail: "Authoritative source for California income tax rates, the $800 minimum franchise tax, the LLC gross-receipts fee, factor-presence nexus, and FTB audit procedures." },
    { name: "California Department of Tax and Fee Administration (CDTFA)", href: "https://www.cdtfa.ca.gov/", detail: "Authoritative source for California sales and use tax, district tax rates, seller&rsquo;s permits, economic nexus, and CDTFA sales-tax audits." },
    { name: "California Employment Development Department (EDD)", href: "https://edd.ca.gov/", detail: "Authoritative source for California payroll taxes, State Disability Insurance (SDI), employer registration, and worker-classification (AB5) audits." },
    { name: "California Dept. of Industrial Relations &mdash; Independent Contractor / AB5", href: "https://www.dir.ca.gov/dlse/faq_independentcontractor.htm", detail: "Authoritative source for AB5, the ABC test, exemptions, and worker-classification requirements under California Labor Code." },
    { name: "Intuit ProAdvisor Directory", href: "https://proadvisor.intuit.com/", detail: "Authoritative source for verifying active QuickBooks ProAdvisor certifications &mdash; including TechBrot&rsquo;s." },
    { name: "Internal Revenue Service (IRS)", href: "https://www.irs.gov/", detail: "Authoritative source for federal employment tax (Form 941), Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 17 Q/A VERBATIM from the contract. visible = schema. (H2: California QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve California businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll management, sales tax compliance, and fractional CFO coordination to California businesses statewide &mdash; directly through our lead practice, with trusted partner practices across California. All 58 California counties covered, including Los Angeles, the Bay Area, San Diego, the Central Valley, and the Sacramento region." },
    { q: "How does AB5 worker classification affect my bookkeeping?", a: "California&rsquo;s AB5 codified the ABC test: a worker is presumed an employee unless the hiring business proves all three prongs &mdash; the worker is free from control, performs work outside the company&rsquo;s usual course of business, and runs an independent trade. Prong B is where most companies fail, because contractors doing core work (a developer at a software company, a writer at an agency) are almost always reclassified as employees. Misclassification penalties run $5,000 to $25,000 per violation plus back payroll taxes. In QuickBooks this means correctly distinguishing W-2 wages from 1099 contractor pay, and tracking the payroll-tax exposure if contractors should be employees. We set the books up so the classification position is defensible." },
    { q: "What is California&rsquo;s sales tax rate and how do district taxes work?", a: "California&rsquo;s base sales tax rate is 7.25% &mdash; the highest statewide base in the U.S. On top of that, cities, counties, and special districts add district taxes that push the combined rate to roughly 10.25% or more in some jurisdictions. The rate depends on where the sale is sourced, so QuickBooks must apply the correct combined rate by customer location, not a single flat statewide rate. District-tax misconfiguration is one of the most common California QuickBooks issues we correct, especially for businesses shipping across multiple counties." },
    { q: "What is the $800 California franchise tax and who pays it?", a: "Every corporation and LLC that is incorporated, registered, or doing business in California owes the $800 minimum annual tax to the Franchise Tax Board &mdash; even at a loss or while inactive. Corporations pay the greater of 8.84% of net income or $800; S corporations pay the greater of 1.5% of net income or $800. LLCs pay the $800 annual tax plus an additional gross-receipts fee once California income exceeds $250,000. Newly formed corporations are exempt from the minimum tax in their first tax year. QuickBooks should accrue the $800 (and the LLC fee where applicable) so it never surprises the books." },
    { q: "What QuickBooks versions does TechBrot support for California businesses?", a: "All current QuickBooks versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QBO Advanced dominates among California SaaS companies, agencies, and professional-services firms. QuickBooks Enterprise is common among Central Valley manufacturers, agriculture operations, and larger construction contractors. SaaS businesses needing ASC 606 revenue recognition and agencies needing gross-vs-net treatment are handled as standard engagement components." },
    { q: "Does TechBrot file California or federal tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file federal or California tax returns, and do not represent clients before the Franchise Tax Board (FTB), the California Department of Tax and Fee Administration (CDTFA), or the Employment Development Department (EDD). We deliver clean, CPA-ready bookkeeping and coordinate with your CPA or EA. The standard model: TechBrot handles QuickBooks operations; your California CPA handles filing and representation." },
    { q: "How does a California engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your California operational context (industry, AB5 contractor exposure, district sales-tax footprint, multi-state activity), recommend the right engagement structure, and deliver a written fixed-fee scope within 3 business days. Same-day diagnostic for emergencies." },
    { q: "What about FTB, CDTFA, or EDD notices and audits?", a: "For FTB (income/franchise), CDTFA (sales tax), or EDD (payroll/worker classification) notices, TechBrot provides operational support and documentation &mdash; gathering records, preparing reconciliations, organizing timelines. For active disputes or significant exposure &mdash; including EDD worker-classification audits &mdash; we coordinate with California-licensed CPAs or tax counsel who can represent the business before the agency." },
    { q: "Does TechBrot handle bookkeeping for California SaaS and tech companies?", a: "Yes. California SaaS and technology bookkeeping centers on ASC 606 revenue recognition &mdash; deferring subscription revenue correctly, handling annual-vs-monthly billing, and tracking deferred revenue and MRR/ARR in QuickBooks. We also handle the AB5 contractor-classification exposure common in tech, R&amp;D expense tracking, and investor-ready financials. SaaS metrics are delivered in a format your CPA and your board can both use." },
    { q: "Do California agencies and production companies have special QuickBooks requirements?", a: "Yes &mdash; primarily around ASC 606 gross-vs-net revenue recognition, AB5 contractor classification, and project/job costing. Agencies and production companies billing media buys, production spend, or pass-through costs must determine whether they act as principal (gross revenue) or agent (net fee) under ASC 606. Entertainment and production also rely heavily on freelancers, where AB5 exposure is high. Getting revenue recognition, job costing, and worker classification right in QuickBooks is the core of every California agency and production engagement." },
    { q: "How much does California bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; Desktop to Online migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; fractional CFO $3,000&ndash;$8,000+/mo." },
    { q: "Can I use my California CPA for taxes and TechBrot for bookkeeping?", a: "Yes &mdash; that&rsquo;s the standard model. TechBrot handles operational bookkeeping, QuickBooks configuration, and California-specific compliance support (district sales tax, AB5 contractor tracking, $800 franchise tax accrual, ASC 606 for SaaS); your California CPA handles filing, audit, and FTB/CDTFA/EDD representation. Year-end CPA handoff is included in every recurring California engagement." },
    { q: "Does TechBrot serve California businesses?", a: "Yes. TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, California sales tax compliance, and fractional CFO engagements to California businesses across all 58 counties. Direct service by TechBrot&rsquo;s lead practice; trusted partner practices in California where in-region presence or industry specialization matters. Coverage spans Los Angeles, the Bay Area, San Diego, the Central Valley, and the Sacramento region." },
    { q: "How does California&rsquo;s AB5 worker-classification rule affect my bookkeeping?", a: "AB5 codified the ABC test: a worker is presumed an employee unless the business proves all three prongs &mdash; freedom from control, work outside the company&rsquo;s usual course of business, and an independently established trade. Prong B is where most companies fail, because a contractor doing core work (a developer at a software company, a writer at an agency) is almost always reclassified as an employee. Misclassification penalties run $5,000 to $25,000 per violation plus back payroll taxes. In QuickBooks, this means cleanly separating W-2 wages from 1099 contractor pay and tracking the payroll-tax exposure when contractors should be employees." },
    { q: "What is California&rsquo;s sales tax rate and how do district taxes work?", a: "California&rsquo;s base sales tax rate is 7.25% &mdash; the highest statewide base in the U.S. Cities, counties, and special districts add district taxes that push the combined rate to roughly 10.25% or more in some jurisdictions. The rate depends on where the sale is sourced, so QuickBooks must apply the correct combined rate by customer location &mdash; not a single flat statewide rate. District-tax misconfiguration is among the most common California QuickBooks issues we correct." },
    { q: "What QuickBooks versions does TechBrot support for California businesses?", a: "All current QuickBooks versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QBO Advanced dominates among California SaaS companies, agencies, and professional-services firms. QuickBooks Enterprise is common among Central Valley manufacturers, agriculture operations, and larger construction contractors. SaaS ASC 606 revenue recognition and agency gross-vs-net treatment are handled as standard engagement components." },
    { q: "How does a California engagement start, and does TechBrot file California taxes?", a: "Engagements start with a free 30-minute discovery call; a written fixed-fee scope is delivered within 3 business days. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file federal or California tax returns, and do not represent clients before the Franchise Tax Board (FTB), the California Department of Tax and Fee Administration (CDTFA), or the Employment Development Department (EDD). We deliver clean, CPA-ready bookkeeping and coordinate with your existing California CPA or EA." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll &mdash; verifiable on Intuit&rsquo;s <a href=\"https://proadvisor.intuit.com/\" rel=\"noopener nofollow\">public ProAdvisor directory</a>" },
    { label: "California practice", detail: "All 58 counties served &middot; LA, the Bay Area, San Diego, the Central Valley, Sacramento &middot; Industries: ecommerce, agencies/SaaS/production, restaurants, real estate, professional services, construction" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "CA statutory references reviewed against FTB, CDTFA, and EDD primary sources &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. H3 names VERBATIM (Nevada, Arizona, Oregon, Washington).
  // (H2: Multi-state California businesses. + 4 H3s)
  related: [
    { name: "Nevada", body: "California businesses with Nevada operations &mdash; no Nevada personal income tax, Modified Business Tax and Commerce Tax exposure, cross-border payroll, and multi-state sales tax for businesses selling into both states.", cta: "ProAdvisors in Nevada &rarr;" },
    { name: "Arizona", body: "California businesses expanding into Arizona &mdash; Arizona&rsquo;s Transaction Privilege Tax (TPT) instead of a conventional sales tax, lower flat income tax, cross-border payroll, and multi-state nexus.", cta: "ProAdvisors in Arizona &rarr;" },
    { name: "Oregon", body: "California businesses with Oregon operations &mdash; no Oregon sales tax but a Corporate Activity Tax (CAT) on commercial activity, Portland-area local taxes, and multi-state payroll.", cta: "ProAdvisors in Oregon &rarr;" },
    { name: "Washington", body: "California businesses with Washington operations &mdash; no personal income tax but a Business &amp; Occupation (B&amp;O) gross-receipts tax, destination-based sales tax, and multi-state nexus considerations for tech and ecommerce.", cta: "ProAdvisors in Washington &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/california/";
      // QAPage mainEntity from the first 5 aiSummary items (matches the visible 5-question block).
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"California QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and California sales tax compliance for California businesses across all 58 counties — from Los Angeles and San Francisco to San Diego, San Jose, and Sacramento. Built around AB5 worker classification, district sales tax complexity, the $800 FTB minimum franchise tax, and the highest personal income tax in the U.S.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/california-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ca-pillar-in-brief-text","#ca-pillar-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-06"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"California"}]},
        {"@type":"Service","@id":url+"#service","name":"California QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, and California sales tax compliance for California businesses across all 58 counties. Delivered directly by TechBrot's lead practice, with trusted partner practices in California. Independent Certified QuickBooks ProAdvisor firm; does not file federal or California tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"California","containsPlace":[
          {"@type":"City","name":"Los Angeles"},{"@type":"City","name":"San Francisco"},{"@type":"City","name":"San Diego"},{"@type":"City","name":"San Jose"},{"@type":"City","name":"Sacramento"},{"@type":"City","name":"Oakland"},{"@type":"City","name":"Fresno"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"California small and mid-sized businesses, SaaS and technology companies, ecommerce sellers, agencies, entertainment and production companies, restaurants, real estate operators, and professional-services firms"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"California accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"California Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"California QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"California QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"California QuickBooks Migration"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"California Sales Tax Compliance"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in California — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

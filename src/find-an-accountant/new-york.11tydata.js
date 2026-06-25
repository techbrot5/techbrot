/* /find-an-accountant/new-york/ — t-location PILLAR (the state-page proving page;
 * the template-quality bar for all future state pillars). Sources: FROZEN EQUITY
 * CONTRACT (contract-ny.txt) — the ONLY authority for the headings + 17 FAQ — and
 * the live baseline old HTML (find-an-accountant/new-york/index.html, full body read)
 * for body prose/section content. Data-file shape mirrors quickbooks/desktop.11tydata.js:
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph.
 *
 * HONESTY REFRAME (founder ruling b): the old "Recent New York results." section
 * implied specific clients ("Agency · Manhattan" etc.) with the note "real engagement
 * outcomes, anonymized by client request". REFRAMED here: H2 → "Representative New York
 * outcomes."; note → explicitly illustrative; each card meta → ENGAGEMENT TYPE
 * ("Representative · agency cleanup") with no specific-client assertion. The figures +
 * operational substance (the recovery, close-time cut, IOLTA reconstruction, DTF
 * correction) are kept — those patterns are genuinely citable. The composite-scenarios
 * section was ALREADY honestly labeled and is kept verbatim. Reviews are ONLY the 2 real
 * Clutch reviews (Heidi Schubert, Barbara Best) — no invented NY reviewers, no
 * AggregateRating. No founder/personal name in visible content; David Westgate appears
 * only as the named operator/reviewer (the standing-rule exception). Independent firm —
 * does NOT file NY/NYC taxes; coordinates with the client's NY CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief (carries the full NY summary prose
  // moved out of the in-brief, which now keeps only a brief lead-in). (H2: TechBrot in New York, summarized.)
  summarized: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor services</strong>, New York bookkeeping, QuickBooks setup, cleanup, migration, NY sales tax compliance, and fractional CFO engagements to New York businesses across <strong>all 62 counties</strong> &mdash; from Manhattan and Brooklyn to Buffalo, Rochester, Syracuse, and Albany. New York&rsquo;s <strong>combined NYC + NY State income tax (the highest in the U.S. at 14.776%)</strong>, <strong>NYC Unincorporated Business Tax</strong>, <strong>sales tax applied to services unusual in other states</strong>, MTA surcharge, and concentration in <strong>financial services, agencies, real estate, legal, healthcare, and nonprofit</strong> make the New York operational context substantively different from every other state. Engagements run as fixed-fee monthly retainers or one-time scopes with written agreements before any work begins. <strong>Direct service by TechBrot</strong> for most engagements; <strong>curated local New York operators</strong> where in-city presence, IOLTA specialization, or CHAR500 depth matters. Honest scope: we do not file NY State or NYC tax returns &mdash; we coordinate with your CPA or EA.",

  // PROADVISOR CREDENTIAL STRIP — proof-strip + cert line. (H2: Certified QuickBooks ProAdvisor credentials)
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
    { value: "62", label: "New York counties served &mdash; five boroughs to upstate" },
    { value: "Independent", label: "ProAdvisor firm &mdash; not affiliated with Intuit Inc." },
  ],

  // STATE BY THE NUMBERS — proof-strip stat row. (H2: The state by the numbers.)
  stats: [
    { figure: "62", label: "Counties &mdash; NYC&rsquo;s five boroughs plus 57 upstate counties, each with its own tax and compliance profile" },
    { figure: "14.776%", label: "Combined NY State (10.9%) + NYC (3.876%) top marginal income tax rate for NYC residents &mdash; the highest combined personal rate in the U.S." },
    { figure: "8.875%", label: "Combined NYC sales tax &mdash; 4% NY State + 4.5% NYC + 0.375% MTA surcharge &mdash; applied to many services unusual in other states" },
    { figure: "UBT", label: "NYC Unincorporated Business Tax &mdash; 4% on net income of sole proprietors and partnerships doing business in the five boroughs; a common surprise for growing firms" },
    { figure: "CHAR500", label: "NY Attorney General&rsquo;s annual filing for nonprofits &mdash; separate from federal Form 990; a distinct NY compliance requirement" },
    { figure: "IOLTA", label: "Interest on Lawyer Trust Accounts &mdash; mandatory for NY law firms; requires dedicated trust accounting in QuickBooks separate from operating funds" },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the QAPage schema, word-for-word).
  // (H2: TechBrot in New York, in five questions.)
  aiSummary: [
    { q: "Does TechBrot serve New York businesses?", a: "Yes. <strong>TechBrot delivers Certified QuickBooks ProAdvisor services, bookkeeping, payroll, New York sales tax compliance, and fractional CFO engagements to New York businesses across all 62 counties.</strong> Direct service by TechBrot&rsquo;s lead practice; trusted partner practices in New York where in-city presence, IOLTA accounting, or CHAR500 depth matters. Coverage spans the five boroughs, Long Island, Westchester, and all of upstate New York." },
    { q: "What is the NYC Unincorporated Business Tax (UBT) and how does it affect my bookkeeping?", a: "The <strong>NYC Unincorporated Business Tax (UBT)</strong> is a city-level tax levied on sole proprietors and partnerships that carry on a trade, business, or profession in New York City. The UBT rate is <strong>4% on net income</strong> attributable to NYC. It applies on top of NY State personal income tax and federal taxes &mdash; making NYC the highest-tax jurisdiction in the U.S. for unincorporated businesses. <strong>QuickBooks must track NYC-sourced vs. non-NYC revenue</strong> for any business operating across city lines. This is one of the most commonly mishandled compliance areas for growing NYC professional-services firms and agencies." },
    { q: "How does New York&rsquo;s sales tax on services work, and how does it affect QuickBooks setup?", a: "New York applies sales tax to a broader range of services than most states &mdash; including <strong>certain information services, interior design, cleaning, parking, and telecommunications</strong>. The combined rate in <strong>New York City is 8.875%</strong> (4% state + 4.5% NYC + 0.375% MTA surcharge). QuickBooks must be configured with the correct tax codes per service type and customer location. <strong>Misconfiguration &mdash; particularly for agencies, media firms, and professional-services businesses with mixed taxable and exempt revenue</strong> &mdash; is among the most common NY QuickBooks issues we correct." },
    { q: "What QuickBooks versions does TechBrot support for New York businesses?", a: "All current QuickBooks versions: <strong>QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll</strong>. <strong>QBO Advanced</strong> dominates among NYC agencies, media firms, and professional-services businesses. <strong>QuickBooks Enterprise</strong> is common in upstate New York manufacturing and large construction firms. Law firms needing IOLTA trust accounting require specialized QuickBooks trust ledger configuration that we handle as a standard engagement component." },
    { q: "How does a New York engagement start, and does TechBrot file NY or NYC taxes?", a: "Engagements start with a <strong>free 30-minute discovery call</strong>; a <strong>written fixed-fee scope is delivered within 3 business days</strong>. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>we do not file federal, NY State, or NYC tax returns, and do not represent clients before the NY Department of Taxation &amp; Finance or NYC Department of Finance</strong>. We deliver clean, CPA-ready bookkeeping and coordinate with your existing New York CPA or EA." },
  ],

  // GLOSSARY — 8 entity-dense NY terms. (H2: The New York terms that matter for QuickBooks & bookkeeping.)
  stateTerms: [
    { term: "NYC UBT (Unincorporated Business Tax)", def: "<strong>New York City Unincorporated Business Tax.</strong> A 4% city-level tax on net income of sole proprietorships and partnerships doing business in NYC. Applies on top of NY State and federal taxes. Requires QuickBooks to track NYC-sourced revenue separately from non-NYC revenue for allocation. One of the highest-impact compliance items for NYC-based freelancers, agencies, and professional-services partnerships. <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">NY tax notice &amp; UBT detail &rarr;</a>" },
    { term: "NY State + NYC Combined Income Tax", def: "<strong>Combined NY State personal income tax + NYC personal income tax</strong> reaches a top marginal rate of 14.776% for high-earning NYC residents &mdash; 10.9% NY State plus 3.876% NYC &mdash; the highest combined personal income tax rate in the United States. Payroll must be configured for both state withholding (NY DTF) and NYC withholding. Payroll errors from missing the NYC withholding layer are common for businesses newly established in the city." },
    { term: "MTA Surcharge", def: "<strong>Metropolitan Transportation Authority surcharge.</strong> An additional 0.375% added to sales tax in the Metropolitan Commuter Transportation District &mdash; covering NYC, Dutchess, Nassau, Orange, Putnam, Rockland, Suffolk, and Westchester counties. QuickBooks must apply the correct rate by customer location; a flat NYC rate applied to Westchester customers is a common misconfiguration. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax detail &rarr;</a>" },
    { term: "IOLTA (Interest on Lawyer Trust Accounts)", def: "<strong>Interest on Lawyer Trust Accounts.</strong> Mandatory for NY law firms under the Rules of Professional Conduct. Client funds held in trust must be kept in a separate IOLTA account; interest remits to the IOLA Fund. QuickBooks must maintain a dedicated trust ledger that never commingles with operating accounts. Improper handling is a bar-compliance risk. <a href=\"/find-an-accountant/new-york/industries/legal/\">NY legal practice accounting &rarr;</a>" },
    { term: "CHAR500", def: "<strong>NY Attorney General&rsquo;s Annual Filing for Charitable Organizations.</strong> Required for most nonprofits registered in New York, separate from the federal Form 990. Filed with the NY Charities Bureau. Requires GAAP-basis financial statements and a functional expense allocation schedule &mdash; distinct from the 990 format and often missed by nonprofits using bookkeepers unfamiliar with NY nonprofit requirements. <a href=\"/find-an-accountant/new-york/industries/nonprofit/\">NY nonprofit accounting &rarr;</a>" },
    { term: "NY DTF (Department of Taxation &amp; Finance)", def: "<strong>New York State Department of Taxation &amp; Finance.</strong> The primary state tax authority &mdash; administers NY income tax, sales tax, employer withholding, and audit proceedings. Separate from the NYC Department of Finance, which administers NYC-specific taxes (UBT, NYC corporate tax). Most NY tax notices originate from one of these two bodies. <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">DTF notice handling &rarr;</a>" },
    { term: "Gross-vs-Net Revenue Recognition", def: "<strong>ASC 606 gross vs. net reporting</strong> for NY agencies and media firms. Whether an agency recognizes the full media buy or production spend as gross revenue (and corresponding COGS) or only the net fee depends on whether it acts as principal or agent under ASC 606. Incorrect gross/net treatment is the most common bookkeeping error at NYC agencies and inflates or understates revenue by 3&ndash;10x. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY revenue recognition &amp; sales tax detail &rarr;</a>" },
    { term: "NY Economic Nexus (sales tax)", def: "<strong>New York economic nexus for out-of-state sellers.</strong> New York requires sales-tax collection from remote sellers that exceed <strong>both</strong> $500,000 in NY sales <strong>and</strong> more than 100 transactions in the preceding four sales-tax quarters &mdash; one of only two states (with Connecticut) requiring both thresholds. New York&rsquo;s affiliate-nexus rules predate the 2018 <em>Wayfair</em> decision, dating to 2008. Relevant for any national e-commerce or SaaS business selling into New York. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax nexus detail &rarr;</a>" },
  ],

  // DELIVERY — direct vs partners (buyer-card routing split).
  // (H2: What we deliver in New York. · H3: Direct service... · H3: Trusted local...)
  delivery: [
    { eyebrow: "01 &middot; TechBrot delivers directly", heading: "Direct service by TechBrot&rsquo;s lead practice.", lede: "Most New York engagements &mdash; bookkeeping, QuickBooks work, payroll, and sales tax compliance &mdash; are delivered directly by TechBrot&rsquo;s lead practice. <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">Certified QuickBooks ProAdvisors</a> working under the TechBrot brand with full platform infrastructure.", list: ["Monthly bookkeeping &amp; close", "QuickBooks setup, cleanup, migration, and reconciliation", "QuickBooks Online, Desktop, Enterprise, Payroll", "New York payroll &mdash; NY State + NYC withholding", "NYC + NY State sales tax compliance", "UBT revenue allocation and documentation support", "Remote delivery, secure, encrypted access"], cta: "Browse New York services &rarr;", href: "#ny-ecosystem" },
    { eyebrow: "02 &middot; Curated New York partners", heading: "Trusted local New York partners.", lede: "When in-city presence, IOLTA trust-accounting specialization, CHAR500 nonprofit depth, or local NYC Department of Finance coordination matters, engagements route to a vetted New York accounting practice running under TechBrot&rsquo;s standards.", list: ["NYC-based independent practice", "IOLTA trust-accounting specialization (law firms)", "CHAR500 nonprofit compliance depth", "NYC Department of Finance coordination", "NY DTF and IRS audit-support coordination", "Upstate New York industry specialization", "Same platform standards as direct delivery"], cta: "See New York partner status &rarr;", href: "#ny-operators" },
  ],
  deliveryNote: "TechBrot is an independent Certified QuickBooks ProAdvisor firm and does not file federal, NY State, or NYC tax returns. For NY DTF or IRS tax filings, audit representation, and NYC tax matters, we coordinate with your existing New York CPA or EA.",

  // CONTEXT — 4 differentiators. (H2: What makes New York accounting different. + 4 H3s)
  context: [
    { category: "Income Tax Stack", heading: "Highest combined rate in the U.S.", body: ["New York City residents face <strong>federal + NY State + NYC personal income tax</strong>, with a combined top marginal rate of <strong>14.776%</strong> (10.9% NY State + 3.876% NYC). NY State also levies a <strong>Metropolitan Commuter Transportation Mobility Tax (MCTMT)</strong> on net earnings from self-employment in the Metro area.", "<strong>QuickBooks Payroll must be configured for both NY State and NYC withholding</strong> for each NYC-resident employee. Missing the NYC layer is a common payroll error for businesses new to the city. <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">NY tax notice detail &rarr;</a>"] },
    { category: "NYC Unincorporated Business Tax", heading: "The UBT catches growing firms off guard.", body: ["The <strong>NYC UBT</strong> applies to unincorporated businesses &mdash; sole proprietors and partnerships &mdash; doing business in the five boroughs. At <strong>4% on net income attributable to NYC</strong>, it is invisible until a firm grows or incorporates improperly.", "Allocation of NYC-sourced vs. non-NYC income must be tracked in QuickBooks from the first transaction. Retroactive cleanup is common and expensive. <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">UBT planning detail &rarr;</a>"] },
    { category: "Sales Tax on Services", heading: "8.875% in NYC &mdash; applied to services other states don&rsquo;t tax.", body: ["New York taxes a wider range of services than most states &mdash; information services, certain cleaning services, parking, interior design, and more. The <strong>combined NYC rate of 8.875%</strong> (state + city + MTA) applies and must be correctly configured per service type in QuickBooks.", "Agencies and media firms often have mixed taxable and exempt revenue on the same invoice. Getting it wrong triggers NY DTF notices. <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NY sales tax detail &rarr;</a>"] },
    { category: "Industry Profile", heading: "Financial services, agencies, law, nonprofits &mdash; and upstate manufacturing.", body: ["NYC&rsquo;s economy is dominated by <strong>financial services, agencies, media, real estate, legal, and healthcare</strong>. Upstate New York &mdash; Buffalo, Rochester, Syracuse &mdash; adds <strong>manufacturing, construction, and agriculture</strong>.", "Each vertical has distinct QuickBooks requirements: IOLTA trust ledgers for law firms, CHAR500-ready workpapers for nonprofits, gross-vs-net revenue recognition for agencies, job costing for construction."] },
  ],
  contextNote: "New York operational context informs every TechBrot engagement in the state. The diagnostic call identifies which factors apply to your business.",

  // SCENARIOS — 3 honestly-labeled composites (framing KEPT verbatim).
  // (H2: What a New York engagement actually looks like. + 3 scenario H3s)
  scenarios: [
    { tag: "Agency &middot; Midtown Manhattan (New York County)", heading: "A 22-person integrated agency with $6M in media billings booked incorrectly as revenue.", body: ["<strong>Situation.</strong> QBO Advanced file with media buys recorded gross &mdash; inflating revenue by $4.1M. Sales tax applied at a flat NYC rate to clients in Westchester and Long Island, missing the correct blended rates. NYC UBT allocation not tracked; UBT exposure undisclosed and unquantified.", "<strong>What we did.</strong> <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">QBO cleanup</a>, gross-to-net revenue reclassification under ASC 606, sales tax rate correction by client location, NYC UBT revenue-allocation framework built and documented in QuickBooks, CPA briefed with corrected workpapers.", "<strong>Outcome.</strong> True net revenue established. Agency could present accurate financials to a strategic buyer for the first time. NY DTF exposure quantified and addressed with their CPA."], cta: "NY QuickBooks cleanup detail &rarr;", href: "/find-an-accountant/new-york/quickbooks-cleanup/" },
    { tag: "Law Firm &middot; Brooklyn (Kings County)", heading: "A 4-attorney litigation boutique with client funds comingled in operating accounts.", body: ["<strong>Situation.</strong> IOLTA trust account transactions had flowed into the operating QuickBooks file for 14 months. Bar compliance exposure. $280K in client retainers and settlement proceeds not separately tracked. Partner draws incorrectly classified as COGS.", "<strong>What we did.</strong> Separated trust from operating ledgers, reconstructed 14-month IOLTA activity, established correct QuickBooks trust-account structure, corrected partner-draw classification, delivered bar-compliance-ready documentation package.", "<strong>Outcome.</strong> Trust accounting in compliance with NY Rules of Professional Conduct. Partners had accurate P&amp;L for the first time &mdash; and peace of mind on bar compliance."], cta: "NY law firm accounting &rarr;", href: "/find-an-accountant/new-york/industries/legal/" },
    { tag: "Contractor &middot; Queens (Queens County)", heading: "A general contractor doing $5M in NYC renovation work with no job costing.", body: ["<strong>Situation.</strong> All jobs rolled into a single revenue account. No WIP schedule. Retainage receivable untracked. Three NYC prevailing-wage jobs with certified payroll requirements &mdash; none documented. Payroll missing NYC withholding layer for 9 employees.", "<strong>What we did.</strong> Job-costing structure built in QuickBooks, WIP schedule established, retainage accounts separated, certified payroll workflow documented, payroll corrected for NYC withholding per employee.", "<strong>Outcome.</strong> Bonding capacity restored. First meaningful job-level margin visibility in the firm&rsquo;s 7-year history."], cta: "NY construction accounting &rarr;", href: "/find-an-accountant/new-york/industries/construction/" },
  ],
  scenariosNote: "Three composite scenarios drawn from common New York engagement shapes. Identifying details anonymized; the operational patterns are real.",

  // REPRESENTATIVE OUTCOMES — REFRAMED (founder ruling b). H2 + note + card metas changed.
  // (H2: Representative New York outcomes.)
  outcomes: [
    { figure: "$42K", detail: "Recovered in misclassified agency expenses", meta: "Representative &middot; agency cleanup" },
    { figure: "23&rarr;6 days", detail: "Month-end close cut after QuickBooks rebuild", meta: "Representative &middot; contractor rebuild" },
    { figure: "14 months", detail: "IOLTA trust ledger reconstructed &amp; reconciled", meta: "Representative &middot; law-firm IOLTA" },
    { figure: "$28K", detail: "DTF sales-tax exposure resolved after rate correction", meta: "Representative &middot; agency sales-tax" },
  ],
  outcomesNote: "Illustrative outcomes representative of the engagement types we handle &mdash; not specific client results.",

  // ADVISORY — mission block. STANDING brand line is the H2. (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: "As AI commoditizes basic bookkeeping, value moves to interpretation, strategic positioning, and advisory. New York has some of the most sophisticated business buyers in the country &mdash; and the most complex tax environment to navigate. For New York businesses ready for that conversation, TechBrot offers <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO engagements</a> &mdash; forecasting, board reporting, capital-event readiness, KPI design, and NY-specific tax-position planning in coordination with your CPA. By application. Best fit: $1M&ndash;$50M New York businesses where the books need to inform strategy, not just compliance.",

  // INDUSTRIES — 6 cards. (H2: Industry-specific accounting for New York's economy. + 6 H3s)
  industries: [
    { num: "01", name: "Construction &amp; Contractors", href: "/find-an-accountant/new-york/industries/construction/", body: "NYC and upstate New York general contractors. <strong>Job costing</strong>, WIP schedules, AIA billing, retainage tracking, NYC prevailing-wage payroll, subcontractor 1099s, certified payroll for public work." },
    { num: "02", name: "Real Estate &amp; Property", href: "/find-an-accountant/new-york/industries/real-estate/", body: "NYC investors, brokerages, and property managers &mdash; <strong>multi-entity ledgers</strong>, trust accounting, 1031 exchange documentation, RPTT and mortgage recording tax tracking, passive activity allocation." },
    { num: "03", name: "Law Firms &amp; Legal Practices", href: "/find-an-accountant/new-york/industries/legal/", body: "NY law firms &mdash; <strong>IOLTA trust accounting</strong>, separate trust ledger in QuickBooks, partner draw classification, matter-level revenue tracking, NY Rules of Professional Conduct compliance." },
    { num: "04", name: "Restaurants &amp; Hospitality", href: "/find-an-accountant/new-york/industries/restaurant/", body: "NYC and upstate multi-location operators &mdash; <strong>POS reconciliation</strong>, tipped-employee payroll with NYC withholding, food vs. alcohol sales tax differentiation, weekly close cadence, tip credit compliance." },
    { num: "05", name: "Healthcare Practices", href: "/find-an-accountant/new-york/industries/healthcare/", body: "NYC-area medical, dental, and specialty practices &mdash; <strong>insurance payer reconciliation</strong>, HIPAA-aware data handling, multi-provider payroll with NYC withholding, MCTMT for self-employed practitioners." },
    { num: "06", name: "Nonprofits &amp; Charities", href: "/find-an-accountant/new-york/industries/nonprofit/", body: "NY-registered nonprofits &mdash; <strong>CHAR500 filing-ready workpapers</strong>, functional expense allocation, GAAP-basis financials, grant revenue recognition, Form 990 coordination with your CPA." },
  ],
  industriesNote: "Industries not listed &mdash; ecommerce, SaaS, consulting, agencies &mdash; are served via <a href=\"/accounting/industries/\">our global industry pages</a>. Local-intent pages exist only where New York creates genuinely distinct requirements.",

  // SERVICES — 6 money pages (buyer-card routing). (H2: Find the right service... + 6 H3s)
  services: [
    { eyebrow: "Service 01", name: "New York Bookkeeping Services", href: "/find-an-accountant/new-york/bookkeeping-services/", body: "Recurring fixed-fee monthly close for New York businesses. Bank reconciliation, NYC sales tax sub-reconciliation, UBT revenue allocation, monthly statements, year-end CPA handoff. <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">National service overview &rarr;</a>", starting: "$400/mo", cadence: "Recurring monthly", cta: "NY bookkeeping &rarr;" },
    { eyebrow: "Service 02", name: "New York QuickBooks ProAdvisor", href: "/find-an-accountant/new-york/quickbooks-accountant/", body: "The umbrella engagement &mdash; QuickBooks ProAdvisor, bookkeeper, and accounting expert for New York businesses. Covers QBO, Desktop, Enterprise, and Payroll across all NY industry types. <a href=\"/quickbooks/\">QuickBooks national overview &rarr;</a>", starting: "From discovery call", cadence: "Recurring or project", cta: "NY ProAdvisor &rarr;" },
    { eyebrow: "Service 03", name: "New York QuickBooks Cleanup", href: "/find-an-accountant/new-york/quickbooks-cleanup/", body: "QuickBooks files with structural problems &mdash; NYC sales tax misconfiguration, UBT allocation missing, gross/net revenue errors, unreconciled accounts. <a href=\"/quickbooks/cleanup/\">National cleanup overview &rarr;</a>", starting: "$1,500", cadence: "One-time, written scope", cta: "NY cleanup &rarr;" },
    { eyebrow: "Service 04", name: "New York QuickBooks Setup", href: "/find-an-accountant/new-york/quickbooks-setup/", body: "Professional QuickBooks implementation for New York businesses &mdash; chart of accounts for your NY industry, NYC sales tax configuration, IOLTA ledger setup for law firms, NYC payroll configuration. <a href=\"/quickbooks/setup/\">National setup overview &rarr;</a>", starting: "$750", cadence: "One-time, 2&ndash;4 weeks", cta: "NY setup &rarr;" },
    { eyebrow: "Service 05", name: "New York Sales Tax Compliance", href: "/find-an-accountant/new-york/sales-tax-help/", body: "NYC + NY State sales tax filing, rate-by-jurisdiction configuration, taxable vs. exempt service classification, MTA surcharge, economic nexus for out-of-state sellers into New York. <a href=\"/accounting/sales-tax-compliance/\">National overview &rarr;</a>", starting: "$250/mo", cadence: "Recurring + nexus review", cta: "NY sales tax &rarr;" },
    { eyebrow: "Service 06", name: "New York QuickBooks Migration", href: "/find-an-accountant/new-york/quickbooks-migration/", body: "Desktop &rarr; Online migration with New York operational context preserved. Upstate NY manufacturers and NYC-area firms on Enterprise &mdash; migration scoped and delivered cleanly. <a href=\"/quickbooks/migration/\">National migration overview &rarr;</a>", starting: "$2,500", cadence: "One-time, 3&ndash;8 weeks", cta: "NY migration &rarr;" },
  ],
  servicesNote: "Additional NY services: <a href=\"/find-an-accountant/new-york/quickbooks-reconciliation/\">QuickBooks Reconciliation</a> &middot; <a href=\"/find-an-accountant/new-york/quickbooks-training/\">QuickBooks Training</a> &middot; <a href=\"/find-an-accountant/new-york/quickbooks-cleanup/\">QuickBooks Cleanup</a> &middot; <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">Monthly Bookkeeping</a> &middot; <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">Cleanup Bookkeeping</a> &middot; <a href=\"/find-an-accountant/new-york/urgent-bookkeeping/\">Urgent Bookkeeping</a> &middot; <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">State Tax Notice Help</a> &middot; <a href=\"/find-an-accountant/new-york/business-tax-problems/\">Business Tax Problems</a> &middot; <a href=\"/find-an-accountant/new-york/pricing/\">NY Pricing</a>",

  // ECOSYSTEM — 6 clusters. (H2: Every New York page in one place. + 6 cluster H3s)
  ecosystem: [
    { eyebrow: "Cluster 01", heading: "New York money cluster", lede: "Primary ranking and conversion targets &mdash; the pages that capture &ldquo;quickbooks accountant near me&rdquo; and &ldquo;bookkeeper near me&rdquo; in New York.", links: [
      { href: "/find-an-accountant/new-york/quickbooks-accountant/", label: "NY QuickBooks Accountant / ProAdvisor", tag: "&#9733; umbrella" },
      { href: "/find-an-accountant/new-york/small-business-accountant/", label: "NY Small Business Accountant" },
      { href: "/find-an-accountant/new-york/bookkeeping-services/", label: "NY Bookkeeping Services" },
      { href: "/find-an-accountant/new-york/virtual-bookkeeper/", label: "NY Virtual Bookkeeper" },
      { href: "/find-an-accountant/new-york/speak-to-a-proadvisor/", label: "Speak to a NY ProAdvisor", tag: "BOFU" },
      { href: "/find-an-accountant/new-york/pricing/", label: "NY Pricing &amp; Engagement Fees" },
    ] },
    { eyebrow: "Cluster 02", heading: "New York QuickBooks spokes", lede: "NY-specific QuickBooks ProAdvisor engagements &mdash; each with dedicated pages under the money cluster.", links: [
      { href: "/find-an-accountant/new-york/quickbooks-setup/", label: "NY QuickBooks Setup" },
      { href: "/find-an-accountant/new-york/quickbooks-cleanup/", label: "NY QuickBooks Cleanup" },
      { href: "/find-an-accountant/new-york/quickbooks-reconciliation/", label: "NY QuickBooks Reconciliation" },
      { href: "/find-an-accountant/new-york/quickbooks-migration/", label: "NY QuickBooks Migration" },
      { href: "/find-an-accountant/new-york/quickbooks-training/", label: "NY QuickBooks Training" },
      { href: "/find-an-accountant/new-york/quickbooks-accountant/", label: "NY QuickBooks ProAdvisor" },
    ] },
    { eyebrow: "Cluster 03", heading: "New York bookkeeping spokes", lede: "Recurring and project bookkeeping engagements scoped to New York operational reality.", links: [
      { href: "/find-an-accountant/new-york/monthly-bookkeeping/", label: "NY Monthly Bookkeeping" },
      { href: "/find-an-accountant/new-york/cleanup-bookkeeping/", label: "NY Cleanup &amp; Catch-Up Bookkeeping" },
      { href: "/find-an-accountant/new-york/urgent-bookkeeping/", label: "NY Urgent Bookkeeping" },
    ] },
    { eyebrow: "Cluster 04", heading: "New York tax cluster", lede: "Standalone references for the genuinely NY-specific tax stack &mdash; UBT, DTF notices, sales tax on services.", links: [
      { href: "/find-an-accountant/new-york/sales-tax-help/", label: "NY Sales Tax Help (NYC 8.875% &middot; MTA &middot; services)" },
      { href: "/find-an-accountant/new-york/state-tax-notice-help/", label: "NY State Tax Notice Help (DTF &middot; UBT)" },
      { href: "/find-an-accountant/new-york/business-tax-problems/", label: "NY Business Tax Problems" },
    ] },
    { eyebrow: "Cluster 05", heading: "New York industries", lede: "Vertical-specific accounting depth for New York&rsquo;s leading sectors &mdash; only those with genuine NY-specific requirements have local pages.", links: [
      { href: "/find-an-accountant/new-york/industries/", label: "NY Industries Index" },
      { href: "/find-an-accountant/new-york/industries/construction/", label: "NY Construction Accounting" },
      { href: "/find-an-accountant/new-york/industries/real-estate/", label: "NY Real Estate Accounting" },
      { href: "/find-an-accountant/new-york/industries/legal/", label: "NY Law Firm Accounting (IOLTA)" },
      { href: "/find-an-accountant/new-york/industries/restaurant/", label: "NY Restaurant Accounting" },
      { href: "/find-an-accountant/new-york/industries/healthcare/", label: "NY Healthcare Practice Accounting" },
      { href: "/find-an-accountant/new-york/industries/nonprofit/", label: "NY Nonprofit Accounting (CHAR500)" },
    ] },
    { eyebrow: "Cluster 06", heading: "New York cities", lede: "Local pages for New York&rsquo;s primary metros &mdash; five boroughs plus upstate. Full 10-city index below.", links: [
      { href: "/find-an-accountant/new-york/cities/", label: "NY Cities Index" },
      { href: "/find-an-accountant/new-york/cities/new-york-city/", label: "New York City (Manhattan)" },
      { href: "/find-an-accountant/new-york/cities/brooklyn/", label: "Brooklyn (Kings County)" },
      { href: "/find-an-accountant/new-york/cities/queens/", label: "Queens" },
      { href: "/find-an-accountant/new-york/cities/bronx/", label: "The Bronx" },
      { href: "/find-an-accountant/new-york/cities/staten-island/", label: "Staten Island" },
      { href: "/find-an-accountant/new-york/cities/buffalo/", label: "Buffalo (Erie County)" },
      { href: "/find-an-accountant/new-york/cities/rochester/", label: "Rochester (Monroe County)" },
      { href: "/find-an-accountant/new-york/cities/syracuse/", label: "Syracuse (Onondaga County)" },
      { href: "/find-an-accountant/new-york/cities/albany/", label: "Albany (Albany County)" },
      { href: "/find-an-accountant/new-york/cities/yonkers/", label: "Yonkers (Westchester County)" },
    ] },
  ],
  ecosystemNote: "New York pages publish on a rolling cadence. Links lead to published pages as each goes live.",

  // PRICING — 8-row table. (H2: Fixed-fee starting ranges for New York engagements.)
  pricing: [
    { svc: "Monthly bookkeeping", href: "/find-an-accountant/new-york/monthly-bookkeeping/", range: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", notes: "NYC sales tax sub-reconciliation + UBT allocation where applicable" },
    { svc: "QuickBooks cleanup", href: "/find-an-accountant/new-york/quickbooks-cleanup/", range: "$1,500&ndash;$15,000+", cadence: "One-time", notes: "NYC rate misconfiguration + gross/net agency corrections are common" },
    { svc: "Catch-up bookkeeping", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", range: "$2,000&ndash;$20,000+", cadence: "One-time", notes: "Scoped by months behind, volume, and NYC complexity" },
    { svc: "QuickBooks setup", href: "/find-an-accountant/new-york/quickbooks-setup/", range: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 wks", notes: "NYC sales tax + NYC payroll withholding config; IOLTA ledger for law firms" },
    { svc: "Desktop &rarr; Online migration", href: "/find-an-accountant/new-york/quickbooks-migration/", range: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 wks", notes: "Upstate NY manufacturers and larger NYC firms on Enterprise" },
    { svc: "Payroll management", href: "", range: "$150&ndash;$800+/mo", cadence: "Recurring monthly", notes: "NY State + NYC withholding per employee; MCTMT for applicable employees" },
    { svc: "Sales tax compliance", href: "/find-an-accountant/new-york/sales-tax-help/", range: "$250&ndash;$1,500+/mo + $500&ndash;$3,000 nexus review", cadence: "Recurring monthly", notes: "NYC 8.875% &middot; MTA surcharge &middot; sales tax on services &middot; multi-state nexus" },
    { svc: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", range: "$3,000&ndash;$8,000+/mo", cadence: "Recurring, by application", notes: "NY-aware strategic finance; NYC UBT + income tax position with your CPA" },
  ],
  pricingNote: "Indicative starting ranges. Final fees scale with transaction volume, employee count, NYC vs. upstate complexity, industry specifics, and multi-state exposure. <a href=\"/find-an-accountant/new-york/pricing/\">Full NY pricing detail &rarr;</a>",

  // CITIES + COUNTIES. (H2: Serving New York businesses statewide. + 2 H3s)
  cities: [
    { href: "/find-an-accountant/new-york/cities/new-york-city/", name: "New York City", county: "Manhattan &middot; New York County" },
    { href: "/find-an-accountant/new-york/cities/brooklyn/", name: "Brooklyn", county: "Kings County" },
    { href: "/find-an-accountant/new-york/cities/queens/", name: "Queens", county: "Queens County" },
    { href: "/find-an-accountant/new-york/cities/bronx/", name: "The Bronx", county: "Bronx County" },
    { href: "/find-an-accountant/new-york/cities/staten-island/", name: "Staten Island", county: "Richmond County" },
    { href: "/find-an-accountant/new-york/cities/buffalo/", name: "Buffalo", county: "Erie County" },
    { href: "/find-an-accountant/new-york/cities/rochester/", name: "Rochester", county: "Monroe County" },
    { href: "/find-an-accountant/new-york/cities/syracuse/", name: "Syracuse", county: "Onondaga County" },
    { href: "/find-an-accountant/new-york/cities/albany/", name: "Albany", county: "Albany County" },
    { href: "/find-an-accountant/new-york/cities/yonkers/", name: "Yonkers", county: "Westchester County" },
  ],
  countyProse: "New York (Manhattan), Kings (Brooklyn), Queens, Bronx, Richmond (Staten Island), Nassau, Suffolk, Westchester, Erie (Buffalo), Monroe (Rochester), Onondaga (Syracuse), Albany, Orange, Dutchess, Rockland, Putnam, Ulster, Sullivan, Greene, Columbia, Rensselaer, Schenectady, Saratoga, Warren, Washington, Fulton, Montgomery, Schoharie, Delaware, Otsego, Chenango, Broome, Tioga, Cortland, Tompkins, Chemung, Schuyler, Steuben, Allegany, Cattaraugus, Chautauqua, Niagara, Orleans, Genesee, Wyoming, Livingston, Ontario, Yates, Seneca, Cayuga, Wayne, Jefferson, Lewis, Oswego, Oneida, Herkimer, Madison, St. Lawrence, Franklin, Clinton, Essex, Hamilton &mdash; all 62 counties.",
  citiesNote: "Don&rsquo;t see your city? All 62 New York counties are served via remote engagement delivery. <a href=\"/find-an-accountant/new-york/cities/\">Full cities index &rarr;</a>",

  // TEAM — named operator (David Westgate, the standing-rule exception). + intake call card.
  teamDavid: {
    name: "David Westgate", role: "Lead ProAdvisor",
    creds: "40+ years in accounting &middot; Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll",
    line: "Four decades reconciling, cleaning, and rebuilding books across construction, professional services, and nonprofits &mdash; the judgment behind every New York engagement.",
  },
  teamIntake: {
    name: "Client Intake &amp; Scoping", role: "Engagement Team",
    creds: "Your first call &middot; operational triage &middot; written fixed-fee scope",
    line: "Answers the phone, reviews your QuickBooks file, and turns it into a written scope within 3 business days &mdash; no call center, no sales script.",
  },
  callAssurance: ["Mon&ndash;Fri 8a&ndash;6p ET", "Certified ProAdvisor on the line", "Free, no pitch"],

  // OPERATORS — partner placeholder + 4 vetting standards. (H2: Trusted New York partner practices. + 2 H3s)
  operatorStandards: [
    { num: "01", term: "Active Certified ProAdvisor credentials", detail: "QuickBooks Online (L2), Desktop, Enterprise, and Payroll." },
    { num: "02", term: "Demonstrated New York tax fluency", detail: "NYC UBT allocation, 8.875% sales tax on services, MTA surcharge, NY DTF and NYC DOF coordination." },
    { num: "03", term: "Industry specialization depth", detail: "IOLTA trust accounting for law firms, CHAR500-ready workpapers for nonprofits, job costing for construction." },
    { num: "04", term: "Insurance &amp; engagement discipline", detail: "Active E&amp;O insurance, fixed-fee written scope before work, and your-file/your-data working model." },
  ],

  // WHY TECHBROT — 4 cards. (H2: What separates us from generic remote bookkeeping. + 4 H3s)
  why: [
    { num: "01", name: "New York operational depth", body: "NYC UBT allocation, 8.875% sales tax on services, IOLTA trust ledger setup for law firms, CHAR500-ready workpapers for nonprofits, NYC vs. upstate payroll withholding. Operational specifics, not generic remote support." },
    { num: "02", name: "Certified QuickBooks ProAdvisors", body: "Active Intuit certifications across <strong>QuickBooks Online L2, Desktop, Enterprise, and Payroll</strong>. Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { num: "03", name: "Fixed-fee, written scope", body: "Every engagement starts with a written scope and a fixed fee before any work begins. No hourly billing. No surprise invoices. No scope creep &mdash; even for complex NYC engagements." },
    { num: "04", name: "Sophisticated buyer, honest delivery", body: "New York buyers know the difference between genuine expertise and a keyword swap. We are an independent ProAdvisor firm with no Intuit affiliation, no affiliate commissions, and no upsell agenda &mdash; just the right scope for your New York business." },
  ],

  // REVIEWS — ONLY the 2 real Clutch reviews, verbatim. NO AggregateRating. (H2: Verified client reviews.)
  reviews: [
    { quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple.", context: "Reviewed and corrected QuickBooks records &mdash; reconciling transactions and organizing the chart of accounts. Books went from disorganized to fully reconciled, delivered on time, with a responsive, nonjudgmental approach.", author: "Heidi Schubert", role: "Owner, Beverage Connection", meta: "Food &amp; Beverage &middot; Denver, Colorado &middot; Verified Clutch review" },
    { quote: "What stood out the most was TechBrot Inc&rsquo;s attention to detail.", context: "Credit card reconciliation and financial cleanup &mdash; reviewing transaction categorization and improving bookkeeping structure. Significantly improved reporting accuracy and performance visibility, with clear communication throughout.", author: "Barbara Best", role: "CEO, Barbara B.", meta: "Business services &middot; California &middot; Verified Clutch review" },
  ],

  // COMPARISON — 9-row table. (H2: TechBrot vs. the alternatives for New York businesses.)
  comparison: [
    { dim: "Certified ProAdvisor depth", us: "<strong>QBO L2, Desktop, Enterprise, Payroll</strong>", cpa: "Varies; many NYC CPAs don&rsquo;t certify", remote: "Generally limited to QBO basics", winner: "us" },
    { dim: "Files NY State / NYC taxes", us: "No (coordinates with your CPA)", cpa: "<strong>Yes &mdash; their primary service</strong>", remote: "No", winner: "them" },
    { dim: "NYC UBT revenue allocation", us: "<strong>Standard in NYC engagements</strong>", cpa: "Usually; varies by firm", remote: "Often missed entirely", winner: "us" },
    { dim: "NYC sales tax on services config", us: "<strong>Correct rate by service + location</strong>", cpa: "Varies; not their primary focus", remote: "Often flat rate applied &mdash; misconfigured", winner: "us" },
    { dim: "IOLTA trust accounting setup", us: "<strong>Dedicated trust ledger in QuickBooks</strong>", cpa: "Usually; depends on firm experience", remote: "Rarely handled correctly", winner: "us" },
    { dim: "CHAR500-ready workpapers", us: "<strong>Functional expense allocation standard</strong>", cpa: "If they specialize in nonprofits", remote: "Generally not handled", winner: "us" },
    { dim: "Fixed-fee, written scope", us: "<strong>Always, before work begins</strong>", cpa: "Often hourly", remote: "Fixed-fee but limited scope", winner: "us" },
    { dim: "NY DTF / IRS representation", us: "No (your CPA / EA handles)", cpa: "<strong>Yes &mdash; licensed CPAs / EAs</strong>", remote: "No", winner: "them" },
    { dim: "Works in your QuickBooks file", us: "<strong>Yes &mdash; your file, your data</strong>", cpa: "Usually", remote: "Often proprietary tooling", winner: "us" },
  ],
  comparisonVerdict: "<strong>The honest read:</strong> for NY DTF filings, NYC tax returns, and IRS representation, use a licensed New York CPA or EA. For QuickBooks operations, bookkeeping, NYC sales tax compliance, IOLTA setup, and CHAR500-ready workpapers &mdash; TechBrot is built for that. Most New York clients use both.",
  comparisonRelated: "See: <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant</a> &middot; <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a> &middot; <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &middot; <a href=\"/vs/\">all comparisons &rarr;</a>",

  // AUTHORITY — 6 .gov / official sources. (H2: Verify everything on this page.)
  authority: [
    { name: "New York State Department of Taxation &amp; Finance (NY DTF)", href: "https://www.tax.ny.gov/", detail: "Authoritative source for NY State income tax rates, employer withholding, sales tax filing, and NY DTF audit procedures." },
    { name: "NYC Department of Finance", href: "https://www.nyc.gov/site/finance/index.page", detail: "Authoritative source for the NYC Unincorporated Business Tax, NYC corporate tax, NYC tax rates, and NYC Department of Finance audits." },
    { name: "NY Attorney General &mdash; Charities Bureau", href: "https://ag.ny.gov/charities", detail: "Authoritative source for NY nonprofit registration requirements, CHAR500 annual filing, and NY charitable organization compliance." },
    { name: "Interest on Lawyer Account (IOLA) Fund of the State of New York", href: "https://iola.ny.gov/", detail: "Authoritative source for IOLTA trust account requirements for New York attorneys under the Rules of Professional Conduct." },
    { name: "Intuit ProAdvisor Directory", href: "https://proadvisor.intuit.com/", detail: "Authoritative source for verifying active QuickBooks ProAdvisor certifications." },
    { name: "Internal Revenue Service (IRS)", href: "https://www.irs.gov/", detail: "Authoritative source for federal employment tax (Form 941), Form 1099 reporting, and IRS representation requirements." },
  ],

  // FAQ — 17 Q/A VERBATIM from the contract. visible = schema. Enrichment append-only via faqLink.
  // (H2: New York QuickBooks & accounting questions.)
  faq: [
    { q: "Does TechBrot serve New York businesses?", a: "Yes. TechBrot delivers bookkeeping, Certified QuickBooks ProAdvisor services, payroll management, sales tax compliance, and fractional CFO coordination to New York businesses statewide &mdash; directly through our lead practice, with trusted partner practices across New York. All 62 New York counties covered, including the five boroughs, Long Island, Westchester, and all of upstate New York." },
    { q: "What is the NYC UBT and do I owe it?", a: "The NYC Unincorporated Business Tax (UBT) is a 4% city-level tax on the net income of sole proprietors and partnerships doing business in New York City. If you&rsquo;re a freelancer, partner in a professional services firm, or operate an unincorporated business in the five boroughs, it likely applies to you. QuickBooks must track NYC-sourced vs. non-NYC revenue from day one." },
    { q: "What&rsquo;s New York City&rsquo;s sales tax rate and what services are taxable?", a: "The combined NYC sales tax rate is 8.875% &mdash; 4% NY State + 4.5% NYC + 0.375% MTA surcharge. New York taxes a broader range of services than most states, including certain information services, cleaning services, interior design, parking, and telecommunications. This catches agencies, media firms, and professional-services businesses off guard. QuickBooks must be configured with the correct taxability by service type and customer location." },
    { q: "Does TechBrot set up IOLTA trust accounting for New York law firms?", a: "Yes. IOLTA trust accounting &mdash; a separate trust ledger in QuickBooks, cleanly isolated from operating accounts &mdash; is a standard component of our law firm engagements. New York&rsquo;s Rules of Professional Conduct require strict separation of client funds. We set up the QuickBooks structure, train your staff on proper handling, and deliver bar-compliance-ready documentation." },
    { q: "What QuickBooks versions does TechBrot support for New York businesses?", a: "All current versions: QuickBooks Online (Level 2 certified), Desktop, Enterprise, and Payroll. QBO Advanced dominates among NYC agencies, media firms, and professional-services practices. Enterprise is common among upstate New York manufacturers and larger construction contractors." },
    { q: "Does TechBrot file NY State or NYC tax returns?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we do not file federal, NY State, or NYC tax returns, and do not represent clients before the NY Department of Taxation &amp; Finance or NYC Department of Finance. We deliver clean, CPA-ready bookkeeping and coordinate with your CPA or EA. The standard model: TechBrot handles QuickBooks operations; your New York CPA handles filing and representation." },
    { q: "How does a New York engagement start, and how fast can we begin?", a: "Book a free 30-minute discovery call. We review your New York operational context (NYC vs. upstate, industry, multi-state exposure), recommend the right engagement structure, and deliver a written fixed-fee scope within 3 business days. Same-day diagnostic for emergencies." },
    { q: "What about NY DTF or NYC Department of Finance notices or audits?", a: "For NY DTF or NYC DOF notices, TechBrot provides operational support and documentation &mdash; gathering records, preparing reconciliations, organizing timelines. For active disputes or significant tax exposure, we coordinate with New York-licensed CPAs or sales-tax counsel who can represent the business before the DTF or NYC DOF." },
    { q: "Does TechBrot handle CHAR500 bookkeeping for New York nonprofits?", a: "Yes &mdash; the bookkeeping side. We maintain CHAR500-ready workpapers: GAAP-basis financials, functional expense allocation by program, management, and fundraising, and grant revenue recognition &mdash; delivered to your CPA or EA for the actual CHAR500 and Form 990 filings." },
    { q: "Do NYC agencies and media firms have special QuickBooks requirements?", a: "Yes &mdash; primarily around ASC 606 gross-vs-net revenue recognition and NYC sales tax on services. Agencies billing media buys, production, or pass-through costs must determine whether they&rsquo;re acting as principal (gross revenue) or agent (net fee) under ASC 606. NYC also taxes certain information and creative services that would be exempt in other states. Getting both right in QuickBooks is the core of every NYC agency engagement." },
    { q: "How much does New York bookkeeping or QuickBooks work cost?", a: "Fixed fees against a written scope &mdash; no hourly billing. Starting ranges: monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; Desktop to Online migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; fractional CFO $3,000&ndash;$8,000+/mo." },
    { q: "Can I use my New York CPA for taxes and TechBrot for bookkeeping?", a: "Yes &mdash; that&rsquo;s the standard model. TechBrot handles operational bookkeeping, QuickBooks configuration, and NYC-specific compliance (sales tax, UBT allocation, IOLTA, CHAR500 workpapers); your New York CPA handles filing, audit, and DTF/IRS representation. Year-end CPA handoff is included in every recurring New York engagement." },
  ],

  // EXPERT REVIEW (E-E-A-T). (H2: Reviewed by Certified QuickBooks ProAdvisors.) Firm-level — no founder name.
  reviewCreds: [
    { label: "Entity", detail: "TechBrot Inc. &middot; Delaware C-Corporation &middot; NAICS 541219" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll" },
    { label: "New York practice", detail: "All 62 counties served &middot; NYC boroughs, Long Island, Westchester, upstate NY &middot; Industries: construction, real estate, legal/IOLTA, restaurant, healthcare, nonprofit/CHAR500" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Zero affiliate revenue from any provider" },
    { label: "Editorial policy", detail: "NY statutory references reviewed against NY DTF and NYC DOF primary sources &middot; Rate changes propagated within 30 days &middot; Composite scenarios anonymized &middot; No fabricated stats, reviews, or credentials" },
  ],

  // RELATED STATES — 4 neighbors. (H2: Multi-state New York businesses. + 4 H3s)
  related: [
    { name: "New Jersey", body: "NYC-area businesses with NJ operations &mdash; cross-river payroll, NJ income tax withholding, multi-state sales tax for businesses selling across the Hudson.", cta: "ProAdvisors in New Jersey &rarr;" },
    { name: "Connecticut", body: "Westchester and Long Island businesses with CT operations &mdash; Stamford corridor multi-state payroll, CT Pass-Through Entity Tax, multi-state nexus.", cta: "ProAdvisors in Connecticut &rarr;" },
    { name: "Pennsylvania", body: "Western NY businesses with PA operations &mdash; Buffalo-Pittsburgh corridor, PA local PSD code payroll complexity, multi-state sales tax.", cta: "ProAdvisors in Pennsylvania &rarr;" },
    { name: "Massachusetts", body: "NY-based businesses with Boston operations &mdash; MA millionaire surcharge, multi-state payroll, multi-state sales tax, technology company nexus considerations.", cta: "ProAdvisors in Massachusetts &rarr;" },
  ],
  relatedNote: "All 50 state pages on the publication roadmap. Multi-state engagements route through TechBrot direct service until neighboring state pages are live.",

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/";
      // QAPage mainEntity from the first 5 aiSummary items (matches the visible 5-question block).
      const qa=data.aiSummary;
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks ProAdvisors & Bookkeeping","description":"Certified QuickBooks ProAdvisor services, bookkeeping, payroll, and New York sales tax compliance for New York businesses across all 62 counties — from the five boroughs to Buffalo, Rochester, Syracuse, and Albany. Built around NYC Unincorporated Business Tax, the 8.875% NYC sales tax on services, and the highest combined income tax in the U.S.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-in-brief-text","#ny-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-04"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks ProAdvisor & Bookkeeping Services","serviceType":"QuickBooks ProAdvisor, bookkeeping, payroll, and sales tax compliance","description":"Certified QuickBooks ProAdvisor services, bookkeeping, QuickBooks setup, cleanup, and migration, payroll, and New York sales tax compliance for New York businesses across all 62 counties. Delivered directly by TechBrot's lead practice, with trusted partner practices in New York. Independent Certified QuickBooks ProAdvisor firm; does not file federal, NY State, or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","containsPlace":[
          {"@type":"City","name":"New York City"},{"@type":"City","name":"Brooklyn"},{"@type":"City","name":"Queens"},{"@type":"City","name":"Buffalo"},{"@type":"City","name":"Rochester"},{"@type":"City","name":"Syracuse"},{"@type":"City","name":"Albany"},{"@type":"City","name":"Yonkers"}]},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and mid-sized businesses, NYC agencies and professional-services firms, law firms, real estate operators, restaurants, healthcare practices, nonprofits, and upstate manufacturers"},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"New York accounting services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New York Bookkeeping Services"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New York QuickBooks Setup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New York QuickBooks Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New York QuickBooks Migration"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"New York Sales Tax Compliance"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Fractional CFO"}}]}},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(qa[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(qa[0].a)}},"about":{"@type":"ItemList","name":"TechBrot in New York — quick answers","itemListElement":qa.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

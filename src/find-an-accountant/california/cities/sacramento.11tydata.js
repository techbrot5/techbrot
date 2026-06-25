/* /find-an-accountant/california/cities/sacramento/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Sacramento funds itself with a Business
 * Operations Tax (BOT) assessed largely on GROSS RECEIPTS, with a business operations
 * tax certificate. As California's STATE CAPITAL, the real economy is government-
 * adjacent: state-agency contractors and grant recipients, trade/professional
 * associations and lobbying firms, and a dense nonprofit sector — plus the Central
 * Valley agriculture economy at its edge. Layered on California's $800 FTB franchise
 * tax, CDTFA sales tax (~8.75% in the city), and AB5. A find-replace "Sacramento"->
 * "San Jose" reads false (no capital/gov-contracting/association density, no Valley
 * ag, different city tax base).
 *
 * HONESTY: real facts only; grant compliance, nonprofit filings (Form 990, RRF-1),
 * and government-contract rate matters deferred to the CPA/specialists; city tax
 * deferred to the City of Sacramento. No fabricated stats/counts/clients. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/sacramento/",
  slug: "sac",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Sacramento Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "ProAdvisor bookkeeping for Sacramento — the Business Operations Tax, the $800 franchise tax, government-contract and nonprofit accounting. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Sacramento" },
  ],
  hero: {
    eyebrow: "Sacramento &middot; the State Capital &middot; California",
    heading: "Sacramento bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Sacramento businesses &mdash; built around the city&rsquo;s Business Operations Tax, California&rsquo;s $800 franchise tax and CDTFA sales tax, and the realities of government contracting, nonprofits and associations, and Central Valley agriculture. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Sacramento &amp; the Capital region",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Sacramento businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in the Sacramento Business Operations Tax and California&rsquo;s FTB and CDTFA structure. The full Sacramento summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Sacramento &amp; California tax figures verified against the City of Sacramento, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Sacramento businesses start here",
    heading: "Book a Sacramento discovery call.",
    lede: "30 minutes. We review where your books stand and your Sacramento context &mdash; the Business Operations Tax, CDTFA sales tax, grant or government-contract structure, nonprofit fund accounting, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=sacramento&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Sacramento",
  copy: {
    localEyebrow: "Bookkeeping built for how Sacramento actually taxes",
    areasEyebrow: "Across the city &amp; the Capital region",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Sacramento verticals we know",
    servicesEyebrow: "What we do for Sacramento businesses",
    faqEyebrow: "Sacramento FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=sacramento&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Sacramento businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Sacramento funds itself with a <strong>Business Operations Tax</strong> assessed largely on <strong>gross receipts</strong>, with a business operations tax certificate. What truly sets the capital apart is its economy: <strong>state-agency contractors and grant recipients</strong>, <strong>trade and professional associations and advocacy organizations</strong>, a dense <strong>nonprofit</strong> sector, and the <strong>Central Valley agriculture</strong> economy at its edge. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 8.75% in the city), and <strong>AB5</strong>. We build awareness of all of it into your books &mdash; including grant and fund tracking where it applies &mdash; keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Sacramento businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Sacramento and Capital-region businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the Sacramento Business Operations Tax and the government-contract, nonprofit, and association accounting the capital runs on." },
    { q: "What is the Sacramento Business Operations Tax?", a: "It&rsquo;s the city&rsquo;s business tax, assessed largely on <strong>gross receipts</strong>, with a business operations tax certificate most businesses must hold and renew. We track gross receipts so the figure is clear; the City of Sacramento and your CPA confirm the rate and what&rsquo;s due for your business type." },
    { q: "What California taxes affect my Sacramento books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 8.75% in the city of Sacramento), and <strong>AB5</strong> worker classification &mdash; built into how your books are kept." },
    { q: "Do you handle nonprofit and grant accounting?", a: "Yes &mdash; it&rsquo;s a core Sacramento need. Nonprofits, associations, and grant recipients need <strong>fund and grant tracking</strong>, functional-expense allocation, and records that support the annual filings (such as <strong>Form 990</strong> and California&rsquo;s <strong>RRF-1</strong>). We keep the books to that standard; the filings themselves are prepared by your CPA, whom we coordinate with." },
    { q: "Which areas do you serve?", a: "<strong>All of Sacramento</strong> &mdash; Downtown and the government/Capitol district, Midtown, Natomas, and the wider Capital region including Roseville, Elk Grove, and Folsom &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Sacramento is the seat of California&rsquo;s government, and that single fact shapes its books more than its tax code does &mdash; though the tax code is distinct too.",
    "The city funds itself with a <strong>Business Operations Tax</strong> assessed largely on <strong>gross receipts</strong>, and most businesses must hold a business operations tax certificate. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges every LLC and corporation regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 8.75% in the city, and <strong>AB5</strong> worker classification.",
    "But the real specialization is the capital economy. <strong>State-agency contractors and grant recipients</strong> need clean, auditable records and grant/fund tracking. <strong>Trade and professional associations, advocacy groups, and lobbying firms</strong> have membership-dues revenue and restricted funds. The <strong>nonprofit</strong> sector is dense, with functional-expense allocation and filings like <a href=\"/accounting/financial-statements/\">Form 990</a> and California&rsquo;s RRF-1 behind them. And at the city&rsquo;s edge, <strong>Central Valley agriculture</strong> brings seasonal labor and commodity accounting. A generic bookkeeper rarely handles fund accounting or grant compliance; we build a named bookkeeper into your file who does.",
    "The result: books that reflect how a Sacramento organization actually runs &mdash; the gross-receipts business tax tracked, sales tax reconciled to the CDTFA, restricted funds and grants segregated, contractor vs. employee handled under <a href=\"/glossary/1099-vs-w2/\">AB5</a> &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Capitol district", note: "Government contractors, associations &amp; advocacy" },
    { name: "Midtown &amp; East Sacramento", note: "Professional services, nonprofits &amp; small business" },
    { name: "Natomas &amp; North Sacramento", note: "Logistics, healthcare &amp; services" },
    { name: "Roseville, Folsom &amp; the suburbs", note: "Tech, professional services &amp; retail" },
    { name: "Elk Grove &amp; the South County", note: "Small business, agriculture-adjacent &amp; services" },
    { name: "All of the Capital region", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "BOT", desc: "Sacramento Business Operations Tax &mdash; the city&rsquo;s business tax, assessed largely on <strong>gross receipts</strong>, with a business operations tax certificate most businesses must hold and renew. We track gross receipts so it&rsquo;s clear; the City of Sacramento and your CPA confirm the rate for your business type." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise. Many Sacramento nonprofits are exempt &mdash; confirmed with your CPA." },
    { figure: "8.75%", desc: "City of Sacramento combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus Sacramento County and district add-ons, administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
  ],
  taxNote: "Sacramento and California tax figures are educational and current as of the review date, verified against the City of Sacramento, the California Franchise Tax Board, and the CDTFA. Rates, thresholds, and certificate fees change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns, prepare Form 990 or RRF-1, or provide legal or tax advice. Grant-compliance and government-contract rate matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Government &amp; agency contractors", href: "/accounting/industries/professional-services/", note: "auditable records, grant and fund tracking, and clean separation of contract costs for state-agency work" },
    { label: "Nonprofits &amp; associations", href: "/accounting/industries/nonprofit/", note: "fund accounting, functional-expense allocation, restricted grants, and records that support Form 990 and RRF-1" },
    { label: "Professional services &amp; advocacy", href: "/accounting/industries/professional-services/", note: "membership-dues revenue, project and matter tracking, and AB5 contractor analysis for lobbying and consulting firms" },
    { label: "Agriculture &amp; agribusiness", href: "/accounting/industries/professional-services/", note: "Central Valley operations &mdash; seasonal labor payroll, commodity and crop cost tracking, and equipment depreciation" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "E-commerce &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> beyond California" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the Business Operations Tax tracked and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Nonprofit &amp; grant bookkeeping", body: "Fund accounting, restricted-grant tracking, and functional-expense allocation kept clean for your CPA&rsquo;s Form 990 and RRF-1.", href: "/accounting/industries/nonprofit/", cta: "Nonprofit accounting &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with fund/class structure where it&rsquo;s needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Cleanup &amp; catch-up", body: "Grant-funded and association books fall behind between cycles. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
  ],

  advisoryBody: "For a grant recipient or an association, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your restricted funds are truly segregated, your grant spend will pass review, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named Sacramento bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Sacramento, CA FTB &amp; CDTFA &middot; No tax-filing, Form 990/RRF-1, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Sacramento business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Sacramento and the wider Capital region, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Sacramento Business Operations Tax and the government-contract, nonprofit, and association accounting the capital runs on." },
    { q: "What is the Sacramento Business Operations Tax?", a: "It&rsquo;s the city&rsquo;s business tax, assessed largely on gross receipts, and most businesses must hold and annually renew a business operations tax certificate. We track gross receipts in your books so the figure is clear and the certificate is never missed; the City of Sacramento and your CPA confirm the rate and what&rsquo;s due for your specific business type." },
    { q: "What California taxes affect my Sacramento bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee (many nonprofits are exempt &mdash; confirmed with your CPA). The CDTFA administers sales and use tax at about 8.75% in the city of Sacramento. And AB5&rsquo;s ABC test governs worker classification. We build all of it into how your books are kept." },
    { q: "Do you handle nonprofit and grant accounting?", a: "Yes &mdash; it&rsquo;s a core Sacramento engagement. Nonprofits, associations, and grant recipients need fund and grant tracking, functional-expense allocation between program and administrative costs, and records that cleanly support the annual filings such as Form 990 and California&rsquo;s RRF-1. We keep the books to that standard in QuickBooks; the filings themselves are prepared by your CPA, whom we coordinate with." },
    { q: "Do you work with government and agency contractors?", a: "Yes. State-agency contractors and grant recipients need auditable records, clean separation of contract and grant costs, and documentation that holds up to review. We keep the operational books to that standard and coordinate with your CPA and any government-contract specialist on rate and compliance matters. We handle the bookkeeping; we don&rsquo;t file returns or represent you before any agency." },
    { q: "How much does a Sacramento bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Grant-funded organizations and associations often need additional fund-accounting structure, which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Sacramento QuickBooks file?", a: "Yes &mdash; especially for grant-funded organizations and associations whose books fell behind between funding cycles or a leadership change. We scope a one-time cleanup or catch-up to a CPA-ready standard, including segregating restricted funds and grants, then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Sacramento?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Sacramento situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/sacramento/",
    name: "Sacramento Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Sacramento businesses — fluent in the Sacramento Business Operations Tax, California's $800 franchise tax (FTB), and CDTFA sales tax (about 8.75%). Government-contract, nonprofit, association, and Central Valley ag aware. Fixed-fee, named bookkeeper.",
    serviceName: "Sacramento Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Sacramento tax-aware bookkeeping — the Business Operations Tax (gross receipts), California's $800 franchise tax, and CDTFA sales tax tracked, with nonprofit fund accounting, grant tracking, and government-contract structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal returns or prepare Form 990/RRF-1 — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Sacramento", sameAs: "https://en.wikipedia.org/wiki/Sacramento,_California" },
      { type: "AdministrativeArea", name: "Sacramento County", sameAs: "https://en.wikipedia.org/wiki/Sacramento_County,_California" },
    ],
    audienceType: "Sacramento and Capital-region small and midsize organizations — government and agency contractors, nonprofits and associations, professional services and advocacy, agriculture and agribusiness, healthcare, and e-commerce",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

/* /find-an-accountant/texas/cities/dallas/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Texas tax stack is shared (no income tax; franchise/margin tax;
 * 8.25% sales tax; business personal property rendition) — the un-clonable substance is
 * Dallas's ECONOMY: a corporate-headquarters, banking/finance, insurance, and tech
 * (the Richardson "Telecom Corridor") hub, plus heavy wholesale/trade and professional
 * services. The distinctive accounting is corporate/multi-entity, finance and
 * professional-services revenue, and SaaS/tech — NOT Houston's oil & gas or Austin's
 * semiconductors. A find-replace "Dallas"->"Houston" reads false (no energy/JIB/Port
 * profile; Dallas is HQ/finance/tech). The BPP-rendition layer is emphasized here for
 * equipment- and data-center-heavy corporate operations.
 *
 * HONESTY: real facts only; margin-tax thresholds and filings deferred to the Texas
 * Comptroller and CPA/EA; equity-comp tax deferred to the CPA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/dallas/",
  slug: "dallas",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Dallas Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Dallas ProAdvisor bookkeeping — corporate, finance and tech accounting, the franchise (margin) tax, 8.25% sales tax, BPP rendition. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Dallas" },
  ],
  hero: {
    eyebrow: "Dallas &middot; Dallas County &middot; Texas",
    heading: "Dallas bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Dallas businesses &mdash; built around the corporate, finance, and tech economy of the metroplex, with the Texas franchise &ldquo;margin&rdquo; tax, 8.25% sales tax, and business personal property rendition handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Dallas &amp; the metroplex",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Dallas businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in corporate and professional-services accounting and the Texas franchise (margin) tax and sales-tax structure. The full Dallas summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Dallas &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Dallas businesses start here",
    heading: "Book a Dallas discovery call.",
    lede: "30 minutes. We review where your books stand and your Dallas context &mdash; multi-entity corporate structure, professional-services and SaaS revenue, the Texas margin tax, 8.25% sales tax, business personal property rendition &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=dallas&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Dallas",
  copy: {
    localEyebrow: "Bookkeeping built for how Dallas actually runs",
    areasEyebrow: "Across the city &amp; the metroplex",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Dallas verticals we know",
    servicesEyebrow: "What we do for Dallas businesses",
    faqEyebrow: "Dallas FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=dallas&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Dallas businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state income tax</strong>, and Dallas levies no city income or gross-receipts tax &mdash; so what shapes the books is the metroplex economy and the Texas tax stack. Dallas is a <strong>corporate-headquarters, banking and finance, insurance, and tech</strong> hub (the Richardson <strong>Telecom Corridor</strong>), with heavy wholesale/trade and professional services. The distinctive accounting is <strong>multi-entity corporate structure</strong>, professional-services and SaaS revenue, and clean books for lenders and boards. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due), <strong>8.25% sales tax</strong>, and <strong>business personal property</strong> rendition. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Dallas businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Dallas and metroplex businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in corporate and professional-services accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Dallas has no city income or gross-receipts tax. Businesses face the <strong>Texas Franchise Tax (the &ldquo;margin&rdquo; tax)</strong> through the Comptroller &mdash; no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and annual <strong>business personal property</strong> rendition. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle multi-entity corporate structures?", a: "Yes &mdash; it&rsquo;s common in Dallas. Corporate groups and franchisors run multiple entities, each with its own books and its own margin-tax position. We keep the entities reconciled and consistent, with clean <strong>intercompany</strong> entries, so your CPA can consolidate and file accurately and your board and lenders can trust the statements." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Multi-entity corporate and finance businesses carry more structure, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Dallas</strong> &mdash; Downtown and the Arts District, Uptown, the Telecom Corridor in Richardson, Las Colinas in Irving, and North Dallas &mdash; plus the wider DFW metroplex, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Dallas is a headquarters town &mdash; corporate, finance, insurance, and tech &mdash; and that profile, on top of the Texas tax stack, is what shapes its books. Texas has no state income tax, and Dallas levies no city income or gross-receipts tax.",
    "The metroplex is dense with <strong>corporate headquarters</strong>, <strong>banking and finance</strong>, <strong>insurance</strong>, and <strong>technology</strong> &mdash; the Richardson <strong>Telecom Corridor</strong> is one of the country&rsquo;s tech clusters &mdash; alongside heavy <strong>wholesale/trade</strong> and <strong>professional services</strong>. The distinctive accounting is <strong>multi-entity</strong>: corporate groups, franchisors, and holding structures that need clean intercompany entries and consolidation-ready books, plus professional-services and SaaS revenue recognized correctly.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked across each entity &mdash; <strong>8.25% sales and use tax</strong>, and annual <strong>business personal property</strong> rendition to the appraisal district, which matters for equipment- and data-center-heavy operations since Texas funds local government with property tax instead of income tax. We put a named bookkeeper on your file who keeps multi-entity books clean and the Texas positions tracked &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Dallas business actually runs &mdash; entities reconciled with clean intercompany, revenue recognized correctly, the margin tax and sales tax handled, business personal property ready to render &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Arts District", note: "Finance, professional services &amp; corporate" },
    { name: "Uptown &amp; Oak Lawn", note: "Agencies, startups &amp; professional services" },
    { name: "Telecom Corridor (Richardson)", note: "Tech, telecom &amp; SaaS" },
    { name: "Las Colinas &amp; Irving", note: "Corporate HQs, finance &amp; insurance" },
    { name: "North Dallas &amp; Plano", note: "Corporate, healthcare &amp; small business" },
    { name: "All of the DFW metroplex", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Dallas has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; <strong>no tax due below a revenue threshold</strong>, tracked per entity. We track the position; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Dallas combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks &mdash; including SaaS taxability, which Texas treats distinctly. " },
    { figure: "BPP", desc: "Business personal property rendition &mdash; because Texas funds local government with property tax (no income tax), businesses must annually render tangible property (equipment, furniture, servers) to the county appraisal district. We keep fixed-asset records ready; valuation and protest stay with your CPA or property-tax consultant." },
  ],
  taxNote: "Dallas and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, SaaS taxability rules, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise or sales tax returns, advise on equity-compensation tax, or provide legal or tax advice.",

  industries: [
    { label: "Corporate &amp; multi-entity groups", href: "/accounting/industries/professional-services/", note: "intercompany entries, consolidation-ready books, and a margin-tax position per entity" },
    { label: "Finance, banking &amp; insurance", href: "/accounting/industries/professional-services/", note: "clean books for lenders and boards, fund and commission accounting, and reconciliation discipline" },
    { label: "Technology &amp; SaaS", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition, MRR/ARR, and Texas SaaS sales-tax treatment" },
    { label: "Professional services &amp; agencies", href: "/accounting/industries/professional-services/", note: "project profitability, gross-vs-net revenue, and contractor classification" },
    { label: "Wholesale, trade &amp; distribution", href: "/accounting/industries/ecommerce/", note: "inventory and COGS, resale-certificate handling, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the margin-tax position tracked per entity and 8.25% sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Multi-entity cleanup", body: "Corporate and franchise books drift when intercompany isn&rsquo;t clean. We get the file CPA-ready &mdash; entities reconciled &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with multi-entity, class, and deferred-revenue structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Lender- &amp; board-ready books", body: "Books structured so your CPA can file the Texas margin and sales tax accurately and a lender or board can trust the statements.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],

  advisoryBody: "Across a corporate group, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your intercompany ties out, your revenue is recognized correctly, your margin-tax position is tracked per entity, and your statements will satisfy a lender or board. That judgment is what a named Dallas bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, equity-comp-tax, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Dallas business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Dallas and the wider DFW metroplex, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in corporate and professional-services accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Dallas has no city income or gross-receipts tax. Instead, businesses face the Texas Franchise Tax &mdash; the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Dallas and annual business personal property rendition for property tax. We track all of it in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle multi-entity and franchise structures?", a: "Yes &mdash; it&rsquo;s common across the metroplex. Corporate groups, franchisors, and holding structures run multiple entities, each with its own books and its own margin-tax position. We keep the entities reconciled and consistent, with clean intercompany entries, so your CPA can consolidate and file accurately and your board and lenders can rely on the statements." },
    { q: "How is SaaS taxed for sales tax in Texas?", a: "Texas treats certain software and data-processing services as taxable in a way that differs from many states, so SaaS and tech companies have to apply Texas sales tax correctly on the taxable portion. We set the books up so taxable and non-taxable revenue are tracked cleanly for an accurate return; the specific taxability determination is confirmed with your CPA, since it depends on how your product is delivered and used." },
    { q: "What is business personal property rendition?", a: "Because Texas has no income tax, it funds local government largely through property tax &mdash; and businesses must annually render their tangible business personal property (equipment, furniture, servers) to the county appraisal district. We keep your fixed-asset records clean and current so the rendition is straightforward; the valuation and any protest are handled with your CPA or a property-tax consultant." },
    { q: "How much does a Dallas bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Multi-entity corporate and finance businesses carry more structure (intercompany, consolidation), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Dallas QuickBooks file?", a: "Yes &mdash; especially for corporate groups and franchises whose intercompany or multi-entity books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including reconciling intercompany and rebuilding the chart of accounts &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Dallas?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Dallas situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/dallas/",
    name: "Dallas Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Dallas businesses — fluent in corporate, finance, and tech accounting, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition. Multi-entity and SaaS aware. Fixed-fee, named bookkeeper.",
    serviceName: "Dallas Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Dallas tax-aware bookkeeping — multi-entity and intercompany structure, professional-services and SaaS revenue recognition, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns or advise on equity-compensation tax — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Dallas", sameAs: "https://en.wikipedia.org/wiki/Dallas" },
      { type: "AdministrativeArea", name: "Dallas County", sameAs: "https://en.wikipedia.org/wiki/Dallas_County,_Texas" },
    ],
    audienceType: "Dallas and DFW metroplex small and midsize businesses — corporate and multi-entity groups, finance, banking and insurance, technology and SaaS, professional services and agencies, wholesale and distribution, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

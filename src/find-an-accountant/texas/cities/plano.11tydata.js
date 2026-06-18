/* /find-an-accountant/texas/cities/plano/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized — NOT Dallas/Houston/El Paso find-replaced. Plano (Collin County) is
 * Texas's CORPORATE-HEADQUARTERS CAPITAL: the dominant economy is major corporate HQs and
 * regional campuses (Toyota North America's HQ, JPMorgan Chase's largest campus, Frito-Lay/
 * PepsiCo, Liberty Mutual, and a long list of relocated/expanded HQs along the Dallas North
 * Tollway and around Legacy West) plus tech, finance, and professional services on an
 * affluent, high-income business base, with commercial real-estate and development activity
 * riding the corporate growth. So the distinctive accounting is MULTI-ENTITY corporate
 * structures, EQUITY / STOCK COMPENSATION and high-comp executive payroll, SaaS/tech REVENUE
 * RECOGNITION, professional-services project/client profitability, and the back-office books
 * of relocated and expanding businesses. This is distinct from Dallas's urban corporate/
 * finance core (Plano = suburban corporate-campus + relocations), from El Paso (border), and
 * from Houston (oil & gas). The corporations below are named ONLY as examples of the LOCAL
 * ECONOMY — never as TechBrot clients. Texas tax stack (shared, identical to el-paso): NO
 * income tax, the Texas Franchise "margin" tax (Comptroller), 8.25% sales tax, and BPP
 * rendition. Links into the now-built TX industry + service children.
 *
 * HONESTY: real facts only; no fabricated statistics, no corporation named as our client;
 * margin-tax thresholds and all filings deferred to the Texas Comptroller and the CPA/EA;
 * TechBrot keeps the books and coordinates, does not file TX returns or represent. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/plano/",
  slug: "plano",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Plano Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Plano businesses — fluent in the corporate-HQ, tech, finance, and professional-services economy (multi-entity structures, equity/stock comp and executive payroll, SaaS revenue recognition), the Texas franchise (margin) tax, and 8.25% sales tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Plano" },
  ],
  hero: {
    eyebrow: "Plano &middot; Collin County &middot; Texas",
    heading: "Plano bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Plano businesses &mdash; built around Collin County&rsquo;s corporate-campus economy (relocated and expanding HQs, tech, finance, and professional services), with multi-entity structures, equity and executive payroll, SaaS revenue recognition, the Texas franchise &ldquo;margin&rdquo; tax, and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Plano &amp; Collin County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Plano businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in multi-entity corporate structures, equity and executive payroll, SaaS revenue recognition, and the Texas franchise (margin) tax and sales-tax structure. The full Plano summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Plano &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Plano businesses start here",
    heading: "Book a Plano discovery call.",
    lede: "30 minutes. We review where your books stand and your Plano context &mdash; multi-entity corporate structures, equity and stock compensation, high-comp executive payroll, SaaS and tech revenue recognition, professional-services project profitability, the back office of a relocated or expanding business, the Texas margin tax, and 8.25% sales tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=plano&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Plano",
  copy: {
    localEyebrow: "Bookkeeping built for how Plano actually runs",
    areasEyebrow: "Across the city &amp; Collin County",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Plano verticals we know",
    servicesEyebrow: "What we do for Plano businesses",
    faqEyebrow: "Plano FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=plano&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Plano businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state personal or corporate income tax</strong>, and Plano levies no city income or gross-receipts tax &mdash; so what shapes the books here is the <strong>corporate-campus economy</strong> and the Texas tax stack. Plano, in <strong>Collin County</strong>, is effectively Texas&rsquo;s corporate-headquarters capital: a dense run of major HQs and regional campuses along the <strong>Dallas North Tollway</strong> and around <strong>Legacy West</strong> &mdash; Toyota North America&rsquo;s headquarters, JPMorgan Chase&rsquo;s largest campus, Frito-Lay/PepsiCo, Liberty Mutual, and many relocated and expanded HQs &mdash; on an affluent, high-income base of <strong>tech, finance, and professional services</strong>. So the distinctive accounting is <strong>multi-entity corporate structures</strong>, <strong>equity and stock compensation</strong> with high-comp executive payroll, <strong>SaaS and tech revenue recognition</strong>, professional-services project and client profitability, and the back-office books of relocated and expanding businesses &mdash; plus the <strong>commercial real estate and development</strong> that rides the corporate growth. (Those companies are named only as examples of Plano&rsquo;s economy &mdash; not as our clients.) The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due), <strong>8.25% sales tax</strong>, and the annual <strong>business personal property</strong> rendition. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Plano businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Plano and Collin County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in multi-entity corporate structures, equity and executive payroll, SaaS revenue recognition, and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Plano has no city income or gross-receipts tax. Instead, businesses face the <strong>Texas Franchise Tax (the &ldquo;margin&rdquo; tax)</strong> through the Comptroller &mdash; with no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and annual <strong>business personal property</strong> rendition for property tax. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle multi-entity and corporate-campus accounting?", a: "Yes &mdash; it&rsquo;s the defining Plano need. HQs, regional campuses, relocated and expanding businesses, and the firms around them often run <strong>multiple entities</strong> with intercompany allocations, <strong>equity and stock compensation</strong> alongside high-comp executive payroll, and <strong>SaaS or project-based revenue recognition</strong>. We keep clean, consolidatable books to that standard in QuickBooks; equity-plan accounting, ASC 606 positions, and tax positions stay with your CPA, whom we coordinate with." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Multi-entity and equity-heavy Plano businesses often carry intercompany and revenue-recognition complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Plano and Collin County</strong> &mdash; Legacy West and the Dallas North Tollway corporate corridor, the Shops at Legacy and Granite Park office clusters, Downtown/Historic Plano, West Plano, and the wider Collin County suburbs &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Plano runs on corporate headquarters, and that &mdash; not a city tax &mdash; is what makes its books their own discipline. Texas has no state income tax, and Plano levies no city income or gross-receipts tax, so the work is about the economy and the Texas stack.",
    "Plano, in <strong>Collin County</strong>, is effectively Texas&rsquo;s corporate-headquarters capital. Along the <strong>Dallas North Tollway</strong> and around <strong>Legacy West</strong> sits one of the densest concentrations of major HQs and regional campuses in the state &mdash; Toyota North America&rsquo;s headquarters, JPMorgan Chase&rsquo;s largest campus, Frito-Lay/PepsiCo, Liberty Mutual, and a long line of relocated and expanded headquarters (named here only as examples of the local economy). On that affluent base of <strong>tech, finance, and professional services</strong>, the distinctive accounting is <strong>multi-entity corporate structures</strong> with intercompany records and consolidation, <strong>equity and stock compensation</strong> alongside high-comp executive payroll, <strong>SaaS and tech revenue recognition</strong>, and professional-services <strong>project and client profitability</strong>. The corporate growth also drives notable <strong>commercial real estate and development</strong>, and the back office of every relocated or expanding business has to be stood up clean.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked, and it lands on the multi-entity, professional-services, and SaaS structures common here &mdash; <strong>8.25% sales and use tax</strong>, and the annual <strong>business personal property</strong> rendition to the Collin Central Appraisal District on equipment and furniture. A generic bookkeeper has never consolidated a multi-entity corporate file, tracked equity-comp accruals into payroll, or staged SaaS revenue against contract terms; we put a named bookkeeper on your file who understands corporate-campus work, with the tax positions left to your CPA.",
    "The result: books that reflect how a Plano business actually runs &mdash; entities consolidatable, intercompany straight, equity and executive payroll clean, SaaS and project revenue recognized correctly, the margin tax and sales tax handled, and business personal property ready to render &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Legacy West &amp; the Tollway corridor", note: "Corporate HQs, regional campuses &amp; relocated headquarters" },
    { name: "Shops at Legacy &amp; Granite Park", note: "Tech, finance &amp; professional-services offices" },
    { name: "Downtown / Historic Plano", note: "Small business, professional services &amp; retail" },
    { name: "West Plano", note: "Affluent owner-operators, advisors &amp; medical practices" },
    { name: "Collin County suburbs", note: "Frisco-edge, Allen &amp; McKinney expanding businesses" },
    { name: "All of the Plano metro", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Plano has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller, calculated on margin &mdash; with <strong>no tax due below a revenue threshold</strong>. It lands on the multi-entity and professional-services structures common in Plano. We track the position in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Plano combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return &mdash; with SaaS and software taxability and use tax on equipment purchases watched." },
    { figure: "Property tax", desc: "Texas funds local government with property tax rather than income tax, so the annual <strong>business personal property</strong> rendition of equipment, furniture, and fixtures to the Collin Central Appraisal District is real money &mdash; and office build-outs across Plano&rsquo;s corporate campuses make that asset base substantial. We keep fixed-asset records clean so it&rsquo;s ready; valuation and any protest stay with your CPA or a property-tax consultant." },
  ],
  taxNote: "Plano and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, local sales-tax components, property-tax rates, and any equity-compensation or revenue-recognition treatment change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise or sales tax returns, compute equity-compensation or ASC 606 positions, or provide legal or tax advice.",

  industries: [
    { label: "Professional services", href: "/find-an-accountant/texas/industries/professional-services/", note: "consultancies, agencies, law &amp; advisory firms &mdash; project and client profitability, WIP, and the margin tax on a service base" },
    { label: "Tech &amp; SaaS", href: "/find-an-accountant/texas/industries/professional-services/", note: "software and tech companies &mdash; SaaS revenue recognition, deferred revenue, and multi-entity consolidation" },
    { label: "Finance &amp; corporate back office", href: "/find-an-accountant/texas/industries/professional-services/", note: "relocated and expanding HQs &mdash; intercompany records, equity/stock comp accruals, and high-comp executive payroll support" },
    { label: "Commercial real estate &amp; development", href: "/find-an-accountant/texas/industries/real-estate/", note: "developers, investors &amp; brokerages riding Plano&rsquo;s corporate growth &mdash; multi-entity ledgers, CAM, and job costing" },
    { label: "Healthcare", href: "/find-an-accountant/texas/industries/healthcare/", note: "West Plano practices and clinics &mdash; insurance-AR reconciliation, provider payroll, and the PLLC margin tax" },
    { label: "Manufacturing &amp; distribution", href: "/find-an-accountant/texas/industries/manufacturing/", note: "product companies in the metro &mdash; inventory and standard costing and the Texas manufacturing exemption" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with multi-entity records consolidatable, the margin-tax position tracked, and 8.25% sales tax reconciled.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Multi-entity / corporate cleanup", body: "Intercompany, equity-comp, and multi-entity corporate books drift fast. We get the file CPA-ready &mdash; intercompany and consolidation rebuilt, revenue recognition staged &mdash; then keep it clean.", href: "/find-an-accountant/texas/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with multi-entity structure, class/location tracking, deferred-revenue schedules, and project costing where needed.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales- &amp; margin-tax-ready books", body: "Books structured so your CPA can file the Texas sales tax and franchise (margin) tax accurately, with SaaS taxability watched and business personal property ready to render.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  advisoryBody: "Across entities, equity plans, and recurring-revenue contracts, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your intercompany consolidates, your deferred revenue is staged against contract terms, your equity-comp accruals tie to payroll, and your margin-tax position is tracked across the structure. That judgment is what a named Plano bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, equity-valuation, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Plano business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Plano and the wider Collin County area, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in multi-entity corporate structures, equity and executive payroll, SaaS revenue recognition, and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Plano has no city income or gross-receipts tax. Instead, businesses face the Texas Franchise Tax &mdash; commonly called the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Plano and annual business personal property rendition for property tax. We track all of it in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle multi-entity and corporate-campus accounting?", a: "Yes &mdash; it&rsquo;s the defining Plano engagement. The HQs, regional campuses, and relocated or expanding businesses concentrated around Legacy West and the Dallas North Tollway often run multiple entities with intercompany allocations and consolidation. We keep clean, consolidatable books in QuickBooks with class and location tracking, intercompany reconciled, and statements ready for your CPA. The equity-plan accounting, consolidation method, and tax positions stay with your CPA, whom we coordinate with." },
    { q: "Can you support equity / stock compensation and executive payroll?", a: "On the bookkeeping side, yes. Plano&rsquo;s corporate and tech employers commonly run equity and stock compensation alongside high-comp executive payroll, and we keep the payroll, accruals, and related expense clean and reconciled in your books. The plan design, equity-compensation valuation, and the tax treatment are computed and filed by your CPA and your payroll/equity provider &mdash; we are not a payroll-tax filer or an equity-plan administrator." },
    { q: "Do you handle SaaS and tech revenue recognition?", a: "Yes, at the bookkeeping level. Many Plano tech and SaaS companies carry recurring-revenue and contract-based billing, so we maintain deferred-revenue schedules, recognize revenue against contract terms, and keep the books clean and auditable in QuickBooks. The ASC 606 position and any audit treatment are confirmed by your CPA; we keep the records so that determination is straightforward." },
    { q: "How much does a Plano bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Multi-entity and equity-heavy businesses carry more complexity (intercompany, consolidation, deferred revenue), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Plano QuickBooks file?", a: "Yes &mdash; especially for multi-entity and fast-growing businesses whose intercompany or deferred-revenue books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding intercompany accounts and staging revenue recognition &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Plano?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Plano situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/plano/",
    name: "Plano Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Plano businesses — fluent in the corporate-HQ, tech, finance, and professional-services economy (multi-entity corporate structures, equity/stock compensation and executive payroll, SaaS revenue recognition, commercial real estate), the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition. Fixed-fee, named bookkeeper.",
    serviceName: "Plano Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Plano tax-aware bookkeeping — multi-entity corporate structures and intercompany consolidation, equity/stock-compensation accruals and high-comp executive payroll support, SaaS/tech revenue recognition and deferred-revenue schedules, professional-services project profitability, commercial real estate, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns, compute equity-comp/ASC 606 positions, or set tax positions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Plano", sameAs: "https://en.wikipedia.org/wiki/Plano,_Texas" },
      { type: "AdministrativeArea", name: "Collin County", sameAs: "https://en.wikipedia.org/wiki/Collin_County,_Texas" },
    ],
    audienceType: "Plano and Collin County small and midsize businesses — corporate HQs and regional campuses, relocated and expanding businesses, tech and SaaS companies, finance and professional services, commercial real estate and development, healthcare, and manufacturing",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

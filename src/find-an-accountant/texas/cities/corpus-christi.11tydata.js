/* /find-an-accountant/texas/cities/corpus-christi/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized — NOT Houston or El Paso find-replaced. Corpus Christi (Nueces County)
 * is a Gulf energy-EXPORT port city: the Port of Corpus Christi is the largest U.S. crude-oil
 * export port, and the economy is DOWNSTREAM — petrochemicals, refining, and energy export —
 * plus WIND ENERGY (manufacturing and operations), a major MILITARY footprint (Naval Air
 * Station Corpus Christi and the Corpus Christi Army Depot), commercial fishing, and Gulf-coast
 * tourism. The distinctive accounting is downstream refining & petrochemical cost accounting,
 * commodity inventory and EXPORT LOGISTICS (bulk export, terminals, marine/port logistics),
 * large CAPITAL-PROJECT / fixed-asset accounting for plants and terminals, JIB/intercompany for
 * energy operators, and contractor/industrial-services job costing. This is deliberately
 * distinct from Houston (upstream oil & gas + the Texas Medical Center) and from El Paso (the
 * Mexico border). Texas tax stack: NO income tax, the Texas Franchise "margin" tax (Comptroller),
 * 8.25% sales tax, and BPP rendition. Links into the now-built TX industry + service children.
 *
 * HONESTY: real facts only; no fabricated stats and no company named as a client; margin-tax
 * thresholds and all filings deferred to the Texas Comptroller and the CPA/EA; TechBrot keeps
 * the books and coordinates, does not file TX returns or represent. No fabricated data. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/corpus-christi/",
  slug: "corpus-christi",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Corpus Christi Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi businesses — fluent in the Gulf energy-export, petrochemical and refining economy, the Port of Corpus Christi and marine/export logistics, wind energy and the military footprint, the Texas franchise (margin) tax, and 8.25% sales tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Corpus Christi" },
  ],
  hero: {
    eyebrow: "Corpus Christi &middot; Nueces County &middot; Texas",
    heading: "Corpus Christi bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi businesses &mdash; built around the Gulf energy-export economy (petrochemicals, refining, the Port of Corpus Christi and marine/export logistics, wind energy, and the Naval Air Station and Army Depot footprint), with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Corpus Christi &amp; the Coastal Bend",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in downstream energy and export-logistics accounting and the Texas franchise (margin) tax and sales-tax structure. The full Corpus Christi summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Corpus Christi &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Corpus Christi businesses start here",
    heading: "Book a Corpus Christi discovery call.",
    lede: "30 minutes. We review where your books stand and your Corpus Christi context &mdash; downstream refining and petrochemical cost accounting, commodity inventory and export/terminal logistics, capital projects and fixed assets, JIB and intercompany detail, the Texas margin tax, and 8.25% sales tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=corpus-christi&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Corpus Christi",
  copy: {
    localEyebrow: "Bookkeeping built for how Corpus Christi actually runs",
    areasEyebrow: "Across the city &amp; the Coastal Bend",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Corpus Christi verticals we know",
    servicesEyebrow: "What we do for Corpus Christi businesses",
    faqEyebrow: "Corpus Christi FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=corpus-christi&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state personal or corporate income tax</strong>, and Corpus Christi levies no city income or gross-receipts tax &mdash; so what shapes the books here is the <strong>Gulf energy-export economy</strong> and the Texas tax stack. Corpus Christi is a Gulf <strong>energy-export port city</strong> &mdash; the <strong>Port of Corpus Christi</strong> is the largest U.S. crude-oil export port &mdash; and the economy is <strong>downstream</strong>: petrochemicals, refining, and energy export, plus <strong>wind energy</strong> (manufacturing and operations), a major <strong>military</strong> footprint (Naval Air Station Corpus Christi and the Corpus Christi Army Depot), commercial fishing, and Gulf-coast tourism. So the distinctive accounting is <strong>downstream refining and petrochemical cost accounting</strong>, <strong>commodity inventory and export/terminal logistics</strong> (bulk export, marine and port logistics), large <strong>capital-project and fixed-asset</strong> accounting for plants and terminals, <strong>JIB and intercompany</strong> records for energy operators, and contractor and industrial-services job costing. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due), <strong>8.25% sales tax</strong>, and the annual <strong>business personal property</strong> rendition. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Corpus Christi businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi and Coastal Bend businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in downstream energy and export-logistics accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Corpus Christi has no city income or gross-receipts tax. Instead, businesses face the <strong>Texas Franchise Tax (the &ldquo;margin&rdquo; tax)</strong> through the Comptroller &mdash; with no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and annual <strong>business personal property</strong> rendition for property tax. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle energy and export-logistics accounting?", a: "Yes &mdash; it&rsquo;s the defining Corpus Christi need. Refiners, petrochemical operators, terminal and marine-logistics companies, and energy exporters need clean <strong>commodity inventory</strong> and cost accounting, <strong>capital-project and fixed-asset</strong> tracking for plants and terminals, and <strong>JIB and intercompany</strong> records. We keep the books to that standard in QuickBooks; the tax positions stay with your CPA, whom we coordinate with. We do not file Texas returns or represent you." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Energy, terminal-logistics, and multi-entity Corpus Christi businesses often carry inventory, capital-project, and intercompany complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Corpus Christi</strong> &mdash; the Port and the refinery and terminal corridor along the ship channel and the Inner Harbor, the industrial and contractor districts, the Naval Air Station and Army Depot area, Downtown and Uptown professional services, and the wider Coastal Bend &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Corpus Christi runs on Gulf energy export, and that &mdash; not a city tax &mdash; is what makes its books their own discipline. Texas has no state income tax, and Corpus Christi levies no city income or gross-receipts tax, so the work is about the economy and the Texas stack.",
    "Corpus Christi is a Gulf <strong>energy-export port city</strong>: the <strong>Port of Corpus Christi</strong> is the largest U.S. crude-oil export port, and the economy is <strong>downstream</strong> &mdash; petrochemicals, refining, and energy export. So the distinctive accounting is <strong>downstream refining and petrochemical cost accounting</strong>, <strong>commodity inventory and export/terminal logistics</strong> (bulk export, marine and port logistics moving product through the ship channel), large <strong>capital-project and fixed-asset</strong> accounting for plants and terminals, and <strong>JIB and intercompany</strong> records for energy operators. Around that, <strong>wind energy</strong> &mdash; manufacturing and operations &mdash; brings its own project costing, the <strong>military</strong> footprint (Naval Air Station Corpus Christi and the Corpus Christi Army Depot) anchors a defense-contractor and base-services economy, and commercial fishing and Gulf-coast tourism round out the Coastal Bend. This is downstream and export-driven &mdash; not the upstream oil &amp; gas and medical center of Houston, and not the border trade of El Paso.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked &mdash; <strong>8.25% sales and use tax</strong>, and the annual <strong>business personal property</strong> rendition to the county appraisal district. That last one matters here because refineries, terminals, and plants carry enormous tangible assets &mdash; equipment, processing units, and inventory &mdash; so the fixed-asset and inventory records behind a rendition are real money. A generic bookkeeper has never reconciled a capital-project work-in-progress schedule for a terminal build or split costs across a JIB; we put a named bookkeeper on your file who understands downstream and export work, with the tax positions left to your CPA.",
    "The result: books that reflect how a Corpus Christi business actually runs &mdash; refining and petrochemical costs tracked, commodity inventory and export logistics clean, capital projects and fixed assets straight, JIB and intercompany allocations correct, the margin tax and sales tax handled, and business personal property ready to render &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "The Port &amp; the ship channel", note: "Refiners, petrochemicals, terminals &amp; export/marine logistics" },
    { name: "Inner Harbor &amp; the refinery corridor", note: "Energy operators, processing &amp; bulk export" },
    { name: "Industrial districts &amp; contractor yards", note: "Industrial services, fabrication &amp; field contractors" },
    { name: "Naval Air Station &amp; Army Depot area", note: "Defense contractors, base services &amp; small business" },
    { name: "Downtown, Uptown &amp; the bayfront", note: "Professional services, tourism, hospitality &amp; retail" },
    { name: "All of the Coastal Bend", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Corpus Christi has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller, calculated on margin &mdash; with <strong>no tax due below a revenue threshold</strong>. We track the position in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Corpus Christi combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return &mdash; with use tax on equipment and supplies watched." },
    { figure: "Property tax", desc: "Texas funds local government with property tax rather than income tax, so the annual <strong>business personal property</strong> rendition of equipment, processing units, furniture, and inventory to the county appraisal district matters &mdash; and for refineries, terminals, and plants that tangible-asset base is large. We keep fixed-asset and inventory records clean so it&rsquo;s ready; valuation and any protest stay with your CPA or a property-tax consultant." },
  ],
  taxNote: "Corpus Christi and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, local sales-tax components, and property-tax rates change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise or sales tax returns, represent clients before the Comptroller or IRS, or provide legal or tax advice.",

  industries: [
    { label: "Refining &amp; petrochemicals", href: "/find-an-accountant/texas/industries/manufacturing/", note: "downstream processing &mdash; standard and process costing, commodity inventory, and the Texas manufacturing exemption" },
    { label: "Energy export &amp; terminal logistics", href: "/find-an-accountant/texas/industries/trucking/", note: "bulk export, marine and port logistics, and distribution &mdash; cost-per-movement, inventory flow, and terminal throughput" },
    { label: "Capital projects &amp; industrial construction", href: "/find-an-accountant/texas/industries/construction/", note: "plant and terminal builds &mdash; work-in-progress, fixed-asset, and job-cost accounting for large capital projects" },
    { label: "Defense contractors &amp; base services", href: "/find-an-accountant/texas/industries/professional-services/", note: "Naval Air Station and Army Depot-linked contractors &mdash; project and contract costing and compliance-aware books" },
    { label: "Healthcare", href: "/find-an-accountant/texas/industries/healthcare/", note: "practices and clinics &mdash; insurance-AR reconciliation, provider payroll, and the PLLC margin tax" },
    { label: "Real estate &amp; coastal hospitality", href: "/find-an-accountant/texas/industries/real-estate/", note: "investors, brokerages, tourism &amp; hospitality &mdash; multi-entity ledgers, trust records, and seasonal revenue tracking" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with commodity inventory straight, the margin-tax position tracked, and 8.25% sales tax reconciled.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Energy / multi-entity cleanup", body: "Capital-project, JIB, intercompany, and multi-entity energy books drift fast. We get the file CPA-ready &mdash; work-in-progress and intercompany rebuilt &mdash; then keep it clean.", href: "/find-an-accountant/texas/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, fixed-asset, job-costing, and multi-entity structure where needed.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales- &amp; margin-tax-ready books", body: "Books structured so your CPA can file the Texas sales tax and franchise (margin) tax accurately, with business personal property ready to render.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  advisoryBody: "Across commodity inventory, capital projects, and JIB partners, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your processing and inventory costs are right, your capital-project work-in-progress reconciles, your margin-tax position is tracked, and your jobs and assets are costed. That judgment is what a named Corpus Christi bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Corpus Christi business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi and the wider Coastal Bend, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in downstream energy and export-logistics accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Corpus Christi has no city income or gross-receipts tax. Instead, businesses face the Texas Franchise Tax &mdash; commonly called the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Corpus Christi and annual business personal property rendition for property tax. We track all of it in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you file my Texas taxes?", a: "No. TechBrot keeps your books, reconciles your accounts, and tracks your Texas franchise (margin) tax and sales-tax positions so everything is CPA-ready &mdash; but we do not file Texas franchise or sales tax returns and we do not represent you before the Comptroller or the IRS. Your CPA or EA computes and files; we coordinate with them and hand over clean, filing-ready books." },
    { q: "Do you handle refining, petrochemical, and energy-export accounting?", a: "Yes &mdash; it&rsquo;s the defining Corpus Christi engagement. Refiners, petrochemical operators, terminal and marine-logistics companies, and energy exporters need clean commodity inventory and process-cost records, capital-project work-in-progress and fixed-asset tracking for plants and terminals, and JIB and intercompany records for joint operations. We keep all of that clean in QuickBooks. The tax positions stay with your CPA, whom we coordinate with; we do not provide tax advice." },
    { q: "Can you handle capital-project and fixed-asset accounting for plants and terminals?", a: "Yes. Plant and terminal builds carry large capital projects, so we track work-in-progress, capitalize and schedule fixed assets, and keep depreciation and disposal records clean &mdash; which also makes the annual business personal property rendition straightforward. The valuation, depreciation method for tax, and any protest are confirmed and handled by your CPA or a property-tax consultant." },
    { q: "How is bookkeeping here different from Houston or El Paso?", a: "Corpus Christi is downstream and export-driven: refining, petrochemicals, the Port of Corpus Christi (the largest U.S. crude-oil export port), terminals and marine logistics, plus wind energy and a strong military footprint. That means commodity inventory, capital-project, and JIB accounting &mdash; distinct from Houston&rsquo;s upstream oil &amp; gas and Texas Medical Center, and from El Paso&rsquo;s cross-border trade. We localize the chart of accounts and workflows to the downstream, export economy rather than reusing a generic template." },
    { q: "How much does a Corpus Christi bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Energy, terminal-logistics, and multi-entity businesses carry more complexity (inventory, capital projects, JIB and intercompany), which we scope transparently before any work begins." },
    { q: "How do we get started in Corpus Christi?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Corpus Christi situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/corpus-christi/",
    name: "Corpus Christi Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Corpus Christi businesses — fluent in the Gulf energy-export, petrochemical and refining economy, the Port of Corpus Christi and marine/export logistics, capital-project and fixed-asset accounting, JIB and intercompany records, wind energy and the military footprint, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition. Fixed-fee, named bookkeeper.",
    serviceName: "Corpus Christi Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Corpus Christi tax-aware bookkeeping — downstream refining and petrochemical cost accounting, commodity inventory and export/terminal logistics, capital-project work-in-progress and fixed-asset tracking, JIB and intercompany records, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns or represent clients — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Corpus Christi", sameAs: "https://en.wikipedia.org/wiki/Corpus_Christi,_Texas" },
      { type: "AdministrativeArea", name: "Nueces County", sameAs: "https://en.wikipedia.org/wiki/Nueces_County,_Texas" },
    ],
    audienceType: "Corpus Christi and Coastal Bend small and midsize businesses — refining and petrochemical operators, energy export and terminal/marine logistics, capital-project and industrial construction, wind energy manufacturing and operations, Naval Air Station and Army Depot-linked defense contractors, commercial fishing, healthcare, tourism and hospitality, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

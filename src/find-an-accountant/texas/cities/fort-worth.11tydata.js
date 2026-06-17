/* /find-an-accountant/texas/cities/fort-worth/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Texas tax stack is shared (no income tax; franchise/margin tax;
 * 8.25% sales tax) — the un-clonable substance is Fort Worth's ECONOMY: it sits atop the
 * BARNETT SHALE (a major natural-gas play → operators, royalties, severance tax),
 * anchors a large AEROSPACE & DEFENSE manufacturing base (Lockheed F-35, Bell), a major
 * LOGISTICS/distribution hub (AllianceTexas inland port), and a historic AGRICULTURE/
 * RANCHING economy (the Stockyards, cattle). The distinctive accounting is natural-gas
 * JIB/royalty/severance, aerospace job costing, distribution inventory, and ag. A
 * find-replace "Fort Worth"->"Dallas" reads false (Dallas is corporate HQ/finance; FW
 * is Barnett-Shale gas + aerospace + ranching). 3rd tax-stack item = severance, framed
 * around Barnett Shale natural gas (vs Houston's broader oil & gas).
 *
 * HONESTY: real facts only; severance/depletion, DCAA/aerospace-contract, and filings
 * deferred to the CPA/specialists and Texas Comptroller. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/fort-worth/",
  slug: "fw",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Fort Worth Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Fort Worth businesses — fluent in Barnett Shale natural-gas accounting, aerospace & logistics, the Texas franchise (margin) tax, 8.25% sales tax, and severance tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Fort Worth" },
  ],
  hero: {
    eyebrow: "Fort Worth &middot; Tarrant County &middot; Texas",
    heading: "Fort Worth bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Fort Worth businesses &mdash; built around the Barnett Shale natural-gas economy, aerospace and defense manufacturing, the AllianceTexas logistics hub, and the ranching tradition, with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Fort Worth &amp; Tarrant County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Worth businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in natural-gas and aerospace accounting and the Texas franchise (margin) tax and sales-tax structure. The full Fort Worth summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Fort Worth &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Fort Worth businesses start here",
    heading: "Book a Fort Worth discovery call.",
    lede: "30 minutes. We review where your books stand and your Fort Worth context &mdash; Barnett Shale royalty and JIB accounting, severance tax, aerospace job costing, distribution inventory, the Texas margin tax, 8.25% sales tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=fort-worth&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Fort Worth",
  copy: {
    localEyebrow: "Bookkeeping built for how Fort Worth actually runs",
    areasEyebrow: "Across the city &amp; Tarrant County",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Fort Worth verticals we know",
    servicesEyebrow: "What we do for Fort Worth businesses",
    faqEyebrow: "Fort Worth FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=fort-worth&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Worth businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state income tax</strong>, and Fort Worth levies no city income or gross-receipts tax &mdash; so what shapes the books is the city&rsquo;s economy and the Texas tax stack. Fort Worth sits atop the <strong>Barnett Shale</strong> (a major natural-gas play &mdash; operators, royalties, severance tax), anchors a large <strong>aerospace and defense</strong> base (Lockheed, Bell), a major <strong>logistics</strong> hub (the AllianceTexas inland port), and a historic <strong>ranching and agriculture</strong> tradition (the Stockyards). The distinctive accounting is natural-gas <strong>JIB/royalty/severance</strong>, aerospace <strong>job costing</strong>, distribution inventory, and ag. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due) and <strong>8.25% sales tax</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Fort Worth businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fort Worth and Tarrant County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in natural-gas, aerospace, and logistics accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Do you handle Barnett Shale natural-gas accounting?", a: "Yes &mdash; it&rsquo;s a defining Fort Worth need. Operators, mineral and <strong>royalty</strong> owners, and gas-services companies need <strong>joint-interest billing (JIB)</strong>, royalty and working-interest tracking, and awareness of the <strong>severance/production tax</strong> on natural gas. We keep the books to that standard in QuickBooks; depletion and the tax positions stay with your specialized energy CPA, whom we coordinate with." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Fort Worth has no city income or gross-receipts tax. Businesses face the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and, for energy, the <strong>severance tax</strong>. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Energy operators, aerospace contractors, and distributors often carry more complexity (JIB, job costing, inventory), which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Fort Worth</strong> &mdash; Downtown and the Stockyards, the aerospace and west-side manufacturing corridor, the AllianceTexas logistics area in the north, and the wider Tarrant County &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Fort Worth is energy, aerospace, logistics, and cattle &mdash; a genuinely industrial economy &mdash; and that, on top of the Texas tax stack, is what shapes its books. Texas has no state income tax, and Fort Worth levies no city income or gross-receipts tax.",
    "The city sits atop the <strong>Barnett Shale</strong>, a major natural-gas play, so operators, mineral and <strong>royalty</strong> owners, and gas-services companies need <strong>joint-interest billing (JIB)</strong>, royalty and working-interest tracking, and awareness of the <strong>severance/production tax</strong>. Fort Worth also anchors a large <strong>aerospace and defense</strong> manufacturing base (Lockheed&rsquo;s F-35 line, Bell helicopters), where <strong>job costing</strong> and contract accounting rule, and a major <strong>logistics</strong> hub at the AllianceTexas inland port. And the historic <strong>ranching and agriculture</strong> economy &mdash; the Stockyards, cattle, and land &mdash; brings its own accounting.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked &mdash; <strong>8.25% sales and use tax</strong>, and the <strong>severance/production tax</strong> for energy, plus annual business personal property rendition. A generic bookkeeper has never seen a JIB statement, a job-cost report, or a cattle ledger; we put a named bookkeeper on your file who has &mdash; with the tax positions left to your CPA.",
    "The result: books that reflect how a Fort Worth business actually runs &mdash; gas royalties and JIB clean, aerospace jobs costed, distribution inventory accurate, or ranch operations tracked, with the margin tax and sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Stockyards", note: "Professional services, hospitality &amp; agribusiness" },
    { name: "Aerospace &amp; west-side manufacturing", note: "Aerospace, defense &amp; advanced manufacturing" },
    { name: "AllianceTexas &amp; north Fort Worth", note: "Logistics, distribution &amp; freight" },
    { name: "Barnett Shale &amp; surrounding county", note: "Natural-gas operators, royalty owners &amp; services" },
    { name: "Tarrant County ranch &amp; farm country", note: "Ranching, cattle &amp; agribusiness" },
    { name: "All of Tarrant County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Fort Worth has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; <strong>no tax due below a revenue threshold</strong>. We track the position; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Fort Worth combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "Severance", desc: "Natural-gas <strong>severance/production tax</strong> &mdash; Texas taxes Barnett Shale gas production through the Comptroller, alongside business personal property rendition for property tax. We keep production, JIB, royalty, and fixed-asset records clean so these are handled; the rates and filings stay with your CPA." },
  ],
  taxNote: "Fort Worth and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, severance-tax rates, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise, sales, or severance tax returns, set depletion method, or provide legal or tax advice. Oil-and-gas and aerospace-contract tax matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Natural gas &amp; energy", href: "/accounting/industries/professional-services/", note: "Barnett Shale operators and royalty owners &mdash; joint-interest billing, royalty and working-interest tracking, and severance-tax awareness" },
    { label: "Aerospace &amp; defense manufacturing", href: "/accounting/industries/professional-services/", note: "job and program costing, contract accounting, inventory and COGS, and DCAA-aware records where applicable" },
    { label: "Logistics &amp; distribution", href: "/accounting/industries/ecommerce/", note: "AllianceTexas operators &mdash; inventory and COGS, freight costing, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Ranching &amp; agriculture", href: "/accounting/industries/professional-services/", note: "cattle and herd accounting, land and equipment depreciation, and commodity tracking" },
    { label: "Construction &amp; trades", href: "/accounting/industries/professional-services/", note: "job costing, WIP, retainage, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with royalties, JIB, or job costs tracked and 8.25% sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Energy / multi-entity cleanup", body: "Gas, royalty, and multi-entity books drift fast. We get the file CPA-ready &mdash; allocations and royalties rebuilt &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with JIB, royalty, job-costing, and inventory structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; margin-tax-ready books", body: "Books structured so your CPA can file the Texas sales tax and franchise (margin) tax accurately, with severance and business personal property handled.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Across wells, programs, and herds, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your royalty owners are paid right, your aerospace jobs are costed, your distribution margins are real, and your margin-tax position is tracked. That judgment is what a named Fort Worth bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, severance/depletion, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Fort Worth business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fort Worth and Tarrant County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in natural-gas, aerospace, and logistics accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Do you handle Barnett Shale natural-gas accounting?", a: "Yes &mdash; it&rsquo;s a defining Fort Worth engagement. Operators, mineral and royalty owners, and gas-services companies need joint-interest billing (JIB) to allocate costs among partners, royalty and working-interest tracking, and awareness of the natural-gas severance/production tax. We keep all of that clean in QuickBooks; depletion method and the severance and franchise-tax positions stay with your specialized energy CPA, whom we coordinate with." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Fort Worth has no city income or gross-receipts tax. Businesses face the Texas Franchise Tax &mdash; the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Fort Worth, the severance tax for energy, and annual business personal property rendition. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you work with aerospace and defense manufacturers?", a: "Yes &mdash; it&rsquo;s a major Fort Worth base. Aerospace and defense manufacturers and their suppliers need job and program costing, contract accounting, and inventory and COGS done right, with DCAA-aware records where they hold government contracts. We keep the books to that standard in QuickBooks and coordinate with your CPA and any government-contract specialist; we handle the operational accounting, not rate submissions or filings." },
    { q: "Do you handle ranching and agriculture?", a: "Yes. Fort Worth&rsquo;s ranching tradition is real business &mdash; cattle and herd accounting, land and equipment depreciation, and commodity tracking. We keep the books to that standard; the tax positions, including any agricultural valuations, stay with your CPA, whom we coordinate with." },
    { q: "How much does a Fort Worth bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Energy operators, aerospace contractors, and distributors carry more complexity (JIB, job costing, inventory), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Fort Worth QuickBooks file?", a: "Yes &mdash; especially for energy operators, manufacturers, and distributors whose JIB, royalty, job-cost, or inventory books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding royalty and working-interest allocations or job costing &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Fort Worth?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Fort Worth situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/fort-worth/",
    name: "Fort Worth Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Fort Worth businesses — fluent in Barnett Shale natural-gas accounting (JIB, royalties, severance), aerospace and logistics, the Texas franchise (margin) tax, and 8.25% sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Fort Worth Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Fort Worth tax-aware bookkeeping — Barnett Shale gas JIB, royalty and working-interest tracking, severance awareness, aerospace job costing, distribution inventory, ranch accounting, the Texas franchise (margin) tax, and 8.25% sales tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns or set depletion/severance positions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Fort Worth", sameAs: "https://en.wikipedia.org/wiki/Fort_Worth,_Texas" },
      { type: "AdministrativeArea", name: "Tarrant County", sameAs: "https://en.wikipedia.org/wiki/Tarrant_County,_Texas" },
    ],
    audienceType: "Fort Worth and Tarrant County small and midsize businesses — natural gas and energy, aerospace and defense manufacturing, logistics and distribution, ranching and agriculture, construction and trades, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

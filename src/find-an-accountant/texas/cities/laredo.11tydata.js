/* /find-an-accountant/texas/cities/laredo/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized AND deliberately DIFFERENTIATED from El Paso. Laredo (Webb County) is
 * the #1 U.S. land port by trade value: the World Trade Bridge is the busiest commercial
 * truck crossing in North America, and the city is the pivot of the I-35 NAFTA/USMCA trade
 * corridor. Unlike El Paso (maquiladora MANUFACTURING + the Fort Bliss DEFENSE economy +
 * a large binational metroplex), Laredo is a PURE TRADE / LOGISTICS CORRIDOR city: little
 * manufacturing, no major military post. The dominant verticals are CUSTOMS BROKERS,
 * FREIGHT/TRUCKING CARRIERS, and WAREHOUSING/3PL/DISTRIBUTION moving goods across the border.
 * So the distinctive accounting is: customs-brokerage bookkeeping (client disbursement /
 * duty pass-through accounts kept as RECORDS only — never holding client funds), trucking
 * cost-per-load and IFTA fuel-tax records, warehousing/3PL inventory-flow and storage
 * billing, multi-currency (USD/MXN) for cross-border operators, and intercompany records.
 * A find-replace from El Paso (maquiladora / Fort Bliss / borderplex) reads false here.
 *
 * Texas tax stack (shared, identical to el-paso): NO state income tax; the Texas Franchise
 * "margin" tax (Comptroller; no tax below a revenue threshold); 8.25% combined sales & use
 * tax; annual business personal property (BPP) rendition; no city income/gross-receipts tax.
 *
 * HONESTY: real facts only. We are NOT a customs broker — customs filing and duty
 * classification stay with the licensed broker; for customs-brokerage clients we keep RECORDS
 * and never hold or disburse client or duty funds. Margin-tax thresholds and filings deferred
 * to the Texas Comptroller and the CPA/EA; TechBrot keeps the books and coordinates, does not
 * file TX returns or represent. No fabricated data; no entity named as our client. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/laredo/",
  slug: "laredo",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Laredo Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Laredo businesses — fluent in the trade-corridor economy of the #1 U.S. land port: customs brokerage, trucking & freight, and warehousing/3PL distribution along the I-35 corridor, plus the Texas franchise (margin) tax and 8.25% sales tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Laredo" },
  ],
  hero: {
    eyebrow: "Laredo &middot; Webb County &middot; Texas",
    heading: "Laredo bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Laredo businesses &mdash; built around the trade corridor of the #1 U.S. land port (customs brokerage, trucking &amp; freight, warehousing and 3PL distribution along I-35), with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Laredo &amp; the I-35 trade corridor",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Laredo businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in customs-brokerage, trucking, and warehousing accounting and the Texas franchise (margin) tax and sales-tax structure. The full Laredo summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Laredo &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Laredo businesses start here",
    heading: "Book a Laredo discovery call.",
    lede: "30 minutes. We review where your books stand and your Laredo context &mdash; customs-brokerage disbursement records, cost-per-load and IFTA for carriers, warehouse and 3PL inventory flow, USD/MXN for cross-border operators, the Texas margin tax, and 8.25% sales tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=laredo&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Laredo",
  copy: {
    localEyebrow: "Bookkeeping built for how Laredo actually runs",
    areasEyebrow: "Across the city &amp; the trade corridor",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Laredo verticals we know",
    servicesEyebrow: "What we do for Laredo businesses",
    faqEyebrow: "Laredo FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=laredo&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Laredo businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state personal or corporate income tax</strong>, and Laredo levies no city income or gross-receipts tax &mdash; so what shapes the books here is the <strong>trade corridor</strong> and the Texas tax stack. Laredo is the <strong>#1 U.S. land port by trade value</strong>: the <strong>World Trade Bridge</strong> is the busiest commercial truck crossing in North America, and the city is the pivot of the <strong>I-35 NAFTA/USMCA corridor</strong> &mdash; an economy built on moving freight, not making it. So the distinctive accounting is <strong>customs brokerage</strong> (client disbursement and duty pass-through accounts kept as <em>records</em>, never as held funds), <strong>trucking and freight</strong> (cost-per-load and <strong>IFTA</strong> fuel-tax records), <strong>warehousing and 3PL distribution</strong> (inventory flow and storage billing), and <strong>multi-currency (USD/MXN)</strong> books for cross-border operators. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due), <strong>8.25% sales tax</strong>, and the annual <strong>business personal property</strong> rendition &mdash; the latter meaningful for carriers and warehouses with trucks, racking, and forklifts. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes; not a customs broker.",

  aiSummary: [
    { q: "Who provides bookkeeping for Laredo businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Laredo and Webb County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the trade-corridor economy (customs brokerage, trucking and freight, warehousing and 3PL) and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Laredo has no city income or gross-receipts tax. Instead, businesses face the <strong>Texas Franchise Tax (the &ldquo;margin&rdquo; tax)</strong> through the Comptroller &mdash; with no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and annual <strong>business personal property</strong> rendition for property tax. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle customs-brokerage and trucking accounting?", a: "Yes &mdash; they are the defining Laredo needs. <strong>Customs brokers</strong> need clean records of client disbursement and duty pass-through accounts &mdash; kept as <em>records</em> in QuickBooks, while the broker holds and disburses any client or duty funds. <strong>Carriers</strong> need <strong>cost-per-load</strong> profitability and <strong>IFTA</strong> fuel-tax records; <strong>warehouses and 3PLs</strong> need inventory-flow and storage billing. We keep all of it to a CPA-ready standard. We are not a customs broker &mdash; customs filing and duty classification stay with your licensed broker, and tax positions with your CPA, whom we coordinate with." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. High-volume carriers, brokers, and 3PLs carry transaction and disbursement-record complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Laredo</strong> &mdash; the World Trade Bridge and the freight-forwarding and customs-broker district, the warehouse and distribution parks along the I-35 corridor and Mines Road, Downtown and the historic crossings, North Laredo, and the wider Webb County trade area &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Laredo runs on the trade corridor, and that &mdash; not a city tax &mdash; is what makes its books their own discipline. Texas has no state income tax, and Laredo levies no city income or gross-receipts tax, so the work is about the economy and the Texas stack.",
    "Laredo is the <strong>#1 U.S. land port by trade value</strong>: the <strong>World Trade Bridge</strong> is the busiest commercial truck crossing in North America, and the city is the pivot of the <strong>I-35 NAFTA/USMCA corridor</strong>. Unlike border cities built on factories, Laredo&rsquo;s economy is about <em>moving</em> goods, not making them &mdash; so the distinctive accounting is <strong>customs brokerage</strong>, <strong>trucking and freight</strong>, and <strong>warehousing and 3PL distribution</strong>. Customs brokers carry client disbursement and duty pass-through accounts that have to be kept as clean <em>records</em>; carriers need <strong>cost-per-load</strong> profitability and <strong>IFTA</strong> fuel-tax records across state lines; warehouses and 3PLs need inventory flow and storage billing tied out; and cross-border operators need <strong>multi-currency (USD/MXN)</strong> and intercompany books.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked &mdash; <strong>8.25% sales and use tax</strong>, and the annual <strong>business personal property</strong> rendition to the county appraisal district. That last one is real money for a Laredo carrier or warehouse: a fleet of trucks and trailers, forklifts, racking, and dock equipment all get rendered for property tax. A generic bookkeeper has never reconciled a customs broker&rsquo;s disbursement records or built cost-per-load by lane; we put a named bookkeeper on your file who understands trade-corridor work, with the tax positions left to your CPA.",
    "The result: books that reflect how a Laredo business actually runs &mdash; broker disbursement and duty pass-through records clean (and clearly the client&rsquo;s funds, not ours), cost-per-load and IFTA straight, warehouse inventory flow and storage billing tied out, the margin tax and sales tax handled, and business personal property ready to render &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "World Trade Bridge &amp; the freight district", note: "Customs brokers, freight forwarders &amp; trade-corridor professional services" },
    { name: "Mines Road &amp; the I-35 distribution parks", note: "Warehousing, 3PL &amp; distribution centers" },
    { name: "Trucking &amp; carrier corridor", note: "Freight carriers, owner-operators &amp; logistics &mdash; cost-per-load and IFTA" },
    { name: "Downtown &amp; the historic crossings", note: "Customs brokerage, professional services &amp; retail" },
    { name: "North Laredo &amp; Webb County", note: "Professional services, healthcare, retail &amp; small business" },
    { name: "All of the Laredo metro", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Laredo has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller, calculated on margin &mdash; with <strong>no tax due below a revenue threshold</strong>. We track the position in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Laredo combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return &mdash; with use tax on cross-border and out-of-state purchases watched." },
    { figure: "Property tax", desc: "Texas funds local government with property tax rather than income tax, so the annual <strong>business personal property</strong> rendition of equipment to the county appraisal district is real money &mdash; and for a Laredo carrier or warehouse that means trucks, trailers, forklifts, racking, and dock equipment. We keep fixed-asset and inventory records clean so it&rsquo;s ready; valuation and any protest stay with your CPA or a property-tax consultant." },
  ],
  taxNote: "Laredo and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, local sales-tax components, property-tax rates, IFTA rates, and any duty/tariff or customs treatment change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files, and your licensed customs broker, who handles customs and holds/disburses client and duty funds; we do not file Texas franchise or sales tax returns, act as a customs broker, hold or disburse client or duty funds, set duty classifications, or provide legal or tax advice.",

  industries: [
    { label: "Customs brokerage &amp; freight forwarding", href: "/find-an-accountant/texas/industries/professional-services/", note: "client disbursement and duty pass-through accounts kept as clean records &mdash; never held as our funds &mdash; plus multi-currency where needed" },
    { label: "Trucking &amp; freight carriers", href: "/find-an-accountant/texas/industries/trucking/", note: "cost-per-load and per-mile profitability, IFTA fuel-tax records, settlements, and fleet fixed assets" },
    { label: "Warehousing, 3PL &amp; distribution", href: "/find-an-accountant/texas/industries/trucking/", note: "inventory flow through the inland port, storage and handling billing, and dock-to-stock reconciliation" },
    { label: "Cross-border trade operators", href: "/find-an-accountant/texas/industries/professional-services/", note: "multi-currency (USD/MXN) and intercompany records for companies operating on both sides of the corridor" },
    { label: "Professional services &amp; trade support", href: "/find-an-accountant/texas/industries/professional-services/", note: "logistics consultants, agents &amp; corridor service firms &mdash; project records and the PLLC/LLC margin tax" },
    { label: "Real estate &amp; construction", href: "/find-an-accountant/texas/industries/real-estate/", note: "warehouse and distribution-park investors, brokerages &amp; contractors &mdash; multi-entity ledgers and job costing" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with broker disbursement records clean, the margin-tax position tracked, and 8.25% sales tax reconciled.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Logistics / multi-entity cleanup", body: "High-volume carrier, broker, and 3PL books drift fast &mdash; disbursement records, settlements, and inventory flow get tangled. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/texas/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with cost-per-load, inventory flow, multi-currency, and multi-entity structure where needed.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales- &amp; margin-tax-ready books", body: "Books structured so your CPA can file the Texas sales tax and franchise (margin) tax accurately, with business personal property &mdash; trucks, racking, forklifts &mdash; ready to render.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  advisoryBody: "Across brokers, carriers, and warehouses moving freight through the busiest land port in the country, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing which lanes and loads actually make money, that your IFTA and disbursement records are clean, that your margin-tax position is tracked, and that your warehouse inventory flow ties out. That judgment is what a named Laredo bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, customs-brokerage, fund-holding, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Laredo business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Laredo and the wider Webb County trade area, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in customs-brokerage, trucking, and warehousing accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Laredo has no city income or gross-receipts tax. Instead, businesses face the Texas Franchise Tax &mdash; commonly called the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Laredo and annual business personal property rendition for property tax. We track all of it in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you do bookkeeping for customs brokers &mdash; and do you hold our client or duty funds?", a: "We do the bookkeeping; we do not hold or disburse any funds. Customs brokers carry client disbursement and duty pass-through accounts, and we keep those as clean, clearly-labeled <em>records</em> in QuickBooks so they reconcile and are never confused with your own revenue. The actual holding and disbursing of client or duty funds stays with you, the licensed broker, and the customs filing and duty classification stay with you as well. TechBrot is not a customs broker &mdash; we keep the books and coordinate with your CPA, who files." },
    { q: "Can you handle trucking cost-per-load and IFTA?", a: "Yes. For Laredo carriers and owner-operators we build cost-per-load and per-mile profitability so you can see which lanes and loads actually make money, keep driver and owner-operator settlements straight, and maintain the mileage and fuel records that support IFTA fuel-tax reporting across state lines. We keep the records; the IFTA return and any tax positions are filed and confirmed by your CPA or filing agent." },
    { q: "Do you do warehousing and 3PL bookkeeping?", a: "Yes. Laredo&rsquo;s distribution parks run on inventory flow and storage billing, so we tie out dock-to-stock movement, keep storage, handling, and pick-pack billing reconciled to your 3PL system, and keep fixed assets &mdash; racking, forklifts, dock equipment &mdash; clean for the business personal property rendition. The books stay CPA-ready and we coordinate with your CPA, who files." },
    { q: "How much does a Laredo bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. High-volume carriers, brokers, and 3PLs carry more complexity (settlement detail, disbursement records, inventory flow), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Laredo QuickBooks file?", a: "Yes &mdash; especially for carriers, brokers, and 3PLs whose high-volume books drifted out of balance, with disbursement records, settlements, or inventory flow tangled together. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you file my Texas taxes?", a: "No. TechBrot keeps your books, tracks the Texas margin-tax position, reconciles 8.25% sales tax, and keeps business personal property ready to render &mdash; but we do not file Texas franchise or sales tax returns and we do not represent you before the Comptroller or IRS. Your CPA or EA files and confirms what&rsquo;s due; we hand them CPA-ready books and coordinate." },
    { q: "How do we get started in Laredo?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Laredo situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/laredo/",
    name: "Laredo Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Laredo businesses — fluent in the trade-corridor economy of the #1 U.S. land port: customs brokerage (disbursement records, no held funds), trucking and freight (cost-per-load, IFTA), warehousing and 3PL distribution along I-35, multi-currency (USD/MXN), the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition. Fixed-fee, named bookkeeper.",
    serviceName: "Laredo Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Laredo tax-aware bookkeeping — customs-brokerage disbursement and duty pass-through records (kept as records, never held funds), trucking cost-per-load and IFTA records, warehousing and 3PL inventory-flow and storage billing, multi-currency (USD/MXN) and intercompany records, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns, act as a customs broker, hold or disburse client or duty funds, or set duty/tax positions — coordinates with the client's CPA or EA and licensed customs broker.",
    areaServed: [
      { type: "City", name: "Laredo", sameAs: "https://en.wikipedia.org/wiki/Laredo,_Texas" },
      { type: "AdministrativeArea", name: "Webb County", sameAs: "https://en.wikipedia.org/wiki/Webb_County,_Texas" },
    ],
    audienceType: "Laredo and Webb County small and midsize businesses — customs brokers and freight forwarders, trucking and freight carriers, warehousing and 3PL/distribution operators, cross-border trade operators, professional services, healthcare, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

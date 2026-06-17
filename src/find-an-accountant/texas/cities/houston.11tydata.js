/* /find-an-accountant/texas/cities/houston/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Texas is structurally the opposite of California — NO state
 * personal or corporate income tax, and Texas cities do NOT levy their own income or
 * gross-receipts business taxes. So the un-clonable substance is Houston's ECONOMY on
 * top of the real Texas tax stack: Houston is the energy capital of the U.S. (oil & gas
 * majors, services, midstream, petrochemical), home to the Port of Houston (a top U.S.
 * port by tonnage) and the Texas Medical Center (the largest medical complex in the
 * world). The distinctive accounting is OIL & GAS (joint-interest billing, royalties,
 * severance/production tax, AFEs), export/port logistics, and medical. Texas tax stack:
 * NO income tax, the Texas Franchise "margin" tax (Comptroller), 8.25% sales tax, and
 * the oil & gas SEVERANCE/production tax. A find-replace "Houston"->"Austin" reads
 * false (Austin is tech/semiconductors/music, not oil & gas + Port + TMC).
 *
 * HONESTY: real facts only; margin-tax thresholds, severance-tax, depletion, and
 * filings deferred to the Texas Comptroller and the CPA/EA; TechBrot keeps the books
 * and coordinates, does not file TX returns. No fabricated stats/counts/clients. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/houston/",
  slug: "houston",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Houston Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Houston businesses — fluent in oil & gas accounting (JIB, royalties, severance tax), the Texas franchise (margin) tax, 8.25% sales tax, and the energy, port & medical economy. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Houston" },
  ],
  hero: {
    eyebrow: "Houston &middot; Harris County &middot; Texas",
    heading: "Houston bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Houston businesses &mdash; built around the energy economy (oil &amp; gas, services, midstream, petrochemical), the Port of Houston, and the Texas Medical Center, with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Houston &amp; the Gulf Coast",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Houston businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in oil-and-gas accounting and the Texas franchise (margin) tax and sales-tax structure. The full Houston summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Houston &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Houston businesses start here",
    heading: "Book a Houston discovery call.",
    lede: "30 minutes. We review where your books stand and your Houston context &mdash; oil-and-gas JIB and royalty accounting, severance/production tax, the Texas margin tax, 8.25% sales tax, export and port detail &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=houston&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Houston",
  copy: {
    localEyebrow: "Bookkeeping built for how Houston actually runs",
    areasEyebrow: "Across the city &amp; the Gulf Coast",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Houston verticals we know",
    servicesEyebrow: "What we do for Houston businesses",
    faqEyebrow: "Houston FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=houston&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Houston businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state personal or corporate income tax</strong>, and Houston levies no city income or gross-receipts tax &mdash; so what shapes the books here is the <strong>energy economy</strong> and the Texas tax stack. Houston is the U.S. energy capital (oil &amp; gas majors, services, midstream, petrochemical), home to the <strong>Port of Houston</strong> and the <strong>Texas Medical Center</strong>, so the distinctive accounting is <strong>oil &amp; gas</strong> &mdash; joint-interest billing (JIB), royalties, <strong>severance/production tax</strong>, AFEs &mdash; plus export/port logistics and medical. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due), <strong>8.25% sales tax</strong>, and <strong>business personal property</strong> rendition. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Houston businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Houston and Gulf Coast businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in oil-and-gas accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Houston has no city income or gross-receipts tax. Instead, businesses face the <strong>Texas Franchise Tax (the &ldquo;margin&rdquo; tax)</strong> through the Comptroller &mdash; with no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and annual <strong>business personal property</strong> rendition for property tax. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle oil and gas accounting?", a: "Yes &mdash; it&rsquo;s the defining Houston need. Operators, working-interest owners, and oilfield-services companies need <strong>joint-interest billing (JIB)</strong>, <strong>royalty</strong> and working-interest tracking, AFE tracking, and awareness of the <strong>severance/production tax</strong>. We keep the books to that standard in QuickBooks; depletion and the tax positions stay with your specialized CPA, whom we coordinate with." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Energy operators and multi-entity Houston businesses often carry JIB and inventory complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Houston</strong> &mdash; Downtown and the Energy Corridor, the Texas Medical Center, the Galleria/Uptown, the Ship Channel and port-industrial district, and the wider Gulf Coast metro &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Houston runs on energy, and that &mdash; not a city tax &mdash; is what makes its books their own discipline. Texas has no state income tax, and Houston levies no city income or gross-receipts tax, so the work is about the economy and the Texas stack.",
    "On the energy side, operators, <strong>working-interest</strong> owners, and oilfield-services and midstream companies need <strong>joint-interest billing (JIB)</strong> to allocate costs among partners, <strong>royalty</strong> accounting, <strong>AFE</strong> (authorization-for-expenditure) tracking, and awareness of the <strong>oil &amp; gas severance/production tax</strong> the Comptroller administers. The <strong>Port of Houston</strong> drives export/import and logistics accounting, and the <strong>Texas Medical Center</strong> anchors a large medical and research economy.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked &mdash; <strong>8.25% sales and use tax</strong>, and annual <strong>business personal property</strong> rendition to the county appraisal district, since Texas funds local government with property tax rather than income tax. A generic bookkeeper has never seen a JIB statement or tracked a severance position; we put a named bookkeeper on your file who has, with the tax positions left to your CPA.",
    "The result: books that reflect how a Houston business actually runs &mdash; JIB and working-interest allocations clean, royalties tracked, severance awareness built in, the margin tax and sales tax handled, and business personal property ready to render &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Energy Corridor", note: "Oil &amp; gas, services, midstream &amp; professional services" },
    { name: "Texas Medical Center", note: "Healthcare, research &amp; bioscience" },
    { name: "Galleria &amp; Uptown", note: "Finance, professional services &amp; retail" },
    { name: "Ship Channel &amp; port-industrial", note: "Petrochemical, logistics, export &amp; manufacturing" },
    { name: "The Woodlands, Sugar Land &amp; suburbs", note: "Corporate, energy &amp; small business" },
    { name: "All of the Gulf Coast metro", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Houston has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller, calculated on margin &mdash; with <strong>no tax due below a revenue threshold</strong>. We track the position in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Houston combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "Severance", desc: "Oil &amp; gas <strong>severance/production tax</strong> &mdash; Texas taxes oil and natural-gas production through the Comptroller, alongside <strong>business personal property</strong> rendition for property tax. We keep production, JIB, and fixed-asset records clean so these are handled; the rates and filings stay with your CPA." },
  ],
  taxNote: "Houston and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, severance-tax rates, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise, sales, or severance tax returns, set depletion method, or provide legal or tax advice. Oil-and-gas tax matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Oil &amp; gas operators", href: "/accounting/industries/professional-services/", note: "joint-interest billing, working-interest and royalty accounting, AFE tracking, and severance-tax awareness" },
    { label: "Oilfield &amp; energy services", href: "/accounting/industries/professional-services/", note: "job and project costing, equipment depreciation, mobile-crew payroll, and contract accounting" },
    { label: "Petrochemical &amp; manufacturing", href: "/accounting/industries/restaurant/", note: "inventory and COGS, production costing, and Texas sales/use tax on equipment and materials" },
    { label: "Logistics, export &amp; the Port", href: "/accounting/industries/ecommerce/", note: "Port of Houston operators &mdash; freight, customs, and import/export cost accounting" },
    { label: "Healthcare &amp; bioscience", href: "/accounting/industries/professional-services/", note: "Texas Medical Center practices &mdash; practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the margin-tax position tracked and 8.25% sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Oil &amp; gas / multi-entity cleanup", body: "JIB, royalty, and multi-entity energy books drift fast. We get the file CPA-ready &mdash; allocations rebuilt &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with JIB, working-interest, job-costing, and multi-entity structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; margin-tax-ready books", body: "Books structured so your CPA can file the Texas sales tax and franchise (margin) tax accurately, with business personal property ready to render.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Across wells, leases, and partners, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your working-interest allocations are right, your royalty owners are paid correctly, your margin-tax position is tracked, and your jobs are costed. That judgment is what a named Houston bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, severance/depletion, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Houston business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Houston and the wider Gulf Coast, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in oil-and-gas accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Houston has no city income or gross-receipts tax. Instead, businesses face the Texas Franchise Tax &mdash; commonly called the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Houston and annual business personal property rendition for property tax. We track all of it in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the Texas franchise (margin) tax?", a: "It&rsquo;s the state&rsquo;s primary business tax, calculated on a business&rsquo;s margin (revenue less certain deductions) rather than on income, and administered by the Texas Comptroller. Businesses below a revenue threshold owe no tax, though the position should still be tracked. We keep your books so the margin-tax computation is straightforward; the threshold, the calculation method, and the filing are confirmed and handled by your CPA." },
    { q: "Do you handle oil and gas accounting?", a: "Yes &mdash; it&rsquo;s the defining Houston engagement. Operators, working-interest owners, and oilfield-services companies need joint-interest billing (JIB) to allocate costs among partners, royalty and working-interest tracking, AFE tracking, and awareness of the oil-and-gas severance/production tax. We keep all of that clean in QuickBooks; depletion method and the severance and franchise-tax positions stay with your specialized energy CPA, whom we coordinate with." },
    { q: "What is business personal property rendition?", a: "Because Texas has no income tax, it funds local government largely through property tax &mdash; and businesses must annually render their tangible business personal property (equipment, furniture, inventory) to the county appraisal district. We keep your fixed-asset and inventory records clean and current so the rendition is straightforward; the valuation and any protest are handled with your CPA or a property-tax consultant." },
    { q: "How much does a Houston bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Energy operators and multi-entity businesses carry more complexity (JIB, royalties, multiple entities), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Houston QuickBooks file?", a: "Yes &mdash; especially for energy operators and multi-entity businesses whose JIB, royalty, or intercompany books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding working-interest allocations &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Houston?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Houston situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/houston/",
    name: "Houston Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Houston businesses — fluent in oil & gas accounting (JIB, royalties, severance tax), the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition. Energy, port, and medical aware. Fixed-fee, named bookkeeper.",
    serviceName: "Houston Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Houston tax-aware bookkeeping — oil-and-gas JIB, royalty and working-interest tracking, severance awareness, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns or set depletion/severance positions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Houston", sameAs: "https://en.wikipedia.org/wiki/Houston" },
      { type: "AdministrativeArea", name: "Harris County", sameAs: "https://en.wikipedia.org/wiki/Harris_County,_Texas" },
    ],
    audienceType: "Houston and Gulf Coast small and midsize businesses — oil and gas operators, oilfield and energy services, petrochemical and manufacturing, logistics and export around the Port of Houston, healthcare and bioscience, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

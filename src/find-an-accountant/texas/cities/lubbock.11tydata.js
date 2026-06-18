/* /find-an-accountant/texas/cities/lubbock/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized — NOT El Paso/Houston find-replaced. Lubbock is the hub of the SOUTH
 * PLAINS: the center of the largest contiguous COTTON-growing region in the world, so the
 * economy is AGRICULTURE & AGRIBUSINESS (cotton gins, grain, cattle and feedlots, ag-equipment
 * dealers, crop inputs, co-ops, government farm programs), anchored by TEXAS TECH UNIVERSITY
 * (a major research university with a large student economy) and the Texas Tech medical/hospital
 * systems that make Lubbock a regional HEALTHCARE hub, plus WIND ENERGY across the plains. The
 * distinctive accounting is FARM & AGRIBUSINESS bookkeeping (crop/livestock cycles, ag inventory,
 * equipment depreciation, co-ops, subsidy/program income, weather-driven seasonality),
 * university-adjacent and student-economy small business, healthcare practice/provider books, and
 * ag-equipment dealer inventory/floorplan. This is the opposite of El Paso (border) or Corpus
 * (energy/port). Texas tax stack: NO income tax, the Texas Franchise "margin" tax (Comptroller),
 * 8.25% sales tax, and BPP rendition. Links into the now-built TX industry + service children.
 *
 * HONESTY: real facts only. We do NOT assert specific Texas agricultural sales/use-tax exemption
 * rules or any farm-program figures — those are deferred to the Texas Comptroller and the CPA.
 * No fabricated stats; no entity named as our client. TechBrot keeps the books and coordinates;
 * the CPA and Comptroller compute and file. We do not file TX returns or represent. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/lubbock/",
  slug: "lubbock",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Lubbock Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Lubbock businesses — fluent in South Plains agriculture and agribusiness (cotton, grain, cattle, ag-equipment dealers), the Texas Tech University and student economy, the regional healthcare hub, the Texas franchise (margin) tax, and 8.25% sales tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Lubbock" },
  ],
  hero: {
    eyebrow: "Lubbock &middot; Lubbock County &middot; Texas",
    heading: "Lubbock bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Lubbock businesses &mdash; built around the South Plains economy (cotton and agribusiness, the Texas Tech University and student economy, the regional healthcare hub, and wind energy), with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Lubbock &amp; the South Plains",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Lubbock businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in farm and agribusiness accounting and the Texas franchise (margin) tax and sales-tax structure. The full Lubbock summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Lubbock &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts.",
  },
  ctaBand: {
    eyebrow: "Lubbock businesses start here",
    heading: "Book a Lubbock discovery call.",
    lede: "30 minutes. We review where your books stand and your Lubbock context &mdash; cotton and agribusiness cycles, ag inventory and equipment, the Texas Tech and student economy, the healthcare hub, the Texas margin tax, and 8.25% sales tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=lubbock&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Lubbock",
  copy: {
    localEyebrow: "Bookkeeping built for how Lubbock actually runs",
    areasEyebrow: "Across the city &amp; the South Plains",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Lubbock verticals we know",
    servicesEyebrow: "What we do for Lubbock businesses",
    faqEyebrow: "Lubbock FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=lubbock&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Lubbock businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/texas/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state personal or corporate income tax</strong>, and Lubbock levies no city income or gross-receipts tax &mdash; so what shapes the books here is the <strong>South Plains economy</strong> and the Texas tax stack. Lubbock is the hub of the South Plains, at the center of the <strong>largest contiguous cotton-growing region in the world</strong> &mdash; so the distinctive accounting is <strong>farm and agribusiness</strong>: crop and livestock cycles, ag inventory, equipment depreciation, cotton gins and grain, cattle and feedlots, co-ops, ag-equipment dealers, and weather-driven seasonality with government farm-program income to record. <strong>Texas Tech University</strong> anchors a large education, research, and student economy, the Texas Tech medical and hospital systems make Lubbock a regional <strong>healthcare</strong> hub, and <strong>wind energy</strong> runs across the plains. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due), <strong>8.25% sales tax</strong>, and the annual <strong>business personal property</strong> rendition. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Lubbock businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Lubbock and South Plains businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in farm and agribusiness accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Lubbock has no city income or gross-receipts tax. Instead, businesses face the <strong>Texas Franchise Tax (the &ldquo;margin&rdquo; tax)</strong> through the Comptroller &mdash; with no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and annual <strong>business personal property</strong> rendition for property tax. We track all of it; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle farm and agribusiness bookkeeping?", a: "Yes &mdash; it&rsquo;s the defining Lubbock need. Cotton growers, gins, grain operations, cattle and feedlots, co-ops, and ag-equipment dealers need books that follow <strong>crop and livestock cycles</strong>, track <strong>ag inventory and equipment depreciation</strong>, and record farm-program and subsidy income against weather-driven seasonality. We keep the books to that standard in QuickBooks; the tax positions &mdash; including any agricultural sales/use-tax exemptions and farm-program treatment &mdash; stay with your CPA and the Texas Comptroller, whom we coordinate with. We don&rsquo;t determine exemption eligibility." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Seasonal ag operations and multi-entity Lubbock businesses often carry inventory and timing complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Lubbock</strong> &mdash; Downtown and the Depot District, the Texas Tech campus and medical district, the industrial and warehouse areas around the loop, the surrounding farm and ranch communities of the South Plains, and the wider Lubbock County region &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Lubbock runs on the land, and that &mdash; not a city tax &mdash; is what makes its books their own discipline. Texas has no state income tax, and Lubbock levies no city income or gross-receipts tax, so the work is about the economy and the Texas stack.",
    "Lubbock is the hub of the South Plains, at the center of the <strong>largest contiguous cotton-growing region in the world</strong> &mdash; so the distinctive accounting is <strong>farm and agribusiness</strong>: books that follow <strong>crop and livestock cycles</strong> rather than even monthly revenue, <strong>ag inventory</strong> and standing crops, <strong>equipment depreciation</strong> on tractors and harvesters, and the records of <strong>cotton gins, grain elevators, cattle and feedlots, co-ops, and ag-equipment dealers</strong> (with floorplan inventory) that surround the farm gate. Farm-program and subsidy income, weather-driven swings, and harvest-timed cash flow all have to land in the right period. <strong>Texas Tech University</strong> anchors a large education, research, and <strong>student economy</strong> of restaurants, rentals, and service businesses; the Texas Tech medical and hospital systems make Lubbock a regional <strong>healthcare</strong> hub; and <strong>wind energy</strong> runs across the plains.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked &mdash; <strong>8.25% sales and use tax</strong>, and the annual <strong>business personal property</strong> rendition of equipment and inventory to the county appraisal district. Agriculture adds nuance here: ag equipment and inventory and any agricultural exemptions are genuinely CPA territory, and we don&rsquo;t assert specific exemption rules &mdash; we keep the records clean and defer the positions to your CPA and the Comptroller. A generic bookkeeper has never matched a cotton crop&rsquo;s cost against its harvest period or carried floorplan inventory on an equipment dealer&rsquo;s books; we put a named bookkeeper on your file who understands ag and seasonal work, with the tax positions left to your CPA.",
    "The result: books that reflect how a Lubbock business actually runs &mdash; crop and livestock cycles in the right period, ag inventory and equipment tracked, program income recorded, student-economy and healthcare books straight, the margin tax and sales tax handled, and business personal property ready to render &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Depot District", note: "Professional services, hospitality &amp; small business" },
    { name: "Texas Tech &amp; the medical district", note: "University-adjacent business, clinics &amp; healthcare providers" },
    { name: "Industrial &amp; warehouse areas around the loop", note: "Ag-equipment dealers, distribution &amp; agribusiness" },
    { name: "South Plains farm &amp; ranch communities", note: "Cotton, grain, cattle &amp; feedlots &mdash; crop and livestock cycles" },
    { name: "Student-economy &amp; retail corridors", note: "Restaurants, rentals &amp; service businesses" },
    { name: "All of Lubbock County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Lubbock has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller, calculated on margin &mdash; with <strong>no tax due below a revenue threshold</strong>. We track the position in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Lubbock combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return. Any agricultural sales/use-tax exemptions are determined by the Comptroller and your CPA &mdash; we record the transactions, we don&rsquo;t set the exemption." },
    { figure: "Property tax", desc: "Texas funds local government with property tax rather than income tax, so the annual <strong>business personal property</strong> rendition of equipment, furniture, and inventory to the county appraisal district matters &mdash; and for ag operations that means tractors, harvesters, and dealer inventory. We keep fixed-asset and inventory records clean so it&rsquo;s ready; valuation, any agricultural exemptions, and any protest stay with your CPA or a property-tax consultant." },
  ],
  taxNote: "Lubbock and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts. The franchise-tax threshold and rates, local sales-tax components, property-tax rates, and any agricultural sales/use-tax exemption or farm-program treatment change &mdash; and we do not assert specific agricultural exemption rules or program figures here; confirm any specific figure with the Comptroller and your CPA before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise or sales tax returns, determine agricultural exemption eligibility, or provide legal or tax advice.",

  industries: [
    { label: "Agriculture &amp; agribusiness", href: "/find-an-accountant/texas/industries/manufacturing/", note: "cotton, grain, cattle &amp; feedlots, gins and co-ops &mdash; crop/livestock cycles, ag inventory, and equipment depreciation (any ag tax exemptions stay with your CPA)" },
    { label: "Ag-equipment dealers", href: "/find-an-accountant/texas/industries/manufacturing/", note: "tractors and implements &mdash; floorplan inventory, parts and service departments, and unit-level costing" },
    { label: "Healthcare", href: "/find-an-accountant/texas/industries/healthcare/", note: "practices, clinics &amp; providers in the Texas Tech medical hub &mdash; insurance-AR reconciliation, provider payroll, and the PLLC margin tax" },
    { label: "Professional services", href: "/find-an-accountant/texas/industries/professional-services/", note: "university-adjacent firms, agencies &amp; consultants &mdash; clean books and the margin tax handled" },
    { label: "Trucking &amp; distribution", href: "/find-an-accountant/texas/industries/trucking/", note: "hauling crops, grain, cattle &amp; freight across the plains &mdash; cost-per-load, IFTA, and equipment tracking" },
    { label: "Real estate &amp; construction", href: "/find-an-accountant/texas/industries/real-estate/", note: "student rentals, investors &amp; contractors &mdash; multi-entity ledgers, trust records, and job costing" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with crop and livestock cycles in the right period, the margin-tax position tracked, and 8.25% sales tax reconciled.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Ag &amp; seasonal cleanup", body: "Seasonal and multi-entity ag books drift fast &mdash; standing crops, inventory, equipment, and program income out of period. We get the file CPA-ready, then keep it clean.", href: "/find-an-accountant/texas/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, class/job tracking, fixed assets, and multi-entity structure where needed.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales- &amp; margin-tax-ready books", body: "Books structured so your CPA can file the Texas sales tax and franchise (margin) tax accurately, with business personal property ready to render and ag exemptions left to your CPA.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  advisoryBody: "Across crop cycles, ag inventory, equipment, and program income, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your cost is matched to the right harvest, your inventory and depreciation are right, your margin-tax position is tracked, and your seasonal cash flow is clear. That judgment is what a named Lubbock bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, ag-exemption-determination, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Lubbock business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Lubbock and the wider South Plains, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in farm and agribusiness accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Lubbock has no city income or gross-receipts tax. Instead, businesses face the Texas Franchise Tax &mdash; commonly called the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Lubbock and annual business personal property rendition for property tax. We track all of it in your books; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle farm and agribusiness bookkeeping?", a: "Yes &mdash; it&rsquo;s the defining Lubbock engagement. Cotton growers, gins, grain operations, cattle and feedlots, co-ops, and ag-equipment dealers need books that follow crop and livestock cycles, track ag inventory and equipment depreciation, and record farm-program and subsidy income against weather-driven seasonality. We keep all of that clean in QuickBooks. The tax positions &mdash; including any agricultural sales/use-tax exemptions and the treatment of farm-program income &mdash; stay with your CPA and the Texas Comptroller, whom we coordinate with; we keep the records, we don&rsquo;t determine exemption eligibility." },
    { q: "What is the Texas franchise (margin) tax?", a: "It&rsquo;s the state&rsquo;s primary business tax, calculated on a business&rsquo;s margin (revenue less certain deductions) rather than on income, and administered by the Texas Comptroller. Businesses below a revenue threshold owe no tax, though the position should still be tracked. We keep your books so the margin-tax computation is straightforward; the threshold, the calculation method, and the filing are confirmed and handled by your CPA." },
    { q: "How do agricultural sales-tax exemptions work for my farm?", a: "Texas does have agricultural and timber sales/use-tax provisions, but eligibility and the specific items they cover are determined by the Texas Comptroller and your CPA &mdash; not by us, and the rules change. We don&rsquo;t assert which of your purchases qualify; we record every transaction cleanly and flag the ag items so your CPA can apply the correct treatment and the Comptroller&rsquo;s current rules. Confirm any specific exemption with the Comptroller and your CPA before relying on it." },
    { q: "How much does a Lubbock bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Seasonal ag operations and multi-entity businesses carry more complexity (inventory, equipment, timing), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Lubbock QuickBooks file?", a: "Yes &mdash; especially for seasonal ag and multi-entity businesses whose inventory, equipment, or program income drifted out of period. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding inventory, fixed assets, and crop-cycle records &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you file my Texas taxes?", a: "No. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm, not a tax-filing or representation firm. We keep your books accurate and CPA-ready &mdash; the margin-tax position tracked, 8.25% sales tax reconciled, ag items flagged, and business personal property ready to render &mdash; and we coordinate with your CPA, who files your Texas franchise and sales tax returns and determines any agricultural exemptions. We do not file Texas returns or represent you before the Comptroller." },
    { q: "How do we get started in Lubbock?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Lubbock situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/lubbock/",
    name: "Lubbock Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Lubbock businesses — fluent in South Plains agriculture and agribusiness (cotton, grain, cattle and feedlots, gins, co-ops, ag-equipment dealers), the Texas Tech University and student economy, the regional healthcare hub, wind energy, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition. Fixed-fee, named bookkeeper.",
    serviceName: "Lubbock Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Lubbock tax-aware bookkeeping — farm and agribusiness records (crop/livestock cycles, ag inventory, equipment depreciation, gins, co-ops, ag-equipment dealer floorplan), university and student-economy small business, healthcare provider books, the Texas franchise (margin) tax, 8.25% sales tax, and business personal property rendition handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns, determine agricultural sales/use-tax exemptions, or set tax positions — coordinates with the client's CPA or EA and the Texas Comptroller.",
    areaServed: [
      { type: "City", name: "Lubbock", sameAs: "https://en.wikipedia.org/wiki/Lubbock,_Texas" },
      { type: "AdministrativeArea", name: "Lubbock County", sameAs: "https://en.wikipedia.org/wiki/Lubbock_County,_Texas" },
    ],
    audienceType: "Lubbock and South Plains small and midsize businesses — cotton and agribusiness operations, farms, gins, grain, cattle and feedlots, co-ops and ag-equipment dealers, Texas Tech-adjacent small business, healthcare providers, and wind energy",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

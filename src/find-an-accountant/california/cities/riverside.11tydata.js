/* /find-an-accountant/california/cities/riverside/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Riverside anchors the Inland Empire, one
 * of the largest logistics, warehousing, and distribution hubs in the United States —
 * so the defining accounting is FULFILLMENT/3PL and DISTRIBUTION: inventory and COGS
 * at scale, warehouse and freight cost accounting, fixed-asset (racking, forklifts,
 * MHE) tracking and depreciation, and heavy multi-state sales-tax NEXUS from goods
 * shipped nationwide. Layered on California's $800 FTB franchise tax, CDTFA sales tax
 * (~8.75% in the city), AB5, and a city business tax. A find-replace "Riverside"->
 * "Anaheim" reads false (no Inland-Empire distribution base, no warehousing-scale
 * inventory/nexus profile, different rate).
 *
 * HONESTY: real facts only; multi-state nexus determination and filings deferred to
 * the CPA/EA; city tax deferred to the City of Riverside. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/riverside/",
  slug: "riverside",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Riverside Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Riverside & Inland Empire businesses — fluent in logistics & warehousing accounting, multi-state sales-tax nexus, California's $800 franchise tax & CDTFA sales tax, inventory & COGS at scale. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Riverside" },
  ],
  hero: {
    eyebrow: "Riverside &middot; the Inland Empire &middot; California",
    heading: "Riverside bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Riverside and Inland Empire businesses &mdash; built around logistics and warehousing accounting, multi-state sales-tax nexus, California&rsquo;s $800 franchise tax and CDTFA sales tax, and inventory and COGS at distribution scale. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Riverside &amp; the Inland Empire",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Riverside businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in Inland Empire logistics and warehousing accounting and California&rsquo;s FTB and CDTFA structure. The full Riverside summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Riverside &amp; California tax figures verified against the City of Riverside, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Riverside businesses start here",
    heading: "Book a Riverside discovery call.",
    lede: "30 minutes. We review where your books stand and your Riverside context &mdash; warehouse and freight cost accounting, inventory and COGS at scale, multi-state sales-tax nexus, CDTFA sales tax, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=riverside&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Riverside",
  copy: {
    localEyebrow: "Bookkeeping built for how the Inland Empire actually runs",
    areasEyebrow: "Across the city &amp; the Inland Empire",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Inland Empire verticals we know",
    servicesEyebrow: "What we do for Riverside businesses",
    faqEyebrow: "Riverside FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=riverside&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Riverside businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Riverside anchors the <strong>Inland Empire</strong>, one of the largest logistics, warehousing, and distribution hubs in the country, so its defining accounting is <strong>fulfillment and distribution</strong>: <strong>inventory and COGS</strong> at scale, <strong>warehouse and freight</strong> cost accounting, <strong>fixed-asset</strong> tracking (racking, forklifts, material-handling equipment) and depreciation, and heavy <strong>multi-state sales-tax nexus</strong> from goods shipped nationwide. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 8.75% in the city), a city business tax, and <strong>AB5</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Riverside businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Riverside and Inland Empire businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the logistics, warehousing, and distribution accounting the Inland Empire runs on." },
    { q: "How does logistics and warehousing change my Riverside books?", a: "Distribution and 3PL businesses need <strong>inventory and COGS</strong> tracked at scale, <strong>warehouse and freight</strong> costs captured, <strong>fixed assets</strong> (racking, forklifts, MHE) depreciated, and &mdash; because goods ship nationwide &mdash; heavy <strong>multi-state sales-tax nexus</strong> monitored. We keep the books to that standard; the nexus determinations and filings stay with your CPA, whom we coordinate with." },
    { q: "What California taxes affect my Riverside books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 8.75% in the city of Riverside), a city business tax, and <strong>AB5</strong> worker classification &mdash; built into how your books are kept." },
    { q: "Do you handle multi-state sales-tax nexus?", a: "We keep the books so your sales by state and your physical footprint (warehouses, inventory, staff) are clear, which is what a <a href=\"/glossary/sales-tax-nexus/\">nexus</a> review depends on. The determination of where you have economic or physical nexus and the registrations and filings are your CPA&rsquo;s; we make sure the underlying data is clean and we coordinate." },
    { q: "Which areas do you serve?", a: "<strong>All of Riverside</strong> &mdash; Downtown, the warehouse and distribution corridors, and the UC Riverside and Canyon Crest areas &mdash; plus the wider Inland Empire from Ontario and Fontana to Moreno Valley and San Bernardino, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Riverside sits at the center of the Inland Empire &mdash; one of the largest goods-movement and warehousing regions in the United States &mdash; and distribution changes the books in ways most bookkeepers never handle.",
    "The defining issue is <strong>fulfillment and distribution</strong>. Third-party logistics (3PL), distributors, and e-commerce fulfillment operations need <strong>inventory and COGS</strong> tracked accurately at high volume, <strong>warehouse and freight</strong> costs captured, and <strong>fixed assets</strong> &mdash; racking, forklifts, conveyor and material-handling equipment &mdash; depreciated correctly. Because the goods ship across the country, these businesses carry heavy <strong>multi-state sales-tax nexus</strong>. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 8.75% in the city, a Riverside business tax, and <strong>AB5</strong> worker classification.",
    "A software-only bookkeeper rarely tracks inventory at warehouse scale or flags a growing multi-state footprint until a notice arrives. If COGS isn&rsquo;t right, margins are fiction. If <a href=\"/glossary/sales-tax-nexus/\">nexus</a> isn&rsquo;t monitored, exposure builds silently. If warehouse labor is mis-classified, <a href=\"/glossary/1099-vs-w2/\">AB5</a> exposure grows. We put a named bookkeeper on your file who keeps inventory, freight, fixed assets, and sales-by-state clean &mdash; built into the monthly close.",
    "The result: books that reflect how an Inland Empire distribution business actually runs &mdash; inventory and COGS accurate, warehouse and freight costs captured, fixed assets depreciated, sales-by-state clear for nexus &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown Riverside", note: "Professional services, finance &amp; small business" },
    { name: "Warehouse &amp; distribution corridors", note: "3PL, fulfillment, distribution &amp; freight" },
    { name: "UC Riverside &amp; Canyon Crest", note: "Tech, research-adjacent &amp; professional services" },
    { name: "Ontario, Fontana &amp; the I-10/I-15 hubs", note: "Logistics, manufacturing &amp; distribution" },
    { name: "Moreno Valley &amp; San Bernardino", note: "Distribution, retail &amp; small business" },
    { name: "All of the Inland Empire", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Nexus", desc: "Multi-state sales-tax nexus &mdash; Inland Empire distributors ship nationwide, creating economic and physical nexus in many states. Your books must keep <strong>sales by state</strong> and your physical footprint clear so a nexus review is fast. We keep the data clean; the determination and filings are your CPA&rsquo;s." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "8.75%", desc: "City of Riverside combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus Riverside County and district add-ons, administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks, including use tax on equipment." },
  ],
  taxNote: "Riverside and California tax figures are educational and current as of the review date, verified against the City of Riverside, the California Franchise Tax Board, and the CDTFA. Rates and thresholds change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or multi-state tax returns, determine nexus, or provide legal or tax advice. Multi-state registration and filing decisions are coordinated with your CPA or EA.",

  industries: [
    { label: "Logistics, 3PL &amp; distribution", href: "/accounting/industries/ecommerce/", note: "inventory and COGS at scale, warehouse and freight costing, fixed-asset tracking, and multi-state nexus" },
    { label: "E-commerce &amp; fulfillment", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, SKU-level inventory, and <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> across states" },
    { label: "Manufacturing &amp; assembly", href: "/accounting/industries/restaurant/", note: "production costing, inventory and COGS, and CDTFA sales/use tax on equipment and materials" },
    { label: "Wholesale &amp; distribution", href: "/accounting/industries/ecommerce/", note: "resale-certificate handling, AR/AP at volume, and margin by product line" },
    { label: "Construction &amp; trades", href: "/accounting/industries/professional-services/", note: "Inland Empire growth &mdash; job costing, WIP, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with inventory and COGS tracked and CDTFA sales/use tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Inventory &amp; COGS cleanup", body: "Distribution books drift when inventory isn&rsquo;t right. We rebuild COGS and inventory to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, fixed-asset, and freight structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax and run a multi-state nexus review &mdash; sales by state kept clean.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "At distribution scale, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your COGS and inventory are accurate, your multi-state nexus exposure is visible before a notice arrives, and your warehouse labor won&rsquo;t fail an AB5 test. That judgment is what a named Riverside bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Riverside, CA FTB &amp; CDTFA &middot; No tax-filing, nexus-determination, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Riverside business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Riverside and the wider Inland Empire, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the logistics, warehousing, and distribution accounting the region runs on." },
    { q: "How does logistics and warehousing change my bookkeeping?", a: "Distribution, 3PL, and fulfillment businesses need inventory and COGS tracked accurately at high volume, warehouse and freight costs captured, and fixed assets like racking, forklifts, and material-handling equipment depreciated correctly. Because goods ship nationwide, they also carry heavy multi-state sales-tax exposure. We keep the books to that standard in QuickBooks so margins are real and exposure is visible; the tax filings stay with your CPA." },
    { q: "What California taxes affect my Riverside bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 8.75% in the city of Riverside, including use tax on equipment. The city requires a business tax. And AB5&rsquo;s ABC test governs worker classification. We build all of it into how your books are kept and reconciled." },
    { q: "Do you handle multi-state sales-tax nexus?", a: "We keep the books so your sales by state and your physical footprint &mdash; warehouses, stored inventory, staff &mdash; are clear, which is exactly what a nexus review depends on. The determination of where you have economic or physical nexus, and the state registrations and filings, are handled by your CPA or a sales-tax specialist; we make sure the underlying data is clean and we coordinate. We don&rsquo;t file multi-state returns ourselves." },
    { q: "Can you fix inventory and COGS in my QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common Inland Empire engagements. When inventory isn&rsquo;t tracked correctly, COGS is wrong and your margins are fiction. We rebuild inventory and COGS to a CPA-ready standard &mdash; by SKU or product line where it matters &mdash; then keep it accurate month to month so your statements can be trusted." },
    { q: "How much does a Riverside bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Distribution and fulfillment businesses often carry higher complexity (inventory, freight, multi-state), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Riverside QuickBooks file?", a: "Yes &mdash; especially for distribution and e-commerce fulfillment businesses whose books fell behind during rapid growth or whose inventory drifted out of sync. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding inventory and COGS and surfacing the multi-state footprint &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Riverside?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Riverside situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/riverside/",
    name: "Riverside Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Riverside and Inland Empire businesses — fluent in logistics and warehousing accounting, multi-state sales-tax nexus, California's $800 franchise tax (FTB), and CDTFA sales tax (about 8.75%). Inventory and COGS at scale. Fixed-fee, named bookkeeper.",
    serviceName: "Riverside Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Riverside tax-aware bookkeeping — inventory and COGS at distribution scale, warehouse and freight costing, fixed-asset depreciation, multi-state nexus data, California's $800 franchise tax, and CDTFA sales/use tax tracked. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or multi-state returns or determine nexus — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Riverside", sameAs: "https://en.wikipedia.org/wiki/Riverside,_California" },
      { type: "Place", name: "Inland Empire", sameAs: "https://en.wikipedia.org/wiki/Inland_Empire" },
    ],
    audienceType: "Riverside and Inland Empire small and midsize businesses — logistics, 3PL and distribution, e-commerce and fulfillment, manufacturing and assembly, wholesale, construction and trades, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

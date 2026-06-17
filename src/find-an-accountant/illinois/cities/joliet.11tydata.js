/* /find-an-accountant/illinois/cities/joliet/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Joliet's
 * ECONOMY: the heart of one of North America's largest INLAND-PORT / INTERMODAL logistics
 * complexes (the CenterPoint Intermodal Center at Joliet/Elwood, served by BNSF and UP),
 * driving warehousing, distribution, trucking, and freight, plus manufacturing and a
 * casino/gaming presence. The distinctive accounting is freight and inventory costing at
 * scale, fleet/fixed assets, and multi-state sales-tax nexus from goods shipped
 * nationwide. A find-replace "Joliet"->"Naperville" reads false (Naperville is corporate/
 * R&D; Joliet is intermodal logistics + warehousing).
 *
 * HONESTY: real facts only; PPRT rates, multi-state nexus determination, use tax, and
 * filings deferred to the Illinois Dept of Revenue and the CPA/EA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/joliet/",
  slug: "joliet",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Joliet Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Joliet, IL businesses — fluent in intermodal logistics, warehousing & trucking accounting, multi-state nexus, Illinois' flat income tax, and the Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Joliet" },
  ],
  hero: {
    eyebrow: "Joliet &middot; Will County &middot; Illinois",
    heading: "Joliet bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Joliet businesses &mdash; built around one of North America&rsquo;s largest intermodal logistics complexes, with warehousing, distribution, and trucking accounting, multi-state sales-tax nexus, Illinois&rsquo; flat income tax, and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Joliet &amp; Will County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Joliet businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in intermodal logistics and warehousing accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Joliet summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Joliet &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Joliet businesses start here",
    heading: "Book a Joliet discovery call.",
    lede: "30 minutes. We review where your books stand and your Joliet context &mdash; freight and inventory costing, fleet assets, multi-state nexus, the flat income tax and Personal Property Replacement Tax, use tax on equipment &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=joliet&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Joliet",
  copy: {
    localEyebrow: "Bookkeeping built for how Joliet actually runs",
    areasEyebrow: "Across the city &amp; Will County",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Joliet verticals we know",
    servicesEyebrow: "What we do for Joliet businesses",
    faqEyebrow: "Joliet FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=joliet&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Joliet businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Joliet sits at the heart of one of <strong>North America&rsquo;s largest inland-port and intermodal logistics complexes</strong> &mdash; the CenterPoint Intermodal Center, served by BNSF and Union Pacific &mdash; so its economy is <strong>warehousing, distribution, trucking, and freight</strong>, with manufacturing and gaming alongside. The distinctive accounting is <strong>freight and inventory costing</strong> at scale, <strong>fleet and fixed-asset</strong> tracking, and heavy <strong>multi-state sales-tax nexus</strong> from goods shipped nationwide. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, and a combined sales tax of <strong>about 8.75%</strong> (Joliet is home-rule). We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Joliet businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Joliet and Will County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in intermodal logistics, warehousing, and trucking accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle logistics and warehousing accounting?", a: "Yes &mdash; it&rsquo;s the defining Joliet need given the intermodal complex. Distribution, 3PL, and trucking businesses need <strong>freight and inventory costing</strong>, <strong>fleet and fixed-asset</strong> tracking and depreciation, and &mdash; because goods ship nationwide &mdash; heavy <strong>multi-state sales-tax nexus</strong> monitoring. We keep the books to that standard; the nexus determinations and filings stay with your CPA." },
    { q: "What Illinois taxes affect my Joliet books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, and a combined sales tax of <strong>about 8.75%</strong> (Joliet is home-rule), administered by the Illinois Department of Revenue, plus use tax on equipment. We track all of it; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle multi-state sales-tax nexus?", a: "We keep the books so your sales by state and your physical footprint (warehouses, stored inventory, fleets) are clear, which is what a <a href=\"/glossary/sales-tax-nexus/\">nexus</a> review depends on. The determination of where you have economic or physical nexus and the registrations and filings are your CPA&rsquo;s; we make sure the underlying data is clean and we coordinate." },
    { q: "Which areas do you serve?", a: "<strong>All of Joliet</strong> &mdash; downtown and the riverfront, the CenterPoint Intermodal and Elwood logistics corridor, the I-80/I-55 warehouse districts, and the surrounding Will County (Romeoville, Bolingbrook) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Joliet is a logistics city &mdash; the center of one of the largest inland-port and intermodal complexes in North America &mdash; and that economy, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>fulfillment and distribution</strong>. Third-party logistics (3PL), distributors, warehouse operators, and trucking companies around the <strong>CenterPoint Intermodal Center</strong> (served by BNSF and Union Pacific) need <strong>inventory and COGS</strong> tracked accurately at high volume, <strong>warehouse and freight</strong> costs captured, <strong>fleet and fixed assets</strong> depreciated, and &mdash; because the goods ship across the country &mdash; heavy <strong>multi-state sales-tax nexus</strong> monitored. Manufacturing and a casino/gaming presence round out the economy.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, a combined sales tax of <strong>about 8.75%</strong> (Joliet is home-rule), and use tax on equipment and forklifts. A software-only bookkeeper rarely tracks inventory at warehouse scale or flags a growing multi-state footprint until a notice arrives. We put a named bookkeeper on your file who keeps inventory, freight, fleets, and sales-by-state clean &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Joliet business actually runs &mdash; inventory and COGS accurate, warehouse and freight costs captured, fleets depreciated, the flat income tax and PPRT tracked, sales-by-state clear for nexus &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the riverfront", note: "Gaming, hospitality &amp; professional services" },
    { name: "CenterPoint Intermodal &amp; Elwood", note: "Intermodal, 3PL, distribution &amp; freight" },
    { name: "I-80 / I-55 warehouse districts", note: "Warehousing, fulfillment &amp; logistics" },
    { name: "Manufacturing &amp; industrial areas", note: "Makers, fabrication &amp; assembly" },
    { name: "Romeoville &amp; Bolingbrook", note: "Distribution, small business &amp; services" },
    { name: "All of Will County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) that owe no regular Illinois income tax. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "~8.75%", desc: "Joliet combined sales &amp; use tax of about 8.75% (Joliet is home-rule), administered by the IDOR &mdash; plus use tax on warehouse equipment and forklifts. We track sales by state for the nexus picture and reconcile the return; multi-state registration stays with your CPA." },
  ],
  taxNote: "Joliet and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, local sales/use-tax components, and nexus thresholds change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, PPRT, or multi-state returns, determine nexus, or provide legal or tax advice.",

  industries: [
    { label: "Intermodal, 3PL &amp; distribution", href: "/accounting/industries/ecommerce/", note: "inventory and COGS at scale, warehouse and freight costing, fixed-asset tracking, and multi-state nexus" },
    { label: "Trucking &amp; transportation", href: "/accounting/industries/ecommerce/", note: "per-mile and fuel costing, IFTA-aware records, and fleet depreciation" },
    { label: "E-commerce &amp; fulfillment", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, SKU-level inventory, and <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> across states" },
    { label: "Manufacturing &amp; assembly", href: "/accounting/industries/restaurant/", note: "production costing, inventory and COGS, and the Illinois manufacturing machinery exemption" },
    { label: "Gaming &amp; hospitality", href: "/accounting/industries/restaurant/", note: "admissions and gaming-tax considerations, high-volume POS, and tipped payroll" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "industrial and warehouse &mdash; multi-entity ledgers and property cost tracking" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with inventory and COGS tracked, fleets costed, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Inventory &amp; COGS cleanup", body: "Distribution books drift when inventory isn&rsquo;t right. We rebuild COGS and inventory to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, fixed-asset/fleet, and freight structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; nexus-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax and run a multi-state nexus review &mdash; sales by state kept clean.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "At distribution scale, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your COGS and inventory are accurate, your multi-state nexus exposure is visible before a notice arrives, your fleet is tracked, and your PPRT position is clean. That judgment is what a named Joliet bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, nexus-determination, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Joliet business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Joliet and Will County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in intermodal logistics, warehousing, and trucking accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle logistics, warehousing, and trucking?", a: "Yes &mdash; it&rsquo;s the defining Joliet engagement given the CenterPoint Intermodal complex. Distribution, 3PL, warehouse, and trucking businesses need inventory and COGS tracked at high volume, warehouse and freight costs captured, fleet and equipment depreciation, per-mile and fuel costing with IFTA-aware records for trucking, and multi-state nexus awareness. We keep the books to that standard so margins are real; the tax filings stay with your CPA, whom we coordinate with." },
    { q: "What Illinois taxes affect my Joliet bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Joliet&rsquo;s combined sales tax is about 8.75% (Joliet is home-rule), and use tax applies to equipment and forklifts. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle multi-state sales-tax nexus?", a: "We keep the books so your sales by state and your physical footprint &mdash; warehouses, stored inventory, fleets &mdash; are clear, which is exactly what a nexus review depends on. The determination of where you have economic or physical nexus, and the state registrations and filings, are handled by your CPA or a sales-tax specialist; we make sure the underlying data is clean and we coordinate. We don&rsquo;t file multi-state returns ourselves." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "How much does a Joliet bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Distribution and trucking businesses carry more complexity (inventory, fleets, multi-state), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Joliet QuickBooks file?", a: "Yes &mdash; especially for distribution, 3PL, and trucking businesses whose inventory, freight, or fleet books drifted out of balance at volume. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding inventory and COGS and the fixed-asset/fleet register and surfacing the multi-state footprint &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Joliet?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Joliet situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/joliet/",
    name: "Joliet Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Joliet, Illinois businesses — fluent in intermodal logistics, warehousing, and trucking accounting, multi-state sales-tax nexus, Illinois' flat income tax, the Personal Property Replacement Tax, and ~8.75% sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Joliet Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Joliet tax-aware bookkeeping — intermodal and warehouse inventory and COGS at scale, freight and fleet costing, multi-state nexus data, Illinois' flat income tax, the Personal Property Replacement Tax, and ~8.75% sales/use tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois or multi-state returns or determine nexus — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Joliet", sameAs: "https://en.wikipedia.org/wiki/Joliet,_Illinois" },
      { type: "AdministrativeArea", name: "Will County", sameAs: "https://en.wikipedia.org/wiki/Will_County,_Illinois" },
    ],
    audienceType: "Joliet and Will County small and midsize businesses — intermodal logistics, 3PL and distribution, trucking and transportation, e-commerce and fulfillment, manufacturing and assembly, gaming and hospitality, and industrial real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

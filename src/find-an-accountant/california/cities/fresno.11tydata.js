/* /find-an-accountant/california/cities/fresno/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Fresno is the hub of the Central Valley,
 * the most productive agricultural region in the U.S. — so the distinctive accounting
 * is AGRICULTURE and FOOD PROCESSING: California's partial sales/use-tax exemptions on
 * farm equipment, machinery, and diesel used in farming (CDTFA), seasonal and H-2A
 * labor payroll, crop/commodity and packing-house cost accounting. Layered on
 * California's $800 FTB franchise tax, CDTFA sales tax (~8.35% in the city), AB5, and
 * a city business tax certificate. A find-replace "Fresno"->"San Jose" reads false
 * (no Silicon Valley base; the ag-exemption + seasonal-labor + packing-house reality
 * is Central Valley, not the Bay).
 *
 * HONESTY: real facts only; the ag partial-exemption mechanics, H-2A payroll, and
 * filings deferred to the CDTFA, EDD, and the client's CPA/EA. City tax deferred to the
 * City of Fresno. No fabricated stats/counts/clients. Firm-level byline. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/fresno/",
  slug: "fresno",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Fresno Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Fresno & Central Valley businesses — fluent in California's farm-equipment sales-tax exemptions, the $800 franchise tax & CDTFA sales tax, agriculture, food-processing & seasonal-labor accounting. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Fresno" },
  ],
  hero: {
    eyebrow: "Fresno &middot; the Central Valley &middot; California",
    heading: "Fresno bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Fresno and Central Valley businesses &mdash; built around California&rsquo;s farm-equipment and diesel sales-tax exemptions, the $800 franchise tax and CDTFA sales tax, and the realities of agriculture, food processing, and seasonal labor. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Fresno &amp; the Central Valley",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Fresno businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in California&rsquo;s farm sales-tax exemptions and the FTB and CDTFA structure. The full Fresno summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Fresno &amp; California tax figures verified against the City of Fresno, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Fresno businesses start here",
    heading: "Book a Fresno discovery call.",
    lede: "30 minutes. We review where your books stand and your Fresno context &mdash; farm-equipment and diesel sales-tax exemptions, CDTFA sales tax, seasonal and H-2A payroll, packing-house cost accounting, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=fresno&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Fresno",
  copy: {
    localEyebrow: "Bookkeeping built for how the Central Valley actually runs",
    areasEyebrow: "Across the city &amp; the Valley",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Central Valley verticals we know",
    servicesEyebrow: "What we do for Fresno businesses",
    faqEyebrow: "Fresno FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=fresno&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Fresno businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Fresno sits at the heart of the Central Valley, the most productive agricultural region in the country, and that shapes its books: California gives <strong>partial sales/use-tax exemptions</strong> on farm equipment, machinery, and diesel used in farming (administered by the CDTFA), <strong>seasonal and H-2A labor</strong> drives payroll, and <strong>crop, commodity, and packing-house</strong> cost accounting matters. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 8.35% in the city), <strong>AB5</strong>, and a city business tax certificate. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Fresno businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fresno and Central Valley businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in California&rsquo;s farm sales-tax exemptions and the agriculture, food-processing, and seasonal-labor accounting the Valley runs on." },
    { q: "How does agriculture change my Fresno bookkeeping?", a: "California offers <strong>partial sales/use-tax exemptions</strong> on qualifying farm equipment, machinery, and diesel used in farming, so your books must separate exempt from taxable purchases to claim them correctly. <strong>Seasonal and H-2A labor</strong> needs careful payroll, and crop, commodity, and packing-house operations need cost tracking. We keep the books so those positions are clean; the CDTFA rules and your CPA confirm what qualifies." },
    { q: "What California taxes affect my Fresno books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 8.35% in the city of Fresno), a city business tax certificate, and <strong>AB5</strong> worker classification &mdash; all built into how your books are kept." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Farms, packing houses, and food processors often carry seasonal swings and inventory, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Fresno</strong> &mdash; Downtown and the Tower District, North Fresno and Clovis, the industrial and ag-processing corridors &mdash; plus the wider Central Valley from Madera to Visalia, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Fresno anchors the Central Valley, the most productive farm region in the United States &mdash; and agriculture changes the books in ways no generic bookkeeper handles.",
    "California gives <strong>partial sales and use-tax exemptions</strong> on qualifying <strong>farm equipment and machinery</strong> and on <strong>diesel fuel used in farming</strong>, administered by the CDTFA &mdash; which means your books have to separate exempt from taxable purchases or you over-pay or mis-claim. <strong>Seasonal and H-2A labor</strong> drives payroll that spikes at harvest. Packing houses, processors, and growers need <strong>commodity, crop, and inventory</strong> cost tracking. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 8.35% in the city, <strong>AB5</strong> worker classification, and a Fresno business tax certificate.",
    "A remote, software-only bookkeeper rarely knows the ag exemptions exist, let alone how to track them. If equipment purchases aren&rsquo;t flagged for the partial exemption, you lose real money. If seasonal crews aren&rsquo;t handled cleanly, payroll and <a href=\"/glossary/1099-vs-w2/\">worker-classification</a> exposure builds. If packing-house costs aren&rsquo;t tracked by crop or lot, margins are a guess. We put a named bookkeeper on your file who understands the Valley&rsquo;s reality &mdash; built into the monthly close.",
    "The result: books that reflect how a Central Valley business actually runs &mdash; ag exemptions tracked, sales tax reconciled to the CDTFA, seasonal payroll clean, crop and packing costs visible &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>, so filing the franchise tax, the income returns, and any ag-specific positions is fast and accurate.",
  ],

  areas: [
    { name: "Downtown &amp; the Tower District", note: "Professional services, healthcare &amp; small business" },
    { name: "North Fresno &amp; Clovis", note: "Tech, healthcare, retail &amp; professional services" },
    { name: "Ag-processing &amp; industrial corridors", note: "Packing houses, processors &amp; distribution" },
    { name: "Surrounding farm country", note: "Growers, dairies &amp; agribusiness across Fresno County" },
    { name: "Madera, Visalia &amp; the wider Valley", note: "Central Valley agribusiness &amp; small business" },
    { name: "All of the Central Valley", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Ag exempt", desc: "California partial sales/use-tax exemptions on qualifying <strong>farm equipment, machinery, and farming diesel</strong>, administered by the CDTFA. Your books must separate exempt from taxable purchases to claim them. We track the split so the exemption is defensible; the CDTFA rules and your CPA confirm what qualifies." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "8.35%", desc: "City of Fresno combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus Fresno County and district add-ons, administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
  ],
  taxNote: "Fresno and California tax figures are educational and current as of the review date, verified against the City of Fresno, the California Franchise Tax Board, and the CDTFA. Rates, thresholds, and the farm-exemption rules change &mdash; confirm any specific figure or exemption before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns, determine exemption eligibility, or provide legal or tax advice. Seasonal/H-2A payroll-tax and ag matters are coordinated with your CPA and the EDD.",

  industries: [
    { label: "Agriculture &amp; growers", href: "/accounting/industries/professional-services/", note: "farm-equipment and diesel sales-tax exemptions, crop and lot cost tracking, seasonal labor, and equipment depreciation" },
    { label: "Food processing &amp; packing", href: "/accounting/industries/restaurant/", note: "inventory and COGS by commodity, packing-house costing, and CDTFA sales/use tax on equipment and materials" },
    { label: "Dairy &amp; agribusiness", href: "/accounting/industries/professional-services/", note: "herd and production accounting, multi-entity ledgers, and milk-check and commodity reconciliation" },
    { label: "Logistics &amp; distribution", href: "/accounting/industries/ecommerce/", note: "Valley distribution &mdash; freight costing, inventory, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a>" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Restaurants &amp; retail", href: "/accounting/industries/restaurant/", note: "high-volume POS reconciled to the CDTFA return and tipped-employee payroll" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with ag exemptions tracked and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Seasonal farm and packing books fall behind between harvests. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with crop/commodity class and inventory structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax accurately, with farm-equipment and diesel exemptions tracked correctly.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Across a harvest cycle, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your ag exemptions are claimed, your packing-house margins by crop are real, your seasonal payroll is clean, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named Fresno bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Fresno, CA FTB &amp; CDTFA &middot; No tax-filing, exemption-eligibility, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Fresno business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fresno and the wider Central Valley, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in California&rsquo;s farm sales-tax exemptions and the agriculture, food-processing, and seasonal-labor accounting the Valley runs on." },
    { q: "How do California's farm sales-tax exemptions affect my books?", a: "California offers partial sales and use-tax exemptions on qualifying farm equipment, machinery, and diesel fuel used in farming, administered by the CDTFA. To claim them correctly your books have to separate exempt purchases from taxable ones &mdash; otherwise you over-pay or mis-claim. We track that split in QuickBooks so the position is clean and defensible; the CDTFA&rsquo;s rules and your CPA confirm exactly what qualifies for your operation." },
    { q: "What California taxes affect my Fresno bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 8.35% in the city of Fresno. The city requires a business tax certificate. And AB5&rsquo;s ABC test governs worker classification. We build all of it into how your books are kept and reconciled." },
    { q: "Do you handle agriculture and farm accounting?", a: "Yes &mdash; it&rsquo;s the core Fresno engagement. Growers, dairies, and agribusiness need farm-equipment and diesel exemptions tracked, crop and lot cost accounting, equipment depreciation, and clean handling of seasonal and H-2A labor. We keep the books to that standard in QuickBooks; the tax positions, depreciation method, and any agricultural credits stay with your CPA, whom we coordinate with." },
    { q: "Can you handle seasonal and H-2A payroll?", a: "We keep the books so seasonal payroll is reflected cleanly and worker classification is handled correctly under AB5, which is what a harvest-driven operation needs. The H-2A program and seasonal payroll carry specific federal and state requirements; we coordinate with your CPA and payroll specialist and the EDD on those, and make sure the underlying books and reconciliations are clean and accurate." },
    { q: "How much does a Fresno bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Farms, packing houses, and processors often carry seasonal swings and inventory, which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Fresno QuickBooks file?", a: "Yes &mdash; especially for growers, packers, and processors whose books fell behind during harvest or a busy season. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including separating exempt ag purchases and rebuilding crop or commodity cost tracking &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Fresno?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Fresno situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/fresno/",
    name: "Fresno Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Fresno and Central Valley businesses — fluent in California's farm-equipment and diesel sales-tax exemptions, the $800 franchise tax (FTB), and CDTFA sales tax (about 8.35%). Agriculture, food-processing, and seasonal-labor aware. Fixed-fee, named bookkeeper.",
    serviceName: "Fresno Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Fresno tax-aware bookkeeping — California's farm sales-tax exemptions, the $800 franchise tax, and CDTFA sales tax tracked, with agriculture, food-processing, packing-house, and seasonal-labor structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal returns or determine exemption eligibility — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Fresno", sameAs: "https://en.wikipedia.org/wiki/Fresno,_California" },
      { type: "AdministrativeArea", name: "Fresno County", sameAs: "https://en.wikipedia.org/wiki/Fresno_County,_California" },
    ],
    audienceType: "Fresno and Central Valley small and midsize businesses — agriculture and growers, food processing and packing, dairy and agribusiness, logistics and distribution, healthcare, restaurants, and retail",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

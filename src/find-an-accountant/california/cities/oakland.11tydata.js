/* /find-an-accountant/california/cities/oakland/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Oakland's gross-receipts business tax was
 * restructured by Measure T (passed 2022) into PROGRESSIVE rates that rise with a
 * business's gross-receipts tier — distinct from LA/SF flat-by-class gross-receipts
 * taxes, San Diego's employee certificate, and San Jose's per-employee tax. Layered on
 * California's $800 FTB franchise tax, CDTFA sales tax (~10.25% in the city — Alameda
 * County is among the highest in CA), and AB5. The real economy: the Port of Oakland
 * (logistics, import/export, customs/freight) and a notable licensed cannabis sector,
 * where federal IRC §280E disallows ordinary deductions and demands meticulous books.
 * A find-replace "Oakland"->"San Diego" reads false (no progressive Measure T tax, no
 * 280E cannabis density, lower sales tax).
 *
 * HONESTY: real facts only; §280E treatment, customs/duty, and filings deferred to the
 * CPA/specialists; city tax deferred to the City of Oakland. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/oakland/",
  slug: "oak",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Oakland Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Oakland businesses — fluent in Oakland's progressive Measure T business tax, California's $800 franchise tax & CDTFA sales tax, Port logistics & cannabis (280E) accounting. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Oakland" },
  ],
  hero: {
    eyebrow: "Oakland &middot; the East Bay &middot; California",
    heading: "Oakland bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Oakland businesses &mdash; built around the city&rsquo;s progressive Measure T business tax, California&rsquo;s $800 franchise tax and CDTFA sales tax (among the highest in the state), and the realities of Port logistics and licensed cannabis. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Oakland &amp; the East Bay",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Oakland businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in Oakland&rsquo;s progressive Measure T business tax and California&rsquo;s FTB and CDTFA structure. The full Oakland summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Oakland &amp; California tax figures verified against the City of Oakland, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Oakland businesses start here",
    heading: "Book an Oakland discovery call.",
    lede: "30 minutes. We review where your books stand and your Oakland context &mdash; the progressive Measure T business tax, CDTFA sales tax, Port logistics or cannabis 280E structure, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=oakland&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Oakland",
  copy: {
    localEyebrow: "Bookkeeping built for how Oakland actually taxes",
    areasEyebrow: "Across the city &amp; the East Bay",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Oakland verticals we know",
    servicesEyebrow: "What we do for Oakland businesses",
    faqEyebrow: "Oakland FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=oakland&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Oakland businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Oakland taxes businesses on <strong>gross receipts</strong>, but after <strong>Measure T</strong> (passed 2022) the rates are <strong>progressive</strong> &mdash; they rise as a business&rsquo;s gross receipts climb &mdash; which is different from the flat-by-class gross-receipts taxes in LA and SF. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 10.25% in the city &mdash; among the highest in California), and <strong>AB5</strong>. And Oakland&rsquo;s economy carries two accounting worlds most bookkeepers never touch: the <strong>Port of Oakland</strong> (logistics, import/export, customs and freight) and a notable <strong>licensed cannabis</strong> sector, where federal <strong>IRC &sect;280E</strong> disallows ordinary deductions and demands meticulous books. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Oakland businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Oakland and East Bay businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in Oakland&rsquo;s progressive Measure T business tax and the Port-logistics and cannabis accounting the city runs on." },
    { q: "How does Oakland's Measure T business tax work?", a: "Oakland taxes <strong>gross receipts</strong>, and after Measure T (passed 2022) the rates are <strong>progressive</strong> &mdash; higher gross-receipts tiers pay a higher rate, and the rate also varies by business type. That&rsquo;s distinct from the flat-by-classification gross-receipts taxes in LA and SF. We track gross receipts by tier so the figure is predictable; the City of Oakland and your CPA confirm what&rsquo;s due." },
    { q: "What California taxes affect my Oakland books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 10.25% in the city of Oakland &mdash; among the highest in California), and <strong>AB5</strong> worker classification &mdash; built into how your books are kept." },
    { q: "Do you handle cannabis (280E) accounting?", a: "Yes &mdash; Oakland has a notable licensed cannabis sector, and its books are uniquely demanding. Because federal <strong>IRC &sect;280E</strong> disallows ordinary business deductions for cannabis businesses, the only deductible figure is <strong>cost of goods sold</strong>, so COGS must be computed and documented with extreme care, alongside heavy cash-handling controls. We keep the books to that standard; the &sect;280E tax positions and filings are your CPA&rsquo;s, and we coordinate." },
    { q: "Which areas do you serve?", a: "<strong>All of Oakland</strong> &mdash; Downtown and Uptown, Jack London Square and the Port, West Oakland&rsquo;s industrial and logistics corridor, Fruitvale, and the Oakland Hills &mdash; plus the wider East Bay, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Oakland taxes gross receipts like its neighbor across the Bay &mdash; but it does it in a way no other big California city does, and its economy adds two of the hardest accounting problems in the state.",
    "After <strong>Measure T</strong> (passed 2022), Oakland&rsquo;s gross-receipts business tax became <strong>progressive</strong> &mdash; the rate rises with a business&rsquo;s gross-receipts tier and varies by business type &mdash; rather than the flat-by-classification structure in Los Angeles and San Francisco. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 10.25% in the city (Alameda County is among the highest in the state), and <strong>AB5</strong> worker classification.",
    "Then there&rsquo;s the economy. The <strong>Port of Oakland</strong> anchors a logistics and import/export sector where freight, customs, duties, and demurrage have to be tracked cleanly and margins are thin. And Oakland&rsquo;s licensed <strong>cannabis</strong> sector lives under federal <strong>IRC &sect;280E</strong>, which disallows ordinary business deductions &mdash; making a meticulous <a href=\"/glossary/cost-of-goods-sold/\">cost-of-goods-sold</a> computation and tight cash controls the difference between a defensible return and a disaster. Contractor-heavy operations also face real <a href=\"/glossary/1099-vs-w2/\">AB5</a> exposure. A generic bookkeeper handles none of this; we build a named bookkeeper into your file who does.",
    "The result: books that reflect how an Oakland business actually runs &mdash; the progressive business tax tracked by tier, sales tax reconciled to the CDTFA, freight and import costs or &sect;280E COGS handled correctly, contractor vs. employee clean &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; Uptown", note: "Startups, professional services &amp; arts" },
    { name: "Jack London &amp; the Port", note: "Logistics, import/export &amp; freight" },
    { name: "West Oakland", note: "Industrial, logistics &amp; light manufacturing" },
    { name: "Fruitvale &amp; the Eastside", note: "Small business, retail &amp; services" },
    { name: "The Oakland Hills &amp; the East Bay", note: "Professional services &amp; real estate" },
    { name: "All of Oakland", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Measure T", desc: "Oakland&rsquo;s gross-receipts business tax &mdash; after Measure T (2022) the rates are <strong>progressive</strong>, rising with a business&rsquo;s gross-receipts tier and varying by business type, distinct from LA/SF flat-by-class taxes. We track gross receipts by tier so the figure is predictable; the City of Oakland and your CPA confirm what&rsquo;s due." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "10.25%", desc: "City of Oakland combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus Alameda County and district add-ons (among the highest in the state), administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
  ],
  taxNote: "Oakland and California tax figures are educational and current as of the review date, verified against the City of Oakland, the California Franchise Tax Board, and the CDTFA. Rates, tiers, and thresholds change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns, take IRC &sect;280E tax positions, or provide legal or tax advice. Cannabis &sect;280E and customs/duty matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Logistics, import/export &amp; freight", href: "/accounting/industries/ecommerce/", note: "Port of Oakland operators &mdash; freight, customs, duties and demurrage tracked, thin-margin cost accounting" },
    { label: "Licensed cannabis", href: "/accounting/industries/restaurant/", note: "IRC &sect;280E-aware books &mdash; meticulous <a href=\"/glossary/cost-of-goods-sold/\">COGS</a>, cash-handling controls, and seed-to-sale reconciliation, coordinated with your 280E CPA" },
    { label: "Manufacturing &amp; food production", href: "/accounting/industries/restaurant/", note: "inventory and COGS, production costing, and CDTFA sales/use tax on equipment and materials" },
    { label: "Restaurants &amp; hospitality", href: "/accounting/industries/restaurant/", note: "high-volume POS reconciled to the CDTFA return, tipped-employee payroll" },
    { label: "Professional services &amp; agencies", href: "/accounting/industries/professional-services/", note: "project profitability, gross-vs-net revenue, and AB5 contractor analysis" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the progressive Measure T business tax tracked by tier and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cannabis &amp; 280E-aware books", body: "Meticulous COGS, cash controls, and seed-to-sale reconciliation kept to a standard your 280E CPA can build a defensible return on.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Cleanup &amp; bookkeeping &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, COGS, and freight structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax accurately at Oakland&rsquo;s high combined rate, with import and use-tax detail clean.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Under a thin-margin freight book or a &sect;280E cannabis return, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your COGS is computed defensibly, your import costs are real against margin, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named Oakland bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Oakland, CA FTB &amp; CDTFA &middot; No tax-filing, &sect;280E-position, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Oakland business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Oakland and the wider East Bay, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in Oakland&rsquo;s progressive Measure T business tax and the Port-logistics and cannabis accounting the city runs on." },
    { q: "How does Oakland's Measure T business tax work?", a: "Oakland taxes gross receipts, and after Measure T (passed in 2022) the rates are progressive &mdash; higher gross-receipts tiers pay a higher rate, and the rate also varies by business type. That&rsquo;s distinct from the flat-by-classification gross-receipts taxes in Los Angeles and San Francisco. We track gross receipts by tier in your books so the tax is predictable; the City of Oakland and your CPA confirm the rate and what&rsquo;s due for your business." },
    { q: "What California taxes affect my Oakland bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 10.25% in the city of Oakland &mdash; among the highest combined rates in the state. And AB5&rsquo;s ABC test governs worker classification. We build all of it into how your books are kept and reconciled." },
    { q: "Do you handle cannabis (280E) accounting?", a: "Yes. Oakland&rsquo;s licensed cannabis businesses face IRC &sect;280E, which disallows ordinary business deductions for businesses trafficking in a federally controlled substance &mdash; so the only deductible figure is cost of goods sold. That makes a carefully computed, well-documented COGS and tight cash-handling controls essential. We keep the books to that standard, with seed-to-sale reconciliation; the &sect;280E tax positions and the return itself are handled by your specialized cannabis CPA, whom we coordinate with." },
    { q: "Do you work with Port of Oakland logistics and import/export businesses?", a: "Yes. Logistics, freight, and import/export businesses around the Port run on thin margins where freight, customs, duties, and demurrage all have to be tracked cleanly to know real profitability. We structure the books so those costs are captured and reconciled, and use-tax on imported goods is handled correctly &mdash; coordinated with your CPA and any customs broker on duty and compliance matters." },
    { q: "How much does an Oakland bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Cannabis and logistics businesses often carry higher complexity (280E COGS, freight costing, cash controls), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Oakland QuickBooks file?", a: "Yes &mdash; especially for cannabis and logistics businesses whose books fell behind under heavy cash volume or thin-margin freight detail. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including a defensible COGS rebuild where 280E applies &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Oakland?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Oakland situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/oakland/",
    name: "Oakland Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Oakland businesses — fluent in Oakland's progressive Measure T gross-receipts business tax, California's $800 franchise tax (FTB), and CDTFA sales tax (about 10.25%). Port logistics and cannabis (280E) aware. Fixed-fee, named bookkeeper.",
    serviceName: "Oakland Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Oakland tax-aware bookkeeping — the progressive Measure T business tax, California's $800 franchise tax, and CDTFA sales tax tracked, with Port-logistics freight costing and cannabis §280E COGS structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal returns or take §280E positions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Oakland", sameAs: "https://en.wikipedia.org/wiki/Oakland,_California" },
      { type: "AdministrativeArea", name: "Alameda County", sameAs: "https://en.wikipedia.org/wiki/Alameda_County,_California" },
    ],
    audienceType: "Oakland and East Bay small and midsize businesses — logistics and import/export around the Port of Oakland, licensed cannabis, manufacturing and food production, restaurants and hospitality, professional services and agencies, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

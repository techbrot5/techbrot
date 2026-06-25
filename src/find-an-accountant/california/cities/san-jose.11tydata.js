/* /find-an-accountant/california/cities/san-jose/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: San Jose's business tax is assessed by
 * NUMBER OF EMPLOYEES (a base amount plus a per-employee increment) — not gross
 * receipts (LA/SF) and not a flat certificate (San Diego). Layered on California's
 * $800 FTB franchise tax, CDTFA sales tax (~9.375% in the city), and AB5. The real
 * economy is the capital of Silicon Valley: semiconductors and hardware, enterprise
 * SaaS, deep tech, heavy equity compensation (RSUs/ISOs → ASC 718), R&D credits, and
 * VC-backed high growth. A find-replace "San Jose"->"Sacramento" reads false (no
 * Silicon Valley hardware base, different city tax, no chip/equity-comp density).
 *
 * HONESTY: real facts only; equity-comp tax treatment, R&D credits, and filings are
 * deferred to the CPA/EA; city tax described structurally and deferred to the City of
 * San Jose. No fabricated stats/counts/clients. Firm-level byline. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/san-jose/",
  slug: "sj",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "San Jose Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "ProAdvisor bookkeeping for San Jose and Silicon Valley — the employee-based business tax, the $800 franchise tax, equity-comp and SaaS. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "San Jose" },
  ],
  hero: {
    eyebrow: "San Jose &middot; Silicon Valley &middot; California",
    heading: "San Jose bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for San Jose and Silicon Valley businesses &mdash; built around the city&rsquo;s employee-based business tax, California&rsquo;s $800 franchise tax and CDTFA sales tax, and the realities of hardware, enterprise SaaS, equity compensation, and R&amp;D. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "San Jose &amp; Silicon Valley",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for San Jose and Silicon Valley businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in San Jose&rsquo;s employee-based business tax and California&rsquo;s FTB and CDTFA structure. The full San Jose summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. San Jose &amp; California tax figures verified against the City of San Jose, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "San Jose businesses start here",
    heading: "Book a San Jose discovery call.",
    lede: "30 minutes. We review where your books stand and your San Jose context &mdash; the employee-based business tax, CDTFA sales tax, equity-comp and R&amp;D structure, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=san-jose&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "San Jose",
  copy: {
    localEyebrow: "Bookkeeping built for how San Jose actually taxes",
    areasEyebrow: "Across the city &amp; the Valley",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Silicon Valley verticals we know",
    servicesEyebrow: "What we do for San Jose businesses",
    faqEyebrow: "San Jose FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=san-jose&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for San Jose and Silicon Valley businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. San Jose taxes businesses differently from the rest of California&rsquo;s big cities: its <strong>business tax is assessed by the number of employees</strong> &mdash; a base amount plus a per-employee increment &mdash; not on gross receipts (LA, SF) and not a flat certificate (San Diego). California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 9.375% in the city), and <strong>AB5</strong>. And as the capital of Silicon Valley, San Jose books carry what generic bookkeepers miss: <strong>equity compensation</strong> (RSUs and ISOs), <strong>hardware inventory and COGS</strong>, enterprise <a href=\"/glossary/deferred-revenue/\">deferred revenue</a>, and <strong>R&amp;D</strong> tracking. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for San Jose businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Jose and Silicon Valley businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in San Jose&rsquo;s employee-based business tax and the equity-comp, hardware, and SaaS accounting the Valley runs on." },
    { q: "How is San Jose's business tax calculated?", a: "San Jose assesses its <strong>business tax by the number of employees</strong> &mdash; a base amount plus a per-employee increment, with an annual registration. That&rsquo;s different from the gross-receipts taxes in Los Angeles and San Francisco and from San Diego&rsquo;s flat certificate. We track headcount so the tax is predictable; the City of San Jose and your CPA confirm what&rsquo;s due." },
    { q: "What California taxes affect my San Jose books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 9.375% in the city of San Jose), and <strong>AB5</strong> worker classification &mdash; built into how your books are kept." },
    { q: "Do you handle equity compensation and R&D for Silicon Valley companies?", a: "Yes &mdash; it&rsquo;s the core of San Jose books. Venture-backed and hardware companies carry <strong>RSUs and ISOs</strong>, <strong>deferred revenue</strong> on enterprise contracts, <strong>inventory and COGS</strong> for hardware, and <strong>R&amp;D</strong> spend. We keep the books clean and audit-ready; the equity-comp tax treatment (ASC 718), R&amp;D credits, and filings are handled by your CPA, whom we coordinate with." },
    { q: "Which areas do you serve?", a: "<strong>All of San Jose</strong> &mdash; Downtown, North San Jose and the hardware corridor, Santana Row/West San Jose, Edenvale and South San Jose &mdash; plus the wider Silicon Valley, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "San Jose is the capital of Silicon Valley, and its books carry two things at once: a city tax structured unlike anywhere else in California, and the most complex private-company accounting in the country.",
    "San Jose assesses its <strong>business tax by employee count</strong> &mdash; a base amount plus a per-employee increment &mdash; not on gross receipts like Los Angeles and San Francisco, and not as a flat certificate like San Diego. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges every LLC and corporation regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 9.375% in the city, and <strong>AB5</strong> worker classification.",
    "The real complexity is the businesses. Hardware and semiconductor companies need <strong>inventory and COGS</strong> done right. Enterprise software runs on <a href=\"/glossary/deferred-revenue/\">deferred revenue</a> and multi-year contracts. Venture-backed companies carry heavy <strong>equity compensation</strong> &mdash; RSUs, ISOs, and option pools &mdash; that has to be reflected cleanly so the cap table and the books agree. R&amp;D spend needs to be tracked for the credit. And contractor-heavy teams face real <a href=\"/glossary/1099-vs-w2/\">AB5</a> exposure. We keep the books to that standard; the equity-comp tax treatment, R&amp;D credits, and filings are your CPA&rsquo;s, and we coordinate.",
    "The result: books a Silicon Valley board and a diligence team can both trust &mdash; employee-based city tax tracked, sales tax reconciled to the CDTFA, revenue recognized correctly on enterprise contracts, inventory and equity comp clean &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown San Jose", note: "Startups, professional services &amp; finance" },
    { name: "North San Jose &amp; the hardware corridor", note: "Semiconductors, hardware &amp; enterprise tech" },
    { name: "West San Jose &amp; Santana Row", note: "SaaS, agencies &amp; professional services" },
    { name: "South San Jose &amp; Edenvale", note: "Manufacturing, logistics &amp; small business" },
    { name: "Silicon Valley metro", note: "Santa Clara, Sunnyvale, Cupertino &amp; the wider Valley" },
    { name: "All of San Jose", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Per head", desc: "San Jose business tax &mdash; assessed by the <strong>number of employees</strong> (a base amount plus a per-employee increment), with annual registration. Different from LA/SF gross-receipts taxes and San Diego&rsquo;s flat certificate. We track headcount so it&rsquo;s predictable and renewal is never missed." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "9.375%", desc: "City of San Jose combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus Santa Clara County and district add-ons, administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
  ],
  taxNote: "San Jose and California tax figures are educational and current as of the review date, verified against the City of San Jose, the California Franchise Tax Board, and the CDTFA. Rates, thresholds, and the employee-based business-tax schedule change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns, advise on equity-compensation tax, or provide legal or tax advice.",

  industries: [
    { label: "Semiconductors &amp; hardware", href: "/accounting/industries/saas/", note: "inventory and COGS, contract manufacturing, supply-chain accruals, and R&amp;D tracking" },
    { label: "Enterprise SaaS &amp; software", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition on multi-year contracts, MRR/ARR, and burn-and-runway reporting" },
    { label: "Deep tech &amp; venture-backed", href: "/accounting/industries/saas/", note: "equity compensation (RSUs/ISOs) reflected cleanly, cap-table-aligned books, and diligence-ready financials" },
    { label: "Professional services &amp; agencies", href: "/accounting/industries/professional-services/", note: "project profitability, gross-vs-net revenue, and AB5 contractor analysis" },
    { label: "E-commerce &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> beyond California" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the employee-based city tax tracked and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Fast-scaling Valley books fall behind around fundraises and product launches. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, deferred revenue, and equity-comp structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Diligence-ready books", body: "Books structured so your CPA can file accurately and a diligence team can trust them &mdash; revenue, inventory, and equity comp clean.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],

  advisoryBody: "Around a fundraise, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your deferred-revenue schedule will survive diligence, your burn against runway is real, your equity comp ties to the cap table, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named San Jose bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of San Jose, CA FTB &amp; CDTFA &middot; No tax-filing, equity-comp-tax, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my San Jose business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Jose and the wider Silicon Valley, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in San Jose&rsquo;s employee-based business tax and the equity-comp, hardware, and SaaS accounting the Valley runs on." },
    { q: "How is San Jose's business tax calculated?", a: "San Jose assesses its business tax by the number of employees &mdash; a base amount plus a per-employee increment, with annual registration. That&rsquo;s different from the gross-receipts business taxes in Los Angeles and San Francisco, and from San Diego&rsquo;s flat employee-tier certificate. We track headcount in your books so the tax is predictable and registration is never missed; the City of San Jose and your CPA confirm what&rsquo;s due." },
    { q: "What California taxes affect my San Jose bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 9.375% in the city of San Jose. And AB5&rsquo;s ABC test governs whether a worker is a contractor or an employee. We build all of it into how your books are kept and reconciled." },
    { q: "Do you handle equity compensation (RSUs and ISOs)?", a: "We keep the books so equity compensation is reflected cleanly and ties to your cap table, which is what a board and a diligence team need. The tax treatment of RSUs and ISOs and the related expense accounting under ASC 718 are areas your CPA and equity counsel own; we coordinate with them and make sure the underlying books are clean and consistent. We don&rsquo;t provide equity-compensation tax advice." },
    { q: "Can you handle hardware inventory and enterprise deferred revenue?", a: "Yes &mdash; both are core Valley needs. Hardware companies need inventory and COGS tracked correctly, including contract manufacturing and supply-chain accruals. Enterprise software needs deferred revenue recognized across multi-year contracts with clean MRR/ARR. We set the books up so these are right month to month, not reconstructed at year-end or during diligence." },
    { q: "How much does a San Jose bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Venture-backed and hardware companies often carry higher complexity (inventory, deferred revenue, equity comp), which we scope transparently before any work begins." },
    { q: "Can you get our books diligence-ready before a raise?", a: "Yes &mdash; it&rsquo;s one of the most common San Jose engagements. We scope a cleanup to a CPA-ready, diligence-ready standard &mdash; revenue recognition corrected, inventory and deferred revenue clean, equity comp tied to the cap table, contractor classification reviewed under AB5 &mdash; then keep it clean monthly. Tax positions and the formal valuation work stay with your CPA and counsel." },
    { q: "How do we get started in San Jose?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your San Jose situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/san-jose/",
    name: "San Jose Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for San Jose and Silicon Valley businesses — fluent in San Jose's employee-based business tax, California's $800 franchise tax (FTB), and CDTFA sales tax (about 9.375%). Hardware, enterprise SaaS, equity-comp, and R&D aware. Fixed-fee, named bookkeeper.",
    serviceName: "San Jose Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and San Jose tax-aware bookkeeping — the employee-based city business tax, California's $800 franchise tax, and CDTFA sales tax tracked, with hardware inventory, enterprise deferred revenue, and equity-comp structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal tax returns or advise on equity-compensation tax — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "San Jose", sameAs: "https://en.wikipedia.org/wiki/San_Jose,_California" },
      { type: "Place", name: "Silicon Valley", sameAs: "https://en.wikipedia.org/wiki/Silicon_Valley" },
    ],
    audienceType: "San Jose and Silicon Valley small and midsize businesses — semiconductors and hardware, enterprise SaaS and software, deep tech and venture-backed startups, professional services and agencies, e-commerce, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

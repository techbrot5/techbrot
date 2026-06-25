/* /find-an-accountant/texas/cities/austin/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Texas tax stack is shared (no income tax; franchise/margin tax;
 * 8.25% sales tax) — the un-clonable substance is Austin's ECONOMY: "Silicon Hills"
 * tech and SaaS, semiconductors (a major Texas chip cluster), heavy VC and high growth
 * with equity compensation, AND the live-music/film/festival economy (SXSW, ACL). The
 * distinctive accounting is SaaS deferred revenue + equity comp + R&D, alongside the
 * events/hospitality layer (Hotel Occupancy Tax — Austin's local HOT is among the
 * higher ones, especially during festivals). A find-replace "Austin"->"Dallas" reads
 * false (Dallas is corporate HQ/finance; Austin is startups/chips/music). The 3rd
 * tax-stack item is the Hotel Occupancy Tax, distinct from Houston's severance and
 * Dallas's BPP emphasis.
 *
 * HONESTY: real facts only; equity-comp tax (ASC 718), R&D credits, HOT remittance, and
 * filings deferred to the CPA/EA and City of Austin. No fabricated stats/counts. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/austin/",
  slug: "austin",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Austin Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Austin ProAdvisor bookkeeping — SaaS, semiconductor and equity-comp accounting, the margin tax, 8.25% sales tax, Hotel Occupancy Tax. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Austin" },
  ],
  hero: {
    eyebrow: "Austin &middot; Travis County &middot; Texas",
    heading: "Austin bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Austin businesses &mdash; built around the &ldquo;Silicon Hills&rdquo; tech and SaaS economy, semiconductors and equity compensation, and the live-music and festival scene, with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Austin &amp; Central Texas",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Austin businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in SaaS and equity-comp accounting and the Texas franchise (margin) tax and sales-tax structure. The full Austin summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Austin &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts and the City of Austin.",
  },
  ctaBand: {
    eyebrow: "Austin businesses start here",
    heading: "Book an Austin discovery call.",
    lede: "30 minutes. We review where your books stand and your Austin context &mdash; SaaS deferred revenue and equity comp, the Texas margin tax, 8.25% sales tax, the Hotel Occupancy Tax for events, AB-style contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=austin&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Austin",
  copy: {
    localEyebrow: "Bookkeeping built for how Austin actually runs",
    areasEyebrow: "Across the city &amp; Central Texas",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "Austin verticals we know",
    servicesEyebrow: "What we do for Austin businesses",
    faqEyebrow: "Austin FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=austin&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Austin businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state income tax</strong>, and Austin levies no city income or gross-receipts tax &mdash; so what shapes the books is Austin&rsquo;s economy and the Texas tax stack. Austin is <strong>&ldquo;Silicon Hills&rdquo;</strong> &mdash; SaaS and software, <strong>semiconductors</strong>, and heavy VC-backed growth &mdash; plus a live-music, film, and festival scene. The distinctive accounting is <strong>SaaS</strong> <a href=\"/glossary/deferred-revenue/\">deferred revenue</a>, <strong>equity compensation</strong> (RSUs/ISOs), and <strong>R&amp;D</strong>, alongside an events/hospitality layer where the <strong>Hotel Occupancy Tax</strong> applies. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due) and <strong>8.25% sales tax</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Austin businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Austin and Central Texas businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in SaaS, semiconductor, and equity-comp accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Do you handle SaaS and equity compensation for Austin startups?", a: "Yes &mdash; it&rsquo;s the core Austin need. Venture-backed and SaaS companies carry <strong>deferred revenue</strong> on multi-year contracts, <strong>RSUs and ISOs</strong> that have to tie to the cap table, <strong>R&amp;D</strong> spend, and diligence-ready financials. We keep the books to that standard; the equity-comp tax treatment (ASC 718), R&amp;D credits, and filings are your CPA&rsquo;s, and we coordinate." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and Austin has no city income or gross-receipts tax. Businesses face the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong>, and the <strong>Hotel Occupancy Tax</strong> where lodging or events apply. We track all of it; the Comptroller, the City of Austin, and your CPA confirm what&rsquo;s due." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Venture-backed and hardware companies carry more complexity (deferred revenue, equity comp, inventory), which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Austin</strong> &mdash; Downtown and the music district, the Domain and North Austin tech corridor, East Austin, and the semiconductor and manufacturing areas &mdash; plus the wider Central Texas region including Round Rock and Cedar Park, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Austin is a tech town with a soundtrack, and both halves shape its books &mdash; on top of a Texas tax stack with no state income tax and no city income or gross-receipts tax.",
    "On the tech side, <strong>&ldquo;Silicon Hills&rdquo;</strong> SaaS and software companies need <a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition on multi-year contracts and clean MRR/ARR; <strong>semiconductor</strong> and hardware firms need inventory and COGS; and venture-backed companies carry heavy <strong>equity compensation</strong> &mdash; RSUs, ISOs, option pools &mdash; that has to tie to the cap table, plus <strong>R&amp;D</strong> tracking. On the other side, the <strong>live-music, film, and festival</strong> economy (SXSW, ACL) brings event accounting and lodging where the <strong>Hotel Occupancy Tax</strong> applies.",
    "The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> &mdash; below a revenue threshold no tax is due, but the position must be tracked &mdash; <strong>8.25% sales and use tax</strong> (with Texas&rsquo;s distinct SaaS taxability), and the City of Austin&rsquo;s <strong>Hotel Occupancy Tax</strong> for lodging and events. We put a named bookkeeper on your file who keeps deferred revenue, equity comp, and the Texas positions clean &mdash; with the tax treatment left to your CPA.",
    "The result: books a board and a diligence team can trust &mdash; deferred revenue recognized correctly, equity comp tied to the cap table, the margin tax and SaaS sales tax handled, event and HOT detail clean &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the music district", note: "Startups, music, hospitality &amp; professional services" },
    { name: "The Domain &amp; North Austin", note: "SaaS, tech &amp; corporate offices" },
    { name: "Semiconductor &amp; manufacturing corridor", note: "Chips, hardware &amp; advanced manufacturing" },
    { name: "East Austin", note: "Creative, film, food &amp; startups" },
    { name: "Round Rock, Cedar Park &amp; suburbs", note: "Tech, healthcare &amp; small business" },
    { name: "All of Central Texas", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and Austin has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; <strong>no tax due below a revenue threshold</strong>. We track the position; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "Austin combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller. Texas treats SaaS and data-processing distinctly, so taxable vs non-taxable revenue is tracked carefully in QuickBooks." },
    { figure: "HOT", desc: "Hotel Occupancy Tax &mdash; the City of Austin and the state levy HOT on lodging, which matters for short-term rentals, event housing, and hospitality (especially during festivals). It&rsquo;s collected and held for the taxing authority, so we track it as a <strong>liability, not revenue</strong>; the rate and remittance stay with the City of Austin and your CPA." },
  ],
  taxNote: "Austin and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts and the City of Austin. The franchise-tax threshold and rates, SaaS taxability, HOT rate, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise, sales, or hotel-occupancy tax returns, advise on equity-compensation tax, or provide legal or tax advice.",

  industries: [
    { label: "SaaS &amp; software", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition on multi-year contracts, MRR/ARR, and Texas SaaS sales-tax treatment" },
    { label: "Semiconductors &amp; hardware", href: "/accounting/industries/saas/", note: "inventory and COGS, contract manufacturing, supply-chain accruals, and R&amp;D tracking" },
    { label: "Venture-backed startups", href: "/accounting/industries/saas/", note: "equity compensation (RSUs/ISOs) tied to the cap table, burn-and-runway reporting, and diligence-ready books" },
    { label: "Music, film &amp; events", href: "/accounting/industries/professional-services/", note: "event and tour accounting, royalty and production tracking, and Hotel Occupancy Tax on lodging" },
    { label: "Food, beverage &amp; hospitality", href: "/accounting/industries/restaurant/", note: "high-volume POS reconciled to the Texas sales-tax return and tipped-employee payroll" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the margin-tax position tracked and 8.25% sales tax (incl. SaaS) reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; diligence-ready books", body: "Fast-scaling startups fall behind around fundraises. We get the file CPA-ready &mdash; revenue, equity comp, and inventory clean &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with deferred-revenue, inventory, and equity-comp structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Board- &amp; investor-ready books", body: "Books structured so your CPA can file the Texas margin and sales tax accurately and a board or diligence team can trust them &mdash; revenue and equity comp clean.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],

  advisoryBody: "Around a raise, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your deferred-revenue schedule will survive diligence, your burn against runway is real, your equity comp ties to the cap table, and your margin-tax position is tracked. That judgment is what a named Austin bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller &amp; the City of Austin &middot; No tax-filing, equity-comp-tax, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Austin business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Austin and Central Texas, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in SaaS, semiconductor, and equity-comp accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Do you handle SaaS and equity compensation?", a: "Yes &mdash; it&rsquo;s the core Austin engagement. SaaS companies need deferred revenue recognized across multi-year contracts with clean MRR/ARR; venture-backed companies carry RSUs and ISOs that have to tie to the cap table, plus R&amp;D spend. We keep the books so all of that is clean and diligence-ready; the equity-comp tax treatment under ASC 718, R&amp;D credits, and filings are handled by your CPA, whom we coordinate with. We don&rsquo;t provide equity-compensation tax advice." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and Austin has no city income or gross-receipts tax. Businesses face the Texas Franchise Tax &mdash; the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in Austin (with distinct SaaS taxability) and a Hotel Occupancy Tax on lodging. We track all of it; the Comptroller, the City of Austin, and your CPA confirm what&rsquo;s due." },
    { q: "How is SaaS taxed in Texas?", a: "Texas treats certain software and data-processing services as taxable in a way that differs from many states, so SaaS companies have to apply Texas sales tax correctly on the taxable portion of their revenue. We set the books up so taxable and non-taxable revenue are tracked cleanly for an accurate return; the specific taxability determination is confirmed with your CPA, since it depends on how your product is delivered." },
    { q: "Do you work with music, film, and event businesses?", a: "Yes &mdash; it&rsquo;s a distinctive Austin vertical. Touring, event, and production businesses need event and tour accounting, royalty and production cost tracking, and clean handling of the Hotel Occupancy Tax on lodging during festivals and events. We keep the books to that standard; HOT remittance and the tax filings stay with the City of Austin and your CPA." },
    { q: "How much does an Austin bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Venture-backed and hardware companies often carry more complexity (deferred revenue, equity comp, inventory), which we scope transparently before any work begins." },
    { q: "Can you get our books diligence-ready before a raise?", a: "Yes &mdash; it&rsquo;s one of the most common Austin engagements. We scope a cleanup to a CPA-ready, diligence-ready standard &mdash; revenue recognition corrected, deferred revenue clean, equity comp tied to the cap table, inventory accurate &mdash; then keep it clean monthly. The valuation work and tax positions stay with your CPA and counsel." },
    { q: "How do we get started in Austin?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Austin situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/austin/",
    name: "Austin Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Austin businesses — fluent in SaaS, semiconductor, and equity-comp accounting, the Texas franchise (margin) tax, 8.25% sales tax (with SaaS taxability), and the Hotel Occupancy Tax for events. Fixed-fee, named bookkeeper.",
    serviceName: "Austin Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Austin tax-aware bookkeeping — SaaS deferred revenue, equity-comp tied to the cap table, semiconductor inventory, the Texas franchise (margin) tax, 8.25% sales tax with SaaS taxability, and the Hotel Occupancy Tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns or advise on equity-compensation tax — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Austin", sameAs: "https://en.wikipedia.org/wiki/Austin,_Texas" },
      { type: "AdministrativeArea", name: "Travis County", sameAs: "https://en.wikipedia.org/wiki/Travis_County,_Texas" },
    ],
    audienceType: "Austin and Central Texas small and midsize businesses — SaaS and software, semiconductors and hardware, venture-backed startups, music film and events, food beverage and hospitality, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

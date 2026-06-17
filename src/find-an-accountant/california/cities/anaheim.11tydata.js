/* /find-an-accountant/california/cities/anaheim/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Anaheim is California's tourism and
 * convention capital (the Disneyland Resort, the Anaheim Convention Center, the
 * Platinum Triangle), so the defining accounting is HOSPITALITY: the Transient
 * Occupancy Tax (TOT) and an Anaheim Tourism Improvement District assessment on
 * lodging, high-volume hospitality POS, and tipped/seasonal payroll — alongside
 * Orange County's manufacturing and tech base. Anaheim levies a business license.
 * Layered on California's $800 FTB franchise tax, CDTFA sales tax (~7.75% in the city,
 * the lower OC rate), and AB5. A find-replace "Anaheim"->"Oakland" reads false (no
 * Disney/convention tourism economy, no TOT centrality, different sales-tax rate).
 *
 * HONESTY: real facts only; TOT remittance, tip-credit, and filings deferred to the
 * City of Anaheim and the CPA/EA. No fabricated stats/counts/clients. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/anaheim/",
  slug: "anaheim",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Anaheim Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Anaheim & Orange County businesses — fluent in the Transient Occupancy Tax & tourism economy, California's $800 franchise tax & CDTFA sales tax, hospitality & high-volume POS accounting. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Anaheim" },
  ],
  hero: {
    eyebrow: "Anaheim &middot; Orange County &middot; California",
    heading: "Anaheim bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Anaheim and Orange County businesses &mdash; built around the city&rsquo;s tourism economy and Transient Occupancy Tax, California&rsquo;s $800 franchise tax and CDTFA sales tax, and the realities of hospitality, high-volume POS, and seasonal payroll. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Anaheim &amp; Orange County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Anaheim businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in Anaheim&rsquo;s tourism economy and Transient Occupancy Tax and California&rsquo;s FTB and CDTFA structure. The full Anaheim summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Anaheim &amp; California tax figures verified against the City of Anaheim, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Anaheim businesses start here",
    heading: "Book an Anaheim discovery call.",
    lede: "30 minutes. We review where your books stand and your Anaheim context &mdash; the Transient Occupancy Tax and tourism-district assessment, CDTFA sales tax, high-volume hospitality POS, seasonal and tipped payroll, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=anaheim&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Anaheim",
  copy: {
    localEyebrow: "Bookkeeping built for how Anaheim actually runs",
    areasEyebrow: "Across the city &amp; Orange County",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Anaheim &amp; OC verticals we know",
    servicesEyebrow: "What we do for Anaheim businesses",
    faqEyebrow: "Anaheim FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=anaheim&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Anaheim businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Anaheim is California&rsquo;s tourism and convention capital &mdash; the Disneyland Resort, the Convention Center, the Platinum Triangle &mdash; so its defining accounting is <strong>hospitality</strong>: the <strong>Transient Occupancy Tax (TOT)</strong> and an Anaheim Tourism Improvement District assessment on lodging, <strong>high-volume POS</strong>, and <strong>tipped and seasonal payroll</strong>. Orange County&rsquo;s manufacturing and tech base rounds it out. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 7.75% in the city, the lower OC rate), a city business license, and <strong>AB5</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Anaheim businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Anaheim and Orange County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in Anaheim&rsquo;s tourism economy, the Transient Occupancy Tax, and the high-volume hospitality accounting the city runs on." },
    { q: "How does the Transient Occupancy Tax affect my Anaheim books?", a: "Hotels, motels, and short-term lodging in Anaheim collect a <strong>Transient Occupancy Tax (TOT)</strong> from guests and remit it to the city, and an <strong>Anaheim Tourism Improvement District assessment</strong> may also apply. Because it&rsquo;s collected and held for the city, your books must track it as a liability, not revenue. We keep it reconciled so remittance is clean; the City of Anaheim and your CPA confirm the rate and filing." },
    { q: "What California taxes affect my Anaheim books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 7.75% in the city of Anaheim, the lower Orange County rate), a city business license, and <strong>AB5</strong> worker classification &mdash; built into how your books are kept." },
    { q: "Do you handle hospitality and high-volume POS?", a: "Yes &mdash; it&rsquo;s the core Anaheim need. Hotels, restaurants, and attractions run high-volume <strong>POS</strong> that has to reconcile to deposits and the CDTFA sales-tax return, with <strong>tipped and seasonal payroll</strong> and TOT tracked as a liability. We keep the books to that standard so the close is clean every month, not reconstructed at year-end." },
    { q: "Which areas do you serve?", a: "<strong>All of Anaheim</strong> &mdash; the Anaheim Resort and Convention Center area, the Platinum Triangle, Downtown and the Anaheim Packing District, and the canyon and industrial areas &mdash; plus the wider Orange County, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Anaheim is the tourism and convention capital of California, and that single fact &mdash; not its tax rate &mdash; is what shapes its books.",
    "The defining issue is <strong>hospitality</strong>. Hotels and short-term lodging collect a <strong>Transient Occupancy Tax (TOT)</strong> from guests and remit it to the city, often with an <strong>Anaheim Tourism Improvement District assessment</strong> on top &mdash; money that is held for the city and must be tracked as a <strong>liability, not revenue</strong>. Restaurants and attractions run <strong>high-volume POS</strong> that has to reconcile to deposits and the sales-tax return, with <strong>tipped and seasonal payroll</strong>. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 7.75% in the city (the lower Orange County rate), an Anaheim business license, and <strong>AB5</strong> worker classification.",
    "A generic bookkeeper often books TOT as revenue, mis-handles tip reporting, or never reconciles POS to deposits &mdash; and the errors surface at the worst time. Orange County&rsquo;s manufacturing, aerospace, and tech base adds job costing and inventory needs alongside the tourism core. We put a named bookkeeper on your file who treats TOT correctly, reconciles the POS, and handles tipped payroll cleanly under <a href=\"/glossary/1099-vs-w2/\">classification</a> rules &mdash; built into the monthly close.",
    "The result: books that reflect how an Anaheim business actually runs &mdash; TOT tracked as a liability and reconciled for remittance, POS tied to deposits and the CDTFA return, tipped and seasonal payroll clean &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "The Anaheim Resort &amp; Convention Center", note: "Hotels, attractions &amp; hospitality" },
    { name: "The Platinum Triangle", note: "Mixed-use, entertainment &amp; professional services" },
    { name: "Downtown &amp; the Packing District", note: "Restaurants, food halls &amp; small business" },
    { name: "Canyon &amp; industrial areas", note: "Manufacturing, aerospace &amp; distribution" },
    { name: "Orange County metro", note: "Irvine, Santa Ana, Garden Grove &amp; the wider OC" },
    { name: "All of Anaheim", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "TOT", desc: "Transient Occupancy Tax &mdash; Anaheim hotels and short-term lodging collect TOT from guests and remit it to the city, often with an Anaheim Tourism Improvement District assessment. It&rsquo;s held for the city, so your books must track it as a <strong>liability, not revenue</strong>. We keep it reconciled for clean remittance; the City of Anaheim and your CPA confirm the rate." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "7.75%", desc: "City of Anaheim combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus the Orange County add-on (the lower OC rate), administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks against high-volume POS deposits." },
  ],
  taxNote: "Anaheim and California tax figures are educational and current as of the review date, verified against the City of Anaheim, the California Franchise Tax Board, and the CDTFA. Rates, the TOT rate, and assessments change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns, remit TOT on your behalf, or provide legal or tax advice. Tip-credit and payroll-tax matters are coordinated with your CPA and the EDD.",

  industries: [
    { label: "Hotels &amp; lodging", href: "/accounting/industries/restaurant/", note: "TOT tracked as a liability, tourism-district assessments, night-audit reconciliation, and seasonal payroll" },
    { label: "Restaurants &amp; food halls", href: "/accounting/industries/restaurant/", note: "high-volume POS reconciled to the CDTFA return, tipped-employee payroll, and food-vs-alcohol sales tax" },
    { label: "Attractions &amp; entertainment", href: "/accounting/industries/professional-services/", note: "ticketing and deferred-admission revenue, seasonal staffing, and event cost tracking" },
    { label: "Manufacturing &amp; aerospace", href: "/accounting/industries/professional-services/", note: "Orange County operations &mdash; job costing, inventory and COGS, and contract accounting" },
    { label: "E-commerce &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> beyond California" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with TOT tracked as a liability and high-volume POS reconciled to the CDTFA return.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Hospitality books fall behind in peak season. We get the file CPA-ready &mdash; including fixing TOT and POS &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with POS integration and TOT-liability structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax accurately, with POS deposits, food-vs-alcohol splits, and TOT all reconciled.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "In a peak-and-off-season tourism business, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your TOT liability is clean for remittance, your POS ties to deposits, your seasonal labor cost is real against occupancy, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named Anaheim bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Anaheim, CA FTB &amp; CDTFA &middot; No tax-filing, TOT-remittance, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Anaheim business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Anaheim and the wider Orange County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in Anaheim&rsquo;s tourism economy, the Transient Occupancy Tax, and the high-volume hospitality accounting the city runs on." },
    { q: "How does the Transient Occupancy Tax (TOT) affect my books?", a: "Hotels, motels, and short-term lodging in Anaheim collect TOT from guests and remit it to the city, and an Anaheim Tourism Improvement District assessment may also apply. Because that money is collected and held for the city, it must be tracked in your books as a liability, not as revenue &mdash; a common error that overstates income and creates remittance problems. We keep TOT reconciled so remittance is clean; the City of Anaheim and your CPA confirm the rate and filing schedule." },
    { q: "What California taxes affect my Anaheim bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 7.75% in the city of Anaheim &mdash; the lower Orange County rate. The city requires a business license. And AB5&rsquo;s ABC test governs worker classification. We build all of it into how your books are kept and reconciled." },
    { q: "Do you handle hotels, restaurants, and attractions?", a: "Yes &mdash; it&rsquo;s the core Anaheim engagement. Hospitality businesses need TOT tracked as a liability, high-volume POS reconciled to deposits and the sales-tax return, night-audit and deferred-admission revenue handled correctly, and tipped and seasonal payroll done cleanly. We keep the books to that standard in QuickBooks; the tax filings and tip-credit positions stay with your CPA, whom we coordinate with." },
    { q: "Can you reconcile high-volume POS to my books?", a: "Yes &mdash; it&rsquo;s essential for Anaheim hospitality. We set the books up so your POS, merchant deposits, and the CDTFA sales-tax return all tie, with food-vs-alcohol splits and TOT separated correctly. That turns a month-end scramble into a clean, repeatable close, and makes your statements trustworthy for your CPA and any lender." },
    { q: "How much does an Anaheim bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Hotels and high-volume restaurants often carry more reconciliation work (POS, TOT, tips), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Anaheim QuickBooks file?", a: "Yes &mdash; especially for hospitality businesses whose books fell behind in peak season or that booked TOT as revenue. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including fixing the TOT liability and rebuilding POS reconciliation &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Anaheim?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Anaheim situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/anaheim/",
    name: "Anaheim Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Anaheim and Orange County businesses — fluent in the Transient Occupancy Tax and tourism economy, California's $800 franchise tax (FTB), and CDTFA sales tax (about 7.75%). Hospitality, high-volume POS, and seasonal payroll aware. Fixed-fee, named bookkeeper.",
    serviceName: "Anaheim Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Anaheim tax-aware bookkeeping — the Transient Occupancy Tax tracked as a liability, California's $800 franchise tax, and CDTFA sales tax tracked, with high-volume hospitality POS, night-audit, and tipped/seasonal payroll structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal returns or remit TOT — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Anaheim", sameAs: "https://en.wikipedia.org/wiki/Anaheim,_California" },
      { type: "AdministrativeArea", name: "Orange County", sameAs: "https://en.wikipedia.org/wiki/Orange_County,_California" },
    ],
    audienceType: "Anaheim and Orange County small and midsize businesses — hotels and lodging, restaurants and food halls, attractions and entertainment, manufacturing and aerospace, e-commerce and retail, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

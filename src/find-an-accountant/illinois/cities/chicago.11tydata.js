/* /find-an-accountant/illinois/cities/chicago/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois is its own profile: a FLAT 4.95% personal income tax
 * (7% corporate) PLUS the Illinois-unique PERSONAL PROPERTY REPLACEMENT TAX (PPRT) that
 * hits even pass-throughs. The un-clonable Chicago substance is the CHICAGO LOCAL-TAX
 * STACK — the highest big-city sales tax in the U.S. (10.25%), the Personal Property
 * Lease Transaction Tax (which reaches LEASED SOFTWARE / CLOUD / SaaS), and the Amusement
 * Tax (extended to STREAMING and live events) — layered on a finance/derivatives (CME),
 * tech-startup, corporate-HQ, professional-services, and logistics economy. A
 * find-replace "Chicago"->"Naperville" reads false (the 10.25% rate + the lease/amusement
 * taxes are Chicago city taxes, not the suburbs').
 *
 * HONESTY: real facts only; PPRT rates, the Chicago lease/amusement-tax rates and SaaS
 * application, and filings deferred to the Illinois Dept of Revenue, the City of Chicago
 * Dept of Finance, and the CPA/EA. No fabricated stats/counts/clients. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/chicago/",
  slug: "chicago",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Chicago Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Chicago businesses — fluent in the Chicago lease & amusement taxes (SaaS/streaming), the 10.25% sales tax, Illinois' flat income tax and Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Chicago" },
  ],
  hero: {
    eyebrow: "Chicago &middot; Cook County &middot; Illinois",
    heading: "Chicago bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Chicago businesses &mdash; built around the city&rsquo;s finance, tech, and professional-services economy and its distinctive local-tax stack: the 10.25% sales tax, the Personal Property Lease Transaction Tax on software and cloud, and the Amusement Tax on streaming and events, plus Illinois&rsquo; flat income tax and Personal Property Replacement Tax. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Chicago &amp; Chicagoland",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Chicago businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in the Chicago local-tax stack and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Chicago summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Chicago &amp; Illinois tax figures verified against the Illinois Department of Revenue and the City of Chicago Department of Finance.",
  },
  ctaBand: {
    eyebrow: "Chicago businesses start here",
    heading: "Book a Chicago discovery call.",
    lede: "30 minutes. We review where your books stand and your Chicago context &mdash; the 10.25% sales tax, the lease transaction tax on your SaaS and cloud, the amusement tax, Illinois&rsquo; flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=chicago&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Chicago",
  copy: {
    localEyebrow: "Bookkeeping built for how Chicago actually taxes",
    areasEyebrow: "Across the city &amp; Chicagoland",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Chicago verticals we know",
    servicesEyebrow: "What we do for Chicago businesses",
    faqEyebrow: "Chicago FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=chicago&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Chicago businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. What sets Chicago apart is a local-tax stack almost no other U.S. city imposes: the <strong>highest big-city sales tax in the country (10.25%)</strong>, the <strong>Personal Property Lease Transaction Tax</strong> &mdash; which reaches leased software and <strong>cloud/SaaS</strong> &mdash; and the <strong>Amusement Tax</strong>, extended to <strong>streaming</strong> and live events. On top sits Illinois&rsquo; <strong>flat 4.95% personal income tax</strong> (7% corporate) and the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong>, which taxes the net income of corporations and even <strong>pass-through</strong> entities. Chicago&rsquo;s economy &mdash; <strong>finance and derivatives</strong> (the CME), <strong>tech and startups</strong>, corporate HQs, professional services, restaurants, and logistics &mdash; runs on all of it. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Chicago businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Chicago and Chicagoland businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the Chicago local-tax stack and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "What Chicago and Illinois taxes affect my books?", a: "The <strong>10.25% Chicago sales tax</strong> (the highest of any major U.S. city), the <strong>Personal Property Lease Transaction Tax</strong> on leased software and <strong>cloud/SaaS</strong>, the <strong>Amusement Tax</strong> on streaming and live events, Illinois&rsquo; <strong>flat 4.95% personal income tax</strong> (7% corporate), and the <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs. We build awareness of all of it into how your books are kept." },
    { q: "Does Chicago tax my SaaS or cloud software?", a: "It can. Chicago&rsquo;s <strong>Personal Property Lease Transaction Tax</strong> applies to leased personal property and has been applied to <strong>nonpossessory computer leases</strong> &mdash; cloud computing and software-as-a-service used in the city. For SaaS sellers and heavy SaaS buyers, that&rsquo;s a real, easy-to-miss exposure. We track it in your books; the rate and exact application stay with the City of Chicago Department of Finance and your CPA." },
    { q: "What is the Personal Property Replacement Tax?", a: "The <strong>PPRT</strong> is an Illinois tax on the net income of businesses &mdash; including <strong>partnerships, S-corps, and other pass-throughs</strong> that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It surprises pass-through owners who assume they owe nothing at the entity level. We track the position; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Chicago</strong> &mdash; the Loop and the financial district, River North and Fulton Market (tech), the West Loop, and the neighborhoods &mdash; plus the wider Chicagoland metro, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Most cities have a sales tax and stop there. Chicago has a stack of local taxes that reach into software, streaming, and entertainment &mdash; and that&rsquo;s what makes bookkeeping here its own discipline.",
    "The <strong>Chicago sales tax is 10.25%</strong>, the highest of any major U.S. city. The <strong>Personal Property Lease Transaction Tax</strong> applies not just to equipment leases but to <strong>nonpossessory computer leases</strong> &mdash; cloud computing and <strong>SaaS</strong> &mdash; so both SaaS sellers and SaaS-heavy buyers can have exposure. The <strong>Amusement Tax</strong> reaches <strong>streaming</strong> services and live events. Layered on top is Illinois&rsquo; structure: a <strong>flat 4.95% personal income tax</strong> (7% corporate) and the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong>, which taxes the net income of corporations and even <strong>pass-through</strong> entities that owe no regular Illinois income tax.",
    "That is why out-of-state, software-only bookkeeping struggles here. If your books don&rsquo;t flag the lease transaction tax on cloud services, it gets missed. If a SaaS or streaming product isn&rsquo;t mapped to the amusement or lease tax, exposure builds. If a partnership or S-corp owner assumes no entity-level Illinois tax, the <strong>PPRT</strong> is a surprise. TechBrot keeps a named bookkeeper on your file who knows these are the things that matter in this city &mdash; built into the monthly close, not the year-end scramble.",
    "The result: books that reflect how a Chicago business actually runs &mdash; the 10.25% sales tax reconciled, lease and amusement taxes flagged on software and streaming, the flat income tax and PPRT positions tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>, so filing the Illinois and Chicago taxes is fast and accurate.",
  ],

  areas: [
    { name: "The Loop &amp; financial district", note: "Finance, derivatives, law &amp; professional services" },
    { name: "River North &amp; Fulton Market", note: "Tech, startups, agencies &amp; restaurants" },
    { name: "West Loop", note: "Restaurants, hospitality &amp; creative" },
    { name: "Near North &amp; Magnificent Mile", note: "Retail, hospitality &amp; professional services" },
    { name: "The neighborhoods", note: "Small business, healthcare &amp; services across the city" },
    { name: "All of Chicagoland", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat + PPRT", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax, plus the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on the net income of corporations and even pass-through entities. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "10.25%", desc: "Chicago combined sales &amp; use tax &mdash; the <strong>highest of any major U.S. city</strong>: Illinois&rsquo; 6.25% state rate plus Cook County and Chicago home-rule add-ons, administered by the Illinois Department of Revenue. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "Lease + amusement", desc: "Chicago&rsquo;s <strong>Personal Property Lease Transaction Tax</strong> reaches leased software and <strong>cloud/SaaS</strong>, and the <strong>Amusement Tax</strong> reaches <strong>streaming</strong> and live events &mdash; city taxes most bookkeepers miss. We flag them in your books; the rates and application stay with the City of Chicago Department of Finance and your CPA." },
  ],
  taxNote: "Chicago and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue and the City of Chicago Department of Finance. The income-tax and PPRT rates, the lease-transaction and amusement-tax rates and their SaaS/streaming application, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, PPRT, lease-transaction, or amusement tax returns, determine SaaS taxability, or provide legal or tax advice.",

  industries: [
    { label: "Finance, trading &amp; derivatives", href: "/accounting/industries/professional-services/", note: "the CME ecosystem &mdash; reconciliation discipline, fund and commission accounting, and clean books for partners and regulators" },
    { label: "Technology &amp; SaaS", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition, MRR/ARR, and the Chicago lease transaction tax on cloud/SaaS flagged" },
    { label: "Professional services &amp; agencies", href: "/accounting/industries/professional-services/", note: "project profitability, gross-vs-net revenue, partner draws, and contractor classification" },
    { label: "Restaurants &amp; hospitality", href: "/accounting/industries/restaurant/", note: "high-volume POS reconciled to the 10.25% sales-tax return, the Chicago restaurant tax, and tipped payroll" },
    { label: "Logistics &amp; distribution", href: "/accounting/industries/ecommerce/", note: "the nation&rsquo;s rail hub &mdash; freight and inventory costing and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the 10.25% sales tax reconciled and lease/amusement taxes flagged.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Fast-scaling Chicago books fall behind quickly. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with SaaS lease-tax and deferred-revenue structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; local-tax-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and the 10.25% Chicago sales tax accurately, with lease and amusement taxes tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "In a city that taxes your cloud software and your streaming product and a state that taxes pass-through income through the PPRT, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your lease-tax exposure is mapped, your PPRT position is tracked, and your SaaS revenue is recognized right. That judgment is what a named Chicago bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Dept of Revenue &amp; the City of Chicago Dept of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Chicago business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Chicago and the wider Chicagoland, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Chicago local-tax stack and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "What Chicago and Illinois taxes affect my bookkeeping?", a: "Several that out-of-state bookkeepers miss. Chicago has a 10.25% sales tax &mdash; the highest of any major U.S. city &mdash; the Personal Property Lease Transaction Tax on leased software and cloud/SaaS, and the Amusement Tax on streaming and live events. Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. We build awareness of all of it into how your books are kept." },
    { q: "Does Chicago tax SaaS or cloud software?", a: "It can. Chicago&rsquo;s Personal Property Lease Transaction Tax applies to leased personal property and has been applied to nonpossessory computer leases &mdash; cloud computing and software-as-a-service used in the city. So a SaaS seller may need to collect it, and a SaaS-heavy buyer may owe it. We flag it in your books so it isn&rsquo;t missed; the rate and the exact application to your product stay with the City of Chicago Department of Finance and your CPA, since it depends on how the software is delivered and used." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments to replace the personal property tax that was abolished in 1979. It commonly surprises pass-through owners who assume there&rsquo;s no entity-level Illinois tax. We track the position in your books; the rate and the IL-1065/IL-1120-ST filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Does Chicago have an amusement tax on streaming?", a: "Yes &mdash; Chicago&rsquo;s Amusement Tax has been applied to streaming services and digital entertainment as well as to live events, tickets, and venues. For a business that sells streaming, events, or entertainment in the city, it&rsquo;s a real collection obligation. We track it in your books; the rate and application stay with the City of Chicago Department of Finance and your CPA." },
    { q: "How much does a Chicago bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. SaaS, finance, and high-volume hospitality businesses often carry more complexity (lease tax, deferred revenue, POS), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Chicago QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common Chicago engagements, especially for fast-growing tech and hospitality businesses whose books fell behind during a scale-up. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including mapping the lease and amusement taxes and the PPRT position &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Chicago?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Chicago situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/chicago/",
    name: "Chicago Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Chicago businesses — fluent in the Chicago local-tax stack (10.25% sales tax, the lease transaction tax on SaaS/cloud, the amusement tax on streaming), Illinois' flat income tax, and the Personal Property Replacement Tax. Fixed-fee, named bookkeeper.",
    serviceName: "Chicago Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Chicago tax-aware bookkeeping — the 10.25% sales tax, the Personal Property Lease Transaction Tax on software and cloud/SaaS, the Amusement Tax on streaming and events, Illinois' flat income tax, and the Personal Property Replacement Tax tracked. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois or Chicago tax returns or determine SaaS taxability — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Chicago", sameAs: "https://en.wikipedia.org/wiki/Chicago" },
      { type: "AdministrativeArea", name: "Cook County", sameAs: "https://en.wikipedia.org/wiki/Cook_County,_Illinois" },
    ],
    audienceType: "Chicago and Chicagoland small and midsize businesses — finance trading and derivatives, technology and SaaS, professional services and agencies, restaurants and hospitality, logistics and distribution, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

/* /find-an-accountant/illinois/cities/naperville/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is
 * Naperville's ECONOMY: an affluent DuPage corporate and R&D/tech hub (a long technology
 * lineage — the former Bell Labs/Lucent campus, now a major tech employer — plus
 * corporate offices, professional services, and healthcare). The distinctive accounting
 * is multi-entity corporate, professional-services and SaaS revenue, and R&D; the
 * distinctive Illinois tax item highlighted here is the state's HIGH PROPERTY TAX (among
 * the highest in the U.S.), which weighs on office/HQ operations. A find-replace
 * "Naperville"->"Chicago" reads false (no 10.25% city sales tax or Chicago lease/
 * amusement tax; Naperville is a DuPage corporate/R&D suburb).
 *
 * HONESTY: real facts only; PPRT rates, property-tax assessment/appeal, R&D credits, and
 * filings deferred to the Illinois Dept of Revenue, the DuPage County Assessor, and the
 * CPA/EA. No fabricated stats/counts/clients. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/naperville/",
  slug: "naperville",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Naperville Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "QuickBooks bookkeeping for Naperville, IL — corporate, tech and professional-services in DuPage County, flat tax, PPRT, high property tax. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Naperville" },
  ],
  hero: {
    eyebrow: "Naperville &middot; DuPage County &middot; Illinois",
    heading: "Naperville bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Naperville businesses &mdash; built around the corporate, tech and R&amp;D, and professional-services economy of DuPage County, with Illinois&rsquo; flat income tax, the Personal Property Replacement Tax, and the state&rsquo;s high property tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Naperville &amp; DuPage County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Naperville businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in corporate and professional-services accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Naperville summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Naperville &amp; Illinois tax figures verified against the Illinois Department of Revenue and DuPage County.",
  },
  ctaBand: {
    eyebrow: "Naperville businesses start here",
    heading: "Book a Naperville discovery call.",
    lede: "30 minutes. We review where your books stand and your Naperville context &mdash; multi-entity corporate structure, professional-services and SaaS revenue, the flat income tax and Personal Property Replacement Tax, high property tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=naperville&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Naperville",
  copy: {
    localEyebrow: "Bookkeeping built for how Naperville actually runs",
    areasEyebrow: "Across the city &amp; DuPage County",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Naperville verticals we know",
    servicesEyebrow: "What we do for Naperville businesses",
    faqEyebrow: "Naperville FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=naperville&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Naperville businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Naperville is an affluent DuPage <strong>corporate and R&amp;D/tech</strong> hub &mdash; a long technology lineage and major tech employers, plus corporate offices, <strong>professional services</strong>, and healthcare. The distinctive accounting is <strong>multi-entity corporate</strong> structure, professional-services and <strong>SaaS</strong> revenue, and <strong>R&amp;D</strong>. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, a combined sales tax of <strong>about 7.75%</strong>, and some of the <strong>highest property taxes in the U.S.</strong>, which weigh on office and HQ operations. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Naperville businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Naperville and DuPage County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in corporate, tech, and professional-services accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle multi-entity corporate structures?", a: "Yes &mdash; it&rsquo;s common in Naperville. Corporate groups and franchisors run multiple entities, each with its own books and its own Illinois income-tax and <strong>PPRT</strong> position. We keep the entities reconciled and consistent, with clean <strong>intercompany</strong> entries, so your CPA can consolidate and file accurately and your board and lenders can trust the statements." },
    { q: "What Illinois taxes affect my Naperville books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, a combined sales tax of <strong>about 7.75%</strong>, and some of the <strong>highest property taxes in the U.S.</strong> We track all of it; the IDOR, the county, and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle SaaS and tech companies?", a: "Yes &mdash; Naperville has a deep tech lineage. SaaS and software companies need <a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition, MRR/ARR, and R&amp;D tracking; we keep the books to that standard. The R&amp;D-credit and tax positions stay with your CPA, and where a SaaS product is sold into Chicago, we flag the Chicago lease transaction tax." },
    { q: "Which areas do you serve?", a: "<strong>All of Naperville</strong> &mdash; downtown and the Riverwalk, the corporate and office corridors along I-88 (the Illinois Technology &amp; Research Corridor), and the surrounding DuPage and Will communities &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Naperville is a corporate and R&amp;D suburb &mdash; offices, tech, and professional services &mdash; and that profile, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>multi-entity</strong>: corporate groups, franchisors, and holding structures that need clean <strong>intercompany</strong> entries and consolidation-ready books, plus <strong>professional-services</strong> and <strong>SaaS</strong> revenue recognized correctly and <strong>R&amp;D</strong> tracked. Naperville sits on the I-88 <strong>Illinois Technology &amp; Research Corridor</strong> with a long tech lineage, so software and R&amp;D accounting are common.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, a combined sales tax of <strong>about 7.75%</strong>, and some of the <strong>highest property taxes in the country</strong> &mdash; a real, recurring cost for office and HQ operations that belongs in the books and the forecast. And any SaaS sold into Chicago can trigger the Chicago lease transaction tax. We put a named bookkeeper on your file who keeps multi-entity books clean and the Illinois positions tracked &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Naperville business actually runs &mdash; entities reconciled with clean intercompany, revenue recognized correctly, the flat income tax and PPRT tracked, property tax in the forecast &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Riverwalk", note: "Professional services, retail &amp; hospitality" },
    { name: "I-88 Technology &amp; Research Corridor", note: "Tech, R&amp;D, SaaS &amp; corporate offices" },
    { name: "Corporate &amp; office parks", note: "Corporate HQs, finance &amp; professional services" },
    { name: "Healthcare &amp; medical area", note: "Practices, clinics &amp; healthcare services" },
    { name: "DuPage &amp; Will communities", note: "Small business, professional services &amp; retail" },
    { name: "All of DuPage County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position per entity; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) that owe no regular Illinois income tax. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "High prop tax", desc: "Illinois carries some of the <strong>highest property taxes in the U.S.</strong>, a real recurring cost for office and HQ operations &mdash; plus a combined sales tax of about 7.75% in Naperville. We keep property-tax accruals and the sales-tax position in the books; assessment and appeals stay with your CPA or a property-tax consultant." },
  ],
  taxNote: "Naperville and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue and DuPage County. The income-tax and PPRT rates, property-tax assessments, and local sales-tax components change &mdash; and Naperville spans DuPage and Will counties, so the rate depends on location &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, handle property-tax appeals, advise on R&D-credit or equity-comp tax, or provide legal or tax advice.",

  industries: [
    { label: "Corporate &amp; multi-entity groups", href: "/accounting/industries/professional-services/", note: "intercompany entries, consolidation-ready books, and an income-tax and PPRT position per entity" },
    { label: "Technology &amp; SaaS", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition, MRR/ARR, R&amp;D tracking, and the Chicago lease tax flagged on city sales" },
    { label: "Professional services &amp; consulting", href: "/accounting/industries/professional-services/", note: "project profitability, partner draws, and contractor classification" },
    { label: "Healthcare &amp; medical practices", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Finance &amp; insurance", href: "/accounting/industries/professional-services/", note: "reconciliation discipline, commission accounting, and clean books for partners" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the income-tax and PPRT position tracked per entity and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Multi-entity cleanup", body: "Corporate and franchise books drift when intercompany isn&rsquo;t clean. We get the file CPA-ready &mdash; entities reconciled &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with multi-entity, class, and deferred-revenue structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Lender- &amp; board-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately and a lender or board can trust the statements.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],

  advisoryBody: "Across a corporate group, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your intercompany ties out, your revenue is recognized correctly, your PPRT position is tracked per entity, and your property-tax cost is in the forecast. That judgment is what a named Naperville bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; DuPage County &middot; No tax-filing, property-tax-appeal, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Naperville business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Naperville and DuPage County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in corporate, tech, and professional-services accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle multi-entity and franchise structures?", a: "Yes &mdash; it&rsquo;s common across Naperville and DuPage County. Corporate groups, franchisors, and holding structures run multiple entities, each with its own books and its own Illinois income-tax and PPRT position. We keep the entities reconciled and consistent, with clean intercompany entries, so your CPA can consolidate and file accurately and your board and lenders can rely on the statements." },
    { q: "What Illinois taxes affect my Naperville bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Naperville&rsquo;s combined sales tax is about 7.75% (it spans DuPage and Will counties, so the rate depends on location), and Illinois carries some of the highest property taxes in the country &mdash; a real cost for office and HQ operations. We build all of it into how your books are kept; the IDOR, the county, and your CPA confirm what&rsquo;s due." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners who assume there&rsquo;s no entity-level Illinois tax. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Do you work with tech and SaaS companies?", a: "Yes &mdash; Naperville sits on the I-88 technology corridor with a deep tech lineage. SaaS and software companies need deferred-revenue recognition, clean MRR/ARR, and R&amp;D tracking. We keep the books to that standard; the R&amp;D-credit and tax positions stay with your CPA, and where you sell SaaS into the city of Chicago we flag the Chicago Personal Property Lease Transaction Tax so it isn&rsquo;t missed." },
    { q: "How much does a Naperville bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Multi-entity corporate and SaaS businesses carry more structure (intercompany, deferred revenue), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Naperville QuickBooks file?", a: "Yes &mdash; especially for corporate groups and SaaS businesses whose intercompany, multi-entity, or deferred-revenue books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including reconciling intercompany and rebuilding revenue recognition &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Naperville?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Naperville situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/naperville/",
    name: "Naperville Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Naperville, Illinois businesses — fluent in corporate, tech, and professional-services accounting, Illinois' flat income tax, the Personal Property Replacement Tax, ~7.75% sales tax, and the state's high property tax. Fixed-fee, named bookkeeper.",
    serviceName: "Naperville Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Naperville tax-aware bookkeeping — multi-entity and intercompany structure, professional-services and SaaS revenue recognition, Illinois' flat income tax, the Personal Property Replacement Tax, ~7.75% sales tax, and high property-tax accruals handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns or handle property-tax appeals — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Naperville", sameAs: "https://en.wikipedia.org/wiki/Naperville,_Illinois" },
      { type: "AdministrativeArea", name: "DuPage County", sameAs: "https://en.wikipedia.org/wiki/DuPage_County,_Illinois" },
    ],
    audienceType: "Naperville and DuPage County small and midsize businesses — corporate and multi-entity groups, technology and SaaS, professional services and consulting, healthcare, finance and insurance, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

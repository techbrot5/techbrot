/* /find-an-accountant/florida/cities/jacksonville/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida tax stack is shared (no personal income tax; 5.5% C-corp
 * income tax; 6% sales tax + county surtax) — the un-clonable substance is
 * Jacksonville's ECONOMY: a major LOGISTICS and distribution hub (JAXPORT, rail, and
 * trucking), a large INSURANCE and FINANCIAL-SERVICES back-office center, a significant
 * U.S. NAVY presence (NAS Jacksonville, Naval Station Mayport → defense), and a growing
 * healthcare sector. The distinctive Florida tax item here is the REEMPLOYMENT TAX (the
 * RT-6 employer payroll tax) — fitting a large-employer logistics-and-insurance
 * workforce. A find-replace "Jacksonville"->"Tampa" reads false (Tampa is finance/
 * healthcare/CENTCOM; Jacksonville is JAXPORT logistics + insurance back-office + Navy).
 *
 * HONESTY: real facts only; reemployment-tax rates, corporate income tax, multi-state
 * nexus, and filings deferred to the Florida DOR and the CPA/EA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/jacksonville/",
  slug: "jax",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Jacksonville Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Bookkeeping for Jacksonville (Duval County) — logistics, insurance & Navy contracting, ~7.5% sales tax, reemployment (RT-6) tax. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Jacksonville" },
  ],
  hero: {
    eyebrow: "Jacksonville &middot; Duval County &middot; Florida",
    heading: "Jacksonville bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Jacksonville businesses &mdash; built around the JAXPORT logistics economy, the insurance and financial-services base, and the Navy presence, with Florida&rsquo;s no-income-tax structure, the 7.5% sales tax, and reemployment payroll tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Jacksonville &amp; Northeast Florida",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Jacksonville businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in logistics, insurance, and Navy-contracting accounting and Florida&rsquo;s sales-tax and payroll-tax structure. The full Jacksonville summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Jacksonville &amp; Florida tax figures verified against the Florida Department of Revenue and Duval County.",
  },
  ctaBand: {
    eyebrow: "Jacksonville businesses start here",
    heading: "Book a Jacksonville discovery call.",
    lede: "30 minutes. We review where your books stand and your Jacksonville context &mdash; freight and inventory costing, insurance back-office reconciliation, Navy-contract cost accounting, the 7.5% sales tax, reemployment tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=jacksonville&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Jacksonville",
  copy: {
    localEyebrow: "Bookkeeping built for how Jacksonville actually runs",
    areasEyebrow: "Across the city &amp; Northeast Florida",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "Jacksonville verticals we know",
    servicesEyebrow: "What we do for Jacksonville businesses",
    faqEyebrow: "Jacksonville FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=jacksonville&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Jacksonville businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (C-corporations pay a 5.5% corporate income tax; pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is Jacksonville&rsquo;s economy and the Florida tax stack. Jacksonville is a major <strong>logistics and distribution</strong> hub (<strong>JAXPORT</strong>, rail, and trucking), a large <strong>insurance and financial-services</strong> back-office center, home to a significant <strong>U.S. Navy</strong> presence (NAS Jacksonville, Mayport), and a growing healthcare sector. The distinctive accounting is freight and inventory costing, insurance/finance reconciliation, and government-contract cost accounting &mdash; for a large-employer workforce where the <strong>reemployment (RT-6) payroll tax</strong> matters. The Florida stack: the <strong>6% sales tax plus the Duval surtax (about 7.5%)</strong>, reemployment tax, the 5.5% corporate income tax on C-corps, and the annual tangible personal property return. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Jacksonville businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Jacksonville and Northeast Florida businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in logistics, insurance, and Navy-contracting accounting and Florida&rsquo;s sales-tax and payroll-tax structure." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt). There is also <strong>6% sales tax plus the Duval surtax</strong> (about 7.5%), the employer-paid <strong>reemployment tax</strong>, and the annual <strong>tangible personal property</strong> return. We track all of it; the Florida DOR and your CPA confirm what&rsquo;s due." },
    { q: "What is Florida's reemployment tax?", a: "Florida&rsquo;s <strong>reemployment tax</strong> (the RT-6 employer payroll tax, formerly the unemployment tax) is paid by employers on a portion of each employee&rsquo;s wages, at a rate that varies with the employer&rsquo;s experience. For Jacksonville&rsquo;s large logistics and insurance employers, it&rsquo;s a real payroll-cost line. We keep payroll and the reemployment-tax liability clean in QuickBooks; the rate and filing stay with the Florida DOR and your CPA or payroll provider." },
    { q: "Do you handle logistics and port businesses?", a: "Yes &mdash; it&rsquo;s a core Jacksonville need given JAXPORT. Logistics, freight, distribution, and trucking businesses need <strong>freight and inventory costing</strong>, fixed-asset (truck and equipment) tracking, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a> awareness. We keep the books to that standard; the tax filings stay with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Jacksonville</strong> &mdash; Downtown and the Southbank, the port and Northside logistics corridor, the Southside and Deerwood business district, and the beaches &mdash; plus the wider Northeast Florida region, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Jacksonville is a port, insurance, and Navy town &mdash; a large-employer, logistics-driven economy &mdash; and that, on top of Florida&rsquo;s tax stack, is what shapes its books. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work spans <strong>logistics and distribution</strong> built around <strong>JAXPORT</strong>, rail, and trucking (freight and inventory costing, fixed-asset fleets, multi-state nexus); a large <strong>insurance and financial-services</strong> back-office sector (reconciliation discipline and controls); a significant <strong>U.S. Navy</strong> and defense-contracting presence (contract cost accounting); and growing healthcare.",
    "The Florida tax stack still has to be right: <strong>6% sales tax plus the Duval surtax</strong> (about 7.5%), the employer-paid <strong>reemployment (RT-6) tax</strong> &mdash; a real payroll cost for large logistics and insurance workforces &mdash; the <strong>5.5% corporate income tax</strong> on C-corps, and the annual <strong>tangible personal property</strong> return on equipment and fleets. A generic bookkeeper rarely costs freight correctly or tracks the reemployment-tax liability; we put a named bookkeeper on your file who does &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Jacksonville business actually runs &mdash; freight and inventory costed, fleets tracked, payroll and reemployment tax clean, insurance and contract reconciliations done, sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Southbank", note: "Finance, insurance &amp; professional services" },
    { name: "Port &amp; Northside logistics corridor", note: "JAXPORT, freight, distribution &amp; trucking" },
    { name: "Southside &amp; Deerwood", note: "Insurance, back-office &amp; corporate" },
    { name: "Navy bases &amp; Mayport", note: "Defense contractors &amp; services" },
    { name: "The Beaches &amp; suburbs", note: "Small business, healthcare &amp; professional services" },
    { name: "All of Northeast Florida", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "~7.5%", desc: "Jacksonville combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Duval County discretionary surtax (about 7.5% in the county), administered by the Florida DOR. Tracked and reconciled in QuickBooks, including use tax on equipment and fleets." },
    { figure: "RT-6", desc: "Florida <strong>reemployment tax</strong> &mdash; the RT-6 employer payroll tax (formerly unemployment tax), paid by employers on a portion of wages at an experience-based rate. A real payroll cost for large logistics and insurance workforces. We keep payroll and the liability clean; the rate and filing stay with the Florida DOR and your CPA/payroll provider." },
  ],
  taxNote: "Jacksonville and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Duval County. The corporate-income-tax rate, county surtax, reemployment-tax rates and wage base, and TPP exemption change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, or reemployment tax returns, handle DCAA rate submissions, or provide legal or tax advice.",

  industries: [
    { label: "Logistics, distribution &amp; the port", href: "/accounting/industries/ecommerce/", note: "JAXPORT operators &mdash; freight and inventory costing, fleet/fixed-asset tracking, and multi-state nexus" },
    { label: "Trucking &amp; transportation", href: "/accounting/industries/ecommerce/", note: "per-mile and fuel costing, IFTA-aware records, and equipment depreciation" },
    { label: "Insurance &amp; financial services", href: "/accounting/industries/professional-services/", note: "back-office reconciliation, commission accounting, controls, and clean books for regulators" },
    { label: "Defense &amp; Navy contractors", href: "/accounting/industries/professional-services/", note: "contract cost accounting, job costing, and DCAA-aware records where applicable" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with freight and fleets costed, payroll and reemployment tax clean, and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Logistics / multi-entity cleanup", body: "Freight, inventory, and fleet books drift fast at volume. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with freight, inventory, fleet, and payroll structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; payroll-tax-ready books", body: "Books structured so your CPA can file Florida sales tax and reemployment tax accurately, with fleets and equipment ready for the TPP return.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "At freight volume or across a large workforce, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your freight margins are real, your fleet is tracked, your reemployment-tax cost is clean, and your sales tax is handled. That judgment is what a named Jacksonville bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Duval County &middot; No tax-filing, DCAA-rate, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Jacksonville business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Jacksonville and Northeast Florida, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in logistics, insurance, and Navy-contracting accounting and Florida&rsquo;s sales-tax and payroll-tax structure." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt. There is also 6% sales tax plus the Duval surtax (about 7.5%), the employer-paid reemployment tax, and the annual tangible personal property return. We track all of it; the Florida DOR and your CPA confirm what&rsquo;s due." },
    { q: "What is Florida's reemployment tax (RT-6)?", a: "It&rsquo;s Florida&rsquo;s employer payroll tax for reemployment assistance &mdash; formerly the unemployment tax &mdash; paid by employers on a portion of each employee&rsquo;s wages at a rate that varies with the employer&rsquo;s experience rating. For Jacksonville&rsquo;s large logistics and insurance employers it&rsquo;s a meaningful payroll cost. We keep payroll and the reemployment-tax liability clean in QuickBooks; the rate, wage base, and RT-6 filing stay with the Florida DOR and your CPA or payroll provider." },
    { q: "Do you handle logistics, trucking, and port businesses?", a: "Yes &mdash; it&rsquo;s a core Jacksonville engagement given JAXPORT. Logistics, freight, distribution, and trucking businesses need freight and inventory costing, fleet and equipment depreciation, per-mile and fuel costing with IFTA-aware records for trucking, and multi-state nexus awareness. We keep the books to that standard so margins are real; the tax filings stay with your CPA, whom we coordinate with." },
    { q: "Do you work with insurance and financial-services back-offices?", a: "Yes &mdash; Jacksonville is a large insurance and financial-services center. These operations need disciplined reconciliation, commission accounting, and clean controls and books that partners and regulators can rely on. We keep the books to that standard; the tax and regulatory filings stay with your CPA and compliance team, whom we coordinate with." },
    { q: "How much does a Jacksonville bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Logistics, trucking, and large-workforce businesses carry more complexity (freight, fleets, payroll), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Jacksonville QuickBooks file?", a: "Yes &mdash; especially for logistics, trucking, and distribution businesses whose freight, inventory, or fleet books drifted out of balance at volume. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding freight costing and the fixed-asset/fleet register &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Jacksonville?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Jacksonville situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/jacksonville/",
    name: "Jacksonville Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Jacksonville businesses — fluent in logistics, insurance, and Navy-contracting accounting, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), ~7.5% sales tax, and the reemployment (RT-6) payroll tax. Fixed-fee, named bookkeeper.",
    serviceName: "Jacksonville Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Jacksonville tax-aware bookkeeping — JAXPORT freight and inventory costing, fleet tracking, insurance back-office and contract reconciliation, Florida sales tax (~7.5%), the reemployment (RT-6) payroll tax, and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Jacksonville", sameAs: "https://en.wikipedia.org/wiki/Jacksonville,_Florida" },
      { type: "AdministrativeArea", name: "Duval County", sameAs: "https://en.wikipedia.org/wiki/Duval_County,_Florida" },
    ],
    audienceType: "Jacksonville and Northeast Florida small and midsize businesses — logistics distribution and the port, trucking and transportation, insurance and financial services, defense and Navy contractors, healthcare, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

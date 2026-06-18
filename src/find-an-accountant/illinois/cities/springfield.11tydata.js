/* /find-an-accountant/illinois/cities/springfield/ — IL CITY CHILD (growth phase, last IL city).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Springfield's
 * ECONOMY: it is the ILLINOIS STATE CAPITAL (Sangamon County), so the dominant economy is
 * STATE GOVERNMENT and the businesses, contractors, vendors, and grant-funded nonprofits
 * that serve the state. Add a notable INSURANCE cluster (insurers headquartered there),
 * major HEALTHCARE systems and a medical school, and central-Illinois AGRICULTURE /
 * agribusiness. The distinctive accounting is government-contract and GRANT accounting
 * (cost tracking, compliance-ready records), insurance back-office, healthcare practice
 * bookkeeping, and farm/ag bookkeeping. A find-replace "Rockford"->"Springfield" reads
 * false (Rockford is aerospace machining + air cargo; Springfield is capital government +
 * insurance + healthcare + ag).
 *
 * HONESTY: real facts only. We do NOT assert a specific Springfield combined sales-tax
 * percentage — described as the 6.25% state rate plus Springfield and Sangamon County
 * home-rule add-ons, with the exact figure deferred to the IDOR / City of Springfield /
 * your CPA. PPRT rates, the PTE election, and all filings deferred to the Illinois Dept of
 * Revenue and the CPA/EA. No fabricated stats, employer names, or invented figures. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/springfield/",
  slug: "springfield",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Springfield Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Springfield, IL businesses — fluent in the state-capital economy (government contractors & grant-funded nonprofits), insurance, healthcare & central-Illinois agriculture, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Springfield" },
  ],
  hero: {
    eyebrow: "Springfield &middot; Sangamon County &middot; Illinois",
    heading: "Springfield bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Springfield businesses &mdash; built around the state-capital economy of government contractors and grant-funded nonprofits, the insurance cluster, healthcare, and central-Illinois agriculture, with Illinois&rsquo; flat income tax and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Springfield &amp; Sangamon County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Springfield businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in government-contract and grant accounting, insurance, healthcare, and ag, plus Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Springfield summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Springfield &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Springfield businesses start here",
    heading: "Book a Springfield discovery call.",
    lede: "30 minutes. We review where your books stand and your Springfield context &mdash; government-contract and grant cost tracking, insurance and healthcare back-office, ag bookkeeping, the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=springfield&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Springfield",
  copy: {
    localEyebrow: "Bookkeeping built for how Springfield actually runs",
    areasEyebrow: "Across the capital &amp; Sangamon County",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Springfield verticals we know",
    servicesEyebrow: "What we do for Springfield businesses",
    faqEyebrow: "Springfield FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=springfield&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Springfield businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Springfield is the <strong>Illinois state capital</strong> (Sangamon County), so its dominant economy is <strong>state government</strong> &mdash; and the businesses that serve it: government vendors and contractors, grant-funded nonprofits, and professional and consulting firms billing the state. It is also a notable <strong>insurance</strong> hub, anchored by major <strong>healthcare</strong> systems and a medical school, and surrounded by central-Illinois <strong>agriculture</strong> and agribusiness. The distinctive accounting is <strong>government-contract and grant accounting</strong> &mdash; cost tracking and compliance-ready records &mdash; plus insurance back-office, healthcare practice bookkeeping, and farm/ag books. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, the <strong>9.5% combined C-corp rate</strong>, the permanent <strong>PTE election</strong>, and sales tax of the <strong>6.25% state rate plus Springfield and Sangamon County home-rule add-ons</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files and makes the PTE election. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Springfield businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Springfield and Sangamon County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in government-contract and grant accounting, insurance, healthcare, and central-Illinois ag, plus Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle government-contract and grant accounting?", a: "Yes &mdash; it&rsquo;s the defining Springfield need, because the state capital economy runs on businesses that serve the state. Government vendors, contractors, and grant-funded nonprofits need <strong>cost tracking by contract or grant</strong>, clean fund and class structure, and <strong>compliance-ready records</strong> that stand up to a funder or auditor review. We keep the books to that standard; the filings and any audit representation stay with your CPA." },
    { q: "What Illinois taxes affect my Springfield books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate, a <strong>9.5% combined C-corp rate</strong>), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, the permanent <strong>PTE election</strong>, and sales tax of the <strong>6.25% state rate plus Springfield and Sangamon County home-rule add-ons</strong>, administered by the Illinois Department of Revenue. We track all of it; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due and make the PTE election." },
    { q: "Do you work with Springfield insurance, healthcare, and ag businesses?", a: "Yes. Springfield is an <strong>insurance</strong> hub with major <strong>healthcare</strong> systems and is surrounded by central-Illinois <strong>agriculture</strong>. Insurance agencies and carrier back-offices need commission and reconciliation discipline; provider groups need practice bookkeeping and payer reconciliation; farms and ag-services need farm bookkeeping and equipment depreciation. We keep all of it CPA-ready." },
    { q: "Which areas do you serve?", a: "<strong>All of Springfield</strong> &mdash; downtown and the Capitol Complex area, the medical district, the insurance and professional-services corridors, and the surrounding Sangamon County communities (Chatham, Rochester, Sherman, Riverton) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Springfield is the <strong>Illinois state capital</strong> &mdash; state government is the dominant economy &mdash; and the businesses that serve the state, along with insurance, healthcare, and central-Illinois agriculture, are what shape its books on top of the Illinois tax stack.",
    "The defining work is <strong>government-contract and grant accounting</strong>. Government vendors, contractors, and grant-funded nonprofits that bill or are funded by the state need <strong>cost tracking by contract or grant</strong>, clean fund and class structure, and <strong>compliance-ready records</strong> that hold up to a funder or auditor review. Professional and consulting firms billing the state need the same discipline. On top of that, Springfield is an <strong>insurance</strong> hub (carrier and agency back-office), is anchored by major <strong>healthcare</strong> systems and a medical school, and is surrounded by central-Illinois <strong>agriculture</strong> and agribusiness.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate, a <strong>9.5% combined C-corp rate</strong>), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, the permanent <strong>PTE election</strong>, and sales tax of the <strong>6.25% state rate plus Springfield and Sangamon County home-rule add-ons</strong>. A general bookkeeper rarely tracks costs to a grant or contract correctly or keeps records to a funder&rsquo;s standard; we put a named bookkeeper on your file who does &mdash; with the filings and the PTE election left to your CPA.",
    "The result: books that reflect how a Springfield business actually runs &mdash; contract and grant costs tracked, fund and class structure clean, insurance and healthcare back-office reconciled, ag books accurate, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Capitol Complex", note: "State agencies, contractors, nonprofits &amp; professional services" },
    { name: "Medical district", note: "Hospital systems, provider groups &amp; clinics" },
    { name: "Insurance &amp; professional corridors", note: "Insurance carriers, agencies &amp; consulting firms" },
    { name: "Sangamon County farmland", note: "Grain, farms &amp; ag-services businesses" },
    { name: "Chatham, Rochester, Sherman &amp; Riverton", note: "Small business, trades &amp; ag in the surrounding county" },
    { name: "All of Sangamon County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT + PTE", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) that owe no regular Illinois income tax &mdash; plus the <strong>9.5% combined C-corp rate</strong> and the permanent <strong>PTE election</strong>. We track the positions; the rates, the election, and filing stay with the IDOR and your CPA." },
    { figure: "6.25% + add-ons", desc: "Sales &amp; use tax is the <strong>6.25% state rate plus Springfield and Sangamon County home-rule add-ons</strong>, administered by the IDOR. We track exempt vs taxable sales and reconcile the position; the exact combined Springfield rate and what&rsquo;s due stay with the IDOR, the City of Springfield, and your CPA." },
  ],
  taxNote: "Springfield and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. We do not assert a specific Springfield combined sales-tax percentage &mdash; the rate is the 6.25% state component plus Springfield and Sangamon County home-rule add-ons; confirm the exact combined figure with the Illinois Department of Revenue and the City of Springfield. The income-tax, PPRT, and PTE rules change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, make the PTE election, or provide legal or tax advice.",

  industries: [
    { label: "Government contractors &amp; vendors", href: "/accounting/industries/professional-services/", note: "cost tracking by contract, clean fund/class structure, and compliance-ready records for state work" },
    { label: "Grant-funded nonprofits", href: "/accounting/industries/professional-services/", note: "fund accounting, grant cost tracking, and funder-ready records &mdash; filings and audits stay with your CPA" },
    { label: "Insurance carriers &amp; agencies", href: "/accounting/industries/professional-services/", note: "commission tracking, premium reconciliation, and back-office bookkeeping" },
    { label: "Healthcare &amp; provider groups", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Agriculture &amp; agribusiness", href: "/accounting/industries/professional-services/", note: "farm bookkeeping, grain and input costing, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with contract and grant costs tracked, fund/class structure clean, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Grant / contract cleanup", body: "Grant and contract cost tracking, fund structure, and records drift when the books aren&rsquo;t right. We rebuild them to a CPA- and funder-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with fund, class, and contract/grant cost structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately and make the PTE election, with home-rule sales tax tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "For a Springfield business that serves the state, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your costs are tracked to the right contract or grant, your fund and class structure stands up to a funder review, and your PPRT and PTE positions are clean. That judgment is what a named Springfield bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, PTE-election, grant-audit, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Springfield business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Springfield and Sangamon County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in government-contract and grant accounting, insurance, healthcare, and central-Illinois ag, plus Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle government-contract and grant accounting?", a: "Yes &mdash; it&rsquo;s the defining Springfield engagement, because the state capital economy runs on businesses that serve the state. Government vendors, contractors, and grant-funded nonprofits need cost tracking by contract or grant, clean fund and class structure, and compliance-ready records that hold up to a funder or auditor review. We keep the books to that standard in QuickBooks; the filings, the grant reporting your CPA prepares, and any audit representation stay with your CPA and specialists, whom we coordinate with." },
    { q: "What Illinois taxes affect my Springfield bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate, a 9.5% combined C-corp rate) and the Personal Property Replacement Tax on corporations and pass-throughs, plus the permanent PTE election. Springfield sales tax is the 6.25% state rate plus Springfield and Sangamon County home-rule add-ons. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due and make the PTE election." },
    { q: "What is the Illinois sales-tax rate in Springfield?", a: "Illinois sales and use tax starts at the 6.25% state rate, and Springfield and Sangamon County add home-rule components on top of it, so the combined rate is higher than the state base. We don&rsquo;t assert a specific combined figure here &mdash; rates change and depend on the exact location &mdash; so confirm the current combined Springfield rate with the Illinois Department of Revenue and the City of Springfield. We track exempt vs taxable sales and reconcile the position so your CPA can file accurately." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Do you work with Springfield insurance, healthcare, and ag businesses?", a: "Yes. Springfield is an insurance hub with major healthcare systems and a medical school, and it sits in central-Illinois farm country. Insurance agencies and carrier back-offices need commission tracking and premium reconciliation; provider groups need practice bookkeeping and payer reconciliation; farms and ag-services need farm bookkeeping, input and grain costing, and equipment depreciation. We keep all of it CPA-ready; the tax positions stay with your CPA." },
    { q: "How much does a Springfield bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Government-contract and grant-funded work carries more complexity (cost tracking, fund and class structure, compliance-ready records), which we scope transparently before any work begins." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent bookkeeping and QuickBooks ProAdvisor firm &mdash; we keep your books, track and reconcile them, and hand your CPA CPA-ready records. We do not file Illinois income, sales, or PPRT returns, make the PTE election, determine exemption eligibility, or represent you before the Illinois Department of Revenue. Your CPA or EA computes, elects, and files; we coordinate closely with them." },
    { q: "Can you clean up a messy Springfield QuickBooks file?", a: "Yes &mdash; especially for government vendors and grant-funded nonprofits whose contract and grant cost tracking or fund structure drifted out of balance. We scope a one-time cleanup or catch-up to a CPA- and funder-ready standard &mdash; including rebuilding fund and class structure and contract/grant cost tracking &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Springfield?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Springfield situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/springfield/",
    name: "Springfield Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Springfield, Illinois businesses — fluent in the state-capital economy (government contractors and grant-funded nonprofits), insurance, healthcare, and central-Illinois agriculture, the flat income tax, the Personal Property Replacement Tax, the PTE election, and home-rule sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Springfield Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Springfield tax-aware bookkeeping — government-contract and grant cost tracking with compliance-ready fund and class structure, insurance and healthcare back-office, central-Illinois ag bookkeeping, Illinois' flat income tax, the Personal Property Replacement Tax, the 9.5% combined C-corp rate, the permanent PTE election, and home-rule sales tax (6.25% state plus Springfield and Sangamon County add-ons) handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, or determine exemption eligibility — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Springfield", sameAs: "https://en.wikipedia.org/wiki/Springfield,_Illinois" },
      { type: "AdministrativeArea", name: "Sangamon County", sameAs: "https://en.wikipedia.org/wiki/Sangamon_County,_Illinois" },
    ],
    audienceType: "Springfield and Sangamon County small and midsize businesses — state-government contractors and vendors, grant-funded nonprofits, insurance carriers and agencies, healthcare and provider groups, central-Illinois agriculture and agribusiness, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

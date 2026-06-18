/* /find-an-accountant/illinois/cities/bloomington/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Bloomington-
 * Normal's ECONOMY: an INSURANCE and EV-MANUFACTURING twin-city economy. State Farm
 * Insurance is HEADQUARTERED in Bloomington (a very large insurance employer) and Country
 * Financial is also based there, making INSURANCE the anchor industry; Rivian's electric-
 * vehicle plant is in Normal (EV / advanced manufacturing); Illinois State University in
 * Normal anchors a higher-education / student economy; plus central-Illinois agribusiness.
 * The distinctive accounting is insurance-agency and insurance-adjacent bookkeeping
 * (commission/contingency income, back-office), EV/advanced-manufacturing supplier costing
 * (inventory/WIP, the Illinois MM&E exemption, supply-chain), university-adjacent small
 * business and student housing (records only, never holding tenant funds), and agribusiness.
 * A find-replace "Rockford"->"Bloomington" reads false (Rockford is aerospace machining +
 * air cargo; Bloomington's anchor is insurance + EV manufacturing).
 *
 * HONESTY: real facts only. State Farm / Country Financial / Rivian / ISU are named ONLY as
 * local-economy examples, NEVER as our clients. No asserted Bloomington combined sales-tax %
 * (deferred to IDOR / city / CPA). Student-rental work is records-only — we never hold or
 * disburse tenant funds. PPRT rates, the MM&E exemption, the PTE election, and all filings
 * deferred to the Illinois Dept of Revenue and the CPA/EA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/bloomington/",
  slug: "bloomington",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Bloomington Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Bloomington-Normal, IL businesses — fluent in insurance-agency, EV and advanced-manufacturing, and Illinois State University-adjacent accounting, the Illinois manufacturing machinery exemption, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Bloomington" },
  ],
  hero: {
    eyebrow: "Bloomington &middot; McLean County &middot; Illinois",
    heading: "Bloomington bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Bloomington-Normal businesses &mdash; built around the insurance-agency economy, the EV and advanced-manufacturing base in Normal, and the Illinois State University student economy, with Illinois&rsquo; flat income tax, the manufacturing machinery exemption, and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Bloomington-Normal &amp; McLean County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Bloomington-Normal businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in insurance-agency and EV/advanced-manufacturing accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Bloomington summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Bloomington &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Bloomington businesses start here",
    heading: "Book a Bloomington discovery call.",
    lede: "30 minutes. We review where your books stand and your Bloomington-Normal context &mdash; insurance-agency commission and contingency income, EV-supplier inventory and the machinery exemption, university-adjacent small business, the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=bloomington&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Bloomington",
  copy: {
    localEyebrow: "Bookkeeping built for how Bloomington-Normal actually runs",
    areasEyebrow: "Across the twin cities &amp; McLean County",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Bloomington-Normal verticals we know",
    servicesEyebrow: "What we do for Bloomington businesses",
    faqEyebrow: "Bloomington FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=bloomington&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Bloomington-Normal businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Bloomington and its twin city Normal run on an <strong>insurance and EV-manufacturing</strong> economy &mdash; insurance is the anchor (State Farm is headquartered in Bloomington and Country Financial is based there, supporting a deep base of independent agencies and financial-services firms), Rivian&rsquo;s electric-vehicle plant in Normal anchors EV and advanced manufacturing, and Illinois State University drives a student economy &mdash; plus central-Illinois agribusiness. The distinctive accounting is <strong>insurance-agency bookkeeping</strong> (commission and contingency income, back-office), <strong>EV and advanced-manufacturing supplier</strong> costing (inventory and work-in-process, supply chain, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) exemption</strong>), and university-adjacent small business including student housing (records only &mdash; we never hold tenant funds). The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, and a combined sales tax of <strong>6.25% state plus McLean County and home-rule add-ons</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Bloomington-Normal businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Bloomington, Normal, and McLean County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in insurance-agency, EV and advanced-manufacturing, and university-adjacent accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle insurance-agency accounting?", a: "Yes &mdash; it&rsquo;s the defining Bloomington need. The twin cities are an insurance economy (State Farm is headquartered in Bloomington and Country Financial is based there), so independent agencies and financial-services firms are everywhere. Agency books need <strong>commission and contingency income</strong> tracked accurately, carrier statements reconciled, and clean back-office bookkeeping. We keep the books to that standard; the tax positions stay with your CPA." },
    { q: "Do you handle EV and advanced-manufacturing supplier accounting?", a: "Yes. With Rivian&rsquo;s electric-vehicle plant in Normal, the area has a growing base of EV and advanced-manufacturing suppliers and contractors. They need <strong>inventory and work-in-process tracking</strong>, job and process costing, supply-chain records, and the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> applied to qualifying equipment. We keep the books to that standard; eligibility determinations stay with your CPA." },
    { q: "What Illinois taxes affect my Bloomington books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, and sales tax of <strong>6.25% state plus McLean County and home-rule add-ons</strong>, administered by the Illinois Department of Revenue &mdash; with the manufacturing machinery exemption available on qualifying equipment. We track all of it; the IDOR&rsquo;s rules and your CPA confirm the exact local rate and what&rsquo;s due." },
    { q: "Which areas do you serve?", a: "<strong>All of Bloomington-Normal</strong> &mdash; downtown Bloomington and the insurance and financial-services corridor, uptown Normal and the Illinois State University area, the EV and advanced-manufacturing parks, and the surrounding McLean County agribusiness communities &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Bloomington and its twin city Normal are an <strong>insurance and EV-manufacturing</strong> economy &mdash; insurance is the anchor, EV and advanced manufacturing is growing fast in Normal, and Illinois State University drives a student economy &mdash; and that mix, on top of the Illinois tax stack, is what shapes the books.",
    "The defining work is <strong>insurance-agency and insurance-adjacent</strong> bookkeeping. The twin cities are a major insurance center (State Farm is headquartered in Bloomington and Country Financial is based there), so independent agencies and financial-services firms are a core client base. Agency books need <strong>commission and contingency income</strong> tracked correctly, carrier statements reconciled, and clean back-office records. Alongside it, Rivian&rsquo;s electric-vehicle plant in Normal anchors a growing base of <strong>EV and advanced-manufacturing suppliers</strong> who need inventory, work-in-process, supply-chain records, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) exemption</strong>. Illinois State University adds <strong>university-adjacent small business</strong> and student housing, and central-Illinois agribusiness rounds it out.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, and a combined sales tax of <strong>6.25% state plus McLean County and home-rule add-ons</strong>. A general bookkeeper rarely tracks agency contingency income correctly or claims the machinery exemption on a supplier&rsquo;s equipment; we put a named bookkeeper on your file who does &mdash; with the filings and the exact local rate left to your CPA and the IDOR.",
    "The result: books that reflect how a Bloomington-Normal business actually runs &mdash; agency commissions and contingencies tracked, supplier inventory and WIP accurate, the machinery exemption claimed, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown Bloomington", note: "Insurance, financial services, professional services &amp; small business" },
    { name: "Insurance &amp; financial-services corridor", note: "Independent agencies, brokerages &amp; back-office firms" },
    { name: "Uptown Normal &amp; the ISU area", note: "University-adjacent small business, retail &amp; student housing" },
    { name: "EV &amp; advanced-manufacturing parks", note: "EV and supplier manufacturing, fabrication &amp; assembly" },
    { name: "McLean County &amp; central-Illinois farm country", note: "Agribusiness, grain, trades &amp; small business" },
    { name: "All of Bloomington-Normal &amp; McLean County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations (2.5% for C-corps) and pass-through entities (1.5% for partnerships and S-corps), so even pass-throughs that owe no regular Illinois income tax still owe PPRT. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "MM&amp;E + 6.25% + add-ons", desc: "Sales &amp; use tax starts at the 6.25% Illinois state rate, with McLean County and home-rule add-ons on top &mdash; administered by the IDOR &mdash; and the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> on qualifying equipment for EV and advanced-manufacturing suppliers. We track exempt vs taxable purchases; the exact combined rate and eligibility stay with the IDOR, the city, and your CPA." },
  ],
  taxNote: "Bloomington and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, the MM&E exemption rules, and the combined local sales-tax rate (state plus McLean County and home-rule add-ons) change &mdash; confirm any specific figure with the IDOR, the city, or your CPA before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, make the Illinois PTE election, determine MM&E exemption eligibility, hold or disburse tenant funds, or provide legal or tax advice.",

  industries: [
    { label: "Insurance agencies &amp; financial services", href: "/accounting/industries/professional-services/", note: "commission and contingency income, carrier-statement reconciliation, and clean agency back-office bookkeeping" },
    { label: "EV &amp; advanced manufacturing", href: "/accounting/industries/manufacturing/", note: "supplier inventory and work-in-process, job and process costing, supply chain, and the Illinois machinery exemption" },
    { label: "University-adjacent small business", href: "/accounting/industries/restaurant/", note: "retail, food service, and campus-area businesses serving the Illinois State University community" },
    { label: "Student housing &amp; real estate", href: "/accounting/industries/real-estate/", note: "investor and property-manager ledgers and multi-entity books &mdash; records only; we never hold or disburse tenant funds" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Agribusiness &amp; trades", href: "/accounting/industries/professional-services/", note: "grain, farm-service, and trade-business bookkeeping with equipment depreciation and seasonal cash flow" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with agency commissions and contingencies tracked, supplier inventory and WIP costed, the machinery exemption claimed, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Agency &amp; manufacturing cleanup", body: "Commission and contingency income, job costing, WIP, or inventory drift when the books aren&rsquo;t right. We rebuild them to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with agency, job-costing, inventory, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately, with the manufacturing exemption tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "In an insurance agency, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your commission and contingency income is tracked accurately, your carrier statements reconcile, and (for an EV supplier) your WIP and machinery exemption are right and your PPRT position is clean. That judgment is what a named Bloomington bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, PTE-election, exemption-eligibility, fund-holding, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Bloomington business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Bloomington, Normal, and McLean County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in insurance-agency, EV and advanced-manufacturing, and university-adjacent accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle insurance-agency accounting?", a: "Yes &mdash; it&rsquo;s the defining Bloomington-Normal engagement. The twin cities are a major insurance center (State Farm is headquartered in Bloomington and Country Financial is based there), so independent agencies and financial-services firms are a core client base. Agency books need commission and contingency income tracked accurately, carrier statements reconciled, and clean back-office records. We keep the books to that standard in QuickBooks; the tax positions stay with your CPA, whom we coordinate with. We mention State Farm and Country Financial only to describe the local economy &mdash; they are not our clients." },
    { q: "Do you handle EV and advanced-manufacturing supplier accounting?", a: "Yes. Rivian&rsquo;s electric-vehicle plant in Normal anchors a growing base of EV and advanced-manufacturing suppliers and contractors, who need inventory and work-in-process tracking, job and process costing, supply-chain records, and the Illinois manufacturing machinery & equipment exemption applied to qualifying equipment. We keep the books to that standard; the exemption-eligibility determination stays with your CPA. We name Rivian only as a local-economy example &mdash; not as a client." },
    { q: "What Illinois taxes affect my Bloomington bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Bloomington sales tax starts at the 6.25% state rate with McLean County and home-rule add-ons on top, and the manufacturing machinery & equipment exemption is available on qualifying equipment. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm the exact local rate and what&rsquo;s due." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; 2.5% for C-corporations and 1.5% for partnerships, S-corporations, and other pass-throughs &mdash; so even pass-through owners who owe no regular Illinois income tax still owe PPRT. It commonly surprises agency and small-business owners. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Do you work with Illinois State University-adjacent businesses and student housing?", a: "Yes. Normal&rsquo;s economy includes retail, food service, and campus-area businesses serving the Illinois State University community, plus student-housing investors and managers. For student housing we keep the books &mdash; investor and property-manager ledgers, multi-entity records &mdash; on a records-only basis; we never hold or disburse tenant or security-deposit funds. The IDOR&rsquo;s rules and your CPA handle the filings." },
    { q: "What is the Illinois manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying manufacturing machinery and equipment from sales and use tax &mdash; relevant for Normal&rsquo;s EV and advanced-manufacturing suppliers buying production equipment. To claim it, your books have to separate exempt purchases from taxable ones. We track that split so the exemption is captured and you don&rsquo;t over-pay; the eligibility determination stays with your CPA, whom we coordinate with." },
    { q: "How much does a Bloomington bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Insurance agencies and manufacturing suppliers carry more complexity (commission and contingency income, job costing, WIP, inventory, exemptions), which we scope transparently before any work begins." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot keeps your books, tracks, and reconciles &mdash; including the flat income tax, PPRT, sales tax, and the machinery exemption &mdash; and hands your CPA CPA-ready statements. Your CPA or EA and the Illinois Department of Revenue compute, elect, and file; we do not file Illinois income, sales, or PPRT returns, make the Illinois PTE election, determine exemption eligibility, or represent you. We coordinate directly with your CPA." },
    { q: "How do we get started in Bloomington?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Bloomington-Normal situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/bloomington/",
    name: "Bloomington Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Bloomington-Normal, Illinois businesses — fluent in insurance-agency, EV and advanced-manufacturing, and Illinois State University-adjacent accounting, the Illinois manufacturing machinery exemption, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee, named bookkeeper.",
    serviceName: "Bloomington Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Bloomington-Normal tax-aware bookkeeping — insurance-agency commission and contingency income, EV and advanced-manufacturing supplier inventory and WIP with the manufacturing machinery & equipment exemption, university-adjacent small business and student housing (records only), agribusiness, Illinois' flat income tax, and the Personal Property Replacement Tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, determine exemption eligibility, or hold tenant funds — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Bloomington", sameAs: "https://en.wikipedia.org/wiki/Bloomington,_Illinois" },
      { type: "AdministrativeArea", name: "McLean County", sameAs: "https://en.wikipedia.org/wiki/McLean_County,_Illinois" },
    ],
    audienceType: "Bloomington-Normal and McLean County small and midsize businesses — insurance agencies and financial services, EV and advanced-manufacturing suppliers, university-adjacent small business, student housing and real estate, healthcare, and agribusiness",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

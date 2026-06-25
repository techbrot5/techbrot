/* /find-an-accountant/illinois/cities/rockford/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Rockford's
 * ECONOMY: a historic AEROSPACE and PRECISION-MACHINING / machine-tool manufacturing hub
 * (a deep aerospace-components and metalworking base), plus a fast-growing AIR-CARGO
 * operation at Chicago Rockford International (one of the busiest U.S. cargo airports) and
 * a large healthcare sector. The distinctive accounting is aerospace/manufacturing
 * job-and-process costing, inventory/COGS, and the Illinois MANUFACTURING MACHINERY &
 * EQUIPMENT exemption; the air-cargo base adds logistics. A find-replace "Rockford"->
 * "Joliet" reads false (Joliet is intermodal rail; Rockford is aerospace machining + air
 * cargo).
 *
 * HONESTY: real facts only; PPRT rates, the MM&E exemption, DCAA/aerospace-contract, and
 * filings deferred to the Illinois Dept of Revenue and the CPA/EA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/rockford/",
  slug: "rockford",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Rockford Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "QuickBooks bookkeeping for Rockford, IL businesses — aerospace, precision-machining and air-cargo accounting, IL machinery exemption and PPRT. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Rockford" },
  ],
  hero: {
    eyebrow: "Rockford &middot; Winnebago County &middot; Illinois",
    heading: "Rockford bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Rockford businesses &mdash; built around the aerospace and precision-machining manufacturing base, the air-cargo hub, and healthcare, with Illinois&rsquo; flat income tax, the manufacturing machinery exemption, and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Rockford &amp; Winnebago County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Rockford businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in aerospace and precision-machining accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Rockford summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Rockford &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Rockford businesses start here",
    heading: "Book a Rockford discovery call.",
    lede: "30 minutes. We review where your books stand and your Rockford context &mdash; aerospace job-and-process costing, inventory and the machinery exemption, air-cargo logistics, the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=rockford&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Rockford",
  copy: {
    localEyebrow: "Bookkeeping built for how Rockford actually runs",
    areasEyebrow: "Across the city &amp; the Rock River Valley",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Rockford verticals we know",
    servicesEyebrow: "What we do for Rockford businesses",
    faqEyebrow: "Rockford FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=rockford&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Rockford businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Rockford is a historic <strong>aerospace and precision-machining</strong> manufacturing hub &mdash; aerospace components, machine tools, and metalworking &mdash; with a fast-growing <strong>air-cargo</strong> operation at Chicago Rockford International and a large healthcare sector. The distinctive accounting is aerospace and manufacturing <strong>job-and-process costing</strong>, <strong>inventory and COGS</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) sales-tax exemption</strong>, plus air-cargo logistics. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, and a combined sales tax of <strong>about 8.25%</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Rockford businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Rockford and Rock River Valley businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in aerospace, precision-machining, and air-cargo accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle aerospace and precision-machining accounting?", a: "Yes &mdash; it&rsquo;s the defining Rockford need. Aerospace-component makers, machine shops, and metalworkers need <strong>job-and-process costing</strong>, work-in-process tracking, <strong>inventory and COGS</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> applied to qualifying equipment. Where they hold government or defense aerospace contracts, DCAA-aware records matter. We keep the books to that standard; the tax positions stay with your CPA." },
    { q: "What Illinois taxes affect my Rockford books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, and a combined sales tax of <strong>about 8.25%</strong>, administered by the Illinois Department of Revenue &mdash; with the manufacturing machinery exemption available on qualifying equipment. We track all of it; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying <strong>manufacturing machinery and equipment</strong> from sales and use tax, which is significant for Rockford&rsquo;s machine shops and aerospace makers buying CNC and metalworking equipment. We track exempt vs taxable purchases so the exemption is claimed and you don&rsquo;t over-pay; the eligibility determination stays with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Rockford</strong> &mdash; downtown and the river district, the aerospace and machining/industrial corridors, the airport and air-cargo logistics area, and the surrounding Rock River Valley (Loves Park, Machesney Park, Belvidere) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Rockford is a machining and aerospace city &mdash; metalworking, precision components, and a growing air-cargo base &mdash; and that industrial economy, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>aerospace and precision manufacturing</strong>. Component makers, machine shops, and metalworkers need <strong>job-and-process costing</strong>, work-in-process tracking, accurate <strong>inventory and COGS</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) exemption</strong> applied to CNC and metalworking equipment so they don&rsquo;t over-pay sales and use tax. Where shops hold government or defense aerospace contracts, DCAA-aware records and contract billing come into play. The fast-growing <strong>air-cargo</strong> operation at Chicago Rockford International adds logistics, and a large <strong>healthcare</strong> sector rounds it out.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, and a combined sales tax of <strong>about 8.25%</strong>. A general bookkeeper rarely costs a machining job correctly or claims the machinery exemption; we put a named bookkeeper on your file who does &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Rockford business actually runs &mdash; jobs and WIP costed, inventory and COGS accurate, the machinery exemption claimed, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the river district", note: "Professional services, healthcare &amp; small business" },
    { name: "Aerospace &amp; machining corridors", note: "Aerospace components, machine shops &amp; metalworking" },
    { name: "Airport &amp; air-cargo logistics", note: "Air cargo, distribution &amp; freight" },
    { name: "Industrial &amp; manufacturing parks", note: "Makers, fabrication &amp; assembly" },
    { name: "Loves Park, Machesney Park &amp; Belvidere", note: "Manufacturing, trades &amp; small business" },
    { name: "All of the Rock River Valley", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) that owe no regular Illinois income tax. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "MM&amp;E + ~8.25%", desc: "Combined sales &amp; use tax of about 8.25%, administered by the IDOR &mdash; with the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> on qualifying CNC and metalworking equipment. We track exempt vs taxable purchases so the exemption is claimed; eligibility stays with your CPA." },
  ],
  taxNote: "Rockford and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, the MM&E exemption rules, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, determine exemption eligibility, handle DCAA rate submissions, or provide legal or tax advice.",

  industries: [
    { label: "Aerospace components &amp; machining", href: "/accounting/industries/professional-services/", note: "job-and-process costing, work-in-process, inventory and COGS, the machinery exemption, and DCAA-aware records where applicable" },
    { label: "Machine tools &amp; metalworking", href: "/accounting/industries/restaurant/", note: "production costing, equipment depreciation, and the Illinois manufacturing machinery exemption" },
    { label: "Air cargo &amp; logistics", href: "/accounting/industries/ecommerce/", note: "freight and inventory costing, fleet/fixed assets, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Construction &amp; trades", href: "/accounting/industries/professional-services/", note: "job costing, WIP, retainage, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with jobs and WIP costed, the machinery exemption claimed, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Manufacturing / job-cost cleanup", body: "Job costing, WIP, and inventory drift when the books aren&rsquo;t right. We rebuild them to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with job-costing, WIP, inventory, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately, with the manufacturing exemption tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a machining floor, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing which jobs make money, your WIP and inventory are accurate, your machinery exemption is claimed, and your PPRT position is clean. That judgment is what a named Rockford bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, exemption-eligibility, DCAA-rate, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Rockford business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Rockford and the Rock River Valley, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in aerospace, precision-machining, and air-cargo accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle aerospace and machining accounting?", a: "Yes &mdash; it&rsquo;s the defining Rockford engagement. Aerospace-component makers, machine shops, and metalworkers need job-and-process costing, work-in-process tracking, accurate inventory and COGS, and the Illinois manufacturing machinery & equipment exemption applied to CNC and metalworking equipment. Where they hold government or defense aerospace contracts, DCAA-aware records and contract billing matter. We keep the books to that standard in QuickBooks; the tax positions and any DCAA rate submissions stay with your CPA and specialists, whom we coordinate with." },
    { q: "What Illinois taxes affect my Rockford bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Rockford&rsquo;s combined sales tax is about 8.25%, with the manufacturing machinery & equipment exemption available on qualifying equipment. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying manufacturing machinery and equipment from sales and use tax &mdash; significant for Rockford&rsquo;s machine shops and aerospace makers buying CNC and metalworking equipment. To claim it, your books have to separate exempt purchases from taxable ones. We track that split so the exemption is captured and you don&rsquo;t over-pay; the eligibility determination stays with your CPA, whom we coordinate with." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "How much does a Rockford bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Aerospace and machining businesses carry more complexity (job costing, WIP, inventory, exemptions), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Rockford QuickBooks file?", a: "Yes &mdash; especially for machine shops and manufacturers whose job costing, WIP, or inventory books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding job costing and inventory and capturing the machinery exemption &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Rockford?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Rockford situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/rockford/",
    name: "Rockford Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Rockford, Illinois businesses — fluent in aerospace, precision-machining, and air-cargo accounting, the Illinois manufacturing machinery exemption, the flat income tax, the Personal Property Replacement Tax, and ~8.25% sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Rockford Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Rockford tax-aware bookkeeping — aerospace and machining job-and-process costing, WIP, inventory and COGS with the manufacturing machinery & equipment exemption, air-cargo logistics, Illinois' flat income tax, the Personal Property Replacement Tax, and ~8.25% sales tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, determine exemption eligibility, or handle DCAA rate submissions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Rockford", sameAs: "https://en.wikipedia.org/wiki/Rockford,_Illinois" },
      { type: "AdministrativeArea", name: "Winnebago County", sameAs: "https://en.wikipedia.org/wiki/Winnebago_County,_Illinois" },
    ],
    audienceType: "Rockford and Rock River Valley small and midsize businesses — aerospace components and machining, machine tools and metalworking, air cargo and logistics, healthcare, construction and trades, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

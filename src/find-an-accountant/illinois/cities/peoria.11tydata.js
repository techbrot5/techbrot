/* /find-an-accountant/illinois/cities/peoria/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Peoria's
 * ECONOMY: a historic HEAVY-EQUIPMENT and INDUSTRIAL-MANUFACTURING center on the Illinois
 * River (a deep heavy-machinery base — Caterpillar's longtime home and large ongoing
 * operations frame the manufacturing heritage), plus a major HEALTHCARE sector (OSF
 * HealthCare is headquartered in Peoria), Illinois River BARGE/LOGISTICS (river freight,
 * grain and commodity shipping), and AGRIBUSINESS across central Illinois. The distinctive
 * accounting is heavy-manufacturing standard / job-and-process costing, inventory and WIP,
 * the Illinois MANUFACTURING MACHINERY & EQUIPMENT exemption, river/barge freight costing,
 * healthcare-practice bookkeeping, and agribusiness seasonality. Distinct from Rockford
 * (aerospace/precision-machining + air cargo), Chicago (finance), and Joliet (intermodal rail).
 *
 * HONESTY: real facts only. Caterpillar is named ONLY as part of the city's manufacturing
 * heritage/economy — never as our client, and we do NOT assert Caterpillar's current global
 * HQ is in Peoria (it relocated). OSF HealthCare is named only as a local-economy example.
 * NO specific Peoria combined sales-tax percentage is asserted — only "the 6.25% state rate
 * plus Peoria County and home-rule add-ons," with the exact figure deferred to the IDOR,
 * the city, and the CPA. PPRT rates, the MM&E exemption, and filings are deferred to the
 * Illinois Department of Revenue and the CPA/EA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/peoria/",
  slug: "peoria",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Peoria Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Peoria, IL businesses — fluent in heavy-equipment & industrial manufacturing, OSF-area healthcare, and Illinois River barge/logistics accounting, the Illinois manufacturing machinery exemption, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Peoria" },
  ],
  hero: {
    eyebrow: "Peoria &middot; Peoria County &middot; Illinois",
    heading: "Peoria bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Peoria businesses &mdash; built around the heavy-equipment and industrial-manufacturing base on the Illinois River, the healthcare sector, river/barge logistics, and central-Illinois agribusiness, with Illinois&rsquo; flat income tax, the manufacturing machinery exemption, and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Peoria &amp; Peoria County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Peoria businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in heavy-equipment manufacturing, healthcare, and Illinois River logistics accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Peoria summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Peoria &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Peoria businesses start here",
    heading: "Book a Peoria discovery call.",
    lede: "30 minutes. We review where your books stand and your Peoria context &mdash; heavy-manufacturing standard and job-and-process costing, inventory and the machinery exemption, river/barge freight costing, healthcare-practice books, the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=peoria&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Peoria",
  copy: {
    localEyebrow: "Bookkeeping built for how Peoria actually runs",
    areasEyebrow: "Across the city &amp; the Illinois River valley",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Peoria verticals we know",
    servicesEyebrow: "What we do for Peoria businesses",
    faqEyebrow: "Peoria FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=peoria&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Peoria businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Peoria is a historic <strong>heavy-equipment and industrial-manufacturing</strong> center on the <strong>Illinois River</strong> &mdash; the longtime home of Caterpillar&rsquo;s manufacturing operations &mdash; with a major <strong>healthcare</strong> sector (OSF HealthCare is headquartered here), Illinois River <strong>barge and logistics</strong> (river freight, grain and commodity shipping), and central-Illinois <strong>agribusiness</strong>. The distinctive accounting is heavy-manufacturing <strong>standard and job-and-process costing</strong>, <strong>inventory and work-in-process</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) sales-tax exemption</strong>, plus river/barge freight costing and agribusiness seasonality. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, and sales tax of <strong>6.25% state plus Peoria County and home-rule add-ons</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Peoria businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Peoria and Peoria County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in heavy-equipment manufacturing, healthcare, and Illinois River logistics accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle heavy-manufacturing accounting?", a: "Yes &mdash; it&rsquo;s the defining Peoria need. Heavy-equipment makers, industrial fabricators, and machine shops need <strong>standard and job-and-process costing</strong>, work-in-process tracking, <strong>inventory and COGS</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> applied to qualifying equipment. We keep the books to that standard; the tax positions stay with your CPA." },
    { q: "What Illinois taxes affect my Peoria books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, and sales tax of <strong>6.25% state plus Peoria County and home-rule add-ons</strong>, administered by the Illinois Department of Revenue &mdash; with the manufacturing machinery exemption available on qualifying equipment. We track all of it; the IDOR&rsquo;s rules, the city, and your CPA confirm the exact rate and what&rsquo;s due." },
    { q: "What is the manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying <strong>manufacturing machinery and equipment</strong> from sales and use tax, which is significant for Peoria&rsquo;s heavy-equipment makers and fabricators buying production machinery. We track exempt vs taxable purchases so the exemption is claimed and you don&rsquo;t over-pay; the eligibility determination stays with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Peoria</strong> &mdash; downtown and the riverfront, the heavy-manufacturing and industrial corridors, the medical district around the major hospital systems, and the surrounding Illinois River valley (East Peoria, Pekin, Morton, Washington) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Peoria is a heavy-manufacturing river city &mdash; heavy equipment, industrial fabrication, and Illinois River barge logistics &mdash; with a major healthcare sector, and that industrial economy, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>heavy-equipment and industrial manufacturing</strong>. As the longtime home of Caterpillar&rsquo;s manufacturing and a deep base of fabricators and machine shops, Peoria&rsquo;s makers need <strong>standard and job-and-process costing</strong>, work-in-process tracking, accurate <strong>inventory and COGS</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) exemption</strong> applied to production equipment so they don&rsquo;t over-pay sales and use tax. The <strong>Illinois River barge and logistics</strong> trade adds freight and commodity-shipping costing, a large <strong>healthcare</strong> sector (OSF HealthCare is headquartered in Peoria) needs practice bookkeeping, and central-Illinois <strong>agribusiness</strong> brings seasonality.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, and sales tax of <strong>6.25% state plus Peoria County and home-rule add-ons</strong>. A general bookkeeper rarely costs a heavy-manufacturing job correctly or claims the machinery exemption; we put a named bookkeeper on your file who does &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Peoria business actually runs &mdash; jobs and WIP costed, inventory and COGS accurate, the machinery exemption claimed, river freight and agribusiness seasonality tracked, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the riverfront", note: "Professional services, healthcare &amp; small business" },
    { name: "Heavy-manufacturing &amp; industrial corridors", note: "Heavy equipment, fabrication &amp; machine shops" },
    { name: "Illinois River &amp; barge logistics", note: "River freight, grain &amp; commodity shipping" },
    { name: "Medical district &amp; clinics", note: "Hospital systems, practices &amp; provider groups" },
    { name: "East Peoria, Pekin, Morton &amp; Washington", note: "Manufacturing, agribusiness, trades &amp; small business" },
    { name: "All of the Illinois River valley", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) that owe no regular Illinois income tax. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "MM&amp;E + 6.25% +", desc: "Sales &amp; use tax of <strong>6.25% state plus Peoria County and home-rule add-ons</strong>, administered by the IDOR &mdash; with the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> on qualifying production equipment. We track exempt vs taxable purchases so the exemption is claimed; the exact combined rate and eligibility stay with the IDOR, the city, and your CPA." },
  ],
  taxNote: "Peoria and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, the MM&E exemption rules, and local sales-tax components change &mdash; the exact Peoria combined sales-tax rate depends on Peoria County and home-rule add-ons, so confirm any specific figure with the IDOR, the city, or your CPA before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, make the PTE election, determine MM&E exemption eligibility, or provide legal or tax advice.",

  industries: [
    { label: "Heavy equipment &amp; industrial manufacturing", href: "/accounting/industries/professional-services/", note: "standard and job-and-process costing, work-in-process, inventory and COGS, and the machinery exemption" },
    { label: "Fabrication, machine shops &amp; metalworking", href: "/accounting/industries/restaurant/", note: "production costing, equipment depreciation, and the Illinois manufacturing machinery exemption" },
    { label: "River/barge logistics &amp; commodities", href: "/accounting/industries/ecommerce/", note: "freight and commodity costing, fleet/fixed assets, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Agribusiness &amp; ag services", href: "/accounting/industries/professional-services/", note: "seasonal cash flow, input and inventory tracking, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with jobs and WIP costed, the machinery exemption claimed, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Manufacturing / job-cost cleanup", body: "Job and standard costing, WIP, and inventory drift when the books aren&rsquo;t right. We rebuild them to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with job-costing, WIP, inventory, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately, with the manufacturing exemption tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a heavy-manufacturing floor, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing which jobs make money, your WIP and inventory are accurate, your machinery exemption is claimed, and your PPRT position is clean. That judgment is what a named Peoria bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, PTE-election, exemption-eligibility, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Peoria business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Peoria and Peoria County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in heavy-equipment manufacturing, healthcare, and Illinois River logistics accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle heavy-equipment and manufacturing accounting?", a: "Yes &mdash; it&rsquo;s the defining Peoria engagement. As a historic heavy-equipment center, Peoria&rsquo;s makers, fabricators, and machine shops need standard and job-and-process costing, work-in-process tracking, accurate inventory and COGS, and the Illinois manufacturing machinery & equipment exemption applied to production equipment. We keep the books to that standard in QuickBooks; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "What Illinois taxes affect my Peoria bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Peoria sales tax is the 6.25% state rate plus Peoria County and home-rule add-ons, with the manufacturing machinery & equipment exemption available on qualifying equipment. We build all of it into how your books are kept; the IDOR&rsquo;s rules, the city, and your CPA confirm the exact rate and what&rsquo;s due." },
    { q: "What is the combined sales-tax rate in Peoria?", a: "The Illinois state sales tax is 6.25%, and Peoria adds Peoria County and home-rule components on top, so the combined rate varies by location and changes over time. Rather than quote a figure that may be stale, we keep your books structured so taxable and exempt sales reconcile cleanly; confirm the current combined rate with the Illinois Department of Revenue, the city, or your CPA before relying on it." },
    { q: "What is the manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying manufacturing machinery and equipment from sales and use tax &mdash; significant for Peoria&rsquo;s heavy-equipment makers and fabricators buying production machinery. To claim it, your books have to separate exempt purchases from taxable ones. We track that split so the exemption is captured and you don&rsquo;t over-pay; the eligibility determination stays with your CPA, whom we coordinate with." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot keeps your books accurate, reconciled, and CPA-ready, and we track the Illinois income tax, PPRT, and sales-tax positions in your file &mdash; but we do not file Illinois income, sales, or PPRT returns, make the Illinois PTE election, or determine MM&E exemption eligibility. Those are your CPA&rsquo;s or EA&rsquo;s work, and we coordinate with them so the filing goes smoothly." },
    { q: "How much does a Peoria bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Heavy-manufacturing and logistics businesses carry more complexity (job and standard costing, WIP, inventory, exemptions), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Peoria QuickBooks file?", a: "Yes &mdash; especially for manufacturers and fabricators whose job costing, WIP, or inventory books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding job and standard costing and inventory and capturing the machinery exemption &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Peoria?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Peoria situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/peoria/",
    name: "Peoria Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Peoria, Illinois businesses — fluent in heavy-equipment and industrial manufacturing, healthcare, and Illinois River barge/logistics accounting, the Illinois manufacturing machinery exemption, the flat income tax, the Personal Property Replacement Tax, and the 6.25% state sales tax plus local add-ons. Fixed-fee, named bookkeeper.",
    serviceName: "Peoria Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Peoria tax-aware bookkeeping — heavy-manufacturing standard and job-and-process costing, WIP, inventory and COGS with the manufacturing machinery & equipment exemption, Illinois River barge/freight costing, healthcare-practice bookkeeping, agribusiness seasonality, Illinois' flat income tax, the Personal Property Replacement Tax, and the 6.25% state sales tax plus Peoria County and home-rule add-ons handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, or determine exemption eligibility — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Peoria", sameAs: "https://en.wikipedia.org/wiki/Peoria,_Illinois" },
      { type: "AdministrativeArea", name: "Peoria County", sameAs: "https://en.wikipedia.org/wiki/Peoria_County,_Illinois" },
    ],
    audienceType: "Peoria and Illinois River valley small and midsize businesses — heavy-equipment and industrial manufacturing, fabrication and machine shops, river/barge logistics and commodities, healthcare, agribusiness, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

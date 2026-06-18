/* /find-an-accountant/illinois/cities/decatur/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax + the manufacturing machinery exemption) —
 * the un-clonable substance is Decatur's ECONOMY: a central-Illinois AGRIBUSINESS-
 * PROCESSING and HEAVY-MANUFACTURING center. Decatur is a major corn and soybean
 * processing hub (Archer Daniels Midland runs very large processing operations here;
 * Tate & Lyle / Primient corn-wet-milling) — long called the "Soybean Capital" — plus
 * heavy manufacturing (Caterpillar has large operations in Decatur), central-Illinois
 * agriculture, and rail/logistics. The distinctive accounting is agribusiness and
 * commodity-processing books (commodity inventory and cost flows, raw-material
 * procurement, processing/manufacturing COGS), heavy-manufacturing standard costing and
 * WIP, the Illinois MANUFACTURING MACHINERY & EQUIPMENT exemption, and farm/ag-supply
 * business books. A find-replace "Champaign"->"Decatur" reads false (Champaign is agTECH
 * and university research; Decatur is ag PROCESSING and heavy industry).
 *
 * HONESTY: real facts only. ADM / Tate & Lyle / Primient / Caterpillar are named ONLY as
 * local-economy examples, NEVER as clients, and NO company's current HQ is asserted (ADM
 * is described by its Decatur PROCESSING OPERATIONS, not HQ). No specific Illinois
 * agricultural sales/use-tax exemption rules are asserted (deferred to IDOR/CPA); no
 * asserted Decatur combined sales-tax %. PPRT rates, the MM&E exemption, and filings are
 * deferred to the Illinois Dept of Revenue and the CPA/EA. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/decatur/",
  slug: "decatur",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Decatur Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Decatur, IL businesses — fluent in agribusiness and commodity-processing (corn & soybean), heavy-manufacturing, and central-Illinois agriculture accounting, the Illinois manufacturing machinery exemption, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Decatur" },
  ],
  hero: {
    eyebrow: "Decatur &middot; Macon County &middot; Illinois",
    heading: "Decatur bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Decatur businesses &mdash; built around the agribusiness and commodity-processing base, heavy manufacturing, and central-Illinois agriculture, with Illinois&rsquo; flat income tax, the manufacturing machinery exemption, and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Decatur &amp; Macon County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Decatur businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in agribusiness, commodity-processing, and heavy-manufacturing accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Decatur summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Decatur &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Decatur businesses start here",
    heading: "Book a Decatur discovery call.",
    lede: "30 minutes. We review where your books stand and your Decatur context &mdash; agribusiness and commodity-processing cost flows, heavy-manufacturing standard costing and WIP, the machinery exemption, farm and ag-supply seasonality, the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=decatur&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Decatur",
  copy: {
    localEyebrow: "Bookkeeping built for how Decatur actually runs",
    areasEyebrow: "Across the city &amp; Macon County",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Decatur verticals we know",
    servicesEyebrow: "What we do for Decatur businesses",
    faqEyebrow: "Decatur FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=decatur&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Decatur businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Decatur is a central-Illinois <strong>agribusiness-processing and heavy-manufacturing</strong> center &mdash; a major <strong>corn and soybean processing</strong> hub (large grain-processing and corn-wet-milling operations) long called the &ldquo;Soybean Capital,&rdquo; with substantial <strong>heavy manufacturing</strong> and surrounding central-Illinois agriculture and rail/logistics. The distinctive accounting is <strong>commodity inventory and cost flows</strong>, raw-material procurement and processing <strong>COGS</strong>, heavy-manufacturing <strong>standard costing and WIP</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) sales-tax exemption</strong>, plus farm and ag-supply seasonality. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, the permanent <strong>pass-through entity (PTE) tax election</strong>, and a <strong>6.25% state sales tax</strong> plus Macon County and any home-rule add-ons. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Decatur businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Decatur and Macon County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in agribusiness and commodity-processing, heavy-manufacturing, and central-Illinois agriculture accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle agribusiness and commodity-processing accounting?", a: "Yes &mdash; it&rsquo;s the defining Decatur need. As a corn and soybean processing center, Decatur&rsquo;s processors and ag-supply firms need <strong>commodity inventory and cost flows</strong>, raw-material procurement tracking, processing and manufacturing <strong>COGS</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> applied to qualifying equipment. We keep the books to that standard; the tax positions stay with your CPA." },
    { q: "What Illinois taxes affect my Decatur books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, the permanent <strong>PTE tax election</strong>, and a <strong>6.25% state sales tax</strong> plus Macon County and any home-rule add-ons, administered by the Illinois Department of Revenue &mdash; with the manufacturing machinery exemption available on qualifying equipment. We track all of it; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying <strong>manufacturing machinery and equipment</strong> from sales and use tax, which is significant for Decatur&rsquo;s processors and heavy manufacturers buying processing and production equipment. We track exempt vs taxable purchases so the exemption is claimed and you don&rsquo;t over-pay; the eligibility determination stays with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Decatur</strong> &mdash; downtown and the lakeside district, the processing and industrial corridors along the rail lines, the heavy-manufacturing zones, and the surrounding Macon County farm country (Mt. Zion, Forsyth, Maroa) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Decatur is an agribusiness-processing and heavy-industry city &mdash; corn and soybean processing, heavy manufacturing, and surrounding central-Illinois agriculture &mdash; and that industrial economy, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>agribusiness and commodity processing</strong>. As a long-standing corn and soybean processing hub &mdash; large grain-processing and corn-wet-milling operations, the kind that earned Decatur its &ldquo;Soybean Capital&rdquo; name &mdash; processors and ag-supply firms need <strong>commodity inventory and cost flows</strong>, raw-material procurement tracking, and accurate processing and manufacturing <strong>COGS</strong>. Decatur&rsquo;s <strong>heavy manufacturing</strong> adds standard costing, <strong>work-in-process</strong>, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) exemption</strong> on qualifying production equipment, while the surrounding <strong>farm and ag-supply</strong> base brings seasonality and equipment depreciation, and rail/logistics adds freight costing.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, the permanent <strong>pass-through entity (PTE) tax election</strong>, and a <strong>6.25% state sales tax</strong> plus Macon County and any home-rule add-ons. A general bookkeeper rarely costs a processing run or a manufacturing job correctly or claims the machinery exemption; we put a named bookkeeper on your file who does &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Decatur business actually runs &mdash; commodity inventory and cost flows tracked, processing and manufacturing COGS accurate, WIP and the machinery exemption handled, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the lakeside district", note: "Professional services, retail &amp; small business" },
    { name: "Processing &amp; rail corridors", note: "Grain and commodity processing, milling &amp; rail logistics" },
    { name: "Heavy-manufacturing zones", note: "Heavy manufacturing, fabrication &amp; assembly" },
    { name: "Ag-supply &amp; industrial parks", note: "Ag suppliers, equipment dealers &amp; makers" },
    { name: "Mt. Zion, Forsyth &amp; Maroa", note: "Farms, trades &amp; small business" },
    { name: "All of Macon County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT + PTE", desc: "Illinois&rsquo; <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) &mdash; plus the permanent <strong>pass-through entity (PTE) tax election</strong>. We track both positions in your books; the rates, the election, and filing stay with the IDOR and your CPA." },
    { figure: "MM&amp;E + 6.25% +", desc: "A <strong>6.25% state sales tax</strong> plus Macon County and any home-rule add-ons, administered by the IDOR &mdash; with the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> on qualifying processing and production equipment. We track exempt vs taxable purchases so the exemption is claimed; the combined local rate and eligibility stay with the IDOR, the city, and your CPA." },
  ],
  taxNote: "Decatur and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, the PTE election, the MM&E exemption rules, any Illinois agricultural sales- and use-tax exemptions, and the combined Macon County / home-rule sales-tax rate change &mdash; confirm any specific figure with the IDOR, the city, and your CPA before relying on it. ADM, Tate & Lyle, Primient, and Caterpillar are named only as examples of Decatur's local economy and are not TechBrot clients. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, make the PTE election, determine MM&E or agricultural-exemption eligibility, or provide legal or tax advice.",

  industries: [
    { label: "Agribusiness &amp; commodity processing", href: "/accounting/industries/manufacturing/", note: "commodity inventory and cost flows, raw-material procurement, processing COGS, and the machinery exemption" },
    { label: "Heavy manufacturing", href: "/accounting/industries/manufacturing/", note: "standard costing, work-in-process, inventory and COGS, and the Illinois manufacturing machinery exemption" },
    { label: "Farms &amp; ag-supply", href: "/accounting/industries/professional-services/", note: "seasonality, equipment depreciation, and ag-supply inventory &mdash; with agricultural-exemption questions deferred to your CPA" },
    { label: "Rail &amp; logistics", href: "/accounting/industries/ecommerce/", note: "freight and inventory costing, fleet/fixed assets, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Construction &amp; trades", href: "/accounting/industries/professional-services/", note: "job costing, WIP, retainage, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with commodity and processing cost flows tracked, WIP costed, the machinery exemption claimed, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Processing / manufacturing cleanup", body: "Inventory, cost-flow, and WIP drift when the books aren&rsquo;t right. We rebuild them to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, standard-costing, WIP, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately, with the manufacturing exemption tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a processing line or a manufacturing floor, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your commodity inventory and cost flows are accurate, your WIP and processing COGS are right, your machinery exemption is claimed, and your PPRT and PTE positions are clean. That judgment is what a named Decatur bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, PTE-election, exemption-eligibility, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Decatur business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Decatur and Macon County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in agribusiness and commodity-processing, heavy-manufacturing, and central-Illinois agriculture accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle agribusiness and commodity-processing accounting?", a: "Yes &mdash; it&rsquo;s the defining Decatur engagement. As a corn and soybean processing center, Decatur&rsquo;s processors, millers, and ag-supply firms need commodity inventory and cost flows, raw-material procurement tracking, accurate processing and manufacturing COGS, and the Illinois manufacturing machinery & equipment exemption applied to qualifying processing equipment. We keep the books to that standard in QuickBooks; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "Do you handle heavy-manufacturing accounting?", a: "Yes. Decatur&rsquo;s heavy manufacturers need standard costing, work-in-process tracking, accurate inventory and COGS, and the Illinois manufacturing machinery & equipment exemption applied to production equipment. We build that structure into your QuickBooks file and reconcile it monthly, then hand it to your CPA CPA-ready; the eligibility determinations and filings stay with them." },
    { q: "What Illinois taxes affect my Decatur bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate), the Personal Property Replacement Tax on corporations and pass-throughs, and offers the permanent pass-through entity (PTE) tax election. Decatur sales tax is the 6.25% state rate plus Macon County and any home-rule add-ons &mdash; confirm the combined rate with the IDOR and the city &mdash; with the manufacturing machinery & equipment exemption available on qualifying equipment. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the manufacturing machinery & equipment exemption?", a: "Illinois exempts qualifying manufacturing machinery and equipment from sales and use tax &mdash; significant for Decatur&rsquo;s processors and heavy manufacturers buying processing and production equipment. To claim it, your books have to separate exempt purchases from taxable ones. We track that split so the exemption is captured and you don&rsquo;t over-pay; the eligibility determination stays with your CPA, whom we coordinate with." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "How much does a Decatur bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Processing and manufacturing businesses carry more complexity (commodity inventory, cost flows, WIP, exemptions), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Decatur QuickBooks file?", a: "Yes &mdash; especially for processors and manufacturers whose inventory, cost-flow, or WIP books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding inventory and cost flows and capturing the machinery exemption &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent bookkeeping and QuickBooks ProAdvisor firm &mdash; we keep your books, track positions, and reconcile your accounts, and we keep everything CPA-ready. We do not file Illinois income, sales, or PPRT returns, make the pass-through entity (PTE) election, determine MM&E or agricultural-exemption eligibility, or represent you before the Illinois Department of Revenue. Those stay with your CPA or EA, whom we coordinate with closely." },
    { q: "How do we get started in Decatur?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Decatur situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/decatur/",
    name: "Decatur Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Decatur, Illinois businesses — fluent in agribusiness and commodity-processing (corn & soybean), heavy-manufacturing, and central-Illinois agriculture accounting, the Illinois manufacturing machinery exemption, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee, named bookkeeper.",
    serviceName: "Decatur Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Decatur tax-aware bookkeeping — agribusiness and commodity-processing inventory and cost flows, heavy-manufacturing standard costing, WIP, inventory and COGS with the manufacturing machinery & equipment exemption, farm and ag-supply seasonality, rail/logistics costing, Illinois' flat income tax, the Personal Property Replacement Tax, the PTE election, and the 6.25% state sales tax plus Macon County add-ons handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, or determine exemption eligibility — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Decatur", sameAs: "https://en.wikipedia.org/wiki/Decatur,_Illinois" },
      { type: "AdministrativeArea", name: "Macon County", sameAs: "https://en.wikipedia.org/wiki/Macon_County,_Illinois" },
    ],
    audienceType: "Decatur and Macon County small and midsize businesses — agribusiness and commodity processing, heavy manufacturing, farms and ag-supply, rail and logistics, construction and trades, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

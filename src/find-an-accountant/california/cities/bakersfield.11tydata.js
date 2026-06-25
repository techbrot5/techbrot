/* /find-an-accountant/california/cities/bakersfield/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Bakersfield/Kern County is the oil-and-gas
 * capital of California (Kern produces the large majority of the state's oil) AND a top
 * agriculture county — so the defining accounting is OIL & GAS plus AG: joint-interest
 * billing (JIB), royalty and working-interest accounting, lease operating statements
 * (LOS), depletion, and oilfield-services job costing, alongside farm sales-tax
 * exemptions and seasonal labor. Layered on California's $800 FTB franchise tax, CDTFA
 * sales tax (~8.25% in the city), AB5, and a city business tax. A find-replace
 * "Bakersfield"->"Riverside" reads false (no oil/gas JIB-royalty-depletion economy, no
 * Kern ag base; Inland-Empire distribution is a different world).
 *
 * HONESTY: real facts only; depletion method, severance/production tax, JIB/royalty
 * tax treatment, and filings deferred to the CPA/specialists; city tax deferred to the
 * City of Bakersfield. No fabricated stats/counts/clients. Firm-level byline. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/bakersfield/",
  slug: "bakersfield",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Bakersfield Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "ProAdvisor bookkeeping for Bakersfield and Kern County — oil and gas (JIB, royalties, LOS), agriculture and the $800 franchise tax. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Bakersfield" },
  ],
  hero: {
    eyebrow: "Bakersfield &middot; Kern County &middot; California",
    heading: "Bakersfield bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Bakersfield and Kern County businesses &mdash; built around the realities of oil and gas (joint-interest billing, royalties, lease operating statements), agriculture, and California&rsquo;s $800 franchise tax and CDTFA sales tax. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Bakersfield &amp; Kern County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Bakersfield businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in oil-and-gas and agriculture accounting and California&rsquo;s FTB and CDTFA structure. The full Bakersfield summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Bakersfield &amp; California tax figures verified against the City of Bakersfield, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Bakersfield businesses start here",
    heading: "Book a Bakersfield discovery call.",
    lede: "30 minutes. We review where your books stand and your Bakersfield context &mdash; joint-interest billing and royalty accounting, oilfield-services job costing, farm sales-tax exemptions, CDTFA sales tax, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=bakersfield&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Bakersfield",
  copy: {
    localEyebrow: "Bookkeeping built for how Kern County actually runs",
    areasEyebrow: "Across the city &amp; Kern County",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Kern County verticals we know",
    servicesEyebrow: "What we do for Bakersfield businesses",
    faqEyebrow: "Bakersfield FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=bakersfield&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Bakersfield businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Bakersfield and Kern County are the <strong>oil-and-gas capital of California</strong> and one of its top <strong>agriculture</strong> counties, so the defining accounting is specialized: <strong>joint-interest billing (JIB)</strong>, <strong>royalty and working-interest</strong> accounting, <strong>lease operating statements (LOS)</strong>, <strong>depletion</strong>, and oilfield-services <strong>job costing</strong> &mdash; plus farm-equipment sales-tax exemptions and seasonal labor on the ag side. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 8.25% in the city), a city business tax, and <strong>AB5</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Bakersfield businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Bakersfield and Kern County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the oil-and-gas and agriculture accounting Kern County runs on." },
    { q: "Do you handle oil and gas accounting?", a: "Yes &mdash; it&rsquo;s the defining Bakersfield need. Operators, working-interest owners, and oilfield-services companies need <strong>joint-interest billing (JIB)</strong>, <strong>royalty and working-interest</strong> tracking, <strong>lease operating statements (LOS)</strong>, and <strong>job costing</strong> for services work. We keep the books to that standard in QuickBooks; depletion method, severance/production-tax positions, and filings stay with your CPA, whom we coordinate with." },
    { q: "What California taxes affect my Bakersfield books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 8.25% in the city of Bakersfield), a city business tax, and <strong>AB5</strong> worker classification &mdash; built into how your books are kept. Agriculture also brings partial sales-tax exemptions on farm equipment and diesel." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Oil-and-gas operators and ag businesses often carry multi-entity and JIB complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of Bakersfield</strong> &mdash; Downtown, the oilfield-services and industrial corridors, and the surrounding Kern County oil and farm country &mdash; plus the wider southern Central Valley, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Bakersfield runs on two industries that almost no general bookkeeper knows how to handle: oil and gas, and agriculture &mdash; and Kern County leads California in both.",
    "On the energy side, operators, <strong>working-interest</strong> owners, and oilfield-services companies need <strong>joint-interest billing (JIB)</strong> to allocate costs among partners, <strong>royalty</strong> accounting for mineral owners, <strong>lease operating statements (LOS)</strong> per well or lease, <strong>depletion</strong>, and <strong>job costing</strong> for services work. On the ag side, growers carry <strong>farm-equipment and diesel sales-tax exemptions</strong> and <strong>seasonal labor</strong>. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 8.25% in the city, a Bakersfield business tax, and <strong>AB5</strong> worker classification.",
    "A generic bookkeeper has never seen a JIB statement or an LOS, and won&rsquo;t track farm exemptions either. If working-interest costs aren&rsquo;t allocated correctly, partner statements are wrong. If royalties aren&rsquo;t tracked, owners aren&rsquo;t paid right. If oilfield-services jobs aren&rsquo;t costed, you don&rsquo;t know which jobs make money. We put a named bookkeeper on your file who understands JIB, royalties, LOS, and ag &mdash; built into the monthly close, with the tax positions left to your CPA.",
    "The result: books that reflect how a Kern County business actually runs &mdash; JIB and working-interest allocations clean, royalties tracked, LOS by lease, oilfield jobs costed, or farm exemptions and seasonal labor handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the business district", note: "Professional services, finance &amp; small business" },
    { name: "Oilfield-services &amp; industrial corridors", note: "Operators, services companies &amp; supply" },
    { name: "Surrounding Kern oil country", note: "Working-interest owners, royalty owners &amp; operators" },
    { name: "Kern farm country", note: "Growers, dairies &amp; agribusiness" },
    { name: "Southern Central Valley", note: "Delano, Shafter, Wasco &amp; the wider region" },
    { name: "All of Kern County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "JIB / LOS", desc: "Oil-and-gas operational accounting &mdash; <strong>joint-interest billing (JIB)</strong> to allocate costs among partners, <strong>royalty</strong> and working-interest tracking, and <strong>lease operating statements (LOS)</strong> by well or lease. We keep these clean in your books; depletion, severance/production tax, and the tax treatment stay with your CPA." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. Multi-entity oil-and-gas structures often owe it on several entities. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "8.25%", desc: "City of Bakersfield combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus Kern County and district add-ons, administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks; farm equipment and diesel may qualify for partial exemptions." },
  ],
  taxNote: "Bakersfield and California tax figures are educational and current as of the review date, verified against the City of Bakersfield, the California Franchise Tax Board, and the CDTFA. Rates, thresholds, and exemptions change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns, set depletion method, take severance/production-tax positions, or provide legal or tax advice. Oil-and-gas and ag tax matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Oil &amp; gas operators", href: "/accounting/industries/professional-services/", note: "joint-interest billing, working-interest and royalty accounting, lease operating statements, and AFE tracking" },
    { label: "Oilfield services", href: "/accounting/industries/professional-services/", note: "job and project costing, equipment depreciation, mobile-crew payroll, and contract accounting" },
    { label: "Agriculture &amp; growers", href: "/accounting/industries/professional-services/", note: "farm-equipment and diesel sales-tax exemptions, crop and lot cost tracking, and seasonal labor" },
    { label: "Construction &amp; trades", href: "/accounting/industries/professional-services/", note: "job costing, WIP, retainage, and equipment depreciation" },
    { label: "Transportation &amp; trucking", href: "/accounting/industries/ecommerce/", note: "fuel and per-mile costing, IFTA-aware records, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with JIB, royalties, or ag exemptions tracked and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Oil &amp; gas / multi-entity cleanup", body: "JIB, royalty, and multi-entity books drift fast. We get the file CPA-ready &mdash; allocations and LOS rebuilt &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with JIB, working-interest, job-costing, and multi-entity structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax accurately, with farm-equipment and diesel exemptions and equipment use tax handled correctly.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Across wells, leases, and partners, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your working-interest allocations are right, your royalty owners are paid correctly, your oilfield jobs are costed, and your crew classification won&rsquo;t fail an AB5 test. That judgment is what a named Bakersfield bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Bakersfield, CA FTB &amp; CDTFA &middot; No tax-filing, depletion-method, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Bakersfield business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Bakersfield and the wider Kern County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the oil-and-gas and agriculture accounting the region runs on." },
    { q: "Do you handle oil and gas accounting (JIB, royalties, LOS)?", a: "Yes &mdash; it&rsquo;s the defining Bakersfield engagement. Operators, working-interest owners, and oilfield-services companies need joint-interest billing (JIB) to allocate costs among partners, royalty and working-interest tracking, lease operating statements (LOS) by well or lease, and job costing for services work. We keep all of that clean in QuickBooks; depletion method, severance and production-tax positions, and the returns stay with your specialized oil-and-gas CPA, whom we coordinate with." },
    { q: "What California taxes affect my Bakersfield bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit &mdash; and multi-entity oil-and-gas structures often owe it on several entities &mdash; plus an income-based LLC fee. The CDTFA administers sales and use tax at about 8.25% in the city of Bakersfield, with partial exemptions for farm equipment and diesel. The city requires a business tax. And AB5 governs worker classification. We build all of it into how your books are kept." },
    { q: "Do you handle agriculture in Kern County?", a: "Yes. Kern is one of California&rsquo;s top agriculture counties, and growers need farm-equipment and diesel sales-tax exemptions tracked, crop and lot cost accounting, equipment depreciation, and clean handling of seasonal labor. We keep the books to that standard; the exemption eligibility, depreciation method, and any ag credits stay with your CPA, whom we coordinate with." },
    { q: "Can you handle multi-entity oil and gas structures?", a: "Yes. Oil-and-gas operations are commonly run across multiple entities &mdash; operating companies, working-interest partnerships, and holding entities &mdash; each with its own books and its own $800 franchise tax. We keep the entities reconciled and consistent, with intercompany and JIB allocations clean, so your CPA can consolidate and file accurately." },
    { q: "How much does a Bakersfield bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Oil-and-gas operators and multi-entity ag businesses carry more complexity (JIB, royalties, multiple entities), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Bakersfield QuickBooks file?", a: "Yes &mdash; especially for oil-and-gas operators and multi-entity businesses whose JIB, royalty, or intercompany books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding working-interest allocations and lease operating statements &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Bakersfield?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Bakersfield situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/bakersfield/",
    name: "Bakersfield Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Bakersfield and Kern County businesses — fluent in oil-and-gas accounting (joint-interest billing, royalties, lease operating statements), agriculture, California's $800 franchise tax (FTB), and CDTFA sales tax (about 8.25%). Fixed-fee, named bookkeeper.",
    serviceName: "Bakersfield Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Bakersfield tax-aware bookkeeping — joint-interest billing, royalty and working-interest tracking, lease operating statements, oilfield-services job costing, farm sales-tax exemptions, California's $800 franchise tax, and CDTFA sales tax tracked. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal returns or set depletion/severance positions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Bakersfield", sameAs: "https://en.wikipedia.org/wiki/Bakersfield,_California" },
      { type: "AdministrativeArea", name: "Kern County", sameAs: "https://en.wikipedia.org/wiki/Kern_County,_California" },
    ],
    audienceType: "Bakersfield and Kern County small and midsize businesses — oil and gas operators, oilfield services, agriculture and growers, construction and trades, transportation and trucking, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

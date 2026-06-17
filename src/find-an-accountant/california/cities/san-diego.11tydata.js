/* /find-an-accountant/california/cities/san-diego/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: UNLIKE Los Angeles and San Francisco,
 * San Diego does NOT levy a gross-receipts business tax — it requires a Business Tax
 * Certificate priced largely by EMPLOYEE COUNT, plus a Transient Occupancy Tax and a
 * Tourism Marketing District assessment on lodging. Layered on California's $800 FTB
 * franchise tax, CDTFA sales tax (~7.75% in the city), and AB5. The real San Diego
 * economy — defense/Navy contracting (government cost accounting, DCAA), biotech and
 * life sciences (Torrey Pines; grant + R&D accounting), craft beer (TTB excise), and
 * cross-border trade with Tijuana — makes the books distinct. A find-replace of "San
 * Diego"->"Los Angeles" reads false (LA HAS a gross-receipts tax; SD does not).
 *
 * HONESTY: real, current-as-of-review facts only; thresholds/rates described
 * structurally and deferred to the City of San Diego, the CA FTB, the CDTFA, the TTB,
 * and the client's CPA/EA. No fabricated stats/counts/clients. Firm-level byline. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/san-diego/",
  slug: "sd",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "San Diego Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for San Diego businesses — fluent in San Diego's employee-based Business Tax Certificate, California's $800 franchise tax & CDTFA sales tax, defense, biotech & craft-beer accounting. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "San Diego" },
  ],
  hero: {
    eyebrow: "San Diego &middot; San Diego County &middot; California",
    heading: "San Diego bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for San Diego businesses &mdash; built around the city&rsquo;s employee-based Business Tax Certificate, California&rsquo;s $800 franchise tax and CDTFA sales tax, and the realities of defense contracting, biotech, craft beer, and cross-border trade. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "San Diego &amp; San Diego County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for San Diego businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in San Diego&rsquo;s Business Tax Certificate and California&rsquo;s FTB and CDTFA structure. The full San Diego summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. San Diego &amp; California tax figures verified against the City of San Diego, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "San Diego businesses start here",
    heading: "Book a San Diego discovery call.",
    lede: "30 minutes. We review where your books stand and your San Diego context &mdash; the employee-based Business Tax Certificate, CDTFA sales tax, defense or biotech accounting needs, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=san-diego&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "San Diego",
  copy: {
    localEyebrow: "Bookkeeping built for how San Diego actually taxes",
    areasEyebrow: "Across the city &amp; the county",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "San Diego verticals we know",
    servicesEyebrow: "What we do for San Diego businesses",
    faqEyebrow: "San Diego FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=san-diego&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for San Diego businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. San Diego is different from Los Angeles and San Francisco in a way that matters for your books: it does <em>not</em> levy a gross-receipts business tax. Instead the city requires a <strong>Business Tax Certificate</strong> priced largely by <strong>number of employees</strong>, with a <strong>Transient Occupancy Tax</strong> and Tourism Marketing District assessment on lodging. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 7.75% in the city), and <strong>AB5</strong> worker classification. And San Diego&rsquo;s economy &mdash; defense and Navy contracting, biotech and life sciences, craft beer, and cross-border trade &mdash; carries accounting requirements most bookkeepers never see. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for San Diego businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Diego and San Diego County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in San Diego&rsquo;s Business Tax Certificate and California&rsquo;s FTB and CDTFA tax structure." },
    { q: "Does San Diego have a gross-receipts business tax?", a: "<strong>No.</strong> Unlike Los Angeles and San Francisco, San Diego does not tax gross receipts. The city requires a <strong>Business Tax Certificate</strong> to operate, priced largely by the <strong>number of employees</strong>, and a <strong>Transient Occupancy Tax</strong> plus Tourism Marketing District assessment apply to lodging. We track headcount and the certificate so renewal is never missed; the City of San Diego and your CPA confirm what applies." },
    { q: "What California taxes affect my San Diego books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 7.75% in the city of San Diego), and <strong>AB5</strong> worker classification &mdash; all built into how your books are kept and reconciled." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Defense contractors and biotech firms often need extra structure (cost pools, grant tracking), which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of San Diego</strong> &mdash; Downtown and the Gaslamp, La Jolla and UTC, Sorrento Valley and Torrey Pines (biotech), Carlsbad, and South Bay/Chula Vista near the border &mdash; plus the wider county, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "San Diego is the California city where the most important fact is what the city does <em>not</em> tax &mdash; and that&rsquo;s exactly where out-of-town bookkeepers get it wrong.",
    "Unlike Los Angeles and San Francisco, San Diego levies <strong>no gross-receipts business tax</strong>. It requires a <strong>Business Tax Certificate</strong> to operate, priced largely by <strong>employee count</strong>, with a <strong>Transient Occupancy Tax</strong> and a Tourism Marketing District assessment on hotels and short-term lodging. California&rsquo;s structure still applies on top: the <strong>$800 minimum franchise tax</strong> the FTB charges every LLC and corporation regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 7.75% in the city, and <strong>AB5</strong> worker classification.",
    "What actually makes San Diego books complex is the economy. <strong>Defense and Navy contracting</strong> brings government cost accounting &mdash; indirect cost pools, allowable-vs-unallowable costs, and DCAA-aware records. <strong>Biotech and life sciences</strong> around Torrey Pines run on grant funding and R&amp;D, where revenue recognition and grant compliance decide whether the books are fundable. <strong>Craft beer</strong> carries federal TTB excise and production accounting. And cross-border trade with Tijuana adds import/export detail. A generic remote bookkeeper rarely sees any of this; we build a named bookkeeper into your file who does.",
    "The result: books that reflect how a San Diego business actually runs &mdash; the right business-tax certificate tracked, sales tax reconciled to the CDTFA, contractor vs. employee handled cleanly under <a href=\"/glossary/1099-vs-w2/\">AB5</a>, and industry-specific structure (cost pools, grants, or excise) in place &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Gaslamp", note: "Hospitality, professional services &amp; finance" },
    { name: "La Jolla &amp; UTC", note: "Finance, professional services &amp; healthcare" },
    { name: "Sorrento Valley &amp; Torrey Pines", note: "Biotech, life sciences &amp; R&amp;D" },
    { name: "Carlsbad &amp; North County", note: "Tech, manufacturing &amp; small business" },
    { name: "South Bay &amp; Chula Vista", note: "Cross-border trade, logistics &amp; retail" },
    { name: "All of San Diego County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "By staff", desc: "San Diego Business Tax Certificate &mdash; required to operate in the city and priced largely by <strong>number of employees</strong> (not gross receipts, unlike LA and SF). We track headcount and the certificate so annual renewal is never missed. A Transient Occupancy Tax and Tourism Marketing District assessment apply to lodging." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "7.75%", desc: "City of San Diego combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus the county/district add-on, administered by the CDTFA, not the IRS. Some San Diego County cities run higher. Tracked and reconciled in QuickBooks for an accurate return." },
  ],
  taxNote: "San Diego and California tax figures are educational and current as of the review date, verified against the City of San Diego, the California Franchise Tax Board, and the CDTFA. Rates, thresholds, and certificate fees change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns or provide legal or tax advice. Federal excise (TTB) and government-contract cost matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Defense &amp; government contracting", href: "/accounting/industries/professional-services/", note: "indirect cost pools, allowable-vs-unallowable costs, and DCAA-aware records for Navy and defense contractors" },
    { label: "Biotech &amp; life sciences", href: "/accounting/industries/saas/", note: "grant-funding and R&amp;D accounting, <a href=\"/glossary/deferred-revenue/\">milestone revenue</a> recognition, and investor-ready financials around Torrey Pines" },
    { label: "Craft beer &amp; breweries", href: "/accounting/industries/restaurant/", note: "production and inventory accounting, federal TTB excise tracking, and taproom POS reconciled to the CDTFA return" },
    { label: "Tourism &amp; hospitality", href: "/accounting/industries/restaurant/", note: "Transient Occupancy Tax, high-volume POS, and tipped-employee payroll" },
    { label: "E-commerce &amp; cross-border", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, import/export with Tijuana, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> beyond California" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the business-tax certificate tracked and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Defense, biotech, and brewery books carry structure most files miss. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; including cost-pool and grant structure where it&rsquo;s needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax accurately, with TTB excise and cross-border detail kept clean where they apply.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Defense cost pools, biotech grant burn, brewery production margins &mdash; the value in San Diego isn&rsquo;t categorizing a transaction, it&rsquo;s knowing your indirect rates are defensible, your grant runway is real, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named San Diego bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of San Diego, CA FTB &amp; CDTFA &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my San Diego business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Diego and the wider county, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in San Diego&rsquo;s Business Tax Certificate and California&rsquo;s FTB and CDTFA tax structure." },
    { q: "Does San Diego have a gross-receipts business tax like LA or SF?", a: "No. This is one of the most common things out-of-town bookkeepers get wrong. San Diego does not tax gross receipts. The city requires a Business Tax Certificate to operate, priced largely by the number of employees, and a Transient Occupancy Tax plus Tourism Marketing District assessment apply to lodging. We track headcount and the certificate so renewal is never missed; the City of San Diego and your CPA confirm what applies to you." },
    { q: "What California taxes affect my San Diego bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 7.75% in the city of San Diego. And AB5&rsquo;s ABC test governs whether a worker is a contractor or an employee. We build all of it into how your books are kept and reconciled." },
    { q: "Do you work with San Diego defense and government contractors?", a: "Yes. Government and defense contracting brings requirements most bookkeepers never see &mdash; indirect cost pools, separating allowable from unallowable costs, and keeping records in a DCAA-aware structure. We keep the books to that standard in QuickBooks and coordinate with your CPA and any government-contract specialist on rate submissions and audits. We handle the operational accounting; we don&rsquo;t file returns or represent you before any agency." },
    { q: "Can you handle biotech grant and R&D accounting?", a: "Yes &mdash; it&rsquo;s a core San Diego need around Torrey Pines. Life-sciences and biotech businesses run on grant funding and R&amp;D spend, where milestone-based revenue recognition, grant compliance, and clean R&amp;D tracking decide whether the books are fundable and audit-ready. We keep the books to that standard and coordinate with your CPA on R&amp;D credits and tax positions." },
    { q: "How much does a San Diego bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Defense contractors and biotech firms often need additional structure (cost pools, grant tracking), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy San Diego QuickBooks file?", a: "Yes &mdash; especially for fast-growing biotech, breweries, and contractors whose books fell behind during a grant cycle, a build-out, or a scale-up. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean, with the industry-specific structure your business needs." },
    { q: "How do we get started in San Diego?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your San Diego situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/san-diego/",
    name: "San Diego Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for San Diego businesses — fluent in San Diego's employee-based Business Tax Certificate (no gross-receipts tax, unlike LA/SF), California's $800 franchise tax (FTB), and CDTFA sales tax (about 7.75%). Defense, biotech, and craft-beer aware. Fixed-fee, named bookkeeper.",
    serviceName: "San Diego Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and San Diego tax-aware bookkeeping — the employee-based Business Tax Certificate, California's $800 franchise tax, and CDTFA sales tax tracked, with defense cost-pool, biotech grant, and brewery excise structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal tax returns — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "San Diego", sameAs: "https://en.wikipedia.org/wiki/San_Diego" },
      { type: "AdministrativeArea", name: "San Diego County", sameAs: "https://en.wikipedia.org/wiki/San_Diego_County,_California" },
    ],
    audienceType: "San Diego and San Diego County small and midsize businesses — defense and government contractors, biotech and life sciences, craft breweries, tourism and hospitality, e-commerce and cross-border trade, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

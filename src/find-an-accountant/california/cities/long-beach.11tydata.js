/* /find-an-accountant/california/cities/long-beach/ — CA CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. The un-clonable hook: Long Beach is its OWN charter city with
 * its OWN business license tax — it is NOT covered by the City of Los Angeles Business
 * Tax, a common and costly confusion for businesses that straddle the two. Its economy
 * is anchored by the Port of Long Beach (with the Port of LA, the busiest container
 * complex in the U.S. → logistics, import/export, customs, drayage) and by active oil
 * production in the city's tidelands. Layered on California's $800 FTB franchise tax,
 * CDTFA sales tax (~10.25% in the city), and AB5. A find-replace "Long Beach"->"Los
 * Angeles" reads false (different city business tax, the Port of Long Beach, tidelands
 * oil — not LA's LABT/ULA/entertainment profile).
 *
 * HONESTY: real facts only; customs/duty, oil/severance, and filings deferred to the
 * CPA/specialists; city tax deferred to the City of Long Beach. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/long-beach/",
  slug: "lb",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Long Beach Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "ProAdvisor bookkeeping for Long Beach — its own city business license tax (not LA’s), the $800 franchise tax and Port logistics. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Long Beach" },
  ],
  hero: {
    eyebrow: "Long Beach &middot; the Harbor &middot; California",
    heading: "Long Beach bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Long Beach businesses &mdash; built around the city&rsquo;s own business license tax (not the City of Los Angeles tax), California&rsquo;s $800 franchise tax and CDTFA sales tax, and the realities of Port logistics, import/export, and the harbor economy. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Long Beach &amp; the Harbor area",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Long Beach businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in Long Beach&rsquo;s own business license tax and California&rsquo;s FTB and CDTFA structure. The full Long Beach summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Long Beach &amp; California tax figures verified against the City of Long Beach, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Long Beach businesses start here",
    heading: "Book a Long Beach discovery call.",
    lede: "30 minutes. We review where your books stand and your Long Beach context &mdash; the city&rsquo;s own business license tax, CDTFA sales tax, Port logistics and import/export structure, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=long-beach&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Long Beach",
  copy: {
    localEyebrow: "Bookkeeping built for how Long Beach actually taxes",
    areasEyebrow: "Across the city &amp; the Harbor",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Long Beach verticals we know",
    servicesEyebrow: "What we do for Long Beach businesses",
    faqEyebrow: "Long Beach FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=long-beach&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Long Beach businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. The first thing to get right in Long Beach is that it is <strong>its own charter city with its own business license tax</strong> &mdash; it is <em>not</em> covered by the City of Los Angeles Business Tax, a costly confusion for businesses that operate across both. Its economy is anchored by the <strong>Port of Long Beach</strong> &mdash; with the Port of LA, the busiest container complex in the U.S. &mdash; so <strong>logistics, import/export, customs, and drayage</strong> dominate, alongside active <strong>oil production</strong> in the city&rsquo;s tidelands. California&rsquo;s structure still applies: the <strong>$800 minimum franchise tax</strong> (FTB), <strong>CDTFA sales/use tax</strong> (about 10.25% in the city), and <strong>AB5</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Long Beach businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Long Beach and Harbor-area businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in Long Beach&rsquo;s own business license tax and the Port-logistics and import/export accounting the city runs on." },
    { q: "Does Long Beach use the Los Angeles city business tax?", a: "<strong>No.</strong> Long Beach is its own charter city with its <strong>own business license tax</strong> &mdash; it is not covered by the City of Los Angeles Business Tax. This trips up businesses that operate across both cities. We track the correct city registration so nothing is missed or double-counted; the City of Long Beach and your CPA confirm what applies." },
    { q: "What California taxes affect my Long Beach books?", a: "California&rsquo;s <strong>$800 minimum annual franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 10.25% in the city of Long Beach &mdash; among the highest in the state), and <strong>AB5</strong> worker classification &mdash; built into how your books are kept." },
    { q: "Do you handle Port logistics and import/export accounting?", a: "Yes &mdash; it&rsquo;s the core Long Beach need. Logistics, freight forwarders, customs brokers, and import/export businesses run on thin margins where <strong>freight, customs, duties, drayage, and demurrage</strong> have to be tracked cleanly, and use tax on imported goods handled correctly. We keep the books to that standard and coordinate with your CPA and customs broker on duty matters." },
    { q: "Which areas do you serve?", a: "<strong>All of Long Beach</strong> &mdash; Downtown and the waterfront, the Port and the harbor-industrial district, Bixby Knolls, Belmont Shore, and the airport/business corridor &mdash; plus the wider Harbor area and South Bay, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Long Beach looks like part of Los Angeles, but for your books it is a different city in the way that matters most: it taxes businesses itself.",
    "Long Beach is a <strong>charter city with its own business license tax</strong> &mdash; it is <em>not</em> covered by the City of Los Angeles Business Tax. Businesses that operate across the two cities routinely get this wrong and either miss a registration or pay the wrong city. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> the FTB charges regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 10.25% in the city (among the highest in the state), and <strong>AB5</strong> worker classification.",
    "Then there&rsquo;s the harbor economy. The <strong>Port of Long Beach</strong> &mdash; with the neighboring Port of LA, the busiest container complex in the country &mdash; anchors a dense <strong>logistics, freight, customs-brokerage, and import/export</strong> sector where freight, duties, drayage, and demurrage decide thin margins. The city also has active <strong>oil production</strong> in its tidelands. A generic bookkeeper handles none of this; we put a named bookkeeper on your file who tracks the right city registration and the harbor-specific costs &mdash; built into the monthly close.",
    "The result: books that reflect how a Long Beach business actually runs &mdash; the correct city business license tracked, sales and use tax reconciled to the CDTFA, freight and import costs handled cleanly, contractor vs. employee clean under <a href=\"/glossary/1099-vs-w2/\">AB5</a> &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the waterfront", note: "Professional services, hospitality &amp; finance" },
    { name: "The Port &amp; harbor-industrial district", note: "Logistics, freight, customs &amp; import/export" },
    { name: "Bixby Knolls &amp; North Long Beach", note: "Small business, retail &amp; services" },
    { name: "Belmont Shore &amp; the East side", note: "Retail, restaurants &amp; professional services" },
    { name: "Airport &amp; business corridor", note: "Aerospace, tech &amp; professional services" },
    { name: "All of the Harbor area", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Own tax", desc: "Long Beach business license tax &mdash; Long Beach is its own charter city and levies its own business tax; it is <strong>not</strong> the City of Los Angeles Business Tax. We track the correct city registration so nothing is missed or double-counted; the City of Long Beach and your CPA confirm what applies to your business type." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "10.25%", desc: "City of Long Beach combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus LA County and district add-ons (among the highest in the state), administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks, including use tax on imports." },
  ],
  taxNote: "Long Beach and California tax figures are educational and current as of the review date, verified against the City of Long Beach, the California Franchise Tax Board, and the CDTFA. Rates and thresholds change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or federal tax returns or provide legal or tax advice. Customs/duty and oil/severance matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Logistics, freight &amp; import/export", href: "/accounting/industries/ecommerce/", note: "Port of Long Beach operators &mdash; freight, customs, duties, drayage and demurrage tracked, thin-margin cost accounting" },
    { label: "Customs brokers &amp; freight forwarders", href: "/accounting/industries/professional-services/", note: "client disbursement and duty pass-through accounting, trust/escrow handling, and use tax on imports" },
    { label: "Manufacturing &amp; distribution", href: "/accounting/industries/restaurant/", note: "inventory and COGS, production costing, and CDTFA sales/use tax on equipment and materials" },
    { label: "Aerospace &amp; advanced manufacturing", href: "/accounting/industries/professional-services/", note: "job costing, contract accounting, and government/defense-contract structure where it applies" },
    { label: "Hospitality &amp; tourism", href: "/accounting/industries/restaurant/", note: "Transient Occupancy Tax, high-volume POS, and tipped-employee payroll on the waterfront" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the correct Long Beach city tax tracked and CDTFA sales/use tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Logistics and import/export books carry detail most files miss. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with freight, duty pass-through, and inventory structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; use-tax-ready books", body: "Books structured so your CPA can file the CDTFA sales tax accurately at Long Beach&rsquo;s high combined rate, with use tax on imports handled correctly.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Under a thin-margin freight book, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your duty and drayage pass-throughs are clean against margin, your correct city tax is filed, and your contractor mix won&rsquo;t fail an AB5 test. That judgment is what a named Long Beach bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the City of Long Beach, CA FTB &amp; CDTFA &middot; No tax-filing, customs, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Long Beach business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Long Beach and the wider Harbor area, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in Long Beach&rsquo;s own business license tax and the Port-logistics and import/export accounting the city runs on." },
    { q: "Does Long Beach use the Los Angeles city business tax?", a: "No &mdash; and this is one of the most common things businesses get wrong. Long Beach is its own charter city with its own business license tax; it is not covered by the City of Los Angeles Business Tax. Businesses that operate across both cities often miss a registration or pay the wrong city. We track the correct Long Beach registration in your books so nothing is missed or double-counted; the City of Long Beach and your CPA confirm what applies." },
    { q: "What California taxes affect my Long Beach bookkeeping?", a: "California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax at about 10.25% in the city of Long Beach &mdash; among the highest combined rates in the state &mdash; including use tax on imported goods. And AB5&rsquo;s ABC test governs worker classification. We build all of it into how your books are kept." },
    { q: "Do you handle Port logistics and import/export businesses?", a: "Yes. Logistics, freight forwarders, customs brokers, and import/export businesses around the Port of Long Beach run on thin margins where freight, customs, duties, drayage, and demurrage all have to be tracked cleanly to know true profitability. We structure the books so those costs are captured and reconciled and use tax on imports is handled correctly &mdash; coordinated with your CPA and any customs broker on duty and compliance matters." },
    { q: "Can you handle customs-broker client disbursements?", a: "Yes. Customs brokers and freight forwarders pass duties and disbursements through on behalf of clients, which must be recorded so pass-through money never inflates revenue and client balances stay clean. We set the books up so disbursements, advances, and any trust/escrow handling are tracked correctly, and coordinate with your CPA on the tax treatment." },
    { q: "How much does a Long Beach bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Logistics and import/export businesses often carry higher complexity (freight costing, duty pass-through, high volume), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Long Beach QuickBooks file?", a: "Yes &mdash; especially for logistics and import/export businesses whose books fell behind under high volume or thin-margin freight detail, or that registered with the wrong city. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including correcting the city registration and rebuilding freight and duty tracking &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Long Beach?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Long Beach situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/long-beach/",
    name: "Long Beach Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Long Beach businesses — fluent in Long Beach's own city business license tax (not LA's), California's $800 franchise tax (FTB), and CDTFA sales tax (about 10.25%). Port logistics, import/export, and customs aware. Fixed-fee, named bookkeeper.",
    serviceName: "Long Beach Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Long Beach tax-aware bookkeeping — the city's own business license tax, California's $800 franchise tax, and CDTFA sales/use tax tracked, with Port-logistics freight costing, customs-broker disbursement, and import use-tax structure where needed. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or federal returns or handle customs — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Long Beach", sameAs: "https://en.wikipedia.org/wiki/Long_Beach,_California" },
      { type: "AdministrativeArea", name: "Los Angeles County", sameAs: "https://en.wikipedia.org/wiki/Los_Angeles_County,_California" },
    ],
    audienceType: "Long Beach and Harbor-area small and midsize businesses — logistics and freight, customs brokers and import/export, manufacturing and distribution, aerospace, hospitality and tourism, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

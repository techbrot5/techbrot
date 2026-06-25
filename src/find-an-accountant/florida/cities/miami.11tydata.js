/* /find-an-accountant/florida/cities/miami/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida has NO state personal income tax (but C-corporations pay
 * a 5.5% corporate income tax; pass-throughs are generally exempt) and NO franchise/
 * margin tax — so it differs from both California and Texas. The un-clonable substance
 * is Miami's ECONOMY: the U.S. gateway to Latin America (international trade and import/
 * export), a major finance / banking / fintech-and-crypto hub, luxury and foreign-buyer
 * real estate, and South Beach tourism / PortMiami cruise. The distinctive accounting is
 * multi-currency / international trade, finance, and real estate. The distinctive Florida
 * tax stack here is the SALES TAX ON SERVICES (Florida taxes services others exempt); the
 * reduced and being phased out) — relevant to Miami's dense commercial leasing. A
 * find-replace "Miami"->"Orlando" reads false (Orlando is theme-park tourism, not
 * international finance/trade + foreign-buyer real estate).
 *
 * HONESTY: real facts only; corporate-income-tax, the taxability of services,
 * multi-currency/FBAR/international matters, and filings deferred to the Florida DOR and
 * the CPA/EA. No fabricated stats/counts/clients. Firm-level byline. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/miami/",
  slug: "miami",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Miami Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Bookkeeping for Miami (Miami-Dade) — international trade, finance & real estate, ~7% sales tax, the 5.5% corporate tax, tax on services. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Miami" },
  ],
  hero: {
    eyebrow: "Miami &middot; Miami-Dade County &middot; Florida",
    heading: "Miami bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Miami businesses &mdash; built around the city&rsquo;s international-trade, finance, and real-estate economy, with Florida&rsquo;s no-personal-income-tax structure, the ~7% sales tax, and Florida&rsquo;s taxability of services handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Miami &amp; South Florida",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Miami businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in international-trade and real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure. The full Miami summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Miami &amp; Florida tax figures verified against the Florida Department of Revenue and Miami-Dade County.",
  },
  ctaBand: {
    eyebrow: "Miami businesses start here",
    heading: "Book a Miami discovery call.",
    lede: "30 minutes. We review where your books stand and your Miami context &mdash; international and multi-currency activity, real-estate and commission structure, the ~7% sales tax, Florida&rsquo;s taxability of services, reemployment tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=miami&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Miami",
  copy: {
    localEyebrow: "Bookkeeping built for how Miami actually runs",
    areasEyebrow: "Across the city &amp; South Florida",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "Miami verticals we know",
    servicesEyebrow: "What we do for Miami businesses",
    faqEyebrow: "Miami FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=miami&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Miami businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (though C-corporations pay a <strong>5.5% corporate income tax</strong> and pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is Miami&rsquo;s economy and the Florida tax stack. Miami is the U.S. <strong>gateway to Latin America</strong> &mdash; international trade and import/export, a major <strong>finance, banking, and fintech</strong> hub, luxury and foreign-buyer <strong>real estate</strong>, and South Beach tourism and the PortMiami cruise economy. The distinctive accounting is <strong>multi-currency / international trade</strong>, finance, and real estate. The Florida stack: the <strong>6% sales tax plus the Miami-Dade surtax (about 7%)</strong>, the <strong>taxability of services</strong> (Florida taxes services other states exempt), and <strong>reemployment tax</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Miami businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Miami and South Florida businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in international-trade, finance, and real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (S-corps, LLCs, and partnerships are generally exempt). There is also <strong>6% sales tax plus the Miami-Dade surtax</strong> (about 7%), the <strong>taxability of services</strong>, and <strong>reemployment tax</strong>. We track all of it; the Florida Department of Revenue&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle international and multi-currency businesses?", a: "Yes &mdash; it&rsquo;s the defining Miami need. Import/export, trade, and Latin-America-facing businesses run <strong>multi-currency</strong> transactions, intercompany flows, and foreign vendors and customers. We keep the books so currency, intercompany, and trade costs are clean; the international tax matters (transfer pricing, FBAR, treaties) stay with your CPA, whom we coordinate with." },
    { q: "Did Florida tax commercial rent?", a: "It did &mdash; Florida was the only state to tax commercial real-property rent, but that &ldquo;business rent tax&rdquo; was <strong>repealed effective Oct 1, 2025</strong> (HB 7031) and <strong>no longer applies</strong>. For Miami&rsquo;s dense commercial leasing that&rsquo;s a real saving; if you have open pre-repeal periods, your CPA addresses them. We don&rsquo;t treat it as a current tax. What does apply: Florida&rsquo;s tax on many <strong>services</strong> others exempt." },
    { q: "Which areas do you serve?", a: "<strong>All of Miami</strong> &mdash; Downtown and Brickell (the financial district), Wynwood and the Design District, Coral Gables, Miami Beach, and Doral and the trade corridor &mdash; plus the wider South Florida metro, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Miami is an international city &mdash; the gateway between the U.S. and Latin America &mdash; and that, on top of Florida&rsquo;s distinctive tax stack, is what shapes its books. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work is <strong>international</strong>: import/export and trade businesses, Latin-America-facing companies, and a major <strong>finance, banking, and fintech</strong> sector run <strong>multi-currency</strong> transactions, intercompany flows, and foreign vendors and customers that a domestic-only bookkeeper mishandles. <strong>Real estate</strong> &mdash; luxury, foreign-buyer, and commercial &mdash; is huge, with commission, entity, and trust structures. And <strong>tourism</strong> (South Beach) and the <strong>PortMiami cruise</strong> economy add hospitality.",
    "The Florida tax stack is its own thing: <strong>6% sales tax plus the Miami-Dade surtax</strong> (about 7%), the <strong>taxability of services</strong> &mdash; Florida taxes many services other states exempt, which catches Miami service businesses off guard &mdash; the <strong>5.5% corporate income tax</strong> on C-corps, <strong>reemployment tax</strong>, and an annual <strong>tangible personal property</strong> return for business equipment. We put a named bookkeeper on your file who handles multi-currency, real estate, and the Florida positions cleanly &mdash; with the tax filings left to your CPA.",
    "The result: books that reflect how a Miami business actually runs &mdash; multi-currency and intercompany clean, real-estate commissions and entities tracked, sales tax and service taxability handled, the corporate-income-tax position clear for C-corps &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; Brickell", note: "Finance, banking, fintech &amp; professional services" },
    { name: "Wynwood &amp; the Design District", note: "Creative, agencies, retail &amp; startups" },
    { name: "Coral Gables", note: "International business, law &amp; professional services" },
    { name: "Miami Beach", note: "Hospitality, tourism, real estate &amp; retail" },
    { name: "Doral &amp; the trade corridor", note: "Import/export, logistics &amp; trade" },
    { name: "All of South Florida", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (S-corps, LLCs, and partnerships are generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "~7%", desc: "Miami combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Miami-Dade discretionary surtax (about 7% in the county), administered by the Florida DOR. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "Services", desc: "Florida taxes a range of <strong>services</strong> other states exempt &mdash; commercial cleaning, pest control, security, certain repairs. Miami service businesses that assume they&rsquo;re exempt under-collect; we flag taxable service lines in QuickBooks. (Note: Florida&rsquo;s old commercial-rent tax was repealed Oct 2025.)" },
  ],
  taxNote: "Miami and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Miami-Dade County. The corporate-income-tax rate, the county surtax, the taxability of specific services, and reemployment-tax rates change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, or reemployment tax returns, advise on international or transfer-pricing tax, or provide legal or tax advice.",

  industries: [
    { label: "International trade &amp; import/export", href: "/accounting/industries/ecommerce/", note: "multi-currency transactions, intercompany flows, foreign vendors/customers, and trade cost accounting" },
    { label: "Finance, banking &amp; fintech", href: "/accounting/industries/saas/", note: "clean books for partners and regulators, fund and commission accounting, and reconciliation discipline" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "luxury, foreign-buyer, and commercial &mdash; commission, multi-entity ledgers, and trust accounting" },
    { label: "Hospitality &amp; tourism", href: "/accounting/industries/restaurant/", note: "South Beach hotels and restaurants &mdash; high-volume POS, tourist-development tax, and tipped payroll" },
    { label: "Professional services &amp; agencies", href: "/accounting/industries/professional-services/", note: "project profitability, gross-vs-net revenue, and contractor classification" },
    { label: "E-commerce &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with multi-currency handled and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "International and real-estate books carry detail most files miss. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with multi-currency, intercompany, and real-estate structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax-ready books", body: "Books structured so your CPA can file Florida sales tax (including on taxable services) accurately, with the corporate-income-tax position clear for C-corps.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "In an international, multi-currency business, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your currency and intercompany flows are clean, your real-estate entities tie out, your Florida sales tax and service taxability are handled, and your C-corp income-tax position is clear. That judgment is what a named Miami bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Miami-Dade County &middot; No tax-filing, international-tax, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Miami business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Miami and the wider South Florida, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in international-trade, finance, and real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt as pass-throughs. There is also 6% sales tax plus the Miami-Dade surtax (about 7%), the taxability of services, and reemployment tax. We track all of it in your books; the Florida Department of Revenue&rsquo;s rules and your CPA confirm what&rsquo;s due for your entity." },
    { q: "Do you handle international and multi-currency businesses?", a: "Yes &mdash; it&rsquo;s the defining Miami engagement. Import/export, trade, and Latin-America-facing businesses run multi-currency transactions, intercompany flows, and foreign vendors and customers. We keep the books so currency conversion, intercompany, and trade costs are clean and consistent; the international tax matters &mdash; transfer pricing, FBAR/FinCEN reporting, treaties &mdash; stay with your CPA and international tax counsel, whom we coordinate with." },
    { q: "Did Florida used to tax commercial rent?", a: "Yes &mdash; Florida was the only state to impose sales tax on commercial real-property rent, the &ldquo;business rent tax,&rdquo; and the rate was reduced repeatedly before being <strong>repealed effective Oct 1, 2025</strong> (HB 7031). It no longer applies, so Miami landlords and tenants no longer collect or remit it. We mention it only because older guidance references it; if you have open pre-repeal periods, your CPA addresses them. What does apply is Florida&rsquo;s tax on many services other states exempt." },
    { q: "Do you work with Miami real-estate businesses?", a: "Yes &mdash; it&rsquo;s a core Miami vertical. Brokerages, investors, developers, and property managers need commission accounting, multi-entity ledgers, trust/escrow handling, and clean books for luxury, foreign-buyer, and commercial deals. We keep the books to that standard; the tax positions and any foreign-investment reporting stay with your CPA, whom we coordinate with." },
    { q: "How much does a Miami bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. International, multi-currency, and real-estate businesses carry more complexity (currency, intercompany, entities), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Miami QuickBooks file?", a: "Yes &mdash; especially for international, trade, and real-estate businesses whose multi-currency, intercompany, or entity books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding currency and intercompany &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Miami?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Miami situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/miami/",
    name: "Miami Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Miami businesses — fluent in international trade, finance, and real-estate accounting, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), ~7% sales tax, and the taxability of services. Fixed-fee, named bookkeeper.",
    serviceName: "Miami Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Miami tax-aware bookkeeping — multi-currency and international-trade structure, real-estate commission and entity accounting, Florida sales tax (~7%), the taxability of services, and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns or advise on international tax — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Miami", sameAs: "https://en.wikipedia.org/wiki/Miami" },
      { type: "AdministrativeArea", name: "Miami-Dade County", sameAs: "https://en.wikipedia.org/wiki/Miami-Dade_County,_Florida" },
    ],
    audienceType: "Miami and South Florida small and midsize businesses — international trade and import/export, finance banking and fintech, real estate, hospitality and tourism, professional services, and e-commerce",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

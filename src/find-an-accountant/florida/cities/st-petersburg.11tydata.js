/* /find-an-accountant/florida/cities/st-petersburg/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk. 6th FL city per the FL pillar.
 * GENUINELY localized — St. Pete (Pinellas County) is NOT Tampa: its own downtown TECH/STARTUP
 * corridor, a MARINE-SCIENCE cluster (USF St. Pete, the marine-science district, oceanographic
 * research), tourism and the Gulf beaches, a dense ARTS economy (the Dali Museum, galleries,
 * murals), and healthcare. CORRECTED FL tax stack (post round-48): no personal income tax; 5.5%
 * C-corp only; 6% + Pinellas surtax (~7%), destination-based, $5,000 single-item cap; Florida's
 * SALES TAX ON SERVICES (others exempt); TPP (DR-405); reemployment tax. NO commercial-rent tax
 * (repealed Oct 1 2025). A find-replace from Tampa reads false (Tampa = broader metro/finance/port;
 * St. Pete = downtown tech, marine science, arts, beaches).
 *
 * HONESTY: real facts only; service taxability, corporate tax, and filings deferred to the Florida
 * Department of Revenue + the CPA/EA; TechBrot keeps the books, does not file FL returns. No
 * fabricated stats/counts/clients. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/st-petersburg/",
  slug: "stpete",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "St. Petersburg Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Bookkeeping for St. Petersburg (Pinellas County) — downtown tech, marine science, arts & tourism, ~7% sales tax, the tax on services. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "St. Petersburg" },
  ],
  hero: {
    eyebrow: "St. Petersburg &middot; Pinellas County &middot; Florida",
    heading: "St. Petersburg bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for St. Petersburg businesses &mdash; built around the city&rsquo;s downtown tech and startup corridor, marine-science cluster, arts economy, and Gulf-beach tourism, with Florida&rsquo;s no-personal-income-tax structure, the ~7% sales tax, and the tax on services handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "St. Petersburg &amp; Pinellas County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for St. Petersburg businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/florida/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in the downtown tech/startup, marine-science, and arts economy and Florida&rsquo;s sales-tax-on-services and corporate-tax structure. The full St. Petersburg summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. St. Petersburg &amp; Florida tax figures verified against the Florida Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "St. Petersburg businesses start here",
    heading: "Book a St. Petersburg discovery call.",
    lede: "30 minutes. We review where your books stand and your St. Pete context &mdash; SaaS/startup revenue recognition, marine-science grants and contracts, gallery and tourism seasonality, the ~7% sales tax, Florida&rsquo;s tax on services, and the 5.5% corporate tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=st-petersburg&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "St. Petersburg",
  copy: {
    localEyebrow: "Bookkeeping built for how St. Petersburg actually runs",
    areasEyebrow: "Across the city &amp; Pinellas County",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "St. Petersburg verticals we know",
    servicesEyebrow: "What we do for St. Petersburg businesses",
    faqEyebrow: "St. Petersburg FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=st-petersburg&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for St. Petersburg businesses</strong> &mdash; monthly bookkeeping, <a href=\"/find-an-accountant/florida/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (though C-corporations pay a <strong>5.5% corporate income tax</strong> and pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is St. Pete&rsquo;s economy and the Florida tax stack. St. Petersburg is its own city, not just &ldquo;across the bay from Tampa&rdquo;: a fast-growing <strong>downtown tech and startup</strong> corridor, a <strong>marine-science</strong> cluster (USF St. Petersburg, the marine-science district, oceanographic research and grants), a dense <strong>arts</strong> economy, and Gulf-beach <strong>tourism</strong>. The distinctive accounting is <strong>SaaS/startup revenue recognition, grant and contract tracking, and seasonal tourism</strong>. The Florida stack: the <strong>6% sales tax plus the Pinellas County surtax (about 7%)</strong> with the <strong>$5,000 single-item surtax cap</strong>, Florida&rsquo;s <strong>tax on services</strong> that other states exempt, an annual <strong>tangible personal property</strong> return, and <strong>reemployment tax</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for St. Petersburg businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for St. Petersburg and Pinellas County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the downtown tech/startup, marine-science, and arts economy and Florida&rsquo;s sales-tax-on-services and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (S-corps, LLCs, and partnerships are generally exempt). There is also <strong>6% sales tax plus the Pinellas County surtax</strong> (about 7%) with a $5,000 single-item cap, Florida&rsquo;s <strong>tax on services</strong> that others exempt, an annual <strong>tangible personal property</strong> return, and <strong>reemployment tax</strong>. We track all of it; the Florida Department of Revenue&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle SaaS and startup accounting?", a: "Yes &mdash; it&rsquo;s a defining St. Pete need. Downtown startups and SaaS companies need <strong>deferred-revenue and MRR/ARR</strong> tracking, clean investor-ready books, R&amp;D and grant tracking, and equity-comp records. We keep the books to that standard in QuickBooks; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. SaaS, grant-funded, and multi-entity St. Pete businesses carry more complexity, which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of St. Petersburg</strong> &mdash; the downtown Innovation District and waterfront, the marine-science district, the Grand Central and arts districts, the Gulf beaches, and the wider Pinellas County &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "St. Petersburg is its own economy, and that &mdash; not a city tax &mdash; is what makes its books their own discipline. Florida has no state personal income tax, and St. Pete levies no city income or gross-receipts tax, so the work is about the economy and the Florida stack.",
    "Downtown St. Pete has become a genuine <strong>tech and startup</strong> corridor &mdash; the Innovation District and a growing SaaS and creative-agency base &mdash; which means <strong>deferred-revenue, MRR/ARR, and investor-ready</strong> bookkeeping. The city anchors a <strong>marine-science</strong> cluster (USF St. Petersburg, the marine-science district, oceanographic research) that runs on <strong>grants and contracts</strong> needing fund and project tracking. A dense <strong>arts</strong> economy (the Dal&iacute; Museum, galleries, the mural scene) and Gulf-beach <strong>tourism</strong> add seasonality and event-driven revenue.",
    "The Florida tax stack still has to be right: the <strong>6% sales tax plus the Pinellas County surtax</strong> (about 7%) with the <strong>$5,000 single-item cap</strong>, Florida&rsquo;s <strong>sales tax on services</strong> that other states exempt &mdash; which catches St. Pete agencies and service firms that assume they&rsquo;re exempt &mdash; the <strong>5.5% corporate income tax</strong> on C-corps, <strong>reemployment tax</strong>, and an annual <strong>tangible personal property</strong> return for business equipment. (Florida&rsquo;s old commercial-rent tax was repealed in October 2025 and no longer applies.) A generic bookkeeper has never tracked deferred revenue against an ARR schedule or coded a research grant; we put a named bookkeeper on your file who has, with the tax positions left to your CPA.",
    "The result: books that reflect how a St. Petersburg business actually runs &mdash; deferred revenue and ARR clean, grants and contracts tracked by project, seasonal tourism smoothed, sales tax and service taxability handled, and the corporate-tax position clear for C-corps &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the Innovation District", note: "Tech, SaaS, startups &amp; creative agencies" },
    { name: "The marine-science district", note: "USF St. Petersburg, oceanographic research &amp; grants" },
    { name: "Grand Central &amp; the arts districts", note: "Galleries, studios, hospitality &amp; retail" },
    { name: "St. Pete Beach &amp; the Gulf beaches", note: "Tourism, hospitality &amp; vacation rentals" },
    { name: "Gateway &amp; mid-Pinellas", note: "Professional services, healthcare &amp; small business" },
    { name: "All of Pinellas County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> and no franchise/margin tax, and St. Petersburg has no city income tax. <strong>C-corporations pay a 5.5% corporate income tax</strong> to the Department of Revenue (with a standard exemption); S-corps, LLCs, and partnerships are generally exempt. We track the position in your books; the Department&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "~7%", desc: "St. Petersburg combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the <strong>Pinellas County discretionary surtax</strong> (about 7% combined), destination-based, with the surtax applying only to the first <strong>$5,000</strong> of a single item. Tracked and reconciled by county in QuickBooks for an accurate Department of Revenue return." },
    { figure: "Services", desc: "Florida taxes a range of <strong>services</strong> other states exempt &mdash; commercial cleaning, pest control, security, certain repairs. St. Pete agencies and service firms that assume they&rsquo;re exempt under-collect; we flag taxable service lines in QuickBooks. Alongside the annual <strong>tangible personal property</strong> return and reemployment tax. (Florida&rsquo;s old commercial-rent tax was repealed Oct 2025.)" },
  ],
  taxNote: "St. Petersburg and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Pinellas County. The corporate-income-tax rate and exemption, the county surtax and the $5,000 single-item cap, the taxability of specific services, and reemployment-tax rates change &mdash; confirm any specific figure before relying on it. Florida&rsquo;s commercial-rent (business rent) sales tax was repealed effective Oct 1, 2025, and no longer applies. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, or reemployment tax returns, determine service taxability, or provide legal or tax advice.",

  industries: [
    { label: "Tech, SaaS &amp; startups", href: "/find-an-accountant/florida/industries/professional-services/", note: "deferred revenue, MRR/ARR, investor-ready books, R&amp;D and grant tracking, and equity comp" },
    { label: "Marine science &amp; research", href: "/find-an-accountant/florida/industries/professional-services/", note: "grant and contract fund accounting, project costing, and compliance-aware records" },
    { label: "Arts, galleries &amp; creative", href: "/find-an-accountant/florida/industries/hospitality/", note: "event and seasonal revenue, consignment and commission tracking, and sales tax on taxable sales" },
    { label: "Tourism &amp; hospitality", href: "/find-an-accountant/florida/industries/hospitality/", note: "the county Tourist Development Tax, POS reconciliation, tipped payroll, and vacation rentals" },
    { label: "Healthcare &amp; professional services", href: "/find-an-accountant/florida/industries/healthcare/", note: "insurance-AR reconciliation, provider payroll, and the PA corporate tax" },
    { label: "Real estate &amp; construction", href: "/find-an-accountant/florida/industries/real-estate/", note: "multi-entity ledgers, trust records, job costing, and the FL real-property-improvement rule" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with deferred revenue and ARR straight, the ~7% sales tax reconciled, and service taxability handled.", href: "/find-an-accountant/florida/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "SaaS / grant / multi-entity cleanup", body: "Deferred-revenue, grant-fund, and multi-entity books drift fast. We get the file CPA-ready &mdash; revenue recognition and fund tracking rebuilt &mdash; then keep it clean.", href: "/find-an-accountant/florida/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with deferred-revenue, project/grant, and multi-entity structure where needed.", href: "/find-an-accountant/florida/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales- &amp; service-tax-ready books", body: "Books structured so your CPA can file Florida sales tax accurately by county &mdash; with taxable service lines flagged and the corporate-tax position clear for C-corps.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  advisoryBody: "Across deferred revenue, grants, and seasonal swings, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your ARR and burn are real, your grants are tracked to their contracts, your sales and service tax are handled, and your C-corp position is clear. That judgment is what a named St. Petersburg bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &middot; Commercial-rent tax repealed Oct 2025 &middot; No tax-filing, taxability-determination, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my St. Petersburg business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for St. Petersburg and Pinellas County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the downtown tech/startup, marine-science, arts, and tourism economy and Florida&rsquo;s sales-tax-on-services and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "No personal income tax. Florida has no state personal income tax and no franchise/margin tax, but C-corporations pay a 5.5% corporate income tax to the Florida Department of Revenue (S-corps, LLCs, and partnerships are generally exempt). There is also 6% sales tax plus the Pinellas County surtax (about 7%) with a $5,000 single-item cap, Florida&rsquo;s tax on services that other states exempt, an annual tangible personal property return, and reemployment tax. We track all of it in your books; the Department&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle SaaS, startup, and grant accounting?", a: "Yes &mdash; it&rsquo;s a defining St. Pete engagement. Downtown SaaS and startups need deferred-revenue and MRR/ARR tracking, investor-ready books, and R&amp;D records; the marine-science cluster runs on grants and contracts that need fund and project tracking. We keep all of that clean in QuickBooks; the tax positions and any grant-compliance filings stay with your CPA and grant administrators, whom we coordinate with." },
    { q: "Does Florida really tax services?", a: "Yes &mdash; and it surprises many St. Pete agencies and service firms. Unlike most states, Florida applies sales tax to a range of services (commercial cleaning, pest control, certain repairs, security, commercial laundry, and others). If you sell taxable services and assume they&rsquo;re exempt, you under-collect. We flag taxable vs. exempt service lines in QuickBooks; your CPA confirms the taxability of your specific services." },
    { q: "What about Florida's old commercial-rent tax?", a: "Florida was the only state to tax commercial real-property rent, but that &ldquo;business rent tax&rdquo; was repealed effective October 1, 2025 (HB 7031) and no longer applies &mdash; St. Pete landlords and tenants no longer collect or remit it. We mention it only because older guidance still references it; we don&rsquo;t treat it as a current obligation. What does apply is Florida&rsquo;s tax on services." },
    { q: "How much does a St. Petersburg bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. SaaS, grant-funded, and multi-entity businesses carry more complexity (deferred revenue, fund tracking, multiple entities), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy St. Petersburg QuickBooks file?", a: "Yes &mdash; especially for SaaS, grant-funded, and multi-entity businesses whose deferred-revenue, fund, or intercompany books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding revenue recognition and grant tracking &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in St. Petersburg?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your St. Pete situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/st-petersburg/",
    name: "St. Petersburg Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for St. Petersburg businesses — fluent in the downtown tech/startup, marine-science, arts, and tourism economy, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), ~7% sales tax with the $5,000 surtax cap, the tax on services, and the tangible personal property return. Fixed-fee, named bookkeeper.",
    serviceName: "St. Petersburg Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and St. Petersburg tax-aware bookkeeping — SaaS/startup deferred-revenue and MRR/ARR tracking, marine-science grant and contract fund accounting, arts and tourism seasonality, Florida sales tax (~7%, $5,000 surtax cap), the tax on services, and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns, determine service taxability, or set tax positions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "St. Petersburg", sameAs: "https://en.wikipedia.org/wiki/St._Petersburg,_Florida" },
      { type: "AdministrativeArea", name: "Pinellas County", sameAs: "https://en.wikipedia.org/wiki/Pinellas_County,_Florida" },
    ],
    audienceType: "St. Petersburg and Pinellas County small and midsize businesses — tech and SaaS startups, marine-science and research, arts and creative, tourism and hospitality, healthcare, professional services, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

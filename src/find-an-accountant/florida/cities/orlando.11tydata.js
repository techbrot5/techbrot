/* /find-an-accountant/florida/cities/orlando/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida tax stack is shared (no personal income tax; 5.5% C-corp
 * income tax; 6% sales tax + county surtax; no franchise/margin tax) — the un-clonable
 * substance is Orlando's ECONOMY: the theme-park and tourism capital of the world (Walt
 * Disney World, Universal), built on hotels, attractions, VACATION RENTALS, and
 * conventions, plus the "Team Orlando" modeling-simulation-and-training/defense cluster
 * and growing tech. The distinctive Florida tax item is the TOURIST DEVELOPMENT TAX (the
 * county "bed tax" on short-term lodging) — central to a vacation-rental and hotel
 * economy. A find-replace "Orlando"->"Miami" reads false (Miami is international finance/
 * trade; Orlando is theme-park tourism + sim/defense).
 *
 * HONESTY: real facts only; Tourist Development Tax rate/remittance, corporate income
 * tax, and filings deferred to Orange County and the Florida DOR and the CPA/EA. No
 * fabricated stats/counts/clients. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/orlando/",
  slug: "orlando",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Orlando Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Bookkeeping for Orlando (Orange County) — tourism, hospitality & vacation rentals, the Tourist Development Tax, 6.5% sales tax. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Orlando" },
  ],
  hero: {
    eyebrow: "Orlando &middot; Orange County &middot; Florida",
    heading: "Orlando bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Orlando businesses &mdash; built around the theme-park and tourism economy, vacation rentals and hospitality, and the simulation/defense cluster, with Florida&rsquo;s no-income-tax structure, the 6.5% sales tax, and the Tourist Development Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Orlando &amp; Central Florida",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Orlando businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in tourism and vacation-rental accounting and Florida&rsquo;s sales-tax and Tourist-Development-Tax structure. The full Orlando summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Orlando &amp; Florida tax figures verified against the Florida Department of Revenue and Orange County.",
  },
  ctaBand: {
    eyebrow: "Orlando businesses start here",
    heading: "Book an Orlando discovery call.",
    lede: "30 minutes. We review where your books stand and your Orlando context &mdash; vacation-rental and hotel accounting, the Tourist Development Tax, high-volume POS, the 6.5% sales tax, seasonal payroll &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=orlando&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Orlando",
  copy: {
    localEyebrow: "Bookkeeping built for how Orlando actually runs",
    areasEyebrow: "Across the city &amp; Central Florida",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "Orlando verticals we know",
    servicesEyebrow: "What we do for Orlando businesses",
    faqEyebrow: "Orlando FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=orlando&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Orlando businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (C-corporations pay a 5.5% corporate income tax; pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is Orlando&rsquo;s economy and the Florida tax stack. Orlando is the <strong>theme-park and tourism capital of the world</strong> (Walt Disney World, Universal), built on <strong>hotels, attractions, vacation rentals, and conventions</strong>, with the <strong>&ldquo;Team Orlando&rdquo; simulation and defense</strong> cluster and growing tech. The distinctive accounting is hospitality and <strong>vacation rentals</strong> &mdash; high-volume POS, and the <strong>Tourist Development Tax</strong> (the county bed tax) tracked as a liability. The Florida stack: the <strong>6% sales tax plus the Orange County surtax (about 6.5%)</strong>, the Tourist Development Tax, the 5.5% corporate income tax on C-corps, and reemployment tax. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Orlando businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Orlando and Central Florida businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in tourism, hospitality, and vacation-rental accounting and Florida&rsquo;s sales-tax and Tourist-Development-Tax structure." },
    { q: "How does the Tourist Development Tax affect my Orlando books?", a: "Hotels, short-term rentals, and vacation homes in Orange County collect a <strong>Tourist Development Tax</strong> (the county &ldquo;bed tax&rdquo;) from guests, on top of state sales tax, and remit it to the county. Because it&rsquo;s collected and held, your books must track it as a <strong>liability, not revenue</strong>. We keep it reconciled for clean remittance; the rate and filing stay with Orange County and your CPA." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs are generally exempt). There is also <strong>6% sales tax plus the Orange County surtax</strong> (about 6.5%), the <strong>Tourist Development Tax</strong> on lodging, and <strong>reemployment tax</strong>. We track all of it; the Florida DOR, Orange County, and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle vacation rentals and short-term rental hosts?", a: "Yes &mdash; it&rsquo;s a core Orlando need. Vacation-rental owners and managers must track <strong>per-property</strong> revenue and expenses, collect and remit state sales tax and the county <strong>Tourist Development Tax</strong>, and reconcile platform payouts (Airbnb, VRBO). We keep the books to that standard so each property&rsquo;s real margin is clear and the tax is clean; the filings stay with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Orlando</strong> &mdash; the theme-park and International Drive tourism corridor, Downtown and the convention district, Lake Nona and the medical/sim corridor, and Winter Park &mdash; plus the wider Central Florida metro, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Orlando runs on tourism at a scale almost nowhere else matches, and that economy &mdash; on top of Florida&rsquo;s tax stack &mdash; is what shapes its books. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work is <strong>hospitality and vacation rentals</strong>. Hotels, attractions, restaurants, and the huge <strong>short-term and vacation-rental</strong> market run high-volume <strong>POS</strong> and platform payouts, with the <strong>Tourist Development Tax</strong> (the Orange County bed tax) collected on lodging and remitted to the county &mdash; held money that must be tracked as a <strong>liability, not revenue</strong>. The <strong>&ldquo;Team Orlando&rdquo;</strong> modeling, simulation, and training cluster adds government and defense contracting, and a growing tech and Lake Nona medical economy rounds it out.",
    "The Florida tax stack still has to be right: <strong>6% sales tax plus the Orange County surtax</strong> (about 6.5%), the <strong>Tourist Development Tax</strong>, the <strong>5.5% corporate income tax</strong> on C-corps, <strong>reemployment tax</strong>, and an annual <strong>tangible personal property</strong> return for equipment. A generic bookkeeper books the bed tax as revenue or never reconciles platform payouts; we put a named bookkeeper on your file who tracks per-property results, the Tourist Development Tax, and the Florida positions cleanly &mdash; with the filings left to your CPA.",
    "The result: books that reflect how an Orlando business actually runs &mdash; per-property vacation-rental results clear, POS and platform payouts reconciled, the Tourist Development Tax tracked as a liability, sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Theme parks &amp; International Drive", note: "Attractions, hotels &amp; hospitality" },
    { name: "Downtown &amp; the convention district", note: "Conventions, hospitality &amp; professional services" },
    { name: "Lake Nona &amp; the medical/sim corridor", note: "Healthcare, simulation, defense &amp; tech" },
    { name: "Vacation-rental communities", note: "Short-term rentals, property managers &amp; hosts" },
    { name: "Winter Park &amp; the suburbs", note: "Professional services, retail &amp; small business" },
    { name: "All of Central Florida", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "~6.5%", desc: "Orlando combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Orange County discretionary surtax (about 6.5% in the county), administered by the Florida DOR. Tracked and reconciled in QuickBooks against high-volume hospitality POS." },
    { figure: "Bed tax", desc: "Tourist Development Tax &mdash; Orange County levies a &ldquo;bed tax&rdquo; on hotels, short-term rentals, and vacation homes, collected from guests on top of sales tax and remitted to the county. It&rsquo;s held money, so we track it as a <strong>liability, not revenue</strong>; the rate and remittance stay with Orange County and your CPA." },
  ],
  taxNote: "Orlando and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Orange County. The corporate-income-tax rate, county surtax, Tourist Development Tax rate, and reemployment-tax rates change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, reemployment, or tourist-development tax returns, or provide legal or tax advice.",

  industries: [
    { label: "Hotels &amp; lodging", href: "/accounting/industries/restaurant/", note: "Tourist Development Tax as a liability, night-audit reconciliation, and seasonal payroll" },
    { label: "Vacation &amp; short-term rentals", href: "/accounting/industries/real-estate/", note: "per-property results, platform (Airbnb/VRBO) payout reconciliation, and sales + bed tax tracking" },
    { label: "Restaurants &amp; attractions", href: "/accounting/industries/restaurant/", note: "high-volume POS reconciled to the Florida sales-tax return, ticketing/deferred-admission revenue, and tipped payroll" },
    { label: "Simulation, defense &amp; government", href: "/accounting/industries/professional-services/", note: "&ldquo;Team Orlando&rdquo; contractors &mdash; contract cost accounting, job costing, and DCAA-aware records where applicable" },
    { label: "Healthcare &amp; tech (Lake Nona)", href: "/accounting/industries/saas/", note: "practice bookkeeping, payer reconciliation, and <a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> for SaaS" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the Tourist Development Tax tracked as a liability and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Vacation-rental &amp; hospitality cleanup", body: "Per-property and platform-payout books fall behind fast. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with per-property class, POS, and bed-tax-liability structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; bed-tax-ready books", body: "Books structured so your CPA can file Florida sales tax and the Tourist Development Tax accurately, with POS and platform payouts reconciled.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Across dozens of rental units or a peak-and-off-season attraction, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing each property&rsquo;s real margin, your bed-tax liability is clean for remittance, your platform payouts reconcile, and your seasonal labor is real against occupancy. That judgment is what a named Orlando bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Orange County &middot; No tax-filing, bed-tax-remittance, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Orlando business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Orlando and Central Florida, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in tourism, hospitality, and vacation-rental accounting and Florida&rsquo;s sales-tax and Tourist-Development-Tax structure." },
    { q: "How does the Tourist Development Tax affect my books?", a: "Hotels, short-term rentals, and vacation homes in Orange County collect a Tourist Development Tax &mdash; the county &ldquo;bed tax&rdquo; &mdash; from guests, on top of state sales tax, and remit it to the county. Because that money is collected and held, it must be tracked in your books as a liability, not revenue &mdash; a common error that overstates income. We keep it reconciled so remittance is clean; the rate and filing schedule stay with Orange County and your CPA." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt. There is also 6% sales tax plus the Orange County surtax (about 6.5%), the Tourist Development Tax on lodging, and reemployment tax. We track all of it; the Florida DOR, Orange County, and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle vacation rentals and short-term rental hosts?", a: "Yes &mdash; it&rsquo;s a core Orlando engagement. Vacation-rental owners and managers need per-property revenue and expense tracking, reconciliation of platform payouts from Airbnb and VRBO, and collection and remittance of both state sales tax and the county Tourist Development Tax. We keep the books so each property&rsquo;s real margin is clear and the tax is tracked cleanly; the filings stay with your CPA, whom we coordinate with." },
    { q: "Can you reconcile high-volume hospitality POS?", a: "Yes &mdash; it&rsquo;s essential for Orlando hospitality. We set the books up so your POS, merchant deposits, and the Florida sales-tax return all tie, with the Tourist Development Tax separated as a liability. That turns a month-end scramble into a clean, repeatable close and makes your statements trustworthy for your CPA and any lender." },
    { q: "How much does an Orlando bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Hotels, attractions, and multi-property rental operations carry more reconciliation work (POS, bed tax, per-property), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Orlando QuickBooks file?", a: "Yes &mdash; especially for hospitality and vacation-rental businesses whose books fell behind in peak season or booked the bed tax as revenue. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including fixing the Tourist Development Tax liability and rebuilding per-property and POS reconciliation &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Orlando?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Orlando situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/orlando/",
    name: "Orlando Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Orlando businesses — fluent in tourism, hospitality, and vacation-rental accounting, the Tourist Development Tax, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), and ~6.5% sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Orlando Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Orlando tax-aware bookkeeping — hospitality and vacation-rental per-property results, platform payout reconciliation, the Tourist Development Tax tracked as a liability, Florida sales tax (~6.5%), and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Orlando", sameAs: "https://en.wikipedia.org/wiki/Orlando,_Florida" },
      { type: "AdministrativeArea", name: "Orange County", sameAs: "https://en.wikipedia.org/wiki/Orange_County,_Florida" },
    ],
    audienceType: "Orlando and Central Florida small and midsize businesses — hotels and lodging, vacation and short-term rentals, restaurants and attractions, simulation defense and government contractors, healthcare and tech, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

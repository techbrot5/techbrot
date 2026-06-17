/* /find-an-accountant/florida/cities/fort-lauderdale/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida tax stack is shared (no personal income tax; 5.5% C-corp
 * income tax; 6% sales tax + county surtax) — the un-clonable substance is Fort
 * Lauderdale's ECONOMY: the YACHTING CAPITAL of the world (the marine industry — boat
 * building and refit, brokerage, marine services, and the Fort Lauderdale International
 * Boat Show), plus tourism, waterfront real estate, and finance. The distinctive Florida
 * tax item here is the BOAT/VESSEL SALES-TAX CAP — Florida caps the sales tax on a boat
 * purchase at a maximum of $18,000, with specific use-tax rules for vessels — genuinely
 * marine-and-Florida-specific. A find-replace "Fort Lauderdale"->"Jacksonville" reads
 * false (Jacksonville is JAXPORT cargo logistics + insurance; Fort Lauderdale is the
 * yachting/marine industry + tourism).
 *
 * HONESTY: real facts only; the vessel sales/use-tax cap and rules, charter taxability,
 * corporate income tax, and filings deferred to the Florida DOR and the CPA/EA. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/fort-lauderdale/",
  slug: "ftl",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Fort Lauderdale Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale businesses — fluent in marine/yachting, tourism & real-estate accounting, Florida's no-income-tax structure, 7% sales tax, and the boat sales-tax cap. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Fort Lauderdale" },
  ],
  hero: {
    eyebrow: "Fort Lauderdale &middot; Broward County &middot; Florida",
    heading: "Fort Lauderdale bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale businesses &mdash; built around the marine and yachting industry, tourism, and waterfront real estate, with Florida&rsquo;s no-income-tax structure, the 7% sales tax, and the boat sales-tax cap handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Fort Lauderdale &amp; Broward County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in marine-industry and tourism accounting and Florida&rsquo;s sales-tax and corporate-tax structure. The full Fort Lauderdale summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Fort Lauderdale &amp; Florida tax figures verified against the Florida Department of Revenue and Broward County.",
  },
  ctaBand: {
    eyebrow: "Fort Lauderdale businesses start here",
    heading: "Book a Fort Lauderdale discovery call.",
    lede: "30 minutes. We review where your books stand and your Fort Lauderdale context &mdash; marine brokerage and service accounting, the boat sales-tax cap, charter taxability, the 7% sales tax, tourist-development tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=fort-lauderdale&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Fort Lauderdale",
  copy: {
    localEyebrow: "Bookkeeping built for how Fort Lauderdale actually runs",
    areasEyebrow: "Across the city &amp; Broward County",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "Fort Lauderdale verticals we know",
    servicesEyebrow: "What we do for Fort Lauderdale businesses",
    faqEyebrow: "Fort Lauderdale FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=fort-lauderdale&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (C-corporations pay a 5.5% corporate income tax; pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is Fort Lauderdale&rsquo;s economy and the Florida tax stack. Fort Lauderdale is the <strong>yachting capital of the world</strong> &mdash; the <strong>marine industry</strong> (boat building and refit, brokerage, marine services, and the Fort Lauderdale International Boat Show) &mdash; plus tourism, waterfront <strong>real estate</strong>, and finance. The distinctive accounting is marine brokerage and service, <strong>charter</strong> operations, and the <strong>boat sales-tax cap</strong> (Florida caps the sales tax on a boat purchase at a maximum of $18,000). The Florida stack: the <strong>6% sales tax plus the Broward surtax (about 7%)</strong>, the vessel sales/use-tax rules, the 5.5% corporate income tax on C-corps, and reemployment tax. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Fort Lauderdale businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale and Broward County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in marine-industry, tourism, and real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "What is Florida's boat sales-tax cap?", a: "Florida caps the <strong>sales tax on a boat (vessel) purchase at a maximum of $18,000</strong>, with specific use-tax rules for vessels brought into the state. For Fort Lauderdale&rsquo;s marine industry &mdash; dealers, brokers, and buyers &mdash; this is a defining detail. We track vessel sales, the capped tax, and use-tax positions cleanly in your books; the exact application and any exemption stay with the Florida Department of Revenue and your CPA." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt). There is also <strong>6% sales tax plus the Broward surtax</strong> (about 7%), the vessel sales/use-tax rules, and <strong>reemployment tax</strong>. We track all of it; the Florida DOR and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle marine and yacht businesses?", a: "Yes &mdash; it&rsquo;s the defining Fort Lauderdale need. Boat dealers, <strong>yacht brokers</strong>, refit and repair yards, and charter operators need brokerage <strong>commission and escrow/trust</strong> accounting, inventory and floor-plan financing for dealers, job costing for refit, charter taxability, and the boat sales-tax cap tracked. We keep the books to that standard; the tax filings stay with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Fort Lauderdale</strong> &mdash; the marine and Marina Mile / 17th Street corridor, Downtown and Las Olas, the beach and waterfront, and the airport/Cypress Creek business district &mdash; plus the wider Broward County, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Fort Lauderdale is the yachting capital of the world, and the marine industry &mdash; on top of Florida&rsquo;s tax stack &mdash; is what makes its books their own discipline. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work is <strong>marine</strong>: boat <strong>dealers</strong> (inventory and floor-plan financing), <strong>yacht brokers</strong> (commission and escrow/trust accounting on high-value sales), refit and repair <strong>yards</strong> (job costing), and <strong>charter</strong> operators (charter taxability). The <strong>Fort Lauderdale International Boat Show</strong> drives a seasonal surge. The defining Florida detail is the <strong>boat sales-tax cap</strong> &mdash; the state caps the sales tax on a vessel purchase at a maximum of $18,000, with specific use-tax rules for vessels &mdash; which a non-marine bookkeeper simply doesn&rsquo;t know. Tourism and waterfront <strong>real estate</strong> round it out.",
    "The Florida tax stack still has to be right: <strong>6% sales tax plus the Broward surtax</strong> (about 7%), the vessel sales/use-tax rules, the <strong>5.5% corporate income tax</strong> on C-corps, <strong>reemployment tax</strong>, and the annual <strong>tangible personal property</strong> return. We put a named bookkeeper on your file who handles brokerage escrow, refit job costing, charter taxability, and the boat-tax cap cleanly &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Fort Lauderdale business actually runs &mdash; brokerage commissions and escrow clean, refit jobs costed, charter and vessel sales tax handled with the cap applied, real-estate entities tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Marina Mile &amp; 17th Street corridor", note: "Marine industry, brokerage, refit &amp; service" },
    { name: "Downtown &amp; Las Olas", note: "Finance, professional services &amp; hospitality" },
    { name: "Beach &amp; waterfront", note: "Tourism, hospitality &amp; real estate" },
    { name: "Cypress Creek &amp; the airport district", note: "Corporate, tech &amp; professional services" },
    { name: "Greater Broward County", note: "Hollywood, Pompano &amp; the wider county" },
    { name: "All of Broward County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "~7%", desc: "Fort Lauderdale combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Broward County discretionary surtax (about 7% in the county), administered by the Florida DOR. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "$18K cap", desc: "Boat sales-tax cap &mdash; Florida caps the <strong>sales tax on a vessel purchase at a maximum of $18,000</strong>, with specific use-tax rules for vessels. Defining for Fort Lauderdale&rsquo;s marine industry. We track vessel sales and the capped tax; the application and exemptions stay with the Florida DOR and your CPA." },
  ],
  taxNote: "Fort Lauderdale and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Broward County. The corporate-income-tax rate, county surtax, the vessel sales/use-tax cap and rules, and reemployment-tax rates change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, or reemployment tax returns, determine vessel-tax application, or provide legal or tax advice.",

  industries: [
    { label: "Marine: dealers, brokers &amp; yards", href: "/accounting/industries/real-estate/", note: "brokerage commission and escrow/trust accounting, dealer inventory and floor-plan financing, refit job costing, and the boat sales-tax cap" },
    { label: "Charter &amp; yacht management", href: "/accounting/industries/professional-services/", note: "charter taxability, owner statements, crew payroll, and multi-vessel cost tracking" },
    { label: "Tourism &amp; hospitality", href: "/accounting/industries/restaurant/", note: "waterfront hotels and restaurants &mdash; Tourist Development Tax, high-volume POS, and tipped payroll" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "waterfront and luxury &mdash; commission, multi-entity ledgers, and trust accounting" },
    { label: "Finance &amp; professional services", href: "/accounting/industries/professional-services/", note: "project profitability, reconciliation discipline, and contractor classification" },
    { label: "E-commerce &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with brokerage escrow and vessel sales tax handled and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Marine / brokerage cleanup", body: "Brokerage escrow, dealer inventory, and refit job books carry detail most files miss. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with escrow, inventory, job-costing, and charter structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; vessel-tax-ready books", body: "Books structured so your CPA can file Florida sales tax accurately, with the boat sales-tax cap and charter taxability tracked correctly.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a high-value yacht sale or a refit yard, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your brokerage escrow is clean, your refit jobs are costed, the boat sales-tax cap is applied right, and your sales tax is handled. That judgment is what a named Fort Lauderdale bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Broward County &middot; No tax-filing, vessel-tax-determination, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Fort Lauderdale business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale and the wider Broward County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in marine-industry, tourism, and real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "What is Florida's boat sales-tax cap?", a: "Florida caps the sales tax on a boat (vessel) purchase at a maximum of $18,000, and applies specific use-tax rules to vessels brought into the state. For Fort Lauderdale&rsquo;s marine industry &mdash; dealers, brokers, and buyers &mdash; it&rsquo;s a defining detail that a non-marine bookkeeper usually doesn&rsquo;t know. We track vessel sales, the capped tax, and any use-tax position cleanly in your books; the exact application and any exemptions stay with the Florida Department of Revenue and your CPA." },
    { q: "Do you handle marine, yacht, and boat businesses?", a: "Yes &mdash; it&rsquo;s the defining Fort Lauderdale engagement. Boat dealers need inventory and floor-plan financing tracked; yacht brokers need commission and escrow/trust accounting on high-value sales; refit and repair yards need job costing; and charter operators need charter taxability handled. We keep all of it clean in QuickBooks, with the boat sales-tax cap applied; the tax filings stay with your CPA, whom we coordinate with." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt. There is also 6% sales tax plus the Broward surtax (about 7%), the vessel sales/use-tax rules, and reemployment tax. We track all of it; the Florida DOR and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle charter and yacht-management accounting?", a: "Yes. Charter and yacht-management businesses need charter taxability handled, owner statements prepared, crew payroll run, and multi-vessel costs tracked separately. We keep the books to that standard so each vessel&rsquo;s results and the owner reporting are clean; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "How much does a Fort Lauderdale bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Marine dealers, brokers, and refit yards carry more complexity (escrow, inventory, job costing), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Fort Lauderdale QuickBooks file?", a: "Yes &mdash; especially for marine businesses whose brokerage escrow, dealer inventory, or refit job books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding escrow/trust tracking and job costing &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Fort Lauderdale?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Fort Lauderdale situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/fort-lauderdale/",
    name: "Fort Lauderdale Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Fort Lauderdale businesses — fluent in marine/yachting, tourism, and real-estate accounting, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), ~7% sales tax, and the boat sales-tax cap. Fixed-fee, named bookkeeper.",
    serviceName: "Fort Lauderdale Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Fort Lauderdale tax-aware bookkeeping — marine brokerage commission and escrow, dealer inventory and floor-plan financing, refit job costing, charter taxability, the boat sales-tax cap, Florida sales tax (~7%), and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns or determine vessel-tax application — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Fort Lauderdale", sameAs: "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida" },
      { type: "AdministrativeArea", name: "Broward County", sameAs: "https://en.wikipedia.org/wiki/Broward_County,_Florida" },
    ],
    audienceType: "Fort Lauderdale and Broward County small and midsize businesses — marine industry (dealers, yacht brokers, refit yards), charter and yacht management, tourism and hospitality, real estate, finance and professional services, and e-commerce",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

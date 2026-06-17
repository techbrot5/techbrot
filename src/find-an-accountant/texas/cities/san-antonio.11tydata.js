/* /find-an-accountant/texas/cities/san-antonio/ — TX CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Texas tax stack is shared (no income tax; franchise/margin tax;
 * 8.25% sales tax) — the un-clonable substance is San Antonio's ECONOMY: it is "Military
 * City USA" (Joint Base San Antonio and a dense defense presence) with a major military/
 * government-CONTRACTING and CYBERSECURITY base, a large healthcare and bioscience
 * sector (South Texas Medical Center), advanced manufacturing (Toyota truck plant), and
 * a huge tourism economy (the Alamo, the River Walk → Hotel Occupancy Tax). The
 * distinctive accounting is GOVERNMENT/DEFENSE CONTRACTING (DCAA cost pools, contract
 * billing), cyber, healthcare, and hospitality. A find-replace "San Antonio"->"Austin"
 * reads false (Austin is startups/chips/music; SA is military/cyber/bioscience/tourism).
 *
 * HONESTY: real facts only; DCAA rate/contract matters, HOT remittance, and filings
 * deferred to the CPA/specialists and City of San Antonio. No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cities/san-antonio/",
  slug: "sa",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "San Antonio Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for San Antonio businesses — fluent in government/defense contracting, cyber & healthcare accounting, the Texas franchise (margin) tax, 8.25% sales tax, and the Hotel Occupancy Tax for tourism. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "San Antonio" },
  ],
  hero: {
    eyebrow: "San Antonio &middot; Bexar County &middot; Texas",
    heading: "San Antonio bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for San Antonio businesses &mdash; built around the city&rsquo;s military and government-contracting base, cybersecurity and bioscience, and the River Walk tourism economy, with the Texas franchise &ldquo;margin&rdquo; tax and 8.25% sales tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "San Antonio &amp; South Texas",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for San Antonio businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in government-contracting and healthcare accounting and the Texas franchise (margin) tax and sales-tax structure. The full San Antonio summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. San Antonio &amp; Texas tax figures verified against the Texas Comptroller of Public Accounts and the City of San Antonio.",
  },
  ctaBand: {
    eyebrow: "San Antonio businesses start here",
    heading: "Book a San Antonio discovery call.",
    lede: "30 minutes. We review where your books stand and your San Antonio context &mdash; government-contract cost accounting, cyber and healthcare structure, the Texas margin tax, 8.25% sales tax, the Hotel Occupancy Tax for tourism &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&city=san-antonio&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "San Antonio",
  copy: {
    localEyebrow: "Bookkeeping built for how San Antonio actually runs",
    areasEyebrow: "Across the city &amp; South Texas",
    taxEyebrow: "The Texas taxes we build into your books",
    industriesEyebrow: "San Antonio verticals we know",
    servicesEyebrow: "What we do for San Antonio businesses",
    faqEyebrow: "San Antonio FAQ",
  },
  advisoryCtaHref: "/contact/?intent=texas-advisory&state=texas&city=san-antonio&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for San Antonio businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Texas has <strong>no state income tax</strong>, and San Antonio levies no city income or gross-receipts tax &mdash; so what shapes the books is the city&rsquo;s economy and the Texas tax stack. San Antonio is <strong>&ldquo;Military City USA&rdquo;</strong> &mdash; Joint Base San Antonio and a dense defense presence drive <strong>government and defense contracting</strong> and a major <strong>cybersecurity</strong> cluster &mdash; alongside a large <strong>healthcare and bioscience</strong> sector and a huge <strong>tourism</strong> economy (the Alamo, the River Walk). The distinctive accounting is <strong>government-contract cost accounting</strong> (cost pools, contract billing), cyber, healthcare, and hospitality where the <strong>Hotel Occupancy Tax</strong> applies. The Texas stack: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (Comptroller; below a revenue threshold no tax is due) and <strong>8.25% sales tax</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Texas taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for San Antonio businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Antonio and South Texas businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in government-contracting, cyber, and healthcare accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Do you handle government and defense contractors?", a: "Yes &mdash; it&rsquo;s the defining San Antonio need given Joint Base San Antonio and the city&rsquo;s defense and cyber base. Contractors need <strong>government cost accounting</strong> &mdash; indirect cost pools, separating allowable from unallowable costs, contract billing, and DCAA-aware records. We keep the books to that standard in QuickBooks and coordinate with your CPA and any government-contract specialist on rate submissions and audits." },
    { q: "Does Texas have a state income tax?", a: "<strong>No.</strong> Texas has no state personal or corporate income tax, and San Antonio has no city income or gross-receipts tax. Businesses face the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; no tax due below a revenue threshold &mdash; plus <strong>8.25% sales tax</strong> and the <strong>Hotel Occupancy Tax</strong> where lodging applies. We track all of it; the Comptroller, the City of San Antonio, and your CPA confirm what&rsquo;s due." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Government contractors and healthcare practices often need extra structure (cost pools, payer reconciliation), which we scope transparently before any work begins." },
    { q: "Which areas do you serve?", a: "<strong>All of San Antonio</strong> &mdash; Downtown and the River Walk, the Medical Center and bioscience corridor, the cyber and Port San Antonio area, and the military and northeast corridors &mdash; plus the wider South Texas region, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "San Antonio is a military and healthcare city with a tourism core, and that economy &mdash; not a city tax &mdash; is what shapes its books. Texas has no state income tax, and San Antonio levies no city income or gross-receipts tax.",
    "As <strong>&ldquo;Military City USA,&rdquo;</strong> San Antonio is built around Joint Base San Antonio and a deep defense presence, which drives <strong>government and defense contracting</strong> and one of the country&rsquo;s largest <strong>cybersecurity</strong> clusters. Contracting brings requirements most bookkeepers never see &mdash; <strong>indirect cost pools</strong>, separating allowable from unallowable costs, <strong>contract billing</strong>, and DCAA-aware records. The <strong>South Texas Medical Center</strong> anchors a large healthcare and bioscience sector, and advanced manufacturing (including a major truck plant) rounds it out.",
    "On top of that sits the <strong>tourism</strong> economy &mdash; the Alamo, the River Walk, and the convention business &mdash; where the <strong>Hotel Occupancy Tax</strong> applies to lodging and must be tracked as a liability. The Texas tax stack still has to be right: the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> (no tax due below a revenue threshold, but tracked) and <strong>8.25% sales and use tax</strong>. We put a named bookkeeper on your file who handles contract cost accounting, healthcare reconciliation, or hospitality cleanly &mdash; with the tax positions left to your CPA.",
    "The result: books that reflect how a San Antonio business actually runs &mdash; contract cost pools and billing clean, healthcare payers reconciled, HOT tracked as a liability, the margin tax and sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the River Walk", note: "Tourism, hospitality &amp; professional services" },
    { name: "South Texas Medical Center", note: "Healthcare, bioscience &amp; research" },
    { name: "Port San Antonio &amp; the cyber corridor", note: "Cybersecurity, defense &amp; aerospace" },
    { name: "Military &amp; northeast corridors", note: "Government contractors &amp; services" },
    { name: "North &amp; Northwest San Antonio", note: "Corporate, healthcare &amp; small business" },
    { name: "All of South Texas", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Texas has <strong>no state personal or corporate income tax</strong> and San Antonio has no city income/gross-receipts tax. Instead the state levies the <strong>Texas Franchise (&ldquo;margin&rdquo;) tax</strong> through the Comptroller &mdash; <strong>no tax due below a revenue threshold</strong>. We track the position; the Comptroller&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "8.25%", desc: "San Antonio combined sales &amp; use tax &mdash; Texas&rsquo;s 6.25% state rate plus local add-ons up to 2% (8.25% in the city), administered by the Texas Comptroller, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "HOT", desc: "Hotel Occupancy Tax &mdash; the City of San Antonio and the state levy HOT on lodging, central to a River Walk and convention tourism economy. It&rsquo;s collected and held for the taxing authority, so we track it as a <strong>liability, not revenue</strong>; the rate and remittance stay with the City of San Antonio and your CPA." },
  ],
  taxNote: "San Antonio and Texas tax figures are educational and current as of the review date, verified against the Texas Comptroller of Public Accounts and the City of San Antonio. The franchise-tax threshold and rates, HOT rate, and local sales-tax components change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Texas franchise, sales, or hotel-occupancy tax returns, handle DCAA rate submissions, or provide legal or tax advice. Government-contract matters are coordinated with your CPA and specialists.",

  industries: [
    { label: "Government &amp; defense contractors", href: "/accounting/industries/professional-services/", note: "indirect cost pools, allowable-vs-unallowable costs, contract billing, and DCAA-aware records" },
    { label: "Cybersecurity &amp; IT services", href: "/accounting/industries/saas/", note: "project and contract accounting, <a href=\"/glossary/deferred-revenue/\">deferred revenue</a> on managed services, and clean books for government and enterprise clients" },
    { label: "Healthcare &amp; bioscience", href: "/accounting/industries/professional-services/", note: "Medical Center practices &mdash; practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "Tourism &amp; hospitality", href: "/accounting/industries/restaurant/", note: "River Walk hotels and restaurants &mdash; Hotel Occupancy Tax, high-volume POS, and tipped payroll" },
    { label: "Advanced manufacturing", href: "/accounting/industries/restaurant/", note: "inventory and COGS, production costing, and Texas sales/use tax on equipment and materials" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with the margin-tax position tracked and 8.25% sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Government-contract cleanup", body: "Contract books need cost pools and billing done right. We get the file CPA-ready &mdash; cost structure rebuilt &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with cost-pool, contract-billing, and payer structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; HOT-ready books", body: "Books structured so your CPA can file the Texas margin and sales tax accurately, with the Hotel Occupancy Tax tracked as a liability for hospitality.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a government contract, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your indirect rates are defensible, your allowable costs are separated cleanly, your billing ties to the contract, and your margin-tax position is tracked. That judgment is what a named San Antonio bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Texas Comptroller &amp; the City of San Antonio &middot; No tax-filing, DCAA-rate, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my San Antonio business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for San Antonio and South Texas, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in government-contracting, cyber, and healthcare accounting and the Texas franchise (margin) tax and sales-tax structure." },
    { q: "Do you handle government and defense contractors?", a: "Yes &mdash; it&rsquo;s the defining San Antonio engagement, given Joint Base San Antonio and the city&rsquo;s defense and cyber base. Contractors need government cost accounting &mdash; indirect cost pools, separating allowable from unallowable costs, contract billing, and keeping records in a DCAA-aware structure. We keep the books to that standard in QuickBooks and coordinate with your CPA and any government-contract specialist on rate submissions and audits. We handle the operational accounting; we don&rsquo;t file returns, handle DCAA rate submissions, or represent you before any agency." },
    { q: "Does Texas have a state income tax?", a: "No. Texas has no state personal or corporate income tax, and San Antonio has no city income or gross-receipts tax. Businesses face the Texas Franchise Tax &mdash; the &ldquo;margin&rdquo; tax &mdash; administered by the Texas Comptroller, with no tax due below a revenue threshold. There is also 8.25% sales tax in San Antonio and a Hotel Occupancy Tax on lodging. We track all of it; the Comptroller, the City of San Antonio, and your CPA confirm what&rsquo;s due." },
    { q: "Do you work with cybersecurity and IT-services companies?", a: "Yes &mdash; it&rsquo;s a major San Antonio cluster. Cyber and managed-IT companies need project and contract accounting, deferred revenue on managed-services agreements, and clean books that government and enterprise clients can rely on. We keep the books to that standard; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "Do you handle River Walk hotels and restaurants?", a: "Yes. Tourism and hospitality businesses on and around the River Walk need the Hotel Occupancy Tax tracked as a liability, high-volume POS reconciled to deposits and the sales-tax return, and tipped payroll handled cleanly. We keep the books to that standard; HOT remittance and the tax filings stay with the City of San Antonio and your CPA." },
    { q: "How much does a San Antonio bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Government contractors and healthcare practices often need additional structure (cost pools, payer reconciliation), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy San Antonio QuickBooks file?", a: "Yes &mdash; especially for government contractors and healthcare practices whose books fell behind or never had the right cost structure. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding cost pools or payer reconciliation &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in San Antonio?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your San Antonio situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cities/san-antonio/",
    name: "San Antonio Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for San Antonio businesses — fluent in government/defense contracting, cybersecurity, and healthcare accounting, the Texas franchise (margin) tax, 8.25% sales tax, and the Hotel Occupancy Tax for River Walk tourism. Fixed-fee, named bookkeeper.",
    serviceName: "San Antonio Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and San Antonio tax-aware bookkeeping — government-contract cost pools and billing, cyber and managed-services revenue, healthcare payer reconciliation, the Texas franchise (margin) tax, 8.25% sales tax, and the Hotel Occupancy Tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Texas returns or handle DCAA rate submissions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "San Antonio", sameAs: "https://en.wikipedia.org/wiki/San_Antonio" },
      { type: "AdministrativeArea", name: "Bexar County", sameAs: "https://en.wikipedia.org/wiki/Bexar_County,_Texas" },
    ],
    audienceType: "San Antonio and South Texas small and midsize businesses — government and defense contractors, cybersecurity and IT services, healthcare and bioscience, tourism and hospitality, advanced manufacturing, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

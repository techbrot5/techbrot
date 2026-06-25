/* /find-an-accountant/florida/cities/tampa/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida tax stack is shared (no personal income tax; 5.5% C-corp
 * income tax; 6% sales tax + county surtax) — the un-clonable substance is Tampa's
 * ECONOMY: a finance and banking back-office hub, a large healthcare sector, Port Tampa
 * Bay (logistics/cargo/cruise), MacDill Air Force Base and U.S. Central Command (a deep
 * defense/government-contracting presence), and a growing tech/startup scene. The
 * distinctive Florida tax item here is the TANGIBLE PERSONAL PROPERTY (TPP) tax — the
 * annual DR-405 return on business equipment (with a $25,000 exemption) filed with the
 * county property appraiser — fitting Tampa's equipment-heavy finance, healthcare, and
 * port operations. A find-replace "Tampa"->"Orlando" reads false (Orlando is theme-park
 * tourism; Tampa is finance/healthcare/port/defense).
 *
 * HONESTY: real facts only; TPP valuation, corporate income tax, DCAA, and filings
 * deferred to the Hillsborough County Property Appraiser, the Florida DOR, and CPA/EA. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/tampa/",
  slug: "tampa",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Tampa Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Bookkeeping for Tampa (Hillsborough County) — finance, healthcare, port & defense, ~7.5% sales tax, and the TPP (DR-405) return. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Tampa" },
  ],
  hero: {
    eyebrow: "Tampa &middot; Hillsborough County &middot; Florida",
    heading: "Tampa bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Tampa businesses &mdash; built around the finance, healthcare, port, and defense economy of the bay, with Florida&rsquo;s no-income-tax structure, the 7.5% sales tax, and the tangible personal property return handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Tampa Bay &amp; the Gulf Coast",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Tampa businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in finance, healthcare, and defense-contracting accounting and Florida&rsquo;s sales-tax and corporate-tax structure. The full Tampa summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Tampa &amp; Florida tax figures verified against the Florida Department of Revenue and Hillsborough County.",
  },
  ctaBand: {
    eyebrow: "Tampa businesses start here",
    heading: "Book a Tampa discovery call.",
    lede: "30 minutes. We review where your books stand and your Tampa context &mdash; finance and healthcare reconciliation, government-contract cost accounting, the 7.5% sales tax, the tangible personal property return, reemployment tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=tampa&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Tampa",
  copy: {
    localEyebrow: "Bookkeeping built for how Tampa actually runs",
    areasEyebrow: "Across the bay &amp; the Gulf Coast",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "Tampa Bay verticals we know",
    servicesEyebrow: "What we do for Tampa businesses",
    faqEyebrow: "Tampa FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=tampa&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Tampa businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (C-corporations pay a 5.5% corporate income tax; pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is Tampa&rsquo;s economy and the Florida tax stack. Tampa Bay is a <strong>finance and banking back-office</strong> hub, a large <strong>healthcare</strong> sector, <strong>Port Tampa Bay</strong> (logistics, cargo, cruise), and home to <strong>MacDill Air Force Base and U.S. Central Command</strong> &mdash; a deep <strong>defense and government-contracting</strong> presence &mdash; with growing tech. The distinctive accounting is finance and healthcare reconciliation, government-contract cost accounting, and equipment-heavy operations. The Florida stack: the <strong>6% sales tax plus the Hillsborough surtax (about 7.5%)</strong>, the <strong>tangible personal property (DR-405) return</strong> on business equipment, the 5.5% corporate income tax on C-corps, and reemployment tax. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Tampa businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Tampa Bay and Gulf Coast businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in finance, healthcare, and defense-contracting accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt). There is also <strong>6% sales tax plus the Hillsborough surtax</strong> (about 7.5%), the <strong>tangible personal property return</strong> on business equipment, and <strong>reemployment tax</strong>. We track all of it; the Florida DOR, the county, and your CPA confirm what&rsquo;s due." },
    { q: "What is the tangible personal property (TPP) return?", a: "Florida businesses must file an annual <strong>tangible personal property return (Form DR-405)</strong> with the county property appraiser, listing business equipment, furniture, and fixtures for property tax &mdash; with a <strong>$25,000 exemption</strong>. We keep your fixed-asset records clean and current so the return is straightforward; the valuation and any appeal stay with your CPA or a property-tax consultant." },
    { q: "Do you handle government and defense contractors?", a: "Yes &mdash; with MacDill and U.S. Central Command, Tampa has a deep defense and government-contracting base. Contractors need <strong>government cost accounting</strong> &mdash; indirect cost pools, allowable-vs-unallowable costs, contract billing, and DCAA-aware records. We keep the books to that standard in QuickBooks and coordinate with your CPA and any government-contract specialist." },
    { q: "Which areas do you serve?", a: "<strong>All of Tampa</strong> &mdash; Downtown and Water Street, Westshore (the business district), the port and Ybor City, and the USF/medical area &mdash; plus the wider Tampa Bay region including St. Petersburg and Clearwater, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Tampa Bay is a finance, healthcare, port, and defense economy &mdash; equipment-heavy and contract-driven &mdash; and that, on top of Florida&rsquo;s tax stack, is what shapes its books. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work spans <strong>finance and banking back-office</strong> operations (clean reconciliation and controls), a large <strong>healthcare</strong> sector (practice bookkeeping and payer reconciliation), <strong>Port Tampa Bay</strong> logistics and cargo, and a deep <strong>defense and government-contracting</strong> base built around <strong>MacDill Air Force Base and U.S. Central Command</strong> &mdash; where indirect cost pools, allowable-vs-unallowable costs, and DCAA-aware records rule.",
    "The Florida tax stack still has to be right: <strong>6% sales tax plus the Hillsborough surtax</strong> (about 7.5%), the annual <strong>tangible personal property (DR-405) return</strong> on business equipment (with a $25,000 exemption) &mdash; which matters for equipment-heavy finance, healthcare, and port operations &mdash; the <strong>5.5% corporate income tax</strong> on C-corps, and <strong>reemployment tax</strong>. We put a named bookkeeper on your file who handles contract cost accounting, payer reconciliation, and the Florida positions cleanly &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Tampa business actually runs &mdash; contract cost pools and billing clean, healthcare payers reconciled, fixed assets ready for the TPP return, sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; Water Street", note: "Finance, professional services &amp; tech" },
    { name: "Westshore business district", note: "Corporate, finance &amp; back-office operations" },
    { name: "Port Tampa Bay &amp; Ybor City", note: "Logistics, cargo, cruise &amp; manufacturing" },
    { name: "USF &amp; the medical area", note: "Healthcare, research &amp; bioscience" },
    { name: "St. Petersburg &amp; Clearwater", note: "Professional services, healthcare &amp; small business" },
    { name: "All of Tampa Bay", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "~7.5%", desc: "Tampa combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Hillsborough County discretionary surtax (about 7.5% in the county), administered by the Florida DOR. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "TPP", desc: "Tangible personal property &mdash; Florida businesses file an annual <strong>DR-405</strong> return with the county property appraiser listing equipment, furniture, and fixtures for property tax, with a $25,000 exemption. We keep fixed-asset records ready; valuation and appeals stay with your CPA or property-tax consultant." },
  ],
  taxNote: "Tampa and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Hillsborough County. The corporate-income-tax rate, county surtax, TPP exemption, and reemployment-tax rates change &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, reemployment, or TPP returns, handle DCAA rate submissions, or provide legal or tax advice.",

  industries: [
    { label: "Finance, banking &amp; back-office", href: "/accounting/industries/professional-services/", note: "reconciliation discipline, controls, and clean books for partners and regulators" },
    { label: "Healthcare &amp; medical practices", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, provider payroll, and equipment tracking for the TPP return" },
    { label: "Defense &amp; government contractors", href: "/accounting/industries/professional-services/", note: "MacDill/CENTCOM contractors &mdash; indirect cost pools, allowable-vs-unallowable costs, contract billing, and DCAA-aware records" },
    { label: "Logistics &amp; the port", href: "/accounting/industries/ecommerce/", note: "Port Tampa Bay operators &mdash; freight and inventory costing and import/export detail" },
    { label: "Technology &amp; SaaS", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition, MRR/ARR, and Florida sales-tax treatment" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with fixed assets tracked for the TPP return and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Contract / healthcare cleanup", body: "Government-contract and healthcare books need the right cost and payer structure. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with cost-pool, payer, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; TPP-ready books", body: "Books structured so your CPA can file Florida sales tax and the DR-405 tangible personal property return accurately, with fixed assets clean.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a government contract or a multi-site practice, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your indirect rates are defensible, your payers reconcile, your fixed assets are ready for the TPP return, and your sales tax is handled. That judgment is what a named Tampa bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Hillsborough County &middot; No tax-filing, DCAA-rate, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Tampa business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Tampa Bay and the Gulf Coast, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in finance, healthcare, and defense-contracting accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt. There is also 6% sales tax plus the Hillsborough surtax (about 7.5%), the annual tangible personal property return on business equipment, and reemployment tax. We track all of it; the Florida DOR, the county, and your CPA confirm what&rsquo;s due." },
    { q: "What is the tangible personal property (DR-405) return?", a: "Florida businesses must file an annual tangible personal property return (Form DR-405) with the county property appraiser, listing business equipment, furniture, and fixtures for property tax &mdash; with a $25,000 exemption. We keep your fixed-asset records clean and current so the return is straightforward; the valuation and any appeal are handled with your CPA or a property-tax consultant." },
    { q: "Do you handle MacDill / CENTCOM government contractors?", a: "Yes &mdash; Tampa&rsquo;s defense and government-contracting base around MacDill Air Force Base and U.S. Central Command is significant. Contractors need government cost accounting &mdash; indirect cost pools, separating allowable from unallowable costs, contract billing, and DCAA-aware records. We keep the books to that standard in QuickBooks and coordinate with your CPA and any government-contract specialist; we handle the operational accounting, not rate submissions or filings." },
    { q: "Do you handle healthcare practices?", a: "Yes &mdash; healthcare is a large Tampa Bay sector. Practices need clean practice bookkeeping, payer and insurance reconciliation, provider payroll, and equipment tracking for the TPP return. We keep the books to that standard; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "How much does a Tampa bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Government contractors and healthcare practices often need additional structure (cost pools, payer reconciliation), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Tampa QuickBooks file?", a: "Yes &mdash; especially for government contractors, healthcare practices, and port/logistics businesses whose books fell behind or never had the right cost structure. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding cost pools or payer reconciliation and the fixed-asset register &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Tampa?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Tampa situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/tampa/",
    name: "Tampa Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Tampa businesses — fluent in finance, healthcare, port, and defense-contracting accounting, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), ~7.5% sales tax, and the tangible personal property (DR-405) return. Fixed-fee, named bookkeeper.",
    serviceName: "Tampa Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Tampa tax-aware bookkeeping — finance and healthcare reconciliation, government-contract cost pools and billing, port and logistics costing, Florida sales tax (~7.5%), the tangible personal property (DR-405) return, and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns or handle DCAA rate submissions — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Tampa", sameAs: "https://en.wikipedia.org/wiki/Tampa,_Florida" },
      { type: "AdministrativeArea", name: "Hillsborough County", sameAs: "https://en.wikipedia.org/wiki/Hillsborough_County,_Florida" },
    ],
    audienceType: "Tampa Bay and Gulf Coast small and midsize businesses — finance and banking back-office, healthcare and medical practices, defense and government contractors, logistics and the port, technology and SaaS, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

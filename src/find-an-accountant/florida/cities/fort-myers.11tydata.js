/* /find-an-accountant/florida/cities/fort-myers/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida tax stack is shared (no personal income tax; 5.5% C-corp
 * income tax; 6% sales tax + county surtax) — the un-clonable substance is Fort Myers's
 * ECONOMY: the hub of fast-growing Southwest Florida (Lee County), driven by construction
 * and real-estate development (one of the fastest-growing U.S. regions), a large 55+
 * retirement population that fuels healthcare, home health, and senior services, Gulf
 * tourism and hospitality (Sanibel/Captiva, the beaches), and hurricane-rebuild /
 * restoration construction in the post-Ian recovery. The distinctive accounting is
 * construction job costing — WIP, retainage, and AIA billing — contractor-licensing-aware
 * books, medical-practice and home-health/senior-services bookkeeping, seasonal
 * hospitality revenue and labor, and multi-entity real-estate development ledgers.
 * Equipment-heavy contractors make the tangible personal property (DR-405) return real.
 * A find-replace "Fort Myers"->"Tampa" reads false (Tampa is finance/port/defense; Fort
 * Myers is construction/development, retirement healthcare, and Gulf tourism).
 *
 * HONESTY: real facts only. We do NOT assert specific Florida construction or
 * real-property-improvement sales-tax rules — that is a real area, kept general and
 * deferred to the Florida DOR and a CPA. TPP valuation, corporate income tax, and filings
 * deferred to the Lee County Property Appraiser, the Florida DOR, and CPA/EA. Books only —
 * no contractor licensing or filing claims. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/fort-myers/",
  slug: "fort-myers",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Fort Myers Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Fort Myers businesses — fluent in Southwest Florida's construction and real-estate development, retirement and healthcare, and Gulf tourism economy, Florida's no-income-tax structure, and the tangible personal property (DR-405) return. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Fort Myers" },
  ],
  hero: {
    eyebrow: "Fort Myers &middot; Lee County &middot; Florida",
    heading: "Fort Myers bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Fort Myers businesses &mdash; built around Southwest Florida&rsquo;s construction and real-estate development boom, its large retirement and healthcare sector, and Gulf tourism, with Florida&rsquo;s no-income-tax structure, the county sales-tax stack, and the tangible personal property return handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Fort Myers &amp; Southwest Florida",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Myers businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in construction job costing, medical-practice and home-health bookkeeping, and seasonal hospitality, plus Florida&rsquo;s sales-tax and corporate-tax structure. The full Fort Myers summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Fort Myers &amp; Florida tax figures verified against the Florida Department of Revenue and Lee County.",
  },
  ctaBand: {
    eyebrow: "Fort Myers businesses start here",
    heading: "Book a Fort Myers discovery call.",
    lede: "30 minutes. We review where your books stand and your Fort Myers context &mdash; construction job costing, WIP and retainage, medical-practice and home-health reconciliation, seasonal hospitality revenue and labor, the county sales tax, and the tangible personal property return &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=fort-myers&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Fort Myers",
  copy: {
    localEyebrow: "Bookkeeping built for how Fort Myers actually runs",
    areasEyebrow: "Across Lee County &amp; Southwest Florida",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "Southwest Florida verticals we know",
    servicesEyebrow: "What we do for Fort Myers businesses",
    faqEyebrow: "Fort Myers FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=fort-myers&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Fort Myers businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (C-corporations pay a 5.5% corporate income tax; pass-throughs are generally exempt) and no franchise/margin tax &mdash; so what shapes the books is Fort Myers&rsquo;s economy and the Florida tax stack. Fort Myers (Lee County) is the hub of <strong>fast-growing Southwest Florida</strong>: a <strong>construction and real-estate development</strong> economy in one of the fastest-growing U.S. regions, a large <strong>retirement and healthcare</strong> sector (medical practices, home health, senior services), <strong>Gulf tourism and hospitality</strong> (the beaches, Sanibel and Captiva), and <strong>hurricane-rebuild and restoration</strong> construction in the post-Ian recovery. The distinctive accounting is construction job costing &mdash; WIP, retainage, and AIA billing &mdash; medical-practice and home-health reconciliation, seasonal hospitality revenue and labor, and multi-entity real-estate development ledgers. The Florida stack: the <strong>6% sales tax plus the Lee County surtax</strong>, the <strong>tangible personal property (DR-405) return</strong> on business equipment (which matters for equipment-heavy contractors), the 5.5% corporate income tax on C-corps, and reemployment tax. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Fort Myers businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fort Myers and Southwest Florida businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in construction job costing, medical-practice and home-health bookkeeping, and seasonal hospitality, plus Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt). There is also <strong>6% sales tax plus the Lee County surtax</strong>, the <strong>tangible personal property return</strong> on business equipment, and <strong>reemployment tax</strong>. We track all of it; the Florida DOR, the county, and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle construction job costing for Fort Myers contractors?", a: "Yes &mdash; construction and real-estate development drive Southwest Florida. Contractors need <strong>job costing, WIP (work-in-progress) tracking, retainage, and AIA-style progress billing</strong> kept clean in QuickBooks. We keep the books to that standard so each job&rsquo;s profitability is clear and the file is CPA-ready; Florida&rsquo;s sales-tax treatment of real-property improvements is a real area we defer to the Florida DOR and your CPA." },
    { q: "What is the tangible personal property (TPP) return?", a: "Florida businesses must file an annual <strong>tangible personal property return (Form DR-405)</strong> with the county property appraiser, listing business equipment, furniture, and fixtures for property tax &mdash; with a <strong>$25,000 exemption</strong>. This matters for equipment-heavy Fort Myers contractors. We keep your fixed-asset records clean so the return is straightforward; the valuation and any appeal stay with your CPA or a property-tax consultant." },
    { q: "Which areas do you serve?", a: "<strong>All of Fort Myers and Lee County</strong> &mdash; downtown Fort Myers and the River District, Cape Coral, Estero and Bonita Springs, Sanibel and Captiva, and the wider Southwest Florida region toward Naples &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Fort Myers is the hub of fast-growing Southwest Florida &mdash; a construction-and-development, retirement-healthcare, and Gulf-tourism economy &mdash; and that, on top of Florida&rsquo;s tax stack, is what shapes its books. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work spans <strong>construction and real-estate development</strong> in one of the fastest-growing U.S. regions (job costing, WIP, retainage, and AIA billing), a large <strong>retirement and healthcare</strong> sector built on a 55+ population (medical practices, home health, and senior services with payer reconciliation and provider payroll), <strong>Gulf tourism and hospitality</strong> around the beaches and Sanibel/Captiva (seasonal revenue and labor), and ongoing <strong>hurricane-rebuild and restoration</strong> construction in the post-Ian recovery.",
    "The Florida tax stack still has to be right: <strong>6% sales tax plus the Lee County surtax</strong>, the annual <strong>tangible personal property (DR-405) return</strong> on business equipment (with a $25,000 exemption) &mdash; which matters for equipment-heavy contractors &mdash; the <strong>5.5% corporate income tax</strong> on C-corps, and <strong>reemployment tax</strong>. Florida&rsquo;s sales-tax treatment of real-property improvements is a real area for contractors; we keep it general and defer the specifics to the Florida DOR and your CPA. We put a named bookkeeper on your file who handles job costing, payer reconciliation, and the Florida positions cleanly &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Fort Myers business actually runs &mdash; construction jobs costed with WIP and retainage clean, medical and home-health payers reconciled, seasonal hospitality revenue and labor tracked, fixed assets ready for the TPP return, sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the River District", note: "Professional services, hospitality &amp; small business" },
    { name: "Cape Coral", note: "Construction, contractors &amp; residential development" },
    { name: "Estero &amp; Bonita Springs", note: "Real-estate development, retail &amp; senior services" },
    { name: "Sanibel &amp; Captiva", note: "Tourism, hospitality &amp; vacation rentals" },
    { name: "Lehigh Acres &amp; East Lee County", note: "Homebuilders, trades &amp; restoration construction" },
    { name: "All of Southwest Florida", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "6% + surtax", desc: "Fort Myers combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Lee County discretionary surtax, combined by county, with a $5,000 cap on the surtax for a single item, administered by the Florida DOR. Florida taxes some services others exempt; tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "TPP", desc: "Tangible personal property &mdash; Florida businesses file an annual <strong>DR-405</strong> return with the county property appraiser listing equipment, furniture, and fixtures for property tax, with a $25,000 exemption &mdash; real for equipment-heavy contractors. We keep fixed-asset records ready; valuation and appeals stay with your CPA or property-tax consultant." },
  ],
  taxNote: "Fort Myers and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Lee County. The corporate-income-tax rate, county surtax, surtax cap, TPP exemption, and reemployment-tax rates change &mdash; and Florida&rsquo;s sales-tax treatment of construction and real-property improvements is fact-specific &mdash; so confirm any specific position with the Florida DOR or your CPA before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, reemployment, or TPP returns, make contractor-licensing determinations, or provide legal or tax advice.",

  industries: [
    { label: "Construction &amp; contractors", href: "/accounting/industries/construction/", note: "homebuilders and trades &mdash; job costing, WIP, retainage, and AIA-style progress billing kept clean for each project" },
    { label: "Real estate &amp; development", href: "/accounting/industries/real-estate/", note: "developers, investors &amp; property managers &mdash; multi-entity ledgers, project draws, and trust accounting" },
    { label: "Healthcare &amp; medical practices", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, provider payroll, and equipment tracking for the TPP return" },
    { label: "Home health &amp; senior services", href: "/accounting/industries/professional-services/", note: "home-health and senior-services providers &mdash; payer reconciliation, caregiver payroll, and visit-based revenue" },
    { label: "Tourism &amp; hospitality", href: "/accounting/industries/restaurant/", note: "Gulf-beach restaurants, hotels &amp; vacation rentals &mdash; seasonal revenue, tip and labor tracking, and sales tax" },
    { label: "Professional services", href: "/accounting/industries/professional-services/", note: "firms serving Southwest Florida&rsquo;s growth &mdash; clean reconciliation, owner draws, and CPA-ready statements" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with job costing, fixed assets tracked for the TPP return, and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Construction / practice cleanup", body: "Construction and medical books need the right job-cost and payer structure. We get the file CPA-ready &mdash; WIP, retainage, payers &mdash; then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with job-cost, payer, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; TPP-ready books", body: "Books structured so your CPA can file Florida sales tax and the DR-405 tangible personal property return accurately, with fixed assets clean.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a multi-project builder or a multi-site practice, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing each job&rsquo;s margin is clear with WIP and retainage tracked, your payers reconcile, your fixed assets are ready for the TPP return, and your sales tax is handled. That judgment is what a named Fort Myers bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Lee County &middot; No tax-filing, contractor-licensing, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Fort Myers business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Fort Myers and Southwest Florida, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in construction job costing, medical-practice and home-health bookkeeping, seasonal hospitality, and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt. There is also 6% sales tax plus the Lee County surtax, the annual tangible personal property return on business equipment, and reemployment tax. We track all of it; the Florida DOR, the county, and your CPA confirm what&rsquo;s due." },
    { q: "Do you handle construction job costing for Fort Myers contractors?", a: "Yes &mdash; construction and real-estate development drive Southwest Florida, including the post-Ian rebuild. Contractors need job costing, WIP (work-in-progress) tracking, retainage, and AIA-style progress billing kept clean in QuickBooks so each job&rsquo;s profitability is clear and the file is CPA-ready. We keep the books to that standard; Florida&rsquo;s sales-tax treatment of real-property improvements is a fact-specific area we keep general and defer to the Florida DOR and your CPA, and we make no contractor-licensing determinations." },
    { q: "What is the tangible personal property (DR-405) return?", a: "Florida businesses must file an annual tangible personal property return (Form DR-405) with the county property appraiser, listing business equipment, furniture, and fixtures for property tax &mdash; with a $25,000 exemption. This is real for equipment-heavy Fort Myers contractors. We keep your fixed-asset records clean and current so the return is straightforward; the valuation and any appeal are handled with your CPA or a property-tax consultant." },
    { q: "Do you handle medical practices, home health, and senior services?", a: "Yes &mdash; Fort Myers&rsquo;s large 55+ population drives a deep healthcare sector. Medical practices, home-health agencies, and senior-services providers need clean practice bookkeeping, payer and insurance reconciliation, provider and caregiver payroll, and equipment tracking for the TPP return. We keep the books to that standard; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "Do you handle seasonal tourism and hospitality businesses?", a: "Yes &mdash; the Gulf beaches and Sanibel/Captiva make tourism and hospitality a major Fort Myers sector with a pronounced season. Restaurants, hotels, and vacation rentals need seasonal revenue tracking, tip and labor accounting, and Florida sales tax handled cleanly so the off-season cash picture is honest. We keep the books to that standard and hand them to your CPA CPA-ready." },
    { q: "How much does a Fort Myers bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Contractors and medical practices often need additional structure (job costing and WIP, payer reconciliation), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Fort Myers QuickBooks file?", a: "Yes &mdash; especially for contractors, medical and home-health practices, and seasonal hospitality businesses whose books fell behind or never had the right job-cost or payer structure. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding job costing with WIP and retainage, payer reconciliation, and the fixed-asset register &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you file my Florida taxes?", a: "No. TechBrot provides bookkeeping and keeps your QuickBooks file CPA-ready; we do not file Florida sales, corporate-income, reemployment, or tangible personal property (DR-405) returns, and we do not represent you before the Florida DOR. Your CPA or EA computes and files; we coordinate with them and keep the books clean so filing is straightforward." },
    { q: "How do we get started in Fort Myers?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Fort Myers situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/fort-myers/",
    name: "Fort Myers Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Fort Myers businesses — fluent in Southwest Florida's construction and real-estate development, retirement and healthcare, and Gulf tourism economy, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps), the 6% sales tax plus Lee County surtax, and the tangible personal property (DR-405) return. Fixed-fee, named bookkeeper.",
    serviceName: "Fort Myers Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Fort Myers tax-aware bookkeeping — construction job costing with WIP, retainage, and AIA billing, medical-practice and home-health/senior-services reconciliation, seasonal hospitality revenue and labor, real-estate development multi-entity ledgers, Florida sales tax (6% plus the Lee County surtax), the tangible personal property (DR-405) return, and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns or make contractor-licensing determinations — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Fort Myers", sameAs: "https://en.wikipedia.org/wiki/Fort_Myers,_Florida" },
      { type: "AdministrativeArea", name: "Lee County", sameAs: "https://en.wikipedia.org/wiki/Lee_County,_Florida" },
    ],
    audienceType: "Fort Myers and Southwest Florida small and midsize businesses — construction and real-estate development, contractors, medical practices and home-health/senior services, tourism and hospitality, and professional services",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

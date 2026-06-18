/* /find-an-accountant/florida/cities/west-palm-beach/ — FL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Florida tax stack is shared (no personal income tax; 5.5% C-corp
 * income tax; 6% sales tax + county surtax) — the un-clonable substance is WEST PALM BEACH's
 * ECONOMY: a finance and wealth-management hub nicknamed "Wall Street South." Hedge funds,
 * private equity, family offices, and wealth/asset managers have relocated to Palm Beach
 * County — many from the Northeast — drawn in part by Florida's no state income tax. The
 * economy is investment management, professional services (law/accounting/advisory), and
 * luxury real estate (Palm Beach island wealth) serving a high-net-worth base. The
 * distinctive accounting is multi-entity / fund / family-office back-office bookkeeping
 * (management-company vs fund books, partnership/LLC structures, partner and owner
 * distributions — RECORDS ONLY, never holding client/investor funds), professional-services
 * project profitability, and luxury-real-estate brokerage/development multi-entity ledgers
 * and trust records. A find-replace "West Palm Beach"->"Miami" reads false (Miami is
 * international trade; Fort Lauderdale is marine; Tampa is finance back-office + defense/port;
 * West Palm Beach is investment management, family offices, and island wealth).
 *
 * HONESTY: real facts only; we keep books/track/reconcile, never hold or disburse client,
 * investor, or escrow funds; the "no income tax draws relocations" point is factual, not
 * relocation/tax advice — deferred to CPA; corporate income tax, surtax, TPP valuation, and
 * filings deferred to the Palm Beach County Property Appraiser, the Florida DOR, and CPA/EA. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/cities/west-palm-beach/",
  slug: "west-palm-beach",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "West Palm Beach Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach businesses — fluent in finance and wealth-management, hedge fund and family-office back-office accounting, luxury real estate, Florida's no-income-tax structure that draws relocations, ~7% sales tax, and the tangible personal property (DR-405) return. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "West Palm Beach" },
  ],
  hero: {
    eyebrow: "West Palm Beach &middot; Palm Beach County &middot; Florida",
    heading: "West Palm Beach bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach businesses &mdash; built around the finance, wealth-management, and luxury-real-estate economy of &ldquo;Wall Street South,&rdquo; with multi-entity fund and family-office back-office books, Florida&rsquo;s no-income-tax structure, the ~7% sales tax, and the tangible personal property return handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "West Palm Beach &amp; Palm Beach County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in investment-management, family-office, and luxury-real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure. The full West Palm Beach summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. West Palm Beach &amp; Florida tax figures verified against the Florida Department of Revenue and Palm Beach County.",
  },
  ctaBand: {
    eyebrow: "West Palm Beach businesses start here",
    heading: "Book a West Palm Beach discovery call.",
    lede: "30 minutes. We review where your books stand and your West Palm Beach context &mdash; multi-entity fund and management-company reconciliation, family-office and professional-services profitability, luxury-real-estate multi-entity ledgers, the ~7% sales tax, the tangible personal property return, reemployment tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&city=west-palm-beach&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "West Palm Beach",
  copy: {
    localEyebrow: "Bookkeeping built for how West Palm Beach actually runs",
    areasEyebrow: "Across Palm Beach County",
    taxEyebrow: "The Florida taxes we build into your books",
    industriesEyebrow: "West Palm Beach verticals we know",
    servicesEyebrow: "What we do for West Palm Beach businesses",
    faqEyebrow: "West Palm Beach FAQ",
  },
  advisoryCtaHref: "/contact/?intent=florida-advisory&state=florida&city=west-palm-beach&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Florida has <strong>no state personal income tax</strong> (C-corporations pay a 5.5% corporate income tax; pass-throughs are generally exempt) and no franchise/margin tax &mdash; and that absence of an income tax is one reason hedge funds, private equity, family offices, and wealth managers have <strong>relocated to Palm Beach County</strong>, much of it from the Northeast, earning West Palm Beach the nickname <strong>&ldquo;Wall Street South.&rdquo;</strong> So what shapes the books is that economy: <strong>investment management and fund administration</strong>, <strong>family offices</strong>, <strong>professional services</strong> (law, accounting, advisory), and <strong>luxury real estate</strong> serving Palm Beach island wealth. The distinctive accounting is multi-entity, management-company-vs-fund, and partnership/LLC structures with partner and owner distributions tracked &mdash; on a records-only basis; we never hold, control, or disburse client, investor, or escrow funds. The Florida stack: the <strong>6% sales tax plus the Palm Beach County surtax (about 7%)</strong>, the <strong>tangible personal property (DR-405) return</strong> on business equipment, the 5.5% corporate income tax on C-corps, and reemployment tax. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Florida taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for West Palm Beach businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach and Palm Beach County businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in investment-management, family-office, professional-services, and luxury-real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> Florida has no state personal income tax &mdash; a factor that has drawn hedge funds, private equity, and family offices to relocate to Palm Beach County &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt). There is also <strong>6% sales tax plus the Palm Beach County surtax</strong> (about 7%), the <strong>tangible personal property return</strong> on business equipment, and <strong>reemployment tax</strong>. We track all of it; the Florida DOR, the county, and your CPA confirm what&rsquo;s due. Any relocation or entity decision is a question for your CPA or attorney, not us." },
    { q: "Do you handle hedge funds and family offices?", a: "Yes &mdash; West Palm Beach is a relocation magnet for hedge funds, private equity, and family offices. The work is <strong>multi-entity back-office bookkeeping</strong> &mdash; separating management-company books from fund books, partnership/LLC structures, and partner and owner distributions &mdash; on a <strong>records-only</strong> basis. We keep books, track, and reconcile; we never hold, control, or disburse client or investor funds, and audit-level fund administration stays with your CPA and fund administrator." },
    { q: "Do you handle luxury real estate?", a: "Yes &mdash; Palm Beach island and West Palm Beach luxury real estate runs on brokerages, developers, and investors with <strong>multi-entity ledgers and trust records</strong>. We keep the entity books clean and the trust records reconciled on a records-only basis; we do not hold or disburse escrow or trust funds, and the tax positions stay with your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of West Palm Beach</strong> &mdash; Downtown and Clematis Street, the Flagler waterfront finance district, CityPlace/Rosemary Square, and Northwood &mdash; plus the wider Palm Beach County including Palm Beach island, Boca Raton, and Jupiter, delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "West Palm Beach is a finance and wealth-management economy &mdash; nicknamed &ldquo;Wall Street South&rdquo; &mdash; built on investment management, family offices, professional services, and luxury real estate, and that, on top of Florida&rsquo;s tax stack, is what shapes its books. Florida has no state personal income tax, though C-corporations pay a 5.5% corporate income tax.",
    "The defining work spans <strong>investment management and fund administration</strong> (multi-entity, management-company-vs-fund, partnership/LLC books with partner and owner distributions &mdash; records only, never holding investor funds), <strong>family offices</strong> serving high-net-worth households, <strong>professional services</strong> (law, accounting, advisory) where project and matter profitability rule, and <strong>luxury real estate</strong> (Palm Beach island wealth) with brokerage/development multi-entity ledgers and trust records.",
    "The relocation story is real: Florida&rsquo;s <strong>no state personal income tax</strong> is one reason hedge funds, private equity, and family offices have moved to Palm Beach County, much of it from the Northeast &mdash; though any relocation or entity decision is a question for your CPA or attorney, not bookkeeping. The Florida tax stack still has to be right: <strong>6% sales tax plus the Palm Beach County surtax</strong> (about 7%), the annual <strong>tangible personal property (DR-405) return</strong> on business equipment (with a $25,000 exemption), the <strong>5.5% corporate income tax</strong> on C-corps, and <strong>reemployment tax</strong>. We put a named bookkeeper on your file who handles multi-entity reconciliation, distribution tracking, and the Florida positions cleanly &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a West Palm Beach business actually runs &mdash; management-company and fund books separated, partner distributions tracked, professional-services matters costed, luxury-real-estate entities and trust records clean, sales tax handled &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; Clematis Street", note: "Finance, professional services &amp; advisory" },
    { name: "Flagler waterfront district", note: "Investment management, family offices &amp; wealth managers" },
    { name: "CityPlace / Rosemary Square", note: "Professional services, hospitality &amp; small business" },
    { name: "Palm Beach island", note: "Luxury real estate, high-net-worth households &amp; family offices" },
    { name: "Boca Raton &amp; Jupiter", note: "Wealth management, professional services &amp; corporate offices" },
    { name: "All of Palm Beach County", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "No income tax", desc: "Florida has <strong>no state personal income tax</strong> &mdash; a factor that has drawn funds and family offices to relocate to Palm Beach County &mdash; but <strong>C-corporations pay a 5.5% corporate income tax</strong> (pass-throughs generally exempt), administered by the Florida Department of Revenue. We track the entity&rsquo;s position; the DOR&rsquo;s rules and your CPA confirm what&rsquo;s due. Any relocation or entity decision is a question for your CPA or attorney." },
    { figure: "~7%", desc: "West Palm Beach combined sales &amp; use tax &mdash; Florida&rsquo;s 6% state rate plus the Palm Beach County discretionary surtax (about 7% in the county), with a $5,000 single-item cap on the surtax portion, administered by the Florida DOR. Tracked and reconciled in QuickBooks for an accurate return." },
    { figure: "TPP", desc: "Tangible personal property &mdash; Florida businesses file an annual <strong>DR-405</strong> return with the county property appraiser listing equipment, furniture, and fixtures for property tax, with a $25,000 exemption. We keep fixed-asset records ready; valuation and appeals stay with your CPA or property-tax consultant." },
  ],
  taxNote: "West Palm Beach and Florida tax figures are educational and current as of the review date, verified against the Florida Department of Revenue and Palm Beach County. The corporate-income-tax rate, county surtax, single-item surtax cap, TPP exemption, and reemployment-tax rates change &mdash; confirm any specific figure before relying on it. The point that Florida&rsquo;s lack of an income tax draws relocations is factual, not tax or relocation advice &mdash; those decisions belong with your CPA or attorney. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Florida sales, corporate-income, reemployment, or TPP returns, we do not hold, control, or disburse client, investor, or escrow funds, and we do not provide legal or tax advice or representation.",

  industries: [
    { label: "Investment management &amp; funds", href: "/accounting/industries/professional-services/", note: "hedge funds, PE &amp; asset managers &mdash; management-company-vs-fund and partnership/LLC books, partner distributions (records only)" },
    { label: "Family offices", href: "/accounting/industries/professional-services/", note: "high-net-worth households &mdash; multi-entity ledgers, owner distributions, and consolidated reporting (records only, never holding funds)" },
    { label: "Professional services", href: "/accounting/industries/professional-services/", note: "law, accounting &amp; advisory firms &mdash; matter and project profitability, partner draws, and clean controls" },
    { label: "Luxury real estate", href: "/accounting/industries/real-estate/", note: "Palm Beach island brokerages, developers &amp; investors &mdash; multi-entity ledgers and trust records (records only)" },
    { label: "Wealth &amp; financial advisory", href: "/accounting/industries/professional-services/", note: "RIAs and advisors &mdash; reconciliation discipline, controls, and clean books for partners and regulators" },
    { label: "Technology &amp; SaaS", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition, MRR/ARR, and Florida sales-tax treatment" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with multi-entity structure, fixed assets tracked for the TPP return, and Florida sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Fund / multi-entity cleanup", body: "Fund, family-office, and real-estate books need management-company-vs-fund separation and clean entity structure. We get the file CPA-ready, then keep it clean &mdash; records only, never holding funds.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with multi-entity, distribution, and fixed-asset structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; TPP-ready books", body: "Books structured so your CPA can file Florida sales tax and the DR-405 tangible personal property return accurately, with fixed assets clean.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "Running a fund, a family office, or a multi-entity real-estate group, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your management-company and fund books are separated, your partner and owner distributions reconcile, your trust records are clean, your fixed assets are ready for the TPP return, and your sales tax is handled. That judgment is what a named West Palm Beach bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean &mdash; always on a records-only basis, never holding client or investor funds.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Florida Department of Revenue &amp; Palm Beach County &middot; No tax-filing, fund-custody, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my West Palm Beach business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach and Palm Beach County, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in investment-management, family-office, professional-services, and luxury-real-estate accounting and Florida&rsquo;s sales-tax and corporate-tax structure." },
    { q: "Does Florida have a state income tax?", a: "Florida has no state personal income tax &mdash; one reason hedge funds, private equity, and family offices have relocated to Palm Beach County, much of it from the Northeast, earning West Palm Beach the &ldquo;Wall Street South&rdquo; nickname. However, C-corporations pay a 5.5% Florida corporate income tax; S-corporations, LLCs, and partnerships are generally exempt. There is also 6% sales tax plus the Palm Beach County surtax (about 7%), the annual tangible personal property return on business equipment, and reemployment tax. We track all of it; the Florida DOR, the county, and your CPA confirm what&rsquo;s due. Any relocation or entity decision is a question for your CPA or attorney." },
    { q: "Do you handle hedge funds, private equity, and family offices?", a: "Yes &mdash; West Palm Beach is a relocation magnet for them. The work is multi-entity back-office bookkeeping &mdash; separating management-company books from fund books, partnership and LLC structures, and tracking partner and owner distributions. We do this on a records-only basis: we keep books, track, and reconcile, but we never hold, control, or disburse client or investor funds. Audit-level fund administration and the tax positions stay with your CPA and fund administrator, whom we coordinate with." },
    { q: "Do you ever hold our client or investor funds?", a: "No &mdash; never. We are a bookkeeping firm: we keep books, track, and reconcile, and we keep records of distributions, trust balances, and escrow as the books require. We do not hold, control, or disburse client, investor, or escrow funds at any point. Custody of funds stays with your bank, custodian, fund administrator, or escrow agent, and tax filing and representation stay with your CPA." },
    { q: "Do you handle luxury real estate and Palm Beach island brokerages?", a: "Yes &mdash; Palm Beach island and West Palm Beach luxury real estate runs on brokerages, developers, and investors with multi-entity ledgers and trust records. We keep the entity books clean and the trust records reconciled on a records-only basis; we do not hold or disburse escrow or trust funds, and the tax positions stay with your CPA, whom we coordinate with." },
    { q: "How much does a West Palm Beach bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume, entities, and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Funds, family offices, and multi-entity real-estate groups often need additional structure (management-company-vs-fund separation, distribution tracking), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy West Palm Beach QuickBooks file?", a: "Yes &mdash; especially for funds, family offices, professional-services firms, and real-estate groups whose books fell behind or never had the right multi-entity structure. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including separating management-company from fund books, rebuilding distribution tracking, and the fixed-asset register &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you file my Florida taxes?", a: "No. TechBrot is a bookkeeping and QuickBooks firm. We keep your books accurate, reconcile your accounts, track sales tax and fixed assets, and hand your CPA CPA-ready statements &mdash; but we do not file Florida sales, corporate-income, reemployment, or tangible-personal-property (DR-405) returns, and we do not represent you before the Florida DOR or IRS. Your CPA or EA computes and files; we make sure the books behind those filings are right." },
    { q: "How do we get started in West Palm Beach?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your West Palm Beach situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/cities/west-palm-beach/",
    name: "West Palm Beach Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for West Palm Beach businesses — fluent in finance and wealth-management, hedge fund and family-office back-office accounting, professional services, and luxury real estate, Florida's no-personal-income-tax structure (5.5% corporate income tax on C-corps) that draws relocations, ~7% sales tax, and the tangible personal property (DR-405) return. Fixed-fee, named bookkeeper.",
    serviceName: "West Palm Beach Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and West Palm Beach tax-aware bookkeeping — multi-entity fund and family-office back-office books (management-company-vs-fund, partnership/LLC, partner distributions, records only), professional-services profitability, luxury-real-estate multi-entity ledgers and trust records, Florida sales tax (~7%), the tangible personal property (DR-405) return, and the 5.5% corporate income tax for C-corps handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida returns and does not hold, control, or disburse client, investor, or escrow funds — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "West Palm Beach", sameAs: "https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida" },
      { type: "AdministrativeArea", name: "Palm Beach County", sameAs: "https://en.wikipedia.org/wiki/Palm_Beach_County,_Florida" },
    ],
    audienceType: "West Palm Beach and Palm Beach County small and midsize businesses — hedge funds, private equity and family offices, wealth and investment management, professional services, and luxury real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

/* /find-an-accountant/illinois/cities/schaumburg/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Schaumburg's
 * ECONOMY: a major NORTHWEST-SUBURBAN CORPORATE-OFFICE & RETAIL hub in Cook County. A dense
 * concentration of corporate offices and regional headquarters (Zurich North America is
 * headquartered in Schaumburg) and a large office-park/business-services base, anchored by
 * Woodfield Mall — one of the largest U.S. shopping malls — driving a big retail,
 * hospitality, and convention/business-travel economy in the I-90/Golden Corridor. The
 * distinctive accounting is corporate/regional-office and professional-services bookkeeping
 * (multi-entity, expense allocation, B2B services), retail (POS reconciliation, inventory,
 * sales tax by location), hospitality/restaurant (POS, tipped payroll), and office/commercial
 * real estate. As a Cook County suburb, the Cook County + home-rule sales-tax layer is high.
 * A find-replace "Schaumburg"->"Naperville" reads false (Naperville is DuPage professional
 * services; Schaumburg is Cook-County corporate-office + Woodfield retail).
 *
 * CHICAGO TAX ACCURACY (hard gate): Schaumburg is in COOK COUNTY but is NOT the City of
 * Chicago — the City of Chicago 15% lease/"cloud" tax does NOT apply to a Schaumburg
 * business's own location; it only matters when a Schaumburg business SELLS SaaS/leases to
 * customers located in Chicago. Framed as a CITY-OF-CHICAGO tax, never as something
 * Schaumburg levies. No asserted specific Schaumburg combined sales-tax %.
 *
 * HONESTY: real facts only; PPRT rates, the PTE election, the Chicago lease/cloud tax, and
 * filings deferred to the Illinois Dept of Revenue, the City of Chicago Dept of Finance, and
 * the CPA/EA. Zurich/Woodfield named ONLY as local-economy examples, never as our clients.
 * No fabricated stats. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/schaumburg/",
  slug: "schaumburg",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Schaumburg Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Schaumburg, IL businesses — fluent in the northwest-suburban corporate-office and professional-services economy, Woodfield-area retail and hospitality, the flat income tax, the Personal Property Replacement Tax, and high Cook County sales tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Schaumburg" },
  ],
  hero: {
    eyebrow: "Schaumburg &middot; Cook County &middot; Illinois",
    heading: "Schaumburg bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Schaumburg businesses &mdash; built around the northwest-suburban corporate-office and professional-services base, Woodfield-area retail and hospitality, and commercial real estate, with Illinois&rsquo; flat income tax, the Personal Property Replacement Tax, and the high Cook County sales-tax layer handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Schaumburg &amp; Cook County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Schaumburg businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in corporate-office, professional-services, and Woodfield-area retail accounting and Illinois&rsquo; flat income tax, Personal Property Replacement Tax, and high Cook County sales tax. The full Schaumburg summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Schaumburg &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Schaumburg businesses start here",
    heading: "Book a Schaumburg discovery call.",
    lede: "30 minutes. We review where your books stand and your Schaumburg context &mdash; multi-entity corporate-office and professional-services bookkeeping, Woodfield-area retail POS and inventory, hospitality tipped payroll, the flat income tax, the Personal Property Replacement Tax, and the high Cook County sales-tax layer &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=schaumburg&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Schaumburg",
  copy: {
    localEyebrow: "Bookkeeping built for how Schaumburg actually runs",
    areasEyebrow: "Across Schaumburg &amp; the Golden Corridor",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Schaumburg verticals we know",
    servicesEyebrow: "What we do for Schaumburg businesses",
    faqEyebrow: "Schaumburg FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=schaumburg&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Schaumburg businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Schaumburg is a major <strong>northwest-suburban corporate-office and retail</strong> hub in Cook County &mdash; a dense concentration of corporate offices and regional headquarters (Zurich North America is headquartered here) and an office-park/business-services economy, anchored by <strong>Woodfield Mall</strong>, one of the largest U.S. shopping malls, which drives a big retail, hospitality, and convention/business-travel economy in the I-90/Golden Corridor. The distinctive accounting is <strong>corporate and professional-services bookkeeping</strong> (multi-entity ledgers, expense allocation, B2B services), <strong>retail</strong> (POS reconciliation, inventory, and sales tax by location), <strong>hospitality and restaurant</strong> (POS and tipped payroll), and <strong>commercial real estate</strong>. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, and a <strong>6.25% state sales tax plus the high Cook County and Schaumburg home-rule add-ons</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Schaumburg businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Schaumburg and Golden Corridor businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in corporate-office, professional-services, and Woodfield-area retail and hospitality accounting and Illinois&rsquo; flat income tax, Personal Property Replacement Tax, and high Cook County sales tax." },
    { q: "Do you handle corporate-office and professional-services accounting?", a: "Yes &mdash; it&rsquo;s the defining Schaumburg need. Corporate offices, regional headquarters, and B2B professional-services firms need <strong>multi-entity ledgers</strong>, departmental and inter-company <strong>expense allocation</strong>, accrual-basis books, and clean management reporting. We keep the books to that standard; the tax positions stay with your CPA." },
    { q: "What Illinois taxes affect my Schaumburg books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, and sales tax of <strong>6.25% state plus the high Cook County and Schaumburg home-rule add-ons</strong>, administered by the Illinois Department of Revenue. We track all of it; the IDOR&rsquo;s rules and your CPA confirm the exact combined rate and what&rsquo;s due." },
    { q: "Does the Chicago cloud / lease tax apply to my Schaumburg business?", a: "Not to your own location. Schaumburg is in <strong>Cook County but is not the City of Chicago</strong>, so the <strong>City of Chicago lease/&ldquo;cloud&rdquo; tax</strong> (administered by the City of Chicago Department of Finance) does not apply to a Schaumburg business&rsquo;s own premises or purchases. It can apply when you <strong>sell SaaS or lease to customers located in Chicago</strong>. We flag where Chicago-customer transactions may be in scope; the determination stays with your CPA and the City of Chicago." },
    { q: "Which areas do you serve?", a: "<strong>All of Schaumburg</strong> &mdash; the Woodfield retail and convention district, the I-90/Golden Corridor office parks and corporate campuses, the commercial and business-services corridors, and the surrounding northwest suburbs (Hoffman Estates, Rolling Meadows, Elk Grove Village, Arlington Heights) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Schaumburg is a corporate-office and retail city &mdash; regional headquarters, office parks, and the Woodfield retail and hospitality economy &mdash; and that northwest-suburban business base, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>corporate-office and professional-services bookkeeping</strong>. Regional headquarters, corporate offices, and B2B services firms need <strong>multi-entity ledgers</strong>, departmental and inter-company <strong>expense allocation</strong>, accrual-basis books, and clean management reporting. Around Woodfield, <strong>retail</strong> brings POS reconciliation, inventory, and sales tax tracked by location; <strong>hospitality and restaurants</strong> bring POS and tipped payroll; and <strong>office and commercial real estate</strong> brings multi-entity ledgers and CAM. As a Cook County suburb, the Cook County and Schaumburg home-rule sales-tax layer is high.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, and a <strong>6.25% state sales tax plus the high Cook County and Schaumburg home-rule add-ons</strong>. One point specific to a Cook County suburb: the <strong>City of Chicago lease/&ldquo;cloud&rdquo; tax does not apply to a Schaumburg location</strong> &mdash; it only matters when you sell SaaS or lease to Chicago customers. A general bookkeeper rarely allocates corporate expenses correctly or tracks sales tax by location; we put a named bookkeeper on your file who does &mdash; with the filings left to your CPA.",
    "The result: books that reflect how a Schaumburg business actually runs &mdash; multi-entity ledgers and expense allocation clean, retail POS and inventory reconciled, sales tax tracked by location, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Woodfield retail &amp; convention district", note: "Retail, restaurants, hospitality &amp; business travel" },
    { name: "I-90 / Golden Corridor office parks", note: "Corporate offices, regional HQs &amp; B2B services" },
    { name: "Corporate campuses &amp; business services", note: "Multi-entity offices, professional &amp; financial services" },
    { name: "Commercial &amp; office real estate corridors", note: "Owners, brokerages &amp; property managers" },
    { name: "Hoffman Estates, Rolling Meadows &amp; Elk Grove Village", note: "Offices, retail, light industrial &amp; small business" },
    { name: "All of the northwest suburbs", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT + PTE", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations (2.5% C-corp / 1.5% pass-through) that even pass-throughs owe (a combined ~9.5% on C-corps with the corporate income tax) &mdash; plus the permanent <strong>pass-through-entity (PTE) tax election</strong>. We track the position; the rates, the election, and filing stay with the IDOR and your CPA." },
    { figure: "6.25% + Cook home-rule", desc: "Sales &amp; use tax of <strong>6.25% state plus the high Cook County and Schaumburg home-rule add-ons</strong>, administered by the IDOR. We track sales tax by location so it&rsquo;s reconciled; the exact combined rate stays with the IDOR and your CPA. (Schaumburg is in Cook County but is not the City of Chicago, so the Chicago lease/&ldquo;cloud&rdquo; tax does not apply to your location &mdash; only to Chicago customers.)" },
  ],
  taxNote: "Schaumburg and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, the PTE election, and local Cook County and home-rule sales-tax components change &mdash; confirm any specific combined rate before relying on it. The City of Chicago lease/cloud tax is administered by the City of Chicago Department of Finance and applies only to Chicago transactions, not to a Schaumburg location. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, make the PTE election, or provide legal, tax, or representation services.",

  industries: [
    { label: "Corporate offices &amp; professional services", href: "/accounting/industries/professional-services/", note: "multi-entity ledgers, departmental and inter-company expense allocation, accrual books, and management reporting" },
    { label: "Retail &amp; Woodfield-area commerce", href: "/accounting/industries/ecommerce/", note: "POS reconciliation, inventory and COGS, and sales tax tracked by location" },
    { label: "Restaurants &amp; hospitality", href: "/accounting/industries/restaurant/", note: "POS reconciliation, tipped payroll, and food/beverage cost tracking" },
    { label: "Commercial &amp; office real estate", href: "/accounting/industries/real-estate/", note: "owners, brokerages &amp; property managers &mdash; multi-entity ledgers, CAM and trust accounting" },
    { label: "Financial &amp; insurance services", href: "/accounting/industries/professional-services/", note: "B2B services bookkeeping, commission reconciliation, and accrual reporting" },
    { label: "B2B &amp; business services", href: "/accounting/industries/professional-services/", note: "accrual books, project and client profitability, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with multi-entity ledgers, expense allocation, and sales tax reconciled by location.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Multi-entity / retail cleanup", body: "Inter-company allocations, POS, and inventory drift when the books aren&rsquo;t right. We rebuild them to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with multi-entity, class/location, inventory, and POS structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and Cook County sales tax accurately, with sales tax tracked by location.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "In a corporate office or a Woodfield-area retailer, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your multi-entity ledgers and expense allocations are clean, your sales tax is reconciled by location, and your PPRT position is right. That judgment is what a named Schaumburg bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, PTE-election, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Schaumburg business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Schaumburg and the northwest suburbs, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in corporate-office, professional-services, and Woodfield-area retail and hospitality accounting and Illinois&rsquo; flat income tax, Personal Property Replacement Tax, and high Cook County sales tax." },
    { q: "Do you handle corporate-office and multi-entity accounting?", a: "Yes &mdash; it&rsquo;s the defining Schaumburg engagement. Regional headquarters, corporate offices, and B2B professional-services firms need multi-entity ledgers, departmental and inter-company expense allocation, accrual-basis books, and clean management reporting. We keep the books to that standard in QuickBooks using class and location tracking; the tax positions stay with your CPA, whom we coordinate with." },
    { q: "Do you handle Woodfield-area retail and hospitality bookkeeping?", a: "Yes. Retailers around Woodfield need POS reconciliation, inventory and COGS, and sales tax tracked by location; restaurants and hospitality businesses need POS reconciliation and tipped payroll. We reconcile the POS data into QuickBooks, keep inventory and COGS accurate, and track sales tax by location so your CPA can file it correctly." },
    { q: "What Illinois taxes affect my Schaumburg bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through) on corporations and pass-throughs, with the permanent pass-through-entity (PTE) tax election available. Schaumburg sales tax is 6.25% state plus the high Cook County and Schaumburg home-rule add-ons. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm the exact combined rate and what&rsquo;s due." },
    { q: "How high is the Cook County sales tax in Schaumburg, and does the Chicago cloud tax apply?", a: "Schaumburg sales tax is the 6.25% Illinois state rate plus Cook County and Schaumburg home-rule add-ons, which makes the combined rate notably higher than downstate &mdash; we track sales tax by location rather than asserting a single figure, because the components change; the exact combined rate stays with the IDOR and your CPA. On the Chicago cloud/lease tax: Schaumburg is in Cook County but is not the City of Chicago, so the City of Chicago lease/&ldquo;cloud&rdquo; tax (administered by the City of Chicago Department of Finance) does not apply to your own Schaumburg location. It can apply when you sell SaaS or lease to customers located in Chicago &mdash; we flag where that may be in scope; the determination stays with your CPA." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; 2.5% for C-corporations and 1.5% for partnerships, S-corporations, and other pass-throughs &mdash; that even pass-throughs owing no regular Illinois income tax still pay, collected by the state and distributed to local governments. It commonly surprises pass-through owners. We track the position in your books; the rate, the PTE election, and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "How much does a Schaumburg bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Multi-entity corporate offices and high-volume retailers carry more complexity (entity allocation, POS, inventory, location-based sales tax), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Schaumburg QuickBooks file?", a: "Yes &mdash; especially for multi-entity offices whose inter-company allocations drifted, or retailers whose POS and inventory books fell out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding entity allocations, POS reconciliation, and inventory &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent bookkeeping and QuickBooks ProAdvisor firm &mdash; we keep, track, and reconcile your books and produce CPA-ready statements, but we do not file Illinois income, sales, or PPRT returns, make the pass-through-entity (PTE) election, or represent you before the IDOR or the City of Chicago. Your CPA or EA computes, elects, and files; we coordinate with them and hand over clean books." },
    { q: "How do we get started in Schaumburg?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Schaumburg situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/schaumburg/",
    name: "Schaumburg Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Schaumburg, Illinois businesses — fluent in the northwest-suburban corporate-office and professional-services economy, Woodfield-area retail and hospitality, the flat income tax, the Personal Property Replacement Tax, and high Cook County sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Schaumburg Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Schaumburg tax-aware bookkeeping — corporate-office and professional-services multi-entity ledgers and expense allocation, Woodfield-area retail POS, inventory and COGS, hospitality tipped payroll, commercial real estate, Illinois' flat income tax, the Personal Property Replacement Tax, and the high Cook County and home-rule sales tax tracked by location. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, or represent before the IDOR or the City of Chicago — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Schaumburg", sameAs: "https://en.wikipedia.org/wiki/Schaumburg,_Illinois" },
      { type: "AdministrativeArea", name: "Cook County", sameAs: "https://en.wikipedia.org/wiki/Cook_County,_Illinois" },
    ],
    audienceType: "Schaumburg and northwest-suburban small and midsize businesses — corporate and regional offices, professional and business services, retail and Woodfield-area commerce, hospitality and convention, and commercial real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

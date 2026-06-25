/* /find-an-accountant/california/cities/los-angeles/ — CA CITY CHILD (growth phase).
 * t-location, lighter city hero (heroLight). Shared body: partials/city-child-body.njk.
 * GENUINELY localized: real Los Angeles + California specifics, not a name-swapped
 * template. The un-clonable hook is the LOS ANGELES CITY BUSINESS TAX (LABT) — a tax
 * levied on GROSS RECEIPTS by business classification, requiring a Business Tax
 * Registration Certificate (BTRC) from the LA Office of Finance — layered with
 * Measure ULA (the city's real-property transfer tax on sales over $5M / $10M,
 * effective April 1 2023) and California's $800 FTB franchise tax, CDTFA sales tax,
 * and AB5. A find-replace of "Los Angeles"->"Dallas" reads false at every line
 * (no city gross-receipts business tax, no ULA transfer tax, no CA state stack).
 *
 * HONESTY: real, current-as-of-review tax facts only; LABT classifications/rates and
 * ULA thresholds are described structurally and deferred to the LA Office of Finance,
 * the CA FTB, the CDTFA, and the client's CPA/EA — TechBrot keeps the books and
 * coordinates; it does not file CA/LA returns. No fabricated stats, counts, or
 * clients. Firm-level review byline (founder-name-zero). Pricing = the firm's
 * standard fixed-fee ranges. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cities/los-angeles/",
  slug: "la",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Los Angeles Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "ProAdvisor bookkeeping for Los Angeles — the gross-receipts LA City Business Tax, Measure ULA, the $800 franchise tax and CDTFA sales tax. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Los Angeles" },
  ],
  hero: {
    eyebrow: "Los Angeles &middot; LA County &middot; California",
    heading: "Los Angeles bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Los Angeles businesses &mdash; built around the city&rsquo;s gross-receipts Business Tax (the LABT and its BTRC registration), Measure ULA on property transfers, and California&rsquo;s $800 franchise tax and CDTFA sales tax. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Los Angeles &amp; the wider LA metro",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Los Angeles businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in the Los Angeles City Business Tax and California&rsquo;s FTB and CDTFA structure. The full Los Angeles summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Los Angeles &amp; California tax figures verified against the City of Los Angeles Office of Finance, the CA FTB, and the CDTFA.",
  },
  ctaBand: {
    eyebrow: "Los Angeles businesses start here",
    heading: "Book a Los Angeles discovery call.",
    lede: "30 minutes. We review where your books stand and your Los Angeles context &mdash; LABT gross-receipts classification and BTRC status, Measure ULA exposure on property, CDTFA sales tax, AB5 contractor mix &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file CA/LA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&city=los-angeles&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Los Angeles",
  copy: {
    localEyebrow: "Bookkeeping built for how Los Angeles actually taxes",
    areasEyebrow: "Across the city &amp; the LA metro",
    taxEyebrow: "The taxes we build into your books",
    industriesEyebrow: "Los Angeles verticals we know",
    servicesEyebrow: "What we do for Los Angeles businesses",
    faqEyebrow: "Los Angeles FAQ",
  },
  advisoryCtaHref: "/contact/?intent=california-advisory&state=california&city=los-angeles&source_type=city-page&funnel_stage=BOFU",

  // SUMMARY
  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Los Angeles businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. What sets Los Angeles apart is its own city tax layer: the <strong>Los Angeles City Business Tax (LABT)</strong>, levied on <em>gross receipts</em> at rates that vary by business classification and requiring a <strong>Business Tax Registration Certificate (BTRC)</strong>, plus <strong>Measure ULA</strong>, the city&rsquo;s transfer tax on real-property sales above $5M. That sits on top of California&rsquo;s <strong>$800 minimum franchise tax</strong> (owed to the FTB whether or not you profit), <strong>CDTFA sales/use tax</strong> (about 9.5% in the city of Los Angeles), and California&rsquo;s <strong>AB5</strong> worker-classification rules. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file California or Los Angeles taxes.",

  // AI SUMMARY (5)
  aiSummary: [
    { q: "Who provides bookkeeping for Los Angeles businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Los Angeles and LA-metro businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in the Los Angeles City Business Tax (LABT) and California&rsquo;s FTB and CDTFA tax structure." },
    { q: "What Los Angeles and California taxes affect my books?", a: "The <strong>Los Angeles City Business Tax</strong> (levied on gross receipts by business classification, with a BTRC registration), <strong>Measure ULA</strong> (a city transfer tax on property sales over $5M), California&rsquo;s <strong>$800 minimum franchise tax</strong> plus an income-based LLC fee (FTB), <strong>CDTFA sales &amp; use tax</strong> (about 9.5% in the city), and <strong>AB5</strong> worker classification." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong> for monthly bookkeeping; <strong>$1,500&ndash;$15,000+</strong> for one-time cleanup. Fixed-fee against a written scope, never hourly. Production, agency, and multi-entity LA businesses often carry high transaction volume, which we scope transparently before any work begins." },
    { q: "Do I owe the Los Angeles City Business Tax?", a: "Most businesses operating in the city of Los Angeles must register for a <strong>Business Tax Registration Certificate (BTRC)</strong> with the Office of Finance, and the tax is calculated on <strong>gross receipts</strong> at a rate set by business classification. A <strong>small-business exemption</strong> can apply for the smallest businesses that file on time, and some creative work qualifies for relief &mdash; but the registration and annual renewal obligation is broad. We keep the books so gross receipts are clear by classification; the Office of Finance&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Which areas do you serve?", a: "<strong>All of Los Angeles</strong> &mdash; Downtown (DTLA), Hollywood, Century City, the Westside and Santa Monica (&ldquo;Silicon Beach&rdquo;), the San Fernando Valley, and the wider LA County metro &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  // LOCAL CONTEXT (4)
  localContext: [
    "Los Angeles is one of the few U.S. cities that runs its own gross-receipts business tax &mdash; and that single fact is what makes bookkeeping here its own discipline.",
    "The <strong>Los Angeles City Business Tax (LABT)</strong> is calculated on <em>gross receipts</em>, not profit, at rates that vary by business classification, and nearly every business operating in the city must hold a <strong>Business Tax Registration Certificate (BTRC)</strong> and renew it annually with the Office of Finance. Layered on top is California&rsquo;s structure: the <strong>$800 minimum franchise tax</strong> every LLC and corporation owes the Franchise Tax Board regardless of profit, an income-based <strong>LLC fee</strong>, <strong>CDTFA sales/use tax</strong> at roughly 9.5% in the city, and <strong>AB5</strong>, whose strict ABC test reclassifies many &ldquo;contractors&rdquo; as employees. And if you own or sell LA real property, <strong>Measure ULA</strong> adds a transfer tax on sales above $5M.",
    "That is why out-of-state, software-only bookkeeping struggles here. If your books don&rsquo;t track gross receipts the way the city classifies your business activity, the LABT becomes a guess. If a freelance editor, writer, or developer should have been a W-2 employee under <a href=\"/glossary/1099-vs-w2/\">AB5</a>, you find out the expensive way. And LA&rsquo;s production, agency, and entertainment economy is built on project work and pass-through spend, where revenue recognition decides whether your top line is real. TechBrot keeps a named bookkeeper on your file who knows these are the things that matter in this city &mdash; built into the monthly close, not the year-end scramble.",
    "The result: books that reflect how a Los Angeles business actually runs &mdash; gross receipts tracked by LABT classification, sales tax reconciled to the CDTFA, contractor vs. employee handled cleanly, project and media spend booked correctly &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>, so filing the city business tax, the franchise tax, and the income returns is fast and accurate.",
  ],

  // AREAS (6)
  areas: [
    { name: "Downtown LA &amp; the Arts District", note: "Tech, fashion, finance &amp; professional services" },
    { name: "Hollywood &amp; the Eastside", note: "Entertainment, production, post &amp; creative studios" },
    { name: "Westside &amp; Santa Monica", note: "&ldquo;Silicon Beach&rdquo; SaaS, agencies &amp; startups" },
    { name: "Century City &amp; West LA", note: "Law firms, finance &amp; professional services" },
    { name: "San Fernando Valley", note: "Production, post-production, logistics &amp; small business" },
    { name: "All of LA County metro", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  // TAX STACK (3)
  taxStack: [
    { figure: "LABT", desc: "Los Angeles City Business Tax &mdash; the city taxes <strong>gross receipts</strong> (not net income) at rates set by business classification, and most businesses must hold and annually renew a <strong>Business Tax Registration Certificate (BTRC)</strong> with the Office of Finance. A small-business exemption can apply for the smallest, timely filers. Because it&rsquo;s on receipts, it can apply even in a loss year." },
    { figure: "$800", desc: "California minimum annual franchise tax &mdash; every LLC, corporation, LP, and LLP owes it to the Franchise Tax Board (FTB) regardless of profit. LLCs also owe an additional income-based fee. Filed by your CPA; tracked in your books so it&rsquo;s never a surprise." },
    { figure: "9.5%", desc: "City of Los Angeles combined sales &amp; use tax &mdash; California&rsquo;s 7.25% statewide base plus county and district add-ons (some LA-metro cities run higher, to 10.25%), administered by the CDTFA, not the IRS. Tracked and reconciled in QuickBooks for an accurate return." },
  ],
  taxNote: "Los Angeles and California tax figures are educational and current as of the review date, verified against the City of Los Angeles Office of Finance, the California Franchise Tax Board, and the CDTFA. Rates, classifications, thresholds, and exemptions change &mdash; and Measure ULA applies to real-property transfers above $5M &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file California or Los Angeles tax returns or provide legal or tax advice.",

  // INDUSTRIES (6)
  industries: [
    { label: "Entertainment, production &amp; post", href: "/accounting/industries/professional-services/", note: "project and job costing, principal-vs-agent treatment of media and production spend, heavy freelance crews assessed under AB5" },
    { label: "Tech &amp; SaaS (&ldquo;Silicon Beach&rdquo;)", href: "/accounting/industries/saas/", note: "<a href=\"/glossary/deferred-revenue/\">deferred-revenue</a> recognition for subscriptions, burn-rate and runway reporting, equity-comp coordination with your CPA" },
    { label: "Creative &amp; marketing agencies", href: "/accounting/industries/professional-services/", note: "gross-vs-net revenue on pass-through media, project profitability, and books structured for LABT classification" },
    { label: "Restaurants &amp; hospitality", href: "/accounting/industries/restaurant/", note: "high-volume POS deposits reconciled to the CDTFA sales-tax return, tipped-employee payroll" },
    { label: "E-commerce, apparel &amp; retail", href: "/accounting/industries/ecommerce/", note: "multi-channel sales, marketplace settlements, and multi-state <a href=\"/glossary/sales-tax-nexus/\">sales-tax nexus</a> beyond California" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers, trust accounting, and Measure ULA awareness on dispositions" },
  ],

  // SERVICES (4)
  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with gross receipts tracked by LABT classification and CDTFA sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup &amp; catch-up", body: "Production and agency books fall behind fast between projects. We get the file CPA-ready, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales-tax- &amp; LABT-ready books", body: "Books structured so your CPA can file the CDTFA sales tax and the LA City Business Tax accurately, with gross receipts split by classification.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  // ADVISORY
  advisoryBody: "In a city that taxes your gross receipts by classification and a state that bills $800 before you&rsquo;ve made a dollar, the value isn&rsquo;t in categorizing a transaction &mdash; it&rsquo;s in knowing your LABT classification is right, your project margins are real after pass-through media spend, and your freelance crew won&rsquo;t fail an AB5 test. That judgment is what a named Los Angeles bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  // EXPERT REVIEW
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the LA Office of Finance, CA FTB &amp; CDTFA &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ (8)
  faq: [
    { q: "Do you have a bookkeeper for my Los Angeles business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Los Angeles and the wider LA metro, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in the Los Angeles City Business Tax and California&rsquo;s FTB and CDTFA tax structure." },
    { q: "What is the Los Angeles City Business Tax (LABT)?", a: "It&rsquo;s a city tax calculated on a business&rsquo;s gross receipts &mdash; not its profit &mdash; at a rate that depends on the business&rsquo;s classification (professional, multimedia, retail/wholesale, and so on). Most businesses operating in the city must register for a Business Tax Registration Certificate (BTRC) with the Office of Finance and renew it annually. A small-business exemption can apply for the smallest businesses that file on time. We keep the books so gross receipts are tracked by classification; the Office of Finance&rsquo;s rules and your CPA determine what&rsquo;s actually due." },
    { q: "What Los Angeles and California taxes affect my bookkeeping?", a: "Several that out-of-state bookkeepers miss. The LA City Business Tax is levied on gross receipts by classification, with a BTRC registration. Measure ULA adds a transfer tax on city real-property sales above $5M. California charges an $800 minimum annual franchise tax to the FTB on LLCs and corporations regardless of profit, plus an income-based LLC fee. The CDTFA administers sales and use tax (about 9.5% in the city). And AB5&rsquo;s ABC test governs whether a worker is a contractor or an employee. We build awareness of all of it into how your books are kept." },
    { q: "What is Measure ULA and does it affect me?", a: "Measure ULA is a City of Los Angeles transfer tax that applies to sales of real property within the city above a high dollar threshold (over $5M, with a higher rate above $10M), effective April 2023. It mainly affects owners and investors selling higher-value LA real estate. If you hold or dispose of city real property, we make sure the transaction is reflected cleanly in your books; the exact rate, thresholds, and any exemptions should be confirmed with your CPA and the City of Los Angeles." },
    { q: "How much does a Los Angeles bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Production, agency, and multi-entity LA businesses often run high transaction volumes, which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Los Angeles QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common LA engagements, especially for production companies and agencies whose books fall behind between projects. We scope a one-time cleanup or catch-up to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean &mdash; including the gross-receipts detail the city business tax depends on." },
    { q: "Do you work with Los Angeles entertainment and production companies?", a: "Yes &mdash; it&rsquo;s a core LA vertical. Production, post, and agency businesses need project and job costing, correct principal-vs-agent (gross-vs-net) treatment of media and production spend, and clean handling of a heavy freelance crew base under AB5. We keep the books to that standard and coordinate with your CPA, and where useful extend into fractional-CFO advisory." },
    { q: "How do we get started in Los Angeles?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Los Angeles situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cities/los-angeles/",
    name: "Los Angeles Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Los Angeles businesses — fluent in the LA City Business Tax (gross-receipts based, BTRC), Measure ULA, California's $800 minimum franchise tax (FTB), and CDTFA sales tax (about 9.5%). Fixed-fee, named bookkeeper.",
    serviceName: "Los Angeles Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Los Angeles tax-aware bookkeeping — with the LA City Business Tax (gross receipts by classification), California's $800 franchise tax, and CDTFA sales tax tracked and CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file California or Los Angeles tax returns — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Los Angeles", sameAs: "https://en.wikipedia.org/wiki/Los_Angeles" },
      { type: "AdministrativeArea", name: "Los Angeles County", sameAs: "https://en.wikipedia.org/wiki/Los_Angeles_County,_California" },
    ],
    audienceType: "Los Angeles and LA-metro small and midsize businesses — entertainment, production and post, tech and SaaS, creative and marketing agencies, restaurants and hospitality, e-commerce and apparel, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

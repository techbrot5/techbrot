/* /find-an-accountant/california/quickbooks-accountant/ — CA SERVICE CHILD (money/umbrella).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 money cluster — the umbrella
 * "quickbooks accountant / proadvisor / bookkeeper near me" page for California.
 * GENUINELY CA-localized: the facts band is the real CA stack ($800 FTB franchise tax,
 * CDTFA district sales tax, AB5), and the service content ties QuickBooks ProAdvisor work
 * to California. HONESTY: real facts deferred to the FTB/CDTFA/EDD + CPA/EA; founder-name-
 * zero; independent, not Intuit; does not file CA returns. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/california/quickbooks-accountant/",
  slug: "ca-svc-qbaccountant",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Accountant & ProAdvisor · TechBrot",
  description: "Certified QuickBooks ProAdvisor & accountant for California businesses — bookkeeping, cleanup, payroll coordination, CDTFA district sales tax, AB5 tracking. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Accountant" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; Certified QuickBooks ProAdvisor",
    heading: "Your California QuickBooks accountant &mdash; ProAdvisor expertise, California rules.",
    subheading: "Bookkeeping, QuickBooks setup and cleanup, payroll coordination, and CDTFA district sales tax &mdash; delivered by a named Certified QuickBooks ProAdvisor on the same file every month, in your own QuickBooks Online or Desktop file. Fixed-fee, written scope, all 58 California counties. We deliver the books; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Independent &middot; not Intuit",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> is a <strong>Certified QuickBooks ProAdvisor and bookkeeping firm for California businesses</strong> &mdash; a named ProAdvisor manages your QuickBooks file every month: categorization and reconciliation, a clean chart of accounts, CDTFA district-sales-tax-ready books, AB5 contractor tracking, payroll coordination, and CPA-ready monthly statements, all in your own QuickBooks Online or Desktop file across all 58 counties. The full California QuickBooks accountant summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references (the $800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date and are reviewed periodically; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Ready for a California QuickBooks accountant who stays on your file?",
    lede: "Book a free discovery call. We&rsquo;ll review your QuickBooks file, tell you honestly whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks accountant, in five questions.",
    valueEyebrow: "What a named ProAdvisor does for your California books",
    valueHeading: "Everything your books need, handled by one expert.",
    valueLede: "Every engagement is scoped to your business and delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; the same one, every month.",
    factsEyebrow: "California tax realities we build into your books",
    factsHeading: "Three California facts that change how your books are kept.",
    factsLede: "These aren&rsquo;t footnotes &mdash; they shape how the chart of accounts, sales-tax items, and payroll are set up from day one.",
    faqHeading: "California QuickBooks accountant questions.",
  },

  summary: "<strong>TechBrot</strong> is a <strong>Certified QuickBooks ProAdvisor and accountant for California businesses</strong> &mdash; one named ProAdvisor on your QuickBooks file every month, handling categorization and reconciliation, a clean chart of accounts, CDTFA <a href=\"/find-an-accountant/california/\">district sales tax</a> configured by location, AB5 contractor tracking, payroll coordination, and CPA-ready monthly statements. Delivered in your own QuickBooks Online or hosted Desktop file across all 58 counties, fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). California&rsquo;s structure &mdash; the <strong>$800 FTB franchise tax</strong>, the nation&rsquo;s most complex <strong>district sales tax</strong>, and <strong>AB5</strong> &mdash; is built into how the books are kept. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What is a California QuickBooks accountant?", a: "<strong>A Certified QuickBooks ProAdvisor who keeps your books in your own QuickBooks file to a California standard</strong> &mdash; categorization, reconciliation, a clean chart of accounts, CDTFA district sales tax by location, AB5 contractor tracking, and CPA-ready statements every month. TechBrot is an independent ProAdvisor firm; we do the operational accounting, your CPA files." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data. We work in your <strong>QuickBooks Online or hosted Desktop</strong> file (we don&rsquo;t lock you into proprietary software), with a named ProAdvisor on the same file every month so nothing is re-learned. We can also set up or migrate the file if you need it." },
    { q: "What California taxes do you build into the books?", a: "The <strong>$800 FTB minimum franchise tax</strong> (accrued so it&rsquo;s never a surprise), <strong>CDTFA district sales tax</strong> configured to the correct combined rate by customer location, and <strong>AB5</strong> worker classification (W-2 vs 1099 separated cleanly). Filing and any disputes stay with your CPA and the agencies." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly: monthly bookkeeping <strong>$400&ndash;$2,500+/mo</strong> by volume and accounts; one-time cleanup <strong>$1,500&ndash;$15,000+</strong>. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns and represents you before the agencies. We are not affiliated with Intuit Inc." },
  ],
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; close", body: "Reconciled accounts, clean categorization, and CPA-ready statements every month &mdash; with CDTFA sales tax and the $800 franchise tax tracked.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks setup &amp; cleanup", body: "A California-correct chart of accounts, district sales-tax items by location, and a cleanup to a CPA-ready standard when the file has fallen behind.", href: "/find-an-accountant/california/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "03", title: "District sales tax, configured right", body: "QuickBooks set to the correct combined CDTFA rate by customer location &mdash; not a flat statewide rate &mdash; so the return ties.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "AB5 contractor tracking", body: "W-2 wages and 1099 contractor pay separated cleanly, with the misclassification exposure surfaced before the EDD sees it.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "05", title: "Payroll coordination", body: "California payroll configured for SDI, PIT withholding, and EDD reporting, coordinated with your payroll provider and CPA.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "CFO-level advisory, when ready", body: "Once the books are clean, fractional-CFO advisory &mdash; forecasting, board reporting, ASC 606 strategy &mdash; on the global advisory team.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],
  facts: [
    { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year just to do business in California &mdash; even at a loss &mdash; plus an income-based LLC fee. We accrue it in the books so it&rsquo;s never a surprise; your CPA files." },
    { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and local district add-ons push the combined rate past 10.25% in some areas. The rate is sourced by location, so QuickBooks must apply the correct combined rate by customer &mdash; not a flat statewide rate." },
    { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees (Prong B), with penalties of $5,000&ndash;$25,000 per violation plus back payroll taxes. We separate W-2 from 1099 and surface the exposure; EDD disputes go to your CPA or counsel." },
  ],
  scopeDo: [
    "Keep your QuickBooks Online or Desktop file reconciled and current every month",
    "Build and maintain a California-correct chart of accounts",
    "Configure CDTFA district sales tax to the correct combined rate by location",
    "Track AB5 contractor classification &mdash; W-2 vs 1099 separated cleanly",
    "Accrue the $800 franchise tax and prepare CPA-ready statements",
    "Coordinate California payroll (SDI, PIT, EDD) with your provider",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits (your CPA/counsel)",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your QuickBooks file and your California situation &mdash; district-tax footprint, AB5 exposure, where the books stand &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee: cleanup, monthly bookkeeping, or both. No hourly billing, no surprises." },
    { phase: "Step 3", title: "Cleanup to CPA-ready", body: "If the file needs it, we bring it to a CPA-ready standard &mdash; district rates corrected, accounts reconciled, classification cleaned." },
    { phase: "Step 4", title: "Monthly cadence", body: "A named ProAdvisor keeps the file clean every month and hands CPA-ready statements to your CPA, who files." },
  ],
  advisoryBody: [
    "As automation commoditizes data entry, the value of a California QuickBooks accountant moves to judgment &mdash; knowing your district-tax configuration is right, your contractor mix won&rsquo;t fail an AB5 test, and your books will support a raise, a loan, or a board.",
    "That&rsquo;s why every TechBrot engagement is built on accurate books first, then extends &mdash; when you&rsquo;re ready &mdash; into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a>: forecasting, board reporting, and California-specific planning around AB5 and entity structure, in coordination with your CPA.",
  ],
  faq: [
    { q: "What does a California QuickBooks accountant do?", a: "A Certified QuickBooks ProAdvisor keeps your books in your own QuickBooks file to a California standard &mdash; categorization and reconciliation, a clean chart of accounts, CDTFA district sales tax configured by location, AB5 contractor tracking, payroll coordination, and CPA-ready monthly statements. TechBrot is an independent ProAdvisor firm; we do the operational accounting, and your CPA files the returns." },
    { q: "Do you work in my existing QuickBooks file or your own software?", a: "Your file, your data. We work directly in your QuickBooks Online or hosted Desktop file rather than locking you into proprietary tooling, with a named ProAdvisor on the same file every month. If you need a new file set up or a migration from Desktop to Online or from another platform, we handle that too." },
    { q: "Which California taxes do you build into the books?", a: "The $800 FTB minimum franchise tax (accrued so it never surprises the books), CDTFA district sales tax configured to the correct combined rate by customer location rather than a flat statewide rate, and AB5 worker classification with W-2 and 1099 pay separated cleanly. The filings and any FTB/CDTFA/EDD disputes are handled by your CPA or EA." },
    { q: "Do you serve my city or county?", a: "All 58 California counties &mdash; from Los Angeles, the Bay Area, and San Diego to the Central Valley and Sacramento &mdash; delivered remotely on QuickBooks, so your location changes the tax context but never the service or the named ProAdvisor on your file. Dedicated city pages exist for our largest metros." },
    { q: "How much does a California QuickBooks accountant cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB franchise tax, CDTFA sales tax, and income returns and represents you before the agencies. We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
    { q: "Can you clean up a messy California QuickBooks file?", a: "Yes &mdash; it&rsquo;s one of the most common California engagements, especially when district sales tax was misconfigured at a flat rate or contractors were misclassified. We scope a one-time cleanup to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Are you a CPA firm?", a: "No &mdash; we&rsquo;re an independent Certified QuickBooks ProAdvisor and bookkeeping firm. The standard model is that TechBrot handles QuickBooks operations and bookkeeping while your California CPA handles tax filing, audit, and representation. Most California clients use both; we coordinate directly with your CPA." },
  ],
  reviewProse: "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping, QuickBooks work, and payroll coordination and works with your CPA, who files; we do not file California income, franchise, or sales-tax returns and do not represent clients before tax authorities.",
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-accountant/",
    name: "California QuickBooks Accountant & ProAdvisor",
    description: "Certified QuickBooks ProAdvisor and accountant for California businesses — bookkeeping, cleanup, payroll coordination, CDTFA district sales tax, and AB5 tracking in your own QuickBooks file across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks ProAdvisor & Accountant Services",
    serviceType: "QuickBooks ProAdvisor and bookkeeping services",
    serviceDesc: "Monthly bookkeeping, QuickBooks setup and cleanup, CDTFA district sales tax configuration, AB5 contractor tracking, payroll coordination, and CPA-ready statements for California businesses, delivered in the client's own QuickBooks file across all 58 counties. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" },
    ],
    audienceType: "California small and midsize businesses across all 58 counties — SaaS and technology, e-commerce, agencies, professional services, restaurants, real estate, and construction",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

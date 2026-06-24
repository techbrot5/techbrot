/* /find-an-accountant/california/monthly-bookkeeping/ â€” CA SERVICE CHILD (bookkeeping spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 bookkeeping spoke â€” the
 * recurring monthly close for California. GENUINELY CA-localized. HONESTY: deferred to
 * FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year to do business in California &mdash; even at a loss &mdash; plus an income-based LLC fee. We accrue it across the year so it&rsquo;s never a surprise; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and local district add-ons push the combined rate past 10.25% in places. The monthly close reconciles CDTFA district sales tax by location so the return ties." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. The monthly close keeps W-2 and 1099 pay separated cleanly so the exposure is visible; EDD disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping, QuickBooks work, and payroll coordination and works with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/monthly-bookkeeping/",
  slug: "ca-svc-monthly",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California Monthly Bookkeeping Â· TechBrot",
  description: "Monthly bookkeeping for California businesses â€” books closed every month by a Certified ProAdvisor, CDTFA district sales tax reconciled, $800 franchise tax accrued, CPA-ready statements. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Monthly Bookkeeping" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; Monthly Bookkeeping",
    heading: "California monthly bookkeeping &mdash; closed on a calendar, every month.",
    subheading: "A recurring monthly close for California businesses by a named Certified QuickBooks ProAdvisor &mdash; reconciliation, CDTFA district sales tax by location, the $800 franchise tax accrued, AB5 tracking, and a CPA-ready financial package every month, in your own QuickBooks file across all 58 counties.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>monthly bookkeeping for California businesses</strong> &mdash; a recurring close by a named Certified QuickBooks ProAdvisor: reconciliation, CDTFA district sales tax by location, the $800 franchise tax accrued, AB5 tracking, and a CPA-ready financial package every month, in your own QuickBooks file across all 58 counties. The full California monthly bookkeeping summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Ready for books closed on a calendar every month?",
    lede: "Book a free discovery call. We&rsquo;ll review your file and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California monthly bookkeeping, in five questions.",
    valueEyebrow: "What the monthly close delivers",
    valueHeading: "A real close, on a published calendar.",
    valueLede: "Not just &ldquo;categorized&rdquo; &mdash; reconciled, sales-tax-ready, and CPA-ready, on a schedule you can count on.",
    factsEyebrow: "California tax realities the monthly close handles",
    factsHeading: "Three California facts the monthly close keeps straight.",
    factsLede: "Each monthly close keeps these three California realities current &mdash; not reconstructed at year-end.",
    faqHeading: "California monthly bookkeeping questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>monthly bookkeeping for California businesses</strong> &mdash; a recurring close by a named Certified QuickBooks ProAdvisor on a published calendar. Every month: bank and card reconciliation, clean categorization, CDTFA <a href=\"/accounting/sales-tax-compliance/\">district sales tax</a> reconciled by location, the <strong>$800 franchise tax</strong> accrued, AB5 contractor tracking kept current, and a CPA-ready financial package &mdash; in your own QuickBooks Online or hosted Desktop file across all 58 counties. Fixed monthly fee against a written scope ($400&ndash;$2,500+/mo by volume and accounts). Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What is California monthly bookkeeping?", a: "<strong>A recurring monthly close</strong> &mdash; reconciliation, categorization, CDTFA district sales tax by location, the $800 franchise-tax accrual, AB5 tracking, and a CPA-ready financial package &mdash; by a named Certified QuickBooks ProAdvisor in your own QuickBooks file, on a published calendar." },
    { q: "What&rsquo;s in the monthly package?", a: "Reconciled accounts, a profit-and-loss, balance sheet, and cash-flow view, the CDTFA sales-tax position, and any flags &mdash; delivered each month so you (and your CPA) always know where the business stands. No year-end scramble." },
    { q: "What California specifics does it keep current?", a: "The <strong>$800 FTB franchise-tax</strong> accrual, <strong>CDTFA district sales tax</strong> reconciled by location, and <strong>AB5</strong> contractor classification &mdash; kept current each month rather than reconstructed at year-end." },
    { q: "What does it cost?", a: "A fixed monthly fee against a written scope &mdash; <strong>$400&ndash;$2,500+/mo</strong> depending on transaction volume and accounts. Exact fee in writing within 3 business days." },
    { q: "What if I&rsquo;m behind first?", a: "We scope <strong>cleanup or catch-up</strong> first to get the file to a CPA-ready standard, then start the monthly cadence so it stays clean." },
  ],
  value: [
    { num: "01", title: "Reconciliation, every account", body: "Bank, card, and loan accounts reconciled each month so the books match reality.", href: "/accounting/reconciliation-services/", cta: "Reconciliation &rarr;" },
    { num: "02", title: "District sales tax reconciled", body: "CDTFA district rates reconciled by customer location each month so the return ties.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "$800 franchise tax accrued", body: "The FTB minimum tax and LLC fee accrued across the year so it&rsquo;s planned for.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "04", title: "AB5 tracking kept current", body: "W-2 and 1099 pay separated each month so the contractor mix stays defensible.", href: "/find-an-accountant/california/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "05", title: "A CPA-ready package", body: "A profit-and-loss, balance sheet, and cash-flow view delivered monthly &mdash; ready for your CPA and any lender.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "06", title: "A published close calendar", body: "You know when the books close and when the package lands &mdash; a real cadence, not &ldquo;sometime.&rdquo;", href: "/accounting/month-end-close/", cta: "Month-end close &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Reconcile every account on a published monthly calendar",
    "Reconcile CDTFA district sales tax by location each month",
    "Accrue the $800 franchise tax across the year",
    "Keep AB5 contractor classification current",
    "Deliver a CPA-ready financial package each month",
    "Run cleanup or catch-up first if the file is behind",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your file and confirms whether you&rsquo;re ready for a monthly cadence or need cleanup first." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written monthly scope and fixed fee within 3 business days." },
    { phase: "Step 3", title: "Get current", body: "If needed, cleanup or catch-up brings the file to a CPA-ready baseline." },
    { phase: "Step 4", title: "Monthly close", body: "Your named ProAdvisor closes the books each month and delivers the CPA-ready package." },
  ],
  advisoryBody: [
    "A monthly close is what turns bookkeeping from a year-end fire drill into a management tool &mdash; California sales tax that ties, a franchise tax that&rsquo;s planned for, and numbers you can act on each month.",
    "From a clean monthly close, <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> adds forecasting and board reporting, in coordination with your CPA.",
  ],
  faq: [
    { q: "What is California monthly bookkeeping?", a: "A recurring monthly close by a named Certified QuickBooks ProAdvisor &mdash; reconciliation, categorization, CDTFA district sales tax reconciled by location, the $800 franchise-tax accrual, AB5 tracking, and a CPA-ready financial package &mdash; in your own QuickBooks file, on a published calendar across all 58 counties." },
    { q: "What&rsquo;s included in the monthly package?", a: "Reconciled accounts and a profit-and-loss, balance sheet, and cash-flow view, plus the CDTFA sales-tax position and any flags, delivered each month so you and your CPA always know where the business stands. The point is no year-end scramble &mdash; the books are current every month." },
    { q: "Which California specifics does the monthly close keep current?", a: "The $800 FTB franchise-tax accrual, CDTFA district sales tax reconciled by customer location, and AB5 contractor classification &mdash; kept current each month rather than reconstructed at year-end. The filings and any agency disputes stay with your CPA or EA." },
    { q: "How much does California monthly bookkeeping cost?", a: "A fixed monthly fee against a written scope, never hourly &mdash; typically $400&ndash;$2,500+/mo depending on transaction volume, number of accounts, and complexity. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "What if my books are behind before we start?", a: "We scope a cleanup or catch-up first to bring the file to a CPA-ready baseline, then start the monthly cadence so it stays clean. The free file review tells you honestly how far behind the file is and what getting current will take." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with the same named ProAdvisor closing the books every month. We don&rsquo;t lock you into proprietary tooling." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
    { q: "Do you serve my California city or county?", a: "All 58 California counties, delivered remotely on QuickBooks &mdash; LA, the Bay Area, San Diego, the Central Valley, Sacramento and beyond. Your location changes the tax context but never the service or the named ProAdvisor on your file." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/monthly-bookkeeping/",
    name: "California Monthly Bookkeeping",
    description: "Monthly bookkeeping for California businesses â€” a recurring close by a Certified ProAdvisor with CDTFA district sales tax reconciled, the $800 franchise tax accrued, and a CPA-ready package each month, across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California Monthly Bookkeeping Services",
    serviceType: "Monthly bookkeeping and close services",
    serviceDesc: "A recurring monthly close for California businesses â€” reconciliation, CDTFA district sales tax by location, the $800 franchise-tax accrual, AB5 tracking, and a CPA-ready monthly financial package, in the client's own QuickBooks file across all 58 counties. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns â€” coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses across all 58 counties needing a recurring monthly bookkeeping close",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

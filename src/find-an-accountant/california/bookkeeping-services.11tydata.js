/* /find-an-accountant/california/bookkeeping-services/ — CA SERVICE CHILD (money/bookkeeping).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 money cluster. GENUINELY CA-
 * localized (facts band = real CA stack; service content = California bookkeeping).
 * HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year to do business in California &mdash; even at a loss &mdash; plus an income-based LLC fee. We accrue it so it&rsquo;s never a surprise; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and local district add-ons push the combined rate past 10.25% in places. QuickBooks must apply the correct combined rate by customer location, not a flat statewide rate." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees, with penalties of $5,000&ndash;$25,000 per violation plus back payroll taxes. We separate W-2 from 1099 and surface the exposure; disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping, QuickBooks work, and payroll coordination and works with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/bookkeeping-services/",
  slug: "ca-svc-bookkeeping",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California Bookkeeping Services · TechBrot",
  description: "Bookkeeping services for California businesses — monthly, cleanup & catch-up by a Certified QuickBooks ProAdvisor, with CDTFA district sales tax and the $800 franchise tax built in. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Bookkeeping Services" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; Bookkeeping Services",
    heading: "California bookkeeping services &mdash; reconciled, sales-tax-ready, CPA-ready.",
    subheading: "Monthly bookkeeping, cleanup, and catch-up for California businesses by a named Certified QuickBooks ProAdvisor &mdash; reconciled accounts, CDTFA district sales tax configured by location, the $800 franchise tax accrued, and CPA-ready statements, in your own QuickBooks file across all 58 counties.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>bookkeeping services for California businesses</strong> &mdash; monthly bookkeeping, cleanup, and catch-up by a named Certified QuickBooks ProAdvisor, with reconciled accounts, CDTFA district sales tax configured by location, the $800 franchise tax accrued, and CPA-ready statements, in your own QuickBooks file across all 58 counties. The full California bookkeeping summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Ready for bookkeeping that ties to the CDTFA return?",
    lede: "Book a free discovery call. We&rsquo;ll review where your books stand and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California bookkeeping services, in five questions.",
    valueEyebrow: "What California bookkeeping includes",
    valueHeading: "Three ways we keep California books.",
    valueLede: "Whether you&rsquo;re behind, current, or scaling, the engagement is scoped to where your books actually are.",
    factsEyebrow: "California tax realities we build into your books",
    factsHeading: "Three California facts that change how your books are kept.",
    factsLede: "Bookkeeping in California isn&rsquo;t generic &mdash; these three realities shape the chart of accounts and the sales-tax setup from day one.",
    faqHeading: "California bookkeeping services questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>bookkeeping services for California businesses</strong> &mdash; <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a>, cleanup, and catch-up by a named Certified QuickBooks ProAdvisor. Reconciled accounts, a clean chart of accounts, CDTFA district sales tax configured to the correct combined rate by location, the <strong>$800 franchise tax</strong> accrued, AB5 contractor tracking, and CPA-ready monthly statements &mdash; in your own QuickBooks Online or Desktop file across all 58 counties. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+). Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What do California bookkeeping services include?", a: "<strong>Reconciliation, categorization, a clean chart of accounts, CDTFA district sales tax by location, the $800 franchise-tax accrual, AB5 tracking, and CPA-ready monthly statements</strong> &mdash; by a named Certified QuickBooks ProAdvisor in your own QuickBooks file. TechBrot is independent; we keep the books, your CPA files." },
    { q: "Monthly, cleanup, or catch-up &mdash; which do I need?", a: "<strong>Cleanup</strong> fixes a specific period that&rsquo;s wrong; <strong>catch-up</strong> brings months or years of behind-books current; <strong>monthly</strong> keeps a current file clean going forward. The free file review tells you honestly which one fits &mdash; often cleanup or catch-up first, then monthly." },
    { q: "What California taxes do you build in?", a: "The <strong>$800 FTB franchise tax</strong>, <strong>CDTFA district sales tax</strong> at the correct combined rate by location, and <strong>AB5</strong> worker classification &mdash; all reflected in the books so the returns your CPA files tie out." },
    { q: "What does it cost?", a: "Fixed-fee: monthly <strong>$400&ndash;$2,500+/mo</strong>; cleanup <strong>$1,500&ndash;$15,000+</strong>; catch-up <strong>$2,000&ndash;$20,000+</strong>. Exact fee in writing within 3 business days." },
    { q: "Do you work in my QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named bookkeeper on the same file every month. We don&rsquo;t lock you into proprietary software." },
  ],
  value: [
    { num: "01", title: "Monthly bookkeeping", body: "A recurring close &mdash; reconciliation, categorization, district sales tax, and CPA-ready statements every month.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Cleanup", body: "A file with structural problems &mdash; flat-rate sales tax, unreconciled accounts, misclassified contractors &mdash; brought to a CPA-ready standard.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Cleanup &rarr;" },
    { num: "03", title: "Catch-up", body: "Months or years behind, scoped and brought current so your CPA can file and you can see where you stand.", href: "/accounting/bookkeeping/catch-up-bookkeeping/", cta: "Catch-up &rarr;" },
    { num: "04", title: "District sales tax built in", body: "CDTFA rates configured by customer location and reconciled, so the sales-tax return ties.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "$800 franchise tax accrued", body: "The FTB minimum tax and LLC fee tracked in the books so it&rsquo;s planned for, not a year-end surprise.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "06", title: "CPA-ready statements", body: "Clean monthly financials your CPA files from and a lender or investor can rely on.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Reconcile and categorize every account, every month",
    "Build and maintain a California-correct chart of accounts",
    "Configure CDTFA district sales tax by location and reconcile it",
    "Accrue the $800 franchise tax and track AB5 classification",
    "Deliver CPA-ready monthly statements",
    "Run cleanup or catch-up first when the file needs it",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your books and tells you whether cleanup, catch-up, or monthly is the right start." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; no hourly billing." },
    { phase: "Step 3", title: "Get to CPA-ready", body: "We bring the file to a CPA-ready standard &mdash; district rates corrected, accounts reconciled." },
    { phase: "Step 4", title: "Monthly cadence", body: "A named bookkeeper keeps the file clean every month and hands statements to your CPA." },
  ],
  advisoryBody: [
    "Good California bookkeeping isn&rsquo;t just tidy &mdash; it&rsquo;s books where the district sales tax ties to the CDTFA return, the franchise tax is planned for, and the contractor mix is defensible.",
    "Once that foundation is in place, <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns it into decisions &mdash; forecasting and board reporting, in coordination with your CPA.",
  ],
  faq: [
    { q: "What do your California bookkeeping services include?", a: "Reconciliation and categorization, a clean chart of accounts, CDTFA district sales tax configured by location, the $800 franchise-tax accrual, AB5 contractor tracking, and CPA-ready monthly statements &mdash; by a named Certified QuickBooks ProAdvisor in your own QuickBooks file. We keep the books; your CPA files." },
    { q: "Do I need monthly bookkeeping, cleanup, or catch-up?", a: "Cleanup fixes a period that&rsquo;s structurally wrong; catch-up brings months or years of behind-books current; monthly keeps a current file clean. Most California engagements start with cleanup or catch-up to get the file to a CPA-ready standard, then move to a monthly cadence. The free file review tells you honestly which one you need." },
    { q: "Which California taxes do you build into the books?", a: "The $800 FTB minimum franchise tax (accrued so it&rsquo;s never a surprise), CDTFA district sales tax at the correct combined rate by customer location, and AB5 worker classification with W-2 and 1099 pay separated. The filings and any disputes stay with your CPA or EA." },
    { q: "How much do California bookkeeping services cost?", a: "Fixed-fee against a written scope: monthly bookkeeping $400&ndash;$2,500+/mo by volume and accounts; one-time cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named bookkeeper on the same file every month. We don&rsquo;t lock you into proprietary tooling, and we can set up or migrate the file if you need it." },
    { q: "Do you serve my California city or county?", a: "All 58 California counties, delivered remotely on QuickBooks &mdash; LA, the Bay Area, San Diego, the Central Valley, Sacramento and beyond. Your location changes the tax context but never the service or the named bookkeeper on your file." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
    { q: "Can you fix a file where sales tax was set up wrong?", a: "Yes &mdash; it&rsquo;s one of the most common California cleanups. When QuickBooks was set to a flat statewide rate instead of the correct district rate by location, the sales-tax liability drifts. We rebuild the sales-tax setup to CDTFA district rates and reconcile it, then keep it clean monthly." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/bookkeeping-services/",
    name: "California Bookkeeping Services",
    description: "Bookkeeping services for California businesses — monthly, cleanup, and catch-up by a Certified QuickBooks ProAdvisor, with CDTFA district sales tax and the $800 franchise tax built in, across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California Bookkeeping Services",
    serviceType: "Bookkeeping services",
    serviceDesc: "Monthly bookkeeping, cleanup, and catch-up for California businesses — reconciliation, a California-correct chart of accounts, CDTFA district sales tax by location, the $800 franchise-tax accrual, AB5 tracking, and CPA-ready statements, in the client's own QuickBooks file across all 58 counties. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses across all 58 counties needing monthly bookkeeping, cleanup, or catch-up",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

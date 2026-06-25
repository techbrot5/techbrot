/* /find-an-accountant/california/quickbooks-reconciliation/ — CA SERVICE CHILD (QB spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. GENUINELY CA-localized reconciliation.
 * HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. We keep it accrued in the reconciled books; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and district add-ons push the combined rate past 10.25%. Reconciliation includes a CDTFA sales-tax sub-reconciliation so the liability account ties to the return." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. Reconciliation keeps W-2 and 1099 pay separated so the exposure stays visible; EDD disputes go to your CPA." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/quickbooks-reconciliation/",
  slug: "ca-svc-qbrecon",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Reconciliation · TechBrot",
  description: "California QuickBooks reconciliation — bank, card and loan accounts reconciled, plus a CDTFA sales-tax sub-reconciliation. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Reconciliation" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; QuickBooks Reconciliation",
    heading: "California QuickBooks reconciliation &mdash; books that match reality.",
    subheading: "A Certified QuickBooks ProAdvisor reconciles your California file &mdash; every bank, card, and loan account &mdash; plus a CDTFA sales-tax sub-reconciliation so the liability ties to the return. One-time catch-up or an ongoing monthly cadence. Fixed-fee, all 58 counties. We reconcile; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks reconciliation for California businesses</strong> &mdash; a Certified ProAdvisor reconciles every bank, card, and loan account and runs a CDTFA sales-tax sub-reconciliation so the liability ties to the return, one-time or monthly, in your own QuickBooks file. The full California reconciliation summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Want books that actually reconcile?",
    lede: "Book a free discovery call. We&rsquo;ll review the file and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks reconciliation, in five questions.",
    valueEyebrow: "What California reconciliation covers",
    valueHeading: "Every account &mdash; plus the CDTFA sub-reconciliation.",
    valueLede: "Reconciliation isn&rsquo;t just ticking the bank feed &mdash; in California it includes tying the sales-tax liability to the CDTFA return.",
    factsEyebrow: "California tax realities reconciliation keeps tied",
    factsHeading: "Three California facts reconciliation keeps straight.",
    factsLede: "A California reconciliation isn&rsquo;t complete until these tie &mdash; especially the sales-tax liability.",
    faqHeading: "California QuickBooks reconciliation questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks reconciliation for California businesses</strong> &mdash; a Certified QuickBooks ProAdvisor reconciles every bank, card, and loan account to statements, clears duplicates and stale items, and runs a <strong>CDTFA sales-tax sub-reconciliation</strong> so the sales-tax liability ties to the return. Available as a one-time catch-up or an ongoing monthly cadence, in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop file across all 58 counties. Fixed-fee against a written scope. When reconciliation surfaces deeper problems &mdash; flat-rate sales tax, misclassification &mdash; we scope a <a href=\"/find-an-accountant/california/quickbooks-cleanup/\">cleanup</a>. Independent firm &mdash; not affiliated with Intuit Inc.; we reconcile, your CPA files.",
  aiSummary: [
    { q: "What is California QuickBooks reconciliation?", a: "<strong>Matching every account in QuickBooks to its statements &mdash; bank, card, loan &mdash; and tying the CDTFA sales-tax liability to the return.</strong> A Certified ProAdvisor reconciles, clears duplicates and stale items, and documents it, one-time or monthly." },
    { q: "What&rsquo;s the California-specific part?", a: "The <strong>CDTFA sales-tax sub-reconciliation</strong> &mdash; confirming the sales-tax liability account ties to what the CDTFA return reports, by district rate and location. Out-of-state bookkeepers routinely skip it and the liability drifts." },
    { q: "One-time or ongoing?", a: "Either. We can do a <strong>one-time catch-up</strong> to get current, or build reconciliation into an ongoing <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly close</a> so it never falls behind again." },
    { q: "What if reconciliation finds bigger problems?", a: "It often does &mdash; flat-rate district sales tax, misclassified contractors, Undeposited Funds messes. We&rsquo;ll flag them and scope a <a href=\"/find-an-accountant/california/quickbooks-cleanup/\">cleanup</a> separately so reconciliation stays focused." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope by account count and how far behind you are. Exact fee in writing within 3 business days of a free file review." },
  ],
  value: [
    { num: "01", title: "Bank &amp; card reconciliation", body: "Every bank and credit-card account matched to statements, with duplicates and stale transactions cleared.", href: "/accounting/reconciliation-services/", cta: "Reconciliation overview &rarr;" },
    { num: "02", title: "Loan &amp; liability accounts", body: "Loans, lines of credit, and liability accounts reconciled to statements and amortization, not left to drift.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "03", title: "CDTFA sales-tax sub-reconciliation", body: "The sales-tax liability tied to the CDTFA return by district rate and location &mdash; the California step others skip.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "04", title: "Undeposited Funds cleared", body: "The classic QuickBooks pileup &mdash; Undeposited Funds and unapplied payments &mdash; cleared and reconciled.", href: "/quickbooks/cleanup/", cta: "Cleanup &rarr;" },
    { num: "05", title: "One-time or monthly", body: "A one-time catch-up to get current, or reconciliation built into a recurring monthly close.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "06", title: "A documented result", body: "Reconciliation reports and a summary so you (and your CPA) can see the books now match reality.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Reconcile every bank, card, and loan account to statements",
    "Run a CDTFA sales-tax sub-reconciliation by district and location",
    "Clear Undeposited Funds, duplicates, and unapplied payments",
    "Flag deeper problems and scope a cleanup separately",
    "Deliver reconciliation reports and a written summary",
    "Build reconciliation into a monthly cadence if you want it",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews account count and how far behind reconciliation is &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; one-time or ongoing." },
    { phase: "Step 3", title: "Reconcile &amp; tie out", body: "Accounts reconciled to statements and the CDTFA sales-tax liability tied to the return." },
    { phase: "Step 4", title: "Keep it tied", body: "Optionally roll reconciliation into a monthly close so it never falls behind again." },
  ],
  advisoryBody: [
    "Reconciliation is where most California books quietly break &mdash; not in the bank feed, but in the sales-tax liability that never tied to the CDTFA return. Tying it out is what makes the statements trustworthy.",
    "From reconciled books, a <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly close</a> keeps them tied, and <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns trustworthy numbers into decisions.",
  ],
  faq: [
    { q: "What is California QuickBooks reconciliation?", a: "Matching every account in QuickBooks to its statements &mdash; bank, credit card, and loan &mdash; clearing duplicates, stale items, and Undeposited Funds, and tying the CDTFA sales-tax liability to the return. A Certified ProAdvisor reconciles and documents it, as a one-time catch-up or an ongoing monthly cadence, in your own QuickBooks file." },
    { q: "What&rsquo;s the California-specific part of reconciliation?", a: "The CDTFA sales-tax sub-reconciliation &mdash; confirming the sales-tax liability account ties to what the CDTFA return reports, by district rate and customer location. Because California sales tax is sourced by location, out-of-state bookkeepers routinely skip this step and the liability drifts until a notice arrives." },
    { q: "Is this one-time or ongoing?", a: "Either. We can run a one-time catch-up reconciliation to get current, or build reconciliation into an ongoing monthly close so the accounts and the sales-tax liability never fall behind again. The free file review tells you which fits." },
    { q: "What if reconciliation uncovers bigger problems?", a: "It often does &mdash; a flat district sales-tax rate, misclassified contractors, or an Opening Balance Equity mess. We flag them and scope a separate cleanup so the reconciliation engagement stays focused and predictable, rather than quietly ballooning." },
    { q: "How much does reconciliation cost?", a: "Fixed-fee against a written scope, based on the number of accounts and how far behind reconciliation is. You get the exact fee in writing within 3 business days of a free file review &mdash; never open-ended hourly billing." },
    { q: "Do you reconcile in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop. We don&rsquo;t move you into proprietary tooling, and we leave you reconciliation reports and a summary so the result is verifiable." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we reconcile and keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We are not affiliated with Intuit Inc." },
    { q: "Do you serve my California city or county?", a: "All 58 California counties, delivered remotely on QuickBooks. Your location changes the district sales-tax rate we reconcile to, but never the service or the named ProAdvisor on your file." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-reconciliation/",
    name: "California QuickBooks Reconciliation",
    description: "QuickBooks reconciliation for California businesses — bank, card, and loan accounts reconciled plus a CDTFA sales-tax sub-reconciliation so the return ties, one-time or monthly, across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks Reconciliation Services",
    serviceType: "QuickBooks account reconciliation services",
    serviceDesc: "Reconciliation of California QuickBooks files — every bank, card, and loan account matched to statements, Undeposited Funds and duplicates cleared, and a CDTFA sales-tax sub-reconciliation tying the liability to the return, one-time or ongoing. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses needing one-time or ongoing QuickBooks reconciliation",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

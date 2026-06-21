/* /find-an-accountant/texas/franchise-tax-help/ — TX SERVICE CHILD (tax cluster, non-triage).
 * t-bofu · partials/state-service-body.njk. TX Franchise ("margin") tax. HONESTY: we track the
 * position in the books for the CPA; the margin computation, no-tax-due determination, and FILING
 * stay with the Texas Comptroller + the client's CPA. We do not file, compute the liability, or
 * represent. All forward-links point to BUILT pages only. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const TX_FACTS = [
  { fig: "Margin", title: "A tax on margin, not income", body: "The Texas Franchise Tax is a <strong>&ldquo;margin&rdquo; tax</strong>: the base is revenue minus the greater of cost of goods sold, compensation, 30% of revenue, or a flat $1M-style deduction &mdash; not net income. Which deduction is best is a CPA calculation; we keep the books that feed it." },
  { fig: "No tax due", title: "Below the threshold &mdash; a report, not a payment", body: "Entities under the Comptroller&rsquo;s annual revenue threshold owe <strong>no franchise tax</strong> but generally still file a No Tax Due-style report (and the Public Information or Ownership report). We track the revenue figure so the threshold is never crossed by surprise; your CPA confirms and files." },
  { fig: "Comptroller", title: "Filed with the Texas Comptroller", body: "The franchise tax is administered by the <strong>Texas Comptroller of Public Accounts</strong>, generally due in May for the prior year. We keep the books reconciled and the figures ready; your CPA computes the margin and files." },
];
const TX_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Texas businesses remotely across all 254 counties. Texas franchise (margin) tax references &mdash; the margin computation methods, the no-tax-due revenue threshold, and the May filing cycle &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://comptroller.texas.gov/\" rel=\"noopener nofollow\">Texas Comptroller of Public Accounts</a>. Exact thresholds, rates, and deduction methods change; confirm current figures with the Comptroller and your CPA. TechBrot tracks the position in the books and coordinates with your CPA; we do not compute the franchise-tax liability, file the report, or represent clients before the Comptroller.";
const TX_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No margin computation, filing, or representation claims (out of scope) &middot; Thresholds change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. or the Texas Comptroller" },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/texas/franchise-tax-help/",
  slug: "tx-svc-franchisetax",
  disclosure: "<strong>Independent, and clear about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not a tax authority, not Intuit, and not a CPA, EA, or attorney. We reconstruct and reconcile the books a notice or filing depends on, fast and accurately; your CPA or EA files and represents you before the agency. We never trade accuracy for speed.",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Texas Franchise (Margin) Tax Help · TechBrot",
  description: "Texas franchise (margin) tax tracked in your books so your CPA can file accurately — margin base, the no-tax-due threshold, May filing. We keep the books; your CPA computes and files. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Franchise Tax Help" },
  ],
  bookHref: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "Texas &middot; Franchise (Margin) Tax",
    heading: "The Texas franchise tax, tracked in your books all year.",
    subheading: "Texas&rsquo;s &ldquo;margin&rdquo; tax is computed from figures your books produce &mdash; revenue, COGS, compensation. We keep those reconciled and the position tracked so your CPA can compute the margin and file accurately, and the no-tax-due threshold is never crossed by surprise. We keep the books; your CPA computes and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit or the Comptroller", "We track &middot; your CPA computes &amp; files"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> tracks your <strong>Texas franchise (margin) tax position in your QuickBooks file</strong> &mdash; revenue, cost of goods sold, and compensation kept reconciled so your CPA can compute the margin and file, and the no-tax-due revenue threshold is monitored so it&rsquo;s never crossed by surprise. We keep the books; the margin computation and filing stay with the Comptroller&rsquo;s rules and your CPA. Full summary below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. or the Texas Comptroller. Franchise-tax references reflect Comptroller rules current as of the review date; thresholds change &mdash; confirm with the Comptroller and your CPA. TechBrot does not compute the liability or file the report.",
  },
  ctaBand: {
    eyebrow: "Texas businesses start here",
    heading: "Want the franchise tax to be a non-event at filing time?",
    lede: "Book a free discovery call. We&rsquo;ll review whether your books are tracking the figures your CPA needs for the margin tax, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; we keep the books; your CPA computes the margin and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Texas",
  copy: {
    aiHeading: "Texas franchise (margin) tax, in five questions.",
    valueEyebrow: "What franchise-tax support covers",
    valueHeading: "The figures your CPA needs, kept clean all year.",
    valueLede: "We keep the revenue, COGS, and compensation figures reconciled &mdash; the margin computation and filing stay with your CPA.",
    factsEyebrow: "Texas franchise-tax facts that shape the books",
    factsHeading: "Three franchise-tax facts your books must support.",
    factsLede: "The margin tax is computed from your books &mdash; these three decide what has to be tracked cleanly.",
    faqHeading: "Texas franchise (margin) tax questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>Texas franchise (margin) tax support</strong> by keeping the figures the tax is computed from clean in your QuickBooks file. The franchise tax is a <strong>margin tax</strong> &mdash; revenue minus the greater of cost of goods sold, compensation, or 30% of revenue &mdash; not a tax on net income, and entities under the Comptroller&rsquo;s revenue threshold owe <strong>no tax</strong> but generally still file a report. We keep revenue, COGS, and compensation reconciled and monitor the threshold so it&rsquo;s never crossed by surprise; the margin computation, deduction choice, and filing with the <strong>Texas Comptroller</strong> (generally due in May) stay with your CPA. In your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 254 counties, fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc. or the Comptroller. Thresholds and rates change &mdash; confirm current figures with the Comptroller and your CPA.",
  aiSummary: [
    { q: "What is the Texas franchise tax?", a: "A <strong>&ldquo;margin&rdquo; tax</strong> administered by the Texas Comptroller &mdash; the base is revenue minus the greater of cost of goods sold, compensation, 30% of revenue, or a standard deduction, not net income. It applies to most taxable entities (LLCs, corporations, partnerships) doing business in Texas." },
    { q: "Who has to pay the Texas franchise tax?", a: "Most taxable entities formed or doing business in Texas, but those under the Comptroller&rsquo;s <strong>annual revenue threshold owe no tax</strong> &mdash; though they generally still file a report. Whether you owe and how much is a CPA computation; we keep the books that feed it." },
    { q: "Is the franchise tax the same as income tax?", a: "No. Texas has <strong>no state income tax</strong>. The franchise tax is a separate margin-based tax on the entity&rsquo;s gross receipts less certain deductions, and it&rsquo;s filed with the Comptroller, not the IRS." },
    { q: "What does TechBrot do for the franchise tax?", a: "We <strong>keep revenue, COGS, and compensation reconciled in QuickBooks and monitor the revenue threshold</strong> so your CPA can compute the margin and file accurately, and so the threshold is never crossed by surprise. We do not compute the liability, choose the deduction method, or file the report." },
    { q: "Do you file my franchise-tax report?", a: "No &mdash; TechBrot keeps the books CPA-ready and coordinates with your CPA, who computes the margin and files with the Comptroller (generally due in May). We are an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc. or the Comptroller, and we do not represent clients." },
  ],
  value: [
    { num: "01", title: "Revenue tracked cleanly", body: "Total revenue &mdash; the starting point of the margin base &mdash; categorized correctly so your CPA starts from a number that ties.", href: "/find-an-accountant/texas/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "COGS &amp; compensation separated", body: "Cost of goods sold and compensation tracked distinctly, since the margin deduction is the greater of the two &mdash; your CPA needs both clean.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03", title: "Threshold monitored", body: "We watch revenue against the no-tax-due threshold so crossing it &mdash; and the filing change that comes with it &mdash; is never a surprise.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Books reconciled before May", body: "The file reconciled and closed ahead of the franchise-tax deadline so your CPA isn&rsquo;t reconstructing the year under pressure.", href: "/find-an-accountant/texas/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
    { num: "05", title: "Sales tax handled alongside", body: "The 8.25% sales tax configured and reconciled in the same file, so both Comptroller obligations stay clean.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "06", title: "Cleanup before handoff", body: "If the file is behind or miscategorized, a one-time cleanup brings revenue, COGS, and compensation to a CPA-ready standard.", href: "/find-an-accountant/texas/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
  ],
  facts: TX_FACTS,
  scopeDo: [
    "Track total revenue, COGS, and compensation cleanly in QuickBooks",
    "Monitor revenue against the no-tax-due threshold",
    "Reconcile and close the books ahead of the May franchise-tax deadline",
    "Keep sales tax configured and reconciled in the same file",
    "Clean up a behind or miscategorized file before the CPA handoff",
    "Hand reconciled, computation-ready figures to your CPA",
  ],
  scopeDont: [
    "Compute the franchise-tax margin or choose the deduction method",
    "Determine whether you owe franchise tax",
    "File the franchise-tax report or the Public Information report",
    "Represent you before the Texas Comptroller or provide tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews whether your books track the revenue, COGS, and compensation figures the margin tax needs, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee for cleanup and ongoing reconciliation." },
    { phase: "Step 3", title: "Reconcile the margin figures", body: "We get revenue, COGS, and compensation clean and distinct, and monitor the threshold." },
    { phase: "Step 4", title: "Hand off to your CPA", body: "Ahead of the May deadline we hand reconciled, computation-ready figures to your CPA, who computes the margin and files." },
  ],
  advisoryBody: [
    "The franchise tax trips Texas businesses up not because it&rsquo;s hard to file but because the books behind it are messy &mdash; revenue overstated, COGS and compensation blended, the threshold crossed without anyone noticing. Every one of those is a bookkeeping problem, and every one is what a Certified ProAdvisor keeps clean so your CPA&rsquo;s computation is accurate.",
    "We hold the line clearly: we keep the figures reconciled, your CPA computes the margin, chooses the deduction method, and files with the Comptroller. Thresholds and rates change &mdash; we flag movement, your CPA confirms the current numbers.",
  ],
  faq: [
    { q: "What is the Texas franchise (margin) tax?", a: "It&rsquo;s a tax on an entity&rsquo;s &ldquo;margin&rdquo; &mdash; revenue minus the greater of cost of goods sold, compensation, 30% of revenue, or a standard deduction &mdash; rather than on net income. It&rsquo;s administered by the Texas Comptroller and applies to most taxable entities (LLCs, corporations, partnerships) doing business in Texas. The exact rates, thresholds, and deduction methods change, so confirm current figures with the Comptroller and your CPA." },
    { q: "Is the franchise tax the same as a state income tax?", a: "No. Texas has no state personal or corporate income tax. The franchise tax is a separate margin-based tax filed with the Comptroller, not the IRS. That&rsquo;s why &ldquo;no income tax&rdquo; doesn&rsquo;t mean &ldquo;no state tax obligation&rdquo; for a Texas business." },
    { q: "Do I owe franchise tax if my revenue is low?", a: "Entities under the Comptroller&rsquo;s annual revenue threshold generally owe no franchise tax, but most still have to file a report (often a No Tax Due-style report plus a Public Information or Ownership report). Whether you owe, and how much, is a determination for your CPA; we keep the revenue figure tracked so the threshold is never crossed unnoticed." },
    { q: "What does TechBrot do for the franchise tax?", a: "We keep the figures the margin tax is computed from &mdash; revenue, cost of goods sold, and compensation &mdash; reconciled and distinct in your QuickBooks file, monitor revenue against the threshold, and close the books ahead of the deadline, so your CPA can compute the margin and file accurately. We do not compute the liability, choose the deduction method, or file the report." },
    { q: "When is the Texas franchise tax due?", a: "It&rsquo;s generally due in May for the prior year, filed with the Texas Comptroller. We reconcile and close the books ahead of that so your CPA isn&rsquo;t reconstructing a year of records under deadline. Confirm the exact due date and any extension with the Comptroller and your CPA." },
    { q: "Do you compute or file my franchise tax?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA, who computes the margin, chooses the deduction method, and files with the Comptroller. We do not compute the liability, file the report, or represent clients, and we are not affiliated with Intuit Inc. or the Texas Comptroller." },
  ],
  reviewProse: TX_REVIEW_PROSE,
  reviewCreds: TX_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/franchise-tax-help/",
    name: "Texas Franchise (Margin) Tax Help",
    description: "Texas franchise (margin) tax tracked in your QuickBooks file — revenue, COGS, and compensation reconciled and the no-tax-due threshold monitored so your CPA can compute the margin and file. Independent firm; does not compute the liability or file the report.",
    serviceName: "Texas Franchise (Margin) Tax Bookkeeping Support",
    serviceType: "Franchise-tax bookkeeping support",
    serviceDesc: "Tracking and reconciliation of the revenue, cost of goods sold, and compensation figures the Texas franchise (margin) tax is computed from, revenue-threshold monitoring, pre-deadline close, and cleanup for Texas businesses across all 254 counties. Independent Certified QuickBooks ProAdvisor firm; does not compute the franchise-tax margin, choose deduction methods, file the report, or represent clients before the Texas Comptroller.",
    areaServed: [{ type: "State", name: "Texas", sameAs: "https://en.wikipedia.org/wiki/Texas" }],
    audienceType: "Texas LLCs, corporations, and partnerships subject to the franchise (margin) tax across all 254 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

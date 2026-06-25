/* /find-an-accountant/illinois/quickbooks-reconciliation/ — IL SERVICE CHILD (QB spoke).
 * t-bofu · partials/state-service-body.njk. IL-localized from the RECONCILIATION angle.
 * Facts band = the real IL stack re-angled to reconciliation: Illinois net income tied so the
 * PPRT is supportable; Chicago's 10.25% combined sales-tax liability tied so the ST-1 ties;
 * Chicago's 15% lease/"cloud" tax reconciled SEPARATELY from sales tax. HONESTY: deferred to the
 * Illinois Dept of Revenue (IDOR) + Chicago Dept of Finance + CPA; founder-name-zero; not Intuit;
 * does not file IL returns, elect, or represent. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "Illinois net income reconciled so the PPRT is supportable", body: "Reconciliation isn&rsquo;t just bank accounts &mdash; Illinois imposes an entity-level <strong>Personal Property Replacement Tax</strong> on net income (<strong>2.5% C-corp, 1.5% S-corps, partnerships, and trusts</strong>), and even pass-throughs owe it at the entity level. We reconcile revenue and expense accounts every month so the Illinois net income behind the PPRT is supportable; your CPA computes and files." },
  { fig: "10.25%", title: "Chicago sales-tax liability tied to the ST-1", body: "Reconciliation has to tie the sales-tax liability account to what the return reports by jurisdiction. Illinois sales tax runs <strong>6.25% state</strong> up to <strong>10.25% in Chicago</strong> (Cook County + home-rule), destination-based &mdash; so we reconcile the liability account to the combined rate carried in QuickBooks, so the <strong>ST-1</strong> ties and nothing is over- or under-remitted." },
  { fig: "Cloud tax", title: "Chicago&rsquo;s 15% cloud tax reconciled separately", body: "Illinois doesn&rsquo;t tax SaaS &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. Because it&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax, we reconcile its liability account <strong>separately</strong> from sales tax so the Chicago lease-tax liability holds on its own." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot provides bookkeeping and QuickBooks reconciliation and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-reconciliation/",
  slug: "il-svc-qbrecon",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Reconciliation · TechBrot",
  description: "QuickBooks reconciliation for Illinois businesses by a Certified ProAdvisor — every account reconciled monthly, the 6.25%–10.25% sales-tax liability tied to the ST-1 by jurisdiction, Illinois net income reconciled for the PPRT, Chicago's 15% cloud tax reconciled separately. Fixed-fee, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Reconciliation" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; QuickBooks Reconciliation",
    heading: "Illinois QuickBooks reconciliation that actually ties.",
    subheading: "A Certified QuickBooks ProAdvisor reconciles every account every month &mdash; bank, credit-card, loan, and the 6.25%&ndash;10.25% sales-tax liability tied to the ST-1 by jurisdiction &mdash; so the books hold, Illinois net income behind the PPRT is supportable, and Chicago&rsquo;s 15% cloud tax reconciles separately. Fixed-fee, all 102 counties. We reconcile; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks reconciliation for Illinois businesses</strong> &mdash; a Certified ProAdvisor reconciles bank, credit-card, and loan accounts every month and ties the 6.25%&ndash;10.25% sales-tax liability to the ST-1 by jurisdiction, so the books hold, Illinois net income behind the PPRT is supportable, and Chicago&rsquo;s 15% cloud tax reconciles separately. Fixed-fee, all 102 counties. The full Illinois reconciliation summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the flat 4.95% income tax; the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Want an Illinois file that reconciles every month?",
    lede: "Book a free discovery call. We&rsquo;ll review where reconciliation stands and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks reconciliation, in five questions.",
    valueEyebrow: "What Illinois reconciliation covers",
    valueHeading: "Every account tied, the tax-liability accounts matched.",
    valueLede: "Reconciliation in Illinois is more than bank accounts &mdash; the sales-tax, PPRT, and Chicago cloud-tax accounts all have to tie to what gets reported.",
    factsEyebrow: "Why reconciliation matters more in Illinois",
    factsHeading: "Three reasons Illinois reconciliation can&rsquo;t be skipped.",
    factsLede: "Illinois layers an entity-level tax and Chicago-specific taxes on top of the basics &mdash; reconciliation is what makes each of them tie.",
    faqHeading: "Illinois QuickBooks reconciliation questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks reconciliation for Illinois businesses</strong> &mdash; a Certified QuickBooks ProAdvisor reconciles every account every month: bank, credit-card, loan, and clearing accounts, plus the <strong>6.25%&ndash;10.25% sales-tax liability</strong> tied to what the <strong>ST-1</strong> reports by jurisdiction (10.25% in Chicago). Reconciled books are what make <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Illinois net income</a> behind the <strong>PPRT</strong> (2.5% C-corp / 1.5% pass-through) supportable, and Chicago&rsquo;s <strong>15% lease/&ldquo;cloud&rdquo; tax</strong> is reconciled separately from sales tax because it&rsquo;s a City of Chicago obligation, not a state one. Issues surface immediately instead of at year-end. Fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc.; we reconcile, your CPA files.",
  aiSummary: [
    { q: "What does Illinois QuickBooks reconciliation include?", a: "<strong>Bank, credit-card, loan, and clearing accounts reconciled every month, plus the 6.25%&ndash;10.25% sales-tax liability tied to the ST-1 by jurisdiction, Illinois net income reconciled to support the PPRT, and Chicago&rsquo;s 15% cloud tax reconciled separately</strong> &mdash; so the books hold. We reconcile; your CPA files." },
    { q: "Why is reconciliation important in Illinois specifically?", a: "Because Illinois layers obligations on the books: the <strong>sales-tax liability</strong> has to tie to the ST-1 by jurisdiction (10.25% in Chicago), Illinois <strong>net income</strong> behind the entity-level PPRT has to be supportable, and Chicago&rsquo;s <strong>15% cloud tax</strong> has to reconcile separately as a City of Chicago liability. Unreconciled books make all of them wrong." },
    { q: "How often should accounts be reconciled?", a: "Monthly. Reconciling every month surfaces errors immediately and keeps the sales-tax and PPRT positions from catching you reconstructing a year of records under pressure." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly &mdash; scoped to the number of accounts and transaction volume. Exact fee in writing within 3 business days of a free file review." },
    { q: "Can you reconcile months of backlog?", a: "Yes &mdash; if reconciliation has lapsed, we catch it up as part of a <a href=\"/find-an-accountant/illinois/quickbooks-cleanup/\">cleanup</a>, then keep it current every month." },
  ],
  value: [
    { num: "01", title: "Bank &amp; credit-card accounts", body: "Every bank and credit-card account reconciled monthly to statement, with discrepancies investigated and resolved.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Sales-tax liability tied to the ST-1", body: "The 6.25%&ndash;10.25% sales-tax liability account reconciled to what the ST-1 reports by jurisdiction (10.25% in Chicago) &mdash; nothing over- or under-remitted.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "Loan &amp; clearing accounts", body: "Loan balances tied to lender statements and clearing accounts zeroed so nothing hides in suspense.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "04", title: "PPRT figures supportable", body: "Revenue and expense accounts reconciled so the Illinois net income behind the PPRT (2.5% C-corp / 1.5% pass-through) holds for your CPA.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "05", title: "Chicago cloud tax reconciled separately", body: "Chicago&rsquo;s 15% lease/SaaS tax liability reconciled separately from sales tax, so the City of Chicago obligation ties on its own.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "06", title: "CPA-ready every month", body: "Reconciled statements handed to your CPA monthly &mdash; no year-end scramble, no surprises.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Reconcile bank, credit-card, loan, and clearing accounts every month",
    "Tie the 6.25%&ndash;10.25% sales-tax liability to the ST-1 by jurisdiction (10.25% in Chicago)",
    "Reconcile Illinois net income so the PPRT (2.5% C-corp / 1.5% pass-through) is supportable",
    "Reconcile Chicago&rsquo;s 15% lease/cloud tax liability separately from sales tax",
    "Investigate and resolve discrepancies and miscategorizations",
    "Deliver reconciled, CPA-ready statements monthly",
  ],
  scopeDont: [
    "File the Illinois sales tax (ST-1), income tax, or the PPRT",
    "File or elect the PTE, or file Chicago city taxes (lease/cloud)",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews where reconciliation stands and what&rsquo;s out of balance &mdash; sales-tax jurisdictions, PPRT support, any Chicago cloud-tax exposure." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days, by number of accounts and volume." },
    { phase: "Step 3", title: "Reconcile &amp; resolve", body: "We reconcile every account, tie the sales-tax liability to the ST-1 by jurisdiction, reconcile Illinois net income for the PPRT, separate the Chicago cloud-tax liability, and resolve discrepancies." },
    { phase: "Step 4", title: "Monthly cadence", body: "Every account reconciled every month and CPA-ready statements delivered &mdash; no year-end scramble." },
  ],
  advisoryBody: [
    "Reconciliation is the quiet backbone of Illinois compliance: the sales-tax ST-1, the entity-level PPRT, and Chicago&rsquo;s 15% cloud tax are all only as accurate as the reconciled accounts behind them &mdash; and because even pass-throughs owe the PPRT and Chicago taxes SaaS the state doesn&rsquo;t, those liability accounts have to tie on their own. Skip reconciliation and every one of those positions is built on numbers that don&rsquo;t hold.",
    "We reconcile every month so issues surface immediately, and extend &mdash; when you&rsquo;re ready &mdash; into full <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> and <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a>.",
  ],
  faq: [
    { q: "What does Illinois QuickBooks reconciliation include?", a: "A Certified ProAdvisor reconciles bank, credit-card, loan, and clearing accounts every month and ties the 6.25%&ndash;10.25% sales-tax liability to what the ST-1 reports by jurisdiction (10.25% in Chicago), reconciles the Illinois net income behind the PPRT so it&rsquo;s supportable, reconciles Chicago&rsquo;s 15% cloud tax separately, and resolves discrepancies &mdash; so the books hold. We reconcile; your CPA files." },
    { q: "Why does reconciliation matter more in Illinois?", a: "Because Illinois layers obligations directly on the books. The sales-tax ST-1 has to tie to the liability account by jurisdiction, the entity-level Personal Property Replacement Tax is computed from Illinois net income that has to be supportable, and Chicago&rsquo;s 15% lease/cloud tax has to reconcile separately as a City of Chicago liability. Unreconciled books make all three inaccurate." },
    { q: "How does reconciliation support the PPRT if you don&rsquo;t file it?", a: "The Personal Property Replacement Tax is an Illinois entity-level tax on net income &mdash; 2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts &mdash; and even pass-throughs owe it at the entity level. It&rsquo;s computed from Illinois net income, so reconciled revenue and expense accounts are what make that figure supportable. We reconcile the accounts; your CPA computes and files the PPRT." },
    { q: "My sales-tax liability never matches my ST-1. Can you fix that?", a: "Yes &mdash; that mismatch usually means sales tax was set to a single rate instead of the correct combined rate by jurisdiction (10.25% in Chicago, lower elsewhere), or the liability account was never reconciled to the filing. We tie the liability to the ST-1 by jurisdiction so nothing is over- or under-remitted, and correct prior periods as part of a cleanup if needed." },
    { q: "How is Chicago&rsquo;s cloud tax reconciled, and why separately?", a: "Chicago&rsquo;s Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;) rose to 15% in January 2026 and applies to SaaS, cloud, and equipment leases used in Chicago, even though Illinois doesn&rsquo;t tax SaaS at the state level. Because it&rsquo;s a City of Chicago tax administered by the Department of Finance &mdash; not a state sales tax &mdash; we reconcile its liability account separately so the Chicago obligation ties on its own and isn&rsquo;t commingled with the ST-1 sales-tax liability." },
    { q: "How much does Illinois QuickBooks reconciliation cost?", a: "Fixed-fee against a written scope, never hourly &mdash; scoped to the number of accounts and transaction volume. If there&rsquo;s a backlog to catch up, that&rsquo;s scoped as a one-time cleanup. You get the exact fee in writing within 3 business days of a free file review." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we reconcile and keep the books CPA-ready and coordinate with your CPA, who files the sales tax (ST-1), the PPRT, and any PTE election, and handles Chicago city taxes (lease/cloud). We do not file returns, elect, or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-reconciliation/",
    name: "Illinois QuickBooks Reconciliation",
    description: "QuickBooks reconciliation for Illinois businesses by a Certified ProAdvisor — every account reconciled monthly, the 6.25%–10.25% sales-tax liability tied to the ST-1 by jurisdiction, Illinois net income reconciled so the PPRT holds, and Chicago's 15% cloud tax reconciled separately. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks Reconciliation Services",
    serviceType: "Account reconciliation (bookkeeping)",
    serviceDesc: "Monthly reconciliation of bank, credit-card, loan, and clearing accounts and the 6.25%–10.25% sales-tax liability for Illinois businesses, tying the liability to the Illinois ST-1 return by jurisdiction (10.25% in Chicago), reconciling Illinois net income so the Personal Property Replacement Tax is supportable, and reconciling Chicago's 15% lease/cloud tax separately. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses needing monthly account reconciliation across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

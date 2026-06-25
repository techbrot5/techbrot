/* /find-an-accountant/illinois/quickbooks-error-fixes/ — IL SERVICE CHILD (QB spoke).
 * t-bofu · partials/state-service-body.njk. IL-localized error-fixes angle. Facts band = the real IL
 * stack re-angled as the BOOK/SETUP ERROR each one causes (PPRT net income mis-tracked so it isn't
 * supportable; Chicago 10.25% sales tax set as a single statewide rate that won't tie to the ST-1;
 * Chicago 15% lease/"cloud" tax commingled with sales tax). HONESTY: IDOR + Chicago Dept of Finance +
 * CPA; founder-name-zero; not Intuit; does not file IL returns. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "Net income mis-tracked so the PPRT isn&rsquo;t supportable", body: "Illinois imposes an entity-level <strong>Personal Property Replacement Tax</strong> on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong> &mdash; and even pass-throughs owe it. The error we fix: a file where categorization and intercompany postings leave Illinois net income overstated or unsupportable, so the PPRT can&rsquo;t be computed cleanly. We correct the mapping and track net income properly; your CPA computes and files." },
  { fig: "10.25%", title: "Sales tax set to one statewide rate won&rsquo;t tie to the ST-1", body: "The Illinois error we fix most: a sales-tax liability that won&rsquo;t reconcile to the <strong>ST-1</strong> because QuickBooks was set to a single flat rate instead of the destination-based combined rate by jurisdiction &mdash; <strong>6.25% state up to 10.25% in Chicago</strong> (Cook County + home-rule). We trace it, set the correct combined rate by jurisdiction, and reconcile the liability back." },
  { fig: "Cloud tax", title: "Chicago&rsquo;s 15% cloud tax commingled with sales tax", body: "Chicago&rsquo;s Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;) is <strong>15% as of January 2026</strong> and hits SaaS, cloud, and equipment leases used in Chicago even though Illinois doesn&rsquo;t tax SaaS at the state level. The error: providers book it into the sales-tax liability, so neither figure ties. We separate the Chicago lease-tax liability from sales tax so each reconciles on its own. It&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot fixes and maintains QuickBooks files and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-error-fixes/",
  slug: "il-svc-qberrors",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Error Fixes · TechBrot",
  description: "QuickBooks error fixes for Illinois businesses by a Certified ProAdvisor — a sales-tax liability that won't tie to the ST-1, an out-of-balance balance sheet, duplicate entries, Chicago's 15% cloud tax commingled with sales tax. Root-cause fixes, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Error Fixes" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; QuickBooks Error Fixes",
    heading: "Illinois QuickBooks errors, traced to the root and fixed.",
    subheading: "A Certified QuickBooks ProAdvisor diagnoses and fixes what&rsquo;s broken in your Illinois file &mdash; a sales-tax liability that won&rsquo;t tie to the ST-1 (usually a single statewide rate instead of the combined rate by jurisdiction), an out-of-balance balance sheet, duplicate entries, Illinois net income mis-tracked so the PPRT isn&rsquo;t supportable, or Chicago&rsquo;s 15% cloud tax commingled with sales tax. Root-cause fixes, not symptom masking. All 102 counties.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Root-cause fixes &middot; not symptom masking"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks error fixes for Illinois businesses</strong> &mdash; a Certified ProAdvisor diagnoses and fixes a sales-tax liability that won&rsquo;t tie to the ST-1 (set to a single statewide rate instead of the combined rate by jurisdiction, 10.25% in Chicago), an out-of-balance balance sheet, duplicate or negative entries, Illinois net income mis-tracked so the PPRT isn&rsquo;t supportable, and Chicago&rsquo;s 15% cloud tax commingled with sales tax, in your own file. Root-cause fixes, all 102 counties. The full Illinois error-fix summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Something broken in your Illinois QuickBooks file?",
    lede: "Book a free discovery call. We&rsquo;ll diagnose the error, tell you the root cause, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks error fixes, in five questions.",
    valueEyebrow: "What Illinois error fixes cover",
    valueHeading: "Diagnosed at the root, fixed for good.",
    valueLede: "We trace each error to its cause &mdash; especially the Illinois-specific ones &mdash; and fix it so it stays fixed.",
    factsEyebrow: "The Illinois errors we fix most",
    factsHeading: "Three Illinois QuickBooks errors we see again and again.",
    factsLede: "Illinois files break in recognizable ways &mdash; these three trace back to the state&rsquo;s entity-level tax and Chicago&rsquo;s layered taxes, and all three have a real fix.",
    faqHeading: "Illinois QuickBooks error-fix questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks error fixes for Illinois businesses</strong> &mdash; a Certified QuickBooks ProAdvisor diagnoses and fixes what&rsquo;s broken: a <strong>sales-tax liability that won&rsquo;t tie</strong> to the <a href=\"/find-an-accountant/illinois/sales-tax-help/\">ST-1</a> (usually a single statewide rate instead of the destination-based combined rate, up to 10.25% in Chicago), an <strong>out-of-balance balance sheet</strong>, duplicate or negative entries, Illinois <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">net income mis-tracked</a> so the PPRT isn&rsquo;t supportable, and Chicago&rsquo;s <strong>15% cloud tax</strong> commingled with sales tax so neither ties. We trace each to the root cause and fix it &mdash; never just paper over the number &mdash; in your own QuickBooks file. Fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc.; we fix it, your CPA files.",
  aiSummary: [
    { q: "What QuickBooks errors do you fix for Illinois businesses?", a: "<strong>A sales-tax liability that won&rsquo;t tie to the ST-1, an out-of-balance balance sheet, duplicate or negative entries, Illinois net income mis-tracked for the PPRT, and Chicago&rsquo;s cloud tax commingled with sales tax</strong> &mdash; traced to root cause and fixed in your own file. We fix it; your CPA files." },
    { q: "Why won&rsquo;t my sales-tax liability match my ST-1?", a: "Usually because sales tax was set to a single statewide rate instead of the <strong>destination-based combined rate by jurisdiction</strong> (6.25% state up to 10.25% in Chicago), or items were mapped to the wrong taxability. We trace it, correct the setup to the right combined rate, and reconcile the liability back to the ST-1." },
    { q: "Do you fix the cause or just the number?", a: "The cause. Masking a symptom &mdash; forcing a balance with a journal entry &mdash; just hides the problem until next period. We diagnose the <strong>root cause</strong> and fix it so it stays fixed." },
    { q: "What does an error fix cost?", a: "Fixed-fee against a written scope once we&rsquo;ve diagnosed it &mdash; scoped to the depth of the problem. A bigger underlying mess may be scoped as a <a href=\"/find-an-accountant/illinois/quickbooks-cleanup/\">cleanup</a>. Exact fee in writing within 3 business days." },
    { q: "How fast can you fix it?", a: "Many single errors are diagnosed and fixed within days of the file review. Deeper issues are scoped with a clear timeline up front." },
  ],
  value: [
    { num: "01", title: "Sales-tax liability won&rsquo;t tie", body: "Traced to a single statewide rate or bad item mapping, corrected to the combined rate by jurisdiction (10.25% in Chicago), and reconciled back to the ST-1.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "02", title: "Out-of-balance balance sheet", body: "Negative balances and a balance sheet that won&rsquo;t reconcile traced to the root posting and corrected &mdash; not forced.", href: "/find-an-accountant/illinois/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "03", title: "PPRT net income mis-tracked", body: "Categorization and postings that leave Illinois net income unsupportable, found and corrected so the PPRT can be computed cleanly.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "04", title: "Chicago cloud tax commingled", body: "Chicago&rsquo;s 15% lease/cloud tax separated from the sales-tax liability so each reconciles on its own.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "Deeper mess? Scoped as cleanup", body: "If the error is a symptom of a broken file, we scope a full cleanup rather than a band-aid.", href: "/find-an-accountant/illinois/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "06", title: "Stays fixed", body: "Move into monthly bookkeeping so the same error doesn&rsquo;t come back next quarter.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Diagnose why the sales-tax liability won't tie to the ST-1 and correct it by jurisdiction",
    "Trace an out-of-balance balance sheet to its root posting and fix it",
    "Correct categorization so Illinois net income is supportable for the PPRT",
    "Separate Chicago's lease/cloud tax from the sales-tax liability so each reconciles",
    "Clean up duplicate, negative, and orphaned transactions",
    "Scope a full cleanup when the error is a symptom of a broken file, and fix root causes, never mask symptoms",
  ],
  scopeDont: [
    "File the Illinois sales tax (ST-1), income tax, or the PPRT, or make the PTE election",
    "File Chicago city taxes (lease/cloud, amusement)",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews the file and diagnoses the error and its root cause." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; or a cleanup scope if the mess runs deeper." },
    { phase: "Step 3", title: "Root-cause fix", body: "We correct the cause &mdash; sales-tax setup by jurisdiction, PPRT net-income mapping, Chicago cloud-tax separation, mis-postings, duplicates &mdash; and reconcile back to clean." },
    { phase: "Step 4", title: "Keep it fixed", body: "Optional monthly bookkeeping so the same error doesn&rsquo;t recur &mdash; the file stays clean." },
  ],
  advisoryBody: [
    "A QuickBooks error in an Illinois file is rarely just a number &mdash; a sales-tax liability that won&rsquo;t tie to the ST-1, net income that won&rsquo;t support the PPRT, or a Chicago cloud tax commingled with sales tax all have a root cause, and forcing the number with a journal entry only hides it until next period. We diagnose the cause and fix it properly.",
    "When an error turns out to be the tip of a broken file, we say so and scope a <a href=\"/find-an-accountant/illinois/quickbooks-cleanup/\">cleanup</a> rather than a band-aid &mdash; then keep it clean in <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a>.",
  ],
  faq: [
    { q: "What QuickBooks errors do you fix for Illinois businesses?", a: "A Certified ProAdvisor diagnoses and fixes a sales-tax liability that won&rsquo;t tie to the ST-1, an out-of-balance balance sheet, negative balances, duplicate or orphaned entries, Illinois net income mis-tracked so the PPRT isn&rsquo;t supportable, and Chicago&rsquo;s cloud tax commingled with sales tax &mdash; each traced to its root cause and fixed in your own file. We fix it; your CPA files." },
    { q: "Why won't my Illinois sales-tax liability match the ST-1?", a: "Almost always because sales tax was set to a single statewide rate instead of the destination-based combined rate by jurisdiction &mdash; 6.25% state up to 10.25% in Chicago (Cook County plus home-rule add-ons) &mdash; or products and services were mapped to the wrong taxability. We trace the mismatch, correct the setup so QuickBooks carries the right combined rate by location, and reconcile the liability account back to what the ST-1 reports." },
    { q: "How does a QuickBooks error affect the Illinois PPRT?", a: "The Personal Property Replacement Tax is an Illinois entity-level tax on net income &mdash; 2.5% for C-corps and 1.5% for S-corps, partnerships, and trusts, and even pass-throughs owe it. When categorization, intercompany postings, or misclassified expenses leave Illinois net income overstated or unsupportable, the PPRT can&rsquo;t be computed cleanly. We correct the mapping so net income is supportable; your CPA computes and files. We do not compute or file the PPRT." },
    { q: "My Chicago cloud tax and sales tax don&rsquo;t reconcile &mdash; can you fix that?", a: "Yes. Chicago&rsquo;s Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;) rose to 15% on January 1, 2026, and applies to SaaS, cloud, and equipment leases used in Chicago even though Illinois doesn&rsquo;t tax SaaS at the state level. The common error is booking it into the sales-tax liability, so neither figure ties. We separate the Chicago lease-tax liability from sales tax in QuickBooks so each reconciles on its own &mdash; it&rsquo;s a City of Chicago tax administered by the Department of Finance, not a state tax." },
    { q: "How quickly can you fix my QuickBooks error?", a: "Many single errors are diagnosed and fixed within days of the free file review. Deeper or multi-period issues are scoped with a clear timeline up front, so you know what to expect before we start." },
    { q: "Do you fix the root cause or just force the numbers?", a: "The root cause. Forcing a balance with an adjusting journal entry just hides the problem until it resurfaces next period &mdash; and can make the sales-tax and PPRT figures wrong. We diagnose why the error happened and fix it at the source so it stays fixed. This is a firm rule for us." },
    { q: "How much does a QuickBooks error fix cost?", a: "Fixed-fee against a written scope once we&rsquo;ve diagnosed the error &mdash; scoped to its depth. A single isolated error is a small fixed fee; if it turns out to be a symptom of a broader broken file, we scope it as a cleanup ($1,500&ndash;$15,000+) instead and tell you so. Exact fee in writing within 3 business days." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we fix the file and keep the books CPA-ready and coordinate with your CPA, who files the Illinois sales tax (ST-1), income tax, the PPRT, and any PTE election, and handles Chicago city taxes. We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-error-fixes/",
    name: "Illinois QuickBooks Error Fixes",
    description: "QuickBooks error fixes for Illinois businesses by a Certified ProAdvisor — a sales-tax liability that won't tie to the ST-1, an out-of-balance balance sheet, duplicate entries, PPRT net income mis-tracked, and Chicago's 15% cloud tax commingled with sales tax, traced to root cause and fixed. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks Error Diagnosis & Fix Services",
    serviceType: "QuickBooks error diagnosis and correction",
    serviceDesc: "Diagnosis and root-cause correction of QuickBooks errors for Illinois businesses — a sales-tax liability that won't tie to the ST-1, an out-of-balance balance sheet, duplicate and orphaned entries, Illinois net income mis-tracked for the Personal Property Replacement Tax, and Chicago's lease/cloud tax commingled with sales tax, fixed in the client's own file. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois or Chicago tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses with broken or out-of-balance QuickBooks files across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

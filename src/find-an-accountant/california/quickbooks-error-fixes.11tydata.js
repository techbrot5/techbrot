/* /find-an-accountant/california/quickbooks-error-fixes/ — CA SERVICE CHILD (QB spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. GENUINELY CA-localized — both
 * technical QuickBooks errors AND California file-config errors. HONESTY: deferred to
 * FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. We make sure error fixes don&rsquo;t leave the accrual broken; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and district add-ons push the combined rate past 10.25%. A common &ldquo;error&rdquo; isn&rsquo;t a code at all &mdash; it&rsquo;s sales tax set to a flat rate. We fix it to the correct rate by location." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. Payroll-item and 1099 errors often hide misclassification; we fix the items and surface the exposure. EDD disputes go to your CPA." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/quickbooks-error-fixes/",
  slug: "ca-svc-qberrors",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Error Fixes · TechBrot",
  description: "QuickBooks error fixes for California businesses — technical error codes plus California file-config errors (flat-rate sales tax, payroll items, reconciliation). Certified ProAdvisor, fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Error Fixes" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; QuickBooks Error Fixes",
    heading: "California QuickBooks error fixes &mdash; the code and the cause.",
    subheading: "A Certified QuickBooks ProAdvisor fixes what&rsquo;s breaking your California file &mdash; technical error codes (H202, 6000-series, payroll errors) and the California-specific &ldquo;errors&rdquo; that aren&rsquo;t codes at all: flat-rate district sales tax, broken payroll items, reconciliation that won&rsquo;t tie. Fixed-fee, all 58 counties.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks error fixes for California businesses</strong> &mdash; a Certified ProAdvisor resolves both technical QuickBooks error codes and the California-specific configuration errors (flat-rate district sales tax, broken payroll items, reconciliation that won&rsquo;t tie) that quietly corrupt the books. The full California QuickBooks error-fixes summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "QuickBooks throwing errors? Let&rsquo;s diagnose it.",
    lede: "A Certified ProAdvisor reviews the error and the file, tells you honestly what it needs, and scopes the fix in writing within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=BOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks error fixes, in five questions.",
    valueEyebrow: "What we fix for California businesses",
    valueHeading: "Two kinds of California QuickBooks errors.",
    valueLede: "Some are technical codes; some are California-config errors that throw no code at all but quietly break the books.",
    factsEyebrow: "California tax realities behind the &lsquo;errors&rsquo;",
    factsHeading: "Three California facts behind the books being wrong.",
    factsLede: "In California, the most damaging &lsquo;errors&rsquo; aren&rsquo;t codes &mdash; they&rsquo;re these three configuration mistakes.",
    faqHeading: "California QuickBooks error-fix questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks error fixes for California businesses</strong> &mdash; a Certified QuickBooks ProAdvisor resolves two kinds of problem: <strong>technical error codes</strong> (H202 and multi-user issues, the 6000-series, payroll errors like PS038, install and update errors) and the California-specific <strong>configuration errors</strong> that throw no code but corrupt the books &mdash; <strong>flat-rate district sales tax</strong>, broken payroll items missing CA SDI, and reconciliation that won&rsquo;t tie. For the technical codes we diagnose the root cause; see the <a href=\"/quickbooks/help/error-codes/\">QuickBooks error-codes reference</a>. Fixed-fee against a written scope, in your own file across all 58 counties. Independent firm &mdash; not affiliated with Intuit Inc.; we fix the file, your CPA files.",
  aiSummary: [
    { q: "What QuickBooks errors do you fix for California businesses?", a: "Both kinds: <strong>technical error codes</strong> (H202 multi-user, the 6000-series file-access/damage errors, payroll errors such as PS038, install/update errors) and <strong>California configuration errors</strong> &mdash; flat-rate district sales tax, payroll items missing CA SDI, reconciliation that won&rsquo;t tie. A Certified ProAdvisor diagnoses the root cause, not just the symptom." },
    { q: "Is a wrong sales-tax setup an &lsquo;error&rsquo;?", a: "It&rsquo;s the most damaging California &lsquo;error&rsquo; there is &mdash; and it throws <strong>no code</strong>. A file set to a flat statewide rate instead of CDTFA district rates by location quietly mis-collects until a notice arrives. We fix it to the correct rate by location." },
    { q: "Can you fix it remotely?", a: "Yes &mdash; almost always. We diagnose in your own QuickBooks Online or hosted Desktop file remotely, usually within a day for a focused error, and scope the fix in writing." },
    { q: "What does an error fix cost?", a: "Fixed-fee against a written scope by severity &mdash; a focused single-error fix is well-bounded; a file-damage or multi-issue case is scoped after diagnosis. Exact fee in writing within 3 business days." },
    { q: "When is it really a cleanup?", a: "When the &lsquo;errors&rsquo; are symptoms of a file that&rsquo;s structurally wrong, we&rsquo;ll say so and scope a <a href=\"/find-an-accountant/california/quickbooks-cleanup/\">cleanup</a> instead of patching symptoms." },
  ],
  value: [
    { num: "01", title: "Technical error codes", body: "H202 and multi-user issues, the 6000-series file-access and damage errors, install and update errors &mdash; diagnosed to the root cause.", href: "/quickbooks/help/error-codes/", cta: "Error-codes reference &rarr;" },
    { num: "02", title: "Payroll errors", body: "Payroll errors (e.g. PS038) and California payroll items missing SDI or PIT setup &mdash; cleared before a payroll deadline.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "03", title: "Flat-rate sales tax (no code)", body: "The most damaging California &lsquo;error&rsquo; &mdash; sales tax set to a flat rate &mdash; rebuilt to the correct CDTFA rate by location.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "04", title: "Reconciliation that won&rsquo;t tie", body: "Beginning-balance and reconciliation discrepancies tracked down and fixed so the account ties again.", href: "/find-an-accountant/california/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "05", title: "File damage &amp; data recovery", body: "When a file is genuinely damaged, professional repair beyond Tool Hub &mdash; or clean data extraction when repair isn&rsquo;t viable.", href: "/quickbooks/help/", cta: "QuickBooks help &rarr;" },
    { num: "06", title: "Honest triage", body: "If you can fix it yourself in five minutes, we&rsquo;ll tell you. If it&rsquo;s really a cleanup, we&rsquo;ll scope that instead.", href: "/find-an-accountant/california/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Diagnose technical QuickBooks error codes to the root cause",
    "Fix California config errors: flat-rate sales tax, payroll items, reconciliation",
    "Clear payroll errors before deadlines and repair file damage where viable",
    "Tell you honestly when it&rsquo;s self-fixable or really a cleanup",
    "Work remotely in your own QuickBooks file",
    "Scope the fix in writing before any work begins",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free diagnostic", body: "A Certified ProAdvisor reviews the error and the file remotely &mdash; usually within a day &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee &mdash; or an honest &ldquo;you can fix this yourself&rdquo; if that&rsquo;s the truth." },
    { phase: "Step 3", title: "Fix the cause", body: "We resolve the code or the California config error at the root, not just the surface symptom." },
    { phase: "Step 4", title: "Verify &amp; prevent", body: "We confirm the fix holds and flag any underlying issues &mdash; scoping a cleanup only if it&rsquo;s genuinely needed." },
  ],
  advisoryBody: [
    "Most &lsquo;QuickBooks errors&rsquo; in California aren&rsquo;t the error code on the screen &mdash; they&rsquo;re a sales-tax setup or payroll item that&rsquo;s quietly wrong and throws nothing. Fixing the cause, and being honest when it&rsquo;s self-fixable, is the difference between a patch and a fix.",
    "When the errors are symptoms of a deeper mess, we scope a <a href=\"/find-an-accountant/california/quickbooks-cleanup/\">cleanup</a>; when the file&rsquo;s sound, we fix the code and leave it. Either way, the same named ProAdvisor can keep it clean afterward.",
  ],
  faq: [
    { q: "What QuickBooks errors do you fix for California businesses?", a: "Both technical error codes &mdash; H202 and multi-user issues, the 6000-series file-access and damage errors, payroll errors such as PS038, and install or update errors &mdash; and California-specific configuration errors that throw no code: flat-rate district sales tax, payroll items missing CA SDI, and reconciliation that won&rsquo;t tie. We diagnose the root cause rather than patching the symptom. For the technical codes, see our QuickBooks error-codes reference." },
    { q: "Is a wrong California sales-tax setup really an error?", a: "It&rsquo;s the most damaging California &lsquo;error&rsquo; there is, and it throws no code at all. A file set to a flat statewide rate instead of CDTFA district rates by customer location quietly under- or over-collects until a notice arrives. We rebuild the sales-tax setup to the correct combined rate by location &mdash; it&rsquo;s a far bigger risk than most of the codes." },
    { q: "Can you fix QuickBooks errors remotely?", a: "Yes &mdash; almost always. We diagnose and fix in your own QuickBooks Online or hosted Desktop file remotely, usually within a day for a focused error. For genuine file damage we attempt professional repair beyond the built-in Tool Hub and, when repair isn&rsquo;t viable, extract your data into a clean file." },
    { q: "How much does a QuickBooks error fix cost?", a: "Fixed-fee against a written scope by severity. A focused single-error fix is well-bounded; a file-damage or multi-issue case is scoped after a diagnostic. You get the exact fee in writing within 3 business days &mdash; and if you can fix it yourself in five minutes, we&rsquo;ll tell you that instead." },
    { q: "What if the error is really a sign of a messy file?", a: "Often it is. When the errors are symptoms of a file that&rsquo;s structurally wrong &mdash; flat-rate sales tax, misclassification, unreconciled accounts &mdash; we&rsquo;ll say so and scope a cleanup rather than patching symptoms that will just come back." },
    { q: "Can you clear a payroll error before my deadline?", a: "Yes &mdash; payroll errors like PS038 and California payroll items missing SDI or PIT setup are deadline-sensitive, so we prioritize them. We diagnose whether it&rsquo;s stuck paychecks, a subscription/validation issue, or deeper payroll-component damage, and clear it before the run." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we fix the file and keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We are not affiliated with Intuit Inc." },
    { q: "Do you serve my California city or county?", a: "All 58 California counties, delivered remotely. Your location changes the district sales-tax rate we fix the file to, but never the service or the named ProAdvisor diagnosing the error." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-error-fixes/",
    name: "California QuickBooks Error Fixes",
    description: "QuickBooks error fixes for California businesses — technical error codes (H202, 6000-series, payroll) plus California config errors (flat-rate sales tax, payroll items, reconciliation), by a Certified ProAdvisor across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks Error-Fix Services",
    serviceType: "QuickBooks error diagnosis and repair services",
    serviceDesc: "Diagnosis and repair of QuickBooks errors for California businesses — technical error codes (H202, 6000-series, payroll PS038, install/update), file damage and data recovery, and California configuration errors (flat-rate district sales tax, payroll items, reconciliation that won't tie). Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses hitting QuickBooks errors or file-configuration problems",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

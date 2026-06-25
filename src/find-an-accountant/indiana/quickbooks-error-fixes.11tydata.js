/* /find-an-accountant/indiana/quickbooks-error-fixes/ — IN SERVICE CHILD (QB spoke).
 * t-location. Shared body: partials/state-service-body.njk. Mirrors the same-named
 * Delaware exemplar (delaware/quickbooks-error-fixes.*) — same layout, same partial,
 * same buildCityGraph helper — localized to Indiana. NOTE: this is t-location via the
 * shared state-service partial, which differs from the other Indiana service pages.
 * GENUINELY IN-localized — both technical QuickBooks errors AND Indiana file-config errors.
 * Schema via buildCityGraph (_build/lib/city-child.js): WebPage (reviewedBy #david-westgate) +
 * BreadcrumbList + Service (provider #organization, areaServed State Indiana — NO address) + FAQPage.
 * HONESTY: areaServed-only, NO Indiana street address; deferred to Indiana DOR / DLGF + CPA/EA/
 * assessor; founder-name-zero; independent firm, not Intuit; not a registered agent; serves all 92 counties. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IN_FACTS = [
  { fig: "7%", title: "Flat 7% sales tax &mdash; no local add-ons", body: "Indiana charges a single 7% sales tax statewide with no county or city add-ons. A file mis-configured to collect a wrong or &ldquo;local&rdquo; rate, or one not collecting 7% on taxable goods or services, is a config &ldquo;error&rdquo; that throws no code at all. We fix it to the single 7% rate; your CPA files the return." },
  { fig: "92", title: "County Local Income Tax (LIT)", body: "All 92 Indiana counties levy their own local income tax on top of the flat 2.95% state rate, and each county sets its own rate (by county of residence on January 1, via Form WH-4). Payroll items missing the correct county LIT withholding are the most damaging silent Indiana &ldquo;error&rdquo; &mdash; we fix the items." },
  { fig: "$2M", title: "Business personal-property exemption", body: "For 2026 the business personal-property exemption is $2,000,000 (up from $80,000). Under $2M is exempt but must still be declared on Form 102 or 103, so we keep the asset detail clean in the file. TechBrot does not file the county return &mdash; your CPA or assessor does." },
];
const IN_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Indiana businesses across all 92 counties &mdash; remote, with no Indiana office. Indiana tax figures &mdash; the flat 7% sales tax, the 92-county Local Income Tax (LIT) withholding, and the business personal-property exemption &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a> and the <a href=\"https://www.in.gov/dlgf/assessments/personal-property/\" rel=\"noopener nofollow\">Department of Local Government Finance (DLGF)</a>. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA or EA, who files; we do not file Indiana income, LIT, sales-tax, or business personal-property returns, are not a registered agent, and do not represent clients before any tax authority or county assessor.";
const IN_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; operational accounting &middot; serving all 92 Indiana counties (remote)" },
  { label: "Standards", detail: "Verified vs the Indiana Department of Revenue &amp; the DLGF &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/indiana/quickbooks-error-fixes/",
  slug: "in-svc-errorfix",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  metaReviewed: "2026-06-26",
  title: "Indiana QuickBooks Error Fixes · TechBrot",
  description: "Indiana QuickBooks error fixes — technical codes plus IN config errors: 7% sales-tax setup, county LIT payroll items, reconciliation. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Indiana", href: "/find-an-accountant/indiana/" },
    { name: "QuickBooks Error Fixes" },
  ],
  bookHref: "/contact/?intent=indiana&state=indiana&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Indiana &middot; QuickBooks Error Fixes",
    heading: "Indiana QuickBooks error fixes &mdash; the code and the cause.",
    subheading: "A Certified QuickBooks ProAdvisor fixes what&rsquo;s breaking your Indiana file &mdash; technical error codes (H202, 6000-series, payroll errors) and the Indiana-specific &ldquo;errors&rdquo; that aren&rsquo;t codes at all: sales tax set to a wrong rate instead of the flat 7%, payroll items missing the right county LIT withholding, reconciliation that won&rsquo;t tie. Fixed-fee, all 92 counties.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=indiana&state=indiana&source_type=state-qb&funnel_stage=MOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks error fixes for Indiana businesses</strong> &mdash; a Certified ProAdvisor resolves both technical QuickBooks error codes and the Indiana-specific configuration errors (sales tax set to the wrong rate instead of the flat 7%, payroll items missing the correct county LIT withholding, business personal-property detail left messy, reconciliation that won&rsquo;t tie) that quietly corrupt the books. The full Indiana QuickBooks error-fixes summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Indiana tax references (the flat 7% sales tax; the 92-county Local Income Tax withholding; the business personal-property exemption) reflect rules current as of the review date; TechBrot does not file Indiana taxes.",
  },
  ctaBand: {
    eyebrow: "Indiana businesses start here",
    heading: "QuickBooks throwing errors? Let&rsquo;s diagnose it.",
    lede: "A Certified ProAdvisor reviews the error and the file, tells you honestly what it needs, and scopes the fix in writing within 3 business days. No pitch. Independent firm &mdash; does not file Indiana taxes; coordinates with your CPA.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=indiana&state=indiana&source_type=state-qb&funnel_stage=BOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Indiana",
  copy: {
    aiHeading: "Indiana QuickBooks error fixes, in five questions.",
    valueEyebrow: "What we fix for Indiana businesses",
    valueHeading: "Two kinds of Indiana QuickBooks errors.",
    valueLede: "Some are technical codes; some are Indiana-config errors that throw no code at all but quietly break the books.",
    factsEyebrow: "Indiana tax realities behind the &lsquo;errors&rsquo;",
    factsHeading: "Three Indiana facts behind the books being wrong.",
    factsLede: "In Indiana, the most damaging &lsquo;errors&rsquo; aren&rsquo;t codes &mdash; they&rsquo;re these three configuration mistakes.",
    faqHeading: "Indiana QuickBooks error-fix questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks error fixes for Indiana businesses</strong> &mdash; a Certified QuickBooks ProAdvisor resolves two kinds of problem: <strong>technical error codes</strong> (H202 and multi-user issues, the 6000-series, payroll errors like PS038, install and update errors) and the Indiana-specific <strong>configuration errors</strong> that throw no code but corrupt the books &mdash; <strong>sales tax set to a wrong rate instead of the flat 7%</strong>, payroll items missing the correct county Local Income Tax (LIT) withholding, business personal-property asset detail left messy, and reconciliation that won&rsquo;t tie. For the technical codes we diagnose the root cause; see the <a href=\"/quickbooks/help/error-codes/\">QuickBooks error-codes reference</a>. Fixed-fee against a written scope, in your own file across all 92 counties. Independent firm &mdash; not affiliated with Intuit Inc.; we fix the file, your CPA files.",
  aiSummary: [
    { q: "What QuickBooks errors do you fix for Indiana businesses?", a: "Both kinds: <strong>technical error codes</strong> (H202 multi-user, the 6000-series file-access/damage errors, payroll errors such as PS038, install/update errors) and <strong>Indiana configuration errors</strong> &mdash; sales tax set to a wrong rate instead of the flat 7%, payroll items missing the correct county LIT withholding, business personal-property detail left messy, reconciliation that won&rsquo;t tie. A Certified ProAdvisor diagnoses the root cause, not just the symptom." },
    { q: "Is a wrong tax setup an &lsquo;error&rsquo;?", a: "It&rsquo;s among the most damaging Indiana &lsquo;errors&rsquo; there is &mdash; and it throws <strong>no code</strong>. Indiana has a single 7% sales tax with no local add-ons, so a file collecting a wrong or &ldquo;local&rdquo; rate, or not collecting 7% on taxable goods or services, quietly mis-states what&rsquo;s owed until a notice arrives. We fix it to the single 7% rate." },
    { q: "What about county income tax withholding?", a: "All 92 Indiana counties levy their own Local Income Tax (LIT) on top of the flat 2.95% state rate, by county of residence on January 1 via Form WH-4. Payroll items missing the correct county LIT withholding are the most damaging silent Indiana error &mdash; we fix the items so the withholding is right." },
    { q: "Can you fix it remotely?", a: "Yes &mdash; almost always. We diagnose in your own QuickBooks Online or hosted Desktop file remotely, usually within a day for a focused error, and scope the fix in writing." },
    { q: "When is it really a cleanup?", a: "When the &lsquo;errors&rsquo; are symptoms of a file that&rsquo;s structurally wrong, we&rsquo;ll say so and scope a <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">cleanup</a> instead of patching symptoms." },
  ],
  value: [
    { num: "01", title: "Technical error codes", body: "H202 and multi-user issues, the 6000-series file-access and damage errors, install and update errors &mdash; diagnosed to the root cause.", href: "/quickbooks/help/error-codes/", cta: "Error-codes reference &rarr;" },
    { num: "02", title: "Payroll &amp; county LIT errors", body: "Payroll errors (e.g. PS038) and Indiana payroll items missing the correct county Local Income Tax (LIT) withholding or state-withholding setup &mdash; cleared before a payroll deadline.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "03", title: "Sales tax at the wrong rate (no code)", body: "A damaging Indiana &lsquo;error&rsquo; &mdash; sales tax configured to a wrong or &ldquo;local&rdquo; rate, or not collecting 7% on taxable goods or services &mdash; reset to the single flat 7% statewide rate.", href: "/find-an-accountant/indiana/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Reconciliation that won&rsquo;t tie", body: "Beginning-balance and reconciliation discrepancies tracked down and fixed so the account ties again.", href: "/find-an-accountant/indiana/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "05", title: "File damage &amp; data recovery", body: "When a file is genuinely damaged, professional repair beyond Tool Hub &mdash; or clean data extraction when repair isn&rsquo;t viable.", href: "/quickbooks/help/", cta: "QuickBooks help &rarr;" },
    { num: "06", title: "Honest triage", body: "If you can fix it yourself in five minutes, we&rsquo;ll tell you. If it&rsquo;s really a cleanup, we&rsquo;ll scope that instead.", href: "/find-an-accountant/indiana/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
  ],
  facts: IN_FACTS,
  scopeDo: [
    "Diagnose technical QuickBooks error codes to the root cause",
    "Fix Indiana config errors: wrong sales-tax rate, county LIT payroll items, personal-property detail, reconciliation",
    "Clear payroll errors before deadlines and repair file damage where viable",
    "Tell you honestly when it&rsquo;s self-fixable or really a cleanup",
    "Work remotely in your own QuickBooks file",
    "Scope the fix in writing before any work begins",
  ],
  scopeDont: [
    "File Indiana or federal income, sales-tax, or county LIT returns",
    "File the business personal-property return (Form 102/103) or act as your registered agent",
    "Represent you before the Indiana Department of Revenue, the DLGF, or any county assessor",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free diagnostic", body: "A Certified ProAdvisor reviews the error and the file remotely &mdash; usually within a day &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee &mdash; or an honest &ldquo;you can fix this yourself&rdquo; if that&rsquo;s the truth." },
    { phase: "Step 3", title: "Fix the cause", body: "We resolve the code or the Indiana config error at the root, not just the surface symptom." },
    { phase: "Step 4", title: "Verify &amp; prevent", body: "We confirm the fix holds and flag any underlying issues &mdash; scoping a cleanup only if it&rsquo;s genuinely needed." },
  ],
  advisoryBody: [
    "Most &lsquo;QuickBooks errors&rsquo; in Indiana aren&rsquo;t the error code on the screen &mdash; they&rsquo;re a tax setup or payroll item that&rsquo;s quietly wrong and throws nothing. Indiana has a single 7% sales tax with no local add-ons, and all 92 counties levy their own Local Income Tax, so a file collecting the wrong rate or withholding the wrong county LIT mis-states the books silently. Fixing the cause, and being honest when it&rsquo;s self-fixable, is the difference between a patch and a fix.",
    "When the errors are symptoms of a deeper mess, we scope a <a href=\"/find-an-accountant/indiana/quickbooks-cleanup/\">cleanup</a>; when the file&rsquo;s sound, we fix the code and leave it. Either way, the same named ProAdvisor can keep it clean afterward.",
  ],
  faq: [
    { q: "What QuickBooks errors do you fix for Indiana businesses?", a: "Both technical error codes &mdash; H202 and multi-user issues, the 6000-series file-access and damage errors, payroll errors such as PS038, and install or update errors &mdash; and Indiana-specific configuration errors that throw no code: sales tax set to a wrong rate instead of the flat 7%, payroll items missing the correct county Local Income Tax (LIT) withholding, business personal-property detail left messy, and reconciliation that won&rsquo;t tie. We diagnose the root cause rather than patching the symptom. For the technical codes, see our QuickBooks error-codes reference." },
    { q: "Is a wrong Indiana tax setup really an error?", a: "It&rsquo;s among the most damaging Indiana &lsquo;errors&rsquo; there is, and it throws no code at all. Indiana charges a single 7% sales tax with no local add-ons &mdash; so a file configured to a wrong or &ldquo;local&rdquo; rate, or not collecting 7% on taxable goods or services, quietly mis-states what&rsquo;s owed until a Department of Revenue notice arrives. We reset the setup to the single 7% rate &mdash; a far bigger risk than most of the codes." },
    { q: "What about county income tax withholding errors?", a: "All 92 Indiana counties levy their own Local Income Tax (LIT) on top of the flat 2.95% state rate. The rate is set by the employee&rsquo;s county of residence on January 1 and established on Form WH-4. Payroll items missing the correct county LIT withholding are the most damaging silent Indiana error &mdash; they throw no code but accumulate quietly. We fix the payroll items so the right county rate withholds; your CPA files." },
    { q: "Can you fix QuickBooks errors remotely?", a: "Yes &mdash; almost always. We diagnose and fix in your own QuickBooks Online or hosted Desktop file remotely, usually within a day for a focused error. For genuine file damage we attempt professional repair beyond the built-in Tool Hub and, when repair isn&rsquo;t viable, extract your data into a clean file." },
    { q: "How much does a QuickBooks error fix cost?", a: "Fixed-fee against a written scope by severity. A focused single-error fix is well-bounded; a file-damage or multi-issue case is scoped after a diagnostic. You get the exact fee in writing within 3 business days &mdash; and if you can fix it yourself in five minutes, we&rsquo;ll tell you that instead. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to start." },
    { q: "What if the error is really a sign of a messy file?", a: "Often it is. When the errors are symptoms of a file that&rsquo;s structurally wrong &mdash; wrong sales-tax rate, missing county LIT withholding, unreconciled accounts, messy business personal-property detail &mdash; we&rsquo;ll say so and scope a cleanup rather than patching symptoms that will just come back." },
    { q: "Do you file my Indiana taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we fix the file and keep the books CPA-ready and coordinate with your CPA, EA, or assessor, who files the income, county LIT, sales-tax, and business personal-property returns. We are not affiliated with Intuit Inc. and are not a registered agent." },
  ],
  reviewProse: IN_REVIEW_PROSE,
  reviewCreds: IN_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/indiana/quickbooks-error-fixes/",
    name: "Indiana QuickBooks Error Fixes",
    description: "QuickBooks error fixes for Indiana businesses — technical error codes (H202, 6000-series, payroll) plus Indiana config errors (wrong sales-tax rate vs the flat 7%, county LIT payroll items, business personal-property detail, reconciliation), by a Certified ProAdvisor across all 92 counties. Independent firm; does not file Indiana taxes.",
    serviceName: "Indiana QuickBooks Error-Fix Services",
    serviceType: "QuickBooks error diagnosis and repair services",
    serviceDesc: "Diagnosis and repair of QuickBooks errors for Indiana businesses — technical error codes (H202, 6000-series, payroll PS038, install/update), file damage and data recovery, and Indiana configuration errors (sales tax set to a wrong rate instead of the flat 7%, payroll items missing the correct county Local Income Tax withholding, business personal-property asset detail left messy, reconciliation that won't tie). Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns, the county LIT, the sales-tax, or the business personal-property return — coordinates with the client's CPA, EA, and county assessor.",
    areaServed: [{ type: "State", name: "Indiana", sameAs: "https://en.wikipedia.org/wiki/Indiana" }],
    audienceType: "Indiana small and midsize businesses hitting QuickBooks errors or file-configuration problems",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

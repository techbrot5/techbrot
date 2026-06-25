/* /find-an-accountant/california/ab5-worker-classification/ — CA SERVICE CHILD (tax cluster).
 * t-bofu. Shared body: partials/state-service-body.njk. The most CA-unique page in the cluster:
 * AB5 / the ABC test for worker classification. GENUINELY CA. HONESTY HARD-GATE: we keep the
 * BOOKS so W-2/1099 is separated and the exposure is visible; we do NOT make the legal
 * classification determination, give legal advice, or represent in EDD audits — that is the
 * client's CPA, employment counsel, and the EDD. Deferred accordingly; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const AB5_FACTS = [
  { fig: "Prong B", title: "Where most companies fail", body: "Under the ABC test a worker is an employee unless the business proves all three prongs. <strong>Prong B</strong> &mdash; work outside the company&rsquo;s usual course of business &mdash; traps companies whose contractors do core work: a developer at a software company, a writer at an agency, a driver at a delivery company." },
  { fig: "$5K&ndash;$25K", title: "Penalties per violation", body: "Misclassification penalties run roughly $5,000&ndash;$25,000 per violation, plus back payroll taxes (federal and California), interest, and potential wage-and-hour exposure. The books are where that exposure first becomes visible." },
  { fig: "EDD", title: "Who runs the audits", body: "California&rsquo;s Employment Development Department runs worker-classification audits, and hiring even one California employee creates immediate EDD registration obligations. We keep the records clean; the EDD audit and any dispute are handled by your CPA or employment counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. AB5 / ABC-test references reflect California law current as of the date below and are reviewed periodically against the <a href=\"https://www.dir.ca.gov/dlse/faq_independentcontractor.htm\" rel=\"noopener nofollow\">California Department of Industrial Relations</a> and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. This page is educational; it is not legal or tax advice. TechBrot keeps the books so worker pay is recorded correctly and the exposure is visible; the legal classification determination, EDD audits, and any dispute are handled by your CPA, EA, or employment attorney. We do not make classification determinations or represent clients before the EDD.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA DIR &amp; EDD &middot; Educational only; not legal or tax advice &middot; No classification-determination or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/ab5-worker-classification/",
  slug: "ca-svc-ab5",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California AB5 Worker Classification · TechBrot",
  description: "California AB5 books support: W-2 and 1099 separated, misclassification exposure surfaced for your counsel, EDD-ready records. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "AB5 Worker Classification" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; AB5 / the ABC Test",
    heading: "AB5 in your books &mdash; W-2 and 1099, separated and defensible.",
    subheading: "California&rsquo;s AB5 reclassifies many contractors as employees under the ABC test. A Certified QuickBooks ProAdvisor keeps your books so W-2 wages and 1099 contractor pay are separated cleanly and the misclassification exposure is visible &mdash; before the EDD sees it. We do the books; the legal classification, EDD audits, and disputes are your CPA&rsquo;s and employment counsel&rsquo;s. Fixed-fee, all 58 counties.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Educational, not legal advice"],
  },
  inBrief: {
    text: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a law firm, CPA, or the EDD.</strong> We keep your California books so W-2 wages and 1099 contractor pay are separated cleanly and the misclassification exposure under AB5&rsquo;s ABC test is visible and quantified for your advisors. We do <strong>not</strong> make the legal classification determination, give legal advice, or represent you in an EDD audit &mdash; your CPA, EA, or employment attorney does that. The full California AB5 summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. AB5 / ABC-test references reflect California law current as of the review date. Educational only; not legal or tax advice.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Worried about your contractor mix under AB5?",
    lede: "Book a free discovery call. We&rsquo;ll review how workers are recorded in your books, surface the exposure, and hand you and your advisors clean figures &mdash; written fixed-fee scope within 3 business days. We don&rsquo;t make the legal call or represent you; your CPA or counsel does.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California AB5 worker classification, in five questions.",
    valueEyebrow: "What we do in the books for AB5",
    valueHeading: "Books that make the AB5 position clear.",
    valueLede: "We don&rsquo;t make the legal call &mdash; we make sure the books reflect it correctly and the exposure is never hidden.",
    factsEyebrow: "How AB5 actually works",
    factsHeading: "Three things that make AB5 high-stakes.",
    factsLede: "AB5 codified the ABC test &mdash; these three are why misclassification is one of California&rsquo;s costliest mistakes.",
    faqHeading: "California AB5 questions.",
  },
  summary: "<strong>TechBrot</strong> helps California businesses get <strong>AB5 worker classification right in the books</strong>. California&rsquo;s AB5 codified the <strong>ABC test</strong>: a worker is presumed an employee unless the business proves all three prongs &mdash; freedom from control, work outside the company&rsquo;s usual course of business (<strong>Prong B</strong>, where most fail), and an independently established trade. Misclassification penalties run roughly <strong>$5,000&ndash;$25,000 per violation</strong> plus back payroll taxes, and the <strong>EDD</strong> runs the audits. A Certified QuickBooks ProAdvisor keeps your books so W-2 wages and 1099 contractor pay are separated cleanly, the payroll-tax exposure is quantified, and records are EDD-ready for your advisors. <strong>We keep the books; we do not make the legal classification determination, give legal advice, or represent you before the EDD</strong> &mdash; that is your CPA, EA, or employment attorney. Educational only; not legal or tax advice. Independent firm &mdash; not affiliated with Intuit Inc.",
  aiSummary: [
    { q: "What is AB5 and the ABC test?", a: "<strong>California&rsquo;s AB5 codified the ABC test for worker classification</strong>: a worker is presumed an employee unless the business proves all three prongs &mdash; (A) freedom from control, (B) work outside the company&rsquo;s usual course of business, and (C) an independently established trade. Prong B is where most companies fail. This page is educational; the legal determination is your CPA&rsquo;s or attorney&rsquo;s." },
    { q: "What does TechBrot do about AB5?", a: "<strong>We keep the books so W-2 wages and 1099 contractor pay are separated cleanly and the misclassification exposure is visible and quantified</strong> for your advisors. We do not make the legal classification call, give legal advice, or represent you in an EDD audit &mdash; your CPA, EA, or employment attorney does." },
    { q: "What happens if a contractor should have been an employee?", a: "Exposure includes <strong>back payroll taxes</strong> (federal and California), penalties of roughly $5,000&ndash;$25,000 per violation, interest, and potential wage-and-hour claims. We surface it in the books so you and your advisors can act before an EDD audit, but the resolution is handled by your licensed professional." },
    { q: "Who audits worker classification in California?", a: "The <strong>EDD</strong> (Employment Development Department). Hiring even one California employee creates EDD registration obligations. We keep clean, EDD-ready records; the audit itself and any dispute are handled by your CPA or employment counsel." },
    { q: "Do you decide whether my workers are contractors or employees?", a: "<strong>No.</strong> That legal determination is your CPA&rsquo;s or employment attorney&rsquo;s. We make sure the books record whatever the correct classification is, cleanly, and surface the exposure where it isn&rsquo;t." },
  ],
  value: [
    { num: "01", title: "W-2 / 1099 separated cleanly", body: "Payroll and vendor setup so employee wages and contractor pay never blur &mdash; the foundation of a defensible position.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "Exposure surfaced &amp; quantified", body: "Where contractors do core work, the potential payroll-tax exposure is quantified in the books for your CPA and counsel &mdash; not hidden.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "03", title: "EDD-ready records", body: "Clean, documented worker and payment records assembled so your advisors can respond to an EDD inquiry quickly.", href: "/find-an-accountant/california/state-tax-notice-help/", cta: "State tax notice help &rarr;" },
    { num: "04", title: "Payroll setup on reclassification", body: "If you and your advisors reclassify a worker to W-2, we set up California payroll (SDI, PIT, EDD) correctly.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "05", title: "1099 reporting kept clean", body: "Accurate 1099 tracking and year-end reporting for genuine contractors, coordinated with your CPA.", href: "/glossary/1099-vs-w2/", cta: "1099 vs W-2 &rarr;" },
    { num: "06", title: "A clean handoff to advisors", body: "A documented worker-classification picture your CPA and employment attorney can make the legal call from.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],
  facts: AB5_FACTS,
  scopeDo: [
    "Separate W-2 wages from 1099 contractor pay cleanly in the books",
    "Surface and quantify the misclassification exposure for your advisors",
    "Assemble clean, EDD-ready worker and payment records",
    "Set up California payroll (SDI/PIT/EDD) if a worker is reclassified",
    "Keep accurate 1099 tracking and year-end reporting",
    "Hand your CPA and counsel a documented classification picture",
  ],
  scopeDont: [
    "Make the legal worker-classification determination",
    "Give legal or tax advice on AB5",
    "Represent you in an EDD worker-classification audit",
    "Resolve or negotiate a classification dispute (your CPA / employment attorney)",
  ],
  process: [
    { phase: "Step 1", title: "Free books review", body: "A Certified ProAdvisor reviews how workers are recorded in your books &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days for cleaning up the W-2/1099 records." },
    { phase: "Step 3", title: "Separate &amp; surface", body: "We separate the pay cleanly and quantify the exposure for your CPA and employment counsel." },
    { phase: "Step 4", title: "Hand off &amp; maintain", body: "Your advisors make the legal call; we keep the books reflecting it correctly going forward." },
  ],
  advisoryBody: [
    "AB5 is a legal question with an accounting shadow: the law decides whether a worker is an employee, but the books are where the exposure hides &mdash; or becomes visible. Our job is to make sure it&rsquo;s visible, quantified, and recorded correctly, so your CPA and employment counsel can make the call with real numbers.",
    "We don&rsquo;t make that legal determination or represent you before the EDD &mdash; that&rsquo;s your licensed professional. We keep the books defensible behind them. This page is educational, not legal or tax advice.",
  ],
  faq: [
    { q: "What is California&rsquo;s AB5 and the ABC test?", a: "AB5 codified the ABC test for worker classification in California: a worker is presumed an employee unless the business proves all three prongs &mdash; freedom from control, work outside the company&rsquo;s usual course of business, and an independently established trade. Prong B is where most companies fail, because a contractor doing core work is almost always reclassified as an employee. This page is educational and is not legal or tax advice." },
    { q: "What does TechBrot actually do about AB5?", a: "We keep your books so W-2 wages and 1099 contractor pay are separated cleanly, and so the misclassification exposure is visible and quantified for your advisors. We are an independent bookkeeping and ProAdvisor firm &mdash; we do not make the legal classification determination, give legal advice, or represent you in an EDD audit. Your CPA, EA, or employment attorney does all of that; we keep the books defensible behind them." },
    { q: "Do you decide whether my workers are contractors or employees?", a: "No &mdash; that is a legal determination for your CPA or employment attorney, applying the ABC test to your facts. What we do is make sure the books record whatever the correct classification is, cleanly, and surface the exposure where workers may be misclassified, so the people who make the call have accurate figures." },
    { q: "What&rsquo;s the exposure if a contractor should have been an employee?", a: "It can include back payroll taxes (federal and California), penalties of roughly $5,000&ndash;$25,000 per violation, interest, and potential wage-and-hour claims. The exact exposure is a legal and tax question for your advisors; we quantify what the books can show so it isn&rsquo;t a surprise in an EDD audit." },
    { q: "Who audits worker classification in California?", a: "The EDD (Employment Development Department) runs worker-classification audits, and hiring even one California employee creates immediate EDD registration obligations. We keep clean, EDD-ready records; the audit itself and any dispute are handled by your CPA or employment counsel &mdash; we do not represent clients before the EDD." },
    { q: "If we reclassify a contractor to an employee, can you set up payroll?", a: "Yes &mdash; once you and your advisors make that call, we set up California payroll correctly in QuickBooks: State Disability Insurance (SDI), Personal Income Tax (PIT) withholding, and EDD reporting, coordinated with your payroll provider. We handle the bookkeeping side of the reclassification; the legal decision stays with your advisors." },
    { q: "Is this page legal advice?", a: "No. This page is educational only and is not legal or tax advice. AB5 and the ABC test are legal questions; for your specific situation, work with a CPA, EA, or employment attorney. TechBrot keeps the books so their analysis rests on accurate, well-documented figures." },
    { q: "Do you serve my California city or county?", a: "All 58 California counties, delivered remotely on QuickBooks. AB5 applies statewide, so the analysis is the same wherever you are; your location never changes the service or the named ProAdvisor on your file." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/ab5-worker-classification/",
    name: "California AB5 Worker Classification (Bookkeeping)",
    description: "AB5 worker classification support for California books — W-2 and 1099 separated cleanly, misclassification exposure surfaced and quantified, EDD-ready records, by a Certified ProAdvisor. The legal determination, EDD audits, and disputes stay with your CPA or employment counsel. Educational only.",
    serviceName: "California AB5 Worker-Classification Bookkeeping Support",
    serviceType: "Worker-classification bookkeeping and records support",
    serviceDesc: "Bookkeeping support for California AB5 / ABC-test worker classification — separating W-2 wages from 1099 contractor pay, surfacing and quantifying misclassification exposure, assembling EDD-ready records, and setting up California payroll on reclassification. Educational only; not legal or tax advice. Independent Certified QuickBooks ProAdvisor firm; does not make classification determinations, give legal advice, or represent clients before the EDD — coordinates with the client's CPA, EA, or employment attorney.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California businesses with contractor workforces needing AB5-aware bookkeeping and clean W-2/1099 records",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

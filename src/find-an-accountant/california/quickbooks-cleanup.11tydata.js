/* /find-an-accountant/california/quickbooks-cleanup/ — CA SERVICE CHILD (QB spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. GENUINELY CA-localized cleanup.
 * HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. Cleanup gets it accrued so it&rsquo;s never a surprise; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and local district add-ons push the combined rate past 10.25%. A file set to a flat statewide rate has drifting sales-tax liability &mdash; the most common California cleanup." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. Cleanup separates W-2 from 1099 and surfaces the exposure; EDD disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/quickbooks-cleanup/",
  slug: "ca-svc-qbcleanup",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Cleanup · TechBrot",
  description: "QuickBooks cleanup for California businesses — fix flat-rate district sales tax, 1099/W-2 misclassification, unreconciled accounts & ASC 606 errors, to a CPA-ready standard. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Cleanup" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; QuickBooks Cleanup",
    heading: "California QuickBooks cleanup &mdash; back to CPA-ready.",
    subheading: "A Certified QuickBooks ProAdvisor fixes a California file that&rsquo;s drifted &mdash; flat-rate district sales tax, 1099/W-2 misclassification, unreconciled accounts, ASC 606 revenue errors &mdash; and brings it to a CPA-ready standard. Fixed-fee, all 58 counties. We fix the books; your CPA files.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks cleanup for California businesses</strong> &mdash; a Certified ProAdvisor diagnoses and fixes a California file that&rsquo;s structurally wrong (flat-rate district sales tax, misclassified contractors, unreconciled accounts, ASC 606 revenue errors) and brings it to a CPA-ready standard. The full California QuickBooks cleanup summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Books a mess? Start with a free file review.",
    lede: "A Certified ProAdvisor reviews the file, tells you honestly what it needs, and sends a written fixed-fee cleanup quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=BOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks cleanup, in five questions.",
    valueEyebrow: "What a California cleanup fixes",
    valueHeading: "The California problems we see most.",
    valueLede: "Most California cleanups share the same root causes &mdash; the ones a generic bookkeeper created or never knew to fix.",
    factsEyebrow: "California tax realities the cleanup corrects",
    factsHeading: "Three California facts a cleanup gets right.",
    factsLede: "When a file drifts in California, it&rsquo;s usually one of these three &mdash; and the sales-tax one is by far the most common.",
    faqHeading: "California QuickBooks cleanup questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks cleanup for California businesses</strong> &mdash; a Certified QuickBooks ProAdvisor diagnoses why the file drifted and fixes it to a CPA-ready standard. The most common California cleanups: <strong>district sales tax set to a flat statewide rate</strong> instead of the correct combined rate by location, <strong>1099/W-2 misclassification</strong> under AB5, unreconciled accounts, Undeposited Funds and Opening Balance Equity messes, and <strong>ASC 606</strong> revenue errors for SaaS and agencies. We reconcile, correct, and document, then &mdash; if you want &mdash; keep the file clean in <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope ($1,500&ndash;$15,000+ by depth). Independent firm &mdash; not affiliated with Intuit Inc.; we fix the books, your CPA files.",
  aiSummary: [
    { q: "What does a California QuickBooks cleanup fix?", a: "<strong>Flat-rate district sales tax (corrected to the right combined rate by location), 1099/W-2 misclassification under AB5, unreconciled accounts, Undeposited Funds and Opening Balance Equity errors, and ASC 606 revenue mistakes</strong> &mdash; brought to a CPA-ready standard by a Certified ProAdvisor." },
    { q: "What&rsquo;s the most common California cleanup?", a: "<strong>District sales tax configured at a flat statewide rate</strong> instead of the correct combined rate by customer location. It quietly under- or over-collects and the CDTFA return stops tying &mdash; we rebuild the sales-tax setup and reconcile it." },
    { q: "How much does cleanup cost?", a: "Fixed-fee against a written scope, typically <strong>$1,500&ndash;$15,000+</strong> depending on how many months/years and how deep the problems run. The free file review tells you honestly before any work begins." },
    { q: "How long does it take?", a: "A focused single-issue cleanup can be days; a multi-year, multi-problem rebuild runs weeks. We scope it in writing first, and prioritize anything blocking a filing or a loan." },
    { q: "What happens after cleanup?", a: "We hand you a CPA-ready file and a summary of what was fixed. Many California businesses then move into <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> so it stays clean." },
  ],
  value: [
    { num: "01", title: "District sales tax, rebuilt", body: "Sales-tax items reconfigured from a flat rate to the correct CDTFA combined rate by location, then reconciled so the return ties.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "02", title: "1099/W-2 reclassification", body: "Contractor and employee pay separated cleanly so the AB5 position is defensible and payroll exposure is visible.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "03", title: "Accounts reconciled", body: "Bank, card, and loan accounts reconciled; duplicates, miscategorizations, and stale items cleared.", href: "/find-an-accountant/california/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "04", title: "Undeposited Funds &amp; OBE", body: "The classic QuickBooks messes &mdash; Undeposited Funds and Opening Balance Equity &mdash; cleared and documented.", href: "/quickbooks/cleanup/", cta: "Cleanup overview &rarr;" },
    { num: "05", title: "ASC 606 revenue fixes", body: "Deferred revenue and gross-vs-net corrected for California SaaS and agencies, where revenue is most often overstated.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "06", title: "$800 franchise tax accrued", body: "The FTB minimum tax and LLC fee accrued so the books are complete and the year-end isn&rsquo;t a surprise.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Diagnose why the California file drifted, in a free review",
    "Rebuild CDTFA district sales tax to the correct rate by location",
    "Reclassify 1099 vs W-2 cleanly for the AB5 position",
    "Reconcile accounts and clear Undeposited Funds / OBE",
    "Correct ASC 606 revenue for SaaS and agencies",
    "Deliver a CPA-ready file and a summary of what changed",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews the file and identifies what&rsquo;s wrong &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written cleanup scope and fixed fee within 3 business days &mdash; no open-ended hourly billing." },
    { phase: "Step 3", title: "Fix to CPA-ready", body: "We rebuild sales tax, reconcile, reclassify, and correct revenue &mdash; documenting each change." },
    { phase: "Step 4", title: "Keep it clean", body: "Optionally move into monthly bookkeeping so the file doesn&rsquo;t drift again." },
  ],
  advisoryBody: [
    "Most California cleanups aren&rsquo;t carelessness &mdash; they&rsquo;re a generic setup that never knew about district sales tax, AB5, or ASC 606. Fixing the root cause, not just the symptoms, is what makes a cleanup hold.",
    "Once the file is CPA-ready, the same named ProAdvisor can keep it that way in <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> and extend into advisory when the numbers are trustworthy.",
  ],
  faq: [
    { q: "What does a California QuickBooks cleanup fix?", a: "The common California problems: district sales tax set to a flat statewide rate (corrected to the right combined rate by location), 1099/W-2 misclassification under AB5, unreconciled accounts, Undeposited Funds and Opening Balance Equity errors, and ASC 606 revenue mistakes for SaaS and agencies. We bring the file to a CPA-ready standard and document every change." },
    { q: "What&rsquo;s the most common California cleanup problem?", a: "District sales tax configured at a flat statewide rate instead of the correct combined rate by customer location. California&rsquo;s rate is sourced by location, so a flat rate quietly under- or over-collects and the CDTFA return stops tying. We rebuild the sales-tax setup to district rates and reconcile it &mdash; it&rsquo;s the single most frequent fix." },
    { q: "How much does a California QuickBooks cleanup cost?", a: "Fixed-fee against a written scope, never open-ended hourly &mdash; typically $1,500&ndash;$15,000+ depending on how many months or years are involved and how deep the problems run. The free file review tells you honestly what it needs before any work begins." },
    { q: "How long does cleanup take?", a: "A focused single-issue cleanup can take days; a multi-year, multi-problem rebuild runs weeks. We scope it in writing first and prioritize anything blocking a tax filing, a loan, or a sale." },
    { q: "Do you fix ASC 606 revenue for SaaS and agencies?", a: "Yes &mdash; it&rsquo;s a common California cleanup. SaaS companies that booked annual contracts on signing instead of deferring, and agencies booking pass-through media as gross revenue, both overstate revenue. We correct the deferred-revenue schedule and gross-vs-net treatment so the books are defensible; the tax positions stay with your CPA." },
    { q: "What happens after the cleanup?", a: "You get a CPA-ready file and a written summary of what was fixed. Many California businesses then move into monthly bookkeeping with the same named ProAdvisor so the file stays clean and doesn&rsquo;t drift again." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we fix and keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We are not affiliated with Intuit Inc." },
    { q: "Can you fix a file you didn&rsquo;t set up?", a: "Yes &mdash; most cleanups are files set up by someone else, in-house or by a previous bookkeeper. We work in your existing QuickBooks Online or Desktop file, diagnose what went wrong, and fix it without making you start over." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-cleanup/",
    name: "California QuickBooks Cleanup",
    description: "QuickBooks cleanup for California businesses — fix flat-rate district sales tax, 1099/W-2 misclassification, unreconciled accounts, and ASC 606 errors to a CPA-ready standard, across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks Cleanup Services",
    serviceType: "QuickBooks cleanup and file remediation",
    serviceDesc: "Diagnosis and cleanup of California QuickBooks files — rebuilding CDTFA district sales tax to the correct rate by location, reclassifying 1099/W-2 for AB5, reconciling accounts, clearing Undeposited Funds and Opening Balance Equity, and correcting ASC 606 revenue, to a CPA-ready standard. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses with QuickBooks files that have fallen behind or were set up incorrectly",
    offerPrice: "1500",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

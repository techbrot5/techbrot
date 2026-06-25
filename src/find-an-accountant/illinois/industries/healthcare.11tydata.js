/* /find-an-accountant/illinois/industries/healthcare/ — IL INDUSTRY CHILD.
 * t-location + heroLight. partials/state-industry-body.njk. GENUINELY IL×healthcare: practice books,
 * insurance-AR/reimbursement reconciliation, provider payroll (4.95% IL withholding), the medical
 * corp/S-corp/PLLC entity tax (PPRT entity-level, 9.5% combined C-corp, the PTE election, flat 4.95%
 * personal income tax), HIPAA-aware (books only — never PHI/EHR clinical data). HONESTY: IDOR + CPA;
 * not Intuit; books only, no PHI; does not file IL returns, make the PTE election, or give clinical advice. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, clinical, or representation claims (out of scope) &middot; Books only &mdash; no access to PHI or medical records &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
const IL_REVIEW_PROSE = "This page reflects how TechBrot handles Illinois healthcare-practice engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois practices remotely across all 102 counties, and reviewed for technical accuracy on insurance-AR reconciliation, provider payroll, and the medical-corporation/S-corp/PLLC entity tax &mdash; the entity-level Personal Property Replacement Tax (1.5% pass-through / 2.5% C-corp), the 9.5% combined C-corp rate, the permanent PTE election, and the flat 4.95% personal income tax &mdash; current as of the date below and reviewed against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a>. Rates and the PTE rules change; confirm current figures with the Department and your CPA. TechBrot works strictly from financial data and never accesses protected health information or medical records; it does not file Illinois taxes, make the PTE election, provide HIPAA or clinical advice, or represent clients before the Department &mdash; it coordinates with your CPA, who files.";
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/industries/healthcare/",
  slug: "il-ind-healthcare",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Illinois Healthcare & Medical Practice Accounting · TechBrot",
  description: "Accounting for Illinois medical & dental practices — insurance-AR reconciliation, provider payroll, PLLC tax and PPRT. Books only, HIPAA-aware. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Industries", href: "/find-an-accountant/illinois/industries/" },
    { name: "Healthcare" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Healthcare Accounting",
    heading: "Illinois medical-practice accounting that reconciles what you&rsquo;re actually paid.",
    subheading: "Illinois practices don&rsquo;t struggle with revenue &mdash; they struggle with the gap between what&rsquo;s billed and what insurers actually pay. We reconcile insurance AR and reimbursement, run clean provider payroll (4.95% Illinois withholding), and keep the medical-corporation, S-corp, or PLLC tax figures straight &mdash; the entity-level PPRT, the 9.5% combined C-corp rate, the PTE position &mdash; by a named Certified ProAdvisor. Books only; we never touch PHI. Your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Books only &middot; no PHI access"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor accounting for Illinois medical, dental, and healthcare practices</strong> &mdash; insurance-AR and reimbursement reconciliation, provider payroll, and the medical-corporation/S-corp/PLLC entity-tax figures (including the entity-level PPRT and the PTE position), in your own QuickBooks file across all 102 counties. We work from financial data only and never access PHI or medical records. The full Illinois healthcare summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois references (the flat 4.95% income tax; the entity-level PPRT; the 9.5% combined C-corp rate; the PTE election) reflect Illinois Department of Revenue rules current as of the review date. TechBrot keeps books from financial data only, never accesses protected health information, does not file Illinois taxes or make the PTE election, and does not provide clinical or compliance advice.",
  },
  ctaBand: {
    eyebrow: "Illinois healthcare practices start here",
    heading: "See the gap between billed and collected &mdash; and close it.",
    lede: "Book a free discovery call. We&rsquo;ll review your insurance-AR reconciliation, provider payroll, and entity setup, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; books only, no PHI; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Illinois healthcare accounting, plainly.",
    aiHeading: "Illinois healthcare accounting, in five questions.",
    challengesEyebrow: "Why Illinois practice books break",
    challengesHeading: "Three places Illinois practices lose the numbers.",
    challengesLede: "Billed isn&rsquo;t collected, payroll is complex, and the entity tax is its own puzzle. Knowing which gap you&rsquo;re in tells us where to start.",
    handleHeading: "Illinois healthcare accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your practice, delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; from financial data only.",
    integrationsHeading: "Connected to how you bill &mdash; financials only.",
    processHeading: "From billed to actually collected.",
    processLede: "Every Illinois healthcare engagement follows the same rhythm &mdash; books accurate first, collection visibility second, advisory third.",
    advisoryHeading: "Clean collections are the start. Practice profitability is the point.",
    faqHeading: "Illinois healthcare accounting questions.",
    relatedHeading: "Related Illinois services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides accounting for Illinois medical, dental, and healthcare practices</strong> &mdash; in your own QuickBooks file by a named Certified ProAdvisor, across all 102 counties. The job is to reconcile what you&rsquo;re actually paid against what you billed, run clean provider payroll, and keep the entity&rsquo;s tax figures straight.",
    "Healthcare adds its own complexity. <strong>Insurance AR and reimbursement</strong> rarely match what was billed &mdash; contractual adjustments, denials, and clawbacks all hit the books &mdash; so reconciling collections to billing is where practices get their real numbers. Many Illinois practices operate as a <strong>medical corporation, S-corp, or PLLC</strong>: Illinois layers the entity-level <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> (PPRT) on net income &mdash; 1.5% on pass-throughs, 2.5% on C-corps &mdash; a C-corp practice faces a 9.5% combined rate, a permanent PTE election is available, and owners pay Illinois&rsquo;s flat 4.95% personal income tax. Provider and staff <strong>payroll</strong> is substantial, with 4.95% Illinois withholding. We keep all of it clean &mdash; CPA-ready &mdash; working strictly from financial data; we never access PHI or medical records. We keep the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Illinois healthcare accounting?", a: "<strong>Insurance-AR and reimbursement reconciliation, provider and staff payroll, and the medical-corporation/S-corp/PLLC entity-tax figures &mdash; including the entity-level PPRT and the PTE position</strong> &mdash; for Illinois medical, dental, and healthcare practices, in your own QuickBooks file across all 102 counties. We work from financial data only; your CPA files." },
    { q: "Do you access patient records or PHI?", a: "<strong>No.</strong> We work strictly from financial data &mdash; deposits, payer remittances at the summary level, payroll, and expenses. We never access protected health information, patient records, or the clinical side of your EHR. The clinical data stays entirely in your practice-management and EHR systems." },
    { q: "How do you reconcile insurance reimbursement?", a: "We reconcile <strong>what was actually collected against what was billed</strong> &mdash; accounting for contractual adjustments, denials, and clawbacks &mdash; so you see real collected revenue, not billed revenue that overstates the picture. The numbers come from your billing summaries and deposits, never patient-level records." },
    { q: "How is an Illinois medical practice taxed?", a: "Owners pay Illinois&rsquo;s <strong>flat 4.95% personal income tax</strong>. The practice entity &mdash; medical corporation, S-corp, or PLLC &mdash; also owes the entity-level <strong>Personal Property Replacement Tax</strong> (1.5% on pass-throughs, 2.5% on C-corps); a C-corp practice faces a <strong>9.5% combined rate</strong>, and a permanent PTE election is available. We keep the revenue, payroll, and expense figures clean; your CPA computes the PPRT and files." },
    { q: "Do you file Illinois taxes or give compliance advice?", a: "No &mdash; we keep the books CPA-ready from financial data; your CPA files the income tax and the PPRT, makes any PTE election, and your compliance counsel handles HIPAA and regulatory matters. We&rsquo;re independent, don&rsquo;t access PHI or represent clients, and aren&rsquo;t affiliated with Intuit." },
  ],
  challenges: [
    { signal: "Collections", title: "Billed but never collected", body: "Contractual adjustments, denials, and clawbacks mean collected revenue is often well below billed &mdash; and a practice that tracks billed numbers is flying on a figure that isn&rsquo;t real." },
    { signal: "Payroll", title: "Provider &amp; staff payroll complexity", body: "Multiple providers, mixed W-2 and contractor arrangements, and 4.95% Illinois withholding make practice payroll complex &mdash; and errors here are expensive and recurring." },
    { signal: "Entity &amp; tax", title: "Medical-corp/S-corp/PLLC tax figures", body: "The entity owes the PPRT at the entity level &mdash; even a pass-through &mdash; a C-corp practice faces a 9.5% combined rate, and the PTE election is worth modeling; without clean revenue and payroll figures none of it can be computed accurately." },
  ],
  handle: [
    { num: "01", title: "Insurance-AR reconciliation", body: "Collected reconciled to billed &mdash; contractual adjustments, denials, and clawbacks accounted for &mdash; from billing summaries, not patient records.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Provider &amp; staff payroll", body: "Clean payroll for providers and staff with 4.95% Illinois withholding, W-2 and contractor arrangements handled, coordinated with your payroll provider.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "03", title: "Entity &amp; PPRT figures", body: "Revenue, payroll, and expenses kept clean so your CPA can compute the PPRT and support the PTE position for the medical corp, S-corp, or PLLC.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "04", title: "Illinois-correct chart of accounts", body: "A practice chart of accounts that tracks Illinois net income for the PPRT and separates collected revenue cleanly from billed.", href: "/find-an-accountant/illinois/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { num: "05", title: "Provider-level profitability", body: "Reporting that shows profitability by provider or location so compensation and capacity decisions rest on real numbers.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "06", title: "Monthly close that ties", body: "A monthly close with collections reconciled and payroll clean &mdash; CPA-ready and decision-ready.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  integrations: [
    "Financial exports from your practice-management / EHR system",
    "QuickBooks Online or hosted Desktop &mdash; your file",
    "Gusto, ADP, and healthcare payroll providers",
    "Merchant and patient-payment processors (summary level)",
    "Bill.com for vendor and supply AP",
    "Payer remittance summaries (financial data only)",
  ],
  integrationsNote: "We reconcile from the financial summaries your systems produce &mdash; deposits, remittance totals, payroll &mdash; never from patient records, PHI, or EHR clinical data.",
  process: [
    { phase: "Step 1", title: "Free practice review", body: "A Certified ProAdvisor reviews your collections reconciliation, payroll, and entity setup &mdash; from financial data only, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly." },
    { phase: "Step 3", title: "Reconcile &amp; clean", body: "Insurance AR reconciled to collected, payroll cleaned, PPRT and PTE figures organized &mdash; from financial summaries." },
    { phase: "Step 4", title: "Monthly collected-revenue close", body: "A monthly close showing real collected revenue and provider profitability, CPA-ready." },
  ],
  advisoryBody: [
    "When collections reconcile and payroll is clean, the decisions get real: which payers and services actually pay, whether to add a provider or location, where overhead is outrunning collected revenue, and whether the PTE election is worth making &mdash; answered from numbers that tie, not billed figures that flatter.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, including PPRT/PTE planning in coordination with your CPA. We keep the books from financial data; your CPA files; we never touch PHI.",
  ],
  faq: [
    { q: "What does Illinois healthcare accounting include?", a: "Insurance-AR and reimbursement reconciliation (collected vs billed), provider and staff payroll with 4.95% Illinois withholding, and the medical-corporation/S-corp/PLLC entity-tax figures &mdash; Illinois net income tracked for the entity-level PPRT, with the PTE position kept supportable &mdash; in your own QuickBooks file, from financial data only. We keep the books; your CPA files." },
    { q: "Do you access patient records or PHI?", a: "No &mdash; this is a firm boundary. We work strictly from financial data: deposits, payer remittance totals at the summary level, payroll, and expenses. We never access protected health information, patient records, or the clinical side of your EHR. The financial summaries your systems export are all we need, and they contain no PHI." },
    { q: "How do you reconcile insurance reimbursement against billing?", a: "We reconcile what was actually collected against what was billed, accounting for contractual adjustments, denials, and clawbacks, so your books show real collected revenue rather than billed revenue that overstates the picture. The data comes from your billing system&rsquo;s financial summaries and your deposits &mdash; not from patient-level records." },
    { q: "How is an Illinois medical or dental practice taxed?", a: "Illinois has a flat 4.95% personal income tax on the owners. The practice entity &mdash; commonly a medical corporation, S-corp, or PLLC &mdash; also owes the entity-level Personal Property Replacement Tax (PPRT): 1.5% for pass-throughs and 2.5% for C-corps, and yes, pass-throughs owe it at the entity level. A C-corp practice faces a 9.5% combined rate, and Illinois offers a permanent Pass-Through Entity (PTE) election worth modeling. The entity type and election decide it, so your CPA confirms how it applies. We keep the revenue, payroll, and expense figures clean so the PPRT computation is straightforward; your CPA computes and files." },
    { q: "Can you handle payroll for multiple providers?", a: "Yes &mdash; we keep payroll clean for multiple providers and staff with 4.95% Illinois withholding, including mixed W-2 employee and contractor arrangements and benefits, coordinated with your payroll provider. Practice payroll is one of the most error-prone areas, so getting it right and reconciled every period matters." },
    { q: "Do you work in my own QuickBooks file across Illinois?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named ProAdvisor on the same file every month across all 102 Illinois counties, reconciling from the financial exports your practice-management system produces." },
    { q: "Do you file my Illinois taxes or handle HIPAA compliance?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready from financial data and coordinate with your CPA, who files the Illinois income tax and the PPRT and makes any PTE election. We don&rsquo;t access PHI, provide HIPAA or regulatory-compliance advice, or represent clients before the Illinois Department of Revenue, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois replacement tax help", body: "Keep Illinois net income clean so the PPRT and PTE position are supportable for your practice entity.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { title: "Illinois monthly bookkeeping", body: "Keep collections and payroll reconciled with a recurring monthly close.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Illinois QuickBooks accountant", body: "A named ProAdvisor on your practice file every month, all 102 counties.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "Healthcare accounting (national)", body: "Our global healthcare industry overview for the broader playbook.", href: "/accounting/industries/healthcare/", cta: "National overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/industries/healthcare/",
    name: "Illinois Healthcare & Medical Practice Accounting",
    description: "Accounting for Illinois medical, dental, and healthcare practices — insurance-AR reconciliation, provider payroll, and the medical-corp/S-corp/PLLC entity tax including the PPRT. Books only, no PHI access; does not file Illinois taxes.",
    serviceName: "Illinois Healthcare & Medical Practice Accounting",
    serviceType: "Healthcare industry bookkeeping services",
    serviceDesc: "Bookkeeping for Illinois medical, dental, and healthcare practices — insurance-AR and reimbursement reconciliation (collected vs billed, from financial summaries only), provider and staff payroll with 4.95% Illinois withholding, and the medical-corporation/S-corp/PLLC entity-tax figures (Illinois net income tracked for the entity-level Personal Property Replacement Tax, the 9.5% combined C-corp rate, and the permanent PTE election), kept CPA-ready. Works strictly from financial data with no access to PHI or medical records. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois taxes, make the PTE election, provide HIPAA or clinical advice, or represent clients — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois medical, dental, and healthcare practices across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

/* /find-an-accountant/illinois/industries/professional-services/ — IL INDUSTRY CHILD.
 * t-location + heroLight. partials/state-industry-body.njk. GENUINELY IL×prof-services: matter/project/client
 * profitability (utilization, realization, WIP, fixed-fee vs hourly), IOLTA trust-RECORD keeping for Illinois
 * law firms (the Lawyers Trust Fund of Illinois administers IOLTA; records only — never hold/disburse client
 * funds), partner draws / owner comp in S-corps/partnerships/PLLCs, entity tax (the PPRT at 1.5% pass-through /
 * 2.5% C-corp, the PTE election as a 4.95% SALT-cap workaround, flat 4.95% personal income tax). HONESTY:
 * trust-fund boundary explicit; IDOR / Lawyers Trust Fund of Illinois + CPA; not Intuit; does not file IL
 * returns, make the PTE election, give legal/ethics advice, or represent. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; Records only &mdash; never holds client or trust funds &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/industries/professional-services/",
  slug: "il-ind-profservices",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Illinois Professional Services & Law Firm Accounting · TechBrot",
  description: "Accounting for Illinois consultancies, agencies & law firms across all 102 counties — matter & project profitability, IOLTA trust records, partner draws, the PPRT. Records only. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Industries", href: "/find-an-accountant/illinois/industries/" },
    { name: "Professional Services" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Professional Services Accounting",
    heading: "Illinois professional-services accounting that shows which work pays.",
    subheading: "Illinois consultancies, agencies, and law firms run on billable time, matters, and &mdash; for firms &mdash; client trust accounts. We track matter and project profitability, keep IOLTA trust records accurate for Illinois law firms, handle partner draws, and keep the entity-level PPRT and PTE figures clean &mdash; by a named Certified ProAdvisor, all 102 counties. We keep the records; we never hold or disburse client trust funds, and your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Records only &middot; never holds funds"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor accounting for Illinois consultancies, agencies, and law firms</strong> &mdash; matter and project profitability, IOLTA trust-account record-keeping for Illinois law firms, partner-draw tracking, and clean entity-level PPRT and PTE figures, in your own QuickBooks file across all 102 counties. We keep the records; we never hold, control, or disburse client trust funds. The full Illinois professional-services summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois references (the Personal Property Replacement Tax; the PTE election; the flat 4.95% income tax; IOLTA trust-account principles administered by the Lawyers Trust Fund of Illinois) reflect rules current as of the review date. TechBrot keeps books and records only; it does not hold client trust funds, file Illinois taxes, make the PTE election, or provide legal advice.",
  },
  ctaBand: {
    eyebrow: "Illinois professional-services firms start here",
    heading: "See which clients, matters, and partners actually pay.",
    lede: "Book a free discovery call. We&rsquo;ll review your matter/project tracking, trust records, and partner setup, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; keeps records only, never holds client funds; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Illinois professional-services accounting, plainly.",
    aiHeading: "Illinois professional-services accounting, in five questions.",
    challengesEyebrow: "Why Illinois professional-services books break",
    challengesHeading: "Three places Illinois firms lose the numbers.",
    challengesLede: "Utilization, trust records, and partner draws are where it goes wrong. Knowing which one you&rsquo;re in tells us where to start.",
    handleHeading: "Illinois professional-services accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your matters and partners, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
    integrationsHeading: "Connected to how you bill.",
    processHeading: "From blended revenue to matter-level profit.",
    processLede: "Every Illinois professional-services engagement follows the same rhythm &mdash; books accurate first, profitability visibility second, advisory third.",
    advisoryHeading: "Matter-level profit is the start. Partner returns are the point.",
    faqHeading: "Illinois professional-services accounting questions.",
    relatedHeading: "Related Illinois services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides accounting for Illinois consultancies, agencies, and law firms</strong> &mdash; in your own QuickBooks file by a named Certified ProAdvisor, across all 102 counties. The job is to show which matters, projects, and partners actually make money, and to keep the trust and tax records clean.",
    "Professional services carry specific demands. Firms bill on <strong>matters and projects</strong>, so profitability has to be tracked at that level &mdash; billable utilization, realization, work in progress, and the gap between fixed-fee and hourly engagements &mdash; not just company-wide. Illinois law firms handle <strong>client trust money</strong> under IOLTA rules (the <strong>Lawyers Trust Fund of Illinois</strong> administers the IOLTA program); we keep the trust/escrow records and the three-way reconciliation accurate, but we never hold, control, or disburse those funds &mdash; that stays with the firm and its bank. <strong>Partner draws</strong> and owner compensation in S-corps, partnerships, and PLLCs need clean tracking. And Illinois layers an entity-level tax: even pass-throughs owe the <strong>Personal Property Replacement Tax (PPRT)</strong> &mdash; 1.5% on S-corps and partnerships, 2.5% on C-corps &mdash; while the permanent <strong>PTE election</strong> lets firms pay a 4.95% entity-level tax as a federal SALT-cap workaround, on top of the flat 4.95% personal income tax. We keep all of it CPA-ready. We keep the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Illinois professional-services accounting?", a: "<strong>Matter and project profitability tracking, IOLTA trust-account record-keeping for law firms, partner-draw tracking, and clean PPRT and PTE figures</strong> &mdash; for Illinois consultancies, agencies, and law firms, in your own QuickBooks file across all 102 counties. We keep the records; we never hold client funds; your CPA files." },
    { q: "Do you hold or manage client trust (IOLTA) funds?", a: "<strong>No.</strong> We keep the trust-account records and perform the three-way reconciliation that IOLTA rules require, but we never take custody of, hold, control, or disburse client trust funds. The IOLTA program for Illinois lawyers is administered by the <strong>Lawyers Trust Fund of Illinois</strong>; the funds stay in the firm&rsquo;s trust account, under the firm&rsquo;s control and its bank. We keep the books behind them accurate." },
    { q: "How do you track matter and project profitability?", a: "We tie time, costs, and billing to each <strong>matter or project</strong> &mdash; tracking billable utilization, realization, and work in progress, and separating fixed-fee from hourly engagements &mdash; so you see real profitability per engagement and per client, not a blended firm number that hides which work pays." },
    { q: "How is an Illinois professional firm taxed?", a: "Illinois has a <strong>flat 4.95% personal income tax</strong>, and even pass-throughs owe the entity-level <strong>Personal Property Replacement Tax (PPRT)</strong> &mdash; 1.5% on S-corps and partnerships, 2.5% on C-corps. A firm can also make the permanent <strong>PTE election</strong> to pay a 4.95% entity-level tax as a SALT-cap workaround. The entity election decides; we keep the figures clean so your CPA can compute, elect, and file. We track it; your CPA files." },
    { q: "Do you file Illinois taxes or provide legal advice?", a: "No &mdash; we keep the books and trust records CPA-ready; your CPA files, makes the PTE election, and handles representation, and your firm handles legal and ethics matters. We&rsquo;re independent, don&rsquo;t hold client funds, file returns, or represent clients, and aren&rsquo;t affiliated with Intuit." },
  ],
  challenges: [
    { signal: "Utilization", title: "Work that doesn&rsquo;t actually pay", body: "Without matter/project-level tracking, a firm sees revenue but not realization, utilization, or which engagements and clients make money &mdash; and the unprofitable fixed-fee work hides in the blended number." },
    { signal: "Trust records", title: "Trust accounts that don&rsquo;t three-way reconcile", body: "IOLTA rules require accurate trust records and three-way reconciliation &mdash; sloppy records are a compliance risk, even though the funds stay in the firm&rsquo;s hands and its bank, never ours." },
    { signal: "Partner draws", title: "Partner draws &amp; owner-comp figures", body: "Partner draws, guaranteed payments, and owner compensation in S-corps, partnerships, and PLLCs get tangled &mdash; and untangling them is what makes both distributions and the entity-level tax accurate." },
  ],
  handle: [
    { num: "01", title: "Matter &amp; project profitability", body: "Time, costs, and billing tied to each matter or project &mdash; utilization, realization, and WIP &mdash; so real per-engagement and per-client profit is visible.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "IOLTA trust-record keeping", body: "Trust-account records and three-way reconciliation kept accurate for Illinois law firms &mdash; we keep records only, never hold or disburse the funds.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "03", title: "Partner-draw &amp; owner comp", body: "Partner draws, guaranteed payments, and owner compensation in S-corps, partnerships, and PLLCs tracked cleanly so distributions and equity are clear.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04", title: "PPRT &amp; PTE figures", body: "Illinois net income tracked for the entity-level PPRT, and the books structured so your CPA can model and support the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "05", title: "Fixed-fee vs hourly WIP", body: "Work-in-progress and unbilled time tracked across fixed-fee and hourly engagements so revenue recognition and realization are honest.", href: "/find-an-accountant/illinois/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
    { num: "06", title: "Firm &amp; partner reporting", body: "Reporting that shows firm profit and per-partner economics &mdash; CPA-ready and decision-ready.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],
  integrations: [
    "Clio, PracticePanther, and legal practice-management",
    "Harvest, Toggl, and time-tracking tools",
    "QuickBooks Online or hosted Desktop &mdash; your file",
    "Gusto, ADP, and payroll providers",
    "Bill.com for vendor AP",
    "LawPay and professional payment processors",
  ],
  integrationsNote: "We reconcile alongside the practice-management and time-tracking tools you already run &mdash; the books read from how you bill. We never take custody of client trust funds.",
  process: [
    { phase: "Step 1", title: "Free firm &amp; trust review", body: "A Certified ProAdvisor reviews your matter/project tracking, trust records, and partner setup &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly." },
    { phase: "Step 3", title: "Build profitability &amp; reconcile trust", body: "Matter/project tracking set up, trust records three-way reconciled, partner draws and owner-comp figures cleaned." },
    { phase: "Step 4", title: "Monthly matter-profit close", body: "A monthly close showing matter-level profit and partner economics, CPA-ready &mdash; with trust records reconciled." },
  ],
  advisoryBody: [
    "When matter profitability is real and trust records reconcile, the decisions get real: which clients and service lines to grow, how to set partner comp, whether to add a practice area, where utilization and realization are leaking margin &mdash; answered from numbers that tie.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, in coordination with your CPA, including PPRT/PTE planning. We keep the books and trust records; your CPA files; we never hold your client funds.",
  ],
  faq: [
    { q: "What does Illinois professional-services accounting include?", a: "Matter and project profitability tracking (utilization, realization, WIP, fixed-fee vs hourly), IOLTA trust-account record-keeping and three-way reconciliation for law firms, partner-draw and owner-compensation tracking, and clean PPRT and PTE figures &mdash; in your own QuickBooks file across all 102 counties. We keep the books and records; we never hold client trust funds; your CPA files." },
    { q: "Do you hold client or trust funds?", a: "No &mdash; this is a firm boundary, records only. We keep the trust-account records and perform the three-way reconciliation that IOLTA rules require, so your trust accounting is accurate and audit-ready. But we never take custody of, hold, control, or disburse client or trust funds &mdash; those stay in the firm&rsquo;s trust account under the firm&rsquo;s control and its bank. The IOLTA program for Illinois lawyers is administered by the Lawyers Trust Fund of Illinois; we keep the books behind the account right, and the custody and ethics compliance stay with the firm." },
    { q: "How do you track matter and project profitability?", a: "We tie time, costs, and billing to each matter or project &mdash; tracking billable utilization, realization rates, and work in progress, and separating fixed-fee engagements from hourly ones &mdash; so you see real profitability per engagement and per client, rather than a blended firm-wide number. That surfaces which work, clients, and service lines actually make money and which quietly run at a loss, pulling from your practice-management and time-tracking tools." },
    { q: "How is an Illinois law firm or consultancy taxed?", a: "Illinois has a flat 4.95% personal income tax. Even pass-throughs owe the entity-level Personal Property Replacement Tax (PPRT) &mdash; 1.5% on S-corps and partnerships, 2.5% on C-corps &mdash; which surprises owners new to the state. Firms can also make the permanent Pass-Through Entity (PTE) election to pay a 4.95% entity-level tax as a federal SALT-cap workaround. The entity election and PTE decision determine the picture, so your CPA confirms how it applies. We keep the revenue and expense figures clean so the computation is straightforward; your CPA computes, elects, and files." },
    { q: "How do you handle partner draws and owner compensation?", a: "We track partner draws, guaranteed payments, and owner compensation across S-corps, partnerships, and PLLCs cleanly and distinctly, so distributions, capital accounts, equity, and the figures behind the PPRT and PTE are all clear. That keeps both the partners&rsquo; economics and the entity-level tax accurate, instead of tangled in a single owner-equity catch-all." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named ProAdvisor on the same file every month, connected to your practice-management and time-tracking tools rather than proprietary software, across all 102 Illinois counties." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books and trust records CPA-ready and coordinate with your CPA or EA, who files the Illinois income tax, the PPRT, and any PTE election, and who represents you before the Illinois Department of Revenue. We don&rsquo;t file returns, make the PTE election, hold client funds, provide legal or ethics advice, or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: "This page reflects how TechBrot handles Illinois professional-services and law-firm engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois businesses remotely across all 102 counties, and reviewed for technical accuracy on matter/project profitability, IOLTA trust-account record-keeping principles (the IOLTA program is administered by the Lawyers Trust Fund of Illinois), partner-draw and owner-compensation tracking, and the entity-level Personal Property Replacement Tax and the PTE election, current as of the date below and reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a>. TechBrot keeps books and trust records only and reconciles trust accounts; it never holds, controls, or disburses client or trust funds, does not file Illinois taxes, make the PTE election, or provide legal or ethics advice, and does not represent clients before the Illinois Department of Revenue or any authority. Rates and the PTE rules change; confirm current figures with the Department and your CPA. Not affiliated with Intuit Inc.",
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois replacement tax help", body: "Keep Illinois net income tracked for the entity-level PPRT and PTE-ready for your firm.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { title: "Illinois monthly bookkeeping", body: "Keep matter profitability and trust records current with a recurring monthly close.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Illinois QuickBooks setup", body: "Set up matter/project tracking and trust-record keeping from day one.", href: "/find-an-accountant/illinois/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { title: "Professional services (national)", body: "Our global industries overview for the broader professional-services playbook.", href: "/accounting/industries/", cta: "Industry overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/industries/professional-services/",
    name: "Illinois Professional Services & Law Firm Accounting",
    description: "Accounting for Illinois consultancies, agencies, and law firms across all 102 counties — matter & project profitability, IOLTA trust records, partner draws, and the entity-level PPRT. Keeps records only, never holds client or trust funds; does not file Illinois taxes.",
    serviceName: "Illinois Professional Services & Law Firm Accounting",
    serviceType: "Professional services industry bookkeeping",
    serviceDesc: "Bookkeeping for Illinois consultancies, agencies, and law firms — matter and project profitability tracking (utilization, realization, WIP, fixed-fee vs hourly), IOLTA trust-account record-keeping and three-way reconciliation for law firms (records only; no fund custody), partner-draw and owner-compensation tracking across S-corps, partnerships, and PLLCs, and clean entity-level Personal Property Replacement Tax and PTE figures, kept CPA-ready across all 102 counties. Independent Certified QuickBooks ProAdvisor firm; does not hold or disburse client or trust funds, file Illinois taxes, make the PTE election, provide legal advice, or represent clients before the Illinois Department of Revenue — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois consultancies, agencies, and law firms across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

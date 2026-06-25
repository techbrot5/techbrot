/* /find-an-accountant/illinois/state-tax-notice-help/ — IL HONEST-TRIAGE (tax cluster).
 * t-bofu. Shared body: partials/state-triage-body.njk. Sheet-7 honest-triage / §8 honesty —
 * the #1 gate on this page. IL agencies: IDOR (income/PPRT and sales/use ST-1), City of Chicago
 * Dept of Finance (lease/"cloud" + amusement city taxes), IDES (payroll/worker classification),
 * IRS (federal). Disclosure ABOVE FOLD; we are NOT a tax authority, NOT a CPA/EA/attorney;
 * contacting us reaches no agency; we do NOT respond to notices, represent, advise, or file/
 * protest — the licensed professional does. We do the BOOKS work behind it. Educational only;
 * not legal/tax advice. Founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_REVIEW_PROSE = "This page is reviewed and maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois businesses across all 102 counties. Illinois notice types and processes reference the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a>, the City of Chicago Department of Finance, and <a href=\"https://ides.illinois.gov/\" rel=\"noopener nofollow\">IDES</a> guidance current as of the date below. This page is educational; it is not legal or tax advice. For a notice with protest rights or audit exposure, work with a CPA, EA, or tax attorney &mdash; supported by reconciled books. TechBrot does not respond to notices, file returns or protests, or represent clients before any tax authority.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue, the City of Chicago Department of Finance &amp; IDES &middot; Educational only; not legal or tax advice &middot; No notice-response or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/state-tax-notice-help/",
  slug: "il-svc-notice",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  title: "Illinois Tax Notice Help · IDOR, Chicago, IRS · TechBrot",
  description: "Got an Illinois tax notice from the IDOR, Chicago, IDES, or IRS? We reconcile the records behind it so your CPA can respond. Independent — not a tax agency.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "State Tax Notice Help" },
  ],
  hero: {
    eyebrow: "Illinois &middot; Tax Notices",
    heading: "Got an Illinois tax notice? Read it right, then act.",
    subheading: "Which agency sent it &mdash; the Illinois Department of Revenue, the City of Chicago, IDES, or the IRS &mdash; and the deadline near the top matter most. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm; we help you tell a simple information request from a real assessment and reconcile the books to find out whether you actually owe what the notice claims, then hand your CPA, EA, or tax attorney clean figures to respond with. We do not respond to notices on your behalf or represent you before any Illinois tax agency.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  inBrief: {
    text: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not the Illinois Department of Revenue, the City of Chicago, IDES, the IRS, or any government agency, and not a CPA, EA, or tax attorney.</strong> We do <strong>not</strong> respond to notices on your behalf, do <strong>not</strong> represent you before any Illinois tax agency, do <strong>not</strong> provide tax or legal advice, and do <strong>not</strong> file returns or protests. What we do: help you understand what the notice concerns, reconcile the underlying books and records for the period, identify discrepancies, and assemble a clean, documented package your licensed professional uses to respond. The licensed professional responds and represents; we do the books work behind it. The full Illinois notice summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois notice types and processes verified against Illinois Department of Revenue, City of Chicago Department of Finance, and IDES guidance. Educational only; not legal or tax advice.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Send us the notice and the period &mdash; we&rsquo;ll find the real number.",
    lede: "Book a discovery call to scope the records work and coordinate with your tax pro. We&rsquo;ll help you identify the notice type and agency, reconcile the period it covers, and hand you and your CPA, EA, or tax attorney documented figures to work from &mdash; before the deadline. We don&rsquo;t respond to the notice, file the protest, or represent you; your licensed professional does. No pitch.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  slugName: "Illinois",
  disclosure: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not the Illinois Department of Revenue, the City of Chicago, IDES, the IRS, or any government agency, and not a CPA, EA, or tax attorney.</strong> Contacting us does not reach any Illinois tax agency. We do not respond to notices on your behalf, do not represent you before any agency, do not provide tax or legal advice, and do not file returns or protests. We help you understand the notice, reconcile the underlying books, and assemble clean figures your licensed professional uses to respond. This page is educational; it is not legal or tax advice.",
  boundariesDo: "help you understand which agency the notice is from and what it concerns, reconcile the period&rsquo;s books and records, identify discrepancies, and assemble a documented package for your CPA / EA / tax attorney.",
  boundariesDont: "respond to the notice, file a return or protest, represent you before the IDOR, the City of Chicago, IDES, or the IRS, or give tax or legal advice &mdash; your licensed professional does all of that.",
  callBreakout: {
    title: "Got an Illinois tax notice with a deadline?",
    sub: "A Certified ProAdvisor helps you read it and reconciles the period&rsquo;s books so your CPA, EA, or tax attorney can respond &mdash; fixed-fee, in writing. We do not respond or represent; we get the figures right.",
  },
  tldr: "An Illinois tax notice could be from the <strong>IDOR</strong> (income tax, the Personal Property Replacement Tax, or sales/use tax on the ST-1), the <strong>City of Chicago Department of Finance</strong> (the lease/&ldquo;cloud&rdquo; tax or the amusement tax), <strong>IDES</strong> (payroll or worker classification), or the <strong>IRS</strong> (federal) &mdash; and what to do depends entirely on which agency and which notice it is. Many notices are really <em>books</em> problems: a flat statewide sales-tax rate used instead of the correct combined rate by jurisdiction, a return that didn&rsquo;t tie to the books, PPRT-relevant net income never tracked cleanly, the Chicago lease/cloud tax commingled with sales tax. <strong>TechBrot is an independent bookkeeping firm &mdash; not a tax agency and not a CPA, EA, or attorney.</strong> We help you identify the notice, reconcile the period it covers, and assemble documented figures; your CPA, EA, or tax attorney responds and represents you. Educational only; not legal or tax advice.",
  aiSummary: [
    { q: "I got an Illinois tax notice &mdash; what do I do first?", a: "<strong>Identify which agency sent it (the IDOR, the City of Chicago, IDES, or the IRS) and find the deadline near the top.</strong> Then reconcile the period&rsquo;s books to see whether you actually owe what&rsquo;s claimed. TechBrot helps with the identification and the books; your CPA, EA, or tax attorney responds and represents you. We are not a tax agency and not a licensed tax professional." },
    { q: "Does TechBrot respond to the notice for me?", a: "<strong>No.</strong> We are an independent bookkeeping and ProAdvisor firm &mdash; we do not respond to notices, file returns or protests, represent you before the IDOR, the City of Chicago, IDES, or the IRS, or give tax or legal advice. We reconcile the books behind the notice and hand your licensed professional clean, documented figures to respond with." },
    { q: "Which Illinois agency sent my notice?", a: "The <strong>IDOR</strong> handles income tax, the Personal Property Replacement Tax (PPRT), and sales/use tax (the ST-1); the <strong>City of Chicago Department of Finance</strong> handles Chicago city taxes like the lease/&ldquo;cloud&rdquo; tax and the amusement tax; <strong>IDES</strong> handles payroll and worker-classification matters; and the <strong>IRS</strong> handles federal. The agency named on the notice tells you what it really is &mdash; we help you match it before anything else." },
    { q: "Why do so many notices turn out to be books problems?", a: "Because Illinois taxes are sourced and layered in ways generic bookkeeping misses &mdash; a flat statewide sales-tax rate instead of the correct combined rate by jurisdiction, a return that didn&rsquo;t tie, PPRT-relevant net income never tracked, the Chicago cloud tax mixed in with sales tax. Reconciling the period often shows the real number is different from the notice. We do that reconciliation; your CPA acts on it." },
    { q: "Can you help before the deadline?", a: "Usually &mdash; we prioritize notices with deadlines and reconcile the period quickly so your licensed professional has documented figures in time to respond. The response itself is theirs to file; we make sure it rests on accurate books." },
  ],
  problemTypes: [
    { form: "IDOR", title: "Income or Replacement Tax notice", body: "An IDOR income-tax or Personal Property Replacement Tax (PPRT) notice &mdash; balance due, a return-change notice, or a demand to file. We reconcile the period and the Illinois net income behind it; your CPA responds and files." },
    { form: "IDOR", title: "Sales &amp; use tax (ST-1) notice", body: "An IDOR notice or audit on sales/use tax filed on the ST-1 &mdash; often a flat-rate-vs-combined-rate or return-tie issue. We rebuild and reconcile the sales-tax records behind it; your CPA responds." },
    { form: "IDES", title: "Payroll / worker-classification notice", body: "An IDES payroll or unemployment notice, or a worker-classification matter. We assemble clean W-2/1099 and payroll records; your CPA or employment attorney represents you." },
    { form: "Chicago", title: "Chicago city-tax notice", body: "A City of Chicago Department of Finance notice on the lease/&ldquo;cloud&rdquo; tax or the amusement tax &mdash; often the cloud tax commingled with sales tax. We separate and reconcile the records; your CPA responds." },
    { form: "Demand", title: "Demand to file a return", body: "The agency believes a return is missing. We reconcile the period so the actual figures are clear; your CPA prepares and files the return." },
    { form: "Audit", title: "Audit / balance-due notice", body: "A records request, audit notice, or balance-due / collection notice. We reconcile and assemble a documented package and help confirm whether the books support the balance; your CPA or tax attorney manages the audit, payment plan, or dispute." },
  ],
  problemTypesNote: "Notice types are educational and current as of the review date, verified against Illinois Department of Revenue, City of Chicago, and IDES guidance. The agency named on your notice determines the correct response &mdash; confirm with your CPA, EA, or tax attorney. TechBrot reconciles the books behind the notice; it does not respond or represent.",
  booksBody: [
    "More Illinois notices than you&rsquo;d expect aren&rsquo;t really tax disputes &mdash; they&rsquo;re bookkeeping problems that surfaced as a notice. A flat statewide sales-tax rate used instead of the correct combined rate by jurisdiction under-collects until the IDOR notices. A return that didn&rsquo;t tie to the books triggers an IDOR change notice. PPRT-relevant net income that was never tracked cleanly makes a Replacement Tax notice hard to answer. And the Chicago lease/&ldquo;cloud&rdquo; tax commingled with sales tax draws a City of Chicago notice.",
    "That&rsquo;s why the first move is almost always to reconcile the period the notice covers. Often the real number is different from what the notice claims &mdash; sometimes lower &mdash; and your licensed professional can respond with documented figures instead of guesses. We do that reconciliation; we do not respond or represent.",
  ],
  booksNote: "<strong>Trust-fund taxes (collected sales tax, withheld payroll) are taken seriously.</strong> If a notice involves collected sales tax or withheld payroll tax, treat it with urgency and get your CPA, EA, or tax attorney involved immediately &mdash; we reconcile the records fast to support them.",
  scopeDo: [
    "Help you identify the agency, notice type, and deadline",
    "Reconcile the period&rsquo;s books and records",
    "Identify discrepancies between the books and the notice",
    "Rebuild sales-tax, payroll, or Chicago cloud-tax records where that&rsquo;s the root cause",
    "Assemble a clean, documented package for your tax professional",
  ],
  scopeDont: [
    "Respond to the notice or file a return or protest",
    "Represent you before the IDOR, the City of Chicago, IDES, or the IRS",
    "Negotiate a settlement or payment plan",
    "Give tax or legal advice",
  ],
  copy: {
    aiHeading: "Illinois tax notices, in five questions.",
    typesEyebrow: "Know which agency &mdash; and what you&rsquo;re holding",
    typesHeading: "Common Illinois business tax notices.",
    typesLede: "The agency name is usually printed at the top. Match it here before you do anything else &mdash; the right response depends entirely on which notice this is. Identifying the type and deadline is where we start; your CPA, EA, or tax attorney responds.",
    booksEyebrow: "The most common root cause",
    booksHeading: "Why so many Illinois notices are really books problems",
    scopeHeading: "Who does what when a notice arrives.",
    scopeLede: "A clean line between the books work we do and the response and representation only a licensed professional can do.",
    scopeDoTitle: "TechBrot handles",
    scopeDontTitle: "Your CPA or tax attorney handles",
    faqHeading: "Illinois tax notice questions.",
  },
  faq: [
    { q: "I received an Illinois tax notice &mdash; what should I do first?", a: "Identify which agency sent it &mdash; the IDOR (income, the PPRT, or sales/use on the ST-1), the City of Chicago Department of Finance (lease/cloud or amusement tax), IDES (payroll/worker classification), or the IRS (federal) &mdash; and find the deadline near the top. Then reconcile the period&rsquo;s books to see whether you actually owe what&rsquo;s claimed. TechBrot helps with identification and the books; your CPA, EA, or tax attorney responds and represents you. We are an independent bookkeeping firm, not a tax agency and not a licensed tax professional." },
    { q: "Does TechBrot respond to the notice or represent me?", a: "No. We are an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we do not respond to notices, file returns or protests, represent you before the IDOR, the City of Chicago, IDES, or the IRS, or provide tax or legal advice. What we do is reconcile the books behind the notice and assemble clean, documented figures your licensed professional uses to respond. The response and representation are theirs; the books work is ours." },
    { q: "How do I tell which Illinois agency my notice is from?", a: "The agency is named at the top. The Illinois Department of Revenue (IDOR) handles income tax, the Personal Property Replacement Tax, and sales/use tax filed on the ST-1; the City of Chicago Department of Finance handles Chicago city taxes such as the lease/&ldquo;cloud&rdquo; tax and the amusement tax; IDES handles payroll and worker-classification matters; and the IRS handles federal. The agency determines what the notice is and how it must be answered &mdash; we help you match it before anything else." },
    { q: "Why would a tax notice really be a bookkeeping problem?", a: "Because Illinois taxes are sourced and layered in ways generic bookkeeping misses. A flat statewide sales-tax rate used instead of the correct combined rate by jurisdiction under-collects until the IDOR sends an ST-1 notice; a return that didn&rsquo;t tie to the books triggers an IDOR change notice; PPRT-relevant net income that was never tracked cleanly makes a Replacement Tax notice hard to answer; and the Chicago lease/cloud tax commingled with sales tax draws a City of Chicago notice. Reconciling the period often shows the real number differs from the notice &mdash; we do that reconciliation, and your CPA acts on it." },
    { q: "What if the notice is from the City of Chicago rather than the state?", a: "Chicago city taxes &mdash; the Personal Property Lease Transaction Tax (the &ldquo;cloud&rdquo; tax) and the amusement tax &mdash; are administered by the City of Chicago Department of Finance, not the IDOR, so they&rsquo;re a separate process from a state notice. The most common books cause is the Chicago cloud tax being commingled with Illinois sales tax in QuickBooks. We separate and reconcile those records so your CPA can respond to the city with documented figures." },
    { q: "What if the notice involves sales tax or payroll withholding?", a: "Treat it with urgency. Collected sales tax and withheld payroll tax are trust-fund taxes that agencies pursue aggressively, sometimes with personal liability. Get your CPA, EA, or tax attorney involved immediately; we reconcile the underlying records fast to support them. We do not respond or represent &mdash; we get the figures right behind your professional." },
    { q: "How much does notice-records help cost?", a: "Fixed-fee against a written scope, based on the period and the records involved. You get the exact fee in writing within 3 business days &mdash; and because we&rsquo;re reconciling books, not negotiating with an agency, the scope is bounded and clear." },
    { q: "Is this page legal or tax advice?", a: "No &mdash; it is educational only and is not legal or tax advice. How to respond to a specific Illinois tax notice depends on the agency, the notice type, and your facts; work with a CPA, EA, or tax attorney. TechBrot keeps the books behind the notice accurate so their response rests on documented figures." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/state-tax-notice-help/",
    name: "Illinois State Tax Notice Help (IDOR · Chicago · IRS)",
    description: "Help understanding an Illinois tax notice from the IDOR, the City of Chicago, IDES, or the IRS and reconciling the books behind it, so your CPA, EA, or tax attorney can respond. Independent bookkeeping firm — not a tax agency; does not respond to notices or represent clients.",
    serviceName: "Illinois Tax-Notice Bookkeeping Support",
    serviceType: "Tax-notice records reconciliation and bookkeeping support",
    serviceDesc: "Bookkeeping support for Illinois businesses that received an IDOR, City of Chicago, IDES, or IRS notice — identifying the notice type and deadline, reconciling the period's books and records, and assembling a documented package for the client's CPA, EA, or tax attorney. Educational only; not legal or tax advice. Independent Certified QuickBooks ProAdvisor firm; does not respond to notices, file returns or protests, or represent clients before any tax agency.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses that received a tax notice from the IDOR, the City of Chicago, IDES, or the IRS and need the underlying books reconciled for their tax professional",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

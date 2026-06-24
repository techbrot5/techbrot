/* /find-an-accountant/california/state-tax-notice-help/ â€” CA HONEST-TRIAGE (tax cluster).
 * t-bofu. Shared body: partials/state-triage-body.njk. Sheet-7 honest-triage / Â§8 honesty â€”
 * the #1 gate on this page. CA agencies: FTB (income/franchise), CDTFA (sales/use), EDD
 * (payroll/worker-class). Disclosure ABOVE FOLD; we are NOT a tax authority, NOT a CPA/EA/
 * attorney; contacting us reaches no agency; we do NOT respond to notices, represent, advise,
 * or file/protest â€” the licensed professional does. We do the BOOKS work behind it. Educational
 * only; not legal/tax advice. Founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_REVIEW_PROSE = "This page is reviewed and maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm. California notice types and processes reference <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">FTB</a>, <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a> guidance current as of the date below. This page is educational; it is not legal or tax advice. For a notice with protest rights or audit exposure, work with a CPA, EA, or tax attorney &mdash; supported by reconciled books. TechBrot does not respond to notices, file returns or protests, or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; Educational only; not legal or tax advice &middot; No notice-response or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/state-tax-notice-help/",
  slug: "ca-svc-notice",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  title: "California State Tax Notice Help (FTB Â· CDTFA Â· EDD) Â· TechBrot",
  description: "Got a California tax notice from the FTB, CDTFA, or EDD? We help you understand it and reconcile the records behind it so your CPA, EA, or tax attorney can respond. Independent bookkeeping firm â€” not a tax agency. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "State Tax Notice Help" },
  ],
  hero: {
    eyebrow: "California &middot; Tax Notices",
    heading: "Got a California tax notice? Read it right, then act.",
    subheading: "Which agency sent it &mdash; the FTB, the CDTFA, or the EDD &mdash; and the deadline near the top matter most. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm; we help you tell a simple information request from a real assessment and reconcile the books to find out whether you actually owe what the state claims, then hand your CPA, EA, or tax attorney clean figures to respond with. We do not respond to notices on your behalf or represent you before any California tax agency.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  inBrief: {
    text: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not the California Franchise Tax Board, the CDTFA, the EDD, or any government agency, and not a CPA, EA, or tax attorney.</strong> We do <strong>not</strong> respond to notices on your behalf, do <strong>not</strong> represent you before any California tax agency, do <strong>not</strong> provide tax or legal advice, and do <strong>not</strong> file returns or protests. What we do: help you understand what the notice concerns, reconcile the underlying books and records for the period, identify discrepancies, and assemble a clean, documented package your licensed professional uses to respond. The licensed professional responds and represents; we do the books work behind it. The full California notice summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California notice types and processes verified against FTB, CDTFA, and EDD guidance. Educational only; not legal or tax advice.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Send us the notice and the period &mdash; we&rsquo;ll find the real number.",
    lede: "Book a discovery call to scope the records work and coordinate with your tax pro. We&rsquo;ll help you identify the notice type and agency, reconcile the period it covers, and hand you and your CPA, EA, or tax attorney documented figures to work from &mdash; before the deadline. We don&rsquo;t respond to the notice, file the protest, or represent you; your licensed professional does. No pitch.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  slugName: "California",
  disclosure: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not the California Franchise Tax Board, the CDTFA, the EDD, or any government agency, and not a CPA, EA, or tax attorney.</strong> Contacting us does not reach any California tax agency. We do not respond to notices on your behalf, do not represent you before any agency, do not provide tax or legal advice, and do not file returns or protests. We help you understand the notice, reconcile the underlying books, and assemble clean figures your licensed professional uses to respond. This page is educational; it is not legal or tax advice.",
  boundariesDo: "help you understand which agency the notice is from and what it concerns, reconcile the period&rsquo;s books and records, identify discrepancies, and assemble a documented package for your CPA / EA / tax attorney.",
  boundariesDont: "respond to the notice, file a return or protest, represent you before the FTB, CDTFA, or EDD, or give tax or legal advice &mdash; your licensed professional does all of that.",
  callBreakout: {
    title: "Got a California tax notice with a deadline?",
    sub: "A Certified ProAdvisor helps you read it and reconciles the period&rsquo;s books so your CPA, EA, or tax attorney can respond &mdash; fixed-fee, in writing. We do not respond or represent; we get the figures right.",
  },
  tldr: "A California tax notice could be from the <strong>FTB</strong> (income or the $800 franchise tax), the <strong>CDTFA</strong> (sales and use tax), or the <strong>EDD</strong> (payroll or worker classification) &mdash; and what to do depends entirely on which agency and which notice it is. Many notices are really <em>books</em> problems: a district sales-tax rate that was flat instead of by location, a return that didn&rsquo;t tie to the books, contractor pay that looked like wages. <strong>TechBrot is an independent bookkeeping firm &mdash; not a tax agency and not a CPA, EA, or attorney.</strong> We help you identify the notice, reconcile the period it covers, and assemble documented figures; your CPA, EA, or tax attorney responds and represents you. Educational only; not legal or tax advice.",
  aiSummary: [
    { q: "I got a California tax notice &mdash; what do I do first?", a: "<strong>Identify which agency sent it (FTB, CDTFA, or EDD) and find the deadline near the top.</strong> Then reconcile the period&rsquo;s books to see whether you actually owe what&rsquo;s claimed. TechBrot helps with the identification and the books; your CPA, EA, or tax attorney responds and represents you. We are not a tax agency and not a licensed tax professional." },
    { q: "Does TechBrot respond to the notice for me?", a: "<strong>No.</strong> We are an independent bookkeeping and ProAdvisor firm &mdash; we do not respond to notices, file returns or protests, represent you before the FTB, CDTFA, or EDD, or give tax or legal advice. We reconcile the books behind the notice and hand your licensed professional clean, documented figures to respond with." },
    { q: "Which California agency sent my notice?", a: "The <strong>FTB</strong> handles income and the $800 franchise tax; the <strong>CDTFA</strong> handles sales and use tax; the <strong>EDD</strong> handles payroll and worker-classification (AB5) matters. The agency and form number tell you what the notice really is &mdash; we help you match it before anything else." },
    { q: "Why do so many notices turn out to be books problems?", a: "Because California taxes are sourced and classified in ways generic bookkeeping misses &mdash; a flat district sales-tax rate, a return that didn&rsquo;t tie, contractors recorded like employees. Reconciling the period often shows the real number is different from the notice. We do that reconciliation; your CPA acts on it." },
    { q: "Can you help before the deadline?", a: "Usually &mdash; we prioritize notices with deadlines and reconcile the period quickly so your licensed professional has documented figures in time to respond. The response itself is theirs to file; we make sure it rests on accurate books." },
  ],
  problemTypes: [
    { form: "FTB", title: "Franchise Tax Board notice", body: "Income-tax or $800 franchise-tax notices &mdash; balance due, a return-change notice, a demand to file, or entity suspension. We reconcile the period; your CPA responds and files." },
    { form: "CDTFA", title: "Sales &amp; use tax notice", body: "A CDTFA notice or audit on sales/use tax &mdash; often a district-rate or return-tie issue. We rebuild and reconcile the sales-tax records behind it; your CPA responds." },
    { form: "EDD", title: "Payroll / worker-classification notice", body: "An EDD payroll-tax notice or a worker-classification (AB5) audit. We assemble clean W-2/1099 records; your CPA or employment attorney represents you." },
    { form: "Demand", title: "Demand to file a return", body: "The agency believes a return is missing. We reconcile the period so the actual figures are clear; your CPA prepares and files the return." },
    { form: "Audit", title: "Audit / records request", body: "A request for records or an audit notice. We reconcile and assemble a documented package; your CPA or tax attorney manages the audit and represents you." },
    { form: "Balance", title: "Balance-due / collection notice", body: "A balance-due or collection notice. We help confirm whether the books support the balance; your CPA or attorney handles any payment plan or dispute." },
  ],
  problemTypesNote: "Notice types are educational and current as of the review date, verified against FTB, CDTFA, and EDD guidance. The agency and form number on your notice determine the correct response &mdash; confirm with your CPA, EA, or tax attorney. TechBrot reconciles the books behind the notice; it does not respond or represent.",
  booksBody: [
    "More California notices than you&rsquo;d expect aren&rsquo;t really tax disputes &mdash; they&rsquo;re bookkeeping problems that surfaced as a notice. A district sales-tax rate set flat instead of by location under-collects until the CDTFA notices. A return that didn&rsquo;t tie to the books triggers an FTB change notice. Contractors recorded like employees (or vice versa) draw EDD attention.",
    "That&rsquo;s why the first move is almost always to reconcile the period the notice covers. Often the real number is different from what the notice claims &mdash; sometimes lower &mdash; and your licensed professional can respond with documented figures instead of guesses. We do that reconciliation; we do not respond or represent.",
  ],
  booksNote: "<strong>Trust-fund taxes (sales tax, payroll withholding) are taken seriously.</strong> If a notice involves collected sales tax or withheld payroll tax, treat it with urgency and get your CPA, EA, or tax attorney involved immediately &mdash; we reconcile the records fast to support them.",
  scopeDo: [
    "Help you identify the agency, notice type, and deadline",
    "Reconcile the period&rsquo;s books and records",
    "Identify discrepancies between the books and the notice",
    "Rebuild sales-tax or payroll records where that&rsquo;s the root cause",
    "Assemble a clean, documented package for your tax professional",
  ],
  scopeDont: [
    "Respond to the notice or file a return or protest",
    "Represent you before the FTB, CDTFA, or EDD",
    "Negotiate a settlement or payment plan",
    "Give tax or legal advice",
  ],
  copy: {
    aiHeading: "California tax notices, in five questions.",
    typesEyebrow: "Know which agency &mdash; and what you&rsquo;re holding",
    typesHeading: "Common California business tax notices.",
    typesLede: "The agency name and form number are usually printed at the top. Match them here before you do anything else &mdash; the right response depends entirely on which notice this is. Identifying the type and deadline is where we start; your CPA, EA, or tax attorney responds.",
    booksEyebrow: "The most common root cause",
    booksHeading: "Why so many California notices are really books problems",
    scopeHeading: "Who does what when a notice arrives.",
    scopeLede: "A clean line between the books work we do and the response and representation only a licensed professional can do.",
    scopeDoTitle: "TechBrot handles",
    scopeDontTitle: "Your CPA or tax attorney handles",
    faqHeading: "California tax notice questions.",
  },
  faq: [
    { q: "I received a California tax notice &mdash; what should I do first?", a: "Identify which agency sent it &mdash; the FTB (income/franchise), the CDTFA (sales/use), or the EDD (payroll/worker classification) &mdash; and find the deadline near the top. Then reconcile the period&rsquo;s books to see whether you actually owe what&rsquo;s claimed. TechBrot helps with identification and the books; your CPA, EA, or tax attorney responds and represents you. We are an independent bookkeeping firm, not a tax agency and not a licensed tax professional." },
    { q: "Does TechBrot respond to the notice or represent me?", a: "No. We are an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; we do not respond to notices, file returns or protests, represent you before the FTB, CDTFA, or EDD, or provide tax or legal advice. What we do is reconcile the books behind the notice and assemble clean, documented figures your licensed professional uses to respond. The response and representation are theirs; the books work is ours." },
    { q: "How do I tell which California agency my notice is from?", a: "The agency is named at the top: the Franchise Tax Board (FTB) for income and the $800 franchise tax, the California Department of Tax and Fee Administration (CDTFA) for sales and use tax, and the Employment Development Department (EDD) for payroll and worker-classification matters. The agency and form number determine what the notice is and how it must be answered &mdash; we help you match it before anything else." },
    { q: "Why would a tax notice really be a bookkeeping problem?", a: "Because California taxes are sourced and classified in ways generic bookkeeping misses. A district sales-tax rate set flat instead of by location under-collects until the CDTFA sends a notice; a return that didn&rsquo;t tie to the books triggers an FTB change notice; contractors recorded like employees draw EDD attention. Reconciling the period often shows the real number differs from the notice &mdash; we do that reconciliation, and your CPA acts on it." },
    { q: "Can you help before my deadline?", a: "Usually. We prioritize notices with deadlines and reconcile the period quickly so your CPA, EA, or tax attorney has documented figures in time to respond. The response itself is theirs to file &mdash; we make sure it rests on accurate, reconciled books rather than estimates." },
    { q: "What if the notice involves sales tax or payroll withholding?", a: "Treat it with urgency. Collected sales tax and withheld payroll tax are trust-fund taxes that agencies pursue aggressively, sometimes with personal liability. Get your CPA, EA, or tax attorney involved immediately; we reconcile the underlying records fast to support them. We do not respond or represent &mdash; we get the figures right behind your professional." },
    { q: "How much does notice-records help cost?", a: "Fixed-fee against a written scope, based on the period and the records involved. You get the exact fee in writing within 3 business days &mdash; and because we&rsquo;re reconciling books, not negotiating with an agency, the scope is bounded and clear." },
    { q: "Is this page legal or tax advice?", a: "No &mdash; it is educational only and is not legal or tax advice. How to respond to a specific California tax notice depends on the agency, the notice type, and your facts; work with a CPA, EA, or tax attorney. TechBrot keeps the books behind the notice accurate so their response rests on documented figures." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/state-tax-notice-help/",
    name: "California State Tax Notice Help (FTB Â· CDTFA Â· EDD)",
    description: "Help understanding a California tax notice from the FTB, CDTFA, or EDD and reconciling the books behind it, so your CPA, EA, or tax attorney can respond. Independent bookkeeping firm â€” not a tax agency; does not respond to notices or represent clients.",
    serviceName: "California Tax-Notice Bookkeeping Support",
    serviceType: "Tax-notice records reconciliation and bookkeeping support",
    serviceDesc: "Bookkeeping support for California businesses that received an FTB, CDTFA, or EDD notice â€” identifying the notice type and deadline, reconciling the period's books and records, and assembling a documented package for the client's CPA, EA, or tax attorney. Educational only; not legal or tax advice. Independent Certified QuickBooks ProAdvisor firm; does not respond to notices, file returns or protests, or represent clients before any tax agency.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California businesses that received a tax notice from the FTB, CDTFA, or EDD and need the underlying books reconciled for their tax professional",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

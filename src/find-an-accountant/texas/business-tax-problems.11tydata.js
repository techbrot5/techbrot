/* /find-an-accountant/texas/business-tax-problems/ — TX HONEST-TRIAGE (tax cluster).
 * t-bofu. Shared body: partials/state-triage-body.njk. APPROVED CA pattern (founder sign-off
 * 2026-06-18), localized to Texas. HONESTY is the #1 gate: most "business tax problems" are really
 * BOOKS problems; we get the books current and CPA-ready; the FILING, the agencies (Texas Comptroller
 * / IRS / TWC), controversy, and any resolution/negotiation are the CPA's/EA's/attorney's. Disclosure
 * ABOVE FOLD; we do NOT resolve tax debt, negotiate with agencies, file returns, or represent.
 * Educational only. Not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const TX_REVIEW_PROSE = "This page is reviewed and maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm. Texas references &mdash; the franchise (margin) tax, the Public Information Report, 8.25% sales tax, and reemployment/unemployment tax &mdash; reflect rules current as of the date below, reviewed periodically against the <a href=\"https://comptroller.texas.gov/\" rel=\"noopener nofollow\">Texas Comptroller of Public Accounts</a>. This page is educational; it is not legal or tax advice. TechBrot gets the books current and CPA-ready; filing, agency resolution, and representation are handled by your CPA, EA, or tax attorney. We do not file returns, resolve tax debt, negotiate with agencies, or represent clients before tax authorities.";
const TX_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; Educational only; not legal or tax advice &middot; No tax-resolution, filing, or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/business-tax-problems/",
  slug: "tx-svc-biztax",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  title: "Texas Business Tax Problems (Books First) · TechBrot",
  description: "Behind on Texas taxes? Most business tax problems start as bookkeeping problems. We get your books current and CPA-ready so your CPA or EA can file and resolve. Independent firm — we don't file or negotiate with the Comptroller. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Business Tax Problems" },
  ],
  hero: {
    eyebrow: "Texas &middot; Business Tax Problems",
    heading: "Most Texas &lsquo;tax problems&rsquo; start in the books.",
    subheading: "Behind on filing, a balance you can&rsquo;t explain, sales tax that drifted, a forfeited entity &mdash; in Texas these almost always trace back to books that aren&rsquo;t current or correct. TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm: we get the books current and CPA-ready so your CPA or EA can file and resolve. We do not file returns, negotiate with the Texas Comptroller / IRS / TWC, or represent you &mdash; your licensed professional does that.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=MOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  inBrief: {
    text: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a tax-resolution company, not a CPA, EA, or tax attorney, and not the Texas Comptroller, IRS, or TWC.</strong> We do <strong>not</strong> file returns, do <strong>not</strong> negotiate with or represent you before any tax agency, do <strong>not</strong> resolve or settle tax debt, and do <strong>not</strong> provide tax or legal advice. What we do: get your books current and correct &mdash; reconciled, classified, sales-tax and payroll records rebuilt &mdash; to a CPA-ready standard, so your CPA or EA can file the back returns and handle any resolution. The full Texas summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Educational only; not legal or tax advice.",
  },
  ctaBand: {
    eyebrow: "Texas businesses start here",
    heading: "Behind in Texas? Start with the books.",
    lede: "Book a free file review. We&rsquo;ll tell you honestly how far behind the books are and what getting CPA-ready takes &mdash; written fixed-fee scope within 3 business days &mdash; then your CPA or EA files and resolves. We don&rsquo;t file or negotiate with agencies. No pitch, no judgment.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  disclosure: "<strong>TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm &mdash; not a tax-resolution company, not a CPA, EA, or tax attorney, and not the Texas Comptroller, IRS, or TWC.</strong> Contacting us does not reach any tax agency. We do not file returns, negotiate with or represent you before any agency, resolve or settle tax debt, or provide tax or legal advice. We get your books current and CPA-ready so your CPA or EA can file and resolve. This page is educational; it is not legal or tax advice.",
  boundariesDo: "get your books current and correct &mdash; reconcile accounts, rebuild sales-tax and payroll records, close the periods &mdash; to a CPA-ready standard, and hand your CPA or EA documented figures to file and resolve from.",
  boundariesDont: "file back returns, negotiate or settle tax debt, set up payment plans, represent you before the Texas Comptroller / IRS / TWC, or give tax or legal advice &mdash; your licensed professional does all of that.",
  callBreakout: {
    title: "Behind on Texas taxes and not sure where to start?",
    sub: "A Certified ProAdvisor reviews the books, tells you honestly how far behind you are, and scopes getting CPA-ready &mdash; fixed-fee, no judgment. We get the books right; your CPA files and resolves.",
  },
  tldr: "In Texas, a &ldquo;business tax problem&rdquo; &mdash; unfiled franchise or sales-tax returns, a balance you can&rsquo;t explain, sales tax that fell behind, a forfeited entity &mdash; almost always traces back to <strong>books that aren&rsquo;t current or correct</strong>. You can&rsquo;t file what you can&rsquo;t close, and you can&rsquo;t resolve what you can&rsquo;t document. <strong>TechBrot is an independent bookkeeping firm &mdash; not a tax-resolution company, CPA, EA, or attorney.</strong> We get the books current and CPA-ready &mdash; reconciled, classified, sales-tax and payroll records rebuilt &mdash; so your CPA or EA can file the back returns and handle any resolution with the agencies. We do not file, negotiate, settle, or represent. Educational only; not legal or tax advice.",
  aiSummary: [
    { q: "I&rsquo;m behind on Texas business taxes &mdash; where do I start?", a: "<strong>Start with the books.</strong> You can&rsquo;t file or resolve what isn&rsquo;t reconciled and closed. TechBrot gets the books current and CPA-ready; your CPA or EA then files the back returns and handles any resolution with the Texas Comptroller, IRS, or TWC. We are an independent bookkeeping firm &mdash; we do not file, negotiate, or represent." },
    { q: "Does TechBrot resolve tax debt or negotiate with the agencies?", a: "<strong>No.</strong> We are not a tax-resolution company, CPA, EA, or attorney. We do not file returns, set up payment plans, settle tax debt, or represent you before any agency. We get the books current and CPA-ready so your licensed professional can do all of that with documented figures." },
    { q: "Why are tax problems usually bookkeeping problems?", a: "Because you can&rsquo;t file a return until the period is closed and reconciled, and you can&rsquo;t dispute a balance you can&rsquo;t document. Most Texas problems &mdash; unfiled franchise or sales-tax returns, drifting sales tax, a missed Public Information Report, an entity forfeited &mdash; resolve once the books are current and accurate." },
    { q: "What about a forfeited entity or the franchise tax?", a: "A forfeited Texas entity (loss of the right to transact business) often traces to an unfiled franchise (margin) tax report or a missed Public Information Report. We get the books current so the picture is clear; your CPA or EA handles the filings and reinstatement with the Comptroller. We do the books; they handle the agency." },
    { q: "How fast can you get me current?", a: "It depends how far behind and how messy &mdash; a few weeks for a single year, longer for multi-year catch-up. We scope it in writing first and prioritize anything blocking a filing deadline, so your CPA can act in time." },
  ],
  problemTypes: [
    { form: "Unfiled", title: "Unfiled / late returns", body: "Franchise or sales-tax returns you couldn&rsquo;t file because the books weren&rsquo;t closed. We close and reconcile the periods to CPA-ready; your CPA files them." },
    { form: "Forfeited", title: "Forfeited entity / franchise tax", body: "A forfeited Texas entity, usually from an unfiled franchise (margin) report or missed Public Information Report. We get the books current; your CPA handles the filings and reinstatement." },
    { form: "Sales tax", title: "Sales tax behind", body: "Sales tax that drifted &mdash; a flat statewide rate instead of by location, returns that didn&rsquo;t tie. We rebuild and reconcile the sales-tax records; your CPA files and resolves with the Comptroller." },
    { form: "Payroll", title: "Payroll tax behind", body: "Federal payroll-tax filings or deposits behind, or TWC reemployment-tax filings missed. We assemble clean payroll records; your CPA or attorney handles the IRS and TWC." },
    { form: "Balance", title: "A balance you can&rsquo;t explain", body: "An assessed balance that doesn&rsquo;t match what you think you owe. We reconcile the period to find the real number; your CPA disputes or pays it." },
    { form: "No books", title: "No real books at all", body: "Years run from a bank account and a shoebox. We build the books from source documents to a CPA-ready standard so filing is even possible." },
  ],
  problemTypesNote: "These are bookkeeping starting points, not tax-resolution services. TechBrot gets the books current and CPA-ready; the filing, the agency, and any resolution are handled by your CPA, EA, or tax attorney. Educational only; not legal or tax advice.",
  booksBody: [
    "It feels like a tax problem &mdash; a notice, a balance, a forfeited entity &mdash; but the thing actually blocking you is almost always the books. You can&rsquo;t file a return for a year that was never closed. You can&rsquo;t dispute a sales-tax assessment when the rate was flat and nothing ties. You can&rsquo;t support a margin-tax position without clean COGS and compensation records.",
    "So the first, cheapest move is to get the books current and correct. Once they&rsquo;re reconciled and CPA-ready, your CPA or EA can file the back returns, respond to the agency, and pursue any payment plan or resolution with documented figures &mdash; instead of estimates that make things worse. We do the books; they do the rest. We don&rsquo;t file, negotiate, or represent.",
  ],
  booksNote: "<strong>If collected sales tax or withheld payroll tax is involved, act now.</strong> Those are trust-fund taxes the agencies pursue aggressively, sometimes with personal liability &mdash; loop in your CPA, EA, or tax attorney immediately, and we&rsquo;ll reconcile the records fast to support them.",
  scopeDo: [
    "Tell you honestly, free, how far behind the books are",
    "Reconcile accounts and rebuild sales-tax and payroll records",
    "Close the open periods to a CPA-ready standard",
    "Build books from source documents when there are none",
    "Hand your CPA or EA documented figures to file and resolve from",
  ],
  scopeDont: [
    "File back returns or any return",
    "Negotiate, settle, or set up payment plans on tax debt",
    "Represent you before the Texas Comptroller, IRS, or TWC",
    "Give tax or legal advice",
  ],
  copy: {
    aiHeading: "Texas business tax problems, in five questions.",
    typesEyebrow: "Different problem, same first step: the books",
    typesHeading: "Texas tax problems that are really books problems.",
    typesLede: "Each of these feels like a tax problem and starts as a bookkeeping one. We get the books current and CPA-ready; your CPA, EA, or tax attorney files and resolves.",
    booksEyebrow: "The honest root cause",
    booksHeading: "Why &lsquo;tax problems&rsquo; are usually books problems",
    scopeHeading: "Who does what to get you unstuck.",
    scopeLede: "A clean line between the books work we do and the filing, resolution, and representation only a licensed professional can do.",
    scopeDoTitle: "TechBrot handles",
    scopeDontTitle: "Your CPA, EA, or tax attorney handles",
    faqHeading: "Texas business tax problem questions.",
  },
  faq: [
    { q: "I&rsquo;m behind on Texas business taxes &mdash; where do I start?", a: "Start with the books. You can&rsquo;t file or resolve what isn&rsquo;t reconciled and closed, so the first, cheapest move is to get the books current and correct. TechBrot does that to a CPA-ready standard; your CPA or EA then files the back returns and handles any resolution with the Texas Comptroller, IRS, or TWC. We&rsquo;re an independent bookkeeping firm &mdash; we don&rsquo;t file, negotiate, or represent." },
    { q: "Does TechBrot resolve tax debt or negotiate with tax agencies?", a: "No. We are not a tax-resolution company, CPA, EA, or tax attorney. We do not file returns, set up payment plans, settle or negotiate tax debt, or represent you before any agency. What we do is get the books current and CPA-ready so your licensed professional can do all of that with accurate, documented figures rather than estimates." },
    { q: "Why do you say tax problems are really bookkeeping problems?", a: "Because the thing blocking you is almost always the books. You can&rsquo;t file a return for a year that was never closed, you can&rsquo;t dispute a sales-tax assessment when the rate was flat and nothing ties, and you can&rsquo;t support a franchise (margin) tax position without clean COGS and compensation records. Once the books are current and reconciled, your CPA can file and resolve with real numbers." },
    { q: "My Texas entity is forfeited &mdash; can you help?", a: "A forfeited entity (loss of the right to transact business in Texas) usually traces to an unfiled franchise (margin) tax report or a missed Public Information Report. We get the books current so the financial picture is clear and CPA-ready; your CPA or EA handles the filings and the reinstatement process with the Comptroller to restore good standing. We do the books; they handle the agency." },
    { q: "What if I have no real books for several years?", a: "That&rsquo;s common and fixable. We build the books from source documents &mdash; bank and card statements, invoices, payroll records &mdash; to a CPA-ready standard, year by year, so filing the back returns is even possible. We scope it in writing first so you know the cost before any work begins." },
    { q: "Collected sales tax or payroll withholding is involved &mdash; is that worse?", a: "Treat it with urgency. Collected sales tax and withheld payroll tax are trust-fund taxes that agencies pursue aggressively, sometimes with personal liability for owners. Loop in your CPA, EA, or tax attorney immediately; we reconcile the underlying records quickly to support them. We do not represent you &mdash; we get the figures right behind your professional." },
    { q: "How much does it cost and how long does it take?", a: "Fixed-fee against a written scope, based on how far behind and how messy the books are &mdash; typically a catch-up/cleanup in the $1,500&ndash;$20,000+ range. Timing runs from a few weeks for a single year to longer for multi-year work. You get the exact scope and fee in writing within 3 business days of a free file review." },
    { q: "Is this page legal or tax advice?", a: "No &mdash; it is educational only and is not legal or tax advice. How to resolve a specific Texas tax problem depends on your facts and the agencies involved; work with a CPA, EA, or tax attorney. TechBrot gets the books current and CPA-ready so their work rests on documented figures." },
  ],
  reviewProse: TX_REVIEW_PROSE,
  reviewCreds: TX_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/business-tax-problems/",
    name: "Texas Business Tax Problems (Books First)",
    description: "Behind on Texas taxes? Most business tax problems start as bookkeeping problems. TechBrot gets your books current and CPA-ready so your CPA or EA can file and resolve. Independent firm — does not file, negotiate, or represent before tax agencies.",
    serviceName: "Texas Catch-Up & CPA-Ready Bookkeeping (Tax-Problem Support)",
    serviceType: "Catch-up bookkeeping and CPA-readiness support",
    serviceDesc: "Getting Texas businesses' books current and CPA-ready when tax problems have surfaced — reconciling accounts, rebuilding sales-tax and payroll records, closing open periods, and building books from source documents, then handing the client's CPA or EA documented figures to file and resolve from. Educational only; not legal or tax advice. Independent Certified QuickBooks ProAdvisor firm; does not file returns, negotiate or settle tax debt, or represent clients before the Texas Comptroller, IRS, or TWC.",
    areaServed: [{ type: "State", name: "Texas", sameAs: "https://en.wikipedia.org/wiki/Texas" }],
    audienceType: "Texas businesses behind on taxes or facing tax problems that need their books brought current and CPA-ready",
    offerPrice: "1500",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

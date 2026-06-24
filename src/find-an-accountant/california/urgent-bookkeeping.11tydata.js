/* /find-an-accountant/california/urgent-bookkeeping/ â€” CA SERVICE CHILD (bookkeeping spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 bookkeeping spoke â€” DEADLINE-DRIVEN
 * fast books (loan, sale, board, investor diligence, tax deadline). GENUINELY CA. HONESTY:
 * deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit; no false-urgency claims. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. Urgent work accrues it so a lender or buyer sees a complete picture; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and district add-ons push the combined rate past 10.25%. Even on a deadline, sales tax is reconciled to the correct rate by location &mdash; not skipped." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. Diligence often surfaces it; urgent work separates W-2 from 1099 so the exposure is visible. EDD disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot delivers fast, accurate books and coordinates with your CPA, who files; we do not file California returns, rush accuracy, or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Accuracy not sacrificed for speed &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/urgent-bookkeeping/",
  slug: "ca-svc-urgent",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  disclosure: "<strong>Independent &mdash; and honest about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm, not Intuit and not a tax authority, CPA, or attorney. On a deadline we bring your books current fast and accurately; your CPA or EA files the returns and represents you. We never trade accuracy for speed.",
  heroFigure: "taccount",
  title: "California Urgent Bookkeeping (Deadline-Driven) Â· TechBrot",
  description: "Urgent bookkeeping for California businesses â€” books done fast for a loan, sale, board, or diligence deadline, accurate and CPA-ready, with CDTFA sales tax and the $800 franchise tax handled. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Urgent Bookkeeping" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU",
  hero: {
    eyebrow: "California &middot; Urgent Bookkeeping",
    heading: "California urgent bookkeeping &mdash; fast, accurate, deadline-ready.",
    subheading: "A loan closing, a sale, a board meeting, investor diligence, a tax deadline &mdash; and the books aren&rsquo;t ready. A Certified QuickBooks ProAdvisor gets your California books current and CPA-ready on the timeline you actually have, with CDTFA sales tax and the $800 franchise tax handled, not skipped. We move fast without rushing accuracy. We deliver the books; your CPA files.",
    actions: [
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU", class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Accuracy not sacrificed for speed"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>urgent, deadline-driven bookkeeping for California businesses</strong> &mdash; books brought current and CPA-ready fast for a loan, sale, board, diligence, or tax deadline, with CDTFA sales tax and the $800 franchise tax handled and accuracy never traded for speed, by a named Certified ProAdvisor. The full California urgent-bookkeeping summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses on a deadline",
    heading: "On a deadline? Call now &mdash; we&rsquo;ll tell you what&rsquo;s possible.",
    lede: "Tell a Certified ProAdvisor your deadline and where the books stand. We&rsquo;ll tell you honestly what can be done in time and scope it fast &mdash; in writing. We move quickly without cutting corners on accuracy. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California urgent bookkeeping, in five questions.",
    valueEyebrow: "What urgent California bookkeeping handles",
    valueHeading: "Deadline-ready books, the California way.",
    valueLede: "Fast doesn&rsquo;t mean sloppy &mdash; on a California deadline, the sales tax and franchise tax still have to be right, because a lender or buyer will look.",
    factsEyebrow: "California tax realities we keep right under deadline",
    factsHeading: "Three California facts we don&rsquo;t skip, even on a deadline.",
    factsLede: "These are exactly what diligence and lenders check &mdash; so urgent work keeps them right, not rushed past.",
    faqHeading: "California urgent bookkeeping questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>urgent, deadline-driven bookkeeping for California businesses</strong> &mdash; a loan closing, a sale, a board meeting, investor diligence, or a tax deadline where the books simply aren&rsquo;t ready. A named Certified QuickBooks ProAdvisor brings them current and CPA-ready on the timeline you actually have: every period reconciled, CDTFA <a href=\"/find-an-accountant/california/sales-tax-help/\">district sales tax</a> and the <strong>$800 franchise tax</strong> handled, <a href=\"/find-an-accountant/california/ab5-worker-classification/\">AB5</a> classification surfaced &mdash; because that&rsquo;s exactly what a lender, buyer, or diligence team checks. We move fast <strong>without trading accuracy for speed</strong>. Fixed-fee against a written scope, scoped within hours for true deadlines. Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What is California urgent bookkeeping?", a: "<strong>Getting your California books current and CPA-ready fast for a real deadline</strong> &mdash; a loan, sale, board meeting, diligence, or tax filing &mdash; with CDTFA sales tax and the $800 franchise tax handled and accuracy never sacrificed for speed. A named Certified ProAdvisor does the work; your CPA files." },
    { q: "How fast can you turn books around?", a: "For a focused, deadline-driven engagement we can often start the same day and deliver in days, depending on how far behind and how complex the file is. We&rsquo;ll tell you honestly on the first call what&rsquo;s achievable in your timeframe &mdash; we don&rsquo;t promise a deadline we can&rsquo;t hit accurately." },
    { q: "Will fast work still be accurate?", a: "Yes &mdash; speed comes from prioritization and focus, not cutting corners. For California specifically, the <strong>district sales tax</strong> and <strong>$800 franchise tax</strong> stay right, because a lender, buyer, or diligence team will check exactly those." },
    { q: "What deadlines do you handle?", a: "Loan and SBA closings, business sales, investor diligence, board meetings, and tax-filing deadlines (so your CPA can file on time). We get the books ready; your CPA files and represents." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope, sized to the work and the timeline. We scope true deadlines within hours so you know the cost and what&rsquo;s achievable before committing." },
  ],
  value: [
    { num: "01", title: "Same-day start on real deadlines", body: "For a genuine deadline we prioritize and start fast, with an honest read on the first call of what&rsquo;s achievable in time.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "02", title: "Every period reconciled", body: "The back periods reconciled and categorized so the picture a lender or buyer sees is complete and accurate.", href: "/find-an-accountant/california/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "03", title: "Sales tax &amp; franchise tax kept right", body: "CDTFA district sales tax and the $800 franchise tax handled correctly &mdash; the items diligence and lenders check.", href: "/find-an-accountant/california/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Diligence-ready statements", body: "Clean profit-and-loss, balance sheet, and cash-flow statements your CPA can file from and a buyer or board can trust.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "05", title: "AB5 exposure surfaced", body: "Contractor classification separated and surfaced &mdash; because diligence almost always asks about it in California.", href: "/find-an-accountant/california/ab5-worker-classification/", cta: "AB5 classification &rarr;" },
    { num: "06", title: "Then keep it current", body: "After the deadline, an optional monthly cadence so the next one isn&rsquo;t a fire drill.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Give an honest read on what&rsquo;s achievable in your timeframe",
    "Prioritize and reconcile the periods the deadline needs",
    "Keep CDTFA district sales tax and the $800 franchise tax right",
    "Surface AB5 contractor exposure for diligence",
    "Deliver diligence-ready, CPA-ready statements fast",
    "Optionally keep the file current afterward",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Promise a deadline we can&rsquo;t hit accurately",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Call &amp; honest read", body: "Tell a Certified ProAdvisor the deadline and where the books stand; we say honestly what&rsquo;s possible." },
    { phase: "Step 2", title: "Fast written scope", body: "A written scope and fixed fee, sized to the timeline &mdash; often within hours for a true deadline." },
    { phase: "Step 3", title: "Prioritized catch-up", body: "We reconcile and fix what the deadline needs first, keeping sales tax and franchise tax right." },
    { phase: "Step 4", title: "Deliver &amp; (optionally) maintain", body: "Diligence-ready statements delivered on time &mdash; then an optional monthly cadence." },
  ],
  advisoryBody: [
    "Urgent doesn&rsquo;t mean careless. In California, a rushed file that skips the district sales tax or the franchise tax fails exactly where a lender or buyer looks &mdash; so we move fast on the reconciliation and keep the tax items right.",
    "After the deadline, <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> keeps the next milestone from becoming another fire drill, and <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> helps with the event itself, in coordination with your CPA.",
  ],
  faq: [
    { q: "What is California urgent bookkeeping?", a: "Getting your California books current and CPA-ready fast for a real deadline &mdash; a loan or SBA closing, a business sale, investor diligence, a board meeting, or a tax-filing deadline &mdash; with CDTFA district sales tax and the $800 franchise tax handled and accuracy never sacrificed for speed. A named Certified ProAdvisor does the work; your CPA files." },
    { q: "How fast can you turn the books around?", a: "For a focused, deadline-driven engagement we can often start the same day and deliver in days, depending on how far behind and how complex the file is. On the first call we&rsquo;ll tell you honestly what&rsquo;s achievable in your timeframe &mdash; we won&rsquo;t promise a deadline we can&rsquo;t hit while keeping the work accurate." },
    { q: "Will fast work still be accurate enough for a lender or buyer?", a: "Yes &mdash; that&rsquo;s the point. Speed comes from prioritizing what the deadline needs and focusing the work, not from cutting corners. For California specifically, the district sales tax and the $800 franchise tax stay right, because those are exactly what a lender, buyer, or diligence team will check." },
    { q: "What kinds of deadlines do you handle?", a: "Loan and SBA closings, business sales and acquisitions, investor and M&amp;A diligence, board and investor meetings, and tax-filing deadlines so your CPA can file on time. We get the books ready and diligence-ready; the filing and any representation are your CPA&rsquo;s or EA&rsquo;s." },
    { q: "How much does urgent bookkeeping cost?", a: "Fixed-fee against a written scope, sized to the work and the timeline. We scope true deadlines within hours so you know the cost and exactly what&rsquo;s achievable before committing &mdash; never open-ended hourly billing, even under deadline." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop. If there isn&rsquo;t a usable file yet, we build what the deadline needs from your source documents to a CPA-ready standard." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we deliver fast, accurate, CPA-ready books and coordinate with your CPA or EA, who files and represents you. We are not affiliated with Intuit Inc." },
    { q: "What happens after the deadline passes?", a: "You&rsquo;re welcome to move into monthly bookkeeping with the same named ProAdvisor so the next milestone &mdash; the next loan, board meeting, or filing &mdash; isn&rsquo;t another scramble. Or we hand you a clean file and you take it from there." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/urgent-bookkeeping/",
    name: "California Urgent Bookkeeping (Deadline-Driven)",
    description: "Urgent bookkeeping for California businesses â€” books done fast for a loan, sale, board, or diligence deadline, accurate and CPA-ready, with CDTFA sales tax and the $800 franchise tax handled. Independent firm; does not file California taxes.",
    serviceName: "California Urgent / Deadline-Driven Bookkeeping Services",
    serviceType: "Urgent and deadline-driven bookkeeping services",
    serviceDesc: "Fast, deadline-driven bookkeeping for California businesses facing a loan, sale, board, diligence, or tax deadline â€” prioritized reconciliation, CDTFA district sales tax and $800 franchise tax kept right, AB5 exposure surfaced, and diligence-ready CPA-ready statements, without sacrificing accuracy for speed. Independent Certified QuickBooks ProAdvisor firm; does not file California returns â€” coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California businesses facing a loan, sale, diligence, board, or tax deadline with books that aren't ready",
    offerPrice: "1500",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

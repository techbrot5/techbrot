/* /find-an-accountant/illinois/urgent-bookkeeping/ â€” IL SERVICE CHILD (bkg spoke).
 * t-bofu Â· partials/state-service-body.njk. Fast-turnaround bookkeeping for a deadline. NON-triage.
 * IL-localized. HONESTY: deferred to the Illinois Dept of Revenue (IDOR) + City of Chicago Dept of
 * Finance + CPA/EA; founder-name-zero; not Intuit; no filing/financing-outcome guarantees. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "IDOR", title: "When an Illinois Department of Revenue deadline is days away", body: "If a sales-tax or income-tax deadline with the <strong>Illinois Department of Revenue</strong> is close and the books aren&rsquo;t ready, we prioritize getting the figures reconciled fast so your CPA can file on time. We get the books ready; your CPA files." },
  { fig: "Lender", title: "When a lender or buyer needs statements now", body: "Loan applications, SBA financing, and business sales need clean financials on a deadline. We turn around CPA-ready statements quickly &mdash; reconciled, not rushed-and-wrong." },
  { fig: "ST-1", title: "When a Chicago sales-tax period is about to close", body: "A sales-tax filing window closing on an unreconciled file is a scramble &mdash; and Illinois sales tax runs <strong>6.25% state up to 10.25% in Chicago</strong>, destination-based by jurisdiction. We reconcile the combined-rate liability by location fast so the ST-1 period ties before it&rsquo;s due." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot provides fast-turnaround bookkeeping and coordinates with your CPA, who files; we do not file Illinois returns, guarantee filing or financing outcomes, or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing, financing-outcome, or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/urgent-bookkeeping/",
  slug: "il-svc-urgent",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  disclosure: "<strong>Independent &mdash; and honest about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor firm, not Intuit and not a tax authority, CPA, or attorney. On a deadline we bring your books current fast and accurately; your CPA or EA files the returns and represents you. We never trade accuracy for speed.",
  heroFigure: "taccount",
  title: "Illinois Urgent & Fast-Turnaround Bookkeeping Â· TechBrot",
  description: "Urgent bookkeeping for Illinois businesses on a deadline â€” IDOR filing due, loan or sale pending, Chicago sales-tax period closing. Fast, reconciled, CPA-ready. All 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Urgent Bookkeeping" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-bkg&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Urgent Bookkeeping",
    heading: "An Illinois deadline looming and the books not ready? Call us.",
    subheading: "When an Illinois Department of Revenue filing is days out, a lender or buyer needs statements, or a Chicago sales-tax period is about to close, a Certified QuickBooks ProAdvisor turns your Illinois file around fast &mdash; reconciled and CPA-ready, not rushed-and-wrong. All 102 counties. We get the books ready; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-bkg&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fast turnaround &middot; reconciled, not rushed"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>urgent, fast-turnaround bookkeeping for Illinois businesses</strong> on a deadline &mdash; an Illinois Department of Revenue filing due, a loan or sale pending, or a Chicago sales-tax period closing. A Certified ProAdvisor prioritizes the file and turns around reconciled, CPA-ready books quickly, all 102 counties. The full Illinois urgent-bookkeeping summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes or guarantee filing or financing outcomes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "On a deadline? Let&rsquo;s move now.",
    lede: "Book a discovery call or call a ProAdvisor directly. We&rsquo;ll assess what&rsquo;s needed by when, tell you honestly whether the deadline is realistic, and scope a fast fixed-fee turnaround. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-bkg&funnel_stage=BOFU", class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois urgent bookkeeping, in five questions.",
    valueEyebrow: "When Illinois businesses need it fast",
    valueHeading: "Reconciled fast, for the deadline in front of you.",
    valueLede: "We prioritize the file and turn it around quickly &mdash; without cutting the corners that make books wrong.",
    factsEyebrow: "The Illinois deadlines we move fast for",
    factsHeading: "Three Illinois deadlines that can&rsquo;t slip.",
    factsLede: "Most urgent calls come down to one of these &mdash; and all three need books that tie, fast.",
    faqHeading: "Illinois urgent bookkeeping questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>urgent, fast-turnaround bookkeeping for Illinois businesses</strong> on a hard deadline &mdash; an <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Illinois Department of Revenue filing</a> due, a lender or buyer waiting on statements, or a <strong>6.25%&ndash;10.25%</strong> Chicago sales-tax period about to close. A Certified ProAdvisor prioritizes your file and turns around reconciled, CPA-ready books quickly &mdash; reconciled, not rushed-and-wrong. We&rsquo;ll tell you honestly whether the deadline is realistic before we start. Fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc.; we get the books ready, your CPA files. We don&rsquo;t guarantee filing or financing outcomes.",
  aiSummary: [
    { q: "What is urgent bookkeeping in Illinois?", a: "<strong>Fast-turnaround bookkeeping when a deadline is close</strong> &mdash; an Illinois Department of Revenue filing due, a loan or sale pending, or a Chicago sales-tax period closing. A Certified ProAdvisor prioritizes the file and delivers reconciled, CPA-ready books quickly. We get them ready; your CPA files." },
    { q: "How fast can you turn around my Illinois books?", a: "It depends on how far behind the file is and the deadline, but we prioritize urgent work and move quickly. We&rsquo;ll tell you honestly at the file review whether the deadline is realistic &mdash; we won&rsquo;t promise a date we can&rsquo;t hit with accurate books." },
    { q: "Do you rush and risk errors?", a: "No. Fast doesn&rsquo;t mean sloppy &mdash; we reconcile properly even under deadline, because rushed-and-wrong books fail the very loan, sale, or filing you need them for. <strong>Reconciled, not rushed.</strong>" },
    { q: "Can you hit my Illinois Department of Revenue deadline?", a: "If it&rsquo;s realistic, yes &mdash; we prioritize getting the sales-tax and income figures reconciled so your CPA can file on time. If the deadline genuinely isn&rsquo;t reachable, we&rsquo;ll say so and help you and your CPA plan around it. We don&rsquo;t file returns." },
    { q: "What does urgent bookkeeping cost?", a: "Fixed-fee against a written scope, set after a fast file review &mdash; scoped to the volume and the deadline. Exact fee in writing before we start." },
  ],
  value: [
    { num: "01", title: "Tax-deadline rescue", body: "Sales-tax and income figures reconciled fast so your CPA can file the Illinois Department of Revenue return on time.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "02", title: "Loan- &amp; sale-ready statements", body: "CPA-ready P&amp;L and balance sheet turned around quickly for a lender, SBA loan, or business sale.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "03", title: "Sales-tax period closing", body: "The 6.25%&ndash;10.25% combined-rate liability reconciled by jurisdiction fast so the closing ST-1 period ties before it&rsquo;s due.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Catch-up, prioritized", body: "A backlog reconstructed on an accelerated timeline when the deadline won&rsquo;t wait for a normal cadence.", href: "/find-an-accountant/illinois/cleanup-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { num: "05", title: "Reconciled, not rushed", body: "Proper reconciliation even under deadline &mdash; because rushed-and-wrong books fail the thing you need them for.", href: "/find-an-accountant/illinois/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "06", title: "Stays current after", body: "Once the deadline&rsquo;s handled, move into monthly bookkeeping so the next one is never a scramble.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Prioritize an urgent file and turn it around fast",
    "Reconcile the sales-tax and income figures for a near Illinois Department of Revenue deadline",
    "Turn around CPA-ready statements for a lender, SBA loan, or sale",
    "Reconcile the 6.25%&ndash;10.25% combined-rate sales-tax liability before a Chicago ST-1 period closes",
    "Tell you honestly whether the deadline is realistic before starting",
    "Hand reconciled, CPA-ready books to your CPA",
  ],
  scopeDont: [
    "File the Illinois sales tax (ST-1), income tax, or the PPRT",
    "Make the PTE election or file Chicago city taxes (lease/cloud)",
    "Guarantee a filing, loan, or sale outcome",
    "Represent you before the Illinois Department of Revenue, the City of Chicago, or a lender",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Fast file review", body: "A Certified ProAdvisor reviews the file and the deadline immediately and tells you honestly if it&rsquo;s reachable." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee fast &mdash; with the deliverable and the date stated plainly." },
    { phase: "Step 3", title: "Prioritized turnaround", body: "We reconcile and produce the CPA-ready deliverable on the accelerated timeline &mdash; reconciled, not rushed." },
    { phase: "Step 4", title: "Handoff &amp; stay current", body: "Reconciled books handed to your CPA &mdash; then optional monthly bookkeeping so the next deadline isn&rsquo;t a scramble." },
  ],
  advisoryBody: [
    "Urgent doesn&rsquo;t mean cutting corners. A loan application, a business sale, or an Illinois Department of Revenue filing all need books that actually tie &mdash; rushed-and-wrong numbers get caught and fail the very thing you needed them for. We move fast and reconcile properly, and we tell you honestly up front whether the deadline is reachable.",
    "Once the deadline is handled, the same named ProAdvisor can keep the file current in <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> &mdash; so the next deadline is a non-event.",
  ],
  faq: [
    { q: "What does Illinois urgent bookkeeping cover?", a: "Fast-turnaround bookkeeping when a deadline is close &mdash; an Illinois Department of Revenue sales-tax or income filing due, a lender or buyer waiting on statements, or a 6.25%&ndash;10.25% Chicago sales-tax (ST-1) period about to close. A Certified ProAdvisor prioritizes your file and delivers reconciled, CPA-ready books quickly. We get them ready; your CPA files." },
    { q: "How quickly can you turn my Illinois books around?", a: "It depends on how far behind the file is and what the deadline is, but we prioritize urgent work and move quickly. At the fast file review we&rsquo;ll tell you honestly whether the deadline is realistic &mdash; we won&rsquo;t commit to a date we can&rsquo;t hit while keeping the books accurate." },
    { q: "Will rushing cause errors in my books?", a: "No &mdash; fast doesn&rsquo;t mean sloppy. We reconcile properly even under deadline, because rushed-and-wrong books fail the loan, sale, or filing you need them for. Our rule is reconciled, not rushed: if accuracy and the deadline genuinely conflict, we tell you rather than hand you numbers that don&rsquo;t tie." },
    { q: "Can you get me ready for my Illinois Department of Revenue deadline?", a: "If the deadline is realistic, yes &mdash; we prioritize reconciling the sales-tax and income figures so your CPA can file on time. If it genuinely isn&rsquo;t reachable, we&rsquo;ll say so and help you and your CPA plan around it, including any extension your CPA may file. We don&rsquo;t file returns ourselves, and we don&rsquo;t make the PTE election." },
    { q: "Can you reconcile my Chicago combined-rate sales tax before the ST-1 period closes?", a: "Yes &mdash; Illinois sales tax is destination-based and runs from 6.25% state up to 10.25% in Chicago, so the combined rate varies by jurisdiction. We reconcile the liability by location fast so the ST-1 period ties before it&rsquo;s due. We get the figures ready; your CPA files the ST-1, and Chicago city taxes stay with the City of Chicago Department of Finance." },
    { q: "Do you file my taxes or guarantee the loan?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we get the books reconciled and CPA-ready and coordinate with your CPA, who files. We don&rsquo;t guarantee filing, loan, or sale outcomes, don&rsquo;t make the PTE election, don&rsquo;t represent you before the Department or a lender, and are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/urgent-bookkeeping/",
    name: "Illinois Urgent & Fast-Turnaround Bookkeeping",
    description: "Urgent bookkeeping for Illinois businesses on a deadline â€” IDOR filing due, loan or sale pending, Chicago sales-tax period closing. Fast, reconciled, CPA-ready. Independent firm; does not file Illinois taxes or guarantee outcomes.",
    serviceName: "Illinois Urgent & Fast-Turnaround Bookkeeping",
    serviceType: "Expedited bookkeeping services",
    serviceDesc: "Fast-turnaround bookkeeping for Illinois businesses facing a deadline â€” an Illinois Department of Revenue filing due, a lender or buyer needing statements, or a Chicago sales-tax period closing â€” prioritizing reconciliation of the sales-tax and income figures to deliver CPA-ready books quickly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns, make the PTE election, guarantee filing or financing outcomes, or represent clients before the Department â€” coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses facing a tax, financing, or sale deadline across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

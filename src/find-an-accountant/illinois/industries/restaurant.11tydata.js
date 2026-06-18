/* /find-an-accountant/illinois/industries/restaurant/ — IL INDUSTRY CHILD.
 * t-location + heroLight. partials/state-industry-body.njk. GENUINELY IL×restaurant: high-volume POS
 * reconciliation (daily sales, tenders, comps, voids, third-party delivery deposits), tipped payroll &
 * the FICA tip credit, prepared-food sales tax (10.25% combined in Chicago, plus Chicago's additional
 * restaurant tax on top — kept general), COGS/food-cost % & inventory, the PPRT (even pass-throughs owe),
 * the PTE election, flat 4.95% income tax. HONESTY: verified vs IDOR + City of Chicago Dept of Finance;
 * no specific Chicago restaurant-tax % or MPEA rate invented — deferred to the City/CPA; books only;
 * we do not file IL returns, make the PTE election, or represent. founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/industries/restaurant/",
  slug: "il-ind-restaurant",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Illinois Restaurant Accounting · TechBrot",
  description: "Accounting for Illinois restaurants, bars & food service — high-volume POS reconciliation, tipped payroll and the FICA tip credit, prepared-food sales tax (10.25% in Chicago), and food-cost tracking. Books only, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Industries", href: "/find-an-accountant/illinois/industries/" },
    { name: "Restaurant" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Restaurant Accounting",
    heading: "Illinois restaurant accounting that reconciles every tender to the bank.",
    subheading: "Restaurants don&rsquo;t fail on sales &mdash; they fail on the gap between what the POS rang up and what actually landed in the bank after comps, voids, tips, and delivery-app deductions. We reconcile high-volume POS daily-sales to deposits, run tipped payroll with the FICA tip credit, set prepared-food sales tax to the correct combined rate (10.25% in Chicago), and keep food cost and inventory honest &mdash; by a named Certified ProAdvisor. We keep the books; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor accounting for Illinois restaurants, bars, and food-service businesses</strong> &mdash; high-volume POS reconciliation (daily sales, tenders, comps, voids, third-party delivery deposits) tied to the bank, tipped payroll with the FICA tip credit, prepared-food sales tax set to the correct combined rate by jurisdiction (10.25% in Chicago), and food-cost and inventory tracking, all in your own QuickBooks file across all 102 counties. The full Illinois restaurant summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois references (the flat 4.95% income tax; the PPRT; the 10.25% Chicago combined sales tax; Chicago&rsquo;s additional restaurant tax; the FICA tip credit) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date. TechBrot keeps books only, does not file Illinois taxes, make the PTE election, or represent clients before authorities.",
  },
  ctaBand: {
    eyebrow: "Illinois restaurants start here",
    heading: "See the gap between what the POS rang and what hit the bank &mdash; and close it.",
    lede: "Book a free discovery call. We&rsquo;ll review your POS-to-bank reconciliation, tipped payroll, sales-tax setup, and food cost, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Illinois restaurant accounting, plainly.",
    aiHeading: "Illinois restaurant accounting, in five questions.",
    challengesEyebrow: "Why Illinois restaurant books break",
    challengesHeading: "Three places Illinois restaurants lose the numbers.",
    challengesLede: "High volume, tips, and delivery apps hide the real number. Knowing which gap you&rsquo;re in tells us where to start.",
    handleHeading: "Illinois restaurant accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your restaurant, delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; reconciled to the bank, every period.",
    integrationsHeading: "Connected to your POS, delivery apps, and payroll.",
    processHeading: "From POS rang to actually banked.",
    processLede: "Every Illinois restaurant engagement follows the same rhythm &mdash; POS reconciled to the bank first, sales tax and tipped payroll clean second, advisory third.",
    advisoryHeading: "Clean reconciliation is the start. Prime cost and margin are the point.",
    faqHeading: "Illinois restaurant accounting questions.",
    relatedHeading: "Related Illinois services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides accounting for Illinois restaurants, bars, and food-service businesses</strong> &mdash; in your own QuickBooks file by a named Certified ProAdvisor. The job is to reconcile what the POS actually banked against what it rang, run tipped payroll correctly, set sales tax to the right combined rate, and keep food cost honest.",
    "Restaurants add their own complexity. <strong>High-volume POS reconciliation</strong> &mdash; daily sales, tenders, comps, voids, and third-party delivery deposits (DoorDash, UberEats) net of their fees &mdash; is where the real revenue number lives, and where most books drift. <strong>Tipped payroll</strong> brings tip reporting, the <strong>FICA tip credit</strong>, Illinois 4.95% withholding, and minimum-wage/tipped-wage tracking. <strong>Prepared food is taxed</strong>: the combined sales tax is <strong>10.25% in Chicago</strong>, and Chicago layers an <strong>additional restaurant tax on top</strong> of that &mdash; the exact dining-tax figures are set by the City and your CPA confirms them. Most operators run as <strong>S-corps or LLCs</strong>, which still owe the entity-level <strong>Personal Property Replacement Tax (PPRT)</strong> &mdash; even pass-throughs &mdash; on top of the flat 4.95% income tax, with the permanent <strong>PTE election</strong> available. We keep all of it clean &mdash; CPA-ready. We keep the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Illinois restaurant accounting?", a: "<strong>High-volume POS reconciliation to the bank, tipped payroll with the FICA tip credit, prepared-food sales tax by jurisdiction (10.25% in Chicago), and food-cost and inventory tracking</strong> &mdash; for Illinois restaurants, bars, and food-service businesses, in your own QuickBooks file. We keep the books; your CPA files." },
    { q: "How do you reconcile a high-volume POS?", a: "We reconcile <strong>daily sales, tenders, comps, and voids from the POS against actual bank deposits</strong> &mdash; including third-party delivery (DoorDash, UberEats) deposits net of their commissions and fees &mdash; so your books show real banked revenue, not gross POS sales that overstate the picture. Comps, voids, and delivery deductions are accounted for every period." },
    { q: "How does tipped payroll and the FICA tip credit work?", a: "Tipped restaurant payroll involves tip reporting, minimum-wage and tipped-wage tracking, and Illinois 4.95% withholding. The <strong>FICA tip credit</strong> can offset part of the employer Social Security and Medicare tax paid on reported tips. We keep tips, wages, and withholding tracked cleanly so the credit is supportable; your CPA computes and files it." },
    { q: "Is restaurant food taxed in Illinois, and what about Chicago?", a: "Yes &mdash; prepared and restaurant food is taxed. The combined sales-tax rate is <strong>10.25% in Chicago</strong>, and the City of Chicago imposes an <strong>additional restaurant tax on top of that sales tax</strong>. We keep the dining-tax specifics general here because the exact rate is set by the City of Chicago and confirmed by your CPA &mdash; what we do is configure QuickBooks to the correct combined rate by jurisdiction and reconcile so the IDOR ST-1 ties." },
    { q: "Do you file Illinois taxes or make the PTE election?", a: "No &mdash; we keep the books CPA-ready from financial data; your CPA files the income tax, the PPRT, and sales tax, and makes any PTE election. We&rsquo;re independent, don&rsquo;t represent clients before the IDOR or the City of Chicago, and aren&rsquo;t affiliated with Intuit." },
  ],
  challenges: [
    { signal: "POS &amp; deposits", title: "POS rang it, but did it bank?", body: "Comps, voids, tip-outs, and delivery-app fees mean banked revenue is often well below gross POS sales &mdash; and a restaurant that books gross sales is flying on a number that isn&rsquo;t real." },
    { signal: "Tipped payroll", title: "Tips, wages &amp; the FICA tip credit", body: "Tip reporting, tipped-wage and minimum-wage tracking, and Illinois 4.95% withholding make restaurant payroll complex &mdash; and a mishandled FICA tip credit leaves money on the table." },
    { signal: "Sales tax &amp; entity", title: "Prepared-food tax &amp; the PPRT", body: "Prepared food is taxed (10.25% combined in Chicago, plus Chicago&rsquo;s additional restaurant tax), and even S-corp/LLC operators owe the entity-level PPRT &mdash; both need clean books to get right." },
  ],
  handle: [
    { num: "01", title: "High-volume POS reconciliation", body: "Daily sales, tenders, comps, and voids reconciled to bank deposits &mdash; including third-party delivery deposits net of fees &mdash; so banked revenue is real.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Tipped payroll &amp; the FICA tip credit", body: "Tip reporting, tipped-wage and minimum-wage tracking, Illinois 4.95% withholding, and the FICA tip credit kept supportable, coordinated with your payroll provider.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "03", title: "Prepared-food sales tax", body: "QuickBooks set to the correct combined rate by jurisdiction (10.25% in Chicago) and reconciled so the IDOR ST-1 ties; Chicago&rsquo;s additional restaurant tax tracked separately.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Food cost &amp; inventory", body: "COGS and food-cost % tracked with inventory so prime cost is visible and margin decisions rest on real numbers.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "05", title: "PPRT &amp; entity figures", body: "Illinois net income tracked for the Personal Property Replacement Tax &mdash; which even S-corps and LLCs owe &mdash; so your CPA can compute it and model the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "06", title: "Monthly close that ties", body: "A monthly close with POS reconciled, tips and sales tax clean, and food cost current &mdash; CPA-ready and decision-ready.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
  ],
  integrations: [
    "POS systems (Toast, Square, Clover, Lightspeed) &mdash; daily-sales exports",
    "QuickBooks Online or hosted Desktop &mdash; your file",
    "Third-party delivery (DoorDash, UberEats, Grubhub) deposit reports",
    "Gusto, ADP, and restaurant payroll providers (tip reporting)",
    "Merchant and card processors (summary level)",
    "Inventory and food-cost tools for COGS tracking",
  ],
  integrationsNote: "We reconcile from the financial summaries your systems produce &mdash; POS daily sales, delivery-app payout reports, payroll, and deposits &mdash; tying gross sales down to what actually banked.",
  process: [
    { phase: "Step 1", title: "Free restaurant review", body: "A Certified ProAdvisor reviews your POS-to-bank reconciliation, tipped payroll, sales-tax setup, and food cost &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly. No hourly billing." },
    { phase: "Step 3", title: "Reconcile &amp; clean", body: "POS reconciled to deposits, delivery fees separated, tipped payroll and sales tax corrected by jurisdiction, food cost organized." },
    { phase: "Step 4", title: "Monthly banked-revenue close", body: "A monthly close showing real banked revenue, prime cost, and margin &mdash; CPA-ready." },
  ],
  advisoryBody: [
    "When the POS reconciles to the bank and tipped payroll is clean, the decisions get real: which dayparts and menu items actually make money, whether delivery apps are worth their fees, where labor and food cost are outrunning sales &mdash; answered from numbers that tie, not gross POS sales that flatter.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, in coordination with your CPA. We keep the books; your CPA files; we don&rsquo;t make the PTE election or represent you.",
  ],
  faq: [
    { q: "What does Illinois restaurant accounting include?", a: "High-volume POS reconciliation to the bank (daily sales, tenders, comps, voids, and third-party delivery deposits net of fees), tipped payroll with the FICA tip credit, prepared-food sales tax set to the correct combined rate by jurisdiction (10.25% in Chicago) and reconciled, and food-cost and inventory tracking &mdash; in your own QuickBooks file. We keep the books; your CPA files." },
    { q: "How do you reconcile a high-volume restaurant POS to the bank?", a: "We tie the POS daily-sales figures &mdash; gross sales, tenders, comps, and voids &mdash; to actual bank deposits, and we account for third-party delivery (DoorDash, UberEats, Grubhub) deposits net of their commissions and fees. The result is real banked revenue rather than gross POS sales that overstate the picture. The data comes from your POS exports and delivery-app payout reports, not from individual tickets." },
    { q: "How does tipped payroll and the FICA tip credit work for an Illinois restaurant?", a: "Tipped restaurant payroll involves tip reporting, tipped-wage and minimum-wage tracking, and Illinois 4.95% withholding. The FICA tip credit lets an employer offset part of the Social Security and Medicare tax paid on reported tips above the minimum wage. We keep tips, wages, and withholding tracked cleanly so the credit is supportable and reconciled every period; your CPA computes and files it." },
    { q: "Is restaurant food taxed in Illinois, and what extra tax does Chicago add?", a: "Yes &mdash; prepared and restaurant food is taxed in Illinois. The combined sales-tax rate is 10.25% in Chicago (state, county, and city), and on top of that the City of Chicago imposes an additional restaurant tax. We keep the exact dining-tax figures general here because they&rsquo;re set by the City of Chicago and confirmed by your CPA &mdash; what we do is configure QuickBooks to the correct combined rate by jurisdiction, track Chicago&rsquo;s additional restaurant tax separately, and reconcile so the IDOR ST-1 ties." },
    { q: "How is an Illinois restaurant taxed as an entity?", a: "Most restaurants operate as S-corporations or LLCs. Illinois has a flat 4.95% income tax, and even pass-throughs owe the entity-level Personal Property Replacement Tax (PPRT) &mdash; 1.5% for S-corps and partnerships &mdash; which surprises owners new to the state. A permanent Pass-Through Entity (PTE) election is also available. We track Illinois net income cleanly so it&rsquo;s supportable; your CPA computes the tax, makes any PTE election, and files." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named ProAdvisor on the same file every month, reconciling from the POS daily-sales exports and delivery-app payout reports your systems produce." },
    { q: "Do you file my Illinois taxes or represent me before the IDOR?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the Illinois income tax, the PPRT, and sales tax, and makes any PTE election. We do not file Illinois returns, make the PTE election, or represent clients before the Illinois Department of Revenue or the City of Chicago Department of Finance, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: "This page reflects how TechBrot handles Illinois restaurant engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois food-service businesses remotely across all 102 counties, and reviewed for technical accuracy on POS-to-bank reconciliation, tipped payroll and the FICA tip credit, and prepared-food sales tax. Illinois references &mdash; the 10.25% Chicago combined sales tax, Chicago&rsquo;s additional dining/restaurant taxes (kept general; the exact rate is set by the City of Chicago), the Personal Property Replacement Tax, and the FICA tip credit &mdash; are current as of the date below and reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates change &mdash; confirm current figures with the City and your CPA. TechBrot keeps the books only; it does not file Illinois taxes, make the PTE election, or represent clients before authorities &mdash; it coordinates with your CPA.",
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois sales tax help", body: "Configure prepared-food sales tax by jurisdiction (10.25% in Chicago) and Chicago&rsquo;s restaurant tax so the ST-1 ties.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Illinois monthly bookkeeping", body: "Keep POS reconciled to the bank and food cost current with a recurring monthly close.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Illinois replacement tax help", body: "Track Illinois net income for the PPRT &mdash; which even S-corp and LLC restaurants owe.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { title: "Restaurant accounting (national)", body: "Our global restaurant and hospitality industry overview for the broader playbook.", href: "/accounting/industries/", cta: "National overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/industries/restaurant/",
    name: "Illinois Restaurant Accounting",
    description: "Accounting for Illinois restaurants, bars, and food-service businesses — high-volume POS reconciliation to the bank, tipped payroll and the FICA tip credit, prepared-food sales tax (10.25% in Chicago), and food-cost tracking. Books only; does not file Illinois taxes.",
    serviceName: "Illinois Restaurant Accounting",
    serviceType: "Restaurant industry bookkeeping services",
    serviceDesc: "Bookkeeping for Illinois restaurants, bars, and food-service businesses — high-volume POS reconciliation (daily sales, tenders, comps, voids, and third-party delivery deposits net of fees) tied to the bank, tipped payroll with the FICA tip credit and Illinois 4.95% withholding, prepared-food sales-tax configuration by jurisdiction (10.25% in Chicago) with Chicago's additional restaurant tax tracked separately, and food-cost and inventory tracking, kept CPA-ready. Illinois net income tracked for the Personal Property Replacement Tax (PPRT). Independent Certified QuickBooks ProAdvisor firm; does not file Illinois taxes, make the PTE election, or represent clients before the IDOR or the City of Chicago — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois restaurants, bars, and food-service businesses across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

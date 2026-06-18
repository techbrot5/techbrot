/* /find-an-accountant/illinois/pricing/ — IL SERVICE CHILD (money cluster, bespoke pricing page).
 * t-bofu, bespoke body in pricing.njk. CANONICAL figures only (blueprint Sheet 0). IL stack
 * (flat 4.95% income tax; PPRT entity-level 2.5% C-corp / 1.5% pass-through; 9.5% combined C-corp;
 * 6.25%-10.25% sales tax (ST-1); Chicago 15% lease/cloud tax). HONESTY: fixed-fee not hourly; we
 * don't file IL taxes; founder-name-zero; not Intuit. buildCityGraph speakable IDs =
 * il-svc-pricing-summary / il-svc-pricing-ai-summary-list (match the njk). */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Canonical fixed-fee ranges &middot; Written scope before any work &middot; No hourly billing &middot; No tax-filing claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-money&funnel_stage=MOFU",
  tldr: [
    "<strong>TechBrot prices every Illinois engagement as a fixed fee against a written scope</strong> &mdash; agreed before any work begins, never hourly. A named Certified QuickBooks ProAdvisor works inside your own QuickBooks Online or hosted Desktop file across all 102 Illinois counties, from Chicago and the collar counties to Springfield and downstate. We deliver the books and the CPA-ready handoff; your CPA files the sales tax, the PPRT, and the 9.5% corporate tax.",
    "The Illinois ranges: <strong>monthly bookkeeping $400&ndash;$2,500+/mo, one-time cleanup $1,500&ndash;$15,000+, catch-up bookkeeping $2,000&ndash;$20,000+, QuickBooks setup $750&ndash;$5,000+, Desktop&rarr;Online migration $2,500&ndash;$10,000+, sales-tax tracking $250&ndash;$1,500+/mo, payroll $150&ndash;$800+/mo, and fractional-CFO advisory $3,000&ndash;$8,000+/mo</strong>. Final fees scale with transaction volume, accounts, industry, and multi-entity complexity.",
    "The free 30-minute discovery call returns your exact fixed fee in writing within 3 business days &mdash; no pitch, no obligation. Independent firm; not affiliated with Intuit Inc.; we don&rsquo;t file Illinois taxes.",
  ],
  aiSummary: [
    { q: "How much does an Illinois bookkeeper cost?", a: "<strong>Monthly bookkeeping runs $400&ndash;$2,500+/mo</strong> against a written fixed-fee scope, by transaction volume and number of accounts. One-time cleanup runs $1,500&ndash;$15,000+, and catch-up bookkeeping $2,000&ndash;$20,000+. Never hourly; your exact fee comes in writing within 3 business days of a free discovery call." },
    { q: "Is pricing fixed-fee or hourly?", a: "<strong>Always fixed-fee against a written scope</strong>, agreed before any work begins &mdash; never hourly. No surprise invoices, no clock-watching. The scope and the fee are both in writing up front." },
    { q: "What does QuickBooks setup or cleanup cost in Illinois?", a: "<strong>QuickBooks setup runs $750&ndash;$5,000+</strong> by entity and industry complexity (Chicago&rsquo;s 6.25%&ndash;10.25% combined sales-tax rates on the ST-1, the manufacturing machinery exemption, restaurant POS). <strong>Cleanup runs $1,500&ndash;$15,000+</strong> depending on how far the file has drifted &mdash; single combined sales-tax rates and missed Chicago lease/&lsquo;cloud&rsquo; tax are common Illinois fixes." },
    { q: "Do your fees include filing my Illinois taxes?", a: "No &mdash; TechBrot keeps the books CPA-ready and coordinates with your CPA, who files the sales tax (ST-1), the Personal Property Replacement Tax (PPRT), and the 9.5% corporate tax. Our fees cover bookkeeping, QuickBooks work, and the CPA-ready handoff, not tax filing or representation. Independent firm; not affiliated with Intuit Inc." },
    { q: "How do I get my exact Illinois price?", a: "<strong>Book a free 30-minute discovery call.</strong> We review your file and your Illinois situation, scope the right engagement, and send your exact fixed fee in writing within 3 business days &mdash; before any work begins." },
  ],
  shapes: [
    { tag: "Shape 01 &middot; Recurring", title: "Monthly bookkeeping &amp; close", body: "A fixed monthly fee for a recurring close &mdash; reconciliation, categorization, 6.25%&ndash;10.25% combined sales-tax reconciliation by jurisdiction, PPRT-position tracking, and CPA-ready statements.", examples: "<strong>$400&ndash;$2,500+/mo.</strong> Scales with transaction volume, accounts, and industry (manufacturing, logistics, and restaurants carry more)." },
    { tag: "Shape 02 &middot; One-time", title: "Cleanup, catch-up &amp; setup", body: "A fixed one-time fee for a defined project &mdash; a QuickBooks cleanup, a multi-year catch-up, a new-file setup, or a Desktop&rarr;Online migration, scoped to a clear deliverable.", examples: "<strong>Cleanup $1,500&ndash;$15,000+ &middot; catch-up $2,000&ndash;$20,000+ &middot; setup $750&ndash;$5,000+ &middot; migration $2,500&ndash;$10,000+.</strong>" },
    { tag: "Shape 03 &middot; Advisory", title: "Fractional-CFO advisory", body: "A fixed monthly retainer for forecasting, board reporting, and corporate-tax-position planning &mdash; once the books are clean, in coordination with your CPA. By application.", examples: "<strong>$3,000&ndash;$8,000+/mo.</strong> Best fit: $1M&ndash;$50M Illinois businesses where the books need to inform strategy." },
  ],
  ranges: [
    { type: "Recurring", service: "Monthly bookkeeping", fee: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { type: "One-time", service: "QuickBooks cleanup", fee: "$1,500&ndash;$15,000+", cadence: "One-time, written scope", href: "/find-an-accountant/illinois/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { type: "One-time", service: "Catch-up bookkeeping", fee: "$2,000&ndash;$20,000+", cadence: "One-time, by months behind", href: "/find-an-accountant/illinois/cleanup-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { type: "One-time", service: "QuickBooks setup", fee: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 weeks", href: "/find-an-accountant/illinois/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { type: "One-time", service: "Desktop &rarr; Online migration", fee: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 weeks", href: "/find-an-accountant/illinois/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
    { type: "Recurring", service: "Sales-tax tracking in QuickBooks", fee: "$250&ndash;$1,500+/mo", cadence: "Recurring monthly", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { type: "Recurring", service: "Payroll coordination", fee: "$150&ndash;$800+/mo", cadence: "Recurring monthly", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { type: "Advisory", service: "Fractional-CFO advisory", fee: "$3,000&ndash;$8,000+/mo", cadence: "Retainer, by application", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],
  rangesNote: "Indicative starting ranges, consistent across every TechBrot Illinois page. Final fees scale with transaction volume, employee count, industry specifics (manufacturing, logistics/trucking, restaurants), and multi-entity or multi-state exposure. The sales tax, the PPRT, and the 9.5% corporate tax <em>filing</em> are your CPA&rsquo;s; our fees cover the bookkeeping and CPA-ready handoff. <a href=\"/contact/?intent=illinois&state=illinois&source_type=state-money&funnel_stage=MOFU\">Get a written Illinois scope &rarr;</a>",
  whyBody: [
    "Hourly billing punishes you for your bookkeeper&rsquo;s learning curve and turns every question into a meter running. It also hides the total until the invoice lands. We think that&rsquo;s backwards.",
    "A fixed fee against a written scope means you know the price before any work begins, and we carry the risk of the work taking longer than expected &mdash; not you. It aligns us with getting the books right efficiently, and it makes budgeting an Illinois engagement simple.",
    "The only time the fee changes is when the scope changes &mdash; you take on payroll, add an entity, open a second location &mdash; and any change is agreed in writing before we act on it. No surprise invoices, ever.",
  ],
  includes: [
    { number: "01", title: "A named Certified ProAdvisor", body: "The same Certified QuickBooks ProAdvisor on your file every month &mdash; not a rotating queue or an offshore handoff." },
    { number: "02", title: "Your own QuickBooks file", body: "We work in your own QuickBooks Online or hosted Desktop file &mdash; your data, no proprietary lock-in." },
    { number: "03", title: "Written scope before any work", body: "The deliverable and the fixed fee both in writing within 3 business days of the discovery call, before work begins." },
    { number: "04", title: "Illinois tax positions tracked", body: "The flat 4.95% income tax, the PPRT position (2.5% C-corp / 1.5% pass-through), the 6.25%&ndash;10.25% combined sales tax, and Chicago&rsquo;s 15% lease/&lsquo;cloud&rsquo; tax kept current for your CPA." },
    { number: "05", title: "CPA-ready monthly handoff", body: "Statements your CPA can file from directly &mdash; we coordinate with your CPA, who files." },
    { number: "06", title: "Honest scope &amp; no upsell", body: "If you need less than you asked for, we say so. We scope what the books actually need, not what bills the most." },
  ],
  faq: [
    { q: "How much does an Illinois bookkeeper or accountant cost?", a: "Monthly bookkeeping runs $400&ndash;$2,500+/mo against a written fixed-fee scope, depending on transaction volume and number of accounts. One-time cleanup runs $1,500&ndash;$15,000+ and catch-up bookkeeping $2,000&ndash;$20,000+. QuickBooks setup is $750&ndash;$5,000+ and a Desktop&rarr;Online migration $2,500&ndash;$10,000+. Every fee is fixed and in writing before any work begins &mdash; never hourly." },
    { q: "Why don't you bill by the hour?", a: "Because hourly billing hides the total until the invoice arrives, penalizes you for the bookkeeper&rsquo;s learning curve, and turns every question into a meter running. A fixed fee against a written scope means you know the price up front and we carry the risk if the work takes longer than expected. The fee only changes when the scope changes &mdash; and any change is agreed in writing first." },
    { q: "What's included in the fixed fee?", a: "Every Illinois engagement includes a named Certified ProAdvisor on your file every month, work in your own QuickBooks file, a written scope before any work, the Illinois tax positions tracked (the flat 4.95% income tax, the PPRT, the 6.25%&ndash;10.25% combined sales tax, and Chicago&rsquo;s 15% lease/&lsquo;cloud&rsquo; tax), a CPA-ready monthly handoff, and honest scoping with no upsell. These are the baseline, not add-ons." },
    { q: "Does the price include filing my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; our fees cover bookkeeping, QuickBooks work, and the CPA-ready handoff, not tax filing or representation. Your CPA files the sales tax (ST-1), the Personal Property Replacement Tax (PPRT), and the 9.5% corporate tax; we keep the books behind them clean and coordinate directly. We are not affiliated with Intuit Inc." },
    { q: "What makes an Illinois engagement cost more or less?", a: "Transaction volume and number of accounts are the main drivers, then industry complexity &mdash; manufacturing (the machinery exemption and inventory), logistics and trucking (multi-state nexus and IFTA), healthcare, professional-services agencies, and restaurants (POS and Chicago combined rates) all add scope. Multi-entity or multi-state structures add more. We assess all of it on the discovery call and quote a single fixed fee that reflects your actual situation." },
    { q: "How do I get my exact Illinois price?", a: "Book a free 30-minute discovery call. We review your QuickBooks file and your Illinois situation, scope the right engagement, and send your exact fixed fee in writing within 3 business days &mdash; before any work begins. No pitch, no obligation." },
  ],
  reviewProse: "These pricing ranges are the canonical TechBrot Illinois figures, applied consistently across every Illinois service and city page. They are maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm. Every engagement is a fixed fee against a written scope agreed before work begins &mdash; never hourly. TechBrot delivers the books and the CPA-ready handoff and coordinates with your CPA, who files the sales tax, the PPRT, and the 9.5% corporate tax; we do not file Illinois returns or represent clients before the Department of Revenue, and we are not affiliated with Intuit Inc.",
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois QuickBooks Accountant", body: "The umbrella engagement &mdash; what a named ProAdvisor does on your Illinois file every month.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "Illinois Monthly Bookkeeping", body: "The recurring monthly close at the heart of the $400&ndash;$2,500+/mo range.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Illinois QuickBooks Cleanup", body: "The one-time fix when the file has drifted &mdash; $1,500&ndash;$15,000+ by depth.", href: "/find-an-accountant/illinois/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { title: "The Illinois overview", body: "The full Illinois picture &mdash; services, industries, cities, and the tax stack.", href: "/find-an-accountant/illinois/", cta: "Illinois overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/pricing/",
    name: "Illinois Bookkeeping & QuickBooks Pricing",
    description: "Fixed-fee Illinois pricing — monthly bookkeeping $400–$2,500+/mo, cleanup $1,500–$15,000+, catch-up $2,000–$20,000+, QuickBooks setup $750–$5,000+, migration $2,500–$10,000+, sales-tax $250–$1,500+/mo, payroll $150–$800+/mo, fractional CFO $3,000–$8,000+/mo. Written scope before any work, no hourly billing, all 102 counties. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois Bookkeeping & QuickBooks Services (Fixed-Fee)",
    serviceType: "Fixed-fee bookkeeping, QuickBooks, and advisory pricing",
    serviceDesc: "Fixed-fee Illinois engagements against a written scope — monthly bookkeeping, cleanup, catch-up, QuickBooks setup and migration, sales-tax tracking, payroll coordination, and fractional-CFO advisory, delivered in the client's own QuickBooks file across all 102 counties. Never hourly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois small and midsize businesses across all 102 counties comparing bookkeeping and QuickBooks pricing",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

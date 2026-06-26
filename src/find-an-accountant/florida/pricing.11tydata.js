/* /find-an-accountant/florida/pricing/ — FL SERVICE CHILD (money cluster, bespoke pricing page).
 * t-bofu, bespoke body in pricing.njk. CANONICAL figures only (blueprint Sheet 0). CORRECTED FL stack
 * (no commercial-rent — repealed Oct 2025; services taxability; 5.5% C-corp; 6%+surtax). HONESTY:
 * fixed-fee not hourly; we don't file FL taxes; founder-name-zero; not Intuit. buildCityGraph speakable
 * IDs = fl-svc-pricing-summary / fl-svc-pricing-ai-summary-list (match the njk). */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const FL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Canonical fixed-fee ranges &middot; Written scope before any work &middot; No hourly billing &middot; No tax-filing claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  bookHref: "/contact/?intent=florida&state=florida&source_type=state-money&funnel_stage=MOFU",
  tldr: [
    "<strong>TechBrot prices every Florida engagement as a fixed fee against a written scope</strong> &mdash; agreed before any work begins, never hourly. A named Certified QuickBooks ProAdvisor works inside your own QuickBooks Online or hosted Desktop file across all 67 Florida counties. We deliver the books and the CPA-ready handoff; your CPA files the sales tax and the 5.5% corporate tax.",
    "The Florida ranges: <strong>monthly bookkeeping $400&ndash;$2,500+/mo, one-time cleanup $1,500&ndash;$15,000+, catch-up bookkeeping $2,000&ndash;$20,000+, QuickBooks setup $750&ndash;$5,000+, Desktop&rarr;Online migration $2,500&ndash;$10,000+, sales-tax tracking $250&ndash;$1,500+/mo, payroll $150&ndash;$800+/mo, and fractional-CFO advisory $3,000&ndash;$8,000+/mo</strong>. Final fees scale with transaction volume, accounts, industry, and multi-entity complexity.",
    "The free 30-minute discovery call returns your exact fixed fee in writing within 3 business days &mdash; no pitch, no obligation. Independent firm; not affiliated with Intuit Inc.; we don&rsquo;t file Florida taxes.",
  ],
  aiSummary: [
    { q: "How much does a Florida bookkeeper cost?", a: "<strong>Monthly bookkeeping runs $400&ndash;$2,500+/mo</strong> against a written fixed-fee scope, by transaction volume and number of accounts. One-time cleanup runs $1,500&ndash;$15,000+, and catch-up bookkeeping $2,000&ndash;$20,000+. Never hourly; your exact fee comes in writing within 3 business days of a free discovery call." },
    { q: "Is pricing fixed-fee or hourly?", a: "<strong>Always fixed-fee against a written scope</strong>, agreed before any work begins &mdash; never hourly. No surprise invoices, no clock-watching. The scope and the fee are both in writing up front." },
    { q: "What does QuickBooks setup or cleanup cost in Florida?", a: "<strong>QuickBooks setup runs $750&ndash;$5,000+</strong> by entity and industry complexity (by-county sales tax, taxable-service flags, hospitality POS). <strong>Cleanup runs $1,500&ndash;$15,000+</strong> depending on how far the file has drifted &mdash; single-rate sales tax and miscoded service taxability are common Florida fixes." },
    { q: "Do your fees include filing my Florida taxes?", a: "No &mdash; TechBrot keeps the books CPA-ready and coordinates with your CPA, who files the sales tax (including on taxable services) and the 5.5% corporate tax. Our fees cover bookkeeping, QuickBooks work, and the CPA-ready handoff, not tax filing or representation. Independent firm; not affiliated with Intuit Inc." },
    { q: "How do I get my exact Florida price?", a: "<strong>Book a free 30-minute discovery call.</strong> We review your file and your Florida situation, scope the right engagement, and send your exact fixed fee in writing within 3 business days &mdash; before any work begins." },
  ],
  shapes: [
    { tag: "Shape 01 &middot; Recurring", title: "Monthly bookkeeping &amp; close", body: "A fixed monthly fee for a recurring close &mdash; reconciliation, categorization, 6%+surtax sales-tax reconciliation by county, taxable-service flagging, and CPA-ready statements.", examples: "<strong>$400&ndash;$2,500+/mo.</strong> Scales with transaction volume, accounts, and industry (hospitality, marine, and SaaS carry more)." },
    { tag: "Shape 02 &middot; One-time", title: "Cleanup, catch-up &amp; setup", body: "A fixed one-time fee for a defined project &mdash; a QuickBooks cleanup, a multi-year catch-up, a new-file setup, or a Desktop&rarr;Online migration, scoped to a clear deliverable.", examples: "<strong>Cleanup $1,500&ndash;$15,000+ &middot; catch-up $2,000&ndash;$20,000+ &middot; setup $750&ndash;$5,000+ &middot; migration $2,500&ndash;$10,000+.</strong>" },
    { tag: "Shape 03 &middot; Advisory", title: "Fractional-CFO advisory", body: "A fixed monthly retainer for forecasting, board reporting, and corporate-tax-position planning &mdash; once the books are clean, in coordination with your CPA. By application.", examples: "<strong>$3,000&ndash;$8,000+/mo.</strong> Best fit: $1M&ndash;$50M Florida businesses where the books need to inform strategy." },
  ],
  ranges: [
    { type: "Recurring", service: "Monthly bookkeeping", fee: "$400&ndash;$2,500+/mo", cadence: "Recurring monthly", href: "/find-an-accountant/florida/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { type: "One-time", service: "QuickBooks cleanup", fee: "$1,500&ndash;$15,000+", cadence: "One-time, written scope", href: "/find-an-accountant/florida/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { type: "One-time", service: "Catch-up bookkeeping", fee: "$2,000&ndash;$20,000+", cadence: "One-time, by months behind", href: "/find-an-accountant/florida/cleanup-bookkeeping/", cta: "Catch-up bookkeeping &rarr;" },
    { type: "One-time", service: "QuickBooks setup", fee: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 weeks", href: "/find-an-accountant/florida/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { type: "One-time", service: "Desktop &rarr; Online migration", fee: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 weeks", href: "/find-an-accountant/florida/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
    { type: "Recurring", service: "Sales-tax tracking in QuickBooks", fee: "$250&ndash;$1,500+/mo", cadence: "Recurring monthly", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { type: "Recurring", service: "Payroll coordination", fee: "$150&ndash;$800+/mo", cadence: "Recurring monthly", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { type: "Advisory", service: "Fractional-CFO advisory", fee: "$3,000&ndash;$8,000+/mo", cadence: "Retainer, by application", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],
  rangesNote: "Indicative starting ranges, consistent across every TechBrot Florida page. Final fees scale with transaction volume, employee count, industry specifics (hospitality, marine, SaaS), and multi-entity or multi-state exposure. The sales tax and the 5.5% corporate tax <em>filing</em> are your CPA&rsquo;s; our fees cover the bookkeeping and CPA-ready handoff. <a href=\"/contact/?intent=florida&state=florida&source_type=state-money&funnel_stage=MOFU\">Get a written Florida scope &rarr;</a>",
  whyBody: [
    "Hourly billing punishes you for your bookkeeper&rsquo;s learning curve and turns every question into a meter running. It also hides the total until the invoice lands. We think that&rsquo;s backwards.",
    "A fixed fee against a written scope means you know the price before any work begins, and we carry the risk of the work taking longer than expected &mdash; not you. It aligns us with getting the books right efficiently, and it makes budgeting a Florida engagement simple.",
    "The only time the fee changes is when the scope changes &mdash; you take on payroll, add an entity, open a second location &mdash; and any change is agreed in writing before we act on it. No surprise invoices, ever.",
  ],
  includes: [
    { number: "01", title: "A named Certified ProAdvisor", body: "The same Certified QuickBooks ProAdvisor on your file every month &mdash; not a rotating queue or an offshore handoff." },
    { number: "02", title: "Your own QuickBooks file", body: "We work in your own QuickBooks Online or hosted Desktop file &mdash; your data, no proprietary lock-in." },
    { number: "03", title: "Written scope before any work", body: "The deliverable and the fixed fee both in writing within 3 business days of the discovery call, before work begins." },
    { number: "04", title: "Florida tax positions tracked", body: "The 5.5% corporate-tax position (where it applies), 6%+surtax sales tax, taxable services, and tangible personal property kept current for your CPA." },
    { number: "05", title: "CPA-ready monthly handoff", body: "Statements your CPA can file from directly &mdash; we coordinate with your CPA, who files." },
    { number: "06", title: "Honest scope &amp; no upsell", body: "If you need less than you asked for, we say so. We scope what the books actually need, not what bills the most." },
  ],
  faq: [
    { q: "How much does a Florida bookkeeper or accountant cost?", a: "Monthly bookkeeping runs $400&ndash;$2,500+/mo against a written fixed-fee scope, depending on transaction volume and number of accounts. One-time <a href=\"/find-an-accountant/florida/cleanup-bookkeeping/\">cleanup</a> runs $1,500&ndash;$15,000+ and catch-up bookkeeping $2,000&ndash;$20,000+. QuickBooks setup is $750&ndash;$5,000+ and a Desktop&rarr;Online migration $2,500&ndash;$10,000+. Every fee is fixed and in writing before any work begins &mdash; never hourly." },
    { q: "Why don't you bill by the hour?", a: "Because hourly billing hides the total until the invoice arrives, penalizes you for the bookkeeper&rsquo;s learning curve, and turns every question into a meter running. A fixed fee against a written scope means you know the price up front and we carry the risk if the work takes longer than expected. The fee only changes when the scope changes &mdash; and any change is agreed in writing first." },
    { q: "What's included in the fixed fee?", a: "Every Florida engagement includes a named Certified ProAdvisor on your file every month, work in your own QuickBooks file, a written scope before any work, the Florida tax positions tracked (the 5.5% corporate tax, 6%+surtax sales tax, taxable services, tangible personal property), a CPA-ready monthly handoff, and honest scoping with no upsell. These are the baseline, not add-ons." },
    { q: "Does the price include filing my Florida taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; our fees cover bookkeeping, QuickBooks work, and the CPA-ready handoff, not tax filing or representation. Your CPA files the <a href=\"/find-an-accountant/florida/sales-tax-help/\">sales tax</a> (including on taxable services) and the 5.5% corporate tax; we keep the books behind them clean and coordinate directly. We are not affiliated with Intuit Inc." },
    { q: "What makes a Florida engagement cost more or less?", a: "Transaction volume and number of accounts are the main drivers, then industry complexity &mdash; hospitality (POS and the Tourist Development Tax), marine (the vessel sales-tax cap), SaaS (deferred revenue), and multi-entity or multi-state structures all add scope. We assess all of it on the discovery call and quote a single fixed fee that reflects your actual situation." },
    { q: "How do I get my exact Florida price?", a: "Book a free 30-minute discovery call &mdash; or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your QuickBooks file and your Florida situation, scope the right engagement, and send your exact fixed fee in writing within 3 business days &mdash; before any work begins. No pitch, no obligation." },
  ],
  reviewProse: "These pricing ranges are the canonical TechBrot Florida figures, applied consistently across every Florida service and city page. They are maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm. Every engagement is a fixed fee against a written scope agreed before work begins &mdash; never hourly. TechBrot delivers the books and the CPA-ready handoff and coordinates with your CPA, who files the sales tax and the 5.5% corporate tax; we do not file Florida returns or represent clients before the Department of Revenue, and we are not affiliated with Intuit Inc.",
  reviewCreds: FL_REVIEW_CREDS,
  related: [
    { title: "Florida QuickBooks Accountant", body: "The umbrella engagement &mdash; what a named ProAdvisor does on your Florida file every month.", href: "/find-an-accountant/florida/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "Florida Monthly Bookkeeping", body: "The recurring monthly close at the heart of the $400&ndash;$2,500+/mo range.", href: "/find-an-accountant/florida/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Florida QuickBooks Cleanup", body: "The one-time fix when the file has drifted &mdash; $1,500&ndash;$15,000+ by depth.", href: "/find-an-accountant/florida/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { title: "The Florida overview", body: "The full Florida picture &mdash; services, industries, cities, and the tax stack.", href: "/find-an-accountant/florida/", cta: "Florida overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/pricing/",
    name: "Florida Bookkeeping & QuickBooks Pricing",
    description: "Fixed-fee Florida pricing — bookkeeping $400–$2,500+/mo, cleanup $1,500–$15,000+, catch-up $2,000–$20,000+, setup $750+. Written scope, never hourly.",
    serviceName: "Florida Bookkeeping & QuickBooks Services (Fixed-Fee)",
    serviceType: "Fixed-fee bookkeeping, QuickBooks, and advisory pricing",
    serviceDesc: "Fixed-fee Florida engagements against a written scope — monthly bookkeeping, cleanup, catch-up, QuickBooks setup and migration, sales-tax tracking, payroll coordination, and fractional-CFO advisory, delivered in the client's own QuickBooks file across all 67 counties. Never hourly. Independent Certified QuickBooks ProAdvisor firm; does not file Florida tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" }],
    audienceType: "Florida small and midsize businesses across all 67 counties comparing bookkeeping and QuickBooks pricing",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

/* /find-an-accountant/california/pricing/ — CA SERVICE CHILD (money cluster, pricing table).
 * t-bofu. Bespoke body (pricing.njk). Canonical fixed-fee ranges only (blueprint figures, used
 * consistently across the CA cluster). HONESTY: fixed-fee not hourly; we don't file CA taxes;
 * founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Pricing standard", detail: "Fixed-fee against a written scope &middot; No hourly billing &middot; Quoted per engagement after a free discovery call &middot; Reviewed periodically" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/pricing/",
    name: "California Bookkeeping & QuickBooks Pricing",
    description: "Fixed-fee California pricing — monthly bookkeeping from $400/mo, cleanup from $1,500, QuickBooks setup from $750. Written scope first, no hourly billing.",
    serviceName: "California Bookkeeping & QuickBooks Services (Fixed-Fee)",
    serviceType: "Fixed-fee bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Fixed-fee bookkeeping, QuickBooks, sales-tax, payroll, and advisory services for California businesses, scoped in writing before any work begins — monthly bookkeeping, cleanup, catch-up, setup, migration, sales-tax tracking, payroll, and fractional CFO. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses comparing fixed-fee bookkeeping and QuickBooks pricing",
    offerPrice: "400",
  },
  tldr: [
    "<strong>TechBrot prices every California engagement as a fixed fee against a written scope, agreed before any work begins &mdash; never hourly.</strong> You know the cost before we touch the books, and it doesn&rsquo;t change unless the scope does. A named Certified QuickBooks ProAdvisor works in your own QuickBooks file across all 58 counties.",
    "California ranges: monthly bookkeeping <strong>$400&ndash;$2,500+/mo</strong>, cleanup <strong>$1,500&ndash;$15,000+</strong>, catch-up <strong>$2,000&ndash;$20,000+</strong>, QuickBooks setup <strong>$750&ndash;$5,000+</strong>, Desktop-to-Online migration <strong>$2,500&ndash;$10,000+</strong>, sales-tax tracking <strong>$250&ndash;$1,500+/mo</strong>, payroll <strong>$150&ndash;$800+/mo</strong>, and fractional CFO <strong>$3,000&ndash;$8,000+/mo</strong>. The free 30-minute discovery call returns your exact fixed fee in writing within 3 business days. We deliver the books; your CPA files the returns and the $800 franchise tax.",
  ],
  aiSummary: [
    { q: "How much does a California bookkeeper cost?", a: "<strong>Monthly bookkeeping runs $400&ndash;$2,500+/mo</strong> by transaction volume and accounts; one-time cleanup <strong>$1,500&ndash;$15,000+</strong>; multi-year catch-up <strong>$2,000&ndash;$20,000+</strong>. Every fee is fixed against a written scope, quoted within 3 business days of a free discovery call &mdash; never hourly." },
    { q: "Do you bill hourly?", a: "<strong>No.</strong> Every California engagement is a fixed fee against a written scope, agreed before any work begins. No hourly billing, no surprise invoices, no scope creep &mdash; if the scope changes, we re-quote in writing first." },
    { q: "What does QuickBooks setup or migration cost in California?", a: "QuickBooks setup runs <strong>$750&ndash;$5,000+</strong> by complexity; a Desktop-to-Online migration <strong>$2,500&ndash;$10,000+</strong>. Both include the California specifics &mdash; district sales tax by location, the $800 franchise-tax accrual, AB5 contractor tracking." },
    { q: "How do I get my exact price?", a: "Book a <strong>free 30-minute discovery call</strong>. A Certified ProAdvisor reviews your file and your California situation and sends a written fixed-fee scope within 3 business days, before any work begins." },
    { q: "Does the price include filing my California taxes?", a: "No &mdash; TechBrot is an independent ProAdvisor firm that keeps the books CPA-ready. Your CPA or EA files the FTB, CDTFA, and income returns and the $800 franchise tax. We coordinate directly with them." },
  ],
  shapes: [
    { tag: "Recurring", title: "Monthly engagements", body: "Ongoing bookkeeping, payroll, and sales-tax work priced as a fixed monthly fee by volume and complexity.", examples: "<strong>Examples:</strong> monthly bookkeeping ($400&ndash;$2,500+/mo), payroll ($150&ndash;$800+/mo), sales-tax tracking ($250&ndash;$1,500+/mo), fractional CFO ($3,000&ndash;$8,000+/mo)." },
    { tag: "One-time", title: "Project engagements", body: "A defined start and finish &mdash; cleanup, catch-up, setup, or migration &mdash; priced as a one-time fixed fee against a written scope.", examples: "<strong>Examples:</strong> cleanup ($1,500&ndash;$15,000+), catch-up ($2,000&ndash;$20,000+), setup ($750&ndash;$5,000+), migration ($2,500&ndash;$10,000+)." },
    { tag: "Combined", title: "Cleanup-then-monthly", body: "The most common California start: a one-time cleanup or catch-up to get CPA-ready, then a recurring monthly fee to stay there.", examples: "<strong>Example:</strong> a $4,000 cleanup followed by $700/mo monthly bookkeeping &mdash; both fixed and scoped in writing up front." },
  ],
  ranges: [
    { type: "Recurring", service: "Monthly bookkeeping", fee: "$400&ndash;$2,500+/mo", cadence: "By volume, accounts &amp; complexity", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { type: "One-time", service: "Bookkeeping cleanup", fee: "$1,500&ndash;$15,000+", cadence: "One-time, written scope", href: "/find-an-accountant/california/cleanup-bookkeeping/", cta: "Cleanup &amp; catch-up &rarr;" },
    { type: "One-time", service: "Catch-up (multi-year)", fee: "$2,000&ndash;$20,000+", cadence: "One-time, by years behind", href: "/find-an-accountant/california/cleanup-bookkeeping/", cta: "Cleanup &amp; catch-up &rarr;" },
    { type: "One-time", service: "QuickBooks setup", fee: "$750&ndash;$5,000+", cadence: "One-time, 2&ndash;4 weeks", href: "/find-an-accountant/california/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { type: "One-time", service: "Desktop &rarr; Online migration", fee: "$2,500&ndash;$10,000+", cadence: "One-time, 3&ndash;8 weeks", href: "/find-an-accountant/california/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
    { type: "Recurring", service: "Sales-tax tracking (CDTFA)", fee: "$250&ndash;$1,500+/mo", cadence: "Recurring; + $500&ndash;$3,000 nexus review", href: "/find-an-accountant/california/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { type: "Recurring", service: "Payroll management", fee: "$150&ndash;$800+/mo", cadence: "Recurring; CA SDI/PIT/EDD config", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { type: "Recurring", service: "Fractional CFO", fee: "$3,000&ndash;$8,000+/mo", cadence: "By application; books clean first", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],
  rangesNote: "Indicative starting ranges. Final fees scale with transaction volume, employee and contractor count, district-tax footprint, industry specifics, and multi-state exposure. <a href=\"/contact/?intent=california&amp;state=california&amp;source_type=state-money&amp;funnel_stage=BOFU\">Get a written fixed-fee scope &rarr;</a>",
  whyBody: [
    "Hourly billing punishes you for our learning curve and rewards slow work &mdash; the worse the books, the bigger the bill. Fixed-fee aligns us with you: we quote the job, and if it takes longer than we thought, that&rsquo;s our problem, not your invoice.",
    "It also means you can budget. A California business deciding whether to bring in a bookkeeper shouldn&rsquo;t have to gamble on an open-ended hourly meter. You get the scope and the number in writing, before any work begins &mdash; and it only changes if you change the scope.",
  ],
  includes: [
    { number: "01", title: "A written scope first", body: "Every engagement starts with a written scope and fixed fee &mdash; agreed before any work begins, never a surprise." },
    { number: "02", title: "A named ProAdvisor", body: "The same Certified QuickBooks ProAdvisor on your file every month &mdash; not a rotating queue." },
    { number: "03", title: "Your own QuickBooks file", body: "Your file, your data, in QuickBooks Online or hosted Desktop &mdash; no proprietary lock-in." },
    { number: "04", title: "California built in", body: "District sales tax by location, the $800 franchise-tax accrual, and AB5 tracking handled as standard." },
    { number: "05", title: "CPA-ready handoff", body: "Clean monthly statements your CPA can file from &mdash; we coordinate directly with them." },
    { number: "06", title: "No hourly billing", body: "No meter, no surprise invoices, no scope creep &mdash; the fee changes only if you change the scope." },
  ],
  faq: [
    { q: "How much does a California bookkeeper or QuickBooks accountant cost?", a: "Fixed fees against a written scope, never hourly. Starting ranges: monthly bookkeeping $400&ndash;$2,500+/mo; <a href=\"/find-an-accountant/california/cleanup-bookkeeping/\">cleanup</a> $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; Desktop-to-Online migration $2,500&ndash;$10,000+; sales-tax tracking $250&ndash;$1,500+/mo; payroll $150&ndash;$800+/mo; fractional CFO $3,000&ndash;$8,000+/mo. Your exact fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "Why fixed-fee instead of hourly?", a: "Fixed-fee aligns us with you. Hourly billing rewards slow work and punishes you for messy books &mdash; the worse the file, the bigger the bill. With a fixed fee we quote the job up front; if it takes longer than expected, that&rsquo;s our problem, not your invoice. And you can actually budget, because the number is agreed before any work begins." },
    { q: "What changes the price?", a: "The scope &mdash; transaction volume, number of accounts, employees and contractors, your <a href=\"/find-an-accountant/california/sales-tax-help/\">district-tax footprint</a>, industry specifics, and multi-state exposure. We scope all of that on the free discovery call and quote a fixed fee. The fee only changes if you change the scope, and we re-quote in writing first." },
    { q: "Is the discovery call really free?", a: "Yes &mdash; a free, no-obligation 30-minute call with a Certified ProAdvisor who reviews your file and your California situation. You get a written fixed-fee scope within 3 business days; there&rsquo;s no charge for the call and no pressure to proceed. Call <a href=\"tel:+18777515575\">(877) 751-5575</a> to book it." },
    { q: "Does the price include filing my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; the fee covers bookkeeping and QuickBooks work and keeps the books CPA-ready. Your CPA or EA files the FTB, CDTFA, and income returns and the $800 franchise tax. We coordinate directly with your CPA." },
    { q: "Do you require a long-term contract?", a: "No long-term lock-in. Monthly engagements are month-to-month against the written scope; project work is a one-time fixed fee. We earn the relationship each month rather than trapping you in a contract." },
    { q: "Do these prices apply across California?", a: "Yes &mdash; the same fixed-fee model applies across all 58 California counties, delivered remotely on QuickBooks. Your district-tax footprint and complexity affect the fee, not your city; we quote each engagement individually." },
  ],
  related: [
    { title: "California QuickBooks accountant", body: "What a named ProAdvisor does on your California file every month.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "California monthly bookkeeping", body: "The recurring monthly close, priced as a fixed monthly fee.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Free QuickBooks file review", body: "Not sure where you stand? Get a free review and an honest read first.", href: "/quickbooks/file-review/?intent=file-review", cta: "Free file review &rarr;" },
    { title: "Speak to a ProAdvisor", body: "Talk it through with an actual Certified ProAdvisor &mdash; free, no pitch.", href: "/find-an-accountant/california/speak-to-a-proadvisor/", cta: "Speak to a ProAdvisor &rarr;" },
  ],
  reviewProse: "Pricing on this page is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving California businesses across all 58 counties. Ranges reflect current operational pricing for California engagements and are reviewed periodically; specific fixed fees are quoted per engagement after a free discovery call. California tax references &mdash; the $800 FTB franchise tax and CDTFA district sales tax &mdash; reflect <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">FTB</a> and <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a> rules current as of the date below. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files; it does not file California tax returns.",
  reviewCreds: REVIEW_CREDS,
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

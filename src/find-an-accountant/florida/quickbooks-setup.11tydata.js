/* /find-an-accountant/florida/quickbooks-setup/ â€” FL SERVICE CHILD (QB spoke).
 * t-bofu Â· partials/state-service-body.njk. FL-localized (6%+county-surtax / service-taxability / TPP).
 * HONESTY: deferred to FL Dept of Revenue + CPA; founder-name-zero; not Intuit. Links to BUILT pages. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const FL_FACTS = [
  { fig: "6% + surtax", title: "Sales tax by county, not one rate", body: "Florida combined sales tax (6% + a discretionary county surtax) varies by county, so QuickBooks must apply the correct rate <strong>by county</strong>, not a flat statewide rate &mdash; with single-item surtax caps handled. It&rsquo;s the single most-missed Florida setup step." },
  { fig: "Services", title: "Florida taxes services others exempt", body: "Unlike most states, Florida taxes a range of <strong>services</strong> &mdash; commercial cleaning, pest control, certain repairs, security, commercial laundry. Owners who assume services are exempt routinely under-collect, so we flag taxable vs. exempt service lines in QuickBooks and apply the right rate." },
  { fig: "TPP", title: "A fixed-asset schedule from day one", body: "Florida&rsquo;s annual <strong>tangible personal property</strong> return (DR-405) needs a maintained fixed-asset schedule. Set it up at the start and the return is a quick export, not a year-end reconstruction." },
];
const FL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Florida businesses remotely across all 67 counties. Florida tax figures &mdash; no personal income tax, the 5.5% corporate income tax, 6% sales tax plus discretionary county surtax, the taxability of services, and the tangible personal property return &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://floridarevenue.com/\" rel=\"noopener nofollow\">Florida Department of Revenue</a>. Rates change; confirm current figures with the Department and your CPA. TechBrot configures QuickBooks and provides bookkeeping and coordinates with your CPA, who files; we do not file Florida returns or represent clients before the Department.";
const FL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Florida Department of Revenue &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/florida/quickbooks-setup/",
  slug: "fl-svc-qbsetup",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Florida QuickBooks Setup Â· TechBrot",
  description: "QuickBooks setup for Florida businesses by a Certified ProAdvisor â€” FL chart of accounts, 6%+surtax sales tax by county, service taxability, fixed-asset schedule for TPP, payroll. Fixed-fee, all 67 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "QuickBooks Setup" },
  ],
  bookHref: "/contact/?intent=florida&state=florida&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Florida &middot; QuickBooks Setup",
    heading: "Florida QuickBooks setup, done right the first time.",
    subheading: "A Certified QuickBooks ProAdvisor sets up your Florida file properly &mdash; a FL-correct chart of accounts, 6%+surtax sales-tax items by county, the taxability of services configured, a fixed-asset schedule for the TPP return, and payroll &mdash; so the books are right from transaction one. Fixed-fee, all 67 counties. We set it up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for Florida businesses</strong> &mdash; a Certified ProAdvisor configures a FL-correct chart of accounts, 6%+surtax sales-tax items by county, the taxability of services, a fixed-asset schedule for the tangible personal property return, and Florida payroll in your QuickBooks Online or Desktop file, so the books are right from day one. The full Florida QuickBooks setup summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Florida tax references reflect Department of Revenue rules current as of the review date; TechBrot does not file Florida taxes.",
  },
  ctaBand: {
    eyebrow: "Florida businesses start here",
    heading: "Setting up QuickBooks in Florida? Let&rsquo;s do it right.",
    lede: "Book a free discovery call. We&rsquo;ll scope the setup and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Florida",
  copy: {
    aiHeading: "Florida QuickBooks setup, in five questions.",
    valueEyebrow: "What a Florida setup includes",
    valueHeading: "A file built for how Florida taxes.",
    valueLede: "Setup decisions made now shape years of bookkeeping &mdash; so the Florida specifics go in from the start.",
    factsEyebrow: "Florida tax realities we build into the setup",
    factsHeading: "Three Florida facts the setup gets right from day one.",
    factsLede: "A generic QuickBooks setup misses these &mdash; and fixing them later is a cleanup. We configure them up front.",
    faqHeading: "Florida QuickBooks setup questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for Florida businesses</strong> &mdash; a Certified QuickBooks ProAdvisor configures your <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop file to a Florida standard: a FL-correct chart of accounts, <strong>6%+surtax sales-tax items by county</strong> (not a flat statewide rate), the <a href=\"/find-an-accountant/florida/corporate-tax-help/\">taxability of services</a> configured, a fixed-asset schedule for the annual <strong>tangible personal property</strong> return, and Florida payroll. Setup decisions made now shape years of bookkeeping, so the Florida specifics go in from transaction one. Fixed-fee against a written scope (typically $750&ndash;$5,000+ by complexity). Independent firm &mdash; not affiliated with Intuit Inc.; we set it up, your CPA files.",
  aiSummary: [
    { q: "What does Florida QuickBooks setup include?", a: "<strong>A FL-correct chart of accounts, 6%+surtax sales-tax items configured by county, the taxability of services, a fixed-asset schedule for the TPP return, and Florida payroll setup</strong> &mdash; by a Certified QuickBooks ProAdvisor in QuickBooks Online or Desktop. We set it up; your CPA files." },
    { q: "Why does a Florida setup need a specialist?", a: "Because the Florida specifics are configured at setup or fixed later as a cleanup. <strong>Sales tax must be applied by county surtax</strong>, the <strong>taxability of services</strong> set up correctly, and a <strong>fixed-asset schedule</strong> built for the TPP return. A generic setup misses all three." },
    { q: "QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either, in your own file. QBO suits most Florida small businesses and hospitality/SaaS; Desktop or Enterprise suits some inventory- or job-cost-heavy operations. We&rsquo;ll recommend honestly and set it up." },
    { q: "What does setup cost?", a: "Fixed-fee against a written scope, typically <strong>$750&ndash;$5,000+</strong> depending on entity complexity, payroll, inventory, and integrations. Exact fee in writing within 3 business days." },
    { q: "Do you keep the books after setup?", a: "If you want &mdash; many Florida businesses move from setup into <a href=\"/find-an-accountant/florida/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor. Setup alone is fine too." },
  ],
  value: [
    { num: "01", title: "Florida chart of accounts", body: "A chart of accounts built for your Florida industry &mdash; structured for the reporting and tax positions you actually need.", href: "/find-an-accountant/florida/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "Sales tax by county", body: "6%+surtax sales-tax items configured to the correct combined rate by county, with single-item caps &mdash; the single most-missed Florida setup step.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "Service taxability configured", body: "Taxable service lines set up from day one so Florida&rsquo;s tax on services is rated correctly &mdash; the line generic setups miss.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "TPP fixed-asset schedule", body: "Equipment and furniture tracked from day one so the annual tangible personal property return (DR-405) is a quick export.", href: "/find-an-accountant/florida/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "05", title: "Florida payroll config", body: "QuickBooks Payroll configured for Florida &mdash; no state income-tax withholding, but federal and reemployment tax set up cleanly with your provider.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "Clean go-live or migration", body: "Opening balances, integrations, and reporting right &mdash; or migrated cleanly from Desktop or another system.", href: "/find-an-accountant/florida/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
  ],
  facts: FL_FACTS,
  scopeDo: [
    "Configure a Florida-correct chart of accounts",
    "Set 6%+surtax sales-tax items by county, with single-item caps",
    "Configure service taxability set up correctly",
    "Build a fixed-asset schedule for the TPP return and configure Florida payroll",
    "Set opening balances, integrations, and reporting cleanly",
    "Train your team on the new file if you want it",
  ],
  scopeDont: [
    "File the Florida sales tax, corporate income tax, or taxability of services",
    "File the tangible personal property return or federal returns",
    "Represent you before the Florida Department of Revenue",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free scoping call", body: "A Certified ProAdvisor reviews your business, entity, payroll, leases, and industry to scope the setup." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; QBO or Desktop, with the Florida specifics listed." },
    { phase: "Step 3", title: "Build &amp; configure", body: "We build the chart of accounts, by-county sales tax, service taxability, fixed-asset schedule, and payroll." },
    { phase: "Step 4", title: "Go-live &amp; handoff", body: "Opening balances set, integrations connected, and your team trained &mdash; or straight into monthly bookkeeping." },
  ],
  advisoryBody: [
    "A Florida QuickBooks setup is the cheapest insurance you&rsquo;ll buy &mdash; getting by-county sales tax, the taxability of services, and the TPP fixed-asset schedule right at setup avoids the cleanup that costs many multiples later.",
    "Once the file is built right, the same named ProAdvisor can keep it clean in <a href=\"/find-an-accountant/florida/monthly-bookkeeping/\">monthly bookkeeping</a> and extend into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> when you&rsquo;re ready.",
  ],
  faq: [
    { q: "What does Florida QuickBooks setup include?", a: "A Certified ProAdvisor configures a FL-correct chart of accounts, 6%+surtax sales-tax items by county (with single-item caps), the taxability of services configured to record from leases, a fixed-asset schedule for the TPP return, and Florida payroll, with opening balances, integrations, and reporting set cleanly &mdash; in your own QuickBooks Online or Desktop file. We set it up; your CPA files." },
    { q: "Why does a Florida setup need a ProAdvisor?", a: "Because the Florida specifics are either configured at setup or fixed later as a cleanup. Sales tax has to be applied by county surtax rather than a flat statewide rate, the taxability of services has to be recorded from leases, and a fixed-asset schedule should exist from the start for the TPP return. A generic setup misses all three and turns into an expensive cleanup." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either in your own file. QuickBooks Online suits most Florida small businesses, hospitality, and SaaS; Desktop or Enterprise can suit inventory- or job-cost-heavy operations like construction or marine. We recommend honestly and set it up; we earn nothing on the subscription regardless." },
    { q: "How much does Florida QuickBooks setup cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $750&ndash;$5,000+ depending on entity complexity, payroll, inventory, and integrations. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Can you set up Florida payroll too?", a: "Yes &mdash; we configure QuickBooks Payroll for a Florida employer. Florida has no state income-tax withholding, but we set up federal withholding, federal unemployment, and the Florida reemployment tax (RT-6) correctly, coordinated with your payroll provider." },
    { q: "Do you keep the books after setup?", a: "If you want. Many Florida businesses move from setup straight into monthly bookkeeping with the same named ProAdvisor, so the file stays as clean as the day it went live. A setup-only engagement is also fine." },
    { q: "Do you file my Florida taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we set up and keep the books CPA-ready and coordinate with your CPA, who files the sales tax, corporate income tax, service taxability, and TPP return. We are not affiliated with Intuit Inc." },
  ],
  reviewProse: FL_REVIEW_PROSE,
  reviewCreds: FL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/quickbooks-setup/",
    name: "Florida QuickBooks Setup",
    description: "QuickBooks setup for Florida businesses by a Certified ProAdvisor â€” a FL chart of accounts, 6%+surtax sales-tax items by county, the taxability of services, a fixed-asset schedule for TPP, and Florida payroll. Independent firm; does not file Florida taxes.",
    serviceName: "Florida QuickBooks Setup Services",
    serviceType: "QuickBooks setup and implementation",
    serviceDesc: "QuickBooks Online or Desktop setup for Florida businesses â€” a Florida-correct chart of accounts, 6%+surtax sales-tax items by county, taxability of services configuration, a fixed-asset schedule for the tangible personal property return, Florida payroll, opening balances, and integrations. Independent Certified QuickBooks ProAdvisor firm; does not file Florida tax returns â€” coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" }],
    audienceType: "Florida small and midsize businesses across all 67 counties setting up or restructuring QuickBooks",
    offerPrice: "750",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

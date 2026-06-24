/* /find-an-accountant/texas/quickbooks-setup/ â€” TX SERVICE CHILD (QB spoke).
 * t-bofu Â· partials/state-service-body.njk. TX-localized (margin tax / 8.25% by-location / BPP).
 * HONESTY: deferred to Texas Comptroller + CPA; founder-name-zero; not Intuit. Links to BUILT pages. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const TX_FACTS = [
  { fig: "8.25%", title: "Sales tax by location, not one rate", body: "Texas combined sales tax (6.25% state + up to 2% local) varies by jurisdiction, so QuickBooks must apply the correct rate <strong>by customer location</strong>, not a flat statewide rate. It&rsquo;s the single most-missed Texas setup step &mdash; and the most common cleanup later." },
  { fig: "Margin", title: "Books that feed the franchise (margin) tax", body: "The Texas Franchise (&ldquo;margin&rdquo;) tax is computed from revenue, cost of goods sold, and compensation &mdash; so those have to be tracked distinctly from setup, or your CPA can&rsquo;t compute the margin cleanly at filing time." },
  { fig: "BPP", title: "A fixed-asset schedule from day one", body: "Texas&rsquo;s annual <strong>business personal property</strong> rendition needs a maintained fixed-asset schedule. Set it up at the start and the rendition is a quick export, not a year-end reconstruction." },
];
const TX_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Texas businesses remotely across all 254 counties. Texas tax figures &mdash; no state income tax, the franchise (margin) tax, 8.25% sales tax, and business personal property rendition &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://comptroller.texas.gov/\" rel=\"noopener nofollow\">Texas Comptroller of Public Accounts</a>. TechBrot configures QuickBooks and provides bookkeeping and coordinates with your CPA, who files; we do not file Texas returns or represent clients before the Comptroller.";
const TX_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/quickbooks-setup/",
  slug: "tx-svc-qbsetup",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Texas QuickBooks Setup Â· TechBrot",
  description: "QuickBooks setup for Texas businesses by a Certified ProAdvisor â€” TX chart of accounts, 8.25% sales tax by location, margin-tax-ready books, fixed-asset schedule for BPP, payroll. Fixed-fee, all 254 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "QuickBooks Setup" },
  ],
  bookHref: "/contact/?intent=texas&state=texas&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Texas &middot; QuickBooks Setup",
    heading: "Texas QuickBooks setup, done right the first time.",
    subheading: "A Certified QuickBooks ProAdvisor sets up your Texas file properly &mdash; a TX-correct chart of accounts, 8.25% sales-tax items by location, revenue/COGS/compensation tracked for the margin tax, a fixed-asset schedule for the BPP rendition, and payroll &mdash; so the books are right from transaction one. Fixed-fee, all 254 counties. We set it up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for Texas businesses</strong> &mdash; a Certified ProAdvisor configures a TX-correct chart of accounts, 8.25% sales-tax items by location, margin-tax-ready revenue/COGS/compensation tracking, a fixed-asset schedule for the business personal property rendition, and Texas payroll in your QuickBooks Online or Desktop file, so the books are right from day one. The full Texas QuickBooks setup summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Texas tax references reflect Comptroller rules current as of the review date; TechBrot does not file Texas taxes.",
  },
  ctaBand: {
    eyebrow: "Texas businesses start here",
    heading: "Setting up QuickBooks in Texas? Let&rsquo;s do it right.",
    lede: "Book a free discovery call. We&rsquo;ll scope the setup and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Texas",
  copy: {
    aiHeading: "Texas QuickBooks setup, in five questions.",
    valueEyebrow: "What a Texas setup includes",
    valueHeading: "A file built for how Texas taxes.",
    valueLede: "Setup decisions made now shape years of bookkeeping &mdash; so the Texas specifics go in from the start.",
    factsEyebrow: "Texas tax realities we build into the setup",
    factsHeading: "Three Texas facts the setup gets right from day one.",
    factsLede: "A generic QuickBooks setup misses these &mdash; and fixing them later is a cleanup. We configure them up front.",
    faqHeading: "Texas QuickBooks setup questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for Texas businesses</strong> &mdash; a Certified QuickBooks ProAdvisor configures your <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop file to a Texas standard: a TX-correct chart of accounts, <strong>8.25% sales-tax items by location</strong> (not a flat statewide rate), revenue/COGS/compensation tracked distinctly for the <a href=\"/find-an-accountant/texas/franchise-tax-help/\">franchise (margin) tax</a>, a fixed-asset schedule for the annual <strong>business personal property</strong> rendition, and Texas payroll. Setup decisions made now shape years of bookkeeping, so the Texas specifics go in from transaction one. Fixed-fee against a written scope (typically $750&ndash;$5,000+ by complexity). Independent firm &mdash; not affiliated with Intuit Inc.; we set it up, your CPA files.",
  aiSummary: [
    { q: "What does Texas QuickBooks setup include?", a: "<strong>A TX-correct chart of accounts, 8.25% sales-tax items configured by location, revenue/COGS/compensation tracked for the margin tax, a fixed-asset schedule for the BPP rendition, and Texas payroll setup</strong> &mdash; by a Certified QuickBooks ProAdvisor in QuickBooks Online or Desktop. We set it up; your CPA files." },
    { q: "Why does a Texas setup need a specialist?", a: "Because the Texas specifics are configured at setup or fixed later as a cleanup. <strong>Sales tax must be applied by location</strong>, revenue/COGS/compensation must be separated for the <strong>margin tax</strong>, and a <strong>fixed-asset schedule</strong> should exist from the start for the rendition. A generic setup misses all three." },
    { q: "QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either, in your own file. QBO suits most Texas small businesses and SaaS/agencies; Desktop or Enterprise suits some inventory- or job-cost-heavy operations. We&rsquo;ll recommend honestly and set it up." },
    { q: "What does setup cost?", a: "Fixed-fee against a written scope, typically <strong>$750&ndash;$5,000+</strong> depending on entity complexity, payroll, inventory, and integrations. Exact fee in writing within 3 business days." },
    { q: "Do you keep the books after setup?", a: "If you want &mdash; many Texas businesses move from setup into <a href=\"/find-an-accountant/texas/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor. Setup alone is fine too." },
  ],
  value: [
    { num: "01", title: "Texas chart of accounts", body: "A chart of accounts built for your Texas industry &mdash; structured for the reporting and the margin-tax position you actually need.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "Sales tax by location", body: "8.25% sales-tax items configured to the correct combined rate by customer location &mdash; the single most-missed Texas setup step.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "Margin-tax-ready books", body: "Revenue, COGS, and compensation tracked distinctly so your CPA can compute the franchise (margin) tax cleanly.", href: "/find-an-accountant/texas/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
    { num: "04", title: "Fixed-asset schedule", body: "Equipment, furniture, and inventory tracked from day one so the business personal property rendition is a quick export.", href: "/find-an-accountant/texas/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "05", title: "Texas payroll config", body: "QuickBooks Payroll configured for Texas &mdash; no state income-tax withholding, but federal and unemployment set up cleanly with your provider.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "Clean go-live or migration", body: "Opening balances, integrations, and reporting right &mdash; or migrated cleanly from Desktop or another system.", href: "/find-an-accountant/texas/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
  ],
  facts: TX_FACTS,
  scopeDo: [
    "Configure a Texas-correct chart of accounts",
    "Set 8.25% sales-tax items by customer location",
    "Track revenue, COGS, and compensation distinctly for the margin tax",
    "Build a fixed-asset schedule for the BPP rendition and configure Texas payroll",
    "Set opening balances, integrations, and reporting cleanly",
    "Train your team on the new file if you want it",
  ],
  scopeDont: [
    "File the Texas franchise (margin) tax, sales-tax returns, or federal returns",
    "Compute the franchise-tax margin or file the BPP rendition",
    "Represent you before the Texas Comptroller",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free scoping call", body: "A Certified ProAdvisor reviews your business, entity, payroll, and industry to scope the setup." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; QBO or Desktop, with the Texas specifics listed." },
    { phase: "Step 3", title: "Build &amp; configure", body: "We build the chart of accounts, by-location sales tax, margin-tax tracking, fixed-asset schedule, and payroll." },
    { phase: "Step 4", title: "Go-live &amp; handoff", body: "Opening balances set, integrations connected, and your team trained &mdash; or straight into monthly bookkeeping." },
  ],
  advisoryBody: [
    "A Texas QuickBooks setup is the cheapest insurance you&rsquo;ll buy &mdash; getting by-location sales tax, margin-tax tracking, and the fixed-asset schedule right at setup avoids the cleanup that costs many multiples later.",
    "Once the file is built right, the same named ProAdvisor can keep it clean in <a href=\"/find-an-accountant/texas/monthly-bookkeeping/\">monthly bookkeeping</a> and extend into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> when you&rsquo;re ready.",
  ],
  faq: [
    { q: "What does Texas QuickBooks setup include?", a: "A Certified ProAdvisor configures a TX-correct chart of accounts, 8.25% sales-tax items by customer location, revenue/COGS/compensation tracking for the franchise (margin) tax, a fixed-asset schedule for the BPP rendition, and Texas payroll, with opening balances, integrations, and reporting set cleanly &mdash; in your own QuickBooks Online or Desktop file. We set it up; your CPA files." },
    { q: "Why does a Texas setup need a ProAdvisor?", a: "Because the Texas specifics are either configured at setup or fixed later as a cleanup. Sales tax has to be applied by location rather than a flat statewide rate, revenue/COGS/compensation have to be separated for the margin tax, and a fixed-asset schedule should exist from the start for the rendition. A generic setup misses all three and turns into an expensive cleanup." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either in your own file. QuickBooks Online suits most Texas small businesses, SaaS, and agencies; Desktop or Enterprise can suit inventory- or job-cost-heavy operations like oil-and-gas services or construction. We recommend honestly and set it up; we earn nothing on the subscription regardless." },
    { q: "How much does Texas QuickBooks setup cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $750&ndash;$5,000+ depending on entity complexity, payroll, inventory, and integrations. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Can you set up Texas payroll too?", a: "Yes &mdash; we configure QuickBooks Payroll for a Texas employer. Texas has no state income-tax withholding, but we set up federal withholding, federal and state unemployment, and new-hire reporting correctly, coordinated with your payroll provider." },
    { q: "Do you keep the books after setup?", a: "If you want. Many Texas businesses move from setup straight into monthly bookkeeping with the same named ProAdvisor, so the file stays as clean as the day it went live. A setup-only engagement is also fine." },
    { q: "Do you file my Texas taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we set up and keep the books CPA-ready and coordinate with your CPA, who files the franchise (margin) tax, sales tax, and federal returns. We are not affiliated with Intuit Inc." },
  ],
  reviewProse: TX_REVIEW_PROSE,
  reviewCreds: TX_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/quickbooks-setup/",
    name: "Texas QuickBooks Setup",
    description: "QuickBooks setup for Texas businesses by a Certified ProAdvisor â€” a TX chart of accounts, 8.25% sales-tax items by location, margin-tax-ready tracking, a fixed-asset schedule for BPP, and Texas payroll. Independent firm; does not file Texas taxes.",
    serviceName: "Texas QuickBooks Setup Services",
    serviceType: "QuickBooks setup and implementation",
    serviceDesc: "QuickBooks Online or Desktop setup for Texas businesses â€” a Texas-correct chart of accounts, 8.25% sales-tax items by location, revenue/COGS/compensation tracking for the franchise (margin) tax, a fixed-asset schedule for the business personal property rendition, Texas payroll, opening balances, and integrations. Independent Certified QuickBooks ProAdvisor firm; does not file Texas tax returns â€” coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Texas", sameAs: "https://en.wikipedia.org/wiki/Texas" }],
    audienceType: "Texas small and midsize businesses across all 254 counties setting up or restructuring QuickBooks",
    offerPrice: "750",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

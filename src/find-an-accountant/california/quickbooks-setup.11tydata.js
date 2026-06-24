/* /find-an-accountant/california/quickbooks-setup/ â€” CA SERVICE CHILD (QB spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 QB spoke. GENUINELY CA-localized
 * (facts band = real CA stack; content = CA-correct QuickBooks setup). HONESTY: deferred to
 * FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year to do business in California &mdash; even at a loss &mdash; plus an income-based LLC fee. We accrue it in the file so it&rsquo;s never a surprise; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and local district add-ons push the combined rate past 10.25% in places. The file is set to apply the correct combined rate by customer location, not a flat statewide rate." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. The file is set up to separate W-2 from 1099 cleanly so the exposure is visible; EDD disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/quickbooks-setup/",
  slug: "ca-svc-qbsetup",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Setup Â· TechBrot",
  description: "QuickBooks setup for California businesses by a Certified ProAdvisor â€” CA chart of accounts, CDTFA district sales-tax items by location, AB5 contractor tracking, $800 franchise-tax accrual, CA payroll. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Setup" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; QuickBooks Setup",
    heading: "California QuickBooks setup, done right the first time.",
    subheading: "A Certified QuickBooks ProAdvisor sets up your California file properly &mdash; a CA-correct chart of accounts, CDTFA district sales-tax items by location, AB5 contractor tracking, the $800 franchise-tax accrual, and California payroll &mdash; so the books are right from transaction one. Fixed-fee, all 58 counties. We set it up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for California businesses</strong> &mdash; a Certified ProAdvisor configures a CA-correct chart of accounts, CDTFA district sales-tax items by location, AB5 contractor tracking, the $800 franchise-tax accrual, and California payroll in your QuickBooks Online or Desktop file, so the books are right from day one. The full California QuickBooks setup summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Setting up QuickBooks in California? Let&rsquo;s do it right.",
    lede: "Book a free discovery call. We&rsquo;ll scope the setup and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks setup, in five questions.",
    valueEyebrow: "What a California setup includes",
    valueHeading: "A file built for how California taxes.",
    valueLede: "Setup decisions made now shape years of bookkeeping &mdash; so the California specifics go in from the start.",
    factsEyebrow: "California tax realities we build into the setup",
    factsHeading: "Three California facts the setup gets right from day one.",
    factsLede: "A generic QuickBooks setup misses these &mdash; and fixing them later is a cleanup. We configure them up front.",
    faqHeading: "California QuickBooks setup questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for California businesses</strong> &mdash; a Certified QuickBooks ProAdvisor configures your <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop file to a California standard: a CA-correct chart of accounts, <strong>CDTFA district sales-tax items by location</strong> (not a flat statewide rate), <strong>AB5</strong> contractor tracking that separates W-2 from 1099, the <strong>$800 franchise-tax</strong> accrual, and California payroll configured for SDI, PIT, and EDD reporting. Setup decisions made now shape years of bookkeeping, so the California specifics go in from transaction one. Fixed-fee against a written scope (typically $750&ndash;$5,000+ by complexity). Independent firm &mdash; not affiliated with Intuit Inc.; we set it up, your CPA files.",
  aiSummary: [
    { q: "What does California QuickBooks setup include?", a: "<strong>A CA-correct chart of accounts, CDTFA district sales-tax items configured by location, AB5 contractor tracking, the $800 franchise-tax accrual, and California payroll setup (SDI/PIT/EDD)</strong> &mdash; by a Certified QuickBooks ProAdvisor in QuickBooks Online or Desktop. We set it up; your CPA files." },
    { q: "Why does California setup need a specialist?", a: "Because California taxes are configured at setup or fixed later as a cleanup. <strong>District sales tax must be applied by location</strong>, contractors must be separated for <strong>AB5</strong>, and the <strong>$800 franchise tax</strong> should accrue from the start. A generic setup misses all three." },
    { q: "QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either, in your own file. QBO suits most California small businesses and SaaS/agencies; Desktop or Enterprise suits some inventory- or job-cost-heavy operations. We&rsquo;ll recommend honestly and set it up." },
    { q: "What does setup cost?", a: "Fixed-fee against a written scope, typically <strong>$750&ndash;$5,000+</strong> depending on entity complexity, payroll, inventory, and integrations. Exact fee in writing within 3 business days." },
    { q: "Do you also keep the books after setup?", a: "If you want &mdash; many California businesses move from setup into <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor. Setup alone is fine too." },
  ],
  value: [
    { num: "01", title: "California chart of accounts", body: "A chart of accounts built for your California industry &mdash; structured for the reporting and tax positions you actually need.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "District sales tax by location", body: "CDTFA sales-tax items configured to the correct combined rate by customer location &mdash; the single most-missed California setup step.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "03", title: "AB5 contractor tracking", body: "Vendor and payroll setup that separates W-2 wages from 1099 contractor pay so the classification position is clean from day one.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "04", title: "$800 franchise-tax accrual", body: "The FTB minimum tax and LLC fee set to accrue so it&rsquo;s planned for, never a year-end surprise.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "05", title: "California payroll config", body: "QuickBooks Payroll configured for California SDI, PIT withholding, and EDD reporting, coordinated with your provider.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "Setup, the right way once", body: "A clean go-live with reporting, integrations, and opening balances right &mdash; or migrated cleanly from another system.", href: "/find-an-accountant/california/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Configure a California-correct chart of accounts",
    "Set CDTFA district sales-tax items by customer location",
    "Set up AB5 contractor tracking (W-2 vs 1099)",
    "Accrue the $800 franchise tax and configure CA payroll (SDI/PIT/EDD)",
    "Set opening balances, integrations, and reporting cleanly",
    "Train your team on the new file if you want it",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free scoping call", body: "A Certified ProAdvisor reviews your business, entity, payroll, and industry to scope the setup." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; QBO or Desktop, with the California specifics listed." },
    { phase: "Step 3", title: "Build &amp; configure", body: "We build the chart of accounts, district sales tax, contractor tracking, franchise accrual, and payroll." },
    { phase: "Step 4", title: "Go-live &amp; handoff", body: "Opening balances set, integrations connected, and your team trained &mdash; or straight into monthly bookkeeping." },
  ],
  advisoryBody: [
    "A California QuickBooks setup is the cheapest insurance you&rsquo;ll buy &mdash; getting district sales tax, contractor classification, and the franchise accrual right at setup avoids the cleanup that costs many multiples later.",
    "Once the file is built right, the same named ProAdvisor can keep it clean in <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> and extend into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> when you&rsquo;re ready.",
  ],
  faq: [
    { q: "What does California QuickBooks setup include?", a: "A Certified ProAdvisor configures a CA-correct chart of accounts, CDTFA district sales-tax items by customer location, AB5 contractor tracking (W-2 vs 1099), the $800 franchise-tax accrual, and California payroll (SDI/PIT/EDD), with opening balances, integrations, and reporting set cleanly &mdash; in your own QuickBooks Online or Desktop file. We set it up; your CPA files." },
    { q: "Why does a California setup need a ProAdvisor?", a: "Because the California specifics are either configured at setup or fixed later as a cleanup. District sales tax has to be applied by location rather than a flat statewide rate, contractors have to be separated for AB5, and the $800 franchise tax should accrue from the start. A generic setup misses all three and turns into an expensive cleanup." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either in your own file. QuickBooks Online suits most California small businesses, SaaS, and agencies; Desktop or Enterprise can suit inventory- or job-cost-heavy operations. We recommend honestly based on your needs and set it up; we earn nothing on the subscription regardless." },
    { q: "How much does California QuickBooks setup cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $750&ndash;$5,000+ depending on entity complexity, payroll, inventory, and integrations. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Can you set up California payroll too?", a: "Yes &mdash; we configure QuickBooks Payroll for California State Disability Insurance (SDI), Personal Income Tax (PIT) withholding, and EDD reporting, coordinated with your payroll provider. The uncapped SDI in particular is a common surprise we set up correctly from the start." },
    { q: "Do you keep the books after setup?", a: "If you want. Many California businesses move from setup straight into monthly bookkeeping with the same named ProAdvisor, so the file stays as clean as the day it went live. A setup-only engagement is also fine." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we set up and keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We are not affiliated with Intuit Inc." },
    { q: "Can you migrate my old data into the new file?", a: "Yes &mdash; if you&rsquo;re coming from Desktop, another QuickBooks file, or another platform, we handle the migration as part of or alongside setup so opening balances and history land cleanly. See our California QuickBooks migration service." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-setup/",
    name: "California QuickBooks Setup",
    description: "QuickBooks setup for California businesses by a Certified ProAdvisor â€” a CA chart of accounts, CDTFA district sales-tax items by location, AB5 contractor tracking, the $800 franchise-tax accrual, and California payroll. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks Setup Services",
    serviceType: "QuickBooks setup and implementation",
    serviceDesc: "QuickBooks Online or Desktop setup for California businesses â€” a California-correct chart of accounts, CDTFA district sales-tax items by location, AB5 contractor tracking, the $800 franchise-tax accrual, California payroll, opening balances, and integrations. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns â€” coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses across all 58 counties setting up or restructuring QuickBooks",
    offerPrice: "750",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

/* /find-an-accountant/illinois/quickbooks-setup/ — IL SERVICE CHILD (QB spoke).
 * t-bofu · partials/state-service-body.njk. IL-localized from the SETUP angle (configured right from
 * day one vs fixed later as cleanup). GENUINELY IL-localized: facts band = the real IL stack (the
 * Personal Property Replacement Tax / PPRT — entity-level, even pass-throughs owe it; Chicago's 10.25%
 * layered sales tax; Chicago's 15% lease/"cloud" tax on SaaS). Flat 4.95% income + 9.5% combined C-corp
 * + the permanent PTE election woven into the body. HONESTY: deferred to the Illinois Dept of Revenue
 * (IDOR) + Chicago Dept of Finance + CPA/EA; founder-name-zero; not Intuit; does not file IL returns. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "The Personal Property Replacement Tax", body: "Illinois imposes an entity-level <strong>Personal Property Replacement Tax</strong> on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>. Even pass-throughs owe it at the entity level, a surprise for owners new to Illinois. We structure the chart of accounts at setup so Illinois net income is tracked cleanly from transaction one and the PPRT is supportable &mdash; not reconstructed later in a cleanup; your CPA computes and files." },
  { fig: "10.25%", title: "Chicago&rsquo;s layered sales tax", body: "Illinois sales tax is <strong>6.25% state</strong> plus county and home-rule add-ons &mdash; <strong>10.25% in Chicago</strong> (Cook County + city), among the highest big-city rates in the U.S. It&rsquo;s destination-based for remote sellers, so at setup we configure sales-tax items to the correct combined rate <strong>by jurisdiction</strong> rather than a flat statewide rate &mdash; the single most-missed Illinois setup step." },
  { fig: "Cloud tax", title: "Chicago taxes SaaS at 15%", body: "Illinois doesn&rsquo;t tax SaaS &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. Providers with Chicago customers must collect it, so at setup we build it in as a separate item tracked apart from sales tax. It&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax &mdash; configure it now or untangle it in a cleanup later." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-setup/",
  slug: "il-svc-qbsetup",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Setup · TechBrot",
  description: "QuickBooks setup for Illinois businesses by a Certified ProAdvisor — IL chart of accounts, 6.25%–10.25% sales tax by jurisdiction, PPRT-ready books, Chicago's 15% cloud tax configured separately, payroll. Fixed-fee, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Setup" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; QuickBooks Setup",
    heading: "Illinois QuickBooks setup, done right the first time.",
    subheading: "A Certified QuickBooks ProAdvisor sets up your Illinois file properly &mdash; an IL-correct chart of accounts, sales-tax items by jurisdiction (10.25% in Chicago), Illinois net income tracked for the PPRT, Chicago&rsquo;s 15% cloud tax configured separately, and payroll &mdash; so the books are right from transaction one. Fixed-fee, all 102 counties. We set it up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for Illinois businesses</strong> &mdash; a Certified ProAdvisor configures an IL-correct chart of accounts, sales-tax items by jurisdiction (10.25% in Chicago), Illinois net income tracked for the <strong>PPRT</strong>, Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax built in separately, and Illinois payroll in your QuickBooks Online or Desktop file, so the books are right from day one. The full Illinois QuickBooks setup summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the flat 4.95% income tax; the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax; the PTE election) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Setting up QuickBooks in Illinois? Let&rsquo;s do it right.",
    lede: "Book a free discovery call. We&rsquo;ll scope the setup and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks setup, in five questions.",
    valueEyebrow: "What an Illinois setup includes",
    valueHeading: "A file built for how Illinois taxes.",
    valueLede: "Setup decisions made now shape years of bookkeeping &mdash; so the Illinois specifics go in from the start.",
    factsEyebrow: "Illinois tax realities we build into the setup",
    factsHeading: "Three Illinois facts the setup gets right from day one.",
    factsLede: "A generic QuickBooks setup misses these &mdash; and fixing them later is a cleanup. We configure them up front.",
    faqHeading: "Illinois QuickBooks setup questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks setup for Illinois businesses</strong> &mdash; a Certified QuickBooks ProAdvisor configures your <a href=\"/quickbooks/online/\">QuickBooks Online</a> or Desktop file to an Illinois standard: an IL-correct chart of accounts, <strong>sales-tax items by jurisdiction</strong> (6.25% state up to <strong>10.25% in Chicago</strong>, not a flat statewide rate), Illinois net income tracked from day one for the <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a>, Chicago&rsquo;s <strong>15% lease/&ldquo;cloud&rdquo; tax</strong> configured as a separate item, and Illinois payroll (4.95% withholding, IDES). Setup decisions made now shape years of bookkeeping, so the Illinois specifics go in from transaction one. Fixed-fee against a written scope (typically $750&ndash;$5,000+ by complexity). Independent firm &mdash; not affiliated with Intuit Inc.; we set it up, your CPA files.",
  aiSummary: [
    { q: "What does Illinois QuickBooks setup include?", a: "<strong>An IL-correct chart of accounts, sales-tax items configured by jurisdiction (10.25% in Chicago), Illinois net income tracked for the PPRT, Chicago&rsquo;s 15% cloud tax set up separately, and Illinois payroll</strong> &mdash; by a Certified QuickBooks ProAdvisor in QuickBooks Online or Desktop. We set it up; your CPA files." },
    { q: "Why does an Illinois setup need a specialist?", a: "Because the Illinois specifics are configured at setup or fixed later as a cleanup. <strong>Sales tax must be set by jurisdiction</strong> (10.25% in Chicago), the <strong>chart of accounts structured to track Illinois net income for the PPRT</strong>, and Chicago&rsquo;s <strong>15% cloud tax</strong> built in as a separate item. A generic setup misses all three." },
    { q: "QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either, in your own file. QBO suits most Illinois small businesses and agencies/SaaS; Desktop or Enterprise suits some inventory- or job-cost-heavy operations like manufacturing or logistics. We&rsquo;ll recommend honestly and set it up." },
    { q: "What does setup cost?", a: "Fixed-fee against a written scope, typically <strong>$750&ndash;$5,000+</strong> depending on entity complexity, payroll, inventory, and integrations. Exact fee in writing within 3 business days." },
    { q: "Do you keep the books after setup?", a: "If you want &mdash; many Illinois businesses move from setup into <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor. Setup alone is fine too." },
  ],
  value: [
    { num: "01", title: "Illinois chart of accounts", body: "A chart of accounts built for your Illinois industry and structured to track Illinois net income for the PPRT from the start &mdash; not reconstructed later.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "Sales tax by jurisdiction", body: "Sales-tax items configured to the correct combined rate by jurisdiction (6.25% state up to 10.25% in Chicago), destination-based for remote sellers &mdash; the single most-missed Illinois setup step.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "PPRT-ready from day one", body: "The chart of accounts structured so Illinois net income is tracked cleanly for the Personal Property Replacement Tax &mdash; so your CPA can compute and support it without a year-end reconstruction.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "04", title: "Chicago cloud tax configured", body: "Chicago&rsquo;s 15% lease/SaaS tax built in as a separate item from day one for providers with Chicago customers &mdash; tracked apart from sales tax, the line generic setups miss.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "Illinois payroll config", body: "QuickBooks Payroll configured for Illinois &mdash; 4.95% state withholding (IL-941) and IDES unemployment set up cleanly with your provider.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "Clean go-live or migration", body: "Opening balances, integrations, and reporting right &mdash; or migrated cleanly from Desktop or another system.", href: "/find-an-accountant/illinois/quickbooks-migration/", cta: "QuickBooks migration &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Configure an Illinois-correct chart of accounts structured to track Illinois net income for the PPRT",
    "Set sales-tax items by jurisdiction (6.25% state up to 10.25% in Chicago), destination-based for remote sellers",
    "Configure Chicago&rsquo;s 15% lease/cloud tax as a separate item where it applies",
    "Set up Illinois payroll (4.95% withholding, IL-941, IDES) with your provider",
    "Set opening balances, integrations, and reporting cleanly",
    "Train your team on the new file if you want it",
  ],
  scopeDont: [
    "File the Illinois income tax, the PPRT, sales tax (ST-1), or the PTE election",
    "File Chicago city taxes (lease/cloud) or federal returns",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free scoping call", body: "A Certified ProAdvisor reviews your business, entity and PPRT exposure, payroll, sales-tax jurisdictions, and any Chicago cloud-tax exposure to scope the setup." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; QBO or Desktop, with the Illinois specifics listed." },
    { phase: "Step 3", title: "Build &amp; configure", body: "We build the chart of accounts, sales tax by jurisdiction, PPRT-ready net-income tracking, the Chicago cloud-tax item, and payroll." },
    { phase: "Step 4", title: "Go-live &amp; handoff", body: "Opening balances set, integrations connected, and your team trained &mdash; or straight into monthly bookkeeping." },
  ],
  advisoryBody: [
    "An Illinois QuickBooks setup is the cheapest insurance you&rsquo;ll buy &mdash; getting sales tax by jurisdiction, PPRT-ready net-income tracking, and Chicago&rsquo;s cloud tax right at setup avoids the cleanup that costs many multiples later. Illinois layers an entity-level PPRT that even pass-throughs owe, a 9.5% combined C-corp rate, a permanent PTE election worth modeling, and Chicago-specific taxes &mdash; all easier to build in than to retrofit.",
    "Once the file is built right, the same named ProAdvisor can keep it clean in <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> and extend into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> &mdash; including PPRT/PTE planning in coordination with your CPA &mdash; when you&rsquo;re ready.",
  ],
  faq: [
    { q: "What does Illinois QuickBooks setup include?", a: "A Certified ProAdvisor configures an IL-correct chart of accounts structured to track Illinois net income for the PPRT, sales-tax items by jurisdiction (6.25% state up to 10.25% in Chicago), Chicago&rsquo;s 15% lease/cloud tax as a separate item where it applies, and Illinois payroll, with opening balances, integrations, and reporting set cleanly &mdash; in your own QuickBooks Online or Desktop file. We set it up; your CPA files." },
    { q: "Why does an Illinois setup need a ProAdvisor?", a: "Because the Illinois specifics are either configured at setup or fixed later as a cleanup. Sales tax has to be applied by jurisdiction (10.25% in Chicago) rather than a flat statewide rate, the chart of accounts should track Illinois net income for the PPRT from day one, and Chicago&rsquo;s cloud tax needs to be a separate item from the start. A generic setup misses all three and turns into an expensive cleanup." },
    { q: "How does setup handle the PPRT and the PTE election?", a: "We structure the chart of accounts at setup so Illinois net income is tracked cleanly &mdash; the Personal Property Replacement Tax is an entity-level tax on net income (2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts), and even pass-throughs owe it. We also keep the books so your CPA can model and support the permanent Pass-Through Entity (PTE) election, a 4.95% entity-level SALT-cap workaround made permanent by SB 1911 in December 2025. We don&rsquo;t make the election or compute the PPRT &mdash; your CPA does that and files." },
    { q: "Should I use QuickBooks Online or Desktop?", a: "Whichever fits your business &mdash; we configure either in your own file. QuickBooks Online suits most Illinois small businesses, agencies, and SaaS; Desktop or Enterprise can suit inventory- or job-cost-heavy operations like manufacturing or logistics. We recommend honestly and set it up; we earn nothing on the subscription regardless." },
    { q: "How much does Illinois QuickBooks setup cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $750&ndash;$5,000+ depending on entity complexity, payroll, inventory, and integrations. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Can you set up Illinois payroll too?", a: "Yes &mdash; we configure QuickBooks Payroll for an Illinois employer. We set up the 4.95% Illinois state withholding (IL-941), IDES unemployment, and federal withholding correctly, coordinated with your payroll provider." },
    { q: "Can you also configure Chicago&rsquo;s cloud tax for a SaaS business?", a: "Yes. Illinois doesn&rsquo;t tax SaaS at the state level, but the City of Chicago does through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), which is 15% as of January 2026 on SaaS, cloud, and equipment leases used in Chicago. At setup we build it in as a separate item tracked apart from Illinois sales tax, because it&rsquo;s a City of Chicago tax administered by the Department of Finance, so providers with Chicago customers can collect and report it cleanly." },
    { q: "Do you keep the books after setup?", a: "If you want. Many Illinois businesses move from setup straight into monthly bookkeeping with the same named ProAdvisor, so the file stays as clean as the day it went live. A setup-only engagement is also fine." },
    { q: "Do you file my Illinois or Chicago taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we set up and keep the books CPA-ready and coordinate with your CPA or EA, who files the Illinois income tax, the PPRT, sales tax (ST-1), and any PTE election, and handles Chicago city taxes (lease/cloud). We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-setup/",
    name: "Illinois QuickBooks Setup",
    description: "QuickBooks setup for Illinois businesses by a Certified ProAdvisor — an IL chart of accounts, sales-tax items by jurisdiction (10.25% in Chicago), PPRT-ready net-income tracking, Chicago's 15% cloud tax configured separately, and Illinois payroll. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks Setup Services",
    serviceType: "QuickBooks setup and implementation",
    serviceDesc: "QuickBooks Online or Desktop setup for Illinois businesses — an Illinois-correct chart of accounts structured to track Illinois net income for the Personal Property Replacement Tax, sales-tax items by jurisdiction (6.25% state up to 10.25% in Chicago), Chicago's 15% lease/cloud-tax configuration as a separate item, Illinois payroll (4.95% withholding, IDES), opening balances, and integrations. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois or Chicago tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois small and midsize businesses across all 102 counties setting up or restructuring QuickBooks",
    offerPrice: "750",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

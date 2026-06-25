/* /find-an-accountant/illinois/quickbooks-accountant/ — IL SERVICE CHILD (money/umbrella).
 * t-bofu · partials/state-service-body.njk. v4 IL money cluster umbrella. GENUINELY IL-localized:
 * facts band = the real IL stack (the Personal Property Replacement Tax / PPRT — entity-level, even
 * pass-throughs owe it; Chicago's 10.25% layered sales tax; Chicago's 15% lease/"cloud" tax on SaaS).
 * Flat 4.95% income + 9.5% combined C-corp + the permanent PTE election woven into the body. HONESTY:
 * deferred to the Illinois Dept of Revenue (IDOR) + Chicago Dept of Finance + CPA/EA; founder-name-zero;
 * not Intuit; does not file IL returns. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "The Personal Property Replacement Tax", body: "Illinois imposes an entity-level <strong>Personal Property Replacement Tax</strong> on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>. Even pass-throughs owe it at the entity level, a surprise for owners new to Illinois. We track Illinois net income cleanly so the PPRT is supportable; your CPA computes and files." },
  { fig: "10.25%", title: "Chicago&rsquo;s layered sales tax", body: "Illinois sales tax is <strong>6.25% state</strong> plus county and home-rule add-ons &mdash; <strong>10.25% in Chicago</strong> (Cook County + city), among the highest big-city rates in the U.S. It&rsquo;s destination-based for remote sellers, so QuickBooks must carry the correct combined rate by jurisdiction." },
  { fig: "Cloud tax", title: "Chicago taxes SaaS at 15%", body: "Illinois doesn&rsquo;t tax SaaS &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. Providers with Chicago customers must collect it, tracked separately from sales tax. It&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-accountant/",
  slug: "il-svc-qbaccountant",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Accountant & ProAdvisor · TechBrot",
  description: "Certified QuickBooks ProAdvisor & accountant for Illinois businesses — bookkeeping, cleanup, payroll, 10.25% Chicago sales tax, the PPRT, the PTE election, and Chicago's 15% cloud tax. Fixed-fee, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Accountant" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; Certified QuickBooks ProAdvisor",
    heading: "Your Illinois QuickBooks accountant &mdash; ProAdvisor expertise, Illinois rules.",
    subheading: "Bookkeeping, QuickBooks setup and cleanup, payroll coordination, and Illinois sales tax (10.25% in Chicago) &mdash; delivered by a named Certified QuickBooks ProAdvisor on the same file every month, in your own QuickBooks Online or Desktop file. Fixed-fee, written scope, all 102 Illinois counties. We keep the books and track the PPRT, the PTE position, and Chicago&rsquo;s 15% cloud tax; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-money&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> is a <strong>Certified QuickBooks ProAdvisor and bookkeeping firm for Illinois businesses</strong> &mdash; a named ProAdvisor manages your QuickBooks file every month: categorization and reconciliation, a clean chart of accounts, sales tax set to the correct combined rate by jurisdiction (10.25% in Chicago), Illinois net income tracked for the <strong>PPRT</strong>, Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax handled separately, and CPA-ready monthly statements, all in your own QuickBooks Online or Desktop file across all 102 counties. The full Illinois QuickBooks accountant summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the flat 4.95% income tax; the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax; the PTE election) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Ready for an Illinois QuickBooks accountant who stays on your file?",
    lede: "Book a free discovery call. We&rsquo;ll review your QuickBooks file, tell you honestly whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-money&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks accountant, in five questions.",
    valueEyebrow: "What a named ProAdvisor does for your Illinois books",
    valueHeading: "Everything your books need, handled by one expert.",
    valueLede: "Every engagement is scoped to your business and delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; the same one, every month.",
    factsEyebrow: "Illinois tax realities we build into your books",
    factsHeading: "Three Illinois facts that change how your books are kept.",
    factsLede: "Illinois layers an entity-level tax and Chicago-specific taxes on top of the basics &mdash; these three shape the chart of accounts and the sales-tax setup from day one.",
    faqHeading: "Illinois QuickBooks accountant questions.",
  },
  summary: "<strong>TechBrot</strong> is a <strong>Certified QuickBooks ProAdvisor and accountant for Illinois businesses</strong> &mdash; one named ProAdvisor on your QuickBooks file every month, handling categorization and reconciliation, a clean chart of accounts, sales tax set to the correct combined rate by jurisdiction (<strong>10.25% in Chicago</strong>), payroll coordination, and CPA-ready monthly statements. Illinois has a <strong>flat 4.95% income tax</strong> but layers the <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> (PPRT) on entity income &mdash; even pass-throughs owe it &mdash; a <strong>9.5% combined rate</strong> on C-corps, and a permanent <strong>PTE election</strong> option; and <strong>Chicago taxes SaaS at 15%</strong> through its lease/&ldquo;cloud&rdquo; tax even though the state doesn&rsquo;t. We track all of it in the books. Delivered in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 102 counties, fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What is an Illinois QuickBooks accountant?", a: "<strong>A Certified QuickBooks ProAdvisor who keeps your books in your own QuickBooks file to an Illinois standard</strong> &mdash; categorization, reconciliation, a clean chart of accounts, sales tax by jurisdiction (10.25% in Chicago), Illinois net income tracked for the PPRT, Chicago&rsquo;s lease/cloud tax handled separately, and CPA-ready statements every month. We do the books; your CPA files." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "An <strong>Illinois entity-level tax on net income</strong> that replaced the old personal property tax &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>. The catch is that pass-throughs owe the 1.5% at the entity level even though income flows to owners, which surprises owners new to Illinois. We track Illinois net income cleanly so it&rsquo;s supportable; your CPA computes and files." },
    { q: "Does Chicago really tax SaaS?", a: "Yes &mdash; Illinois doesn&rsquo;t tax SaaS at the state level, but <strong>Chicago does</strong> through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), which rose to <strong>15% in January 2026</strong>. SaaS, cloud, and equipment-lease providers with Chicago customers must collect it &mdash; tracked separately from sales tax in QuickBooks. It&rsquo;s a City of Chicago tax, not a state one." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly: monthly bookkeeping <strong>$400&ndash;$2,500+/mo</strong> by volume and accounts; one-time cleanup <strong>$1,500&ndash;$15,000+</strong>. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the income tax, the PPRT, sales tax, and any PTE election, and handles Chicago city taxes. We are not affiliated with Intuit Inc." },
  ],
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; close", body: "Reconciled accounts, clean categorization, and CPA-ready statements every month &mdash; with sales tax by jurisdiction and Illinois net income tracked for the PPRT.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks setup &amp; cleanup", body: "An Illinois-correct chart of accounts, combined sales-tax rates by jurisdiction, and a cleanup to a CPA-ready standard when the file has fallen behind.", href: "/quickbooks/cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "03", title: "Sales tax, configured right", body: "QuickBooks set to the correct combined rate by jurisdiction (10.25% in Chicago) and reconciled so the IDOR ST-1 ties.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "PPRT &amp; PTE tracked", body: "Illinois net income tracked for the PPRT and the books structured so your CPA can model and support the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "05", title: "Chicago cloud tax handled", body: "Chicago&rsquo;s 15% lease/SaaS tax tracked separately from sales tax for providers with Chicago customers.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "06", title: "CFO-level advisory, when ready", body: "Once the books are clean, fractional-CFO advisory &mdash; forecasting, board reporting, PPRT/PTE planning &mdash; on the global advisory team.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Keep your QuickBooks Online or Desktop file reconciled and current every month",
    "Build and maintain an Illinois-correct chart of accounts",
    "Configure combined sales tax by jurisdiction (10.25% in Chicago) and reconcile it",
    "Track Illinois net income for the PPRT and structure the books for the PTE election",
    "Track Chicago&rsquo;s lease/cloud tax separately from sales tax where it applies",
    "Coordinate Illinois payroll (4.95% withholding, IDES) and prepare CPA-ready statements",
  ],
  scopeDont: [
    "File Illinois income tax, the PPRT, sales tax, or the PTE election",
    "File Chicago city taxes (lease, amusement) or federal returns",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your QuickBooks file and your Illinois situation &mdash; sales-tax jurisdictions, entity type and PPRT, any Chicago cloud-tax exposure, where the books stand &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee: cleanup, monthly bookkeeping, or both. No hourly billing." },
    { phase: "Step 3", title: "Cleanup to CPA-ready", body: "If the file needs it, we bring it to a CPA-ready standard &mdash; sales tax corrected by jurisdiction, Chicago cloud tax separated, accounts reconciled." },
    { phase: "Step 4", title: "Monthly cadence", body: "A named ProAdvisor keeps the file clean every month and hands CPA-ready statements to your CPA, who files." },
  ],
  advisoryBody: [
    "Illinois is one of the more complex states to keep books for &mdash; a flat income tax but an entity-level PPRT that even pass-throughs owe, a 9.5% combined C-corp rate, a permanent PTE election worth modeling, layered sales tax up to 10.25%, and a Chicago cloud tax that hits SaaS the state doesn&rsquo;t. The value of an Illinois QuickBooks accountant is keeping all of it right so your CPA can file cleanly and plan.",
    "That&rsquo;s why every TechBrot engagement is built on accurate books first, then extends &mdash; when you&rsquo;re ready &mdash; into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> including PPRT/PTE planning, in coordination with your CPA.",
  ],
  faq: [
    { q: "What does an Illinois QuickBooks accountant do?", a: "A Certified QuickBooks ProAdvisor keeps your books in your own QuickBooks file to an Illinois standard &mdash; categorization and reconciliation, a clean chart of accounts, combined sales tax by jurisdiction (10.25% in Chicago) configured and reconciled, Illinois net income tracked for the PPRT, Chicago&rsquo;s lease/cloud tax handled separately, payroll coordination, and CPA-ready monthly statements. We do the books; your CPA files the returns." },
    { q: "What is the Illinois PPRT and do pass-throughs really owe it?", a: "The Personal Property Replacement Tax is an Illinois entity-level tax on net income that replaced the abolished personal property tax. C-corporations pay 2.5%; S-corporations, partnerships, and trusts pay 1.5% &mdash; and yes, pass-throughs owe the 1.5% at the entity level even though the income flows through to owners. It&rsquo;s an Illinois-specific obligation most other states don&rsquo;t impose, and it surprises owners new to the state. We track Illinois net income cleanly so it&rsquo;s supportable; your CPA computes and files." },
    { q: "How does Illinois income tax and the PTE election work?", a: "Illinois has a flat 4.95% personal income tax (no brackets), and Chicago adds no city income tax. C-corporations pay 7% corporate income tax plus the 2.5% PPRT, a 9.5% combined rate. Illinois also offers a permanent Pass-Through Entity (PTE) tax election &mdash; made permanent by SB 1911 in December 2025 &mdash; letting S-corps and partnerships pay a 4.95% entity-level tax as a federal SALT-cap workaround. Whether to elect PTE is a key planning decision; we keep the books so your CPA can model and support it." },
    { q: "Does Chicago tax SaaS, and how is that different from sales tax?", a: "Yes. Illinois doesn&rsquo;t tax SaaS at the state level, but the City of Chicago does through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), which rose to 15% on January 1, 2026. It applies to SaaS, cloud services, and equipment leases used in Chicago, so providers with Chicago customers must collect it &mdash; and it&rsquo;s tracked separately from Illinois sales tax in QuickBooks, because it&rsquo;s a City of Chicago tax administered by the Department of Finance, not a state tax." },
    { q: "Do you serve my city or county?", a: "All 102 Illinois counties &mdash; Chicago and the collar counties, Aurora, Naperville, Joliet, Rockford, Springfield, and everywhere downstate &mdash; delivered remotely on QuickBooks, so your location changes the sales-tax jurisdiction (and any Chicago city taxes) but never the service or the named ProAdvisor on your file. Dedicated city pages exist for our largest metros." },
    { q: "How much does an Illinois QuickBooks accountant cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file my Illinois or Chicago taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the Illinois income tax, the PPRT, sales tax, and any PTE election, and handles Chicago city taxes (lease/cloud, amusement). We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
    { q: "Are you a CPA firm?", a: "No &mdash; we&rsquo;re an independent Certified QuickBooks ProAdvisor and bookkeeping firm. The standard model is that TechBrot handles QuickBooks operations and bookkeeping (including PPRT-ready and Chicago-cloud-tax tracking) while your Illinois CPA handles tax filing, the PTE decision, and representation before the IDOR. Most Illinois clients use both; we coordinate directly with your CPA." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-accountant/",
    name: "Illinois QuickBooks Accountant & ProAdvisor",
    description: "Certified QuickBooks ProAdvisor and accountant for Illinois businesses — bookkeeping, cleanup, payroll coordination, 6.25%–10.25% sales tax, the Personal Property Replacement Tax (PPRT), the PTE election, and Chicago's 15% lease/cloud tax in your own QuickBooks file across all 102 counties. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks ProAdvisor & Accountant Services",
    serviceType: "QuickBooks ProAdvisor and bookkeeping services",
    serviceDesc: "Monthly bookkeeping, QuickBooks setup and cleanup, combined sales-tax configuration by jurisdiction (10.25% in Chicago), Illinois-net-income tracking for the Personal Property Replacement Tax, PTE-election-ready books, Chicago lease/cloud-tax tracking, payroll coordination, and CPA-ready statements for Illinois businesses across all 102 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois or Chicago tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois small and midsize businesses across all 102 counties — manufacturing, healthcare, logistics and trucking, agencies, restaurants, and professional services",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

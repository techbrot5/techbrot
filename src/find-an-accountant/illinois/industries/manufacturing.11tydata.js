/* /find-an-accountant/illinois/industries/manufacturing/ — IL INDUSTRY CHILD.
 * t-location + heroLight. partials/state-industry-body.njk. GENUINELY IL×manufacturing: the
 * Manufacturing Machinery & Equipment (MM&E) sales/use-tax exemption tracked in the books, inventory/WIP
 * and job costing, the entity-level PPRT (2.5% C-corp / 1.5% pass-through) and the 9.5% combined C-corp
 * rate, the permanent PTE election for pass-throughs, and multi-state sales/nexus with destination-sourced
 * sales tax (6.25%->10.25% where IL applies, ST-1). HONESTY: IDOR + CPA; we keep books/track/reconcile/
 * configure, the CPA + IDOR compute/elect/file; we do not file IL returns, make the PTE election, claim the
 * exemption on a return, or represent. founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/industries/manufacturing/",
  slug: "il-ind-manufacturing",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Illinois Manufacturing Accounting · TechBrot",
  description: "Accounting for Illinois manufacturers — the MM&E sales/use-tax exemption tracked, inventory/WIP and job costing, PPRT and 9.5% C-corp rate. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Industries", href: "/find-an-accountant/illinois/industries/" },
    { name: "Manufacturing" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Manufacturing Accounting",
    heading: "Illinois manufacturing accounting that tracks the exemption, the inventory, and the tax.",
    subheading: "Illinois is one of the country&rsquo;s largest manufacturing states &mdash; and the books carry weight the basics don&rsquo;t: the Manufacturing Machinery &amp; Equipment (MM&E) sales/use-tax exemption tracked correctly, raw materials through WIP to finished goods costed, the entity-level Personal Property Replacement Tax (PPRT), and sales tax sourced by destination across state lines. We keep all of it clean in your own QuickBooks file by a named Certified ProAdvisor. Your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor accounting for Illinois manufacturers</strong> &mdash; the MM&E sales/use-tax exemption tracked so qualifying production-equipment purchases are supportable, inventory and WIP costed across raw materials to finished goods, the Personal Property Replacement Tax (PPRT) tracked on Illinois net income, and multi-state sales tax configured by destination, all in your own QuickBooks Online or Desktop file across all 102 counties. The full Illinois manufacturing summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois references (the MM&E exemption; the PPRT; the 9.5% combined C-corp rate; the PTE election; 6.25%&ndash;10.25% sales tax) reflect Illinois Department of Revenue rules current as of the review date. TechBrot keeps the books, does not file Illinois taxes or claim the exemption on a return, and coordinates with your CPA.",
  },
  ctaBand: {
    eyebrow: "Illinois manufacturers start here",
    heading: "Know your true cost per unit &mdash; and keep the exemption supportable.",
    lede: "Book a free discovery call. We&rsquo;ll review your inventory and job-costing setup, your MM&E exemption tracking, and your multi-state sales-tax configuration, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Illinois manufacturing accounting, plainly.",
    aiHeading: "Illinois manufacturing accounting, in five questions.",
    challengesEyebrow: "Why Illinois manufacturing books break",
    challengesHeading: "Three places Illinois manufacturers lose the numbers.",
    challengesLede: "Cost flows through inventory, the exemption needs a paper trail, and tax is layered. Knowing which gap you&rsquo;re in tells us where to start.",
    handleHeading: "Illinois manufacturing accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your operation, delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; the same one, every month.",
    integrationsHeading: "Connected to how you make and ship.",
    processHeading: "From raw materials to a true cost per unit.",
    processLede: "Every Illinois manufacturing engagement follows the same rhythm &mdash; books accurate first, cost visibility second, advisory third.",
    advisoryHeading: "Clean inventory is the start. Margin per product line is the point.",
    faqHeading: "Illinois manufacturing accounting questions.",
    relatedHeading: "Related Illinois services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides accounting for Illinois manufacturers</strong> &mdash; in your own QuickBooks file by a named Certified ProAdvisor. The job is to cost inventory accurately from raw materials through work-in-process to finished goods, track the Manufacturing Machinery &amp; Equipment exemption so qualifying purchases are supportable, and keep the entity&rsquo;s Illinois tax figures straight.",
    "Manufacturing in Illinois adds its own complexity. The <strong>Manufacturing Machinery &amp; Equipment (MM&E) exemption</strong> makes qualifying production machinery and equipment exempt from Illinois sales and use tax &mdash; but only with a clean record of what qualified, so tracking those purchases correctly is a core books task. <strong>Inventory and WIP</strong> move through raw materials, work-in-process, and finished goods, and standard-vs-actual job costing is what reveals true cost per unit. On tax, Illinois layers the entity-level <strong>Personal Property Replacement Tax</strong> (2.5% C-corp / 1.5% pass-through) on net income; many manufacturers are C-corps facing a <strong>9.5% combined rate</strong>, while pass-throughs can weigh the permanent <strong>PTE election</strong>. And manufacturers selling across state lines deal with <strong>multi-state sales tax and nexus</strong> &mdash; sourced by destination, with the IL combined rate (6.25%&ndash;10.25%) carried where Illinois sales apply on the ST-1. We keep all of it clean &mdash; CPA-ready &mdash; in your own QuickBooks file across all 102 counties. We keep the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Illinois manufacturing accounting?", a: "<strong>Inventory and WIP costing, job costing, MM&E-exemption tracking, the PPRT and C-corp tax figures, and multi-state sales-tax configuration</strong> &mdash; for Illinois manufacturers, in your own QuickBooks file. We track and reconcile; your CPA and the Illinois Department of Revenue compute, elect, and file." },
    { q: "What is the Illinois MM&E exemption and how do you handle it?", a: "The <strong>Manufacturing Machinery &amp; Equipment exemption</strong> makes qualifying production machinery and equipment exempt from Illinois sales and use tax. We track those purchases in the books so the qualifying spend is documented and supportable &mdash; but we do not claim the exemption on a return; your CPA and the Illinois Department of Revenue handle the filing and any certificate." },
    { q: "How do you cost inventory and WIP?", a: "We structure the books so cost flows cleanly through <strong>raw materials, work-in-process, and finished goods</strong>, and we support standard-vs-actual job costing so you see a true cost per unit rather than a gross average. The data comes from your production and inventory systems." },
    { q: "How is an Illinois manufacturer taxed?", a: "Illinois layers the entity-level <strong>Personal Property Replacement Tax</strong> (2.5% for C-corps, 1.5% for pass-throughs) on net income. Many manufacturers are C-corps facing a <strong>9.5% combined rate</strong>; pass-throughs may weigh the permanent <strong>PTE election</strong>. We keep Illinois net income and the figures clean so your CPA can compute, and the CPA makes the PTE election and files." },
    { q: "Do you file Illinois taxes or claim the exemption?", a: "No &mdash; we keep the books CPA-ready and track the exemption and net-income figures; your CPA and the Illinois Department of Revenue compute the tax, make the PTE election, claim the exemption on the return, and file. We&rsquo;re independent, don&rsquo;t represent clients, and aren&rsquo;t affiliated with Intuit." },
  ],
  challenges: [
    { signal: "Inventory", title: "Cost lost in inventory &amp; WIP", body: "When raw materials, work-in-process, and finished goods aren&rsquo;t costed cleanly, true cost per unit disappears &mdash; and a manufacturer pricing on a gross average is guessing at margin." },
    { signal: "Exemption", title: "MM&E exemption without a paper trail", body: "The Manufacturing Machinery &amp; Equipment exemption is real, but it only holds with a clean record of which purchases qualified &mdash; and books that don&rsquo;t track qualifying spend leave the exemption unsupportable." },
    { signal: "Tax", title: "PPRT &amp; multi-state sales tax", body: "Illinois layers the entity-level PPRT on net income, and selling across state lines means destination-sourced sales tax with the IL combined rate where it applies &mdash; both need clean books to get right." },
  ],
  handle: [
    { num: "01", title: "Inventory &amp; WIP costing", body: "Cost structured cleanly through raw materials, work-in-process, and finished goods so the inventory accounts tie and standard-vs-actual variances surface.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "MM&E exemption tracking", body: "Qualifying production machinery and equipment purchases tracked in the books so the Manufacturing Machinery &amp; Equipment exemption is documented and supportable for your CPA.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "03", title: "PPRT &amp; C-corp figures", body: "Illinois net income tracked for the Personal Property Replacement Tax and the 9.5% combined C-corp rate, with the books structured so your CPA can model the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "04", title: "Multi-state sales tax", body: "Sales tax configured by destination across state lines, with the IL combined rate (up to 10.25%) carried where Illinois sales apply so the ST-1 reconciles.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "Job &amp; product-line costing", body: "Reporting that shows margin by product line or job so pricing, capacity, and make-vs-buy decisions rest on real cost, not a gross average.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "06", title: "Monthly close that ties", body: "A monthly close with inventory reconciled, the exemption documented, and tax figures clean &mdash; CPA-ready and decision-ready.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
  ],
  integrations: [
    "Inventory and production exports from your ERP / MRP system",
    "QuickBooks Online or hosted Desktop &mdash; your file",
    "Gusto, ADP, and Illinois payroll providers (IDES)",
    "Shop-floor and barcode / inventory-count tools",
    "Bill.com for materials and supplier AP",
    "E-commerce and EDI order channels (multi-state sales)",
  ],
  integrationsNote: "We cost and reconcile from the production and inventory summaries your systems export &mdash; material costs, WIP balances, finished-goods counts, and shipments by destination &mdash; so the books tie to the floor.",
  process: [
    { phase: "Step 1", title: "Free operations review", body: "A Certified ProAdvisor reviews your inventory and job-costing setup, MM&E exemption tracking, and multi-state sales-tax configuration &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly." },
    { phase: "Step 3", title: "Cost &amp; reconcile", body: "Inventory and WIP costed cleanly, qualifying MM&E purchases tracked, sales tax corrected by destination, accounts reconciled." },
    { phase: "Step 4", title: "Monthly cost-of-goods close", body: "A monthly close showing true cost per unit and margin by product line, CPA-ready." },
  ],
  advisoryBody: [
    "When inventory is costed cleanly and the exemption is documented, the decisions get real: which product lines actually carry margin, whether a price increase or a make-vs-buy shift is justified, where material and overhead are eroding the floor &mdash; answered from costs that tie, not gross averages that flatter.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, including PPRT/PTE planning, in coordination with your CPA. We keep the books; your CPA files; the Illinois Department of Revenue and your CPA compute and elect.",
  ],
  faq: [
    { q: "What does Illinois manufacturing accounting include?", a: "Inventory and WIP costing across raw materials, work-in-process, and finished goods; standard-vs-actual job costing for true cost per unit; tracking of qualifying Manufacturing Machinery &amp; Equipment (MM&E) exemption purchases; Illinois net income tracked for the Personal Property Replacement Tax (PPRT) and the 9.5% combined C-corp rate; and multi-state sales tax configured by destination &mdash; all in your own QuickBooks file. We keep the books; your CPA files." },
    { q: "What is the Illinois MM&E exemption and do you claim it?", a: "The Manufacturing Machinery &amp; Equipment exemption makes qualifying production machinery and equipment exempt from Illinois sales and use tax. We track those purchases in the books so the qualifying spend is documented and supportable &mdash; but we do not claim the exemption on a return or issue the certificate. Your CPA and the Illinois Department of Revenue handle the filing side; we keep the record that makes it defensible." },
    { q: "How do you handle inventory, WIP, and job costing?", a: "We structure the chart of accounts so cost flows cleanly through raw materials, work-in-process, and finished goods, and we support standard-vs-actual job costing so variances surface and you see a true cost per unit rather than a gross average. The figures come from your ERP or MRP system&rsquo;s production and inventory exports, reconciled to the books each period." },
    { q: "How is an Illinois manufacturer taxed?", a: "Illinois layers an entity-level Personal Property Replacement Tax on net income &mdash; 2.5% for C-corporations and 1.5% for pass-throughs &mdash; on top of income tax. Many manufacturers are C-corps facing a 9.5% combined rate; pass-throughs can weigh the permanent Pass-Through Entity (PTE) election. We keep Illinois net income clean so the computation is straightforward; your CPA computes, makes the PTE election where it fits, and files." },
    { q: "We sell across state lines &mdash; how do you handle multi-state sales tax and nexus?", a: "We configure sales tax by destination, since Illinois sources sales to where the customer is, and we carry the correct Illinois combined rate (6.25% state up to 10.25% in Chicago) where Illinois sales apply so the IDOR ST-1 reconciles. Whether you have nexus in another state is a determination your CPA makes; we keep the books so the in-state and out-of-state figures are clean and the returns are supportable." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named ProAdvisor on the same file every month, reconciling inventory, WIP, and sales tax from the exports your ERP or MRP system produces." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready, track the MM&E exemption purchases, and coordinate with your CPA or EA, who computes and files the Illinois income tax, the PPRT, and sales tax, makes the PTE election, and claims the exemption on the return. We do not file Illinois returns or represent clients before the Illinois Department of Revenue, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: "This page reflects how TechBrot handles Illinois manufacturing engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois manufacturers remotely across all 102 counties, and reviewed for technical accuracy on inventory and WIP costing, the Manufacturing Machinery &amp; Equipment (MM&E) sales/use-tax exemption, the Personal Property Replacement Tax (PPRT), and the 9.5% combined C-corp rate, current as of the date below and reviewed against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a>. Rates and the PTE/exemption rules change; confirm current figures with the Department and your CPA. TechBrot keeps books, tracks qualifying purchases, and reconciles sales tax; it does not file Illinois returns, make the PTE election, claim the exemption on a return, or represent clients before the Department &mdash; it coordinates with your CPA. Independent firm &mdash; not affiliated with Intuit Inc.",
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois replacement tax help", body: "Track Illinois net income for the PPRT and structure the books for the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { title: "Illinois sales tax help", body: "Configure multi-state, destination-sourced sales tax so the IDOR ST-1 reconciles.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Illinois QuickBooks setup", body: "Set up a manufacturing chart of accounts with inventory, WIP, and job costing from day one.", href: "/find-an-accountant/illinois/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { title: "Manufacturing accounting (national)", body: "Our global manufacturing industry overview for the broader playbook.", href: "/accounting/industries/manufacturing/", cta: "National overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/industries/manufacturing/",
    name: "Illinois Manufacturing Accounting",
    description: "Accounting for Illinois manufacturers — inventory and WIP costing, job costing, MM&E sales/use-tax exemption tracking, the Personal Property Replacement Tax (PPRT) and 9.5% combined C-corp rate, and multi-state destination-sourced sales tax, in your own QuickBooks file across all 102 counties. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois Manufacturing Accounting",
    serviceType: "Manufacturing industry bookkeeping services",
    serviceDesc: "Bookkeeping for Illinois manufacturers — inventory and WIP costing across raw materials, work-in-process, and finished goods; standard-vs-actual job costing; tracking of qualifying Manufacturing Machinery & Equipment (MM&E) sales/use-tax exemption purchases; Illinois-net-income tracking for the Personal Property Replacement Tax and the 9.5% combined C-corp rate; PTE-election-ready books; and multi-state, destination-sourced sales-tax configuration so the IDOR ST-1 reconciles, kept CPA-ready. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, claim the exemption on a return, or represent clients — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois manufacturers across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

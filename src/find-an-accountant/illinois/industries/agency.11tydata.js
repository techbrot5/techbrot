/* /find-an-accountant/illinois/industries/agency/ — IL INDUSTRY CHILD.
 * t-location + heroLight. partials/state-industry-body.njk. GENUINELY IL×agency: project & retainer
 * profitability (billable utilization, project/client margin, retainer vs project revenue recognition,
 * pass-through media-buy costs), 1099 contractor vs employee classification, the PPRT on pass-throughs +
 * the PTE election + flat 4.95% income, and Chicago's 15% lease/"cloud" tax on the SaaS agencies run on
 * (and on digital/cloud services sold to Chicago customers). HONESTY: IDOR + City of Chicago Dept of
 * Finance + CPA; books only; not Intuit; does not file IL returns, elect PTE, or represent. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/industries/agency/",
  slug: "il-ind-agency",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Illinois Agency & Creative Accounting · TechBrot",
  description: "Accounting for Illinois marketing, creative & digital agencies across all 102 counties — project and retainer profitability, 1099 contractor classification, the PPRT, the PTE election, and Chicago's 15% cloud tax on SaaS. Books CPA-ready, fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Industries", href: "/find-an-accountant/illinois/industries/" },
    { name: "Agency" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Agency &amp; Creative Accounting",
    heading: "Illinois agency accounting that tells you which projects and retainers actually pay.",
    subheading: "Illinois agencies rarely struggle to bill &mdash; they struggle to see real margin once contractors, pass-through media buys, and mixed retainer-and-project revenue are in the mix. We track project and client profitability, classify 1099 contractors cleanly, keep the books ready for the PPRT and the PTE position, and handle Chicago&rsquo;s 15% cloud tax on the SaaS you run on &mdash; by a named Certified ProAdvisor, in your own QuickBooks file. We keep the books; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor accounting for Illinois marketing, creative, and digital agencies</strong> &mdash; project and client profitability tracking, billable-utilization and retainer-vs-project revenue handled correctly, pass-through media-buy costs kept out of margin, clean 1099-contractor classification, Illinois net income tracked for the <strong>PPRT</strong>, and Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax on your SaaS handled separately &mdash; all in your own QuickBooks file across all 102 counties. The full Illinois agency summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois references (the flat 4.95% income tax; the PPRT; the PTE election; Chicago&rsquo;s 15% lease/cloud tax) reflect Illinois Department of Revenue and City of Chicago Department of Finance rules current as of the review date. TechBrot keeps books CPA-ready, does not file Illinois returns, does not make the PTE election, and does not represent clients.",
  },
  ctaBand: {
    eyebrow: "Illinois agencies start here",
    heading: "See real margin by project, client, and retainer &mdash; not just revenue.",
    lede: "Book a free discovery call. We&rsquo;ll review how your projects, retainers, contractors, and media buys hit the books, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Illinois agency accounting, plainly.",
    aiHeading: "Illinois agency accounting, in five questions.",
    challengesEyebrow: "Why Illinois agency books break",
    challengesHeading: "Three places Illinois agencies lose the margin.",
    challengesLede: "Revenue looks healthy; margin doesn&rsquo;t. Knowing which gap you&rsquo;re in &mdash; profitability, people, or Illinois tax &mdash; tells us where to start.",
    handleHeading: "Illinois agency accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your agency and delivered in your own QuickBooks file by a named Certified ProAdvisor.",
    integrationsHeading: "Connected to how you run projects &mdash; financials only.",
    processHeading: "From billed revenue to real margin.",
    processLede: "Every Illinois agency engagement follows the same rhythm &mdash; books accurate first, project and retainer profitability second, advisory third.",
    advisoryHeading: "Clean books are the start. Knowing which work actually pays is the point.",
    faqHeading: "Illinois agency accounting questions.",
    relatedHeading: "Related Illinois services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides accounting for Illinois marketing, creative, and digital agencies</strong> &mdash; in your own QuickBooks file by a named Certified ProAdvisor. The job is to turn busy revenue into real margin: track profitability by project, client, and retainer; classify the contractors you run on correctly; and keep the books ready for Illinois&rsquo;s entity-level taxes.",
    "Agencies carry their own complexity. <strong>Project and retainer profitability</strong> depends on billable utilization, project and client margin, and recognizing retainer revenue separately from project revenue &mdash; while <strong>pass-through media buys</strong> must be kept out of margin so ad spend never inflates your numbers. The people problem is classification: <strong>freelancers, designers, and developers as 1099 contractors versus employees</strong>, kept clean for payroll and reporting. On tax, most Illinois agencies are <strong>S-corps, LLCs, or partnerships</strong>, and the <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> (PPRT) hits pass-throughs at <strong>1.5% at the entity level</strong> &mdash; even pass-throughs owe it &mdash; while the permanent <strong>PTE election</strong> (4.95%) can serve as a federal SALT-cap workaround on top of the <strong>flat 4.95% personal income tax</strong>. And because agencies run on SaaS, <strong>Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax</strong> applies to cloud tools used in Chicago &mdash; and to any digital or cloud services you sell to Chicago customers &mdash; tracked separately from sales tax. We keep all of it clean, CPA-ready, in your file across all 102 counties. We keep the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Illinois agency accounting?", a: "<strong>Project, client, and retainer profitability tracking, clean 1099-contractor classification, PPRT-ready and PTE-ready books, and Chicago&rsquo;s lease/cloud tax handled separately</strong> &mdash; for Illinois marketing, creative, and digital agencies, in your own QuickBooks file across all 102 counties. We do the books; your CPA files." },
    { q: "How do you track agency project profitability?", a: "We track <strong>profitability by project, client, and retainer</strong> using billable utilization and project margin, recognize retainer revenue separately from project revenue, and keep <strong>pass-through media buys</strong> out of margin so ad spend never inflates your numbers. The result is margin you can act on, not just revenue." },
    { q: "How do you handle 1099 contractors vs employees?", a: "Agencies run on freelancers, designers, and developers, so <strong>contractor-versus-employee classification</strong> is where the books get risky. We keep classification, payroll, and 1099 reporting clean and consistent so the figures are supportable; your CPA confirms the tax treatment and files." },
    { q: "How is an Illinois agency taxed?", a: "Most agencies are <strong>S-corps, LLCs, or partnerships</strong>. Illinois has a <strong>flat 4.95% personal income tax</strong>, and the Personal Property Replacement Tax hits pass-throughs at <strong>1.5% at the entity level &mdash; even pass-throughs owe it</strong>. The permanent <strong>PTE election</strong> (4.95%) can work as a federal SALT-cap workaround. We keep the books so your CPA can compute, elect, and file." },
    { q: "Does the Chicago cloud tax affect my agency?", a: "Likely both ways. Agencies run on SaaS &mdash; design, project, and ad-platform tools &mdash; and the City of Chicago&rsquo;s Personal Property Lease Transaction Tax (the &ldquo;cloud tax,&rdquo; 15%) applies to cloud tools used in Chicago. If you also sell digital or cloud services to Chicago customers, that exposure matters too. We track it separately from sales tax; it&rsquo;s a City of Chicago tax, not a state one." },
  ],
  challenges: [
    { signal: "Profitability", title: "Busy revenue, invisible margin", body: "Billable utilization, retainer-vs-project revenue, and pass-through media buys make agency margin hard to see &mdash; and an agency that tracks revenue without project and client margin is flying blind on which work pays." },
    { signal: "People", title: "1099 contractor classification", body: "Freelancers, designers, and developers blur the line between contractor and employee &mdash; and getting classification, payroll, and 1099 reporting wrong is expensive and recurring." },
    { signal: "Illinois tax", title: "PPRT, PTE &amp; the Chicago cloud tax", body: "Most agencies are pass-throughs that still owe the 1.5% PPRT, may benefit from the PTE election, and run on SaaS that Chicago taxes at 15% &mdash; none of which works without clean, well-structured books." },
  ],
  handle: [
    { num: "01", title: "Project &amp; client profitability", body: "Margin tracked by project, client, and retainer using billable utilization &mdash; with pass-through media buys kept out of margin so ad spend never inflates the numbers.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Retainer vs project revenue", body: "Retainer revenue recognized separately from project revenue so recurring and one-off work read correctly on the books.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "03", title: "1099 contractor &amp; payroll", body: "Clean classification of freelancers, designers, and developers, with payroll and 1099 reporting kept consistent and supportable.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "04", title: "PPRT &amp; PTE-ready books", body: "Illinois net income tracked for the PPRT and the books structured so your CPA can model and support the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "05", title: "Chicago cloud tax tracked", body: "Chicago&rsquo;s 15% lease/cloud tax on the SaaS you use &mdash; and on digital services you sell to Chicago customers &mdash; tracked separately from sales tax.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "06", title: "Monthly close that ties", body: "A monthly close with utilization, margin, and contractor costs reconciled &mdash; CPA-ready and decision-ready.", href: "/find-an-accountant/illinois/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
  ],
  integrations: [
    "QuickBooks Online or hosted Desktop &mdash; your file",
    "Project and time-tracking tools (Harvest, Toggl, Asana) at the financial level",
    "Gusto, ADP, and contractor-payment platforms",
    "Ad-platform and media-buy spend summaries (kept as pass-through)",
    "Bill.com for vendor and subcontractor AP",
    "Merchant and invoicing processors (summary level)",
  ],
  integrationsNote: "We reconcile from the financial summaries your systems produce &mdash; invoices, time-and-utilization totals, contractor payments, and media-buy spend &mdash; so project and client margin tie without us touching client creative or campaign data.",
  process: [
    { phase: "Step 1", title: "Free agency review", body: "A Certified ProAdvisor reviews how your projects, retainers, contractors, and media buys hit the books, plus your entity type and any Chicago cloud-tax exposure &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly. No hourly billing." },
    { phase: "Step 3", title: "Structure &amp; clean", body: "Project and client tracking structured, media buys separated, contractors classified, Illinois net income organized for the PPRT, Chicago cloud tax separated." },
    { phase: "Step 4", title: "Monthly margin close", body: "A monthly close showing real margin by project, client, and retainer, CPA-ready." },
  ],
  advisoryBody: [
    "When project and retainer margin is clean and contractor costs are classified, the decisions get real: which clients and service lines actually pay, whether a retainer is profitable once utilization is counted, when to hire versus stay on contractors, and how the PPRT and a PTE election change the picture &mdash; answered from numbers that tie, not revenue that flatters.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, including PPRT/PTE planning, in coordination with your CPA. We keep the books; your CPA files and makes the election.",
  ],
  faq: [
    { q: "What does Illinois agency accounting include?", a: "Profitability tracking by project, client, and retainer using billable utilization; retainer revenue recognized separately from project revenue; pass-through media buys kept out of margin; clean 1099-contractor classification, payroll, and reporting; Illinois net income tracked for the PPRT; and Chicago&rsquo;s lease/cloud tax handled separately &mdash; all in your own QuickBooks file across all 102 counties. We keep the books; your CPA files." },
    { q: "How do you make agency project and client profitability visible?", a: "We structure the books so revenue and cost attach to the project, client, and retainer they belong to, then track billable utilization so labor cost is matched to billable work. Pass-through media buys are recorded so they flow through without inflating margin. The result is a monthly view of which projects, clients, and retainers actually pay &mdash; not just top-line revenue." },
    { q: "How do you handle freelancers and contractors versus employees?", a: "Agencies run on freelancers, designers, and developers, so contractor-versus-employee classification is one of the riskiest areas in the books. We keep classification, payments, payroll, and 1099 reporting clean and consistent so the figures are supportable and audit-ready. Your CPA confirms the correct tax treatment and files; we keep the underlying records right." },
    { q: "How are pass-through media buys handled so they don&rsquo;t inflate revenue?", a: "When you buy media on a client&rsquo;s behalf, that spend is a pass-through cost, not your margin. We record media buys so they flow through the books cleanly &mdash; reconciled against the platform spend summaries &mdash; and stay out of your gross margin, so a high-media-spend month never reads as a high-profit month. It keeps both revenue and margin honest." },
    { q: "How is an Illinois agency taxed, and what about the PPRT and PTE election?", a: "Most agencies operate as S-corps, LLCs, or partnerships. Illinois has a flat 4.95% personal income tax, and the Personal Property Replacement Tax hits pass-throughs at 1.5% at the entity level &mdash; even pass-throughs owe it, which surprises owners new to Illinois. The permanent Pass-Through Entity (PTE) election lets the entity pay a 4.95% entity-level tax as a federal SALT-cap workaround. We track Illinois net income cleanly and structure the books so your CPA can compute the PPRT, model the PTE decision, make the election, and file." },
    { q: "Does Chicago&rsquo;s cloud tax apply to my agency?", a: "Probably in two directions. Agencies run on SaaS &mdash; design suites, project tools, ad platforms &mdash; and the City of Chicago&rsquo;s Personal Property Lease Transaction Tax (the &ldquo;cloud tax,&rdquo; 15%) applies to cloud and software used in Chicago, so that cost shows up on the expense side. Separately, if your agency sells digital or cloud services to Chicago customers, you may have a collection obligation of your own. We track it separately from Illinois sales tax in QuickBooks, because it&rsquo;s a City of Chicago tax administered by the Department of Finance, not a state tax. Your CPA confirms how it applies to you." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the Illinois income tax, the PPRT, sales tax, and any PTE election, and handles Chicago city taxes. We do not file Illinois returns, make the PTE election, or represent clients before the Department, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: "This page reflects how TechBrot handles Illinois agency and creative engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois businesses remotely across all 102 counties, and reviewed for technical accuracy on project and retainer profitability, 1099-contractor classification, the Personal Property Replacement Tax, the PTE election, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax, current as of the date below. These figures are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance; rates and the PTE/cloud-tax rules change, so confirm current figures with the Department and your CPA. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file Illinois returns, make the PTE election, or represent clients before authorities. Independent firm &mdash; not affiliated with Intuit Inc.",
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois QuickBooks accountant", body: "The umbrella Illinois money service &mdash; bookkeeping, cleanup, sales tax, the PPRT, and the cloud tax.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "Illinois replacement tax help", body: "Keep Illinois net income tracked for the PPRT and the books structured for the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { title: "Illinois sales &amp; cloud tax help", body: "Configure sales tax by jurisdiction and track Chicago&rsquo;s 15% cloud tax separately.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Agency accounting (national)", body: "Our global industries overview for the broader agency playbook.", href: "/accounting/industries/", cta: "National overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/industries/agency/",
    name: "Illinois Agency & Creative Accounting",
    description: "Accounting for Illinois marketing, creative, and digital agencies — project, client, and retainer profitability, 1099-contractor classification, the Personal Property Replacement Tax (PPRT), the PTE election, and Chicago's 15% lease/cloud tax. Books CPA-ready across all 102 counties; does not file Illinois taxes.",
    serviceName: "Illinois Agency & Creative Accounting",
    serviceType: "Agency and creative industry bookkeeping services",
    serviceDesc: "Bookkeeping for Illinois marketing, creative, and digital agencies — profitability tracking by project, client, and retainer using billable utilization, retainer-vs-project revenue recognition, pass-through media-buy handling, clean 1099-contractor classification and payroll, Illinois-net-income tracking for the Personal Property Replacement Tax, PTE-election-ready books, and Chicago lease/cloud-tax tracking, kept CPA-ready. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, or represent clients — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois marketing, creative, and digital agencies across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

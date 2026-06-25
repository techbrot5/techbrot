/* /find-an-accountant/texas/industries/construction/ — TX INDUSTRY CHILD.
 * t-location + heroLight. Shared body: partials/state-industry-body.njk. v4 TX state-weighted.
 * GENUINELY TX×construction: job costing, WIP, AIA billing, retainage, the TEXAS sales-tax contract
 * distinction (lump-sum vs separated, Comptroller), margin-tax COGS, BPP on equipment, 1099 subs
 * (IRS common-law test — NOT California's AB5), Davis-Bacon only on federally funded jobs. HONESTY:
 * deferred to the Comptroller + CPA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const TX_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing, taxability-determination, or representation claims (out of scope) &middot; Contract taxability varies &mdash; confirm with the Comptroller &amp; your CPA &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/industries/construction/",
  slug: "tx-ind-construction",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Texas Construction Accounting & Job Costing · TechBrot",
  description: "Texas construction accounting — job costing, WIP, AIA billing, retainage, lump-sum vs separated sales-tax contracts, margin-tax COGS, 1099 subs. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Industries", href: "/find-an-accountant/texas/industries/" },
    { name: "Construction" },
  ],
  bookHref: "/contact/?intent=texas&state=texas&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Texas &middot; Construction Accounting",
    heading: "Texas construction accounting that knows which job made money.",
    subheading: "Texas contractors don&rsquo;t fail on revenue &mdash; they fail on jobs that quietly lost money while the books looked fine. We set up real job costing, WIP, AIA billing, and retainage, get the Texas sales-tax contract structure right (lump-sum vs separated), keep COGS clean for the margin tax, and track subcontractor 1099s &mdash; by a named Certified ProAdvisor. We deliver the books; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor construction accounting for Texas contractors</strong> &mdash; job costing, WIP schedules, AIA billing, retainage, the Texas lump-sum vs separated sales-tax contract treatment, margin-tax COGS tracking, and subcontractor 1099 records, set up in your own QuickBooks file. The full Texas construction summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Texas construction sales-tax treatment (lump-sum vs separated contracts) reflects Comptroller rules current as of the review date and varies by contract and project type; confirm with the Comptroller and your CPA. TechBrot does not file Texas taxes or make taxability determinations.",
  },
  ctaBand: {
    eyebrow: "Texas contractors start here",
    heading: "See which Texas jobs actually make you money.",
    lede: "Book a free discovery call. We&rsquo;ll review your jobs, how your contracts are structured for Texas sales tax, and where the books are breaking, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Texas construction accounting, plainly.",
    aiHeading: "Texas construction accounting, in five questions.",
    challengesEyebrow: "Why Texas contractor books break",
    challengesHeading: "Three places Texas contractors lose the numbers.",
    challengesLede: "Profitable-looking contractors go under when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
    handleHeading: "Texas construction accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your jobs and crew, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
    integrationsHeading: "Connected to how you build.",
    processHeading: "From guesswork to job-level profit.",
    processLede: "Every Texas construction engagement follows the same rhythm &mdash; books accurate first, job-profit visibility second, advisory third.",
    advisoryHeading: "Accurate job costs are the start. Winning the right bids is the point.",
    faqHeading: "Texas construction accounting questions.",
    relatedHeading: "Related Texas services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides construction accounting for Texas contractors</strong> &mdash; general contractors, subs, and specialty trades &mdash; in your own QuickBooks file by a named Certified ProAdvisor. The job is to show which jobs make money and keep Texas&rsquo;s sales-tax and franchise-tax requirements clean.",
    "Texas adds its own weight. The <strong>sales-tax treatment of construction contracts</strong> turns on how the contract is written: under Comptroller rules a <strong>lump-sum</strong> contract makes the contractor the consumer (you pay tax on materials, don&rsquo;t collect from the customer), while a <strong>separated</strong> contract means you collect sales tax on the materials charge &mdash; and new construction vs. repair or remodel, residential vs. commercial, all change taxability. The franchise (&ldquo;margin&rdquo;) tax rewards clean <strong>COGS</strong> tracking, equipment shows up on the <strong>business personal property</strong> rendition, and subcontractors need clean 1099s. We set up job costing, WIP, AIA billing, and retainage, and keep the Texas sales-tax and sub records straight &mdash; CPA-ready. We keep the books; your CPA confirms contract taxability and files. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Texas construction accounting?", a: "<strong>Real job costing, WIP schedules, AIA billing, and retainage, plus the Texas lump-sum vs separated sales-tax contract treatment, margin-tax COGS tracking, and subcontractor 1099 records</strong> &mdash; so contractors see which jobs make money and stay compliant. A named Certified ProAdvisor does the books; your CPA confirms taxability and files." },
    { q: "How does Texas sales tax work on construction contracts?", a: "It depends on contract structure. Under Comptroller rules, a <strong>lump-sum</strong> contract makes the contractor the consumer &mdash; you pay sales tax on materials and don&rsquo;t separately collect it; a <strong>separated</strong> contract means you collect sales tax on the materials charge. New construction vs. repair/remodel and residential vs. commercial also change taxability. We set the books up to match how your contracts are written; your CPA confirms the determination." },
    { q: "How do you handle job costing and WIP?", a: "We tie labor, materials, subs, and equipment to each job and maintain a <strong>WIP schedule</strong> (costs vs billings) so over- and under-billings are visible and you know real job margin before the job closes &mdash; not after." },
    { q: "Do Texas contractors deal with prevailing wage?", a: "Texas has no statewide prevailing-wage regime like some states; <strong>certified payroll under federal Davis-Bacon applies only on federally funded projects</strong> (and some local public works set their own rules). We keep payroll and job coding clean so certified payroll can be produced where it&rsquo;s required; the submission and labor compliance stay with you or your payroll provider." },
    { q: "Do you file Texas taxes or determine contract taxability?", a: "No &mdash; we keep the books CPA-ready and set them up to match your contract structure; your CPA confirms the lump-sum vs separated taxability and files. We&rsquo;re independent, don&rsquo;t represent clients before the Comptroller, and aren&rsquo;t affiliated with Intuit." },
  ],
  challenges: [
    { signal: "Job costs", title: "Jobs that quietly lose money", body: "Without real job costing and a WIP schedule, a contractor can look profitable while individual jobs bleed &mdash; the loss only shows up after the job (and the cash) is gone." },
    { signal: "Sales tax", title: "Lump-sum vs separated contracts", body: "Texas taxes construction by contract structure &mdash; lump-sum makes you the consumer; separated makes you the collector. Books set up wrong for your contract type mean sales tax is mishandled on every job." },
    { signal: "Subs &amp; 1099s", title: "Subcontractor records", body: "A sub-heavy roster with sloppy 1099 records is an audit and a backcharge waiting to happen &mdash; and blurs the job-cost picture when sub costs aren&rsquo;t tied to jobs." },
  ],
  handle: [
    { num: "01", title: "Real job costing", body: "Labor, materials, subs, and equipment tied to each job so true job margin is visible, not a blended number.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "WIP schedules", body: "Costs vs billings tracked per job so over- and under-billings and real margin are visible before the job closes.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03", title: "Contract-correct sales tax", body: "Books set up for lump-sum or separated contracts so Texas sales tax is handled right on materials &mdash; your CPA confirms the determination.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "AIA billing &amp; retainage", body: "Progress billing (AIA G702/G703) and retainage receivable/payable tracked so cash and billings stay straight.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "05", title: "Margin-tax COGS", body: "Construction COGS tracked cleanly so your CPA can take the COGS deduction on the franchise (margin) tax.", href: "/find-an-accountant/texas/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
    { num: "06", title: "Subcontractor 1099s", body: "Sub records and 1099s kept clean and tied to jobs &mdash; ready for filing season and clean on the job-cost side.", href: "/find-an-accountant/texas/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
  ],
  integrations: [
    "Procore, Buildertrend, and construction-management platforms",
    "Knowify and job-costing tools",
    "Gusto, ADP, and construction payroll providers",
    "Certified-payroll tools for federal Davis-Bacon jobs",
    "Bill.com for subcontractor and vendor AP",
    "QuickBooks Online or hosted Desktop &mdash; your file",
  ],
  integrationsNote: "We reconcile alongside the project-management and payroll tools you already run &mdash; the books read from how you build.",
  process: [
    { phase: "Step 1", title: "Free job &amp; contract review", body: "A Certified ProAdvisor reviews your jobs, WIP, and how your contracts are structured for Texas sales tax &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly." },
    { phase: "Step 3", title: "Build job costing &amp; WIP", body: "Job costing and a WIP schedule set up, AIA billing and retainage tracked, sales tax set to your contract structure." },
    { phase: "Step 4", title: "Monthly job profit", body: "A monthly close showing job-level profit and WIP, CPA-ready and bonding-ready." },
  ],
  advisoryBody: [
    "When job costs are accurate and WIP is visible, the decisions get real: which work to bid, which crews and job types make money, whether to take the bonded job &mdash; answered from numbers that tie.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, in coordination with your CPA and bonding agent. We keep the books; your CPA files; the strategy rests on both being right.",
  ],
  faq: [
    { q: "What does Texas construction accounting include?", a: "Real job costing, WIP schedules (costs vs billings), AIA progress billing and retainage, books set up for the Texas lump-sum vs separated sales-tax contract treatment, margin-tax COGS tracking, and subcontractor 1099 records &mdash; in your own QuickBooks file. We deliver the books; your CPA confirms contract taxability and files." },
    { q: "How does Texas sales tax work on a construction contract?", a: "It turns on how the contract is written. Under Texas Comptroller rules, a lump-sum contract makes the contractor the consumer &mdash; you pay sales tax on the materials you buy and don&rsquo;t separately collect it from the customer. A separated contract (labor and materials stated separately) means you collect sales tax on the materials charge. New construction vs. repair or remodel, and residential vs. commercial, also change taxability. We set the books up to match your contract structure; your CPA confirms the determination and files. Taxability varies &mdash; confirm with the Comptroller and your CPA." },
    { q: "How do job costing and WIP schedules work?", a: "We tie labor, materials, subcontractors, and equipment to each job and maintain a WIP schedule comparing costs incurred to amounts billed. That surfaces over- and under-billings and shows real job margin before the job closes &mdash; so a job that&rsquo;s bleeding gets caught while you can still do something about it, not at year-end." },
    { q: "Do Texas contractors have to deal with prevailing wage and certified payroll?", a: "Texas has no statewide prevailing-wage law like some states do. Certified payroll under federal Davis-Bacon applies only on federally funded projects, and some local public works set their own requirements. We keep payroll and job coding clean so certified payroll can be produced accurately where it&rsquo;s required; the submission and labor-compliance obligations stay with you or your payroll provider. We keep the books behind it right." },
    { q: "How do you handle the franchise (margin) tax for contractors?", a: "Construction generally benefits from the cost-of-goods-sold deduction on the Texas franchise (margin) tax, so we track COGS &mdash; materials, subs, and certain labor &mdash; cleanly and distinctly from overhead. That gives your CPA a clean base to compute the margin and choose the best deduction method. We track it; your CPA computes and files." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop, with a named ProAdvisor on the same file every month, connected to your construction-management and payroll tools rather than proprietary software." },
    { q: "Do you file my Texas taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA, who confirms contract taxability and files the franchise (margin) tax and sales tax. We don&rsquo;t make taxability determinations or represent clients before the Comptroller, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: "This page reflects how TechBrot handles Texas construction engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm, and reviewed for technical accuracy on job costing, WIP, retainage, and the Texas lump-sum vs separated sales-tax contract treatment against <a href=\"https://comptroller.texas.gov/\" rel=\"noopener nofollow\">Texas Comptroller</a> guidance current as of the date below. Contract taxability varies by project; confirm with the Comptroller and your CPA. TechBrot delivers the books and coordinates with your CPA, who files; we do not make taxability determinations or represent clients before tax authorities.",
  reviewCreds: TX_REVIEW_CREDS,
  related: [
    { title: "Texas sales tax help", body: "The lump-sum vs separated contract detail behind your construction books, configured in QuickBooks.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { title: "Texas monthly bookkeeping", body: "Keep job costing and WIP current with a recurring monthly close.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Texas QuickBooks setup", body: "Starting fresh? Set up job costing and contract-correct sales tax from day one.", href: "/find-an-accountant/texas/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { title: "Construction accounting (national)", body: "Our global construction industry overview for the broader playbook.", href: "/accounting/industries/construction/", cta: "National overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/industries/construction/",
    name: "Texas Construction Accounting & Job Costing",
    description: "Construction accounting for Texas contractors — job costing, WIP, AIA billing, retainage, the Texas lump-sum vs separated sales-tax contract rules, margin-tax COGS, and subcontractor 1099 records. Independent firm; does not file Texas taxes or make taxability determinations.",
    serviceName: "Texas Construction Accounting & Job Costing",
    serviceType: "Construction industry bookkeeping and job-costing services",
    serviceDesc: "Bookkeeping for Texas contractors — job costing, WIP schedules, AIA progress billing and retainage, books configured for the Texas lump-sum vs separated sales-tax contract treatment, margin-tax COGS tracking, and subcontractor 1099 records, kept CPA-ready. Independent Certified QuickBooks ProAdvisor firm; does not file Texas taxes, make taxability determinations, or represent clients before the Comptroller — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Texas", sameAs: "https://en.wikipedia.org/wiki/Texas" }],
    audienceType: "Texas general contractors, subcontractors, and specialty trades across all 254 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

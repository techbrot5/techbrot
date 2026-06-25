/* /find-an-accountant/illinois/industries/trucking/ — IL INDUSTRY CHILD (net-new growth).
 * t-location + heroLight. partials/state-industry-body.njk. GENUINELY IL×trucking & logistics:
 * IFTA fuel-tax records + IRP apportioned mileage (we keep records, never file the returns), per-mile
 * cost / tractor-trailer depreciation / owner-operator settlements, 1099-vs-employee classification,
 * driver payroll (IL 4.95% withholding), multi-state nexus from Illinois's intermodal/logistics-hub
 * position (Chicago rail, CenterPoint, I-80/I-55), and the IL entity stack (PPRT 1.5%/2.5%, PTE
 * election, flat 4.95% income). HONESTY: we keep books/track/reconcile incl. IFTA mileage & fuel
 * RECORDS; the CPA + IDOR compute/elect/file; we do NOT file IFTA/IRP or IL returns, make the PTE
 * election, or represent. Founder-name-zero; not Intuit; canonical pricing. */
const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/industries/trucking/",
  slug: "il-ind-trucking",
  tierClass: "section--tier-hub",
  bodyClass: "page--location page--industry",
  callBar: true,
  heroLight: true,
  title: "Illinois Trucking & Logistics Accounting · TechBrot",
  description: "Accounting for Illinois trucking & logistics — IFTA and IRP mileage records, per-mile cost, owner-operator settlements, driver payroll, PPRT. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Industries", href: "/find-an-accountant/illinois/industries/" },
    { name: "Trucking & Logistics" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU",
  hero: {
    eyebrow: "Illinois &middot; Trucking &amp; Logistics Accounting",
    heading: "Illinois trucking accounting that keeps the IFTA records and the per-mile numbers straight.",
    subheading: "Illinois carriers don&rsquo;t lose money on rates &mdash; they lose it on fuel-tax records that don&rsquo;t reconcile and per-mile costs nobody is tracking. We keep clean IFTA fuel and mileage records and IRP apportioned-mileage records, track tractor and trailer depreciation, reconcile owner-operator settlements, and run clean driver payroll &mdash; by a named Certified ProAdvisor, in your own QuickBooks file. We keep the records; your CPA computes and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Books only &middot; we don&rsquo;t file IFTA/IRP"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor accounting for Illinois trucking, freight, and logistics businesses</strong> &mdash; clean IFTA fuel-tax and mileage records, IRP apportioned-mileage records, per-mile cost and tractor/trailer depreciation, owner-operator settlement reconciliation, driver payroll (IL 4.95% withholding), and Illinois net income tracked for the Personal Property Replacement Tax, in your own QuickBooks file across all 102 counties. We keep the records and the books; your CPA and the Illinois Department of Revenue compute and file. The full Illinois trucking summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois references (the flat 4.95% income tax; the PPRT; the PTE election) and the IFTA/IRP framework reflect rules current as of the review date. TechBrot keeps IFTA fuel and mileage records but does not file IFTA or IRP returns, does not file Illinois taxes, and does not make the PTE election or represent clients.",
  },
  ctaBand: {
    eyebrow: "Illinois carriers &amp; logistics firms start here",
    heading: "See your real cost per mile &mdash; and reconcile the fuel-tax records before they bite.",
    lede: "Book a free discovery call. We&rsquo;ll review your IFTA and mileage records, owner-operator settlements, and entity setup, and send a written fixed-fee scope within 3 business days. No pitch. Independent firm &mdash; we keep the records, don&rsquo;t file IFTA/IRP or IL taxes, and coordinate with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=industry&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  copy: {
    summaryHeading: "Illinois trucking accounting, plainly.",
    aiHeading: "Illinois trucking accounting, in five questions.",
    challengesEyebrow: "Why Illinois carrier books break",
    challengesHeading: "Three places Illinois carriers lose the numbers.",
    challengesLede: "Fuel-tax records don&rsquo;t reconcile, settlements are messy, and per-mile cost is a guess. Knowing which gap you&rsquo;re in tells us where to start.",
    handleHeading: "Illinois trucking accounting, done by an expert.",
    handleLede: "Every engagement is scoped to your operation, delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; records first, decisions second.",
    integrationsHeading: "Connected to how you dispatch, fuel, and settle.",
    processHeading: "From raw miles to real cost per mile.",
    processLede: "Every Illinois trucking engagement follows the same rhythm &mdash; records accurate first, per-mile visibility second, advisory third.",
    advisoryHeading: "Clean fuel-tax records are the start. Profit per mile is the point.",
    faqHeading: "Illinois trucking accounting questions.",
    relatedHeading: "Related Illinois services &amp; industries.",
  },
  summary: [
    "<strong>TechBrot provides accounting for Illinois trucking, freight, and logistics businesses</strong> &mdash; in your own QuickBooks file by a named Certified ProAdvisor. The job is to keep clean records of what crossed which state line, reconcile owner-operator settlements, track what every mile actually costs, and keep the entity&rsquo;s Illinois tax figures straight.",
    "Trucking adds its own complexity. <strong>IFTA</strong> (the International Fuel Tax Agreement) requires quarterly fuel-tax records of fuel purchased and miles driven in each member jurisdiction, and <strong>IRP</strong> (the International Registration Plan) requires apportioned-mileage records by state &mdash; both run on the records we keep, not on guesswork. <strong>Per-mile cost</strong> depends on tractor and trailer depreciation, maintenance, and fuel tied to revenue miles, and <strong>owner-operator settlements</strong> have to be reconciled and the <strong>1099-contractor-vs-employee classification</strong> kept clean, with driver <strong>payroll</strong> withheld at Illinois&rsquo;s flat <strong>4.95%</strong>. Because Illinois is a national intermodal hub &mdash; Chicago rail, CenterPoint near Joliet/Elwood, the I-80 and I-55 corridors &mdash; carriers pick up <strong>multi-state nexus</strong>, so income gets apportioned across states. And Illinois layers an entity-level <strong>Personal Property Replacement Tax</strong> (PPRT) on net income &mdash; <strong>1.5% for pass-throughs, 2.5% for C-corps</strong>, even pass-throughs owe it &mdash; with a permanent <strong>PTE election</strong> option, on top of the flat 4.95% income tax. We keep all the records and the books CPA-ready across all 102 counties; your CPA and IDOR compute and file. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  aiSummary: [
    { q: "What is Illinois trucking accounting?", a: "<strong>Clean IFTA fuel-tax and mileage records, IRP apportioned-mileage records, per-mile cost and equipment depreciation, owner-operator settlement reconciliation, driver payroll, and the Illinois entity-tax figures (PPRT, PTE, the flat 4.95% income tax)</strong> &mdash; for Illinois trucking, freight, and logistics businesses, in your own QuickBooks file. We keep the records; your CPA and IDOR compute and file." },
    { q: "Do you handle IFTA and IRP?", a: "We keep the <strong>records</strong> IFTA and IRP run on &mdash; fuel purchased by jurisdiction and miles driven by state, reconciled every quarter &mdash; so the returns are supportable. We do <strong>not</strong> file the IFTA fuel-tax return or the IRP apportioned-registration; your CPA or registration service files. Clean records are what make either painless." },
    { q: "How do you track cost per mile?", a: "We tie <strong>tractor and trailer depreciation, maintenance, fuel, and driver pay to revenue miles</strong> so you see real cost per mile and per lane &mdash; not a fleet-wide average that hides the unprofitable trucks. The numbers come from your dispatch, fuel-card, and settlement data." },
    { q: "How are Illinois owner-operators and drivers handled?", a: "We reconcile <strong>owner-operator settlements</strong> and keep the <strong>1099-contractor-vs-employee classification</strong> clean &mdash; misclassification is expensive &mdash; and run driver payroll with Illinois&rsquo;s flat <strong>4.95% withholding</strong>. Classification is ultimately a legal/tax call your CPA or counsel confirms; we keep the accounting that supports it." },
    { q: "Do you file Illinois taxes, IFTA, or IRP?", a: "No &mdash; we keep the books and the IFTA/IRP records CPA-ready; your CPA and the Illinois Department of Revenue compute and file the income tax, the PPRT, and any PTE election, and your CPA or registration service files IFTA and IRP. We&rsquo;re independent, don&rsquo;t make the PTE election or represent clients, and aren&rsquo;t affiliated with Intuit." },
  ],
  challenges: [
    { signal: "Fuel tax", title: "IFTA records that don&rsquo;t reconcile", body: "Quarterly IFTA needs fuel purchased and miles driven in each jurisdiction to tie out &mdash; and a carrier whose fuel-card data and trip logs never reconcile is one audit away from a painful assessment." },
    { signal: "Cost per mile", title: "Per-mile cost is a guess", body: "Without tractor/trailer depreciation, maintenance, and fuel tied to revenue miles, &ldquo;profitable&rdquo; is a feeling &mdash; and the trucks and lanes that lose money stay hidden behind a fleet-wide average." },
    { signal: "Drivers", title: "Settlements &amp; 1099-vs-employee", body: "Messy owner-operator settlements and shaky contractor-vs-employee classification create both bad numbers and real exposure &mdash; and driver payroll at Illinois&rsquo;s 4.95% has to be clean on top of it." },
  ],
  handle: [
    { num: "01", title: "IFTA fuel &amp; mileage records", body: "Fuel purchased by jurisdiction and miles driven by state reconciled every quarter from your fuel-card and trip data &mdash; supportable records, ready for the return. We keep the records; we don&rsquo;t file IFTA.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "IRP apportioned-mileage records", body: "Apportioned mileage by state kept clean so your IRP registration is supportable &mdash; the record-keeping behind the plates, not the filing.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03", title: "Per-mile cost &amp; equipment", body: "Tractor and trailer depreciation, maintenance, and fuel tied to revenue miles on a fixed-asset schedule so cost per mile and per lane is real.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
    { num: "04", title: "Owner-operator settlements", body: "Settlements reconciled and 1099-contractor-vs-employee classification kept clean so the accounting supports the position your CPA confirms.", href: "/find-an-accountant/illinois/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
    { num: "05", title: "Driver payroll (IL 4.95%)", body: "Clean driver payroll with Illinois 4.95% withholding, coordinated with your payroll provider and reconciled every period.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "PPRT &amp; multi-state apportionment", body: "Illinois net income tracked for the PPRT and multi-state activity organized so apportionment and the PTE election are supportable.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
  ],
  integrations: [
    "ELD and dispatch/TMS exports (mileage by jurisdiction)",
    "QuickBooks Online or hosted Desktop &mdash; your file",
    "Fuel-card programs (EFS, Comdata, fleet fuel data)",
    "Gusto, ADP, and trucking payroll/settlement providers",
    "Factoring and broker-payment summaries",
    "Maintenance and fixed-asset schedules for tractors and trailers",
  ],
  integrationsNote: "We reconcile from the data your systems produce &mdash; ELD/dispatch miles, fuel-card purchases, settlements, deposits &mdash; into clean IFTA, IRP, and per-mile records. We keep the records; we don&rsquo;t file the IFTA or IRP returns.",
  process: [
    { phase: "Step 1", title: "Free carrier review", body: "A Certified ProAdvisor reviews your IFTA and mileage records, settlements, equipment, and entity setup &mdash; from your financial and dispatch data, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup, cleanup, or monthly." },
    { phase: "Step 3", title: "Reconcile &amp; clean", body: "IFTA fuel and mileage reconciled by jurisdiction, IRP mileage organized, settlements cleaned, equipment scheduled, PPRT figures tracked." },
    { phase: "Step 4", title: "Monthly cost-per-mile close", body: "A monthly close showing real cost per mile and per lane, with IFTA records current &mdash; CPA-ready." },
  ],
  advisoryBody: [
    "When the IFTA records reconcile and settlements are clean, the decisions get real: which lanes and trucks actually pay, whether to add equipment or owner-operators, where maintenance is eating the margin, how multi-state nexus and the PTE election change the entity picture &mdash; answered from numbers that tie, not a fleet-wide average that flatters.",
    "That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> picks up, in coordination with your CPA. We keep the books and the IFTA/IRP records; your CPA and IDOR compute and file; we don&rsquo;t file the returns or make the PTE election.",
  ],
  faq: [
    { q: "What does Illinois trucking accounting include?", a: "Clean IFTA fuel-tax and mileage records and IRP apportioned-mileage records, per-mile cost with tractor and trailer depreciation on a fixed-asset schedule, owner-operator settlement reconciliation and 1099-vs-employee classification, driver payroll at Illinois&rsquo;s flat 4.95% withholding, and Illinois net income tracked for the Personal Property Replacement Tax &mdash; in your own QuickBooks file across all 102 counties. We keep the records and the books; your CPA and IDOR compute and file." },
    { q: "Do you handle IFTA fuel-tax reporting?", a: "We keep the records IFTA runs on. The International Fuel Tax Agreement requires a quarterly accounting of fuel purchased and miles driven in each member jurisdiction; we reconcile your fuel-card purchases against your ELD/dispatch mileage by state so the figures tie and the return is fully supportable. We do not file the IFTA return itself &mdash; your CPA or fuel-tax service files it &mdash; but the reconciled records are what make the filing painless and audit-ready." },
    { q: "What about IRP apportioned mileage?", a: "The International Registration Plan apportions your registration fees across the states you run in by mileage, so it needs clean mileage records by jurisdiction. We keep those records reconciled from your ELD and dispatch data so your IRP renewal and any audit are supportable. As with IFTA, we keep the records; the IRP filing and registration are handled by you or your registration service, not by us." },
    { q: "How do you calculate cost per mile?", a: "We tie tractor and trailer depreciation, maintenance, fuel, insurance, and driver pay to revenue miles, so you see real cost per mile, per truck, and per lane rather than a single fleet-wide average that hides the unprofitable equipment. The inputs come from your dispatch/TMS mileage, fuel-card data, settlements, and fixed-asset schedule &mdash; reconciled in your QuickBooks file every month." },
    { q: "How do you handle owner-operators and the 1099-vs-employee question?", a: "We reconcile owner-operator settlements line by line and keep the books so the 1099-contractor-versus-employee classification is clean and consistent, because misclassification carries real payroll-tax and liability exposure. The classification itself is a legal and tax determination your CPA or counsel confirms; our role is the accounting that supports it, plus clean driver payroll with Illinois&rsquo;s flat 4.95% withholding for your W-2 drivers." },
    { q: "We run loads through several states from Illinois &mdash; how does that affect our books?", a: "Illinois is a national intermodal and logistics hub &mdash; Chicago&rsquo;s rail yards, the CenterPoint intermodal complex near Joliet and Elwood, and the I-80 and I-55 corridors &mdash; so carriers based here routinely pick up activity, and sometimes nexus, in other states. That means income can be apportioned across states and you may have multi-state obligations. We organize the multi-state activity in your books so your CPA can determine apportionment and file correctly; we keep the records, not the multi-state filings." },
    { q: "Do you file my Illinois taxes or my IFTA return?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books and the IFTA and IRP records CPA-ready and coordinate with your CPA, who together with the Illinois Department of Revenue computes and files the Illinois income tax, the Personal Property Replacement Tax, and any PTE election; your CPA or fuel-tax/registration service files the IFTA and IRP returns. We do not file Illinois returns, file IFTA or IRP, make the PTE election, or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: "This page reflects how TechBrot handles Illinois trucking and logistics engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm serving Illinois carriers remotely across all 102 counties, and reviewed for technical accuracy on IFTA fuel and mileage records, IRP apportioned mileage, per-mile cost, owner-operator settlements, and the Illinois entity-tax stack &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (1.5% pass-through / 2.5% C-corp), and the permanent PTE election &mdash; current as of the date below and reviewed against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a>. Rates and the PTE rules change; confirm current figures with the Department and your CPA. TechBrot keeps the IFTA and IRP records and the books and coordinates with your CPA, who files; it does not file IFTA or IRP returns, file Illinois taxes, make the PTE election, or represent clients before the Department.",
  reviewCreds: IL_REVIEW_CREDS,
  related: [
    { title: "Illinois QuickBooks accountant", body: "The umbrella service &mdash; a named ProAdvisor on your carrier&rsquo;s file every month.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { title: "Illinois replacement tax help", body: "Keep Illinois net income clean for the PPRT and the PTE election.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { title: "Illinois monthly bookkeeping", body: "Keep IFTA records, settlements, and per-mile cost reconciled with a recurring monthly close.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { title: "Trucking & logistics accounting (national)", body: "Our global logistics industry overview for the broader playbook.", href: "/accounting/industries/", cta: "National overview &rarr;" },
  ],
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/industries/trucking/",
    name: "Illinois Trucking & Logistics Accounting",
    description: "Accounting for Illinois trucking, freight, and logistics businesses — IFTA fuel-tax and IRP mileage records, per-mile cost and equipment depreciation, owner-operator settlements, driver payroll, and the Personal Property Replacement Tax. Records only; does not file IFTA, IRP, or Illinois taxes.",
    serviceName: "Illinois Trucking & Logistics Accounting",
    serviceType: "Trucking and logistics industry bookkeeping services",
    serviceDesc: "Bookkeeping for Illinois trucking, freight, and logistics businesses — clean IFTA fuel-tax and mileage records and IRP apportioned-mileage records, per-mile cost with tractor/trailer depreciation, owner-operator settlement reconciliation and 1099-vs-employee classification support, driver payroll at Illinois's 4.95% withholding, multi-state activity organized for apportionment, and Illinois net income tracked for the Personal Property Replacement Tax, kept CPA-ready across all 102 counties. Independent Certified QuickBooks ProAdvisor firm; keeps the IFTA/IRP records but does not file IFTA or IRP returns, file Illinois taxes, make the PTE election, or represent clients — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois trucking, freight, and logistics businesses across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

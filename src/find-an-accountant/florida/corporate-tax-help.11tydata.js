/* /find-an-accountant/florida/corporate-tax-help/ — FL SERVICE CHILD (tax cluster, non-triage).
 * t-bofu · partials/state-service-body.njk. The Florida-distinctive business-tax stack beyond sales
 * tax: the 5.5% CORPORATE income tax (C-corps, Form F-1120), the COMMERCIAL-RENT ("business rent")
 * sales tax, and the TANGIBLE PERSONAL PROPERTY return (DR-405). HONESTY: we track the figures in the
 * books; computation, the rent-tax rate (phasing down), and FILING stay with the Florida DOR + the
 * client's CPA. We do not compute the liability, file, or represent. All forward-links point to BUILT
 * pages only. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const FL_FACTS = [
  { fig: "5.5%", title: "The 5.5% corporate income tax", body: "Florida has no personal income tax, but <strong>C-corporations pay a 5.5% corporate income tax</strong> (Form F-1120) to the Department of Revenue, with a standard exemption. Pass-throughs (S-corps, most LLCs, partnerships) generally don&rsquo;t &mdash; entity type decides. We track the figures; your CPA computes and files." },
  { fig: "Commercial rent", title: "The commercial-rent (&ldquo;business rent&rdquo;) tax", body: "Florida is unusual in taxing <strong>commercial real-property rent</strong> &mdash; a rate that has been stepping down and is being phased out. If you lease commercial space it&rsquo;s a real obligation; the current rate and treatment change, so we track it and the DOR&rsquo;s rules and your CPA confirm." },
  { fig: "TPP", title: "The tangible personal property return", body: "Florida businesses file an annual <strong>tangible personal property</strong> return (DR-405) on equipment, furniture, and fixtures with the county property appraiser. We keep a maintained fixed-asset schedule so it&rsquo;s ready; valuation and any exemption stay with your CPA." },
];
const FL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Florida businesses remotely across all 67 counties. Florida business-tax references &mdash; the 5.5% corporate income tax and its exemption, the commercial-rent (business rent) tax and its phase-down, and the tangible personal property return &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://floridarevenue.com/\" rel=\"noopener nofollow\">Florida Department of Revenue</a>. Exact rates, exemptions, and the rent-tax phase-out change; confirm current figures with the Department and your CPA. TechBrot tracks the figures in the books and coordinates with your CPA; we do not compute the liability, file the returns, or represent clients before the Department.";
const FL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Florida Department of Revenue &middot; No tax computation, filing, or representation claims (out of scope) &middot; Rates &amp; the rent-tax phase-out change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. or the Department of Revenue" },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/florida/corporate-tax-help/",
  slug: "fl-svc-corporatetax",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Florida Corporate, Rent & TPP Tax Help · TechBrot",
  description: "Florida's business taxes beyond sales tax — the 5.5% corporate income tax, the commercial-rent tax, and the tangible personal property return — tracked in your books so your CPA can file. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Corporate & Business Tax Help" },
  ],
  bookHref: "/contact/?intent=florida&state=florida&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "Florida &middot; Corporate, Rent &amp; TPP Tax",
    heading: "Florida&rsquo;s business taxes beyond sales tax, tracked in your books.",
    subheading: "No personal income tax doesn&rsquo;t mean no business tax. We keep the figures behind Florida&rsquo;s 5.5% corporate income tax (for C-corps), the commercial-rent tax on leased space, and the annual tangible personal property return clean in your QuickBooks file &mdash; so your CPA can compute and file accurately. We keep the books; your CPA computes and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit or the DOR", "We track &middot; your CPA computes &amp; files"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> keeps the figures behind <strong>Florida&rsquo;s business taxes</strong> clean in your QuickBooks file &mdash; the <strong>5.5% corporate income tax</strong> (for C-corps), the <strong>commercial-rent tax</strong> on leased space, and the annual <strong>tangible personal property</strong> return &mdash; so your CPA can compute and file. We track the figures; computation and filing stay with the Department of Revenue&rsquo;s rules and your CPA. Full summary below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. or the Florida Department of Revenue. Rates, exemptions, and the rent-tax phase-out change &mdash; confirm with the Department and your CPA. TechBrot does not compute the liability or file the returns.",
  },
  ctaBand: {
    eyebrow: "Florida businesses start here",
    heading: "Want Florida&rsquo;s business taxes to be a non-event at filing time?",
    lede: "Book a free discovery call. We&rsquo;ll review whether your books are tracking the figures your CPA needs for the corporate, rent, and TPP taxes, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; we keep the books; your CPA computes and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Florida",
  copy: {
    aiHeading: "Florida corporate, rent &amp; TPP tax, in five questions.",
    valueEyebrow: "What this covers",
    valueHeading: "The figures your CPA needs, kept clean all year.",
    valueLede: "We keep the corporate, rent, and TPP figures reconciled &mdash; the computation and filing stay with your CPA.",
    factsEyebrow: "Florida&rsquo;s business taxes beyond sales tax",
    factsHeading: "Three Florida business taxes your books must support.",
    factsLede: "No personal income tax doesn&rsquo;t mean no business tax &mdash; these three are computed from your books.",
    faqHeading: "Florida corporate &amp; business tax questions.",
  },
  summary: "<strong>TechBrot</strong> keeps the figures behind <strong>Florida&rsquo;s business taxes beyond sales tax</strong> clean in your QuickBooks file. Florida has <strong>no personal income tax</strong>, but C-corporations pay a <strong>5.5% corporate income tax</strong> (Form F-1120) to the Department of Revenue; the <strong>commercial-rent (&ldquo;business rent&rdquo;) tax</strong> applies to leased commercial space (a rate that&rsquo;s phasing down); and every business files an annual <strong>tangible personal property</strong> return (DR-405). We track the revenue and expense figures for the corporate tax, capture the commercial-rent tax, and maintain a fixed-asset schedule for the TPP return &mdash; so your CPA can compute and file. Computation, the current rent-tax rate, and filing stay with the Department&rsquo;s rules and your CPA. In your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 67 counties, fixed-fee. Independent firm &mdash; not affiliated with Intuit Inc. or the Department. Rates and the rent-tax phase-out change &mdash; confirm current figures.",
  aiSummary: [
    { q: "Does Florida have a corporate income tax?", a: "<strong>Yes &mdash; 5.5% on C-corporations</strong> (Form F-1120), administered by the Florida Department of Revenue, with a standard exemption. There&rsquo;s no <em>personal</em> income tax, and pass-throughs (S-corps, most LLCs, partnerships) generally don&rsquo;t pay the corporate tax &mdash; entity type decides. We track the figures; your CPA computes and files." },
    { q: "What is the Florida commercial-rent tax?", a: "Florida is unusual in taxing <strong>commercial real-property rent</strong> &mdash; the &ldquo;business rent tax.&rdquo; If you lease commercial space, the rent is subject to sales tax at a rate that has been <strong>stepping down and is being phased out</strong>. We record it correctly in the books; the current rate and treatment are confirmed with the Department and your CPA." },
    { q: "What is the tangible personal property (TPP) return?", a: "Florida businesses file an annual <strong>TPP return (DR-405)</strong> on equipment, furniture, and fixtures with the county property appraiser, with an exemption available. We keep a maintained fixed-asset schedule so the return is straightforward; valuation and the exemption stay with your CPA." },
    { q: "What does TechBrot do for these taxes?", a: "We <strong>keep the figures clean in QuickBooks</strong> &mdash; revenue and expenses for the corporate tax, the commercial-rent tax captured from your leases, and a fixed-asset schedule for the TPP return &mdash; so your CPA can compute and file accurately. We don&rsquo;t compute the liability, set the rent-tax rate, or file the returns." },
    { q: "Do you file my Florida corporate, rent, or TPP taxes?", a: "No &mdash; TechBrot keeps the books CPA-ready and coordinates with your CPA, who computes and files all of them. We are an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc. or the Department, and we do not represent clients." },
  ],
  value: [
    { num: "01", title: "Corporate-tax figures tracked", body: "Revenue and expenses kept clean so your CPA can compute the 5.5% corporate income tax (Form F-1120) for a C-corp.", href: "/find-an-accountant/florida/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Commercial-rent tax captured", body: "The business-rent tax on leased commercial space recorded correctly &mdash; the line generic bookkeepers miss &mdash; at the current phasing-down rate.", href: "/find-an-accountant/florida/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03", title: "TPP fixed-asset schedule", body: "Equipment, furniture, and fixtures tracked so the annual tangible personal property return (DR-405) is a quick export.", href: "/find-an-accountant/florida/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales tax handled alongside", body: "The 6% + county surtax sales tax configured and reconciled in the same file, so every Department obligation stays clean.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "Reemployment tax tracked", body: "Florida reemployment (unemployment) tax wages tracked so your payroll provider and CPA can file the RT-6 accurately.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "Cleanup before handoff", body: "If the file is behind or miscategorized, a one-time cleanup brings the figures to a CPA-ready standard.", href: "/quickbooks/cleanup/", cta: "QuickBooks cleanup &rarr;" },
  ],
  facts: FL_FACTS,
  scopeDo: [
    "Track revenue and expenses cleanly for the 5.5% corporate income tax (C-corps)",
    "Capture the commercial-rent tax on leased space at the current rate",
    "Maintain a fixed-asset schedule for the tangible personal property return (DR-405)",
    "Keep sales tax and reemployment-tax figures clean in the same file",
    "Clean up a behind or miscategorized file before the CPA handoff",
    "Hand reconciled, computation-ready figures to your CPA",
  ],
  scopeDont: [
    "Compute the corporate income tax or determine the commercial-rent tax rate",
    "Determine whether you owe the corporate tax or the TPP exemption",
    "File Form F-1120, the commercial-rent tax, or the TPP return",
    "Represent you before the Florida Department of Revenue or provide tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews whether your books track the figures the corporate, rent, and TPP taxes need, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee for cleanup and ongoing tracking." },
    { phase: "Step 3", title: "Track the figures", body: "We get revenue and expenses clean, capture the commercial-rent tax, and maintain the fixed-asset schedule." },
    { phase: "Step 4", title: "Hand off to your CPA", body: "Ahead of each deadline we hand reconciled, computation-ready figures to your CPA, who computes and files." },
  ],
  advisoryBody: [
    "Florida&rsquo;s &ldquo;no income tax&rdquo; reputation hides three real business taxes: the 5.5% corporate income tax for C-corps, the commercial-rent tax on leased space, and the annual tangible personal property return. Each is computed from the books, and each trips up businesses whose records were never set up to track it. Clean bookkeeping makes all three a non-event for your CPA.",
    "We hold the line clearly: we keep the figures reconciled, your CPA computes the liabilities, confirms the current rent-tax rate, and files. Rates and the rent-tax phase-out change &mdash; we flag movement, your CPA confirms the current numbers.",
  ],
  faq: [
    { q: "Does Florida have a corporate income tax?", a: "Yes &mdash; Florida imposes a 5.5% corporate income tax on C-corporations (Form F-1120), administered by the Department of Revenue, with a standard exemption. What Florida doesn&rsquo;t have is a personal income tax. Pass-through entities (S-corps, most LLCs, partnerships) generally don&rsquo;t pay the corporate tax, so your entity type determines whether it applies. We track the figures; your CPA computes and files. Confirm the current rate and exemption with the Department and your CPA." },
    { q: "What is the Florida commercial-rent (business rent) tax?", a: "Florida is unusual in taxing commercial real-property rent &mdash; the &ldquo;business rent tax.&rdquo; If you lease commercial space, the rent is subject to sales tax at a rate that has been stepping down over recent years and is being phased out. Because the rate has changed repeatedly, we record it in the books at the current rate and your CPA and the Department confirm the figure &mdash; we don&rsquo;t assert a specific rate that could go stale." },
    { q: "What is the tangible personal property return (DR-405)?", a: "Florida businesses file an annual tangible personal property return with the county property appraiser, reporting equipment, furniture, and fixtures used in the business, with an exemption available. We keep a maintained fixed-asset schedule in QuickBooks so the return is a quick export rather than a year-end reconstruction. The valuation and the exemption are handled by your CPA or a property-tax consultant." },
    { q: "What does TechBrot do for these Florida business taxes?", a: "We keep the figures clean in QuickBooks &mdash; revenue and expenses for the corporate tax, the commercial-rent tax captured from your leases, a fixed-asset schedule for the TPP return, and reemployment-tax wages tracked &mdash; so your CPA can compute and file each accurately. We do not compute the liabilities, set the rent-tax rate, file the returns, or represent you before the Department." },
    { q: "Do you file my Form F-1120, rent tax, or TPP return?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA, who computes and files the corporate income tax, the commercial-rent tax, and the tangible personal property return. We don&rsquo;t file or represent clients, and we are not affiliated with Intuit Inc. or the Florida Department of Revenue." },
    { q: "I'm an LLC, not a C-corp — does the 5.5% corporate tax apply to me?", a: "Generally not &mdash; the 5.5% corporate income tax applies to C-corporations. Most LLCs, S-corps, and partnerships are pass-through entities whose income is reported by the owners, and Florida has no personal income tax. But entity classification can be nuanced (an LLC can elect C-corp treatment), so your CPA confirms how it applies to you. We keep the books so either answer is supported." },
  ],
  reviewProse: FL_REVIEW_PROSE,
  reviewCreds: FL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/corporate-tax-help/",
    name: "Florida Corporate, Rent & TPP Tax Help",
    description: "Florida's business taxes beyond sales tax — the 5.5% corporate income tax (C-corps), the commercial-rent tax, and the tangible personal property return — tracked in your QuickBooks file so your CPA can compute and file. Independent firm; does not compute or file.",
    serviceName: "Florida Corporate, Commercial-Rent & TPP Tax Bookkeeping Support",
    serviceType: "Business-tax bookkeeping support",
    serviceDesc: "Tracking and reconciliation of the figures behind Florida's 5.5% corporate income tax (C-corps), the commercial-rent (business rent) tax on leased space, and the annual tangible personal property return (DR-405), plus reemployment-tax wage tracking, for Florida businesses across all 67 counties. Independent Certified QuickBooks ProAdvisor firm; does not compute the liabilities, set rates, file the returns, or represent clients before the Florida Department of Revenue — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" }],
    audienceType: "Florida C-corporations and businesses leasing commercial space or holding tangible personal property across all 67 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

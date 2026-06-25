/* /find-an-accountant/illinois/replacement-tax-help/ — IL SERVICE CHILD (tax cluster, non-triage).
 * t-bofu · partials/state-service-body.njk. The IL-distinctive ENTITY-tax stack: the Personal Property
 * Replacement Tax (PPRT — 2.5% C-corp / 1.5% pass-through, even pass-throughs owe it), the 9.5% combined
 * C-corp rate (7% corporate + 2.5% PPRT), and the permanent PTE election (4.95%, SB 1911 Dec 2025).
 * HONESTY: we track Illinois net income in the books; the computation, the PTE election, and FILING stay
 * with the IDOR + the CPA. We do not compute the liability, advise on the election, file, or represent.
 * All forward-links point to BUILT pages only. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "The Personal Property Replacement Tax", body: "An Illinois <strong>entity-level tax on net income</strong> that replaced the old personal property tax &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>. Pass-throughs owe the 1.5% at the entity level even though income flows to owners &mdash; an Illinois-specific obligation most states don&rsquo;t impose. We track Illinois net income; your CPA computes and files." },
  { fig: "9.5%", title: "The 9.5% combined C-corp rate", body: "An Illinois <strong>C-corporation</strong> faces a combined <strong>9.5%</strong> &mdash; the 7% corporate income tax plus the 2.5% PPRT &mdash; among the highest in the nation. S-corps and partnerships avoid the 7% and pay only the 1.5% PPRT, so entity choice is consequential. We keep the figures clean; your CPA computes." },
  { fig: "PTE", title: "The permanent PTE election (4.95%)", body: "Illinois offers a <strong>Pass-Through Entity tax election</strong> &mdash; S-corps and partnerships pay a 4.95% entity-level tax as a federal SALT-cap workaround &mdash; made <strong>permanent by SB 1911 in December 2025</strong>. Whether to elect is a key planning call; we keep the books so your CPA can model and support it." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois entity-tax references &mdash; the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, and the permanent Pass-Through Entity (PTE) election (4.95%, made permanent by SB 1911 in December 2025) &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a>. Rates and the PTE rules change; confirm current figures with the Department and your CPA. TechBrot tracks Illinois net income in the books and coordinates with your CPA; we do not compute the liability, advise on or make the PTE election, file the returns, or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-computation, PTE-election-advice, filing, or representation claims (out of scope) &middot; Rates &amp; PTE rules change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. or the Department of Revenue" },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/replacement-tax-help/",
  slug: "il-svc-pprt",
  disclosure: "<strong>Independent, and clear about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not a tax authority, not Intuit, and not a CPA, EA, or attorney. We reconstruct and reconcile the books a notice or filing depends on, fast and accurately; your CPA or EA files and represents you before the agency. We never trade accuracy for speed.",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois Replacement Tax (PPRT) & PTE Help · TechBrot",
  description: "Illinois's entity-level taxes — the Personal Property Replacement Tax (PPRT, 2.5%/1.5%), the 9.5% combined C-corp rate, and the permanent PTE election — tracked in your books so your CPA can compute and file. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Replacement Tax & PTE Help" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; Replacement Tax (PPRT) &amp; PTE",
    heading: "Illinois&rsquo;s entity-level taxes, tracked in your books all year.",
    subheading: "Illinois layers a Personal Property Replacement Tax on entity net income &mdash; even pass-throughs owe it &mdash; pushes C-corps to a 9.5% combined rate, and offers a permanent PTE election. All of it is computed from your Illinois net income, so we keep that figure clean and supportable in your QuickBooks file. We keep the books; your CPA computes, makes the PTE call, and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit or the IDOR", "We track &middot; your CPA computes &amp; files"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> keeps the figures behind <strong>Illinois&rsquo;s entity-level taxes</strong> clean in your QuickBooks file &mdash; the <strong>Personal Property Replacement Tax</strong> (2.5% C-corp / 1.5% pass-through), the <strong>9.5% combined C-corp rate</strong>, and the permanent <strong>PTE election</strong> &mdash; so your CPA can compute and file. We track Illinois net income; the computation, the PTE decision, and filing stay with the IDOR&rsquo;s rules and your CPA. Full summary below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. or the Illinois Department of Revenue. Rates and PTE rules change &mdash; confirm with the Department and your CPA. TechBrot does not compute the liability, advise on the PTE election, or file the returns.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Want the PPRT and the PTE call to rest on clean books?",
    lede: "Book a free discovery call. We&rsquo;ll review whether your books track the Illinois net income your CPA needs for the PPRT and the PTE election, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; we keep the books; your CPA computes and files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois replacement tax (PPRT) &amp; PTE, in five questions.",
    valueEyebrow: "What this covers",
    valueHeading: "The Illinois net income your CPA needs, kept clean.",
    valueLede: "We keep Illinois net income reconciled &mdash; the PPRT computation, the PTE election, and filing stay with your CPA.",
    factsEyebrow: "Illinois&rsquo;s entity-level taxes",
    factsHeading: "Three Illinois taxes computed from your net income.",
    factsLede: "Illinois&rsquo;s flat income tax is the simple part &mdash; the PPRT, the C-corp combined rate, and the PTE election are where the books matter.",
    faqHeading: "Illinois replacement tax &amp; PTE questions.",
  },
  summary: "<strong>TechBrot</strong> keeps the figures behind <strong>Illinois&rsquo;s entity-level taxes</strong> clean in your QuickBooks file. Illinois has a flat 4.95% personal income tax, but the entity layer is what trips owners up: the <strong>Personal Property Replacement Tax</strong> (PPRT) is an entity-level tax on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>, owed even by pass-throughs; a <strong>C-corp&rsquo;s combined rate is 9.5%</strong> (7% corporate + 2.5% PPRT); and the permanent <strong>PTE election</strong> lets S-corps and partnerships pay a 4.95% entity-level tax as a SALT-cap workaround (made permanent by SB 1911 in December 2025). All of it is computed from Illinois net income, so we keep that figure clean and supportable; the computation, the PTE decision, and filing stay with the IDOR&rsquo;s rules and your CPA. In your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 102 counties, fixed-fee. Independent firm &mdash; not affiliated with Intuit Inc. or the Department. Rates and rules change &mdash; confirm current figures.",
  aiSummary: [
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "An <strong>Illinois entity-level tax on net income</strong> that replaced the personal property tax abolished in 1970 &mdash; <strong>2.5% for C-corporations, 1.5% for S-corporations, partnerships, and trusts</strong>. Critically, pass-throughs owe the 1.5% at the entity level even though income flows to owners. We track Illinois net income cleanly so the PPRT is supportable; your CPA computes and files." },
    { q: "Why is an Illinois C-corp&rsquo;s rate 9.5%?", a: "A C-corporation pays the <strong>7% Illinois corporate income tax plus the 2.5% PPRT</strong> for a combined 9.5% &mdash; among the highest corporate rates in the nation. S-corps and partnerships avoid the 7% and pay only the 1.5% PPRT, which makes entity choice consequential for Illinois businesses. We keep the figures clean; your CPA computes." },
    { q: "What is the Illinois PTE election?", a: "An optional <strong>Pass-Through Entity tax</strong> letting S-corps and partnerships pay a 4.95% Illinois tax at the entity level &mdash; a workaround to the federal SALT deduction cap. It was made <strong>permanent by SB 1911 in December 2025</strong>. Whether to elect is a recurring planning decision; the bookkeeping must support the entity-level payment and the owner-level credit. We keep the books; your CPA advises and elects." },
    { q: "What does TechBrot do for these taxes?", a: "We <strong>keep Illinois net income clean and reconciled in QuickBooks</strong> &mdash; the figure all three taxes are computed from &mdash; so your CPA can compute the PPRT, model the PTE election, and file accurately. We don&rsquo;t compute the liability, advise on or make the PTE election, or file the returns." },
    { q: "Do you file my PPRT or PTE returns?", a: "No &mdash; TechBrot keeps the books CPA-ready and coordinates with your CPA, who computes and files the PPRT, makes the PTE election, and files the income tax. We are an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc. or the Department, and we do not represent clients." },
  ],
  value: [
    { num: "01", title: "Illinois net income tracked", body: "The figure the PPRT and the PTE are computed from &mdash; categorized cleanly so your CPA starts from a number that ties.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Entity-clean books", body: "Owner distributions, guaranteed payments, and add-backs tracked distinctly so the PPRT base and the PTE math are supportable.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "03", title: "PTE-election-ready", body: "Books structured so your CPA can model the PTE election and so the entity-level payment and owner credit are recorded correctly.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Sales tax handled alongside", body: "Combined sales tax and Chicago&rsquo;s cloud tax configured and reconciled in the same file so every obligation stays clean.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "Multi-state apportionment support", body: "For multi-state operations, the Illinois apportionment figures kept clean so your CPA can support the Illinois share for the PPRT.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "06", title: "Cleanup before handoff", body: "If the file is behind or miscategorized, a one-time cleanup brings the Illinois net income to a CPA-ready standard.", href: "/quickbooks/cleanup/", cta: "QuickBooks cleanup &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Track Illinois net income cleanly &mdash; the base for the PPRT and the PTE",
    "Track distributions, guaranteed payments, and add-backs distinctly",
    "Structure the books so your CPA can model and support the PTE election",
    "Keep sales tax and Chicago&rsquo;s cloud tax clean in the same file",
    "Keep multi-state apportionment figures clean for the Illinois share",
    "Hand reconciled, computation-ready figures to your CPA",
  ],
  scopeDont: [
    "Compute the PPRT or the corporate income tax",
    "Advise on, model the outcome of, or make the PTE election",
    "File the PPRT, the income tax, or the PTE return",
    "Represent you before the Illinois Department of Revenue or provide tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews whether your books track the Illinois net income the PPRT and PTE need, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee for cleanup and ongoing tracking." },
    { phase: "Step 3", title: "Track the figures", body: "We get Illinois net income clean, track distributions and add-backs, and keep the apportionment figures supportable." },
    { phase: "Step 4", title: "Hand off to your CPA", body: "Ahead of the deadline we hand reconciled, computation-ready figures to your CPA, who computes the PPRT, models the PTE, and files." },
  ],
  advisoryBody: [
    "Illinois&rsquo;s entity taxes catch businesses off guard not because they&rsquo;re hard to file but because the books behind them are messy &mdash; Illinois net income overstated, distributions blended, the PTE math unsupportable, multi-state apportionment unclear. Every one of those is a bookkeeping problem, and every one is what a Certified ProAdvisor keeps clean so your CPA&rsquo;s computation and election are accurate.",
    "We hold the line clearly: we keep Illinois net income reconciled, your CPA computes the PPRT, makes the PTE election, and files. Rates and the PTE rules change &mdash; we flag movement, your CPA confirms the current numbers and the election strategy.",
  ],
  faq: [
    { q: "What is the Illinois Personal Property Replacement Tax?", a: "It&rsquo;s an Illinois entity-level tax on net income that replaced the personal property tax abolished in 1970. C-corporations pay 2.5%; S-corporations, partnerships, and trusts pay 1.5%. The key surprise is that pass-throughs owe the 1.5% at the entity level even though their income flows through to owners &mdash; an obligation most other states don&rsquo;t impose. We track Illinois net income cleanly so it&rsquo;s supportable; your CPA computes and files. Confirm current rates with the Department and your CPA." },
    { q: "Why does an Illinois C-corporation face a 9.5% rate?", a: "Because a C-corp pays the 7% Illinois corporate income tax plus the 2.5% Personal Property Replacement Tax, for a combined 9.5% &mdash; among the highest corporate rates in the country. S-corporations and partnerships avoid the 7% corporate tax and pay only the 1.5% PPRT at the entity level, so the gap makes entity choice consequential. We keep the figures clean so your CPA can compute either; the entity decision is your CPA&rsquo;s and attorney&rsquo;s." },
    { q: "What is the Illinois PTE election and is it still available?", a: "The Pass-Through Entity (PTE) tax election lets S-corps and partnerships pay a 4.95% Illinois income tax at the entity level as a workaround to the federal SALT deduction cap. Originally set to sunset, it was made permanent by SB 1911 in December 2025. Whether to elect it is a recurring planning decision that depends on your owners&rsquo; situations. We keep the books so the entity-level payment and the owner-level credit are recorded correctly; your CPA advises on and makes the election." },
    { q: "What does TechBrot do for the PPRT and PTE?", a: "We keep the figure all of it is computed from &mdash; Illinois net income &mdash; clean and reconciled in QuickBooks, track distributions, guaranteed payments, and add-backs distinctly, and keep multi-state apportionment supportable. That lets your CPA compute the PPRT, model the PTE election, and file accurately. We do not compute the liability, advise on or make the PTE election, or file the returns." },
    { q: "Do pass-throughs and small businesses really owe the PPRT?", a: "Yes &mdash; S-corporations, partnerships, and trusts owe the 1.5% PPRT at the entity level regardless of size, even though they&rsquo;re pass-throughs. It&rsquo;s a common surprise for owners new to Illinois or newly organized as a pass-through. We make sure your Illinois net income is tracked cleanly so the 1.5% is supportable; your CPA computes and files it." },
    { q: "Do you file my Illinois entity taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA, who computes and files the PPRT, the income tax, and the PTE election. We don&rsquo;t compute liabilities, advise on the election, file returns, or represent clients before the Department, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/replacement-tax-help/",
    name: "Illinois Replacement Tax (PPRT) & PTE Help",
    description: "Illinois's entity-level taxes — the Personal Property Replacement Tax (PPRT, 2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, and the permanent PTE election — tracked in your QuickBooks file so your CPA can compute and file. Independent firm; does not compute, advise on the election, or file.",
    serviceName: "Illinois Replacement Tax (PPRT) & PTE Bookkeeping Support",
    serviceType: "Entity-tax bookkeeping support",
    serviceDesc: "Tracking and reconciliation of the Illinois net income behind the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, and the permanent Pass-Through Entity (PTE) election, plus distribution/add-back and multi-state-apportionment tracking, for Illinois businesses across all 102 counties. Independent Certified QuickBooks ProAdvisor firm; does not compute the liability, advise on or make the PTE election, file the returns, or represent clients before the Illinois Department of Revenue — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois C-corporations, S-corporations, and partnerships subject to the PPRT and evaluating the PTE election across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

/* /find-an-accountant/california/virtual-bookkeeper/ — CA SERVICE CHILD (money/bookkeeping).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 money cluster — "virtual /
 * remote bookkeeper near me" for California. GENUINELY CA-localized; remote-delivery
 * emphasis. HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year to do business in California &mdash; even at a loss &mdash; plus an income-based LLC fee. We accrue it so it&rsquo;s never a surprise; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and local district add-ons push the combined rate past 10.25% in places. QuickBooks must apply the correct combined rate by customer location, not a flat statewide rate." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees, with penalties of $5,000&ndash;$25,000 per violation plus back payroll taxes. We separate W-2 from 1099 and surface the exposure; disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping, QuickBooks work, and payroll coordination and works with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/california/virtual-bookkeeper/",
  slug: "ca-svc-virtual",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California Virtual Bookkeeper · TechBrot",
  description: "Virtual bookkeeper for California businesses — remote, in your own QuickBooks file, by a named Certified ProAdvisor. CDTFA district sales tax, $800 franchise tax, AB5 built in. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Virtual Bookkeeper" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; Virtual Bookkeeping",
    heading: "A California virtual bookkeeper &mdash; remote, in your own file, fully local-aware.",
    subheading: "Remote bookkeeping for California businesses by a named Certified QuickBooks ProAdvisor &mdash; in your own QuickBooks Online or hosted Desktop file, with CDTFA district sales tax, the $800 franchise tax, and AB5 contractor tracking built in. Same named bookkeeper every month, all 58 counties. We deliver the books; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> is a <strong>virtual bookkeeper for California businesses</strong> &mdash; remote bookkeeping by a named Certified QuickBooks ProAdvisor in your own QuickBooks file, with CDTFA district sales tax, the $800 franchise tax, and AB5 contractor tracking built in, across all 58 counties. The full California virtual bookkeeper summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Want a remote bookkeeper who knows California rules?",
    lede: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California virtual bookkeeper, in five questions.",
    valueEyebrow: "How remote California bookkeeping works",
    valueHeading: "Remote, in your file, fully local-aware.",
    valueLede: "&ldquo;Virtual&rdquo; means the delivery is remote &mdash; the standard is the same named ProAdvisor, your own file, and California rules built in.",
    factsEyebrow: "California tax realities we build into your books",
    factsHeading: "Three California facts that change how your books are kept.",
    factsLede: "Remote doesn&rsquo;t mean generic &mdash; a real California bookkeeper builds these three realities into your file.",
    faqHeading: "California virtual bookkeeper questions.",
  },
  summary: "<strong>TechBrot</strong> is a <strong>virtual bookkeeper for California businesses</strong> &mdash; remote bookkeeping by a named Certified QuickBooks ProAdvisor, delivered securely in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file. Reconciliation, a clean chart of accounts, CDTFA district sales tax configured by location, the <strong>$800 franchise tax</strong> accrued, AB5 contractor tracking, and CPA-ready statements &mdash; the same named bookkeeper every month, across all 58 counties. &ldquo;Virtual&rdquo; describes the delivery, not the depth: the California standard is identical to an in-person engagement. Fixed-fee ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What is a California virtual bookkeeper?", a: "<strong>A Certified QuickBooks ProAdvisor who keeps your books remotely in your own QuickBooks file to a California standard</strong> &mdash; reconciliation, CDTFA district sales tax, the $800 franchise-tax accrual, AB5 tracking, and CPA-ready statements. &ldquo;Virtual&rdquo; means the delivery is remote, with the same named bookkeeper every month." },
    { q: "Is remote bookkeeping as good as in-person?", a: "Yes &mdash; for QuickBooks-based bookkeeping the work is digital anyway. You get a <strong>named bookkeeper</strong>, secure access to your own file, scheduled calls, and California rules built in. Remote delivery is why we can serve all 58 counties with the same standard." },
    { q: "What California taxes do you build in?", a: "The <strong>$800 FTB franchise tax</strong>, <strong>CDTFA district sales tax</strong> by location, and <strong>AB5</strong> worker classification &mdash; all reflected in the file so the returns your CPA files tie out." },
    { q: "Whose software do you use?", a: "<strong>Yours.</strong> We work in your QuickBooks Online or hosted Desktop file &mdash; your file, your data &mdash; not proprietary tooling. We can set one up or migrate it if you need." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope: monthly <strong>$400&ndash;$2,500+/mo</strong>; cleanup <strong>$1,500&ndash;$15,000+</strong>. Exact fee in writing within 3 business days." },
  ],
  value: [
    { num: "01", title: "Your own QuickBooks file", body: "Secure remote access to your QuickBooks Online or hosted Desktop file &mdash; your data stays yours.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "02", title: "A named bookkeeper", body: "The same Certified ProAdvisor on your file every month &mdash; not a rotating queue &mdash; so nothing is re-learned.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "03", title: "Monthly reconciliation", body: "Accounts reconciled and categorized on a schedule, with CPA-ready statements delivered each month.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04", title: "District sales tax built in", body: "CDTFA rates configured by customer location and reconciled remotely, so the return ties.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "AB5 &amp; franchise tax tracked", body: "Contractor classification kept clean and the $800 franchise tax accrued &mdash; the California specifics, handled.", href: "/find-an-accountant/california/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "06", title: "Scheduled calls &amp; clear reporting", body: "Regular check-ins and statements you can actually read &mdash; remote, but never out of touch.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Keep your own QuickBooks file reconciled and current, remotely",
    "Assign a named bookkeeper on the same file every month",
    "Configure CDTFA district sales tax by location",
    "Accrue the $800 franchise tax and track AB5 classification",
    "Deliver CPA-ready statements and hold scheduled calls",
    "Coordinate California payroll with your provider",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your QuickBooks file remotely &mdash; no software to install, no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days." },
    { phase: "Step 3", title: "Secure access &amp; cleanup", body: "We get secure access to your own file and bring it current to a CPA-ready standard if needed." },
    { phase: "Step 4", title: "Monthly remote cadence", body: "Your named bookkeeper keeps the file clean every month and hands statements to your CPA." },
  ],
  advisoryBody: [
    "Remote bookkeeping only works when it&rsquo;s a real bookkeeper, not a black box &mdash; a named California ProAdvisor who knows your file, keeps the district sales tax configured, and tells you what the numbers mean.",
    "When the books are clean, the same relationship extends into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> &mdash; remotely, in coordination with your CPA.",
  ],
  faq: [
    { q: "What is a California virtual bookkeeper?", a: "A Certified QuickBooks ProAdvisor who keeps your books remotely in your own QuickBooks file to a California standard &mdash; reconciliation, a clean chart of accounts, CDTFA district sales tax, the $800 franchise-tax accrual, AB5 contractor tracking, and CPA-ready statements. &ldquo;Virtual&rdquo; means the delivery is remote, with the same named bookkeeper on your file every month." },
    { q: "Is remote bookkeeping as reliable as in-person?", a: "Yes. QuickBooks bookkeeping is digital work, so remote delivery loses nothing &mdash; you get a named bookkeeper, secure access to your own file, scheduled calls, and California rules built in. Remote delivery is exactly why we can serve businesses in all 58 counties to the same standard without an office on your block." },
    { q: "Whose QuickBooks file do you use?", a: "Yours &mdash; your file, your data. We work in your QuickBooks Online or hosted Desktop file rather than locking you into proprietary tooling, and we can set up a new file or migrate from Desktop or another platform if you need it." },
    { q: "Which California taxes do you build into the books?", a: "The $800 FTB minimum franchise tax (accrued so it&rsquo;s never a surprise), CDTFA district sales tax at the correct combined rate by customer location, and AB5 worker classification. The filings and any FTB/CDTFA/EDD disputes are handled by your CPA or EA." },
    { q: "How do we communicate if it&rsquo;s remote?", a: "Scheduled calls, email, and shared access to your own file. You get the same named bookkeeper every month and clear monthly statements &mdash; remote delivery, but never out of touch. Many California businesses prefer it to an in-office bookkeeper." },
    { q: "How much does a California virtual bookkeeper cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping runs $400&ndash;$2,500+/mo by volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
    { q: "Do you serve my California city?", a: "All 58 California counties, delivered remotely &mdash; LA, the Bay Area, San Diego, the Central Valley, Sacramento and beyond. Your location changes the tax context but never the service or the named bookkeeper on your file." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/virtual-bookkeeper/",
    name: "California Virtual Bookkeeper",
    description: "Virtual bookkeeper for California businesses — remote bookkeeping in your own QuickBooks file by a named Certified ProAdvisor, with CDTFA district sales tax, the $800 franchise tax, and AB5 built in, across all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California Virtual Bookkeeping Services",
    serviceType: "Virtual (remote) bookkeeping services",
    serviceDesc: "Remote bookkeeping for California businesses in the client's own QuickBooks file by a named Certified QuickBooks ProAdvisor — reconciliation, CDTFA district sales tax, the $800 franchise-tax accrual, AB5 tracking, and CPA-ready statements across all 58 counties. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses across all 58 counties wanting remote, virtual bookkeeping in their own QuickBooks file",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

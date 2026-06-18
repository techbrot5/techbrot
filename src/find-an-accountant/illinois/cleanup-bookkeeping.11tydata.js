/* /find-an-accountant/illinois/cleanup-bookkeeping/ — IL SERVICE CHILD (bkg spoke).
 * t-bofu · partials/state-service-body.njk. The bookkeeping BACKLOG catch-up (months/years behind),
 * distinct intent from quickbooks-cleanup (file mechanics). IL-localized: facts band = the real IL stack
 * (PPRT / Chicago 10.25% sales tax / Chicago 15% lease-"cloud" tax) re-angled to the catch-up backlog.
 * HONESTY: IDOR + City of Chicago Dept of Finance + CPA; not Intuit; does not file IL returns. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "Missing years owe an entity-level tax", body: "Illinois imposes the entity-level <strong>Personal Property Replacement Tax</strong> on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>, so even pass-throughs owe it. When the books sit untouched, the Illinois net income for those years was never recorded, so the PPRT has nothing to compute from. Catch-up reconstructs that net income period by period; your CPA computes and files." },
  { fig: "10.25%", title: "Uncollected sales tax piles up by jurisdiction", body: "Illinois sales tax runs <strong>6.25% state up to 10.25% in Chicago</strong> (Cook County + home-rule add-ons) and is destination-based. Every month the books sit, ST-1 periods close with the combined liability under-reconstructed by jurisdiction. Catch-up rebuilds the correct combined rate by location across the missing periods so your CPA can address any prior-period exposure." },
  { fig: "Cloud tax", title: "Chicago&rsquo;s cloud tax accrues un-tracked", body: "Chicago&rsquo;s Personal Property Lease Transaction Tax &mdash; the &ldquo;cloud tax,&rdquo; <strong>15% as of January 2026</strong> &mdash; taxes SaaS, cloud, and equipment leases used in Chicago even though Illinois doesn&rsquo;t tax SaaS at the state level. In a behind file that liability accrues untracked. Catch-up reconstructs it separately from sales tax. It&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot catches up and maintains bookkeeping and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/illinois/cleanup-bookkeeping/",
  slug: "il-svc-cleanupbk",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois Cleanup & Catch-Up Bookkeeping · TechBrot",
  description: "Catch-up bookkeeping for Illinois businesses behind by months or years — reconstruct the books, rebuild the 6.25%–10.25% sales-tax figures by jurisdiction, get CPA-ready. Fixed-fee, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Cleanup & Catch-Up Bookkeeping" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-bkg&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; Cleanup &amp; Catch-Up Bookkeeping",
    heading: "Months &mdash; or years &mdash; behind on the books? We&rsquo;ll catch you up.",
    subheading: "A Certified QuickBooks ProAdvisor reconstructs an Illinois file that&rsquo;s fallen behind &mdash; categorizing the backlog, rebuilding the 6.25%&ndash;10.25% sales-tax figures by jurisdiction, recording the Illinois net income the PPRT needs, and separating Chicago&rsquo;s cloud tax &mdash; until the books are current and CPA-ready. Fixed-fee, all 102 counties. We catch them up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-bkg&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>cleanup and catch-up bookkeeping for Illinois businesses</strong> that have fallen behind &mdash; a Certified ProAdvisor categorizes the backlog, reconstructs the 6.25%&ndash;10.25% sales-tax figures by jurisdiction, rebuilds the Illinois net income the PPRT relies on, separates Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax, and reconciles every account until the file is current and CPA-ready. Fixed-fee, all 102 counties. The full Illinois catch-up summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Behind on the books? Let&rsquo;s get you current.",
    lede: "Book a free discovery call. We&rsquo;ll review how far behind the file is, tell you honestly what catch-up takes, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-bkg&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois catch-up bookkeeping, in five questions.",
    valueEyebrow: "What catch-up bookkeeping covers",
    valueHeading: "From a backlog to current and CPA-ready.",
    valueLede: "We reconstruct the books period by period until the file is caught up &mdash; with the Illinois figures rebuilt.",
    factsEyebrow: "Why an Illinois backlog is more than messy",
    factsHeading: "Three Illinois liabilities a backlog keeps running.",
    factsLede: "Falling behind in Illinois isn&rsquo;t just untidy &mdash; these three obligations keep accruing whether the books are current or not.",
    faqHeading: "Illinois catch-up bookkeeping questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>cleanup and catch-up bookkeeping for Illinois businesses</strong> that are behind by months or years &mdash; distinct from a <a href=\"/find-an-accountant/illinois/quickbooks-cleanup/\">QuickBooks file cleanup</a> (which fixes how the file is configured), this is reconstructing the actual <strong>bookkeeping backlog</strong>. A Certified ProAdvisor categorizes every untouched transaction, rebuilds the <strong>6.25%&ndash;10.25%</strong> sales-tax liability by jurisdiction, records the Illinois net income the <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> (PPRT) relies on for the missing years, separates Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax, and reconciles every account until the file is current and CPA-ready. Fixed-fee against a written scope (typically $2,000&ndash;$20,000+ by how far behind). Independent firm &mdash; not affiliated with Intuit Inc.",
  aiSummary: [
    { q: "What is catch-up bookkeeping in Illinois?", a: "<strong>Reconstructing a bookkeeping backlog &mdash; categorizing months or years of untouched transactions, rebuilding the 6.25%&ndash;10.25% sales-tax figures by jurisdiction, recording the Illinois net income the PPRT needs, separating Chicago&rsquo;s cloud tax, and reconciling every account &mdash; until the file is current and CPA-ready.</strong> We catch them up; your CPA files." },
    { q: "How is this different from a QuickBooks cleanup?", a: "A <a href=\"/find-an-accountant/illinois/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes how the file is configured (sales-tax setup by jurisdiction, the chart of accounts, Chicago cloud-tax separation). <strong>Catch-up bookkeeping reconstructs the missing work</strong> &mdash; the months or years of transactions that were never recorded. Many Illinois engagements need both." },
    { q: "How far behind can you catch up?", a: "Any distance &mdash; a few months or several years. The further behind, the bigger the scope, but we&rsquo;ve reconstructed multi-year Illinois files back to current and CPA-ready." },
    { q: "What does catch-up cost?", a: "Fixed-fee against a written scope, typically <strong>$2,000&ndash;$20,000+</strong> depending on how many months or years and the transaction volume. Exact fee in writing within 3 business days." },
    { q: "What happens after I'm caught up?", a: "Most Illinois businesses move into <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor so the file never falls behind again." },
  ],
  value: [
    { num: "01", title: "The backlog categorized", body: "Every untouched transaction across the missing months or years categorized to an Illinois-correct chart of accounts.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Sales-tax figures rebuilt", body: "The 6.25%&ndash;10.25% combined liability reconstructed by jurisdiction so the ST-1 figures tie and your CPA can address any prior-period exposure.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "PPRT net income reconstructed", body: "Illinois net income rebuilt for the missing years so the Personal Property Replacement Tax is supportable. Your CPA computes and files.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "04", title: "Chicago cloud tax separated", body: "Chicago&rsquo;s 15% lease/cloud-tax liability reconstructed separately from sales tax for the periods it accrued untracked.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "05", title: "Every account reconciled", body: "Bank, credit-card, and loan accounts reconciled across the caught-up periods so the file actually ties.", href: "/find-an-accountant/illinois/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "06", title: "Stays current after", body: "Move into monthly bookkeeping with the same ProAdvisor so the backlog never builds again.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Categorize months or years of backlog to an Illinois-correct chart of accounts",
    "Reconstruct the 6.25%&ndash;10.25% sales-tax liability by jurisdiction",
    "Rebuild the Illinois net income the PPRT relies on for the missing years",
    "Reconstruct Chicago&rsquo;s lease/cloud-tax liability separately from sales tax where it applies",
    "Reconcile bank, credit-card, and loan accounts across the caught-up periods",
    "Hand a current, CPA-ready file to your CPA",
  ],
  scopeDont: [
    "File the Illinois sales tax (ST-1), income tax, the PPRT, or the PTE election",
    "File Chicago city taxes (lease/cloud) or amend prior-period returns",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews how far behind the file is and what catch-up requires." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days, with the timeline and periods listed." },
    { phase: "Step 3", title: "Reconstruct period by period", body: "We categorize the backlog, rebuild the Illinois figures by jurisdiction, and reconcile each period back to clean." },
    { phase: "Step 4", title: "Current &amp; CPA-ready", body: "A current, reconciled file handed to your CPA &mdash; or straight into monthly bookkeeping so it stays current." },
  ],
  advisoryBody: [
    "An Illinois bookkeeping backlog is a quiet liability: ST-1 sales-tax periods keep closing with the combined rate under-reconstructed by jurisdiction, the entity-level PPRT still needs Illinois net income for years that were never recorded, and Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax keeps accruing untracked &mdash; all while the records to support them don&rsquo;t exist yet. Catch-up reconstructs the work so your CPA can file accurately for the missing years.",
    "Once you&rsquo;re current, the same named ProAdvisor keeps it that way in <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> &mdash; so you never need a second catch-up.",
  ],
  faq: [
    { q: "What does Illinois catch-up bookkeeping include?", a: "A Certified ProAdvisor categorizes months or years of untouched transactions to an Illinois-correct chart of accounts, reconstructs the 6.25%&ndash;10.25% sales-tax liability by jurisdiction, rebuilds the Illinois net income the PPRT relies on, separates Chicago&rsquo;s lease/cloud tax, and reconciles every account &mdash; until the file is current and CPA-ready. We catch them up; your CPA files." },
    { q: "How is this different from a QuickBooks cleanup?", a: "A QuickBooks cleanup fixes how the file is configured &mdash; sales-tax setup by jurisdiction, the chart of accounts, separating Chicago&rsquo;s cloud tax. Catch-up bookkeeping reconstructs the missing work itself: the months or years of transactions that were never recorded. They&rsquo;re complementary, and many behind Illinois files need both &mdash; we scope whichever (or both) the file needs." },
    { q: "How many years behind can you catch up?", a: "Any distance &mdash; from a few months to several years. The further behind, the larger the scope and timeline, but we&rsquo;ve reconstructed multi-year Illinois files back to current and CPA-ready. We confirm the exact periods and timeline during a free file review." },
    { q: "Will catching up create a tax bill?", a: "Catch-up itself doesn&rsquo;t create tax &mdash; it produces the accurate records your CPA needs to determine what was actually owed for the missing periods. If prior-period sales tax, the PPRT, or Chicago&rsquo;s cloud tax was under-reported, your CPA addresses the filing; we make sure the books behind it are right. We don&rsquo;t file or amend Illinois returns ourselves." },
    { q: "How much does Illinois catch-up bookkeeping cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $2,000&ndash;$20,000+ depending on how many months or years are behind and the transaction volume. You get the exact fee in writing within 3 business days of a free file review." },
    { q: "Do you file my back taxes after catching up?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we reconstruct the books to CPA-ready and coordinate with your CPA, who files or amends the Illinois sales tax (ST-1), income tax, the PPRT, and any Chicago city taxes. We do not file or amend Illinois returns or represent clients before the Department, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cleanup-bookkeeping/",
    name: "Illinois Cleanup & Catch-Up Bookkeeping",
    description: "Catch-up bookkeeping for Illinois businesses behind by months or years — reconstruct the backlog, rebuild the 6.25%–10.25% sales-tax figures by jurisdiction, record the Illinois net income the PPRT needs, separate Chicago's cloud tax, reconcile to CPA-ready. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois Cleanup & Catch-Up Bookkeeping",
    serviceType: "Catch-up and cleanup bookkeeping",
    serviceDesc: "Reconstruction of a bookkeeping backlog for Illinois businesses behind by months or years — categorizing untouched transactions, rebuilding the 6.25%–10.25% combined sales-tax liability by jurisdiction, reconstructing the Illinois net income for the Personal Property Replacement Tax, separating Chicago's lease/cloud tax, and reconciling all accounts to current and CPA-ready. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses behind on bookkeeping across all 102 counties",
    offerPrice: "2000",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

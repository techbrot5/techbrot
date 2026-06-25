/* /find-an-accountant/texas/cleanup-bookkeeping/ — TX SERVICE CHILD (bkg spoke).
 * t-bofu · partials/state-service-body.njk. Distinct intent from quickbooks-cleanup: this is the
 * BOOKKEEPING BACKLOG catch-up (months/years behind), not QB-file mechanics. TX-localized.
 * HONESTY: Comptroller + CPA; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const TX_FACTS = [
  { fig: "8.25%", title: "Uncollected sales tax piles up while behind", body: "Every month the books sit untouched, sales-tax periods come and go &mdash; and a return that doesn&rsquo;t tie compounds. Catch-up reconstructs the 8.25% liability by location so your CPA can address any prior-period exposure." },
  { fig: "Margin", title: "The franchise-tax deadline doesn&rsquo;t wait", body: "The Texas Franchise (&ldquo;margin&rdquo;) tax is generally due in May whether your books are current or not. Catch-up rebuilds revenue, COGS, and compensation so your CPA can compute the margin on time." },
  { fig: "BPP", title: "Rebuilding the fixed-asset history", body: "A behind file usually never tracked fixed assets &mdash; so the <strong>business personal property</strong> rendition has nothing to render from. Catch-up reconstructs the schedule from the records. Valuation stays with your CPA." },
];
const TX_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Texas businesses remotely across all 254 counties. Texas tax figures &mdash; no state income tax, the franchise (margin) tax, 8.25% sales tax, and business personal property rendition &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://comptroller.texas.gov/\" rel=\"noopener nofollow\">Texas Comptroller of Public Accounts</a>. TechBrot catches up and maintains bookkeeping and coordinates with your CPA, who files; we do not file Texas returns or represent clients before the Comptroller.";
const TX_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No tax-filing or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/cleanup-bookkeeping/",
  slug: "tx-svc-cleanupbk",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Texas Cleanup & Catch-Up Bookkeeping · TechBrot",
  description: "Months or years behind? We reconstruct your Texas books — rebuild 8.25% sales-tax and margin-tax figures to CPA-ready. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Cleanup & Catch-Up Bookkeeping" },
  ],
  bookHref: "/contact/?intent=texas&state=texas&source_type=state-bkg&funnel_stage=MOFU",
  hero: {
    eyebrow: "Texas &middot; Cleanup &amp; Catch-Up Bookkeeping",
    heading: "Months &mdash; or years &mdash; behind on the books? We&rsquo;ll catch you up.",
    subheading: "A Certified QuickBooks ProAdvisor reconstructs a Texas file that&rsquo;s fallen behind &mdash; categorizing the backlog, rebuilding the 8.25% sales-tax and margin-tax figures, and reconstructing the fixed-asset schedule &mdash; until the books are current and CPA-ready. Fixed-fee, all 254 counties. We catch them up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-bkg&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>cleanup and catch-up bookkeeping for Texas businesses</strong> that have fallen behind &mdash; a Certified ProAdvisor categorizes the backlog, reconstructs the 8.25% sales-tax and franchise (margin) tax figures, rebuilds the fixed-asset schedule, and reconciles every account until the file is current and CPA-ready. Fixed-fee, all 254 counties. The full Texas catch-up summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Texas tax references reflect Comptroller rules current as of the review date; TechBrot does not file Texas taxes.",
  },
  ctaBand: {
    eyebrow: "Texas businesses start here",
    heading: "Behind on the books? Let&rsquo;s get you current.",
    lede: "Book a free discovery call. We&rsquo;ll review how far behind the file is, tell you honestly what catch-up takes, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file TX taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-bkg&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Texas",
  copy: {
    aiHeading: "Texas catch-up bookkeeping, in five questions.",
    valueEyebrow: "What catch-up bookkeeping covers",
    valueHeading: "From a backlog to current and CPA-ready.",
    valueLede: "We reconstruct the books period by period until the file is caught up &mdash; with the Texas figures rebuilt.",
    factsEyebrow: "Why a Texas backlog is more than messy",
    factsHeading: "Three Texas deadlines a backlog puts at risk.",
    factsLede: "Falling behind in Texas isn&rsquo;t just untidy &mdash; these three obligations keep running whether the books are current or not.",
    faqHeading: "Texas catch-up bookkeeping questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>cleanup and catch-up bookkeeping for Texas businesses</strong> that are behind by months or years &mdash; distinct from a <a href=\"/find-an-accountant/texas/quickbooks-cleanup/\">QuickBooks file cleanup</a> (which fixes how the file is configured), this is reconstructing the actual <strong>bookkeeping backlog</strong>. A Certified ProAdvisor categorizes every untouched transaction, rebuilds the <strong>8.25% sales-tax</strong> liability by location and the revenue/COGS/compensation behind the <a href=\"/find-an-accountant/texas/franchise-tax-help/\">franchise (margin) tax</a>, reconstructs the fixed-asset schedule for the <strong>BPP</strong> rendition, and reconciles every account until the file is current and CPA-ready. Fixed-fee against a written scope (typically $2,000&ndash;$20,000+ by how far behind). Independent firm &mdash; not affiliated with Intuit Inc.",
  aiSummary: [
    { q: "What is catch-up bookkeeping in Texas?", a: "<strong>Reconstructing a bookkeeping backlog &mdash; categorizing months or years of untouched transactions, rebuilding the 8.25% sales-tax and margin-tax figures, reconstructing the fixed-asset schedule, and reconciling every account &mdash; until the file is current and CPA-ready.</strong> We catch them up; your CPA files." },
    { q: "How is this different from QuickBooks cleanup?", a: "A <a href=\"/find-an-accountant/texas/quickbooks-cleanup/\">QuickBooks cleanup</a> fixes how the file is configured (sales-tax setup, duplicates, the chart of accounts). <strong>Catch-up bookkeeping reconstructs the missing work</strong> &mdash; the months or years of transactions that were never recorded. Many Texas engagements need both." },
    { q: "How far behind can you catch up?", a: "Any distance &mdash; a few months or several years. The further behind, the bigger the scope, but we&rsquo;ve reconstructed multi-year Texas files back to current and CPA-ready." },
    { q: "What does catch-up cost?", a: "Fixed-fee against a written scope, typically <strong>$2,000&ndash;$20,000+</strong> depending on how many months or years and the transaction volume. Exact fee in writing within 3 business days." },
    { q: "What happens after I'm caught up?", a: "Most Texas businesses move into <a href=\"/find-an-accountant/texas/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor so the file never falls behind again." },
  ],
  value: [
    { num: "01", title: "The backlog categorized", body: "Every untouched transaction across the missing months or years categorized to a Texas-correct chart of accounts.", href: "/find-an-accountant/texas/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Sales-tax figures rebuilt", body: "The 8.25% sales-tax liability reconstructed by location so your CPA can address any prior-period exposure.", href: "/find-an-accountant/texas/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "Margin-tax figures reconstructed", body: "Revenue, COGS, and compensation rebuilt so your CPA can compute the franchise (margin) tax for the missing years.", href: "/find-an-accountant/texas/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
    { num: "04", title: "Fixed-asset schedule rebuilt", body: "Equipment and furniture reconstructed into a schedule so the business personal property rendition has something to render from.", href: "/find-an-accountant/texas/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "05", title: "Every account reconciled", body: "Bank, credit-card, and loan accounts reconciled across the caught-up periods so the file actually ties.", href: "/find-an-accountant/texas/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "06", title: "Stays current after", body: "Move into monthly bookkeeping with the same ProAdvisor so the backlog never builds again.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: TX_FACTS,
  scopeDo: [
    "Categorize months or years of backlog to a Texas-correct chart of accounts",
    "Reconstruct the 8.25% sales-tax liability by location",
    "Rebuild revenue, COGS, and compensation for the margin tax",
    "Reconstruct the fixed-asset schedule for the BPP rendition",
    "Reconcile bank, credit-card, and loan accounts across the caught-up periods",
    "Hand a current, CPA-ready file to your CPA",
  ],
  scopeDont: [
    "File the Texas franchise (margin) tax or sales-tax returns",
    "File or amend prior-period returns or the BPP rendition",
    "Represent you before the Texas Comptroller",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews how far behind the file is and what catch-up requires." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days, with the timeline and periods listed." },
    { phase: "Step 3", title: "Reconstruct period by period", body: "We categorize the backlog, rebuild the Texas figures, and reconcile each period back to clean." },
    { phase: "Step 4", title: "Current &amp; CPA-ready", body: "A current, reconciled file handed to your CPA &mdash; or straight into monthly bookkeeping so it stays current." },
  ],
  advisoryBody: [
    "A Texas bookkeeping backlog is a quiet liability: the franchise-tax deadline still lands in May, sales-tax periods keep closing, and the BPP rendition still comes due &mdash; all while the records to support them don&rsquo;t exist yet. Catch-up reconstructs the work so your CPA can file accurately for the missing years.",
    "Once you&rsquo;re current, the same named ProAdvisor keeps it that way in <a href=\"/find-an-accountant/texas/monthly-bookkeeping/\">monthly bookkeeping</a> &mdash; so you never need a second catch-up.",
  ],
  faq: [
    { q: "What does Texas catch-up bookkeeping include?", a: "A Certified ProAdvisor categorizes months or years of untouched transactions to a Texas-correct chart of accounts, reconstructs the 8.25% sales-tax liability by location and the revenue/COGS/compensation behind the franchise (margin) tax, rebuilds the fixed-asset schedule for the BPP rendition, and reconciles every account &mdash; until the file is current and CPA-ready. We catch them up; your CPA files." },
    { q: "How is catch-up bookkeeping different from a QuickBooks cleanup?", a: "A QuickBooks cleanup fixes how the file is configured &mdash; sales-tax setup, duplicate entries, the chart of accounts. Catch-up bookkeeping reconstructs the missing work itself: the months or years of transactions that were never recorded. They&rsquo;re complementary, and many behind Texas files need both &mdash; we scope whichever (or both) the file needs." },
    { q: "How many years behind can you catch up?", a: "Any distance &mdash; from a few months to several years. The further behind, the larger the scope and timeline, but we&rsquo;ve reconstructed multi-year Texas files back to current and CPA-ready. We confirm the exact periods and timeline during a free file review." },
    { q: "Will catching up create a tax bill?", a: "Catch-up itself doesn&rsquo;t create tax &mdash; it produces the accurate records your CPA needs to determine what was actually owed for the missing periods. If prior-period sales tax or franchise tax was under-reported, your CPA addresses the filing; we make sure the books behind it are right. We don&rsquo;t file or amend returns ourselves." },
    { q: "How much does Texas catch-up bookkeeping cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $2,000&ndash;$20,000+ depending on how many months or years are behind and the transaction volume. You get the exact fee in writing within 3 business days of a free file review." },
    { q: "Do you file my back taxes after catching up?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we reconstruct the books to CPA-ready and coordinate with your CPA, who files or amends the franchise (margin) tax, sales tax, and federal returns. We are not affiliated with Intuit Inc." },
  ],
  reviewProse: TX_REVIEW_PROSE,
  reviewCreds: TX_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/cleanup-bookkeeping/",
    name: "Texas Cleanup & Catch-Up Bookkeeping",
    description: "Catch-up bookkeeping for Texas businesses behind by months or years — reconstruct the backlog, rebuild the 8.25% sales-tax and margin-tax figures and the fixed-asset schedule, reconcile to CPA-ready. Independent firm; does not file Texas taxes.",
    serviceName: "Texas Cleanup & Catch-Up Bookkeeping",
    serviceType: "Catch-up and cleanup bookkeeping",
    serviceDesc: "Reconstruction of a bookkeeping backlog for Texas businesses behind by months or years — categorizing untouched transactions, rebuilding the 8.25% sales-tax liability by location and the figures behind the franchise (margin) tax, reconstructing the fixed-asset schedule for the business personal property rendition, and reconciling all accounts to current and CPA-ready. Independent Certified QuickBooks ProAdvisor firm; does not file Texas tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Texas", sameAs: "https://en.wikipedia.org/wiki/Texas" }],
    audienceType: "Texas businesses behind on bookkeeping across all 254 counties",
    offerPrice: "2000",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

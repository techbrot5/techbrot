/* /find-an-accountant/california/cleanup-bookkeeping/ — CA SERVICE CHILD (bookkeeping spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 bookkeeping spoke — the books CATCH-UP
 * & cleanup (months/years behind -> CPA-ready), distinct from quickbooks-cleanup (file/technical).
 * GENUINELY CA. HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. Catch-up accrues every missed year so your CPA can file; we don&rsquo;t file." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and district add-ons push the combined rate past 10.25%. Catch-up rebuilds CDTFA sales tax to the correct rate by location for every back period." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. Catch-up separates W-2 from 1099 across the back periods so the exposure is visible; EDD disputes go to your CPA or counsel." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot brings the books current and CPA-ready and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/cleanup-bookkeeping/",
  slug: "ca-svc-cleanupbk",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California Bookkeeping Cleanup & Catch-Up · TechBrot",
  description: "Bookkeeping cleanup & catch-up for California businesses — months or years behind brought current and CPA-ready, with CDTFA district sales tax and the $800 franchise tax fixed. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Bookkeeping Cleanup &amp; Catch-Up" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; Cleanup &amp; Catch-Up",
    heading: "California bookkeeping cleanup &amp; catch-up &mdash; from behind to CPA-ready.",
    subheading: "Months or years behind? A Certified QuickBooks ProAdvisor brings your California books current &mdash; reconciled, categorized, district sales tax and the $800 franchise tax fixed across every back period, contractor classification cleaned &mdash; to a CPA-ready standard. Fixed-fee, all 58 counties. We get you current; your CPA files.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=MOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>bookkeeping cleanup and catch-up for California businesses</strong> &mdash; books that are months or years behind brought current and CPA-ready by a named Certified ProAdvisor: every period reconciled, district sales tax and the $800 franchise tax fixed, contractor classification cleaned, in your own QuickBooks file. The full California cleanup &amp; catch-up summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Behind on the books? Start with a free file review.",
    lede: "A Certified ProAdvisor reviews where the books stand, tells you honestly how far behind you are and what getting current takes, and sends a written fixed-fee scope within 3 business days. No pitch, no judgment. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-money&funnel_stage=BOFU", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California bookkeeping cleanup &amp; catch-up, in five questions.",
    valueEyebrow: "What a California catch-up covers",
    valueHeading: "Every back period, brought current.",
    valueLede: "Cleanup and catch-up aren&rsquo;t just data entry &mdash; in California, every back period has to be reconciled, sales-tax-corrected, and CPA-ready.",
    factsEyebrow: "California tax realities a catch-up fixes",
    factsHeading: "Three California facts a catch-up gets right &mdash; for every year.",
    factsLede: "When books fall behind in California, these three drift the most &mdash; and the catch-up corrects each across the back periods.",
    faqHeading: "California cleanup &amp; catch-up questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>bookkeeping cleanup and catch-up for California businesses</strong> &mdash; books that are months or years behind brought current and CPA-ready by a named Certified QuickBooks ProAdvisor. We reconcile every back period, rebuild CDTFA <a href=\"/find-an-accountant/california/sales-tax-help/\">district sales tax</a> to the correct rate by location, accrue the <strong>$800 franchise tax</strong> for each missed year, clean up <a href=\"/find-an-accountant/california/ab5-worker-classification/\">AB5</a> contractor classification, and fix the common messes (Undeposited Funds, Opening Balance Equity, ASC 606 revenue). Then, if you want, we keep it clean with <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope ($1,500&ndash;$15,000+ cleanup; $2,000&ndash;$20,000+ multi-year catch-up). Independent firm &mdash; not affiliated with Intuit Inc.; we get you current, your CPA files.",
  aiSummary: [
    { q: "What is California bookkeeping cleanup and catch-up?", a: "<strong>Bringing books that are months or years behind current and CPA-ready</strong> &mdash; every period reconciled and categorized, CDTFA district sales tax and the $800 franchise tax fixed across back periods, contractor classification cleaned &mdash; by a named Certified ProAdvisor. We get you current; your CPA files." },
    { q: "Cleanup or catch-up &mdash; what&rsquo;s the difference?", a: "<strong>Cleanup</strong> fixes a period that&rsquo;s structurally wrong; <strong>catch-up</strong> builds and reconciles periods that were never done. Most behind-California-businesses need both &mdash; we scope it as one engagement to a CPA-ready standard." },
    { q: "How far behind can you take on?", a: "Months or several years &mdash; we&rsquo;ve rebuilt multi-year California files from bank statements and source documents. The further behind, the more we scope it in writing first so the cost and timeline are clear before any work begins." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope: cleanup <strong>$1,500&ndash;$15,000+</strong>; multi-year catch-up <strong>$2,000&ndash;$20,000+</strong>, by how far behind and how messy. Exact fee in writing within 3 business days of a free file review." },
    { q: "What happens after you catch me up?", a: "You get a CPA-ready file and a summary of what was fixed. Many California businesses then move into <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> so it never falls behind again." },
  ],
  value: [
    { num: "01", title: "Every period reconciled", body: "Bank, card, and loan accounts reconciled for every back month so the books match reality.", href: "/find-an-accountant/california/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "02", title: "District sales tax rebuilt", body: "CDTFA district rates corrected by location for every back period so the sales-tax history ties.", href: "/find-an-accountant/california/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "03", title: "$800 franchise tax caught up", body: "The FTB minimum tax and LLC fee accrued for each missed year so your CPA can file the back returns.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "04", title: "AB5 classification cleaned", body: "W-2 and 1099 pay separated across the back periods so the contractor position is defensible.", href: "/find-an-accountant/california/ab5-worker-classification/", cta: "AB5 classification &rarr;" },
    { num: "05", title: "The classic messes fixed", body: "Undeposited Funds, Opening Balance Equity, duplicates, and ASC 606 revenue errors cleared and documented.", href: "/find-an-accountant/california/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "06", title: "CPA-ready, then monthly", body: "A CPA-ready file your CPA can file from &mdash; and an optional monthly cadence so it stays clean.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Reconcile and categorize every back period",
    "Rebuild CDTFA district sales tax by location for each period",
    "Accrue the $800 franchise tax for every missed year",
    "Clean up AB5 contractor classification across back periods",
    "Clear Undeposited Funds, OBE, duplicates, and ASC 606 errors",
    "Deliver a CPA-ready file and a summary of what changed",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews how far behind the books are and what getting current takes &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written catch-up scope and fixed fee within 3 business days &mdash; no open-ended hourly billing." },
    { phase: "Step 3", title: "Catch up to CPA-ready", body: "Every period reconciled, sales tax rebuilt, franchise tax accrued, classification cleaned." },
    { phase: "Step 4", title: "Stay current", body: "Optionally move into monthly bookkeeping so the file never falls behind again." },
  ],
  advisoryBody: [
    "Falling behind in California is expensive in a specific way: every missed year still owes the $800 franchise tax, and every back period has district sales tax that has to be reconstructed. Catching up correctly is what lets your CPA file and you move on.",
    "Once you&rsquo;re current, <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> keeps it that way, and <a href=\"/accounting/advisory/fractional-cfo/\">advisory</a> turns a clean history into decisions &mdash; in coordination with your CPA.",
  ],
  faq: [
    { q: "What does California bookkeeping cleanup and catch-up include?", a: "Reconciling and categorizing every back period, rebuilding CDTFA district sales tax by location for each period, accruing the $800 franchise tax for every missed year, cleaning up AB5 contractor classification, and clearing the classic messes (Undeposited Funds, Opening Balance Equity, duplicates, ASC 606 revenue) &mdash; to a CPA-ready standard, in your own QuickBooks file. We get you current; your CPA files." },
    { q: "What&rsquo;s the difference between cleanup and catch-up?", a: "Cleanup fixes periods that exist but are structurally wrong; catch-up builds and reconciles periods that were never done. Most California businesses that have fallen behind need both, and we scope them as a single engagement to a CPA-ready standard so there&rsquo;s one clear cost and timeline." },
    { q: "How far behind can you take on?", a: "From a few months to several years &mdash; we routinely rebuild multi-year California files from bank and card statements and source documents. The further behind you are, the more carefully we scope it in writing first, so the cost and timeline are clear before any work begins and there are no surprises." },
    { q: "Do I still owe the $800 franchise tax for years I didn&rsquo;t file?", a: "Generally the $800 California franchise tax is owed for each year an LLC or corporation was registered or doing business, even if no return was filed and even at a loss. We accrue it for every missed year so your CPA can file the back returns accurately; the filing and any penalty or revivor matter are handled by your CPA or EA." },
    { q: "How much does a California catch-up cost?", a: "Fixed-fee against a written scope, never open-ended hourly &mdash; typically $1,500&ndash;$15,000+ for cleanup and $2,000&ndash;$20,000+ for multi-year catch-up, depending on how far behind and how messy the books are. The free file review tells you honestly what it takes before any work begins." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data, in QuickBooks Online or hosted Desktop. If there&rsquo;s no usable file yet, we build one from your source documents to a CPA-ready standard." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we bring the books current and CPA-ready and coordinate with your CPA or EA, who files the back returns and handles any agency matter. We are not affiliated with Intuit Inc." },
    { q: "What happens after you catch me up?", a: "You get a CPA-ready file and a written summary of what was fixed. Many California businesses then move into monthly bookkeeping with the same named ProAdvisor so the file stays clean and never falls behind again." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/cleanup-bookkeeping/",
    name: "California Bookkeeping Cleanup & Catch-Up",
    description: "Bookkeeping cleanup and catch-up for California businesses — months or years behind brought current and CPA-ready, with CDTFA district sales tax, the $800 franchise tax, and AB5 classification fixed across back periods. Independent firm; does not file California taxes.",
    serviceName: "California Bookkeeping Cleanup & Catch-Up Services",
    serviceType: "Cleanup and catch-up bookkeeping services",
    serviceDesc: "Cleanup and catch-up bookkeeping for California businesses — reconciling and categorizing every back period, rebuilding CDTFA district sales tax by location, accruing the $800 franchise tax for each missed year, cleaning AB5 classification, and clearing classic messes, to a CPA-ready standard. Independent Certified QuickBooks ProAdvisor firm; does not file California returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses months or years behind on bookkeeping",
    offerPrice: "1500",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

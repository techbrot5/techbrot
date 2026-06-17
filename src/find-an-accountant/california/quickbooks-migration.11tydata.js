/* /find-an-accountant/california/quickbooks-migration/ — CA SERVICE CHILD (QB spoke).
 * t-bofu. Shared body: partials/state-service-body.njk. GENUINELY CA-localized migration.
 * HONESTY: deferred to FTB/CDTFA/EDD + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "$800", title: "California&rsquo;s $800 FTB franchise tax", body: "Every LLC and corporation owes the Franchise Tax Board $800 a year &mdash; even at a loss &mdash; plus an income-based LLC fee. The migrated file carries the accrual so it&rsquo;s never lost; your CPA files." },
  { fig: "10.25%+", title: "District sales tax by location", body: "California&rsquo;s 7.25% base is the highest in the U.S., and district add-ons push the combined rate past 10.25%. Migration rebuilds sales-tax items to the correct combined rate by location &mdash; not a flat rate carried over." },
  { fig: "AB5", title: "AB5 worker classification", body: "The ABC test reclassifies many core-work contractors as employees. Migration carries W-2 and 1099 separation across cleanly so the exposure stays visible; EDD disputes go to your CPA." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California tax figures &mdash; the $800 FTB minimum franchise tax, CDTFA district sales tax, and AB5 worker classification &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.ftb.ca.gov/\" rel=\"noopener nofollow\">California Franchise Tax Board</a>, the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">CDTFA</a>, and the <a href=\"https://edd.ca.gov/\" rel=\"noopener nofollow\">EDD</a>. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file California returns or represent clients before tax authorities.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CA FTB, CDTFA &amp; EDD &middot; No tax-filing or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/california/quickbooks-migration/",
  slug: "ca-svc-qbmigration",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California QuickBooks Migration · TechBrot",
  description: "QuickBooks migration for California businesses — Desktop to Online or another platform to QuickBooks, with district sales tax, AB5 tracking & balances carried over cleanly. Fixed-fee, all 58 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "QuickBooks Migration" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; QuickBooks Migration",
    heading: "California QuickBooks migration &mdash; clean on the other side.",
    subheading: "A Certified QuickBooks ProAdvisor moves your California business to QuickBooks Online (or onto QuickBooks from another platform) with balances reconciled, district sales tax rebuilt by location, and AB5 tracking carried across &mdash; not a flat-rate file dragged along. Fixed-fee, all 58 counties. We migrate; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks migration for California businesses</strong> &mdash; Desktop to Online, or another platform onto QuickBooks, by a Certified ProAdvisor: balances reconciled, district sales tax rebuilt by location, AB5 tracking and the $800 accrual carried across, and the California specifics preserved. The full California QuickBooks migration summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California tax references ($800 FTB franchise tax; CDTFA district sales tax; AB5) reflect rules current as of the review date; TechBrot does not file California taxes.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Migrating QuickBooks in California? Before the rush.",
    lede: "Book a free discovery call. We&rsquo;ll assess the source file and send a written fixed-fee migration quote within 3 business days. No pitch. Independent firm &mdash; does not file CA taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California QuickBooks migration, in five questions.",
    valueEyebrow: "What a California migration preserves",
    valueHeading: "Move platforms without losing California.",
    valueLede: "A migration is the moment to fix the California specifics &mdash; not drag a flat-rate, misclassified file onto a new platform.",
    factsEyebrow: "California tax realities we carry across cleanly",
    factsHeading: "Three California facts a migration must preserve.",
    factsLede: "The risk in any migration is dropping these &mdash; so we rebuild them correctly on the new file, not copy old mistakes.",
    faqHeading: "California QuickBooks migration questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks migration for California businesses</strong> &mdash; <a href=\"/quickbooks/migration/\">Desktop to Online</a>, or from another platform onto QuickBooks, by a Certified QuickBooks ProAdvisor. Balances reconciled and tied to the source, <strong>district sales tax rebuilt to the correct combined rate by location</strong>, AB5 contractor tracking carried across, the <strong>$800 franchise-tax</strong> accrual preserved, and integrations reconnected. A migration is the right moment to <em>fix</em> the California specifics &mdash; not drag a flat-rate, misclassified file onto a new platform. Fixed-fee against a written scope (typically $2,500&ndash;$10,000+ by complexity). Independent firm &mdash; not affiliated with Intuit Inc.; we migrate, your CPA files.",
  aiSummary: [
    { q: "What does a California QuickBooks migration involve?", a: "<strong>Moving your books to QuickBooks Online (or onto QuickBooks from another platform) with balances reconciled to the source, district sales tax rebuilt by location, AB5 tracking carried across, and integrations reconnected</strong> &mdash; by a Certified ProAdvisor, in your own file." },
    { q: "Desktop to Online &mdash; what transfers and what doesn&rsquo;t?", a: "Lists, balances, and most transactions transfer; some Desktop features (certain reports, memorized transactions, specific payroll items) don&rsquo;t map 1:1. We tell you honestly up front what carries and what gets rebuilt &mdash; including the California sales-tax setup." },
    { q: "Will my California sales-tax setup survive?", a: "We <strong>rebuild</strong> it &mdash; a migration is the time to set CDTFA district rates by location correctly, not carry over a flat statewide rate. Same for AB5 contractor separation and the $800 accrual." },
    { q: "What does migration cost?", a: "Fixed-fee against a written scope, typically <strong>$2,500&ndash;$10,000+</strong> depending on entities, history, integrations, and how clean the source file is. Exact fee in writing within 3 business days." },
    { q: "Should I migrate at all?", a: "Not always. If staying on Desktop genuinely fits, we&rsquo;ll say so &mdash; we&rsquo;re independent and earn nothing on the subscription. The discovery call gives you an honest read either way." },
  ],
  value: [
    { num: "01", title: "Balances reconciled to source", body: "Opening balances and history tied back to the Desktop or prior-platform file so nothing is lost in the move.", href: "/quickbooks/migration/", cta: "Migration overview &rarr;" },
    { num: "02", title: "District sales tax rebuilt", body: "CDTFA sales-tax items set to the correct combined rate by location on the new file &mdash; not a flat rate carried over.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "03", title: "AB5 tracking carried across", body: "W-2 and 1099 separation preserved so the contractor-classification position survives the migration.", href: "/find-an-accountant/california/", cta: "California overview &rarr;" },
    { num: "04", title: "Integrations reconnected", body: "Bank feeds, payroll, payments, and apps reconnected and tested on the new file so nothing breaks at go-live.", href: "/find-an-accountant/california/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { num: "05", title: "A clean-up, not a copy", body: "If the source file is a mess, we fix the California problems during the move rather than carrying them forward.", href: "/find-an-accountant/california/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "06", title: "Go-live &amp; ongoing", body: "A reconciled go-live, then optional monthly bookkeeping with the same named ProAdvisor.", href: "/find-an-accountant/california/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Assess the source file and tell you what transfers vs rebuilds",
    "Reconcile migrated balances back to the source",
    "Rebuild CDTFA district sales tax by location on the new file",
    "Carry AB5 contractor separation and the $800 accrual across",
    "Reconnect and test bank feeds, payroll, and integrations",
    "Deliver a reconciled go-live and optional ongoing bookkeeping",
  ],
  scopeDont: [
    "File California or federal income, franchise, or sales-tax returns",
    "Represent you before the FTB, CDTFA, or EDD",
    "Resolve worker-classification disputes or audits",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Source assessment", body: "A Certified ProAdvisor reviews the Desktop or prior-platform file and what needs to carry across." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written migration scope and fixed fee within 3 business days &mdash; including what transfers and what rebuilds." },
    { phase: "Step 3", title: "Migrate &amp; reconcile", body: "We move the data, rebuild the California setup, reconcile to the source, and reconnect integrations." },
    { phase: "Step 4", title: "Go-live &amp; verify", body: "A reconciled go-live with reports verified &mdash; then optional monthly bookkeeping." },
  ],
  advisoryBody: [
    "A migration is the cheapest moment to fix California &mdash; rebuilding district sales tax and contractor classification on the new file costs far less than carrying old mistakes forward and cleaning them up later.",
    "After a clean migration, the same named ProAdvisor can keep the new file right in <a href=\"/find-an-accountant/california/monthly-bookkeeping/\">monthly bookkeeping</a> and extend into advisory when you&rsquo;re ready.",
  ],
  faq: [
    { q: "What does a California QuickBooks migration involve?", a: "Moving your books to QuickBooks Online from Desktop, or onto QuickBooks from another platform, with balances reconciled to the source file, CDTFA district sales tax rebuilt by location, AB5 contractor tracking carried across, the $800 franchise-tax accrual preserved, and integrations reconnected and tested &mdash; by a Certified ProAdvisor, in your own file. We migrate; your CPA files." },
    { q: "Migrating Desktop to Online &mdash; what transfers and what doesn&rsquo;t?", a: "Lists, balances, and most transactions transfer; some Desktop-specific features &mdash; certain reports, memorized transactions, and some payroll items &mdash; don&rsquo;t map one-to-one to QuickBooks Online. We assess the source file first and tell you honestly what carries and what we rebuild, including the California sales-tax setup, so there are no surprises at go-live." },
    { q: "Will my California sales-tax configuration survive the move?", a: "We rebuild it rather than copy it. A migration is the right moment to set CDTFA district sales tax to the correct combined rate by customer location instead of carrying over a flat statewide rate. We do the same for AB5 contractor separation and the $800 franchise-tax accrual, so the new file is correct, not just a copy." },
    { q: "How much does a California QuickBooks migration cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $2,500&ndash;$10,000+ depending on the number of entities, how much history you bring, integrations, and how clean the source file is. You get the exact fee in writing within 3 business days of a source assessment." },
    { q: "Should I migrate from Desktop at all?", a: "Not always. If staying on QuickBooks Desktop genuinely fits your business &mdash; certain inventory, job-costing, or industry workflows &mdash; we&rsquo;ll say so. We&rsquo;re an independent firm and earn nothing on your QuickBooks subscription, so the discovery call gives you an honest stay-or-move read either way." },
    { q: "Can you migrate from another platform onto QuickBooks?", a: "Yes &mdash; from Xero, FreshBooks, Wave, spreadsheets, or another system. We assess the source, recommend how much history to bring, rebuild the California setup, and reconcile the result so you arrive on QuickBooks with books that tie." },
    { q: "What if the source file is a mess?", a: "We fix the California problems during the migration rather than carrying them forward &mdash; flat-rate sales tax, misclassification, unreconciled accounts. For deep issues we&rsquo;ll scope it alongside a cleanup so the new file starts clean." },
    { q: "Do you file my California taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we migrate and keep the books CPA-ready and coordinate with your CPA or EA, who files the FTB, CDTFA, and income returns. We are not affiliated with Intuit Inc." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/quickbooks-migration/",
    name: "California QuickBooks Migration",
    description: "QuickBooks migration for California businesses — Desktop to Online or another platform onto QuickBooks, with balances reconciled, district sales tax rebuilt by location, and AB5 tracking carried across, all 58 counties. Independent firm; does not file California taxes.",
    serviceName: "California QuickBooks Migration Services",
    serviceType: "QuickBooks migration and conversion services",
    serviceDesc: "QuickBooks Desktop-to-Online and other-platform-to-QuickBooks migration for California businesses — balances reconciled to source, CDTFA district sales tax rebuilt by location, AB5 tracking and the $800 accrual carried across, and integrations reconnected. Independent Certified QuickBooks ProAdvisor firm; does not file California tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses migrating QuickBooks Desktop to Online or moving onto QuickBooks from another platform",
    offerPrice: "2500",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

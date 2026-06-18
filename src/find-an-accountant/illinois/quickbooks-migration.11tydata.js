/* /find-an-accountant/illinois/quickbooks-migration/ — IL SERVICE CHILD (QB spoke).
 * t-bofu · partials/state-service-body.njk. IL-localized. The MIGRATION angle: a move from Desktop
 * or another system to QBO is the moment to carry the IL-correct setup forward cleanly rather than
 * re-importing the old errors — an IL chart of accounts, by-jurisdiction sales-tax items (10.25% in
 * Chicago), PPRT-ready net-income tracking, and the Chicago lease/"cloud" tax tracked separately.
 * HONESTY: IDOR + Chicago Dept of Finance + CPA/EA; founder-name-zero; not Intuit; does not file IL
 * returns or elect the PTE. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "PPRT", title: "Net-income tracking carried over PPRT-ready", body: "A migration is the moment to set Illinois net income up so the <strong>Personal Property Replacement Tax</strong> is supportable &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong>, owed at the entity level even by pass-throughs. We carry the chart of accounts over so PPRT-relevant net income tracks cleanly in the new file, instead of re-importing accounts that never separated it. Your CPA computes and files." },
  { fig: "10.25%", title: "Sales tax re-mapped by jurisdiction, not flat", body: "A migration is the chance to set Illinois sales tax up <strong>right</strong> &mdash; <strong>6.25% state</strong> plus county and home-rule add-ons, <strong>up to 10.25% in Chicago</strong> (Cook County + city), applied by destination jurisdiction &mdash; not carried over as one flat statewide rate from the old system. We re-map the tax items so QuickBooks carries the correct combined rate going forward and the ST-1 ties." },
  { fig: "Cloud tax", title: "Chicago&rsquo;s 15% lease/cloud tax carried forward separately", body: "Illinois doesn&rsquo;t tax SaaS &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. Providers with Chicago customers must collect it, so we carry that liability forward as a separate item during the move &mdash; tracked apart from sales tax, not folded into it. It&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot migrates and maintains QuickBooks files and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-migration/",
  slug: "il-svc-qbmigration",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Migration · TechBrot",
  description: "QuickBooks migration for Illinois businesses by a Certified ProAdvisor — Desktop to Online or another platform, opening balances and history intact, sales tax re-mapped by jurisdiction (10.25% in Chicago), the PPRT tracked, and Chicago's cloud tax carried over. Fixed-fee, all 102 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Migration" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; QuickBooks Migration",
    heading: "Illinois QuickBooks migration without losing your history.",
    subheading: "A Certified QuickBooks ProAdvisor moves your Illinois file &mdash; Desktop to Online, or from another platform &mdash; with opening balances and history intact, sales tax re-mapped by jurisdiction (up to 10.25% in Chicago), the chart of accounts carried over PPRT-ready, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax tracked separately. Fixed-fee, all 102 counties. We migrate; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks migration for Illinois businesses</strong> &mdash; a Certified ProAdvisor moves your file from Desktop to Online or from another platform with opening balances and history intact, re-maps sales tax by jurisdiction (up to 10.25% in Chicago), carries the chart of accounts over PPRT-ready, and tracks Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax separately. Fixed-fee, all 102 counties. The full Illinois migration summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references (the PPRT; 6.25%&ndash;10.25% sales tax; Chicago&rsquo;s 15% cloud tax) reflect Illinois Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Moving to QuickBooks in Illinois? Let&rsquo;s migrate it cleanly.",
    lede: "Book a free discovery call. We&rsquo;ll scope the migration and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks migration, in five questions.",
    valueEyebrow: "What an Illinois migration covers",
    valueHeading: "A clean move, with Illinois configured right.",
    valueLede: "A migration is the best moment to fix the Illinois specifics &mdash; so we re-map them as part of the move.",
    factsEyebrow: "What a migration gets right for Illinois",
    factsHeading: "Three Illinois things a migration should fix, not carry over.",
    factsLede: "Migrating is the chance to set Illinois up correctly &mdash; rather than importing the old system&rsquo;s mistakes.",
    faqHeading: "Illinois QuickBooks migration questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks migration for Illinois businesses</strong> &mdash; a Certified QuickBooks ProAdvisor moves your file from <a href=\"/quickbooks/online/\">Desktop to Online</a> or from another platform with <strong>opening balances and history intact</strong>. A migration is the moment to set Illinois up right: sales tax <strong>re-mapped by jurisdiction (up to 10.25% in Chicago)</strong> rather than carried over as one flat rate, the chart of accounts carried over so <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> net income tracks cleanly, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax carried forward as a separate item. Fixed-fee against a written scope (setup $750&ndash;$5,000+; cleanup-on-migration $1,500&ndash;$15,000+ by data complexity). Independent firm &mdash; not affiliated with Intuit Inc.; we migrate, your CPA files.",
  aiSummary: [
    { q: "What does Illinois QuickBooks migration include?", a: "<strong>Moving your file from Desktop to Online or from another platform with opening balances and history intact, sales tax re-mapped by jurisdiction (up to 10.25% in Chicago), the chart of accounts carried over PPRT-ready, and Chicago&rsquo;s lease/cloud tax tracked separately</strong>. We migrate; your CPA files." },
    { q: "Why migrate with a ProAdvisor instead of the built-in tool?", a: "Because the built-in import carries over the old system&rsquo;s mistakes &mdash; including a flat statewide sales-tax rate and a chart of accounts that never separated Illinois net income. A ProAdvisor migration is the chance to <strong>re-map sales tax by jurisdiction</strong>, carry the accounts over PPRT-ready, and verify opening balances, so you land on a clean Illinois file rather than a copy of the old mess." },
    { q: "Will I lose my history?", a: "No &mdash; we migrate opening balances and history so reporting and the Illinois tax figures stay continuous across the cutover. We verify the migrated data ties to the source before go-live." },
    { q: "What does migration cost?", a: "Fixed-fee against a written scope, typically <strong>$750&ndash;$5,000+</strong> for setup, or <strong>$1,500&ndash;$15,000+</strong> when the file also needs cleanup, depending on data volume, the source system, and how much re-mapping is needed. Exact fee in writing within 3 business days." },
    { q: "What happens after the migration?", a: "Most Illinois businesses keep the same named ProAdvisor for <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> so the freshly migrated file stays clean. Migration-only is fine too." },
  ],
  value: [
    { num: "01", title: "Desktop to Online", body: "A clean move from QuickBooks Desktop to Online with lists, balances, and history intact &mdash; or the reverse if Desktop fits better.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "02", title: "From another platform", body: "Coming from Xero, Wave, spreadsheets, or another system &mdash; we map the data into an Illinois-correct QuickBooks file.", href: "/find-an-accountant/illinois/quickbooks-setup/", cta: "QuickBooks setup &rarr;" },
    { num: "03", title: "Sales tax re-mapped by jurisdiction", body: "Sales tax set up correctly to the combined rate by jurisdiction (up to 10.25% in Chicago) during the move &mdash; not carried over as a flat statewide rate.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Chart of accounts carried PPRT-ready", body: "The chart of accounts moved so Illinois net income tracks cleanly for the Personal Property Replacement Tax going forward.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "05", title: "Chicago cloud tax carried over", body: "Chicago&rsquo;s 15% lease/SaaS tax carried forward as a separate item so it isn&rsquo;t folded into sales tax after the migration.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "06", title: "Verified before go-live", body: "Migrated balances reconciled to the source and the file verified clean before you rely on it.", href: "/find-an-accountant/illinois/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Migrate from Desktop to Online, or from another platform, with history intact",
    "Re-map combined sales tax by jurisdiction (up to 10.25% in Chicago) during the move",
    "Carry the chart of accounts over so Illinois net income tracks PPRT-ready",
    "Carry Chicago&rsquo;s lease/cloud tax forward as a separate item where it applies",
    "Reconcile migrated balances to the source before go-live",
    "Configure reporting and integrations on the new file",
  ],
  scopeDont: [
    "File the Illinois income tax, the PPRT, or sales tax (ST-1)",
    "Elect the PTE or file Chicago city taxes (lease/cloud)",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free scoping call", body: "A Certified ProAdvisor reviews your source system and data &mdash; sales-tax jurisdictions, entity type and PPRT, any Chicago cloud-tax exposure &mdash; to scope the migration." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days, with the Illinois re-mapping listed." },
    { phase: "Step 3", title: "Migrate &amp; re-map", body: "We move balances and history, re-map sales tax by jurisdiction, carry the chart of accounts over PPRT-ready, and carry Chicago&rsquo;s cloud tax forward separately." },
    { phase: "Step 4", title: "Verify &amp; go-live", body: "Migrated data reconciled to the source and the file verified before go-live &mdash; or straight into monthly bookkeeping." },
  ],
  advisoryBody: [
    "A migration is the cheapest opportunity you&rsquo;ll get to fix Illinois configuration &mdash; the built-in import tools faithfully carry over a flat statewide sales-tax rate and a chart of accounts that never separated Illinois net income, so &ldquo;just importing&rdquo; often means importing the old mess. Doing it with a ProAdvisor means you land on a clean Illinois file instead &mdash; sales tax re-mapped by jurisdiction, PPRT-ready accounts, and Chicago&rsquo;s cloud tax tracked separately.",
    "Once migrated, the same named ProAdvisor can keep the file clean in <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> &mdash; so the fresh start lasts.",
  ],
  faq: [
    { q: "What does Illinois QuickBooks migration include?", a: "A Certified ProAdvisor moves your file from Desktop to Online or from another platform with opening balances and history intact, re-maps sales tax by jurisdiction (up to 10.25% in Chicago), carries the chart of accounts over so Illinois net income tracks PPRT-ready, and carries Chicago&rsquo;s lease/cloud tax forward as a separate item &mdash; then verifies the data before go-live. We migrate; your CPA files." },
    { q: "Why not just use the built-in migration tool?", a: "Because the built-in import carries over the old system&rsquo;s mistakes faithfully &mdash; including a flat statewide sales-tax rate that ignores Chicago&rsquo;s 10.25% jurisdiction and a chart of accounts that never separated Illinois net income for the PPRT. A ProAdvisor migration is the chance to re-map sales tax by jurisdiction, carry the accounts over PPRT-ready, and verify opening balances, so you land on a clean Illinois file rather than a copy of the old mess." },
    { q: "Will I lose my transaction history, and is the PPRT tracking carried over?", a: "No history is lost. We migrate opening balances and history so reporting stays continuous across the cutover, and we carry the chart of accounts over so Illinois net income keeps tracking cleanly for the Personal Property Replacement Tax (2.5% C-corp, 1.5% pass-through) in the new file. We reconcile the migrated data to the source before go-live; the depth of history moved depends on the source system, confirmed during scoping. Your CPA computes and files the PPRT." },
    { q: "How does the migration handle Chicago&rsquo;s sales tax and 15% cloud tax?", a: "Sales tax is re-mapped during the move to the combined rate by destination jurisdiction &mdash; 6.25% state plus county and home-rule add-ons, up to 10.25% in Chicago &mdash; rather than carried over as one flat rate, so the ST-1 ties going forward. Chicago&rsquo;s Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), 15% as of January 2026, is carried forward as a separate item tracked apart from sales tax, because it&rsquo;s a City of Chicago tax administered by the Department of Finance, not a state tax." },
    { q: "Can you migrate from Xero or spreadsheets?", a: "Yes &mdash; whether you&rsquo;re coming from QuickBooks Desktop, Xero, Wave, spreadsheets, or another platform, we map the data into an Illinois-correct QuickBooks file with sales tax by jurisdiction, a PPRT-ready chart of accounts, and Chicago&rsquo;s cloud tax set up as a separate item where it applies." },
    { q: "How much does Illinois QuickBooks migration cost?", a: "Fixed-fee against a written scope, never hourly &mdash; setup typically runs $750&ndash;$5,000+, and a migration that also needs cleanup runs $1,500&ndash;$15,000+, depending on data volume, the source system, and how much re-mapping the Illinois setup needs. You get the exact fee in writing within 3 business days of a free scoping call." },
    { q: "Do you file my Illinois taxes after migrating?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we migrate and keep the books CPA-ready and coordinate with your CPA, who files the Illinois income tax, the PPRT, and sales tax (ST-1), decides and elects the PTE, and handles Chicago city taxes (lease/cloud). We do not file returns, elect the PTE, or represent clients, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-migration/",
    name: "Illinois QuickBooks Migration",
    description: "QuickBooks migration for Illinois businesses by a Certified ProAdvisor — Desktop to Online or another platform with history intact, sales tax re-mapped by jurisdiction (up to 10.25% in Chicago), the chart of accounts carried over PPRT-ready, and Chicago's 15% cloud tax tracked separately. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks Migration Services",
    serviceType: "QuickBooks data migration and conversion",
    serviceDesc: "Migration of QuickBooks files from Desktop to Online or from another platform for Illinois businesses — opening balances and history intact, combined sales tax re-mapped by jurisdiction (up to 10.25% in Chicago), the chart of accounts carried over so Illinois net income tracks for the Personal Property Replacement Tax, and Chicago's 15% lease/cloud tax carried forward as a separate item, with data verified before go-live. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns or elect the PTE — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses migrating to or between QuickBooks editions across all 102 counties",
    offerPrice: "750",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

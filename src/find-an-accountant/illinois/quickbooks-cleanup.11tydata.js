/* /find-an-accountant/illinois/quickbooks-cleanup/ — IL SERVICE CHILD (QB spoke).
 * t-bofu · partials/state-service-body.njk. IL-localized cleanup, re-angled from the umbrella money page.
 * Facts band = the same three real IL stack topics, written from the CLEANUP angle (the IL mess we find
 * and fix): single-statewide-rate sales tax instead of the correct combined rate by jurisdiction; IL net
 * income never tracked cleanly for the PPRT; Chicago's lease/"cloud" tax never separated from sales tax.
 * HONESTY: deferred to the Illinois Dept of Revenue (IDOR) + Chicago Dept of Finance + CPA/EA;
 * founder-name-zero; not Intuit; does not file IL returns, amend returns, make the PTE election, or
 * represent before the Department. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "10.25%", title: "The single-rate sales-tax mistake", body: "The most common Illinois QuickBooks mess: sales tax set to one statewide rate instead of the correct <strong>6.25% state + county and home-rule add-ons by location</strong> &mdash; up to <strong>10.25% in Chicago</strong> (Cook County + city). Illinois is destination-based, so a single rate over- or under-collects and the ST-1 won&rsquo;t tie. We correct it to the right combined rate by jurisdiction and reconcile prior periods back." },
  { fig: "PPRT", title: "Net income never tracked cleanly", body: "Illinois imposes an entity-level <strong>Personal Property Replacement Tax</strong> on net income &mdash; <strong>2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts</strong> &mdash; and even pass-throughs owe it. Messy files rarely track Illinois net income cleanly, so the PPRT isn&rsquo;t supportable at filing time. Cleanup rebuilds the books so it is; your CPA computes and files." },
  { fig: "Cloud tax", title: "Chicago&rsquo;s cloud tax never separated", body: "Illinois doesn&rsquo;t tax SaaS &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. Messy files lump it into sales tax or miss it entirely. We separate Chicago&rsquo;s lease/cloud tax from sales tax in QuickBooks so each ties on its own. It&rsquo;s a City of Chicago tax (Dept of Finance), not a state tax." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois tax figures &mdash; the flat 4.95% income tax, the Personal Property Replacement Tax (2.5% C-corp / 1.5% pass-through), the 9.5% combined C-corp rate, the permanent PTE election, the 6.25%&ndash;10.25% sales tax, and Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the PTE/cloud-tax rules change; confirm current figures with the Department and your CPA. TechBrot cleans up and maintains QuickBooks files and coordinates with your CPA, who files; we do not file Illinois returns or represent clients before the Department.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/quickbooks-cleanup/",
  slug: "il-svc-qbcleanup",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois QuickBooks Cleanup · TechBrot",
  description: "QuickBooks cleanup for Illinois businesses — fix single-rate sales tax to the right combined rate (10.25% Chicago), track PPRT, reconcile to CPA-ready.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "QuickBooks Cleanup" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; QuickBooks Cleanup",
    heading: "Illinois QuickBooks cleanup, back to CPA-ready.",
    subheading: "A Certified QuickBooks ProAdvisor brings a behind or broken Illinois file back to a CPA-ready standard &mdash; correcting single-rate sales tax to the right combined rate by jurisdiction (10.25% in Chicago), rebuilding the books so Illinois net income is tracked cleanly for the PPRT, separating Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax from sales tax, and reconciling every account. Fixed-fee, all 102 counties. We clean it up; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>QuickBooks cleanup for Illinois businesses</strong> &mdash; a Certified ProAdvisor corrects single-rate sales tax to the correct combined rate by jurisdiction (10.25% in Chicago), rebuilds the books so Illinois net income is tracked cleanly for the <strong>PPRT</strong>, separates Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax from sales tax, and reconciles every account back to a CPA-ready standard in your own QuickBooks file. Fixed-fee, all 102 counties. The full Illinois QuickBooks cleanup summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Illinois tax references reflect Department of Revenue and City of Chicago rules current as of the review date; TechBrot does not file Illinois taxes.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Illinois QuickBooks file a mess? We&rsquo;ll fix it.",
    lede: "Book a free discovery call. We&rsquo;ll review the file, tell you honestly how deep the cleanup goes, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-qb&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois QuickBooks cleanup, in five questions.",
    valueEyebrow: "What an Illinois cleanup fixes",
    valueHeading: "From messy to CPA-ready, the Illinois way.",
    valueLede: "We fix the Illinois-specific things a generic cleanup misses &mdash; then reconcile the whole file back to clean.",
    factsEyebrow: "The Illinois messes we see most",
    factsHeading: "Three Illinois problems a cleanup almost always finds.",
    factsLede: "Illinois files break in predictable ways &mdash; these three are the usual culprits, and all three are fixable.",
    faqHeading: "Illinois QuickBooks cleanup questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>QuickBooks cleanup for Illinois businesses</strong> &mdash; a Certified QuickBooks ProAdvisor brings a behind or broken file back to a CPA-ready standard. We fix the most common Illinois mess (<strong>single-rate sales tax</strong> instead of the correct 6.25% state + county and home-rule add-ons by location, up to 10.25% in Chicago), rebuild the books so Illinois net income is tracked cleanly for the <a href=\"/find-an-accountant/illinois/replacement-tax-help/\">Personal Property Replacement Tax</a> (PPRT &mdash; even pass-throughs owe it), separate <strong>Chicago&rsquo;s 15% lease/&ldquo;cloud&rdquo; tax</strong> from sales tax, and reconcile every account. Fixed-fee against a written scope (typically $1,500&ndash;$15,000+ by how far behind the file is). Independent firm &mdash; not affiliated with Intuit Inc.; we clean it up, your CPA files.",
  aiSummary: [
    { q: "What does Illinois QuickBooks cleanup fix?", a: "<strong>Single-rate sales tax corrected to the right combined rate by jurisdiction (10.25% in Chicago), Illinois net income rebuilt so it&rsquo;s tracked cleanly for the PPRT, Chicago&rsquo;s 15% lease/cloud tax separated from sales tax, and every account reconciled</strong> back to a CPA-ready standard. We clean it up; your CPA files." },
    { q: "Why is my Illinois QuickBooks file wrong?", a: "Usually one of three Illinois-specific problems: <strong>sales tax set to a single statewide rate</strong> instead of the correct combined rate by jurisdiction, <strong>Illinois net income never tracked cleanly</strong> for the PPRT, or <strong>Chicago&rsquo;s lease/cloud tax lumped into sales tax</strong> or missed entirely &mdash; on top of unreconciled accounts." },
    { q: "How long does a cleanup take?", a: "It depends on how far behind the file is &mdash; a few weeks for a single year, longer for multiple years. We scope it after a free file review so you know the timeline and fixed fee up front." },
    { q: "What does cleanup cost?", a: "Fixed-fee against a written scope, typically <strong>$1,500&ndash;$15,000+</strong> depending on how many months or years are behind and how broken the file is. Exact fee in writing within 3 business days." },
    { q: "What happens after cleanup?", a: "Most Illinois businesses move into <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> with the same named ProAdvisor so the file never falls behind again. Cleanup-only is fine too." },
  ],
  value: [
    { num: "01", title: "Sales tax corrected", body: "Single-rate sales tax replaced with the correct combined rate by jurisdiction (10.25% in Chicago), destination-based handling fixed, and prior periods reconciled back so the ST-1 ties.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "02", title: "PPRT-ready books rebuilt", body: "Illinois net income reconstructed and tracked cleanly so the Personal Property Replacement Tax is supportable at filing time &mdash; even for pass-throughs that owe it.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
    { num: "03", title: "Chicago cloud tax separated", body: "Chicago&rsquo;s 15% lease/SaaS tax pulled out of the sales-tax bucket and tracked separately for providers with Chicago customers, so each ties on its own.", href: "/find-an-accountant/illinois/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Every account reconciled", body: "Bank, credit-card, and loan accounts reconciled and miscategorized transactions corrected to a clean chart of accounts.", href: "/find-an-accountant/illinois/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "05", title: "Catch-up of months behind", body: "Whether you&rsquo;re a few months or a few years behind, we catch the file up to current and CPA-ready.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "06", title: "Stays clean after", body: "Move into monthly bookkeeping with the same ProAdvisor so the file never falls behind again.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Correct single-rate sales tax to the right combined rate by jurisdiction (10.25% in Chicago)",
    "Rebuild the books so Illinois net income is tracked cleanly for the PPRT",
    "Separate Chicago&rsquo;s lease/cloud tax from sales tax where it applies",
    "Reconcile bank, credit-card, and loan accounts and fix miscategorizations",
    "Catch the file up from months or years behind to current",
    "Hand a CPA-ready file to your CPA",
  ],
  scopeDont: [
    "File the Illinois income tax, the PPRT, sales tax (ST-1), or make the PTE election",
    "File Chicago city taxes (lease/cloud) or amend prior filings",
    "Represent you before the Illinois Department of Revenue or the City of Chicago",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews the file and finds how deep the cleanup goes &mdash; sales-tax jurisdictions, PPRT-relevant net income, Chicago cloud-tax exposure, reconciliation." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days, with the timeline and the Illinois-specific fixes listed." },
    { phase: "Step 3", title: "Clean &amp; reconcile", body: "We correct sales tax by jurisdiction, rebuild Illinois net income for the PPRT, separate Chicago&rsquo;s cloud tax, and reconcile every account." },
    { phase: "Step 4", title: "CPA-ready handoff", body: "A clean, current file handed to your CPA &mdash; or straight into monthly bookkeeping so it stays clean." },
  ],
  advisoryBody: [
    "An Illinois QuickBooks cleanup almost always finds the same three things &mdash; single-rate sales tax instead of the correct combined rate by jurisdiction, Illinois net income that was never tracked cleanly for the PPRT, and a Chicago lease/cloud tax that was lumped into sales tax or missed. None of them are filing problems; they&rsquo;re bookkeeping problems, and all three are exactly what a Certified ProAdvisor fixes so your CPA&rsquo;s filings are accurate.",
    "Once the file is clean, the same named ProAdvisor keeps it that way in <a href=\"/find-an-accountant/illinois/monthly-bookkeeping/\">monthly bookkeeping</a> &mdash; so you never need a second cleanup.",
  ],
  faq: [
    { q: "What does an Illinois QuickBooks cleanup fix?", a: "A Certified ProAdvisor corrects single-rate sales tax to the right combined rate by jurisdiction (10.25% in Chicago), rebuilds the books so Illinois net income is tracked cleanly for the Personal Property Replacement Tax, separates Chicago&rsquo;s 15% lease/cloud tax from sales tax, reconciles every account, and catches the file up to current &mdash; back to a CPA-ready standard. We clean it up; your CPA files." },
    { q: "Why is my Illinois QuickBooks file a mess?", a: "Usually one or more of three Illinois-specific problems: sales tax set to a single statewide rate instead of the correct combined rate by jurisdiction, Illinois net income that was never tracked cleanly for the PPRT, or Chicago&rsquo;s lease/cloud tax lumped into sales tax or missed entirely &mdash; plus the usual unreconciled accounts and miscategorized transactions. We fix all of it." },
    { q: "Will you fix my Illinois sales tax going back?", a: "Yes &mdash; correcting single-rate sales tax to the right combined rate by jurisdiction and reconciling prior periods back so the ST-1 ties is one of the most common parts of an Illinois cleanup. We get the books right so your CPA can address any prior-period filing implications; we don&rsquo;t file or amend returns ourselves." },
    { q: "Can a cleanup make my books PPRT-ready?", a: "Yes. The Personal Property Replacement Tax is an Illinois entity-level tax on net income &mdash; 2.5% for C-corps, 1.5% for S-corps, partnerships, and trusts &mdash; and even pass-throughs owe it. Messy files rarely track Illinois net income cleanly, so cleanup rebuilds the books so the PPRT is supportable at filing time. Your CPA computes and files it; we keep the books." },
    { q: "How do you handle Chicago&rsquo;s cloud tax in a cleanup?", a: "Illinois doesn&rsquo;t tax SaaS at the state level, but the City of Chicago does through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), which rose to 15% on January 1, 2026. Messy files lump it into sales tax or miss it. We separate Chicago&rsquo;s lease/cloud tax from sales tax in QuickBooks so each ties on its own &mdash; it&rsquo;s a City of Chicago tax administered by the Department of Finance, not a state tax. Your CPA handles any filing." },
    { q: "How much does Illinois QuickBooks cleanup cost?", a: "Fixed-fee against a written scope, never hourly &mdash; typically $1,500&ndash;$15,000+ depending on how many months or years are behind and how broken the file is. You get the exact fee in writing within 3 business days of a free file review." },
    { q: "What happens after the cleanup is done?", a: "Most Illinois businesses move into monthly bookkeeping with the same named ProAdvisor so the file stays current and never needs a second cleanup. A cleanup-only engagement is fine too &mdash; we hand a clean, CPA-ready file to your CPA either way." },
    { q: "Do you file my Illinois or Chicago taxes after cleanup?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we clean up and keep the books CPA-ready and coordinate with your CPA or EA, who files the Illinois income tax, the PPRT, sales tax (ST-1), and any PTE election, and handles Chicago city taxes (lease/cloud). We do not file or amend Illinois returns, make the PTE election, or represent clients before the Department, and we are not affiliated with Intuit Inc." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/quickbooks-cleanup/",
    name: "Illinois QuickBooks Cleanup",
    description: "QuickBooks cleanup for Illinois businesses by a Certified ProAdvisor — fix single-rate sales tax to the correct combined rate by jurisdiction (10.25% in Chicago), track Illinois net income for the PPRT, separate Chicago's 15% cloud tax, and reconcile to CPA-ready. Independent firm; does not file Illinois taxes.",
    serviceName: "Illinois QuickBooks Cleanup & Catch-Up Services",
    serviceType: "QuickBooks cleanup and catch-up bookkeeping",
    serviceDesc: "Cleanup and catch-up of QuickBooks files for Illinois businesses — correcting single-rate sales tax to the correct combined rate by jurisdiction (10.25% in Chicago), rebuilding the books so Illinois net income is tracked cleanly for the Personal Property Replacement Tax, separating Chicago's lease/cloud tax from sales tax, reconciling all accounts, and catching the file up to current. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses with behind or broken QuickBooks files across all 102 counties",
    offerPrice: "1500",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

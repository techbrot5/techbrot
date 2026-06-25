/* /find-an-accountant/texas/sales-tax-help/ — TX SERVICE CHILD (tax cluster, non-triage).
 * t-bofu · partials/state-service-body.njk. TX sales & use tax. HONESTY: we configure and
 * reconcile in QuickBooks; nexus, sourcing, taxability determinations, and FILING stay with the
 * Texas Comptroller + the client's CPA. We do not file or represent. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const TX_FACTS = [
  { fig: "8.25%", title: "6.25% state + up to 2% local", body: "Texas sales &amp; use tax is <strong>6.25% at the state level</strong> plus local add-ons capped at 2% &mdash; <strong>8.25% in most metros</strong>. The combined rate depends on the ship-to or service location, so QuickBooks has to be set per location, not a single statewide rate." },
  { fig: "Comptroller", title: "Administered by the Texas Comptroller", body: "Sales tax is filed with the <strong>Texas Comptroller of Public Accounts</strong>, not the IRS, on a monthly, quarterly, or annual cycle the Comptroller assigns. We keep the books so the return ties; your CPA or your team files it." },
  { fig: "Nexus", title: "Economic &amp; physical nexus &mdash; a CPA call", body: "Whether you must collect Texas sales tax &mdash; physical presence, the $500,000 economic-nexus threshold for remote sellers, marketplace rules, and what&rsquo;s taxable &mdash; is a determination for the Comptroller&rsquo;s rules and your CPA. We build the answer into QuickBooks; we don&rsquo;t make the determination." },
];
const TX_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Texas businesses remotely across all 254 counties. Texas sales-tax figures &mdash; the 6.25% state rate, up to 2% local (8.25% in most metros), and the remote-seller economic-nexus threshold &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://comptroller.texas.gov/\" rel=\"noopener nofollow\">Texas Comptroller of Public Accounts</a>. TechBrot configures and reconciles sales tax in QuickBooks and coordinates with your CPA; we do not make taxability or nexus determinations, file Texas sales-tax returns, or represent clients before the Comptroller.";
const TX_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Texas Comptroller of Public Accounts &middot; No taxability, nexus, filing, or representation claims (out of scope) &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. or the Texas Comptroller" },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/texas/sales-tax-help/",
  slug: "tx-svc-salestax",
  disclosure: "<strong>Independent, and clear about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not a tax authority, not Intuit, and not a CPA, EA, or attorney. We reconstruct and reconcile the books a notice or filing depends on, fast and accurately; your CPA or EA files and represents you before the agency. We never trade accuracy for speed.",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Texas Sales Tax Help in QuickBooks · TechBrot",
  description: "Texas sales tax set up right in QuickBooks — 8.25% combined rate by location, reconciled so the Comptroller return ties. We configure; your CPA files. Fixed-fee, all 254 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Texas", href: "/find-an-accountant/texas/" },
    { name: "Sales Tax Help" },
  ],
  bookHref: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "Texas &middot; Sales Tax in QuickBooks",
    heading: "Texas sales tax, set up right and reconciled every month.",
    subheading: "We configure the 8.25% combined rate by location in your QuickBooks file and reconcile it so the Texas Comptroller return ties &mdash; no surprise liability, no manual cleanup at filing time. We keep the books; your CPA or your team files. Taxability and nexus stay with the Comptroller and your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit or the Comptroller", "We configure &middot; your CPA files"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> sets up and reconciles <strong>Texas sales tax in your QuickBooks file</strong> &mdash; the 8.25% combined rate configured by location, sales-tax items mapped correctly, and the liability reconciled each period so the Texas Comptroller return ties. We keep the books accurate; taxability determinations, nexus, and filing stay with the Comptroller and your CPA. Full summary below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. or the Texas Comptroller. Texas sales-tax references reflect Comptroller rules current as of the review date; TechBrot does not file sales-tax returns or make taxability/nexus determinations.",
  },
  ctaBand: {
    eyebrow: "Texas businesses start here",
    heading: "Want Texas sales tax that just ties at filing time?",
    lede: "Book a free discovery call. We&rsquo;ll review how sales tax is set up in your QuickBooks file, flag what&rsquo;s misconfigured, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; we configure and reconcile; your CPA handles taxability, nexus, and filing.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=texas&state=texas&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Texas",
  copy: {
    aiHeading: "Texas sales tax in QuickBooks, in five questions.",
    valueEyebrow: "What sales-tax help covers in Texas",
    valueHeading: "Configured by location, reconciled every period.",
    valueLede: "We make QuickBooks compute and track Texas sales tax correctly &mdash; the determinations stay with your CPA and the Comptroller.",
    factsEyebrow: "Texas sales-tax facts that shape the setup",
    factsHeading: "Three Texas sales-tax facts your QuickBooks must reflect.",
    factsLede: "Texas sales tax is location-driven and Comptroller-administered &mdash; these three decide how it&rsquo;s configured.",
    faqHeading: "Texas sales tax questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>Texas sales-tax help in QuickBooks</strong> &mdash; we configure the <strong>8.25% combined rate</strong> (6.25% state + up to 2% local) by location, map sales-tax items correctly, and reconcile the liability each period so the <strong>Texas Comptroller</strong> return ties. Whether you must collect &mdash; physical presence, the $500,000 remote-seller economic-nexus threshold, marketplace rules, and what&rsquo;s taxable &mdash; is a determination for the Comptroller&rsquo;s rules and your CPA; we build the answer into the books, we don&rsquo;t make the call or file the return. In your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 254 counties, fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc. or the Comptroller.",
  aiSummary: [
    { q: "What is the Texas sales tax rate?", a: "<strong>6.25% at the state level plus local add-ons capped at 2% &mdash; 8.25% in most metros.</strong> The combined rate depends on the ship-to or service location, so QuickBooks must be configured per location rather than a single statewide rate." },
    { q: "Who administers Texas sales tax?", a: "The <strong>Texas Comptroller of Public Accounts</strong>, not the IRS, on a monthly, quarterly, or annual cycle the Comptroller assigns. We keep the books so the return ties; your CPA or your team files." },
    { q: "Do I have to collect Texas sales tax?", a: "That&rsquo;s a determination for the Comptroller&rsquo;s rules and your CPA &mdash; based on physical presence, the <strong>$500,000 economic-nexus threshold</strong> for remote sellers, marketplace-facilitator rules, and what&rsquo;s taxable. We configure QuickBooks to match the answer; we don&rsquo;t make the determination." },
    { q: "What does TechBrot actually do with my sales tax?", a: "We <strong>configure the correct combined rate by location, map sales-tax items, and reconcile the liability each period</strong> so the Comptroller return ties &mdash; no surprise liability, no manual cleanup at filing. We do not make taxability or nexus determinations or file the return." },
    { q: "Do you file my Texas sales-tax return?", a: "No &mdash; TechBrot keeps the QuickBooks file accurate and reconciled and coordinates with your CPA, who files. We are an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc. or the Comptroller, and we do not represent clients." },
  ],
  value: [
    { num: "01", title: "Rate configured by location", body: "The correct Texas combined rate set per ship-to or service location in QuickBooks &mdash; not a single statewide guess.", href: "/find-an-accountant/texas/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Sales-tax items mapped right", body: "Products and services mapped to the correct taxability so QuickBooks computes tax correctly on every invoice.", href: "/find-an-accountant/texas/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "03", title: "Reconciled every period", body: "The sales-tax liability reconciled each month, quarter, or year so the Comptroller return ties to the books.", href: "/find-an-accountant/texas/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04", title: "Cleanup of a misconfigured file", body: "A common fix: sales tax was set to one statewide rate or mapped wrong. We correct it and reconcile back.", href: "/find-an-accountant/texas/quickbooks-cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "05", title: "Marketplace &amp; channel reconciliation", body: "Amazon, Shopify, and marketplace-collected tax reconciled against what QuickBooks records so nothing double-counts.", href: "/find-an-accountant/texas/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
    { num: "06", title: "Coordinated with your CPA", body: "We hand reconciled, return-ready figures to your CPA, who confirms taxability and files. Clean handoff, no gaps.", href: "/find-an-accountant/texas/franchise-tax-help/", cta: "Franchise tax help &rarr;" },
  ],
  facts: TX_FACTS,
  scopeDo: [
    "Configure the correct Texas combined rate by location in QuickBooks",
    "Map products and services to the correct sales-tax items",
    "Reconcile the sales-tax liability each filing period",
    "Reconcile marketplace-collected tax against the books",
    "Correct a misconfigured or single-rate sales-tax setup",
    "Hand reconciled, return-ready figures to your CPA",
  ],
  scopeDont: [
    "Determine whether you have Texas sales-tax nexus",
    "Make taxability determinations on your products or services",
    "File the Texas sales-tax return with the Comptroller",
    "Represent you before the Texas Comptroller or provide tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free sales-tax review", body: "A Certified ProAdvisor reviews how sales tax is configured in your QuickBooks file and flags what&rsquo;s wrong, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee for setup, cleanup, and ongoing reconciliation." },
    { phase: "Step 3", title: "Configure &amp; correct", body: "We set the correct rates by location, map items, and reconcile any prior misconfiguration back to clean." },
    { phase: "Step 4", title: "Reconcile each period", body: "We reconcile the liability every period and hand return-ready figures to your CPA, who confirms taxability and files." },
  ],
  advisoryBody: [
    "Texas sales tax goes wrong in predictable ways &mdash; one statewide rate instead of per-location, marketplace tax double-counted, items mapped as taxable when they&rsquo;re not. None of those are filing problems; they&rsquo;re bookkeeping problems, and they&rsquo;re exactly what a Certified ProAdvisor fixes so the return your CPA files actually ties.",
    "We draw a hard line: we configure and reconcile, the Comptroller&rsquo;s rules and your CPA decide taxability and nexus and file the return. That division keeps you compliant and keeps everyone in their lane.",
  ],
  faq: [
    { q: "What is the Texas sales tax rate?", a: "6.25% at the state level plus local add-ons capped at 2%, for a combined rate of up to 8.25% &mdash; the rate in most Texas metros. Because the combined rate depends on the ship-to or service location, QuickBooks has to be configured per location, not set to a single statewide rate." },
    { q: "Who do I file Texas sales tax with?", a: "The Texas Comptroller of Public Accounts, on a monthly, quarterly, or annual cycle the Comptroller assigns based on your volume. TechBrot keeps the QuickBooks file reconciled so the return ties; your CPA or your team files it. We don&rsquo;t file returns or represent clients before the Comptroller." },
    { q: "Do I have to collect Texas sales tax for my business?", a: "That&rsquo;s a determination for the Comptroller&rsquo;s rules and your CPA &mdash; it depends on physical presence, the $500,000 economic-nexus threshold for remote sellers, marketplace-facilitator rules, and whether what you sell is taxable. We configure QuickBooks to match the answer your CPA confirms; we don&rsquo;t make the determination ourselves." },
    { q: "What does TechBrot actually do for my sales tax?", a: "We configure the correct combined rate by location, map your products and services to the right sales-tax items, reconcile the liability each period, reconcile marketplace-collected tax, and correct a misconfigured setup &mdash; so the Comptroller return ties to the books with no surprise liability. We keep the books; your CPA confirms taxability and files." },
    { q: "My QuickBooks sales tax is set to one rate for all of Texas. Is that a problem?", a: "Usually, yes. The combined rate varies by local jurisdiction, so a single statewide rate either over- or under-collects, and the return won&rsquo;t tie. This is one of the most common Texas QuickBooks issues we fix &mdash; we set the correct per-location rates and reconcile prior periods back to clean." },
    { q: "Do you file my Texas sales-tax return?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the QuickBooks file accurate and reconciled and coordinate with your CPA, who confirms taxability and nexus and files the return. We do not file or represent clients, and we are not affiliated with Intuit Inc. or the Texas Comptroller." },
  ],
  reviewProse: TX_REVIEW_PROSE,
  reviewCreds: TX_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/texas/sales-tax-help/",
    name: "Texas Sales Tax Help in QuickBooks",
    description: "Texas sales tax configured and reconciled in QuickBooks — the 8.25% combined rate by location, items mapped, liability reconciled so the Comptroller return ties. We configure; your CPA confirms taxability and files. Independent firm; does not file returns or make nexus determinations.",
    serviceName: "Texas Sales Tax Configuration & Reconciliation in QuickBooks",
    serviceType: "Sales-tax configuration and reconciliation (bookkeeping)",
    serviceDesc: "Configuration of the Texas combined sales-tax rate by location in QuickBooks, sales-tax item mapping, period reconciliation, marketplace-tax reconciliation, and cleanup of misconfigured setups for Texas businesses across all 254 counties. Independent Certified QuickBooks ProAdvisor firm; does not determine taxability or nexus, file sales-tax returns, or represent clients before the Texas Comptroller.",
    areaServed: [{ type: "State", name: "Texas", sameAs: "https://en.wikipedia.org/wiki/Texas" }],
    audienceType: "Texas businesses that collect sales tax — retail, e-commerce, restaurants, and services across all 254 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

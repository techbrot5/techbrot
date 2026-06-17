/* /find-an-accountant/florida/sales-tax-help/ — FL SERVICE CHILD (tax cluster, non-triage).
 * t-bofu · partials/state-service-body.njk. FL sales & use tax. HONESTY: we configure and reconcile
 * in QuickBooks; nexus, taxability, county-surtax determinations, and FILING stay with the Florida
 * Department of Revenue + the client's CPA. We do not file or represent. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const FL_FACTS = [
  { fig: "6% + surtax", title: "6% state + discretionary county surtax", body: "Florida sales &amp; use tax is <strong>6% at the state level</strong> plus a <strong>discretionary county surtax</strong> that varies by county. The combined rate depends on where the sale is sourced, so QuickBooks has to be set per county, not a single statewide rate." },
  { fig: "DOR", title: "Administered by the Department of Revenue", body: "Sales tax is filed with the <strong>Florida Department of Revenue</strong>, not the IRS, on a monthly, quarterly, or annual cycle the Department assigns &mdash; with an early-filing collection allowance available. We keep the books so the return ties; your CPA or your team files it." },
  { fig: "Nexus", title: "Economic &amp; physical nexus &mdash; a CPA call", body: "Whether you must collect Florida sales tax &mdash; physical presence, the $100,000 economic-nexus threshold for remote sellers, marketplace rules, and what&rsquo;s taxable &mdash; is a determination for the Department&rsquo;s rules and your CPA. We build the answer into QuickBooks; we don&rsquo;t make the determination." },
];
const FL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Florida businesses remotely across all 67 counties. Florida sales-tax figures &mdash; the 6% state rate, the discretionary county surtax, the $100,000 remote-seller economic-nexus threshold, and the collection allowance &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://floridarevenue.com/\" rel=\"noopener nofollow\">Florida Department of Revenue</a>. Surtax rates and thresholds change; confirm current figures with the Department and your CPA. TechBrot configures and reconciles sales tax in QuickBooks and coordinates with your CPA; we do not make taxability or nexus determinations, file Florida sales-tax returns, or represent clients before the Department.";
const FL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Florida Department of Revenue &middot; No taxability, nexus, filing, or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. or the Department of Revenue" },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/florida/sales-tax-help/",
  slug: "fl-svc-salestax",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Florida Sales Tax Help in QuickBooks · TechBrot",
  description: "Florida sales tax set up right in QuickBooks — 6% + county surtax by location, reconciled so the Department of Revenue return ties. We configure; your CPA files. Fixed-fee, all 67 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "Sales Tax Help" },
  ],
  bookHref: "/contact/?intent=florida&state=florida&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "Florida &middot; Sales Tax in QuickBooks",
    heading: "Florida sales tax, set up right and reconciled every month.",
    subheading: "We configure the 6% + county surtax rate by location in your QuickBooks file and reconcile it so the Florida Department of Revenue return ties &mdash; no surprise liability, no manual cleanup at filing time. We keep the books; your CPA or your team files. Taxability and nexus stay with the Department and your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit or the DOR", "We configure &middot; your CPA files"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> sets up and reconciles <strong>Florida sales tax in your QuickBooks file</strong> &mdash; the 6% + county surtax configured by location, sales-tax items mapped correctly, and the liability reconciled each period so the Florida Department of Revenue return ties. We keep the books accurate; taxability determinations, nexus, and filing stay with the Department and your CPA. Full summary below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. or the Florida Department of Revenue. Florida sales-tax references reflect Department rules current as of the review date; TechBrot does not file sales-tax returns or make taxability/nexus determinations.",
  },
  ctaBand: {
    eyebrow: "Florida businesses start here",
    heading: "Want Florida sales tax that just ties at filing time?",
    lede: "Book a free discovery call. We&rsquo;ll review how sales tax is set up in your QuickBooks file, flag what&rsquo;s misconfigured, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; we configure and reconcile; your CPA handles taxability, nexus, and filing.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Florida",
  copy: {
    aiHeading: "Florida sales tax in QuickBooks, in five questions.",
    valueEyebrow: "What sales-tax help covers in Florida",
    valueHeading: "Configured by county, reconciled every period.",
    valueLede: "We make QuickBooks compute and track Florida sales tax correctly &mdash; the determinations stay with your CPA and the Department.",
    factsEyebrow: "Florida sales-tax facts that shape the setup",
    factsHeading: "Three Florida sales-tax facts your QuickBooks must reflect.",
    factsLede: "Florida sales tax is county-driven and Department-administered &mdash; these three decide how it&rsquo;s configured.",
    faqHeading: "Florida sales tax questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>Florida sales-tax help in QuickBooks</strong> &mdash; we configure the <strong>6% state rate plus the discretionary county surtax</strong> by location, map sales-tax items correctly, and reconcile the liability each period so the <strong>Florida Department of Revenue</strong> return ties. Whether you must collect &mdash; physical presence, the $100,000 remote-seller economic-nexus threshold, marketplace rules, and what&rsquo;s taxable &mdash; is a determination for the Department&rsquo;s rules and your CPA; we build the answer into the books, we don&rsquo;t make the call or file the return. In your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 67 counties, fixed-fee against a written scope. Independent firm &mdash; not affiliated with Intuit Inc. or the Department.",
  aiSummary: [
    { q: "What is the Florida sales tax rate?", a: "<strong>6% at the state level plus a discretionary county surtax</strong> that varies by county. The combined rate depends on where the sale is sourced, so QuickBooks must be configured per county rather than a single statewide rate." },
    { q: "Who administers Florida sales tax?", a: "The <strong>Florida Department of Revenue</strong>, not the IRS, on a monthly, quarterly, or annual cycle the Department assigns &mdash; with a collection allowance for filing early and electronically. We keep the books so the return ties; your CPA or your team files." },
    { q: "Do I have to collect Florida sales tax?", a: "That&rsquo;s a determination for the Department&rsquo;s rules and your CPA &mdash; based on physical presence, the <strong>$100,000 economic-nexus threshold</strong> for remote sellers, marketplace-facilitator rules, and what&rsquo;s taxable. We configure QuickBooks to match the answer; we don&rsquo;t make the determination." },
    { q: "What does TechBrot actually do with my sales tax?", a: "We <strong>configure the correct 6% + county surtax by location, map sales-tax items, and reconcile the liability each period</strong> so the Department return ties &mdash; no surprise liability, no manual cleanup at filing. We do not make taxability or nexus determinations or file the return." },
    { q: "Do you file my Florida sales-tax return?", a: "No &mdash; TechBrot keeps the QuickBooks file accurate and reconciled and coordinates with your CPA, who files. We are an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc. or the Department, and we do not represent clients." },
  ],
  value: [
    { num: "01", title: "Rate configured by county", body: "The correct 6% + county surtax set per location in QuickBooks &mdash; not a single statewide guess.", href: "/find-an-accountant/florida/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Sales-tax items mapped right", body: "Products and services mapped to the correct taxability so QuickBooks computes tax correctly on every invoice.", href: "/find-an-accountant/florida/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "03", title: "Reconciled every period", body: "The sales-tax liability reconciled each month, quarter, or year so the Department return ties to the books &mdash; collection allowance captured.", href: "/find-an-accountant/florida/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04", title: "Cleanup of a misconfigured file", body: "A common fix: sales tax was set to one statewide rate or the county surtax was missed. We correct it and reconcile back.", href: "/quickbooks/cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "05", title: "Marketplace &amp; channel reconciliation", body: "Amazon, Shopify, and marketplace-collected tax reconciled against what QuickBooks records so nothing double-counts.", href: "/find-an-accountant/florida/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
    { num: "06", title: "Coordinated with your CPA", body: "We hand reconciled, return-ready figures to your CPA, who confirms taxability and files. Clean handoff, no gaps.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },
  ],
  facts: FL_FACTS,
  scopeDo: [
    "Configure the correct 6% + county surtax by location in QuickBooks",
    "Map products and services to the correct sales-tax items",
    "Reconcile the sales-tax liability each filing period and capture the collection allowance",
    "Reconcile marketplace-collected tax against the books",
    "Correct a misconfigured or single-rate sales-tax setup",
    "Hand reconciled, return-ready figures to your CPA",
  ],
  scopeDont: [
    "Determine whether you have Florida sales-tax nexus",
    "Make taxability determinations on your products or services",
    "File the Florida sales-tax return with the Department of Revenue",
    "Represent you before the Florida Department of Revenue or provide tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free sales-tax review", body: "A Certified ProAdvisor reviews how sales tax is configured in your QuickBooks file and flags what&rsquo;s wrong, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee for setup, cleanup, and ongoing reconciliation." },
    { phase: "Step 3", title: "Configure &amp; correct", body: "We set the correct rates by county, map items, and reconcile any prior misconfiguration back to clean." },
    { phase: "Step 4", title: "Reconcile each period", body: "We reconcile the liability every period and hand return-ready figures to your CPA, who confirms taxability and files." },
  ],
  advisoryBody: [
    "Florida sales tax goes wrong in predictable ways &mdash; one statewide rate instead of per-county-surtax, the surtax cap on single items missed, marketplace tax double-counted, items mapped as taxable when they&rsquo;re not. None of those are filing problems; they&rsquo;re bookkeeping problems, and they&rsquo;re exactly what a Certified ProAdvisor fixes so the return your CPA files actually ties.",
    "We draw a hard line: we configure and reconcile, the Department&rsquo;s rules and your CPA decide taxability and nexus and file the return. That division keeps you compliant and keeps everyone in their lane.",
  ],
  faq: [
    { q: "What is the Florida sales tax rate?", a: "6% at the state level plus a discretionary county surtax that varies by county &mdash; so the combined rate differs depending on where the sale is sourced. Because of that, QuickBooks has to be configured per county, not set to a single statewide rate. Some counties also cap the surtax on single large items, which the books need to handle correctly." },
    { q: "Who do I file Florida sales tax with?", a: "The Florida Department of Revenue, on a monthly, quarterly, or annual cycle the Department assigns based on your volume &mdash; with a collection allowance for filing early and electronically. TechBrot keeps the QuickBooks file reconciled so the return ties; your CPA or your team files it. We don&rsquo;t file returns or represent clients before the Department." },
    { q: "Do I have to collect Florida sales tax for my business?", a: "That&rsquo;s a determination for the Department&rsquo;s rules and your CPA &mdash; it depends on physical presence, the $100,000 economic-nexus threshold for remote sellers, marketplace-facilitator rules, and whether what you sell is taxable. We configure QuickBooks to match the answer your CPA confirms; we don&rsquo;t make the determination ourselves." },
    { q: "What does TechBrot actually do for my sales tax?", a: "We configure the correct 6% + county surtax by location, map your products and services to the right sales-tax items, reconcile the liability each period (capturing the collection allowance), reconcile marketplace-collected tax, and correct a misconfigured setup &mdash; so the Department return ties to the books with no surprise liability. We keep the books; your CPA confirms taxability and files." },
    { q: "My QuickBooks sales tax is set to one rate for all of Florida. Is that a problem?", a: "Usually, yes. The combined rate varies by county surtax, so a single statewide rate either over- or under-collects, and the return won&rsquo;t tie. This is one of the most common Florida QuickBooks issues we fix &mdash; we set the correct per-county rates, handle any single-item surtax caps, and reconcile prior periods back to clean." },
    { q: "Do you file my Florida sales-tax return?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the QuickBooks file accurate and reconciled and coordinate with your CPA, who confirms taxability and nexus and files the return. We do not file or represent clients, and we are not affiliated with Intuit Inc. or the Florida Department of Revenue." },
  ],
  reviewProse: FL_REVIEW_PROSE,
  reviewCreds: FL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/sales-tax-help/",
    name: "Florida Sales Tax Help in QuickBooks",
    description: "Florida sales tax configured and reconciled in QuickBooks — the 6% + county surtax by location, items mapped, liability reconciled so the Department of Revenue return ties. We configure; your CPA confirms taxability and files. Independent firm; does not file returns or make nexus determinations.",
    serviceName: "Florida Sales Tax Configuration & Reconciliation in QuickBooks",
    serviceType: "Sales-tax configuration and reconciliation (bookkeeping)",
    serviceDesc: "Configuration of the Florida 6% state rate plus discretionary county surtax by location in QuickBooks, sales-tax item mapping, single-item surtax-cap handling, period reconciliation with collection-allowance capture, marketplace-tax reconciliation, and cleanup of misconfigured setups for Florida businesses across all 67 counties. Independent Certified QuickBooks ProAdvisor firm; does not determine taxability or nexus, file sales-tax returns, or represent clients before the Florida Department of Revenue.",
    areaServed: [{ type: "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" }],
    audienceType: "Florida businesses that collect sales tax — retail, e-commerce, hospitality, and services across all 67 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

/* /find-an-accountant/illinois/sales-tax-help/ — IL SERVICE CHILD (tax cluster, non-triage).
 * t-bofu · partials/state-service-body.njk. IL sales & use tax (6.25% state -> 10.25% Chicago,
 * destination-based) PLUS the Chicago Personal Property Lease Transaction Tax ("cloud tax", 15% Jan
 * 2026) on SaaS — a CITY tax IL doesn't levy. HONESTY: we configure & reconcile in QuickBooks; nexus,
 * taxability, and FILING stay with IDOR / Chicago Dept of Finance + the CPA. We do not file or represent. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const IL_FACTS = [
  { fig: "6.25% &rarr; 10.25%", title: "State 6.25% + local, up to 10.25% in Chicago", body: "Illinois sales tax is <strong>6.25% at the state level</strong> plus county and home-rule add-ons &mdash; <strong>10.25% in Chicago</strong> (Cook County + city). It&rsquo;s <strong>destination-based</strong> for remote sellers, so the combined rate follows the customer&rsquo;s jurisdiction &mdash; QuickBooks must carry correct rates by location." },
  { fig: "IDOR", title: "Filed with the IDOR on the ST-1", body: "Sales tax is filed with the <strong>Illinois Department of Revenue</strong> on the ST-1, on a cycle the Department assigns. We keep the books so the return ties; your CPA or your team files it. (City taxes like Chicago&rsquo;s cloud tax are separate &mdash; see below.)" },
  { fig: "Cloud tax", title: "Chicago&rsquo;s 15% lease/SaaS tax &mdash; a city tax", body: "Illinois <strong>doesn&rsquo;t tax SaaS</strong> &mdash; but <strong>Chicago does</strong>, through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), <strong>15% as of January 2026</strong>. Providers with Chicago customers must collect it, tracked separately from sales tax. It&rsquo;s filed with the Chicago Dept of Finance, not the IDOR." },
];
const IL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Illinois businesses remotely across all 102 counties. Illinois sales-tax figures &mdash; the 6.25% state rate, local add-ons up to 10.25% in Chicago, destination-based sourcing, and Chicago&rsquo;s 15% Personal Property Lease Transaction Tax on SaaS &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://tax.illinois.gov/\" rel=\"noopener nofollow\">Illinois Department of Revenue</a> and the City of Chicago Department of Finance. Rates and the Chicago lease-tax rate change; confirm current figures with the Department, the City, and your CPA. TechBrot configures and reconciles sales and lease tax in QuickBooks and coordinates with your CPA; we do not make taxability or nexus determinations, file Illinois sales-tax or Chicago lease-tax returns, or represent clients before the Department or the City.";
const IL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &amp; the City of Chicago Department of Finance &middot; No taxability, nexus, filing, or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc., the IDOR, or the City of Chicago" },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/sales-tax-help/",
  slug: "il-svc-salestax",
  disclosure: "<strong>Independent, and clear about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not a tax authority, not Intuit, and not a CPA, EA, or attorney. We reconstruct and reconcile the books a notice or filing depends on, fast and accurately; your CPA or EA files and represents you before the agency. We never trade accuracy for speed.",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Illinois Sales Tax & Chicago Cloud Tax · TechBrot",
  description: "Illinois sales tax in QuickBooks — 6.25%–10.25% combined by jurisdiction plus Chicago's 15% lease/cloud tax on SaaS, reconciled so returns tie. (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Sales Tax Help" },
  ],
  bookHref: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "Illinois &middot; Sales Tax &amp; Chicago Cloud Tax",
    heading: "Illinois sales tax &mdash; and Chicago&rsquo;s cloud tax &mdash; set up right and reconciled.",
    subheading: "We configure the combined rate by jurisdiction (10.25% in Chicago) in your QuickBooks file and reconcile it so the IDOR ST-1 ties &mdash; and, for SaaS and equipment-lease providers with Chicago customers, we set up Chicago&rsquo;s 15% lease/cloud tax separately. We keep the books; your CPA or your team files. Taxability and nexus stay with the authorities and your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit or the IDOR", "We configure &middot; your CPA files"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> sets up and reconciles <strong>Illinois sales tax &mdash; and the Chicago cloud tax &mdash; in your QuickBooks file</strong>: the combined rate (10.25% in Chicago) configured by jurisdiction, sales-tax items mapped, the liability reconciled so the IDOR ST-1 ties, and Chicago&rsquo;s 15% lease/SaaS tax tracked separately where it applies. We keep the books accurate; taxability, nexus, and filing stay with the authorities and your CPA. Full summary below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc., the IDOR, or the City of Chicago. Illinois references reflect IDOR and City of Chicago rules current as of the review date; TechBrot does not file sales-tax or Chicago lease-tax returns or make taxability/nexus determinations.",
  },
  ctaBand: {
    eyebrow: "Illinois businesses start here",
    heading: "Want Illinois sales tax &mdash; and the Chicago cloud tax &mdash; to just tie?",
    lede: "Book a free discovery call. We&rsquo;ll review how sales tax and (if relevant) the Chicago lease tax are set up in your QuickBooks file, flag what&rsquo;s misconfigured, and send a written fixed-fee quote within 3 business days. Independent firm &mdash; we configure and reconcile; your CPA handles taxability, nexus, and filing.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Illinois",
  copy: {
    aiHeading: "Illinois sales tax &amp; the Chicago cloud tax, in five questions.",
    valueEyebrow: "What sales-tax help covers in Illinois",
    valueHeading: "Configured by jurisdiction, reconciled every period.",
    valueLede: "We make QuickBooks compute and track Illinois sales tax &mdash; and Chicago&rsquo;s separate cloud tax &mdash; correctly. The determinations stay with your CPA and the authorities.",
    factsEyebrow: "Illinois sales-tax facts that shape the setup",
    factsHeading: "Three Illinois facts your QuickBooks must reflect.",
    factsLede: "Illinois sales tax is jurisdiction-driven, and Chicago layers a separate tax on SaaS &mdash; these three decide how it&rsquo;s configured.",
    faqHeading: "Illinois sales tax &amp; Chicago cloud tax questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>Illinois sales-tax help in QuickBooks</strong> &mdash; we configure the <strong>combined rate</strong> (6.25% state up to <strong>10.25% in Chicago</strong>) by jurisdiction, map sales-tax items, and reconcile the liability each period so the <strong>IDOR</strong> ST-1 ties. Illinois is destination-based for remote sellers. Separately, for SaaS and equipment-lease providers with Chicago customers, we set up <strong>Chicago&rsquo;s Personal Property Lease Transaction Tax</strong> (the &ldquo;cloud tax,&rdquo; 15% as of Jan 2026) &mdash; a City of Chicago tax Illinois doesn&rsquo;t levy, tracked separately. Whether you must collect, and what&rsquo;s taxable, is a determination for the authorities&rsquo; rules and your CPA; we build the answer into the books, we don&rsquo;t make the call or file the returns. In your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 102 counties, fixed-fee. Independent firm &mdash; not affiliated with Intuit Inc., the IDOR, or the City.",
  aiSummary: [
    { q: "What is the Illinois sales tax rate?", a: "<strong>6.25% at the state level plus county and home-rule add-ons</strong> &mdash; reaching <strong>10.25% in Chicago</strong> (among the highest big-city rates in the U.S.). It&rsquo;s destination-based for remote sellers, so the combined rate follows the customer&rsquo;s jurisdiction and QuickBooks must carry correct rates by location." },
    { q: "Does Illinois tax SaaS &mdash; and does Chicago?", a: "<strong>Illinois doesn&rsquo;t tax SaaS at the state level, but Chicago does</strong> &mdash; through its Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), which rose to 15% on January 1, 2026. SaaS and cloud providers with Chicago customers must collect it. It&rsquo;s a City of Chicago tax, filed with the Department of Finance, and tracked separately from sales tax in QuickBooks." },
    { q: "Who administers Illinois sales tax?", a: "The <strong>Illinois Department of Revenue</strong> (IDOR), on the ST-1. Chicago city taxes (the lease/cloud tax, the amusement tax) are administered separately by the <strong>City of Chicago Department of Finance</strong>. We keep the books so each return ties; your CPA or your team files." },
    { q: "What does TechBrot actually do with my sales and lease tax?", a: "We <strong>configure the correct combined rate by jurisdiction, map items, reconcile the liability so the ST-1 ties, and set up Chicago&rsquo;s lease/cloud tax separately</strong> where it applies. We do not make taxability or nexus determinations or file the returns." },
    { q: "Do you file my Illinois or Chicago returns?", a: "No &mdash; TechBrot keeps the QuickBooks file accurate and reconciled and coordinates with your CPA, who files. We are an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc., the IDOR, or the City, and we do not represent clients." },
  ],
  value: [
    { num: "01", title: "Rate configured by jurisdiction", body: "The correct combined rate set per customer jurisdiction (10.25% in Chicago) in QuickBooks &mdash; not a single statewide guess.", href: "/find-an-accountant/illinois/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },
    { num: "02", title: "Chicago cloud tax set up separately", body: "Chicago&rsquo;s 15% lease/SaaS tax configured and tracked separately from sales tax for providers with Chicago customers.", href: "/find-an-accountant/illinois/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "03", title: "Reconciled every period", body: "The sales-tax (and lease-tax) liability reconciled each period so the IDOR ST-1 and the Chicago return tie to the books.", href: "/find-an-accountant/illinois/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "04", title: "Cleanup of a misconfigured file", body: "A common fix: sales tax set to one statewide rate, or the Chicago cloud tax never set up. We correct it and reconcile back.", href: "/quickbooks/cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "05", title: "Marketplace &amp; channel reconciliation", body: "Amazon, Shopify, and marketplace-collected tax reconciled against what QuickBooks records so nothing double-counts.", href: "/find-an-accountant/illinois/virtual-bookkeeper/", cta: "Virtual bookkeeper &rarr;" },
    { num: "06", title: "Coordinated with your CPA", body: "We hand reconciled, return-ready figures to your CPA, who confirms taxability and files the ST-1 and any Chicago return.", href: "/find-an-accountant/illinois/replacement-tax-help/", cta: "Replacement tax help &rarr;" },
  ],
  facts: IL_FACTS,
  scopeDo: [
    "Configure the correct combined Illinois rate by jurisdiction (10.25% in Chicago)",
    "Set up Chicago&rsquo;s lease/cloud tax separately for SaaS/lease providers with Chicago customers",
    "Map products and services to the correct sales-tax items",
    "Reconcile the sales-tax and lease-tax liability each filing period",
    "Correct a misconfigured or single-rate sales-tax setup",
    "Hand reconciled, return-ready figures to your CPA",
  ],
  scopeDont: [
    "Determine whether you have Illinois sales-tax or Chicago lease-tax nexus",
    "Make taxability determinations on your products or services",
    "File the IDOR ST-1 or the Chicago lease-tax return",
    "Represent you before the IDOR or the City of Chicago, or provide tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free sales-tax review", body: "A Certified ProAdvisor reviews how sales tax (and, if relevant, the Chicago lease tax) is configured in your QuickBooks file and flags what&rsquo;s wrong, at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee for setup, cleanup, and ongoing reconciliation." },
    { phase: "Step 3", title: "Configure &amp; correct", body: "We set the correct rates by jurisdiction, set up Chicago&rsquo;s cloud tax where needed, map items, and reconcile any prior misconfiguration back to clean." },
    { phase: "Step 4", title: "Reconcile each period", body: "We reconcile the liability every period and hand return-ready figures to your CPA, who confirms taxability and files." },
  ],
  advisoryBody: [
    "Illinois sales tax goes wrong in predictable ways &mdash; one statewide rate instead of by jurisdiction, marketplace tax double-counted &mdash; and the Chicago cloud tax goes wrong in one big way: SaaS companies assume they&rsquo;re untaxed (true at the state level) and never set up Chicago&rsquo;s lease tax, building an exposure that grew as the rate climbed to 15%. None of those are filing problems; they&rsquo;re bookkeeping setup problems, and they&rsquo;re exactly what a Certified ProAdvisor fixes.",
    "We draw a hard line: we configure and reconcile, the authorities&rsquo; rules and your CPA decide taxability and nexus and file the returns. That division keeps you compliant and keeps everyone in their lane.",
  ],
  faq: [
    { q: "What is the Illinois sales tax rate?", a: "6.25% at the state level plus county and home-rule add-ons, reaching 10.25% in Chicago (Cook County + city) &mdash; among the highest big-city rates in the U.S. Illinois is destination-based for remote sellers, so the combined rate follows the customer&rsquo;s jurisdiction. QuickBooks has to carry the correct combined rate by location, not a single statewide rate." },
    { q: "Does Illinois tax SaaS, and what is Chicago's cloud tax?", a: "Illinois does not tax SaaS at the state level. The City of Chicago, however, taxes it through the Personal Property Lease Transaction Tax (the &ldquo;cloud tax&rdquo;), which rose to 15% on January 1, 2026, and applies to SaaS, cloud services, and equipment leases used in Chicago. SaaS providers with Chicago customers must collect it &mdash; and because it&rsquo;s a City of Chicago tax filed with the Department of Finance, it&rsquo;s tracked separately from Illinois sales tax in QuickBooks. We set it up; your CPA confirms applicability and files." },
    { q: "Who do I file Illinois sales tax with?", a: "The Illinois Department of Revenue, on the ST-1, on a cycle the Department assigns based on your volume. Chicago city taxes (the lease/cloud tax, the amusement tax) are filed separately with the City of Chicago Department of Finance. TechBrot keeps the QuickBooks file reconciled so each return ties; your CPA or your team files. We don&rsquo;t file returns or represent clients." },
    { q: "What does TechBrot actually do for my sales and lease tax?", a: "We configure the correct combined rate by jurisdiction, map your products and services to the right sales-tax items, reconcile the liability each period so the ST-1 ties, and set up Chicago&rsquo;s lease/cloud tax separately where it applies &mdash; with no surprise liability. We keep the books; your CPA confirms taxability and files the IDOR and any Chicago return." },
    { q: "My QuickBooks sales tax is set to one rate for all of Illinois. Is that a problem?", a: "Usually, yes. The combined rate varies sharply by jurisdiction &mdash; from 6.25% downstate to 10.25% in Chicago &mdash; so a single statewide rate either over- or under-collects, and the return won&rsquo;t tie. This is one of the most common Illinois QuickBooks issues we fix &mdash; we set the correct per-jurisdiction rates and reconcile prior periods back to clean." },
    { q: "Do you file my Illinois sales-tax or Chicago lease-tax return?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the QuickBooks file accurate and reconciled and coordinate with your CPA, who confirms taxability and nexus and files the IDOR ST-1 and the Chicago lease-tax return. We do not file or represent clients, and we are not affiliated with Intuit Inc., the IDOR, or the City of Chicago." },
  ],
  reviewProse: IL_REVIEW_PROSE,
  reviewCreds: IL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/sales-tax-help/",
    name: "Illinois Sales Tax & Chicago Cloud Tax Help in QuickBooks",
    description: "Illinois sales tax configured and reconciled in QuickBooks — the combined rate by jurisdiction (10.25% in Chicago), plus Chicago's 15% lease/cloud tax on SaaS set up separately, so the returns tie. We configure; your CPA confirms taxability and files. Independent firm; does not file returns or make nexus determinations.",
    serviceName: "Illinois Sales Tax & Chicago Lease-Tax Configuration in QuickBooks",
    serviceType: "Sales-tax and lease-tax configuration and reconciliation (bookkeeping)",
    serviceDesc: "Configuration of the Illinois combined sales-tax rate by jurisdiction in QuickBooks (6.25% state up to 10.25% in Chicago, destination-based), sales-tax item mapping, period reconciliation so the IDOR ST-1 ties, separate setup of the Chicago Personal Property Lease Transaction Tax ('cloud tax') on SaaS, marketplace-tax reconciliation, and cleanup of misconfigured setups for Illinois businesses across all 102 counties. Independent Certified QuickBooks ProAdvisor firm; does not determine taxability or nexus, file sales-tax or Chicago lease-tax returns, or represent clients before the IDOR or the City of Chicago.",
    areaServed: [{ type: "State", name: "Illinois", sameAs: "https://en.wikipedia.org/wiki/Illinois" }],
    audienceType: "Illinois businesses that collect sales tax, and SaaS/cloud providers with Chicago customers, across all 102 counties",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

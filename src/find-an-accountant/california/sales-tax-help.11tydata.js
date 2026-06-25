/* /find-an-accountant/california/sales-tax-help/ — CA SERVICE CHILD (tax cluster).
 * t-bofu. Shared body: partials/state-service-body.njk. v4 CA tax cluster. The genuinely
 * CA-distinct sales-tax page: CDTFA district sales tax (highest base in the U.S., sourced by
 * location), economic nexus ($500k, no transaction count), seller's permits. HONESTY: we keep
 * the books sales-tax-ready; the CDTFA returns + nexus determinations are your CPA's. Deferred
 * to CDTFA + CPA/EA; founder-name-zero; not Intuit. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const CA_FACTS = [
  { fig: "7.25%", title: "The highest base in the U.S.", body: "California&rsquo;s statewide sales-tax base is 7.25% &mdash; the highest of any state &mdash; before any local district add-ons. Books and the seller&rsquo;s permit start from there." },
  { fig: "10.25%+", title: "District tax, sourced by location", body: "Cities, counties, and special districts add district taxes that push the combined rate past 10.25% in places. The rate depends on where the sale is sourced, so QuickBooks must apply the correct combined rate by customer location &mdash; not a flat statewide rate." },
  { fig: "$500K", title: "Economic nexus, sales-only", body: "A remote seller must register with the CDTFA and collect once California sales exceed $500,000 in the current or prior year &mdash; a sales-only threshold with no transaction count. We track the sales-by-state picture; your CPA confirms registration." },
];
const CA_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving California businesses remotely across all 58 counties. California sales-tax figures &mdash; the 7.25% base, district rates, and the $500,000 economic-nexus threshold &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://www.cdtfa.ca.gov/\" rel=\"noopener nofollow\">California Department of Tax and Fee Administration (CDTFA)</a>. TechBrot keeps the books sales-tax-ready and coordinates with your CPA, who files; we do not file California sales-tax returns, determine nexus, or represent clients before the CDTFA.";
const CA_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the CDTFA &middot; No tax-filing, nexus-determination, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/california/sales-tax-help/",
  slug: "ca-svc-salestax",
  disclosure: "<strong>Independent, and clear about the limits.</strong> TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; not a tax authority, not Intuit, and not a CPA, EA, or attorney. We reconstruct and reconcile the books a notice or filing depends on, fast and accurately; your CPA or EA files and represents you before the agency. We never trade accuracy for speed.",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "California Sales Tax Help (CDTFA) · TechBrot",
  description: "California sales tax help — CDTFA district rates by location, economic nexus ($500K), seller’s permits and sales-tax-ready books. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "California", href: "/find-an-accountant/california/" },
    { name: "Sales Tax Help" },
  ],
  bookHref: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=MOFU",
  hero: {
    eyebrow: "California &middot; Sales Tax (CDTFA)",
    heading: "California sales tax help &mdash; the right rate, by location.",
    subheading: "A Certified QuickBooks ProAdvisor keeps your books sales-tax-ready for California&rsquo;s CDTFA &mdash; district rates applied by customer location, economic nexus tracked, seller&rsquo;s-permit detail clean &mdash; so the return your CPA files actually ties. Fixed-fee, all 58 counties. We keep the books; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> provides <strong>California sales-tax help for businesses</strong> &mdash; a Certified ProAdvisor keeps your books CDTFA-ready: district rates applied by customer location, economic nexus tracked, seller&rsquo;s-permit and exemption detail clean, and the sales-tax liability reconciled so the return ties. The full California sales-tax summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. California sales-tax references (7.25% base; district rates; $500K economic nexus) reflect CDTFA rules current as of the review date; TechBrot does not file California sales-tax returns.",
  },
  ctaBand: {
    eyebrow: "California businesses start here",
    heading: "Want California sales tax that actually ties to the return?",
    lede: "Book a free discovery call. We&rsquo;ll review your sales-tax setup and footprint and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file CA sales tax or determine nexus; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=california&state=california&source_type=state-tax&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "California",
  copy: {
    aiHeading: "California sales tax, in five questions.",
    valueEyebrow: "What California sales-tax help covers",
    valueHeading: "Books the CDTFA return ties to.",
    valueLede: "California&rsquo;s sales tax is sourced by location and the nation&rsquo;s most complex &mdash; so the books have to be set up for it, not against it.",
    factsEyebrow: "California sales-tax realities we build in",
    factsHeading: "Three things that make California sales tax hard.",
    factsLede: "These three are why a flat statewide rate is wrong almost everywhere in California.",
    faqHeading: "California sales tax questions.",
  },
  summary: "<strong>TechBrot</strong> provides <strong>California sales-tax help</strong> &mdash; a Certified QuickBooks ProAdvisor keeps your books ready for the <strong>CDTFA</strong> (California Department of Tax and Fee Administration). California&rsquo;s <strong>7.25% base</strong> is the highest in the U.S., and local <strong>district taxes</strong> push the combined rate past 10.25% in places, sourced by location &mdash; so QuickBooks must apply the correct combined rate by customer location, not a flat statewide rate. We configure district rates, track <strong>economic nexus</strong> ($500,000 in California sales, no transaction count), keep seller&rsquo;s-permit and exemption detail clean, and reconcile the sales-tax liability so the return ties. We keep the books sales-tax-ready; the CDTFA filing and any nexus determination are your CPA&rsquo;s. Fixed-fee. Independent firm &mdash; not affiliated with Intuit Inc.; we don&rsquo;t file CA sales tax or represent you before the CDTFA.",
  aiSummary: [
    { q: "What is California sales tax help?", a: "<strong>Keeping your books ready for the CDTFA</strong> &mdash; district rates applied by customer location, economic nexus tracked, seller&rsquo;s-permit and exemption detail clean, and the sales-tax liability reconciled so the return ties. A Certified ProAdvisor does the books; your CPA files." },
    { q: "What is California&rsquo;s sales-tax rate?", a: "A <strong>7.25% statewide base</strong> &mdash; the highest in the U.S. &mdash; plus local district taxes that push the combined rate past <strong>10.25%</strong> in some areas. The rate is sourced by location, so the correct combined rate depends on where the sale ships or is performed." },
    { q: "When do I have to collect California sales tax as a remote seller?", a: "California economic nexus is reached at <strong>$500,000 in California sales</strong> in the current or prior calendar year &mdash; a sales-only threshold with no transaction count. We keep your sales-by-state picture clear; your CPA confirms when to register with the CDTFA." },
    { q: "Why is a flat statewide rate wrong?", a: "Because California sources sales tax by location and hundreds of districts overlap, a single flat rate under- or over-collects almost everywhere and the CDTFA return stops tying. We set QuickBooks to the correct combined rate by customer location." },
    { q: "Do you file my CDTFA return?", a: "No &mdash; we keep the books sales-tax-ready and reconcile the liability; your CPA or EA files the CDTFA return and handles registration and any audit. We are independent and do not represent clients before the CDTFA." },
  ],
  value: [
    { num: "01", title: "District rates by location", body: "QuickBooks sales-tax items configured to the correct CDTFA combined rate by customer location &mdash; not a flat statewide rate.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
    { num: "02", title: "Economic-nexus tracking", body: "Your California (and multi-state) sales tracked against the $500,000 threshold so registration timing is never a surprise.", href: "/glossary/sales-tax-nexus/", cta: "Sales-tax nexus &rarr;" },
    { num: "03", title: "Seller&rsquo;s permit &amp; exemptions", body: "Seller&rsquo;s-permit detail, resale and exemption certificates, and taxable-vs-exempt classification kept clean in the books.", href: "/find-an-accountant/california/quickbooks-accountant/", cta: "QuickBooks accountant &rarr;" },
    { num: "04", title: "Liability reconciled", body: "The sales-tax liability account reconciled to what the return reports, so filing time isn&rsquo;t a scramble.", href: "/find-an-accountant/california/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { num: "05", title: "Marketplace &amp; multi-channel", body: "Marketplace-facilitator collection and direct sales separated cleanly for Shopify, Amazon, and multi-channel sellers.", href: "/find-an-accountant/california/quickbooks-cleanup/", cta: "Cleanup &rarr;" },
    { num: "06", title: "CPA-ready for filing", body: "A reconciled, documented sales-tax position your CPA can file the CDTFA return from with confidence.", href: "/accounting/financial-statements/", cta: "Financial statements &rarr;" },
  ],
  facts: CA_FACTS,
  scopeDo: [
    "Configure CDTFA district sales tax by customer location",
    "Track California and multi-state sales against the $500K nexus threshold",
    "Keep seller&rsquo;s-permit, resale, and exemption detail clean",
    "Reconcile the sales-tax liability to the return",
    "Separate marketplace-facilitator from direct sales",
    "Deliver a CPA-ready sales-tax position for filing",
  ],
  scopeDont: [
    "File the CDTFA sales-tax return",
    "Determine where you have nexus or register the seller&rsquo;s permit (your CPA)",
    "Represent you in a CDTFA audit or dispute",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your sales-tax setup and footprint &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "A written scope and fixed fee within 3 business days &mdash; setup fix, ongoing, or both." },
    { phase: "Step 3", title: "Configure &amp; reconcile", body: "District rates set by location, nexus tracking in place, liability reconciled." },
    { phase: "Step 4", title: "CPA-ready, ongoing", body: "We keep it sales-tax-ready each month; your CPA files the CDTFA return." },
  ],
  advisoryBody: [
    "California sales tax breaks more books than any other single thing &mdash; a flat rate that never tied to the CDTFA return, a nexus footprint nobody tracked until a notice arrived. Getting the rate-by-location and the threshold right is most of the battle.",
    "We keep the books sales-tax-ready and reconciled; your CPA files and represents. For a notice already in hand, see <a href=\"/find-an-accountant/california/state-tax-notice-help/\">California state tax notice help</a>.",
  ],
  faq: [
    { q: "What does California sales-tax help include?", a: "A Certified ProAdvisor keeps your books ready for the CDTFA: district sales-tax rates configured by customer location, economic nexus tracked against the $500,000 threshold, seller&rsquo;s-permit and exemption detail kept clean, marketplace-vs-direct sales separated, and the sales-tax liability reconciled so the return ties. We do the books; your CPA files the CDTFA return." },
    { q: "What is California&rsquo;s sales-tax rate?", a: "California&rsquo;s statewide base is 7.25% &mdash; the highest of any state &mdash; and local district taxes push the combined rate past 10.25% in some areas. Because the rate is sourced by location, the correct combined rate depends on where the sale ships or is performed, which is why a single flat statewide rate is wrong almost everywhere." },
    { q: "When do I have to collect California sales tax?", a: "If you have physical presence in California you generally collect from the start. As a remote seller, California&rsquo;s economic-nexus threshold is $500,000 in California sales in the current or prior calendar year &mdash; a sales-only threshold with no transaction count. We keep your sales-by-state picture clear; your CPA confirms when to register with the CDTFA and handles the registration." },
    { q: "Why can&rsquo;t I just use one flat California rate in QuickBooks?", a: "Because California sources sales tax by location and hundreds of city, county, and district rates overlap. A flat statewide rate under-collects in high-rate jurisdictions and over-collects in low ones, and the CDTFA return stops tying to the books. We configure QuickBooks to apply the correct combined rate by customer location." },
    { q: "Do you handle marketplace sales (Amazon, Shopify)?", a: "Yes &mdash; we separate marketplace-facilitator sales (where the platform collects and remits) from your direct sales, so you don&rsquo;t double-count or mis-report. This is one of the most common sources of California sales-tax confusion for multi-channel sellers, and we keep it clean in the books." },
    { q: "How much does California sales-tax help cost?", a: "Fixed-fee against a written scope &mdash; a one-time setup fix or an ongoing component of monthly bookkeeping. You get the exact fee in writing within 3 business days of a free file review; never open-ended hourly billing." },
    { q: "Do you file my CDTFA sales-tax return?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books sales-tax-ready and reconcile the liability, and your CPA or EA files the CDTFA return, determines nexus, registers the seller&rsquo;s permit, and represents you in any audit. We are not affiliated with Intuit Inc. and do not represent clients before the CDTFA." },
    { q: "I already got a CDTFA notice &mdash; can you help?", a: "We can reconcile the period&rsquo;s books and assemble documented figures, but the response and any representation are your CPA&rsquo;s, EA&rsquo;s, or tax attorney&rsquo;s. See our California state tax notice help page for exactly how that works &mdash; we do the books behind it; your licensed professional responds." },
  ],
  reviewProse: CA_REVIEW_PROSE,
  reviewCreds: CA_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/california/sales-tax-help/",
    name: "California Sales Tax Help (CDTFA)",
    description: "California sales-tax help — CDTFA district rates by location, economic nexus ($500K), seller's permits, and sales-tax-ready books by a Certified ProAdvisor across all 58 counties. Independent firm; does not file California sales tax or represent before the CDTFA.",
    serviceName: "California Sales Tax (CDTFA) Bookkeeping Support",
    serviceType: "Sales-tax bookkeeping and CDTFA-readiness services",
    serviceDesc: "Sales-tax-ready bookkeeping for California businesses — CDTFA district rates configured by location, economic-nexus tracking against the $500,000 threshold, seller's-permit and exemption detail, marketplace-vs-direct separation, and liability reconciliation. Independent Certified QuickBooks ProAdvisor firm; does not file CDTFA returns, determine nexus, or represent clients before the CDTFA — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" }],
    audienceType: "California small and midsize businesses, multi-channel and remote sellers needing CDTFA-ready sales-tax bookkeeping",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

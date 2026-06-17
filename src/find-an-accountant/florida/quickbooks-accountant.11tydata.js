/* /find-an-accountant/florida/quickbooks-accountant/ — FL SERVICE CHILD (money/umbrella).
 * t-bofu · partials/state-service-body.njk. v4 FL money cluster umbrella. GENUINELY FL-localized:
 * facts band = the real FL stack (no personal income tax BUT 5.5% C-corp tax; 6% + discretionary
 * county surtax sales tax; the FL commercial-rent / "business rent" sales tax). HONESTY: deferred to
 * the Florida Department of Revenue + CPA/EA; founder-name-zero; not Intuit; does not file FL returns. */
const { stripTags, buildCityGraph } = require("../../../_build/lib/city-child.js");
const FL_FACTS = [
  { fig: "5.5%", title: "No personal income tax &mdash; but a 5.5% corporate tax", body: "Florida has <strong>no state personal income tax</strong>, but <strong>C-corporations pay a 5.5% corporate income tax</strong> to the Florida Department of Revenue. Pass-throughs (S-corps, most LLCs, partnerships) generally don&rsquo;t &mdash; your entity type decides. We track the position; your CPA confirms and files." },
  { fig: "6% + surtax", title: "Sales tax &mdash; 6% state + county surtax", body: "Florida sales &amp; use tax is <strong>6% at the state level plus a discretionary county surtax</strong> that varies by county, via the <strong>Florida Department of Revenue</strong>, not the IRS. We configure it by location in QuickBooks so the return ties." },
  { fig: "Commercial rent", title: "Florida&rsquo;s commercial-rent sales tax", body: "Florida is unusual in taxing <strong>commercial real-property rent</strong> (the &ldquo;business rent tax&rdquo;) &mdash; a rate that has been stepping down and is being phased out. If you lease commercial space it&rsquo;s a real line item; the current rate and treatment change, so we track it and the DOR&rsquo;s rules and your CPA confirm." },
];
const FL_REVIEW_PROSE = "Reviewed and maintained by the accounting team at <strong>TechBrot Inc.</strong>, an independent Certified QuickBooks ProAdvisor and bookkeeping firm serving Florida businesses remotely across all 67 counties. Florida tax figures &mdash; no personal income tax, the 5.5% corporate income tax, 6% sales tax plus discretionary county surtax, the commercial-rent (business rent) tax, the tangible personal property return, and reemployment tax &mdash; reflect rules current as of the date below and are reviewed periodically against the <a href=\"https://floridarevenue.com/\" rel=\"noopener nofollow\">Florida Department of Revenue</a>. Rates and the commercial-rent phase-out change; confirm current figures with the Department and your CPA. TechBrot provides bookkeeping and QuickBooks work and coordinates with your CPA, who files; we do not file Florida returns or represent clients before the Department of Revenue.";
const FL_REVIEW_CREDS = [
  { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
  { label: "Standards", detail: "Verified vs the Florida Department of Revenue &middot; No tax-filing or representation claims (out of scope) &middot; Rates change &mdash; confirm current figures &middot; No fabricated data" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];
module.exports = {
  layout: "layouts/t-bofu.njk",
  permalink: "/find-an-accountant/florida/quickbooks-accountant/",
  slug: "fl-svc-qbaccountant",
  tierClass: "section--tier-bofu",
  bodyClass: "page--bofu",
  callBar: true,
  heroFigure: "taccount",
  title: "Florida QuickBooks Accountant & ProAdvisor · TechBrot",
  description: "Certified QuickBooks ProAdvisor & accountant for Florida businesses — bookkeeping, cleanup, payroll, 6%+surtax sales tax, the 5.5% corporate tax, commercial-rent tax, and TPP. Fixed-fee, all 67 counties. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Florida", href: "/find-an-accountant/florida/" },
    { name: "QuickBooks Accountant" },
  ],
  bookHref: "/contact/?intent=florida&state=florida&source_type=state-money&funnel_stage=MOFU",
  hero: {
    eyebrow: "Florida &middot; Certified QuickBooks ProAdvisor",
    heading: "Your Florida QuickBooks accountant &mdash; ProAdvisor expertise, Florida rules.",
    subheading: "Bookkeeping, QuickBooks setup and cleanup, payroll coordination, and 6%+surtax sales tax &mdash; delivered by a named Certified QuickBooks ProAdvisor on the same file every month, in your own QuickBooks Online or Desktop file. Fixed-fee, written scope, all 67 Florida counties. We keep the books and track the 5.5% corporate tax, commercial-rent tax, and tangible personal property; your CPA files.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-money&funnel_stage=MOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: ["Certified QuickBooks ProAdvisor team", "Independent &middot; not Intuit", "Fixed-fee &middot; written scope in 3 days"],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> is a <strong>Certified QuickBooks ProAdvisor and bookkeeping firm for Florida businesses</strong> &mdash; a named ProAdvisor manages your QuickBooks file every month: categorization and reconciliation, a clean chart of accounts, 6%+surtax sales-tax-ready books, the 5.5% corporate-tax position tracked where it applies, the commercial-rent tax watched, tangible personal property ready to file, and CPA-ready monthly statements, all in your own QuickBooks Online or Desktop file across all 67 counties. The full Florida QuickBooks accountant summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Florida tax references (no personal income tax; 5.5% corporate tax; 6% + county surtax sales tax; commercial-rent tax; TPP) reflect Florida Department of Revenue rules current as of the review date; TechBrot does not file Florida taxes.",
  },
  ctaBand: {
    eyebrow: "Florida businesses start here",
    heading: "Ready for a Florida QuickBooks accountant who stays on your file?",
    lede: "Book a free discovery call. We&rsquo;ll review your QuickBooks file, tell you honestly whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee quote within 3 business days. No pitch. Independent firm &mdash; does not file FL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=florida&state=florida&source_type=state-money&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--ghost" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },
  stateName: "Florida",
  copy: {
    aiHeading: "Florida QuickBooks accountant, in five questions.",
    valueEyebrow: "What a named ProAdvisor does for your Florida books",
    valueHeading: "Everything your books need, handled by one expert.",
    valueLede: "Every engagement is scoped to your business and delivered in your own QuickBooks file by a named Certified ProAdvisor &mdash; the same one, every month.",
    factsEyebrow: "Florida tax realities we build into your books",
    factsHeading: "Three Florida facts that change how your books are kept.",
    factsLede: "No personal income tax doesn&rsquo;t mean no obligations &mdash; these three shape how the chart of accounts, sales tax, and leases are set up from day one.",
    faqHeading: "Florida QuickBooks accountant questions.",
  },
  summary: "<strong>TechBrot</strong> is a <strong>Certified QuickBooks ProAdvisor and accountant for Florida businesses</strong> &mdash; one named ProAdvisor on your QuickBooks file every month, handling categorization and reconciliation, a clean chart of accounts, <strong>6%+surtax sales tax</strong> configured and reconciled, payroll coordination, and CPA-ready monthly statements. Florida has <strong>no state personal income tax</strong>, but <a href=\"/find-an-accountant/florida/corporate-tax-help/\">C-corporations pay a 5.5% corporate income tax</a>, the <strong>commercial-rent sales tax</strong> applies if you lease space, and the annual <strong>tangible personal property</strong> return still applies &mdash; all tracked in the books. Delivered in your own <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop file across all 67 counties, fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Independent firm &mdash; not affiliated with Intuit Inc.; we deliver the books, your CPA files.",
  aiSummary: [
    { q: "What is a Florida QuickBooks accountant?", a: "<strong>A Certified QuickBooks ProAdvisor who keeps your books in your own QuickBooks file to a Florida standard</strong> &mdash; categorization, reconciliation, a clean chart of accounts, 6%+surtax sales tax, the 5.5% corporate-tax position where it applies, the commercial-rent tax, tangible personal property ready to file, and CPA-ready statements every month. We do the books; your CPA files." },
    { q: "Does Florida have a state income tax?", a: "<strong>No personal income tax.</strong> But <strong>C-corporations pay a 5.5% corporate income tax</strong> to the Florida Department of Revenue (pass-throughs generally don&rsquo;t), there&rsquo;s <strong>6% sales tax plus a discretionary county surtax</strong>, the <strong>commercial-rent sales tax</strong> on leased space, an annual <strong>tangible personal property</strong> return, and <strong>reemployment tax</strong>. We track all of it; the Department&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "Do you work in my own QuickBooks file?", a: "Yes &mdash; your file, your data. We work in your <strong>QuickBooks Online or hosted Desktop</strong> file (no proprietary lock-in), with a named ProAdvisor on the same file every month. We can also set up or migrate the file if you need it." },
    { q: "What does it cost?", a: "Fixed-fee against a written scope, never hourly: monthly bookkeeping <strong>$400&ndash;$2,500+/mo</strong> by volume and accounts; one-time cleanup <strong>$1,500&ndash;$15,000+</strong>. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file Florida taxes?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the corporate income tax, sales tax, commercial-rent tax, and tangible personal property return. We are not affiliated with Intuit Inc." },
  ],
  value: [
    { num: "01", title: "Monthly bookkeeping &amp; close", body: "Reconciled accounts, clean categorization, and CPA-ready statements every month &mdash; with 6%+surtax sales tax and the corporate-tax position tracked.", href: "/find-an-accountant/florida/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "QuickBooks setup &amp; cleanup", body: "A Florida-correct chart of accounts, sales-tax items configured by county, and a cleanup to a CPA-ready standard when the file has fallen behind.", href: "/quickbooks/cleanup/", cta: "QuickBooks cleanup &rarr;" },
    { num: "03", title: "Sales tax, configured right", body: "QuickBooks set to the correct 6% + county surtax rate by location and reconciled so the Department of Revenue return ties.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },
    { num: "04", title: "Corporate &amp; rent tax tracked", body: "The 5.5% corporate-tax position (where it applies) and the commercial-rent tax tracked in the books so your CPA can file accurately.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },
    { num: "05", title: "Payroll coordination", body: "Florida payroll configured and coordinated with your provider &mdash; no state income-tax withholding, but federal and reemployment tax handled cleanly.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06", title: "CFO-level advisory, when ready", body: "Once the books are clean, fractional-CFO advisory &mdash; forecasting, board reporting &mdash; on the global advisory team.", href: "/accounting/advisory/fractional-cfo/", cta: "Fractional CFO &rarr;" },
  ],
  facts: FL_FACTS,
  scopeDo: [
    "Keep your QuickBooks Online or Desktop file reconciled and current every month",
    "Build and maintain a Florida-correct chart of accounts",
    "Configure 6% + county surtax sales tax by location and reconcile it",
    "Track the 5.5% corporate-tax position (where it applies) and the commercial-rent tax",
    "Keep tangible personal property records ready for the annual return",
    "Coordinate Florida payroll and reemployment tax and prepare CPA-ready statements",
  ],
  scopeDont: [
    "File the Florida corporate income tax, sales tax, or commercial-rent tax",
    "File the tangible personal property return or the reemployment tax return",
    "Represent you before the Florida Department of Revenue",
    "Provide legal or tax advice",
  ],
  process: [
    { phase: "Step 1", title: "Free file review", body: "A Certified ProAdvisor reviews your QuickBooks file and your Florida situation &mdash; sales-tax footprint, entity type, commercial leases, where the books stand &mdash; at no cost." },
    { phase: "Step 2", title: "Written fixed-fee scope", body: "Within 3 business days you get a written scope and fixed fee: cleanup, monthly bookkeeping, or both. No hourly billing." },
    { phase: "Step 3", title: "Cleanup to CPA-ready", body: "If the file needs it, we bring it to a CPA-ready standard &mdash; sales tax corrected by county, accounts reconciled, TPP organized." },
    { phase: "Step 4", title: "Monthly cadence", body: "A named ProAdvisor keeps the file clean every month and hands CPA-ready statements to your CPA, who files." },
  ],
  advisoryBody: [
    "Florida&rsquo;s no-personal-income-tax reputation hides real obligations &mdash; the 5.5% corporate tax for C-corps, 6%+surtax sales tax, the commercial-rent tax, and the annual tangible personal property return &mdash; and the value of a Florida QuickBooks accountant is keeping all of them right so your CPA can file cleanly and you can plan.",
    "That&rsquo;s why every TechBrot engagement is built on accurate books first, then extends &mdash; when you&rsquo;re ready &mdash; into <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a>, in coordination with your CPA.",
  ],
  faq: [
    { q: "What does a Florida QuickBooks accountant do?", a: "A Certified QuickBooks ProAdvisor keeps your books in your own QuickBooks file to a Florida standard &mdash; categorization and reconciliation, a clean chart of accounts, 6% + county surtax sales tax configured and reconciled, the 5.5% corporate-tax position tracked where it applies, the commercial-rent tax watched, tangible personal property ready to file, payroll coordination, and CPA-ready monthly statements. We do the books; your CPA files the returns." },
    { q: "Does Florida really have no income tax?", a: "No personal income tax &mdash; that part of the reputation is true. But it doesn&rsquo;t mean no state obligations: C-corporations pay a 5.5% corporate income tax to the Florida Department of Revenue, there&rsquo;s 6% sales tax plus a discretionary county surtax, a commercial-rent sales tax if you lease space, an annual tangible personal property return, and reemployment (unemployment) tax. We build all of it into how your books are kept; your CPA files." },
    { q: "Do you work in my existing QuickBooks file or your own software?", a: "Your file, your data. We work directly in your QuickBooks Online or hosted Desktop file rather than locking you into proprietary tooling, with a named ProAdvisor on the same file every month. If you need a new file set up or a migration from Desktop or another platform, we handle that too." },
    { q: "Do you serve my city or county?", a: "All 67 Florida counties &mdash; Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and everywhere between &mdash; delivered remotely on QuickBooks, so your location changes the county surtax rate but never the service or the named ProAdvisor on your file. Dedicated city pages exist for our largest metros." },
    { q: "How much does a Florida QuickBooks accountant cost?", a: "Fixed-fee against a written scope, never hourly. Monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. You get the exact fee in writing within 3 business days of a free discovery call." },
    { q: "Do you file my Florida sales or corporate tax?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we keep the books CPA-ready and coordinate with your CPA or EA, who files the sales tax, the 5.5% corporate income tax, the commercial-rent tax, and the tangible personal property return. We do not file returns or represent clients, and we are not affiliated with Intuit Inc." },
    { q: "Can you clean up a messy Florida QuickBooks file?", a: "Yes &mdash; it&rsquo;s a common Florida engagement, especially when sales tax was set to one rate instead of by county surtax, or commercial-rent tax and TPP were never tracked. We scope a one-time cleanup to a CPA-ready standard, then move into monthly bookkeeping so the file stays clean." },
    { q: "Are you a CPA firm?", a: "No &mdash; we&rsquo;re an independent Certified QuickBooks ProAdvisor and bookkeeping firm. The standard model is that TechBrot handles QuickBooks operations and bookkeeping while your Florida CPA handles tax filing and representation before the Department of Revenue. Most Florida clients use both; we coordinate directly with your CPA." },
  ],
  reviewProse: FL_REVIEW_PROSE,
  reviewCreds: FL_REVIEW_CREDS,
  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/florida/quickbooks-accountant/",
    name: "Florida QuickBooks Accountant & ProAdvisor",
    description: "Certified QuickBooks ProAdvisor and accountant for Florida businesses — bookkeeping, cleanup, payroll coordination, 6%+surtax sales tax, the 5.5% corporate tax, commercial-rent tax, and tangible personal property in your own QuickBooks file across all 67 counties. Independent firm; does not file Florida taxes.",
    serviceName: "Florida QuickBooks ProAdvisor & Accountant Services",
    serviceType: "QuickBooks ProAdvisor and bookkeeping services",
    serviceDesc: "Monthly bookkeeping, QuickBooks setup and cleanup, 6% + county surtax sales-tax configuration, 5.5% corporate-tax tracking, commercial-rent tax tracking, tangible personal property record-keeping, payroll and reemployment-tax coordination, and CPA-ready statements for Florida businesses across all 67 counties. Independent Certified QuickBooks ProAdvisor firm; does not file Florida tax returns — coordinates with the client's CPA or EA.",
    areaServed: [{ type: "State", name: "Florida", sameAs: "https://en.wikipedia.org/wiki/Florida" }],
    audienceType: "Florida small and midsize businesses across all 67 counties — tourism and hospitality, real estate, construction, healthcare, marine, and professional services",
    offerPrice: "400",
  },
  eleventyComputed: { pageGraph(data){ return buildCityGraph(data); } },
};

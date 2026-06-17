/* /find-an-accountant/illinois/cities/aurora/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95% personal / 7% corporate
 * income tax + the IL-unique Personal Property Replacement Tax) — the un-clonable
 * substance is Aurora's ECONOMY: Illinois' second-largest city, a Fox Valley
 * MANUFACTURING base, a growing DATA-CENTER corridor, and a notable CASINO/gaming
 * presence (Hollywood Casino Aurora). The distinctive accounting is manufacturing
 * inventory/COGS and the IL manufacturing machinery & equipment exemption, data-center
 * fixed assets, and gaming/admissions. A find-replace "Aurora"->"Chicago" reads false
 * (Aurora has no 10.25% city sales tax or Chicago lease/amusement tax; its hooks are
 * manufacturing + data centers + the casino).
 *
 * HONESTY: real facts only; PPRT rates, the MM&E exemption, gaming/admissions taxes, and
 * filings deferred to the Illinois Dept of Revenue, the Illinois Gaming Board, and the
 * CPA/EA. No fabricated stats/counts/clients. Firm-level byline. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/aurora/",
  slug: "aurora",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Aurora Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Aurora, IL businesses — fluent in manufacturing, data-center & gaming accounting, the Illinois manufacturing machinery exemption, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Aurora" },
  ],
  hero: {
    eyebrow: "Aurora &middot; Fox Valley &middot; Illinois",
    heading: "Aurora bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Aurora businesses &mdash; built around the Fox Valley manufacturing base, the data-center corridor, and the gaming economy, with Illinois&rsquo; flat income tax, the manufacturing machinery exemption, and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Aurora &amp; the Fox Valley",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Aurora businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in manufacturing and data-center accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Aurora summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Aurora &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Aurora businesses start here",
    heading: "Book an Aurora discovery call.",
    lede: "30 minutes. We review where your books stand and your Aurora context &mdash; manufacturing inventory and the machinery exemption, data-center fixed assets, gaming/admissions, the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=aurora&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Aurora",
  copy: {
    localEyebrow: "Bookkeeping built for how Aurora actually runs",
    areasEyebrow: "Across the city &amp; the Fox Valley",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Aurora verticals we know",
    servicesEyebrow: "What we do for Aurora businesses",
    faqEyebrow: "Aurora FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=aurora&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Aurora businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. As Illinois&rsquo; <strong>second-largest city</strong>, Aurora&rsquo;s economy is a Fox Valley <strong>manufacturing</strong> base, a growing <strong>data-center</strong> corridor, and a notable <strong>gaming</strong> presence. The distinctive accounting is manufacturing <strong>inventory and COGS</strong> with the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) sales-tax exemption</strong>, data-center <strong>fixed assets</strong>, and gaming/admissions. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and pass-throughs, and a combined sales tax of <strong>about 8.25%</strong>. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Aurora businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Aurora and Fox Valley businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in manufacturing, data-center, and gaming accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle manufacturing accounting in Aurora?", a: "Yes &mdash; it&rsquo;s a core Fox Valley need. Manufacturers need <strong>inventory and COGS</strong> tracked correctly, production costing, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) sales-tax exemption</strong> applied to qualifying equipment purchases. We keep the books so the exemption is claimed and margins are real; the eligibility and filings stay with your CPA." },
    { q: "What Illinois taxes affect my Aurora books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> on corporations and pass-throughs, and a combined sales tax of <strong>about 8.25%</strong> (Aurora is home-rule and spans several counties), administered by the Illinois Department of Revenue. We track all of it; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the Personal Property Replacement Tax?", a: "The <strong>PPRT</strong> is an Illinois tax on the net income of businesses &mdash; including <strong>pass-throughs</strong> that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It surprises owners who assume there&rsquo;s no entity-level Illinois tax. We track the position; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Which areas do you serve?", a: "<strong>All of Aurora</strong> &mdash; downtown and the riverfront, the manufacturing and industrial corridors, the data-center and logistics areas, and the surrounding Fox Valley (Naperville, Oswego, Montgomery) &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Aurora is Illinois&rsquo; second-largest city and an industrial one &mdash; manufacturing, data centers, and gaming &mdash; and that economy, on top of the Illinois tax stack, is what shapes its books.",
    "On the <strong>manufacturing</strong> side, Fox Valley makers need <strong>inventory and COGS</strong> done right, production and job costing, and the Illinois <strong>manufacturing machinery &amp; equipment (MM&amp;E) exemption</strong> applied to qualifying equipment so they don&rsquo;t over-pay sales/use tax. The growing <strong>data-center</strong> corridor brings heavy <strong>fixed-asset</strong> tracking and depreciation. And the <strong>gaming</strong> presence carries admissions and gaming-tax considerations a general bookkeeper never sees.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> on corporations and even pass-through entities, and a combined sales tax of <strong>about 8.25%</strong> (Aurora is home-rule and spans Kane, DuPage, Will, and Kendall counties, so the rate depends on location). We put a named bookkeeper on your file who claims the manufacturing exemption, tracks fixed assets, and keeps the PPRT position clean &mdash; with the filings left to your CPA.",
    "The result: books that reflect how an Aurora business actually runs &mdash; inventory and COGS accurate, the machinery exemption claimed, data-center assets depreciated, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "Downtown &amp; the riverfront", note: "Gaming, hospitality &amp; professional services" },
    { name: "Manufacturing &amp; industrial corridors", note: "Makers, fabrication &amp; assembly" },
    { name: "Data-center &amp; logistics areas", note: "Data centers, distribution &amp; tech infrastructure" },
    { name: "North Aurora &amp; the suburbs", note: "Small business, retail &amp; services" },
    { name: "Fox Valley (Oswego, Montgomery)", note: "Manufacturing, trades &amp; small business" },
    { name: "All of the Fox Valley", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations and even pass-through entities (partnerships, S-corps) that owe no regular Illinois income tax. It surprises pass-through owners. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "MM&amp;E + ~8.25%", desc: "Combined sales &amp; use tax of about 8.25% (Aurora is home-rule and spans several counties), administered by the IDOR &mdash; with the Illinois <strong>manufacturing machinery &amp; equipment exemption</strong> available on qualifying equipment. We track the split so the exemption is claimed; eligibility stays with your CPA." },
  ],
  taxNote: "Aurora and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates, the MM&E exemption rules, gaming/admissions taxes, and local sales-tax components change &mdash; and Aurora&rsquo;s combined rate depends on which county a location sits in &mdash; confirm any specific figure before relying on it. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, PPRT, or gaming tax returns, determine exemption eligibility, or provide legal or tax advice.",

  industries: [
    { label: "Manufacturing &amp; fabrication", href: "/accounting/industries/restaurant/", note: "inventory and COGS, production and job costing, and the Illinois manufacturing machinery &amp; equipment exemption" },
    { label: "Data centers &amp; tech infrastructure", href: "/accounting/industries/saas/", note: "heavy fixed-asset tracking and depreciation, power and capacity cost allocation, and capital-project accounting" },
    { label: "Gaming &amp; hospitality", href: "/accounting/industries/restaurant/", note: "admissions and gaming-tax considerations, high-volume POS, and tipped payroll" },
    { label: "Logistics &amp; distribution", href: "/accounting/industries/ecommerce/", note: "freight and inventory costing, fixed-asset fleets, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Construction &amp; trades", href: "/accounting/industries/professional-services/", note: "job costing, WIP, retainage, and equipment depreciation" },
    { label: "Real estate", href: "/accounting/industries/real-estate/", note: "investors, brokerages &amp; property managers &mdash; multi-entity ledgers and trust accounting" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with inventory and COGS tracked, the machinery exemption claimed, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Manufacturing / inventory cleanup", body: "Inventory and COGS drift when the books aren&rsquo;t right. We rebuild them to a CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with inventory, fixed-asset, and job-costing structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately, with the manufacturing exemption tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "On a factory floor or a data-center build, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your COGS is accurate, your machinery exemption is claimed, your fixed assets are tracked, and your PPRT position is clean. That judgment is what a named Aurora bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, exemption-eligibility, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Aurora business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Aurora and the Fox Valley, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in manufacturing, data-center, and gaming accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle manufacturing accounting?", a: "Yes &mdash; it&rsquo;s a core Aurora and Fox Valley engagement. Manufacturers need inventory and COGS tracked correctly, production and job costing, and the Illinois manufacturing machinery & equipment exemption applied to qualifying equipment purchases so they don&rsquo;t over-pay sales and use tax. We keep the books so the exemption is claimed and margins are real; the eligibility determination and filings stay with your CPA, whom we coordinate with." },
    { q: "What Illinois taxes affect my Aurora bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Aurora&rsquo;s combined sales tax is about 8.25%, but because Aurora is home-rule and spans Kane, DuPage, Will, and Kendall counties, the exact rate depends on a location&rsquo;s county. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; including partnerships, S-corporations, and other pass-throughs that owe no regular Illinois income tax &mdash; collected by the state and distributed to local governments. It commonly surprises pass-through owners who assume there&rsquo;s no entity-level Illinois tax. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Do you handle data-center and capital-heavy businesses?", a: "Yes. Data centers and capital-heavy operations need disciplined fixed-asset tracking and depreciation, capital-project accounting, and power and capacity cost allocation. We keep the books to that standard so the asset base and project costs are clean; the depreciation method and tax positions stay with your CPA, whom we coordinate with." },
    { q: "How much does an Aurora bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Manufacturers and capital-heavy businesses carry more complexity (inventory, fixed assets, exemptions), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Aurora QuickBooks file?", a: "Yes &mdash; especially for manufacturers and distributors whose inventory, COGS, or fixed-asset books drifted out of balance. We scope a one-time cleanup or catch-up to a CPA-ready standard &mdash; including rebuilding inventory and the fixed-asset register and capturing the machinery exemption &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "How do we get started in Aurora?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Aurora situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/aurora/",
    name: "Aurora Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Aurora, Illinois businesses — fluent in manufacturing, data-center, and gaming accounting, the Illinois manufacturing machinery exemption, the flat income tax, the Personal Property Replacement Tax, and ~8.25% sales tax. Fixed-fee, named bookkeeper.",
    serviceName: "Aurora Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Aurora tax-aware bookkeeping — manufacturing inventory and COGS with the machinery & equipment exemption, data-center fixed assets, gaming/admissions, Illinois' flat income tax, the Personal Property Replacement Tax, and ~8.25% sales tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns or determine exemption eligibility — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Aurora", sameAs: "https://en.wikipedia.org/wiki/Aurora,_Illinois" },
      { type: "AdministrativeArea", name: "Kane County", sameAs: "https://en.wikipedia.org/wiki/Kane_County,_Illinois" },
    ],
    audienceType: "Aurora and Fox Valley small and midsize businesses — manufacturing and fabrication, data centers and tech infrastructure, gaming and hospitality, logistics and distribution, construction and trades, and real estate",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

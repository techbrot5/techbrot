/* /find-an-accountant/illinois/cities/champaign/ — IL CITY CHILD (growth phase).
 * t-location, heroLight. Shared body: partials/city-child-body.njk.
 * GENUINELY localized. Illinois tax stack is shared (flat 4.95%/7% income tax + the
 * IL-unique Personal Property Replacement Tax) — the un-clonable substance is Champaign's
 * ECONOMY: a UNIVERSITY, RESEARCH and TECH city built around the University of Illinois
 * Urbana-Champaign (UIUC), one of the top engineering/computer-science research universities,
 * anchoring the twin cities of Champaign-Urbana. The economy is higher education (UIUC), the
 * University of Illinois Research Park and a tech/software/engineering STARTUP cluster (deep
 * CS/engineering talent and spinouts), AGTECH (precision agriculture and ag-data on central-
 * Illinois farmland with UIUC ag-research strength), healthcare (Carle/regional systems), and
 * the student economy. The distinctive accounting is tech/software startup bookkeeping (R&D
 * cost tracking, SAFE/convertible-note and equity rounds, SaaS deferred revenue and MRR/ARR
 * — records only), research-grant fund tracking, agtech company books, and university-adjacent
 * small business and student-housing/rental management (records only). A find-replace
 * "Rockford"->"Champaign" reads false (Rockford is aerospace machining; Champaign is a
 * university/research/startup town).
 *
 * HONESTY: real facts only — the IL stack above + Champaign's real economy. No R&D-credit /
 * SBIR / grant specifics asserted (deferred to the CPA). The Chicago 15% lease/"cloud" tax is
 * a CITY OF CHICAGO tax and does NOT apply in Champaign — only framed as Chicago-only for a
 * Champaign SaaS company's Chicago customers. Illinois does not tax SaaS at the state level.
 * No specific Champaign combined sales-tax % asserted (defer to IDOR/city/CPA). Student-rental
 * work is records-only — we never hold or disburse tenant funds. No startup named as a client.
 * No fabricated stats. Filings/elections deferred to the IDOR and the CPA/EA. */

const { stripTags, buildCityGraph } = require("../../../../_build/lib/city-child.js");

module.exports = {
  layout: "layouts/t-location.njk",
  permalink: "/find-an-accountant/illinois/cities/champaign/",
  slug: "champaign",
  tierClass: "section--tier-hub",
  bodyClass: "page--location",
  callBar: true,
  heroLight: true,
  title: "Champaign Bookkeeper & QuickBooks Accountant · TechBrot",
  description: "Certified QuickBooks ProAdvisor bookkeeping for Champaign, IL businesses — fluent in University of Illinois (UIUC) and Research Park tech & software startups, agtech, and healthcare, the flat income tax, and the Personal Property Replacement Tax (PPRT). Fixed-fee. Call (877) 751-5575.",
  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "Find an Accountant", href: "/find-an-accountant/" },
    { name: "Illinois", href: "/find-an-accountant/illinois/" },
    { name: "Champaign" },
  ],
  hero: {
    eyebrow: "Champaign &middot; Champaign County &middot; Illinois",
    heading: "Champaign bookkeeper &amp; QuickBooks accountant.",
    subheading: "Certified QuickBooks ProAdvisor bookkeeping for Champaign businesses &mdash; built around the University of Illinois (UIUC), the Research Park tech and software startup cluster, agtech, and healthcare, with Illinois&rsquo; flat income tax and the Personal Property Replacement Tax handled. A named bookkeeper on the same file every month, kept CPA-ready for your CPA to file.",
    actions: [
      { label: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
    trust: [
      "Certified QuickBooks ProAdvisor team",
      "Champaign &amp; Champaign County",
      "Fixed-fee &middot; written scope in 3 days",
    ],
  },
  inBrief: {
    text: "<strong>TechBrot</strong> delivers <strong>Certified QuickBooks ProAdvisor bookkeeping for Champaign businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month, fluent in tech and software startup, agtech, and research-adjacent accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax. The full Champaign summary is below.",
    source: "Reviewed by the Certified QuickBooks ProAdvisor team at TechBrot Inc., an independent firm &mdash; not affiliated with Intuit Inc. Champaign &amp; Illinois tax figures verified against the Illinois Department of Revenue.",
  },
  ctaBand: {
    eyebrow: "Champaign businesses start here",
    heading: "Book a Champaign discovery call.",
    lede: "30 minutes. We review where your books stand and your Champaign context &mdash; tech and software startup books (R&amp;D cost tracking, equity rounds, SaaS deferred revenue and MRR/ARR), research-grant fund tracking, agtech, and the flat income tax and Personal Property Replacement Tax &mdash; and recommend the right engagement. <strong>Written fixed-fee scope within 3 business days.</strong> No pitch. Independent firm &mdash; does not file IL taxes; coordinates with your CPA.",
    actions: [
      { label: "Book the discovery call", href: "/contact/?intent=illinois&state=illinois&city=champaign&source_type=city-page&funnel_stage=BOFU", class: "btn--primary" },
      { label: "Speak to a ProAdvisor", tel: true, class: "btn--ghost" },
    ],
  },

  cityName: "Champaign",
  copy: {
    localEyebrow: "Bookkeeping built for how Champaign actually runs",
    areasEyebrow: "Across Champaign-Urbana &amp; the county",
    taxEyebrow: "The Illinois taxes we build into your books",
    industriesEyebrow: "Champaign verticals we know",
    servicesEyebrow: "What we do for Champaign businesses",
    faqEyebrow: "Champaign FAQ",
  },
  advisoryCtaHref: "/contact/?intent=illinois-advisory&state=illinois&city=champaign&source_type=city-page&funnel_stage=BOFU",

  summarized: "<strong>TechBrot</strong> provides <strong>Certified QuickBooks ProAdvisor bookkeeping for Champaign businesses</strong> &mdash; monthly bookkeeping, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a>, and QuickBooks management by a named bookkeeper on the same file every month. Champaign is a <strong>university, research, and tech</strong> city built around the <strong>University of Illinois Urbana-Champaign (UIUC)</strong> &mdash; one of the top engineering and computer-science research universities &mdash; anchoring the twin cities of Champaign-Urbana. The economy runs on higher education, the <strong>University of Illinois Research Park</strong> and a <strong>tech, software, and engineering startup</strong> cluster, <strong>agtech</strong> (precision agriculture and ag-data on central-Illinois farmland), <strong>healthcare</strong>, and the student economy. The distinctive accounting is tech and software startup bookkeeping &mdash; <strong>R&amp;D cost tracking</strong>, <strong>SAFE / convertible-note and equity rounds</strong>, and <strong>SaaS deferred revenue and MRR/ARR</strong> (we keep the records; we don&rsquo;t file grant or SBIR reports) &mdash; plus research-grant fund tracking and agtech books. The Illinois stack: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> &mdash; which even pass-through startups owe &mdash; and a sales tax of 6.25% state plus Champaign County and home-rule add-ons. We build awareness of all of it into your books, keep them <a href=\"/accounting/financial-statements/\">CPA-ready</a>, and coordinate with your CPA, who files. Fixed-fee against a written scope ($400&ndash;$2,500+/mo monthly; cleanup $1,500&ndash;$15,000+). Delivered remotely on <a href=\"/quickbooks/online/\">QuickBooks Online</a> or hosted Desktop. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Illinois taxes.",

  aiSummary: [
    { q: "Who provides bookkeeping for Champaign businesses?", a: "<strong>TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Champaign and Champaign-Urbana businesses</strong> &mdash; a named bookkeeper per file, delivered remotely on QuickBooks, fluent in University of Illinois Research Park tech and software startups, agtech, and research-adjacent accounting and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle tech and software startup accounting?", a: "Yes &mdash; it&rsquo;s a defining Champaign need around UIUC and the Research Park. Software and engineering startups need <strong>R&amp;D cost tracking</strong>, clean records of <strong>SAFE / convertible-note and equity rounds</strong>, and <strong>SaaS deferred revenue with MRR/ARR</strong> reporting. We keep those books to an investor- and CPA-ready standard. We keep records only &mdash; we don&rsquo;t file grant or SBIR reports, and any R&amp;D-credit or tax position stays with your CPA." },
    { q: "What Illinois taxes affect my Champaign books?", a: "A <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax</strong> &mdash; which even pass-through startups (LLCs, partnerships, S-corps) owe &mdash; and sales tax of 6.25% state plus Champaign County and home-rule add-ons, all administered by the Illinois Department of Revenue. We track all of it; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due. Illinois doesn&rsquo;t tax SaaS at the state level." },
    { q: "Do you do research-grant and agtech bookkeeping?", a: "Yes. Research-adjacent organizations need <strong>grant and restricted-fund tracking</strong> so spending ties to each award, and Champaign&rsquo;s <strong>agtech</strong> companies &mdash; precision-agriculture and ag-data firms drawing on central-Illinois farmland and UIUC research &mdash; need software-plus-product books. We keep the fund and project records clean; we don&rsquo;t file grant, SBIR, or compliance reports, and grant terms stay with your CPA and the funder." },
    { q: "Which areas do you serve?", a: "<strong>All of Champaign and Urbana</strong> &mdash; the University of Illinois campus and the Research Park, downtown and Campustown, the medical and healthcare district, and the surrounding agricultural county &mdash; delivered remotely on QuickBooks, so your location doesn&rsquo;t change the service or the named bookkeeper on your file." },
  ],

  localContext: [
    "Champaign is a university, research, and tech city &mdash; built around the University of Illinois Urbana-Champaign (UIUC) and its Research Park &mdash; and that knowledge economy, on top of the Illinois tax stack, is what shapes its books.",
    "The defining work is <strong>tech and software startup</strong> bookkeeping. Spinouts and founders out of UIUC&rsquo;s deep computer-science and engineering talent pool need <strong>R&amp;D cost tracking</strong>, clean records of <strong>SAFE / convertible-note and equity rounds</strong>, and <strong>SaaS deferred revenue with MRR/ARR</strong> reporting that investors and a CPA can rely on. Around them sit <strong>research-grant-funded organizations</strong> needing restricted-fund tracking, <strong>agtech</strong> companies pairing software with central-Illinois precision agriculture and ag-data, a large <strong>healthcare</strong> sector (Carle and regional systems), and the university-adjacent small-business and student-housing economy.",
    "The Illinois tax stack still has to be right: a <strong>flat 4.95% personal income tax</strong> (7% corporate), the Illinois-unique <strong>Personal Property Replacement Tax (PPRT)</strong> &mdash; which even early-stage pass-through startups owe &mdash; and sales tax of 6.25% state plus Champaign County and home-rule add-ons. A general bookkeeper rarely tracks deferred revenue, an equity round, or the PPRT correctly; we put a named bookkeeper on your file who does &mdash; with the filings, elections, and any R&amp;D-credit position left to your CPA.",
    "The result: books that reflect how a Champaign business actually runs &mdash; R&amp;D and deferred revenue tracked, equity rounds and grant funds recorded cleanly, agtech product and software costs separated, the flat income tax and PPRT tracked &mdash; reconciled monthly and handed to your CPA <a href=\"/accounting/financial-statements/\">CPA-ready</a>.",
  ],

  areas: [
    { name: "University of Illinois &amp; the Research Park", note: "Tech, software &amp; engineering startups and spinouts" },
    { name: "Downtown &amp; Campustown", note: "Professional services, retail &amp; the student economy" },
    { name: "Urbana &amp; the twin-cities core", note: "Research-adjacent organizations &amp; small business" },
    { name: "Medical &amp; healthcare district", note: "Carle and regional clinics &amp; provider practices" },
    { name: "Surrounding Champaign County", note: "Agtech, agriculture &amp; ag-data businesses" },
    { name: "All of Champaign-Urbana", note: "Delivered remotely on QuickBooks &mdash; location doesn&rsquo;t change the service" },
  ],

  taxStack: [
    { figure: "Flat 4.95%", desc: "Illinois has a <strong>flat 4.95% personal income tax</strong> and a 7% corporate income tax &mdash; no brackets &mdash; administered by the Illinois Department of Revenue. We track the position; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { figure: "PPRT", desc: "Illinois <strong>Personal Property Replacement Tax</strong> &mdash; an additional tax on the net income of corporations (2.5%) and even pass-through entities (1.5% &mdash; partnerships, S-corps). Early-stage Champaign startups and pass-throughs owe it even when they owe no regular Illinois income tax. We track the position; the rate and filing stay with the IDOR and your CPA." },
    { figure: "6.25% + local", desc: "Illinois sales &amp; use tax starts at <strong>6.25% state</strong>, with Champaign County and home-rule add-ons on top &mdash; we don&rsquo;t assert a specific combined figure. Illinois doesn&rsquo;t tax SaaS at the state level. We track exempt vs taxable sales; the rate and any nexus position stay with the IDOR and your CPA." },
  ],
  taxNote: "Champaign and Illinois tax figures are educational and current as of the review date, verified against the Illinois Department of Revenue. The income-tax and PPRT rates and local sales-tax components change &mdash; confirm any specific figure before relying on it. The combined Champaign sales-tax rate is set by the state, Champaign County, and home rule; we don&rsquo;t assert a single figure. The City of Chicago&rsquo;s lease/&ldquo;cloud&rdquo; tax is a Chicago-only municipal tax and does not apply in Champaign; it would only touch a Champaign SaaS company through its Chicago customers. TechBrot provides bookkeeping and coordinates with your CPA, who files; we do not file Illinois income, sales, or PPRT returns, make the PTE election, determine R&amp;D-credit or grant eligibility, file grant or SBIR reports, hold or disburse tenant funds, or provide legal or tax advice.",

  industries: [
    { label: "Tech &amp; software startups", href: "/accounting/industries/saas/", note: "R&amp;D cost tracking, SAFE / convertible-note and equity-round records, SaaS deferred revenue and MRR/ARR" },
    { label: "Research-grant-funded organizations", href: "/accounting/industries/professional-services/", note: "restricted-fund and project tracking so spending ties to each award &mdash; records only, not grant filing" },
    { label: "Agtech &amp; ag-data", href: "/accounting/industries/ecommerce/", note: "software-plus-product books, precision-agriculture costing, and multi-state <a href=\"/glossary/sales-tax-nexus/\">nexus</a>" },
    { label: "Healthcare &amp; clinics", href: "/accounting/industries/professional-services/", note: "practice bookkeeping, payer reconciliation, and provider payroll" },
    { label: "University-adjacent professional services", href: "/accounting/industries/professional-services/", note: "consultancies, agencies &amp; firms &mdash; clean revenue recognition and owner pay" },
    { label: "Student housing &amp; rentals", href: "/accounting/industries/real-estate/", note: "investors &amp; property managers &mdash; multi-property ledgers (records only; we never hold tenant funds)" },
  ],

  services: [
    { num: "01", title: "Monthly bookkeeping", body: "Reconciled accounts, a clean chart of accounts, and monthly statements &mdash; with R&amp;D and deferred revenue tracked, MRR/ARR reported, and sales tax reconciled.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Monthly bookkeeping &rarr;" },
    { num: "02", title: "Startup / SaaS book cleanup", body: "Deferred revenue, equity-round entries, and grant funds when the books aren&rsquo;t right. We rebuild them to an investor- and CPA-ready standard, then keep it clean.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { num: "03", title: "QuickBooks management", body: "Setup, cleanup, and ongoing management in QuickBooks Online or hosted Desktop &mdash; with deferred-revenue, equity, and restricted-fund structure where needed.", href: "/quickbooks/online/", cta: "QuickBooks Online &rarr;" },
    { num: "04", title: "Sales- &amp; PPRT-ready books", body: "Books structured so your CPA can file the Illinois income tax, PPRT, and sales tax accurately, with deferred revenue and any nexus tracked.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance &rarr;" },
  ],

  advisoryBody: "For a Champaign startup, the value isn&rsquo;t categorizing a transaction &mdash; it&rsquo;s knowing your runway, your MRR/ARR and burn are accurate, your equity round and deferred revenue are recorded cleanly, and your PPRT position is clean. That judgment is what a named Champaign bookkeeper brings, and what <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> extends once the books are clean.",

  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified ProAdvisor team &middot; 40+ years combined operational accounting experience" },
    { label: "Standards", detail: "Verified vs the Illinois Department of Revenue &middot; No tax-filing, PTE-election, R&amp;D-credit/grant-eligibility, grant/SBIR-filing, or representation claims (out of scope) &middot; Reviewed periodically &middot; No fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  faq: [
    { q: "Do you have a bookkeeper for my Champaign business?", a: "Yes. TechBrot provides Certified QuickBooks ProAdvisor bookkeeping for Champaign and Champaign-Urbana, delivered remotely on QuickBooks Online or hosted Desktop, by a named bookkeeper on the same file every month &mdash; with fluency in University of Illinois Research Park tech and software startups, agtech, research-adjacent organizations, and healthcare, and Illinois&rsquo; flat income tax and Personal Property Replacement Tax." },
    { q: "Do you handle tech and software startup accounting?", a: "Yes &mdash; it&rsquo;s a defining Champaign engagement around UIUC and the Research Park. Software and engineering startups need R&amp;D cost tracking, clean records of SAFE / convertible-note and equity rounds, and SaaS deferred revenue with MRR/ARR reporting that investors and a CPA can rely on. We keep those books in QuickBooks to that standard. We keep records only &mdash; we don&rsquo;t file grant or SBIR reports, and any R&amp;D-credit or tax position stays with your CPA, whom we coordinate with." },
    { q: "What Illinois taxes affect my Champaign bookkeeping?", a: "Illinois charges a flat 4.95% personal income tax (7% corporate) and the Personal Property Replacement Tax on corporations and pass-throughs. Champaign sales tax is 6.25% state plus Champaign County and home-rule add-ons &mdash; we don&rsquo;t assert a single combined figure. Illinois doesn&rsquo;t tax SaaS at the state level. We build all of it into how your books are kept; the IDOR&rsquo;s rules and your CPA confirm what&rsquo;s due." },
    { q: "What is the Illinois Personal Property Replacement Tax (PPRT)?", a: "The PPRT is an Illinois tax on the net income of businesses &mdash; corporations at 2.5% and pass-throughs (partnerships, S-corporations, many LLCs) at 1.5% &mdash; collected by the state and distributed to local governments. It commonly surprises Champaign startup founders, because even an early-stage pass-through that owes no regular Illinois income tax can still owe the PPRT. We track the position in your books; the rate and filing stay with the Illinois Department of Revenue and your CPA." },
    { q: "Do you do research-grant and agtech bookkeeping?", a: "Yes. Research-adjacent organizations need restricted-fund and project tracking so every dollar of spending ties to the right award, and Champaign&rsquo;s agtech companies &mdash; precision-agriculture and ag-data firms built on central-Illinois farmland and UIUC research &mdash; need books that separate software costs from product. We keep the fund and project records clean and CPA-ready. We keep records only &mdash; we don&rsquo;t file grant, SBIR, or compliance reports, and grant terms and eligibility stay with the funder and your CPA." },
    { q: "Does the Chicago SaaS / “cloud” tax apply to my Champaign company?", a: "No. The 15% lease/&ldquo;cloud&rdquo; tax you may have heard about is a City of Chicago municipal tax &mdash; it does not apply in Champaign. Illinois also doesn&rsquo;t tax SaaS at the state level. The only way it would touch a Champaign SaaS company is through customers located in Chicago, where that city tax can attach. We flag where your customer locations may matter; the determination stays with the IDOR, the City of Chicago, and your CPA." },
    { q: "How much does a Champaign bookkeeper cost?", a: "TechBrot quotes fixed monthly fees against a written scope &mdash; not hourly. Ongoing monthly bookkeeping runs $400&ndash;$2,500+/mo depending on transaction volume and accounts; one-time cleanup runs $1,500&ndash;$15,000+. Startups and agtech businesses carry more complexity (deferred revenue, equity rounds, restricted funds), which we scope transparently before any work begins." },
    { q: "Can you clean up a messy Champaign QuickBooks file?", a: "Yes &mdash; especially for startups whose deferred revenue, equity-round entries, or grant funds drifted out of balance. We scope a one-time cleanup or catch-up to an investor- and CPA-ready standard &mdash; including rebuilding deferred revenue, MRR/ARR, and restricted-fund tracking &mdash; then move into monthly bookkeeping so the file stays clean." },
    { q: "Do you handle student-housing and rental property books?", a: "Yes, on a records-only basis. For investors and managers of student housing near campus we keep multi-property ledgers, reconcile income and expenses, and produce CPA-ready statements. We never hold, receive, or disburse tenant funds or security deposits &mdash; that money stays in your own or your property manager&rsquo;s trust account; we keep the books that reflect it." },
    { q: "Do you file my Illinois taxes?", a: "No. TechBrot is an independent bookkeeping and QuickBooks firm &mdash; not affiliated with Intuit Inc. We keep your books accurate and CPA-ready and track your Illinois positions (the flat income tax, the PPRT, and sales tax), but we do not file Illinois income, sales, or PPRT returns, make the PTE election, determine R&amp;D-credit or grant eligibility, or represent you before the IDOR. Your CPA or EA files and elects; we coordinate with them." },
    { q: "How do we get started in Champaign?", a: "Book a free discovery call. We&rsquo;ll review your QuickBooks file and your Champaign situation, identify whether you need cleanup, monthly bookkeeping, or both, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts on your file as soon as you approve the scope." },
  ],

  cityMeta: {
    url: "https://techbrot.com/find-an-accountant/illinois/cities/champaign/",
    name: "Champaign Bookkeeper & QuickBooks Accountant",
    description: "Certified QuickBooks ProAdvisor bookkeeping for Champaign, Illinois businesses — fluent in University of Illinois (UIUC) and Research Park tech & software startups, agtech, research-adjacent organizations, and healthcare, the flat income tax, and the Personal Property Replacement Tax. Fixed-fee, named bookkeeper.",
    serviceName: "Champaign Bookkeeping & QuickBooks Services",
    serviceType: "Bookkeeping and QuickBooks ProAdvisor services",
    serviceDesc: "Monthly bookkeeping, cleanup, QuickBooks management, and Champaign tax-aware bookkeeping — tech and software startup books (R&D cost tracking, SAFE/convertible-note and equity-round records, SaaS deferred revenue and MRR/ARR), research-grant restricted-fund tracking, agtech and ag-data books, student-housing rental ledgers (records only), Illinois' flat income tax, the Personal Property Replacement Tax, and 6.25%-plus-local sales tax handled. CPA-ready statements monthly. Independent Certified QuickBooks ProAdvisor firm; does not file Illinois returns, make the PTE election, determine R&D-credit or grant eligibility, file grant or SBIR reports, or hold tenant funds — coordinates with the client's CPA or EA.",
    areaServed: [
      { type: "City", name: "Champaign", sameAs: "https://en.wikipedia.org/wiki/Champaign,_Illinois" },
      { type: "AdministrativeArea", name: "Champaign County", sameAs: "https://en.wikipedia.org/wiki/Champaign_County,_Illinois" },
    ],
    audienceType: "Champaign and Champaign-Urbana small and midsize businesses — University of Illinois Research Park tech and software startups, agtech, research-grant-funded organizations, university-adjacent small business, student housing, and healthcare",
    offerPrice: "400",
  },

  eleventyComputed: {
    pageGraph(data){ return buildCityGraph(data); },
  },
};

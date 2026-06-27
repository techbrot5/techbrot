/* /find-an-accountant/colorado/small-business-accountant/ — t-money CO SERVICE child. NEW page.
 * Structure mirrors the proven AZ/GA/OH/MD/PA/NJ/MI/TN/WA small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * COLORADO LOCALIZATION (per CO-FACTS.md — the ONLY source for CO figures): Washington's no-income-tax / B&O /
 * capital-gains framing replaced with Colorado — Colorado HAS an income tax (a FLAT 4.40% for 2025, individual and
 * corporate, subject to a temporary TABOR-surplus reduction in some years — it was temporarily 4.25% for 2024), so
 * payroll DOES carry COLORADO STATE INCOME-TAX WITHHOLDING (federal + FICA + SUTA + CO state withholding). The
 * CO-distinct headline (the standout hook, analogous to WA's B&O / AZ's TPT): the HOME-RULE SELF-COLLECTING CITY
 * SALES TAX — the most fragmented sales-tax system in the US. The STATE sales rate is just 2.9%, but counties,
 * cities, and special districts (RTD, etc.) stack on top, so the combined rate commonly lands ~7–9%+ by location
 * (kept qualitative — link the DOR lookup). ~70+ HOME-RULE cities are SELF-COLLECTING (Denver, Colorado Springs,
 * Aurora, Boulder, Fort Collins, Lakewood, and more) — their OWN rules, returns, and registration separate from
 * the state; many participate in the state's SUTS (Sales & Use Tax System) single-return portal, but NOT all, so
 * some still require a separate return. Colorado is DESTINATION-SOURCED (since Oct 1, 2022). The RETAIL DELIVERY
 * FEE (RDF): a per-retail-delivery fee of $0.28 for July 2025–June 2026, indexed each July; qualifying small/new
 * businesses are exempt. The SALT PARITY ACT PTE election (SB22-124) lets a partnership/S-corp elect to pay CO tax
 * at the entity level — advisory/coordination only (the CPA elects and files; we keep the books PTE-ready). Metros
 * Denver/Colorado Springs/Aurora/Fort Collins/Lakewood/Boulder/Pueblo/Greeley; 64 counties, Front-Range-centric;
 * Denver/Boulder tech & startups, Colorado Springs aerospace/defense, Front Range construction/real estate, Weld
 * County energy/oil & gas. NO street address (areaServed-only — all states are areaServed-only (no street address)). Pricing uses
 * ONLY canonical CO figures (monthly from $400/mo; cleanup from $1,200; setup from $750). DO NOT call the
 * home-rule sales tax a single statewide rate.
 *
 * ROUTING (CO is a CORE state — 6 essentials only): cross-links go ONLY to the 5 CO siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/colorado/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file CO/federal returns,
 * the state or home-rule city sales/use-tax returns, the retail delivery fee return, the income tax, or the PTE
 * election, and does NOT represent before tax authorities; the client's CPA/EA files. No founder/personal name in
 * visible content. The flat 4.40% income tax (2025; TABOR caveat — so CO state withholding on payroll), the 2.9%
 * state sales tax, the home-rule self-collecting cities + SUTS + destination sourcing, the RDF ($0.28 for Jul
 * 2025–Jun 2026, indexed), and the SALT Parity PTE are VERIFIED and stated; specific combined/city sales-tax rates
 * and the next-year RDF amount framed qualitatively. provider = #organization; areaServed = State Colorado
 * (sameAs Colorado); reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Colorado small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/colorado/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/colorado/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">sales-tax tracking</a> at the correct combined rate by location (the 2.9% state rate plus county, city, and special-district layers, destination-sourced), and <a href=\"/quickbooks/payroll/\">payroll with Colorado state income-tax withholding</a> &mdash; because Colorado has a flat 4.40% income tax &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; and so the <strong>sales and use tax behind the home-rule self-collecting cities</strong> is tracked correctly, with the <strong>~70+ home-rule cities</strong> that administer their own returns and registration handled (many via the state&rsquo;s <strong>SUTS</strong> portal, some separately), and the <strong>retail delivery fee</strong> applied on qualifying deliveries. If you run a <strong>technology, aerospace, construction, or professional-services operation</strong>, we keep payer reconciliation, job and standard costing, inventory, WIP, and per-location books clean; if you have <strong>employees</strong>, we configure payroll with <strong>Colorado state income-tax withholding</strong> &mdash; Colorado has a flat 4.40% income tax (for 2025; some years see a temporary TABOR-surplus reduction) &mdash; and we charge the <strong>combined sales and use tax</strong> at the right rate by location. Your CPA files your returns, makes the <strong>SALT Parity PTE</strong> election where it fits, and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file federal returns, the state or home-rule city sales/use-tax returns, the retail delivery fee return, the income tax, or the PTE election, and we don&rsquo;t represent you before the Colorado Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 64 Colorado counties &mdash; from Denver and Boulder&rsquo;s tech and startup economy to Colorado Springs aerospace and defense, Aurora, Fort Collins, Lakewood, Pueblo, and Greeley &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Colorado small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Colorado small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the sales &amp; use tax configured at the correct combined rate by location (the 2.9% state rate plus county, city, and special-district layers, destination-sourced) with any home-rule self-collecting cities registered, the retail delivery fee handled on qualifying deliveries, and payroll set up correctly &mdash; Colorado has a flat 4.40% income tax, so payroll carries Colorado state withholding &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/colorado/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the sales &amp; use tax at the combined rate by location, the home-rule self-collecting cities tracked to their own returns, the retail delivery fee on qualifying deliveries, and correct payroll with Colorado state withholding." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Colorado small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its CO cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the sales-tax items configured for the combined rate by location (with any home-rule self-collecting cities registered) plus Colorado state-withholding payroll set from the start.", href: "/find-an-accountant/colorado/quickbooks-setup/", cta: "Colorado QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/colorado/bookkeeping-services/", cta: "Colorado bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing a single sales-tax rate that missed the destination-based county, city, and special-district layers or a home-rule city that needed its own return, and untangling a tangled equity section, then reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/colorado/quickbooks-cleanup/", cta: "Colorado cleanup &rarr;" },
    { num: "04 &middot; CO tax &amp; payroll", title: "Sales tax, home-rule &amp; payroll", body: "The sales &amp; use tax configured at the correct combined rate by location (the 2.9% state rate plus county, city, and special-district layers, destination-sourced), the home-rule self-collecting cities tracked to their own returns and registration (many filed through the state&rsquo;s SUTS portal, some separately), the retail delivery fee applied on qualifying deliveries, and payroll set up with Colorado state income-tax withholding (Colorado has a flat 4.40% income tax) &mdash; so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "CO payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTE-ready (entity-level books kept so the SALT Parity election is straightforward), with the sales &amp; use tax sub-reconciled by location and home-rule city &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/colorado/", cta: "Colorado overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales &amp; use tax at the combined rate by location (2.9% state + county/city/special-district, destination-sourced)",
      "Home-rule self-collecting cities tracked to their own returns &amp; registration (SUTS or separate)",
      "Retail delivery fee tracked on qualifying deliveries",
      "Payroll with Colorado state income-tax withholding; multi-state set per work state",
      "PTE-ready, entity-level books for the SALT Parity election",
      "Payer reconciliation, job costing, inventory, WIP &amp; per-location books",
      "Year-end handoff to your CPA &mdash; sales &amp; use tax and equity sub-reconciled",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Colorado &amp; federal returns",
      "Files the state &amp; home-rule city sales/use-tax returns",
      "Files the retail delivery fee return",
      "Makes the SALT Parity PTE election &amp; files it",
      "Represents you before the Colorado Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Colorado founder their margins are slipping, their owner draws are outrunning profit, which home-rule cities a new sales channel triggers registration in, or whether a partnership or S-corp should make the SALT Parity PTE election. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the sales &amp; use tax at the combined rate by location, the home-rule self-collecting cities (SUTS or separate returns), the retail delivery fee, PTE-ready books, Colorado state-withholding payroll, job costing &middot; income-tax filing and the PTE election coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Colorado-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Colorado small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Colorado small business?", a: "Most Colorado small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Colorado?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (which in Colorado carries Colorado state income-tax withholding, because Colorado has a flat 4.40% income tax for 2025, subject to a temporary TABOR-surplus reduction in some years), tracking the sales &amp; use tax at the combined rate by location (the 2.9% state rate plus county, city, and special-district layers, destination-sourced) including the home-rule self-collecting cities and the retail delivery fee, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Colorado?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Colorado — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and the sales &amp; use tax configured at the correct combined rate by location (the 2.9% state rate plus county, city, and special-district layers, destination-sourced) &mdash; with any home-rule self-collecting cities registered to their own returns, and the retail delivery fee handled &mdash; along with payroll set up correctly, since Colorado has a flat 4.40% income tax and payroll carries Colorado state withholding, from day one. We handle the setup and ongoing books; your CPA or attorney handles entity filing and the state and home-rule sales-tax registrations. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Colorado engagements, especially for Denver and Boulder technology and SaaS firms that triggered registration in several home-rule self-collecting cities, multi-location retailers charging a single sales-tax rate instead of the destination-based combined rate, and contractors whose equity sections tangled as they scaled along the Front Range. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, fixing a single sales-tax rate that missed the local layers, registering and tracking each home-rule city to its own return, and cleaning the equity section &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and home-rule tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Colorado, federal, sales/use-tax, home-rule city, retail delivery fee, and payroll returns, makes the SALT Parity PTE election, and represents you before the Colorado Department of Revenue. Most Colorado small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/colorado/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Colorado Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Colorado small businesses across all 64 counties, coordinated with your CPA — the day-to-day financial backbone, with the home-rule self-collecting city sales tax charged correctly by location (2.9% state plus county, city, and special-district layers, destination-sourced) including the ~70+ self-collecting cities and the SUTS portal, the retail delivery fee, the flat 4.40% income tax (2025) so payroll carries Colorado state withholding, and PTE-ready books for the SALT Parity election.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/colorado-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#co-svc-smb-summary","#co-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Colorado","item":"https://techbrot.com/find-an-accountant/colorado/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Colorado Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the sales & use tax configured at the correct combined rate by location (2.9% state plus county, city, and special-district layers, destination-sourced) including the home-rule self-collecting cities tracked to their own returns (SUTS or separate), the retail delivery fee on qualifying deliveries, Colorado state-withholding payroll setup (flat 4.40% income tax), and PTE-ready books for the SALT Parity election for Colorado small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Colorado or federal tax returns, the state or home-rule city sales/use-tax returns, the retail delivery fee return, the income tax, or the PTE election, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Colorado","sameAs":"https://en.wikipedia.org/wiki/Colorado"},
          "audience":{"@type":"BusinessAudience","name":"Colorado small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/georgia/small-business-accountant/ — t-money GA SERVICE child. NEW page.
 * Structure mirrors the proven OH/MD/PA/NJ/MI small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * GEORGIA LOCALIZATION (per GA-FACTS.md — the ONLY source for GA figures): Michigan's city income tax /
 * 24-city work-location withholding / IL-IN-KY-MN-OH-WI reciprocity / 6% CIT / flat 6% no-local sales tax
 * replaced with Georgia — a FLAT 4.99% individual income tax for 2026 (HB 1437 (2022) made GA flat; HB 463
 * lowered it from 5.19%; larger standard deduction $32k MFJ / $16k single); a FLAT 4.99% corporate income
 * tax tracking the individual rate, PLUS the corporate NET WORTH TAX — Georgia's distinct franchise-style
 * business tax: $0 for net worth of $100,000 or less (still files), graduated to a $5,000 maximum over $22
 * million, filed with the income-tax return (Form 600); the elective Pass-Through Entity (PTE) tax at 4.99%
 * (HB 149, a SALT-cap workaround; CPA elects and files); the 4% STATE sales and use tax PLUS county
 * LOCAL-OPTION add-ons (LOST/SPLOST/ELOST/TSPLOST, Atlanta's MOST), so the COMBINED rate varies by
 * jurisdiction (commonly ~7%-8%) and changes quarterly — QuickBooks must apply the correct combined rate by
 * location; and the deliberate GA differentiation — NO local or city income tax (state-only withholding) BUT
 * NO reciprocity with any state, so a nonresident working in Georgia is generally withheld for Georgia on the
 * Georgia-source wages (matters for multi-state/remote employers). Metros Atlanta/Savannah/Augusta/Columbus/
 * Macon/Athens/Marietta/Alpharetta; all 159 counties; logistics (Port of Savannah, Hartsfield-Jackson) +
 * Atlanta fintech "Transaction Alley" + film; NO street address (areaServed-only — no state carries a
 * street address). Pricing uses ONLY canonical GA figures (monthly from $400/mo; cleanup from $1,200; setup from $750).
 *
 * ROUTING (GA is a CORE state — 6 essentials only): cross-links go ONLY to the 5 GA siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/georgia/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file GA/federal
 * income-tax returns, the corporate income tax, the net worth tax, the individual income tax, the sales-tax
 * return, or the pass-through entity (PTE) election, and does NOT represent before tax authorities; the
 * client's CPA/EA files. No founder/personal name in visible content. The flat 4.99% rate, the 4% state
 * sales tax, and the net-worth-tax $100k/$5,000/$22M thresholds are VERIFIED and stated; combined
 * jurisdiction sales-tax rates are framed qualitatively (~7-8%). provider = #organization; areaServed =
 * State Georgia; reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Georgia small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/georgia/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/georgia/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">local-option sales-tax tracking</a> (4% state plus county add-ons, combined ~7&ndash;8%), and <a href=\"/quickbooks/payroll/\">state withholding on all Georgia-source wages</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>PTE-ready</strong> for pass-throughs weighing Georgia&rsquo;s pass-through entity election at the flat 4.99% rate. If you run a <strong>manufacturing, logistics, construction, or professional-services operation</strong>, we keep job-costing, inventory, landed cost, and per-location books clean; if you have <strong>employees</strong>, we configure <strong>state-only withholding</strong> &mdash; Georgia has <strong>no local income tax but no reciprocity</strong>, so all Georgia-source wages are withheld for Georgia and multi-state staff are set per work state &mdash; and track the <strong>4% state sales tax plus county local-option add-ons</strong> (LOST/SPLOST/ELOST/TSPLOST) by jurisdiction, with the balance sheet kept <strong>net-worth-tax-ready</strong> for Form 600. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the corporate income tax, the net worth tax, the individual income tax, the sales-tax return, or the pass-through entity (PTE) election, and we don&rsquo;t represent you before the Georgia Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 159 Georgia counties &mdash; from metro Atlanta&rsquo;s fintech, logistics, and film economy and the Port of Savannah to Augusta, Columbus, Macon, Athens, Marietta, and Alpharetta &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Georgia small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Georgia small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the 4% state sales tax plus county local-option add-ons (combined ~7&ndash;8%) configured by jurisdiction, and state-only payroll withholding set up correctly &mdash; Georgia has no local income tax but no reciprocity, so all Georgia-source wages are withheld for Georgia &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the local-option sales tax by jurisdiction, multi-state withholding with no reciprocity assumptions, a clean equity section, and net-worth-tax and PTE readiness for the entity-level election." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Georgia small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its GA cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the 4% Georgia sales tax with the county local-option add-ons configured by jurisdiction and state payroll withholding set from the start.", href: "/find-an-accountant/georgia/quickbooks-setup/", cta: "Georgia QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/georgia/bookkeeping-services/", cta: "Georgia bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing wrong sales-tax jurisdictions, and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/georgia/quickbooks-cleanup/", cta: "Georgia cleanup &rarr;" },
    { num: "04 &middot; GA payroll &amp; tax", title: "Sales tax, withholding &amp; net worth tax", body: "The 4% state sales tax plus county local-option add-ons (LOST/SPLOST/ELOST/TSPLOST, combined ~7&ndash;8%) configured by jurisdiction, state-only payroll withholding set per work state (Georgia has no reciprocity, so all Georgia-source wages are withheld for Georgia), and the balance sheet kept net-worth-tax-ready, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "GA payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTE-ready for pass-throughs weighing the 4.99% entity-level election, with the equity section kept Form 600-ready for the corporate net worth tax and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/georgia/", cta: "Georgia overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "4% state + county local-option sales tax by jurisdiction (~7&ndash;8%)",
      "State-only withholding &mdash; all Georgia-source wages (no reciprocity)",
      "Multi-state payroll set per work state for remote staff",
      "Job costing, inventory &amp; per-location books &middot; net-worth-tax- and PTE-ready",
      "Year-end handoff to your CPA &mdash; Form 600-ready",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Georgia &amp; federal income-tax returns",
      "Files the corporate income tax, the net worth tax (Form 600) &amp; the sales-tax return",
      "Files the individual income tax &amp; makes the pass-through entity (PTE) election",
      "Represents you before the Georgia Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Georgia founder their margins are slipping, their owner draws are outrunning profit, that a new shipping lane just triggered sales-tax nexus in more jurisdictions &mdash; each with its own combined local-option rate &mdash; that their net worth has crossed onto the franchise-tax schedule, or that their pass-through should weigh the 4.99% entity-level PTE election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, net-worth-tax, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the 4% state + local-option sales tax by jurisdiction, state-only withholding (no reciprocity), net-worth-tax- and PTE-ready books, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Georgia-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Georgia small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Georgia small business?", a: "Most Georgia small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Georgia?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including state-only withholding &mdash; Georgia has no local income tax, but no reciprocity either, so all Georgia-source wages are withheld for Georgia), tracking the 4% state sales tax plus the county local-option add-ons (LOST/SPLOST/ELOST/TSPLOST, combined ~7&ndash;8%), and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Georgia?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Georgia — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Georgia sales-tax tracking (the 4% state rate plus the county local-option add-ons, so the combined rate runs ~7&ndash;8% and is set by jurisdiction) along with state payroll withholding configured correctly &mdash; Georgia has no local income tax but no reciprocity, so all Georgia-source wages are withheld for Georgia &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Georgia engagements, especially for metro-Atlanta professional-services and fintech firms, Savannah-area distributors weighing the net worth tax, and logistics operators riding cross-border growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong sales-tax jurisdictions and a messy equity section &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and state-withholding tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Georgia, federal, corporate income tax, net worth tax (Form 600), individual income, payroll, and sales-tax returns and makes the pass-through entity (PTE) election, and represents you before the Georgia Department of Revenue. Most Georgia small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/georgia/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Georgia Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Georgia small businesses across all 159 counties, coordinated with your CPA — the day-to-day financial backbone, with the 4% state sales tax plus county local-option add-ons (LOST/SPLOST/ELOST/TSPLOST, combined ~7-8%), the flat 4.99% income tax for 2026, the corporate net worth tax kept Form 600-ready, and state-only withholding on all Georgia-source wages (no reciprocity).","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/georgia-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ga-svc-smb-summary","#ga-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Georgia","item":"https://techbrot.com/find-an-accountant/georgia/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Georgia Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the 4% state sales tax plus county local-option add-ons (LOST/SPLOST/ELOST/TSPLOST, combined ~7-8% by jurisdiction), corporate net worth tax and PTE readiness, and state-only withholding on all Georgia-source wages (no reciprocity) for Georgia small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Georgia or federal tax returns, the corporate income tax, the net worth tax, the individual income tax, the sales-tax return, or the pass-through entity (PTE) election, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Georgia","sameAs":"https://en.wikipedia.org/wiki/Georgia_(U.S._state)"},
          "audience":{"@type":"BusinessAudience","name":"Georgia small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

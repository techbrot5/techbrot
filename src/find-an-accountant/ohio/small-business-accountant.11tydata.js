/* /find-an-accountant/ohio/small-business-accountant/ — t-money OH SERVICE child. NEW page.
 * Structure mirrors the proven MD/PA/NJ small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * OHIO LOCALIZATION (per OH-FACTS.md — the ONLY source for OH figures): Maryland's piggyback/MW507/
 * 6%+3% IT-data sales tax / DC-PA-VA-WV reciprocity stack replaced with Ohio — a low state income tax
 * (first $26,050 exempt; under 3% and on a legislated path to ZERO by 2030 under HB96 2025; framed
 * qualitatively, never a fixed 2026 figure); NO corporate income tax — the Commercial Activity Tax (CAT),
 * a gross-receipts tax (2026 exclusion $6,000,000; 0.26% above); the municipal income tax — Ohio's distinct
 * hook: 649 cities + 199 school districts, withheld by WORK LOCATION (~1%-3%, kept qualitative), the 20-day
 * occasional-entrant rule, collected by RITA / CCA / self-administered cities that read the rules differently,
 * plus a residence-based school-district layer; IN/PA/MI/KY/WV reciprocity (Form IT 4NR) for STATE tax only —
 * the municipal tax still applies; the IT 4738 PTE election as the advisory hook; and a 5.75% state sales tax
 * plus a county/transit rate (combined ~6.5%-8.0%, highest in Cuyahoga/Cleveland + Franklin/Columbus). Metros
 * Columbus/Cleveland/Cincinnati/Toledo/Akron/Dayton/Canton/Youngstown; all 88 counties; borders IN/MI/PA/WV/KY;
 * NO street address (areaServed-only — all states are areaServed-only (no street address)). Pricing uses ONLY canonical OH
 * figures (monthly from $400/mo; cleanup from $1,200; setup from $750).
 *
 * ROUTING (OH is a CORE state — only 6 pages): cross-links go ONLY to the 4 OH siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant).
 * NEVER link a /find-an-accountant/ohio/<x>/ path outside the 4 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file OH/federal
 * income-tax returns, the Commercial Activity Tax, the state income tax, the municipal or school-district
 * income-tax filings, the sales-tax return, or the IT 4738 PTE return, and does NOT represent before tax
 * authorities; the client's CPA/EA files. No founder/personal name in visible content. The state income-tax
 * rate is framed qualitatively (low / under 3% / zero by 2030); specific municipal and county rates are framed
 * qualitatively. provider = #organization; areaServed = State Ohio; reviewedBy #david-westgate on the WebPage.
 * NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Ohio small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/ohio/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/ohio/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">county-by-county sales-tax tracking</a>, and the <a href=\"/quickbooks/payroll/\">municipal income tax withheld by work location across 649 cities and 199 school districts (RITA/CCA and the 20-day rule)</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>PTE-ready</strong> for pass-throughs weighing the Ohio IT 4738 entity-level election. If you run a <strong>manufacturing, logistics, construction, or professional-services operation</strong>, we keep job-costing, inventory, and per-location books clean; if you have <strong>employees</strong>, we configure the <strong>municipal income tax</strong> by each employee&rsquo;s <strong>work location</strong> (with the 20-day rule and the right RITA/CCA collector), add the residence-based <strong>school-district</strong> layer, set up <strong>IN/PA/MI/KY/WV reciprocity</strong> (Form IT 4NR) so cross-border staff are withheld for their home state, and track the <strong>county sales-tax rate</strong> against the 5.75% state base. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the IT 4738 PTE return, and we don&rsquo;t represent you before the Ohio Department of Taxation. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 88 Ohio counties &mdash; from the Columbus, Cleveland, and Cincinnati 3-C corridor to Toledo, Akron, Dayton, Canton, and Youngstown &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Ohio small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Ohio small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, county sales-tax tracking against the 5.75% state base, and the municipal income tax set by each employee&rsquo;s work location (with the 20-day rule and the right RITA/CCA collector) &mdash; with IN/PA/MI/KY/WV reciprocity (Form IT 4NR) for cross-border staff &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the municipal income tax by work location, the RITA/CCA 20-day positions, IN/PA/MI/KY/WV reciprocity, and CAT gross-receipts tracking against the $6M exclusion." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Ohio small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its OH cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the Ohio county sales tax and the municipal income-tax withholding by work location configured from the start.", href: "/find-an-accountant/ohio/quickbooks-setup/", cta: "Ohio QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/ohio/bookkeeping-services/", cta: "Ohio bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/ohio/quickbooks-cleanup/", cta: "Ohio cleanup &rarr;" },
    { num: "04 &middot; OH payroll &amp; tax", title: "Municipal tax, reciprocity &amp; sales tax", body: "The municipal income tax configured by each employee&rsquo;s work location (with the 20-day rule and the right RITA/CCA collector), the residence-based school-district layer, IN/PA/MI/KY/WV reciprocity set per employee (Form IT 4NR), and the county sales-tax rate tracked by location, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "OH payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTE-ready for pass-throughs weighing the IT 4738 election, with CAT gross-receipts and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/ohio/", cta: "Ohio overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "County sales-tax tracking against the 5.75% state base",
      "Municipal income tax by work location (RITA/CCA + 20-day rule)",
      "School-district withholding &amp; IN/PA/MI/KY/WV reciprocity (Form IT 4NR)",
      "Job costing, inventory &amp; per-location books &middot; CAT-ready gross receipts",
      "Year-end handoff to your CPA &mdash; PTE-ready",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Ohio &amp; federal income-tax returns",
      "Files the Commercial Activity Tax, the state income tax &amp; the sales-tax return",
      "Files the municipal &amp; school-district income-tax filings &amp; the IT 4738 PTE return",
      "Makes the PTE election; represents you before the Ohio Department of Taxation",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell an Ohio founder their margins are slipping, their owner draws are outrunning profit, that a hybrid hire just crossed the 20-day threshold in another city &mdash; changing which municipality you withhold for &mdash; that their gross receipts are about to cross the $6 million CAT line, or that their pass-through should weigh the IT 4738 election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, county sales-tax tracking, the municipal income tax by work location (RITA/CCA), school-district withholding, IN/PA/MI/KY/WV reciprocity, CAT-ready gross receipts, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Ohio-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Ohio small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Ohio small business?", a: "Most Ohio small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Ohio?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including the municipal income tax withheld by each employee&rsquo;s work location across 649 cities and 199 school districts, the 20-day rule, and IN/PA/MI/KY/WV reciprocity on Form IT 4NR), tracking the 5.75% state sales tax plus the county rate, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Ohio?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Ohio — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Ohio sales-tax tracking (the 5.75% state rate plus the county rate) along with the municipal income tax set by each employee&rsquo;s work location &mdash; with the 20-day rule, the right RITA/CCA collector, and IN/PA/MI/KY/WV reciprocity (Form IT 4NR) for cross-border staff &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Ohio engagements, especially for 3-C-corridor professional-services firms, manufacturers near the $6 million CAT line, and logistics operators riding regional growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong-city municipal withholding and untracked CAT gross receipts &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and municipal income-tax tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Ohio, federal, Commercial Activity Tax, income, municipal, school-district, payroll, and sales-tax returns and the IT 4738 PTE return, and represents you before the Ohio Department of Taxation. Most Ohio small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/ohio/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Ohio Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Ohio small businesses across all 88 counties, coordinated with your CPA — the day-to-day financial backbone, with county-by-county sales-tax tracking and the municipal income tax withheld by work location across 649 cities and 199 school districts (RITA/CCA and the 20-day rule), the Commercial Activity Tax in place of a corporate income tax, and IN/PA/MI/KY/WV reciprocity for cross-border staff.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-ohio-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#oh-svc-smb-summary","#oh-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Ohio","item":"https://techbrot.com/find-an-accountant/ohio/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Ohio Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, county sales-tax tracking, the municipal income tax withheld by work location (RITA/CCA, the 20-day rule, and 199 school districts), CAT-ready gross-receipts tracking, and IN/PA/MI/KY/WV reciprocity (Form IT 4NR) for Ohio small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Ohio or federal tax returns, the Commercial Activity Tax, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the IT 4738 PTE return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Ohio","sameAs":"https://en.wikipedia.org/wiki/Ohio"},
          "audience":{"@type":"BusinessAudience","name":"Ohio small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

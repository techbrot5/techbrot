/* /find-an-accountant/maryland/small-business-accountant/ — t-money MD SERVICE child. NEW page.
 * Structure mirrors the proven PA/NJ/IN/NY/DE small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * MARYLAND LOCALIZATION (per MD-FACTS.md — the ONLY source for MD figures): New Jersey's UI/TDI/FLI/WF
 * payroll stack / NJ-165 reciprocity / 6.625% sales tax / BAIT replaced with Maryland — a graduated state
 * income tax (2% to a 6.50% top rate after the 2025 BRFA budget; middle brackets framed qualitatively) with
 * a new 2% capital-gains surtax over $300,000 federal AGI; the county "piggyback" local income tax levied
 * by all 23 counties and Baltimore City (~2.25%–3.20%, some graduated), withheld by the employee's county of
 * residence on Form MW507; DC/PA/VA/WV reciprocity (Form MW507/MW507M); the 8.25% corporate rate; the
 * pass-through entity (PTE) election as the advisory hook; and a 6% sales tax PLUS the new 3% tax on data/IT
 * services and software publishing incl. business-use SaaS, effective July 1, 2025 (consumer SaaS stays 6%;
 * MPU certificates apportion). Metros Baltimore/Columbia/Silver Spring/Rockville/Bethesda/Annapolis/Frederick/
 * Gaithersburg; all 23 counties + Baltimore City; borders DE/PA/VA/WV/DC; NO street address (areaServed-only
 * — all states are areaServed-only (no street address)). Pricing uses ONLY canonical MD figures (monthly from $400/mo; cleanup
 * from $1,200; setup from $750).
 *
 * ROUTING (MD is a CORE state — only 6 pages): cross-links go ONLY to the 4 MD siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant).
 * NEVER link a /find-an-accountant/maryland/<x>/ path outside the 4 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file MD/federal
 * income-tax returns, the corporate income tax, the state or local income tax, the payroll-withholding
 * filings, the sales-tax return (incl. the new 3% IT/data tax), or the PTE return, and does NOT represent
 * before tax authorities; the client's CPA/EA files. No founder/personal name in visible content. Never
 * quotes a state middle bracket or a specific county piggyback rate as a fixed figure — those are framed
 * qualitatively; the capital-gains surtax is 2% (the proposed 3% is not law); the 3% IT/data tax is new
 * (readers pointed to TB-56 + their CPA). provider = #organization; areaServed = State Maryland; reviewedBy
 * #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Maryland small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/maryland/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/maryland/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">sales-tax tracking across the 6% standard rate and the new 3% IT/data rate</a>, and the <a href=\"/quickbooks/payroll/\">county piggyback local income tax withheld by county of residence on Form MW507</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>PTE-ready</strong> for pass-throughs weighing the Maryland entity-level election. If you run a <strong>biotech, logistics, construction, or professional-services operation</strong>, we keep job-costing, inventory, and per-location books clean; if you have <strong>employees</strong>, we configure the <strong>county piggyback local income tax</strong> by each employee&rsquo;s county of residence on <strong>Form MW507</strong>, set up <strong>DC/PA/VA/WV reciprocity</strong> (Form MW507/MW507M) so cross-border staff are withheld for their home state, and track the <strong>3% IT/data-services sales tax</strong> against the 6% standard rate. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the corporate income tax, the state or local income tax, the payroll-withholding filings, the sales-tax return (including the new 3% IT/data tax), or the PTE return, and we don&rsquo;t represent you before the Comptroller of Maryland. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 23 Maryland counties and Baltimore City &mdash; from Baltimore and the Port to the DC-suburban corridor in Montgomery and Prince George&rsquo;s, plus Annapolis, Columbia, and Frederick &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Maryland small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Maryland small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, sales-tax tracking across the 6% standard rate and the new 3% IT/data rate, and the county piggyback local income tax set by each employee&rsquo;s county of residence on Form MW507 &mdash; with DC/PA/VA/WV reciprocity (MW507/MW507M) for cross-border staff &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/maryland/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the county piggyback local tax by county of residence, DC/PA/VA/WV reciprocity, and the 3% IT/data sales tax against the 6% rate." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Maryland small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its MD cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and Maryland sales tax and the county piggyback local-income-tax withholding configured from the start.", href: "/find-an-accountant/maryland/quickbooks-setup/", cta: "Maryland QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/maryland/bookkeeping-services/", cta: "Maryland bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/maryland/quickbooks-cleanup/", cta: "Maryland cleanup &rarr;" },
    { num: "04 &middot; MD payroll &amp; tax", title: "Piggyback local tax, reciprocity &amp; sales tax", body: "The county piggyback local income tax configured by each employee&rsquo;s county of residence on Form MW507, DC/PA/VA/WV reciprocity set per employee (MW507/MW507M), and the 6% sales tax with the new 3% IT/data-services rate tracked by item and location, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "MD payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTE-ready for pass-throughs weighing the election, with per-location and county reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/maryland/", cta: "Maryland overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales-tax tracking at the 6% rate &amp; the new 3% IT/data rate",
      "County piggyback local income tax by MW507 county of residence",
      "DC/PA/VA/WV reciprocity (Form MW507/MW507M) configured per employee",
      "Job costing, inventory &amp; per-location books",
      "Year-end handoff to your CPA &mdash; PTE-ready",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Maryland &amp; federal income-tax returns",
      "Files the corporate income tax, the state &amp; local income tax &amp; the sales-tax return",
      "Files the payroll-withholding filings &amp; the PTE return",
      "Makes the PTE election; represents you before the Comptroller of Maryland",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Maryland founder their margins are slipping, their owner draws are outrunning profit, that a new hire&rsquo;s MW507 just changed which county &mdash; or state &mdash; you withhold for, that their SaaS product may now be caught by the 3% IT-services tax, or that their pass-through should weigh the PTE election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, 6% / 3% IT-data sales-tax tracking, the county piggyback local income tax, DC/PA/VA/WV reciprocity, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Maryland-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Maryland small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Maryland small business?", a: "Most Maryland small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Maryland?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including the county piggyback local income tax withheld by each employee&rsquo;s county of residence on Form MW507 and DC/PA/VA/WV reciprocity), tracking the 6% sales tax and the new 3% IT/data-services rate, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Maryland?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Maryland — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Maryland sales-tax tracking (the 6% rate plus the new 3% IT/data-services rate) along with the county piggyback local income tax set by each employee&rsquo;s county of residence on Form MW507 &mdash; with DC/PA/VA/WV reciprocity (MW507/MW507M) for cross-border staff &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Maryland engagements, especially for DC-metro government contractors, I-270 biotech and IT firms, and Baltimore professional-services firms riding regional growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong-county piggyback withholding and an untracked 3% IT/data sales tax &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and county piggyback local-tax tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Maryland, federal, corporate, income, payroll, and sales-tax returns and the PTE return, and represents you before the Comptroller of Maryland. Most Maryland small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/maryland/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Maryland Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Maryland small businesses across all 23 counties and Baltimore City, coordinated with your CPA — the day-to-day financial backbone, with 6% sales-tax tracking (and the new 3% IT/data-services rate) and the county piggyback local income tax set by county of residence on Form MW507, plus DC/PA/VA/WV reciprocity.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/maryland-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#md-svc-smb-summary","#md-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Maryland","item":"https://techbrot.com/find-an-accountant/maryland/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Maryland Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, 6% sales-tax tracking with the new 3% IT/data-services rate, the county piggyback local income tax set by county of residence on Form MW507, and DC/PA/VA/WV reciprocity (Form MW507/MW507M) for Maryland small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Maryland or federal tax returns, the corporate income tax, the state or local income tax, the payroll-withholding filings, the sales-tax return, or the PTE return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Maryland","sameAs":"https://en.wikipedia.org/wiki/Maryland"},
          "audience":{"@type":"BusinessAudience","name":"Maryland small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

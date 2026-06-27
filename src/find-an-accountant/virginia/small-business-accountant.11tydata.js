/* /find-an-accountant/virginia/small-business-accountant/ — t-money VA SERVICE child. NEW page.
 * Structure mirrors the proven MD/PA/NJ small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * VIRGINIA LOCALIZATION (per VA-FACTS.md — the ONLY source for VA figures): unlike Maryland (county
 * "piggyback" payroll tax / MW507) or Pennsylvania (Act 32 EIT), Virginia has NO local income tax. Its
 * distinct hook is the LOCAL BUSINESS taxes — the BPOL (Business, Professional & Occupational License)
 * gross-receipts business-license tax levied by most cities and counties, with the rate set by locality
 * and business classification, so a company in multiple jurisdictions needs a separate BPOL each and must
 * track gross receipts by location; plus Business Tangible Personal Property (BTPP) and Machinery & Tools
 * (M&T) taxes. The state income tax is graduated 2% / 3% / 5% / 5.75% (top starts at $17,000); the
 * corporate rate is 6%; the PTET is an elective 5.75% entity-level tax (confirm 2026). Sales tax is
 * VARIABLE by region: 5.3% general, 6.0% in Northern Virginia / Hampton Roads / Richmond, 7.0% in the
 * Historic Triangle, reduced 1% on groceries — QuickBooks must apply the right regional rate by location.
 * Reciprocity with MD/PA/WV/KY/DC via Form VA-4. Metros NoVA (Arlington/Alexandria/Fairfax/Loudoun's Data
 * Center Alley) / Richmond / Hampton Roads / Roanoke / Charlottesville; counties + independent cities;
 * borders MD/WV/KY/TN/NC/DC; NO street address (areaServed-only — all states are areaServed-only (no street address)).
 * Pricing uses ONLY canonical VA figures (monthly from $400/mo; cleanup from $1,200; setup from $750).
 *
 * ROUTING (VA is a CORE state — only 6 pages): cross-links go ONLY to the 4 VA siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant).
 * NEVER link a /find-an-accountant/virginia/<x>/ path outside the 4 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file VA/federal
 * income-tax returns, the corporate income tax, the state income tax, the payroll-withholding filings, the
 * sales-tax return, the BPOL or local business-tax returns, or the PTET return, and does NOT represent
 * before tax authorities; the client's CPA/EA files. No founder/personal name in visible content. Specific
 * locality BPOL rates and sales-tax regions are framed qualitatively; the 7.75%-over-$1M bracket is a 2026
 * proposal (not law); the PTET is flagged "confirm 2026 status." provider = #organization; areaServed =
 * State Virginia; reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Virginia small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/virginia/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/virginia/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">sales-tax tracking across the variable regional rates (5.3% / 6.0% / 7.0%)</a>, and <strong>gross receipts tracked by locality</strong> for the BPOL business-license tax &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>PTET-ready</strong> for pass-throughs weighing the Virginia entity-level election (confirm its 2026 availability with Virginia Tax). If you run a <strong>federal-contracting, IT, data-center, construction, or professional-services operation</strong>, we keep job-costing, indirect-rate, and per-locality books clean; if you operate in <strong>several jurisdictions</strong>, we track <strong>gross receipts by locality</strong> so each BPOL and the BTPP/Machinery &amp; Tools detail are filing-ready, and we set up <strong>MD/PA/WV/KY/DC reciprocity</strong> (Form VA-4) so cross-border staff are withheld for their home state. Virginia has <strong>no local income tax</strong> &mdash; the local burden is on the business side. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the corporate income tax, the state income tax, the payroll-withholding filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return, and we don&rsquo;t represent you before the Virginia Department of Taxation. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. Across the Commonwealth&rsquo;s counties and independent cities &mdash; from Northern Virginia and Loudoun&rsquo;s Data Center Alley to Richmond, the Hampton Roads ports, Roanoke, and Charlottesville &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Virginia small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Virginia small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, sales-tax tracking across the variable regional rates (5.3% / 6.0% / 7.0%), and gross receipts tracked by locality for the BPOL business-license tax &mdash; with MD/PA/WV/KY/DC reciprocity (Form VA-4) for cross-border staff &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/virginia/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including gross receipts split by locality for BPOL, MD/PA/WV/KY/DC reciprocity, and the right regional sales-tax rate by location." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Virginia small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its VA cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and Virginia sales tax and gross-receipts-by-locality tracking for BPOL configured from the start.", href: "/find-an-accountant/virginia/quickbooks-setup/", cta: "Virginia QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/virginia/bookkeeping-services/", cta: "Virginia bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/virginia/quickbooks-cleanup/", cta: "Virginia cleanup &rarr;" },
    { num: "04 &middot; VA local &amp; sales tax", title: "BPOL, regional sales tax &amp; reciprocity", body: "Gross receipts tracked by locality so each BPOL business-license filing is clean, the BTPP and Machinery &amp; Tools asset detail kept locality-ready, the variable regional sales tax (5.3% / 6.0% / 7.0%) set by item and location, and MD/PA/WV/KY/DC reciprocity configured per employee on Form VA-4 &mdash; so the returns reconcile to the books rather than being guessed at filing time.", href: "/accounting/sales-tax-compliance/", cta: "VA sales-tax &amp; BPOL setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTET-ready for pass-throughs weighing the election, with per-locality gross-receipts reporting clean for multi-jurisdiction operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/virginia/", cta: "Virginia overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales-tax tracking across the 5.3% / 6.0% / 7.0% regional rates",
      "Gross receipts tracked by locality for BPOL",
      "BTPP &amp; Machinery &amp; Tools asset detail kept locality-ready",
      "MD/PA/WV/KY/DC reciprocity (Form VA-4) configured per employee",
      "Job costing, indirect-rate &amp; per-locality books",
      "Year-end handoff to your CPA &mdash; PTET-ready",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Virginia &amp; federal income-tax returns",
      "Files the corporate income tax, the state income tax &amp; the sales-tax return",
      "Files the BPOL and local business-tax returns &amp; the payroll-withholding filings",
      "Makes the PTET election &amp; files the PTET return; represents you before the Virginia Department of Taxation",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Virginia founder their margins are slipping, their owner draws are outrunning profit, that expanding into a second county just added a BPOL filing they now owe gross receipts against, that selling into the Historic Triangle means a 7.0% rate instead of 5.3%, or that their pass-through should weigh the PTET election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, BPOL-footprint, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, 5.3% / 6.0% / 7.0% regional sales-tax tracking, gross-receipts-by-locality for BPOL, BTPP/M&amp;T detail, MD/PA/WV/KY/DC reciprocity, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Virginia-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Virginia small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Virginia small business?", a: "Most Virginia small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Virginia?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including MD/PA/WV/KY/DC reciprocity on Form VA-4, since Virginia has no local income tax), tracking the variable regional sales tax (5.3% / 6.0% / 7.0%) and gross receipts by locality for the BPOL business-license tax, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Virginia?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Virginia — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Virginia sales-tax tracking (the right regional rate by location &mdash; 5.3%, 6.0%, or 7.0%) along with gross receipts tracked by locality for the BPOL business-license tax &mdash; with MD/PA/WV/KY/DC reciprocity (Form VA-4) for cross-border staff &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Virginia engagements, especially for Northern Virginia federal contractors, Loudoun IT and data-center firms, and Richmond and Hampton Roads professional-services firms riding regional growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating gross receipts by locality where a new jurisdiction added a BPOL filing, correcting a single sales-tax rate charged across multiple regions, and fixing reciprocity withholding &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and gross-receipts-by-locality tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Virginia, federal, corporate, income, payroll, and sales-tax returns and the BPOL or local business-tax returns and the PTET return, and represents you before the Virginia Department of Taxation. Most Virginia small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/virginia/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Virginia Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Virginia small businesses across the Commonwealth's counties and independent cities, coordinated with your CPA — the day-to-day financial backbone, with the variable regional sales tax (5.3% / 6.0% / 7.0%) tracked by location, gross receipts tracked by locality for the BPOL business-license tax, and MD/PA/WV/KY/DC reciprocity on Form VA-4. Virginia has no local income tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-virginia-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#va-svc-smb-summary","#va-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Virginia","item":"https://techbrot.com/find-an-accountant/virginia/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Virginia Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, variable regional sales-tax tracking (5.3% / 6.0% / 7.0%), gross-receipts-by-locality tracking for the BPOL business-license tax, and MD/PA/WV/KY/DC reciprocity (Form VA-4) for Virginia small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Virginia or federal tax returns, the corporate income tax, the state income tax, the payroll-withholding filings, the sales-tax return, the BPOL or local business-tax returns, or the PTET return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Virginia","sameAs":"https://en.wikipedia.org/wiki/Virginia"},
          "audience":{"@type":"BusinessAudience","name":"Virginia small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

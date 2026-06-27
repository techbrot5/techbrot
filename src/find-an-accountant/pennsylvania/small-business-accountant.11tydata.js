/* /find-an-accountant/pennsylvania/small-business-accountant/ — t-money PA SERVICE child. NEW page.
 * Structure mirrors the proven IN/NY/DE small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * PENNSYLVANIA LOCALIZATION (per PA-FACTS.md — the ONLY source for PA figures): Indiana's flat 7%
 * sales tax / county LIT / $2M PPT exemption replaced with Pennsylvania — a flat 3.07% personal
 * income tax (no brackets); the Act 32 local Earned Income Tax (EIT) withheld by PSD code under the
 * "higher-of" rule; the Local Services Tax (up to $52/yr where levied); Philadelphia's separate
 * Wage/NPT/BIRT city taxes; sales tax of 6% statewide / 7% Allegheny (Pittsburgh) / 8% Philadelphia;
 * manufacturing / logistics / construction / ag / eds-and-meds operators; all 67 counties; NO street
 * address (areaServed-only — the firm is minutes across the line). Pricing uses ONLY canonical PA
 * figures (monthly from $400/mo; cleanup from $1,200; setup from $750).
 *
 * ROUTING (PA is a CORE state — only 6 pages): cross-links go ONLY to the 4 PA siblings + pillar, or
 * to existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant).
 * NEVER link a /find-an-accountant/pennsylvania/<x>/ path outside the 4 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent
 * Certified QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file
 * PA/federal income-tax returns, the local EIT return, the LST, Philadelphia's Wage/NPT/BIRT returns,
 * or the sales-tax return, and does NOT represent before tax authorities; the client's CPA/EA files.
 * No founder/personal name in visible content. Never quotes a specific municipal EIT rate; Philadelphia
 * rates framed as "current as of the review date". provider = #organization; areaServed = State
 * Pennsylvania; reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Pennsylvania small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/pennsylvania/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/pennsylvania/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">6% / 7% / 8% sales-tax tracking</a>, and <a href=\"/quickbooks/payroll/\">Act 32 local-EIT payroll withholding by PSD code</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them. If you run a <strong>manufacturing, logistics, construction, or agriculture operation</strong>, we keep job-costing, inventory, and per-location books clean; if you have <strong>employees across multiple municipalities</strong>, we set up Act 32 local-EIT withholding by each worker&rsquo;s PSD code under the &ldquo;higher-of&rdquo; rule, plus the Local Services Tax at the worksite &mdash; and, for Philadelphia businesses, the City&rsquo;s separate Wage, Net Profits, and BIRT taxes. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the local EIT return, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT returns, or the sales-tax return, and we don&rsquo;t represent you before the tax authorities. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 67 Pennsylvania counties &mdash; from Philadelphia and the suburban collar to Pittsburgh, the Lehigh Valley, Harrisburg, Lancaster, Erie, and Scranton &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Pennsylvania small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Pennsylvania small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, sales-tax tracking across the 6% / 7% / 8% split, and Act 32 local-EIT and Local Services Tax payroll withholding by PSD code from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/pennsylvania/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including sales tax and multi-municipality Act 32 EIT payroll, plus Philadelphia city taxes if you operate in the city." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Pennsylvania small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its PA cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and Pennsylvania sales-tax and Act 32 EIT payroll configured from the start.", href: "/find-an-accountant/pennsylvania/quickbooks-setup/", cta: "Pennsylvania QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/pennsylvania/bookkeeping-services/", cta: "Pennsylvania bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/pennsylvania/quickbooks-cleanup/", cta: "Pennsylvania cleanup &rarr;" },
    { num: "04 &middot; PA taxes", title: "Act 32 EIT, LST &amp; sales tax", body: "Act 32 local Earned Income Tax withheld in payroll by each employee&rsquo;s PSD code under the &ldquo;higher-of&rdquo; rule, the Local Services Tax at the worksite, the 6% / 7% / 8% sales tax tracked by location, and &mdash; for Philadelphia businesses &mdash; the Wage/NPT/BIRT detail kept filing-ready, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "Act 32 EIT payroll setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; with multi-municipality payroll and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/pennsylvania/", cta: "Pennsylvania overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales-tax tracking across the 6% / 7% / 8% split",
      "Act 32 EIT payroll withholding by PSD code (&ldquo;higher-of&rdquo; rule)",
      "Local Services Tax &amp; Philadelphia city-tax tracking",
      "Job costing, inventory &amp; per-location books",
      "Year-end handoff to your CPA",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Pennsylvania &amp; federal income-tax returns",
      "Files the local EIT, LST &amp; Philadelphia Wage/NPT/BIRT returns",
      "Files the sales-tax return",
      "Represents you before the tax authorities",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Pennsylvania founder their margins are slipping, their owner draws are outrunning profit, which PSD code a new hire&rsquo;s EIT should be withheld under, or that their Philadelphia activity now triggers BIRT. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, 6% / 7% / 8% sales-tax tracking, Act 32 EIT payroll, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Pennsylvania-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Pennsylvania small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Pennsylvania small business?", a: "Most Pennsylvania small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Pennsylvania?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including Act 32 local Earned Income Tax withholding by PSD code and the Local Services Tax), tracking the 6% / 7% / 8% sales tax, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Pennsylvania?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Pennsylvania — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Pennsylvania sales-tax tracking plus Act 32 local-EIT and Local Services Tax payroll withholding by PSD code from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Pennsylvania engagements, especially for Lehigh Valley distributors, Pittsburgh-corridor manufacturers and builders, and Philadelphia-metro services firms riding regional growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong-PSD-code EIT withholding and mis-sourced sales tax &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and Act 32 EIT/LST tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Pennsylvania, federal, local, and Philadelphia returns and represents you before the tax authorities. Most Pennsylvania small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/pennsylvania/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Pennsylvania Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Pennsylvania small businesses across all 67 counties, coordinated with your CPA — the day-to-day financial backbone, with 6% / 7% / 8% sales-tax tracking and Act 32 local Earned Income Tax payroll withholding by PSD code.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-pennsylvania-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pa-svc-smb-summary","#pa-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Pennsylvania","item":"https://techbrot.com/find-an-accountant/pennsylvania/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Pennsylvania Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, 6% / 7% / 8% sales-tax tracking, Act 32 local Earned Income Tax payroll withholding by PSD code, Local Services Tax and Philadelphia city-tax tracking, and payroll coordination for Pennsylvania small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Pennsylvania or federal tax returns, the local EIT return, the Local Services Tax, Philadelphia's city-tax returns, or the sales-tax return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Pennsylvania","sameAs":"https://en.wikipedia.org/wiki/Pennsylvania"},
          "audience":{"@type":"BusinessAudience","name":"Pennsylvania small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

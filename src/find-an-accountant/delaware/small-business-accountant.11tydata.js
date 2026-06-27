/* /find-an-accountant/delaware/small-business-accountant/ — t-money DE SERVICE child.
 * NEW page (no baseline equity contract — Delaware set is being built fresh). Structure
 * mirrors the proven NY small-business child (find-an-accountant/new-york/
 * small-business-accountant.11tydata.js): JSON front-matter in the .njk; this file supplies
 * the content arrays + an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service, FAQPage). FAQPage mainEntity is generated from the same `faq`
 * array the visible faq__list renders — single source of truth.
 *
 * DELAWARE LOCALIZATION (per _build/strategy/DE-FACTS.md — the ONLY source for DE figures):
 * NY UBT/NYC-sales-tax/62-counties replaced with DE — no sales tax; gross receipts tax on the
 * SELLER tracked by business activity; annual franchise-tax reserve; Wilmington 1.25% wage &
 * net-profits tax; holding-company / out-of-state-owner books; New Castle, Kent, Sussex;
 * Middletown office. Pricing uses ONLY canonical DE figures (monthly from $400/mo; cleanup
 * from $1,200; setup from $750).
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent
 * Certified QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm and NOT a
 * registered agent: it does NOT file DE/federal income-tax returns, the franchise tax, or the
 * annual report, and does NOT represent before tax authorities; the client's CPA/EA and
 * registered agent file. The 2 real Clutch reviews live on the DE pillar — no review-card, no
 * AggregateRating here. No founder/personal name in visible content. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Delaware small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/delaware/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/delaware/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, and <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts-tax tracking by activity</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a <a href=\"/find-an-accountant/delaware/pricing/\">written scope</a> (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them. If you own a <strong>Delaware entity from out of state</strong> or run a holding company, we keep the books with the annual <strong>franchise-tax reserve</strong> and clean intercompany structure; if you operate in Wilmington, we account for the <strong>1.25% city wage and net-profits tax</strong>. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong>, and not a registered agent &mdash; we don&rsquo;t file income-tax returns, the franchise tax, or the annual report, and we don&rsquo;t represent you before the tax authorities. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All three Delaware counties &mdash; New Castle, Kent, and Sussex &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Delaware small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, and gross-receipts-tax tracking by activity from day one. We handle setup and the books; your CPA, attorney, or registered agent handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the franchise-tax reserve and gross-receipts tracking." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm, and not a registered agent. We run the books; your CPA files and represents you. We do not file returns or the franchise tax. Most Delaware small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its DE cross-link).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and gross-receipts-tax tracking by activity configured from the start.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
    { num: "04 &middot; Gross receipts", title: "Gross receipts tax tracking", body: "Delaware has no sales tax to collect &mdash; instead a gross receipts tax on the seller. We track receipts by business activity in QuickBooks so the right rate and exclusion apply and the return reconciles, not guessed at filing time.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; with the franchise-tax reserve set and intercompany structure clean for holding companies &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/delaware/", cta: "Delaware overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Gross-receipts-tax tracking by activity",
      "Franchise-tax reserve tracked in the books",
      "Holding-company &amp; intercompany bookkeeping",
      "Payroll coordination incl. Wilmington wage tax",
      "Year-end handoff to your CPA",
    ] },
    { title: "Your CPA &amp; registered agent", role: "Files returns &amp; represents you", items: [
      "Files Delaware &amp; federal income-tax returns",
      "Files the franchise tax &amp; annual report (CPA or registered agent)",
      "Represents you before the tax authorities",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Delaware founder their margins are slipping, their owner draws are outrunning profit, which gross-receipts activity category their revenue falls under, or that the franchise-tax reserve isn&rsquo;t keeping pace. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, gross-receipts-tax tracking, franchise-tax reserve, payroll coordination &middot; income-tax &amp; franchise-tax filing coordinated with your CPA/EA &amp; registered agent (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  // FAQ — 7 Q/A, Delaware-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Delaware small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Delaware small business?", a: "Most Delaware small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Delaware?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll, tracking the Delaware gross receipts tax by business activity, reserving for the annual franchise tax, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Delaware?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Delaware — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and gross-receipts-tax tracking by activity from day one (Delaware has no sales tax to collect, but the seller owes gross receipts tax). TechBrot handles the setup and ongoing books; your CPA, attorney, or registered agent handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Delaware engagements, especially for owners running several entities under one Delaware structure. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities where they&rsquo;ve commingled &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm &mdash; and not a registered agent. We provide bookkeeping, QuickBooks, payroll, gross-receipts and franchise-tax tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Delaware and federal returns and represents you before the tax authorities. Most Delaware small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Delaware small businesses across New Castle, Kent, and Sussex counties, coordinated with your CPA — the day-to-day financial backbone, with gross-receipts-tax tracking and the annual franchise-tax reserve.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-smb-summary","#de-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, gross-receipts-tax tracking, franchise-tax reserve, and payroll coordination for Delaware small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware or federal tax returns, the franchise tax, or the annual report, and does not represent before tax authorities — coordinates with the client's CPA, EA, or registered agent, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","name":"Delaware small and midsize businesses, holding companies, and out-of-state-owned Delaware entities"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

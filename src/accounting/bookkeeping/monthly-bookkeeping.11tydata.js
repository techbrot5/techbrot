/* /accounting/bookkeeping/monthly-bookkeeping/ (round-16 elevation). Sources:
 * baseline.json (35 headings, 12 FAQ — 7 substantive + 5 schema-only dupes) +
 * accounting/bookkeeping/monthly-bookkeeping/index.html (full copy). t-bofu.
 * Citable: the three fixed-fee PRICING TIERS (Essentials $400–700 / Standard
 * $700–1,400 / Complex $1,400–2,500+) + the named monthly deliverables, and the
 * coined "monthly close cadence" (Days 1–5 / 6–10 / 11–14 / Day 15, package by
 * the 15th). quick-5 additive, zero overlap with the FAQ. Authorship firm-level;
 * founder schema-only. CTA: bookkeeping BOFU — NO "Speak to a ProAdvisor". */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}
module.exports = {
  // the monthly close cadence — the ProcessFlow visual (Days 1–5 → Day 15)
  closeCadence: [
    { band: "Days 1–5", label: "Source documents flow in", sub: "bank feeds sync · statements drop · payroll reconciles · receipts arrive" },
    { band: "Days 6–10", label: "Categorization & reconciliation", sub: "every account reconciled to actual statements · anomalies escalated" },
    { band: "Days 11–14", label: "Close, review, statements", sub: "month closed · platform quality review · variance commentary" },
    { band: "Day 15", label: "Financial package delivered", sub: "P&L · balance sheet · cash flow — in your portal", accent: true },
  ],
  included: [
    "Bank account reconciliation", "Credit card reconciliation", "Transaction categorization",
    "Bank rules maintenance", "Undeposited funds clearing", "Monthly P&L statement",
    "Monthly balance sheet", "Monthly cash flow statement", "Variance commentary",
    "Named operator point of contact",
  ],
  layered: [
    "Accounts payable management", "Accounts receivable management", "Payroll processing & verification",
    "Sales tax filing & compliance", "1099 preparation", "Multi-entity consolidation",
    "Inventory & COGS tracking", "Quarterly business reviews", "Year-end close package",
    "CPA handoff coordination",
  ],
  // quick-5 — distinct from FAQ (FAQ = what is / cost / includes / when / cleanup-first / who / switch)
  "override:aiSummary": [
    { q: "Is monthly bookkeeping fixed-fee or hourly?", a: "<strong>Fixed monthly fee against a written scope</strong> — agreed before any work begins. No hourly billing, no per-call meter. If scope genuinely expands, the fee is re-quoted and re-approved in writing first." },
    { q: "When are my books actually closed each month?", a: "On the <strong>monthly close cadence</strong>: documents flow in days 1–5, reconciliation days 6–10, close and review days 11–14, and your financial package is delivered <strong>by the 15th</strong> of the following month. Complex multi-entity or inventory files close by the 20th." },
    { q: "Will I have one person I can actually reach?", a: "Yes — a <strong>named, credentialed local operator</strong> closes your books and is your point of contact, backed by platform-level quality review. No anonymous offshore team, no rotating inbox." },
    { q: "Which tier will my business land in?", a: "<strong>Essentials</strong> ($400–$700/mo) for simple books under ~100 transactions; <strong>Standard</strong> ($700–$1,400/mo) for active businesses with payroll and sales tax; <strong>Complex</strong> ($1,400–$2,500+/mo) for multi-entity, inventory, or multi-state. The discovery call confirms the tier." },
    { q: "Do you work inside my own QuickBooks file?", a: "Yes. Your operator works as an authorized accountant-user inside <strong>your own QuickBooks file</strong> — Online, Desktop, or Enterprise. Your data stays yours and the audit trail is visible to you." },
  ],
  // "If any of these sound familiar, the answer is yes." — buyer-voice cards
  signals: [
    { opener: "Your business is past the DIY-bookkeeping stage.", body: "Self-managing worked when the business was small. Now the time, errors, and missed insight cost more than a professional bookkeeper would." },
    { opener: "You need monthly numbers, not just year-end ones.", body: "If you only see financials at tax time, you’re flying blind 11 months a year. A monthly close gives you real numbers to decide on." },
    { opener: "Your CPA needs clean books to file efficiently.", body: "CPAs charge significantly more to clean up books at tax time. Monthly bookkeeping delivers a year-end package they can file directly from." },
    { opener: "You just finished cleanup or catch-up.", body: "The natural next step. Monthly keeps the books in the state cleanup and catch-up just delivered — same operator, no context loss." },
    { opener: "You have a lender, board, or investor watching the numbers.", body: "SBA loans, lines of credit, investors, and boards all need timely monthly financials. Monthly bookkeeping is the operational floor." },
    { opener: "Your current bookkeeper is unreliable or non-responsive.", body: "Anonymous offshore teams, no named contact, late or missing deliverables. A monthly engagement with TechBrot fixes all three." },
  ],
  // the citable element — three fixed-fee tiers
  tiers: [
    { name: "Essentials", price: "$400–$700", per: "/month", forWhom: "Simple books, 1–2 bank accounts, under ~100 transactions/month, no payroll or simple payroll, no sales tax.", bullets: ["Monthly reconciliation & categorization", "Monthly P&L, balance sheet, cash flow", "Named operator", "Year-end CPA handoff package"], cta: "Scope an Essentials engagement", note: "" },
    { name: "Standard", price: "$700–$1,400", per: "/month", forWhom: "Active small businesses, multiple bank and credit accounts, 100–500 transactions/month, payroll, sales tax.", bullets: ["Everything in Essentials", "Payroll & sales tax verification", "AP / AR upkeep", "1099 preparation", "Variance commentary", "Quarterly business review"], cta: "Scope a Standard engagement", note: "Most common" },
    { name: "Complex", price: "$1,400–$2,500+", per: "/month", forWhom: "Multi-entity, inventory, 500+ transactions/month, multi-state sales tax, complex payroll, lender/investor reporting.", bullets: ["Everything in Standard", "Multi-entity consolidation", "Inventory & COGS tracking", "Multi-state sales tax", "Investor / lender reporting", "Monthly KPI dashboard"], cta: "Scope a Complex engagement", note: "" },
  ],
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review on every close" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  nextSteps: [
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "If the books are messy or wrong, cleanup is the first engagement — then transition to monthly with the same operator." },
    { title: "Catch-up bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up", body: "If the books are behind but otherwise structured, catch-up brings them current. Then monthly takes over." },
    { title: "Payroll management", href: "/accounting/payroll-management/?intent=payroll", body: "Payroll often layers into a monthly engagement — setup, processing, tax filing, multi-state compliance." },
    { title: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", body: "When monthly bookkeeping isn’t enough — forecasting, KPI reporting, board-ready financials." },
  ],
  // de-dup 2026-06-25: override the dir-data generic 11-FAQ block (hub owns it)
  // so this page ships ONLY its page-specific questions. `override:` = array-replace.
  "override:faq": [
    { q: "What is monthly bookkeeping?", a: "Monthly bookkeeping is a recurring engagement where a Certified QuickBooks ProAdvisor closes the books every month — reconciling bank and credit card accounts, categorizing transactions, verifying payroll and sales tax, and delivering a monthly financial package including P&L, balance sheet, and cash flow statement." },
    { q: "How much does monthly bookkeeping cost?", a: "Pricing depends on transaction volume, account count, payroll, sales tax, and entity complexity. Typical: $400–$700/mo Essentials, $700–$1,400/mo Standard, $1,400–$2,500+/mo Complex. Every TechBrot engagement is a fixed monthly fee against a written scope — no hourly billing." },
    { q: "What does monthly bookkeeping include?", a: "Standard monthly engagements include bank and credit card reconciliations, transaction categorization, AP/AR upkeep, payroll and sales tax verification, monthly close, and a monthly financial package (P&L, balance sheet, cash flow). Larger engagements add quarterly business reviews and year-end preparation." },
    { q: "When do I receive my monthly financial package?", a: "By the 15th of the following month — for example, January books close and the January financial package is delivered by February 15. Complex multi-entity or inventory engagements may close by the 20th." },
    { q: "Do I need to clean up my books before starting monthly bookkeeping?", a: "Monthly bookkeeping starts from a known-current state. Behind books need catch-up first; messy or inaccurate books need cleanup first. Most clients transition directly from cleanup or catch-up to monthly with the same operator." },
    { q: "Who actually does my monthly books?", a: "A vetted local TechBrot operator — an independent accounting practice running under TechBrot’s brand, standards, and infrastructure. Every operator is a Certified QuickBooks ProAdvisor with a named point of contact." },
    { q: "Can I switch operators if it isn’t a good fit?", a: "Yes. The platform structure means continuity is guaranteed even when the operator relationship changes — handoff happens without losing file context. You’re never stuck with one bookkeeper." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/bookkeeping/monthly-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#monthly-bookkeeping-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Bookkeeping","item":"https://techbrot.com/accounting/bookkeeping/"},
          {"@type":"ListItem","position":4,"name":"Monthly bookkeeping","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Monthly bookkeeping services","serviceType":"Recurring monthly bookkeeping and financial close","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"Monthly bookkeeping tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name)+" monthly bookkeeping","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+stripTags(t.per)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"Monthly bookkeeping deliverables included in every engagement","itemListElement":data.included.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

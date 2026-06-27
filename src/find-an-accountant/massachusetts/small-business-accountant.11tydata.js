/* /find-an-accountant/massachusetts/small-business-accountant/ — t-money MA SERVICE child. NEW page.
 * Structure mirrors the proven AZ/GA/OH/MD/PA/NJ/MI/TN/WA/CO small-business child: JSON front-matter in the .njk;
 * this file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * MASSACHUSETTS LOCALIZATION (per MA-FACTS.md — the ONLY source for MA figures): like Colorado, Massachusetts HAS
 * an income tax — a FLAT 5% on most classes of income — so payroll DOES carry MASSACHUSETTS STATE INCOME-TAX
 * WITHHOLDING (Form M-4; federal + FICA + SUTA + MA state withholding). NOT WA/TN's "no withholding" framing. The
 * MA-distinct headline (the standout hook, analogous to CO's home-rule sales tax / WA's B&O): the 4% SURTAX (the
 * voter-enacted "Fair Share"/"millionaires tax") on the portion of taxable income ABOVE an inflation-indexed
 * threshold — $1,083,150 for tax year 2025 and $1,107,750 for tax year 2026 (only income above is taxed at the
 * extra 4%, i.e. 9% on that portion). It is NOT a separate base — it rides on taxable income. It makes owner
 * compensation, distributions, business-sale gains, and timing matter near the threshold, and drives entity/PTE
 * planning. Keep the threshold tied to the tax year (it indexes annually) and link the DOR source. The CORPORATE
 * EXCISE (C-corps): the GREATER measure combining an 8% net-income measure PLUS a $2.60-per-$1,000
 * property-or-net-worth measure, with a $456 MINIMUM excise (CPA computes/files). MA PFML: a 0.88% payroll
 * contribution for 2026, split employer/employee, with employers of fewer than 25 covered individuals exempt from
 * the employer share. The flat 6.25% SALES & USE TAX is statewide with NO county/city local add-on — the SIMPLE
 * part, a clean contrast to CO home-rule / WA local layering. The PTE excise election (S-corps/partnerships, 5%
 * rate, SALT-cap workaround) is advisory/coordination only (the CPA elects and files; we keep the books PTE-ready).
 * Metros Boston/Cambridge/Worcester/Springfield/Lowell/Quincy/Newton/Framingham; 14 counties, Greater-Boston-centric;
 * Cambridge/Kendall Square biotech & life sciences, Boston finance & healthcare, higher ed, Route 128/495 tech. NO
 * street address (areaServed-only — all states are areaServed-only (no street address)). Pricing uses ONLY canonical MA figures
 * (monthly from $400/mo; cleanup from $1,200; setup from $750). DO NOT call the surtax a separate tax base.
 *
 * ROUTING (MA is a CORE state — 6 essentials only): cross-links go ONLY to the 5 MA siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/massachusetts/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file MA/federal returns,
 * the income tax or the 4% surtax, the corporate excise, the sales/use-tax return, the PFML return, or the PTE
 * election, and does NOT represent before tax authorities; the client's CPA/EA files. No founder/personal name in
 * visible content. The 5% flat income tax (MA state withholding on payroll), the 4% surtax (>$1,083,150 for 2025 /
 * >$1,107,750 for 2026), the corporate excise (8% + $2.60/$1,000, $456 min), the flat 6.25% sales tax (no local),
 * MA PFML (0.88% for 2026), and the PTE election are VERIFIED and stated; the surtax threshold is tied to the tax
 * year (indexes annually). provider = #organization; areaServed = State Massachusetts (sameAs Massachusetts);
 * reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Massachusetts small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/massachusetts/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/massachusetts/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">sales-tax tracking</a> at the flat 6.25% rate with no local add-on, and <a href=\"/quickbooks/payroll/\">payroll with Massachusetts state income-tax withholding</a> &mdash; because Massachusetts has a 5% flat income tax &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; which matters all the more near the <strong>4% surtax</strong> threshold, where the portion of taxable income above $1,083,150 for 2025 (and $1,107,750 for 2026) carries an extra 4%, so clean owner-comp, distribution, and timing records earn their keep. If you run a <strong>biotech, technology, healthcare, or professional-services operation</strong>, we keep payer reconciliation, grant and project costing, inventory, WIP, and per-location books clean; if you have <strong>employees</strong>, we configure payroll with <strong>Massachusetts state income-tax withholding</strong> (Form M-4) and <strong>MA Paid Family &amp; Medical Leave</strong> (0.88% for 2026, with employers of fewer than 25 covered individuals exempt from the employer share), and we charge the <strong>flat 6.25% sales and use tax</strong> &mdash; the simple part, with no county or city layer. Your CPA files your returns, computes the corporate excise, makes the <strong>PTE</strong> election where it fits, and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file federal or Massachusetts returns, the income tax or the 4% surtax, the corporate excise, the sales/use-tax return, the PFML return, or the PTE election, and we don&rsquo;t represent you before the Massachusetts Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 14 Massachusetts counties &mdash; from the Cambridge and Kendall Square biotech and life-sciences hub to Boston finance and healthcare, Worcester, Springfield, Lowell, Quincy, Newton, and Framingham &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Massachusetts small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Massachusetts small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the flat 6.25% sales &amp; use tax configured (the simple part &mdash; no local add-on), payroll set up correctly &mdash; Massachusetts has a 5% flat income tax, so payroll carries Massachusetts state withholding (Form M-4) plus MA Paid Family &amp; Medical Leave (0.88% for 2026) &mdash; and clean owner-comp and distribution records from day one in case income approaches the 4% surtax threshold. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/massachusetts/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the flat 6.25% sales &amp; use tax, correct payroll with Massachusetts state withholding and MA PFML, and clean owner-comp, distribution, and timing records near the 4% surtax threshold so the corporate-excise and PTE decisions your CPA handles rest on accurate books." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Massachusetts small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its MA cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the sales-tax item configured for the flat 6.25% rate (no local add-on) plus Massachusetts state-withholding payroll (Form M-4) and MA Paid Family &amp; Medical Leave set from the start.", href: "/find-an-accountant/massachusetts/quickbooks-setup/", cta: "Massachusetts QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/massachusetts/bookkeeping-services/", cta: "Massachusetts bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing owner-comp and distribution records that blur near the 4% surtax threshold, correcting a mis-set sales-tax rate, and untangling a tangled equity section, then reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/massachusetts/quickbooks-cleanup/", cta: "Massachusetts cleanup &rarr;" },
    { num: "04 &middot; MA tax &amp; payroll", title: "Income tax, the surtax &amp; payroll", body: "Payroll set up with Massachusetts state income-tax withholding (Form M-4, because Massachusetts has a 5% flat income tax) and MA Paid Family &amp; Medical Leave (0.88% for 2026), clean owner-compensation, distribution, and timing records kept near the 4% surtax threshold (taxable income above $1,083,150 for 2025 / $1,107,750 for 2026), the flat 6.25% sales &amp; use tax charged simply with no local add-on, and entity-level books kept PTE-ready &mdash; so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "MA payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTE-ready (entity-level books kept so the pass-through entity election is straightforward), with the corporate-excise inputs and owner-comp/distribution records organized for the 4% surtax &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/massachusetts/", cta: "Massachusetts overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales &amp; use tax at the flat 6.25% rate (no local add-on)",
      "Clean owner-comp, distribution &amp; timing records near the 4% surtax threshold",
      "Payroll with Massachusetts state income-tax withholding (Form M-4) &amp; MA PFML (0.88% for 2026); multi-state set per work state",
      "PTE-ready, entity-level books for the pass-through entity election",
      "Corporate-excise inputs (net-income &amp; property/net-worth measures) organized for your CPA",
      "Payer reconciliation, grant &amp; project costing, inventory &amp; WIP",
      "Year-end handoff to your CPA &mdash; equity &amp; owner-comp sub-reconciled",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Massachusetts &amp; federal returns",
      "Files the income tax &amp; the 4% surtax",
      "Computes &amp; files the corporate excise",
      "Files the sales/use-tax return &amp; the PFML return",
      "Makes the PTE election &amp; files it",
      "Represents you before the Massachusetts Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Massachusetts founder their margins are slipping, their owner draws are outrunning profit, whether a bonus or distribution will push income across the 4% surtax threshold this year or next, or whether a partnership or S-corp should make the pass-through entity election. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, surtax-timing, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the flat 6.25% sales &amp; use tax, MA Paid Family &amp; Medical Leave, Massachusetts state-withholding payroll, PTE-ready books, and clean owner-comp records near the 4% surtax threshold &middot; income-tax filing, the corporate excise, and the PTE election coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Massachusetts-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Massachusetts small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Massachusetts small business?", a: "Most Massachusetts small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Massachusetts?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (which in Massachusetts carries Massachusetts state income-tax withholding via Form M-4, because Massachusetts has a 5% flat income tax, plus MA Paid Family &amp; Medical Leave at 0.88% for 2026), tracking the flat 6.25% sales &amp; use tax (the simple part &mdash; no county or city add-on), keeping clean owner-compensation and distribution records near the 4% surtax threshold (taxable income above $1,083,150 for 2025 / $1,107,750 for 2026), and &mdash; separately &mdash; filing tax returns, computing the corporate excise, making the PTE election, and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Massachusetts?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Massachusetts — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and the flat 6.25% sales &amp; use tax configured (the simple part &mdash; no local add-on) &mdash; along with payroll set up correctly, since Massachusetts has a 5% flat income tax and payroll carries Massachusetts state withholding (Form M-4) plus MA Paid Family &amp; Medical Leave (0.88% for 2026), and clean owner-compensation and distribution records in case income approaches the 4% surtax threshold ($1,083,150 for 2025 / $1,107,750 for 2026). We handle the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Massachusetts engagements, especially for Cambridge and Kendall Square biotech and life-sciences firms tracking grant and project costs, Boston technology and SaaS companies whose revenue and owner compensation pushed toward the 4% surtax threshold, and professional-services firms whose equity sections tangled as they scaled along the Route 128/495 belt. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities where they&rsquo;ve commingled, fixing a mis-set sales-tax rate, organizing owner-comp and distribution records near the surtax threshold, and cleaning the equity section &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Massachusetts, federal, sales/use-tax, and PFML returns, computes the corporate excise, files the income tax and the 4% surtax, makes the PTE election, and represents you before the Massachusetts Department of Revenue. Most Massachusetts small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/massachusetts/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Massachusetts Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Massachusetts small businesses across all 14 counties, coordinated with your CPA — the day-to-day financial backbone, with the flat 6.25% sales tax (no local add-on), the 5% flat income tax so payroll carries Massachusetts state withholding (Form M-4), clean owner-comp records near the 4% surtax threshold ($1,083,150 for 2025 / $1,107,750 for 2026), the corporate excise organized for your CPA, MA Paid Family & Medical Leave payroll (0.88% for 2026), and PTE-ready books.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-massachusetts-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ma-svc-smb-summary","#ma-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Massachusetts","item":"https://techbrot.com/find-an-accountant/massachusetts/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Massachusetts Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the flat 6.25% sales & use tax (no local add-on), Massachusetts state-withholding payroll (Form M-4; 5% flat income tax) and MA Paid Family & Medical Leave (0.88% for 2026), clean owner-comp and distribution records near the 4% surtax threshold, corporate-excise inputs organized for the CPA, and PTE-ready books for Massachusetts small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Massachusetts or federal tax returns, the income tax or the 4% surtax, the corporate excise, the sales/use-tax return, the PFML return, or the PTE election, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Massachusetts","sameAs":"https://en.wikipedia.org/wiki/Massachusetts"},
          "audience":{"@type":"BusinessAudience","name":"Massachusetts small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/washington/small-business-accountant/ — t-money WA SERVICE child. NEW page.
 * Structure mirrors the proven AZ/GA/OH/MD/PA/NJ/MI/TN small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * WASHINGTON LOCALIZATION (per WA-FACTS.md — the ONLY source for WA figures): Tennessee's no-income-tax / F&E /
 * $100k-business-tax framing replaced with Washington — NO income tax at all (neither individual nor corporate),
 * so payroll carries NO state income-tax withholding (federal + FICA + SUTA + the WA premiums only). The
 * WA-distinct business tax: the BUSINESS & OCCUPATION (B&O) tax — a GROSS-RECEIPTS tax levied BY CLASSIFICATION
 * (retailing 0.471%, wholesaling/manufacturing 0.484%, service & other activities tiered from 1.5%) with NO
 * deduction for labor, materials, taxes, rent, or any cost of doing business — owed even by a low-margin or
 * break-even business; many cities (Seattle, Tacoma, Bellevue, Everett) levy a SEPARATE CITY B&O on top, kept
 * qualitative. A HIGH COMBINED SALES/USE TAX — a 6.5% STATE rate plus local, DESTINATION-BASED, commonly landing
 * ~8.5–10.5% by location (among the highest in the US; specific combined local rates framed qualitatively — link
 * the DOR rate lookup). A 7% CAPITAL-GAINS tax on owners' long-term gains above a standard deduction ($278,000 for
 * 2025; +2.9% over $1M) — an INDIVIDUAL excise tax, advisory/coordination only. WA payroll premiums: PFML at 1.13%
 * for 2026 and WA Cares at 0.58% (employee-paid). Metros Seattle/Spokane/Tacoma/Vancouver/Bellevue/Everett/Kent;
 * 39 counties, Puget-Sound-centric; Seattle tech/cloud, Boeing aerospace, Amazon e-commerce, ports & logistics.
 * NO street address (areaServed-only — DE is the only real-address state). Pricing uses ONLY canonical WA figures
 * (monthly from $400/mo; cleanup from $1,200; setup from $750). DO NOT call the B&O an income tax.
 *
 * ROUTING (WA is a CORE state — 6 essentials only): cross-links go ONLY to the 5 WA siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/washington/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file WA/federal returns,
 * the B&O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax, or the city B&O return, and
 * does NOT represent before tax authorities; the client's CPA/EA files. No founder/personal name in visible
 * content. The no-income-tax (no state withholding), the B&O rates (retailing 0.471%, wholesaling/manufacturing
 * 0.484%, service tiered from 1.5%), the 6.5% state sales tax, the 7% capital-gains tax ($278k 2025 deduction),
 * the PFML 1.13% (2026), and the WA Cares 0.58% are VERIFIED and stated; specific combined local sales-tax rates,
 * city B&O rates, and the exact service-B&O top tier framed qualitatively. provider = #organization; areaServed =
 * State Washington (sameAs Washington_(state)); reviewedBy #david-westgate on the WebPage. NO
 * LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Washington small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/washington/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/washington/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">sales-tax tracking</a> at the correct combined rate by location (the 6.5% state rate plus local, destination-based), and <a href=\"/quickbooks/payroll/\">payroll with no state income-tax withholding</a> &mdash; because Washington has no income tax &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; and so the <strong>gross receipts behind the Business &amp; Occupation (B&amp;O) tax</strong> are tracked by classification, with no deduction for costs, plus any <strong>city B&amp;O</strong> where it applies. If you run a <strong>technology, aerospace, e-commerce, or professional-services operation</strong>, we keep payer reconciliation, job and standard costing, inventory, WIP, and per-location books clean; if you have <strong>employees</strong>, payroll is simpler on the income-tax side &mdash; Washington has <strong>no state income-tax withholding</strong> &mdash; but we configure the <strong>Washington payroll premiums</strong> (Paid Family &amp; Medical Leave and WA Cares), and we charge the <strong>high combined sales &amp; use tax</strong> at the right rate by location. Your CPA files your returns, determines any <strong>capital-gains tax</strong>, and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file federal returns, the B&amp;O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax, or the city B&amp;O return, and we don&rsquo;t represent you before the Washington Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 39 Washington counties &mdash; from Seattle&rsquo;s cloud and tech economy to Tacoma&rsquo;s port and logistics, Everett&rsquo;s Boeing aerospace, Spokane, Vancouver, Bellevue, and Kent &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Washington small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Washington small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the sales &amp; use tax configured at the correct combined rate by location (the 6.5% state rate plus local, destination-based), gross-receipts tracking by Business &amp; Occupation (B&amp;O) classification, and payroll set up correctly &mdash; Washington has no state income-tax withholding, but the PFML and WA Cares premiums apply &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/washington/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the sales &amp; use tax at the combined rate by location, gross-receipts tracking by B&amp;O classification, clean cost-basis records so your CPA can determine any capital-gains tax, and correct payroll with the Washington premiums." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Washington small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its WA cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the sales-tax items configured for the combined rate by location plus the Washington payroll premiums and no-state-withholding payroll set from the start.", href: "/find-an-accountant/washington/quickbooks-setup/", cta: "Washington QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/washington/bookkeeping-services/", cta: "Washington bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing a single sales-tax rate that missed the destination-based local layers and a tangled equity section, and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/washington/quickbooks-cleanup/", cta: "Washington cleanup &rarr;" },
    { num: "04 &middot; WA tax &amp; payroll", title: "Sales tax, B&amp;O &amp; payroll", body: "The sales &amp; use tax configured at the correct combined rate by location (the 6.5% state rate plus local, destination-based), the Business &amp; Occupation (B&amp;O) gross-receipts tax tracked by classification (and by city where a local B&amp;O applies) with no cost deduction, and payroll set up with the Washington premiums (PFML and WA Cares) and no state income-tax withholding (Washington has none) &mdash; so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "WA payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; B&amp;O-ready (gross receipts tracked by classification, with clean cost-basis records for any owner capital-gains tax), with the sales &amp; use tax sub-reconciled by location &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/washington/", cta: "Washington overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales &amp; use tax at the combined rate by location (6.5% state + local, destination-based)",
      "Business &amp; Occupation (B&amp;O) gross receipts tracked by classification (plus city B&amp;O)",
      "Clean cost-basis &amp; gain records for any owner capital-gains tax",
      "Payroll with the Washington premiums (PFML + WA Cares), no state income-tax withholding; multi-state set per work state",
      "Payer reconciliation, job costing, inventory, WIP &amp; per-location books",
      "Year-end handoff to your CPA &mdash; sales &amp; use tax and equity sub-reconciled",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Washington &amp; federal returns",
      "Files the B&amp;O / Combined Excise Tax Return (plus any city B&amp;O)",
      "Files the sales-tax return &amp; the capital-gains tax",
      "Represents you before the Washington Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Washington founder their margins are slipping, their owner draws are outrunning profit, which Business &amp; Occupation (B&amp;O) classification a new revenue line falls under, or whether a planned sale of a business interest will trigger the 7% capital-gains tax. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the sales &amp; use tax at the combined rate by location, the Business &amp; Occupation (B&amp;O) gross-receipts tax by classification, capital-gains-ready cost-basis records, the Washington payroll premiums, no-state-withholding payroll, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Washington-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Washington small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Washington small business?", a: "Most Washington small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Washington?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (which in Washington carries no state income-tax withholding, because there&rsquo;s no income tax, though the PFML and WA Cares premiums apply), tracking the sales &amp; use tax at the combined rate by location (the 6.5% state rate plus local, destination-based) and the Business &amp; Occupation (B&amp;O) gross-receipts tax by classification, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Washington?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Washington — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and the sales &amp; use tax configured at the correct combined rate by location (the 6.5% state rate plus local, destination-based) along with payroll set up correctly &mdash; Washington has no state income-tax withholding, but the PFML and WA Cares premiums apply &mdash; from day one. We handle the setup and ongoing books; your CPA or attorney handles entity filing and the B&amp;O and sales-tax registrations. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Washington engagements, especially for Seattle technology and SaaS firms whose revenue lines span multiple Business &amp; Occupation (B&amp;O) classifications, multi-location retailers charging a single sales-tax rate instead of the destination-based combined rate, and manufacturers whose equity sections tangled as they scaled. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, fixing a single sales-tax rate that missed the local layers, tracking gross receipts by B&amp;O classification, and cleaning the equity section &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and B&amp;O tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Washington, federal, B&amp;O / Combined Excise Tax, payroll, sales-tax, and capital-gains returns, and represents you before the Washington Department of Revenue. Most Washington small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/washington/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Washington Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Washington small businesses across all 39 counties, coordinated with your CPA — the day-to-day financial backbone, with no income tax (so no state withholding), the Business & Occupation (B&O) gross-receipts tax tracked by classification (plus city B&O), the high combined sales & use tax charged correctly by location (6.5% state plus local), and clean cost-basis records for the 7% capital-gains tax.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/washington-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#wa-svc-smb-summary","#wa-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Washington","item":"https://techbrot.com/find-an-accountant/washington/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Washington Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the sales & use tax configured at the correct combined rate by location (6.5% state plus local, destination-based), Business & Occupation (B&O) gross-receipts tracking by classification (plus city B&O), capital-gains-ready cost-basis records, and Washington payroll premium setup (PFML and WA Cares) with no state income-tax withholding for Washington small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Washington or federal tax returns, the B&O / Combined Excise Tax Return, the sales-tax return, or the capital-gains tax, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Washington","sameAs":"https://en.wikipedia.org/wiki/Washington_(state)"},
          "audience":{"@type":"BusinessAudience","name":"Washington small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

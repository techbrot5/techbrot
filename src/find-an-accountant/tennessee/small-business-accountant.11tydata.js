/* /find-an-accountant/tennessee/small-business-accountant/ — t-money TN SERVICE child. NEW page.
 * Structure mirrors the proven AZ/GA/OH/MD/PA/NJ/MI small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * TENNESSEE LOCALIZATION (per TN-FACTS.md — the ONLY source for TN figures): Arizona's flat 2.5% income tax /
 * TPT / prime-contracting framing replaced with Tennessee — NO individual income tax at all (the Hall tax on
 * investment income was fully repealed for tax years beginning Jan 1, 2021), so payroll carries NO state
 * income-tax withholding (federal + FICA + SUTA only). The TN-distinct business taxes: the FRANCHISE & EXCISE
 * (F&E) tax — a 6.5% EXCISE on net earnings plus a 0.25% FRANCHISE tax on net worth ($0.25 per $100, a $100
 * minimum; net-worth-only since the 2024 property-measure/Schedule G repeal), filed together on the FAE 170; the
 * separate BUSINESS TAX — a GROSS-RECEIPTS tax (a state business tax + a city business tax) owed once a business
 * grosses $100,000 in a jurisdiction, rates varying by classification; and a HIGH COMBINED SALES TAX — a 7% STATE
 * rate plus a local option up to 2.75% (multiples of 0.25), every locality has one, so the combined rate commonly
 * lands near 9.25–9.75% (among the highest in the US; specific combined local rates framed qualitatively — link
 * the DOR local-sales-tax source). Metros Nashville/Memphis/Knoxville/Chattanooga/Clarksville/Murfreesboro/
 * Franklin/Johnson City; 95 counties across 3 Grand Divisions; healthcare-management (Nashville/HCA), logistics
 * (Memphis/FedEx), auto & EV manufacturing (Nissan, VW, GM, Ford BlueOval City). NO street address (areaServed-only
 * — all states are areaServed-only (no street address)). Pricing uses ONLY canonical TN figures (monthly from $400/mo; cleanup from
 * $1,200; setup from $750).
 *
 * ROUTING (TN is a CORE state — 6 essentials only): cross-links go ONLY to the 5 TN siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/tennessee/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file TN/federal
 * income-tax returns, the F&E (FAE 170) return, the business-tax return, or the sales-tax return, and does NOT
 * represent before tax authorities; the client's CPA/EA files. No founder/personal name in visible content. The
 * no-individual-income-tax (Hall repealed 2021), the 6.5% excise, the 0.25% franchise ($100 min), the $100,000
 * business-tax threshold, and the 7% state sales tax + 2.75% local max are VERIFIED and stated; specific
 * combined local sales-tax rates framed qualitatively. provider = #organization; areaServed = State Tennessee;
 * reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Tennessee small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/tennessee/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/tennessee/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">sales-tax tracking</a> at the correct combined rate by location (the 7% state rate plus a local option up to 2.75%), and <a href=\"/quickbooks/payroll/\">payroll with no state income-tax withholding</a> &mdash; because Tennessee has no individual income tax &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; and so the <strong>net-worth and net-earnings figures</strong> behind the <strong>Franchise &amp; Excise (F&amp;E)</strong> tax (a 6.5% excise plus a 0.25% franchise tax, $100 minimum) are clean. If you run a <strong>healthcare, logistics, manufacturing, or professional-services operation</strong>, we keep payer reconciliation, job and standard costing, inventory, WIP, and per-location books clean; if you have <strong>employees</strong>, payroll is simpler on the income-tax side &mdash; Tennessee has <strong>no state income-tax withholding</strong> &mdash; and we track the <strong>business (gross-receipts) tax</strong> so the <strong>$100,000</strong> threshold across state and city stays visible, and charge the <strong>high combined sales tax</strong> at the right rate by location. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the Franchise &amp; Excise (FAE 170) return, the business (gross-receipts) tax return, or the sales-tax return, and we don&rsquo;t represent you before the Tennessee Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 95 Tennessee counties &mdash; from Nashville&rsquo;s healthcare-management and music economy to Memphis&rsquo;s logistics hub, Knoxville, Chattanooga, Clarksville, Murfreesboro, Franklin, and the Tri-Cities &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Tennessee small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Tennessee small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the sales tax configured at the correct combined rate by location (the 7% state rate plus a local option up to 2.75%), gross-receipts tracking so the $100,000 business-tax threshold is visible, and payroll set up correctly &mdash; Tennessee has no state income-tax withholding &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/tennessee/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the sales tax at the combined rate by location, the gross-receipts tracking for the business tax, a clean equity section for the franchise-tax net-worth base, and correct multi-state payroll." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Tennessee small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its TN cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the sales-tax items configured for the combined rate by location plus no-state-withholding payroll set from the start.", href: "/find-an-accountant/tennessee/quickbooks-setup/", cta: "Tennessee QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/tennessee/bookkeeping-services/", cta: "Tennessee bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing a single sales-tax rate that missed the local layers and a tangled equity section, and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/tennessee/quickbooks-cleanup/", cta: "Tennessee cleanup &rarr;" },
    { num: "04 &middot; TN tax &amp; payroll", title: "Sales tax, business tax &amp; payroll", body: "The sales tax configured at the correct combined rate by location (the 7% state rate plus a local option up to 2.75%), the business (gross-receipts) tax tracked by jurisdiction so the $100,000 threshold stays visible, and payroll set up with no state income-tax withholding (Tennessee has none) &mdash; so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "TN payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; F&amp;E-ready (a clean net-worth base for the franchise tax and net earnings for the excise), with the sales tax sub-reconciled by location and gross receipts tracked for the business tax &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/tennessee/", cta: "Tennessee overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales tax at the combined rate by location (7% state + local up to 2.75%)",
      "Business (gross-receipts) tax tracked by jurisdiction (the $100,000 threshold)",
      "F&amp;E-ready net-worth &amp; net-earnings figures for the FAE 170",
      "Payroll with no Tennessee state income-tax withholding; multi-state set per work state",
      "Payer reconciliation, job costing, inventory, WIP &amp; per-location books",
      "Year-end handoff to your CPA &mdash; sales tax and equity sub-reconciled",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Tennessee &amp; federal income-tax returns",
      "Files the Franchise &amp; Excise (FAE 170) return",
      "Files the business (gross-receipts) tax return &amp; the sales-tax return",
      "Represents you before the Tennessee Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a Tennessee founder their margins are slipping, their owner draws are outrunning profit, when they&rsquo;ve crossed the $100,000 business-tax threshold in a new county, or whether their equity section will support the franchise-tax net-worth base this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the sales tax at the combined rate by location, the business (gross-receipts) tax at $100,000, F&amp;E-ready books, no-state-withholding payroll, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Tennessee-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Tennessee small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Tennessee small business?", a: "Most Tennessee small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Tennessee?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (which in Tennessee carries no state income-tax withholding, because there&rsquo;s no individual income tax), tracking the sales tax at the combined rate by location (the 7% state rate plus a local option up to 2.75%) and the business (gross-receipts) tax at the $100,000 threshold, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Tennessee?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Tennessee — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and the sales tax configured at the correct combined rate by location (the 7% state rate plus a local option up to 2.75%) along with payroll set up correctly &mdash; Tennessee has no state income-tax withholding &mdash; from day one. We handle the setup and ongoing books; your CPA or attorney handles entity filing and the business-tax and sales-tax registrations. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Tennessee engagements, especially for Nashville services firms that crossed the $100,000 business-tax threshold in a second county unaware, multi-location retailers charging a single sales-tax rate, and manufacturers whose equity sections tangled as they scaled. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, fixing a single sales-tax rate that missed the local layers, and cleaning the equity section for the franchise-tax base &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and business-tax tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Tennessee, federal, Franchise &amp; Excise (FAE 170), business (gross-receipts) tax, payroll, and sales-tax returns, and represents you before the Tennessee Department of Revenue. Most Tennessee small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/tennessee/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Tennessee Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Tennessee small businesses across all 95 counties, coordinated with your CPA — the day-to-day financial backbone, with no individual income tax (so no state withholding), the Franchise & Excise (F&E) tax kept ready (6.5% excise plus 0.25% franchise), the business (gross-receipts) tax tracked at the $100,000 threshold, and the high combined sales tax charged correctly by location (7% state plus up to 2.75% local).","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/tennessee-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#tn-svc-smb-summary","#tn-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Tennessee","item":"https://techbrot.com/find-an-accountant/tennessee/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Tennessee Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the sales tax configured at the correct combined rate by location (7% state plus up to 2.75% local), business (gross-receipts) tax tracking at the $100,000 threshold, Franchise & Excise (F&E) readiness (6.5% excise plus 0.25% franchise), and no-state-withholding payroll for Tennessee small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Tennessee or federal tax returns, the F&E (FAE 170) return, the business-tax return, or the sales-tax return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Tennessee","sameAs":"https://en.wikipedia.org/wiki/Tennessee"},
          "audience":{"@type":"BusinessAudience","name":"Tennessee small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

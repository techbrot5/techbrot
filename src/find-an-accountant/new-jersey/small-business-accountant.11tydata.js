/* /find-an-accountant/new-jersey/small-business-accountant/ — t-money NJ SERVICE child. NEW page.
 * Structure mirrors the proven PA/IN/NY/DE small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * NEW JERSEY LOCALIZATION (per NJ-FACTS.md — the ONLY source for NJ figures): Pennsylvania's flat
 * 3.07% PIT / Act 32 EIT / 6%-7%-8% sales tax replaced with New Jersey — a graduated gross income tax
 * (1.4% to a 10.75% top rate over $1M; middle brackets framed qualitatively); the UI/TDI/FLI/WF
 * payroll-contribution stack with both employer and employee contributions across two 2026 wage bases
 * ($44,800 and $171,100; employee TDI 0.19%, FLI 0.23%; employer UI/TDI experience-rated, qualitative);
 * the PA–NJ reciprocal agreement (Form NJ-165); Newark and Jersey City employer payroll taxes; the
 * 6.625% sales tax with the 3.3125% UEZ/Salem half-rate; the Corporation Business Tax (9% / 2.5% transit
 * fee); and BAIT as the advisory hook. Metros Newark/Jersey City/Paterson/Elizabeth/Edison/Trenton/
 * Camden/Hoboken; all 21 counties; borders DE/PA/NY; NO street address (areaServed-only — no state carries a
 * street address). Pricing uses ONLY canonical NJ figures (monthly from $400/mo; cleanup from
 * $1,200; setup from $750).
 *
 * ROUTING (NJ is a CORE state — only 6 pages): cross-links go ONLY to the 4 NJ siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant).
 * NEVER link a /find-an-accountant/new-jersey/<x>/ path outside the 4 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file NJ/federal
 * income-tax returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings,
 * the sales-tax return, or the Newark/Jersey City payroll-tax returns, and does NOT represent before tax
 * authorities; the client's CPA/EA files. No founder/personal name in visible content. Never quotes a GIT
 * middle bracket, an experience-rated employer UI/TDI rate, or a Newark/Jersey City payroll-tax rate as a
 * fixed figure — those are framed qualitatively. provider = #organization; areaServed = State New Jersey;
 * reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most New Jersey small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/new-jersey/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/new-jersey/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">6.625% sales-tax tracking with the UEZ/Salem half-rate</a>, and the <a href=\"/quickbooks/payroll/\">UI/TDI/FLI/WF payroll stack across two wage bases</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>BAIT-ready</strong> for pass-throughs weighing the election. If you run a <strong>pharma, logistics, construction, or professional-services operation</strong>, we keep job-costing, inventory, and per-location books clean; if you have <strong>employees</strong>, we configure the <strong>UI/TDI/FLI/WF payroll stack across both 2026 wage bases</strong> ($44,800 and $171,100), set up <strong>PA&ndash;NJ reciprocity</strong> per employee with Form NJ-165, and track the <strong>Newark and Jersey City employer payroll taxes</strong> where they apply. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, the sales-tax return, or the Newark or Jersey City payroll-tax returns, and we don&rsquo;t represent you before the tax authorities. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 21 New Jersey counties &mdash; from Newark, Jersey City, and the North Jersey/NYC corridor to Edison, Trenton, Camden, and the South Jersey/Philadelphia metro &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: New Jersey small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most New Jersey small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, sales-tax tracking across the 6.625% rate (and the 3.3125% UEZ/Salem half-rate), and the UI/TDI/FLI/WF payroll stack across both wage bases &mdash; with PA&ndash;NJ reciprocity (Form NJ-165) for cross-border staff &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/new-jersey/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the multi-fund payroll stack, the UEZ half-rate sales tax, and the Newark/Jersey City payroll taxes if you operate in those cities." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most New Jersey small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its NJ cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and New Jersey sales-tax and the UI/TDI/FLI/WF payroll stack configured from the start.", href: "/find-an-accountant/new-jersey/quickbooks-setup/", cta: "New Jersey QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/new-jersey/bookkeeping-services/", cta: "New Jersey bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/new-jersey/quickbooks-cleanup/", cta: "New Jersey cleanup &rarr;" },
    { num: "04 &middot; NJ payroll &amp; tax", title: "Payroll stack, reciprocity &amp; sales tax", body: "The UI/TDI/FLI/WF contributions configured across both 2026 wage bases, PA&ndash;NJ reciprocity set per employee with Form NJ-165, the Newark and Jersey City employer payroll taxes tracked where they apply, and the 6.625% sales tax (with the 3.3125% UEZ/Salem half-rate) tracked by location, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "NJ payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; BAIT-ready for pass-throughs, with multi-fund payroll and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/new-jersey/", cta: "New Jersey overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "Sales-tax tracking at 6.625% &amp; the 3.3125% UEZ/Salem half-rate",
      "UI/TDI/FLI/WF payroll stack across both wage bases",
      "PA&ndash;NJ reciprocity (Form NJ-165) &amp; Newark/Jersey City payroll-tax tracking",
      "Job costing, inventory &amp; per-location books",
      "Year-end handoff to your CPA",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files New Jersey &amp; federal income-tax returns",
      "Files the Corporation Business Tax, gross income tax &amp; sales-tax return",
      "Files the UI/TDI/FLI &amp; Newark/Jersey City payroll-tax returns",
      "Makes the BAIT election; represents you before the tax authorities",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a New Jersey founder their margins are slipping, their owner draws are outrunning profit, that a new hire&rsquo;s NJ-165 just changed which state you withhold for, or that their pass-through should weigh the BAIT election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, 6.625% / 3.3125% sales-tax tracking, the UI/TDI/FLI/WF payroll stack, PA&ndash;NJ reciprocity, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, New Jersey-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: New Jersey small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my New Jersey small business?", a: "Most New Jersey small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in New Jersey?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including the UI/TDI/FLI/WF contribution stack across two wage bases and PA&ndash;NJ reciprocity under Form NJ-165), tracking the 6.625% sales tax and its 3.3125% UEZ/Salem half-rate, and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in New Jersey?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in New Jersey — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and New Jersey sales-tax tracking plus the UI/TDI/FLI/WF payroll stack across both wage bases &mdash; with PA&ndash;NJ reciprocity (Form NJ-165) where you employ cross-border staff &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common New Jersey engagements, especially for Port Newark&ndash;Elizabeth logistics firms, central-Jersey pharma and manufacturers, and Jersey City professional-services firms riding regional growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting mis-set payroll wage bases and a full-rate 6.625% setup in a UEZ &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and UI/TDI/FLI tracking, and operational accounting, and we coordinate with your CPA or EA, who files your New Jersey, federal, Corporation Business Tax, gross income tax, payroll, and city returns and represents you before the tax authorities. Most New Jersey small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-jersey/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New Jersey Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for New Jersey small businesses across all 21 counties, coordinated with your CPA — the day-to-day financial backbone, with 6.625% sales-tax tracking (and the 3.3125% UEZ/Salem half-rate) and the UI/TDI/FLI/WF payroll stack across two wage bases set up with PA–NJ reciprocity.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-jersey-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nj-svc-smb-summary","#nj-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New Jersey","item":"https://techbrot.com/find-an-accountant/new-jersey/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"New Jersey Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, 6.625% sales-tax tracking with the 3.3125% UEZ/Salem half-rate, the UI/TDI/FLI/WF payroll-contribution stack across two wage bases, PA–NJ reciprocity (Form NJ-165), and Newark/Jersey City employer payroll-tax tracking for New Jersey small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file New Jersey or federal tax returns, the Corporation Business Tax, the gross income tax, the UI/TDI/FLI payroll filings, the Newark/Jersey City payroll-tax returns, or the sales-tax return, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New Jersey","sameAs":"https://en.wikipedia.org/wiki/New_Jersey"},
          "audience":{"@type":"BusinessAudience","name":"New Jersey small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

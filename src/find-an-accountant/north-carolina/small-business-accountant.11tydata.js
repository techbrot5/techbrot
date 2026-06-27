/* /find-an-accountant/north-carolina/small-business-accountant/ — t-money NC SERVICE child. NEW page.
 * Structure mirrors the proven GA/OH/MD/PA/NJ/MI small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * NORTH CAROLINA LOCALIZATION (per NC-FACTS.md — the ONLY source for NC figures): Georgia's flat 4.99%
 * income tax / net worth tax / LOST-SPLOST local-option sales tax replaced with North Carolina — a FLAT 3.99%
 * individual income tax for 2026 (down from 4.25% in 2025; the lowest flat rate in the Southeast set, further
 * trigger-based reductions possible under S.L. 2023-134); the NC-distinct HEADLINE — a corporate income tax
 * being PHASED OUT TO ZERO (2.00% for 2026, reaching 0% by 2030 under S.L. 2021-180 / G.S. 105-130.3C; NC is
 * the only state eliminating it); the SURVIVING FRANCHISE TAX — a net-worth-style annual business tax that does
 * NOT phase out: $1.50 per $1,000 of the tax base, $200 minimum, $500 max on the first $1,000,000, holding
 * companies capped at $150,000, filed on the CD-405/CD-401S; the elective Taxed Pass-Through Entity (Taxed PTE)
 * election (G.S. 105-154.1, a SALT-cap workaround; CPA elects and files); the 4.75% STATE sales and use tax
 * PLUS county (2.00%/2.25%) and transit (0.50% in four counties) rates, so the COMBINED rate varies by county
 * (6.75%–7.50%, Mecklenburg/Charlotte rising to 8.25% on July 1, 2026) — QuickBooks must apply the correct
 * combined rate by location; and the GA-shared differentiation — NO local or city income tax (state-only
 * withholding) BUT NO reciprocity with any state, so a nonresident working in North Carolina is generally
 * withheld for North Carolina on the North Carolina-source wages (matters for multi-state/remote employers).
 * Metros Charlotte (Mecklenburg)/Raleigh (Wake)/Greensboro (Guilford)/Durham/Winston-Salem (Forsyth)/
 * Fayetteville (Cumberland)/Wilmington (New Hanover)/Asheville (Buncombe); all 100 counties; Charlotte banking
 * + the Research Triangle tech/biotech + Triad manufacturing; NO street address (areaServed-only — DE is the
 * only areaServed-only state). Pricing uses ONLY canonical NC figures (monthly from $400/mo; cleanup from $1,200;
 * setup from $750).
 *
 * ROUTING (NC is a CORE state — 6 essentials only): cross-links go ONLY to the 5 NC siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/north-carolina/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file NC/federal
 * income-tax returns, the corporate income tax, the franchise tax, the individual income tax, the sales-tax
 * return, or the Taxed PTE election, and does NOT represent before tax authorities; the client's CPA/EA files.
 * No founder/personal name in visible content. The flat 3.99% rate, the 2.00%-to-zero-by-2030 corporate
 * phase-out, the franchise-tax $1.50/$1,000 + $200 min + $500-on-first-$1M + $150,000 holding-company cap, and
 * the 4.75% state sales tax are VERIFIED and stated; combined county sales-tax rates framed qualitatively
 * (6.75%–7.50%). provider = #organization; areaServed = State North Carolina; reviewedBy #david-westgate on
 * the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most North Carolina small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/north-carolina/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/north-carolina/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">county sales-tax tracking</a> (4.75% state plus county and transit, combined 6.75&ndash;7.50%), and <a href=\"/quickbooks/payroll/\">state withholding on all North Carolina-source wages</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>Taxed-PTE-ready</strong> for pass-throughs weighing North Carolina&rsquo;s entity-level election. If you run a <strong>manufacturing, logistics, construction, or professional-services operation</strong>, we keep job-costing, inventory, landed cost, and per-location books clean; if you have <strong>employees</strong>, we configure <strong>state-only withholding</strong> &mdash; North Carolina has <strong>no local income tax but no reciprocity</strong>, so all North Carolina-source wages are withheld for North Carolina and multi-state staff are set per work state &mdash; and track the <strong>4.75% state sales tax plus county and transit add-ons</strong> by jurisdiction, with the balance sheet kept <strong>franchise-tax-ready</strong> for the CD-405/CD-401S even as the corporate income tax phases out. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the corporate income tax, the franchise tax, the individual income tax, the sales-tax return, or the Taxed PTE election, and we don&rsquo;t represent you before the North Carolina Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 100 North Carolina counties &mdash; from Charlotte&rsquo;s banking and fintech corridor and the Research Triangle&rsquo;s tech and biotech to Greensboro, Durham, Winston-Salem, Fayetteville, Wilmington, and Asheville &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: North Carolina small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most North Carolina small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the 4.75% state sales tax plus county and transit add-ons (combined 6.75&ndash;7.50%) configured by jurisdiction, and state-only payroll withholding set up correctly &mdash; North Carolina has no local income tax but no reciprocity, so all North Carolina-source wages are withheld for North Carolina &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and tax registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including the county sales tax by jurisdiction, multi-state withholding with no reciprocity assumptions, a clean equity section, and franchise-tax and Taxed-PTE readiness for the entity-level election." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most North Carolina small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its NC cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the 4.75% North Carolina sales tax with the county and transit add-ons configured by jurisdiction and state payroll withholding set from the start.", href: "/find-an-accountant/north-carolina/quickbooks-setup/", cta: "North Carolina QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/north-carolina/bookkeeping-services/", cta: "North Carolina bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing wrong sales-tax jurisdictions, and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/north-carolina/quickbooks-cleanup/", cta: "North Carolina cleanup &rarr;" },
    { num: "04 &middot; NC payroll &amp; tax", title: "Sales tax, withholding &amp; franchise tax", body: "The 4.75% state sales tax plus county and transit add-ons (combined 6.75&ndash;7.50%, Mecklenburg rising to 8.25% on July 1, 2026) configured by jurisdiction, state-only payroll withholding set per work state (North Carolina has no reciprocity, so all North Carolina-source wages are withheld for North Carolina), and the balance sheet kept franchise-tax-ready, so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "NC payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; Taxed-PTE-ready for pass-throughs weighing the entity-level election, with the equity section kept CD-405-ready for the surviving franchise tax as the corporate income tax phases out, and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/north-carolina/", cta: "North Carolina overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "4.75% state + county &amp; transit sales tax by jurisdiction (6.75&ndash;7.50%)",
      "State-only withholding &mdash; all North Carolina-source wages (no reciprocity)",
      "Multi-state payroll set per work state for remote staff",
      "Job costing, inventory &amp; per-location books &middot; franchise-tax- and Taxed-PTE-ready",
      "Year-end handoff to your CPA &mdash; CD-405-ready",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files North Carolina &amp; federal income-tax returns",
      "Files the corporate income tax &amp; the franchise tax (CD-405/CD-401S) &amp; the sales-tax return",
      "Files the individual income tax &amp; makes the Taxed PTE election",
      "Represents you before the North Carolina Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell a North Carolina founder their margins are slipping, their owner draws are outrunning profit, that a new shipping lane just triggered sales-tax nexus in more counties &mdash; each with its own combined rate &mdash; that their net worth has moved them up the franchise-tax base, or that their pass-through should weigh the Taxed PTE election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, franchise-tax, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the 4.75% state + county and transit sales tax by jurisdiction, state-only withholding (no reciprocity), franchise-tax- and Taxed-PTE-ready books, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, North Carolina-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: North Carolina small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my North Carolina small business?", a: "Most North Carolina small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in North Carolina?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including state-only withholding &mdash; North Carolina has no local income tax, but no reciprocity either, so all North Carolina-source wages are withheld for North Carolina), tracking the 4.75% state sales tax plus the county and transit add-ons (combined 6.75&ndash;7.50%), and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in North Carolina?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in North Carolina — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and North Carolina sales-tax tracking (the 4.75% state rate plus the county and transit add-ons, so the combined rate runs 6.75&ndash;7.50% and is set by jurisdiction) along with state payroll withholding configured correctly &mdash; North Carolina has no local income tax but no reciprocity, so all North Carolina-source wages are withheld for North Carolina &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and tax registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common North Carolina engagements, especially for Charlotte fintech and professional-services firms, Research Triangle tech and biotech companies weighing the franchise tax, and Triad manufacturers riding cross-border growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong sales-tax jurisdictions and a messy equity section that obscures the franchise-tax base &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, sales-tax and state-withholding tracking, and operational accounting, and we coordinate with your CPA or EA, who files your North Carolina, federal, corporate income tax, franchise tax (CD-405/CD-401S), individual income, payroll, and sales-tax returns and makes the Taxed PTE election, and represents you before the North Carolina Department of Revenue. Most North Carolina small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/north-carolina/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"North Carolina Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for North Carolina small businesses across all 100 counties, coordinated with your CPA — the day-to-day financial backbone, with the 4.75% state sales tax plus county and transit add-ons (combined 6.75-7.50%), the flat 3.99% income tax for 2026, the corporate income tax phasing out to zero by 2030 (2.00% for 2026), the surviving franchise tax kept CD-405-ready, and state-only withholding on all North Carolina-source wages (no reciprocity).","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-north-carolina-small-business-accountant.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nc-svc-smb-summary","#nc-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"North Carolina","item":"https://techbrot.com/find-an-accountant/north-carolina/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"North Carolina Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the 4.75% state sales tax plus county and transit add-ons (combined 6.75-7.50% by jurisdiction), franchise-tax readiness as the corporate income tax phases out to zero by 2030, Taxed PTE readiness, and state-only withholding on all North Carolina-source wages (no reciprocity) for North Carolina small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file North Carolina or federal tax returns, the corporate income tax, the franchise tax, the individual income tax, the sales-tax return, or the Taxed PTE election, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"North Carolina","sameAs":"https://en.wikipedia.org/wiki/North_Carolina"},
          "audience":{"@type":"BusinessAudience","name":"North Carolina small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

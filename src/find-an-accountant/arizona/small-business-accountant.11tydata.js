/* /find-an-accountant/arizona/small-business-accountant/ — t-money AZ SERVICE child. NEW page.
 * Structure mirrors the proven GA/OH/MD/PA/NJ/MI small-business child: JSON front-matter in the .njk; this
 * file supplies the content arrays + an eleventyComputed pageGraph (WebPage, BreadcrumbList,
 * Service, FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders — single source of truth.
 *
 * ARIZONA LOCALIZATION (per AZ-FACTS.md — the ONLY source for AZ figures): Georgia's flat 4.99% / net worth
 * tax / 4% local-option SALES tax framing replaced with Arizona — a FLAT 2.5% individual income tax for 2026
 * (in place since 2023, the LOWEST flat income-tax rate of any U.S. state); a flat 4.9% CORPORATE income tax,
 * plus the elective Pass-Through Entity (PTE) tax at 2.5% (a SALT-cap workaround; CPA elects and files; NO net
 * worth or franchise tax); and the AZ-DISTINCT headline — the TRANSACTION PRIVILEGE TAX (TPT), which is NOT an
 * ordinary sales tax but a tax on the SELLER'S privilege of doing business, owed by the vendor and levied BY
 * BUSINESS CLASSIFICATION (retail, contracting, restaurant, commercial lease, etc.) at a 5.6% STATE rate plus
 * county and city layers (most city TPT reported through ADOR's centralized AZTaxes.gov portal; each city sets
 * its own rate) — so the COMBINED rate varies by activity and location, and QuickBooks must apply the right
 * classification and combined rate. PRIME CONTRACTING: construction is taxed on 65% of gross receipts (the
 * other 35% a materials deduction; the prime contractor owes it, not the subs; MRRA taxed differently). And
 * the AZ withholding shape — NO local or city income tax (state-only withholding) with the 60-DAY nonresident
 * rule and the CA/IN/OR/VA resident EXEMPTION (Form 140NR + credit). Metros Phoenix/Tucson/Mesa/Chandler/
 * Scottsdale/Gilbert/Tempe/Flagstaff; all 15 counties (Maricopa-centric); semiconductors (TSMC, Intel),
 * construction boom, aerospace/defense (Tucson). NO street address (areaServed-only — DE is the only
 * real-address state). Pricing uses ONLY canonical AZ figures (monthly from $400/mo; cleanup from $1,200;
 * setup from $750). TPT is NEVER called a sales tax.
 *
 * ROUTING (AZ is a CORE state — 6 essentials only): cross-links go ONLY to the 5 AZ siblings + pillar, or to
 * existing GLOBAL pages (payroll, sales-tax-compliance, fractional-cfo, bookkeeper-vs-accountant, file-review).
 * NEVER link a /find-an-accountant/arizona/<x>/ path outside the 5 siblings + pillar.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. TechBrot is an independent Certified
 * QuickBooks ProAdvisor / bookkeeping firm — NOT a CPA or tax-prep firm: it does NOT file AZ/federal
 * income-tax returns, the corporate income tax, the individual income tax, the TPT return, or the pass-through
 * entity (PTE) election, and does NOT represent before tax authorities; the client's CPA/EA files. No
 * founder/personal name in visible content. The flat 2.5% rate, the 4.9% corporate rate, the PTE 2.5%, the
 * 5.6% state TPT, and the prime-contracting 65% base are VERIFIED and stated; specific city/county TPT rates
 * are framed qualitatively (link the ADOR rate table). provider = #organization; areaServed = State Arizona;
 * reviewedBy #david-westgate on the WebPage. NO LocalBusiness/PostalAddress. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — real-H2 prose section right after the in-brief. (H2: The short version.)
  summary: [
    "Most Arizona small businesses need <strong>both a bookkeeper and a CPA</strong> &mdash; and in that order. TechBrot is the day-to-day financial backbone: <a href=\"/find-an-accountant/arizona/bookkeeping-services/\">bookkeeping</a>, <a href=\"/find-an-accountant/arizona/quickbooks-setup/\">QuickBooks setup and cleanup</a>, payroll coordination, <a href=\"/accounting/sales-tax-compliance/\">Transaction Privilege Tax (TPT) tracking</a> by business classification (the 5.6% state rate plus county and city layers, not an ordinary sales tax), and <a href=\"/quickbooks/payroll/\">state-only withholding on Arizona-source wages</a> &mdash; kept by a named Certified ProAdvisor, fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200).",
    "We keep entity-aware books &mdash; an <strong>LLC, S-corp, or partnership</strong> each reads differently on the balance sheet, and the chart of accounts is built so owner draws, distributions, guaranteed payments, and reasonable S-corp compensation land where your CPA expects them &mdash; <strong>PTE-ready</strong> for pass-throughs weighing Arizona&rsquo;s elective entity-level tax at 2.5%. If you run a <strong>construction, manufacturing, semiconductor, or professional-services operation</strong>, we keep job-costing, the prime-contracting <strong>65% TPT base</strong>, inventory, WIP, and per-location books clean; if you have <strong>employees</strong>, we configure <strong>state-only withholding</strong> &mdash; Arizona has <strong>no local income tax</strong>, so payroll is simpler on the income-tax side, with the <strong>60-day nonresident rule</strong> and the <strong>CA/IN/OR/VA exemption</strong> set per employee &mdash; and track the <strong>TPT by business classification and location</strong> through the centralized ADOR portal. Your CPA files your returns and advises on tax; we keep the books that make their work fast and accurate.",
    "We&rsquo;re <strong>not a CPA or tax-prep firm</strong> &mdash; we don&rsquo;t file income-tax returns, the corporate income tax, the individual income tax, the Transaction Privilege Tax (TPT) return, or the pass-through entity (PTE) election, and we don&rsquo;t represent you before the Arizona Department of Revenue. We&rsquo;re the bookkeeping and QuickBooks side, coordinating directly with yours. All 15 Arizona counties &mdash; from the Phoenix metro&rsquo;s semiconductor and construction boom (Phoenix, Mesa, Chandler, Scottsdale, Gilbert, Tempe) to Tucson&rsquo;s aerospace base and Flagstaff &mdash; most industries. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Arizona small business accounting, in five questions.)
  aiSummary: [
    { q: "Do I need an accountant or a bookkeeper?", a: "<strong>Most Arizona small businesses need both, in sequence</strong> &mdash; a bookkeeper to keep books clean monthly, a CPA to file and advise. TechBrot does the bookkeeping/QuickBooks side and coordinates with your CPA, who files. If budget is tight, clean books come first." },
    { q: "What does it cost?", a: "The bookkeeping/QuickBooks work runs <strong>from $400/mo</strong> for monthly service, with QuickBooks setup from <strong>$750</strong> and cleanup from <strong>$1,200</strong> &mdash; fixed-fee against a written scope. CPA tax-return prep is billed separately by them." },
    { q: "I&rsquo;m just starting &mdash; what do I need?", a: "The right entity &amp; QuickBooks setup, a clean industry-specific chart of accounts, the Transaction Privilege Tax (TPT) configured by business classification and location (the 5.6% state rate plus county and city layers, reported through the ADOR portal), and state-only payroll withholding set up correctly &mdash; Arizona has no local income tax, with the 60-day rule and the CA/IN/OR/VA exemption for nonresidents &mdash; from day one. We handle setup and the books; your CPA or attorney handles entity filing and TPT registration." },
    { q: "My books are a mess from fast growth &mdash; help?", a: "Yes &mdash; a one-time <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">cleanup</a> to get the file CPA-ready, then monthly bookkeeping so financials keep pace as you scale &mdash; including TPT by classification, the prime-contracting 65% base for contractors, multi-state withholding with the 60-day and exemption rules, a clean equity section, and PTE readiness for the entity-level election." },
    { q: "Is TechBrot a CPA firm?", a: "<strong>No</strong> &mdash; an independent Certified QuickBooks ProAdvisor &amp; bookkeeping firm. We run the books; your CPA files and represents you. We do not file returns. Most Arizona small businesses use both." },
  ],

  // FINANCIAL BACKBONE — the five services (lift cards, each with its AZ cross-link or global route).
  // (H2: The financial backbone, built and maintained.)
  handle: [
    { num: "01 &middot; Setup", title: "QuickBooks setup, done right", body: "The right QuickBooks edition, a clean industry-specific chart of accounts built around your entity (LLC, S-corp, or partnership), and the Transaction Privilege Tax (TPT) items configured by business classification and location plus state payroll withholding set from the start.", href: "/find-an-accountant/arizona/quickbooks-setup/", cta: "Arizona QuickBooks setup &rarr;" },
    { num: "02 &middot; Monthly", title: "Monthly bookkeeping", body: "Reconciled accounts and owner-ready, CPA-ready statements every month, by a named bookkeeper &mdash; so you always know where the business stands.", href: "/find-an-accountant/arizona/bookkeeping-services/", cta: "Arizona bookkeeping &rarr;" },
    { num: "03 &middot; Cleanup", title: "Cleanup &amp; catch-up", body: "Behind from growth, or commingled across entities? We get the file accurate and CPA-ready &mdash; reclassifying transactions, fixing wrong TPT classifications and full-receipts contractor setups missing the 65% base, and reconciling to a known-good baseline &mdash; then keep it that way.", href: "/find-an-accountant/arizona/quickbooks-cleanup/", cta: "Arizona cleanup &rarr;" },
    { num: "04 &middot; AZ payroll &amp; tax", title: "TPT, withholding &amp; prime contracting", body: "The Transaction Privilege Tax (TPT) configured by business classification and location (the 5.6% state rate plus county and city layers, reported through the centralized ADOR portal), the prime-contracting 65% base set up for construction, and state-only payroll withholding set per work state (Arizona has no local income tax, with the 60-day rule and the CA/IN/OR/VA exemption), so the returns reconcile to the books rather than being guessed at filing time.", href: "/quickbooks/payroll/", cta: "AZ payroll-stack setup &rarr;" },
    { num: "05 &middot; Handoff", title: "Year-end CPA handoff", body: "Clean, documented, entity-aware books delivered to your CPA at year end &mdash; PTE-ready for pass-throughs weighing the 2.5% entity-level election, with the TPT sub-reconciled by classification and per-location reporting clean for multi-site operators &mdash; for faster, cheaper, audit-ready filing.", href: "/find-an-accountant/arizona/", cta: "Arizona overview &rarr;" },
  ],

  // SCOPE SPLIT — what we do vs. what your CPA does (two checklist cards).
  // (H2: What we do — and what your CPA does.)
  scope: [
    { title: "TechBrot", role: "Bookkeeping &amp; QuickBooks &mdash; not tax filing", items: [
      "Bookkeeping, reconciliation &amp; monthly statements",
      "QuickBooks setup, cleanup &amp; management",
      "Entity-aware books (LLC, S-corp, partnership)",
      "TPT by business classification &amp; location (5.6% state + county/city)",
      "Prime-contracting 65% base set up for construction",
      "State-only withholding &mdash; the 60-day rule &amp; the CA/IN/OR/VA exemption",
      "Multi-state payroll set per work state for remote staff",
      "Job costing, inventory, WIP &amp; per-location books &middot; PTE-ready",
      "Year-end handoff to your CPA &mdash; TPT and equity sub-reconciled",
    ] },
    { title: "Your CPA", role: "Files returns &amp; represents you", items: [
      "Files Arizona &amp; federal income-tax returns",
      "Files the corporate income tax &amp; the Transaction Privilege Tax (TPT) return",
      "Files the individual income tax &amp; makes the pass-through entity (PTE) election",
      "Represents you before the Arizona Department of Revenue",
      "Tax planning &amp; formal advice",
      "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Apps can categorize transactions; they can&rsquo;t tell an Arizona founder their margins are slipping, their owner draws are outrunning profit, which TPT classification a new revenue line falls under, whether their construction work is prime contracting or MRRA, or whether their pass-through should make the 2.5% entity-level PTE election this year. Clean books are the foundation; judgment is the value.",
    "Once your books are solid and entity-aware, the question shifts from &ldquo;are the numbers right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> comes in &mdash; a Certified ProAdvisor who knows your numbers turning them into pricing, cash-flow, multi-state nexus, TPT-position, and entity-structure conversations to have with your CPA. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder/personal name).
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Bookkeeping, QuickBooks, the Transaction Privilege Tax (TPT) by classification and location, the prime-contracting 65% base, state-only withholding (60-day rule + CA/IN/OR/VA exemption), PTE-ready books, job costing &middot; income-tax filing coordinated with your CPA/EA (out of our scope)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A, Arizona-specific, answer-first. visible faq__list = FAQPage (same array).
  // (H2: Arizona small business accounting questions.) 2 call-intent answers (#3, #7).
  faq: [
    { q: "Do I need an accountant or a bookkeeper for my Arizona small business?", a: "Most Arizona small businesses need both, in sequence: a bookkeeper (or bookkeeping service) to keep the books clean and current month to month, and a CPA or accountant to file returns and advise on tax. TechBrot provides the bookkeeping and QuickBooks side &mdash; the day-to-day financial backbone &mdash; and coordinates with your CPA, who files. If you only have budget for one to start, clean books come first, because nothing downstream works without them." },
    { q: "What does a small business accountant do in Arizona?", a: "In practice, &lsquo;small business accountant&rsquo; covers several roles: recording and reconciling transactions (bookkeeping), producing financial statements, handling payroll (including state-only withholding &mdash; Arizona has no local income tax, with the 60-day rule and the CA/IN/OR/VA exemption for nonresidents), tracking the Transaction Privilege Tax (TPT) by business classification and location (the 5.6% state rate plus county and city layers), and &mdash; separately &mdash; filing tax returns and giving tax advice (the CPA&rsquo;s role). TechBrot covers the first set as Certified QuickBooks ProAdvisors and coordinates with your CPA for the filing and advisory side." },
    { q: "How much does a small business accountant cost in Arizona?", a: "For the bookkeeping and QuickBooks work TechBrot provides, monthly service starts at $400/mo, QuickBooks setup at $750, and cleanup at $1,200 &mdash; all fixed-fee against a written scope, priced after a free discovery call. Tax-return preparation and filing &mdash; handled by a CPA &mdash; is typically billed separately by them. To scope it, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "I&rsquo;m just starting a business in Arizona — what do I need?", a: "Three things early: the right entity and QuickBooks setup, a clean chart of accounts built for your industry, and Transaction Privilege Tax (TPT) tracking configured by business classification and location (the 5.6% state rate plus county and city layers, reported through the centralized ADOR portal) along with state payroll withholding configured correctly &mdash; Arizona has no local income tax, with the 60-day rule and the CA/IN/OR/VA exemption for nonresidents &mdash; from day one. TechBrot handles the setup and ongoing books; your CPA or attorney handles entity filing and TPT registration. Getting the books right at the start prevents the expensive cleanup most businesses need a year or two in." },
    { q: "Can you help if my business is growing fast and the books are a mess?", a: "Yes &mdash; that&rsquo;s one of the most common Arizona engagements, especially for Phoenix-area construction firms reporting TPT on the wrong base, multi-city retailers charging a single rate, and semiconductor and manufacturing suppliers riding the corridor&rsquo;s growth. Rapid growth almost always outpaces the books. We scope a one-time cleanup or catch-up to get the file accurate and CPA-ready &mdash; separating entities or locations where they&rsquo;ve commingled, correcting wrong TPT classifications, applying the prime-contracting 65% base, and fixing a messy equity section &mdash; then move into monthly bookkeeping so your financials keep pace as you scale." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We provide bookkeeping, QuickBooks, payroll, TPT and state-withholding tracking, and operational accounting, and we coordinate with your CPA or EA, who files your Arizona, federal, corporate income tax, individual income tax, payroll, and Transaction Privilege Tax (TPT) returns and makes the pass-through entity (PTE) election, and represents you before the Arizona Department of Revenue. Most Arizona small businesses use both." },
    { q: "How do we get started?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your situation and your books, identify whether you need setup, cleanup, monthly bookkeeping, or a combination, and send a written fixed-fee proposal within 3 business days. A named ProAdvisor starts as soon as you approve the scope." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/arizona/small-business-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Arizona Small Business Accountant","description":"Bookkeeping, QuickBooks setup, and cleanup for Arizona small businesses across all 15 counties, coordinated with your CPA — the day-to-day financial backbone, with the Transaction Privilege Tax (TPT) configured by business classification and location (5.6% state plus county and city, with the prime-contracting 65% base for construction), the flat 2.5% income tax (the lowest in the country), the flat 4.9% corporate income tax with the elective PTE at 2.5%, and state-only withholding with the 60-day rule and the CA/IN/OR/VA exemption.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/arizona-small-business-accountant-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#az-svc-smb-summary","#az-svc-smb-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Arizona","item":"https://techbrot.com/find-an-accountant/arizona/"},
          {"@type":"ListItem","position":4,"name":"Small Business Accountant"}]},
        {"@type":"Service","@id":url+"#service","name":"Arizona Small Business Accounting Support","serviceType":"Bookkeeping and QuickBooks services for small businesses","description":"Certified QuickBooks ProAdvisor bookkeeping, setup, cleanup, the Transaction Privilege Tax (TPT) configured by business classification and location (5.6% state plus county and city, with the prime-contracting 65% base for construction), PTE readiness for the elective 2.5% entity-level tax, and state-only withholding with the 60-day rule and the CA/IN/OR/VA exemption for Arizona small businesses, working alongside the client's CPA. Independent Certified QuickBooks ProAdvisor firm; does not file Arizona or federal tax returns, the corporate income tax, the individual income tax, the Transaction Privilege Tax (TPT) return, or the pass-through entity (PTE) election, and does not represent before tax authorities — coordinates with the client's CPA or EA, who file.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Arizona","sameAs":"https://en.wikipedia.org/wiki/Arizona"},
          "audience":{"@type":"BusinessAudience","name":"Arizona small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400/mo; fixed-fee against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

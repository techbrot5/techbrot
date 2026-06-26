/* /find-an-accountant/tennessee/bookkeeping-services/ — t-money TN SERVICE child (overview
 * of the TN bookkeeping service). NEW page (no baseline equity contract — Tennessee set built
 * fresh as a core state). Structure mirrors the proven AZ (and GA/MI/OH/DE/NY/IN/PA/NJ/MD/VA)
 * bookkeeping-services child: JSON front-matter in the .njk; this file supplies the content arrays
 * + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * TENNESSEE LOCALIZATION (per TN-FACTS, verified 2026-06-26 against the Tennessee Dept of Revenue): the
 * TN-distinct hooks are NOT an income tax (Tennessee has NONE — the Hall tax was repealed for tax years
 * beginning Jan 1, 2021, so payroll has NO state income-tax withholding). The recurring operational work
 * lives in: (1) the HIGH COMBINED SALES TAX — a 7% STATE rate plus a local option up to 2.75% (multiples
 * of 0.25, every locality has one; combined commonly ~9.25–9.75%, among the highest in the US) — so the
 * sales tax must be charged at the right combined rate BY LOCATION and SUB-RECONCILED monthly; (2) the
 * BUSINESS (gross-receipts) tax — a state + a city tax at the $100,000 threshold — so gross receipts are
 * tracked by jurisdiction; and (3) the FRANCHISE & EXCISE (F&E) tax — a 6.5% EXCISE on net earnings + a
 * 0.25% FRANCHISE tax on net worth ($100 min, net-worth-only since the 2024 property-measure/Schedule G
 * repeal), filed on the FAE 170 — so the equity/net-worth and net-earnings figures are kept clean.
 * Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200). No fabricated
 * TN-specific dollar tiers; specific combined city/county sales-tax rates framed qualitatively and
 * confirmed against the DOR source.
 *
 * NO ADDRESS (CRITICAL): Tennessee is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the AZ child ("served remotely
 * across all 95 Tennessee counties"). Review prose defers to the Tennessee Department of Revenue.
 *
 * ROUTING (TN core state, 6 pages): link ONLY to existing pages — the TN siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the TN pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent TN child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Tennessee or federal returns, the F&E
 * (FAE 170) return, the business-tax return, or the sales-tax return; coordinates with the
 * client's CPA, EA, and the Tennessee Dept of Revenue. The no-income-tax (Hall repealed 2021), the
 * 6.5% excise, the 0.25% franchise, the $100,000 business-tax threshold, and the 7% state sales tax +
 * 2.75% local max are VERIFIED; specific combined city/county sales-tax rates framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Tennessee bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/accounting/sales-tax-compliance/\">sales tax sub-reconciled at the combined rate by location</a> (the 7% state rate plus a local option up to 2.75%), gross receipts tracked so the $100,000 business-tax threshold stays visible, and the Franchise &amp; Excise (F&amp;E) net-worth and net-earnings figures kept clean, with CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/tennessee/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 95 Tennessee counties, from Nashville&rsquo;s healthcare-management and music economy to Memphis&rsquo;s logistics hub, Knoxville, Chattanooga, Clarksville, Murfreesboro, Franklin, and the Tri-Cities.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Tennessee bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Tennessee bookkeeping services?", a: "<strong>Tennessee bookkeeping services are the ongoing recording, reconciling, and reporting of a Tennessee business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, sales-tax sub-reconciliation at the combined rate by location (the 7% state rate plus a local option up to 2.75%), gross-receipts tracking for the $100,000 business tax, Franchise &amp; Excise (F&amp;E) readiness (clean net-worth and net-earnings figures), no-state-withholding payroll (Tennessee has no individual income tax), and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Tennessee?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you report, whether you cross the $100,000 business-tax threshold, and your multi-state footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Tennessee businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the F&amp;E and sales-tax returns). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/tennessee/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, a single sales-tax rate that missed the local layers, gross receipts that were never tracked by jurisdiction so the $100,000 business-tax threshold slipped past, and a tangled equity section that won&rsquo;t support the franchise-tax net-worth base &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Tennessee business actually runs &mdash; charging sales tax across multiple jurisdictions, tracking gross receipts toward the $100,000 business-tax threshold, employing out-of-state remote staff, or keeping the F&amp;E net-worth base clean." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Tennessee owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "95 counties", label: "Served remotely across all 95 Tennessee counties &mdash; from Nashville&rsquo;s healthcare-management and music economy to Memphis&rsquo;s logistics hub, Knoxville, Chattanooga, Clarksville, Murfreesboro, Franklin, and the Tri-Cities &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/tennessee/small-business-accountant/", cta: "Tennessee small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Tennessee business &mdash; with sales-tax liability accounts set up so the correct combined rate by location (the 7% state rate plus a local option up to 2.75%) ties out, gross receipts tracked by jurisdiction for the business tax, and a clean equity section for the franchise-tax net-worth base &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/tennessee/quickbooks-setup/", cta: "Tennessee QuickBooks setup &rarr;" },
    { num: "03", title: "Sales tax, business tax &amp; payroll review", body: "Tennessee has no individual income tax, so payroll is the easy part &mdash; there&rsquo;s no state income-tax withholding (federal, FICA, and state unemployment only). The operational work is the sales tax: among the highest combined rates in the country (a 7% state rate plus a local option up to 2.75%, every locality has one, so the combined rate varies by location), which QuickBooks has to charge correctly by destination, and which we sub-reconcile monthly so the liability ties to the books (we confirm the current combined rate against the Department of Revenue source before charging). We also track gross receipts so the $100,000 business-tax threshold stays visible. You or your CPA file the sales-tax, business-tax, and F&amp;E returns with the Tennessee Department of Revenue.", href: "/quickbooks/payroll/", cta: "Payroll &amp; sales tax &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; with the equity section kept clean and F&amp;E-ready, per entity where you run more than one.", href: "/find-an-accountant/tennessee/quickbooks-accountant/", cta: "Tennessee QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the sales tax sub-reconciled by location, gross receipts tracked for the business tax, and the net-worth and net-earnings figures kept ready for the FAE 170 &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/tennessee/quickbooks-cleanup/", cta: "Tennessee QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Sales-tax sub-reconciliation at the combined rate by location (7% state + local up to 2.75%)",
    "Gross-receipts tracking by jurisdiction for the $100,000 business tax",
    "F&amp;E-ready net-worth &amp; net-earnings figures for the FAE 170",
    "No-state-withholding payroll review &amp; multi-state footprint documented for your CPA",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Tennessee &amp; federal income-tax returns",
    "Files the Franchise &amp; Excise (FAE 170) return",
    "Files the business (gross-receipts) tax return &amp; the sales-tax return",
    "Represents you before the Tennessee Department of Revenue",
    "Formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Tennessee situation &mdash; volume, accounts, number of entities, where your combined sales-tax rates land by location, whether you cross the $100,000 business-tax threshold, how your F&amp;E net-worth figure should be kept clean, where your multi-state footprint runs, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with a single sales-tax rate that missed the local layers, gross receipts never tracked by jurisdiction, or a tangled equity section that won&rsquo;t support the franchise-tax base &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/tennessee/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the sales tax sub-reconciled at the combined rate by location, gross receipts tracked for the business tax, the F&amp;E net-worth base kept clean, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that you&rsquo;ve crossed the $100,000 business-tax threshold in a new county, that a sale in another city carries a different combined sales-tax rate &mdash; or that your equity section is drifting away from the franchise-tax net-worth base. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Tennessee books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Tennessee-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Tennessee bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Tennessee bookkeeping services actually include?", a: "Monthly bookkeeping for a Tennessee business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; sub-reconciling the sales tax at the combined rate by location (the 7% state rate plus a local option up to 2.75%); tracking gross receipts so the $100,000 business-tax threshold stays visible; keeping the F&amp;E net-worth and net-earnings figures clean; running no-state-withholding payroll (Tennessee has no individual income tax); producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Tennessee?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you report, whether you cross the $100,000 business-tax threshold, and your multi-state footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Tennessee business?", a: "Most Tennessee businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the F&amp;E and sales-tax returns. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, fixing a single sales-tax rate that missed the local layers, reconstructing gross receipts by jurisdiction so the $100,000 business-tax threshold is visible, and cleaning a tangled equity section so the franchise-tax net-worth base is supportable &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Tennessee sales tax and business tax in the books?", a: "Tennessee has no individual income tax, so the operational complexity lives in the sales tax &mdash; which is among the highest combined rates in the country: a 7% state rate plus a local option up to 2.75% (in multiples of 0.25%), and every locality has a local rate, so the combined rate varies by location and commonly lands near 9.25&ndash;9.75%. We configure QuickBooks to charge the correct combined rate by destination and sub-reconcile the sales-tax liability monthly so it ties to the books (we confirm the current combined rate against the Department of Revenue source before charging). Separately, the business tax is a gross-receipts tax &mdash; a state and a city tax &mdash; owed once you gross $100,000 in a jurisdiction, so we track gross receipts by jurisdiction and keep the threshold visible. We prepare the numbers; you or your CPA file the returns with the Tennessee Department of Revenue." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Tennessee business runs, whether it charges sales tax across multiple jurisdictions, tracks gross receipts toward the $100,000 business-tax threshold, employs out-of-state remote staff, or needs its F&amp;E net-worth base kept clean." },
    { q: "How do we start Tennessee bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; where your combined sales-tax rates land by location, whether you cross the $100,000 business-tax threshold, how your F&amp;E figures should be kept clean, where your multi-state footprint runs &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the Franchise &amp; Excise (FAE 170) return, the business (gross-receipts) tax return &amp; the sales-tax return coordinated with your CPA/EA and the Tennessee Dept of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/tennessee/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Tennessee Bookkeeping Services","description":"Fixed-fee bookkeeping services for Tennessee businesses across all 95 counties — monthly bookkeeping, cleanup, catch-up, sales-tax sub-reconciliation at the combined rate by location (7% state plus a local option up to 2.75%), gross-receipts tracking for the $100,000 business tax, Franchise & Excise (F&E) readiness, and no-state-withholding payroll (Tennessee has no individual income tax), delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/tennessee-bookkeeping-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#tn-svc-bkkg-summary","#tn-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Tennessee","item":"https://techbrot.com/find-an-accountant/tennessee/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Tennessee Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, sales-tax sub-reconciliation at the combined rate by location (7% state plus a local option up to 2.75%), gross-receipts tracking for the $100,000 business tax, Franchise & Excise (F&E) readiness, and no-state-withholding payroll (Tennessee has no individual income tax) for Tennessee businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Tennessee returns, the F&E (FAE 170) return, the business (gross-receipts) tax return, or the sales-tax return — coordinates with the client's CPA, EA, or the Tennessee Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Tennessee","sameAs":"https://en.wikipedia.org/wiki/Tennessee"},
          "audience":{"@type":"BusinessAudience","name":"Tennessee small and midsize businesses, healthcare and health-services operators, logistics and distribution firms, automotive and EV manufacturers, real estate operators, professional and financial-services firms, and restaurants and hospitality"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Tennessee Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

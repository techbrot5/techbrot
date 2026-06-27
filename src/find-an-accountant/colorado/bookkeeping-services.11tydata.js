/* /find-an-accountant/colorado/bookkeeping-services/ — t-money CO SERVICE child (overview
 * of the CO bookkeeping service). NEW page (no baseline equity contract — Colorado set built
 * fresh as a core state). Structure mirrors the proven WA (and TN/AZ/GA/MI/OH/DE/NY/IN/PA/NJ/MD/VA)
 * bookkeeping-services child: JSON front-matter in the .njk; this file supplies the content arrays
 * + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * COLORADO LOCALIZATION (per CO-FACTS, verified 2026-06-26 against the Colorado Dept of Revenue and
 * the Colorado General Assembly): Colorado HAS an income tax — a flat 4.40% for 2025 (some years see
 * a temporary TABOR-surplus reduction) — so payroll DOES carry Colorado state income-tax withholding
 * (Form DR 1098 / DR 0004). The recurring operational work lives in: (1) the HOME-RULE SELF-COLLECTING
 * CITY SALES TAX — the CO-distinct standout, the most fragmented sales-tax system in the US — a low
 * 2.9% STATE rate plus county, city, and special-district layers, with ~70+ self-collecting home-rule
 * cities (Denver, Colorado Springs, Aurora, Boulder, Fort Collins, Lakewood) administering their OWN
 * rules, returns, and registration; many participate in the state's SUTS single-return portal, but not
 * all, and Colorado is DESTINATION-SOURCED — so the combined rate is charged by location and
 * sub-reconciled by jurisdiction monthly; (2) the RETAIL DELIVERY FEE — $0.28 per delivery for
 * July 2025-June 2026, indexed each July, with qualified small and new businesses exempt; and (3) the
 * SALT PARITY PTE election (advisory/coordination — the CPA elects and files; TechBrot keeps the books
 * PTE-ready). Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200). No
 * fabricated CO-specific dollar tiers; specific combined city/county/special-district sales-tax rates
 * are framed qualitatively and confirmed against the DOR source. Do NOT call the home-rule sales tax a
 * single statewide rate.
 *
 * NO ADDRESS (CRITICAL): Colorado is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the WA child ("served remotely
 * across all 64 Colorado counties"). Review prose defers to the Colorado Department of Revenue.
 *
 * ROUTING (CO core state, 6 pages): link ONLY to existing pages — the CO siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the CO pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent CO child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Colorado or federal returns, the state or
 * home-rule city sales/use-tax returns, the retail delivery fee return, the income tax, or the PTE
 * election; coordinates with the client's CPA, EA, and the Colorado Dept of Revenue. The flat 4.40%
 * income tax (2025, TABOR caveat), the 2.9% state sales tax, the home-rule self-collecting cities + SUTS
 * + destination sourcing, the retail delivery fee ($0.28 for Jul 2025-Jun 2026, indexed), and the SALT
 * Parity PTE are VERIFIED; specific combined local sales-tax rates and the next-year RDF amount are
 * framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Colorado bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/accounting/sales-tax-compliance/\">home-rule self-collecting city sales tax sub-reconciled by jurisdiction</a> (the 2.9% state rate plus county, city, and special-district layers, with about 70+ self-collecting home-rule cities such as Denver, Colorado Springs, Aurora, and Boulder administering their own returns and registration &mdash; many filed through the state&rsquo;s SUTS portal, destination-sourced), the retail delivery fee tracked ($0.28 per delivery for July 2025&ndash;June 2026, indexed each July; qualified small and new businesses exempt), and the books kept PTE-ready for the SALT Parity election, with CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/colorado/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 64 Colorado counties, from Denver&rsquo;s tech, finance, and aerospace economy to Colorado Springs&rsquo;s aerospace and defense base, Aurora, Fort Collins, Lakewood, Boulder, Pueblo, and Greeley.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Colorado bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Colorado bookkeeping services?", a: "<strong>Colorado bookkeeping services are the ongoing recording, reconciling, and reporting of a Colorado business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, the home-rule self-collecting city sales tax sub-reconciled by jurisdiction (a 2.9% state rate plus county, city, and special-district layers, with about 70+ self-collecting home-rule cities such as Denver, Colorado Springs, Aurora, and Boulder administering their own returns and registration, many filed through the state&rsquo;s SUTS portal, destination-sourced), the retail delivery fee tracked ($0.28 per delivery for July 2025&ndash;June 2026, indexed; qualified small and new businesses exempt), payroll reviewed with Colorado state income-tax withholding (a flat 4.40% for 2025), the books kept PTE-ready for the SALT Parity election, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Colorado?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you report &mdash; including any self-collecting home-rule cities &mdash; your retail-delivery-fee exposure, and your multi-state footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Colorado businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the Colorado income-tax return, and the state and home-rule city sales/use-tax returns). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/colorado/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, sales tax that was never sub-reconciled by home-rule jurisdiction (or charged at a single rate that missed the county, city, and special-district layers), a retail delivery fee that was never tracked, and withholding records that don&rsquo;t tie out &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Colorado business actually runs &mdash; sub-reconciling the home-rule self-collecting city sales tax by jurisdiction, tracking the retail delivery fee, running payroll under Colorado&rsquo;s flat 4.40% withholding, or keeping the books PTE-ready for the SALT Parity election." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Colorado owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "64 counties", label: "Served remotely across all 64 Colorado counties &mdash; from Denver&rsquo;s tech, finance, and aerospace economy to Colorado Springs&rsquo;s aerospace and defense base, Aurora, Fort Collins, Lakewood, Boulder, Pueblo, and Greeley &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/colorado/small-business-accountant/", cta: "Colorado small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Colorado business &mdash; with sales-tax liability accounts set up so the home-rule self-collecting city sales tax ties out by jurisdiction (the 2.9% state rate plus county, city, and special-district layers, destination-sourced), a tracking account for the retail delivery fee, and payroll mapped for Colorado&rsquo;s flat 4.40% state income-tax withholding &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/colorado/quickbooks-setup/", cta: "Colorado QuickBooks setup &rarr;" },
    { num: "03", title: "Sales tax, retail delivery fee &amp; payroll review", body: "Colorado has a flat 4.40% income tax (for 2025; some years see a temporary TABOR-surplus reduction, so we confirm the current year with the Colorado Dept of Revenue), so payroll carries Colorado state income-tax withholding (Form DR 1098 / DR 0004) alongside federal, FICA, and state unemployment &mdash; we set it up and reconcile it. The standout operational work is the home-rule self-collecting city sales tax: the 2.9% state rate plus county, city, and special-district layers, with about 70+ self-collecting home-rule cities such as Denver, Colorado Springs, Aurora, and Boulder administering their OWN rules, returns, and registration &mdash; many filed through the state&rsquo;s SUTS single-return portal, but not all &mdash; and Colorado is destination-sourced, so we configure QuickBooks to charge the correct combined rate by location and sub-reconcile the liability by jurisdiction (confirming current rates against the Department of Revenue source before charging). We also track the retail delivery fee ($0.28 per delivery for July 2025&ndash;June 2026, indexed each July; qualified small and new businesses exempt). You or your CPA file the state and home-rule city sales/use-tax returns, the retail delivery fee return, and the income tax with the Colorado Department of Revenue.", href: "/quickbooks/payroll/", cta: "Payroll &amp; sales tax &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; with the books kept PTE-ready for the SALT Parity election, per entity where you run more than one.", href: "/find-an-accountant/colorado/quickbooks-accountant/", cta: "Colorado QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the home-rule self-collecting city sales tax sub-reconciled by jurisdiction, the retail delivery fee tracked, and the books kept PTE-ready for the SALT Parity election &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/colorado/quickbooks-cleanup/", cta: "Colorado QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Home-rule self-collecting city sales tax sub-reconciliation by jurisdiction (2.9% state + county, city &amp; special-district layers, destination-sourced)",
    "Retail delivery fee tracked ($0.28 per delivery for Jul 2025&ndash;Jun 2026, indexed; small/new businesses exempt)",
    "Books kept PTE-ready for the SALT Parity election",
    "Payroll review with Colorado state income-tax withholding (flat 4.40% for 2025) applied",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Colorado &amp; federal income-tax returns",
    "Files the state &amp; home-rule city sales/use-tax returns",
    "Files the retail delivery fee return &amp; makes the SALT Parity PTE election",
    "Represents you before the Colorado Department of Revenue",
    "Formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Colorado situation &mdash; volume, accounts, number of entities, which self-collecting home-rule cities you sell into, where your combined sales-tax rates land by jurisdiction, your retail-delivery-fee exposure, how payroll runs under Colorado&rsquo;s flat 4.40% withholding, where your multi-state footprint runs, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with sales tax never sub-reconciled by home-rule jurisdiction, a single rate that missed the county, city, and special-district layers, or a retail delivery fee that was never tracked &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/colorado/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the home-rule self-collecting city sales tax sub-reconciled by jurisdiction, the retail delivery fee tracked, the books kept PTE-ready for the SALT Parity election, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that a new sale just created exposure in another self-collecting home-rule city with its own return and registration, that the retail delivery fee now applies to your orders &mdash; or that electing the SALT Parity PTE could change the owners&rsquo; federal deduction. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Colorado books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Colorado-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Colorado bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Colorado bookkeeping services actually include?", a: "Monthly bookkeeping for a Colorado business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; charging and sub-reconciling the home-rule self-collecting city sales tax by jurisdiction (the 2.9% state rate plus county, city, and special-district layers, destination-sourced, with about 70+ self-collecting home-rule cities administering their own returns); tracking the retail delivery fee ($0.28 per delivery for July 2025&ndash;June 2026, indexed; qualified small and new businesses exempt); running payroll with Colorado state income-tax withholding (a flat 4.40% for 2025) applied; keeping the books PTE-ready for the SALT Parity election; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Colorado?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you report &mdash; including any self-collecting home-rule cities &mdash; your retail-delivery-fee exposure, and your multi-state footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Colorado business?", a: "Most Colorado businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, the Colorado income-tax return, and the state and home-rule city sales/use-tax returns. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, reconstructing sales tax so it&rsquo;s sub-reconciled by home-rule jurisdiction (fixing a single rate that missed the county, city, and special-district layers), tracking a retail delivery fee that was never recorded, and tidying withholding records so payroll ties out &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle Colorado&rsquo;s home-rule city sales tax in the books?", a: "Colorado&rsquo;s state sales-tax rate is just 2.9%, but counties, cities, and special districts stack on top, so the combined rate varies widely by location &mdash; and the real complexity is that about 70+ home-rule cities are self-collecting, including Denver, Colorado Springs, Aurora, and Boulder, each administering its own sales and use tax with its own rules, returns, and registration separate from the state. Many home-rule cities now participate in the state&rsquo;s SUTS portal &mdash; a single return covering the state and participating cities &mdash; but not all do, so some still require a separate return. Colorado is also destination-sourced, so the right combined rate depends on where the buyer takes possession. We configure QuickBooks to charge the correct combined rate by location and sub-reconcile the liability by jurisdiction, confirming current rates against the Department of Revenue source before charging. We prepare the numbers; you or your CPA file the state and home-rule city sales/use-tax returns with the Colorado Department of Revenue and the cities." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Colorado business runs, whether it sub-reconciles the home-rule self-collecting city sales tax across multiple jurisdictions, tracks the retail delivery fee, runs payroll under Colorado&rsquo;s flat 4.40% withholding, or needs the books kept PTE-ready for the SALT Parity election." },
    { q: "How do we start Colorado bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which self-collecting home-rule cities you sell into, where your combined sales-tax rates land by jurisdiction, your retail-delivery-fee exposure, how payroll runs under Colorado&rsquo;s flat 4.40% withholding &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the state &amp; home-rule city sales/use-tax returns, the retail delivery fee return, the income tax &amp; the SALT Parity PTE election coordinated with your CPA/EA and the Colorado Dept of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/colorado/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Colorado Bookkeeping Services","description":"Fixed-fee bookkeeping services for Colorado businesses across all 64 counties — monthly bookkeeping, cleanup, catch-up, the home-rule self-collecting city sales tax sub-reconciled by jurisdiction (a 2.9% state rate plus county, city, and special-district layers, with about 70+ self-collecting home-rule cities administering their own returns, many filed through the state's SUTS portal, destination-sourced), the retail delivery fee tracked ($0.28 per delivery for July 2025–June 2026, indexed; qualified small and new businesses exempt), payroll with Colorado state income-tax withholding (a flat 4.40% for 2025) reviewed, and the books kept PTE-ready for the SALT Parity election, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-colorado-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#co-svc-bkkg-summary","#co-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Colorado","item":"https://techbrot.com/find-an-accountant/colorado/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Colorado Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, the home-rule self-collecting city sales tax sub-reconciled by jurisdiction (a 2.9% state rate plus county, city, and special-district layers, with about 70+ self-collecting home-rule cities administering their own returns, many filed through the state's SUTS portal, destination-sourced), the retail delivery fee tracked ($0.28 per delivery for July 2025–June 2026, indexed; qualified small and new businesses exempt), payroll with Colorado state income-tax withholding (a flat 4.40% for 2025) reviewed, and the books kept PTE-ready for the SALT Parity election for Colorado businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Colorado returns, the state or home-rule city sales/use-tax returns, the retail delivery fee return, the income tax, or the SALT Parity PTE election — coordinates with the client's CPA, EA, or the Colorado Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Colorado","sameAs":"https://en.wikipedia.org/wiki/Colorado"},
          "audience":{"@type":"BusinessAudience","name":"Colorado small and midsize businesses, technology and startup companies, aerospace and defense firms, construction and real-estate operators, energy and oil-and-gas producers, outdoor-recreation, tourism and hospitality businesses, agriculture and food-and-beverage producers, and healthcare organizations"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Colorado Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

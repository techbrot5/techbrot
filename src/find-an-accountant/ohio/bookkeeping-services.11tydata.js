/* /find-an-accountant/ohio/bookkeeping-services/ — t-money OH SERVICE child (overview
 * of the OH bookkeeping service). NEW page (no baseline equity contract — Ohio set built
 * fresh as a core state). Structure mirrors the proven DE/NY/IN/PA/NJ/MD bookkeeping-services
 * child: JSON front-matter in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * OHIO LOCALIZATION (per OH-FACTS, verified 2026-06-26 against the Ohio Dept of Taxation + ORC
 * Ch. 718 + HB96 2025): the municipal income tax — the genuinely OH-distinct hook — 649 cities
 * and 199 school districts levy income taxes, withheld by WORK LOCATION (rates ~1%–3%, major
 * cities ~2.5%; framed qualitatively, never a specific city %), with the 20-day occasional-entrant
 * rule and collection split among RITA, CCA, and self-administered cities that read the rules
 * differently; the school-district income tax is a separate residence-based layer; reciprocity with
 * IN/PA/MI/KY/WV (Form IT 4NR) covers STATE tax only — the Ohio municipal tax still applies, and it
 * does not shield a 20%+ owner under the IT 4738 PTE; NO corporate income tax — the Commercial
 * Activity Tax (CAT), a gross-receipts tax (2026 exclusion $6M, 0.26% above it; most small
 * businesses now exempt) tracked against the $6M line; the low state income tax (first $26,050
 * exempt, on a legislated glide path to ZERO by 2030 under HB96 — framed qualitatively, never a
 * fixed 2026 rate); the 5.75% state sales tax plus a county/transit rate (combined 6.5%–8.0% by
 * county, framed qualitatively). Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup
 * from $1,200). No fabricated OH-specific dollar tiers.
 *
 * NO ADDRESS (CRITICAL): Ohio is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the PA/NJ/MD child ("served
 * remotely across all 88 Ohio counties"). Review prose defers to the Ohio Department of Taxation and
 * RITA.
 *
 * ROUTING (OH core state, 6 pages): link ONLY to existing pages — the 4 OH siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the OH pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent OH child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Ohio or federal returns, the CAT, the
 * state income tax, the municipal or school-district income-tax filings, the sales-tax return, or
 * the PTE (IT 4738) return; coordinates with the client's CPA, EA, the Ohio Dept of Taxation, and
 * RITA/CCA. State income-tax rate framed qualitatively (low/under 3%/zero by 2030); municipal and
 * county rates framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Ohio bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/quickbooks/payroll/\">municipal income tax reviewed by work location (RITA/CCA and the 20-day rule)</a>, Ohio&rsquo;s <a href=\"/accounting/sales-tax-compliance/\">county sales tax</a> sub-reconciled against the 5.75% state rate, the <strong>Commercial Activity Tax</strong> gross receipts tracked against the $6 million exclusion, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 88 Ohio counties, from the Columbus, Cleveland, and Cincinnati 3-C corridor to Toledo, Akron, Dayton, Canton, and Youngstown.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Ohio bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Ohio bookkeeping services?", a: "<strong>Ohio bookkeeping services are the ongoing recording, reconciling, and reporting of an Ohio business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, a review of the municipal income tax by work location (RITA/CCA, the 20-day rule, and the school-district layer) and IN/PA/MI/KY/WV reciprocity, Commercial Activity Tax gross-receipts tracking against the $6 million exclusion, county sales-tax sub-reconciliation against the 5.75% state rate, and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Ohio?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of cities and school districts you withhold for, whether you cross the $6M CAT line, and your county sales-tax footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Ohio businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the IT 4738 PTE election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, wrong-city municipal withholding, a missing school-district layer, untracked CAT gross receipts, and a single sales-tax rate where the county rate should vary &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Ohio business actually runs &mdash; in one city, with hybrid staff crossing the 20-day line in another, with cross-border IN/PA/MI/KY/WV staff, or near the $6M CAT threshold." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Ohio owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "88 counties", label: "Served remotely across all 88 Ohio counties &mdash; the Columbus, Cleveland, and Cincinnati 3-C corridor to Toledo, Akron, Dayton, Canton, and Youngstown &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/ohio/small-business-accountant/", cta: "Ohio small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Ohio business &mdash; with the municipal income-tax liability tracking by work-location city and the school-district layer, a sales-tax liability account that holds the correct county rate over the 5.75% state base, CAT gross-receipts visibility against the $6M exclusion, and PTE-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/ohio/quickbooks-setup/", cta: "Ohio QuickBooks setup &rarr;" },
    { num: "03", title: "Municipal-tax &amp; sales-tax review", body: "Ohio&rsquo;s low, shrinking state income tax is the easy part. Underneath it, 649 cities and 199 school districts levy income taxes withheld by where the work is performed &mdash; with the 20-day occasional-entrant rule, the RITA/CCA split, the residence-based school-district layer, and IN/PA/MI/KY/WV reciprocity (Form IT 4NR; state tax only &mdash; the municipal tax still applies). Sales tax runs 5.75% statewide plus a county and transit rate (combined about 6.5% to 8.0%). We review the municipal-withholding configuration and sub-reconcile the sales-tax liability so it ties to the books. You or your CPA file with the Ohio Department of Taxation, RITA, or CCA.", href: "/quickbooks/payroll/", cta: "Payroll &amp; the municipal tax &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; per entity where you run more than one.", href: "/find-an-accountant/ohio/quickbooks-accountant/", cta: "Ohio QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the municipal withholding reconciled by city, the county sales tax tracked over the 5.75% state base, the CAT gross receipts measured against the $6M exclusion, and the pass-through detail kept PTE-ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/ohio/quickbooks-cleanup/", cta: "Ohio QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Municipal income-tax review by work location (RITA/CCA, the 20-day rule)",
    "School-district withholding &amp; IN/PA/MI/KY/WV reciprocity (IT 4NR) tracking",
    "CAT gross-receipts tracking against the $6M exclusion",
    "County sales-tax sub-reconciliation over the 5.75% state base",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Ohio &amp; federal income-tax returns",
    "Files the Commercial Activity Tax (CAT) &amp; the state income tax",
    "Files the municipal or school-district income-tax filings &amp; the sales-tax return",
    "Represents you before the Ohio Department of Taxation, RITA, or CCA",
    "Formal tax planning, opinions &amp; the IT 4738 PTE election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Ohio situation &mdash; volume, accounts, number of entities, which cities and school districts you withhold for, whether the 20-day rule or IN/PA/MI/KY/WV reciprocity applies to your staff, whether you cross the $6M CAT line, which county sales-tax rate applies, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with municipal tax withheld for the wrong city, a missing school-district layer, or untracked CAT gross receipts &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/ohio/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the municipal income tax reviewed by work location, the county sales tax sub-reconciled, the CAT gross receipts tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that a hybrid employee just crossed the 20-day threshold in another city &mdash; or that an IT 4NR just changed which state you withhold for &mdash; that your gross receipts are about to cross the $6 million CAT line, or that your pass-through should weigh the IT 4738 election this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Ohio books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Ohio-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Ohio bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Ohio bookkeeping services actually include?", a: "Monthly bookkeeping for an Ohio business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; reviewing the municipal income tax by work location (RITA/CCA, the 20-day rule, and the school-district layer) and IN/PA/MI/KY/WV reciprocity; tracking Commercial Activity Tax gross receipts against the $6 million exclusion; sub-reconciling county sales tax over the 5.75% state rate; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Ohio?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of cities and school districts you withhold for, whether you cross the $6M CAT line, and your county sales-tax footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Ohio business?", a: "Most Ohio businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the IT 4738 PTE election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, correcting municipal tax withheld for the wrong city, adding the school-district layer that was missed, applying reciprocity for cross-border IN/PA/MI/KY/WV staff, and tracking CAT gross receipts that were never measured against the $6M line &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Ohio municipal income tax and the CAT in the books?", a: "Ohio has the most intricate local income-tax system in the country: 649 cities and 199 school districts levy income taxes, and an employer generally withholds the municipal tax for the city where the work is performed (rates run about 1% to 3%; major cities are around 2.5% &mdash; we never quote a specific city rate; confirm current figures with RITA or the city). The 20-day occasional-entrant rule, the split among RITA, CCA, and self-administered cities, and the residence-based school-district layer all have to be configured per employee in QuickBooks, and IN/PA/MI/KY/WV residents may be exempt from Ohio state tax under reciprocity (Form IT 4NR) while the municipal tax still applies. On the business side, Ohio has no corporate income tax &mdash; the Commercial Activity Tax (CAT) applies to gross receipts, with a $6 million exclusion for 2026 (0.26% above it), so we keep the gross-receipts figure tracked against that line. We prepare the numbers; you or your CPA file with the Ohio Department of Taxation, RITA, or CCA." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Ohio business runs, whether it operates in one city, employs hybrid staff crossing the 20-day line, has cross-border IN/PA/MI/KY/WV staff, or sits near the $6 million CAT threshold." },
    { q: "How do we start Ohio bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which cities and school districts you withhold for, whether the 20-day rule or IN/PA/MI/KY/WV reciprocity applies, whether you cross the $6M CAT line, which county sales-tax rate applies &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the CAT, the state income tax, the municipal and school-district income-tax filings, the sales-tax return &amp; the IT 4738 PTE return coordinated with your CPA/EA, the Ohio Dept of Taxation, and RITA/CCA" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/ohio/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Ohio Bookkeeping Services","description":"Fixed-fee bookkeeping services for Ohio businesses across all 88 counties — monthly bookkeeping, cleanup, catch-up, municipal income-tax review by work location (RITA/CCA, the 20-day rule, and the school-district layer), IN/PA/MI/KY/WV reciprocity, Commercial Activity Tax gross-receipts tracking against the $6 million exclusion, and county sales-tax sub-reconciliation over the 5.75% state rate, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-ohio-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#oh-svc-bkkg-summary","#oh-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Ohio","item":"https://techbrot.com/find-an-accountant/ohio/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Ohio Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, municipal income-tax review by work location (RITA/CCA, the 20-day rule, and the school-district layer), IN/PA/MI/KY/WV reciprocity, Commercial Activity Tax gross-receipts tracking against the $6 million exclusion, and county sales-tax sub-reconciliation over the 5.75% state rate for Ohio businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Ohio returns, the CAT, the state income tax, the municipal or school-district income-tax filings, the sales-tax return, or the IT 4738 PTE return — coordinates with the client's CPA, EA, the Ohio Department of Taxation, or RITA/CCA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Ohio","sameAs":"https://en.wikipedia.org/wiki/Ohio"},
          "audience":{"@type":"BusinessAudience","name":"Ohio small and midsize businesses, manufacturers, logistics and trucking operators, healthcare practices, and professional and financial-services firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Ohio Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

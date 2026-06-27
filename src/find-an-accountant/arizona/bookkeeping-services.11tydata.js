/* /find-an-accountant/arizona/bookkeeping-services/ — t-money AZ SERVICE child (overview
 * of the AZ bookkeeping service). NEW page (no baseline equity contract — Arizona set built
 * fresh as a core state). Structure mirrors the proven GA (and MI/OH/DE/NY/IN/PA/NJ/MD/VA)
 * bookkeeping-services child: JSON front-matter in the .njk; this file supplies the content arrays
 * + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * ARIZONA LOCALIZATION (per AZ-FACTS, verified 2026-06-26 against the Arizona Dept of Revenue): the
 * AZ-distinct hooks are NOT a local payroll tax (Arizona has NONE) and NOT an ordinary sales tax. They are
 * the TRANSACTION PRIVILEGE TAX (TPT), the prime-contracting 65% rule, and the flat 2.5% income tax.
 * (1) State individual income tax is a FLAT 2.5% for 2026 (in place since 2023; the LOWEST flat income-tax
 * rate of any U.S. state); the corporate income tax is a flat 4.9%, with an elective PTE tax at 2.5%.
 * (2) The TPT is NOT a sales tax — it is a tax on the SELLER'S privilege of doing business in Arizona, owed
 * by the vendor and levied BY BUSINESS CLASSIFICATION (retail, contracting, restaurant, commercial lease,
 * etc.): a 5.6% STATE rate plus COUNTY and CITY layers, most city TPT reported through the ADOR centralized
 * portal (AZTaxes.gov) though each city sets its own rate — so the combined rate VARIES by activity and
 * location (the recurring monthly sub-reconciliation work). (3) PRIME CONTRACTING — the famous AZ construction
 * quirk: the TPT base is 65% of the gross receipts (the other 35% is a standard materials deduction), and the
 * prime contractor — not the subs — generally owes the tax; MRRA (maintenance/repair/replacement/alteration)
 * work is taxed differently, at the materials purchase. (4) NO local/city income tax (state-only withholding)
 * with the 60-DAY nonresident rule and an exemption for residents of CALIFORNIA, INDIANA, OREGON, or VIRGINIA.
 * (5) The elective PTE tax at 2.5% as a SALT-cap workaround — advisory item; we keep the books PTE-ready.
 * Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200). No fabricated AZ-specific
 * dollar tiers; specific combined city/county TPT rates framed qualitatively and confirmed against the ADOR
 * rate table. TPT is NEVER called a sales tax.
 *
 * NO ADDRESS (CRITICAL): Arizona is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the GA child ("served remotely
 * across all 15 Arizona counties"). Review prose defers to the Arizona Department of Revenue.
 *
 * ROUTING (AZ core state, 6 pages): link ONLY to existing pages — the AZ siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the AZ pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent AZ child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Arizona or federal returns, the corporate
 * income tax, the individual income tax, the TPT return, or the PTE election; coordinates with the
 * client's CPA, EA, and the Arizona Dept of Revenue. The flat 2.5% income tax, the 4.9% corporate rate,
 * the PTE 2.5%, the 5.6% state TPT, and the prime-contracting 65% base are VERIFIED; specific combined
 * city/county TPT rates framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Arizona bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/accounting/sales-tax-compliance/\">Transaction Privilege Tax sub-reconciled by business classification</a> (a 5.6% state rate plus county and city layers reported through the ADOR portal, with the prime-contracting 65% base for construction), the flat 2.5% income tax &mdash; the lowest in the country &mdash; and the elective PTE tracked, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 15 Arizona counties, from the Phoenix metro&rsquo;s semiconductor and construction boom to Tucson, Mesa, Chandler, Scottsdale, Gilbert, Tempe, and Flagstaff.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Arizona bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Arizona bookkeeping services?", a: "<strong>Arizona bookkeeping services are the ongoing recording, reconciling, and reporting of an Arizona business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, Transaction Privilege Tax (TPT) sub-reconciliation by business classification (a 5.6% state rate plus county and city layers via the ADOR portal, with the prime-contracting 65% base for construction), flat 2.5% income-tax and PTE readiness, state-only withholding on Arizona-source wages (no local income tax; the 60-day rule and the CA/IN/OR/VA exemption), and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Arizona?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of TPT classifications and jurisdictions you report, whether prime contracting applies, and your multi-state footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Arizona businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the PTE election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, a wrong TPT classification or a single rate that missed the city and county layers, a full-receipts contractor setup that never applied the prime-contracting 65% base, and wrong multi-state withholding assumptions &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Arizona business actually runs &mdash; charging TPT across multiple classifications and jurisdictions, applying the prime-contracting 65% base on construction, employing out-of-state remote staff under the 60-day rule and the CA/IN/OR/VA exemption, or weighing the PTE election." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Arizona owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "15 counties", label: "Served remotely across all 15 Arizona counties &mdash; from the Phoenix metro&rsquo;s semiconductor and construction boom to Tucson, Mesa, Chandler, Scottsdale, Gilbert, Tempe, and Flagstaff &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/arizona/small-business-accountant/", cta: "Arizona small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Arizona business &mdash; with TPT liability accounts set up by business classification and jurisdiction so the correct combined rate (5.6% state plus county and city layers) ties out, the prime-contracting 65% base handled where construction applies, and PTE-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/arizona/quickbooks-setup/", cta: "Arizona QuickBooks setup &rarr;" },
    { num: "03", title: "TPT &amp; state withholding review", body: "Arizona&rsquo;s flat 2.5% income tax is the easy part. The operational work is the Transaction Privilege Tax: it&rsquo;s not a sales tax but a tax on the seller&rsquo;s privilege of doing business, owed by the vendor and levied by business classification &mdash; a 5.6% state rate plus county and city layers (most city TPT reported through the ADOR portal, though each city sets its own rate), with the prime-contracting classification taxing 65% of gross receipts for construction &mdash; so QuickBooks has to charge the correct combined rate by classification and location, and we sub-reconcile the TPT liability monthly so it ties to the books. On payroll, Arizona has no local income tax, so withholding is state-only &mdash; with the 60-day nonresident rule and an exemption for California, Indiana, Oregon, and Virginia residents. We review the withholding configuration so multi-state and remote staff are right. You or your CPA file the TPT return with the Arizona Department of Revenue.", href: "/quickbooks/payroll/", cta: "Payroll &amp; state withholding &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; with the equity section kept clean and PTE-ready, per entity where you run more than one.", href: "/find-an-accountant/arizona/quickbooks-accountant/", cta: "Arizona QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the Transaction Privilege Tax sub-reconciled by classification and jurisdiction, the prime-contracting 65% base documented where construction applies, and the PTE detail kept ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/arizona/quickbooks-cleanup/", cta: "Arizona QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "TPT sub-reconciliation by business classification &amp; jurisdiction",
    "Prime-contracting 65% base &amp; MRRA handling for construction",
    "State-only withholding review &mdash; the 60-day rule &amp; CA/IN/OR/VA exemption",
    "PTE-readiness tracking &amp; multi-state nexus footprint documented for your CPA",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Arizona &amp; federal income-tax returns",
    "Files the corporate income tax &amp; the individual income tax",
    "Files the Transaction Privilege Tax (TPT) return",
    "Represents you before the Arizona Department of Revenue",
    "Formal tax planning, opinions &amp; the pass-through entity (PTE) election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Arizona situation &mdash; volume, accounts, number of entities, which TPT classifications you fall under, whether prime contracting applies, where your multi-state withholding runs (the 60-day rule, the CA/IN/OR/VA exemption), whether the PTE election fits, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with a wrong TPT classification or a single rate that missed the city and county layers, a full-receipts contractor setup that never applied the prime-contracting 65% base, or wrong multi-state withholding &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/arizona/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the Transaction Privilege Tax sub-reconciled by classification and jurisdiction, the prime-contracting 65% base handled where construction applies, the PTE position tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, which TPT classification a new revenue line falls under, that your construction work is prime contracting rather than MRRA, that a remote hire in another state changed which state you withhold for &mdash; or that your pass-through should weigh the PTE election at 2.5% this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Arizona books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Arizona-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Arizona bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Arizona bookkeeping services actually include?", a: "Monthly bookkeeping for an Arizona business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; sub-reconciling the Transaction Privilege Tax by business classification (a 5.6% state rate plus county and city layers via the ADOR portal, with the prime-contracting 65% base for construction); tracking PTE readiness and state-only withholding on Arizona-source wages (the 60-day rule and the CA/IN/OR/VA exemption); producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Arizona?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of TPT classifications and jurisdictions you report, whether prime contracting applies, and your multi-state footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Arizona business?", a: "Most Arizona businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the PTE election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, fixing a wrong TPT classification or a single rate that missed the city and county layers, correcting a full-receipts contractor setup that never applied the prime-contracting 65% base, and correcting multi-state withholding that wrongly assumed an exemption &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Arizona Transaction Privilege Tax and prime contracting in the books?", a: "Arizona&rsquo;s income tax is a flat 2.5%, so the operational complexity lives in the TPT &mdash; which is not a sales tax but a tax on the seller&rsquo;s privilege of doing business, owed by the vendor and levied by business classification. The state rate is 5.6%, but counties and cities add their own layers (most city TPT reported through the ADOR centralized portal, though each city sets its own rate), so the combined rate varies by classification and location &mdash; we configure QuickBooks to charge the correct combined rate and sub-reconcile the TPT liability monthly so it ties to the books (we confirm the current combined rate against the Department of Revenue rate table before charging). For construction, the prime-contracting classification taxes 65% of gross receipts &mdash; the other 35% is a materials deduction, and the prime contractor, not the subs, owes the tax (MRRA work is taxed differently) &mdash; so we set contractor files up for the 65% base. We prepare the numbers; you or your CPA file the TPT return with the Arizona Department of Revenue." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Arizona business runs, whether it charges TPT across multiple classifications and jurisdictions, applies the prime-contracting 65% base on construction, employs out-of-state remote staff under the 60-day rule and the CA/IN/OR/VA exemption, or is weighing the PTE election." },
    { q: "How do we start Arizona bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which TPT classifications you fall under, whether prime contracting applies, where your multi-state withholding runs, whether the PTE election fits &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the corporate income tax, the individual income tax, the Transaction Privilege Tax (TPT) return &amp; the pass-through entity (PTE) election coordinated with your CPA/EA and the Arizona Dept of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/arizona/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Arizona Bookkeeping Services","description":"Fixed-fee bookkeeping services for Arizona businesses across all 15 counties — monthly bookkeeping, cleanup, catch-up, Transaction Privilege Tax (TPT) sub-reconciliation by business classification (5.6% state plus county and city layers via the ADOR portal, with the prime-contracting 65% base for construction), flat 2.5% income-tax and PTE readiness, and state-only withholding on Arizona-source wages (no local income tax; the 60-day rule and the CA/IN/OR/VA exemption), delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-arizona-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#az-svc-bkkg-summary","#az-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Arizona","item":"https://techbrot.com/find-an-accountant/arizona/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Arizona Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, Transaction Privilege Tax (TPT) sub-reconciliation by business classification (5.6% state plus county and city layers via the ADOR portal, with the prime-contracting 65% base for construction), flat 2.5% income-tax and PTE readiness, and state-only withholding on Arizona-source wages (no local income tax; the 60-day rule and the CA/IN/OR/VA exemption) for Arizona businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Arizona returns, the corporate income tax, the individual income tax, the Transaction Privilege Tax return, or the pass-through entity (PTE) election — coordinates with the client's CPA, EA, or the Arizona Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Arizona","sameAs":"https://en.wikipedia.org/wiki/Arizona"},
          "audience":{"@type":"BusinessAudience","name":"Arizona small and midsize businesses, construction and contracting firms, semiconductor and advanced manufacturers, aerospace and defense suppliers, real estate operators, professional and financial-services firms, and healthcare practices"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Arizona Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/washington/bookkeeping-services/ — t-money WA SERVICE child (overview
 * of the WA bookkeeping service). NEW page (no baseline equity contract — Washington set built
 * fresh as a core state). Structure mirrors the proven TN (and AZ/GA/MI/OH/DE/NY/IN/PA/NJ/MD/VA)
 * bookkeeping-services child: JSON front-matter in the .njk; this file supplies the content arrays
 * + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * WASHINGTON LOCALIZATION (per WA-FACTS, verified 2026-06-26 against the Washington Dept of Revenue,
 * Employment Security Dept, and WA Cares Fund): Washington has NO individual or corporate income tax —
 * so payroll carries NO state income-tax withholding. The recurring operational work lives in: (1) the
 * BUSINESS & OCCUPATION (B&O) tax — the WA-distinct standout — a GROSS-RECEIPTS tax levied BY
 * CLASSIFICATION with NO deduction for costs (retailing 0.471%; wholesaling/manufacturing 0.484%;
 * service tiered from 1.5%, 1.75%, to a higher top tier), PLUS the separate CITY B&O many cities (Seattle,
 * Tacoma, Bellevue, Everett) levy on top — so gross receipts are tracked by classification (and by city)
 * and sub-reconciled monthly; (2) the high COMBINED SALES/USE tax — a 6.5% STATE rate plus local,
 * DESTINATION-BASED — charged at the right combined rate by location and sub-reconciled; and (3) the
 * 7% CAPITAL-GAINS tax on owners (advisory/coordination — clean cost-basis records). Payroll runs the
 * two WA premiums: PFML (1.13% for 2026) and WA Cares (0.58%, employee-paid). Pricing uses ONLY canonical
 * figures (monthly from $400/mo; cleanup from $1,200). No fabricated WA-specific dollar tiers; specific
 * combined city/county sales-tax rates, city B&O rates, and the service-B&O top tier framed qualitatively
 * and confirmed against the DOR source. The B&O is a gross-receipts tax — NOT an income tax or a sales tax.
 *
 * NO ADDRESS (CRITICAL): Washington is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the TN child ("served remotely
 * across all 39 Washington counties"). Review prose defers to the Washington Department of Revenue.
 *
 * ROUTING (WA core state, 6 pages): link ONLY to existing pages — the WA siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the WA pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent WA child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Washington or federal returns, the B&O /
 * Combined Excise Tax Return, the sales-tax return, the capital-gains tax, or any city B&O return;
 * coordinates with the client's CPA, EA, and the Washington Dept of Revenue. The no-income-tax, the
 * B&O rates (retailing 0.471%, wholesaling/manufacturing 0.484%, service tiered 1.5%/1.75%/top), the
 * 6.5% state sales tax, the 7% capital-gains tax, the PFML 1.13% (2026), and the WA Cares 0.58% are
 * VERIFIED; specific combined local sales-tax rates, city B&O rates, and the service-B&O top tier are
 * framed qualitatively. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Washington bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, gross receipts tracked and sub-reconciled by Business &amp; Occupation (B&amp;O) classification (a gross-receipts tax with no deduction for costs &mdash; retailing 0.471%, wholesaling and manufacturing 0.484%, service tiered from 1.5%, plus the separate city B&amp;O that cities such as Seattle, Tacoma, Bellevue, and Everett levy on top), the <a href=\"/accounting/sales-tax-compliance/\">combined sales/use tax sub-reconciled by location</a> (the 6.5% state rate plus local, destination-based), and clean records kept ready for the owner&rsquo;s 7% capital-gains tax, with CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/washington/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 39 Washington counties, from Seattle&rsquo;s cloud-and-tech and maritime economy to Tacoma&rsquo;s port and logistics base, Spokane, Vancouver, Bellevue, Everett, and Kent.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Washington bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Washington bookkeeping services?", a: "<strong>Washington bookkeeping services are the ongoing recording, reconciling, and reporting of a Washington business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, gross receipts sub-reconciled by Business &amp; Occupation (B&amp;O) classification (a gross-receipts tax with no deduction for costs, plus the separate city B&amp;O cities such as Seattle and Tacoma levy on top), combined sales/use tax sub-reconciliation by location (the 6.5% state rate plus local, destination-based), clean records kept ready for the owner&rsquo;s 7% capital-gains tax, payroll reviewed with no state income-tax withholding but the WA premiums applied (PFML and WA Cares), and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Washington?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you report, your B&amp;O classifications and any city B&amp;O exposure, and your multi-state footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Washington businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the B&amp;O / Combined Excise Tax Return and the sales-tax return). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/washington/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, gross receipts that were never tracked by B&amp;O classification (or by city for city B&amp;O), a single sales-tax rate that missed the local, destination-based layers, and cost-basis records too tangled to support the owner&rsquo;s capital-gains reporting &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Washington business actually runs &mdash; tracking gross receipts by B&amp;O classification, charging the combined sales/use tax across multiple jurisdictions, employing staff under the WA payroll premiums, or keeping cost-basis records ready for the capital-gains tax." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Washington owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "39 counties", label: "Served remotely across all 39 Washington counties &mdash; from Seattle&rsquo;s cloud-and-tech and maritime economy to Tacoma&rsquo;s port and logistics base, Spokane, Vancouver, Bellevue, Everett, and Kent &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/washington/small-business-accountant/", cta: "Washington small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Washington business &mdash; with gross-receipts tracking set up by Business &amp; Occupation (B&amp;O) classification (and by city where a local B&amp;O applies), sales/use tax liability accounts so the correct combined rate by location ties out, and clean cost-basis records for the owner&rsquo;s capital-gains reporting &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/washington/quickbooks-setup/", cta: "Washington QuickBooks setup &rarr;" },
    { num: "03", title: "B&amp;O tax, sales tax &amp; payroll review", body: "Washington has no income tax, so payroll carries no state income-tax withholding &mdash; but it runs two premiums we set up and reconcile: Paid Family &amp; Medical Leave (1.13% for 2026) and WA Cares (0.58%, employee-paid), alongside federal, FICA, and state unemployment. The standout operational work is the Business &amp; Occupation (B&amp;O) tax: a gross-receipts tax owed by classification with no deduction for costs (retailing 0.471%, wholesaling and manufacturing 0.484%, a tiered service rate from 1.5%), plus the separate city B&amp;O many cities such as Seattle, Tacoma, Bellevue, and Everett levy on top &mdash; so we track gross receipts by classification (and by city) and sub-reconcile them monthly. We also configure QuickBooks to charge the combined sales/use tax (the 6.5% state rate plus local, destination-based) correctly by location and sub-reconcile it (confirming the current combined rate against the Department of Revenue source before charging). You or your CPA file the B&amp;O / Combined Excise Tax Return, the sales-tax return, and any city B&amp;O return with the Washington Department of Revenue.", href: "/quickbooks/payroll/", cta: "Payroll &amp; sales tax &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; with clean cost-basis records kept ready for the owner&rsquo;s capital-gains tax, per entity where you run more than one.", href: "/find-an-accountant/washington/quickbooks-accountant/", cta: "Washington QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with gross receipts sub-reconciled by B&amp;O classification, the combined sales/use tax sub-reconciled by location, and cost-basis records kept ready for the capital-gains tax &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/washington/quickbooks-cleanup/", cta: "Washington QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Gross-receipts sub-reconciliation by Business &amp; Occupation (B&amp;O) classification (and by city for city B&amp;O)",
    "Combined sales/use tax sub-reconciliation by location (6.5% state + local, destination-based)",
    "Cost-basis records kept ready for the owner&rsquo;s 7% capital-gains tax",
    "No-state-withholding payroll review with the WA premiums (PFML + WA Cares) applied",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your federal income-tax returns (Washington has no income tax)",
    "Files the B&amp;O tax / Combined Excise Tax Return",
    "Files the sales-tax return, the capital-gains tax &amp; any city B&amp;O return",
    "Represents you before the Washington Department of Revenue",
    "Formal tax planning &amp; opinions",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Washington situation &mdash; volume, accounts, number of entities, your B&amp;O classifications and any city B&amp;O exposure, where your combined sales/use rates land by location, how your cost-basis records should be kept ready for the capital-gains tax, where your multi-state footprint runs, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with gross receipts never tracked by B&amp;O classification, a single sales-tax rate that missed the local destination-based layers, or cost-basis records too tangled to support the owner&rsquo;s capital-gains reporting &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/washington/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, gross receipts sub-reconciled by B&amp;O classification, the combined sales/use tax sub-reconciled by location, cost-basis records kept ready for the capital-gains tax, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that your gross receipts have moved into a higher B&amp;O service tier, that a sale in another city carries a different combined sales/use rate or its own city B&amp;O &mdash; or that the owner is about to trigger the 7% capital-gains tax on a sale. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Washington books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Washington-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Washington bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Washington bookkeeping services actually include?", a: "Monthly bookkeeping for a Washington business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; tracking gross receipts and sub-reconciling them by Business &amp; Occupation (B&amp;O) classification (and by city where a local B&amp;O applies); charging and sub-reconciling the combined sales/use tax by location (the 6.5% state rate plus local, destination-based); keeping clean cost-basis records ready for the owner&rsquo;s 7% capital-gains tax; running payroll with no state income-tax withholding but the WA premiums applied (Paid Family &amp; Medical Leave and WA Cares); producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Washington?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you report, your B&amp;O classifications and any city B&amp;O exposure, and your multi-state footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Washington business?", a: "Most Washington businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the B&amp;O / Combined Excise Tax Return and the sales-tax return. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, reconstructing gross receipts by B&amp;O classification (and by city) so the right classifications are visible, fixing a single sales-tax rate that missed the local destination-based layers, and cleaning up cost-basis records so the owner&rsquo;s capital-gains reporting is supportable &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Washington B&amp;O tax and sales tax in the books?", a: "Washington has no income tax, so the standout operational complexity is the Business &amp; Occupation (B&amp;O) tax &mdash; a gross-receipts tax owed by classification with no deduction for costs, so even a low-margin or break-even business owes it. Verified rates run 0.471% for retailing, 0.484% for wholesaling and manufacturing, and a tiered service rate from 1.5% (rising for larger businesses); many cities such as Seattle, Tacoma, Bellevue, and Everett also levy their own city B&amp;O on top, administered by the city, not the state. We configure QuickBooks to track gross receipts by B&amp;O classification (and by city where a local B&amp;O applies) and sub-reconcile them monthly. Separately, the combined sales/use tax is the 6.5% state rate plus local, destination-based &mdash; so we charge the correct combined rate by location and sub-reconcile the liability (confirming the current rate against the Department of Revenue source before charging). We prepare the numbers; you or your CPA file the B&amp;O / Combined Excise Tax Return, the sales-tax return, and any city B&amp;O return with the Washington Department of Revenue." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Washington business runs, whether it tracks gross receipts by B&amp;O classification, charges the combined sales/use tax across multiple jurisdictions, employs staff under the WA payroll premiums, or needs cost-basis records kept ready for the capital-gains tax." },
    { q: "How do we start Washington bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; your B&amp;O classifications and any city B&amp;O exposure, where your combined sales/use rates land by location, how your cost-basis records should be kept ready for the capital-gains tax, where your multi-state footprint runs &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the B&amp;O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax &amp; any city B&amp;O return coordinated with your CPA/EA and the Washington Dept of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/washington/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Washington Bookkeeping Services","description":"Fixed-fee bookkeeping services for Washington businesses across all 39 counties — monthly bookkeeping, cleanup, catch-up, gross-receipts sub-reconciliation by Business & Occupation (B&O) classification (no deduction for costs, plus city B&O), combined sales/use tax sub-reconciliation by location (6.5% state plus local, destination-based), clean records kept ready for the owner's 7% capital-gains tax, and no-income-tax payroll with the Washington premiums (PFML and WA Cares) reviewed, delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-washington-bookkeeping-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#wa-svc-bkkg-summary","#wa-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Washington","item":"https://techbrot.com/find-an-accountant/washington/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Washington Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, gross-receipts sub-reconciliation by Business & Occupation (B&O) classification (no deduction for costs, plus city B&O), combined sales/use tax sub-reconciliation by location (6.5% state plus local, destination-based), clean records kept ready for the owner's 7% capital-gains tax, and no-income-tax payroll with the Washington premiums (PFML and WA Cares) reviewed for Washington businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Washington returns, the B&O / Combined Excise Tax Return, the sales-tax return, the capital-gains tax, or any city B&O return — coordinates with the client's CPA, EA, or the Washington Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Washington","sameAs":"https://en.wikipedia.org/wiki/Washington_(state)"},
          "audience":{"@type":"BusinessAudience","name":"Washington small and midsize businesses, technology and cloud companies, aerospace and advanced-manufacturing firms, e-commerce and retail sellers, maritime, ports and logistics operators, agriculture and food producers, healthcare and life-sciences organizations, and professional and financial-services firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Washington Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/north-carolina/bookkeeping-services/ — t-money NC SERVICE child (overview
 * of the NC bookkeeping service). NEW page (no baseline equity contract — North Carolina set built
 * fresh as a core state). Structure mirrors the proven GA (and MI/OH/DE/NY/IN/PA/NJ/MD/VA)
 * bookkeeping-services child: JSON front-matter in the .njk; this file supplies the content arrays
 * + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * NORTH CAROLINA LOCALIZATION (per NC-FACTS, verified 2026-06-26 against the NC Dept of Revenue): the
 * NC-distinct hooks are NOT a local payroll tax (NC has NONE) but the VANISHING corporate income tax +
 * the SURVIVING franchise tax, the county-variable SALES tax, and the new low flat 3.99% rate. (1) State
 * individual income tax is a FLAT 3.99% for 2026 (down from 4.25% in 2025; S.L. 2023-134, still on a
 * legislated path downward); the lowest flat rate in our Sunbelt set. (2) Corporate income tax is being
 * PHASED OUT ENTIRELY — 2.00% for 2026, reaching ZERO by 2030 (S.L. 2021-180 / G.S. 105-130.3C); NC is the
 * only state eliminating it. (3) The FRANCHISE TAX survives the phase-out — a net-worth-style annual business
 * tax: $1.50 per $1,000 of the tax base, $200 minimum, $500 cap on the first $1,000,000, holding companies
 * capped at $150,000, filed on the CD-405/CD-401S — so we keep the equity section and balance sheet
 * franchise-tax-ready. (4) Sales & use tax is 4.75% STATE plus a county rate (2.00%/2.25%) and a 0.50% transit
 * rate in four counties, so the COMBINED rate VARIES by county (6.75%-7.50%; Mecklenburg/Charlotte rises to
 * 8.25% on July 1, 2026) — QuickBooks must apply the correct combined rate by location (the recurring monthly
 * sub-reconciliation work). (5) NO local/city income tax (state-only withholding) BUT NO reciprocity with any
 * state, so ALL North Carolina-source wages are withheld for NC (matters for multi-state/remote employers).
 * (6) The elective Taxed Pass-Through Entity (PTE) election (G.S. 105-154.1) as a SALT-cap workaround —
 * advisory item; we keep the books Taxed-PTE-ready. Pricing uses ONLY canonical figures (monthly from
 * $400/mo; cleanup from $1,200). No fabricated NC-specific dollar tiers; combined county sales-tax rates
 * framed qualitatively (6.75-7.50%).
 *
 * NO ADDRESS (CRITICAL): North Carolina is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the GA child ("served remotely
 * across all 100 North Carolina counties"). Review prose defers to the NC Department of Revenue.
 *
 * ROUTING (NC core state, 6 pages): link ONLY to existing pages — the NC siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the NC pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent NC child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file North Carolina or federal returns, the corporate
 * income tax, the franchise tax, the individual income tax, the sales-tax return, or the Taxed PTE election;
 * coordinates with the client's CPA, EA, and the NC Dept of Revenue. The flat 3.99% income rate (2026), the
 * 2.00%-phasing-to-zero corporate rate, the franchise-tax $1.50/$1,000 / $200 min / $500-on-first-$1M /
 * $150,000 holding-co figures, and the 4.75% state sales tax are VERIFIED; combined county sales-tax rates
 * framed qualitatively (6.75-7.50%). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>North Carolina bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/accounting/sales-tax-compliance/\">county sales tax sub-reconciled by location</a> (4.75% state plus a county rate and, in four counties, transit, so the combined rate runs 6.75&ndash;7.50% &mdash; Mecklenburg rising to 8.25% on July 1, 2026), the <strong>franchise tax</strong> kept ready on a clean balance sheet as the corporate income tax phases out to zero by 2030, the flat 3.99% income tax and the Taxed PTE election tracked, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 100 North Carolina counties, from Charlotte&rsquo;s banking and fintech corridor and the Research Triangle to Greensboro, Durham, Winston-Salem, Fayetteville, Wilmington, and Asheville.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: North Carolina bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are North Carolina bookkeeping services?", a: "<strong>North Carolina bookkeeping services are the ongoing recording, reconciling, and reporting of a North Carolina business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, county sales-tax sub-reconciliation by location (4.75% state plus a county rate and, in four counties, transit, so the combined rate runs 6.75&ndash;7.50%), a franchise-tax-ready balance sheet as the corporate income tax phases out to zero by 2030, flat 3.99% income-tax and Taxed PTE readiness, state withholding on all North Carolina-source wages (no local income tax, no reciprocity), and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in North Carolina?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax counties you sell into, whether the franchise tax applies, and your multi-state footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most North Carolina businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the Taxed PTE election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, a single statewide sales-tax rate that missed the county and transit add-ons, a messy equity section that obscures the franchise-tax base, and wrong multi-state withholding assumptions &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your North Carolina business actually runs &mdash; selling across multiple county sales-tax rates, sitting on the franchise-tax schedule, employing out-of-state remote staff with no reciprocity shortcut, or weighing the Taxed PTE election." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things North Carolina owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "100 counties", label: "Served remotely across all 100 North Carolina counties &mdash; from Charlotte&rsquo;s banking and fintech corridor and the Research Triangle to Greensboro, Durham, Winston-Salem, Fayetteville, Wilmington, and Asheville &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/north-carolina/small-business-accountant/", cta: "North Carolina small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your North Carolina business &mdash; with sales-tax liability accounts set up by county so the correct combined rate (4.75% state plus county and transit) ties out, a clean equity section so the franchise tax can be computed, and Taxed-PTE-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/north-carolina/quickbooks-setup/", cta: "North Carolina QuickBooks setup &rarr;" },
    { num: "03", title: "County sales tax &amp; withholding review", body: "North Carolina&rsquo;s flat 3.99% income tax is the easy part. The operational work is the sales tax: the state rate is 4.75%, but counties add a 2.00% or 2.25% local rate and four counties add a 0.50% transit rate, so the combined rate runs about 6.75% to 7.50% &mdash; and Mecklenburg (Charlotte) rises to 8.25% on July 1, 2026 &mdash; so QuickBooks has to charge the correct combined rate by location, and we sub-reconcile the sales-tax liability monthly so it ties to the books. On payroll, North Carolina has no local income tax, so withholding is state-only &mdash; but there is no reciprocity, so all North Carolina-source wages are withheld for North Carolina. We review the withholding configuration so multi-state and remote staff are right. You or your CPA file with the North Carolina Department of Revenue.", href: "/quickbooks/payroll/", cta: "Payroll &amp; state withholding &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; with the equity section kept clean and franchise-tax-ready, per entity where you run more than one.", href: "/find-an-accountant/north-carolina/quickbooks-accountant/", cta: "North Carolina QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the county sales tax sub-reconciled by location, the balance sheet kept CD-405-ready as the corporate income tax phases out, and the Taxed PTE detail kept ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/north-carolina/quickbooks-cleanup/", cta: "North Carolina QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "County sales-tax sub-reconciliation by location (combined 6.75&ndash;7.50%)",
    "State withholding review &mdash; all North Carolina-source wages (no reciprocity)",
    "Franchise-tax-ready balance sheet &amp; Taxed PTE-readiness tracking",
    "Multi-state nexus footprint documented for your CPA",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your North Carolina &amp; federal income-tax returns",
    "Files the corporate income tax &amp; the franchise tax (CD-405/CD-401S)",
    "Files the individual income tax &amp; the sales and use tax return",
    "Represents you before the North Carolina Department of Revenue",
    "Formal tax planning, opinions &amp; the Taxed Pass-Through Entity (PTE) election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your North Carolina situation &mdash; volume, accounts, number of entities, which county sales-tax rates you charge, whether the franchise tax applies, where your multi-state withholding runs (no reciprocity shortcut), whether the Taxed PTE election fits, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with a single statewide sales-tax rate that missed the county and transit add-ons, a messy equity section that obscures the franchise-tax base, or wrong multi-state withholding &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/north-carolina/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the county sales tax sub-reconciled by location, the balance sheet kept franchise-tax-ready, the Taxed PTE position tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that you just triggered sales-tax nexus in three more counties, that your net worth just moved you up the franchise-tax schedule, that a remote hire in another state changed which state you withhold for &mdash; or that your pass-through should weigh the Taxed PTE election this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your North Carolina books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, North Carolina-specific. visible faq__list = FAQPage schema (same array).
  // (H2: North Carolina bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do North Carolina bookkeeping services actually include?", a: "Monthly bookkeeping for a North Carolina business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; sub-reconciling the county sales tax by location (4.75% state plus a county rate and, in four counties, transit, combined 6.75&ndash;7.50%); keeping the equity section and balance sheet franchise-tax-ready; tracking Taxed PTE readiness and state withholding on all North Carolina-source wages; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in North Carolina?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax counties you sell into, whether the franchise tax applies, and your multi-state footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my North Carolina business?", a: "Most North Carolina businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the Taxed PTE election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, fixing a single statewide sales-tax rate that missed the county and transit add-ons, cleaning the equity section so the franchise-tax base can be computed, and correcting multi-state withholding that wrongly assumed reciprocity &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the North Carolina county sales tax and the franchise tax in the books?", a: "North Carolina&rsquo;s income tax is a flat 3.99%, so the operational complexity lives in the sales tax: the state rate is 4.75%, but counties add a 2.00% or 2.25% local rate and four counties add a 0.50% transit rate, so the combined rate runs about 6.75% to 7.50% &mdash; and Mecklenburg (Charlotte) rises to 8.25% on July 1, 2026 &mdash; so we configure QuickBooks to charge the correct combined rate by location and sub-reconcile the sales-tax liability monthly so it ties to the books (we confirm a county&rsquo;s current combined rate against the Department of Revenue rate chart before charging). Separately, North Carolina keeps a franchise tax even as the corporate income tax phases out to zero by 2030 &mdash; $1.50 per $1,000 of the tax base, a $200 minimum, capped at $500 on the first $1,000,000 (holding companies capped at $150,000) &mdash; filed with the corporate return (CD-405/CD-401S), so we keep the equity section and balance sheet franchise-tax-ready. We prepare the numbers; you or your CPA file with the North Carolina Department of Revenue." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your North Carolina business runs, whether it sells across multiple county sales-tax rates, sits on the franchise-tax schedule, employs out-of-state remote staff with no reciprocity shortcut, or is weighing the Taxed PTE election." },
    { q: "How do we start North Carolina bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which county sales-tax rates you charge, whether the franchise tax applies, where your multi-state withholding runs, whether the Taxed PTE election fits &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the corporate income tax, the franchise tax, the individual income tax, the sales-tax return &amp; the Taxed Pass-Through Entity (PTE) election coordinated with your CPA/EA and the North Carolina Dept of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/north-carolina/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"North Carolina Bookkeeping Services","description":"Fixed-fee bookkeeping services for North Carolina businesses across all 100 counties — monthly bookkeeping, cleanup, catch-up, county sales-tax sub-reconciliation by location (4.75% state plus county and transit, combined 6.75-7.50%), a franchise-tax-ready balance sheet as the corporate income tax phases out to zero by 2030, flat 3.99% income-tax and Taxed PTE readiness, and state withholding on all North Carolina-source wages (no local income tax, no reciprocity), delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/north-carolina-bookkeeping-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#nc-svc-bkkg-summary","#nc-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"North Carolina","item":"https://techbrot.com/find-an-accountant/north-carolina/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"North Carolina Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, county sales-tax sub-reconciliation by location (4.75% state plus county and transit, combined 6.75-7.50%), a franchise-tax-ready balance sheet as the corporate income tax phases out to zero by 2030, flat 3.99% income-tax and Taxed PTE readiness, and state withholding on all North Carolina-source wages (no local income tax, no reciprocity) for North Carolina businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file North Carolina returns, the corporate income tax, the franchise tax, the individual income tax, the sales-tax return, or the Taxed Pass-Through Entity (PTE) election — coordinates with the client's CPA, EA, or the North Carolina Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"North Carolina","sameAs":"https://en.wikipedia.org/wiki/North_Carolina"},
          "audience":{"@type":"BusinessAudience","name":"North Carolina small and midsize businesses, banking and fintech firms, technology and biotech companies, manufacturers, logistics and distribution operators, healthcare practices, and construction and real estate firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"North Carolina Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

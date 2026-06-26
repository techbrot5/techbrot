/* /find-an-accountant/georgia/bookkeeping-services/ — t-money GA SERVICE child (overview
 * of the GA bookkeeping service). NEW page (no baseline equity contract — Georgia set built
 * fresh as a core state). Structure mirrors the proven MI (and OH/DE/NY/IN/PA/NJ/MD/VA)
 * bookkeeping-services child: JSON front-matter in the .njk; this file supplies the content arrays
 * + an eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). FAQPage mainEntity is generated from the same `faq` array the visible faq__list
 * renders — single source.
 *
 * GEORGIA LOCALIZATION (per GA-FACTS, verified 2026-06-26 against the Georgia Dept of Revenue): the
 * GA-distinct hooks are NOT a local payroll tax (Georgia has NONE) but the local-option SALES tax, the
 * corporate NET WORTH TAX, and the new flat 4.99% rate. (1) State individual income tax is a FLAT 4.99%
 * for 2026 (HB 1437 made GA flat; HB 463 lowered it from 5.19%; on a legislated path to further reductions);
 * the corporate income tax matches at a flat 4.99%. (2) Sales & use tax is 4% STATE plus county LOCAL-OPTION
 * add-ons — LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta's MOST — so the COMBINED rate VARIES by
 * jurisdiction (commonly ~7%-8%) and changes quarterly; QuickBooks must apply the correct combined rate by
 * location (the recurring monthly sub-reconciliation work). (3) A corporate NET WORTH TAX — a franchise-style
 * tax separate from income tax: $0 if net worth <= $100,000 (still files), graduated to a MAX of $5,000 over
 * $22 million, filed with the income-tax return (Form 600) — so we keep the equity section and balance sheet
 * net-worth-tax-ready. (4) NO local/city income tax (state-only withholding) BUT NO reciprocity with any
 * state, so ALL Georgia-source wages are withheld for Georgia (matters for multi-state/remote employers).
 * (5) The elective PTE tax (HB 149) at 4.99% as a SALT-cap workaround — advisory item; we keep the books
 * PTE-ready. Pricing uses ONLY canonical figures (monthly from $400/mo; cleanup from $1,200). No fabricated
 * GA-specific dollar tiers; combined jurisdiction sales-tax rates framed qualitatively (~7-8%).
 *
 * NO ADDRESS (CRITICAL): Georgia is an areaServed-only state — NO street address, NO local office,
 * NO LocalBusiness/PostalAddress/geo/hasMap anywhere. Framing mirrors the MI child ("served remotely
 * across all 159 Georgia counties"). Review prose defers to the Georgia Department of Revenue.
 *
 * ROUTING (GA core state, 6 pages): link ONLY to existing pages — the GA siblings
 * (/quickbooks-accountant/, /small-business-accountant/, /quickbooks-cleanup/, /quickbooks-setup/)
 * + the GA pillar; everything else routes to GLOBAL (monthly-bookkeeping, catch-up, payroll,
 * sales-tax-compliance, fractional-cfo, quickbooks/online, file-review, pricing,
 * bookkeeper-vs-accountant). NEVER link to a non-existent GA child (404 = battery break).
 *
 * HONESTY (R5): the "why ... keep their books with us" facts are representative/scope (team
 * experience; counties served; named-bookkeeper continuity; free discovery) — no fabricated
 * client outcomes, no AggregateRating, no review-card. No founder/personal name in visible
 * content; David Westgate appears only as reviewedBy #david-westgate in schema. Independent firm —
 * NOT a CPA firm and NOT a registered agent; does NOT file Georgia or federal returns, the corporate
 * income tax, the net worth tax, the individual income tax, the sales-tax return, or the PTE election;
 * coordinates with the client's CPA, EA, and the Georgia Dept of Revenue. The flat 4.99% income/corporate
 * rate (2026) and the net-worth-tax $100k/$5,000/$22M figures are VERIFIED; the 4% state sales tax is
 * VERIFIED; combined jurisdiction sales-tax rates framed qualitatively (~7-8%). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: "<strong>Georgia bookkeeping services</strong> from TechBrot keep your books clean, current, and reconciled &mdash; every bank, credit-card, and merchant account categorized, the <a href=\"/accounting/sales-tax-compliance/\">local-option sales tax sub-reconciled by jurisdiction</a> (4% state plus county LOST/SPLOST/TSPLOST add-ons, combined ~7&ndash;8%), the <strong>corporate net worth tax</strong> kept ready on a clean balance sheet, the flat 4.99% income tax and the PTE election tracked, and CPA-ready monthly financial statements produced by a named Certified ProAdvisor on the same file. Behind or messy? A one-time <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">cleanup</a> or catch-up comes first, then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Fixed-fee against a written scope (monthly from $400/mo; cleanup from $1,200). We run the books in <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; in your own file &mdash; and coordinate with your CPA. We&rsquo;re <strong>not a CPA firm</strong>: we deliver the books; your CPA files. Served remotely across all 159 Georgia counties, from metro Atlanta and the Port of Savannah to Augusta, Columbus, Macon, Athens, Marietta, and Alpharetta.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Georgia bookkeeping services, in five questions.)
  aiSummary: [
    { q: "What are Georgia bookkeeping services?", a: "<strong>Georgia bookkeeping services are the ongoing recording, reconciling, and reporting of a Georgia business&rsquo;s finances</strong> &mdash; bank and card reconciliation, a clean chart of accounts, AR/AP tracking, local-option sales-tax sub-reconciliation by jurisdiction (4% state plus county LOST/SPLOST/ELOST/TSPLOST add-ons, combined ~7&ndash;8%), a net-worth-tax-ready balance sheet, flat 4.99% income-tax and PTE readiness, state withholding on all Georgia-source wages (no local income tax, no reciprocity), and monthly CPA-ready statements. TechBrot delivers them fixed-fee in your own QuickBooks Online file, with a named Certified ProAdvisor on the same file every month." },
    { q: "What do they cost in Georgia?", a: "Ongoing monthly bookkeeping starts at <strong>$400/mo</strong>, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you sell into, whether the corporate net worth tax applies, and your multi-state footprint &mdash; not by the hour. If you&rsquo;re behind, a one-time cleanup or catch-up (from $1,200) comes first. All fixed-fee, priced in writing before work begins. See <a href=\"/pricing/\">pricing</a>." },
    { q: "Bookkeeper or accountant — which do I need?", a: "Most Georgia businesses need <strong>bookkeeping first</strong> (clean, current, reconciled books) and a CPA second (filing, tax strategy, the PTE election). TechBrot does the bookkeeping and QuickBooks work and coordinates with your CPA, who files. Not sure which you need? That&rsquo;s exactly what the discovery call sorts out. <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs accountant &rarr;</a>" },
    { q: "Can you clean up my books first?", a: "Yes &mdash; the standard path is a one-time <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">cleanup</a> or catch-up to a CPA-ready standard &mdash; including untangling commingled multi-entity files, a single statewide sales-tax rate that missed the county local-option add-ons, a messy equity section that obscures the net worth tax, and wrong multi-state withholding assumptions &mdash; then ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly service</a> so the books never drift again." },
    { q: "Same bookkeeper every month?", a: "Yes &mdash; a <strong>named Certified ProAdvisor</strong> stays on your file, not rotated, anonymous staff. Continuity is why errors get caught early and the books reflect how your Georgia business actually runs &mdash; selling across multiple sales-tax jurisdictions, sitting on the corporate net-worth-tax schedule, employing out-of-state remote staff with no reciprocity shortcut, or weighing the PTE election." },
  ],

  // WHY — representative trust points (R5: reframed, no fabricated outcomes).
  whyLede: "No fabricated outcomes &mdash; just how the engagement is built. These are the things Georgia owners tell us made the difference.",
  why: [
    { value: "Team experience", label: "Books reviewed by a team with decades of combined operational accounting experience &mdash; not a first-year hire learning on your file." },
    { value: "159 counties", label: "Served remotely across all 159 Georgia counties &mdash; from metro Atlanta and the Port of Savannah to Augusta, Columbus, Macon, Athens, Marietta, and Alpharetta &mdash; in your own QuickBooks Online file." },
    { value: "One named bookkeeper", label: "A named Certified ProAdvisor stays on your file every month &mdash; never rotated, anonymous staff." },
    { value: "Free to start", label: "The discovery call and books review cost nothing, and you get a fixed-fee scope in writing before any work begins." },
  ],

  // INCLUDED — what's in complete monthly bookkeeping (lift cards).
  // (H2: Complete monthly bookkeeping, not a partial service.)
  included: [
    { num: "01", title: "Transaction categorization &amp; reconciliation", body: "Every bank, credit-card, and merchant account categorized correctly and reconciled to statement, with accounts payable and receivable kept current &mdash; the foundation everything else depends on.", href: "/find-an-accountant/georgia/small-business-accountant/", cta: "Georgia small business accountant &rarr;" },
    { num: "02", title: "Clean chart of accounts", body: "A chart of accounts structured for your Georgia business &mdash; with sales-tax liability accounts set up by jurisdiction so the correct combined rate (4% state plus county local-option add-ons) ties out, a clean equity section so the corporate net worth tax can be computed, and PTE-ready distributive-share detail where it applies &mdash; so your reports are meaningful and tax prep is painless.", href: "/find-an-accountant/georgia/quickbooks-setup/", cta: "Georgia QuickBooks setup &rarr;" },
    { num: "03", title: "Local-option sales tax &amp; withholding review", body: "Georgia&rsquo;s flat 4.99% income tax is the easy part. The operational work is the sales tax: the state rate is 4%, but counties add local-option taxes (LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST), so the combined rate runs about 7% to 8% and changes quarterly &mdash; QuickBooks has to charge the correct combined rate by location, and we sub-reconcile the sales-tax liability monthly so it ties to the books. On payroll, Georgia has no local income tax, so withholding is state-only &mdash; but there is no reciprocity, so all Georgia-source wages are withheld for Georgia. We review the withholding configuration so multi-state and remote staff are right. You or your CPA file with the Georgia Department of Revenue.", href: "/quickbooks/payroll/", cta: "Payroll &amp; state withholding &rarr;" },
    { num: "04", title: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash-flow statement you can actually read &mdash; delivered on a predictable monthly cadence, not scrambled together at year-end &mdash; with the equity section kept clean and net-worth-tax-ready, per entity where you run more than one.", href: "/find-an-accountant/georgia/quickbooks-accountant/", cta: "Georgia QuickBooks accountant &rarr;" },
    { num: "05", title: "Year-end CPA handoff", body: "Clean, documented, reconciled books delivered to your CPA at year-end &mdash; with the local-option sales tax sub-reconciled by jurisdiction, the balance sheet kept Form 600 net-worth-tax-ready, and the PTE detail kept ready where it applies &mdash; for faster, cheaper, audit-ready filing, with us coordinating directly.", href: "/find-an-accountant/georgia/quickbooks-cleanup/", cta: "Georgia QuickBooks cleanup &rarr;" },
  ],

  // SCOPE — honest do/don't split.
  // (H2: What we do — and what we don't.)
  scopeDo: [
    "Monthly bookkeeping, reconciliation &amp; financial statements",
    "Cleanup &amp; catch-up to a CPA-ready standard",
    "Local-option sales-tax sub-reconciliation by jurisdiction (combined ~7&ndash;8%)",
    "State withholding review &mdash; all Georgia-source wages (no reciprocity)",
    "Net-worth-tax-ready balance sheet &amp; PTE-readiness tracking",
    "Multi-state nexus footprint documented for your CPA",
    "QuickBooks management &mdash; Online (default) &amp; Desktop",
    "Year-end handoff to your CPA",
  ],
  scopeDont: [
    "Files your Georgia &amp; federal income-tax returns",
    "Files the corporate income tax &amp; the net worth tax (Form 600)",
    "Files the individual income tax &amp; the sales and use tax return",
    "Represents you before the Georgia Department of Revenue",
    "Formal tax planning, opinions &amp; the pass-through entity (PTE) election",
    "We coordinate directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
  ],

  // PROCESS — four steps to clean books.
  // (H2: Four steps to clean books.)
  process: [
    { phase: "Step 1", title: "Books review", body: "A free discovery call and a look at your current books and your Georgia situation &mdash; volume, accounts, number of entities, which sales-tax jurisdictions you sell into, whether the corporate net worth tax applies, where your multi-state withholding runs (no reciprocity shortcut), whether the PTE election fits, and where things are breaking. No pitch." },
    { phase: "Step 2", title: "Written scope", body: "A fixed-fee proposal within 3 business days &mdash; cleanup, monthly bookkeeping, or both &mdash; with the price in writing before any work starts." },
    { phase: "Step 3", title: "Cleanup if needed", body: "If your books are behind or messy &mdash; or commingled across entities, with a single statewide sales-tax rate that missed the county local-option add-ons, a messy equity section that obscures the net worth tax, or wrong multi-state withholding &mdash; your named Certified ProAdvisor gets the file accurate and reconciled to a <a href=\"/find-an-accountant/georgia/quickbooks-cleanup/\">CPA-ready</a> standard first." },
    { phase: "Step 4", title: "Monthly cadence", body: "The same bookkeeper, the same file, every month &mdash; reconciled accounts, the local-option sales tax sub-reconciled by jurisdiction, the balance sheet kept net-worth-tax-ready, the PTE position tracked, statements delivered, with a clean year-end handoff to your CPA." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "Bank feeds can import a transaction; they can&rsquo;t tell you a customer is slow-paying, a margin is shrinking, that you just triggered sales-tax nexus in three more jurisdictions, that your net worth just crossed onto the franchise-tax schedule, that a remote hire in another state changed which state you withhold for &mdash; or that your pass-through should weigh the PTE election at 4.99% this year. Clean books are the foundation &mdash; judgment is the value.",
    "Once your Georgia books are solid, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell me to do next?&rdquo; That&rsquo;s where <a href=\"/accounting/advisory/fractional-cfo/\">fractional-CFO advisory</a> turns reconciled books into cash-flow planning and real decisions. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // FAQ — 7 Q/A, Georgia-specific. visible faq__list = FAQPage schema (same array).
  // (H2: Georgia bookkeeping services questions.) 1 call-intent answer (#7).
  faq: [
    { q: "What do Georgia bookkeeping services actually include?", a: "Monthly bookkeeping for a Georgia business includes categorizing and reconciling every bank, credit-card, and merchant account; maintaining a clean chart of accounts; sub-reconciling the local-option sales tax by jurisdiction (4% state plus county LOST/SPLOST/ELOST/TSPLOST add-ons, combined ~7&ndash;8%); keeping the equity section and balance sheet net-worth-tax-ready; tracking PTE readiness and state withholding on all Georgia-source wages; producing a monthly profit &amp; loss, balance sheet, and cash-flow statement; and preparing year-end books for your CPA. TechBrot delivers this fixed-fee, with a named bookkeeper on the same file every month." },
    { q: "How much do bookkeeping services cost in Georgia?", a: "Ongoing monthly bookkeeping starts at $400/mo, set by transaction volume, number of accounts and entities, employee count, the number of sales-tax jurisdictions you sell into, whether the corporate net worth tax applies, and your multi-state footprint &mdash; not by the hour. If your books are behind or messy, a one-time cleanup or catch-up (from $1,200) comes first. You get the scope and the fixed price in writing before any work starts." },
    { q: "Do I need a bookkeeper or an accountant for my Georgia business?", a: "Most Georgia businesses need bookkeeping first &mdash; clean, current, reconciled books &mdash; and an accountant or CPA second, for filing, tax strategy, and the PTE election. TechBrot provides the bookkeeping (and QuickBooks work) and coordinates with your CPA, who files. If you&rsquo;re not sure which you need, that&rsquo;s exactly what the discovery call sorts out." },
    { q: "Can you clean up my books before starting monthly service?", a: "Yes &mdash; that&rsquo;s the standard path. We scope and complete a one-time cleanup or catch-up to get your books accurate and reconciled to a CPA-ready standard &mdash; including separating entities where they&rsquo;ve been commingled in one file, fixing a single statewide sales-tax rate that missed the county local-option add-ons, cleaning the equity section so the net worth tax can be computed, and correcting multi-state withholding that wrongly assumed reciprocity &mdash; then roll directly into monthly bookkeeping so they stay that way. You&rsquo;re never left with a half-fixed file." },
    { q: "How do you handle the Georgia local-option sales tax and the net worth tax in the books?", a: "Georgia&rsquo;s income tax is a flat 4.99%, so the operational complexity lives in the sales tax: the state rate is 4%, but counties add local-option taxes (LOST, SPLOST, ELOST/ESPLOST, TSPLOST, and Atlanta&rsquo;s MOST), so the combined rate runs about 7% to 8% and changes quarterly &mdash; we configure QuickBooks to charge the correct combined rate by location and sub-reconcile the sales-tax liability monthly so it ties to the books (we confirm a jurisdiction&rsquo;s current combined rate against the Department of Revenue rate chart before charging). Separately, Georgia levies a corporate net worth tax &mdash; $0 under $100,000 of net worth, capped at $5,000 over $22 million &mdash; filed with the corporate return (Form 600), so we keep the equity section and balance sheet net-worth-tax-ready. We prepare the numbers; you or your CPA file with the Georgia Department of Revenue." },
    { q: "Will the same person handle my books every month?", a: "Yes. You get a named bookkeeper who stays on your file month after month &mdash; not rotated, anonymous staff. That continuity is why errors get caught early and why your books actually reflect how your Georgia business runs, whether it sells across multiple sales-tax jurisdictions, sits on the corporate net-worth-tax schedule, employs out-of-state remote staff with no reciprocity shortcut, or is weighing the PTE election." },
    { q: "How do we start Georgia bookkeeping services?", a: "Book a free discovery call, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. We review your current books and your situation &mdash; which sales-tax jurisdictions you sell into, whether the net worth tax applies, where your multi-state withholding runs, whether the PTE election fits &mdash; determine whether you need cleanup, monthly service, or both, and send a written fixed-fee proposal within 3 business days. A named bookkeeper starts as soon as you approve the scope." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewer", detail: "Certified QuickBooks ProAdvisor team &middot; decades of combined operational accounting experience" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Out of scope", detail: "No tax-filing or representation claims &middot; the corporate income tax, the net worth tax, the individual income tax, the sales-tax return &amp; the pass-through entity (PTE) election coordinated with your CPA/EA and the Georgia Dept of Revenue" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Not a registered agent" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/georgia/bookkeeping-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Georgia Bookkeeping Services","description":"Fixed-fee bookkeeping services for Georgia businesses across all 159 counties — monthly bookkeeping, cleanup, catch-up, local-option sales-tax sub-reconciliation by jurisdiction (4% state plus county LOST/SPLOST/ELOST/TSPLOST add-ons, combined ~7-8%), a net-worth-tax-ready balance sheet, flat 4.99% income-tax and PTE readiness, and state withholding on all Georgia-source wages (no local income tax, no reciprocity), delivered by a named Certified ProAdvisor on the same file every month in the client's own QuickBooks file.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/georgia-bookkeeping-services-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ga-svc-bkkg-summary","#ga-svc-bkkg-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Georgia","item":"https://techbrot.com/find-an-accountant/georgia/"},
          {"@type":"ListItem","position":4,"name":"Bookkeeping Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Georgia Bookkeeping Services","serviceType":"Bookkeeping services","description":"Monthly bookkeeping, cleanup, catch-up, local-option sales-tax sub-reconciliation by jurisdiction (4% state plus county LOST/SPLOST/ELOST/TSPLOST add-ons, combined ~7-8%), a net-worth-tax-ready balance sheet, flat 4.99% income-tax and PTE readiness, and state withholding on all Georgia-source wages (no local income tax, no reciprocity) for Georgia businesses, delivered fixed-fee in the client's own QuickBooks file by a named Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Georgia returns, the corporate income tax, the net worth tax, the individual income tax, the sales-tax return, or the pass-through entity (PTE) election — coordinates with the client's CPA, EA, or the Georgia Department of Revenue.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Georgia","sameAs":"https://en.wikipedia.org/wiki/Georgia_(U.S._state)"},
          "audience":{"@type":"BusinessAudience","name":"Georgia small and midsize businesses, logistics and distribution operators, manufacturers, fintech and professional-services firms, healthcare practices, and construction and real estate firms"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Monthly bookkeeping from $400/mo; fixed-fee against a written scope.","url":url},
          "hasOfferCatalog":{"@type":"OfferCatalog","name":"Georgia Bookkeeping Services","itemListElement":[
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Monthly Bookkeeping"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping Cleanup"}},
            {"@type":"Offer","itemOffered":{"@type":"Service","name":"Catch-Up Bookkeeping"}}]}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

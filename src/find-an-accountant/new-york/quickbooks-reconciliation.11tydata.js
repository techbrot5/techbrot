/* /find-an-accountant/new-york/quickbooks-reconciliation/ — t-location NY SERVICE page
 * (QuickBooks-spoke under the NY pillar; 13 contract headings rendered, the newsletter
 * "The monthly brief." dropped). Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-qbrecon.txt)
 * — the ONLY authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/quickbooks-reconciliation/index.html, full body read) for body
 * prose/section content. Data-file shape mirrors monthly-bookkeeping.11tydata.js: JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an eleventyComputed
 * pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders from —
 * single source of truth.
 *
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. T2 headings frozen (every contract
 * H1/H2/H3 verbatim, exact level); footer chrome (Accounting/QuickBooks/Company/Network) and
 * the newsletter ("The monthly brief.") are intentionally NOT rendered here — global chrome
 * owns them. T3 no collapse. T4 FAQ: 8 contract Q/A verbatim/flat/append-only. T6 content-to-
 * goal: real NY QuickBooks-reconciliation specifics (monthly reconciliation of every bank/
 * credit/loan/merchant account to its statement, clearing the reconciliation-discrepancy
 * account, undeposited funds, beginning-balance mismatches, sales-tax-liability reconciliation,
 * historical catch-up, CPA handoff). COBALT VOCABULARY ONLY: stack-8, buyer-card, grid-2/grid-3,
 * byline-block, meta-reviewed, faq__list, ai-summary--ruled, checks-list, trust-row, section--alt.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review proof remains
 * the 2 real Clutch reviews (carried on the NY pillar, not duplicated here) — this service page
 * renders NO review-card and NO AggregateRating. The baseline named-reviewer line ("Lead
 * Certified QuickBooks ProAdvisor · 40+ years") is reframed to firm-level (no personal name in
 * visible content; firm-level review byline only). Independent firm — does NOT file NY taxes;
 * reconciles the sales-tax-liability account in the books and coordinates with the client's CPA,
 * who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  // Carries the baseline TL;DR prose, enriched with reconciliation-discrepancy specifics.
  summary: [
    "<strong>Reconciliation</strong> is the process of matching every transaction in <a href=\"/quickbooks/online/\">QuickBooks</a> against your actual bank, credit-card, loan, and merchant statements &mdash; confirming the books reflect reality and catching errors, duplicates, and fraud early. It is the single most important routine for keeping a QuickBooks file trustworthy, and it has to happen on <strong>every</strong> account with a statement, <strong>every</strong> month.",
    "A persistent <strong>reconciliation gap</strong> almost always traces to one of a handful of causes: transactions entered but never cleared, duplicate entries from bank feeds, a beginning balance that was wrong, transactions dated in the wrong period, or the undeposited-funds account masking deposits. When QuickBooks can&rsquo;t tie out, the difference lands in the <strong>reconciliation-discrepancy account</strong> &mdash; we work that account back to zero rather than letting it absorb the error. We diagnose the specific cause and fix it so each account ties out.",
    "Reconciliation is usually part of <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> ($400&ndash;$2,500+/mo); standalone historical reconciliation of accounts that have drifted is scoped separately as a fixed fee. Unreconciled books are a common <a href=\"/find-an-accountant/new-york/sales-tax-help/\">New York</a> tax-notice trigger, so this quietly matters for compliance. We deliver reconciled books and coordinate with your CPA, who files &mdash; TechBrot is an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc., and does not file New York tax returns.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: QuickBooks Reconciliation in New York, in five questions.)
  aiSummary: [
    { q: "What is reconciliation?", a: "<strong>Matching every QuickBooks transaction against your actual statements</strong> &mdash; bank, credit card, loan, and merchant &mdash; to confirm the books reflect reality. Done monthly, it catches errors, duplicates, and fraud early." },
    { q: "Why won&rsquo;t my QuickBooks reconcile?", a: "Usually uncleared transactions, duplicate feed entries, a wrong beginning balance, or undeposited funds masking deposits &mdash; with the difference parked in the <strong>reconciliation-discrepancy account</strong>. We diagnose the specific cause and fix it." },
    { q: "What does it cost?", a: "Usually part of monthly bookkeeping (<strong>$400&ndash;$2,500+/mo</strong>). One-time historical reconciliation is scoped as a fixed fee by accounts and months, against a written scope." },
    { q: "How often should I reconcile?", a: "<strong>Monthly, minimum</strong> &mdash; every bank, credit-card, loan, and merchant account, against the statement. It stops small discrepancies from compounding into a full cleanup." },
    { q: "Can unreconciled books cause tax problems?", a: "<strong>Yes</strong> &mdash; drifted filings and wrong returns are a common NY notice trigger; reconciled books are what let you prove your real numbers if the state questions a return." },
  ],

  // WHAT'S INVOLVED — the five reconciliation workstreams (grid-3 buyer-cards). 5 frozen H3s verbatim.
  // (H2: How we handle quickbooks reconciliation for New York businesses. + 5 H3s)
  handle: [
    { num: "01 &middot; Monthly", title: "All accounts reconciled monthly", body: "Every bank, credit-card, loan, line-of-credit, and merchant account &mdash; Stripe, Square, PayPal &mdash; matched to its statement, every period. Reconciling the merchant accounts is where New York restaurants and ecommerce businesses find the biggest discrepancies." },
    { num: "02 &middot; Resolve", title: "Discrepancies &amp; duplicates resolved", body: "Missing transactions, duplicate entries from bank feeds, and timing errors found and corrected, then the reconciliation-discrepancy account worked back to zero &mdash; so the difference is fixed at the source rather than buried in a catch-all." },
    { num: "03 &middot; Diagnose", title: "Reconciliation gaps diagnosed", body: "The specific cause of a persistent gap &mdash; a wrong beginning balance, uncleared items, transactions in the wrong period, or undeposited funds masking deposits &mdash; identified and fixed so the account actually ties out, not just looks closed." },
    { num: "04 &middot; Sales tax", title: "Sales-tax liability reconciled", body: "The sales-tax-liability account reconciled in the books against what was collected and remitted, so your New York position is accurate and defensible. We reconcile the account; your CPA files the return." },
    { num: "05 &middot; History", title: "Historical periods reconciled", body: "Back periods that drifted brought current as part of a cleanup or catch-up &mdash; getting the historical months tied out is often what finally resolves a long-standing reconciliation gap &mdash; then maintained monthly going forward." },
  ],

  // SCOPE SPLIT — what we do and what your CPA does (grid-2 buyer-cards carrying the two columns).
  // 2 frozen H3s verbatim (TechBrot / Your CPA). (H2: What we do — and what your CPA does. + 2 H3s)
  scope: [
    { title: "TechBrot", items: [
      "All bank, card, loan &amp; merchant accounts reconciled monthly",
      "Discrepancies, duplicates &amp; missing items resolved",
      "Reconciliation-discrepancy account worked back to zero",
      "Reconciliation gaps diagnosed &amp; fixed at the source",
      "Undeposited funds &amp; beginning-balance mismatches corrected",
      "Sales-tax liability reconciled in the books",
      "Historical periods reconciled if behind",
    ] },
    { title: "Your CPA", items: [
      "Files returns from the reconciled books",
      "Files the NY sales-tax and NYC UBT returns",
      "Tax planning &amp; representation",
      "We coordinate the handoff directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],
  scopeNote: "Sales tax is tracked and reconciled in the books so the return is accurate; your CPA (or you) files it through NYS Web File. TechBrot does not file tax returns or represent clients before tax authorities.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "A bank feed can import and auto-match transactions &mdash; it can&rsquo;t tell you that an auto-match is wrong, that a duplicate slipped through, or that a recurring discrepancy signals a real problem instead of a timing quirk. Catching that is judgment, and it&rsquo;s why reconciliation done by a person beats reconciliation left to the software.",
    "The same judgment is what keeps a reconciliation-discrepancy account from quietly absorbing errors month after month until the file needs a full <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a>. As automation handles the routine matching, the human layer &mdash; verifying, investigating, and tying each account back to reality &mdash; is where the value is. <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">Keep it reconciled monthly &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; baseline named-reviewer line reframed).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Account reconciliation, discrepancy diagnosis, undeposited-funds &amp; beginning-balance fixes &middot; sales-tax liability reconciled &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: QuickBooks Reconciliation questions.)
  faq: [
    { q: "What is bank reconciliation in QuickBooks?", a: "Reconciliation is the process of matching every transaction in QuickBooks against your actual bank, credit-card, and merchant statements to confirm the books reflect reality. When done correctly each month, it catches errors, missing transactions, duplicates, and fraud early &mdash; and it&rsquo;s the single most important routine for keeping a QuickBooks file trustworthy." },
    { q: "Why is my QuickBooks not reconciling?", a: "Common causes: transactions entered but never cleared, duplicate entries from bank feeds, a beginning balance that was wrong, transactions dated in the wrong period, or the undeposited-funds account masking deposits. We diagnose the specific cause &mdash; a persistent reconciliation gap almost always points to one of these &mdash; and fix it so the account ties out." },
    { q: "How much does QuickBooks reconciliation cost in New York?", a: "Standalone reconciliation is usually part of monthly bookkeeping ($400&ndash;$2,500+/mo). If you need a one-time reconciliation of accounts that have drifted, it&rsquo;s scoped as a fixed fee based on the number of accounts and months involved. We quote firmly against a written scope &mdash; to start, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "How often should accounts be reconciled?", a: "Monthly, at minimum &mdash; every bank, credit-card, and merchant account, against the statement, every period. Monthly reconciliation is what keeps small discrepancies from compounding into the kind of mess that needs a full cleanup. For high-volume New York businesses, it&rsquo;s non-negotiable." },
    { q: "What accounts should be reconciled besides the bank?", a: "All of them with a statement: business checking and savings, every credit card, merchant/payment processors (Stripe, Square, PayPal), loans and lines of credit, and sales-tax liability. Reconciling the merchant accounts is where many New York businesses &mdash; especially restaurants and ecommerce &mdash; find the biggest discrepancies." },
    { q: "Can unreconciled books cause tax problems?", a: "Yes. When accounts aren&rsquo;t reconciled, sales-tax filings drift from reality and returns can be wrong, which is a common trigger for a New York tax notice. Reconciled books are also what let you prove your real numbers if the state ever questions a return. Reconciliation is quietly one of the most important compliance routines." },
    { q: "Do you reconcile historical periods too?", a: "Yes &mdash; if accounts haven&rsquo;t been reconciled in months, we can reconcile the historical periods as part of a cleanup or catch-up, then maintain monthly reconciliation going forward. Getting the back periods tied out is often what resolves a long-standing reconciliation gap." },
    { q: "What happens after reconciliation?", a: "Reconciled accounts feed accurate monthly statements and an accurate sales-tax position. Most New York businesses keep reconciliation running as part of ongoing monthly bookkeeping, so the books stay trustworthy month after month rather than needing periodic rescue." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/quickbooks-reconciliation/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks reconciliation","description":"QuickBooks reconciliation for New York businesses — every bank, credit-card, loan, and merchant account tied to its statement each month, discrepancies and duplicates resolved, the reconciliation-discrepancy and undeposited-funds accounts cleared, and sales-tax liability reconciled, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-quickbooks-reconciliation.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-qbrecon-summary","#ny-svc-qbrecon-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Reconciliation"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks Reconciliation Service","serviceType":"QuickBooks account reconciliation","description":"QuickBooks reconciliation for New York businesses: every bank, credit-card, loan, line-of-credit, and merchant account reconciled against the actual statement each month, discrepancies and duplicates resolved, the reconciliation-discrepancy and undeposited-funds accounts cleared, beginning-balance mismatches corrected, and sales-tax liability reconciled. Delivered fixed-fee by a Certified QuickBooks ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"From $400; fixed-fee against a written scope. Usually part of monthly bookkeeping ($400–$2,500+/mo); standalone historical reconciliation scoped by accounts and months.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

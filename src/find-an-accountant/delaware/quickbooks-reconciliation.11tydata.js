/* /find-an-accountant/delaware/quickbooks-reconciliation/ — DE SERVICE child (QB spoke), t-money.
 * Mirrors the proven NY exemplar (new-york/quickbooks-reconciliation.*) with Delaware content per
 * DE-FACTS.md. JSON front-matter in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * DE LOCALIZATION: NY's sales-tax-liability reconciliation → Delaware GROSS-RECEIPTS liability
 * reconciliation (no sales tax in DE); unreconciled books are a common Division-of-Revenue notice
 * trigger; merchant accounts for ecommerce/coastal Sussex businesses. PRICING: DE-FACTS gives
 * monthly bookkeeping "from $400/mo" — standalone historical reconciliation written qualitatively.
 * provider = #organization; areaServed = State Delaware; reviewedBy #david-westgate on WebPage.
 * HONESTY (R5): firm-level review byline (no founder name); independent firm — does NOT file
 * Delaware returns; coordinates with the client's CPA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "<strong>Reconciliation</strong> is the process of matching every transaction in <a href=\"/quickbooks/online/\">QuickBooks</a> against your actual bank, credit-card, loan, and merchant statements &mdash; confirming the books reflect reality and catching errors, duplicates, and fraud early. It is the single most important routine for keeping a QuickBooks file trustworthy, and it has to happen on <strong>every</strong> account with a statement, <strong>every</strong> month.",
    "A persistent <strong>reconciliation gap</strong> almost always traces to one of a handful of causes: transactions entered but never cleared, duplicate entries from bank feeds, a beginning balance that was wrong, transactions dated in the wrong period, or the undeposited-funds account masking deposits. When QuickBooks can&rsquo;t tie out, the difference lands in the <strong>reconciliation-discrepancy account</strong> &mdash; we work that account back to zero rather than letting it absorb the error. We diagnose the specific cause and fix it so each account ties out.",
    "Reconciliation is usually part of <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> (from $400/mo); standalone historical reconciliation of accounts that have drifted is scoped separately as a fixed fee. Unreconciled books are a common <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">Delaware gross-receipts</a> notice trigger, so this quietly matters for compliance. We deliver reconciled books and coordinate with your CPA, who files &mdash; TechBrot is an independent Certified QuickBooks ProAdvisor firm, not affiliated with Intuit Inc., and does not file Delaware tax returns.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: QuickBooks Reconciliation in Delaware, in five questions.)
  aiSummary: [
    { q: "What is reconciliation?", a: "<strong>Matching every QuickBooks transaction against your actual statements</strong> &mdash; bank, credit card, loan, and merchant &mdash; to confirm the books reflect reality. Done monthly, it catches errors, duplicates, and fraud early." },
    { q: "Why won&rsquo;t my QuickBooks reconcile?", a: "Usually uncleared transactions, duplicate feed entries, a wrong beginning balance, or undeposited funds masking deposits &mdash; with the difference parked in the <strong>reconciliation-discrepancy account</strong>. We diagnose the specific cause and fix it." },
    { q: "What does it cost?", a: "Usually part of monthly bookkeeping (<strong>from $400/mo</strong>). One-time historical reconciliation is scoped as a fixed fee by accounts and months, against a written scope." },
    { q: "How often should I reconcile?", a: "<strong>Monthly, minimum</strong> &mdash; every bank, credit-card, loan, and merchant account, against the statement. It stops small discrepancies from compounding into a full cleanup." },
    { q: "Can unreconciled books cause tax problems?", a: "<strong>Yes</strong> &mdash; drifted filings and wrong gross-receipts returns are a common Delaware notice trigger; reconciled books are what let you prove your real numbers if the Division of Revenue questions a return." },
  ],

  // WHAT'S INVOLVED — five reconciliation workstreams. (H2: How we handle… + 5 H3s)
  handle: [
    { num: "01 &middot; Monthly", title: "All accounts reconciled monthly", body: "Every bank, credit-card, loan, line-of-credit, and merchant account &mdash; Stripe, Square, PayPal &mdash; matched to its statement, every period. Reconciling the merchant accounts is where many Delaware ecommerce and coastal Sussex businesses find the biggest discrepancies." },
    { num: "02 &middot; Resolve", title: "Discrepancies &amp; duplicates resolved", body: "Missing transactions, duplicate entries from bank feeds, and timing errors found and corrected, then the reconciliation-discrepancy account worked back to zero &mdash; so the difference is fixed at the source rather than buried in a catch-all." },
    { num: "03 &middot; Diagnose", title: "Reconciliation gaps diagnosed", body: "The specific cause of a persistent gap &mdash; a wrong beginning balance, uncleared items, transactions in the wrong period, or undeposited funds masking deposits &mdash; identified and fixed so the account actually ties out, not just looks closed." },
    { num: "04 &middot; Gross receipts", title: "Gross-receipts liability reconciled", body: "The gross-receipts liability reconciled in the books by activity against what was earned and remitted, so your Delaware position is accurate and defensible. We reconcile the account; your CPA or registered agent files the return." },
    { num: "05 &middot; History", title: "Historical periods reconciled", body: "Back periods that drifted brought current as part of a cleanup or catch-up &mdash; getting the historical months tied out is often what finally resolves a long-standing reconciliation gap &mdash; then maintained monthly going forward." },
  ],

  // SCOPE SPLIT — what we do / what your CPA does. (H2: What we do — and what your CPA does. + 2 H3s)
  scope: [
    { title: "TechBrot", items: [
      "All bank, card, loan &amp; merchant accounts reconciled monthly",
      "Discrepancies, duplicates &amp; missing items resolved",
      "Reconciliation-discrepancy account worked back to zero",
      "Reconciliation gaps diagnosed &amp; fixed at the source",
      "Undeposited funds &amp; beginning-balance mismatches corrected",
      "Gross-receipts liability reconciled in the books",
      "Historical periods reconciled if behind",
    ] },
    { title: "Your CPA", items: [
      "Files returns from the reconciled books",
      "Files the Delaware gross-receipts return and the annual franchise tax",
      "Tax planning &amp; representation",
      "We coordinate the handoff directly &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ] },
  ],
  scopeNote: "Gross receipts are tracked and reconciled in the books so the return is accurate; your CPA, registered agent, or you file it with the Delaware Division of Revenue. TechBrot does not file tax returns or represent clients before tax authorities.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A bank feed can import and auto-match transactions &mdash; it can&rsquo;t tell you that an auto-match is wrong, that a duplicate slipped through, or that a recurring discrepancy signals a real problem instead of a timing quirk. Catching that is judgment, and it&rsquo;s why reconciliation done by a person beats reconciliation left to the software.",
    "The same judgment is what keeps a reconciliation-discrepancy account from quietly absorbing errors month after month until the file needs a full <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a>. As automation handles the routine matching, the human layer &mdash; verifying, investigating, and tying each account back to reality &mdash; is where the value is. <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">Keep it reconciled monthly &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Account reconciliation, discrepancy diagnosis, undeposited-funds &amp; beginning-balance fixes &middot; gross-receipts liability reconciled &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 7 Q/A (DE-FACTS cap 5–7). visible faq__list = FAQPage (same array). 1 call-intent (phone).
  faq: [
    { q: "What is bank reconciliation in QuickBooks?", a: "Reconciliation is the process of matching every transaction in QuickBooks against your actual bank, credit-card, and merchant statements to confirm the books reflect reality. When done correctly each month, it catches errors, missing transactions, duplicates, and fraud early &mdash; and it&rsquo;s the single most important routine for keeping a QuickBooks file trustworthy." },
    { q: "Why is my QuickBooks not reconciling?", a: "Common causes: transactions entered but never cleared, duplicate entries from bank feeds, a beginning balance that was wrong, transactions dated in the wrong period, or the undeposited-funds account masking deposits. We diagnose the specific cause &mdash; a persistent reconciliation gap almost always points to one of these &mdash; and fix it so the account ties out." },
    { q: "How much does QuickBooks reconciliation cost in Delaware?", a: "Standalone reconciliation is usually part of monthly bookkeeping (from $400/mo). If you need a one-time reconciliation of accounts that have drifted, it&rsquo;s scoped as a fixed fee based on the number of accounts and months involved. We quote firmly against a written scope &mdash; to start, book a free call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "How often should accounts be reconciled?", a: "Monthly, at minimum &mdash; every bank, credit-card, and merchant account, against the statement, every period. Monthly reconciliation is what keeps small discrepancies from compounding into the kind of mess that needs a full cleanup. For high-volume Delaware businesses, it&rsquo;s non-negotiable." },
    { q: "What accounts should be reconciled besides the bank?", a: "All of them with a statement: business checking and savings, every credit card, merchant/payment processors (Stripe, Square, PayPal), loans and lines of credit, and gross-receipts liability. Reconciling the merchant accounts is where many Delaware businesses &mdash; especially ecommerce and coastal Sussex operations &mdash; find the biggest discrepancies." },
    { q: "Can unreconciled books cause tax problems?", a: "Yes. When accounts aren&rsquo;t reconciled, gross-receipts filings drift from reality and returns can be wrong, which is a common trigger for a Delaware Division of Revenue notice. Reconciled books are also what let you prove your real numbers if the state ever questions a return. Reconciliation is quietly one of the most important compliance routines." },
    { q: "Do you reconcile historical periods too?", a: "Yes &mdash; if accounts haven&rsquo;t been reconciled in months, we can reconcile the historical periods as part of a cleanup or catch-up, then maintain monthly reconciliation going forward. Getting the back periods tied out is often what resolves a long-standing reconciliation gap." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/quickbooks-reconciliation/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware QuickBooks reconciliation","description":"QuickBooks reconciliation for Delaware businesses — every bank, credit-card, loan, and merchant account tied to its statement each month, discrepancies and duplicates resolved, the reconciliation-discrepancy and undeposited-funds accounts cleared, and gross-receipts liability reconciled, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-quickbooks-reconciliation-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-recon-summary","#de-svc-recon-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Reconciliation"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware QuickBooks Reconciliation Service","serviceType":"QuickBooks account reconciliation","description":"QuickBooks reconciliation for Delaware businesses: every bank, credit-card, loan, line-of-credit, and merchant account reconciled against the actual statement each month, discrepancies and duplicates resolved, the reconciliation-discrepancy and undeposited-funds accounts cleared, beginning-balance mismatches corrected, and gross-receipts liability reconciled. Delivered fixed-fee by a Certified QuickBooks ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA, EA, and registered agent.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and midsize businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Usually part of monthly bookkeeping from $400/mo; standalone historical reconciliation scoped fixed-fee by accounts and months.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /accounting/reconciliation-services/ — LIVE baseline accounting service page
 * migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-recon.txt (40 headings,
 * 11 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/reconciliation-services/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure/schema; src/accounting/advisory/cash-flow-management.njk +
 * .11tydata.js for the t-mofu cobalt vocabulary + full schema set. t-mofu,
 * tierClass section--tier-guide, bodyClass page--mofu. CTA intent:
 * reconciliation (page baseline intent; canonical discovery-call lexicon).
 * Footer chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly
 * brief." NOT rendered here — base-layout chrome / dropped per protocol T2.
 * The 5 quick-answer questions render as NON-heading ai-summary__question
 * (the baseline captured them as <dt>, NOT <hN>) to keep the frozen heading
 * inventory exact. T3: the baseline contained no <table> elements; the
 * scope comparison is a 3-card grid in the baseline and is migrated as such
 * (h3 labels at frozen level), so no vs-table is forced. FAQ: 11 contract Q/A
 * verbatim (Q1-Q6 substantive, Q7-Q11 schema-only flat variants — append-
 * only, NO dedup). SCHEMA: full baseline node set — WebPage, BreadcrumbList,
 * Service, ItemList(deliverables), FAQPage(all 11), QAPage(from 5 ai-summary
 * questions). Honesty R5/R9: no fabricated stats/outcomes/reviews; David
 * Westgate in reviewedBy schema @id only; firm-level authorship; independent
 * firm, not affiliated with Intuit Inc. No <strong> in the dark hero
 * subheading. Cobalt vocabulary only — no invented classes. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Reconciliation, plainly." — definition prose (from old TL;DR body, enriched; no <strong> rule applies to dark hero only)
  definition: [
    "<strong>Account reconciliation</strong> is the monthly process of confirming that an account&rsquo;s balance in the books matches the balance reported by its source &mdash; the bank statement, the credit card statement, the loan amortization schedule, the payroll filing, the merchant processor report. When the two agree, the account is reconciled; when they don&rsquo;t, the difference is investigated and resolved. Done monthly, reconciliation is what proves the books are <strong>real</strong> rather than assumed; skipped, it&rsquo;s why files look fine and aren&rsquo;t.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> reconcile every <strong>bank, credit card, loan, payroll, merchant, and balance-sheet</strong> account as a structured chapter of <a href=\"/accounting/month-end-close/\">month-end close</a>, inside recurring <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Where past periods are unreconciled, we resolve them through <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a> or <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> first, then transition you into a clean monthly cadence. Reconciliation is bookkeeping verification, not external audit or tax filing &mdash; those stay with your CPA. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Reconciliation, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "What is account reconciliation?", a: "Confirming an account&rsquo;s <strong>book balance matches its source</strong> &mdash; bank or credit card statement, loan schedule, payroll filing, processor report. When they agree, reconciled; when they don&rsquo;t, the difference is investigated. It&rsquo;s the step that proves the books are real." },
    { q: "Why is bank reconciliation important?", a: "It&rsquo;s the single most important verification in bookkeeping. Without it, <strong>missing, duplicate, or miscategorized transactions persist undetected</strong>, distorting every downstream report &mdash; financial statements, tax returns, lender packages. Reconciled is the minimum standard for treating books as accurate." },
    { q: "What accounts should be reconciled?", a: "Every <strong>bank, credit card, loan, line of credit, and merchant processor</strong>, plus balance-sheet accounts: <strong>payroll liabilities to filings, deposits held, prepaids, intercompany</strong> &mdash; any account whose book balance should match a verifiable external figure." },
    { q: "How often?", a: "<strong>Monthly</strong>, as part of month-end close, on a published calendar. Year-end-only means errors compound for twelve months &mdash; far more expensive to fix than catching them in the month they happen." },
    { q: "What if I&rsquo;m months behind?", a: "<a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">Catch-up</a> if transactions are recorded but never reconciled; <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> if the file itself is broken. Fixed-fee project work; then transition into recurring monthly close." },
  ],
  // "Every account that should agree with something external." — 6 deliverables (stack-8 + num). These are the ItemList deliverables in schema.
  deliverables: [
    { num: "01", name: "Bank accounts", body: "Every checking and savings account reconciled to bank statements monthly. Every transaction, every deposit in transit, every outstanding check accounted for &mdash; and the reconciliation-discrepancy account cleared to zero, not left as a plug. The single most-skipped step in DIY bookkeeping." },
    { num: "02", name: "Credit cards", body: "Every credit card account reconciled to monthly statements. Charges, payments, refunds, and statement credits all confirmed against source &mdash; not just imported from the feed and assumed correct." },
    { num: "03", name: "Loans &amp; lines of credit", body: "Loan balances reconciled to lender statements and amortization schedules, with principal, interest, and escrow split correctly. The reason most P&amp;Ls overstate expense and most balance sheets carry the wrong loan balance." },
    { num: "04", name: "Payroll liabilities", body: "Payroll tax liability accounts reconciled to <a href=\"/accounting/payroll-management/\">filed payroll returns</a> and remittances. Where payroll runs separately from bookkeeping, this is exactly where the discrepancy hides." },
    { num: "05", name: "Merchant &amp; processor accounts", body: "Stripe, Square, PayPal, Shopify Payments, Toast, and similar &mdash; deposit summaries reconciled to QuickBooks, separating gross revenue, fees, refunds, and tax collected from the netted deposit, and clearing undeposited funds so nothing double-counts." },
    { num: "06", name: "Balance-sheet accounts", body: "Deposits held, prepaid expenses on amortization, intercompany balances, accrued liabilities, and any beginning-balance mismatch run to ground &mdash; every balance-sheet account that should match a source, confirmed monthly. The work that separates real books from approximately-right books." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signals (buyer-card)
  signals: [
    { opener: "Your accounts haven&rsquo;t been reconciled in months.", body: "If the last time anything was reconciled was last year, everything sitting on top of those books &mdash; statements, taxes, decisions &mdash; is provisional. Catch-up or cleanup gets you back to a known-good baseline." },
    { opener: "Your bank balance and book balance disagree.", body: "If you can&rsquo;t explain in 60 seconds why the numbers differ, the books aren&rsquo;t reconciled. After timing items, they should always agree &mdash; and a stuck difference usually means a duplicate, a missing entry, or a beginning-balance error." },
    { opener: "Bank feeds are accepted without review.", body: "Auto-matched bank feeds aren&rsquo;t reconciliation &mdash; they&rsquo;re imports. Without statement-to-book confirmation, duplicates and missing transactions stay invisible until an account is actually reconciled to its statement." },
    { opener: "Credit cards are tracked through transfers only.", body: "A credit card that&rsquo;s only entered when it&rsquo;s paid off isn&rsquo;t reconciled &mdash; the expense detail and the running liability are both wrong all month, and the year-end balance is anyone&rsquo;s guess." },
    { opener: "Your CPA is doing reconciliation at year-end.", body: "If your tax professional reconciles your books in January, you&rsquo;re paying CPA rates for bookkeeping work. A real monthly close eliminates that handoff cost and the surprises that come with it." },
    { opener: "A lender, board, or buyer needs to verify the numbers.", body: "External parties test reconciliation as the first credibility check. Unreconciled accounts fail that test fast &mdash; even when the underlying numbers are close to right." },
  ],
  // "How reconciliation actually happens." — 4-phase monthly rhythm (process-diagram). Old cadence days kept as the phase number label.
  process: [
    { num: "Days 1–3", name: "Statements &amp; source documents in", body: "Bank and credit card statements post, loan statements arrive, payroll filings land, processor reports become available &mdash; everything reconciliation needs is gathered in one window after month-end." },
    { num: "Days 3–6", name: "Account-by-account reconciliation", body: "Each account reconciled to its source. Differences investigated, missing transactions added, duplicates removed, categorizations corrected, and any reconciliation-discrepancy plug cleared rather than carried." },
    { num: "Days 5–7", name: "Balance-sheet &amp; intercompany", body: "Payroll liabilities to filings, deposits to source, prepaids to schedule, intercompany to counterparty. The work that catches what bank reconciliation alone misses." },
    { num: "Days 7–10", name: "Review &amp; lock", body: "Balance-sheet review against expectations, period locked, <a href=\"/accounting/financial-statements/\">financial statements</a> produced from numbers that are now real. The reconciliation chapter of close is done." },
  ],
  // "Reconciliation vs audit, vs feeds, vs hope." — honest-scope, 3 cards (stack-8 + h3). H3 labels "Reconciliation is / isn't / We coordinate with" verbatim at frozen level. Baseline rendered this as a card grid, NOT a table, so no vs-table here.
  scope: [
    { label: "Reconciliation is", body: "Monthly confirmation that book balances match external sources &mdash; statements, schedules, filings, processor reports. Investigation and resolution of differences, with the reconciliation-discrepancy account cleared to zero rather than left as a plug. Documentation that the account is reconciled. The verification step inside <a href=\"/accounting/month-end-close/\">month-end close</a>." },
    { label: "Reconciliation isn&rsquo;t", body: "<strong>Audit, review, or compilation</strong> &mdash; those are licensed CPA engagements that opine on financial statements. Bank-feed matching &mdash; that&rsquo;s an import, not a reconciliation. A &ldquo;reconciliation report&rdquo; pulled from QuickBooks without source verification. And it isn&rsquo;t tax filing." },
    { label: "We coordinate with", body: "Your CPA or EA for any formal engagement built on the reconciled books. Your bank, lenders, and payroll provider for source documentation. Your prior bookkeeper for handoff when transitioning files. Licensed work stays with licensed professionals." },
  ],
  // "Related services." — 4 related (stack-8 linked)
  related: [
    { title: "Month-end close", href: "/accounting/month-end-close/", body: "The discipline reconciliation lives inside of, with the full close calendar." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "The recurring engagement reconciliation is performed inside of." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/", body: "Where unreconciled, broken files get rebuilt before recurring reconciliation can begin." },
    { title: "Financial statements", href: "/accounting/financial-statements/", body: "What reconciled accounts produce every month: a P&amp;L, balance sheet, and cash flow you can trust." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row)
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Bank, credit card, loan, payroll, merchant, balance-sheet reconciliation &mdash; not audit, review, or compilation engagements" },
    { value: "Fixed-fee", label: "Written scope before work &middot; delivered in your own QuickBooks file on a published close calendar" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 11 contract Q/A, verbatim questions, answers preserved (append-only enrichment). Q7-Q11 are schema-only flat variants kept per append-only contract. NO dedup.
  faq: [
    { q: "What is account reconciliation?", a: "Account reconciliation is the monthly process of confirming that the balance of an account in the books matches the balance reported by the corresponding source &mdash; a bank statement, a credit card statement, a loan amortization schedule, a payroll filing, a merchant processor report. When the two agree, the account is reconciled; when they don&rsquo;t, the difference is investigated and resolved. Reconciliation is what proves the books are real rather than estimated." },
    { q: "Why is bank reconciliation important?", a: "Because bank reconciliation is the single most important verification step in bookkeeping. Without it, missing transactions, duplicate entries, miscategorized expenses, and outright errors persist undetected. Unreconciled books overstate or understate cash, distort revenue and expense, and make every downstream report &mdash; financial statements, tax returns, lender packages &mdash; unreliable. A reconciled file is the minimum standard for treating the books as accurate." },
    { q: "What accounts should be reconciled?", a: "At minimum: every bank account, every credit card account, every loan, every line of credit, and every merchant processor or payment platform that deposits funds. Beyond that, professional close also reconciles balance-sheet accounts: payroll liabilities to filings, deposits held to source records, prepaid expenses to amortization schedules, intercompany accounts, and any account where the book balance is supposed to match a verifiable external figure. Skipping balance-sheet reconciliation is the most common reason books look fine but aren&rsquo;t." },
    { q: "How often should reconciliation happen?", a: "Monthly &mdash; full reconciliation of every bank, credit card, and balance-sheet account, performed as part of the month-end close, on a published calendar. Reconciling only at year-end means errors compound for twelve months before they&rsquo;re caught, and fixing twelve months of issues at once costs far more than catching them in the month they happen." },
    { q: "What if my accounts haven&rsquo;t been reconciled in months?", a: "That&rsquo;s a catch-up or cleanup engagement. If transactions are recorded but never reconciled, <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up bookkeeping</a> reconciles each prior month back to a known-good baseline. If transactions are missing, miscategorized, or the chart of accounts is broken, <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup bookkeeping</a> rebuilds the file first and then reconciles. Both are quoted as fixed-fee project work against scope, and once complete you transition into recurring monthly reconciliation on a published close calendar." },
    { q: "What does reconciliation cost?", a: "Monthly reconciliation is included in TechBrot&rsquo;s monthly bookkeeping engagements, which range from $400 to $2,500+ per month with complexity adjustments based on number of accounts, transaction volume, and reporting depth. Historical reconciliation work &mdash; multiple months or years behind &mdash; is quoted as a fixed-fee catch-up or cleanup project against scope. No hourly billing. To scope how many accounts and periods are involved, call a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/reconciliation-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-recon-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Reconciliation Services","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Account Reconciliation Services","serviceType":"Account reconciliation services","description":"Monthly account reconciliation for U.S. businesses — bank, credit card, loan, payroll liability, merchant processor, intercompany, and balance-sheet account reconciliations performed in QuickBooks by Certified ProAdvisors. Included within monthly bookkeeping engagements; stand-alone historical reconciliation projects quoted as fixed-fee work. Does not include audit, review, or compilation, which are licensed CPA engagements.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Account reconciliation deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"Accounts reconciled every month","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Reconciliation — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};

/* /accounting/month-end-close/ — LIVE baseline accounting service page
 * migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-monthend.txt (36 headings,
 * 11 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/month-end-close/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure/schema; src/accounting/advisory/cash-flow-management.njk +
 * .11tydata.js for the t-mofu cobalt vocabulary, full schema set, and the
 * ai-summary <dt> -> ai-summary__question (NON-heading) precedent. t-mofu,
 * tierClass section--tier-guide, bodyClass page--mofu. CTA intent:
 * month-end-close (canonical lexicon). Footer chrome H2s
 * (Accounting/QuickBooks/Company/Network) + "The monthly brief." NOT rendered
 * here — base-layout chrome / dropped per protocol T2. The 5 quick-answer
 * questions render as NON-heading ai-summary__question (the baseline captured
 * them as <dt>, NOT <hN>) to keep the frozen heading inventory exact. FAQ: 11
 * contract Q/A verbatim (Q1-Q6 substantive, Q7-Q11 schema-only flat variants —
 * append-only, NO dedup). Honesty R5/R9: no fabricated stats/outcomes/reviews;
 * David Westgate in reviewedBy schema @id only; firm-level authorship;
 * independent firm, not affiliated with Intuit Inc. No <strong> in the dark
 * hero subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Month-end close, plainly." — definition prose (from old TL;DR body, enriched; no <strong> rule applies to dark hero only)
  definition: [
    "The <strong>month-end close</strong> is the recurring discipline of finalizing the books for a completed month: every <strong>bank, credit card, and balance-sheet account reconciled</strong>, <strong>accruals and prepaids</strong> recorded, <strong>depreciation and amortization</strong> posted, payroll liabilities reconciled, and the period&rsquo;s <a href=\"/accounting/financial-statements/\">financial statements</a> delivered. A clean close means the numbers for that month are <strong>locked, verifiable, and won&rsquo;t change</strong> &mdash; the foundation every <a href=\"/accounting/advisory/kpi-reporting/?intent=advisory\">KPI report</a>, performance review, and tax return is built on.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> run the close as a structured chapter inside <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, on a <strong>published close calendar</strong> so the cadence is predictable for your team and CPA. Internal management and CPA-ready &mdash; not audit, review, or compilation, which are licensed CPA engagements. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Month-end close, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>)
  aiSummary: [
    { q: "What is the month-end close?", a: "The recurring process of finalizing the books for a completed month &mdash; <strong>reconciling every account, recording accruals and prepaids, posting depreciation</strong>, and producing the period&rsquo;s financial statements. A clean close locks the numbers so they don&rsquo;t change." },
    { q: "What happens during a close?", a: "Bank and credit card reconciliations; balance-sheet account reconciliations (loans, payroll liabilities, deposits, intercompany); <strong>accruals and prepaids</strong>; <strong>depreciation and amortization</strong>; adjusting journal entries; balance-sheet review; and statement delivery." },
    { q: "How long should it take?", a: "<strong>5&ndash;10 business days</strong> after month-end for a typical small or mid-sized business &mdash; enough for statements to post and source documents to land. Larger or more complex closes run longer; the goal is a <strong>consistent, predictable cadence</strong>, not the fastest possible close." },
    { q: "Close vs bookkeeping?", a: "Bookkeeping is the <strong>ongoing</strong> daily and weekly work. The close is the <strong>discrete event</strong> at month-end that finalizes the period. They&rsquo;re part of the same engagement &mdash; the close is a structured chapter within monthly bookkeeping." },
    { q: "What does it cost?", a: "Included in <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> ($400&ndash;$2,500+/mo with complexity adjustments). Closes for past periods never properly performed are handled inside a <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up\">catch-up</a> or <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">cleanup</a> engagement." },
  ],
  // "What a real close actually covers." — 6 deliverables (stack-8 + num). h3 headings VERBATIM from contract.
  included: [
    { num: "01", name: "Bank &amp; credit card reconciliation", body: "Every bank and credit card account reconciled to statements, every month. The single step most often skipped &mdash; and the one without which nothing else holds." },
    { num: "02", name: "Balance-sheet reconciliations", body: "Loans to lender statements; payroll liabilities to filings; deposits held, prepaid balances, and intercompany accounts to source. The balance sheet is what proves the books are real." },
    { num: "03", name: "Accruals &amp; prepaids", body: "Expenses incurred but not yet billed accrued in the right period; prepaid expenses amortized over their service life. The work that aligns the P&amp;L with what the business actually consumed." },
    { num: "04", name: "Depreciation &amp; amortization", body: "Fixed-asset depreciation and intangible amortization posted monthly per schedule, not just at year-end &mdash; so margin and basis are correct every period." },
    { num: "05", name: "Adjusting journal entries &amp; review", body: "Any required adjustments posted with documentation, plus a balance-sheet review against expectations before the books are locked &mdash; catching errors before they ship." },
    { num: "06", name: "Statement delivery on calendar", body: "All three <a href=\"/accounting/financial-statements/\">financial statements</a> delivered on the published close calendar, with plain-language commentary, ready for your management use and your CPA." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signals (buyer-card). h3 openers VERBATIM from contract.
  signals: [
    { opener: "You don&rsquo;t actually close.", body: "Books left open all year mean every report is provisional and every tax return is a scramble. A real monthly close ends the perpetual draft." },
    { opener: "Last month&rsquo;s numbers keep changing.", body: "If your January P&amp;L looks different in March, the close isn&rsquo;t closing. Locked periods are the whole point." },
    { opener: "Reconciliations are months behind.", body: "Unreconciled balance sheets mean the books don&rsquo;t agree with reality. Every other report sitting on top is built on sand." },
    { opener: "Year-end is a multi-week scramble.", body: "A clean monthly close turns year-end into a documentation exercise, not a rebuild. If December takes weeks, the monthly cadence isn&rsquo;t doing its job." },
    { opener: "Your CPA spends January untangling December.", body: "If your tax professional is doing reconciliation work in tax season, you&rsquo;re paying CPA rates for bookkeeping. A real close eliminates that handoff cost." },
    { opener: "No one can answer &ldquo;when do statements arrive?&rdquo;", body: "If statement delivery is unpredictable, accountability is broken. A published close calendar gives everyone the same expectation, every month." },
  ],
  // "A predictable cadence every month." — 4-phase process (process-diagram). h3 headings VERBATIM from contract.
  process: [
    { num: "Days 1&ndash;3", name: "Source documents in", body: "Bank and credit card statements post; receipts, bills, and any payroll filings land; source documents from your team are due per the calendar." },
    { num: "Days 3&ndash;6", name: "Reconciliations", body: "All bank, credit card, and balance-sheet accounts reconciled to source. Variances investigated and resolved before moving on." },
    { num: "Days 6&ndash;8", name: "Accruals, depreciation &amp; entries", body: "Accruals and prepaids recorded; depreciation and amortization posted; any adjusting journal entries documented and entered." },
    { num: "Days 8&ndash;10", name: "Review &amp; statement delivery", body: "Balance-sheet review against expectations, statements produced with plain-language commentary, and the period locked. CPA-ready package delivered." },
  ],
  // Close-calendar table (vs-scroll + vs-table). T3 no-collapse: the day-by-day cadence rendered as a real table, not prose.
  cadenceTable: [
    { window: "Days 1&ndash;3 after month-end", work: "Source documents in", detail: "Bank and credit card statements post; receipts, bills, and payroll filings land; team source documents due per the calendar." },
    { window: "Days 3&ndash;6", work: "Reconciliations", detail: "Every bank, credit card, loan, and balance-sheet account reconciled to source; variances investigated and cleared before moving on." },
    { window: "Days 6&ndash;8", work: "Accruals, depreciation &amp; entries", detail: "Accruals and prepaids recorded, depreciation and amortization posted, and adjusting journal entries documented and entered." },
    { window: "Days 8&ndash;10", work: "Review &amp; delivery", detail: "Balance-sheet review against expectations, statements produced with plain-language commentary, the period locked, and the CPA-ready package delivered." },
  ],
  // "Related services." — 4 related (stack-8 linked). h3 titles VERBATIM from contract.
  related: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "The recurring engagement the close lives inside of &mdash; real reconciliation and a monthly close you can trust." },
    { title: "Financial statements", href: "/accounting/financial-statements/", body: "The three statements the close produces each period &mdash; income statement, balance sheet, and cash flow." },
    { title: "Catch-up bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up", body: "Where past periods that were never closed get rebuilt before recurring close begins." },
    { title: "Performance review", href: "/accounting/advisory/business-performance-review/?intent=advisory", body: "What the closed numbers get turned into each month &mdash; the read on what the period actually means." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row). From old expert-review credentials.
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Bank/balance-sheet reconciliations, accruals, depreciation, journal entries, statement delivery on calendar &mdash; not audit, review, or compilation" },
    { value: "Fixed-fee", label: "Written scope before work &middot; delivered in your own QuickBooks file on a published close calendar" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // FAQ — 11 contract Q/A, verbatim questions, answers preserved (append-only enrichment). Q7-Q11 are schema-only flat variants kept per append-only contract. NO dedup.
  faq: [
    { q: "What is the month-end close?", a: "The month-end close is the recurring process of finalizing the books for a completed month: reconciling every bank, credit card, and balance-sheet account, recording accruals and prepaids, posting depreciation and amortization, reconciling payroll liabilities, and producing the period&rsquo;s financial statements. A clean close means the numbers for that month are locked, verifiable, and won&rsquo;t change &mdash; the foundation every report, forecast, and tax return is built on." },
    { q: "What happens during a month-end close?", a: "Standard month-end work includes: reconciling all bank and credit card accounts to statements; reconciling balance-sheet accounts (loans, payroll liabilities, deposits held, intercompany) to source documentation; recording accruals for expenses incurred but not yet billed; amortizing prepaid expenses; posting depreciation and amortization; recording any required adjusting journal entries; running a balance-sheet review; and producing the period&rsquo;s income statement, balance sheet, and cash flow statement. Many businesses follow a published close calendar so each step happens on the same day each month." },
    { q: "How long should month-end close take?", a: "For a small or mid-sized business with reliable bookkeeping and good source documentation, a typical close runs 5 to 10 business days after month-end &mdash; enough time for bank statements to post, source documents to land, and reconciliations to complete. Larger or more complex businesses may run longer; businesses behind on books often take significantly longer until <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up\">catch-up</a> work is finished. The goal is a consistent, predictable cadence &mdash; not the fastest possible close." },
    { q: "What's the difference between month-end close and bookkeeping?", a: "Bookkeeping is the ongoing daily and weekly work &mdash; recording transactions, categorizing expenses, capturing receipts. Month-end close is the discrete event that finalizes the period: reconciliations, accruals, journal entries, and statement delivery. Bookkeeping happens continuously; the close happens once a month. They are part of the same engagement at TechBrot &mdash; the close is a structured chapter within <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>." },
    { q: "Do I need a close calendar?", a: "Yes &mdash; a published close calendar is what turns the close from a scramble into a discipline. It defines when source documents are due from your team, when reconciliations are performed, when statements are reviewed, and when they are delivered to you and your CPA. The calendar makes accountability explicit and makes the cadence predictable for everyone involved." },
    { q: "What does month-end close cost?", a: "Month-end close is included in TechBrot&rsquo;s <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a> engagements, which range from $400 to $2,500+ per month with complexity adjustments based on transaction volume, accounts, locations, and reporting depth. Closes for past periods that were never properly performed are handled inside a catch-up or cleanup engagement, quoted as fixed-fee project work." },
    { q: "What is the month-end close?", a: "The recurring process of finalizing the books for a completed month &mdash; reconciling every account, recording accruals and prepaids, posting depreciation, and producing the period&rsquo;s financial statements. A clean close locks the numbers so they don&rsquo;t change." },
    { q: "What happens during a close?", a: "Bank and credit card reconciliations; balance-sheet account reconciliations (loans, payroll liabilities, deposits, intercompany); accruals and prepaids; depreciation and amortization; adjusting journal entries; balance-sheet review; and statement delivery." },
    { q: "How long should it take?", a: "5&ndash;10 business days after month-end for a typical small or mid-sized business &mdash; enough for statements to post and source documents to land. Larger or more complex closes run longer; the goal is a consistent, predictable cadence, not the fastest possible close." },
    { q: "Close vs bookkeeping?", a: "Bookkeeping is the ongoing daily and weekly work. The close is the discrete event at month-end that finalizes the period. They&rsquo;re part of the same engagement &mdash; the close is a structured chapter within monthly bookkeeping." },
    { q: "What does it cost?", a: "Included in monthly bookkeeping ($400&ndash;$2,500+/mo with complexity adjustments). Closes for past periods never properly performed are handled inside a catch-up or cleanup engagement." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/month-end-close/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-monthend-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Month-End Close","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Month-End Close","serviceType":"Month-end close accounting services","description":"Recurring monthly close including bank, credit card, loan, and balance-sheet reconciliations, accruals and prepaid amortization, depreciation and amortization entries, payroll liability reconciliation, intercompany eliminations where applicable, adjusting journal entries, balance-sheet review, and CPA-ready financial statement delivery, performed on a published close calendar by Certified ProAdvisors for U.S. small and mid-sized businesses. Internal management and CPA-ready statements; coordinated with the client's CPA or EA — not an external audit, review, or compilation engagement.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Month-end close deliverables","itemListElement":data.included.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What a real close covers","itemListElement":data.included.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Month-end close — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};

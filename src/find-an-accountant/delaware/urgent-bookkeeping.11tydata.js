/* /find-an-accountant/delaware/urgent-bookkeeping/ — Delaware HONEST-TRIAGE (Sheet 7).
 * Data-file shape mirrors the NY same-named exemplar
 * (find-an-accountant/new-york/urgent-bookkeeping.11tydata.js): JSON front-matter lives in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting
 * the schema @graph (WebPage, BreadcrumbList, Service with 1 Offer, FAQPage). The FAQPage
 * mainEntity is generated from the SAME `faq` array the visible faq__list renders from.
 *
 * SHEET-7 HONEST-TRIAGE (ABSOLUTE):
 *  - DISCLOSURE / HONEST FRAMING ABOVE THE FOLD lives in the hero subheading + the inBrief
 *    (.njk front-matter): independent ProAdvisor/bookkeeping firm; "urgent" = a scoped
 *    fast-turnaround catch-up/cleanup sprint; NOT emergency tax filing, NOT tax
 *    representation, NOT a registered agent, NOT a guarantee of any deadline outcome; not
 *    affiliated with Intuit; does not file DE taxes or the franchise tax/annual report.
 *  - NO fabricated SLA. Speed is framed as scope/record-dependent — never a fixed promise.
 *  - NEVER imply we hit a tax/legal deadline on the client's behalf or file urgently with an
 *    agency. The scope-split keeps filing/representation with the CPA/EA.
 *  - ONLY DE-FACTS figures (cleanup/catch-up from $1,200). No invented price range.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, outcomes, or SLAs. The only review
 * proof is the 2 real Clutch reviews (carried on the DE pillar, NOT duplicated here). No
 * founder/personal name in visible content (firm-level review byline; David Westgate appears
 * only as reviewedBy @id in schema). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section carrying the urgent-bookkeeping TL;DR prose. Scope-dependent
  // language; no fixed turnaround promise. (H2: What Delaware urgent bookkeeping actually is.)
  summary: [
    "<strong>Urgent bookkeeping</strong> is a scoped, fast-turnaround engagement to bring books current against a hard deadline &mdash; a lender or SBA package, a tax-prep handoff to your CPA, investor or buyer due diligence, a board or partner meeting, a <a href=\"/find-an-accountant/delaware/state-tax-notice-help/\">Delaware Division of Revenue notice</a> with a response window, or a franchise-tax/annual-report delinquency from the Division of Corporations. It overlaps heavily with <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup bookkeeping</a>; what makes it &lsquo;urgent&rsquo; is the clock, not the work.",
    "A Certified ProAdvisor responds quickly &mdash; same day where possible &mdash; to triage how far behind the books are and what the deadline truly requires, then runs a compressed catch-up sprint to reconcile accounts, categorize transactions, and produce <strong>CPA-ready financials</strong>. How fast that goes depends on scope and how complete your records are: we give an honest read on what&rsquo;s achievable in the time you have, and if it&rsquo;s tight, what to prioritize first. For Delaware businesses this includes reconciling <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross-receipts-tax</a> liability so it ties to what&rsquo;s been filed, and confirming the franchise-tax reserve.",
    "Urgent bookkeeping is a fast catch-up &mdash; <strong>not</strong> emergency tax filing, not tax representation, and not a guarantee of any specific deadline outcome. We do the books and coordinate the handoff; your CPA or EA files and handles any representation, and your registered agent or CPA files the franchise tax and annual report. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware returns.",
  ],

  // SCENARIOS — the REAL DE deadline triggers (grid-3 buyer-cards). Real specificity, not a
  // mad-lib. No fabricated outcomes/stats.
  scenarios: [
    { title: "Lender or SBA package due", body: "A bank or SBA lender wants current, reconciled financials &mdash; a P&amp;L, balance sheet, and clean bank reconciliations &mdash; before they&rsquo;ll move on a loan or line of credit. Books that are months behind have to be current and credible before the package goes in." },
    { title: "CPA tax-prep crunch", body: "Your CPA needs reconciled books to prepare the return, and the filing date is close. We bring the periods current and hand off clean financials so your CPA can file on time &mdash; we prepare the books; your CPA files." },
    { title: "Board or partner meeting", body: "A board, investor update, or partner meeting needs financials that hold up to scrutiny. Numbers that don&rsquo;t tie out, or a month that won&rsquo;t close, become a scramble &mdash; the sprint gets the periods that matter reconciled and presentable." },
    { title: "M&amp;A or investor due diligence", body: "A buyer, acquirer, or investor opens a diligence window and asks for historical financials that reconcile to the bank &mdash; common for Delaware holding companies and out-of-state-owned entities. Gaps and uncategorized transactions stall a deal; a compressed reconstruction closes them on the diligence clock." },
    { title: "Delaware Division of Revenue notice", body: "A <a href=\"/find-an-accountant/delaware/state-tax-notice-help/\">Delaware Division of Revenue notice</a> arrives with a response window, and answering it needs current, reconciled books and a gross-receipts (or withholding) tie-out. We prepare the books and the tie-out; your CPA or EA drafts the response and handles any representation." },
    { title: "Franchise-tax / annual-report delinquency", body: "The Division of Corporations flags a corporation&rsquo;s overdue annual report or franchise tax (corporations due March 1; LLCs/LPs the $300 tax by June 1), with a $200 penalty plus 1.5%/month interest accruing. We reconcile the books and confirm the reserve and lower method; your registered agent or CPA files." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As. Scope-dependent language; only DE-FACTS pricing.
  aiSummary: [
    { q: "What is urgent bookkeeping?", a: "<strong>A scoped, fast-turnaround engagement to bring books current against a hard deadline</strong> &mdash; a lender or SBA package, a CPA tax-prep handoff, due diligence, a board meeting, a Delaware Division of Revenue notice, or a franchise-tax/annual-report delinquency. Same work as a cleanup; what makes it urgent is deadline-first scoping and a compressed timeline." },
    { q: "How fast can you start?", a: "Quickly &mdash; same day where possible. A Certified ProAdvisor reviews your situation, tells you honestly what&rsquo;s achievable in the time you have, and begins once scope and access are agreed. There&rsquo;s no multi-week onboarding, but how fast the work itself goes depends on scope and how complete your records are." },
    { q: "How much does it cost?", a: "Priced by scope and timeline against a written fixed fee, quoted before work begins. Catch-up and cleanup start at <strong>$1,200</strong>; a highly expedited timeline may carry a rush component because it requires dedicated focus. Final pricing depends on how far behind the books are and how compressed the deadline is." },
    { q: "How is it different from cleanup?", a: "<strong>Same work, different driver.</strong> <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">Cleanup bookkeeping</a> reconstructs messy or behind books on a normal timeline; urgent bookkeeping does it against a hard date &mdash; same-day response, deadline-first prioritization of exactly what the deadline requires. Not against a clock? A standard cleanup is better value." },
    { q: "Will the result satisfy a lender or my CPA?", a: "That&rsquo;s the goal. The deliverable is built to be CPA-ready and lender-ready &mdash; reconciled to source documents, with Delaware gross-receipts tax tied out, documented for handoff. We deliver the books and coordinate the handoff; your CPA or EA files. We don&rsquo;t file Delaware taxes or represent you before any agency." },
  ],

  // PROCESS — the scoped sprint (grid-3 buyer-cards). 5 H3s. Scope-dependent, no fixed promise.
  process: [
    { num: "01", title: "Same-day triage call", body: "A Certified ProAdvisor gets on a call &mdash; same day where possible &mdash; to understand the deadline, how far behind the books are, and exactly what the lender, CPA, or agency actually requires." },
    { num: "02", title: "Honest assessment of what&rsquo;s achievable", body: "We tell you straight whether the full scope fits the timeline &mdash; and if it doesn&rsquo;t, what to prioritize first so the deadline is met where it matters most. No false promises and no guaranteed date we can&rsquo;t honestly stand behind." },
    { num: "03", title: "Compressed-timeline reconstruction", body: "Accounts reconciled, transactions categorized, and the periods that matter brought current &mdash; worked on a compressed schedule with a daily cadence, focused on the deadline&rsquo;s real requirements. How fast depends on scope and record availability." },
    { num: "04", title: "Delaware gross-receipts &amp; franchise-tax tie-out", body: "For Delaware businesses, gross-receipts-tax liability reconciled by activity and the franchise-tax reserve confirmed &mdash; important if the deadline is a Division of Revenue notice or a delinquency. We prepare the tie-out; your CPA, EA, or registered agent files and responds." },
    { num: "05", title: "CPA-ready handoff", body: "Financials delivered reconciled and documented, ready to hand directly to your lender, investor, or CPA &mdash; with an optional move into <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> so the books never fall behind again." },
  ],

  // SCOPE SPLIT — honest do / won't-pretend (grid-2 buyer-cards). 2 H3s.
  scopeSplit: [
    { heading: "TechBrot", list: [
      "Same-day response &amp; deadline triage (where possible)",
      "Compressed-timeline catch-up &amp; cleanup",
      "Reconciliation &amp; transaction categorization",
      "Gross-receipts tie-out by activity &amp; franchise-tax reserve confirmed",
      "CPA-ready, lender-ready financials for your deadline",
      "Direct coordination with your CPA on the handoff",
    ]},
    { heading: "Your CPA / out of scope", list: [
      "Filing the return, the franchise tax/annual report, or any Delaware tax form",
      "Responding to or representing you before tax authorities",
      "Acting as your Delaware registered agent",
      "Promising a specific date or outcome we can&rsquo;t honestly hit",
      "Emergency tax filing &mdash; we are a bookkeeping firm, not a tax-filing or representation service &middot; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs accountant &rarr;</a>",
    ]},
  ],

  // WHAT MAKES IT FAST — focused scope + daily cadence + DE gross-receipts-ready (checks-list).
  // Honest levers, with the limit on each stated (R5: no SLA).
  fast: [
    "<strong>Focused scope:</strong> we work only what the deadline actually requires first &mdash; the periods, accounts, and reconciliations the lender, CPA, or agency needs &mdash; rather than reconstructing everything at once.",
    "<strong>Daily cadence:</strong> an urgent engagement runs on a daily working rhythm with a named ProAdvisor, so progress compounds instead of stalling between weekly check-ins.",
    "<strong>One ProAdvisor on the file:</strong> the same Certified ProAdvisor triages, reconstructs, and hands off &mdash; no re-explaining the situation to a new person mid-sprint.",
    "<strong>Delaware-ready:</strong> gross-receipts-tax liability is tied out by activity and the franchise-tax reserve confirmed as part of the sprint, so a notice or delinquency isn&rsquo;t a separate scramble later.",
    "<strong>The honest limit:</strong> speed depends on how complete your records are. Missing statements, inaccessible accounts, or years of backlog slow any sprint &mdash; which is exactly what the triage call surfaces before we commit to a scope.",
  ],

  // ADVISORY — standing brand line (frozen H2), DE-localized mission-block prose.
  advisoryBody: "Under a deadline, the hard part isn&rsquo;t speed &mdash; it&rsquo;s judgment. Knowing what a Delaware lender actually needs to see, which periods truly have to be current, which gross-receipts activity category your revenue falls under, and where a shortcut is safe versus where it isn&rsquo;t. That triage &mdash; what to do first when there isn&rsquo;t time to do everything &mdash; is what a Certified ProAdvisor brings to an urgent engagement, and it&rsquo;s what keeps a rushed job from becoming a future cleanup.",

  // EXPERT REVIEW — firm-level trust row (R5/R9: no founder/personal name).
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting &middot; Middletown, DE office" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Fast-turnaround catch-up/cleanup, reconciliation, Delaware gross-receipts tie-out &middot; tax filing &amp; representation handled by your CPA/EA" },
    { label: "Standards", detail: "Fixed-fee, written scope before work &middot; honest assessment of what&rsquo;s achievable &middot; no guaranteed-deadline or SLA claims &middot; no fabricated data" },
  ],

  // FAQ — 7 Q/A, answer-first, Delaware-specific. The cost answer (A3) weaves the phone
  // (Option C call-intent). visible faq__list = FAQPage schema (same array).
  // (H2: What people ask when they're up against a deadline.)
  faq: [
    { q: "What is urgent bookkeeping and when do I need it?", a: "Urgent bookkeeping is a fast-turnaround engagement to bring books current against a hard deadline. Delaware businesses typically need it for a loan or SBA application, an approaching tax-filing date, investor or buyer due diligence, a board or partner meeting, a Delaware Division of Revenue notice with a response window, or a franchise-tax/annual-report delinquency. It&rsquo;s defined by the clock &mdash; same-day response and deadline-first scoping &mdash; rather than by the type of work, which is similar to a standard cleanup." },
    { q: "How fast can you actually start?", a: "Same day where possible. A Certified ProAdvisor will get on a call to understand your deadline and assess how far behind the books are, then begin as soon as scope and access are agreed &mdash; there&rsquo;s no multi-week onboarding for urgent work. The first thing we do is tell you honestly whether your deadline is achievable and, if the timeline is tight, what to prioritize so the most important parts are done first. How fast the work itself goes depends on scope and how complete your records are." },
    { q: "How much does urgent bookkeeping cost in Delaware?", a: "Pricing depends on how far behind the books are and how compressed the deadline is &mdash; quoted in writing as a fixed fee against a written scope before work begins. Catch-up and cleanup start at $1,200, and a highly expedited timeline may carry a rush component because it requires dedicated focus to hit the date. To get a firm number fast, book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
    { q: "How is urgent bookkeeping different from cleanup bookkeeping?", a: "The work is largely the same &mdash; reconciling accounts, categorizing transactions, and reconstructing accurate financials. The difference is the driver. <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">Cleanup bookkeeping</a> brings messy or behind books current on a normal timeline; urgent bookkeeping does it against a hard deadline, with a same-day response and deadline-first prioritization of exactly what the deadline requires. If you&rsquo;re behind but not against a clock, a standard cleanup is the better-value path." },
    { q: "Will the financials be accepted by my lender or CPA?", a: "Yes &mdash; producing a CPA-ready, lender-ready result is the entire point. The deliverable is reconciled to source documents, with Delaware gross-receipts liability tied out by activity and the franchise-tax reserve confirmed, and documented so it can be handed directly to a lender, investor, or your CPA without rework. We coordinate with your CPA on the handoff so the financials drop straight into the filing or application." },
    { q: "I got a Delaware tax notice with a deadline &mdash; can you help?", a: "Yes. A common urgent trigger is a Delaware Division of Revenue notice that requires current, reconciled books to respond to. We bring the relevant periods current and reconcile your gross-receipts or withholding liability to what&rsquo;s been filed, so your CPA or EA has what they need to respond within the window. Note that we prepare the books &mdash; your CPA or EA handles the actual response and any representation. See <a href=\"/find-an-accountant/delaware/state-tax-notice-help/\">Delaware state tax notice help</a>." },
    { q: "What happens after the deadline is met?", a: "Most Delaware businesses that hit an urgent deadline move straight into <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> so the books never fall behind again &mdash; the same ProAdvisor who did the rush work keeps the file current, including gross-receipts cadence and the franchise-tax reserve. Getting current once is the fix for today; staying current is what prevents the next emergency. We do the books; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/urgent-bookkeeping/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware urgent bookkeeping","description":"Urgent bookkeeping for Delaware businesses against a hard deadline — a scoped, fast-turnaround catch-up/cleanup sprint by a Certified ProAdvisor, from the Middletown office. Independent firm; does not file Delaware taxes or the franchise tax/annual report, is not a registered agent, and does not represent clients before any tax authority.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-urgent-bookkeeping-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-urgent-summary","#de-svc-urgent-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Urgent Bookkeeping"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Urgent Bookkeeping","serviceType":"Urgent bookkeeping / deadline catch-up bookkeeping","description":"Scoped fast-turnaround catch-up/cleanup bookkeeping for Delaware businesses facing a hard deadline, delivered by a Certified QuickBooks ProAdvisor from the Middletown office with same-day response where possible and CPA-ready output. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax/annual report, is not a registered agent, and does not represent clients before any tax authority — coordinates with the client's CPA or EA, who files. Not an emergency tax-filing service and not a guarantee of any specific deadline outcome.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and mid-sized businesses facing a deadline with behind or messy books"},
          "offers":{"@type":"Offer","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"From $1,200; scope and timeline determine the final fixed fee.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

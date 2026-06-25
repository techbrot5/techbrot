/* /find-an-accountant/delaware/state-tax-notice-help/ — Delaware HONEST-TRIAGE SERVICE child.
 * Data-file shape mirrors the NY same-named exemplar
 * (find-an-accountant/new-york/state-tax-notice-help.11tydata.js): JSON front-matter lives in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is
 * generated from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE (ABSOLUTE). One of the most honesty-sensitive pages on the site:
 *  - DISCLOSURE BANNER above the fold (inBrief, under the hero): TechBrot is an independent
 *    bookkeeping / Certified QuickBooks ProAdvisor firm — NOT the Delaware Division of Revenue,
 *    NOT the Division of Corporations, not a government agency, not a registered agent, not a
 *    CPA/EA/tax attorney; does NOT respond to notices, represent before any agency, give
 *    tax/legal advice, or file returns/protests/franchise tax/annual report.
 *  - HONEST SCOPE: we help you UNDERSTAND the notice, reconcile the underlying books, identify
 *    discrepancies, and assemble a clean documented package the licensed professional uses to
 *    respond. The licensed professional responds and represents; we do the books work behind it.
 *  - NEVER "official"; never imply contacting us reached the state; never promise the notice
 *    will be resolved/withdrawn/reduced. Deadlines are framed as a reason to act, never a
 *    promised outcome.
 *
 * DE FACTS / FIGURES: only DE-FACTS figures (franchise-tax late penalty $200 + 1.5%/mo interest;
 * corp due March 1). Delaware has NO sales tax — the trust-fund/personal-liability angle is
 * WITHHOLDING tax. DE notice categories are described by issuer + type WITHOUT inventing
 * specific DE form numbers or a specific protest-window day-count (framed qualitatively: "the
 * deadline printed on the notice"), per DE-FACTS "do not invent any figure not in this file".
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. Review proof = the 2 real
 * Clutch reviews on the DE pillar (not duplicated here); NO review-card, NO AggregateRating. No
 * founder/personal name in visible content; David Westgate only in reviewedBy schema @id. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — TL;DR prose. (H2: The short version.) Resolution attributed to the response
  // the tax pro files; our scope is reconciliation. Protest window framed qualitatively.
  tldr: "A <strong>notice from the Delaware Division of Revenue</strong> (gross receipts, withholding, or corporate income tax) or the <strong>Division of Corporations</strong> (a franchise-tax or annual-report delinquency) can mean very different things &mdash; and the <strong>issuing agency and type</strong> tell you which. A bill demands payment; a proposed assessment starts a clock on your <strong>protest rights</strong> by the deadline printed on the notice. Many notices trace back to a <strong>books/reporting mismatch</strong> &mdash; gross receipts that don&rsquo;t reconcile, withholding that doesn&rsquo;t tie to payroll, a return the state didn&rsquo;t receive &mdash; not real tax owed. TechBrot <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">reconciles the relevant period</a>, helps determine whether it&rsquo;s a real liability or an error, and prepares clean figures your CPA, EA, or tax attorney uses to respond. <strong>We don&rsquo;t represent you, respond to the notice, or file the protest</strong> &mdash; your licensed professional does; we make the numbers behind their response correct. Ignoring a notice lets it escalate toward a lien or loss of good standing, so act before the deadline.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware tax notices, in five questions.)
  aiSummary: [
    { q: "What does a Delaware tax notice mean?", a: "<strong>It depends on the notice type and which agency sent it.</strong> Some notices just request documents; others assert tax due and start a protest-rights clock (a proposed assessment from the Division of Revenue), and the Division of Corporations issues franchise-tax/annual-report delinquency notices. Identify the issuer, type, and deadline printed near the top first." },
    { q: "How long do I have to respond?", a: "<strong>A deadline is printed near the top of the notice</strong> &mdash; for a proposed assessment, a written protest must be filed by that date to preserve appeal rights. Confirm the exact date on your own notice against the Division of Revenue; the deadline is a reason to act early, not a promise of any outcome." },
    { q: "What if I ignore it?", a: "It can escalate to a <strong>judgment, lien, bank levy, and collection</strong>, and an unpaid franchise tax can cost a corporation its <strong>good standing</strong> and push it toward void status. Withholding-tax notices escalate fastest because that money is treated as held in trust." },
    { q: "Could it just be a bookkeeping error?", a: "<strong>Often, yes.</strong> Many notices come from a mismatch between what was filed and what the books show. Clean, reconciled books often let your tax professional answer a notice by proving the correct figures &mdash; reconciling those books is our part." },
    { q: "How does TechBrot help?", a: "We reconcile the period, help determine whether the notice reflects a real liability or an error, and prepare documented figures your CPA, EA, or tax attorney responds with. <strong>We don&rsquo;t represent you before the Division of Revenue, file the protest, or file the franchise tax</strong> &mdash; your licensed professional or registered agent does." },
  ],

  // NOTICE TYPES — the real DE notices (grid-3 buyer-cards). Issuer/type as eyebrow; no invented
  // form numbers. (H2: Common Delaware business tax notices.)
  noticeTypes: [
    { form: "Division of Revenue &middot; Bill", title: "A bill for tax due.", body: "The Division of Revenue says tax is due &mdash; gross receipts, withholding, or corporate income &mdash; and is demanding payment. Interest and penalties accrue; left unpaid, it heads toward a lien. The books question: is the amount real, or does it reflect a return that didn&rsquo;t reconcile?" },
    { form: "Division of Revenue &middot; Proposed Assessment", title: "Proposed assessment with protest rights.", body: "A proposed assessment carrying formal <strong>protest rights</strong>. The protest must be filed in writing by the deadline on the notice or it becomes final &mdash; that filing is your CPA or tax attorney&rsquo;s to make, on reconciled figures." },
    { form: "Division of Revenue &middot; Gross Receipts", title: "Gross-receipts filing mismatch.", body: "The receipts the state expected don&rsquo;t match what was filed or paid &mdash; common when QuickBooks isn&rsquo;t tracking receipts by business activity. A reconciled, activity-based gross-receipts workpaper often changes the number in question." },
    { form: "Division of Revenue &middot; Withholding", title: "Withholding tax mismatch.", body: "Withholding reported doesn&rsquo;t tie to payroll, or a withholding return is missing. Because withholding is trust-fund money, these escalate faster &mdash; reconciling payroll to the filings is the fix, and it starts in the books." },
    { form: "Division of Revenue &middot; Request for Information", title: "Request for documents.", body: "The state wants documents to finish processing a return. Respond by the date noted to avoid an adjustment. Often the fastest to clear once the period&rsquo;s records are organized and reconciled." },
    { form: "Division of Corporations &middot; Delinquency", title: "Franchise tax / annual report overdue.", body: "A corporation hasn&rsquo;t filed its annual report or paid the franchise tax (corporations due March 1), so a $200 penalty plus 1.5%/month interest accrues and good standing is at risk. We confirm the reserve and lower method in the books; your registered agent or CPA files." },
  ],
  noticeTypesNote: "Delaware gross-receipts, withholding, and corporate-income returns and payments are filed through the <a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">Division of Revenue</a>; the franchise tax and annual report are filed through the <a href=\"https://corp.delaware.gov/\" rel=\"noopener nofollow\">Division of Corporations</a> (typically via your registered agent). A return that wasn&rsquo;t accepted or didn&rsquo;t reconcile is a frequent trigger behind these notices. Always confirm the current process and deadlines against the issuing agency.",

  // BOOKS PROBLEMS — why so many notices are reconciliation issues. (H2: Why so many Delaware
  // notices are really books problems)
  booksBody: [
    "When a return is filed from books that aren&rsquo;t reconciled, the numbers drift from reality. The state&rsquo;s systems cross-check what you reported against what it expects &mdash; and when those don&rsquo;t line up, a notice goes out. The most common triggers we see are <strong>gross-receipts filings that don&rsquo;t reconcile to the general ledger</strong> (often because receipts weren&rsquo;t tracked by business activity), a <strong>return the state never received</strong>, withholding that doesn&rsquo;t tie to payroll, and a franchise-tax reserve that was never tracked until the delinquency notice arrived.",
    "The practical implication: before you assume a notice is correct and pay it &mdash; or assume it&rsquo;s wrong and ignore it &mdash; get the period reconciled. Knowing your true number is what lets your CPA, EA, or tax attorney respond from a position of fact rather than fear. Reconciling that period is exactly the work we do.",
  ],
  trustFund: "Delaware withholding tax is treated as money you collected on the state&rsquo;s behalf and hold &ldquo;in trust.&rdquo; The state pursues it faster and harder than ordinary liabilities &mdash; and can pursue &ldquo;responsible persons&rdquo; personally. That&rsquo;s why a withholding or payroll notice is more urgent than it may look, and why getting the books reconciled quickly matters.",

  // SCOPE SPLIT — honest who-does-what (grid-2 buyer-cards). 2 frozen H3s.
  // (H2: Who does what when a notice arrives. + 2 H3s)
  scopeDo: [
    "Reconciling the period the notice covers",
    "Helping determine: real liability, or books/reporting mismatch?",
    "Rebuilding messy or missing records to a CPA-ready standard",
    "Assembling documented, defensible figures for your advisor to respond with",
    "Fixing the underlying books issue so it doesn&rsquo;t recur",
  ],
  scopeDont: [
    "Filing the protest, response, franchise tax, or annual report by the deadline",
    "Representing you before the Division of Revenue, the Division of Corporations, or in an audit",
    "Acting as your Delaware registered agent",
    "Legal or tax advice and assessment negotiation",
    "We coordinate directly with your CPA, EA, or tax attorney &mdash; they respond and represent; we supply the reconciled books.",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Scope", detail: "Bookkeeping reconciliation and figure preparation &middot; notice response, filing, and representation are out of scope &mdash; handled by your CPA, EA, tax attorney, or registered agent" },
    { label: "Standards", detail: "Verified vs Delaware Division of Revenue &amp; Division of Corporations &middot; no representation or filing claims &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; Middletown, DE office &middot; coordinated with your tax professional" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; not the Delaware Division of Revenue or Division of Corporations &middot; not a registered agent &middot; not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A, answer-first, Delaware-specific. A8 weaves the phone (Option C call-intent).
  // visible faq__list = FAQPage schema (same array). (H2: Delaware tax notice questions.)
  faq: [
    { q: "What does it mean if I got a notice from the Delaware Division of Revenue?", a: "It depends entirely on the notice type &mdash; and the type matters more than the title. Some notices simply ask for documents to finish processing a return. Others assert that you owe money and start a clock on your right to protest (a proposed assessment). The first step is always to identify the issuing agency, the notice type, and the deadline printed near the top, then respond before it passes." },
    { q: "What are the main types of Delaware business tax notices?", a: "From the Division of Revenue: a bill for tax due (gross receipts, withholding, or corporate income), a proposed assessment with protest rights, a gross-receipts or withholding mismatch notice, and requests for information. From the Division of Corporations: a franchise-tax or annual-report delinquency notice. Each has its own meaning and deadline; misreading one for another is the most common costly mistake." },
    { q: "How long do I have to respond to a Delaware tax notice?", a: "A response deadline is printed near the top of the notice, and it varies by type. For a proposed assessment you must file your protest in writing by that date to preserve your appeal rights. Confirm the exact date on your own notice against the Delaware Division of Revenue &mdash; missing the deadline doesn&rsquo;t make the issue go away; it removes your options and lets the assessment become final." },
    { q: "What happens if I ignore a Delaware State tax notice?", a: "It escalates. The Division of Revenue can secure a judgment and lien, levy bank accounts, and pursue collection, and an unpaid franchise tax can cost a corporation its good standing and push it toward void status with the Division of Corporations. Withholding-tax notices escalate fastest because that money is treated as held in trust. Acting on the first notice is always cheaper than reacting to a lien or a voided entity." },
    { q: "Can the issue be from a bookkeeping error rather than real tax owed?", a: "Very often, yes. A large share of Delaware notices trace back to a mismatch &mdash; gross receipts that don&rsquo;t reconcile to the books (often because receipts weren&rsquo;t tracked by activity), a return the state didn&rsquo;t receive, withholding that doesn&rsquo;t tie to payroll, or a franchise-tax reserve that was never tracked. When the underlying books are clean and reconciled, many notices are resolved by simply showing the correct figures. That reconciliation is exactly what we do &mdash; your CPA, EA, or tax attorney then files the response that resolves the notice." },
    { q: "How does TechBrot help with a Delaware tax notice?", a: "We work the bookkeeping side: reconciling the period in question, identifying whether the notice reflects a real liability or a books/reporting mismatch, and assembling clean, documented figures your CPA or tax attorney can use to respond. We don&rsquo;t represent you before the state or file the protest, the franchise tax, or the annual report &mdash; we make sure the numbers behind the response are correct and defensible." },
    { q: "Should I call a CPA, a tax attorney, or my registered agent for a Delaware notice?", a: "It depends on the notice. For a straightforward information request or adjustment, your CPA (with clean books behind them) is usually enough. For a proposed assessment, an audit, or anything with protest rights and real money at stake, a CPA or tax attorney should lead the response. A franchise-tax or annual-report delinquency is typically handled through your registered agent or CPA. In all cases, reconciled books make their work faster and your position stronger &mdash; and that&rsquo;s where we come in." },
    { q: "What should I do the moment I receive a notice?", a: "Three things: (1) find the issuing agency, the notice type, and the response deadline near the top; (2) don&rsquo;t ignore it or assume it&rsquo;s wrong; (3) get the relevant period&rsquo;s books reconciled so you know whether you actually owe what the notice claims. From there, you (or your CPA/attorney/registered agent) respond by the deadline with accurate figures. We can turn the books around quickly to support that &mdash; book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/state-tax-notice-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware State Tax Notice Help","description":"Help understanding Delaware Division of Revenue and Division of Corporations notices for businesses — identifying the notice type and deadline, and reconciling the books to determine whether the notice reflects a real liability or a reporting mismatch. Bookkeeping reconciliation support only; an independent firm that does not respond to notices, file, act as a registered agent, or represent clients before the state.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/delaware-state-tax-notice-help-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-notice-tldr-body","#de-svc-notice-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"State Tax Notice Help"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Tax Notice Bookkeeping Support","serviceType":"Bookkeeping reconciliation support","description":"Reconciliation and figure-preparation support for Delaware businesses that received a Division of Revenue or Division of Corporations notice. The licensed professional (CPA, EA, tax attorney, or registered agent) responds to the notice and represents the client; TechBrot performs the underlying books and records work. Independent Certified QuickBooks ProAdvisor firm; not the Delaware Division of Revenue or Division of Corporations, not a registered agent, and does not respond to notices, file returns, protests, the franchise tax, or the annual report, or represent clients before the state.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware businesses with tax notices or liabilities"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

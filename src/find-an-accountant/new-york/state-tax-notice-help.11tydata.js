/* /find-an-accountant/new-york/state-tax-notice-help/ — t-location NY HONEST-TRIAGE
 * SERVICE child. Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-notice.txt) — the ONLY
 * authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/state-tax-notice-help/index.html, full body read) for
 * body prose. Data-file shape mirrors industries/construction.11tydata.js: JSON
 * front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array the
 * visible faq__list renders — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE (ABSOLUTE — overrides any baseline overclaim). This is one of the
 * most honesty-sensitive pages on the site. Boundaries enforced everywhere:
 *  - DISCLOSURE BANNER above the fold (.disclosure in the .njk, under the hero): TechBrot is
 *    an independent bookkeeping / Certified QuickBooks ProAdvisor firm — NOT the NYS Dept of
 *    Taxation and Finance, not a government agency, not a CPA/EA/tax attorney; does NOT
 *    respond to notices, represent before the Department, give tax/legal advice, or file.
 *  - HONEST SCOPE: we help you UNDERSTAND the notice, reconcile the underlying books, identify
 *    discrepancies, and assemble a clean documented package the licensed professional uses to
 *    respond. The licensed professional responds and represents; we do the books work behind it.
 *  - NEVER "official"; never imply contacting us reached the Tax Department; never promise the
 *    notice will be resolved/withdrawn/reduced. Deadlines are framed as a reason to act, never
 *    as a promised outcome.
 *
 * REFRAMES from baseline overclaim (each FLAGGED in the build report):
 *  R1 — baseline hero/CTA CTA label "Get a Free Notice Review" implied we review/handle the
 *       notice itself. Reframed to canonical "Book the discovery call" / "Get the free file
 *       review" + ctaBand lede explicitly scopes to records work + coordinating with the tax pro.
 *  R2 — baseline secondary hero CTA "Behind on NY taxes?" -> dropped (off-lexicon); replaced
 *       with canonical "Speak to a ProAdvisor" (tel) + "Get the free file review".
 *  R3 — baseline TL;DR "many notices are resolved by simply showing the correct figures" risked
 *       implying we resolve notices; the prose attributes resolution to the response your tax pro
 *       files, and frames reconciliation as our scope. (Original "we reconcile / don't represent
 *       or file" boundary preserved verbatim in spirit.)
 *  R4 — baseline expert-review named the reviewer "David Westgate · 40+ years…" in VISIBLE
 *       content. Reframed to firm-level "Certified QuickBooks ProAdvisor team" byline (R9).
 *       (David remains only in global Person schema via reviewedBy @id.)
 *  R5 — FAQ A5 baseline "many notices are resolved by simply showing the correct figures. That
 *       reconciliation is exactly what we do." APPENDED a clause clarifying the licensed pro files
 *       the response — wording preserved, scope made explicit (enrichment, not reword/removal).
 *  R6 — FAQ A6 baseline already honest ("We don't represent you… or file the protest"); kept
 *       verbatim. No reframe needed — flagged as the scope anchor.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. The only review proof is
 * the 2 real Clutch reviews (carried on the NY pillar, NOT duplicated here) — this child renders
 * NO review-card and NO AggregateRating. NY notice facts (DTF-948, Notice of Deficiency /
 * Determination, Notice and Demand, DTF-160, ST-565, ~30-day windows, tax warrant / income
 * execution escalation, trust-fund tax) reflect NYS DTF guidance. No founder/personal name in
 * visible content. Footer chrome (Accounting/QuickBooks/Company/Network) and the newsletter
 * ("The monthly brief.") are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — TL;DR prose. (H2: The short version.)
  // R3 reframe: resolution attributed to the response the tax pro files; our scope is reconciliation.
  tldr: "A <strong>notice from the NYS Department of Taxation and Finance</strong> can mean very different things &mdash; and the <strong>form number</strong> (e.g. DTF-948, Notice of Deficiency, Notice and Demand) tells you which. Most give about <strong>30 days to respond</strong>, and a Notice of Deficiency or Determination starts a clock on your <strong>protest rights</strong>. Many notices trace back to a <strong>books/reporting mismatch</strong> &mdash; sales tax that doesn&rsquo;t reconcile, a return the state didn&rsquo;t receive &mdash; not real tax owed. TechBrot <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">reconciles the relevant period</a>, helps determine whether it&rsquo;s a real liability or an error, and prepares clean figures your CPA, EA, or tax attorney uses to respond. <strong>We don&rsquo;t represent you, respond to the notice, or file the protest</strong> &mdash; your licensed professional does; we make the numbers behind their response correct. Ignoring a notice lets it escalate toward a warrant, so act before the deadline.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York tax notices, in five questions.)
  aiSummary: [
    { q: "What does a NYS tax notice mean?", a: "<strong>It depends on the notice type &mdash; and the form number matters more than the title.</strong> Some notices just request documents (DTF-948); others assert tax due and start a protest-rights clock (Notice of Deficiency, Notice of Determination). Identify the number and the deadline printed near the top first." },
    { q: "How long do I have to respond?", a: "<strong>Usually about 30 days</strong> from the date on the letter, though it varies. For a Notice of Deficiency or Determination, the protest must be filed in writing by that date to preserve appeal rights. The deadline is a reason to act early &mdash; not a promise of any outcome." },
    { q: "What if I ignore it?", a: "It can escalate to a <strong>tax warrant, income execution, bank levy, license suspension, and asset seizure</strong>. New York can also intercept an IRS refund. Sales- and payroll-tax notices escalate fastest because that money is treated as held in trust." },
    { q: "Could it just be a bookkeeping error?", a: "<strong>Often, yes.</strong> Many notices come from a mismatch between what was filed and what the books show. Clean, reconciled books often let your tax professional answer a notice by proving the correct figures &mdash; reconciling those books is our part." },
    { q: "How does TechBrot help?", a: "We reconcile the period, help determine whether the notice reflects a real liability or an error, and prepare documented figures your CPA, EA, or tax attorney responds with. <strong>We don&rsquo;t represent you before the Tax Department or file the protest</strong> &mdash; your licensed professional does." },
  ],

  // NOTICE TYPES — the real NY notices (grid-3 buyer-cards). (H2: Common New York State business tax notices.)
  noticeTypes: [
    { form: "Notice and Demand", title: "A bill for tax due.", body: "The state says tax is due and is demanding payment. Interest and penalties accrue; left unpaid, it heads toward a tax warrant. The books question: is the amount real, or does it reflect a return that didn&rsquo;t reconcile?" },
    { form: "Notice of Deficiency", title: "Proposed income-tax assessment.", body: "A proposed income-tax assessment carrying formal <strong>protest rights</strong>. The protest must be filed in writing by the date on the notice or it becomes final &mdash; that filing is your CPA or tax attorney&rsquo;s to make, on reconciled figures." },
    { form: "Notice of Determination", title: "Proposed sales/other-tax assessment.", body: "A proposed assessment for sales or other taxes, also with protest rights and a hard deadline. Common after a sales-tax audit &mdash; where a reconciled sales-tax workpaper often changes the number in question." },
    { form: "Statement of Proposed Audit Change", title: "Audit findings, before final.", body: "Audit findings before they&rsquo;re finalized &mdash; the window to respond with documentation and clean figures before an assessment is issued. We assemble the records; your licensed professional responds." },
    { form: "DTF-948 / DTF-948-O", title: "Request for Information.", body: "The state wants documents to finish processing a return. Respond by the date noted to avoid an adjustment. Often the fastest to clear once the period&rsquo;s records are organized and reconciled." },
    { form: "DTF-160", title: "Account Adjustment Notice.", body: "Details a change the state made to your account &mdash; sometimes a refund, sometimes additional tax. Reconciling the period tells you whether the adjustment ties to your books or signals a deeper mismatch." },
    { form: "ST-565", title: "Nonreceipt of a sales-tax return.", body: "Notice of Nonreceipt of a sales/use-tax return: the state has no record of a return it expected &mdash; often a filing or Web File reconciliation gap, not missing money. The fix usually starts in the books." },
  ],
  noticeTypesNote: "New York sales-tax returns are filed through the Department&rsquo;s <a href=\"https://www.tax.ny.gov/\" rel=\"noopener nofollow\">Web File</a> system; a return that wasn&rsquo;t accepted or didn&rsquo;t reconcile is a frequent trigger behind these notices. Always confirm the current process and deadlines against the NYS Department of Taxation and Finance.",

  // BOOKS PROBLEMS — why so many notices are reconciliation issues. (H2: Why so many New York notices are really books problems)
  booksBody: [
    "When a return is filed from books that aren&rsquo;t reconciled, the numbers drift from reality. The state&rsquo;s systems cross-check what you reported against what it expects &mdash; and when those don&rsquo;t line up, a notice goes out. The most common triggers we see are <strong>sales-tax filings that don&rsquo;t reconcile to the general ledger</strong>, a <strong>return the state never received</strong> (or that didn&rsquo;t clear Web File), withholding that doesn&rsquo;t tie to payroll, and figures that simply don&rsquo;t match what was reported.",
    "The practical implication: before you assume a notice is correct and pay it &mdash; or assume it&rsquo;s wrong and ignore it &mdash; get the period reconciled. Knowing your true number is what lets your CPA, EA, or tax attorney respond from a position of fact rather than fear. Reconciling that period is exactly the work we do.",
  ],
  trustFund: "Sales tax and withholding tax are treated as money you collected on the state&rsquo;s behalf and hold &ldquo;in trust.&rdquo; New York pursues these faster and harder than ordinary liabilities &mdash; and can pursue &ldquo;responsible persons&rdquo; personally. That&rsquo;s why a sales-tax or payroll notice is more urgent than it may look, and why getting the books reconciled quickly matters.",

  // SCOPE SPLIT — honest who-does-what (grid-2 buyer-cards). 2 frozen H3s verbatim.
  // (H2: Who does what when a notice arrives. + 2 H3s)
  scopeDo: [
    "Reconciling the period the notice covers",
    "Helping determine: real liability, or books/reporting mismatch?",
    "Rebuilding messy or missing records to a CPA-ready standard",
    "Assembling documented, defensible figures for your advisor to respond with",
    "Fixing the underlying books issue so it doesn&rsquo;t recur",
  ],
  scopeDont: [
    "Filing the protest or response by the deadline",
    "Representing you before the Tax Department or in an audit",
    "Legal or tax advice and assessment negotiation",
    "We coordinate directly with your CPA, EA, or tax attorney &mdash; they respond and represent; we supply the reconciled books.",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name). R4: reviewer reframed to team-level.
  reviewCreds: [
    { label: "Scope", detail: "Bookkeeping reconciliation and figure preparation &middot; notice response, filing, and representation are out of scope &mdash; handled by your CPA, EA, or tax attorney" },
    { label: "Standards", detail: "Verified vs NYS Department of Taxation and Finance &middot; no representation or filing claims &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; coordinated with your tax professional" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; not the NYS Tax Department &middot; not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM questions from the contract; answers preserved, enriched only where noted.
  // visible faq__list = FAQPage schema (same array). (H2: New York tax notice questions.)
  faq: [
    { q: "What does it mean if I got a notice from the New York State Department of Taxation and Finance?", a: "It depends entirely on the notice type &mdash; and the form number matters more than the title. Some notices (like a DTF-948 Request for Information) simply ask for documents. Others (a Notice of Deficiency or Notice of Determination) assert that you owe money and start a clock on your right to protest. The first step is always to identify the notice number and the deadline printed near the top, then respond before it passes." },
    { q: "What are the main types of New York State business tax notices?", a: "Common ones include the Notice and Demand (a bill for tax due), Notice of Deficiency and Notice of Determination (proposed assessments with protest rights), the Statement of Proposed Audit Change (audit findings), DTF-160 Account Adjustment Notice, DTF-948 Request for Information, and ST-565 Notice of Nonreceipt of a sales-tax return. Each has its own meaning and deadline; misreading one for another is the most common costly mistake." },
    { q: "How long do I have to respond to a New York tax notice?", a: "Most New York notices give you about 30 days from the date on the letter, though it varies by type. For a Notice of Deficiency or Notice of Determination, you must file your protest in writing by that date to preserve your appeal rights. Missing the deadline doesn&rsquo;t make the issue go away &mdash; it removes your options and lets the assessment become final." },
    { q: "What happens if I ignore a New York State tax notice?", a: "It escalates. New York can issue a tax warrant (a public lien), an income execution (wage garnishment), levy bank accounts, suspend a driver&rsquo;s license, and ultimately seize and sell property. The Department can also intercept your IRS refund and coordinate with other states. Sales-tax and payroll-tax notices escalate fastest because that money is treated as held in trust. Acting on the first notice is always cheaper than reacting to a warrant." },
    { q: "Can the issue be from a bookkeeping error rather than real tax owed?", a: "Very often, yes. A large share of New York notices trace back to a mismatch &mdash; sales-tax filed that doesn&rsquo;t reconcile to the books, a return the state didn&rsquo;t receive, a categorization error, or numbers that don&rsquo;t tie to what was reported. When the underlying books are clean and reconciled, many notices are resolved by simply showing the correct figures. That reconciliation is exactly what we do &mdash; your CPA, EA, or tax attorney then files the response that resolves the notice." },
    { q: "How does TechBrot help with a New York tax notice?", a: "We work the bookkeeping side: reconciling the period in question, identifying whether the notice reflects a real liability or a books/reporting mismatch, and assembling clean, documented figures your CPA or tax attorney can use to respond. We don&rsquo;t represent you before the Tax Department or file the protest &mdash; we make sure the numbers behind the response are correct and defensible." },
    { q: "Should I call a CPA or a tax attorney for a New York notice?", a: "For a straightforward information request or adjustment, your CPA (with clean books behind them) is usually enough. For a Notice of Deficiency, an audit, or anything with protest rights and real money at stake, a CPA or tax attorney should lead the response. In all cases, reconciled books make their work faster and your position stronger &mdash; and that&rsquo;s where we come in." },
    { q: "What should I do the moment I receive a notice?", a: "Three things: (1) find the form number and the response deadline near the top; (2) don&rsquo;t ignore it or assume it&rsquo;s wrong; (3) get the relevant period&rsquo;s books reconciled so you know whether you actually owe what the notice claims. From there, you (or your CPA/attorney) respond by the deadline with accurate figures. We can turn the books around quickly to support that." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/state-tax-notice-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York State Tax Notice Help","description":"Help understanding New York State Department of Taxation and Finance notices for businesses — identifying the notice type and deadline, and reconciling the books to determine whether the notice reflects a real liability or a reporting mismatch. Bookkeeping reconciliation support only; an independent firm that does not respond to notices, file, or represent clients before the Tax Department.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-state-tax-notice-help.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-notice-tldr-body","#ny-svc-notice-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"State Tax Notice Help"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Tax Notice Bookkeeping Support","serviceType":"Bookkeeping reconciliation support","description":"Reconciliation and figure-preparation support for New York businesses that received a state tax notice. The licensed professional (CPA, EA, or tax attorney) responds to the notice and represents the client; TechBrot performs the underlying books and records work. Independent Certified QuickBooks ProAdvisor firm; not the New York State Department of Taxation and Finance, and does not respond to notices, file returns or protests, or represent clients before the Tax Department.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York businesses with tax notices or liabilities"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

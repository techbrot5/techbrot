/* /find-an-accountant/indiana/state-tax-notice-help/ — Indiana HONEST-TRIAGE SERVICE child.
 * Data-file shape mirrors the same-named Delaware/New York exemplars: JSON front-matter lives in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated
 * from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE (ABSOLUTE). One of the most honesty-sensitive pages on the site:
 *  - DISCLOSURE BANNER above the fold (disclose--lead, under the hero): TechBrot is an
 *    independent bookkeeping / Certified QuickBooks ProAdvisor firm — NOT the Indiana Department
 *    of Revenue (DOR), NOT the county assessor or DLGF, not a government agency, not a CPA/EA/tax
 *    attorney; provides OPERATIONAL SUPPORT and DOCUMENTATION only; does NOT respond to notices,
 *    represent before any agency, give tax/legal advice, or file returns/protests/the business
 *    personal-property return.
 *  - HONEST SCOPE: we help you UNDERSTAND the notice, reconcile the underlying books, identify
 *    discrepancies, and assemble a clean documented package the licensed professional uses to
 *    respond. We coordinate with a licensed CPA/EA for representation; we do NOT represent before
 *    the DOR.
 *  - NEVER "official"; never imply contacting us reached the state; never promise the notice will
 *    be resolved/withdrawn/reduced. Deadlines are framed as a reason to act, never a promised
 *    outcome.
 *
 * IN FACTS / FIGURES: only IN-FACTS figures (flat 7% sales/use tax statewide, no local; flat
 * 2.95% income tax 2026; corporate 4.9%; 92-county LIT, rates qualitative; business personal-
 * property exemption $2,000,000 for 2026 declared on Form 102/103). NO street address
 * (areaServed-only). NO franchise tax (DE concept). Indiana sales tax AND payroll withholding are
 * trust-fund. IN notice categories described by issuer + type WITHOUT inventing a specific
 * protest-window day-count (framed qualitatively: "the deadline printed on the notice").
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. Review proof = the 2 real
 * Clutch reviews on the IN pillar (not duplicated here); NO review-card, NO AggregateRating. No
 * founder/personal name in visible content; David Westgate only in reviewedBy schema @id. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — TL;DR prose. (H2: The short version.) Resolution attributed to the response
  // the tax pro files; our scope is reconciliation + documentation. Protest window qualitative.
  tldr: "A <strong>notice from the Indiana Department of Revenue (DOR)</strong> &mdash; sales/use tax, withholding, county local income tax (LIT), or corporate income tax &mdash; or a <strong>business personal-property notice from the county assessor</strong> can mean very different things, and the <strong>issuing agency and type</strong> tell you which. A bill demands payment; a proposed assessment starts a clock on your <strong>protest rights</strong> by the deadline printed on the notice. Many notices trace back to a <strong>books/reporting mismatch</strong> &mdash; sales tax collected that doesn&rsquo;t reconcile, withholding or county LIT that doesn&rsquo;t tie to payroll, a return the state didn&rsquo;t receive, a Form 102/103 that wasn&rsquo;t filed &mdash; not real tax owed. TechBrot <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">reconciles the relevant period</a>, helps determine whether it&rsquo;s a real liability or an error, and prepares clean figures and documentation your CPA, EA, or tax attorney uses to respond. <strong>We provide operational support and documentation only &mdash; we don&rsquo;t represent you, respond to the notice, or file the protest</strong>; your licensed professional does, and we coordinate with them. Ignoring a notice lets it escalate toward a tax warrant or lien, so act before the deadline.",

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana tax notices, in five questions.)
  aiSummary: [
    { q: "What does an Indiana tax notice mean?", a: "<strong>It depends on the notice type and which agency sent it.</strong> Some notices just request documents; others assert tax due and start a protest-rights clock (a proposed assessment from the Indiana DOR), and the county assessor issues business personal-property (Form 102/103) notices. Identify the issuer, type, and deadline printed near the top first." },
    { q: "How long do I have to respond?", a: "<strong>A deadline is printed near the top of the notice</strong> &mdash; for a proposed assessment, a written protest must be filed by that date to preserve appeal rights. Confirm the exact date on your own notice against the Indiana Department of Revenue; the deadline is a reason to act early, not a promise of any outcome." },
    { q: "What if I ignore it?", a: "It can escalate to a <strong>tax warrant, judgment, lien, bank levy, and collection</strong> through the county sheriff or a collection agency. Sales-tax and withholding notices escalate fastest because that money is treated as held in trust." },
    { q: "Could it just be a bookkeeping error?", a: "<strong>Often, yes.</strong> Many notices come from a mismatch between what was filed and what the books show. Clean, reconciled books and documentation often let your tax professional answer a notice by proving the correct figures &mdash; reconciling those books is our part." },
    { q: "How does TechBrot help?", a: "We reconcile the period, help determine whether the notice reflects a real liability or an error, and prepare documented figures your CPA, EA, or tax attorney responds with. <strong>We provide operational support and documentation only &mdash; we don&rsquo;t represent you before the DOR, file the protest, or file the business personal-property return</strong>; your licensed professional does." },
  ],

  // NOTICE TYPES — the real IN notices (grid-3 buyer-cards). Issuer/type as eyebrow; no invented
  // form numbers beyond Form 102/103 (from IN-FACTS). (H2: Common Indiana business tax notices.)
  noticeTypes: [
    { form: "Indiana DOR &middot; Bill", title: "A bill for tax due.", body: "The Department of Revenue says tax is due &mdash; sales/use, withholding, county LIT, or corporate income &mdash; and is demanding payment. Interest and penalties accrue; left unpaid, it heads toward a tax warrant and lien. The books question: is the amount real, or does it reflect a return that didn&rsquo;t reconcile?" },
    { form: "Indiana DOR &middot; Proposed Assessment", title: "Proposed assessment with protest rights.", body: "A proposed assessment carrying formal <strong>protest rights</strong>. The protest must be filed in writing by the deadline on the notice or it becomes final &mdash; that filing is your CPA or tax attorney&rsquo;s to make, on reconciled figures." },
    { form: "Indiana DOR &middot; Sales / Use Tax", title: "Sales-tax filing mismatch.", body: "The 7% sales tax the state expected doesn&rsquo;t match what was filed or paid &mdash; common when QuickBooks isn&rsquo;t configured to track and remit Indiana&rsquo;s flat sales tax correctly. A reconciled sales-tax workpaper often changes the number in question." },
    { form: "Indiana DOR &middot; Withholding / County LIT", title: "Withholding or county LIT mismatch.", body: "Withholding reported doesn&rsquo;t tie to payroll, or county local income tax for the wrong county of residence was withheld (Form WH-4 drives this). Because withholding is trust-fund money, these escalate faster &mdash; reconciling payroll to the filings is the fix, and it starts in the books." },
    { form: "Indiana DOR &middot; Request for Information", title: "Request for documents.", body: "The state wants documents to finish processing a return. Respond by the date noted to avoid an adjustment. Often the fastest to clear once the period&rsquo;s records are organized and reconciled." },
    { form: "County Assessor &middot; Personal Property", title: "Business personal-property (Form 102/103).", body: "The county assessor flags a missing or questioned business personal-property return. For 2026 the exemption threshold rose to $2,000,000, but it must still be <strong>declared on Form 102 or 103</strong>. We track the asset detail and prepare the figures; your CPA or assessor-side preparer files." },
  ],
  noticeTypesNote: "Indiana sales/use, withholding, county LIT, and corporate-income returns and payments are filed through the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana Department of Revenue</a>; the business personal-property return (Form 102/103) is filed with the <a href=\"https://www.in.gov/dlgf/assessments/personal-property/\" rel=\"noopener nofollow\">county assessor under DLGF rules</a>. A return that wasn&rsquo;t accepted or didn&rsquo;t reconcile is a frequent trigger behind these notices. Always confirm the current process and deadlines against the issuing agency.",

  // BOOKS PROBLEMS — why so many notices are reconciliation issues. (H2: Why so many Indiana
  // notices are really books problems)
  booksBody: [
    "When a return is filed from books that aren&rsquo;t reconciled, the numbers drift from reality. The state&rsquo;s systems cross-check what you reported against what it expects &mdash; and when those don&rsquo;t line up, a notice goes out. The most common triggers we see are <strong>sales-tax filings that don&rsquo;t reconcile to the general ledger</strong> (often because the 7% wasn&rsquo;t configured or tracked correctly in QuickBooks), a <strong>return the state never received</strong>, withholding or county LIT that doesn&rsquo;t tie to payroll, and a business personal-property return (Form 102/103) that was never filed.",
    "The practical implication: before you assume a notice is correct and pay it &mdash; or assume it&rsquo;s wrong and ignore it &mdash; get the period reconciled. Knowing your true number is what lets your CPA, EA, or tax attorney respond from a position of fact rather than fear. Reconciling that period and preparing the documentation is exactly the work we do.",
  ],
  trustFund: "Indiana sales tax and payroll withholding are treated as money you collected on the state&rsquo;s behalf and hold &ldquo;in trust.&rdquo; The state pursues those faster and harder than ordinary liabilities &mdash; and can pursue &ldquo;responsible persons&rdquo; personally. That&rsquo;s why a sales-tax or withholding notice is more urgent than it may look, and why getting the books reconciled quickly matters.",

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
    "Filing the protest, response, or business personal-property return by the deadline",
    "Representing you before the Indiana Department of Revenue, the county assessor, or in an audit",
    "Legal or tax advice and assessment negotiation",
    "We coordinate directly with your CPA, EA, or tax attorney &mdash; they respond and represent; we supply the reconciled books and documentation.",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name). Area-served only; no address.
  reviewCreds: [
    { label: "Scope", detail: "Bookkeeping reconciliation, documentation, and figure preparation &middot; notice response, filing, and representation are out of scope &mdash; handled by your CPA, EA, or tax attorney" },
    { label: "Standards", detail: "Verified vs Indiana Department of Revenue &amp; DLGF &middot; no representation or filing claims &middot; reviewed periodically &middot; no fabricated data" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; serving Indiana businesses statewide &middot; coordinated with your tax professional" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; not the Indiana Department of Revenue or county assessor &middot; not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A, answer-first, Indiana-specific. A8 weaves the phone (Option C call-intent).
  // visible faq__list = FAQPage schema (same array). (H2: Indiana tax notice questions.)
  faq: [
    { q: "What does it mean if I got a notice from the Indiana Department of Revenue?", a: "It depends entirely on the notice type &mdash; and the type matters more than the title. Some notices simply ask for documents to finish processing a return. Others assert that you owe money and start a clock on your right to protest (a proposed assessment). The first step is always to identify the issuing agency, the notice type, and the deadline printed near the top, then respond before it passes." },
    { q: "What are the main types of Indiana business tax notices?", a: "From the Department of Revenue: a bill for tax due (sales/use, withholding, county LIT, or corporate income), a proposed assessment with protest rights, a sales-tax or withholding/LIT mismatch notice, and requests for information. From the county assessor: a business personal-property (Form 102/103) notice. Each has its own meaning and deadline; misreading one for another is the most common costly mistake." },
    { q: "How long do I have to respond to an Indiana tax notice?", a: "A response deadline is printed near the top of the notice, and it varies by type. For a proposed assessment you must file your protest in writing by that date to preserve your appeal rights. Confirm the exact date on your own notice against the Indiana Department of Revenue &mdash; missing the deadline doesn&rsquo;t make the issue go away; it removes your options and lets the assessment become final." },
    { q: "What happens if I ignore an Indiana State tax notice?", a: "It escalates. The Department of Revenue can issue a tax warrant that becomes a judgment and lien, levy bank accounts, and pursue collection through the county sheriff or a collection agency. Sales-tax and withholding notices escalate fastest because that money is treated as held in trust. Acting on the first notice is always cheaper than reacting to a tax warrant or a levy." },
    { q: "Can the issue be from a bookkeeping error rather than real tax owed?", a: "Very often, yes. A large share of Indiana notices trace back to a mismatch &mdash; sales tax that doesn&rsquo;t reconcile to the books (often because the 7% wasn&rsquo;t configured correctly in QuickBooks), a return the state didn&rsquo;t receive, withholding or county LIT that doesn&rsquo;t tie to payroll, or a Form 102/103 that was never filed. When the underlying books are clean and reconciled, many notices are resolved by simply showing the correct figures. That reconciliation is exactly what we do &mdash; your CPA, EA, or tax attorney then files the response that resolves the notice." },
    { q: "How does TechBrot help with an Indiana tax notice?", a: "We work the bookkeeping side: reconciling the period in question, identifying whether the notice reflects a real liability or a books/reporting mismatch, and assembling clean, documented figures your CPA or tax attorney can use to respond. We provide operational support and documentation only &mdash; we don&rsquo;t represent you before the state or file the protest or the business personal-property return &mdash; we make sure the numbers behind the response are correct and defensible." },
    { q: "Should I call a CPA, a tax attorney, or my county assessor for an Indiana notice?", a: "It depends on the notice. For a straightforward information request or adjustment, your CPA (with clean books behind them) is usually enough. For a proposed assessment, an audit, or anything with protest rights and real money at stake, a CPA or tax attorney should lead the response. A business personal-property (Form 102/103) matter is handled with the county assessor, typically through your CPA or assessor-side preparer. In all cases, reconciled books make their work faster and your position stronger &mdash; and that&rsquo;s where we come in." },
    { q: "What should I do the moment I receive a notice?", a: "Three things: (1) find the issuing agency, the notice type, and the response deadline near the top; (2) don&rsquo;t ignore it or assume it&rsquo;s wrong; (3) get the relevant period&rsquo;s books reconciled so you know whether you actually owe what the notice claims. From there, you (or your CPA/attorney) respond by the deadline with accurate figures. We can turn the books and documentation around quickly to support that &mdash; book a call or dial <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/state-tax-notice-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana State Tax Notice Help","description":"Help understanding Indiana Department of Revenue and county assessor notices for businesses — identifying the notice type and deadline, and reconciling the books to determine whether the notice reflects a real liability or a reporting mismatch. Bookkeeping reconciliation and documentation support only; an independent firm that provides operational support and coordinates with a licensed CPA or EA — it does not respond to notices, file, or represent clients before the state.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-state-tax-notice-help-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-notice-tldr-body","#in-svc-notice-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"State Tax Notice Help"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Tax Notice Bookkeeping Support","serviceType":"Bookkeeping reconciliation support","description":"Reconciliation, documentation, and figure-preparation support for Indiana businesses that received an Indiana Department of Revenue or county assessor notice. The licensed professional (CPA, EA, or tax attorney) responds to the notice and represents the client; TechBrot performs the underlying books and records work and coordinates with them. Independent Certified QuickBooks ProAdvisor firm; not the Indiana Department of Revenue or county assessor, and does not respond to notices, file returns, protests, or the business personal-property return, or represent clients before the state.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana businesses with tax notices or liabilities"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

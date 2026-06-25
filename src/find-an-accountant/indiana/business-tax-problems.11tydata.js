/* /find-an-accountant/indiana/business-tax-problems/ — Indiana HONEST-TRIAGE SERVICE child.
 * Data-file shape mirrors the same-named Delaware/New York exemplars: JSON front-matter lives
 * in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting
 * the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is
 * generated from the same `faq` array the visible faq__list renders from — single source of truth.
 *
 * ── SHEET-7 HONEST-TRIAGE (ABSOLUTE) ───────────────────────────────────────────────
 * One of the most honesty-sensitive pages on the site. TechBrot is an independent
 * bookkeeping / Certified QuickBooks ProAdvisor firm. It is NOT a CPA, EA, tax attorney, or
 * law firm; NOT affiliated with the IRS, the Indiana Department of Revenue (DOR), the county
 * assessor, the DLGF, or any government agency. It does NOT represent clients before any tax
 * authority, does NOT negotiate settlements/offers/payment plans, does NOT provide tax or legal
 * advice, and does NOT file income-tax returns, the sales-tax return, the withholding/county-LIT
 * return, or the business personal-property return. What it ACTUALLY does: reconstruct/clean the
 * books, reconcile accounts, quantify exposure, assemble an audit-ready records package, and
 * COORDINATE WITH the client's CPA / EA / tax attorney who handles filing, response, and
 * representation. Every benefit is framed as books/records work that makes the licensed
 * professional's job possible — never as resolving the tax matter ourselves. The disclosure
 * banner renders ABOVE THE FOLD (disclose--lead, directly under the hero) and is reinforced by
 * a checks-list of boundaries in the first body section. NEVER "official"; no government/Intuit-
 * affiliation implication; no promised tax outcome.
 *
 * IN FIGURES: only IN-FACTS figures used (flat 7% sales tax statewide, no local; flat 2.95%
 * individual income tax 2026; corporate 4.9%; business personal-property exemption threshold
 * $2,000,000 for 2026 declared on Form 102/103; 92-county LIT, rates qualitative). IN resolution
 * programs are framed qualitatively (payment plan, voluntary disclosure, contesting an estimated
 * assessment, curing a sales-tax/withholding-LIT/Form 102-103 filing gap) WITHOUT inventing
 * thresholds or program names not in IN-FACTS. NO street address (areaServed-only); NO franchise
 * tax (that is a DE concept, not IN). Indiana sales tax AND payroll withholding are trust-fund.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. Review proof = the 2 real
 * Clutch reviews on the IN pillar (not duplicated here); NO review-card, NO AggregateRating. No
 * founder/personal name in visible content; David Westgate only in reviewedBy schema @id. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DISCLOSURE BOUNDARIES — explicit "what we are not / do not" checks-list, rendered in the
  // first body section directly under the above-the-fold in-brief disclosure. Sheet-7 #1.
  boundaries: [
    "<strong>Not a CPA, EA, tax attorney, or law firm.</strong> TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm.",
    "<strong>Not affiliated with the IRS, the Indiana Department of Revenue, the county assessor, the DLGF, or any government agency.</strong> Nothing on this page is official guidance from a tax authority.",
    "<strong>We do not represent you before any tax authority</strong> and we do not negotiate payment plans, offers, or settlements on your behalf.",
    "<strong>We do not provide tax or legal advice</strong> and we do not file income-tax returns, the sales-tax return, the withholding/county-LIT return, or the business personal-property return (Form 102/103). Those are handled by your CPA, EA, or tax attorney.",
    "<strong>What we do:</strong> rebuild and reconcile the books, quantify the exposure, and assemble an audit-ready records package &mdash; so your licensed tax professional can do their job from real numbers.",
  ],

  // SHORT VERSION — TL;DR prose, reframed so every resolution path is something the client's
  // CPA/EA/attorney pursues. IN-localized (sales tax, withholding, county LIT, business
  // personal property). (H2: The short version.)
  shortVersion: "<strong>Most Indiana business tax problems</strong> &mdash; back sales tax or payroll withholding, unfiled returns, an Indiana Department of Revenue (DOR) estimated assessment, county local income tax (LIT) that doesn&rsquo;t tie to payroll, a missed business personal-property return (Form 102/103) with the county assessor &mdash; share one root cause: the books stopped reconciling, so the business lost track of what it owed and the state filled the gap with its own (often higher) estimate. Indiana does offer real paths out &mdash; a <strong>payment plan</strong> negotiated with the DOR, <strong>voluntary disclosure</strong> for businesses that come forward, <strong>contesting an estimated assessment</strong>, and <strong>curing a sales-tax, withholding/LIT, or Form 102/103 filing gap</strong> &mdash; but those are pursued and filed by your CPA, EA, or tax attorney, not by us. Every one of them needs accurate numbers first. That is the part TechBrot does: we rebuild and <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">reconcile the books</a> for the affected periods so your licensed professional negotiates and files from documented fact instead of the state&rsquo;s estimate. Note: Indiana <strong>sales tax and payroll withholding are trust-fund money</strong> collected and held on the state&rsquo;s behalf, so sales-tax and withholding problems are the most urgent &mdash; responsible persons can face personal exposure.",

  // AI SUMMARY — 5 entity-dense Q&As, resolution attributed to the licensed pro.
  // (H2: Indiana business tax problems, in five questions.)
  aiSummary: [
    { q: "What are my options if I&rsquo;m behind on Indiana taxes?", a: "Indiana offers a <strong>payment plan</strong> with the Department of Revenue, <strong>voluntary disclosure</strong> (coming forward before being caught), <strong>contesting an estimated assessment</strong>, and <strong>curing a sales-tax, withholding/county-LIT, or business personal-property (Form 102/103) filing gap</strong>. Each is pursued and filed by your CPA, EA, or tax attorney &mdash; and each requires accurate numbers, which starts with reconciled books." },
    { q: "Can Indiana take money or property over unpaid business tax?", a: "Yes &mdash; the Department of Revenue can issue a <strong>tax warrant/lien, levy bank accounts, and pursue collection</strong> through the county sheriff or a collection agency. Engaging at the first notice keeps the most options open for your tax professional. We make sure the books behind the number are accurate so your advisor can act on real figures." },
    { q: "Can I be personally liable?", a: "For <strong>trust-fund taxes &mdash; Indiana sales tax and payroll withholding &mdash; yes</strong>. Both are collected and held on the state&rsquo;s behalf, so responsible persons can be pursued personally, which makes those problems the most urgent. Clean records showing who controlled funds and what was actually collected or withheld matter a great deal, and that is the records work we do." },
    { q: "How do messy books cause this?", a: "Unreconciled books mean drifted filings and missed returns; the state then <strong>estimates in its own favor</strong> and issues an assessment, or the 7% sales tax collected goes untracked until the notice arrives. Reconstructing accurate books frequently reduces an estimated assessment to the true, lower figure &mdash; or shows the liability was a reporting error, not real tax owed." },
    { q: "What does TechBrot actually do?", a: "We rebuild and reconcile the books for the affected periods, quantify the real exposure, and assemble an audit-ready records package. We do <strong>not</strong> negotiate, file, or represent you &mdash; your CPA, EA, or tax attorney uses our documented figures to pursue a payment plan, voluntary disclosure, or to contest an assessment. We handle the numbers; they handle the filing and representation." },
  ],

  // RESOLUTION PATHS — grid-3 buyer-cards. Each frames the path as something the licensed pro
  // pursues from reconciled books. IN programs framed qualitatively (no invented thresholds).
  paths: [
    { signal: "Pay over time", title: "Payment plan with the Department of Revenue", body: "Pays the liability over time under terms agreed with the Indiana DOR; interest and penalties keep accruing and a missed payment can default it. Your CPA or tax attorney requests and manages the plan; we supply the reconciled figures it stands on." },
    { signal: "Come forward first", title: "Voluntary disclosure", body: "For businesses that come forward before being caught &mdash; can reduce penalty and look-back exposure on unpaid or unregistered liabilities, common where out-of-state shippers cross Indiana&rsquo;s nexus line. It requires disclosing accurate figures, which is exactly what a reconstructed, reconciled set of books produces. Your tax professional handles the disclosure itself." },
    { signal: "Disprove the estimate", title: "Contesting an estimated assessment", body: "When the state estimated because returns or books were missing, reconstructing the real numbers often reduces the assessment substantially &mdash; or shows it was a reporting error. We rebuild the books that establish the true figure; your advisor files the protest by the deadline on the notice." },
    { signal: "Cure the gap", title: "Sales-tax, withholding/LIT, or Form 102/103 gap", body: "An unfiled sales-tax or withholding return, county LIT that doesn&rsquo;t tie to payroll, or a missed business personal-property return (Form 102/103, where the 2026 exemption must still be declared) can drive a notice. We reconcile the books and confirm the figure; your CPA, EA, or assessor-side preparer files what restores compliance." },
  ],

  // WHY FIX BOOKS FIRST — section prose + a term definition. (H2: Why "fix the books first"
  // isn't a delay — it's the leverage)
  leverageBody: [
    "It&rsquo;s tempting to start dealing with the state immediately. But every Indiana resolution path &mdash; payment plan, voluntary disclosure, contesting an assessment, curing a filing gap &mdash; is only as strong as the numbers behind it, and all of them are run by a licensed tax professional, not by a bookkeeper. Negotiating against the state&rsquo;s <em>estimate</em> when you can&rsquo;t prove your real figures means accepting their number. Reconstructing accurate books first frequently reveals the true liability is far lower, or that a chunk of it was a reporting error rather than tax actually owed.",
    "That&rsquo;s the order that works: we reconcile the affected periods and establish the true number, then your CPA or tax attorney takes the strongest available path from a position of strength. We do the books part fast; they do the negotiation, filing, and representation. We never speak to the Department of Revenue on your behalf and we never advise on which legal path to take &mdash; that judgment belongs to your licensed professional.",
  ],
  leverageTerm: "Estimated assessment",
  leverageDef: "<strong>When returns or records are missing, the Indiana Department of Revenue estimates what you owe &mdash; and the estimate is rarely in your favor.</strong> It becomes the number you must disprove. Reconciled books are how you replace the state&rsquo;s guess with documented fact, which is the single highest-leverage move in any Indiana tax-problem case. Producing those reconciled books is the work TechBrot does; using them to contest the assessment is the work your tax professional does.",

  // ENGAGEMENT SPLIT — grid-2 buyer-cards with two frozen H3s. The single most important
  // honesty section. (H2: How an Indiana tax-problem engagement splits.)
  splitDo: [
    "Cleanup &amp; catch-up of the affected periods",
    "Reconciling accounts to establish the true liability",
    "Rebuilding missing or messy records to a CPA-ready standard",
    "Confirming the sales-tax, withholding/LIT, and Form 102/103 figures in the books",
    "Assembling an audit-ready records package with documented figures",
    "Ongoing monthly books so the problem doesn&rsquo;t return",
  ],
  splitDont: [
    "Negotiating the payment plan, voluntary disclosure, or settlement",
    "Filing returns, the sales-tax return, the withholding/LIT return, or the business personal-property return",
    "Representation before the Indiana Department of Revenue, the county assessor, the IRS, and in audits",
    "Tax and legal strategy &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs. accountant &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name). Area-served only; no address.
  reviewCreds: [
    { label: "Reviewed by", detail: "The Certified QuickBooks ProAdvisor team at TechBrot Inc. &middot; reviewed against Indiana Department of Revenue and DLGF guidance" },
    { label: "Scope", detail: "Books reconstruction, reconciliation, and audit-ready records &middot; no negotiation, filing, or representation (handled by your CPA, EA, or tax attorney)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; serving Indiana businesses statewide, remotely" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; not affiliated with Intuit Inc., the Indiana Department of Revenue, or any tax authority" },
  ],

  // FAQ — 8 Q/A, answer-first, Indiana-specific. A8 weaves the phone (Option C call-intent).
  // Every answer attributes resolution/filing/representation to the licensed pro. visible
  // faq__list = FAQPage schema (same array). (H2: Indiana business tax problem questions.)
  faq: [
    { q: "What counts as an Indiana business tax problem?", a: "Anything from back sales tax or payroll withholding or unfiled returns, to an Indiana Department of Revenue estimated assessment, county LIT that doesn&rsquo;t tie to payroll, a missed business personal-property return (Form 102/103), books too messy to file from, or a notice you don&rsquo;t understand. Most problems share one root cause: the books fell behind or stopped reconciling, so the business lost visibility into what it actually owed. Fixing the books is usually the first real step out." },
    { q: "I&rsquo;m behind on Indiana taxes &mdash; what are my options?", a: "Indiana offers several paths. A payment plan with the Department of Revenue lets you pay over time. Voluntary disclosure can reduce penalty and look-back exposure for businesses that come forward before being caught. An estimated assessment can be contested with accurate figures, and a sales-tax, withholding/LIT, or Form 102/103 filing gap can be cured. Each requires accurate numbers to pursue &mdash; which starts with reconciled books. TechBrot rebuilds and reconciles those books; the path itself is requested, negotiated, and filed by your CPA, EA, or tax attorney." },
    { q: "Can Indiana take money or property over unpaid business tax?", a: "Yes. After notices go unanswered, the Department of Revenue can issue a tax warrant that becomes a judgment and lien, levy bank accounts, and pursue collection through the county sheriff or a collection agency. The earlier you engage &mdash; ideally at the first notice &mdash; the more options stay open and the less it costs. We help by getting the books accurate fast so your tax professional can respond on real figures; we do not contact the state or represent you ourselves." },
    { q: "Can I be personally liable for my business&rsquo;s Indiana taxes?", a: "For certain taxes, yes. Indiana sales tax and payroll withholding are trust-fund taxes &mdash; money collected and held on the state&rsquo;s behalf &mdash; so responsible persons can be pursued personally for unpaid amounts. This is why sales-tax and payroll problems are urgent in a way that some other liabilities aren&rsquo;t. Clean records that show who controlled funds and what was actually collected or withheld matter a great deal here." },
    { q: "How do messy books cause Indiana tax problems?", a: "When books aren&rsquo;t reconciled, sales-tax and withholding filings drift from reality, returns get missed, the 7% sales tax collected goes untracked, and the business can&rsquo;t prove its real numbers when the state asks. The state then estimates &mdash; almost always in its own favor &mdash; and issues an assessment. Reconstructing accurate books frequently reduces an estimated assessment to the true (lower) figure, or shows the liability was a reporting error, not real tax owed." },
    { q: "How does TechBrot help with Indiana business tax problems?", a: "We rebuild and reconcile the books for the periods in question &mdash; cleanup and catch-up to a CPA-ready standard &mdash; and produce documented figures that show what was actually owed, including the sales-tax, withholding/LIT, and business personal-property positions. That gives your CPA or tax attorney the foundation to negotiate a payment plan, pursue voluntary disclosure, or contest an estimated assessment. We handle the numbers; the filing, negotiation, and representation are done by your CPA or attorney." },
    { q: "Is it too late if I already have a tax warrant or a lien?", a: "No. A tax warrant or lien narrows options but doesn&rsquo;t close them &mdash; payment plans, voluntary disclosure, and contesting an over-stated assessment are still available, and accurate books strengthen every one of them. The priority becomes establishing the true liability quickly and getting a credible payment or resolution path in front of the state before collection escalates further. TechBrot establishes that true liability through reconciled books; your CPA, EA, or tax attorney is the one who files and puts the resolution path in front of the state." },
    { q: "What&rsquo;s the first step to fixing an Indiana business tax problem?", a: "Get the books current and reconciled for the affected periods, so you and your advisor know the real number &mdash; not the state&rsquo;s estimate. From there the path (payment plan, voluntary disclosure, contesting an assessment, or curing a filing gap) becomes clear. Book a free review, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>, and we&rsquo;ll scope the cleanup needed to get you there &mdash; then coordinate the documented numbers to your CPA or tax attorney." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/business-tax-problems/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Business Tax Problems","description":"Help for Indiana businesses facing tax problems — back sales tax or payroll withholding, unfiled returns, estimated assessments from the Department of Revenue, county LIT mismatches, or a missed business personal-property return (Form 102/103) — by rebuilding and reconciling the books so the true liability is established. TechBrot is an independent Certified QuickBooks ProAdvisor firm; it does not negotiate, file, or represent clients before any tax authority — it coordinates with the client's CPA, EA, or tax attorney, who handles resolution.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-business-tax-problems-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-biztax-short","#in-svc-biztax-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Business Tax Problems"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Business Tax Problem Bookkeeping Support","serviceType":"Bookkeeping reconstruction and reconciliation support","description":"Cleanup, catch-up, and reconciliation for Indiana businesses with back taxes, estimated assessments, unfiled returns, county LIT mismatches, or a missed business personal-property return — rebuilding the books so the true liability is established and an audit-ready records package is produced. Independent Certified QuickBooks ProAdvisor firm; does NOT negotiate, file, or represent clients before the IRS, the Indiana Department of Revenue, or the county assessor — coordinates with the client's CPA, EA, or tax attorney, who handles resolution, filing, and representation.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana businesses with tax notices, assessments, or liabilities"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

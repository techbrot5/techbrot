/* /find-an-accountant/delaware/business-tax-problems/ — Delaware HONEST-TRIAGE SERVICE child.
 * Data-file shape mirrors the NY same-named exemplar
 * (find-an-accountant/new-york/business-tax-problems.11tydata.js): JSON front-matter lives in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is
 * generated from the same `faq` array the visible faq__list renders from — single source of truth.
 *
 * ── SHEET-7 HONEST-TRIAGE (ABSOLUTE) ───────────────────────────────────────────────
 * One of the most honesty-sensitive pages on the site. TechBrot is an independent
 * bookkeeping / Certified QuickBooks ProAdvisor firm. It is NOT a CPA, EA, tax attorney, or
 * law firm; NOT a registered agent; NOT affiliated with the IRS, the Delaware Division of
 * Revenue, the Division of Corporations, or any government agency. It does NOT represent
 * clients before any tax authority, does NOT negotiate settlements/offers/payment plans, does
 * NOT provide tax or legal advice, and does NOT file income-tax returns, the franchise tax, or
 * the annual report. What it ACTUALLY does: reconstruct/clean the books, reconcile accounts,
 * quantify exposure, assemble an audit-ready records package, and COORDINATE WITH the client's
 * CPA / EA / tax attorney who handles filing, response, and representation. Every benefit is
 * framed as books/records work that makes the licensed professional's job possible — never as
 * resolving the tax matter ourselves. The disclosure banner renders ABOVE THE FOLD (inBrief,
 * rendered directly under the hero) and is reinforced by a checks-list of boundaries in the
 * first body section. NEVER "official"; no government/Intuit-affiliation implication; no
 * promised tax outcome.
 *
 * DE FIGURES: only DE-FACTS figures used (franchise-tax late penalty $200 + 1.5%/mo interest;
 * corp due March 1, LLC/LP $300 due June 1; corporate income tax 8.7%). DE resolution programs
 * are framed qualitatively (payment plan, voluntary disclosure, contesting an estimate, curing
 * a delinquency) WITHOUT inventing thresholds or program names not in DE-FACTS. Delaware has NO
 * sales tax, so the trust-fund/personal-liability angle is WITHHOLDING tax, not sales tax.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. Review proof = the 2 real
 * Clutch reviews on the DE pillar (not duplicated here); NO review-card, NO AggregateRating. No
 * founder/personal name in visible content; David Westgate only in reviewedBy schema @id. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DISCLOSURE BOUNDARIES — explicit "what we are not / do not" checks-list, rendered in the
  // first body section directly under the above-the-fold in-brief disclosure. Sheet-7 #1.
  boundaries: [
    "<strong>Not a CPA, EA, tax attorney, or law firm.</strong> TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm.",
    "<strong>Not a registered agent, and not affiliated with the IRS, the Delaware Division of Revenue, the Division of Corporations, or any government agency.</strong> Nothing on this page is official guidance from a tax authority.",
    "<strong>We do not represent you before any tax authority</strong> and we do not negotiate payment plans, offers, or settlements on your behalf.",
    "<strong>We do not provide tax or legal advice</strong> and we do not file income-tax returns, the franchise tax, or the annual report. Those are handled by your CPA, EA, tax attorney, or registered agent.",
    "<strong>What we do:</strong> rebuild and reconcile the books, quantify the exposure, and assemble an audit-ready records package &mdash; so your licensed tax professional can do their job from real numbers.",
  ],

  // SHORT VERSION — TL;DR prose, reframed so every resolution path is something the client's
  // CPA/EA/attorney pursues. DE-localized (gross receipts, withholding, franchise tax, estimated
  // assessment). (H2: The short version.)
  shortVersion: "<strong>Most Delaware business tax problems</strong> &mdash; back gross-receipts or withholding tax, unfiled returns, a Division of Revenue estimated assessment, a franchise-tax or annual-report delinquency with the Division of Corporations &mdash; share one root cause: the books stopped reconciling, so the business lost track of what it owed and the state filled the gap with its own (often higher) estimate. Delaware does offer real paths out &mdash; a <strong>payment plan</strong> negotiated with the Division of Revenue, <strong>voluntary disclosure</strong> for businesses that come forward, <strong>contesting an estimated assessment</strong>, and <strong>curing a franchise-tax/annual-report delinquency</strong> (a $200 penalty plus 1.5%/month interest accrues on a late corporate filing) &mdash; but those are pursued and filed by your CPA, EA, tax attorney, or registered agent, not by us. Every one of them needs accurate numbers first. That is the part TechBrot does: we rebuild and <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">reconcile the books</a> for the affected periods so your licensed professional negotiates and files from documented fact instead of the state&rsquo;s estimate. Note: Delaware <strong>withholding tax is trust-fund money</strong> held on the state&rsquo;s behalf, so withholding and payroll problems are the most urgent &mdash; responsible persons can face personal exposure.",

  // AI SUMMARY — 5 entity-dense Q&As, resolution attributed to the licensed pro.
  // (H2: Delaware business tax problems, in five questions.)
  aiSummary: [
    { q: "What are my options if I&rsquo;m behind on Delaware taxes?", a: "Delaware offers a <strong>payment plan</strong> with the Division of Revenue, <strong>voluntary disclosure</strong> (coming forward before being caught), <strong>contesting an estimated assessment</strong>, and <strong>curing a franchise-tax/annual-report delinquency</strong> with the Division of Corporations. Each is pursued and filed by your CPA, EA, tax attorney, or registered agent &mdash; and each requires accurate numbers, which starts with reconciled books." },
    { q: "Can Delaware take money or property over unpaid business tax?", a: "Yes &mdash; the Division of Revenue can issue a <strong>judgment/lien, levy bank accounts, and pursue collection</strong>, and an unpaid franchise tax can push a corporation out of good standing toward <strong>void status</strong>. Engaging at the first notice keeps the most options open for your tax professional. We make sure the books behind the number are accurate so your advisor can act on real figures." },
    { q: "Can I be personally liable?", a: "For <strong>trust-fund taxes &mdash; Delaware withholding tax &mdash; yes</strong>. Withholding is collected and held on the state&rsquo;s behalf, so responsible persons can be pursued personally, which makes those problems the most urgent. Clean records showing who controlled funds and what was actually withheld matter a great deal, and that is the records work we do." },
    { q: "How do messy books cause this?", a: "Unreconciled books mean drifted filings and missed returns; the state then <strong>estimates in its own favor</strong> and issues an assessment, or the franchise-tax reserve goes untracked until the delinquency notice arrives. Reconstructing accurate books frequently reduces an estimated assessment to the true, lower figure &mdash; or shows the liability was a reporting error, not real tax owed." },
    { q: "What does TechBrot actually do?", a: "We rebuild and reconcile the books for the affected periods, quantify the real exposure, and assemble an audit-ready records package. We do <strong>not</strong> negotiate, file, or represent you &mdash; your CPA, EA, or tax attorney uses our documented figures to pursue a payment plan, voluntary disclosure, or to contest an assessment. We handle the numbers; they handle the filing and representation." },
  ],

  // RESOLUTION PATHS — grid-3 buyer-cards. Each frames the path as something the licensed pro
  // pursues from reconciled books. DE programs framed qualitatively (no invented thresholds).
  paths: [
    { signal: "Pay over time", title: "Payment plan with the Division of Revenue", body: "Pays the liability over time under terms agreed with the Division of Revenue; interest and penalties keep accruing and a missed payment can default it. Your CPA or tax attorney requests and manages the plan; we supply the reconciled figures it stands on." },
    { signal: "Come forward first", title: "Voluntary disclosure", body: "For businesses that come forward before being caught &mdash; can reduce penalty and criminal exposure on unpaid or unregistered liabilities. It requires disclosing accurate figures, which is exactly what a reconstructed, reconciled set of books produces. Your tax professional handles the disclosure itself." },
    { signal: "Disprove the estimate", title: "Contesting an estimated assessment", body: "When the state estimated because returns or books were missing, reconstructing the real numbers often reduces the assessment substantially &mdash; or shows it was a reporting error. We rebuild the books that establish the true figure; your advisor files the protest by the deadline on the notice." },
    { signal: "Cure the delinquency", title: "Franchise-tax / annual-report delinquency", body: "An overdue franchise tax or annual report (a $200 penalty plus 1.5%/month interest on a late corporate filing) can cost a corporation its good standing. We confirm the reserve and the lower calculation method in the books; your registered agent or CPA files the report and pays to restore standing." },
  ],

  // WHY FIX BOOKS FIRST — section prose + a term definition. (H2: Why "fix the books first"
  // isn't a delay — it's the leverage)
  leverageBody: [
    "It&rsquo;s tempting to start dealing with the state immediately. But every Delaware resolution path &mdash; payment plan, voluntary disclosure, contesting an assessment, curing a delinquency &mdash; is only as strong as the numbers behind it, and all of them are run by a licensed tax professional or your registered agent, not by a bookkeeper. Negotiating against the state&rsquo;s <em>estimate</em> when you can&rsquo;t prove your real figures means accepting their number. Reconstructing accurate books first frequently reveals the true liability is far lower, or that a chunk of it was a reporting error rather than tax actually owed.",
    "That&rsquo;s the order that works: we reconcile the affected periods and establish the true number, then your CPA or tax attorney takes the strongest available path from a position of strength. We do the books part fast; they do the negotiation, filing, and representation. We never speak to the Division of Revenue on your behalf and we never advise on which legal path to take &mdash; that judgment belongs to your licensed professional.",
  ],
  leverageTerm: "Estimated assessment",
  leverageDef: "<strong>When returns or records are missing, the Delaware Division of Revenue estimates what you owe &mdash; and the estimate is rarely in your favor.</strong> It becomes the number you must disprove. Reconciled books are how you replace the state&rsquo;s guess with documented fact, which is the single highest-leverage move in any Delaware tax-problem case. Producing those reconciled books is the work TechBrot does; using them to contest the assessment is the work your tax professional does.",

  // ENGAGEMENT SPLIT — grid-2 buyer-cards with two frozen H3s. The single most important
  // honesty section. (H2: How a Delaware tax-problem engagement splits.)
  splitDo: [
    "Cleanup &amp; catch-up of the affected periods",
    "Reconciling accounts to establish the true liability",
    "Rebuilding missing or messy records to a CPA-ready standard",
    "Confirming the gross-receipts and franchise-tax figures in the books",
    "Assembling an audit-ready records package with documented figures",
    "Ongoing monthly books so the problem doesn&rsquo;t return",
  ],
  splitDont: [
    "Negotiating the payment plan, voluntary disclosure, or settlement",
    "Filing returns, the franchise tax, the annual report, or resolution paperwork",
    "Representation before the Division of Revenue, the IRS, and in audits",
    "Acting as your Delaware registered agent",
    "Tax and legal strategy &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs. accountant &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  reviewCreds: [
    { label: "Reviewed by", detail: "The Certified QuickBooks ProAdvisor team at TechBrot Inc. &middot; reviewed against Delaware Division of Revenue and Division of Corporations guidance" },
    { label: "Scope", detail: "Books reconstruction, reconciliation, and audit-ready records &middot; no negotiation, filing, or representation (handled by your CPA, EA, or tax attorney)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file &middot; Middletown, DE office" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; not a registered agent &middot; not affiliated with Intuit Inc. or any tax authority" },
  ],

  // FAQ — 8 Q/A, answer-first, Delaware-specific. A8 weaves the phone (Option C call-intent).
  // Every answer attributes resolution/filing/representation to the licensed pro. visible
  // faq__list = FAQPage schema (same array). (H2: Delaware business tax problem questions.)
  faq: [
    { q: "What counts as a Delaware business tax problem?", a: "Anything from back gross-receipts or withholding tax or unfiled returns, to a Division of Revenue estimated assessment, a franchise-tax or annual-report delinquency, books too messy to file from, or a notice you don&rsquo;t understand. Most problems share one root cause: the books fell behind or stopped reconciling, so the business lost visibility into what it actually owed. Fixing the books is usually the first real step out." },
    { q: "I&rsquo;m behind on Delaware taxes &mdash; what are my options?", a: "Delaware offers several paths. A payment plan with the Division of Revenue lets you pay over time. Voluntary disclosure can reduce penalty and criminal exposure for businesses that come forward before being caught. An estimated assessment can be contested with accurate figures, and a franchise-tax/annual-report delinquency can be cured with the Division of Corporations. Each requires accurate numbers to pursue &mdash; which starts with reconciled books. TechBrot rebuilds and reconciles those books; the path itself is requested, negotiated, and filed by your CPA, EA, tax attorney, or registered agent." },
    { q: "Can Delaware take money or property over unpaid business tax?", a: "Yes. After notices go unanswered, the Division of Revenue can secure a judgment and lien, levy bank accounts, and pursue collection, and an unpaid franchise tax can push a corporation out of good standing toward void status with the Division of Corporations. The earlier you engage &mdash; ideally at the first notice &mdash; the more options stay open and the less it costs. We help by getting the books accurate fast so your tax professional can respond on real figures; we do not contact the state or represent you ourselves." },
    { q: "Can I be personally liable for my business&rsquo;s Delaware taxes?", a: "For certain taxes, yes. Delaware withholding tax is a trust-fund tax &mdash; money collected and held on the state&rsquo;s behalf &mdash; so responsible persons can be pursued personally for unpaid withholding. This is why withholding and payroll problems are urgent in a way that some other liabilities aren&rsquo;t. Clean records that show who controlled funds and what was actually withheld matter a great deal here." },
    { q: "How do messy books cause Delaware tax problems?", a: "When books aren&rsquo;t reconciled, gross-receipts and withholding filings drift from reality, returns get missed, the franchise-tax reserve goes untracked, and the business can&rsquo;t prove its real numbers when the state asks. The state then estimates &mdash; almost always in its own favor &mdash; and issues an assessment. Reconstructing accurate books frequently reduces an estimated assessment to the true (lower) figure, or shows the liability was a reporting error, not real tax owed." },
    { q: "How does TechBrot help with Delaware business tax problems?", a: "We rebuild and reconcile the books for the periods in question &mdash; cleanup and catch-up to a CPA-ready standard &mdash; and produce documented figures that show what was actually owed, including the gross-receipts and franchise-tax positions. That gives your CPA or tax attorney the foundation to negotiate a payment plan, pursue voluntary disclosure, or contest an estimated assessment. We handle the numbers; the filing, negotiation, and representation are done by your CPA or attorney." },
    { q: "Is it too late if I already have a lien or a void corporation?", a: "No. A lien or a voided corporation narrows options but doesn&rsquo;t close them &mdash; payment plans, voluntary disclosure, and restoring good standing are still available, and accurate books strengthen every one of them. The priority becomes establishing the true liability quickly and getting a credible payment or resolution path in front of the state before collection escalates further. TechBrot establishes that true liability through reconciled books; your CPA, EA, tax attorney, or registered agent is the one who files and puts the resolution path in front of the state." },
    { q: "What&rsquo;s the first step to fixing a Delaware business tax problem?", a: "Get the books current and reconciled for the affected periods, so you and your advisor know the real number &mdash; not the state&rsquo;s estimate. From there the path (payment plan, voluntary disclosure, contesting an assessment, or curing a delinquency) becomes clear. Book a free review, or call <a href=\"tel:+18777515575\">(877) 751-5575</a>, and we&rsquo;ll scope the cleanup needed to get you there &mdash; then coordinate the documented numbers to your CPA or tax attorney." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/business-tax-problems/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Business Tax Problems","description":"Help for Delaware businesses facing tax problems — back gross-receipts or withholding tax, unfiled returns, estimated assessments, or a franchise-tax/annual-report delinquency — by rebuilding and reconciling the books so the true liability is established. TechBrot is an independent Certified QuickBooks ProAdvisor firm; it does not negotiate, file, act as a registered agent, or represent clients before any tax authority — it coordinates with the client's CPA, EA, or tax attorney, who handles resolution.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-business-tax-problems.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-biztax-short","#de-svc-biztax-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Business Tax Problems"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Business Tax Problem Bookkeeping Support","serviceType":"Bookkeeping reconstruction and reconciliation support","description":"Cleanup, catch-up, and reconciliation for Delaware businesses with back taxes, estimated assessments, unfiled returns, or a franchise-tax/annual-report delinquency — rebuilding the books so the true liability is established and an audit-ready records package is produced. Independent Certified QuickBooks ProAdvisor firm; does NOT negotiate, file, act as a registered agent, or represent clients before the IRS, the Delaware Division of Revenue, or the Division of Corporations — coordinates with the client's CPA, EA, or tax attorney, who handles resolution, filing, and representation.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware businesses with tax notices, assessments, delinquencies, or liabilities"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/new-york/business-tax-problems/ — t-location NY HONEST-TRIAGE
 * SERVICE child. Sources: FROZEN EQUITY CONTRACT (contract-ny-svc-biztax.txt) — the ONLY
 * authority for the headings + the 8 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/business-tax-problems/index.html, full body read) for body
 * prose only. Data-file shape mirrors industries/construction.11tydata.js: JSON front-matter
 * lives in the .njk; this file supplies the content arrays + an eleventyComputed pageGraph
 * emitting the schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage
 * mainEntity is generated from the same `faq` array the visible faq__list renders from —
 * single source of truth.
 *
 * ── SHEET-7 HONEST-TRIAGE (ABSOLUTE) ───────────────────────────────────────────────
 * This is one of the most honesty-sensitive pages on the site. TechBrot is an independent
 * bookkeeping / Certified QuickBooks ProAdvisor firm. It is NOT a CPA, EA, tax attorney, or
 * law firm; NOT affiliated with the IRS, the NYS Department of Taxation and Finance, or any
 * government agency. It does NOT represent clients before any tax authority, does NOT
 * negotiate settlements/offers/installment agreements, does NOT provide tax or legal advice,
 * and does NOT file income-tax returns. What TechBrot ACTUALLY does: reconstruct/clean the
 * books behind the problem, reconcile accounts, quantify the exposure, assemble an
 * audit-ready records package, and COORDINATE WITH the client's CPA / EA / tax attorney who
 * handles the filing, response, and representation. Every benefit is framed as books/records
 * work that makes the licensed professional's job possible — never as resolving the tax
 * matter ourselves. The disclosure banner renders ABOVE THE FOLD (in the inBrief block,
 * which the t-location layout renders directly under the hero) and is reinforced by a
 * checks-list of explicit boundaries in the first body section. NEVER "official"; no
 * government/Intuit-affiliation implication; no promised tax outcome.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. The only review proof is
 * the 2 real Clutch reviews (carried on the NY pillar, not duplicated here) — this page renders
 * NO review-card and NO AggregateRating. No founder/personal name in visible content (firm-level
 * review byline only; David Westgate appears ONLY in the reviewedBy schema @id). Footer chrome
 * (Accounting/QuickBooks/Company/Network) and the newsletter ("The monthly brief.") are
 * intentionally NOT rendered here — global chrome owns them.
 *
 * ── HONESTY REFRAMES (every baseline line reframed for honest-triage is flagged here) ──
 *  R-1  Baseline hero/meta said "See your options — installment agreement, voluntary
 *       disclosure, offer in compromise". REFRAMED so the firm presents these as paths your
 *       CPA/EA/attorney pursues using the reconciled books we deliver — never paths we run.
 *  R-2  Baseline CTAs ("Get a Free Situation Review", "Get a Free Situation Review") routed
 *       to a generic "situation review". REFRAMED to the canonical lexicon: "Book the
 *       discovery call" (scope the books work + coordinate with your tax pro) and "Get the
 *       free file review". No "we fix your tax problem" framing.
 *  R-3  Baseline FAQ A2 / A3 / A7 listed resolution paths (IPA, VDC, OIC, warrant
 *       satisfaction) in a way that could read as TechBrot running them. ANSWERS reframed to
 *       attribute the pursuit/negotiation/representation to the CPA/EA/attorney and the books
 *       reconstruction to TechBrot. Original facts preserved verbatim; honest-scope clause
 *       appended where the original stopped short of naming who does what.
 *  R-4  Baseline expert-review credential line named "David Westgate · 40+ years...".
 *       REFRAMED to firm-level ("the Certified QuickBooks ProAdvisor team"); David Westgate
 *       retained ONLY in reviewedBy schema @id per R9.
 *  R-5  Baseline body ("It's tempting to call a resolution firm and start negotiating
 *       immediately") implied negotiation as something happening in-house. Body prose carried
 *       forward but framed strictly as: reconcile first, then YOUR licensed pro negotiates.
 *  Note: FAQ A1, A4, A5, A6, A8 are factual/already-honest and are carried VERBATIM
 *        (A6 already states "We handle the numbers; the filing, negotiation, and representation
 *        are done by your CPA or attorney" — no reframe needed). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DISCLOSURE BOUNDARIES — explicit "what we are not / do not" checks-list, rendered in the
  // first body section directly under the above-the-fold in-brief disclosure. Sheet-7 #1.
  boundaries: [
    "<strong>Not a CPA, EA, tax attorney, or law firm.</strong> TechBrot is an independent bookkeeping and Certified QuickBooks ProAdvisor firm.",
    "<strong>Not affiliated with the IRS, the NYS Department of Taxation and Finance, or any government agency.</strong> Nothing on this page is official guidance from a tax authority.",
    "<strong>We do not represent you before any tax authority</strong> and we do not negotiate installment agreements, offers in compromise, or settlements on your behalf.",
    "<strong>We do not provide tax or legal advice</strong> and we do not file income-tax returns. Those are handled by your CPA, EA, or tax attorney.",
    "<strong>What we do:</strong> rebuild and reconcile the books, quantify the exposure, and assemble an audit-ready records package &mdash; so your licensed tax professional can do their job from real numbers.",
  ],

  // SHORT VERSION — the baseline TL;DR prose, reframed so every resolution path is something
  // the client's CPA/EA/attorney pursues. (H2: The short version.) [REFRAME R-1, R-5]
  shortVersion: "<strong>Most New York business tax problems</strong> &mdash; back sales or payroll tax, unfiled returns, a <a href=\"/find-an-accountant/new-york/\">New York State tax warrant</a>, an estimated assessment &mdash; share one root cause: the books stopped reconciling, so the business lost track of what it owed and the state filled the gap with its own (higher) estimate. New York does offer real paths out &mdash; an <strong>Installment Payment Agreement</strong> (requestable online if you owe $20,000 or less and can clear it within 36 months), the <strong>Voluntary Disclosure and Compliance program</strong>, and an <strong>Offer in Compromise</strong> for genuine hardship &mdash; but those are pursued and filed by your CPA, EA, or tax attorney, not by us. Every one of them needs accurate numbers first. That is the part TechBrot does: we rebuild and <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">reconcile the books</a> for the affected periods so your licensed tax professional negotiates and files from documented fact instead of the state&rsquo;s estimate. Note: New York can pursue <strong>responsible persons personally</strong> for trust-fund taxes, so sales- and payroll-tax problems are urgent.",

  // AI SUMMARY — 5 entity-dense Q&As mirroring the baseline five-question block, reframed to
  // attribute pursuit/negotiation/representation to the licensed pro. (H2: New York business
  // tax problems, in five questions.) [REFRAME R-1]
  aiSummary: [
    { q: "What are my options if I&rsquo;m behind on New York taxes?", a: "New York offers an <strong>Installment Payment Agreement</strong> (online if you owe $20,000 or less and can pay within 36 months), the <strong>Voluntary Disclosure and Compliance program</strong> (penalty relief and avoided criminal exposure for coming forward), or an <strong>Offer in Compromise</strong> for genuine hardship. Each is pursued and filed by your CPA, EA, or tax attorney &mdash; and each requires accurate numbers, which starts with reconciled books." },
    { q: "Can New York take money or property over unpaid business tax?", a: "Yes &mdash; <strong>tax warrants, income executions, bank levies, license suspension, and asset seizure</strong>, plus IRS refund interception. Engaging at the first notice keeps the most options open for your tax professional. We make sure the books behind the number are accurate so your advisor can act on real figures." },
    { q: "Can I be personally liable?", a: "For <strong>trust-fund taxes &mdash; sales tax and withholding &mdash; yes</strong>. New York can pursue &lsquo;responsible persons&rsquo; personally, which is why those problems are the most urgent. Clean records showing who controlled funds and what was actually collected matter a great deal, and that is the records work we do." },
    { q: "How do messy books cause this?", a: "Unreconciled books mean drifted filings and missed returns; the state then <strong>estimates in its own favor</strong> and issues an assessment. Reconstructing accurate books frequently reduces an estimated assessment to the true, lower figure &mdash; or shows the liability was a reporting error, not real tax owed." },
    { q: "What does TechBrot actually do?", a: "We rebuild and reconcile the books for the affected periods, quantify the real exposure, and assemble an audit-ready records package. We do <strong>not</strong> negotiate, file, or represent you &mdash; your CPA, EA, or tax attorney uses our documented figures to pursue an IPA, voluntary disclosure, or to contest an assessment. We handle the numbers; they handle the filing and representation." },
  ],

  // RESOLUTION PATHS — baseline reference table carried as grid-3 buyer-cards (cobalt has no
  // table primitive in the allowed vocab; buyer-card grid is the cobalt equivalent). Each
  // card frames the path as something the licensed pro pursues from reconciled books.
  // (Lives under the H2: New York business tax problems, in five questions. region context —
  // rendered as its own no-new-H2 supporting block.) [REFRAME R-1]
  paths: [
    { signal: "Pay over time", title: "Installment Payment Agreement (IPA)", body: "Pays the liability over time &mdash; requestable online if you owe $20,000 or less and can clear it within 36 months; larger balances are negotiated directly with the Department. Interest and penalties keep accruing and a missed payment defaults it. Your CPA or tax attorney requests and manages it; we supply the reconciled figures it stands on." },
    { signal: "Come forward first", title: "Voluntary Disclosure &amp; Compliance", body: "For businesses that come forward before being caught &mdash; can waive penalties and avoid criminal exposure on unpaid or unregistered liabilities. It requires disclosing accurate figures, which is exactly what a reconstructed, reconciled set of books produces. Your tax professional handles the disclosure itself." },
    { signal: "Genuine hardship", title: "Offer in Compromise", body: "Settles for less than owed where there is insolvency or genuine undue hardship. Requirements are strict and strong documented books are essential to qualify. We assemble the records package; your CPA or tax attorney prepares and submits the offer." },
    { signal: "Disprove the estimate", title: "Contesting an estimated assessment", body: "When the state estimated because returns or books were missing, reconstructing the real numbers often reduces the assessment substantially &mdash; or shows it was a reporting error. We rebuild the books that establish the true figure; your advisor files the contest." },
  ],

  // WHY FIX BOOKS FIRST — baseline body section + term-callout carried as section prose +
  // a definition (rendered as a stack-8 with an eyebrow term, cobalt-style). (H2: Why "fix
  // the books first" isn't a delay — it's the leverage) [REFRAME R-5]
  leverageBody: [
    "It&rsquo;s tempting to start negotiating with the state immediately. But every New York resolution path &mdash; IPA, voluntary disclosure, offer in compromise, contesting an assessment &mdash; is only as strong as the numbers behind it, and all of them are run by a licensed tax professional, not a bookkeeper. Negotiating against the state&rsquo;s <em>estimate</em> when you can&rsquo;t prove your real figures means accepting their number. Reconstructing accurate books first frequently reveals the true liability is far lower, or that a chunk of it was a reporting error rather than tax actually owed.",
    "That&rsquo;s the order that works: we reconcile the affected periods and establish the true number, then your CPA or tax attorney takes the strongest available path from a position of strength. We do the books part fast; they do the negotiation, filing, and representation. We never speak to the Department on your behalf and we never advise on which legal path to take &mdash; that judgment belongs to your licensed professional.",
  ],
  leverageTerm: "Estimated assessment",
  leverageDef: "<strong>When returns or records are missing, New York estimates what you owe &mdash; and the estimate is rarely in your favor.</strong> It becomes the number you must disprove. Reconciled books are how you replace the state&rsquo;s guess with documented fact, which is the single highest-leverage move in any New York tax-problem case. Producing those reconciled books is the work TechBrot does; using them to contest the assessment is the work your tax professional does.",

  // ENGAGEMENT SPLIT — baseline scope-split carried as grid-2 buyer-cards with two frozen
  // H3s. The single most important honesty section. (H2: How a New York tax-problem
  // engagement splits. + H3: TechBrot handles / H3: Your CPA or tax attorney handles)
  splitDo: [
    "Cleanup &amp; catch-up of the affected periods",
    "Reconciling accounts to establish the true liability",
    "Rebuilding missing or messy records to a CPA-ready standard",
    "Assembling an audit-ready records package with documented figures",
    "Ongoing monthly books so the problem doesn&rsquo;t return",
  ],
  splitDont: [
    "Negotiating the IPA, offer in compromise, or voluntary disclosure",
    "Filing returns and resolution paperwork",
    "Representation before the NYS Tax Department, the IRS, and in audits",
    "Tax and legal strategy &mdash; <a href=\"/vs/bookkeeper-vs-accountant/\">bookkeeper vs. accountant &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name). [REFRAME R-4]
  reviewCreds: [
    { label: "Reviewed by", detail: "The Certified QuickBooks ProAdvisor team at TechBrot Inc. &middot; reviewed against NYS Department of Taxation and Finance guidance" },
    { label: "Scope", detail: "Books reconstruction, reconciliation, and audit-ready records &middot; no negotiation, filing, or representation (handled by your CPA, EA, or tax attorney)" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; not affiliated with Intuit Inc. or any tax authority" },
  ],

  // FAQ — 8 Q/A VERBATIM QUESTIONS from the contract. ANSWERS verbatim EXCEPT the three
  // honesty reframes flagged in R-3 (A2, A3, A7), which append/adjust an honest-scope clause
  // so no answer reads as TechBrot running the resolution. visible faq__list = FAQPage schema
  // (same array). (H2: New York business tax problem questions.)
  faq: [
    // A1 — verbatim (already honest).
    { q: "What counts as a New York business tax problem?", a: "Anything from back sales tax or unfiled returns, to a New York State tax warrant, an income execution, a payroll-tax liability, books too messy to file from, or a notice you don&rsquo;t understand. Most problems share one root cause: the books fell behind or stopped reconciling, so the business lost visibility into what it actually owed. Fixing the books is usually the first real step out." },
    // A2 — REFRAME R-3: original facts verbatim; honest-scope clause appended naming who pursues each path.
    { q: "I&rsquo;m behind on New York taxes &mdash; what are my options?", a: "New York offers several paths. An Installment Payment Agreement (IPA) lets you pay over time &mdash; requestable online if you owe $20,000 or less and can clear it within 36 months. The Voluntary Disclosure and Compliance program can waive penalties and avoid criminal exposure for businesses that come forward before being caught. For genuine hardship, an Offer in Compromise settles for less than owed. Each requires accurate numbers to pursue &mdash; which starts with reconciled books. TechBrot rebuilds and reconciles those books; the path itself is requested, negotiated, and filed by your CPA, EA, or tax attorney." },
    // A3 — REFRAME R-3: original verbatim; honest-scope clause appended (engagement = books, not representation).
    { q: "Can New York take money or property over unpaid business tax?", a: "Yes. After notices go unanswered, New York can file a tax warrant (a public lien against the business and sometimes responsible persons), issue an income execution (garnishment), levy bank accounts, suspend licenses, and seize and sell assets. It can also intercept IRS refunds. The earlier you engage &mdash; ideally at the first notice &mdash; the more options stay open and the less it costs. We help by getting the books accurate fast so your tax professional can respond on real figures; we do not contact the Department or represent you ourselves." },
    // A4 — verbatim (already honest).
    { q: "Can I be personally liable for my business&rsquo;s New York taxes?", a: "For certain taxes, yes. New York can pursue &lsquo;responsible persons&rsquo; personally for unpaid sales tax and withholding tax, because those are trust-fund taxes collected on the state&rsquo;s behalf. This is why sales-tax and payroll problems are urgent in a way that some other liabilities aren&rsquo;t. Clean records that show who controlled funds and what was actually collected matter a great deal here." },
    // A5 — verbatim (already honest).
    { q: "How do messy books cause New York tax problems?", a: "When books aren&rsquo;t reconciled, sales-tax filings drift from reality, returns get missed, and the business can&rsquo;t prove its real numbers when the state asks. The state then estimates &mdash; almost always in its own favor &mdash; and issues an assessment. Reconstructing accurate books frequently reduces an estimated assessment to the true (lower) figure, or shows the liability was a reporting error, not real tax owed." },
    // A6 — verbatim (already explicitly honest: "We handle the numbers; the filing, negotiation, and representation are done by your CPA or attorney.").
    { q: "How does TechBrot help with New York business tax problems?", a: "We rebuild and reconcile the books for the periods in question &mdash; cleanup and catch-up to a CPA-ready standard &mdash; and produce documented figures that show what was actually owed. That gives your CPA or tax attorney the foundation to negotiate an IPA, pursue voluntary disclosure, or contest an estimated assessment. We handle the numbers; the filing, negotiation, and representation are done by your CPA or attorney." },
    // A7 — REFRAME R-3: original verbatim; honest-scope clause appended (we establish the number; advisor pursues satisfaction/resolution).
    { q: "Is it too late if I already have a tax warrant?", a: "No. A warrant narrows options but doesn&rsquo;t close them &mdash; installment agreements, offers in compromise, and warrant satisfaction are still available, and accurate books strengthen every one of them. The priority becomes establishing the true liability quickly and getting a credible payment or resolution path in front of the Department before collection escalates further. TechBrot establishes that true liability through reconciled books; your CPA, EA, or tax attorney is the one who puts the resolution path in front of the Department." },
    // A8 — verbatim (already honest).
    { q: "What&rsquo;s the first step to fixing a New York business tax problem?", a: "Get the books current and reconciled for the affected periods, so you and your advisor know the real number &mdash; not the state&rsquo;s estimate. From there the path (IPA, voluntary disclosure, offer in compromise, or contesting an assessment) becomes clear. Book a free review and we&rsquo;ll scope the cleanup needed to get you there." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/business-tax-problems/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York Business Tax Problems","description":"Help for New York businesses facing tax problems — back sales or payroll tax, unfiled returns, tax warrants, or estimated assessments — by rebuilding and reconciling the books so the true liability is established. TechBrot is an independent Certified QuickBooks ProAdvisor firm; it does not negotiate, file, or represent clients before any tax authority — it coordinates with the client's CPA, EA, or tax attorney, who handles resolution.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-business-tax-problems.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-biztax-short","#ny-svc-biztax-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Business Tax Problems"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Business Tax Problem Bookkeeping Support","serviceType":"Bookkeeping reconstruction and reconciliation support","description":"Cleanup, catch-up, and reconciliation for New York businesses with back taxes, warrants, unfiled returns, or estimated assessments — rebuilding the books so the true liability is established and an audit-ready records package is produced. Independent Certified QuickBooks ProAdvisor firm; does NOT negotiate, file, or represent clients before the IRS or the NYS Department of Taxation and Finance — coordinates with the client's CPA, EA, or tax attorney, who handles resolution, filing, and representation.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York businesses with tax notices, warrants, or liabilities"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

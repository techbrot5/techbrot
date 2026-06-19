/* /accounting/industries/law-firm-trust-accounting/ — NEW high-fee industry page.
 * DEEP DIVE on client-trust / IOLTA accounting specifically: three-way reconciliation
 * (trust bank = trust book = sum of client ledgers), per-client/per-matter trust ledgers,
 * earned-vs-unearned retainers, trust-to-operating transfers only as fees are earned, no
 * commingling, why trust is the #1 bar-discipline risk. DISTINCT from the BROAD law-firm
 * hub at /accounting/industries/legal/ — that page is the firm-wide accounting overview and
 * is linked prominently as the hub here, NOT restated. Pattern/structure mirrors the legal
 * sibling: t-mofu, tierClass section--tier-guide, bodyClass page--mofu. CTA canonical lexicon:
 * "Book the discovery call" -> /contact/?intent=accounting; "Get the free file review" ->
 * /quickbooks/file-review/?intent=file-review; "Speak to a ProAdvisor" (tel).
 *
 * TRUST-FUND BOUNDARY (founder ruling — the core of this page, absolute): TechBrot maintains
 * the trust LEDGER and performs the three-way reconciliation as a recordkeeping / bookkeeping
 * service. We NEVER hold, control, sign on, deposit to, or disburse from the IOLTA or any
 * client-trust account. The attorney controls the trust account and makes every disbursement
 * and transfer decision. Bar-rule / ethics compliance (e.g. ABA Model Rule 1.15 and the
 * specific STATE bar rules) is the attorney's professional responsibility — we support it with
 * clean records and reconciliations; we DO NOT provide legal/ethics advice or certify
 * compliance, and defer all ethics-rule specifics to the state bar and the firm's own counsel.
 *
 * SCHEMA: WebPage, BreadcrumbList, Service ("Law Firm Trust (IOLTA) Accounting", provider
 * #organization, areaServed United States, hasOfferCatalog of the 6 deliverables), ItemList
 * (deliverables), FAQPage (all verbatim), QAPage (from the 5-question ai-summary). speakable ->
 * #iolta-ai-summary (the ai-summary list id resolves to #acctind-iolta-ai-summary-list).
 * HONESTY (R4/R5/R9): no fabricated stats/clients/reviews; no AggregateRating/Review; firm-level
 * authorship; David Westgate only in reviewedBy schema @id (global Person); founder-name-zero in
 * visible content; canonical pricing only (no IOLTA-specific prices invented); does not file
 * income taxes / no IRS representation; not affiliated with Intuit Inc.; representative scenarios
 * labeled. Cobalt vocabulary only (same component classes as legal.njk): prose, ai-summary--ruled,
 * buyer-card (opener/heading/body/cta), stack-8, grid-2/grid-3, checks-list, process-diagram,
 * faq__list, trust-row, meta-reviewed, section--alt. <code> not mono. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — plain-terms trust-accounting prose. (H2: Trust accounting, plainly.)
  definition: [
    "<strong>Trust accounting</strong> is the bookkeeping behind the money a law firm holds <em>for</em> its clients rather than money it has earned. When a client pays an advance fee or a settlement lands, those dollars go into a client-trust account &mdash; often a pooled <strong>IOLTA</strong> (Interest on Lawyers&rsquo; Trust Account) &mdash; and they stay the client&rsquo;s property until the firm earns them. Because the money isn&rsquo;t the firm&rsquo;s, the rules are stricter than ordinary bookkeeping: it must never be <strong>commingled</strong> with operating cash, it must be tracked on a separate <strong>ledger for every client and matter</strong>, retainers stay <strong>unearned</strong> until the work is performed, and the whole account must reconcile <strong>three ways</strong> &mdash; the trust bank balance, the trust book balance, and the sum of all individual client-ledger balances, all in agreement. Trust errors are the single most common cause of bar discipline, which is exactly why this work earns its own discipline. This page is the deep dive on trust and IOLTA; for firm-wide books &mdash; operating accounts, matter profitability, partner draws &mdash; see the <a href=\"/accounting/industries/legal/\">law firm accounting hub</a>.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who maintain that per-client trust ledger and perform the three-way reconciliation as a <strong>recordkeeping and bookkeeping service</strong>. The boundary is exact and we never blur it: we never hold, control, sign on, deposit to, or disburse from the IOLTA or any client-trust account. The <strong>attorney controls the trust account</strong> and makes every disbursement and transfer decision &mdash; we record what the firm authorizes and reconcile it so nothing is missed. Bar-rule and ethics compliance (for example ABA Model Rule 1.15 and the specific rules of your state bar) is the attorney&rsquo;s professional responsibility; we support it with clean, reconciled records, but we do not provide legal or ethics advice or certify compliance. Defer all rule specifics to your state bar and the firm&rsquo;s own counsel. We coordinate with your CPA or EA, who files. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (render as NON-heading ai-summary__question; feed QAPage).
  // (H2: Trust accounting, in five questions.)
  aiSummary: [
    { q: "What is law firm trust (IOLTA) accounting?", a: "It is the bookkeeping for money a firm holds for clients &mdash; advance fees, retainers, settlements &mdash; in a client-trust or pooled <strong>IOLTA</strong> account. The money belongs to the client until earned, so it is kept separate from operating cash, tracked on a <strong>per-client ledger</strong>, and reconciled three ways. TechBrot maintains the ledger and reconciliation; the attorney controls the account." },
    { q: "What is three-way reconciliation?", a: "It confirms three independently kept balances agree: the <strong>trust bank balance</strong>, the <strong>trust book balance</strong>, and the <strong>sum of every client&rsquo;s individual trust ledger</strong>. When all three match, no client is overdrawn and no trust money has been commingled with the firm&rsquo;s operating funds. Many state bars require it monthly; we perform it as a recordkeeping step." },
    { q: "Do you hold or move money in the trust account?", a: "No. We are a recordkeeping service. We <strong>never hold, control, sign on, deposit to, or disburse from</strong> the IOLTA or any client-trust account. The attorney controls the account and makes every disbursement and transfer decision; we maintain the ledger and reconciliation that record and verify it." },
    { q: "How are retainers and earned-vs-unearned fees handled?", a: "Advance fees and retainers are booked as <strong>unearned liabilities</strong> held in trust, then recognized as income only as the work is performed and billed. A <strong>trust-to-operating transfer</strong> happens only as fees are earned &mdash; the firm authorizes and makes the transfer; we record and reconcile it so trust never funds operations early. We do not file income taxes; we coordinate with your CPA or EA." },
    { q: "Who is responsible for bar-rule compliance?", a: "The attorney and the firm. Trust-account ethics rules (for example <strong>ABA Model Rule 1.15</strong> and your state bar&rsquo;s specific rules) are the attorney&rsquo;s professional responsibility. We support compliance with clean, reconciled records but do not give legal or ethics advice or certify compliance &mdash; defer rule specifics to your state bar and your own counsel." },
  ],

  // CHALLENGES — three places trust books fail (grid-3 buyer-cards). 3 H3s.
  // (H2: Three failures bar auditors find first.)
  challenges: [
    { signal: "Funds are commingled", title: "Trust and operating money mixed.", body: "Client trust dollars sitting in the operating account, operating cash parked in trust to cover a shortfall, or a single account doing both jobs &mdash; commingling is the textbook trust violation and the fastest path to a discipline inquiry. The recordkeeping fix is a strictly segregated trust account in QuickBooks, a separate ledger per client and matter, and a reconciliation that proves no operating money is in trust and no trust money is in operating. We maintain those records and flag any crossover for the attorney; keeping the accounts themselves separate, and acting on any flag, is the firm&rsquo;s decision &mdash; we don&rsquo;t move money." },
    { signal: "A client is overdrawn", title: "One matter spends another&rsquo;s funds.", body: "When per-client ledgers aren&rsquo;t maintained, a disbursement on one matter can quietly draw down another client&rsquo;s trust balance &mdash; an overdraft that the bank statement alone will never reveal because the pooled account still shows a positive total. The fix is a live ledger for every client whose sum is reconciled to the bank and the book balance each month, so a negative individual balance surfaces immediately. We surface it in the records; the attorney resolves how funds are corrected." },
    { signal: "Retainers booked as income", title: "Unearned fees recognized too early.", body: "Retainers and advance fees recorded as revenue the day they land &mdash; before the work is done &mdash; overstate income, hide an unearned-fee liability, and risk trust-to-operating transfers happening before fees are actually earned. The recordkeeping fix is retainers held as unearned liabilities in trust and recognized as income only as earned and billed, with each transfer to operating tied to billed, earned work. The transfer decision and timing are the firm&rsquo;s; we record and reconcile against earned fees." },
  ],

  // THREE-WAY — the ONE numbered system on the page (process-diagram explainer). 3 H3s.
  // (H2: What three-way reconciliation actually checks.)
  threeWay: [
    { phase: "Balance 1", title: "The trust bank balance", body: "The reconciled balance of the client-trust or IOLTA account itself, taken from the bank statement and adjusted for outstanding items &mdash; the actual cash on deposit, independent of anything in the books." },
    { phase: "Balance 2", title: "The trust book balance", body: "The trust-liability balance recorded in QuickBooks &mdash; what the firm&rsquo;s books say is being held for clients in total. It must equal the reconciled bank balance to the penny." },
    { phase: "Balance 3", title: "The sum of all client ledgers", body: "Add up every individual client&rsquo;s trust ledger balance. That total must equal the book balance and the bank balance. When all three agree, no client is overdrawn and no trust money is commingled; if any one diverges, we flag it for the attorney to resolve before the period closes." },
  ],

  // WHAT WE HANDLE — six trust-recordkeeping services (grid-3 stack-8 linked). 6 H3s.
  // (H2: Trust recordkeeping, done by an expert.) — also the ItemList deliverables.
  handle: [
    { num: "01 &middot; Per-client ledgers", title: "Per-client &amp; per-matter trust ledgers", body: "A separate, live trust ledger for every client and matter, so each balance is provable on demand and a single matter can never quietly draw on another&rsquo;s funds &mdash; the foundation every other trust control sits on.", href: "/accounting/bookkeeping/" },
    { num: "02 &middot; Three-way recon", title: "Monthly three-way reconciliation", body: "Trust bank balance, trust book balance, and the sum of all client ledgers reconciled to agreement every month, with an aging so nothing sits stale &mdash; performed as a recordkeeping step, with any break flagged for the attorney.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "03 &middot; Earned vs unearned", title: "Retainers &amp; earned-vs-unearned fees", body: "Retainers and advance fees held as unearned liabilities in trust and recognized as income only as earned and billed &mdash; so revenue is real and trust-to-operating transfers track to fees actually earned.", href: "/accounting/bookkeeping/" },
    { num: "04 &middot; Transfer records", title: "Trust-to-operating transfer records", body: "Clean, matched records of each transfer the firm authorizes from trust to operating as fees are earned &mdash; we record and reconcile what the attorney moves; we never initiate, sign, or make a transfer ourselves.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "05 &middot; Cleanup", title: "Trust-ledger cleanup &amp; rebuild", body: "Untangle commingled history, rebuild per-client ledgers from source records, resolve stale and unidentified balances, and reconcile the trust account back to a known-good, defensible baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { num: "06 &middot; Setup", title: "QuickBooks &amp; legal-software setup", body: "A law-firm trust structure in QuickBooks and your practice-management and payment tools &mdash; Clio, MyCase, LawPay and the rest &mdash; connected so trust activity reconciles cleanly into per-client ledgers.", href: "/quickbooks/setup/" },
  ],

  // BOUNDARY — the trust-fund boundary stated unambiguously (checks-list of what we never do).
  // (H2: What we do — and what we never do.)
  boundary: [
    "<strong>Hold or control client funds.</strong> We never take custody of, or have control over, money in the IOLTA or any client-trust account.",
    "<strong>Sign on the trust account.</strong> We are never a signatory; we have no authority to authorize anything on the account.",
    "<strong>Deposit to the trust account.</strong> The firm receives and deposits client funds; we record the deposit, we do not make it.",
    "<strong>Disburse from the trust account.</strong> Every disbursement to a client, third party, or the firm is made by the attorney; we record and reconcile it.",
    "<strong>Decide or initiate transfers.</strong> Trust-to-operating transfers as fees are earned are the firm&rsquo;s decision and the firm&rsquo;s action; we never initiate one.",
    "<strong>Give legal or ethics advice, or certify compliance.</strong> We don&rsquo;t interpret bar rules or certify that the firm is compliant.",
  ],
  boundaryNote: "What we <strong>do</strong> is maintain the per-client trust ledger and perform the three-way reconciliation as a recordkeeping service &mdash; producing the clean, reconciled records that let the attorney meet their professional obligations. The <strong>attorney controls the trust account</strong> and makes every disbursement and transfer decision. Bar-rule compliance (for example ABA Model Rule 1.15 and your state bar&rsquo;s specific rules) is the attorney&rsquo;s professional responsibility; for rule specifics, <a href=\"/contact/?intent=accounting\">talk to us about the records</a> and defer to your state bar and your own counsel.",

  // INTEGRATIONS — legal trust/practice tools reconciled with QuickBooks (checks-list).
  // (H2: Reconciled to how the trust account moves.)
  integrations: [
    "QuickBooks Online &mdash; trust and operating books in one file, kept strictly separate",
    "Clio &mdash; matter management and trust ledgers reconciled to QuickBooks",
    "MyCase &mdash; trust activity and billing reconciled to QuickBooks",
    "PracticePanther &mdash; matter billing and retainer tracking",
    "CosmoLex &mdash; built-in trust accounting reconciled to QuickBooks",
    "LawPay &mdash; compliant trust and operating card payments, matched to ledgers",
    "Smokeball &mdash; practice management synced to the books",
    "Bank &amp; trust-account statements &mdash; the source for the three-way reconciliation",
  ],
  integrationsNote: "On different software? If it tracks matters, billing, or trust activity and reports to a bank account, we can reconcile it into per-client trust ledgers. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Clean trust books are the floor, not the ceiling.)
  advisoryBody: [
    "Sound trust accounting is non-negotiable &mdash; but it&rsquo;s the floor, not the whole building. Once the trust ledger reconciles three ways every month and your operating books are matter-accurate, the question shifts from &ldquo;are our records clean and defensible?&rdquo; to &ldquo;what do the numbers tell us to do?&rdquo; Which practice areas actually carry the firm, where realization and collections are leaking, how partner compensation should be structured, when to hire. That broader, firm-wide view lives on our <a href=\"/accounting/industries/legal/\">law firm accounting hub</a>.",
    "From there, <strong>law firm advisory</strong> turns clean books into decisions: a Certified ProAdvisor who knows your numbers translating them into profitability, compensation, and cash-flow judgment. Trust-account compliance always remains the firm and its attorneys&rsquo; professional responsibility; what we add on top is the analysis. <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (NO founder/personal name). (H2: Reviewed by the ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Per-client trust ledgers, three-way reconciliation, earned-vs-unearned retainers, transfer records &middot; recordkeeping only &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Boundaries", detail: "We never hold, control, sign on, deposit to, or disburse from any client-trust account; the attorney controls the account &middot; no legal or ethics advice; bar-rule compliance is the attorney&rsquo;s responsibility" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — services & industries (grid-2 buyer-cards). 4 H3s. (H2: Related services & industries.)
  related: [
    { title: "Law firm accounting hub", body: "The firm-wide view: operating books, matter and practice-area profitability, partner draws and capital accounts &mdash; the broad companion to this trust deep dive.", href: "/accounting/industries/legal/", cta: "Visit the law firm hub &rarr;" },
    { title: "Bookkeeping cleanup", body: "Rebuild commingled or stale per-client trust ledgers and reconcile the trust account back to a defensible, known-good baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Monthly bookkeeping", body: "Reliable monthly close with three-way trust reconciliation and matter-level operating books, delivered in your own QuickBooks file.", href: "/accounting/bookkeeping/monthly-bookkeeping/", cta: "Explore monthly books &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean firm books into practice-area profitability, partner-compensation, and cash-flow decisions.", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", cta: "Explore advisory &rarr;" },
  ],

  // FAQ — 6+ Q/A verbatim; visible faq__list = FAQPage schema (same array, NO dedup).
  // (H2: IOLTA & trust accounting questions.)
  faq: [
    { q: "Does TechBrot hold, control, or disburse money in our trust account?", a: "No. We are a recordkeeping service. We never hold, control, sign on, deposit to, or disburse from your IOLTA or any client-trust account. The attorney controls the trust account and makes every deposit, disbursement, and transfer decision. What we do is maintain the per-client trust ledger and perform the three-way reconciliation so those records are clean, accurate, and reconciled." },
    { q: "What is three-way trust reconciliation, exactly?", a: "It confirms that three independently maintained balances agree: the trust bank-account balance, the trust liability recorded in the books, and the sum of every individual client&rsquo;s trust ledger balance. When all three match, no client&rsquo;s funds are overdrawn and trust money has not been commingled with the firm&rsquo;s operating funds. Many state bars require it monthly. We perform it as a recordkeeping step and flag any break for the attorney to resolve." },
    { q: "How do you handle retainers and earned-versus-unearned fees?", a: "Retainers and advance fees are booked as unearned liabilities held in the trust account, then recognized as income only as the work is performed and billed. A transfer from trust to operating happens only as fees are earned &mdash; the firm authorizes and makes that transfer, and we record and reconcile it against billed, earned work so trust never funds operations early. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "Who is responsible for bar-rule and ethics compliance?", a: "The attorney and the firm. Trust-account ethics rules &mdash; for example ABA Model Rule 1.15 and the specific rules of your state bar &mdash; are the attorney&rsquo;s professional responsibility. We support compliance by maintaining clean, reconciled records, but we do not provide legal or ethics advice and do not certify that the firm is compliant. For any rule specifics, defer to your state bar and the firm&rsquo;s own counsel." },
    { q: "How is this different from your law firm accounting page?", a: "Our <a href=\"/accounting/industries/legal/\">law firm accounting hub</a> is the broad, firm-wide overview &mdash; operating books, matter and practice-area profitability, partner draws, advisory. This page is the deep dive on one high-risk area: client-trust and IOLTA recordkeeping &mdash; per-client ledgers, three-way reconciliation, earned-versus-unearned retainers, and the trust-fund boundary. Most firms need both; start with whichever matches the problem in front of you." },
    { q: "Can you clean up a trust account that&rsquo;s out of balance or commingled?", a: "Yes, as a recordkeeping engagement. We rebuild per-client ledgers from source records, untangle commingled history, identify stale or unidentified balances, and reconcile the trust account back to a known-good baseline, then flag for the attorney any items that require a funds correction. We document and reconcile; the firm decides on and makes any movement of money. This is illustrative of how a cleanup is scoped, not a promised outcome." },
    { q: "What does trust accounting cost?", a: "It is quoted as a fixed monthly fee against a written scope &mdash; driven by the number of attorneys and matters, whether IOLTA or client-trust accounting is in scope, the practice-management software in use, and reporting needs. Across all engagements, monthly bookkeeping runs $400&ndash;$2,500+/mo and one-time cleanup $1,500&ndash;$15,000+ depending on scope; see <a href=\"/pricing/\">pricing</a> for the canonical figures. No hourly billing, and TechBrot does not file income taxes or provide legal advice." },
    { q: "Do you provide legal advice or interpret our state&rsquo;s trust rules?", a: "No. We do not practice law, give legal or ethics advice, or interpret your state bar&rsquo;s trust rules, and we do not certify compliance. We maintain the records and the three-way reconciliation that help the firm meet its obligations. For rule specifics &mdash; ABA Model Rule 1.15 and your state bar&rsquo;s requirements &mdash; defer to your state bar and the firm&rsquo;s own counsel." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/law-firm-trust-accounting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"IOLTA & Law Firm Trust Accounting — Three-Way Reconciliation","description":"Deep dive on client-trust and IOLTA accounting: per-client trust ledgers, three-way reconciliation, earned-vs-unearned retainers, and the trust-fund boundary — maintained as a recordkeeping service by Certified QuickBooks ProAdvisors. We keep the ledger and reconciliation; the attorney controls the trust account.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/law-firm-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#iolta-ai-summary","#acctind-iolta-ai-summary-list"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Law Firm Trust Accounting"}]},
        {"@type":"Service","@id":url+"#service","name":"Law Firm Trust (IOLTA) Accounting","serviceType":"Client-trust and IOLTA accounting recordkeeping","description":"Per-client and per-matter trust ledgers, monthly three-way reconciliation (trust bank balance, trust book balance, and the sum of all client ledgers in agreement), earned-vs-unearned retainer tracking, and trust-to-operating transfer records for U.S. law firms, maintained as a recordkeeping and bookkeeping service by Certified QuickBooks ProAdvisors. TechBrot never holds, controls, signs on, deposits to, or disburses from any client-trust account; the attorney controls the trust account and makes every disbursement and transfer decision, and bar-rule and ethics compliance is the attorney's professional responsibility. Independent firm; does not file income taxes or provide legal or ethics advice — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. law firms, solo attorneys, and legal practices with client-trust or IOLTA accounts"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Trust accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What trust accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Trust accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};

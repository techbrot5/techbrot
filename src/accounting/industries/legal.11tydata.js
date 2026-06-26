/* /accounting/industries/legal/ — LIVE baseline industry page migrated to cobalt
 * t-mofu under MIGRATION-PROTOCOL (content-to-goal, visual-floor). FROZEN CONTRACT:
 * tmp/contract-acctind-legal.txt (34 headings, 7 FAQ) is the ONLY authority for
 * headings + FAQ. Old HTML accounting/industries/legal/index.html read for BODY
 * PROSE only. REFERENCE pattern: src/quickbooks/online.njk + this folder's sibling
 * cash-flow-management.11tydata.js (proven t-mofu cobalt) for structure/schema.
 * Industry content/angle: src/find-an-accountant/new-york/industries/legal.njk (NY
 * analog) — substance reused at NATIONAL scope, NY-specific tax/IOLA/Rule-1.15 dropped,
 * generalized to IOLTA / state-bar trust rules. t-mofu, tierClass section--tier-guide,
 * bodyClass page--mofu. CTA canonical lexicon: "Book the discovery call" ->
 * /contact/?intent=accounting; "Get the free file review" ->
 * /quickbooks/file-review/?intent=file-review; "Speak to a ProAdvisor" (tel).
 *
 * The 5 quick-answer questions render as NON-heading ai-summary__question (the baseline
 * captured them as <dt>, NOT <hN>) to keep the frozen heading inventory exact — and feed
 * the QAPage. FAQ: 7 contract Q/A verbatim, append-only enrichment; visible faq__list =
 * FAQPage mainEntity (same array, NO dedup). Footer chrome H2s (Accounting / QuickBooks /
 * Company / Network) and the newsletter ("The monthly brief.") are intentionally NOT
 * rendered — global base-layout chrome owns them (dropped per protocol T2).
 *
 * SCHEMA: WebPage, BreadcrumbList, Service (hasOfferCatalog of the 6 deliverables),
 * ItemList (deliverables), FAQPage (all 7 verbatim), QAPage (from the 5-question
 * ai-summary). HONESTY (R5/R9): no fabricated stats/outcomes/reviews; firm-level
 * authorship; David Westgate only in reviewedBy schema @id (global Person); no
 * AggregateRating; no named-reviewer line in visible content. Independent firm — not
 * affiliated with Intuit Inc.; does not file income taxes or provide legal/bar-compliance
 * advice; coordinates with the client's CPA/EA, who files, and trust compliance remains
 * the firm and its attorneys' professional responsibility. Cobalt vocabulary only:
 * prose, ai-summary--ruled, buyer-card (opener/heading/body/cta), stack-8, grid-2/grid-3,
 * checks-list, process-diagram, faq__list, trust-row, meta-reviewed, section--alt. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // DEFINITION — plain-terms prose (from old TL;DR body, enriched). (H2: Law firm accounting, plainly.)
  definition: [
    "Law firm books carry an obligation ordinary bookkeeping doesn&rsquo;t: client money. Funds held in <strong>IOLTA or client trust accounts</strong> belong to clients, not the firm, so they must be segregated from the firm&rsquo;s operating money, never commingled, tracked on a <strong>per-client ledger</strong>, and reconciled <strong>three ways</strong> &mdash; the trust bank balance, the trust liability on the books, and the total of every client&rsquo;s ledger all agreeing. Add <strong>earned-versus-unearned retainers</strong>, client cost advances, and matter-level profitability, and generic bookkeeping &mdash; and most automation &mdash; falls short, with trust errors a leading cause of bar discipline.",
    "<strong>TechBrot</strong> is a firm of <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisors</a> who maintain trust and operating books, perform three-way reconciliation, track retainers and client cost advances, keep partner draws and capital accounts current, and deliver financials your CPA can file from. The trust account stays segregated and inviolate; the operating books carry matter- and practice-area profitability. For firms ready to act on the numbers, <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">advisory</a> adds the judgment layer on top. We maintain the records and reconciliation; the firm and its attorneys retain professional responsibility for state-bar trust compliance, and we coordinate with your CPA or EA, who files. We do not provide legal advice or bar-compliance certification. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block; render as
  // NON-heading ai-summary__question). Feeds the QAPage. (H2: Law firm accounting, in five questions.)
  aiSummary: [
    { q: "Why is law firm bookkeeping harder?", a: "Firms hold client money. <strong>IOLTA and trust funds</strong> must be segregated from operating funds, tracked per client, and <strong>reconciled three ways</strong>; retainers are unearned until earned; client costs are advanced and recovered; and trust errors are a leading cause of bar discipline. Standard bookkeeping is not built for any of it." },
    { q: "Do you handle IOLTA and client trust accounting?", a: "Yes. We maintain per-client trust ledgers, keep trust funds segregated from operating funds, and perform <strong>three-way reconciliation</strong> so the trust bank balance, the trust liability on the books, and the sum of all client ledgers match. State-bar trust rules and compliance certification remain the firm&rsquo;s responsibility; we maintain the records and reconciliation behind them." },
    { q: "What is three-way trust reconciliation?", a: "Confirming that three figures agree: the <strong>trust bank balance</strong>, the <strong>trust liability on the books</strong>, and the <strong>sum of every client&rsquo;s trust ledger</strong>. When they match, no client is overdrawn and funds aren&rsquo;t commingled with the firm&rsquo;s operating money. Many state bars require it monthly." },
    { q: "Do you track earned vs unearned fees?", a: "Yes. Retainers and advance fees are booked as <strong>unearned liabilities</strong> until the work is performed, then recognized as income as earned and billed. Client cost advances are tracked so reimbursables are recovered rather than absorbed. We do not file income taxes; we coordinate with your CPA or EA." },
    { q: "What does it cost?", a: "A fixed monthly fee against a written scope &mdash; driven by the number of attorneys and matters, whether trust or IOLTA accounting is in scope, the practice-management software in use, and reporting needs. No hourly billing." },
  ],

  // CHALLENGES — three places firms expose themselves (grid-3 buyer-cards). 3 frozen H3s VERBATIM.
  // (H2: Three places firms expose themselves.)
  challenges: [
    { signal: "Trust accounting is at risk", title: "No three-way reconciliation.", body: "Trust funds commingled with operating money, no per-client ledgers, and a trust account that&rsquo;s never reconciled three ways &mdash; the single most common trigger for bar inquiries and discipline. The fix is segregated trust accounting in QuickBooks, per-client ledgers, and three-way reconciliation with trust bank, trust liability, and client-ledger totals all in agreement every month. We keep the books and the reconciliation right to the standard your bar requires; the compliance obligation itself stays with the firm and its attorneys &mdash; we don&rsquo;t practice law or certify compliance." },
    { signal: "Revenue is overstated", title: "Retainers booked as income.", body: "Advance fees and retainers that hit income the day they arrive, before the work is done &mdash; revenue overstated, unearned liabilities missing, and books that mislead both you and your CPA. The fix is retainers booked as unearned liabilities and recognized as income only as earned and billed, with client cost advances tracked so reimbursables are recovered. Cash in the bank isn&rsquo;t income yet; if your books say otherwise, your profit &mdash; and your tax picture &mdash; are wrong." },
    { signal: "Matter profit is invisible", title: "No practice-area or matter view.", body: "Income and cost sitting in one firm-wide ledger, so you can&rsquo;t see which practice areas, matters, or attorneys actually carry the firm &mdash; or what your realization and collection rates really are. The fix is matter- and practice-area-level tracking in QuickBooks, so profitability, realization, and collections are visible and decision-ready. Most firms grow the practice areas that feel busy, not the ones that pay; real numbers change that." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 stack-8 linked). 6 frozen H3s VERBATIM.
  // (H2: Law firm accounting, done by an expert. + 6 H3s) — also the ItemList deliverables.
  handle: [
    { num: "01 &middot; Trust accounting", title: "IOLTA &amp; client trust ledgers", body: "Segregated trust accounting with per-client ledgers and three-way reconciliation &mdash; trust bank, book liability, and client totals in agreement every month, with an aging so nothing sits stale and every matter&rsquo;s balance is provable.", href: "/accounting/bookkeeping/" },
    { num: "02 &middot; Operating books", title: "Matter-level bookkeeping", body: "Operating books kept strictly separate from trust, with income and cost tracked by matter and practice area &mdash; plus partner draws and capital accounts &mdash; for true profitability.", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { num: "03 &middot; Fees &amp; costs", title: "Retainers &amp; client cost advances", body: "Earned-versus-unearned fee tracking with retainers held in trust and moved to operating only as billed, and client cost advances recorded and recovered &mdash; so revenue is real and reimbursables aren&rsquo;t absorbed.", href: "/accounting/bookkeeping/" },
    { num: "04 &middot; Cleanup", title: "Trust &amp; operating cleanup", body: "Untangle commingled funds, rebuild per-client ledgers, resolve stale balances, and reconcile trust and operating accounts to a known-good, CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { num: "05 &middot; Setup", title: "QuickBooks &amp; legal-software setup", body: "A law-firm chart of accounts, trust and operating structure, and your practice-management and payment software &mdash; Clio, MyCase, LawPay and the rest &mdash; connected to QuickBooks cleanly.", href: "/quickbooks/setup/" },
    { num: "06 &middot; Advisory", title: "Practice advisory", body: "As the firm grows, fractional CFO advisory on practice-area profitability, partner compensation, realization and collection rates, and cash flow &mdash; the judgment layer above the books.", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo" },
  ],

  // INTEGRATIONS — legal practice tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you run the practice.)
  integrations: [
    "QuickBooks Online &mdash; trust and operating books in one file",
    "Clio &mdash; matter management and trust ledgers synced to QuickBooks",
    "MyCase &mdash; billing and trust activity reconciled to QuickBooks",
    "PracticePanther &mdash; matter billing and retainer tracking",
    "Smokeball &mdash; practice management synced to the books",
    "CosmoLex &mdash; built-in trust accounting reconciled to QuickBooks",
    "Rocket Matter &mdash; matter billing and trust activity",
    "LawPay &mdash; compliant trust and operating card payments",
  ],
  integrationsNote: "On different software? If it tracks matters, billing, or trust and pays out to a bank account, we can reconcile it. <a href=\"/contact/?intent=accounting\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (process-diagram). 4 frozen H3s VERBATIM.
  // (H2: From at-risk trust books to clean, reconciled accounts. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your matters, trust obligations, software, and where the books are breaking. No pitch &mdash; just the right next step." },
    { phase: "Phase 2", title: "Cleanup &amp; setup", body: "If needed, a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> to rebuild per-client trust ledgers and separate trust from operating, plus QuickBooks setup for the firm." },
    { phase: "Phase 3", title: "Monthly reconciliation", body: "Operating accounts reconciled and three-way trust reconciliation performed every month, with retainers, client cost advances, partner draws, and capital accounts maintained." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "A monthly package with matter and practice-area profitability, plus <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">advisory</a> as the firm grows." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Clean books are the start. A stronger practice is the point.)
  advisoryBody: [
    "Once trust accounting is sound and your matter-level numbers are real, the question changes from &ldquo;are we compliant and accurate?&rdquo; to &ldquo;what do we do about it?&rdquo; Which practice areas to grow, how partner compensation should be structured, where realization and collection are leaking, when to hire &mdash; the decisions that actually build a firm.",
    "That&rsquo;s where <strong>law firm advisory</strong> comes in: a Certified ProAdvisor who knows your numbers turning them into profitability, compensation, and cash-flow decisions. As automation commoditizes basic bookkeeping, this judgment layer is where the value &mdash; and the margin &mdash; now lives. Trust-account compliance always remains the firm and its attorneys&rsquo; professional responsibility. <a href=\"/accounting/advisory/fractional-cfo/?intent=fractional-cfo\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // EXPERT REVIEW — firm-level trust row (NO founder/personal name; old "Reviewed by the
  // ProAdvisor team" line kept firm-level per R9). (H2: Reviewed by the ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Trust/IOLTA accounting, three-way reconciliation, retainers, matter-level books &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Boundaries", detail: "No legal or bar-compliance advice &middot; trust compliance remains the firm and its attorneys&rsquo; professional responsibility" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — services & industries (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: Related services & industries. + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "Rebuild per-client trust ledgers and separate trust from operating, cleanly, then reconcile to a CPA-ready baseline.", href: "/accounting/bookkeeping/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Payroll management", body: "Payroll for attorneys and staff, integrated with your operating books and kept current every month.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "Fractional CFO &amp; advisory", body: "Turn clean firm books into practice-area profitability, partner-compensation, and cash-flow decisions.", href: "/accounting/advisory/fractional-cfo/?intent=fractional-cfo", cta: "Explore advisory &rarr;" },
    { title: "All industries", body: "See how TechBrot tailors accounting to the way your industry runs &mdash; construction, real estate, restaurant, healthcare, nonprofit.", href: "/accounting/industries/", cta: "All industries &rarr;" },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract (questions verbatim; answers preserved, append-only
  // enrichment). visible faq__list = FAQPage schema (same array, NO dedup). (H2: Law firm accounting questions.)
  faq: [
    { q: "Why is law firm accounting different from regular bookkeeping?", a: "Law firms hold client money. Client funds in IOLTA or trust accounts must be segregated from the firm&rsquo;s operating money, never commingled, tracked on a per-client ledger, and reconciled three ways so the bank balance, the book balance, and the sum of every client&rsquo;s ledger all agree. Retainers are unearned until the work is performed, client costs are advanced and recovered, and trust-account errors are a leading cause of bar discipline. Standard bookkeeping is not built for any of this." },
    { q: "Do you handle IOLTA and client trust accounting?", a: "Yes. We maintain client trust and IOLTA accounting in QuickBooks with per-client ledgers, keep trust funds segregated from operating funds, and perform <a href=\"/accounting/industries/law-firm-trust-accounting/\">three-way reconciliation</a> so the trust bank balance, the trust liability on the books, and the total of all client ledgers match. Responsibility for state bar trust rules and compliance certification remains with the firm and its attorneys; we maintain the records and reconciliation behind them." },
    { q: "What is three-way trust reconciliation?", a: "<a href=\"/accounting/reconciliation-services/\">Three-way reconciliation</a> confirms that three figures agree: the trust bank account balance, the trust liability recorded in the books, and the sum of every individual client&rsquo;s trust ledger balance. When all three match, no client&rsquo;s funds are overdrawn and trust money is not commingled with the firm&rsquo;s operating funds. Many state bars require it monthly." },
    { q: "Do you track earned versus unearned fees and retainers?", a: "Yes. Advance fees and retainers are booked as unearned liabilities until the work is performed, then recognized as income as they are earned and billed. We also track client cost advances so reimbursable costs are recovered rather than absorbed. TechBrot does not file income taxes; we coordinate with your CPA or EA." },
    { q: "Do you work with Clio, MyCase, and LawPay?", a: "Yes. We reconcile legal practice-management and payment platforms such as Clio, MyCase, PracticePanther, Smokeball, CosmoLex, and LawPay to QuickBooks, so billing, payments, and trust transactions flow into clean books and trust ledgers instead of living in disconnected systems." },
    { q: "What does law firm bookkeeping cost?", a: "Pricing depends on the number of attorneys and matters, whether trust or IOLTA accounting is in scope, the practice-management software in use, and reporting needs. Law firm engagements are quoted as a fixed monthly fee against a written scope with no hourly billing. TechBrot does not file income taxes or provide legal advice; we coordinate with your CPA or EA." },
    { q: "Do you offer advice, or just bookkeeping?", a: "Both. Compliant trust accounting and accurate matter-level books come first; then a Certified ProAdvisor can turn them into decisions &mdash; practice-area profitability, partner compensation, realization and collection rates, and cash-flow planning &mdash; through <a href=\"/accounting/advisory/\">fractional CFO advisory</a>. As automation handles routine data entry, this advisory layer is where the real value sits." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/industries/legal/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Law Firm Accounting & IOLTA Trust Bookkeeping","description":"Expert law firm accounting and QuickBooks bookkeeping — IOLTA and client trust accounting, three-way reconciliation, earned-vs-unearned retainers, and matter-level books handled by Certified ProAdvisors for attorneys and legal practices.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/law-firm-accounting-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#acctind-legal-in-brief-text","#acctind-legal-ai-summary"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Industries","item":"https://techbrot.com/accounting/industries/"},
          {"@type":"ListItem","position":4,"name":"Legal"}]},
        {"@type":"Service","@id":url+"#service","name":"Law Firm Accounting & Bookkeeping","serviceType":"Law firm accounting and IOLTA trust bookkeeping","description":"IOLTA and client trust accounting with three-way reconciliation and per-client ledgers, earned-vs-unearned retainer tracking, client cost advances, and matter-level bookkeeping for U.S. law firms and solo attorneys, delivered by Certified QuickBooks ProAdvisors. Maintains trust records and reconciliation; the firm and its attorneys retain professional responsibility for state-bar trust compliance. Independent firm; does not file income taxes or provide legal advice — coordinates with the client's CPA or EA.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. law firms, solo attorneys, and legal practices"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Law firm accounting deliverables","itemListElement":data.handle.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.title),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What law firm accounting delivers","itemListElement":data.handle.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.title)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Law firm accounting — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};

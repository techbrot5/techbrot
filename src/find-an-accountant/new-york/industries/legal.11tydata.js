/* /find-an-accountant/new-york/industries/legal/ — t-location INDUSTRY child
 * (deeper than a city child — 34 contract headings). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-legal.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/legal/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * industries/construction.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema @graph
 * (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from the
 * same `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. New York
 * law-firm facts (IOLA = NY's IOLTA; NY Rules of Professional Conduct 1.15 trust separation
 * and seven-year retention; monthly three-way reconciliation; trust-overdraft reporting to
 * the bar / NY Lawyers' Fund) reflect NY RPC 1.15 and the 2026 ABA Model Rule 1.15 standard
 * adopted by New York. No founder/personal name in visible content (firm-level review byline
 * only — the old page's "David Westgate · 40+ years" reviewer line was reframed to the
 * Certified ProAdvisor team per R9; David remains only in global Person schema). Independent
 * firm — does NOT file NY/NYC taxes and does NOT provide legal or bar-compliance advice;
 * coordinates with the firm's CPA, who files, and trust compliance remains the attorney's
 * professional responsibility. Footer chrome (Accounting/QuickBooks/Company/Network) and the
 * newsletter ("The monthly brief.") are intentionally NOT rendered here — global chrome owns
 * them. Cobalt vocabulary only: stack-8, buyer-card, grid-2/grid-3, byline-block,
 * meta-reviewed, faq__list, ai-summary--ruled, checks-list, trust-row, section--alt. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2 VERBATIM: The short version.)
  // Carried from the old TL;DR body, enriched with the trust-overdraft / Lawyers' Fund line.
  summary: [
    "<strong>Law firm accounting</strong> in New York is defined by the attorney trust account &mdash; the <strong>IOLA</strong> account (New York&rsquo;s name for IOLTA). Under the <strong>New York Rules of Professional Conduct 1.15</strong>, client funds must be kept <strong>separate and inviolate</strong> &mdash; never commingled with the firm&rsquo;s own money &mdash; with complete records maintained and the account reconciled monthly via a <strong>three-way reconciliation</strong>: the trust bank balance, the firm&rsquo;s trust ledger, and the sum of every client&rsquo;s sub-ledger must all agree.",
    "New York requires trust records be kept <strong>seven years</strong>, and a 2026 standard modeled on the ABA&rsquo;s Model Rule 1.15 &mdash; adopted by New York &mdash; tightened the reconciliation deadline to 30 days with mandatory three-way reconciliation and seven-year electronic retention. Banks holding IOLA accounts report overdrafts to the disciplinary authority and the <strong>New York Lawyers&rsquo; Fund for Client Protection</strong>, so a single timing error can become a bar inquiry &mdash; which is why retainers, escrow, and client-matter costs are tracked to the dollar.",
    "A named Certified QuickBooks ProAdvisor performs the monthly reconciliation, separates earned fees from unearned retainers, keeps your operating books &mdash; partner draws, capital accounts, client-matter cost tracking &mdash; <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">current</a>, while the attorney retains professional responsibility for compliance, as the rules require. Fixed-fee at <a href=\"/find-an-accountant/new-york/pricing/\">$400&ndash;$2,500+/mo</a>. We do the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY or NYC taxes and does not provide legal advice.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2 VERBATIM: New York law firm accounting, in five questions.)
  aiSummary: [
    { q: "What&rsquo;s different about accounting for a law firm?", a: "<strong>The trust account.</strong> New York attorneys hold client funds &mdash; retainers, settlement proceeds, escrow &mdash; in an <strong>IOLA</strong> (IOLTA) account that must stay separate and inviolate, with complete records and monthly <strong>three-way reconciliation</strong> under <strong>Rule 1.15</strong>. Mishandling it is one of the leading causes of attorney discipline &mdash; which is why law-firm books are built around it first." },
    { q: "What is three-way reconciliation?", a: "<strong>Matching three figures that must all agree:</strong> the trust bank-account balance, the firm&rsquo;s internal trust ledger, and the sum of every individual client&rsquo;s sub-ledger. If any one differs, something is wrong &mdash; and in New York it&rsquo;s expected monthly, with the 2026 standard tightening the deadline to 30 days." },
    { q: "Can a bookkeeper handle my trust account?", a: "<strong>The mechanical reconciliation can be delegated; responsibility cannot.</strong> A Certified ProAdvisor performs the monthly three-way reconciliation and recordkeeping, but New York holds the <strong>attorney</strong> &mdash; not a vendor &mdash; responsible for trust compliance. We do the work and document it for your review and approval." },
    { q: "What does it cost?", a: "<strong>$400&ndash;$2,500+/mo</strong>, fixed-fee against a written scope, set by matter volume, how active the trust account is, the number of attorneys, and whether you need practice-area profitability. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
    { q: "How long must New York firms keep trust records?", a: "<strong>Seven years.</strong> New York requires attorney trust records be retained for seven years &mdash; longer than the five many states require &mdash; and the 2026 standard adds explicit seven-year electronic retention. We keep them organized and audit-ready." },
  ],

  // CHALLENGES — three places NY firms lose trust-account compliance (grid-3 buyer-cards).
  // 3 frozen H3s VERBATIM. (H2: Three places New York firms lose trust-account compliance.)
  challenges: [
    { signal: "Discipline risk is real", title: "No monthly three-way reconciliation.", body: "Many firms reconcile the trust account like a checkbook &mdash; or not at all &mdash; instead of running the three-way reconciliation New York expects monthly. Small discrepancies compound silently, and an unreconciled IOLA account is the single biggest trust-compliance gap a firm can have. The fix is monthly three-way reconciliation &mdash; trust bank balance, firm trust ledger, and the sum of all client sub-ledgers reconciled to agree, with discrepancies resolved before the month closes. If you can&rsquo;t show a current three-way reconciliation, you&rsquo;re carrying the most common trust-discipline exposure there is." },
    { signal: "Commingling exposure", title: "Earned vs. unearned fees blurred.", body: "A retainer is the client&rsquo;s money until it&rsquo;s earned &mdash; it belongs in the IOLA account and moves to operating only as you bill against it. Move it too early, or pay operating expenses from trust, and you&rsquo;ve <strong>commingled</strong>, which New York treats as a serious violation even when accidental. The fix is clear separation of earned and unearned fees, with retainers held in trust and transferred to operating only as they&rsquo;re billed. If client money ever touches your operating account before it&rsquo;s earned, that&rsquo;s the line bar auditors look for first." },
    { signal: "Audit &amp; overdraft triggers", title: "Incomplete records &amp; stale balances.", body: "New York requires complete trust records kept seven years, prenumbered checks, and prompt disbursement of client funds. Missing records, old balances sitting in trust, or a single overdraft &mdash; which banks report to the disciplinary authority and the NY Lawyers&rsquo; Fund automatically &mdash; can each trigger an inquiry where the presumption runs against you. The fix is complete, organized records with seven-year retention, an aging of client balances so nothing sits stale, and clean documentation ready if the bar ever asks." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s VERBATIM.
  // (H2: New York law firm accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Trust reconciliation", title: "Monthly three-way IOLA reconciliation", body: "Trust bank balance, firm trust ledger, and client sub-ledgers reconciled to agree every month &mdash; the core of New York trust compliance &mdash; documented for your review.", href: "/find-an-accountant/new-york/quickbooks-reconciliation/", cta: "New York reconciliation &rarr;" },
    { num: "02 &middot; Client ledgers", title: "Per-client trust sub-ledgers", body: "A separate ledger for every client&rsquo;s trust funds, kept current and inviolate, with an aging report so nothing sits stale and every matter&rsquo;s balance is provable.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "03 &middot; Retainer handling", title: "Earned vs. unearned fees", body: "Retainers and escrow held in trust and moved to operating only as billed and earned &mdash; the discipline that keeps you clear of commingling and clean against Rule 1.15.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "04 &middot; Records &amp; retention", title: "Rule 1.15 recordkeeping", body: "Complete trust records &mdash; bank statements, prenumbered canceled checks, duplicate deposit slips, client ledgers, reconciliations &mdash; organized to New York&rsquo;s seven-year retention standard and ready if the bar requests them.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
    { num: "05 &middot; Firm financials", title: "Profit by practice area", body: "Operating books kept clean alongside trust &mdash; partner draws, capital accounts, client-matter cost tracking &mdash; with profitability by practice area or attorney where you want to see it.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "06 &middot; NYC &amp; NY sales tax", title: "Tax on taxable services", body: "Legal services are generally not subject to NY sales tax, but where a firm has taxable items, we track them so the return reconciles. NYC law partnerships also face the city&rsquo;s Unincorporated Business Tax, which your CPA files.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "New York sales tax help &rarr;" },
  ],

  // INTEGRATIONS — legal practice tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you run the practice.)
  integrations: [
    "QuickBooks Online &mdash; trust and operating books in one file",
    "Clio &mdash; matter management and trust ledgers synced to QuickBooks",
    "LeanLaw &mdash; trust accounting and three-way reconciliation workflow",
    "MyCase &mdash; billing and trust activity reconciled to QuickBooks",
    "PracticePanther &mdash; matter billing and retainer tracking",
    "Smokeball &mdash; practice management synced to the books",
    "LawPay &mdash; compliant trust and operating card payments",
    "Gusto &mdash; payroll for attorneys and staff",
  ],
  integrationsNote: "Using a different practice-management or trust platform? If it exports to QuickBooks, we can build the workflow around it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: From trust-account anxiety to audit-ready. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to review your trust-account setup, practice-management software, matter volume, and where the books or reconciliations are falling behind. No pitch." },
    { phase: "Phase 2", title: "Trust setup &amp; cleanup", body: "Configure client sub-ledgers and trust workflows, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to bring prior reconciliations current and resolve any stale balances or recordkeeping gaps." },
    { phase: "Phase 3", title: "Monthly close &amp; reconciliation", body: "Monthly three-way IOLA reconciliation, retainer tracking, operating-book close with partner draws and capital accounts, and an aging of client balances &mdash; documented for your review and approval." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Practice-area profitability and, as the firm grows, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and partner-compensation advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Clean trust accounting is the floor. Running a profitable firm is the point.)
  advisoryBody: [
    "Once your IOLA account reconciles every month and your records are audit-ready, the question shifts from &ldquo;are we compliant?&rdquo; to &ldquo;are we profitable?&rdquo; Which practice areas actually earn after the work that goes into them, how realization and collection rates look, how partner compensation and capital accounts should track contribution, when cash flow can support another associate &mdash; the decisions that separate New York firms that grow from those that just stay busy.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your firm&rsquo;s numbers turning them into practice-area profitability, cash-flow forecasting, and partner-compensation analysis. As automation handles routine data entry, this judgment layer is where firms find their edge. Trust-account compliance always remains the attorney&rsquo;s professional responsibility. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "QuickBooks reconciliation", body: "The reconciliation discipline behind monthly three-way IOLA trust reconciliation, applied to both trust and operating accounts.", href: "/find-an-accountant/new-york/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { title: "Monthly bookkeeping", body: "Trust and operating books kept current every month &mdash; retainers, partner draws, client-matter costs &mdash; documented for your review.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Explore monthly &rarr;" },
    { title: "Bookkeeping cleanup", body: "Bring prior trust reconciliations current and resolve stale balances or recordkeeping gaps, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your industry runs in New York &mdash; construction, real estate, restaurant, healthcare, nonprofit.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (NO founder/personal name; old "David Westgate · 40+
  // years" reviewer line reframed to the Certified ProAdvisor team per R9).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "IOLA three-way reconciliation, Rule 1.15 recordkeeping, retainer handling, practice-area profitability &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Boundaries", detail: "No legal or bar-compliance advice &middot; trust compliance remains the attorney&rsquo;s professional responsibility &middot; does not file NY/NYC tax returns" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: New York law firm accounting questions.)
  faq: [
    { q: "What makes accounting for a New York law firm different?", a: "The attorney trust account. New York lawyers hold client funds &mdash; retainers, settlement proceeds, escrow &mdash; in an IOLA account (New York&rsquo;s version of IOLTA), and under Rule of Professional Conduct 1.15 those funds must be kept separate and inviolate, with complete records and prompt disbursement. The account is expected to be reconciled monthly using a three-way reconciliation. Mishandling client funds is one of the leading causes of attorney discipline in New York, which is why law-firm bookkeeping is built around the trust account first and everything else second." },
    { q: "What is three-way reconciliation and how often is it required?", a: "Three-way reconciliation means three figures must all agree: the balance on your trust bank statement, the total of your firm&rsquo;s internal trust ledger, and the sum of every individual client&rsquo;s sub-ledger balance. If all three don&rsquo;t match, something is wrong and needs to be found before the month closes. In New York it&rsquo;s expected monthly as best practice, and a 2026 standard modeled on the ABA&rsquo;s Model Rule 1.15 &mdash; adopted by New York among other states &mdash; tightened the reconciliation deadline to 30 days and made three-way reconciliation and seven-year electronic retention explicit requirements. We perform it monthly and document it for your review." },
    { q: "Can a bookkeeper legally handle my trust account?", a: "The mechanical steps &mdash; recording transactions, preparing the three-way reconciliation, organizing records &mdash; can be delegated to a qualified bookkeeper or ProAdvisor. What cannot be delegated is responsibility: New York holds the attorney, not a software vendor or bookkeeper, accountable for trust-account compliance. So the right model is a Certified ProAdvisor who does the reconciliation work accurately and hands it to you to review and approve. We do exactly that &mdash; the work and the documentation &mdash; while you retain the professional responsibility the rules require." },
    { q: "How do you keep retainers from becoming a commingling problem?", a: "A retainer is the client&rsquo;s money until you earn it, so it belongs in the IOLA trust account and moves to your operating account only as you bill against it. Commingling &mdash; mixing client and firm funds, or paying operating expenses out of trust &mdash; is one of the most frequently disciplined violations, even when accidental. We track earned versus unearned fees carefully, so retainers stay in trust until billed and transfers to operating are clean, documented, and tied to actual work performed." },
    { q: "How long do New York firms have to keep trust records?", a: "New York requires attorney trust records to be kept for seven years &mdash; longer than the five years many states require. Records include bank statements, prenumbered canceled checks, duplicate deposit slips, client ledgers, and reconciliations. The 2026 standard also makes seven-year electronic retention explicit, so paper-only recordkeeping no longer suffices on its own. We keep your trust records complete, organized, and retained to that standard, so if the bar ever requests them they&rsquo;re ready." },
    { q: "What happens if my trust account is overdrawn?", a: "Most banks have automatic overdraft-notification agreements with the bar, so if your IOLA account goes negative &mdash; even for a single day due to a timing error &mdash; the bank notifies the disciplinary authority and you can expect an inquiry, with the presumption running against you until you show it was a clerical error. The way to avoid this is disciplined process: never disburse against uncollected funds, reconcile monthly, and keep client sub-ledgers current. That&rsquo;s precisely the routine we maintain, which is what keeps timing errors from becoming a bar inquiry." },
    { q: "How much does law firm bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York law firm runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by matter volume, how active your trust account is, the number of attorneys, and whether you need practice-area profitability reporting &mdash; a solo practitioner with light trust activity is at the lower end; a multi-attorney firm with heavy trust volume higher. We quote a firm number after reviewing your books." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file and trust setup remotely, look at how your IOLA reconciliation and client ledgers stand, determine whether you need a cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We do the books; your CPA files, and trust compliance remains your professional responsibility." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/legal/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York law firm accounting","description":"Law firm accounting for New York attorneys — monthly three-way IOLA trust reconciliation, Rule 1.15 recordkeeping, retainer handling. From $400/mo. Call (877) 751-5575.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-industries-legal.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-legal-summary","#ny-ind-legal-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Legal"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Law Firm Accounting Service","serviceType":"Law firm bookkeeping and IOLA trust accounting","description":"Bookkeeping and QuickBooks accounting for New York law firms — monthly three-way IOLA trust reconciliation, Rule 1.15 recordkeeping, and retainer handling — delivered by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns and does not provide legal advice — coordinates with the client's CPA or EA, and trust compliance remains the attorney's professional responsibility.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York law firms, solo attorneys, and legal practices"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

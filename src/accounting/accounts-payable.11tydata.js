/* /accounting/accounts-payable/ (accounting SERVICE page — Accounts Payable (A/P)
 * management in the Accounting silo). Shape cloned exactly from the proven t-guide
 * help page (quickbooks/help/bank-feeds-not-working), RE-LABELLED for THIS service:
 * causes -> "What our accounts payable service covers"; fixSteps -> "How we run your
 * accounts payable" (the ONE numbered HowTo system on the page); proSignals -> "Who AP
 * management is for". Sheet-7 honest-triage: .disclosure above the fold w/ Intuit
 * support link rel="noopener nofollow"; first FAQ = "Is this Intuit's official
 * QuickBooks support?" -> No, plainly; never "official" near our offer; phone =
 * "Speak to a ProAdvisor" (canonical lexicon); provider/publisher always
 * #organization; reviewedBy = #david-westgate (schema only).
 * HONESTY (load-bearing): we RECORD bills, track due dates, manage A/P aging, prepare
 * vendor payments, capture W-9s, prevent late fees / double-payments, keep cash
 * outflow controlled — all inside YOUR QuickBooks. YOU retain payment authorization /
 * approval; we do NOT move your money without your approval. No fabricated stats.
 * Canonical TechBrot pricing only ($1,200-$3,000 setup/diagnostic / $1,500-$15,000+
 * cleanup). CTAs: discovery call primary (intent=accounting), Speak to a ProAdvisor
 * (tel), Get the free file review (intent=file-review). Canonical CTA labels only.
 * Authorship firm-level; founder schema-only (no founder name in visible content).
 * Hrefs (all BUILT): /glossary/accounts-payable/ (glossary.js data page);
 * /quickbooks/online/features/bills/; /accounting/bookkeeping/monthly-bookkeeping/.
 * Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / what-we-do / what-stays-yours / who-its-for / in-QuickBooks)
  aiSummary: [
    { q: "What is accounts payable (A/P) management?", a: "Accounts payable management is the operational work of handling the money your business owes to vendors and suppliers: <strong>recording bills</strong> as they arrive, tracking due dates, keeping the A/P aging current, preparing vendor payments on schedule, capturing vendor W-9s, and avoiding late fees and double-payments &mdash; all kept clean inside your own QuickBooks so cash outflow stays controlled." },
    { q: "What does TechBrot&rsquo;s accounts payable service do?", a: "We record incoming bills and credits, track every due date, manage the A/P aging so nothing slips, prepare vendor payments for your approval, collect and file vendor W-9s for 1099 season, and reconcile the A/P balance to your books. The result is a clean, current payables ledger and predictable cash outflow &mdash; without bills falling through the cracks." },
    { q: "Who authorizes the actual payments?", a: "<strong>You do.</strong> We record and prepare payments and keep your payables clean &mdash; you retain payment authorization and approval. We do <strong>not</strong> move your money without your approval. You stay in control of which bills get paid and when; we make sure the schedule, amounts, and records are right before they reach you." },
    { q: "Who is accounts payable management for?", a: "Businesses with enough vendor bills that due dates, approvals, and 1099 paperwork have become a burden &mdash; owners paying late fees, paying the same invoice twice, or losing track of what&rsquo;s owed and when. If A/P is eating your time or your cash flow is unpredictable because of it, the service is built for you." },
    { q: "Does it work inside my existing QuickBooks?", a: "Yes. The work happens inside your own QuickBooks file using the bills (A/P) feature &mdash; entering bills, applying vendor credits, scheduling payments, and reconciling the payable balance. It pairs with monthly bookkeeping so your payables, bank feeds, and reconciliation all tie together. Independent firm; not Intuit." },
  ],
  // What the service covers — the citable scope list (reframe of "causes"). Accurate, honest, no fabricated capabilities.
  causes: [
    { rank: "Covers 01", name: "Recording bills as they arrive", body: "Every vendor bill and credit is entered into QuickBooks promptly and accurately &mdash; correct vendor, amount, date, terms, and account &mdash; so your payables ledger reflects exactly what you owe at any moment, rather than a pile of paper and forwarded emails waiting to be keyed in." },
    { rank: "Covers 02", name: "Tracking due dates and terms", body: "We track every due date and the payment terms behind it, so bills are scheduled to be paid on time &mdash; not early enough to strain cash, not late enough to trigger fees. You get visibility into what&rsquo;s coming due before it&rsquo;s a problem." },
    { rank: "Covers 03", name: "Managing the A/P aging", body: "The accounts payable aging report is kept current and reviewed, so you can see at a glance what&rsquo;s outstanding, what&rsquo;s coming due, and what&rsquo;s overdue. A clean aging is the difference between controlled cash outflow and a stack of surprises." },
    { rank: "Covers 04", name: "Preparing vendor payments for your approval", body: "We prepare payment runs &mdash; which bills, which amounts, which dates &mdash; and present them for your authorization. We do not move your money without your approval; you keep payment authority, and we make sure the run is correct before it reaches you." },
    { rank: "Covers 05", name: "Capturing W-9s and preventing errors", body: "We collect and file vendor W-9s so 1099 season isn&rsquo;t a scramble, and we guard against the two costliest A/P mistakes: late fees from missed due dates and double-payments from duplicate or re-entered bills. Catching those before they happen is most of the value." },
    { rank: "Covers 06", name: "Reconciling A/P and controlling cash outflow", body: "The accounts payable balance is reconciled to your books so it ties out, and payment timing is managed to keep cash outflow predictable. You always know what you owe, to whom, and when it&rsquo;s due &mdash; inside one clean QuickBooks file." },
  ],
  // The ONE numbered system on the page — how we run A/P (HowTo). Practical, accurate, honest about approval staying with the client.
  fixSteps: [
    { name: "Set up the A/P workflow in your QuickBooks", body: "We start inside your own QuickBooks file &mdash; setting up the bills (A/P) feature, vendor records, payment terms, and a consistent intake path for bills (email, upload, or paper). One clean place for every payable, configured to how your business actually pays." },
    { name: "Record bills accurately as they arrive", body: "Each bill and vendor credit is entered promptly with the correct vendor, amount, terms, due date, and account. Bills no longer sit in an inbox &mdash; the payables ledger stays current, so the aging report you rely on is always accurate." },
    { name: "Track due dates and maintain the A/P aging", body: "We keep the A/P aging current and watch every due date, flagging what&rsquo;s coming due so payments are scheduled on time. You get a clear picture of upcoming outflow before it lands, not after a late notice." },
    { name: "Prepare the payment run for your approval", body: "We assemble the proposed payment run &mdash; which bills, amounts, and dates &mdash; and send it to you for authorization. You approve what gets paid and when; we never move your money without your approval. Once approved, payments are recorded against the right bills." },
    { name: "Prevent late fees, double-payments, and W-9 gaps", body: "Before anything is paid we check for duplicates and already-paid bills to prevent double-payments, confirm timing to avoid late fees, and make sure each vendor&rsquo;s W-9 is on file for 1099 reporting. The errors that cost the most are caught here, before they happen." },
    { name: "Reconcile A/P and report on cash outflow", body: "Each period the accounts payable balance is reconciled to your books so it ties, and you get a clear read on what&rsquo;s owed and what&rsquo;s coming due. Payables stay clean and cash outflow stays controlled &mdash; month after month, inside one QuickBooks file." },
  ],
  // Who it's for (reframe of proSignals). Honest fit signals, no fabricated metrics.
  proSignals: [
    { name: "Bills are slipping through the cracks", body: "You&rsquo;re paying late fees, missing due dates, or discovering bills weeks after they arrived. When payables live in an inbox instead of a ledger, things get missed &mdash; A/P management puts every bill in one tracked place." },
    { name: "You&rsquo;ve paid the same bill twice", body: "Duplicate or re-entered bills have led to double-payments, or you&rsquo;re not confident a bill hasn&rsquo;t already been paid. A clean, reconciled A/P process with duplicate checks stops that &mdash; and recovers the time you spend second-guessing." },
    { name: "Cash outflow feels unpredictable", body: "You can&rsquo;t see clearly what you owe or when it&rsquo;s due, so cash surprises you. A current A/P aging and a managed payment schedule make outflow predictable &mdash; you keep approval authority while we keep the books and the timing straight." },
  ],
  related: [
    { title: "Accounts payable, defined", href: "/glossary/accounts-payable/", body: "The plain-language definition of accounts payable (A/P) &mdash; what it is, how the aging works, and how it differs from accounts receivable &mdash; in the TechBrot accounting glossary." },
    { title: "QuickBooks Online bills (A/P) feature", href: "/quickbooks/online/features/bills/", body: "How the bills (accounts payable) feature works in QuickBooks Online &mdash; the feature this service runs inside, including entering bills, scheduling payments, and where payment processing and fees actually sit." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "Accounts payable management pairs with monthly bookkeeping so your payables, bank feeds, and reconciliation all tie together &mdash; one clean QuickBooks file, kept current every month." },
  ],
  operatorSpec: [
    { value: "You approve", label: "you retain payment authorization — we never move your money without your approval" },
    { value: "Free", label: "file review first — we look at your books before we scope" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This is an accounting service, not Intuit support. For an Intuit account, login, password, subscription, or billing issue, contact Intuit directly &mdash; we can&rsquo;t access your Intuit account. What we do is the operational accounts payable work inside your own QuickBooks file. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Will you have access to pay my bills directly?", a: "No &mdash; you retain payment authorization and approval. We record bills, track due dates, manage the A/P aging, and prepare vendor payments, then present each payment run for your approval. We do not move your money without your approval. You decide which bills get paid and when; our job is to make sure the schedule, amounts, and records are correct before they reach you." },
    { q: "What exactly does accounts payable management include?", a: "Recording vendor bills and credits as they arrive; tracking due dates and payment terms; keeping the A/P aging current; preparing vendor payment runs for your approval; capturing and filing vendor W-9s for 1099 reporting; preventing late fees and double-payments; and reconciling the accounts payable balance to your books &mdash; all inside your own QuickBooks file." },
    { q: "How does this keep my cash outflow under control?", a: "By keeping the A/P aging current and scheduling payments against their due dates, you can see what&rsquo;s owed and when before it lands. Bills are paid on time &mdash; not so early that cash is strained, not so late that fees hit &mdash; and duplicates are caught before they become double-payments. Predictable timing and a clean ledger are what keep outflow controlled." },
    { q: "Do you work inside my QuickBooks or your own system?", a: "Inside your own QuickBooks file, using the bills (accounts payable) feature. We enter bills, apply vendor credits, schedule payments, capture W-9s, and reconcile the payable balance there &mdash; so your payables, bank feeds, and reconciliation all tie together. It pairs naturally with monthly bookkeeping." },
    { q: "How do you prevent double-payments and late fees?", a: "Before any payment run, we check for duplicate or already-paid bills so the same invoice isn&rsquo;t paid twice, and we schedule against each bill&rsquo;s due date and terms so payments land on time. Because every bill is recorded in one tracked ledger rather than scattered across inboxes, the mistakes that cost the most are caught before they happen." },
    { q: "What does accounts payable management cost?", a: "We start with a free file review so we can see your vendor volume and the state of your books, then scope in writing &mdash; ongoing A/P typically runs as part of a monthly engagement. If the books or payables are behind, a focused diagnostic is typically a $1,200&ndash;$3,000 fixed-fee scope, and a full cleanup runs $1,500&ndash;$15,000+ depending on how far behind. Written scope before any work begins; independent firm." },
    { q: "Can you also handle vendor 1099s?", a: "We capture and keep vendor W-9s on file as part of running A/P so 1099 season isn&rsquo;t a scramble &mdash; the payee details and totals are already organized in your books. Whether we prepare the 1099 filings themselves depends on your engagement; we&rsquo;ll confirm scope in writing during the discovery call." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/accounts-payable/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-accounts-payable-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Accounts Payable","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Accounts Payable Management Services","description":data.description,"about":{"@type":"Thing","name":"Accounts payable (A/P) management"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How we run your accounts payable","description":"How an independent Certified QuickBooks ProAdvisor firm runs accounts payable inside your own QuickBooks — recording bills, tracking due dates, preparing payments for your approval, and reconciling A/P.","tool":[{"@type":"HowToTool","name":"QuickBooks Online or QuickBooks Desktop"},{"@type":"HowToTool","name":"Vendor bills and W-9s"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#acct-accounts-payable-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"Accounts payable (A/P) management","serviceType":"Accounts payable management, bill recording, vendor payment preparation, and A/P reconciliation in QuickBooks","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; ongoing A/P as part of a monthly engagement; $1,200–$3,000 typical fixed-fee diagnostic; $1,500–$15,000+ cleanup if books are behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

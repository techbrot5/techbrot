/* /accounting/small-business-accounting/ (AUDIENCE page for the small-business buyer
 * in the Accounting silo). Pattern cloned from the proven t-guide help-symptom page
 * (quickbooks/help/bank-feeds-not-working). DISTINCT from /accounting/ (the silo hub,
 * which routes the whole silo) — this page speaks to the small-business owner and
 * frames the full accounting offering for them; it cross-links the hub + bookkeeping
 * + services rather than duplicating the hub's routing role. Honest-triage discipline:
 * .disclosure above the fold; first FAQ = "Is TechBrot a CPA / tax-filing firm?" ->
 * No, plainly (income-tax filing = CPA, we coordinate); never imply Intuit affiliation;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in copy;
 * provider/publisher always #organization; reviewedBy = #david-westgate (schema only).
 * No fabricated stats, reviews, or internals; canonical pricing only. CTA: service =
 * discovery-call primary, phone tertiary, file-review secondary. Authorship firm-level;
 * founder schema-only. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what's included / who-it's-for / how-it-scales / tax-vs-accounting / quickbooks-named-proadvisor)
  aiSummary: [
    { q: "What does small business accounting include?", a: "The ongoing work that keeps a small business&rsquo;s books accurate and decision-ready: <strong>bookkeeping</strong> (categorizing income and expenses), <strong>reconciliation</strong> (tying every account to the bank and card statements), <strong>financial statements</strong> (a monthly profit &amp; loss, balance sheet, and cash position), <strong>payroll coordination</strong>, <strong>sales-tax</strong> tracking and filing support, and <strong>light advisory</strong> on what the numbers are telling you &mdash; all maintained inside QuickBooks with a named Certified ProAdvisor." },
    { q: "Who is small business accounting for?", a: "Owner-operators and small teams who&rsquo;ve outgrown spreadsheets or a shoebox of receipts and want their books kept current, reconciled, and explained &mdash; without hiring in-house. It fits sole proprietors, LLCs, S-corps, and small partnerships across most industries that run, or are ready to run, on QuickBooks Online or Desktop." },
    { q: "How does the support scale as a small business grows?", a: "It starts with the basics &mdash; clean monthly bookkeeping and reconciliation &mdash; and adds layers as the business needs them: monthly financial statements, payroll coordination, multi-state sales-tax handling, job costing, and deeper advisory. You add what you need when you need it rather than paying for a stack you&rsquo;re not using yet." },
    { q: "Is small business accounting the same as filing my taxes?", a: "No. Accounting keeps your books accurate, reconciled, and reported month to month so the year-end picture is clean. <strong>Filing your income-tax return is a CPA&rsquo;s job</strong> &mdash; TechBrot is an independent Certified QuickBooks ProAdvisor firm, not a CPA or tax-filing firm. We keep books a CPA can rely on and coordinate directly with yours at tax time; we don&rsquo;t file the return." },
    { q: "Do you work inside QuickBooks?", a: "Yes. The work is done in your own QuickBooks file &mdash; Online or Desktop &mdash; by a named Certified QuickBooks ProAdvisor, so the books stay in the software you already own and you always know who is keeping them. Independent firm, not Intuit." },
  ],
  // What's included — the citable scope list. Audience-framed for the small-business owner. Accurate; no invented services.
  scope: [
    { rank: "Included 01", name: "Bookkeeping kept current", body: "Every transaction categorized correctly and on a regular cadence &mdash; income, expenses, transfers, and owner activity &mdash; so the books reflect what actually happened rather than a year-end scramble. This is the foundation everything else rests on." },
    { rank: "Included 02", name: "Reconciliation that ties", body: "Each bank, credit-card, and loan account reconciled to its statement so the balances in QuickBooks match reality. Reconciliation is what turns &ldquo;the numbers look about right&rdquo; into numbers you and a CPA can actually trust." },
    { rank: "Included 03", name: "Monthly financial statements", body: "A profit &amp; loss, balance sheet, and cash position each month &mdash; the report set that shows what you earned, what you owe, and what you have. Delivered in plain terms, not just exported PDFs." },
    { rank: "Included 04", name: "Payroll coordination", body: "Coordination of your payroll so wages, taxes, and liabilities land in the books correctly and reconcile cleanly. We work alongside your payroll provider; running payroll itself stays with the provider you choose." },
    { rank: "Included 05", name: "Sales-tax tracking and filing support", body: "Sales tax tracked as it accrues and the data prepared so returns are filed accurately and on time &mdash; including multi-state where you have nexus. Accurate books are what make a clean sales-tax filing possible." },
    { rank: "Light advisory", name: "Light advisory on what the numbers mean", body: "A regular read on the trends in your own statements &mdash; margin, cash runway, where costs are drifting &mdash; so the books inform decisions instead of just satisfying the IRS. Deeper, project-level advisory is available as a separate engagement when you need it." },
  ],
  // Six ordered steps — the HowTo sequence for how we support a small business's books. Practical, accurate, general.
  howSteps: [
    { name: "Start with a free file review", body: "Before anything is scoped, a Certified ProAdvisor looks at your existing QuickBooks file &mdash; how far the books are kept up, what&rsquo;s reconciled, and where the gaps are. You get an honest read on the current state at no cost." },
    { name: "Scope the work in writing", body: "Based on the review, we put the engagement in writing &mdash; what&rsquo;s included each month, what&rsquo;s a one-time cleanup, and the fee &mdash; before any work begins. No surprises, no open-ended hourly creep." },
    { name: "Clean up the starting point if needed", body: "If the books are behind, duplicated, or miscategorized, we get them to a reliable baseline first &mdash; a one-time cleanup &mdash; so the ongoing work is built on accurate history rather than carrying old errors forward." },
    { name: "Keep the books on a monthly cadence", body: "From the clean baseline, transactions are categorized and accounts reconciled on a regular monthly rhythm, so the file is always current rather than reconstructed at year-end." },
    { name: "Deliver statements you can read", body: "Each month you get the profit &amp; loss, balance sheet, and cash position &mdash; explained in plain terms, with anything unusual flagged &mdash; so you can act on the numbers instead of filing them away." },
    { name: "Coordinate payroll, sales tax, and your CPA", body: "We keep payroll and sales-tax data landing correctly in the books and coordinate directly with your CPA at tax time &mdash; handing over books that are reconciled and return-ready. Filing the income-tax return stays with the CPA; we make their job clean." },
  ],
  whoFor: [
    { name: "Owner-operators past the spreadsheet stage", body: "You&rsquo;ve been running the books yourself in spreadsheets or by memory and it&rsquo;s no longer keeping up. You want them kept current and reconciled by someone certified &mdash; without the cost of an in-house bookkeeper." },
    { name: "Small teams that need real statements", body: "The business is making decisions &mdash; hiring, pricing, financing &mdash; that need a reliable profit &amp; loss and cash picture each month, not a once-a-year guess. You need books a lender or CPA will take seriously." },
    { name: "Growing businesses adding complexity", body: "Payroll, multiple accounts, sales tax in more than one state, or job-level costing have crept in, and the books need to scale with that complexity instead of breaking under it. You want support that grows as you do." },
  ],
  operatorSpec: [
    { value: "Free", label: "file review first — we look before we scope" },
    { value: "QuickBooks", label: "Online &amp; Desktop, in your own file, with a named ProAdvisor" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, and not a CPA or tax-filing firm" },
  ],
  related: [
    { title: "Accounting services hub", href: "/accounting/", body: "The full Accounting silo &mdash; every service we offer and how they connect. Start here if you want the complete picture of what an independent ProAdvisor firm handles beyond the small-business overview." },
    { title: "Bookkeeping services", href: "/accounting/bookkeeping/", body: "The foundation of small business accounting &mdash; transactions categorized and accounts reconciled on a monthly cadence. Where to go when bookkeeping is the specific need." },
    { title: "All accounting services", href: "/accounting/services/", body: "The service-by-service detail &mdash; financial statements, payroll coordination, sales tax, advisory, and more &mdash; for when you want to scope one piece of the support rather than the whole engagement." },
  ],
  faq: [
    { q: "Is TechBrot a CPA or tax-filing firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not a CPA firm, and we don&rsquo;t file income-tax returns. Filing your return is a CPA&rsquo;s job. What we do is keep your small business&rsquo;s books accurate, reconciled, and reported month to month &mdash; books a CPA can rely on &mdash; and we coordinate directly with your CPA at tax time. We are also independent of Intuit; QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What does small business accounting actually include?", a: "Ongoing <a href=\"/accounting/bookkeeping/\">bookkeeping</a>, reconciliation of every bank and card account, monthly financial statements (profit &amp; loss, balance sheet, cash position), payroll coordination, sales-tax tracking and filing support, and light advisory on what the numbers mean &mdash; all maintained inside your own QuickBooks file by a named Certified ProAdvisor." },
    { q: "How is this different from your accounting hub page?", a: "The accounting hub maps every service we offer and routes you to the right one. This page is written for the small business owner specifically &mdash; it frames the full accounting support around how a small business actually grows. If you want the complete service map, start at the accounting services hub; if you want to know what small business accounting looks like for you, you&rsquo;re in the right place." },
    { q: "Do you keep my books in QuickBooks?", a: "Yes. The work is done in your own QuickBooks file &mdash; Online or Desktop &mdash; by a named Certified QuickBooks ProAdvisor. The books stay in the software you already own, and you always know who is maintaining them. We&rsquo;re an independent firm, not Intuit." },
    { q: "Can you file my income taxes?", a: "No &mdash; that&rsquo;s a CPA&rsquo;s work, and we&rsquo;re not a CPA or tax-filing firm. What we do is keep the books reconciled and return-ready and coordinate directly with your CPA so the filing is clean and on time. If you don&rsquo;t have a CPA, we can keep the books to a standard one can pick up easily." },
    { q: "Will the support grow with my business?", a: "Yes. It starts with clean monthly bookkeeping and reconciliation and adds layers as you need them &mdash; financial statements, payroll coordination, multi-state sales tax, job costing, and deeper advisory. You add what you need when you need it, scoped in writing, rather than paying for a stack you&rsquo;re not using." },
    { q: "How much does small business accounting cost?", a: "It depends on the volume of transactions, the number of accounts, and what the engagement includes &mdash; so we scope it in writing after a free file review rather than quoting blind. If the books are behind, a one-time cleanup runs $1,500&ndash;$15,000+ depending on how far back things go; ongoing monthly support is scoped to your business. No open-ended hourly creep. To get an honest read on your books, call a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "What if my books are a mess right now?", a: "That&rsquo;s common, and it&rsquo;s where we start. The free file review tells us how far behind or tangled the books are; if needed, a one-time <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> gets them to a reliable baseline first, and the ongoing monthly work is built on that clean starting point rather than carrying old errors forward." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/small-business-accounting/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-small-business-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Small Business Accounting","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Small Business Accounting Services","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How we support a small business&rsquo;s books","description":"How an independent Certified QuickBooks ProAdvisor firm supports a small business&rsquo;s accounting, in six steps from free file review to a monthly cadence and CPA coordination.","tool":[{"@type":"HowToTool","name":"QuickBooks Online or QuickBooks Desktop"}],"step":data.howSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#acct-small-business-how"};})},
        {"@type":"Service","@id":url+"#service","name":"Small business accounting","serviceType":"Small business bookkeeping, reconciliation, financial statements, payroll coordination, sales-tax support, and light advisory in QuickBooks","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; ongoing monthly support scoped in writing; $1,500–$15,000+ one-time cleanup if the books are behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

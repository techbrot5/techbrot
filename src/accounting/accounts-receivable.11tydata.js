/* /accounting/accounts-receivable/ — Accounting SERVICE page (AR management) cloned
 * EXACTLY from the proven t-guide help-symptom page (src/quickbooks/help/
 * bank-feeds-not-working.{njk,11tydata.js}): same sections, same schema set, same
 * Sheet-7 honesty. Repurposed from "symptom/self-fix" to "service we run":
 * headings -> "What our accounts receivable service covers" / "How we run your
 * accounts receivable" (HowTo) / "Who AR management is for". slug
 * "acct-accounts-receivable". meta dates 2026-06-18. pageGraph reviewedBy
 * #david-westgate (schema @id only).
 *
 * HONESTY (R4/R5/R9): AR management = the BOOKKEEPING/PROCESS side — invoicing,
 * applying customer payments, maintaining the AR aging, sending overdue reminders
 * on a set collections cadence, reducing days-sales-outstanding (DSO), and keeping
 * revenue + cash visibility accurate inside your own QuickBooks. We are NOT a
 * collections agency and do NOT pursue legal/third-party collections — disclosed
 * above the fold and again in scope/FAQ. Independent firm, not Intuit, not Intuit's
 * official support. No fabricated stats/outcomes/reviews; no AggregateRating; no
 * founder name in visible content (David Westgate in reviewedBy @id only); firm-level
 * authorship. Canonical pricing only ($400-$2,500+/mo monthly bookkeeping;
 * $1,500-$15,000+ cleanup if behind). Canonical CTA lexicon: discovery ->
 * /contact/?intent=accounting (primary "Book the discovery call"); phone tel
 * "Speak to a ProAdvisor"; file review -> /quickbooks/file-review/?intent=file-review
 * "Get the free file review". <code> not mono. One numbered system max (the HowTo).
 * Cross-links: glossary/accounts-receivable, online invoices + customers features. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / what-we-do / how-we-run-it / collections-agency? / who-it's-for)
  aiSummary: [
    { q: "What is accounts receivable (AR) management?", a: "It&rsquo;s the day-to-day work of getting paid: <strong>invoicing</strong> customers accurately and on time, <strong>applying payments</strong> as they arrive, keeping the <strong>AR aging</strong> current, and <strong>following up on overdue invoices</strong> on a set cadence &mdash; all so your revenue and cash position in QuickBooks reflect reality. We handle the bookkeeping and process side; we are not a collections agency." },
    { q: "What does TechBrot&rsquo;s AR service actually do?", a: "We <strong>send invoices</strong> from your QuickBooks, <strong>record and apply customer payments</strong> to the right open invoices, <strong>maintain the AR aging report</strong> (current, 1&ndash;30, 31&ndash;60, 61&ndash;90, 90+), and <strong>run a polite, consistent reminder cadence</strong> on overdue invoices. The goal is faster, more predictable collections and books that always show true outstanding receivables." },
    { q: "How do you run accounts receivable in QuickBooks?", a: "On a recurring schedule: issue and send invoices; apply incoming payments and deposits against open invoices; reconcile what cleared the bank; refresh the AR aging; send reminders on overdue invoices by aging bucket; and flag genuinely stuck balances for your decision. Set up correctly, the aging report becomes a reliable read of who owes you and how cash is trending." },
    { q: "Are you a collections agency or a lawyer?", a: "No. We handle the <strong>bookkeeping and process side</strong> of receivables &mdash; invoicing, recording payments, the aging, and a steady reminder cadence on overdue invoices. We do <strong>not</strong> act as a third-party collections agency, report to credit bureaus, or pursue legal collections. When a balance needs a collections agency or counsel, that decision and that action stay with you and your advisors." },
    { q: "Who is AR management for?", a: "Any business that invoices customers and waits to get paid &mdash; especially B2B firms, agencies, contractors, and service businesses where a growing or aging receivables balance is quietly tying up cash. If you&rsquo;re profitable on paper but short on cash, or you&rsquo;ve lost track of who owes what, AR management is the fix." },
  ],
  // What the service covers — the citable list. General, accurate, honest. No invented internals/stats.
  causes: [
    { rank: "Covers 01", name: "Invoicing &mdash; accurate and on time", body: "We create and send your customer invoices from QuickBooks &mdash; correct amounts, terms, and customer records &mdash; so billing goes out promptly instead of slipping. Clean, timely invoices are the single biggest lever on how fast you get paid, and they keep <a href=\"/quickbooks/online/features/invoices/\">invoices</a> tied to the right <a href=\"/quickbooks/online/features/customers/\">customers</a>." },
    { rank: "Covers 02", name: "Applying customer payments", body: "As payments arrive &mdash; checks, ACH, card, or deposits &mdash; we record them and apply each to the right open invoice, so the books show what&rsquo;s truly paid versus still outstanding. Misapplied or unapplied payments are the most common reason an aging report stops being trustworthy." },
    { rank: "Covers 03", name: "Maintaining the AR aging", body: "We keep the AR aging report current &mdash; current, 1&ndash;30, 31&ndash;60, 61&ndash;90, and 90+ days &mdash; so you can see exactly which customers are slow and how much cash is tied up. The aging is the heartbeat of receivables; we make sure it reflects reality, not stale data." },
    { rank: "Covers 04", name: "Overdue follow-up (collections cadence)", body: "We run a consistent, professional reminder cadence on overdue invoices &mdash; statements and reminders timed to the aging buckets &mdash; so nothing slips quietly past due. This is the bookkeeping/process side of collections: steady, polite follow-up inside your books, not third-party debt collection." },
    { rank: "Covers 05", name: "Reducing days-sales-outstanding (DSO)", body: "By tightening invoicing, payment application, and follow-up, the time it takes to convert a sale into cash &mdash; your <code>days-sales-outstanding</code> &mdash; comes down. We track DSO and the aging trend so the improvement is visible, not assumed." },
    { rank: "Covers 06", name: "Accurate revenue &amp; cash visibility", body: "With receivables maintained properly, your revenue and cash position in QuickBooks finally reflect what&rsquo;s real &mdash; what&rsquo;s been billed, what&rsquo;s been collected, and what&rsquo;s still owed. That&rsquo;s the whole point: numbers you can plan and make decisions against." },
  ],
  // How we run it — the HowTo sequence (the one numbered system on the page). Practical, accurate, recurring.
  fixSteps: [
    { name: "Issue and send invoices", body: "On your billing schedule, we create and send invoices from QuickBooks &mdash; right amounts, terms, and customer records &mdash; so billing goes out promptly and consistently rather than whenever someone remembers." },
    { name: "Apply incoming payments", body: "As payments land, we record them and apply each to the correct open invoice, then match deposits, so the books always show what&rsquo;s genuinely paid versus still outstanding." },
    { name: "Reconcile what cleared the bank", body: "We tie recorded payments and deposits back to what actually cleared the bank, so receivables and cash agree &mdash; no phantom payments, no missed deposits." },
    { name: "Refresh the AR aging", body: "We update the AR aging report so the buckets (current, 1&ndash;30, 31&ndash;60, 61&ndash;90, 90+) reflect today&rsquo;s reality &mdash; the read you use to see who&rsquo;s slow and where cash is stuck." },
    { name: "Send overdue reminders on cadence", body: "We send statements and reminders on overdue invoices, timed to the aging buckets &mdash; a steady, polite follow-up rhythm that gets invoices paid without you chasing them by hand." },
    { name: "Flag genuinely stuck balances", body: "When an invoice stays unpaid despite the cadence, we flag it with the aging detail so you can decide the next move &mdash; a payment plan, a write-off, or handing it to a collections agency or counsel. That decision stays with you; we keep the books accurate either way." },
  ],
  proSignals: [
    { name: "You&rsquo;re profitable but short on cash", body: "The P&amp;L looks healthy but the bank account doesn&rsquo;t. A growing or aging receivables balance is one of the earliest signals that profit is stuck in unpaid invoices &mdash; AR management converts it back into cash." },
    { name: "Invoicing and follow-up keep slipping", body: "Invoices go out late, payments aren&rsquo;t applied promptly, and overdue follow-up is whenever someone has time. Inconsistent receivables work quietly stretches your DSO and trains customers to pay slowly." },
    { name: "The aging report no longer ties out", body: "Unapplied payments, duplicate invoices, or stale balances mean the AR aging can&rsquo;t be trusted. When the aging stops reflecting reality, it&rsquo;s a bookkeeping cleanup &mdash; not just a reminder email." },
  ],
  related: [
    { title: "Accounts receivable (definition)", href: "/glossary/accounts-receivable/", body: "The plain-English glossary entry &mdash; what accounts receivable is, why an aging balance signals cash risk, and how the aging buckets work." },
    { title: "QuickBooks invoices", href: "/quickbooks/online/features/invoices/", body: "The invoicing feature this service runs on &mdash; how invoices are created, sent, and tracked to the right customer inside QuickBooks Online." },
    { title: "QuickBooks customers", href: "/quickbooks/online/features/customers/", body: "Customer records are the backbone of receivables &mdash; how customers, sub-customers, and balances are organized so the AR aging stays accurate." },
  ],
  operatorSpec: [
    { value: "Free", label: "file review first — we look at the books and the aging before we scope" },
    { value: "$400–$2,500+/mo", label: "AR management runs inside recurring monthly bookkeeping, scoped to volume" },
    { value: "Independent", label: "Certified ProAdvisor firm — not a collections agency, not Intuit" },
  ],
  faq: [
    { q: "Is this a collections agency?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. Our accounts receivable service is the <strong>bookkeeping and process side</strong> of getting paid &mdash; invoicing, recording and applying payments, maintaining the AR aging, and sending overdue reminders on a steady cadence inside your own QuickBooks. We do not act as a third-party collections agency, do not report to credit bureaus, and do not pursue legal collections. When a balance needs an agency or counsel, that decision and action stay with you." },
    { q: "What does accounts receivable management include?", a: "Invoicing customers accurately and on time; recording incoming payments and applying them to the right open invoices; keeping the AR aging report current (current, 1&ndash;30, 31&ndash;60, 61&ndash;90, 90+); running a consistent reminder cadence on overdue invoices; tracking days-sales-outstanding (DSO); and keeping revenue and cash visibility accurate. It runs on a recurring schedule inside monthly bookkeeping." },
    { q: "Will you chase my overdue invoices for me?", a: "We send statements and reminders on overdue invoices on a set, professional cadence timed to the aging buckets &mdash; that&rsquo;s the bookkeeping side of collections, and it gets a large share of slow invoices paid without you chasing them by hand. What we don&rsquo;t do is act as a third-party collections agency or pursue legal collections. If an invoice stays stuck, we flag it with the detail so you can decide whether to set a payment plan, write it off, or hand it to an agency or attorney." },
    { q: "How does this reduce days-sales-outstanding (DSO)?", a: "DSO is how long it takes to turn a sale into cash. Tightening the three levers &mdash; getting invoices out promptly, applying payments correctly, and following up on overdue invoices consistently &mdash; shortens that cycle. We track DSO and the aging trend over time so the improvement is visible, not assumed. We don&rsquo;t promise a specific number; results depend on your customers and terms." },
    { q: "Does this work in QuickBooks Online and Desktop?", a: "Yes. We run accounts receivable inside your existing QuickBooks file &mdash; invoices, customers, payments, and the AR aging exist in both QuickBooks Online and QuickBooks Desktop. The workflow is the same: issue invoices, apply payments, reconcile, refresh the aging, and send reminders on cadence. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What if my receivables are already a mess?", a: "If the aging no longer ties out &mdash; unapplied payments, duplicate or stale invoices, balances that aren&rsquo;t real &mdash; that&rsquo;s a cleanup before ongoing AR management can be reliable. We start with a free file review, then a focused <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> is scoped in writing ($1,500&ndash;$15,000+ depending on how far behind), after which recurring AR management keeps it accurate." },
    { q: "How much does AR management cost?", a: "Accounts receivable management runs inside a recurring <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> engagement &mdash; typically $400&ndash;$2,500+/mo, scoped to your invoice volume, payment methods, and how much follow-up is involved. If the books or the aging need a cleanup first, that&rsquo;s scoped separately ($1,500&ndash;$15,000+). Fixed fee, written scope before any work begins. To scope it to your invoice volume, call a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>. No hourly billing." },
    { q: "Do you handle invoicing and customer records too?", a: "Yes &mdash; invoicing and customer setup are part of the service. We create and send <a href=\"/quickbooks/online/features/invoices/\">invoices</a> and keep <a href=\"/quickbooks/online/features/customers/\">customer records</a> organized so the AR aging stays accurate. Clean invoices tied to the right customers are the foundation that makes everything downstream &mdash; payment application, aging, and follow-up &mdash; actually work." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/accounts-receivable/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-accounts-receivable-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Accounts Receivable","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Accounts Receivable Management Services","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How we run your accounts receivable in QuickBooks","description":"How an independent Certified QuickBooks ProAdvisor firm runs recurring accounts receivable: invoicing, applying payments, reconciling, maintaining the AR aging, and following up on overdue invoices on a set cadence.","tool":[{"@type":"HowToTool","name":"QuickBooks Online or QuickBooks Desktop"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#acct-accounts-receivable-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"Accounts receivable management","serviceType":"Accounts receivable bookkeeping: invoicing, payment application, AR aging, and overdue follow-up","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; AR management runs inside monthly bookkeeping at $400–$2,500+/mo; $1,500–$15,000+ cleanup if the books or aging are behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

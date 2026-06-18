/* /accounting/pricing/ (accounting-SILO pricing view — the fixed-fee model for the
 * Accounting service silo, t-guide tier). DISTINCT from the master /pricing/ page:
 * this is the accounting-silo lens and cross-links /pricing/ for the full picture.
 * Pattern cloned exactly from the proven bank-feeds-not-working t-guide page.
 * Honest-triage: .disclosure above the fold; first FAQ = "Is this Intuit / are these
 * Intuit's prices?" -> No, plainly; never "official"; phone = "Speak to a ProAdvisor"
 * (canonical lexicon) + "(independent firm)" in copy; provider/publisher always
 * #organization; reviewedBy = #david-westgate (schema only). CANONICAL FIGURES ONLY
 * (blueprint Sheet 0): monthly bookkeeping $400-$2,500+/mo; cleanup/catch-up
 * $1,500-$15,000+; new setup $750-$5,000+; advisory / fractional CFO scoped per
 * engagement. Nothing invented. ONE numbered system max (the "how pricing works"
 * HowTo). <code> not mono. CTA: primary = discovery call (/contact/?intent=accounting),
 * phone tertiary, file-review tertiary. Authorship firm-level; founder schema-only.
 * Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (model / what it costs / what drives it / fixed-vs-hourly / vs master pricing)
  aiSummary: [
    { q: "How does TechBrot price accounting services?", a: "Every engagement is scoped to a <strong>written fixed monthly fee</strong> after a discovery call and a review of your file &mdash; no surprise hourly billing. You see the number, and what it covers, before any work begins. The fee reflects the real shape of your books rather than a published tier, because two businesses with the same revenue can have very different transaction volume, accounts, and complexity." },
    { q: "What do accounting services cost?", a: "Our canonical ranges: <strong>monthly bookkeeping $400&ndash;$2,500+/month</strong>; a one-time <strong>cleanup or catch-up $1,500&ndash;$15,000+</strong> depending on how far behind the books are; <strong>new QuickBooks setup $750&ndash;$5,000+</strong>; and <strong>advisory / fractional CFO</strong> scoped per engagement. Your exact figure is fixed in writing after the file review &mdash; these are starting ranges, not a quote." },
    { q: "What drives my fixed monthly fee?", a: "The main drivers are <strong>transaction volume</strong>, the <strong>number of accounts</strong> (bank, credit-card, loan), whether you run <strong>payroll</strong>, <strong>sales-tax</strong> filing obligations, <strong>inventory</strong>, <strong>multi-entity</strong> structure, and overall <strong>complexity</strong> &mdash; how clean the file is and how much catch-up it needs. More of any of these moves the fee up within the range; a simple, current file sits at the lower end." },
    { q: "Is it fixed-fee or hourly?", a: "Fixed-fee. We scope the work and quote a flat monthly figure (or a flat project fee for cleanup and setup) so you can budget with certainty and never get a surprise hourly bill. If your needs change &mdash; you add payroll, a second entity, or inventory &mdash; we re-scope and agree a new fixed fee in writing before anything changes." },
    { q: "How is this different from the main pricing page?", a: "This page is the accounting-silo view: the fixed-fee model and ranges for bookkeeping, cleanup, setup, and advisory. The <a href=\"/pricing/\">main pricing page</a> shows the full picture across everything we do, including QuickBooks-specific work. Same fixed-fee philosophy and same canonical figures &mdash; this one is focused on the accounting engagement." },
  ],
  // What drives the fee — the citable list. Canonical drivers only; no invented modifiers.
  causes: [
    { rank: "Driver 01", name: "Transaction volume", body: "The biggest single driver. The number of transactions flowing through your accounts each month &mdash; deposits, payments, transfers, card charges &mdash; sets how much categorization, matching, and review the books need. A handful of transactions a week and a few hundred a week sit at very different points in the range." },
    { rank: "Driver 02", name: "Number of accounts", body: "Each bank account, credit card, loan, and merchant or payment account is its own feed to reconcile every month. Two or three accounts is routine; a dozen across cards, lines of credit, and platforms adds real reconciliation work and moves the fee up." },
    { rank: "Driver 03", name: "Payroll", body: "Running payroll &mdash; and the journal entries, liabilities, and reconciliations that come with it &mdash; adds scope to the monthly close. The number of employees and pay runs, and whether payroll is in QuickBooks or a separate system that needs syncing, all factor in." },
    { rank: "Driver 04", name: "Sales tax", body: "Sales-tax filing obligations &mdash; tracking taxable sales, handling multiple jurisdictions or states, and preparing or supporting returns &mdash; add ongoing work. A single in-state filing is light; multi-state or marketplace sales-tax exposure is materially more." },
    { rank: "Driver 05", name: "Inventory", body: "Inventory accounting &mdash; tracking cost of goods, valuation, and the entries that keep inventory tied to the books &mdash; is some of the most detailed bookkeeping there is. If you carry and account for inventory, that complexity is reflected in the fee." },
    { rank: "Driver 06", name: "Multi-entity &amp; complexity", body: "Multiple entities, intercompany transactions, classes or locations, and how clean (or behind) the file currently is all shape the work. A current, well-kept single-entity file sits at the lower end; a multi-entity or catch-up situation sits higher and may start with a one-time cleanup." },
  ],
  // The fixed-fee model, as an ordered HowTo — the ONE numbered system on the page.
  fixSteps: [
    { name: "Book a discovery call", body: "We start with a short call to understand your business, how your books are kept today, and what you need &mdash; bookkeeping, a cleanup, a fresh setup, or advisory. No charge, and nothing committed; the goal is to understand the work before anyone talks price." },
    { name: "Review the file", body: "We look at your actual QuickBooks file (or current records) &mdash; transaction volume, the accounts in play, payroll, sales tax, inventory, entity structure, and how current the books are. This is how we scope to reality rather than a generic tier. A free file review is available if you want eyes on it first." },
    { name: "Scope the work to the real drivers", body: "Against what the review shows, we map your situation onto the drivers &mdash; volume, accounts, payroll, sales tax, inventory, multi-entity, complexity &mdash; and place the engagement within our canonical ranges: bookkeeping $400&ndash;$2,500+/month, cleanup $1,500&ndash;$15,000+, setup $750&ndash;$5,000+, advisory scoped per engagement." },
    { name: "Quote one written fixed fee", body: "You get a single flat figure &mdash; a fixed monthly fee for ongoing bookkeeping, or a flat project fee for a cleanup or setup &mdash; with exactly what it covers, in writing, before any work starts. No hourly meter, no surprise invoice. You decide with the number in front of you." },
    { name: "Re-scope only when the work changes", body: "The fee holds for the scope agreed. If your needs change &mdash; you add payroll, a second entity, inventory, or a new sales-tax obligation &mdash; we re-scope and agree a new fixed fee in writing before anything changes. You&rsquo;re never billed for more than what you signed off on." },
  ],
  // Who each engagement fits — three placements across the model.
  proSignals: [
    { name: "Monthly bookkeeping ($400&ndash;$2,500+/mo)", body: "Fits a business whose books are current (or close) and that wants them kept clean, reconciled, and reporting-ready every month. Where you land in the range depends on volume, accounts, payroll, and sales tax &mdash; a simple single-entity file at the bottom, a high-volume or payroll-and-sales-tax operation higher up." },
    { name: "Cleanup or new setup ($1,500&ndash;$15,000+ / $750&ndash;$5,000+)", body: "Cleanup fits books that are behind, duplicated, or no longer tie &mdash; a one-time flat project to get current, priced by how far behind. New setup fits a business starting fresh or migrating &mdash; chart of accounts, connections, and opening balances built right, $750&ndash;$5,000+ depending on scope." },
    { name: "Advisory / fractional CFO (scoped per engagement)", body: "Fits an owner who needs more than clean books &mdash; forecasting, cash-flow planning, KPI reporting, or a financial partner in decisions. Because the work is bespoke to the business and its goals, advisory is scoped per engagement rather than placed in a fixed range." },
  ],
  related: [
    { title: "Full pricing across everything we do", href: "/pricing/", body: "This page is the accounting-silo view. For the full picture &mdash; pricing across bookkeeping, cleanup, setup, advisory, and QuickBooks-specific work in one place &mdash; the main pricing page is the complete reference. Same fixed-fee model, same canonical figures." },
    { title: "Accounting services overview", href: "/accounting/", body: "What the accounting engagement actually covers &mdash; the monthly close, reconciliation, reporting, and advisory work behind the fee. Start here if you want to understand the service before the numbers." },
    { title: "The full accounting service menu", href: "/accounting/services/", body: "The complete list of accounting services we scope &mdash; bookkeeping, cleanup, month-end close, reconciliation, payroll, sales tax, and more &mdash; so you can see exactly what a fixed-fee engagement can include." },
  ],
  operatorSpec: [
    { value: "Fixed-fee", label: "every engagement scoped to a written flat figure &mdash; no surprise hourly billing" },
    { value: "$400–$2,500+", label: "typical monthly bookkeeping range, placed on your real drivers" },
    { value: "Independent", label: "Certified ProAdvisor firm &mdash; our own pricing, not Intuit&rsquo;s" },
  ],
  faq: [
    { q: "Are these Intuit&rsquo;s prices, or is this Intuit?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software pricing. The figures on this page are <strong>our own</strong> fixed-fee ranges for the accounting work we do inside your books. QuickBooks subscriptions are billed by Intuit separately and are a different thing from our service fee. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "How much do accounting services cost?", a: "Our canonical ranges are monthly bookkeeping $400&ndash;$2,500+/month, a one-time cleanup or catch-up $1,500&ndash;$15,000+, new QuickBooks setup $750&ndash;$5,000+, and advisory / fractional CFO scoped per engagement. These are starting ranges, not a quote &mdash; your exact figure is fixed in writing after a discovery call and a review of your file." },
    { q: "Is the fee fixed or hourly?", a: "Fixed. We scope the work and quote a flat monthly fee for ongoing bookkeeping, or a flat project fee for a cleanup or setup, so you can budget with certainty and never get a surprise hourly bill. If your needs change &mdash; you add payroll, a second entity, or inventory &mdash; we re-scope and agree a new fixed fee in writing before anything changes." },
    { q: "What drives where I land in the range?", a: "The main drivers are transaction volume, the number of accounts you run, whether you have payroll, your sales-tax filing obligations, inventory, multi-entity structure, and how clean or behind the file currently is. More of any of these moves the fee up within the range; a current, simple, single-entity file sits at the lower end." },
    { q: "How is this different from the main pricing page?", a: "This is the accounting-silo view &mdash; the fixed-fee model and ranges for bookkeeping, cleanup, setup, and advisory. The main pricing page shows the full picture across everything we do, including QuickBooks-specific work, in one place. Same fixed-fee philosophy and same canonical figures; this page is focused on the accounting engagement." },
    { q: "Why don&rsquo;t you just publish one flat price?", a: "Because two businesses with the same revenue can have very different books &mdash; one with a few dozen monthly transactions and one account, another with high volume, payroll, sales tax, inventory, and multiple entities. A single published price would either overcharge the simple file or undercharge (and under-serve) the complex one. Scoping to your real drivers is how the fixed fee stays fair and stays fixed." },
    { q: "Do I have to commit on the discovery call?", a: "No. The discovery call and the file review come first, with nothing committed. You only decide once you have a written fixed fee in front of you and know exactly what it covers. A free file review is available if you&rsquo;d like a ProAdvisor to look at the file before you talk price." },
    { q: "What if my books are behind &mdash; do I pay the monthly fee or a cleanup fee?", a: "If the books are materially behind, an engagement usually starts with a one-time cleanup ($1,500&ndash;$15,000+, priced by how far behind) to get current, and then moves to a monthly bookkeeping fee ($400&ndash;$2,500+/month) to keep it that way. The file review tells us which you need, and both are quoted as fixed figures in writing before any work begins." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/pricing/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-pricing-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Pricing","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Accounting Services Pricing","description":data.description,"about":{"@id":"https://techbrot.com/#organization"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How TechBrot prices an accounting engagement","description":"How a fixed-fee accounting engagement is scoped and quoted, in five ordered steps from discovery call to written fixed fee.","step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#acct-pricing-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"Fixed-fee accounting and bookkeeping services","serviceType":"Bookkeeping, cleanup, QuickBooks setup, and advisory","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Fixed fee scoped after a discovery call and file review: monthly bookkeeping $400–$2,500+/month; one-time cleanup or catch-up $1,500–$15,000+; new QuickBooks setup $750–$5,000+; advisory / fractional CFO scoped per engagement"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

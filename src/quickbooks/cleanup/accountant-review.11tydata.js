/* /quickbooks/cleanup/accountant-review/ (cleanup-context second-opinion file review
 * explainer — a QuickBooks Cleanup silo page). Shape cloned from the proven
 * bank-feeds-not-working t-guide page. Citable: what a file review checks + the
 * four-step honest review process (HowTo). Sheet-7 honest-triage: .disclosure above
 * the fold; first FAQ = "Is this Intuit's official QuickBooks support?" -> No, plainly;
 * never "official" near our offer; phone = "Speak to a ProAdvisor" (canonical lexicon)
 * + "(independent firm)" in copy; provider/publisher always #organization; reviewedBy
 * = #david-westgate (schema only). No fabricated Intuit phone/hours; no fabricated
 * internals; canonical pricing only (review FREE / cleanup $1,500-$15,000+). Honest:
 * "we'll tell you if you don't need us"; we don't file taxes. DISTINCT from
 * /quickbooks/file-review/ (standalone offer) — this is the cleanup-context explainer;
 * cross-linked both ways. CTA: file-review primary, phone tertiary. Authorship
 * firm-level; founder schema-only. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / what-it-checks / how-it-works / when-to-get / is-it-really-free)
  aiSummary: [
    { q: "What is a QuickBooks file review or second opinion?", a: "An independent assessment of your QuickBooks file by a Certified ProAdvisor. They open the file and check the things that determine whether the numbers can be trusted &mdash; reconciliation status, the chart of accounts, categorization quality, and balance-sheet integrity &mdash; then give you a written, honest read of its condition and a straight answer on whether you need a cleanup, which tier, or nothing at all." },
    { q: "What does a QuickBooks file review check?", a: "The reconciliation status of every bank and credit-card account; the health of the chart of accounts; the miscategorization rate; balance-sheet integrity (Opening Balance Equity, undeposited funds, and duplicates); and payroll and sales-tax setup. Together those reveal whether the file is accurate, whether it holds together, and whether it&rsquo;s ready to hand to a CPA." },
    { q: "How does the review work?", a: "Four steps: we do a free file review (we look); we give you a written, honest read of the file&rsquo;s condition; if work is needed we hand you a written, fixed-fee scope at a tier &mdash; focused, standard, or complex; then you decide. There&rsquo;s no pressure and no obligation, and if the books are fine we tell you that." },
    { q: "When should I get a file review?", a: "When you&rsquo;re taking over a file you didn&rsquo;t set up; before tax season, so you walk in with clean books; when your CPA has flagged issues; or simply when the numbers look off and you want a neutral second opinion. It&rsquo;s a diagnosis &mdash; you find out what shape the file is in before committing to anything." },
    { q: "Is the file review really free?", a: "Yes &mdash; the review itself is free and no-obligation. A Certified ProAdvisor looks at the file and gives you an honest read of its condition at no charge. If a cleanup is warranted you get a written, fixed-fee scope first ($1,500&ndash;$15,000+ depending on how far behind), and you decide. If your books are fine, we say so. We&rsquo;re an independent firm, not Intuit." },
  ],
  // "What a file review checks" — the citable diagnostic list. General and accurate; no invented internals.
  causes: [
    { rank: "Check 01", name: "Reconciliation status of every account", body: "Whether each bank and credit-card account is reconciled, and through what date. Unreconciled or partially reconciled accounts are the clearest sign the numbers don&rsquo;t tie to reality &mdash; the review establishes how many accounts are behind and by how long, because that drives everything downstream." },
    { rank: "Check 02", name: "Chart of accounts health", body: "Whether the chart of accounts is sound or has grown into a sprawl of duplicate, unused, or misused accounts. A bloated or mismapped chart makes reports unreliable and categorization inconsistent &mdash; the review flags what needs consolidating, renaming, or restructuring." },
    { rank: "Check 03", name: "Miscategorization rate", body: "How accurately transactions are categorized &mdash; sampled across the file to gauge how often expenses, income, transfers, and owner activity land in the wrong place. A high miscategorization rate is what turns a profit-and-loss statement into fiction, and it&rsquo;s one of the biggest drivers of cleanup scope." },
    { rank: "Check 04", name: "Opening Balance Equity & balance-sheet integrity", body: "Whether the balance sheet actually holds together &mdash; a stray Opening Balance Equity balance, accounts that don&rsquo;t roll forward, or totals that don&rsquo;t make sense. A balance sheet that doesn&rsquo;t hold together is the surest signal the file needs real cleanup before anyone relies on it." },
    { rank: "Check 05", name: "Undeposited funds & duplicates", body: "Whether the Undeposited Funds account is stacked with payments that were never cleared into the bank, and whether duplicate transactions are inflating income or expenses. Both quietly distort the numbers and both are common in files that have drifted &mdash; the review surfaces them." },
    { rank: "Check 06", name: "Payroll & sales-tax setup", body: "Whether payroll and sales-tax are set up and recorded correctly, since errors there compound into liability and filing problems. The review checks that what&rsquo;s in QuickBooks lines up with what was actually paid and owed &mdash; part of confirming the file is CPA-ready." },
  ],
  // "How the review works" — the four-step HowTo process. Honest, no-pressure framing.
  fixSteps: [
    { name: "Free file review &mdash; we look", body: "You give a Certified ProAdvisor access to the file (or send a backup), and we open it and work through the checks above &mdash; reconciliation, chart of accounts, categorization, balance-sheet integrity, undeposited funds, payroll and sales-tax setup. This costs nothing and carries no obligation; it&rsquo;s the diagnosis, not the work." },
    { name: "A written, honest read of the file&rsquo;s condition", body: "You get a plain-language write-up of what shape the file is in &mdash; what&rsquo;s sound, what&rsquo;s broken, and how far behind it is. It&rsquo;s an honest assessment, not a sales pitch. If the books are fine, the read says the books are fine and you&rsquo;re done." },
    { name: "If work is needed, a written fixed-fee scope", body: "When the file does need cleanup, we hand you a written, fixed-fee scope at a tier &mdash; focused, standard, or complex &mdash; based on what the review actually found. The price is set before any work starts, so there are no surprises and no hourly meter." },
    { name: "You decide &mdash; no pressure", body: "The decision is yours. You can move ahead with the scoped cleanup, take the written read to another firm or your CPA, or do nothing at all. We don&rsquo;t pressure, and we won&rsquo;t invent work that isn&rsquo;t there &mdash; the point of an honest second opinion is that you can trust the answer." },
  ],
  proSignals: [
    { name: "You&rsquo;re taking over a file", body: "You&rsquo;ve inherited a QuickBooks file you didn&rsquo;t set up &mdash; from a previous bookkeeper, a departing partner, or a business you bought &mdash; and you have no idea whether what&rsquo;s in it is right. A second opinion tells you what you&rsquo;re actually inheriting before you build on top of it." },
    { name: "Before tax season, or your CPA flagged it", body: "You want to walk into tax season with clean books, or your CPA has already said the numbers don&rsquo;t tie. A review confirms whether the file is CPA-ready and pinpoints what needs fixing first &mdash; we get the file ready; we don&rsquo;t file the taxes." },
    { name: "The numbers just look off", body: "Reports don&rsquo;t match what you know about the business, the balance sheet looks strange, or you simply don&rsquo;t trust the figures anymore. A neutral, independent set of eyes tells you honestly whether something&rsquo;s wrong &mdash; and whether it&rsquo;s worth fixing." },
  ],
  related: [
    { title: "QuickBooks file review", href: "/quickbooks/file-review/", body: "The standalone free file review &mdash; what it includes, how to send your file, and what you get back. This page is the cleanup-context explainer; the file-review page is where the review itself begins." },
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/", body: "If the review finds the file is behind, a fixed-fee QuickBooks cleanup repairs reconciliation, categorization, and balance-sheet integrity properly &mdash; $1,500&ndash;$15,000+ depending on how far behind the books are." },
    { title: "Focused cleanup", href: "/quickbooks/cleanup/focused/", body: "When the review scopes the work as a focused fix &mdash; one or a few accounts, a single year, or a specific problem rather than a full rebuild &mdash; the focused cleanup tier is the targeted, lower-cost path." },
  ],
  operatorSpec: [
    { value: "Free", label: "the file review itself — no obligation, no pressure" },
    { value: "Honest", label: "we&rsquo;ll tell you if your books are fine and you don&rsquo;t need us" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For an Intuit account, login, password, subscription, or billing issue, contact Intuit directly; we can&rsquo;t access your Intuit account. What we do is review the operational accounting inside your own books and tell you honestly what shape the file is in. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What does a QuickBooks file review actually check?", a: "The reconciliation status of every bank and credit-card account; the health of the chart of accounts; how accurately transactions are categorized; balance-sheet integrity, including Opening Balance Equity, undeposited funds, and duplicates; and payroll and sales-tax setup. Together those tell us whether the numbers are accurate, whether the file holds together, and whether it&rsquo;s ready to hand to a CPA." },
    { q: "Is the file review really free, with no obligation?", a: "Yes. A Certified ProAdvisor opens your file, works through the checks, and gives you a written, honest read of its condition at no charge and with no obligation. If a cleanup is warranted, you get a written, fixed-fee scope first and you decide whether to proceed. If your books are fine, we tell you that &mdash; we don&rsquo;t invent work that isn&rsquo;t there." },
    { q: "Will you just tell me I need an expensive cleanup?", a: "No. The point of an honest second opinion is that you can trust the answer. If the books are in good shape, the written read says so and you&rsquo;re done &mdash; no cleanup, no charge. When work is genuinely needed, we scope it to what the review actually found and put a fixed fee on it before anything starts, so you&rsquo;re never on an open-ended meter." },
    { q: "How is this different from your QuickBooks file-review page?", a: "It&rsquo;s the same review, framed for the cleanup context. This page explains what a second-opinion review checks and how it decides whether you need a cleanup and which tier. The standalone file-review page is where the review itself begins &mdash; what it includes and how to send your file. See our QuickBooks file review page to start one." },
    { q: "When should I ask for a second opinion on my QuickBooks file?", a: "When you&rsquo;re taking over a file you didn&rsquo;t set up; before tax season, so you go in with clean books; when your CPA has flagged that the numbers don&rsquo;t tie; or simply when the figures look off and you want a neutral, independent read. It&rsquo;s a diagnosis &mdash; you find out what shape the file is in before committing to any work." },
    { q: "If I need a cleanup, what does it cost?", a: "The review is free; the cleanup, if you need one, is quoted as a written fixed fee at a tier &mdash; focused, standard, or complex &mdash; based on what the review found. Cleanups run $1,500&ndash;$15,000+ depending on how many accounts are behind, how long, and how much needs rebuilding. You see the scope and price before any work begins." },
    { q: "Do you file my taxes after the review?", a: "No &mdash; we don&rsquo;t file taxes. What we do is review the QuickBooks file and, if needed, clean it up so it&rsquo;s accurate and CPA-ready. Your CPA or tax preparer then files from clean books. If the review finds the file is already in good shape, it&rsquo;s ready to hand to your CPA as-is." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/cleanup/accountant-review/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-cleanup-accountant-review-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Cleanup","item":"https://techbrot.com/quickbooks/cleanup/"},
          {"@type":"ListItem","position":4,"name":"Accountant Review","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks File Review by a Certified ProAdvisor (Honest Second Opinion)","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How a Certified ProAdvisor file review works","description":"How an independent second-opinion QuickBooks file review works, from a free look to a written read of the file's condition to an optional fixed-fee cleanup scope.","tool":[{"@type":"HowToTool","name":"QuickBooks Online or QuickBooks Desktop file"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#qb-cleanup-accountant-review-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks file review and second opinion","serviceType":"Independent Certified ProAdvisor QuickBooks file review and cleanup assessment","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free, no-obligation file review; $1,500–$15,000+ fixed-fee cleanup only if the file is behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

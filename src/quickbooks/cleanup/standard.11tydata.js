/* /quickbooks/cleanup/standard/ — STANDARD cleanup tier (the mid tier of the
 * QuickBooks cleanup ladder): MULTIPLE related issues and/or several months-to-
 * about-a-year behind, brought to CPA-ready, typically $3,000–$7,500 fixed-fee.
 * Shape cloned from the proven t-guide help-symptom page (bank-feeds-not-working);
 * headings re-labelled: causes -> "What a standard cleanup covers"; fixSteps ->
 * "How a standard cleanup runs". Distinct from Focused ($1,200–$3,000, one issue)
 * and Complex ($7,500–$15,000+, multi-year/structural/multi-entity). Sheet-7
 * honest-triage: .disclosure above the fold; first FAQ = "Is this Intuit's
 * official QuickBooks support?" -> No, plainly; never "official" near our offer;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in
 * copy; provider/publisher always #organization; reviewedBy = #david-westgate
 * (schema only). We do the cleanup; a CPA files the taxes — we don't file taxes.
 * No fabricated stats/internals; canonical pricing only ($3,000–$7,500 standard).
 * CTA: cleanup = free file review primary, phone + discovery call secondary;
 * intent=qb-cleanup. Authorship firm-level; founder schema-only. Independent
 * firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / who-it's-for / how-it-runs / vs-other-tiers / price)
  aiSummary: [
    { q: "What is a standard QuickBooks cleanup?", a: "It&rsquo;s the mid tier of QuickBooks cleanup: a fixed-fee project to fix <strong>several related issues at once</strong> and/or catch up books that are <strong>several months to about a year behind</strong>, then bring the file to CPA-ready condition. Think a few months unreconciled <em>plus</em> miscategorizations <em>plus</em> a messy chart of accounts &mdash; not a single fix, and not a multi-year structural rebuild. Typically <strong>$3,000&ndash;$7,500</strong> fixed-fee." },
    { q: "How do I know I&rsquo;m in the standard tier and not focused or complex?", a: "You&rsquo;re in <strong>standard</strong> when more than one thing is wrong and the books are some months &mdash; up to roughly a year &mdash; behind, but it&rsquo;s not multi-year, multi-entity, or structurally broken. A single, contained problem is the <strong>focused</strong> tier ($1,200&ndash;$3,000). Multiple years behind, a corrupted or restructured file, or several entities is the <strong>complex</strong> tier ($7,500&ndash;$15,000+). A free file review confirms which tier fits before any quote." },
    { q: "How much does a standard QuickBooks cleanup cost?", a: "Typically <strong>$3,000&ndash;$7,500</strong> as a fixed fee, scoped in writing before any work starts. The range reflects how many accounts and months are involved and how tangled the categorization and chart of accounts are. You see the exact number in a written scope after the free file review &mdash; no hourly surprises." },
    { q: "What does a standard cleanup actually fix?", a: "Reconciliation across all accounts, miscategorized and uncategorized transactions, duplicate and missing entries, a messy or bloated chart of accounts, and several months of catch-up bookkeeping &mdash; all reconciled to bank and statement reality and handed off CPA-ready. Common triggers: a bank-feed mess plus duplicates plus an off reconciliation, or post-migration cleanup of a year." },
    { q: "Do you file my taxes after the cleanup?", a: "No. We do the <strong>cleanup</strong> &mdash; we bring the books to CPA-ready condition and hand off clean, reconciled files and a summary of what was fixed. Your CPA or tax preparer files the return. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm, not a tax-filing firm and not Intuit." },
  ],
  // "causes" RE-LABELLED to "What a standard cleanup covers" — what the standard tier addresses, ranked.
  causes: [
    { rank: "Covers 01", name: "Several months unreconciled across accounts", body: "The core of a standard cleanup. Several months &mdash; up to roughly a year &mdash; where bank, credit-card, and loan accounts haven&rsquo;t been reconciled, so the balances in QuickBooks no longer match real statements. We reconcile every account month by month until each ties to the statement." },
    { rank: "Covers 02", name: "Miscategorized and uncategorized transactions", body: "Months of transactions posted to the wrong accounts, dumped in Uncategorized, or split inconsistently &mdash; the kind of mess that throws off the P&amp;L and the balance sheet. We re-categorize against a clean structure so reports actually mean something." },
    { rank: "Covers 03", name: "A messy or bloated chart of accounts", body: "Duplicate accounts, vague catch-all categories, and accounts created on the fly that never should have existed. We rationalize the chart of accounts to a clean, CPA-friendly structure and re-map the history to it." },
    { rank: "Covers 04", name: "Duplicate and missing transactions", body: "Entries downloaded twice, manually keyed and then re-imported, or dropped entirely after a bank-feed mess. We remove genuine duplicates carefully &mdash; without deleting real transactions &mdash; and recover the gaps so the register reflects reality." },
    { rank: "Covers 05", name: "A bank-feed mess that broke the books", body: "A common standard-tier trigger: a feed that disconnected or doubled up, leaving duplicates, miscategorized downloads, and a reconciliation that won&rsquo;t tie. We fix the downstream damage in the books, not just the connection." },
    { rank: "Also covers", name: "Post-migration cleanup of about a year", body: "After a move between QuickBooks versions or platforms, a year of history can land with balances off, categories scrambled, or reconciliations broken. Cleaning up roughly a year of post-migration damage sits squarely in the standard tier." },
  ],
  // "fixSteps" RE-LABELLED to "How a standard cleanup runs" — the ordered engagement: review -> written scope -> reconcile -> categorize/COA -> catch up -> handoff -> optional monthly.
  fixSteps: [
    { name: "Free file review", body: "We look at your QuickBooks file first &mdash; how many months and accounts are behind, how tangled the categorization and chart of accounts are, and whether you&rsquo;re truly in the standard tier and not focused or complex. No charge, and no work begins until you&rsquo;ve seen the scope." },
    { name: "Written fixed-fee scope", body: "You get a written scope with a fixed fee &mdash; typically $3,000&ndash;$7,500 for a standard cleanup &mdash; spelling out exactly what we&rsquo;ll fix, the accounts and months covered, and what CPA-ready means for your file. No hourly meter, no surprises." },
    { name: "Reconcile all accounts", body: "We reconcile every bank, credit-card, and loan account, month by month, until each balance ties to the actual statement. Reconciliation is the foundation &mdash; nothing downstream is trustworthy until the accounts tie." },
    { name: "Fix categorization and the chart of accounts", body: "We rationalize the chart of accounts to a clean structure, then re-categorize the history against it &mdash; clearing Uncategorized, correcting misposted entries, and removing duplicates &mdash; so the P&amp;L and balance sheet finally read true." },
    { name: "Catch up the months behind", body: "We bring the several months &mdash; up to about a year &mdash; of backlog current: entering, matching, and reconciling everything missing so the books are complete through the present period, not just patched." },
    { name: "CPA-ready handoff", body: "We hand off clean, reconciled files with a summary of what was fixed and any open items &mdash; ready for your CPA or tax preparer to work from. We do the cleanup; your CPA files the return. We don&rsquo;t file taxes." },
    { name: "Optional monthly upkeep", body: "If you&rsquo;d rather the books never drift behind again, we can continue with monthly bookkeeping on a separate engagement. Optional &mdash; the cleanup stands on its own, and there&rsquo;s no obligation to continue." },
  ],
  // proSignals[3] = signs you're in the STANDARD tier (months behind, several issues, not multi-year).
  proSignals: [
    { name: "Several months behind &mdash; up to about a year", body: "The books stopped being kept current some months ago, and you&rsquo;re looking at most of a year of catch-up &mdash; but not multiple years. That window is the heart of the standard tier; multi-year backlog pushes you into complex." },
    { name: "More than one thing is wrong", body: "It&rsquo;s not a single contained issue &mdash; it&rsquo;s a cluster: unreconciled months <em>and</em> miscategorizations <em>and</em> a messy chart of accounts, or a bank-feed mess <em>plus</em> duplicates <em>plus</em> an off reconciliation. Multiple related problems together is what makes it standard rather than focused." },
    { name: "It&rsquo;s not multi-year or structural", body: "The file itself is sound &mdash; one entity, no corruption, no restructuring needed. If you had years of backlog, multiple entities, or a broken file, you&rsquo;d be in the complex tier instead. A free file review confirms which side of the line you&rsquo;re on." },
  ],
  related: [
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/", body: "The cleanup hub &mdash; the full picture of what an independent ProAdvisor cleanup covers, the three tiers, and how the fixed-fee scope works before any work begins." },
    { title: "Focused cleanup ($1,200&ndash;$3,000)", href: "/quickbooks/cleanup/focused/", body: "One contained issue &mdash; a single off reconciliation, a bank-feed cleanup, or a defined categorization fix. The smaller, single-problem tier below standard." },
    { title: "Complex cleanup ($7,500&ndash;$15,000+)", href: "/quickbooks/cleanup/complex/", body: "Multi-year backlog, a corrupted or restructured file, or multiple entities. The deeper, structural tier above standard, scoped individually." },
  ],
  operatorSpec: [
    { value: "Free", label: "file review first — we look before we scope" },
    { value: "$3,000–$7,500", label: "typical fixed fee for a standard multi-issue cleanup" },
    { value: "CPA-ready", label: "clean, reconciled handoff — your CPA files; we don&rsquo;t" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. For an Intuit account, login, password, subscription, or billing issue, contact Intuit directly; we can&rsquo;t access your Intuit account. What we do is the operational accounting cleanup work inside your own QuickBooks file. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What counts as a standard cleanup?", a: "Multiple related issues and/or several months &mdash; up to about a year &mdash; behind: for example, a few months unreconciled plus miscategorizations plus a messy chart of accounts, a bank-feed mess plus duplicates plus an off reconciliation, or post-migration cleanup of roughly a year. It&rsquo;s more than a single fix but not a multi-year or structural rebuild." },
    { q: "How much does a standard cleanup cost?", a: "Typically $3,000&ndash;$7,500 as a fixed fee, scoped in writing after a free file review. The exact number depends on how many accounts and months are involved and how tangled the categorization and chart of accounts are &mdash; you see it before any work begins, with no hourly meter. To talk through your file first, speak to a ProAdvisor at <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "How is standard different from focused or complex cleanup?", a: "<a href=\"/quickbooks/cleanup/focused/\">Focused</a> ($1,200&ndash;$3,000) is one contained issue. Standard ($3,000&ndash;$7,500) is several related issues and/or several months to about a year behind. <a href=\"/quickbooks/cleanup/complex/\">Complex</a> ($7,500&ndash;$15,000+) is multi-year backlog, a corrupted or restructured file, or multiple entities. A free file review confirms which tier fits your file." },
    { q: "How long does a standard cleanup take?", a: "It varies with how many accounts and months are involved, but a standard multi-issue cleanup is typically a matter of weeks, not months. The written scope you receive after the file review includes the timeline along with the fixed fee, so you know what to expect before work starts." },
    { q: "Do you file my taxes after the cleanup?", a: "No. We bring the books to CPA-ready condition &mdash; clean, reconciled, and documented &mdash; and hand them off to your CPA or tax preparer, who files the return. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm that does the cleanup; we don&rsquo;t file taxes." },
    { q: "What does &ldquo;CPA-ready&rdquo; mean?", a: "It means every account is reconciled to its statements, the categorization and chart of accounts are clean, duplicates and gaps are resolved, and the file comes with a summary of what was fixed and any open items &mdash; so your CPA can prepare the return from accurate books without redoing the bookkeeping." },
    { q: "Do I have to sign up for monthly bookkeeping?", a: "No. The cleanup is a standalone fixed-fee project and stands on its own. If you&rsquo;d like the books kept current afterward, monthly bookkeeping is available on a separate engagement &mdash; but it&rsquo;s entirely optional, with no obligation to continue." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/cleanup/standard/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-cleanup-standard-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Cleanup","item":"https://techbrot.com/quickbooks/cleanup/"},
          {"@type":"ListItem","position":4,"name":"Standard","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Standard QuickBooks Cleanup (Multi-Issue, $3,000–$7,500)","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How a standard QuickBooks cleanup runs","description":"How an independent Certified QuickBooks ProAdvisor firm runs a standard multi-issue cleanup, from free file review to CPA-ready handoff.","tool":[{"@type":"HowToTool","name":"QuickBooks Online or QuickBooks Desktop"},{"@type":"HowToTool","name":"Bank and credit-card statements"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#qb-cleanup-standard-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"Standard QuickBooks cleanup","serviceType":"Multi-issue QuickBooks cleanup, reconciliation, and catch-up bookkeeping to CPA-ready","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; $3,000–$7,500 typical fixed fee for a standard multi-issue cleanup brought to CPA-ready"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

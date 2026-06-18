/* /accounting/speak-to-an-accountant/ — HONEST-TRIAGE page (Sheet-7) that captures
 * the "speak to an accountant" intent and reframes it truthfully. Pattern cloned
 * from the proven t-guide help page (quickbooks/help/bank-feeds-not-working). The
 * critical honesty: people search "speak to an accountant," but our team are
 * Certified QuickBooks ProAdvisors (bookkeeping/QuickBooks/advisory) — NOT CPAs.
 * ATF .disclosure clarifies you'll speak to our Certified ProAdvisor team, and if
 * you need a CPA/EA for tax returns, tax advice, or IRS representation we say so
 * and coordinate one. Never imply CPA credentials; never imply Intuit affiliation.
 * DISTINCT from /quickbooks/proadvisor-team/ (team/credentials) and
 * /quickbooks/speak-to-a-quickbooks-expert/ (QB-expert intent) — cross-linked.
 * First FAQ reframed: "Will I be speaking to a CPA?" -> No, our Certified
 * ProAdvisor team; we coordinate a CPA when you need one. provider/publisher =
 * #organization; reviewedBy = #david-westgate (schema only). No fabricated stats,
 * no fabricated internals; canonical pricing only. CTA: discovery-call primary,
 * phone tel, file-review tertiary. Authorship firm-level; founder schema-only.
 * Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (who you reach / what they help with / how a call works / when you need a CPA / cost)
  aiSummary: [
    { q: "Who will I speak to at TechBrot?", a: "Our <strong>Certified QuickBooks ProAdvisor team</strong> &mdash; the people who do the bookkeeping, QuickBooks, and advisory work. They are Certified QuickBooks ProAdvisors, <strong>not CPAs</strong>. If your question is really a tax return, tax advice, or IRS representation, we&rsquo;ll tell you plainly that you need a CPA or EA &mdash; and help you coordinate one." },
    { q: "What can the ProAdvisor team actually help me with?", a: "The operational accounting that keeps a business&rsquo;s numbers clean and decision-ready: monthly <strong>bookkeeping</strong>, <strong>cleanup</strong> and catch-up, <strong>QuickBooks setup and fixes</strong>, <strong>reconciliation</strong>, <strong>financial statements</strong>, <strong>advisory</strong>, <strong>sales tax</strong> filings, <strong>1099s</strong>, and year-end preparation that hands a clean file to your CPA. Tax returns and tax opinions are not in that list &mdash; those belong to a CPA or EA." },
    { q: "How does a conversation work?", a: "It starts with a <strong>free discovery call</strong> &mdash; a short conversation about your books, your software, and what you need. If we&rsquo;re the right fit, you get a <strong>fixed-fee written scope</strong> before any work begins; no hourly billing, no surprise invoice. If what you actually need is a CPA, the call ends with us telling you so and pointing you in the right direction." },
    { q: "When do I need a CPA instead of a ProAdvisor?", a: "When you need a <strong>tax return prepared or signed</strong>, <strong>tax advice or planning</strong> you can rely on, or <strong>representation before the IRS</strong>. Those are licensed-CPA or enrolled-agent work and a ProAdvisor firm can&rsquo;t do them. We&rsquo;ll say so honestly and help you coordinate a CPA &mdash; often handing them books that are already clean and year-end-ready." },
    { q: "What does it cost to speak to someone?", a: "The discovery call is <strong>free</strong>. From there, engagements are fixed-fee with a written scope: monthly bookkeeping runs $400&ndash;$2,500+/month, a one-time cleanup $1,500&ndash;$15,000+ depending on how far behind the books are, and QuickBooks setup $750&ndash;$5,000+. You&rsquo;ll see the scope and the number before you decide. Independent firm &mdash; not Intuit." },
  ],
  // "What our ProAdvisor team can help with" — the citable list (~6). Accurate scope only; CPA work excluded by design.
  causes: [
    { rank: "Day-to-day", name: "Bookkeeping, cleanup &amp; catch-up", body: "The core of what we do: monthly bookkeeping with a clean close, one-time cleanup when the books have drifted, and catch-up when you&rsquo;re months or years behind. This is the operational accounting that keeps the numbers trustworthy &mdash; not tax preparation." },
    { rank: "Software", name: "QuickBooks setup, fixes &amp; reconciliation", body: "Setting QuickBooks up correctly, repairing a file that&rsquo;s gone sideways, fixing bank feeds and duplicates, and re-running reconciliation until each month ties to the statement. Our team holds active QuickBooks Online and Desktop certifications." },
    { rank: "Reporting", name: "Financial statements &amp; advisory", body: "Producing financial statements you can actually read &mdash; profit and loss, balance sheet, cash flow &mdash; and talking through what they mean for the business. Advisory here is operational and financial, not tax opinion or legal advice." },
    { rank: "Compliance", name: "Sales tax filings &amp; 1099s", body: "Preparing and filing sales tax across the states where you have nexus, and handling year-end 1099 preparation for your contractors. This is filing and compliance work inside your books &mdash; distinct from income-tax return preparation, which is CPA or EA work." },
    { rank: "Year-end", name: "Year-end preparation for your CPA", body: "Closing the year cleanly and assembling a tidy, reconciled file so your CPA or enrolled agent can prepare the return efficiently. Many clients use us for the bookkeeping all year and a CPA only at tax time &mdash; we make that handoff painless." },
    { rank: "Triage", name: "Honest routing when it&rsquo;s really a CPA", body: "If your question turns out to be a tax return, tax advice, or IRS representation, the most useful thing we can do is say so &mdash; clearly, on the first call &mdash; and help you coordinate a CPA. We don&rsquo;t take work that isn&rsquo;t ours to do." },
  ],
  // "How to talk to a ProAdvisor" — ordered HowTo (~6). One numbered system on the page.
  fixSteps: [
    { name: "Pick how you&rsquo;d rather start", body: "Book the free discovery call online if you&rsquo;d like a scheduled time, or call us if you&rsquo;d rather talk now. Either way you reach our Certified QuickBooks ProAdvisor team &mdash; not a call centre, and not Intuit." },
    { name: "Tell us what&rsquo;s going on", body: "Describe the business, what software you&rsquo;re on, and what&rsquo;s prompting the call &mdash; behind on the books, a messy QuickBooks file, reports you can&rsquo;t trust, or just wanting a steady monthly close. The more candid you are, the faster we can route you." },
    { name: "We confirm it&rsquo;s ProAdvisor work &mdash; or tell you it&rsquo;s a CPA&rsquo;s", body: "On the call we&rsquo;ll be straight about whether what you need is bookkeeping and QuickBooks work we do, or tax-return / tax-advice / IRS work that needs a CPA or EA. If it&rsquo;s the latter, we say so and help you coordinate one." },
    { name: "Get a fixed-fee written scope", body: "If we&rsquo;re the right fit, you receive a written scope with a fixed fee before any work starts &mdash; what we&rsquo;ll do, what it costs, and what you&rsquo;ll have at the end. No hourly billing and no surprise invoice." },
    { name: "Start with a free file review if it helps", body: "When the question is &ldquo;how bad is it?&rdquo;, a free QuickBooks file review gives you a clear read on the state of the books before you commit to anything. It&rsquo;s the lowest-pressure way to get a real answer." },
    { name: "Decide on your terms", body: "There&rsquo;s no obligation after the call or the review. You&rsquo;ll have a clear picture of what you need, who should do it, and what it costs &mdash; then you decide whether to engage us, engage a CPA, or both." },
  ],
  // "When you need a CPA instead (and how we coordinate)" — 3 signals
  proSignals: [
    { name: "You need a tax return prepared or signed", body: "Preparing, signing, and filing income-tax returns is licensed CPA or enrolled-agent work &mdash; a ProAdvisor firm can&rsquo;t do it. What we can do is hand your CPA a clean, reconciled, year-end-ready file so the return goes faster and costs less." },
    { name: "You need tax advice or planning you can rely on", body: "Questions like &ldquo;how should I be taxed,&rdquo; entity-structure decisions, deduction strategy, and multi-year tax planning are CPA or EA territory. We&rsquo;ll tell you that plainly rather than guess &mdash; and coordinate the right professional." },
    { name: "You&rsquo;re facing the IRS", body: "Audit response, notices, back-tax negotiation, and representation before the IRS require a CPA, EA, or tax attorney. That&rsquo;s not ProAdvisor work. We&rsquo;ll point you to the right help and make sure the underlying books are in order to support it." },
  ],
  related: [
    { title: "Meet the Certified ProAdvisor team", href: "/quickbooks/proadvisor-team/", body: "Who you&rsquo;ll actually be talking to &mdash; our team&rsquo;s QuickBooks ProAdvisor certifications, what &ldquo;Certified ProAdvisor&rdquo; means, and how that&rsquo;s different from a CPA." },
    { title: "Accounting &amp; bookkeeping services", href: "/accounting/", body: "The full catalog of what our ProAdvisor team delivers &mdash; monthly bookkeeping, cleanup, QuickBooks, reconciliation, financial statements, sales tax, and advisory &mdash; all fixed-fee with a written scope." },
    { title: "Contact &amp; book the discovery call", href: "/contact/", body: "Reach us to book the free discovery call or ask a question. Tell us what&rsquo;s going on and we&rsquo;ll route you to the right person &mdash; ours, or a CPA when that&rsquo;s what you need." },
  ],
  operatorSpec: [
    { value: "Free", label: "discovery call first — we look before we scope" },
    { value: "ProAdvisors", label: "Certified QuickBooks ProAdvisor team — not CPAs, not Intuit" },
    { value: "We coordinate", label: "a CPA or EA when the work is tax returns, advice, or IRS" },
  ],
  faq: [
    { q: "Will I be speaking to a CPA?", a: "No. You&rsquo;ll be speaking to our <strong>Certified QuickBooks ProAdvisor team</strong> &mdash; the people who do the bookkeeping, QuickBooks, reconciliation, financial-statement, and advisory work. They are Certified QuickBooks ProAdvisors, not Certified Public Accountants. If what you actually need is a tax return, tax advice, or IRS representation, we&rsquo;ll tell you so plainly and help you coordinate a CPA or enrolled agent &mdash; often handing them a clean, year-end-ready file." },
    { q: "What kinds of accounting work can your team do?", a: "The operational accounting that keeps a business&rsquo;s numbers clean: monthly bookkeeping, cleanup and catch-up, QuickBooks setup and fixes, reconciliation, financial statements, advisory, sales tax filings, 1099s, and year-end preparation for your CPA. We do the books; a CPA or EA does income-tax returns, tax advice, and IRS representation." },
    { q: "Can you do my tax return?", a: "No &mdash; preparing and signing income-tax returns is licensed CPA or enrolled-agent work, and an independent ProAdvisor firm can&rsquo;t do it. What we do is keep the books clean all year and assemble a reconciled, year-end-ready file so your CPA can prepare the return efficiently. If you don&rsquo;t have a CPA, we&rsquo;ll help you coordinate one." },
    { q: "How does the free discovery call work?", a: "It&rsquo;s a short, no-obligation conversation about your business, your software, and what you need. We confirm whether it&rsquo;s ProAdvisor work we do or tax work that needs a CPA, and if we&rsquo;re the right fit you get a fixed-fee written scope before any work begins &mdash; no hourly billing and no surprise invoice. Book it at our contact page or call (877) 751-5575." },
    { q: "How is this different from speaking to a QuickBooks expert?", a: "If your question is specifically about QuickBooks &mdash; setup, a broken file, bank feeds, migration &mdash; the QuickBooks-expert path is the direct route. This page is for the broader &ldquo;I need to speak to an accountant&rdquo; need: bookkeeping, reconciliation, financial statements, advisory, and year-end. Both reach the same Certified ProAdvisor team; they just start the conversation in the right place." },
    { q: "Are you Intuit, or affiliated with Intuit?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official support. We use and are certified in QuickBooks, but we have no affiliation with Intuit Inc. For an Intuit account, login, subscription, or billing matter, contact Intuit directly. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What does it cost to work with you?", a: "The discovery call is free. Engagements are fixed-fee with a written scope: monthly bookkeeping $400&ndash;$2,500+/month, one-time cleanup $1,500&ndash;$15,000+ depending on how far behind the books are, and QuickBooks setup $750&ndash;$5,000+. You see the scope and the number before you decide &mdash; no hourly billing." },
    { q: "What if I&rsquo;m not sure whether I need a bookkeeper or a CPA?", a: "That&rsquo;s exactly what the discovery call is for. Tell us what&rsquo;s going on and we&rsquo;ll route you honestly &mdash; if it&rsquo;s bookkeeping, QuickBooks, or advisory, that&rsquo;s us; if it&rsquo;s a tax return, tax advice, or IRS representation, that&rsquo;s a CPA or EA and we&rsquo;ll help you coordinate one. There&rsquo;s no cost and no obligation to find out." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/speak-to-an-accountant/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-speak-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Speak to Our ProAdvisor Team","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Speak to Our Certified ProAdvisor Team","description":data.description,"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to talk to a Certified QuickBooks ProAdvisor","description":"Reach our Certified QuickBooks ProAdvisor team in six steps, and learn how we route you to a CPA when the work is tax returns, tax advice, or IRS representation.","step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#acct-speak-talk"};})},
        {"@type":"Service","@id":url+"#service","name":"Certified QuickBooks ProAdvisor bookkeeping and advisory consultation","serviceType":"Bookkeeping, QuickBooks, reconciliation, financial statements, sales tax, 1099s, and advisory","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free discovery call; monthly bookkeeping $400–$2,500+/month; cleanup $1,500–$15,000+; QuickBooks setup $750–$5,000+"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

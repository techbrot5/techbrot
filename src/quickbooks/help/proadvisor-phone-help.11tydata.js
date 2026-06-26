/* /quickbooks/help/proadvisor-phone-help/ (a help/intent page in the QuickBooks Help
 * silo — people searching "QuickBooks ProAdvisor phone" / "talk to a ProAdvisor").
 * Pattern cloned from bank-feeds-not-working.njk (t-guide tier). HONESTY IS THE WHOLE
 * POINT: this is OUR independent firm's phone line — NOT Intuit, NOT Intuit's ProAdvisor
 * referral/matching line, NOT QuickBooks product support. "Certified QuickBooks
 * ProAdvisor" = a certification held FROM Intuit, NOT affiliation. A real ProAdvisor
 * takes the call, not a call center. Account/billing/login/software-bug = Intuit.
 * Sheet-7 honest-triage: .disclosure above the fold; first FAQ = "Is this Intuit's
 * official QuickBooks support?" -> No, plainly; second FAQ = "Is this Intuit's ProAdvisor
 * line?" -> No, certification != affiliation; never "official" near our offer; no
 * fabricated Intuit phone/hours; provider/publisher = #organization; reviewedBy =
 * #david-westgate (schema only). Canonical pricing only ($1,200-$3,000 diagnostic /
 * $1,500-$15,000+ cleanup). Sanctioned CTA labels only ("Talk to a Certified ProAdvisor
 * (independent firm)" is in the lexicon). Authorship firm-level; founder schema-only.
 * Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / who-answers / is-this-intuit / what-to-talk-about / when-worth-it)
  aiSummary: [
    { q: "How do I talk to a QuickBooks ProAdvisor by phone?", a: "Call an independent Certified QuickBooks ProAdvisor firm directly. TechBrot is one &mdash; a real Certified ProAdvisor takes the call (not a call center) to talk through the accounting inside your own QuickBooks file. This is <strong>not Intuit, and not Intuit&rsquo;s ProAdvisor referral or matching line</strong>; the ProAdvisor certification is held from Intuit, not affiliation." },
    { q: "Who answers when I call?", a: "A Certified QuickBooks ProAdvisor &mdash; a person tested on QuickBooks who works in real client files &mdash; not a tier-one call center, a script, or a transfer queue. They listen to what&rsquo;s happening in your file and tell you honestly whether there&rsquo;s work to do and whether part of it belongs with Intuit instead." },
    { q: "Is this Intuit&rsquo;s ProAdvisor line?", a: "No. This is an independent firm&rsquo;s line, not Intuit and not Intuit&rsquo;s ProAdvisor referral or matching service. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification held from Intuit &mdash; a credential, like a CPA license from a state board &mdash; not employment or affiliation. We can&rsquo;t access your Intuit account; that stays with Intuit." },
    { q: "What can I talk through with a ProAdvisor on the phone?", a: "The accounting work inside your own QuickBooks file: a broken or behind file, a cleanup, reconciliation that won&rsquo;t tie, setup of a new file, a migration between QuickBooks versions or platforms, payroll recorded in the file, or simply whether you need help at all. What we can&rsquo;t do is reset an Intuit login, fix billing, or patch a software bug &mdash; that&rsquo;s Intuit." },
    { q: "When is calling a ProAdvisor worth it?", a: "When your books are behind or you&rsquo;re not sure they&rsquo;re right; when a one-off question keeps growing into bigger ones; or when something changed &mdash; a migration, a new entity, a bookkeeper leaving &mdash; and you want a tested set of eyes before it compounds. A call costs nothing and tells you whether there&rsquo;s real work to do." },
  ],
  // "causes" re-labeled to "What you can talk through on a ProAdvisor call." Accurate, in-file accounting work only — no Intuit-account work, no invented capabilities.
  causes: [
    { rank: "Talk through 01", name: "A broken or behind file", body: "The most common reason people call. The books are behind, something doesn&rsquo;t look right, or the file feels broken &mdash; balances that don&rsquo;t make sense, transactions in the wrong place, reports you can&rsquo;t trust. A Certified ProAdvisor can hear the symptoms and tell you what&rsquo;s likely going on inside the file and what fixing it would take." },
    { rank: "Talk through 02", name: "A cleanup", body: "Months of miscategorized, duplicated, or missing transactions, an undeposited-funds pile-up, or a chart of accounts that grew out of control. You can talk through the scope of a cleanup on the call &mdash; how far behind the books are and what it would cost to bring them current. Cleanup runs $1,500&ndash;$15,000+ depending on the backlog." },
    { rank: "Talk through 03", name: "Reconciliation", body: "Accounts that won&rsquo;t tie to the bank or credit-card statement, reconciliations that were forced or never done, or beginning balances that are off. A ProAdvisor can talk through why reconciliation isn&rsquo;t tying and what it takes to get each month reconciled to the statement again." },
    { rank: "Talk through 04", name: "Setup or migration", body: "Setting up a new QuickBooks file correctly the first time, or moving between QuickBooks versions or platforms without losing or duplicating data. These are the moments a short call up front saves a long cleanup later &mdash; talk through how to do it right before you start." },
    { rank: "Talk through 05", name: "Payroll recorded in the file", body: "How payroll runs are recorded in QuickBooks, liabilities mapped, and payroll reconciled in the books. This is the bookkeeping side of payroll inside your file &mdash; not your payroll-service login or Intuit subscription, which stays with the provider or Intuit." },
    { rank: "Or just", name: "Whether you need help at all", body: "Sometimes the honest answer is that your books are fine and you don&rsquo;t need us &mdash; and a ProAdvisor will tell you that. You can call simply to find out whether there&rsquo;s a real problem, what it would take if there is, and whether part of what you&rsquo;re dealing with actually belongs with Intuit." },
  ],
  // "fixSteps" re-labeled to "How a call works." Six ordered steps; the HowTo sequence. call/book -> ProAdvisor reviews -> free file review -> written fixed-fee scope in 3 business days.
  fixSteps: [
    { name: "Call or book a time", body: "Call the line at (877) 751-5575, or book a discovery call if you&rsquo;d rather pick a time. Either way you reach the firm directly &mdash; there&rsquo;s no referral form, no matching directory, and no obligation to do anything after." },
    { name: "A Certified ProAdvisor takes the call", body: "A Certified QuickBooks ProAdvisor &mdash; not a call center &mdash; picks up and listens. Tell them what&rsquo;s happening in your QuickBooks file in plain terms; they&rsquo;ll ask the questions that get to what&rsquo;s actually going on." },
    { name: "They review your situation", body: "On the call the ProAdvisor sorts what you describe into two buckets: the accounting work inside your file that we can do, and anything that&rsquo;s really an Intuit account, login, billing, or software-bug matter &mdash; which they&rsquo;ll point you to Intuit for, honestly." },
    { name: "Free file review", body: "If there&rsquo;s real work to do, the next step is a free file review &mdash; we look at the actual file before quoting anything. There&rsquo;s no charge for the review and no commitment; it&rsquo;s how we scope accurately instead of guessing." },
    { name: "A written fixed-fee scope", body: "After the review you get a written, fixed-fee scope &mdash; typically within three business days &mdash; that says exactly what we&rsquo;d do and what it costs. A focused diagnostic is usually $1,200&ndash;$3,000; a full cleanup runs $1,500&ndash;$15,000+ if the books are behind. No work starts before you approve it." },
    { name: "You decide", body: "You read the scope and decide. If it&rsquo;s a fit, we begin the agreed work; if it isn&rsquo;t, you owe nothing and you walk away with a clear, honest picture of where your books stand. Either way the call did its job." },
  ],
  proSignals: [
    { name: "Your books are behind or you&rsquo;re not sure they&rsquo;re right", body: "You&rsquo;ve fallen behind, or the numbers feel off and you can&rsquo;t tell if they&rsquo;re trustworthy. A call with a Certified ProAdvisor turns that uncertainty into a clear answer &mdash; whether there&rsquo;s a real problem and what it would take to fix it." },
    { name: "A small question keeps growing", body: "What started as one quick QuickBooks question keeps spawning more, and searching for answers isn&rsquo;t getting you there. Talking to a person who&rsquo;s tested on QuickBooks and works in real files every day shortcuts the spiral." },
    { name: "Something changed", body: "A migration, a new entity, a bookkeeper who left, a switch between QuickBooks versions &mdash; a change in the file is the moment to get a tested set of eyes on it before a small discrepancy compounds into a cleanup." },
  ],
  related: [
    { title: "Speak to a QuickBooks expert", href: "/quickbooks/speak-to-a-quickbooks-expert/", body: "The broader page on reaching a real QuickBooks expert &mdash; the same independent firm, the same honest split between the accounting work inside your file and what belongs with Intuit." },
    { title: "Independent QuickBooks help", href: "/quickbooks/support/independent-quickbooks-help/", body: "What &ldquo;independent QuickBooks help&rdquo; means and how it differs from Intuit&rsquo;s own support and from Intuit&rsquo;s ProAdvisor referral directory &mdash; including what an independent firm can and can&rsquo;t do." },
    { title: "QuickBooks support hub", href: "/quickbooks/support/", body: "Other QuickBooks problems and symptoms, with the same honest split &mdash; what an independent ProAdvisor firm fixes inside your books versus what belongs with Intuit." },
  ],
  operatorSpec: [
    { value: "A real ProAdvisor", label: "takes the call — not a call center" },
    { value: "Free", label: "file review first — we look before we scope" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s ProAdvisor line" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. For an Intuit account, login, password, subscription, billing, or software-bug issue, contact Intuit directly; we can&rsquo;t access your Intuit account. What we do is the operational accounting work inside your own QuickBooks file. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Is this Intuit&rsquo;s ProAdvisor line?", a: "No &mdash; this is an independent firm&rsquo;s line, not Intuit and not Intuit&rsquo;s ProAdvisor referral or matching service (the directory Intuit runs to point businesses toward accountants). &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification held from Intuit, the way a CPA license is held from a state board &mdash; a credential, not employment or affiliation. Certification does not mean we work for or speak for Intuit." },
    { q: "Who answers when I call?", a: "A Certified QuickBooks ProAdvisor &mdash; a person who has been tested on QuickBooks and works in real client files &mdash; not a tier-one call center, a script, or a transfer queue. They listen to what&rsquo;s happening in your file and tell you honestly whether there&rsquo;s work to do and whether part of it belongs with Intuit instead." },
    { q: "What can I talk to a ProAdvisor about?", a: "The accounting work inside your own QuickBooks file: a broken or behind file, a cleanup, reconciliation that won&rsquo;t tie, setting up a new file, a migration between QuickBooks versions or platforms, how payroll is recorded in the file, or simply whether you need help at all. We can&rsquo;t reset an Intuit login, fix billing, or patch a software bug &mdash; those are Intuit&rsquo;s." },
    { q: "Does it cost anything to call?", a: "No. The call and the file review that may follow are free, with no obligation. If there&rsquo;s real work to do, you get a written, fixed-fee scope &mdash; typically within three business days &mdash; before anything begins: a focused diagnostic is usually $1,200&ndash;$3,000, and a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> runs $1,500&ndash;$15,000+ if the books are behind. You only pay if you approve the scope." },
    { q: "Can you reset my QuickBooks password or fix my Intuit account?", a: "No &mdash; that&rsquo;s an Intuit account matter, and an independent firm can&rsquo;t access it. For an Intuit login, password, subscription, billing question, or a software bug, contact Intuit directly. We work inside your own QuickBooks file: the bookkeeping, the cleanup, the reconciliation, and the setup." },
    { q: "Are you affiliated with Intuit because you&rsquo;re Certified ProAdvisors?", a: "No. Holding the Certified QuickBooks ProAdvisor certification means our team has been tested and credentialed by Intuit on QuickBooks &mdash; it does not make us part of Intuit, an Intuit reseller, or Intuit&rsquo;s support. We are an independent firm. The certification is a qualification we earned; it is not an affiliation, and we never act or speak on Intuit&rsquo;s behalf." },
    { q: "How is this different from being matched through Intuit&rsquo;s ProAdvisor directory?", a: "Intuit runs a referral/matching directory that points businesses toward ProAdvisors. This isn&rsquo;t that &mdash; you&rsquo;re reaching our firm directly, with no matching step in between. You talk to a Certified ProAdvisor here, get a free file review, and a written fixed-fee scope, all from one independent firm rather than a directory lead-off." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/proadvisor-phone-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-help-proadvisor-phone-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"ProAdvisor Phone Help","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Talk to a QuickBooks ProAdvisor by Phone (Independent Firm)","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to talk to a QuickBooks ProAdvisor by phone","description":"How a call with an independent Certified QuickBooks ProAdvisor firm works, in six steps from first call to a written fixed-fee scope.","tool":[{"@type":"HowToTool","name":"Telephone"},{"@type":"HowToTool","name":"Your QuickBooks Online or QuickBooks Desktop file"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#qb-help-proadvisor-phone-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"Talk to an independent Certified QuickBooks ProAdvisor by phone","serviceType":"Independent QuickBooks ProAdvisor phone consultation, file review, and bookkeeping","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free phone consultation and file review; $1,200–$3,000 typical fixed-fee diagnostic; $1,500–$15,000+ cleanup if books are behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /quickbooks/help/speak-to-an-expert/ (help-silo ENTRY page — the honest "speak to a
 * QuickBooks expert" front door in the QuickBooks Help silo). Shape cloned from the
 * proven help-symptom page (help/bank-feeds-not-working) and the t-guide tier. This is
 * a FOCUSED entry that cross-links to the richer conversion page at
 * /quickbooks/speak-to-a-quickbooks-expert/ — kept genuinely useful, not a thin dupe.
 * Sheet-7 honest-triage: .disclosure above the fold; first FAQ = "Is this Intuit's
 * official QuickBooks support?" -> No, plainly; never "official" near our offer; phone
 * label = sanctioned "Talk to a Certified ProAdvisor (independent firm)"; account /
 * billing / login / software-bug routed to Intuit (learn-support, rel noopener nofollow).
 * "Certified QuickBooks ProAdvisor" = certification held FROM Intuit, not affiliation.
 * provider/publisher always #organization; reviewedBy = #david-westgate (schema only).
 * No fabricated Intuit phone/hours; no fabricated internals; canonical pricing only
 * ($1,200-$3,000 diagnostic / $1,500-$15,000+ cleanup; free file review). CTA: help =
 * phone primary + free file review + discovery call, all intent=qb-help / file-review.
 * Re-labelled sections: causes -> "What you can talk through with an expert"; fixSteps
 * -> "How to reach an expert / how the call works". Authorship firm-level; founder
 * schema-only. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / who-answers / how-to-reach / what-to-talk-about / is-it-Intuit)
  aiSummary: [
    { q: "What does it mean to &ldquo;speak to a QuickBooks expert&rdquo; at an independent firm?", a: "It means a real conversation with a Certified QuickBooks ProAdvisor about the accounting work inside your own QuickBooks file &mdash; a broken file, books that are behind, a reconciliation that won&rsquo;t tie, a setup or migration, or just whether you need help. It is <strong>not</strong> Intuit, not QuickBooks product support, and not a call center. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification held from Intuit, not an affiliation with Intuit." },
    { q: "Who actually answers when I call?", a: "A Certified QuickBooks ProAdvisor with active Online and Desktop certifications &mdash; someone who works inside QuickBooks files every day, not a tier-one agent reading from a script. They listen to what&rsquo;s happening, ask the questions that matter for your file, and tell you honestly whether it&rsquo;s something to fix, leave alone, or take to Intuit." },
    { q: "How do I reach a QuickBooks expert here?", a: "Three ways, all reaching the same Certified ProAdvisor team: call (877) 751-5575; book a discovery call; or start a free file review. Whichever you choose, a ProAdvisor looks at what&rsquo;s going on before anyone quotes anything, and you get a written, fixed-fee scope within three business days." },
    { q: "What can I talk through with the expert?", a: "Anything inside your own QuickBooks file: a file that&rsquo;s broken or won&rsquo;t open, a cleanup of months that are behind, a reconciliation that won&rsquo;t tie, a fresh setup or chart-of-accounts, a migration between QuickBooks versions or platforms, payroll recorded inside the file, or simply &ldquo;do I even need help.&rdquo; What we can&rsquo;t touch is your Intuit account, subscription, login, or a software bug &mdash; that&rsquo;s Intuit&rsquo;s." },
    { q: "Is this Intuit, or QuickBooks product support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not QuickBooks product support. The certification is held <strong>from</strong> Intuit; it doesn&rsquo;t make us part of Intuit. For an Intuit account, login, subscription, billing question, or a software bug, contact Intuit directly &mdash; an independent firm can&rsquo;t access your Intuit account." },
  ],
  // What you can talk through with an expert — the citable list. All inside-the-file work; nothing implying Intuit affiliation.
  causes: [
    { rank: "Talk about 01", name: "A file that&rsquo;s broken or won&rsquo;t behave", body: "QuickBooks won&rsquo;t open, throws errors, balances look wrong, or something stopped working after an update or a move. An expert can tell you whether it&rsquo;s a quick fix inside the file, a deeper data issue, or genuinely an Intuit software bug that belongs with Intuit." },
    { rank: "Talk about 02", name: "Cleanup &mdash; the books are behind", body: "Months (or years) of uncategorized, duplicated, or unreconciled transactions, a balance sheet that doesn&rsquo;t make sense, or books you&rsquo;ve stopped trusting. This is the most common reason people call: a Certified ProAdvisor scopes a fixed-fee cleanup to get the file caught up and tying out again." },
    { rank: "Talk about 03", name: "Reconciliation that won&rsquo;t tie", body: "QuickBooks no longer matches the bank or credit-card statements, prior reconciliations were forced or undone, or beginning balances are off. An expert walks through why it broke and what it takes to get every month reconciling cleanly again." },
    { rank: "Talk about 04", name: "Setup or migration", body: "Starting QuickBooks fresh, rebuilding a chart of accounts, or moving between QuickBooks versions or platforms (Desktop to Online, or onto a new file). These are easy to get wrong in ways that cost you later &mdash; a conversation up front saves a cleanup down the road." },
    { rank: "Talk about 05", name: "Payroll recorded inside the file", body: "How payroll, taxes, and liabilities are <em>booked</em> inside QuickBooks &mdash; the accounting side, not your Intuit payroll subscription or login. If wages, payroll taxes, or liability accounts look wrong in the file, that&rsquo;s the part an expert can review and correct." },
    { rank: "Talk about 06", name: "&ldquo;Do I even need help?&rdquo;", body: "Sometimes you just want a straight answer on whether the file is fine, whether you can keep doing it yourself, or whether it&rsquo;s time to hand it off. That&rsquo;s a legitimate call &mdash; an expert will tell you honestly, even when the answer is &ldquo;you&rsquo;re fine, keep going.&rdquo;" },
  ],
  // Six ordered steps — how to reach an expert and how the call works. The HowTo sequence.
  fixSteps: [
    { name: "Pick how you want to reach them", body: "Call (877) 751-5575 to talk to a Certified ProAdvisor now, book a discovery call for a scheduled time, or start a free file review if you&rsquo;d rather we look before we talk. All three reach the same independent ProAdvisor team &mdash; there&rsquo;s no wrong door." },
    { name: "Tell us what&rsquo;s going on", body: "On the call or in the file-review intake, describe the situation in plain terms &mdash; what&rsquo;s broken, how far behind the books are, or what decision you&rsquo;re trying to make. No need to diagnose it yourself; that&rsquo;s the expert&rsquo;s job. This is also where account, billing, or login questions get pointed to Intuit, since those aren&rsquo;t ours to handle." },
    { name: "A Certified ProAdvisor reviews the file", body: "Where it helps, we take a look at the actual QuickBooks file &mdash; for free &mdash; rather than guessing from a description. Looking before scoping is the whole point: it&rsquo;s how a quote stays honest instead of being a number pulled from the air." },
    { name: "Get the honest read", body: "The ProAdvisor tells you what they found and what they&rsquo;d recommend &mdash; including when the answer is &ldquo;leave it alone&rdquo; or &ldquo;this one&rsquo;s Intuit&rsquo;s, not ours.&rdquo; You get a real opinion from someone who works in these files, not an upsell." },
    { name: "Receive a written, fixed-fee scope", body: "If there&rsquo;s work to do, you get it in writing &mdash; what will be done and what it costs &mdash; typically within three business days of the file review. A focused diagnostic is usually a $1,200&ndash;$3,000 fixed-fee scope; a full cleanup runs $1,500&ndash;$15,000+ when the books are behind. No open-ended hourly meter." },
    { name: "Decide &mdash; no pressure", body: "You decide whether to proceed. Nothing is touched in your books until you approve the scope, and the file review and the conversation cost you nothing. If now isn&rsquo;t the time, the read you got is still yours to keep." },
  ],
  proSignals: [
    { name: "You can&rsquo;t trust the numbers", body: "Reports look wrong, the balance sheet doesn&rsquo;t make sense, or you&rsquo;ve quietly stopped relying on QuickBooks for decisions. When you don&rsquo;t trust your own books, that&rsquo;s exactly the moment a real conversation with an expert pays for itself." },
    { name: "You&rsquo;re about to make a decision on bad data", body: "Taxes, a loan application, a sale, hiring, or pricing &mdash; anything riding on numbers you&rsquo;re not sure about. A short call to confirm the file is solid (or to get it fixed first) beats deciding on figures that might be off." },
    { name: "You&rsquo;ve been Googling fixes for too long", body: "If you&rsquo;ve spent hours hunting forum threads and the file is still wrong &mdash; or you&rsquo;re afraid you&rsquo;ll make it worse &mdash; it&rsquo;s worth handing it to someone who does this daily. One conversation often replaces a week of trial and error." },
  ],
  related: [
    { title: "Speak to a QuickBooks expert &mdash; how working with a ProAdvisor goes", href: "/quickbooks/speak-to-a-quickbooks-expert/", body: "The fuller picture: what an engagement with an independent Certified QuickBooks ProAdvisor actually looks like, what to expect from the conversation, and how the work is scoped and priced. This page is the quick entry; that one goes deeper." },
    { title: "Independent QuickBooks help", href: "/quickbooks/support/independent-quickbooks-help/", body: "What &ldquo;independent&rdquo; means and where the line sits &mdash; the operational accounting work an outside ProAdvisor firm does inside your books versus the Intuit account, billing, and software matters that belong with Intuit." },
    { title: "QuickBooks support hub", href: "/quickbooks/support/", body: "Other QuickBooks problems and symptoms, with the same honest split &mdash; what an independent ProAdvisor firm fixes inside your books versus what belongs with Intuit." },
  ],
  operatorSpec: [
    { value: "Free", label: "file review and discovery call &mdash; we look before we scope" },
    { value: "3 business days", label: "to a written, fixed-fee scope after the file review" },
    { value: "Independent", label: "Certified ProAdvisor firm &mdash; not Intuit, not QuickBooks product support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not QuickBooks product support. The ProAdvisor certification is held from Intuit, which does not make us part of Intuit. For an Intuit account, login, password, subscription, billing question, or a software bug, contact Intuit directly &mdash; we can&rsquo;t access your Intuit account. What we do is the operational accounting work inside your own QuickBooks file. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Is this Intuit?", a: "No. We are an independent firm. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification our team holds from Intuit &mdash; it is not an affiliation with Intuit, and we don&rsquo;t represent Intuit. When you speak to an expert here, you&rsquo;re speaking to an outside accounting professional about your own books, not to Intuit." },
    { q: "What does it cost to speak to a QuickBooks expert?", a: "The first conversation costs nothing: the discovery call and the file review are both free. If there&rsquo;s work to do, you get a written, fixed-fee scope &mdash; a focused diagnostic is typically $1,200&ndash;$3,000, and a full cleanup runs $1,500&ndash;$15,000+ when the books are behind. Nothing is charged and nothing is touched in your file until you approve the scope." },
    { q: "Who will I actually be talking to?", a: "A Certified QuickBooks ProAdvisor with active Online and Desktop certifications &mdash; an accounting professional who works inside QuickBooks files every day, not a tier-one call-center agent reading from a script. They&rsquo;ll give you a real, honest read on your file." },
    { q: "What can&rsquo;t a ProAdvisor help me with?", a: "Anything that lives in your Intuit account rather than your books: resetting your QuickBooks login or password, changing or refunding your subscription, billing disputes, or fixing a bug in the QuickBooks software itself. Those are Intuit&rsquo;s to resolve, and an independent firm can&rsquo;t access your Intuit account &mdash; contact Intuit directly for them." },
    { q: "How fast can I talk to someone?", a: "You can call (877) 751-5575 to reach the Certified ProAdvisor team, book a discovery call for a scheduled time, or start a free file review online. If you start with a file review, you typically have a written, fixed-fee scope within three business days. We don&rsquo;t publish guaranteed hold times &mdash; we&rsquo;re an accounting firm, not a 24/7 call center." },
    { q: "Do I have to commit to anything to talk to an expert?", a: "No. The conversation and the file review are free and carry no obligation. The expert gives you their honest read &mdash; including when the answer is that your file is fine or that the issue belongs with Intuit &mdash; and you decide whether to proceed. Nothing is touched in your books until you approve a written scope." },
    { q: "Is this the same as your main &ldquo;speak to a QuickBooks expert&rdquo; page?", a: "This is the quick, honest entry point in our QuickBooks Help silo. If you want the fuller picture &mdash; what working with an independent Certified QuickBooks ProAdvisor actually looks like and how the work is scoped &mdash; see our main speak to a QuickBooks expert page. Both reach the same independent ProAdvisor team." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/speak-to-an-expert/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-help-speak-expert-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Speak to an Expert","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Speak to a QuickBooks Expert (Independent Certified ProAdvisor)","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to speak to a QuickBooks expert at an independent ProAdvisor firm","description":"Reach an independent Certified QuickBooks ProAdvisor in six steps, from picking how to make contact to receiving a written, fixed-fee scope.","tool":[{"@type":"HowToTool","name":"Phone, online file-review intake, or discovery-call booking"},{"@type":"HowToTool","name":"Your QuickBooks Online or QuickBooks Desktop file"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#qb-help-speak-expert-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"Speak to an independent Certified QuickBooks ProAdvisor","serviceType":"QuickBooks consultation, diagnosis, cleanup, and reconciliation","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review and discovery call; $1,200–$3,000 typical fixed-fee diagnostic; $1,500–$15,000+ cleanup if books are behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

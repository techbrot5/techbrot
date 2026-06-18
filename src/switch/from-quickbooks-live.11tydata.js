/* /switch/from-quickbooks-live/ (BOFU SWITCH page — converts the DECIDED switcher
 * leaving QuickBooks Live for an independent ProAdvisor). Pattern cloned from the
 * proven t-guide help-symptom page (bank-feeds-not-working). DISTINCT from
 * /vs/techbrot-vs-quickbooks-live/ (that page compares; this one converts) — lead
 * with the switch + offer, cross-link the /vs/ page, NO full comparison table here.
 * HONESTY (critical): QuickBooks Live is/was INTUIT'S OWN bundled assisted-bookkeeping
 * inside QuickBooks Online — describe it accurately as Intuit's in-product service; do
 * NOT fabricate claims about Intuit discontinuing it (only the generic, true line
 * "Intuit has adjusted its assisted-bookkeeping offerings over time"). We are
 * INDEPENDENT and NOT Intuit/QuickBooks Live — stated plainly ATF + first FAQ. The
 * switch angle: same QuickBooks file, we become the accountant user. Sheet-7
 * honest-triage: .disclosure ATF = strong NOT-Intuit independence statement; first
 * FAQ = "Are you QuickBooks Live or Intuit?" -> No, independent; never "official";
 * phone = "Speak to a ProAdvisor"; provider/publisher always #organization; reviewedBy
 * = #david-westgate (schema only). Canonical pricing only (free file review; ongoing
 * fixed-fee monthly; $1,500-$15,000+ cleanup). CTA: discovery call primary, phone +
 * file-review secondary. Authorship firm-level; founder schema-only; founder-name-zero
 * in visible content. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what-it-is / is-it-easy / why-switch / what-changes / pricing)
  aiSummary: [
    { q: "What does &ldquo;switching from QuickBooks Live&rdquo; mean?", a: "It means moving your bookkeeping from Intuit&rsquo;s bundled in-product service to an independent Certified QuickBooks ProAdvisor who works in your own QuickBooks file. QuickBooks Live is Intuit&rsquo;s own assisted-bookkeeping help inside QuickBooks Online; an independent firm is a separate accountant you choose and keep. Your QuickBooks file and data stay where they are &mdash; we&rsquo;re added as your accountant user." },
    { q: "Is it hard to switch from QuickBooks Live?", a: "No &mdash; it&rsquo;s one of the simplest switches in accounting because nothing migrates. You stay in the same QuickBooks Online file you already use; we&rsquo;re added as your <strong>accountant user</strong>, review the current state, and take over the monthly work. There&rsquo;s no data export, no rebuild, and no gap in your history." },
    { q: "Why do businesses switch off QuickBooks Live?", a: "The reasons we hear most: they want one <strong>named, consistent</strong> Certified ProAdvisor instead of a rotating bundled team; they need deeper cleanup and advisory than the bundled scope covers; and they want a relationship that belongs to them, not one tied to the software vendor. QuickBooks Live suits some businesses fine &mdash; this is for those who want independent depth." },
    { q: "Will I lose my QuickBooks data if I switch?", a: "No. Your QuickBooks file, history, and transactions stay exactly where they are &mdash; switching to an independent ProAdvisor doesn&rsquo;t move or delete anything. We&rsquo;re simply added to your existing file as the accountant user. Your Intuit subscription and login also stay yours; those remain between you and Intuit." },
    { q: "What does it cost to switch to an independent ProAdvisor?", a: "We start with a <strong>free file review</strong> so we can see the current state before scoping. From there, ongoing monthly bookkeeping is a fixed monthly fee based on your volume and complexity, and a one-time cleanup &mdash; if the books are behind &mdash; runs $1,500&ndash;$15,000+. You get a written scope before any work begins. Independent firm." },
  ],
  // Why businesses move off QuickBooks Live — fair, accurate, no fabricated Intuit internals.
  causes: [
    { rank: "Reason 01", name: "You want one named ProAdvisor, not a rotating team", body: "QuickBooks Live provides help from Intuit&rsquo;s bundled team, and the person you talk to can change. Businesses switch when they want a single, consistent Certified ProAdvisor who learns their business, owns the monthly close, and is the same point of contact every month &mdash; a relationship, not a queue." },
    { rank: "Reason 02", name: "You need depth beyond the bundled scope", body: "The bundled service is built around standard monthly bookkeeping. When you need real cleanup of a backlog, catch-up work, advisory on how the numbers should be structured, or help that goes past the standard scope, an independent firm can take the file as deep as it needs to go." },
    { rank: "Reason 03", name: "You want a relationship that isn&rsquo;t tied to the vendor", body: "With a bundled service the bookkeeping is part of the software you buy from Intuit. Some businesses prefer their accountant to be independent of the software vendor &mdash; a separate firm they chose, can hold accountable directly, and keep regardless of subscription changes." },
    { rank: "Reason 04", name: "You want direct, accountable contact", body: "Switchers often tell us they want to email or call one person who already knows their file, rather than re-explaining context each time. An independent ProAdvisor is reachable directly and carries the history of your books in their head, not just in a ticket." },
    { rank: "Reason 05", name: "Your books outgrew &ldquo;keep it tidy&rdquo;", body: "As a business grows, bookkeeping turns into decisions: how to structure the chart of accounts, how to handle classes or locations, how to get the books ready for tax or financing. That advisory layer is where many businesses decide they want a named professional rather than a bundled service." },
    { rank: "Also common", name: "You simply want to choose your accountant", body: "For some owners it&rsquo;s straightforward &mdash; they&rsquo;d rather pick their own bookkeeper, on their own terms, than use the one bundled with the software. Switching to an independent ProAdvisor puts that choice back in your hands while keeping QuickBooks exactly as it is." },
  ],
  // Six ordered switch steps — the HowTo sequence. Emphasis: you keep the same file; nothing migrates.
  fixSteps: [
    { name: "Book a discovery call", body: "Start with a short call so we understand your business, where the books stand, and what you want from an independent ProAdvisor. There&rsquo;s no obligation &mdash; the goal is to confirm we&rsquo;re the right fit before anything moves." },
    { name: "Get a free file review", body: "We look at your existing QuickBooks file as-is to see the current state &mdash; how the books are kept, what&rsquo;s clean, and what (if anything) needs catching up. This is how we scope honestly instead of quoting blind." },
    { name: "Receive a written scope and fixed fee", body: "Based on the review, you get a written scope: ongoing monthly bookkeeping at a fixed monthly fee, plus a one-time cleanup quote if the books are behind. You decide with the numbers in front of you, before any work starts." },
    { name: "Add us as your accountant user", body: "When you&rsquo;re ready, you invite us into your existing QuickBooks Online file as the accountant user &mdash; a built-in QuickBooks role. Nothing is exported, nothing is rebuilt, and your data and history stay exactly where they are." },
    { name: "We take over the monthly work", body: "You let QuickBooks Live go on your own timeline, and we pick up the recurring bookkeeping &mdash; categorization, reconciliation, and the monthly close &mdash; in the same file you&rsquo;ve always used. Your one named ProAdvisor runs it from here." },
    { name: "Settle into the relationship", body: "From the first close on, you have a consistent point of contact who knows your file. If a cleanup was part of the scope, we complete it first so the ongoing books start from accurate numbers, then keep them current month after month." },
  ],
  proSignals: [
    { name: "You can never reach the same person twice", body: "If every interaction with the bundled service starts with re-explaining your business to someone new, that&rsquo;s the clearest sign you want a named ProAdvisor &mdash; one person who already knows your file and stays your contact month after month." },
    { name: "You need more than the books kept tidy", body: "When your questions have moved from &ldquo;is it categorized&rdquo; to &ldquo;how should this be structured,&rdquo; &ldquo;are we ready for tax or financing,&rdquo; or &ldquo;help me clean up a real backlog,&rdquo; you&rsquo;ve outgrown a bundled scope and want an independent firm with depth." },
    { name: "You want your accountant separate from the software", body: "If it matters to you that your bookkeeper is independent of the software vendor &mdash; a firm you chose, can hold accountable directly, and keep regardless of subscription changes &mdash; that&rsquo;s the signal to switch to an independent Certified ProAdvisor." },
  ],
  related: [
    { title: "TechBrot vs QuickBooks Live", href: "/vs/techbrot-vs-quickbooks-live/", body: "Still weighing it up rather than decided? The full side-by-side compares an independent ProAdvisor firm against Intuit&rsquo;s bundled QuickBooks Live &mdash; scope, consistency, advisory depth, and cost &mdash; so you can decide before you switch." },
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "What you switch to: fixed-fee monthly bookkeeping run by a named Certified ProAdvisor in your own QuickBooks file &mdash; categorization, reconciliation, and a real monthly close you can rely on." },
    { title: "Meet the ProAdvisor team", href: "/quickbooks/proadvisor-team/", body: "Who actually runs your books after the switch &mdash; the Certified QuickBooks ProAdvisor team, their certifications, and how the named-contact relationship works in practice." },
  ],
  operatorSpec: [
    { value: "Same file", label: "you keep your QuickBooks file — nothing migrates" },
    { value: "Free", label: "file review first — we look before we scope" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not QuickBooks Live" },
  ],
  faq: [
    { q: "Are you QuickBooks Live or Intuit?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we are not QuickBooks Live, and not Intuit. QuickBooks Live is Intuit&rsquo;s own bundled bookkeeping service, provided by Intuit&rsquo;s team inside QuickBooks Online. We are a separate firm: a named Certified ProAdvisor who works in your own QuickBooks file as your accountant. We&rsquo;re not affiliated with, endorsed by, or part of Intuit, and we can&rsquo;t access your Intuit account, subscription, or billing &mdash; those stay with Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Live, exactly?", a: "QuickBooks Live is Intuit&rsquo;s own assisted-bookkeeping offering, bundled into QuickBooks Online &mdash; the bookkeeping help is provided by Intuit&rsquo;s team within the software you already pay Intuit for. Intuit has adjusted its assisted-bookkeeping offerings over time; whatever the current form, the defining trait is that it&rsquo;s part of the software vendor rather than a separate firm you choose and keep." },
    { q: "Is switching from QuickBooks Live difficult?", a: "No &mdash; it&rsquo;s one of the simplest switches in accounting because nothing migrates. You stay in the same QuickBooks Online file; we&rsquo;re added as your accountant user (a built-in QuickBooks role), review the current state, and take over the monthly work. There&rsquo;s no data export, no rebuild, and no gap in your history. You let QuickBooks Live go on your own timeline." },
    { q: "Will I lose my data or have to start a new QuickBooks file?", a: "No. Your QuickBooks file, history, and transactions stay exactly where they are. Switching to an independent ProAdvisor doesn&rsquo;t move, export, or delete anything &mdash; we&rsquo;re simply added to your existing file. Your Intuit subscription and login also remain yours and stay between you and Intuit." },
    { q: "Why would I switch off QuickBooks Live?", a: "The most common reasons: you want one named, consistent Certified ProAdvisor instead of a rotating bundled team; you need deeper cleanup and advisory than the bundled scope covers; and you want a relationship that belongs to you rather than one tied to the software vendor. To be fair, QuickBooks Live suits some businesses well &mdash; this is for those who&rsquo;ve decided they want independent depth and a named contact." },
    { q: "What changes day to day after I switch?", a: "The software doesn&rsquo;t change &mdash; you keep using the same QuickBooks file. What changes is who runs the books: instead of Intuit&rsquo;s bundled team, one named Certified ProAdvisor owns your categorization, reconciliation, and monthly close, and is reachable directly. If a cleanup was part of your scope, we complete that first so the ongoing books start from accurate numbers." },
    { q: "How much does it cost to switch to an independent ProAdvisor?", a: "We start with a free file review so we can see the current state before scoping. From there, ongoing monthly bookkeeping is a fixed monthly fee based on your volume and complexity, and a one-time cleanup &mdash; if the books are behind &mdash; runs $1,500&ndash;$15,000+. You get a written scope and fixed fee before any work begins. Independent firm." },
    { q: "Should I compare you to QuickBooks Live before deciding?", a: "If you haven&rsquo;t fully decided, yes &mdash; our side-by-side comparison of an independent ProAdvisor firm versus Intuit&rsquo;s bundled QuickBooks Live walks through scope, consistency, advisory depth, and cost so you can choose with eyes open. This page is for the switcher who&rsquo;s already decided and wants the move and the offer." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/switch/from-quickbooks-live/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#switch-qbl-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Switch","item":"https://techbrot.com/switch/"},
          {"@type":"ListItem","position":3,"name":"From QuickBooks Live","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"Switching From QuickBooks Live to an Independent ProAdvisor","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to switch from QuickBooks Live to an independent ProAdvisor","description":"Move your bookkeeping from Intuit's bundled QuickBooks Live to an independent Certified QuickBooks ProAdvisor in six steps, keeping the same QuickBooks file.","tool":[{"@type":"HowToTool","name":"QuickBooks Online"},{"@type":"HowToTool","name":"QuickBooks accountant user invitation"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#switch-qbl-steps"};})},
        {"@type":"Service","@id":url+"#service","name":"Switch from QuickBooks Live to an independent ProAdvisor","serviceType":"Independent Certified QuickBooks ProAdvisor bookkeeping and advisory","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; fixed monthly fee for ongoing bookkeeping; $1,500–$15,000+ one-time cleanup if the books are behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

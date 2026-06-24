/* /resources/checklists/quickbooks-setup-checklist/ (t-guide CHECKLIST resource — the
 * CONDENSED, printable quick tick-list companion to the fuller how-to at
 * /quickbooks/setup/checklist/). Pattern cloned exactly from the proven help-symptom
 * t-guide page (quickbooks/help/bank-feeds-not-working). DISTINCT from the how-to: this
 * is the at-a-glance scannable tick-list, NOT a step-by-step walkthrough — it must
 * prominently cross-link the fuller guide. Free, no email wall. Honest-triage:
 * .disclosure above the fold; first FAQ = "Is this Intuit's official QuickBooks
 * support?" -> No, plainly; never "official" near our offer; phone = "Speak to a
 * ProAdvisor" (canonical lexicon) + "(independent firm)" in copy; provider/publisher
 * always #organization; reviewedBy = #david-westgate (schema only). No fabricated
 * Intuit phone/hours; no fabricated internals/stats; canonical pricing only
 * ($1,200-$3,000 diagnostic / $1,500-$15,000+ cleanup). CTA: Book the discovery call
 * primary, phone tertiary, free file review secondary. Authorship firm-level; founder
 * schema-only. The checklist is the ONLY numbered system on the page.
 * Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&em;/g,"").replace(/\s+/g," ").trim();}
module.exports = {
  // quick-5 — distinct from FAQ (what / what-you-need / the-checklist / online-vs-desktop / printable-free)
  aiSummary: [
    { q: "What is a QuickBooks setup checklist?", a: "A short, ordered list of the things you set once when you first open a QuickBooks company file so the books are correct from day one &mdash; company info and fiscal year, the plan or product you&rsquo;re on, the chart of accounts, opening balances, connected bank and card accounts, your customers, vendors, and items, sales tax, users, and a few key preferences. This page is the condensed, printable tick-list; the fuller step-by-step walkthrough lives at <a href=\"/quickbooks/setup/checklist/\">the full QuickBooks setup guide</a>." },
    { q: "What do I need before I start setting up QuickBooks?", a: "Have your legal business name and address, EIN, and fiscal-year start; the plan or product you&rsquo;ve chosen; your accountant&rsquo;s preferred chart of accounts (or your industry default); opening balances as of your start date with a recent bank and credit-card statement; your bank and card login details; and your customer, vendor, item, and sales-tax information. Gathering these first makes setup a single sitting instead of a series of stops and restarts." },
    { q: "What&rsquo;s on the QuickBooks setup quick-checklist?", a: "Nine items, in order: set company info and fiscal year; confirm the plan or product; build or import the chart of accounts; enter opening balances as of your start date; connect bank and credit-card accounts; add customers, vendors, and items; turn on and configure sales tax if you charge it; add users and set permissions; and review the key preferences before you start entering transactions. Tick each as you complete it." },
    { q: "Is the QuickBooks setup the same in Online and Desktop?", a: "The items are the same &mdash; company info, chart of accounts, opening balances, bank connections, lists, sales tax, users, preferences &mdash; but where you find each setting and how bank feeds and the chart of accounts behave differs between QuickBooks Online and QuickBooks Desktop. The checklist below is written to apply to both; the full guide notes where the two diverge." },
    { q: "Is this checklist free to download or print?", a: "Yes. The checklist is free to read, print, or screenshot &mdash; there&rsquo;s no email wall and nothing to buy. If you&rsquo;d rather have a Certified QuickBooks ProAdvisor set the file up for you, or check one you&rsquo;ve already started, you can book a discovery call or get a free file review. Independent firm &mdash; not Intuit." },
  ],
  // "What to have ready before you start" — the prep list (was causes[]). Accurate, general, no invented internals/stats.
  causes: [
    { rank: "Have ready 01", name: "Business identity &amp; fiscal year", body: "Your legal business name, address, EIN, entity type, and the month your fiscal year starts. QuickBooks uses the fiscal-year start to date your reports and your first close, so get it right before you enter anything." },
    { rank: "Have ready 02", name: "Your plan or product", body: "Know which QuickBooks Online plan or QuickBooks Desktop product you&rsquo;re on, since the available features &mdash; sales tax, multiple users, inventory, classes &mdash; depend on it. Pick the plan to fit the work, not the other way round." },
    { rank: "Have ready 03", name: "A chart of accounts", body: "Your accountant&rsquo;s preferred chart of accounts, or a clean industry default to start from. The chart is the backbone of every report; setting it up once, correctly, saves a cleanup later. See the <a href=\"/quickbooks/online/features/chart-of-accounts/\">chart of accounts reference</a>." },
    { rank: "Have ready 04", name: "Opening balances &amp; a start date", body: "A firm start date and the opening balances as of that date &mdash; bank and credit-card balances from a recent statement, plus any outstanding receivables, payables, and loans. Wrong opening balances are the most common reason a new file won&rsquo;t reconcile." },
    { rank: "Have ready 05", name: "Bank, card &amp; list details", body: "Online-banking login details for the accounts you&rsquo;ll connect, and your lists &mdash; customers, vendors, and the products or services (items) you sell &mdash; ready to enter or import." },
    { rank: "Have ready 06", name: "Sales-tax &amp; user information", body: "If you charge sales tax, the jurisdictions and rates (or your tax agency details so QuickBooks can calculate them); and the names, emails, and intended permission levels of anyone who needs access to the file." },
  ],
  // "The QuickBooks setup quick-checklist" — the nine TICK-LIST items (HowTo). Condensed, scannable, NOT a step-by-step walkthrough.
  fixSteps: [
    { name: "Set company info &amp; fiscal year", body: "Enter the legal business name, address, EIN, entity type, and fiscal-year start. This dates your reports and your first close, so confirm it before anything else." },
    { name: "Confirm the plan or product", body: "Check you&rsquo;re on the QuickBooks Online plan or Desktop product that includes the features you need &mdash; sales tax, extra users, inventory &mdash; before you build the file out." },
    { name: "Build or import the chart of accounts", body: "Set up the chart of accounts from your accountant&rsquo;s list or a clean industry default. Keep it lean and meaningful; you can refine it, but the backbone matters now." },
    { name: "Enter opening balances", body: "Record opening balances as of your start date &mdash; bank and card balances from a recent statement, plus outstanding receivables, payables, and loans. This is what lets the file reconcile." },
    { name: "Connect bank &amp; credit-card accounts", body: "Link the bank and card accounts so transactions download automatically, matching each connection to the right account in the chart. Mind the &ldquo;from&rdquo; date so you don&rsquo;t double-import history." },
    { name: "Add customers, vendors &amp; items", body: "Enter or import your customers, vendors, and the products or services you sell. Accurate lists now mean clean invoices, bills, and reports later." },
    { name: "Turn on &amp; configure sales tax", body: "If you charge sales tax, switch it on and set the jurisdictions and rates (or let QuickBooks calculate from your tax agency). Skip this if it doesn&rsquo;t apply &mdash; don&rsquo;t enable what you don&rsquo;t collect." },
    { name: "Add users &amp; set permissions", body: "Invite anyone who needs access and set each person&rsquo;s permission level to match their role. Keep full access to the people who truly need it." },
    { name: "Review key preferences", body: "Before entering transactions, set the preferences that shape daily work &mdash; invoice and form defaults, payment terms, sales-tax behavior, and how the home currency and accounting method are handled. Then you&rsquo;re ready." },
  ],
  // "When to have a ProAdvisor set it up" — three signals (was proSignals[]).
  proSignals: [
    { name: "You&rsquo;re migrating, not starting fresh", body: "You&rsquo;re moving from another system, an old QuickBooks file, or spreadsheets &mdash; with history to bring across. Opening balances, list mapping, and the cut-over date are where migrations go wrong, and a ProAdvisor sets them so the file ties from day one." },
    { name: "The numbers have to be right immediately", body: "You have a loan, investors, sales tax, payroll, or a tax deadline riding on the books being accurate now. When there&rsquo;s no room for a learning-curve error, having the file set up correctly the first time is cheaper than a cleanup later." },
    { name: "You&rsquo;d rather get it right than DIY", body: "Setup is doable yourself, but if you&rsquo;d rather not learn the chart of accounts, opening balances, and preferences on a live file, a Certified ProAdvisor sets it up against a written scope so you start on solid books." },
  ],
  operatorSpec: [
    { value: "Free", label: "checklist to print, and a free file review if you&rsquo;ve already started" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for a guided, done-for-you setup" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  related: [
    { title: "QuickBooks setup checklist (full guide)", href: "/quickbooks/setup/checklist/", body: "The fuller step-by-step companion to this tick-list &mdash; the same items expanded into a detailed walkthrough, with where each setting lives and how QuickBooks Online and Desktop differ. Start here when you want the how, not just the what." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/", body: "What a done-for-you QuickBooks setup covers, when it&rsquo;s worth having a Certified ProAdvisor do it, and how a guided setup is scoped &mdash; for businesses that&rsquo;d rather start on books that already tie." },
    { title: "Chart of accounts", href: "/quickbooks/online/features/chart-of-accounts/", body: "The backbone of the whole setup: what the chart of accounts is, how to structure it, and the choices that make later reporting clean &mdash; the one list worth getting right before you enter a single transaction." },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This checklist is an independent ProAdvisor reference. For an Intuit account, login, password, subscription, or billing issue, contact Intuit directly &mdash; we can&rsquo;t access your Intuit account. What we do is the operational accounting work of setting up and running your own books. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "How is this different from the full setup guide?", a: "This page is the condensed, printable quick tick-list &mdash; the items to check off, at a glance, in order. The fuller <a href=\"/quickbooks/setup/checklist/\">QuickBooks setup checklist guide</a> expands each item into a step-by-step walkthrough, with where to find each setting and how QuickBooks Online and Desktop differ. Use this one to tick off progress; use the full guide when you want the detail behind a step." },
    { q: "What order should I set up QuickBooks in?", a: "Company info and fiscal year first, then confirm your plan, build the chart of accounts, enter opening balances as of your start date, connect bank and card accounts, add customers, vendors, and items, turn on sales tax if you charge it, add users, and finally review key preferences before you enter transactions. The checklist above follows that order." },
    { q: "What do I need to have ready before I start?", a: "Your legal business name, address, EIN, and fiscal-year start; the plan or product you&rsquo;re on; a chart of accounts to start from; opening balances as of your start date with a recent bank and card statement; bank and card login details; your customer, vendor, and item lists; and your sales-tax and user information. Having all of it to hand turns setup into a single sitting." },
    { q: "Is the checklist free to print or download?", a: "Yes &mdash; it&rsquo;s free to read, print, or screenshot, with no email wall and nothing to buy. We publish it as a reference. If you&rsquo;d like a Certified ProAdvisor to set the file up for you, or to check one you&rsquo;ve started, you can book a discovery call or get a free file review." },
    { q: "Can I set up QuickBooks myself, or should I hire a ProAdvisor?", a: "You can absolutely do it yourself &mdash; that&rsquo;s what this checklist is for. Bring in a Certified ProAdvisor when you&rsquo;re migrating history rather than starting fresh, when the numbers have to be right immediately for a loan, investors, sales tax, or a deadline, or when you&rsquo;d simply rather have it done correctly the first time. A guided setup is typically a $1,200&ndash;$3,000 fixed-fee scope." },
    { q: "What happens if my opening balances are wrong?", a: "Wrong opening balances are the most common reason a new file won&rsquo;t reconcile &mdash; reports look off, and the books don&rsquo;t tie to the bank from the start. Catching it early is a quick correction; left for months it becomes a cleanup, which runs $1,500&ndash;$15,000+ depending on how far the file has drifted. If you&rsquo;re unsure your balances are right, a free file review will tell you before it compounds." },
    { q: "Does this checklist work for QuickBooks Online and Desktop?", a: "Yes. The items &mdash; company info, chart of accounts, opening balances, bank connections, lists, sales tax, users, preferences &mdash; apply to both QuickBooks Online and QuickBooks Desktop. Where each setting lives and how bank feeds and the chart of accounts behave differs between the two; the full setup guide notes those differences." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/resources/checklists/quickbooks-setup-checklist/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#checklist-quickbooks-setup-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Resources","item":"https://techbrot.com/resources/"},
          {"@type":"ListItem","position":3,"name":"Checklists","item":"https://techbrot.com/resources/checklists/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Setup Checklist","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Setup Checklist (Free Printable Quick-List)","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks","applicationCategory":"BusinessApplication","operatingSystem":"Web, Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"QuickBooks setup quick-checklist","description":"A condensed, printable nine-item checklist for setting up a new QuickBooks company file correctly from day one.","tool":[{"@type":"HowToTool","name":"QuickBooks Online or QuickBooks Desktop"},{"@type":"HowToTool","name":"Opening balances and a recent bank statement"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#checklist-quickbooks-setup-list"};})},
        {"@type":"Service","@id":url+"#service","name":"Guided QuickBooks setup","serviceType":"QuickBooks company-file setup and configuration","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; $1,200–$3,000 typical fixed-fee guided setup; $1,500–$15,000+ cleanup if an existing file is behind"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

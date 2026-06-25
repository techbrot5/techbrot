/* /find-an-accountant/indiana/quickbooks-training/ — IN SERVICE child (QB spoke), t-money.
 * Mirrors the proven NY/DE exemplars (quickbooks-training.*) with Indiana content per IN-FACTS.md.
 * JSON front-matter in the .njk; this file supplies content arrays + an eleventyComputed pageGraph
 * (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * IN LOCALIZATION: DE gross-receipts → Indiana flat 7% statewide sales tax (no local) + county
 * Local Income Tax (LIT) payroll withholding by employee county of residence (Form WH-4). PRICING:
 * IN-FACTS gives NO training rate — pricing written qualitatively ("hourly or session packages,
 * confirmed before booking"); the Service Offer carries no numeric price. provider = #organization;
 * areaServed = State Indiana; reviewedBy #david-westgate. NO street address, NO LocalBusiness.
 * HONESTY (R5): firm-level review byline (no founder name); independent firm — does NOT file Indiana
 * returns; never quotes a specific county LIT %; coordinates with the client's CPA/EA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2. (H2: What Indiana QuickBooks training actually is.)
  summary: [
    "Indiana QuickBooks training is live, one-on-one instruction from a Certified QuickBooks ProAdvisor, delivered remotely over screen-share on <a href=\"/find-an-accountant/indiana/quickbooks-accountant/\">your own company file</a> &mdash; not a generic course or a recorded demo. Each session is built around what you actually do in QuickBooks: entering income and expenses, categorizing bank-feed transactions, reconciling accounts, invoicing and recording payments, running the reports that tell you how the business is doing, and the Indiana specifics like tracking the flat 7% <a href=\"/find-an-accountant/indiana/sales-tax-help/\">sales tax</a> and setting up <a href=\"/find-an-accountant/indiana/county-income-tax-help/\">county local-income-tax (LIT) withholding</a> in payroll.",
    "Training is role-based and paced to your level &mdash; an owner who mainly reviews reports learns different sessions than an in-house bookkeeper running daily data entry &mdash; and every session is recorded so you and your team can refer back to it later. It is delivered on whichever version your business runs: QuickBooks Online or Desktop, by a ProAdvisor certified across Online (Level 2), Desktop, Enterprise, and Payroll.",
    "Most Indiana engagements run a few focused hours rather than a fixed course, because training is targeted to exactly what you need to learn. Pricing &mdash; hourly or discounted session packages &mdash; is confirmed before the first session. Training pairs naturally with a clean <a href=\"/find-an-accountant/indiana/quickbooks-setup/\">setup</a> and ongoing <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a>. We teach the software; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Indiana taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Indiana QuickBooks training, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks training?", a: "Live one-on-one instruction from a Certified ProAdvisor on your own company file &mdash; covering daily transactions, bank-feed categorization, reconciliation, invoicing, reporting, and the Indiana specifics: the flat 7% sales tax and county-LIT payroll withholding. Taught remotely over screen-share, paced to your level, and recorded for later reference." },
    { q: "How much does it cost?", a: "Hourly, or discounted session packages if you need several hours. Most Indiana owners and bookkeepers need a few focused sessions, not a long course, because training is targeted to exactly what you need. The rate and any package pricing are confirmed up front before booking." },
    { q: "Is it Online or Desktop?", a: "Both. Training is delivered on whichever version your business runs &mdash; QuickBooks Online or Desktop &mdash; by a ProAdvisor certified across Online (Level 2), Desktop, Enterprise, and Payroll. If you&rsquo;re deciding between Online and Desktop, that conversation is part of the session." },
    { q: "Who is it for?", a: "Owners, in-house bookkeepers, and office managers at Indiana businesses who keep their own books and want to do it correctly and efficiently. Sessions are role-based &mdash; an owner reviewing reports needs different training than a bookkeeper running daily entry &mdash; so the content is tailored to who&rsquo;s being trained." },
    { q: "Will it cover sales tax and county LIT?", a: "Yes &mdash; two of the most requested Indiana topics. Sessions cover applying the <strong>flat 7% statewide sales tax</strong> (no local add-ons) to taxable items, and setting up <strong>county local-income-tax (LIT) withholding</strong> in payroll by each employee&rsquo;s county of residence on Form WH-4. Both are simple once you&rsquo;ve been shown how &mdash; and both are things Indiana owners commonly get wrong." },
  ],

  // COVERS — five training topics. (H2: What Indiana QuickBooks training covers. + 5 H3s)
  covers: [
    { num: "01 &middot; Daily work", title: "Daily transactions &amp; bank feeds", body: "Entering income and expenses, categorizing bank-feed transactions correctly, and setting up bank rules so the routine work stays fast and accurate instead of piling up." },
    { num: "02 &middot; Reconciliation", title: "Reconciliation done right", body: "How to reconcile bank and credit-card accounts every month, what to do when it won&rsquo;t balance, and why reconciliation is the habit that keeps your books trustworthy." },
    { num: "03 &middot; Indiana taxes", title: "Indiana sales tax &amp; county LIT", body: "Applying the flat 7% statewide sales tax to taxable items (no local rates to juggle), handling exempt sales and use tax, and setting up county local-income-tax (LIT) withholding in payroll by each employee&rsquo;s county of residence (Form WH-4) so payroll and filings reconcile." },
    { num: "04 &middot; Receivables", title: "Invoicing, payments &amp; A/R", body: "Creating and sending invoices, recording payments, managing who owes you, and keeping accounts receivable clean so cash flow reflects reality." },
    { num: "05 &middot; Reporting", title: "Reports that mean something", body: "Running and reading the profit-and-loss, balance sheet, and the handful of reports that actually tell you how the Indiana business is doing." },
  ],

  // SCOPE — what training is and isn't. (H2: What training gives you — and what it doesn't. + 2 H3s)
  scopeDo: [
    "Live 1-on-1 instruction on your own QuickBooks file",
    "Role-based sessions (owner / bookkeeper / office manager)",
    "Indiana 7% sales-tax handling and county-LIT payroll withholding",
    "Reconciliation, invoicing, payments, and reporting",
    "A recorded video of each session for the team",
  ],
  scopeDont: [
    "Filing your tax returns &mdash; that&rsquo;s your CPA or EA",
    "Doing the bookkeeping for you &mdash; see <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a>",
    "Fixing a broken file &mdash; see <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a>",
    "Representing you before tax authorities &mdash; out of scope",
  ],
  scopeNote: "We coordinate directly with your CPA or EA, who files your Indiana and federal returns and the sales-tax and county-income-tax returns. We teach the software; your CPA files.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A video tutorial can show you which buttons to click. It can&rsquo;t tell you whether your sales-tax items are mapped correctly for your industry, which county-LIT rate applies to an employee who just moved, or why your reconciliation keeps drifting by a few dollars every month. The mechanics are the easy part &mdash; and increasingly, automation handles the routine data entry on its own.",
    "Training from a Certified ProAdvisor teaches the judgment behind the clicks: why a transaction belongs in one account and not another, which county&rsquo;s LIT rate your payroll should withhold, how to read what a report is really telling you, and what to check first when the books look wrong. That&rsquo;s the layer that keeps you confident in your own QuickBooks long after the session ends. <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">Explore ongoing monthly bookkeeping &rarr;</a>",
  ],

  // FAQ — 7 Q/A (IN-FACTS cap 5–7). visible faq__list = FAQPage (same array). 1 call-intent (phone).
  faq: [
    { q: "What is QuickBooks training and how is it delivered?", a: "QuickBooks training is live, one-on-one instruction from a Certified QuickBooks ProAdvisor, delivered remotely over screen-share on your own company file. Rather than a generic course, each session is built around what you actually do in QuickBooks &mdash; your transactions, your reports, and the Indiana tasks like sales tax and county-LIT payroll that matter to your business. Every session is recorded so you and your team can refer back to it later." },
    { q: "How much does QuickBooks training cost in Indiana?", a: "Training is priced hourly, with discounted session packages available if you need several hours. Most Indiana business owners and bookkeepers need only a few focused sessions rather than a long course, because training is targeted to exactly what you need to learn. We confirm the rate and any package pricing before the first session &mdash; to book, call <a href=\"tel:+18777515575\">(877) 751-5575</a> or schedule a free call online." },
    { q: "Do you train on QuickBooks Online or Desktop?", a: "Both. Our ProAdvisors hold active Intuit certifications across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll, so training is delivered on whichever version your business runs. If you&rsquo;re deciding between Online and Desktop, that conversation is part of the session &mdash; and if you haven&rsquo;t set up yet, we&rsquo;d start with <a href=\"/find-an-accountant/indiana/quickbooks-setup/\">QuickBooks setup</a> first." },
    { q: "Who is QuickBooks training for?", a: "Owners, in-house bookkeepers, and office managers at Indiana businesses who keep their own books and want to do it correctly and efficiently. Training is role-based &mdash; an owner who mainly reviews reports needs different sessions than a bookkeeper running daily data entry &mdash; so we tailor the content to who&rsquo;s being trained and what they&rsquo;re responsible for." },
    { q: "Will training cover Indiana sales tax and county income tax?", a: "Yes &mdash; both are among the most requested topics for Indiana businesses. Sessions cover applying the flat 7% statewide sales tax (no county or city add-ons) to taxable items and handling exempt sales, plus setting up county local-income-tax (LIT) withholding in payroll by each employee&rsquo;s county of residence on Form WH-4. We never guess a county rate &mdash; we show you how to pull the current figure from the Indiana DOR list. Both are straightforward once you&rsquo;ve been shown how." },
    { q: "How is training different from doing my bookkeeping?", a: "Training teaches you to run QuickBooks yourself; bookkeeping is us doing it for you. Many Indiana businesses start with training to get confident, then move to <a href=\"/find-an-accountant/indiana/monthly-bookkeeping/\">monthly bookkeeping</a> as they grow and want the time back. If your file already has problems, training won&rsquo;t fix those &mdash; that&rsquo;s a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> &mdash; but we&rsquo;ll tell you honestly which one you need." },
    { q: "Do you file my taxes as part of training?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we teach you the software and keep your books accurate, but we do not file tax returns or represent clients before tax authorities. We coordinate directly with your CPA or EA, who files your Indiana and federal returns and the sales-tax and county-income-tax returns. We teach the software; your CPA files." },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Live 1-on-1 training on your own file &middot; reconciliation, invoicing, reporting, Indiana 7% sales tax &amp; county-LIT payroll &middot; no tax-filing or representation (out of scope)" },
    { label: "Pricing", detail: "Hourly or session packages &middot; rate confirmed up front before booking" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/quickbooks-training/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana QuickBooks training","description":"One-on-one QuickBooks training for Indiana businesses from a Certified ProAdvisor — taught on your own file, including the flat 7% sales tax and county-LIT payroll withholding. All 92 counties.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-quickbooks-training-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-svc-training-summary","#in-svc-training-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Training"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana QuickBooks Training Service","serviceType":"QuickBooks training","description":"Live one-on-one QuickBooks training for Indiana businesses, delivered by a Certified QuickBooks ProAdvisor on the client's own company file, including the flat 7% sales tax and county local-income-tax payroll withholding. Independent Certified QuickBooks ProAdvisor firm; does not file Indiana returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana small and midsize businesses — owners, in-house bookkeepers, and office managers"},
          "offers":{"@type":"Offer","name":"QuickBooks training","description":"Hourly or discounted session packages; rate confirmed up front before booking.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/delaware/quickbooks-training/ — DE SERVICE child (QB spoke), t-money.
 * Mirrors the proven NY exemplar (new-york/quickbooks-training.*) with Delaware content per
 * DE-FACTS.md. JSON front-matter in the .njk; this file supplies content arrays + an
 * eleventyComputed pageGraph (WebPage, BreadcrumbList, Service, FAQPage).
 *
 * DE LOCALIZATION: NY's NYC 8.875% sales tax + quarterly NYS return → Delaware GROSS-RECEIPTS
 * tracking by activity + the monthly/quarterly Division of Revenue return; Wilmington wage tax for
 * payroll; NYC UBT → franchise tax. PRICING: DE-FACTS has NO training rate ($150/hr is NY-only) —
 * pricing is written qualitatively ("hourly or session packages, confirmed before booking"); the
 * Service Offer carries no numeric price. provider = #organization; areaServed = State Delaware;
 * reviewedBy #david-westgate. HONESTY (R5): firm-level review byline (no founder name); independent
 * firm — does NOT file Delaware returns; coordinates with the client's CPA/EA. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2. (H2: What Delaware QuickBooks training actually is.)
  summary: [
    "Delaware QuickBooks training is live, one-on-one instruction from a Certified QuickBooks ProAdvisor, delivered remotely over screen-share on <a href=\"/find-an-accountant/delaware/quickbooks-accountant/\">your own company file</a> &mdash; not a generic course or a recorded demo. Each session is built around what you actually do in QuickBooks: entering income and expenses, categorizing bank-feed transactions, reconciling accounts, invoicing and recording payments, running the reports that tell you how the business is doing, and the Delaware specifics like tracking and filing the <a href=\"/find-an-accountant/delaware/gross-receipts-tax-help/\">gross receipts tax</a> by business activity.",
    "Training is role-based and paced to your level &mdash; an owner who mainly reviews reports learns different sessions than an in-house bookkeeper running daily data entry &mdash; and every session is recorded so you and your team can refer back to it later. It is delivered on whichever version your business runs: QuickBooks Online or Desktop, by a ProAdvisor certified across Online (Level 2), Desktop, Enterprise, and Payroll.",
    "Most Delaware engagements run a few focused hours rather than a fixed course, because training is targeted to exactly what you need to learn. Pricing &mdash; hourly or discounted session packages &mdash; is confirmed before the first session. Training pairs naturally with a clean <a href=\"/find-an-accountant/delaware/quickbooks-setup/\">setup</a> and ongoing <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a>. We teach the software; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As. (H2: Delaware QuickBooks training, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks training?", a: "Live one-on-one instruction from a Certified ProAdvisor on your own company file &mdash; covering daily transactions, bank-feed categorization, reconciliation, invoicing, reporting, and Delaware gross-receipts filing. Taught remotely over screen-share, paced to your level, and recorded for later reference." },
    { q: "How much does it cost?", a: "Hourly, or discounted session packages if you need several hours. Most Delaware owners and bookkeepers need a few focused sessions, not a long course, because training is targeted to exactly what you need. The rate and any package pricing are confirmed up front before booking." },
    { q: "Is it Online or Desktop?", a: "Both. Training is delivered on whichever version your business runs &mdash; QuickBooks Online or Desktop &mdash; by a ProAdvisor certified across Online (Level 2), Desktop, Enterprise, and Payroll. If you&rsquo;re deciding between Online and Desktop, that conversation is part of the session." },
    { q: "Who is it for?", a: "Owners, in-house bookkeepers, and office managers at Delaware businesses who keep their own books and want to do it correctly and efficiently. Sessions are role-based &mdash; an owner reviewing reports needs different training than a bookkeeper running daily entry &mdash; so the content is tailored to who&rsquo;s being trained." },
    { q: "Will it cover the gross receipts tax?", a: "Yes &mdash; one of the most requested topics. Delaware sessions cover setting up QuickBooks to track receipts by <strong>business-activity category</strong> (Delaware has no sales tax to collect, but a gross receipts tax on the seller, 0.0945%&ndash;1.9914% by activity) and preparing the monthly or quarterly Division of Revenue return so your filing reconciles to the books. It&rsquo;s one of the most common things Delaware owners get wrong." },
  ],

  // COVERS — five training topics. (H2: What Delaware QuickBooks training covers. + 5 H3s)
  covers: [
    { num: "01 &middot; Daily work", title: "Daily transactions &amp; bank feeds", body: "Entering income and expenses, categorizing bank-feed transactions correctly, and setting up bank rules so the routine work stays fast and accurate instead of piling up." },
    { num: "02 &middot; Reconciliation", title: "Reconciliation done right", body: "How to reconcile bank and credit-card accounts every month, what to do when it won&rsquo;t balance, and why reconciliation is the habit that keeps your books trustworthy." },
    { num: "03 &middot; Gross receipts", title: "Delaware gross receipts tax", body: "Tracking receipts by business-activity category &mdash; the seller-side gross receipts tax (0.0945%&ndash;1.9914% by activity, after the exclusion) &mdash; and preparing the monthly or quarterly Division of Revenue return so it reconciles to the books rather than being reconstructed later." },
    { num: "04 &middot; Receivables", title: "Invoicing, payments &amp; A/R", body: "Creating and sending invoices, recording payments, managing who owes you, and keeping accounts receivable clean so cash flow reflects reality." },
    { num: "05 &middot; Reporting", title: "Reports that mean something", body: "Running and reading the profit-and-loss, balance sheet, and the handful of reports that actually tell you how the Delaware business is doing." },
  ],

  // SCOPE — what training is and isn't. (H2: What training gives you — and what it doesn't. + 2 H3s)
  scopeDo: [
    "Live 1-on-1 instruction on your own QuickBooks file",
    "Role-based sessions (owner / bookkeeper / office manager)",
    "Gross-receipts tracking by activity and the DE return",
    "Reconciliation, invoicing, payments, and reporting",
    "A recorded video of each session for the team",
  ],
  scopeDont: [
    "Filing your tax returns &mdash; that&rsquo;s your CPA or EA",
    "Doing the bookkeeping for you &mdash; see <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a>",
    "Fixing a broken file &mdash; see <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a>",
    "Representing you before tax authorities &mdash; out of scope",
  ],
  scopeNote: "We coordinate directly with your CPA or EA, who files your Delaware and federal returns and the annual franchise tax with your registered agent. We teach the software; your CPA files.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  advisoryBody: [
    "A video tutorial can show you which buttons to click. It can&rsquo;t tell you whether your gross-receipts activity categories are set up correctly for your industry, or why your reconciliation keeps drifting by a few dollars every month. The mechanics are the easy part &mdash; and increasingly, automation handles the routine data entry on its own.",
    "Training from a Certified ProAdvisor teaches the judgment behind the clicks: why a transaction belongs in one account and not another, which Delaware gross-receipts activity your revenue falls under, how to read what a report is really telling you, and what to check first when the books look wrong. That&rsquo;s the layer that keeps you confident in your own QuickBooks long after the session ends. <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">Explore ongoing monthly bookkeeping &rarr;</a>",
  ],

  // FAQ — 7 Q/A (DE-FACTS cap 5–7). visible faq__list = FAQPage (same array). 1 call-intent (phone).
  faq: [
    { q: "What is QuickBooks training and how is it delivered?", a: "QuickBooks training is live, one-on-one instruction from a Certified QuickBooks ProAdvisor, delivered remotely over screen-share on your own company file. Rather than a generic course, each session is built around what you actually do in QuickBooks &mdash; your transactions, your reports, and the Delaware tasks like gross-receipts filing that matter to your business. Every session is recorded so you and your team can refer back to it later." },
    { q: "How much does QuickBooks training cost in Delaware?", a: "Training is priced hourly, with discounted session packages available if you need several hours. Most Delaware business owners and bookkeepers need only a few focused sessions rather than a long course, because training is targeted to exactly what you need to learn. We confirm the rate and any package pricing before the first session &mdash; to book, call <a href=\"tel:+18777515575\">(877) 751-5575</a> or schedule a free call online." },
    { q: "Do you train on QuickBooks Online or Desktop?", a: "Both. Our ProAdvisors hold active Intuit certifications across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll, so training is delivered on whichever version your business runs. If you&rsquo;re deciding between Online and Desktop, that conversation is part of the session &mdash; and if you haven&rsquo;t set up yet, we&rsquo;d start with <a href=\"/find-an-accountant/delaware/quickbooks-setup/\">QuickBooks setup</a> first." },
    { q: "Who is QuickBooks training for?", a: "Owners, in-house bookkeepers, and office managers at Delaware businesses who keep their own books and want to do it correctly and efficiently. Training is role-based &mdash; an owner who mainly reviews reports needs different sessions than a bookkeeper running daily data entry &mdash; so we tailor the content to who&rsquo;s being trained and what they&rsquo;re responsible for." },
    { q: "Will training cover the Delaware gross receipts tax?", a: "Yes &mdash; it&rsquo;s one of the most requested topics for Delaware businesses. Sessions cover setting up QuickBooks to track receipts by business-activity category &mdash; Delaware has no sales tax to collect, but a gross receipts tax on the seller (0.0945%&ndash;1.9914% by activity) &mdash; and preparing the monthly or quarterly Division of Revenue return so your filing reconciles to the books. Getting it tracked correctly in QuickBooks is one of the most common things Delaware owners get wrong, and it&rsquo;s straightforward once you&rsquo;ve been shown how." },
    { q: "How is training different from doing my bookkeeping?", a: "Training teaches you to run QuickBooks yourself; bookkeeping is us doing it for you. Many Delaware businesses start with training to get confident, then move to <a href=\"/find-an-accountant/delaware/monthly-bookkeeping/\">monthly bookkeeping</a> as they grow and want the time back. If your file already has problems, training won&rsquo;t fix those &mdash; that&rsquo;s a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> &mdash; but we&rsquo;ll tell you honestly which one you need." },
    { q: "Do you file my taxes as part of training?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we teach you the software and keep your books accurate, but we do not file tax returns or represent clients before tax authorities. We coordinate directly with your CPA or EA, who files your Delaware and federal returns and the annual franchise tax. We teach the software; your CPA files." },
  ],

  // EXPERT REVIEW — firm-level trust row.
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Live 1-on-1 training on your own file &middot; reconciliation, invoicing, reporting, Delaware gross receipts tax &middot; no tax-filing or representation (out of scope)" },
    { label: "Pricing", detail: "Hourly or session packages &middot; rate confirmed up front before booking" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/quickbooks-training/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware QuickBooks training","description":"One-on-one QuickBooks training for Delaware businesses from a Certified ProAdvisor — taught on your own file, including gross-receipts-tax tracking and filing. All three counties.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-quickbooks-training.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-svc-training-summary","#de-svc-training-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Training"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware QuickBooks Training Service","serviceType":"QuickBooks training","description":"Live one-on-one QuickBooks training for Delaware businesses, delivered by a Certified QuickBooks ProAdvisor on the client's own company file, including Delaware gross-receipts tracking and filing. Independent Certified QuickBooks ProAdvisor firm; does not file Delaware returns or the franchise tax — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware small and midsize businesses — owners, in-house bookkeepers, and office managers"},
          "offers":{"@type":"Offer","name":"QuickBooks training","description":"Hourly or discounted session packages; rate confirmed up front before booking.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /find-an-accountant/new-york/quickbooks-training/ — t-location SERVICE child
 * (NY QuickBooks-training spoke). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-svc-qbtraining.txt) — the ONLY authority for the headings + the 7 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/quickbooks-training/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * industries/construction.11tydata.js: JSON front-matter lives in the .njk; this file
 * supplies the content arrays + an eleventyComputed pageGraph emitting the schema @graph
 * (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is generated from
 * the same `faq` array the visible faq__list renders from — single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this service child renders NO review-card and NO AggregateRating. The baseline's
 * named-reviewer line ("David Westgate · 40+ years…") is REFRAMED to firm-level: visible
 * content carries the Certified ProAdvisor team only (no founder/personal name); the
 * founder/reviewer persists solely in global Person schema via WebPage.reviewedBy @id.
 * Independent firm — does NOT file NY/NYC taxes; coordinates with the client's CPA/EA,
 * who files. Footer chrome (Accounting/QuickBooks/Company/Network) and the newsletter
 * ("The monthly brief.") are intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: What New York QuickBooks training actually is.)
  summary: [
    "New York QuickBooks training is live, one-on-one instruction from a Certified QuickBooks ProAdvisor, delivered remotely over screen-share on <a href=\"/find-an-accountant/new-york/quickbooks-accountant/\">your own company file</a> &mdash; not a generic course or a recorded demo. Each session is built around what you actually do in QuickBooks: entering income and expenses, categorizing bank-feed transactions, reconciling accounts, invoicing and recording payments, running the reports that tell you how the business is doing, and the New York specifics like tracking and filing <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC and NY sales tax</a>.",
    "Training is role-based and paced to your level &mdash; an owner who mainly reviews reports learns different sessions than an in-house bookkeeper running daily data entry &mdash; and every session is recorded so you and your team can refer back to it later. It is delivered on whichever version your business runs: QuickBooks Online or Desktop, by a ProAdvisor certified across Online (Level 2), Desktop, Enterprise, and Payroll.",
    "Most New York engagements run a few focused hours rather than a fixed course, because training is targeted to exactly what you need to learn. Pricing is $150/hour with discounted session packages, confirmed before the first session. Training pairs naturally with a clean <a href=\"/find-an-accountant/new-york/quickbooks-setup/\">setup</a> and ongoing <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a>. We teach the software; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York QuickBooks training, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks training?", a: "Live one-on-one instruction from a Certified ProAdvisor on your own company file &mdash; covering daily transactions, bank-feed categorization, reconciliation, invoicing, reporting, and New York sales-tax filing. Taught remotely over screen-share, paced to your level, and recorded for later reference." },
    { q: "How much does it cost?", a: "$150/hour, or discounted session packages if you need several hours. Most New York owners and bookkeepers need a few focused sessions, not a long course, because training is targeted to exactly what you need. The rate and any package pricing are confirmed up front before booking." },
    { q: "Is it Online or Desktop?", a: "Both. Training is delivered on whichever version your business runs &mdash; QuickBooks Online or Desktop &mdash; by a ProAdvisor certified across Online (Level 2), Desktop, Enterprise, and Payroll. If you&rsquo;re deciding between Online and Desktop, that conversation is part of the session." },
    { q: "Who is it for?", a: "Owners, in-house bookkeepers, and office managers at New York businesses who keep their own books and want to do it correctly and efficiently. Sessions are role-based &mdash; an owner reviewing reports needs different training than a bookkeeper running daily entry &mdash; so the content is tailored to who&rsquo;s being trained." },
    { q: "Will it cover NYC sales tax?", a: "Yes &mdash; one of the most requested topics. New York sessions cover setting up QuickBooks to track destination-based sales tax, including New York City&rsquo;s 8.875% combined rate, and preparing the quarterly New York State return so your filing reconciles to the books. It&rsquo;s one of the most common things New York owners get wrong." },
  ],

  // COVERS — the five training topics (grid-3 buyer-cards). 5 frozen H3s verbatim.
  // (H2: What New York QuickBooks training covers. + 5 H3s)
  covers: [
    { num: "01 &middot; Daily work", title: "Daily transactions &amp; bank feeds", body: "Entering income and expenses, categorizing bank-feed transactions correctly, and setting up bank rules so the routine work stays fast and accurate instead of piling up." },
    { num: "02 &middot; Reconciliation", title: "Reconciliation done right", body: "How to reconcile bank and credit-card accounts every month, what to do when it won&rsquo;t balance, and why reconciliation is the habit that keeps your books trustworthy." },
    { num: "03 &middot; NY sales tax", title: "NYC &amp; NY sales tax", body: "Tracking destination-based sales tax including NYC&rsquo;s 8.875% combined rate, and preparing the quarterly New York State return so it reconciles to the books rather than being reconstructed later." },
    { num: "04 &middot; Receivables", title: "Invoicing, payments &amp; A/R", body: "Creating and sending invoices, recording payments, managing who owes you, and keeping accounts receivable clean so cash flow reflects reality." },
    { num: "05 &middot; Reporting", title: "Reports that mean something", body: "Running and reading the profit-and-loss, balance sheet, and the handful of reports that actually tell you how the New York business is doing." },
  ],

  // SCOPE — what training is and isn't (two checks-lists). 2 frozen H3s verbatim.
  // (H2: What training gives you — and what it doesn't. + H3 Training covers / H3 Not training)
  scopeDo: [
    "Live 1-on-1 instruction on your own QuickBooks file",
    "Role-based sessions (owner / bookkeeper / office manager)",
    "NYC &amp; NY sales-tax tracking and quarterly filing",
    "Reconciliation, invoicing, payments, and reporting",
    "A recorded video of each session for the team",
  ],
  scopeDont: [
    "Filing your tax returns &mdash; that&rsquo;s your CPA or EA",
    "Doing the bookkeeping for you &mdash; see <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a>",
    "Fixing a broken file &mdash; see <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a>",
    "Representing you before tax authorities &mdash; out of scope",
  ],
  scopeNote: "We coordinate directly with your CPA or EA, who files your New York and federal returns and the NYC UBT. We teach the software; your CPA files.",

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "A video tutorial can show you which buttons to click. It can&rsquo;t tell you whether your NYC sales-tax item is set up correctly for your industry, or why your reconciliation keeps drifting by a few dollars every month. The mechanics are the easy part &mdash; and increasingly, automation handles the routine data entry on its own.",
    "Training from a Certified ProAdvisor teaches the judgment behind the clicks: why a transaction belongs in one account and not another, how to read what a report is really telling you, and what to check first when the New York books look wrong. That&rsquo;s the layer that keeps you confident in your own QuickBooks long after the session ends. <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">Explore ongoing monthly bookkeeping &rarr;</a>",
  ],

  // FAQ — 7 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: What people ask before booking QuickBooks training.)
  faq: [
    { q: "What is QuickBooks training and how is it delivered?", a: "QuickBooks training is live, one-on-one instruction from a Certified QuickBooks ProAdvisor, delivered remotely over screen-share on your own company file. Rather than a generic course, each session is built around what you actually do in QuickBooks &mdash; your transactions, your reports, and the New York tasks like sales-tax filing that matter to your business. Every session is recorded so you and your team can refer back to it later." },
    { q: "How much does QuickBooks training cost in New York?", a: "Training is $150 per hour, with discounted session packages available if you need several hours. Most New York business owners and bookkeepers need only a few focused sessions rather than a long course, because training is targeted to exactly what you need to learn. We confirm the rate and any package pricing before the first session." },
    { q: "Can I talk to a Certified ProAdvisor before booking a session?", a: "Yes &mdash; reach out for a quick, no-obligation call to map out what you want to learn and how many sessions it&rsquo;ll take. Call (877) 751-5575 or <a href=\"/contact/?intent=new-york\">get in touch</a>, and we&rsquo;ll confirm the $150/hour rate (or a discounted package) before the first session. Training runs on whichever version you use &mdash; Online or Desktop &mdash; and if you haven&rsquo;t set up yet, we&rsquo;d start with <a href=\"/find-an-accountant/new-york/quickbooks-setup/\">QuickBooks setup</a> first." },
    { q: "Who is QuickBooks training for?", a: "Owners, in-house bookkeepers, and office managers at New York businesses who keep their own books and want to do it correctly and efficiently. Training is role-based &mdash; an owner who mainly reviews reports needs different sessions than a bookkeeper running daily data entry &mdash; so we tailor the content to who&rsquo;s being trained and what they&rsquo;re responsible for." },
    { q: "Will training cover NYC and New York sales tax?", a: "Yes &mdash; it&rsquo;s one of the most requested topics for New York businesses. Sessions cover setting up QuickBooks to track destination-based sales tax, including New York City&rsquo;s 8.875% combined rate, and preparing the quarterly New York State return so your filing reconciles to the books. Getting sales tax tracked correctly in QuickBooks is one of the most common things New York owners get wrong, and it&rsquo;s straightforward once you&rsquo;ve been shown how." },
    { q: "How is training different from doing my bookkeeping?", a: "Training teaches you to run QuickBooks yourself; bookkeeping is us doing it for you. Many New York businesses start with training to get confident, then move to <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> as they grow and want the time back. If your file already has problems, training won&rsquo;t fix those &mdash; that&rsquo;s a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> &mdash; but we&rsquo;ll tell you honestly which one you need." },
    { q: "Do you file my taxes as part of training?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; we teach you the software and keep your books accurate, but we do not file tax returns or represent clients before tax authorities. We coordinate directly with your CPA or EA, who files your New York and federal returns and the NYC UBT. We teach the software; your CPA files." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; baseline named-reviewer line reframed).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Live 1-on-1 training on your own file &middot; reconciliation, invoicing, reporting, NYC &amp; NY sales tax &middot; no tax-filing or representation (out of scope)" },
    { label: "Pricing", detail: "$150/hour or session packages &middot; rate confirmed up front before booking" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/quickbooks-training/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks training","description":"One-on-one QuickBooks training for New York businesses from a Certified ProAdvisor — taught on your own file, including NYC sales-tax filing. From $150/hr, all 62 counties.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-quickbooks-training-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-qbtraining-summary","#ny-svc-qbtraining-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Training"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks Training Service","serviceType":"QuickBooks training","description":"Live one-on-one QuickBooks training for New York businesses, delivered by a Certified QuickBooks ProAdvisor on the client's own company file. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and midsize businesses — owners, in-house bookkeepers, and office managers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"150","description":"From $150/hour; discounted session packages available.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

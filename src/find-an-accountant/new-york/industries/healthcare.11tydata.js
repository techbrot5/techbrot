/* /find-an-accountant/new-york/industries/healthcare/ — t-location INDUSTRY child
 * (deeper than a city child — frozen contract headings). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-ind-healthcare.txt) — the ONLY authority for the headings + the 8 FAQ —
 * and the live baseline old HTML (find-an-accountant/new-york/industries/healthcare/
 * index.html, full body read) for body prose/section content. Data-file shape mirrors
 * the proven NY INDUSTRY page construction.11tydata.js: JSON front-matter lives in the
 * .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * schema @graph (WebPage, BreadcrumbList, Service, FAQPage). The FAQPage mainEntity is
 * generated from the same `faq` array the visible faq__list renders from — single source
 * of truth. FAQ is append-only: each contract answer is preserved verbatim; enrichment
 * only appends, never reword/remove.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes on this page. The only
 * review proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this industry child renders NO review-card and NO AggregateRating. New York
 * medical-practice facts (Corporate Practice of Medicine; physician-owned PC/PLLC professional
 * entity; no fee-splitting with non-physicians; no NY sales tax on medical services; close
 * worker-classification enforcement) reflect NY Business Corporation Law / LLC Law and NY DTF
 * guidance, framed qualitatively where an exact figure isn't load-bearing. No founder/personal
 * name in visible content (firm-level review byline only). Independent firm — does NOT file
 * NY taxes and does NOT set up entities or give legal advice; coordinates with the client's
 * attorney and CPA, who handle entity/legal structure and filing. Footer chrome
 * (Accounting/QuickBooks/Company/Network) and the newsletter ("The monthly brief.") are
 * intentionally NOT rendered here — global chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  summary: [
    "<strong>Medical-practice accounting</strong> in New York is defined by the <strong>revenue cycle</strong>, not the expense side. A practice rarely collects what it bills at the time of service &mdash; insurance pays a <strong>contracted amount</strong>, net of contractual adjustments and denials, often weeks later, with the patient responsible for the balance. So the central work is reconciling <strong>what was billed to what was actually collected, by payer</strong>, separating contractual write-offs from true revenue, and tracking <strong>aged A/R by payer</strong> so the revenue still in the pipeline is visible. Generalist bookkeeping that just records the deposit misses all of it.",
    "New York adds a <strong>structural layer</strong>. Under the state&rsquo;s <strong>Corporate Practice of Medicine</strong> doctrine, a medical practice must be owned and controlled by licensed physicians through a <strong>Professional Corporation (PC)</strong> or <strong>Professional Limited Liability Company (PLLC)</strong> &mdash; not a standard LLC or business corporation &mdash; and medical-service revenue can&rsquo;t be shared with non-physicians, which is why any <strong>management-company (MSO)</strong> arrangement has to keep clinical revenue and administrative fees cleanly separated in the books. Entity setup is your attorney&rsquo;s and CPA&rsquo;s job; ours is keeping the books accurate inside whatever structure they establish.",
    "There&rsquo;s a New York tax wrinkle worth naming plainly: <strong>medical services are not subject to New York sales tax</strong>, so a practice generally has no sales-tax collection burden on its clinical revenue &mdash; the compliance attention goes instead to <strong>worker classification</strong> (New York enforces W-2-vs-1099 treatment closely, which matters where <strong>per-diem or locum providers</strong> work alongside W-2 clinicians) and to keeping <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly financials</a> clean for your CPA. <strong>TechBrot</strong> sets all of this up in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, reconciles payer deposits monthly, and turns it into a collection picture you can run the practice from. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes or set up entities.",
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York medical practice accounting, in five questions.)
  aiSummary: [
    { q: "Why is NY medical-practice accounting different?", a: "The <strong>revenue cycle</strong>. Insurance and payer deposits arrive <strong>partial</strong>, reduced by contractual adjustments, and weeks late &mdash; so the core work is reconciling <strong>what was billed to what was actually collected, by payer</strong>. Generalist bookkeeping that just records the deposit misses the write-offs and the gaps." },
    { q: "Does New York require a special entity for a medical practice?", a: "Yes. Under New York&rsquo;s <strong>Corporate Practice of Medicine</strong> rules, a practice must be physician-owned through a <strong>Professional Corporation (PC) or PLLC</strong> &mdash; not a standard LLC &mdash; and medical revenue can&rsquo;t be shared with non-physicians. Your attorney sets the structure; we keep the books inside it." },
    { q: "Cash basis or accrual?", a: "Many small practices run <strong>cash basis</strong> for simplicity, but <strong>accrual</strong> shows the truer picture when large receivables sit unpaid with payers. We keep the books so your CPA can report on the basis that fits &mdash; and see receivables either way." },
    { q: "Is there NY sales tax on what we bill?", a: "No &mdash; <strong>medical services are not subject to New York sales tax</strong>, so clinical revenue carries no sales-tax collection burden. The compliance attention goes to <strong>worker classification</strong> (W-2 clinicians vs. 1099 locums), which New York enforces closely." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by visit and transaction volume, number of providers, and payer complexity. Monthly bookkeeping typically runs <strong>$400&ndash;$2,500+/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/new-york/pricing/\">New York pricing</a>." },
  ],

  // CHALLENGES — three places practices lose the real numbers (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: Three places New York practices lose the real numbers. + 3 H3s)
  challenges: [
    { signal: "Revenue is a black box", title: "Payer deposits aren&rsquo;t reconciled to billing.", body: "An insurance deposit is rarely the amount billed &mdash; it&rsquo;s net of contractual adjustments, denials, and patient responsibility, often weeks after the visit. Record the deposit as revenue and you lose the write-offs, can&rsquo;t see your true collection rate, and never know which payers underpay. The fix is payer and patient deposits reconciled against your billing or practice-management system, with contractual adjustments separated from real revenue. If your books show the deposit but not what was billed and adjusted, you can&rsquo;t tell a slow payer from a lost one." },
    { signal: "Cash flow looks wrong", title: "Receivables and basis aren&rsquo;t managed.", body: "With large balances sitting unpaid in accounts receivable, cash-basis books can make a strong month look weak or a weak one look fine. Without an <strong>aged A/R view by payer</strong>, you can&rsquo;t see how much revenue is stuck in the pipeline or where collections are stalling. The fix is books kept so your CPA can report on cash or accrual as fits, with aged receivables by payer so the revenue pipeline is visible. If you don&rsquo;t know your A/R by payer right now, your cash-flow picture is part guesswork." },
    { signal: "NY structure risk", title: "Books don&rsquo;t fit the PC/PLLC structure.", body: "New York requires a medical practice to be physician-owned through a <strong>PC or PLLC</strong>, and prohibits sharing medical revenue with non-physicians. When a practice works with a management company (MSO) or grows into a group, books that don&rsquo;t cleanly separate clinical revenue from administrative fees can blur a line the state takes seriously. The fix is books structured to fit your professional entity and to keep any management-fee arrangement cleanly separated &mdash; set up with your attorney and CPA, maintained accurately by us. The entity and any MSO structure is a legal decision for your attorney; our job is books that reflect it correctly, not muddy it." },
  ],

  // WHAT WE HANDLE — the six services (grid-3 buyer-cards). 6 frozen H3s verbatim.
  // (H2: New York medical practice accounting, done by an expert. + 6 H3s)
  handle: [
    { num: "01 &middot; Payer reconciliation", title: "Insurance &amp; patient deposits", body: "Payer and patient deposits reconciled to your billing system, with contractual adjustments separated from true revenue so collection reality is visible.", href: "/find-an-accountant/new-york/quickbooks-reconciliation/", cta: "New York reconciliation &rarr;" },
    { num: "02 &middot; Accounts receivable", title: "Aged A/R by payer", body: "Receivables tracked and aged by payer so you can see how much revenue is in the pipeline and where collections are stalling.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "New York monthly bookkeeping &rarr;" },
    { num: "03 &middot; Entity-fit books", title: "PC / PLLC bookkeeping", body: "Books structured to fit your physician-owned professional entity, with clinical revenue and any management-fee arrangement cleanly separated.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "New York QuickBooks setup &rarr;" },
    { num: "04 &middot; Practice payroll", title: "Provider &amp; staff payroll", body: "Payroll for physicians, NPs, PAs, and administrative staff handled correctly, with the W-2-vs-1099 worker-classification care New York enforces closely &mdash; including per-diem and locum providers.", href: "/accounting/payroll-management/", cta: "Payroll management &rarr;" },
    { num: "05 &middot; Provider profitability", title: "Profit by provider or location", body: "QuickBooks classes and tags configured so a group or multi-location practice can see profitability by provider, location, or service line &mdash; not just a blended total.", href: "/find-an-accountant/new-york/bookkeeping-services/", cta: "New York bookkeeping &rarr;" },
    { num: "06 &middot; Cleanup &amp; catch-up", title: "Back-books &amp; reconstruction", body: "Behind on the books or carrying months of unreconciled payer deposits? We rebuild them CPA-ready, separating adjustments from revenue, then keep them clean.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "New York bookkeeping cleanup &rarr;" },
  ],

  // INTEGRATIONS — practice tools reconciled with QuickBooks (checks-list).
  // (H2: Connected to how you run the practice.)
  integrations: [
    "QuickBooks Online &mdash; the practice ledger payer deposits reconcile into",
    "athenahealth &mdash; deposits and adjustments exported to QuickBooks",
    "DrChrono &mdash; EHR and billing reconciled to the books",
    "Kareo / Tebra &mdash; practice-management payments matched to deposits",
    "SimplePractice &mdash; behavioral-health billing reconciled",
    "Square &mdash; patient copays and card payments",
    "Stripe &mdash; online patient payments",
    "Gusto &mdash; provider and staff payroll",
  ],
  integrationsNote: "Using a different EHR or practice-management system? If it exports deposits and adjustments to QuickBooks, we can build the workflow around it. <a href=\"/contact/?intent=new-york&amp;state=new-york&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: From mystery deposits to a clear revenue picture. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your payer mix, billing system, entity structure, provider count, and where the books stop reflecting reality. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure payer-reconciliation workflows and entity-fit books, plus a <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> to reconcile prior payer deposits and separate adjustments from revenue." },
    { phase: "Phase 3", title: "Monthly close &amp; reporting", body: "Monthly reconciliation of payer and patient deposits, aged A/R by payer, provider and staff payroll, and provider- or location-level reporting where you want it." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Collection-rate and provider-profitability reporting and, as the practice grows, <a href=\"/accounting/advisory/fractional-cfo/\">cash-flow and expansion advisory</a>." },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose.
  // (H2: A clear revenue picture is the start. Running a healthy practice is the point.)
  advisoryBody: [
    "Once payer deposits reconcile, receivables are visible by payer, and your books fit your entity, the question shifts from &ldquo;what did we actually collect?&rdquo; to &ldquo;how do we run this better?&rdquo; Which payers are worth the administrative burden, where the collection rate is leaking, whether a provider or location is carrying the practice or dragging it, when cash flow supports adding staff or space &mdash; the decisions that separate New York practices that thrive from those that just stay full.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your practice&rsquo;s numbers turning them into collection-rate analysis, provider profitability, and cash-flow forecasting. As automation handles routine data entry, this judgment layer is where practices find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],

  // RELATED — NY services & industries (grid-2 buyer-cards). 4 frozen H3s verbatim.
  // (H2: Related New York services & industries. + 4 H3s)
  related: [
    { title: "QuickBooks reconciliation", body: "The reconciliation discipline behind matching payer deposits to billing, with contractual adjustments separated from true revenue.", href: "/find-an-accountant/new-york/quickbooks-reconciliation/", cta: "Reconciliation &rarr;" },
    { title: "Payroll management", body: "Physician, NP, PA, and staff payroll with clean W-2-vs-1099 worker classification &mdash; including per-diem and locum providers.", href: "/accounting/payroll-management/", cta: "Explore payroll &rarr;" },
    { title: "Monthly bookkeeping", body: "Payer reconciliation and aged A/R by payer kept current every month, CPA-ready for your filing.", href: "/find-an-accountant/new-york/monthly-bookkeeping/", cta: "Explore monthly &rarr;" },
    { title: "All NY industries", body: "See how TechBrot tailors accounting to the way your industry runs in New York &mdash; construction, legal/IOLTA, real estate, restaurant, nonprofit.", href: "/find-an-accountant/new-york/industries/", cta: "All industries &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Payer reconciliation, aged A/R, PC/PLLC entity-fit books, provider payroll &middot; entity/legal structure handled by your attorney &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract (answers preserved verbatim; append-only enrichment).
  // visible faq__list = FAQPage schema (same array). (H2: New York medical practice accounting questions.)
  faq: [
    { q: "What makes accounting for a medical practice different?", a: "The revenue cycle. Unlike most businesses, a practice rarely collects what it bills at the time of service &mdash; insurance pays a contracted amount, net of adjustments and denials, often weeks later, with the patient responsible for the balance. So the central accounting work is reconciling what was billed to what was actually collected, by payer, and separating contractual write-offs from true revenue. Generalist bookkeeping that simply records the deposit misses all of that, which is why practices need accounting built around the payer side." },
    { q: "Does New York require a special business entity for a medical practice?", a: "Yes. Under New York&rsquo;s Corporate Practice of Medicine rules, a medical practice must be owned and controlled by licensed physicians and structured as a Professional Corporation (PC), a Professional Limited Liability Company (PLLC), or a professional partnership &mdash; not a standard LLC or general business corporation. New York also prohibits sharing medical-service revenue with non-physicians, which is why arrangements with management companies (MSOs) must keep clinical services and administrative fees clearly separate. Setting up the entity and any MSO structure is a legal matter for your attorney and CPA; our role is keeping the books accurate inside whatever structure they establish." },
    { q: "Should my practice use cash-basis or accrual accounting?", a: "Many smaller practices use cash basis because it&rsquo;s simpler and aligns with when money actually arrives. But because practices carry large receivables waiting on payers, accrual often shows a truer picture of what the practice has earned and is owed. The right answer depends on your size and how your CPA files, and the two aren&rsquo;t mutually exclusive in management reporting. We keep the books so your CPA can report on the basis that fits and so you can see receivables either way &mdash; your CPA confirms the basis for your tax filing." },
    { q: "Can you reconcile insurance payments to my billing or EHR system?", a: "Yes &mdash; it&rsquo;s the heart of medical-practice bookkeeping. We reconcile payer and patient deposits against your practice-management or billing system, separating the contractual adjustment (the difference between billed and contracted rates) from true revenue and from denials. Done right, your books show what you actually earned and collected, your collection rate by payer becomes visible, and you can spot payers who consistently underpay or delay. We work alongside systems like athenahealth, DrChrono, Kareo/Tebra, and others that export deposits and adjustments." },
    { q: "Do you handle payroll for physicians and clinical staff?", a: "Yes. We handle payroll for physicians, nurse practitioners, physician assistants, and administrative staff, integrated into the same QuickBooks file as your bookkeeping. New York enforces worker classification closely, so we keep employee versus contractor treatment clean &mdash; which matters for practices that use per-diem providers or independent contractors alongside W-2 staff. Payroll is scoped alongside the core bookkeeping engagement." },
    { q: "Can you show profitability by provider or location?", a: "Yes. For group practices and multi-location providers, we configure QuickBooks classes and tags so you can pull profitability by provider, location, or service line rather than only a blended practice total. That&rsquo;s what lets you see which providers or sites are carrying the practice, where overhead is concentrated, and how compensation should track contribution &mdash; the visibility that supports both day-to-day decisions and partner or associate compensation discussions." },
    { q: "How much does medical practice bookkeeping cost in New York?", a: "Monthly bookkeeping for a New York medical practice runs $400&ndash;$2,500+ per month, fixed-fee against a written scope. Pricing is set by visit and transaction volume, the number of providers, payer complexity, and whether you need provider- or location-level reporting &mdash; a solo practitioner is at the lower end; a multi-provider group with complex payer mix higher. We quote a firm number after reviewing your books." },
    { q: "How do we get started?", a: "Book a free discovery call. We review your QuickBooks file and billing system remotely, map your payer mix and entity structure, determine whether you need a cleanup first or can go straight to monthly service, and send a written fixed-fee proposal within 3 business days. Your named Certified ProAdvisor begins as soon as you approve. We do the books; your CPA files and confirms your accounting basis and entity matters." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/industries/healthcare/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York medical practice accounting","description":"Medical practice accounting for New York providers — payer/insurance reconciliation, aged A/R, PC/PLLC entity-fit books, practice payroll. From $400/mo. Call (877) 751-5575.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-industries-healthcare.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-ind-healthcare-summary","#ny-ind-healthcare-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/new-york/industries/"},
          {"@type":"ListItem","position":5,"name":"Healthcare"}]},
        {"@type":"Service","@id":url+"#service","name":"New York Medical Practice Accounting Service","serviceType":"Medical practice bookkeeping and payer reconciliation","description":"Bookkeeping and QuickBooks accounting for New York medical practices — payer/insurance reconciliation, aged accounts receivable by payer, PC/PLLC entity-fit books, and provider payroll, delivered by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not set up professional entities, give legal advice, or file NY State or NYC tax returns — coordinates with the client's attorney and CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York medical practices, clinics, physician groups, and healthcare providers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

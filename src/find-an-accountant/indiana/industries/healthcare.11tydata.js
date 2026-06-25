/* /find-an-accountant/indiana/industries/healthcare/ — t-money INDUSTRY child. Content arrays +
 * eleventyComputed pageGraph (WebPage reviewedBy #david-westgate, BreadcrumbList, Service [provider
 * #organization · areaServed State Indiana · audience BusinessAudience], FAQPage).
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md ONLY. Healthcare angle: physician/dental/specialty
 * practices and clinics (IU Health, Parkview, Deaconess ecosystems) — insurance-payer reconciliation,
 * billed-vs-collected, HIPAA-aware data handling, multi-provider payroll with county LIT withholding,
 * and practice-entity structure. County LIT qualitative only.
 *
 * HONESTY (R5): NO street address (areaServed-only). TechBrot keeps the books; does NOT file Indiana
 * returns or the county LIT/sales-tax returns as agent — coordinates with the client's CPA. HIPAA-aware
 * = TechBrot follows confidentiality/data-handling discipline; it is not a covered entity and the
 * practice owns its HIPAA compliance. No invented reviews/stats/clients/outcomes; no AggregateRating.
 * No founder name; David Westgate only as reviewedBy #david-westgate. Independent firm; not Intuit. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Indiana healthcare accounting, plainly.",
  summary: [
    "Medical practices collect far less than they bill, and the gap is the whole story. Real healthcare accounting needs <strong>insurance-payer reconciliation</strong> &mdash; tracking <strong>billed vs. collected</strong> by payer and adjusting for contractual write-offs &mdash; <strong>per-provider</strong> books so each physician&rsquo;s production and collections are visible, <strong>HIPAA-aware</strong> data handling, and a clean <strong>practice-entity structure</strong>. A practice that reads its books like a cash retailer&rsquo;s never sees the leakage between charges, allowed amounts, and what actually lands in the bank.",
    "Indiana&rsquo;s context is a deep provider economy &mdash; the <strong>IU Health</strong>, <strong>Parkview</strong>, and <strong>Deaconess</strong> ecosystems anchor physician, dental, and specialty practices statewide. Indiana&rsquo;s tax layer is mostly clean (a flat 2.95% income tax, a single 7% sales tax with no local add-ons), but the genuine wrinkle is payroll: <strong>multi-provider and staff payroll</strong> carries the <strong>county local income tax (LIT)</strong> of each person&rsquo;s county of residence, set January 1 and withheld through Form WH-4 &mdash; which matters when providers and staff commute across county lines.",
    "<strong>TechBrot</strong> sets up payer reconciliation, per-provider tracking, and county-LIT-ready payroll in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly with confidentiality discipline, and turns it into a clear billed-vs-collected picture. We deliver the books; your CPA files. HIPAA-aware means we follow strict data-handling and confidentiality practices; your practice remains the covered entity responsible for its own HIPAA compliance. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Indiana returns. Confirm county-LIT detail with the <a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>.",
  ],
  secAiH: "Indiana healthcare accounting, in five questions.",
  aiSummary: [
    { q: "Why is Indiana healthcare accounting different?", a: "Practices <strong>collect far less than they bill</strong> &mdash; so the books turn on payer reconciliation, billed-vs-collected by payer, and contractual write-offs, with HIPAA-aware handling. Indiana adds <strong>multi-provider payroll with county-LIT withholding</strong> across the IU Health, Parkview, and Deaconess ecosystems that standard bookkeeping misses." },
    { q: "Do you reconcile insurance payers?", a: "Yes &mdash; we track <strong>billed vs. collected by payer</strong>, post contractual adjustments and write-offs, and reconcile deposits to the practice-management system, so you see real collections and where revenue leaks between charge and payment." },
    { q: "Can you produce per-provider numbers?", a: "Yes &mdash; <strong>production and collections tracked per provider</strong>, so compensation, productivity, and partner economics sit on real numbers rather than a blended practice total." },
    { q: "How do you handle multi-provider payroll and county tax?", a: "We run <strong>multi-provider and staff payroll with the correct county local income tax (LIT)</strong> for each person&rsquo;s county of residence (set January 1, via Form WH-4) &mdash; important when providers and staff commute across counties &mdash; with full payroll through our global service." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by providers, payers, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750. No hourly billing. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],
  secChallengesH: "Three places Indiana practices lose the numbers.",
  secChallengesLede: "Busy practices leak revenue when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Collections are a mystery", title: "No payer reconciliation.", body: "Charges, allowed amounts, and deposits never tie together, so you can&rsquo;t see how much of what you billed actually arrived or which payer is slow or underpaying. The fix is insurance-payer reconciliation &mdash; billed vs. collected by payer with contractual write-offs posted &mdash; so real collections, not gross charges, drive the books and you spot leakage early." },
    { signal: "Provider economics blur", title: "No per-provider tracking.", body: "When every provider&rsquo;s production and collections fold into one practice total, compensation and partner decisions get made on blended numbers that hide who actually drives revenue. The fix is per-provider tracking of production and collections, so comp formulas, productivity, and partner economics rest on real figures." },
    { signal: "Payroll &amp; data risk", title: "County-LIT &amp; handling gaps.", body: "Providers and staff commuting across counties each carry a different county-LIT rate, and patient-adjacent financial data demands careful handling. Map the county codes wrong and payroll won&rsquo;t reconcile; handle data loosely and you create risk. The fix is county-LIT codes mapped per person and strict, HIPAA-aware data-handling discipline on every file we touch." },
  ],
  secHandleH: "Indiana healthcare accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your providers and payers, delivered in your own QuickBooks file by a named Certified ProAdvisor with confidentiality discipline.",
  handle: [
    { num: "01 &middot; Payer recon", title: "Insurance-payer reconciliation", body: "Billed vs. collected tracked by payer, contractual adjustments and write-offs posted, and deposits reconciled to the practice-management system &mdash; so collections are real.", href: "/find-an-accountant/indiana/quickbooks-setup/", cta: "Indiana QuickBooks setup &rarr;" },
    { num: "02 &middot; Per-provider", title: "Per-provider books &amp; monthly close", body: "Production and collections tracked per provider, with a monthly close and statements your partners and lender can read.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "03 &middot; HIPAA-aware", title: "HIPAA-aware bookkeeping", body: "Strict data-handling and confidentiality discipline on every file &mdash; your practice remains the covered entity; we keep financial records clean and access controlled.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
    { num: "04 &middot; County LIT", title: "Multi-provider payroll &amp; county LIT", body: "Provider and staff payroll mapped to each person&rsquo;s county-of-residence LIT rate via Form WH-4, from the current DOR list, so payroll reconciles across commuters.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "05 &middot; Payroll", title: "Provider payroll runs", body: "Full multi-provider and staff payroll handled through our global payroll service, with compensation and benefits coded cleanly to the books.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06 &middot; Cleanup", title: "Practice cleanup", body: "Rebuild payer reconciliation and per-provider tracking from messy books, fix write-off and entity coding, and reconcile to a CPA-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how your practice runs.",
  integrations: [
    "QuickBooks Online &amp; Desktop &mdash; the ledger of record",
    "Athenahealth / Kareo (Tebra) &mdash; practice-management deposits reconciled to QuickBooks",
    "DrChrono / SimplePractice &mdash; billing and collections to the books",
    "Dentrix / Open Dental &mdash; dental practice-management reconciliation",
    "Clearinghouse remittance (ERA/835) reconciled to payer deposits",
    "QuickBooks Time / Gusto / ADP &mdash; multi-provider payroll with county-LIT codes",
    "Strict, HIPAA-aware data-handling and access controls on every file",
  ],
  integrationsNote: "Running a different EHR or practice-management system? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From gross charges to real collections.",
  secProcessLede: "Every Indiana healthcare engagement follows the same four-phase rhythm &mdash; books accurate first, collections visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your providers, payers, practice-management system, how you pay providers, and your county-LIT and data-handling picture. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure payer reconciliation and per-provider tracking, plus a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> to fix write-off and entity coding where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; reconciliation", body: "Monthly reconciliation with billed-vs-collected by payer, per-provider reporting, write-off posting, and county-LIT payroll cadence." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Collections and per-provider reporting and, as you grow, <a href=\"/accounting/advisory/fractional-cfo/\">compensation, overhead, and cash-flow advisory</a> alongside your CPA." },
  ],
  secAdvisoryH: "Accurate collections are the start. A healthy practice is the point.",
  advisoryBody: [
    "Once collections are real and per-provider numbers are clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what do they tell us?&rdquo; Which payers underpay or pay late, whether a provider&rsquo;s comp formula still fits, where overhead is creeping, when adding a provider or location pencils out &mdash; the decisions that keep an Indiana practice financially healthy as it grows.",
    "That&rsquo;s where healthcare advisory comes in: a Certified ProAdvisor who knows your collections and per-provider data turning it into compensation, overhead, and cash-flow strategy alongside your CPA. As automation handles routine entry, this judgment layer is where practices find their footing. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Indiana healthcare engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm serving Indiana physician, dental, and specialty practices remotely across all 92 counties, and reviewed for technical accuracy on insurance-payer reconciliation, billed-vs-collected tracking, per-provider books, HIPAA-aware data handling, and county LIT (<a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>). TechBrot keeps the books CPA-ready with strict confidentiality discipline and coordinates with your CPA, who files; the practice remains the covered entity for HIPAA, and TechBrot does not file Indiana returns as agent.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Payer reconciliation, billed-vs-collected, per-provider books, HIPAA-aware handling, county-LIT payroll &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file with access controls" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Practice owns HIPAA compliance &middot; Does not file Indiana returns" },
  ],
  related: [
    { title: "Indiana County Income Tax Help", body: "Multi-provider payroll mapped so each person&rsquo;s county rate applies and payroll reconciles across commuters.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { title: "Indiana Bookkeeping Cleanup", body: "Rebuild payer reconciliation and per-provider tracking, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Healthcare accounting (national overview)", body: "How TechBrot builds books for practices and clinics nationally &mdash; scoped for Indiana on the call.", href: "/accounting/industries/healthcare/", cta: "National overview &rarr;" },
    { title: "All Indiana industries", body: "See how TechBrot tailors accounting to the way your industry runs in Indiana.", href: "/find-an-accountant/indiana/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is healthcare accounting different in Indiana?", a: "Medical practices collect far less than they bill, so the books turn on insurance-payer reconciliation &mdash; billed vs. collected by payer with contractual write-offs &mdash; plus per-provider tracking and HIPAA-aware handling that standard bookkeeping doesn&rsquo;t do. Indiana adds its own wrinkle: multi-provider and staff payroll carries the county local income tax for each person&rsquo;s county of residence, which matters across the IU Health, Parkview, and Deaconess ecosystems where providers commute. We build all of that into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Do you reconcile insurance payers for Indiana practices?", a: "Yes. We track billed vs. collected by payer, post contractual adjustments and write-offs, and reconcile deposits to your practice-management system and clearinghouse remittances (ERA/835). That gives you real collections instead of gross charges and shows where revenue leaks between the charge, the allowed amount, and what lands in the bank &mdash; including which payers underpay or pay slowly." },
    { q: "Can you produce per-provider numbers?", a: "Yes. We track production and collections per provider so compensation formulas, productivity, and partner economics rest on real figures rather than a blended practice total. For group practices and multi-specialty clinics, that&rsquo;s what makes comp decisions defensible and shows who actually drives revenue." },
    { q: "How do you handle multi-provider payroll and county income tax?", a: "We run multi-provider and staff payroll with the correct county local income tax (LIT) withheld for each person&rsquo;s county of residence on January 1 via Form WH-4 &mdash; the same rate for residents and nonresidents. Because providers and staff often commute across county lines, we map each person&rsquo;s county code and apply the current rate from the Indiana DOR list so payroll reconciles. Full payroll runs through our global payroll service; your CPA files income taxes." },
    { q: "Are you HIPAA compliant?", a: "We follow strict, HIPAA-aware data-handling and confidentiality discipline on every file &mdash; access controls, secure document exchange, and minimum-necessary handling of any patient-adjacent financial data. To be precise: your practice remains the covered entity responsible for its own HIPAA compliance, and we work as your bookkeeping partner under that discipline. We keep the financial records clean and controlled; we don&rsquo;t touch clinical records." },
    { q: "Our practice books are a mess. Where do we start in Indiana?", a: "With a cleanup. We rebuild payer reconciliation and per-provider tracking, fix write-off and entity coding, reconcile deposits to the practice-management system, and reconcile to a CPA-ready baseline &mdash; then move into a monthly close with billed-vs-collected reporting. Prefer to talk first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/healthcare/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Healthcare Accounting","description":"Healthcare accounting for Indiana physician, dental, and specialty practices — insurance-payer reconciliation, billed-vs-collected tracking, per-provider books, HIPAA-aware data handling, and multi-provider payroll with county-LIT withholding, set up in QuickBooks by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-healthcare-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-ind-healthcare-summary","#in-ind-healthcare-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/indiana/industries/"},
          {"@type":"ListItem","position":5,"name":"Healthcare"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Healthcare Accounting","serviceType":"Medical practice bookkeeping and payer reconciliation","description":"Insurance-payer reconciliation, billed-vs-collected tracking, per-provider books, HIPAA-aware data handling, and multi-provider county-LIT payroll for Indiana physician, dental, and specialty practices, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; the practice owns its HIPAA compliance; does not file Indiana returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana physician, dental, and specialty practices and clinics in the IU Health, Parkview, and Deaconess ecosystems"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

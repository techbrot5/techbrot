/* /find-an-accountant/indiana/industries/manufacturing/ — t-money INDUSTRY child. Content
 * arrays + eleventyComputed pageGraph (WebPage reviewedBy #david-westgate, BreadcrumbList,
 * Service [provider #organization · areaServed State Indiana · audience BusinessAudience],
 * FAQPage). FAQPage from the same `faq` array. Mirrors the NY/DE industry children, re-flowed
 * onto the t-money spine.
 *
 * SOURCE OF IN FIGURES: _build/strategy/IN-FACTS.md ONLY. Manufacturing angle: Indiana is the
 * most manufacturing-intensive state in the U.S. by share of GDP (autos & parts, RVs/Elkhart,
 * steel/NW Indiana, pharma/Lilly, machinery). Job costing, standard-vs-actual cost, inventory/WIP,
 * multi-plant, R&D-credit coordination, and the business-personal-property posture ($2M exemption
 * for 2026, declared on Form 102/103). County LIT qualitative only — never a specific %.
 *
 * HONESTY (R5): NO street address (areaServed-only). TechBrot keeps the books; does NOT file
 * Indiana returns, the county LIT/sales-tax/business-personal-property returns as agent — keeps the
 * books CPA/assessor-ready and coordinates with the client's CPA. No invented reviews/stats/clients/
 * outcomes; no AggregateRating. No founder name; David Westgate only as reviewedBy #david-westgate.
 * Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Indiana manufacturing accounting, plainly.",
  summary: [
    "Indiana is the <strong>most manufacturing-intensive state in the country by share of GDP</strong> &mdash; autos and auto parts, the RV cluster around Elkhart, Northwest Indiana steel, Eli Lilly and pharma, and machinery. Manufacturing books don&rsquo;t run on periods; they run on <strong>cost</strong>. Real manufacturing accounting needs <strong>job and work-order costing</strong> (material, labor, machine time, and overhead applied to each run), <strong>standard-vs-actual costing</strong> with variance analysis, and <strong>inventory and WIP</strong> tracked across raw, work-in-process, and finished goods &mdash; often across multiple plants.",
    "Indiana&rsquo;s tax layer is mostly clean &mdash; a flat <strong>2.95%</strong> income tax (2026) and a single <strong>7%</strong> sales tax with no local add-ons &mdash; but two things are genuinely Indiana. First, the <strong>business tangible personal property tax exemption jumped to $2,000,000 for 2026</strong> (up from $80,000): if your total business personal property in a county costs under $2M on the assessment date it is exempt &mdash; but the exemption still has to be <strong>declared on Form 102 or 103</strong>, and the PPOP-IN online portal was discontinued for 2026. Second, every plant&rsquo;s payroll carries the <strong>county local income tax (LIT)</strong> of each employee&rsquo;s county of residence, set on January 1 and withheld through Form WH-4.",
    "<strong>TechBrot</strong> sets up job and standard costing, inventory/WIP, and the asset detail behind the $2M exemption in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and turns it into per-job and per-line profit you can act on. We track the asset detail and prepare or coordinate the Form 102/103 filing posture &mdash; we keep the books CPA- and assessor-ready; we do not file the county return as agent. We deliver the books; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc. Confirm personal-property detail with the <a href=\"https://www.in.gov/dlgf/assessments/personal-property/\" rel=\"noopener nofollow\">Indiana DLGF</a>.",
  ],
  secAiH: "Indiana manufacturing accounting, in five questions.",
  aiSummary: [
    { q: "Why is Indiana manufacturing accounting different?", a: "It runs on <strong>cost, not periods</strong> &mdash; job and work-order costing, standard-vs-actual variances, and inventory/WIP across raw, WIP, and finished goods, often multi-plant. Indiana adds the <strong>$2M business-personal-property exemption</strong> (declared on Form 102/103) and the <strong>county LIT</strong> on every plant&rsquo;s payroll." },
    { q: "Do you set up job and standard costing in QuickBooks?", a: "Yes &mdash; material, labor, machine time, and overhead applied to each <strong>job or work order</strong>, with standard costs and variance analysis, so you see which products and runs actually make money. Common for Indiana auto-parts, RV, machinery, and pharma manufacturers." },
    { q: "What changed with Indiana business personal property tax?", a: "The exemption threshold rose to <strong>$2,000,000 for 2026</strong> (from $80,000). If your business personal property in a county costs under $2M on the assessment date it&rsquo;s exempt &mdash; but you still <strong>declare it on Form 102 or 103</strong>. We keep the asset detail clean and assessor-ready; we don&rsquo;t file the county return as agent." },
    { q: "Can you handle inventory and WIP valuation?", a: "Yes &mdash; <strong>raw materials, work-in-process, and finished goods</strong> tracked and valued, with WIP reflecting applied labor and overhead, so your balance sheet and margins are real rather than a year-end estimate." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by plants, SKUs, and reporting needs. Monthly bookkeeping starts at <strong>$400/mo</strong>; setup from $750. No hourly billing. See <a href=\"/find-an-accountant/indiana/pricing/\">Indiana pricing</a>." },
  ],
  secChallengesH: "Three places Indiana manufacturers lose the numbers.",
  secChallengesLede: "Profitable-looking plants erode margin when these go unmanaged. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Product profit is invisible", title: "No real job or standard costing.", body: "Material, labor, machine time, and overhead land in company-wide buckets instead of on jobs or work orders. You know the plant was profitable this year &mdash; you don&rsquo;t know <em>which</em> products or runs made it and which bled. The fix is job/work-order costing with standard-vs-actual variances, so every line shows true cost and you can price and quote from real margin." },
    { signal: "Inventory drifts", title: "Inventory &amp; WIP off the books.", body: "Without proper raw, WIP, and finished-goods tracking, the balance sheet is a guess and margins swing at year-end when the count finally happens. WIP that ignores applied labor and overhead understates real cost. The fix is perpetual inventory and WIP valuation maintained monthly, so cost of goods and gross margin reflect reality before it bites." },
    { signal: "Indiana filings slip", title: "Personal-property &amp; LIT gaps.", body: "The $2M business-personal-property exemption still has to be declared on Form 102/103, and the PPOP-IN portal is gone for 2026 &mdash; miss it and you forfeit the exemption posture. Multi-plant payroll has to map each employee&rsquo;s county-of-residence LIT. The fix is clean asset detail kept assessor-ready and county-LIT codes mapped per employee so payroll and filings reconcile." },
  ],
  secHandleH: "Indiana manufacturing accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to your plants and product lines, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Job costing", title: "Job &amp; work-order costing", body: "Material, labor, machine time, and overhead applied to each job or work order &mdash; real per-product profitability you can quote and price from.", href: "/find-an-accountant/indiana/quickbooks-setup/", cta: "Indiana QuickBooks setup &rarr;" },
    { num: "02 &middot; Standard cost", title: "Standard vs. actual &amp; variances", body: "Standard costs set and actuals tracked against them, with material, labor, and overhead variance analysis so cost creep shows up early, not at year-end.", href: "/find-an-accountant/indiana/monthly-bookkeeping/", cta: "Indiana monthly bookkeeping &rarr;" },
    { num: "03 &middot; Inventory &amp; PP", title: "Inventory, WIP &amp; asset detail", body: "Raw, WIP, and finished-goods valuation maintained monthly, plus the fixed-asset detail behind the $2M business-personal-property exemption kept assessor-ready for Form 102/103.", href: "/find-an-accountant/indiana/bookkeeping-services/", cta: "Indiana bookkeeping &rarr;" },
    { num: "04 &middot; County LIT", title: "Multi-plant payroll &amp; county LIT", body: "Each plant&rsquo;s payroll mapped to every employee&rsquo;s county-of-residence LIT rate from the current DOR list, withheld via Form WH-4, so payroll and the county return reconcile.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { num: "05 &middot; Payroll-ready", title: "Payroll-ready books", body: "Plant labor coded to jobs and payroll-ready books maintained, with full payroll handled through our global payroll service where you need it.", href: "/quickbooks/payroll/", cta: "Payroll &rarr;" },
    { num: "06 &middot; Cleanup", title: "Cost-system cleanup", body: "Rebuild job and standard costing from messy books, reclassify costs and reconcile inventory and WIP, fix asset detail, and reconcile to a known-good baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Indiana cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you build.",
  integrations: [
    "QuickBooks Enterprise &mdash; Manufacturing &amp; Wholesale edition, common on Indiana plants",
    "Fishbowl &mdash; inventory and manufacturing synced to QuickBooks",
    "Katana / MRPeasy &mdash; shop-floor and BOM data reconciled to the ledger",
    "Cin7 / Acctivate &mdash; multi-location inventory valuation",
    "QuickBooks Time &mdash; plant labor to job costing",
    "Gusto / ADP &mdash; multi-plant payroll with county-LIT codes",
    "Fixed-asset detail kept Form 102/103-ready ($2M exemption posture)",
    "R&amp;D credit documentation coordinated with your CPA",
  ],
  integrationsNote: "Running a different ERP or MRP? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=indiana&amp;state=indiana&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From cost guesswork to per-line profit.",
  secProcessLede: "Every Indiana manufacturing engagement follows the same four-phase rhythm &mdash; books accurate first, cost visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map your plants, product lines, how you cost, your inventory and WIP picture, and your personal-property and county-LIT situation. No pitch." },
    { phase: "Phase 2", title: "Cost setup &amp; cleanup", body: "Configure job/work-order and standard costing and inventory, plus a <a href=\"/find-an-accountant/indiana/cleanup-bookkeeping/\">cleanup</a> to reclassify past costs and rebuild the asset detail where needed." },
    { phase: "Phase 3", title: "Monthly close &amp; variances", body: "Monthly reconciliation with job-cost and variance reporting, inventory and WIP valuation, and county-LIT payroll cadence across plants." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Per-line profitability reporting and, as you scale, <a href=\"/accounting/advisory/fractional-cfo/\">margin, capacity, and cash-flow advisory</a>." },
  ],
  secAdvisoryH: "Accurate cost is the start. Protecting margin is the point.",
  advisoryBody: [
    "Once every product line shows real cost and your inventory and WIP are clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;where is margin leaking, and what do we do about it?&rdquo; Which lines carry margin, when a price increase is overdue, how capacity and overhead absorb across plants, whether a capital purchase changes the personal-property posture &mdash; the decisions that separate Indiana manufacturers who scale from those who stall.",
    "That&rsquo;s where manufacturing advisory comes in: a Certified ProAdvisor who knows your cost data turning it into pricing strategy, margin protection, and cash-flow forecasting. As automation handles routine entry, this judgment layer is where manufacturers find their edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Indiana manufacturing engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm serving Indiana&rsquo;s manufacturers remotely across all 92 counties, and reviewed for technical accuracy on job and standard costing, inventory and WIP, the $2M business-personal-property exemption (<a href=\"https://www.in.gov/dlgf/assessments/personal-property/\" rel=\"noopener nofollow\">Indiana DLGF</a>), and county LIT (<a href=\"https://www.in.gov/dor/\" rel=\"noopener nofollow\">Indiana DOR</a>). TechBrot keeps the books CPA- and assessor-ready and coordinates with your CPA, who files; it does not file the county personal-property, LIT, or sales-tax returns as agent.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Job &amp; standard costing, inventory/WIP, personal-property asset detail, county-LIT payroll &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc. &middot; Does not file Indiana returns" },
  ],
  related: [
    { title: "Indiana County Income Tax Help", body: "The 92-county LIT withholding matrix set up so the right county rate applies per employee and multi-plant payroll reconciles.", href: "/find-an-accountant/indiana/county-income-tax-help/", cta: "County income tax help &rarr;" },
    { title: "Indiana Bookkeeping Cleanup", body: "Rebuild job and standard costing and reconcile inventory and WIP, then reconcile to a CPA-ready baseline.", href: "/find-an-accountant/indiana/cleanup-bookkeeping/", cta: "Explore cleanup &rarr;" },
    { title: "Manufacturing accounting (national overview)", body: "How TechBrot builds books for manufacturers nationally &mdash; scoped for Indiana on the call.", href: "/accounting/industries/manufacturing/", cta: "National overview &rarr;" },
    { title: "All Indiana industries", body: "See how TechBrot tailors accounting to the way your industry runs in Indiana.", href: "/find-an-accountant/indiana/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is manufacturing accounting different in Indiana?", a: "Manufacturing runs on cost, not periods &mdash; material, labor, machine time, and overhead track to each job or work order, with standard-vs-actual variances and inventory across raw, WIP, and finished goods that standard bookkeeping can&rsquo;t handle. Indiana, the most manufacturing-intensive state in the country, adds its own layer: the business-personal-property exemption that rose to $2,000,000 for 2026 (still declared on Form 102/103) and a county local income tax on every plant&rsquo;s payroll. We build job and standard costing, inventory/WIP, and the asset detail into your QuickBooks file so the numbers are real and CPA-ready." },
    { q: "Do you set up job and standard costing in QuickBooks for Indiana plants?", a: "Yes. We configure costing so material, labor, machine time, and overhead apply to each job or work order, set standard costs, and track variances &mdash; giving you real per-product profitability instead of a company-wide average. For Indiana auto-parts, RV, machinery, and pharma manufacturers, that&rsquo;s what lets you quote and price from real margin and catch cost creep before it erodes the line." },
    { q: "How does the $2 million business personal property exemption work?", a: "For 2026 the exemption threshold rose to $2,000,000 (from $80,000): if your total business personal property in a county costs under $2M on the assessment date, it is exempt from taxation in that county &mdash; but you still have to declare it on Form 102 or 103, and the PPOP-IN online portal was discontinued for 2026. We keep the fixed-asset detail clean and assessor-ready and prepare or coordinate the Form 102/103 posture; we do not file the county return as agent. Confirm specifics with the Indiana DLGF." },
    { q: "Can you handle inventory and WIP valuation across multiple plants?", a: "Yes. We maintain perpetual inventory across raw materials, work-in-process, and finished goods, with WIP reflecting applied labor and overhead, and consolidate across plants where you run more than one. That keeps your balance sheet, cost of goods, and gross margin accurate month to month instead of swinging when the year-end count finally happens." },
    { q: "How do you handle payroll and county income tax for multiple plants?", a: "Indiana&rsquo;s county local income tax (LIT) is set by each employee&rsquo;s county of residence on January 1 and withheld through Form WH-4 &mdash; the same rate for residents and nonresidents. For a multi-plant manufacturer with staff living across several counties, we map each person&rsquo;s county code and apply the current rate from the Indiana DOR list, so payroll reconciles to the county return. Full payroll runs through our global payroll service; your CPA files income taxes." },
    { q: "My cost system is a mess. Where do we start in Indiana?", a: "With a cleanup. We reclassify past costs to the correct jobs and cost categories, rebuild job and standard costing, reconcile inventory and WIP, fix the fixed-asset detail behind the personal-property exemption, and reconcile to a known-good baseline &mdash; then transition into accurate monthly bookkeeping with variance and inventory reporting. Prefer to talk first? Call <a href=\"tel:+18777515575\">(877) 751-5575</a> and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/indiana/industries/manufacturing/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Indiana Manufacturing Accounting","description":"Manufacturing accounting for Indiana plants — job and work-order costing, standard-vs-actual variances, inventory and WIP, the $2M business-personal-property exemption posture, and multi-plant county-LIT payroll, set up in QuickBooks by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/indiana-manufacturing-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#in-ind-manufacturing-summary","#in-ind-manufacturing-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-26"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Indiana","item":"https://techbrot.com/find-an-accountant/indiana/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/indiana/industries/"},
          {"@type":"ListItem","position":5,"name":"Manufacturing"}]},
        {"@type":"Service","@id":url+"#service","name":"Indiana Manufacturing Accounting","serviceType":"Manufacturing bookkeeping, job and standard costing","description":"Job and work-order costing, standard-vs-actual variances, inventory and WIP valuation, the $2M business-personal-property posture, and multi-plant county-LIT payroll for Indiana manufacturers, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Indiana returns or the county personal-property/LIT returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Indiana","sameAs":"https://en.wikipedia.org/wiki/Indiana"},
          "audience":{"@type":"BusinessAudience","audienceType":"Indiana manufacturers — automotive and auto-parts makers, RV builders, steel producers, pharmaceutical and machinery manufacturers"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

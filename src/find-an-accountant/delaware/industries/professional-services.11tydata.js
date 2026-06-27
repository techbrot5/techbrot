/* /find-an-accountant/delaware/industries/professional-services/ — t-location INDUSTRY
 * child. Mirrors NY industries/construction.11tydata.js. Content arrays + eleventyComputed
 * pageGraph (WebPage, BreadcrumbList, Service, FAQPage). FAQPage from the same `faq` array.
 *
 * SOURCE OF DE FIGURES: _build/strategy/DE-FACTS.md ONLY. Gross receipts tax 0.0945%–1.9914%
 * BY ACTIVITY on the seller (after a monthly/quarterly exclusion). Wilmington: 1.25% net-profits
 * tax on sole-prop/partnership net profit within city limits, plus 1.25% wage tax on residents
 * and non-residents who work in the city. Only Wilmington has this. No figure invented.
 *
 * HONESTY (R5): TechBrot delivers the books; does NOT file Delaware returns — coordinates with
 * the client's CPA. No invented reviews/stats/clients. No founder name; David Westgate only as
 * reviewedBy #david-westgate. Independent firm; not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&times;/g,"×").replace(/\s+/g," ").trim();}

module.exports = {
  secSummaryH: "Delaware professional services accounting, plainly.",
  summary: [
    "Agencies, consultancies, law and design firms, and independent professionals don&rsquo;t sell units &mdash; they sell <strong>time and expertise</strong>. The numbers that run the business are <strong>profit by client and project</strong>, <strong>utilization and realization</strong>, and <strong>clean owner compensation</strong>. Real professional-services accounting tracks revenue and direct cost to each engagement, separates owner draws and guaranteed payments from true expenses, and surfaces which clients actually pay for themselves once delivery cost is counted.",
    "Delaware&rsquo;s tax layer is specific. There is <strong>no sales tax</strong>, but the state levies a <strong>gross receipts tax on the firm</strong> &mdash; 0.0945%&ndash;1.9914% depending on your business activity, on total receipts after a monthly or quarterly exclusion. Different professional activities can fall under different gross-receipts classifications, so QuickBooks has to track receipts by activity. If your firm operates inside <strong>Wilmington</strong>, the city adds a <strong>1.25% net-profits tax</strong> on sole-proprietor and partnership net profit earned in the city, plus a <strong>1.25% wage tax</strong> on residents and on non-residents who work there &mdash; a layer Dover, Newark, and Middletown firms don&rsquo;t face.",
    "<strong>TechBrot</strong> sets up project and client profitability, clean owner-comp, gross-receipts tracking by activity, and Wilmington net-profits-tax handling in your own <a href=\"/quickbooks/online/\">QuickBooks</a> file, keeps it accurate monthly, and hands CPA-ready numbers to your accountant, who files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file Delaware returns.",
  ],
  secAiH: "Delaware professional services accounting, in five questions.",
  aiSummary: [
    { q: "Why is professional-services accounting different in Delaware?", a: "Service firms run on <strong>project and client profitability and owner compensation</strong>, not units. Delaware adds a <strong>gross receipts tax by business activity</strong> and, inside Wilmington, a <strong>1.25% net-profits tax</strong> &mdash; so the books have to track profit by engagement and receipts by activity." },
    { q: "Does my Delaware firm owe gross receipts tax?", a: "Yes, on your total receipts as the firm &mdash; 0.0945%&ndash;1.9914% by activity, after a monthly or quarterly exclusion. There&rsquo;s no sales tax to collect from clients, but the gross receipts tax applies. We track receipts by activity in QuickBooks so the right rate and exclusion apply." },
    { q: "What is the Wilmington net-profits tax?", a: "A <strong>1.25% tax on the net profit of sole proprietors and partnerships operating within Wilmington city limits</strong>, plus a 1.25% wage tax on residents and non-residents working in the city. Only Wilmington levies it. If your firm operates there, we account for it in QuickBooks; your CPA files." },
    { q: "Do you handle owner compensation correctly?", a: "Yes &mdash; <strong>owner draws, guaranteed payments, and reasonable salary kept distinct from true business expense</strong>, so your profit is real and your CPA has clean data for the entity&rsquo;s tax treatment. Getting this wrong distorts both profit and tax." },
    { q: "What does it cost?", a: "A <strong>fixed monthly fee against a written scope</strong> &mdash; driven by transaction volume, billing model, and entity complexity. Monthly bookkeeping starts at <strong>$400/mo</strong>. No hourly billing. See <a href=\"/find-an-accountant/delaware/pricing/\">Delaware pricing</a>." },
  ],
  secChallengesH: "Three places Delaware service-firm books break.",
  secChallengesLede: "Busy firms look profitable until you ask which client paid for itself. Knowing which one you&rsquo;re in tells us where to start.",
  challenges: [
    { signal: "Client profit is invisible", title: "No project or client profitability.", body: "Revenue and cost land in company-wide buckets, so you know the firm made money but not which clients or projects carried it &mdash; and you keep saying yes to work that loses money. The fix is tracking revenue and direct delivery cost to each client and project, so realization and margin are visible. If you can&rsquo;t pull profit on your biggest client in under a minute, this is your starting point." },
    { signal: "Owner comp is tangled", title: "Draws mixed with expenses.", body: "Owner draws, guaranteed payments, and personal spend run through the same accounts as real business expense, so profit is overstated or understated and your CPA can&rsquo;t see true performance. The fix is clean separation of owner compensation from operating cost &mdash; so the P&amp;L is real and the entity&rsquo;s tax treatment is straightforward." },
    { signal: "Delaware tax is missed", title: "Gross receipts &amp; Wilmington gaps.", body: "Firms assume &ldquo;no sales tax&rdquo; means nothing to track, then miss the gross receipts tax on the firm &mdash; or, inside Wilmington, the 1.25% net-profits tax. The fix is gross-receipts tracking by business activity in QuickBooks plus Wilmington net-profits-tax handling where it applies, so filings reconcile to the books and nothing is a surprise." },
  ],
  secHandleH: "Delaware professional services accounting, done by an expert.",
  secHandleLede: "Every engagement is scoped to how you bill and who owns the firm, delivered in your own QuickBooks file by a named Certified ProAdvisor.",
  handle: [
    { num: "01 &middot; Project profit", title: "Project &amp; client profitability", body: "Revenue and direct cost tracked to each client and project, so realization and margin are visible and you can fire the work that loses money.", href: "/find-an-accountant/delaware/quickbooks-setup/", cta: "Delaware QuickBooks setup &rarr;" },
    { num: "02 &middot; Owner comp", title: "Clean owner compensation", body: "Draws, guaranteed payments, and reasonable salary kept distinct from operating expense, so profit is real and your CPA has clean data.", href: "/find-an-accountant/delaware/monthly-bookkeeping/", cta: "Delaware monthly bookkeeping &rarr;" },
    { num: "03 &middot; Gross receipts", title: "Gross receipts by activity", body: "Receipts tracked by business-activity classification so the right Delaware gross-receipts rate and exclusion apply and the return reconciles.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Delaware gross receipts help &rarr;" },
    { num: "04 &middot; Wilmington", title: "Wilmington net-profits tax", body: "For firms operating in Wilmington, the 1.25% net-profits and wage tax accounted for in QuickBooks &mdash; so it&rsquo;s reserved and your CPA can file it.", href: "/find-an-accountant/delaware/cities/wilmington/", cta: "Wilmington accounting &rarr;" },
    { num: "05 &middot; Reporting", title: "Cash &amp; AR reporting", body: "Monthly reporting on profit, cash, and accounts receivable &mdash; so you can see slow-paying clients and manage cash through the project cycle.", href: "/find-an-accountant/delaware/bookkeeping-services/", cta: "Delaware bookkeeping &rarr;" },
    { num: "06 &middot; Cleanup", title: "Service-firm cleanup", body: "Reclassify owner comp, rebuild project tracking, fix gross-receipts coding, and reconcile to a CPA-ready baseline.", href: "/find-an-accountant/delaware/cleanup-bookkeeping/", cta: "Delaware cleanup &rarr;" },
  ],
  secIntegrationsTag: "Tools we work alongside",
  secIntegrationsH: "Connected to how you bill.",
  integrations: [
    "QuickBooks Online &mdash; projects, classes, and customer-level profitability",
    "Harvest / Toggl &mdash; time tracking reconciled to billing and cost",
    "Bill.com &mdash; AP and contractor payments coded to projects",
    "Stripe &mdash; client payments and processor fees matched to the bank",
    "Gusto &mdash; payroll and owner-comp handled cleanly",
    "Gross-receipts tracking by business activity (Division of Revenue)",
    "Wilmington net-profits-tax accounting where the firm operates in the city",
    "1099 contractor tracking for project-based teams",
  ],
  integrationsNote: "Using a practice-management or PSA tool not listed? If it exports to QuickBooks, we can work with it. <a href=\"/contact/?intent=delaware&amp;state=delaware&amp;source_type=industry&amp;funnel_stage=MOFU\">Ask on a discovery call</a>.",
  secProcessH: "From busy to provably profitable.",
  secProcessLede: "Every Delaware professional-services engagement follows the same four-phase rhythm &mdash; books accurate first, profit visibility second, advisory third.",
  process: [
    { phase: "Phase 1", title: "Discovery", body: "A 30-minute call to map how you bill, your owner-comp setup, your entity, and your Delaware and Wilmington tax picture. No pitch." },
    { phase: "Phase 2", title: "Setup &amp; cleanup", body: "Configure project and client profitability and clean owner comp, plus a <a href=\"/find-an-accountant/delaware/cleanup-bookkeeping/\">cleanup</a> to reclassify and fix gross-receipts coding where needed." },
    { phase: "Phase 3", title: "Monthly close", body: "Monthly reconciliation with project-profitability reporting, AR tracking, gross-receipts cadence, and Wilmington net-profits-tax handling where it applies." },
    { phase: "Phase 4", title: "Reporting &amp; advisory", body: "Profit-by-client reporting and, as you grow, <a href=\"/accounting/advisory/fractional-cfo/\">pricing and cash-flow advisory</a>." },
  ],
  secAdvisoryH: "Accurate books are the start. Knowing which client to keep is the point.",
  advisoryBody: [
    "Once profit by client and project is real and owner comp is clean, the question shifts from &ldquo;are the books right?&rdquo; to &ldquo;what should the firm do differently?&rdquo; Which clients to keep and which to fire, how to price the next engagement, when to hire, how cash flows across overlapping projects &mdash; the decisions that separate service firms that grow from those that just stay busy.",
    "That&rsquo;s where advisory comes in: a Certified ProAdvisor who knows your client-level data turning it into pricing, capacity, and cash-flow strategy. As automation handles routine entry, this judgment layer is the edge. <a href=\"/accounting/advisory/fractional-cfo/\">Explore fractional CFO &amp; advisory &rarr;</a>",
  ],
  reviewProse: "This page reflects how TechBrot handles Delaware professional-services engagements. It is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm in Middletown, and reviewed for technical accuracy on project profitability, owner compensation, the Delaware gross receipts tax, and the Wilmington net-profits tax (<a href=\"https://revenue.delaware.gov/\" rel=\"noopener nofollow\">DE Division of Revenue</a>; <a href=\"https://www.wilmingtonde.gov/residents/earned-income-tax-and-net-profits-tax\" rel=\"noopener nofollow\">City of Wilmington</a>). TechBrot delivers the books and coordinates with your CPA, who files.",
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "Project profitability, owner comp, gross-receipts tracking, Wilmington net-profits tax &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Engagement", detail: "Fixed-fee, written scope before work &middot; delivered in your own QuickBooks file" },
    { label: "Independence", detail: "Independent Certified ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],
  secRelatedH: "Related Delaware services &amp; industries.",
  related: [
    { title: "Gross Receipts Tax Help", body: "Activity-based gross-receipts tracking set up so the right rate and exclusion apply and the return reconciles.", href: "/find-an-accountant/delaware/gross-receipts-tax-help/", cta: "Gross receipts help &rarr;" },
    { title: "Wilmington Accounting", body: "Local depth on Wilmington&rsquo;s 1.25% wage and net-profits tax for firms operating in the city.", href: "/find-an-accountant/delaware/cities/wilmington/", cta: "Wilmington &rarr;" },
    { title: "Professional services playbook", body: "How TechBrot builds books for agencies, consultancies, and firms &mdash; scoped for Delaware on the call.", href: "/accounting/industries/professional-services/", cta: "Professional services &rarr;" },
    { title: "All Delaware industries", body: "See how TechBrot tailors accounting to the way your industry runs in Delaware.", href: "/find-an-accountant/delaware/industries/", cta: "All industries &rarr;" },
  ],
  faq: [
    { q: "Why is accounting different for a Delaware professional-services firm?", a: "Service firms run on profit by client and project, utilization, and owner compensation &mdash; not units sold &mdash; so the books have to be built to surface those numbers. Delaware adds its own layer: no sales tax, but a gross receipts tax on the firm by business activity, and inside Wilmington a 1.25% net-profits tax. We configure QuickBooks around how you actually bill, with the Delaware and Wilmington rules built in." },
    { q: "Does my Delaware agency or consultancy owe gross receipts tax?", a: "Yes. There&rsquo;s no Delaware sales tax to collect from clients, but the state levies a gross receipts tax on your firm&rsquo;s total receipts &mdash; 0.0945% to 1.9914% depending on your business activity, after a monthly or quarterly exclusion amount. Different professional activities can fall under different classifications, so we track receipts by activity in QuickBooks so the right rate and exclusion apply and the return reconciles to the books." },
    { q: "What is the Wilmington net-profits tax and does it apply to me?", a: "The City of Wilmington levies a 1.25% net-profits tax on the net profit of sole proprietors and partnerships operating within city limits, plus a 1.25% wage tax on residents and on non-residents who work in the city. Only Wilmington has it &mdash; Dover, Newark, Middletown, and Smyrna do not. If your firm operates in Wilmington, we account for it in QuickBooks so it&rsquo;s reserved and your CPA can file it." },
    { q: "Can you keep owner compensation clean?", a: "Yes &mdash; and it matters more than most owners realize. We keep owner draws, guaranteed payments, and reasonable salary distinct from true operating expense, so your profit is real and your CPA has clean data for the entity&rsquo;s tax treatment (S-corp, partnership, or sole prop). Tangled owner comp is one of the most common reasons a service firm&rsquo;s books overstate or understate performance." },
    { q: "Do you track profitability by client and project?", a: "Yes. We set up QuickBooks so revenue and direct delivery cost track to each client and project, giving you realization and margin by engagement instead of a company-wide guess. That&rsquo;s what lets you see which clients pay for themselves, which to reprice, and which to let go &mdash; the decisions that actually move a service firm&rsquo;s profit." },
    { q: "My books are behind and owner draws are a mess. Where do we start in Delaware?", a: "With a cleanup. We reclassify owner compensation, rebuild project and client tracking, fix any gross-receipts or Wilmington net-profits-tax coding, and reconcile to a known-good baseline &mdash; then move you onto accurate monthly bookkeeping with profit-by-client reporting. Most firms come to us mid-mess; it&rsquo;s the normal starting point. Prefer to talk first? Call (877) 751-5575 and a Certified ProAdvisor will scope it with you." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/delaware/industries/professional-services/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Delaware Professional Services Accounting","description":"Accounting for Delaware agencies, consultancies, and professional firms — project and client profitability, clean owner compensation, gross-receipts tracking by activity, and Wilmington net-profits-tax handling, set up in QuickBooks by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-delaware-industries-professional-services.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#de-ind-profservices-summary","#de-ind-profservices-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-25"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"Delaware","item":"https://techbrot.com/find-an-accountant/delaware/"},
          {"@type":"ListItem","position":4,"name":"Industries","item":"https://techbrot.com/find-an-accountant/delaware/industries/"},
          {"@type":"ListItem","position":5,"name":"Professional Services"}]},
        {"@type":"Service","@id":url+"#service","name":"Delaware Professional Services Accounting","serviceType":"Professional-services bookkeeping and project profitability","description":"Project and client profitability, owner compensation, gross-receipts tracking by activity, and Wilmington net-profits-tax handling for Delaware agencies, consultancies, and firms, delivered in QuickBooks by a Certified ProAdvisor. Independent firm; does not file Delaware returns — coordinates with the client's CPA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"Delaware","sameAs":"https://en.wikipedia.org/wiki/Delaware"},
          "audience":{"@type":"BusinessAudience","audienceType":"Delaware agencies, consultancies, marketing and design firms, professional practices, and independent consultants"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"400","description":"Fixed monthly fee from $400/mo against a written scope.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /accounting/financial-statements/ — LIVE baseline accounting service page
 * migrated to cobalt t-mofu under MIGRATION-PROTOCOL (content-to-goal,
 * visual-floor). FROZEN CONTRACT: tmp/contract-acct-finstmt.txt (39 headings,
 * 11 FAQ) is the ONLY authority for headings + FAQ. Old HTML
 * accounting/financial-statements/index.html read for BODY PROSE only.
 * REFERENCE pattern: src/quickbooks/online.njk (proven t-mofu cobalt) for
 * structure/schema + src/accounting/advisory/cash-flow-management.11tydata.js
 * for the QAPage-from-aiSummary model. t-mofu, tierClass section--tier-guide,
 * bodyClass page--mofu. CTA intent: accounting (canonical lexicon). Footer
 * chrome H2s (Accounting/QuickBooks/Company/Network) + "The monthly brief."
 * NOT rendered here — base-layout chrome / dropped per protocol T2. The 5
 * quick-answer questions render as NON-heading ai-summary__question (baseline
 * captured them as <dt>, NOT <hN>) to keep the frozen heading inventory exact.
 * FAQ: 11 contract Q/A verbatim (Q1-Q6 substantive, Q7-Q11 schema-only flat
 * variants — append-only; NO dedup in FAQPage). Old "Can you rebuild
 * statements for prior periods?" Q/A (dropped from the contract FAQ set) is
 * PRESERVED as section prose under "Reliable statements are the floor" — no
 * gutting. Schema: WebPage, BreadcrumbList, Service, ItemList (deliverables),
 * FAQPage (all 11), QAPage (from the 5 ai-summary). Honesty R5/R9: no
 * fabricated stats/outcomes/reviews; firm-level authorship; prepare-not-attest
 * boundary held; David Westgate in reviewedBy schema @id only; independent
 * firm, not affiliated with Intuit Inc. No <strong> in the dark hero
 * subheading. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "Financial statements, plainly." — definition prose (from old TL;DR body, enriched; no <strong> rule applies to dark hero only)
  definition: [
    "The three financial statements report a business from three angles: the <strong>income statement (P&amp;L)</strong> shows revenue, expense, and profit over a period; the <strong>balance sheet</strong> shows what the business owns and owes at a moment in time; the <strong>cash flow statement</strong> reconciles profit to actual cash. Read separately, each is incomplete &mdash; a profitable P&amp;L can sit alongside a tight bank account, and a healthy balance sheet can mask a weakening cash trend. The picture is only true when all three are reconciled, in agreement, and read together.",
    "TechBrot&rsquo;s <a href=\"/quickbooks/proadvisor-team/\">Certified ProAdvisors</a> prepare all three monthly from a reconciled <a href=\"/accounting/bookkeeping/\">QuickBooks file</a>, deliver them CPA-ready for your tax professional, and pair them with plain-language commentary so the numbers translate into decisions. It&rsquo;s internal management and CPA-ready reporting &mdash; <strong>not audit, review, or compilation</strong>, which are licensed CPA engagements we coordinate with. We prepare the statements from clean books; external attestation and tax returns stay with your CPA. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "Financial statements, in five questions." — quick-answer (NON-heading questions; from old AI-summary <dt>/<dd>). Drives the QAPage.
  aiSummary: [
    { q: "What are the three main financial statements?", a: "The <strong>income statement</strong> (P&amp;L), <strong>balance sheet</strong>, and <strong>cash flow statement</strong>. P&amp;L shows performance over a period; balance sheet shows financial position at a point in time; cash flow reconciles profit to actual cash." },
    { q: "P&amp;L vs cash flow statement?", a: "P&amp;L reports income and expense when <strong>earned and incurred</strong>; cash flow reports actual <strong>cash in and out</strong>. A business can be profitable while losing cash &mdash; the cash flow statement explains that gap." },
    { q: "What is the balance sheet?", a: "A <strong>snapshot</strong> at a single moment: assets (what the business owns), liabilities (what it owes), and equity. Assets equal liabilities plus equity, always. Shows financial health and structure, not just performance." },
    { q: "Are TechBrot statements GAAP audit-ready?", a: "We prepare <strong>internal management and CPA-ready</strong> statements &mdash; reconciled and structured so your CPA can file from them or perform a formal compilation, review, or audit on top. We don&rsquo;t provide audit, review, or compilation ourselves &mdash; those are licensed CPA engagements." },
    { q: "How often should they be produced?", a: "<strong>Monthly</strong> is standard. Annual-only is almost always too infrequent &mdash; you find out in March how December went. Included in monthly bookkeeping engagements ($400&ndash;$2,500+/mo)." },
  ],
  // "What each one tells you — and what it doesn't." — the three statements (stack-8 + num)
  statements: [
    { num: "01", name: "Income statement (P&amp;L)", body: "<strong>Performance over a period.</strong> Revenue, cost of goods, operating expenses, profit &mdash; built on the accrual or cash basis you keep your books on. The headline question: did the business make money this month, this quarter, this year? It doesn&rsquo;t tell you whether you have cash, what you own, or what you owe." },
    { num: "02", name: "Balance sheet", body: "<strong>Position at a moment in time.</strong> Assets equal liabilities plus equity. It shows financial structure &mdash; cash, receivables, inventory, equipment, debt, owner&rsquo;s stake &mdash; and answers whether the business is financially sound. Reconciled to source, it&rsquo;s the statement everything else depends on. It doesn&rsquo;t tell you how the business is performing right now." },
    { num: "03", name: "Cash flow statement", body: "<strong>Profit reconciled to cash.</strong> It shows how operating, investing, and financing activities moved cash over the period &mdash; and why profit and bank balance disagree. The question it answers: where did the cash actually go? It&rsquo;s the statement most owners never see and need most." },
  ],
  // "If any of these sound familiar, the answer is yes." — 6 signals (buyer-card)
  signals: [
    { opener: "You only ever see a P&amp;L.", body: "A P&amp;L without a balance sheet and cash flow is half the picture &mdash; or less. The numbers you don&rsquo;t see are usually the ones that bite." },
    { opener: "Profit and bank balance don&rsquo;t match your intuition.", body: "When the P&amp;L says one thing and the bank says another, the cash flow statement explains the gap. Without it, the gap stays a mystery." },
    { opener: "Your balance sheet hasn&rsquo;t reconciled in months.", body: "An unreconciled balance sheet means the books don&rsquo;t actually agree with reality. Every other statement is unreliable until that&rsquo;s fixed &mdash; the first thing a <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> repairs." },
    { opener: "A lender, board, or investor wants statements.", body: "Outside stakeholders expect all three statements, monthly, in a credible format. We produce them CPA-ready so they hold up to scrutiny." },
    { opener: "Year-end is a scramble.", body: "If your CPA spends January untangling December, the monthly close isn&rsquo;t producing real statements. A reliable monthly process eliminates the scramble." },
    { opener: "You can&rsquo;t answer simple questions from your books.", body: "&ldquo;How much do I owe vendors?&rdquo; &ldquo;What was my gross margin last quarter?&rdquo; &ldquo;Where did the cash go?&rdquo; If the books can&rsquo;t answer in a minute, they aren&rsquo;t doing their job." },
  ],
  // "What financial statement preparation actually delivers." — 6 deliverables (stack-8 + num). ItemList source.
  deliverables: [
    { num: "01", name: "All three statements, monthly", body: "Income statement, balance sheet, and cash flow statement &mdash; produced from reconciled books each month, not just at year-end. A consistent package, on a set cadence, so the numbers are there when a decision needs them." },
    { num: "02", name: "Reconciled balance sheet", body: "Every balance sheet account reconciled to its source &mdash; bank, credit card, loan, payroll liability, undeposited funds &mdash; so the numbers are real, not estimates. The reconciliation is what makes the other two statements trustworthy." },
    { num: "03", name: "Comparative views", body: "Month-over-month and year-over-year comparisons so trends are visible at a glance &mdash; not buried in a single-period snapshot. Where margins drift or expenses creep, the comparison is what surfaces it." },
    { num: "04", name: "Plain-language commentary", body: "A short written read each month from a named ProAdvisor: what changed, why, and what to watch &mdash; tied to the KPIs and notes that matter for your business. Not just delivery &mdash; interpretation." },
    { num: "05", name: "CPA-ready handoff", body: "Statements structured so your CPA or EA can file from them or, when needed, perform a formal compilation, review, or audit on top &mdash; no rework. The package is built for the lender, investor, or tax pro who receives it." },
    { num: "06", name: "Segment &amp; location views", body: "Where the business is multi-segment or multi-location, statements broken out by class or location so each unit is visible inside the consolidated picture &mdash; the reporting depth that turns books into management information." },
  ],
  // "Management statements vs CPA engagements." — 3 scope cards (We do / We don't / We coordinate with)
  scope: [
    { name: "We do", body: "Monthly preparation of income statement, balance sheet, and cash flow statement from reconciled QuickBooks books. Internal management reporting on GAAP-accrual or cash basis as your books are kept. CPA-ready year-end packages. Comparative and segment views. Plain-language commentary. Historical statement preparation for past periods needing rebuild." },
    { name: "We don&rsquo;t", body: "Issue <strong>GAAP compilation, review, or audit reports</strong> &mdash; those are licensed CPA engagements. File income tax returns or represent before the IRS. Provide tax positions or legal advice. Issue formal opinions or attest to statements for third parties. We prepare the statements; we do not attest to them." },
    { name: "We coordinate with", body: "Your CPA or EA for tax filing and any formal CPA engagement. Your lender, board, or investor for reporting requirements. Your attorney when a transaction or due diligence is involved. We provide the underlying books and statements; licensed work stays with licensed professionals." },
  ],
  // "Management statements vs CPA engagements." vs-table — honest boundary (T3: tables -> vs-scroll+vs-table). prepare-not-attest line drawn explicitly.
  boundary: [
    { cap: "Income statement, balance sheet &amp; cash flow, monthly", us: "yes", cpa: "no" },
    { cap: "Reconciled, CPA-ready management package", us: "yes", cpa: "no" },
    { cap: "Plain-language commentary &amp; KPI notes", us: "yes", cpa: "no" },
    { cap: "GAAP compilation, review, or audit report", us: "no", cpa: "CPA only" },
    { cap: "Formal opinion / attestation for third parties", us: "no", cpa: "CPA only" },
    { cap: "Income tax returns &amp; IRS representation", us: "no", cpa: "CPA / EA" },
  ],
  // FAQ — 11 contract Q/A, verbatim questions, answers preserved (append-only enrichment). Q7-Q11 are schema-only flat variants kept per append-only contract; NO dedup in FAQPage.
  faq: [
    { q: "What are the three main financial statements?", a: "The income statement (also called profit and loss or P&amp;L), the balance sheet, and the cash flow statement. The income statement shows revenue, expenses, and profit over a period. The balance sheet shows what the business owns and owes at a single point in time. The cash flow statement reconciles profit to actual cash movement. Together they give the complete financial picture; alone, each is incomplete." },
    { q: "What&rsquo;s the difference between the P&amp;L and the cash flow statement?", a: "The P&amp;L reports income and expenses when they are earned and incurred, regardless of when cash moves. The cash flow statement reports actual cash in and out. A business can be profitable on the P&amp;L while losing cash, or losing money on the P&amp;L while collecting cash &mdash; the difference is timing. The cash flow statement explains that gap." },
    { q: "What is the balance sheet?", a: "The balance sheet is a snapshot of the business at a single moment: assets (what it owns &mdash; cash, receivables, inventory, equipment), liabilities (what it owes &mdash; payables, loans, deposits held), and owner&rsquo;s equity. Assets equal liabilities plus equity, always. It&rsquo;s the statement that shows financial health and structure, not just performance." },
    { q: "How often should financial statements be produced?", a: "Monthly is the standard for active management. Quarterly is acceptable for steady, lower-complexity businesses. Annual-only is almost always too infrequent &mdash; you&rsquo;ll find out in March how December went, with no time to act. TechBrot prepares statements monthly as part of recurring <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">bookkeeping engagements</a>." },
    { q: "Are TechBrot financial statements GAAP audit-ready?", a: "TechBrot prepares internal management financial statements and CPA-ready packages &mdash; accurate, reconciled, and structured so your CPA can file from them or, when needed, perform a formal compilation, review, or audit engagement on top. We do not provide audit, review, or compilation services ourselves; those are licensed CPA engagements." },
    { q: "What does financial statement preparation cost?", a: "Monthly financial statement preparation is included in TechBrot&rsquo;s <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping engagements</a>, which range from $400 to $2,500+ per month with complexity adjustments. Stand-alone historical statement preparation &mdash; for past periods that need rebuilding &mdash; is quoted as a fixed-fee project against scope. No hourly billing." },
  ],
  // "Reviewed by the ProAdvisor team." — firm-level review spec (trust-row)
  reviewSpec: [
    { value: "QBO L2", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "Monthly P&amp;L, balance sheet, cash flow &middot; reconciliation &middot; CPA-ready handoff &mdash; not audit, review, or compilation engagements" },
    { value: "Fixed-fee", label: "Written scope before work &middot; delivered in your own QuickBooks file" },
    { value: "Independent", label: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],
  // "Related services." — 4 related (stack-8 linked)
  related: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "The recurring engagement statements are produced inside of &mdash; real reconciliation and a monthly close you can trust." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/", body: "Where the books need rebuilding before reliable statements can be produced &mdash; categorization fixes, real reconciliation, prior-period correction." },
    { title: "Cash flow management", href: "/accounting/advisory/cash-flow-management/?intent=advisory", body: "The forward-looking layer that turns the cash flow statement into action &mdash; a rolling 13-week forecast on top of accurate books." },
    { title: "Advisory", href: "/accounting/advisory/?intent=advisory", body: "The judgment layer that turns reliable statements into decisions &mdash; KPIs, performance review, and up to a fractional CFO seat." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/accounting/financial-statements/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#acct-finstmt-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Accounting","item":"https://techbrot.com/accounting/"},
          {"@type":"ListItem","position":3,"name":"Financial Statements","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Financial Statement Preparation","serviceType":"Financial statement preparation","description":"Monthly preparation of the income statement (P&L), balance sheet, and cash flow statement from reconciled QuickBooks books for U.S. businesses, delivered CPA-ready with plain-language commentary by Certified ProAdvisors. Internal management and CPA-ready reporting; not GAAP audit, review, or compilation engagements, which are licensed CPA services.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses, owners, and operators"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Financial statement preparation deliverables","itemListElement":data.deliverables.map(function(d){return {"@type":"Offer","itemOffered":{"@type":"Service","name":stripTags(d.name),"description":stripTags(d.body).slice(0,200)}};})}},
        {"@type":"ItemList","@id":url+"#deliverables","name":"What financial statement preparation delivers","itemListElement":data.deliverables.map(function(d,i){return {"@type":"ListItem","position":i+1,"name":stripTags(d.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})},
        {"@type":"QAPage","@id":url+"#qa","isPartOf":{"@id":url+"#webpage"},"mainEntity":{"@type":"Question","name":stripTags(data.aiSummary[0].q),"answerCount":1,"acceptedAnswer":{"@type":"Answer","text":stripTags(data.aiSummary[0].a)}},"about":{"@type":"ItemList","name":"Financial statements — quick answers","itemListElement":data.aiSummary.slice(1).map(function(i,idx){return {"@type":"Question","position":idx+1,"name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}}
      ]};
    },
  },
};

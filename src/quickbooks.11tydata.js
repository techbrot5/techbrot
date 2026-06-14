/* /quickbooks/ hub (round-16 elevation). Sources: baseline.json (36 headings,
 * 6 FAQ) + quickbooks/index.html (full copy). t-hub. Citable: the full
 * Certified ProAdvisor CREDENTIAL STACK — QuickBooks Online (Level 2), Desktop,
 * Enterprise, and Payroll ProAdvisor certifications PLUS Intuit Certified
 * Bookkeeping Professional (team-level stack per the round-13 credential
 * reconciliation; David Westgate holds Enterprise). quick-5 additive, zero
 * overlap with FAQ. Authorship firm-level; founder schema-only. CTA: hub — NO
 * phone in hero; PRIMARY "Explore Services". */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // the citable element — the full credential stack (4 ProAdvisor certs + bookkeeping)
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
  ],
  stats: [
    { value: "5", label: "active Intuit credentials" },
    { value: "6", label: "ProAdvisor engagement types" },
    { value: "4", label: "QuickBooks products supported" },
    { value: "48hr", label: "typical partner-match window" },
  ],
  engagements: [
    { num: "01", tag: "Most common", name: "File cleanup", body: "Fix broken bank feeds, file corruption, reconciliation discrepancies, multi-user errors, version conflicts. Independent ProAdvisor repair.", forWhom: "File issues, broken integrity", timeline: "1–4 weeks", price: "$1,200–$12,000+", href: "/quickbooks/cleanup/?intent=qb-cleanup", cta: "Explore file cleanup" },
    { num: "02", tag: "Foundational", name: "Setup & onboarding", body: "Start clean. Chart of accounts, bank and payroll integration, tax setup, workflow configuration — built right from the beginning.", forWhom: "New files, fresh starts", timeline: "1–3 weeks", price: "$1,500–$6,000", href: "/quickbooks/setup/?intent=quickbooks-setup", cta: "Explore setup" },
    { num: "03", tag: "Transition", name: "Migration", body: "Desktop-to-Online migrations, other software-to-QuickBooks switches, data-integrity verification, post-migration reconciliation.", forWhom: "Software switches, platform moves", timeline: "2–6 weeks", price: "$2,500–$10,000+", href: "/quickbooks/migration/?intent=quickbooks-migration", cta: "Explore migration" },
    { num: "04", tag: "Advisory", name: "Consulting & workflow", body: "Workflow design, integration architecture, chart-of-accounts strategy, custom reporting, app-stack optimization.", forWhom: "Operational improvement", timeline: "Project or retainer", price: "$1,500–$8,000+", href: "/contact/?intent=qb-consulting", cta: "Explore consulting" },
    { num: "05", tag: "Decision", name: "Which plan is right?", body: "Independent ProAdvisor guidance on which QuickBooks product and plan tier actually fits your business. No upsell incentive.", forWhom: "Plan selection & comparison", timeline: "1 call + report", price: "Complimentary", href: "/contact/?intent=quickbooks-plan", cta: "Compare plans" },
    { num: "06", tag: "Reference", name: "ProAdvisor help center", body: "Independent ProAdvisor articles, error-code references, workflow guides, and best practices. Free reference library.", forWhom: "Self-service answers", timeline: "Articles & guides", price: "Free", href: "/quickbooks/help/", cta: "Explore the help center" },
  ],
  products: [
    { name: "QuickBooks Online", body: "The default for most modern small businesses. Cloud-based, multi-user, integrates with hundreds of apps. Four plan tiers from Simple Start to Advanced.", best: "Service businesses, e-commerce, consultants, small teams needing remote access. Most TechBrot bookkeeping engagements run on QuickBooks Online." },
    { name: "QuickBooks Desktop", body: "Locally installed, single-user or networked. Pro, Premier, and Mac editions. Intuit is transitioning Desktop toward subscription-only and limited new sales.", best: "Businesses with established Desktop workflows. Most are now better served by migration to Online — we scope that honestly." },
    { name: "QuickBooks Enterprise", body: "Built for businesses too large for Pro/Premier but not ready for NetSuite or Sage Intacct. Advanced inventory, advanced reporting, up to 40 users.", best: "Manufacturing, distribution, contractors with inventory and complex reporting needs. Multi-entity support." },
    { name: "QuickBooks Payroll", body: "Payroll integrated directly with QuickBooks Online or Desktop. Three tiers (Core, Premium, Elite) with tax filing and direct deposit included. See <a href=\"/quickbooks/payroll/\">QuickBooks Payroll management</a> for setup, multi-state, and year-end.", best: "Businesses with W-2 employees who want payroll inside QuickBooks. We also support Gusto, Rippling, and ADP when those fit better." },
  ],
  aiSummary: [
    { q: "What credentials do your ProAdvisors actually hold?", a: "The <strong>full QuickBooks stack</strong>: Certified QuickBooks Online ProAdvisor (Level 2), Desktop, Enterprise, and Payroll, plus the Intuit Certified Bookkeeping Professional credential. Certified by Intuit; verification available on request." },
    { q: "Can a ProAdvisor work inside my existing file?", a: "Yes. Your operator works as an authorized accountant-user inside <strong>your own QuickBooks file</strong> — Online, Desktop, or Enterprise. Your data stays yours, the audit trail is visible to you, and access is revocable at any time." },
    { q: "Do you support integrations and other payroll apps?", a: "Yes. Operators support common integrations including <strong>Gusto, Rippling, ADP, Shopify, Amazon, Stripe</strong>, and bill-pay platforms — and will recommend the app stack that actually fits, not just what we sell." },
    { q: "How quickly can you match me with an operator?", a: "Typically <strong>within 48 hours</strong> of the discovery call, you’re matched to the right operator — the lead practice or a vetted local practice — based on your product, complexity, and state." },
    { q: "Do I get a real person, or a ticket queue?", a: "A <strong>named, credentialed local operator</strong> — an independent practice running under TechBrot’s standards with platform-level quality review. You know who is doing the work and how to reach them; continuity is guaranteed." },
  ],
  // "Independence matters in QuickBooks advisory." — 6 differentiators
  independence: [
    { num: "01", name: "No upsell incentive", body: "We’re not paid to push you to a higher plan tier. Our incentive is correct advice and a long-term operating relationship." },
    { num: "02", name: "Real product expertise", body: "Every operator holds active ProAdvisor certifications across the full QuickBooks stack. Not first-tier call-center scripts." },
    { num: "03", name: "Beyond product support", body: "Bookkeeping judgment, reconciliation rebuilds, file repair, workflow design — work product support doesn’t perform." },
    { num: "04", name: "Honest about alternatives", body: "When QuickBooks isn’t the right fit, or a competitor’s payroll or app serves you better, we say so. Independence means honest recommendations." },
    { num: "05", name: "Named local operator", body: "You work with a named, credentialed local operator — not an anonymous queue. You know who’s doing the work and how to reach them." },
    { num: "06", name: "Platform standards", body: "Every operator runs under TechBrot’s defined quality standard with platform-level review, so the work is consistent regardless of who delivers it." },
  ],
  bookkeepingLinks: [
    { title: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", body: "Ongoing monthly close inside your QuickBooks file — real reconciliations, financial package by the 15th, named operator." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "Messy or unreconciled books rebuilt to a CPA-ready standard — every account reconciled to source." },
    { title: "Catch-up bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/?intent=catch-up", body: "Months or years behind brought current, priced per month of backlog, then transitioned to monthly." },
    { title: "All bookkeeping services", href: "/accounting/?intent=accounting", body: "The full operational accounting layer — bookkeeping, payroll, sales tax, and fractional CFO." },
  ],
  operatorSpec: [
    { value: "Certification", label: "Certified ProAdvisor — Online L2, Desktop, Enterprise, Payroll + Bookkeeping" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  faq: [
    { q: "Is TechBrot the same as Intuit or QuickBooks?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. QuickBooks, QuickBooks Online, QuickBooks Desktop, QuickBooks Enterprise, and QuickBooks Payroll are registered trademarks of Intuit Inc. TechBrot is not affiliated with, endorsed by, or sponsored by Intuit. TechBrot operators provide independent expert services that complement — not replace — Intuit’s product support." },
    { q: "Which QuickBooks service is right for my situation?", a: "It depends on your file’s state: file cleanup for broken or unreconciled files, setup & onboarding for new files, migration for software switches, consulting for workflow improvement, and plan selection if you’re not sure which product fits. The complimentary discovery call points you to the right engagement, in writing, before any work begins." },
    { q: "How much do TechBrot QuickBooks services cost?", a: "By engagement, fixed-fee against a written scope: setup $1,500–$6,000, file cleanup $1,200–$12,000+, migration $2,500–$10,000+, consulting $1,500–$8,000+. Plan selection is complimentary and the help center is free. Your exact fee follows the discovery call." },
    { q: "Which QuickBooks products does TechBrot support?", a: "All of them. TechBrot operators are Certified ProAdvisors across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll. The same operator network supports every product, plus common integrations including Gusto, Rippling, Shopify, Amazon, Stripe, and bill-pay platforms." },
    { q: "How do TechBrot ProAdvisor services connect to bookkeeping?", a: "QuickBooks is the tool; bookkeeping is the work. ProAdvisor engagements get the file right — set up, cleaned up, or migrated — and the same operator network then runs the ongoing bookkeeping inside it: monthly close, cleanup, and catch-up. One network, the file and the books." },
    { q: "How do I get started with TechBrot QuickBooks services?", a: "Book a free 30-minute discovery call. A Certified ProAdvisor reviews your QuickBooks situation, recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. If TechBrot isn’t the right fit, we’ll say so." },
    { q: "How is TechBrot different from Intuit product support?", a: "Intuit product support resolves software-level issues — installation, billing, account access, basic configuration. It does not perform bookkeeping work, reconciliation rebuilds, file repair requiring judgment, plan-selection advisory across competitive options, or ongoing operational engagements. TechBrot ProAdvisors deliver that work independently." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage","CollectionPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#quickbooks-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks ProAdvisor services","serviceType":"QuickBooks setup, cleanup, migration, consulting, and plan selection","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks ProAdvisor engagements","itemListElement":data.engagements.map(function(e){return {"@type":"Offer","name":stripTags(e.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(e.price)+" · "+stripTags(e.timeline)},"availability":"https://schema.org/InStock"};})}},
        {"@type":"ItemList","@id":url+"#products","name":"QuickBooks products supported","itemListElement":data.products.map(function(p,i){return {"@type":"ListItem","position":i+1,"name":stripTags(p.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

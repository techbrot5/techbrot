/* /pricing/ page data (round-12 elevation from the FROZEN baseline floor).
 * tier: t-bofu · chrome: full (reference/decision page — links out to the
 * whole service catalog, so it KEEPS nav, unlike a conversion endpoint).
 * BASELINE EQUITY carried: H1, the three-shapes model, the full canonical
 * price table, "why fixed-fee", "every fixed fee includes" (6), the 7
 * buyer-objection FAQ (verbatim), the pricing-standards/authorship note,
 * "where to go next" (4). CANONICAL PRICING ONLY — every figure is the
 * live/Sheet-0 canonical value (no invention).
 * aiSummary: the 5 most AI-citable pricing facts (service-specific numbers
 * + speed + inclusions) — ZERO overlap with the FAQ (which carries the
 * model/why/range-factor/free/contracts/tax/Intuit objection set).
 * Authorship: firm-level "Certified QuickBooks ProAdvisor team"; founder in
 * the global Person schema only (E-E-A-T anchor) — no visible name. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→").replace(/&middot;/g, "·")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();
}

// CANONICAL price table — live /pricing/ values (== blueprint Sheet 0).
const PRICING = [
  { service: "Monthly Bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", intent: "monthly", type: "Recurring fixed-fee close", range: "$400&ndash;$2,500+", unit: "/mo", cadence: "Monthly" },
  { service: "Cleanup Bookkeeping", href: "/accounting/bookkeeping/cleanup-bookkeeping/", intent: "cleanup", type: "One-time structural fix", range: "$1,500&ndash;$15,000+", unit: "", cadence: "One-time · 2&ndash;8 wks" },
  { service: "Catch-up Bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/", intent: "catch-up", type: "Historical bookkeeping", range: "$2,000&ndash;$20,000+", unit: "", cadence: "One-time · 4&ndash;12 wks" },
  { service: "QuickBooks Setup", href: "/quickbooks/setup/", intent: "quickbooks-setup", type: "New implementation", range: "$750&ndash;$5,000+", unit: "", cadence: "One-time · 2&ndash;4 wks" },
  { service: "QuickBooks Cleanup", href: "/quickbooks/cleanup/", intent: "qb-cleanup", type: "QB-specific structural fix", range: "$1,500&ndash;$15,000+", unit: "", cadence: "One-time · 2&ndash;8 wks" },
  { service: "QuickBooks Migration", href: "/quickbooks/migration/", intent: "quickbooks-migration", type: "Desktop → Online, platform switch", range: "$2,500&ndash;$10,000+", unit: "", cadence: "One-time · 3&ndash;8 wks" },
  { service: "Emergency QB Fix", href: "/quickbooks/help/", intent: "file-review", type: "File corruption, error resolution", range: "$500&ndash;$2,500", unit: "", cadence: "One-time · same-day diag" },
  { service: "Payroll Management", href: "/accounting/payroll-management/", intent: "payroll", type: "Multi-state recurring payroll", range: "$150&ndash;$800+", unit: "/mo", cadence: "Monthly" },
  { service: "Sales Tax Compliance", href: "/accounting/sales-tax-compliance/", intent: "sales-tax", type: "Multi-state nexus & filings", range: "$250&ndash;$1,500+", unit: "/mo", cadence: "Monthly + setup" },
  { service: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/", intent: "fractional-cfo", type: "Strategic finance, by application", range: "$3,000&ndash;$8,000+", unit: "/mo", cadence: "Monthly retainer" },
];

module.exports = {
  pricing: PRICING,
  // engagement "shapes"
  shapes: [
    { label: "Recurring", name: "Monthly retainer", body: "Ongoing work billed as a fixed monthly fee. Same-shape deliverables every month. No long-term lock-in &mdash; runs month to month against the written scope.", forList: "Monthly bookkeeping, payroll, sales tax compliance, fractional CFO." },
    { label: "One-time", name: "Fixed-fee project", body: "Defined-scope work delivered in weeks, with a written fixed fee and set start and completion dates. Often transitions into a recurring engagement after.", forList: "Cleanup, catch-up, QuickBooks setup, migration, emergency fixes." },
    { label: "By application", name: "Senior retainer", body: "Senior strategic engagements accepted by application with limited capacity per quarter. Scoped to the depth of involvement the business needs.", forList: "Fractional CFO, complex multi-entity advisory." },
  ],
  // "every fixed fee includes these" — parallel list (NOT a numbered sequence)
  includes: [
    { name: "Free discovery call", body: "A 30-minute call before anything is quoted. Free, no obligation, no sales push." },
    { name: "Written fixed-fee scope", body: "Within 3 business days of the call. The scope is the agreement &mdash; no hourly billing, no creep." },
    { name: "Certified ProAdvisor delivery", body: "Delivered by a Certified Intuit ProAdvisor &mdash; verifiable on Intuit&rsquo;s public directory." },
    { name: "Named-operator continuity", body: "A named ProAdvisor owns your account end-to-end. No rotation, no re-explaining." },
    { name: "Direct file access", body: "We work inside your own QuickBooks file. Your data, your audit trail, never a parallel system." },
    { name: "CPA-ready handoff", body: "Recurring engagements include a year-end CPA handoff at no extra cost." },
  ],
  nextCards: [
    { name: "Service Catalog", body: "All engagement types with scope, the decision framework, and engagement standards.", cta: "Explore Services", href: "/accounting/services/" },
    { name: "Which service do I need?", body: "Diagnostic routing &mdash; match your situation to the right engagement before you call.", cta: "Find your situation", href: "/accounting/" },
    { name: "Why trust TechBrot", body: "The four verifiable trust pillars behind the pricing &mdash; credentials, accountability, security, independence.", cta: "The Four Trust Pillars", href: "/trust/" },
    { name: "Get a quote", body: "Talk to a Certified ProAdvisor and get a written fixed-fee scope within 3 business days.", cta: "Speak to a ProAdvisor", href: "/contact/?intent=pricing" },
  ],
  aiSummary: [
    { q: "How much does monthly bookkeeping cost?", a: "<strong>$400&ndash;$2,500+/month</strong>, as a fixed monthly fee against a written scope &mdash; no hourly billing. Where you land depends on transaction volume, number of bank and credit accounts, payroll, and entities. Your exact fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "What does a QuickBooks cleanup or catch-up cost?", a: "<strong>Cleanup runs $1,500&ndash;$15,000+</strong> and <strong>catch-up $2,000&ndash;$20,000+</strong>, as one-time fixed-fee projects. The figure reflects how many months or years are involved and the severity of the issues &mdash; cleanup is forensic work, priced for untangling, not data entry." },
    { q: "How much is QuickBooks setup or migration?", a: "<strong>Setup is $750&ndash;$5,000+</strong> (new implementation, 2&ndash;4 weeks); <strong>Desktop&rarr;Online migration is $2,500&ndash;$10,000+</strong> (3&ndash;8 weeks). Both are one-time fixed-fee projects scoped against file complexity, integrations, and platform." },
    { q: "How fast do I get a fixed-fee quote?", a: "<strong>Within 3 business days</strong> of a free 30-minute discovery call. The call is no-obligation; the quote is a written fixed-fee scope &mdash; the exact number, in writing, before you commit to anything." },
    { q: "What is included in every TechBrot fixed fee?", a: "<strong>Six things, every engagement</strong>: the free discovery call, the written fixed-fee scope, Certified ProAdvisor delivery, named-operator continuity, direct access to your own QuickBooks file, and a year-end CPA-ready handoff (free on recurring engagements)." },
  ],
  faq: [
    { q: "How does TechBrot price its services?", a: "Every TechBrot engagement is fixed-fee with a written scope agreed before any work begins &mdash; no hourly billing, no surprise invoices. Monthly bookkeeping runs $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; catch-up $2,000&ndash;$20,000+; QuickBooks setup $750&ndash;$5,000+; migration $2,500&ndash;$10,000+; payroll $150&ndash;$800+/mo; sales tax $250&ndash;$1,500+/mo; fractional CFO $3,000&ndash;$8,000+/mo. The exact fee is quoted within 3 business days of a free discovery call." },
    { q: "Why doesn&rsquo;t TechBrot bill hourly?", a: "Hourly billing penalizes clients for a provider&rsquo;s inefficiency and creates unpredictable invoices. TechBrot prices every engagement as a fixed fee against a written scope, so total cost is known before work starts. If the work genuinely expands beyond the agreed scope, the fee is re-quoted and re-approved in writing &mdash; never a surprise invoice." },
    { q: "What determines where my engagement falls in the price range?", a: "For recurring bookkeeping: monthly transaction volume, number of bank and credit accounts, payroll complexity, and number of entities. For cleanup and catch-up: how many months or years are involved and the severity of the issues. For QuickBooks projects: file complexity, integrations, and platform. The free discovery call surfaces these factors and the written scope reflects them." },
    { q: "Is the discovery call free?", a: "Yes. The 30-minute discovery call is free and no-obligation. TechBrot reviews your situation, recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. If TechBrot isn&rsquo;t the right fit, we say so honestly, with a referral where appropriate." },
    { q: "Are there long-term contracts?", a: "No long-term lock-in on recurring engagements. Recurring bookkeeping, payroll, and sales tax engagements run month to month against the written scope and can be ended on the agreement&rsquo;s terms. One-time projects have defined start and completion dates." },
    { q: "Does the price include tax filing?", a: "No. TechBrot delivers operational accounting and CPA-ready books; tax filing and IRS representation are handled by your CPA or EA and are not part of TechBrot&rsquo;s scope. Recurring engagements include a year-end CPA handoff at no extra cost." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and use QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      const offers = PRICING.map((row) => ({
        "@type": "Offer",
        name: row.service,
        category: stripTags(row.type),
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: stripTags(row.range + row.unit) + " · fixed fee, written scope before work begins",
        },
        availability: "https://schema.org/InStock",
      }));
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/pricing/#webpage",
            url: "https://techbrot.com/pricing/",
            name: "Pricing — Fixed-Fee Accounting, Bookkeeping & QuickBooks",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#pricing-tldr-body", "#pricing-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/pricing/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://techbrot.com/pricing/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/pricing/#service",
            name: "Fixed-fee accounting, bookkeeping & QuickBooks services",
            serviceType: "Bookkeeping, QuickBooks, payroll, sales tax, and fractional CFO",
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", audienceType: "U.S. small and mid-sized businesses" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "OfferCatalog",
              name: "TechBrot fixed-fee pricing",
              itemListElement: offers,
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/pricing/#faq",
            mainEntity: data.faq.map((item) => ({
              "@type": "Question",
              name: stripTags(item.q),
              acceptedAnswer: { "@type": "Answer", text: stripTags(item.a) },
            })),
          },
        ],
      };
    },
  },
};

/* /pricing/bookkeeping/ — per-service PRICE-DETAIL page (price grain for
 * monthly bookkeeping). tier: t-bofu · chrome: full (decision page that
 * routes out to the canonical pricing hub + the service page).
 * SCOPE DISCIPLINE: this page is the PRICE only — the three tiers, what
 * drives the tier, what each includes, and why fixed-fee. It LINKS to and
 * does NOT restate: /pricing/ (all-service canonical overview),
 * /accounting/bookkeeping/monthly-bookkeeping/ (the service = the work),
 * /accounting/bookkeeping/ (hub), /pricing/cleanup/ (behind-books, queued).
 * CANONICAL PRICING ONLY (blueprint Sheet 0): monthly bookkeeping
 * $400–$2,500+/mo · Essentials $400–$700 · Standard $700–$1,400 ·
 * Complex $1,400–$2,500+. Tier drivers: monthly transaction volume,
 * number of bank & credit-card accounts, payroll, number of entities.
 * Always a range; exact fee quoted in writing within 3 business days.
 * No invented numbers, no "average client pays", no review/rating schema.
 * aiSummary ZERO-overlaps the FAQ. Authorship: firm-level "Certified
 * QuickBooks ProAdvisor team"; founder in global Person schema only. */

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

// CANONICAL monthly-bookkeeping tier ranges (== blueprint Sheet 0).
const TIERS = [
  {
    label: "Tier 1 · Recurring",
    name: "Essentials",
    range: "$400&ndash;$700/mo",
    body: "Low monthly transaction volume, a single legal entity, and a small number of bank and credit-card accounts. No payroll, or a single simple payroll run handled elsewhere.",
    profile: "A solo or small single-entity business &mdash; one operating account, one card, modest volume, books kept current month to month.",
  },
  {
    label: "Tier 2 · Recurring",
    name: "Standard",
    range: "$700&ndash;$1,400/mo",
    body: "Moderate transaction volume, several bank and credit-card accounts to reconcile, and payroll in scope. Still a single entity, or a primary entity with light inter-account activity.",
    profile: "An established small business &mdash; multiple accounts, recurring payroll, steady volume, monthly reports a stakeholder actually reads.",
  },
  {
    label: "Tier 3 · Recurring",
    name: "Complex",
    range: "$1,400&ndash;$2,500+/mo",
    body: "High transaction volume, many accounts, multi-state or multi-run payroll, and/or more than one legal entity &mdash; each entity is its own file and close. Class, location, or department tracking that has to tie out.",
    profile: "A multi-entity group or higher-volume operation &mdash; several files, inter-entity activity, and reporting that has to consolidate cleanly.",
  },
];

module.exports = {
  tiers: TIERS,
  // recurring monthly-close deliverables present at every tier (parallel list, not a sequence)
  included: [
    { name: "Bank & card reconciliation", body: "Every bank and credit-card account in scope reconciled monthly &mdash; the count of accounts is one of the four things that sets your tier." },
    { name: "Transaction categorization", body: "Every transaction coded to a maintained chart of accounts inside your own QuickBooks file &mdash; never a parallel system." },
    { name: "Monthly financial statements", body: "P&amp;L, balance sheet, and cash-flow delivered on a fixed monthly cadence, in a format your stakeholders can read." },
    { name: "Named-operator continuity", body: "A named Certified ProAdvisor owns your close end-to-end. No rotation, no re-explaining your books each month." },
    { name: "Questions, no meter", body: "Ask anything within the engagement &mdash; the fixed monthly fee means there&rsquo;s no hourly clock on your own bookkeeper." },
    { name: "Year-end CPA handoff", body: "Recurring bookkeeping includes a clean, year-end CPA-ready handoff at no extra cost. Tax filing itself is your CPA&rsquo;s scope, not ours." },
  ],
  nextCards: [
    { name: "All-service pricing", body: "The canonical fixed-fee ranges across every TechBrot service &mdash; bookkeeping, cleanup, QuickBooks, payroll, and CFO &mdash; in one table.", cta: "See all pricing", href: "/pricing/" },
    { name: "The monthly bookkeeping service", body: "What the recurring close actually is &mdash; the work, the cadence, and the deliverables behind the price on this page.", cta: "Monthly bookkeeping service", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly" },
    { name: "Bookkeeping, end to end", body: "The full bookkeeping hub &mdash; monthly, cleanup, and catch-up &mdash; and how to tell which one your situation needs.", cta: "Bookkeeping hub", href: "/accounting/bookkeeping/" },
    { name: "Get your exact monthly fee", body: "A free 30-minute discovery call, then a written fixed-fee scope within 3 business days &mdash; the exact number before you commit.", cta: "Book the discovery call", href: "/contact/?intent=pricing" },
  ],
  // 5 most AI-citable bookkeeping-price facts — ZERO overlap with the FAQ set.
  aiSummary: [
    { q: "How much does monthly bookkeeping cost?", a: "<strong>$400&ndash;$2,500+ per month</strong>, as a fixed monthly fee against a written scope &mdash; no hourly billing. Your exact fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "What are the monthly bookkeeping tiers?", a: "Three: <strong>Essentials $400&ndash;$700/mo</strong>, <strong>Standard $700&ndash;$1,400/mo</strong>, and <strong>Complex $1,400&ndash;$2,500+/mo</strong>. The deliverables are the same at every tier &mdash; what changes is volume, accounts, payroll, and entities." },
    { q: "What decides which bookkeeping tier I&rsquo;m in?", a: "Four factors: monthly transaction volume, the number of bank and credit-card accounts reconciled, whether payroll is in scope, and the number of legal entities (each entity is its own file and close)." },
    { q: "How fast do I get a fixed-fee bookkeeping quote?", a: "<strong>Within 3 business days</strong> of a free 30-minute discovery call. The call is no-obligation; the quote is a written fixed monthly fee &mdash; the exact number before you commit." },
    { q: "What does the monthly bookkeeping fee include?", a: "Every tier includes monthly reconciliation of all in-scope accounts, transaction categorization, monthly financial statements, a named-operator close, unlimited questions with no hourly meter, and a free year-end CPA-ready handoff. Tax filing is your CPA&rsquo;s scope." },
  ],
  faq: [
    { q: "How much does monthly bookkeeping cost?", a: "Monthly bookkeeping runs <strong>$400&ndash;$2,500+ per month</strong> as a fixed monthly fee against a written scope &mdash; no hourly billing. It falls into three tiers: Essentials $400&ndash;$700/mo, Standard $700&ndash;$1,400/mo, and Complex $1,400&ndash;$2,500+/mo. It is always a range; your exact fixed fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "What moves me from one tier to the next?", a: "Four factors: monthly transaction volume, the number of bank and credit-card accounts reconciled, whether payroll is in scope, and the number of legal entities &mdash; each entity is its own file and close. The free discovery call surfaces these, and the written scope reflects exactly where you land. Your industry or revenue alone doesn&rsquo;t set the price." },
    { q: "Why isn&rsquo;t bookkeeping billed by the hour?", a: "The monthly close is the same shape every month, so hourly billing just makes the most predictable line on your books swing with someone else&rsquo;s pace. TechBrot prices it as a fixed monthly fee against a written scope &mdash; you know the number before the first close and it doesn&rsquo;t move month to month. If your business genuinely changes the fee is re-quoted and re-approved in writing first." },
    { q: "Can I get an exact price without a call?", a: "No &mdash; and any firm that quotes a single bookkeeping price sight-unseen is guessing. The published figures are real canonical ranges, but your exact tier depends on your volume, accounts, payroll, and entities. The 30-minute discovery call is free and no-obligation, and your exact fixed fee follows in writing within 3 business days." },
    { q: "Does the monthly fee include tax filing?", a: "No. The monthly bookkeeping fee covers operational accounting and CPA-ready books; tax filing and IRS representation are handled by your CPA or EA and are not part of TechBrot&rsquo;s scope. Recurring bookkeeping does include a year-end CPA-ready handoff at no extra cost." },
    { q: "What if my books are behind before I start?", a: "Getting current is one-time work, priced separately from the recurring monthly fee &mdash; that&rsquo;s a cleanup or catch-up engagement, quoted on its own written scope. Once the books are current, the recurring monthly tier takes over. See the cleanup pricing page for those ranges." },
    { q: "Is there a long-term contract?", a: "No long-term lock-in. Recurring monthly bookkeeping runs month to month against the written scope and can be ended on the agreement&rsquo;s terms. The fixed monthly fee is the agreement &mdash; there&rsquo;s no hourly billing and no surprise invoices." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      const tierOffers = TIERS.map((t) => ({
        "@type": "Offer",
        name: "Monthly Bookkeeping — " + stripTags(t.name),
        category: "Recurring fixed-fee monthly close",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: stripTags(t.range) + " · fixed monthly fee, written scope before work begins, no hourly billing",
        },
        availability: "https://schema.org/InStock",
      }));
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/pricing/bookkeeping/#webpage",
            url: "https://techbrot.com/pricing/bookkeeping/",
            name: "Monthly Bookkeeping Cost & Pricing — Fixed-Fee Tiers",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#pbk-tldr-body", "#pbk-ai-summary"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/pricing/bookkeeping/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://techbrot.com/pricing/" },
              { "@type": "ListItem", position: 3, name: "Bookkeeping", item: "https://techbrot.com/pricing/bookkeeping/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/pricing/bookkeeping/#service",
            name: "Monthly Bookkeeping Pricing",
            serviceType: "Recurring fixed-fee monthly bookkeeping",
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", audienceType: "U.S. small and mid-sized businesses" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "OfferCatalog",
              name: "Monthly bookkeeping fixed-fee tiers",
              itemListElement: tierOffers,
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/pricing/bookkeeping/#faq",
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

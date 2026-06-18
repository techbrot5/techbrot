/* /tools/bookkeeping-cost-calculator/ — NEW interactive type PROOF (round 83).
 * tier: t-mofu (tool variant) · chrome: full · callBar: true.
 * HONESTY CONTRACT (founder, round 83): canonical pricing ONLY — every band
 * is a slice of the live /pricing/ monthly-bookkeeping range $400–$2,500+/mo
 * (== blueprint Sheet 0). The tool outputs a RANGE, never a single number,
 * and never a binding quote — it always hands off to the free discovery call
 * + written fixed-fee scope. No fabricated outputs, no precision we can't back.
 * The five inputs are the exact range-factors named on /pricing/ (transaction
 * volume, accounts, payroll, entities, multi-state sales tax). The same `model`
 * object renders the <select>s AND is dumped to #calc-model for tb-calc.js —
 * one source of truth, server markup and client logic can't drift. */

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

// The interactive model — single source of truth (njk selects + tb-calc.js).
// Scoring = sum of the chosen option values across the five inputs (max 12).
// Bands are sub-ranges of the canonical $400–$2,500+/mo published range; the
// first band whose `upTo` is >= the score wins. NOTHING here exceeds the
// canonical ceiling, and the top band carries the canonical "+" tail.
const MODEL = {
  currency: "USD",
  inputs: [
    {
      id: "txn", label: "Monthly transactions",
      help: "bank + card lines a month",
      options: [
        { v: 0, label: "Under 50 / month" },
        { v: 1, label: "50&ndash;150 / month" },
        { v: 2, label: "150&ndash;400 / month" },
        { v: 3, label: "400+ / month" },
      ],
    },
    {
      id: "accounts", label: "Bank &amp; credit-card accounts",
      help: "reconciled monthly",
      options: [
        { v: 0, label: "1&ndash;2 accounts" },
        { v: 1, label: "3&ndash;5 accounts" },
        { v: 2, label: "6&ndash;10 accounts" },
        { v: 3, label: "More than 10" },
      ],
    },
    {
      id: "payroll", label: "Payroll",
      options: [
        { v: 0, label: "No payroll" },
        { v: 1, label: "1&ndash;5 employees" },
        { v: 2, label: "6&ndash;20 employees" },
        { v: 3, label: "20+ employees" },
      ],
    },
    {
      id: "entities", label: "Legal entities / company files",
      options: [
        { v: 0, label: "One" },
        { v: 1, label: "Two" },
        { v: 2, label: "Three or more" },
      ],
    },
    {
      id: "salestax", label: "Multi-state sales tax",
      help: "nexus in more than one state",
      options: [
        { v: 0, label: "No / single state" },
        { v: 1, label: "Yes, multiple states" },
      ],
    },
  ],
  // bands inside the canonical $400–$2,500+/mo range
  bands: [
    { upTo: 2, name: "Starter books", lo: 400, hi: 700, plus: false, display: "$400&ndash;$700",
      why: "Light transaction volume, a couple of accounts, and a single set of books." },
    { upTo: 5, name: "Growing business", lo: 700, hi: 1200, plus: false, display: "$700&ndash;$1,200",
      why: "Steady volume, a handful of accounts, often a small payroll &mdash; a fuller monthly close." },
    { upTo: 8, name: "Established operation", lo: 1200, hi: 1800, plus: false, display: "$1,200&ndash;$1,800",
      why: "Heavier volume, several accounts, payroll, or a second entity &mdash; more to reconcile and review." },
    { upTo: 99, name: "Complex / multi-entity", lo: 1800, hi: 2500, plus: true, display: "$1,800&ndash;$2,500+",
      why: "High volume, many accounts, larger payroll, multiple entities, or multi-state sales tax." },
  ],
};

module.exports = {
  model: MODEL,
  nextCards: [
    { name: "Monthly bookkeeping", body: "What the recurring engagement actually includes &mdash; the monthly close, the financial package, and the named operator who owns your books.", cta: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { name: "Full pricing", body: "Every service and its real fixed-fee range &mdash; cleanup, catch-up, QuickBooks setup, migration, payroll, sales tax, and fractional CFO.", cta: "See all pricing", href: "/pricing/" },
    { name: "Behind on the books?", body: "If the monthly number isn&rsquo;t the question and you&rsquo;re months or years behind, cleanup and catch-up are priced separately as one-time projects.", cta: "Cleanup &amp; catch-up", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
  ],
  aiSummary: [
    { q: "How much does monthly bookkeeping cost?", a: "TechBrot monthly bookkeeping is a <strong>fixed monthly fee of $400&ndash;$2,500+/month</strong> against a written scope, with no hourly billing. Most small businesses with light volume land in the <strong>$400&ndash;$700</strong> range; growing businesses with payroll typically sit at <strong>$700&ndash;$1,200</strong>; established and multi-entity operations run higher. The exact fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "What makes monthly bookkeeping cost more?", a: "Five factors: <strong>monthly transaction volume, the number of bank and credit-card accounts reconciled, payroll, the number of legal entities, and multi-state sales tax</strong>. Each adds reconciliation and review to the monthly close, which moves the fixed fee up the published range. The calculator scores these five factors to place you in a band." },
    { q: "Is this calculator a quote?", a: "No. It is an <strong>estimate built from TechBrot&rsquo;s published pricing</strong> to set expectations &mdash; a realistic range for books like yours, never a binding number. A five-question form can&rsquo;t see your actual file. The real fixed fee is set after a ProAdvisor reviews your books on a free discovery call and is always delivered in writing before any work begins." },
    { q: "Does the estimate include cleanup or catch-up?", a: "No. This tool estimates the <strong>ongoing monthly fee only</strong>. If your books are behind or out of order, cleanup ($1,500&ndash;$15,000+) and catch-up ($2,000&ndash;$20,000+) are separate one-time fixed-fee projects, priced on how many months are involved and the severity of the issues." },
    { q: "Is the discovery call free?", a: "Yes. The 30-minute discovery call is <strong>free and no-obligation</strong>. A Certified ProAdvisor reviews your situation, recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. If TechBrot isn&rsquo;t the right fit, we say so honestly." },
  ],
  faq: [
    { q: "Is this calculator a real quote?", a: "No &mdash; and we&rsquo;re explicit about that. It&rsquo;s an estimate drawn from TechBrot&rsquo;s published $400&ndash;$2,500+/month monthly-bookkeeping pricing, meant to put you in a realistic range. A five-question form can&rsquo;t see your actual QuickBooks file, so it can&rsquo;t produce an exact fee. Your real fixed fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "How does the calculator decide my range?", a: "It scores five factors &mdash; transaction volume, number of bank and credit-card accounts, payroll, number of entities, and whether you owe multi-state sales tax &mdash; and maps the total to one of four bands inside our published range. More moving parts mean more monthly reconciliation and review, which moves the estimate up the range. The bands are shown in full on this page; there&rsquo;s no hidden math." },
    { q: "Why show a range instead of one number?", a: "Because an honest five-question estimate is a range, not a point. Two businesses with the same transaction count can need very different work depending on how clean the file is, how the chart of accounts is built, and what the close has to produce. We&rsquo;d rather show the realistic band and confirm the exact fee after a ProAdvisor sees your books than invent false precision." },
    { q: "Does the monthly fee include tax filing?", a: "No. TechBrot delivers operational bookkeeping and CPA-ready books; tax filing and IRS representation are handled by your CPA or EA and aren&rsquo;t part of the monthly fee. Recurring engagements include a year-end CPA handoff at no extra cost." },
    { q: "What if my books are behind?", a: "Then the monthly fee isn&rsquo;t your first question. Catching up or cleaning up historical books is separate one-time work &mdash; cleanup runs $1,500&ndash;$15,000+ and catch-up $2,000&ndash;$20,000+, priced on how far behind you are and the severity of the issues. Once the books are current, the monthly fee this tool estimates takes over." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/bookkeeping-cost-calculator/#webpage",
            url: "https://techbrot.com/tools/bookkeeping-cost-calculator/",
            name: "Bookkeeping Cost Calculator",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#bk-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/bookkeeping-cost-calculator/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Bookkeeping Cost Calculator", item: "https://techbrot.com/tools/bookkeeping-cost-calculator/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/tools/bookkeeping-cost-calculator/#service",
            name: "Monthly bookkeeping",
            serviceType: "Recurring fixed-fee monthly bookkeeping",
            areaServed: { "@type": "Country", name: "United States" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: 400,
                description: "$400–$2,500+/month · fixed monthly fee, written scope before work begins, no hourly billing",
              },
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/bookkeeping-cost-calculator/#faq",
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

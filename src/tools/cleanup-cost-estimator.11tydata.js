/* /tools/cleanup-cost-estimator/ — band estimator (round 84, Wave 1).
 * Same approved pattern + island as the bookkeeping calculator. HONESTY:
 * canonical pricing ONLY — bands are slices of the live /pricing/ cleanup
 * ($1,500–$15,000+) and catch-up ($2,000–$20,000+) ranges (== Sheet 0). The
 * model CANNOT produce a value outside those published ranges; output is a
 * RANGE never a point, framed as an estimate that hands off to the free
 * discovery call + written fixed-fee scope. No fabricated outputs. */

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

const MODEL = {
  currency: "USD",
  inputs: [
    {
      id: "behind", label: "How far behind are the books?",
      options: [
        { v: 0, label: "Current &mdash; just messy / needs tidying" },
        { v: 1, label: "1&ndash;3 months behind" },
        { v: 2, label: "4&ndash;12 months behind" },
        { v: 3, label: "Over a year / multiple years" },
      ],
    },
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
      options: [
        { v: 0, label: "1&ndash;2 accounts" },
        { v: 1, label: "3&ndash;5 accounts" },
        { v: 2, label: "6&ndash;10 accounts" },
        { v: 3, label: "More than 10" },
      ],
    },
    {
      id: "recon", label: "Reconciliation state",
      options: [
        { v: 0, label: "Reconciled &mdash; just tidying" },
        { v: 1, label: "Partially reconciled" },
        { v: 2, label: "Never reconciled / not sure" },
      ],
    },
    {
      id: "payroll", label: "Payroll in the period",
      options: [
        { v: 0, label: "No payroll" },
        { v: 1, label: "Yes, payroll to sort out" },
      ],
    },
  ],
  bands: [
    { upTo: 2, name: "Light cleanup", lo: 1500, hi: 3500, plus: false, display: "$1,500&ndash;$3,500",
      why: "Books are mostly current and just need tidying before the monthly close takes over." },
    { upTo: 5, name: "Moderate cleanup / catch-up", lo: 3500, hi: 7500, plus: false, display: "$3,500&ndash;$7,500",
      why: "A few months behind or partially reconciled, with a moderate transaction load to untangle." },
    { upTo: 8, name: "Significant project", lo: 7500, hi: 15000, plus: false, display: "$7,500&ndash;$15,000",
      why: "Many months behind, several accounts, never reconciled &mdash; real forensic work." },
    { upTo: 99, name: "Major / multi-year", lo: 15000, hi: 20000, plus: true, display: "$15,000&ndash;$20,000+",
      why: "A year or more of unreconciled, high-volume history across many accounts, often with payroll." },
  ],
};

module.exports = {
  model: MODEL,
  nextCards: [
    { name: "QuickBooks cleanup", body: "What a cleanup engagement actually fixes &mdash; reconciliation, the chart of accounts, miscategorized history &mdash; and how the fixed fee is scoped.", cta: "QuickBooks cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/" },
    { name: "Catch-up bookkeeping", body: "If the books were never done for months or years, catch-up builds them from scratch as a one-time project before monthly work begins.", cta: "Catch-up bookkeeping", href: "/accounting/bookkeeping/catch-up-bookkeeping/" },
    { name: "What happens after", body: "Once the books are current, monthly bookkeeping takes over. Estimate the ongoing fee with the bookkeeping cost calculator.", cta: "Bookkeeping cost calculator", href: "/tools/bookkeeping-cost-calculator/" },
  ],
  aiSummary: [
    { q: "How much does a QuickBooks cleanup cost?", a: "TechBrot cleanup is a <strong>one-time fixed fee of $1,500&ndash;$15,000+</strong>. Light tidying of mostly-current books lands near the bottom; deep, never-reconciled, high-volume files run higher. Catch-up (books not done for months or years) is <strong>$2,000&ndash;$20,000+</strong>. The exact fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "What&rsquo;s the difference between cleanup and catch-up?", a: "<strong>Cleanup</strong> fixes books that exist but are wrong &mdash; unreconciled accounts, miscategorized transactions, a broken chart of accounts. <strong>Catch-up</strong> builds books for periods that were never done. Many engagements are both. Both are one-time fixed-fee projects, separate from ongoing monthly bookkeeping." },
    { q: "What drives the price of a cleanup?", a: "Five things: <strong>how far behind you are, monthly transaction volume, the number of accounts, how reconciled the file is, and payroll</strong>. A deeper backlog and a worse reconciliation state mean more forensic untangling, which moves the fee up the published range. The estimator scores these to place you in a band." },
    { q: "Is this estimate a quote?", a: "No. It&rsquo;s an <strong>estimate from TechBrot&rsquo;s published pricing</strong>. Cleanup cost depends on what we find when we open the file, which a five-question form can&rsquo;t see. The real fixed fee is set after a ProAdvisor reviews your file on a free discovery call, and is always delivered in writing before any work begins." },
    { q: "Do I need a cleanup before monthly bookkeeping?", a: "Often, yes. If the existing books are wrong or incomplete, a one-time cleanup or catch-up gets them to a correct baseline first; then ongoing monthly bookkeeping ($400&ndash;$2,500+/month) keeps them there. The discovery call determines whether you need cleanup, catch-up, or both." },
  ],
  faq: [
    { q: "Is this estimator a real quote?", a: "No &mdash; and we&rsquo;re explicit about it. It&rsquo;s an estimate drawn from TechBrot&rsquo;s published <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/\">cleanup</a> ($1,500&ndash;$15,000+) and <a href=\"/accounting/bookkeeping/catch-up-bookkeeping/\">catch-up</a> ($2,000&ndash;$20,000+) pricing, meant to put you in a realistic range. Cleanup cost depends on what we find inside the file, so the exact fixed fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "How does the estimator decide my range?", a: "It scores five drivers &mdash; how far behind you are, transaction volume, number of accounts, reconciliation state, and payroll &mdash; and maps the total to one of four bands inside our published ranges. A deeper backlog and a worse reconciliation state move the estimate up. The bands are shown in full on this page; there&rsquo;s no hidden math." },
    { q: "Why is cleanup priced as a range, not one number?", a: "Because cleanup is forensic work and the real scope only becomes clear once we open the file. Two businesses that are &lsquo;six months behind&rsquo; can need very different work depending on how the file was kept. We show the realistic band and confirm the exact fee after a ProAdvisor reviews your books, rather than invent false precision." },
    { q: "Is cleanup a one-time cost or monthly?", a: "One-time. Cleanup and catch-up are fixed-fee projects with defined start and completion dates. Once your books are current and correct, ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a> ($400&ndash;$2,500+/month) takes over &mdash; that&rsquo;s a separate recurring engagement." },
    { q: "Does the cleanup fee include tax filing?", a: "No. TechBrot delivers operational bookkeeping and CPA-ready books; tax filing and IRS representation are handled by your CPA or EA. A cleanup gets your file into a state your CPA can actually work from, and recurring engagements include a year-end CPA handoff at no extra cost." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/cleanup-cost-estimator/#webpage",
            url: "https://techbrot.com/tools/cleanup-cost-estimator/",
            name: "QuickBooks Cleanup Cost Estimator",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#cleanup-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/cleanup-cost-estimator/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Cleanup Cost Estimator", item: "https://techbrot.com/tools/cleanup-cost-estimator/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/tools/cleanup-cost-estimator/#service",
            name: "QuickBooks cleanup & catch-up bookkeeping",
            serviceType: "One-time fixed-fee bookkeeping cleanup and catch-up",
            areaServed: { "@type": "Country", name: "United States" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: 1500,
                description: "Cleanup $1,500–$15,000+, catch-up $2,000–$20,000+ · one-time fixed fee, written scope before work begins",
              },
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/cleanup-cost-estimator/#faq",
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

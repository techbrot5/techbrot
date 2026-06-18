/* /tools/business-budget-template/ — formula worksheet (round 84, Wave 2).
 * Built as an HONEST interactive worksheet, NOT a fake downloadable file
 * (founder ruling). Pure arithmetic on the USER's own numbers (tb-formula.js,
 * formula=budget): total expenses, surplus/deficit, net margin. No firm
 * pricing, no advice, no fabricated output. Routes to an accounting/advisory call. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&minus;/g, "−").replace(/&times;/g, "×")
    .replace(/&rarr;/g, "→").replace(/&middot;/g, "·")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();
}

module.exports = {
  nextCards: [
    { name: "Budgeting & forecasting", body: "Turn a one-month worksheet into a real budget tracked against actuals and rolled forward as a forecast.", cta: "Budgeting & forecasting", href: "/accounting/advisory/budgeting-forecasting/" },
    { name: "Monthly bookkeeping", body: "A budget is only as honest as the books under it. Accurate monthly bookkeeping puts every transaction in the right bucket.", cta: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { name: "Break-even calculator", body: "See how many sales a month it takes to cover the fixed costs in your budget.", cta: "Break-even calculator", href: "/tools/breakeven-calculator/" },
  ],
  aiSummary: [
    { q: "How do you build a simple business budget?", a: "Start with monthly revenue, then total your costs in three buckets &mdash; cost of goods/services, fixed operating costs, and other/variable costs. <strong>Surplus or deficit = revenue − total expenses</strong>, and net margin = surplus ÷ revenue. This worksheet does that live on your own numbers as a starting structure." },
    { q: "What&rsquo;s the difference between fixed and variable costs?", a: "<strong>Fixed costs</strong> stay roughly level month to month regardless of sales &mdash; rent, salaries, software, insurance. <strong>Variable costs</strong> move with activity &mdash; materials, marketing, travel, supplies. Cost of goods is the direct cost of delivering what you sell. Bucketing costs correctly is what makes a budget meaningful." },
    { q: "What is a good net margin?", a: "It varies widely by industry &mdash; a services firm and a product reseller have very different healthy margins &mdash; so there&rsquo;s no single right number. What matters more is the trend: whether margin is stable or improving against your own history. A Certified ProAdvisor can benchmark yours in context." },
    { q: "Is this worksheet financial advice?", a: "No. It&rsquo;s a model of the numbers you enter, run entirely in your browser, and it&rsquo;s a single-month snapshot. A real budget is tracked against actuals each month and forecast forward. Use it to frame the conversation, then book a free discovery call for a proper budgeting model." },
    { q: "Why does my budget need accurate books?", a: "A budget built on guessed numbers is worse than none &mdash; it gives false confidence. When transactions are categorized correctly and reconciled, your cost buckets are real and the surplus the worksheet shows is trustworthy. That accuracy is what monthly bookkeeping delivers." },
  ],
  faq: [
    { q: "Is this a downloadable template?", a: "No &mdash; and we&rsquo;d rather be straight about that than offer a file we don&rsquo;t maintain. It&rsquo;s a live worksheet: you enter your numbers and it calculates total expenses, surplus or deficit, and net margin instantly in your browser. If you want a full budget you can keep and track, a Certified ProAdvisor builds that with you on your actual books." },
    { q: "Does this store or send my numbers?", a: "No. The calculation runs entirely in your browser using only the figures you type. Nothing is transmitted or stored anywhere unless you choose to book a call and tell us yourself. You can use it completely anonymously." },
    { q: "How detailed should my expense buckets be?", a: "For a quick monthly check, three buckets &mdash; cost of goods, fixed, and other/variable &mdash; are enough to see whether the month works. A working budget breaks those into real categories that match your chart of accounts, so you can track each line against actuals. That fuller structure is part of a budgeting engagement." },
    { q: "How is this different from a forecast?", a: "A budget is your plan for a period; a forecast is your best current estimate of how the period will actually turn out, updated as real numbers come in. This worksheet is a single-month budget snapshot. Rolling it forward and tracking against actuals is forecasting &mdash; which a fractional CFO or advisory engagement provides." },
    { q: "How can TechBrot help beyond the worksheet?", a: "We keep your books accurate so your budget buckets are real, and our budgeting-and-forecasting and fractional CFO engagements build full, tracked budgets and forward forecasts. Book a free discovery call to talk it through." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/business-budget-template/#webpage",
            url: "https://techbrot.com/tools/business-budget-template/",
            name: "Small Business Budget Worksheet",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#budget-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/business-budget-template/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Business Budget Worksheet", item: "https://techbrot.com/tools/business-budget-template/" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/business-budget-template/#faq",
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

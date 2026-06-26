/* /tools/breakeven-calculator/ — formula calculator (round 84, Wave 2).
 * Pure arithmetic on the USER's own numbers (tb-formula.js, formula=breakeven).
 * No firm pricing, no advice, no fabricated output; zero/negative contribution
 * margin is handled honestly ("no break-even"). Routes to a fractional-CFO call. */

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
    { name: "Fractional CFO", body: "Break-even is one input into pricing, margin, and cash strategy. A fractional CFO turns the numbers into decisions &mdash; by application, $3,000&ndash;$8,000+/month.", cta: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/" },
    { name: "Cash runway calculator", body: "Know how long your cash lasts at your current burn rate &mdash; the companion question to break-even.", cta: "Cash runway calculator", href: "/tools/cash-runway-calculator/" },
    { name: "Budgeting & forecasting", body: "Build a budget and a forward forecast so break-even, cash, and growth targets all line up.", cta: "Budgeting & forecasting", href: "/accounting/advisory/budgeting-forecasting/" },
  ],
  aiSummary: [
    { q: "How do you calculate break-even?", a: "<strong>Break-even sales = monthly fixed costs ÷ contribution margin per sale</strong>, where contribution margin = price per sale − variable cost per sale. Multiply break-even sales by price for break-even revenue. This calculator does that on your own numbers and rounds up to whole sales." },
    { q: "What is contribution margin?", a: "The money each sale contributes toward fixed costs after covering its own variable cost &mdash; <strong>price minus variable cost per sale</strong>. If contribution margin is zero or negative, there is no break-even at any volume, because each additional sale loses money rather than helping cover fixed costs." },
    { q: "What counts as a fixed vs variable cost?", a: "<strong>Fixed costs</strong> stay roughly the same regardless of sales &mdash; rent, salaries, software, insurance. <strong>Variable costs</strong> rise with each sale &mdash; materials, payment processing fees, shipping, per-unit labor. Getting this split right is what makes a break-even number meaningful." },
    { q: "Is this calculator financial advice?", a: "No. It&rsquo;s a model of the numbers you enter, run entirely in your browser. Real break-even analysis accounts for product mix, seasonality, and step costs. Use it as a fast sanity check, then book a free discovery call if you want a Certified ProAdvisor to build a proper model." },
    { q: "What if my break-even looks impossibly high?", a: "That usually signals thin contribution margin &mdash; your price is too close to your variable cost &mdash; or fixed costs that are too high for the price point. Both are fixable, and both are exactly what a fractional CFO engagement works on: pricing, margin, and cost structure." },
  ],
  faq: [
    { q: "Does this calculator store or send my numbers?", a: "No. The calculation runs entirely in your browser using only the figures you type. Nothing is transmitted or stored anywhere unless you choose to book a call and tell us yourself. You can use it completely anonymously." },
    { q: "Why did it say &lsquo;no break-even&rsquo;?", a: "Because your price per sale didn&rsquo;t cover its own variable cost &mdash; contribution margin was zero or negative. When that&rsquo;s true, selling more units increases your loss, so there is no volume at which you break even. The fix is a higher price or a lower variable cost per sale, not more sales." },
    { q: "Is this single-product break-even?", a: "Yes. It models one price and one variable cost. If you sell a mix of products at different margins, the real break-even depends on your sales mix, which this simple tool can&rsquo;t capture. A <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> can build a weighted, multi-product model for you." },
    { q: "How accurate is the result?", a: "It&rsquo;s exact for the inputs you give &mdash; it&rsquo;s just arithmetic. Its usefulness depends on how accurately you split fixed vs variable costs and whether your costs are truly linear. Treat it as a sanity check on your own numbers, not a forecast or advice." },
    { q: "How can TechBrot help beyond the calculator?", a: "We keep your books accurate so the inputs to a calculation like this are real, and our fractional CFO engagement builds full unit-economics, <a href=\"/accounting/advisory/budgeting-forecasting/\">budgeting</a>, and <a href=\"/accounting/advisory/cash-flow-management/\">cash-flow</a> models on top of clean data. Book a free discovery call to talk it through." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/breakeven-calculator/#webpage",
            url: "https://techbrot.com/tools/breakeven-calculator/",
            name: "Break-Even Calculator",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#breakeven-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/breakeven-calculator/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Break-Even Calculator", item: "https://techbrot.com/tools/breakeven-calculator/" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/breakeven-calculator/#faq",
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

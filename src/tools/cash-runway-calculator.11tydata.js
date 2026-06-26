/* /tools/cash-runway-calculator/ — formula calculator (round 84, Wave 2).
 * Pure arithmetic on the USER's own numbers (tb-formula.js, formula=runway).
 * No firm pricing, no advice, no fabricated output; zero/negative burn handled
 * honestly ("no runway limit"). Routes to a fractional-CFO call. */

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
    { name: "Cash flow management", body: "Runway is a snapshot; cash-flow management keeps it healthy &mdash; timing, collections, and a rolling forecast so cash never surprises you.", cta: "Cash flow management", href: "/accounting/advisory/cash-flow-management/" },
    { name: "Fractional CFO", body: "A fractional CFO builds a forward cash forecast and a plan to extend runway &mdash; by application, $3,000&ndash;$8,000+/month.", cta: "Fractional CFO", href: "/accounting/advisory/fractional-cfo/" },
    { name: "Break-even calculator", body: "Pair runway with break-even: how many sales a month it takes to stop burning cash in the first place.", cta: "Break-even calculator", href: "/tools/breakeven-calculator/" },
  ],
  aiSummary: [
    { q: "How do you calculate cash runway?", a: "<strong>Runway in months = cash on hand ÷ average monthly net burn</strong>, where net burn is monthly expenses minus monthly revenue. If revenue exceeds expenses, net burn is zero or negative and there is no runway limit &mdash; you&rsquo;re not running cash down. This calculator does that on your own numbers." },
    { q: "What is &lsquo;net burn&rsquo;?", a: "The cash your business consumes each month after revenue &mdash; <strong>monthly expenses minus monthly revenue</strong>. Use an average over a few representative months that reflects real cash movements, not a single best or worst month and not accrual timing. An honest burn number is what makes the runway figure useful." },
    { q: "What&rsquo;s a healthy amount of runway?", a: "It depends on the business, but many advisors treat under ~6 months as a signal to act and aim to keep 12+ months for a growing company. The right target depends on how predictable your revenue is and how fast you can change spending &mdash; which is a fractional CFO conversation, not a fixed rule." },
    { q: "Is this calculator financial advice?", a: "No. It&rsquo;s a model of the two numbers you enter, run entirely in your browser. It assumes today&rsquo;s burn holds steady, which real life doesn&rsquo;t. Use it as a fast sanity check, then book a free discovery call if you want a Certified ProAdvisor to build a real forward forecast." },
    { q: "How do I extend my runway?", a: "Three levers: increase revenue, cut burn, or raise cash. Which one to pull &mdash; and how &mdash; depends on your unit economics and growth stage. Accurate books make the trade-offs visible, and a fractional CFO models them; that&rsquo;s exactly what the discovery call is for." },
  ],
  faq: [
    { q: "Does this calculator store or send my numbers?", a: "No. The calculation runs entirely in your browser using only the figures you type. Nothing is transmitted or stored anywhere unless you choose to book a call and tell us yourself. You can use it completely anonymously." },
    { q: "Why did it say &lsquo;no runway limit&rsquo;?", a: "Because the net burn you entered was zero or negative &mdash; your revenue covers or exceeds your expenses, so you&rsquo;re not drawing down cash. There&rsquo;s no finite runway in that case. If your situation changes and you start burning cash, runway = cash ÷ monthly burn." },
    { q: "Should burn include one-time costs?", a: "For a steady-state runway figure, use a normal recurring burn and treat big one-offs separately, or you&rsquo;ll understate your true runway. The cleaner approach is a proper rolling forecast that schedules known one-time items &mdash; which is what a <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> builds." },
    { q: "How accurate is this?", a: "It&rsquo;s exact arithmetic on your inputs, but it&rsquo;s a flat snapshot &mdash; it assumes today&rsquo;s burn holds. Real runway moves with hiring, seasonality, and growth. Treat it as a sanity check on your own numbers, not a forecast or advice." },
    { q: "How can TechBrot help beyond the number?", a: "We keep your books accurate so burn and cash are real figures, and our <a href=\"/accounting/advisory/cash-flow-management/\">cash-flow</a> and fractional CFO engagements build forward forecasts that show runway changing over time. Book a free discovery call to talk it through." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/cash-runway-calculator/#webpage",
            url: "https://techbrot.com/tools/cash-runway-calculator/",
            name: "Cash Runway Calculator",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#runway-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/cash-runway-calculator/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Cash Runway Calculator", item: "https://techbrot.com/tools/cash-runway-calculator/" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/cash-runway-calculator/#faq",
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

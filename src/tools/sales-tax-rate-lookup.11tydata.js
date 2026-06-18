/* /tools/sales-tax-rate-lookup/ — call-based page, NOT a live calculator
 * (founder ruling, round 84). Sales tax rates change constantly and are
 * address-specific, so a static/live rate box would be wrong as often as
 * right — a wrong rate is worse than none. The page explains why, teaches
 * rate + nexus honestly, and routes to a free call where a ProAdvisor pulls
 * the exact current rate from authoritative sources. No JS, no fabricated
 * numbers. General information, not tax advice. */

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

module.exports = {
  factors: [
    { name: "Exact location of the sale", body: "The combined rate is the sum of state, county, city, and any special-district rates at the precise ship-to or point-of-sale address. A single ZIP code can contain several different combined rates &mdash; location, not ZIP, decides." },
    { name: "What you&rsquo;re selling", body: "Taxability varies by product and service: groceries, clothing, software (SaaS), digital goods, and professional services are taxed differently from state to state. Two businesses at the same address can owe different amounts." },
    { name: "Where you have nexus", body: "You only collect in states where you have nexus &mdash; physical presence or economic activity above a state&rsquo;s threshold. Economic-nexus rules mean you can owe in states you&rsquo;ve never visited, purely from sales volume." },
    { name: "When the sale happens", body: "Rates and rules change on jurisdictions&rsquo; own schedules through the year. The correct rate is the one in effect on the transaction date &mdash; which is why a number published months ago can&rsquo;t be trusted blindly." },
  ],
  nextCards: [
    { name: "Sales tax compliance", body: "Ongoing nexus monitoring, registration, collection setup, and multi-state filing &mdash; the full service, $250&ndash;$1,500+/month plus a one-time nexus review.", cta: "Sales tax compliance", href: "/accounting/sales-tax-compliance/" },
    { name: "Multi-state payroll", body: "If you have employees across state lines, payroll and sales tax nexus often overlap. See how multi-state obligations are handled.", cta: "Multi-state payroll", href: "/quickbooks/payroll/multi-state/" },
    { name: "Monthly bookkeeping", body: "Accurate books make sales tax filing routine instead of a scramble &mdash; collected tax tracked correctly and ready to remit.", cta: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
  ],
  aiSummary: [
    { q: "What is my sales tax rate?", a: "There&rsquo;s no single answer without your exact address: the rate is the <strong>combined state, county, city, and special-district rate at the precise location of the sale</strong>, and one ZIP code can contain multiple rates. Rates also change through the year. The reliable way to get it is to pull the current rate for your specific address from an authoritative source &mdash; which a ProAdvisor will do with you on a free call." },
    { q: "Why not just use a ZIP code lookup?", a: "Because ZIP codes don&rsquo;t map cleanly to tax jurisdictions &mdash; a single ZIP can span several combined rates, and a ZIP-only lookup can return a rate that&rsquo;s close but wrong. Under-collecting even slightly creates liability and audit exposure, so the correct rate is determined by full address and transaction date, not ZIP alone." },
    { q: "What is sales tax nexus?", a: "Nexus is the connection that obligates you to register, collect, and remit sales tax in a state &mdash; either <strong>physical presence</strong> (office, employees, inventory) or <strong>economic nexus</strong> (sales above a state&rsquo;s dollar or transaction threshold). Since the 2018 <em>Wayfair</em> decision, economic nexus means you can owe sales tax in states where you have no physical presence at all." },
    { q: "Do I have to collect sales tax in every state?", a: "No &mdash; only in states where you have nexus. Determining that is the real work: it depends on where your customers are, your sales volume, and what you sell. A nexus review maps exactly where you&rsquo;re obligated so you collect where you must and don&rsquo;t over-collect where you needn&rsquo;t." },
    { q: "How does TechBrot help with sales tax?", a: "On a free call, a Certified ProAdvisor pulls your exact current rates from authoritative sources and reviews your nexus footprint. Our sales tax compliance engagement then handles registration, collection setup, and multi-state filing. We&rsquo;re an independent firm &mdash; not Intuit &mdash; and filing is coordinated with your CPA where needed." },
  ],
  faq: [
    { q: "Why doesn&rsquo;t this page have a rate calculator?", a: "Deliberately. Sales tax rates are address-specific and change throughout the year, so a static or ZIP-based box returns wrong answers often enough that it&rsquo;s a liability, not a help &mdash; and a wrong rate is worse than no rate. Instead we pull your exact, current rate from an authoritative source with you on a free call. It&rsquo;s the same honesty standard we hold everywhere on the site." },
    { q: "Where do correct rates come from?", a: "From the taxing jurisdictions themselves and the rate databases that track them at the address level, applied to the transaction date. A ProAdvisor looks up your specific locations against those sources so you&rsquo;re working from the rate actually in effect, not an approximation." },
    { q: "Is this tax advice?", a: "No &mdash; it&rsquo;s general information about how sales tax rates and nexus work. Your specific obligations depend on your footprint and what you sell, and rules change. We help you determine and set up correct collection and filing; formal tax advice and filing are coordinated with your CPA or EA." },
    { q: "How do I know if I have economic nexus somewhere?", a: "Each state sets its own threshold &mdash; commonly a dollar amount of sales or a number of transactions into that state in a year. If your sales into a state cross its threshold, you likely have economic nexus there even without a physical presence. A nexus review compares your actual sales by state against current thresholds." },
    { q: "What happens if I&rsquo;ve been collecting the wrong rate?", a: "It&rsquo;s fixable, and the sooner the better &mdash; under-collection becomes your liability, and over-collection has to be handled correctly too. A ProAdvisor can review what you&rsquo;ve been doing, identify exposure, and set up correct rates and filings going forward, coordinating any cleanup or voluntary-disclosure steps with your CPA." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/tools/sales-tax-rate-lookup/#webpage",
            url: "https://techbrot.com/tools/sales-tax-rate-lookup/",
            name: "Sales Tax Rate Lookup",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#salestax-lookup-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/sales-tax-rate-lookup/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Sales Tax Rate Lookup", item: "https://techbrot.com/tools/sales-tax-rate-lookup/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/tools/sales-tax-rate-lookup/#service",
            name: "Sales tax rate & nexus review",
            serviceType: "Sales tax rate lookup and nexus determination",
            areaServed: { "@type": "Country", name: "United States" },
            provider: { "@id": "https://techbrot.com/#organization" },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/sales-tax-rate-lookup/#faq",
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

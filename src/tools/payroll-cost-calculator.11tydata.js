/* /tools/payroll-cost-calculator/ — band estimator (round 84, Wave 1).
 * Same approved pattern + island. HONESTY: estimates TechBrot's MANAGEMENT
 * FEE only (not wages or payroll taxes — stated everywhere), as slices of the
 * canonical /pricing/ payroll-management range $150–$800+/mo (== Sheet 0).
 * Model cannot exceed the published range; output is a RANGE never a point;
 * hands off to the free discovery call + written fixed-fee scope. */

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
      id: "employees", label: "Employees on payroll",
      options: [
        { v: 0, label: "1&ndash;5 employees" },
        { v: 1, label: "6&ndash;20 employees" },
        { v: 2, label: "21&ndash;50 employees" },
        { v: 3, label: "More than 50" },
      ],
    },
    {
      id: "states", label: "States you run payroll in",
      help: "biggest driver",
      options: [
        { v: 0, label: "One state" },
        { v: 1, label: "2&ndash;3 states" },
        { v: 2, label: "4+ states" },
      ],
    },
    {
      id: "frequency", label: "Pay frequency",
      options: [
        { v: 0, label: "Monthly" },
        { v: 1, label: "Semi-monthly / bi-weekly" },
        { v: 2, label: "Weekly" },
      ],
    },
    {
      id: "contractors", label: "1099 contractors",
      options: [
        { v: 0, label: "None" },
        { v: 1, label: "A few" },
        { v: 2, label: "Many" },
      ],
    },
  ],
  bands: [
    { upTo: 2, name: "Single-state, small team", lo: 150, hi: 300, plus: false, display: "$150&ndash;$300",
      why: "A handful of employees on one pay schedule in a single state." },
    { upTo: 4, name: "Growing team", lo: 300, hi: 500, plus: false, display: "$300&ndash;$500",
      why: "More employees, a faster pay cycle, or a second state to stay compliant in." },
    { upTo: 6, name: "Multi-state", lo: 500, hi: 700, plus: false, display: "$500&ndash;$700",
      why: "Several states, more frequent runs, and contractor 1099s on top of W-2 payroll." },
    { upTo: 99, name: "Complex multi-state", lo: 700, hi: 800, plus: true, display: "$700&ndash;$800+",
      why: "A large team across many states with weekly runs and heavy contractor volume." },
  ],
};

module.exports = {
  model: MODEL,
  nextCards: [
    { name: "Payroll management", body: "What managed payroll includes &mdash; multi-state runs, tax filing and deposits, compliance, and reporting &mdash; and how the fixed monthly fee is scoped.", cta: "Payroll management", href: "/accounting/payroll-management/" },
    { name: "Multi-state payroll", body: "Running payroll across state lines is the biggest driver of complexity. See how nexus, registration, and reciprocity are handled.", cta: "Multi-state payroll", href: "/quickbooks/payroll/multi-state/" },
    { name: "Full pricing", body: "Every service and its real fixed-fee range &mdash; bookkeeping, cleanup, QuickBooks, payroll, sales tax, and fractional CFO.", cta: "See all pricing", href: "/pricing/" },
  ],
  aiSummary: [
    { q: "How much does it cost to have payroll managed?", a: "TechBrot payroll management is a <strong>fixed monthly fee of $150&ndash;$800+/month</strong>. A small single-state team lands near the bottom; large multi-state teams with weekly runs and contractors run higher. This is the <strong>management fee only</strong> &mdash; it does not include your employees&rsquo; wages or your payroll taxes. The exact fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "What does the payroll fee include &mdash; and not include?", a: "It includes calculating pay, filing and depositing payroll taxes, multi-state registration and compliance, and reporting. It does <strong>not</strong> include your wage bill or tax liabilities &mdash; those are your own costs and depend on what you pay your people. The fee is what TechBrot charges to run the process correctly." },
    { q: "What makes managed payroll cost more?", a: "Four factors: <strong>headcount, the number of states you run payroll in, pay frequency, and contractor 1099 volume</strong>. Multi-state compliance is the single biggest driver &mdash; each state adds registration and filing obligations. The calculator scores these four to place you in a band." },
    { q: "Is this estimate a quote?", a: "No. It&rsquo;s an <strong>estimate from TechBrot&rsquo;s published pricing</strong> for the management fee. A short form can&rsquo;t see your full setup, so the real fixed fee is set after a ProAdvisor reviews your situation on a free discovery call, and is always delivered in writing before any work begins." },
    { q: "Does TechBrot use QuickBooks Payroll?", a: "We&rsquo;re Certified ProAdvisors and commonly run payroll inside QuickBooks, but we&rsquo;re an independent firm, not Intuit. The right payroll platform is part of the discovery conversation; we manage the process and compliance whichever tool fits your business best." },
  ],
  faq: [
    { q: "Does this estimate include wages and payroll taxes?", a: "No &mdash; and that&rsquo;s an important distinction. This estimates only TechBrot&rsquo;s <strong>management fee</strong> ($150&ndash;$800+/month) to run your payroll. Your employees&rsquo; wages and your payroll tax liabilities are separate costs that depend entirely on what you pay your people; we don&rsquo;t and can&rsquo;t estimate those from a four-question form." },
    { q: "Is this a real quote?", a: "No. It&rsquo;s an estimate drawn from TechBrot&rsquo;s published payroll-management pricing, meant to put you in a realistic range. Your exact fixed fee is quoted in writing within 3 business days of a free discovery call, once a ProAdvisor has seen your headcount, states, and current setup." },
    { q: "Why does multi-state payroll cost more?", a: "Every state you run payroll in adds its own registration, tax filing, and compliance obligations &mdash; and the rules differ by state. Multi-state is the single biggest driver of the management fee, which is why the calculator weights it heavily. A single-state team is far simpler to run than the same headcount split across four states." },
    { q: "Why show a range instead of one number?", a: "Because two businesses with the same headcount can need different work depending on states, pay frequency, benefits, and how clean the existing setup is. We&rsquo;d rather show the realistic band and confirm the exact fee after a ProAdvisor reviews your situation than invent false precision." },
    { q: "Can payroll be bundled with bookkeeping?", a: "Yes &mdash; many clients have TechBrot run both, and the engagements are scoped together so the books and payroll stay in sync. You can estimate the monthly bookkeeping fee separately with the bookkeeping cost calculator; the discovery call scopes the combined engagement in writing." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/payroll-cost-calculator/#webpage",
            url: "https://techbrot.com/tools/payroll-cost-calculator/",
            name: "Payroll Service Cost Calculator",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#payroll-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/payroll-cost-calculator/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "Payroll Cost Calculator", item: "https://techbrot.com/tools/payroll-cost-calculator/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/tools/payroll-cost-calculator/#service",
            name: "Payroll management",
            serviceType: "Multi-state managed payroll (fixed monthly fee)",
            areaServed: { "@type": "Country", name: "United States" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: 150,
                description: "$150–$800+/month management fee (excludes wages and payroll taxes) · fixed fee, written scope before work begins",
              },
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/payroll-cost-calculator/#faq",
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

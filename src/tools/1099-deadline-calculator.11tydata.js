/* /tools/1099-deadline-calculator/ — factual date tool (round 86, Wave 3).
 * tb-select.js (formula=deadline) computes the published IRS rule: 1099-NEC +
 * W-2 due Jan 31 of the filing year, rolled to the next business day if that's
 * a weekend; 1099-MISC e-file due Mar 31. HONESTY: it states the rule, computes
 * the date deterministically in the browser, and ALWAYS tells the user to
 * confirm current-year dates on IRS.gov (deadlines can shift; penalties apply).
 * General information, not tax advice; filing is the CPA's, not TechBrot's. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—").replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→").replace(/&middot;/g, "·").replace(/&eacute;/g, "é")
    .replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();
}

module.exports = {
  nextCards: [
    { name: "Payroll management", body: "We run payroll and keep employee and contractor records clean through the year, so W-2s and 1099s file on time without a January scramble.", cta: "Payroll management", href: "/accounting/payroll-management/" },
    { name: "Monthly bookkeeping", body: "Accurate books mean contractor payments are categorized correctly all year &mdash; the foundation of correct 1099s.", cta: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { name: "Year-end payroll", body: "How year-end payroll, W-2s, and 1099s come together &mdash; and what to check before the January 31 deadline.", cta: "Year-end payroll", href: "/quickbooks/payroll/year-end/" },
  ],
  aiSummary: [
    { q: "When is Form 1099-NEC due?", a: "<strong>January 31</strong> of the year after the income was paid &mdash; both to the recipient and to the IRS. If January 31 falls on a Saturday, Sunday, or legal holiday, the deadline rolls to the next business day. For example, for tax year 2025 the deadline is in early February 2026 because January 31, 2026 is a Saturday. Always confirm on IRS.gov." },
    { q: "Is the W-2 deadline the same as 1099-NEC?", a: "Yes &mdash; <strong>W-2 forms are due January 31</strong> to employees and to the Social Security Administration, the same date as 1099-NEC. The weekend roll applies the same way. W-2 and 1099-NEC were aligned to January 31 specifically to help the IRS detect fraud earlier." },
    { q: "How is 1099-MISC different from 1099-NEC?", a: "Since 2020, non-employee compensation (contractor pay) goes on <strong>1099-NEC</strong>, due January 31. <strong>1099-MISC</strong> now covers rents, royalties, and other payments, and its IRS deadline is later &mdash; February 28 on paper or <strong>March 31 if e-filed</strong>. Recipient copies of 1099-MISC are generally due January 31." },
    { q: "What are the penalties for filing 1099s late?", a: "The IRS charges a penalty <strong>per form</strong> that increases the later you file, with a higher penalty for intentional disregard. Because it&rsquo;s per form, a stack of late 1099s adds up fast. Exact amounts are set annually by the IRS &mdash; check IRS.gov for current figures." },
    { q: "Does TechBrot file my 1099s?", a: "We keep the underlying records accurate &mdash; contractor payments categorized correctly and W-9s on file &mdash; and coordinate year-end so filing is clean. The returns themselves are filed by your CPA or through payroll/e-file; tax filing and IRS representation aren&rsquo;t part of TechBrot&rsquo;s scope." },
  ],
  faq: [
    { q: "Why did the deadline show a date in February, not January 31?", a: "Because January 31 fell on a weekend that year, and federal deadlines that land on a Saturday, Sunday, or legal holiday roll to the next business day. The calculator applies that roll automatically. For tax year 2025, for instance, January 31, 2026 is a Saturday, so the deadline moves to the following Monday." },
    { q: "Is this tax advice?", a: "No &mdash; it&rsquo;s general information about published federal filing deadlines. Tax deadlines can change, state rules differ, and your specific situation may carry other obligations. Always confirm current-year dates on IRS.gov, and rely on your CPA or EA for advice and filing." },
    { q: "Do I have to e-file 1099s?", a: "Once you file at or above the IRS information-return volume threshold, e-filing is required; below it you may still file on paper. The threshold has tightened in recent years, so check the current rule on IRS.gov. We can set your books and payroll up so e-filing is straightforward either way." },
    { q: "When should I send the W-9 and collect contractor info?", a: "Before you pay a contractor &mdash; not in January. Collecting a signed W-9 up front means you have the legal name, TIN, and address ready when 1099-NEC season arrives, and you avoid backup-withholding headaches. Keeping that current through the year is part of good bookkeeping." },
    { q: "What if I already missed the deadline?", a: "File as soon as possible &mdash; penalties scale with how late you are, so a few weeks late is far cheaper than months. Get the correct forms out to recipients and the IRS, and talk to your CPA about any penalty relief. We can help reconstruct accurate contractor records if your books are behind." },
    { q: "Is TechBrot affiliated with Intuit or the IRS?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm &mdash; not affiliated with Intuit, and not a government agency. QuickBooks and Intuit are registered trademarks of Intuit Inc. For official deadlines and forms, IRS.gov is the authority." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/1099-deadline-calculator/#webpage",
            url: "https://techbrot.com/tools/1099-deadline-calculator/",
            name: "1099 Deadline Calculator",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#deadline-calc-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/1099-deadline-calculator/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "1099 Deadline Calculator", item: "https://techbrot.com/tools/1099-deadline-calculator/" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/1099-deadline-calculator/#faq",
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

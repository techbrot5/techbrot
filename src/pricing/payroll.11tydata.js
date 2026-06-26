/* /pricing/payroll/ page data — per-service PRICE-DETAIL for payroll
 * management. tier: t-bofu · chrome: full (decision/reference page that links
 * out to the canonical overview and the service pages — keeps nav).
 * ANGLE: this page explains what DRIVES the monthly payroll-management fee
 * and why it is a fixed monthly fee. It does NOT restate the canonical
 * pricing overview (/pricing/), the service itself (/accounting/payroll-
 * management/), or the QB Payroll product/setup (/quickbooks/payroll/) —
 * it links to all three.
 * CANONICAL PRICING ONLY — payroll management $150–$800+/month (recurring,
 * fixed monthly fee). Always a range; exact fixed fee quoted in writing
 * within 3 business days of a free discovery call. No per-employee figures
 * are invented; the fee DRIVERS are described, not priced individually.
 * HONESTY: the payroll SOFTWARE subscription (QuickBooks Payroll, Gusto,
 * etc.) is billed by that provider SEPARATELY — TechBrot's fee is the
 * management/processing service, not the software license. Provider-neutral.
 * Payroll-tax lane: TechBrot manages payroll and the in-software tax
 * setup/filing the payroll product performs; income-tax filing and IRS
 * representation stay with the client's CPA/EA.
 * Authorship: firm-level "Certified QuickBooks ProAdvisor team"; founder in
 * the global Person schema only — no visible name. */

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

// CANONICAL range for payroll management (== blueprint Sheet 0).
const PAYROLL_RANGE = "$150&ndash;$800+";
const PAYROLL_UNIT = "/mo";

// The factors that move the monthly management fee within the range.
// These are DRIVERS, not a price list — no per-unit numbers are quoted.
const DRIVERS = [
  { label: "Headcount", name: "Number of employees", body: "More people on the run means more pay items, more deductions, more onboarding and offboarding, and more to reconcile each cycle. Headcount is the single biggest driver of where a payroll fee lands in the range." },
  { label: "Cadence", name: "Pay frequency", body: "Weekly and bi-weekly runs happen far more often than semi-monthly or monthly ones, so they carry more recurring processing work. The more pay runs per year, the more of the management cycle TechBrot owns." },
  { label: "Geography", name: "Multi-state payroll", body: "Each state where you have employees adds its own registration, withholding rules, unemployment account, and filing calendar. Multi-state payroll is materially more work than single-state, and it pushes the fee up accordingly." },
  { label: "Mix", name: "Contractor / 1099 volume", body: "Contractors are not on payroll, but 1099 tracking, vendor setup, and year-end 1099-NEC preparation ride alongside the payroll engagement. A heavy contractor mix adds year-end volume that the fee reflects." },
  { label: "Year-end", name: "W-2 / 1099 year-end work", body: "January means W-2s for employees and 1099-NECs for qualifying contractors, plus annual reconciliations. Year-end is the heaviest month of the payroll calendar, and it is built into the fixed monthly fee rather than billed as a surprise add-on." },
  { label: "Complexity", name: "Benefits, deductions & garnishments", body: "Retirement contributions, health-premium deductions, reimbursements, tips, multiple pay rates, and court-ordered garnishments each add setup and per-run handling. The more moving parts in a paycheck, the more the cycle takes." },
];

// What the recurring payroll-management fee covers (parallel list, not a
// numbered sequence). Scope is the agreement.
const SCOPE = [
  { name: "Scheduled pay-run processing", body: "Each pay run prepared, reviewed, and submitted on your cadence inside the payroll product you use &mdash; hours and salaries to net pay, on time." },
  { name: "In-software payroll-tax handling", body: "Setup and oversight of the federal, state, and local payroll-tax filings and deposits the payroll product performs &mdash; 941s, state withholding and unemployment, and the rest of the calendar." },
  { name: "New-hire & state registration support", body: "Onboarding new employees into payroll and coordinating the state payroll-tax registrations a new work location requires." },
  { name: "Year-end W-2 & 1099 preparation", body: "W-2s for employees and 1099-NECs for qualifying contractors, prepared and filed through the payroll product, with annual reconciliations." },
  { name: "Payroll-to-books reconciliation", body: "Payroll posted and reconciled against your QuickBooks file so wages, taxes, and liabilities match the books &mdash; not a parallel record." },
  { name: "A named ProAdvisor", body: "One Certified ProAdvisor owns your payroll end to end. No rotation, no re-explaining when a question comes up mid-cycle." },
];

module.exports = {
  payrollRange: PAYROLL_RANGE,
  payrollUnit: PAYROLL_UNIT,
  drivers: DRIVERS,
  scope: SCOPE,
  // "Where this sits" — links OUT instead of restating neighbouring pages.
  related: [
    { name: "All fixed-fee pricing", body: "The full canonical price table across every TechBrot service, with the engagement shapes and the written-scope model.", cta: "See the pricing overview", href: "/pricing/" },
    { name: "Payroll management service", body: "What the payroll-management engagement actually delivers &mdash; scope, process, and how it fits with your bookkeeping.", cta: "Explore the service", href: "/accounting/payroll-management/" },
    { name: "QuickBooks Payroll setup", body: "The QuickBooks Payroll product itself &mdash; turning it on, configuring it, and getting it running correctly.", cta: "QuickBooks Payroll", href: "/quickbooks/payroll/" },
  ],
  aiSummary: [
    { q: "How much does payroll management cost?", a: "<strong>$150&ndash;$800+/month</strong>, as a fixed monthly fee against a written scope &mdash; no hourly billing. Where you land depends on number of employees, pay frequency, how many states you run payroll in, contractor/1099 volume, and year-end W-2/1099 work. Your exact fixed fee is quoted in writing within 3 business days of a free discovery call." },
    { q: "Is the payroll software subscription included in that fee?", a: "<strong>No.</strong> TechBrot&rsquo;s fee is the management and processing service. The payroll software itself &mdash; QuickBooks Payroll, Gusto, or similar &mdash; is a separate subscription billed by that provider directly. TechBrot is provider-neutral and recommends the product that fits your business; for software pricing, refer to the provider." },
    { q: "What drives the monthly payroll fee up or down?", a: "<strong>Five factors</strong>: number of employees, pay frequency (weekly runs cost more than monthly), whether payroll spans multiple states, contractor/1099 volume, and the year-end W-2/1099 workload. The discovery call surfaces these and the written scope reflects them." },
    { q: "Does the fee cover payroll taxes?", a: "<strong>It covers payroll-tax handling inside the software.</strong> TechBrot sets up and oversees the federal, state, and local payroll-tax filings and deposits the payroll product performs &mdash; 941s, state withholding, unemployment, and year-end W-2/1099 filing. Income-tax filing and IRS representation stay with your CPA or EA." },
    { q: "Why is payroll management a fixed monthly fee?", a: "<strong>Because payroll is recurring, predictable work.</strong> A fixed monthly fee covers every pay run, the payroll-tax calendar, and year-end W-2/1099 work &mdash; including the heavy January month &mdash; so you can budget the cost and never face a per-run or year-end surprise invoice." },
  ],
  faq: [
    { q: "How much does payroll management cost?", a: "<a href=\"/accounting/payroll-management/\">Payroll management</a> is <strong>$150&ndash;$800+/month</strong> as a fixed monthly fee against a written scope &mdash; no hourly billing. Where your business lands in the range depends on number of employees, pay frequency, how many states you run payroll in, contractor/1099 volume, and year-end W-2/1099 work. Your exact fixed fee is quoted in writing within 3 business days of a free discovery call &mdash; or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Is the payroll software subscription part of this price?", a: "No. TechBrot&rsquo;s fee is the management and processing service &mdash; running pay runs, overseeing payroll-tax filings, and handling year-end. The payroll software itself, such as QuickBooks Payroll or Gusto, is a separate subscription billed directly by that provider. TechBrot is provider-neutral: we recommend and operate whichever product fits your business, and we don&rsquo;t quote provider subscription prices &mdash; refer to the provider for those." },
    { q: "What factors move the fee within the range?", a: "Five drivers: the number of employees on the run, your pay frequency (weekly and bi-weekly cost more than semi-monthly or monthly because there are more runs per year), whether you run payroll in more than one state, your contractor/1099 volume, and the year-end W-2 and 1099 workload. Benefits, deductions, and garnishments add complexity too. The free discovery call surfaces these and the written scope reflects them." },
    { q: "Does payroll management include payroll taxes?", a: "It includes payroll-tax handling inside the payroll software. TechBrot sets up and oversees the federal, state, and local payroll-tax filings and deposits the payroll product performs &mdash; including 941s, state withholding and unemployment, and the year-end W-2/1099 filings. Income-tax filing and IRS representation are not part of payroll management; those stay with your CPA or EA." },
    { q: "Do you handle contractor (1099) payments too?", a: "Contractors aren&rsquo;t on payroll, but 1099 work rides alongside the payroll engagement: vendor setup, contractor payment tracking, and year-end <a href=\"/accounting/1099-preparation/\">1099-NEC preparation</a> and filing for qualifying contractors. A heavy contractor mix adds year-end volume, which is reflected in where the fixed fee lands." },
    { q: "Is year-end W-2 and 1099 work an extra charge?", a: "No. Year-end W-2s for employees and 1099-NECs for qualifying contractors are built into the fixed monthly fee, not billed as a separate add-on. January is the heaviest month of the payroll calendar, and pricing it into the recurring fee is exactly the point of a fixed monthly fee &mdash; no year-end surprise invoice." },
    { q: "Why is payroll a fixed monthly fee instead of hourly?", a: "Payroll is recurring, predictable work, so it should be priced predictably. A fixed monthly fee covers every scheduled pay run, the payroll-tax calendar, new-hire and state-registration support, and year-end W-2/1099 work against a written scope. You know the total cost before work begins, and you&rsquo;re never charged per run or surprised at year-end." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications &mdash; including Payroll &mdash; and we operate QuickBooks Payroll where it fits, but TechBrot is not owned, employed, or operated by Intuit, and we are provider-neutral on payroll software. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/pricing/payroll/#webpage",
            url: "https://techbrot.com/pricing/payroll/",
            name: "Payroll Management Pricing — What Drives the Monthly Fee",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#ppr-tldr-body", "#ppr-ai-summary"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/pricing/payroll/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://techbrot.com/pricing/" },
              { "@type": "ListItem", position: 3, name: "Payroll Management Pricing", item: "https://techbrot.com/pricing/payroll/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/pricing/payroll/#service",
            name: "Payroll Management Pricing",
            serviceType: "Payroll management & processing",
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", audienceType: "U.S. small and mid-sized businesses with employees" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "OfferCatalog",
              name: "Payroll management fixed-fee pricing",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Payroll Management",
                  category: "Recurring fixed-fee payroll management & processing",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: stripTags(PAYROLL_RANGE + PAYROLL_UNIT) + " · fixed monthly fee, written scope before work begins; payroll software subscription billed separately by the provider",
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/pricing/payroll/#faq",
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

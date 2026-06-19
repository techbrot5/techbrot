/* /pricing/quickbooks-setup/ — per-service PRICE-DETAIL page (t-bofu).
 * INTENT: "quickbooks setup cost / quickbooks setup pricing" — the price
 * detail for the ONE-TIME setup implementation. DISTINCT from /pricing/
 * (canonical overview) and /quickbooks/setup/ (the service): this page
 * explains the figure — what drives $750–$5,000+ and what a correct setup
 * includes. Links to (does NOT restate) /pricing/, /quickbooks/setup/,
 * /quickbooks/setup/checklist/, /quickbooks/which-plan-is-right/, and
 * /quickbooks/proadvisor-cost/.
 * CANONICAL FIGURE ONLY (Sheet 0): QuickBooks setup $750–$5,000+, one-time,
 * ~2–4 weeks — always a range, exact fixed fee quoted in writing within 3
 * business days of a free discovery call.
 * HONESTY: the QuickBooks SOFTWARE SUBSCRIPTION is billed by Intuit
 * SEPARATELY — our fee is the implementation service, not the license; no
 * Intuit subscription prices quoted (defer to Intuit). Representative
 * scenarios labelled illustrative. No reviews/AggregateRating. Tax filing
 * not included. Founder-name-zero. Not affiliated with Intuit Inc.
 * The coined "TechBrot Setup Protocol" carried as a DefinedTerm.
 * speakable: #pqs-tldr-body + #pqs-ai-summary. */

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
  // The five factors that move the fixed fee within the range.
  drivers: [
    { label: "Factor 1", name: "File complexity", body: "A single-entity service business with a clean chart of accounts sits at the low end. Inventory, job costing, classes and locations, multi-currency, or a tangled legacy structure pull the work &mdash; and the fee &mdash; upward." },
    { label: "Factor 2", name: "Accounts &amp; entities", body: "Each bank, credit, loan, and merchant account is a feed to connect and an opening balance to set and prove. More accounts, and more legal entities, mean more reconciliation surface &mdash; the single biggest driver after complexity." },
    { label: "Factor 3", name: "Integrations", body: "Connecting third-party apps &mdash; payroll, POS, e-commerce, expense, time-tracking, payment processors &mdash; is where setups diverge. Each integration is mapped, tested, and reconciled so the data lands correctly, not just &lsquo;connected&rsquo;." },
    { label: "Factor 4", name: "Spreadsheets vs. fresh start", body: "A fresh start with no history is the lighter path. Migrating off spreadsheets (or a prior tool) means importing and validating historical data, setting accurate opening balances, and reconciling to a known point &mdash; more work, higher in the range." },
    { label: "Factor 5", name: "Product tier", body: "QuickBooks Online, Desktop, and Enterprise each implement differently &mdash; Enterprise and Desktop carry more configuration depth. The tier you&rsquo;re on (or should be on) shifts the scope and the fee." },
  ],
  // What a correct setup buys — parallel grid, NOT a numbered sequence.
  includes: [
    { name: "Chart of accounts", body: "A chart built for your business and your reporting &mdash; not a generic default. Structured so your P&amp;L and balance sheet are readable and your CPA can work from them without rework." },
    { name: "Bank &amp; account feeds", body: "Every bank, credit, and loan account connected, categorized, and rules-configured so transactions flow in clean from day one rather than piling up to fix later." },
    { name: "Opening balances", body: "Accurate opening balances set and tied to a known starting point &mdash; the step most DIY setups skip, and the reason their books never reconcile." },
    { name: "Integrations mapped", body: "Each connected app mapped to the right accounts and tested end-to-end, so payroll, sales, and payments post correctly instead of creating silent errors." },
    { name: "Reconciliation proof", body: "The file is reconciled and proven before handoff &mdash; we don&rsquo;t call a setup done until the numbers tie out. A setup that doesn&rsquo;t reconcile isn&rsquo;t finished." },
    { name: "Handoff &amp; orientation", body: "A working file plus a walkthrough of how to use it &mdash; how to enter, categorize, and read your own numbers &mdash; so the structure survives after we step back." },
  ],
  // The numbered setup-process flow — the ONE permitted numbered system.
  steps: [
    { name: "Discovery &amp; scope", body: "A free 30-minute call to surface the factors above, confirm the right product tier, and set the scope. Your exact fixed fee follows in writing within 3 business days." },
    { name: "Configure the file", body: "Build the chart of accounts, set company and tax settings, and structure classes, locations, or job costing where the business needs them." },
    { name: "Connect feeds &amp; integrations", body: "Connect bank, credit, and loan accounts and map every third-party integration to the right accounts &mdash; then test that the data posts correctly." },
    { name: "Opening balances &amp; data", body: "Set and validate opening balances and import any historical data being carried over, tied to a known starting point." },
    { name: "Reconcile &amp; prove", body: "Reconcile the file and confirm it ties out. The setup isn&rsquo;t complete until the numbers are proven." },
    { name: "Handoff &amp; orientation", body: "Deliver the working file with a walkthrough, so you can run day-to-day entry and read your own reports with confidence." },
  ],
  // Product tiers — how each shifts the implementation (no Intuit prices).
  tiers: [
    { label: "QuickBooks Online", name: "QBO setup", body: "Cloud-first, feed-driven implementation &mdash; the most common path. Lighter on installation, heavier on connecting feeds and apps cleanly. Subscription billed by Intuit separately." },
    { label: "QuickBooks Desktop", name: "Desktop setup", body: "Locally-installed file with deeper configuration and list management. More setup of preferences, users, and file structure. Subscription billed by Intuit separately." },
    { label: "QuickBooks Enterprise", name: "Enterprise setup", body: "The most configuration-heavy tier &mdash; advanced inventory, roles and permissions, and larger data volumes. Scopes to the high end of the range. Subscription billed by Intuit separately." },
  ],
  // Representative scenarios — explicitly illustrative, inside the range.
  scenarios: [
    { label: "Representative · lighter", name: "Fresh-start solo service business", body: "A single-entity service business starting fresh on QuickBooks Online: a couple of accounts, no inventory, one or two integrations, no historical data to migrate." , band: "lower end of $750&ndash;$5,000+" },
    { label: "Representative · mid", name: "Growing business off spreadsheets", body: "Migrating from spreadsheets to QBO with several bank and credit accounts, payroll and a POS to integrate, and a few months of history to import and reconcile." , band: "middle of $750&ndash;$5,000+" },
    { label: "Representative · heavier", name: "Multi-entity / Enterprise", body: "A complex file &mdash; multiple entities or Enterprise with inventory, job costing, and several integrations &mdash; with historical data carried over and proven." , band: "higher end of $750&ndash;$5,000+" },
  ],
  nextCards: [
    { name: "Full pricing overview", body: "Every TechBrot service and its canonical fixed-fee range in one table &mdash; the canonical pricing source.", cta: "See all pricing", href: "/pricing/" },
    { name: "The setup service", body: "What a QuickBooks setup engagement covers end to end &mdash; the service behind this price detail.", cta: "QuickBooks Setup", href: "/quickbooks/setup/" },
    { name: "Setup checklist", body: "The step-by-step how-to &mdash; what a complete QuickBooks setup actually requires.", cta: "Setup checklist", href: "/quickbooks/setup/checklist/" },
    { name: "Which plan is right?", body: "Choose the right tier before you scope the setup &mdash; QBO, Desktop, or Enterprise.", cta: "Find your plan", href: "/quickbooks/which-plan-is-right/" },
  ],
  aiSummary: [
    { q: "How much does a QuickBooks setup cost?", a: "<strong>$750&ndash;$5,000+ as a one-time fixed fee</strong>, typically delivered in 2&ndash;4 weeks against a written scope &mdash; no hourly billing. Your exact fixed fee is quoted in writing within 3 business days of a free discovery call. This is the implementation service only; the QuickBooks software subscription is billed by Intuit separately." },
    { q: "What drives where my setup falls in the range?", a: "<strong>Five factors</strong>: file complexity, the number of bank/credit accounts and entities, how many integrations need connecting, whether you&rsquo;re migrating from spreadsheets or starting fresh, and the product tier (QuickBooks Online, Desktop, or Enterprise). Migrating history and heavier tiers push the fee higher." },
    { q: "Does the setup fee include the QuickBooks subscription?", a: "<strong>No.</strong> The setup fee is the implementation service. The QuickBooks software subscription is a separate, recurring charge billed by Intuit directly &mdash; TechBrot does not resell or mark it up, and we don&rsquo;t quote Intuit&rsquo;s subscription prices here." },
    { q: "What does a correct QuickBooks setup include?", a: "<strong>A business-specific chart of accounts, connected bank and account feeds, accurate opening balances, mapped and tested integrations, a reconciled and proven file, and a handoff walkthrough.</strong> A setup isn&rsquo;t finished until the file reconciles." },
    { q: "How fast do I get my exact setup fee?", a: "<strong>Within 3 business days</strong> of a free 30-minute discovery call &mdash; the exact one-time fixed fee, in writing, before you commit. The call is no-obligation." },
  ],
  faq: [
    { q: "How much does a QuickBooks setup cost?", a: "A QuickBooks setup is a one-time fixed fee of <strong>$750&ndash;$5,000+</strong>, usually delivered in 2&ndash;4 weeks against a written scope &mdash; no hourly billing. The exact fixed fee is quoted in writing within 3 business days of a free discovery call. Where you land depends on file complexity, number of accounts and entities, integrations, whether you&rsquo;re migrating from spreadsheets or starting fresh, and the product tier." },
    { q: "Why is QuickBooks setup a range and not a single price?", a: "Because no two files are the same. A fresh-start solo service business and a multi-entity Enterprise file with inventory and integrations require very different work, so a single price would be wrong for almost everyone. We give the honest range here and quote your exact fixed fee in writing within 3 business days of the free discovery call." },
    { q: "Does the setup fee include the QuickBooks software subscription?", a: "No. The setup fee is the implementation service &mdash; building and proving your file. The <strong>QuickBooks software subscription is billed by Intuit separately</strong> as a recurring charge for the license. TechBrot does not resell or mark up the subscription, and we don&rsquo;t quote Intuit&rsquo;s subscription prices &mdash; those come from Intuit directly." },
    { q: "Does the price change for QuickBooks Online vs. Desktop vs. Enterprise?", a: "The same $750&ndash;$5,000+ range covers all three, but the implementation differs &mdash; Desktop and especially Enterprise carry more configuration depth and tend to sit higher in the range. If you don&rsquo;t yet know which tier fits, we settle plan selection first, then scope the setup against the right product. The subscription for whichever tier you choose is billed by Intuit separately." },
    { q: "What does a correct setup actually include?", a: "A business-specific chart of accounts, connected bank and credit feeds, accurate opening balances, integrations mapped and tested, the file reconciled and proven, and a handoff walkthrough. The work follows a defined sequence we call the TechBrot Setup Protocol. A setup that doesn&rsquo;t reconcile isn&rsquo;t finished &mdash; proving the file ties out is part of the fee." },
    { q: "Is the setup fee really one-time?", a: "Yes. The setup is a one-time fixed-fee project with set start and completion dates inside the 2&ndash;4 week window. It often transitions into a recurring engagement like monthly bookkeeping afterward, but that&rsquo;s a separate, separately-priced engagement &mdash; the setup fee itself is paid once." },
    { q: "Does the setup fee include tax filing?", a: "No. TechBrot delivers operational accounting and a CPA-ready file; tax filing and IRS representation are handled by your CPA or EA and are not part of the setup scope. The setup makes your books clean and reconciled so your CPA can work from them." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and implement QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit, and the software subscription is billed by Intuit separately. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/pricing/quickbooks-setup/#webpage",
            url: "https://techbrot.com/pricing/quickbooks-setup/",
            name: "QuickBooks Setup Cost & Pricing — Fixed Fee $750–$5,000+",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#pqs-tldr-body", "#pqs-ai-summary"] },
            mainEntity: { "@id": "https://techbrot.com/pricing/quickbooks-setup/#service" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/pricing/quickbooks-setup/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://techbrot.com/pricing/" },
              { "@type": "ListItem", position: 3, name: "QuickBooks Setup Cost", item: "https://techbrot.com/pricing/quickbooks-setup/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/pricing/quickbooks-setup/#service",
            name: "QuickBooks Setup Pricing",
            serviceType: "QuickBooks setup and implementation",
            description: stripTags("One-time, fixed-fee QuickBooks setup implementation — chart of accounts, account feeds, opening balances, integrations, and a reconciled, proven file. The QuickBooks software subscription is billed by Intuit separately."),
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", audienceType: "U.S. small and mid-sized businesses adopting or re-implementing QuickBooks" },
            provider: { "@id": "https://techbrot.com/#organization" },
            termsOfService: { "@id": "https://techbrot.com/pricing/quickbooks-setup/#setup-protocol" },
            offers: {
              "@type": "OfferCatalog",
              name: "QuickBooks setup fixed-fee pricing",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "QuickBooks Setup",
                  category: "One-time fixed-fee implementation",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: stripTags("$750–$5,000+ — one-time fixed fee for the setup implementation service, written scope before work begins, no hourly billing, ~2–4 weeks. Exact fixed fee quoted in writing within 3 business days of a free discovery call. QuickBooks software subscription billed by Intuit separately."),
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            },
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://techbrot.com/pricing/quickbooks-setup/#setup-protocol",
            name: "TechBrot Setup Protocol",
            description: stripTags("TechBrot&rsquo;s defined QuickBooks setup sequence — discovery and scope, file configuration, connecting feeds and integrations, opening balances and data, reconciliation and proof, then handoff and orientation — covered by the one-time fixed setup fee."),
            inDefinedTermSet: { "@id": "https://techbrot.com/#organization" },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/pricing/quickbooks-setup/#faq",
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

/* /tools/quickbooks-plan-selector/ — fit-based recommender (round 86, Wave 3).
 * tb-select.js (formula=planselect) recommends a QuickBooks Online tier on
 * FEATURE FIT only. HONESTY (founder ruling): NEVER quote Intuit plan prices —
 * Intuit sets and changes them; we point to the right tier and tell the user to
 * confirm pricing at Intuit. Feature gating follows the real QBO lineup
 * (inventory/projects/classes → Plus; >5 users → Advanced). Not-affiliated
 * disclosure throughout; plan names/features are Intuit's and can change. */

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
  nextCards: [
    { name: "Which plan is right?", body: "A deeper walkthrough of choosing a QuickBooks Online plan for your situation, beyond the quick selector.", cta: "Which plan is right", href: "/quickbooks/which-plan-is-right/" },
    { name: "Compare online plans", body: "The full side-by-side capability matrix across Simple Start, Essentials, Plus, and Advanced.", cta: "Compare plans", href: "/quickbooks/compare/online-plans/" },
    { name: "QuickBooks setup", body: "Picking the tier is step one. We set the file up correctly &mdash; chart of accounts, connections, and opening balances &mdash; so your books are right from day one.", cta: "QuickBooks setup", href: "/quickbooks/setup/" },
  ],
  aiSummary: [
    { q: "Which QuickBooks Online plan do I need?", a: "It comes down to features, not price. <strong>Inventory tracking, project profitability, or class/location tracking require Plus.</strong> <strong>More than five users requires Advanced</strong> (up to 25 users). Multiple users without those features fit <strong>Essentials</strong> (up to 3); a single user with simple books fits <strong>Simple Start</strong>. This selector applies exactly that logic to your answers." },
    { q: "What&rsquo;s the difference between Essentials and Plus?", a: "<strong>Plus adds inventory, project profitability, and class/location tracking</strong>, and raises the user limit to five (Essentials is three). If you need to track product quantities, see profit by job, or report by department or location, you need Plus &mdash; Essentials doesn&rsquo;t include those. If you don&rsquo;t, Essentials covers multi-user bookkeeping and bill management." },
    { q: "When do I need QuickBooks Online Advanced?", a: "Mainly when you need <strong>more than five users</strong> (Advanced supports up to 25), or when you want custom user roles, batch transactions, deeper reporting, and workflow automation. For most small businesses Plus is enough; Advanced suits larger or more complex operations. Above 25 users, QuickBooks Enterprise or a custom plan may fit better." },
    { q: "How much do the plans cost?", a: "Intuit sets and frequently changes QuickBooks pricing, and runs limited-time promotions, so we deliberately don&rsquo;t republish prices that could be out of date &mdash; check current pricing directly at Intuit. This tool focuses on the durable question: which tier has the features your business actually needs." },
    { q: "Can TechBrot help me choose and set it up?", a: "Yes. As Certified ProAdvisors we confirm the right tier for how you work and set the file up correctly &mdash; chart of accounts, bank connections, opening balances, and any inventory or class structure. We&rsquo;re independent (not Intuit), so the recommendation is about fit, not a sales quota." },
  ],
  faq: [
    { q: "Why doesn&rsquo;t this tool show prices?", a: "Because Intuit sets QuickBooks pricing and changes it regularly, often with promotions &mdash; any price we hard-coded could be wrong by the time you read it, and a wrong price is worse than none. We recommend the right tier on features and send you to Intuit for current, accurate pricing. It&rsquo;s the same honesty standard we hold everywhere on the site." },
    { q: "How does the selector decide?", a: "Pure feature logic: if you need inventory, project profitability, or class/location tracking, it recommends Plus (the lowest tier that includes them). More than five users pushes you to Advanced. Multiple users without those features fit Essentials, and a single user with simple books fits Simple Start. The full feature matrix is on this page." },
    { q: "What if I&rsquo;m between two plans?", a: "Pick based on the feature you actually need now, not the one you might use someday &mdash; you can upgrade in minutes as the business grows, without losing data. If you&rsquo;re genuinely unsure, a Certified ProAdvisor can look at how you work and confirm the tier, often saving you from over-buying." },
    { q: "Do plan features ever change?", a: "Yes &mdash; Intuit periodically revises what&rsquo;s included in each tier and adjusts user limits. This selector reflects the current QuickBooks Online lineup at a feature level, but always verify the specifics with Intuit, and we keep the tool updated as the lineup changes." },
    { q: "Is QuickBooks Online the only option you recommend?", a: "No. We&rsquo;re Certified ProAdvisors and QuickBooks is what we know best, but we advise on fit first &mdash; if a different platform genuinely suits your business better, we&rsquo;ll say so. The discovery call is about what&rsquo;s right for you, not steering you to one product." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work inside QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "WebApplication"],
            "@id": "https://techbrot.com/tools/quickbooks-plan-selector/#webpage",
            url: "https://techbrot.com/tools/quickbooks-plan-selector/",
            name: "QuickBooks Online Plan Selector",
            description: data.description,
            applicationCategory: "FinanceApplication",
            operatingSystem: "All",
            isAccessibleForFree: true,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#plan-select-in-brief-text"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/tools/quickbooks-plan-selector/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Tools", item: "https://techbrot.com/tools/" },
              { "@type": "ListItem", position: 3, name: "QuickBooks Plan Selector", item: "https://techbrot.com/tools/quickbooks-plan-selector/" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/tools/quickbooks-plan-selector/#faq",
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

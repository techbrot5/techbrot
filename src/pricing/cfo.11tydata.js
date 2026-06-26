/* /pricing/cfo/ — per-service PRICE-DETAIL for the fractional CFO retainer.
 * tier: t-bofu · chrome: full (decision/reference page — links out to the
 * canonical pricing overview and the flagship service, so it KEEPS nav).
 * DISTINCT ANGLE vs /pricing/: this page is ONLY the fractional CFO price
 * detail — what drives a senior retainer (judgment, depth, entities,
 * fundraise/board, reporting cadence) and how that differs from
 * volume-priced bookkeeping. It LINKS to /pricing/ (canonical overview),
 * /accounting/advisory/fractional-cfo/ (the flagship canonical service —
 * linked prominently) and /accounting/advisory/ (advisory hub) — it does
 * NOT restate them.
 * CANONICAL PRICING ONLY — Fractional CFO $3,000–$8,000+/month, monthly
 * retainer, BY APPLICATION, limited capacity; scoped per engagement after a
 * free discovery call, the exact retainer in writing. No hourly. The
 * scenario ranges sit inside the canonical band and are labeled
 * representative/illustrative — never quotes, never real clients.
 * HONESTY: advisory only — NOT tax filing, NOT audit/assurance; coordinates
 * with the client's CPA. By application (acceptance not guaranteed). Not
 * affiliated with Intuit Inc. No founder name (firm-level authorship only).
 * No AggregateRating/Review schema. */

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

// CANONICAL fractional CFO figure (== blueprint Sheet 0 / live /pricing/).
const CFO_RANGE = "$3,000&ndash;$8,000+";

module.exports = {
  // What sets the retainer (parallel list — NOT a numbered sequence).
  drivers: [
    { label: "Depth of involvement", name: "How often finance is in the room", body: "A light-touch quarterly cadence sits at the low end of the band; a CFO embedded in weekly operating decisions, hiring calls, and pricing sits at the high end. You pay for presence and judgment, not hours logged." },
    { label: "Number of entities", name: "How many entities sit under you", body: "A single operating company is simpler than a holdco with subsidiaries, intercompany flows, or multi-state structure. More entities mean more consolidation, more moving parts, and a higher retainer." },
    { label: "Fundraise, board &amp; lenders", name: "Who&rsquo;s relying on the numbers", body: "A fundraise, an active board, or a lender covenant raises the stakes &mdash; the forecasts, scenario models, and reporting have to survive outside scrutiny. That depth of work pushes the retainer up." },
    { label: "Reporting cadence", name: "How often, how deep the reporting runs", body: "Monthly board packages, rolling 13-week cash forecasts, and live KPI dashboards take more sustained work than a quarterly review. The cadence and depth of the reporting you need shape the number." },
  ],
  // Representative scenarios — ILLUSTRATIVE only, inside the canonical band.
  scenarios: [
    { situation: "Early-stage startup, single entity, preparing a raise", depth: "Forecasting, scenario models, and an investor-ready data room; mostly project-cadence around the round", range: "$3,000&ndash;$4,500+" },
    { situation: "Growing operating company, steady cadence", depth: "Monthly close oversight, KPI reporting, cash-flow strategy, and quarterly planning", range: "$4,500&ndash;$6,000+" },
    { situation: "Multi-entity or board/lender-driven business", depth: "Consolidated reporting across entities, board packages, covenant tracking, and embedded operating involvement", range: "$6,000&ndash;$8,000+" },
  ],
  nextCards: [
    { name: "The Fractional CFO service", body: "The flagship engagement in full &mdash; what a fractional CFO does, the deliverables, and how the retainer is scoped. Start here if you&rsquo;re weighing the work itself.", cta: "Fractional CFO service", href: "/accounting/advisory/fractional-cfo/" },
    { name: "All TechBrot pricing", body: "The canonical fixed-fee overview &mdash; every service and range in one place, including where fractional CFO sits beside bookkeeping and QuickBooks work.", cta: "Pricing overview", href: "/pricing/" },
    { name: "Advisory services", body: "The wider advisory practice the CFO retainer draws on &mdash; financial strategy, forecasting, KPI reporting, and cash-flow management.", cta: "Explore Advisory", href: "/accounting/advisory/" },
  ],
  aiSummary: [
    { q: "How much does a fractional CFO cost?", a: "<strong>" + CFO_RANGE + "/month</strong>, as a fixed monthly retainer &mdash; not hourly. The retainer is scoped per engagement after a free discovery call, with the exact number confirmed in writing before you commit. Engagements are accepted by application, with limited capacity each quarter." },
    { q: "What drives the monthly retainer?", a: "<strong>Depth of involvement, not transaction volume.</strong> The number is set by how often you need strategic finance in the room, how many entities sit under you, whether a fundraise, board, or lender is in play, and the cadence and depth of the reporting and forecasting you need." },
    { q: "How is fractional CFO pricing different from bookkeeping pricing?", a: "Bookkeeping is priced on <strong>transaction volume</strong> &mdash; accounts, entities, the size of the monthly close. A fractional CFO is priced on <strong>judgment</strong>: forecasts, board packages, and decisions that don&rsquo;t scale with transaction count. A low-volume startup raising a round can need more CFO time than a high-volume business that just wants quarterly steering." },
    { q: "Is a fractional CFO the same as a tax accountant?", a: "No. A fractional CFO is <strong>advisory and strategic finance</strong> &mdash; it is not tax filing and not audit or assurance. The CFO coordinates with your CPA or EA, who handle returns and attestation; the retainer doesn&rsquo;t replace a licensed tax professional." },
    { q: "Why is the fractional CFO accepted by application?", a: "Senior strategic capacity is finite. TechBrot accepts a limited number of CFO engagements each quarter, by application, so each one gets real depth. The discovery call tests fit in both directions; <strong>acceptance isn&rsquo;t guaranteed</strong>, and when an engagement is accepted the retainer scope is delivered in writing first." },
  ],
  faq: [
    { q: "How much does a fractional CFO cost per month?", a: "A TechBrot <a href=\"/accounting/advisory/fractional-cfo/\">fractional CFO</a> is a fixed monthly retainer of <strong>" + CFO_RANGE + "/month</strong> &mdash; not hourly. The retainer is scoped per engagement after a free discovery call, and the exact number is confirmed in writing before you commit. Engagements are accepted by application, with limited capacity each quarter." },
    { q: "What determines where my retainer lands in the range?", a: "Four things: the depth of involvement you need (light quarterly cadence versus embedded in weekly decisions), the number of entities under you, whether a fundraise, board, or lender is in play, and the cadence and depth of the reporting and forecasting required. These are surfaced on the discovery call and reflected in the written scope &mdash; the retainer tracks judgment and presence, not how busy the books are." },
    { q: "Why is fractional CFO priced differently from bookkeeping?", a: "Bookkeeping prices on transaction volume &mdash; accounts, entities, and the size of the monthly close, which is roughly the same shape each month. A fractional CFO produces decisions and strategy &mdash; forecasts a lender will trust, board packages that survive questions, pricing and hiring calls backed by unit economics &mdash; and none of that scales with transaction count. So the CFO retainer is priced on depth of involvement rather than volume." },
    { q: "Why is the fractional CFO accepted by application?", a: "Senior strategic finance can&rsquo;t be mass-produced, so TechBrot carries a limited number of CFO engagements at a time and accepts them by application, with limited capacity each quarter. The discovery call tests fit in both directions &mdash; what you need, what capacity exists, and whether a fractional CFO is even the right answer. Acceptance isn&rsquo;t guaranteed; when an engagement is accepted, the retainer scope is delivered in writing first." },
    { q: "Does the fractional CFO retainer include tax filing or an audit?", a: "No. The fractional CFO is <a href=\"/accounting/advisory/\">advisory</a> and strategic finance only &mdash; it is not tax filing and not audit or assurance. The CFO coordinates with your CPA or EA, who handle returns, IRS matters, and any attestation, making sure the strategy and books are ready for them. The retainer doesn&rsquo;t replace a licensed tax professional; if you don&rsquo;t have a CPA, the engagement helps you work with one." },
    { q: "Is the retainer hourly, and are there long-term contracts?", a: "The retainer is a fixed monthly fee against a written scope &mdash; never hourly, so you&rsquo;re never penalized for asking questions or for the provider&rsquo;s pace. It runs month to month against that scope with no long-term lock-in; if the work genuinely expands beyond the agreed scope, the retainer is re-quoted and re-approved in writing before anything changes." },
    { q: "How do I get an exact fractional CFO quote?", a: "Start with a free 30-minute discovery call &mdash; or call <a href=\"tel:+18777515575\">(877) 751-5575</a>. If the fit is right and capacity allows, TechBrot delivers a written retainer scope &mdash; the exact monthly number, the cadence, and the deliverables &mdash; before you commit to anything. Because engagements are by application, the call also confirms whether a fractional CFO is the right next step for your business at all." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and use QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/pricing/cfo/#webpage",
            url: "https://techbrot.com/pricing/cfo/",
            name: "Fractional CFO Cost & Pricing",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#pcfo-tldr-body", "#pcfo-ai-summary"] },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/pricing/cfo/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://techbrot.com/pricing/" },
              { "@type": "ListItem", position: 3, name: "Fractional CFO", item: "https://techbrot.com/pricing/cfo/" },
            ],
          },
          {
            "@type": "Service",
            "@id": "https://techbrot.com/pricing/cfo/#service",
            name: "Fractional CFO Pricing",
            serviceType: "Fractional / part-time CFO — strategic finance advisory",
            areaServed: { "@type": "Country", name: "United States" },
            audience: { "@type": "BusinessAudience", audienceType: "U.S. small and mid-sized businesses, startups, and multi-entity companies" },
            provider: { "@id": "https://techbrot.com/#organization" },
            offers: {
              "@type": "OfferCatalog",
              name: "Fractional CFO retainer",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Fractional CFO monthly retainer",
                  category: "Strategic finance advisory · by application",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: stripTags(CFO_RANGE) + "/month · fixed monthly retainer, by application, scoped per engagement in writing after a free discovery call · advisory only, not tax filing or audit/assurance",
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            },
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/pricing/cfo/#faq",
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

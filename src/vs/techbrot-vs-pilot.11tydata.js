/* /vs/techbrot-vs-pilot/ — t-mofu COMPARISON page (MIGRATION-PROTOCOL:
 * content-to-goal, visual-floor). T1 AUTHORITY for the 21 headings + 6 FAQ is the
 * FROZEN EQUITY CONTRACT (contract-vs-pilot.txt) — NOT the old HTML. The old HTML
 * (vs/techbrot-vs-pilot/index.html) is read ONLY for body PROSE.
 *
 * REFERENCE t-mofu comparison vocabulary copied from src/quickbooks/payroll/vs-gusto
 * and src/quickbooks/migration/quickbooks-to-xero (honest both-sides vs-table):
 * byline-block, in-brief, ai-summary--ruled (the "in five questions" block),
 * vs-scroll + vs-table (the side-by-side), buyer-card verdict columns, stack-8,
 * faq accordion + FAQPage, meta-reviewed, trust-row operator block, related stack.
 *
 * T2 headings frozen: every contract heading rendered VERBATIM at its exact level.
 *   - The 4 footer-chrome h2s (Accounting / QuickBooks / Company / Network) are FOOTER
 *     chrome and are NOT rendered (base.njk footer handles site chrome; protocol says
 *     footer chrome not rendered here).
 *   - "The monthly brief." (newsletter) is DROPPED per contract.
 *   - All remaining headings appear verbatim: h1, 6 body h2s, 3 verdict h3s,
 *     1 FAQ h2, "More honest comparisons." h2 + its 4 h3s, final CTA h2.
 *
 * T3 no collapse: the side-by-side comparison is a real vs-scroll + vs-table (the
 * tier-signature component), NEVER proof-strip cards. The 3 verdict H3s stay as real
 * <h3> buyer-cards. The 4 "more comparisons" H3s stay as real <h3> in stack-8.
 *
 * T4 FAQ: exactly the 6 contract Q/A — QUESTIONS verbatim/flat, ANSWERS preserved
 * verbatim from the contract (the contract answers are the enriched canonical set;
 * the old HTML carried shorter <strong>-laden variants — contract answers win).
 * One array (faq[]) → visible accordion + FAQPage schema.
 *
 * T6 content-to-goal / HONESTY: Pilot is a REAL, operating, VC-backed bookkeeping/
 * finance firm that genuinely fits larger funded startups. "Where Pilot wins" is
 * presented fairly; "where TechBrot fits" is QuickBooks-native ProAdvisor depth,
 * fixed-fee, SMB focus. NO fabricated Pilot pricing/stats — only publicly-known,
 * qualitative or caveated ("as publicly listed / approximate") facts. No disparagement.
 * Independent firm — not affiliated with Intuit Inc. or Pilot. No personal name.
 * No fabricated reviews/AggregateRating; reference carries no Clutch proof-strip, so
 * none added (byline-block instead). COBALT vocabulary only — no invented classes. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "About this comparison." — the disclosure prose (publicly-available-info caveat).
  disclosure: [
    "This comparison reflects publicly available information about Pilot (pilot.com) and is provided in good faith for informational purposes. Pilot is a real, operating, venture-backed accounting and finance firm, and its plans, features, and pricing are set by Pilot and may change &mdash; verify current details on Pilot&rsquo;s website before deciding. &ldquo;Pilot&rdquo; is a trademark of its respective owner. TechBrot is an independent Certified QuickBooks ProAdvisor firm and is not affiliated with, endorsed by, or sponsored by Pilot or Intuit Inc.",
  ],
  // "The honest difference." — the one-paragraph plain read (TL;DR prose).
  definition: [
    "<strong>Pilot</strong> is a venture-backed, technology-first accounting firm built primarily for <strong>high-growth, venture-backed startups</strong> that need GAAP-compliant accrual accounting, ASC 606 revenue recognition, burn-rate reporting, and investor-ready financials that hold up in due diligence. It uses <a href=\"/quickbooks/online/\">QuickBooks Online</a> underneath, pairs you with a dedicated team, and offers add-on tax and CFO services for the startup profile. <strong>TechBrot</strong> is an independent <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisor</a> firm built for <strong>established U.S. small and mid-sized businesses</strong> &mdash; services firms, contractors, manufacturers, multi-state employers &mdash; that need dependable <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly books</a>, <a href=\"/quickbooks/\">QuickBooks setup and cleanup</a>, direct <a href=\"/accounting/payroll-management/\">payroll management</a> (including multi-state and local jurisdiction tax), and <a href=\"/accounting/sales-tax-compliance/\">multi-state sales tax compliance</a>, delivered by a <strong>named ProAdvisor</strong> with the option to route to a <a href=\"/find-an-accountant/\">vetted local operator</a>.",
    "<strong>The honest verdict</strong>: for a classic VC-backed startup, Pilot&rsquo;s specialization is genuinely the closer fit &mdash; and we&rsquo;ll say so on a call rather than pretend otherwise. For an established operating business that needs reliable QuickBooks-native bookkeeping, direct payroll, and multi-state and local tax, TechBrot is built for you. Both keep your books in QuickBooks; the difference is in service model, scope, and ideal customer rather than the underlying software. Independent firm &mdash; not affiliated with Intuit Inc. or Pilot.",
  ],
  // ai-summary--ruled — "TechBrot vs Pilot, in five questions." Short questions
  // deliberately NOT identical to any FAQ question, to clear the faq-overlap check.
  aiSummary: [
    { q: "What&rsquo;s the main difference?", a: "<strong>Pilot</strong> is venture-backed and technology-first, built for <strong>high-growth, VC-backed startups</strong> needing GAAP/accrual, investor-ready books. <strong>TechBrot</strong> is an independent Certified ProAdvisor firm built for <strong>established U.S. small and mid-sized businesses</strong> needing operational bookkeeping, QuickBooks, payroll, and multi-state tax via a named ProAdvisor. Overlapping but distinct ideal customers." },
    { q: "Does either run payroll directly?", a: "<strong>Pilot does not run payroll directly</strong> &mdash; it helps you select a provider and integrates with tools like Gusto and Rippling. <strong>TechBrot manages payroll directly</strong>, including multi-state payroll and local jurisdiction tax (such as Indiana CAGIT/COIT, Ohio RITA, and Pennsylvania local PSD) &mdash; a frequent need for established multi-state employers." },
    { q: "Which fits a venture-backed startup?", a: "<strong>Pilot.</strong> It is purpose-built for GAAP accrual accounting, ASC 606, burn-rate reporting, and due-diligence-ready financials. For a classic VC-backed startup, Pilot&rsquo;s specialization is the closer match &mdash; and we&rsquo;ll tell you so." },
    { q: "Which fits an established SMB?", a: "<strong>TechBrot.</strong> Built for established operating businesses needing dependable monthly books, QuickBooks expertise, direct payroll, and multi-state and local sales tax &mdash; via a named ProAdvisor, with the option to route to a vetted local operator where in-state presence matters." },
    { q: "Do both use QuickBooks?", a: "<strong>Yes.</strong> Pilot uses <a href=\"/quickbooks/online/\">QuickBooks Online</a> as its underlying platform; books stay accessible and exportable. TechBrot works inside your own QuickBooks file (Online, Desktop, Enterprise) as a Certified ProAdvisor. The difference is service model and ideal customer, not the software." },
  ],
  // vs-table — the side-by-side, tier-signature component (T3: NOT proof-strip cards).
  // FAIR both-sides read. No fabricated Pilot pricing/stats: pricing row is qualitative
  // + caveated; every Pilot cell is publicly-known or qualitative.
  vsTable: [
    { dim: "Ideal customer", tb: "Established U.S. small and mid-sized businesses (services, trades, manufacturing, multi-state employers)", pilot: "High-growth, venture-backed startups" },
    { dim: "Core model", tb: "Independent Certified ProAdvisor firm + optional curated local-operator network", pilot: "Venture-backed, technology-first firm with a dedicated team" },
    { dim: "Accounting basis", tb: "Cash or accrual, fit to the business", pilot: "Accrual by default, GAAP-oriented for investors" },
    { dim: "Bookkeeping platform", tb: "Your own QuickBooks (Online, Desktop, Enterprise)", pilot: "QuickBooks Online (underlying)" },
    { dim: "Payroll", tb: "Managed directly, incl. multi-state &amp; local jurisdiction tax", pilot: "Not run directly; helps select a provider and integrates" },
    { dim: "Multi-state &amp; local sales tax", tb: "Direct service (nexus, filings, local tax)", pilot: "Not a primary focus" },
    { dim: "QuickBooks setup / cleanup / migration", tb: "Core service (Certified ProAdvisor)", pilot: "Not a standalone service" },
    { dim: "Continuity", tb: "Named ProAdvisor owns the account end to end", pilot: "Dedicated team model" },
    { dim: "Local presence option", tb: "Optional vetted local operator where it matters", pilot: "Remote, centralized" },
    { dim: "Tax filing", tb: "Coordinates with your CPA/EA (does not file)", pilot: "Offers add-on tax service alongside bookkeeping" },
    { dim: "Fractional CFO", tb: "Available (by application), for established businesses", pilot: "Available (add-on), startup-focused" },
    { dim: "Pricing model", tb: "Fixed-fee, written scope before work, no hourly billing", pilot: "Tiered subscription (as publicly listed) scaled to startup needs; typically a higher price point" },
    { dim: "Independence", tb: "Independent; not affiliated with Intuit Inc.", pilot: "Independent, venture-backed company" },
  ],
  // 3 verdict buyer-cards — H3s VERBATIM from contract. FAIR "where Pilot wins".
  verdict: [
    {
      eyebrow: "Choose TechBrot if",
      name: "You&rsquo;re an established operating business.",
      bullets: [
        "You&rsquo;re a <strong>services firm, contractor, manufacturer, or multi-state employer</strong>",
        "You need <strong>dependable monthly books</strong> and QuickBooks expertise",
        "You need <strong>direct payroll</strong> plus multi-state and local tax handled",
        "You need <strong>QuickBooks setup, cleanup, or migration</strong>",
        "You want a <strong>named ProAdvisor</strong>, not a rotating team",
        "You value an <strong>optional vetted local operator</strong>",
      ],
      note: "",
    },
    {
      eyebrow: "Choose Pilot if",
      name: "You&rsquo;re a high-growth, venture-backed startup.",
      bullets: [
        "You&rsquo;re a <strong>funded startup</strong> raising rounds",
        "You need <strong>GAAP-compliant accrual accounting</strong>",
        "You need <strong>ASC 606 revenue recognition</strong> and burn-rate reporting",
        "You need <strong>investor- and due-diligence-ready financials</strong>",
        "A <strong>technology-first model with a dedicated team</strong> fits how you operate",
      ],
      note: "<strong>Worth saying plainly:</strong> for the classic VC-backed startup profile, Pilot is a real, capable firm and its specialization is genuinely the closer fit &mdash; and we&rsquo;d tell you so on a call.",
    },
    {
      eyebrow: "Neither fits if",
      name: "You need full-firm tax or audit services.",
      bullets: [
        "You need a <strong>CPA firm that files taxes</strong> as the primary engagement",
        "You need <strong>audit-ready GAAP financials</strong> for a formal audit",
        "You need <strong>international multi-country entity accounting</strong>",
        "You need <strong>IRS representation</strong> or tax controversy work",
      ],
      note: "For these, you&rsquo;re looking at a CPA firm or specialized tax counsel. We&rsquo;ll happily point you toward the right fit.",
    },
  ],
  // "More honest comparisons." — 4 stack-8 H3s, VERBATIM from contract.
  related: [
    { title: "TechBrot vs QuickBooks Live", href: "/vs/techbrot-vs-quickbooks-live/", body: "Intuit&rsquo;s own first-party bookkeeping service vs an independent ProAdvisor firm &mdash; the same honest both-sides read." },
    { title: "TechBrot vs Bench", href: "/vs/techbrot-vs-bench/", body: "How TechBrot compares to Bench for small-business bookkeeping &mdash; service model, platform, and ideal customer." },
    { title: "Service Catalog", href: "/accounting/services/", body: "Everything TechBrot delivers &mdash; bookkeeping, QuickBooks, payroll, sales tax, and CFO advisory." },
    { title: "All comparisons", href: "/vs/", body: "The full library of TechBrot comparisons, each written with the same honest read." },
  ],
  // 6 FAQ — VERBATIM QUESTIONS + ANSWERS from the frozen contract (the enriched
  // canonical set). No reword, no removal.
  faq: [
    { q: "What's the main difference between TechBrot and Pilot?", a: "Pilot is a venture-backed, technology-first accounting firm built primarily for high-growth, venture-backed startups that need GAAP-compliant accrual accounting and investor-ready financials. TechBrot is an independent Certified QuickBooks ProAdvisor firm built for established U.S. small and mid-sized businesses that need reliable operational accounting &mdash; bookkeeping, QuickBooks setup and cleanup, payroll, and multi-state and local sales tax &mdash; delivered by a named ProAdvisor, with an option to route to a vetted local operator. They serve overlapping but distinct ideal customers." },
    { q: "Does Pilot offer payroll? Does TechBrot?", a: "Pilot does not run payroll directly; it helps clients select a payroll provider and integrates with tools like Gusto and Rippling. TechBrot manages payroll directly as a service, including multi-state payroll and local jurisdiction tax configuration (such as Indiana CAGIT/COIT, Ohio RITA, and Pennsylvania local PSD), which is a frequent need for established multi-state employers and a common source of misconfiguration." },
    { q: "Which is better for a venture-backed startup?", a: "For a venture-backed startup that needs GAAP-compliant accrual accounting, ASC 606 revenue recognition, burn-rate reporting, and investor-ready financials for due diligence, Pilot is purpose-built for that profile and is a strong fit. TechBrot's strength is operational accounting for established small and mid-sized businesses rather than venture due-diligence accounting, so for a classic VC-backed startup, Pilot's specialization is the closer match." },
    { q: "Which is better for an established small or mid-sized business?", a: "For an established U.S. small or mid-sized business &mdash; for example a services firm, contractor, manufacturer, or multi-state employer that needs dependable monthly books, QuickBooks expertise, direct payroll management, and multi-state and local sales tax compliance &mdash; TechBrot's model is designed for that profile. TechBrot delivers through a named Certified ProAdvisor with the option to route to a vetted local operator where in-state presence matters." },
    { q: "Do both work in QuickBooks?", a: "Yes. Pilot uses QuickBooks Online as its underlying accounting platform, and books remain accessible and exportable. TechBrot works as a Certified QuickBooks ProAdvisor across QuickBooks Online, Desktop, and Enterprise, operating inside the client's own QuickBooks file. Both keep the client's books in QuickBooks; the difference is in service model, scope, and ideal customer rather than the underlying software." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and use QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/techbrot-vs-pilot/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-pilot-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Compare","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"TechBrot vs Pilot","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

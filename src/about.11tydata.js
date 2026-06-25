/* /about/ page data (round-12 elevation from the FROZEN baseline floor).
 * tier: t-hub (founder ruling — silo entry/trust hub; overrides blueprint
 * MOFU for the parent) · chrome: full · AboutPage+Organization schema.
 * BASELINE EQUITY carried verbatim/enriched: H1, ProAdvisor credentials,
 * the "fourth option" mission, the 2016→2026 timeline (6 milestones), two
 * delivery modes, the platform thesis, six operating principles, the AI
 * roadmap, the 4-phase engagement sequence, the four scope exclusions, the
 * service summary (4), the operate-nav cards (4), the CTA.
 * ADDITIVE (standing pattern, page had none): quick-5 + an E-E-A-T FAQ —
 * about-the-firm facts AI engines cite; zero overlap between the two sets.
 * AUTHORSHIP MODEL: firm-level "Certified QuickBooks ProAdvisor team"; the
 * founder lives in the GLOBAL Person schema only (E-E-A-T anchor) — no
 * visible name/photo/byline. No individual is named in visible content. */

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
  credentials: ["Online (L2)", "Desktop", "Enterprise", "Payroll"],
  timeline: [
    { year: "2016", name: "Independent accounting practice begins.", body: "Direct work with U.S. small businesses on bookkeeping, cleanup, and accounting advisory. A decade of operational experience that became the foundation for TechBrot&rsquo;s operating standards." },
    { year: "2018&ndash;2022", name: "QuickBooks ProAdvisor certifications earned.", body: "Active certifications across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll. Certification is the credential floor for every TechBrot engagement." },
    { year: "2023", name: "TechBrot Inc. incorporated in Delaware.", body: "Delaware C-Corporation formed as the platform&rsquo;s operating entity. NAICS 541219. The shift from individual practice to institutional platform begins here." },
    { year: "2024", name: "Platform thesis and operating standard defined.", body: "Engagement sequences, vetting criteria, quality-review processes, and scoping methodology codified. The standard had to exist before the network could be built around it." },
    { year: "2025", name: "Operator network launches.", body: "First curated network partners onboarded against the operating standard. Network operations begin in parallel with direct TechBrot engagements &mdash; the platform now exists in two delivery modes." },
    { year: "2026 &mdash; ongoing", name: "Active national expansion.", body: "Scaling network coverage across priority U.S. states. AI-augmented operating systems in development to give every engagement leverage that wasn&rsquo;t possible a decade ago. Long-term goal: credentialed accounting access for every U.S. small business that needs it." },
  ],
  modes: [
    { label: "Mode one", name: "TechBrot delivers the work.", body: "Most engagements are delivered directly by our lead practice &mdash; Certified ProAdvisors operating under the TechBrot brand, with platform infrastructure and tooling behind every engagement.", list: ["Monthly bookkeeping &amp; close", "QuickBooks cleanup, catch-up, and historical work", "QuickBooks setup, migration, and consulting", "Payroll setup &amp; management", "Sales tax compliance, 1099 preparation, AP/AR", "Fractional CFO support"], cta: "Explore TechBrot services", href: "/accounting/services/" },
    { label: "Mode two", name: "A vetted local operator delivers the work.", body: "When in-state presence, specialized industry experience, or local CPA coordination matters, engagements are routed to a vetted operator in the network &mdash; an independent accounting practice running under the same standards.", list: ["State-specific compliance &amp; nexus matters", "Industry-specialized engagements", "Multi-state payroll, multi-entity coordination", "Local CPA referrals &amp; coordination", "Capacity expansion for complex projects", "Accountant or EA referrals when tax filing is needed"], cta: "See the operator network", href: "/about/network/" },
  ],
  principles: [
    { name: "Named accountability.", body: "Every engagement has a named operator with a name, real credentials, and a way to reach them. Not a rotating offshore team. Not an anonymous queue. A real practice, accountable to the work." },
    { name: "Fixed fees against written scope.", body: "No hourly billing. No scope creep. Every engagement is priced in writing before work begins. Scope changes mid-engagement are documented and discussed before being executed." },
    { name: "The client&rsquo;s file, the client&rsquo;s data.", body: "Engagements run in the client&rsquo;s existing QuickBooks file. No proprietary software, no forced migration, no data lock-in. The client owns their books before, during, and after the engagement." },
    { name: "Platform-level quality review.", body: "Quality is not self-policed. Every engagement is reviewed at the platform level against a defined operating standard. Direct engagements and network engagements meet the same bar." },
    { name: "Continuity by design.", body: "If the engagement ever needs to transition &mdash; capacity changes, operator transitions, scope evolution &mdash; the platform handles handoff without losing file context. Clients are never stuck with one operator." },
    { name: "Independence in advice.", body: "TechBrot is an independent Certified QuickBooks ProAdvisor firm. We&rsquo;re not paid by Intuit or any software vendor. If a different tool fits a client&rsquo;s business better, we say so. Honesty is part of the standard." },
  ],
  sequence: [
    { name: "Diagnostic", body: "30-minute call. We review where you are, what&rsquo;s actually needed, and which engagement profile fits. Written fixed-fee scope produced within 3 business days.", timing: "Typical: 3 business days" },
    { name: "Scope &amp; Match", body: "Engagement scope finalized in writing. Routing decision made &mdash; direct TechBrot engagement, or matched to a network operator based on state, industry, and complexity.", timing: "Typical: 2 business days" },
    { name: "Delivery", body: "Secure access established. Work delivered against the written scope. Communication runs through the platform&rsquo;s infrastructure for documentation and continuity.", timing: "Typical: 2&ndash;10 weeks for project work" },
    { name: "Review &amp; Handoff", body: "Platform-level quality review against the operating standard. Documented summary delivered. Optional transition to monthly bookkeeping for ongoing partnership.", timing: "Optional: monthly engagement" },
  ],
  scope: [
    { name: "Federal &amp; state tax preparation", body: "TechBrot does not file federal or state business tax returns. We coordinate with your CPA, EA, or tax preparer &mdash; or help you find one in your state through the network." },
    { name: "Financial audits", body: "We don&rsquo;t perform audits. If you need an audit-ready engagement, we produce books that meet auditor standards and coordinate directly with your audit firm." },
    { name: "Legal or fiduciary advice", body: "We&rsquo;re not attorneys or financial advisors. Entity structuring, equity compensation, fiduciary matters, and capital-markets advisory are coordinated with the right professional." },
    { name: "International accounting", body: "TechBrot serves U.S.-based businesses. International entity accounting, multi-country tax compliance, and cross-border structures are outside our current scope." },
  ],
  services: [
    { name: "Bookkeeping services", body: "Monthly bookkeeping, cleanup, catch-up, and multi-year historical work. The operational core of what TechBrot delivers.", cta: "Visit bookkeeping hub", href: "/accounting/bookkeeping/monthly-bookkeeping/" },
    { name: "QuickBooks ProAdvisor services", body: "Independent setup, cleanup, migration, consulting, plan selection, and ProAdvisor help across the full QuickBooks stack.", cta: "Visit QuickBooks hub", href: "/quickbooks/" },
    { name: "Financial operations", body: "Payroll, AP/AR, sales tax compliance, 1099 preparation, and fractional CFO support &mdash; the operational finance layer.", cta: "Explore financial operations", href: "/accounting/services/" },
    { name: "The operator network", body: "Find a vetted local TechBrot operator in your state. National network of independent accounting practices.", cta: "Find an accountant", href: "/find-an-accountant/" },
  ],
  navCards: [
    { name: "How the network works", body: "The structural details &mdash; how operators are vetted, how engagements are scoped, how quality is reviewed, how continuity functions.", cta: "Read about the network", href: "/about/network/" },
    { name: "Operating methodology", body: "The four-phase engagement methodology applied to every project &mdash; diagnostic, scope, delivery, review.", cta: "Read the methodology", href: "/about/methodology/" },
    { name: "Trust &amp; standards", body: "Operator vetting criteria, quality standards, independence statement, trademark posture, verification process.", cta: "The Four Trust Pillars", href: "/trust/" },
    { name: "Become a partner", body: "For independent accounting practices: how the operator partnership works, what we look for, and how to apply.", cta: "Become a Partner", href: "/partners/" },
  ],
  aiSummary: [
    { q: "What is TechBrot?", a: "<strong>An independent U.S. accounting platform</strong> &mdash; TechBrot Inc., a Delaware C-Corporation headquartered in Delaware (incorporated 2023; the practice behind it runs since 2016). It delivers professional bookkeeping, QuickBooks ProAdvisor services, and operational accounting directly through its lead practice and through a curated network of vetted local practices." },
    { q: "What QuickBooks certifications does TechBrot hold?", a: "Every engagement is led by <strong>Certified Intuit QuickBooks ProAdvisors</strong> &mdash; active across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll. Certification is the credential floor for every engagement; verification is available on request. Independent ProAdvisor firm, not affiliated with Intuit Inc." },
    { q: "How does TechBrot deliver work &mdash; one firm or a network?", a: "<strong>Two delivery modes, one operating standard.</strong> Most work is delivered directly by the lead practice; when in-state presence or specialization matters, it is routed to a vetted local operator in the network. Both modes run the same vetting, engagement sequence, quality review, and continuity guarantee." },
    { q: "Does TechBrot file taxes?", a: "<strong>No.</strong> TechBrot delivers operational accounting and CPA-ready books; federal and state tax filing and IRS representation are handled by your CPA or EA. When tax work is needed, the network helps connect you to a credentialed CPA, EA, or accountant in your state." },
    { q: "Who is TechBrot for?", a: "<strong>U.S. small and mid-sized businesses</strong> that want credentialed, accountable accounting &mdash; named operators, fixed fees against a written scope, work inside the client&rsquo;s own QuickBooks file, and platform-level quality review &mdash; instead of a single-point-of-failure solo bookkeeper, an anonymous subscription, or an offshore team." },
  ],
  faq: [
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and work in QuickBooks, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Is TechBrot a single firm or a network?", a: "Both, by design. TechBrot operates its own lead practice and curates a network of independent local practices under one operating standard. A firm scales by hiring; a platform scales by connecting &mdash; brand, demand, infrastructure, and standards on one side, local expertise and the accountability of an owner-run practice on the other." },
    { q: "Who actually does my accounting?", a: "A named, credentialed operator &mdash; a real practice with a name, real ProAdvisor credentials, and a way to reach them. Not a rotating offshore team, not an anonymous queue. Whether the work is delivered directly or by a network operator, it meets the same platform standard." },
    { q: "What does TechBrot not do?", a: "TechBrot does not file federal or state tax returns, perform financial audits, give legal or fiduciary advice, or handle international/cross-border accounting. For those, we produce the books and coordinate with &mdash; or refer you to &mdash; the right CPA, EA, auditor, or attorney. We say so on the diagnostic call." },
    { q: "How is quality kept consistent across the network?", a: "Quality is not self-policed. Every engagement &mdash; direct or network &mdash; is reviewed at the platform level against a defined operating standard, the same sequence and bar in both delivery modes." },
    { q: "What happens if my operator changes?", a: "Continuity by design. If an engagement ever needs to transition &mdash; capacity, operator, or scope changes &mdash; the platform handles the handoff without losing file context. Because the work runs in your own QuickBooks file, your books stay yours throughout." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["WebPage", "AboutPage"],
            "@id": "https://techbrot.com/about/#webpage",
            url: "https://techbrot.com/about/",
            name: "About TechBrot — An Independent U.S. Accounting Platform",
            description: data.description,
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            mainEntity: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            speakable: { "@type": "SpeakableSpecification", cssSelector: ["#about-tldr-body", "#about-in-brief-text"] },
            // reviewedBy David Westgate — honest E-E-A-T: a real named operator
            // (Westgate Financial Services, TX) genuinely reviews/delivers TechBrot
            // engagements and is named visibly in the operator block below. Scoped,
            // not blanket (see EEAT-STRATEGY.md). Global #david-westgate Person node.
            reviewedBy: { "@id": "https://techbrot.com/#david-westgate" },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/about/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://techbrot.com/about/" },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/about/#faq",
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

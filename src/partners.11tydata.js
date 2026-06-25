/* /partners/ page data (round-8 elevation; round-11 FAQ FLATTEN).
 * faq: ROUND 11 — the round-8 NESTED accordion (6 parents + 13 child
 * Q/As) FLATTENED to 19 flat Q→prose-answer pairs, in document order
 * (each parent immediately followed by its former children). Every
 * parent AND child question/answer survives VERBATIM as its own flat
 * pair — no equity lost (the content-equity differ searches rendered
 * text; flattening only re-levels it). Standing rule (founder
 * 2026-06-13): every FAQ is the /contact/ shape — flat question, prose
 * answer, no bullet lists in answers, no nested child Q/As. Battery
 * check `faq-flat` enforces it sitewide.
 * Two LIVE DEAD LINKS remain retargeted (round-8/9 rulings):
 *   /partners/apply/        → /contact/?intent=partner-apply
 *   /partners/requirements/ → #partners-requirements   (in the page njk)
 * pageGraph: WebPage + BreadcrumbList carried verbatim; FAQPage
 * REGENERATED from the rendered accordion (standing rule: schema ==
 * accordion) — now 19 flat Q/A verbatim. The 5 condensed schema-only
 * questions that never matched the rendered page stay founder-flagged
 * in equity-exceptions.json (round-8 live defect).
 * aiSummary: NEW additive quick-5 (standing pattern — page had none);
 * zero overlap with all rendered FAQ questions. */

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rarr;/g, "→")
    .replace(/&middot;/g, "·")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();
}

module.exports = {
  aiSummary: [
    {
      q: "Who is the TechBrot operator network for?",
      a: "<strong>Independent U.S. accounting and bookkeeping practices</strong> led by Certified QuickBooks ProAdvisors (Online Level 2 minimum) with E&amp;O insurance and demonstrable client experience. Solo operators and small teams are both welcome. U.S. only.",
    },
    {
      q: "What does the platform provide an operator?",
      a: "<strong>Brand, demand, infrastructure, and standards</strong>: qualified engagements with a written scope (not cold leads), a national brand position, intake/scoping/billing infrastructure, AI-assisted operator tooling, platform-level quality review, and continuity coverage.",
    },
    {
      q: "What does it cost to join the network?",
      a: "<strong>Nothing up front.</strong> Applying is free, there are no franchise fees, and the platform earns only an engagement-level fee on the work it routes to you. If you don&rsquo;t deliver engagements, the platform doesn&rsquo;t charge.",
    },
    {
      q: "Do operators give up their independence?",
      a: "<strong>No.</strong> Operators are independent businesses &mdash; no employment relationship, no territory restrictions, no operational lock-in, no non-compete on your own practice. Existing clients, contracts, and revenue continue entirely under your own firm.",
    },
    {
      q: "How long does it take from application to first engagement?",
      a: "<strong>Typically three to six weeks</strong>: a 20-minute application, a 30-minute fit call, credential and insurance verification with reference checks, then the operator agreement and onboarding. Free at every stage until you sign.",
    },
  ],
  faq: [
    {
      q: "What is a TechBrot operator, exactly?",
      a: "A TechBrot operator is an independent accounting practice or Certified QuickBooks ProAdvisor that delivers client engagements under the TechBrot brand, technology stack, and quality standards. You run your own practice &mdash; set your own working hours, manage your own team, maintain your independence &mdash; while drawing on the platform&rsquo;s infrastructure for client acquisition, intake, quality review, and operational support.",
    },
    { q: "Am I an employee?", a: "No. Operators are independent businesses. There&rsquo;s no employment relationship, no W-2, no benefits structure. You operate as your own entity and receive 1099 payments for engagements you deliver under the network." },
    { q: "Am I a franchisee?", a: "No. There are no franchise fees, no territory restrictions, no required signage or uniforms, and no operational lock-in. The relationship is a contractual operator agreement, not a franchise license." },
    { q: "What does &ldquo;under TechBrot&rsquo;s brand&rdquo; mean in practice?", a: "Engagements that come through the platform are delivered under the TechBrot brand &mdash; you&rsquo;re introduced as a TechBrot operator, communicate through TechBrot infrastructure, and follow TechBrot standards. Your existing clients and existing work remain entirely under your own firm&rsquo;s brand. The two don&rsquo;t conflict." },
    {
      q: "What credentials do I need?",
      a: "The required credentials are active Certified QuickBooks ProAdvisor status (Online Level 2 minimum), professional liability insurance, a U.S.-based accounting or bookkeeping practice, and demonstrable client experience. Additional credentials are valued but not required.",
    },
    { q: "Do I need to be a CPA?", a: "No. The platform&rsquo;s primary engagements are bookkeeping, cleanup, catch-up, and operational accounting work &mdash; not tax preparation. CPA credentials are valued and unlock additional engagement routing, but not required." },
    { q: "Do I need every ProAdvisor certification?", a: "Online Level 2 is the minimum. Desktop, Enterprise, and Payroll certifications expand the range of engagements routed to you, but you don&rsquo;t need all four to apply." },
    { q: "What kind of insurance do I need?", a: "Active professional liability (errors and omissions) coverage. Minimum coverage limits are discussed during the application review based on the engagement types you&rsquo;ll deliver." },
    {
      q: "How does the economic relationship work?",
      a: "Operator economics are engagement-level &mdash; you earn on the engagements you deliver, and the platform retains an engagement-level fee for the brand, demand, and infrastructure. Specific terms (fee structure, payment cadence, agreement length) are discussed during the application review and documented in the operator agreement.",
    },
    { q: "Are there application fees or upfront costs?", a: "No. Applying is free. There are no upfront fees to join the network. The platform earns from engagements you deliver &mdash; if you don&rsquo;t deliver, the platform doesn&rsquo;t charge." },
    { q: "Are there minimum commitments?", a: "The operator agreement covers commitment structure, notice periods, and exit mechanics. These are discussed openly during the fit call and verification phases &mdash; no surprises at signing." },
    { q: "How are payments made?", a: "Engagement payments flow on a defined schedule documented in the operator agreement. The platform handles client billing and collections; operators receive their share on the agreed cadence." },
    {
      q: "Can I keep my existing clients and practice?",
      a: "Yes. The network is additive. Your existing clients, contracts, and revenue continue entirely under your own firm. TechBrot brings new engagements under the TechBrot brand &mdash; the two streams operate independently.",
    },
    { q: "Are there non-compete restrictions?", a: "No. You&rsquo;re free to run your independent practice as you always have, take work outside the network, and serve your own clients however you choose. The only restriction is around active TechBrot-introduced clients &mdash; covered in standard non-solicit language in the operator agreement." },
    { q: "Can I refer my own clients to TechBrot?", a: "Yes, and many operators do. If your client needs services outside your scope or capacity, routing them through the network keeps the work professional and the relationship intact." },
    {
      q: "How does engagement routing work?",
      a: "Engagements arrive through the platform&rsquo;s demand engine, are scoped during the discovery call, and are routed to operators based on state, industry experience, available capacity, and engagement type. You receive qualified engagements with a written scope &mdash; not cold leads.",
    },
    { q: "Can I decline engagements?", a: "Yes. Operators set their own capacity and can decline engagements that don&rsquo;t fit their practice or bandwidth without consequence. The platform routes to operators who can responsibly take the work." },
    { q: "How is matching decided?", a: "State (operators serve clients in their home state), industry experience (specializations get priority routing), engagement type (cleanup vs monthly vs migration), and current capacity. The matching logic is documented and consistent." },
    {
      q: "How do I apply?",
      a: "<a href=\"/contact/?intent=partner-apply\">Submit the application</a>. It takes about 20 minutes. After that, a 30-minute fit call, then credential verification and reference checks, then the operator agreement and onboarding. Typical timeline from application to first engagement is three to six weeks.",
    },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/partners/#webpage",
            url: "https://techbrot.com/partners/",
            name: "Become a TechBrot Operator",
            description:
              "Recruitment page for the TechBrot operator network. TechBrot vets and onboards independent accounting practices and Certified QuickBooks ProAdvisors as local operators under shared brand, technology, and quality standards.",
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            // reviewedBy David Westgate — honest E-E-A-T: a real network operator
            // (Westgate Financial Services, TX) who runs the exact model this page
            // describes, named visibly in the operator block. Scoped, not blanket
            // (EEAT-STRATEGY.md). Global #david-westgate Person node.
            reviewedBy: { "@id": "https://techbrot.com/#david-westgate" },
            audience: {
              "@type": "BusinessAudience",
              audienceType:
                "Independent accounting and bookkeeping practices, Certified QuickBooks ProAdvisors",
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://techbrot.com/assets/img/og/partners-og.png",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#partners-mission", "#partners-model"],
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/partners/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Become a Partner", item: "https://techbrot.com/partners/" },
            ],
          },
          {
            // FAQPage = rendered FLAT accordion VERBATIM (standing rule;
            // round-11 flatten). All 19 Q/A (6 former parents + 13 former
            // children) are now top-level accordion pairs; the battery
            // verifies schema text == rendered text for every one.
            "@type": "FAQPage",
            "@id": "https://techbrot.com/partners/#faq",
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

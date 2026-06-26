/* /about/methodology/ — round-12 elevation from baseline floor (t-mofu).
 * Equity carried: H1, the five-phase model, the 6 process standards, the
 * scope (covers/doesn't/coordinates), "predictability" rationale, the
 * platform-team review note, the 4 next cards, 6 FAQ verbatim.
 * Additive: quick-5 (5, phase/output facts) — zero overlap with the FAQ.
 * Authorship: firm-level "Certified ProAdvisor team"; founder schema-only. */
function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").replace(/&rsquo;/g, "’").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rarr;/g, "→").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}
module.exports = {
  phases: [
    { name: "Discovery call", body: "A free 30-minute call with a Certified ProAdvisor to understand your business, your current accounting situation, and what you actually need &mdash; with an honest assessment of fit. We surface the real issue, which is often not the one you called about.", out: "A clear understanding of your situation and a recommended engagement direction." },
    { name: "Written fixed-fee scope", body: "Within 3 business days you receive a written scope defining exactly what will be done, by when, and for what fixed fee. No hourly billing, no ambiguity. The scope is the agreement &mdash; and the accountability standard.", out: "A written, fixed-fee scope you can accept, decline, or discuss &mdash; with no obligation." },
    { name: "Onboarding", body: "On acceptance, a named Certified ProAdvisor is assigned &mdash; the person who will actually do the work. You grant accountant-user access to your own QuickBooks file; the ProAdvisor reviews it and confirms the starting position.", out: "A named ProAdvisor, secure access to your own file, and a confirmed starting baseline." },
    { name: "Delivery", body: "Your ProAdvisor performs the work inside your own QuickBooks file, audit trail visible to you at all times. Recurring engagements follow a predictable monthly close; projects follow the scoped timeline with defined milestones. Same person every time &mdash; no queue, no rotation.", out: "Reconciled, categorized, accurate books &mdash; delivered on a rhythm you can rely on." },
    { name: "CPA-ready handoff", body: "Books are kept CPA-ready throughout &mdash; not scrambled together at year-end. For recurring engagements, year-end preparation and delivery of files to your CPA or EA is included at no extra cost. TechBrot doesn&rsquo;t file taxes; we make sure the person who does has clean, complete books.", out: "Tax-ready files and supporting schedules delivered to your CPA, on their timeline." },
  ],
  standards: [
    { name: "Free discovery call", body: "Every engagement opens with a 30-minute call &mdash; free, no obligation, no sales push." },
    { name: "Written fixed-fee scope", body: "Within 3 business days. The scope is the agreement. No hourly billing, no creep." },
    { name: "Certified ProAdvisor delivery", body: "Delivered by a Certified Intuit ProAdvisor &mdash; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification." },
    { name: "Named-operator continuity", body: "A named ProAdvisor owns your account end to end. No rotation, no re-explaining." },
    { name: "Direct file access", body: "We work inside your own QuickBooks file. Your data, your audit trail, never a parallel system." },
    { name: "CPA-ready handoff", body: "Recurring engagements include a year-end CPA handoff at no extra cost." },
  ],
  boundaries: [
    { name: "The methodology covers", body: "Discovery and honest fit assessment. Written fixed-fee scoping. Onboarding with a named ProAdvisor. Delivery inside your own QuickBooks file. Consistent monthly rhythm or scoped project timelines. CPA-ready books and year-end handoff. The same standards across every service." },
    { name: "It doesn&rsquo;t cover", body: "Tax-return preparation or filing. IRS or state representation. Audit or attestation. Legal advice. These require a licensed CPA, EA, or attorney &mdash; the methodology coordinates with them, but TechBrot doesn&rsquo;t perform them." },
    { name: "It coordinates with", body: "Your CPA or EA for tax filing and year-end. Your tax counsel for audit defense. Sales tax counsel for state-specific positions. The handoff phase is built precisely so these professionals receive clean, complete books." },
  ],
  navCards: [
    { name: "Why trust TechBrot", body: "Credentials, accountability, security, and independence &mdash; the four verifiable trust pillars.", cta: "The Four Trust Pillars", href: "/trust/" },
    { name: "Pricing", body: "Canonical fixed-fee ranges for every service, with written scope before any work.", cta: "Explore Services", href: "/pricing/" },
    { name: "Service catalog", body: "Every engagement type TechBrot delivers, with scope and the decision framework.", cta: "Explore Services", href: "/accounting/services/" },
    { name: "About TechBrot", body: "The independent accounting platform behind the methodology &mdash; firm, thesis, and operating model.", cta: "Read about TechBrot", href: "/about/" },
  ],
  aiSummary: [
    { q: "What are the five phases of a TechBrot engagement?", a: "<strong>Discovery &rarr; written fixed-fee scope &rarr; onboarding &rarr; delivery &rarr; CPA-ready handoff.</strong> A free 30-minute call, a written scope within 3 business days, a named ProAdvisor with accountant-user access to your own QuickBooks file, delivery on a consistent rhythm, and year-end files delivered to your CPA." },
    { q: "Is the methodology the same for every service?", a: "<strong>Yes &mdash; identical across bookkeeping, QuickBooks, payroll, sales tax, and fractional CFO.</strong> The process is the product: the same five phases and the same standards apply to every engagement, which is what makes engaging TechBrot predictable rather than a gamble." },
    { q: "What do I actually get from the discovery call?", a: "<strong>An honest fit assessment and a recommended engagement direction</strong> &mdash; free, 30 minutes, no obligation. A Certified ProAdvisor surfaces the real issue (often not the one you called about) and, if TechBrot isn&rsquo;t the right fit, says so and points you toward what is." },
    { q: "What is included at year-end?", a: "For recurring engagements, <strong>year-end preparation and delivery of CPA-ready files to your CPA or EA is included at no extra cost</strong>. Books are kept CPA-ready throughout the year, so tax season is never a fire drill." },
    { q: "What does the methodology deliberately not do?", a: "It does <strong>not</strong> include tax-return preparation or filing, IRS or state representation, audit/attestation, or legal advice &mdash; those need a licensed CPA, EA, or attorney. The methodology coordinates with them; the CPA-ready handoff exists precisely so they receive clean, complete books." },
  ],
  faq: [
    { q: "What is TechBrot&rsquo;s process for starting an engagement?", a: "Five phases: (1) a free 30-minute discovery call, (2) a written fixed-fee scope within 3 business days, (3) onboarding with a named ProAdvisor and accountant-user access, (4) delivery inside your own QuickBooks file, and (5) a CPA-ready handoff at year-end. The sequence is identical across bookkeeping, QuickBooks, payroll, sales tax, and fractional CFO." },
    { q: "How long does onboarding take?", a: "Recurring engagements (e.g. monthly bookkeeping) complete onboarding in about two weeks after the scope is accepted. One-time projects (cleanup, migration) begin on the scoped start date. Discovery and the written scope precede onboarding, within the first few business days." },
    { q: "Why does TechBrot use written fixed-fee scopes instead of hourly billing?", a: "You know the total cost and exact deliverables before work begins. The written scope is also the accountability standard &mdash; work that doesn&rsquo;t match it is corrected at no cost, and genuine expansion is re-quoted and re-approved in writing. No unpredictable invoices." },
    { q: "Will I work with the same person throughout?", a: "Yes. A named Certified ProAdvisor owns your engagement end to end &mdash; the same person scopes, delivers, and handles ongoing work. No account-manager rotation, no re-explaining your business each quarter." },
    { q: "Does TechBrot work inside my QuickBooks file or its own system?", a: "Inside your own QuickBooks file, as an authorized accountant-user. Your data stays yours, the audit trail is visible to you, and access is revocable anytime. No forced export to a parallel system." },
    { q: "Is TechBrot affiliated with Intuit Inc.?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications, but TechBrot is not owned, employed, or operated by Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", "@id": "https://techbrot.com/about/methodology/#webpage", url: "https://techbrot.com/about/methodology/", name: "Our Methodology — How a TechBrot Engagement Works", description: data.description, isPartOf: { "@id": "https://techbrot.com/#website" }, about: { "@id": "https://techbrot.com/#organization" }, publisher: { "@id": "https://techbrot.com/#organization" }, inLanguage: "en-US", speakable: { "@type": "SpeakableSpecification", cssSelector: ["#methodology-tldr-body"] } },
          { "@type": "BreadcrumbList", "@id": "https://techbrot.com/about/methodology/#breadcrumb", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://techbrot.com/about/" },
            { "@type": "ListItem", position: 3, name: "Methodology", item: "https://techbrot.com/about/methodology/" },
          ] },
          { "@type": "FAQPage", "@id": "https://techbrot.com/about/methodology/#faq", mainEntity: data.faq.map((i) => ({ "@type": "Question", name: stripTags(i.q), acceptedAnswer: { "@type": "Answer", text: stripTags(i.a) } })) },
          {
            "@type": "HowTo",
            "@id": "https://techbrot.com/about/methodology/#howto",
            name: "How a TechBrot engagement works",
            description: "The five-phase methodology behind every TechBrot engagement — discovery, written fixed-fee scope, onboarding, delivery, and CPA-ready handoff.",
            step: data.phases.map((ph, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: stripTags(ph.name),
              text: stripTags(ph.body),
            })),
          },
        ],
      };
    },
  },
};

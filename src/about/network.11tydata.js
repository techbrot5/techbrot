/* /about/network/ — round-12 elevation from baseline floor (t-mofu).
 * FIXES TODO-3 live defects at elevation: real <title>, real meta
 * description, and a canonical (base.njk emits canonical from page.url) —
 * the baseline record had title "BSS-1-11ty", empty meta, no canonical.
 * Equity carried: H1, the model paragraph, the 4-step platform flow, the
 * two delivery modes, the 6-criterion vetting bar, the alternatives
 * comparison, the 4 next cards, 5 baseline FAQ verbatim (+1 real
 * accountant-join FAQ to clear faq-min-6). Additive quick-5 (5), zero
 * overlap with the FAQ. Firm-level authorship; founder schema-only. */
function stripTags(html) {
  return html.replace(/<[^>]+>/g, "").replace(/&rsquo;/g, "’").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rarr;/g, "→").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}
module.exports = {
  flow: [
    { name: "You", body: "Book a discovery call. The platform learns your situation, books, and goals." },
    { name: "The Platform", body: "Scopes the engagement, applies the standard, and matches you to the right operator &mdash; lead practice or vetted local ProAdvisor." },
    { name: "Your Named Operator", body: "A Certified ProAdvisor delivers the work inside your own QuickBooks file, as your single point of contact." },
    { name: "Continuity, Guaranteed", body: "Platform-level quality review and continuity &mdash; if anything changes, your account transitions with full context. No data loss." },
  ],
  modes: [
    { label: "Mode one", name: "Delivered directly by TechBrot.", body: "TechBrot&rsquo;s own Certified ProAdvisor practice handles the engagement end to end &mdash; common for QuickBooks-heavy work, cleanups, migrations, and clients in states served directly.", list: ["Named ProAdvisor as your point of contact", "Work delivered inside your own QuickBooks file", "Full platform standards &amp; quality review", "Direct line to the people doing the work"], cta: "Book the discovery call", href: "/contact/?intent=home" },
    { label: "Mode two", name: "Delivered by a network ProAdvisor.", body: "A vetted independent Certified ProAdvisor in your market delivers under TechBrot&rsquo;s brand and standards &mdash; for clients who want a local operator in their state and time zone.", list: ["Local operator in your state &amp; time zone", "Same vetting, standards &amp; file ownership", "Platform-level quality review &amp; continuity", "Matched to your industry &amp; complexity"], cta: "Find an accountant", href: "/find-an-accountant/" },
  ],
  vetting: [
    { name: "Credentials verified", body: "Active Certified QuickBooks ProAdvisor status confirmed, plus relevant accounting and bookkeeping qualifications for the work they take on." },
    { name: "Insured &amp; in good standing", body: "Professional liability coverage and a clean professional standing &mdash; operators carry real accountability for the work they deliver." },
    { name: "References &amp; work review", body: "References checked and a sample of real work reviewed before any client is matched. We see how they actually work, not just what they claim." },
    { name: "Standards onboarding", body: "Operators onboard against TechBrot&rsquo;s documented operating sequence &mdash; scoping, file handling, reconciliation discipline, reporting cadence, and communication." },
    { name: "Ongoing platform review", body: "Work quality is reviewed at the platform level on an ongoing basis &mdash; not just at intake. Standards are maintained, not assumed." },
    { name: "Your file, your data", body: "All work happens in your own QuickBooks file under your account. Full export anytime &mdash; portability and continuity are structural, not promises." },
  ],
  compare: {
    cols: ["Solo bookkeeper", "Remote subscription", "Offshore team"],
    rows: [
      { dim: "Named operator", us: "Yes — local practice", others: ["Yes — but one person", "No — rotating staff", "No — anonymous team"] },
      { dim: "Continuity if they leave", us: "Platform transition", others: ["You&rsquo;re stuck", "New rep, no context", "New rep, no context"] },
      { dim: "Standards &amp; quality review", us: "Platform-level", others: ["Self-policed", "Internal only", "Variable"] },
      { dim: "QuickBooks expertise", us: "Certified ProAdvisor network", others: ["Varies widely", "Often proprietary tools", "Variable"] },
      { dim: "Works in your QuickBooks file", us: "Yes — your file, your data", others: ["Usually yes", "Sometimes — proprietary software", "Varies"] },
    ],
  },
  navCards: [
    { name: "Our methodology", body: "The defined operating sequence every engagement follows, lead practice or operator alike.", cta: "Read the methodology", href: "/about/methodology/" },
    { name: "Find an Accountant", body: "Connect with a vetted TechBrot operator in your state &mdash; or get matched to the closest fit.", cta: "Find an accountant", href: "/find-an-accountant/" },
    { name: "Trust &amp; standards", body: "Credentials, accountability, and the standards behind the brand.", cta: "The Four Trust Pillars", href: "/trust/" },
    { name: "For Accountants", body: "Run an independent practice? See how joining the network works.", cta: "Become a Partner", href: "/partners/" },
  ],
  aiSummary: [
    { q: "What is the TechBrot operator network?", a: "<strong>A platform, not a single firm.</strong> TechBrot pairs an independent lead accounting practice with a curated network of vetted local Certified QuickBooks ProAdvisors &mdash; under one brand, one documented standard, and one named point of accountability. You get local expertise with platform-grade continuity." },
    { q: "How does the platform match me to an operator?", a: "The platform scopes your engagement, then matches you by <strong>state, industry, and complexity</strong> &mdash; to TechBrot&rsquo;s lead practice or to a vetted local Certified ProAdvisor in your market. Every match is a named point of accountability, never an anonymous queue." },
    { q: "What do I get in both delivery modes?", a: "In both modes: <strong>a named Certified ProAdvisor, work inside your own QuickBooks file, and platform-level standards, quality review, and continuity.</strong> The difference is only who delivers &mdash; the lead practice or a vetted local operator." },
    { q: "Can I get a local operator in my state?", a: "Yes. When local presence or your time zone matters, the platform matches you to a <strong>vetted independent Certified ProAdvisor in your state</strong>, delivering under TechBrot&rsquo;s brand and standards. For QuickBooks-heavy work and clients in directly-served states, the lead practice delivers." },
    { q: "Do I keep ownership of my QuickBooks file and data?", a: "<strong>Always.</strong> All work happens in your own QuickBooks file under your account, with full export anytime. The platform never locks you in &mdash; continuity is a feature, not a hostage." },
  ],
  faq: [
    { q: "Is TechBrot a single firm or a network?", a: "Both. TechBrot runs a lead accounting practice that delivers work directly, and a curated network of vetted independent local Certified ProAdvisors who deliver under TechBrot&rsquo;s brand, standards, and platform. Every engagement has one named point of accountability &mdash; you&rsquo;re never handed to an anonymous queue." },
    { q: "Who actually does my bookkeeping?", a: "A named Certified ProAdvisor &mdash; either TechBrot&rsquo;s lead practice or a vetted local operator matched to your state and needs. You work with that named person inside your own QuickBooks file, not a rotating team. You&rsquo;ll know who they are and how to reach them." },
    { q: "How are operators vetted?", a: "Operators are screened for Certified ProAdvisor credentials, professional insurance, references, and a work-quality review, then onboarded against TechBrot&rsquo;s documented standards and reviewed at the platform level on an ongoing basis. The full bar is on this page under &ldquo;Every operator clears the same bar.&rdquo;" },
    { q: "What happens if my operator becomes unavailable?", a: "Because the work lives in your own QuickBooks file under platform standards, TechBrot can transition your account to another vetted operator with full context &mdash; no data loss, no starting over. This is the core advantage over a solo bookkeeper: continuity is a platform guarantee, not dependent on one individual." },
    { q: "Does the network cost more than hiring a bookkeeper directly?", a: "No. Engagements are fixed-fee against a written scope, in the same ranges as a quality independent firm &mdash; see the canonical pricing. The platform adds vetting, standards, and continuity at no premium. The cost is in the work, not the model." },
    { q: "I&rsquo;m an accountant &mdash; can I join the network?", a: "Possibly. The network is selective and built around the vetting standards on this page. If you run an independent practice and meet the bar, see the partner page for how the partnership works and how to apply." },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", "@id": "https://techbrot.com/about/network/#webpage", url: "https://techbrot.com/about/network/", name: "A platform, not a single firm — the TechBrot operator network", description: data.description, isPartOf: { "@id": "https://techbrot.com/#website" }, about: { "@id": "https://techbrot.com/#organization" }, publisher: { "@id": "https://techbrot.com/#organization" }, inLanguage: "en-US", speakable: { "@type": "SpeakableSpecification", cssSelector: ["#network-tldr-body"] } },
          { "@type": "BreadcrumbList", "@id": "https://techbrot.com/about/network/#breadcrumb", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://techbrot.com/about/" },
            { "@type": "ListItem", position: 3, name: "The Network", item: "https://techbrot.com/about/network/" },
          ] },
          { "@type": "FAQPage", "@id": "https://techbrot.com/about/network/#faq", mainEntity: data.faq.map((i) => ({ "@type": "Question", name: stripTags(i.q), acceptedAnswer: { "@type": "Answer", text: stripTags(i.a) } })) },
        ],
      };
    },
  },
};

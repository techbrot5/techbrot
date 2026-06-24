/* /trust/ page data (round-8 elevation).
 * pageGraph: WebPage + BreadcrumbList + page-scoped Organization
 * (E-E-A-T credential node) carried VERBATIM from the live page;
 * FAQPage regenerated from the accordion data (standing rule: schema ==
 * rendered, battery-enforced) — live FAQPage matched the accordion, so
 * this is equivalent.
 * aiSummary: the live page's five-question block. THREE questions are
 * REWORDED (answers verbatim) because they duplicated FAQ accordion
 * questions verbatim — standing zero-overlap rule (battery faq-overlap).
 * Original texts remain on the page verbatim inside the FAQ accordion.
 * Flagged in the round-8 report. */

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
      // live: "Why should I trust TechBrot with my books?" — duplicated
      // FAQ q1 verbatim; reworded here, answer verbatim
      q: "What makes TechBrot safe to trust with my books?",
      a: "<strong>Four verifiable pillars:</strong> <strong>credentials</strong> (Certified Intuit ProAdvisors, verifiable on Intuit&rsquo;s directory), <strong>accountability</strong> (fixed-fee written scope, named ProAdvisor owns the account), <strong>security</strong> (bank-level encryption, access inside your own QuickBooks file, no data export), <strong>independence</strong> (not affiliated with Intuit Inc. &mdash; recommendations follow your needs).",
    },
    {
      // live: "Are TechBrot's credentials verifiable?" — duplicated FAQ q2
      q: "Can I verify TechBrot&rsquo;s credentials myself?",
      a: "Yes. ProAdvisor certifications are issued by Intuit and listed on Intuit&rsquo;s public directory at proadvisor.intuit.com. Searchable by name or firm. Certifications expire annually &mdash; a current listing means current credentials. TechBrot Inc. is a registered Delaware C-Corporation, founded 2023.",
    },
    {
      q: "How is my financial data protected?",
      a: "TechBrot works as an <strong>accountant-user inside your existing QuickBooks file</strong> &mdash; your data, your access controls, grantable and revocable anytime. <strong>No data export to a parallel system.</strong> Encrypted screen-share and file transfers. Audit trail always visible to you.",
    },
    {
      q: "What if I&rsquo;m not satisfied?",
      a: "Every engagement is governed by a <strong>written fixed-fee scope agreed before work begins</strong>. Work that doesn&rsquo;t match the scope is corrected at no additional cost. <strong>No long-term contract lock-in</strong> on recurring engagements. The named ProAdvisor and the written scope are the accountability reference.",
    },
    {
      // live: "Does TechBrot have reviews?" — duplicated FAQ q5
      q: "Where are TechBrot&rsquo;s client reviews?",
      a: "A verified-review program is in development with client consent. Rather than publish unverified testimonials, current trust signals are <strong>verifiable facts</strong>: active Intuit certifications, Delaware C-Corp registration, transparent published pricing, honest scope. <strong>Verified reviews will publish as the program completes.</strong>",
    },
  ],
  faq: [
    {
      q: "Why should I trust TechBrot with my books?",
      a: "Four verifiable pillars: <strong>credentials</strong> (Certified Intuit ProAdvisors, verifiable on Intuit&rsquo;s directory), <strong>accountability</strong> (fixed-fee written scope, named ProAdvisor owns the account), <strong>security</strong> (bank-level encryption, access inside your own QuickBooks file), <strong>independence</strong> (not affiliated with Intuit Inc.). Every claim is checkable.",
    },
    {
      q: "Are TechBrot&rsquo;s credentials verifiable?",
      a: "Yes. ProAdvisor certifications are issued by Intuit and listed on Intuit&rsquo;s public directory at proadvisor.intuit.com &mdash; searchable by firm name. Certifications expire annually; a current listing means current credentials. TechBrot Inc. is a registered Delaware C-Corporation, founded 2023.",
    },
    {
      q: "How does TechBrot protect my financial data?",
      a: "We work as an <strong>accountant-user inside your existing QuickBooks file</strong> &mdash; your data, your access controls, grantable and revocable anytime. <strong>No data export to a parallel system.</strong> Encrypted screen-share and file transfers. Audit trail always visible to you. Details in our <a href=\"/legal/dpa/\">data processing terms</a>.",
    },
    {
      q: "What happens if I&rsquo;m not satisfied with the work?",
      a: "Every engagement is governed by a <strong>written fixed-fee scope agreed before work begins</strong>. Work that doesn&rsquo;t match the scope is corrected at no additional cost &mdash; the scope is the standard. <strong>No long-term contract lock-in</strong> on recurring engagements. The named ProAdvisor and written scope are the accountability reference.",
    },
    {
      q: "Does TechBrot have reviews?",
      a: "A <strong>verified-review program is in development</strong> with client consent. Rather than publish unverified testimonials, current trust signals are <strong>verifiable facts</strong>: active Intuit certifications, Delaware C-Corp registration, transparent published pricing, honest scope. Verified reviews will publish as the program completes.",
    },
    {
      q: "Is TechBrot affiliated with Intuit Inc.?",
      a: "<strong>No.</strong> TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. Active Intuit certifications, but not owned, employed, or operated by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc. <strong>Independence is a trust feature</strong> &mdash; recommendations follow your needs, not vendor relationships.",
    },
  ],
  eleventyComputed: {
    pageGraph(data) {
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://techbrot.com/trust/#webpage",
            url: "https://techbrot.com/trust/",
            name: "Why Trust TechBrot",
            description:
              "TechBrot's trust and accountability standards — Certified Intuit ProAdvisor credentials, fixed-fee written scopes, named-operator accountability, data security posture, and honest scope of services.",
            isPartOf: { "@id": "https://techbrot.com/#website" },
            about: { "@id": "https://techbrot.com/#organization" },
            publisher: { "@id": "https://techbrot.com/#organization" },
            inLanguage: "en-US",
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://techbrot.com/assets/img/og/trust-og.png",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#trust-tldr", "#trust-ai-summary"],
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://techbrot.com/trust/#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://techbrot.com/" },
              { "@type": "ListItem", position: 2, name: "Trust", item: "https://techbrot.com/trust/" },
            ],
          },
          {
            "@type": "Organization",
            "@id": "https://techbrot.com/trust/#organization",
            name: "TechBrot Inc.",
            url: "https://techbrot.com/",
            foundingDate: "2023",
            description:
              "Independent Certified QuickBooks ProAdvisor firm delivering operational accounting, bookkeeping, payroll, sales tax compliance, and fractional CFO services to U.S. small and mid-sized businesses.",
            knowsAbout: [
              "QuickBooks Online",
              "QuickBooks Desktop",
              "QuickBooks Enterprise",
              "QuickBooks Payroll",
              "Small business bookkeeping",
              "Multi-state payroll",
              "Multi-state sales tax compliance",
            ],
            hasCredential: [
              "QuickBooks Online Level 2",
              "QuickBooks Desktop",
              "QuickBooks Enterprise",
              "QuickBooks Payroll",
            ].map((p) => ({
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "professional certification",
              name: `Intuit Certified QuickBooks ProAdvisor — ${p}`,
              recognizedBy: { "@type": "Organization", name: "Intuit Inc." },
            })),
          },
          {
            "@type": "FAQPage",
            "@id": "https://techbrot.com/trust/#faq",
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

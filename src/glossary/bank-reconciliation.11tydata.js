/* /glossary/bank-reconciliation/ — GLOSSARY type PROOF (growth phase, 2026-06-17).
 * DefinedTerm + WebPage + BreadcrumbList + FAQPage. Global Org/WebSite injected by
 * base.njk (schemaGlobal) and referenced by @id. FAQPage is built from the `faq`
 * array so it mirrors the rendered accordion VERBATIM (battery faq-schema-verbatim).
 * Honesty: real, accurate definitions only; firm-level byline (founder-name-zero). */

function stripTags(html) {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&rsquo;/g, "’").replace(/&mdash;/g, "—").replace(/&amp;/g, "&")
    .replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/\s+/g, " ").trim();
}

const URL = "https://techbrot.com/glossary/bank-reconciliation/";
const DEFINITION =
  "Bank reconciliation is the process of comparing the transactions recorded in your accounting " +
  "records against your bank statement for the same period, and resolving every difference, so that " +
  "your book balance and your bank balance agree. It confirms that each deposit, payment, and bank fee " +
  "is recorded once and correctly, and that timing differences such as outstanding checks and deposits " +
  "in transit are accounted for. It is performed per account, per period, usually monthly when the " +
  "statement closes.";

const faq = [
  { q: "What is bank reconciliation?",
    a: "Bank reconciliation is the process of comparing the transactions in your accounting records against your bank statement for the same period and resolving every difference, so that your book balance and your bank balance agree. It confirms each deposit, payment, and fee is recorded once and correctly, and that timing differences are accounted for." },
  { q: "How often should you reconcile a bank account?",
    a: "Monthly &mdash; every bank and credit-card account, as soon as the statement closes. Reconciling monthly keeps errors small and easy to find; letting it lapse for months is how books drift out of trust and a cleanup becomes necessary." },
  { q: "What is the difference between the book balance and the bank balance?",
    a: "The book balance is everything you have recorded; the bank balance is only what has cleared the bank. The difference between them is timing &mdash; outstanding checks and deposits in transit. Reconciliation explains that gap rather than forcing the two equal." },
  { q: "What happens if you don&rsquo;t reconcile your accounts?",
    a: "Errors compound silently. A missed, duplicated, or miscategorized transaction distorts every report built on the books &mdash; profit, cash position, and tax figures &mdash; and can hide bank errors or fraud. Unreconciled books cannot be relied on for decisions or filed from with confidence." },
  { q: "Is reconciling the same as categorizing transactions?",
    a: "No. Categorizing assigns each transaction to the right account; reconciling proves the complete set of transactions matches the bank for the period. You can categorize every transaction and still be unreconciled if something is missing, duplicated, or recorded at the wrong amount." },
  { q: "Does QuickBooks reconcile bank accounts automatically?",
    a: "No. QuickBooks Online and Desktop both provide a reconcile tool and bank feeds that speed the work, but reconciliation still requires a person to confirm the statement matches, resolve discrepancies, and close the period. Bank-feed matching is not the same as a completed reconciliation." },
];

module.exports = {
  faq,
  eleventyComputed: {
    pageGraph: () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": URL + "#webpage",
          "url": URL,
          "name": "Bank reconciliation",
          "description": "Bank reconciliation: what it is, why it is the core accuracy control in bookkeeping, and how it works.",
          "isPartOf": { "@id": "https://techbrot.com/#website" },
          "about": { "@id": URL + "#term" },
          "publisher": { "@id": "https://techbrot.com/#organization" },
          "inLanguage": "en-US",
          "datePublished": "2026-06-17",
          "dateModified": "2026-06-17",
          "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#gl-bankrec-def-body"] },
          "breadcrumb": { "@id": URL + "#breadcrumb" },
          "mainEntity": { "@id": URL + "#term" },
        },
        {
          "@type": "DefinedTerm",
          "@id": URL + "#term",
          "name": "Bank reconciliation",
          "description": DEFINITION,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "@id": "https://techbrot.com/glossary/#set",
            "name": "TechBrot Accounting & QuickBooks Glossary",
            "url": "https://techbrot.com/glossary/",
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": URL + "#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://techbrot.com/" },
            { "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://techbrot.com/glossary/" },
            { "@type": "ListItem", "position": 3, "name": "Bank reconciliation", "item": URL },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": URL + "#faq",
          "mainEntity": faq.map((it) => ({
            "@type": "Question",
            "name": stripTags(it.q),
            "acceptedAnswer": { "@type": "Answer", "text": stripTags(it.a) },
          })),
        },
      ],
    }),
  },
};

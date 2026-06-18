/* /quickbooks/support/ — QUICKBOOKS SUPPORT HUB (t-bofu honest-triage). The CollectionPage that
 * routes "QuickBooks support / help / customer service" demand: Intuit-account intent → Intuit;
 * file/books/error/setup/payroll-in-file intent → independent paid Certified ProAdvisor. Honesty
 * is the #1 gate. CollectionPage + BreadcrumbList + ItemList + FAQPage + speakable; provider /
 * publisher = #organization always. reviewedBy = #david-westgate (founder-name-zero in visible
 * content). Mirrors the speak-expert honest-triage page and the FL cities-hub CollectionPage shape.
 *
 * SHEET-7 SUPPORT-SILO RULES MET: (1) ATF disclosure banner "TechBrot is an independent accounting
 * firm of Certified QuickBooks ProAdvisors. We are not Intuit. For account, billing, or subscription
 * issues, contact Intuit directly →" with the Intuit link (rel noopener nofollow). (2) FIRST FAQ =
 * "Is this Intuit's official QuickBooks support?" → No, plainly. (3) Never "official" near our offer;
 * nominative fair use only; trademarks acknowledged; no Intuit logo. (4) Phone CTA = "Talk to a
 * Certified ProAdvisor (independent firm)", never "QuickBooks support line". (5) provider/publisher =
 * #organization. (6) Triage routes account/billing → Intuit, file/books → TechBrot.
 *
 * NO DEAD LINKS: spokes link ONLY to built/this-wave URLs — the flagship how-to-contact +
 * independent-help (ship in this proof set), plus the EXISTING speak-expert and help/error-codes.
 * Later help-symptom pages are described in PROSE on the page, not linked.
 *
 * HONESTY (R5/R9): no fabricated Intuit phone/hours/24-7; no invented reviews/stats; canonical
 * pricing only (none quoted here); David Westgate only in #david-westgate JSON-LD node. */
const stripTags = (html) => html.replace(/<[^>]+>/g, "").replace(/&rsquo;/g, "’").replace(/&lsquo;/g, "‘").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&rarr;/g, "→").replace(/&hellip;/g, "…").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&middot;/g, "·").replace(/\s+/g, " ").trim();

const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/quickbooks/support/";

// SUPPORT SPOKES — buyer-cards. ONLY confirmed-built or this-wave URLs (no dead links).
const spokes = [
  { eyebrow: "Routing guide", title: "How to contact QuickBooks support", body: "The honest map of every &ldquo;contact QuickBooks support&rdquo; path &mdash; which problems go to Intuit (account, billing, login, software bugs) and which go to an independent Certified ProAdvisor (your file, cleanup, setup, payroll inside the books).", href: "/quickbooks/support/how-to-contact-quickbooks-support/", cta: "How to contact support" },
  { eyebrow: "What we actually do", title: "Independent QuickBooks help", body: "What an independent Certified QuickBooks ProAdvisor firm can &mdash; and cannot &mdash; do for you: paid, hands-on work inside your own QuickBooks file. Not Intuit, not free product support.", href: "/quickbooks/support/independent-quickbooks-help/", cta: "Independent help" },
  { eyebrow: "Talk to a person", title: "Speak to a QuickBooks expert", body: "A free 30-minute discovery call with a Certified ProAdvisor about your own books &mdash; setup, cleanup, migration, payroll. Independent firm; for an Intuit account or billing issue, that&rsquo;s Intuit&rsquo;s line, not this one.", href: "/quickbooks/speak-to-a-quickbooks-expert/", cta: "Speak to an expert" },
  { eyebrow: "Got a code?", title: "QuickBooks error codes reference", body: "H-series, 6000-series, PS-series, 3371, 15240, unrecoverable and C-series &mdash; what each means, what causes it, whether you can fix it yourself, and when a ProAdvisor needs to step in.", href: "/quickbooks/help/error-codes/", cta: "Error codes" },
];

// AI SUMMARY — five questions. First answer carries the honest split and the speakable selector
// lives on this block (#qb-support-hub-summary).
const aiSummary = [
  { q: "Is this Intuit&rsquo;s QuickBooks support?", a: "No. TechBrot is an <strong>independent accounting firm of Certified QuickBooks ProAdvisors &mdash; not Intuit</strong>, not QuickBooks Customer Support, and not QuickBooks Live. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification this firm holds from Intuit; it does not mean affiliation or endorsement. For an Intuit account, billing, subscription, login, or software-bug issue, contact <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">Intuit directly</a>." },
  { q: "What should go to Intuit?", a: "Anything about the <strong>Intuit account or the software itself</strong>: access and ownership, billing, subscriptions, renewals and refunds, login/password/two-factor resets, and QuickBooks software bugs, outages, or Intuit-side error codes. This team cannot access your Intuit account or change the software." },
  { q: "What does an independent ProAdvisor do?", a: "The <strong>accounting work inside your own QuickBooks file</strong>: fixing file errors, cleanup, reconciliation that won&rsquo;t balance, correct setup and chart of accounts, Desktop-to-Online or Enterprise migration, payroll mapping, and CPA-ready books. This is paid engagement work, not free product support." },
  { q: "How do I reach a Certified ProAdvisor here?", a: "Call <strong>+1 (877) 751-5575</strong> &mdash; a Certified ProAdvisor answers (independent firm), or start the <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a>. The discovery call is 30 minutes, free, and no-obligation, with a written fixed-fee scope within 3 business days." },
  { q: "Is TechBrot affiliated with Intuit?", a: "No. <strong>Independent Certified QuickBooks ProAdvisor firm.</strong> Active Intuit certifications, but not owned, operated, or employed by Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
];

// FAQ — 6 Q/A. FIRST = the mandatory "official support" question, answered No, plainly.
// visible faq__list = FAQPage mainEntity (same array).
const faq = [
  { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent accounting firm of Certified QuickBooks ProAdvisors &mdash; we are not Intuit, not QuickBooks Customer Support, and not QuickBooks Live. This is not Intuit&rsquo;s support and is not affiliated with, endorsed by, or sponsored by Intuit Inc. For account, billing, subscription, login, or software-bug issues, contact Intuit directly at quickbooks.intuit.com/learn-support/. What we provide is paid accounting work inside your own QuickBooks file." },
  { q: "What can you actually help with?", a: "The accounting work inside your own books: fixing a broken or messy QuickBooks company file, cleanup, reconciliation that won&rsquo;t balance, correct setup and chart of accounts, sales-tax configuration, Desktop-to-Online or Enterprise migration without data loss, and payroll mapping inside the file. We get your books CPA-ready; your CPA or EA files." },
  { q: "What should I take to Intuit instead?", a: "Anything about the Intuit account or the software itself: account access and ownership, billing, subscriptions, renewals and refunds, login, password, and two-factor resets, and QuickBooks software bugs, outages, or Intuit-side error codes. This team cannot access your Intuit account, change your subscription, reset your login, or fix the software &mdash; Intuit can." },
  { q: "Is your QuickBooks help free?", a: "The discovery call and an initial file review are free and no-obligation. The hands-on work &mdash; cleanup, setup, migration, payroll, monthly bookkeeping &mdash; is a paid engagement with a written fixed-fee scope delivered within 3 business days of the call. We are an independent firm; we are not Intuit&rsquo;s free product-support line." },
  { q: "Do you have a QuickBooks support phone number?", a: "We have a direct line to our own firm &mdash; +1 (877) 751-5575, where a Certified ProAdvisor answers, Monday to Friday. It is an independent firm&rsquo;s line for work inside your own books, not a QuickBooks or Intuit support line. We do not publish or operate any Intuit support number; for Intuit account or product help, use Intuit&rsquo;s own support channels." },
  { q: "Are you affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications, but TechBrot is not owned, operated, or employed by Intuit Inc., and holding a certification does not mean affiliation, endorsement, or sponsorship. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
];

// EXPERT REVIEW — firm-level (no founder name in visible content).
const reviewProse = "This hub is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm. Its whole job is honest routing: account, billing, subscription, login, and software-bug issues belong to <a href=\"https://www.intuit.com/\" rel=\"noopener nofollow\">Intuit Inc.</a> and we send you there; the accounting work inside your own QuickBooks file is what this firm does. TechBrot is an independent firm &mdash; not affiliated with, endorsed by, or sponsored by Intuit Inc.; it provides no Intuit account, billing, or product support, and does not file tax returns or represent clients before the IRS. QuickBooks and Intuit are registered trademarks of Intuit Inc.";

const reviewCreds = [
  { label: "Direct line", detail: "+1 (877) 751-5575 &middot; a Certified ProAdvisor answers (independent firm)" },
  { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll &middot; verifiable on Intuit&rsquo;s directory" },
  { label: "Out of scope", detail: "No Intuit account, billing, subscription, login, or product support &middot; no tax filing or IRS representation" },
  { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
];

// RELATED — grid-2 buyer-cards. Built URLs only.
const related = [
  { title: "QuickBooks Services Hub", body: "Every QuickBooks engagement type &mdash; setup, cleanup, migration, and ongoing expertise on your own file.", href: "/quickbooks/", cta: "QuickBooks hub" },
  { title: "Free file review", body: "Have a Certified ProAdvisor look at your actual QuickBooks file and scope what&rsquo;s wrong &mdash; free, no obligation.", href: "/quickbooks/file-review/?intent=file-review", cta: "Get the file review" },
  { title: "General Contact", body: "Non-QuickBooks engagements &mdash; bookkeeping, payroll, sales tax, fractional CFO &mdash; route through the general contact page.", href: "/contact/?intent=qb-support", cta: "Contact TechBrot" },
  { title: "Intuit support (Intuit&rsquo;s site)", body: "For an Intuit account, billing, subscription, login, or software-bug issue, this is the right place &mdash; Intuit&rsquo;s own support, not us.", href: "https://quickbooks.intuit.com/learn-support/", rel: "noopener nofollow", cta: "Go to Intuit support" },
];

module.exports = {
  spokes,
  aiSummary,
  faq,
  reviewProse,
  reviewCreds,
  related,
  eleventyComputed: {
    pageGraph(data) {
      return { "@context": "https://schema.org", "@graph": [
        { "@type": ["CollectionPage", "WebPage"], "@id": URL + "#webpage", "url": URL, "name": "QuickBooks Support — Independent Certified ProAdvisor Help", "description": "Honest QuickBooks support routing from TechBrot, an independent Certified QuickBooks ProAdvisor firm — not Intuit. Intuit account, billing, subscription, login, and software-bug issues go to Intuit; file errors, cleanup, reconciliation, setup, migration, and payroll inside your own books are handled by an independent Certified ProAdvisor. Provides no Intuit account, billing, or product support.", "isPartOf": { "@id": ORIGIN + "/#website" }, "about": { "@id": ORIGIN + "/#organization" }, "publisher": { "@id": ORIGIN + "/#organization" }, "provider": { "@id": ORIGIN + "/#organization" }, "breadcrumb": { "@id": URL + "#breadcrumb" }, "inLanguage": "en-US", "mainEntity": { "@id": ORIGIN + "/#organization" }, "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#qb-support-hub-summary"] }, "reviewedBy": { "@id": ORIGIN + "/#david-westgate" }, "lastReviewed": "2026-06-18" },
        { "@type": "BreadcrumbList", "@id": URL + "#breadcrumb", "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": ORIGIN + "/" },
          { "@type": "ListItem", "position": 2, "name": "QuickBooks", "item": ORIGIN + "/quickbooks/" },
          { "@type": "ListItem", "position": 3, "name": "Support" }] },
        { "@type": "ItemList", "@id": URL + "#spokes", "name": "QuickBooks support pages", "itemListElement": spokes.map(function (s, idx) { return { "@type": "ListItem", "position": idx + 1, "name": stripTags(s.title), "url": s.href.indexOf("http") === 0 ? s.href : ORIGIN + s.href }; }) },
        { "@type": "FAQPage", "@id": URL + "#faq", "publisher": { "@id": ORIGIN + "/#organization" }, "mainEntity": faq.map(function (i) { return { "@type": "Question", "name": stripTags(i.q), "acceptedAnswer": { "@type": "Answer", "text": stripTags(i.a) } }; }) }
      ] };
    },
  },
};

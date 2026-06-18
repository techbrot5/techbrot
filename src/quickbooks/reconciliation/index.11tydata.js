/* /quickbooks/reconciliation/ — QUICKBOOKS RECONCILIATION HUB (t-hub).
 * Routes to the 5 reconciliation spoke pages (this cluster) plus related built
 * assets. CollectionPage + ItemList (8 cards) + BreadcrumbList + FAQPage +
 * speakable. HONESTY: independent firm, not Intuit; we reconcile/configure in
 * the client's own file; QuickBooks described accurately; founder-name-zero
 * (David only in #david-westgate); canonical pricing only. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/quickbooks/reconciliation/";

const cardGroups = [
  {
    id: "do-it-right",
    eyebrow: "Do it right",
    heading: "Reconciling in QuickBooks.",
    lede: "How to reconcile each kind of account so the balances are proven, not assumed.",
    cards: [
      { title: "How to reconcile", body: "The step-by-step process for reconciling a bank or credit-card account in QuickBooks &mdash; starting balance, ending balance, statement date, and matching every transaction until the difference is zero.", href: "/quickbooks/reconciliation/how-to-reconcile/", cta: "How to reconcile &rarr;" },
      { title: "Credit card reconciliation", body: "Credit cards reconcile differently from bank accounts &mdash; the balance is what you owe, not what you have. We walk through the gotchas: pending charges, payments, and statement timing.", href: "/quickbooks/reconciliation/credit-card-reconciliation/", cta: "Credit card reconciliation &rarr;" },
      { title: "Multiple accounts", body: "Most businesses have several accounts to reconcile every month &mdash; checking, savings, credit cards, loans. How to keep them all reconciled on a clean monthly rhythm without things slipping.", href: "/quickbooks/reconciliation/multi-account/", cta: "Reconciling multiple accounts &rarr;" },
    ],
  },
  {
    id: "fix-it",
    eyebrow: "Fix it when it breaks",
    heading: "When the numbers won't tie.",
    lede: "The honest reasons a reconciliation goes off the rails &mdash; and how to find them.",
    cards: [
      { title: "Discrepancies", body: "When the difference won't go to zero, something doesn't tie. The usual suspects &mdash; missing transactions, duplicates, edited or deleted entries &mdash; and how to track each one down.", href: "/quickbooks/reconciliation/discrepancies/", cta: "Reconciliation discrepancies &rarr;" },
      { title: "Why reconciliation fails", body: "The deeper, recurring reasons reconciliations keep breaking &mdash; bad bank rules, beginning-balance drift, skipped months, sloppy bank-feed matching &mdash; and how to fix the cause, not the symptom.", href: "/quickbooks/reconciliation/why-reconciliation-fails/", cta: "Why reconciliation fails &rarr;" },
    ],
  },
  {
    id: "related",
    eyebrow: "Related help",
    heading: "The tool, the service, and the emergency.",
    lede: "Where to go next, whether you're doing it yourself or want it done for you.",
    cards: [
      { title: "The QBO reconciliation tool", body: "What the reconciliation feature in QuickBooks Online actually does, where it lives, and which plan you need &mdash; the product-feature view to go with this how-to hub.", href: "/quickbooks/online/features/reconciliation/", cta: "QBO reconciliation tool &rarr;" },
      { title: "Done-for-you reconciliation", body: "Rather not do it yourself? We reconcile every account in your file each month, find what doesn't tie, and keep the books CPA-ready. A named Certified ProAdvisor, working in your own file.", href: "/accounting/reconciliation-services/", cta: "Reconciliation service &rarr;" },
      { title: "Reconciliation is broken (urgent)", body: "Reconciliation already a mess &mdash; months behind, balances wrong, or someone forced it? Start here for triage on a broken reconciliation before it gets worse.", href: "/quickbooks/help/reconciliation-broken/", cta: "Reconciliation is broken &rarr;" },
    ],
  },
];

// Flatten all cards in declared order for the ItemList.
const allCards = cardGroups.reduce(function (acc, g) { return acc.concat(g.cards); }, []);

const faq = [
  { q: "What does reconciliation prove?", a: "Reconciliation proves your books match reality. When an account is reconciled, every transaction recorded in QuickBooks ties to your real bank or credit-card statement &mdash; nothing is missing, nothing is duplicated, and nothing was invented. It's the single best evidence that the balance on a report is the actual balance, and it's the foundation every other report (profit and loss, balance sheet, tax return) rests on. An unreconciled file can look right and be wrong." },
  { q: "How often should I reconcile?", a: "Monthly, for every account &mdash; checking, savings, every credit card, and any loan or line of credit. Reconcile each account against its statement as soon as the statement closes. Monthly is the standard because it keeps the work small, catches errors while they're still easy to trace, and means your reports are trustworthy all year instead of only at tax time. <a href=\"/quickbooks/reconciliation/multi-account/\">Reconciling multiple accounts</a> covers how to keep a clean rhythm when you have several." },
  { q: "Why won't my reconciliation balance?", a: "When the difference won't go to zero, something in QuickBooks doesn't match the statement &mdash; a missing or duplicated transaction, an entry that was later edited or deleted, an uncleared item, or a wrong beginning balance. The fix is to find the specific cause, not to plug the gap. Start with <a href=\"/quickbooks/reconciliation/discrepancies/\">reconciliation discrepancies</a> to hunt down a single off month, and <a href=\"/quickbooks/reconciliation/why-reconciliation-fails/\">why reconciliation fails</a> for the recurring causes when it keeps happening." },
  { q: "Should I ever force a reconciliation?", a: "No. Forcing a reconciliation &mdash; entering an adjustment to make the difference disappear without finding why it's there &mdash; hides the problem instead of fixing it and quietly corrupts your balances going forward. The right move is always to find the real cause. See <a href=\"/quickbooks/cleanup/forcing-reconciliation-risks/\">the risks of forcing a reconciliation</a> for what it actually does to your file and how to undo it." },
  { q: "Can you reconcile my books for me?", a: "Yes. As an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit &mdash; we reconcile every account in your own QuickBooks file each month, find and fix what doesn't tie, and keep the books CPA-ready, with a named ProAdvisor on your account. See <a href=\"/accounting/reconciliation-services/\">our done-for-you reconciliation service</a>. Your data stays in your file; we coordinate with your CPA or EA, who files." },
  { q: "Are you Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit's official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. We explain QuickBooks reconciliation accurately and reconcile inside your own file; Intuit makes the software." },
];

module.exports = {
  summary: "Reconciliation is how you prove the books match reality: every transaction in QuickBooks tied to your real bank and credit-card statements, with nothing missing, doubled, or made up. Get it right and your reports are trustworthy; skip it and the file can look right while being wrong. This hub answers three things &mdash; <strong>how to reconcile right in QuickBooks</strong> (bank accounts, credit cards, and several accounts at once), <strong>how to fix it when it won't balance</strong> (discrepancies and the recurring reasons reconciliation fails), and <strong>where to go next</strong> (the QBO reconciliation tool, a done-for-you service, or urgent help when it's already broken). As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong> &mdash; we don't sell QuickBooks; we reconcile and configure inside <em>your</em> file so the books stay accurate. Want it handled for you? See <a href=\"/accounting/reconciliation-services/\">our reconciliation service</a>.",
  cardGroups,
  relatedNote: "New to QuickBooks reconciliation? Start with <a href=\"/quickbooks/reconciliation/how-to-reconcile/\">how to reconcile</a>, then see <a href=\"/quickbooks/online/features/reconciliation/\">how the QBO reconciliation tool works</a>. For more on the product itself, the <a href=\"/quickbooks/\">QuickBooks hub</a> ties it all together. And if you'd rather not do it yourself, our <a href=\"/accounting/reconciliation-services/\">done-for-you reconciliation service</a> keeps every account reconciled and CPA-ready. Not sure where you stand? A <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly how your accounts reconcile in your own file.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"QuickBooks Reconciliation: How to Do It, Fix It, Keep It Clean","description":"How to reconcile in QuickBooks the right way, fix it when it won't balance, and keep it from breaking again — by Certified ProAdvisors at an independent firm that reconciles in your own file.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#recon-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":ORIGIN+"/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Reconciliation"}]},
        {"@type":"ItemList","@id":URL+"#items","name":"QuickBooks reconciliation pages","numberOfItems":allCards.length,"itemListElement":allCards.map(function(c,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(c.title),"url":ORIGIN+c.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

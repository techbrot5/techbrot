/* /quickbooks/online/integrations/ — QUICKBOOKS ONLINE INTEGRATIONS HUB (t-hub).
 * Routes to all 9 common QBO integration pages, grouped by workflow. CollectionPage +
 * ItemList (all 9) + BreadcrumbList + FAQPage + speakable. HONESTY: independent firm,
 * NOT Intuit, and NOT affiliated with any of these third-party apps — stated. Recurring
 * theme: most integrations bring data in NET of fees or with account mapping that must
 * be set up right or the books won't reconcile. No fabricated app pricing/capabilities;
 * founder-name-zero (David only in #david-westgate); canonical pricing only. */
const { stripTags } = require("../../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/quickbooks/online/integrations/";

const integrationGroups = [
  {
    id: "payments-pos",
    eyebrow: "Payments &amp; POS",
    heading: "Taking payments.",
    lede: "Card, online, and in-person payments flowing into QBO — almost always net of processing fees.",
    integrations: [
      { title: "QuickBooks Payments", body: "Intuit&rsquo;s own card-and-ACH processor records inside QBO automatically &mdash; but it still deposits net of fees, so the fee has to be split out or the deposit won&rsquo;t match the bank.", href: "/quickbooks/online/integrations/quickbooks-payments/", cta: "QuickBooks Payments &rarr;" },
      { title: "Stripe", body: "Stripe pays out in batches net of fees, often covering many charges at once &mdash; without a connector that splits gross sales, fees, and refunds, the payout never ties to the deposit.", href: "/quickbooks/online/integrations/stripe/", cta: "Stripe + QBO &rarr;" },
      { title: "PayPal", body: "PayPal mixes sales, fees, transfers, and its own balance in one feed. Treated as a plain bank account it double-counts income; it has to be reconciled as the clearing account it really is.", href: "/quickbooks/online/integrations/paypal/", cta: "PayPal + QBO &rarr;" },
      { title: "Square", body: "Square deposits daily takings net of fees and lumps tips, refunds, and sales tax together &mdash; the daily payout has to be broken back out into its parts or the sales and tax numbers are wrong.", href: "/quickbooks/online/integrations/square/", cta: "Square + QBO &rarr;" },
    ],
  },
  {
    id: "ecommerce",
    eyebrow: "Ecommerce",
    heading: "Selling online.",
    lede: "Storefront orders, fees, and sales tax landing in the books.",
    integrations: [
      { title: "Shopify", body: "Shopify orders, shipping, discounts, sales tax, and payout fees all need mapping to the right accounts &mdash; sync it raw and revenue is overstated while the Shopify payout never reconciles to the bank.", href: "/quickbooks/online/integrations/shopify/", cta: "Shopify + QBO &rarr;" },
    ],
  },
  {
    id: "bills-expenses",
    eyebrow: "Bills &amp; expenses",
    heading: "Paying bills and tracking spend.",
    lede: "Accounts payable and employee expenses feeding into QBO.",
    integrations: [
      { title: "Bill.com", body: "Bill.com pays vendors through its own clearing account, so payments hit QBO as a transfer, not a bank withdrawal &mdash; map it wrong and bills look unpaid or get recorded twice.", href: "/quickbooks/online/integrations/bill-com/", cta: "Bill.com + QBO &rarr;" },
      { title: "Expensify", body: "Expensify pushes expense reports into QBO as bills or card charges &mdash; useful, but every expense category has to be mapped to a real account or reimbursements and card spend land in the wrong place.", href: "/quickbooks/online/integrations/expensify/", cta: "Expensify + QBO &rarr;" },
    ],
  },
  {
    id: "payroll",
    eyebrow: "Payroll",
    heading: "Paying your team.",
    lede: "Wages, taxes, and withholdings posting to the books.",
    integrations: [
      { title: "Gusto", body: "Gusto posts each payroll run to QBO as a journal entry &mdash; but the default mapping is generic, so wages, employer taxes, and net pay land in lumped accounts unless the mapping is set up to match your file.", href: "/quickbooks/online/integrations/gusto/", cta: "Gusto + QBO &rarr;" },
    ],
  },
  {
    id: "crm",
    eyebrow: "CRM",
    heading: "Sales and customer data.",
    lede: "Keeping the CRM and the books in sync without double-counting.",
    integrations: [
      { title: "HubSpot", body: "HubSpot syncs deals, contacts, and invoices with QBO &mdash; powerful for sales, but if both systems create invoices you double-count revenue, so it has to be set up with one source of truth.", href: "/quickbooks/online/integrations/hubspot/", cta: "HubSpot + QBO &rarr;" },
    ],
  },
];

// Flatten all 9 integrations in declared order for the ItemList.
const allIntegrations = integrationGroups.reduce(function (acc, g) { return acc.concat(g.integrations); }, []);

const faq = [
  { q: "Which apps do you integrate with QuickBooks?", a: "The common ones businesses actually run &mdash; the nine on this page: QuickBooks Payments, Stripe, PayPal, and Square for taking payments; Shopify for ecommerce; Bill.com and Expensify for bills and expenses; Gusto for payroll; and HubSpot for CRM. As an independent Certified QuickBooks ProAdvisor firm we set up and reconcile these connections inside your own QBO file &mdash; we don&rsquo;t sell the apps and we aren&rsquo;t affiliated with them." },
  { q: "Why do integrations break the books?", a: "Two recurring reasons. First, <strong>net-of-fees deposits</strong>: Stripe, PayPal, Square, Shopify, and even QuickBooks Payments pay out the money you collected minus their processing fee, so the deposit never matches gross sales unless the fee is split out separately. Second, <strong>bad account mapping</strong>: every app posts entries against accounts in QBO, and if sales, fees, refunds, sales tax, payroll, and payouts aren&rsquo;t mapped to the right accounts, revenue gets overstated or double-counted and the file won&rsquo;t reconcile. Connecting the app is one click; making it reconcile is the work." },
  { q: "Are you affiliated with these apps or Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor. We are <strong>not Intuit</strong>, not Intuit&rsquo;s official software support, and <strong>not affiliated with</strong> Stripe, PayPal, Square, Shopify, Bill.com, Expensify, Gusto, or HubSpot. Those names are trademarks of their respective owners, and QuickBooks and Intuit are registered trademarks of Intuit Inc. We just configure these tools to work correctly together in your file." },
  { q: "Can you fix a messy integration that's already connected?", a: "Yes. A connected-but-wrong integration is one of the most common reasons a file stops reconciling &mdash; net deposits left as income, duplicated invoices, payouts that never tie out. We untangle the entries, fix the mapping, and rebuild the reconciliation. See <a href=\"/quickbooks/cleanup/\">QuickBooks cleanup</a> for how that work runs, and the file review will tell us how deep the mess goes." },
  { q: "Do you set it up for me?", a: "Yes &mdash; in your own QuickBooks Online file, with a named Certified ProAdvisor. We connect the app, map every account it touches, configure how sales, fees, refunds, and payouts post, and prove it reconciles to the bank. Your data stays in your file; we keep the books CPA-ready and coordinate with your CPA or EA, who files." },
  { q: "Where do I start?", a: "With a free QuickBooks file review. We look at how your apps connect to QBO today &mdash; what&rsquo;s mapped where, what&rsquo;s posting net of fees, and what isn&rsquo;t reconciling &mdash; and show you exactly where setup or cleanup will help. No pitch, no obligation. Independent firm, not Intuit, and not affiliated with these apps." },
];

module.exports = {
  summary: "Connecting an app to QuickBooks Online takes a few clicks. Reconciling it is where the books break. The recurring problem is the same across almost every integration: money comes in <strong>net of fees</strong>, or entries post against accounts that must be <strong>mapped correctly first</strong>, or the file simply won&rsquo;t reconcile. This hub routes to a plain-English page for all <strong>nine common QBO integrations</strong>, grouped by what they do &mdash; payments &amp; POS (QuickBooks Payments, Stripe, PayPal, Square), ecommerce (Shopify), bills &amp; expenses (Bill.com, Expensify), payroll (Gusto), and CRM (HubSpot) &mdash; with the one gotcha that breaks each one. As an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit, and not affiliated with any of these apps</strong> &mdash; we set up the data flow and make it reconcile in <em>your</em> file. Already connected something that won&rsquo;t balance? Start with <a href=\"/quickbooks/cleanup/\">QuickBooks cleanup</a>.",
  integrationGroups,
  relatedNote: "New to QuickBooks Online? Start with the <a href=\"/quickbooks/online/\">QuickBooks Online overview</a> for how the product fits together, then see <a href=\"/quickbooks/online/features/\">QuickBooks Online features</a> for the core tools each integration plugs into. If an app is already connected and the books won&rsquo;t reconcile, go straight to <a href=\"/quickbooks/cleanup/\">QuickBooks cleanup</a>. When you&rsquo;re ready, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly how each integration is set up in your own file.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"QuickBooks Online Integrations: ProAdvisor Setup Guide","description":"How to connect Stripe, PayPal, Square, Shopify, Bill.com, Expensify, Gusto, HubSpot, and QuickBooks Payments to QuickBooks Online correctly and reconcile them — most apps bring data in net of fees, so the books only balance with the right account mapping. Independent firm, not Intuit, not affiliated with these apps.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbo-integrations-hub-summary"]}},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":ORIGIN+"/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Online","item":ORIGIN+"/quickbooks/online/"},
          {"@type":"ListItem","position":4,"name":"Integrations"}]},
        {"@type":"ItemList","@id":URL+"#integrations","name":"QuickBooks Online integrations","numberOfItems":allIntegrations.length,"itemListElement":allIntegrations.map(function(f,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(f.title),"url":ORIGIN+f.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

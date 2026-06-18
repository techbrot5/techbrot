/* /resources/checklists/ — ACCOUNTING & QUICKBOOKS CHECKLISTS HUB (t-hub).
 * Routes to all 6 free checklists. CollectionPage + ItemList (all 6) +
 * BreadcrumbList + FAQPage + speakable. HONESTY: independent firm, not Intuit;
 * checklists are genuinely useful and free with no email wall; founder-name-zero
 * (David only in #david-westgate); canonical pricing/phone only. */
const { stripTags } = require("../../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/resources/checklists/";

const checklistGroups = [
  {
    id: "routine",
    eyebrow: "Routine bookkeeping",
    heading: "Keep the books current.",
    lede: "The recurring rhythm that keeps your file accurate and CPA-ready.",
    features: [
      { title: "Monthly bookkeeping checklist", body: "The exact steps for a clean monthly close &mdash; categorize transactions, reconcile every account, review AR and AP, and check the P&amp;L before the month is locked.", href: "/resources/checklists/bookkeeping-monthly-checklist/", cta: "Monthly close checklist &rarr;" },
      { title: "Year-end checklist", body: "Everything that has to be true before the year is closed &mdash; reconciliations, 1099 prep, fixed assets, owner accounts, and the handoff package your CPA or EA needs to file.", href: "/resources/checklists/year-end-checklist/", cta: "Year-end checklist &rarr;" },
    ],
  },
  {
    id: "setup",
    eyebrow: "Setup &amp; launch",
    heading: "Start the file right.",
    lede: "Get the foundation correct so cleanup never becomes inevitable.",
    features: [
      { title: "QuickBooks setup checklist", body: "How to stand up a new QuickBooks Online file the right way &mdash; chart of accounts, bank connections, products &amp; services, sales tax, and the settings that decide whether reports work later.", href: "/resources/checklists/quickbooks-setup-checklist/", cta: "QuickBooks setup checklist &rarr;" },
      { title: "Business startup checklist", body: "The financial steps every new business should take &mdash; entity and EIN, business bank account, bookkeeping system, recordkeeping habits, and the compliance basics that are easy to miss.", href: "/resources/checklists/business-startup-checklist/", cta: "Business startup checklist &rarr;" },
    ],
  },
  {
    id: "compliance",
    eyebrow: "Compliance",
    heading: "Stay on the right side of filings.",
    lede: "The deadlines and steps that keep you out of penalty territory.",
    features: [
      { title: "1099 checklist", body: "Who needs a 1099, how to collect W-9s, the box-by-box basics, and the filing deadlines &mdash; so contractor reporting is done right and on time, not in a January scramble.", href: "/resources/checklists/1099-checklist/", cta: "1099 checklist &rarr;" },
      { title: "Sales tax checklist", body: "How to figure out where you have nexus, register, collect at the right rates, and file on time &mdash; the steps that keep sales-tax automation honest and the returns accurate.", href: "/resources/checklists/sales-tax-checklist/", cta: "Sales tax checklist &rarr;" },
    ],
  },
];

// Flatten all 6 checklists in declared order for the ItemList.
const allChecklists = checklistGroups.reduce(function (acc, g) { return acc.concat(g.features); }, []);

const faq = [
  { q: "Are the checklists free?", a: "Yes &mdash; completely free, and yours to use however helps. Download them, print them, share them with your team, adapt them to your business. There&rsquo;s no catch and nothing to buy. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm and these checklists are how we share what we&rsquo;d do for a client &mdash; if you want a hand running them, that&rsquo;s what we&rsquo;re here for, but the checklists themselves cost nothing." },
  { q: "Do I need to give my email?", a: "No. There&rsquo;s no email wall, no sign-up form, and no gate of any kind. Everything on these pages is readable and usable right now, without handing over your contact details. We&rsquo;d rather the checklists be genuinely useful than trade them for an email address." },
  { q: "Who made these checklists?", a: "The Certified QuickBooks ProAdvisor team at TechBrot &mdash; an independent accounting firm, not Intuit and not Intuit&rsquo;s official software support. They&rsquo;re built from the same monthly-close, year-end, setup, and compliance steps we actually run on client files, written in plain English. Reviewed by our team and kept current as rules and QuickBooks change." },
  { q: "Can you do these for me?", a: "Yes. If you&rsquo;d rather not run the checklists yourself, we can &mdash; we keep the books current, handle the monthly close and year-end, and set QuickBooks up correctly so it stays clean. The easiest first step is a <a href=\"/quickbooks/file-review/?intent=file-review\">free QuickBooks file review</a>: we look at your real file and show you exactly where these steps need attention. No pitch, no obligation." },
  { q: "Are you affiliated with Intuit?", a: "No. TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor &mdash; we are not Intuit, not Intuit&rsquo;s official software support, and not affiliated with Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc. We explain QuickBooks accurately and work inside your own file." },
  { q: "How often should I actually run these?", a: "It depends on the checklist: the <a href=\"/resources/checklists/bookkeeping-monthly-checklist/\">monthly bookkeeping checklist</a> runs every month, the <a href=\"/resources/checklists/year-end-checklist/\">year-end checklist</a> once a year (with 1099s due by January 31), the <a href=\"/resources/checklists/quickbooks-setup-checklist/\">setup</a> and <a href=\"/resources/checklists/business-startup-checklist/\">startup</a> checklists once at the beginning, and the <a href=\"/resources/checklists/sales-tax-checklist/\">sales tax checklist</a> on your filing frequency (monthly, quarterly, or annually by state). The monthly one is the habit that prevents most cleanup." },
];

module.exports = {
  summary: "These are the practical, free checklists our Certified ProAdvisors actually use &mdash; the exact steps for <strong>monthly close, year-end, QuickBooks setup, business startup, 1099s, and sales tax</strong>. There are <strong>six checklists</strong> in all, grouped by what you&rsquo;re trying to get done: keeping the books current, starting a file or a business right, and staying on top of compliance. They&rsquo;re free to use &mdash; no email wall, no sign-up, no catch &mdash; because a checklist that&rsquo;s genuinely useful is worth more to us than your email address. We&rsquo;re an independent Certified QuickBooks ProAdvisor firm &mdash; <strong>not Intuit</strong>. If you&rsquo;d rather we run these steps on your real file, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> is the place to start.",
  checklistGroups,
  relatedNote: "Looking for more than checklists? Browse the full <a href=\"/resources/\">resources library</a> for everything we publish, or dig into the <a href=\"/resources/guides/\">in-depth guides</a> when you want the why behind the steps, not just the steps. When you&rsquo;re ready for hands-on help, a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> shows exactly where these checklists apply to your own books.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Free Accounting & QuickBooks Checklists","description":"Practical, free checklists from Certified ProAdvisors — the exact steps for monthly close, year-end, QuickBooks setup, business startup, 1099s, and sales tax. Independent firm, not Intuit. Free to use, no email wall.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#checklists-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Resources","item":ORIGIN+"/resources/"},
          {"@type":"ListItem","position":3,"name":"Checklists"}]},
        {"@type":"ItemList","@id":URL+"#checklists","name":"Accounting & QuickBooks checklists","numberOfItems":allChecklists.length,"itemListElement":allChecklists.map(function(f,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(f.title),"url":ORIGIN+f.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

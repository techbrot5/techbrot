/* /switch/ — SWITCH HUB (t-hub). BOFU peak-intent silo: the searcher has DECIDED
 * to leave their current provider. Routes the 4 switch pages (all built same wave)
 * and explains how switching to TechBrot works generally. CollectionPage +
 * BreadcrumbList + ItemList (all 4) + FAQPage + speakable. HONESTY: independent
 * firm, NOT Intuit and NOT affiliated with Bench/Employer.com, Pilot, QuickBooks
 * Live, or any prior provider; client's data + QuickBooks file are theirs
 * (portability is the point); founder-name-zero (David only in #david-westgate);
 * canonical pricing only; no fabricated stats. */
const { stripTags } = require("../../_build/lib/city-child.js");
const ORIGIN = "https://techbrot.com";
const URL = ORIGIN + "/switch/";

const switchGroups = [
  {
    id: "options",
    eyebrow: "Who are you leaving?",
    heading: "Pick the page that matches your move.",
    lede: "Each switch is a little different. Start with the one that fits where you are now.",
    options: [
      { title: "Switching from Bench", body: "Bench shut down and your books need rescuing &mdash; we recover your data, rebuild it in your own QuickBooks file, and get you current. We are independent and not affiliated with Bench or Employer.com.", href: "/switch/from-bench/", cta: "Switch from Bench &rarr;" },
      { title: "Switching from Pilot", body: "Moving off Pilot to a named Certified ProAdvisor &mdash; we export your data, migrate it into QuickBooks you control, and pick up the monthly books. Independent firm, not affiliated with Pilot.", href: "/switch/from-pilot/", cta: "Switch from Pilot &rarr;" },
      { title: "Switching from QuickBooks Live", body: "Leaving QuickBooks Live for a dedicated ProAdvisor who knows your file &mdash; your QBO data stays yours; we take over cleanup and the ongoing close. We are not Intuit.", href: "/switch/from-quickbooks-live/", cta: "Switch from QuickBooks Live &rarr;" },
      { title: "Switching from your current bookkeeper", body: "Changing bookkeepers without losing history &mdash; we transition your file, fix the gaps the handover leaves, and keep the books CPA-ready every month. Your data, your file.", href: "/switch/from-your-bookkeeper/", cta: "Switch your bookkeeper &rarr;" },
    ],
  },
];

// Flatten all switch options in declared order for the ItemList.
const allOptions = switchGroups.reduce(function (acc, g) { return acc.concat(g.options); }, []);

const steps = [
  { title: "1 · Export your data", body: "We get your transaction history, balances, and supporting detail out of your current system &mdash; or, if the provider has gone dark, rescue whatever can be recovered. Your data is yours; getting it out is the whole point of switching." },
  { title: "2 · Migrate into QuickBooks", body: "We bring that data into your own QuickBooks Online file &mdash; one you own and control &mdash; mapped to a clean chart of accounts so reports work from day one. The file is yours, not ours." },
  { title: "3 · Clean up the gaps", body: "Handovers always leave gaps &mdash; unreconciled months, miscoded transactions, missing balances. We catch you up and reconcile so the opening point is provable, not assumed." },
  { title: "4 · Ongoing monthly", body: "A named Certified ProAdvisor keeps the books accurate every month, reconciled and CPA-ready, and coordinates with your CPA or EA, who files. Fixed-fee scope, no lock-in &mdash; leave anytime, with your file." },
];

const faq = [
  { q: "How long does switching take?", a: "Typically 3&ndash;8 weeks end to end, depending on the state of your books at handover. A normal move runs: discovery and the file review in week 1; data export and migration into your own QuickBooks file over roughly 2&ndash;6 weeks; cleanup and reconciliation of the gaps in another 2&ndash;4 weeks (these overlap); then we&rsquo;re on the monthly books. A clean handover is faster; a provider that&rsquo;s gone dark or years of backlog take longer. We confirm the timeline after the free file review." },
  { q: "Will I lose my data?", a: "No. The whole point of switching is portability &mdash; your data and your QuickBooks file are yours. We export your history out of your current system (or recover it if the provider shut down) and migrate it into your own QuickBooks Online file that you own and control. Nothing is held hostage, and your records come with you." },
  { q: "What does switching cost?", a: "The file review is free &mdash; it tells you honestly what the switch involves before you commit a dollar. After that we scope the work at a fixed fee, so there are no surprises: a one-time migration-and-cleanup project to get you current, then ongoing monthly bookkeeping at a fixed monthly fee. The exact numbers depend on how far behind the books are, which the file review establishes." },
  { q: "Do you lock me in?", a: "No. It&rsquo;s your QuickBooks file and your data, and you can leave anytime &mdash; no long-term contract holding your books hostage. We earn the relationship month to month. Lock-in is exactly the problem switchers are trying to escape, so we don&rsquo;t do it." },
  { q: "What if I'm not sure switching is right?", a: "Then start with the free file review &mdash; it&rsquo;s built for exactly that. We look at the real state of your books and tell you honestly whether switching makes sense for you, what it would take, and what it would cost. If staying put is the better call, we&rsquo;ll say so. No pitch, no obligation." },
  { q: "Are you affiliated with Bench, Pilot, QuickBooks Live, or Intuit?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. We are not Intuit, not Intuit&rsquo;s official support, and not affiliated with Bench, Employer.com, Pilot, QuickBooks Live, or any other provider you may be leaving. We help you move your own data into your own QuickBooks file. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  { q: "How hard is it to switch bookkeepers?", a: "Easier than staying stuck with books you don&rsquo;t trust. On your side it&rsquo;s three things &mdash; give us access to your current system, point us at your CPA or EA, and approve the fixed-fee scope &mdash; and we handle the export, the migration into your own QuickBooks file, and the cleanup. There&rsquo;s no gap in coverage either: we keep the monthly books running while the transition happens, so nothing falls through the cracks." },
  { q: "When is the best time of year to switch?", a: "Whenever your current books stop being reliable &mdash; you don&rsquo;t need to wait for January. That said, two windows are cleanest: the start of a new month or quarter, which gives a natural cut-over with fewer mid-period transactions to split, and well before tax season, so your CPA gets clean, reconciled books instead of a year-end scramble. If a prior provider has gone dark, the best time is now, before more history slips away &mdash; call (877) 751-5575 and we&rsquo;ll start with a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a>." },
  { q: "Will my CPA still have everything they need after I switch?", a: "Yes &mdash; that&rsquo;s built into how we work. We keep your books reconciled and CPA-ready every month and coordinate directly with your CPA or EA, who handles the filing. After the migration and cleanup, your accountant gets a clean QuickBooks file with provable opening balances and a tidy chart of accounts &mdash; not a pile of question marks at year-end." },
];

module.exports = {
  summary: "If you&rsquo;ve already decided to leave your current bookkeeping provider, the only real questions are how the move works and what it takes. Here&rsquo;s the honest answer. Every switch to TechBrot follows the same four steps &mdash; <strong>export your data</strong>, <strong>migrate it into your own QuickBooks file</strong>, <strong>clean up the gaps</strong> the handover leaves, then keep the books accurate <strong>every month</strong> with a <em>named</em> Certified ProAdvisor. We&rsquo;re an independent firm &mdash; <strong>not Intuit</strong>, and not affiliated with Bench, Employer.com, Pilot, QuickBooks Live, or whoever you&rsquo;re leaving. Your data and your QuickBooks file stay yours, and there&rsquo;s no lock-in &mdash; portability is the whole point. Pick the page that matches your move below, or start with a <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> that tells you exactly what switching would take.",
  switchGroups,
  steps,
  relatedNote: "Still weighing it up? Compare us head-to-head on the <a href=\"/vs/\">vs pages</a>, see exactly what the <a href=\"/quickbooks/file-review/?intent=file-review\">free file review</a> covers, or read how the <a href=\"/quickbooks/migration/\">QuickBooks migration</a> itself works under the hood. Independent firm &mdash; not Intuit.",
  faq,
  eleventyComputed: {
    pageGraph(data){
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":URL+"#webpage","url":URL,"name":"Switch to TechBrot: How to Leave Your Current Bookkeeping Provider","description":"How a switch to TechBrot works — we rescue your data, migrate it into your own QuickBooks file, and pick up the books with a named Certified ProAdvisor. Independent firm, not Intuit; not affiliated with Bench, Pilot, or QuickBooks Live.","isPartOf":{"@id":ORIGIN+"/#website"},"about":{"@id":ORIGIN+"/#organization"},"publisher":{"@id":ORIGIN+"/#organization"},"breadcrumb":{"@id":URL+"#breadcrumb"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#switch-hub-summary"]},"reviewedBy":{"@id":ORIGIN+"/#david-westgate"},"lastReviewed":"2026-06-18"},
        {"@type":"BreadcrumbList","@id":URL+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":ORIGIN+"/"},
          {"@type":"ListItem","position":2,"name":"Switch"}]},
        {"@type":"ItemList","@id":URL+"#switches","name":"Switching to TechBrot","numberOfItems":allOptions.length,"itemListElement":allOptions.map(function(f,idx){return {"@type":"ListItem","position":idx+1,"name":stripTags(f.title),"url":ORIGIN+f.href};})},
        {"@type":"FAQPage","@id":URL+"#faq","mainEntity":faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

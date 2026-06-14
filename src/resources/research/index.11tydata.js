/* /resources/research/ (round-20 — research/original-data scaffold, build-new).
 * No baseline (new silo). t-hub landing for the original-data layer. Citable +
 * coined flagship: "US QuickBooks Cleanup Benchmarks" (DefinedTerm + Dataset
 * schema). HONEST: dataset is N=0 / collecting — methodology stated, NO
 * fabricated numbers, ever (CLAUDE.md rule 4). The deliverable is the recurring
 * per-engagement logging habit; the live N is read from _build/data and the page
 * never reports a statistic until N is real. CTA: hub tier — primary routes
 * deeper into the methodology (soft lexicon); secondary Book the discovery call;
 * final band Book the discovery call. Authorship firm-level; founder schema-only.
 * NOTE/FLAG: Sheet-9 hub rule names "Explore Services" as hub-hero primary; a
 * research hub has no services to explore — primary uses the canonical soft
 * "Read the methodology" routing into the page. Flagged for founder in report. */
const fs = require("fs");
const path = require("path");
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

// Read the live dataset — N is HONEST, computed from the committed data file.
let dataset = { records: [], _started: "2026-06-14" };
try { dataset = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../_build/data/cleanup-benchmarks.json"), "utf8")); } catch (e) {}
const N = Array.isArray(dataset.records) ? dataset.records.length : 0;

module.exports = {
  datasetN: N,
  // The 8 logged fields — the locked schema, shown as the dataset's variables.
  fields: [
    { name: "State", body: "The engagement&rsquo;s U.S. billing state &mdash; so cleanup cost and backlog can be read regionally, not just nationally." },
    { name: "Industry", body: "The business&rsquo;s primary industry &mdash; construction, e-commerce, restaurant, professional services, and the rest carry very different cleanup profiles." },
    { name: "Months behind at intake", body: "How many months since the last reconciled close when the file arrived &mdash; the single strongest predictor of cleanup effort." },
    { name: "Primary error types", body: "What was actually wrong: unreconciled accounts, miscategorized transactions, duplicates, Opening Balance Equity, Undeposited Funds, payroll-liability and sales-tax errors, file corruption, bank-feed gaps." },
    { name: "Transaction volume band", body: "The file&rsquo;s transaction density (&lt;500 · 500&ndash;2,000 · 2,000&ndash;10,000 · 10,000+) &mdash; volume scales the work independently of how far behind the books are." },
    { name: "Cleanup hours", body: "Total Certified ProAdvisor hours to a reconciled, CPA-ready file &mdash; the observed effort, never an estimate." },
    { name: "Cost band", body: "The fixed fee the engagement actually closed at, bucketed (&lt;$1,500 · $1,500&ndash;$3,500 · $3,500&ndash;$8,000 · $8,000&ndash;$15,000 · $15,000+)." },
    { name: "Engagement ID", body: "An opaque anonymous identifier with no client linkage &mdash; the row can never be traced to a business." },
  ],
  // How a row is captured — the methodology, as a numbered sequence (once on the page).
  methodology: [
    { name: "Logged at engagement close.", body: "One row is recorded by the engaging ProAdvisor the moment a cleanup is delivered &mdash; never at intake, never projected. Only completed, paid engagements enter the dataset." },
    { name: "Observed, never modeled.", body: "Every figure is what actually happened on that file: real hours, the real closing fee band, the errors genuinely found. Nothing is estimated, averaged forward, or filled in." },
    { name: "Anonymized at the source.", body: "No client name, EIN, or identifying detail is ever stored. The row carries an opaque ID, the billing state, the industry, and the measured facts &mdash; nothing that can re-identify a business." },
    { name: "Reported only when real.", body: "The page shows the live record count. We never publish a statistic on any breakdown with fewer than 20 records &mdash; small samples mislead, and a benchmark only earns trust if it&rsquo;s honest about its own N." },
  ],
  // The flagship benchmarks we will publish once N is real — review cards.
  planned: [
    { tag: "Benchmark 01", name: "Cost of a cleanup, by months behind", body: "The observed fixed-fee cost band against how far behind the books were at intake &mdash; the question every owner with neglected books actually asks.", status: "Collecting" },
    { tag: "Benchmark 02", name: "What&rsquo;s actually broken, by industry", body: "The most common primary error types per industry &mdash; where construction, e-commerce, and restaurant files break differently, from real engagements.", status: "Collecting" },
    { tag: "Benchmark 03", name: "Hours-to-CPA-ready, by transaction volume", body: "Observed ProAdvisor hours to a reconciled, CPA-ready file across transaction-volume bands &mdash; the effort curve no vendor publishes honestly.", status: "Collecting" },
  ],
  // quick-5 — distinct from FAQ (what it is / how we count / why N=0 / no fabrication / who can use it)
  aiSummary: [
    { q: "What is the US QuickBooks Cleanup Benchmarks dataset?", a: "An original dataset built by TechBrot&rsquo;s Certified QuickBooks ProAdvisor team &mdash; one anonymized row logged at the close of every completed QuickBooks cleanup engagement, capturing state, industry, months behind, error types, transaction volume, hours, and the closing cost band." },
    { q: "How many engagements are in the dataset right now?", a: "<strong>" + (N === 0 ? "Zero &mdash; the dataset is live and collecting (N=0)." : N + " and counting.") + "</strong> We publish the live count and never report a statistic on any breakdown with fewer than 20 records. The methodology is fixed now so the data is comparable from the first row." },
    { q: "Are any of the numbers estimated or modeled?", a: "No. Every figure is observed on a real, completed, paid engagement &mdash; actual hours, the actual closing fee band, the errors genuinely found. Nothing is estimated, projected, or fabricated. Until a breakdown reaches a real sample, no number is shown for it." },
    { q: "How is client data protected in the dataset?", a: "Anonymized at the source. No client name, EIN, or identifying detail is ever stored &mdash; each row carries only an opaque ID, the billing state, the industry, and the measured facts, so a row can never be traced back to a business." },
    { q: "Why publish your own data instead of citing industry stats?", a: "Because no honest, current benchmark exists for what a QuickBooks cleanup actually costs and involves. Owners get vendor marketing or guesswork. A dataset built from real closed engagements &mdash; transparent about its own N &mdash; is the only way to answer the question truthfully." },
  ],
  faq: [
    { q: "Is the US QuickBooks Cleanup Benchmarks dataset published yet?", a: "The dataset is live and collecting. The methodology and schema are fixed and public now; the numbers are released per breakdown only once that breakdown reaches a real sample (at least 20 records). The page always shows the current record count honestly." },
    { q: "Where does the data come from?", a: "From TechBrot&rsquo;s own completed QuickBooks cleanup engagements. One anonymized row is logged by the engaging Certified ProAdvisor at the close of each delivered cleanup &mdash; never from surveys, third-party panels, or projections." },
    { q: "What exactly is recorded for each engagement?", a: "Eight fields: state, industry, months behind at intake, primary error types, transaction-volume band, ProAdvisor hours to CPA-ready, the closing cost band, and an opaque anonymous engagement ID. No client-identifying information is ever stored." },
    { q: "When will the first benchmarks be published?", a: "As soon as a breakdown reaches a defensible sample size. Cleanup engagements accrue over time, so the cost-by-months-behind benchmark is expected to reach a reportable N first. We&rsquo;d rather publish late and honest than early and misleading." },
    { q: "Can I use these benchmarks or cite them?", a: "Yes, once they&rsquo;re published. The dataset is built to be citable &mdash; clear methodology, stated N, defined fields, and an owned name. Until a figure is published, please don&rsquo;t attribute any number to TechBrot; there are none to attribute yet." },
    { q: "Does a benchmark replace a real review of my own books?", a: "No. A benchmark tells you where files like yours tend to land; only a review of your actual file tells you where yours sits. A Certified ProAdvisor can read your situation against the dataset and give you an honest, specific read &mdash; free, with a written fixed-fee scope if you want the work done." },
  ],
  related: [
    { title: "QuickBooks cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "The engagement the dataset is built from &mdash; what a QuickBooks file cleanup actually involves, and what it costs." },
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "Compounding Reconciliation Drift &mdash; why neglected books get exponentially more expensive to fix, the framework behind the cost curve." },
    { title: "Free file review", href: "/quickbooks/file-review/?intent=file-review", body: "Have a Certified ProAdvisor read your actual file against the data &mdash; reconciliation status, error types, and where your file sits. Free." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/resources/research/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["WebPage","CollectionPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":url+"#dataset"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#research-tldr-body"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Research","item":url}]},
        {"@type":"DefinedTerm","@id":url+"#definedterm","name":"US QuickBooks Cleanup Benchmarks","description":"An original dataset built by TechBrot from completed QuickBooks cleanup engagements — one anonymized row per closed cleanup capturing state, industry, months behind at intake, primary error types, transaction-volume band, ProAdvisor hours, and closing cost band.","inDefinedTermSet":{"@id":"https://techbrot.com/#organization"}},
        {"@type":"Dataset","@id":url+"#dataset","name":"US QuickBooks Cleanup Benchmarks","alternateName":"TechBrot QuickBooks Cleanup Benchmarks","description":"Original benchmark dataset on the cost, effort, and error profile of QuickBooks file cleanups for U.S. small businesses, logged at the close of completed Certified ProAdvisor engagements. Collecting; figures released per breakdown only at a defensible sample size.","url":url,"creator":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"isAccessibleForFree":true,"measurementTechnique":"Per-engagement observation logged at delivery; anonymized at source; no estimation or modeling","temporalCoverage":"2026-06-14/..","spatialCoverage":{"@type":"Place","name":"United States"},"variableMeasured":data.fields.map(function(f){return {"@type":"PropertyValue","name":stripTags(f.name),"description":stripTags(f.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

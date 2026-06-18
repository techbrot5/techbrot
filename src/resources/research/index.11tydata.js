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

// Read the live datasets — every N is HONEST, computed from the committed data files.
function readN(file){ try { const d = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../_build/data/" + file), "utf8")); return Array.isArray(d.records) ? d.records.length : 0; } catch (e) { return 0; } }
let dataset = { records: [], _started: "2026-06-14" };
try { dataset = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../_build/data/cleanup-benchmarks.json"), "utf8")); } catch (e) {}
const N = Array.isArray(dataset.records) ? dataset.records.length : 0;
// The 6-dataset original-data program (founder 2026-06-18). Each N read live; "collecting"
// until real data accrues. NO statistic publishes on any breakdown until N>=20 (standing rule).
const datasets = [
  { name: "Cleanup Benchmarks", captures: "What a QuickBooks cleanup actually costs and involves &mdash; by how far behind the books were, industry, and transaction volume.", n: readN("cleanup-benchmarks.json"), flagship: true },
  { name: "Migration Benchmarks", captures: "What breaks in a Desktop&rarr;Online (or platform) migration, the ProAdvisor hours it takes, and the closing cost.", n: readN("migration-outcomes.json") },
  { name: "Lead-Source Intelligence", captures: "How clients actually find us &mdash; including which AI assistants recommend us &mdash; and which page types convert. (Internal-priority; no external figure until a real denominator and N&ge;20.)", n: readN("lead-source-performance.json") },
  { name: "Revenue Attribution", captures: "Which pages generate revenue, not just traffic &mdash; first- and last-touch source, landing page, the page viewed before inquiry, whether the lead became a client, and the revenue band.", n: readN("revenue-attribution.json") },
  { name: "Industry Benchmarks", captures: "How far behind books arrive and what&rsquo;s most often broken, by industry and state.", n: readN("industry-benchmarks.json") },
  { name: "Accounting Systems Selection", captures: "QuickBooks Online vs Desktop vs Enterprise &mdash; what drives the choice and what businesses actually pick.", n: readN("systems-selection.json") },
  { name: "QuickBooks Error Intelligence", captures: "The real root causes behind QuickBooks errors and symptoms, and what it actually takes to resolve them.", n: readN("error-intelligence.json") },
];

module.exports = {
  datasetN: N,
  datasets: datasets,
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
    { name: "Reported only when real.", body: "The page shows the live record count. We never publish a statistic on any breakdown with fewer than 20 records &mdash; our minimum &mdash; and prefer 50 or more before reporting, always showing the sample size. Small samples mislead; a benchmark only earns trust if it&rsquo;s honest about its own N." },
  ],
  // The flagship REPORTS we will publish once the underlying data is real — review cards.
  // Each releases only at N>=20 (minimum), prefers N>=50, and always discloses its sample size.
  planned: [
    { tag: "Report 01", name: "AI Search Lead-Generation Report", body: "How many real leads arrive via AI assistants (ChatGPT, Claude, Gemini, Perplexity) and which pages they cite &mdash; from the intake lead-source data. The first honest read on AI search as a lead channel.", status: "Collecting" },
    { tag: "Report 02", name: "State of Small-Business Accounting Systems", body: "What U.S. small businesses actually run on &mdash; QuickBooks Online vs Desktop vs Enterprise vs other &mdash; and what drives the choice, from real selection and migration engagements.", status: "Collecting" },
    { tag: "Report 03", name: "Cleanup Benchmark Report", body: "What a QuickBooks cleanup truly costs and involves &mdash; cost by months behind, what&rsquo;s broken by industry, hours-to-CPA-ready by volume &mdash; from real closed cleanups.", status: "Collecting" },
    { tag: "Report 04", name: "Accounting Software Adoption Report", body: "Adoption and switching patterns across accounting platforms among the businesses we engage &mdash; observed, not surveyed.", status: "Collecting" },
    { tag: "Report 05", name: "Migration Benchmark Report", body: "What a Desktop&rarr;Online migration really takes &mdash; what breaks, the hours, and the cost &mdash; from real completed migrations.", status: "Collecting" },
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

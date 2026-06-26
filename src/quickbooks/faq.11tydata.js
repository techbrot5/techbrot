/* /quickbooks/faq/ — t-guide ARTICLE proving page (round-21 PART 2 5/5). Fresh
 * elevation of the old kb-* knowledge base onto the handoff t-guide ARTICLE
 * pattern: guide-grid (sticky toc + article.prose) · byline-block · pull-quote ·
 * meta-reviewed. The 35 Q/A across 7 clusters are carried VERBATIM (equity) from
 * _build/data/faq-content.json (extract_faq.py). Rendered as article prose
 * (h3 question + prose answer), NOT a faq__list accordion — the answers are
 * multi-paragraph and Q34 carries a <ul>, both of which the faq__list verbatim/
 * flat checks forbid; the article treatment is the correct t-guide form anyway,
 * and the FAQPage schema below still carries all 35 for structured data. Featured-6
 * + the 8-card related "service universe" + the reviewer section carried. Byline =
 * "Certified QuickBooks ProAdvisor team" (never an individual). */
const faqData = require("../../_build/data/faq-content.json");
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&hellip;/g,"…").replace(/\s+/g," ").trim();}
module.exports = {
  popular: faqData.popular,
  clusters: faqData.clusters,
  reviewBody: "This reference is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm with no Intuit commission. The time-sensitive facts on this page &mdash; the QuickBooks Desktop subscription and version-support dates, the multi-state convenience-of-the-employer rule and its current state list, and Enterprise user limits &mdash; were verified against current Intuit and industry sources as of the review date. Pricing reflects TechBrot&rsquo;s own fixed-fee ranges. TechBrot performs QuickBooks and bookkeeping work and coordinates with your CPA, who files.",
  reviewerCreds: [
    { label: "Certifications", detail: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "QuickBooks operations, setup, cleanup, migration, payroll &middot; tax filing coordinated with your CPA/EA" },
    { label: "Sourcing", detail: "Desktop dates &amp; multi-state rule verified against current Intuit and industry sources" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; zero commission on any Intuit product" },
  ],
  related: [
    { cluster: "Choosing", title: "Plan selection", href: "/quickbooks/which-plan-is-right/", body: "Complimentary advisory call to sort which QuickBooks product fits your business &mdash; Online, Desktop, or Enterprise." },
    { cluster: "Setup", title: "QuickBooks Setup", href: "/quickbooks/setup/", body: "Fixed-fee setup engagement with chart of accounts design, bank integration, payroll configuration, and first-month verification." },
    { cluster: "Fixing", title: "QuickBooks Cleanup", href: "/quickbooks/cleanup/", body: "For files with accumulated errors, missing reconciliations, and structural problems. Fixed-fee, scoped by complexity." },
    { cluster: "Migration", title: "QuickBooks Migration", href: "/quickbooks/migration/", body: "Desktop to Online, other software to QuickBooks, or migration cleanup work. Honest scope assessment, fixed-fee." },
    { cluster: "Payroll", title: "QuickBooks Payroll", href: "/quickbooks/payroll/", body: "Provider selection, setup, multi-state compliance, year-end work, and the full payroll engagement universe." },
    { cluster: "Advisory", title: "QuickBooks Consulting", href: "/quickbooks/consulting/", body: "Ongoing ProAdvisor retainer for workflow optimization, configuration audits, and integration management." },
    { cluster: "Errors", title: "Error code references", href: "/quickbooks/help/error-codes/", body: "H202, 6000-series, PS038, 3371, 15240, unrecoverable, C-series &mdash; comprehensive self-fix and ProAdvisor escalation references." },
    { cluster: "Bookkeeping", title: "Monthly Bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "Ongoing bookkeeping engagement that runs on the QuickBooks file we set up or cleaned up. The recurring work." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/faq/";
      const all=[];
      faqData.clusters.forEach(function(c){c.items.forEach(function(it){all.push(it);});});
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbfaq-in-brief-text"]},"reviewedBy":{"@id":"https://techbrot.com/#organization"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"FAQ","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":all.map(function(it){return {"@type":"Question","name":stripTags(it.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(it.a)}};})}
      ]};
    },
  },
};

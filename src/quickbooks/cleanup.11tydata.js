/* /quickbooks/cleanup/ (round-17 elevation). Sources: baseline.json (43
 * headings, 7 FAQ — all unique) + quickbooks/cleanup/index.html (full copy).
 * t-bofu. Citable: REUSES the coined "Compounding Reconciliation Drift" (defined
 * on /accounting/bookkeeping/cleanup-bookkeeping/) applied at the FILE level —
 * broken feeds + unresolved discrepancies compound until the file won't close;
 * shown in the before/after ComparisonGrid. Price $1,200–$12,000+. quick-5
 * additive, zero overlap with FAQ. CTA: QB-specific BOFU — phone tertiary OK.
 * Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
  ],
  // quick-5 — distinct from FAQ (what is / how long / how much / file-vs-bk cleanup / products / vs Intuit / CPA-accept)
  aiSummary: [
    { q: "What makes a QuickBooks file drift out of reconciliation?", a: "<strong>Compounding reconciliation drift</strong> at the file level: a broken bank feed, a duplicated re-link, or an unresolved discrepancy carries into the next period and the gap grows month over month until the file won’t close. Cleanup finds the root cause and rebuilds each reconciliation back to a clean baseline — the same framework we apply in <a href=\"/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup\">bookkeeping cleanup</a>." },
    { q: "Do you repair my own file, or rebuild a new one?", a: "We <strong>repair your own QuickBooks file</strong> wherever it’s recoverable — reconnecting feeds, rebuilding reconciliations, clearing undeposited funds, resolving corruption. A full rebuild is reserved for files beyond repair (the Complex tier), and the diagnostic tells you which before any work begins." },
    { q: "Which QuickBooks error codes can you actually fix?", a: "Desktop <strong>H-series (H202/H505) and 6000-series</strong> errors, file-size and rebuild issues, multi-user/hosting failures, and Online file lockouts and access problems — the judgment-level repairs Intuit product support doesn’t perform." },
    { q: "What do I receive when the file cleanup is done?", a: "A <strong>clean, validated, CPA-ready file</strong> — reconnected feeds, rebuilt reconciliations, resolved undeposited funds, and a written summary of every fix with before/after evidence, signed off by the operator." },
    { q: "Can the same operator keep my books current afterward?", a: "Yes. Cleanup optionally transitions into <strong>monthly bookkeeping with the same named operator</strong>, plus prevention recommendations so the file doesn’t drift again. No lock-in." },
  ],
  signals: [
    { opener: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link — otherwise the duplicates compound." },
    { opener: "Reconciliation won’t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues — missing transactions, miscategorized entries, or an undeposited-funds backlog. ProAdvisor work finds the root cause." },
    { opener: "The file is corrupt, won’t open, or throws errors.", body: "QuickBooks Desktop file corruption (H202, H505, 6000-series errors), Online file lockouts, and multi-user mode failures all require ProAdvisor-level repair, not just rebuild tools." },
    { opener: "Undeposited funds has months or years of old balances.", body: "An undeposited-funds account that won’t clear is one of the most common file-quality issues. Cleanup investigates the original deposits and resolves the open items properly." },
    { opener: "Multi-user mode keeps breaking or locking users out.", body: "Network, hosting, and user-permission issues compound in QuickBooks Desktop and Enterprise. Cleanup includes diagnosing and resolving the underlying configuration." },
    { opener: "You upgraded versions and something broke.", body: "Version upgrades, year-end rollovers, and Desktop edition switches commonly create data inconsistencies. ProAdvisor cleanup validates the file after the upgrade and resolves what migrated incorrectly." },
  ],
  deliverables: [
    { num: "01", name: "Bank feed repair & reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent regression." },
    { num: "02", name: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved." },
    { num: "03", name: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open items cleared or documented. Account balance restored to zero or a justified open total." },
    { num: "04", name: "Duplicate & missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", name: "File corruption & error resolution", body: "QuickBooks Desktop H-series errors, 6000-series errors, file-size issues, network errors, and rebuild verification. Online file lockouts and account-access repair." },
    { num: "06", name: "Multi-user mode & hosting", body: "Multi-user configuration diagnosed and repaired. Server hosting setup verified. User permissions audited and corrected." },
    { num: "07", name: "Version upgrade verification", body: "Post-upgrade file validation after QuickBooks year-end rollovers, Desktop edition switches, or Online plan changes. Discrepancies identified and resolved." },
    { num: "08", name: "Chart of accounts review & documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing. Written summary of every fix made, signed off by the operator." },
  ],
  // "From file diagnostic to clean QuickBooks." — HowTo (process-diagram)
  process: [
    { num: "01", name: "File Diagnostic", body: "A 30-minute call. The operator reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days.", when: "Typical: 3 business days" },
    { num: "02", name: "Repair & Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Multi-user fixes. Version-conflict resolution.", when: "Typical: 1–3 weeks" },
    { num: "03", name: "Verify & Document", body: "Platform-level quality review. Every fix documented with before/after evidence for your records and your tax preparer.", when: "Typical: 2–3 business days" },
    { num: "04", name: "Handoff & Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same operator.", when: "Optional: monthly engagement" },
  ],
  // before/after ComparisonGrid — file-level drift, resolved
  compare: [
    { dim: "Bank feeds", before: "Broken, duplicated, or syncing wrong transactions", after: "Reconnected cleanly, rules rebuilt, duplicates cleared" },
    { dim: "Reconciliation", before: "Won’t balance, drift grows monthly", after: "Reconciled to statements, root cause documented" },
    { dim: "Undeposited funds", before: "Months of stuck open items", after: "Resolved or documented to a justified balance" },
    { dim: "File integrity", before: "Errors, corruption warnings, lockouts", after: "Clean file, validated, rebuild-tool verified" },
    { dim: "Multi-user access", before: "Users locked out, mode switching constantly", after: "Stable multi-user mode, permissions audited" },
    { dim: "Operator confidence", before: "Can’t trust the numbers, won’t close the month", after: "File works, books close, statements stand up" },
  ],
  tiers: [
    { name: "Focused cleanup", price: "$1,200–$3,000", per: "", forWhom: "Single-issue cleanups — bank feed repair, reconciliation rebuild, file corruption recovery, multi-user fix.", bullets: ["Single primary issue resolved", "Supporting cleanup as needed", "Written documentation", "Platform-level review"], cta: "Scope a focused cleanup", note: "" },
    { name: "Standard cleanup", price: "$3,000–$7,500", per: "", forWhom: "Multi-issue cleanups — reconciliation rebuild plus undeposited funds, duplicates, and bank rules across 12–24 months.", bullets: ["Multi-issue file repair", "Reconciliation rebuild", "Undeposited funds clearing", "Bank rules & categorization", "Chart of accounts review"], cta: "Scope a standard cleanup", note: "Most common" },
    { name: "Complex rebuild", price: "$7,500–$12,000+", per: "", forWhom: "Multi-year file rebuilds, data-integrity recovery, multi-entity QuickBooks Enterprise, post-corruption restoration.", bullets: ["Multi-year file reconstruction", "Data integrity recovery", "Multi-entity consolidation", "Multi-user / hosting rebuild", "Full statement validation"], cta: "Scope a complex rebuild", note: "" },
  ],
  operatorSpec: [
    { value: "Certification", label: "QuickBooks ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Vetting", label: "Credentialed, insured, onboarded against a defined standard" },
    { value: "Accountability", label: "Named operator · platform-level quality review" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  nextSteps: [
    { title: "Bookkeeping cleanup", href: "/accounting/bookkeeping/cleanup-bookkeeping/?intent=cleanup", body: "If the file issues are paired with messy or inaccurate books, bookkeeping cleanup is the broader engagement — often combined with file cleanup." },
    { title: "QuickBooks migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "Desktop-to-Online or other software-to-QuickBooks migrations by Certified ProAdvisors with data-integrity verification." },
    { title: "QuickBooks setup", href: "/quickbooks/setup/?intent=quickbooks-setup", body: "If the file is beyond repair or you’re starting fresh, setup rebuilds it correctly from the chart of accounts up." },
    { title: "ProAdvisor help center", href: "/quickbooks/help/?intent=qb-help", body: "Independent ProAdvisor guidance on specific QuickBooks issues, errors, workflows, and best practices." },
  ],
  faq: [
    { q: "What is QuickBooks file cleanup?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank-feed repair, reconciliation rebuild, undeposited-funds resolution, duplicate-transaction cleanup, file-corruption recovery, multi-user mode repair, and chart-of-accounts restructuring across QuickBooks Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does QuickBooks cleanup take?", a: "Most QuickBooks cleanup engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank-feed repair, reconciliation rebuild, file-corruption recovery) typically complete in 1–2 weeks. Multi-issue cleanups with reconciliation rebuild and historical transaction work take 2–4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost?", a: "QuickBooks cleanup is priced by scope, not by hour. Focused single-issue cleanups: $1,200–$3,000. Standard multi-issue cleanups: $3,000–$7,500. Complex multi-year file rebuilds with data-integrity work: $7,500–$12,000+. Every engagement is fixed-fee against a written scope." },
    { q: "What is the difference between QuickBooks file cleanup and bookkeeping cleanup?", a: "QuickBooks file cleanup focuses on the file itself — bank feeds, reconciliation, corruption, multi-user, version conflicts. Bookkeeping cleanup is broader — it reconstructs accurate financials from a messy state. Many engagements combine both, and they pair seamlessly." },
    { q: "Does TechBrot support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot operators are Certified ProAdvisors across the full QuickBooks stack — Online (Level 2), Desktop, Enterprise, and Payroll. The same operator network supports every product. Independent ProAdvisor firm, not affiliated with Intuit Inc." },
    { q: "How is TechBrot cleanup different from calling Intuit support?", a: "Intuit product support resolves software-level issues — installation, billing, account access. It does not perform bookkeeping work, reconciliation rebuilds, or data-integrity repairs that require judgment about your transactions. TechBrot ProAdvisors do that work independently — cleanup, reconciliation, categorization, and ongoing operational support." },
    { q: "Will my CPA accept the cleaned-up QuickBooks file?", a: "Yes. TechBrot cleanup engagements produce a CPA-ready file — reconciled to source documents, with documented adjustments. The deliverable is designed to be handed directly to a tax preparer or lender without rework." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#cleanup-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"File cleanup","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks file cleanup services","serviceType":"QuickBooks file repair, reconciliation rebuild, and data-integrity recovery","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks cleanup tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"From file diagnostic to clean QuickBooks","description":"How a TechBrot QuickBooks file cleanup runs, from diagnostic to handoff.","step":data.process.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

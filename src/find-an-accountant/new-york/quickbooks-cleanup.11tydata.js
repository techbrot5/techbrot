/* /find-an-accountant/new-york/quickbooks-cleanup/ — t-location NY SERVICE child
 * (the LARGEST NY child — 44 contract headings, none collapsed). Sources: FROZEN
 * EQUITY CONTRACT (contract-ny-svc-qbcleanup.txt) — the ONLY authority for the
 * headings + the 7 FAQ — and the live baseline old HTML
 * (find-an-accountant/new-york/quickbooks-cleanup/index.html, full body read) for
 * body prose/section content. Data-file shape mirrors industries/construction:
 * JSON front-matter lives in the .njk; this file supplies the content arrays +
 * an eleventyComputed pageGraph emitting the schema @graph (WebPage,
 * BreadcrumbList, Service with 3 Offers, FAQPage). The FAQPage mainEntity is
 * generated from the same `faq` array the visible faq__list renders from —
 * single source of truth.
 *
 * HONESTY (R5): no invented reviews, stats, clients, or outcomes. The only review
 * proof remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated
 * here) — this service child renders NO review-card and NO AggregateRating. The
 * baseline named-reviewer line ("David Westgate · 40+ years…") is reframed to a
 * firm-level review byline (no personal name in visible content). The baseline
 * "Before/after" outcomes table is reframed to representative, capability-level
 * statements (checks-list), not claimed real-client outcomes. Independent firm —
 * does NOT file NY State or NYC tax returns; coordinates with the client's CPA,
 * who files. Footer chrome (Accounting/QuickBooks/Company/Network) and the
 * newsletter ("The monthly brief.") are intentionally NOT rendered here — global
 * chrome owns them. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // CREDENTIALS — frozen H2 promoted from sr-only to a REAL heading (T3 no demotion).
  // (H2: Certified QuickBooks ProAdvisor credentials)
  credentials: {
    statement: "TechBrot holds active Certified QuickBooks ProAdvisor credentials across the full QuickBooks stack, delivered remotely to New York businesses statewide. Verification available on request.",
    badges: [
      "QuickBooks Online ProAdvisor &mdash; Level 2",
      "QuickBooks Desktop ProAdvisor",
      "QuickBooks Enterprise ProAdvisor",
      "QuickBooks Payroll ProAdvisor",
    ],
  },

  // SUMMARY — real-H2 section carrying the cleanup TL;DR prose (baseline tldr body, enriched).
  // (H2: What New York QuickBooks cleanup actually is.)
  summary: [
    "<strong>QuickBooks file cleanup</strong> is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers <strong>bank-feed reconnection</strong>, <strong>reconciliation rebuild</strong>, <strong>undeposited-funds clearing</strong>, duplicate-transaction resolution, missing-transaction reconstruction, multi-user repairs, version-conflict resolution, file-corruption recovery, and chart-of-accounts restructuring &mdash; plus, for New York businesses, reconciling <a href=\"/find-an-accountant/new-york/sales-tax-help/\">NYC and New York State sales-tax liability</a> so it ties to what was filed.",
    "The work is diagnostic before it is corrective. A messy file usually announces itself the same way: a reconciliation that drifts further every month, an undeposited-funds account carrying balances that are years old, a sales-tax payable that no longer matches the returns, and an <strong>opening-balance-equity</strong> line that quietly absorbed every entry nobody knew where to post. We trace each symptom to its root &mdash; a duplicated bank feed, an unmatched deposit, a transaction coded to the wrong period &mdash; and fix the cause, not the balance.",
    "Delivered by Certified ProAdvisors across <a href=\"/quickbooks/online/\">Online</a>, Desktop, Enterprise, and Payroll. Most engagements complete in 1&ndash;4 weeks, fixed-fee against a written scope. File cleanup is distinct from <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">bookkeeping cleanup</a> (broader financial reconstruction) and <a href=\"/find-an-accountant/new-york/quickbooks-migration/\">migration</a>. We do the cleanup; your CPA files. Independent firm &mdash; not affiliated with Intuit Inc.; does not file NY taxes.",
  ],

  // SIGNALS — the six file-level issues that need a ProAdvisor (grid-3 buyer-cards).
  // 6 frozen H3s VERBATIM. (H2: If you've hit any of these, you need a ProAdvisor. + 6 H3s)
  signals: [
    { title: "Bank feeds stopped syncing or duplicated transactions.", body: "Broken or duplicated bank feeds are the most common issue. Reconnecting cleanly requires reconciliation work, not just a re-link &mdash; otherwise the duplicates compound. We match the feed against statements, clear the doubles, and rebuild the bank rules that caused them." },
    { title: "Reconciliation won&rsquo;t balance and the difference keeps growing.", body: "A reconciliation that drifts month over month usually points to deeper issues &mdash; missing transactions, miscategorized entries, or an undeposited-funds backlog. We find the root cause period by period instead of forcing a balancing adjustment." },
    { title: "The file is corrupt, won&rsquo;t open, or throws errors.", body: "QuickBooks Desktop corruption (H202, H505, 6000-series), Online lockouts, and multi-user failures all require ProAdvisor-level repair, not just the built-in rebuild tool. We verify the file after, so the error doesn&rsquo;t return." },
    { title: "Sales-tax liability doesn&rsquo;t match what you filed.", body: "For New York businesses, a sales-tax payable that doesn&rsquo;t tie to filed NYC/NY returns is a common cleanup trigger &mdash; and a frequent precursor to a state notice. We reconcile the liability to the returns period by period so the books match what was filed." },
    { title: "Undeposited funds has months or years of old balances.", body: "An undeposited-funds account that won&rsquo;t clear is one of the most common file-quality issues. Cleanup investigates each original deposit against the bank, matches the open receipts, and resolves the stranded items properly instead of writing them off blind." },
    { title: "You upgraded versions and something broke.", body: "Version upgrades, year-end rollovers, and Desktop edition switches commonly create data inconsistencies. ProAdvisor cleanup validates the file after the upgrade and resolves what migrated incorrectly &mdash; balances, links, and list damage." },
  ],

  // AI SUMMARY — 5 entity-dense Q&As (mirror the live baseline five-question block).
  // (H2: New York QuickBooks cleanup, in five questions.)
  aiSummary: [
    { q: "What is QuickBooks file cleanup?", a: "<strong>A project-based engagement to repair file-level issues and restore data integrity</strong> &mdash; bank feeds, reconciliation rebuild, undeposited funds, duplicates, corruption, multi-user, and (for New York) NYC/NY sales-tax tie-out across Online, Desktop, Enterprise, and Payroll." },
    { q: "How long does it take?", a: "<strong>1&ndash;4 weeks.</strong> Focused single-issue cleanups run 1&ndash;2 weeks; multi-issue cleanups 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does it cost?", a: "Priced by scope, not by hour. Focused <strong>$1,200&ndash;$3,000</strong>; standard <strong>$3,000&ndash;$7,500</strong>; complex rebuild <strong>$7,500&ndash;$12,000+</strong>. Fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic." },
    { q: "Which QuickBooks products?", a: "<strong>All of them</strong> &mdash; Certified ProAdvisor across Online (L2), Desktop, Enterprise, and Payroll, delivered remotely to New York businesses. Independent firm; not affiliated with Intuit Inc." },
    { q: "How is this different from Intuit support?", a: "Intuit support resolves software issues (install, billing, access). It <strong>doesn&rsquo;t do reconciliation rebuilds or data-integrity repairs</strong> that require judgment about your transactions. TechBrot ProAdvisors do, independently." },
  ],

  // WHAT'S INCLUDED — the eight workstreams (grid-3 buyer-cards). 8 frozen H3s VERBATIM.
  // (H2: What New York QuickBooks cleanup actually delivers. + 8 H3s)
  includes: [
    { num: "01", title: "Bank feed repair &amp; reconnection", body: "Broken bank feeds reconnected. Duplicate transactions from prior re-link attempts identified and cleared. Bank rules rebuilt to prevent the duplicates from regenerating." },
    { num: "02", title: "Reconciliation rebuild", body: "Every reconciliation rebuilt against actual statements, period by period. Drift between book balance and statement balance investigated and resolved at the source." },
    { num: "03", title: "Undeposited funds resolution", body: "Old undeposited funds investigated against bank deposits. Open receipts matched, cleared, or documented. Account balance restored to zero or a justified open total." },
    { num: "04", title: "Duplicate &amp; missing transactions", body: "Duplicate entries identified across bank feeds, manual entries, and connected apps. Missing transactions reconstructed from statements and supporting documents." },
    { num: "05", title: "NYC &amp; NY sales-tax tie-out", body: "Sales-tax liability reconciled to filed NYC and New York State returns, so the payable in QuickBooks matches reality &mdash; key if you&rsquo;re behind or were noticed. We do the tie-out; your CPA files." },
    { num: "06", title: "File corruption &amp; error resolution", body: "QuickBooks Desktop H-series and 6000-series errors, file-size issues, network errors, and rebuild verification. Online lockouts and account-access repair." },
    { num: "07", title: "Multi-user &amp; version verification", body: "Multi-user configuration and hosting diagnosed and repaired; permissions audited. Post-upgrade file validation after rollovers or edition switches." },
    { num: "08", title: "Chart of accounts review &amp; documentation", body: "Chart of accounts evaluated, simplified where redundant, expanded where missing &mdash; including clearing what landed in opening-balance equity. Written summary of every fix, signed off by the ProAdvisor." },
  ],

  // PROCESS — four-phase engagement rhythm (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: From file diagnostic to clean QuickBooks. + 4 H3s)
  process: [
    { phase: "Phase 1", title: "File Diagnostic", body: "A 30-minute call. A ProAdvisor reviews your QuickBooks file, identifies data-integrity issues, broken connections, and reconciliation discrepancies. Written fixed-fee scope within 3 business days. No pitch.", meta: "Typical: 3 business days" },
    { phase: "Phase 2", title: "Repair &amp; Reconcile", body: "File-level repairs. Bank-feed reconnection. Reconciliation rebuild. Duplicate and missing-transaction resolution. Undeposited-funds clearing. NYC/NY sales-tax tie-out. Multi-user fixes.", meta: "Typical: 1&ndash;3 weeks" },
    { phase: "Phase 3", title: "Verify &amp; Document", body: "Quality review against the operating standard. Every fix documented with before/after evidence for your records and for your CPA.", meta: "Typical: 2&ndash;3 business days" },
    { phase: "Phase 4", title: "Handoff &amp; Prevention", body: "Clean file delivered with a written summary and prevention recommendations. Optional transition to monthly bookkeeping with the same ProAdvisor.", meta: "Optional: monthly engagement" },
  ],

  // OUTCOMES — reframed from the baseline before/after TABLE to representative,
  // capability-level statements (R5: not claimed real-client outcomes; T3: no table demotion).
  // (H2: What changes when the file is clean.)
  outcomes: [
    "<strong>Bank feeds:</strong> from broken, duplicated, or mis-syncing transactions to reconnected cleanly, rules rebuilt, and duplicates cleared.",
    "<strong>Reconciliation:</strong> from a balance that drifts month over month to reconciled against statements with the root cause documented.",
    "<strong>NYC/NY sales tax:</strong> from a payable that doesn&rsquo;t match filed returns to liability tied out to the returns, reducing notice risk.",
    "<strong>File integrity:</strong> from errors, corruption warnings, and lockouts to a clean, validated file verified after repair.",
    "<strong>Multi-user access:</strong> from users locked out or mode-switching constantly to stable multi-user mode with permissions audited.",
    "<strong>Owner confidence:</strong> from numbers you can&rsquo;t trust and a month you won&rsquo;t close to a file that works, books that close, and statements that stand up to a CPA or lender.",
  ],

  // PRICING — three fixed-fee scope tiers (grid-3 buyer-cards). 3 frozen H3s VERBATIM.
  // (H2: Fixed fee, written scope, no hourly billing. + 3 H3s)
  pricing: [
    { tier: "Tier 01", title: "Focused cleanup", range: "<strong>$1,200&ndash;$3,000</strong>", fit: "Single-issue cleanups &mdash; bank-feed repair, reconciliation rebuild, file-corruption recovery, or a multi-user fix &mdash; with supporting cleanup as needed and written documentation.", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a focused cleanup &rarr;" },
    { tier: "Tier 02 &middot; Most common", title: "Standard cleanup", range: "<strong>$3,000&ndash;$7,500</strong>", fit: "Multi-issue cleanups &mdash; reconciliation rebuild plus undeposited funds, duplicates, NYC/NY sales-tax tie-out, bank rules, and chart-of-accounts review across 12&ndash;24 months.", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a standard cleanup &rarr;" },
    { tier: "Tier 03", title: "Complex rebuild", range: "<strong>$7,500&ndash;$12,000+</strong>", fit: "Multi-year file rebuilds, data-integrity recovery, multi-entity QuickBooks Enterprise, and post-corruption restoration with full statement validation.", href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-spoke&amp;funnel_stage=MOFU", cta: "Scope a complex rebuild &rarr;" },
  ],
  pricingNote: "Ranges are typical engagements; final pricing is determined by the diagnostic. If your cleanup also requires bookkeeping reconstruction across prior periods, see <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">bookkeeping cleanup</a> &mdash; the engagements pair seamlessly.",

  // OPERATOR — expertise-first framing, firm-level (R5: named-reviewer line reframed).
  // (H2: A named Certified ProAdvisor — not an offshore call center.)
  operatorBody: [
    "Every TechBrot QuickBooks cleanup is delivered by a Certified QuickBooks ProAdvisor with active certifications across Online, Desktop, Enterprise, and Payroll &mdash; the expert who does the work stays on your file from diagnostic to handoff. You&rsquo;ll know exactly who is repairing your file and how to reach them.",
    "Quality review backs every engagement. The Certified ProAdvisor team reviews TechBrot&rsquo;s published standards, and every fix is documented with before/after evidence, so the file context is never lost. <a href=\"/trust/\">Trust &amp; methodology &rarr;</a>",
  ],
  operatorCreds: [
    { label: "Certification", detail: "QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Coverage", detail: "All 62 New York counties, delivered remotely" },
    { label: "Accountability", detail: "Named ProAdvisor on your file from diagnostic to handoff &middot; every fix documented" },
    { label: "Independence", detail: "Independent ProAdvisor firm &middot; not affiliated with Intuit Inc." },
  ],

  // RELATED — file cleanup as part of a larger engagement (grid-2 buyer-cards). 4 frozen H3s VERBATIM.
  // (H2: File cleanup is often part of a larger engagement. + 4 H3s)
  related: [
    { title: "Bookkeeping cleanup", body: "If the file issues are paired with messy or inaccurate books, bookkeeping cleanup is the broader engagement &mdash; often combined with file cleanup.", href: "/find-an-accountant/new-york/cleanup-bookkeeping/", cta: "Bookkeeping cleanup &rarr;" },
    { title: "QuickBooks migration", body: "Desktop-to-Online or other software-to-QuickBooks migrations by Certified ProAdvisors with data-integrity verification.", href: "/find-an-accountant/new-york/quickbooks-migration/", cta: "Migration &rarr;" },
    { title: "QuickBooks setup", body: "If your file is beyond repair or you&rsquo;re starting fresh, setup rebuilds the file correctly from the chart of accounts up.", href: "/find-an-accountant/new-york/quickbooks-setup/", cta: "Setup &rarr;" },
    { title: "NY sales tax help", body: "Destination-based NYC/NY rates and the tie-out that keeps your returns and books in agreement.", href: "/find-an-accountant/new-york/sales-tax-help/", cta: "Sales tax help &rarr;" },
  ],

  // EXPERT REVIEW — firm-level trust row (R5: no founder/personal name; baseline
  // "David Westgate · 40+ years" reviewer line reframed to firm-level).
  // (H2: Reviewed by the TechBrot Certified ProAdvisor team.)
  reviewCreds: [
    { label: "Reviewer", detail: "TechBrot Certified QuickBooks ProAdvisor team &middot; operational accounting" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Scope", detail: "File repair, reconciliation, undeposited funds, NYC/NY sales-tax tie-out &middot; income-tax filing coordinated with your CPA/EA" },
    { label: "Independence", detail: "Not affiliated with Intuit Inc. &middot; QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // FAQ — 7 Q/A VERBATIM from the contract. visible faq__list = FAQPage schema (same array).
  // (H2: What people ask before scoping a New York QuickBooks cleanup.)
  faq: [
    { q: "What is QuickBooks file cleanup in New York?", a: "QuickBooks file cleanup is a project-based engagement to repair file-level issues and restore data integrity inside a QuickBooks company file. It covers bank feed repair, reconciliation rebuild, undeposited funds resolution, duplicate transaction cleanup, file corruption recovery, multi-user mode repair, and chart of accounts restructuring. For New York businesses, cleanup also reconciles NYC and New York State sales-tax liability so it ties to what was filed &mdash; important if you&rsquo;re behind or have received a notice." },
    { q: "How long does QuickBooks cleanup take?", a: "Most engagements complete in 1 to 4 weeks. Focused single-issue cleanups (bank feed repair, reconciliation rebuild, file corruption recovery) take 1&ndash;2 weeks. Multi-issue cleanups with reconciliation rebuild and historical transaction work take 2&ndash;4 weeks. The timeline is fixed in the written scope before work begins." },
    { q: "How much does QuickBooks cleanup cost in New York?", a: "Cleanup is priced by scope, not by hour. Focused single-issue cleanups: $1,200&ndash;$3,000. Standard multi-issue cleanups: $3,000&ndash;$7,500. Complex multi-year file rebuilds with data integrity work: $7,500&ndash;$12,000+. Every engagement is fixed-fee against a written scope, quoted within 3 business days of a free file diagnostic &mdash; book one online or call <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "What&rsquo;s the difference between file cleanup and bookkeeping cleanup?", a: "QuickBooks file cleanup focuses on the file itself &mdash; bank feeds, reconciliation, corruption, multi-user, version conflicts. Bookkeeping cleanup is broader and reconstructs accurate financials from a messy state across prior periods. Many New York engagements combine both, and we scope whichever (or both) your file needs." },
    { q: "Do you support QuickBooks Desktop, Online, Enterprise, and Payroll?", a: "Yes. TechBrot&rsquo;s team holds active Certified ProAdvisor certifications across the full QuickBooks stack &mdash; Online (Level 2), Desktop, Enterprise, and Payroll. The same expertise supports every product, delivered remotely to New York businesses statewide." },
    { q: "How is this different from calling Intuit support?", a: "Intuit product support resolves software-level issues &mdash; installation, billing, account access. It does not perform bookkeeping work, reconciliation rebuilds, or data integrity repairs that require judgment about your transactions. TechBrot&rsquo;s Certified ProAdvisors do that work independently, as an unaffiliated ProAdvisor firm." },
    { q: "Will my New York CPA accept the cleaned-up file?", a: "Yes. TechBrot cleanup produces a CPA-ready file &mdash; reconciled to source documents, with documented adjustments, and with NYC/NY sales-tax liability tied out. The deliverable is designed to be handed directly to your CPA or a lender without rework. We do the cleanup; your CPA files." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/quickbooks-cleanup/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"New York QuickBooks Cleanup","description":"QuickBooks file cleanup for New York businesses — bank feed repair, reconciliation rebuild, undeposited funds, file corruption, and NYC/NY sales-tax tie-out. Fixed-fee, CPA-ready, by a Certified ProAdvisor.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/new-york-quickbooks-cleanup-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-qbcleanup-summary","#ny-svc-qbcleanup-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Cleanup"}]},
        {"@type":"Service","@id":url+"#service","name":"New York QuickBooks Cleanup","serviceType":"QuickBooks file cleanup and repair","description":"Project-based QuickBooks file cleanup for New York businesses — file repair, reconciliation rebuild, undeposited-funds clearing, and NYC/NY sales-tax tie-out, delivered by a Certified ProAdvisor. Independent Certified QuickBooks ProAdvisor firm; does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"New York small and mid-sized businesses with QuickBooks file or data-integrity issues"},
          "offers":[
            {"@type":"Offer","name":"Focused cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"1200","priceCurrency":"USD"},"description":"Single-issue cleanup from $1,200, fixed-fee.","url":url},
            {"@type":"Offer","name":"Standard cleanup","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"3000","priceCurrency":"USD"},"description":"Multi-issue cleanup from $3,000, fixed-fee.","url":url},
            {"@type":"Offer","name":"Complex rebuild","priceCurrency":"USD","priceSpecification":{"@type":"PriceSpecification","minPrice":"7500","priceCurrency":"USD"},"description":"Multi-year file rebuild from $7,500, fixed-fee.","url":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

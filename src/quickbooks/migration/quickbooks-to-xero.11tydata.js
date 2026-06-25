/* /quickbooks/migration/quickbooks-to-xero/ (MIGRATION-PROTOCOL elevation).
 * Sources: contract-qb-toxero.txt (FROZEN — 44 headings, 8 FAQ; the ONLY
 * authority for headings + FAQ) + quickbooks/migration/quickbooks-to-xero/
 * index.html (BODY PROSE only). t-bofu, cobalt vocabulary. REFERENCE:
 * src/quickbooks/migration.njk + cleanup.njk (parent hub + sibling).
 * Reverse-direction (outbound) child. HONEST both-platforms framing: we are
 * a Certified QuickBooks ProAdvisor firm with NO Xero commercial relationship;
 * we present the real trade-offs and advise/execute the move either way.
 * The QB-vs-Xero comparison is a vs-scroll + vs-table (NOT buyer-cards).
 * Verified facts: Jet Convert free scope (current + prior FY), multi-currency
 * tiers (~$80 vs ~$275), unlimited-users vs per-seat, 700,000+ ProAdvisor
 * ecosystem, no native US payroll, native inventory favors QB, documented
 * free-conversion error rates. Price $2,500–$10,000+. CTA: canonical lexicon
 * only. Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credentials: [
    "QuickBooks Online ProAdvisor — Level 2",
    "QuickBooks Desktop ProAdvisor",
    "QuickBooks Enterprise ProAdvisor",
    "QuickBooks Payroll ProAdvisor",
    "Intuit Certified Bookkeeping Professional",
    "No commercial relationship with Xero — no partner program, no referral fees",
  ],
  // quick-5 — distinct from the 8 FAQ (can-I / better / when-switch / when-stay / how-long-and-cost)
  aiSummary: [
    { q: "Can I migrate from QuickBooks to Xero?", a: "Yes. Xero&rsquo;s free partner tool (Jet Convert) brings chart of accounts, contacts, and the current and prior fiscal year of transactions across in 20 minutes to five business days; older years cost extra. The real question is rarely whether you can move &mdash; <strong>it&rsquo;s whether you should, and whether the result is verified.</strong>" },
    { q: "Is Xero better than QuickBooks?", a: "Neither is universally better. <strong>Xero</strong> fits multi-currency, large teams, an opinionated UX, unlimited users, and a native fixed-asset register. <strong>QuickBooks</strong> fits the U.S. accountant ecosystem, a deeper app marketplace, mature built-in payroll, and native inventory. The right answer depends on the business." },
    { q: "When should I switch?", a: "Significant <strong>multi-currency</strong> (Xero&rsquo;s ~$80 tier vs QuickBooks&rsquo; ~$275 tier), many users (Xero unlimited vs QuickBooks per-seat), your <strong>accountant prefers Xero</strong>, or you specifically value Xero&rsquo;s reconciliation workflow. Not: novelty, headline price, or because someone called Xero &ldquo;more modern.&rdquo;" },
    { q: "When should I stay on QuickBooks?", a: "Your <strong>U.S. CPA prefers QuickBooks</strong> (most do); you rely on the QuickBooks app ecosystem; you use QuickBooks Payroll (Xero has no native U.S. payroll); you need native inventory; your team is trained on QuickBooks; or your problem is actually a <a href=\"/quickbooks/cleanup/?intent=qb-cleanup\">QuickBooks file issue</a> (wrong balances, corruption, bad books) fixable without switching." },
    { q: "How long and how much?", a: "Conversion runs minutes to five business days; the full engagement is <strong>two to four weeks</strong> standard, four to eight for multi-currency or multiple entities. Professional work runs <strong>$2,500&ndash;$5,000 standard</strong> and <strong>$5,000&ndash;$10,000+ complex</strong>, fixed-fee against a written scope <em>after</em> an honest fit assessment." },
  ],
  // "Genuine reasons to switch." — 6 h3 verbatim (buyer-card grid-2)
  switchReasons: [
    { opener: "Significant multi-currency operations.", body: "Xero&rsquo;s native multi-currency handling is cleaner than QuickBooks Online&rsquo;s, and it sits far lower in the lineup &mdash; bundled into Xero&rsquo;s roughly $80/month mid-tier versus QuickBooks reserving it for the roughly $275/month Advanced plan. For regular cross-border invoicing or foreign-currency accounts, that gap matters." },
    { opener: "Large team, per-user pricing matters.", body: "Xero includes unlimited users on every plan. QuickBooks charges per user and caps each tier (roughly 1, 3, 5, then 25 users). For teams of 10 or more, the user-cost math can swing the decision &mdash; if everything else were equal." },
    { opener: "Your accountant works in Xero.", body: "If your existing accountant or controller is fluent in both and explicitly prefers Xero for your engagement, that preference carries weight. The platform your professional advisor uses every day matters more than which one ranks marginally higher on features." },
    { opener: "You value Xero&rsquo;s reconciliation workflow.", body: "Xero&rsquo;s bank reconciliation interface is opinionated and well-designed, and teams who&rsquo;ve used it sometimes find QuickBooks&rsquo; reconciliation flow noticeably slower. If you&rsquo;ve worked in both and prefer Xero&rsquo;s, that&rsquo;s a real signal." },
    { opener: "Industry-specific fit.", body: "Some businesses &mdash; particularly those with international operations, certain professional services, and companies with strong Xero-native app dependencies &mdash; have ecosystems that fit Xero better than QuickBooks." },
    { opener: "A clean break from a broken QuickBooks file.", body: "Occasionally a business with a severely damaged QuickBooks file uses the move as a forcing function for a fresh start. Often <a href=\"/quickbooks/cleanup/?intent=qb-cleanup\">file cleanup</a> is faster and cheaper &mdash; but if you&rsquo;re ready to switch anyway, the timing works." },
  ],
  // "Reasons not to switch — and what to do instead." — 6 h3 verbatim (buyer-card grid-2)
  stayReasons: [
    { opener: "Your CPA prefers QuickBooks", body: "Most U.S. CPAs and accountants work primarily in QuickBooks &mdash; Intuit reports a network of more than 700,000 ProAdvisors and accountants. Forcing your accountant onto an unfamiliar platform creates friction at tax time, costs you in fees, and rarely improves the actual books. Better move: stay on QuickBooks, and if the file has issues, fix them." },
    { opener: "Your problem is a file problem", body: "Wrong balances, broken reconciliation, file corruption, or messy books are almost always solvable inside QuickBooks &mdash; cheaper and faster than migrating. Better move: <a href=\"/quickbooks/cleanup/?intent=qb-cleanup\">QuickBooks file cleanup</a>. Switching platforms doesn&rsquo;t fix bad data; it just moves it, and an unverified conversion can add new errors on top." },
    { opener: "You use QuickBooks Payroll", body: "QuickBooks Payroll&rsquo;s integration with QuickBooks bookkeeping is mature and tight. Xero has no native U.S. payroll, so moving means adding Gusto, ADP, or another standalone system &mdash; an extra subscription, integration, and learning curve. Better move: stay, unless other factors strongly favor the switch." },
    { opener: "You depend on QB-ecosystem apps or inventory", body: "If your operations rely on QuickBooks-marketplace integrations &mdash; certain industry tools, payment processors, reporting apps &mdash; or on QuickBooks&rsquo; native inventory and cost-of-goods tracking, switching means rebuilding or replacing them (Xero leans on paid inventory add-ons). Better move: stay; the integration cost usually exceeds the platform benefit." },
    { opener: "Your team is trained on QuickBooks", body: "A platform switch costs months of productivity as your team relearns daily workflows. That cost is real but invisible &mdash; it rarely appears in the switching pitch. Better move: stay unless the platform benefit is large enough to justify months of retraining." },
    { opener: "You&rsquo;re switching because of headline price", body: "Xero&rsquo;s subscription is sometimes cheaper than QuickBooks Online&rsquo;s, but the savings are typically dwarfed by migration cost, retraining, payroll re-platforming, integration rebuild, and CPA-fluency friction. Better move: stay; small monthly savings rarely beat one-time switching costs." },
  ],
  // "Where each platform actually wins." — vs-table (NOT buyer-cards). 3 h3 carried in the .njk as stack-8 prose.
  compare: [
    { dim: "Multi-currency handling", xero: "Native and clean, bundled into the ~$80/mo mid-tier", qb: "Reserved for the ~$275/mo Advanced plan" },
    { dim: "Users per plan", xero: "Unlimited on every plan", qb: "Per-seat, capped by tier (~1, 3, 5, then 25)" },
    { dim: "Fixed-asset register", xero: "Native", qb: "Add-on required" },
    { dim: "Reconciliation UX", xero: "Opinionated; many teams prefer it", qb: "Capable; some find it slower" },
    { dim: "U.S. accountant ecosystem", xero: "Smaller in the U.S.", qb: "Far larger — 700,000+ ProAdvisors and accountants" },
    { dim: "Built-in payroll (U.S.)", xero: "None — relies on Gusto, ADP, or similar", qb: "Mature and native" },
    { dim: "Inventory & cost-of-goods", xero: "Leans on paid add-ons", qb: "Native" },
    { dim: "Core bookkeeping, AR/AP, invoicing", xero: "Solid for standard needs", qb: "Solid for standard needs" },
  ],
  // "Honest fit first. Migration only if it's right." — 4 h3 verbatim (process-diagram)
  phases: [
    { num: "01", when: "Typical: 1 week", name: "Honest fit assessment", body: "A ProAdvisor reviews your QuickBooks file, your operations, your accountant&rsquo;s preference, your integration stack, and the actual problem you&rsquo;re trying to solve. We deliver a plain recommendation: switch, stay, or fix the file. About a third of these calls end with us recommending you stay." },
    { num: "02", when: "Typical: 3 business days", name: "Scope &amp; plan (if switching)", body: "If Xero is the right call, we map the migration scope &mdash; conversion method (Jet Convert, CSV, or fresh start), chart-of-accounts mapping, history-transfer approach, integrations to rebuild, opening-balance cutover date &mdash; and produce a written fixed-fee scope." },
    { num: "03", when: "Typical: 2–6 weeks", name: "Migrate &amp; verify", body: "QuickBooks data is converted and mapped to Xero, opening balances established, integrations reconnected, and &mdash; the step the free tools skip &mdash; the Xero file reconciled against the QuickBooks baseline before sign-off, so the new file ties to the numbers you trusted." },
    { num: "04", when: "Final", name: "Hand off", body: "A written summary of what transferred and what was rebuilt, plus a clean handoff to whoever runs the books going forward &mdash; your in-house team, your accountant, or another firm. TechBrot does not provide ongoing Xero bookkeeping; the engagement ends at handoff." },
  ],
  // "Fixed fee, written scope, only if switching is right." — 2 h3 verbatim
  tiers: [
    { name: "Standard migration", price: "$2,500–$5,000", forWhom: "Single-entity U.S. businesses, standard integrations, opening balances plus current-year detail.", bullets: ["Honest fit assessment first", "Chart-of-accounts mapping", "Transaction history transfer", "Opening balances & AR/AP", "Verification against the QB source", "Core integrations reconnected", "Written transfer summary"], cta: "Scope a standard migration", note: "Most common" },
    { name: "Complex migration", price: "$5,000–$10,000+", forWhom: "Multi-currency (where the free tool can&rsquo;t be used), multiple entities, inventory, multi-year history, or extensive integration rebuild.", bullets: ["Everything in Standard", "Multi-currency mapping", "Multi-entity migration", "Multi-year history import", "Inventory migration", "Extensive integration rebuild", "Team handoff & documentation"], cta: "Scope a complex migration", note: "" },
  ],
  operatorSpec: [
    { value: "Certification", label: "Certified ProAdvisor — Online L2, Desktop, Enterprise, Payroll" },
    { value: "Xero relationship", label: "None — no partner program, no referral fees, no commercial incentive" },
    { value: "Accountability", label: "Named operator · platform-level quality review · documented recommendation" },
    { value: "Independence", label: "Independent ProAdvisor firm — not affiliated with Intuit Inc. or Xero Limited" },
  ],
  reviewSpec: [
    { value: "Certifications", label: "Active Intuit ProAdvisor across QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Scope", label: "QuickBooks-to-Xero fit assessment & migration · income-tax filing coordinated with your CPA/EA" },
    { value: "Method", label: "Converted Xero file reconciled to the QuickBooks source · fixed-fee, written scope" },
    { value: "Independence", label: "No commercial relationship with Xero · not affiliated with Intuit Inc. or Xero Limited" },
  ],
  // "Related QuickBooks services." — 4 h3 verbatim
  related: [
    { title: "QuickBooks file cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "If your real problem is a broken QuickBooks file, cleanup is faster and cheaper than switching platforms." },
    { title: "Balances wrong after migration", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "Wrong numbers after a previous conversion are fixable &mdash; you don&rsquo;t need to switch platforms to escape them." },
    { title: "Moving to QuickBooks?", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "If the honest answer is the other direction &mdash; consolidating onto QuickBooks &mdash; we handle that inbound move too." },
    { title: "All migration services", href: "/quickbooks/migration/?intent=quickbooks-migration", body: "The migration hub &mdash; every inbound and outbound platform move we handle." },
  ],
  // 8 FAQ — questions verbatim; answers preserved verbatim from the frozen contract.
  faq: [
    { q: "Can I migrate from QuickBooks to Xero?", a: "Yes. Migration from QuickBooks Online or QuickBooks Desktop to Xero is well-supported. Xero&rsquo;s official partner, Jet Convert, offers a free automated conversion covering your current and prior fiscal year &mdash; chart of accounts, contacts, and transactions like invoices and bills &mdash; and the conversion typically takes from 20 minutes to five business days. Additional years can be added for a fee, and a CSV-based or fresh-start method is available for messier files. The real question is rarely whether you can move &mdash; it&rsquo;s whether you should, and whether the converted file is actually verified. We assess the fit honestly first, then handle the migration and verification if Xero genuinely fits better." },
    { q: "Is Xero better than QuickBooks?", a: "Neither is universally better; they fit different businesses. Xero tends to fit businesses that value clean multi-currency handling, strong bank-feed reconciliation, an opinionated user interface, unlimited users on every plan, and a native fixed-asset register. QuickBooks tends to fit businesses that benefit from its far larger U.S. accountant ecosystem (Intuit reports over 700,000 certified ProAdvisors and accountants), deeper U.S. app marketplace, mature built-in payroll, more flexible reporting at higher tiers, and stronger native inventory and cost-of-goods tracking. The right answer depends on your specific situation &mdash; and as an independent ProAdvisor firm we have no incentive to push you toward either one." },
    { q: "When does it make sense to switch from QuickBooks to Xero?", a: "Common cases include: businesses with significant international or multi-currency operations, where Xero bundles multi-currency into its mid-tier (around $80/month) versus QuickBooks reserving it for the top Advanced tier (around $275/month); teams with many users, since Xero includes unlimited users on every plan while QuickBooks charges per seat and caps each tier; businesses that value Xero&rsquo;s interface and reconciliation workflow specifically; and companies whose U.S. accountant or controller works fluently in both and prefers Xero. Switching purely for novelty, a lower headline price, or because someone called Xero &lsquo;more modern&rsquo; is rarely a winning trade once migration cost, retraining, and payroll re-platforming are counted." },
    { q: "When should I stay on QuickBooks instead?", a: "Most U.S. small and mid-sized businesses are better served staying on QuickBooks, particularly when: your U.S. CPA or accountant prefers QuickBooks (most do); you rely on apps from the larger QuickBooks app ecosystem; you need QuickBooks Payroll&rsquo;s tight built-in integration (Xero has no native U.S. payroll, so you&rsquo;d move to Gusto, ADP, or similar); your team is already trained on QuickBooks and a switch would cost productivity for months; you depend on QuickBooks&rsquo; native inventory and cost-of-goods tracking; or you&rsquo;re considering the move primarily because of a problem (wrong balances, file corruption, bad bookkeeping) that&rsquo;s actually a QuickBooks file issue solvable by fixing the file, not by switching platforms." },
    { q: "What does it cost to migrate from QuickBooks to Xero?", a: "Two costs are involved. First, the data conversion itself: Xero&rsquo;s Jet Convert tool is free for the current and prior fiscal year, with older years added for a fee, and third-party converters (such as MMC Convert) start around a few hundred dollars. Second, the professional work around it &mdash; fit assessment, chart-of-accounts mapping, opening-balance and AR/AP setup, integration rebuild, and verifying the converted file against the QuickBooks baseline. TechBrot prices that professional work by scope: a standard single-entity engagement typically runs $2,500 to $5,000, and a complex one (multi-currency, multiple entities, inventory, or extensive integrations) runs $5,000 to $10,000 or more, fixed-fee against a written scope after an honest fit assessment." },
    { q: "How long does a QuickBooks to Xero migration take?", a: "The automated conversion itself can take as little as 20 minutes to five business days through Jet Convert. The full professional engagement &mdash; fit assessment, mapping, verification, and integration rebuild &mdash; typically completes in two to four weeks for a straightforward single entity, and four to eight weeks for multi-currency, multiple entities, inventory, or heavy integration rebuild. The timeline is fixed in the written scope before work begins, after we&rsquo;ve confirmed that switching is genuinely the right call." },
    { q: "Will my historical data transfer from QuickBooks to Xero?", a: "Most of it can, but not all of it transfers cleanly, and the free tool has limits. Jet Convert brings the current and prior fiscal year of chart of accounts, contacts, invoices, bills, and bank transactions; it requires a U.S. QuickBooks edition from 2007 or newer and a file where multi-currency was never turned on. Reconciliation reports, customized forms, certain inventory detail, payroll history, and memorized reports usually need to be rebuilt or archived. The practical question is how much history is worth importing versus archiving &mdash; and, just as important, whether the converted result is verified, since free conversions are documented to carry meaningful error rates when no one checks the balances against the source." },
    { q: "Why does a QuickBooks ProAdvisor firm handle Xero migrations?", a: "Because independence means giving honest advice, even when the honest answer is that another platform fits better. We&rsquo;re QuickBooks experts, and most of our clients are right to stay on QuickBooks &mdash; but when Xero is genuinely the better fit, refusing to acknowledge that would make our QuickBooks advice less trustworthy too. There&rsquo;s also a practical reason the work matters: the free conversion tools move data without verifying it, and independent reporting puts their balance-sheet error rates high enough that an unverified switch can surface as wrong numbers at tax time. Handling QuickBooks-to-Xero migrations cleanly &mdash; verifying the result against the source, and turning down the moves that shouldn&rsquo;t happen &mdash; is what independence actually looks like." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/migration/quickbooks-to-xero/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-toxero-in-brief-text","#qb-toxero-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Migration","item":"https://techbrot.com/quickbooks/migration/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks to Xero","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks to Xero Migration","serviceType":"QuickBooks-to-Xero fit assessment and migration","description":"Independent fit assessment and, where Xero genuinely fits, a verified QuickBooks-to-Xero migration — chart-of-accounts mapping, opening balances, integration rebuild, and reconciliation to the QuickBooks source.","areaServed":{"@type":"Country","name":"United States"},"audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"OfferCatalog","name":"QuickBooks-to-Xero migration tiers","itemListElement":data.tiers.map(function(t){return {"@type":"Offer","name":stripTags(t.name),"priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":stripTags(t.price)+" · fixed fee, written scope"},"availability":"https://schema.org/InStock"};})}},
        {"@type":"HowTo","@id":url+"#howto","name":"How a TechBrot QuickBooks-to-Xero engagement runs","description":"The fit-first sequence, from honest assessment to verified migration and handoff.","step":data.phases.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /vs/techbrot-vs-quickbooks-live/ — t-mofu COMPARISON page (MIGRATION-PROTOCOL:
 * content-to-goal, visual-floor). T1 AUTHORITY for headings + FAQ is the FROZEN
 * EQUITY CONTRACT (contract-vs-qblive.txt) — NOT the old HTML. The old HTML
 * (vs/techbrot-vs-quickbooks-live/index.html) is read ONLY for body PROSE.
 *
 * T2 frozen headings (verbatim, exact level): h1 (layout hero) · "About this
 * comparison." · "The honest difference." · "...in five questions." · "Side by
 * side, across what matters." · "When each option actually fits." + 3 H3
 * (verdict) · "What people ask when comparing." · "More honest comparisons." +
 * 4 H3 (related) · "Not sure if you need more than core bookkeeping?" (ctaBand
 * heading, layout). DROPPED: "The monthly brief." (newsletter). Footer chrome
 * H2s (Accounting/QuickBooks/Company/Network) NOT rendered — they are global
 * footer, not page content.
 *
 * T3 NO COLLAPSE: the comparison is a real vs-scroll + vs-table (NEVER
 * proof-strip cards). The 3 verdict H3s and 4 related H3s stay as real <h3>.
 *
 * T4 FAQ: the 6 contract Q/A, QUESTIONS verbatim/flat, one array (faq[]) →
 * faq__list accordion + FAQPage schema. ANSWERS verbatim from the contract;
 * the contract answers were already current (Expert Assisted / Full-Service
 * tiering), so no answer reword was needed — see CURRENCY notes below.
 *
 * CURRENCY (today 2026-06): QuickBooks Live is INTUIT'S OWN bookkeeping service.
 * Intuit restructured it — it STOPPED offering QuickBooks Live Bookkeeping to
 * NEW QuickBooks Online subscribers in 2024 and shifted toward "QuickBooks Live
 * Expert Assisted." The contract FAQ answers already describe the Expert
 * Assisted / Full-Service tiering accurately, so they remain verbatim. The
 * BODY PROSE (disclosure, definition, ai-summary, vs-table, verdict) is where
 * the 2024 restructure is reflected — the old HTML's "May 2026" disclosure and
 * present-tense "offers tiers from Expert Assisted to Full-Service" framing is
 * UPDATED to current 2026 status. Every currency update is flagged in the
 * build report. NO fabricated pricing/stats — qualitative or caveated only.
 *
 * HONESTY (R5/R9): TechBrot is an INDEPENDENT Certified QuickBooks ProAdvisor
 * firm — NOT Intuit, NOT QuickBooks Live. Stated throughout. Fair both-sides:
 * where QuickBooks Live fits (in-product, Intuit-staffed, lower-touch) vs where
 * TechBrot fits (independent dedicated ProAdvisor, fixed-fee, deeper). No
 * disparagement of Intuit. No fabricated reviews; no AggregateRating; no
 * personal name. CTAs from canonical lexicon only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "About this comparison." — disclosure / currency note (H2). CURRENCY-UPDATED:
  // old HTML said "as of May 2026" + present-tense "offering tiers". Reframed to
  // current 2026 status incl. the 2024 restructure (no new-QBO-subscriber
  // availability; shift to Expert Assisted).
  disclosure: [
    "This comparison reflects publicly available information about QuickBooks Live as of 2026. QuickBooks Live is Intuit&rsquo;s own first-party bookkeeping service, and Intuit has restructured it: in 2024 Intuit stopped offering QuickBooks Live Bookkeeping to new QuickBooks Online subscribers and shifted its live-help direction toward QuickBooks Live Expert Assisted. Availability, tiers, scope, and pricing are set by Intuit and may change &mdash; verify current details on Intuit&rsquo;s website before deciding. This page is provided in good faith for informational purposes.",
    "QuickBooks and QuickBooks Live are trademarks of Intuit Inc. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm and is not affiliated with, endorsed by, or sponsored by Intuit Inc. We hold active Intuit certifications and use QuickBooks software; &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification we hold, not an affiliation.",
  ],
  // "The honest difference." — one-paragraph plain read (prose). CURRENCY-UPDATED
  // from old TL;DR: reframed QB Live availability to current state.
  definition: [
    "<strong>QuickBooks Live</strong> is Intuit&rsquo;s first-party bookkeeping service, attached to a <a href=\"/quickbooks/online/\">QuickBooks Online</a> subscription. Historically it spanned do-it-with-me <em>Expert Assisted</em> coaching, one-time <em>Expert Cleanup</em>, and dedicated <em>Full-Service</em> monthly bookkeeping &mdash; categorization, reconciliation, and reporting by QuickBooks-certified bookkeepers. In 2024 Intuit restructured the offering: it stopped selling QuickBooks Live Bookkeeping to new QuickBooks Online subscribers and steered its live help toward <em>Expert Assisted</em>. Either way it stays at core bookkeeping inside the product &mdash; <strong>no payroll processing, no sales tax filing, no AP/AR management, no tax prep</strong> &mdash; and it runs on <strong>QuickBooks Online only</strong>.",
    "<strong>TechBrot</strong> is an <strong>independent</strong> <a href=\"/quickbooks/proadvisor-team/\">Certified QuickBooks ProAdvisor</a> firm delivering a broader operational scope &mdash; <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">bookkeeping</a> plus direct <a href=\"/accounting/payroll-management/\">payroll</a> (including multi-state and local tax), <a href=\"/accounting/sales-tax-compliance/\">multi-state sales tax</a>, and <a href=\"/quickbooks/\">QuickBooks setup, cleanup, and migration</a> across <strong>Online, Desktop, and Enterprise</strong> &mdash; through a named ProAdvisor, with the option of a <a href=\"/find-an-accountant/\">vetted local operator</a>. Both use QuickBooks-certified people, so certification isn&rsquo;t the difference; independence, scope breadth, platform flexibility, and named continuity are. The honest verdict: if you&rsquo;re on QuickBooks Online and your need is core bookkeeping, an in-product option can be simple and convenient; if you need broader operational accounting, or you aren&rsquo;t on QBO, TechBrot fits better. Independent firm &mdash; not affiliated with Intuit Inc.",
  ],
  // "TechBrot vs QuickBooks Live, in five questions." — ai-summary. Short Qs
  // deliberately NOT identical to any FAQ question. CURRENCY-UPDATED.
  aiSummary: [
    { q: "What&rsquo;s the difference?", a: "<strong>QuickBooks Live</strong> = Intuit&rsquo;s first-party bookkeeping service, inside QuickBooks Online, focused on core bookkeeping. <strong>TechBrot</strong> = an independent Certified ProAdvisor firm with broader scope (bookkeeping + payroll + sales tax + setup/cleanup/migration) across Online, Desktop, and Enterprise, via a named ProAdvisor. The difference is independence, scope, platform flexibility, and continuity &mdash; not certification." },
    { q: "Is QuickBooks Live still available?", a: "It has changed. QuickBooks Live is Intuit&rsquo;s own service, and in 2024 Intuit stopped offering QuickBooks Live Bookkeeping to new QuickBooks Online subscribers and shifted toward <em>Expert Assisted</em> live help. Availability and tiers are set by Intuit and can change &mdash; check Intuit directly. TechBrot, as an independent firm, is unaffected by Intuit&rsquo;s product changes." },
    { q: "Does QuickBooks Live handle payroll and sales tax?", a: "<strong>No.</strong> QuickBooks Live is core bookkeeping only &mdash; categorization, reconciliation, reporting. No payroll, no sales tax filing, no AP/AR, no tax prep. TechBrot manages payroll directly (multi-state and local tax) and provides multi-state sales tax compliance." },
    { q: "Online only, or Desktop too?", a: "QuickBooks Live <strong>requires QuickBooks Online and works in QBO only</strong>. TechBrot works across <strong>Online, Desktop, and Enterprise</strong> as a Certified ProAdvisor &mdash; relevant if you&rsquo;re on Desktop or Enterprise, or planning a migration." },
    { q: "Which should I choose?", a: "An in-product option fits if you&rsquo;re on QBO, need core bookkeeping, and want to buy inside the product. <strong>TechBrot</strong> fits if you need payroll, sales tax, setup, cleanup, or migration, want an independent firm, value a named ProAdvisor, or run on Desktop or Enterprise." },
  ],
  // "Side by side, across what matters." — vs-scroll + vs-table (T3 the comparison
  // component; NEVER proof-strip cards). Both-sides honest; CURRENCY-UPDATED rows.
  vsTable: [
    { dim: "Provider type", us: "Independent Certified ProAdvisor firm", them: "Intuit first-party service (in QuickBooks Online)" },
    { dim: "People", us: "Certified ProAdvisors, named", them: "QuickBooks-certified bookkeepers" },
    { dim: "Core bookkeeping", us: "yes", them: "yes" },
    { dim: "Do-it-with-me coaching", us: "Guidance included in engagements", them: "Yes &mdash; Expert Assisted direction" },
    { dim: "Payroll", us: "Managed directly, incl. multi-state &amp; local tax", them: "no" },
    { dim: "Sales tax compliance", us: "Multi-state nexus &amp; filings", them: "no" },
    { dim: "AP / AR management", us: "Available within scope", them: "no" },
    { dim: "Setup / cleanup / migration", us: "Core service", them: "Cleanup historically offered; setup/migration limited" },
    { dim: "Platform support", us: "Online, Desktop &amp; Enterprise", them: "QuickBooks Online only" },
    { dim: "Continuity", us: "Named ProAdvisor owns the account", them: "Dedicated bookkeeper; may change over time" },
    { dim: "Local presence option", us: "Optional vetted local operator", them: "Remote, centralized" },
    { dim: "Tax filing", us: "Coordinates with your CPA/EA (does not file)", them: "Not included (need separate CPA/tax service)" },
    { dim: "Buying convenience", us: "Discovery call + written scope", them: "Bought inside QuickBooks Online" },
    { dim: "Pricing model", us: "Fixed-fee, written scope before work", them: "Set by Intuit; QBO subscription separate" },
    { dim: "Availability", us: "Open to new clients; independent of Intuit&rsquo;s product changes", them: "Restructured in 2024; not sold to new QBO subscribers" },
    { dim: "Independence", us: "Independent; not affiliated with Intuit Inc.", them: "Operated by Intuit Inc." },
  ],
  // "When each option actually fits." — verdict, 3 buyer-cards. H3s VERBATIM.
  verdict: [
    { eyebrow: "Choose TechBrot if", heading: "You need more than core bookkeeping.",
      bullets: [
        "You need <strong>payroll</strong> and multi-state / local tax handled",
        "You need <strong>sales tax compliance</strong> (nexus, filings)",
        "You need <strong>QuickBooks setup, cleanup, or migration</strong>",
        "You run on <strong>QuickBooks Desktop or Enterprise</strong>",
        "You want an <strong>independent firm</strong>, not a vendor&rsquo;s own service",
        "You value a <strong>named ProAdvisor</strong> plus an optional local operator",
      ],
      note: "" },
    { eyebrow: "Choose QuickBooks Live if", heading: "You want simple core bookkeeping inside QBO.",
      bullets: [
        "You&rsquo;re already on <strong>QuickBooks Online</strong> with access to it",
        "Your need is <strong>core categorization and reconciliation</strong>",
        "You want to <strong>buy bookkeeping inside the product</strong>",
        "You like a low-touch <strong>do-it-with-me Expert Assisted</strong> option",
        "You <strong>don&rsquo;t need</strong> payroll, sales tax, or AP/AR managed",
      ],
      note: "Worth saying plainly: if your needs really are just core QBO bookkeeping and an in-product option is available to you, Intuit&rsquo;s first-party service is convenient and well-integrated &mdash; and we&rsquo;d tell you so on a call." },
    { eyebrow: "Neither fits if", heading: "You need full-firm tax or audit services.",
      bullets: [
        "You need a <strong>CPA firm that files taxes</strong> as the primary engagement",
        "You need <strong>audit-ready GAAP financials</strong> for a formal audit",
        "You&rsquo;re a <strong>venture-backed startup</strong> needing fundraising accounting",
        "You need <strong>IRS representation</strong> or tax controversy work",
      ],
      note: "For these, you&rsquo;re looking at a CPA firm or specialized counsel. We&rsquo;ll happily point you toward the right fit." },
  ],
  // "What people ask when comparing." — FAQ. 6 contract Q/A, QUESTIONS verbatim,
  // ANSWERS verbatim from the contract (no reword needed — already current).
  faq: [
    { q: "What&rsquo;s the difference between TechBrot and QuickBooks Live?", a: "QuickBooks Live is Intuit&rsquo;s own first-party bookkeeping service, added on to a QuickBooks Online subscription, offering tiers from do-it-with-me Expert Assisted coaching to dedicated Full-Service monthly bookkeeping. TechBrot is an independent Certified QuickBooks ProAdvisor firm that delivers a broader operational scope &mdash; bookkeeping plus payroll, multi-state and local sales tax, QuickBooks setup, cleanup, and migration across Online, Desktop, and Enterprise &mdash; through a named ProAdvisor, with the option of a vetted local operator. The core difference is independence and scope breadth versus a first-party, QuickBooks-Online-only service focused on core bookkeeping." },
    { q: "Does QuickBooks Live handle payroll and sales tax?", a: "No. QuickBooks Live Bookkeeping focuses on core bookkeeping &mdash; categorization, reconciliation, and reporting. It does not include payroll processing, sales tax filing, accounts payable or receivable management, or tax preparation; those require separate services. TechBrot manages payroll directly, including multi-state and local jurisdiction tax, and provides multi-state sales tax compliance as a service &mdash; a meaningful difference for established businesses with employees across states." },
    { q: "Does QuickBooks Live work with QuickBooks Desktop or only Online?", a: "QuickBooks Live requires an active QuickBooks Online subscription and works within QuickBooks Online only. TechBrot works across QuickBooks Online, Desktop, and Enterprise as a Certified ProAdvisor, which matters for businesses on Desktop or Enterprise, or those planning a migration between platforms." },
    { q: "Are QuickBooks Live bookkeepers certified?", a: "Yes &mdash; QuickBooks Live connects businesses with QuickBooks-certified bookkeepers, so certification is not the distinguishing factor. The differences are independence (TechBrot is not tied to selling one company&rsquo;s products), scope (TechBrot covers payroll, sales tax, setup, cleanup, and migration beyond core bookkeeping), platform flexibility (Online, Desktop, and Enterprise), named-operator continuity, and the option of a vetted local operator." },
    { q: "Which should I choose?", a: "QuickBooks Live can be a strong, convenient choice if you&rsquo;re already on QuickBooks Online, your needs are core bookkeeping, and you value buying it directly inside the product. TechBrot is the better fit if you need broader operational scope &mdash; payroll, multi-state and local sales tax, QuickBooks setup, cleanup, or migration &mdash; want an independent firm not tied to one vendor&rsquo;s product line, value a named ProAdvisor who owns your account, or run on QuickBooks Desktop or Enterprise. A free discovery call clarifies which fits." },
    { q: "Is TechBrot affiliated with Intuit Inc. or QuickBooks Live?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications and use QuickBooks software, but TechBrot is not owned, employed, or operated by Intuit Inc., and is not affiliated with QuickBooks Live. QuickBooks and QuickBooks Live are trademarks of Intuit Inc." },
  ],
  // "More honest comparisons." — related, 4 H3 VERBATIM (TechBrot vs Pilot,
  // TechBrot vs Bench, QuickBooks Services, Service Catalog).
  related: [
    { title: "TechBrot vs Pilot", href: "/vs/techbrot-vs-pilot/", body: "How TechBrot compares to Pilot for startup and SMB accounting." },
    { title: "TechBrot vs Bench", href: "/vs/techbrot-vs-bench/", body: "How TechBrot compares to Bench for small-business bookkeeping." },
    { title: "QuickBooks Services", href: "/quickbooks/", body: "Setup, cleanup, migration, and support across Online, Desktop, and Enterprise." },
    { title: "Service Catalog", href: "/accounting/services/", body: "Everything TechBrot delivers &mdash; the full operational scope in one place." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/techbrot-vs-quickbooks-live/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-qblive-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Compare","item":"https://techbrot.com/vs/"},
          {"@type":"ListItem","position":3,"name":"TechBrot vs QuickBooks Live","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

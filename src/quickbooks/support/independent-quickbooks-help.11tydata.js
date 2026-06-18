/* /quickbooks/support/independent-quickbooks-help/ — t-bofu SUPPORT-SILO honest-triage page:
 * the "paid independent lane." It converts the searcher whose REAL problem is their FILE/BOOKS
 * (not their Intuit account) into an independent fixed-fee engagement. Cloned from the proven
 * /quickbooks/speak-to-a-quickbooks-expert/ template (structure, COBALT vocabulary, schema
 * shape). Front-matter JSON lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the @graph (WebPage + BreadcrumbList + FAQPage +
 * speakable). provider/publisher/about = #organization. FAQPage mainEntity is generated from
 * the same `faq` array the visible faq__list renders — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE (the whole point of this page):
 *  1. ATF DISCLOSURE — inBrief (rendered by the layout under the dark hero) AND the canonical
 *     .disclosure banner (first content section) both state plainly: TechBrot is an INDEPENDENT
 *     accounting firm of Certified QuickBooks ProAdvisors, NOT Intuit; for account, billing, or
 *     subscription issues, contact Intuit directly (https://quickbooks.intuit.com/learn-support/,
 *     rel="noopener nofollow"). "Certified QuickBooks ProAdvisor" is an Intuit CERTIFICATION the
 *     firm holds, not affiliation/endorsement; the team cannot access the Intuit account.
 *  2. INTENT SPLIT redirects account/billing/subscription/login/software-bug seekers to Intuit
 *     and positions THIS firm as the accounting work INSIDE the client's own file (file/books).
 *  3. NEVER "official" near our offer; nominative fair use; trademark line; no Intuit logo.
 *  4. FIRST FAQ = "Is this Intuit's official QuickBooks support?" → No.
 *  5. Phone CTA label = "Talk to a Certified ProAdvisor (independent firm)" (tel:true).
 *
 * HONESTY (R5/R9): no fabricated Intuit phone/hours/24-7; no invented reviews, stats, clients,
 * outcomes; no AggregateRating. Canonical pricing ONLY (monthly bookkeeping $400–$2,500+/mo;
 * cleanup $1,500–$15,000+; focused error/diagnostic scopes $1,200–$3,000 — mirrors existing
 * pages). Authorship firm-level; founder-name-zero in visible content; David Westgate survives
 * only as reviewedBy @id in schema. Independent firm — no Intuit account/billing/product
 * support; not a CPA/EA; coordinates with the client's CPA/EA, who files. COBALT vocabulary
 * only: disclosure, checks-list, buyer-card, grid-2/grid-3, ai-summary--ruled, process-diagram/
 * process-step, trust-row, byline-block, meta-reviewed, faq__list, section--alt. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/&hellip;/g,"…").replace(/\s+/g," ").trim();}

module.exports = {
  // WHAT IT IS — TL;DR prose. Disclosure-first; defines independent help as the accounting
  // inside the client's OWN file, and routes Intuit account/billing/software intent away.
  tldr: "Independent QuickBooks help is exactly what it sounds like: help from an <strong>independent firm</strong> &mdash; here, a firm of Certified QuickBooks ProAdvisors &mdash; rather than from Intuit. It is the right call when the thing that&rsquo;s broken is the <strong>accounting inside your own company file</strong>: a reconciliation that never balances, books that are months behind, a chart of accounts and setup that were wrong from the start, balances that came across mangled in a migration, payroll errors baked into the file, or reports that simply don&rsquo;t match reality. Intuit supports the <em>software</em> and your <em>account</em>; none of that touches the numbers and history inside your file &mdash; that&rsquo;s accounting work, and it&rsquo;s what we do. It starts with a <strong>free file review</strong>, becomes a <strong>written fixed-fee scope within 3 business days</strong>, and is delivered by a <strong>named Certified ProAdvisor</strong>. If your issue is really an <strong>Intuit account, billing, subscription, login, or software problem</strong>, that&rsquo;s Intuit&rsquo;s to fix and only Intuit can access it &mdash; <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">go to Intuit support</a> rather than start an engagement that can&rsquo;t help. And if you need IRS representation or active tax filing &mdash; which requires a CPA or EA &mdash; we&rsquo;ll say so and refer you.",

  // AI SUMMARY — five-question block. Q1 = official-support boundary; Q5 = affiliation.
  aiSummary: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an <strong>independent accounting firm of Certified QuickBooks ProAdvisors</strong> &mdash; not Intuit, not QuickBooks Customer Support, not QuickBooks Live. For Intuit account, billing, subscription, login, or software issues, contact <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">Intuit directly</a>; this firm cannot access your Intuit account." },
    { q: "When is independent help the right call?", a: "When the problem is the <strong>accounting inside your own file</strong> &mdash; books that won&rsquo;t reconcile, are months behind, were set up wrong, were damaged in a migration, carry payroll errors, or produce reports that are wrong. Intuit won&rsquo;t (and can&rsquo;t) fix the numbers and history inside your file; an independent ProAdvisor firm does." },
    { q: "How does the engagement start?", a: "With a <strong>free file review</strong>. A Certified ProAdvisor looks at your actual QuickBooks file, then sends a <strong>written fixed-fee scope within 3 business days</strong> &mdash; no obligation. If we engage, a <strong>named Certified ProAdvisor</strong> owns the work end to end." },
    { q: "What does it cost?", a: "Always a <strong>fixed fee agreed in writing first</strong> &mdash; no hourly meter. Typical bands: monthly bookkeeping <strong>$400&ndash;$2,500+/mo</strong>; cleanup <strong>$1,500&ndash;$15,000+</strong>; focused error or diagnostic scopes <strong>$1,200&ndash;$3,000</strong>. The free file review sets your exact number." },
    { q: "Are you affiliated with Intuit?", a: "No. <strong>Independent Certified QuickBooks ProAdvisor firm.</strong> We hold active Intuit certifications, but TechBrot is not owned, operated, or employed by Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],

  // WHAT WE FIX — grid-3 buyer-cards. The accounting INSIDE the file (not the software/account).
  // Routes to built spokes where one exists; otherwise descriptive only.
  fixes: [
    { eyebrow: "Errors inside the file", title: "Numbers that are simply wrong.", body: "Miscategorized transactions, broken opening balances, an account register that doesn&rsquo;t foot, undeposited funds piling up. Intuit can confirm the software works; only an accountant can find and fix where the accounting went wrong. We diagnose it in your own file.", href: "/quickbooks/help/error-codes/", cta: "QuickBooks error codes" },
    { eyebrow: "Reconciliation broken", title: "It won&rsquo;t balance.", body: "Bank and credit-card reconciliations that never tie out, prior periods re-opened, duplicate or missing transactions, a beginning balance that drifted. We rebuild the reconciliation properly so the file matches the bank.", href: "/quickbooks/cleanup/?intent=cleanup", cta: "QuickBooks cleanup" },
    { eyebrow: "Messy or behind", title: "Months (or years) behind.", body: "Books that were never kept up, half-categorized, or abandoned by a bookkeeper who left. We catch the file up and reconstruct what&rsquo;s missing on a fixed-fee cleanup scope &mdash; then hand back books you can actually trust.", href: "/quickbooks/cleanup/?intent=cleanup", cta: "QuickBooks cleanup" },
    { eyebrow: "Bad setup", title: "Wrong from day one.", body: "A chart of accounts that doesn&rsquo;t fit the business, sales tax configured wrong, items and integrations set up so every report is off. We re-architect the setup inside the file rather than papering over it.", href: "/quickbooks/setup/?intent=quickbooks-setup", cta: "QuickBooks setup" },
    { eyebrow: "Migration damage", title: "Balances broke in the move.", body: "Data that came across mangled from Desktop to Online, or from another platform &mdash; balances off, history truncated, lists duplicated. We find what the conversion broke and repair the file.", href: "/quickbooks/migration/balances-wrong-after-conversion/", cta: "Fix conversion balances" },
    { eyebrow: "Payroll in the file", title: "Payroll posting wrong.", body: "Payroll liabilities that don&rsquo;t clear, wages mapped to the wrong accounts, multi-state or withholding errors recorded in the file. We correct how payroll lands in your books &mdash; the accounting, not the Intuit subscription.", href: "/accounting/payroll-management/", cta: "Payroll management" },
  ],

  // HOW IT WORKS — process-diagram (three phases): free review → written scope → named ProAdvisor.
  process: [
    { when: "Step 1", name: "Free file review", body: "Send us your QuickBooks file (or grant access) and a short note on what&rsquo;s wrong. A Certified ProAdvisor reviews the actual accounting inside it &mdash; no charge, no obligation." },
    { when: "Step 2", name: "Written fixed-fee scope", body: "Within 3 business days you receive a written scope: what&rsquo;s broken, what we&rsquo;d do, the fixed fee, and the timeline. If it&rsquo;s really an Intuit account or software issue &mdash; or needs a CPA/EA &mdash; we say so and point you there instead." },
    { when: "Step 3", name: "A named Certified ProAdvisor", body: "If you engage, one named Certified ProAdvisor owns the work end to end and does the fix in your file. The person who scoped it is the person who delivers it." },
  ],

  // FIXED-FEE FRAMING — canonical pricing only. Mirrors ranges used on existing pages.
  pricing: [
    { name: "Monthly bookkeeping", range: "$400&ndash;$2,500+/mo", body: "Ongoing fixed-fee management once the file is right &mdash; a reliable monthly close, CPA-ready statements, and a named ProAdvisor for continuity. The range tracks volume and complexity." },
    { name: "Cleanup", range: "$1,500&ndash;$15,000+", body: "Project-based repair of a file that&rsquo;s behind, unreconciled, or structurally wrong. Fee tracks how many months and how much damage; scoped in writing after the free review." },
    { name: "Focused error or diagnostic scopes", range: "typically $1,200&ndash;$3,000", body: "A bounded fix for a specific problem &mdash; one broken reconciliation, a setup correction, or migration-balance repair &mdash; rather than a full cleanup." },
  ],

  // FAQ — min 6. Q1 = official-support question (Sheet-7); includes "How is this different from
  // calling Intuit?" and "Are you affiliated with Intuit?" (No). visible faq__list = FAQPage schema.
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. TechBrot is an independent accounting firm of Certified QuickBooks ProAdvisors &mdash; not Intuit, not QuickBooks Customer Support, and not QuickBooks Live. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification this firm holds from Intuit; it does not mean affiliation, endorsement, or sponsorship, and this team cannot access your Intuit account. For account, billing, subscription, login, or software issues, contact Intuit directly at quickbooks.intuit.com/learn-support/." },
    { q: "How is this different from calling Intuit?", a: "Intuit supports the QuickBooks software and your Intuit account &mdash; logins, billing, subscriptions, product bugs. This firm fixes the accounting inside your own file: reconciliation, cleanup, setup, migration damage, payroll posting, and reports that are wrong. Put simply, Intuit fixes the software; an independent ProAdvisor firm fixes the books. If your problem is the account or the software, Intuit is the right and only place; if it&rsquo;s the numbers in your file, that&rsquo;s us." },
    { q: "Are you affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications across QuickBooks Online, Desktop, Enterprise, and Payroll, but TechBrot is not owned, operated, or employed by Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "How do I know whether my problem is the file or my Intuit account?", a: "A quick test: if you can&rsquo;t log in, were billed wrong, want to change or cancel a subscription, or the software is crashing or throwing an outage, that&rsquo;s your Intuit account or the software &mdash; contact Intuit. If you <em>can</em> get into QuickBooks but the numbers are wrong &mdash; it won&rsquo;t reconcile, the books are behind, reports don&rsquo;t match, balances broke in a migration &mdash; that&rsquo;s the accounting inside your file, and that&rsquo;s what we fix. If you&rsquo;re not sure, the free file review will tell you which it is, at no cost." },
    { q: "What does independent QuickBooks help cost?", a: "Always a fixed fee agreed in writing before any work begins &mdash; never an open-ended hourly meter. Typical bands: monthly bookkeeping $400&ndash;$2,500+/mo; cleanup $1,500&ndash;$15,000+; focused error or diagnostic scopes typically $1,200&ndash;$3,000. The free file review is what sets your exact number, and the written scope is yours to accept or not &mdash; no obligation. Fees cover the accounting work in your file; your Intuit subscription is separate and paid to Intuit." },
    { q: "What do you need from me to start?", a: "Two things: access to your QuickBooks file (a backup, or accountant access &mdash; we&rsquo;ll guide you), and a short description of what&rsquo;s wrong. You don&rsquo;t need to prepare documents, have a CPA on the call, or commit to anything before you see the written scope. The file review is free and no-obligation." },
    { q: "Do you also handle taxes or represent me to the IRS?", a: "No. TechBrot is a bookkeeping and QuickBooks ProAdvisor firm, not a CPA or EA firm; we don&rsquo;t file tax returns or represent clients before the IRS. What we do is make your books accurate and CPA-ready, then coordinate with your CPA or EA, who files. If you need tax filing or IRS representation, we&rsquo;ll tell you on the review and point you toward the right professional." },
  ],

  // EXPERT REVIEW — firm-level prose + trust row (founder-name-zero). Restates the boundary.
  reviewProse: "This page is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, a Delaware-incorporated independent ProAdvisor firm. Certification claims and ProAdvisor credentials cited here are current and publicly verifiable on Intuit&rsquo;s ProAdvisor directory; pricing reflects canonical fixed-fee ranges and is updated when those ranges change. TechBrot is an independent firm &mdash; not affiliated with, endorsed by, or sponsored by <a href=\"https://www.intuit.com/\" rel=\"noopener nofollow\">Intuit Inc.</a> It provides no Intuit account, billing, or QuickBooks product support, holds no Intuit phone line or hours, and does not file tax returns or represent clients before the IRS. What it does is the accounting work inside your own QuickBooks file.",

  reviewCreds: [
    { label: "Independent line", detail: "+1 (877) 751-5575 &middot; Toll-free &middot; a Certified ProAdvisor at an independent firm answers" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online, Desktop, Enterprise, Payroll &middot; verifiable on Intuit&rsquo;s directory" },
    { label: "Out of scope", detail: "No Intuit account, billing, subscription, or product support &middot; no tax filing or IRS representation &middot; no fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — grid-2 buyer-cards. Flagship contact-support page ships the same proof; file-review,
  // cleanup, and error-codes spokes are built; Intuit support is the external redirect.
  related: [
    { title: "How to Contact QuickBooks Support", body: "The full map of who to contact for what &mdash; Intuit for the account and software, an independent firm for the books. The flagship guide for the support silo.", href: "/quickbooks/support/how-to-contact-quickbooks-support/", cta: "Contact-support guide" },
    { title: "Free QuickBooks File Review", body: "Send your file, get an honest read on what&rsquo;s wrong and a written fixed-fee scope &mdash; no charge, no obligation. The first step for any independent engagement.", href: "/quickbooks/file-review/?intent=file-review", cta: "Get the file review" },
    { title: "QuickBooks Cleanup", body: "Project-based repair for books that are behind, unreconciled, or structurally wrong &mdash; fixed fee, named ProAdvisor.", href: "/quickbooks/cleanup/?intent=cleanup", cta: "QuickBooks cleanup" },
    { title: "Intuit Support (the account &amp; the software)", body: "For Intuit account, billing, subscription, login, or product-bug issues, go straight to Intuit &mdash; this firm cannot access your Intuit account.", href: "https://quickbooks.intuit.com/learn-support/", rel: "noopener nofollow", cta: "Go to Intuit support" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/support/independent-quickbooks-help/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Independent QuickBooks Help — Certified ProAdvisor Firm","description":"Independent QuickBooks help from a firm of Certified QuickBooks ProAdvisors — fixing the accounting inside the client's own QuickBooks file: reconciliation, cleanup, setup, migration damage, payroll posting, and wrong reports. Not Intuit, not QuickBooks Customer Support, not QuickBooks Live; provides no Intuit account, billing, or product support. For Intuit account, billing, or subscription issues, contact Intuit directly.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/independent-quickbooks-help-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-support-independent-tldr-body","#qb-support-independent-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-18","mainEntity":{"@id":"https://techbrot.com/#organization"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Support","item":"https://techbrot.com/quickbooks/support/"},
          {"@type":"ListItem","position":4,"name":"Independent QuickBooks Help","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

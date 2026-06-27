/* /quickbooks/support/how-to-contact-quickbooks-support/ — t-bofu SUPPORT-SILO FLAGSHIP. The
 * single most reputation-sensitive page on the site: it captures the "QuickBooks customer
 * service / support number / help" query family by being the most HONEST answer, NEVER by
 * impersonating Intuit. Cloned from speak-to-a-quickbooks-expert (.njk + .11tydata.js) — the
 * proven honest-triage template — with the same COBALT VOCABULARY ONLY (disclosure,
 * checks-list, buyer-card, grid-2/grid-3, ai-summary--ruled, call-breakout, trust-row,
 * byline-block, meta-reviewed, faq__list, section/section--alt). Front-matter JSON lives in
 * the .njk; this file supplies the content arrays + an eleventyComputed pageGraph emitting the
 * @graph (WebPage + BreadcrumbList + FAQPage + speakable). FAQPage mainEntity is generated
 * from the same `faq` array the visible faq__list renders — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE — ALL SIX RULES (the whole point of this page):
 *  1. ATF DISCLOSURE BANNER (.disclosure.disclosure--warn, first content section) + the
 *     layout inBrief under the dark hero both state plainly: TechBrot is an INDEPENDENT
 *     accounting firm of Certified QuickBooks ProAdvisors — NOT Intuit; for account, billing,
 *     or subscription issues, contact Intuit directly (https://quickbooks.intuit.com/learn-
 *     support/, rel="noopener nofollow").
 *  2. FIRST FAQ = "Is this Intuit's official QuickBooks support?" answered "No." plainly.
 *  3. NEVER "official" near TechBrot's offer; nominative fair use of QuickBooks/Intuit only;
 *     trademark acknowledgment present; no Intuit logo.
 *  4. Phone CTA label is ALWAYS "Talk to a Certified ProAdvisor (independent firm)" — never
 *     "QuickBooks support line"/"call QuickBooks". tel:true action.
 *  5. Schema provider/publisher = #organization (TechBrot) only; no node implying Intuit
 *     operates this page.
 *  6. Intake/triage qualifies: account/billing/login/subscription/software-bug → Intuit
 *     (link); file/books/errors-in-file/setup/payroll-in-file → TechBrot (paid, fixed-fee).
 *
 * HONESTY HARD LIMIT (R4/R5/R9): NO invented or stated Intuit phone number, exact hours, wait
 * times, or "24/7" claims anywhere — channels are described GENERICALLY and current specifics
 * are deferred to Intuit's official support link. No fabricated reviews/stats/clients; no
 * AggregateRating. Founder-name-zero in visible content; firm-level byline only. Canonical
 * pricing only (free file review / discovery call / written fixed-fee scope within 3 business
 * days). Independent firm — provides NO Intuit account/billing/product support; coordinates
 * with the client's CPA/EA, who files. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — TL;DR. The honest meta-answer in one paragraph: how to reach Intuit
  // (generically, link to official support), then what an independent ProAdvisor firm handles.
  tldr: "There are two different things people mean by &ldquo;QuickBooks support,&rdquo; and the right destination depends on which one you need. For anything about the <strong>Intuit account, billing, a subscription or renewal, login, password or two-factor, a refund, or a QuickBooks software bug or outage</strong>, the answer is <strong>Intuit</strong> &mdash; only Intuit can touch your account. Intuit&rsquo;s real channels live inside the product (Help and the in-app search/virtual assistant), on the <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">official QuickBooks support site and Community forums</a>, and through a contact/callback request flow; Desktop, Payroll, and Payments each have their own support paths. Hours, phone numbers, and wait times change, so we don&rsquo;t quote them &mdash; check Intuit&rsquo;s support site for the current specifics. For the <strong>other</strong> kind of help &mdash; a broken company file, errors inside your file, books that need a cleanup, a setup or migration, or a payroll problem inside your file &mdash; that&rsquo;s accounting work, and an independent firm of Certified QuickBooks ProAdvisors (TechBrot) does it on a <strong>fixed fee</strong>. The <a href=\"/quickbooks/file-review/?intent=file-review\">file review is free</a>; the discovery call is free; you get a written fixed-fee scope within 3 business days. TechBrot is not Intuit and cannot access your Intuit account.",

  // AI SUMMARY — five-question block for AI engines / quick answers. Honest routing throughout.
  aiSummary: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. This page is published by <strong>TechBrot, an independent accounting firm of Certified QuickBooks ProAdvisors &mdash; we are not Intuit</strong>. For Intuit account, billing, subscription, login, or software-bug help, contact <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">Intuit directly</a>. We can&rsquo;t access your Intuit account." },
    { q: "How do I actually reach Intuit&rsquo;s QuickBooks support?", a: "Through Intuit&rsquo;s own channels: the in-product <strong>Help</strong> menu and search/virtual assistant, the <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">official QuickBooks support site and Community forums</a>, and Intuit&rsquo;s contact/callback request flow. QuickBooks Desktop, Payroll, and Payments each have their own support paths. We don&rsquo;t publish a phone number, hours, or wait times here &mdash; those change, and Intuit&rsquo;s support site is the only reliable source for current details." },
    { q: "What does an independent ProAdvisor handle that Intuit doesn&rsquo;t?", a: "The accounting work <strong>inside your file</strong>: a broken or corrupted company file, errors and miscategorizations in your books, a cleanup, a QuickBooks setup or migration, and payroll problems inside the file. Intuit supports the <em>software and account</em>; an independent firm fixes the <em>books</em>." },
    { q: "What does it cost to talk to TechBrot?", a: "<strong>Nothing to start.</strong> The file review is free, the discovery call is free and no-obligation, and you receive a written <strong>fixed-fee</strong> scope within 3 business days before any paid work begins." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. <strong>Independent Certified QuickBooks ProAdvisor firm.</strong> We hold active Intuit certifications, but we are not owned, operated, endorsed, or sponsored by Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],

  // INTUIT CHANNEL MAP — grid-3 buyer-cards, one per product. Channels described GENERICALLY;
  // NO phone numbers, NO hours, NO wait times, NO "24/7". Every card defers specifics to Intuit.
  channels: [
    { product: "QuickBooks Online", what: "In-product help first: open the <strong>Help (?)</strong> menu, use search or the virtual assistant, and request a callback / contact through Intuit&rsquo;s flow. The <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">QuickBooks support site and Community forums</a> cover most how-to questions.", can: "Account and subscription changes, billing and renewals, login/2FA resets, product how-to, and software bugs or outages on Intuit&rsquo;s side.", cant: "Cleaning up or fixing the data and accounting <em>inside</em> your company file &mdash; that&rsquo;s bookkeeping work, not a product fault.", escalate: "If the in-app assistant can&rsquo;t resolve it, escalate to a human through Intuit&rsquo;s contact/callback flow; for current options, hours, and any phone path, check Intuit&rsquo;s support site." },
    { product: "QuickBooks Desktop / Enterprise", what: "Desktop and Enterprise have their <strong>own support path</strong> separate from Online &mdash; reachable from inside the program&rsquo;s Help menu and via Intuit&rsquo;s Desktop support pages. Tools like the File Doctor are surfaced there.", can: "Installation, licensing and registration, updates and patches, and Intuit-side error codes and program faults.", cant: "Diagnosing why your <em>numbers</em> are wrong, untangling years of miscategorized transactions, or rebuilding a damaged data file&rsquo;s accounting &mdash; that&rsquo;s a ProAdvisor cleanup.", escalate: "Confirm your version is on a supported release first; then use Intuit&rsquo;s Desktop support path. Specifics change with each annual release &mdash; rely on Intuit&rsquo;s current pages." },
    { product: "QuickBooks Payroll", what: "Payroll has a <strong>dedicated support path</strong> inside the payroll product and on Intuit&rsquo;s payroll support pages, because tax filings and direct deposit are involved.", can: "Payroll subscription and setup of the payroll <em>service</em>, direct-deposit and e-file/e-pay enrollment, and Intuit-side payroll product issues.", cant: "Fixing payroll <em>inside your file</em> &mdash; misbooked wages, wrong state/county tax setup that flows into your books, or reconciling payroll liabilities. That&rsquo;s accounting work a ProAdvisor handles.", escalate: "For account/enrollment problems, use Intuit&rsquo;s payroll support; for the books impact, route to an independent ProAdvisor. We don&rsquo;t quote Intuit&rsquo;s payroll support hours &mdash; check their site." },
    { product: "QuickBooks Payments", what: "Payments (merchant services) has its <strong>own support channel</strong> on Intuit&rsquo;s side, since it&rsquo;s a financial-services product with its own account.", can: "Merchant account setup, deposits and holds, dispute/chargeback handling, and processing or hardware issues &mdash; all Intuit / its banking partners.", cant: "Recording, categorizing, or reconciling those payments correctly in your books &mdash; that&rsquo;s the bookkeeping layer.", escalate: "Account and money-movement questions go to Intuit Payments support; the bookkeeping side comes to a ProAdvisor. Current contact options live on Intuit&rsquo;s site." },
  ],

  // TRIAGE GRID — the load-bearing honest split. Two columns: Intuit vs independent ProAdvisor.
  triageIntuit: [
    "Your <strong>Intuit account</strong> &mdash; access, profile, company info on the account",
    "<strong>Billing, subscription, renewals, refunds</strong>",
    "<strong>Login, password, or two-factor (2FA)</strong> problems",
    "<strong>Software bugs, outages, or Intuit-side error codes</strong>",
    "Product <strong>how-to</strong> and feature questions",
    "Anything that requires <strong>access to your Intuit account</strong> &mdash; only Intuit can do this",
  ],
  triageProAdvisor: [
    "A <strong>broken or corrupted company file</strong>",
    "<strong>Errors inside your file</strong> &mdash; wrong balances, miscategorized transactions",
    "A <strong>books cleanup</strong> and overdue <strong>reconciliation</strong>",
    "A <strong>QuickBooks setup</strong> done right &mdash; chart of accounts, integrations",
    "A <strong>migration</strong> (Desktop&rarr;Online, other software&rarr;QB) without data loss",
    "<strong>Payroll inside the file</strong> &mdash; misbooked wages, wrong tax setup, liabilities",
    "<strong>CPA-ready books</strong> your accountant can actually use",
  ],

  // INDEPENDENT PATH — grid-3 buyer-cards. The three honest reasons to bring it to a firm.
  independentPath: [
    { signal: "The file, not the software", title: "Your books are the problem.", body: "When the issue is the <em>data</em> &mdash; balances that don&rsquo;t tie out, months unreconciled, transactions in the wrong accounts &mdash; no software support line can fix that. It&rsquo;s accounting. A Certified ProAdvisor works in your own file and corrects it.", honest: "We&rsquo;ll tell you on the free call if it&rsquo;s actually an Intuit account/billing matter &mdash; in which case we send you to Intuit, not bill you." },
    { signal: "Setup &amp; migration", title: "Start it, or move it, correctly.", body: "New-business setup, a re-setup of a messy file, or a migration off Desktop before Intuit&rsquo;s sunset. We handle chart of accounts, integrations, sales-tax config, and the move itself &mdash; no data loss.", honest: "Fixed-fee, scoped in writing within 3 business days. No surprise hourly creep." },
    { signal: "Payroll in the file", title: "Payroll that&rsquo;s wrong in your books.", body: "Multi-state setup errors, wrong county tax, misbooked wages, payroll liabilities that won&rsquo;t reconcile. We fix how payroll lives inside your QuickBooks file.", honest: "Enrolling or changing the Intuit Payroll <em>service</em> itself is Intuit&rsquo;s job &mdash; we&rsquo;ll point you there for that part." },
  ],

  // FAQ — min 7. FIRST = "Is this Intuit's official QuickBooks support?" answered No (Rule 2).
  // Includes the required password/billing, what-ProAdvisor-helps-with, and affiliation Q/A.
  // visible faq__list = FAQPage schema (same array). NO fabricated Intuit phone/hours/24-7.
  faq: [
    { q: "Is this Intuit&rsquo;s official QuickBooks support?", a: "No. This page is published by TechBrot, an independent accounting firm of Certified QuickBooks ProAdvisors &mdash; we are not Intuit, and this is not Intuit&rsquo;s official QuickBooks support. For Intuit account, billing, subscription, login, or software-bug help, contact Intuit directly at their support site; we cannot access your Intuit account. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Can you reset my Intuit password or fix my billing?", a: "No &mdash; that&rsquo;s Intuit, not us. Login, password, two-factor, billing, refunds, and subscription changes all require access to your Intuit account, which only Intuit has. Use Intuit&rsquo;s official support for those. What we can do is the accounting work inside your QuickBooks file once you&rsquo;re logged in." },
    { q: "What can an independent ProAdvisor actually help with?", a: "The accounting work inside your file: a broken or corrupted company file, errors and miscategorized transactions, a books cleanup and reconciliation, a QuickBooks setup or migration, payroll problems inside the file, and getting your books CPA-ready. Intuit supports the software and the account; an independent firm fixes the books." },
    { q: "How do I reach Intuit&rsquo;s QuickBooks support directly?", a: "Start inside the product &mdash; the Help (?) menu, search, and the virtual assistant &mdash; then use Intuit&rsquo;s official QuickBooks support site and Community forums, or Intuit&rsquo;s contact/callback request flow. QuickBooks Desktop, Payroll, and Payments each have their own support paths. We intentionally don&rsquo;t publish an Intuit phone number, hours, or wait times here, because those change &mdash; Intuit&rsquo;s support site is the only reliable source for current contact details." },
    { q: "What does it cost to talk to TechBrot?", a: "Nothing to start. The file review is free, the discovery call is free and no-obligation, and you receive a written fixed-fee scope within 3 business days before any paid work begins. If it turns out your issue is really an Intuit account or billing matter, we&rsquo;ll say so and point you to Intuit rather than book paid work that can&rsquo;t help." },
    { q: "My QuickBooks won&rsquo;t open or shows an error code &mdash; who fixes that?", a: "If it&rsquo;s a software fault &mdash; the program won&rsquo;t install, won&rsquo;t open, or throws an Intuit-side error code or outage &mdash; that&rsquo;s Intuit&rsquo;s support, and Desktop has its own tools (like the File Doctor) reachable through the Help menu. If the program runs fine but the company <em>file</em> is damaged or the numbers inside it are wrong, that&rsquo;s a ProAdvisor cleanup &mdash; bring it to us." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications, but we are not owned, operated, endorsed, or sponsored by Intuit Inc. &ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification Intuit issues to independent accountants &mdash; it does not mean affiliation. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "Do you handle tax filing or talk to the IRS for me?", a: "No. TechBrot does not file tax returns or represent clients before the IRS &mdash; that requires a CPA or EA. We do the QuickBooks and bookkeeping work that makes your books CPA-ready, and we coordinate with your CPA or EA, who files." },
  ],

  // EXPERT REVIEW — firm-level trust row (founder-name-zero). Restates the Intuit boundary.
  reviewCreds: [
    { label: "Who publishes this", detail: "TechBrot &middot; Independent accounting firm of Certified QuickBooks ProAdvisors &middot; not Intuit" },
    { label: "What we do", detail: "Books inside your QuickBooks file &mdash; broken files, cleanup, setup, migration, payroll-in-file &middot; fixed-fee" },
    { label: "Out of scope", detail: "No Intuit account, billing, subscription, login, or product support &middot; no tax filing or IRS representation" },
    { label: "Independence", detail: "Not affiliated with, endorsed by, or sponsored by Intuit Inc. &middot; QuickBooks/Intuit are trademarks of Intuit Inc." },
  ],

  // RELATED — grid-2 buyer-cards. The Intuit support link is the canonical redirect for
  // account/billing/login/subscription intent (Sheet-7 rule 6).
  related: [
    { title: "Free QuickBooks File Review", body: "Send your file (or grant read-only access) and a Certified ProAdvisor tells you what&rsquo;s actually wrong &mdash; free, no obligation.", href: "/quickbooks/file-review/?intent=file-review", cta: "Get the free file review" },
    { title: "Speak to a QuickBooks Expert", body: "Talk directly to a Certified ProAdvisor about your own books &mdash; an independent firm&rsquo;s advisory line, not Intuit support.", href: "/quickbooks/speak-to-a-quickbooks-expert/", cta: "Speak to a ProAdvisor" },
    { title: "QuickBooks Services Hub", body: "Setup, cleanup, migration, and ongoing expertise on your own file &mdash; every engagement type in one place.", href: "/quickbooks/", cta: "QuickBooks hub" },
    { title: "Intuit&rsquo;s official QuickBooks support", body: "For your Intuit account, billing, subscription, login, refunds, or a software bug &mdash; this is the right and only place. We can&rsquo;t access your account.", href: "https://quickbooks.intuit.com/learn-support/", cta: "Go to Intuit support", rel: "noopener nofollow" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/support/how-to-contact-quickbooks-support/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"How to Contact QuickBooks Support (Every Channel)","description":"An honest, independent guide to reaching QuickBooks support: Intuit's real channels by product (Online, Desktop/Enterprise, Payroll, Payments) for account, billing, login, and software-bug issues — plus when an independent firm of Certified QuickBooks ProAdvisors (TechBrot) handles file errors, cleanup, setup, migration, and payroll inside the file on a fixed fee. Published by TechBrot, an independent firm; not Intuit, not Intuit's official QuickBooks support; provides no Intuit account, billing, or product support.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/quickbooks-support-how-to-contact-quickbooks-support.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-support-tldr-body","#qb-support-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-18","mainEntity":{"@id":url+"#faq"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Support","item":"https://techbrot.com/quickbooks/support/"},
          {"@type":"ListItem","position":4,"name":"How to Contact QuickBooks Support","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","isPartOf":{"@id":url+"#webpage"},"publisher":{"@id":"https://techbrot.com/#organization"},"mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

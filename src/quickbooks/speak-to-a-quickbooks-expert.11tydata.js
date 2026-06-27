/* /quickbooks/speak-to-a-quickbooks-expert/ — t-bofu NATIONAL HONEST-TRIAGE page (the
 * single highest Intuit-affiliation-risk page on the site; the national analog of
 * /find-an-accountant/new-york/speak-to-a-proadvisor/). Sources: FROZEN EQUITY CONTRACT
 * (contract-qb-speak.txt) — the ONLY authority for the headings + the 7 FAQ — and the live
 * baseline old HTML (quickbooks/speak-to-a-quickbooks-expert/index.html, full body read)
 * for body prose only. Front-matter JSON lives in the .njk; this file supplies the content
 * arrays + an eleventyComputed pageGraph emitting the @graph (ContactPage, BreadcrumbList,
 * Service, FAQPage). The FAQPage mainEntity is generated from the same `faq` array the
 * visible faq__list renders — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE (the Intuit-affiliation boundary is the whole point of this page):
 *  1. NOT-INTUIT DISCLOSURE ABOVE THE FOLD — the inBrief (rendered by the layout directly
 *     under the dark hero) AND the canonical .disclosure banner (qb-speak-disclosure, first
 *     content section) both state plainly: reaching TechBrot, an INDEPENDENT Certified
 *     QuickBooks ProAdvisor firm — NOT Intuit, NOT QuickBooks Customer Support, NOT
 *     QuickBooks Live, NOT Intuit's expert / ProAdvisor referral line; "Certified QuickBooks
 *     ProAdvisor" is an Intuit CERTIFICATION the firm holds, not affiliation/endorsement;
 *     this team cannot access the Intuit account.
 *  2. INTAKE QUALIFIES INTUIT INTENT AWAY — the disclosure checks-list, the hero, the
 *     situations section, and the intake lede all redirect Intuit account/billing/
 *     subscription/login/product-support seekers to Intuit (https://quickbooks.intuit.com/
 *     learn-support/) and position THIS team as bookkeeping/accounting advisory ON THE
 *     CLIENT'S OWN BOOKS. The split is made unmissable above the fold (disclosure checks-list).
 *  3. NEVER "official", never "QuickBooks expert hotline/helpline", never anything implying
 *     this team IS Intuit / QuickBooks support. The dark-hero subheading carries NO <strong>.
 *
 * MIGRATION-PROTOCOL: T2 headings frozen (every contract H1/H2/H3 verbatim, exact level;
 * the droppable newsletter "The monthly brief." is NOT rendered, and the footer chrome
 * Accounting/QuickBooks/Company/Network headings are global chrome, not rendered here).
 * T3 no collapse (the four-phase call cadence → process-diagram, not a proof-strip). T4 FAQ:
 * 7 contract Q/A — QUESTIONS verbatim/flat; ANSWERS verbatim EXCEPT A1, where the baseline
 * "Certified Intuit QuickBooks ProAdvisor" overclaim is reframed to certification-not-
 * affiliation framing (Sheet-7); see report. COBALT VOCABULARY ONLY: disclosure, checks-list,
 * buyer-card, grid-2/grid-3, ai-summary--ruled, process-diagram/process-step, trust-row,
 * byline-block, meta-reviewed, faq__list, section--alt. NO invented classes.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes; no AggregateRating. The
 * only review proof is the 2 real Clutch reviews — carried on the QuickBooks pillar, NOT
 * duplicated here (this page renders NO review-card). The baseline page authorship was
 * already firm-level ("the accounting team at TechBrot Inc."); no personal name appears in
 * visible content. David Westgate survives only as reviewedBy @id in schema. Independent
 * firm — provides NO Intuit account/billing/product support; not a CPA/EA; coordinates with
 * the client's CPA/EA, who files. CTA lexicon canonical only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SHORT VERSION — TL;DR prose (baseline "What happens when you call"). Reframed so the
  // direct-line language sits alongside the NOT-Intuit-support boundary and is positioned as
  // advisory on the client's OWN books.
  tldr: "You call <strong>+1 (877) 751-5575</strong> and a Certified QuickBooks ProAdvisor at TechBrot answers &mdash; no call routing, no qualification queue, and not Intuit. The discovery call is <strong>30 minutes, free, and no-obligation</strong>: we review your QuickBooks version, your specific situation, what&rsquo;s urgent and what isn&rsquo;t, all inside your own books. Within <strong>3 business days</strong> of the call you receive a written fixed-fee engagement scope. <strong>Same-day diagnostic for active emergencies</strong> (broken files, payroll-day failures, year-end pressure) during business hours. If TechBrot isn&rsquo;t the right fit &mdash; for example, you need IRS representation or active tax filing, which requires a CPA or EA &mdash; we say so and refer you. And if your issue is really an <strong>Intuit account, billing, subscription, or login problem</strong>, that&rsquo;s Intuit&rsquo;s to fix and only Intuit can access it &mdash; we&rsquo;ll point you there rather than book a call that can&rsquo;t help. Engagements include <a href=\"/quickbooks/setup/?intent=quickbooks-setup\">setup</a>, <a href=\"/quickbooks/cleanup/?intent=cleanup\">cleanup</a>, <a href=\"/quickbooks/migration/?intent=quickbooks-migration\">migration</a>, <a href=\"/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly\">monthly bookkeeping</a>, <a href=\"/accounting/payroll-management/\">payroll</a>, and <a href=\"/accounting/sales-tax-compliance/\">sales tax compliance</a>.",

  // AI SUMMARY — mirrors the baseline five-question block. Q5 ("Is TechBrot affiliated with
  // Intuit?") preserved; the "Who answers" answer reframed so "Certified Intuit QuickBooks
  // ProAdvisor" → certification-not-affiliation framing (Sheet-7). One redirect added.
  aiSummary: [
    { q: "Who answers the phone?", a: "A <strong>Certified QuickBooks ProAdvisor</strong> from TechBrot&rsquo;s lead practice &mdash; an independent firm, not a call center, an offshore queue, or a chatbot, and not Intuit. (&ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification the firm holds from Intuit; it does not mean Intuit affiliation.) After-hours messages are returned by a ProAdvisor within 1 business day." },
    { q: "How fast can I speak to someone?", a: "<strong>Same-day for active QuickBooks emergencies</strong> during business hours (file corruption, payroll-day failures, year-end deadline pressure). <strong>Within 1 business day for active scoping.</strong> <strong>Within 3 business days for planning conversations.</strong>" },
    { q: "What does the discovery call cost?", a: "<strong>Free. 30 minutes. No obligation.</strong> Outcomes: a written fixed-fee scope within 3 business days, or an honest &ldquo;not the right fit&rdquo; with a referral." },
    { q: "Is this Intuit or QuickBooks support?", a: "No. This is an <strong>independent firm&rsquo;s advisory line for your own books</strong> &mdash; not Intuit, not QuickBooks Customer Support, not QuickBooks Live, not Intuit&rsquo;s referral line. For an Intuit account, billing, subscription, login, or product-bug issue, contact <a href=\"https://quickbooks.intuit.com/learn-support/\" rel=\"noopener nofollow\">Intuit directly</a>; this team cannot access your Intuit account." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. <strong>Independent Certified QuickBooks ProAdvisor firm.</strong> Active Intuit certifications, but not owned, operated, or employed by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // THREE BUYER SITUATIONS — grid-3 buyer-cards; 3 frozen H3s verbatim. Baseline urgency
  // tiers, reframed so each card restates the OWN-BOOKS boundary and routes Intuit intent away.
  situations: [
    { signal: "Active emergency", title: "Books broken right now.", response: "Same-day diagnostic call &middot; business hours.", body: "For QuickBooks company-file corruption, payroll-day failures, year-end deadlines under 72 hours, a bookkeeper who just quit mid-engagement. Best path: call directly &mdash; a ProAdvisor picks up during business hours. (An Intuit account lockout or billing emergency is Intuit&rsquo;s, not ours.)", honesty: "Same-day diagnostic, yes; same-day full resolution depends on the situation &mdash; some fixes legitimately take days. The call surfaces what&rsquo;s actually fixable, on what timeline." },
    { signal: "Active scoping", title: "Need to engage this month.", response: "1 business-day response &middot; 3-day written scope.", body: "For cleanup engagements, a monthly-bookkeeping search, planned QuickBooks setup or migration, a payroll transition, sales-tax scoping. Not on fire, but ready to engage soon. Best path: send the discovery brief below; we respond within 1 business day with call slots.", honesty: "This is the engagement type we&rsquo;re built for &mdash; most TechBrot engagements start here." },
    { signal: "Planning", title: "Researching for the future.", response: "3 business days &middot; calendar-based.", body: "For migration planning 60+ days out, evaluating options before committing, comparing TechBrot against other firms, or capital-event preparation (M&amp;A, fundraising due diligence). Best path: send a brief and book a call within the week.", honesty: "Calm research conversations are welcome &mdash; no obligation, no sales push, no follow-up sequence." },
  ],

  // REACH ROW — trust-row under the sr-only "How to reach us and what to expect" heading.
  // Carries the baseline direct-contact + promise facts; the out-of-scope item makes the
  // Intuit boundary explicit a further time.
  reachRow: [
    { value: "Direct line", label: "+1 (877) 751-5575 &middot; Toll-free &middot; a Certified ProAdvisor answers, Mon&ndash;Fri 9 AM&ndash;6 PM ET" },
    { value: "What you&rsquo;ll hear", label: "Where your books are, what we&rsquo;d recommend (cleanup, setup, migration, monthly, or none), then a written fixed-fee scope within 3 business days &mdash; or an honest &ldquo;not the right fit.&rdquo;" },
    { value: "Out of scope", label: "No Intuit account, billing, subscription, login, or product support &mdash; that&rsquo;s Intuit; no tax filing or IRS representation &mdash; that&rsquo;s your CPA/EA." },
  ],

  // CALL PROCESS — the four-phase call cadence (frozen H3s) → process-diagram (T3 no collapse).
  process: [
    { when: "Minutes 0&ndash;5", name: "Context", body: "Quick orientation &mdash; your business, the QuickBooks version, who&rsquo;s handling the books now, what&rsquo;s working and what isn&rsquo;t." },
    { when: "Minutes 5&ndash;20", name: "Diagnostic", body: "A specific review of your own file: we surface what we&rsquo;re hearing, what&rsquo;s typical for businesses like yours, and where the actual issue likely lives." },
    { when: "Minutes 20&ndash;28", name: "Recommendation", body: "What we&rsquo;d recommend &mdash; including &ldquo;not us&rdquo; if that&rsquo;s the honest read &mdash; with an engagement structure, a rough fee range, and a timeline expectation." },
    { when: "Minutes 28&ndash;30", name: "Next step", body: "If a fit: a written fixed-fee scope within 3 business days. If not: a referral toward someone who is. Either way, the conversation ends with a clear next step." },
  ],

  // CONVERSATIONS — grid-3 buyer-cards; 6 frozen H3 quotes verbatim. Baseline service-grid.
  conversations: [
    { eyebrow: "Conversation 01", quote: "&ldquo;My QuickBooks is a mess.&rdquo;", body: "Cleanup engagements &mdash; books not reconciled in months, structural account problems, transactions miscategorized, year-end approaching. We scope it and fix it in your own file.", href: "/quickbooks/cleanup/?intent=cleanup", cta: "QuickBooks cleanup" },
    { eyebrow: "Conversation 02", quote: "&ldquo;We need to leave Desktop.&rdquo;", body: "Migration conversations &mdash; Intuit&rsquo;s Desktop sunset is forcing the move. We migrate to QuickBooks Online or Enterprise without data loss.", href: "/quickbooks/migration/?intent=quickbooks-migration", cta: "QuickBooks migration" },
    { eyebrow: "Conversation 03", quote: "&ldquo;Setting up QuickBooks the right way.&rdquo;", body: "New-business setup or QB re-setup &mdash; chart of accounts, integrations, sales-tax configuration, and training, built right from the start.", href: "/quickbooks/setup/?intent=quickbooks-setup", cta: "QuickBooks setup" },
    { eyebrow: "Conversation 04", quote: "&ldquo;Payroll is wrong somehow.&rdquo;", body: "Multi-state payroll, county-level tax issues, W-2 corrections, employee-withholding errors &mdash; Payroll ProAdvisor depth on your own file.", href: "/accounting/payroll-management/", cta: "Payroll management" },
    { eyebrow: "Conversation 05", quote: "&ldquo;We need a real bookkeeper.&rdquo;", body: "Monthly bookkeeping &mdash; a reliable fixed-fee monthly close, CPA-ready statements, and a named ProAdvisor for continuity.", href: "/accounting/bookkeeping/monthly-bookkeeping/?intent=monthly", cta: "Monthly bookkeeping" },
    { eyebrow: "Conversation 06", quote: "&ldquo;Sales tax got complicated.&rdquo;", body: "Multi-state sales-tax nexus, exemption-certificate problems, marketplace-facilitator confusion, audit response &mdash; handled correctly in QuickBooks.", href: "/accounting/sales-tax-compliance/", cta: "Sales tax compliance" },
  ],

  // FAQ — 7 Q/A from the contract. QUESTIONS verbatim/flat. ANSWERS verbatim EXCEPT A1: the
  // baseline "A Certified Intuit QuickBooks ProAdvisor" overclaim is reframed to certification-
  // not-affiliation framing per Sheet-7 (the only reframe; flagged in report). A7 (the
  // affiliation answer) is preserved verbatim. visible faq__list = FAQPage schema (same array).
  faq: [
    { q: "Who answers the phone when I call?", a: "A Certified QuickBooks ProAdvisor from TechBrot&rsquo;s lead practice answers business-hours calls directly &mdash; an independent firm, not Intuit. (&ldquo;Certified QuickBooks ProAdvisor&rdquo; is a certification the firm holds from Intuit; it does not mean Intuit affiliation, and this team cannot access your Intuit account.) Not a call center, not an offshore queue, not a chatbot. After-hours messages are returned by a ProAdvisor within one business day. Every conversation is logged so when you call back, the next ProAdvisor has full context &mdash; no repeated explanations." },
    { q: "How quickly can I speak to someone?", a: "Same-day for active QuickBooks emergencies &mdash; broken company files, payroll-day failures, year-end deadline pressure. Within one business day for active scoping. Within three business days for planning conversations. The discovery call itself is 30 minutes; written fixed-fee scopes are delivered within three business days of the call." },
    { q: "What does the call cost?", a: "The initial discovery call is free. We <a href=\"/quickbooks/file-review/\">review your QuickBooks situation</a>, recommend an engagement structure, and produce a written fixed-fee scope within three business days. There is no obligation to engage further. If TechBrot isn&rsquo;t the right fit &mdash; for example, if you need IRS representation, which requires a CPA or EA &mdash; we&rsquo;ll say so on the call and point you toward what is." },
    { q: "What should I have ready for the call?", a: "Two things help: (1) the QuickBooks version you&rsquo;re on (QuickBooks Online, Desktop, or Enterprise &mdash; and approximate edition or year if Desktop), and (2) a brief description of the specific issue or goal. You don&rsquo;t need to grant file access in advance, you don&rsquo;t need a CPA on the call, and you don&rsquo;t need to have any documents prepared. We&rsquo;ll guide the conversation." },
    { q: "Will the person I speak to be the person I work with?", a: "Yes. Every TechBrot engagement is delivered by a named Certified ProAdvisor who owns the account end-to-end. The ProAdvisor who scopes the engagement is the ProAdvisor who delivers it. If your engagement routes to a network operator (typically when state-specific presence matters), the same continuity principle applies." },
    { q: "Can you handle my QuickBooks emergency today?", a: "Often, yes &mdash; within the bounds of honest scope. Same-day diagnostic calls for <a href=\"/quickbooks/help/emergency-help/\">active QuickBooks emergencies</a> (file corruption, payroll-day failures, urgent year-end pressure) are routine during business hours. What we can&rsquo;t responsibly promise is same-day full resolution on every situation &mdash; some QuickBooks fixes legitimately take days, not hours. The discovery call surfaces what&rsquo;s actually fixable on what timeline." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications across QuickBooks Online (Level 2), Desktop, Enterprise, and Payroll, but TechBrot is not owned, operated, or employed by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name; baseline authorship was already
  // firm-level). The out-of-scope row restates the Intuit boundary in the review block.
  reviewCreds: [
    { label: "Direct line", detail: "+1 (877) 751-5575 &middot; Toll-free &middot; a Certified ProAdvisor answers" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "Out of scope", detail: "No Intuit account, billing, subscription, or product support &middot; no tax filing or IRS representation &middot; no fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // RELATED — grid-2 buyer-cards; 4 frozen H3s verbatim. Baseline related-grid. The "General
  // Contact" card is the canonical place to route Intuit-adjacent / non-QuickBooks intent.
  related: [
    { title: "The ProAdvisor Team", body: "Who the Certified ProAdvisors are &mdash; all four core Intuit certifications, verifiable credentials.", href: "/quickbooks/proadvisor-team/", cta: "ProAdvisor team" },
    { title: "QuickBooks Services Hub", body: "All QuickBooks engagement types &mdash; setup, cleanup, migration, and ongoing expertise on your own file.", href: "/quickbooks/", cta: "QuickBooks hub" },
    { title: "General Contact", body: "Non-QuickBooks engagements &mdash; bookkeeping, payroll, sales tax, fractional CFO &mdash; route through the general contact page.", href: "/contact/", cta: "Contact TechBrot" },
    { title: "Partner Network", body: "For independent ProAdvisor firms interested in joining TechBrot&rsquo;s network &mdash; a different intake path.", href: "/partners/", cta: "Partner with TechBrot" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/speak-to-a-quickbooks-expert/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"ContactPage","@id":url+"#webpage","url":url,"name":"Speak to a QuickBooks Expert","description":"Speak directly to a Certified QuickBooks ProAdvisor at TechBrot, an independent firm — bookkeeping, QuickBooks setup, cleanup, migration, and payroll advisory on the client's own books. Not Intuit, not QuickBooks Customer Support, not QuickBooks Live, and not Intuit's ProAdvisor referral line; provides no Intuit account, billing, or product support.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/quickbooks-speak-to-a-quickbooks-expert.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#qb-speak-tldr-body","#qb-speak-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-15","mainEntity":{"@id":"https://techbrot.com/#organization"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Speak to a QuickBooks Expert","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"Speak to a Certified QuickBooks ProAdvisor","serviceType":"Free QuickBooks ProAdvisor consultation","description":"A free, no-obligation discovery call with a Certified QuickBooks ProAdvisor — bookkeeping, QuickBooks setup, cleanup, migration, payroll, and accounting advisory on the client's own books. Independent Certified QuickBooks ProAdvisor firm; not Intuit, not QuickBooks Customer Support, not QuickBooks Live, and not Intuit's ProAdvisor referral line. Does not provide Intuit account, billing, subscription, login, or product support, and does not file tax returns or represent clients before the IRS — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"Country","name":"United States"},
          "audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"0","description":"Free 30-minute discovery call and initial review of the client's own QuickBooks situation. No obligation.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

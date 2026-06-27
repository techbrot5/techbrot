/* /find-an-accountant/new-york/speak-to-a-proadvisor/ — t-location NY SERVICE page
 * (HONEST-TRIAGE conversion spoke under the NY pillar; the direct NY analog of
 * /quickbooks/speak-to-a-quickbooks-expert/). Sources: FROZEN EQUITY CONTRACT
 * (contract-ny-svc-speak.txt) — the ONLY authority for the headings + the 8 FAQ — and the
 * live baseline old HTML (find-an-accountant/new-york/speak-to-a-proadvisor/index.html, full
 * body read) for body prose only. Data-file shape mirrors monthly-bookkeeping.11tydata.js:
 * JSON front-matter lives in the .njk; this file supplies the content arrays + an
 * eleventyComputed pageGraph emitting the schema @graph (WebPage, BreadcrumbList, Service,
 * FAQPage). The FAQPage mainEntity is generated from the same `faq` array the visible
 * faq__list renders from — single source of truth.
 *
 * SHEET-7 HONEST-TRIAGE (the Intuit-affiliation boundary is the whole point of this page):
 *  1. NOT-INTUIT DISCLOSURE BANNER ABOVE THE FOLD — the inBrief (rendered by the layout
 *     directly under the dark hero) states plainly: reaching TechBrot, an INDEPENDENT
 *     Certified QuickBooks ProAdvisor firm — NOT Intuit, NOT QuickBooks support, NOT
 *     Intuit's ProAdvisor referral line; "Certified QuickBooks ProAdvisor" is an Intuit
 *     CERTIFICATION the firm holds, not affiliation; Intuit account/billing/subscription/
 *     login/product-support seekers are told to contact Intuit directly.
 *  2. INTAKE QUALIFIES INTUIT INTENT AWAY — the hero subheading + inBrief + the `split`
 *     section (Is a ProAdvisor call the right call?) + the `covers` section (What the call
 *     covers — and what it does not) all redirect Intuit billing/account/subscription/login/
 *     product-support seekers to Intuit and position THIS team as bookkeeping/accounting
 *     advisory ON THE CLIENT'S OWN BOOKS. The split is made unmissable above the fold.
 *  3. NEVER "official", never "QuickBooks expert hotline", never anything implying this team
 *     IS Intuit / QuickBooks support. The dark-hero subheading carries NO <strong>.
 *
 * MIGRATION-PROTOCOL: content-to-goal, visual-floor. T2 headings frozen (every contract
 * H1/H2/H3 verbatim, exact level; the droppable newsletter "The monthly brief." is NOT
 * rendered — global chrome owns it, along with footer Accounting/QuickBooks/Company/Network).
 * T3 no collapse. T4 FAQ: 8 contract Q/A — QUESTIONS verbatim/flat; ANSWERS preserved
 * verbatim (none overclaimed Intuit affiliation or used official/hotline framing, so NO
 * answer was reworded — see report; enrichment is append-only and none was needed).
 * COBALT VOCABULARY ONLY: stack-8, buyer-card, grid-2/grid-3, byline-block, meta-reviewed,
 * faq__list, ai-summary--ruled, checks-list, trust-row, section--alt. NO invented classes.
 *
 * HONESTY (R5/R9): no invented reviews, stats, clients, or outcomes. The only review proof
 * remains the 2 real Clutch reviews (carried on the NY pillar, not duplicated here) — this
 * page renders NO review-card and NO AggregateRating. The baseline visible "David Westgate"
 * reviewer line is REFRAMED to firm-level (no personal name in visible content; David
 * Westgate survives only as reviewedBy @id in schema). Independent firm — does NOT file NY
 * taxes; does NOT provide Intuit account/billing/product support; coordinates with the
 * client's CPA, who files. CTA lexicon canonical only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // SUMMARY — real-H2 section right after the in-brief. (H2: The short version.)
  // Carries the baseline "short version" prose; reframed so the funnel language ("not a
  // salesperson") sits alongside the NOT-Intuit-support boundary, and positioned as advisory
  // on the client's OWN books.
  summary: [
    "Book a <strong>free, no-obligation discovery call</strong> with a Certified QuickBooks ProAdvisor who works with New York businesses across all 62 counties. You speak with an actual ProAdvisor &mdash; not a salesperson, and not an Intuit product-support rep &mdash; who reviews your own <a href=\"/quickbooks/online/\">QuickBooks file</a> and your situation, answers your questions, and tells you honestly whether you need <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a>, <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a>, setup, or something else.",
    "This is an <strong>independent firm&rsquo;s advisory line</strong>, not Intuit. TechBrot is a Certified QuickBooks ProAdvisor firm &mdash; that certification comes from Intuit, but the firm is not affiliated with, endorsed by, or sponsored by Intuit Inc. If your issue is an <strong>Intuit account, billing, subscription, login, or QuickBooks product fault</strong>, the call won&rsquo;t help &mdash; that&rsquo;s Intuit&rsquo;s to fix, and only Intuit can access your account. The call is for the accounting work <em>inside</em> your books.",
    "If we&rsquo;re a fit, you get a written fixed-fee proposal within 3 business days; if not, we&rsquo;ll point you in a better direction. We&rsquo;re <strong>not a CPA firm</strong> &mdash; we handle bookkeeping, QuickBooks, and payroll and coordinate with your CPA or EA, who files your New York returns and represents you before the tax authorities.",
  ],

  // SPLIT — who should talk to a ProAdvisor vs. who Intuit should handle (grid-2 buyer-cards).
  // Sheet-7 intent-split, placed second (section--alt) so it sits high on the page. The
  // Intuit card hard-redirects account/billing/login/product-support intent AWAY to Intuit.
  split: [
    {
      tag: "Talk to this team",
      title: "Your own books &amp; QuickBooks file",
      body: "A ProAdvisor call is the right call when the work is on the books themselves &mdash; how your QuickBooks file is set up, whether it&rsquo;s accurate, and who keeps it that way. Typical New York callers:",
      list: [
        "Setting up a new QuickBooks file or fixing a botched setup",
        "Books are behind or a mess and need <a href=\"/find-an-accountant/new-york/cleanup-bookkeeping/\">cleanup</a> or catch-up",
        "Want recurring <a href=\"/find-an-accountant/new-york/monthly-bookkeeping/\">monthly bookkeeping</a> with a named ProAdvisor",
        "Need NY sales-tax, payroll, or reporting handled correctly in QuickBooks",
        "Want CFO-level advisory on what the numbers mean",
      ],
      cta: "Book the discovery call &rarr;",
      href: "/contact/?intent=new-york&amp;state=new-york&amp;source_type=state-money&amp;funnel_stage=BOFU",
    },
    {
      tag: "Contact Intuit directly",
      title: "Your Intuit account, billing &amp; login",
      body: "This team cannot access your Intuit account, change your subscription, or fix the QuickBooks software. For any of the following, go to Intuit &mdash; not this call:",
      list: [
        "Intuit account, password, login, or two-factor problems",
        "QuickBooks subscription, renewal, refunds, or billing disputes",
        "Buying, downgrading, or cancelling a QuickBooks plan",
        "QuickBooks Online or Desktop product bugs, outages, or error codes from Intuit&rsquo;s side",
        "Anything that needs access to your Intuit login or company account",
      ],
      cta: "Go to Intuit support &rarr;",
      href: "https://quickbooks.intuit.com/learn-support/",
      rel: "noopener nofollow",
    },
  ],
  splitNote: "Unsure which side you&rsquo;re on? Tell us in one line on the call or the form, and if it&rsquo;s an Intuit account or billing matter we&rsquo;ll say so and point you to Intuit rather than book a call that can&rsquo;t help you.",

  // AI SUMMARY — 5 entity-dense Q&As (mirror the baseline five-question block). One reframed
  // to carry the NOT-Intuit-support boundary explicitly (see report).
  // (H2: Talking to a New York ProAdvisor, in five questions.)
  aiSummary: [
    { q: "How do I speak to a ProAdvisor?", a: "<strong>Book a free discovery call through this page.</strong> You&rsquo;ll speak directly with a Certified QuickBooks ProAdvisor who works with New York businesses &mdash; not a salesperson, and not Intuit product support. This is an independent firm&rsquo;s advisory line, not Intuit&rsquo;s referral line." },
    { q: "Is this Intuit or QuickBooks support?", a: "No. TechBrot is an <strong>independent Certified QuickBooks ProAdvisor firm</strong> &mdash; not Intuit, and not affiliated with Intuit Inc. For Intuit account, billing, subscription, login, or QuickBooks product issues, contact Intuit directly; this team works on your own books, not your Intuit account." },
    { q: "Salesperson or actual ProAdvisor?", a: "<strong>An actual Certified ProAdvisor</strong> &mdash; the kind of person who&rsquo;d do or oversee the work, so the advice is real, not a pitch." },
    { q: "Is the first call free?", a: "<strong>Yes</strong> &mdash; the call and the initial review of your own file cost nothing and carry no obligation. A fit gets a written fixed-fee proposal; a non-fit gets an honest referral." },
    { q: "Can you help urgently?", a: "Often yes &mdash; facing a deadline or a <a href=\"/find-an-accountant/new-york/state-tax-notice-help/\">tax notice</a>? Tell us on the call; we triage urgent New York bookkeeping work and can usually move fast. (For Intuit billing or login emergencies, that&rsquo;s Intuit, not us.)" },
  ],

  // CONVERSATION — how the call runs (grid-3 buyer-cards). 3 frozen H3s verbatim.
  // (H2: A real conversation, not a sales funnel. + 3 H3s)
  conversation: [
    { num: "01", title: "We listen first", body: "You describe your business and what&rsquo;s going on &mdash; setup, a mess, a deadline, or just questions. We ask the right questions; there&rsquo;s no script and no pitch waiting at the end." },
    { num: "02", title: "We review your file", body: "If you share QuickBooks access, a ProAdvisor looks at the actual state of your own books &mdash; reconciliations, categorization, and what New York compliance the file is missing." },
    { num: "03", title: "We tell you honestly", body: "What you need, what it costs, and whether we&rsquo;re the right fit &mdash; or who is, if we&rsquo;re not. If your issue is really an Intuit account or billing matter, we&rsquo;ll say so and send you to Intuit." },
  ],

  // COVERS vs NOT — what the call covers and what it is NOT (Intuit support). grid-2.
  // Restates the Sheet-7 boundary a second time, concretely, so intent is qualified twice.
  covers: [
    {
      tag: "A ProAdvisor can",
      title: "Help with the work inside your books",
      list: [
        "Set up or fix your QuickBooks file and chart of accounts",
        "Clean up, catch up, and reconcile your books",
        "Run recurring monthly bookkeeping and the monthly close",
        "Handle NY sales-tax tracking, payroll, and reporting in QuickBooks",
        "Advise on what your numbers mean and how to act on them",
      ],
      note: "Delivered in your own QuickBooks file by a named Certified ProAdvisor, on a fixed-fee written scope.",
    },
    {
      tag: "A ProAdvisor cannot",
      title: "Touch your Intuit account &mdash; only Intuit can",
      list: [
        "Reset your Intuit login, password, or two-factor",
        "Change, cancel, or refund a QuickBooks subscription",
        "Resolve Intuit billing disputes or account lockouts",
        "Fix QuickBooks software bugs, outages, or Intuit-side error codes",
        "Act as Intuit&rsquo;s official support or ProAdvisor referral line &mdash; we are neither",
      ],
      note: "For any of these, contact Intuit directly &mdash; this team has no access to your Intuit account.",
      cta: "Go to Intuit support &rarr;",
      href: "https://quickbooks.intuit.com/learn-support/",
      rel: "noopener nofollow",
    },
  ],

  // ADVISORY — standing brand line is the H2; body carried as section prose. Reframed so the
  // "judgment vs. data entry" line also reinforces that the judgment is about the client's
  // books, not Intuit support.
  // (H2: Automation handles the data entry. We handle the judgment.)
  advisoryBody: [
    "The reason to talk to a real ProAdvisor &mdash; not a chatbot, a form, or a product-support queue &mdash; is judgment. New York&rsquo;s tax landscape has specifics that matter to your situation, and a short conversation about your actual books often saves a costly assumption. That&rsquo;s what the call is for.",
    "It&rsquo;s judgment about <em>your</em> accounting &mdash; how the file should be structured, what New York compliance applies, what the numbers are telling you. It is not Intuit product support and not account help; for those, Intuit is the right and only place. Here, a Certified ProAdvisor who knows your file turns it into decisions you can run the business on.",
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name). The baseline named-reviewer line
  // ("David Westgate · 40+ years…") is REFRAMED to firm-level; David survives only in schema.
  reviewCreds: [
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &mdash; Online (L2), Desktop, Enterprise, Payroll" },
    { label: "What the call covers", detail: "Free, no-obligation discovery &middot; real ProAdvisor, not sales &middot; bookkeeping &amp; QuickBooks advisory on your own books" },
    { label: "Out of scope", detail: "No Intuit account, billing, subscription, or product support &middot; no tax filing or representation &middot; no fabricated data" },
    { label: "Independence", detail: "Independent Certified QuickBooks ProAdvisor firm &middot; Not affiliated with Intuit Inc." },
  ],

  // FAQ — 8 Q/A VERBATIM from the contract. QUESTIONS verbatim/flat; ANSWERS preserved
  // verbatim. NONE of the 8 baseline answers claimed Intuit affiliation or used official/
  // hotline framing, so NO answer was reworded; A8 already states the independent-firm split.
  // visible faq__list = FAQPage schema (same array). (H2: Questions about speaking with a ProAdvisor.)
  faq: [
    { q: "How do I speak to a QuickBooks ProAdvisor in New York?", a: "Book a free discovery call through this page. You&rsquo;ll speak directly with a Certified QuickBooks ProAdvisor who works with New York businesses &mdash; not a salesperson or call-center rep. We review your QuickBooks file and your situation, answer your questions, and tell you honestly what you need." },
    { q: "Is the first call really free?", a: "Yes. The discovery call and the initial review of your QuickBooks file cost nothing and carry no obligation. If we&rsquo;re a fit, we send a written fixed-fee proposal; if we&rsquo;re not the right solution for you, we&rsquo;ll say so and point you in a better direction." },
    { q: "What should I have ready for the call?", a: "Whatever you have &mdash; access to your QuickBooks file is ideal, but even a rough description of your business, your entity type, and what&rsquo;s going wrong (or what you&rsquo;re setting up) is enough to have a useful conversation. There&rsquo;s no preparation requirement; we&rsquo;ll guide the call." },
    { q: "Will I talk to an actual ProAdvisor or a salesperson?", a: "An actual Certified QuickBooks ProAdvisor. The person who reviews your situation is the kind of person who&rsquo;d do or oversee the work &mdash; so the advice you get on the call is real, not a pitch handed off to someone else later." },
    { q: "What happens after the call?", a: "If it&rsquo;s a fit, you receive a written, fixed-fee proposal within 3 business days &mdash; clear scope, clear price, no metered clock. Approve it and a named ProAdvisor begins on your file. There&rsquo;s no pressure and no obligation to proceed." },
    { q: "Can you help urgently if I have a deadline or a notice?", a: "Often, yes. If you&rsquo;re facing a tax deadline, a lender request, or a New York tax notice, tell us on the call &mdash; we triage urgent New York work and can frequently move quickly. See our pages on urgent bookkeeping and tax-notice help." },
    { q: "Do you only work with New York City businesses?", a: "No &mdash; all 62 New York counties, NYC to upstate, delivered remotely. Wherever you are in New York, you&rsquo;ll speak with a ProAdvisor who understands New York&rsquo;s specific tax landscape." },
    { q: "Is TechBrot a CPA firm?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor and bookkeeping firm. We handle bookkeeping, QuickBooks, and payroll, and coordinate with your CPA or EA, who files your returns and represents you before the tax authorities." },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/find-an-accountant/new-york/speak-to-a-proadvisor/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"Speak to a New York QuickBooks ProAdvisor","description":"Book a free call with a Certified QuickBooks ProAdvisor for New York businesses — a real ProAdvisor reviews your QuickBooks file and situation, no salesperson, no obligation. Independent firm; not Intuit account, billing, or product support.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/og/cards/find-an-accountant-new-york-speak-to-a-proadvisor.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#ny-svc-speak-summary","#ny-svc-speak-ai-summary-list"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-07"},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Find an Accountant","item":"https://techbrot.com/find-an-accountant/"},
          {"@type":"ListItem","position":3,"name":"New York","item":"https://techbrot.com/find-an-accountant/new-york/"},
          {"@type":"ListItem","position":4,"name":"Speak to a ProAdvisor"}]},
        {"@type":"Service","@id":url+"#service","name":"Speak to a New York QuickBooks ProAdvisor","serviceType":"Free QuickBooks ProAdvisor consultation","description":"A free, no-obligation discovery call with a Certified QuickBooks ProAdvisor for New York businesses — bookkeeping, QuickBooks, and accounting advisory on the client's own books. Independent Certified QuickBooks ProAdvisor firm; not Intuit, not QuickBooks product support, and not Intuit's ProAdvisor referral line. Does not provide Intuit account, billing, or subscription support and does not file NY State or NYC tax returns — coordinates with the client's CPA or EA.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":{"@type":"State","name":"New York","sameAs":"https://en.wikipedia.org/wiki/New_York_(state)"},
          "audience":{"@type":"BusinessAudience","audienceType":"Small and mid-market New York businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","price":"0","description":"Free discovery call and initial review of the client's own QuickBooks file. No obligation.","url":url}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /quickbooks/proadvisor-near-me/ — t-bofu QuickBooks high-local-intent conversion page.
 * Keyword/intent: "quickbooks proadvisor near me / bookkeeper near me / accountant near me".
 * ANGLE (honest): answers "near me" truthfully for a REMOTE-FIRST firm — for cloud QuickBooks
 * work what matters is a Certified ProAdvisor working INSIDE your file, not physical proximity.
 * The page ROUTES INTO the state layer (/find-an-accountant/ + the 5 built state pillars); it
 * is NOT a second directory hub — it is a focused QB-keyword answer page that converts.
 *
 * HONESTY (R4/R5/R9 + the contract for this page):
 *  - NO LocalBusiness schema. NO fabricated offices, no "serving [city]", no fake local
 *    addresses, no "X offices nationwide". Remote-first is stated plainly throughout.
 *  - Service schema only: provider #organization, areaServed = United States (Country). We MAY
 *    list the 5 built-out states as areaServed AdministrativeArea because we hold real
 *    state-tax content for them — but NO city/office claims attach to them.
 *  - Does not disparage local firms; frames remote as a legitimate, often-better option for
 *    cloud QB work, and concedes in-person is a valid choice for some businesses.
 *  - Founder-name-zero in visible content. Not affiliated with Intuit Inc. We don't file income
 *    taxes (CPA/EA files); we coordinate. No fabricated stats/clients/reviews; no
 *    AggregateRating/Review schema. Canonical pricing only (reference /pricing/); no invented
 *    numbers. Distinct from /find-an-accountant/ — routes to it, does not duplicate it.
 *  - CTA lexicon canonical only: PRIMARY "Book the discovery call" → /contact/?intent=
 *    quickbooks-proadvisor · SECONDARY "Get the free file review" → /quickbooks/file-review/
 *    ?intent=file-review · TERTIARY phone "Speak to a ProAdvisor" (tel). Only two intents
 *    used: quickbooks-proadvisor + file-review.
 *
 * SCHEMA: eleventyComputed.pageGraph emits @graph = WebPage + BreadcrumbList + Service +
 * FAQPage. @ids under https://techbrot.com/quickbooks/proadvisor-near-me/...; speakable →
 * #pnm-ai-summary (+ the in-brief id #pnm-in-brief-text emitted by t-bofu). Service node name
 * "QuickBooks ProAdvisor — Remote, Nationwide", provider #organization, areaServed United
 * States. FAQPage mainEntity generated from the same `faq` array the visible faq__list renders
 * — single source of truth. COBALT VOCABULARY ONLY (disclosure, ai-summary--ruled, buyer-card,
 * grid-2/grid-3, process-diagram/process-step, trust-row, byline-block, meta-reviewed,
 * faq__list, section--alt); no invented classes; <code> not mono (none needed here). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}

module.exports = {
  // AI SUMMARY — the "near me" question answered. speakable target is the section #pnm-ai-summary.
  aiSummary: [
    { q: "Do you have a QuickBooks ProAdvisor near me?", a: "We have a Certified QuickBooks ProAdvisor who will work inside <strong>your</strong> QuickBooks file &mdash; remotely. TechBrot is a <strong>remote-first</strong> firm with no physical offices in client cities; for cloud QuickBooks work, the ProAdvisor&rsquo;s street address doesn&rsquo;t affect the result, so we serve businesses in every U.S. state on this model." },
    { q: "Is a remote ProAdvisor as good as a local one?", a: "For QuickBooks work, yes &mdash; and often better, because you&rsquo;re not limited to whoever is local. What determines quality is certification, reconciliation discipline, and fluency in your state&rsquo;s taxes &mdash; not distance. That said, some owners genuinely prefer in-person, and that&rsquo;s a valid choice we&rsquo;ll be honest about." },
    { q: "Do you know my state&rsquo;s taxes?", a: "We keep your books sales-tax-ready and state-correct for businesses in every state, and we maintain dedicated, locally-built pages for the states where we&rsquo;ve gone deepest &mdash; New York, California, Texas, Florida, and Illinois. We do the bookkeeping; your CPA or EA files the income-tax returns, and we coordinate with them." },
    { q: "How does working with a remote ProAdvisor actually work?", a: "You get a <strong>named</strong> Certified ProAdvisor working in your own QuickBooks file, in your timezone, on a written <strong>fixed fee</strong>. It starts with a free 30-minute discovery call and a written scope within 3 business days &mdash; no obligation." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot is an <strong>independent</strong> Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications, but TechBrot is not owned, operated, or employed by Intuit Inc. QuickBooks is a registered trademark of Intuit Inc." },
  ],

  // WHAT YOU ACTUALLY GET — grid-3 buyer-cards. Concrete remote-first value; no claims we can't keep.
  getCards: [
    { tag: "A named person", title: "A named ProAdvisor, not a queue.", body: "One Certified QuickBooks ProAdvisor owns your account end-to-end &mdash; the same person who scopes the work delivers it. No ticket numbers, no re-explaining your situation to a new agent every time." },
    { tag: "Your own file", title: "Work done inside your QuickBooks.", body: "We work in your own QuickBooks Online file with full audit history &mdash; you see exactly what changed and when. Nothing is exported to a black box; the books stay yours." },
    { tag: "Your timezone", title: "On your schedule, not a far-off one.", body: "Remote-first doesn&rsquo;t mean overseas or off-hours. We work within U.S. business hours and your timezone, so calls and turnarounds line up with your day." },
    { tag: "Written fixed fee", title: "A fixed fee, agreed in writing first.", body: "You get a written scope and a fixed fee before any work begins &mdash; no hourly surprises. See the published structure on our <a href=\"/pricing/\">pricing page</a>." },
    { tag: "State fluency", title: "Real fluency for your state&rsquo;s taxes.", body: "We keep your books sales-tax-ready and state-correct, with dedicated pages for the states we&rsquo;ve built out. Local knowledge where it actually affects your numbers." },
    { tag: "Honest fit", title: "An honest read on whether we fit.", body: "If remote isn&rsquo;t right for you &mdash; or if you need IRS representation or tax filing, which is a CPA&rsquo;s or EA&rsquo;s job &mdash; we&rsquo;ll say so on the call and point you toward what does fit." },
  ],

  // STATE PILLARS — routes to the 5 built state pages. DISTINCT from /find-an-accountant/
  // (the directory hub), which gets its own card in the template's "every other state" slot.
  statePillars: [
    { tag: "New York", name: "New York", href: "/find-an-accountant/new-york/", body: "NYC and statewide &mdash; New York sales tax, MCTMT, and the city/state filing realities, handled in your QuickBooks file." },
    { tag: "California", name: "California", href: "/find-an-accountant/california/", body: "CDTFA sales tax, AB5 worker classification, and California&rsquo;s filing thresholds &mdash; kept correct in your books." },
    { tag: "Texas", name: "Texas", href: "/find-an-accountant/texas/", body: "No state income tax, but Texas franchise tax and sales tax are real work &mdash; we keep your QuickBooks ready for both." },
    { tag: "Florida", name: "Florida", href: "/find-an-accountant/florida/", body: "Florida sales-and-use tax and the state&rsquo;s filing cadence &mdash; tracked accurately in your QuickBooks file." },
    { tag: "Illinois", name: "Illinois", href: "/find-an-accountant/illinois/", body: "Illinois ROT/use tax and the state&rsquo;s filing realities &mdash; kept clean and current in your books." },
  ],

  // HOW IT WORKS — the ONE numbered system (process-diagram). Honest, concrete steps.
  process: [
    { name: "Free discovery call", body: "A 30-minute call &mdash; we look at your QuickBooks situation, what&rsquo;s working, what isn&rsquo;t, and your state. No obligation, no sales push." },
    { name: "Written fixed-fee scope", body: "Within 3 business days you receive a written scope and a fixed fee &mdash; or an honest &ldquo;not the right fit&rdquo; with a referral. You decide with the numbers in front of you." },
    { name: "Secure file access", body: "If you engage, you grant your named ProAdvisor accountant access to your own QuickBooks file. The work happens inside the file you already use." },
    { name: "Ongoing, accountable work", body: "Bookkeeping, cleanup, setup, migration, or monthly close &mdash; delivered by the same ProAdvisor, in your timezone, with your books always filing-ready for your CPA or EA." },
  ],

  // FAQ — 6 distinct Q/A. Visible faq__list = FAQPage schema (same array). No invented stats/reviews.
  faq: [
    { q: "Do you have a ProAdvisor near me?", a: "We have a Certified QuickBooks ProAdvisor who will work inside your QuickBooks file remotely &mdash; TechBrot is a remote-first firm and does not operate physical offices in client cities. For cloud QuickBooks work, that&rsquo;s by design: the work lives in your file, not at a desk near you, so the right ProAdvisor for your situation can serve you from anywhere in the U.S. If you specifically need someone physically in the room, that&rsquo;s a valid preference and we&rsquo;ll tell you so honestly." },
    { q: "Is a remote ProAdvisor as good as a local one?", a: "For QuickBooks work, a remote Certified ProAdvisor is every bit as effective &mdash; and removing the distance constraint usually means a better fit, because you&rsquo;re no longer limited to whoever happens to be nearby. Quality comes from certification, reconciliation discipline, industry knowledge, and fluency in your state&rsquo;s taxes, none of which depend on proximity. We won&rsquo;t pretend remote is better for everyone: some owners genuinely prefer in-person, and for them a local firm may be the right call." },
    { q: "Do you know my state&rsquo;s taxes?", a: "Yes &mdash; we keep your QuickBooks books sales-tax-ready and state-correct for businesses in every state, and we maintain dedicated, locally-built pages for the states where we&rsquo;ve done the deepest work: New York, California, Texas, Florida, and Illinois. State sales tax, nexus, and filing thresholds are genuinely local, so we treat them seriously rather than claiming shallow nationwide coverage. One boundary: we keep the books filing-ready but do not file income-tax returns &mdash; your CPA or EA files, and we coordinate with them directly." },
    { q: "How does working with a remote ProAdvisor actually work?", a: "It starts with a free 30-minute discovery call, followed by a written fixed-fee scope within 3 business days. If you engage, you grant your named ProAdvisor accountant access to your own QuickBooks Online file, and the work happens inside that file with full audit history. You keep the same ProAdvisor for continuity, working in your timezone &mdash; so the relationship feels closer than many in-person arrangements, without anyone needing to be on your street." },
    { q: "How do I talk to a QuickBooks ProAdvisor today?", a: "Call <a href=\"tel:+18777515575\">(877) 751-5575</a> or book a free 30-minute discovery call online. You&rsquo;ll speak with a Certified QuickBooks ProAdvisor who reviews your situation and sends a written fixed-fee scope within 3 business days &mdash; no obligation, and no pressure to engage if remote isn&rsquo;t the right fit for you." },
    { q: "Why should I choose remote over a local firm?", a: "Choose remote when what you need is the QuickBooks work done well &mdash; cleanup, setup, migration, monthly bookkeeping, sales-tax-ready books &mdash; and you want the best-fit ProAdvisor rather than the nearest one. You get a named person, your own file, a fixed fee, and state-specific fluency. Choose local instead if in-person presence is genuinely important to how you operate, for example a cash-heavy business that wants someone to drop in. We&rsquo;d rather be honest about that than win an engagement that doesn&rsquo;t suit you." },
    { q: "Is TechBrot affiliated with Intuit?", a: "No. TechBrot Inc. is an independent Certified QuickBooks ProAdvisor firm. We hold active Intuit certifications, but TechBrot is not owned, operated, or employed by Intuit Inc., and holding a certification is not the same as being Intuit. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
  ],

  // EXPERT REVIEW — firm-level trust row (no founder name in visible content).
  reviewCreds: [
    { label: "Model", detail: "Remote-first &middot; no physical offices in client cities &middot; work done inside your own QuickBooks file" },
    { label: "Coverage", detail: "Every U.S. state &middot; dedicated state pages for NY, CA, TX, FL, IL" },
    { label: "Certifications", detail: "Active Intuit Certified QuickBooks ProAdvisor &middot; verifiable on Intuit&rsquo;s directory" },
    { label: "Independence", detail: "Independent firm &middot; not affiliated with Intuit Inc. &middot; does not file taxes &mdash; coordinates with your CPA/EA" },
  ],

  // RELATED — grid-2 buyer-cards; routes onward, including the directory hub (distinct from this page).
  related: [
    { title: "Find an Accountant by State", body: "The full state directory and router &mdash; pick your state, or tell us where you are if your state page isn&rsquo;t built yet. We serve every U.S. state remotely.", href: "/find-an-accountant/", cta: "Open the directory" },
    { title: "Free QuickBooks File Review", body: "Not sure where your books stand? Get a free review of your own QuickBooks file before you commit to anything.", href: "/quickbooks/file-review/?intent=file-review", cta: "Get the file review" },
    { title: "QuickBooks Services Hub", body: "Every QuickBooks engagement type &mdash; setup, cleanup, migration, and ongoing expertise on your own file.", href: "/quickbooks/", cta: "QuickBooks hub" },
    { title: "Speak to a QuickBooks Expert", body: "Want to talk it through first? Reach a Certified ProAdvisor directly &mdash; an independent firm&rsquo;s advisory line, not Intuit support.", href: "/quickbooks/speak-to-a-quickbooks-expert/", cta: "Speak to a ProAdvisor" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/proadvisor-near-me/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":"QuickBooks ProAdvisor Near Me — Remote-First, Every U.S. State","description":"An honest answer to “QuickBooks ProAdvisor near me” for a remote-first firm: for cloud QuickBooks work, what matters is a Certified ProAdvisor inside your file, not physical proximity. Independent Certified QuickBooks ProAdvisor firm serving businesses in every U.S. state remotely, with real local tax fluency for New York, California, Texas, Florida, and Illinois. Not affiliated with Intuit Inc.; does not file tax returns or represent clients before the IRS.","isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"breadcrumb":{"@id":url+"#breadcrumb"},"inLanguage":"en-US","primaryImageOfPage":{"@type":"ImageObject","url":"https://techbrot.com/assets/img/og/proadvisor-near-me-og.png"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["#pnm-in-brief-text","#pnm-ai-summary"]},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"lastReviewed":"2026-06-19","mainEntity":{"@id":url+"#service"}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"ProAdvisor Near Me","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks ProAdvisor — Remote, Nationwide","serviceType":"Remote QuickBooks ProAdvisor and bookkeeping services","description":"Remote-first QuickBooks ProAdvisor and bookkeeping work done inside the client's own QuickBooks file — cleanup, setup, migration, monthly bookkeeping, payroll, and sales-tax-ready books — for businesses in every U.S. state. A named Certified QuickBooks ProAdvisor, the client's own file, the client's timezone, and a written fixed fee. Independent Certified QuickBooks ProAdvisor firm; not affiliated with Intuit Inc.; does not file tax returns or represent clients before the IRS, and coordinates with the client's CPA or EA. Remote-first with no physical offices in client cities.","provider":{"@id":"https://techbrot.com/#organization"},"areaServed":[
          {"@type":"Country","name":"United States"},
          {"@type":"AdministrativeArea","name":"New York"},
          {"@type":"AdministrativeArea","name":"California"},
          {"@type":"AdministrativeArea","name":"Texas"},
          {"@type":"AdministrativeArea","name":"Florida"},
          {"@type":"AdministrativeArea","name":"Illinois"}],
          "audience":{"@type":"BusinessAudience","audienceType":"U.S. small and mid-sized businesses"},
          "offers":{"@type":"Offer","priceCurrency":"USD","description":"Free 30-minute discovery call and review of the client's own QuickBooks situation, followed by a written fixed-fee scope within 3 business days. No obligation.","url":"https://techbrot.com/contact/?intent=quickbooks-proadvisor"}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

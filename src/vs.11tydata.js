/* /vs/ — t-mofu COMPARISON HUB (MIGRATION-PROTOCOL: content-to-goal, visual-floor).
 * T1 AUTHORITY for headings is the FROZEN EQUITY CONTRACT (contract-vs-hub.txt) —
 * NOT the old HTML. The old HTML (vs/index.html) is read ONLY for body PROSE.
 *
 * This is a ROUTING HUB (CollectionPage) — it does not compare two named providers
 * head-to-head; it routes buyers to the right child comparison. So it carries:
 *   - the cobalt t-mofu vocabulary (byline-block, ai-summary, buyer-card, vs-table,
 *     stack-8, trust-row) borrowed from vs-gusto.njk, AND
 *   - the ItemList hub-routing pattern borrowed from find-an-accountant/new-york/cities.njk.
 *
 * T2 HEADINGS FROZEN: every contract H1/H2/H3 appears VERBATIM at its exact level.
 *   - 5 provider H3s + 3 role/structure H3s are FROZEN and ALL rendered, but only the
 *     4 children being built this wave are LINKED (bench, pilot, quickbooks-live,
 *     bookkeeper-vs-accountant). The 4 not-yet-built (Bookkeeper360, Xendoo,
 *     In-house vs Outsourced, Monthly vs Hourly) render as headings with NO href —
 *     NO-CHILDREN-404 rule: never link a baseline URL that isn't live this wave.
 *   - "The monthly brief." (newsletter) is the only droppable H2 — DROPPED (footer chrome).
 *   - The 4 footer-chrome H2s (Accounting, QuickBooks, Company, Network) are NOT rendered
 *     (footer chrome is not part of the page body under this protocol).
 *
 * T3 NO COLLAPSE: the 6 framework H3s (tl;dr summary … FAQ for the long tail) stay as
 *   real <h3> in a stack-8 grid. A SEPARATE compact at-a-glance vs-scroll+vs-table
 *   (vsTable[]) gives the page its tier-signature comparison table WITHOUT collapsing
 *   any baseline heading; its row labels are deliberately NOT identical to any H3.
 *
 * NO FAQ in baseline (0 Q/A). This is a routing hub — we do NOT fabricate an FAQPage.
 *   The contract H2 "What people ask about how we compare." is rendered as real prose
 *   Q&A blocks (ai-summary vocabulary), NOT a schema'd FAQPage, because the frozen
 *   contract carries zero FAQ entries. faq-min-6 gate handling: flagged for verification.
 *
 * T6 content-to-goal: REAL honest-routing-hub content (who we compare against and why;
 *   the "we'll tell you when we're not the fit" framing; one honest one-line summary per
 *   child). Enrichment is TRUE/publicly documented (Bench Dec-2024 Chapter 7 + Employer.com
 *   acquisition; Pilot's VC-startup focus; QuickBooks Live = Intuit's in-house service).
 *   NO fabricated stats, NO reviews, NO AggregateRating, no personal name in body.
 *   Independent firm — not affiliated with Intuit Inc. or any compared vendor. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "A working comparison library, not a sales funnel." — the one-paragraph plain read.
  libraryIntro: [
    "Every comparison in this library follows the same structure &mdash; a <strong>tl;dr summary</strong>, <strong>AI-extractable Q&amp;As</strong>, a <strong>fourteen-dimension feature table</strong> with explicit winner markers, and a <strong>three-column verdict</strong> covering when TechBrot fits, when the alternative fits, and when <em>neither</em> fits. Where an alternative has changed materially &mdash; like <a href=\"/vs/techbrot-vs-bench/\">Bench&rsquo;s December 2024 Chapter 7 bankruptcy</a> and subsequent Employer.com acquisition &mdash; we say so plainly rather than gloss over it.",
    "The goal isn&rsquo;t to win every dimension. It&rsquo;s to be the comparison a sophisticated buyer would actually trust. Sometimes the honest answer is that <strong>neither service fits</strong> &mdash; a venture-backed startup needing audit-ready financials should look at Pilot; a business whose primary need is tax filing needs a CPA firm; a very small sole proprietor with simple books may not need professional bookkeeping at all &mdash; and when that&rsquo;s the case, we point you there. Independent firm &mdash; not affiliated with Intuit Inc. or any provider compared here, and we earn no referral or affiliate revenue from any of them.",
  ],

  // "The library, in four questions." — 4 entity-dense Q&As (ai-summary). Deliberately NOT
  // identical to the prose-Q&A block below, to keep questions distinct.
  aiSummary: [
    { q: "Who is this library for?", a: "U.S. small and mid-sized business owners actively evaluating bookkeeping providers, plus owners trying to understand the structural differences between <strong>roles</strong> (bookkeeper vs accountant) and <strong>engagement models</strong> (monthly vs hourly, in-house vs outsourced). Written for buyers who&rsquo;ve already done some research and want substance over marketing." },
    { q: "How are the comparisons written?", a: "Each comparison uses the same structure &mdash; tl;dr summary, an AI-extractable Q&amp;A set, a fourteen-dimension feature table with an explicit winner marker per row, a three-column verdict (when TechBrot fits, when the alternative fits, when neither fits), and an FAQ block. Material status changes &mdash; like a competitor&rsquo;s bankruptcy filing &mdash; are disclosed in a dedicated banner at the top of the affected page." },
    { q: "Does TechBrot always win these comparisons?", a: "<strong>No.</strong> Every comparison page includes a &ldquo;when neither fits&rdquo; column. Venture-backed startups needing audit-ready financials should look at <a href=\"/vs/techbrot-vs-pilot/\">Pilot</a>; businesses needing tax filing as the primary engagement need a CPA firm; very small sole proprietors with simple books may not need professional bookkeeping at all. Naming where we&rsquo;re <em>not</em> the fit is the whole point of the library." },
    { q: "How current are the comparisons?", a: "All comparisons reflect the alternatives as of 2026. When a competitor&rsquo;s material status changes &mdash; pricing, service model, ownership, or financial condition &mdash; the corresponding page is updated, and pages with a material change display a disclosure banner. We don&rsquo;t publish dollar figures for competitors because their pricing changes; check each provider directly." },
  ],

  // vs-scroll+vs-table — SEPARATE compact at-a-glance routing table (tier-signature
  // component). Row labels are SHORT and deliberately NOT identical to any baseline H3
  // (T3: no collapse). "us" column = whether the child page is live in this wave.
  vsTable: [
    { cap: "TechBrot vs Bench", who: "former Bench customers, QuickBooks-native bookkeeping", live: "Published &middot; status disclosure" },
    { cap: "TechBrot vs Pilot", who: "SMB-fit vs VC-startup-fit accounting", live: "Published" },
    { cap: "TechBrot vs QuickBooks Live", who: "Intuit&rsquo;s own service vs independent ProAdvisors", live: "Published" },
    { cap: "Bookkeeper vs Accountant", who: "owners unsure which role they need first", live: "Published" },
    { cap: "TechBrot vs Bookkeeper360", who: "remote subscriptions vs operator networks", live: "In progress" },
    { cap: "TechBrot vs Xendoo", who: "comparing bundled service stacks", live: "In progress" },
  ],

  // 5 PROVIDER H3s — buyer-cards. H3s VERBATIM from contract. `href` set ONLY for the
  // children live this wave; not-yet-built children carry NO href (NO-CHILDREN-404).
  providers: [
    { name: "TechBrot vs Bench Accounting", href: "/vs/techbrot-vs-bench/", status: "Published &middot; with status disclosure", body: "Bench ran a centralized remote-bookkeeping subscription before its <strong>December 2024 Chapter 7 bankruptcy</strong> and subsequent acquisition by Employer.com. The page covers the migration path off Bench, the full status disclosure, and how TechBrot&rsquo;s QuickBooks-native, named-operator model is structured differently.", cta: "Read TechBrot vs Bench &rarr;" },
    { name: "TechBrot vs Pilot", href: "/vs/techbrot-vs-pilot/", status: "Published", body: "Pilot serves venture-backed startups with fundraising-specific accounting, GAAP financials, and centralized team support &mdash; a different buyer and a different model. The honest read: if you&rsquo;re raising and need audit-ready financials, Pilot may fit better, and the page says so.", cta: "Read TechBrot vs Pilot &rarr;" },
    { name: "TechBrot vs QuickBooks Live", href: "/vs/techbrot-vs-quickbooks-live/", status: "Published", body: "QuickBooks Live is Intuit&rsquo;s own bookkeeping service inside QuickBooks Online &mdash; narrower scope, more scripted operations, and vendor-aligned by design. The page compares independence, scope, and pricing structure for QBO users deciding between Intuit&rsquo;s service and independent ProAdvisors.", cta: "Read TechBrot vs QuickBooks Live &rarr;" },
    { name: "TechBrot vs Bookkeeper360", href: null, status: "In progress", body: "Bookkeeper360 offers tiered remote bookkeeping with payroll, tax, and HR add-ons. The comparison &mdash; in progress &mdash; will cover service model, pricing tiers, the add-on stack, and operator accountability for owners weighing a remote subscription against an operator network.", cta: null },
    { name: "TechBrot vs Xendoo", href: null, status: "In progress", body: "Xendoo offers monthly bookkeeping with optional tax filing and CFO services. The comparison &mdash; in progress &mdash; will cover the software approach, QuickBooks compatibility, bundling, and named-operator accountability for owners comparing bundled service stacks.", cta: null },
  ],

  // 3 ROLE/STRUCTURE H3s — buyer-cards. H3s VERBATIM from contract. Same href rule.
  concepts: [
    { name: "Bookkeeper vs Accountant", href: "/vs/bookkeeper-vs-accountant/", status: "Published", body: "The most-searched accounting question among U.S. small business owners. A definitional comparison of scope, credentials, pricing, and when each is needed &mdash; most businesses need both, and the page explains how the two roles coordinate.", cta: "Read Bookkeeper vs Accountant &rarr;" },
    { name: "In-house vs Outsourced Bookkeeping", href: null, status: "In progress", body: "When to hire an internal bookkeeper, and when to outsource to a service or operator. The comparison &mdash; in progress &mdash; will cover true cost of ownership, the headcount and complexity thresholds where each model starts to make sense, and hybrid arrangements.", cta: null },
    { name: "Monthly vs Hourly Bookkeeping Pricing", href: null, status: "In progress", body: "Why most professional bookkeepers price monthly, how hourly billing structures actually work, and the trade-offs against fixed-fee scoping. The comparison &mdash; in progress &mdash; will cover scope creep, predictability, and total cost.", cta: null },
  ],

  // "Pick the comparison that matches your real question." — routing prose (real specificity).
  howto: [
    "Most buyers don&rsquo;t need every comparison page &mdash; they need <strong>the one that matches the decision they&rsquo;re actually making</strong>. Here&rsquo;s a quick map.",
    "<strong>You&rsquo;re a former Bench customer:</strong> start with <a href=\"/vs/techbrot-vs-bench/\">TechBrot vs Bench</a>. That page covers the December 2024 Chapter 7, the migration path, and how a named-operator engagement is structured differently from a centralized subscription.",
    "<strong>You&rsquo;re weighing an SMB-fit service against a VC-startup-fit one:</strong> read <a href=\"/vs/techbrot-vs-pilot/\">TechBrot vs Pilot</a>. If you&rsquo;re fundraising and need audit-ready GAAP financials, it tells you so plainly.",
    "<strong>You&rsquo;re a QuickBooks Online user deciding between Intuit&rsquo;s own service and an independent firm:</strong> read <a href=\"/vs/techbrot-vs-quickbooks-live/\">TechBrot vs QuickBooks Live</a> &mdash; independence, scope, and pricing structure, side by side.",
    "<strong>You&rsquo;re not sure whether you need a bookkeeper or a CPA:</strong> read <a href=\"/vs/bookkeeper-vs-accountant/\">Bookkeeper vs Accountant</a> first. Most U.S. small businesses need both &mdash; that page explains why and how the roles coordinate.",
    "If your question doesn&rsquo;t map to a published comparison yet, <a href=\"/contact/?intent=comparison\">book the discovery call</a>. We&rsquo;ll give you the same honest read in conversation &mdash; including when the right answer isn&rsquo;t TechBrot.",
  ],

  // 6 FRAMEWORK H3s — REAL <h3> in stack-8. H3s VERBATIM from contract. NOT collapsed.
  framework: [
    { num: "01", name: "tl;dr summary", body: "One paragraph that captures the entire comparison. Reads cleanly, stays quotable, and is built so a buyer can decide in sixty seconds whether to keep reading." },
    { num: "02", name: "AI-extractable Q&amp;As", body: "A set of self-contained questions and answers, written so AI engines (ChatGPT, Perplexity, Google AI Overviews) can pull and cite them accurately. Each answer stands on its own." },
    { num: "03", name: "Fourteen-dimension feature table", body: "A side-by-side comparison across the dimensions that actually decide the choice &mdash; service model, software, pricing, accountability, expertise, continuity, and more &mdash; with an explicit winner marker on every row." },
    { num: "04", name: "Three-column verdict", body: "When TechBrot fits, when the alternative fits, and when neither fits. Naming &ldquo;when neither fits&rdquo; explicitly is the credibility move a buyer can verify against the rest of the page." },
    { num: "05", name: "Material status disclosure", body: "When a competitor has changed materially &mdash; an ownership change, a bankruptcy, a pricing shift, a model change &mdash; the page leads with that disclosure rather than glossing over it." },
    { num: "06", name: "FAQ for the long tail", body: "The specific questions buyers raise in discovery calls, answered plainly and marked up for retrieval, so the page covers the real long-tail concerns rather than just the headline matchup." },
  ],

  // "What people ask about how we compare." — the baseline carries ZERO FAQ entries, so
  // this is rendered as PROSE Q&A (ai-summary vocabulary), NOT a schema'd FAQPage. No
  // fabricated FAQPage node is emitted. (faq-min-6 gate: flagged in report.)
  libraryQs: [
    { q: "Why does TechBrot publish comparisons against competitors?", a: "Because buyers compare anyway, and they deserve an honest read instead of marketing. Bookkeeping is a high-trust purchase; the buyers we want are the ones who do their own research and look for substance. A library that acknowledges competitors&rsquo; strengths &mdash; and says &ldquo;we&rsquo;re not the right fit&rdquo; when that&rsquo;s true &mdash; signals exactly what we are." },
    { q: "Do you ever say a competitor is the better fit?", a: "Yes. Every comparison includes a column for when the alternative wins. <a href=\"/vs/techbrot-vs-pilot/\">Pilot</a> for VC-startup financials, <a href=\"/vs/techbrot-vs-quickbooks-live/\">QuickBooks Live</a> for buyers who want Intuit&rsquo;s own in-product service &mdash; we name those plainly. Pretending we win every dimension would make the whole library worthless." },
    { q: "How often are the comparisons updated?", a: "Whenever an alternative changes materially. Pricing updates, ownership changes, service-model shifts, and major financial events (like <a href=\"/vs/techbrot-vs-bench/\">Bench&rsquo;s Chapter 7</a>) trigger a same-week update; smaller updates roll in quarterly. The date of last review is shown on each comparison page." },
    { q: "Why are some comparisons marked &ldquo;in progress&rdquo;?", a: "Because we&rsquo;d rather mark a comparison honestly as upcoming than ship a thin or rushed page that doesn&rsquo;t hold up. Each one takes real work &mdash; gathering current pricing, verifying claims, building the fourteen-dimension table, and getting the verdict right &mdash; so status is shown openly rather than faked." },
    { q: "Can I request a specific comparison?", a: "Yes. <a href=\"/contact/?intent=comparison\">Tell us the provider or concept</a> you&rsquo;d like compared and we&rsquo;ll prioritize it by how often the question comes up in discovery calls. If we don&rsquo;t have a page for it yet, we can still give you the same honest read on a call." },
  ],

  // ItemList — routes ONLY to the 4 children live this wave (NO-CHILDREN-404).
  itemList: [
    { name: "TechBrot vs Bench Accounting", url: "https://techbrot.com/vs/techbrot-vs-bench/" },
    { name: "TechBrot vs Pilot", url: "https://techbrot.com/vs/techbrot-vs-pilot/" },
    { name: "TechBrot vs QuickBooks Live", url: "https://techbrot.com/vs/techbrot-vs-quickbooks-live/" },
    { name: "Bookkeeper vs Accountant", url: "https://techbrot.com/vs/bookkeeper-vs-accountant/" },
  ],

  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/vs/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#vs-hub-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"Comparisons","item":url}]},
        {"@type":"ItemList","@id":url+"#comparison-list","name":"TechBrot comparisons","itemListOrder":"https://schema.org/ItemListOrderAscending","numberOfItems":data.itemList.length,"itemListElement":data.itemList.map(function(it,i){return {"@type":"ListItem","position":i+1,"url":it.url,"name":stripTags(it.name)};})}
      ]};
    },
  },
};

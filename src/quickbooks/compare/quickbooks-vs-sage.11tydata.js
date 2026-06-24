/* /quickbooks/compare/quickbooks-vs-sage/ — t-mofu COMPARISON page.
 * Cloned from src/vs/techbrot-vs-bench.11tydata.js; the Bench-only status +
 * migration sections (and their benchStatus / migration data) are DROPPED.
 * Kept: byline, summary, aiSummary, vs-table, verdict (3), faq, review, related.
 *
 * HONESTY / FAIRNESS (founder mandate): we ARE Certified QuickBooks ProAdvisors,
 * so we hold a preference for QuickBooks Online — we SAY SO and stay fair to Sage.
 * ACCURACY: "Sage" is a FAMILY, not one product. Be precise:
 *   - Sage Business Cloud Accounting — small-business cloud (direct QBO competitor)
 *   - Sage 50 — desktop-rooted, more traditional small-business accounting
 *   - Sage Intacct — cloud financial management for MID-MARKET / complex /
 *     multi-entity needs, approaching ERP. This is the genuine step UP from QBO.
 * QBO is primarily compared to Sage's small-business offerings; Intacct is the
 * upgrade path when a business outgrows QBO. Sage genuine strengths: scales to
 * mid-market (Intacct), industry depth (construction, manufacturing), multi-entity
 * consolidation. QBO strengths: ease of use, U.S. SMB ubiquity, LARGEST U.S.
 * ProAdvisor/accountant ecosystem, app marketplace, lower complexity for typical
 * SMBs. Honest read: most U.S. small businesses are better on QBO; mid-market /
 * ERP-like / heavy multi-entity may be better on Sage Intacct.
 * NO FABRICATED SAGE PRICING — Sage products (esp. Intacct) are quote/tier-based;
 * defer all figures to Sage. Independent firm — not Intuit, not Sage. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "The honest summary." — one-paragraph plain read, preference disclosed.
  summary: [
    "Let&rsquo;s be transparent: we&rsquo;re <strong>Certified QuickBooks ProAdvisors</strong>, so we have a preference &mdash; and we&rsquo;ll be fair to Sage anyway. <strong>QuickBooks Online</strong> is built for ease of use and is the default for U.S. small business: it carries the largest U.S. ProAdvisor and accountant ecosystem, the deepest app marketplace, and the lowest complexity for a typical SMB &mdash; which also makes it the easiest platform to staff and get help with. <strong>Sage</strong> isn&rsquo;t a single product. <strong>Sage Business Cloud Accounting</strong> and <strong>Sage 50</strong> are its small-business tools (Sage 50 is more desktop-rooted and traditional) and compete with QBO head-on; <strong>Sage Intacct</strong> is a genuine step up &mdash; cloud financial management for mid-market companies with heavy multi-entity consolidation, dimensional reporting, and industry depth in areas like construction and manufacturing. The honest read: most U.S. small businesses are better served by QuickBooks Online. But a business with mid-market or ERP-like requirements, or a complex multi-entity structure, may genuinely be better off on Sage Intacct &mdash; and we&rsquo;ll tell you when that&rsquo;s the case rather than force-fit QBO.",
  ],
  // quick-5 — "in five questions." Short questions deliberately NOT identical to
  // any FAQ question, to clear the faq-overlap check.
  aiSummary: [
    { q: "What&rsquo;s the core difference?", a: "<strong>QuickBooks Online</strong> is one focused cloud product built for small-business ease of use and ubiquity in the U.S. <strong>Sage</strong> is a family of products spanning small business (Sage Business Cloud Accounting, Sage 50) up to mid-market cloud financial management (Sage Intacct). QBO is the simpler, more widely supported choice for typical SMBs; Sage Intacct reaches further into complex, multi-entity, ERP-like territory." },
    { q: "We&rsquo;re ProAdvisors &mdash; are you biased toward QuickBooks?", a: "We hold a genuine preference for QuickBooks Online, and we say so plainly. We also try to be fair: Sage has real strengths, especially Sage Intacct for mid-market and multi-entity accounting. Our standard is to recommend QBO when it&rsquo;s the right fit &mdash; which for most U.S. small businesses it is &mdash; and to tell you when Sage (usually Intacct) is the better platform for where you&rsquo;re headed." },
    { q: "Where does QuickBooks Online genuinely win?", a: "Ease of use, U.S. small-business ubiquity, the largest U.S. ProAdvisor and accountant ecosystem, and the broadest app marketplace. For a typical SMB that means lower complexity, easier hiring and support, and a deep bench of professionals who already know the platform &mdash; including every Certified ProAdvisor at TechBrot." },
    { q: "Where does Sage genuinely win?", a: "Scaling into more complex, mid-market accounting through <strong>Sage Intacct</strong> &mdash; strong multi-entity consolidation, dimensional reporting, and industry depth in areas like construction and manufacturing. Sage&rsquo;s small-business products (Business Cloud Accounting, Sage 50) compete with QBO, but Sage&rsquo;s clearest advantage shows up when a business has genuinely outgrown small-business software." },
    { q: "How do they price?", a: "QuickBooks Online uses published monthly subscription tiers. Sage&rsquo;s products are tier- and quote-based &mdash; especially Sage Intacct, which is typically quoted to the engagement &mdash; so we don&rsquo;t publish Sage figures here; get current pricing directly from Sage. The platform decision should be driven by fit and complexity, not headline price alone." },
  ],
  // vs-table — 12-dimension comparison rendered as the tier-signature vs-scroll +
  // vs-table. "us"/qbo = QuickBooks Online column. sage = neutral/Sage cells.
  // NO fabricated Sage pricing — figures deferred to Sage.
  vsTable: [
    { cap: "Product shape", qbo: "One focused cloud product for small business", sage: "A family: Business Cloud Accounting, Sage 50, Sage Intacct" },
    { cap: "Best-fit buyer", qbo: "Typical U.S. small &amp; growing businesses", sage: "Small biz (Sage 50 / Business Cloud) up to mid-market (Intacct)" },
    { cap: "Ease of use", qbo: "Built for non-accountants; gentle learning curve", sage: "Small-biz tools approachable; Intacct is more advanced" },
    { cap: "U.S. market ubiquity", qbo: "Dominant U.S. small-business standard", sage: "Strong globally; smaller U.S. small-business footprint" },
    { cap: "ProAdvisor / accountant ecosystem", qbo: "Largest U.S. ProAdvisor &amp; accountant network", sage: "Sage advisor network; smaller U.S. small-business pool" },
    { cap: "App marketplace", qbo: "Very large third-party app ecosystem", sage: "Solid integrations; Intacct strong on financial add-ons" },
    { cap: "Multi-entity consolidation", qbo: "Limited natively; workarounds at scale", sage: "Sage Intacct is genuinely strong here" },
    { cap: "Dimensional / advanced reporting", qbo: "Good for SMB; tighter at the high end", sage: "Sage Intacct offers deep dimensional reporting" },
    { cap: "Industry depth", qbo: "Broad horizontal SMB coverage", sage: "Strong verticals (e.g. construction, manufacturing)" },
    { cap: "Cloud vs desktop", qbo: "Cloud-native", sage: "Cloud (Business Cloud, Intacct) and desktop-rooted (Sage 50)" },
    { cap: "Scales toward ERP", qbo: "Tops out before true ERP needs", sage: "Sage Intacct approaches ERP-class financial management" },
    { cap: "Pricing model", qbo: "Published monthly subscription tiers", sage: "Tier- and quote-based; Intacct typically quoted &mdash; see Sage" },
  ],
  // 3 verdict profiles — buyer-cards. Per mandate: "Choose QuickBooks Online if"
  // (typical SMB) / "Sage is the better fit if" (mid-market/complex/multi-entity →
  // Intacct; certain industries) / "You may be outgrowing QBO when".
  verdict: [
    { eyebrow: "Choose QuickBooks Online if", name: "You&rsquo;re a typical U.S. small business that values ease and support.", body: "You want or already use <strong>QuickBooks Online</strong>; you value <strong>ease of use</strong> and a gentle learning curve; you want the <strong>largest U.S. ProAdvisor and accountant ecosystem</strong> behind your books so help is easy to find; you need a <strong>deep app marketplace</strong> for the tools your business already runs; your structure is a <strong>single entity or a couple of simple ones</strong>; and you want lower complexity and easier hiring. For the large majority of U.S. small businesses, this is the right call &mdash; and it&rsquo;s the platform every Certified ProAdvisor at TechBrot works in daily." },
    { eyebrow: "Sage is the better fit if", name: "Your needs are mid-market, complex, or heavily multi-entity.", body: "You have <strong>mid-market or ERP-like requirements</strong> that small-business software strains under; you need <strong>strong multi-entity consolidation</strong> across many companies; you rely on <strong>dimensional, advanced financial reporting</strong>; or you operate in an industry where Sage has real depth, such as <strong>construction or manufacturing</strong>. In these cases <strong>Sage Intacct</strong> is the honest recommendation &mdash; it&rsquo;s built for exactly this, and we&rsquo;ll say so rather than force-fit QBO. (Sage&rsquo;s small-business tools, Business Cloud Accounting and Sage 50, also remain reasonable options against QBO.)" },
    { eyebrow: "You may be outgrowing QBO when", name: "The signals say small-business software no longer fits.", body: "Watch for these: you&rsquo;re <strong>manually consolidating several entities</strong> every close; you&rsquo;re bolting on spreadsheets to get the <strong>dimensional reporting</strong> leadership wants; transaction volume and complexity make QBO <strong>slow or fragile</strong>; you need <strong>tighter audit, controls, or revenue-recognition</strong> than QBO supports; or finance is hiring a controller-level team. When several of these are true, it&rsquo;s worth evaluating a step up &mdash; often <strong>Sage Intacct</strong> or another mid-market platform. We&rsquo;ll give you an honest read on whether you&rsquo;re there yet." },
  ],
  // page-review prose + trust-row — "Reviewed by the TechBrot Certified ProAdvisor team."
  reviewProse: [
    "This comparison is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm. We disclose our preference for QuickBooks Online openly and have written each section to stay fair to Sage&rsquo;s genuine strengths &mdash; particularly Sage Intacct for mid-market, multi-entity, and complex accounting. &ldquo;Sage&rdquo; is described as a family of products (Sage Business Cloud Accounting, Sage 50, and Sage Intacct), not a single tool. We do not publish Sage pricing, because Sage products &mdash; especially Intacct &mdash; are tier- and quote-based; get current figures directly from Sage. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files.",
  ],
  reviewSpec: [
    { value: "Active", label: "Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Disclosed", label: "ProAdvisor preference for QuickBooks Online stated openly" },
    { value: "Fair", label: "Sage strengths (Intacct, multi-entity, industry depth) stated honestly" },
    { value: "Independent", label: "firm &mdash; not affiliated with Intuit Inc. or The Sage Group plc" },
  ],
  // related — BUILT-or-same-wave comparisons only.
  related: [
    { title: "QuickBooks Online vs Xero", href: "/quickbooks/compare/quickbooks-vs-xero/", body: "The other major small-business cloud alternative. A fair read on ease of use, ecosystem, and where each genuinely fits." },
    { title: "QuickBooks Enterprise", href: "/quickbooks/enterprise/", body: "Intuit&rsquo;s top-tier option for larger and more complex QuickBooks businesses &mdash; a step up before you reach mid-market platforms like Sage Intacct." },
    { title: "All QuickBooks comparisons", href: "/quickbooks/compare/", body: "The full library of TechBrot QuickBooks comparisons against the alternatives, written with the same honest, preference-disclosed read each time." },
  ],
  // 6 FAQ — flat prose answers (faq[6-7]). Questions distinct from the quick-5.
  faq: [
    { q: "Is QuickBooks Online or Sage better for a small business?", a: "For most U.S. small businesses, QuickBooks Online &mdash; and we&rsquo;ll be upfront that we&rsquo;re Certified ProAdvisors, so we lean that way. The practical reasons hold up independently of our preference: QBO is easier to use, it&rsquo;s the U.S. small-business standard, it has the largest pool of ProAdvisors and accountants who already know it, and it has the deepest app marketplace. Sage&rsquo;s small-business products (Sage Business Cloud Accounting and the more traditional, desktop-rooted Sage 50) are reasonable, but for a typical U.S. small business the ecosystem and ease-of-use advantages usually tip it to QuickBooks Online." },
    { q: "What exactly is &ldquo;Sage,&rdquo; since people compare it to QuickBooks as if it&rsquo;s one product?", a: "Sage is a family of products, not a single application, which is why a blunt &ldquo;QuickBooks vs Sage&rdquo; comparison can mislead. Sage Business Cloud Accounting is a cloud small-business tool that competes with QuickBooks Online directly. Sage 50 is older and desktop-rooted, more traditional in feel. Sage Intacct is the meaningfully different one: cloud financial management aimed at mid-market companies, with strong multi-entity consolidation and dimensional reporting, approaching ERP territory. When we say Sage may be the better fit, we almost always mean Sage Intacct for businesses that have outgrown small-business software." },
    { q: "When is Sage genuinely the better choice over QuickBooks Online?", a: "When your needs are genuinely mid-market or complex. The clearest signals are heavy multi-entity consolidation, a need for dimensional or advanced financial reporting, ERP-like requirements around controls and revenue recognition, or operating in an industry where Sage has real depth such as construction or manufacturing. In those cases Sage Intacct is built for the job in a way small-business software isn&rsquo;t, and we&rsquo;ll recommend it honestly. For straightforward small-business accounting, though, QuickBooks Online is usually the better and simpler choice." },
    { q: "How does pricing compare between QuickBooks Online and Sage?", a: "QuickBooks Online publishes monthly subscription tiers, so its pricing is easy to look up. Sage&rsquo;s products are tier- and quote-based &mdash; especially Sage Intacct, which is typically quoted to your specific engagement &mdash; so we deliberately don&rsquo;t publish Sage figures here; the right move is to get current pricing directly from Sage. More importantly, the platform decision should be driven by fit and complexity rather than headline price: a cheaper tool that doesn&rsquo;t fit your structure costs far more in workarounds than the subscription ever saves." },
    { q: "Can TechBrot help if we&rsquo;re deciding between QuickBooks Online and Sage?", a: "Yes. We&rsquo;ll give you an honest read in a discovery call: where your business is, how complex your structure really is, and whether QuickBooks Online fits or whether you&rsquo;re heading into territory where Sage Intacct (or another mid-market platform) makes more sense. We&rsquo;re ProAdvisors and we prefer QBO, but our standard is to tell you the truth about fit rather than push the platform we happen to specialize in. If QBO is right, we scope a fixed-fee engagement; if it isn&rsquo;t, we&rsquo;ll point you in the right direction." },
    { q: "Are you affiliated with Sage or Intuit?", a: "No. TechBrot Inc. is an independent firm. We are Certified QuickBooks ProAdvisors, which is an Intuit credential, but we are not affiliated with, employed by, or speaking for Intuit Inc. We have no affiliation with The Sage Group plc either. Our preference for QuickBooks Online comes from our ProAdvisor expertise and what we see work for U.S. small businesses &mdash; not from any relationship with either company &mdash; and we disclose it so you can weigh our read accordingly." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/compare/quickbooks-vs-sage/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#cmp-qb-vs-sage-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Compare","item":"https://techbrot.com/quickbooks/compare/"},
          {"@type":"ListItem","position":4,"name":"QuickBooks vs Sage","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

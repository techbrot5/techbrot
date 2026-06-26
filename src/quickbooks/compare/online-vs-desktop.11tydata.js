/* /quickbooks/compare/online-vs-desktop/ — t-mofu COMPARISON page. Cloned from
 * vs/techbrot-vs-bench (structure) with the two Bench-only sections dropped
 * (benchStatus disclosure + migration process-diagram).
 *
 * CURRENCY/HONESTY (today 2026-06): QuickBooks Online = cloud, subscription,
 * multi-device, auto-updated, large app ecosystem, actively developed by Intuit.
 * QuickBooks Desktop = locally installed, traditional, strong batch entry and
 * industry/inventory depth (Premier/Enterprise), local data file.
 *
 * CRITICAL CURRENT FACT (stated plainly): as of 2024 Intuit STOPPED SELLING new
 * QuickBooks Desktop Pro / Premier Plus subscriptions to most new U.S. customers
 * — Intuit has moved cloud-first. Existing Desktop subscribers and QuickBooks
 * Enterprise continue, but a NEW business generally cannot buy Desktop Pro/Premier
 * and should plan on Online. Fair counter: Desktop/Enterprise still suits specific
 * cases (industry-specific features, very large data files, batch-heavy workflows,
 * businesses already on it).
 *
 * PRICING: no fabricated specific figures. Describe subscription vs the old license
 * model qualitatively; defer figures to Intuit; canonical TechBrot pricing only.
 * Independent firm — not affiliated with Intuit Inc. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  // "The honest summary." — one-paragraph plain read (TL;DR prose).
  summary: [
    "<strong>QuickBooks Online</strong> is the cloud version: you reach your books from any browser or the mobile app, on any device, with updates applied automatically and no file to install or back up yourself. It connects to a large and actively maintained ecosystem of third-party apps for payments, payroll, inventory, time tracking, and reporting, and Intuit puts the bulk of its development effort here. <strong>QuickBooks Desktop</strong> is the traditional locally installed program: the data lives in a file on your own machine or server, the interface is built for fast keyboard-driven and batch entry, and Premier and Enterprise carry deep industry-specific and inventory features that some businesses genuinely rely on. The decisive 2026 fact is structural, not just a preference: <strong>as of 2024 Intuit stopped selling new QuickBooks Desktop Pro and Premier Plus subscriptions to most new U.S. customers</strong>, having moved cloud-first. Existing Desktop subscribers keep their product, and QuickBooks Enterprise continues to be sold, but a brand-new business generally cannot buy Desktop Pro or Premier today and should plan on Online. For most new businesses, that settles it. Desktop and Enterprise still make sense for specific cases &mdash; certain industry tooling, very large data files, batch-heavy workflows, or a business already running well on Desktop &mdash; and we&rsquo;ll tell you honestly which one fits yours.",
  ],
  // quick-5 — "in five questions." Short questions deliberately NOT identical to
  // any FAQ question, to clear the faq-overlap check.
  aiSummary: [
    { q: "What&rsquo;s the core difference?", a: "<strong>QuickBooks Online</strong> runs in the cloud as a subscription you reach from any device, with automatic updates and a large app ecosystem. <strong>QuickBooks Desktop</strong> is installed locally, with the data in a file on your own machine or server, traditional batch entry, and deep industry/inventory features in Premier and Enterprise. They&rsquo;re the same brand built on two different models." },
    { q: "Can a new business still buy QuickBooks Desktop?", a: "Generally no. As of 2024 Intuit stopped selling new QuickBooks Desktop Pro and Premier Plus subscriptions to most new U.S. customers as part of a cloud-first shift. Existing Desktop subscribers keep their product and QuickBooks Enterprise is still sold, but a brand-new business usually cannot buy Desktop Pro or Premier and should plan on Online." },
    { q: "Which one is right for most new businesses?", a: "QuickBooks Online, for most. It&rsquo;s what new businesses can actually buy, it&rsquo;s accessible from anywhere, it updates itself, and its app ecosystem covers the common needs &mdash; payments, payroll, inventory, reporting. The main exceptions are businesses that depend on Desktop-only or Enterprise-only industry features, very large data files, or batch-heavy workflows." },
    { q: "Does Desktop still make sense for anyone?", a: "Yes, for specific cases. Some businesses rely on industry-specific tooling in Premier or Enterprise, run very large data files, or work in batch-heavy ways that suit Desktop&rsquo;s entry model &mdash; and businesses already running well on Desktop often have no urgent reason to move. We assess it honestly rather than pushing a migration you don&rsquo;t need." },
    { q: "How do the costs compare?", a: "The models differ rather than just the price. Online is a recurring monthly subscription per company file, scaled by plan tier. Desktop historically used an annual license or subscription tied to a major version. We don&rsquo;t quote Intuit&rsquo;s figures here because they change &mdash; check Intuit for current pricing. TechBrot&rsquo;s own service fees are separate and follow our published pricing." },
  ],
  // vs-table — 12-dimension comparison. "qbo" = QuickBooks Online column,
  // "qbd" = QuickBooks Desktop column. concede text = neutral cells.
  vsTable: [
    { cap: "Where it runs", qbo: "Cloud &mdash; any browser or mobile app", qbd: "Installed locally on a machine or server" },
    { cap: "Access", qbo: "Anywhere, any device, multiple users concurrently", qbd: "On the installed machine or via hosting/remote setup" },
    { cap: "Data location", qbo: "Hosted by Intuit; nothing to install", qbd: "Local company file you store and back up yourself" },
    { cap: "Updates", qbo: "Automatic &mdash; always on the current version", qbd: "Manual upgrades tied to major annual versions" },
    { cap: "App &amp; integration ecosystem", qbo: "Large, actively developed third-party app marketplace", qbd: "Narrower; some add-ons, fewer modern integrations" },
    { cap: "Intuit development focus", qbo: "Primary focus &mdash; cloud-first roadmap", qbd: "Maintained, but no new Pro/Premier sales to most new U.S. customers" },
    { cap: "Availability to new businesses", qbo: "Fully available to buy", qbd: "Pro/Premier closed to most new U.S. buyers since 2024; Enterprise still sold" },
    { cap: "Batch &amp; keyboard entry", qbo: "Improving, but lighter than Desktop", qbd: "Strong &mdash; fast batch and keyboard-driven workflows" },
    { cap: "Industry &amp; inventory depth", qbo: "Solid; advanced inventory on higher tiers", qbd: "Deep industry editions and inventory in Premier/Enterprise" },
    { cap: "Very large data files", qbo: "Handles most SMB volumes in the cloud", qbd: "Enterprise built for very large files and high record counts" },
    { cap: "Pricing model", qbo: "Recurring monthly subscription per company file", qbd: "Historically annual license/subscription per version" },
    { cap: "Best general fit", qbo: "Most new and growing businesses", qbd: "Specific industry, batch, or large-file cases &mdash; or already on it" },
  ],
  // 3 verdict profiles — buyer-cards.
  verdict: [
    { eyebrow: "Choose QuickBooks Online if", name: "You&rsquo;re a new or growing business that wants to work from anywhere.", body: "You&rsquo;re <strong>starting fresh</strong> (and so generally can&rsquo;t buy Desktop Pro/Premier anyway), you want <strong>access from any device</strong> for yourself, your team, and your accountant, you value <strong>automatic updates</strong> and no file to maintain, and you want the <strong>large, actively developed app ecosystem</strong> for payments, payroll, inventory, and reporting. For the majority of new businesses, Online is both the practical and the available choice &mdash; and where Intuit is putting its development effort." },
    { eyebrow: "Desktop / Enterprise still fits if", name: "You depend on Desktop-class industry, inventory, or batch features.", body: "You rely on <strong>industry-specific tooling</strong> in Premier or Enterprise, you run <strong>very large data files</strong> or high record counts that suit Enterprise, you work in <strong>batch-heavy, keyboard-driven</strong> ways that Desktop does best, or your business <strong>already runs well on Desktop</strong> with no pressing reason to move. Existing Desktop subscribers keep their product and Enterprise is still sold &mdash; if it genuinely fits, staying can be the right call. We&rsquo;ll tell you honestly when it is." },
    { eyebrow: "It may be time to migrate if", name: "You&rsquo;re on Desktop and feeling the cloud-first wind-down.", body: "You&rsquo;re on <strong>Desktop Pro or Premier</strong> and want a path that isn&rsquo;t narrowing, you need <strong>remote or multi-location access</strong> Desktop makes awkward, you keep hitting <strong>integration gaps</strong> the Online app ecosystem would close, or you simply want to get ahead of Intuit&rsquo;s direction. A planned move protects your history and your reporting. See our <a href=\"/quickbooks/migration/desktop-to-online/\">Desktop-to-Online migration</a> guidance, and review the <a href=\"/quickbooks/desktop/support-end-dates/\">Desktop support end dates</a> before you decide." },
  ],
  // page-review prose + trust-row.
  reviewProse: [
    "This comparison is maintained by the Certified QuickBooks ProAdvisor team at <strong>TechBrot Inc.</strong>, an independent ProAdvisor firm &mdash; not affiliated with Intuit Inc. The product facts &mdash; that QuickBooks Online is cloud-based and subscription-priced, that QuickBooks Desktop is locally installed, and that as of 2024 Intuit stopped selling new Desktop Pro and Premier Plus subscriptions to most new U.S. customers while continuing existing subscriptions and QuickBooks Enterprise &mdash; reflect Intuit&rsquo;s publicly documented product availability as of the review date. We deliberately do not quote Intuit&rsquo;s prices or edition specs, which change; defer to Intuit for current figures. TechBrot performs bookkeeping and QuickBooks work and coordinates with your CPA, who files.",
  ],
  reviewSpec: [
    { value: "Active", label: "Intuit ProAdvisor &mdash; QBO L2, Desktop, Enterprise, Payroll" },
    { value: "Current", label: "Desktop availability stated per Intuit&rsquo;s public documentation as of review date" },
    { value: "Neutral", label: "no reseller or referral incentive in either direction" },
    { value: "Independent", label: "firm &mdash; not affiliated with Intuit Inc." },
  ],
  // related comparisons / reading — BUILT-only links.
  related: [
    { title: "QuickBooks Desktop to Online migration", href: "/quickbooks/migration/desktop-to-online/", body: "The practical path off Desktop &mdash; what transfers cleanly, what gets rebuilt, and how to protect your history and reporting through the move." },
    { title: "QuickBooks Desktop support end dates", href: "/quickbooks/desktop/support-end-dates/", body: "When Intuit ends support and connected-services access for each Desktop version &mdash; the dates that drive your timing if you&rsquo;re still on Desktop." },
    { title: "All QuickBooks comparisons", href: "/quickbooks/compare/", body: "The full library of honest QuickBooks edition and product comparisons, written with the same independent read each time." },
  ],
  // FAQ — flat prose answers, NO lists (founder rule for faq[6-7]).
  faq: [
    { q: "What is the main difference between QuickBooks Online and QuickBooks Desktop?", a: "QuickBooks Online is the cloud version: you reach it from any browser or the mobile app, on any device, with updates applied automatically and no file to install or back up. QuickBooks Desktop is the traditional locally installed program, with the data in a company file on your own machine or server, a faster batch-entry interface, and deeper industry and inventory features in the Premier and Enterprise editions. They share the QuickBooks brand but are built on two different models &mdash; cloud subscription versus local install." },
    { q: "Can I still buy QuickBooks Desktop in 2026?", a: "Generally not as a new business. As part of a cloud-first shift, Intuit stopped selling new QuickBooks Desktop Pro and Premier Plus subscriptions to most new U.S. customers in 2024. Existing Desktop subscribers continue to be supported and can keep using and renewing their product, and QuickBooks Enterprise is still sold, but a brand-new business usually cannot buy Desktop Pro or Premier and should plan on QuickBooks Online. We always confirm current availability with Intuit before advising, since these terms can change." },
    { q: "Which should a new business choose?", a: "For most new businesses, <a href=\"/quickbooks/online/\">QuickBooks Online</a> &mdash; both because it is what you can actually buy and because it is where the product is going. It is accessible from anywhere, updates itself, and connects to a large app ecosystem for payments, payroll, inventory, and reporting. The realistic exceptions are businesses that need a Desktop-only or Enterprise-only industry feature, run very large data files, or work in batch-heavy ways, where Enterprise may still be the better starting point even though it costs more to set up and run. If you&rsquo;re weighing the two for your specific situation, a ProAdvisor can talk it through &mdash; <a href=\"tel:+18777515575\">(877) 751-5575</a>." },
    { q: "Is QuickBooks Desktop being discontinued entirely?", a: "Not entirely, and it is fair to be precise about this. Intuit has narrowed Desktop rather than killed it: it stopped selling new Pro and Premier subscriptions to most new U.S. customers in 2024, but it continues to support existing Desktop subscribers and continues to sell QuickBooks Enterprise. The direction is unmistakably cloud-first, so a Desktop user should plan ahead, but it is not accurate to say Desktop has been shut off. Check the support end dates for your specific version to understand your own timeline." },
    { q: "Is QuickBooks Online or Desktop cheaper?", a: "The two use different cost models, so a single answer would be misleading. Online is a recurring monthly subscription per company file, scaled by plan tier, while Desktop historically used an annual license or subscription tied to a major version. We deliberately avoid quoting Intuit&rsquo;s exact figures here because they change over time, so the right move is to check Intuit for current pricing on the specific edition you are considering. TechBrot&rsquo;s own service fees are separate from Intuit&rsquo;s software cost and follow our published pricing." },
    { q: "Will my data move cleanly if I switch from Desktop to Online?", a: "Most of it transfers, and a planned migration protects what matters &mdash; your transaction history, your chart of accounts, and your reporting. Some Desktop-specific features and certain lists do not map one-to-one to Online, so part of a good migration is rebuilding those deliberately and reconciling the result rather than assuming a perfect copy. That is exactly the kind of work a ProAdvisor handles, and our <a href=\"/quickbooks/migration/desktop-to-online/\">Desktop-to-Online migration</a> guidance walks through what transfers, what gets rebuilt, and how to verify the file is right before you rely on it." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/compare/online-vs-desktop/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#cmp-online-vs-desktop-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Compare","item":"https://techbrot.com/quickbooks/compare/"},
          {"@type":"ListItem","position":4,"name":"Online vs Desktop","item":url}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

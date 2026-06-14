/* /quickbooks/desktop/ — t-mofu PRODUCT page (replicates the online.njk pattern,
 * approved as the product proving page). Sources: old root HTML
 * quickbooks/desktop/index.html (full body read) — title/meta/8-FAQ/schema
 * (CollectionPage+BreadcrumbList+ItemList of 4 editions+FAQPage). Product
 * positioning is HONEST: 4 Desktop editions (Pro Plus / Premier Plus / Mac Plus /
 * Enterprise) + the sunset/wind-down reality + who still needs Desktop + when to
 * migrate + honest cost (no specific $ figures, per the source FAQ) + how TechBrot
 * helps. The ItemList equity (4 editions) is preserved BOTH as the visible vs-table
 * and in the FAQPage/ItemList schema graph. CTA TIER (founder ruling 2 — t-mofu
 * products): file-review PRIMARY; discovery-call secondary; phone tertiary.
 * quick-5 q1 reworded ("QuickBooks Desktop — what is it?") to clear the FAQ-overlap
 * check vs FAQ "What is QuickBooks Desktop?". Firm-level authorship — no personal
 * name in visible content. Components stay in-manifest: byline-block, vs-table,
 * buyer-card, stack-8, faq accordion, meta-reviewed. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "Desktop editions we support — Pro Plus, Premier Plus, Mac Plus, Enterprise" },
    { value: "40", label: "Enterprise user maximum — the deepest Desktop tier Intuit still develops" },
    { value: "0", label: "affiliate or referral commission on Desktop or QBO subscriptions" },
  ],
  credentials: [
    "Every TechBrot operator holds active Certified QuickBooks Desktop ProAdvisor credentials &mdash; plus Enterprise, Online (Level 2), and Payroll &mdash; so the same team supports your Desktop file today and your migration to Online when the time is right.",
    "We earn nothing from your QuickBooks subscription &mdash; no Desktop license fees, no QBO referral commissions, no affiliate revenue &mdash; so the recommendation reflects what fits your business, not what pays us.",
    "One firm handles the full Desktop lifecycle &mdash; file cleanup, multi-user and hosting issues, version upgrades, ongoing bookkeeping, and migration &mdash; so your file context stays in one place.",
  ],
  definition: [
    "QuickBooks Desktop is Intuit&rsquo;s locally installed small-business accounting software &mdash; the traditional alternative to <a href=\"/quickbooks/online/\">QuickBooks Online</a>, sold in four US editions: <strong>Pro Plus, Premier Plus, Mac Plus, and <a href=\"/quickbooks/enterprise/\">Enterprise</a></strong>. It runs on your own computer or local network rather than in a browser, stores your company file locally, and historically offered deeper functionality in certain areas &mdash; notably inventory, industry-specific features, and reporting flexibility &mdash; than QuickBooks Online. All editions are now on annual subscription pricing.",
    "Intuit has moved Desktop to subscription-only annual pricing, stopped selling several editions to new US subscribers, and concentrates new feature development in QBO. Older year-versions of Desktop reach service-discontinuation on a <strong>rolling annual schedule</strong> &mdash; typically losing payroll, payments, and security updates while the software itself still runs and historical files remain accessible. For most US small and mid-sized businesses, the practical question is no longer whether to move off Desktop, but <strong>when</strong>. TechBrot ProAdvisors handle Desktop file cleanup, multi-user and hosting issues, version upgrades, ongoing Desktop bookkeeping, and <a href=\"/quickbooks/migration/desktop-to-online/\">Desktop-to-Online migration</a> when the time is right. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc., no affiliate or referral commissions on Desktop or QBO subscriptions.",
  ],
  // quick-5 — q1 reworded vs FAQ "What is QuickBooks Desktop?" to clear faq-overlap.
  aiSummary: [
    { q: "QuickBooks Desktop &mdash; what is it?", a: "<strong>QuickBooks Desktop</strong> is Intuit&rsquo;s locally installed small-business accounting software &mdash; the predecessor to QBO. Four US editions: <strong>Pro Plus, Premier Plus, Mac Plus, Enterprise.</strong> Runs on your own computer or network; company file stored locally. Annual subscription pricing." },
    { q: "Is Desktop being discontinued?", a: "<strong>Gradually wound down, not discontinued in a single date.</strong> Intuit stopped selling several editions to new US subscribers; moved to subscription-only; new development concentrates in QBO; older year-versions reach service-discontinuation on a rolling annual schedule. The software still runs; Intuit-connected services stop." },
    { q: "Should I migrate to QBO?", a: "<strong>For most US businesses, eventually yes.</strong> Move now: cloud-first teams, QBO-fluent CPA, integration pressure, year-version near discontinuation. <strong>Stay for now</strong>: deep inventory, Enterprise-only features, accountant prefers Desktop. <a href=\"/quickbooks/migration/desktop-to-online/\">Plan deliberately</a>, not in a rush." },
    { q: "What editions exist?", a: "<strong>Pro Plus</strong>: entry tier, up to 3 users. <strong>Premier Plus</strong>: industry-specific editions, up to 5 users. <strong>Mac Plus</strong>: Mac-native, broadly Pro-equivalent. <strong><a href=\"/quickbooks/enterprise/\">Enterprise</a></strong>: mid-market, up to 40 users, advanced inventory and reporting &mdash; its own product positioning." },
    { q: "Can I keep using old Desktop?", a: "<strong>The software keeps running</strong> after its year-version reaches service-discontinuation. What stops: <strong>payroll updates, electronic payments, bank feeds, online backup, security patches.</strong> The company file stays accessible. The loss of <em>services</em>, not the software itself, is what forces most timelines." },
  ],
  // editions overview — stack-8 grid (preserves the editions-overview equity).
  editions: [
    { tier: "01 · Entry", name: "Pro Plus", body: "General small-business accounting. Up to 3 simultaneous users &mdash; the Desktop equivalent of QBO Essentials, broad fit, no industry specialization. <strong>Status:</strong> no longer sold to new US subscribers as standalone Pro; current users on subscription. <strong>Fits:</strong> general small businesses without industry-specific needs." },
    { tier: "02 · Industry editions", name: "Premier Plus", body: "Industry-specific editions &mdash; Contractor, Manufacturing &amp; Wholesale, Retail, Nonprofit, Professional Services, plus General Business. Adds inventory and forecasting beyond Pro. <strong>Users:</strong> up to 5 simultaneous. <strong>Status:</strong> no longer sold to new US subscribers as standalone; current users on subscription." },
    { tier: "03 · Mac users", name: "Mac Plus", body: "Mac-native Desktop, broadly Pro-equivalent in capability, designed for Mac-only environments &mdash; not all Windows features carry across. <strong>Users:</strong> up to 3 simultaneous. <strong>Status:</strong> still sold; subscription pricing. <strong>Fits:</strong> Mac-only businesses preferring local install over cloud." },
    { tier: "04 · Mid-market", name: "Enterprise", body: "Mid-market product, effectively a different tier from Pro/Premier/Mac. Up to 40 users, advanced inventory (FIFO, serial/lot tracking, multi-location), advanced reporting, industry editions. <strong>Status:</strong> still actively sold and developed &mdash; the Desktop product Intuit continues to invest in. See the <a href=\"/quickbooks/enterprise/\">Enterprise overview</a>." },
  ],
  // sunset/discontinuation reality — stack-8 cause/signal grid (NOT review-card).
  sunset: [
    { name: "It&rsquo;s a wind-down, not a shutdown.", body: "Intuit isn&rsquo;t setting a single &ldquo;Desktop ends&rdquo; date. It&rsquo;s gradually moving development to QBO, restricting Desktop sales, and pushing year-versions through annual service-discontinuation cycles &mdash; the pattern that&rsquo;s been running for years." },
    { name: "Service discontinuation is rolling and annual.", body: "Each year-version of Desktop reaches a service-discontinuation date roughly three years after release. When it does, Intuit-connected services stop &mdash; payroll, payments, bank feeds, online backup, security updates &mdash; but the software keeps running on what you have installed." },
    { name: "The software itself doesn&rsquo;t stop working.", body: "A discontinued year-version still opens. Your historical company file stays readable. You lose <em>services</em>, not <em>access</em>. For many businesses, that practical service loss is what forces migration timing &mdash; not the software ceasing to function." },
    { name: "New Desktop sales are restricted.", body: "Intuit has stopped selling Pro Plus and Premier Plus to new US subscribers as standalone products. Existing Desktop subscribers can continue; Mac Plus and Enterprise remain available for new purchases. The direction is unambiguous." },
    { name: "Enterprise is treated differently.", body: "<a href=\"/quickbooks/enterprise/\">QuickBooks Enterprise</a> is the Desktop product Intuit is still actively developing and selling to new customers. It has its own roadmap and pricing &mdash; the &ldquo;Desktop wind-down&rdquo; narrative applies less directly to Enterprise." },
    { name: "The honest play is deliberate, not panicked.", body: "Migrating because your year-version sunsets and your payroll stops means rushing under pressure. Migrating now, while you have time to verify and rebuild integrations, means doing it right. The window is closing; it isn&rsquo;t closed." },
  ],
  // who still needs Desktop — stack-8 grid.
  stay: [
    { num: "01", name: "Deep inventory or manufacturing", body: "Serious inventory complexity, multi-location stock, FIFO/LIFO/serialized tracking, work-in-progress, or manufacturing assemblies often fit Enterprise meaningfully better than QBO &mdash; and sometimes better than Pro/Premier on Desktop too. The right answer is often <a href=\"/quickbooks/enterprise/\">Enterprise</a>, not QBO." },
    { num: "02", name: "Industry-specific Premier workflows", body: "Contractor job-costing, nonprofit fund accounting, professional services time tracking &mdash; Premier&rsquo;s industry editions have feature depth that QBO doesn&rsquo;t fully replicate. If your business depends on these workflows, the cost of switching may exceed the benefit for now." },
    { num: "03", name: "Your CPA prefers Desktop", body: "Some US CPAs &mdash; particularly those serving construction, manufacturing, and certain professional services &mdash; still work primarily in Desktop. If your accountant is fluent in Desktop and explicitly prefers it for your engagement, that preference is worth weight in the decision." },
    { num: "04", name: "Inside your current service window", body: "If you&rsquo;re on a current year-version with no integration pressure and no immediate service-discontinuation deadline, there&rsquo;s no panic. Plan the migration deliberately within the next 12&ndash;18 months rather than rushing it this quarter." },
    { num: "05", name: "Bandwidth-constrained operations", body: "Businesses operating in low-connectivity environments or with intentionally air-gapped accounting setups still need locally installed software. Desktop runs without internet for daily operations &mdash; QBO doesn&rsquo;t." },
    { num: "06", name: "Mid-migration timing", body: "If you&rsquo;re in the middle of another major system change &mdash; a CRM migration, an ERP implementation, a payroll-provider switch &mdash; piling a QuickBooks migration on top of it is rarely the right play. Stay on Desktop, finish the other project, then migrate cleanly." },
  ],
  // when to migrate — stack-8 grid.
  migrate: [
    { name: "Cloud-first or remote teams", body: "If your team works from multiple locations, needs real-time multi-user access, or is fundamentally remote-first, Desktop&rsquo;s install-bound model is fighting how you operate. QBO&rsquo;s native cloud architecture matches modern workflows. Migration cost pays back in productivity quickly." },
    { name: "Your CPA or accountant works in QBO", body: "Most US CPAs now work primarily in QBO. If your accountant is already QBO-fluent &mdash; or has signaled they&rsquo;d prefer you on it &mdash; the migration removes friction at month-end and tax time and usually saves on professional fees long-term." },
    { name: "Year-version near service-discontinuation", body: "If your Desktop year-version is approaching its rolling service-discontinuation date (typically ~3 years after release), the loss of payroll, payments, and security updates is the practical forcing function. <strong>Migrate now, on your terms, before the deadline drives the timeline.</strong>" },
    { name: "Integration pressure", body: "The app and integration ecosystem is moving to QBO. If you depend on modern e-commerce, payments, receipt capture, or reporting tools, and they&rsquo;re increasingly QBO-first or QBO-only, staying on Desktop is fighting your own stack." },
  ],
  // how TechBrot helps / "can TechBrot help" — stack-8 grid with service links.
  services: [
    { name: "Desktop file cleanup", href: "/quickbooks/cleanup/", body: "H-series errors, 6000-series errors, multi-user lockouts, file corruption, reconciliation drift, undeposited-funds backlog. The work Intuit support doesn&rsquo;t do." },
    { name: "Multi-user &amp; hosting issues", href: "/quickbooks/cleanup/", body: "Network configuration, hosting setup, user permissions, multi-user mode repair &mdash; the Desktop-specific operational problems that don&rsquo;t exist in QBO." },
    { name: "Year-end &amp; version upgrades", href: "/quickbooks/setup/", body: "Year-end rollovers, year-version upgrades, edition switches &mdash; validated against the file&rsquo;s prior state so nothing&rsquo;s lost in the transition." },
    { name: "Ongoing Desktop bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "Monthly close, reconciliation, and financial statements in your Desktop file &mdash; for the businesses staying on Desktop and needing professional bookkeeping support inside it." },
    { name: "Migration to Online", href: "/quickbooks/migration/desktop-to-online/", body: "When the time is right &mdash; full Desktop-to-Online migration with integrity verification, reconciliation, and integration rebuild. The verification step Intuit&rsquo;s free tool skips." },
    { name: "Honest fit assessment", href: "/quickbooks/file-review/?intent=file-review", body: "If you&rsquo;re unsure whether to stay or migrate, that&rsquo;s itself the engagement &mdash; a Certified ProAdvisor reviews your file, your operations, and your timeline and gives you a plain recommendation." },
  ],
  // vs-table — the 4 Desktop editions AS an honest comparison (preserves ItemList equity).
  vsTable: [
    { cap: "Simultaneous users", pro: "up to 3", premier: "up to 5", mac: "up to 3", ent: "up to 40" },
    { cap: "Industry-specific editions", pro: "no", premier: "yes", mac: "no", ent: "yes" },
    { cap: "Advanced inventory (FIFO, serial/lot)", pro: "no", premier: "basic", mac: "no", ent: "yes" },
    { cap: "Mac-native", pro: "no", premier: "no", mac: "yes", ent: "no" },
    { cap: "Still sold to new US subscribers", pro: "no", premier: "no", mac: "yes", ent: "yes" },
    { cap: "Actively developed by Intuit", pro: "no", premier: "no", mac: "limited", ent: "yes" },
  ],
  // buyer-card routing — t-mofu signature; "who still needs Desktop" vs "when to migrate".
  routing: [
    { opener: "&ldquo;We genuinely still need Desktop.&rdquo;", body: "Deep inventory, Premier industry workflows, a Desktop-fluent CPA, or operational reasons to stay &mdash; an honest stay-or-migrate read confirms it and supports the file you&rsquo;re on.", cta: "Get the free file review", href: "/quickbooks/file-review/?intent=file-review" },
    { opener: "&ldquo;It&rsquo;s time to plan the move.&rdquo;", body: "Cloud-first team, QBO-fluent CPA, integration pressure, or a year-version nearing service-discontinuation &mdash; plan the Desktop-to-Online migration deliberately, before a forced rush.", cta: "QuickBooks migration", href: "/quickbooks/migration/desktop-to-online/" },
    { opener: "&ldquo;Our Desktop file is a mess.&rdquo;", body: "File cleanup reconciles every account and documents what changed &mdash; H-series and 6000-series errors, multi-user lockouts, corruption, reconciliation drift, undeposited-funds backlog.", cta: "QuickBooks cleanup", href: "/quickbooks/cleanup/" },
  ],
  operatorSpec: [
    { value: "Desktop + Ent", label: "Desktop, Enterprise, Online (L2), and Payroll ProAdvisor certifications" },
    { value: "Zero", label: "commission — no Desktop, QBO, or Enterprise referral revenue" },
    { value: "Named", label: "ProAdvisor + platform-level quality review" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  faq: [
    { q: "What is QuickBooks Desktop?", a: "QuickBooks Desktop is Intuit&rsquo;s locally installed accounting software for small and mid-sized U.S. businesses &mdash; the predecessor and traditional alternative to the cloud-based QuickBooks Online. It runs on your own computer or local network rather than in a browser, stores your company file locally, and historically offered deeper functionality in certain areas (notably inventory, industry-specific features, and reporting flexibility) than QuickBooks Online. Desktop is sold in four editions in the US: Pro Plus, Premier Plus, Mac Plus, and Enterprise, all on annual subscription pricing." },
    { q: "Is QuickBooks Desktop being discontinued?", a: "QuickBooks Desktop is being gradually wound down rather than discontinued in a single date. Intuit has stopped selling several Desktop editions to new US subscribers, moved remaining Desktop products to subscription-only annual pricing, and concentrates new feature development in QuickBooks Online. Older year-versions of Desktop reach service-discontinuation dates on a rolling annual schedule (typically losing payroll, payments, and security updates), after which the software still runs but Intuit-connected services stop. Existing users typically retain read-only access to their company files beyond the active-service cutoff. For most US small and mid-sized businesses, the practical question is no longer whether to move off Desktop &mdash; it&rsquo;s when, and how deliberately." },
    { q: "Should I move from QuickBooks Desktop to QuickBooks Online?", a: "For most US small and mid-sized businesses, eventually yes &mdash; but not necessarily today, and not always in a rush. Businesses that fit the move now: cloud-first or remote teams, those whose CPA already works primarily in QBO, anyone relying on integrations that have moved or are moving to Online, and anyone whose Desktop year-version is approaching service-discontinuation. Businesses that may genuinely stay on Desktop for now: those with deep inventory or industry-specific features only available in <a href=\"/quickbooks/enterprise/\">Enterprise</a>, businesses still inside their current Desktop year-version&rsquo;s service window with no integration pressure, and those whose accountant prefers the Desktop workflow. The honest read is to plan the move on your terms rather than wait for a forced rush &mdash; and to use a <a href=\"/contact/?intent=quickbooks-desktop\">ProAdvisor&rsquo;s assessment</a> rather than guess." },
    { q: "What are the QuickBooks Desktop editions?", a: "There are four QuickBooks Desktop editions for US businesses. Pro Plus is the entry-tier for general small business accounting with up to 3 users. Premier Plus adds industry-specific features (contractor, manufacturing, wholesale, retail, nonprofit, and professional services editions) and supports up to 5 users. Mac Plus is the Mac-native version, broadly equivalent to Pro for Mac users. <a href=\"/quickbooks/enterprise/\">Enterprise</a> is the mid-market product, supporting up to 40 users with advanced inventory, advanced reporting, and industry-specific feature depth that goes well beyond Pro and Premier &mdash; it has its own positioning and pricing." },
    { q: "How much does QuickBooks Desktop cost?", a: "QuickBooks Desktop is sold on annual subscription pricing set by Intuit and adjusted periodically. Pro Plus, Premier Plus, and Mac Plus are typically priced in the several-hundred-dollars-per-year range per license, scaling with user count; Enterprise is priced significantly higher with its own tier structure. Because pricing changes annually and varies by edition, user count, and any promotional pricing, we don&rsquo;t publish specific dollar figures &mdash; check Intuit&rsquo;s current pricing directly, or ask a ProAdvisor for a read on which edition fits before subscribing." },
    { q: "Can I keep using my older QuickBooks Desktop after it&rsquo;s discontinued?", a: "Generally yes &mdash; the software itself doesn&rsquo;t stop working when its year-version reaches service-discontinuation. What stops is Intuit-connected services: payroll updates, electronic payments, bank feeds, online backup, and security patches. The software remains installable and your company file remains accessible, but you lose the ability to run integrated payroll, process payments through Intuit, and receive security updates. For most businesses, this practical loss of services &mdash; not the software itself stopping &mdash; is what forces the timeline. Read-only access to historical files typically remains available beyond the active-service window." },
    { q: "What&rsquo;s the difference between QuickBooks Desktop and QuickBooks Online?", a: "QuickBooks Desktop is locally installed software; <a href=\"/quickbooks/online/\">QuickBooks Online</a> is cloud-based and accessed via browser or mobile app. Desktop typically offers deeper inventory handling, more flexible reporting at lower tiers, and certain industry-specific features (especially in Enterprise) that QBO doesn&rsquo;t match. Online offers real-time multi-user cloud access, a larger native app integration ecosystem, automatic updates, and is the platform where Intuit is concentrating new feature development. For most US small and mid-sized businesses, Online is now the better default; for some &mdash; particularly businesses with deep inventory complexity or industry-specific Desktop workflows &mdash; Desktop or Enterprise still genuinely fits better." },
    { q: "Can TechBrot help with QuickBooks Desktop?", a: "Yes. TechBrot Certified ProAdvisors hold active Desktop and Enterprise certifications and support businesses currently on Desktop with <a href=\"/quickbooks/cleanup/\">file cleanup</a>, multi-user and hosting issues, year-end and version-upgrade verification, ongoing bookkeeping in Desktop files, and &mdash; when the time is right &mdash; <a href=\"/quickbooks/migration/desktop-to-online/\">migration to QuickBooks Online</a>. The independence point matters: we have no incentive to push you onto QBO before it makes sense, and no incentive to keep you on Desktop after it stops fitting. We assess each situation honestly." },
  ],
  related: [
    { title: "QuickBooks Online", href: "/quickbooks/online/", body: "The cloud-based successor &mdash; the right default for most US small businesses, and where most Desktop users will eventually land." },
    { title: "QuickBooks Enterprise", href: "/quickbooks/enterprise/", body: "The Desktop product Intuit is still actively developing &mdash; for mid-market businesses with deep inventory or advanced needs." },
    { title: "Desktop-to-Online migration", href: "/quickbooks/migration/desktop-to-online/", body: "The full migration done right &mdash; integrity verification, reconciliation, and integration rebuild." },
    { title: "Plan selector", href: "/quickbooks/which-plan-is-right/", body: "Complimentary advisory across all QuickBooks products &mdash; Desktop, Online, Enterprise &mdash; no commission, an honest answer." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/desktop/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbd-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Desktop","item":url}]},
        {"@type":"ItemList","@id":url+"#edition-list","name":"QuickBooks Desktop Editions","itemListElement":[
          {"@type":"ListItem","position":1,"name":"QuickBooks Desktop Pro"},
          {"@type":"ListItem","position":2,"name":"QuickBooks Desktop Premier"},
          {"@type":"ListItem","position":3,"name":"QuickBooks Desktop for Mac"},
          {"@type":"ListItem","position":4,"name":"QuickBooks Desktop Enterprise"}]},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

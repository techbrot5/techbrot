/* /quickbooks/online/ — t-mofu PRODUCT PROVING PAGE (round-21; the first product
 * page — gates desktop/enterprise replication, STOP after this for founder
 * approval of the product pattern). Sources: baseline.json (headings/8 FAQ/
 * CollectionPage+WebPage+Service+OfferCatalog+Offer+ItemList+FAQPage) + old root
 * HTML (full body read). Product positioning is HONEST: 4 plan tiers + who QBO
 * fits + where another product (Desktop/Enterprise/Xero/Self-Employed) fits better
 * + the full service lifecycle + integrations + the zero-commission independence
 * stance. CTA: product overview — book-call primary, file-review secondary, phone
 * tertiary (FLAGGED for founder: strict MOFU rule says file-review primary; a
 * product overview reads better with discovery-call primary — proving-page CTA
 * decision for ruling). quick-5 q1 reworded ("QuickBooks Online — what is it?") to
 * clear the FAQ-overlap check vs FAQ "What is QuickBooks Online?". Components stay
 * in-manifest (review-card/stack-8 — NOT the old hub-service-tile, not bundle-
 * defined). Firm-level authorship. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&lsquo;/g,"‘").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "L2", label: "QuickBooks Online ProAdvisor tier — the deepest QBO certification Intuit issues" },
    { value: "4", label: "QBO plan tiers we configure — Simple Start, Essentials, Plus, Advanced" },
    { value: "0", label: "commission on your QBO subscription — independent, no upsell incentive" },
  ],
  credentials: [
    "Every QBO engagement is delivered by a Certified ProAdvisor at Level 2 &mdash; the deepest QuickBooks Online certification Intuit issues.",
    "We earn nothing from your QBO subscription and hold no affiliate or referral relationship with Intuit &mdash; no incentive to push a higher tier than you need.",
    "One firm handles the full QBO lifecycle &mdash; plan selection, setup, migration, cleanup, and ongoing monthly bookkeeping &mdash; so your file context stays in one place.",
  ],
  definition: [
    "QuickBooks Online (QBO) is Intuit&rsquo;s cloud-based small-business accounting platform &mdash; the browser- and mobile-accessible successor to <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a>. It handles double-entry bookkeeping, bank-feed reconciliation, invoicing, bill pay, expense tracking, reporting, sales tax, and (with add-ons) <a href=\"/quickbooks/payroll/\">payroll</a>, payments, and inventory. QBO is sold as a subscription with four plan tiers &mdash; Simple Start, Essentials, Plus, and Advanced &mdash; and is the default Intuit product for new small-business customers, with Intuit concentrating new feature development in QBO rather than Desktop.",
    "It fits most U.S. small and mid-sized businesses well, but not all: businesses with deep inventory or industry-specific Desktop workflows sometimes still need Desktop or <a href=\"/quickbooks/enterprise/\">Enterprise</a>, and businesses with significant multi-currency or unlimited-user requirements sometimes fit Xero better &mdash; an honest read on which case you&rsquo;re in is what an independent ProAdvisor delivers. TechBrot operators hold QBO ProAdvisor Level 2 certifications and handle the full QBO lifecycle &mdash; <a href=\"/quickbooks/setup/\">setup</a>, <a href=\"/quickbooks/migration/desktop-to-online/\">migration from Desktop</a>, <a href=\"/quickbooks/migration/other-software-to-qb/\">migration from other platforms</a>, <a href=\"/quickbooks/cleanup/\">file cleanup</a>, and ongoing <a href=\"/accounting/bookkeeping/monthly-bookkeeping/\">monthly bookkeeping</a>. Independent ProAdvisor firm &mdash; not affiliated with Intuit Inc.",
  ],
  // quick-5 — q1 reworded vs FAQ "What is QuickBooks Online?" to clear faq-overlap.
  aiSummary: [
    { q: "QuickBooks Online &mdash; what is it?", a: "<strong>QuickBooks Online (QBO)</strong> is Intuit&rsquo;s cloud-based small-business accounting platform &mdash; browser- and mobile-accessible, sold by subscription. It handles bookkeeping, reconciliation, invoicing, bill pay, expenses, reporting, and sales tax, plus payroll/payments/inventory as add-ons. Four plan tiers: <strong>Simple Start, Essentials, Plus, Advanced.</strong>" },
    { q: "Online vs Desktop?", a: "Online: cloud, browser/mobile, real-time multi-user, a larger native app ecosystem, new features first. Desktop: locally installed, deeper inventory and industry-specific tools (especially Enterprise), runs offline &mdash; but moved to subscription-only and no longer receiving most new development. <strong>For most U.S. small businesses, Online is the better default.</strong>" },
    { q: "Which plan is right for me?", a: "Decided by three factors: <strong>user count, inventory needs, class/location tracking.</strong> Simple Start (solo, basic books); Essentials (small team + bill pay); <strong>Plus (most common</strong> &mdash; inventory, projects, classes/locations); Advanced (10+ users, automation, deeper reporting). A <a href=\"/quickbooks/which-plan-is-right/\">free plan-selection advisory</a> sorts it in one call." },
    { q: "How much does QBO cost?", a: "Pricing is set by Intuit and changes &mdash; check Intuit&rsquo;s current pricing directly for current figures. Historically it ranges from roughly $30/mo (Simple Start) to ~$200/mo (Advanced), with frequent promotional rates for new subscribers. <strong>The subscription is rarely the expensive part &mdash; setup decisions made in month one matter more.</strong>" },
    { q: "Is QBO worth it?", a: "<strong>Usually yes</strong> for U.S. small/mid-sized businesses &mdash; cloud access, multi-user, app ecosystem, U.S. CPA-friendly. <strong>Sometimes no</strong> &mdash; deep inventory may need Desktop/Enterprise; significant multi-currency or unlimited-user may favor <a href=\"/quickbooks/migration/quickbooks-to-xero/\">Xero</a>. <strong>An honest fit assessment sorts which case is yours.</strong>" },
  ],
  plans: [
    { tier: "01 · Entry", name: "Simple Start", body: "Single-user. Core bookkeeping, invoicing, expense tracking, bank feeds, sales-tax tracking, basic reports &mdash; the minimum-viable QBO file. <strong>Users:</strong> 1 (+2 accountant logins). <strong>Fits:</strong> solo freelancers, very small service businesses. <strong>Limits:</strong> no bill pay, no inventory, no classes." },
    { tier: "02 · Multi-user starter", name: "Essentials", body: "Three users. Adds bill management, multiple-currency tracking, and time-tracking &mdash; the first tier most growing businesses outgrow Simple Start into. <strong>Users:</strong> 3 (+2 accountant logins). <strong>Fits:</strong> small teams, bill-heavy operations. <strong>Limits:</strong> no inventory, no class/location, no projects." },
    { tier: "03 · Most common", name: "Plus", body: "Five users. Adds inventory tracking, projects, and class/location tracking &mdash; the features that take QBO from basic books to operational accounting. The most common tier for product businesses and any team needing departmental reporting. <strong>Users:</strong> 5 (+2 accountant logins). <strong>Adds:</strong> inventory, projects, class/location." },
    { tier: "04 · Larger SMB", name: "Advanced", body: "Twenty-five users. Adds workflow automation, batch invoicing, custom user roles, dedicated support, and deeper custom reporting &mdash; the right call when 5 Plus seats stop fitting and you need automation, not just more seats. <strong>Users:</strong> 25 (+3 accountant logins). <strong>Adds:</strong> automation, batch invoicing, custom roles, dedicated support." },
  ],
  fit: [
    { name: "Service businesses with standard needs.", body: "Consultancies, agencies, professional services, small B2B operations &mdash; the bookkeeping fundamentals fit cleanly inside Simple Start, Essentials, or Plus, and the U.S. accountant ecosystem is built around QBO." },
    { name: "Product businesses needing real inventory.", body: "E-commerce, small retail, and product-based businesses get genuine inventory tracking starting in Plus, with the QuickBooks app ecosystem providing strong Shopify, Amazon, and payment-processor integrations." },
    { name: "Teams that work remotely.", body: "QBO&rsquo;s cloud-native, multi-user, browser-and-mobile model matches how modern teams operate &mdash; bookkeepers, owners, and accountants can work in the same file in real time from anywhere." },
    { name: "Businesses that need their CPA to work in the file.", body: "Most U.S. CPAs and accountants are fluent in QBO. Accountant access is free on every plan, your tax preparer can review your books directly, and end-of-year handoff is smoother." },
    { name: "Companies needing departmental reporting.", body: "Class and location tracking in Plus and Advanced gives clean P&amp;L visibility by department, location, business line, or project &mdash; one of the most underused but high-value QBO features." },
    { name: "Businesses moving off Desktop.", body: "With Intuit transitioning Desktop to subscription-only and concentrating new features in QBO, most existing Desktop users will eventually move &mdash; <a href=\"/quickbooks/migration/desktop-to-online/\">migrating deliberately</a>, before a forced rush, is the right play." },
  ],
  notFit: [
    { alt: "→ Desktop / Enterprise", name: "Deep inventory or industry-specific workflows", body: "Businesses with serious inventory complexity, manufacturing, or industry-specific Desktop features sometimes still need <a href=\"/quickbooks/desktop/\">QuickBooks Desktop</a> or <a href=\"/quickbooks/enterprise/\">Enterprise</a>. QBO&rsquo;s inventory is adequate but not deep; if you genuinely need bin tracking, advanced costing methods, or industry-specific tools, Enterprise is often the right answer." },
    { alt: "→ Xero", name: "Significant multi-currency or unlimited users", body: "<a href=\"/quickbooks/migration/quickbooks-to-xero/\">Xero</a> fits some businesses better &mdash; particularly significant cross-border operations where its multi-currency handling is genuinely cleaner, or large teams where Xero&rsquo;s unlimited-user model (vs QBO&rsquo;s per-tier user caps) shifts the math. We&rsquo;ll say so honestly when that&rsquo;s your case." },
    { alt: "→ Simpler tool", name: "Sole proprietors with very simple needs", body: "Freelancers and Schedule C filers whose entire bookkeeping is &ldquo;income, expenses, mileage&rdquo; sometimes don&rsquo;t need full QBO &mdash; QuickBooks Self-Employed or a simpler tool can fit. The honest test: if you don&rsquo;t need a balance sheet, you may not need QBO." },
  ],
  services: [
    { name: "Plan selection", href: "/quickbooks/which-plan-is-right/", body: "Complimentary call with a ProAdvisor &mdash; an honest recommendation on which QBO tier fits, with no commission incentive. The cheapest part of the lifecycle, often the most consequential." },
    { name: "Setup &amp; onboarding", href: "/quickbooks/setup/", body: "Chart of accounts, bank feeds, payroll integration, sales-tax configuration, classes/locations, integrations &mdash; built right from day one so the file doesn&rsquo;t need cleanup later." },
    { name: "Migration from Desktop", href: "/quickbooks/migration/desktop-to-online/", body: "Full Desktop-to-Online migration with integrity verification and reconciliation &mdash; the verification step Intuit&rsquo;s free tool skips. Plus <a href=\"/quickbooks/migration/other-software-to-qb/\">migration from Xero, FreshBooks, Wave, Sage</a>, or spreadsheets." },
    { name: "File cleanup", href: "/quickbooks/cleanup/", body: "When QBO files develop problems &mdash; broken bank feeds, reconciliation drift, undeposited-funds backlog, duplicates &mdash; ProAdvisor repair brings the file back to a state you can trust." },
    { name: "Monthly bookkeeping", href: "/accounting/bookkeeping/monthly-bookkeeping/", body: "Ongoing monthly close in your QBO file &mdash; real reconciliation, a financial package delivered on schedule, a named operator, and CPA-ready books." },
    { name: "Workflow advisory", href: "/quickbooks/consulting/", body: "Workflow design, custom reporting, integration architecture, app-stack optimization &mdash; the engagements that make QBO genuinely operational rather than just functional." },
  ],
  ecosystem: [
    { tag: "Payroll", name: "Payroll", body: "<a href=\"/quickbooks/payroll/\">QuickBooks Payroll</a> integrates natively; Gusto, Rippling, and ADP integrate well for businesses where those fit better." },
    { tag: "AR / AP", name: "Payments", body: "QuickBooks Payments, Stripe, Square, PayPal, and bill-pay platforms like Bill.com and Melio for AR and AP automation." },
    { tag: "Commerce", name: "E-commerce", body: "Shopify, Amazon, WooCommerce, and BigCommerce integrate via native connectors or A2X-class tools for accurate sales and COGS posting." },
    { tag: "Documents", name: "Receipt capture", body: "Built-in QBO receipt capture, plus Dext (Receipt Bank) and Hubdoc for higher-volume documentation workflows." },
    { tag: "Compliance", name: "Sales tax", body: "Native QBO sales tax for simpler U.S. cases; Avalara, TaxJar, and Anrok for multi-state and complex nexus situations &mdash; integrated as part of <a href=\"/accounting/sales-tax-compliance/\">sales tax compliance</a> engagements." },
    { tag: "Bank feeds", name: "Banking", body: "Bank feeds for virtually every U.S. bank and credit-card issuer, with most major business banks providing direct connections rather than third-party aggregators." },
  ],
  // vs-table — honest head-to-head; concede cells where an alternative wins.
  vsTable: [
    { cap: "Cloud, browser &amp; mobile access", qbo: "yes", desktop: "local install", xero: "yes" },
    { cap: "Real-time multi-user from anywhere", qbo: "yes", desktop: "network only", xero: "yes" },
    { cap: "Native US payroll", qbo: "yes", desktop: "yes", xero: "via Gusto" },
    { cap: "Deep inventory / industry workflows", qbo: "adequate", desktop: "Enterprise wins", xero: "adequate" },
    { cap: "Significant multi-currency", qbo: "limited", desktop: "limited", xero: "Xero wins" },
    { cap: "Unlimited users", qbo: "no", desktop: "per-license", xero: "Xero wins" },
    { cap: "US accountant / ProAdvisor network", qbo: "yes", desktop: "yes", xero: "smaller in US" },
    { cap: "New feature development", qbo: "yes", desktop: "mostly frozen", xero: "yes" },
  ],
  // buyer-card routing — t-mofu signature; routes to the lifecycle services.
  routing: [
    { opener: "&ldquo;We&rsquo;re on Desktop and need to move.&rdquo;", body: "Desktop-to-Online migration with integrity verification and reconciliation &mdash; the step Intuit&rsquo;s free tool skips.", cta: "QuickBooks migration", href: "/quickbooks/migration/desktop-to-online/" },
    { opener: "&ldquo;We&rsquo;re setting up QBO fresh.&rdquo;", body: "Setup &amp; onboarding built right from day one &mdash; chart of accounts, bank feeds, sales tax, classes, integrations &mdash; so the file never needs cleanup.", cta: "QuickBooks setup", href: "/quickbooks/setup/" },
    { opener: "&ldquo;Our QBO file is a mess.&rdquo;", body: "File cleanup reconciles every account and documents what changed &mdash; broken feeds, reconciliation drift, undeposited-funds backlog, duplicates.", cta: "QuickBooks cleanup", href: "/quickbooks/cleanup/" },
  ],
  operatorSpec: [
    { value: "QBO L2", label: "the deepest QBO certification Intuit issues" },
    { value: "Zero", label: "commission — no affiliate, referral, or upsell incentive" },
    { value: "Named", label: "ProAdvisor + platform-level quality review" },
    { value: "Independent", label: "ProAdvisor firm — not affiliated with Intuit Inc." },
  ],
  faq: [
    { q: "What is QuickBooks Online?", a: "QuickBooks Online (QBO) is Intuit&rsquo;s cloud-based small-business accounting platform &mdash; the modern, browser- and mobile-accessible successor to QuickBooks Desktop. It handles double-entry bookkeeping, bank-feed reconciliation, invoicing, bill pay, expense tracking, reporting, sales tax, and (with add-ons) payroll, payments, and inventory. QBO is sold as a subscription with four plan tiers (Simple Start, Essentials, Plus, Advanced) and is the default Intuit product for new small-business customers, with Intuit concentrating new feature development in QBO rather than Desktop." },
    { q: "What&rsquo;s the difference between QuickBooks Online and QuickBooks Desktop?", a: "QuickBooks Online is cloud-based and accessed via browser or mobile app, while QuickBooks Desktop is locally installed software. Online supports real-time multi-user access from anywhere, integrates with a larger native app ecosystem, and receives new features first. Desktop offers deeper inventory and certain industry-specific features in its Enterprise tier and runs without an internet connection, but Intuit has moved Desktop to subscription-only pricing, stopped selling several versions to new US subscribers, and concentrates new development in Online. For most small and mid-sized U.S. businesses, Online is now the better default &mdash; see <a href=\"/quickbooks/migration/desktop-to-online/\">Desktop-to-Online migration</a> if you&rsquo;re considering the move." },
    { q: "How many QuickBooks Online plans are there?", a: "QuickBooks Online has four standard plan tiers for U.S. businesses: Simple Start, Essentials, Plus, and Advanced. Simple Start is single-user with core bookkeeping; Essentials adds bill pay and multiple users; Plus adds inventory, projects, and class/location tracking; Advanced adds workflow automation, deeper reporting, dedicated support, and higher user counts. Intuit also offers QuickBooks Online for Self-Employed, but that product is for sole proprietors and Schedule C filers, not full small-business accounting." },
    { q: "Which QuickBooks Online plan is right for me?", a: "The right plan depends on three factors: how many users need access, whether you need inventory tracking, and whether you need class or location tracking for departmental or location-level reporting. Simple Start fits single-user freelancers and very small service businesses. Essentials fits small teams needing multi-user access and bill management. Plus is the most common choice for product-based businesses or anyone needing class/location tracking. Advanced fits larger small businesses (typically 10+ users) needing workflow automation and custom reporting. An independent ProAdvisor can recommend the right tier in a single <a href=\"/quickbooks/which-plan-is-right/\">complimentary call</a> &mdash; no commission, no upsell incentive." },
    { q: "How much does QuickBooks Online cost?", a: "QuickBooks Online subscription pricing varies and is set by Intuit &mdash; it has historically ranged from roughly $30 per month for Simple Start to around $200 per month for Advanced, with Intuit frequently running promotional rates for new subscribers and occasionally adjusting list prices. Because pricing changes, we don&rsquo;t publish specific dollar figures here; check Intuit&rsquo;s current pricing directly, or ask a ProAdvisor for an honest read on which tier fits before subscribing." },
    { q: "Is QuickBooks Online worth it?", a: "For most U.S. small and mid-sized businesses, yes &mdash; but not all. QuickBooks Online is the right call when you need cloud access, multi-user collaboration, integration with the modern app ecosystem, and a platform your U.S. CPA likely already works in. It&rsquo;s not the right call when your business genuinely needs Desktop or Enterprise-only features (deep inventory, specific industry workflows, multi-entity at large scale), when <a href=\"/quickbooks/migration/quickbooks-to-xero/\">Xero</a> fits your operations better (notably multi-currency or unlimited-user scenarios), or when free or simpler tools meet your actual needs. An independent fit assessment sorts which case you&rsquo;re in." },
    { q: "Can I switch QuickBooks Online plans later?", a: "Yes. You can upgrade or downgrade QuickBooks Online plan tiers at any time from inside your QBO account &mdash; your data carries over and prorated billing applies. Upgrades are seamless; downgrades occasionally require simplifying data (removing classes or locations if downgrading below Plus, for example) before the change takes effect. We recommend choosing the right tier from the start when possible, since plan-juggling adds friction, but switching is always an option." },
    { q: "Do I need an accountant or ProAdvisor to use QuickBooks Online?", a: "QuickBooks Online is designed to be usable by business owners without an accountant, and many small businesses run it themselves. But the file decisions made in the first month &mdash; chart of accounts structure, sales-tax setup, integrations, class/location framework, opening balances &mdash; affect years of bookkeeping. Most businesses benefit from a Certified ProAdvisor for setup or for periodic review, even if day-to-day bookkeeping is done in-house. A ProAdvisor also becomes essential when files develop issues, books fall behind, or migration is needed." },
  ],
  related: [
    { title: "QuickBooks Desktop", href: "/quickbooks/desktop/", body: "Local installation, deeper inventory and industry-specific features &mdash; still right for some businesses despite Intuit&rsquo;s cloud push." },
    { title: "QuickBooks Enterprise", href: "/quickbooks/enterprise/", body: "For mid-market businesses with advanced inventory, advanced reporting, or 40+ user needs." },
    { title: "QuickBooks Payroll", href: "/quickbooks/payroll/", body: "Payroll integrated with QBO &mdash; or supported alternatives (Gusto, Rippling, ADP) when those fit better." },
    { title: "Plan selector", href: "/quickbooks/which-plan-is-right/", body: "Complimentary plan-selection advisory across all QuickBooks products &mdash; no commission, an honest answer." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/online/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":["CollectionPage","WebPage"],"@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#qbo-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"QuickBooks Online","item":url}]},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Online ProAdvisor services","serviceType":"QuickBooks Online plan selection, setup, migration, cleanup, and bookkeeping","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"QuickBooks Online plan tiers","itemListElement":data.plans.map(function(p){return {"@type":"Offer","itemOffered":{"@type":"Service","name":"QuickBooks Online "+stripTags(p.name),"description":stripTags(p.body).slice(0,180)}};})}},
        {"@type":"ItemList","@id":url+"#plan-list","name":"QuickBooks Online plan tiers","itemListElement":data.plans.map(function(p,i){return {"@type":"ListItem","position":i+1,"name":"QuickBooks Online "+stripTags(p.name)};})},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /quickbooks/help/error-codes/9999/ (error-code child — clones the founder-approved
 * 6123 shape). t-guide tier (reference; no call-bar). QBO/BROWSER error, NOT a Desktop
 * company-file error: no Tool Hub, File Doctor, or .ND/.TLG files. Citable: the FIVE
 * causes in order of likelihood + the SIX-step ordered self-fix (HowTo, all browser-side).
 * Sheet-7 honest-triage: disclosure above the fold w/ Intuit link (nofollow); first FAQ =
 * "Is this Intuit's official support?" → No, plainly; never "official" near our offer;
 * QBO platform-wide outages = Intuit's to resolve (route there, don't bill); phone =
 * "Speak to a ProAdvisor" (canonical lexicon) + (877) 751-5575; provider always
 * #organization. CTA: error-code = QB-specific — file-review primary, book-call secondary,
 * phone tertiary; intent=qb-error. Authorship firm-level; founder schema-only
 * (#david-westgate reviewedBy). Canonical pricing $1,200–$3,000, only if a REAL file issue.
 * Accurate Error 9999 content; no fabricated Intuit internals, phone, or hours. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Online, Desktop, Enterprise, Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "Error 9999 is a QuickBooks Online browser error &mdash; sorting a browser glitch from a real books problem takes fluency in how QBO runs in the browser and in the bookkeeping behind it.",
    "Every ProAdvisor holds an active QuickBooks Online (Level 2) certification, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to tell a transient browser script error from a genuine file or data issue &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / browser-vs-books)
  aiSummary: [
    { q: "What is QuickBooks Online Error 9999?", a: "A <strong>generic browser script error</strong> in QuickBooks Online, shown as the &ldquo;Something&rsquo;s not quite right&rdquo; screen: a page or action couldn&rsquo;t finish loading. Because QBO runs entirely in your web browser, 9999 is almost always browser-side &mdash; not a problem with your books. It is a QuickBooks Online error, not a QuickBooks Desktop company-file error." },
    { q: "What causes Error 9999?", a: "Five causes account for the large majority: (1) corrupted browser cache or cookies; (2) a browser extension interfering &mdash; very often an ad blocker; (3) an unsupported or outdated browser; (4) private/incognito session quirks; (5) rarely, a temporary QuickBooks Online-side issue on Intuit&rsquo;s end." },
    { q: "Can I fix Error 9999 myself?", a: "Usually yes, in order of likelihood: clear the browser cache and cookies for QuickBooks Online; try an incognito/private window; disable browser extensions (especially ad blockers) for the QBO domain; switch to a supported, updated browser; restart the browser or computer; and if it persists site-wide, check Intuit&rsquo;s status. Clearing cache/cookies or using a clean incognito window resolves most cases." },
    { q: "When does Error 9999 need a ProAdvisor?", a: "When 9999 keeps blocking real bookkeeping work after the browser steps, or it surfaces alongside data that looks wrong in the file &mdash; a signal worth a free file review to confirm whether it&rsquo;s truly browser-side or an actual books problem. A confirmed platform-wide QuickBooks Online outage, by contrast, is Intuit&rsquo;s to resolve." },
    { q: "Is Error 9999 the same as a QuickBooks Desktop error?", a: "No. Error 9999 is a QuickBooks <strong>Online</strong>, browser-side script error &mdash; there is no Tool Hub, no File Doctor, and no .ND/.TLG company-file repair involved. The fix is browser troubleshooting (cache, cookies, extensions, browser version), not Desktop file repair." },
  ],
  // Five causes, ranked by likelihood — the citable list. All browser-side except #5 (Intuit's).
  causes: [
    { rank: "Cause 01", name: "Corrupted browser cache or cookies", body: "The most common cause. QuickBooks Online stores cached data and cookies in your browser, and when that data becomes corrupted or stale, pages and actions fail to load &mdash; Error 9999. It often appears after a long-running session or many days without clearing browser data." },
    { rank: "Cause 02", name: "A browser extension interfering (often an ad blocker)", body: "Browser extensions &mdash; ad blockers especially, plus privacy, script-blocking, and security add-ons &mdash; can block parts of the QuickBooks Online page from loading. When an extension intercepts a script QBO needs, the page throws the generic 9999 error instead of finishing." },
    { rank: "Cause 03", name: "An unsupported or outdated browser", body: "QuickBooks Online supports current versions of Chrome, Edge, Firefox, and Safari. An old browser version, or a browser QBO doesn&rsquo;t support, can fail to run the page scripts correctly and surface Error 9999. Browsers that are several versions behind are a frequent trigger." },
    { rank: "Cause 04", name: "Private/incognito session quirks or heavy session data", body: "Sometimes the inverse: a private/incognito window with unusual settings, or a normal session that has accumulated too much data over hours of use, can cause the page to choke and return 9999. A fresh window or a restart clears the accumulated state." },
    { rank: "Cause 05", name: "A temporary QuickBooks Online-side issue (rare)", body: "Rarely, 9999 reflects a transient problem on Intuit&rsquo;s end rather than your browser. If the error appears across multiple browsers and devices at once, it may be a temporary QuickBooks Online service issue &mdash; which is Intuit&rsquo;s to resolve, not something browser troubleshooting will fix." },
  ],
  // Six ordered fix steps — the HowTo sequence. All browser-side. Addresses the causes in order.
  fixSteps: [
    { name: "Clear the browser cache and cookies for QuickBooks Online", body: "In your browser settings, clear cached images/files and cookies &mdash; or at minimum the cookies and site data for the QuickBooks Online domain. Then close and reopen the browser and sign back in. This resolves Error 9999 in the large majority of cases by removing the corrupted or stale data behind it." },
    { name: "Try an incognito / private window", body: "Open a private/incognito window and sign in to QuickBooks Online there. Incognito ignores your normal cache and runs without most extensions, so if QBO loads cleanly, the problem is your cached data or an extension &mdash; pointing you straight to steps 1 and 3." },
    { name: "Disable browser extensions (especially ad blockers) for the QBO domain", body: "Turn off your extensions &mdash; ad blockers and script/privacy blockers first &mdash; or whitelist the QuickBooks Online domain in each. Reload the page. If 9999 clears, re-enable extensions one at a time to find the one that conflicts, and keep QBO whitelisted in it." },
    { name: "Switch to a supported, updated browser", body: "Update your browser to the latest version, or switch to a current, supported one &mdash; Chrome, Edge, Firefox, or Safari. Running QuickBooks Online on an up-to-date supported browser rules out version incompatibility as the cause of Error 9999." },
    { name: "Restart the browser or computer", body: "Fully close the browser (all windows) and reopen it, or restart the computer. This clears accumulated session data and any stuck processes that can cause the page to fail with 9999 after long use. A clean start often resolves a one-off occurrence." },
    { name: "Check Intuit&rsquo;s status if it persists everywhere", body: "If 9999 still appears across multiple browsers and devices after the steps above, it may be a temporary QuickBooks Online service issue on Intuit&rsquo;s side. Check Intuit&rsquo;s status and support &mdash; a platform-wide outage is theirs to resolve. If instead it only blocks your file and the data looks off, book a free file review." },
  ],
  proSignals: [
    { name: "It keeps blocking real bookkeeping work", body: "You&rsquo;ve worked the browser steps and 9999 still stops you from doing actual bookkeeping in QuickBooks Online. When browser troubleshooting doesn&rsquo;t hold, it&rsquo;s worth confirming whether something in the file is contributing." },
    { name: "It shows up alongside data that looks wrong", body: "9999 surfaces while you&rsquo;re looking at balances, reports, or transactions that don&rsquo;t look right. That pairing is the signal it may not be purely browser-side &mdash; a free file review confirms whether there&rsquo;s a real books problem underneath." },
    { name: "You&rsquo;re unsure whether it&rsquo;s browser or books", body: "You can&rsquo;t tell if 9999 is a passing browser glitch or a symptom of something in the file. A Certified ProAdvisor tells the two apart quickly &mdash; and only scopes paid work if there&rsquo;s an actual file or data issue to fix." },
  ],
  related: [
    { title: "QuickBooks Online", href: "/quickbooks/online/", body: "Error 9999 is a QuickBooks Online browser error. See our QuickBooks Online overview &mdash; setup, cleanup, and the bookkeeping support behind the platform." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; QuickBooks Online browser errors, the Desktop 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Free review", label: "free file review — confirms whether it’s browser-side or a books problem" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope — only if there’s an actual file or books issue" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit’s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription) or a confirmed platform-wide outage, Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Online Error 9999?", a: "A generic browser script error in QuickBooks Online, shown as the &ldquo;Something&rsquo;s not quite right&rdquo; screen: a page or action couldn&rsquo;t finish loading. Because QBO runs entirely in your web browser, 9999 is almost always browser-side &mdash; corrupted cache or cookies, an interfering extension, or an outdated browser &mdash; not a problem with your books." },
    { q: "What causes QuickBooks Online Error 9999?", a: "Five common causes: (1) corrupted browser cache or cookies; (2) a browser extension interfering, very often an ad blocker; (3) an unsupported or outdated browser; (4) private/incognito session quirks or too much accumulated session data; (5) rarely, a temporary QuickBooks Online-side issue on Intuit&rsquo;s end." },
    { q: "How do I fix QuickBooks Online Error 9999 myself?", a: "In this order: clear the browser cache and cookies for QuickBooks Online; try an incognito/private window; disable browser extensions (especially ad blockers) for the QBO domain; switch to a supported, updated browser (Chrome, Edge, Firefox, or Safari); restart the browser or computer; and if it persists across browsers and devices, check Intuit&rsquo;s status. Clearing cache/cookies or using a clean incognito window resolves most cases." },
    { q: "When does Error 9999 need a ProAdvisor?", a: "When 9999 keeps blocking real bookkeeping work after the browser steps, or it surfaces alongside data that looks wrong in the file. A free file review confirms whether it&rsquo;s truly browser-side or an actual books problem; a fixed-fee diagnostic ($1,200&ndash;$3,000) applies only if there is a real file or books issue to resolve." },
    { q: "Is Error 9999 a QuickBooks Desktop company-file error?", a: "No. Error 9999 is a QuickBooks Online, browser-side script error &mdash; there is no Tool Hub, no File Doctor, and no .ND/.TLG company-file repair involved. The fix is browser troubleshooting (cache, cookies, extensions, browser version), not the Desktop file-repair process used for errors like the 6000-series." },
    { q: "Is Error 9999 a sign my books are broken?", a: "Usually not. 9999 is the browser saying it couldn&rsquo;t complete a request, not a verdict on your data. It only warrants a closer look at the file if it keeps blocking work after the browser steps or appears alongside numbers that look wrong &mdash; in which case a free file review tells browser from books." },
    { q: "What if Error 9999 is happening to everyone, not just me?", a: "If 9999 appears across multiple browsers and devices at the same time, it may be a temporary, platform-wide QuickBooks Online service issue &mdash; which is Intuit&rsquo;s to resolve, not something browser troubleshooting or a ProAdvisor can fix. In that case, check Intuit&rsquo;s status and support and wait for service to restore." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/9999/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#9999-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 9999","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Online Error 9999: Causes & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Online","applicationCategory":"BusinessApplication","operatingSystem":"Web browser"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Online Error 9999","description":"Resolve QuickBooks Online Error 9999 (“Something’s not quite right”) with six ordered browser-side steps that address the common causes in order of likelihood.","step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#9999-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Online Error 9999 file review","serviceType":"QuickBooks Online error triage and bookkeeping diagnosis","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"Free file review; $1,200–$3,000 typical fixed-fee scope only if there is an actual file or books issue"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

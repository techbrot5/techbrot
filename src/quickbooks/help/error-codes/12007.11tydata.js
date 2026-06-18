/* /quickbooks/help/error-codes/12007/ (error-code child — clones the round-20
 * 6123 proving pattern, founder-approved). t-guide tier (reference; no call-bar).
 * Citable: the FIVE causes in order of likelihood + the SIX-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold; first FAQ = "Is this
 * Intuit's official support?" → No, plainly; never "official" near our offer;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in
 * copy; provider always #organization. CTA: error-code = QB-specific —
 * file-review primary, book-call secondary, phone tertiary. Authorship firm-level;
 * founder schema-only (#david-westgate reviewedBy). intent=qb-error.
 * Accurate Error 12007 (12000-series update network-timeout) content; no fabricated
 * Intuit internals or phone/hours. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "Error 12007 is a Desktop update network-timeout error &mdash; resolving it takes fluency in internet connection settings, firewalls, SSL/TLS, and proxy/network configuration.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to diagnose Error 12007 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 12000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 12007?", a: "A QuickBooks <strong>update network-timeout error</strong> (a 12000-series code): QuickBooks Desktop couldn&rsquo;t connect to the server to download a software or payroll update. It usually appears when checking for updates or downloading a payroll tax-table update, and points to internet, firewall, SSL, or proxy/network settings rather than a problem with QuickBooks itself. Exclusive to QuickBooks Desktop &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 12007?", a: "Five causes account for the large majority: (1) incorrect QuickBooks internet connection settings; (2) a firewall or antivirus blocking QuickBooks; (3) SSL/TLS or system internet (Internet Explorer) settings, or a wrong system date/time; (4) a proxy or network restriction; (5) an unstable or dropped internet connection." },
    { q: "Can I fix Error 12007 myself?", a: "Often yes, in order of likelihood: confirm the internet works in a browser; in QuickBooks open Help &rarr; Internet Connection Setup and choose &ldquo;use the computer&rsquo;s internet settings&rdquo;; verify SSL settings and the system date/time; allow QuickBooks through the firewall (the QuickBooks Tool Hub firewall helper); temporarily disable a restrictive proxy and retry; then run the update again." },
    { q: "When does Error 12007 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it after the connection and firewall steps, the error keeps returning, it&rsquo;s blocking a payroll-update deadline, or you&rsquo;re on a corporate/proxy network where the update servers can&rsquo;t be reached &mdash; a signal the firewall, proxy, or network configuration needs professional attention." },
    { q: "How is Error 12007 related to other 12000-series codes?", a: "The 12000-series are all update-connection errors &mdash; QuickBooks can&rsquo;t reach the server to download an update. <strong>12007</strong> is a network-timeout error tied to internet settings, firewalls, SSL, or proxy/network restrictions. Codes like 12002 and 12029 share the same diagnostic approach: confirm the connection, clear the block, then retry the update." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Incorrect QuickBooks internet connection settings", body: "The most common cause. If QuickBooks isn&rsquo;t set to use the computer&rsquo;s own internet connection, or its internet settings are wrong, it can&rsquo;t reach the update server and times out with Error 12007. Pointing QuickBooks at the system internet settings resolves it in many cases." },
    { rank: "Cause 02", name: "Firewall or antivirus blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the executables or ports QuickBooks needs to reach the update server. This often appears right after a security-software or Windows update changes the rules. The fix is explicit exceptions for the QuickBooks program files and ports." },
    { rank: "Cause 03", name: "SSL/TLS or system internet (Internet Explorer) settings", body: "QuickBooks uses the system internet (Internet Explorer) settings, including SSL/TLS, to download updates. If SSL is disabled or misconfigured &mdash; or the system date and time are wrong, breaking certificate checks &mdash; the secure connection fails and Error 12007 appears." },
    { rank: "Cause 04", name: "A proxy or network restriction", body: "A proxy server, corporate network policy, or content filter can intercept or block the connection QuickBooks needs to reach the update server. On managed or restricted networks this is a frequent trigger, and a misconfigured proxy alone can produce Error 12007." },
    { rank: "Cause 05", name: "Unstable or dropped internet connection", body: "An intermittent, slow, or dropped internet connection can interrupt the update download mid-request and surface as Error 12007. A connection that works for browsing but stutters under load is enough to time out the update." },
  ],
  // Six ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Confirm your internet works in a browser", body: "Open a web browser and load a couple of secure sites to confirm the connection is live and stable. If pages don&rsquo;t load, fix the internet connection first &mdash; QuickBooks can&rsquo;t download an update if the computer itself can&rsquo;t reach the internet." },
    { name: "Set QuickBooks to use the computer&rsquo;s internet settings", body: "In QuickBooks go to Help &rarr; Internet Connection Setup and choose the option to use the computer&rsquo;s internet connection settings, then finish and retry the update. This aligns QuickBooks with the system settings that already work for browsing and clears Error 12007 in many cases." },
    { name: "Verify SSL settings and the system date/time", body: "Confirm SSL is enabled in the system internet (Internet Explorer) settings, and that the computer&rsquo;s date, time, and time zone are correct &mdash; a wrong clock breaks the certificate checks the secure update connection depends on. Correct both, then retry." },
    { name: "Allow QuickBooks through the firewall", body: "Use the QuickBooks Tool Hub firewall helper, or add exceptions manually, so the QuickBooks program files and ports are allowed through Windows Firewall and any third-party antivirus. If the update works with protection temporarily off, create permanent rules so the block doesn&rsquo;t return after a reboot." },
    { name: "Temporarily disable a restrictive proxy and retry", body: "If the computer is behind a proxy or on a managed network, temporarily disable the proxy in the system internet settings and retry the update. If it succeeds, the proxy or a network policy was the cause &mdash; work with whoever manages the network to whitelist QuickBooks update access." },
    { name: "Run the update again, then escalate", body: "After the connection, SSL, firewall, and proxy checks, run the software or payroll update once more. If Error 12007 persists &mdash; especially on a corporate or filtered network &mdash; stop and book a diagnostic. A Certified ProAdvisor identifies the underlying network cause and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all six steps", body: "You&rsquo;ve worked the ordered fix and Error 12007 still blocks the update. The cause is past the documented surface &mdash; usually firewall, proxy, or network configuration that needs a closer look." },
    { name: "It&rsquo;s blocking a payroll-update deadline", body: "Error 12007 is stopping a payroll tax-table update you need before a filing or pay run. When a deadline is at stake, a ProAdvisor resolves the connection fast rather than risking a missed update." },
    { name: "You&rsquo;re on a corporate or proxy network", body: "Error 12007 on a managed, filtered, or proxy network usually means a policy is blocking QuickBooks&rsquo; update access &mdash; the moment to bring in a ProAdvisor who can diagnose and document exactly what needs whitelisting." },
  ],
  related: [
    { title: "QuickBooks Error 12002", href: "/quickbooks/help/error-codes/12002/", body: "A sibling 12000-series update-connection error &mdash; QuickBooks times out reaching the update server. Same family as 12007, same diagnostic approach: confirm the connection, clear the block, then retry." },
    { title: "QuickBooks Error 12029", href: "/quickbooks/help/error-codes/12029/", body: "Another 12000-series update error &mdash; QuickBooks couldn&rsquo;t connect to or received no response from the update server. Shares 12007&rsquo;s causes around internet settings, firewalls, SSL, and proxy/network restrictions." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 12000-series, 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 12007 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 12007?", a: "An update network-timeout error in the 12000-series: QuickBooks Desktop couldn&rsquo;t connect to the server to download a software or payroll update. It commonly appears when checking for updates or downloading a payroll tax-table update, and usually points to internet connection settings, a firewall/antivirus block, SSL settings, or a proxy/network issue. Exclusive to QuickBooks Desktop; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 12007?", a: "Five common causes: (1) incorrect QuickBooks internet connection settings; (2) a firewall or antivirus blocking QuickBooks; (3) SSL/TLS or system internet (Internet Explorer) settings, or a wrong system date/time; (4) a proxy or network restriction; (5) an unstable or dropped internet connection." },
    { q: "Can I fix QuickBooks Error 12007 myself?", a: "Often, yes &mdash; in this order: confirm the internet works in a browser; open Help &rarr; Internet Connection Setup and choose to use the computer&rsquo;s internet settings; verify SSL settings and the system date/time; allow QuickBooks through the firewall (the QuickBooks Tool Hub firewall helper); temporarily disable a restrictive proxy and retry; then run the update again. Aligning QuickBooks with the computer&rsquo;s working internet settings resolves Error 12007 in many cases." },
    { q: "When does Error 12007 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after the connection and firewall steps; the error keeps returning; it&rsquo;s blocking a payroll-update deadline; or you&rsquo;re on a corporate or proxy network where the update servers can&rsquo;t be reached. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review. Call (877) 751-5575." },
    { q: "How is Error 12007 related to the other 12000-series errors?", a: "The 12000-series are all update-connection errors &mdash; QuickBooks can&rsquo;t reach the server to download an update. Error 12007 is specifically a network timeout tied to internet settings, firewalls, SSL, or proxy/network restrictions. Codes such as 12002 and 12029 share the same diagnostic approach: confirm the connection, clear the block, then retry the update." },
    { q: "Does Error 12007 appear in QuickBooks Online?", a: "No. Error 12007 is exclusive to QuickBooks Desktop &mdash; it&rsquo;s an update-connection error tied to how Desktop reaches Intuit&rsquo;s update servers over the internet. QuickBooks Online is browser-based and updates automatically, so it has no 12000-series update errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/12007/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#12007-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 12007","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 12007: Update Connection Causes & Fixes","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 12007","description":"Resolve QuickBooks Error 12007, a 12000-series update network-timeout error, with six ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#12007-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 12007 resolution","serviceType":"QuickBooks update-connection error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 12007 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

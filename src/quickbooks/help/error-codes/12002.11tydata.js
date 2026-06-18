/* /quickbooks/help/error-codes/12002/ (error-code child — clones the 6123
 * proving pattern, founder-approved). t-guide tier (reference; no call-bar).
 * Citable: the FIVE causes in order of likelihood + the FIVE-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold; first FAQ = "Is this
 * Intuit's official support?" → No, plainly; never "official" near our offer;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in
 * copy; provider always #organization. CTA: error-code = QB-specific —
 * file-review primary, phone secondary, book-call tertiary; intent=qb-error.
 * Authorship firm-level; founder schema-only (#david-westgate reviewedBy).
 * Accurate Error 12002 (12000-series network-timeout) content; no fabricated
 * Intuit internals or Intuit phone/hours. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "Error 12002 is a Desktop update-and-payroll network error &mdash; resolving it takes fluency in firewalls, internet/SSL settings, proxies, and QuickBooks&rsquo; connection configuration.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to diagnose Error 12002 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 12000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 12002?", a: "A QuickBooks <strong>network-timeout error</strong> (one of the 12000-series codes): QuickBooks Desktop couldn&rsquo;t use the internet connection to reach the server during a software or payroll update, and the request timed out. It usually means a firewall, security setting, or connection problem blocked or delayed the connection. Exclusive to QuickBooks Desktop &mdash; QuickBooks Online updates automatically and never shows it." },
    { q: "What causes Error 12002?", a: "Five causes account for the large majority: (1) a firewall or antivirus blocking QuickBooks; (2) incorrect internet-connection settings inside QuickBooks; (3) SSL/TLS or Internet Explorer/system internet settings (QuickBooks uses the system internet settings); (4) network or connection instability, or a proxy in the way; (5) QuickBooks not allowed as an app in the default browser&rsquo;s settings." },
    { q: "Can I fix Error 12002 myself?", a: "Often yes, in order of likelihood: confirm your internet works in a browser; set the correct internet-connection settings in QuickBooks (Help &rarr; Internet Connection Setup &rarr; use the computer&rsquo;s settings); check date/time and SSL settings; configure your firewall/antivirus to allow QuickBooks (the QuickBooks Tool Hub has a firewall helper); then retry the update. The first two steps clear Error 12002 in many cases." },
    { q: "When does Error 12002 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it after the firewall and connection fixes, the error recurs, it appears alongside other 12000-series codes, or &mdash; most urgently &mdash; it&rsquo;s blocking a payroll update with a filing deadline approaching and you can&rsquo;t afford continued trial-and-error." },
    { q: "How is Error 12002 related to other 12000-series codes?", a: "The 12000-series are all internet-connection and update-timeout errors &mdash; QuickBooks couldn&rsquo;t reach the update or payroll server. <strong>12002</strong> is a connection-timeout. Codes like 12007 and 12029 share the same diagnostic approach: confirm the connection, fix QuickBooks&rsquo; internet settings, then clear the firewall or proxy block." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Firewall or antivirus blocking QuickBooks", body: "The most common cause. Windows Firewall or third-party antivirus blocks the executables or ports QuickBooks needs to reach the update server, so the connection times out as Error 12002. This often appears right after a security-software or Windows update changes the rules. The fix is explicit exceptions for the QuickBooks program files and ports." },
    { rank: "Cause 02", name: "Incorrect internet-connection settings in QuickBooks", body: "QuickBooks has its own internet-connection setup, and if it&rsquo;s not pointed at the computer&rsquo;s internet settings the update request can stall or time out. Pointing QuickBooks at the system&rsquo;s connection (Help &rarr; Internet Connection Setup) resolves a large share of Error 12002 cases." },
    { rank: "Cause 03", name: "SSL/TLS or system internet settings", body: "QuickBooks relies on the computer&rsquo;s internet settings &mdash; including SSL/TLS and the legacy Internet Explorer configuration. If SSL is disabled, or the system clock and security settings are off, the secure connection to the update server fails and Error 12002 results." },
    { rank: "Cause 04", name: "Network or connection instability, or a proxy", body: "An unstable internet connection, an intermittent network, or a proxy or corporate network policy intercepting the request can all cause the update connection to time out as Error 12002 &mdash; even when general browsing seems fine." },
    { rank: "Cause 05", name: "QuickBooks not allowed in the default browser&rsquo;s settings", body: "QuickBooks uses the system&rsquo;s default browser and internet configuration. If QuickBooks isn&rsquo;t set as an allowed app, or the default browser&rsquo;s settings restrict it, the update request can be blocked or time out and surface as Error 12002." },
  ],
  // Five ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Verify your internet works in a browser", body: "Open your web browser and confirm you can reach a normal website. If general browsing fails, the problem is the internet connection itself &mdash; reset the connection or router before anything else. If browsing works but QuickBooks still times out, the block is between QuickBooks and the connection, so continue." },
    { name: "Set the correct internet-connection settings in QuickBooks", body: "In QuickBooks, go to Help &rarr; Internet Connection Setup and choose the option to use the computer&rsquo;s internet connection settings, then finish the wizard. This points QuickBooks at the system&rsquo;s working connection and resolves a large share of Error 12002 cases on its own. Retry the update afterward." },
    { name: "Check date/time and SSL settings", body: "Confirm the computer&rsquo;s date, time, and time zone are correct, then verify SSL is enabled in the system internet settings that QuickBooks uses. An incorrect clock or disabled SSL breaks the secure connection to the update server &mdash; a common, quietly overlooked cause of Error 12002." },
    { name: "Configure firewall and antivirus to allow QuickBooks", body: "Add exceptions for the QuickBooks program files and ports in Windows Firewall and any third-party antivirus &mdash; the QuickBooks Tool Hub has a firewall helper that does this automatically. Or temporarily disable the security software to test; if the update completes with protection off, create permanent rules so the block doesn&rsquo;t return after a reboot." },
    { name: "Retry the update, then escalate", body: "After correcting the connection and security settings, retry the software or payroll update. If Error 12002 persists, stop &mdash; continued retries waste time, especially with a payroll deadline approaching. A Certified ProAdvisor diagnostic identifies the underlying cause and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all five steps", body: "You&rsquo;ve worked the ordered fix and Error 12002 still blocks the update. The cause is past the documented surface &mdash; usually a security program re-blocking QuickBooks, a proxy, or a deeper system/internet configuration issue." },
    { name: "It&rsquo;s blocking a payroll update near a deadline", body: "Error 12002 stopping a payroll update with a filing or pay-run deadline approaching is time-critical. Rather than risk continued trial-and-error, a ProAdvisor resolves the connection so payroll updates complete on time." },
    { name: "It&rsquo;s appearing alongside other 12000-series codes", body: "Error 12002 alongside 12007, 12029, or other 12000-series codes points to a persistent network, firewall, or proxy problem &mdash; the moment to stop self-fixing and have the connection and configuration assessed properly." },
  ],
  related: [
    { title: "Error 12007 — connection timeout", href: "/quickbooks/help/error-codes/12007/", body: "Error 12007 is a sibling 12000-series error &mdash; QuickBooks can&rsquo;t connect to the internet for an update because of internet or firewall settings. It shares the same diagnostic approach as 12002." },
    { title: "Error 12029 — server unreachable", href: "/quickbooks/help/error-codes/12029/", body: "Error 12029 is another 12000-series update error &mdash; QuickBooks couldn&rsquo;t reach the update server. Like 12002, it usually traces to firewall, internet, or proxy settings." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 12000-series, 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 12002 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 12002?", a: "A network-timeout error, one of the 12000-series codes: QuickBooks Desktop couldn&rsquo;t use the internet connection to reach the server during a software or payroll update, and the request timed out. It usually means a firewall, security setting, or connection problem blocked or delayed the connection. Exclusive to QuickBooks Desktop; QuickBooks Online updates automatically and never shows it." },
    { q: "What causes QuickBooks Error 12002?", a: "Five common causes: (1) a firewall or antivirus blocking QuickBooks; (2) incorrect internet-connection settings inside QuickBooks; (3) SSL/TLS or system internet settings being off (QuickBooks uses the computer&rsquo;s internet settings); (4) network or connection instability, or a proxy; (5) QuickBooks not allowed as an app in the default browser&rsquo;s settings." },
    { q: "Can I fix QuickBooks Error 12002 myself?", a: "Often, yes &mdash; in this order: confirm your internet works in a browser; set the correct internet-connection settings in QuickBooks (Help &rarr; Internet Connection Setup &rarr; use the computer&rsquo;s settings); check date/time and SSL settings; configure your firewall/antivirus to allow QuickBooks (the QuickBooks Tool Hub has a firewall helper); then retry the update. The first two steps resolve Error 12002 in many cases." },
    { q: "When does Error 12002 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after the firewall and connection fixes; the error recurs; it appears alongside other 12000-series codes; or it&rsquo;s blocking a payroll update with a deadline approaching. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "How is Error 12002 related to the other 12000-series errors?", a: "The 12000-series are all internet-connection and update-timeout errors &mdash; QuickBooks couldn&rsquo;t reach the update or payroll server. Error 12002 is specifically a connection timeout. Codes such as 12007 and 12029 share the same diagnostic approach: confirm the connection, correct QuickBooks&rsquo; internet settings, then clear the firewall or proxy block." },
    { q: "Does Error 12002 appear in QuickBooks Online?", a: "No. Error 12002 is exclusive to QuickBooks Desktop &mdash; it&rsquo;s a network-timeout error tied to how Desktop reaches the internet for software and payroll updates. QuickBooks Online is browser-based and updates automatically, so it has no 12000-series update errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/12002/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#12002-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 12002","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 12002: Update Timeout Causes & Fixes","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 12002","description":"Resolve QuickBooks Error 12002, a 12000-series network-timeout error, with five ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"Web browser"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#12002-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 12002 resolution","serviceType":"QuickBooks update and payroll network-timeout error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 12002 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

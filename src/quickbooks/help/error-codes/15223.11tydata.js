/* /quickbooks/help/error-codes/15223/ (error-code child — clones the 6123
 * proving pattern, founder-approved). t-guide tier (reference; no call-bar).
 * Citable: the FIVE causes in order of likelihood + the FIVE-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold; first FAQ = "Is this
 * Intuit's official support?" → No, plainly; never "official" near our offer;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in
 * copy; provider always #organization. CTA: error-code = QB-specific —
 * file-review primary, book-call secondary, phone tertiary. Authorship firm-level;
 * founder schema-only (#david-westgate reviewedBy). intent=qb-error.
 * Accurate Error 15223 content (15000-series update/payroll); no fabricated Intuit
 * internals or phone/hours. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "Error 15223 is a Desktop/Enterprise update &amp; payroll error &mdash; resolving it takes fluency in system internet settings, digital-signature certificates, SSL/TLS, and security-software configuration.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience to diagnose Error 15223 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 15000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 15223?", a: "A QuickBooks <strong>update error</strong> (a 15000-series code): QuickBooks Desktop can&rsquo;t complete a payroll or software update because the download is blocked or can&rsquo;t be verified. It&rsquo;s usually tied to incorrect system internet / Internet Explorer settings, a digital-signature certificate that isn&rsquo;t trusted, or browser security settings. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 15223?", a: "Five causes account for the large majority: (1) incorrect Internet Explorer or system internet settings (QuickBooks uses them to download updates); (2) a digital-signature certificate that needs to be installed or trusted; (3) SSL/TLS settings that block the secure download; (4) a firewall or antivirus interfering with the download; (5) a partially downloaded or damaged update." },
    { q: "Can I fix Error 15223 myself?", a: "Often yes, in order of likelihood: set the correct internet settings (Help &rarr; Internet Connection Setup &rarr; use the computer&rsquo;s internet connection); check Internet Explorer security/SSL settings and clear its cache; verify and install the Intuit digital-signature certificate on QBW32.exe; allow QuickBooks through firewall and antivirus; reboot and retry the update. Correcting the internet settings clears Error 15223 in many cases." },
    { q: "When does Error 15223 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it, the error returns after each update attempt, the certificate won&rsquo;t install or stay trusted, a security program keeps re-blocking the download, or it&rsquo;s blocking a payroll deadline &mdash; a signal the system, certificate, or security configuration needs professional diagnosis." },
    { q: "How is Error 15223 related to other 15000-series codes?", a: "The 15000-series are all update &amp; maintenance-release errors &mdash; QuickBooks can&rsquo;t download or install a payroll or software update. <strong>15223</strong> is specifically tied to internet/Internet Explorer settings, digital-signature certificates, and browser security. Codes like 15215, 15240, and 15271 share the same diagnostic approach: fix the connection and verification path, then retry the update." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Incorrect Internet Explorer or system internet settings", body: "The most common cause. QuickBooks downloads updates using your computer&rsquo;s own internet and Internet Explorer settings. When those settings are wrong &mdash; a misconfigured connection, proxy, or date/time &mdash; QuickBooks can&rsquo;t reach the update server and reports Error 15223. Pointing QuickBooks at the computer&rsquo;s internet connection usually resolves it." },
    { rank: "Cause 02", name: "Digital-signature certificate not installed or trusted", body: "QuickBooks verifies updates against an Intuit digital-signature certificate. If that certificate isn&rsquo;t installed, has expired, or isn&rsquo;t trusted on the machine, the update can&rsquo;t be verified and fails with Error 15223. Reinstalling or trusting the certificate on the QuickBooks executable clears it." },
    { rank: "Cause 03", name: "SSL/TLS security settings blocking the download", body: "QuickBooks uses a secure (SSL/TLS) connection to download updates. If Internet Explorer&rsquo;s SSL/TLS options are disabled or set incorrectly &mdash; sometimes after a Windows update changes them &mdash; the secure download is blocked and Error 15223 appears." },
    { rank: "Cause 04", name: "Firewall or antivirus interference", body: "Windows Firewall or third-party antivirus blocks the files or ports QuickBooks needs to download an update. This often appears right after a security-software or Windows update changes the rules. The fix is explicit exceptions for the QuickBooks program files and update ports." },
    { rank: "Cause 05", name: "Partially downloaded or damaged update", body: "A previous update that downloaded incompletely &mdash; from a dropped connection or an interrupted install &mdash; can leave damaged update files that block the next attempt. Clearing the cached download and retrying gives QuickBooks a clean file to verify and install." },
  ],
  // Five ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Set the correct internet settings", body: "In QuickBooks go to Help &rarr; Internet Connection Setup and choose to use the computer&rsquo;s internet connection when this application accesses the internet. Confirm the system date and time are correct. This points QuickBooks at the right connection and resolves Error 15223 in many cases." },
    { name: "Check Internet Explorer security/SSL settings and clear the cache", body: "Open Internet Explorer&rsquo;s Internet Options &rarr; Advanced, confirm the SSL/TLS (Use TLS) options are enabled, then clear the browsing history/cache and temporary files. QuickBooks relies on these settings for secure update downloads, so correcting them often clears 15223." },
    { name: "Verify and install the Intuit digital-signature certificate", body: "Locate QBW32.exe in the QuickBooks program folder, right-click &rarr; Properties &rarr; Digital Signatures, confirm Intuit, Inc. is listed, then view the certificate and install it as trusted. Reboot afterward. This fixes 15223 when the update can&rsquo;t be verified against the certificate." },
    { name: "Allow QuickBooks through firewall and antivirus", body: "Add exceptions for the QuickBooks program files and update ports in Windows Firewall and any third-party antivirus, or temporarily disable the security software to test. If the update completes with protection off, create permanent rules so the block doesn&rsquo;t return after a reboot." },
    { name: "Reboot, clear the cached update, then retry &mdash; or escalate", body: "Restart the computer, then retry the update (Help &rarr; Update QuickBooks Desktop, or Get Payroll Updates for a payroll update); resetting the update clears a partially downloaded file. If Error 15223 survives all five steps or is blocking a payroll deadline, stop &mdash; a Certified ProAdvisor diagnostic identifies the underlying cause and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all five steps", body: "You&rsquo;ve worked the ordered fix and Error 15223 still blocks the update. The cause is past the documented surface &mdash; usually a certificate, SSL/TLS, or security-software configuration that needs professional diagnosis." },
    { name: "It returns after every update", body: "Error 15223 clears, then comes back the next time QuickBooks tries to update. A recurring error signals an underlying system, certificate, or security-software problem that a one-time fix masks rather than resolves." },
    { name: "It&rsquo;s blocking a payroll deadline", body: "Error 15223 on a payroll update with tax tables or a deadline at stake is time-sensitive &mdash; the moment to stop self-fixing and have a ProAdvisor resolve the update path so payroll runs on the correct, current tables." },
  ],
  related: [
    { title: "QuickBooks Error 15271", href: "/quickbooks/help/error-codes/15271/", body: "A sibling 15000-series update error &mdash; the payroll or software update can&rsquo;t verify a file. Shares the same internet-settings, certificate, and security diagnostic approach as Error 15223." },
    { title: "QuickBooks Error 12002", href: "/quickbooks/help/error-codes/12002/", body: "A 12000-series update error tied to internet connectivity, timeouts, or firewall settings when QuickBooks can&rsquo;t reach the update server. Often appears alongside 15000-series codes like 15223." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 15000-series, 12000-series, 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 15223 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 15223?", a: "An update error in the 15000-series: QuickBooks Desktop can&rsquo;t complete a payroll or software update because the download is blocked or can&rsquo;t be verified. It&rsquo;s commonly tied to incorrect system internet / Internet Explorer settings, a digital-signature certificate that isn&rsquo;t trusted, or browser/SSL security settings. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 15223?", a: "Five common causes: (1) incorrect Internet Explorer or system internet settings, which QuickBooks uses to download updates; (2) a digital-signature certificate that needs to be installed or trusted; (3) SSL/TLS settings that block the secure download; (4) a firewall or antivirus interfering; (5) a partially downloaded or damaged update." },
    { q: "Can I fix QuickBooks Error 15223 myself?", a: "Often, yes &mdash; in this order: set the correct internet settings (Help &rarr; Internet Connection Setup &rarr; use the computer&rsquo;s internet connection); check Internet Explorer security/SSL settings and clear its cache; verify and install the Intuit digital-signature certificate on QBW32.exe; allow QuickBooks through firewall and antivirus; reboot and retry the update. Correcting the internet settings resolves Error 15223 in many cases." },
    { q: "When does Error 15223 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it; the error returns after each update attempt; the certificate won&rsquo;t install or stay trusted; a security program keeps re-blocking the download; or it&rsquo;s blocking a payroll deadline. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "How is Error 15223 related to the other 15000-series errors?", a: "The 15000-series are all update &amp; maintenance-release errors &mdash; QuickBooks can&rsquo;t download or install a payroll or software update. Error 15223 is specifically tied to internet/Internet Explorer settings, digital-signature certificates, and SSL/browser security. Codes such as 15215, <a href=\"/quickbooks/help/error-codes/15240/\">15240</a>, and <a href=\"/quickbooks/help/error-codes/15271/\">15271</a> share the same diagnostic approach: fix the connection and verification path first, then retry the update." },
    { q: "Does Error 15223 affect payroll?", a: "It can. Error 15223 blocks both software and payroll updates, so it can stop a payroll tax-table update from downloading &mdash; which is why it&rsquo;s time-sensitive near a payroll deadline. Resolving the update path ensures payroll runs on the correct, current tax tables. Error 15223 is a Desktop/Enterprise error and does not appear in QuickBooks Online." },
    { q: "Does Error 15223 appear in QuickBooks Online?", a: "No. Error 15223 is exclusive to QuickBooks Desktop and Enterprise &mdash; it&rsquo;s an update error tied to how Desktop downloads and verifies payroll and software updates using your computer&rsquo;s internet settings. QuickBooks Online is browser-based and updates automatically, with no 15000-series update errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/15223/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#15223-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 15223","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 15223: Update/Payroll Causes & Fixes","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 15223","description":"Resolve QuickBooks Error 15223 with five ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Desktop"},{"@type":"HowToTool","name":"Internet Explorer"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#15223-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 15223 resolution","serviceType":"QuickBooks update and payroll-update error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 15223 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

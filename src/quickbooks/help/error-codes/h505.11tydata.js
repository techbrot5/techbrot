/* /quickbooks/help/error-codes/h505/ — cloned from the founder-approved h202
 * error-code child class (round-20 proving page). Same field set / sections /
 * schema (t-guide; ATF disclosure + Intuit link + trademark line; byline;
 * credentials/credStats; plain definition; aiSummary[5]; ranked causes; ordered
 * self-fix HowTo; proSignals[3]; call-breakout; operator; related; faq[7];
 * meta-reviewed 2026-06-18; pageGraph mirrors h202). H505 = multi-user hosting
 * not configured: file is on another computer, this computer can't reach the
 * server (Database Server Manager not running OR hosting not enabled on host).
 * Same family as H202/H101. Sheet-7 honest-triage: disclosure above the fold;
 * first FAQ = "Is this official QuickBooks support?" → No, plainly; never
 * "official" near our offer; phone = "Speak to a ProAdvisor"; provider always
 * #organization. CTA intent=qb-error. Founder schema-only; canonical pricing. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "H505 is a Desktop/Enterprise error &mdash; resolving it takes fluency in multi-user mode, hosting configuration, Database Server Manager, and network setup.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience to diagnose H505 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs H202-H101)
  aiSummary: [
    { q: "What is QuickBooks Error H505?", a: "A QuickBooks <strong>multi-user hosting error</strong>: the company file is on another computer and this computer can&rsquo;t reach the server because hosting isn&rsquo;t configured &mdash; most often the Database Server Manager isn&rsquo;t running on the host, or multi-user hosting isn&rsquo;t enabled there. Exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error H505?", a: "Five causes account for the large majority: (1) Database Server Manager not running or not installed on the host; (2) hosting not enabled on the server, or enabled on a workstation by mistake; (3) a firewall blocking QuickBooks ports or executables; (4) an incorrect host name or IP that won&rsquo;t resolve; (5) a damaged network-data (.ND) file." },
    { q: "Can I fix H505 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); on the host, install or start Database Server Manager and enable multi-user hosting; confirm hosting is OFF on every workstation; configure the firewall and antivirus for QuickBooks; rename and rescan the .ND file; verify the workstation can reach the host. Tool Hub plus enabling hosting on the host clears H505 in many cases." },
    { q: "When does H505 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it within an hour or two, hosting won&rsquo;t stay configured, multi-user keeps dropping, you lack admin access to the host or firewall, or H505 appears alongside other errors &mdash; a signal of deeper file-integrity issues." },
    { q: "How is H505 different from H202 and H101?", a: "All three are multi-user errors with similar root causes. <strong>H505</strong>: the file is on another computer and this computer can&rsquo;t reach the server because hosting isn&rsquo;t configured. <strong>H202</strong>: the workstation can&rsquo;t connect to the host at all. <strong>H101</strong>: multi-user setup is incomplete on this machine. The same diagnostic approach resolves all three." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Database Server Manager not running on the host", body: "The most common cause. QuickBooks Database Server Manager (QBDBXX, where XX is the year version) brokers all multi-user file access. If it isn&rsquo;t running &mdash; or was never installed on the computer storing the file &mdash; no other computer can reach the server, and H505 results." },
    { rank: "Cause 02", name: "Hosting not enabled on the server", body: "Multi-user hosting must be turned ON on the host that stores the company file. If hosting is off on the host &mdash; or, just as often, mistakenly enabled on a workstation &mdash; the file can&rsquo;t be served in multi-user mode. Only the host should host; workstations never should." },
    { rank: "Cause 03", name: "Firewall blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the ports or executables QuickBooks needs for multi-user communication. The fix is explicit inbound and outbound rules for the QuickBooks ports and program files on the host." },
    { rank: "Cause 04", name: "Incorrect host name or IP resolution", body: "The workstation has the wrong host name or IP for the server, or can&rsquo;t resolve the host&rsquo;s computer name to its network address. Pinging the host by name fails while pinging by IP succeeds &mdash; a DNS or hosts-file issue underneath the QuickBooks error." },
    { rank: "Cause 05", name: "Damaged .ND file", body: "The network-data (.ND) configuration file that points the company file at its host can become corrupted. When it is, QuickBooks can&rsquo;t locate the server even when hosting is correct &mdash; renaming and rescanning the file rebuilds it." },
    { rank: "Less common", name: "Less common: multi-version conflicts, deeper file corruption", body: "Two QuickBooks year-versions fighting over the same file, a Database Server Manager that won&rsquo;t stay running, or genuine company-file integrity damage. These are where surface steps stop working and a diagnostic is warranted." },
  ],
  // Seven ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks File Doctor from Tool Hub", body: "On the host, open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix My File, then run QuickBooks File Doctor. This alone resolves H505 in many cases by repairing hosting and network settings automatically." },
    { name: "Install and run Database Server Manager on the host", body: "On the computer that stores the company file, confirm QuickBooks Database Server Manager is installed and running (Services &rarr; QuickBooksDBXX Started and Automatic). If it&rsquo;s missing, reinstall it from the QuickBooks installer, then scan the folder that holds the company file." },
    { name: "Enable multi-user hosting on the host (host only)", body: "On the host: File &rarr; Utilities &rarr; the option should read &ldquo;Stop Hosting Multi-User Access&rdquo; (meaning hosting is ON). Turn hosting on if it isn&rsquo;t. Only the computer that stores the file should host." },
    { name: "Make sure hosting is OFF on every workstation", body: "On each workstation: File &rarr; Utilities &rarr; the option should read &ldquo;Host Multi-User Access&rdquo; (meaning hosting is OFF). If a workstation is hosting by mistake, turn it off &mdash; two machines hosting the same file breaks multi-user mode." },
    { name: "Configure the firewall and antivirus for QuickBooks", body: "Add inbound and outbound firewall rules for the QuickBooks ports for your year version (and exceptions for QBW32.exe / QBDBMgrN.exe). Re-running File Doctor can configure these automatically if manual rules are error-prone." },
    { name: "Rename and rescan the .ND file", body: "On the host, rename the company file&rsquo;s .ND file (add .OLD to the end), then re-scan the folder in Database Server Manager. QuickBooks rebuilds a fresh .ND file with correct hosting information." },
    { name: "If H505 persists, escalate", body: "If H505 survives all six steps above &mdash; or hosting won&rsquo;t stay configured &mdash; stop. Continued retries won&rsquo;t help and can mask a deeper cause. A Certified ProAdvisor diagnostic identifies the underlying configuration or file-integrity issue and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all six steps", body: "You&rsquo;ve worked the ordered fix and H505 still blocks multi-user access. The cause is past the documented surface &mdash; usually hosting that won&rsquo;t hold or a damaged .ND/file-integrity issue." },
    { name: "Hosting won&rsquo;t stay configured", body: "You enable hosting or start Database Server Manager and it reverts, or multi-user drops after every reboot. A setting that won&rsquo;t persist signals an environment or service problem a one-time fix masks rather than resolves." },
    { name: "It&rsquo;s appearing alongside other errors", body: "H505 alongside 6000-series or other codes points to deeper company-file integrity problems &mdash; the moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "Error H202", href: "/quickbooks/help/error-codes/h202/", body: "The same family: the workstation can&rsquo;t connect to the host hosting the company file. Same diagnostic approach as H505 &mdash; the most common multi-user error in Desktop and Enterprise." },
    { title: "Error H101", href: "/quickbooks/help/error-codes/h101/", body: "Multi-user setup is incomplete on this machine. Same root-cause family as H505 &mdash; hosting and Database Server Manager configuration on the host." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; H-series, 6000-series, PS-series, and the critical codes, with what each means and when to call." },
    { title: "File cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "When H505 turns out to be file-integrity damage rather than a hosting issue, a fixed-fee QuickBooks file cleanup repairs the file properly." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused H505 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error H505?", a: "A multi-user hosting error: the company file is on another computer and this computer can&rsquo;t reach the server because hosting isn&rsquo;t configured. Most often the Database Server Manager isn&rsquo;t running on the host, or multi-user hosting isn&rsquo;t enabled there. Exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error H505?", a: "Five common causes: (1) Database Server Manager not running or not installed on the host; (2) hosting not enabled on the server, or enabled on a workstation by mistake; (3) a firewall blocking QuickBooks ports or executables; (4) an incorrect host name or IP that won&rsquo;t resolve; (5) a damaged network-data (.ND) file." },
    { q: "Can I fix QuickBooks Error H505 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); on the host, install or start Database Server Manager and enable multi-user hosting; confirm hosting is OFF on every workstation; configure the firewall and antivirus for QuickBooks; rename and rescan the .ND file; verify the workstation can reach the host. Tool Hub plus enabling hosting on the host resolves H505 in many cases." },
    { q: "When does Error H505 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after an hour or two; hosting won&rsquo;t stay configured; multi-user keeps dropping; you don&rsquo;t have admin access to the host or firewall; or H505 appears alongside other errors, which suggests deeper file-integrity issues. Typical focused resolution is a $1,200–$3,000 fixed-fee scope." },
    { q: "What&rsquo;s the difference between Error H505 and Error H202?", a: "Both are multi-user errors with similar root causes. H505: the file is on another computer and this computer can&rsquo;t reach the server because hosting isn&rsquo;t configured. H202: the workstation can&rsquo;t connect to the host at all. H101: multi-user setup is incomplete on this machine. The same diagnostic approach resolves all three." },
    { q: "Does Error H505 appear in QuickBooks Online?", a: "No. H505 is exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it&rsquo;s a multi-user hosting error tied to how Desktop serves a company file across machines. QuickBooks Online is browser-based and has no equivalent multi-user hosting error." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/h505/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#h505-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error H505","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error H505: Multi-User Hosting Causes & Fixes","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error H505","description":"Resolve QuickBooks Error H505 with six ordered steps that address the five common multi-user hosting causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks Database Server Manager"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#h505-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error H505 resolution","serviceType":"QuickBooks multi-user hosting error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused H505 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

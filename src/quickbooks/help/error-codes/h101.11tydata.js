/* /quickbooks/help/error-codes/h101/ (error-code child — cloned from the founder-
 * approved h202 proving page; rule 1: same template/field set/sections/schema).
 * H101 = same multi-user H-family as H202/H505: a workstation can't reach the
 * server hosting the company file in multi-user mode, often the FIRST time that
 * workstation tries to connect, before the server connection is set up. t-guide
 * tier (reference; no call-bar). Citable: the causes in order of likelihood + the
 * ordered self-fix (HowTo). Sheet-7 honest-triage: disclosure ATF (not-Intuit-
 * official + Intuit link rel=noopener nofollow + trademark line); first FAQ =
 * "Is this official QuickBooks support?" → No, plainly; never "official" near our
 * offer; no fabricated Intuit phone/hours; phone = "Speak to a ProAdvisor"
 * (canonical lexicon) tel:(877) 751-5575; provider always #organization. CTA:
 * error-code = QB-specific — intent=qb-error throughout; file-review primary,
 * book-call secondary, phone tertiary. Authorship firm-level; founder schema-only
 * (founder-name-zero). Canonical pricing $1,200–$3,000 (Sheet 0). */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "H101 is a Desktop/Enterprise error &mdash; resolving it takes fluency in multi-user mode, Database Server Manager, and network configuration.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience to diagnose H101 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs H202-H505)
  aiSummary: [
    { q: "What is QuickBooks Error H101?", a: "A QuickBooks <strong>multi-user error</strong>: a workstation tries to open the company file in multi-user mode but can&rsquo;t establish a connection to the server hosting it &mdash; often the first time that workstation reaches the file, before the server connection is set up. Exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error H101?", a: "A handful of causes account for the large majority: (1) QuickBooks Database Server Manager not running on the host; (2) hosting configured incorrectly &mdash; a workstation set to host, or the server not set to host; (3) a firewall blocking QuickBooks ports or executables; (4) the workstation unable to resolve the host name or IP; (5) a damaged network-data (.ND) file." },
    { q: "Can I fix H101 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); confirm Database Server Manager is running and only the host is set to multi-user hosting; verify each workstation has hosting OFF; configure the firewall/antivirus for QuickBooks; rename the .ND file or re-scan the folder in Database Server Manager; confirm the workstation can ping or reach the host. Tool Hub alone clears H101 in many cases." },
    { q: "When does H101 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it within an hour or two, multi-user won&rsquo;t stabilize across the network, the error recurs, you lack admin access to the host or firewall, or H101 appears alongside other errors &mdash; a signal of deeper file-integrity issues." },
    { q: "How is H101 different from H202 and H505?", a: "All three are multi-user errors with similar root causes. <strong>H101</strong>: the workstation can&rsquo;t establish the first connection to the server hosting the file. <strong>H202</strong>: the workstation can&rsquo;t connect to the host. <strong>H505</strong>: the workstation thinks the file is on a machine that isn&rsquo;t set to host. The same diagnostic approach resolves all three." },
  ],
  // Causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Database Server Manager not running", body: "The most common cause. QuickBooks Database Server Manager (QBDBXX, where XX is the year version) brokers all multi-user file access. If the service isn&rsquo;t running on the host machine, no workstation can connect &mdash; H101." },
    { rank: "Cause 02", name: "Hosting configured incorrectly", body: "Two patterns: a workstation is mistakenly set to host itself, or the server isn&rsquo;t set to host multi-user access. Only the host should host; workstations never should. Mismatched configuration prevents the first multi-user connection." },
    { rank: "Cause 03", name: "Firewall blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the ports or executables QuickBooks needs for multi-user communication. The fix is explicit inbound and outbound rules for the QuickBooks ports and program files." },
    { rank: "Cause 04", name: "Workstation can&rsquo;t resolve the host", body: "The workstation can&rsquo;t resolve the host&rsquo;s computer name or IP to reach it across the network. Pinging the host by name fails &mdash; a DNS, hosts-file, or network-path issue underneath the QuickBooks error." },
    { rank: "Cause 05", name: "Damaged .ND file", body: "A corrupted network-data (.ND) file &mdash; the small configuration file that tells QuickBooks how to find the company file on the network &mdash; can block the connection. Renaming it and re-scanning the folder rebuilds it cleanly." },
    { rank: "Less common", name: "Less common: multi-version conflicts, deeper file corruption", body: "Two QuickBooks year-versions fighting over the same file, a firewall rule that resets, or genuine company-file integrity damage. These are where surface steps stop working and a diagnostic is warranted." },
  ],
  // Ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks File Doctor from Tool Hub", body: "On the host, open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix my File, then run QuickBooks File Doctor. This alone resolves H101 in many cases by repairing hosting and network settings automatically." },
    { name: "Confirm Database Server Manager is running and only the host hosts", body: "On the host, open Services (services.msc) and confirm QuickBooksDBXX is Started and set to Automatic. In QuickBooks on the host, File &rarr; Utilities should read &ldquo;Stop Hosting Multi-User Access&rdquo; (meaning hosting is ON). Only the host should host." },
    { name: "Verify each workstation has hosting OFF", body: "On every workstation, File &rarr; Utilities should read &ldquo;Host Multi-User Access&rdquo; (meaning hosting is OFF). If a workstation is set to host, turn it off &mdash; only the host machine should host the file." },
    { name: "Configure the firewall and antivirus for QuickBooks", body: "Add inbound and outbound firewall rules for the QuickBooks ports for your year version (and exceptions for QBW32.exe / QBDBMgrN.exe), and allow QuickBooks through any third-party antivirus. Re-running File Doctor can configure these automatically if manual rules are error-prone." },
    { name: "Rename the .ND file or re-scan the folder", body: "On the host, rename the company file&rsquo;s .ND file (add .OLD to the end), then open Database Server Manager and re-scan the folder. QuickBooks rebuilds a fresh .ND file with correct network-data settings." },
    { name: "Confirm the workstation can reach the host", body: "From a workstation, ping the host by its computer name and IP. If it can&rsquo;t reach the host, fix the network path, DNS, or hosts file so the workstation resolves the host reliably &mdash; then retry multi-user mode." },
    { name: "If H101 persists, escalate", body: "If H101 survives all the steps above, stop &mdash; continued retries won&rsquo;t help and can mask a deeper cause. A Certified ProAdvisor diagnostic identifies the underlying configuration or file-integrity issue and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all the steps", body: "You&rsquo;ve worked the ordered fix and H101 still blocks multi-user access. The cause is past the documented surface &mdash; usually configuration or a damaged .ND/file-integrity issue." },
    { name: "Multi-user won&rsquo;t stabilize", body: "H101 clears, then returns, or multi-user won&rsquo;t hold steady across the network. A recurring error signals an underlying configuration or environment problem that a one-time fix masks rather than resolves." },
    { name: "It&rsquo;s appearing alongside other errors", body: "H101 alongside 6000-series or other codes points to deeper company-file integrity problems &mdash; the moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "Error H202", href: "/quickbooks/help/error-codes/h202/", body: "The same family: the workstation can&rsquo;t connect to the host computer that stores the company file. Same diagnostic approach as H101 &mdash; full causes-and-fix walkthrough." },
    { title: "Error H505", href: "/quickbooks/help/error-codes/h505/", body: "The same family: the workstation thinks the file is on a machine that isn&rsquo;t set to host. Same root-cause family as H101 &mdash; full causes-and-fix walkthrough." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; H-series, 6000-series, PS-series, and the critical codes, with what each means and when to call." },
    { title: "File cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "When H101 turns out to be file-integrity damage rather than a network issue, a fixed-fee QuickBooks file cleanup repairs the file properly." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused H101 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error H101?", a: "A multi-user error: a workstation tries to open the company file in multi-user mode but can&rsquo;t establish a connection to the server hosting it. It often shows up the first time a workstation tries to reach the file, before the server connection is set up. Exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error H101?", a: "Common causes: (1) Database Server Manager not running on the host; (2) hosting configured incorrectly &mdash; a workstation set to host, or the server not set to host; (3) a firewall blocking QuickBooks ports or executables; (4) the workstation unable to resolve the host name or IP; (5) a damaged network-data (.ND) file." },
    { q: "Can I fix QuickBooks Error H101 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); confirm Database Server Manager is running and only the host is set to multi-user hosting; verify each workstation has hosting OFF; configure the firewall and antivirus for QuickBooks; rename the .ND file or re-scan the folder in Database Server Manager; confirm the workstation can ping or reach the host. Tool Hub alone resolves H101 in many cases." },
    { q: "When does Error H101 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after an hour or two; multi-user won&rsquo;t stabilize across the network; the error recurs; you don&rsquo;t have admin access to the host or firewall; or H101 appears alongside other errors, which suggests deeper file-integrity issues. Typical focused resolution is a $1,200–$3,000 fixed-fee scope." },
    { q: "What&rsquo;s the difference between Error H101, H202, and H505?", a: "All three are multi-user errors with similar root causes. H101: the workstation can&rsquo;t establish the first connection to the server hosting the file. <a href=\"/quickbooks/help/error-codes/h202/\">H202</a>: the workstation can&rsquo;t connect to the host. <a href=\"/quickbooks/help/error-codes/h505/\">H505</a>: the workstation thinks the file is on a machine that isn&rsquo;t set up to host. The same diagnostic approach resolves all three." },
    { q: "Does Error H101 appear in QuickBooks Online?", a: "No. H101 is exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it&rsquo;s a multi-user/network error tied to how Desktop hosts a company file across machines. QuickBooks Online is browser-based and has no equivalent multi-user hosting error." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/h101/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#h101-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error H101","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error H101: Multi-User Connection Causes & Fixes","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error H101","description":"Resolve QuickBooks Error H101 with ordered steps that address the common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks Database Server Manager"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#h101-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error H101 resolution","serviceType":"QuickBooks multi-user error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused H101 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /quickbooks/help/error-codes/h202/ (round-20 clean elevation — PROVING PAGE
 * for the error-code child class; rule 1: pattern must be founder-approved before
 * the other 6 children reuse it). Sources: baseline.json (36 headings / 6 FAQ /
 * TechArticle+HowTo+HowToStep+HowToTool schema) + the old root HTML (full copy
 * read). t-guide tier (reference; no call-bar). Citable: the FIVE causes in order
 * of likelihood + the SIX-step ordered self-fix (HowTo). Sheet-7 honest-triage:
 * disclosure above the fold; first FAQ = "Is this official QuickBooks support?"
 * → No, plainly (ADDITIVE, baseline 6 preserved = 7); never "official" near our
 * offer; phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent
 * firm)" in copy; provider always #organization. CTA: error-code = QB-specific —
 * file-review primary, book-call secondary, phone tertiary (Sheet 9 allows phone
 * tertiary on error-code BOFU). Authorship firm-level; founder schema-only. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "H202 is a Desktop/Enterprise error &mdash; resolving it takes fluency in multi-user mode, Database Server Manager, and network configuration.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to diagnose H202 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs H505-H101)
  aiSummary: [
    { q: "What is QuickBooks Error H202?", a: "A QuickBooks <strong>multi-user error</strong>: the workstation can see the company file exists on a host computer but can&rsquo;t establish the multi-user connection. Exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error H202?", a: "Five causes account for the large majority: (1) Database Server Manager not running on the host; (2) hosting misconfigured on host or workstation; (3) a firewall blocking QuickBooks ports or executables; (4) a mapped drive letter instead of a UNC path; (5) hostname resolution failing between workstation and host." },
    { q: "Can I fix H202 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); verify Database Server Manager is running on the host; check hosting settings on each machine; add firewall rules for QuickBooks ports; switch to a UNC path; confirm hostname resolution. Tool Hub alone clears H202 in many cases." },
    { q: "When does H202 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it within an hour or two, the error recurs within days, multiple workstations show H202 at once, you lack admin access to the host or firewall, or H202 appears alongside other errors &mdash; a signal of deeper file-integrity issues." },
    { q: "How is H202 different from H505 and H101?", a: "All three are multi-user errors with similar root causes. <strong>H202</strong>: the workstation can&rsquo;t connect to the host. <strong>H505</strong>: the workstation thinks the file is on a machine that isn&rsquo;t set to host. <strong>H101</strong>: multi-user setup is incomplete on this machine. The same diagnostic approach resolves all three." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Database Server Manager not running", body: "The most common cause. QuickBooks Database Server Manager (QBDBXX, where XX is the year version) brokers all multi-user file access. If the service isn&rsquo;t running on the host machine, no workstation can connect &mdash; H202." },
    { rank: "Cause 02", name: "Hosting configured incorrectly", body: "Two patterns: the host isn&rsquo;t set to host multi-user access, or a workstation is mistakenly set to host itself. Only the host should host; workstations never should. Mismatched configuration breaks multi-user mode." },
    { rank: "Cause 03", name: "Firewall blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the ports or executables QuickBooks needs for multi-user communication. The fix is explicit inbound and outbound rules for the QuickBooks ports and program files." },
    { rank: "Cause 04", name: "Mapped drive letter unstable", body: "Accessing the file via a mapped drive letter (Q:\\) that disconnects or remaps instead of a stable UNC path (\\\\SERVER\\share) intermittently breaks the multi-user connection." },
    { rank: "Cause 05", name: "Hostname resolution failing", body: "The workstation can&rsquo;t resolve the host&rsquo;s computer name to its network address. Pinging the host by name fails while pinging by IP succeeds &mdash; a DNS or hosts-file issue underneath the QuickBooks error." },
    { rank: "Less common", name: "Less common: damaged .ND files, multi-version conflicts, deeper file corruption", body: "A corrupted network-data (.ND) file, two QuickBooks year-versions fighting over the same file, or genuine company-file integrity damage. These are where surface steps stop working and a diagnostic is warranted." },
  ],
  // Seven ordered fix steps — the HowTo sequence (process-diagram). Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks File Doctor from Tool Hub", body: "On the host, open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix My File, then run QuickBooks File Doctor. This alone resolves H202 in many cases by repairing hosting and network settings automatically." },
    { name: "Verify Database Server Manager is running", body: "On the host, open Services (services.msc) and confirm QuickBooksDBXX is Started and set to Automatic. If it&rsquo;s stopped, start it; if missing, reinstall Database Server Manager from the QuickBooks installer." },
    { name: "Verify hosting settings on each machine", body: "On the host: File &rarr; Utilities &rarr; the option should read &ldquo;Stop Hosting Multi-User Access&rdquo; (meaning hosting is ON). On every workstation it should read &ldquo;Host Multi-User Access&rdquo; (meaning hosting is OFF). Only the host hosts." },
    { name: "Add QuickBooks ports to the firewall", body: "Add inbound and outbound firewall rules for the QuickBooks ports for your year version (and exceptions for QBW32.exe / QBDBMgrN.exe). Re-running File Doctor can configure these automatically if manual rules are error-prone." },
    { name: "Use UNC path instead of mapped drive", body: "Open the company file via its UNC path (\\\\HOSTNAME\\SharedFolder\\file.qbw) rather than a mapped drive letter. UNC paths survive reconnects that break mapped drives mid-session." },
    { name: "Confirm hostname resolution", body: "From a workstation, ping the host by its computer name. If the name fails but the IP succeeds, fix DNS or the hosts file so the workstation can resolve the host reliably &mdash; then retry multi-user mode." },
    { name: "If H202 persists, escalate", body: "If H202 survives all six steps above, stop &mdash; continued retries won&rsquo;t help and can mask a deeper cause. A Certified ProAdvisor diagnostic identifies the underlying configuration or file-integrity issue and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all six steps", body: "You&rsquo;ve worked the ordered fix and H202 still blocks multi-user access. The cause is past the documented surface &mdash; usually configuration or a damaged .ND/file-integrity issue." },
    { name: "It keeps coming back", body: "H202 clears, then returns within days. A recurring error signals an underlying configuration or environment problem that a one-time fix masks rather than resolves." },
    { name: "It&rsquo;s appearing alongside other errors", body: "H202 alongside 6000-series or other codes points to deeper company-file integrity problems &mdash; the moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "Error H505", href: "/quickbooks/help/error-codes/", body: "The same family: the workstation thinks the file is on a machine that isn&rsquo;t set to host. Same diagnostic approach as H202 &mdash; see the H-series in the full error-codes reference." },
    { title: "Error H101", href: "/quickbooks/help/error-codes/", body: "Multi-user setup is incomplete on this machine. Same root-cause family as H202 &mdash; covered in the full error-codes reference." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; H-series, 6000-series, PS-series, and the critical codes, with what each means and when to call." },
    { title: "File cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "When H202 turns out to be file-integrity damage rather than a network issue, a fixed-fee QuickBooks file cleanup repairs the file properly." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused H202 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this official QuickBooks support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error H202?", a: "A multi-user error: the workstation can see the company file exists on a host computer but can&rsquo;t establish the multi-user connection. The workstation knows the file is somewhere; it just can&rsquo;t reach it. Exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error H202?", a: "Five common causes: (1) Database Server Manager not running on the host; (2) hosting misconfigured on the host or a workstation; (3) a firewall blocking QuickBooks ports or executables; (4) a mapped drive letter instead of a UNC path; (5) hostname resolution failing between workstation and host." },
    { q: "Can I fix QuickBooks Error H202 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); verify Database Server Manager is running on the host; check hosting settings on each machine; add firewall rules for QuickBooks ports; switch to a UNC path; confirm hostname resolution. Tool Hub alone resolves H202 in many cases." },
    { q: "When does Error H202 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after an hour or two; the error recurs within days; multiple workstations show H202 simultaneously; you don&rsquo;t have admin access to the host or firewall; or H202 appears alongside other errors, which suggests deeper file-integrity issues. Typical focused resolution is a $1,200–$3,000 fixed-fee scope." },
    { q: "What&rsquo;s the difference between Error H202 and Error H505?", a: "Both are multi-user errors with similar root causes. H202: the workstation can&rsquo;t connect to the host. H505: the workstation thinks the file is on a different machine that isn&rsquo;t set up to host. H101: multi-user setup is incomplete on this machine. The same diagnostic approach resolves all three." },
    { q: "Does Error H202 appear in QuickBooks Online?", a: "No. H202 is exclusive to QuickBooks Desktop, Premier, and Enterprise &mdash; it&rsquo;s a multi-user/network error tied to how Desktop hosts a company file across machines. QuickBooks Online is browser-based and has no equivalent multi-user hosting error." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/h202/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#h202-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error H202","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error H202: What It Means & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error H202","description":"Resolve QuickBooks Error H202 with six ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks Database Server Manager"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#h202-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error H202 resolution","serviceType":"QuickBooks multi-user error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused H202 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

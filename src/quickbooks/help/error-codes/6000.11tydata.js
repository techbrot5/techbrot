/* /quickbooks/help/error-codes/6000/ (error-code child — clones the round-20
 * H202 proving pattern via the 6123 sibling, founder-approved). t-guide tier
 * (reference; no call-bar). Citable: the SIX causes in order of likelihood + the
 * SIX-step ordered self-fix (HowTo). Sheet-7 honest-triage: disclosure above the
 * fold; first FAQ = "Is this Intuit's official support?" → No, plainly; never
 * "official" near our offer; phone = "Speak to a ProAdvisor" (canonical lexicon) +
 * "(independent firm)" in copy; provider always #organization. CTA: error-code =
 * QB-specific — file-review primary, book-call secondary, phone tertiary. Authorship
 * firm-level; founder schema-only (#david-westgate reviewedBy). intent=qb-error.
 * Accurate Error 6000 (6000-series) content; no fabricated Intuit internals. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "Error 6000 is a Desktop/Enterprise company-file error &mdash; resolving it takes fluency in hosting, network paths, .ND/.TLG files, and file-integrity repair.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to diagnose the specific 6000 suffix past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / suffixes)
  aiSummary: [
    { q: "What is QuickBooks Error 6000?", a: "A family of QuickBooks <strong>company-file errors</strong> (the 6000-series): QuickBooks Desktop can&rsquo;t open the company file. It&rsquo;s usually shown as 6000 followed by a second number &mdash; for example &ldquo;6000 -83&rdquo;, &ldquo;6000 -301&rdquo;, or &ldquo;6000 -82&rdquo; &mdash; and most often appears when opening a file over a network, in multi-user mode, or while restoring a backup. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 6000?", a: "Six causes account for the large majority: (1) a damaged or misconfigured network/hosting (multi-user) setup; (2) a damaged company file (.QBW) or its supporting .ND/.TLG files; (3) a firewall or antivirus blocking QuickBooks; (4) opening a file on an external or network drive with bad permissions; (5) the file being converted, restored, or opened in the wrong QuickBooks version; (6) a file moved across machines." },
    { q: "Can I fix Error 6000 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); rename the .ND and .TLG files; copy the company file to the local drive and open it there; check hosting/multi-user configuration; check firewall and antivirus; restore from a clean backup. Tool Hub alone clears many 6000-series errors." },
    { q: "When does Error 6000 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it, the error recurs, the company file is genuinely damaged, or it appears with a specific suffix (such as -83, -301, or -82) that won&rsquo;t clear &mdash; a signal the file or its hosting configuration needs professional repair past the documented surface steps." },
    { q: "What do the numbers after 6000 mean?", a: "The 6000 marks the 6000-series company-file family; the second number narrows down why QuickBooks can&rsquo;t open the file. <strong>6000 -83</strong>, <strong>6000 -301</strong>, and <strong>6000 -82</strong> are common suffixes tied to network/hosting, permission, or file-integrity issues. They share one diagnostic approach: repair the connection and hosting first, then the file." },
  ],
  // Six causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Damaged or misconfigured network / hosting setup", body: "The most common cause in multi-user environments. When the company file lives on a server or another computer, a damaged network connection or an incorrectly configured multi-user/hosting setup stops QuickBooks from reaching the file &mdash; an Error 6000. A workstation mistakenly set to host, or a stopped Database Server Manager, is a frequent trigger." },
    { rank: "Cause 02", name: "Damaged company file or supporting .ND/.TLG files", body: "Genuine integrity damage to the company (.QBW) file, or corruption in the network-data (.ND) or transaction-log (.TLG) files that QuickBooks uses to open it, breaks access and produces a 6000-series error. This is where surface steps stop working and a diagnostic is warranted." },
    { rank: "Cause 03", name: "Firewall or antivirus blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the executables or ports QuickBooks needs to reach the company file. This often appears right after a security-software or Windows update changes the rules. The fix is explicit exceptions for the QuickBooks program files and ports." },
    { rank: "Cause 04", name: "Bad permissions on an external or network drive", body: "Opening a company file stored on an external drive or a network share where the Windows account QuickBooks runs under lacks read/write permission surfaces as an Error 6000. Permission changes after an update, a new user profile, or a relocated folder can all cause it." },
    { rank: "Cause 05", name: "File being converted, restored, or opened in the wrong version", body: "A file mid-conversion, mid-restore, or opened in a different QuickBooks year-version than it was created in can produce a 6000-series error. The file and the program disagree about version, state, or location, and the open fails." },
    { rank: "Cause 06", name: "File moved or restored across machines", body: "Moving the company file to a new computer, or restoring it onto different hardware, can break the path and the supporting files QuickBooks expects &mdash; producing an Error 6000 the first time the file is opened on the new machine." },
  ],
  // Six ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks Tool Hub (Quick Fix my File, then File Doctor)", body: "Open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix my File, then run QuickBooks File Doctor. This alone resolves many 6000-series errors by repairing the connection, hosting, and file settings automatically. Run it on the computer that stores the file when possible." },
    { name: "Rename the .ND and .TLG files", body: "In the folder with your company file, rename the matching .ND and .TLG files (add .OLD to the end). QuickBooks rebuilds them automatically on the next open. This clears corruption in those supporting files without touching the company file itself." },
    { name: "Copy the company file locally and open it", body: "Copy your company file to the local Desktop and open it there. If the local copy opens cleanly, the problem is the network path, drive permissions, or hosting &mdash; not the file itself. If the local copy still fails, the issue is the file or the QuickBooks install." },
    { name: "Check hosting / multi-user configuration", body: "If the file is shared, make sure only the host computer is set to host multi-user access and that Database Server Manager is running there. A workstation mistakenly set to host, or a stopped service, breaks the connection that an Error 6000 reports." },
    { name: "Check firewall and antivirus", body: "Add exceptions for the QuickBooks program files and ports in Windows Firewall and any third-party antivirus, or temporarily disable the security software to test. If the file opens with protection off, create permanent rules so the block doesn&rsquo;t return after a reboot." },
    { name: "Restore from a clean backup, then escalate", body: "If the Error 6000 persists, restore from a known-good backup created before the error began. If the error survives even a clean restore, stop &mdash; continued retries can mask deeper damage. A Certified ProAdvisor diagnostic identifies the underlying cause and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all six steps", body: "You&rsquo;ve worked the ordered fix and the Error 6000 still blocks the file. The cause is past the documented surface &mdash; usually network/hosting configuration or genuine company-file integrity damage." },
    { name: "It keeps coming back", body: "The Error 6000 clears, then returns. A recurring error signals an underlying configuration, security-software, or file-integrity problem that a one-time fix masks rather than resolves." },
    { name: "A specific suffix won&rsquo;t clear", body: "A 6000-series code with a stubborn suffix &mdash; such as 6000 -83, 6000 -301, or 6000 -82 &mdash; that survives the self-fix points to deeper company-file or hosting problems. The moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "The 6000-series company-file errors", href: "/quickbooks/help/error-codes/error-6000-series/", body: "Error 6000 is the umbrella for the whole 6000-series &mdash; all company-file errors where QuickBooks can&rsquo;t open the file. See the full 6000-series reference for the common suffixes and the shared diagnostic approach." },
    { title: "Error 6123", href: "/quickbooks/help/error-codes/6123/", body: "Error 6123, 0 is a 6000-series broken-connection error &mdash; QuickBooks can&rsquo;t open or restore the file because the connection is broken. The same network, hosting, and file-integrity steps apply." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 6000 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 6000?", a: "It&rsquo;s the QuickBooks Desktop 6000-series &mdash; a family of company-file errors that all mean QuickBooks can&rsquo;t open the company file. It&rsquo;s usually shown as 6000 followed by a second number (for example 6000 -83, 6000 -301, or 6000 -82) and most often appears when opening a file over a network, in multi-user mode, or while restoring a backup. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 6000?", a: "Six common causes: (1) a damaged or misconfigured network/hosting (multi-user) setup; (2) a damaged company file (.QBW) or its supporting .ND/.TLG files; (3) a firewall or antivirus blocking QuickBooks; (4) bad permissions on an external or network drive; (5) the file being converted, restored, or opened in the wrong QuickBooks version; (6) a file moved across machines." },
    { q: "Can I fix QuickBooks Error 6000 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); rename the .ND and .TLG files; copy the company file to the local drive and open it there; check hosting/multi-user configuration; check firewall and antivirus; restore from a clean backup. Tool Hub alone resolves many 6000-series errors." },
    { q: "What do the numbers after 6000 mean?", a: "The 6000 marks the company-file family; the second number narrows down the reason. Common suffixes include 6000 -83, 6000 -301, and 6000 -82, each tied to network/hosting, permission, or file-integrity issues. They share one diagnostic approach &mdash; repair the connection and hosting first, then the file." },
    { q: "When does Error 6000 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it; the error recurs; the company file is genuinely damaged; or it appears with a specific suffix that won&rsquo;t clear. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "Does Error 6000 appear in QuickBooks Online?", a: "No. The 6000-series is exclusive to QuickBooks Desktop and Enterprise &mdash; these are company-file errors tied to how Desktop opens a .QBW file locally or over a network. QuickBooks Online is browser-based and has no company-file or 6000-series errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/6000/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#6000-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 6000","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 6000 (Series): Causes & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 6000","description":"Resolve a QuickBooks 6000-series company-file error with six ordered steps that address the six common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks File Doctor"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#6000-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 6000 resolution","serviceType":"QuickBooks company-file error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 6000 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

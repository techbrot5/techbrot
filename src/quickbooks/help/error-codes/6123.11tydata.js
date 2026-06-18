/* /quickbooks/help/error-codes/6123/ (error-code child — clones the round-20
 * H202 proving pattern, founder-approved). t-guide tier (reference; no call-bar).
 * Citable: the SIX causes in order of likelihood + the SIX-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold; first FAQ = "Is this
 * Intuit's official support?" → No, plainly; never "official" near our offer;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in
 * copy; provider always #organization. CTA: error-code = QB-specific —
 * file-review primary, book-call secondary, phone tertiary. Authorship firm-level;
 * founder schema-only (#david-westgate reviewedBy). intent=qb-error-6123.
 * Accurate Error 6123, 0 content; no fabricated Intuit internals. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "Error 6123 is a Desktop/Enterprise company-file error &mdash; resolving it takes fluency in hosting, network paths, .ND/.TLG files, and file-integrity repair.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to diagnose Error 6123 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 6000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 6123?", a: "A QuickBooks <strong>company-file connection error</strong> (a 6000-series code, usually shown as &ldquo;Error 6123, 0&rdquo;): QuickBooks Desktop can&rsquo;t open or restore the company file because its connection to that file is broken. It often appears when opening a file, restoring a backup, or opening a file over a network. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 6123?", a: "Six causes account for the large majority: (1) a damaged network connection or multi-user/hosting setup; (2) a firewall or antivirus blocking QuickBooks; (3) opening a file from a different QuickBooks version or a restored backup; (4) damaged .ND/.TLG files or a damaged company file; (5) Windows user-permission issues; (6) a file moved or restored across machines." },
    { q: "Can I fix Error 6123 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); rename the .ND and .TLG files; confirm hosting/multi-user configuration; check firewall and antivirus; try opening a sample file or a local copy; restore from a clean backup. Tool Hub alone clears Error 6123 in many cases." },
    { q: "When does Error 6123 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it within an hour or two, the error recurs within days, it appears alongside other 6000-series codes, you can&rsquo;t open the file even locally, or the file is genuinely damaged &mdash; a signal the company file itself needs professional repair." },
    { q: "How is Error 6123 related to other 6000-series codes?", a: "The 6000-series are all company-file errors &mdash; QuickBooks can&rsquo;t open or access the file. <strong>6123, 0</strong> is a broken-connection error tied to network paths, hosting, security software, version/restore mismatches, or file damage. Codes like 6000 77, 6000 83, and 6190 share the same diagnostic approach: repair the connection, then the file." },
  ],
  // Six causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Damaged network connection or hosting setup", body: "The most common cause. When the company file lives on another computer or server, a broken network connection or a misconfigured multi-user/hosting setup stops QuickBooks from reaching the file &mdash; Error 6123, 0. Opening the file over an unstable network path is a frequent trigger." },
    { rank: "Cause 02", name: "Firewall or antivirus blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the executables or ports QuickBooks needs to reach the company file. This often appears right after a security-software or Windows update changes the rules. The fix is explicit exceptions for the QuickBooks program files and ports." },
    { rank: "Cause 03", name: "Different QuickBooks version or restored backup", body: "Opening a file created in a newer QuickBooks year-version, or restoring a backup made on a different machine or version, can produce Error 6123, 0. The file and the program disagree about version or location, and the connection fails." },
    { rank: "Cause 04", name: "Damaged .ND/.TLG files or company file", body: "A corrupted network-data (.ND) or transaction-log (.TLG) file &mdash; or genuine integrity damage to the company (.QBW) file itself &mdash; breaks the connection QuickBooks needs to open it. This is where surface steps stop working and a diagnostic is warranted." },
    { rank: "Cause 05", name: "Windows user-permission issues", body: "The Windows account QuickBooks runs under lacks the permissions needed to read or write in the folder holding the company file. Permission changes after an update, a new user profile, or a relocated folder can all surface as Error 6123." },
    { rank: "Cause 06", name: "File moved or restored across machines", body: "Moving the company file to a new computer, or restoring it onto different hardware, can break the path and the supporting files QuickBooks expects &mdash; producing Error 6123, 0 the first time the file is opened on the new machine." },
  ],
  // Six ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks Tool Hub (Quick Fix My File, then File Doctor)", body: "Open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix My File, then run QuickBooks File Doctor. This alone resolves Error 6123 in many cases by repairing the connection, hosting, and file settings automatically. Run it on the computer that stores the file when possible." },
    { name: "Rename the .ND and .TLG files", body: "In the folder with your company file, rename the matching .ND and .TLG files (add .OLD to the end). QuickBooks rebuilds them automatically on the next open. This clears corruption in those supporting files without touching the company file itself." },
    { name: "Confirm hosting / multi-user configuration", body: "If the file is shared, make sure only the host computer is set to host multi-user access and that Database Server Manager is running there. A workstation mistakenly set to host, or a stopped service, breaks the connection that Error 6123 reports." },
    { name: "Check firewall and antivirus", body: "Add exceptions for the QuickBooks program files and ports in Windows Firewall and any third-party antivirus, or temporarily disable the security software to test. If the file opens with protection off, create permanent rules so the block doesn&rsquo;t return after a reboot." },
    { name: "Try a sample file or a local copy", body: "Open a QuickBooks sample file to confirm the program itself works. Then copy your company file to the local Desktop and open it there. If the local copy opens, the issue is the network path, permissions, or hosting &mdash; not the file. If the sample fails too, the install needs repair." },
    { name: "Restore from a clean backup, then escalate", body: "If Error 6123 persists, restore from a known-good backup created before the error began. If the error survives even a clean restore, stop &mdash; continued retries can mask deeper damage. A Certified ProAdvisor diagnostic identifies the underlying cause and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all six steps", body: "You&rsquo;ve worked the ordered fix and Error 6123 still blocks the file. The cause is past the documented surface &mdash; usually network/permission configuration or genuine company-file integrity damage." },
    { name: "It keeps coming back", body: "Error 6123 clears, then returns within days. A recurring error signals an underlying configuration, security-software, or file-integrity problem that a one-time fix masks rather than resolves." },
    { name: "It&rsquo;s appearing alongside other 6000-series codes", body: "Error 6123 alongside 6000 77, 6000 83, 6190, or other 6000-series codes points to deeper company-file integrity problems &mdash; the moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "The 6000-series company-file errors", href: "/quickbooks/help/error-codes/error-6000-series/", body: "Error 6123 is one of the 6000-series &mdash; all company-file errors where QuickBooks can&rsquo;t open or access the file. See the full 6000-series reference for 6000 77, 6000 83, 6190, and the shared diagnostic approach." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
    { title: "File cleanup", href: "/quickbooks/cleanup/?intent=qb-cleanup", body: "When Error 6123 turns out to be file-integrity damage rather than a network or security issue, a fixed-fee QuickBooks file cleanup repairs the file properly." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 6123 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 6123?", a: "A company-file connection error, usually shown as &ldquo;Error 6123, 0&rdquo;: QuickBooks Desktop can&rsquo;t open or restore the company file because the connection to it is broken. It commonly appears when opening a file, restoring a backup, or opening a file over a network &mdash; often right after a Windows or QuickBooks update. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 6123?", a: "Six common causes: (1) a damaged network connection or multi-user/hosting setup; (2) a firewall or antivirus blocking QuickBooks; (3) opening a file from a different QuickBooks version or a restored backup; (4) damaged .ND/.TLG files or a damaged company file; (5) Windows user-permission issues; (6) a file moved or restored across machines." },
    { q: "Can I fix QuickBooks Error 6123 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); rename the .ND and .TLG files; confirm hosting/multi-user configuration; check firewall and antivirus; try opening a sample file or a local copy of the file; restore from a clean backup. Tool Hub alone resolves Error 6123 in many cases." },
    { q: "When does Error 6123 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after an hour or two; the error recurs within days; it appears alongside other 6000-series codes; you can&rsquo;t open the file even from a local copy; or the company file is genuinely damaged. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "How is Error 6123 related to the other 6000-series errors?", a: "The 6000-series are all company-file errors &mdash; QuickBooks can&rsquo;t open or access the file. Error 6123, 0 is specifically a broken-connection error tied to network paths, hosting, security software, version/restore mismatches, or file damage. Codes such as 6000 77, 6000 83, and 6190 share the same diagnostic approach: repair the connection first, then the file." },
    { q: "Does Error 6123 appear in QuickBooks Online?", a: "No. Error 6123 is exclusive to QuickBooks Desktop and Enterprise &mdash; it&rsquo;s a company-file connection error tied to how Desktop opens a .QBW file locally or over a network. QuickBooks Online is browser-based and has no company-file or 6000-series errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/6123/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#6123-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 6123","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 6123: What It Means & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 6123","description":"Resolve QuickBooks Error 6123, 0 with six ordered steps that address the six common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks File Doctor"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#6123-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 6123 resolution","serviceType":"QuickBooks company-file connection error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 6123 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

/* /quickbooks/help/error-codes/6000-83/ (error-code child — clones the 6123
 * proving pattern, founder-approved). t-guide tier (reference; no call-bar).
 * Citable: the SIX causes in order of likelihood + the SIX-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold; Intuit login/billing
 * routed to Intuit (rel="noopener nofollow"); first FAQ = "Is this Intuit's
 * official support?" → No, plainly; never "official" near our offer; phone =
 * "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in copy;
 * provider always #organization. CTA: error-code = QB-specific — file-review
 * primary, phone secondary, book-call tertiary. Authorship firm-level; founder
 * schema-only (#david-westgate reviewedBy). intent=qb-error. Accurate
 * Error 6000, 83 content; no fabricated Intuit internals or phone/hours. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Annual Intuit re-certification" },
  ],
  credentials: [
    "Error 6000, 83 is a Desktop/Enterprise company-file error &mdash; resolving it takes fluency in folder permissions, network shares, hosting, .ND files, and file-integrity repair.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications; Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification.",
    "Operational experience to diagnose Error 6000, 83 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 6000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 6000, 83?", a: "A QuickBooks <strong>company-file error</strong> (a 6000-series code, usually shown as &ldquo;Error -6000, -83&rdquo;): QuickBooks Desktop can&rsquo;t open or restore the company file. It most often appears when the file is on a server or network share, when restoring a backup, or when folder permissions are wrong. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 6000, 83?", a: "Six causes account for the large majority: (1) incorrect folder or network-share permissions on the file&rsquo;s location; (2) a damaged .ND file or hosting that isn&rsquo;t configured right in multi-user; (3) restoring a backup directly to a network drive; (4) a damaged company file; (5) a firewall or antivirus blocking QuickBooks; (6) a file name with special characters or an over-length file path." },
    { q: "Can I fix Error 6000, 83 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); open or restore the file from a LOCAL drive instead of the network; rename the .ND and .TLG files; check folder permissions (full control for the QuickBooks user); confirm hosting configuration; check firewall and antivirus. Tool Hub alone clears Error 6000, 83 in many cases." },
    { q: "When does Error 6000, 83 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it, the error recurs, your multi-user setup won&rsquo;t stabilize, or the company file is genuinely damaged &mdash; a signal the file or its hosting needs professional repair against a written scope." },
    { q: "How is Error 6000, 83 related to other 6000-series codes?", a: "The 6000-series are all company-file errors &mdash; QuickBooks can&rsquo;t open or access the file. <strong>6000, 83</strong> is tied to folder/network permissions, hosting and .ND files, restoring over a network, or file damage. Codes like 6000 77, 6000 304, and 6123 share the same diagnostic approach: fix the access path and hosting, then the file." },
  ],
  // Six causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Incorrect folder or network-share permissions", body: "The most common cause. The Windows folder or network share holding the company file doesn&rsquo;t grant the QuickBooks user full control, so QuickBooks can&rsquo;t read or write the file &mdash; Error 6000, 83. Permission changes after a move, a new user profile, or an OS update are frequent triggers." },
    { rank: "Cause 02", name: "Damaged .ND file or hosting not configured right", body: "In a multi-user setup, a corrupted network-data (.ND) file or hosting that isn&rsquo;t set up correctly across machines stops QuickBooks from reaching the file. A workstation mistakenly set to host, or a stopped Database Server Manager service, breaks the connection that Error 6000, 83 reports." },
    { rank: "Cause 03", name: "Restoring a backup to a network drive", body: "Restoring a backup (.QBB) directly to a server or network drive frequently triggers Error 6000, 83. QuickBooks restores reliably to a local drive. Restore the file locally first, then move it to its shared location once it opens cleanly." },
    { rank: "Cause 04", name: "Damaged company file", body: "Genuine integrity damage to the company (.QBW) file itself can produce Error 6000, 83 when QuickBooks tries to open it. This is where surface steps stop working and a diagnostic &mdash; or a clean restore &mdash; is warranted." },
    { rank: "Cause 05", name: "Firewall or antivirus blocking QuickBooks", body: "Windows Firewall or third-party antivirus blocks the executables or ports QuickBooks needs to reach the company file, especially over a network. This often appears right after a security-software or Windows update. The fix is explicit exceptions for the QuickBooks program files and ports." },
    { rank: "Cause 06", name: "File name with special characters or over-length path", body: "A company-file name containing special characters, or a folder path that is too long, can stop QuickBooks from opening the file and surface as Error 6000, 83. Renaming the file with plain characters and shortening the path resolves this class of cause." },
  ],
  // Six ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks Tool Hub (Quick Fix my File, then File Doctor)", body: "Open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix my File, then run QuickBooks File Doctor. This alone resolves Error 6000, 83 in many cases by repairing permissions, hosting, and file settings automatically. Run it on the computer that stores the file when possible." },
    { name: "Open or restore the file from a LOCAL drive, not the network", body: "Copy the company file to the local Desktop and open it there, and when restoring a backup, restore it to a local drive first &mdash; never directly to a network drive. If the local copy opens cleanly, the issue is the network path, share permissions, or hosting rather than the file itself." },
    { name: "Rename the .ND and .TLG files", body: "In the folder with your company file, rename the matching .ND and .TLG files (add .OLD to the end). QuickBooks rebuilds them automatically on the next open. This clears corruption in those supporting files without touching the company file itself." },
    { name: "Check folder permissions (full control for the QuickBooks user)", body: "Confirm the Windows account QuickBooks runs under has full control of the folder holding the company file, and that the network share grants the same. Wrong folder or share permissions are the single most common cause of Error 6000, 83." },
    { name: "Confirm the hosting configuration", body: "If the file is shared, make sure only the host computer (the one that stores the file) is set to host multi-user access and that Database Server Manager is running there. A workstation mistakenly set to host, or a stopped service, breaks the access Error 6000, 83 reports." },
    { name: "Check firewall and antivirus, then escalate", body: "Add exceptions for the QuickBooks program files and ports in Windows Firewall and any third-party antivirus, or temporarily disable the security software to test. If Error 6000, 83 still persists after all of the above &mdash; or the multi-user setup won&rsquo;t stabilize &mdash; stop and book a diagnostic; continued retries can mask deeper damage." },
  ],
  proSignals: [
    { name: "It persists after every step", body: "You&rsquo;ve worked the ordered fix and Error 6000, 83 still blocks the file. The cause is past the documented surface &mdash; usually permissions, hosting configuration, or genuine company-file integrity damage." },
    { name: "It keeps coming back", body: "Error 6000, 83 clears, then returns &mdash; or the multi-user setup won&rsquo;t stay stable. A recurring error signals an underlying permissions, hosting, or file-integrity problem that a one-time fix masks rather than resolves." },
    { name: "The company file looks damaged", body: "Error 6000, 83 alongside other 6000-series codes, or a file that won&rsquo;t open even from a clean local copy, points to genuine company-file damage &mdash; the moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "Error 6000 (the base 6000-series error)", href: "/quickbooks/help/error-codes/6000/", body: "Error 6000, 83 is one variant of the base Error 6000 &mdash; the company-file error where QuickBooks can&rsquo;t open or access the file. See the Error 6000 reference for the shared causes and the diagnostic approach across variants." },
    { title: "The 6000-series company-file errors", href: "/quickbooks/help/error-codes/error-6000-series/", body: "Error 6000, 83 is one of the 6000-series &mdash; all company-file errors where QuickBooks can&rsquo;t open or access the file. See the full 6000-series reference for 6000 77, 6000 304, 6123, and the shared diagnostic approach." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 6000, 83 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 6000, 83?", a: "A company-file error, usually shown as &ldquo;Error -6000, -83&rdquo;: QuickBooks Desktop can&rsquo;t open or restore the company file. It commonly appears when the file is stored on a server or network share, when restoring a backup, or when the folder holding the file has the wrong permissions. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 6000, 83?", a: "Six common causes: (1) incorrect folder or network-share permissions on the file&rsquo;s location; (2) a damaged .ND file or hosting not configured right in multi-user; (3) restoring a backup directly to a network drive; (4) a damaged company file; (5) a firewall or antivirus blocking QuickBooks; (6) a file name with special characters or an over-length file path." },
    { q: "Can I fix QuickBooks Error 6000, 83 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix my File, then File Doctor); open or restore the file from a local drive instead of the network; rename the .ND and .TLG files; check folder permissions (full control for the QuickBooks user); confirm hosting configuration; check firewall and antivirus. Tool Hub alone resolves Error 6000, 83 in many cases." },
    { q: "When does Error 6000, 83 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it; the error recurs; the multi-user setup won&rsquo;t stabilize; you can&rsquo;t open the file even from a local copy; or the <a href=\"/quickbooks/help/file-corrupted/\">company file is genuinely damaged</a>. If the file won&rsquo;t open and recent work is at risk, stop retrying and reach a ProAdvisor directly at <a href=\"tel:+18777515575\">(877) 751-5575</a>. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "Why does Error 6000, 83 happen when I restore a backup?", a: "Restoring a backup (.QBB) directly to a server or network drive frequently triggers Error 6000, 83. QuickBooks restores reliably to a local drive. <a href=\"/quickbooks/help/backup-restore/\">Restore the file to a local drive first</a>, confirm it opens cleanly, then move it to its shared network location." },
    { q: "Does Error 6000, 83 appear in QuickBooks Online?", a: "No. Error 6000, 83 is exclusive to QuickBooks Desktop and Enterprise &mdash; it&rsquo;s a company-file error tied to how Desktop opens a .QBW file locally or over a network. QuickBooks Online is browser-based and has no company-file or 6000-series errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/6000-83/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#6000-83-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 6000-83","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 6000, 83: Causes & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 6000, 83","description":"Resolve QuickBooks Error 6000, 83 with six ordered steps that address the six common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks File Doctor"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#6000-83-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 6000, 83 resolution","serviceType":"QuickBooks company-file error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 6000, 83 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

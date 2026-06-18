/* /quickbooks/help/error-codes/6000-301/ (error-code child — clones the 6123
 * proving pattern, founder-approved). t-guide tier (reference; no call-bar).
 * Citable: the FIVE causes in order of likelihood + the FIVE-step ordered self-fix
 * (HowTo). Sheet-7 honest-triage: disclosure above the fold (Intuit login/billing
 * → Intuit, link rel=noopener nofollow; trademark line); first FAQ = "Is this
 * Intuit's official support?" → No, plainly; never "official" near our offer;
 * phone = "Speak to a ProAdvisor" (canonical lexicon) + "(independent firm)" in
 * copy; provider always #organization. CTA: error-code = QB-specific —
 * file-review primary, phone + book-call secondary. Authorship firm-level;
 * founder schema-only (#david-westgate reviewedBy). intent=qb-error.
 * Accurate Error 6000, -301 content; no fabricated Intuit internals. */
function stripTags(html){return html.replace(/<[^>]+>/g,"").replace(/&rsquo;/g,"’").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&mdash;/g,"—").replace(/&ndash;/g,"–").replace(/&rarr;/g,"→").replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&middot;/g,"·").replace(/\s+/g," ").trim();}
module.exports = {
  credStats: [
    { value: "4", label: "core QuickBooks platforms certified — Desktop, Enterprise, Online (Level 2), Payroll" },
    { value: "L2", label: "QuickBooks Online ProAdvisor tier (the highest)" },
    { value: "Yearly", label: "Intuit re-certification — verifiable on the public ProAdvisor directory" },
  ],
  credentials: [
    "Error 6000, -301 is a Desktop/Enterprise company-file error &mdash; resolving it takes fluency in installation repair, .ND/.TLG files, hosting, and file-integrity repair.",
    "Every ProAdvisor holds active Desktop and Enterprise certifications, verifiable on Intuit&rsquo;s public ProAdvisor directory.",
    "Operational experience to diagnose Error 6000, -301 past the documented surface steps &mdash; not a script-reading queue.",
  ],
  // quick-5 — distinct from FAQ (what / causes / fix-yourself / when-pro / vs 6000-series)
  aiSummary: [
    { q: "What is QuickBooks Error 6000, -301?", a: "A QuickBooks <strong>company-file error</strong> in the 6000-series (shown as &ldquo;Error 6000, -301&rdquo;): QuickBooks Desktop can&rsquo;t open the company file, usually because the file is damaged or because the QuickBooks installation components needed to open it are damaged or missing. It often appears after an interrupted install or alongside other 6000-series codes. Exclusive to QuickBooks Desktop and Enterprise &mdash; it does not occur in QuickBooks Online." },
    { q: "What causes Error 6000, -301?", a: "Five causes account for the large majority: (1) damage to the company (.QBW) file itself; (2) a damaged QuickBooks program installation that needs repair or reinstall; (3) damaged .ND or .TLG support files; (4) a network or hosting misconfiguration; (5) opening a file created in a different QuickBooks version." },
    { q: "Can I fix Error 6000, -301 myself?", a: "Often yes, in order of likelihood: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); run the QuickBooks Install Diagnostic Tool or repair the installation; rename the .ND and .TLG files; copy the company file to the local Desktop and open it there; restore from a clean backup. Tool Hub and an installation repair clear Error 6000, -301 in many cases." },
    { q: "When does Error 6000, -301 need a ProAdvisor?", a: "When self-fix doesn&rsquo;t resolve it within an hour or two, the error recurs within days, it appears alongside other 6000-series codes, you can&rsquo;t open the file even from a local copy, or the company file is genuinely damaged &mdash; a signal the file itself needs professional repair." },
    { q: "How is Error 6000, -301 related to other 6000-series codes?", a: "The 6000-series are all company-file errors &mdash; QuickBooks can&rsquo;t open or access the file. <strong>6000, -301</strong> is associated with a damaged company file or damaged/missing QuickBooks installation components. Codes like 6000 77, 6000 83, and 6190 share the same diagnostic approach: repair the program and connection, then the file." },
  ],
  // Five causes, ranked by likelihood — the citable list.
  causes: [
    { rank: "Cause 01", name: "Damaged company file", body: "The most common cause. Genuine integrity damage to the company (.QBW) file stops QuickBooks from opening it &mdash; Error 6000, -301. The damage may be the result of an abrupt shutdown, a power loss while saving, a sync interruption, or accumulated corruption in a large file, and it&rsquo;s where surface steps stop working and a diagnostic is warranted." },
    { rank: "Cause 02", name: "Damaged QuickBooks program installation", body: "When the QuickBooks installation components needed to open the file are damaged or missing &mdash; often after an interrupted or incomplete install or update &mdash; QuickBooks can&rsquo;t complete the open and reports 6000, -301. The fix is repairing the installation with the QuickBooks Install Diagnostic Tool, or a clean reinstall via QuickBooks Tool Hub." },
    { rank: "Cause 03", name: "Damaged .ND or .TLG files", body: "A corrupted network-data (.ND) or transaction-log (.TLG) file &mdash; the supporting files QuickBooks uses to open the company file &mdash; can break the open and surface as Error 6000, -301. Renaming them so QuickBooks rebuilds clean copies often clears it without touching the company file." },
    { rank: "Cause 04", name: "Network or hosting misconfiguration", body: "When the company file lives on another computer or server, a misconfigured multi-user/hosting setup or a broken network path can stop QuickBooks from reaching and opening the file. A workstation mistakenly set to host, or a stopped Database Server Manager, is a frequent trigger." },
    { rank: "Cause 05", name: "Opening a file from another version", body: "Opening a company file created in a different (often newer) QuickBooks year-version can produce Error 6000, -301 &mdash; the program and the file disagree about version, and the open fails until the file is updated or opened in the matching version." },
  ],
  // Five ordered fix steps — the HowTo sequence. Addresses the causes in the same order.
  fixSteps: [
    { name: "Run QuickBooks Tool Hub (Quick Fix My File, then File Doctor)", body: "Open QuickBooks Tool Hub &rarr; Company File Issues &rarr; Quick Fix My File, then run QuickBooks File Doctor. This alone resolves Error 6000, -301 in many cases by repairing the file and connection settings automatically. Run it on the computer that stores the file when possible." },
    { name: "Run the QuickBooks Install Diagnostic Tool / repair the installation", body: "If the file still won&rsquo;t open, the QuickBooks program components may be damaged. Run the QuickBooks Install Diagnostic Tool from QuickBooks Tool Hub (Installation Issues), or repair the QuickBooks installation from Windows. If repair doesn&rsquo;t hold, a clean reinstall via Tool Hub replaces the missing or damaged components." },
    { name: "Rename the .ND and .TLG files", body: "In the folder with your company file, rename the matching .ND and .TLG files (add .OLD to the end). QuickBooks rebuilds them automatically on the next open. This clears corruption in those supporting files without touching the company file itself." },
    { name: "Copy the file locally and open it", body: "Copy your company file to the local Desktop and open it there. If the local copy opens, the issue is the network path, permissions, or hosting &mdash; not the file. If it still fails locally, the problem is the file or the installation, which the steps above address." },
    { name: "Restore from a clean backup, then escalate", body: "If Error 6000, -301 persists, restore from a known-good backup created before the error began. If the error survives even a clean restore, stop &mdash; continued retries can mask deeper damage. A Certified ProAdvisor diagnostic identifies the underlying cause and resolves it against a written scope." },
  ],
  proSignals: [
    { name: "It persists after all five steps", body: "You&rsquo;ve worked the ordered fix &mdash; Tool Hub, installation repair, and the rest &mdash; and Error 6000, -301 still blocks the file. The cause is past the documented surface &mdash; usually genuine company-file integrity damage or an installation problem a repair didn&rsquo;t fully restore." },
    { name: "It keeps coming back", body: "Error 6000, -301 clears, then returns within days. A recurring error signals an underlying file-integrity or installation problem that a one-time fix masks rather than resolves." },
    { name: "It&rsquo;s appearing alongside other 6000-series codes", body: "Error 6000, -301 alongside 6000 77, 6000 83, 6190, or other 6000-series codes points to deeper company-file integrity problems &mdash; the moment to stop self-fixing and have the file assessed before damage progresses." },
  ],
  related: [
    { title: "Error 6000 (the base code)", href: "/quickbooks/help/error-codes/6000/", body: "Error 6000, -301 is a variant of the base Error 6000 &mdash; the family of company-file errors where QuickBooks can&rsquo;t open the file. See the Error 6000 reference for the shared causes and the full self-fix sequence." },
    { title: "The 6000-series company-file errors", href: "/quickbooks/help/error-codes/error-6000-series/", body: "Error 6000, -301 is one of the 6000-series &mdash; all company-file errors where QuickBooks can&rsquo;t open or access the file. See the full 6000-series reference for 6000 77, 6000 83, 6190, and the shared diagnostic approach." },
    { title: "All error codes", href: "/quickbooks/help/error-codes/", body: "The complete ProAdvisor reference &mdash; 6000-series, H-series, PS-series, and the critical codes, with what each means and when to call." },
  ],
  operatorSpec: [
    { value: "Diagnostic", label: "30-minute diagnostic, usually scheduled within a day" },
    { value: "$1,200–$3,000", label: "typical fixed-fee scope for focused Error 6000, -301 resolution" },
    { value: "Independent", label: "Certified ProAdvisor firm — not Intuit, not Intuit&rsquo;s software support" },
  ],
  faq: [
    { q: "Is this Intuit&rsquo;s official support?", a: "No. TechBrot is an independent Certified QuickBooks ProAdvisor firm &mdash; not Intuit, and not Intuit&rsquo;s official software support. This page is an independent ProAdvisor reference. For Intuit software-level issues (login, billing, subscription), Intuit&rsquo;s own support is the right path. QuickBooks and Intuit are registered trademarks of Intuit Inc." },
    { q: "What is QuickBooks Error 6000, -301?", a: "A 6000-series company-file error, shown as &ldquo;Error 6000, -301&rdquo;: QuickBooks Desktop can&rsquo;t open the company file, most often because the file is damaged or because the QuickBooks installation components needed to open it are damaged or missing. It commonly appears after an interrupted install or alongside other 6000-series codes. Exclusive to QuickBooks Desktop and Enterprise; it does not occur in QuickBooks Online." },
    { q: "What causes QuickBooks Error 6000, -301?", a: "Five common causes: (1) damage to the company (.QBW) file itself; (2) a damaged QuickBooks program installation that needs repair or reinstall; (3) damaged .ND or .TLG support files; (4) a network or hosting misconfiguration; (5) opening a file created in a different QuickBooks version." },
    { q: "Can I fix QuickBooks Error 6000, -301 myself?", a: "Often, yes &mdash; in this order: run QuickBooks Tool Hub (Quick Fix My File, then File Doctor); run the QuickBooks Install Diagnostic Tool or repair the installation; rename the .ND and .TLG files; copy the file to the local Desktop and open it there; restore from a clean backup. Tool Hub and an installation repair resolve Error 6000, -301 in many cases." },
    { q: "When does Error 6000, -301 require a ProAdvisor?", a: "When self-fix didn&rsquo;t resolve it after an hour or two; the error recurs within days; it appears alongside other 6000-series codes; you can&rsquo;t open the file even from a local copy; or the company file is genuinely damaged. Typical focused resolution is a $1,200–$3,000 fixed-fee scope, after a free file review." },
    { q: "How is Error 6000, -301 related to the other 6000-series errors?", a: "The 6000-series are all company-file errors &mdash; QuickBooks can&rsquo;t open or access the file. Error 6000, -301 is specifically associated with a damaged company file or damaged/missing QuickBooks installation components. Codes such as 6000 77, 6000 83, and 6190 share the same diagnostic approach: repair the program and connection first, then the file." },
    { q: "Does Error 6000, -301 appear in QuickBooks Online?", a: "No. Error 6000, -301 is exclusive to QuickBooks Desktop and Enterprise &mdash; it&rsquo;s a company-file error tied to how Desktop opens a .QBW file and to the program components installed locally. QuickBooks Online is browser-based and has no company-file or 6000-series errors." },
  ],
  eleventyComputed: {
    pageGraph(data){
      const url="https://techbrot.com/quickbooks/help/error-codes/6000-301/";
      return {"@context":"https://schema.org","@graph":[
        {"@type":"WebPage","@id":url+"#webpage","url":url,"name":data.title,"description":data.description,"isPartOf":{"@id":"https://techbrot.com/#website"},"about":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","speakable":{"@type":"SpeakableSpecification","cssSelector":["#6000-301-in-brief-text"]}},
        {"@type":"BreadcrumbList","@id":url+"#breadcrumb","itemListElement":[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://techbrot.com/"},
          {"@type":"ListItem","position":2,"name":"QuickBooks","item":"https://techbrot.com/quickbooks/"},
          {"@type":"ListItem","position":3,"name":"Help","item":"https://techbrot.com/quickbooks/help/"},
          {"@type":"ListItem","position":4,"name":"Error Codes","item":"https://techbrot.com/quickbooks/help/error-codes/"},
          {"@type":"ListItem","position":5,"name":"Error 6000-301","item":url}]},
        {"@type":"TechArticle","@id":url+"#techarticle","headline":"QuickBooks Error 6000, 301: Causes & How to Fix It","description":data.description,"about":{"@type":"SoftwareApplication","name":"QuickBooks Desktop","applicationCategory":"BusinessApplication","operatingSystem":"Microsoft Windows"},"author":{"@id":"https://techbrot.com/#organization"},"publisher":{"@id":"https://techbrot.com/#organization"},"reviewedBy":{"@id":"https://techbrot.com/#david-westgate"},"inLanguage":"en-US","proficiencyLevel":"Beginner","mainEntityOfPage":{"@id":url+"#webpage"}},
        {"@type":"HowTo","@id":url+"#howto","name":"How to fix QuickBooks Error 6000, -301","description":"Resolve QuickBooks Error 6000, -301 with five ordered steps that address the five common causes in order of likelihood.","tool":[{"@type":"HowToTool","name":"QuickBooks Tool Hub"},{"@type":"HowToTool","name":"QuickBooks File Doctor"},{"@type":"HowToTool","name":"QuickBooks Install Diagnostic Tool"}],"step":data.fixSteps.map(function(s,i){return {"@type":"HowToStep","position":i+1,"name":stripTags(s.name),"text":stripTags(s.body),"url":url+"#6000-301-fix"};})},
        {"@type":"Service","@id":url+"#service","name":"QuickBooks Error 6000, -301 resolution","serviceType":"QuickBooks company-file error diagnosis and repair","areaServed":{"@type":"Country","name":"United States"},"provider":{"@id":"https://techbrot.com/#organization"},"offers":{"@type":"Offer","priceSpecification":{"@type":"PriceSpecification","priceCurrency":"USD","description":"$1,200–$3,000 typical fixed-fee scope for focused Error 6000, -301 resolution"}}},
        {"@type":"FAQPage","@id":url+"#faq","mainEntity":data.faq.map(function(i){return {"@type":"Question","name":stripTags(i.q),"acceptedAnswer":{"@type":"Answer","text":stripTags(i.a)}};})}
      ]};
    },
  },
};

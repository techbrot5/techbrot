"""Contact-page intent-coverage audit.
 - loads the defined intent keys from src/_data/intents.json
 - scans every src page for links to /contact/ (with or without ?intent=)
 - resolves each linking page's layout (page-type)
 - reports:
    * defined intents (count) and which are used vs unused
    * intents referenced in links but NOT defined (would fall back to generic)
    * pages linking to /contact/ WITHOUT an intent param, grouped by page-type
      (the gaps — especially t-money / t-state-pillar / t-prose service pages)
"""
import os, re, glob, json, collections

def read(p):
    try: return open(p, encoding="utf-8", errors="ignore").read()
    except: return ""

# defined intents
data = json.loads(read("src/_data/intents.json"))
defined = set(data.get("intents", {}).keys())

# layout per src page (njk) — for grouping the linking page by type
def fm(t):
    m = re.match(r'^---json\s*\n(.*?)\n---', t, re.S) or re.match(r'^---\s*\n(.*?)\n---', t, re.S)
    return m.group(1) if m else ""
def layout_of(njk):
    t = read(njk); b = fm(t)
    m = re.search(r'"?layout"?\s*:\s*["\']([^"\']+)["\']', b)
    if m: return m.group(1)
    d = njk[:-4] + ".11tydata.js"
    if os.path.exists(d):
        m = re.search(r'layout\s*:\s*["\']([^"\']+)["\']', read(d))
        if m: return m.group(1)
    return "(none)"

LINK = re.compile(r'/contact/(\?intent=([a-z0-9\-_]+))?', re.I)
used = collections.Counter()           # intent -> count of link occurrences
undefined_used = collections.Counter() # intent referenced but not in intents.json
# per njk page: does it link to /contact/, and with which intents (or generic)
page_links = {}   # njk -> {"intents": set, "generic": int, "layout": str}

# pages own their CTA hrefs in the .njk AND/OR the sibling .11tydata.js — scan both, attribute to the .njk page
for njk in glob.glob("src/**/*.njk", recursive=True):
    if "/dev/" in njk.replace("\\", "/"): continue
    blob = read(njk)
    d = njk[:-4] + ".11tydata.js"
    if os.path.exists(d): blob += "\n" + read(d)
    hits = LINK.findall(blob)
    if not hits: continue
    rec = {"intents": set(), "generic": 0, "layout": layout_of(njk)}
    for whole, intent in hits:
        if intent:
            used[intent] += 1; rec["intents"].add(intent)
            if intent not in defined: undefined_used[intent] += 1
        else:
            rec["generic"] += 1
    page_links[njk] = rec

print("="*68)
print("CONTACT INTENT-COVERAGE AUDIT")
print("="*68)
print("\nDefined intents in intents.json: %d" % len(defined))
print("Distinct intents referenced in /contact/ links: %d" % len(used))
print("Pages linking to /contact/: %d" % len(page_links))

print("\n--- intents REFERENCED but NOT DEFINED (fall back to generic) ---")
if not undefined_used: print("  none")
for k, c in undefined_used.most_common(): print("  %-30s x%d" % (k, c))

print("\n--- defined intents NEVER referenced in a link (unused) ---")
unused = sorted(defined - set(used))
print("  count: %d" % len(unused))
for k in unused[:40]: print("   ", k)
if len(unused) > 40: print("   ... +%d more" % (len(unused)-40))

# GAPS: pages that link to /contact/ generically (no intent) — grouped by layout
print("\n--- GAPS: pages linking to /contact/ with NO intent param (generic) ---")
gaps = {k: v for k, v in page_links.items() if v["generic"] > 0 and not v["intents"]}
bylayout = collections.defaultdict(list)
for njk, v in gaps.items():
    bylayout[v["layout"]].append(njk.replace("\\", "/").replace("src/", "/")[:-4])
for lay in sorted(bylayout, key=lambda k: -len(bylayout[k])):
    print("  [%s]  %d pages" % (lay, len(bylayout[lay])))
    for u in sorted(bylayout[lay])[:25]:
        print("       %s" % u)
    if len(bylayout[lay]) > 25: print("       ... +%d more" % (len(bylayout[lay])-25))

# pages that DO pass intent — coverage by layout
print("\n--- pages passing an intent (tailored), by page-type ---")
ok = {k: v for k, v in page_links.items() if v["intents"]}
oklayout = collections.Counter(v["layout"] for v in ok.values())
for lay, c in oklayout.most_common():
    print("  %-28s %d pages" % (lay, c))
print("\nDONE.")

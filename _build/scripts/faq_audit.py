"""Pre-flip FAQ verification audit (founder flip-gate audit).
Runs against the BUILT _site. For every page it:
  - resolves the src layout (page-type),
  - detects whether the built HTML carries a FAQPage JSON-LD node,
  - extracts the FAQPage mainEntity Q&A (the schema text Google reads),
  - extracts the visible page text (tags stripped, entities decoded),
  - VERBATIM CHECK (B): confirms each schema question + answer string is
    present verbatim in the visible text (schema == visible content),
  - counts FAQ items per page (D, caps),
  - flags phone-in-FAQ (C) by detecting (877) 751-5575 in a schema answer,
  - collects question strings for cross-page duplicate detection (D),
  - records FAQPage presence by page-type for coverage (F).

NORMALIZATION (critical for B correctness):
  Schema side = read AS GOOGLE READS IT: the JSON string value, NOT html-decoded
    (JSON parsing does not decode HTML entities; the site's stripTags already
    converted the common entities to Unicode, so a leaked non-stripTags entity
    SHOULD surface as a real mismatch). Only whitespace-normalized.
  Visible side = strip tags to EMPTY STRING (mirroring the site's stripTags which
    uses <[^>]+> -> "" ; replacing with a space would insert a phantom space
    before punctuation that follows an inline <a>/<strong>, the #1 false-mismatch
    source), then html.unescape (browser decodes), then whitespace-normalize.
"""
import os, re, glob, json, html, collections

SITE = os.environ.get("TB_OUTDIR", "_site")
PHONE = "(877) 751-5575"
NBSP = " "
ZWSP = "​"

CAPS = {  # per-page-type FAQ caps (distinct questions)
    "layouts/t-hub.njk": (8, 10),
    "layouts/t-money.njk": (5, 7),
    "layouts/t-prose.njk": (5, 8),
    "layouts/t-state-pillar.njk": (8, 12),
    "layouts/t-location.njk": (6, 8),
    "layouts/t-comparison.njk": (5, 7),
}

def read(p):
    try: return open(p, encoding="utf-8", errors="ignore").read()
    except: return ""

def fm_block(txt):
    m = re.match(r'^---json\s*\n(.*?)\n---', txt, re.S) or re.match(r'^---\s*\n(.*?)\n---', txt, re.S)
    return m.group(1) if m else ""

# ---------- src layout map (url -> layout) ----------
url_layout = {}
for njk in glob.glob("src/**/*.njk", recursive=True):
    t = read(njk); fb = fm_block(t)
    perm = layout = None
    mperm = re.search(r'"permalink"\s*:\s*"([^"]+)"', fb) or re.search(r'permalink:\s*["\']([^"\']+)["\']', fb)
    if mperm: perm = mperm.group(1)
    mlay = re.search(r'"layout"\s*:\s*"([^"]+)"', fb) or re.search(r'layout:\s*["\']([^"\']+)["\']', fb)
    if mlay: layout = mlay.group(1)
    data = njk[:-4] + ".11tydata.js"
    if (not layout or not perm) and os.path.exists(data):
        dt = read(data)
        if not layout:
            m = re.search(r'layout\s*:\s*["\']([^"\']+)["\']', dt)
            if m: layout = m.group(1)
        if not perm:
            m = re.search(r'permalink\s*:\s*["\']([^"\']+)["\']', dt)
            if m: perm = m.group(1)
    if not perm:
        rel = njk.replace("\\", "/")[4:-4]
        rel = rel[:-6] if rel.endswith("/index") else rel
        perm = "/" + rel + "/"
    url_layout[perm] = layout or "(none)"

# ---------- normalization ----------
def _ws(s):
    s = s.replace(NBSP, " ").replace(ZWSP, "")
    return re.sub(r"\s+", " ", s).strip()

def norm_schema(s):
    return _ws(s)

def norm_vis(s):
    return _ws(html.unescape(s))

def visible_text(htmltxt):
    b = re.sub(r"<script\b.*?</script>", " ", htmltxt, flags=re.S|re.I)
    b = re.sub(r"<style\b.*?</style>", " ", b, flags=re.S|re.I)
    b = re.sub(r"<[^>]+>", "", b)   # mirror stripTags: tags -> "" (not space)
    return norm_vis(b)

def find_faqpages(htmltxt):
    out = []
    for m in re.finditer(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', htmltxt, re.S|re.I):
        try:
            data = json.loads(m.group(1).strip())
        except Exception:
            continue
        if isinstance(data, dict):
            nodes = data["@graph"] if isinstance(data.get("@graph"), list) else [data]
        elif isinstance(data, list):
            nodes = data
        else:
            nodes = []
        for n in nodes:
            if not isinstance(n, dict): continue
            t = n.get("@type")
            types = t if isinstance(t, list) else [t]
            if "FAQPage" in types:
                qa = []
                for it in n.get("mainEntity", []) or []:
                    a = it.get("acceptedAnswer")
                    qa.append((it.get("name", ""), a.get("text", "") if isinstance(a, dict) else ""))
                out.append(qa)
    return out

# ---------- walk built pages ----------
records = []
allq = collections.defaultdict(list)
for idx in glob.glob(os.path.join(SITE, "**", "index.html"), recursive=True):
    rel = os.path.relpath(idx, SITE).replace("\\", "/")
    url = re.sub(r"//+$", "/", "/" + rel[:-len("index.html")])
    if url.startswith("/dev/"): continue
    h = read(idx)
    faqs = find_faqpages(h)
    rec = {"url": url, "layout": url_layout.get(url, "(unknown)"), "has_faq": bool(faqs),
           "n": 0, "mismatches": [], "phone": False}
    if faqs:
        vis = visible_text(h).lower()
        qa = faqs[0]
        rec["n"] = len(qa)
        for q, a in qa:
            nq, na = norm_schema(q), norm_schema(a)
            allq[nq.lower()].append(url)
            if nq.lower() not in vis: rec["mismatches"].append(("Q", nq[:90]))
            if na.lower() not in vis: rec["mismatches"].append(("A", na[:110]))
            if PHONE in na: rec["phone"] = True
    records.append(rec)

faqpages = [r for r in records if r["has_faq"]]
print("="*70)
print("FAQ PRE-FLIP AUDIT  (built site: %s, %d pages scanned)" % (SITE, len(records)))
print("="*70)

mismatched = [r for r in faqpages if r["mismatches"]]
print("\n[B] VERBATIM SCHEMA==VISIBLE MATCH")
print("  FAQPage nodes: %d" % len(faqpages))
print("  MATCH: %d" % (len(faqpages)-len(mismatched)))
print("  MISMATCH: %d" % len(mismatched))
for r in mismatched:
    print("   - %s  (%d)" % (r["url"], len(r["mismatches"])))
    for kind, snip in r["mismatches"][:6]:
        print("       [%s] %s" % (kind, snip))

phoned = [r for r in faqpages if r["phone"]]
print("\n[C] PHONE-IN-FAQ  (schema answer contains %s)" % PHONE)
print("  pages with phone-in-FAQ: %d" % len(phoned))
for lay, c in collections.Counter(r["layout"] for r in phoned).most_common():
    print("     %-28s %d" % (lay, c))
ind = [r for r in phoned if "/accounting/industries/" in r["url"]]
print("  industries pages with phone-in-FAQ: %d  (target after revert: 0)" % len(ind))
for r in ind: print("       %s" % r["url"])

print("\n[D] COUNTS vs CAPS")
overcap = []
for r in faqpages:
    cap = CAPS.get(r["layout"])
    if cap and not (cap[0] <= r["n"] <= cap[1]):
        overcap.append((r["url"], r["layout"], r["n"], cap))
print("  pages OUT of cap range: %d" % len(overcap))
for url, lay, n, cap in overcap:
    print("     %s  type=%s n=%d cap=%s" % (url, lay, n, cap))
dups = {q: u for q, u in allq.items() if len(u) > 1}
print("  distinct questions appearing on >1 page: %d" % len(dups))
for q, u in sorted(dups.items(), key=lambda x: -len(x[1]))[:20]:
    print("     x%-3d %s" % (len(u), q[:78]))

print("\n[F] FAQPage COVERAGE BY PAGE-TYPE (layout)")
by_layout = collections.defaultdict(lambda: [0, 0])
for r in records:
    by_layout[r["layout"]][0 if r["has_faq"] else 1] += 1
print("  %-30s %6s %9s" % ("layout", "w/FAQ", "without"))
for lay in sorted(by_layout, key=lambda k: -(by_layout[k][0]+by_layout[k][1])):
    w, wo = by_layout[lay]
    print("  %-30s %6d %9d" % (lay, w, wo))
DECISION = {"layouts/t-money.njk", "layouts/t-state-pillar.njk", "layouts/t-location.njk", "layouts/t-comparison.njk"}
gaps = [r for r in records if r["layout"] in DECISION and not r["has_faq"]]
print("\n  DECISION-PAGE FAQ GAPS (t-money/t-state-pillar/t-location/t-comparison missing FAQPage):")
if not gaps: print("     none")
for r in gaps: print("     MISSING: %s  (%s)" % (r["url"], r["layout"]))
print("\nDONE.")

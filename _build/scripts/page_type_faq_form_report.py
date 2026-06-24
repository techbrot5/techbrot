# page_type_faq_form_report.py — two "show me before changing" reports:
#   (1) FORM inventory: every rendered conversion form by page-type + form shape.
#   (2) FAQ counts per page-type (from the AUTHORITATIVE built FAQPage schema).
# Layout (= page-type) resolved from source: njk frontmatter "layout" (JSON or
# YAML), else sibling .11tydata.js `layout`. FAQ count parsed from built _site.
import re, glob, json, os, sys
from collections import defaultdict
sys.stdout.reconfigure(encoding="utf-8")

SRC = "src"; SITE = "_site"

def read(p):
    with open(p, encoding="utf-8") as f: return f.read()

# ---- 1. url -> layout (page-type) from SOURCE ----
def frontmatter_layout(njk):
    head = read(njk)[:4000]
    m = re.search(r'"layout"\s*:\s*"([^"]+)"', head) or re.search(r'^layout:\s*["\']?([^\s"\']+)', head, re.M)
    return m.group(1) if m else None
def frontmatter_permalink(njk):
    head = read(njk)[:4000]
    m = re.search(r'"permalink"\s*:\s*"([^"]+)"', head) or re.search(r'^permalink:\s*["\']?([^\s"\']+)', head, re.M)
    return m.group(1) if m else None
def data_layout(njk):
    d = njk[:-4] + ".11tydata.js"
    if os.path.exists(d):
        m = re.search(r'layout:\s*["\']([^"\']+)["\']', read(d))
        if m: return m.group(1)
    return None

def derive_url(njk):
    rel = os.path.relpath(njk, SRC).replace("\\", "/")
    rel = rel[:-4]  # drop .njk
    if rel.endswith("/index") or rel == "index": rel = rel[:-5]
    rel = rel.rstrip("/")
    return "/" + (rel + "/" if rel else "")

url2layout = {}
for njk in glob.glob(f"{SRC}/**/*.njk", recursive=True):
    n = njk.replace("\\", "/")
    if "/_includes/" in n or "/dev/" in n: continue
    lay = frontmatter_layout(njk) or data_layout(njk)
    if not lay: continue
    lay = lay.split("/")[-1].replace(".njk", "")  # e.g. t-prose
    pl = frontmatter_permalink(njk)
    url = pl if pl else derive_url(njk)
    if not url.endswith("/"): url += "/"
    url2layout[url] = lay

# ---- 2. url -> FAQ count from BUILT FAQPage schema ----
def faq_count(html):
    total = 0; found = False
    for m in re.finditer(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', html, re.S):
        try: data = json.loads(m.group(1))
        except Exception: continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else (data if isinstance(data, list) else [])
        for node in nodes:
            if isinstance(node, dict) and node.get("@type") == "FAQPage":
                found = True
                total += len(node.get("mainEntity", []))
    return total if found else None

# form shape detector
def form_shape(html):
    if 'data-form="contact-discovery"' not in html: return None
    if 'data-service-input' in html and 'name="lead_source"' in html: return "FULL"
    return "MINIMAL"

rows = []  # (url, layout, faqcount, formshape)
for idx in glob.glob(f"{SITE}/**/index.html", recursive=True):
    u = idx.replace("\\", "/")
    if "/dev/" in u: continue
    url = "/" + u[len(SITE)+1:-len("index.html")]
    url = url.replace("//", "/")
    html = read(idx)
    rows.append((url, url2layout.get(url, "??unmapped"), faq_count(html), form_shape(html)))

# ================= REPORT 1: FORMS =================
print("="*78); print("REPORT 1 — FORM INVENTORY (rendered conversion forms by page-type + shape)"); print("="*78)
forms = [r for r in rows if r[3]]
byshape = defaultdict(list)
for url, lay, fq, shape in forms: byshape[shape].append((url, lay))
print(f"\nTotal conversion forms: {len(forms)}  (FULL={len(byshape['FULL'])}, MINIMAL={len(byshape['MINIMAL'])})\n")
for shape in ("FULL", "MINIMAL"):
    print(f"\n----- {shape} form ({len(byshape[shape])}) -----")
    by_lay = defaultdict(list)
    for url, lay in byshape[shape]: by_lay[lay].append(url)
    for lay in sorted(by_lay):
        print(f"  [{lay}] ({len(by_lay[lay])}):")
        for url in sorted(by_lay[lay]): print(f"      {url}")

# ================= REPORT 2: FAQ COUNTS PER PAGE-TYPE =================
print("\n\n"+"="*78); print("REPORT 2 — FAQ COUNT PER PAGE-TYPE (from built FAQPage schema)"); print("="*78)
CAPS = {"t-hub": (8,10), "t-money": (5,7), "t-bofu": (5,7), "t-prose": (5,8),
        "t-state-pillar": (8,10), "t-location": (4,6), "t-comparison": (5,7)}
by_lay = defaultdict(list)
for url, lay, fq, shape in rows:
    if fq is not None: by_lay[lay].append((url, fq))
print(f"\n{'page-type (layout)':<22}{'pages w/FAQ':>11}{'min':>5}{'med':>5}{'max':>5}{'cap':>9}{'OVER cap':>9}")
print("-"*78)
def median(xs):
    s = sorted(xs); n = len(s); return s[n//2] if n%2 else (s[n//2-1]+s[n//2])/2
for lay in sorted(by_lay, key=lambda k: -len(by_lay[k])):
    counts = [c for _, c in by_lay[lay]]
    cap = CAPS.get(lay)
    capstr = f"{cap[0]}-{cap[1]}" if cap else "—"
    over = sum(1 for c in counts if cap and c > cap[1]) if cap else 0
    print(f"{lay:<22}{len(counts):>11}{min(counts):>5}{int(median(counts)):>5}{max(counts):>5}{capstr:>9}{over:>9}")
total_pages = len(rows); with_faq = sum(1 for r in rows if r[2] is not None)
print(f"\nTotal built non-dev pages: {total_pages} · with FAQPage schema: {with_faq}")
unmapped = sorted(set(r[0] for r in rows if r[1]=="??unmapped"))
print(f"Unmapped (layout unresolved): {len(unmapped)}")
if unmapped[:15]: print("  e.g.", unmapped[:15])

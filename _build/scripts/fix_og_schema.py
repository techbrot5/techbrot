#!/usr/bin/env python3
# Fix JSON-LD image refs that point to the never-built /assets/img/og/*.png (404):
#  - per-page primaryImageOfPage  -> the page's real OG card (/assets/og/cards/<slug>.png),
#    matched via the built site (broken-url -> that page's og:image card).
#  - global schemaGlobal.json "image" (techbrot-og.png) -> /assets/og/default.png.
import os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = os.path.join(ROOT, "_site-prod")
PRIM = re.compile(r'"primaryImageOfPage":\{"@type":"ImageObject","url":"([^"]+)"')
OGIMG = re.compile(r'<meta property="og:image" content="([^"]+)"')

# 1) build broken-url -> correct-card map from the built site
m = {}
for dirpath, _, files in os.walk(SITE):
    if "index.html" in files:
        html = open(os.path.join(dirpath, "index.html"), encoding="utf-8").read()
        p, o = PRIM.search(html), OGIMG.search(html)
        if p and o and "/assets/img/og/" in p.group(1) and "/assets/og/cards/" in o.group(1):
            m[p.group(1)] = o.group(1)
print(f"map: {len(m)} broken primaryImageOfPage -> card")

# 2) rewrite source data files
GLOBAL_OLD = "https://techbrot.com/assets/img/og/techbrot-og.png"
GLOBAL_NEW = "https://techbrot.com/assets/og/default.png"
changed, repl, unmapped = 0, 0, set()
for f in glob.glob(os.path.join(ROOT, "src", "**", "*.11tydata.js"), recursive=True) + \
         [os.path.join(ROOT, "src", "_data", "schemaGlobal.json")]:
    t = open(f, encoding="utf-8").read(); orig = t
    for broken, card in m.items():
        if broken in t:
            t = t.replace(broken, card); repl += 1
    if GLOBAL_OLD in t:
        t = t.replace(GLOBAL_OLD, GLOBAL_NEW); repl += 1
    # flag any remaining /assets/img/og/ we couldn't map
    for u in re.findall(r'https://techbrot\.com/assets/img/og/[^"]+\.png', t):
        unmapped.add(u)
    if t != orig:
        open(f, "w", encoding="utf-8", newline="").write(t); changed += 1

print(f"files changed: {changed} | replacements: {repl}")
print(f"REMAINING unmapped /assets/img/og/ refs: {len(unmapped)}")
for u in sorted(unmapped)[:20]:
    print("  !!", u)

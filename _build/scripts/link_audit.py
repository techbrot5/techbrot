"""Pre-flip internal-linking audit.
 1. STALE STATE FALLBACKS: for each of the 20 state pillars, read its `related`
    neighbor list; a neighbor that IS a built state but whose card has no explicit
    href (so the layout falls back to /find-an-accountant/) is a STALE FALLBACK.
 2. ORPHANS: build the sitewide inbound internal-link graph from _site; report
    non-dev pages with 0 inbound links (excluding the homepage).
 3. PILLAR -> CHILDREN: does each pillar's built HTML link to its own children?
 4. BROKEN: internal hrefs whose target page is not built (the battery already
    gates this; re-confirmed here for the two endpoints + pillars).
"""
import os, re, glob, json, collections

SITE = "_site"
def read(p):
    try: return open(p, encoding="utf-8", errors="ignore").read()
    except: return ""

# --- built state pillars (src/find-an-accountant/<slug>.njk using t-state-pillar) ---
pillars = {}  # slug -> data file
for njk in glob.glob("src/find-an-accountant/*.njk"):
    if "layouts/t-state-pillar" in read(njk):
        slug = os.path.basename(njk)[:-4]
        pillars[slug] = njk[:-4] + ".11tydata.js"
built_slugs = set(pillars.keys())
def name2slug(n):
    return n.lower().replace("&amp;", "").replace(".", "").strip().replace(" ", "-")

print("="*70)
print("INTERNAL-LINKING AUDIT")
print("="*70)
print("\nBuilt state pillars: %d  (%s)" % (len(built_slugs), ", ".join(sorted(built_slugs))))

# --- 1. STALE STATE FALLBACKS in pillar `related` lists ---
print("\n[1] STALE STATE FALLBACKS (pillar 'related' neighbor is BUILT but card has no href -> falls back to /find-an-accountant/)")
total_stale = 0
for slug in sorted(pillars):
    data = read(pillars[slug])
    m = re.search(r'related\s*:\s*\[(.*?)\]\s*,', data, re.S)
    if not m: continue
    block = m.group(1)
    items = re.findall(r'\{\s*name:\s*"([^"]+)"(.*?)\}', block, re.S)
    stale, ok_fb, has_href = [], [], []
    for nm, rest in items:
        nslug = name2slug(nm)
        item_has_href = 'href:' in rest
        if nslug in built_slugs and not item_has_href:
            stale.append(nm); total_stale += 1
        elif item_has_href:
            has_href.append(nm)
        else:
            ok_fb.append(nm)  # not built -> correct fallback
    if stale:
        print("  %-16s STALE-> %s   (ok-fallback: %s)" % (slug, ", ".join(stale), ", ".join(ok_fb) or "-"))
print("  TOTAL stale fallbacks to fix: %d" % total_stale)

# --- 2. ORPHANS (sitewide inbound graph from _site) ---
pages = {}   # url -> set(internal targets)
allurls = set()
for idx in glob.glob(os.path.join(SITE, "**", "index.html"), recursive=True):
    rel = os.path.relpath(idx, SITE).replace("\\", "/")
    url = re.sub(r"//+$", "/", "/" + rel[:-len("index.html")])
    if url.startswith("/dev/"): continue
    allurls.add(url)
    h = read(idx)
    targets = set()
    for href in re.findall(r'href="(/[^"#?]*)', h):   # capture path even when followed by ?query / #frag (intent params)
        t = href if href.endswith("/") else href + "/"
        t = re.sub(r"//+$", "/", t)
        targets.add(t)
    pages[url] = targets
inbound = collections.Counter()
for src_url, targets in pages.items():
    for t in targets:
        if t in allurls and t != src_url:
            inbound[t] += 1
orphans = sorted(u for u in allurls if inbound[u] == 0 and u != "/")
print("\n[2] ORPHANS (0 inbound internal links, non-dev, excl homepage): %d" % len(orphans))
for u in orphans[:60]:
    print("     %s" % u)
if len(orphans) > 60: print("     ... +%d more" % (len(orphans)-60))

# --- 3. PILLAR -> CHILDREN ---
print("\n[3] PILLAR -> OWN-CHILDREN linkage (does each pillar HTML link to /find-an-accountant/<slug>/<child>/?)")
for slug in sorted(pillars):
    idx = os.path.join(SITE, "find-an-accountant", slug, "index.html")
    if not os.path.exists(idx): continue
    h = read(idx)
    childlinks = set(re.findall(r'href="(/find-an-accountant/' + re.escape(slug) + r'/[^"#?]+)"', h))
    print("  %-16s child links: %d" % (slug, len(childlinks)))

# --- 4. BROKEN internal links (target not built) sitewide ---
print("\n[4] BROKEN internal links (target page not built)")
broken = collections.Counter()
for src_url, targets in pages.items():
    for t in targets:
        if t not in allurls:
            broken[t] += 1
# filter out non-page asset-ish paths (/assets/, etc.) — only count pretty-URL page targets
pagebroken = {t: c for t, c in broken.items() if not re.search(r'\.(png|jpg|jpeg|svg|webp|avif|css|js|ico|xml|txt|pdf|woff2?)$', t) and not t.startswith("/assets/")}
print("  distinct broken page targets: %d" % len(pagebroken))
for t, c in sorted(pagebroken.items(), key=lambda x: -x[1])[:40]:
    print("     %s  (from %d pages)" % (t, c))
print("\nDONE.")

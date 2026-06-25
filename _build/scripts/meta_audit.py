# meta_audit.py — for the TASK-4 phone-in-meta set, locate where each URL's
# meta `description` (and title) is authored (njk frontmatter vs sibling
# .11tydata.js vs a shared data file) and print current value + char length.
import re, glob, os, sys, json
sys.stdout.reconfigure(encoding="utf-8")
SRC = "src"

def read(p):
    with open(p, encoding="utf-8") as f: return f.read()

def derive_url(njk):
    rel = os.path.relpath(njk, SRC).replace("\\", "/")[:-4]
    if rel.endswith("/index") or rel == "index": rel = rel[:-5]
    rel = rel.rstrip("/")
    return "/" + (rel + "/" if rel else "")

# map url -> source njk
url2njk = {}
for njk in glob.glob(f"{SRC}/**/*.njk", recursive=True):
    n = njk.replace("\\", "/")
    if "/_includes/" in n or "/dev/" in n: continue
    head = read(njk)[:4000]
    m = re.search(r'"permalink"\s*:\s*"([^"]+)"', head) or re.search(r'^permalink:\s*["\']?([^\s"\']+)', head, re.M)
    url = m.group(1) if m else derive_url(njk)
    if not url.endswith("/"): url += "/"
    url2njk[url] = njk.replace("\\","/")

TARGETS = [l.strip() for l in sys.stdin.read().splitlines() if l.strip()]

def find_field(njk, field):
    """Return (source_file, value) for a frontmatter/data field."""
    txt = read(njk)
    # njk JSON frontmatter
    m = re.search(r'"%s"\s*:\s*"((?:[^"\\]|\\.)*)"' % field, txt[:6000])
    if m: return (njk, m.group(1))
    # sibling .11tydata.js
    d = njk[:-4] + ".11tydata.js"
    if os.path.exists(d):
        dt = read(d)
        m = re.search(r'%s\s*:\s*["`]((?:[^"`\\]|\\.)*)["`]' % field, dt)
        if m: return (d, m.group(1))
    return (None, None)

for url in TARGETS:
    njk = url2njk.get(url)
    if not njk:
        print(f"!! NO SOURCE for {url}"); continue
    sf, desc = find_field(njk, "description")
    st, title = find_field(njk, "title")
    print(f"\n=== {url}")
    print(f"  njk: {njk}")
    print(f"  TITLE [{len(title) if title else 0}] ({os.path.basename(st) if st else '?'}): {title}")
    print(f"  DESC  [{len(desc) if desc else 0}] ({os.path.basename(sf) if sf else '?'}): {desc}")

"""Per-family v2 reconciliation: total live pages vs pages still on OLD layout.
A family with >0 old-layout pages = DRIFT. Run after a build."""
import re, os, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = os.path.join(ROOT, "_site")

fam = {}
mapfile = os.path.join(ROOT, "_build", "reports", "_page-family-map.txt")
for line in open(mapfile, encoding="utf-8"):
    m = re.match(r"^(.*?)\s{2,}(/\S*)\s*$", line.rstrip())
    if m:
        fam.setdefault(m.group(1).strip(), []).append(m.group(2).strip())

old = set()
sep = os.sep
for root, _, files in os.walk(SITE):
    rp = root.replace("\\", "/")
    if "/dev" in rp:
        continue
    if "index.html" in files:
        p = os.path.join(root, "index.html")
        try:
            html = open(p, encoding="utf-8", errors="ignore").read()
        except Exception:
            continue
        if 'class="navlink' not in html:
            rel = os.path.relpath(p, SITE).replace("\\", "/")
            u = "/" if rel == "index.html" else "/" + rel[: -len("index.html")]
            old.add(u)

total_old = 0
drift_fams = 0
for f in sorted(fam):
    o = sum(1 for u in fam[f] if u in old)
    total_old += o
    if o:
        drift_fams += 1
    flag = "  <-- DRIFT" if o else ""
    print(f"{len(fam[f]):>3} total | {o:>2} old   {f}{flag}")
print(f"\nFAMILIES: {len(fam)} | DRIFTING families: {drift_fams} | total old-layout pages: {total_old}")

"""Scan _site for variety #12a violations (>1 numbered system per page).
A numbered system = a <section> containing process-diagram, fix-steps, or the
legacy numbered-grid marker class="num". Prints violator URLs (for seeding
variety-exceptions.json) + the per-page marker breakdown."""
import re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
SITE = ROOT / "_site"
MARKERS = ("process-diagram", "fix-steps", 'class="num"')
viol = []
for idx in sorted(SITE.rglob("index.html")):
    url = "/" + str(idx.parent.relative_to(SITE)).replace("\\", "/") + "/"
    if url == "/./" or url.startswith("/dev/"):
        url = "/" if idx.parent == SITE else url
    if url.startswith("/dev/"):
        continue
    html = idx.read_text(encoding="utf-8", errors="ignore")
    secs = html.split("<section")
    n = sum(1 for s in secs if any(m in s for m in MARKERS))
    if n > 1:
        hits = [m for m in MARKERS if m in html]
        viol.append((url, n, hits))
for url, n, hits in viol:
    print(f"{url}  numbered-sections={n}  markers={hits}")
print(f"\nTOTAL violators: {len(viol)}")

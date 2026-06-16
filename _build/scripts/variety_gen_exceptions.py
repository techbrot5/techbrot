"""Generate _build/battery/variety-exceptions.json from current _site violators
(>1 numbered system per page). Pre-elevation #12a debt — each entry removed as
its TYPE is re-skinned in-wave, at which point the variety gate enforces the fix."""
import json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
SITE = ROOT / "_site"
MARKERS = ("process-diagram", "fix-steps", 'class="num"')
viol = []
for idx in sorted(SITE.rglob("index.html")):
    rel = str(idx.parent.relative_to(SITE)).replace("\\", "/")
    url = "/" if rel == "." else "/" + rel + "/"
    if url.startswith("/dev/"):
        continue
    html = idx.read_text(encoding="utf-8", errors="ignore")
    n = sum(1 for s in html.split("<section") if any(m in s for m in MARKERS))
    if n > 1:
        viol.append(url)
out = {
    "_comment": ("Pre-elevation #12a debt (>1 numbered system per page). Each URL is "
                 "removed from this list as its TYPE is re-skinned in-wave; the variety "
                 "gate then hard-enforces the fix. NOT exempt forever."),
    "exclude_urls": sorted(viol),
}
(ROOT / "_build/battery/variety-exceptions.json").write_text(
    json.dumps(out, indent=2) + "\n", encoding="utf-8")
print(f"wrote {len(viol)} exclusions to _build/battery/variety-exceptions.json")

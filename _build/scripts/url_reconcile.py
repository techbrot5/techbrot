"""Pre-cutover URL reconciliation: every OLD live techbrot.com URL must be either a live
page in the NEW build or covered by a 301 in _redirects -- otherwise it 404s on cutover
and loses its indexed equity. Reads the old URL list from the live sitemap (saved to a
file), the new pages from _site-prod, and the redirect rules from _site-prod/_redirects."""
import os, re, sys

old_file = sys.argv[1] if len(sys.argv) > 1 else "old_urls.txt"
old = [l.strip() for l in open(old_file, encoding="utf-8") if l.strip()]

new = {"/"}
for root, _, files in os.walk("_site-prod"):
    if "index.html" in files:
        rel = os.path.relpath(root, "_site-prod").replace(os.sep, "/")
        u = "/" if rel == "." else "/" + rel.strip("/") + "/"
        new.add(u)

red = set()
rp = os.path.join("_site-prod", "_redirects")
if os.path.exists(rp):
    for line in open(rp, encoding="utf-8"):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split()
        if len(parts) >= 2:
            frm = parts[0]
            red.add(frm if frm.endswith("/") else frm + "/")

preserved = [u for u in old if u in new]
redirected = [u for u in old if u not in new and u in red]
missing = [u for u in old if u not in new and u not in red]

print("OLD live URLs: %d" % len(old))
print("  PRESERVED (live page in new build): %d" % len(preserved))
print("  REDIRECTED (301 in _redirects): %d" % len(redirected))
for u in redirected:
    print("      %s" % u)
print("  >>> MISSING (would 404 on cutover): %d" % len(missing))
for u in missing:
    print("      %s" % u)

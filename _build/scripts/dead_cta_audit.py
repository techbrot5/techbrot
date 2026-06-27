"""Sitewide DEAD-CTA / DEAD-LINK audit. Scans every PRODUCTION page (_site, /dev/ excluded —
dev is preview-only, absent in prod) for CTAs/links that go nowhere — which a 404/resolution
check misses because there's no URL to resolve:
  - <a href="">            empty href (dead)
  - <a href="#">           hash-only href (dead unless JS-handled — flagged for review)
  - <a class="...btn...">   button-styled anchor with NO href at all (dead)
  - <button>               buttons with no type=submit, no onclick, no data-* action (dead)
Reports per-pattern counts + sample pages + the element snippets."""
import os, re, glob

SITE = "_site"
pages = [p for p in glob.glob(os.path.join(SITE, "**", "index.html"), recursive=True)
         if os.sep + "dev" + os.sep not in p]
# also include top-level non-index html that ships (404, etc.) — but those are noindex; skip.

empty, hashonly, btnlike_nohref, dead_btn = {}, {}, {}, {}

A_TAG = re.compile(r'<a\b[^>]*>', re.I)
BTN_TAG = re.compile(r'<button\b[^>]*>', re.I)

def url_of(p):
    u = "/" + os.path.relpath(p, SITE).replace("\\", "/")
    return re.sub(r"/index\.html$", "/", u)

for p in pages:
    h = open(p, encoding="utf-8", errors="ignore").read()
    u = url_of(p)
    for tag in A_TAG.findall(h):
        if 'href=""' in tag:
            empty.setdefault(u, []).append(tag[:140])
        elif 'href="#"' in tag:
            hashonly.setdefault(u, []).append(tag[:140])
        elif 'href=' not in tag and re.search(r'class="[^"]*\bbtn', tag):
            btnlike_nohref.setdefault(u, []).append(tag[:140])
    for tag in BTN_TAG.findall(h):
        # a real button has type=submit (form), an onclick, a data-*action, or aria-controls (toggles)
        if not re.search(r'type="submit"|onclick=|data-(ga|tb|action|toggle|target)|aria-controls|aria-expanded|class="[^"]*(mobile-menu|hamburger|accordion|faq|tab|toggle|nav)', tag, re.I):
            dead_btn.setdefault(u, []).append(tag[:140])

def report(name, d):
    total = sum(len(v) for v in d.values())
    print("\n[%s] %d occurrence(s) across %d page(s)" % (name, total, len(d)))
    for u in sorted(d)[:25]:
        print("  %s  (%d)" % (u, len(d[u])))
        for snip in d[u][:3]:
            print("       %s" % snip)

print("=" * 64)
print("SITEWIDE DEAD-CTA AUDIT (%d production pages, /dev/ excluded)" % len(pages))
print("=" * 64)
report('href=""  (DEAD)', empty)
report('href="#"  (hash — review)', hashonly)
report('btn-styled <a> with NO href  (DEAD)', btnlike_nohref)
report('<button> with no action  (review)', dead_btn)
print("\nDONE.")

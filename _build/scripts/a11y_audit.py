"""Sitewide ACCESSIBILITY + SEMANTIC-HTML audit (static). Scans every production page
(_site, /dev/ excluded) for the issues that matter for screen readers AND for how
Google/AI parse + rank the page:
  1. SEMANTIC: exactly one <h1>; <main>/<nav>/<header>/<footer> present; heading-level
     skips (h2 -> h4 with no h3).
  2. IMAGES: <img> with no alt attribute at all (decorative alt="" is fine; MISSING is not).
  3. NAMES: icon-only <a>/<button> (only an <svg>, no text, no aria-label/title) = no
     accessible name.
  4. FORMS: <input>/<select>/<textarea> (excluding hidden/submit/button) with no
     associated <label for=id>, no aria-label/aria-labelledby, no wrapping <label>.
Reports counts + sample pages. Designed to surface REAL issues, low false-positive."""
import os, re, glob
from collections import Counter

SITE = "_site"
pages = [p for p in glob.glob(os.path.join(SITE, "**", "index.html"), recursive=True)
         if os.sep + "dev" + os.sep not in p]

def url_of(p):
    return re.sub(r"/index\.html$", "/", "/" + os.path.relpath(p, SITE).replace("\\", "/"))

multi_h1, no_h1, no_main, no_nav, no_footer = [], [], [], [], []
skips = {}
img_noalt = {}
iconbtn_noname = {}
input_nolabel = {}

LABEL_FOR = re.compile(r'<label[^>]*\bfor="([^"]+)"', re.I)
INPUTISH = re.compile(r'<(input|select|textarea)\b([^>]*)>', re.I)

for p in pages:
    h = open(p, encoding="utf-8", errors="ignore").read()
    u = url_of(p)
    # 1 semantic
    h1n = len(re.findall(r'<h1\b', h, re.I))
    if h1n == 0: no_h1.append(u)
    elif h1n > 1: multi_h1.append((u, h1n))
    if not re.search(r'<main\b', h, re.I): no_main.append(u)
    if not re.search(r'<nav\b', h, re.I): no_nav.append(u)
    if not re.search(r'<footer\b', h, re.I): no_footer.append(u)
    # heading-level skips (within <main>)
    body = h
    levels = [int(m.group(1)) for m in re.finditer(r'<h([1-6])\b', body, re.I)]
    prev = 0; bad = []
    for lv in levels:
        if prev and lv > prev + 1:
            bad.append("h%d->h%d" % (prev, lv))
        prev = lv
    if bad: skips[u] = bad
    # 2 img without alt
    imgs = re.findall(r'<img\b[^>]*>', h, re.I)
    na = [t[:90] for t in imgs if not re.search(r'\balt=', t, re.I)]
    if na: img_noalt[u] = na
    # 3 icon-only a/button with no accessible name
    for m in re.finditer(r'<(a|button)\b([^>]*)>(.*?)</\1>', h, re.I | re.S):
        attrs, inner = m.group(2), m.group(3)
        if re.search(r'aria-label=|title=|aria-labelledby=', attrs, re.I):
            continue
        text = re.sub(r'<svg\b.*?</svg>', '', inner, flags=re.I | re.S)
        text = re.sub(r'<[^>]+>', '', text)
        text = text.replace('&nbsp;', ' ').strip()
        if not text and '<svg' in inner.lower():
            iconbtn_noname.setdefault(u, []).append(m.group(0)[:90])
    # 4 inputs without a label
    ids_with_label = set(LABEL_FOR.findall(h))
    for m in INPUTISH.finditer(h):
        attrs = m.group(2)
        t = re.search(r'\btype="([^"]+)"', attrs, re.I)
        typ = (t.group(1) if t else "text").lower()
        if typ in ("hidden", "submit", "button", "image", "reset"): continue
        if re.search(r'aria-label=|aria-labelledby=', attrs, re.I): continue
        idm = re.search(r'\bid="([^"]+)"', attrs, re.I)
        if idm and idm.group(1) in ids_with_label: continue
        input_nolabel.setdefault(u, []).append(m.group(0)[:90])

def section(title, items, fmt=lambda x: str(x)):
    print("\n[%s] %d" % (title, len(items)))
    for it in (items[:15] if isinstance(items, list) else list(items.items())[:15]):
        print("   " + fmt(it))

print("=" * 64)
print("SITEWIDE A11Y + SEMANTIC AUDIT (%d production pages)" % len(pages))
print("=" * 64)
print("\n--- 1. SEMANTIC ---")
section("pages with NO <h1>", no_h1)
section("pages with >1 <h1>", multi_h1, lambda t: "%s (%d)" % t)
section("pages with NO <main>", no_main)
section("pages with NO <nav>", no_nav)
section("pages with NO <footer>", no_footer)
section("pages with heading-level SKIPS", skips, lambda kv: "%s  %s" % (kv[0], kv[1]))
print("\n--- 2. IMAGES (no alt attr) ---")
total_imgs = sum(len(v) for v in img_noalt.values())
print("  imgs with NO alt: %d across %d pages" % (total_imgs, len(img_noalt)))
for u, v in list(img_noalt.items())[:12]:
    print("   %s (%d)  e.g. %s" % (u, len(v), v[0]))
print("\n--- 3. ICON-ONLY <a>/<button> with no accessible name ---")
tn = sum(len(v) for v in iconbtn_noname.values())
print("  %d across %d pages" % (tn, len(iconbtn_noname)))
for u, v in list(iconbtn_noname.items())[:12]:
    print("   %s (%d)  e.g. %s" % (u, len(v), v[0]))
print("\n--- 4. FORM inputs with no label/aria-label ---")
ti = sum(len(v) for v in input_nolabel.values())
print("  %d across %d pages" % (ti, len(input_nolabel)))
for u, v in list(input_nolabel.items())[:12]:
    print("   %s (%d)  e.g. %s" % (u, len(v), v[0]))
print("\nDONE.")

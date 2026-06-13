"""CSS trim audit (round 9, TODO 17).
For every rule in the bundle sources: is any of its selectors' class/id/
element hooks present on ANY built page (or injected by the JS layer)?
Reports per-file: comment bytes, rules whose classes appear NOWHERE
(trim candidates), and per-section byte weights.
SAFETY: classes referenced in src/assets/js/*.js and the layout partials
are whitelisted; selectors using only pseudo-classes/attributes on
whitelisted hooks stay. This script only REPORTS — trimming is a manual,
reviewed edit (03/05 via extract_css.py DROP list; 06/07 direct).
Usage: python _build/scripts/css_audit.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CSS = ROOT / "src" / "assets" / "css"
SITE = ROOT / "_site"

# every class present in built HTML
used_classes = set()
used_ids = set()
for p in SITE.rglob("*.html"):
    html = p.read_text(encoding="utf-8")
    for m in re.findall(r'class="([^"]+)"', html):
        used_classes.update(m.split())
    used_ids.update(re.findall(r'id="([^"]+)"', html))

# classes the JS layer can inject/toggle (string literals in tb-*.js)
js_text = " ".join(p.read_text(encoding="utf-8")
                   for p in (ROOT / "src/assets/js").glob("*.js"))
for m in re.findall(r"['\"]([A-Za-z][A-Za-z0-9_-]*(?:__|--)[A-Za-z0-9_-]+)['\"]", js_text):
    used_classes.add(m)
for m in re.findall(r"classList\.(?:add|toggle|remove)\(\s*['\"]([^'\"]+)['\"]", js_text):
    used_classes.add(m)
# innerHTML-injected markup classes
for m in re.findall(r'class=\\?"([^"\\]+)\\?"', js_text):
    used_classes.update(m.split())

def strip_comments(css):
    return re.sub(r"/\*.*?\*/", "", css, flags=re.S)

def rule_used(selector):
    """A rule is 'used' if every compound it needs can match something."""
    # any selector in the group that can match keeps the rule
    for sel in selector.split(","):
        sel = sel.strip()
        if not sel or sel.startswith("@"):
            return True
        classes = re.findall(r"\.([A-Za-z0-9_-]+)", sel)
        ids = re.findall(r"#([A-Za-z0-9_-]+)", sel)
        # element/universal/pseudo-only selectors always count as used
        if not classes and not ids:
            return True
        if all(c in used_classes for c in classes) and all(i in used_ids for i in ids):
            return True
    return False

print(f"used classes: {len(used_classes)} · used ids: {len(used_ids)}\n")
total_src = total_comments = 0
for f in sorted(CSS.glob("*.css")):
    css = f.read_text(encoding="utf-8")
    src = len(css.encode("utf-8"))
    comments = sum(len(m.encode("utf-8"))
                   for m in re.findall(r"/\*.*?\*/", css, flags=re.S))
    total_src += src
    total_comments += comments
    # crude rule split on top-level blocks (media queries handled by
    # scanning inner rules too)
    body = css
    unused = []
    for m in re.finditer(r"([^{}@/][^{}]*?)\{[^{}]*\}", strip_comments(body)):
        sel = m.group(1).strip()
        if sel and not rule_used(sel):
            size = len(m.group(0).encode("utf-8"))
            unused.append((sel[:70], size))
    print(f"== {f.name}: {src:,} B src · {comments:,} B comments ({comments*100//max(src,1)}%)")
    for sel, size in unused:
        print(f"   UNUSED ({size:4} B): {sel}")
print(f"\nTOTAL: {total_src:,} B src · {total_comments:,} B comments")

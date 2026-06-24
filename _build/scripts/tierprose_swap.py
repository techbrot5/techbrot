"""Pre-flip: swap the container class of the 'causes' tier-list from the generic .prose
(rendered as an undesigned <h3>+<p> text wall) to .tierprose (styled separated tier rows).
Targets ONLY `<div class="prose">` immediately followed by a `for c in causes` loop — leaves
the r-3/r-2 card variants and all other .prose blocks untouched. Content unchanged."""
import re, os, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "src")

# <div class="prose"> ... whitespace ... {%- for c in causes %}  (handle {%- and {%)
pat = re.compile(r'<div class="prose">(\s*\{%-?\s*for c in causes\s*%\})')
changed = 0
for dirpath, _, files in os.walk(SRC):
    if "_includes" in dirpath:
        continue
    for fn in files:
        if not fn.endswith(".njk"):
            continue
        p = os.path.join(dirpath, fn)
        txt = open(p, encoding="utf-8").read()
        new, n = pat.subn(r'<div class="tierprose">\1', txt)
        if n:
            open(p, "w", encoding="utf-8", newline="").write(new)
            changed += 1
            print(f"  {n}x  {os.path.relpath(p, ROOT)}")
print(f"\nfiles changed: {changed}")

# One-off: splice the 6 _build/tmp/gloss_*.txt term fragments into src/_data/glossary.js
# before the closing `];`. Each fragment is comma-terminated object literals.
import pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
gloss = ROOT / "src/_data/glossary.js"
src = gloss.read_text(encoding="utf-8")

frags = []
for n in range(1, 7):
    f = ROOT / f"_build/tmp/gloss_{n}.txt"
    frags.append(f.read_text(encoding="utf-8").strip())
blob = "\n\n".join(frags)

marker = "\n];"
idx = src.rfind(marker)
if idx == -1:
    sys.exit("ERROR: closing '];' not found")

new = src[:idx] + "\n\n  " + blob + "\n];" + src[idx + len(marker):]
gloss.write_text(new, encoding="utf-8")

# sanity: count slugs
import re
print("slug count now:", len(re.findall(r'^\s*slug: "', new, re.M)))

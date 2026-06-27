#!/usr/bin/env python3
# OG-card fonts: instance the site's VARIABLE woff2 brand fonts down to fully-static
# TTF instances that satori's opentype parser can read (it cannot parse variable fvar).
# Output: _build/og-fonts/*.ttf  (build inputs for og-gen.mjs; rerun only if brand fonts change)
import os
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "src", "assets", "fonts")
OUT = os.path.join(ROOT, "_build", "og-fonts")
os.makedirs(OUT, exist_ok=True)

# (src woff2, axis-pin dict [ALL axes must be pinned -> fully static], out name)
JOBS = [
    ("fraunces-var-latin", {"wght": 600, "opsz": 72}, "fraunces-600.ttf"),   # title
    ("fraunces-var-latin", {"wght": 400, "opsz": 40}, "fraunces-400.ttf"),   # secondary serif
    ("geist-var-latin",    {"wght": 600},             "geist-600.ttf"),       # category / labels
    ("geist-var-latin",    {"wght": 500},             "geist-500.ttf"),
    ("geist-var-latin",    {"wght": 400},             "geist-400.ttf"),       # url / meta
    ("spline-sans-mono-var-latin", {"wght": 500},     "spline-500.ttf"),      # mono label option
]

for src, axes, out in JOBS:
    f = TTFont(os.path.join(SRC, src + ".woff2"))
    instantiateVariableFont(f, axes, inplace=True)
    f.flavor = None  # plain TTF, not woff2
    dst = os.path.join(OUT, out)
    f.save(dst)
    print(f"  {out:22} <- {src}  {axes}  ({os.path.getsize(dst)} B)")
print("OG static fonts written to", OUT)

"""Part B drift audit: hardcoded hex + undeclared custom properties in the
Claude Design handoff. Tokens file itself is the only legitimate hex home."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "_design" / "techbrot-design-system" / "project"

scan = []
for pat in ("css/02-base.css", "css/03-components.css", "css/04-pages.css",
            "css/05-kit.css", "styles.css"):
    scan.append(ROOT / pat)
scan += sorted(ROOT.glob("components/**/*.jsx"))
scan += sorted(ROOT.glob("templates/**/index.html"))
scan += sorted(ROOT.glob("templates/**/kit.css"))
scan += sorted(ROOT.glob("ui_kits/website/*.html"))
scan += sorted(ROOT.glob("ui_kits/website/kit.css"))

# declared custom properties (tokens + any local declarations anywhere)
declared = set()
for f in [ROOT / "css/01-tokens.css"] + scan:
    if f.exists():
        declared.update(re.findall(r"(--[A-Za-z0-9_-]+)\s*:", f.read_text(encoding="utf-8")))

HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")
VAR = re.compile(r"var\(\s*(--[A-Za-z0-9_-]+)")
RGBA = re.compile(r"rgba?\([^)]*\)")

hex_hits, undeclared, rgba_hits = [], [], {}
for f in scan:
    if not f.exists():
        continue
    rel = f.relative_to(ROOT).as_posix()
    for i, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
        stripped = line.strip()
        if stripped.startswith(("/*", "*", "//", "<!--")):
            continue
        for h in HEX.findall(line):
            # ignore hex inside url(data:...) SVG payloads? report separately
            in_data_uri = "data:image" in line
            hex_hits.append((rel, i, h, "data-uri" if in_data_uri else "style", stripped[:90]))
        for v in VAR.findall(line):
            if v not in declared:
                undeclared.append((rel, i, v))
        n = len(RGBA.findall(line))
        if n:
            rgba_hits[rel] = rgba_hits.get(rel, 0) + n

print(f"declared custom properties: {len(declared)}")
print(f"\nHARDCODED HEX outside 01-tokens.css: {len(hex_hits)}")
for rel, i, h, kind, ctx in hex_hits:
    print(f"  {rel}:{i} [{kind}] {h}  | {ctx}")
print(f"\nUNDECLARED custom properties used: {len(undeclared)}")
for rel, i, v in undeclared:
    print(f"  {rel}:{i} {v}")
print("\nrgba() literal counts per file (documented inverted-ink/tint ramps):")
for rel, n in sorted(rgba_hits.items()):
    print(f"  {rel}: {n}")

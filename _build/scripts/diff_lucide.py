"""Changeover step 2: DIFF the 8 vendored Lucide icons in the handoff
against the official lucide repo (geometry = the inner elements; the
handoff intentionally restyles stroke-width to 1.75). Any geometry drift
is replaced with official geometry restyled per the handoff contract
(stroke 1.75, currentColor). Writes the verified set to
src/_includes/icons/ for inline include.
Usage: python _build/scripts/diff_lucide.py
"""
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = (ROOT / "_design/techbrot-skin-handoff/techbrot-design-system"
       / "project/handoff/icons")
OUT = ROOT / "src" / "_includes" / "icons"
OUT.mkdir(parents=True, exist_ok=True)

NAMES = ["arrow-right", "check", "chevron-down", "menu", "minus",
         "phone", "star", "x"]
RAW = "https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/{}.svg"


def geometry(svg):
    """Parsed shape signature: sorted list of (tag, sorted geo attrs) for
    every shape element inside <svg> — serialization-independent."""
    m = re.search(r"<svg[^>]*>(.*?)</svg>", svg, re.S)
    body = re.sub(r"<!--.*?-->", "", m.group(1), flags=re.S)
    shapes = []
    for tag_m in re.finditer(
            r"<(path|line|circle|rect|polyline|polygon|ellipse)\b([^>]*?)/?>",
            body):
        tag, attrs = tag_m.group(1), tag_m.group(2)
        pairs = sorted(re.findall(r'([a-zA-Z0-9-]+)="([^"]*)"', attrs))
        shapes.append((tag, tuple(pairs)))
    return sorted(shapes)


drift = []
for name in NAMES:
    official = urllib.request.urlopen(
        urllib.request.Request(RAW.format(name),
                               headers={"User-Agent": "curl/8"})).read().decode()
    vendored = (SRC / f"{name}.svg").read_text(encoding="utf-8")
    ok = geometry(official) == geometry(vendored)
    if ok:
        # handoff copy verified against official — install AS VENDORED
        # (its svg attrs ARE the styling contract: 20px, stroke 1.75)
        (OUT / f"{name}.svg").write_text(vendored, encoding="utf-8")
        print(f"{name}: GEOMETRY MATCHES OFFICIAL -> handoff copy installed")
    else:
        drift.append(name)
        # real drift: official geometry inside the handoff styling frame
        m = re.search(r"<svg[^>]*>", vendored)
        frame = m.group(0)
        body = re.sub(r"<!--.*?-->", "",
                      re.search(r"<svg[^>]*>(.*?)</svg>", official,
                                re.S).group(1), flags=re.S)
        out_svg = frame + re.sub(r"\s+", " ", body).strip() + "</svg>\n"
        (OUT / f"{name}.svg").write_text(out_svg, encoding="utf-8")
        print(f"{name}: GEOMETRY DRIFT -> official geometry in handoff frame")
print(f"\n{len(drift)} drifted: {drift if drift else 'none'} · installed to src/_includes/icons/")

"""Fetch Lucide stroke icons (readme ICONOGRAPHY substitution policy: copy
inline, never hotlink) into src/_includes/icons/ as Nunjucks-includable SVGs.
Normalized: 18px box, stroke-width 1.5, currentColor, aria-hidden."""
import re
import urllib.request
from pathlib import Path

OUT = Path("src/_includes/icons")
OUT.mkdir(parents=True, exist_ok=True)

ICONS = {
    "ecommerce": "shopping-cart",
    "real-estate": "building-2",
    "construction": "hard-hat",
    "restaurant": "utensils",
    "healthcare": "stethoscope",
    "legal": "scale",
    "saas": "layers",
    "professional-services": "briefcase",
}

for slug, name in ICONS.items():
    url = f"https://unpkg.com/lucide-static@latest/icons/{name}.svg"
    svg = urllib.request.urlopen(url).read().decode("utf-8")
    svg = re.sub(r"<!--.*?-->", "", svg, flags=re.S).strip()
    svg = svg.replace('width="24"', 'width="18"').replace('height="24"', 'height="18"')
    svg = svg.replace('stroke-width="2"', 'stroke-width="1.5"')
    svg = svg.replace("<svg ", '<svg aria-hidden="true" focusable="false" ', 1)
    (OUT / f"{slug}.svg").write_text(svg, encoding="utf-8")
    print(slug, "<-", name, len(svg), "bytes")

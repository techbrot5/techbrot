"""New-skin font fetch (changeover step 2, per 00-fonts.SKIN.css header).
Downloads the latin woff2 subsets Google serves for:
  - Public Sans variable wght 400..800 (normal)
  - IBM Plex Mono 400 / 500 / 600
Fraunces (normal + italic variable) already self-hosted from round 1 — kept.
publicsans-italic is OPTIONAL per the spec and skipped (no body italics in
the handoff renders). fonts-preview.css is NEVER fetched or shipped.
Usage: python _build/scripts/fetch_fonts_skin.py
"""
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "src" / "assets" / "fonts"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

JOBS = [
    ("https://fonts.googleapis.com/css2?family=Public+Sans:wght@400..800&display=swap",
     [("publicsans-var-latin.woff2", None)]),
    ("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap",
     [("ibmplexmono-400-latin.woff2", "400"),
      ("ibmplexmono-500-latin.woff2", "500"),
      ("ibmplexmono-600-latin.woff2", "600")]),
]

LATIN_MARK = "U+0000-00FF"

for css_url, targets in JOBS:
    req = urllib.request.Request(css_url, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req).read().decode("utf-8")
    # split into @font-face blocks with their preceding subset comment
    blocks = re.findall(r"/\* ([a-z-]+) \*/\s*@font-face\s*\{(.*?)\}", css, re.S)
    for fname, weight in targets:
        picked = None
        for subset, body in blocks:
            if subset != "latin":
                continue
            if LATIN_MARK not in body:
                continue
            if weight and f"font-weight: {weight}" not in body:
                continue
            m = re.search(r"url\((https://[^)]+\.woff2)\)", body)
            if m:
                picked = m.group(1)
                break
        if not picked:
            raise SystemExit(f"FAILED to locate latin woff2 for {fname}")
        data = urllib.request.urlopen(
            urllib.request.Request(picked, headers={"User-Agent": UA})).read()
        (OUT / fname).write_bytes(data)
        print(f"{fname}: {len(data):,} B  <- {picked[:80]}")
print("done")

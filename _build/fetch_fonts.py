"""Download latin variable-font woff2 subsets enumerated by Google Fonts css2
(self-hosting per design brief §4) and print @font-face source data."""
import re
import urllib.request
from pathlib import Path

css = open("_build/verify/gf-css2.css", encoding="utf-8-sig").read()
blocks = re.findall(r"/\* ([a-z\d-]+) \*/\s*@font-face \{(.*?)\}", css, re.S)
out = Path("src/assets/fonts")
for subset, body in blocks:
    if subset != "latin":
        continue
    fam = re.search(r"font-family: '([^']+)'", body).group(1)
    style = re.search(r"font-style: (\w+)", body).group(1)
    weight = re.search(r"font-weight: ([\d ]+)", body).group(1).strip()
    url = re.search(r"url\((\S+?)\)", body).group(1)
    ur = re.search(r"unicode-range: ([^;]+);", body, re.S).group(1)
    name = fam.lower() + ("-italic" if style == "italic" else "") + "-var-latin.woff2"
    urllib.request.urlretrieve(url, out / name)
    print(name, "| weight", weight, "|", (out / name).stat().st_size, "bytes")
    print("  unicode-range:", " ".join(ur.split())[:200])

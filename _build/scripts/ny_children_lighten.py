#!/usr/bin/env python3
"""Location-child LIGHTER hero (founder ruling 2026-06-17, Gallery 06 A4 fix).
City + industry LEAF pages must NOT clone the pillar's heavy figure hero — swap
`heroFigure: "taccount"` -> `heroLight: true` so they render the lighter compact
location-child hero. Pillar keeps its figure; the cities/industries SUB-HUBS
(cities.njk, industries.njk) and the t-bofu service/triage children are NOT
touched here. Idempotent. From repo root:  python _build/scripts/ny_children_lighten.py
"""
import pathlib

ROOT = pathlib.Path("src/find-an-accountant/new-york")
LEAVES = list((ROOT / "cities").glob("*.njk")) + list((ROOT / "industries").glob("*.njk"))

changed, skipped = [], []
for f in sorted(LEAVES):
    s = f.read_text(encoding="utf-8")
    if '"heroLight"' in s:
        skipped.append((f, "already light"))
        continue
    if '"heroFigure": "taccount",' not in s:
        skipped.append((f, "no heroFigure line — inspect"))
        continue
    s = s.replace('"heroFigure": "taccount",', '"heroLight": true,')
    f.write_text(s, encoding="utf-8")
    changed.append(f)

print(f"LIGHTENED {len(changed)} location-child leaf pages:")
for c in changed:
    print("  ~", c.as_posix())
if skipped:
    print(f"SKIPPED {len(skipped)}:")
    for f, why in skipped:
        print(f"  - {f.as_posix()} ({why})")

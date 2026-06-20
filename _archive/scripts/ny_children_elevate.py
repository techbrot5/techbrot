#!/usr/bin/env python3
"""NY children fan-out (round 28, founder 2026-06-17) — apply the elevated
state hero to every NY child: inject `heroFigure: "taccount"` + a generic-true
trust trio into the JSON front-matter (before/after the `"hero": {` line).
Restyle/recompose only — no heading/FAQ/intent/schema/URL change; equity stays
GREEN. Idempotent: skips files that already declare heroFigure. Line-based so it
survives CRLF. Run from repo root:  python _build/scripts/ny_children_elevate.py
"""
import pathlib

ROOT = pathlib.Path("src/find-an-accountant/new-york")
HEROFIG = '  "heroFigure": "taccount",\n'
TRUST = (
    '    "trust": [\n'
    '      "Certified QuickBooks ProAdvisor team",\n'
    '      "Independent &middot; not Intuit",\n'
    '      "Fixed-fee &middot; written scope in 3 days"\n'
    '    ],\n'
)

changed, skipped = [], []
for f in sorted(ROOT.rglob("*.njk")):
    s = f.read_text(encoding="utf-8")
    if '"heroFigure"' in s:
        skipped.append((f, "already elevated"))
        continue
    lines = s.splitlines(keepends=True)
    if not any(ln.strip() == '"hero": {' for ln in lines):
        skipped.append((f, "no hero anchor"))
        continue
    out = []
    for ln in lines:
        if ln.strip() == '"hero": {':
            out.append(HEROFIG)
            out.append(ln)
            out.append(TRUST)
        else:
            out.append(ln)
    f.write_text("".join(out), encoding="utf-8")
    changed.append(f)

print(f"CHANGED {len(changed)}:")
for c in changed:
    print("  +", c.as_posix())
if skipped:
    print(f"SKIPPED {len(skipped)}:")
    for f, why in skipped:
        print(f"  - {f.as_posix()} ({why})")

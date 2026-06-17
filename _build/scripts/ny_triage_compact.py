#!/usr/bin/env python3
"""Honest-triage fan-out (founder OK 2026-06-17): lighten the 4 NY triage heroes
to the compact triage hero (capture: triage hero is compact, NO figure). Removes
the `heroFigure: "taccount"` line so t-bofu renders the compact hero. Idempotent.
(The amber disclosure ATF banners are added per-page separately — page-specific
compliance copy.) From repo root: python _build/scripts/ny_triage_compact.py
"""
import pathlib

ROOT = pathlib.Path("src/find-an-accountant/new-york")
TRIAGE = ["business-tax-problems", "state-tax-notice-help", "urgent-bookkeeping",
          "speak-to-a-proadvisor"]
NEEDLE = '  "heroFigure": "taccount",\n'

changed, skipped = [], []
for name in TRIAGE:
    f = ROOT / f"{name}.njk"
    s = f.read_text(encoding="utf-8")
    if NEEDLE not in s:
        skipped.append(name)
        continue
    f.write_text(s.replace(NEEDLE, "", 1), encoding="utf-8")
    changed.append(name)

print(f"COMPACTED {len(changed)}: {', '.join(changed)}")
if skipped:
    print(f"SKIPPED {len(skipped)}: {', '.join(skipped)}")

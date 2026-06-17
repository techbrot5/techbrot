#!/usr/bin/env python3
"""NY service + honest-triage children: t-location -> t-bofu tier RE-TAG
(round 28 follow-up, founder 2026-06-17). These are conversion pages; correct
tier = t-bofu (data-tier/tint), not t-location. The elevated hero is already
identical (heroFigure split), so this is tagging/tint only. NO copy change
(honest-triage compliance copy untouched). Idempotent. From repo root:
  python _build/scripts/ny_retier_bofu.py
"""
import pathlib

ROOT = pathlib.Path("src/find-an-accountant/new-york")
SERVICE = [
    "bookkeeping-services", "cleanup-bookkeeping", "monthly-bookkeeping",
    "quickbooks-accountant", "quickbooks-cleanup", "quickbooks-migration",
    "quickbooks-reconciliation", "quickbooks-setup", "quickbooks-training",
    "sales-tax-help", "small-business-accountant", "virtual-bookkeeper", "pricing",
]
TRIAGE = ["business-tax-problems", "state-tax-notice-help", "urgent-bookkeeping",
          "speak-to-a-proadvisor"]

changed, skipped = [], []
for name in SERVICE + TRIAGE:
    f = ROOT / f"{name}.njk"
    s = f.read_text(encoding="utf-8")
    if '"layouts/t-bofu.njk"' in s:
        skipped.append((name, "already t-bofu"))
        continue
    if '"layouts/t-location.njk"' not in s:
        skipped.append((name, "NOT t-location — inspect"))
        continue
    s = s.replace('"layouts/t-location.njk"', '"layouts/t-bofu.njk"')
    s = s.replace('section--tier-hub', 'section--tier-bofu')  # front-matter tierClass + body
    s = s.replace('"page--location"', '"page--bofu"')          # bodyClass (cosmetic; unused in CSS)
    f.write_text(s, encoding="utf-8")
    changed.append(name)

print(f"RE-TAGGED {len(changed)} (service {len([c for c in changed if c in SERVICE])} + triage {len([c for c in changed if c in TRIAGE])}):")
for c in changed:
    print("  ->", c)
if skipped:
    print(f"SKIPPED {len(skipped)}:")
    for n, why in skipped:
        print(f"  - {n} ({why})")

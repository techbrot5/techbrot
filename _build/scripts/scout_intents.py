"""Scout: every ?intent= value in the live repo HTML vs intents.json keys.
Lists unmapped keys with the pages that use them (TODO 5 resolution input).
Usage: python _build/scripts/scout_intents.py
"""
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LIVE_DIRS = ["about", "accounting", "contact", "find-an-accountant", "legal",
             "partners", "pricing", "quickbooks", "trust", "vs"]

intents = json.loads((ROOT / "src/_data/intents.json").read_text(encoding="utf-8"))
known = set(intents["intents"])
# state pillar/advisory keys resolve at runtime: tb-forms.js maps
# <state-slug> and <state-slug>-advisory through LOOKUPS.state onto the
# __state_pillar__ / __state_advisory__ template entries
for slug in intents.get("lookups", {}).get("state", {}):
    known.add(slug)
    known.add(f"{slug}-advisory")

uses = defaultdict(set)
intent_re = re.compile(r"[?&](?:amp;)?intent=([A-Za-z0-9_-]+)")
for d in LIVE_DIRS:
    for p in (ROOT / d).rglob("*.html"):
        for key in intent_re.findall(p.read_text(encoding="utf-8", errors="ignore")):
            uses[key].add(p.relative_to(ROOT).as_posix())

unmapped = {k: sorted(v) for k, v in uses.items() if k not in known}
print(f"live intent keys used: {len(uses)} · mapped: {len(uses) - len(unmapped)} · UNMAPPED: {len(unmapped)}\n")
for k in sorted(unmapped):
    pages = unmapped[k]
    print(f"  {k}  ({len(pages)} page(s))")
    for pg in pages[:4]:
        print(f"      {pg}")
    if len(pages) > 4:
        print(f"      … +{len(pages) - 4} more")

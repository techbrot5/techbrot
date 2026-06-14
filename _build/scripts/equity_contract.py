"""Print the FROZEN equity contract (headings + FAQ) for a baseline URL, straight
from _build/baseline/baseline.json. This output is PASTED into a migration agent's
prompt so the agent matches exact strings instead of re-deriving them from the messy
old HTML (the source of every equity drift in round-22 wave-1).

Usage:  PYTHONIOENCODING=utf-8 python _build/scripts/equity_contract.py /quickbooks/payroll/setup/
"""
import json, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
b = json.load(open(os.path.join(ROOT, "_build/baseline/baseline.json"), encoding="utf-8"))
url = sys.argv[1] if len(sys.argv) > 1 else ""
page = next((p for p in b["pages"] if p["url"] == url), None)
if not page:
    print(f"!! no baseline page for {url!r}")
    sys.exit(1)

print(f"=== FROZEN EQUITY CONTRACT for {url} ===")
print(f"title: {page.get('title','')}")
print(f"meta_description: {page.get('meta_description','')}")
print()
print("HEADINGS — every one MUST appear VERBATIM at this exact level (use &mdash; for")
print("'—', &rsquo; for the curly apostrophe, &amp; for '&'; do NOT add <br>, qualifiers,")
print("or reorder words). 'The monthly brief.' is the only droppable one (newsletter).")
for h in page.get("headings", []):
    lvl = h.get("level", "")
    if lvl in ("h1", "h2", "h3"):
        print(f"  {lvl}: {h.get('text','')}")
print()
faq = page.get("faq", [])
print(f"FAQ — {len(faq)} Q/A. Each QUESTION verbatim; each ANSWER preserved verbatim")
print("(enrichment may APPEND detail to an answer, never reword/remove the original).")
for i, f in enumerate(faq, 1):
    print(f"  Q{i}: {f.get('q','')}")
    print(f"  A{i}: {f.get('a','')}")
print()
print(f"SCHEMA TYPES present in baseline: {', '.join(sorted(set(page.get('schema_types', []))))}"
      if page.get("schema_types") else "SCHEMA TYPES: (see baseline.json json_ld)")

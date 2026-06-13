"""Print a Lighthouse report summary: category scores, CWV, failing audits."""
import json
import sys
from pathlib import Path

path = Path(sys.argv[1] if len(sys.argv) > 1 else "_build/verify/lighthouse-mobile.report.json")
r = json.loads(path.read_text(encoding="utf-8"))
print(f"== {path.name} · benchmarkIndex {r['environment']['benchmarkIndex']}")
for name, cat in r["categories"].items():
    print(f"  {name}: {round(cat['score'] * 100)}")
for aid in ("cumulative-layout-shift", "largest-contentful-paint",
            "first-contentful-paint", "total-blocking-time"):
    a = r["audits"].get(aid)
    if a and a.get("numericValue") is not None:
        print(f"  {aid}: {round(a['numericValue'], 3)}")
fails = []
for name, cat in r["categories"].items():
    for ref in cat["auditRefs"]:
        a = r["audits"][ref["id"]]
        if a.get("score") is not None and a["score"] < 1:
            fails.append(f"{name}/{ref['id']}: {a['title']}")
print(f"  failing audits: {len(fails)}")
for f in fails[:20]:
    print("   ", f)

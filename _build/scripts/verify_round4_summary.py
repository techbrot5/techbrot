"""Summarize round-4 verification artifacts."""
import json
from pathlib import Path

V = Path("_build/verify")

print("== overflow: measured by _build/scripts/overflow_probe.ps1 "
      "(content-width audit was removed from current Lighthouse)")

for name in ("lighthouse-mobile", "lighthouse-desktop"):
    p = V / f"{name}.report.json"
    r = json.loads(p.read_text(encoding="utf-8"))
    print(f"== {name} · benchmarkIndex {r['environment']['benchmarkIndex']}")
    for cat, c in r["categories"].items():
        print(f"  {cat}: {round(c['score'] * 100)}")
    cls = r["audits"]["cumulative-layout-shift"]["numericValue"]
    lcp = r["audits"]["largest-contentful-paint"]["numericValue"]
    print(f"  CLS {round(cls, 4)} · LCP {round(lcp)}ms")
    fails = []
    for cat in ("accessibility", "best-practices", "seo"):
        for ref in r["categories"][cat]["auditRefs"]:
            a = r["audits"][ref["id"]]
            if a.get("score") is not None and a["score"] < 1:
                fails.append(f"{cat}/{ref['id']}")
    print("  failing a11y/BP/SEO audits:", fails or "none")

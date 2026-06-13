"""Per-item content-equity report for one elevated URL.
For every baseline heading, FAQ item, and schema node type of the page:
CARRIED (text found), JUSTIFIED-REMOVED (equity-exceptions.json), or
MISSING. Schema types are attributed to the graph node that carries them
in the built page (global vs page-specific).
Usage: python _build/scripts/equity_report.py /contact/
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
URL = sys.argv[1] if len(sys.argv) > 1 else "/contact/"

baseline = json.loads((ROOT / "_build/baseline/baseline.json").read_text(encoding="utf-8"))
exceptions = json.loads((ROOT / "_build/battery/equity-exceptions.json").read_text(encoding="utf-8"))
rec = next(p for p in baseline["pages"] if p["url"] == URL)
html = (ROOT / "_site" / URL.lstrip("/") / "index.html").read_text(encoding="utf-8")
exc = exceptions.get(URL, {})
exc_headings = {e["text"]: e for e in exc.get("headings", [])}


def normalize_eq(s):
    import html as html_mod
    import unicodedata
    s = html_mod.unescape(re.sub(r"<[^>]+>", "", s))
    s = unicodedata.normalize("NFKC", s)
    s = s.replace("�", "").replace("’", "").replace("‘", "")
    s = s.replace("—", " ").replace("–", " ").replace("&", " ")
    return re.sub(r"[^a-z0-9 ]", "", re.sub(r"\s+", " ", s.lower())).strip()


built_headings_raw = re.findall(r"<(h[1-6])[^>]*>(.*?)</h[1-6]>", html, re.S)
built_norm = [(lvl, normalize_eq(t), re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", t)).strip())
              for lvl, t in built_headings_raw]

print(f"== HEADINGS ({len(rec['headings'])} baseline) — {URL}")
for h in rec["headings"]:
    key = normalize_eq(h["text"])
    hit = next(((lvl, disp) for lvl, n, disp in built_norm if key and key in n), None)
    if hit:
        lvl_note = "" if hit[0] == h["level"] else f" (level {h['level']}→{hit[0]})"
        print(f"  CARRIED   {h['level']}: {h['text']!r} -> built {hit[0]}{lvl_note}")
    elif h["text"] in exc_headings:
        e = exc_headings[h["text"]]
        # founder ruling 2026-06-13: chrome headings are CHROME-RELOCATED
        # (present in the full-chrome variant), not removals — no per-page
        # sign-off requested
        label = "CHROME-RELOCATED" if e.get("type") == "chrome" else "JUSTIFIED-REMOVED"
        print(f"  {label} {h['level']}: {h['text']!r}")
        print(f"            reason: {e['reason']}")
    else:
        print(f"  MISSING   {h['level']}: {h['text']!r}  ** FAIL **")

print(f"\n== FAQ ({len(rec.get('faq', []))} baseline items)")
if not rec.get("faq"):
    print("  baseline page had NO FAQ — bottom accordion + quick-5 are ADDITIVE")

# attribute each schema type to the script block that carries it
def collect_types(node, acc):
    if isinstance(node, dict):
        t = node.get("@type")
        if isinstance(t, str):
            acc.add(t)
        elif isinstance(t, list):
            acc.update(t)
        for v in node.values():
            collect_types(v, acc)
    elif isinstance(node, list):
        for v in node:
            collect_types(v, acc)


blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
block_types = []
for b in blocks:
    acc = set()
    parsed = json.loads(b)
    collect_types(parsed, acc)
    ids = [g.get("@type") for g in parsed.get("@graph", [parsed])]
    block_types.append((ids, acc))

print(f"\n== SCHEMA NODE TYPES ({len(rec.get('schema_types', []))} baseline)")
for t in rec.get("schema_types", []):
    homes = ["+".join(str(i) for i in ids if i) for ids, acc in block_types if t in acc]
    if homes:
        where = "GLOBAL graph" if homes[0].startswith("['Organization'") or "Organization" in homes[0] else "page graph"
        print(f"  CARRIED   {t}  (in block: {homes[0][:70]})")
    else:
        print(f"  MISSING   {t}  ** FAIL **")

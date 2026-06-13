"""Part A intent-coverage report: pages' intent keys vs live intent-map.js registry."""
import json
import re
from pathlib import Path

BASE = Path(__file__).resolve().parent
baseline = json.loads((BASE / "baseline.json").read_text(encoding="utf-8"))
src = (BASE / "live-intent-map.js").read_text(encoding="utf-8")

registry = re.findall(r"^\s*'([^']+)'\s*:\s*\{", src, re.M)
registry = [k for k in registry if not k.startswith("__")]
lookups = re.search(r"window\.TB_LOOKUPS\s*=", src) is not None

page_keys = {}
for p in baseline["pages"]:
    if p["intent_keys"]:
        page_keys[p["url"]] = p["intent_keys"]
used = sorted({k for keys in page_keys.values() for k in keys})
reg_set = set(registry)
used_set = set(used)

out = {
    "registry_key_count": len(reg_set),
    "registry_keys": sorted(reg_set),
    "has_lookups_tables": lookups,
    "pages_with_intent_keys": len(page_keys),
    "pages_without_intent_keys": baseline["page_count"] - len(page_keys),
    "unique_keys_used_on_pages": len(used_set),
    "keys_used_but_not_in_registry": sorted(used_set - reg_set),
    "registry_keys_never_used_on_pages": sorted(reg_set - used_set),
    "per_page_intent_keys": page_keys,
}
(BASE / "intent-coverage.json").write_text(
    json.dumps(out, indent=1, ensure_ascii=False), encoding="utf-8")
print("registry keys:", len(reg_set))
print("pages with intent keys:", len(page_keys), "/", baseline["page_count"])
print("unique keys used:", len(used_set))
print("used but NOT in registry:", len(used_set - reg_set))
for k in sorted(used_set - reg_set):
    print("   ", k)
print("registry keys never used on any repo page:", len(reg_set - used_set))

# extra report stats
wc = [p["word_count"] for p in baseline["pages"]]
faqs = sum(len(p["faq"]) for p in baseline["pages"])
faq_pages = sum(1 for p in baseline["pages"] if p["faq"])
schema = {}
for p in baseline["pages"]:
    for t in p["schema_types"]:
        schema[t] = schema.get(t, 0) + 1
no_h1 = [p["url"] for p in baseline["pages"] if p["h_counts"]["h1"] == 0]
multi_h1 = [p["url"] for p in baseline["pages"] if p["h_counts"]["h1"] > 1]
no_canon = [p["url"] for p in baseline["pages"] if not p["canonical"]]
forms = sum(1 for p in baseline["pages"] if p["forms"])
print("\nword_count: min", min(wc), "median", sorted(wc)[len(wc)//2], "max", max(wc))
print("FAQ Q/A pairs (JSON-LD):", faqs, "across", faq_pages, "pages")
print("pages with forms:", forms)
print("pages missing H1:", no_h1 or "none")
print("pages with multiple H1:", multi_h1 or "none")
print("pages missing canonical:", no_canon or "none")
print("\ntop schema types:")
for t, n in sorted(schema.items(), key=lambda x: -x[1])[:15]:
    print(f"   {t}: {n}")

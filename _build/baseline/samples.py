"""Print 3 compact sample baseline records for the Part A report."""
import json
from pathlib import Path

BASE = Path(__file__).resolve().parent
baseline = json.loads((BASE / "baseline.json").read_text(encoding="utf-8"))
by_url = {p["url"]: p for p in baseline["pages"]}

for url in ["/legal/privacy-policy/", "/quickbooks/help/error-codes/h202/",
            "/find-an-accountant/new-york/cities/brooklyn/"]:
    p = by_url[url]
    print("=" * 70)
    print("url:", p["url"])
    print("title:", p["title"])
    print("meta_description:", p["meta_description"][:140])
    print("canonical:", p["canonical"])
    print("robots:", p["robots"])
    print("h_counts:", p["h_counts"], "| word_count:", p["word_count"])
    print("headings (first 8):")
    for h in p["headings"][:8]:
        print(f"   {h['level']}: {h['text'][:80]}")
    print("schema_types:", ", ".join(p["schema_types"]))
    print("faq pairs:", len(p["faq"]))
    if p["faq"]:
        print("   sample Q:", p["faq"][0]["q"][:90])
    print("intent_keys:", p["intent_keys"])
    print("internal_hrefs:", len(p["internal_hrefs"]))
    print("forms:", [(f["action"][:60], len(f["fields"])) for f in p["forms"]])

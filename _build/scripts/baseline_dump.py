import json, sys, textwrap
d = json.load(open("_build/baseline/baseline.json", encoding="utf-8"))
by = {p["url"].rstrip("/")+"/": p for p in d["pages"]}
for q in sys.argv[1:]:
    u = "/"+q.strip("/")+"/"
    p = by.get(u)
    print("\n" + "="*72)
    if not p:
        print("MISS", u); continue
    print("URL:", p["url"], "| words:", p.get("word_count"))
    print("TITLE:", p.get("title"))
    print("META:", p.get("meta_description"))
    print("SCHEMA TYPES:", p.get("schema_types"))
    hs = p.get("headings", [])
    print(f"HEADINGS ({len(hs)}):")
    for h in hs:
        if isinstance(h, dict):
            print(f"  {h.get('tag','?')}: {h.get('text','')}")
        else:
            print("  ", h)
    fq = p.get("faq", [])
    print(f"FAQ ({len(fq)}):")
    for f in fq:
        q_ = f.get("q") if isinstance(f, dict) else f
        print("  Q:", q_)
    ih = p.get("internal_hrefs", [])
    print(f"INTERNAL HREFS ({len(ih)}):", ", ".join(ih[:40]))

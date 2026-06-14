import json, sys
data = json.load(open("_build/baseline/baseline.json", encoding="utf-8"))
# baseline.json may be a dict keyed by url, or a list of records
recs = data.values() if isinstance(data, dict) else data
urls = set()
for r in recs:
    if isinstance(r, dict):
        u = r.get("url") or r.get("path") or r.get("slug")
        if u: urls.add(u.rstrip("/") + "/")
    elif isinstance(r, str):
        urls.add(r.rstrip("/") + "/")
if isinstance(data, dict):
    for k in data.keys():
        urls.add(k.rstrip("/") + "/")
print("TOTAL baseline urls:", len(urls))
queries = sys.argv[1:]
for q in queries:
    qn = "/" + q.strip("/") + "/"
    hit = qn in urls
    print(f"{'HIT ' if hit else 'MISS'} {qn}")
# also print how many urls under find-an-accountant and quickbooks
fa = sorted(u for u in urls if u.startswith("/find-an-accountant/"))
qb = sorted(u for u in urls if u.startswith("/quickbooks/"))
print("\n-- find-an-accountant baseline urls:", len(fa))
for u in fa: print("   ", u)
print("\n-- quickbooks baseline urls:", len(qb))
for u in qb: print("   ", u)

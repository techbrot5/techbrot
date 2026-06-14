import re, os
from collections import defaultdict

ELEVATED = [
    "/", "/about/", "/about/methodology/", "/about/network/", "/contact/",
    "/pricing/", "/trust/", "/partners/", "/quickbooks/file-review/",
    "/legal/disclaimer/", "/legal/dpa/", "/legal/privacy-policy/", "/legal/terms/",
    "/accounting/", "/accounting/bookkeeping/monthly-bookkeeping/",
    "/accounting/bookkeeping/cleanup-bookkeeping/",
    "/accounting/bookkeeping/catch-up-bookkeeping/",
    "/accounting/payroll-management/", "/accounting/sales-tax-compliance/",
    "/accounting/advisory/", "/accounting/advisory/fractional-cfo/",
    "/quickbooks/", "/quickbooks/setup/", "/quickbooks/migration/",
    "/quickbooks/cleanup/", "/quickbooks/help/", "/quickbooks/payroll/",
]
ELSET = set(ELEVATED)

def path_for(url):
    return os.path.join("_site", url.strip("/"), "index.html") if url != "/" else "_site/index.html"

def norm(href):
    href = href.split("#")[0].split("?")[0]
    if not href.startswith("/"):
        return None
    if not href.endswith("/"):
        href += "/"
    return href

def region(html, tag):
    m = re.search(rf"<{tag}\b[^>]*>(.*?)</{tag}>", html, re.S|re.I)
    return m.group(1) if m else ""

content_out = {}      # url -> set of internal targets found inside <main>
chrome_targets = set()
for url in ELEVATED:
    p = path_for(url)
    if not os.path.exists(p):
        content_out[url] = set(); print("MISSING FILE", p); continue
    html = open(p, encoding="utf-8").read()
    header = region(html, "header"); footer = region(html, "footer")
    main = region(html, "main") or html
    for h in re.findall(r'href="([^"]+)"', header) + re.findall(r'href="([^"]+)"', footer):
        n = norm(h)
        if n: chrome_targets.add(n)
    outs = set()
    for h in re.findall(r'href="([^"]+)"', main):
        n = norm(h)
        if n and n != url:
            outs.add(n)
    content_out[url] = outs

# inbound counts (content links only), among elevated set
inbound = defaultdict(set)
for src, outs in content_out.items():
    for t in outs:
        if t in ELSET and t != src:
            inbound[t].add(src)

print("="*64)
print("IN-CONTENT INBOUND LINKS (from <main>, among the 27 elevated)")
print("="*64)
for url in ELEVATED:
    cnt = len(inbound[url])
    flag = "  <-- ORPHAN(<2)" if cnt < 2 else ""
    src = ", ".join(sorted(inbound[url])) if inbound[url] else "(none)"
    print(f"{cnt:2d}  {url}{flag}")
    print(f"      from: {src}")

print("\n" + "="*64)
print("OUTBOUND in-content links per page (to elevated siblings)")
print("="*64)
for url in ELEVATED:
    sib = sorted(t for t in content_out[url] if t in ELSET)
    print(f"{len(sib):2d}  {url} -> {', '.join(sib) if sib else '(none)'}")

print("\n" + "="*64)
print("DEFINEDTERM / FRAMEWORK CROSS-REFERENCES")
print("="*64)
pairs = [
    ("/accounting/bookkeeping/cleanup-bookkeeping/", "/accounting/bookkeeping/catch-up-bookkeeping/"),
    ("/quickbooks/setup/", "/quickbooks/migration/"),
]
for a,b in pairs:
    ab = b in content_out.get(a,set()); ba = a in content_out.get(b,set())
    print(f"  {a}  ->  {b} : {'YES' if ab else 'no'}")
    print(f"  {b}  ->  {a} : {'YES' if ba else 'no'}")

# chrome targets that are elevated (these inflate naive counts)
print("\nCHROME (nav/footer) links to elevated pages:",
      sorted(t for t in chrome_targets if t in ELSET))

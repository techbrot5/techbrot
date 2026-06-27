"""T6 pre-flip PRODUCTION audit. Run against the PRODUCTION build (_site-prod, built
with ENVIRONMENT=production). Checks the indexability / crawl / canonical gates that
only matter in production:
  A1 noindex-leak: every page must emit index,follow (0 noindex leaks)
  A2 dev-absence:  no /dev/ page may exist in the prod output
  B4 robots.txt:   must Allow crawl + reference the sitemap (not the preview Disallow)
  B5 sitemap.xml:  all indexable URLs, 0 dev / 0 noindex / 0 404, set vs page set
  B6 canonical:    every page self-referencing canonical (no missing, no cross-point)
"""
import os, re, glob
SITE = "_site-prod"
SITEURL = "https://techbrot.com"

def read(p):
    try: return open(p, encoding="utf-8", errors="ignore").read()
    except: return ""

pages = glob.glob(os.path.join(SITE, "**", "index.html"), recursive=True)
noindex, dev_pages, canon_missing, canon_cross = [], [], [], []
indexfollow = 0
page_urls = set()
robot_by_url = {}
for p in pages:
    url = "/" + os.path.relpath(p, SITE).replace("\\", "/")[:-len("index.html")]
    url = re.sub(r"//+$", "/", url)
    page_urls.add(url)
    if url.startswith("/dev/"):
        dev_pages.append(url)
    h = read(p)
    mr = re.search(r'<meta name="robots" content="([^"]+)"', h)
    robots = mr.group(1) if mr else "(NO robots meta)"
    robot_by_url[url] = robots
    if "noindex" in robots:
        noindex.append((url, robots))
    if re.search(r"index,\s*follow", robots):
        indexfollow += 1
    mc = re.search(r'<link rel="canonical" href="([^"]+)"', h)
    if not mc:
        canon_missing.append(url)
    else:
        if mc.group(1) != SITEURL + url:
            canon_cross.append((url, mc.group(1)))

print("=" * 64)
print("T6 PRODUCTION AUDIT  (%s, %d pages)" % (SITE, len(pages)))
print("=" * 64)

print("\n[A1] NOINDEX-LEAK (every page must be index,follow)")
print("  pages emitting index,follow: %d / %d" % (indexfollow, len(pages)))
print("  NOINDEX LEAKS: %d" % len(noindex))
for u, r in noindex[:40]:
    print("     %s -> %s" % (u, r))

print("\n[A2] /dev/ ABSENCE in production output")
print("  /dev/ pages present: %d  (must be 0)" % len(dev_pages))
for u in dev_pages[:20]:
    print("     %s" % u)
# also any leftover _site-prod/dev dir
print("  _site-prod/dev dir exists: %s" % os.path.isdir(os.path.join(SITE, "dev")))

print("\n[B4] robots.txt (production)")
rb = read(os.path.join(SITE, "robots.txt"))
print("  " + "\n  ".join(rb.strip().splitlines()) if rb.strip() else "  (MISSING)")
print("  Allows crawl: %s · references sitemap: %s · NOT preview-disallow: %s" % (
    "Allow: /" in rb, "sitemap.xml" in rb.lower(), "Disallow: /" not in rb))

print("\n[B5] sitemap.xml")
sm = read(os.path.join(SITE, "sitemap.xml"))
locs = re.findall(r"<loc>([^<]+)</loc>", sm)
loc_urls = set(u.replace(SITEURL, "") for u in locs)
print("  sitemap URL count: %d" % len(locs))
print("  /dev/ in sitemap: %d (must be 0)" % len([u for u in locs if "/dev/" in u]))
print("  noindex URLs in sitemap: %d (must be 0)" % len([u for u in loc_urls if u in dict(noindex)]))
print("  has lastmod: %s" % ("<lastmod" in sm))
# indexable page set vs sitemap set
indexable = {u for u in page_urls if u not in dict(noindex) and not u.startswith("/dev/")}
missing_from_sitemap = sorted(indexable - loc_urls - {"/404/"})
extra_in_sitemap = sorted(loc_urls - page_urls)
print("  indexable pages NOT in sitemap: %d" % len(missing_from_sitemap))
for u in missing_from_sitemap[:20]: print("     %s" % u)
print("  sitemap URLs with no built page: %d" % len(extra_in_sitemap))
for u in extra_in_sitemap[:20]: print("     %s" % u)

print("\n[B6] CANONICALS (self-referencing)")
print("  canonical MISSING: %d" % len(canon_missing))
for u in canon_missing[:20]: print("     %s" % u)
print("  canonical CROSS-POINTING (canonical != page url): %d" % len(canon_cross))
for u, c in canon_cross[:30]: print("     %s -> %s" % (u, c))
print("\nDONE.")

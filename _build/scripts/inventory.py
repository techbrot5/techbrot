#!/usr/bin/env python3
# Canonical live-page inventory for the v6 blueprint. Walks the PRODUCTION build
# (_site-prod), cross-references src front-matter, emits one row per live URL.
# Pure read/report: writes ONLY to _build/reports/. Does not touch src or output.
import os, re, csv, json, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = os.path.join(ROOT, "_site-prod")
REPORTS = os.path.join(ROOT, "_build", "reports")
os.makedirs(REPORTS, exist_ok=True)

# ---------- sitemap url set ----------
sm = os.path.join(SITE, "sitemap.xml")
sitemap_urls = set()
if os.path.exists(sm):
    for loc in re.findall(r"<loc>([^<]+)</loc>", open(sm, encoding="utf-8").read()):
        sitemap_urls.add(re.sub(r"^https?://[^/]+", "", loc))

# ---------- src map: url -> layout (template) ----------
LAYOUT_RE = re.compile(r'["\']?layout["\']?\s*:\s*["\']?layouts/([a-z0-9-]+)\.njk', re.I)
PERMA_RE  = re.compile(r'["\']?permalink["\']?\s*:\s*["\']([^"\'{}]+)["\']')
srcmap = {}
for njk in glob.glob(os.path.join(ROOT, "src", "**", "*.njk"), recursive=True):
    if os.sep + "_includes" + os.sep in njk or os.sep + "dev" + os.sep in njk:
        continue
    head = open(njk, encoding="utf-8", errors="replace").read(4000)
    lm = LAYOUT_RE.search(head)
    if not lm:
        continue
    layout = lm.group(1)
    pm = PERMA_RE.search(head)
    if pm:
        url = pm.group(1)
    else:  # convention: src/a/b.njk -> /a/b/ ; index.njk -> dir/
        rel = os.path.relpath(njk, os.path.join(ROOT, "src")).replace(os.sep, "/")
        rel = re.sub(r"(index)?\.njk$", "", rel)
        url = "/" + rel
    if not url.endswith("/"):
        url += "/"
    srcmap[url] = layout

# ---------- helpers ----------
def text_of(m): return re.sub(r"<[^>]+>", "", m).strip() if m else ""
STRUCTURAL = {"BreadcrumbList","Organization","WebSite","ImageObject","ListItem","Question",
    "Answer","Offer","OfferCatalog","PostalAddress","Person","SpeakableSpecification",
    "BusinessAudience","Country","AggregateRating","Review","Rating","ItemList","PropertyValue",
    "ContactPoint","OpeningHoursSpecification","GeoCoordinates","Brand"}
PRIORITY = ["Service","Article","BlogPosting","DefinedTerm","HowTo","SoftwareApplication",
    "CollectionPage","QAPage","AboutPage","ContactPage","FAQPage","WebPage"]

def primary_type(types):
    for t in PRIORITY:
        if t in types: return t
    rest = [t for t in types if t not in STRUCTURAL]
    return rest[0] if rest else (sorted(types)[0] if types else "")

def infer_template(url):
    s = [x for x in url.split("/") if x]
    if not s: return "a1-home"
    if s[0]=="find-an-accountant":
        if len(s)==1: return "t-hub"
        if len(s)==2: return "t-state-pillar"
        return "t-location-child"
    if s[0]=="glossary": return "t-glossary" if len(s)>1 else "t-hub"
    if s[0]=="blog": return "t-article" if len(s)>1 else "t-hub"
    if "error-codes" in s and s[-1] not in ("error-codes",): return "t-money"
    if s[0] in ("vs","switch","compare"): return "t-comparison"
    if s[0]=="legal": return "t-prose"
    if s[0] in ("resources","frameworks","tools"): return "t-guide" if len(s)>1 else "t-hub"
    return "t-prose"

def page_type(url, template, types):
    s = [x for x in url.split("/") if x]
    if not s: return "home"
    silo = s[0]
    if url=="/contact/": return "contact"
    if url=="/quickbooks/file-review/": return "file-review"
    if silo=="legal": return "legal"
    if silo=="glossary": return "glossary-term" if len(s)>1 else "faq-hub"
    if silo=="blog":
        if len(s)==1: return "blog-hub"
        if s[1]=="category": return "blog-category"
        return "blog-post"
    if silo in ("vs","compare"): return "comparison" if len(s)>1 else "comparison-hub"
    if silo=="switch": return "comparison"
    if silo=="pricing": return "pricing"
    if silo=="frameworks": return "framework" if len(s)>1 else "hub"
    if silo=="tools": return "tool" if len(s)>1 else "hub"
    if silo=="resources":
        if len(s)==1: return "hub"
        if "checklist" in s[-1]: return "checklist"
        return "guide"
    if silo=="find-an-accountant":
        if len(s)==1: return "hub"
        if len(s)==2: return "state-pillar"
        return "location-child"
    if "error-codes" in s: return "error-code" if s[-1]!="error-codes" else "hub"
    if s[-1]=="faq" or (len(s)>=2 and s[-1]=="faq"): return "faq-hub"
    if template=="t-hub": return "hub"
    if template=="t-money": return "money/service"
    if template=="t-prose": return "prose"
    if template=="t-comparison": return "comparison"
    return "prose"

def funnel(silo, pt):
    if pt in ("glossary-term","guide","checklist","framework","blog-post","blog-hub",
              "blog-category","error-code","faq-hub","tool"): return "TOFU"
    if pt in ("money/service","state-pillar","location-child","comparison","comparison-hub",
              "pricing","contact","file-review"): return "BOFU"
    if pt in ("hub","home","prose","legal","about"): return "MOFU"
    if silo in ("accounting","quickbooks") and pt in ("money/service",): return "BOFU"
    return "MOFU"

# ---------- walk built site ----------
rows = []
built_urls = set()
n = 0
for dirpath, _, files in os.walk(SITE):
    if "index.html" not in files: continue
    fp = os.path.join(dirpath, "index.html")
    url = "/" + os.path.relpath(fp, SITE).replace(os.sep, "/").replace("index.html", "")
    if not url.endswith("/"): url += "/"
    html = open(fp, encoding="utf-8", errors="replace").read()
    if re.search(r'<meta name="robots" content="noindex', html, re.I):
        continue
    built_urls.add(url)
    n += 1
    title = text_of((re.search(r"<title>(.*?)</title>", html, re.S) or [None, ""])[1])
    md = re.search(r'<meta name="description" content="([^"]*)"', html)
    meta_desc = md.group(1) if md else ""
    h1 = text_of((re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S) or [None, ""])[1])
    # JSON-LD
    types, faq_count = set(), 0
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        try: data = json.loads(block)
        except Exception: continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else (data if isinstance(data, list) else [])
        for nd in nodes:
            if not isinstance(nd, dict): continue
            t = nd.get("@type")
            for tt in ([t] if isinstance(t, str) else (t or [])): types.add(tt)
            if (isinstance(t,str) and t=="FAQPage") or (isinstance(t,list) and "FAQPage" in t):
                me = nd.get("mainEntity", [])
                faq_count += len(me) if isinstance(me, list) else 0
    schema_type = primary_type(types)
    has_faq = "yes" if "FAQPage" in types else "no"
    reviewed = "yes" if "#david-westgate" in html and "reviewedBy" in html else "no"
    if "trust-strip__badges" in html: trust = "badge"
    elif "trust-strip" in html: trust = "both"
    else: trust = "none"
    silo = (url.split("/")[1] or "root") if url != "/" else "root"
    template = srcmap.get(url) or infer_template(url)
    pt = page_type(url, template, types)
    fs = funnel(silo, pt)
    rows.append([url, silo, pt, template, fs, schema_type, has_faq, faq_count,
                 trust, reviewed, title, len(title), len(meta_desc), h1,
                 "yes" if url in sitemap_urls else "no"])
    if n % 100 == 0: print(f"  {n} pages...", flush=True)

rows.sort(key=lambda r: r[0])
csv_path = os.path.join(REPORTS, "inventory.csv")
with open(csv_path, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f)
    w.writerow(["url","silo","page_type","template","funnel_stage","schema_type","has_faq",
                "faq_count","trust_strip","reviewed_by_david","title","title_len",
                "meta_desc_len","h1","in_sitemap"])
    w.writerows(rows)
print(f"wrote {csv_path} ({len(rows)} rows)", flush=True)

# ---------- summary ----------
from collections import Counter
def tally(idx): return Counter(r[idx] for r in rows)
silo_c, pt_c, fs_c, tpl_c = tally(1), tally(2), tally(4), tally(3)
faq_yes = sum(1 for r in rows if r[6]=="yes"); faq_total = sum(r[7] for r in rows)
rev_yes = sum(1 for r in rows if r[9]=="yes")
title_flags = [(r[0], r[11]) for r in rows if r[11] > 60]
desc_flags = [(r[0], r[12]) for r in rows if r[12] > 160]
# states
states = {}
for r in rows:
    s = [x for x in r[0].split("/") if x]
    if len(s) >= 2 and s[0]=="find-an-accountant":
        states.setdefault(s[1], {"n":0,"cities":False,"industries":False})
        states[s[1]]["n"] += 1
        if len(s) >= 3 and s[2]=="cities": states[s[1]]["cities"]=True
        if len(s) >= 3 and s[2]=="industries": states[s[1]]["industries"]=True
ANCHOR = {"new-york","california","texas","florida","illinois"}
def tier(slug, d):
    if d["cities"] or d["industries"]: return "DEEP"
    if slug in ANCHOR: return "ANCHOR"
    return "CORE"
# drift
sm_not_built = sorted(u for u in sitemap_urls if u not in built_urls)
built_not_sm = sorted(u for u in built_urls if u not in sitemap_urls)

out = []
out.append(f"TOTAL LIVE PAGES: {len(rows)}")
out.append(f"\nBY SILO:\n" + "\n".join(f"  {k:22} {v}" for k,v in sorted(silo_c.items(), key=lambda x:-x[1])))
out.append(f"\nBY PAGE_TYPE:\n" + "\n".join(f"  {k:22} {v}" for k,v in sorted(pt_c.items(), key=lambda x:-x[1])))
out.append(f"\nBY FUNNEL_STAGE:\n" + "\n".join(f"  {k:8} {v}" for k,v in sorted(fs_c.items(), key=lambda x:-x[1])))
out.append(f"\nBY TEMPLATE:\n" + "\n".join(f"  {k:22} {v}" for k,v in sorted(tpl_c.items(), key=lambda x:-x[1])))
out.append(f"\nSTATES BUILT: {len(states)}")
for slug in sorted(states, key=lambda s:(-states[s]['n'], s)):
    d = states[slug]
    out.append(f"  {slug:18} {d['n']:3} pages   {tier(slug,d)}")
out.append(f"\nhas_faq=yes: {faq_yes} pages | total Q&A pairs: {faq_total}")
out.append(f"reviewed_by_david=yes: {rev_yes} pages")
out.append(f"\nHYGIENE FLAGS — title_len>60: {len(title_flags)}")
for u,l in title_flags[:40]: out.append(f"    {l}  {u}")
out.append(f"HYGIENE FLAGS — meta_desc_len>160: {len(desc_flags)}")
for u,l in desc_flags[:40]: out.append(f"    {l}  {u}")
out.append(f"\nDRIFT — in sitemap but NOT built ({len(sm_not_built)}):")
for u in sm_not_built[:50]: out.append(f"    {u}")
out.append(f"DRIFT — built but NOT in sitemap ({len(built_not_sm)}):")
for u in built_not_sm[:50]: out.append(f"    {u}")
summary = "\n".join(out) + "\n"
open(os.path.join(REPORTS, "inventory-summary.txt"), "w", encoding="utf-8").write(summary)
print("=== SUMMARY ===\n" + summary, flush=True)

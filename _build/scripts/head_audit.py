"""Audit built pages' <title> + meta description against the R13 head rules:
title <= 60 chars, description <= 155, brand suffix '· TechBrot' at the end.
Usage: python _build/scripts/head_audit.py
"""
import re, glob, html as H

files = sorted(glob.glob("_site/**/index.html", recursive=True)) + ["_site/404.html"]
for f in files:
    if "/dev/" in f.replace("\\", "/"):
        continue
    t = open(f, encoding="utf-8").read()
    mt = re.search(r"<title>(.*?)</title>", t, re.S)
    md = re.search(r'<meta name="description" content="(.*?)">', t, re.S)
    title = H.unescape(mt.group(1)) if mt else ""
    desc = H.unescape(md.group(1)) if md else ""
    url = "/" + f.replace("\\", "/").replace("_site/", "").replace("index.html", "")
    flags = []
    if len(title) > 60:
        flags.append(f"TITLE>{len(title)}")
    if len(desc) > 155:
        flags.append(f"DESC>{len(desc)}")
    if not title.rstrip().endswith("TechBrot"):
        flags.append("NO-BRAND-SUFFIX")
    mark = ("  <<< " + " ".join(flags)) if flags else "  ok"
    print(f"{url}{mark}")
    print(f"   T({len(title)}): {title}")
    print(f"   D({len(desc)}): {desc}")

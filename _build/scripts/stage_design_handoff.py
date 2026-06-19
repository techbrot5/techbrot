#!/usr/bin/env python3
"""stage_design_handoff.py — assemble the Design hand-off bundle for DesignSync upload.

Builds _build/design-handoff/ containing:
  kitchen-sink/<slug>.html  — the 25 built kitchen-sink pages, SELF-CONTAINED (site.min.css
                              inlined as a <style> so each renders standalone in the Design pane).
  SECTION-SIGNATURE-MAP.md · DESIGN-CONTRACT.md · KITCHEN-SINK-SPEC.md · live-urls-v5.txt
Run AFTER a clean preview build (so _site/dev/kitchen-sink-*/ exist).
"""
import os, shutil, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = os.path.join(ROOT, "_site")
OUT = os.path.join(ROOT, "_build", "design-handoff")
KS = os.path.join(OUT, "kitchen-sink")
LINK = '<link rel="stylesheet" href="/assets/css/site.min.css">'

def main():
    shutil.rmtree(OUT, ignore_errors=True)
    os.makedirs(KS, exist_ok=True)
    with open(os.path.join(SITE, "assets", "css", "site.min.css"), encoding="utf-8") as f:
        css = f.read()
    inline = "<style>\n" + css + "\n</style>"
    pages = sorted(glob.glob(os.path.join(SITE, "dev", "kitchen-sink-*", "index.html")))
    n = 0
    for p in pages:
        slug = os.path.basename(os.path.dirname(p))
        with open(p, encoding="utf-8") as f:
            html = f.read()
        if LINK not in html:
            print("WARN no css link in", slug)
        html = html.replace(LINK, inline)
        with open(os.path.join(KS, slug + ".html"), "w", encoding="utf-8") as f:
            f.write(html)
        n += 1
    # docs
    reports = os.path.join(ROOT, "_build", "reports")
    for doc in ("SECTION-SIGNATURE-MAP.md", "DESIGN-CONTRACT.md", "KITCHEN-SINK-SPEC.md", "live-urls-v5.txt"):
        shutil.copy(os.path.join(reports, doc), os.path.join(OUT, doc))
    print(f"staged {n} pages + 4 docs -> {OUT}")

if __name__ == "__main__":
    main()

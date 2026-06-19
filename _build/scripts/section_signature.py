#!/usr/bin/env python3
"""section_signature.py — empirical section-signature map for the Design re-architecture.

Walks every built page in _site/**/index.html, extracts the <main> body, and reduces it
to an ordered SECTION SIGNATURE: for each <section>, its structural modifier tokens plus the
meaningful body-component class-roots it contains (chrome/utility ignored). Pages are then
clustered by identical signature so we get ONE representative per unique layout pattern.

Outputs:
  _build/reports/_signature-clusters.txt  (full machine dump: every cluster, members, rep)
  _build/reports/live-urls-v5.txt         (STEP 2: all live URLs, sorted)
Run: python _build/scripts/section_signature.py
"""
import os, re, html
from html.parser import HTMLParser
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SITE = os.path.join(ROOT, "_site")
REPORTS = os.path.join(ROOT, "_build", "reports")

# Meaningful BODY components (signature-defining). Chrome + pure utility excluded.
MEANINGFUL = {
    "ai-summary", "faq", "in-brief", "tldr", "toc", "guide-grid", "meta-reviewed",
    "byline-block", "deliver-card", "process-diagram", "process-step", "num", "flow",
    "diagram-feature", "diagram-figure", "hero-figure", "vs-scroll", "vs-table",
    "proof-strip", "buyer-card", "card-hover", "review-card", "service-card",
    "related-card", "related-grid", "team-card", "tile", "call-block", "call-breakout",
    "lead-magnet", "intake-form", "contact-form-wrap", "state-router", "stat-row",
    "checks-list", "fix-steps", "error-badge", "pull-quote", "trust-row", "legal-doc",
    "article", "prose", "calc", "disclosure", "stat",
}
# section-level modifier tokens we keep (identity of the band itself)
KEEP_SECTION_MOD = re.compile(r"^(hero--|hero-tier|section--alt|section--compact|section--cta-band)")

def root(token):
    return re.split(r"__|--", token, 1)[0]

class MainExtractor(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.depth = 0
        self.in_main = False
        self.main_depth = None
        self.events = []  # (kind, data) in document order within <main>
    def handle_starttag(self, tag, attrs):
        if tag == "main":
            self.in_main = True
            self.main_depth = self.depth
            self.depth += 1
            return
        self.depth += 1
        if not self.in_main:
            return
        ad = dict(attrs)
        cls = (ad.get("class") or "").split()
        if tag == "section":
            mods = [c for c in cls if KEEP_SECTION_MOD.match(c) and c != "section"]
            # cta-band dark/light lives on a child or modifier; capture token directly
            self.events.append(("section", tuple(mods)))
        # record meaningful component (primary root)
        for c in cls:
            r = root(c)
            if r in MEANINGFUL:
                self.events.append(("comp", r))
                break
    def handle_endtag(self, tag):
        self.depth -= 1
        if tag == "main" and self.depth == self.main_depth:
            self.in_main = False

def fingerprint(events):
    """Build ordered signature: list of sections, each = (mods, [unique comps in order])."""
    sigs = []
    cur = None
    for kind, data in events:
        if kind == "section":
            cur = {"mods": data, "comps": []}
            sigs.append(cur)
        elif kind == "comp" and cur is not None:
            if data not in cur["comps"]:
                cur["comps"].append(data)
    # serialize
    parts = []
    for s in sigs:
        mod = "+".join(s["mods"]) if s["mods"] else "-"
        comp = ",".join(s["comps"]) if s["comps"] else "-"
        parts.append(f"[{mod}|{comp}]")
    return " > ".join(parts), len(sigs)

STATES = {"california", "texas", "florida", "illinois", "new-york"}
TRIAGE = {"business-tax-problems", "state-tax-notice-help", "urgent-bookkeeping", "speak-to-a-proadvisor"}
EDITORIAL = {"/about/", "/about/methodology/", "/about/network/", "/trust/", "/partners/", "/reviews/"}

def family(url, sig):
    """Deterministic page-type family. Path-first; sig used only to split the QB/accounting
    silos into hub / money / help / guide where the path is ambiguous."""
    if url == "/404.html":
        return None
    if url.startswith("/dev/"):
        return "ZZ · Dev sample (preview-only, not shipped)"
    if url == "/":
        return "A1 · Home"
    if url.startswith("/legal/"):
        return "G1 · Legal document"
    if url in ("/contact/", "/quickbooks/file-review/"):
        return "F1 · Conversion form endpoint"
    # ---- location silo ----
    if url.startswith("/find-an-accountant/"):
        parts = url.strip("/").split("/")[1:]  # drop 'find-an-accountant'
        if len(parts) == 0:
            return "B5 · Location national hub"
        s = parts[0]
        if s in STATES:
            if len(parts) == 1:
                return "D3 · State pillar (t-location)"
            if parts[1] == "cities":
                return "B4 · Location sub-hub (cities/industries)" if len(parts) == 2 else "D4 · City child"
            if parts[1] == "industries":
                return "B4 · Location sub-hub (cities/industries)" if len(parts) == 2 else "D6 · Industry child"
            if parts[1] == "pricing":
                return "F2 · Pricing page"
            if parts[1] in TRIAGE:
                return "D7 · Location triage (honest-triage)"
            return "D5 · State service child"
        return "D5 · State service child"
    # ---- comparison ----
    if url.startswith("/vs/"):
        return "C1 · Comparison hub" if url == "/vs/" else "C2 · Comparison page"
    if url.startswith("/quickbooks/compare/"):
        return "C1 · Comparison hub" if url == "/quickbooks/compare/" else "C2 · Comparison page"
    # ---- light listing hubs + their leaves ----
    if url.startswith("/glossary/"):
        return "B3 · Light listing hub" if url == "/glossary/" else "E2 · Glossary entry"
    if url.startswith("/frameworks/"):
        return "B3 · Light listing hub" if url == "/frameworks/" else "E3 · Framework page"
    if url.startswith("/tools/"):
        return "B3 · Light listing hub" if url == "/tools/" else "E5 · Tool / calculator"
    if url.startswith("/blog/"):
        return "B3 · Light listing hub" if (url == "/blog/" or "/category/" in url) else "E4 · Blog article"
    if url.startswith("/pricing/"):
        return "F2 · Pricing page"
    if url == "/resources/research/":
        return "E6 · Research flagship"
    if url in EDITORIAL or url == "/partners/faq/":
        if "guide-grid,toc,article" in sig:
            return "E1 · Long-form FAQ/guide (TOC sidebar)"
        return "G2 · Editorial / trust standalone"
    # ---- QB / accounting / resources / misc, split by signature ----
    if "guide-grid,toc,article" in sig:
        return "E1 · Long-form FAQ/guide (TOC sidebar)"
    if "hero--hub" in sig:
        return "B2 · Card-grid sub-hub / index"
    if "error-badge" in sig or "fix-steps" in sig:
        return "D2 · Prose template (help/error + informational)"
    # prose-informational: stat-row+byline header, prose-led, NO card-money markers
    card_money = ("process-diagram" in sig or "deliver-card" in sig or "proof-strip" in sig)
    if ("stat-row,stat,checks-list" in sig and "byline-block" in sig) and not card_money:
        return "D2 · Prose template (help/error + informational)"
    # silo home hubs: split editorial hero + dark cta + people/review cards
    if "hero--split" in sig and "section--cta-band--dark" in sig and ("review-card,team-card" in sig or "state-router" in sig):
        return "B1 · Silo home hub"
    if url in ("/quickbooks/", "/accounting/", "/resources/"):
        return "B1 · Silo home hub"
    return "D1 · Service / money page"


def url_for(path):
    rel = os.path.relpath(path, SITE).replace(os.sep, "/")
    rel = rel[:-len("index.html")] if rel.endswith("index.html") else rel
    return "/" + rel if not rel.startswith("/") else rel

def main():
    pages = []
    for dirpath, _, files in os.walk(SITE):
        for f in files:
            if f == "index.html" or (f == "404.html"):
                fp = os.path.join(dirpath, f)
                with open(fp, encoding="utf-8") as fh:
                    htmltext = fh.read()
                p = MainExtractor()
                try:
                    p.feed(htmltext)
                except Exception as e:
                    print("PARSE FAIL", fp, e)
                    continue
                sig, nsec = fingerprint(p.events)
                u = url_for(fp)
                pages.append({
                    "url": u, "sig": sig, "nsec": nsec,
                    "size": len(htmltext),
                    "ncomp": sig.count(",") + sig.count("|"),  # rough richness
                    "family": family(u, sig),
                })
    # cluster
    clusters = defaultdict(list)
    for pg in pages:
        clusters[pg["sig"]].append(pg)
    ordered = sorted(clusters.items(), key=lambda kv: -len(kv[1]))

    # live url export
    urls = sorted(p["url"] for p in pages if not p["url"].endswith("404.html"))
    with open(os.path.join(REPORTS, "live-urls-v5.txt"), "w", encoding="utf-8") as out:
        out.write("\n".join(urls) + "\n")

    with open(os.path.join(REPORTS, "_signature-clusters.txt"), "w", encoding="utf-8") as out:
        out.write(f"TOTAL PAGES PARSED: {len(pages)}\n")
        out.write(f"DISTINCT SECTION SIGNATURES: {len(clusters)}\n")
        out.write("=" * 100 + "\n\n")
        for i, (sig, members) in enumerate(ordered, 1):
            # richest = most sections, then largest html
            rep = max(members, key=lambda m: (m["nsec"], m["size"]))
            out.write(f"### SIGNATURE {i}  ·  {len(members)} pages  ·  {rep['nsec']} sections\n")
            out.write(f"REP (richest): {rep['url']}  ({rep['size']} bytes)\n")
            out.write(f"SIG: {sig}\n")
            # show up to 8 members + top dirs
            topdirs = defaultdict(int)
            for m in members:
                seg = m["url"].strip("/").split("/")
                topdirs["/" + (seg[0] if seg and seg[0] else "(root)")] += 1
            out.write("DIRS: " + ", ".join(f"{k}×{v}" for k, v in sorted(topdirs.items(), key=lambda x:-x[1])) + "\n")
            for m in sorted(members, key=lambda m: m["url"])[:8]:
                out.write(f"   - {m['url']}\n")
            if len(members) > 8:
                out.write(f"   ... +{len(members)-8} more\n")
            out.write("\n")
    # ---- family rollup ----
    fams = defaultdict(list)
    for pg in pages:
        if pg["family"]:
            fams[pg["family"]].append(pg)
    with open(os.path.join(REPORTS, "_families.txt"), "w", encoding="utf-8") as out:
        shipped = sum(len(v) for k, v in fams.items() if not k.startswith("ZZ"))
        out.write(f"LIVE PAGES (excl 404): {len([p for p in pages if p['url'] != '/404.html'])}\n")
        out.write(f"SHIPPED (excl dev): {shipped}\n")
        out.write(f"DISTINCT FAMILIES: {len(fams)}\n")
        out.write("=" * 90 + "\n\n")
        for fam in sorted(fams):
            members = fams[fam]
            rep = max(members, key=lambda m: (m["nsec"], m["size"]))
            out.write(f"## {fam}  —  {len(members)} pages\n")
            out.write(f"   REP (richest, {rep['nsec']} sections): {rep['url']}\n")
            topdirs = defaultdict(int)
            for m in members:
                seg = m["url"].strip("/").split("/")
                topdirs["/" + (seg[0] if seg and seg[0] else "(root)")] += 1
            out.write("   DIRS: " + ", ".join(f"{k}×{v}" for k, v in sorted(topdirs.items(), key=lambda x:-x[1])) + "\n\n")
    # full page->family map
    with open(os.path.join(REPORTS, "_page-family-map.txt"), "w", encoding="utf-8") as out:
        for pg in sorted(pages, key=lambda p: p["url"]):
            if pg["url"] == "/404.html":
                continue
            out.write(f"{pg['family'] or '-':52s}  {pg['url']}\n")
    print(f"pages={len(pages)} signatures={len(clusters)} urls_exported={len(urls)} families={len(fams)}")



if __name__ == "__main__":
    main()

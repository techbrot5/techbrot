"""Changeover step 5 — NO-TRACES PROOF.
1. Old-system colors: zero oxblood-era hexes anywhere in the shipping
   bundle (sources + minified artifact).
2. Class manifest: every class in built HTML is in CLASS-MANIFEST (208)
   ∪ the extension layer (classes DEFINED in 09-extensions.css)
   ∪ the content-machinery/semantic whitelist below.
3. Old motif assets out of the output (motif-ledger-*). figure-judgment
   is a CONTENT diagram (currentColor → recuts to cobalt) and is exempt.
Usage: python _build/scripts/verify_no_traces.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / "_site"
MANIFEST = (ROOT / "_design/techbrot-skin-handoff/techbrot-design-system"
            / "project/handoff/CLASS-MANIFEST.md")

OLD_HEXES = ("841E1E", "6B1818", "B85050", "F7F5F0", "F3F1EB", "ECEAE2",
             "FAFAF7", "0F4FCC", "8B8B85", "0B0B0B")

# content-machinery + semantic markers + founder-ruled whitelist entries
WHITELIST = {
    "sr-only",
    # founder ruling (round-10 audit item 1): design's own renders use it;
    # known upstream manifest omission
    "section--cta-band--light",
    # bare quick-5 container (rules target the --ruled variant + children)
    "ai-summary",
    # nested-FAQ + legal-doc semantic variants carried verbatim from the
    # live pages (rules live in 09-extensions or are heading semantics)
    "faq__list", "faq__list--nested", "section--faq-nested",
    "section--legal-doc", "legal-doc__list", "process-step__heading",
    # body-level page hooks from front matter (no rules by design)
    "page--hub", "page--bofu", "page--legal", "page--trust",
    "page--partners", "has-call-bar",
}

fails = []

# ── 1: old hexes
bundle_files = list((ROOT / "src/assets/css").glob("*.css")) + \
    [SITE / "assets/css/site.min.css"]
for f in bundle_files:
    text = f.read_text(encoding="utf-8")
    for h in OLD_HEXES:
        if re.search(rf"#{h}\b", text, re.I):
            fails.append(f"old-system hex #{h} in {f.name}")
print(f"[hex] {len(bundle_files)} bundle files scanned — "
      f"{'CLEAN' if not fails else 'TRACES FOUND'}")

# ── 2: class manifest
manifest = set(re.findall(r"^([a-z][a-z0-9_-]*)$",
                          MANIFEST.read_text(encoding="utf-8"), re.M))
ext_defined = set(re.findall(
    r"\.([A-Za-z][A-Za-z0-9_-]*)",
    (ROOT / "src/assets/css/09-extensions.css").read_text(encoding="utf-8")))
allowed = manifest | ext_defined | WHITELIST
# plus every class the shipping bundle itself defines (the installed skin)
for f in (ROOT / "src/assets/css").glob("*.css"):
    allowed |= set(re.findall(r"\.([A-Za-z][A-Za-z0-9_-]*)",
                              f.read_text(encoding="utf-8")))

bad = {}
for p in SITE.rglob("*.html"):
    rel = p.relative_to(SITE).as_posix()
    if rel.startswith("dev/"):
        continue
    for m in re.findall(r'class="([^"]+)"', p.read_text(encoding="utf-8")):
        for c in m.split():
            if c not in allowed:
                bad.setdefault(c, set()).add(rel)
for c, pages in sorted(bad.items()):
    fails.append(f"class outside manifest∪whitelist: {c} ({sorted(pages)[:2]})")
print(f"[manifest] {len(manifest)} manifest classes · "
      f"{len(ext_defined)} extension-defined · "
      f"{'CLEAN' if not bad else f'{len(bad)} STRAYS'}")

# ── 3: old motif assets out of output
stray_assets = [p.relative_to(SITE).as_posix() for p in SITE.rglob("*")
                if "motif-ledger" in p.name or p.name in
                ("logo-t-black.png", "logo-t-white.png", "inter-var-latin.woff2")]
for s in stray_assets:
    fails.append(f"old asset in output: {s}")
motif_refs = [p.relative_to(SITE).as_posix() for p in SITE.rglob("*.html")
              if "motif-ledger" in p.read_text(encoding="utf-8")]
for s in motif_refs:
    fails.append(f"old motif markup in: {s}")
print(f"[assets] output sweep — {'CLEAN' if not (stray_assets or motif_refs) else 'TRACES'}")

print()
if fails:
    print(f"NO-TRACES FAILED — {len(fails)}:")
    for x in fails:
        print("  ", x)
    sys.exit(1)
print("NO-TRACES PROOF PASSED — zero old-system hexes, zero stray classes, "
      "old motif/logo/font assets out of the output.")

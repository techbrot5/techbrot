#!/usr/bin/env python3
"""section_bg_scan.py — section-background alternation gate (founder standing rule).

No two ADJACENT top-level <section> elements may carry the same TINTED background
fill. Neutral base (paper / none / white) may repeat; two consecutive sections with
the same non-neutral fill (sand, dark, etc.) FAIL — they collapse into one
undifferentiated block and kill the section rhythm.

Usage: python _build/scripts/section_bg_scan.py _site/vs/bookkeeper-vs-accountant/index.html [more.html ...]
Exit 0 = all PASS, exit 1 = any FAIL. Run per family before sign-off.
"""
import sys, re

# fills treated as the neutral base (repetition allowed)
NEUTRAL = {"none", "paper", "transparent", "#fcfbf8", "#ffffff", "#fff", "#fbfcfe"}

def section_fill(attrs):
    m = re.search(r'background(?:-color)?:\s*([^;"]+)', attrs)
    if m:
        return m.group(1).strip().lower()
    # class-based tints (legacy/new): map the known tinted section classes
    cls = re.search(r'class="([^"]*)"', attrs)
    c = cls.group(1) if cls else ""
    if "section--cta-band--dark" in c or "final-cta--dark" in c:
        return "#0e2e32"
    if "section--alt" in c or "section--tier-guide" in c:
        return "#f7f2e9"          # legacy sand band
    return "paper"

def scan(path):
    html = open(path, encoding="utf-8").read()
    mm = re.search(r"<main\b[^>]*>(.*)</main>", html, re.S)
    body = mm.group(1) if mm else html
    # top-level sections only (sections in this design are not nested)
    secs = re.findall(r"<section\b([^>]*)>", body)
    seq = []
    for a in secs:
        idm = re.search(r'id="([^"]+)"', a)
        seq.append((idm.group(1) if idm else "?", section_fill(a)))
    fails = []
    for i in range(1, len(seq)):
        (id0, f0), (id1, f1) = seq[i-1], seq[i]
        if f0 == f1 and f0 not in NEUTRAL:
            fails.append((id0, id1, f0))
    return seq, fails

def main():
    paths = sys.argv[1:]
    any_fail = False
    for p in paths:
        seq, fails = scan(p)
        if fails:
            any_fail = True
            print(f"section-bg alternation: FAIL  {p}")
            for a, b, f in fails:
                print(f"   adjacent same tint [{f}]: {a} -> {b}")
        else:
            tinted = [s for s in seq if s[1] not in NEUTRAL]
            print(f"section-bg alternation: PASS  {p}  ({len(seq)} sections, {len(tinted)} tinted)")
    sys.exit(1 if any_fail else 0)

if __name__ == "__main__":
    main()

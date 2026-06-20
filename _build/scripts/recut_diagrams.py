#!/usr/bin/env python3
"""recut_diagrams.py — Phase 0 Step 4: re-cut the signature diagram SVG partials to the
locked design — diagram-role TOKENS (no hardcoded diagram colors), Spline Sans Mono, and a
swap-friendly data-viz / data-viz-state on the root <svg>. Inline partials → var() resolves
in the live DOM. Run: python _build/scripts/recut_diagrams.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = os.path.join(ROOT, "src", "_includes", "partials")

# cold/legacy hex -> design diagram-role token (case-insensitive)
HEXMAP = {
    "#1E3A70": "var(--diagram-credit)",   # cold credit -> petrol
    "#45516B": "var(--text-muted)",        # cold mid ink -> warm muted
    "#62708A": "var(--text-muted)",        # cold label grey -> warm muted
    "#B5C0D0": "var(--diagram-rule)",      # cold rule -> warm rule
    "#D4DCE7": "var(--border-default)",    # cold border -> warm
    "#F5F8FC": "var(--diagram-node)",      # cold node fill -> warm
    "#F0F3F8": "var(--diagram-node)",
    "#0A0F1C": "var(--diagram-debit)",     # ink -> warm debit ink
    "#157A52": "var(--diagram-tie)",       # tie-out green
    "#0F5E3F": "var(--tie-deep)",
    "#A4660A": "var(--caution)",
    "#C0322C": "var(--diagram-flag)",
    "#9A2722": "var(--flag-deep)",
    "#E7F5EE": "var(--tie-soft)",
    "#FCEDEC": "var(--flag-soft)",
}
VIZ = {
    "figure-taccount.svg": "taccount-tieout",
    "figure-reconcile-flow.svg": "reconciliation-beforeafter",
    "figure-cleanup-beforeafter.svg": "cleanup-beforeafter",
    "figure-judgment.svg": "judgment-tree",
}

def recut(fn, viz):
    path = os.path.join(P, fn)
    if not os.path.exists(path):
        return f"skip(absent) {fn}"
    s = open(path, encoding="utf-8").read()
    n = 0
    for hx, tok in HEXMAP.items():
        s, c = re.subn(re.escape(hx), tok, s, flags=re.IGNORECASE)
        n += c
    s, fc = re.subn(r"Geist Mono", "Spline Sans Mono", s)
    # data-viz on root <svg ...> (only if not already present)
    if "data-viz" not in s:
        s = re.sub(r"<svg(\s)", f'<svg data-viz="{viz}" data-viz-state="FINAL"\\1', s, count=1)
    open(path, "w", encoding="utf-8").write(s)
    return f"{fn}: {n} hex->token, {fc} font, data-viz={viz}"

if __name__ == "__main__":
    for fn, viz in VIZ.items():
        print(" ", recut(fn, viz))

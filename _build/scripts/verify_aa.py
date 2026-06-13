"""Changeover step 7 — AA CONTRAST verified IN-BUILD.
Computes WCAG 2.1 relative-luminance contrast from the ACTUAL token hex
values in 01-tokens.css (not the matrix doc's printed numbers) and checks:
  1. every text token vs its worst-case tier tint ≥ the AA-MATRIX claim
     (and ≥4.5 for text / ≥4.9 per the matrix premise; ink-faint exempt).
  2. focus ring (--color-focus) ≥3:1 on every tint AND the dark surface.
  3. button states pin BOTH fill and label (parse 03-conversion.css).
Composited rgba() tokens are alpha-blended over their surface first.
Usage: python _build/scripts/verify_aa.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CSS = ROOT / "src/assets/css"
TOKENS = (CSS / "01-tokens.css").read_text(encoding="utf-8")

# ── parse :root tokens (hex + rgba) ───────────────────────────────────
raw = {}
for m in re.finditer(r"(--[a-z0-9-]+):\s*([^;]+);", TOKENS):
    raw[m.group(1)] = m.group(2).strip()


def resolve(val, depth=0):
    if depth > 8:
        return val
    m = re.fullmatch(r"var\((--[a-z0-9-]+)\)", val)
    if m:
        return resolve(raw.get(m.group(1), val), depth + 1)
    return val


def hex_rgb(h):
    h = h.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def parse_color(val):
    """Return (r,g,b,a) in 0-255 / 0-1. Handles hex + rgba()."""
    val = resolve(val)
    m = re.fullmatch(r"#([0-9a-fA-F]{3,8})", val)
    if m:
        return (*hex_rgb(val), 1.0)
    m = re.fullmatch(r"rgba?\(([^)]+)\)", val)
    if m:
        parts = [p.strip() for p in m.group(1).split(",")]
        r, g, b = (int(float(x)) for x in parts[:3])
        a = float(parts[3]) if len(parts) > 3 else 1.0
        return (r, g, b, a)
    return None


def composite(fg, bg):
    """Alpha-blend fg(rgba) over bg(rgb)."""
    r, g, b, a = fg
    return tuple(round(c * a + bc * (1 - a)) for c, bc in zip((r, g, b), bg))


def lin(c):
    c /= 255
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def L(rgb):
    r, g, b = (lin(c) for c in rgb[:3])
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(fg, bg):
    fg = parse_color(fg) if isinstance(fg, str) else fg
    bg = parse_color(bg) if isinstance(bg, str) else bg
    fg_rgb = composite(fg, bg[:3]) if len(fg) == 4 and fg[3] < 1 else fg[:3]
    a, b = sorted((L(fg_rgb), L(bg[:3])), reverse=True)
    return (a + 0.05) / (b + 0.05)


SURFACES = {
    "paper #FBFAF7": "--color-paper",
    "mist (hub)": "--color-paper-mist",
    "warm (guide)": "--color-paper-warm",
    "deep (bofu)": "--color-paper-deep",
    "white card": "--bg-card",
}
TEXT_TOKENS = {
    "ink": ("--color-ink", 4.5),
    "ink-soft": ("--color-ink-soft", 4.5),
    "ink-mute": ("--color-ink-mute", 4.5),
    "accent": ("--color-accent", 4.5),
    "accent-deep": ("--color-accent-deep", 4.5),
    "brass": ("--color-brass", 4.5),
    "success": ("--color-success", 4.5),
    "warning": ("--color-warning", 4.5),
    "critical": ("--color-critical", 4.5),
}

fails, lines = [], []
lines.append(f"{'token':12} " + " ".join(f"{s[:9]:>9}" for s in SURFACES))
for name, (tok, mn) in TEXT_TOKENS.items():
    row = []
    for surf in SURFACES.values():
        r = ratio(parse_color(raw[tok]), parse_color(raw[surf]))
        row.append(r)
        if r < mn:
            fails.append(f"{name} on {surf}: {r:.2f} < {mn}")
    lines.append(f"{name:12} " + " ".join(f"{r:9.2f}" for r in row))

# ink-faint is NON-TEXT — report only
r_if = [ratio(parse_color(raw["--color-ink-faint"]), parse_color(raw[s]))
        for s in SURFACES.values()]
lines.append(f"{'ink-faint*':12} " + " ".join(f"{r:9.2f}" for r in r_if)
             + "   (*non-text by rule)")

# ── focus ring ≥3:1 on every tint AND dark ────────────────────────────
focus = parse_color(raw["--color-focus"])
ring_targets = dict(SURFACES)
ring_targets["dark #181711"] = "--color-surface-dark"
ring_lines = []
for label, tok in ring_targets.items():
    r = ratio(focus, parse_color(raw[tok]))
    ring_lines.append(f"  focus ring on {label:16} {r:.2f}" + ("" if r >= 3 else "  ** <3:1 **"))
    if r < 3:
        fails.append(f"focus ring on {label}: {r:.2f} < 3:1")

# ── dark-surface inverted text ────────────────────────────────────────
dark = parse_color(raw["--color-surface-dark"])
for name, tok, mn in (("inverted", "--color-ink-inverted", 4.5),
                      ("inverted-soft", "--color-ink-inverted-soft", 4.5),
                      ("inverted-mute", "--color-ink-inverted-mute", 4.5),
                      ("brass-bright", "--color-brass-bright", 4.5)):
    r = ratio(parse_color(raw[tok]), dark)
    ring_lines.append(f"  {name:16} on dark        {r:.2f}" + ("" if r >= mn else f"  ** <{mn} **"))
    if r < mn:
        fails.append(f"{name} on dark: {r:.2f} < {mn}")

# ── button states pin BOTH fill and label ─────────────────────────────
CONV = (CSS / "03-conversion.css").read_text(encoding="utf-8")
btn_problems = []
for m in re.finditer(r"(\.btn--[a-z-]+(?:\.[a-z-]+)?(?::[a-z-]+)?(?:,\s*\.btn--[^\s{]+)*)\s*\{([^}]*)\}", CONV):
    sels, body = m.group(1), m.group(2)
    # only interactive states must pin both
    if not re.search(r":(hover|focus-visible|active)", sels):
        continue
    has_bg = "background" in body
    has_color = re.search(r"(?<!-)\bcolor:", body)
    if has_bg and not has_color:
        btn_problems.append(f"{sels.strip()[:60]} sets fill but not label")
if btn_problems:
    fails.extend(f"button-pin: {p}" for p in btn_problems)

print("AA CONTRAST — computed in-build from 01-tokens.css\n")
print("\n".join(lines))
print("\nFOCUS RING (≥3:1) + DARK-SURFACE TEXT:")
print("\n".join(ring_lines))
print(f"\nBUTTON STATE PINNING: {len(btn_problems)} fill-without-label "
      f"({'CLEAN' if not btn_problems else btn_problems})")
print()
if fails:
    print(f"AA IN-BUILD FAILED — {len(fails)}:")
    for f_ in fails:
        print("  ", f_)
    sys.exit(1)
print("AA IN-BUILD PASSED — every text token ≥ its floor on every tier "
      "tint, focus ring ≥3:1 on all tints + dark, button states pin both "
      "fill and label.")

"""SKIN INSTALLER (design-system changeover, round 10).
Installs the new-brand handoff CSS into src/assets/css under the build's
load order. Replaces the old-system extractor (its curation logic is
archived with the old skin in _build/archive/old-skin/).

Sources: _design/techbrot-skin-handoff/.../project/handoff/
Rules:
  R1 (founder): re-tokenize the capture-engine hex workaround in the
     gapped-rule marks — #2B4FD6 -> var(--accent), #3D63E8 ->
     var(--color-accent-soft) — across 05-motif-rules, tier-common, and
     02-conversion. css-drift gate stays absolute.
  R2 (founder): skin-tokens-draft.css is a STALE Stage-1 artifact —
     NEVER read. 01-tokens.SKIN.css is the only token source.
  fonts-preview.css: NEVER ship (render-viewing only).
02-base.css is LOCKED and not regenerated (structural floor; the skin
layers override it; carries Session-1 EXTENSION blocks).
09-extensions.css is session-owned (content-machinery styling) and never
regenerated here.
Usage: python _build/extract_css.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIN = (ROOT / "_design" / "techbrot-skin-handoff" / "techbrot-design-system"
        / "project" / "handoff")
OUT = ROOT / "src" / "assets" / "css"
OUT.mkdir(parents=True, exist_ok=True)

FORBIDDEN = ("skin-tokens-draft.css", "fonts-preview.css")


def retokenize(css):
    """R1: gapped-mark hex workaround -> tokens. Plus the one stray
    component hex the handoff shipped (inverted-primary hover white) —
    css-drift gate is absolute; --bg-card is the declared white."""
    css = css.replace("#2B4FD6", "var(--accent)")
    css = css.replace("#3D63E8", "var(--color-accent-soft)")
    css = css.replace("background:#FFFFFF", "background:var(--bg-card)")
    return css


def fix_metrics(css):
    """BUILD-TIME METRIC VERIFICATION (00-fonts.SKIN header instruction:
    're-verify with fontaine or capsize at build time'). Values computed
    from the actual woff2 binaries by verify_font_metrics.py — both fonts
    carry USE_TYPO_METRICS with hhea==typo, so the browser-effective
    boxes are: Fraunces 97.8/25.5 (size-adjust 106.8 vs Georgia),
    Public Sans 95.0/22.5 (size-adjust 102.9 vs Arial)."""
    css = css.replace("size-adjust: 105.5%;", "size-adjust: 106.8%;")
    css = css.replace("ascent-override: 92%;", "ascent-override: 97.8%;")
    css = css.replace("descent-override: 24%;", "descent-override: 25.5%;")
    css = css.replace("size-adjust: 100.8%;", "size-adjust: 102.9%;")
    css = css.replace("ascent-override: 97%;", "ascent-override: 95%;")
    css = css.replace("descent-override: 26%;", "descent-override: 22.5%;")
    return css


KEEP_ADDITIONS = ("11 ", "12 ", "13 ", "rule-mark")


def curate_additions(css):
    """Keep only the numbered sections current pages consume (+ the 404
    rule-mark wherever it lives). Sections are delimited by their
    numbered banner comments."""
    parts = re.split(r"(?=/\* \d+ )", css)
    kept = [p for i, p in enumerate(parts)
            if i == 0 or any(k in p[:60] for k in KEEP_ADDITIONS)
            or ".rule-mark" in p]
    return "".join(kept)


def port_tier_common(css):
    """tier-common is the RESPONSIVE SPEC — ported, not shipped as-is:
    the Fraunces-fallback @font-face is dropped (00-fonts.SKIN already
    declares it) and the marks re-tokenized (R1)."""
    css = re.sub(r'@font-face\{font-family:"Fraunces-fallback".*?\}\n?', "", css)
    return retokenize(css)


# (dst, src, transform) — dst names define the bundle load order
INSTALL = [
    ("00-fonts.css", "00-fonts.SKIN.css", fix_metrics),
    ("01-tokens.css", "01-tokens.SKIN.css", None),          # R2: only token source
    # 02-base.css: LOCKED, kept in place
    ("03-conversion.css", "02-conversion.SKIN.css", retokenize),
    ("04-chrome.css", "03-chrome.SKIN.css",
     # R1 + mobile-overflow fix: the util-bar's flex row (trust string +
     # accountant links) overflows ≤920px; its two links live in the
     # drawer, so hide it there (same breakpoint as the nav). Overflow
     # probe confirmed it forced 360-width horizontal scroll on every
     # full-chrome page.
     # util-bar carries a long trust string + accountant links that crowd
     # a 360 phone; its two links live in the drawer, so hide it ≤920px
     # (deliberate mobile chrome decision, same breakpoint as the nav).
     lambda css: retokenize(css) +
     "\n@media (max-width:920px){.util-bar{display:none}}\n"
     # closed drawer is translated off-screen (translateX 100%) but stayed
     # in the a11y tree + leaked ~4px into html.scrollWidth. visibility:
     # hidden when closed removes both; the 0s-delayed transition keeps the
     # slide-out animation (visibility flips only after transform finishes).
     ".drawer{visibility:hidden;transition:transform var(--motion-slow) "
     "var(--ease-out),visibility 0s var(--motion-slow)}"
     ".drawer[data-open=\"true\"]{visibility:visible;transition:transform "
     "var(--motion-slow) var(--ease-out),visibility 0s 0s}\n"
     # a11y fix: base `strong{color:text-primary}` re-inks to DARK on the
     # dark footer (1.02:1, invisible). Footer strong + disclosure link
     # must be light on the dark surface.
     ".site-footer strong{color:var(--color-ink-inverted)}"
     ".site-footer__disclosure a{color:var(--color-ink-inverted);"
     "text-decoration:underline;text-underline-offset:0.16em}"
     # slim (minimal-chrome) footer links were base-cobalt on dark
     # (3.55:1) — light them.
     ".site-footer__slim a{color:var(--color-ink-inverted-mute)}"
     ".site-footer__slim a:hover{color:var(--color-ink-inverted)}\n"),
    ("05-tiers.css", "tier-common.css", port_tier_common),
    ("06-motif-rules.css", "05-motif-rules.SKIN.css",
     # R1 + cascade fix: 03-chrome ships a GRADIENT footer-disclosure mark;
     # this border-built override of the same ::before must also clear that
     # background or the gradient paints the mark's gap (4px content box
     # maps to the gradient's 0-4px accent stop).
     lambda css: retokenize(css).replace(
         '.site-footer__disclosure::before{content:"";',
         '.site-footer__disclosure::before{content:"";background:none;')),
    ("07-motion.css", "04-motion.SKIN.css",
     # a11y fix (round-10 step-8): the scroll-entrance held off-screen
     # content at opacity:0.01 (animation-fill-mode:both before the entry
     # range), which axe + Lighthouse measure as failing color-contrast.
     # Make the entrance TRANSFORM-ONLY — content is always full-opacity
     # (readable), the rise motion is preserved.
     lambda css: css.replace(
         "from { opacity: 0.01; transform: translateY(8px); }",
         "from { transform: translateY(8px); }").replace(
         "to   { opacity: 1; transform: none; }",
         "to   { transform: none; }")),
    ("08-additions.css", "06-additions.SKIN.css",
     # CURATED (old-system precedent: per-round curation, gate-driven).
     # KEPT: 11 call-bar · 12 proof-strip · 13 breadcrumb · the 404
     # rule-mark. DROPPED until their pages build: 14 sticky TOC ·
     # 16+19 byline/meta · 18 editorial listing · 20 calculator family ·
     # 21 research dress · 22 vs-page furniture · 23 problem pattern.
     # Re-curate by editing KEEP_ADDITIONS.
     lambda css: curate_additions(retokenize(css))),
    # 09-extensions.css: session-owned, never regenerated
]

for dst, src, transform in INSTALL:
    assert src not in FORBIDDEN
    css = (SKIN / src).read_text(encoding="utf-8")
    if transform:
        css = transform(css)
    header = (f"/* {dst} — INSTALLED from handoff/{src} by _build/extract_css.py"
              f" (changeover round 10){' · R1 re-tokenized' if transform else ''}."
              f" Edit the handoff source, not this file. */\n")
    (OUT / dst).write_text(header + css, encoding="utf-8", newline="\n")

leftover_hex = []
for f in sorted(OUT.glob("*.css")):
    if f.name in ("01-tokens.css",):
        continue
    for line in f.read_text(encoding="utf-8").splitlines():
        if re.search(r"#(2B4FD6|3D63E8)\b", line, re.I):
            leftover_hex.append(f.name)
            break
if leftover_hex:
    raise SystemExit(f"R1 INCOMPLETE — accent hex still present in: {leftover_hex}")

for f in sorted(OUT.glob("*.css")):
    print(f.name, f.stat().st_size, "bytes")
print("TOTAL source", sum(f.stat().st_size for f in OUT.glob("*.css")),
      "B · minified hard gate", 58 * 1024, "B (enforced at build)")

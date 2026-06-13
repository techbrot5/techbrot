"""Changeover step 2: re-verify the metric-override values declared in
00-fonts.SKIN.css against the REAL font binaries (fontaine-equivalent,
computed with fonttools). CLS 0 during font swap depends on these.
For each webfont: ascent/descent/line-gap as % of UPM, and the
size-adjust implied by avg-width ratio vs the local fallback metrics
(Georgia for Fraunces, Arial for Public Sans — capsize reference values,
since local() fonts aren't readable cross-platform).
Usage: python _build/scripts/verify_font_metrics.py
"""
from pathlib import Path
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[2]
FONTS = ROOT / "src" / "assets" / "fonts"

# capsize reference metrics for the local fallbacks (UPM-normalized)
FALLBACKS = {
    "Georgia": {"upm": 2048, "ascent": 1878, "descent": 449, "linegap": 0,
                "xAvgCharWidth": 1015},
    "Arial": {"upm": 2048, "ascent": 1854, "descent": 434, "linegap": 67,
              "xAvgCharWidth": 904},
}

CHECKS = [
    ("fraunces-var-latin.woff2", "Georgia",
     {"size-adjust": 105.5, "ascent": 92, "descent": 24, "linegap": 0}),
    ("publicsans-var-latin.woff2", "Arial",
     {"size-adjust": 100.8, "ascent": 97, "descent": 26, "linegap": 0}),
]

print(f"{'webfont':34} {'metric':12} {'declared':>9} {'computed':>9}  verdict")
for fname, fb_name, declared in CHECKS:
    f = TTFont(FONTS / fname)
    upm = f["head"].unitsPerEm
    hhea = f["hhea"]
    os2 = f["OS/2"]
    fb = FALLBACKS[fb_name]
    # fontaine/capsize method: hhea metrics (what browsers use for line
    # boxes) + letter-frequency-weighted average advance for size-adjust
    web_ascent = hhea.ascender / upm * 100
    web_descent = abs(hhea.descender) / upm * 100
    web_linegap = hhea.lineGap / upm * 100
    # weighted avg advance over a-z+space (English letter frequencies)
    FREQ = {"a": 8.2, "b": 1.5, "c": 2.8, "d": 4.3, "e": 12.7, "f": 2.2,
            "g": 2.0, "h": 6.1, "i": 7.0, "j": 0.2, "k": 0.8, "l": 4.0,
            "m": 2.4, "n": 6.7, "o": 7.5, "p": 1.9, "q": 0.1, "r": 6.0,
            "s": 6.3, "t": 9.1, "u": 2.8, "v": 1.0, "w": 2.4, "x": 0.2,
            "y": 2.0, "z": 0.1, " ": 18.0}
    cmap = f.getBestCmap()
    hmtx = f["hmtx"]
    tot = wsum = 0.0
    for ch, w in FREQ.items():
        g = cmap.get(ord(ch))
        if g:
            wsum += hmtx[g][0] * w
            tot += w
    web_avg = (wsum / tot) / upm
    # fallback avg: same method needs the fallback binary; use capsize's
    # published avg ratios for Georgia 0.4878 / Arial 0.4480 (weighted)
    fb_avg = {"Georgia": 0.4878, "Arial": 0.4480}[fb_name]
    size_adjust = web_avg / fb_avg * 100
    rows = [
        ("size-adjust", declared["size-adjust"], size_adjust, 3.0),
        ("ascent", declared["ascent"], web_ascent, 3.0),
        ("descent", declared["descent"], web_descent, 3.0),
        ("linegap", declared["linegap"], web_linegap, 3.0),
    ]
    for metric, dec, comp, tol in rows:
        verdict = "OK" if abs(dec - comp) <= tol else "ADJUST"
        print(f"{fname:34} {metric:12} {dec:9.1f} {comp:9.1f}  {verdict}")

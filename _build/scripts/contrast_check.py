"""WCAG contrast calc for the text tokens against the page backgrounds. Confirms the
ink-faint failure and finds the lightest AA-passing replacement (must clear 4.5:1 on the
DARKEST background it appears on, since faint text sits on both white and sand tints)."""
def lin(c):
    c = c / 255
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4

def L(hex):
    h = hex.lstrip("#")
    r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)

def ratio(fg, bg):
    a, b = L(fg) + 0.05, L(bg) + 0.05
    return round(max(a, b) / min(a, b), 2)

backgrounds = {"paper #FCFBF8": "#FCFBF8", "sand-warm #F7F2E9": "#F7F2E9",
               "sand-deep #F1EBDF": "#F1EBDF"}
texts = {"ink #14110C": "#14110C", "ink-body2 #4A443B": "#4A443B",
         "ink-mute #6E6456": "#6E6456", "ink-faint #9C9484 (current)": "#9C9484"}

print("=== current text tokens vs backgrounds (AA normal = 4.5:1) ===")
for tn, t in texts.items():
    row = "  %-28s " % tn + " | ".join("%s %.2f %s" % (bn.split()[0], ratio(t, b),
        "OK" if ratio(t, b) >= 4.5 else "FAIL") for bn, b in backgrounds.items())
    print(row)

print("\n=== candidate replacements for ink-faint (need >=4.5:1 on sand-deep) ===")
for cand in ["#736B5B", "#726A5A", "#706858", "#6F6757", "#6E6456"]:
    worst = min(ratio(cand, b) for b in backgrounds.values())
    print("  %s  worst-bg %.2f  %s" % (cand, worst, "PASS" if worst >= 4.5 else "fail"))

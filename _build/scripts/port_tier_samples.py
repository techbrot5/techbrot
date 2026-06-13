"""Changeover step 3: port each tier render (handoff/tiers/*.html) into a
dev-only sample page driven by the BUILD'S converted layouts — proving the
factory reproduces the Design render. Render copy carried VERBATIM
(placeholder phone numbers and # hrefs included — these are comparison
artifacts, preview-only, never production). Hero + cta-band lift into
front matter (the layout renders them); the middle sections carry as-is
minus inline style attrs' removal NOT performed (kept verbatim for
fidelity) and minus the render's inline FAQ script (tb-faq.js drives it).
Usage: python _build/scripts/port_tier_samples.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TIERS = (ROOT / "_design/techbrot-skin-handoff/techbrot-design-system"
         / "project/handoff/tiers")
OUT = ROOT / "src" / "dev"

LAYOUTS = {
    "t-hub": "layouts/t-hub.njk",
    "t-mofu": "layouts/t-mofu.njk",
    "t-guide": "layouts/t-guide.njk",
    "t-bofu": "layouts/t-bofu.njk",
    "t-location": "layouts/t-location.njk",
}


def parse_actions(hero_html):
    acts = []
    for m in re.finditer(r'<a class="btn ([^"]+)" href="([^"]+)"[^>]*>(.*?)</a>',
                         hero_html):
        cls = [c for c in m.group(1).split()
               if c.startswith("btn--") and c not in ("btn--lg", "btn--inverted")]
        acts.append({"label": re.sub(r"<[^>]+>", "", m.group(3)).strip(),
                     "href": m.group(2), "class": " ".join(cls)})
    return acts


for tier, layout in LAYOUTS.items():
    html = (TIERS / f"{tier}.html").read_text(encoding="utf-8")
    body = re.search(r"<body[^>]*>(.*?)(?:<script>.*?</script>\s*)?</body>",
                     html, re.S).group(1)

    sections = re.findall(r"<section.*?</section>", body, re.S)
    hero = next(s for s in sections if "hero-tier" in s[:200])
    cta = next((s for s in sections if "section--cta-band" in s[:200]), None)
    middle = [s for s in sections if s is not hero and s is not cta]
    # anything before the hero (breadcrumb/proof strip on location)
    pre = body[: body.find(hero)]
    pre = re.sub(r"\s+$", "", pre)

    slug = re.search(r'id="([a-z-]+)-hero"', hero).group(1)
    fm = {
        "layout": layout,
        "slug": slug,
        "title": f"DEV sample · {tier} (new skin) · TechBrot",
        "description": f"Preview-only {tier} tier sample on the converted layout.",
        "hero": {
            "eyebrow": re.search(r'hero__eyebrow">(.*?)</p>', hero, re.S).group(1).strip(),
            "heading": re.search(r'hero__heading">(.*?)</h1>', hero, re.S).group(1).strip(),
            "subheading": re.search(r'hero__subheading">(.*?)</p>', hero, re.S).group(1).strip(),
            "actions": parse_actions(hero),
        },
    }
    if cta:
        eyebrow_m = re.search(r'section__eyebrow">(.*?)</p>', cta, re.S)
        lede_m = re.search(r'final-cta__lede">(.*?)</p>', cta, re.S)
        fm["ctaBand"] = {
            "eyebrow": eyebrow_m.group(1).strip() if eyebrow_m else "",
            "heading": re.search(r'final-cta__heading">(.*?)</h2>', cta, re.S).group(1).strip(),
            "lede": lede_m.group(1).strip() if lede_m else "",
            "actions": parse_actions(cta),
        }

    content = (pre.strip() + "\n\n" if pre.strip() else "") + "\n\n".join(middle)
    # njk-escape nothing: render copy carries no {{ }} / {% %}
    page = ("---json\n" + json.dumps(fm, indent=2, ensure_ascii=False)
            + "\n---\n\n"
            + f"{{# DEV SAMPLE — render-verbatim copy from handoff/tiers/{tier}.html;"
            + " compares the converted layout against the Design render. #}\n\n"
            + content + "\n")
    (OUT / f"sample-{tier}.njk").write_text(page, encoding="utf-8", newline="\n")
    print(f"sample-{tier}.njk: slug={slug} · {len(middle)} middle sections"
          f" · cta={'y' if cta else 'n'} · pre={'y' if pre.strip() else 'n'}")

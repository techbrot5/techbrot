"""Round-5 scout: FAQ + guide-card selector APIs from 03-components."""
import re
from pathlib import Path

comp = Path("_design/techbrot-design-system/project/css/03-components.css").read_text(encoding="utf-8")
parts = re.split(r"(?=/\* =+\n)", comp)
for p in parts:
    h = p[:130]
    label = h.splitlines()[1].strip() if len(h.splitlines()) > 1 else ""
    if any(w in h for w in ("16. FEATURED GUIDES", "18. FAQ", "TRIGGER",
                            "ANSWER PANEL", "PARAGRAPHS", "NESTED FAQ",
                            "FAQ MORE", "MOBILE SAFETY")):
        sels = re.findall(r"^([.#][\w-]+[^{]*)\{", p, re.M)
        print("====", label[:70])
        for s in list(dict.fromkeys(x.strip()[:90] for x in sels))[:14]:
            print("   ", s)

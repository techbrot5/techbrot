#!/usr/bin/env python3
"""D2 prose fan-out: switch t-guide prose pages -> t-prose (new handoff chrome).
EXCLUDES resources/guides/* (E1-guide family, later) and dev/*. UTF-8 safe."""
import io, subprocess
files = subprocess.check_output(
    ["grep", "-rlE", "layouts/t-guide", "src", "--include=*.njk"]).decode().split()
OLD = '"layout": "layouts/t-guide.njk"'
NEW = '"layout": "layouts/t-prose.njk"'
done, skip_e1, skip_dev, nomatch = [], [], [], []
for fp in files:
    rel = fp.split("src/", 1)[-1]
    # t-guide is a SHARED catch-all — exclude the OTHER families that ride it so D2
    # only catches genuine prose (QB help/error/informational + resources/checklists
    # + accounting informational). EXCLUDE: E1 guides, dev, G1 legal, E2 glossary,
    # E3 frameworks, partners, FAQ pages, and hub indexes.
    NON_D2 = ("resources/guides/", "dev/", "legal/", "glossary/", "frameworks/",
              "partners/")
    if any(rel.startswith(x) for x in NON_D2) or "faq" in rel or rel.endswith("/index.njk"):
        skip_e1.append(rel); continue
    t = io.open(fp, encoding="utf-8").read()
    if OLD not in t:
        nomatch.append(rel); continue
    io.open(fp, "w", encoding="utf-8", newline="").write(t.replace(OLD, NEW, 1))
    done.append(rel)
print(f"D2 switched t-guide -> t-prose: {len(done)} pages")
print(f"  E1 guides skipped (later): {len(skip_e1)} · dev skipped: {len(skip_dev)} · no-layout-line: {len(nomatch)}")
if nomatch:
    print("  NOMATCH:", nomatch[:12])

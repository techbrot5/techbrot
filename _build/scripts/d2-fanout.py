#!/usr/bin/env python3
"""D2 prose fan-out: switch the CERTAIN prose pages from t-guide -> t-prose
(new handoff chrome). Scope by PATH (founder: never by shared layout).

INCLUDE (certain D2 prose): quickbooks/ help-error/informational +
resources/checklists/ + accounting/ informational.
EXCLUDE everything else that rides t-guide — legal(G1), glossary(E2),
frameworks(E3), partners, resources/guides(E1), dev, FAQ pages, hub indexes.
HELD for separate decision (NOT switched here): switch/*, accounting-systems/*,
platforms/*, app-stack, which-accounting-software. UTF-8 safe.
"""
import io, subprocess
files = subprocess.check_output(
    ["grep", "-rlE", "layouts/t-guide", "src", "--include=*.njk"]).decode().split()
OLD = '"layout": "layouts/t-guide.njk"'
NEW = '"layout": "layouts/t-prose.njk"'
INCLUDE = ("quickbooks/", "resources/checklists/", "accounting/")
done, held, excluded, nomatch = [], [], [], []
for fp in files:
    rel = fp.split("src/", 1)[-1]
    if not any(rel.startswith(p) for p in INCLUDE):
        held.append(rel); continue
    if "faq" in rel or rel.endswith("/index.njk"):
        excluded.append(rel); continue
    t = io.open(fp, encoding="utf-8").read()
    if OLD not in t:
        nomatch.append(rel); continue
    io.open(fp, "w", encoding="utf-8", newline="").write(t.replace(OLD, NEW, 1))
    done.append(rel)
print(f"D2 prose switched t-guide -> t-prose: {len(done)} pages")
print(f"  held (other path / decide separately): {len(held)} · excluded faq/index: {len(excluded)} · no-layout-line: {len(nomatch)}")

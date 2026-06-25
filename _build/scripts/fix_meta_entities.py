# fix_meta_entities.py — convert HTML entities to literal Unicode in the
# auto-escaped meta `title`/`description` fields ONLY.
#
# WHY: base.njk/dc-base.njk emit `<title>{{ title }}</title>` and
# `<meta name="description" content="{{ description }}">` WITHOUT |safe, so
# Nunjucks auto-escapes. Any HTML entity in the source field then renders
# LITERALLY in the tab/SERP (e.g. `&middot;` shows as the text "&middot;",
# `&amp;` shows as "&amp;"). Storing literal Unicode fixes it; a literal `&`
# still escapes correctly to `&amp;` and renders "&".
#
# SCOPE GUARDS (deliberately conservative):
#  - njk: only the FIRST `title:` and FIRST `description:` line INSIDE the
#    frontmatter block (between the opening ---json/--- and its closing ---).
#    Body text and nested frontmatter objects are never touched.
#  - .11tydata.js: only a TOP-LEVEL `title:`/`description:` meta key (column-2
#    indent, `module.exports`/`data` object) — NEVER a description nested inside
#    an @graph/schema node (those are matched by a deeper-indent / @type context
#    and skipped). Schema-description entity hygiene is a separate concern.
#  - Dev fixtures and _includes excluded.
#
# Usage:  python _build/scripts/fix_meta_entities.py          # dry-run (report)
#         python _build/scripts/fix_meta_entities.py --apply  # write changes
import re, glob, sys, os

APPLY = "--apply" in sys.argv
SRC = "src"

ENT = {
    "&mdash;": "—", "&ndash;": "–", "&rsquo;": "’",
    "&lsquo;": "‘", "&ldquo;": "“", "&rdquo;": "”",
    "&middot;": "·", "&hellip;": "…", "&amp;": "&",
    "&eacute;": "é", "&nbsp;": " ", "&deg;": "°",
    "&times;": "×",
}
ENT_RE = re.compile("|".join(re.escape(k) for k in ENT))
def deent(s): return ENT_RE.sub(lambda m: ENT[m.group(0)], s)

# matches a `key: "value"` or `"key": "value"` meta line, capturing value
LINE = re.compile(r'^(\s*"?(?:title|description)"?\s*:\s*")(.*)("\s*,?\s*)$')

changes = []   # (file, field-ish, before, after)

def fix_njk(path):
    with open(path, encoding="utf-8") as f:
        lines = f.readlines()
    # tolerate a leading UTF-8 BOM (﻿) — it stays in lines[0] and is
    # written back unchanged; only the delimiter comparison must ignore it.
    if not lines or lines[0].lstrip("﻿").strip() not in ("---json", "---"):
        return
    # find end of frontmatter block
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i; break
    if end is None:
        return
    done = {"title": False, "description": False}
    changed = False
    for i in range(1, end):
        m = LINE.match(lines[i].rstrip("\n"))
        if not m:
            continue
        field = "title" if '"title"' in m.group(1) or m.group(1).lstrip().startswith(("title", '"title"')) else "description"
        # robust field id from the matched prefix
        field = "title" if re.search(r'"?title"?\s*:', m.group(1)) else "description"
        if done[field]:
            continue
        done[field] = True
        val = m.group(2)
        nv = deent(val)
        if nv != val:
            changes.append((path, field, val, nv))
            lines[i] = m.group(1) + nv + m.group(3) + "\n"
            changed = True
        if done["title"] and done["description"]:
            break
    if changed and APPLY:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.writelines(lines)

def fix_data(path):
    # top-level meta key: exactly 2-space indent `title:`/`description:` "..."
    with open(path, encoding="utf-8") as f:
        lines = f.readlines()
    topkey = re.compile(r'^(  (?:title|description):\s*")(.*)("\s*,?\s*)$')
    changed = False
    done = {"title": False, "description": False}
    for i, ln in enumerate(lines):
        m = topkey.match(ln.rstrip("\n"))
        if not m:
            continue
        field = "title" if ln.lstrip().startswith("title") else "description"
        if done[field]:
            continue
        done[field] = True
        val = m.group(2)
        nv = deent(val)
        if nv != val:
            changes.append((path, "data:" + field, val, nv))
            lines[i] = m.group(1) + nv + m.group(3) + "\n"
            changed = True
    if changed and APPLY:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.writelines(lines)

def fix_glossary(path):
    # src/_data/glossary.js: each term object's META keys are at exactly
    # 4-space indent (`    title:` / `    description:`). Nested call.title /
    # related[].title sit deeper or inline, so this indent targets term meta only.
    # shortDef/definition/why/blurb keep their entities (they render via |safe or
    # stripTags). title/description feed the auto-escaped meta -> need Unicode.
    with open(path, encoding="utf-8") as f:
        lines = f.readlines()
    term_meta = re.compile(r'^(    (?:title|description): ")(.*)("\s*,?\s*)$')
    changed = False
    for i, ln in enumerate(lines):
        m = term_meta.match(ln.rstrip("\n"))
        if not m:
            continue
        val = m.group(2)
        nv = deent(val)
        if nv != val:
            field = "gloss:" + ("title" if "title:" in m.group(1) else "description")
            changes.append((path, field, val, nv))
            lines[i] = m.group(1) + nv + m.group(3) + "\n"
            changed = True
    if changed and APPLY:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.writelines(lines)

fix_glossary("src/_data/glossary.js")

for njk in glob.glob(f"{SRC}/**/*.njk", recursive=True):
    n = njk.replace("\\", "/")
    if "/_includes/" in n or "/dev/" in n:
        continue
    fix_njk(njk)
for d in glob.glob(f"{SRC}/**/*.11tydata.js", recursive=True):
    n = d.replace("\\", "/")
    if "/dev/" in n:
        continue
    fix_data(d)

sys.stdout.reconfigure(encoding="utf-8")
print(f"{'APPLIED' if APPLY else 'DRY-RUN'} — {len(changes)} field(s) to change\n")
for path, field, before, after in changes:
    print(f"  {path}  [{field}]")
    print(f"    - {before}")
    print(f"    + {after}")
print(f"\nTotal: {len(changes)} field(s) across "
      f"{len(set(c[0] for c in changes))} file(s).")

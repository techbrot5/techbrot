"""Drop the §NN numbers from section eyebrows sitewide -> bare "§ [LABEL]".
Founder ruling 2026-06-26: the sections aren't a deliberate ordered sequence, so
numbers imply false order + break on reorder/add/remove. Use the § mark + label only.
Targets ONLY the eyebrow number span: <span class="idx__n">§NN</span> (literal § or &sect;),
turning §04/§1/&sect;05/etc. -> § (or &sect;). Equity-safe (eyebrows are section labels,
not headings/FAQ/schema). Run from repo root: python _build/scripts/drop_eyebrow_numbers.py
"""
import re, glob

# (<span class="idx__n"> + § or &sect;) DIGITS (</span>)  ->  drop the digits
PAT = re.compile(r'(<span class="idx__n">(?:§|&sect;))\d+(</span>)')

changed = 0
hits = 0
for path in glob.glob('src/**/*.njk', recursive=True):
    txt = open(path, encoding='utf-8').read()
    new, n = PAT.subn(r'\1\2', txt)
    if n:
        open(path, 'w', encoding='utf-8', newline='').write(new)
        changed += 1
        hits += n
        print(f'  {n:2}  {path}')
print(f'\nDONE: {hits} eyebrow numbers dropped across {changed} files.')

"""Hero-intro length audit. For every src/**/*.njk page, find its layout and its
hero.subheading, measure the subheading length (raw chars AND tag-stripped text
chars), and report the distribution grouped by layout (page-type).

hero.subheading can live in the .njk frontmatter (---json ... ---) OR in a sibling
.11tydata.js. We read both and take whichever defines hero.subheading.
Layout comes from the .njk frontmatter `layout` (or the data file `layout`)."""
import glob, os, re, json, collections

def read(p):
    try:
        return open(p, encoding='utf-8', errors='ignore').read()
    except Exception:
        return ''

def frontmatter_json(txt):
    m = re.match(r'^---json\s*\n(.*?)\n---', txt, re.S)
    if not m:
        m = re.match(r'^---\s*\n(.*?)\n---', txt, re.S)
        if not m:
            return None
    try:
        return json.loads(m.group(1))
    except Exception:
        return None

def strip_tags(s):
    s = re.sub(r'<[^>]+>', '', s)
    s = (s.replace('&rsquo;', "’").replace('&ldquo;', '“').replace('&rdquo;', '”')
           .replace('&mdash;', '—').replace('&ndash;', '–').replace('&amp;', '&')
           .replace('&nbsp;', ' ').replace('&middot;', '·').replace('&rarr;', '→')
           .replace('&em;', '').replace('&sect;', '§'))
    return re.sub(r'\s+', ' ', s).strip()

def find_subheading(njk, data_txt, fm):
    # 1) frontmatter hero.subheading
    if fm and isinstance(fm.get('hero'), dict) and 'subheading' in fm['hero']:
        return fm['hero']['subheading']
    # 2) data file: hero: { ... subheading: "..." }  (greedy-safe single occurrence)
    m = re.search(r'subheading\s*:\s*(["\'`])(.*?)\1', data_txt, re.S)
    if m:
        return m.group(2)
    return None

def find_layout(njk_txt, data_txt, fm):
    if fm and fm.get('layout'):
        return fm['layout']
    m = re.search(r'layout\s*:\s*["\']([^"\']+)["\']', data_txt)
    if m:
        return m.group(1)
    return '(none)'

rows = []  # (layout, url, rawlen, textlen, path)
for njk in glob.glob('src/**/*.njk', recursive=True):
    njk_txt = read(njk)
    fm = frontmatter_json(njk_txt)
    data = njk[:-4] + '.11tydata.js'
    data_txt = read(data) if os.path.exists(data) else ''
    layout = find_layout(njk_txt, data_txt, fm)
    sub = find_subheading(njk, data_txt, fm)
    if sub is None:
        continue
    url = (fm or {}).get('permalink', njk.replace('\\', '/').replace('src/', '/'))
    rows.append((layout, url, len(sub), len(strip_tags(sub)), njk.replace('\\', '/')))

by_layout = collections.defaultdict(list)
for r in rows:
    by_layout[r[0]].append(r)

print('=== HERO SUBHEADING LENGTH BY LAYOUT (text chars, tag-stripped) ===')
print(f'{"layout":28} {"n":>4} {"min":>5} {"med":>5} {"max":>5}   short(<300) / long(>350)')
for layout in sorted(by_layout, key=lambda k: -len(by_layout[k])):
    rs = by_layout[layout]
    tl = sorted(r[3] for r in rs)
    n = len(tl)
    med = tl[n // 2]
    short = sum(1 for x in tl if x < 300)
    long = sum(1 for x in tl if x > 350)
    print(f'{layout:28} {n:>4} {tl[0]:>5} {med:>5} {tl[-1]:>5}   short={short:<4} long={long}')

# Hub-family detail: list every t-hub page with its length so we can spot over-long hubs.
print('\n=== HUB-FAMILY (t-hub) PAGES — each with text-char length ===')
hubrows = sorted((r for r in rows if 't-hub' in r[0]), key=lambda r: -r[3])
for layout, url, rawlen, textlen, path in hubrows:
    flag = '  <-- LONG (>300)' if textlen > 300 else ''
    print(f'{textlen:>5}  {url}{flag}')
print(f'\n(hub pages: {len(hubrows)})')

# v4.xlsx Sheet-1 (global URL architecture) vs the built site — pre-design completeness diff.
# Sheet 2 (locations) + Sheet 7 (growth) are prose/template rules, not URL columns, so the
# machine diff is Sheet 1's global URL list (find-an-accountant lives in Sheet 2 by design).
import openpyxl, sys, io
from pathlib import Path
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

ROOT = Path(__file__).resolve().parents[2]

# 1) v4 Sheet 1 URLs + STATUS
wb = openpyxl.load_workbook(ROOT / 'techbrot-blueprint-v4.xlsx', read_only=True, data_only=True)
ws = wb['1 · URL ARCHITECTURE']
v4 = {}
for row in ws.iter_rows(min_row=5, values_only=True):
    url = row[0]
    if url is None: continue
    url = str(url).strip()
    if not url.startswith('/'): continue
    status = (str(row[6]).strip() if len(row) > 6 and row[6] is not None else '')
    v4[url] = status

# 2) built pages from _site (exclude dev previews); normalize trailing slash
site = ROOT / '_site'
built = set()
for p in site.rglob('index.html'):
    rel = p.parent.relative_to(site).as_posix()
    u = '/' if rel == '.' else '/' + rel + '/'
    if u.startswith('/dev/'): continue
    built.add(u)

fa = lambda u: u.startswith('/find-an-accountant/')
built_global = {u for u in built if not fa(u)}

def has(s, *kw): return any(k in s.upper() for k in kw)

live = {u: s for u, s in v4.items() if has(s, 'LIVE', 'PORT')}
notbuilt = {u: s for u, s in v4.items() if u not in built and not fa(u)}

print(f'v4 Sheet-1 URLs (global): {len(v4)}')
print(f'built pages total: {len(built)}  | built global (non-FA): {len(built_global)}  | built FA: {len(built)-len(built_global)}')
print()

print('=== [A] v4 marks LIVE/PORT but NOT built (the key flag) ===')
flag = sorted(u for u, s in live.items() if u not in built and not fa(u))
for u in flag: print(f'  {u}   <-- v4: {live[u]}')
if not flag: print('  (none)')
print()

print('=== [B] v4 NOT-built URLs, categorized by growth TYPE (counts) ===')
def typ(u):
    seg = u.strip('/').split('/')
    if u.startswith('/glossary/'): return 'glossary'
    if u.startswith('/tools/') or u.startswith('/calculators/'): return 'tools/calculators'
    if u.startswith('/resources/guides/') or u.startswith('/guides/'): return 'guides'
    if u.startswith('/resources/research/') or u.startswith('/research/'): return 'research/datasets'
    if 'case-stud' in u: return 'case-studies'
    if u.startswith('/switch/'): return 'switch'
    if u.startswith('/reviews/'): return 'reviews'
    if u.startswith('/blog/'): return 'blog'
    if u.startswith('/quickbooks/help/') or u.startswith('/quickbooks/support/') or u.startswith('/support/'): return 'support/help silo'
    if u.startswith('/quickbooks/'): return 'quickbooks (more)'
    if u.startswith('/accounting/industries/'): return 'accounting industries (more)'
    if u.startswith('/accounting/bookkeeping/'): return 'bookkeeping (more)'
    if u.startswith('/accounting/advisory/'): return 'advisory (more)'
    if u.startswith('/accounting/'): return 'accounting (more)'
    if u.startswith('/vs/'): return 'vs (more)'
    if u.startswith('/about/'): return 'about (more)'
    if u.startswith('/legal/'): return 'legal'
    return 'other/standalone'
from collections import Counter
tc = Counter(typ(u) for u in notbuilt)
for t, n in sorted(tc.items(), key=lambda x: -x[1]):
    print(f'  {n:>4}  {t}')
print(f'  ---- TOTAL not-built: {sum(tc.values())}')
print()
print('=== [B2] the LIVE/PORT-not-built (6) + OTHER-status items (verify/handle) ===')
for u, s in sorted(notbuilt.items()):
    if has(s,'LIVE','PORT') or not has(s,'BUILD','NEW','SPRINT','BACKLOG'):
        print(f'  {u}   [{s[:55]}]')
print()

print('=== [C] built GLOBAL pages NOT in v4 Sheet 1 (built but unlisted) ===')
extra = sorted(u for u in built_global if u not in v4)
for u in extra: print(f'  {u}')
if not extra: print('  (none)')
print()

print('=== [D] summary ===')
print(f'  v4 global URLs: {len(v4)}')
print(f'  built global matching v4: {len(built_global & set(v4))}')
print(f'  v4 LIVE/PORT not built: {len(flag)}')
print(f'  v4 not-built (any status): {len(notbuilt)}')
print(f'  built-global not in v4: {len(extra)}')

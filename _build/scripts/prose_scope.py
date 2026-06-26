import glob, os, re, collections
prose = [p for p in glob.glob('src/**/*.njk', recursive=True)
         if 'layouts/t-prose.njk' in open(p, encoding='utf-8', errors='ignore').read()]
buckets = collections.Counter()
faqless = []
for njk in prose:
    rel = njk.replace('\\', '/').replace('src/', '')[:-4]
    parts = rel.split('/')
    top = parts[0]
    sub = parts[1] if len(parts) > 1 else ''
    key = top + ('/' + sub if top in ('accounting', 'quickbooks') and sub and not sub.endswith('.njk') else '')
    data = njk[:-4] + '.11tydata.js'
    blob = (open(data, encoding='utf-8', errors='ignore').read() if os.path.exists(data) else '') + open(njk, encoding='utf-8', errors='ignore').read()
    has = bool(re.search(r'faq\s*[:=]\s*\[', blob))
    buckets[key] += 1
    if not has:
        faqless.append(rel)
for k, v in sorted(buckets.items(), key=lambda x: -x[1]):
    print(f'{v:3}  {k}')
print('--- faqless prose (%d) ---' % len(faqless))
for x in faqless:
    print('   ', x)

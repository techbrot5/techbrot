# scope_reviewedby.py — TASK 6A: scope reviewedBy David to where he genuinely
# reviews (honest E-E-A-T). Removes the `,"reviewedBy":{...#david-westgate}` ref
# (+ any adjacent lastReviewed) ONLY from REMOVE-bucket page sources. KEEP buckets
# (money/service/pillars/location/about/trust/partners/home) untouched. The global
# #david-westgate Person node (schemaGlobal.json) persists sitewide per rule #9.
import glob, re, sys
sys.stdout.reconfigure(encoding="utf-8")

REMOVE = [
    r'/glossary/', r'/blog/', r'/tools/', r'/legal/',
    r'/quickbooks/help/',
    r'/quickbooks/online/(features|integrations|advanced)/',
    r'/resources/', r'/frameworks/',
    r'/vs/', r'/quickbooks/compare/',
    r'/which-accounting-software', r'/app-stack', r'/platforms/', r'/accounting-systems',
]
rem_re = re.compile('|'.join(REMOVE))
# remove the reviewedBy david reference (+ optional adjacent lastReviewed), both url forms
token = re.compile(r',"reviewedBy":\{"@id":(?:"https://techbrot\.com/#david-westgate"|ORIGIN\+"/#david-westgate")\}(,"lastReviewed":"[^"]*")?')

changed = []
for f in glob.glob("src/**/*.11tydata.js", recursive=True) + glob.glob("src/**/*.njk", recursive=True):
    fn = f.replace("\\", "/")
    if "/dev/" in fn:
        continue
    # classify by source path -> the page(s) it represents
    rel = "/" + fn[len("src/"):]
    if not rem_re.search(rel):
        continue
    s = open(f, encoding="utf-8").read()
    if "#david-westgate" not in s:
        continue
    new = token.sub('', s)
    if new != s:
        open(f, "w", encoding="utf-8", newline="\n").write(new)
        changed.append(fn)

print(f"reviewedBy David removed from {len(changed)} REMOVE-bucket source files:")
for c in sorted(changed): print("  ", c)

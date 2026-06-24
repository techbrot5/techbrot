# strip_verify_link.py — TASK 6B: de-link the proadvisor.intuit.com verify LINK
# everywhere it appears as an <a> (David/operators not individually listed yet =
# fake verification). Robust to quote-escaping by keying on the URL inside the tag.
#   - CTA anchors whose inner text starts with "Verify on Intuit" -> REMOVED whole
#     (+ a leading separator), they're dead verify actions.
#   - all other proadvisor.intuit.com <a> -> DE-LINKED to inner text (tags/svg/span
#     stripped) so the honest directory *reference* survives as plain words.
# Structured data-object links ({href:"...proadvisor..."}) are NOT <a> tags and are
# left for manual handling (reported as residual).
import glob, re, sys
sys.stdout.reconfigure(encoding="utf-8")

def strip_tags(s): return re.sub(r'<[^>]+>', '', s).strip()

anchor = re.compile(r'<a\b[^>]*proadvisor\.intuit\.com[^>]*>(.*?)</a>', re.S)

changed = []
for f in glob.glob("src/**/*.njk", recursive=True) + glob.glob("src/**/*.11tydata.js", recursive=True):
    fn = f.replace("\\", "/")
    if "/dev/" in fn:
        continue
    s = open(f, encoding="utf-8").read()
    orig = s
    def repl(m):
        inner = strip_tags(m.group(1))
        if re.match(r'Verify on Intuit', inner):
            return '\x00CTA\x00'   # mark for removal incl leading sep
        return inner               # de-link, keep words
    s = anchor.sub(repl, s)
    # remove CTA markers plus an immediately-preceding separator (space, &middot;, etc.)
    s = re.sub(r'\s*(?:&middot;|·)?\s*\x00CTA\x00', '', s)
    s = s.replace('\x00CTA\x00', '')
    if s != orig:
        open(f, "w", encoding="utf-8", newline="\n").write(s)
        changed.append(fn)

print(f"Files changed: {len(changed)}")
for c in changed: print("  ", c)
# residual: any proadvisor.intuit.com left, and whether it's an <a> or a data href
import os
res_anchor, res_data = [], []
for f in glob.glob("src/**/*.njk",recursive=True)+glob.glob("src/**/*.11tydata.js",recursive=True):
    fn=f.replace("\\","/")
    if "/dev/" in fn: continue
    s=open(f,encoding="utf-8").read()
    if "proadvisor.intuit.com" not in s: continue
    (res_anchor if anchor.search(s) else res_data).append(fn)
print(f"\nResidual <a> anchors (should be 0): {res_anchor}")
print(f"Residual data-object/text refs (manual review): {len(res_data)}")
for r in res_data: print("  ", r)

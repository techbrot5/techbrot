"""Final honesty-comment cleanup pass (regex, handles comment-continuation wrapping).
Removes every stale 'DE is the only real-address state' / 'DE HQ' physical-presence
reference from find-an-accountant comments -> honest areaServed-only / no-physical-office
framing. Comments don't ship; this keeps the codebase honest + consistent. Idempotent."""
import re, glob

files = (glob.glob("src/find-an-accountant/**/*.njk", recursive=True)
         + glob.glob("src/find-an-accountant/**/*.11tydata.js", recursive=True)
         + ["src/_data/intents.json"])

def fix(t):
    # 'real-address' / 'real address' -> 'areaServed-only' (handles comment-wrapped via \s+)
    t = re.sub(r'real[-\s]+address', 'areaServed-only', t)
    # physical-HQ references -> the firm (remote)
    t = re.sub(r'\bthe DE HQ\b', 'the firm', t)
    t = re.sub(r'\bDE HQ\b', 'the firm', t)
    # clean up the awkward combos the substitutions produce
    t = t.replace('areaServed-only areaServed-only', 'areaServed-only')
    t = re.sub(r'areaServed-only\s*\n(\s*\*?\s*)areaServed-only', r'a street address —\n\1', t)
    t = t.replace('DE is the ONLY areaServed-only', 'no state has a street address; DE, like every state, is areaServed-only')
    t = t.replace('DE is the only areaServed-only', 'no state has a street address; DE, like every state, is areaServed-only')
    t = t.replace('no state is a areaServed-only', 'no state has a street address — areaServed-only')
    t = t.replace('the firm is the only areaServed-only', 'no state has a street address; the firm is areaServed-only')
    t = t.replace('the only areaServed-only state', 'areaServed-only like every state')
    t = t.replace('served remotely from the firm', 'served remotely')
    t = t.replace('from the firm. ', 'remotely. ')
    return t

total = 0
for path in files:
    try:
        txt = open(path, encoding="utf-8").read()
    except Exception:
        continue
    new = fix(txt)
    if new != txt:
        open(path, "w", encoding="utf-8", newline="\n").write(new)
        total += 1
        print("  fixed", path.replace("\\", "/"))
print("files changed:", total)

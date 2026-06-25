# fix_mojibake.py - repair CONFIRMED CP1252 round-trip mojibake in source.
#
# Some source files were saved through a UTF-8 -> CP1252 -> UTF-8 round-trip,
# corrupting punctuation into fixed multi-char garbage (e.g. an em-dash U+2014
# became the 3 chars U+00E2 U+20AC U+201D). These render as visible garbage in
# BODY text and in titles.
#
# The mojibake string for a given correct char is EXACTLY
# char.encode('utf-8').decode('cp1252'). We derive each corruption key that way
# at runtime from the intended character (spelled by \u escape, so this file is
# pure ASCII and free of any literal mojibake that could itself be corrupted).
# Then str.replace swaps only those exact substrings - nothing else can change.
# A per-file integrity check (length math + zero residual) proves it.
#
# Scope: the FIVE confirmed RENDERED-content corruptions below. A sixth, the
# decorative box-rule U+2550 in HTML comments, is intentionally left alone: it
# is non-rendering (Nunjucks {#- -#} comments) and its corruption involves an
# undefined CP1252 byte; out of scope for a "visible garbage" repair.
#
# Usage:  python _build/scripts/fix_mojibake.py          # dry-run
#         python _build/scripts/fix_mojibake.py --apply  # write changes
import glob, sys

APPLY = "--apply" in sys.argv

GOOD = {
    "em-dash": "—",   # -
    "en-dash": "–",   # -
    "arrow":   "→",   # ->
    "section": "§",   # section sign
    "middot":  "·",   # middle dot
}
# derive the exact mojibake key for each (the precise inverse of the corruption)
MAP = {}        # mojibake-seq -> correct char
LABELS = {}     # mojibake-seq -> label
for label, good in GOOD.items():
    moji = good.encode("utf-8").decode("cp1252")
    MAP[moji] = good
    LABELS[moji] = label

FILES = (glob.glob("src/**/*.njk", recursive=True)
         + glob.glob("src/**/*.11tydata.js", recursive=True)
         + glob.glob("src/_data/*.js", recursive=True))

total_occ = 0
file_rows = []
assert_fail = []
for f in FILES:
    n = f.replace("\\", "/")
    if "/dev/" in n:
        continue
    with open(f, encoding="utf-8") as fh:
        old = fh.read()
    counts = {seq: old.count(seq) for seq in MAP}
    nfix = sum(counts.values())
    if not nfix:
        continue
    new = old
    for seq, good in MAP.items():
        new = new.replace(seq, good)
    exp_delta = sum(counts[seq] * (len(seq) - len(MAP[seq])) for seq in MAP)
    if len(old) - len(new) != exp_delta:
        assert_fail.append(n + " (len-mismatch)")
    if any(seq in new for seq in MAP):
        assert_fail.append(n + " (residual)")
    total_occ += nfix
    file_rows.append((n, nfix, counts))
    if APPLY:
        with open(f, "w", encoding="utf-8", newline="") as fh:
            fh.write(new)

sys.stdout.reconfigure(encoding="utf-8")
print(f"{'APPLIED' if APPLY else 'DRY-RUN'} - {total_occ} occurrence(s) across "
      f"{len(file_rows)} file(s)\n")
for n, nfix, counts in sorted(file_rows, key=lambda r: -r[1]):
    bits = " ".join(f"{LABELS[s]}:{c}" for s, c in counts.items() if c)
    print(f"  {nfix:>4}  {n}   [{bits}]")
print("\nPer-sequence totals:")
for seq in MAP:
    print(f"  {LABELS[seq]:<9} {sum(c[seq] for _, _, c in file_rows)}")
print(f"\nintegrity assertion failures: {assert_fail if assert_fail else 'NONE'}")
print(f"Total: {total_occ} across {len(file_rows)} file(s).")

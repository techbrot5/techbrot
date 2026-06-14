"""One-shot: isolate every headless-probe Chrome into a dedicated user-data-dir
so (a) kill_probe can target ONLY the probe by marker and (b) probes never share
the founder's default Chrome profile (which both stalls dumps via the singleton
lock and risked the founder's tabs). Founder standing rule, round 21.

Injects `--user-data-dir=C:\\tb-probe-profile` immediately after `--headless=new`
in every _build/scripts/*.ps1 that launches Chrome. Idempotent. Reports changes.
"""
import re, glob, os
MARKER = r"--user-data-dir=C:\tb-probe-profile"
NEEDLE = "--headless=new"
REPL = NEEDLE + " " + MARKER
changed, skipped, noflag = [], [], []
for path in sorted(glob.glob("_build/scripts/*.ps1")):
    name = os.path.basename(path)
    if name == "kill_probe.ps1":
        continue
    text = open(path, encoding="utf-8").read()
    if "tb-probe-profile" in text:
        skipped.append(name); continue
    if NEEDLE in text:
        n = text.count(NEEDLE)
        text = text.replace(NEEDLE, REPL)
        open(path, "w", encoding="utf-8").write(text)
        changed.append(f"{name} (x{n})")
    elif re.search(r"--headless(?!=)", text):
        # older `--headless` (no =new) — anchor on it, don't touch --headless=*
        n = len(re.findall(r"--headless(?!=)", text))
        text = re.sub(r"--headless(?!=)", "--headless --user-data-dir=C:\\\\tb-probe-profile", text)
        open(path, "w", encoding="utf-8").write(text)
        changed.append(f"{name} (x{n}, --headless form)")
    elif re.search(r"chrome\.exe|\$chrome", text):
        noflag.append(name)  # launches chrome but no --headless=new token to anchor on
print("PATCHED (isolated profile injected):")
for c in changed: print("  ", c)
print("ALREADY ISOLATED:", skipped or "(none)")
print("CHROME-LAUNCH BUT NO --headless=new ANCHOR (review manually):", noflag or "(none)")

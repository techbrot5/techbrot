#!/usr/bin/env python3
"""Animated link arrow (founder 2026-06-17): wrap the TRAILING arrow in action
links (e.g. "Book the discovery call &rarr;") in a reusable .lnk-arrow span so it
slides right on hover/focus (one CSS source in 09-extensions). One-pass site-wide
transform — NOT page-by-page. Only trailing-in-link arrows (&rarr; immediately
before </a>) are wrapped; arrows mid-prose are untouched. Idempotent (after the
wrap the arrow precedes </span>, not </a>, so re-runs are no-ops). From repo root:
  python _build/scripts/wrap_link_arrows.py
"""
import pathlib

SRC = pathlib.Path("src")
NEEDLE = "&rarr;</a>"
REPL = '<span class="lnk-arrow" aria-hidden="true">&rarr;</span></a>'

changed, total = [], 0
for f in SRC.rglob("*.njk"):
    s = f.read_text(encoding="utf-8")
    n = s.count(NEEDLE)
    if not n:
        continue
    f.write_text(s.replace(NEEDLE, REPL), encoding="utf-8")
    changed.append((f, n))
    total += n

print(f"WRAPPED {total} trailing link arrows across {len(changed)} files:")
for f, n in sorted(changed, key=lambda x: -x[1])[:25]:
    print(f"  {n:>3}  {f.as_posix()}")
if len(changed) > 25:
    print(f"  … +{len(changed) - 25} more files")

"""Round-9 deep trim (TODO 17) for the SESSION-OWNED css files — the ones
extract_css.py never regenerates: 00-fonts, 06-chrome, 07-extensions.
- every comment collapses to a one-line pointer (first 90 chars of the
  squashed text) — provenance preserved, prose dropped
- 07-extensions: rules proven unused by css_audit.py are removed:
  .initials-mark (replaced by the sharp-pipeline photo in round 7),
  .section-motif / .section-motif__art (motif slot never composed)
Run ONCE; idempotent. Locked files (01-tokens, 02-base) untouched.
Usage: python _build/scripts/trim_session_css.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CSS = ROOT / "src" / "assets" / "css"

DROP_TOKENS_07 = ("initials-mark", "section-motif")


def collapse_comments(css):
    def one_line(m):
        text = " ".join(m.group(0)[2:-2].split())
        return f"/* {text[:90]} */"
    return re.sub(r"/\*.*?\*/", one_line, css, flags=re.S)


def drop_unused_rules(css, tokens):
    def gone(m):
        sel = m.group(1)
        parts = [p.strip() for p in sel.split(",") if p.strip()]
        if parts and all(any(t in p for t in tokens) for p in parts):
            return ""
        return m.group(0)
    return re.sub(r"([^{}@/][^{}]*?)\{[^{}]*\}", gone, css)


for name, tokens in (("00-fonts.css", ()), ("06-chrome.css", ()),
                     ("07-extensions.css", DROP_TOKENS_07)):
    f = CSS / name
    before = f.stat().st_size
    css = f.read_text(encoding="utf-8")
    css = collapse_comments(css)
    if tokens:
        css = drop_unused_rules(css, tokens)
    css = re.sub(r"\n{3,}", "\n\n", css)
    f.write_text(css, encoding="utf-8")
    after = f.stat().st_size
    print(f"{name}: {before:,} -> {after:,} B  (saved {before - after:,})")

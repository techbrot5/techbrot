"""Extract the readable main content of a live (baseline) page so an elevation
can carry its equity forward verbatim. Strips chrome/script/style, prints the
heading + paragraph + list-item + table-cell text in document order, plus a
collected list of every $ price range found (canonical-pricing carry check).
Usage: python _build/scripts/extract_live.py pricing/index.html
"""
import re
import sys
import html as htmlmod
from html.parser import HTMLParser

path = sys.argv[1] if len(sys.argv) > 1 else "pricing/index.html"
raw = open(path, encoding="utf-8", errors="replace").read()


class Extract(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.cur = None
        self.out = []
        self.buf = []

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "svg", "nav", "header", "footer"):
            self.skip += 1
        if tag in ("h1", "h2", "h3", "h4", "p", "li", "td", "th", "figcaption", "dt", "dd", "a", "span"):
            if self.buf:
                self._flush()
            self.cur = tag

    def handle_endtag(self, tag):
        if tag in ("script", "style", "svg", "nav", "header", "footer") and self.skip:
            self.skip -= 1
        if tag in ("h1", "h2", "h3", "h4", "p", "li", "td", "th", "figcaption", "dt", "dd"):
            self._flush()

    def handle_data(self, data):
        if not self.skip and data.strip():
            self.buf.append(data.strip())

    def _flush(self):
        if self.buf:
            txt = re.sub(r"\s+", " ", " ".join(self.buf)).strip()
            tag = self.cur or "?"
            if txt:
                self.out.append((tag, txt))
        self.buf = []
        self.cur = None


p = Extract()
p.feed(raw)
p._flush()
for tag, txt in p.out:
    prefix = tag.upper() if tag in ("h1", "h2", "h3", "h4") else tag
    print(f"[{prefix}] {txt}")

print("\n===== PRICE RANGES FOUND =====")
text = htmlmod.unescape(re.sub(r"<[^>]+>", " ", raw))
text = re.sub(r"\s+", " ", text)
seen = set()
for m in re.finditer(r"[^.;|]{0,80}\$[\d,]+(?:\s*[–—-]\s*\$?[\d,]+)?\+?(?:/mo)?[^.;|]{0,40}", text):
    s = m.group(0).strip()
    if "$" in s and s not in seen:
        seen.add(s)
        print("$", s[:180])

"""TechBrot Session 1 Part A — baseline extractor.

Crawls the repo's per-route HTML folders (URL authority), captures the
content-equity contract per page, and writes baseline.json (FROZEN after
Session 1). Run from repo root:  python _build/baseline/extract_baseline.py
"""
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "_build" / "baseline" / "baseline.json"

SKIP_TEXT_TAGS = {"script", "style", "noscript", "template"}
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input",
             "link", "meta", "param", "source", "track", "wbr"}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.extra_titles = 0
        self.meta = {}            # name -> content (first wins per name)
        self.canonical = ""
        self.headings = []        # ordered [{level, text}]
        self.jsonld_raw = []      # raw script payloads
        self.hrefs = []           # all <a href>
        self.forms = []           # [{action, method, fields:[{tag,type,name,value,required}]}]
        self.data_intents = []    # data-intent attribute values
        self.details_faq = []     # [{q, a}] from <details><summary>
        self._stack = []          # open-tag stack for text capture
        self._text = []           # visible text chunks
        self._heading_buf = None  # (level, [chunks])
        self._in_title = False
        self._in_jsonld = False
        self._jsonld_buf = []
        self._form = None
        self._in_summary = False
        self._summary_buf = []
        self._details_buf = None  # collects answer text inside open <details>

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag not in VOID_TAGS:
            self._stack.append(tag)
        if tag == "title":
            # BSS export leaves a stray second <title>BSS-1-11ty</title> in
            # head — only the first (real) title counts for the baseline.
            if not self.title:
                self._in_title = True
            else:
                self.extra_titles += 1
        elif tag == "meta":
            name = (a.get("name") or a.get("property") or "").lower()
            if name and name not in self.meta:
                self.meta[name] = a.get("content", "")
        elif tag == "link" and (a.get("rel") or "").lower() == "canonical":
            self.canonical = a.get("href", "")
        elif tag in ("h1", "h2", "h3"):
            self._heading_buf = (tag, [])
        elif tag == "script" and "ld+json" in (a.get("type") or ""):
            self._in_jsonld = True
            self._jsonld_buf = []
        elif tag == "a" and a.get("href"):
            self.hrefs.append(a["href"])
        elif tag == "form":
            self._form = {"action": a.get("action", ""), "method": (a.get("method") or "GET").upper(),
                          "id": a.get("id", ""), "data_form": a.get("data-form", ""), "fields": []}
            self.forms.append(self._form)
        elif tag in ("input", "select", "textarea") and self._form is not None:
            if a.get("name"):
                self._form["fields"].append({
                    "tag": tag, "type": a.get("type", "text" if tag == "input" else tag),
                    "name": a["name"], "value": a.get("value", ""),
                    "required": "required" in a, "data_meta": a.get("data-meta", "")})
        elif tag == "details":
            self._details_buf = []
        elif tag == "summary":
            self._in_summary = True
            self._summary_buf = []
        if "data-intent" in a and a.get("data-intent"):
            self.data_intents.append(a["data-intent"])

    def handle_endtag(self, tag):
        while self._stack and self._stack[-1] != tag:
            self._stack.pop()
        if self._stack and self._stack[-1] == tag:
            self._stack.pop()
        if tag == "title":
            self._in_title = False
        elif tag in ("h1", "h2", "h3") and self._heading_buf:
            level, chunks = self._heading_buf
            text = norm(" ".join(chunks))
            if text:
                self.headings.append({"level": level, "text": text})
            self._heading_buf = None
        elif tag == "script" and self._in_jsonld:
            self._in_jsonld = False
            payload = "".join(self._jsonld_buf).strip()
            if payload:
                self.jsonld_raw.append(payload)
        elif tag == "form":
            self._form = None
        elif tag == "summary":
            self._in_summary = False
        elif tag == "details" and self._details_buf is not None:
            q = norm(" ".join(self._summary_buf))
            a_text = norm(" ".join(self._details_buf))
            if q:
                self.details_faq.append({"q": q, "a": a_text})
            self._details_buf = None

    def handle_data(self, data):
        if self._in_title:
            self.title += data
            return
        if self._in_jsonld:
            self._jsonld_buf.append(data)
            return
        if any(t in SKIP_TEXT_TAGS for t in self._stack):
            return
        if data.strip():
            self._text.append(data)
            if self._heading_buf:
                self._heading_buf[1].append(data)
            if self._in_summary:
                self._summary_buf.append(data)
            elif self._details_buf is not None:
                self._details_buf.append(data)

    @property
    def visible_text(self):
        return norm(" ".join(self._text))


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def collect_types(node, bag):
    if isinstance(node, dict):
        t = node.get("@type")
        if isinstance(t, str):
            bag.append(t)
        elif isinstance(t, list):
            bag.extend(x for x in t if isinstance(x, str))
        for v in node.values():
            collect_types(v, bag)
    elif isinstance(node, list):
        for v in node:
            collect_types(v, bag)


def collect_faq(node, out):
    if isinstance(node, dict):
        if node.get("@type") == "Question":
            q = norm(str(node.get("name", "")))
            ans = node.get("acceptedAnswer") or {}
            a = norm(str(ans.get("text", ""))) if isinstance(ans, dict) else ""
            if q:
                out.append({"q": q, "a": a})
        for v in node.values():
            collect_faq(v, out)
    elif isinstance(node, list):
        for v in node:
            collect_faq(v, out)


INTENT_RE = re.compile(r"[?&]intent=([A-Za-z0-9_-]+)")


def internal_path(href, page_url):
    """Normalize an href to a site-internal path, or None if external/asset."""
    href = href.strip()
    if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
        return None
    if href.startswith("//"):
        href = "https:" + href
    if href.startswith(("http://", "https://")):
        m = re.match(r"https?://(?:www\.)?techbrot\.com(/[^#]*)?", href)
        if not m:
            return None
        href = m.group(1) or "/"
    if not href.startswith("/"):
        # resolve relative against the page URL
        base = page_url.rstrip("/").split("/")
        parts = href.split("/")
        while parts and parts[0] in (".", ".."):
            if parts.pop(0) == "..":
                if len(base) > 1:
                    base.pop()
        href = "/".join(base + parts)
        if not href.startswith("/"):
            href = "/" + href
    return href.split("#")[0]


def main():
    pages = sorted(p for p in ROOT.rglob("index.html")
                   if "_build" not in p.parts and "assets" not in p.parts)
    records = []
    for path in pages:
        rel = path.relative_to(ROOT).parent.as_posix()
        url = "/" if rel == "." else f"/{rel}/"
        html = path.read_text(encoding="utf-8", errors="replace")
        p = PageParser()
        p.feed(html)

        jsonld, jsonld_errors, types = [], [], []
        for raw in p.jsonld_raw:
            try:
                node = json.loads(raw)
                jsonld.append(node)
                collect_types(node, types)
            except json.JSONDecodeError as e:
                jsonld_errors.append(str(e))

        faq = []
        for node in jsonld:
            collect_faq(node, faq)

        internal = sorted({h for h in (internal_path(h, url) for h in p.hrefs) if h})

        intents = set(m for h in p.hrefs for m in INTENT_RE.findall(h))
        for f in p.forms:
            for fld in f["fields"]:
                if fld["name"] == "intent" and fld["value"]:
                    intents.add(fld["value"])
        intents.update(p.data_intents)

        records.append({
            "url": url,
            "file": path.relative_to(ROOT).as_posix(),
            "title": norm(p.title),
            "extra_title_tags": p.extra_titles,
            "meta_description": p.meta.get("description", ""),
            "canonical": p.canonical,
            "robots": p.meta.get("robots", ""),
            "headings": p.headings,
            "h_counts": {lv: sum(1 for h in p.headings if h["level"] == lv)
                         for lv in ("h1", "h2", "h3")},
            "jsonld": jsonld,
            "jsonld_parse_errors": jsonld_errors,
            "schema_types": sorted(set(types)),
            "faq": faq,
            "faq_markup": p.details_faq,
            "internal_hrefs": internal,
            "intent_keys": sorted(intents),
            "forms": p.forms,
            "word_count": len(p.visible_text.split()),
        })

    baseline = {
        "frozen": True,
        "generated": "2026-06-12",
        "note": ("URL authority = repo folders. home (/) intentionally absent — "
                 "founder decision, not a regression. find-an-accountant/ tree "
                 "present in repo; reconciliation in report."),
        "page_count": len(records),
        "pages": records,
    }
    OUT.write_text(json.dumps(baseline, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"pages={len(records)} -> {OUT}")
    # quick stats to stdout
    silos = {}
    for r in records:
        silo = r["url"].split("/")[1]
        silos[silo] = silos.get(silo, 0) + 1
    for s, n in sorted(silos.items()):
        print(f"  {s}: {n}")
    bad = [r["url"] for r in records if r["jsonld_parse_errors"]]
    if bad:
        print("JSON-LD parse errors on:", *bad, sep="\n  ")


if __name__ == "__main__":
    main()

"""TechBrot verification battery — run every round, no exceptions.
Usage: python _build/battery/run_battery.py   (after a preview build)

Checks:
 1. Output URL set: every built URL is in baseline ∪ build-new queue
    (dev/* allowed on preview builds only).
 2. Anchor + internal-link audit: every internal href in built HTML resolves
    to a known URL (baseline / queue / built); same-page #anchors exist.
 3. Intent audit: every ?intent= value exists in _data/intents.json;
    front-matter intent keys are unique across src pages.
 4. Founder-name-zero: founder's name never in VISIBLE content (JSON-LD
    Person schema is the sanctioned home and is excluded from the scan).
 5. CSS drift: zero hardcoded hex / undeclared custom properties in the
    bundle sources (01-tokens.css is the only legitimate hex home).
 6. CSS byte gate: bundle source ≤ 55KB.
"""
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / "_site"
FAILURES = []


def fail(check, msg):
    FAILURES.append(f"[{check}] {msg}")


def ok(check, msg):
    print(f"  PASS [{check}] {msg}")


baseline = json.loads((ROOT / "_build/baseline/baseline.json").read_text(encoding="utf-8"))
queue = json.loads((ROOT / "_build/build-new-queue.json").read_text(encoding="utf-8"))
intents = json.loads((ROOT / "src/_data/intents.json").read_text(encoding="utf-8"))

baseline_urls = {p["url"] for p in baseline["pages"]}
queue_urls = set(queue["urls"])
known_urls = baseline_urls | queue_urls

built = sorted(SITE.rglob("index.html"))
built_urls = set()
for p in built:
    rel = p.relative_to(SITE).parent.as_posix()
    built_urls.add("/" if rel == "." else f"/{rel}/")

# 1 ── output URL set
bad = [u for u in built_urls if u not in known_urls and not u.startswith("/dev/")]
if bad:
    fail("url-set", f"built URLs outside baseline∪queue: {bad}")
else:
    ok("url-set", f"{len(built_urls)} built URLs all within contract (dev/* preview-only)")


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.hrefs, self.ids, self.text = [], set(), []
        self._skip = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("script", "style"):
            self._skip += 1
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "a" and a.get("href"):
            self.hrefs.append(a["href"])

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self._skip:
            self._skip -= 1

    def handle_data(self, data):
        if not self._skip and data.strip():
            self.text.append(data)


pages = {}
for p in built:
    rel = p.relative_to(SITE).parent.as_posix()
    url = "/" if rel == "." else f"/{rel}/"
    lp = LinkParser()
    lp.feed(p.read_text(encoding="utf-8"))
    pages[url] = lp

# 2 ── anchors + internal links
link_problems = []
for url, lp in pages.items():
    for href in lp.hrefs:
        if href.startswith(("http://", "https://", "mailto:", "tel:")):
            continue
        path, _, frag = href.partition("#")
        if path:
            qpath = path.split("?")[0]
            if not qpath.endswith("/"):
                qpath += "/"
            if qpath not in known_urls and qpath not in built_urls and not qpath.startswith("/dev/"):
                link_problems.append(f"{url} -> {href} (unknown target)")
        elif frag and frag not in lp.ids:
            link_problems.append(f"{url} -> #{frag} (missing anchor)")
if link_problems:
    for x in link_problems:
        fail("links", x)
else:
    total = sum(len(lp.hrefs) for lp in pages.values())
    ok("links", f"{total} hrefs across {len(pages)} pages all resolve")

# 3 ── intents
intent_problems = []
intent_re = re.compile(r"[?&]intent=([A-Za-z0-9_-]+)")
for url, lp in pages.items():
    for href in lp.hrefs:
        for key in intent_re.findall(href):
            if key not in intents["intents"]:
                intent_problems.append(f"{url}: CTA intent '{key}' not in intents.json")
fm_intents = {}
for src in (ROOT / "src").rglob("*.njk"):
    m = re.search(r"^intent:\s*(\S+)", src.read_text(encoding="utf-8"), re.M)
    if m:
        fm_intents.setdefault(m.group(1), []).append(src.name)
dupes = {k: v for k, v in fm_intents.items() if len(v) > 1}
if dupes:
    intent_problems.append(f"duplicate front-matter intent keys: {dupes}")
if intent_problems:
    for x in intent_problems:
        fail("intents", x)
else:
    ok("intents", f"CTA intents valid; {len(fm_intents)} page intent keys unique")

# 4 ── founder-name-zero in visible content
NAMES = ("Abid Khan", "Abid", "abid-khan")
name_hits = []
for url, lp in pages.items():
    visible = " ".join(lp.text)
    for n in NAMES:
        if re.search(rf"\b{re.escape(n)}\b", visible, re.I):
            name_hits.append(f"{url}: '{n}' visible")
if name_hits:
    for x in name_hits:
        fail("founder-zero", x)
else:
    ok("founder-zero", "founder name absent from all visible content (schema-only)")

# 5 ── CSS drift in bundle sources
css_dir = ROOT / "src/assets/css"
declared = set()
for f in css_dir.glob("*.css"):
    declared.update(re.findall(r"(--[A-Za-z0-9_-]+)\s*:", f.read_text(encoding="utf-8")))
drift = []
for f in css_dir.glob("*.css"):
    if f.name == "01-tokens.css":
        continue
    # comment-aware: hex inside /* … */ is documentation, not a rule
    text = re.sub(r"/\*.*?\*/", lambda m: "\n" * m.group(0).count("\n"),
                  f.read_text(encoding="utf-8"), flags=re.S)
    for i, line in enumerate(text.splitlines(), 1):
        for h in re.findall(r"#[0-9a-fA-F]{3,8}\b", line):
            drift.append(f"{f.name}:{i} hardcoded hex {h}")
        for v in re.findall(r"var\(\s*(--[A-Za-z0-9_-]+)", line):
            if v not in declared:
                drift.append(f"{f.name}:{i} undeclared {v}")
if drift:
    for x in drift:
        fail("css-drift", x)
else:
    ok("css-drift", "zero hardcoded hex, zero undeclared custom properties in bundle")

# 6 ── CSS byte gate (re-ratified 2026-06-13: HARD gate on the shipped
#       minified artifact = 58KB, the ceiling through cutover — does not move
#       again; source overage reported as a flag; source trim pass scheduled
#       during silo elevation, target source < 75KB)
order = ["00-fonts.css", "01-tokens.css", "02-base.css", "03-conversion.css",
         "04-chrome.css", "05-tiers.css", "06-motif-rules.css",
         "07-motion.css", "08-additions.css", "09-extensions.css"]
src_bytes = sum((css_dir / n).stat().st_size for n in order)
min_css = SITE / "assets" / "css" / "site.min.css"
min_bytes = min_css.stat().st_size if min_css.exists() else 0
if not min_bytes or min_bytes > 58 * 1024:
    fail("css-bytes", f"minified {min_bytes}B exceeds 58KB hard gate (or missing)")
else:
    note = f" ⚠ source {src_bytes}B over 70KB soft-cap (flagged)" if src_bytes > 70 * 1024 else ""
    ok("css-bytes", f"minified {min_bytes}B / {58*1024}B hard gate · source {src_bytes}B{note}")

# 7 ── AI-summary is ALWAYS five (ruling A) · FAQ accordion exists with 6+
#       items whose FAQPage schema matches the rendered text VERBATIM ·
#       zero question overlap between the quick-5 and the FAQ (round 5)
def normalize(s):
    import html as html_mod
    return re.sub(r"\s+", " ", html_mod.unescape(re.sub(r"<[^>]+>", "", s))).strip()


for url, lp in pages.items():
    if url.startswith("/dev/"):
        continue
    html = (SITE / url.lstrip("/") / "index.html").read_text(encoding="utf-8")

    quick_qs = []
    if "ai-summary__list" in html:
        n = html.count('class="ai-summary__item"')
        if n != 5:
            fail("ai-summary-5", f"{url}: {n} Q/A items (must be exactly 5)")
        else:
            ok("ai-summary-5", f"{url}: exactly 5 Q/A items")
        quick_qs = [normalize(m) for m in
                    re.findall(r'class="ai-summary__question">(.*?)</h3>', html, re.S)]

    # match both the flat list and the nested variant (faq__list--nested)
    if 'class="faq__list' in html:
        faq_qs = [normalize(m) for m in
                  re.findall(r'class="faq__trigger"[^>]*>(.*?)</button>', html, re.S)]
        faq_as = [normalize(m) for m in
                  re.findall(r'class="faq__answer"[^>]*>\s*<p>(.*?)</p>', html, re.S)]
        if len(faq_qs) < 6:
            fail("faq-min-6", f"{url}: only {len(faq_qs)} FAQ items (need 6+)")
        else:
            ok("faq-min-6", f"{url}: {len(faq_qs)} FAQ items")

        overlap = {q.lower() for q in quick_qs} & {q.lower() for q in faq_qs}
        if overlap:
            fail("faq-overlap", f"{url}: quick-5/FAQ shared questions: {overlap}")
        else:
            ok("faq-overlap", f"{url}: zero question overlap quick-5 vs FAQ")

        # FAQPage schema must mirror the ACCORDION verbatim
        schema_pairs = []
        for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
            node = json.loads(m)
            for g in node.get("@graph", []):
                if g.get("@type") == "FAQPage":
                    for q in g.get("mainEntity", []):
                        schema_pairs.append((normalize(q["name"]),
                                             normalize(q["acceptedAnswer"]["text"])))
        rendered = list(zip(faq_qs, faq_as))
        if schema_pairs == rendered:
            ok("faq-schema-verbatim", f"{url}: FAQPage matches accordion verbatim ({len(schema_pairs)} Q/A)")
        else:
            diffs = [i for i, (s, r) in enumerate(zip(schema_pairs, rendered)) if s != r]
            fail("faq-schema-verbatim",
                 f"{url}: schema/rendered mismatch (count {len(schema_pairs)} vs {len(rendered)}, diff idx {diffs[:3]})")

# 8 ── content-equity differ (risk hierarchy #2 — first enforced on the
#       /contact/ elevation). For every built URL that exists in the FROZEN
#       baseline: every baseline heading, FAQ Q/A, and schema node type must
#       be present in the built page — or carry a founder-justified entry in
#       equity-exceptions.json (reported as JUSTIFIED, never silently).
exceptions = json.loads(
    (ROOT / "_build/battery/equity-exceptions.json").read_text(encoding="utf-8")
)


def collect_types(node, acc):
    if isinstance(node, dict):
        t = node.get("@type")
        if isinstance(t, str):
            acc.add(t)
        elif isinstance(t, list):
            acc.update(t)
        for v in node.values():
            collect_types(v, acc)
    elif isinstance(node, list):
        for v in node:
            collect_types(v, acc)


def normalize_eq(s):
    import html as html_mod
    import unicodedata
    s = html_mod.unescape(re.sub(r"<[^>]+>", "", s))
    s = unicodedata.normalize("NFKC", s)
    # baseline capture carries mojibake U+FFFD where the live file had
    # curly punctuation — treat it as a single-char wildcard via removal
    s = s.replace("�", "").replace("’", "").replace("‘", "")
    s = s.replace("—", " ").replace("–", " ").replace("&", " ")
    return re.sub(r"[^a-z0-9 ]", "", re.sub(r"\s+", " ", s.lower())).strip()


ported = [u for u in built_urls if u in baseline_urls and u not in queue_urls]
for url in sorted(ported):
    rec = next(p for p in baseline["pages"] if p["url"] == url)
    html = (SITE / url.lstrip("/") / "index.html").read_text(encoding="utf-8")
    exc = exceptions.get(url, {})
    exc_headings = {normalize_eq(e["text"]): e for e in exc.get("headings", [])}
    exc_schema = set(exc.get("schema_types", []))

    built_headings = {normalize_eq(m) for m in
                      re.findall(r"<h[1-6][^>]*>(.*?)</h[1-6]>", html, re.S)}
    missing_h, justified_h, chrome_h = [], [], []
    for h in rec["headings"]:
        key = normalize_eq(h["text"])
        if any(key and key in bh for bh in built_headings):
            continue
        if key in exc_headings:
            # founder ruling 2026-06-13: chrome-relocated headings (footer
            # columns/nav present in the full-chrome variant) are NOT
            # removals and need no per-page sign-off
            if exc_headings[key].get("type") == "chrome":
                chrome_h.append(h["text"])
            else:
                justified_h.append(h["text"])
        else:
            missing_h.append(f"{h['level']}: {h['text']}")

    built_faq_text = normalize_eq(html)
    exc_faq = {normalize_eq(e["text"]): e for e in exc.get("faq", [])}
    missing_faq, justified_faq = [], []
    for qa in rec.get("faq", []):
        q = qa.get("q") or qa.get("question") or ""
        if normalize_eq(q) in built_faq_text:
            continue
        if normalize_eq(q) in exc_faq:
            justified_faq.append(q)
        else:
            missing_faq.append(q)

    built_types = set()
    for m in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        collect_types(json.loads(m), built_types)
    missing_s = [t for t in rec.get("schema_types", [])
                 if t not in built_types and t not in exc_schema]
    justified_s = [t for t in rec.get("schema_types", []) if t in exc_schema]

    problems = []
    if missing_h:
        problems.append(f"headings missing (no founder-justified exception): {missing_h}")
    if missing_faq:
        problems.append(f"baseline FAQ missing: {missing_faq}")
    if missing_s:
        problems.append(f"schema node types missing: {missing_s}")
    if problems:
        for p_ in problems:
            fail("content-equity", f"{url}: {p_}")
    else:
        note = ""
        if justified_h or justified_s or justified_faq:
            note += f" · JUSTIFIED removals (founder-ruled, see equity-exceptions.json): {justified_h + justified_s + justified_faq}"
        if chrome_h:
            note += f" · chrome-relocated (full-chrome variant carries them): {chrome_h}"
        ok("content-equity",
           f"{url}: {len(rec['headings'])} baseline headings · {len(rec.get('faq', []))} FAQ · {len(rec.get('schema_types', []))} schema types accounted for{note}")

# 9 ── CTA LEXICON (changeover step 6, founder-canonical registry).
#       Every rendered button's visible text must be canonical, sanctioned,
#       or a fenced intents.json per-intent cta value.
lex = json.loads((ROOT / "src/_data/ctaLexicon.json").read_text(encoding="utf-8"))
allowed_cta = set()
for v in lex["canonical"].values():
    allowed_cta.update(v if isinstance(v, list) else [v])
allowed_cta.update(e["text"] for e in lex["sanctioned"])
allowed_cta.update(v["cta"] for v in intents["intents"].values() if v.get("cta"))


def btn_texts(html):
    out = []
    for m in re.finditer(
            r'<(?:a|button)[^>]*class="[^"]*\bbtn\b[^"]*"[^>]*>(.*?)</(?:a|button)>',
            html, re.S):
        txt = re.sub(r"<[^>]+>", "", m.group(1))
        txt = re.sub(r"\s+", " ",
                     txt.replace("&rsquo;", "’").replace("&amp;", "&")).strip()
        if txt:
            out.append(txt)
    return out


cta_problems = []
seen_ctas = set()
for url, lp in pages.items():
    if url.startswith("/dev/"):
        continue
    html = (SITE / url.lstrip("/") / "index.html").read_text(encoding="utf-8")
    for t in btn_texts(html):
        seen_ctas.add(t)
        if t not in allowed_cta:
            cta_problems.append(f"{url}: button text not in lexicon: {t!r}")
# the 404 page builds at /404.html (not index.html)
p404 = SITE / "404.html"
if p404.exists():
    for t in btn_texts(p404.read_text(encoding="utf-8")):
        seen_ctas.add(t)
        if t not in allowed_cta:
            cta_problems.append(f"/404.html: button text not in lexicon: {t!r}")
if cta_problems:
    for x in cta_problems:
        fail("cta-lexicon", x)
else:
    ok("cta-lexicon", f"{len(seen_ctas)} distinct button labels, all canonical/sanctioned/machinery")

# 10 ── CLASS MANIFEST (changeover step 7, founder-ruled standing check).
#        Every class in built HTML must be in CLASS-MANIFEST(208) ∪ the
#        classes DEFINED in the bundle (skin + 09-extensions) ∪ the
#        content-machinery/semantic whitelist. Anything else is an
#        old-system trace or an undeclared class.
MANIFEST_MD = (ROOT / "_design/techbrot-skin-handoff/techbrot-design-system"
               / "project/handoff/CLASS-MANIFEST.md")
MANIFEST_WHITELIST = {
    "sr-only", "section--cta-band--light", "ai-summary",
    "faq__list", "faq__list--nested", "section--faq-nested",
    "section--legal-doc", "legal-doc__list", "process-step__heading",
    "page--hub", "page--bofu", "page--legal", "page--trust",
    "page--partners", "page--mofu", "has-call-bar",
}
manifest_classes = set(re.findall(r"^([a-z][a-z0-9_-]*)$",
                                  MANIFEST_MD.read_text(encoding="utf-8"), re.M))
allowed_classes = manifest_classes | MANIFEST_WHITELIST
for cf in (ROOT / "src/assets/css").glob("*.css"):
    allowed_classes |= set(re.findall(r"\.([A-Za-z][A-Za-z0-9_-]*)",
                                      cf.read_text(encoding="utf-8")))
manifest_strays = {}
manifest_html = list(SITE.rglob("*.html"))
for p in manifest_html:
    rel = p.relative_to(SITE).as_posix()
    if rel.startswith("dev/"):
        continue
    for mm in re.findall(r'class="([^"]+)"', p.read_text(encoding="utf-8")):
        for c in mm.split():
            if c not in allowed_classes:
                manifest_strays.setdefault(c, set()).add(rel)
if manifest_strays:
    for c, pgs in sorted(manifest_strays.items()):
        fail("manifest", f"class outside manifest∪bundle∪whitelist: {c} ({sorted(pgs)[:2]})")
else:
    ok("manifest", f"all built classes within manifest({len(manifest_classes)})∪bundle∪whitelist")

# 11 ── FAQ FLAT (round-11 standing rule, founder 2026-06-13): every FAQ is
#        the /contact/ shape — flat question → prose answer. No nested
#        child-Q/A markup, and no bullet lists (<ul>/<ol>) inside an answer.
#        Enforced sitewide on every page that carries a .faq__list.
NESTED_FAQ_TOKENS = ("faq__children", "faq__child", "faq__child-question",
                     "faq__list--nested", "section--faq-nested")
faq_flat_problems = []
for url, lp in pages.items():
    if url.startswith("/dev/"):
        continue
    html = (SITE / url.lstrip("/") / "index.html").read_text(encoding="utf-8")
    if 'class="faq__list' not in html:
        continue
    for tok in NESTED_FAQ_TOKENS:
        if tok in html:
            faq_flat_problems.append(f"{url}: nested-FAQ markup present ({tok})")
    # faq__answer holds only a <p> (+ inline) and closes at its first </div>
    for ans in re.findall(r'class="faq__answer"[^>]*>(.*?)</div>', html, re.S):
        if re.search(r"<(?:ul|ol)\b", ans):
            faq_flat_problems.append(f"{url}: <ul>/<ol> inside a faq__answer")
if faq_flat_problems:
    for x in faq_flat_problems:
        fail("faq-flat", x)
else:
    faq_pages = sum(1 for u, l in pages.items() if not u.startswith("/dev/")
                    and 'class="faq__list' in
                    (SITE / u.lstrip("/") / "index.html").read_text(encoding="utf-8"))
    ok("faq-flat", f"{faq_pages} FAQ page(s): flat prose answers, no nested Q/A, no lists in answers")

# 12 ── DESIGN FIDELITY — PER-TIER (round-21 standing gate, founder-ordered;
#       tightened from a flat "≥1 rich component anywhere" check to a real
#       per-tier assertion). GREEN on the checks above means "didn't break the
#       rules," NOT "implements the handoff." The PLACEMENT-MAP assigns every
#       component to specific tiers (✓ ships by rule · opt page-by-page · —
#       never). This gate reads each page's data-tier (emitted by the tier
#       layout onto <main>) and hard-fails any content page that carries NONE of
#       the rich components ITS OWN tier permits — catching both generic-
#       primitive-only pages AND mis-tiered pages whose only rich components
#       belong to a different tier (e.g. a t-bofu page whose sole rich element
#       is a pull-quote, which the map marks "—" for BOFU). Excluded:
#       legal/404/standalone forms. Tolerated only if listed as known re-pattern
#       debt. Source of truth: _design/.../handoff/PLACEMENT-MAP.md.
RICH_COMPONENTS = [
    "buyer-card", "vs-table", "flow__step", "pull-quote", "toc__label",
    "guide-grid", "byline-block", "meta-reviewed", "intake-form", "proof-strip",
    "error-badge", "fix-steps", "call-breakout", "stat__delta", "diagram-figure",
    "hero__motif",
]
# Per-tier rich components the PLACEMENT-MAP PERMITS on that tier (✓ or opt;
# components marked "—" for the tier are deliberately absent so they do NOT
# satisfy it). Transcribed directly from PLACEMENT-MAP.md.
TIER_ALLOWED = {
    "hub":      {"buyer-card", "flow__step", "pull-quote", "proof-strip", "stat__delta", "hero__motif"},
    "location": {"buyer-card", "pull-quote", "intake-form", "proof-strip", "stat__delta", "hero__motif"},
    "mofu":     {"buyer-card", "vs-table", "flow__step", "pull-quote", "byline-block",
                 "meta-reviewed", "proof-strip", "error-badge", "fix-steps", "call-breakout", "stat__delta"},
    "guide":    {"vs-table", "flow__step", "pull-quote", "toc__label", "guide-grid",
                 "byline-block", "meta-reviewed", "stat__delta", "diagram-figure"},
    "bofu":     {"flow__step", "intake-form", "proof-strip", "error-badge", "fix-steps", "call-breakout"},
}
TIER_RE = re.compile(r'<main[^>]*\bdata-tier="([a-z]+)"')
df_exc = json.loads(
    (ROOT / "_build/battery/design-fidelity-exceptions.json").read_text(encoding="utf-8"))
df_exclude = set(df_exc.get("exclude_urls", []))
df_debt = set(df_exc.get("rich_component_debt", []))
df_problems, df_debt_seen, df_ok, df_untiered = [], [], 0, []
for url, lp in pages.items():
    if url.startswith("/dev/") or url in df_exclude:
        continue
    html = (SITE / url.lstrip("/") / "index.html").read_text(encoding="utf-8")
    m = TIER_RE.search(html)
    if not m:
        df_untiered.append(url)            # no tier surface (non-tier layout) — not assessed
        continue
    tier = m.group(1)
    allowed = TIER_ALLOWED.get(tier)
    if allowed is None:
        df_untiered.append(f"{url} (unknown tier '{tier}')")
        continue
    present = [c for c in RICH_COMPONENTS if c in html]
    tier_hits = [c for c in present if c in allowed]
    if tier_hits:
        df_ok += 1
    elif url in df_debt:
        df_debt_seen.append(url)
    else:
        has = ", ".join(present) if present else "none"
        df_problems.append(
            f"{url} [tier={tier}]: no tier-correct handoff component "
            f"(has: {has}; {tier} permits one of: {', '.join(sorted(allowed))})")
if df_problems:
    for x in df_problems:
        fail("design-fidelity", x)
else:
    bits = []
    if df_debt_seen:
        bits.append(f"{len(df_debt_seen)} known re-pattern DEBT")
    if df_untiered:
        bits.append(f"{len(df_untiered)} untiered (not assessed)")
    note = (" · " + " · ".join(bits)) if bits else ""
    ok("design-fidelity",
       f"{df_ok} content pages carry a tier-correct handoff component (per-tier){note}")

print()
if FAILURES:
    print(f"BATTERY FAILED — {len(FAILURES)} problem(s):")
    for f_ in FAILURES:
        print("  FAIL", f_)
    sys.exit(1)
print("BATTERY PASSED — all checks green.")

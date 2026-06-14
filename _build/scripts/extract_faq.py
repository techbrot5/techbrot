"""Extract the /quickbooks/faq/ knowledge-base content (clusters + 35 Q/A +
featured-6) from the old kb-* HTML into clean JSON, so the round-21 t-guide
ARTICLE elevation can carry every Q/A VERBATIM (equity + FAQPage schema) onto the
new components. Run: python _build/scripts/extract_faq.py  -> prints JSON."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
html = (ROOT / "quickbooks/faq/index.html").read_text(encoding="utf-8")

# Body only (avoid head schema duplicating the questions).
body = html[html.index("<main"):html.index("</main>")]

# Featured-6 (kb-popular): id-anchor, question, cluster tag.
popular = []
for m in re.finditer(
    r'kb-popular__link"\s+href="#(q\d+)">\s*'
    r'<span class="kb-popular__id">([^<]+)</span>\s*'
    r'<span class="kb-popular__question">(.*?)</span>\s*'
    r'<span class="kb-popular__cluster">([^<]+)</span>', body, re.S):
    popular.append({"anchor": m.group(1), "qid": m.group(2).strip(),
                    "q": m.group(3).strip(), "cluster": m.group(4).strip()})

# Clusters + items.
clusters = []
for cm in re.finditer(
    r'<section class="kb-cluster" id="(cluster-[a-z]+)"[^>]*>(.*?)</section>',
    body, re.S):
    cid, cbody = cm.group(1), cm.group(2)
    num = re.search(r'kb-cluster__number">([^<]+)<', cbody)
    head = re.search(r'kb-cluster__heading"[^>]*>(.*?)</h2>', cbody, re.S)
    lede = re.search(r'kb-cluster__lede">(.*?)</p>', cbody, re.S)
    items = []
    for im in re.finditer(
        r'<li class="kb-item" id="(q\d+)">(.*?)</li>', cbody, re.S):
        qid_anchor, ibody = im.group(1), im.group(2)
        qid = re.search(r'kb-item__id">([^<]+)<', ibody)
        q = re.search(r'kb-item__question">(.*?)</span>', ibody, re.S)
        ab = re.search(r'kb-item__body">(.*?)</div>\s*</details>', ibody, re.S)
        # answer: inner paragraphs, whitespace-normalized, kept as HTML
        answer = ""
        if ab:
            answer = re.sub(r'\s+', ' ', ab.group(1)).strip()
            # the old kb-item answers sometimes embed a btn CTA (Q35) — the new
            # article renders answers as prose, and embedded btn classes break the
            # manifest + cta-lexicon checks. Demote any embedded button to a plain
            # link, and drop the trailing arrow from its text.
            answer = re.sub(r'\s*class="btn[^"]*"', '', answer)
            answer = re.sub(r'\s*data-cta="[^"]*"', '', answer)
            answer = answer.replace(' &rarr;</a>', '</a>')
        items.append({
            "anchor": qid_anchor,
            "qid": (qid.group(1).strip() if qid else ""),
            "q": re.sub(r'\s+', ' ', q.group(1)).strip() if q else "",
            "a": answer,
        })
    clusters.append({
        "id": cid,
        "num": (num.group(1).strip() if num else ""),
        "heading": re.sub(r'\s+', ' ', head.group(1)).strip() if head else "",
        "lede": re.sub(r'\s+', ' ', lede.group(1)).strip() if lede else "",
        "items": items,
    })

total = sum(len(c["items"]) for c in clusters)
out = {"popular": popular, "clusters": clusters,
       "counts": {"clusters": len(clusters), "questions": total,
                  "featured": len(popular)}}
dest = ROOT / "_build/data/faq-content.json"
dest.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print(f"wrote {dest} — {len(clusters)} clusters / {total} questions / {len(popular)} featured")

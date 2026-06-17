#!/usr/bin/env python3
"""Round-48 FL accuracy correction: the Florida commercial-rent ("business rent")
sales tax was repealed effective Oct 1, 2025 (HB 7031). The FL pillar already states
this; the FL service/QB/bkg pages built rounds 44/46/47 wrongly describe it as a
current obligation. This script performs the SAFE, consistent replacements site-wide
(the FL_FACTS "Commercial rent" fact -> a "Services" fact, plus the recurring list
phrasings). Residual contextual prose is corrected per-file afterward and verified
with grep (target: zero 'commercial-rent' in florida/, except a historical repeal note).

Replacement hook (per the pillar, all CURRENT and FL-distinctive):
  - SALES TAX ON SERVICES: FL taxes commercial cleaning, pest control, certain repairs,
    security, commercial laundry that other states exempt.
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2] / "src" / "find-an-accountant" / "florida"

SERVICES_FACT = ('  { fig: "Services", title: "Florida taxes services others exempt", '
  'body: "Unlike most states, Florida taxes a range of <strong>services</strong> &mdash; '
  'commercial cleaning, pest control, certain repairs, security, commercial laundry. Owners '
  'who assume services are exempt routinely under-collect, so we flag taxable vs. exempt '
  'service lines in QuickBooks and apply the right rate." },')

# 1) Replace the whole FL_FACTS "Commercial rent" object line with the Services fact (per file, single line).
FACT_RE = re.compile(r'^\s*\{ fig: "Commercial rent",.*\},\s*$', re.MULTILINE)

# 2) Exact-string list/prose replacements that are safe and consistent across files.
PAIRS = [
    ('the commercial-rent tax, and the tangible personal property return',
     'the taxability of services, and the tangible personal property return'),
    ('the commercial-rent tax, and tangible personal property return',
     'the taxability of services, and the tangible personal property return'),
    ('the commercial-rent tax, and TPP return',
     'the taxability of services, and the TPP return'),
    ('the commercial-rent tax, and TPP', 'service taxability, and TPP'),
    (', the commercial-rent tax,', ', the taxability of services,'),
    (', commercial-rent tax,', ', service taxability,'),
    ('commercial-rent tax; TPP)', 'service taxability; TPP)'),
    ('the commercial-rent (&ldquo;business rent&rdquo;) tax', 'the taxability of services'),
    ('the commercial-rent (business rent) tax and its phase-down, ', ''),
    ('the commercial-rent (business rent) tax, ', ''),
    ('commercial-rent / ', 'service-taxability / '),
]

changed = []
for p in sorted(ROOT.rglob("*.11tydata.js")):
    txt = p.read_text(encoding="utf-8")
    orig = txt
    txt = FACT_RE.sub(SERVICES_FACT, txt)
    for a, b in PAIRS:
        txt = txt.replace(a, b)
    if txt != orig:
        p.write_text(txt, encoding="utf-8")
        changed.append(p.name)

print("files changed:", len(changed))
for n in sorted(changed):
    print("  ", n)

#!/usr/bin/env python3
"""Round-48 FL accuracy correction PART 2: remove all remaining commercial-rent
("business rent") tax references (repealed Oct 1 2025, HB 7031) from the FL pages and
replace with the CURRENT FL-distinctive hook = sales tax on SERVICES (FL taxes services
others exempt). Ordered specific->generic so lease-tied phrasings (which are factually
incompatible with 'services') are handled before the catch-all.

corporate-tax-help.11tydata.js and cities/miami.11tydata.js are EXCLUDED here (hand-rewritten).
After running, grep must show zero 'commercial-rent' in the processed files.
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2] / "src" / "find-an-accountant" / "florida"
EXCLUDE = {"corporate-tax-help.11tydata.js", "miami.11tydata.js"}

# Ordered list: most-specific first. Each is an exact-string replacement.
PAIRS = [
    # --- meta descriptions / "and commercial-rent figures" reconstruct phrasings ---
    ("rebuild sales-tax and commercial-rent figures", "rebuild the sales-tax figures"),
    ("the 6%+surtax sales-tax and commercial-rent figures", "the 6%+surtax sales-tax figures"),
    ("the <strong>6% + county surtax</strong> liability by location and the <a href=\"/find-an-accountant/florida/corporate-tax-help/\">commercial-rent tax</a>",
     "the <strong>6% + county surtax</strong> liability by location and the taxability of any services sold"),
    ("the 6%+surtax sales-tax and commercial-rent figures, and reconstructing", "the 6%+surtax sales-tax figures, and reconstructing"),
    ("reconstructs the 6%+surtax sales-tax and commercial-rent figures", "reconstructs the 6%+surtax sales-tax figures"),
    # --- lease-tied phrasings (reconciliation / error-fixes / migration) ---
    ("and the commercial-rent tax reconciled to the leases and loan balances tied to lender statements",
     "and any taxable services rated correctly, and loan balances tied to lender statements"),
    ("the commercial-rent tax reconciled to the leases", "any taxable services rated correctly"),
    ("reconciles the commercial-rent tax to the leases", "rates any taxable services correctly"),
    ("Reconcile the commercial-rent tax to the leases", "Rate any taxable services correctly"),
    ("the commercial-rent tax to the leases", "taxable services correctly"),
    ("the commercial-rent tax recorded from your leases, and a corporate tax (for C-corps) computed",
     "the taxability of services handled, and a corporate tax (for C-corps) computed"),
    ("the commercial-rent tax recorded from your leases", "the taxability of services handled"),
    ("the commercial-rent tax to record from leases", "service taxability set up correctly"),
    ("the commercial-rent tax that was never recorded, rebuilds the fixed-asset schedule",
     "service taxability that was never set up, rebuilds the fixed-asset schedule"),
    ("the commercial-rent tax that was never recorded", "service taxability that was never set up"),
    ("the commercial-rent tax nobody recorded, and a fixed-asset schedule that was never kept",
     "service taxability nobody set up, and a fixed-asset schedule that was never kept"),
    ("the commercial-rent tax recorded wrong", "service taxability handled wrong"),
    ("commercial-rent tax recorded wrong", "service taxability handled wrong"),
    ("the commercial-rent tax brought across", "service taxability set up"),
    ("the commercial-rent tax configured during the migration so leased-space rent is taxed correctly going forward",
     "service taxability configured during the migration so taxable services are rated correctly going forward"),
    ("configures the commercial-rent tax, and carries", "configures service taxability, and carries"),
    ("configure the commercial-rent tax during the move", "set up service taxability during the move"),
    ("Configure the commercial-rent tax during the migration", "Set up service taxability during the migration"),
    ("the commercial-rent tax on leased space is a line generic bookkeepers miss entirely",
     "the taxability of services is a line generic bookkeepers miss entirely"),
    ("the commercial-rent tax on leased space at the current rate", "service taxability at the right rate"),
    ("the commercial-rent tax on leased space", "the taxability of services"),
    # --- "captured / tracked / watched" list phrasings ---
    ("the commercial-rent tax captured", "service taxability handled"),
    ("commercial-rent tax captured", "service taxability handled"),
    ("the commercial-rent tax watched", "service taxability watched"),
    ("commercial-rent tax watched", "service taxability watched"),
    ("the commercial-rent tax tracked", "service taxability handled"),
    ("commercial-rent tax tracking", "service-taxability handling"),
    ("the commercial-rent-tax rate (being phased down), the county surtax, and reemployment-tax",
     "the county surtax and reemployment-tax"),
    ("commercial-rent-tax rate,", "service taxability,"),
    ("commercial-rent-tax rate", "service taxability"),
    # --- CTA labels ---
    ("Corporate &amp; rent tax &rarr;", "Corporate tax help &rarr;"),
    ("Corporate &amp; rent tax", "Corporate tax"),
    # --- generic catch-alls (last) ---
    ("commercial-rent sales tax", "tax on services"),
    ("the commercial-rent (&ldquo;business rent&rdquo;) tax", "the taxability of services"),
    ("commercial-rent tax", "taxability of services"),
    ("commercial-rent", "service-taxability"),
]

changed = []
for p in sorted(ROOT.rglob("*.11tydata.js")):
    if p.name in EXCLUDE:
        continue
    txt = p.read_text(encoding="utf-8"); orig = txt
    for a, b in PAIRS:
        txt = txt.replace(a, b)
    if txt != orig:
        p.write_text(txt, encoding="utf-8"); changed.append(p.name)

print("files changed:", len(changed))
# residual check across processed files
residual = []
for p in sorted(ROOT.rglob("*.11tydata.js")):
    if p.name in EXCLUDE:
        continue
    n = p.read_text(encoding="utf-8").lower().count("commercial-rent") + p.read_text(encoding="utf-8").lower().count("commercial rent")
    if n:
        residual.append((p.name, n))
print("RESIDUAL in processed files:", residual if residual else "ZERO")

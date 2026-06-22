#!/usr/bin/env python3
"""D1 money fan-out: switch the clear D1-money service pages from t-bofu -> t-money
(new handoff chrome). EXCLUDES pricing/* (F2-Pricing family) and quickbooks/support/*
(ambiguous D2/D7) — those get their own family layouts later. UTF-8 safe."""
import io
pages = [
    "accounting/advisory/fractional-cfo",
    "accounting/bookkeeping/catch-up-bookkeeping",
    "accounting/bookkeeping/monthly-bookkeeping",
    "accounting/payroll-management",
    "accounting/sales-tax-compliance",
    "quickbooks/cleanup",
    "quickbooks/migration",
    "quickbooks/migration/desktop-to-online",
    "quickbooks/migration/freshbooks-to-quickbooks",
    "quickbooks/migration/migration-cleanup",
    "quickbooks/migration/other-software-to-qb",
    "quickbooks/migration/quickbooks-to-xero",
    "quickbooks/migration/sage-to-quickbooks",
    "quickbooks/migration/wave-to-quickbooks",
    "quickbooks/migration/xero-to-quickbooks",
    "quickbooks/payroll",
    "quickbooks/proadvisor-near-me",
    "quickbooks/setup",
]
OLD, NEW = '"layout": "layouts/t-bofu.njk"', '"layout": "layouts/t-money.njk"'
done, skip = [], []
for p in pages:
    fp = f"src/{p}.njk"
    t = io.open(fp, encoding="utf-8").read()
    if OLD in t:
        io.open(fp, "w", encoding="utf-8", newline="").write(t.replace(OLD, NEW, 1))
        done.append(p)
    else:
        skip.append(p)
print(f"switched {len(done)} pages t-bofu -> t-money")
if skip:
    print("SKIPPED (no t-bofu layout line found):")
    for p in skip: print("  ", p)

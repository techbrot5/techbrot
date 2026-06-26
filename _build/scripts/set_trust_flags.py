"""Set trust-strip flags in page ---json frontmatter (idempotent).
Service hubs -> showBadges (badge only). Pricing pages -> showBadges + proofStrip (both).
Inserts the flag line(s) right after the "slug": line, matching its indentation.
Skips a file if the flag is already present. Does NOT touch the gated service-prose group."""
import re, sys

HUBS = [  # badge only
    "src/quickbooks.njk", "src/accounting.njk", "src/accounting/bookkeeping/bookkeeping.njk",
    "src/accounting/advisory.njk", "src/accounting/services.njk", "src/accounting/industries.njk",
    "src/accounting/tax/index.njk", "src/accounting-systems/index.njk",
    "src/quickbooks/online/features/index.njk", "src/quickbooks/online/advanced/index.njk",
    "src/quickbooks/online/integrations/index.njk", "src/quickbooks/reconciliation/index.njk",
    "src/quickbooks/compare/index.njk", "src/switch/index.njk", "src/platforms/index.njk",
    "src/find-an-accountant/index.njk", "src/vs.njk",
]
PRICING = [  # both strips
    "src/pricing.njk", "src/pricing/bookkeeping.njk", "src/pricing/cleanup.njk",
    "src/pricing/payroll.njk", "src/pricing/cfo.njk", "src/pricing/quickbooks-setup.njk",
    "src/find-an-accountant/california/pricing.njk", "src/find-an-accountant/texas/pricing.njk",
    "src/find-an-accountant/florida/pricing.njk", "src/find-an-accountant/illinois/pricing.njk",
    "src/find-an-accountant/new-york/pricing.njk", "src/find-an-accountant/delaware/pricing.njk",
    "src/find-an-accountant/indiana/pricing.njk",
]

def apply(path, flags):
    with open(path, encoding="utf-8") as f:
        txt = f.read()
    if all(('"%s"' % k) in txt for k in flags):
        return "skip (already set)"
    m = re.search(r'^([ \t]*)"slug"\s*:', txt, re.M)
    if not m:
        return "ERROR: no slug line"
    indent = m.group(1)
    ins = "".join('%s"%s": true,\n' % (indent, k) for k in flags if ('"%s"' % k) not in txt)
    line_end = txt.index("\n", m.start()) + 1
    txt = txt[:line_end] + ins + txt[line_end:]
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(txt)
    return "set " + ",".join(flags)

print("=== HUBS (showBadges) ===")
for p in HUBS:
    print("  %-55s %s" % (p, apply(p, ["showBadges"])))
print("=== PRICING (showBadges + proofStrip) ===")
for p in PRICING:
    print("  %-55s %s" % (p, apply(p, ["showBadges", "proofStrip"])))

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

SERVICE_PROSE = [  # both strips — founder-confirmed hire-intent service prose
    # accounting services (15)
    "src/accounting/1099-preparation.njk", "src/accounting/accounts-payable.njk",
    "src/accounting/accounts-receivable.njk", "src/accounting/chart-of-accounts-setup.njk",
    "src/accounting/financial-statements.njk", "src/accounting/job-costing.njk",
    "src/accounting/month-end-close.njk", "src/accounting/new-business-setup.njk",
    "src/accounting/online-bookkeeping.njk", "src/accounting/outsourced-bookkeeping.njk",
    "src/accounting/profitability-analysis.njk", "src/accounting/reconciliation-services.njk",
    "src/accounting/small-business-accounting.njk", "src/accounting/startup-accounting.njk",
    "src/accounting/year-end-review.njk",
    # bookkeeping (3)
    "src/accounting/bookkeeping/cleanup-bookkeeping.njk",
    "src/accounting/bookkeeping/monthly-bookkeeping.njk",
    "src/accounting/bookkeeping/catch-up-bookkeeping.njk",
    # accounting/services children (3)
    "src/accounting/services/controller-services.njk",
    "src/accounting/services/outsourced-accounting.njk",
    "src/accounting/services/virtual-accounting.njk",
    # advisory (7)
    "src/accounting/advisory/fractional-cfo.njk", "src/accounting/advisory/cash-flow-management.njk",
    "src/accounting/advisory/budgeting-forecasting.njk", "src/accounting/advisory/financial-strategy.njk",
    "src/accounting/advisory/kpi-reporting.njk", "src/accounting/advisory/business-performance-review.njk",
    "src/accounting/advisory/tax-planning.njk",
    # qb cleanup (11)
    "src/quickbooks/cleanup/standard.njk", "src/quickbooks/cleanup/complex.njk",
    "src/quickbooks/cleanup/focused.njk", "src/quickbooks/cleanup/accountant-review.njk",
    "src/quickbooks/cleanup/after-prior-bookkeeper.njk", "src/quickbooks/cleanup/before-monthly-bookkeeping.njk",
    "src/quickbooks/cleanup/cleanup-vs-reconciliation.njk", "src/quickbooks/cleanup/forcing-reconciliation-risks.njk",
    "src/quickbooks/cleanup/prior-owner-setup-issues.njk", "src/quickbooks/cleanup/structural-issues.njk",
    "src/quickbooks/cleanup/undeposited-funds.njk",
    # qb setup (2)
    "src/quickbooks/setup/new-business.njk", "src/quickbooks/setup/migration-from-spreadsheets.njk",
    # qb service singles (5)
    "src/quickbooks/bookkeeping-services.njk", "src/quickbooks/hire-a-proadvisor.njk",
    "src/quickbooks/proadvisor-cost.njk", "src/quickbooks/consulting.njk", "src/quickbooks/training.njk",
    # switch (4)
    "src/switch/from-bench.njk", "src/switch/from-pilot.njk",
    "src/switch/from-quickbooks-live.njk", "src/switch/from-your-bookkeeper.njk",
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
print("=== SERVICE PROSE (showBadges + proofStrip) ===")
for p in SERVICE_PROSE:
    print("  %-55s %s" % (p, apply(p, ["showBadges", "proofStrip"])))

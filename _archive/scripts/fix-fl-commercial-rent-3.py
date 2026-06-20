#!/usr/bin/env python3
"""Round-48 FL correction PART 2c: replace the remaining commercial-rent VALUE CARDS and the
conceptually-broken lease/rent sentences (services-taxability is NOT about leased space or
reconciling to leases) with correct sales-tax-on-services wording. Exact-string pairs only.
Excludes corporate-tax-help.11tydata.js (hand-rewritten) and cities/miami.11tydata.js."""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2] / "src" / "find-an-accountant" / "florida"

EDITS = {
"bookkeeping-services.11tydata.js": [
 ('{ num: "03", title: "Commercial-rent tax captured", body: "The business-rent tax on leased commercial space recorded correctly &mdash; the line a generic bookkeeper misses.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "03", title: "Sales tax on services", body: "Florida taxes many services other states exempt &mdash; we flag taxable service lines so they&rsquo;re rated correctly, the line a generic bookkeeper misses.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
 ('the <strong>taxability of services</strong> on leased space is a line generic bookkeepers miss',
  'the <strong>taxability of services</strong> Florida applies that other states exempt is a line generic bookkeepers miss'),
 ('If the file has fallen behind or missed the rent tax, we bring it to a CPA-ready standard first.',
  'If the file has fallen behind or mis-taxed services, we bring it to a CPA-ready standard first.'),
 ('service taxability handled on leased space, a maintained fixed-asset',
  'service taxability handled correctly, a maintained fixed-asset'),
 ('or the rent tax was never recorded, we scope a one-time cleanup',
  'or taxable services were mis-rated, we scope a one-time cleanup'),
],
"cleanup-bookkeeping.11tydata.js": [
 ('{ num: "03", title: "Commercial-rent figures reconstructed", body: "The taxability of services rebuilt for the missing periods so your CPA can address it.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "03", title: "Service-tax figures reconstructed", body: "Taxable service lines rebuilt for the missing periods so the sales-tax figures are right for your CPA.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
],
"monthly-bookkeeping.11tydata.js": [
 ('keeps the sales tax, rent tax, and (for C-corps) the corporate-tax position accurate all year',
  'keeps the sales tax, service taxability, and (for C-corps) the corporate-tax position accurate all year'),
],
"quickbooks-accountant.11tydata.js": [
 ('the <strong>tax on services</strong> applies if you lease space, and the annual',
  'the <strong>tax on services</strong> applies to many services others exempt, and the annual'),
 ('the <strong>tax on services</strong> on leased space, an annual',
  'the <strong>tax on services</strong> Florida applies that others exempt, an annual'),
 ('a tax on services if you lease space, an annual',
  'a tax on many services others exempt, an annual'),
 ('the FL service-taxability / "business rent" sales tax',
  'the FL service-taxability angle (Florida taxes services other states exempt)'),
],
"quickbooks-cleanup.11tydata.js": [
 ('{ num: "02", title: "Commercial-rent tax added", body: "The business-rent tax on leased space recorded correctly &mdash; the line that was missing entirely &mdash; so your CPA can address prior periods.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "02", title: "Service taxability corrected", body: "Taxable services that were mapped as exempt corrected &mdash; a commonly missed Florida line &mdash; so the sales-tax return ties.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
 ('the <strong>taxability of services never recorded</strong> on leased space, or a <strong>fixed-asset',
  'the <strong>taxability of services handled wrong</strong> (Florida taxes services others exempt), or a <strong>fixed-asset'),
 ('the taxability of services never recorded on leased space, or a fixed-asset schedule',
  'the taxability of services handled wrong, or a fixed-asset schedule'),
],
"quickbooks-error-fixes.11tydata.js": [
 ('{ num: "03", title: "Commercial-rent tax recorded wrong", body: "The business-rent tax mishandled or missing &mdash; found and corrected so leased-space rent is taxed right.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "03", title: "Service taxability wrong", body: "Taxable services mapped as exempt or rated wrong &mdash; found and corrected so the sales-tax return ties.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
],
"quickbooks-migration.11tydata.js": [
 ('{ num: "04", title: "Commercial-rent tax configured", body: "The business-rent tax configured during the migration so leased-space rent is taxed correctly going forward.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "04", title: "Service taxability configured", body: "Taxable service lines set up during the migration so Florida&rsquo;s tax on services is rated correctly going forward.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
],
"quickbooks-reconciliation.11tydata.js": [
 ('{ num: "03", title: "Commercial-rent &amp; loan accounts", body: "The taxability of services reconciled to the leases and loan balances tied to lender statements so nothing hides in suspense.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "03", title: "Loan &amp; clearing accounts", body: "Loan balances tied to lender statements and clearing accounts zeroed so nothing hides in suspense.", href: "/find-an-accountant/florida/bookkeeping-services/", cta: "Bookkeeping services &rarr;" },'),
 ('the <strong>taxability of services</strong> has to reconcile to the leases, and the <strong>TPP return</strong>',
  '<strong>taxable services</strong> have to be rated correctly, and the <strong>TPP return</strong>'),
 ('the taxability of services has to reconcile to the leases, and the tangible personal property return',
  'taxable services have to be rated correctly, and the tangible personal property return'),
 ('reconciling the taxability of services to leases, and verifying the figures behind the 5.5% corporate tax',
  'rating taxable services correctly, and verifying the figures behind the 5.5% corporate tax'),
],
"quickbooks-setup.11tydata.js": [
 ('{ num: "03", title: "Commercial-rent tax configured", body: "The business-rent tax on leased space set up to record correctly from day one so your CPA can file it.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "03", title: "Service taxability configured", body: "Taxable service lines set up from day one so Florida&rsquo;s tax on services is rated correctly &mdash; the line generic setups miss.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
 ('the <strong>taxability of services</strong> recorded from leases, and a <strong>fixed-asset schedule</strong>',
  'the <strong>taxability of services</strong> set up correctly, and a <strong>fixed-asset schedule</strong>'),
],
"quickbooks-training.11tydata.js": [
 ('{ num: "02", title: "Commercial-rent tax", body: "Train your team to record the business-rent tax on leased space &mdash; the line most people don&rsquo;t know exists.", href: "/find-an-accountant/florida/corporate-tax-help/", cta: "Corporate tax help &rarr;" },',
  '{ num: "02", title: "Sales tax on services", body: "Train your team to rate taxable services correctly &mdash; Florida taxes services many people assume are exempt.", href: "/find-an-accountant/florida/sales-tax-help/", cta: "Sales tax help &rarr;" },'),
],
}

miss = []
for fname, pairs in EDITS.items():
    p = ROOT / fname
    txt = p.read_text(encoding="utf-8")
    for a, b in pairs:
        if a not in txt:
            miss.append((fname, a[:60]))
        txt = txt.replace(a, b)
    p.write_text(txt, encoding="utf-8")
print("MISSED (string not found):", miss if miss else "none")

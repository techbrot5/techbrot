#!/usr/bin/env python3
"""Round-48 FL correction: the Miami city page (pre-existing) also frames the commercial-rent
sales tax as a current/phasing tax. It was REPEALED effective Oct 1, 2025 (HB 7031). Replace the
commercial-rent framing with the corrected FL stack (taxability of services + corporate + surtax),
and where the tax is named, state the repeal. Exact-string pairs."""
import pathlib
p = pathlib.Path(__file__).resolve().parents[2] / "src" / "find-an-accountant" / "florida" / "cities" / "miami.11tydata.js"
t = p.read_text(encoding="utf-8")

PAIRS = [
 # comments
 (' * tax item here is the COMMERCIAL RENT SALES TAX (historically unique to Florida; now',
  ' * tax stack here is the SALES TAX ON SERVICES (Florida taxes services others exempt); the'),
 (" * HONESTY: real facts only; corporate-income-tax, the changing commercial-rent-tax rate,",
  " * HONESTY: real facts only; corporate-income-tax, the taxability of services,"),
 # meta description (line 30)
 ("Florida's no-income-tax structure, 7% sales tax, and the commercial-rent sales tax. Fixed-fee.",
  "Florida's no-income-tax structure, ~7% sales tax, the 5.5% corporate tax, and the taxability of services. Fixed-fee."),
 # subheading
 ("the 7% sales tax, and the commercial-rent sales tax handled.",
  "the ~7% sales tax, and Florida&rsquo;s taxability of services handled."),
 # ctaBand lede
 ("the 7% sales tax, the commercial-rent sales tax, reemployment tax",
  "the ~7% sales tax, Florida&rsquo;s taxability of services, reemployment tax"),
 # summarized
 ("the <strong>commercial-rent sales tax</strong> (historically unique to Florida, now being phased down), and <strong>reemployment tax</strong>",
  "the <strong>taxability of services</strong> (Florida taxes services other states exempt), and <strong>reemployment tax</strong>"),
 # aiSummary "Does Florida have a state income tax"
 ("a <strong>commercial-rent sales tax</strong>, and <strong>reemployment tax</strong>. We track all of it; the Florida Department of Revenue",
  "the <strong>taxability of services</strong>, and <strong>reemployment tax</strong>. We track all of it; the Florida Department of Revenue"),
 # aiSummary commercial-rent Q/A -> repeal Q/A
 ('{ q: "What is the commercial-rent sales tax?", a: "Florida is the one state that has taxed <strong>commercial real-property rent</strong> through sales tax. The rate has been reduced over time and is being phased down. For Miami&rsquo;s dense commercial leasing, it means rent paid on business space can carry sales tax that must be tracked. We track it in your books; the current rate and any change are confirmed with the Florida Department of Revenue and your CPA." }',
  '{ q: "Did Florida tax commercial rent?", a: "It did &mdash; Florida was the only state to tax commercial real-property rent, but that &ldquo;business rent tax&rdquo; was <strong>repealed effective Oct 1, 2025</strong> (HB 7031) and <strong>no longer applies</strong>. For Miami&rsquo;s dense commercial leasing that&rsquo;s a real saving; if you have open pre-repeal periods, your CPA addresses them. We don&rsquo;t treat it as a current tax. What does apply: Florida&rsquo;s tax on many <strong>services</strong> others exempt." }'),
 # localContext sentence (line 89)
 ("the <strong>commercial-rent sales tax</strong> &mdash; the one state that has taxed commercial rent, now being phased down, which matters for Miami&rsquo;s commercial leasing &mdash; the <strong>5.5% corporate income tax</strong>",
  "the <strong>taxability of services</strong> &mdash; Florida taxes many services other states exempt, which catches Miami service businesses off guard &mdash; the <strong>5.5% corporate income tax</strong>"),
 # localContext result (line 90)
 ("sales tax and commercial-rent tax handled, the corporate-income-tax position clear",
  "sales tax and service taxability handled, the corporate-income-tax position clear"),
 # taxStack "Rent tax" figure (line 105)
 ('{ figure: "Rent tax", desc: "Florida <strong>commercial-rent sales tax</strong> &mdash; the one state that has taxed commercial real-property rent through sales tax, now being phased down. For Miami&rsquo;s dense commercial leasing, rent on business space can carry this tax. We track it; the current rate stays with the DOR and your CPA." }',
  '{ figure: "Services", desc: "Florida taxes a range of <strong>services</strong> other states exempt &mdash; commercial cleaning, pest control, security, certain repairs. Miami service businesses that assume they&rsquo;re exempt under-collect; we flag taxable service lines in QuickBooks. (Note: Florida&rsquo;s old commercial-rent tax was repealed Oct 2025.)" }'),
 # taxNote
 ("The corporate-income-tax rate, the commercial-rent-tax rate (being phased down), the county surtax, and reemployment-tax rates change",
  "The corporate-income-tax rate, the county surtax, the taxability of specific services, and reemployment-tax rates change"),
 # value card 04
 ("Books structured so your CPA can file Florida sales tax and the commercial-rent tax accurately, with the corporate-income-tax position clear for C-corps.",
  "Books structured so your CPA can file Florida sales tax (including on taxable services) accurately, with the corporate-income-tax position clear for C-corps."),
 # advisoryBody
 ("your Florida sales and rent tax are handled, and your C-corp income-tax position is clear",
  "your Florida sales tax and service taxability are handled, and your C-corp income-tax position is clear"),
 # faq income-tax
 ("the commercial-rent sales tax, and reemployment tax. We track all of it in your books",
  "the taxability of services, and reemployment tax. We track all of it in your books"),
 # faq commercial-rent Q/A -> repeal
 ('{ q: "What is Florida\'s commercial-rent sales tax?", a: "Florida is the only state that has imposed sales tax on commercial real-property rent. The rate has been reduced over the past several years and is being phased down. For a Miami business leasing commercial space, it means the rent can carry a sales tax that should be tracked and, where you&rsquo;re the landlord, collected and remitted. We track it in your books; the current rate and any scheduled change are confirmed with the Florida Department of Revenue and your CPA." }',
  '{ q: "Did Florida used to tax commercial rent?", a: "Yes &mdash; Florida was the only state to impose sales tax on commercial real-property rent, the &ldquo;business rent tax,&rdquo; and the rate was reduced repeatedly before being <strong>repealed effective Oct 1, 2025</strong> (HB 7031). It no longer applies, so Miami landlords and tenants no longer collect or remit it. We mention it only because older guidance references it; if you have open pre-repeal periods, your CPA addresses them. What does apply is Florida&rsquo;s tax on many services other states exempt." }'),
 # cityMeta description
 ("~7% sales tax, and the commercial-rent sales tax. Fixed-fee, named bookkeeper.",
  "~7% sales tax, and the taxability of services. Fixed-fee, named bookkeeper."),
 # cityMeta serviceDesc
 ("Florida sales tax (~7%), the commercial-rent sales tax, and the 5.5% corporate income tax for C-corps handled.",
  "Florida sales tax (~7%), the taxability of services, and the 5.5% corporate income tax for C-corps handled."),
]
miss = []
for a, b in PAIRS:
    if a not in t:
        miss.append(a[:70])
    t = t.replace(a, b)
p.write_text(t, encoding="utf-8")
print("MISSED:", miss if miss else "none")
print("residual commercial/business-rent in miami:", t.lower().count("commercial-rent") + t.lower().count("commercial rent") + t.lower().count("business rent") + t.lower().count("rent tax") + t.lower().count("rent-tax"))

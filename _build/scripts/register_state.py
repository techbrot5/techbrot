#!/usr/bin/env python3
"""register_state.py — register a new location-silo state with the build contract.
Reusable for every T5 state (DE, IN, + 12 core). Does two things, idempotently:
  1. Adds every built /find-an-accountant/<slug>/** URL (from _site) to
     _build/build-new-queue.json "urls" (so the url-set battery check passes — new
     additive pages live in the queue; the original 139 are in the frozen baseline).
  2. Ensures the state's CTA intents (<slug> and <slug>-advisory) exist in
     src/_data/intents.json (so the intents battery check passes). Per-state intent
     copy lives in the STATES dict below — add an entry per state as it's built.

Usage:  python _build/scripts/register_state.py <slug>
        e.g. python _build/scripts/register_state.py delaware
Run AFTER a full build (the script reads _site to discover the state's real URLs).
"""
import json, sys, io
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / "_site"
QUEUE = ROOT / "_build/build-new-queue.json"
INTENTS = ROOT / "src/_data/intents.json"

# Per-state intent copy (state-distinct — author one block per state as it's built).
STATES = {
    "delaware": {
        "name": "Delaware",
        "intent": {
            "headline": "Tell us about your Delaware books.<br>We&rsquo;ll handle the rest.",
            "lede": "A Certified QuickBooks ProAdvisor reviews where your Delaware books stand &mdash; gross receipts tax by activity, franchise-tax reserve, holding-company or out-of-state-owner structure &mdash; recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. We don&rsquo;t file Delaware returns or the franchise tax; we coordinate with your CPA and registered agent. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so.",
            "service": "not-sure",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — DE anchor pillar (real-address LocalBusiness). State-slug intent.",
        },
        "advisory": {
            "headline": "Advisory for Delaware businesses<br>ready to move beyond the books.",
            "lede": "Fractional CFO and advisory for Delaware businesses &mdash; forecasting, board reporting, KPI design &mdash; coordinated with your Delaware CPA. A Certified ProAdvisor reviews your situation and tells you honestly whether advisory is the right next step.",
            "service": "fractional-cfo",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — DE advisory route.",
        },
    },
    "indiana": {
        "name": "Indiana",
        "intent": {
            "headline": "Tell us about your Indiana books.<br>We&rsquo;ll handle the rest.",
            "lede": "A Certified QuickBooks ProAdvisor reviews where your Indiana books stand &mdash; the 92-county local income tax (LIT) withholding by county of residence, the flat 7% sales tax, business personal-property posture, multi-state nexus for shippers &mdash; recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. We don&rsquo;t file Indiana returns; we keep clean, CPA-ready books and coordinate with your CPA. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so.",
            "service": "not-sure",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — IN anchor pillar (areaServed-only, no street address). State-slug intent.",
        },
        "advisory": {
            "headline": "Advisory for Indiana businesses<br>ready to move beyond the books.",
            "lede": "Fractional CFO and advisory for Indiana businesses &mdash; forecasting, board reporting, KPI design &mdash; coordinated with your Indiana CPA. A Certified ProAdvisor reviews your situation and tells you honestly whether advisory is the right next step.",
            "service": "fractional-cfo",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — IN advisory route.",
        },
    },
    "pennsylvania": {
        "name": "Pennsylvania",
        "intent": {
            "headline": "Tell us about your Pennsylvania books.<br>We&rsquo;ll handle the rest.",
            "lede": "A Certified QuickBooks ProAdvisor reviews where your Pennsylvania books stand &mdash; Act 32 local Earned Income Tax (EIT) withholding by PSD code under the &ldquo;higher-of&rdquo; rule, the Local Services Tax, Philadelphia&rsquo;s Wage/NPT/BIRT taxes, and sales-tax sourcing across the 6% / 7% / 8% split &mdash; recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. We don&rsquo;t file Pennsylvania returns or the local EIT; we keep clean, CPA-ready books and coordinate with your CPA. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so.",
            "service": "not-sure",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — PA core-state pillar (areaServed-only, no street address). State-slug intent.",
        },
        "advisory": {
            "headline": "Advisory for Pennsylvania businesses<br>ready to move beyond the books.",
            "lede": "Fractional CFO and advisory for Pennsylvania businesses &mdash; forecasting, board reporting, KPI design, multi-state nexus planning &mdash; coordinated with your Pennsylvania CPA. A Certified ProAdvisor reviews your situation and tells you honestly whether advisory is the right next step.",
            "service": "fractional-cfo",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — PA advisory route.",
        },
    },
    "new-jersey": {
        "name": "New Jersey",
        "intent": {
            "headline": "Tell us about your New Jersey books.<br>We&rsquo;ll handle the rest.",
            "lede": "A Certified QuickBooks ProAdvisor reviews where your New Jersey books stand &mdash; the UI/TDI/FLI/WF payroll stack across both wage bases, PA&ndash;NJ reciprocity and the NJ-165, Newark and Jersey City payroll taxes, the 6.625% sales tax with its UEZ/Salem half-rate, and BAIT coordination &mdash; recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. We don&rsquo;t file New Jersey returns or the payroll filings; we keep clean, CPA-ready books and coordinate with your CPA. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so.",
            "service": "not-sure",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — NJ core-state pillar (areaServed-only, no street address). State-slug intent.",
        },
        "advisory": {
            "headline": "Advisory for New Jersey businesses<br>ready to move beyond the books.",
            "lede": "Fractional CFO and advisory for New Jersey businesses &mdash; forecasting, board reporting, KPI design, BAIT and multi-state nexus planning &mdash; coordinated with your New Jersey CPA. A Certified ProAdvisor reviews your situation and tells you honestly whether advisory is the right next step.",
            "service": "fractional-cfo",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — NJ advisory route.",
        },
    },
    "maryland": {
        "name": "Maryland",
        "intent": {
            "headline": "Tell us about your Maryland books.<br>We&rsquo;ll handle the rest.",
            "lede": "A Certified QuickBooks ProAdvisor reviews where your Maryland books stand &mdash; the county &ldquo;piggyback&rdquo; local income tax by county of residence on Form MW507, DC/PA/VA/WV reciprocity for cross-border staff, the new 3% sales tax on data and IT services, and the PTE election &mdash; recommends the right engagement, and delivers a written fixed-fee scope within 3 business days. We don&rsquo;t file Maryland returns or the local income tax; we keep clean, CPA-ready books and coordinate with your CPA. If TechBrot isn&rsquo;t the right fit, we&rsquo;ll say so.",
            "service": "not-sure",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — MD core-state pillar (areaServed-only, no street address). State-slug intent.",
        },
        "advisory": {
            "headline": "Advisory for Maryland businesses<br>ready to move beyond the books.",
            "lede": "Fractional CFO and advisory for Maryland businesses &mdash; forecasting, board reporting, KPI design, PTE and multi-state nexus planning &mdash; coordinated with your Maryland CPA. A Certified ProAdvisor reviews your situation and tells you honestly whether advisory is the right next step.",
            "service": "fractional-cfo",
            "cta": "Book the discovery call",
            "_added": "T5 location expansion — MD advisory route.",
        },
    },
}


def main(slug):
    if slug not in STATES:
        sys.exit(f"No STATES entry for '{slug}' — add its intent copy to register_state.py first.")
    cfg = STATES[slug]

    # 1 ── URLs → queue
    urls = sorted({
        "/" + p.relative_to(SITE).parent.as_posix() + "/"
        for p in SITE.rglob("index.html")
        if p.relative_to(SITE).as_posix().startswith(f"find-an-accountant/{slug}/")
        or p.relative_to(SITE).parent.as_posix() == f"find-an-accountant/{slug}"
    })
    q = json.loads(QUEUE.read_text(encoding="utf-8"))
    have = set(q["urls"])
    added = [u for u in urls if u not in have]
    q["urls"] = sorted(have | set(urls))
    QUEUE.write_text(json.dumps(q, ensure_ascii=False, indent=1), encoding="utf-8")

    # 2 ── intents
    d = json.loads(INTENTS.read_text(encoding="utf-8"))
    I = d["intents"]
    added_intents = []
    for key, block in ((slug, cfg["intent"]), (f"{slug}-advisory", cfg["advisory"])):
        if key not in I:
            I[key] = block
            added_intents.append(key)
    INTENTS.write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")

    out = io.StringIO()
    print(f"[register_state] {slug}: {len(urls)} state URLs in queue (+{len(added)} new); "
          f"intents added: {added_intents or 'none (already present)'}", file=out)
    sys.stdout.buffer.write(out.getvalue().encode("utf-8"))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "delaware")

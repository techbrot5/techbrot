#!/usr/bin/env python3
"""soften_proadvisor_verify.py — honesty fix (founder 2026-06-26).
The "Verifiable on Intuit's public ProAdvisor directory" claim implies each TechBrot operator is
individually listed/findable on Intuit's directory — which we cannot confirm. Per the no-fake-
verification rule, soften it to an honest GENERIC statement about the directory (it exists; active
ProAdvisors are listed there) without asserting our specific operators are individually verifiable.

SCOPE: the find-an-accountant LOCATION SILO only (state pillars + hubs). The ~50 other sitewide
occurrences (quickbooks/*, glossary, trust, error-codes, pricing) are a SEPARATE flagged sweep —
NOT touched here. Idempotent: re-running finds nothing to change.
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SILO = ROOT / "src/find-an-accountant"

# (exact source, replacement). Order matters: the longer ProAdvisor-directory string before the
# shorter public-directory string so neither is a partial of the other mid-replace.
RULES = [
    # credLede + "why" cards: ". Verifiable on Intuit's ProAdvisor directory." → generic directory fact.
    (". Verifiable on Intuit&rsquo;s public ProAdvisor directory.",
     ". Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors for verification."),
    # reviewCreds / hub cred footers / operatorStandards: drop the appended "— verifiable …" clause.
    (" &mdash; verifiable on Intuit&rsquo;s public ProAdvisor directory", ""),
    (" &mdash; verifiable on Intuit&rsquo;s public directory", ""),
    (" &middot; verifiable on Intuit&rsquo;s public directory", ""),
    # national hub index card: "Credentials verifiable on Intuit's public directory." → generic.
    ("Credentials verifiable on Intuit&rsquo;s public directory.",
     "Intuit&rsquo;s public ProAdvisor directory lists active ProAdvisors."),
]


def main():
    total = 0
    touched = []
    for p in sorted(SILO.rglob("*.11tydata.js")):
        txt = p.read_text(encoding="utf-8")
        orig = txt
        n = 0
        for src, dst in RULES:
            c = txt.count(src)
            if c:
                txt = txt.replace(src, dst)
                n += c
        if txt != orig:
            p.write_text(txt, encoding="utf-8")
            touched.append((p.relative_to(ROOT).as_posix(), n))
            total += n
    for f, n in touched:
        print(f"  {n:>2}  {f}")
    print(f"[soften_proadvisor_verify] {total} replacements across {len(touched)} files")
    # residual check (silo only)
    residual = 0
    for p in SILO.rglob("*.11tydata.js"):
        residual += p.read_text(encoding="utf-8").lower().count("verifiable on intuit")
    print(f"[soften_proadvisor_verify] residual 'verifiable on intuit' in silo data files: {residual}")


if __name__ == "__main__":
    main()

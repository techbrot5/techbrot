# Round 65 — GLOSSARY EXPANSION (24 → 46 terms)

Founder-queued lane after the support silo. Expanded the glossary from 24 to **46 terms** — all real,
accurate, substantive definitions (AI-citation magnets) that internal-link into the money/service pages.
Architecture = data-only: 22 new term objects appended to `src/_data/glossary.js`; `entry.njk` paginates
them into `/glossary/<slug>/` and the `/glossary/` index auto-lists them. No new templates. Battery GREEN.

## 22 NEW TERMS
- **Core accounting (11):** accrued-expenses, prepaid-expenses, fixed-assets, operating-expenses, owners-equity,
  owners-draw, working-capital, gross-margin, write-off, net-income, amortization.
- **QuickBooks-specific (5):** undeposited-funds, class-tracking, bank-feeds, audit-trail, memorized-transaction.
- **Tax / payroll / SMB (6):** w-9-form, 1099-nec, ein, estimated-taxes, payroll-liabilities, fiscal-year.

## PREVIEW (LAN dev http://192.168.11.1:8080)
- /glossary/ (index auto-updated, now 46 terms A–Z)
- e.g. /glossary/undeposited-funds/ · /glossary/owners-draw/ · /glossary/1099-nec/ · /glossary/working-capital/ · /glossary/amortization/

## HONESTY
- Accurate definitions only; firm voice; founder-name-zero; no fabricated stats/counts.
- Tax-adjacent terms are educational-only and defer filing/eligibility/advice to the CPA/EA + IRS:
  estimated-taxes, w-9-form, 1099-nec, ein, owners-draw (salary-vs-draw), write-off (tax treatment),
  fiscal-year (tax-year election), payroll-liabilities (trust-fund seriousness noted; filing via Intuit payroll/CPA).
- QuickBooks terms describe accurate behavior, no invented Intuit internals; bank-feeds explicitly noted as NOT a
  completed reconciliation; independent firm / not Intuit.
- Each term cross-links to real money/service pages + sibling glossary terms (DefinedTerm + speakable + CALL).

## VERIFICATION
- **BATTERY GREEN** (exit 0): 46/46 unique slugs, JS module loads clean (node-validated), design-fidelity 383
  content pages, faq-flat, url-set (22 new /glossary/* added to build-new-queue.json), cta-lexicon, manifest, variety.
- No new CSS (data-only on the proven entry template).
- a11y/overflow: chrome ENV-BLOCKED → static-proxy + byte-equivalence to the proven glossary entry template;
  the 22 new terms join flip-blocker #6's inferred-clean list (LIVE axe/overflow pending on founder's machine).
- Spliced via `_build/scripts/splice_glossary.py` (one-off); temp fragments cleaned up.

## COUNT
COUNT: total pages live = 391 · re-skinned (142) + growth this phase = 249 · pages added THIS round = 22 glossary
terms (glossary now 46) · both founder-queued lanes COMPLETE (support silo 51 + glossary 22) · next = founder's call.

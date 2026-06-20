# Round 23 — Path B migration: silo 1 (QuickBooks) wave 2 — payroll cluster (5 pages)
Date: 2026-06-15 · Branch: preview-11ty · Reviewer + strategy-Claude copy
(Per standing rule R1. Stands alone. Flags weaknesses; does not defend.)
First wave under the drift-hardened MIGRATION-PROTOCOL (R3).

---

## 1. WHAT I DID
Migrated + enriched 5 payroll baselines (content-to-goal / visual-floor):
- /quickbooks/payroll/setup/ (t-mofu)
- /quickbooks/payroll/multi-state/ (t-mofu)
- /quickbooks/payroll/year-end/ (t-mofu)
- /quickbooks/payroll/vs-gusto/ (t-mofu comparison)
- /quickbooks/payroll/faq/ (t-guide — 32-question hub)

Files: the 5 `.njk` + `.11tydata.js` pairs under `src/quickbooks/payroll/`;
`_build/battery/equity-exceptions.json` (5 standing newsletter exceptions). Commit `17a2712`.
**Also restored** 9 historical round reports (round-7…13) that a stray `git add -A` had
staged for deletion this turn — see §5.

---

## 2. PREVIEW URLS (open these to review)

| Page | URL | What to check / citable specific added |
|---|---|---|
| Payroll setup | https://techbrot-preview.pages.dev/quickbooks/payroll/setup/ | 8 setup categories + 3 pricing tiers + setup-error grid. **Added:** EFTPS enrollment, Form 941 quarterly, per-state withholding + SUI accounts via different agencies, the 2–6 week per-state registration lead time. |
| Multi-state | https://techbrot-preview.pages.dev/quickbooks/payroll/multi-state/ | Employee-state-not-employer-state fundamentals + scope + honest boundaries. **Added:** convenience-of-employer rule (NY/CT/PA/NJ/DE/NE), reciprocity pairs, PA PSD / Ohio RITA / KY / NYC / SF / Detroit local taxes. |
| Year-end | https://techbrot-preview.pages.dev/quickbooks/payroll/year-end/ | 6 deadlines + 6 work categories + the items that don't surface in regular cycles. **Added:** W-2/W-3 to SSA + 1099-NEC to IRS due Jan 31, Form 940 FUTA, GTL over $50,000 imputed income, S-corp owner health (W-2 box 1, not FICA), W-2c. |
| vs Gusto | https://techbrot-preview.pages.dev/quickbooks/payroll/vs-gusto/ | **8 comparison dimensions kept as real h3** (T3) + a separate at-a-glance vs-table; 6 business-profile buyer-cards. **Added:** QB Payroll Core/Premium/Elite tiers + native Intuit integration; Gusto base-tier multi-state + first-class 1099/contractor + native QBO/Xero sync. Honest "where each loses". |
| Payroll FAQ | https://techbrot-preview.pages.dev/quickbooks/payroll/faq/ | t-guide hub: featured-6 accordion + 7 topic clusters carrying **all 32 Q/A** + 8-link related grid. **Added (already deep):** AB5 ABC test + MA/NJ/CT/IL, multi-state mechanics, W-2c. |

---

## 3. WHAT I THOUGHT / DECISIONS MADE
- **Protocol worked.** This is the first wave under R3 (contract-injection). I ran
  `equity_contract.py` for each page and the agents read the frozen contract file as the
  sole authority for headings + FAQ. Result: **ZERO heading/FAQ drift** this wave (vs 4-of-5
  last wave). The T5 self-checks were clean and accurate. The injection is the fix that worked.
- **vs-gusto T3 call:** the 8 comparison dimensions are baseline H3s, so they stay real `<h3>`
  (stack-8) — and I gave the page its tier-signature vs-table as a *separate* at-a-glance summary
  with distinct short row labels, so no H3 was demoted. This is the correct resolution of
  "comparison page" + "don't demote headings."
- **faq is t-guide** (32-Q hub), mirrored the proven `/quickbooks/faq/`: featured-6 accordion
  drives the FAQPage schema (flat/verbatim), the rest render as article h3+prose so the rich
  multi-paragraph answers don't trip faq-flat. The agent corrected two old hrefs
  (`/quickbooks/year-end/`, `/quickbooks/vs-gusto/`) to the live `/quickbooks/payroll/…` targets
  to avoid shipping broken links.
- **CTA tier:** file-review-primary on all 5 (ruling 2). Tiers PROPOSED (open #5); founder decides.

---

## 4. VERIFICATION (per page)
| Page | equity | tier | design-fidelity | axe | overflow 360/390/768 | CLS |
|---|---|---|---|---|---|---|
| setup | GREEN | t-mofu | PASS | 0 | clean | 0 (shares pattern) |
| multi-state | GREEN | t-mofu | PASS | 0 | clean | 0 (shares pattern) |
| year-end | GREEN | t-mofu | PASS | 0 | clean | 0 (shares pattern) |
| vs-gusto | GREEN | t-mofu | PASS | 0 | clean | **0 measured** |
| faq | GREEN | t-guide | PASS | 0 | clean | **0 measured** |

Battery **PASSED**. CSS **55,933 / 59,392 B — PASS** (zero new CSS). Honesty: no fabricated
stats (enrichment = TRUE documented payroll facts only); no personal names (firm/team byline).

**Drift this wave (all mechanical, caught by the central battery, fixed before commit):**
1 broken link (`nexus-review` → `sales-tax-compliance`), 2 undeclared classes on setup
(`stack-8--featured`/`section__note` → `stack-8`/`prose`), 1 non-lexicon CTA label on faq
(→ "Explore Services"), 1 JSON front-matter typo on year-end (`]`→`}`, which had failed the
build — the battery's "pass" on a stale `_site` is why I always re-build-then-battery). **No
heading or FAQ drift.**

---

## 5. OPEN ITEMS / NEXT / STOP STATE
- **STOP — awaiting your review of these 5 on preview.**
- **Anomaly flagged (handled):** a `git add -A` this turn staged the deletion of 9 historical
  round reports (round-7…13); I caught it in the commit output, confirmed they existed at the
  parent, and **restored all 9** from git. Cause of the working-tree deletion is unclear — I did
  not delete them; flagging so you're aware. They're back.
- **Remaining silo 1 (6 pages):** 5 migration children (desktop-to-online, migration-cleanup,
  other-software-to-qb, quickbooks-to-xero — t-bofu/conversion; balances-wrong-after-conversion
  — t-guide HowTo) = the next ~5-page wave; **+ speak-to-a-quickbooks-expert (t-bofu + Sheet-7
  honest-triage) = OWN review, not in a batch.**
- After silo 1: vs (5) → accounting (39) → partners (1) → find-an-accountant (43, t-location,
  first page proven solo).
- HELD: #4 research-log N=0 · #5 tiers decided on preview · #2 footer WCAG queued.
- **The protocol is working** — zero equity drift this wave; the remaining waves should stay at
  this quality with the contract-injection + ~5 cap + battery backstop.

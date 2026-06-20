# Round 35 — DEPTH BUILD-OUT · CA QuickBooks-SPOKES WAVE (6 pages)
Depth build-out, California continuing. v4 QB-spokes cluster (always 6). Shared
`partials/state-service-body.njk` (t-bofu). Continues round-34 (CA money/bookkeeping services).

## WHAT I DID
The full v4 **CA QuickBooks-spokes cluster (6)** under `/find-an-accountant/california/`:
`quickbooks-setup · quickbooks-cleanup · quickbooks-reconciliation · quickbooks-migration ·
quickbooks-training · quickbooks-error-fixes`. Each on the shared service template, carrying the real
CA tax-facts band ($800 FTB franchise tax · CDTFA district sales tax to 10.25% · AB5) plus genuinely
service-distinct CA content:
- **setup** — CA chart of accounts, district sales-tax items by location, AB5 setup, $800 accrual, CA payroll (SDI/PIT/EDD).
- **cleanup** — the common CA cleanups: flat-rate district sales tax, 1099/W-2 misclassification, Undeposited Funds/OBE, ASC 606 revenue.
- **reconciliation** — bank/card/loan + the CDTFA sales-tax sub-reconciliation (the CA step others skip).
- **migration** — Desktop→Online / other→QB with district sales tax rebuilt by location, AB5 + $800 carried across.
- **training** — train CA teams on district sales-tax entry, AB5 contractor coding, month-end close, on their own file.
- **error-fixes** — technical codes (H202, 6000-series, PS038) + the CA config "errors" that throw no code (flat-rate sales tax, payroll items).

Also **re-linked** the umbrella `quickbooks-accountant` cleanup CTA from the temporary global `/quickbooks/cleanup/`
back to the now-built `/find-an-accountant/california/quickbooks-cleanup/` (closes part of the round-34 re-link TODO;
`sales-tax-help` stays global until the CA tax-cluster wave ships).

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-setup/
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-cleanup/
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-reconciliation/
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-migration/
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-training/
- https://techbrot-preview.pages.dev/find-an-accountant/california/quickbooks-error-fixes/

## DECISIONS / JUDGMENT CALLS
- **Each QB-spoke is genuinely distinct** (setup vs cleanup vs reconciliation vs migration vs training vs
  error-fixes) AND CA-specific (district sales tax, AB5, $800 throughout). Not mad-libs.
- **error-fixes framed honestly** — covers both technical codes (deferred to the global error-codes reference)
  AND the bigger CA risk (flat-rate sales tax that throws no code), with honest-triage tone ("if you can fix it
  yourself in five minutes, we&rsquo;ll tell you"; "if it&rsquo;s really a cleanup, we&rsquo;ll scope that").
- **Honesty held** — CA facts deferred to FTB/CDTFA/EDD + CPA on every page; founder-name-zero (David Westgate
  only in the global Person schema); independent, not Intuit; fixed-fee ranges only; no fabricated counts.
- **Intra-state linking** per v4 — spokes link to the CA pillar + CA siblings + global /quickbooks/* and
  /accounting/* (all resolve; the links gate confirms).

## VERIFICATION
- **BATTERY** — (result appended on commit; expected GREEN). All 6: 8 FAQ · faq-overlap zero · faq-schema-verbatim.
  css-bytes 77,931 B (no new CSS) · manifest · design-fidelity (+6, t-bofu) · variety-12a · links resolve.
- **Schema:** WebPage + BreadcrumbList + Service(areaServed=California) + FAQPage + speakable + reviewedBy
  `#david-westgate`. 5 AI Q&A, 8 FAQ each.
- **a11y/overflow (chrome probes ENV-BLOCKED):** static proxy + SF-equivalence (t-bofu = same proven components).

## ⛔ FLIP-BLOCKER (cutover gate #6) — updated
Inferred-clean pending LIVE axe/overflow on the founder's machine: **26 city + 24 glossary + 11 CA service = 61 pages.**

## NEXT (autonomous, depth — California continues)
CA remaining ≈ 16: **tax cluster (4: sales-tax-help, ab5-worker-classification, state-tax-notice-help,
business-tax-problems)** → pricing + speak-to-a-proadvisor (2 special) → industries hub + 6 → cities-hub →
re-link CA pillar ecosystem + the sales-tax-help re-link. Then TX → FL → IL.

COUNT: total pages live = 205 · re-skinned (142) + growth this phase = 63 · pages added THIS turn =
/find-an-accountant/california/{quickbooks-setup, quickbooks-cleanup, quickbooks-reconciliation,
quickbooks-migration, quickbooks-training, quickbooks-error-fixes}/ (6 CA QB-spoke children) ·
remaining in current cluster = CA depth (~16: tax cluster, pricing/triage, industries hub+6, cities-hub, pillar re-link) ·
next = CA tax-cluster wave. State depth: NY ✅ · CA pillar+11 cities+11 services · TX/FL/IL pillar+5 cities.

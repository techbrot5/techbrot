# Round 64 — SUPPORT/HELP SILO COMPLETE (support-end-dates + hub wiring)

The founder-approved Support/Help silo fan-out is COMPLETE: **51 pages** built honest-triage per v4 Sheet 7,
all battery-GREEN, committed across rounds 59–64. This round shipped the last page + wired the hubs.

## SILO TOTALS (rounds 59–64)
- **Proof (rd-59, 5):** support flagship `how-to-contact-quickbooks-support` + support hub + `independent-quickbooks-help` + 1 help-symptom (`bank-feeds-not-working`) + 1 error-code (`6123`).
- **Error codes (rd-60, 14):** 6000, 6000-83, 6000-301, 6073, 6150, 12002, 12007, 12029, 15223, 15271, 9999 (QBO), h101, h505, ps036.
- **Help-symptom (rd-61/62/63, 30):** file/books (file-wont-open, file-corrupted, data-recovery, backup-restore, reconciliation-broken, duplicate-transactions, missing-transactions, reports-wrong) · account/login routed-to-Intuit (cant-login, account-locked, admin-password-reset, two-factor-issues, cant-reach-intuit) · proadvisor-triage (proadvisor-vs-intuit-support, when-to-call-a-proadvisor, proadvisor-phone-help, speak-to-an-expert, after-hours-help, emergency-help) · file/tax (bank-feed-disconnected, bank-rules-not-working, books-not-ready-for-accountant, sales-tax-issues, irs-notices-related-to-quickbooks) · payroll (payroll-failed, payroll-tax-error, payroll-deadline-missed, direct-deposit-pending, w2-printing-error, 1099-errors).
- **This round (rd-64, 1 + wiring):** `/quickbooks/desktop/support-end-dates/` + hub wiring.

## THIS ROUND
- **support-end-dates** — honest reference on QuickBooks Desktop discontinuation: describes Intuit's rolling ~end-of-May, ~3-years-post-release pattern and what stops (security updates, live support, payroll/feeds/connected services), states the software keeps opening + data is retained, defers EXACT dates to Intuit's official page (NO fabricated version→date pairs), routes to upgrade/QBO-migration help.
- **Hub wiring (additive/restyle, equity-safe):** error-codes hub now LINKS the newly-built H101, H505, PS036, and re-points 6000-301 to its own page; its schema ItemList extended to all 21 dedicated error pages. The /quickbooks/help/ hub `related` now links the Support Hub + Error-Codes reference.

## PREVIEW (LAN dev http://192.168.11.1:8080)
- Flagship: /quickbooks/support/how-to-contact-quickbooks-support/ · Hub: /quickbooks/support/ · /quickbooks/support/independent-quickbooks-help/
- Error hub (re-wired): /quickbooks/help/error-codes/ · new code e.g. /quickbooks/help/error-codes/6000-83/
- Help symptom e.g. /quickbooks/help/cant-login/ · /quickbooks/help/payroll-failed/ · /quickbooks/help/irs-notices-related-to-quickbooks/
- /quickbooks/desktop/support-end-dates/

## HONESTY — every Sheet-7 rule held across all 51 pages (grep-verified each wave)
- ATF disclosure ("not Intuit; account/billing → Intuit") + first FAQ "Is this Intuit's official support? No" on every page.
- Phone CTA "Talk to a Certified ProAdvisor (independent firm)" (lexicon-sanctioned); "official" never near our offer.
- NO fabricated Intuit phone/hours/wait-times/24-7 anywhere; impersonation slugs (number/talk-to-human/live-agent) NOT built; /support/24-7-support/ dropped (we're not 24/7 — after-hours-help ships with honest hours).
- Account/login/2FA/password/unlock honestly routed to Intuit ("we cannot access your account"); payroll service & direct-deposit processing → Intuit; irs-notices & payroll-deadline-missed = educational-only, CPA/EA responds/represents; sales-tax = we configure/reconcile, state sets rates + CPA files; W-2/1099 = we fix the data, filing via Intuit e-file/CPA; certification ≠ Intuit affiliation.
- founder-name-zero (David Westgate only in #david-westgate JSON-LD); provider/publisher = #organization; canonical pricing only.

## VERIFICATION
- **BATTERY GREEN every wave** (8 runs across the silo): cta-lexicon (added the Sheet-7 phone label), intents (added qb-error/qb-help generics + qb-support set), design-fidelity, faq-flat, content-equity (the hub edits passed — additive only), manifest, url-set, variety. No new CSS.
- a11y/overflow: chrome ENV-BLOCKED → static-proxy + byte-equivalence to the proven templates; all 51 join flip-blocker #6's inferred-clean list (LIVE axe/overflow pending on founder's machine before flip).
- DEFERRED (demand-gated, per Sheet-7 "symptom spokes by GSC demand"): the `/quickbooks/support/<category>/*` expansion buckets (errors/payroll/bank-feeds/etc.) — built later by real search demand, not speculatively.

## COUNT
COUNT: total pages live = 369 · re-skinned (142) + growth this phase = 227 · pages added THIS round = 1
(support-end-dates) + hub wiring (no new URLs) · support silo = COMPLETE (51 pages) · next = GLOSSARY expansion
(founder-queued; 24 → ~46 terms via src/_data/glossary.js).

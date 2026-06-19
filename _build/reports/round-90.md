# Round 90 — QB money pages (distinct-only) + 2 merges + canonical fix

**Phase:** GROWTH (flip held). **Mode:** founder-gated this lane (build set confirmed before build).
**Battery:** GREEN on a CLEAN rebuild (deleted `_site`, rebuilt, re-ran) — see VERIFICATION.

## DISCIPLINE NOTE — skip-don't-pad honored
Founder asked for the QB "money pages (~18)" but ruled: build only genuinely-distinct substance,
merge/301 thin near-dups, don't pad to a count. After grounding every candidate against the
already-built QB silo (~140 pages), the honest result is **4 built, the rest skipped/merged.**

## WHAT I DID

### Built (4 net-new t-mofu money pages — all `layouts/t-mofu.njk`)
1. **/quickbooks/hire-a-proadvisor/** (slug qbhire) — the TRANSACTIONAL engagement page: how
   hiring a Certified ProAdvisor works (free file review → written fixed-fee scope → discovery
   call → start), the engagement types you can hire for, week-1 expectations, what "independent"
   means for the client. 7 FAQ, 1 numbered system (the 4-step scoping process).
   Distinct from `/quickbooks/proadvisor-team/` (E-E-A-T bios — linked, not restated) and
   `/quickbooks/consulting/` (advisory retainer — linked).
2. **/quickbooks/training/** (slug qbtrain) — ProAdvisor-led TRAINING/coaching service (teach you
   or your team to USE QuickBooks: QBO/Desktop/Enterprise, one-on-one or team, on your own file).
   Built as ONE hub. **Dropped the proposed 3-way split** (online/desktop/team) — the platform
   delta is ~70% shared content, so 3 pages would have been padding. 7 FAQ, 1 numbered system.
   Honors the consulting page's training-vs-consulting boundary (training = use the file;
   consulting = how it should be configured).
3. **/quickbooks/proadvisor-cost/** (slug qbcost) — COST EXPLAINER: hourly-vs-fixed, the factors
   that move a fee, canonical ranges by engagement type. **Defers to `/pricing/` as the canonical
   price list** (this page explains *how pricing works*, points to /pricing/ + the calculator).
   8 FAQ, 0 numbered systems (factors/ranges as card grids).
4. **/quickbooks/bookkeeping-services/** (slug qbbks) — flagship QB-PLATFORM bookkeeping money
   page: a ProAdvisor doing your books INSIDE your own QuickBooks file (bank-feed categorization,
   statement-tied reconciliations, monthly close, QB-native deliverables, you keep file
   ownership), QBO-vs-Desktop honestly. Routes the generic bookkeeping-service decision to the
   `/accounting/bookkeeping/` cluster (linked, not restated). 7 FAQ, 1 numbered system.

Each page = `.njk` (front-matter + body) + co-located `.11tydata.js` (arrays + `pageGraph`
emitting WebPage + BreadcrumbList + Service + FAQPage). Cloned from `consulting.njk`/`.11tydata.js`.

### SKIPPED (dup / thin / off-brand — NOT built, not padded)
- **catch-up** → already live at `/accounting/bookkeeping/catch-up-bookkeeping/`.
- **emergency-triage** → covered by `/quickbooks/help/emergency-help/` + `after-hours-help` + `speak-to-a-quickbooks-expert`.
- **book-a-call** → `/contact/` + speak-to pages are the call destinations; a generic scheduler page is thin.
- **desktop-discontinuation** → `/quickbooks/desktop/support-end-dates/` + `compare/online-vs-desktop`.
- **inventory** → `/quickbooks/online/features/inventory/` (explainer) + industry pages cover it; a service wrapper would be thin.
- **year-end-close** → covered across `payroll/year-end`, `accounting/year-end-review`, `month-end-close`, `resources/year-end-checklist`.
- **proadvisor-near-me** → the `/find-an-accountant/` silo owns local-finder intent.
- **switching-away** → overlaps reverse-migration + opposite of the `/switch/` silo.
- **reverse-migrations (0 of 4 built)** → `/quickbooks/migration/quickbooks-to-xero/` already exists
  (the one defensible case); the other three overlap the `/quickbooks/compare/*` pages AND are
  off-brand for a QB ProAdvisor firm (building "leave QuickBooks" pages cannibalizes). Strategic-fit
  fail → skipped.

### Merges / fixes (founder-ruled)
- **FLAG A — 301 `/accounting/pricing/` → `/pricing/`.** It was a GROWTH page (round 78, NOT in the
  frozen baseline — confirmed 0 hits in baseline.json) that re-stated the canonical fixed-fee ranges
  `/pricing/` already owns. Source `.njk` + `.11tydata.js` removed via `git rm`; redirect added to
  `src/redirects.njk`; the one inbound src link (`resources/guides/bookkeeping-rates-2026`) repointed
  to `/pricing/` (it already listed /pricing/ right below — removed the now-duplicate entry).
- **FLAG B — KEPT `/accounting/services/virtual-accounting/`.** Read it vs `outsourced-accounting`:
  genuinely distinct angle (cloud/remote-delivery of the full accounting function — "Built for
  businesses that already run in the cloud" / "Online vs on-site accounting") vs outsourced's
  make-vs-buy framing. Distinct angle + distinct keyword, not a no-angle synonym → keep.
  ⚠ FLAGGED as the thinnest pair on the site — say the word and I 301 it.
- **FLAG C & D — KEPT DISTINCT** (your ruling): compare/online-plans (matrix) vs which-plan-is-right
  (recommendation); printable QB-setup checklist vs the full how-to guide.
- **FLAG D canonical fix:** the printable `/resources/checklists/quickbooks-setup-checklist/` now
  sets `rel=canonical` → `/quickbooks/setup/checklist/` (the full guide) for the head keyword. Added
  a `canonicalUrl` override to `base.njk` (single-source, all pages inherit; canonical + both
  hreflang lines use it). ⚠ TRADE-OFF: this de-indexes the printable for "quickbooks setup
  checklist" and consolidates the head term to the guide; the printable stays live as a linked
  companion. One-line revert if you'd rather both compete in the index.

### Internal linking (so the 4 are not orphans; battery doesn't enforce orphans, this is for SEO)
- QB hub (`quickbooks.11tydata.js`) bookkeepingLinks → added `bookkeeping-services` (top entry).
- consulting "Other QuickBooks engagements" → added hire-a-proadvisor + training + proadvisor-cost.
- The 4 new pages cross-link each other + the relevant existing pages.

## PREVIEW URLS (check after the preview deploy builds)
- https://techbrot-preview.pages.dev/quickbooks/hire-a-proadvisor/ — transactional engagement page; confirm it points cost→proadvisor-cost and bios→proadvisor-team rather than restating.
- https://techbrot-preview.pages.dev/quickbooks/training/ — training hub; confirm the not-Intuit / we-don't-issue-certification language reads right (most sensitive copy this round).
- https://techbrot-preview.pages.dev/quickbooks/proadvisor-cost/ — cost explainer; confirm it defers to /pricing/ and uses only canonical ranges, "estimate not a quote" throughout.
- https://techbrot-preview.pages.dev/quickbooks/bookkeeping-services/ — flagship QB-platform bookkeeping; confirm the QB-platform angle (your-own-file/QBO-vs-Desktop) reads distinct from /accounting/online-bookkeeping/.
- https://techbrot-preview.pages.dev/pricing/ — confirm /accounting/pricing/ 301s here (no 404).
- https://techbrot-preview.pages.dev/resources/checklists/quickbooks-setup-checklist/ — view-source: canonical should now be /quickbooks/setup/checklist/.

## DECISIONS / THINKING
- **Why only 4 of ~18:** the existing QB silo is overwhelmingly informational; a commercial/BOFU
  layer is a legitimate distinct angle, but most proposed slugs collide head-on with built pages.
  Built only where I could write genuinely distinct substance; merged/skipped the rest. Erred toward
  skipping borderline cases (inventory, year-end-close) rather than shipping near-dups.
- **proadvisor-cost vs hire-a-proadvisor vs /pricing/:** three distinct commercial intents —
  "how to engage," "how much / what drives cost," and the canonical price list. Cross-linked, with
  /pricing/ canonical for the price figures.
- **Honesty engineering:** canonical pricing only (always a range, "estimate not a quote"); no
  fabricated stats/reviews/clients/dates; no Review/AggregateRating schema; founder-name-zero (David
  Westgate appears only in global Person schema, per rule 9); not-affiliated-with-Intuit + no-commission
  + we-don't-file-taxes stated on every page; training page additionally states we don't issue the
  ProAdvisor certification (Intuit does). Representative scenarios labeled as such.
- **No new CTA labels, no new intents** — reused only canonical sanctioned labels and existing valid
  intents (quickbooks-proadvisor, quickbooks, pricing, bookkeeping, file-review). Nothing to ratify.

## VERIFICATION (clean rebuild — deleted _site, rebuilt 566 files, re-ran battery)
- **BATTERY PASSED — all checks green** (exit 0).
- url-set: 561 built URLs all within contract · links: 51,983 hrefs across 561 pages all resolve
  (zero links to the removed /accounting/pricing/ — verified the link-check was no longer masked by stale output).
- 4 new pages: faq-min-6 (7/7/8/7) · zero quick-5↔FAQ overlap · FAQPage matches accordion verbatim · variety ≤1 numbered system each.
- founder-zero GREEN · cta-lexicon 16 labels all sanctioned · manifest (no illegal classes) · css-drift zero · design-fidelity per-tier.
- CSS: minified **80,259 B / 83,968 B** hard gate (source 117,389 B) — under gate.
- equity n/a for the 4 net-new pages; the 301'd /accounting/pricing/ was a growth page, not baseline (no equity gate).
- ⚠ Battery encoding note: `run_battery.py` prints a `∪` char that crashes under a cp1252 PowerShell pipe;
  run with `PYTHONUTF8=1` (done). Not a gate issue — cosmetic console-encoding. (Candidate one-line fix: set stdout to utf-8 in the script.)

## COUNT
COUNT: total pages live = 556 (orientation method, non-dev; prior 553 − 1 /accounting/pricing/ + 4 new = 556) · re-skinned (142) + growth this phase = 414 · pages added THIS turn = [/quickbooks/hire-a-proadvisor/, /quickbooks/training/, /quickbooks/proadvisor-cost/, /quickbooks/bookkeeping-services/] · removed THIS turn = [/accounting/pricing/ → 301 /pricing/] · remaining in current cluster (QB money) = 0 genuinely-distinct left (rest merged/skipped) · next cluster = founder's call (coined-frameworks hub 6 · industry high-fee 6 · pricing/partners/trust/legal/careers children)

## OPEN ITEMS / FLAGS FOR FOUNDER
1. **Flag B (virtual-accounting):** kept as genuinely distinct, but it's the thinnest pair on the
   site (vs outsourced-accounting). Overrule with one word and I 301 it.
2. **Flag D canonical trade-off:** printable checklist now de-indexed for the head keyword in favor
   of the full guide. Confirm you want that, or revert to both self-canonical.
3. **Training honesty copy** — please spot-check the not-Intuit / we-don't-issue-certification
   language on /quickbooks/training/ (most reputation-sensitive copy this round).
4. **FLIP-BLOCKER #6 grows:** these 4 new pages join the inferred-clean list (LIVE axe/overflow on
   your machine still pending before flip).

## STOP STATE
Committed + pushed. Working tree clean. Awaiting founder direction on the next cluster.

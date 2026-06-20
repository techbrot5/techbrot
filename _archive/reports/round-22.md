# Round 22 — Path B migration: silo 1 (QuickBooks) wave 1 — 5 t-mofu pages built + enriched to goal
Date: 2026-06-15 · Branch: preview-11ty · Reviewer + strategy-Claude copy
(Written per standing rule R1. Stands alone. Flags weaknesses; does not defend.)

---

## 1. WHAT I DID

**Migrated + enriched 5 live QuickBooks baseline pages** from the old static site to the cobalt
t-mofu system (content-to-goal, visual-floor per rule R2):
- /quickbooks/desktop/ (the proof page, built last round; enriched this round)
- /quickbooks/enterprise/
- /quickbooks/which-plan-is-right/
- /quickbooks/proadvisor-team/  ← also fixes a live broken internal link (shipped pages link to it)
- /quickbooks/consulting/

**Recorded two PERMANENT standing rules in BUILD-TRACKER:** R1 (report-at-every-stop) and R2
(migration build rule: content-to-goal, visual-floor).

**Files:** the 5 `.njk` + `.11tydata.js` pairs under `src/quickbooks/`; `_data/intents.json`
(added `quickbooks-desktop` intent last round); `_build/battery/equity-exceptions.json` (standing
newsletter exceptions for the 5); BUILD-TRACKER.md. Commits: `ddae8c2` (desktop), `ce9e1a3` (4
t-mofu + equity fixes), `64f7029` (enrichment + standing rules).

---

## 2. PREVIEW URLS (open these to review)

| Page | URL | What to check / citable specific added |
|---|---|---|
| Desktop | https://techbrot-preview.pages.dev/quickbooks/desktop/ | Editions vs-table + honest QBD-sunset framing. **Added:** the 4 editions' user ceilings (Pro 3 / Premier 5 / Mac 3 / Enterprise 40), `.QBW/.QBB/.QBM` file types, the rolling ~3-year discontinuation model (exactly what stops vs keeps working). |
| Enterprise | https://techbrot-preview.pages.dev/quickbooks/enterprise/ | 6 industry editions, who-fits vs over-served. **Added:** 40-user ceiling, ~14,500 Pro/Premier list cap vs hundreds of thousands, Advanced Inventory (FIFO/landed-cost/barcode/bin/lot), ODBC access, Gold/Platinum/Diamond bundling (in tier bodies). |
| Which plan is right | https://techbrot-preview.pages.dev/quickbooks/which-plan-is-right/ | Plan vs-table + decision buyer-cards. **Added:** the decisive feature gates — inventory + project profitability + class/location all begin at QBO Plus; user ceilings (SS 1 / Ess 3 / Plus 5 / Adv 25); Advanced's automation/revenue-recognition trigger. |
| ProAdvisor team | https://techbrot-preview.pages.dev/quickbooks/proadvisor-team/ | **Confirm no individual name appears** (firm/team byline only). **Added:** QBO Core vs Advanced (Level 2) cert tiers, annual recertification, proadvisor.intuit.com verification, the Payroll cert's federal/state/local (incl. Indiana CAGIT/COIT, Ohio RITA, PA Act 32) coverage. |
| Consulting | https://techbrot-preview.pages.dev/quickbooks/consulting/ | Retainer scope + consulting-vs-other-engagements routing grid. **Added:** concrete config-drift symptoms (chart-of-accounts bloat, Undeposited-Funds inflation, conflicting bank-feed rules, integration double-posting, permission sprawl, Enterprise run like QBO). |

---

## 3. WHAT I THOUGHT / DECISIONS MADE

- **Tier = t-mofu for all 5** (PROPOSED, per registry; #5 open). Rationale from blueprint Sheet 1:
  all 5 are MOFU funnel, product/comparison/credentials role (Product/WebPage/Service schema, not
  conversion). They take file-review-PRIMARY CTA (ruling 2). You decide final tier on preview.
- **ItemList → vs-table:** desktop's 4 editions and which-plan's 9 plans were ItemList equity in the
  baseline; I carried them AS vs-tables (preserves the equity + gives the tier its signature component).
- **Migration is a new pattern → I proved one page (desktop) first**, then replicated the wave — and
  **verified every page against baseline.json rather than trusting the agents.** Good call: the agents
  drifted on 4 of 5 (paraphrased H1s, two H2s collapsed into hero/CTA, three H3s demoted into a table,
  a wrong FAQ set on proadvisor-team, and on enrichment three enterprise tier H3s renamed to
  Gold/Platinum/Diamond). The battery caught all of it; I restored every baseline heading + the 7
  baseline proadvisor FAQ to exact text before committing. **Nothing shipped with equity loss.**
- **Enrichment honesty stance:** citable specifics are TRUE, publicly-documented QuickBooks *product*
  facts only (user limits, list caps, Advanced Inventory, cert tiers). I explicitly did NOT add any
  TechBrot performance stats/reviews/client-counts/prices; honesty spot-check (grep for %, client
  counts, success rates) came back clean — the only numbers are QB product facts. The proadvisor page
  has pre-existing illustrative "$50K/$25K engagement" / "2–5× cleanup cost" framings from the baseline
  (equity, not added by me).
- **consulting vs-table → stack-8:** an agent had demoted 3 baseline routing H3s into a comparison
  table; I restored them as `<h3>` in a stack-8 routing grid (page still passes design-fidelity via
  byline-block + buyer-card).

---

## 4. VERIFICATION (per page)

| Page | equity | tier | design-fidelity | axe | overflow 360/390/768 | CLS |
|---|---|---|---|---|---|---|
| desktop | GREEN (48 headings · 8 FAQ · 28 schema) | t-mofu | PASS | 0 | clean | 0 |
| enterprise | GREEN (49 · 8 · 28) | t-mofu | PASS | 0 | clean | 0 (shares pattern) |
| which-plan-is-right | GREEN (49 · 8 · 27) | t-mofu | PASS | 0 | clean | 0 |
| proadvisor-team | GREEN (42 · 7 · 26) | t-mofu | PASS | 0 | clean | 0 (shares pattern) |
| consulting | GREEN (equity · 6 FAQ) | t-mofu | PASS | 0 | clean | 0 (shares pattern) |

Battery: **PASSED — all checks green.** CSS bundle: **55,933 B / 59,392 B (58KB) — PASS** (zero new
CSS this round; enrichment was data-only). css-drift PASS. Design-fidelity gate: debt list empty;
all 5 pass per-tier on merit. CLS measured 0 on desktop + which-plan (representatives); the other 3
share the identical t-mofu layout + components.

Honesty: no founder/personal name in visible content (proadvisor grep clean); no fabricated
stats/reviews/prices; independent-firm / not-Intuit framing throughout; QBD/QBO prices deliberately
not quoted (kept the "check Intuit directly" stance).

---

## 5. OPEN ITEMS / NEXT / STOP STATE

- **STOP — awaiting your review of these 5 on preview** (URLs above). Replication of the rest of silo 1
  is **paused**.
- **Remaining silo 1 (11 pages), all content-to-goal once you confirm these 5:** payroll children
  (setup, multi-state, year-end — t-mofu; vs-gusto — t-mofu comparison); migration children
  (desktop-to-online, migration-cleanup, other-software-to-qb, quickbooks-to-xero — t-bofu/conversion;
  balances-wrong-after-conversion — t-guide HowTo); payroll/faq (t-guide); **speak-to-a-quickbooks-expert
  (t-bofu + Sheet-7 HONEST-TRIAGE — needs care: disclosure above the fold, qualify Intuit billing/account
  intent away).**
- Migration order after silo 1: vs (5) → accounting (39) → partners (1) → find-an-accountant (43,
  needs the t-location tier, not yet proven).
- HELD: #4 research-log N=0 (no fabrication) · #5 t-bofu/t-mofu tiers decided on preview · #2 footer
  WCAG target-size queued.
- **Weakness to flag honestly:** the parallel-agent migration is fast but drifts on equity/heading
  fidelity every batch — the battery catches it, but it costs a fix-up pass each time. If you'd prefer,
  I can tighten the agent instructions further or migrate fewer-per-wave to reduce the fix-up loop.

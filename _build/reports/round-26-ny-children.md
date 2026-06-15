# Round 26 — find-an-accountant PHASE 2: NY children (autonomous waves, R7)
Date: 2026-06-15 · running report, one section per wave · per R1.
38 NY children across ~8 waves of ~5, t-location, full protocol, equity GREEN required.
Two hard stops only: an unfixable equity failure, or a genuine honesty doubt R5 doesn't cover.

---

## WAVE 1 — cities-hub + 4 cities · DONE · commit `9056d8a`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| Cities hub | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/ | statewide coverage (62 counties) + routing to the dedicated city pages |
| Albany | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/albany/ | Capital Region, state-govt economy, 8% (4% NYS + 4% Albany County), NO NYC UBT, $110 clothing exemption |
| Bronx | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/bronx/ | Bronx County, 8.875% (4%+4.5%+0.375% MTA), 4% UBT ($95K floor), Hunts Point food center, CRT is Manhattan-only |
| Brooklyn | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/brooklyn/ | Kings County, 8.875% + 4% UBT, DUMBO/Williamsburg creative economy, CRT doesn't apply |
| Buffalo | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/buffalo/ | Erie County 8.75% (4%+4.75%), upstate (NO NYC UBT/CRT/8.875%), Niagara USD/CAD cross-border |

**Decisions/judgment calls (audit trail):**
- The cobalt-vocabulary instruction (reference the pillar, use only cobalt classes) worked — **zero
  class/CTA/intent drift** this wave (vs the pillar's 27 reconciliations). The contract injection +
  the established tier vocabulary is paying off.
- **Cities-hub 6th FAQ:** the baseline cities-hub has only 5 FAQ; the faq-min-6 gate requires 6+. I
  added one genuine coverage FAQ ("What if my New York city doesn't have a dedicated page yet?" →
  statewide-coverage answer). This is legitimate content-to-goal enrichment, not fabrication.
- **Buffalo overflow fix:** the agent combined `grid-3` with `proof-strip`/`proof-strip__item` on the
  tax section, which constrains item width so a long `<p>` hit 1273px (overflow at every viewport).
  Stripped to clean `grid-3` + `stack-8` (matching the other cities) → clean.
- **Honesty (R5):** no city page asserts unsubstantiated "real outcomes"; the 2 real Clutch reviews
  live only on the pillar (not duplicated/fabricated per-city); no personal name in visible content
  (David Westgate only in `reviewedBy` schema @id). No honesty doubt arose → no hard stop.
- **Minor sibling inconsistencies** (cosmetic, flagged not fixed): CTA query params vary slightly
  (`state=`/`city=`/`source_type=` extras); eyebrows differ ("Quick answers" vs "For AI engines");
  one agent added a non-contract intake H2 ("Two ways to start"). All additive/harmless; the design
  reset normalizes skin anyway.

**Verification (all 5):** content-equity GREEN (headings + FAQ verbatim; justified: newsletter) ·
t-location · design-fidelity PASS (hero__motif) · axe 0 · overflow clean 360/390/768 · CLS 0 (buffalo
rep) · a11y/BP/SEO 100 · CSS 55,933 B.

**NEXT:** wave 2 — cities manhattan, new-york-city, queens, rochester, staten-island.

---

## WAVE 2 — 5 cities (finishes the 11 cities + the NYC city-wide page) · DONE · commit `ab792ff`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| Manhattan | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/manhattan/ | New York County, **3 NYC taxes** — 8.875% + 4% UBT + **Commercial Rent Tax** (Manhattan south of 96th St, ~3.9% on $250k+ rent) — the genuine Manhattan differentiator; finance/agencies(ASC 606)/law(IOLTA) |
| New York City | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/new-york-city/ | city-wide: 5 boroughs, 8.875% (4%+4.5%+0.375% MTA), 4% UBT ($95K floor / $3,400 credit), CRT; routes to the borough pages |
| Queens | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/queens/ | Queens County, most diverse US county, JFK/LGA air-cargo/logistics, LIC manufacturing, 8.875% + UBT, no CRT |
| Rochester | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/rochester/ | Monroe County ~8% (4%+4%), upstate — NO UBT/CRT, optics/photonics legacy (Kodak/Xerox/B&L), U of R/RIT |
| Staten Island | https://techbrot-preview.pages.dev/find-an-accountant/new-york/cities/staten-island/ | Richmond County, 8.875% + UBT, **CRT does NOT apply**, trades/construction/suburban density |

**Decisions/judgment calls:** zero class/CTA/intent drift (cobalt vocab + Brooklyn-sibling reference held). Each city is genuinely differentiated on its real tax stack (3-tax Manhattan vs no-UBT upstate vs no-CRT Staten Island) — not a mad-lib. Fixes: 5 newsletter exceptions; manhattan's "Financial Services" card linked to a non-existent `/industries/professional-services/` → repointed to the real `/industries/consulting/`. Honesty: no per-city reviews (the 2 Clutch stay on the pillar), no fabricated outcomes, no personal names. No honesty doubt → no hard stop.
**Verification (all 5):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

**PROGRESS: 10 / 38 NY children done** (all 11 cities + cities-hub). **NEXT:** wave 3 — syracuse, yonkers (last 2 cities) + industries-hub + construction + consulting (continuing, no stop).

---

## WAVE 3 — last 2 cities + industries-hub + 2 industries · DONE · commit `bdd253b`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| Syracuse | …/find-an-accountant/new-york/cities/syracuse/ | Onondaga County ~8% (4%+4%), upstate (no UBT/CRT), SU + SUNY Upstate + healthcare, Micron semiconductor (Clay) |
| Yonkers | …/find-an-accountant/new-york/cities/yonkers/ | Westchester County 8.875% (8.375% base + Yonkers +0.5%); no NYC UBT/CRT BUT the **Yonkers resident income-tax surcharge** (framed qualitatively) |
| Industries hub | …/find-an-accountant/new-york/industries/ | routes to the 8 NY industries with each one's real NY angle |
| Construction | …/find-an-accountant/new-york/industries/construction/ | job costing, WIP, retainage, % -of-completion, AIA billing, NYS certified/prevailing-wage payroll, multi-state crews, capital-improvement ST-124 |
| Consulting | …/find-an-accountant/new-york/industries/consulting/ | NYC UBT on unincorporated firms (NYC-202/204), partner/guaranteed-payment reporting, project profitability, AB5 classification, multi-state nexus |

**Decisions/judgment calls:** zero class/CTA drift. **Honesty catch:** the consulting baseline named an
individual ("David Westgate · 40+ years") in a reviewer line — the agent reframed it to firm-level
("TechBrot Certified ProAdvisor team · 40+ years combined") per R9 (no individual in visible content).
The industries-hub (baseline 5 FAQ) got a genuine 6th coverage FAQ (gate). **Yonkers surcharge:** the
agent added it as append-only enrichment framed qualitatively (no exact rate asserted) — honest, real,
flagged as net-new. Fixes: 5 newsletter exceptions; whitelisted `page--industry` bodyClass.
**Verification (all 5):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

**PROGRESS: 15 / 38 NY children done** (11 cities + cities-hub + industries-hub + 2 industries).
**NEXT:** wave 4 — industries ecommerce, healthcare, legal, nonprofit, real-estate (continuing, no stop).

---

## WAVE 4 — 5 NY industry pages · DONE · commit `9f85efb`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| E-commerce | …/find-an-accountant/new-york/industries/ecommerce/ | post-Wayfair economic nexus (NY $500K **and** 100-txn test), marketplace-facilitator (Amazon/Etsy/eBay), Shopify/Stripe/A2X recon, landed-cost COGS by SKU, NYC 8.875% |
| Healthcare | …/find-an-accountant/new-york/industries/healthcare/ | payer-AR + contractual-adjustment recon, PC/PLLC + Corporate-Practice-of-Medicine, W-2 clinicians vs 1099 locums, PMS→QBO (athena/DrChrono/Tebra), no sales tax on medical services |
| Legal | …/find-an-accountant/new-york/industries/legal/ | IOLA/IOLTA trust accounting, RPC 1.15 three-way recon, NY Lawyers' Fund overdraft reporting, 7-yr retention, NYC UBT on law partnerships |
| Nonprofit | …/find-an-accountant/new-york/industries/nonprofit/ | CHAR500 (NY AG) + Form 990, fund accounting (restricted/unrestricted), functional-expense allocation, grant revenue recognition, audit>$1M / review>$250K |
| Real estate | …/find-an-accountant/new-york/industries/real-estate/ | entity-per-property P&L, NYC RPIE, Commercial Rent Tax, 1031 (45/180-day QI), security-deposit separate-account, cost-seg, IT-2663 |

**Decisions/judgment calls:** zero class/CTA drift; battery passed first try. **Honesty (R9/R5):** all
5 reframed the baseline named-reviewer line ("David Westgate · 40+ years") to firm-level. **healthcare
honesty call:** the agent declined to assert an NYC-UBT professional exemption for medical PCs it
couldn't verify cleanly — framed qualitatively, led on the solidly-true no-sales-tax-on-medical-services
wrinkle. **real-estate:** reframed outcome figures to representative ranges. Fixes: 6 newsletter
exceptions; **legal hero `<strong>IOLA</strong>` unwrapped** (dark-hero contrast violation — same fix as
the pillar; re-probed axe 0).
**Verification (all 5):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

**PROGRESS: 20 / 38 NY children done** (12 cities-tier + industries-hub + all 8 industries... restaurant
still pending — it batches into wave 5 with the first service-children).
**NEXT:** wave 5 — restaurant + first 4 NY service-children (continuing, no stop).

> **NY universe confirmed against baseline.json:** 39 NY URLs = pillar + 38 children. Children =
> cities-hub + 11 cities (12) + industries-hub + 8 industries (9) + **17 service-children**
> (bookkeeping-services, monthly-bookkeeping, virtual-bookkeeper, small-business-accountant,
> quickbooks-accountant, quickbooks-setup, quickbooks-cleanup, quickbooks-reconciliation,
> quickbooks-training, quickbooks-migration, cleanup-bookkeeping, pricing, sales-tax-help,
> business-tax-problems, state-tax-notice-help, urgent-bookkeeping, speak-to-a-proadvisor) = 38. The
> last 4 (business-tax-problems, state-tax-notice-help, urgent-bookkeeping, speak-to-a-proadvisor) are
> grouped into a final wave for careful R5/Sheet-7 honest-triage handling — possible founder stop.

---

## WAVE 5 — restaurant (last industry) + 4 core NY bookkeeping services · DONE · commit `827f2c0`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| Restaurant | …/find-an-accountant/new-york/industries/restaurant/ | prime cost (food+labor %), NYC 8.875% on prepared food (vs grocery exemption), tip-credit + 80/20 under NY Hospitality Wage Order, Toast/Square POS→QBO recon, COGS by category |
| Bookkeeping services | …/find-an-accountant/new-york/bookkeeping-services/ | NY service overview, scope-split (TechBrot books / your CPA files), clean CoA, NYC 8.875% + UBT awareness, routes to deeper service pages |
| Monthly bookkeeping | …/find-an-accountant/new-york/monthly-bookkeeping/ | days-1→15 close cadence, reconcile-every-account, 3 fixed-fee tiers ($400/$700/$1,400 floors), sales-tax-ready for NY filing periods |
| Virtual bookkeeper | …/find-an-accountant/new-york/virtual-bookkeeper/ | fully-remote statewide (NYC→upstate, no on-site), cloud QBO, secure doc flow, video review, one named ProAdvisor (not a pool) |
| Small business accountant | …/find-an-accountant/new-york/small-business-accountant/ | entity-aware (LLC/S-corp/partnership books, owner draws, reasonable comp), NYC UBT awareness, **explicit bookkeeper-not-CPA scope** (does not file returns/represent) |

**Decisions/judgment calls:** restaurant completes all 8 NY industries. **Honesty (R9/R5):** all 5
reframed the baseline named-reviewer line to firm-level; small-business-accountant carries explicit
not-a-CPA / does-not-file-returns / does-not-represent scope (the "accountant" keyword honestly bounded).
**Drift caught + fixed (monthly-bookkeeping):** the agent invented 3 non-manifest classes
(`buyer-card__price`, `buyer-card__cadence`, `btn--text`) for the pricing tiers + an off-lexicon CTA
("Talk to a ProAdvisor about your engagement →") → corrected to `buyer-card__body`+`<strong>`, plain
`/month`, `btn--primary`, and the canonical "Book the discovery call". **small-business H1 normalization:**
the live baseline H1 has a stray space before the comma ("accountant , starting") — preserved the H1
verbatim word-for-word, normalized only the typo space to "accountant, starting"; logged as a
`normalization` exception (NOT a removal — heading intact) and flagged here for founder awareness.
Fixes: 5 newsletter exceptions. **Probe note:** restaurant's overflow probe flaked empty on first launch
(same as ecommerce w4) → re-probed clean.
**Verification (all 5):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

**PROGRESS: 25 / 38 NY children done** (12 cities-tier + industries-hub + all 8 industries + 4 services).
**NEXT:** wave 6 — 5 QuickBooks service-children (quickbooks-accountant, -setup, -cleanup,
-reconciliation, -training) (continuing, no stop).

---

## WAVE 6 — 5 NY QuickBooks service-children · DONE · commit `40f82ac`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| QuickBooks accountant | …/find-an-accountant/new-york/quickbooks-accountant/ | Certified ProAdvisor on the client's QBO/Desktop file, NY sales-tax-ready, UBT awareness, books/CPA boundary |
| QuickBooks setup | …/find-an-accountant/new-york/quickbooks-setup/ | new file, NY chart of accounts, 8.875% tax items broken out (4% + 4.5% + 0.375% MCTD), bank feeds, opening balances, users/permissions |
| QuickBooks cleanup | …/find-an-accountant/new-york/quickbooks-cleanup/ | **44-heading page** — file diagnostic, undeposited funds, reconciliation-discrepancy + sales-tax-liability cleanup, A/R-A/P, catch-up, clean handoff |
| QuickBooks reconciliation | …/find-an-accountant/new-york/quickbooks-reconciliation/ | every bank/credit/loan/merchant account to statement, the reconciliation-discrepancy account worked to zero, undeposited funds, beginning-balance mismatches |
| QuickBooks training | …/find-an-accountant/new-york/quickbooks-training/ | ProAdvisor-led on the client's OWN file (not generic), role-based, daily workflows + NY sales-tax handling, live + recorded |

**Decisions/judgment calls:** **zero drift — battery passed first try.** The explicit "no invented
classes / pricing range = buyer-card__body+strong, buttons = btn--primary, NO btn--text/__price/
__cadence" instruction (added after wave 5 caught those) fully held. **Honesty (R9/R5):** all 5 reframed
the baseline named-reviewer line to firm-level; not-affiliated-with-Intuit + does-not-file-NY-taxes
throughout. **qbcleanup T3:** promoted a baseline sr-only credentials heading to a real H2 (no-collapse
rule), all 44 headings rendered as real <hN>, the before/after table reframed to a checks-list (no
table-cell demotion). Fixes: 5 newsletter exceptions. **Probe note:** qb-accountant overflow flaked empty
on first launch (recurring serve-warmup flake) → re-probed clean.
**Verification (all 5):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

**PROGRESS: 30 / 38 NY children done** (12 cities-tier + industries-hub + 8 industries + 9 services).
**NEXT:** wave 7 — the last 4 clean services (quickbooks-migration, cleanup-bookkeeping, pricing,
sales-tax-help). Then wave 8 = the 4 sensitive honest-triage pages (business-tax-problems,
state-tax-notice-help, urgent-bookkeeping, speak-to-a-proadvisor) — careful R5/Sheet-7 handling, possible
founder stop.

---

## WAVE 7 — last 4 clean NY services · DONE · commit `f977382`
| Page | Preview URL | Local content (citable) |
|---|---|---|
| QuickBooks migration | …/find-an-accountant/new-york/quickbooks-migration/ | **43-heading** Desktop-is-ending page — Desktop→Online + cross-platform (Xero/Wave/Sage/Bench), balance/list verification, NY sales-tax + payroll re-setup, validation vs the old file at cutover |
| Cleanup bookkeeping | …/find-an-accountant/new-york/cleanup-bookkeeping/ | **44-heading** general books cleanup/catch-up (distinct from QB-specific cleanup) — multi-year reconstruction, A/R-A/P, opening-balance equity, NY sales-tax-liability cleanup |
| Pricing | …/find-an-accountant/new-york/pricing/ | canonical fixed-fee figures carried verbatim (9-service range grid + 3 tiers), why-fixed-fee, NY drivers (volume/UBT/sales-tax/multi-entity), no hourly billing |
| Sales tax help | …/find-an-accountant/new-york/sales-tax-help/ | NYS DTF registration (Cert of Authority/DTF-17), 8.875% broken out, economic nexus ($500K+100txn), $110 clothing exemption, Web File; sales-tax prep in-scope, income-tax/representation OUT |

**Decisions/judgment calls:** **Honesty (R9/R5):** all 4 reframed the baseline named-reviewer line to
firm-level; sales-tax-help keeps an explicit does-not-file-return / does-not-represent boundary (sales-tax
tracking/prep is legitimate bookkeeper scope; income-tax + controversy is the CPA/EA). **Fixes:** 4
newsletter exceptions; **pricing linked to a non-existent `/quickbooks-error-fixes/` page** (the
"Emergency QB Fix" row) → repointed to the real `/quickbooks-cleanup/`; **pricing agent had repointed
`reviewedBy` to `#organization`** → reverted to `#david-westgate` to keep the R9 E-E-A-T Person node
consistent with the other 33 NY pages. **sales-tax-help H1** carries the em-flatten space artifact
("sales tax , tracked") verbatim — matched baseline.json exactly, equity GREEN, no exception needed.
**Probe note:** qbmigration overflow flaked empty on first launch → re-probed clean.
**Verification (all 4):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

**PROGRESS: 34 / 38 NY children done.** ALL cities (12), ALL industries (9), and ALL non-sensitive
services (13) migrated + committed + verified across waves 1–7.
**REMAINING: the 4 sensitive honest-triage pages** — business-tax-problems, state-tax-notice-help,
urgent-bookkeeping, speak-to-a-proadvisor. **STOP for founder honesty decision** (see below).

> **FOUNDER RULING (2026-06-15):** proceed autonomously on the sensitive 4 with full Sheet-7 honest-
> triage; founder reviews on preview after. Built as wave 8 below.

---

## WAVE 8 — 4 sensitive honest-triage pages · DONE · commit `b21f80d` · NY SILO COMPLETE
| Page | Preview URL | Honest-triage framing |
|---|---|---|
| Business tax problems | …/find-an-accountant/new-york/business-tax-problems/ | NOT a CPA/EA/attorney, NOT affiliated w/ IRS/NYS DTF; we reconstruct/reconcile the books + assemble an audit-ready package; the client's licensed pro files/negotiates/represents |
| State tax notice help | …/find-an-accountant/new-york/state-tax-notice-help/ | **NOT the NYS Dept of Taxation and Finance**; we explain the notice + reconcile the underlying records; the CPA/EA/attorney responds & represents (reused the real `.disclosure` class) |
| Urgent bookkeeping | …/find-an-accountant/new-york/urgent-bookkeeping/ | "urgent" = a scoped fast catch-up sprint, NOT emergency tax filing / representation / a deadline guarantee; dropped a fabricated same-day SLA strip, reframed turnaround to scope-dependent |
| Speak to a ProAdvisor | …/find-an-accountant/new-york/speak-to-a-proadvisor/ | **NOT Intuit / NOT QuickBooks support / NOT Intuit's referral line**; certification ≠ affiliation; redirects Intuit account/billing/login intent to Intuit |

**Sheet-7 handling:** every page leads above the fold (in-brief, under the hero) with a plain NOT-affiliated
disclosure; each agent reframed baseline overclaims to honest scope and FLAGGED every reframe (full reframe
logs in the agent returns). speak-to-a-proadvisor added **2 net-new H2s** ("Is a ProAdvisor call the right
call?", "What the call covers — and what it does not.") to carry the Intuit split — additive enrichment, no
baseline heading removed. All 4 reframed named reviewers to firm-level (R9).
**Fix:** state-tax-notice-help linked a non-existent `/vs/cpa-vs-ea/` → replaced with a plain
CPA/EA/attorney coordination line.
**OPEN ITEM FOR FOUNDER (honesty, your call):** a few FROZEN baseline `meta_description`s still brush the
SLA/options line — most notably **urgent-bookkeeping** ("Same-day response, CPA-ready in days.") and
**business-tax-problems** ("…see your options…"). The agents preserved them verbatim per the frozen
contract (SEO equity); the VISIBLE pages are reframed and honest. **Decision needed:** keep the metas as
frozen SEO equity, or reframe them too (a deliberate content-equity change to the meta only — won't trip
the battery, which checks headings/FAQ/schema, not meta).
**Verification (all 4):** equity GREEN · t-location · axe 0 · overflow clean 360/390/768 · CSS 55,933 B.

---

## ✅ NY SILO COMPLETE — pillar + 38 children (39 URLs), 8 waves, round 26
- **12 cities-tier:** cities-hub + albany, bronx, brooklyn, buffalo, manhattan, new-york-city, queens, rochester, staten-island, syracuse, yonkers
- **9 industries:** industries-hub + construction, consulting, ecommerce, healthcare, legal, nonprofit, real-estate, restaurant
- **13 standard services:** bookkeeping-services, monthly-bookkeeping, virtual-bookkeeper, small-business-accountant, quickbooks-accountant, quickbooks-setup, quickbooks-cleanup, quickbooks-reconciliation, quickbooks-training, quickbooks-migration, cleanup-bookkeeping, pricing, sales-tax-help
- **4 honest-triage services:** business-tax-problems, state-tax-notice-help, urgent-bookkeeping, speak-to-a-proadvisor
- **Pillar:** new-york (the t-location proving page, round 25)

Every page: equity GREEN · t-location tier · axe 0 · overflow clean 360/390/768 · CSS budget held 55,933 B.
Commits: `9056d8a` `ab792ff` `bdd253b` `9f85efb` `827f2c0` `40f82ac` `f977382` `b21f80d` (+ report commits).

**NEXT in the migration (same R7 autonomy):** the 4 state landing pages CA/TX/FL/IL (real per-state tax
content, t-location, NO children yet), then QB-remainder (6) + vs (5) + partners (1), then accounting (39,
LAST). Deploy order unchanged: find-an-accountant deploys AFTER QB silo 1 + vs + partners.

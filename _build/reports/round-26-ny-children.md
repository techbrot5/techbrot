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

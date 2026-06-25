# LOCATION-SEO-STRATEGY.md — T5 Location Expansion
**STATUS: RULED (founder, 2026-06-25). Standing location-SEO doc (rule + reasoning, portable to Westgate).**

### FOUNDER RULINGS (2026-06-25) — locked
1. **State list:** 12 core APPROVED (PA·NJ·MD·VA·OH·MI·GA·NC·AZ·TN·WA·CO). **MA deferred** to Tier 3/post-flip
   (don't pad pre-flip; add later on traction).
2. **Tier-2 depth:** **6/state confirmed** — pillar + near-me-accountant (quickbooks-accountant) +
   small-business-accountant + quickbooks-cleanup + quickbooks-setup + bookkeeping-services. (Not lean-5: too
   thin for a pillar to rank. Not rich-7: diminishing pre-flip.)
3. **Pre-flip deviation:** **YES** — build DE + IN + 12 core before flip. DE is non-negotiable at launch (real
   HQ/address). Footprint feeds the national hub + AI breadth.
4. **National hub capstone:** **BUILD in T5** (last, after states exist) → drops the `/find-an-accountant/` 301.
5. **DE map-pack:** **CONFIRMED** — DE-only real-address LocalBusiness + map-pack; all other states
   Service+areaServed, NO street address. **TODO: stand up a real Google Business Profile for the DE address**
   (like Westgate's) — that's what activates the map pack.
6. **Anchor city depth:** DE 6 / IN 8 cities — approved.

**Build order:** DE first (shown for confirmation) → IN → core states → national-hub capstone. Data-files-only on
existing v2 layouts (no new templates; inherit all standing rules: meta keyword-led, FAQ Option-C, honest schema,
reviewedBy scoped). Battery (`--fast` mid, content-equity to completion for FAQ) + commit per state; FULL battery
before flip.

### GLOBAL ROUTING RULE (founder-ruled 2026-06-25 — applies to ALL states, absolute)
For any **sub-service or industry a state does NOT have its own child for**, the state pillar/pages link to the
**GLOBAL** service/industry page — NEVER to a non-existent per-state child (404 risk), and NEVER build a thin
per-state child just to have one. Global routing is the design, not a fallback.
- e.g. state pillar → "QuickBooks migration" → global `/quickbooks/migration/`; "payroll" → `/quickbooks/payroll/`;
  "catch-up" → `/accounting/bookkeeping/catch-up-bookkeeping/`; "fractional CFO" → `/accounting/advisory/fractional-cfo/`;
  "restaurants" → `/accounting/industries/restaurant/`.
- **DE/IN anchors** have their own full child sets (services + cities + industries). **The 12 core states** carry only
  the 6 essentials (pillar + quickbooks-accountant + small-business-accountant + quickbooks-cleanup + quickbooks-setup
  + bookkeeping-services) and **route every absent service/industry to global**.
- Honest schema only: **DE pillar = real Middletown address LocalBusiness** (map-pack); every other state = Service +
  areaServed (State + named metros), **NO street address** (fabrication breach). Fact-check every state tax claim
  against official `.gov` sources before publishing (as done for DE).

### DE ANCHOR — INDUSTRY SET (finalized)
incorporation-holding-companies · ecommerce · professional-services · real-estate · construction · **finance-banking**
(swapped from nonprofit 2026-06-25 — Wilmington credit-card/banking corridor is the genuinely DE-distinct, higher-value
sixth industry). DE-specific service children: **gross-receipts-tax-help** + **franchise-tax-help** (sales-tax-help
dropped — DE has no sales tax).

---

---

## 0 · WHERE WE STAND (the starting line)
- **Built today (v5 Sheet 2): 193 location pages across 5 DEEP states — NY · CA · TX · FL · IL.**
  NY is the proven full template (pillar + 38 children: cities-hub+11 · industries-hub+8 · 13 services
  · 4 honest-triage · pricing). CA/TX/FL/IL match it. These are DONE — **T5 does not touch them** except
  to link them from the new national hub.
- **Real business ADDRESS = 651 N Broad St, Suite 201, Middletown, DE 19709** (`site.json`; global
  `#organization` is typed `Organization, ProfessionalService` with that PostalAddress + geo). **DE is the
  ONLY state where a physical-presence LocalBusiness/map-pack signal is honest.** Every other state is a
  remote/served market → `Service` + `areaServed` only, never a fabricated local address (§8 honesty).
- **v5 rule being adjusted:** Sheet 2 parks "more states until post-flip GSC signal." T5 **deliberately
  pre-builds a curated anchor+core footprint BEFORE flip** for two reasons: (1) DE is the real HQ and must
  exist as a local anchor at launch; (2) a credible multi-state footprint widens organic + AI-citation reach
  and makes the national hub real at flip. **Tier 3 (city/industry children) stays parked** → post-flip,
  GSC-demand-driven, exactly per v5 Sheet 4. *This pre-flip deviation is a founder call — flagged below.*
- **Replication cost is low:** templates already exist (t-location pillar, t-bofu service child, hubs,
  triage). New states = **data files only on proven shared layouts** — no new layouts, no design work.

---

## 1 · PROPOSED STATE LIST (tier + why)

### TIER 1 — ANCHORS (full build, NY-depth)
| State | Why | Local signal |
|---|---|---|
| **Delaware (DE)** | The **real address** — Middletown HQ. Only true map-pack/LocalBusiness asset. Distinct angle is uniquely rich: **incorporation capital** (DE franchise tax, holding cos, registered-agent businesses) + **no state sales tax**. | **LocalBusiness w/ REAL address + geo + map pack** |
| **Indiana (IN)** | Founder-named second anchor. Indianapolis metro; manufacturing/logistics economy; **county income taxes** (genuinely distinct) + flat state PIT. Proves the full template with **areaServed-only** (no physical address). | areaServed (state + metros) |

### TIER 2 — CORE (pillar + essentials; route the rest) — **12 recommended**
Chosen by **economy size × SMB density × genuinely-distinct tax/economy × proximity-credibility to an anchor.**
Grouped by the credibility each anchor lends (Mid-Atlantic ← DE; Midwest ← IN), then Sunbelt growth, then
high-value distinct-tax markets.

| # | State | Cluster | Why this state |
|---|---|---|---|
| 1 | **Pennsylvania (PA)** | Mid-Atlantic ← DE | 6th-largest state economy; **borders DE** (max address credibility); flat 3.07% PIT; Philly business taxes. |
| 2 | **New Jersey (NJ)** | Mid-Atlantic ← DE | Dense DE/NY/PA SMB corridor; distinct CBT + sales tax; high services concentration. |
| 3 | **Maryland (MD)** | Mid-Atlantic ← DE | DC-metro economy, adjacent to DE; diversified professional-services base. |
| 4 | **Virginia (VA)** | Mid-Atlantic ← DE | DC-metro + statewide; large, diversified; gov-contractor/professional-services density. |
| 5 | **Ohio (OH)** | Midwest ← IN | Large Midwest economy next to IN; **CAT (commercial activity tax)** + municipal taxes = distinct. |
| 6 | **Michigan (MI)** | Midwest ← IN | Manufacturing/Detroit; large SMB base; complements the IN logistics/manufacturing angle. |
| 7 | **Georgia (GA)** | Sunbelt growth | Atlanta SMB hub; fast-growing; Southeast organic anchor. |
| 8 | **North Carolina (NC)** | Sunbelt growth | Charlotte/Raleigh boom; **franchise tax** distinct; strong inbound migration. |
| 9 | **Arizona (AZ)** | Sunbelt growth | Phoenix growth; **TPT (transaction privilege tax)** ≠ ordinary sales tax → distinct citable content. |
| 10 | **Tennessee (TN)** | Sunbelt growth | No income tax but **franchise & excise tax**; Nashville boom; distinct angle. |
| 11 | **Washington (WA)** | Distinct-tax / high-value | No income tax but **B&O tax** (uniquely distinct); Seattle ecommerce/tech SMBs. |
| 12 | **Colorado (CO)** | Distinct-tax / high-value | Denver growth; **home-rule sales tax** = the most complex in the US → premium citable expertise. |

**Flex 13th/14th if you want 13–14:** **Massachusetts (MA)** (Boston, high-value services/biotech) and/or
**Missouri/Minnesota/Wisconsin** (Midwest fill). Recommendation: **lock 12**, add MA only if you want a
high-value Northeast cap.

### TIER 3 — LATER (post-flip, parked)
City children + industry children for any Tier-1/Tier-2 state — **built only where post-flip GSC/AI-referral
signal shows real demand** (v5 Sheet 4 forward-plan engine). Not in T5 scope.

---

## 2 · EXACT PAGE SET PER TIER + COUNTS

### TIER 1 anchor — full set (DE shown; IN mirrors, swap state-tax specifics)
| Group | Pages |
|---|---|
| State pillar (t-location) | 1 |
| Cities hub + cities | 1 + **6** (DE: Wilmington · Dover · Newark · Middletown · Smyrna · Bear) / IN: 1 + **8** (Indianapolis · Fort Wayne · Evansville · South Bend · Carmel · Fishers · Bloomington · Hammond) |
| Industries hub + industries | 1 + **6** (DE: incorporation/holding-cos · ecommerce · professional-services · real-estate · construction · nonprofit) |
| Service children (t-bofu) | **~12**: quickbooks-accountant · small-business-accountant · bookkeeping-services · virtual-bookkeeper · monthly-bookkeeping · cleanup-bookkeeping · quickbooks-setup · quickbooks-cleanup · quickbooks-reconciliation · quickbooks-migration · quickbooks-training · quickbooks-error-fixes · **+ state-specific** (DE: franchise-tax-help, drop sales-tax-help → no sales tax; IN: county-income-tax-help / sales-tax-help) |
| Triage (honest, t-bofu) | **4**: business-tax-problems · state-tax-notice-help · urgent-bookkeeping · speak-to-a-proadvisor |
| Pricing | 1 |
| **DE total** | **≈ 32** |
| **IN total** | **≈ 34** |

### TIER 2 core — essentials only (**6 unique pages / state**)
| Page | Type | Intent |
|---|---|---|
| State pillar | t-location | "{service} {state}" hub + near-me; LocalBusiness-areaServed; 2–3 metros named in copy + schema |
| quickbooks-accountant | t-bofu | "quickbooks proadvisor / accountant near me {state}" |
| small-business-accountant | t-bofu | "small business accountant {state}" (distinct near-me query) |
| quickbooks-cleanup | t-bofu | "quickbooks cleanup {state}" (state-tax-distinct) |
| quickbooks-setup | t-bofu | "quickbooks setup {state}" |
| bookkeeping-services | t-bofu | "bookkeeping services {state}" |

> **Decision lever:** 6/state is the recommendation. **Lean-5** = merge the two near-me pages into one.
> **Rich-7** = add monthly-bookkeeping. I recommend **6**.

### Capstone
| Page | Note |
|---|---|
| **/find-an-accountant/ national hub** (t-hub, MOFU) | Currently a 301→/accounting/. Rebuild LAST so it routes to all 19 states (5 existing + DE + IN + 12 core) + honest "all-50-served-remotely" framing. **Removes the temporary 301.** |

### T5 GRAND TOTAL
| Bucket | Pages |
|---|---|
| Tier 1 anchors (DE ≈32 + IN ≈34) | **≈ 66** |
| Tier 2 core (12 × 6) | **72** |
| National hub capstone | **1** |
| **TOTAL NEW** | **≈ 139** |

(Founder can scale: 10 core = ~60 · 13 core = ~78. Lean-5/state trims 12.)

---

## 3 · ROUTING — unique state page vs route-to-global
**Principle (v5 anti-mad-libs):** a page gets a unique per-state version ONLY if its content is genuinely
state-distinct (tax nexus, state filing, near-me geo-intent). Process-identical services route to the
existing global page, which the state pillar links to. This avoids thin duplicate pages that dilute equity.

**ROUTE TO GLOBAL (Tier 2 — pillar links out, no state page):**
- Sub-services → quickbooks-migration `/quickbooks/migration/` · reconciliation · training · error-fixes ·
  payroll `/accounting/payroll-management/` · sales-tax `/accounting/sales-tax-compliance/` ·
  monthly/cleanup bookkeeping `/accounting/bookkeeping/*` · virtual-bookkeeper · urgent-bookkeeping
- **Industries** → `/accounting/industries/{x}/`
- **Triage / speak-to-expert / file-review** → global `/quickbooks/speak-to-a-quickbooks-expert/` ·
  `/quickbooks/file-review/`
- Comparison/vs → `/vs/` · tools/calculators → global · glossary/guides → global · pricing → `/pricing/`

**UNIQUE STATE PAGE:** Tier 1 = full set (above). Tier 2 = the 6 essentials only.
**Metros (Tier 2):** named in pillar copy + `areaServed` schema — **NOT** separate city pages (those are
Tier 3, post-flip). Tier 1 anchors get real city pages.

---

## 4 · SCHEMA PER PAGE TYPE (honesty-bound)
| Page type | Schema |
|---|---|
| **DE pillar (anchor, real HQ)** | `LocalBusiness`/`AccountingService` node w/ **REAL** PostalAddress + geo + openingHours + `areaServed` (DE + metros) + map embed → map-pack eligible. WebPage · BreadcrumbList · FAQPage. **Only DE carries a local street address.** |
| **IN + all Tier-2 pillars** | `Service`/`ProfessionalService`, `provider`=`#organization`, **`areaServed`= State (+ named metros as AdministrativeArea/City)**, **NO local street address** (remote-served → fabrication would breach §8). WebPage · BreadcrumbList · FAQPage. |
| **Service child (t-bofu)** | `Service` (serviceType, provider=`#organization`, areaServed=State) · WebPage · BreadcrumbList · FAQPage · `reviewedBy` `#david-westgate` (matches the 31-money pattern). |
| **City child (Tier 3)** | `Service` areaServed=City · WebPage · Breadcrumb · FAQPage. |
| **Industry child (anchor)** | `Service` areaServed=State + industry `audience` · WebPage · Breadcrumb · FAQPage. |
| **Cities / Industries hub** | `CollectionPage` + `ItemList` + BreadcrumbList. |
| **Pricing** | `Service` + `OfferCatalog` (**canonical pricing only**, Sheet 0) · WebPage · Breadcrumb · FAQPage. |
| **Triage (honest)** | WebPage + FAQPage + **above-fold disclosure banner** (Sheet 7); **never** LocalBusiness, never "official", never imply Intuit. |
| Global head | `#organization`/`#brand`/`#website`/`#david-westgate`/`#abid-khan` persist by `@id` (unchanged). |

FAQ on every type per FAQ-STRATEGY (location cap 6–8 · 4–6 thin children · 1–2 call-intent w/ phone in answer,
Option C). Meta per META-STRATEGY (phone-in-meta on near-me/triage high-intent).

---

## 5 · BUILD ORDER (DE first — the address anchor) · battery + commit per state
1. **DE** (full) — proves new-state replication **+** the real-address LocalBusiness/map-pack path.
2. **IN** (full) — proves the full template with **areaServed-only** (no physical address).
3. **Wave A — Mid-Atlantic (DE-credible):** PA · NJ · MD · VA
4. **Wave B — Midwest (IN-credible):** OH · MI
5. **Wave C — Sunbelt:** GA · NC · AZ · TN
6. **Wave D — distinct-tax/high-value:** WA · CO
7. **Capstone:** rebuild `/find-an-accountant/` national hub → routes to all states → **drop the 301**.

Per state: author data files (genuinely localized tax/economy — no mad-libs) → `--fast` battery mid-wave →
**FULL battery** (incl. faq-schema/overlap/flat, content-equity to completion, links, axe/overflow) →
commit+push. New states are additive (no baseline-equity risk — nothing removed).

---

## 6 · HOW IT TIES TO v5
- **Sheet 2 (LOCATIONS):** T5 extends the proven 193-page template to new states **data-files-only on the
  existing layouts** — exactly Sheet 2's "new state = data files only on proven shared templates."
- **Deviation flagged:** Sheet 2 parks new states "until post-flip GSC signal." T5 pre-builds anchors + 12
  core **before flip** (DE must exist as the real anchor at launch; footprint feeds the national hub + AI
  breadth). **Tier 3 children stay parked** → Sheet 4 forward-plan, demand-driven post-flip.
- **Sheet 5 (flip gate):** new-state URLs join the sitemap; the `/find-an-accountant/` 301 is **removed** when
  the national hub ships; no old-baseline URL changes (additive only).
- **T6 tie-in:** the 16 homepage→unbuilt-state 301-hops resolve as these states build; national hub closes the
  `/find-an-accountant/` 301.

---

## 7 · DECISIONS I NEED FROM YOU (rule before any build)
1. **State list** — approve the **12** core (PA·NJ·MD·VA·OH·MI·GA·NC·AZ·TN·WA·CO)? Add/drop/swap?
   (MA = the flagged 13th.)
2. **Tier-2 depth** — **6 pages/state** (recommended) vs lean-5 (merge near-me) vs rich-7 (+monthly-bkkg)?
3. **Pre-flip deviation** — OK to build this footprint BEFORE flip (vs park until post-flip per v5 Sheet 2)?
4. **National hub** — build `/find-an-accountant/` capstone in T5 (drops the 301), or keep deferred?
5. **DE map-pack** — confirm DE pillar carries the real LocalBusiness address (only DE; all others areaServed-only)?
6. **Anchor city depth** — DE 6 cities / IN 8 cities OK, or trim?

**I build nothing until you rule.**

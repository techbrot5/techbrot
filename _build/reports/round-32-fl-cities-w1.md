# Round 32 — STATE CLUSTER fan-out · FLORIDA CITIES WAVE 1 (5 cities) — NEW STATE
Growth phase, fully autonomous. First Florida wave. Same state-agnostic shared city-child architecture
(`partials/city-child-body.njk` + `_build/lib/city-child.js`) — new state = data files only.

## WHAT I DID
5 Florida **city children** under `/find-an-accountant/florida/cities/`. Florida is its own profile —
**no state personal income tax, but C-corporations pay a 5.5% corporate income tax** (distinct from Texas,
which has neither), no franchise/margin tax, administered by the **Florida Department of Revenue**. The
un-clonable substance is each metro's industry economy + a **different Florida-specific tax item per city**:
1. **Miami** — international trade / finance-fintech / luxury & foreign-buyer real estate / PortMiami.
   Distinctive tax item = **commercial-rent sales tax** (Florida is the one state that taxes commercial
   rent; now being phased down). slug `miami`.
2. **Orlando** — theme-park & tourism capital (Disney/Universal), vacation rentals, sim/defense (Team
   Orlando). Distinctive tax item = **Tourist Development Tax** (the county "bed tax"). slug `orlando`.
3. **Tampa** — finance back-office / healthcare / Port Tampa Bay / MacDill & CENTCOM defense. Distinctive
   tax item = **tangible personal property (DR-405) return**. slug `tampa`.
4. **Jacksonville** — JAXPORT logistics / insurance & financial-services back-office / U.S. Navy. Distinctive
   tax item = **reemployment (RT-6) payroll tax**. slug `jax`.
5. **Fort Lauderdale** — the yachting/marine capital (dealers, brokers, refit yards, charter) + tourism +
   waterfront real estate. Distinctive tax item = the **boat sales-tax cap** ($18,000 max on a vessel). slug `ftl`.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/florida/cities/miami/ — international trade/finance/real estate; commercial-rent sales tax.
- https://techbrot-preview.pages.dev/find-an-accountant/florida/cities/orlando/ — theme-park tourism + vacation rentals; Tourist Development Tax.
- https://techbrot-preview.pages.dev/find-an-accountant/florida/cities/tampa/ — finance/healthcare/port/CENTCOM; tangible personal property return.
- https://techbrot-preview.pages.dev/find-an-accountant/florida/cities/jacksonville/ — JAXPORT logistics/insurance/Navy; reemployment (RT-6) tax.
- https://techbrot-preview.pages.dev/find-an-accountant/florida/cities/fort-lauderdale/ — marine/yachting capital; boat sales-tax cap.

## DECISIONS / JUDGMENT CALLS
- **Florida nuance handled honestly:** every page states FL has no *personal* income tax **but** C-corps pay
  a 5.5% corporate income tax (pass-throughs exempt) — a real distinction from Texas. Referenced the **Florida
  Department of Revenue** (not a "Comptroller").
- **A genuinely different Florida-specific tax item per city** (commercial-rent tax / Tourist Development Tax
  / TPP return / reemployment tax / boat-tax cap) — all real, applied where they actually matter, reinforcing
  per-city distinctness so the mad-libs test fails (Miami international-finance ≠ Orlando theme-park ≠ Tampa
  defense/healthcare ≠ Jacksonville port-logistics ≠ Fort Lauderdale marine).
- **Commercial-rent sales tax** flagged as *being phased down* with current-rate deferred to the FL DOR + CPA
  (it has been reduced over several years) — described structurally, no hard rate asserted, to stay honest.
- **Honesty held.** Everything deferred to the Florida DOR / the county (property appraiser, tax collector) /
  the client's **CPA/EA, who files**: corporate-income tax, commercial-rent-tax current rate, Tourist
  Development Tax remittance, TPP valuation, reemployment-tax rate, the vessel sales/use-tax cap application,
  charter taxability, international/transfer-pricing, DCAA. Founder-name-zero in visible content (David
  Westgate only in `#david-westgate` Person schema). Not-Intuit. No fabricated stats/counts/clients.
- **Reused the existing `florida` / `florida-advisory` CTA intents** — no new intents needed.

## VERIFICATION
- **BATTERY GREEN (hard gate)** — all 5: 8 FAQ · faq-overlap zero · faq-schema-verbatim (8 Q/A). links
  resolve · css-bytes 77,931 B / 83,968 B (no new CSS) · css-drift zero hex · manifest(208) · design-fidelity
  183 content pages (+5) · variety-12a ≤1 numbered system. (`PYTHONUTF8=1` for the console-encoding workaround.)
- **Schema (built HTML):** WebPage + BreadcrumbList + Service (areaServed City + County) + FAQPage + speakable
  (`#<slug>-summary`, `#<slug>-ai-summary-list` — slugs miami/orlando/tampa/jax/ftl) + reviewedBy
  `#david-westgate`. 5 AI Q&A, 8 FAQ, 6 areas, 3 tax-stack, 6 industries, 4 services per page.
- **a11y + overflow (chrome probes ENV-BLOCKED this machine):** static proxy + byte-equivalence to the
  axe-0/27 SF proof. All 5: 1 h1, 28 headings, heading-order OK, 0 img-without-alt, 0 overflow-risk long
  tokens, speakable selectors present; only empty-text links/buttons are the global chrome's aria-labelled
  elements (identical to SF). Overflow clean by construction.

## OPEN ITEMS / FLAGS (carried)
1. **Headless-chrome probes non-functional this session** — live-confirm axe/overflow on the founder's
   machine for the now-21 city children (expected clean — identical components to SF).
2. **Battery console-encoding crash** (`∪` glyph) — needs `PYTHONUTF8=1`; one-line fix worth adding.

## NEXT (autonomous, same order)
Florida has a strong first wave (5 biggest metros). Next: **Illinois** (the last of the CA/TX/FL/IL landing
states — completes the original four), then remaining states, then circle back for CA/TX/FL industry children.
Illinois is distinctive: flat state income tax, the Personal Property Replacement Tax, and Chicago's stack of
local taxes (lease/transaction tax on software/SaaS, the restaurant tax, parking, amusement).

COUNT: total pages live = 189 · re-skinned (142) + growth this phase = 47 · pages added THIS turn =
/find-an-accountant/florida/cities/{miami, orlando, tampa, jacksonville, fort-lauderdale}/ (5 FL city children) ·
remaining in current cluster = optional more FL metros · next cluster = Illinois cities (completes CA/TX/FL/IL).
State coverage: NY full tree · CA 11 cities · TX 5 cities · FL 5 cities · CA/TX/FL/IL/NY landings. City children = 21.

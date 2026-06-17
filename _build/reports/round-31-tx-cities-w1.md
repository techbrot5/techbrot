# Round 31 — STATE CLUSTER fan-out · TEXAS CITIES WAVE 1 (5 cities) — NEW STATE
Growth phase, fully autonomous. First Texas wave; broadens the namesake silo beyond California.
Same shared city-child architecture (`partials/city-child-body.njk` + `_build/lib/city-child.js`) — the
template is state-agnostic, so a new state = data files only (no template/helper changes needed).

## WHAT I DID
5 Texas **city children** under `/find-an-accountant/texas/cities/`. Texas is structurally the OPPOSITE of
California — **no state income tax, and TX cities levy no city income/gross-receipts tax** — so the
un-clonable substance shifts to each metro's distinct **industry economy** layered on the real Texas tax
stack (no income tax → the franchise/"margin" tax; 8.25% sales tax; + a city-/sector-specific 3rd tax item):
1. **Houston** — energy capital: oil & gas (JIB, royalties, AFEs), Port of Houston, Texas Medical Center.
   3rd tax item = **oil & gas severance/production tax**. slug `houston`.
2. **Dallas** — corporate-HQ/finance/insurance/tech (Telecom Corridor); multi-entity + intercompany +
   SaaS. 3rd tax item = **business personal property (BPP) rendition**. slug `dallas`.
3. **Austin** — "Silicon Hills" SaaS/semiconductors/equity-comp + live-music/film/festivals. 3rd tax item
   = **Hotel Occupancy Tax** (events/lodging). slug `austin`.
4. **San Antonio** — "Military City USA": government/defense contracting + cybersecurity + bioscience +
   River Walk tourism. 3rd tax item = **Hotel Occupancy Tax**. slug `sa`.
5. **Fort Worth** — Barnett Shale **natural gas** (JIB/royalty/severance) + aerospace/defense (Lockheed/
   Bell) + AllianceTexas logistics + Stockyards ranching. 3rd tax item = **severance**. slug `fw`.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/texas/cities/houston/ — oil & gas / Port / medical; severance.
- https://techbrot-preview.pages.dev/find-an-accountant/texas/cities/dallas/ — corporate/finance/tech multi-entity; BPP rendition.
- https://techbrot-preview.pages.dev/find-an-accountant/texas/cities/austin/ — SaaS/semiconductors/equity-comp + music; HOT.
- https://techbrot-preview.pages.dev/find-an-accountant/texas/cities/san-antonio/ — military/defense-contracting/cyber/tourism; HOT.
- https://techbrot-preview.pages.dev/find-an-accountant/texas/cities/fort-worth/ — Barnett Shale gas + aerospace + ranching; severance.

## DECISIONS / JUDGMENT CALLS
- **Texas differentiation is ECONOMIC, not tax-code** (and that's honest). Because TX has no income tax and
  no city gross-receipts taxes, the CA-style "different city tax mechanism per city" hook doesn't exist.
  The mad-libs test still FAILS per city because the **local economy** is sharply distinct (Houston oil &
  gas + Port + TMC ≠ Austin SaaS/chips/music ≠ San Antonio military/cyber ≠ Fort Worth Barnett-gas/aerospace/
  ranching ≠ Dallas corporate/finance). To reinforce distinctness I **varied the 3rd tax-stack item per
  city** (severance for the energy cities, BPP for corporate Dallas, HOT for the tourism cities) — all real
  Texas taxes, applied where they genuinely matter.
- **Shared Texas-stack framing** (no income tax → franchise "margin" tax → 8.25% sales tax) appears on each
  page as the accurate statewide reality; the taxEyebrow reads "The Texas taxes we build into your books."
- **Honesty held.** All facts structural and deferred to the **Texas Comptroller** + the relevant city +
  the client's **CPA/EA, who files**. Specifically deferred: franchise/margin-tax thresholds & computation,
  severance-tax rates, depletion method, SaaS taxability determinations, BPP valuation/protest, HOT rate &
  remittance, equity-comp tax (ASC 718), R&D credits, DCAA rate submissions, government-contract matters.
  Founder-name-zero in visible content (David Westgate only in `#david-westgate` Person schema). Not-Intuit
  stated. No fabricated stats/counts/clients/reviews.
- **Reused the existing `texas` / `texas-advisory` CTA intents** (already in intents.json from the TX state
  landing) — no new intents needed.

## VERIFICATION
- **BATTERY GREEN (hard gate)** — "BATTERY PASSED — all checks green." All 5: **8 FAQ** · faq-overlap zero ·
  faq-schema-verbatim (8 Q/A). links resolve · css-bytes **77,931 B / 83,968 B** (no new CSS) · css-drift
  zero hex · manifest(208) · **design-fidelity 178 content pages** (+5) · variety-12a ≤1 numbered system.
  (Ran with `PYTHONUTF8=1` for the known console-encoding workaround.)
- **Schema (built HTML):** WebPage + BreadcrumbList + Service (areaServed City + County/Place) + FAQPage +
  speakable (`#<slug>-summary`, `#<slug>-ai-summary-list` — slugs houston/dallas/austin/sa/fw) + reviewedBy
  `#david-westgate`. 5 AI Q&A, 8 FAQ, 6 areas, 3 tax-stack, 6 industries, 4 services per page.
- **a11y + overflow (chrome probes ENV-BLOCKED this machine):** static proxy + byte-equivalence to the
  axe-0/27 SF proof. All 5: 1 h1, 28 headings, heading-order OK, 0 img-without-alt, 0 overflow-risk long
  tokens, speakable selectors present; only empty-text links/buttons are the global chrome's aria-labelled
  elements (identical to SF). Overflow clean by construction (same grid components as probed-clean SF).

## OPEN ITEMS / FLAGS (carried)
1. **Headless-chrome probes non-functional this session** — live-confirm axe/overflow on the founder's
   machine for the now-16 city children (expected clean — identical components to SF).
2. **Battery console-encoding crash** (`∪` glyph) — needs `PYTHONUTF8=1`; one-line fix worth adding to
   run_battery.py.

## NEXT (autonomous, same order)
Texas has a strong first wave (5 biggest metros). Options: a few more TX metros (El Paso, Arlington,
Corpus Christi, Plano, Lubbock — real distinct substance or SKIP) OR move to **Florida → Illinois → remaining
states**, then circle back for CA/TX industry children. Leaning: a compact 2nd TX wave (El Paso border-trade,
Corpus Christi port/petrochem) then pivot to **Florida**.

COUNT: total pages live = 184 · re-skinned (142) + growth this phase = 42 · pages added THIS turn =
/find-an-accountant/texas/cities/{houston, dallas, austin, san-antonio, fort-worth}/ (5 TX city children) ·
remaining in current cluster = optional more TX metros · next cluster = more TX or pivot to Florida.
State coverage now: NY (full tree) + CA (11 cities) + TX (5 cities) + CA/TX/FL/IL/NY landings.

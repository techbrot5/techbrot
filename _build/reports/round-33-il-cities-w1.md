# Round 33 — STATE CLUSTER fan-out · ILLINOIS CITIES WAVE 1 (5 cities) — NEW STATE (completes CA/TX/FL/IL)
Growth phase, fully autonomous. First Illinois wave — completes the four namesake landing states. Same
state-agnostic shared city-child architecture (`partials/city-child-body.njk` + `_build/lib/city-child.js`).

## WHAT I DID
5 Illinois **city children** under `/find-an-accountant/illinois/cities/`. Illinois is distinctive: a **flat**
4.95% personal income tax (7% corporate), the genuinely IL-unique **Personal Property Replacement Tax (PPRT)**
that hits even pass-throughs, and Chicago's notorious local-tax stack. Administered by the **Illinois Dept of
Revenue** (+ City of Chicago Dept of Finance for the local taxes). Per-city distinctness via economy + a
distinct tax angle:
1. **Chicago** — finance/derivatives (CME), tech, professional services. **The Chicago local-tax stack**:
   10.25% sales tax (highest big-city in the U.S.), the **Personal Property Lease Transaction Tax on
   SaaS/cloud**, the **Amusement Tax on streaming/events** + PPRT. slug `chicago`.
2. **Aurora** — IL's 2nd city: Fox Valley manufacturing, data centers, casino gaming. Tax angle = the
   **manufacturing machinery & equipment (MM&E) exemption** + PPRT. slug `aurora`.
3. **Naperville** — DuPage corporate/R&D-tech HQ suburb (I-88 corridor); multi-entity + SaaS. Tax angle =
   Illinois' **high property tax** + PPRT. slug `naperville`.
4. **Joliet** — CenterPoint Intermodal (one of N. America's largest inland ports); warehousing/3PL/trucking.
   Tax angle = ~8.75% home-rule sales/use + **multi-state nexus** + PPRT. slug `joliet`.
5. **Rockford** — aerospace components/precision machining + air-cargo (RFD). Tax angle = the **MM&E
   exemption** on CNC/metalworking equipment + PPRT. slug `rockford`.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/illinois/cities/chicago/ — Chicago lease/amusement taxes (SaaS/streaming) + 10.25% + PPRT.
- https://techbrot-preview.pages.dev/find-an-accountant/illinois/cities/aurora/ — manufacturing/data-centers/gaming; MM&E exemption.
- https://techbrot-preview.pages.dev/find-an-accountant/illinois/cities/naperville/ — corporate/R&D/SaaS; high property tax + PPRT.
- https://techbrot-preview.pages.dev/find-an-accountant/illinois/cities/joliet/ — intermodal logistics/3PL; multi-state nexus.
- https://techbrot-preview.pages.dev/find-an-accountant/illinois/cities/rockford/ — aerospace/precision machining + air cargo; MM&E exemption.

## DECISIONS / JUDGMENT CALLS
- **Chicago is the headline** — its local-tax stack (lease transaction tax reaching SaaS/cloud, amusement tax
  reaching streaming) is genuinely distinctive and the standout "find-replace fails" hook. The four suburbs
  do NOT carry the 10.25% rate or the Chicago local taxes (each notes its own ~7.75–8.75% rate), which itself
  proves distinctness from Chicago.
- **PPRT featured on every IL page** as the IL signature (taxes pass-through net income — a real surprise for
  S-corp/partnership owners), described structurally and deferred to the IDOR + CPA.
- **Suburb cross-links to Chicago tax** where honest: Naperville/Aurora SaaS sellers are told the Chicago lease
  tax can apply on city sales — accurate and useful, reinforces the cluster.
- **Honesty held.** Everything deferred to the IDOR / City of Chicago Dept of Finance / county / the client's
  **CPA/EA, who files**: income-tax & PPRT rates, the lease/amusement-tax rates and SaaS/streaming application,
  the MM&E exemption eligibility, property-tax assessment/appeal, multi-state nexus, DCAA. No specific
  lease/amusement rate asserted (they change and are contested) — described structurally. Founder-name-zero in
  visible content (David Westgate only in `#david-westgate` Person schema). Not-Intuit. No fabricated stats.
- **Reused the existing `illinois` / `illinois-advisory` CTA intents** — no new intents needed.

## VERIFICATION
- **BATTERY GREEN (hard gate)** — all 5: 8 FAQ · faq-overlap zero · faq-schema-verbatim (8 Q/A). links resolve
  · css-bytes 77,931 B / 83,968 B (no new CSS) · css-drift zero hex · manifest(208) · design-fidelity 188
  content pages (+5) · variety-12a ≤1 numbered system. (`PYTHONUTF8=1` console-encoding workaround.)
- **Schema (built HTML):** WebPage + BreadcrumbList + Service (areaServed City + County) + FAQPage + speakable
  (`#<slug>-summary`, `#<slug>-ai-summary-list`) + reviewedBy `#david-westgate`. 5 AI Q&A, 8 FAQ, 6 areas,
  3 tax-stack, 6 industries, 4 services per page.
- **a11y + overflow (chrome probes ENV-BLOCKED this machine):** static proxy + byte-equivalence to the
  axe-0/27 SF proof. All 5: 1 h1, 28 headings, heading-order OK, 0 img-without-alt, 0 overflow-risk long
  tokens, speakable selectors present; only empty-text links/buttons are the global chrome's aria-labelled
  elements (identical to SF). Overflow clean by construction.

## ⛔ FLIP-BLOCKER LIST (founder 2026-06-17 — recorded in BUILD-TRACKER CUTOVER GATE item 6)
**Before flip, axe + overflow MUST be run LIVE on the founder's machine across EVERY growth-phase child** —
inferred-clean must not stack to flip. Running inferred-only set: **26 city children** (11 CA + 5 TX + 5 FL +
5 IL) + **24 glossary terms** = 50 pages pending live axe/overflow confirmation. Re-run via `axe_page.ps1` /
`overflow_probe.ps1` on each before cutover.

## OPEN ITEMS / FLAGS (carried)
1. **Headless-chrome probes non-functional this session** (the flip-blocker above tracks the running list).
2. **Battery console-encoding crash** (`∪` glyph) — needs `PYTHONUTF8=1`; one-line fix worth adding to run_battery.py.

## NEXT (autonomous)
The four namesake landing states (CA/TX/FL/IL) now all have city children. ~6 pages from 200. Options:
deepen with a 2nd wave in a state, OR start the **remaining-states** roll-out (the 16 queued landings —
Alabama, Arizona, Colorado, Georgia, Indiana, Maryland, Massachusetts, Michigan, Minnesota, Nevada, New Jersey,
North Carolina, Ohio, Pennsylvania, Virginia, Washington — currently route to /contact/). Leaning: build a
few high-value **new-state landing pages** (real per-state tax: e.g. WA B&O tax, OH CAT, PA flat+local, NV no-
income-tax, MA flat) to cross 200, then their cities. Will flag the build-order choice in the next round.

COUNT: total pages live = 194 · re-skinned (142) + growth this phase = 52 · pages added THIS turn =
/find-an-accountant/illinois/cities/{chicago, aurora, naperville, joliet, rockford}/ (5 IL city children) ·
remaining in current cluster = optional more IL metros · next cluster = new-state landings (toward 200) or more cities.
State coverage: NY full tree · CA 11 · TX 5 · FL 5 · IL 5 · CA/TX/FL/IL/NY landings. City children = 26.

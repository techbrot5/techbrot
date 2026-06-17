# Round 30 — STATE CLUSTER fan-out · CA CITIES WAVE 2 (5 cities)
Growth phase, fully autonomous. Continues round-29-ca-cities-w1.md (LA/SD/SJ/Sacramento/Oakland).
Same proven shared city-child architecture (`partials/city-child-body.njk` + `_build/lib/city-child.js`).

## WHAT I DID
5 more California **city children** under `/find-an-accountant/california/cities/`, each genuinely
localized (mad-libs test FAILS — distinct local economy + tax reality):
1. **Fresno** — Central Valley ag hub: CA **farm-equipment/diesel sales-tax exemptions** (CDTFA),
   seasonal/H-2A labor, packing-house/crop cost accounting. slug `fresno`.
2. **Long Beach** — its **OWN charter-city business license tax** (explicitly NOT the LA city tax — a
   common, costly confusion) + **Port of Long Beach** logistics/import-export/customs + tidelands oil.
   slug `lb`.
3. **Anaheim** — tourism/convention capital (Disneyland): **Transient Occupancy Tax** (tracked as a
   liability, not revenue) + tourism-district assessment + high-volume hospitality POS + tipped/seasonal
   payroll; OC's lower 7.75% rate. slug `anaheim`.
4. **Riverside** — **Inland Empire** logistics/warehousing/distribution: inventory & COGS at scale,
   warehouse/freight costing, fixed-asset (racking/forklifts) depreciation, heavy **multi-state nexus**.
   slug `riverside`.
5. **Bakersfield** — Kern County **oil & gas** capital + top ag county: **joint-interest billing (JIB)**,
   royalty/working-interest accounting, **lease operating statements (LOS)**, depletion, oilfield-services
   job costing, multi-entity. slug `bakersfield`.

## PREVIEW URLS (preview build; LAN dev = http://192.168.1.7:8080/)
- https://techbrot-preview.pages.dev/find-an-accountant/california/cities/fresno/ — farm sales-tax exemptions + ag/packing localization.
- https://techbrot-preview.pages.dev/find-an-accountant/california/cities/long-beach/ — own city business tax (not LA's) + Port logistics.
- https://techbrot-preview.pages.dev/find-an-accountant/california/cities/anaheim/ — TOT as a liability + tourism/hospitality.
- https://techbrot-preview.pages.dev/find-an-accountant/california/cities/riverside/ — Inland-Empire distribution + multi-state nexus.
- https://techbrot-preview.pages.dev/find-an-accountant/california/cities/bakersfield/ — oil & gas JIB/royalty/LOS + Kern ag.

## DECISIONS / JUDGMENT CALLS
- **Each city leads on a genuinely different mechanism** (not a name-swap): Fresno ag exemptions, Long
  Beach its-own-city-tax + Port, Anaheim TOT-as-liability, Riverside multi-state-nexus-from-distribution,
  Bakersfield oil-&-gas JIB/royalty/LOS. Several deliberately CONTRAST with earlier cities to prove
  distinctness — Long Beach explicitly states it is NOT under LA's business tax; Anaheim notes the lower OC
  sales-tax rate; Fresno/Bakersfield carry the ag layer the metro pages don't.
- **Honesty held.** All facts described structurally and deferred to the naming authority (City of
  Fresno/Long Beach/Anaheim/Riverside/Bakersfield, FTB, CDTFA) **and the client's CPA/EA, who files**.
  Specifically deferred: farm-exemption eligibility, TOT remittance, multi-state nexus determination,
  depletion method, severance/production-tax positions, JIB/royalty tax treatment, customs/duty. Founder-
  name-zero in visible content (David Westgate only in `#david-westgate` Person/reviewedBy schema).
  Not-Intuit stated. No fabricated stats/counts/clients/reviews.
- **Combined sales-tax rates as illustrative current-as-of-review** with a "confirm before relying" note
  in every taxNote: Fresno ~8.35%, Long Beach ~10.25%, Anaheim ~7.75%, Riverside ~8.75%, Bakersfield ~8.25%.
- **Industry hrefs** reuse the closest existing national industry pages (cannabis/oil/ag/logistics →
  /professional-services/, /restaurant/, /ecommerce/, /real-estate/, /saas/) since CA-specific industry
  children don't exist yet; all resolve. Repoint when CA industry children ship.

## VERIFICATION
- **BATTERY GREEN (hard gate)** — "BATTERY PASSED — all checks green." All 5: **8 FAQ** · faq-overlap zero ·
  faq-schema-verbatim (8 Q/A). links resolve · css-bytes **77,931 B / 83,968 B** (no new CSS) · css-drift
  zero hex · manifest(208) · **design-fidelity 173 content pages** (+5) · variety-12a ≤1 numbered system.
  (Ran with `PYTHONUTF8=1` to avoid the known console-encoding print crash — content unaffected.)
- **Schema (built HTML):** WebPage + BreadcrumbList + Service (areaServed City + County/Place) + FAQPage +
  speakable (`#<slug>-summary`, `#<slug>-ai-summary-list`) + reviewedBy `#david-westgate`. 5 AI Q&A, 8 FAQ,
  6 areas, 3 tax-stack, 6 industries, 4 services per page.
- **a11y + overflow (chrome probes ENV-BLOCKED — headless chrome returns 0-length DOM on this machine):**
  verified by **static proxy** + **byte-equivalence to the axe-0/27 founder-approved SF page**. All 5:
  exactly 1 h1, 28 headings, heading-order OK, 0 img-without-alt, 0 overflow-risk long tokens; the only
  empty-text links/buttons are the global chrome's aria-labelled elements (3× "TechBrot home", "Call…",
  nav open/close) — identical to SF. Overflow clean by construction (same grid components as the
  probed-clean SF page; no tables, no long tokens).

## OPEN ITEMS / FLAGS (carried from round 29, still open)
1. **Headless-chrome probes non-functional this session** — run axe_page.ps1 / overflow_probe.ps1 on the
   founder's machine to live-confirm these 10 CA cities (expected clean — identical components to SF).
2. **Battery console-encoding crash** (the `∪` glyph) — needs `PYTHONUTF8=1` workaround; worth a one-line
   fix in run_battery.py (`sys.stdout.reconfigure(encoding='utf-8')`).
3. (Round 29) Self-reported `Get-Process chrome | Stop-Process` incident — corrected; kill_probe.ps1 only since.

## NEXT (autonomous, same order)
CA cities have strong coverage now (11 of the metro/Valley set). Either a few more CA metros (Santa Ana,
Irvine, Chula Vista, Stockton, Modesto — real distinct substance or SKIP) OR pivot to CA **industry**
children, then **TX → FL → IL → remaining states**. Leaning: pivot to CA industries / start TX next to
broaden the namesake silo geographically.

COUNT: total pages live = 179 · re-skinned (142) + growth this phase = 37 · pages added THIS turn =
/find-an-accountant/california/cities/{fresno, long-beach, anaheim, riverside, bakersfield}/ (5 CA city
children) · remaining in current cluster = optional more CA metros + CA industries · next cluster =
CA industries or TX cities (broaden to next state).

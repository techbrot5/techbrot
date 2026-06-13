# Website UI kit — the five tier templates

High-fidelity mockups of techbrot.com's five fixed page skeletons (design brief §6), built **only** from the production CSS (`css/03-components.css`, `css/04-pages.css`) and the §5 kit (`css/05-kit.css`). Plain HTML + the real classes — copy markup straight into 11ty templates.

| File | Tier | Sequence |
|---|---|---|
| `index.html` | overview | links to all five |
| `Hub.html` | T-HUB | hero--hub (dark, full motif) → in-brief → disclosure → service card-grid → framework → trust-row → cta-band |
| `Service.html` | T-MOFU | hero--service (single motif) → in-brief → signal-grid → cadence → faq → related → cta-band |
| `Contact.html` | T-BOFU | hero--compact → trust-row HIGH → contact-layout (trust column + intake form) → faq → phone cta-band |
| `Guide.html` | T-GUIDE | hero--editorial → sticky toc → narrow prose with pull/stat/framework → faq → related → soft cta-band |
| `Location.html` | T-LOCATION | hero--hub + motif → state in-brief → nexus cards → city pills → trust-row → operator (David Westgate) → cta-band |

Notes:
- Header/footer here are **deliberate minimal placeholders** — the production mega-nav and premium footer are being rebuilt and have no canonical design yet. Don't propagate this chrome as final.
- The LOCATION hero reuses the ledger motif; the brief calls for a **state-map SVG motif** which needs real artwork.
- `kit.js` is the production-compatible FAQ accordion contract (aria-expanded + data-open).
- All phone numbers, ratings, and stats are PLACEHOLDERS — replace with the firm's real values (trust-row must never ship fabricated).

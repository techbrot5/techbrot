# Motif language — the Alignment Field

**Derivation.** The mark's signature is its gap: a detached bar, exactly 4/64 units
from the body, held in optical balance (left arm 18 = gap 4 + bar 14). The motif
language is that gap, repeated: **ledger-like bar rows, each split by one gap;
the gaps scatter, then converge to a single vertical channel.** Systems brought
into alignment. It replaces the old ledger-geometry motif in the same slots,
same contracts (explicit dims, `currentColor`, `aria-hidden`, single color
channel — opacity carries depth).

## Geometry constants
- Bar height : gap width = 24 : 10 at field scale (mark-true 3:1 reads too thin below ~32px bars; 2.4:1 is the optical correction).
- One gap per row. Never two. The gap is the signature — scarcity keeps it legible.
- Row pitch = 2⅓ × bar height (24 → 56).
- Convergence channel sits right of center (x = 372/560 ≈ 66%) — same side as the mark's floating bar.
- Corners sharp. Never rounded, never outlined, never gradient-filled.
- Opacity ramp .18 → 1.0, top to bottom — alignment gains weight as it resolves.

## Three intensities
| Intensity | Tier | Form | Asset / recipe |
|---|---|---|---|
| **Full-grade** | T-HUB, T-LOCATION | 12-row field, 560×720, in the dark hero (`.hero__motif`) | `assets/motif/motif-align-full.svg` |
| **Restrained** | T-MOFU, T-GUIDE | single aligned row (or 2–3 rows max) as section punctuation; cta-band slot | `assets/motif/motif-align-single.svg` — DRAFT, pending mid-intensity approval after the two poles |
| **Hairline** | T-BOFU | the **gapped rule**: 48×3, segments 30/4/14 — the crossbar in plan view | CSS only, see below |

## Color rules
- On dark surfaces (`--color-surface-dark`): motif color = `--color-accent-soft` (#3D63E8). Decorative, `aria-hidden`, no contrast requirement; cobalt-on-ink at ~2.4:1 deliberately recedes.
- On light/tier surfaces: `--color-accent` (#2B4FD6, AA ≥5.4:1 on every tier tint) — or `--color-ink-faint` when the motif must whisper (legal-adjacent pages).
- One color per instance. Never mix accent + ink bars in the same field.

## CSS recipes (token-only, battery-safe)
```css
/* BOFU hairline — replaces the solid 48×3 stripe on .hero--compact */
.hero--compact .hero__heading::before {
  content: "";
  display: block;
  width: 48px;
  height: 3px;
  margin-bottom: var(--space-6);
  background: linear-gradient(90deg,
    var(--accent) 0 30px, transparent 30px 34px, var(--accent) 34px 48px);
}

/* Quick-5 question marker — the aligned underscore (left-rule replacement) */
.ai-summary__question::after {
  content: "";
  display: block;
  width: 26px;
  height: 2px;
  margin-top: var(--space-2);
  background: linear-gradient(90deg,
    var(--accent) 0 16px, transparent 16px 19px, var(--accent) 19px 26px);
}

/* Disclosure banner — gapped accent segment riding the top hairline */
.disclosure {
  position: relative;
  border-top: 1px solid var(--border-hairline);
  border-bottom: 1px solid var(--border-hairline);
}
.disclosure::before {
  content: "";
  position: absolute;
  top: -2px;
  left: 0;
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg,
    var(--accent) 0 30px, transparent 30px 34px, var(--accent) 34px 48px);
}
```

## Slot mapping (t-hub.njk and siblings — include path is the only change)
| Old include | New include |
|---|---|
| `partials/motif-ledger-full.svg` | `partials/motif-align-full.svg` |
| `partials/motif-ledger-single.svg` | `partials/motif-align-single.svg` |
| `.hero--compact` 48×3 solid `::before` | gapped-rule recipe above |

## Don'ts
- No diagonal compositions, no rotation — the language is strictly orthogonal.
- No animation of the field (reduced-motion parity; the motif is print-safe).
- Never use the field as a background *under* text — it sits beside or above.
- The OG card uses a cropped field fragment (see `assets/og/og-template.html`), never the full 12 rows.

## Rendered proofs (Design System tab → Motif)
`guidelines/motif-hub-hero.html` · `guidelines/motif-bofu-hero.html` ·
`guidelines/motif-quick5-disclosure.html` · `assets/og/og-template.html`

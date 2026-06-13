# Accessibility standards — TechBrot

WCAG 2.2 AA is the floor, not the target.

## Color & contrast
- Body text is `--ink-900` on `--paper`/`--surface` (≈15:1). Muted text `--ink-500` stays ≥4.5:1.
- Cobalt `--cobalt-600` on white = 5.9:1 — safe for links and small text. Never use cobalt-500 or lighter for text on light surfaces.
- On ink surfaces, body text is `--paper-on-ink`; `--muted-on-ink` is for secondary lines ≥14px only.
- Semantic meaning is never color-only: comparison dots carry `aria-label`s, deltas carry signs (−22), badges carry words.

## Type & readability
- Minimum sizes: 16px UI body, 18px article body, 12px only for table meta/legal.
- Line length ≤ 680px (`--measure-text`); line height 1.65 for reading text.
- All sizes in rem; layouts survive 200% zoom and `text-spacing` overrides.

## Structure & semantics
- Semantic HTML first: `<nav>`, `<article>`, `<figure>/<figcaption>`, `<table>` with `scope`, real `<button>`/`<a>`.
- One `<h1>` per page; heading levels never skip.
- Diagrams: `role="img"` + `aria-label` describing the conclusion, plus a visible caption. Data also appears as a table when the chart is the only source.
- Forms: every control has a `<label>` (Field component), errors use `role="alert"` and `aria-invalid`.

## Interaction
- Focus is always visible: 2px cobalt outline, 2px offset (`:focus-visible` in base.css).
- Hit targets ≥ 44px on touch surfaces; buttons are 32/40/48px tall with padding making up width.
- `prefers-reduced-motion` collapses all animation (base.css). No motion is load-bearing.
- Sticky header is the only fixed element; it never traps focus or obscures anchored content.

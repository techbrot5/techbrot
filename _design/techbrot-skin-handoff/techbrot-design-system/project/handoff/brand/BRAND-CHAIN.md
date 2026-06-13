# Brand-chain asset set (Stage 2)

## Files (assets/brand/ + assets/logo/)
| File | Use |
|---|---|
| `assets/logo/techbrot-favicon.svg` | `<link rel="icon" type="image/svg+xml">` — replaces `/assets/img/brand/icon.svg` |
| `assets/brand/favicon-16.png` / `favicon-32.png` | legacy `<link rel="icon" sizes>` |
| `assets/brand/apple-touch-icon.png` | 180×180, full-bleed ink (iOS applies its own mask) |
| `assets/brand/icon-192.png` / `icon-512.png` | PWA manifest, purpose `any` |
| `assets/brand/icon-maskable-512.png` | purpose `maskable` — mark at 48% inside the safe zone |
| `assets/brand/site.webmanifest` | manifest, theme/background `#FBFAF7` |
| `assets/logo/techbrot-monogram-dark.svg` · `techbrot-logo-horizontal-dark.svg` | dark-surface (footer, dark hero) lockups |
| `assets/og/og-template.html` | 1200×630 batch-generator template (gate item 6) |

## base.njk head changes at cutover
```html
<meta name="theme-color" content="#FBFAF7">
<link rel="icon" href="/assets/img/brand/icon.svg" type="image/svg+xml">  <!-- new mark SVG -->
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/brand/favicon-32.png">
<link rel="apple-touch-icon" href="/assets/img/brand/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/fraunces-var-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/publicsans-var-latin.woff2" as="font" type="font/woff2" crossorigin>
```

## Schema updates (schemaGlobal.json)
- `Organization.logo` → ImageObject `{ "@type": "ImageObject", "url": "<site>/assets/img/brand/icon-512.png", "width": 512, "height": 512 }`
- `Brand.logo` → same ref; OG fallback image → the OG batch output for `/`.
- Per-page `og:image` references resolve to `assets/img/og/<slug>-og.png` from the batch round.

## OG batch contract
Template: `assets/og/og-template.html`. Per page, swap `.og__kicker` and
`.og__title` text; screenshot at exactly 1200×630. Title clamps: ≤2 lines at
76px (≈38 chars/line) — longer titles drop to 64px before truncating. The
motif fragment and footer row never change.

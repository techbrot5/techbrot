# Implementation guides

## Claude Code
1. Copy `styles.css` + `tokens/` + `assets/` into the project; link `styles.css` once.
2. Tokens are plain CSS custom properties on `:root` — consume them from any stack
   (vanilla, React, Vue, Tailwind via `var(...)` arbitrary values).
3. React components in `components/` are self-contained JSX (React import only, no
   npm deps, styling via tokens). Port them as-is; each `<Name>.prompt.md` is the
   usage contract and `<Name>.d.ts` the props contract.
4. Self-host fonts for production: download Fraunces (variable, opsz 9–144),
   Public Sans (variable), IBM Plex Mono 400/500/600 as woff2 into `assets/fonts/`,
   replace the `@import` in `tokens/fonts.css` with `@font-face` rules,
   `font-display: swap`, and preload the two primary files.
5. Keep JS minimal: the marketing site needs none beyond forms; diagrams are
   server-renderable SVG/HTML.

## Bootstrap Studio
1. Add `styles.css` (and the `tokens/` folder) as linked CSS files in the project;
   put the Google Fonts URL from `tokens/fonts.css` in the page's font settings.
2. Map Bootstrap variables to tokens in a small override sheet:
   `--bs-body-bg: var(--paper); --bs-body-color: var(--ink-900);
   --bs-body-font-family: var(--font-sans); --bs-link-color: var(--cobalt-600);
   --bs-border-color: var(--line); --bs-border-radius: 6px;`
3. Buttons: restyle `.btn-primary` to `--btn-primary-bg` (ink) — never Bootstrap blue.
   `.btn-outline-secondary` maps to the secondary button spec.
4. Headings: set h1–h4 to Fraunces in the appearance panel; body stays Public Sans.
5. Rebuild components from their card HTML as Bootstrap Studio custom components
   (the markup is plain HTML/CSS once rendered — copy from browser dev tools).
6. Diagrams export as inline SVG blocks — paste into Custom Code components.

## SEO / AI-search rules (both stacks)
- Semantic HTML, one h1, descriptive headings that answer questions.
- Diagrams get `aria-label` + caption text containing the finding (crawlable).
- Figures and claims carry sample sizes and dates in visible text.
- No text baked into images — everything is live text or SVG `<text>`.

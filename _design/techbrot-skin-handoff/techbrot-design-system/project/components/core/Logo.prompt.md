TechBrot logo as inline SVG — use in navbars, footers, covers instead of <img> tags.

```jsx
<Logo variant="horizontal" height={28} />
<Logo variant="monogram" theme="dark" height={40} />
<Logo variant="tile" height={48} />
```

- `variant`: `horizontal` (nav/header) · `monogram` (badges, watermarks) · `tile` (app-icon style)
- `theme="dark"` for ink/inverted surfaces. The mark is always one color — never recolor pieces.

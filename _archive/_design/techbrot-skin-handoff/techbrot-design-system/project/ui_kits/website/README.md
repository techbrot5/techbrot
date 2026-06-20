# Website UI kit

The TechBrot marketing site — the brand's primary surface. Three screens, composed
entirely from the design-system components (`window.TechBrotDesignSystem_de93db`):

| File | Screen | Shows |
|---|---|---|
| `HomeScreen.jsx` | Home | Hero (display Fraunces + ink/secondary CTAs), stats row, services cards, methodology ProcessFlow on white band, research cards + BarChart, inverted-ink CTA band, footer |
| `ArticleScreen.jsx` | Research article | The editorial template: badges, 60px Fraunces title, byline avatar, 680px measure at 18/1.65, framed BarChart, Callout, DataTable, methods note |
| `ServicesScreen.jsx` | Services | Service cards with fixed-fee eyebrows, ComparisonGrid + DecisionTree band, working contact form (Field/Input/Select → success state) |

`index.html` is the interactive entry — Navbar links switch screens
(Research → article, Services/Methodology → services). Screen choice persists in
localStorage.

Layout rules demonstrated here: 1120px container, 80–96px section padding,
hairline rules between page sections, alternating paper/white/ink bands,
one cobalt highlight per diagram.

# TechBrot Logo System — Production Specifications

## The mark
A geometric slab "T" built on a 64-unit grid. The right arm of the crossbar is a
**detached bar** separated by a precise 4-unit gap — negative space that reads as
modular systems brought into alignment. No calculators, charts, coins, or checkmarks.

### Geometry (64×64 grid)
- Body (crossbar-left + stem): `M8 10 H38 V54 H26 V22 H8 Z`
- Floating bar: `rect x=42 y=10 w=14 h=12`
- Crossbar reach: 48 units (x 8→56), centered. Stem width 12, centered at x=32.
- Gap: 4 units (38→42). Left arm (18) = gap + floating bar (4+14). Optical balance.
- Corners are sharp. Never round the mark itself; rounding lives on the tile.

## Files
| File | Use |
|---|---|
| `techbrot-monogram.svg` | Standalone mark, ink `#1A1915` on transparent — watermarks, partner badges |
| `techbrot-monogram-dark.svg` | Mark in paper `#F5F3EC` for dark surfaces |
| `techbrot-tile.svg` | App icon / social avatar — ink tile `rx=14`, paper mark at 62% |
| `techbrot-favicon.svg` | Favicon — tile `rx=12`, mark at 70% for small-size legibility |
| `techbrot-logo-horizontal.svg` | Mark + wordmark, light mode — site header, documents |
| `techbrot-logo-horizontal-dark.svg` | Horizontal lockup for dark surfaces |
| `techbrot-logo-stacked.svg` | Primary stacked lockup — covers, title slides |

## Wordmark
"TechBrot" set in **Fraunces**, weight 600, `opsz` 40, tracking −0.013em, ink `#1A1915`.
The lockup SVGs use live `<text>` — convert to outlines before using outside
font-loaded HTML (email signatures, third-party embeds, print).

## Color rules
- Mark is **one color only**: ink `#1A1915` on light, paper `#F5F3EC` on dark.
- Never use cobalt, brass, gradients, outlines, or shadows on the mark.
- Acceptable backgrounds: paper `#FBFAF7`, white, ink `#181711`, photography with ≥4.5:1 contrast.

## Clear space & minimum sizes
- Clear space: the width of the floating bar (14/64 of mark height) on all sides.
- Minimum sizes: monogram 16px; tile 16px; horizontal lockup 24px tall.
- Below 24px, always prefer the monogram/tile over lockups.

## Don'ts
- Don't close the gap, recolor pieces individually, skew, rotate, or add effects.
- Don't pair the mark with taglines inside the clear space.
- Don't place the light tile on busy imagery without a paper backing.

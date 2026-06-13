# Inline icon set (Lucide, vendored)

Factory rule: inline-copied SVG, never CDN. These 8 are hand-vendored Lucide
copies at **stroke 1.75, 24 viewBox, round caps/joins, currentColor**,
default render 20px (18px inside .btn / table marks, 24px in phone-cta).

phone · chevron-down · menu · x · arrow-right · check · minus · star

Usage: paste inline (or via the build's icon include) so `currentColor`
inherits. Always `aria-hidden="true"` + text label alongside; comparison-table
marks keep their `.sr-only` equivalents (mark-yes/mark-no stay CSS-drawn).

⚠ FLAG: vendored from memory against Lucide 0.4xx geometry — diff against the
official lucide repo SVGs before cutover (stroke-width attribute aside, paths
should match byte-for-byte; replace any that drifted).

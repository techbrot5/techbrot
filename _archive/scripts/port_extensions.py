"""Changeover step 4: port the still-needed session/content components from
the ARCHIVED old bundle into 09-extensions.css. Every ported rule is
TOKEN-ONLY, so the skin guarantee re-cuts it to the new palette/radii
automatically — these are content-machinery components the new system has
no equivalent for (legal-doc, process-diagram, why-network table, home
card families, nested-FAQ children, photo/team marks, grid utilities).
Marked EXTENSION; upstream to the Design project pending.
Usage: python _build/scripts/port_extensions.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ARCH = ROOT / "_build" / "archive" / "old-skin"
OUT = ROOT / "src" / "assets" / "css" / "09-extensions.css"

# selector prefixes to port, per archive file. NARROW BY DESIGN (CSS gate):
# everything else is a MARKUP SWAP onto new-system vocabulary instead —
# why-network → vs-table · card families → review-card shells + grid-2/3 ·
# tiles/pills → flex link lists · card-grid--two → grid-2 ·
# ledger-figure → figure + fig-caption.
WANT = {
    "07-extensions.css": (
        ".legal-doc", ".process-diagram", ".stack-8",
    ),
    "03-components.css": (
        ".faq__children", ".faq__child", ".faq__more",
        ".review-card__fact",
    ),
}


# gate trim (round-10): the ported process-diagram drops its connector
# hairlines + junction dots (kept: the accent top markers). ~0.6 KB min.
DROP_EXACT = (
    ".process-diagram .process-step::after",
    ".process-diagram .process-step:last-child::after",
    ".process-diagram .process-step__number::before",
)


def take_rules(css, prefixes):
    out = []
    # walk top-level blocks incl. @media wrappers
    i = 0
    for m in re.finditer(r"(@media[^{]+)\{((?:[^{}]*\{[^{}]*\})+)\s*\}|([^{}@]+)\{([^{}]*)\}", css):
        if m.group(1):  # media block — keep matching inner rules
            media = m.group(1).strip()
            inner = []
            for r in re.finditer(r"([^{}]+)\{([^{}]*)\}", m.group(2)):
                sel = r.group(1).strip()
                # gate trim: ported process-diagram skips its tablet step
                if "720px" in media and "process-diagram" in sel:
                    continue
                if any(p in sel for p in prefixes):
                    inner.append(f"{sel}{{{r.group(2).strip()}}}")
            if inner:
                out.append(f"{media}{{{''.join(inner)}}}")
        else:
            sel = m.group(3).strip()
            if sel in DROP_EXACT:
                continue
            if any(p in sel for p in prefixes):
                out.append(f"{sel} {{{m.group(4)}}}")
    return out


blocks = []
for fname, prefixes in WANT.items():
    css = (ARCH / fname).read_text(encoding="utf-8")
    rules = take_rules(css, prefixes)
    blocks.append(f"/* ── ported from archived {fname} (token-only; skin "
                  f"guarantee re-cuts to the new palette) ── */\n" + "\n".join(rules))
    print(f"{fname}: {len(rules)} rules ported")

header = """/* 09-extensions.css — SESSION EXTENSIONS on the NEW SKIN (changeover
   round 10+). Content-machinery styling the skin does not define lands
   here as named, token-only classes (one-class-system rule). Components
   below are PORTED from the archived old bundle — token-only, so the
   new token values re-skin them automatically. Upstream candidates.
   New-voice additions at the foot. */

/* .section--alt — founder ruling (round-10 step-4): semantically fine,
   kept across the built pages; new-system definition on the alt token. */
.section--alt { background: var(--bg-section-alt); }

/* .tldr__heading — pages carry an equity h2 inside the TL;DR card (the
   new tldr ships label+body only). New-voice heading, serif, snug. */
.tldr__heading {
  font-family: var(--font-serif);
  font-size: var(--fs-22);
  font-weight: var(--fw-semibold);
  font-variation-settings: var(--serif-heading-axes);
  line-height: var(--lh-snug);
  color: var(--text-primary);
  margin: 0 0 var(--space-3);
}

/* buyer-card heading variant — our routing cards carry an equity h3
   between the signal/opener and the body. */
.buyer-card__heading {
  font-family: var(--font-serif);
  font-size: var(--fs-18);
  font-weight: var(--fw-semibold);
  color: var(--text-primary);
  margin: var(--space-2) 0;
}

.contact-form-wrap { position: relative; }

.team-card {
  display: flex;
  gap: var(--space-5);
  align-items: flex-start;
}

/* sharp-pipeline portrait in card context ({% photo %} output) */
.team-card__photo {
  width: var(--space-16);
  height: var(--space-16);
  object-fit: cover;
  border-radius: var(--radius-md);
}

.team-card__role {
  font-size: var(--fs-13);
  color: var(--text-secondary);
  margin: var(--space-1) 0 var(--space-3);
}

/* link-list grids for the home tiles/pills (markup-swapped from the old
   industry-tile / location-pill components — content links unchanged) */
/* (list-style reset comes from 02-base) */
.link-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  margin: var(--space-6) 0 0;
  padding: 0;
}

/* 404 page (handoff pages/404.html page-scoped styles, namespaced nf-*) */
.nf-code {
  font-family: var(--font-mono);
  font-size: var(--fs-13);
  color: var(--text-secondary);
  margin: 0 0 var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nf-heading {
  font-family: var(--font-serif);
  font-size: clamp(2.375rem, 1.6rem + 3vw, 3.25rem);
  font-variation-settings: var(--serif-display-axes);
  letter-spacing: var(--ls-tight);
  line-height: var(--lh-tight);
  color: var(--text-primary);
  margin: 0 0 var(--space-4);
  max-width: 13em;
}

.nf-lede {
  font-size: var(--fs-18);
  max-width: 34em;
  margin: 0 0 var(--space-8);
}

.nf-silos {
  margin: var(--space-12) 0 0;
  padding: var(--space-6) 0 0;
  border-top: 1px solid var(--border-hairline);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  font-size: var(--fs-15);
}

@media (min-width: 640px) {
  .nf-silos { grid-template-columns: repeat(3, 1fr); }
}

.nf-silos a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: var(--fw-medium);
}

.nf-silos a:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.nf-silos span {
  display: block;
  font-size: var(--fs-13);
  color: var(--text-secondary);
  font-weight: var(--fw-regular);
  margin-top: 2px;
}
"""

OUT.write_text(header + "\n" + "\n\n".join(blocks) + "\n",
               encoding="utf-8", newline="\n")
print(f"\n09-extensions.css: {OUT.stat().st_size:,} B")

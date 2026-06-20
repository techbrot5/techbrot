# MIGRATION-PROTOCOL.md — how the 104 baselines are migrated (drift-hardened)
Created: 2026-06-15 · after round-22 wave-1 drift (4 of 5 pages drifted on equity).
This is the standing protocol for every migration wave. Goal: drive agent equity-drift
toward zero so a subtle drift can't slip past the battery onto a ranking page.

## ROOT CAUSE of the wave-1 drift
Agents re-derived the headings + FAQ from the **old static HTML** (messy; its FAQPage
schema differed from its visible accordion). So they invented a wrong FAQ set, paraphrased
H1s, collapsed H2s into hero/CTA, demoted H3s into a table, renamed tier H3s. The frozen
equity truth lives in `_build/baseline/baseline.json`, not the old HTML — agents weren't using it.

## THE FIX — 6 tightenings (apply to EVERY migration agent prompt)

**T1 — INJECT THE FROZEN CONTRACT.** Before launching an agent, run
`PYTHONIOENCODING=utf-8 python _build/scripts/equity_contract.py <url>` and PASTE its output
(every H1/H2/H3 at its exact level + every FAQ Q/A verbatim) into the prompt as "THE EQUITY
CONTRACT." The agent matches these exact strings. The old HTML is used ONLY for body prose /
section content — NEVER as the source of headings or FAQ.

**T2 — HEADINGS ARE FROZEN STRINGS.** Every contract H1/H2/H3 must appear VERBATIM as that
exact element level. FORBIDDEN: rewording, paraphrasing, abbreviating, adding/removing `<br>`,
appending qualifiers (e.g. "(Gold)"), reordering words within a heading, or changing case.
Elevating a section's styling is fine; its heading text is not.

**T3 — NO COLLAPSE.** Do NOT move a baseline H2/H3 into the hero, the cta-band, the in-brief,
or a table cell/caption. The hero heading carries the H1 ONLY. Every other baseline heading is
a real `<h2>`/`<h3>` element in the body. (Wave-1: proadvisor lost 2 H2s to hero/CTA; consulting
lost 3 H3s to a vs-table — both forbidden now.)

**T4 — FAQ FROM THE CONTRACT, VERBATIM.** Use exactly the contract's FAQ questions + answers.
Enrichment may APPEND detail to an answer; it may never reword/drop a question or the original
answer text. Question count must equal the contract.

**T5 — MANDATORY PRE-RETURN SELF-CHECK.** Before returning, the agent must reproduce the
contract as a checklist and tick each item: every H1/H2/H3 present at the correct level +
verbatim, every FAQ question present + verbatim. The agent reports the checklist. Any item it
cannot tick, it must flag explicitly (not silently paper over).

**T6 — CONTENT-TO-GOAL, VISUAL-FLOOR (rule R2).** Enrich content to the goal (deep, citable,
TRUE publicly-documented facts; no fabricated firm stats — honesty rule 4 absolute). Visual
stays at floor (existing components/classes, design-fidelity gate passes, no new CSS).

## WAVE DISCIPLINE
- **Cap each wave at ~5 pages** (not a full silo). Smaller waves keep the fix-up pass small and
  guarantee nothing ships degraded before review.
- **Central battery gate is the backstop, ALWAYS** — after every wave I build + run the full
  battery and verify each page's content-equity vs baseline.json + axe + overflow + design-fidelity
  BEFORE commit. The contract injection (T1) is to stop drift at the source; the battery is the net.
- **Report at every stop (rule R1)** with preview URLs + per-page verification + this protocol's
  self-check results.

## SPECIAL-CASE PAGES (own review, NOT batch-approval)
- **/quickbooks/speak-to-a-quickbooks-expert/** — t-bofu + Sheet-7 HONEST-TRIAGE. Disclosure
  banner above the fold; never "official"; intake qualifies Intuit billing/account intent AWAY;
  never imply Intuit affiliation. Built + reviewed on its OWN, not inside a batch.
- **/quickbooks/proadvisor-team/** and any team/credentials page — founder-name-zero is critical:
  firm/"Certified ProAdvisor team" byline only; no individual in visible content (David Westgate
  only in an operator section if the source has one).
- **find-an-accountant/** (t-location) — NEW tier, unproven; prove ONE state page solo before any
  location wave.

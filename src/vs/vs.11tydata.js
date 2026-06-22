// Directory data file for src/vs/ — the C2 "Comparison" page-type family.
// Applies to every comparison page in this folder (techbrot-vs-* and the
// concept-vs-* pages), NOT to the /vs/ hub (src/vs.njk = family C1, outside
// this directory).
//
// compareTier flips the shared t-mofu layout into its funnel-stage-correct
// treatment for MOFU consideration pages:
//   - editorial-calm hero (eyebrow + H1 + lede only, ~820px narrow, no
//     buttons/figure/trust row) instead of the BOFU-weight conversion hero;
//   - the answer-first block rendered as the .tldr-box TL;DR card.
// Flag-gated so the 40+ other t-mofu pages are unaffected.
module.exports = {
  compareTier: true,
};

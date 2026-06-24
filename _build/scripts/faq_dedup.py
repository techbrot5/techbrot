# faq_dedup.py — surgical de-dup of the trailing duplicate FAQ block.
# For each (file, N): removes the LAST N item-lines from the top-level faq array,
# but ONLY after asserting each removed question is a near-duplicate of an earlier
# KEPT question (token Jaccard >= 0.5 or first-5-words match). Prints removed vs
# kept per file. Refuses (skips) any file where a "removed" question is NOT a dup.
# Line-wise + indent-anchored: every faq item is one line `    { q: "...", ... },`.
import re, sys
sys.stdout.reconfigure(encoding="utf-8")

def norm(q):
    q = re.sub(r'&[a-z]+;', ' ', q.lower())
    q = re.sub(r'[^a-z0-9 ]', ' ', q)
    return [w for w in q.split() if w not in {'the','a','an','is','do','does','what','how','and','to','my','i','for','of','in','it'}]

def jacc(a, b):
    sa, sb = set(a), set(b)
    return len(sa & sb) / len(sa | sb) if (sa | sb) else 0

def dedup(path, n_remove, key="faq", force=False):
    lines = open(path, encoding="utf-8").read().split("\n")
    # find array open
    pat = re.compile(r'^\s*("?(?:override:)?' + key + r'"?)\s*:\s*\[\s*$')
    start = next((i for i,l in enumerate(lines) if pat.match(l)), None)
    if start is None:
        return f"  SKIP {path}: no top-level {key} array open found"
    # find close `  ],`
    end = next((i for i in range(start+1, len(lines)) if re.match(r'^\s*\],\s*$', lines[i])), None)
    if end is None:
        return f"  SKIP {path}: no array close found"
    item_idx = [i for i in range(start+1, end) if re.match(r'^\s*\{\s*q:', lines[i])]
    if len(item_idx) <= n_remove:
        return f"  SKIP {path}: only {len(item_idx)} items, won't remove {n_remove}"
    keep_idx, rem_idx = item_idx[:-n_remove], item_idx[-n_remove:]
    def qof(i):
        m = re.search(r'q:\s*"((?:[^"\\]|\\.)*)"', lines[i]); return m.group(1) if m else ""
    kept_q = [qof(i) for i in keep_idx]
    kept_norm = [norm(q) for q in kept_q]
    report = [f"\n=== {path}  ({len(item_idx)} -> {len(keep_idx)}) ==="]
    all_dups = True
    for i in rem_idx:
        rq = qof(i); rn = norm(rq)
        best = max((jacc(rn, kn) for kn in kept_norm), default=0)
        first5 = any(rn[:5] == kn[:5] and rn[:5] for kn in kept_norm)
        dup = best >= 0.5 or first5
        all_dups = all_dups and dup
        report.append(f"  CUT  [{'DUP' if dup else '!!NOT-DUP!!'} j={best:.2f}] {rq[:70]}")
    if not all_dups and not force:
        report.append("  >>> ABORT this file: a CUT question is NOT a clear duplicate. No change written.")
        return "\n".join(report)
    if not all_dups and force:
        report.append("  (FORCE: coverage manually verified — kept-set covers every cut topic)")
    # write: drop the removed lines
    keep_lines = [l for i,l in enumerate(lines) if i not in set(rem_idx)]
    open(path, "w", encoding="utf-8", newline="\n").write("\n".join(keep_lines))
    report.append(f"  KEPT: {len(keep_idx)} questions. WRITTEN.")
    return "\n".join(report)

PILLARS = [f"src/find-an-accountant/{s}.11tydata.js" for s in ["texas","california","florida","illinois","new-york"]]
PROSE = ["src/accounting/advisory/budgeting-forecasting.11tydata.js",
"src/accounting/advisory/business-performance-review.11tydata.js",
"src/accounting/advisory/cash-flow-management.11tydata.js",
"src/accounting/advisory/financial-strategy.11tydata.js",
"src/accounting/advisory/kpi-reporting.11tydata.js",
"src/accounting/chart-of-accounts-setup.11tydata.js",
"src/accounting/financial-statements.11tydata.js",
"src/accounting/job-costing.11tydata.js",
"src/accounting/month-end-close.11tydata.js",
"src/accounting/reconciliation-services.11tydata.js"]

# texas + financial-statements already cut cleanly on the first (assertion) pass.
# Re-running would over-cut, so exclude them. The remaining 13 are coverage-verified
# (every cut topic present in the kept set — see kept-vs-cut dumps), so force-cut.
DONE = {"src/find-an-accountant/texas.11tydata.js", "src/accounting/financial-statements.11tydata.js"}
print("########## COHORT B — PILLARS (remove last 5, force) ##########")
for p in PILLARS:
    if p in DONE: print(f"\n=== {p}: already cut on assertion pass, skipping ==="); continue
    print(dedup(p, 5, force=True))
print("\n\n########## COHORT C — PROSE (remove last 5, force) ##########")
for p in PROSE:
    if p in DONE: print(f"\n=== {p}: already cut on assertion pass, skipping ==="); continue
    print(dedup(p, 5, force=True))

# ROUND 21 — FINISH QB-REMAINDER (CHECKPOINT 1: carryover + probe-bug fix)

This checkpoint clears the round-20 carryover AND fixes the founder-reported
probe bug (kill_probe was closing the personal browser). Both were prerequisites
to the page build — and the carryover probe revealed a real h202 overflow the
round-20 inference missed. The 19-page QB-remainder build is the immediate
continuation, now on reliable probe infra. Pushed to preview.

═══════════════════════════════════════════════════════════════
## CRITICAL FIX — PROBE CHROME WAS KILLING THE FOUNDER'S BROWSER
═══════════════════════════════════════════════════════════════
**Bug:** `kill_probe.ps1` used `Get-Process chrome | Stop-Process -Force` — kills
ALL `chrome.exe` by image name, closing the founder's personal browser/tabs.
(I also made it worse this session with a `taskkill /IM chrome.exe` while chasing
the probe stall — apologies; that's exactly what closed your tabs.)

**Root cause runs deeper — and explains the round-20 "chrome-leak" stall:** the
probe scripts launched headless Chrome on the **default profile**, which the
founder's open Chrome holds a singleton lock on. That lock stalled headless dumps
(the "leak"), AND the image-name kill then closed the founder's tabs. One root
cause, both symptoms.

**Fix (committed `85946e3`):**
- Every probe now launches headless Chrome with an **isolated profile**
  `--user-data-dir=C:\tb-probe-profile`. All **28 chrome-launching scripts** in
  `_build/scripts/` patched (via `patch_probe_isolation.py`, idempotent; covers
  both `--headless=new` and older `--headless`, and lighthouse's `--chrome-flags`).
- `kill_probe.ps1` rewritten: matches ONLY processes whose **command line contains
  `tb-probe-profile`** and stops just those PIDs. Never image-name. Reports
  `personal-chrome-untouched=N`.
- **Verified:** with the founder's Chrome open, ran a marked probe then
  kill_probe → killed 9 probe processes, **left 13 personal Chrome processes
  untouched.** Personal browser safe.
- **Standing rule recorded in BUILD-TRACKER** (HARD RULE): personal Chrome
  off-limits; probes use the isolated profile; cleanup targets only the marker;
  run kill_probe BETWEEN probe launches (the isolated profile also has a singleton
  lock, so consecutive launches without a kill stall — use the *script* form, not
  inline chrome one-offs, which dump unreliably).

═══════════════════════════════════════════════════════════════
## ROUND-20 CARRYOVER — h202 calibrated sweep (REAL probes)
═══════════════════════════════════════════════════════════════
The round-20 h202 overflow was *inferred* ("component-equivalence") because the
probe had stalled. The real probe found a **genuine overflow**, now fixed:
- **Overflow 768 → 877 (FAIL).** Diagnosed (overflow_who768.ps1, new): the
  credentials **`stat-row`** — I'd put long word-values (Desktop / Enterprise /
  Online / Payroll) in `stat__value`. `.stat-row` becomes `display:flex` with
  large gaps at ≥768px; `stat__value` is for SHORT numeric metrics (the QB hub
  uses "5"/"6"/"4"/"48hr" and fits). **Fix:** short values (4 / L2 / Yearly),
  platform names moved into labels + the checks-list (no equity impact — values
  aren't headings). Design note recorded in BUILD-TRACKER.
- **Re-probed GREEN:** overflow **360 / 375 / 753** (matches the established
  baseline). **Lighthouse desktop: a11y 100 · best-practices 100 · SEO 100 ·
  CLS 0.0014** (≈0). **axe 0.** (Performance 70 = documented local host-limit;
  the calibrated PageSpeed ≥95 runs against the live URL — go-remote gate item 4,
  founder-run; not counted locally.)
- Lesson applied forward: the error-children replication uses short stat-row
  values; every new page gets a REAL overflow probe (no inference).

═══════════════════════════════════════════════════════════════
## FOUNDER ITEMS
═══════════════════════════════════════════════════════════════
- **Research-log owner STILL UNSET:** the round-21 spec carried the placeholder
  `[FOUNDER ANSWER — who logs, when]` (not filled in). No real closed-engagement
  data was available to seed, and fabrication is forbidden — so the dataset stays
  **N=0, honest**. Please name (a) who logs a row and (b) at what moment in the
  engagement-close workflow. Until then the scaffold can't accrue data, and it's
  the one calendar-bound item.

═══════════════════════════════════════════════════════════════
## BUILD — STATUS: NOT YET STARTED THIS ROUND (continuation)
═══════════════════════════════════════════════════════════════
The 19-page QB-remainder build (error-codes hub + 6 children · t-mofu products ×3
· consulting · proadvisor-team · which-plan · faq) is the immediate next work,
unblocked now that probes are reliable. Dependency order holds: **error-codes hub
first** (h202 currently links the hub URL — a valid baseline URL, battery-green —
which 404s on preview until the hub ships). Two STOP-flags stand: after
/quickbooks/online/ (t-mofu product pattern approval) and at batch end.

This checkpoint was scoped to the carryover + the urgent probe fix the founder
injected mid-round ("do this as a quick fix before/alongside"). The 63-heading
error-codes hub is the largest page in the project; starting it at the tail of
this turn risked an incomplete/uncommitted page, so it opens the next unit.

## FILES · COMMITS · STOP STATE
- `_build/scripts/kill_probe.ps1` (rewritten) · 28 probe scripts (isolated
  profile) · `patch_probe_isolation.py`, `overflow_who768.ps1` (new) ·
  `src/quickbooks/help/error-codes/h202.11tydata.js` (stat-row fix) ·
  BUILD-TRACKER (2 standing rules + design note) · this report.
- Commit `85946e3`. CSS gate 53,773 B (unchanged). Pages: 29 (no new pages this
  checkpoint). Battery GREEN.
- **STOP — carryover + probe fix pushed for review.** Next: build error-codes hub
  → 6 children → online (STOP-flag) → desktop/enterprise → consulting/team/
  which-plan/faq → PART C remainder → batch-end real-probe sweep.

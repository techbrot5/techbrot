/* ============================================================================
   TechBrot — axe-core a11y + responsive-overflow probe (Puppeteer)
   Runs on the founder's machine (real Chrome / JS execution), which the
   sandbox here cannot do (headless --dump-dom returns 0-length).

   For each URL in _build/probe/probe-urls.txt:
     · a11y — inject axe-core, run axe.run(), collect violations (desktop 1280).
     · overflow — at 360 / 390 / 768, flag any element whose right edge exceeds
       the viewport (horizontal scroll), listing up to 8 offenders.

   Writes _build/verify/axe-overflow-report.json + a console summary.
   Exit code 1 if any serious/critical a11y violation OR any overflow is found.

   Run via _build/scripts/run-axe-overflow.ps1 (handles deps + static server).
   ============================================================================ */
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core"), "utf8"); // axe-core/axe.js

const BASE = (process.argv[2] || "http://localhost:8181").replace(/\/$/, "");
const WIDTHS = [360, 390, 768];
// optional argv[3] = comma-separated path list (per-family probe); else probe-urls.txt
const paths = process.argv[3]
  ? process.argv[3].split(",").map((s) => s.trim()).filter(Boolean)
  : readFileSync(new URL("./probe-urls.txt", import.meta.url), "utf8")
      .split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#"));

console.log(`axe + overflow probe · ${paths.length} pages · base ${BASE}\n`);

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const results = [];

for (const path of paths) {
  const url = BASE + path;
  const page = await browser.newPage();
  const row = { path, error: null, violations: [], overflow: [] };
  try {
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // ── a11y (desktop) ──
    await page.evaluate(axeSource);
    const axeRes = await page.evaluate(async () =>
      await window.axe.run(document, { resultTypes: ["violations"] }));
    row.violations = axeRes.violations.map((v) => ({
      id: v.id, impact: v.impact, count: v.nodes.length, help: v.help,
      sample: (v.nodes[0] && v.nodes[0].target && v.nodes[0].target.join(" ")) || "",
      nodes: v.nodes.slice(0, 12).map((n) => ({
        sel: (n.target && n.target.join(" ")) || "",
        data: (n.any && n.any[0] && n.any[0].data) || null,
      })),
    }));

    // ── overflow (per width) ──
    for (const w of WIDTHS) {
      await page.setViewport({ width: w, height: 800, deviceScaleFactor: 1 });
      await page.reload({ waitUntil: "networkidle0", timeout: 30000 });
      const o = await page.evaluate((vw) => {
        const docW = document.documentElement.scrollWidth;
        if (docW <= vw + 1) return null;
        const offenders = [];
        let maxR = { right: 0, info: "" };
        for (const el of document.body.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          if (r.width <= 0) continue;
          const cls = String(el.className || "").slice(0, 70);
          const info = el.tagName.toLowerCase() + (cls ? "." + cls : "");
          if (r.right > vw + 1 || r.left < -1) {
            offenders.push({ tag: el.tagName.toLowerCase(), cls, right: Math.round(r.right), left: Math.round(r.left) });
          }
          for (const pe of ["::before", "::after"]) {
            const cs = getComputedStyle(el, pe);
            if (cs && cs.content && cs.content !== "none") {
              const pw = parseFloat(cs.width) || 0;
              if (pw > vw) offenders.push({ tag: el.tagName.toLowerCase() + pe, cls, right: Math.round(pw), left: 0 });
            }
          }
          if (r.right > maxR.right) maxR = { right: Math.round(r.right), info };
        }
        return { docW, offenders: offenders.slice(0, 12), maxR };
      }, w);
      if (o) row.overflow.push({ width: w, ...o });
    }
  } catch (e) {
    row.error = String((e && e.message) || e);
  }
  results.push(row);
  await page.close();

  const serious = row.violations.filter((v) => v.impact === "serious" || v.impact === "critical").length;
  const flag = row.error ? "ERR " : (serious || row.overflow.length) ? "FAIL" : "ok  ";
  console.log(`  ${flag} ${path}  ·  a11y ${row.violations.length} (${serious} serious+) · overflow ${row.overflow.length}`);
}

await browser.close();

// ── report + summary ──
mkdirSync(new URL("../verify/", import.meta.url), { recursive: true });
const reportPath = new URL("../verify/axe-overflow-report.json", import.meta.url);
writeFileSync(reportPath, JSON.stringify({ base: BASE, widths: WIDTHS, results }, null, 2));

const totViol = results.reduce((n, r) => n + r.violations.length, 0);
const totSerious = results.reduce((n, r) => n + r.violations.filter((v) => v.impact === "serious" || v.impact === "critical").length, 0);
const overflowPages = results.filter((r) => r.overflow.length);
const errPages = results.filter((r) => r.error);

console.log("\n──────── SUMMARY ────────");
console.log(`pages probed:        ${results.length}`);
console.log(`a11y violations:     ${totViol}  (serious/critical: ${totSerious})`);
console.log(`pages with overflow: ${overflowPages.length}  ${overflowPages.map((r) => r.path).join(", ")}`);
if (errPages.length) console.log(`load errors:         ${errPages.length}  ${errPages.map((r) => r.path).join(", ")}`);
console.log(`\nfull report → _build/verify/axe-overflow-report.json`);

process.exit(totSerious > 0 || overflowPages.length > 0 || errPages.length > 0 ? 1 : 0);

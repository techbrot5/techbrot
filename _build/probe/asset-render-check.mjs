/* ============================================================================
   TechBrot — MECHANICAL asset-integrity + render check (Puppeteer)
   Objective defects only, EVERY built page. For each page:
     · broken/empty images — an <img> that occupies space (clientW/H > 0) but
       failed to load (naturalWidth 0 / !complete). Catches empty image boxes,
       incl. <picture>/<source> via currentSrc.
     · CSS missing — the site.min.css bundle did not load (unstyled page).
     · overflow — horizontal scroll at 390 (document scrollWidth > clientWidth).
   Writes _build/verify/asset-render-report.json + a console defect table.
   Puppeteer's bundled Chromium (separate from the founder's Chrome).
   Run via _build/scripts/run-asset-check.ps1.
   ============================================================================ */
import puppeteer from "puppeteer";
import { readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join, relative } from "node:path";

const BASE = (process.argv[2] || "http://localhost:8182").replace(/\/$/, "");
const SITE = process.argv[3] || "_site-probe";

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) out = out.concat(walk(p));
    else if (e === "index.html") {
      let u = "/" + relative(SITE, dir).replace(/\\/g, "/");
      u = u.replace(/index\.html$/, "");
      if (!u.endsWith("/")) u += "/";
      out.push(u === "//" ? "/" : u);
    }
  }
  return out;
}

const pathArg = process.argv[4]; // optional comma-separated path list (re-run subset)
const paths = pathArg
  ? pathArg.split(",").map((s) => s.trim()).filter(Boolean)
  : walk(SITE).filter((u) => !u.startsWith("/dev/")).sort();
console.log(`asset/render check · ${paths.length} pages · base ${BASE}\n`);

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });

const defects = [];
let n = 0;
for (const path of paths) {
  n++;
  const row = { path, broken: [], cssMissing: false, overflow: false, error: null };
  try {
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 30000 });
    // force lazy/below-the-fold images to actually load before measuring naturalWidth
    await page.evaluate(async () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
      await new Promise((res) => {
        let y = 0;
        const step = () => {
          window.scrollBy(0, 1000); y += 1000;
          if (y < document.body.scrollHeight) setTimeout(step, 40);
          else res();
        };
        step();
      });
      window.scrollTo(0, 0);
    });
    await new Promise((res) => setTimeout(res, 600));
    const r = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll("img")];
      const broken = imgs
        .filter((i) => (i.clientWidth > 0 || i.clientHeight > 0) && (!i.complete || i.naturalWidth === 0))
        .map((i) => i.currentSrc || i.getAttribute("src") || "(no src)");
      const bundleLoaded = [...document.styleSheets].some((s) => (s.href || "").includes("site.min.css"));
      const sw = document.documentElement.scrollWidth;
      const cw = document.documentElement.clientWidth;
      return { broken, bundleLoaded, overflow: sw > cw + 1 };
    });
    row.broken = r.broken;
    row.cssMissing = !r.bundleLoaded;
    row.overflow = r.overflow;
  } catch (e) {
    row.error = String(e.message || e).slice(0, 80);
  }
  if (row.broken.length || row.cssMissing || row.overflow || row.error) defects.push(row);
  if (n % 50 === 0) console.log(`  …${n}/${paths.length} (${defects.length} defects so far)`);
}
await browser.close();

mkdirSync("_build/verify", { recursive: true });
writeFileSync("_build/verify/asset-render-report.json", JSON.stringify({ pages: paths.length, defects }, null, 2));

console.log(`\npages checked:      ${paths.length}`);
console.log(`pages with defects: ${defects.length}`);
const uniqBroken = [...new Set(defects.flatMap((d) => d.broken))];
console.log(`distinct broken image srcs: ${uniqBroken.length}`);
console.log("");
for (const d of defects.slice(0, 80)) {
  const tags = [];
  if (d.broken.length) tags.push(`broken-img×${d.broken.length}`);
  if (d.cssMissing) tags.push("CSS-MISSING");
  if (d.overflow) tags.push("overflow");
  if (d.error) tags.push("error:" + d.error);
  console.log(`  ${d.path}  ·  ${tags.join(", ")}`);
}
if (defects.length > 80) console.log(`  …and ${defects.length - 80} more (see asset-render-report.json)`);
if (uniqBroken.length) { console.log("\ndistinct broken srcs:"); uniqBroken.slice(0, 20).forEach((s) => console.log("  " + s)); }
process.exit(defects.length ? 1 : 0);

/* One-off: pinpoint the horizontal-overflow source on a single page (catches margin +
   pseudo + scroll overflow that bounding-rect misses). Usage: node find-overflow.mjs BASE PATH [width] */
import puppeteer from "puppeteer";
const BASE = (process.argv[2] || "http://localhost:8182").replace(/\/$/, "");
const PATHS = (process.argv[3] || "/quickbooks/help/error-codes/12029/").split(",");
const W = parseInt(process.argv[4] || "360", 10);
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const path of PATHS) {
  const p = await b.newPage();
  await p.setViewport({ width: W, height: 800 });
  await p.goto(BASE + path, { waitUntil: "networkidle0", timeout: 30000 });
  const res = await p.evaluate((vw) => {
    const out = [];
    for (const el of document.querySelectorAll("*")) {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const mr = parseFloat(cs.marginRight) || 0;
      const ml = parseFloat(cs.marginLeft) || 0;
      // container whose content scrolls, OR element+margin extends past viewport, OR negative left
      if (el.scrollWidth - el.clientWidth > 2 || r.right + mr > vw + 1 || r.left - ml < -1) {
        out.push({
          sel: el.tagName.toLowerCase() + (el.className ? "." + String(el.className).slice(0, 45) : ""),
          sw: el.scrollWidth, cw: el.clientWidth,
          left: Math.round(r.left), right: Math.round(r.right), mr, ml,
        });
      }
    }
    return { vw, docSW: document.documentElement.scrollWidth, bodySW: document.body.scrollWidth, hits: out.slice(0, 25) };
  }, W);
  console.log("\n### " + path + "  (vw=" + W + ", docSW=" + res.docSW + ", bodySW=" + res.bodySW + ")");
  for (const h of res.hits) console.log("  " + h.sel + "  sw=" + h.sw + "/cw=" + h.cw + " L" + h.left + "/R" + h.right + " mR" + h.mr + " mL" + h.ml);
  await p.close();
}
await b.close();

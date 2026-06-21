import puppeteer from "puppeteer";
const BASE = (process.argv[2] || "http://localhost:8184").replace(/\/$/, "");
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900 });
await p.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 30000 });
await p.click(".nav__trigger").catch(() => {});
await new Promise(r => setTimeout(r, 400));
const r = await p.evaluate(() => {
  const q = (s) => {
    const e = document.querySelector(s);
    if (!e) return "(not found)";
    const r = e.getBoundingClientRect();
    const cs = getComputedStyle(e);
    return { top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right),
             position: cs.position, zIndex: cs.zIndex, offsetParent: e.offsetParent ? (e.offsetParent.tagName + "." + e.offsetParent.className) : "null" };
  };
  return {
    utilbar: q(".util-bar"),
    header: q(".site-header"),
    navitem: q(".nav__item"),
    trigger: q(".nav__trigger"),
    panel: q('.nav__dropdown--mega[data-open="true"]'),
    panelAny: q(".nav__dropdown--mega"),
  };
});
console.log(JSON.stringify(r, null, 2));
await b.close();

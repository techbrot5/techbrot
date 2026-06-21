/* Screenshot proof: full home, nav dropdown open (desktop), mobile home top.
   Usage: node screenshots.mjs BASE  (server must serve the current _site-probe). */
import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";
const BASE = (process.argv[2] || "http://localhost:8184").replace(/\/$/, "");
mkdirSync("_build/verify/shots", { recursive: true });
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

// 1) full home (desktop)
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 1000, deviceScaleFactor: 1 });
await p.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 30000 });
await p.evaluate(async () => { await new Promise(r => { let y=0; const t=setInterval(()=>{ window.scrollBy(0,1200); y+=1200; if(y>document.body.scrollHeight){clearInterval(t);r();} },30); }); window.scrollTo(0,0); });
await new Promise(r => setTimeout(r, 500));
await p.screenshot({ path: "_build/verify/shots/home-final.png", fullPage: true });

// 2) nav dropdown open (desktop) — click the first nav trigger (Accounting)
await p.click(".nav__trigger").catch(() => {});
await new Promise(r => setTimeout(r, 450));
await p.screenshot({ path: "_build/verify/shots/nav-dropdown.png", clip: { x: 0, y: 0, width: 1280, height: 520 } });

// 3) mobile home top (390) — shows eyebrow mark + hero on mobile
const m = await b.newPage();
await m.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await m.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 30000 });
await new Promise(r => setTimeout(r, 300));
await m.screenshot({ path: "_build/verify/shots/home-mobile.png", clip: { x: 0, y: 0, width: 390, height: 900 } });

await b.close();
console.log("shots: home-final.png, nav-dropdown.png, home-mobile.png");

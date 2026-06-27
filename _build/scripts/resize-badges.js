/* Pre-flip image-weight fix: the Intuit credential badges are stored at 600-1200px but
 * display at 60x60 (trust-strip). Resize each to 180px (3x retina — crisp at 60px) with
 * sharp, in place. PNG kept (transparency). Originals remain in git history if ever needed.
 * Reports before/after bytes + total saving. */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "..", "src", "assets", "img", "brand", "badges");

(async () => {
  const files = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith(".png"));
  let before = 0, after = 0;
  for (const f of files) {
    const p = path.join(DIR, f);
    const b0 = fs.statSync(p).size;
    const buf = await sharp(p)
      .resize(180, 180, { fit: "inside", withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10 })
      .toBuffer();
    fs.writeFileSync(p, buf);
    before += b0; after += buf.length;
    console.log(`  ${f.padEnd(44)} ${(b0 / 1024).toFixed(0)}KB -> ${(buf.length / 1024).toFixed(1)}KB`);
  }
  console.log(`\n  TOTAL ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(1)}KB  (saved ${((before - after) / 1024).toFixed(0)}KB)`);
})();

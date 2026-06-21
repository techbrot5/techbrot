// site.min.css.11ty.js — CSS bundle pipeline (rebuilt 2026-06-21 with the from-scratch
// petrol re-implementation). Concatenates every src/assets/css/NN-*.css layer in
// filename order into one /assets/css/site.min.css. Layers are added back one at a
// time during the rebuild (tokens first), so this globs whatever exists rather than a
// fixed list. Light minify (strip comments + collapse whitespace). Byte gate enforced.
const fs = require("fs");
const path = require("path");

// Cutover gate (flip-gate #7, 2026-06-21): lowered from the 100KB transition ceiling to the
// real elevated target after the css_audit trim pass (lean ~63KB bundle). Kept in sync with
// _build/battery/run_battery.py (CSS_MIN_GATE).
const CSS_BUDGET_MIN = 72 * 1024;
const CSS_BUDGET_SRC = 90 * 1024;

function minify(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")      // strip block comments
    .replace(/\s+/g, " ")                   // collapse whitespace
    .replace(/\s*([{}:;,>])\s*/g, "$1")     // tighten around punctuation
    .replace(/;}/g, "}")
    .trim();
}

module.exports = class {
  data() {
    return { permalink: "/assets/css/site.min.css", eleventyExcludeFromCollections: true };
  }
  render() {
    const dir = path.join(__dirname);
    // every NN-*.css layer, filename order (00-fonts → 09-extensions), self excluded
    const layers = fs.readdirSync(dir)
      .filter((f) => /^\d\d-.*\.css$/.test(f))
      .sort();
    let srcBytes = 0;
    const parts = layers.map((f) => {
      const css = fs.readFileSync(path.join(dir, f), "utf8");
      srcBytes += Buffer.byteLength(css, "utf8");
      return css;
    });
    const min = minify(parts.join("\n"));
    const minBytes = Buffer.byteLength(min, "utf8");
    if (minBytes > CSS_BUDGET_MIN) {
      throw new Error(`CSS minified budget exceeded: ${minBytes} > ${CSS_BUDGET_MIN} bytes`);
    }
    const srcFlag = srcBytes > CSS_BUDGET_SRC ? ` (!) source over ${CSS_BUDGET_SRC}B` : "";
    console.log(`[css] ${layers.length} layers · minified ${minBytes}B / gate ${CSS_BUDGET_MIN}B · source ${srcBytes}B${srcFlag} → assets/css/site.min.css`);
    return min;
  }
};

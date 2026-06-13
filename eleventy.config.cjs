/* TechBrot 11ty factory — see CLAUDE.md TARGET STRUCTURE + BUILD-TRACKER.md.
 * Fail-closed environments: anything but ENVIRONMENT='production' is a
 * preview build (noindex + no analytics). Header proof is a go-remote gate.
 */
const fs = require("fs");
const path = require("path");

// NEW-SKIN load order (changeover round 10): fonts → tokens → base (locked
// structural floor) → conversion components → chrome → tier layout/responsive
// spec → motif rules (after tiers per handoff note) → motion → additions →
// session extensions.
const CSS_ORDER = [
  "00-fonts.css",
  "01-tokens.css",
  "02-base.css",
  "03-conversion.css",
  "04-chrome.css",
  "05-tiers.css",
  "06-motif-rules.css",
  "07-motion.css",
  "08-additions.css",
  "09-extensions.css",
];
// BUDGET GATE — RE-RATIFIED by founder (contact-elevation round, 2026-06-13):
// HARD gate = minified site.min.css ≤58KB (shipping artifact). 58KB is the
// CEILING THROUGH CUTOVER — the gate does not move again. A source trim pass
// is a scheduled task during silo elevation (target: source back under 75KB).
// Source soft-cap 70KB — flagged when exceeded, never blocking.
const CSS_BUDGET_MIN = 58 * 1024; // minified, hard build gate (ceiling — final)
const CSS_BUDGET_SRC = 70 * 1024; // source soft-cap, flagged only

module.exports = function (eleventyConfig) {
  const isProduction = process.env.ENVIRONMENT === "production";

  eleventyConfig.addGlobalData("env", {
    production: isProduction,
    name: isProduction ? "production" : "preview",
  });

  // ONE site.min.css bundled from the design-handoff sources (design truth —
  // foundations verbatim, components curated per round).
  eleventyConfig.on("eleventy.before", async ({ directories }) => {
    const srcDir = path.join(directories.input, "assets", "css");
    const source = CSS_ORDER.map((f) =>
      // strip per-file BOMs — a U+FEFF mid-concatenation corrupts the next
      // selector after minification (esbuild escapes it into the selector)
      fs.readFileSync(path.join(srcDir, f), "utf8").replace(/^﻿/, "")
    ).join("\n");
    const srcBytes = Buffer.byteLength(source);
    const esbuild = require("esbuild");
    const { code } = await esbuild.transform(source, {
      loader: "css",
      minify: true,
    });
    const minBytes = Buffer.byteLength(code);
    if (minBytes > CSS_BUDGET_MIN) {
      throw new Error(
        `CSS minified budget exceeded: ${minBytes} > ${CSS_BUDGET_MIN} bytes`
      );
    }
    const srcFlag = srcBytes > CSS_BUDGET_SRC
      ? ` ⚠ SOURCE OVER 70KB SOFT-CAP (flagged)` : "";
    const outDir = path.join(directories.output, "assets", "css");
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "site.min.css"), code);
    console.log(
      `[css] minified ${minBytes}B / hard gate ${CSS_BUDGET_MIN}B · source ${srcBytes}B${srcFlag} → assets/css/site.min.css`
    );
  });

  // SHARP IMAGE PIPELINE ({% photo %}) — founder ruling 2026-06-13 (TODO 14):
  // AVIF/WebP/JPEG via @11ty/eleventy-img, explicit width/height (CLS 0),
  // lazy below the fold (pass eager: true for above-fold placements).
  // Sources stay where the founder drops them (e.g. assets/people/);
  // generated variants land in /assets/img/generated/ with hashed names.
  const Image = require("@11ty/eleventy-img");
  eleventyConfig.addAsyncShortcode("photo", async function (src, alt, opts) {
    if (alt === undefined) {
      throw new Error(`{% photo %}: alt is required (got none) for ${src}`);
    }
    opts = opts || {};
    const metadata = await Image(path.join(__dirname, src), {
      widths: opts.widths || [128, 192, 256],
      formats: ["avif", "webp", "jpeg"],
      outputDir: path.join(process.env.TB_OUTDIR || "_site", "assets/img/generated"),
      urlPath: "/assets/img/generated/",
    });
    return Image.generateHTML(metadata, {
      alt,
      sizes: opts.sizes || "auto",
      class: opts.class || "",
      loading: opts.eager ? "eager" : "lazy",
      decoding: "async",
    });
  });

  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: process.env.TB_OUTDIR || "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

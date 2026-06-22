/* TechBrot 11ty factory — see CLAUDE.md TARGET STRUCTURE + BUILD-TRACKER.md.
 * Fail-closed environments: anything but ENVIRONMENT='production' is a
 * preview build (noindex + no analytics). Header proof is a go-remote gate.
 */
const fs = require("fs");
const path = require("path");

// NEW-SKIN CSS load order + the 58KB minified gate now live in the first-class
// bundle template: src/assets/css/site.min.css.11ty.js (round-17 Cloudflare CSS
// fix — see that file's header). fs/path retained for the image pipeline below.

module.exports = function (eleventyConfig) {
  const isProduction = process.env.ENVIRONMENT === "production";

  eleventyConfig.addGlobalData("env", {
    production: isProduction,
    name: isProduction ? "production" : "preview",
  });

  // ONE site.min.css bundled from the design-handoff sources (design truth —
  // foundations verbatim, components curated per round). Generated as a
  // FIRST-CLASS Eleventy template — see src/assets/css/site.min.css.11ty.js.
  // (Round-17 Cloudflare CSS fix: moved off the former `eleventy.before`
  // side-effect fs.writeFileSync, which wrote outside Eleventy's pipeline and
  // could be missing from the deployed artifact. The template flows through
  // Eleventy's writer, so the bundle is always in _site and always deployed.
  // CSS_ORDER + budget constants now live in that template.)

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
  eleventyConfig.addPassthroughCopy({ "src/assets/og": "assets/og" });
  // NEW design-system stylesheet (handoff re-skin) — served alongside site.min.css
  // until every family is migrated off the legacy bundle. Linked by dc-base.njk.
  eleventyConfig.addPassthroughCopy({ "src/assets/css/dc-system.css": "assets/css/dc-system.css" });
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

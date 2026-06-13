/* Dev-only pages: never written in production builds (fail-closed). */
module.exports = {
  eleventyComputed: {
    permalink(data) {
      if (data.env.production) return false;
      return `/dev/${data.page.fileSlug}/`;
    },
  },
};

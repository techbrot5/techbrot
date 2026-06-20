import React from "react";

/** Editorial guide/article card with oxblood category label. */
export function GuideCard({ category, heading, href = "#", excerpt, cta = "Read the guide" }) {
  return (
    <article className="guide-card">
      {category ? <p className="guide-card__category">{category}</p> : null}
      <h3 className="guide-card__heading">
        <a href={href}>{heading}</a>
      </h3>
      {excerpt ? <p className="guide-card__excerpt">{excerpt}</p> : null}
      <a className="guide-card__cta" href={href}>
        {cta} →
      </a>
    </article>
  );
}

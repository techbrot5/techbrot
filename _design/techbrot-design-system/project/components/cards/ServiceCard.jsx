import React from "react";

/** Service offering card: eyebrow, serif heading, body, arrow link list, CTA. */
export function ServiceCard({ eyebrow, heading, href = "#", body, links = [], cta = "Explore the service" }) {
  return (
    <article className="service-card">
      <header className="service-card__header">
        {eyebrow ? <p className="service-card__eyebrow">{eyebrow}</p> : null}
        <h3 className="service-card__heading">
          <a href={href}>{heading}</a>
        </h3>
      </header>
      {body ? <p className="service-card__body">{body}</p> : null}
      {links.length > 0 ? (
        <div className="service-card__list">
          {links.map((l) => (
            <a key={l.label} href={l.href || "#"}>
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
      <a className="service-card__cta" href={href}>
        {cta}
      </a>
    </article>
  );
}

import React from "react";

/** Buyer-routing card opening with an italic serif situation signal. */
export function BuyerCard({ signal, heading, href = "#", body, cta = "This is me" }) {
  return (
    <article className="buyer-card">
      {signal ? <p className="buyer-card__signal">{signal}</p> : null}
      <h3 className="buyer-card__heading">
        <a href={href}>{heading}</a>
      </h3>
      {body ? <p className="buyer-card__body">{body}</p> : null}
      <a className="buyer-card__cta" href={href}>
        {cta} →
      </a>
    </article>
  );
}

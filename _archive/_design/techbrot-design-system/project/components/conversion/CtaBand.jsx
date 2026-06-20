import React from "react";
import { Button } from "../core/Button.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";

/** Dark conversion band: eyebrow, serif heading, lede, actions, disclaimer. */
export function CtaBand({
  eyebrow,
  heading,
  lede,
  primary,
  primaryHref = "#",
  secondary,
  secondaryHref = "#",
  disclaimer,
}) {
  return (
    <section className="section section--cta-band">
      <div className="container">
        <div className="final-cta">
          {eyebrow ? <Eyebrow inverted>{eyebrow}</Eyebrow> : null}
          <h2 className="final-cta__heading">{heading}</h2>
          {lede ? <p className="final-cta__lede">{lede}</p> : null}
          <div className="final-cta__actions">
            {primary ? (
              <Button inverted href={primaryHref}>
                {primary}
              </Button>
            ) : null}
            {secondary ? (
              <Button inverted variant="ghost" href={secondaryHref}>
                {secondary}
              </Button>
            ) : null}
          </div>
          {disclaimer ? <p className="final-cta__disclaimer">{disclaimer}</p> : null}
        </div>
      </div>
    </section>
  );
}

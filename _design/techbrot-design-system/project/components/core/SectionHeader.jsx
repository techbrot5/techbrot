import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

/** Standard section header: eyebrow + serif heading + lede. */
export function SectionHeader({ eyebrow, heading, lede, centered = false, className = "" }) {
  const cls = [
    "section__header",
    centered ? "section__header--centered" : null,
    className || null,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <header className={cls}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="section__heading">{heading}</h2>
      {lede ? <p className="section__lede">{lede}</p> : null}
    </header>
  );
}

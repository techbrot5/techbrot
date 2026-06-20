import React from "react";

/** Uppercase tracked topic label that sits above headings. */
export function Eyebrow({ children, inverted = false, as = "p", className = "" }) {
  const Tag = as;
  const cls = [
    "section__eyebrow",
    inverted ? "section__eyebrow--inverted" : null,
    className || null,
  ]
    .filter(Boolean)
    .join(" ");
  return <Tag className={cls}>{children}</Tag>;
}

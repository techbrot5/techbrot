import React from "react";

/** DefinedTerm card: coined term + definition + firm attribution. */
export function Framework({ term, eyebrow = "Framework", children, attribution = "Defined by TechBrot — Certified QuickBooks ProAdvisor team" }) {
  return (
    <article className="framework">
      <p className="framework__eyebrow">{eyebrow}</p>
      <h3 className="framework__term">{term}</h3>
      <p className="framework__definition">{children}</p>
      <p className="framework__attribution">{attribution}</p>
    </article>
  );
}

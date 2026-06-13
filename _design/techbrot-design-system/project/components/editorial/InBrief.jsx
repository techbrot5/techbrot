import React from "react";

/** Quotable AI-citation opener placed directly under the H1. */
export function InBrief({ children, source }) {
  return (
    <div className="in-brief">
      <p className="in-brief__text">{children}</p>
      {source ? <p className="in-brief__source">{source}</p> : null}
    </div>
  );
}

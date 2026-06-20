import React from "react";

/** Pull-quote / framework definition woven into long-form prose. */
export function PullQuote({ children, attribution }) {
  return (
    <aside className="pull">
      <p className="pull__text">{children}</p>
      {attribution ? <p className="pull__attribution">{attribution}</p> : null}
    </aside>
  );
}

import React from "react";

/** Single proprietary number in Fraunces display with label + source. */
export function Stat({ number, label, source }) {
  return (
    <div className="stat">
      <p className="stat__number">{number}</p>
      {label ? <p className="stat__label">{label}</p> : null}
      {source ? <p className="stat__source">{source}</p> : null}
    </div>
  );
}

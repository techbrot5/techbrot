import React from "react";

/** Horizontal proof strip: real review scores, credentials, counts. */
export function TrustRow({ items = [] }) {
  return (
    <div className="trust-row">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <div className="trust-row__divider"></div> : null}
          <div className="trust-row__item">
            <p className="trust-row__value">{item.value}</p>
            <p className="trust-row__label">{item.label}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

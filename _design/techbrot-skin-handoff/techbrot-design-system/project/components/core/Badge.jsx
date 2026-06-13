import React from "react";

const tbBadgeCss = `
.tb-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:0.75rem;font-weight:var(--weight-semibold);line-height:1;padding:5px 10px;border-radius:var(--radius-full);border:1px solid transparent}
.tb-badge--neutral{background:var(--surface-sunken);color:var(--ink-700);border-color:var(--line)}
.tb-badge--accent{background:var(--cobalt-100);color:var(--cobalt-700)}
.tb-badge--brass{background:var(--brass-100);color:var(--brass-700)}
.tb-badge--positive{background:var(--positive-100);color:var(--positive-700)}
.tb-badge--warning{background:var(--warning-100);color:var(--warning-700)}
.tb-badge--critical{background:var(--critical-100);color:var(--critical-700)}
`;

function injectBadgeCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-badge-css")) {
    const s = document.createElement("style");
    s.id = "tb-badge-css";
    s.textContent = tbBadgeCss;
    document.head.appendChild(s);
  }
}

export function Badge({ variant = "neutral", children, style }) {
  injectBadgeCss();
  return (
    <span className={`tb-badge tb-badge--${variant}`} style={style}>
      {children}
    </span>
  );
}

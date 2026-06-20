import React from "react";

const tbCheckCss = `
.tb-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);cursor:pointer;line-height:1.4}
.tb-check input{appearance:none;-webkit-appearance:none;width:18px;height:18px;margin:1px 0 0;flex:none;background:var(--surface);border:var(--border-input);border-radius:var(--radius-xs);cursor:pointer;position:relative;transition:background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out)}
.tb-check input:hover{border-color:var(--ink-400)}
.tb-check input:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.tb-check input:checked{background:var(--ink-900);border-color:var(--ink-900)}
.tb-check input:checked::after{content:"";position:absolute;left:5px;top:1.5px;width:5px;height:9px;border-right:2px solid var(--paper-on-ink);border-bottom:2px solid var(--paper-on-ink);transform:rotate(45deg)}
.tb-check--disabled{opacity:0.45;pointer-events:none}
`;

function injectCheckCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-check-css")) {
    const s = document.createElement("style");
    s.id = "tb-check-css";
    s.textContent = tbCheckCss;
    document.head.appendChild(s);
  }
}

export function Checkbox({ label, disabled = false, style, ...rest }) {
  injectCheckCss();
  return (
    <label className={`tb-check${disabled ? " tb-check--disabled" : ""}`} style={style}>
      <input type="checkbox" disabled={disabled} {...rest} />
      {label && <span>{label}</span>}
    </label>
  );
}

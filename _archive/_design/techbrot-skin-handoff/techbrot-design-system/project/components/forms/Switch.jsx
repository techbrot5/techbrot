import React from "react";

const tbSwitchCss = `
.tb-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);cursor:pointer}
.tb-switch input{appearance:none;-webkit-appearance:none;width:36px;height:21px;margin:0;flex:none;background:var(--line-strong);border:none;border-radius:var(--radius-full);cursor:pointer;position:relative;transition:background var(--duration-base) var(--ease-out)}
.tb-switch input::after{content:"";position:absolute;left:2.5px;top:2.5px;width:16px;height:16px;border-radius:50%;background:var(--surface);box-shadow:var(--shadow-xs);transition:transform var(--duration-base) var(--ease-out)}
.tb-switch input:checked{background:var(--ink-900)}
.tb-switch input:checked::after{transform:translateX(15px)}
.tb-switch input:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.tb-switch--disabled{opacity:0.45;pointer-events:none}
`;

function injectSwitchCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-switch-css")) {
    const s = document.createElement("style");
    s.id = "tb-switch-css";
    s.textContent = tbSwitchCss;
    document.head.appendChild(s);
  }
}

export function Switch({ label, disabled = false, style, ...rest }) {
  injectSwitchCss();
  return (
    <label className={`tb-switch${disabled ? " tb-switch--disabled" : ""}`} style={style}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      {label && <span>{label}</span>}
    </label>
  );
}

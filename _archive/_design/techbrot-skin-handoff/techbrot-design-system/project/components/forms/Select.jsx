import React from "react";

const tbSelectCss = `
.tb-select-wrap{position:relative;display:inline-block;width:100%}
.tb-select{appearance:none;-webkit-appearance:none;font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);background:var(--surface);border:var(--border-input);border-radius:var(--radius-sm);height:40px;padding:0 36px 0 12px;width:100%;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.tb-select:hover{border-color:var(--ink-400)}
.tb-select:focus{outline:none;border-color:var(--focus-ring);box-shadow:var(--shadow-focus)}
.tb-select-wrap::after{content:"";position:absolute;right:14px;top:50%;width:8px;height:8px;border-right:1.5px solid var(--ink-500);border-bottom:1.5px solid var(--ink-500);transform:translateY(-70%) rotate(45deg);pointer-events:none}
`;

function injectSelectCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-select-css")) {
    const s = document.createElement("style");
    s.id = "tb-select-css";
    s.textContent = tbSelectCss;
    document.head.appendChild(s);
  }
}

export function Select({ options = [], style, ...rest }) {
  injectSelectCss();
  return (
    <span className="tb-select-wrap" style={style}>
      <select className="tb-select" {...rest}>
        {options.map((o) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o;
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </span>
  );
}

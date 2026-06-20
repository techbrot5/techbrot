import React from "react";

const tbInputCss = `
.tb-input{font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);background:var(--surface);border:var(--border-input);border-radius:var(--radius-sm);height:40px;padding:0 12px;width:100%;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.tb-input::placeholder{color:var(--text-placeholder)}
.tb-input:hover{border-color:var(--ink-400)}
.tb-input:focus{outline:none;border-color:var(--focus-ring);box-shadow:var(--shadow-focus)}
.tb-input[disabled]{background:var(--surface-sunken);color:var(--text-muted);cursor:not-allowed}
.tb-input--invalid{border-color:var(--critical-600)}
textarea.tb-input{height:auto;min-height:96px;padding:10px 12px;resize:vertical;line-height:var(--leading-ui)}
`;

function injectInputCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-input-css")) {
    const s = document.createElement("style");
    s.id = "tb-input-css";
    s.textContent = tbInputCss;
    document.head.appendChild(s);
  }
}

export function Input({ multiline = false, invalid = false, style, ...rest }) {
  injectInputCss();
  const cls = `tb-input${invalid ? " tb-input--invalid" : ""}`;
  if (multiline) {
    return <textarea className={cls} aria-invalid={invalid || undefined} style={style} {...rest}></textarea>;
  }
  return <input className={cls} aria-invalid={invalid || undefined} style={style} {...rest} />;
}

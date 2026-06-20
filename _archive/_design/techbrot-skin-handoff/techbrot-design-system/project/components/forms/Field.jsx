import React from "react";

const tbFieldCss = `
.tb-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.tb-field__label{font-size:0.875rem;font-weight:var(--weight-medium);color:var(--text-primary)}
.tb-field__hint{font-size:0.8125rem;color:var(--text-muted)}
.tb-field__error{font-size:0.8125rem;color:var(--critical-600)}
`;

function injectFieldCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-field-css")) {
    const s = document.createElement("style");
    s.id = "tb-field-css";
    s.textContent = tbFieldCss;
    document.head.appendChild(s);
  }
}

export function Field({ label, hint, error, htmlFor, children, style }) {
  injectFieldCss();
  return (
    <div className="tb-field" style={style}>
      {label && (
        <label className="tb-field__label" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {children}
      {error ? (
        <span className="tb-field__error" role="alert">{error}</span>
      ) : hint ? (
        <span className="tb-field__hint">{hint}</span>
      ) : null}
    </div>
  );
}

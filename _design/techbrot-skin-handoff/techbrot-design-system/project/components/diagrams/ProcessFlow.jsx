import React from "react";

const tbFlowCss = `
.tb-flow{display:flex;align-items:stretch;gap:0;font-family:var(--font-sans);flex-wrap:wrap;row-gap:16px}
.tb-flow__step{background:var(--surface);border:1px solid var(--line-strong);border-radius:var(--radius-sm);padding:12px 16px;min-width:120px;display:flex;flex-direction:column;justify-content:center;gap:3px}
.tb-flow__step--highlight{border-color:var(--cobalt-600);background:var(--cobalt-50)}
.tb-flow__label{font-size:0.875rem;font-weight:var(--weight-semibold);color:var(--text-primary)}
.tb-flow__sub{font-family:var(--font-mono);font-size:0.6875rem;color:var(--text-muted)}
.tb-flow__step--highlight .tb-flow__sub{color:var(--cobalt-700)}
.tb-flow__arrow{display:flex;align-items:center;padding:0 10px;color:var(--ink-400);flex:none}
`;

function injectFlowCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-flow-css")) {
    const s = document.createElement("style");
    s.id = "tb-flow-css";
    s.textContent = tbFlowCss;
    document.head.appendChild(s);
  }
}

const FlowArrow = () => (
  <span className="tb-flow__arrow" aria-hidden="true">
    <svg width="22" height="10" viewBox="0 0 22 10">
      <line x1="0" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 1 L20 5 L14 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </span>
);

/** Horizontal process map. steps: [{label, sublabel?, highlight?}] */
export function ProcessFlow({ steps = [], title, style }) {
  injectFlowCss();
  return (
    <figure style={{ margin: 0, ...style }} role="img" aria-label={title || steps.map((s) => s.label).join(" → ")}>
      <div className="tb-flow">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 && <FlowArrow />}
            <div className={`tb-flow__step${s.highlight ? " tb-flow__step--highlight" : ""}`}>
              <span className="tb-flow__label">{s.label}</span>
              {s.sublabel && <span className="tb-flow__sub">{s.sublabel}</span>}
            </div>
          </React.Fragment>
        ))}
      </div>
      {title && (
        <figcaption
          style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 12, fontFamily: "var(--font-sans)" }}
        >
          {title}
        </figcaption>
      )}
    </figure>
  );
}

import React from "react";

const tbButtonCss = `
.tb-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font-sans);font-weight:var(--weight-medium);border-radius:var(--radius-sm);border:1px solid transparent;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out),color var(--duration-fast) var(--ease-out)}
.tb-btn:active{transform:translateY(0.5px)}
.tb-btn--sm{font-size:0.8125rem;padding:0 12px;height:32px}
.tb-btn--md{font-size:0.875rem;padding:0 16px;height:40px}
.tb-btn--lg{font-size:1rem;padding:0 22px;height:48px}
.tb-btn--primary{background:var(--btn-primary-bg);color:var(--btn-primary-fg)}
.tb-btn--primary:hover{background:var(--btn-primary-bg-hover);color:var(--btn-primary-fg)}
.tb-btn--secondary{background:var(--surface);border-color:var(--line-strong);color:var(--text-primary)}
.tb-btn--secondary:hover{border-color:var(--ink-400);background:var(--surface);color:var(--text-primary)}
.tb-btn--ghost{background:transparent;color:var(--text-secondary)}
.tb-btn--ghost:hover{background:var(--surface-sunken);color:var(--text-primary)}
.tb-btn[disabled],.tb-btn--disabled{opacity:0.45;pointer-events:none}
`;

function injectButtonCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-btn-css")) {
    const s = document.createElement("style");
    s.id = "tb-btn-css";
    s.textContent = tbButtonCss;
    document.head.appendChild(s);
  }
}

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  type = "button",
  children,
  style,
}) {
  injectButtonCss();
  const cls = `tb-btn tb-btn--${variant} tb-btn--${size}${disabled ? " tb-btn--disabled" : ""}`;
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} style={style} aria-disabled={disabled || undefined}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
}

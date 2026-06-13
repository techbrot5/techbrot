import React from "react";

const tbCardCss = `
.tb-card{display:block;background:var(--surface-card);border:1px solid var(--line);border-radius:var(--radius-md);padding:var(--space-5);font-family:var(--font-sans);color:var(--text-primary);text-decoration:none;transition:box-shadow var(--duration-base) var(--ease-out),border-color var(--duration-base) var(--ease-out)}
a.tb-card:hover{box-shadow:var(--shadow-sm);border-color:var(--line-strong);color:var(--text-primary)}
.tb-card__eyebrow{font-size:0.75rem;font-weight:var(--weight-semibold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--brass-600);margin:0 0 10px}
.tb-card__title{font-family:var(--font-display);font-size:1.375rem;font-weight:var(--weight-heading);font-variation-settings:var(--heading-variation);letter-spacing:var(--tracking-heading);line-height:var(--leading-heading);margin:0 0 8px}
.tb-card__body{font-size:0.9375rem;line-height:var(--leading-ui);color:var(--text-secondary)}
.tb-card__body > :last-child{margin-bottom:0}
`;

function injectCardCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-card-css")) {
    const s = document.createElement("style");
    s.id = "tb-card-css";
    s.textContent = tbCardCss;
    document.head.appendChild(s);
  }
}

export function Card({ eyebrow, title, href, children, style }) {
  injectCardCss();
  const inner = (
    <React.Fragment>
      {eyebrow && <p className="tb-card__eyebrow">{eyebrow}</p>}
      {title && <h3 className="tb-card__title">{title}</h3>}
      <div className="tb-card__body">{children}</div>
    </React.Fragment>
  );
  if (href) {
    return (
      <a className="tb-card" href={href} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <div className="tb-card" style={style}>
      {inner}
    </div>
  );
}

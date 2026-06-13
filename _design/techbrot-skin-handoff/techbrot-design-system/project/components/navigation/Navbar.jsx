import React from "react";
import { Logo } from "../core/Logo.jsx";
import { Button } from "../core/Button.jsx";

const tbNavCss = `
.tb-nav{display:flex;align-items:center;gap:32px;height:64px;padding:0 var(--container-pad);max-width:var(--container-max);margin:0 auto;font-family:var(--font-sans)}
.tb-nav__links{display:flex;gap:4px;align-items:center;margin:0 auto;list-style:none;padding:0}
.tb-nav__link{font-size:0.875rem;font-weight:var(--weight-medium);color:var(--text-secondary);text-decoration:none;padding:8px 12px;border-radius:var(--radius-sm);transition:color var(--duration-fast) var(--ease-out),background var(--duration-fast) var(--ease-out)}
.tb-nav__link:hover{color:var(--text-primary);background:var(--surface-sunken)}
.tb-nav__link--active{color:var(--text-primary)}
.tb-navbar{position:sticky;top:0;z-index:50;background:rgba(251,250,247,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
`;

function injectNavCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-nav-css")) {
    const s = document.createElement("style");
    s.id = "tb-nav-css";
    s.textContent = tbNavCss;
    document.head.appendChild(s);
  }
}

export function Navbar({
  links = [
    { label: "Services", href: "#" },
    { label: "Methodology", href: "#" },
    { label: "Research", href: "#" },
    { label: "About", href: "#" },
  ],
  active,
  cta = "Book a systems review",
  onCta,
  onNavigate,
  style,
}) {
  injectNavCss();
  return (
    <header className="tb-navbar" style={style}>
      <nav className="tb-nav" aria-label="Main">
        <a
          href="#"
          aria-label="TechBrot home"
          style={{ display: "flex", textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            onNavigate && onNavigate("home");
          }}
        >
          <Logo variant="horizontal" height={26} />
        </a>
        <ul className="tb-nav__links">
          {links.map((l) => (
            <li key={l.label}>
              <a
                className={`tb-nav__link${active === l.label ? " tb-nav__link--active" : ""}`}
                href={l.href}
                aria-current={active === l.label ? "page" : undefined}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(l.label);
                  }
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button variant="primary" size="sm" onClick={onCta}>
          {cta}
        </Button>
      </nav>
    </header>
  );
}

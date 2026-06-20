import React from "react";
import { Logo } from "../core/Logo.jsx";

export function Footer({ note = "Platform-agnostic accounting technology advisory.", columns, style }) {
  const cols =
    columns || [
      { title: "Services", links: ["Systems review", "Cleanup & migration", "Monthly advisory", "Team training"] },
      { title: "Research", links: ["Month-end study", "Software comparisons", "Frameworks", "All research"] },
      { title: "Company", links: ["About", "Methodology", "Contact"] },
    ];
  return (
    <footer
      style={{
        background: "var(--ink-surface)",
        color: "var(--muted-on-ink)",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--space-9) var(--container-pad) var(--space-6)",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "var(--space-6)",
        }}
      >
        <div>
          <Logo variant="horizontal" theme="dark" height={26} />
          <p style={{ fontSize: "0.875rem", margin: "16px 0 0", maxWidth: 280, lineHeight: 1.5 }}>{note}</p>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "var(--tracking-caps)",
                textTransform: "uppercase",
                color: "var(--paper-on-ink)",
                margin: "0 0 14px",
              }}
            >
              {c.title}
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      color: "var(--muted-on-ink)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper-on-ink)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-on-ink)")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "var(--space-5) var(--container-pad)",
          borderTop: "1px solid var(--line-on-ink)",
          fontSize: "0.8125rem",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span>© 2026 TechBrot. All rights reserved.</span>
        <span>Not affiliated with Intuit. QuickBooks is a trademark of Intuit Inc.</span>
      </div>
    </footer>
  );
}

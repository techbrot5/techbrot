import React from "react";

const tbCalloutTones = {
  info: { bg: "var(--cobalt-50)", border: "var(--cobalt-200)", label: "var(--cobalt-700)" },
  positive: { bg: "var(--positive-100)", border: "var(--positive-600)", label: "var(--positive-700)" },
  warning: { bg: "var(--warning-100)", border: "var(--warning-600)", label: "var(--warning-700)" },
  critical: { bg: "var(--critical-100)", border: "var(--critical-600)", label: "var(--critical-700)" },
  note: { bg: "var(--surface-sunken)", border: "var(--line-strong)", label: "var(--ink-700)" },
};

export function Callout({ tone = "note", title, children, style }) {
  const t = tbCalloutTones[tone] || tbCalloutTones.note;
  return (
    <aside
      style={{
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--radius-md)",
        padding: "14px 18px",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9375rem",
        lineHeight: "var(--leading-ui)",
        color: "var(--text-secondary)",
        ...style,
      }}
    >
      {title && (
        <p
          style={{
            margin: "0 0 4px",
            fontWeight: 600,
            fontSize: "0.875rem",
            color: t.label,
          }}
        >
          {title}
        </p>
      )}
      <div style={{ color: "var(--ink-700)" }}>{children}</div>
    </aside>
  );
}

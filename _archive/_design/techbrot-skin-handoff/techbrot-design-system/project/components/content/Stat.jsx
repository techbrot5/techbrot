import React from "react";

export function Stat({ value, label, delta, deltaTone = "positive", style }) {
  const deltaColor =
    deltaTone === "critical" ? "var(--critical-600)" : deltaTone === "neutral" ? "var(--ink-500)" : "var(--positive-600)";
  return (
    <div style={{ fontFamily: "var(--font-sans)", ...style }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
          fontSize: "2.25rem",
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          color: "var(--text-primary)",
          fontVariantNumeric: "tabular-nums",
          display: "flex",
          alignItems: "baseline",
          gap: 10,
        }}
      >
        {value}
        {delta && (
          <span style={{ fontSize: "0.875rem", fontWeight: 500, color: deltaColor }}>{delta}</span>
        )}
      </div>
      <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: 6 }}>{label}</div>
    </div>
  );
}

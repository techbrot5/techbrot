import React from "react";

/** Horizontal bar chart — semantic HTML, mono figures. data: [{label, value, display?, highlight?}] */
export function BarChart({ data = [], max, caption, unit = "", style }) {
  const top = max || Math.max(...data.map((d) => d.value), 1);
  return (
    <figure style={{ margin: 0, fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ display: "grid", gap: 10 }}>
        {data.map((d) => (
          <div key={d.label} style={{ display: "grid", gridTemplateColumns: "150px 1fr 64px", gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", textAlign: "right" }}>{d.label}</span>
            <div style={{ background: "var(--surface-sunken)", borderRadius: 3, height: 18, overflow: "hidden" }}>
              <div
                style={{
                  width: `${(d.value / top) * 100}%`,
                  height: "100%",
                  background: d.highlight ? "var(--cobalt-600)" : "var(--ink-700)",
                  borderRadius: 3,
                }}
              ></div>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: d.highlight ? "var(--cobalt-700)" : "var(--text-muted)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {d.display || `${d.value}${unit}`}
            </span>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 14 }}>{caption}</figcaption>
      )}
    </figure>
  );
}

import React from "react";

const Dot = ({ level }) => {
  // level: 0 none, 1 partial, 2 full
  if (level === 2)
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <circle cx="7" cy="7" r="6" fill="var(--cobalt-600)" />
      </svg>
    );
  if (level === 1)
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <circle cx="7" cy="7" r="5.5" fill="none" stroke="var(--cobalt-600)" strokeWidth="1.5" />
        <path d="M7 1.5 A5.5 5.5 0 0 1 7 12.5 Z" fill="var(--cobalt-600)" />
      </svg>
    );
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" fill="none" stroke="var(--line-strong)" strokeWidth="1.5" />
    </svg>
  );
};

const tbDotLabels = ["Not supported", "Partial", "Full support"];

/**
 * options: ["QuickBooks Online", "Xero", …]
 * criteria: [{ label, values: (0|1|2|string)[] }]
 */
export function ComparisonGrid({ options = [], criteria = [], caption, highlightColumn, style }) {
  return (
    <figure style={{ margin: 0, fontFamily: "var(--font-sans)", ...style }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px 12px" }}></th>
            {options.map((o, i) => (
              <th
                key={o}
                scope="col"
                style={{
                  textAlign: "center",
                  padding: "8px 12px",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  color: i === highlightColumn ? "var(--cobalt-700)" : "var(--text-secondary)",
                  background: i === highlightColumn ? "var(--cobalt-50)" : "transparent",
                  borderBottom: "1px solid var(--line)",
                  borderRadius: i === highlightColumn ? "6px 6px 0 0" : 0,
                }}
              >
                {o}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((c) => (
            <tr key={c.label}>
              <th
                scope="row"
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {c.label}
              </th>
              {c.values.map((v, i) => (
                <td
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line)",
                    background: i === highlightColumn ? "var(--cobalt-50)" : "transparent",
                    fontFamily: typeof v === "string" ? "var(--font-mono)" : undefined,
                    fontSize: typeof v === "string" ? "0.8125rem" : undefined,
                  }}
                >
                  {typeof v === "number" ? (
                    <span role="img" aria-label={tbDotLabels[v]}>
                      <Dot level={v} />
                    </span>
                  ) : (
                    v
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <figcaption style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 12 }}>
          {caption} <span aria-hidden="true" style={{ marginLeft: 8 }}>● full · ◐ partial · ○ none</span>
        </figcaption>
      )}
    </figure>
  );
}

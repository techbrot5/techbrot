import React from "react";

const tbTableCss = `
.tb-table{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:0.875rem;font-variant-numeric:tabular-nums}
.tb-table caption{text-align:left;font-size:0.8125rem;color:var(--text-muted);padding:0 0 10px}
.tb-table th{font-weight:var(--weight-semibold);font-size:0.8125rem;color:var(--text-secondary);text-align:left;background:var(--surface-sunken);padding:9px 14px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.tb-table td{padding:11px 14px;border-bottom:1px solid var(--line);color:var(--text-primary)}
.tb-table th.tb-num,.tb-table td.tb-num{text-align:right;font-family:var(--font-mono);font-size:0.8125rem}
.tb-table tbody tr:hover{background:var(--cobalt-50)}
`;

function injectTableCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-table-css")) {
    const s = document.createElement("style");
    s.id = "tb-table-css";
    s.textContent = tbTableCss;
    document.head.appendChild(s);
  }
}

/**
 * columns: [{ key, label, numeric }]
 * rows: array of objects keyed by column key (values may be JSX)
 */
export function DataTable({ columns = [], rows = [], caption, style }) {
  injectTableCss();
  return (
    <table className="tb-table" style={style}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key} className={c.numeric ? "tb-num" : undefined} scope="col">
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c.key} className={c.numeric ? "tb-num" : undefined}>
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

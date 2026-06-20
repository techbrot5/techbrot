/* @ds-bundle: {"format":3,"namespace":"TechBrotDesignSystem_de93db","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"BarChart","sourcePath":"components/diagrams/BarChart.jsx"},{"name":"ComparisonGrid","sourcePath":"components/diagrams/ComparisonGrid.jsx"},{"name":"DecisionTree","sourcePath":"components/diagrams/DecisionTree.jsx"},{"name":"ProcessFlow","sourcePath":"components/diagrams/ProcessFlow.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"ArticleScreen","sourcePath":"ui_kits/website/ArticleScreen.jsx"},{"name":"HomeScreen","sourcePath":"ui_kits/website/HomeScreen.jsx"},{"name":"ServicesScreen","sourcePath":"ui_kits/website/ServicesScreen.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"a0f468c70393","components/content/Card.jsx":"ee2e5a9c7d2a","components/content/DataTable.jsx":"c569749949ee","components/content/Stat.jsx":"696612c65be8","components/core/Avatar.jsx":"7c5ca6b244e3","components/core/Badge.jsx":"20e368f5cdee","components/core/Button.jsx":"a8be00152f7b","components/core/Logo.jsx":"3b3461b87dee","components/diagrams/BarChart.jsx":"368dcdc896f1","components/diagrams/ComparisonGrid.jsx":"f781d5e782bb","components/diagrams/DecisionTree.jsx":"1c9e86cf1249","components/diagrams/ProcessFlow.jsx":"6b285e4ca9d5","components/forms/Checkbox.jsx":"d6a151352225","components/forms/Field.jsx":"bf46f566315e","components/forms/Input.jsx":"02afc1936882","components/forms/Select.jsx":"4dbf47d1a462","components/forms/Switch.jsx":"e221b18a4458","components/navigation/Footer.jsx":"88d7d4172970","components/navigation/Navbar.jsx":"5042a23729fb","ui_kits/website/ArticleScreen.jsx":"5ca1c3ed9075","ui_kits/website/HomeScreen.jsx":"28fb406c2d4e","ui_kits/website/ServicesScreen.jsx":"5af7acbc54ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TechBrotDesignSystem_de93db = window.TechBrotDesignSystem_de93db || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Callout.jsx
try { (() => {
const tbCalloutTones = {
  info: {
    bg: "var(--cobalt-50)",
    border: "var(--cobalt-200)",
    label: "var(--cobalt-700)"
  },
  positive: {
    bg: "var(--positive-100)",
    border: "var(--positive-600)",
    label: "var(--positive-700)"
  },
  warning: {
    bg: "var(--warning-100)",
    border: "var(--warning-600)",
    label: "var(--warning-700)"
  },
  critical: {
    bg: "var(--critical-100)",
    border: "var(--critical-600)",
    label: "var(--critical-700)"
  },
  note: {
    bg: "var(--surface-sunken)",
    border: "var(--line-strong)",
    label: "var(--ink-700)"
  }
};
function Callout({
  tone = "note",
  title,
  children,
  style
}) {
  const t = tbCalloutTones[tone] || tbCalloutTones.note;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: "var(--radius-md)",
      padding: "14px 18px",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      lineHeight: "var(--leading-ui)",
      color: "var(--text-secondary)",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: 600,
      fontSize: "0.875rem",
      color: t.label
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-700)"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
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
function Card({
  eyebrow,
  title,
  href,
  children,
  style
}) {
  injectCardCss();
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "tb-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "tb-card__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tb-card__body"
  }, children));
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      className: "tb-card",
      href: href,
      style: style
    }, inner);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "tb-card",
    style: style
  }, inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
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
function DataTable({
  columns = [],
  rows = [],
  caption,
  style
}) {
  injectTableCss();
  return /*#__PURE__*/React.createElement("table", {
    className: "tb-table",
    style: style
  }, caption && /*#__PURE__*/React.createElement("caption", null, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.numeric ? "tb-num" : undefined,
    scope: "col"
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.numeric ? "tb-num" : undefined
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  delta,
  deltaTone = "positive",
  style
}) {
  const deltaColor = deltaTone === "critical" ? "var(--critical-600)" : deltaTone === "neutral" ? "var(--ink-500)" : "var(--positive-600)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: "2.25rem",
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums",
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, value, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: deltaColor
    }
  }, delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      color: "var(--text-muted)",
      marginTop: 6
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const tbAvatarSizes = {
  sm: 24,
  md: 32,
  lg: 40,
  xl: 56
};
function Avatar({
  name = "",
  size = "md",
  src,
  style
}) {
  const px = tbAvatarSizes[size] || tbAvatarSizes.md;
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const base = {
    width: px,
    height: px,
    borderRadius: "var(--radius-full)",
    flex: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--surface-sunken)",
    border: "1px solid var(--line)",
    color: "var(--ink-700)",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: Math.round(px * 0.38),
    overflow: "hidden",
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      style: {
        ...base,
        objectFit: "cover"
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: base,
    role: "img",
    "aria-label": name
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tbBadgeCss = `
.tb-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:0.75rem;font-weight:var(--weight-semibold);line-height:1;padding:5px 10px;border-radius:var(--radius-full);border:1px solid transparent}
.tb-badge--neutral{background:var(--surface-sunken);color:var(--ink-700);border-color:var(--line)}
.tb-badge--accent{background:var(--cobalt-100);color:var(--cobalt-700)}
.tb-badge--brass{background:var(--brass-100);color:var(--brass-700)}
.tb-badge--positive{background:var(--positive-100);color:var(--positive-700)}
.tb-badge--warning{background:var(--warning-100);color:var(--warning-700)}
.tb-badge--critical{background:var(--critical-100);color:var(--critical-700)}
`;
function injectBadgeCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-badge-css")) {
    const s = document.createElement("style");
    s.id = "tb-badge-css";
    s.textContent = tbBadgeCss;
    document.head.appendChild(s);
  }
}
function Badge({
  variant = "neutral",
  children,
  style
}) {
  injectBadgeCss();
  return /*#__PURE__*/React.createElement("span", {
    className: `tb-badge tb-badge--${variant}`,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
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
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  type = "button",
  children,
  style
}) {
  injectButtonCss();
  const cls = `tb-btn tb-btn--${variant} tb-btn--${size}${disabled ? " tb-btn--disabled" : ""}`;
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      className: cls,
      href: href,
      onClick: onClick,
      style: style,
      "aria-disabled": disabled || undefined
    }, children);
  }
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const TB_MARK = fill => /*#__PURE__*/React.createElement("g", {
  fill: fill
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 10 H38 V54 H26 V22 H8 Z"
}), /*#__PURE__*/React.createElement("rect", {
  x: "42",
  y: "10",
  width: "14",
  height: "12"
}));

/** TechBrot logo. Inline SVG so it inherits page fonts and needs no asset path. */
function Logo({
  variant = "horizontal",
  theme = "light",
  height = 32,
  style
}) {
  const ink = theme === "dark" ? "#F5F3EC" : "#1A1915";
  if (variant === "monogram") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      height: height,
      role: "img",
      "aria-label": "TechBrot",
      style: style
    }, TB_MARK(ink));
  }
  if (variant === "tile") {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 64 64",
      height: height,
      role: "img",
      "aria-label": "TechBrot",
      style: style
    }, /*#__PURE__*/React.createElement("rect", {
      width: "64",
      height: "64",
      rx: "14",
      fill: theme === "dark" ? "#F5F3EC" : "#1A1915"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(12.16 12.16) scale(0.62)"
    }, TB_MARK(theme === "dark" ? "#1A1915" : "#F5F3EC")));
  }
  // horizontal lockup
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 248 64",
    height: height,
    role: "img",
    "aria-label": "TechBrot",
    style: style
  }, /*#__PURE__*/React.createElement("g", {
    fill: ink
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 14 H30.5 V47 H21.5 V23 H8 Z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "33.5",
    y: "14",
    width: "10.5",
    height: "9"
  })), /*#__PURE__*/React.createElement("text", {
    x: "58",
    y: "44",
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif",
    fontSize: "30",
    fontWeight: "600",
    letterSpacing: "-0.4",
    fill: ink,
    style: {
      fontVariationSettings: "'opsz' 40"
    }
  }, "TechBrot"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/BarChart.jsx
try { (() => {
/** Horizontal bar chart — semantic HTML, mono figures. data: [{label, value, display?, highlight?}] */
function BarChart({
  data = [],
  max,
  caption,
  unit = "",
  style
}) {
  const top = max || Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr 64px",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-secondary)",
      textAlign: "right"
    }
  }, d.label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-sunken)",
      borderRadius: 3,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${d.value / top * 100}%`,
      height: "100%",
      background: d.highlight ? "var(--cobalt-600)" : "var(--ink-700)",
      borderRadius: 3
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      color: d.highlight ? "var(--cobalt-700)" : "var(--text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, d.display || `${d.value}${unit}`)))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: 14
    }
  }, caption));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/ComparisonGrid.jsx
try { (() => {
const Dot = ({
  level
}) => {
  // level: 0 none, 1 partial, 2 full
  if (level === 2) return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "6",
    fill: "var(--cobalt-600)"
  }));
  if (level === 1) return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "5.5",
    fill: "none",
    stroke: "var(--cobalt-600)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 1.5 A5.5 5.5 0 0 1 7 12.5 Z",
    fill: "var(--cobalt-600)"
  }));
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "5.5",
    fill: "none",
    stroke: "var(--line-strong)",
    strokeWidth: "1.5"
  }));
};
const tbDotLabels = ["Not supported", "Partial", "Full support"];

/**
 * options: ["QuickBooks Online", "Xero", …]
 * criteria: [{ label, values: (0|1|2|string)[] }]
 */
function ComparisonGrid({
  options = [],
  criteria = [],
  caption,
  highlightColumn,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.875rem"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "8px 12px"
    }
  }), options.map((o, i) => /*#__PURE__*/React.createElement("th", {
    key: o,
    scope: "col",
    style: {
      textAlign: "center",
      padding: "8px 12px",
      fontWeight: 600,
      fontSize: "0.8125rem",
      color: i === highlightColumn ? "var(--cobalt-700)" : "var(--text-secondary)",
      background: i === highlightColumn ? "var(--cobalt-50)" : "transparent",
      borderBottom: "1px solid var(--line)",
      borderRadius: i === highlightColumn ? "6px 6px 0 0" : 0
    }
  }, o)))), /*#__PURE__*/React.createElement("tbody", null, criteria.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.label
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row",
    style: {
      textAlign: "left",
      padding: "10px 12px",
      fontWeight: 400,
      color: "var(--text-secondary)",
      borderBottom: "1px solid var(--line)"
    }
  }, c.label), c.values.map((v, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      textAlign: "center",
      padding: "10px 12px",
      borderBottom: "1px solid var(--line)",
      background: i === highlightColumn ? "var(--cobalt-50)" : "transparent",
      fontFamily: typeof v === "string" ? "var(--font-mono)" : undefined,
      fontSize: typeof v === "string" ? "0.8125rem" : undefined
    }
  }, typeof v === "number" ? /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": tbDotLabels[v]
  }, /*#__PURE__*/React.createElement(Dot, {
    level: v
  })) : v)))))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: 12
    }
  }, caption, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      marginLeft: 8
    }
  }, "\u25CF full \xB7 \u25D0 partial \xB7 \u25CB none")));
}
Object.assign(__ds_scope, { ComparisonGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/ComparisonGrid.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/DecisionTree.jsx
try { (() => {
/**
 * Binary decision tree rendered as SVG.
 * node: { label, yes?, no?, result?: boolean }
 * Leaf nodes (result: true) render in cobalt.
 */
function countLeaves(node) {
  if (!node.yes && !node.no) return 1;
  return (node.yes ? countLeaves(node.yes) : 0) + (node.no ? countLeaves(node.no) : 0);
}
const LEAF_W = 168;
const ROW_H = 96;
const BOX_W = 156;
const BOX_H = 48;
function layout(node, depth, leftLeaf, out) {
  const leaves = countLeaves(node);
  const x = (leftLeaf + leaves / 2) * LEAF_W;
  const y = depth * ROW_H + BOX_H / 2;
  const item = {
    node,
    x,
    y,
    children: []
  };
  out.push(item);
  let offset = leftLeaf;
  if (node.yes) {
    const child = layout(node.yes, depth + 1, offset, out);
    item.children.push({
      child,
      label: "Yes"
    });
    offset += countLeaves(node.yes);
  }
  if (node.no) {
    const child = layout(node.no, depth + 1, offset, out);
    item.children.push({
      child,
      label: "No"
    });
  }
  return item;
}
function depthOf(node) {
  if (!node.yes && !node.no) return 1;
  return 1 + Math.max(node.yes ? depthOf(node.yes) : 0, node.no ? depthOf(node.no) : 0);
}
function DecisionTree({
  root,
  caption,
  style
}) {
  if (!root) return null;
  const items = [];
  layout(root, 0, 0, items);
  const width = countLeaves(root) * LEAF_W;
  const height = depthOf(root) * ROW_H - (ROW_H - BOX_H) + 8;
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    },
    role: "img",
    "aria-label": caption || "Decision tree"
  }, items.map((it, i) => it.children.map((c, j) => /*#__PURE__*/React.createElement("g", {
    key: `${i}-${j}`
  }, /*#__PURE__*/React.createElement("path", {
    d: `M${it.x} ${it.y + BOX_H / 2} V${it.y + BOX_H / 2 + 16} H${c.child.x} V${c.child.y - BOX_H / 2}`,
    fill: "none",
    stroke: "var(--line-strong)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: c.child.x + (c.label === "Yes" ? -8 : 8),
    y: c.child.y - BOX_H / 2 - 7,
    textAnchor: c.label === "Yes" ? "end" : "start",
    fontSize: "11",
    fontFamily: "var(--font-mono)",
    fill: "var(--ink-500)"
  }, c.label)))), items.map((it, i) => {
    const isLeaf = !it.node.yes && !it.node.no;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: it.x - BOX_W / 2,
      y: it.y - BOX_H / 2,
      width: BOX_W,
      height: BOX_H,
      rx: "6",
      fill: isLeaf ? "var(--cobalt-50)" : "var(--surface)",
      stroke: isLeaf ? "var(--cobalt-600)" : "var(--line-strong)",
      strokeWidth: "1.25"
    }), String(it.node.label).split("\n").map((line, li, arr) => /*#__PURE__*/React.createElement("text", {
      key: li,
      x: it.x,
      y: it.y + (li - (arr.length - 1) / 2) * 15,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fontSize: "12.5",
      fontWeight: isLeaf ? 600 : 500,
      fontFamily: "var(--font-sans)",
      fill: isLeaf ? "var(--cobalt-700)" : "var(--ink-900)"
    }, line)));
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: 12
    }
  }, caption));
}
Object.assign(__ds_scope, { DecisionTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/DecisionTree.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/ProcessFlow.jsx
try { (() => {
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
const FlowArrow = () => /*#__PURE__*/React.createElement("span", {
  className: "tb-flow__arrow",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "10",
  viewBox: "0 0 22 10"
}, /*#__PURE__*/React.createElement("line", {
  x1: "0",
  y1: "5",
  x2: "16",
  y2: "5",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 1 L20 5 L14 9",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
})));

/** Horizontal process map. steps: [{label, sublabel?, highlight?}] */
function ProcessFlow({
  steps = [],
  title,
  style
}) {
  injectFlowCss();
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    },
    role: "img",
    "aria-label": title || steps.map(s => s.label).join(" → ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-flow"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(FlowArrow, null), /*#__PURE__*/React.createElement("div", {
    className: `tb-flow__step${s.highlight ? " tb-flow__step--highlight" : ""}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-flow__label"
  }, s.label), s.sublabel && /*#__PURE__*/React.createElement("span", {
    className: "tb-flow__sub"
  }, s.sublabel))))), title && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: 12,
      fontFamily: "var(--font-sans)"
    }
  }, title));
}
Object.assign(__ds_scope, { ProcessFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/ProcessFlow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tbCheckCss = `
.tb-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);cursor:pointer;line-height:1.4}
.tb-check input{appearance:none;-webkit-appearance:none;width:18px;height:18px;margin:1px 0 0;flex:none;background:var(--surface);border:var(--border-input);border-radius:var(--radius-xs);cursor:pointer;position:relative;transition:background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out)}
.tb-check input:hover{border-color:var(--ink-400)}
.tb-check input:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.tb-check input:checked{background:var(--ink-900);border-color:var(--ink-900)}
.tb-check input:checked::after{content:"";position:absolute;left:5px;top:1.5px;width:5px;height:9px;border-right:2px solid var(--paper-on-ink);border-bottom:2px solid var(--paper-on-ink);transform:rotate(45deg)}
.tb-check--disabled{opacity:0.45;pointer-events:none}
`;
function injectCheckCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-check-css")) {
    const s = document.createElement("style");
    s.id = "tb-check-css";
    s.textContent = tbCheckCss;
    document.head.appendChild(s);
  }
}
function Checkbox({
  label,
  disabled = false,
  style,
  ...rest
}) {
  injectCheckCss();
  return /*#__PURE__*/React.createElement("label", {
    className: `tb-check${disabled ? " tb-check--disabled" : ""}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const tbFieldCss = `
.tb-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.tb-field__label{font-size:0.875rem;font-weight:var(--weight-medium);color:var(--text-primary)}
.tb-field__hint{font-size:0.8125rem;color:var(--text-muted)}
.tb-field__error{font-size:0.8125rem;color:var(--critical-600)}
`;
function injectFieldCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-field-css")) {
    const s = document.createElement("style");
    s.id = "tb-field-css";
    s.textContent = tbFieldCss;
    document.head.appendChild(s);
  }
}
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  injectFieldCss();
  return /*#__PURE__*/React.createElement("div", {
    className: "tb-field",
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tb-field__label",
    htmlFor: htmlFor
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "tb-field__error",
    role: "alert"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "tb-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tbInputCss = `
.tb-input{font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);background:var(--surface);border:var(--border-input);border-radius:var(--radius-sm);height:40px;padding:0 12px;width:100%;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.tb-input::placeholder{color:var(--text-placeholder)}
.tb-input:hover{border-color:var(--ink-400)}
.tb-input:focus{outline:none;border-color:var(--focus-ring);box-shadow:var(--shadow-focus)}
.tb-input[disabled]{background:var(--surface-sunken);color:var(--text-muted);cursor:not-allowed}
.tb-input--invalid{border-color:var(--critical-600)}
textarea.tb-input{height:auto;min-height:96px;padding:10px 12px;resize:vertical;line-height:var(--leading-ui)}
`;
function injectInputCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-input-css")) {
    const s = document.createElement("style");
    s.id = "tb-input-css";
    s.textContent = tbInputCss;
    document.head.appendChild(s);
  }
}
function Input({
  multiline = false,
  invalid = false,
  style,
  ...rest
}) {
  injectInputCss();
  const cls = `tb-input${invalid ? " tb-input--invalid" : ""}`;
  if (multiline) {
    return /*#__PURE__*/React.createElement("textarea", _extends({
      className: cls,
      "aria-invalid": invalid || undefined,
      style: style
    }, rest));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    "aria-invalid": invalid || undefined,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tbSelectCss = `
.tb-select-wrap{position:relative;display:inline-block;width:100%}
.tb-select{appearance:none;-webkit-appearance:none;font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);background:var(--surface);border:var(--border-input);border-radius:var(--radius-sm);height:40px;padding:0 36px 0 12px;width:100%;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.tb-select:hover{border-color:var(--ink-400)}
.tb-select:focus{outline:none;border-color:var(--focus-ring);box-shadow:var(--shadow-focus)}
.tb-select-wrap::after{content:"";position:absolute;right:14px;top:50%;width:8px;height:8px;border-right:1.5px solid var(--ink-500);border-bottom:1.5px solid var(--ink-500);transform:translateY(-70%) rotate(45deg);pointer-events:none}
`;
function injectSelectCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-select-css")) {
    const s = document.createElement("style");
    s.id = "tb-select-css";
    s.textContent = tbSelectCss;
    document.head.appendChild(s);
  }
}
function Select({
  options = [],
  style,
  ...rest
}) {
  injectSelectCss();
  return /*#__PURE__*/React.createElement("span", {
    className: "tb-select-wrap",
    style: style
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "tb-select"
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tbSwitchCss = `
.tb-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-sans);font-size:0.9375rem;color:var(--text-primary);cursor:pointer}
.tb-switch input{appearance:none;-webkit-appearance:none;width:36px;height:21px;margin:0;flex:none;background:var(--line-strong);border:none;border-radius:var(--radius-full);cursor:pointer;position:relative;transition:background var(--duration-base) var(--ease-out)}
.tb-switch input::after{content:"";position:absolute;left:2.5px;top:2.5px;width:16px;height:16px;border-radius:50%;background:var(--surface);box-shadow:var(--shadow-xs);transition:transform var(--duration-base) var(--ease-out)}
.tb-switch input:checked{background:var(--ink-900)}
.tb-switch input:checked::after{transform:translateX(15px)}
.tb-switch input:focus-visible{outline:2px solid var(--focus-ring);outline-offset:2px}
.tb-switch--disabled{opacity:0.45;pointer-events:none}
`;
function injectSwitchCss() {
  if (typeof document !== "undefined" && !document.getElementById("tb-switch-css")) {
    const s = document.createElement("style");
    s.id = "tb-switch-css";
    s.textContent = tbSwitchCss;
    document.head.appendChild(s);
  }
}
function Switch({
  label,
  disabled = false,
  style,
  ...rest
}) {
  injectSwitchCss();
  return /*#__PURE__*/React.createElement("label", {
    className: `tb-switch${disabled ? " tb-switch--disabled" : ""}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  note = "Platform-agnostic accounting technology advisory.",
  columns,
  style
}) {
  const cols = columns || [{
    title: "Services",
    links: ["Systems review", "Cleanup & migration", "Monthly advisory", "Team training"]
  }, {
    title: "Research",
    links: ["Month-end study", "Software comparisons", "Frameworks", "All research"]
  }, {
    title: "Company",
    links: ["About", "Methodology", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-surface)",
      color: "var(--muted-on-ink)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--container-pad) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "horizontal",
    theme: "dark",
    height: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.875rem",
      margin: "16px 0 0",
      maxWidth: 280,
      lineHeight: 1.5
    }
  }, note)), cols.map(c => /*#__PURE__*/React.createElement("nav", {
    key: c.title,
    "aria-label": c.title
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--paper-on-ink)",
      margin: "0 0 14px"
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 9
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--muted-on-ink)",
      textDecoration: "none",
      fontSize: "0.875rem"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--paper-on-ink)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--muted-on-ink)"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-5) var(--container-pad)",
      borderTop: "1px solid var(--line-on-ink)",
      fontSize: "0.8125rem",
      display: "flex",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TechBrot. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Not affiliated with Intuit. QuickBooks is a trademark of Intuit Inc.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
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
function Navbar({
  links = [{
    label: "Services",
    href: "#"
  }, {
    label: "Methodology",
    href: "#"
  }, {
    label: "Research",
    href: "#"
  }, {
    label: "About",
    href: "#"
  }],
  active,
  cta = "Book a systems review",
  onCta,
  onNavigate,
  style
}) {
  injectNavCss();
  return /*#__PURE__*/React.createElement("header", {
    className: "tb-navbar",
    style: style
  }, /*#__PURE__*/React.createElement("nav", {
    className: "tb-nav",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "TechBrot home",
    style: {
      display: "flex",
      textDecoration: "none"
    },
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("home");
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "horizontal",
    height: 26
  })), /*#__PURE__*/React.createElement("ul", {
    className: "tb-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    className: `tb-nav__link${active === l.label ? " tb-nav__link--active" : ""}`,
    href: l.href,
    "aria-current": active === l.label ? "page" : undefined,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(l.label);
      }
    }
  }, l.label)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleScreen.jsx
try { (() => {
const col = {
  maxWidth: "var(--measure-text)",
  margin: "0 auto",
  padding: "0 var(--container-pad)"
};
const bodyP = {
  fontSize: "var(--text-lg)",
  lineHeight: "var(--leading-body)",
  margin: "0 0 24px"
};
function ArticleScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Research article",
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Navbar, {
    active: "Research",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      ...col,
      padding: "80px var(--container-pad) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "brass"
  }, "Research"), /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "QuickBooks")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      margin: "0 0 20px"
    }
  }, "What a clean month-end actually looks like"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-secondary)",
      margin: "0 0 28px"
    }
  }, "We audited 247 QuickBooks files to find out why closing takes 25 days for some teams and 3 for others. The answer is structural, not effort."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      paddingBottom: 32,
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: "Dana Whitfield",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "Dana Whitfield"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Principal advisor \xB7 May 2026 \xB7 9 min read")))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      padding: "40px var(--container-pad) 80px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: bodyP
  }, "Every team we audited believed their close was slow because of volume. More transactions, more entities, more people \u2014 surely that's why it takes three weeks. The data disagrees. Close time correlated with ", /*#__PURE__*/React.createElement("strong", null, "reconciliation cadence"), ", not transaction count, in 41 of 44 slow-closing files."), /*#__PURE__*/React.createElement("p", {
    style: bodyP
  }, "Teams that reconcile weekly walk into month-end with seven days of open questions. Teams that reconcile monthly walk in with thirty \u2014 and every unanswered question blocks someone else's."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "40px 0 16px"
    }
  }, "The finding"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-md)",
      padding: 24,
      margin: "0 0 24px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BarChart, {
    caption: "Median days to close, by reconciliation cadence. TechBrot file audit, 2025\u20132026 (n = 247).",
    unit: " days",
    data: [{
      label: "Weekly",
      value: 3.1,
      highlight: true
    }, {
      label: "Biweekly",
      value: 6.8
    }, {
      label: "Monthly",
      value: 13.0
    }, {
      label: "Ad hoc",
      value: 24.5
    }]
  })), /*#__PURE__*/React.createElement(__ds_scope.Callout, {
    tone: "info",
    title: "From the research",
    style: {
      margin: "0 0 24px"
    }
  }, "Cadence beat headcount in every revenue band we measured. A two-person team reconciling weekly closes faster than a five-person team reconciling monthly."), /*#__PURE__*/React.createElement("p", {
    style: bodyP
  }, "The pattern held across platforms. This is not a QuickBooks finding \u2014 it's a process finding that happens to show up clearly in QuickBooks data."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "40px 0 16px"
    }
  }, "By the numbers"), /*#__PURE__*/React.createElement(__ds_scope.DataTable, {
    caption: "Close-time distribution by cadence (days)",
    columns: [{
      key: "cadence",
      label: "Cadence"
    }, {
      key: "p25",
      label: "P25",
      numeric: true
    }, {
      key: "median",
      label: "Median",
      numeric: true
    }, {
      key: "p75",
      label: "P75",
      numeric: true
    }],
    rows: [{
      cadence: "Weekly",
      p25: "2.0",
      median: "3.1",
      p75: "4.8"
    }, {
      cadence: "Biweekly",
      p25: "4.5",
      median: "6.8",
      p75: "9.9"
    }, {
      cadence: "Monthly",
      p25: "9.1",
      median: "13.0",
      p75: "19.4"
    }, {
      cadence: "Ad hoc",
      p25: "15.2",
      median: "24.5",
      p75: "31.0"
    }],
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "40px 0 16px"
    }
  }, "What to do with this"), /*#__PURE__*/React.createElement("p", {
    style: bodyP
  }, "If your close runs past day ten, don't hire first. Move reconciliation to a weekly cadence, route receipts to one place, and let month-end become an exceptions review. That restructuring is most of what our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "cleanup engagements"), " do."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...bodyP,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Method: 247 QuickBooks Online files audited between January 2025 and March 2026. Close time measured from period end to locked books. Full methodology available on request."))), /*#__PURE__*/React.createElement(__ds_scope.Footer, null));
}
Object.assign(__ds_scope, { ArticleScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--container-pad)"
};
const h2Style = {
  fontSize: "var(--text-3xl)",
  margin: "0 0 12px"
};
const Eyebrow = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  className: "tb-eyebrow",
  style: {
    margin: "0 0 14px"
  }
}, children);
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Home",
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Navbar, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "96px var(--container-pad) 80px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Accounting technology advisory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-6xl)",
      maxWidth: "13.5em",
      margin: "0 0 24px"
    }
  }, "Your books should close themselves."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-secondary)",
      maxWidth: "30em",
      margin: "0 0 36px"
    }
  }, "TechBrot designs the accounting systems, workflows, and processes that let growing businesses trust their numbers \u2014 on QuickBooks, Xero, NetSuite, or whatever comes next."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate && onNavigate("Services")
  }, "Book a systems review"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate && onNavigate("Methodology")
  }, "See the methodology")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 72,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: "247",
    label: "QuickBooks files audited"
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: "3 days",
    delta: "\u221222 days",
    label: "Median close after engagement"
  }), /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    value: "12",
    label: "Systems we advise on",
    deltaTone: "neutral"
  }))), /*#__PURE__*/React.createElement("hr", {
    style: {
      ...wrap,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "88px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Services"), /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "Three ways we work"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      maxWidth: "36em",
      margin: "0 0 40px"
    }
  }, "Every engagement starts with the same question: where does your team lose time and trust in the numbers?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "Diagnose",
    title: "Systems review",
    href: "#"
  }, /*#__PURE__*/React.createElement("p", null, "A two-week audit of your accounting stack \u2014 chart of accounts, automations, integrations, and close process \u2014 with a prioritized fix list.")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "Redesign",
    title: "Cleanup & migration",
    href: "#"
  }, /*#__PURE__*/React.createElement("p", null, "We rebuild the workflow: clean historicals, restructured accounts, and a migration path if your platform no longer fits.")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "Run",
    title: "Monthly advisory",
    href: "#"
  }, /*#__PURE__*/React.createElement("p", null, "Ongoing oversight of your close, your tooling, and your team's process \u2014 so the system keeps working as you grow.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface)",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "88px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Methodology"), /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "The month-end close, restructured"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      maxWidth: "36em",
      margin: "0 0 40px"
    }
  }, "The fastest closes we've measured share one structural choice: reconciliation happens weekly, so month-end reviews exceptions instead of everything."), /*#__PURE__*/React.createElement(__ds_scope.ProcessFlow, {
    steps: [{
      label: "Transactions in",
      sublabel: "bank feeds + receipts"
    }, {
      label: "Weekly reconcile",
      sublabel: "cadence: 7 days",
      highlight: true
    }, {
      label: "Review",
      sublabel: "exceptions only"
    }, {
      label: "Close",
      sublabel: "day 3"
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "88px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Research"), /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "Research, not marketing"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      maxWidth: "36em",
      margin: "0 0 40px"
    }
  }, "We publish what we measure across real client files \u2014 methods, sample sizes, and all."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1.1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "Research \xB7 2026",
    title: "What a clean month-end actually looks like",
    href: "#"
  }, /*#__PURE__*/React.createElement("p", null, "247 QuickBooks files, one finding: cadence beats headcount.")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "Comparison \xB7 2026",
    title: "QuickBooks, Xero, or NetSuite in 2026",
    href: "#"
  }, /*#__PURE__*/React.createElement("p", null, "Where each platform actually wins, by company profile.")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BarChart, {
    caption: "Median days to close, by reconciliation cadence (n = 247)",
    unit: " days",
    data: [{
      label: "Weekly reconcile",
      value: 3.1,
      highlight: true
    }, {
      label: "Biweekly",
      value: 6.8
    }, {
      label: "Monthly",
      value: 13.0
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "88px var(--container-pad)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--paper-on-ink)",
      fontSize: "var(--text-4xl)",
      margin: "0 auto 16px",
      maxWidth: "18em"
    }
  }, "Stop checking numbers you should be able to trust."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted-on-ink)",
      margin: "0 0 32px"
    }
  }, "A systems review takes two weeks. The fix list is yours either way."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 48,
      padding: "0 24px",
      background: "var(--paper-on-ink)",
      color: "var(--ink-900)",
      borderRadius: "var(--radius-sm)",
      fontWeight: 500,
      fontSize: "1rem",
      textDecoration: "none"
    }
  }, "Book a systems review"))), /*#__PURE__*/React.createElement(__ds_scope.Footer, null));
}
Object.assign(__ds_scope, { HomeScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 var(--container-pad)"
};
function ServicesScreen({
  onNavigate
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Services",
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Navbar, {
    active: "Services",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "80px var(--container-pad) 64px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "tb-eyebrow",
    style: {
      margin: "0 0 14px"
    }
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-5xl)",
      maxWidth: "16em",
      margin: "0 0 20px"
    }
  }, "Built around your systems, not our software."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-secondary)",
      maxWidth: "32em",
      margin: 0
    }
  }, "We advise on twelve accounting, payroll, and operations platforms. The recommendation is whatever fits your business \u2014 we hold no reseller incentives.")), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "0 var(--container-pad) 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "2 weeks \xB7 fixed fee",
    title: "Systems review"
  }, /*#__PURE__*/React.createElement("p", null, "Full audit of your accounting stack with a prioritized, costed fix list. Yours to implement with anyone.")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "4\u201310 weeks",
    title: "Cleanup & migration"
  }, /*#__PURE__*/React.createElement("p", null, "Historical cleanup, chart-of-accounts redesign, automation setup, and platform migration when the data says move.")), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    eyebrow: "Ongoing",
    title: "Monthly advisory"
  }, /*#__PURE__*/React.createElement("p", null, "We run your close process reviews, watch your tooling, and train your team as the business grows.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface)",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "80px var(--container-pad)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 24px"
    }
  }, "Where each platform wins"), /*#__PURE__*/React.createElement(__ds_scope.ComparisonGrid, {
    options: ["QBO", "Xero", "NetSuite"],
    caption: "Mid-market capability snapshot (TechBrot assessment, 2026).",
    criteria: [{
      label: "Multi-location inventory",
      values: [1, 1, 2]
    }, {
      label: "Native payroll",
      values: [2, 1, 0]
    }, {
      label: "Ecommerce integrations",
      values: [2, 2, 1]
    }, {
      label: "Audit-grade controls",
      values: [1, 1, 2]
    }, {
      label: "Starting price / mo",
      values: ["$35", "$20", "$1,250"]
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 24px"
    }
  }, "A first-pass decision"), /*#__PURE__*/React.createElement(__ds_scope.DecisionTree, {
    caption: "Simplified \u2014 the review replaces this with your actual constraints.",
    root: {
      label: "Inventory across\nmultiple locations?",
      yes: {
        label: "Revenue > $25M?",
        yes: {
          label: "NetSuite tier"
        },
        no: {
          label: "QBO Advanced"
        }
      },
      no: {
        label: "QBO Plus / Xero"
      }
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "88px var(--container-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 8px"
    }
  }, "Start with a systems review"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: "0 0 32px"
    }
  }, "Tell us where the close hurts. We reply within one business day."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--positive-100)",
      border: "1px solid var(--positive-600)",
      borderRadius: "var(--radius-md)",
      padding: "16px 20px",
      color: "var(--positive-700)",
      fontWeight: 500
    }
  }, "Thanks \u2014 your note is in. We'll reply within one business day.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    htmlFor: "svc-name"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "svc-name",
    placeholder: "Your name",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Work email",
    htmlFor: "svc-email"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "svc-email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }))), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Accounting system",
    htmlFor: "svc-sys"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "svc-sys",
    options: ["QuickBooks Online", "QuickBooks Desktop", "Xero", "NetSuite", "Sage Intacct", "Other / not sure"]
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "What hurts",
    hint: "Optional \u2014 a sentence is plenty.",
    htmlFor: "svc-msg"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "svc-msg",
    multiline: true,
    placeholder: "Month-end takes three weeks and nobody trusts the AR aging\u2026"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Request the review"))))), /*#__PURE__*/React.createElement(__ds_scope.Footer, null));
}
Object.assign(__ds_scope, { ServicesScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.ComparisonGrid = __ds_scope.ComparisonGrid;

__ds_ns.DecisionTree = __ds_scope.DecisionTree;

__ds_ns.ProcessFlow = __ds_scope.ProcessFlow;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.ArticleScreen = __ds_scope.ArticleScreen;

__ds_ns.HomeScreen = __ds_scope.HomeScreen;

__ds_ns.ServicesScreen = __ds_scope.ServicesScreen;

})();

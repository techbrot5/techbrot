/* @ds-bundle: {"format":3,"namespace":"TechBrotDesignSystem_cac950","components":[{"name":"AiSummary","sourcePath":"components/content/AiSummary.jsx"},{"name":"BuyerCard","sourcePath":"components/content/BuyerCard.jsx"},{"name":"BylineBlock","sourcePath":"components/content/BylineBlock.jsx"},{"name":"CallBand","sourcePath":"components/content/CallBand.jsx"},{"name":"ChecksList","sourcePath":"components/content/ChecksList.jsx"},{"name":"DisclosureBanner","sourcePath":"components/content/DisclosureBanner.jsx"},{"name":"ErrorBadge","sourcePath":"components/content/ErrorBadge.jsx"},{"name":"FaqAccordion","sourcePath":"components/content/FaqAccordion.jsx"},{"name":"FixSteps","sourcePath":"components/content/FixSteps.jsx"},{"name":"GuideTOC","sourcePath":"components/content/GuideTOC.jsx"},{"name":"LeadMagnet","sourcePath":"components/content/LeadMagnet.jsx"},{"name":"ProofStrip","sourcePath":"components/content/ProofStrip.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"TrustRow","sourcePath":"components/content/TrustRow.jsx"},{"name":"VsTable","sourcePath":"components/content/VsTable.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"DataFigure","sourcePath":"components/ledger/DataFigure.jsx"},{"name":"DecisionTree","sourcePath":"components/ledger/DecisionTree.jsx"},{"name":"JudgmentChart","sourcePath":"components/ledger/JudgmentChart.jsx"},{"name":"LedgerMotif","sourcePath":"components/ledger/LedgerMotif.jsx"},{"name":"LedgerStack","sourcePath":"components/ledger/LedgerStack.jsx"},{"name":"ReconciliationFlow","sourcePath":"components/ledger/ReconciliationFlow.jsx"},{"name":"StateMap","sourcePath":"components/ledger/StateMap.jsx"},{"name":"TAccount","sourcePath":"components/ledger/TAccount.jsx"}],"sourceHashes":{"components/content/AiSummary.jsx":"dac5efe2dd62","components/content/BuyerCard.jsx":"6132806384bd","components/content/BylineBlock.jsx":"3a387dc83d7c","components/content/CallBand.jsx":"66c8ee26cd2b","components/content/ChecksList.jsx":"927768758d58","components/content/DisclosureBanner.jsx":"ffbf1270eece","components/content/ErrorBadge.jsx":"544dc508189b","components/content/FaqAccordion.jsx":"2d5fb412d946","components/content/FixSteps.jsx":"85a81dd8c225","components/content/GuideTOC.jsx":"5100bb51fc69","components/content/LeadMagnet.jsx":"b323c759f6ed","components/content/ProofStrip.jsx":"0b1beb08a228","components/content/PullQuote.jsx":"9bdcfc9158e9","components/content/ReviewCard.jsx":"3135dd3a10f5","components/content/TrustRow.jsx":"9eb1c6d4c3f6","components/content/VsTable.jsx":"568b5ee2b43a","components/core/Badge.jsx":"c19c129230bb","components/core/Button.jsx":"21901cd415f4","components/core/Card.jsx":"24dcfea8d579","components/core/Eyebrow.jsx":"8725654cd484","components/core/IconButton.jsx":"f665e60dde9c","components/core/Tag.jsx":"a2d837262511","components/forms/Checkbox.jsx":"d45f15d30e2b","components/forms/Field.jsx":"cfc7d1910851","components/forms/Input.jsx":"f4f981873707","components/forms/Radio.jsx":"5d07c9915fa2","components/forms/Select.jsx":"a22ffbf80a7d","components/forms/Switch.jsx":"a61a5ba69688","components/forms/Textarea.jsx":"9a62ce5e3166","components/ledger/DataFigure.jsx":"0ec828e87a68","components/ledger/DecisionTree.jsx":"13d2db57df02","components/ledger/JudgmentChart.jsx":"f4243d2beae8","components/ledger/LedgerMotif.jsx":"575862ba6f1a","components/ledger/LedgerStack.jsx":"84000cc401b9","components/ledger/ReconciliationFlow.jsx":"a27dccd800ba","components/ledger/StateMap.jsx":"a176bbdf9cd5","components/ledger/TAccount.jsx":"5bcff9fed21a","ui_kits/marketing-site/app.js":"bfa6d2fabea5","ui_kits/marketing-site/chrome.js":"9d9182aacca6","ui_kits/marketing-site/heroes.js":"76f63a7a4c2d","ui_kits/marketing-site/icons.js":"90344b12fa5b","ui_kits/marketing-site/pages.js":"ddc18e1bfb0e","uploads/site.min.css.11ty.js":"9ea26bf5fafe"},"inlinedExternals":[],"unexposedExports":[{"name":"useFieldId","sourcePath":"components/forms/Field.jsx"}]} */

(() => {

const __ds_ns = (window.TechBrotDesignSystem_cac950 = window.TechBrotDesignSystem_cac950 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AiSummary.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-ai{ font-family:var(--font-sans); background:var(--accent-soft); border:1px solid var(--accent-border);
  border-radius:var(--radius-card); padding:var(--space-6); }
.tb-ai__label{ display:inline-flex; align-items:center; gap:.45em; font-size:var(--text-xs); font-weight:var(--weight-semibold);
  text-transform:uppercase; letter-spacing:var(--tracking-eyebrow); color:var(--text-accent); margin-bottom:var(--space-3); }
.tb-ai__label svg{ width:15px; height:15px; stroke-width:var(--icon-stroke); }
.tb-ai__q{ font-size:var(--text-xl); font-weight:var(--weight-semibold); color:var(--text-strong); letter-spacing:-0.01em; line-height:1.2; }
.tb-ai__a{ font-size:var(--text-md); line-height:var(--leading-relaxed); color:var(--text-body); margin-top:var(--space-3); max-width:62ch; }
.tb-ai__points{ list-style:none; padding:0; margin:var(--space-4) 0 0; display:flex; flex-direction:column; gap:var(--space-2); }
.tb-ai__points li{ display:flex; gap:var(--space-2); align-items:flex-start; font-size:var(--text-base); color:var(--text-body); }
.tb-ai__points svg{ width:16px; height:16px; stroke-width:2.4; color:var(--accent); flex:none; margin-top:3px; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-ai-css")) {
  const s = document.createElement("style");
  s.id = "tb-ai-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * AiSummary — the speakable / AI-citation "quick answer" block. Core to the
 * citation goal — answer-shaped, structured. Marked data-speakable for engines.
 */
function AiSummary({
  label = "The quick answer",
  question,
  answer,
  points = null,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ["tb-ai", className].filter(Boolean).join(" "),
    "data-speakable": "true"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-ai__label"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 1 6 6c0 2-1 3-2 4s-1 2-1 3H9c0-1 0-2-1-3s-2-2-2-4a6 6 0 0 1 6-6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21h6"
  })), label), question && /*#__PURE__*/React.createElement("p", {
    className: "tb-ai__q"
  }, question), answer && /*#__PURE__*/React.createElement("p", {
    className: "tb-ai__a"
  }, answer), points && /*#__PURE__*/React.createElement("ul", {
    className: "tb-ai__points"
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), p))));
}
Object.assign(__ds_scope, { AiSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AiSummary.jsx", error: String((e && e.message) || e) }); }

// components/content/BuyerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-buyer{ font-family:var(--font-sans); display:flex; flex-direction:column; gap:var(--space-4);
  background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-card);
  box-shadow:var(--shadow-card); padding:var(--space-6); transition:var(--transition-control); text-decoration:none; height:100%; }
a.tb-buyer:hover{ border-color:var(--border-default); box-shadow:var(--shadow-lg); transform:translateY(-2px); text-decoration:none; }
.tb-buyer:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-buyer__ic{ width:2.75rem; height:2.75rem; border-radius:var(--radius-md); background:var(--accent-soft); color:var(--accent);
  display:inline-flex; align-items:center; justify-content:center; }
.tb-buyer__ic svg{ width:24px; height:24px; stroke-width:var(--icon-stroke); }
.tb-buyer__t{ font-size:var(--text-xl); font-weight:var(--weight-semibold); color:var(--text-strong); letter-spacing:-0.01em; }
.tb-buyer__d{ font-size:var(--text-md); color:var(--text-body); line-height:var(--leading-relaxed); }
.tb-buyer__for{ font-size:var(--text-sm); color:var(--text-muted); margin-top:auto; padding-top:var(--space-2); }
.tb-buyer__for b{ color:var(--text-body); font-weight:var(--weight-semibold); }
.tb-buyer__cta{ display:inline-flex; align-items:center; gap:.4em; font-size:var(--text-base); font-weight:var(--weight-semibold); color:var(--text-accent); margin-top:var(--space-2); }
.tb-buyer__cta svg{ width:16px; height:16px; stroke-width:var(--icon-stroke); transition:transform var(--dur-fast) var(--ease-out); }
a.tb-buyer:hover .tb-buyer__cta svg{ transform:translateX(3px); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-buyer-css")) {
  const s = document.createElement("style");
  s.id = "tb-buyer-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** BuyerCard — routing / "which is right for you" decision card. */
function BuyerCard({
  icon = null,
  title,
  description,
  forWhom = null,
  cta = null,
  href = null,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["tb-buyer", className].filter(Boolean).join(" ")
  }, href ? {
    href
  } : {}, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "tb-buyer__ic",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "tb-buyer__t"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "tb-buyer__d"
  }, description), forWhom && /*#__PURE__*/React.createElement("p", {
    className: "tb-buyer__for"
  }, /*#__PURE__*/React.createElement("b", null, "Best for"), " \xB7 ", forWhom), cta && /*#__PURE__*/React.createElement("span", {
    className: "tb-buyer__cta"
  }, cta, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))));
}
Object.assign(__ds_scope, { BuyerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BuyerCard.jsx", error: String((e && e.message) || e) }); }

// components/content/BylineBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-byline{ font-family:var(--font-sans); display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3) var(--space-5); }
.tb-byline__author{ display:flex; align-items:center; gap:var(--space-3); }
.tb-byline__mark{ width:2.25rem; height:2.25rem; border-radius:999px; background:var(--surface-ink); display:inline-flex; align-items:center; justify-content:center; flex:none; }
.tb-byline__mark img{ width:60%; height:60%; }
.tb-byline__who b{ display:block; font-size:var(--text-base); color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-byline__who span{ font-size:var(--text-sm); color:var(--text-muted); }
.tb-byline__meta{ display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-2) var(--space-4); font-size:var(--text-sm); color:var(--text-muted); }
.tb-byline__meta span{ display:inline-flex; align-items:center; gap:.4em; }
.tb-byline__meta svg{ width:14px; height:14px; stroke-width:var(--icon-stroke); }
.tb-byline__rev{ display:inline-flex; align-items:center; gap:.4em; font-size:var(--text-sm); font-weight:var(--weight-medium); color:var(--positive); }
.tb-byline__rev svg{ width:15px; height:15px; stroke-width:2; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-byline-css")) {
  const s = document.createElement("style");
  s.id = "tb-byline-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * BylineBlock + meta-reviewed — author = the FIRM / ProAdvisor team (never a
 * person's name in visible content), date, reading time, and a reviewed-by line.
 */
function BylineBlock({
  author = "TechBrot ProAdvisor team",
  role = "Certified QuickBooks ProAdvisors",
  date = null,
  readingTime = null,
  reviewedBy = "Reviewed by a Certified ProAdvisor",
  markSrc = null,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-byline", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-byline__author"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-byline__mark",
    "aria-hidden": "true"
  }, markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 600
    }
  }, "T")), /*#__PURE__*/React.createElement("span", {
    className: "tb-byline__who"
  }, /*#__PURE__*/React.createElement("b", null, author), role && /*#__PURE__*/React.createElement("span", null, role))), /*#__PURE__*/React.createElement("div", {
    className: "tb-byline__meta"
  }, date && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 2v4M16 2v4"
  })), date), readingTime && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })), readingTime)), reviewedBy && /*#__PURE__*/React.createElement("span", {
    className: "tb-byline__rev"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })), reviewedBy));
}
Object.assign(__ds_scope, { BylineBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BylineBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/CallBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-callband{
  font-family:var(--font-sans); border-radius:var(--radius-panel); padding:clamp(1.5rem, 1rem + 3vw, 3rem);
  background:var(--surface-ink); color:var(--text-on-ink); position:relative; overflow:hidden;
}
.tb-callband--light{ background:var(--accent-soft); color:var(--text-body); border:1px solid var(--accent-border); }
.tb-callband__inner{ display:grid; gap:var(--space-6); grid-template-columns:1.2fr 1fr; align-items:center; max-width:var(--width-content); margin:0 auto; }
.tb-callband__eyebrow{ font-size:var(--text-sm); font-weight:var(--weight-semibold); letter-spacing:var(--tracking-eyebrow); text-transform:uppercase; color:var(--accent-on-ink); margin-bottom:var(--space-3); }
.tb-callband--light .tb-callband__eyebrow{ color:var(--text-accent); }
.tb-callband__title{ font-size:var(--text-3xl); font-weight:var(--weight-semibold); letter-spacing:-0.02em; line-height:1.1; color:#fff; }
.tb-callband--light .tb-callband__title{ color:var(--text-strong); }
.tb-callband__what{ font-size:var(--text-md); line-height:var(--leading-relaxed); color:var(--text-on-ink); margin-top:var(--space-4); max-width:42ch; }
.tb-callband--light .tb-callband__what{ color:var(--text-body); }
.tb-callband__qual{ font-size:var(--text-sm); color:var(--text-on-ink-mut); margin-top:var(--space-3); max-width:46ch; }
.tb-callband--light .tb-callband__qual{ color:var(--text-muted); }
.tb-callband__action{ display:flex; flex-direction:column; gap:var(--space-4); }
.tb-callband__phone{
  display:flex; align-items:center; gap:var(--space-3); text-decoration:none; color:#fff;
  background:var(--accent); border-radius:var(--radius-lg); padding:var(--space-5) var(--space-6);
  transition:var(--transition-control); box-shadow:var(--shadow-md);
}
.tb-callband__phone:hover{ background:var(--accent-hover); text-decoration:none; }
.tb-callband__phone:active{ transform:translateY(1px); }
.tb-callband__phone svg{ width:26px; height:26px; stroke-width:var(--icon-stroke); flex:none; }
.tb-callband__num{ display:flex; flex-direction:column; line-height:1.15; }
.tb-callband__num small{ font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.08em; opacity:.85; }
.tb-callband__num b{ font-family:var(--font-mono); font-size:var(--text-2xl); font-weight:var(--weight-semibold); letter-spacing:-0.01em; }
.tb-callband__resp{ font-size:var(--text-sm); color:var(--text-on-ink-mut); display:flex; align-items:center; gap:.45em; }
.tb-callband--light .tb-callband__resp{ color:var(--text-muted); }
.tb-callband__resp svg{ width:15px; height:15px; stroke-width:var(--icon-stroke); }
.tb-callband__trust{ display:flex; flex-wrap:wrap; gap:var(--space-2) var(--space-4); margin-top:var(--space-6); padding-top:var(--space-5); border-top:1px solid var(--border-ink); }
.tb-callband--light .tb-callband__trust{ border-top-color:var(--accent-border); }
.tb-callband__trust span{ font-size:var(--text-sm); color:var(--text-on-ink-mut); display:flex; align-items:center; gap:.4em; }
.tb-callband--light .tb-callband__trust span{ color:var(--text-muted); }
.tb-callband__trust svg{ width:15px; height:15px; stroke-width:2; color:var(--positive); }
@media (max-width:720px){ .tb-callband__inner{ grid-template-columns:1fr; } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-callband-css")) {
  const s = document.createElement("style");
  s.id = "tb-callband-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Check = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/**
 * CallBand — the PRIMARY conversion block (replaces forms on money pages).
 * Large tap-to-call number, a "what happens when you call" line, response
 * expectation, and a real trust micro-row. The default action is ALWAYS a call.
 */
function CallBand({
  eyebrow = "Talk to a ProAdvisor",
  title = "Speak to a Certified ProAdvisor",
  whatHappens = "Call and a Certified QuickBooks ProAdvisor — not a call center — talks through your situation and the fixed-fee scope before any work begins.",
  qualifier = null,
  phone = "tel:+10000000000",
  phoneDisplay = "(000) 000-0000",
  phoneLabel = "Call now",
  response = "Typical response the same business day",
  trust = ["Independent firm", "Certified QuickBooks ProAdvisor", "Fixed-fee scope first"],
  variant = "ink",
  onCall = null,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ["tb-callband", variant === "light" ? "tb-callband--light" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-callband__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tb-callband__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "tb-callband__title"
  }, title), whatHappens && /*#__PURE__*/React.createElement("p", {
    className: "tb-callband__what"
  }, whatHappens), qualifier && /*#__PURE__*/React.createElement("p", {
    className: "tb-callband__qual"
  }, qualifier), trust && trust.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tb-callband__trust"
  }, trust.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, Check, t)))), /*#__PURE__*/React.createElement("div", {
    className: "tb-callband__action"
  }, /*#__PURE__*/React.createElement("a", {
    className: "tb-callband__phone",
    href: phone,
    onClick: onCall,
    "data-ga": "phone_click"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5a2 2 0 0 1 2-2h2.6a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.3 1L8 11a14 14 0 0 0 5 5l1.2-1.3a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "tb-callband__num"
  }, /*#__PURE__*/React.createElement("small", null, phoneLabel), /*#__PURE__*/React.createElement("b", null, phoneDisplay))), response && /*#__PURE__*/React.createElement("span", {
    className: "tb-callband__resp"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })), response))));
}
Object.assign(__ds_scope, { CallBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CallBand.jsx", error: String((e && e.message) || e) }); }

// components/content/ChecksList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-checks{ font-family:var(--font-sans); list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:var(--space-3); }
.tb-checks--two{ display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:var(--space-3) var(--space-6); }
.tb-checks li{ display:flex; gap:var(--space-3); align-items:flex-start; font-size:var(--text-md); color:var(--text-body); line-height:var(--leading-snug); }
.tb-checks__ic{ flex:none; width:1.4rem; height:1.4rem; border-radius:999px; display:inline-flex; align-items:center; justify-content:center; margin-top:1px; background:var(--positive-soft); color:var(--positive); }
.tb-checks__ic svg{ width:14px; height:14px; stroke-width:2.6; }
.tb-checks--plain .tb-checks__ic{ background:transparent; color:var(--accent); }
.tb-checks li b{ color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-checks--x .tb-checks__ic{ background:var(--surface-inset); color:var(--text-faint); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-checks-css")) {
  const s = document.createElement("style");
  s.id = "tb-checks-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Check = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/** ChecksList — a scannable list of included items / scope. `items`: strings or {text, note}. */
function ChecksList({
  items = [],
  columns = 1,
  plain = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: ["tb-checks", columns === 2 ? "tb-checks--two" : "", plain ? "tb-checks--plain" : "", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => {
    const text = typeof it === "string" ? it : it.text;
    const note = typeof it === "string" ? null : it.note;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "tb-checks__ic",
      "aria-hidden": "true"
    }, Check), /*#__PURE__*/React.createElement("span", null, note ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, text), " \u2014 ", note) : text));
  }));
}
Object.assign(__ds_scope, { ChecksList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChecksList.jsx", error: String((e && e.message) || e) }); }

// components/content/DisclosureBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-disclosure{ font-family:var(--font-sans); display:flex; gap:var(--space-3); align-items:flex-start;
  background:var(--surface-subtle); border:1px solid var(--border-subtle); border-radius:var(--radius-md);
  padding:var(--space-4) var(--space-5); }
.tb-disclosure--caution{ background:var(--caution-soft); border-color:var(--caution-border); }
.tb-disclosure__ic{ flex:none; margin-top:2px; color:var(--text-muted); }
.tb-disclosure--caution .tb-disclosure__ic{ color:var(--caution); }
.tb-disclosure__ic svg{ width:18px; height:18px; stroke-width:var(--icon-stroke); }
.tb-disclosure__body{ font-size:var(--text-sm); line-height:var(--leading-relaxed); color:var(--text-body); }
.tb-disclosure__body b{ color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-disclosure__body a{ font-weight:var(--weight-semibold); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-disclosure-css")) {
  const s = document.createElement("style");
  s.id = "tb-disclosure-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * DisclosureBanner — the honest-triage / independence banner. Renders above the
 * fold on triage pages, before any call CTA. States we are independent / not
 * Intuit and routes Intuit billing/account issues to Intuit. COMPLIANCE-CRITICAL.
 */
function DisclosureBanner({
  tone = "neutral",
  icon = null,
  children,
  className = "",
  ...rest
}) {
  const Ic = icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-disclosure", tone === "caution" ? "tb-disclosure--caution" : "", className].filter(Boolean).join(" "),
    role: "note"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tb-disclosure__ic",
    "aria-hidden": "true"
  }, Ic), /*#__PURE__*/React.createElement("p", {
    className: "tb-disclosure__body"
  }, children));
}
Object.assign(__ds_scope, { DisclosureBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DisclosureBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/ErrorBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-errbadge{ font-family:var(--font-mono); display:inline-flex; align-items:center; gap:.6em;
  background:var(--negative-soft); color:var(--negative); border:1px solid var(--negative-border);
  border-radius:var(--radius-pill); padding:.4em .9em; font-size:var(--text-sm); font-weight:var(--weight-semibold);
  letter-spacing:.02em; }
.tb-errbadge--caution{ background:var(--caution-soft); color:var(--caution); border-color:var(--caution-border); }
.tb-errbadge--neutral{ background:var(--surface-inset); color:var(--text-body); border-color:var(--border-subtle); }
.tb-errbadge__code{ font-variant-numeric:tabular-nums; }
.tb-errbadge svg{ width:15px; height:15px; stroke-width:2.2; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-errbadge-css")) {
  const s = document.createElement("style");
  s.id = "tb-errbadge-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** ErrorBadge — labels an error code/symptom on problem & utility pages. */
function ErrorBadge({
  code,
  label = null,
  tone = "negative",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["tb-errbadge", tone !== "negative" ? `tb-errbadge--${tone}` : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "tb-errbadge__code"
  }, code), label && /*#__PURE__*/React.createElement("span", null, "\xB7 ", label));
}
Object.assign(__ds_scope, { ErrorBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ErrorBadge.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqAccordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-faq{ font-family:var(--font-sans); border-top:1px solid var(--border-subtle); }
.tb-faq__item{ border-bottom:1px solid var(--border-subtle); }
.tb-faq__item > summary{
  list-style:none; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:var(--space-4);
  padding:var(--space-5) var(--space-1); font-size:var(--text-lg); font-weight:var(--weight-semibold);
  color:var(--text-strong); letter-spacing:-0.01em; transition:color var(--dur-fast); min-height:var(--tap-min);
}
.tb-faq__item > summary::-webkit-details-marker{ display:none; }
.tb-faq__item > summary:hover{ color:var(--text-accent); }
.tb-faq__item > summary:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:3px; border-radius:var(--radius-xs); }
.tb-faq__chev{ flex:none; width:1.4rem; height:1.4rem; color:var(--text-muted); transition:transform var(--dur) var(--ease-out); }
.tb-faq__chev svg{ width:100%; height:100%; stroke-width:var(--icon-stroke); }
.tb-faq__item[open] .tb-faq__chev{ transform:rotate(180deg); color:var(--accent); }
.tb-faq__panel{ display:grid; grid-template-rows:1fr; }
.tb-faq__panel > div{ overflow:hidden; }
.tb-faq__answer{ padding:0 var(--space-1) var(--space-6); font-size:var(--text-md); line-height:var(--leading-relaxed); color:var(--text-body); max-width:64ch; }
@media (prefers-reduced-motion: no-preference){
  .tb-faq__item:not([open]) .tb-faq__panel{ grid-template-rows:0fr; }
  .tb-faq__panel{ transition:grid-template-rows var(--dur-slow) var(--ease-out); }
}
@media (prefers-reduced-motion: reduce){
  .tb-faq__item:not([open]) .tb-faq__panel{ display:none; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("tb-faq-css")) {
  const s = document.createElement("style");
  s.id = "tb-faq-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * FaqAccordion — collapsible, accessible Q&A built on native <details>
 * (works with JS off). Optional FAQPage JSON-LD preserves the citation schema.
 * `items`: [{ q, a }]. Pass `schema` to emit the JSON-LD.
 */
function FaqAccordion({
  items = [],
  defaultOpen = 0,
  schema = false,
  className = "",
  ...rest
}) {
  const ld = schema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(it => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof it.a === "string" ? it.a : ""
      }
    }))
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-faq", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    className: "tb-faq__item",
    key: i,
    open: i === defaultOpen,
    name: "tb-faq"
  }, /*#__PURE__*/React.createElement("summary", null, it.q, /*#__PURE__*/React.createElement("span", {
    className: "tb-faq__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tb-faq__panel"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tb-faq__answer"
  }, it.a))))), ld && /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(ld)
    }
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/content/FixSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-fix{ font-family:var(--font-sans); display:flex; flex-direction:column; gap:0; counter-reset:tb-fix; }
.tb-fix__step{ display:grid; grid-template-columns:auto 1fr; gap:var(--space-4); padding-bottom:var(--space-6); position:relative; }
.tb-fix__step:last-child{ padding-bottom:0; }
.tb-fix__num{ position:relative; z-index:1; flex:none; width:2.5rem; height:2.5rem; border-radius:999px; background:var(--surface-card); border:1.5px solid var(--accent-border);
  color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-weight:600; font-size:var(--text-md); }
.tb-fix__step:not(:last-child)::before{ content:""; position:absolute; left:1.25rem; top:2.5rem; bottom:0; width:1.5px; background:var(--border-default); }
.tb-fix__step--done .tb-fix__num{ background:var(--accent); border-color:var(--accent); color:#fff; }
.tb-fix__step--done .tb-fix__num svg{ width:18px; height:18px; stroke-width:2.6; }
.tb-fix__body{ padding-top:.35rem; }
.tb-fix__t{ font-size:var(--text-lg); font-weight:var(--weight-semibold); color:var(--text-strong); letter-spacing:-0.01em; }
.tb-fix__d{ font-size:var(--text-md); color:var(--text-body); line-height:var(--leading-relaxed); margin-top:var(--space-2); max-width:56ch; }
.tb-fix__meta{ font-family:var(--font-mono); font-size:var(--text-xs); color:var(--text-muted); text-transform:uppercase; letter-spacing:.06em; margin-top:var(--space-2); }
@media (prefers-reduced-motion: no-preference){
  .tb-fix[data-animate="true"] .tb-fix__step{ opacity:0; transform:translateY(8px); }
  .tb-fix[data-animate="true"].is-in .tb-fix__step{ opacity:1; transform:none; transition:opacity var(--dur-slow) var(--ease-out) calc(var(--i,0)*100ms), transform var(--dur-slow) var(--ease-out) calc(var(--i,0)*100ms); }
}
`;
if (typeof document !== "undefined" && !document.getElementById("tb-fix-css")) {
  const s = document.createElement("style");
  s.id = "tb-fix-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * FixSteps / process-diagram — the numbered how-it-works flow (HowTo schema).
 * RHYTHM RULE: only ONE numbered system per page. `steps`: [{title, detail, meta}].
 */
function FixSteps({
  steps = [],
  done = -1,
  animate = false,
  schema = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.2
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const ld = schema ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How it works",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.detail || ""
    }))
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ["tb-fix", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: ["tb-fix__step", i <= done ? "tb-fix__step--done" : ""].join(" "),
    key: i,
    style: {
      "--i": i
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-fix__num"
  }, i <= done ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : i + 1), /*#__PURE__*/React.createElement("div", {
    className: "tb-fix__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-fix__t"
  }, s.title), s.detail && /*#__PURE__*/React.createElement("p", {
    className: "tb-fix__d"
  }, s.detail), s.meta && /*#__PURE__*/React.createElement("div", {
    className: "tb-fix__meta"
  }, s.meta)))), ld && /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(ld)
    }
  }));
}
Object.assign(__ds_scope, { FixSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FixSteps.jsx", error: String((e && e.message) || e) }); }

// components/content/GuideTOC.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-toc{ font-family:var(--font-sans); position:sticky; top:var(--space-8); align-self:start; }
.tb-toc__label{ font-size:var(--text-xs); font-weight:var(--weight-semibold); text-transform:uppercase; letter-spacing:var(--tracking-eyebrow); color:var(--text-muted); margin-bottom:var(--space-3); }
.tb-toc__list{ list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:1px; border-left:1.5px solid var(--border-subtle); }
.tb-toc__list a{ display:block; padding:var(--space-2) var(--space-4); font-size:var(--text-sm); color:var(--text-muted); text-decoration:none; margin-left:-1.5px; border-left:1.5px solid transparent; transition:color var(--dur-fast), border-color var(--dur-fast); line-height:1.35; }
.tb-toc__list a:hover{ color:var(--text-body); }
.tb-toc__list a[aria-current="true"]{ color:var(--text-accent); border-left-color:var(--accent); font-weight:var(--weight-semibold); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-toc-css")) {
  const s = document.createElement("style");
  s.id = "tb-toc-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * GuideTOC — the sticky in-page table of contents (the t-guide local navbar).
 * `items`: [{id, label}]. Optional scroll-spy via `spy` (IntersectionObserver).
 */
function GuideTOC({
  items = [],
  label = "On this page",
  activeId = null,
  spy = false,
  className = "",
  ...rest
}) {
  const [current, setCurrent] = React.useState(activeId || items[0] && items[0].id);
  React.useEffect(() => {
    if (!spy) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setCurrent(e.target.id);
      });
    }, {
      rootMargin: "-20% 0px -70% 0px"
    });
    items.forEach(it => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [spy, items]);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["tb-toc", className].filter(Boolean).join(" "),
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-toc__label"
  }, label), /*#__PURE__*/React.createElement("ul", {
    className: "tb-toc__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${it.id}`,
    "aria-current": (activeId || current) === it.id ? "true" : undefined
  }, it.label)))));
}
Object.assign(__ds_scope, { GuideTOC });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GuideTOC.jsx", error: String((e && e.message) || e) }); }

// components/content/LeadMagnet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-lead{ font-family:var(--font-sans); display:grid; grid-template-columns:1fr auto; gap:var(--space-6); align-items:center;
  background:var(--surface-card); border:1px solid var(--accent-border); border-radius:var(--radius-panel);
  padding:clamp(1.5rem, 1rem + 2vw, 2.25rem); box-shadow:var(--shadow-card); }
.tb-lead--ink{ background:var(--surface-ink); border-color:var(--border-ink); }
.tb-lead__eyebrow{ font-size:var(--text-sm); font-weight:var(--weight-semibold); text-transform:uppercase; letter-spacing:var(--tracking-eyebrow); color:var(--text-accent); margin-bottom:var(--space-2); }
.tb-lead--ink .tb-lead__eyebrow{ color:var(--accent-on-ink); }
.tb-lead__t{ font-size:var(--text-2xl); font-weight:var(--weight-semibold); color:var(--text-strong); letter-spacing:-0.015em; line-height:1.15; }
.tb-lead--ink .tb-lead__t{ color:#fff; }
.tb-lead__tag{ font-size:var(--text-md); color:var(--text-body); line-height:var(--leading-relaxed); margin-top:var(--space-2); max-width:48ch; }
.tb-lead--ink .tb-lead__tag{ color:var(--text-on-ink); }
.tb-lead__cta{ display:inline-flex; align-items:center; gap:.5em; white-space:nowrap; text-decoration:none;
  background:var(--accent); color:#fff; font-weight:var(--weight-semibold); border-radius:var(--radius-control);
  padding:0 var(--space-6); height:var(--control-lg); transition:var(--transition-control); box-shadow:var(--shadow-sm); }
.tb-lead__cta:hover{ background:var(--accent-hover); text-decoration:none; }
.tb-lead__cta:active{ transform:translateY(1px); }
.tb-lead__cta svg{ width:18px; height:18px; stroke-width:var(--icon-stroke); }
@media (max-width:680px){ .tb-lead{ grid-template-columns:1fr; } .tb-lead__cta{ width:100%; justify-content:center; } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-lead-css")) {
  const s = document.createElement("style");
  s.id = "tb-lead-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * LeadMagnet — the MID-BODY offer for long pages (distinct from the foot CallBand).
 * Default = the free QuickBooks file review (routes to /file-review/). `variant="call"`
 * swaps to a call prompt. No on-page form — it routes or calls.
 */
function LeadMagnet({
  variant = "review",
  eyebrow = "No-cost, no-obligation",
  title = "Get a free QuickBooks file review",
  tagline = "Send us your file and a Certified ProAdvisor tells you exactly what's off — and what it takes to fix it. No charge, no commitment.",
  cta = "Start a free file review",
  href = "/file-review/",
  ink = false,
  icon = null,
  className = "",
  onClick = null,
  ...rest
}) {
  const isCall = variant === "call";
  const Ic = icon || (isCall ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5a2 2 0 0 1 2-2h2.6a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.3 1L8 11a14 14 0 0 0 5 5l1.2-1.3a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 15 2 2 4-4"
  })));
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ["tb-lead", ink ? "tb-lead--ink" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tb-lead__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "tb-lead__t"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "tb-lead__tag"
  }, tagline)), /*#__PURE__*/React.createElement("a", {
    className: "tb-lead__cta",
    href: href,
    onClick: onClick,
    "data-ga": isCall ? "phone_click" : "file_review_click"
  }, Ic, cta));
}
Object.assign(__ds_scope, { LeadMagnet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LeadMagnet.jsx", error: String((e && e.message) || e) }); }

// components/content/ProofStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-proof{ font-family:var(--font-sans); display:grid; gap:var(--space-4); grid-template-columns:repeat(auto-fit,minmax(13rem,1fr));
  background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-card); box-shadow:var(--shadow-card); padding:var(--space-6); }
.tb-proof--dark{ background:var(--surface-ink); border-color:var(--border-ink); box-shadow:none; }
.tb-proof__item{ display:flex; gap:var(--space-3); align-items:flex-start; }
.tb-proof__ic{ flex:none; width:2.25rem; height:2.25rem; border-radius:var(--radius-md); display:inline-flex; align-items:center; justify-content:center;
  background:var(--accent-soft); color:var(--accent); }
.tb-proof--dark .tb-proof__ic{ background:rgba(255,255,255,.08); color:var(--accent-on-ink); }
.tb-proof__ic svg{ width:20px; height:20px; stroke-width:var(--icon-stroke); }
.tb-proof__t{ font-size:var(--text-base); font-weight:var(--weight-semibold); color:var(--text-strong); line-height:1.25; }
.tb-proof--dark .tb-proof__t{ color:#fff; }
.tb-proof__s{ font-size:var(--text-sm); color:var(--text-muted); margin-top:2px; line-height:1.35; }
.tb-proof--dark .tb-proof__s{ color:var(--text-on-ink-mut); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-proof-css")) {
  const s = document.createElement("style");
  s.id = "tb-proof-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * ProofStrip — real credential signals (independent firm, Certified ProAdvisor,
 * fixed-fee). Real signals ONLY — never fabricated counts/stats. `items`: [{icon,title,sub}].
 */
function ProofStrip({
  items = [],
  variant = "default",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-proof", variant === "dark" ? "tb-proof--dark" : "", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "tb-proof__item",
    key: i
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "tb-proof__ic",
    "aria-hidden": "true"
  }, it.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tb-proof__t"
  }, it.title), it.sub && /*#__PURE__*/React.createElement("div", {
    className: "tb-proof__s"
  }, it.sub)))));
}
Object.assign(__ds_scope, { ProofStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProofStrip.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-pull{ font-family:var(--font-sans); margin:0; padding:var(--space-2) 0; max-width:42rem; }
.tb-pull__q{ font-size:clamp(1.5rem, 1rem + 2vw, 2.25rem); font-weight:var(--weight-medium); line-height:1.25; letter-spacing:-0.02em; color:var(--text-strong); text-wrap:balance; }
.tb-pull__q .tb-pull__accent{ color:var(--text-accent); }
.tb-pull__bar{ width:2.5rem; height:3px; background:var(--accent); border-radius:999px; margin-bottom:var(--space-5); }
.tb-pull__cite{ display:block; margin-top:var(--space-4); font-size:var(--text-sm); color:var(--text-muted); font-style:normal; }
.tb-pull__cite b{ color:var(--text-body); font-weight:var(--weight-semibold); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-pull-css")) {
  const s = document.createElement("style");
  s.id = "tb-pull-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** PullQuote — an editorial rhythm device. Pass `cite` for attribution. */
function PullQuote({
  children,
  cite = null,
  author = null,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ["tb-pull", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-pull__bar",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "tb-pull__q"
  }, children), (cite || author) && /*#__PURE__*/React.createElement("figcaption", {
    className: "tb-pull__cite"
  }, author && /*#__PURE__*/React.createElement("b", null, author), author && cite ? " · " : "", cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-review{ font-family:var(--font-sans); background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-card); box-shadow:var(--shadow-card); padding:var(--space-6); display:flex; flex-direction:column; gap:var(--space-4); max-width:30rem; }
.tb-review__stars{ display:flex; gap:2px; color:var(--caution); }
.tb-review__stars svg{ width:18px; height:18px; }
.tb-review__quote{ font-size:var(--text-lg); line-height:var(--leading-snug); color:var(--text-strong); letter-spacing:-0.01em; }
.tb-review__quote::before{ content:"“"; }
.tb-review__quote::after{ content:"”"; }
.tb-review__foot{ display:flex; align-items:center; justify-content:space-between; gap:var(--space-3); margin-top:auto; padding-top:var(--space-4); border-top:1px solid var(--border-subtle); }
.tb-review__who b{ display:block; font-size:var(--text-base); color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-review__who span{ font-size:var(--text-sm); color:var(--text-muted); }
.tb-review__src{ display:inline-flex; align-items:center; gap:.4em; font-size:var(--text-sm); color:var(--text-muted); font-weight:var(--weight-medium); }
.tb-review__src svg{ width:15px; height:15px; stroke-width:2; color:var(--positive); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-review-css")) {
  const s = document.createElement("style");
  s.id = "tb-review-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Star = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  stroke: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17.8 5.9 20.6 7.3 14l-5-4.6 6.8-.7L12 2Z"
}));

/**
 * ReviewCard — a single REAL review (the 2 verified Clutch reviews only).
 * NEVER fabricate. No AggregateRating until 5+ reviews exist.
 */
function ReviewCard({
  quote,
  author,
  role,
  rating = 5,
  source = "Verified on Clutch",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ["tb-review", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-review__stars",
    "aria-label": `${rating} out of 5`
  }, Array.from({
    length: rating
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true"
  }, Star))), /*#__PURE__*/React.createElement("blockquote", {
    className: "tb-review__quote"
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "tb-review__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-review__who"
  }, /*#__PURE__*/React.createElement("b", null, author), role && /*#__PURE__*/React.createElement("span", null, role)), source && /*#__PURE__*/React.createElement("span", {
    className: "tb-review__src"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 11 3 3L22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  })), source)));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TrustRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-trustrow{ font-family:var(--font-sans); display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-2) var(--space-4); }
.tb-trustrow__item{ display:inline-flex; align-items:center; gap:.45em; font-size:var(--text-sm); color:var(--text-muted); font-weight:var(--weight-medium); }
.tb-trustrow__item svg{ width:15px; height:15px; stroke-width:2; color:var(--positive); flex:none; }
.tb-trustrow--onInk .tb-trustrow__item{ color:var(--text-on-ink-mut); }
.tb-trustrow__sep{ width:3px; height:3px; border-radius:999px; background:var(--border-strong); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-trustrow-css")) {
  const s = document.createElement("style");
  s.id = "tb-trustrow-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Check = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/** TrustRow — compact inline micro-signals (a checked list of real credentials). */
function TrustRow({
  items = [],
  checks = true,
  onInk = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-trustrow", onInk ? "tb-trustrow--onInk" : "", className].filter(Boolean).join(" ")
  }, rest), items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    className: "tb-trustrow__item",
    key: i
  }, checks && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, Check), t)));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/content/VsTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-vs{ font-family:var(--font-sans); }
.tb-vs__scroll{ overflow-x:auto; border:1px solid var(--border-subtle); border-radius:var(--radius-card); background:var(--surface-card); box-shadow:var(--shadow-card); }
.tb-vs table{ width:100%; border-collapse:collapse; min-width:34rem; }
.tb-vs th, .tb-vs td{ text-align:left; padding:var(--space-4) var(--space-5); border-bottom:1px solid var(--border-subtle); }
.tb-vs thead th{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-muted); vertical-align:bottom; }
.tb-vs thead th.tb-vs__hl{ color:var(--text-accent); }
.tb-vs__colname{ display:flex; align-items:center; gap:.5em; font-size:var(--text-md); color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-vs thead th.tb-vs__hl .tb-vs__colname{ color:var(--text-accent); }
.tb-vs__hl{ background:var(--accent-soft); }
.tb-vs tbody th{ font-weight:var(--weight-medium); color:var(--text-body); font-size:var(--text-base); }
.tb-vs td{ font-size:var(--text-base); color:var(--text-body); }
.tb-vs td.tb-vs__c{ text-align:center; }
.tb-vs__yes, .tb-vs__no, .tb-vs__part{ display:inline-flex; width:1.5rem; height:1.5rem; align-items:center; justify-content:center; border-radius:999px; }
.tb-vs__yes{ background:var(--positive-soft); color:var(--positive); }
.tb-vs__no{ color:var(--text-faint); }
.tb-vs__part{ background:var(--caution-soft); color:var(--caution); }
.tb-vs__yes svg, .tb-vs__no svg, .tb-vs__part svg{ width:15px; height:15px; stroke-width:2.4; }
.tb-vs tbody tr:last-child th, .tb-vs tbody tr:last-child td{ border-bottom:none; }
.tb-vs__verdict{ display:flex; gap:var(--space-3); align-items:flex-start; margin-top:var(--space-5); padding:var(--space-5); background:var(--surface-subtle); border-radius:var(--radius-card); border:1px solid var(--border-subtle); }
.tb-vs__verdict svg{ width:20px; height:20px; stroke-width:var(--icon-stroke); color:var(--accent); flex:none; margin-top:2px; }
.tb-vs__verdict h4{ font-size:var(--text-md); margin-bottom:var(--space-1); }
.tb-vs__verdict p{ font-size:var(--text-sm); color:var(--text-muted); line-height:var(--leading-relaxed); }
.tb-vs__verdict p b{ color:var(--text-body); font-weight:var(--weight-semibold); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-vs-css")) {
  const s = document.createElement("style");
  s.id = "tb-vs-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const Yes = /*#__PURE__*/React.createElement("span", {
  className: "tb-vs__yes"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
})));
const No = /*#__PURE__*/React.createElement("span", {
  className: "tb-vs__no"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
})));
const Part = /*#__PURE__*/React.createElement("span", {
  className: "tb-vs__part"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 8v4M12 16h.01"
})));
const cell = v => v === true ? Yes : v === false ? No : v === "partial" ? Part : /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-mono)"
  }
}, v);

/**
 * VsTable — fair comparison (pricing/comparison ALWAYS uses this, never cards).
 * `columns`: [{name, highlight, icon}] · `rows`: [{label, cells:[…]}]. Cells take
 * true / false / "partial" / a string. Always pair with a fair `verdict`.
 */
function VsTable({
  columns = [],
  rows = [],
  verdict = null,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-vs", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-vs__scroll"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: c.highlight ? "tb-vs__hl tb-vs__c" : "tb-vs__c"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-vs__colname",
    style: {
      justifyContent: "center"
    }
  }, c.icon, c.name))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, /*#__PURE__*/React.createElement("th", {
    scope: "row"
  }, r.label), r.cells.map((v, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: ["tb-vs__c", columns[ci] && columns[ci].highlight ? "tb-vs__hl" : ""].join(" ")
  }, cell(v)))))))), verdict && /*#__PURE__*/React.createElement("div", {
    className: "tb-vs__verdict"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 11 3 3L22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, verdict.title || "The honest verdict"), /*#__PURE__*/React.createElement("p", null, verdict.text))));
}
Object.assign(__ds_scope, { VsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VsTable.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-badge{
  display:inline-flex; align-items:center; gap:0.4em;
  font-family:var(--font-sans); font-size:var(--text-xs); font-weight:var(--weight-semibold);
  line-height:1; padding:0.32em 0.62em; border-radius:var(--radius-sm);
  border:1px solid transparent; letter-spacing:0.005em; white-space:nowrap;
}
.tb-badge svg{ width:13px; height:13px; stroke-width:2; flex:none; }
.tb-badge--neutral{ background:var(--surface-inset); color:var(--text-body); border-color:var(--border-subtle); }
.tb-badge--accent{ background:var(--accent-soft); color:var(--text-accent); border-color:var(--accent-border); }
.tb-badge--positive{ background:var(--positive-soft); color:var(--positive); border-color:var(--positive-border); }
.tb-badge--negative{ background:var(--negative-soft); color:var(--negative); border-color:var(--negative-border); }
.tb-badge--caution{ background:var(--caution-soft); color:var(--caution); border-color:var(--caution-border); }
.tb-badge--solid{ background:var(--accent); color:#fff; border-color:transparent; }
.tb-badge__dot{ width:6px; height:6px; border-radius:999px; background:currentColor; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-badge-css")) {
  const s = document.createElement("style");
  s.id = "tb-badge-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Badge — a small status/label pill. Tones map to the semantic token set. */
function Badge({
  tone = "neutral",
  dot = false,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  const cls = ["tb-badge", `tb-badge--${tone}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "tb-badge__dot",
    "aria-hidden": "true"
  }), icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-btn{
  --_bg: var(--accent); --_fg: var(--text-on-accent); --_bd: transparent;
  display:inline-flex; align-items:center; justify-content:center; gap:0.55em;
  font-family:var(--font-sans); font-weight:var(--weight-semibold);
  letter-spacing:-0.006em; line-height:1; text-decoration:none; white-space:nowrap;
  border:1px solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-control); cursor:pointer;
  transition:var(--transition-control); user-select:none;
}
.tb-btn:hover{ text-decoration:none; }
.tb-btn:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-btn:active{ transform:translateY(1px); }
.tb-btn[aria-disabled="true"]{ opacity:.5; pointer-events:none; }
.tb-btn__ic{ display:inline-flex; flex:none; }
.tb-btn__ic svg{ width:1.15em; height:1.15em; stroke-width:var(--icon-stroke); }

/* sizes */
.tb-btn--sm{ height:var(--control-sm); padding:0 0.85rem; font-size:var(--text-sm); }
.tb-btn--md{ height:var(--control-md); padding:0 1.15rem; font-size:var(--text-base); }
.tb-btn--lg{ height:var(--control-lg); padding:0 1.6rem; font-size:var(--text-md); }
.tb-btn--block{ display:flex; width:100%; }

/* variants */
.tb-btn--primary{ --_bg:var(--accent); --_fg:var(--text-on-accent); box-shadow:0 1px 2px rgba(16,24,40,.12); }
.tb-btn--primary:hover{ --_bg:var(--accent-hover); }
.tb-btn--primary:active{ --_bg:var(--accent-press); }
.tb-btn--secondary{ --_bg:var(--surface-card); --_fg:var(--text-strong); --_bd:var(--border-default); box-shadow:var(--shadow-xs); }
.tb-btn--secondary:hover{ --_bd:var(--border-strong); background:var(--surface-subtle); }
.tb-btn--ghost{ --_bg:transparent; --_fg:var(--text-accent); }
.tb-btn--ghost:hover{ background:var(--accent-soft); }
.tb-btn--danger{ --_bg:var(--negative); --_fg:#fff; }
.tb-btn--danger:hover{ filter:brightness(.94); }
.tb-btn--onInk{ --_bg:#fff; --_fg:var(--c-ink-950); }
.tb-btn--onInk:hover{ background:var(--c-ink-100); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-btn-css")) {
  const s = document.createElement("style");
  s.id = "tb-btn-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Button — the primary action control. On money pages the canonical action is a
 * CALL, so the most common use is `as="a" href="tel:..."` with a phone icon.
 */
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  icon = null,
  iconRight = null,
  block = false,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ["tb-btn", `tb-btn--${variant}`, `tb-btn--${size}`, block ? "tb-btn--block" : "", className].filter(Boolean).join(" ");
  const extra = {};
  if (Tag === "button") extra.disabled = disabled;
  if (disabled) extra["aria-disabled"] = "true";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, extra, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "tb-btn__ic",
    "aria-hidden": "true"
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "tb-btn__ic",
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-card{
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-card); box-shadow:var(--shadow-card);
  transition:var(--transition-control);
}
.tb-card--flat{ box-shadow:none; }
.tb-card--inset{ background:var(--surface-subtle); box-shadow:none; border-color:var(--border-subtle); }
.tb-card--ink{ background:var(--surface-ink); border-color:var(--border-ink); color:var(--text-on-ink); box-shadow:none; }
.tb-card--pad-sm{ padding:var(--space-5); }
.tb-card--pad-md{ padding:var(--space-6); }
.tb-card--pad-lg{ padding:var(--space-8); }
.tb-card--pad-none{ padding:0; }
.tb-card--interactive{ cursor:pointer; }
.tb-card--interactive:hover{ border-color:var(--border-default); box-shadow:var(--shadow-lg); transform:translateY(-2px); }
.tb-card--interactive:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:2px; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-card-css")) {
  const s = document.createElement("style");
  s.id = "tb-card-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Card — the surface primitive. White, hairline + soft cool shadow by default. */
function Card({
  variant = "default",
  pad = "md",
  interactive = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ["tb-card", variant !== "default" ? `tb-card--${variant}` : "", `tb-card--pad-${pad}`, interactive ? "tb-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, interactive && as !== "button" ? {
    tabIndex: 0
  } : {}, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-eyebrow{
  display:inline-flex; align-items:center; gap:0.55em;
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-semibold);
  letter-spacing:var(--tracking-eyebrow); text-transform:uppercase; color:var(--text-accent);
}
.tb-eyebrow--muted{ color:var(--text-muted); }
.tb-eyebrow--onInk{ color:var(--accent-on-ink); }
.tb-eyebrow__dot{ width:5px; height:5px; border-radius:999px; background:currentColor; flex:none; }
.tb-eyebrow__ic{ display:inline-flex; }
.tb-eyebrow__ic svg{ width:15px; height:15px; stroke-width:var(--icon-stroke); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-eyebrow-css")) {
  const s = document.createElement("style");
  s.id = "tb-eyebrow-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Eyebrow — a small tracked-uppercase classifier above a heading.
 * HARD RULE: it must encode something TRUE (a real credential / category), never decoration.
 */
function Eyebrow({
  tone = "accent",
  dot = true,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  const cls = ["tb-eyebrow", tone !== "accent" ? `tb-eyebrow--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "tb-eyebrow__ic",
    "aria-hidden": "true"
  }, icon) : dot && /*#__PURE__*/React.createElement("span", {
    className: "tb-eyebrow__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-iconbtn{
  display:inline-flex; align-items:center; justify-content:center; flex:none;
  background:var(--surface-card); color:var(--text-body);
  border:1px solid var(--border-default); border-radius:var(--radius-control);
  cursor:pointer; transition:var(--transition-control); padding:0;
}
.tb-iconbtn:hover{ color:var(--text-strong); border-color:var(--border-strong); background:var(--surface-subtle); }
.tb-iconbtn:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-iconbtn:active{ transform:translateY(1px); }
.tb-iconbtn[aria-disabled="true"]{ opacity:.45; pointer-events:none; }
.tb-iconbtn svg{ stroke-width:var(--icon-stroke); }
.tb-iconbtn--sm{ width:var(--control-sm); height:var(--control-sm); }
.tb-iconbtn--sm svg{ width:16px; height:16px; }
.tb-iconbtn--md{ width:var(--control-md); height:var(--control-md); }
.tb-iconbtn--md svg{ width:20px; height:20px; }
.tb-iconbtn--lg{ width:var(--control-lg); height:var(--control-lg); }
.tb-iconbtn--lg svg{ width:22px; height:22px; }
.tb-iconbtn--ghost{ background:transparent; border-color:transparent; }
.tb-iconbtn--ghost:hover{ background:var(--surface-inset); }
.tb-iconbtn--accent{ background:var(--accent); color:#fff; border-color:transparent; }
.tb-iconbtn--accent:hover{ background:var(--accent-hover); color:#fff; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-iconbtn-css")) {
  const s = document.createElement("style");
  s.id = "tb-iconbtn-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** IconButton — a square, icon-only control. `label` is required (a11y). */
function IconButton({
  variant = "default",
  size = "md",
  label,
  icon,
  as = "button",
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ["tb-iconbtn", variant !== "default" ? `tb-iconbtn--${variant}` : "", `tb-iconbtn--${size}`, className].filter(Boolean).join(" ");
  const extra = {};
  if (Tag === "button") {
    extra.disabled = disabled;
    extra.type = rest.type || "button";
  }
  if (disabled) extra["aria-disabled"] = "true";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, extra, rest), icon || children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-tag{
  display:inline-flex; align-items:center; gap:0.45em;
  font-family:var(--font-sans); font-size:var(--text-sm); font-weight:var(--weight-medium);
  color:var(--text-body); background:var(--surface-card);
  border:1px solid var(--border-default); border-radius:var(--radius-pill);
  padding:0.4em 0.85em; line-height:1; cursor:default; transition:var(--transition-control);
}
.tb-tag--clickable{ cursor:pointer; }
.tb-tag--clickable:hover{ border-color:var(--border-strong); background:var(--surface-subtle); color:var(--text-strong); }
.tb-tag--active{ background:var(--accent-soft); border-color:var(--accent-border); color:var(--text-accent); font-weight:var(--weight-semibold); }
.tb-tag:focus-visible{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-tag__x{ display:inline-flex; margin-right:-0.2em; opacity:.6; }
.tb-tag__x:hover{ opacity:1; }
.tb-tag__x svg{ width:14px; height:14px; stroke-width:2; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-tag-css")) {
  const s = document.createElement("style");
  s.id = "tb-tag-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Tag / filter chip — categories and filter-chips (resources index, glossary). */
function Tag({
  active = false,
  onRemove = null,
  onClick = null,
  className = "",
  children,
  ...rest
}) {
  const clickable = !!onClick;
  const Tag2 = clickable ? "button" : "span";
  const cls = ["tb-tag", clickable ? "tb-tag--clickable" : "", active ? "tb-tag--active" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag2, _extends({
    className: cls,
    onClick: onClick
  }, clickable ? {
    type: "button"
  } : {}, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "tb-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-check{ display:inline-flex; align-items:flex-start; gap:var(--space-3); font-family:var(--font-sans); cursor:pointer; }
.tb-check input{ position:absolute; opacity:0; width:1px; height:1px; }
.tb-check__box{
  flex:none; width:1.25rem; height:1.25rem; margin-top:1px; border-radius:var(--radius-xs);
  border:1.5px solid var(--border-strong); background:var(--surface-card); box-shadow:var(--shadow-inset);
  display:inline-flex; align-items:center; justify-content:center; color:#fff; transition:var(--transition-control);
}
.tb-check__box svg{ width:14px; height:14px; stroke-width:3; opacity:0; transform:scale(.6); transition:opacity var(--dur-fast), transform var(--dur-fast) var(--ease-out); }
.tb-check input:checked + .tb-check__box{ background:var(--accent); border-color:var(--accent); }
.tb-check input:checked + .tb-check__box svg{ opacity:1; transform:none; }
.tb-check:hover .tb-check__box{ border-color:var(--accent); }
.tb-check input:focus-visible + .tb-check__box{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-check input:disabled + .tb-check__box{ opacity:.45; }
.tb-check__txt{ font-size:var(--text-base); color:var(--text-body); line-height:1.35; }
.tb-check__txt b{ color:var(--text-strong); font-weight:var(--weight-medium); display:block; }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-check-css")) {
  const s = document.createElement("style");
  s.id = "tb-check-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Checkbox — a single styled checkbox with label (and optional description). */
function Checkbox({
  label,
  description,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["tb-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tb-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "tb-check__txt"
  }, label && /*#__PURE__*/React.createElement("b", null, label), description));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const CSS = `
.tb-field{ display:flex; flex-direction:column; gap:var(--space-2); font-family:var(--font-sans); }
.tb-field__label{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
.tb-field__req{ color:var(--accent); margin-left:.2em; }
.tb-field__opt{ color:var(--text-faint); font-weight:var(--weight-regular); margin-left:.35em; }
.tb-field__hint{ font-size:var(--text-sm); color:var(--text-muted); }
.tb-field__err{ font-size:var(--text-sm); color:var(--negative); display:flex; align-items:center; gap:.35em; }
.tb-field__err svg{ width:14px; height:14px; stroke-width:2.2; }

.tb-input{ position:relative; display:flex; align-items:center; }
.tb-input__ic{ position:absolute; left:0.85rem; display:inline-flex; color:var(--text-faint); pointer-events:none; }
.tb-input__ic svg{ width:18px; height:18px; stroke-width:var(--icon-stroke); }
.tb-input input, .tb-textarea textarea, .tb-select select{
  width:100%; font-family:var(--font-sans); font-size:var(--text-base); color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-default); border-radius:var(--radius-control);
  box-shadow:var(--shadow-inset); transition:var(--transition-control); -webkit-appearance:none; appearance:none;
}
.tb-input input{ height:var(--control-md); padding:0 0.95rem; }
.tb-input--has-ic input{ padding-left:2.6rem; }
.tb-textarea textarea{ padding:0.7rem 0.95rem; min-height:7rem; resize:vertical; line-height:var(--leading-normal); }
.tb-select select{ height:var(--control-md); padding:0 2.4rem 0 0.95rem; cursor:pointer; }
.tb-select{ position:relative; }
.tb-select__chev{ position:absolute; right:0.85rem; top:50%; transform:translateY(-50%); pointer-events:none; color:var(--text-muted); }
.tb-select__chev svg{ width:18px; height:18px; stroke-width:var(--icon-stroke); }
.tb-input input::placeholder, .tb-textarea textarea::placeholder{ color:var(--text-faint); }
.tb-input input:hover, .tb-textarea textarea:hover, .tb-select select:hover{ border-color:var(--border-strong); }
.tb-input input:focus, .tb-textarea textarea:focus, .tb-select select:focus{ outline:none; border-color:var(--accent); box-shadow:var(--shadow-focus); }
.tb-field[data-invalid="true"] input, .tb-field[data-invalid="true"] textarea, .tb-field[data-invalid="true"] select{ border-color:var(--negative); }
.tb-field[data-invalid="true"] input:focus, .tb-field[data-invalid="true"] textarea:focus{ box-shadow:0 0 0 3px var(--negative-soft); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-forms-css")) {
  const s = document.createElement("style");
  s.id = "tb-forms-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
let _idc = 0;
const useFieldId = p => React.useMemo(() => `${p}-${++_idc}`, [p]);

/** Internal field chrome: label + control slot + hint/error. Used by Input/Textarea/Select. */
function Field({
  label,
  required,
  optional,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tb-field",
    "data-invalid": error ? "true" : "false"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tb-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tb-field__req",
    "aria-hidden": "true"
  }, "*"), optional && /*#__PURE__*/React.createElement("span", {
    className: "tb-field__opt"
  }, "optional")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "tb-field__err"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  })), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "tb-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { useFieldId, Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — labeled text field with optional leading icon, hint, and error. */
function Input({
  label,
  required,
  optional,
  hint,
  error,
  icon,
  id,
  className = "",
  ...rest
}) {
  const auto = __ds_scope.useFieldId("inp");
  const fid = id || auto;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    required: required,
    optional: optional,
    hint: hint,
    error: error,
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("div", {
    className: ["tb-input", icon ? "tb-input--has-ic" : "", className].filter(Boolean).join(" ")
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "tb-input__ic",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    "aria-invalid": error ? "true" : undefined
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-radiogroup{ display:flex; flex-direction:column; gap:var(--space-3); font-family:var(--font-sans); }
.tb-radio{ display:inline-flex; align-items:flex-start; gap:var(--space-3); cursor:pointer; }
.tb-radio input{ position:absolute; opacity:0; width:1px; height:1px; }
.tb-radio__dot{
  flex:none; width:1.25rem; height:1.25rem; margin-top:1px; border-radius:999px;
  border:1.5px solid var(--border-strong); background:var(--surface-card); box-shadow:var(--shadow-inset);
  display:inline-flex; align-items:center; justify-content:center; transition:var(--transition-control);
}
.tb-radio__dot::after{ content:""; width:.6rem; height:.6rem; border-radius:999px; background:var(--accent); transform:scale(0); transition:transform var(--dur-fast) var(--ease-out); }
.tb-radio input:checked + .tb-radio__dot{ border-color:var(--accent); }
.tb-radio input:checked + .tb-radio__dot::after{ transform:scale(1); }
.tb-radio:hover .tb-radio__dot{ border-color:var(--accent); }
.tb-radio input:focus-visible + .tb-radio__dot{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-radio input:disabled + .tb-radio__dot{ opacity:.45; }
.tb-radio__txt{ font-size:var(--text-base); color:var(--text-body); line-height:1.35; }
.tb-radio__txt b{ color:var(--text-strong); font-weight:var(--weight-medium); display:block; }

/* card-style radio tiles (the tool-panel radio-tiles family) */
.tb-radiogroup--tiles{ flex-direction:row; flex-wrap:wrap; }
.tb-radiogroup--tiles .tb-radio{ border:1px solid var(--border-default); border-radius:var(--radius-md); padding:var(--space-4); flex:1 1 9rem; background:var(--surface-card); transition:var(--transition-control); }
.tb-radiogroup--tiles .tb-radio:hover{ border-color:var(--border-strong); }
.tb-radiogroup--tiles .tb-radio:has(input:checked){ border-color:var(--accent); background:var(--accent-soft); box-shadow:0 0 0 1px var(--accent); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-radio-css")) {
  const s = document.createElement("style");
  s.id = "tb-radio-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Radio — a single styled radio. Usually used inside RadioGroup. */
function Radio({
  label,
  description,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["tb-radio", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tb-radio__dot",
    "aria-hidden": "true"
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "tb-radio__txt"
  }, label && /*#__PURE__*/React.createElement("b", null, label), description));
}

/** RadioGroup — a set of radios sharing a `name`. `tiles` renders card-style options. */
function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  tiles = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    className: ["tb-radiogroup", tiles ? "tb-radiogroup--tiles" : "", className].filter(Boolean).join(" ")
  }, rest), options.map((o, i) => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const d = typeof o === "string" ? undefined : o.description;
    return /*#__PURE__*/React.createElement(Radio, {
      key: i,
      name: name,
      value: v,
      label: l,
      description: d,
      checked: value !== undefined ? value === v : undefined,
      onChange: onChange ? () => onChange(v) : undefined
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — labeled native select with brand chevron. `options`: strings or {value,label}. */
function Select({
  label,
  required,
  optional,
  hint,
  error,
  options = [],
  placeholder,
  id,
  className = "",
  children,
  ...rest
}) {
  const auto = __ds_scope.useFieldId("sel");
  const fid = id || auto;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    required: required,
    optional: optional,
    hint: hint,
    error: error,
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("div", {
    className: ["tb-select", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    "aria-invalid": error ? "true" : undefined,
    defaultValue: rest.defaultValue ?? (placeholder ? "" : undefined)
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), children || options.map((o, i) => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    className: "tb-select__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-switch{ display:inline-flex; align-items:center; gap:var(--space-3); font-family:var(--font-sans); cursor:pointer; }
.tb-switch input{ position:absolute; opacity:0; width:1px; height:1px; }
.tb-switch__track{
  flex:none; width:2.5rem; height:1.5rem; border-radius:999px; background:var(--border-strong);
  padding:2px; transition:background-color var(--dur) var(--ease-standard); display:inline-flex; align-items:center;
}
.tb-switch__thumb{ width:1.1rem; height:1.1rem; border-radius:999px; background:#fff; box-shadow:var(--shadow-sm); transition:transform var(--dur) var(--ease-out); }
.tb-switch input:checked + .tb-switch__track{ background:var(--accent); }
.tb-switch input:checked + .tb-switch__track .tb-switch__thumb{ transform:translateX(1rem); }
.tb-switch input:focus-visible + .tb-switch__track{ outline:2px solid var(--focus-ring); outline-offset:2px; }
.tb-switch input:disabled + .tb-switch__track{ opacity:.45; }
.tb-switch__txt{ font-size:var(--text-base); color:var(--text-body); }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-switch-css")) {
  const s = document.createElement("style");
  s.id = "tb-switch-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Switch — a binary toggle with optional label. */
function Switch({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["tb-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tb-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "tb-switch__txt"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — labeled multi-line field with hint and error. */
function Textarea({
  label,
  required,
  optional,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const auto = __ds_scope.useFieldId("ta");
  const fid = id || auto;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    required: required,
    optional: optional,
    hint: hint,
    error: error,
    htmlFor: fid
  }, /*#__PURE__*/React.createElement("div", {
    className: ["tb-textarea", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    "aria-invalid": error ? "true" : undefined
  }, rest))));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/ledger/DataFigure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-fig{
  font-family:var(--font-sans); background:var(--ledger-paper);
  border:1px solid var(--border-subtle); border-radius:var(--radius-figure);
  box-shadow:var(--shadow-card); padding:var(--space-6);
}
.tb-fig__lab{ font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.08em; color:var(--text-muted); }
.tb-fig__val{ font-family:var(--font-mono); font-variant-numeric:tabular-nums; font-size:var(--display-sm); line-height:1; color:var(--text-strong); letter-spacing:-0.02em; margin:var(--space-3) 0 var(--space-2); }
.tb-fig__trend{ display:inline-flex; align-items:center; gap:.4em; font-size:var(--text-sm); font-weight:var(--weight-semibold); }
.tb-fig__trend svg{ width:15px; height:15px; stroke-width:2.2; }
.tb-fig__trend--up{ color:var(--positive); }
.tb-fig__trend--down{ color:var(--negative); }
.tb-fig__trend--flat{ color:var(--text-muted); }
.tb-fig__cap{ font-size:var(--text-sm); color:var(--text-muted); margin-top:var(--space-4); }
.tb-fig__cap em{ font-style:normal; color:var(--text-faint); font-family:var(--font-mono); font-size:var(--text-xs); }

.tb-fig__bars{ display:flex; flex-direction:column; gap:var(--space-4); margin-top:var(--space-5); }
.tb-fig__bar{ display:grid; grid-template-columns:1fr; gap:var(--space-2); }
.tb-fig__barhead{ display:flex; justify-content:space-between; font-size:var(--text-sm); }
.tb-fig__barhead span:first-child{ color:var(--text-body); }
.tb-fig__barhead b{ font-family:var(--font-mono); font-variant-numeric:tabular-nums; color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-fig__track{ height:10px; background:var(--surface-inset); border-radius:var(--radius-pill); overflow:hidden; }
.tb-fig__fill{ height:100%; border-radius:var(--radius-pill); background:var(--accent); width:var(--w,0%); }
.tb-fig__fill--muted{ background:var(--ledger-rule); }
.tb-fig__fill--pos{ background:var(--positive); }
.tb-fig__fill--neg{ background:var(--negative); }
@media (prefers-reduced-motion: no-preference){
  .tb-fig[data-animate="true"] .tb-fig__fill{ width:0%; }
  .tb-fig[data-animate="true"].is-in .tb-fig__fill{ width:var(--w,0%); transition:width var(--dur-draw) var(--ease-out) calc(var(--i,0)*120ms); }
}
`;
if (typeof document !== "undefined" && !document.getElementById("tb-fig-css")) {
  const s = document.createElement("style");
  s.id = "tb-fig-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const TrendIcon = {
  up: /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7M9 7h8v8"
  }),
  down: /*#__PURE__*/React.createElement("path", {
    d: "M7 7l10 10M17 9v8H9"
  }),
  flat: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })
};

/**
 * DataFigure — a real number set in space, or a small drawn-on bar series.
 * Real data ONLY (never fabricated). Bars draw on when `animate` + in view.
 */
function DataFigure({
  label,
  value,
  trend = null,
  caption = null,
  source = null,
  bars = null,
  animate = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const max = bars ? Math.max(...bars.map(b => Math.abs(b.value))) : 0;
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    className: ["tb-fig", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    className: "tb-fig__lab"
  }, label), value != null && /*#__PURE__*/React.createElement("div", {
    className: "tb-fig__val"
  }, value), trend && /*#__PURE__*/React.createElement("span", {
    className: `tb-fig__trend tb-fig__trend--${trend.dir}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, TrendIcon[trend.dir]), trend.text), bars && /*#__PURE__*/React.createElement("div", {
    className: "tb-fig__bars"
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "tb-fig__bar",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-fig__barhead"
  }, /*#__PURE__*/React.createElement("span", null, b.label), /*#__PURE__*/React.createElement("b", null, b.display ?? b.value)), /*#__PURE__*/React.createElement("div", {
    className: "tb-fig__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: `tb-fig__fill${b.tone ? " tb-fig__fill--" + b.tone : ""}`,
    style: {
      "--w": `${max ? Math.abs(b.value) / max * 100 : 0}%`,
      "--i": i
    }
  }))))), (caption || source) && /*#__PURE__*/React.createElement("figcaption", {
    className: "tb-fig__cap"
  }, caption, source && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("em", null, source))));
}
Object.assign(__ds_scope, { DataFigure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/DataFigure.jsx", error: String((e && e.message) || e) }); }

// components/ledger/DecisionTree.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-tree{ font-family:var(--font-sans); }
.tb-tree__q{
  display:inline-flex; align-items:center; gap:.6em; background:var(--surface-ink); color:#fff;
  border-radius:var(--radius-md); padding:var(--space-4) var(--space-5); font-size:var(--text-md);
  font-weight:var(--weight-semibold); letter-spacing:-0.01em; box-shadow:var(--shadow-sm);
}
.tb-tree__q svg{ width:18px; height:18px; stroke-width:var(--icon-stroke); color:var(--accent-on-ink); flex:none; }
.tb-tree__branches{ display:grid; gap:var(--space-4); margin-top:var(--space-6); position:relative; }
.tb-tree__branch{ display:grid; grid-template-columns:auto 1fr; gap:var(--space-4); align-items:stretch; }
.tb-tree__edge{ position:relative; width:var(--space-8); flex:none; }
.tb-tree__edge::before{ content:""; position:absolute; left:0; top:calc(-1 * var(--space-6)); height:calc(50% + var(--space-6)); border-left:var(--rule) solid var(--border-strong); border-bottom:var(--rule) solid var(--border-strong); border-bottom-left-radius:10px; width:100%; }
.tb-tree__cond{
  position:absolute; left:55%; top:calc(50% - .8em); transform:translateY(-50%);
  font-family:var(--font-mono); font-size:var(--text-xs); font-weight:600; color:var(--text-muted);
  background:var(--surface-page); padding:0 .4em; text-transform:uppercase; letter-spacing:.05em; white-space:nowrap;
}
.tb-tree__leaf{
  background:var(--ledger-paper); border:1px solid var(--border-subtle); border-radius:var(--radius-md);
  box-shadow:var(--shadow-xs); padding:var(--space-4) var(--space-5); display:flex; flex-direction:column; gap:var(--space-1);
}
.tb-tree__leaf--rec{ border-color:var(--accent-border); background:var(--accent-soft); }
.tb-tree__leaf b{ font-size:var(--text-md); color:var(--text-strong); font-weight:var(--weight-semibold); }
.tb-tree__leaf p{ font-size:var(--text-sm); color:var(--text-muted); }
.tb-tree__leaf--rec b{ color:var(--text-accent); }
.tb-tree__tag{ align-self:flex-start; margin-top:var(--space-2); font-family:var(--font-mono); font-size:var(--text-xs); font-weight:600; color:var(--accent); text-transform:uppercase; letter-spacing:.06em; }
@media (prefers-reduced-motion: no-preference){
  .tb-tree[data-animate="true"] .tb-tree__branch{ opacity:0; transform:translateX(6px); }
  .tb-tree[data-animate="true"].is-in .tb-tree__branch{ opacity:1; transform:none; transition:opacity var(--dur-slow) var(--ease-out) calc(var(--i,0)*90ms), transform var(--dur-slow) var(--ease-out) calc(var(--i,0)*90ms); }
}
@media (max-width:560px){ .tb-tree__edge{ width:var(--space-5); } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-tree-css")) {
  const s = document.createElement("style");
  s.id = "tb-tree-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * DecisionTree — "which is right for you" branching logic. A root question
 * branches to outcome leaves. Each branch: { cond, title, detail, recommend }.
 */
function DecisionTree({
  question = "",
  branches = [],
  icon = null,
  animate = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.2
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const Q = icon || /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.1 9a3 3 0 1 1 4.5 2.6c-.9.5-1.6 1.2-1.6 2.4M12 17h.01"
  }));
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ["tb-tree", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-tree__q"
  }, Q, question), /*#__PURE__*/React.createElement("div", {
    className: "tb-tree__branches"
  }, branches.map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "tb-tree__branch",
    key: i,
    style: {
      "--i": i
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-tree__edge",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-tree__cond"
  }, b.cond)), /*#__PURE__*/React.createElement("div", {
    className: ["tb-tree__leaf", b.recommend ? "tb-tree__leaf--rec" : ""].join(" ")
  }, /*#__PURE__*/React.createElement("b", null, b.title), b.detail && /*#__PURE__*/React.createElement("p", null, b.detail), b.recommend && /*#__PURE__*/React.createElement("span", {
    className: "tb-tree__tag"
  }, "Recommended"))))));
}
Object.assign(__ds_scope, { DecisionTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/DecisionTree.jsx", error: String((e && e.message) || e) }); }

// components/ledger/JudgmentChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-judg{ font-family:var(--font-sans); background:var(--ledger-paper); border:1px solid var(--border-subtle); border-radius:var(--radius-figure); box-shadow:var(--shadow-card); padding:var(--space-6); }
.tb-judg__svg{ width:100%; height:auto; display:block; color:var(--ledger-rule); }
.tb-judg__grid line{ stroke:var(--ledger-rule); }
.tb-judg__auto{ stroke:var(--text-faint); stroke-width:1.5; fill:none; }
.tb-judg__auto-x{ stroke:var(--text-faint); stroke-width:1.5; opacity:.7; }
.tb-judg__rule{ stroke:var(--ledger-rule); stroke-width:1.5; }
.tb-judg__judg{ stroke:var(--accent); stroke-width:2.5; fill:none; }
.tb-judg__arc{ stroke:var(--accent); stroke-width:1.25; fill:none; opacity:.4; }
.tb-judg__tie{ stroke:var(--ledger-tie); stroke-width:2; fill:none; }
.tb-judg__node{ fill:var(--accent); }
.tb-judg__node--auto{ fill:var(--text-faint); }
.tb-judg__legend{ display:flex; flex-wrap:wrap; gap:var(--space-2) var(--space-5); margin-top:var(--space-4); }
.tb-judg__legend span{ display:inline-flex; align-items:center; gap:.45em; font-size:var(--text-sm); color:var(--text-muted); }
.tb-judg__swatch{ width:1.4rem; height:0; border-top-width:2.5px; border-top-style:solid; }
.tb-judg__cap{ font-size:var(--text-sm); color:var(--text-muted); margin-top:var(--space-3); line-height:var(--leading-relaxed); }
@media (prefers-reduced-motion: no-preference){
  .tb-judg[data-animate="true"] .tb-judg__judg, .tb-judg[data-animate="true"] .tb-judg__auto, .tb-judg[data-animate="true"] .tb-judg__tie, .tb-judg[data-animate="true"] .tb-judg__arc{ stroke-dasharray:1; stroke-dashoffset:1; }
  .tb-judg[data-animate="true"].is-in .tb-judg__judg{ animation:tb-draw var(--dur-draw) var(--ease-out) forwards; }
  .tb-judg[data-animate="true"].is-in .tb-judg__auto{ animation:tb-draw var(--dur-draw) var(--ease-out) forwards; }
  .tb-judg[data-animate="true"].is-in .tb-judg__tie{ animation:tb-draw var(--dur) var(--ease-out) forwards; animation-delay:var(--dur-draw); }
  .tb-judg[data-animate="true"].is-in .tb-judg__arc{ animation:tb-draw var(--dur-slow) var(--ease-out) forwards; animation-delay:calc(var(--dur-draw) * 0.6); }
  .tb-judg[data-animate="true"] .tb-judg__node{ opacity:0; }
  .tb-judg[data-animate="true"].is-in .tb-judg__node{ animation:tb-pop var(--dur) var(--ease-out) forwards; }
}
@keyframes tb-draw{ to{ stroke-dashoffset:0; } }
@keyframes tb-pop{ to{ opacity:1; } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-judg-css")) {
  const s = document.createElement("style");
  s.id = "tb-judg-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * JudgmentChart — the signature data illustration (upgraded from the firm's
 * "automation drifts / judgment compounds" reconciliation chart). The automation
 * line stays flat and drifts with duplicate ✕ marks; the judgment line reconciles
 * upward through period nodes, with reconciliation arcs + tie-out ticks. Draws on.
 */
function JudgmentChart({
  caption = "The automation line drifts. The judgment line reconciles — and compounds.",
  autoLabel = "Automated data entry",
  judgmentLabel = "Reconciled judgment",
  animate = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const nodes = [[130, 146], [245, 128], [360, 102], [475, 76], [590, 48]];
  const checks = [[122, 132], [237, 114], [352, 88], [467, 62], [582, 44]];
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    className: ["tb-judg", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "tb-judg__svg",
    viewBox: "0 0 720 240",
    role: "img",
    "aria-label": "Diagram: automated data entry stays flat and drifts; reconciled judgment compounds upward",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("g", {
    className: "tb-judg__grid"
  }, [130, 245, 360, 475, 590].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    x1: x,
    y1: "18",
    x2: x,
    y2: "206",
    opacity: "0.2"
  })), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "62",
    x2: "680",
    y2: "62",
    opacity: "0.12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "40",
    y1: "112",
    x2: "680",
    y2: "112",
    opacity: "0.12"
  })), /*#__PURE__*/React.createElement("path", {
    className: "tb-judg__auto",
    pathLength: "1",
    d: "M40 158 L208 158 L352 162 L500 162 L512 170 L680 170"
  }), [[212, 152], [356, 156], [544, 164]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i,
    className: "tb-judg__auto-x"
  }, /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: y,
    x2: x + 8,
    y2: y + 12
  }), /*#__PURE__*/React.createElement("line", {
    x1: x + 8,
    y1: y,
    x2: x,
    y2: y + 12
  }))), /*#__PURE__*/React.createElement("path", {
    className: "tb-judg__judg",
    pathLength: "1",
    d: "M40 158 C 130 156, 200 142, 268 122 S 420 78, 520 58 S 650 36, 680 32"
  }), /*#__PURE__*/React.createElement("path", {
    className: "tb-judg__arc",
    pathLength: "1",
    d: "M130 150 A 58 36 0 0 1 245 132"
  }), /*#__PURE__*/React.createElement("path", {
    className: "tb-judg__arc",
    pathLength: "1",
    d: "M360 104 A 58 36 0 0 1 475 78"
  }), checks.map(([x, y], i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    className: "tb-judg__tie",
    pathLength: "1",
    d: `M${x} ${y} l6 8 12 -16`
  })), /*#__PURE__*/React.createElement("line", {
    className: "tb-judg__rule",
    x1: "40",
    y1: "208",
    x2: "680",
    y2: "208"
  }), /*#__PURE__*/React.createElement("line", {
    className: "tb-judg__rule",
    x1: "40",
    y1: "214",
    x2: "680",
    y2: "214"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    className: "tb-judg__node",
    cx: "40",
    cy: "158",
    r: "3.5"
  }), nodes.map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    className: "tb-judg__node",
    cx: x,
    cy: y,
    r: "2.6"
  })), /*#__PURE__*/React.createElement("circle", {
    className: "tb-judg__node",
    cx: "680",
    cy: "32",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "tb-judg__node--auto",
    cx: "680",
    cy: "170",
    r: "3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tb-judg__legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "tb-judg__swatch",
    style: {
      borderColor: "var(--accent)"
    }
  }), judgmentLabel), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "tb-judg__swatch",
    style: {
      borderColor: "var(--text-faint)"
    }
  }), autoLabel)), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "tb-judg__cap"
  }, caption));
}
Object.assign(__ds_scope, { JudgmentChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/JudgmentChart.jsx", error: String((e && e.message) || e) }); }

// components/ledger/LedgerMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-ledgermotif{ display:block; width:100%; height:auto; color:var(--accent); }
.tb-ledgermotif--ink{ color:var(--c-ink-300); }
.tb-ledgermotif__tie{ stroke:var(--ledger-tie); stroke-width:6; fill:none; stroke-linecap:round; stroke-linejoin:round; }
@media (prefers-reduced-motion: no-preference){
  .tb-ledgermotif[data-animate="true"] rect{ opacity:0; }
  .tb-ledgermotif[data-animate="true"].is-in rect{ animation:tb-lm-in var(--dur-slow) var(--ease-out) forwards; }
  .tb-ledgermotif[data-animate="true"] .tb-ledgermotif__tie{ stroke-dasharray:1; stroke-dashoffset:1; }
  .tb-ledgermotif[data-animate="true"].is-in .tb-ledgermotif__tie{ animation:tb-draw var(--dur) var(--ease-out) forwards; animation-delay:.5s; }
}
@keyframes tb-lm-in{ from{ opacity:0; transform:translateX(8px);} to{ opacity:var(--o,1); transform:none; } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-ledgermotif-css")) {
  const s = document.createElement("style");
  s.id = "tb-ledgermotif-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

// Pseudo-random but stable split widths per row (debit | gap | credit), W=480 usable.
const ROWS = [[88, 350], [376, 62], [156, 314], [380, 74], [196, 258], [364, 106], [272, 198], [356, 106], [308, 162], [340, 130], [332, 138], [332, 138]];

/**
 * LedgerMotif — the signature backdrop (upgraded from the firm's hero ledger-stack).
 * Rows of debit/credit bars with an opacity gradient down the page, plus accent
 * tie-out ticks on reconciled rows. Inherits color from CSS; use behind a hero or
 * as a standalone figure. Set `tone="ink"` for dark surfaces.
 */
function LedgerMotif({
  tone = "accent",
  accentTicks = true,
  animate = false,
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const rowH = 24,
    gap = 32,
    top = 36,
    x0 = 40,
    W = 480;
  const tickRows = accentTicks ? [3, 7, 10] : [];
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    className: ["tb-ledgermotif", tone === "ink" ? "tb-ledgermotif--ink" : "", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    viewBox: "0 0 560 736",
    "data-animate": animate ? "true" : "false",
    "aria-hidden": "true",
    fill: "currentColor",
    style: style
  }, rest), ROWS.map(([debit, credit], i) => {
    const y = top + i * (rowH + gap);
    const o = 0.16 + i / (ROWS.length - 1) * 0.84;
    const creditX = x0 + W - credit;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      style: {
        "--o": o.toFixed(2)
      }
    }, /*#__PURE__*/React.createElement("rect", {
      x: x0,
      y: y,
      width: debit,
      height: rowH,
      opacity: o.toFixed(2),
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: creditX,
      y: y,
      width: credit,
      height: rowH,
      opacity: o.toFixed(2),
      rx: "2"
    }), tickRows.includes(i) && /*#__PURE__*/React.createElement("path", {
      className: "tb-ledgermotif__tie",
      pathLength: "1",
      d: `M${creditX - 30} ${y + 12} l8 9 16 -20`
    }));
  }));
}
Object.assign(__ds_scope, { LedgerMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/LedgerMotif.jsx", error: String((e && e.message) || e) }); }

// components/ledger/LedgerStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-stack{ perspective:1700px; width:100%; max-width:30rem; font-family:var(--font-sans); }
.tb-stack__scene{ position:relative; transform-style:preserve-3d; transform:rotateX(7deg) rotateY(-17deg) rotateZ(1deg); transition:transform var(--dur-slower) var(--ease-out); will-change:transform; }
.tb-stack:hover .tb-stack__scene{ transform:rotateX(5deg) rotateY(-9deg) rotateZ(0deg); }
.tb-sheet{ border-radius:var(--radius-lg); background:var(--surface-card); border:1px solid var(--border-subtle); }
.tb-sheet--front{ position:relative; z-index:3; padding:var(--space-6); box-shadow:var(--shadow-lg); }
.tb-sheet--b1{ position:absolute; inset:0; z-index:2; transform:translateZ(-46px) translate(26px, 22px); background:var(--surface-subtle); box-shadow:var(--shadow-md); }
.tb-sheet--b2{ position:absolute; inset:0; z-index:1; transform:translateZ(-92px) translate(52px, 44px); background:var(--surface-inset); box-shadow:var(--shadow-sm); }
.tb-stack__cap{ display:flex; align-items:center; justify-content:space-between; margin-bottom:var(--space-4); }
.tb-stack__cap b{ font-size:var(--text-md); font-weight:var(--weight-semibold); color:var(--text-strong); letter-spacing:-0.01em; }
.tb-stack__cap span{ font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.08em; color:var(--text-muted); }
.tb-stack__rows{ border-top:2px solid var(--ledger-rule); }
.tb-stack__row{ display:grid; grid-template-columns:1fr auto auto; gap:var(--space-4); padding:var(--space-2) 0; font-size:var(--text-sm); border-bottom:1px solid var(--border-subtle); align-items:baseline; }
.tb-stack__row span:first-child{ color:var(--text-muted); }
.tb-stack__row b{ font-family:var(--font-mono); font-variant-numeric:tabular-nums; font-weight:var(--weight-medium); color:var(--text-strong); min-width:5.5rem; text-align:right; }
.tb-stack__row b.c{ color:var(--ledger-credit); }
.tb-stack__tot{ display:grid; grid-template-columns:1fr auto auto; gap:var(--space-4); padding:var(--space-3) 0 0; font-size:var(--text-sm); font-weight:var(--weight-semibold); }
.tb-stack__tot span:first-child{ color:var(--text-body); }
.tb-stack__tot b{ font-family:var(--font-mono); font-variant-numeric:tabular-nums; color:var(--text-strong); min-width:5.5rem; text-align:right; }
.tb-stack__tie{ display:inline-flex; align-items:center; gap:.5em; margin-top:var(--space-5); font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--positive); }
.tb-stack__tie svg{ width:17px; height:17px; stroke-width:2.4; }
@media (prefers-reduced-motion: no-preference){
  .tb-stack[data-animate="true"] .tb-stack__scene{ animation:tb-stack-in var(--dur-slower) var(--ease-out) both; }
}
@keyframes tb-stack-in{ from{ transform:rotateX(0deg) rotateY(0deg) translateY(10px); opacity:.4; } to{ transform:rotateX(7deg) rotateY(-17deg) rotateZ(1deg); opacity:1; } }
@media (max-width:560px){ .tb-stack__scene{ transform:rotateX(4deg) rotateY(-9deg); } .tb-sheet--b1{ transform:translateZ(-30px) translate(16px,14px); } .tb-sheet--b2{ transform:translateZ(-60px) translate(32px,28px); } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-stack-css")) {
  const s = document.createElement("style");
  s.id = "tb-stack-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const fmt = n => n.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

/**
 * LedgerStack — a dimensional (3D) signature focal piece: a stack of ledger
 * sheets in perspective, the front one a reconciled trial balance. The premium
 * hero "wow" that signals accounting-systems expertise. Reduced-motion-safe.
 */
function LedgerStack({
  title = "Trial balance",
  period = "Oct · reconciled",
  rows = [{
    label: "Cash",
    debit: 42414
  }, {
    label: "Accounts receivable",
    debit: 18950
  }, {
    label: "Revenue",
    credit: 51200
  }, {
    label: "Operating expenses",
    debit: 10164
  }, {
    label: "Accounts payable",
    credit: 20328
  }],
  animate = true,
  className = "",
  ...rest
}) {
  const dTot = rows.reduce((a, r) => a + (r.debit || 0), 0);
  const cTot = rows.reduce((a, r) => a + (r.credit || 0), 0);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tb-stack", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-stack__scene"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-sheet tb-sheet--b2",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tb-sheet tb-sheet--b1",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tb-sheet tb-sheet--front"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-stack__cap"
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("span", null, period)), /*#__PURE__*/React.createElement("div", {
    className: "tb-stack__rows"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "tb-stack__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("b", null, r.debit ? fmt(r.debit) : "—"), /*#__PURE__*/React.createElement("b", {
    className: "c"
  }, r.credit ? fmt(r.credit) : "—")))), /*#__PURE__*/React.createElement("div", {
    className: "tb-stack__tot"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("b", null, fmt(dTot)), /*#__PURE__*/React.createElement("b", null, fmt(cTot))), /*#__PURE__*/React.createElement("span", {
    className: "tb-stack__tie"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), "In balance \xB7 debits = credits"))));
}
Object.assign(__ds_scope, { LedgerStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/LedgerStack.jsx", error: String((e && e.message) || e) }); }

// components/ledger/ReconciliationFlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-recon{
  font-family:var(--font-sans);
  background:var(--ledger-paper); border:1px solid var(--border-subtle);
  border-radius:var(--radius-figure); box-shadow:var(--shadow-card);
  padding:var(--space-6) var(--space-6) var(--space-5);
}
.tb-recon__cap{ font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.08em; color:var(--text-muted); margin-bottom:var(--space-5); }
.tb-recon__steps{ display:flex; align-items:stretch; flex-wrap:wrap; gap:var(--space-3); }
.tb-recon__node{
  flex:1 1 8rem; min-width:7rem; background:var(--ledger-field); border:1px solid var(--border-subtle);
  border-radius:var(--radius-md); padding:var(--space-4); display:flex; flex-direction:column; gap:var(--space-2);
}
.tb-recon__node--result{ background:var(--positive-soft); border-color:var(--positive-border); }
.tb-recon__nlab{ font-size:var(--text-xs); font-weight:var(--weight-semibold); text-transform:uppercase; letter-spacing:.06em; color:var(--text-muted); }
.tb-recon__node--result .tb-recon__nlab{ color:var(--positive); }
.tb-recon__nval{ font-family:var(--font-mono); font-variant-numeric:tabular-nums; font-size:var(--text-lg); color:var(--text-strong); letter-spacing:-0.01em; }
.tb-recon__op{ display:flex; align-items:center; justify-content:center; flex:none; width:1.6rem; color:var(--text-faint); }
.tb-recon__op b{ font-family:var(--font-mono); font-size:var(--text-lg); color:var(--accent); font-weight:600; }
.tb-recon__op svg{ width:18px; height:18px; stroke-width:var(--icon-stroke); }
.tb-recon__foot{ display:flex; align-items:center; gap:.55em; margin-top:var(--space-5); font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--positive); }
.tb-recon__foot svg{ width:17px; height:17px; stroke-width:2.2; }
@media (prefers-reduced-motion: no-preference){
  .tb-recon[data-animate="true"] .tb-recon__node, .tb-recon[data-animate="true"] .tb-recon__op{ opacity:0; transform:translateY(6px); }
  .tb-recon[data-animate="true"].is-in .tb-recon__node, .tb-recon[data-animate="true"].is-in .tb-recon__op{ opacity:1; transform:none; transition:opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out); }
  .tb-recon[data-animate="true"].is-in .tb-recon__steps > *{ transition-delay:calc(var(--i,0) * 90ms); }
}
@media (max-width:560px){ .tb-recon__steps{ flex-direction:column; } .tb-recon__op{ width:auto; height:1.4rem; transform:rotate(90deg); } }
`;
if (typeof document !== "undefined" && !document.getElementById("tb-recon-css")) {
  const s = document.createElement("style");
  s.id = "tb-recon-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ArrowR = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));

/**
 * ReconciliationFlow — book balance → adjustments → bank balance, reconciled.
 * `steps`: array of { label, value, op } — op ("+", "−", "=", "→") shows on the
 * connector BEFORE the node. Mark the final node with result:true for the tie-out.
 */
function ReconciliationFlow({
  caption = "Reconciliation",
  steps = [],
  tieLabel = "Reconciled — balances agree",
  animate = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.25
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  let nodeIdx = 0;
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    className: ["tb-recon", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), /*#__PURE__*/React.createElement("figcaption", {
    className: "tb-recon__cap"
  }, caption), /*#__PURE__*/React.createElement("div", {
    className: "tb-recon__steps"
  }, steps.map((s, i) => {
    const node = /*#__PURE__*/React.createElement("div", {
      className: ["tb-recon__node", s.result ? "tb-recon__node--result" : ""].join(" "),
      style: {
        "--i": nodeIdx++
      },
      key: `n${i}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "tb-recon__nlab"
    }, s.label), /*#__PURE__*/React.createElement("span", {
      className: "tb-recon__nval"
    }, s.value));
    if (i === 0) return node;
    const op = /*#__PURE__*/React.createElement("div", {
      className: "tb-recon__op",
      key: `o${i}`,
      "aria-hidden": "true"
    }, s.op && s.op !== "→" ? /*#__PURE__*/React.createElement("b", null, s.op) : ArrowR);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, op, node);
  })), tieLabel && /*#__PURE__*/React.createElement("figcaption", {
    className: "tb-recon__foot"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), tieLabel));
}
Object.assign(__ds_scope, { ReconciliationFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/ReconciliationFlow.jsx", error: String((e && e.message) || e) }); }

// components/ledger/StateMap.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-map{ font-family:var(--font-sans); width:100%; }
.tb-map__svg{ width:100%; height:auto; display:block; overflow:visible; }
.tb-map__fill{ fill:var(--accent-soft); }
.tb-map__rule{ stroke:var(--accent); opacity:.16; stroke-width:1; }
.tb-map__outline{ fill:none; stroke:var(--accent); stroke-width:2; stroke-linejoin:round; }
.tb-map__pin{ fill:var(--accent); }
.tb-map__pin-ring{ fill:none; stroke:var(--accent); stroke-width:1.5; opacity:.4; }
.tb-map__label{ font-family:var(--font-mono); font-size:11px; fill:var(--text-body); letter-spacing:.02em; }
.tb-map__label--lead{ fill:var(--text-strong); font-weight:600; }
.tb-map--ink .tb-map__fill{ fill:rgba(255,255,255,.05); }
.tb-map--ink .tb-map__rule{ stroke:#fff; opacity:.1; }
.tb-map--ink .tb-map__outline{ stroke:var(--accent-on-ink); }
.tb-map--ink .tb-map__pin{ fill:var(--accent-on-ink); }
.tb-map--ink .tb-map__pin-ring{ stroke:var(--accent-on-ink); }
.tb-map--ink .tb-map__label{ fill:var(--text-on-ink); }
.tb-map--ink .tb-map__label--lead{ fill:#fff; }
@media (prefers-reduced-motion: no-preference){
  .tb-map[data-animate="true"] .tb-map__outline{ stroke-dasharray:1; stroke-dashoffset:1; }
  .tb-map[data-animate="true"].is-in .tb-map__outline{ animation:tb-draw var(--dur-draw) var(--ease-out) forwards; }
  .tb-map[data-animate="true"] .tb-map__pin, .tb-map[data-animate="true"] .tb-map__pin-ring{ opacity:0; }
  .tb-map[data-animate="true"].is-in .tb-map__pin{ animation:tb-pop var(--dur) var(--ease-out) forwards; animation-delay:var(--dur-draw); }
  .tb-map[data-animate="true"].is-in .tb-map__pin-ring{ animation:tb-ring var(--dur-slower) var(--ease-out) infinite; animation-delay:var(--dur-draw); }
}
@keyframes tb-pop{ to{ opacity:1; } }
@keyframes tb-ring{ 0%{ opacity:.4; r:6px; } 70%,100%{ opacity:0; r:15px; } }

/* New York silhouette (stylized — recognizable, not survey-accurate). */
`;
if (typeof document !== "undefined" && !document.getElementById("tb-map-css")) {
  const s = document.createElement("style");
  s.id = "tb-map-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const NY_PATH = "M40 196 L46 150 L60 120 L96 98 L150 82 L210 72 L262 62 L300 48 L332 66 L322 104 L314 150 L306 186 L300 206 L360 206 L388 210 L388 218 L330 221 L300 220 L294 228 L70 206 Z";
const NY_PINS = [{
  x: 300,
  y: 205,
  label: "New York City",
  lead: true
}, {
  x: 300,
  y: 150,
  label: "Albany"
}, {
  x: 178,
  y: 104,
  label: "Syracuse"
}, {
  x: 120,
  y: 116,
  label: "Rochester"
}, {
  x: 62,
  y: 150,
  label: "Buffalo"
}];

/**
 * StateMap — a clean state silhouette filled with a clipped ledger-grid (the
 * "ledger-as-place" signature) plus city pins. Defaults to New York; pass `path`
 * + `pins` + `viewBox` for any state. `tone="ink"` for the dark location hero.
 */
function StateMap({
  path = NY_PATH,
  pins = NY_PINS,
  viewBox = "0 0 430 250",
  tone = "default",
  ledgerGrid = true,
  animate = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.25
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const clipId = React.useMemo(() => "tbmap-" + Math.random().toString(36).slice(2, 8), []);
  const [,, vbW] = viewBox.split(" ").map(Number);
  const rules = [];
  if (ledgerGrid) for (let x = 16; x < vbW; x += 22) rules.push(x);
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    className: ["tb-map", tone === "ink" ? "tb-map--ink" : "", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false",
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "tb-map__svg",
    viewBox: viewBox,
    role: "img",
    "aria-label": "Map of the service area"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/React.createElement("path", {
    d: path
  }))), /*#__PURE__*/React.createElement("path", {
    className: "tb-map__fill",
    d: path
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#${clipId})`
  }, rules.map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    className: "tb-map__rule",
    x1: x,
    y1: "0",
    x2: x,
    y2: "260"
  }))), /*#__PURE__*/React.createElement("path", {
    className: "tb-map__outline",
    pathLength: "1",
    d: path
  }), pins.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    className: "tb-map__pin-ring",
    cx: p.x,
    cy: p.y,
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "tb-map__pin",
    cx: p.x,
    cy: p.y,
    r: p.lead ? 4 : 3
  }), /*#__PURE__*/React.createElement("text", {
    className: ["tb-map__label", p.lead ? "tb-map__label--lead" : ""].join(" "),
    x: p.x + 9,
    y: p.y + 4
  }, p.label)))));
}
Object.assign(__ds_scope, { StateMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/StateMap.jsx", error: String((e && e.message) || e) }); }

// components/ledger/TAccount.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tb-tacct{
  font-family:var(--font-sans);
  background:var(--ledger-paper); border:1px solid var(--border-subtle);
  border-radius:var(--radius-figure); box-shadow:var(--shadow-card);
  padding:var(--space-6); max-width:30rem;
}
.tb-tacct__head{ display:flex; align-items:baseline; justify-content:space-between; gap:1rem; margin-bottom:var(--space-5); }
.tb-tacct__title{ font-size:var(--text-lg); font-weight:var(--weight-semibold); color:var(--text-strong); letter-spacing:-0.01em; }
.tb-tacct__sub{ font-family:var(--font-mono); font-size:var(--text-xs); color:var(--text-muted); text-transform:uppercase; letter-spacing:.08em; }
.tb-tacct__t{ position:relative; border-top:var(--rule-bold) solid var(--ledger-rule); }
.tb-tacct__cols{ display:grid; grid-template-columns:1fr 1fr; }
.tb-tacct__cols::before{ content:""; position:absolute; top:0; bottom:0; left:50%; width:var(--rule); background:var(--ledger-rule); transform:translateX(-50%); }
.tb-tacct__col{ padding:var(--space-3) var(--space-4) 0; }
.tb-tacct__col--c{ padding-left:var(--space-5); }
.tb-tacct__lab{ font-size:var(--text-xs); font-weight:var(--weight-semibold); text-transform:uppercase; letter-spacing:.08em; color:var(--text-muted); margin-bottom:var(--space-2); }
.tb-tacct__col--c .tb-tacct__lab{ color:var(--ledger-credit); }
.tb-tacct__row{ display:flex; justify-content:space-between; gap:1rem; padding:var(--space-2) 0; font-size:var(--text-sm); color:var(--text-body); }
.tb-tacct__row span:first-child{ color:var(--text-muted); }
.tb-tacct__amt{ font-family:var(--font-mono); font-variant-numeric:tabular-nums; color:var(--text-strong); }
.tb-tacct__col--c .tb-tacct__amt{ color:var(--ledger-credit); }
.tb-tacct__totals{ display:grid; grid-template-columns:1fr 1fr; border-top:var(--rule) solid var(--ledger-rule); margin-top:var(--space-2); }
.tb-tacct__total{ display:flex; justify-content:space-between; gap:1rem; padding:var(--space-3) var(--space-4); font-size:var(--text-sm); font-weight:var(--weight-semibold); }
.tb-tacct__total span:first-child{ color:var(--text-muted); font-weight:var(--weight-medium); }
.tb-tacct__total .tb-tacct__amt{ color:var(--text-strong); }
.tb-tacct__total--c{ padding-left:var(--space-5); }
.tb-tacct__foot{ display:flex; align-items:center; gap:.6em; margin-top:var(--space-5); font-size:var(--text-sm); font-weight:var(--weight-semibold); }
.tb-tacct__foot svg{ width:18px; height:18px; stroke-width:2.2; flex:none; }
.tb-tacct__foot--tied{ color:var(--positive); }
.tb-tacct__foot--off{ color:var(--negative); }
.tb-tacct__foot .tb-tacct__amt{ font-weight:var(--weight-semibold); }
@media (prefers-reduced-motion: no-preference){
  .tb-tacct[data-animate="true"] .tb-tacct__foot{ opacity:0; transform:translateY(4px); transition:opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out); }
  .tb-tacct[data-animate="true"].is-in .tb-tacct__foot{ opacity:1; transform:none; }
}
`;
if (typeof document !== "undefined" && !document.getElementById("tb-tacct-css")) {
  const s = document.createElement("style");
  s.id = "tb-tacct-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const fmt = n => typeof n === "number" ? n.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}) : n;
const sum = rows => rows.reduce((a, r) => a + (typeof r.amount === "number" ? r.amount : 0), 0);

/**
 * TAccount — the signature figure. A ruled T with debit/credit columns,
 * mono tabular figures, and a tie-out footer (green tick balanced / red flag off).
 */
function TAccount({
  title = "Account",
  account = null,
  debits = [],
  credits = [],
  showTotals = true,
  animate = false,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate || !ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.3
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [animate]);
  const dTot = sum(debits),
    cTot = sum(credits);
  const variance = dTot - cTot;
  const tied = Math.abs(variance) < 0.005;
  return /*#__PURE__*/React.createElement("figure", _extends({
    ref: ref,
    className: ["tb-tacct", inView ? "is-in" : "", className].filter(Boolean).join(" "),
    "data-animate": animate ? "true" : "false"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__title"
  }, title), account && /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__sub"
  }, account)), /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__lab"
  }, "Debit"), debits.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__amt"
  }, fmt(r.amount))))), /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__col tb-tacct__col--c"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__lab"
  }, "Credit"), credits.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__amt"
  }, fmt(r.amount)))))), showTotals && /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__totals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__total"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__amt"
  }, fmt(dTot))), /*#__PURE__*/React.createElement("div", {
    className: "tb-tacct__total tb-tacct__total--c"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__amt"
  }, fmt(cTot))))), /*#__PURE__*/React.createElement("figcaption", {
    className: ["tb-tacct__foot", tied ? "tb-tacct__foot--tied" : "tb-tacct__foot--off"].join(" ")
  }, tied ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), " Tied out \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__amt"
  }, "$0.00"), " variance") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  })), " Out of balance \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "tb-tacct__amt"
  }, "$", fmt(Math.abs(variance))))));
}
Object.assign(__ds_scope, { TAccount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ledger/TAccount.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/app.js
try { (() => {
// TechBrot UI-kit shell — page switcher + chrome around each per-type screen.
const SWITCH_CSS = `
.kit-toolbar{ position:sticky; top:0; z-index:80; background:var(--surface-ink); color:#fff; font-family:var(--font-sans); }
.kit-toolbar__inner{ max-width:var(--width-full); margin:0 auto; padding:.5rem var(--gutter); display:flex; align-items:center; gap:.75rem; overflow-x:auto; }
.kit-toolbar__lab{ font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.1em; color:var(--text-on-ink-mut); font-weight:600; white-space:nowrap; padding-right:.5rem; border-right:1px solid var(--border-ink); }
.kit-tab{ font:inherit; font-size:var(--text-sm); font-weight:500; color:var(--text-on-ink-mut); background:none; border:none; cursor:pointer; padding:.4rem .7rem; border-radius:var(--radius-pill); white-space:nowrap; transition:var(--transition-control); }
.kit-tab:hover{ color:#fff; background:rgba(255,255,255,.08); }
.kit-tab[aria-current="true"]{ color:var(--c-ink-950); background:#fff; }
.kit-stage{ min-height:60vh; }
@media (max-width:960px){ .kit-stage{ padding-bottom:5rem; } }
`;
if (!document.getElementById("kit-switch-css")) {
  const s = document.createElement("style");
  s.id = "kit-switch-css";
  s.textContent = SWITCH_CSS;
  document.head.appendChild(s);
}
const KIT_PAGES = [{
  id: "home",
  label: "Home",
  C: window.HomePage
}, {
  id: "hub",
  label: "Hub / silo",
  C: window.HubPage
}, {
  id: "money",
  label: "Money / bofu",
  C: window.MoneyPage
}, {
  id: "product",
  label: "Product / mofu",
  C: window.ProductPage
}, {
  id: "comparison",
  label: "Comparison",
  C: window.ComparisonPage
}, {
  id: "guide",
  label: "Guide",
  C: window.GuidePage
}, {
  id: "pillar",
  label: "State pillar",
  C: window.PillarPage
}, {
  id: "location",
  label: "Location child",
  C: window.LocationChildPage
}, {
  id: "filereview",
  label: "File review",
  C: window.FileReviewPage
}, {
  id: "contact",
  label: "Contact",
  C: window.ContactPage
}, {
  id: "legal",
  label: "Legal",
  C: window.LegalPage
}, {
  id: "error",
  label: "404",
  C: window.ErrorPage
}];
function App() {
  const [page, setPage] = React.useState(() => {
    try {
      return localStorage.getItem("tb-kit-page") || "home";
    } catch (e) {
      return "home";
    }
  });
  const go = React.useCallback(p => {
    setPage(p);
    try {
      localStorage.setItem("tb-kit-page", p);
    } catch (e) {}
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);
  const entry = KIT_PAGES.find(p => p.id === page) || KIT_PAGES[0];
  const Page = entry.C;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "kit-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-toolbar__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-toolbar__lab"
  }, "Per-type screens"), KIT_PAGES.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "kit-tab",
    "aria-current": page === p.id ? "true" : undefined,
    onClick: () => go(p.id)
  }, p.label)))), /*#__PURE__*/React.createElement(window.Header, {
    onNavigate: go
  }), /*#__PURE__*/React.createElement("main", {
    className: "kit-stage"
  }, Page ? /*#__PURE__*/React.createElement(Page, {
    go: go
  }) : null), /*#__PURE__*/React.createElement(window.Footer, {
    onNavigate: go
  }), /*#__PURE__*/React.createElement(window.CallBar, {
    onNavigate: go
  }));
}
const _tbKitRoot = document.getElementById("tb-kit-root");
if (_tbKitRoot && window.HomePage && !window.__tbKitMounted) {
  window.__tbKitMounted = true;
  ReactDOM.createRoot(_tbKitRoot).render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/app.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/chrome.js
try { (() => {
// TechBrot marketing-site chrome: Header + mega-menu, Footer (mobile accordion), CallBar.
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const Ic = window.TBIcons;
  const PHONE_DISPLAY = "(877) 751-5575";
  const PHONE_TEL = "tel:+18777515575";
  const CHROME_CSS = `
.mk-header{ position:sticky; top:0; z-index:50; background:color-mix(in srgb, var(--surface-page) 82%, transparent); backdrop-filter:saturate(1.4) blur(12px); border-bottom:1px solid var(--border-subtle); font-family:var(--font-sans); }
.mk-header__bar{ max-width:var(--width-full); margin:0 auto; padding:0 var(--gutter); height:4.5rem; display:flex; align-items:center; gap:var(--space-6); }
.mk-logo{ display:inline-flex; align-items:center; gap:.6rem; text-decoration:none; flex:none; }
.mk-logo img{ width:34px; height:34px; }
.mk-logo b{ font-size:1.35rem; font-weight:600; letter-spacing:-0.02em; color:var(--text-strong); }
.mk-logo b span{ color:var(--accent); }
.mk-nav{ display:flex; align-items:center; gap:var(--space-1); margin-left:var(--space-2); }
.mk-nav__item{ position:relative; }
.mk-nav__btn{ display:inline-flex; align-items:center; gap:.3rem; font:inherit; font-size:var(--text-base); font-weight:var(--weight-medium); color:var(--text-body); background:none; border:none; cursor:pointer; padding:.55rem .7rem; border-radius:var(--radius-sm); text-decoration:none; }
.mk-nav__btn:hover{ color:var(--text-strong); background:var(--surface-subtle); }
.mk-nav__btn[aria-expanded="true"]{ color:var(--text-accent); }
.mk-nav__btn svg{ width:15px; height:15px; transition:transform var(--dur) var(--ease-out); }
.mk-nav__btn[aria-expanded="true"] svg{ transform:rotate(180deg); }
.mk-spacer{ flex:1; }
.mk-header__cta{ display:flex; align-items:center; gap:var(--space-3); flex:none; }
.mk-phone{ display:inline-flex; align-items:center; gap:.45rem; font-family:var(--font-mono); font-weight:600; color:var(--text-strong); text-decoration:none; font-size:var(--text-base); }
.mk-phone svg{ width:17px; height:17px; color:var(--accent); }
.mk-cta-btn{ display:inline-flex; align-items:center; gap:.45rem; background:var(--accent); color:#fff; text-decoration:none; font-weight:600; padding:0 1.1rem; height:2.75rem; border-radius:var(--radius-control); font-size:var(--text-base); transition:var(--transition-control); }
.mk-cta-btn:hover{ background:var(--accent-hover); }
.mk-cta-btn svg{ width:17px; height:17px; }
.mk-burger{ display:none; }
.mk-utilbar{ background:var(--surface-inset); border-bottom:1px solid var(--border-subtle); font-size:var(--text-xs); }
.mk-utilbar__in{ max-width:var(--width-full); margin:0 auto; padding:.4rem var(--gutter); display:flex; justify-content:space-between; align-items:center; gap:1rem; color:var(--text-muted); }
.mk-utilbar a{ color:var(--text-muted); text-decoration:none; }
.mk-utilbar a:hover{ color:var(--text-accent); }
.mk-utilbar nav{ display:flex; gap:.5rem; align-items:center; }
@media (max-width:760px){ .mk-utilbar{ display:none; } }

/* mega panel */
.mk-mega{ position:absolute; top:calc(100% + .5rem); left:var(--gutter); right:var(--gutter); max-width:min(50vw,var(--width-wide)); margin:0 auto;
  background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-panel); box-shadow:var(--shadow-pop);
  padding:var(--space-6); display:grid; grid-template-columns:1.4fr 1fr; gap:var(--space-6); z-index:60; }
.mk-mega__cols{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-2) var(--space-6); align-content:start; }
.mk-mega__link{ display:flex; gap:.7rem; align-items:flex-start; padding:.6rem; border-radius:var(--radius-md); text-decoration:none; }
.mk-mega__link:hover{ background:var(--surface-subtle); }
.mk-mega__link svg{ width:20px; height:20px; color:var(--accent); flex:none; margin-top:2px; }
.mk-mega__link b{ display:block; color:var(--text-strong); font-size:var(--text-base); font-weight:var(--weight-semibold); }
.mk-mega__link span{ color:var(--text-muted); font-size:var(--text-sm); line-height:1.35; }
.mk-mega__feature{ background:var(--surface-ink); border-radius:var(--radius-lg); padding:var(--space-5); color:#fff; display:flex; flex-direction:column; gap:.6rem; }
.mk-mega__feature .e{ font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.09em; color:var(--accent-on-ink); font-weight:600; }
.mk-mega__feature b{ font-size:var(--text-lg); font-weight:600; letter-spacing:-0.01em; }
.mk-mega__feature p{ font-size:var(--text-sm); color:var(--text-on-ink-mut); line-height:1.5; }
.mk-mega__feature a{ margin-top:auto; color:#fff; font-weight:600; font-size:var(--text-sm); display:inline-flex; gap:.35rem; align-items:center; }
.mk-mega__feature a svg{ width:15px; height:15px; }
.mk-scrim{ position:fixed; inset:4.5rem 0 0; z-index:40; background:rgba(10,15,28,.18); }

/* mobile drawer */
.mk-drawer{ display:none; }
@media (max-width: 960px){
  .mk-nav, .mk-header__cta .mk-phone, .mk-header__cta .mk-cta-btn{ display:none; }
  .mk-burger{ display:inline-flex; }
  .mk-drawer{ display:block; position:fixed; inset:4.5rem 0 0; background:var(--surface-page); z-index:55; overflow-y:auto; padding:var(--gutter); }
  .mk-drawer__group{ border-bottom:1px solid var(--border-subtle); }
  .mk-drawer__sum{ display:flex; justify-content:space-between; align-items:center; padding:1rem .25rem; font-size:var(--text-lg); font-weight:600; color:var(--text-strong); list-style:none; cursor:pointer; min-height:var(--tap-min); }
  .mk-drawer__sum::-webkit-details-marker{ display:none; }
  .mk-drawer__sum svg{ width:18px; height:18px; color:var(--text-muted); transition:transform var(--dur); }
  .mk-drawer details[open] .mk-drawer__sum svg{ transform:rotate(180deg); }
  .mk-drawer__links{ display:flex; flex-direction:column; gap:.25rem; padding:0 .25rem 1rem; }
  .mk-drawer__links a{ padding:.6rem 0; color:var(--text-body); text-decoration:none; min-height:var(--tap-min); display:flex; align-items:center; }
  .mk-drawer__cta{ margin-top:1.5rem; display:flex; flex-direction:column; gap:.75rem; }
}

/* call bar (sticky mobile) */
.mk-callbar{ display:none; }
@media (max-width: 960px){
  .mk-callbar{ display:flex; position:fixed; left:0; right:0; bottom:0; z-index:45; gap:.75rem; padding:.75rem var(--gutter) calc(.75rem + env(safe-area-inset-bottom)); background:color-mix(in srgb, var(--surface-page) 90%, transparent); backdrop-filter:blur(12px); border-top:1px solid var(--border-subtle); }
  .mk-callbar a{ flex:1; display:inline-flex; align-items:center; justify-content:center; gap:.5rem; height:3rem; border-radius:var(--radius-control); font-weight:600; text-decoration:none; font-size:var(--text-base); }
  .mk-callbar__call{ background:var(--accent); color:#fff; }
  .mk-callbar__rev{ background:var(--surface-card); color:var(--text-strong); border:1px solid var(--border-default); }
  .mk-callbar svg{ width:18px; height:18px; }
}

/* footer */
.mk-footer{ background:var(--surface-subtle); border-top:1px solid var(--border-subtle); font-family:var(--font-sans); margin-top:var(--section-y); }
.mk-footer__inner{ max-width:var(--width-full); margin:0 auto; padding:var(--section-y-tight) var(--gutter) var(--space-10); }
.mk-footer__top{ display:grid; grid-template-columns:1.4fr repeat(4,1fr); gap:var(--space-8); }
.mk-footer__brand .mk-logo b{ color:var(--text-strong); }
.mk-footer__brand p{ font-size:var(--text-sm); color:var(--text-muted); line-height:1.6; margin-top:var(--space-3); max-width:30ch; }
.mk-footer__col h4{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); margin-bottom:var(--space-3); }
.mk-footer__col a{ display:block; font-size:var(--text-sm); color:var(--text-muted); text-decoration:none; padding:.3rem 0; min-height:1.5rem; }
.mk-footer__col a:hover{ color:var(--text-accent); }
.mk-footer__bottom{ display:flex; flex-wrap:wrap; justify-content:space-between; gap:var(--space-4); margin-top:var(--space-10); padding-top:var(--space-6); border-top:1px solid var(--border-subtle); font-size:var(--text-sm); color:var(--text-muted); }
.mk-footer__legal{ display:flex; flex-wrap:wrap; gap:var(--space-2) var(--space-5); }
.mk-footer__legal a{ color:var(--text-muted); text-decoration:none; }
.mk-footer__disc{ max-width:64ch; line-height:1.6; }
.mk-footer__sum{ display:none; }
@media (max-width: 760px){
  .mk-footer__top{ grid-template-columns:1fr; gap:0; }
  .mk-footer__brand{ margin-bottom:var(--space-6); }
  .mk-footer__col{ border-top:1px solid var(--border-subtle); }
  .mk-footer__col h4{ display:none; }
  .mk-footer__sum{ display:flex; justify-content:space-between; align-items:center; padding:1rem 0; font-size:var(--text-base); font-weight:600; color:var(--text-strong); cursor:pointer; list-style:none; min-height:var(--tap-min); }
  .mk-footer__sum::-webkit-details-marker{ display:none; }
  .mk-footer__sum svg{ width:18px; height:18px; transition:transform var(--dur); }
  .mk-footer__col details[open] .mk-footer__sum svg{ transform:rotate(180deg); }
  .mk-footer__col a{ padding:.5rem 0; }
  .mk-footer__col details:not([open]) a{ display:none; }
}
`;
  if (!document.getElementById("mk-chrome-css")) {
    const s = document.createElement("style");
    s.id = "mk-chrome-css";
    s.textContent = CHROME_CSS;
    document.head.appendChild(s);
  }
  const MENUS = {
    Accounting: {
      links: [{
        icon: "receipt",
        t: "Monthly bookkeeping",
        s: "Recurring close, weekly cadence."
      }, {
        icon: "broom",
        t: "Cleanup bookkeeping",
        s: "Books out of order, rebuilt."
      }, {
        icon: "clock",
        t: "Catch-up bookkeeping",
        s: "Months or years behind."
      }, {
        icon: "users",
        t: "Payroll management",
        s: "Multi-state payroll, run right."
      }, {
        icon: "scale",
        t: "Sales tax compliance",
        s: "Nexus, filing, and cleanup."
      }, {
        icon: "trendingUp",
        t: "Fractional CFO",
        s: "Advisory and forecasting."
      }],
      feature: {
        e: "Not sure where to start",
        b: "Free QuickBooks file review",
        p: "Send your file — a ProAdvisor tells you exactly what's off.",
        cta: "Start a review"
      }
    },
    QuickBooks: {
      links: [{
        icon: "layers",
        t: "Setup & onboarding",
        s: "A correct chart of accounts from day one."
      }, {
        icon: "broom",
        t: "File cleanup",
        s: "Reconcile a broken file."
      }, {
        icon: "refresh",
        t: "Desktop → Online migration",
        s: "Move platforms, keep history."
      }, {
        icon: "alert",
        t: "QuickBooks help",
        s: "H202, balance, and sync issues."
      }, {
        icon: "receipt",
        t: "QuickBooks Payroll",
        s: "Payroll inside QuickBooks."
      }, {
        icon: "users",
        t: "Speak to a ProAdvisor",
        s: "Talk through your situation."
      }],
      feature: {
        e: "Independent firm",
        b: "We're not Intuit",
        p: "Certified ProAdvisors who fix the books inside your file. Billing issues go to Intuit.",
        cta: "How we help"
      }
    },
    "Why TechBrot": {
      links: [{
        icon: "shieldCheck",
        t: "Trust & standards",
        s: "How we protect your books."
      }, {
        icon: "layers",
        t: "Our methodology",
        s: "The five-phase engagement model."
      }, {
        icon: "fileCheck",
        t: "Client reviews",
        s: "Verified on Clutch."
      }, {
        icon: "scale",
        t: "Comparisons",
        s: "Honest — including where they win."
      }, {
        icon: "users",
        t: "About & team",
        s: "Certified ProAdvisors, by name."
      }],
      feature: {
        e: "Fair by design",
        b: "Where competitors win",
        p: "We tell you when another option fits better. Trust is the point.",
        cta: "See comparisons"
      }
    }
  };
  function MegaPanel({
    data,
    onNav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mk-mega",
      role: "menu"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-mega__cols"
    }, data.links.map((l, i) => {
      const I = Ic[l.icon];
      return /*#__PURE__*/React.createElement("a", {
        className: "mk-mega__link",
        href: "#",
        key: i,
        onClick: e => {
          e.preventDefault();
          onNav && onNav();
        }
      }, /*#__PURE__*/React.createElement(I, null), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, l.t), /*#__PURE__*/React.createElement("span", null, l.s)));
    })), /*#__PURE__*/React.createElement("div", {
      className: "mk-mega__feature"
    }, /*#__PURE__*/React.createElement("span", {
      className: "e"
    }, data.feature.e), /*#__PURE__*/React.createElement("b", null, data.feature.b), /*#__PURE__*/React.createElement("p", null, data.feature.p), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav && onNav();
      }
    }, data.feature.cta, " ", /*#__PURE__*/React.createElement(Ic.arrowRight, null))));
  }
  function Header({
    onNavigate
  }) {
    const [open, setOpen] = useState(null);
    const [drawer, setDrawer] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      const h = e => {
        if (ref.current && !ref.current.contains(e.target)) setOpen(null);
      };
      document.addEventListener("click", h);
      return () => document.removeEventListener("click", h);
    }, []);
    const go = page => {
      setOpen(null);
      setDrawer(false);
      onNavigate && onNavigate(page);
    };
    return /*#__PURE__*/React.createElement("header", {
      className: "mk-header",
      ref: ref
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-utilbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-utilbar__in"
    }, /*#__PURE__*/React.createElement("span", null, "Independent Certified QuickBooks ProAdvisor firm \xB7 U.S.-based"), /*#__PURE__*/React.createElement("nav", {
      "aria-label": "For accountants and partners"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("pillar");
      }
    }, "Find an Accountant"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("contact");
      }
    }, "For Accountants \u2192")))), /*#__PURE__*/React.createElement("div", {
      className: "mk-header__bar"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mk-logo",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/techbrot-monogram.svg",
      alt: ""
    }), /*#__PURE__*/React.createElement("b", null, "Tech", /*#__PURE__*/React.createElement("span", null, "Brot"))), /*#__PURE__*/React.createElement("nav", {
      className: "mk-nav",
      "aria-label": "Primary"
    }, ["Accounting", "QuickBooks"].map(k => /*#__PURE__*/React.createElement("div", {
      className: "mk-nav__item",
      key: k
    }, /*#__PURE__*/React.createElement("button", {
      className: "mk-nav__btn",
      "aria-expanded": open === k,
      onClick: () => setOpen(open === k ? null : k)
    }, k, " ", /*#__PURE__*/React.createElement(Ic.chevronDown, null)))), /*#__PURE__*/React.createElement("a", {
      className: "mk-nav__btn",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("pillar");
      }
    }, "Find an Accountant"), /*#__PURE__*/React.createElement("a", {
      className: "mk-nav__btn",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("money");
      }
    }, "Pricing"), /*#__PURE__*/React.createElement("div", {
      className: "mk-nav__item"
    }, /*#__PURE__*/React.createElement("button", {
      className: "mk-nav__btn",
      "aria-expanded": open === "Why TechBrot",
      onClick: () => setOpen(open === "Why TechBrot" ? null : "Why TechBrot")
    }, "Why TechBrot ", /*#__PURE__*/React.createElement(Ic.chevronDown, null)))), /*#__PURE__*/React.createElement("div", {
      className: "mk-spacer"
    }), /*#__PURE__*/React.createElement("div", {
      className: "mk-header__cta"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mk-phone",
      href: PHONE_TEL
    }, /*#__PURE__*/React.createElement(Ic.phone, null), PHONE_DISPLAY), /*#__PURE__*/React.createElement("a", {
      className: "mk-cta-btn",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("contact");
      }
    }, "Book the discovery call"), /*#__PURE__*/React.createElement("button", {
      className: "mk-cta-btn mk-burger",
      "aria-label": "Menu",
      onClick: () => setDrawer(!drawer),
      style: {
        background: "var(--surface-card)",
        color: "var(--text-strong)",
        border: "1px solid var(--border-default)",
        padding: 0,
        width: "2.75rem"
      }
    }, drawer ? /*#__PURE__*/React.createElement(Ic.x, null) : /*#__PURE__*/React.createElement(Ic.menu, null)))), open && /*#__PURE__*/React.createElement(MegaPanel, {
      data: MENUS[open],
      onNav: () => go(open === "Why TechBrot" ? "comparison" : "hub")
    }), open && /*#__PURE__*/React.createElement("div", {
      className: "mk-scrim",
      onClick: () => setOpen(null)
    }), drawer && /*#__PURE__*/React.createElement("div", {
      className: "mk-drawer"
    }, Object.entries(MENUS).map(([k, v]) => /*#__PURE__*/React.createElement("details", {
      className: "mk-drawer__group",
      key: k
    }, /*#__PURE__*/React.createElement("summary", {
      className: "mk-drawer__sum"
    }, k, " ", /*#__PURE__*/React.createElement(Ic.chevronDown, null)), /*#__PURE__*/React.createElement("div", {
      className: "mk-drawer__links"
    }, v.links.map((l, i) => /*#__PURE__*/React.createElement("a", {
      href: "#",
      key: i,
      onClick: e => {
        e.preventDefault();
        go("money");
      }
    }, l.t))))), /*#__PURE__*/React.createElement("a", {
      className: "mk-drawer__sum",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("pillar");
      },
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, "Find an Accountant"), /*#__PURE__*/React.createElement("a", {
      className: "mk-drawer__sum",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("money");
      },
      style: {
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, "Pricing"), /*#__PURE__*/React.createElement("div", {
      className: "mk-drawer__cta"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mk-cta-btn",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("contact");
      },
      style: {
        justifyContent: "center"
      }
    }, "Book the discovery call"), /*#__PURE__*/React.createElement("a", {
      className: "mk-cta-btn",
      href: PHONE_TEL,
      style: {
        justifyContent: "center",
        background: "var(--surface-card)",
        color: "var(--text-strong)",
        border: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement(Ic.phone, null), "Call ", PHONE_DISPLAY))));
  }
  function CallBar({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mk-callbar"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mk-callbar__call",
      href: PHONE_TEL
    }, /*#__PURE__*/React.createElement(Ic.phone, null), "Call now"), /*#__PURE__*/React.createElement("a", {
      className: "mk-callbar__rev",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("filereview");
      }
    }, /*#__PURE__*/React.createElement(Ic.fileCheck, null), "Free review"));
  }
  const FOOTER_COLS = [{
    h: "Accounting",
    links: ["Cleanup & catch-up", "Bookkeeping", "Sales tax", "Fractional CFO", "Pricing"]
  }, {
    h: "QuickBooks",
    links: ["Migration", "Setup", "Error help", "Speak to a ProAdvisor", "File review"]
  }, {
    h: "Firm",
    links: ["Find an accountant", "Reviews", "Compare", "Contact", "Resources"]
  }, {
    h: "Legal",
    links: ["Privacy", "Terms", "Disclaimer", "Accessibility"]
  }];
  function Footer({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      className: "mk-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-footer__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-footer__top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mk-footer__brand"
    }, /*#__PURE__*/React.createElement("a", {
      className: "mk-logo",
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("home");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/techbrot-monogram.svg",
      alt: ""
    }), /*#__PURE__*/React.createElement("b", null, "Tech", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)"
      }
    }, "Brot"))), /*#__PURE__*/React.createElement("p", null, "An independent firm of Certified QuickBooks ProAdvisors. We are not Intuit. We help with the work inside your QuickBooks file."), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: "var(--space-4) 0 0",
        display: "flex",
        flexDirection: "column",
        gap: ".35rem",
        fontSize: "var(--text-sm)"
      }
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@techbrot.com",
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, "info@techbrot.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: PHONE_TEL,
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, PHONE_DISPLAY)), /*#__PURE__*/React.createElement("li", {
      style: {
        color: "var(--text-muted)"
      }
    }, "651 N Broad St, Suite 201, Middletown, DE 19709"))), FOOTER_COLS.map(c => /*#__PURE__*/React.createElement("div", {
      className: "mk-footer__col",
      key: c.h
    }, /*#__PURE__*/React.createElement("h4", null, c.h), /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", {
      className: "mk-footer__sum"
    }, c.h, " ", /*#__PURE__*/React.createElement(Ic.chevronDown, null)), c.links.map(l => /*#__PURE__*/React.createElement("a", {
      href: "#",
      key: l,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(c.h === "Legal" ? "legal" : "money");
      }
    }, l)))))), /*#__PURE__*/React.createElement("div", {
      className: "mk-footer__bottom"
    }, /*#__PURE__*/React.createElement("p", {
      className: "mk-footer__disc"
    }, "\xA9 2026 TechBrot Inc. Certified QuickBooks ProAdvisor is a credential held by our team; QuickBooks and Intuit are trademarks of Intuit Inc. We are independent and not affiliated with Intuit."), /*#__PURE__*/React.createElement("div", {
      className: "mk-footer__legal"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("legal");
      }
    }, "Privacy"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("legal");
      }
    }, "Terms"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate("legal");
      }
    }, "Disclaimer")))));
  }
  Object.assign(window, {
    Header,
    Footer,
    CallBar,
    PHONE_DISPLAY,
    PHONE_TEL
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/chrome.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/heroes.js
try { (() => {
// TechBrot per-type heroes — each TYPE gets its own fit-to-purpose hero.
(function () {
  const DS = window.TechBrotDesignSystem_cac950;
  const Ico = window.TBIcons;
  const {
    TAccount,
    ReconciliationFlow,
    DecisionTree,
    DataFigure,
    JudgmentChart,
    LedgerMotif,
    LedgerStack,
    StateMap
  } = DS;
  const {
    Eyebrow: DSEyebrow,
    Button: DSButton,
    Badge: DSBadge,
    TrustRow: DSTrustRow,
    BylineBlock: DSByline,
    GuideTOC: DSToc,
    ErrorBadge: DSErrorBadge,
    Input: DSInput,
    Select: DSSelect,
    Textarea: DSTextarea,
    Checkbox: DSCheckbox,
    ProofStrip: DSProof,
    VsTable: DSVsTable,
    Card: DSCard
  } = DS;
  const HERO_CSS = `
.h-wrap{ max-width:var(--width-full); margin:0 auto; padding:0 var(--gutter); }
.h-pad{ padding-top:var(--section-y); padding-bottom:var(--section-y); }
.h-pad-tight{ padding-top:var(--section-y-tight); padding-bottom:var(--section-y-tight); }

/* shared bits */
.h-eyebrow{ display:inline-flex; align-items:center; gap:.5em; font-size:var(--text-sm); font-weight:600; letter-spacing:var(--tracking-eyebrow); text-transform:uppercase; color:var(--text-accent); }
.h-eyebrow svg{ width:15px; height:15px; }
.h-display{ font-size:var(--display-md); font-weight:600; letter-spacing:var(--tracking-tighter); line-height:1.04; color:var(--text-strong); text-wrap:balance; }
.h-sub{ font-size:var(--text-lg); color:var(--text-body); line-height:var(--leading-snug); max-width:46ch; }
.h-sub .accent{ color:var(--text-accent); font-weight:var(--weight-medium); }
.h-actions{ display:flex; flex-wrap:wrap; gap:var(--space-3); align-items:center; }
.h-callnum{ display:inline-flex; align-items:center; gap:.5rem; font-family:var(--font-mono); font-weight:600; color:var(--text-strong); text-decoration:none; font-size:var(--text-md); }
.h-callnum svg{ width:19px; height:19px; color:var(--accent); }

/* HOME — flagship split */
.h-home{ display:grid; grid-template-columns:1.05fr .95fr; gap:var(--space-12); align-items:center; }
.h-home__copy{ display:flex; flex-direction:column; gap:var(--space-6); }
.h-home .h-display{ font-size:var(--display-lg); }
.h-home__fig{ display:flex; flex-direction:column; gap:var(--space-4); }

/* MONEY — chrome-minimal, centered problem→outcome */
.h-money{ background:var(--surface-subtle); border-bottom:1px solid var(--border-subtle); }
.h-money__inner{ display:grid; grid-template-columns:1fr .9fr; gap:var(--space-10); align-items:center; }
.h-money__copy{ display:flex; flex-direction:column; gap:var(--space-5); }

/* PRODUCT — value + decision diagram */
.h-product{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-10); align-items:center; }
.h-product__copy{ display:flex; flex-direction:column; gap:var(--space-5); }

/* GUIDE — editorial article + TOC */
.h-guide{ display:grid; grid-template-columns:1fr; gap:var(--space-6); max-width:var(--width-content); }
.h-guide .h-title{ font-size:var(--text-4xl); font-weight:600; letter-spacing:-0.02em; line-height:1.1; color:var(--text-strong); max-width:20ch; }
.h-guide__lead{ font-size:var(--text-lg); color:var(--text-body); line-height:var(--leading-snug); max-width:60ch; }

/* PILLAR — state identity (LIGHT) */
.h-pillar{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-10); align-items:center; }
.h-pillar__copy{ display:flex; flex-direction:column; gap:var(--space-5); }
.h-pillar__state{ font-family:var(--font-mono); font-size:var(--text-sm); letter-spacing:.1em; text-transform:uppercase; color:var(--text-accent); display:inline-flex; align-items:center; gap:.5em; }
.h-pillar__state svg{ width:16px; height:16px; }
.h-pillar h1{ font-size:var(--display-sm); letter-spacing:var(--tracking-tighter); line-height:1.06; color:var(--text-strong); }
.h-pillar p{ color:var(--text-body); font-size:var(--text-lg); line-height:var(--leading-snug); max-width:42ch; }
.h-pillar__mapcard{ background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-panel); box-shadow:var(--shadow-card); padding:var(--space-6); }
.h-pillar__mapcard h4{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); margin-bottom:var(--space-4); }

/* HUB — silo landing (LIGHT, 3D focal) */
.h-hub{ display:grid; grid-template-columns:1.05fr .95fr; gap:var(--space-12); align-items:center; }
.h-hub__copy{ display:flex; flex-direction:column; gap:var(--space-6); }
.h-hub__fig{ display:flex; justify-content:center; padding:var(--space-8) 0; }

/* COMPARISON — mofu (LIGHT) */
.h-compare{ display:flex; flex-direction:column; gap:var(--space-6); max-width:var(--width-content); }
.h-compare__copy{ display:flex; flex-direction:column; gap:var(--space-5); max-width:50ch; }

/* LOCATION CHILD — lighter */
.h-loc{ display:flex; flex-direction:column; gap:var(--space-5); max-width:var(--width-content); }
.h-loc__crumb{ font-size:var(--text-sm); color:var(--text-muted); display:flex; gap:.4em; align-items:center; }
.h-loc__crumb a{ color:var(--text-muted); text-decoration:none; }
.h-loc__crumb svg{ width:13px; height:13px; }

/* ERROR — out of balance */
.h-error{ text-align:center; max-width:46rem; margin:0 auto; display:flex; flex-direction:column; align-items:center; gap:var(--space-6); }
.h-error h1{ font-size:var(--display-sm); letter-spacing:-0.02em; }

/* LEGAL — document masthead (no marketing) */
.h-legal{ max-width:var(--width-content); border-bottom:1px solid var(--border-subtle); padding-bottom:var(--space-6); }
.h-legal__kicker{ font-family:var(--font-mono); font-size:var(--text-xs); text-transform:uppercase; letter-spacing:.1em; color:var(--text-muted); }
.h-legal h1{ font-size:var(--text-4xl); letter-spacing:-0.02em; margin:var(--space-3) 0; }
.h-legal__meta{ display:flex; flex-wrap:wrap; gap:var(--space-2) var(--space-5); font-size:var(--text-sm); color:var(--text-muted); }

/* CONVERSION FORM (contact / file-review) */
.h-form{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-12); align-items:start; }
.h-form__copy{ display:flex; flex-direction:column; gap:var(--space-5); }
.h-form__card{ background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-panel); box-shadow:var(--shadow-lg); padding:clamp(1.5rem, 1rem + 2vw, 2.25rem); }
.h-form__card h3{ font-size:var(--text-xl); margin-bottom:var(--space-1); }
.h-form__card .sub{ font-size:var(--text-sm); color:var(--text-muted); margin-bottom:var(--space-5); }
.h-form__grid{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4); }
.h-form__grid > .full{ grid-column:1 / -1; }
.h-form__after{ display:flex; align-items:center; gap:.5em; font-size:var(--text-sm); color:var(--text-muted); margin-top:var(--space-4); }
.h-form__after svg{ width:15px; height:15px; color:var(--positive); }

@media (max-width: 900px){
  .h-home, .h-money__inner, .h-product, .h-pillar, .h-hub, .h-form{ grid-template-columns:1fr; }
  .h-home__fig{ order:-1; }
  .h-display{ font-size:var(--display-sm); }
  .h-home .h-display{ font-size:var(--display-sm); }
}
`;
  if (!document.getElementById("mk-hero-css")) {
    const s = document.createElement("style");
    s.id = "mk-hero-css";
    s.textContent = HERO_CSS;
    document.head.appendChild(s);
  }
  const callBtn = (size = "lg") => /*#__PURE__*/React.createElement(DSButton, {
    as: "a",
    href: window.PHONE_TEL,
    size: size,
    icon: /*#__PURE__*/React.createElement(Ico.phone, null)
  }, "Talk to a ProAdvisor");
  function HomeHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad",
      style: {
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: "-2rem",
        right: "-4rem",
        width: "clamp(20rem,40vw,34rem)",
        opacity: 0.05,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(LedgerMotif, {
      tone: "accent",
      accentTicks: false
    })), /*#__PURE__*/React.createElement("div", {
      className: "h-home",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-home__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.shieldCheck, null), "Independent \xB7 U.S. Certified QuickBooks ProAdvisor firm"), /*#__PURE__*/React.createElement("h1", {
      className: "h-display"
    }, "Automation handles the data entry. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-accent)"
      }
    }, "We handle the judgment.")), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, "Certified QuickBooks ProAdvisors and accountants for U.S. small and mid-sized businesses \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "setup, cleanup, migration, bookkeeping, payroll, and CFO advisory"), ", every engagement fixed-fee against a written scope."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, /*#__PURE__*/React.createElement(DSButton, {
      as: "a",
      href: "#",
      size: "lg",
      icon: /*#__PURE__*/React.createElement(Ico.phone, null),
      onClick: e => {
        e.preventDefault();
        go("contact");
      }
    }, "Book the discovery call"), /*#__PURE__*/React.createElement(DSButton, {
      as: "a",
      href: "#",
      variant: "secondary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Ico.arrowRight, null),
      onClick: e => {
        e.preventDefault();
        go("filereview");
      }
    }, "Get the free file review")), /*#__PURE__*/React.createElement(DSTrustRow, {
      items: ["Independent firm — not Intuit", "Fixed-fee scope", "Reply within one business day"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "h-home__fig",
      style: {
        paddingRight: "var(--space-8)",
        paddingBottom: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(LedgerStack, {
      animate: true
    }), /*#__PURE__*/React.createElement(JudgmentChart, {
      animate: true,
      caption: "The automation line drifts. The judgment line reconciles \u2014 and compounds."
    }))));
  }
  function MoneyHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-money"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-wrap h-pad h-money__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-money__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.broom, null), "Cleanup & catch-up bookkeeping"), /*#__PURE__*/React.createElement("h1", {
      className: "h-display"
    }, "Behind on your books? We get them current \u2014 and reconciled."), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, "Months of catch-up, every account tied out to a known-good state. ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "A Certified ProAdvisor scopes it on the call"), ", at a fixed fee, before any work starts."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, callBtn(), /*#__PURE__*/React.createElement("a", {
      className: "h-callnum",
      href: window.PHONE_TEL
    }, /*#__PURE__*/React.createElement(Ico.phone, null), window.PHONE_DISPLAY)), /*#__PURE__*/React.createElement(DSTrustRow, {
      items: ["No long-term contract", "Fixed-fee scope first", "Your CPA stays in the loop"]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TAccount, {
      title: "A/R suspense",
      account: "before cleanup",
      animate: true,
      debits: [{
        label: "Invoices",
        amount: 18200
      }, {
        label: "Adjustments",
        amount: 640
      }],
      credits: [{
        label: "Payments",
        amount: 15100
      }]
    }))));
  }
  function ProductHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-product"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-product__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.layers, null), "QuickBooks Online"), /*#__PURE__*/React.createElement("h1", {
      className: "h-display"
    }, "Set up right, or cleaned up right."), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, "Whether you're starting fresh or untangling a file someone else built, we make QuickBooks Online match how your business actually works."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, /*#__PURE__*/React.createElement(DSButton, {
      as: "a",
      href: "#",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Ico.arrowRight, null),
      onClick: e => {
        e.preventDefault();
        go("filereview");
      }
    }, "Get a free file review"), /*#__PURE__*/React.createElement("a", {
      className: "h-callnum",
      href: window.PHONE_TEL
    }, /*#__PURE__*/React.createElement(Ico.phone, null), window.PHONE_DISPLAY))), /*#__PURE__*/React.createElement(DecisionTree, {
      question: "Which QuickBooks help do you need?",
      animate: true,
      branches: [{
        cond: "Brand-new file",
        title: "Fresh setup",
        detail: "Chart of accounts built for your business."
      }, {
        cond: "Messy / inherited",
        title: "Setup cleanup",
        detail: "Rebuild the structure, keep the history.",
        recommend: true
      }, {
        cond: "Switching tools",
        title: "Migration",
        detail: "Move to QBO without losing data."
      }]
    })));
  }
  function GuideHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-guide"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.bookOpen, null), "QuickBooks guide"), /*#__PURE__*/React.createElement("h1", {
      className: "h-title"
    }, "QuickBooks reconciliation: a plain-English guide"), /*#__PURE__*/React.createElement("p", {
      className: "h-guide__lead"
    }, "What reconciliation actually proves, why it matters at tax time, and how to fix a file that won't balance \u2014 written by the ProAdvisors who do it every day."), /*#__PURE__*/React.createElement(DSByline, {
      date: "Updated June 2026",
      readingTime: "9 min read",
      markSrc: "../../assets/logo/techbrot-monogram-dark.svg"
    })));
  }
  function PillarHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-pillar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-pillar__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-pillar__state"
    }, /*#__PURE__*/React.createElement(Ico.mapPin, null), "New York \xB7 NYC to Upstate \xB7 all 62 counties"), /*#__PURE__*/React.createElement("h1", null, "QuickBooks ProAdvisors & bookkeeping for New York businesses"), /*#__PURE__*/React.createElement("p", null, "Bookkeeping, QuickBooks setup and cleanup, payroll, and NY sales-tax compliance \u2014 delivered by an independent ProAdvisor firm, scoped at a fixed fee on the call."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, callBtn(), /*#__PURE__*/React.createElement(DSButton, {
      as: "a",
      href: "#form",
      variant: "secondary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Ico.arrowRight, null)
    }, "Send the discovery brief")), /*#__PURE__*/React.createElement(DSTrustRow, {
      items: ["Serving NY statewide", "Independent firm", "Certified ProAdvisor"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "h-pillar__mapcard"
    }, /*#__PURE__*/React.createElement("h4", null, "Local across all 62 counties"), /*#__PURE__*/React.createElement(StateMap, {
      animate: true
    }))));
  }
  function LocationChildHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-loc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-loc__crumb"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("pillar");
      }
    }, "New York"), /*#__PURE__*/React.createElement(Ico.chevronRight, null), /*#__PURE__*/React.createElement("span", null, "Manhattan")), /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.mapPin, null), "Manhattan, NY"), /*#__PURE__*/React.createElement("h1", {
      className: "h-display",
      style: {
        fontSize: "var(--text-4xl)"
      }
    }, "QuickBooks bookkeeping for Manhattan businesses"), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, "Same independent ProAdvisor team, local to Manhattan. Tell us where your books are and we'll scope the fix on a quick call."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, callBtn(), /*#__PURE__*/React.createElement("a", {
      className: "h-callnum",
      href: window.PHONE_TEL
    }, /*#__PURE__*/React.createElement(Ico.phone, null), window.PHONE_DISPLAY))));
  }
  function ErrorHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-error"
    }, /*#__PURE__*/React.createElement(DSErrorBadge, {
      tone: "caution",
      code: "404",
      label: "this page is out of balance"
    }), /*#__PURE__*/React.createElement(TAccount, {
      title: "This page",
      account: "not found",
      debits: [{
        label: "Links in",
        amount: 1
      }],
      credits: [{
        label: "Page found",
        amount: 0
      }]
    }), /*#__PURE__*/React.createElement("h1", null, "We can't make this one tie out."), /*#__PURE__*/React.createElement("p", {
      className: "h-sub",
      style: {
        textAlign: "center",
        margin: "0 auto"
      }
    }, "The page you're after doesn't exist \u2014 but your books can still balance. Head back, or call a ProAdvisor."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions",
      style: {
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(DSButton, {
      size: "lg",
      icon: /*#__PURE__*/React.createElement(Ico.arrowRight, null),
      as: "a",
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }, "Back to home"), /*#__PURE__*/React.createElement("a", {
      className: "h-callnum",
      href: window.PHONE_TEL
    }, /*#__PURE__*/React.createElement(Ico.phone, null), window.PHONE_DISPLAY))));
  }
  function LegalHero() {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-legal"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-legal__kicker"
    }, "Legal"), /*#__PURE__*/React.createElement("h1", null, "Privacy Policy"), /*#__PURE__*/React.createElement("div", {
      className: "h-legal__meta"
    }, /*#__PURE__*/React.createElement("span", null, "Last updated: June 1, 2026"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Effective: June 1, 2026"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "TechBrot Inc."))));
  }
  function ConversionFormHero({
    variant,
    go
  }) {
    const isReview = variant === "filereview";
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-form__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, isReview ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ico.fileCheck, null), "No-cost file review") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ico.phone, null), "Book the discovery call")), /*#__PURE__*/React.createElement("h1", {
      className: "h-display",
      style: {
        fontSize: "var(--text-4xl)"
      }
    }, isReview ? "Get a free QuickBooks file review." : "Talk to a Certified ProAdvisor."), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, isReview ? /*#__PURE__*/React.createElement(React.Fragment, null, "Send us your file and a Certified ProAdvisor tells you exactly what's off \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "no charge, no obligation, same-day response.")) : /*#__PURE__*/React.createElement(React.Fragment, null, "Tell us where your books are and we'll scope the fix on the call \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "fixed-fee, before any work begins."))), /*#__PURE__*/React.createElement(DSProof, {
      items: [{
        icon: /*#__PURE__*/React.createElement(Ico.shieldCheck, null),
        title: "Certified QuickBooks ProAdvisor",
        sub: "Intuit-certified team"
      }, {
        icon: /*#__PURE__*/React.createElement(Ico.independent, null),
        title: "Independent firm",
        sub: "Not Intuit · no commissions"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "h-form__after"
    }, /*#__PURE__*/React.createElement(Ico.phone, null), " Prefer to talk now? Call ", /*#__PURE__*/React.createElement("a", {
      href: window.PHONE_TEL,
      style: {
        marginLeft: ".3em"
      }
    }, window.PHONE_DISPLAY))), /*#__PURE__*/React.createElement("div", {
      className: "h-form__card"
    }, /*#__PURE__*/React.createElement("h3", null, isReview ? "Start your free review" : "Request a call"), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "We reply the same business day. No spam, ever."), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => e.preventDefault()
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-form__grid"
    }, /*#__PURE__*/React.createElement(DSInput, {
      label: "First name",
      required: true,
      placeholder: "Jordan"
    }), /*#__PURE__*/React.createElement(DSInput, {
      label: "Last name",
      required: true,
      placeholder: "Reyes"
    }), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(DSInput, {
      label: "Business email",
      type: "email",
      required: true,
      placeholder: "you@company.com",
      icon: /*#__PURE__*/React.createElement(Ico.mail, null)
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(DSInput, {
      label: "Phone",
      placeholder: "(000) 000-0000",
      icon: /*#__PURE__*/React.createElement(Ico.phone, null)
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      label: "What do you need?",
      placeholder: "Select\u2026",
      required: true,
      options: isReview ? ["Cleanup review", "Setup review", "Migration check", "Not sure — take a look"] : ["Cleanup & catch-up", "Ongoing bookkeeping", "QuickBooks setup", "Sales tax", "Payroll"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(DSTextarea, {
      label: isReview ? "Anything we should know?" : "Tell us about your books",
      optional: true,
      placeholder: "Where are things at today?"
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(DSCheckbox, {
      label: "I use QuickBooks Online",
      defaultChecked: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(DSButton, {
      block: true,
      size: "lg",
      icon: isReview ? /*#__PURE__*/React.createElement(Ico.fileCheck, null) : /*#__PURE__*/React.createElement(Ico.phone, null)
    }, isReview ? "Request my free review" : "Request a call")))), /*#__PURE__*/React.createElement("div", {
      className: "h-form__after"
    }, /*#__PURE__*/React.createElement(Ico.check, null), " What happens next: a ProAdvisor reviews this and replies the same business day."))));
  }
  function HubHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad",
      style: {
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: "-2rem",
        right: "-5rem",
        width: "clamp(20rem,38vw,32rem)",
        opacity: 0.05,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(LedgerMotif, {
      tone: "accent",
      accentTicks: false
    })), /*#__PURE__*/React.createElement("div", {
      className: "h-hub",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-hub__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.layers, null), "QuickBooks services"), /*#__PURE__*/React.createElement("h1", {
      className: "h-display"
    }, "Everything QuickBooks, handled by Certified ProAdvisors."), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, "Setup, cleanup, migration, payroll, and error help \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "one independent firm"), " across the full QuickBooks stack: Online, Desktop, Enterprise, and Payroll."), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, callBtn(), /*#__PURE__*/React.createElement(DSButton, {
      as: "a",
      href: "#",
      variant: "secondary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Ico.arrowRight, null),
      onClick: e => {
        e.preventDefault();
        go("product");
      }
    }, "Explore QuickBooks")), /*#__PURE__*/React.createElement(DSTrustRow, {
      items: ["Online · Desktop · Enterprise · Payroll", "Independent firm", "Fixed-fee scope"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "h-hub__fig"
    }, /*#__PURE__*/React.createElement(LedgerStack, {
      animate: true,
      title: "QuickBooks file",
      period: "migrated \xB7 reconciled"
    }))));
  }
  function ComparisonHero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "h-wrap h-pad-tight"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-compare"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-loc__crumb"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      }
    }, "Compare"), /*#__PURE__*/React.createElement(Ico.chevronRight, null), /*#__PURE__*/React.createElement("span", null, "TechBrot vs. Bench")), /*#__PURE__*/React.createElement("div", {
      className: "h-compare__copy"
    }, /*#__PURE__*/React.createElement("span", {
      className: "h-eyebrow"
    }, /*#__PURE__*/React.createElement(Ico.scale, null), "Honest comparison"), /*#__PURE__*/React.createElement("h1", {
      className: "h-display",
      style: {
        fontSize: "var(--text-4xl)"
      }
    }, "TechBrot vs. Bench \u2014 including where they win."), /*#__PURE__*/React.createElement("p", {
      className: "h-sub"
    }, "A fair, side-by-side read for businesses choosing between a Certified ProAdvisor firm and a subscription bookkeeping service. ", /*#__PURE__*/React.createElement("span", {
      className: "accent"
    }, "We tell you when the other option fits better.")), /*#__PURE__*/React.createElement("div", {
      className: "h-actions"
    }, callBtn(), /*#__PURE__*/React.createElement(DSButton, {
      as: "a",
      href: "#",
      variant: "secondary",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Ico.arrowRight, null),
      onClick: e => {
        e.preventDefault();
        go("filereview");
      }
    }, "Get a free file review")))));
  }
  Object.assign(window, {
    HomeHero,
    MoneyHero,
    ProductHero,
    GuideHero,
    PillarHero,
    LocationChildHero,
    ErrorHero,
    LegalHero,
    ConversionFormHero,
    HubHero,
    ComparisonHero
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/heroes.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/icons.js
try { (() => {
// TechBrot UI-kit icon set — curated Lucide line icons as React components.
// (Lucide is the documented icon system; these reproduce its 24px paths.)
// Exported to window for the other kit scripts.
(function () {
  const _i = paths => (props = {}) => React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "var(--icon-stroke)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  }, paths.map((d, i) => React.createElement("path", {
    key: i,
    d
  })));
  const _multi = children => (props = {}) => React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "var(--icon-stroke)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  }, children);
  const Icons = {
    phone: _i(["M3 5a2 2 0 0 1 2-2h2.6a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.3 1L8 11a14 14 0 0 0 5 5l1.2-1.3a1 1 0 0 1 1-.3l4 1a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z"]),
    arrowRight: _i(["M5 12h14", "M13 6l6 6-6 6"]),
    arrowUpRight: _i(["M7 17 17 7", "M9 7h8v8"]),
    check: _i(["M20 6 9 17l-5-5"]),
    chevronDown: _i(["m6 9 6 6 6-6"]),
    chevronRight: _i(["m9 6 6 6-6 6"]),
    menu: _i(["M4 6h16", "M4 12h16", "M4 18h16"]),
    x: _i(["M18 6 6 18", "M6 6l12 12"]),
    shieldCheck: _multi([React.createElement("path", {
      key: 0,
      d: "M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"
    }), React.createElement("path", {
      key: 1,
      d: "m9 12 2 2 4-4"
    })]),
    building: _multi([React.createElement("rect", {
      key: 0,
      x: 4,
      y: 3,
      width: 16,
      height: 18,
      rx: 1.5
    }), React.createElement("path", {
      key: 1,
      d: "M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"
    })]),
    independent: _i(["M12 3v18", "M5 8l7-5 7 5", "M5 8v8l7 5 7-5V8"]),
    fileText: _multi([React.createElement("path", {
      key: 0,
      d: "M14 3v4a1 1 0 0 0 1 1h4"
    }), React.createElement("path", {
      key: 1,
      d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"
    }), React.createElement("path", {
      key: 2,
      d: "M9 13h6M9 17h4"
    })]),
    fileCheck: _multi([React.createElement("path", {
      key: 0,
      d: "M14 3v4a1 1 0 0 0 1 1h4"
    }), React.createElement("path", {
      key: 1,
      d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"
    }), React.createElement("path", {
      key: 2,
      d: "m9 15 2 2 4-4"
    })]),
    calculator: _multi([React.createElement("rect", {
      key: 0,
      x: 5,
      y: 2,
      width: 14,
      height: 20,
      rx: 2
    }), React.createElement("path", {
      key: 1,
      d: "M9 6h6M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v4"
    })]),
    sparkles: _i(["M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3Z", "M19 14l.8 2 .2.2 2 .8-2 .8-.2.2-.8 2-.8-2-.2-.2-2-.8 2-.8.2-.2.8Z"]),
    broom: _i(["m13 11 6-6", "M5 19l4-4", "M14 7l3 3", "M4 21s2-6 5-8 8-5 8-5"]),
    refresh: _i(["M21 12a9 9 0 0 0-15-6.7L3 8", "M3 3v5h5", "M3 12a9 9 0 0 0 15 6.7L21 16", "M21 21v-5h-5"]),
    mapPin: _multi([React.createElement("path", {
      key: 0,
      d: "M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z"
    }), React.createElement("circle", {
      key: 1,
      cx: 12,
      cy: 10,
      r: 2.6
    })]),
    bookOpen: _i(["M12 7v14", "M3 18a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a3 3 0 0 1 4 2 3 3 0 0 1 4-2h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2H3Z"]),
    alert: _i(["M12 9v4", "M12 17h.01", "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
    scale: _i(["M12 3v18", "M7 7h10", "M7 7 4 14h6L7 7Z", "M17 7l-3 7h6l-3-7Z", "M8 21h8"]),
    receipt: _i(["M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17l-3-2-3 2-3-2-3 2-2-1.3", "M9 8h6M9 12h6"]),
    trendingUp: _i(["M3 17 9 11l4 4 8-8", "M17 7h4v4"]),
    users: _multi([React.createElement("circle", {
      key: 0,
      cx: 9,
      cy: 8,
      r: 3
    }), React.createElement("path", {
      key: 1,
      d: "M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-4-5.6"
    })]),
    search: _multi([React.createElement("circle", {
      key: 0,
      cx: 11,
      cy: 11,
      r: 7
    }), React.createElement("path", {
      key: 1,
      d: "m21 21-4.3-4.3"
    })]),
    clock: _multi([React.createElement("circle", {
      key: 0,
      cx: 12,
      cy: 12,
      r: 9
    }), React.createElement("path", {
      key: 1,
      d: "M12 7v5l3 2"
    })]),
    mail: _multi([React.createElement("rect", {
      key: 0,
      x: 3,
      y: 5,
      width: 18,
      height: 14,
      rx: 2
    }), React.createElement("path", {
      key: 1,
      d: "m3 7 9 6 9-6"
    })]),
    layers: _i(["m12 3 9 5-9 5-9-5 9-5Z", "m3 14 9 5 9-5", "M3 11l9 5 9-5"])
  };
  window.TBIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/pages.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TechBrot marketing pages — compose per-type heroes + the shared body kit.
// Demonstrates section rhythm (no two adjacent sections alike; one numbered system).
(function () {
  const D = window.TechBrotDesignSystem_cac950;
  const IK = window.TBIcons;
  const {
    BuyerCard,
    ProofStrip,
    AiSummary,
    LeadMagnet,
    ReviewCard,
    FaqAccordion,
    CallBand,
    ChecksList,
    FixSteps,
    ReconciliationFlow,
    VsTable,
    PullQuote,
    GuideTOC,
    DisclosureBanner,
    Eyebrow,
    Button,
    Input,
    Select,
    Checkbox,
    TrustRow,
    DataFigure,
    Badge
  } = D;
  const PAGE_CSS = `
.pg{ }
.sec{ padding:var(--section-y) 0; }
.sec--tonal{ background:var(--surface-subtle); border-top:1px solid var(--border-subtle); border-bottom:1px solid var(--border-subtle); }
.sec--ink{ background:var(--surface-ink); }
.sec__head{ max-width:var(--width-prose); margin-bottom:var(--space-10); display:flex; flex-direction:column; gap:var(--space-3); }
.sec__head h2{ font-size:var(--text-3xl); letter-spacing:-0.02em; }
.sec__head p{ font-size:var(--text-lg); color:var(--text-muted); line-height:var(--leading-snug); }
.sec--ink .sec__head h2{ color:#fff; } .sec--ink .sec__head p{ color:var(--text-on-ink-mut); }
.grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:var(--space-5); }
.grid-2{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6); align-items:start; }
.split{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-10); align-items:center; }
.guidewrap{ display:grid; grid-template-columns:14rem 1fr; gap:var(--space-12); align-items:start; }
.prose{ max-width:var(--width-prose); display:flex; flex-direction:column; gap:var(--space-6); }
.prose h2{ font-size:var(--text-2xl); letter-spacing:-0.01em; scroll-margin-top:6rem; }
.prose p{ font-size:var(--text-md); line-height:var(--leading-relaxed); color:var(--text-body); }
.legalprose{ max-width:var(--width-prose); display:flex; flex-direction:column; gap:var(--space-5); }
.legalprose h2{ font-size:var(--text-xl); margin-top:var(--space-4); scroll-margin-top:6rem; }
.legalprose p{ font-size:var(--text-base); line-height:var(--leading-relaxed); color:var(--text-body); }
.formband{ max-width:var(--width-content); margin:0 auto; }
.formband__card{ background:var(--surface-card); border:1px solid var(--border-subtle); border-radius:var(--radius-panel); box-shadow:var(--shadow-card); padding:clamp(1.5rem, 1rem + 2vw, 2.25rem); }
.formband__grid{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-4); margin-top:var(--space-5); }
.formband__grid .full{ grid-column:1/-1; }
@media (max-width:900px){ .grid-3,.grid-2,.split,.guidewrap{ grid-template-columns:1fr; } .guidewrap .toc-hide{ display:none; } .formband__grid{ grid-template-columns:1fr; } }
`;
  if (!document.getElementById("mk-page-css")) {
    const s = document.createElement("style");
    s.id = "mk-page-css";
    s.textContent = PAGE_CSS;
    document.head.appendChild(s);
  }
  const W = ({
    children,
    w = "wide"
  }) => /*#__PURE__*/React.createElement("div", {
    className: "h-wrap",
    style: {
      maxWidth: w === "content" ? "var(--width-content)" : "var(--width-full)"
    }
  }, children);
  const SecHead = ({
    eyebrow,
    title,
    sub,
    ink
  }) => /*#__PURE__*/React.createElement("div", {
    className: "sec__head"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "h-eyebrow",
    style: ink ? {
      color: "var(--accent-on-ink)"
    } : {}
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), sub && /*#__PURE__*/React.createElement("p", null, sub));
  const CLUTCH = [{
    author: "Heidi Schubert",
    role: "Owner, Beverage Connection · Denver, CO · via Clutch",
    quote: "They took something that felt overwhelming to me as a first-year business owner and made it simple."
  }, {
    author: "Barbara Best",
    role: "CEO, Barbara B. · Business services, CA · via Clutch",
    quote: "What stood out the most was TechBrot Inc's attention to detail."
  }];
  const triageCallBand = /*#__PURE__*/React.createElement(CallBand, {
    phoneDisplay: window.PHONE_DISPLAY,
    qualifier: "If your question is about Intuit billing or account access, we'll point you to Intuit. For QuickBooks cleanup, setup, migration, or bookkeeping, a Certified ProAdvisor can help on the call.",
    trust: ["Independent firm", "Certified ProAdvisor", "Fixed-fee scope first"]
  });
  function FaqSec({
    items
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.bookOpen, null), "Questions"),
      title: "Common questions"
    }), /*#__PURE__*/React.createElement(FaqAccordion, {
      schema: true,
      items: items
    })));
  }

  /* ---------------- HOME ---------------- */
  function HomePage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.HomeHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(ProofStrip, {
      items: [{
        icon: /*#__PURE__*/React.createElement(IK.shieldCheck, null),
        title: "Certified QuickBooks ProAdvisor",
        sub: "Intuit-certified team"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.independent, null),
        title: "Independent firm",
        sub: "Not Intuit · no affiliate commissions"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.receipt, null),
        title: "Fixed-fee scope",
        sub: "Agreed before any work begins"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.clock, null),
        title: "Same-day response",
        sub: "A ProAdvisor, not a call center"
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.layers, null), "Where to start"),
      title: "One firm, the whole QuickBooks lifecycle",
      sub: "Pick where you are. A ProAdvisor confirms the right path on the call."
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid-3"
    }, /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.broom, null),
      title: "Cleanup & catch-up",
      description: "Behind or messy? One pass to a clean, reconciled file.",
      forWhom: "books 3+ months behind",
      cta: "See cleanup",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.layers, null),
      title: "Setup & migration",
      description: "Start fresh or move to QuickBooks Online without losing history.",
      forWhom: "new or switching",
      cta: "See setup",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.receipt, null),
      title: "Ongoing bookkeeping",
      description: "Monthly close, reconciled, with a CFO's eye when you need it.",
      forWhom: "clean books, kept clean",
      cta: "See bookkeeping",
      href: "#"
    })))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(AiSummary, {
      question: "Should I hire a bookkeeper or a Certified ProAdvisor?",
      answer: "If your work lives in QuickBooks, a Certified ProAdvisor is a bookkeeper who is also certified in the software itself \u2014 so cleanup, setup, and migrations are done correctly the first time, not patched.",
      points: ["ProAdvisor = certified in QuickBooks, not just bookkeeping", "Best when the file is behind, broken, or being moved", "We coordinate with your CPA for filing"]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(LeadMagnet, null))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.shieldCheck, null), "Verified reviews"),
      title: "What clients say",
      sub: "Two verified reviews on Clutch. We don't show a rating average until there are five."
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid-2"
    }, CLUTCH.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, _extends({
      key: i
    }, r)))))), /*#__PURE__*/React.createElement(FaqSec, {
      items: [{
        q: "Are you Intuit, or affiliated with Intuit?",
        a: "No. We're an independent firm of Certified QuickBooks ProAdvisors. For billing, subscription, or login issues, Intuit handles those directly."
      }, {
        q: "How does fixed-fee scope work?",
        a: "After a free file review we give you a fixed price for the agreed work — no hourly surprises."
      }, {
        q: "Do you file my taxes?",
        a: "We coordinate with your CPA, EA, or attorney for filing and disputes. Our work is the books inside QuickBooks."
      }]
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- MONEY (bofu) ---------------- */
  function MoneyPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.MoneyHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.check, null), "What's included"),
      title: "Every account, tied out",
      sub: "A cleanup isn't done until the file reconciles to a known-good state."
    }), /*#__PURE__*/React.createElement(ChecksList, {
      columns: 2,
      items: ["Bank & card reconciliation", "Chart of accounts rebuild", "Catch-up to current month", "Undeposited funds cleared", "Opening balances fixed", {
        text: "Tie-out report",
        note: "every account proven"
      }]
    })), /*#__PURE__*/React.createElement(ReconciliationFlow, {
      caption: "Bank reconciliation",
      animate: true,
      steps: [{
        label: "Book balance",
        value: "$41,204"
      }, {
        label: "Deposits in transit",
        value: "$3,100",
        op: "+"
      }, {
        label: "Outstanding",
        value: "$1,890",
        op: "−"
      }, {
        label: "Bank balance",
        value: "$42,414",
        op: "=",
        result: true
      }]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.refresh, null), "How it works"),
      title: "From behind to balanced in four steps"
    }), /*#__PURE__*/React.createElement(FixSteps, {
      animate: true,
      done: 0,
      schema: true,
      steps: [{
        title: "Free file review",
        detail: "Send your file; we map exactly what's off.",
        meta: "~1 business day"
      }, {
        title: "Fixed-fee scope",
        detail: "You approve the plan and the price before any work starts."
      }, {
        title: "Cleanup & reconcile",
        detail: "Every account brought current and tied out."
      }, {
        title: "Handoff or ongoing",
        detail: "Clean books back to you — or we keep them that way monthly."
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(LeadMagnet, {
      variant: "call",
      eyebrow: "No form, just a call",
      title: "Not sure how far behind you are?",
      tagline: "Tell a ProAdvisor what you're seeing and we'll scope it on the spot \u2014 fixed fee, before any work.",
      cta: "Call a ProAdvisor",
      href: window.PHONE_TEL
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.scale, null), "Honest comparison"),
      title: "When to hire it out"
    }), /*#__PURE__*/React.createElement(VsTable, {
      columns: [{
        name: "DIY catch-up"
      }, {
        name: "TechBrot cleanup",
        highlight: true
      }],
      rows: [{
        label: "Certified ProAdvisor",
        cells: [false, true]
      }, {
        label: "Reconciled tie-out report",
        cells: [false, true]
      }, {
        label: "Lowest upfront cost",
        cells: [true, false]
      }, {
        label: "Audit-ready result",
        cells: ["partial", true]
      }],
      verdict: {
        text: "Where DIY wins: if you're only a few weeks behind and comfortable in QuickBooks, doing it yourself is cheaper. Once it's months behind or headed for a CPA, a ProAdvisor pays for itself."
      }
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- PRODUCT (mofu) ---------------- */
  function ProductPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.ProductHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.scale, null), "Online vs Desktop"),
      title: "Which QuickBooks is right for you?"
    }), /*#__PURE__*/React.createElement(VsTable, {
      columns: [{
        name: "QuickBooks Online",
        highlight: true
      }, {
        name: "Desktop"
      }],
      rows: [{
        label: "Access anywhere",
        cells: [true, false]
      }, {
        label: "Automatic bank feeds",
        cells: [true, "partial"]
      }, {
        label: "One-time license",
        cells: [false, true]
      }, {
        label: "Best for remote teams",
        cells: [true, false]
      }],
      verdict: {
        text: "Most growing businesses belong on Online. Desktop still wins for a few industry-specific workflows — we'll tell you honestly which fits on the call."
      }
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(LeadMagnet, null))), /*#__PURE__*/React.createElement(FaqSec, {
      items: [{
        q: "Can you move my Desktop file to Online?",
        a: "Yes — migration with history intact is one of our most common engagements."
      }, {
        q: "Will I lose my data in a migration?",
        a: "No. We reconcile before and after so the numbers match exactly."
      }]
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- GUIDE (long-form) ---------------- */
  function GuidePage({
    go
  }) {
    const toc = [{
      id: "g-what",
      label: "What reconciliation proves"
    }, {
      id: "g-why",
      label: "Why it matters at tax time"
    }, {
      id: "g-fix",
      label: "Fixing a file that won't balance"
    }, {
      id: "g-help",
      label: "When to get help"
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.GuideHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec",
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "guidewrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "toc-hide"
    }, /*#__PURE__*/React.createElement(GuideTOC, {
      spy: true,
      items: toc
    })), /*#__PURE__*/React.createElement("div", {
      className: "prose"
    }, /*#__PURE__*/React.createElement(AiSummary, {
      question: "What does reconciliation actually do?",
      answer: "Reconciliation proves your QuickBooks balance matches your bank \u2014 every transaction accounted for, nothing duplicated or missing. It's the difference between books you can trust and books you hope are right."
    }), /*#__PURE__*/React.createElement("h2", {
      id: "g-what"
    }, "What reconciliation proves"), /*#__PURE__*/React.createElement("p", null, "Reconciliation is the monthly act of matching every line in QuickBooks against your bank and card statements. When it ties out, you know the cash number on your books is real \u2014 not a guess, not a duplicate, not a missing deposit."), /*#__PURE__*/React.createElement(ReconciliationFlow, {
      caption: "A month, reconciled",
      animate: true,
      steps: [{
        label: "Book balance",
        value: "$41,204"
      }, {
        label: "In transit",
        value: "$3,100",
        op: "+"
      }, {
        label: "Outstanding",
        value: "$1,890",
        op: "−"
      }, {
        label: "Bank",
        value: "$42,414",
        op: "=",
        result: true
      }]
    }), /*#__PURE__*/React.createElement("h2", {
      id: "g-why"
    }, "Why it matters at tax time"), /*#__PURE__*/React.createElement("p", null, "Unreconciled books are the most common reason a year-end scramble turns into amended returns. Your CPA can only file what the books say \u2014 and if they don't tie out, every number downstream is suspect."), /*#__PURE__*/React.createElement(PullQuote, {
      author: "TechBrot ProAdvisor team"
    }, "If the books don't reconcile, you're not doing accounting \u2014 you're ", /*#__PURE__*/React.createElement("span", {
      className: "tb-pull__accent"
    }, "guessing with spreadsheets"), "."), /*#__PURE__*/React.createElement("h2", {
      id: "g-fix"
    }, "Fixing a file that won't balance"), /*#__PURE__*/React.createElement("p", null, "A file that won't reconcile usually has one of a handful of causes: duplicate transactions, a wrong opening balance, or undeposited funds left hanging. The fix is methodical, not magic \u2014 and it's exactly the cleanup work we do."), /*#__PURE__*/React.createElement("h2", {
      id: "g-help"
    }, "When to get help"), /*#__PURE__*/React.createElement("p", null, "If you've been off by the same amount for months, or you've never reconciled at all, a one-time cleanup is faster and cheaper than another year of patching."), /*#__PURE__*/React.createElement(LeadMagnet, null))))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- STATE PILLAR (location) ---------------- */
  function PillarPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.PillarHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(ProofStrip, {
      items: [{
        icon: /*#__PURE__*/React.createElement(IK.mapPin, null),
        title: "Serving New York",
        sub: "Statewide, remote-first"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.shieldCheck, null),
        title: "Certified ProAdvisor",
        sub: "Intuit-certified team"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.independent, null),
        title: "Independent firm",
        sub: "Not Intuit"
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.scale, null), "Built around New York's tax reality"),
      title: "Why New York books are different",
      sub: "NY's combined NYC + state income tax is the highest in the country \u2014 the books have to be built for it."
    }), /*#__PURE__*/React.createElement("div", {
      className: "split"
    }, /*#__PURE__*/React.createElement(DataFigure, {
      label: "Top combined income tax rate",
      animate: true,
      bars: [{
        label: "New York (NYC)",
        value: 14.776,
        display: "14.78%"
      }, {
        label: "California",
        value: 13.3,
        display: "13.30%"
      }, {
        label: "New Jersey",
        value: 10.75,
        display: "10.75%"
      }, {
        label: "Texas",
        value: 0.4,
        display: "0%",
        tone: "muted"
      }],
      source: "NY DTF + NYC Dept. of Finance \xB7 top marginal, 2026"
    }), /*#__PURE__*/React.createElement(ChecksList, {
      items: [{
        text: "NYC Unincorporated Business Tax",
        note: "UBT on unincorporated NYC businesses"
      }, {
        text: "Sales tax on services",
        note: "taxable where most states exempt"
      }, {
        text: "MTA surcharge",
        note: "on the metro commuter district"
      }, "Nexus &amp; filing coordinated with your CPA"]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.users, null), "Across New York"),
      title: "Local help, wherever you are in NY"
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid-3"
    }, ["Manhattan", "Brooklyn", "Buffalo"].map(c => /*#__PURE__*/React.createElement(BuyerCard, {
      key: c,
      icon: /*#__PURE__*/React.createElement(IK.mapPin, null),
      title: c,
      description: `QuickBooks bookkeeping & cleanup for ${c} businesses.`,
      cta: `${c} bookkeeping`,
      href: "#"
    }))))), /*#__PURE__*/React.createElement("section", {
      className: "sec",
      id: "form"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "formband"
    }, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.mail, null), "Send your details"),
      title: "Tell us about your New York business",
      sub: "A short form \u2014 or just call. A ProAdvisor replies the same business day."
    }), /*#__PURE__*/React.createElement("div", {
      className: "formband__card"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: e => e.preventDefault()
    }, /*#__PURE__*/React.createElement("div", {
      className: "formband__grid"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      required: true,
      placeholder: "Jordan Reyes"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      placeholder: "(000) 000-0000",
      icon: /*#__PURE__*/React.createElement(IK.phone, null)
    }), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Business email",
      type: "email",
      required: true,
      placeholder: "you@company.com",
      icon: /*#__PURE__*/React.createElement(IK.mail, null)
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(Select, {
      label: "What do you need?",
      placeholder: "Select\u2026",
      options: ["Cleanup & catch-up", "Ongoing bookkeeping", "QuickBooks setup", "Sales tax"]
    })), /*#__PURE__*/React.createElement("div", {
      className: "full"
    }, /*#__PURE__*/React.createElement(Button, {
      block: true,
      size: "lg",
      icon: /*#__PURE__*/React.createElement(IK.arrowRight, null)
    }, "Request a call")))))))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- LOCATION CHILD ---------------- */
  function LocationChildPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.LocationChildHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SecHead, {
      title: "QuickBooks help for Manhattan businesses",
      sub: "The same independent ProAdvisor team behind our New York practice \u2014 local to Manhattan, remote-friendly."
    }), /*#__PURE__*/React.createElement(ChecksList, {
      items: ["Cleanup & catch-up bookkeeping", "QuickBooks Online setup & migration", "Monthly close and reconciliation", "Sales-tax setup and filing support"]
    })), /*#__PURE__*/React.createElement(DataFigure, {
      label: "Typical first engagement",
      value: "Cleanup",
      animate: true,
      caption: "Most Manhattan clients start with a one-time cleanup, then move to monthly bookkeeping."
    })))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- ERROR / 404 ---------------- */
  function ErrorPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.ErrorHero, {
      go: go
    }));
  }

  /* ---------------- LEGAL ---------------- */
  function LegalPage({
    go
  }) {
    const toc = [{
      id: "l-1",
      label: "1. Information we collect"
    }, {
      id: "l-2",
      label: "2. How we use it"
    }, {
      id: "l-3",
      label: "3. Sharing"
    }, {
      id: "l-4",
      label: "4. Your rights"
    }, {
      id: "l-5",
      label: "5. Contact"
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.LegalHero, null), /*#__PURE__*/React.createElement("section", {
      className: "sec",
      style: {
        paddingTop: "var(--section-y-tight)"
      }
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "guidewrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "toc-hide"
    }, /*#__PURE__*/React.createElement(GuideTOC, {
      items: toc,
      label: "Sections"
    })), /*#__PURE__*/React.createElement("div", {
      className: "legalprose"
    }, /*#__PURE__*/React.createElement("p", null, "This Privacy Policy explains how TechBrot Inc. (\u201CTechBrot\u201D, \u201Cwe\u201D) collects and uses information when you use our website or contact us. This is placeholder text for the design system; replace with reviewed legal copy before launch."), /*#__PURE__*/React.createElement("h2", {
      id: "l-1"
    }, "1. Information we collect"), /*#__PURE__*/React.createElement("p", null, "When you submit the contact or file-review form, we collect the details you provide \u2014 name, email, phone, and what you tell us about your books. We also collect standard analytics."), /*#__PURE__*/React.createElement("h2", {
      id: "l-2"
    }, "2. How we use it"), /*#__PURE__*/React.createElement("p", null, "We use your information solely to respond to your inquiry, scope potential work, and improve the site. We do not sell personal information."), /*#__PURE__*/React.createElement("h2", {
      id: "l-3"
    }, "3. Sharing"), /*#__PURE__*/React.createElement("p", null, "We share information only with service providers necessary to operate the site, and as required by law."), /*#__PURE__*/React.createElement("h2", {
      id: "l-4"
    }, "4. Your rights"), /*#__PURE__*/React.createElement("p", null, "You may request access to, correction of, or deletion of your personal information at any time."), /*#__PURE__*/React.createElement("h2", {
      id: "l-5"
    }, "5. Contact"), /*#__PURE__*/React.createElement("p", null, "Questions about this policy? Contact us at info@techbrot.com or call ", window.PHONE_DISPLAY, "."))))));
  }

  /* ---------------- CONTACT / FILE REVIEW ---------------- */
  function ContactPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.ConversionFormHero, {
      variant: "contact",
      go: go
    }));
  }
  function FileReviewPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement("section", {
      className: "h-wrap",
      style: {
        paddingTop: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(DisclosureBanner, null, /*#__PURE__*/React.createElement("b", null, "TechBrot is an independent firm of Certified QuickBooks ProAdvisors \u2014 we are not Intuit, and not affiliated with Intuit."), " For QuickBooks billing, subscription, payment, or account-login problems, contact Intuit directly. We help with the bookkeeping, cleanup, setup, and accounting work inside your QuickBooks file.")), /*#__PURE__*/React.createElement(window.ConversionFormHero, {
      variant: "filereview",
      go: go
    }));
  }

  /* ---------------- HUB (silo landing) ---------------- */
  function HubPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.HubHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(ProofStrip, {
      items: [{
        icon: /*#__PURE__*/React.createElement(IK.shieldCheck, null),
        title: "Certified across the stack",
        sub: "Online L2 · Desktop · Enterprise · Payroll"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.independent, null),
        title: "Independent firm",
        sub: "Not Intuit · works in your file"
      }, {
        icon: /*#__PURE__*/React.createElement(IK.receipt, null),
        title: "Fixed-fee scope",
        sub: "Written before any work"
      }]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.layers, null), "What we handle"),
      title: "The full QuickBooks lifecycle",
      sub: "Pick the work you need \u2014 a ProAdvisor confirms scope on the call."
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid-3"
    }, /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.layers, null),
      title: "Setup & onboarding",
      description: "A chart of accounts designed for your entity, from day one.",
      cta: "Setup",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.broom, null),
      title: "File cleanup",
      description: "Reconcile a file someone else broke \u2014 back to a known-good state.",
      cta: "Cleanup",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.refresh, null),
      title: "Desktop \u2192 Online migration",
      description: "Move platforms without losing a year of history.",
      cta: "Migration",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.alert, null),
      title: "Error & help",
      description: "H202, balance, and broken-feed fixes from independent experts.",
      cta: "Get help",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.receipt, null),
      title: "QuickBooks Payroll",
      description: "Run payroll right, with multi-state handled.",
      cta: "Payroll",
      href: "#"
    }), /*#__PURE__*/React.createElement(BuyerCard, {
      icon: /*#__PURE__*/React.createElement(IK.users, null),
      title: "Speak to a ProAdvisor",
      description: "Talk through your situation, no pitch.",
      cta: "Talk to us",
      href: "#"
    })))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(AiSummary, {
      question: "Can I get independent QuickBooks help that isn't Intuit?",
      answer: "Yes. TechBrot is an independent firm of Certified QuickBooks ProAdvisors. We fix the books inside your file \u2014 setup, cleanup, migration, payroll \u2014 while Intuit handles billing and login.",
      points: ["Independent — not Intuit support", "Certified across Online, Desktop, Enterprise, Payroll", "Fixed-fee scope before any work"]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(LeadMagnet, null))), /*#__PURE__*/React.createElement(FaqSec, {
      items: [{
        q: "Do you work in my own QuickBooks file?",
        a: "Yes — always your file, never proprietary software you'd lose access to."
      }, {
        q: "Which QuickBooks versions do you support?",
        a: "Online (Level 2), Desktop, Enterprise, and Payroll."
      }]
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }

  /* ---------------- COMPARISON (mofu) ---------------- */
  function ComparisonPage({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pg"
    }, /*#__PURE__*/React.createElement(window.ComparisonHero, {
      go: go
    }), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(VsTable, {
      columns: [{
        name: "TechBrot",
        highlight: true
      }, {
        name: "Bench"
      }],
      rows: [{
        label: "Certified QuickBooks ProAdvisor",
        cells: [true, false]
      }, {
        label: "Works in your own QuickBooks file",
        cells: [true, false]
      }, {
        label: "Advisory beyond bookkeeping",
        cells: [true, "partial"]
      }, {
        label: "Flat monthly subscription",
        cells: ["partial", true]
      }, {
        label: "Lowest entry price",
        cells: [false, true]
      }],
      verdict: {
        text: "Where Bench wins: a flat, low monthly price on its own platform — fine for simple books. The moment you need a ProAdvisor in your real QuickBooks file, or advisory, TechBrot is the fit."
      }
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(AiSummary, {
      question: "TechBrot or Bench \u2014 which should I choose?",
      answer: "Choose Bench for a cheap, hands-off subscription on its own software. Choose TechBrot when you want a Certified ProAdvisor working in your own QuickBooks file, with advisory when the books are ready."
    }))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, /*#__PURE__*/React.createElement(SecHead, {
      eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IK.shieldCheck, null), "Verified reviews"),
      title: "What clients say"
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid-2"
    }, CLUTCH.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, _extends({
      key: i
    }, r)))))), /*#__PURE__*/React.createElement("section", {
      className: "sec sec--tonal"
    }, /*#__PURE__*/React.createElement(W, {
      w: "content"
    }, /*#__PURE__*/React.createElement(LeadMagnet, null))), /*#__PURE__*/React.createElement("section", {
      className: "sec"
    }, /*#__PURE__*/React.createElement(W, null, triageCallBand)));
  }
  Object.assign(window, {
    HomePage,
    MoneyPage,
    ProductPage,
    GuidePage,
    PillarPage,
    LocationChildPage,
    ErrorPage,
    LegalPage,
    ContactPage,
    FileReviewPage,
    HubPage,
    ComparisonPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/pages.js", error: String((e && e.message) || e) }); }

// uploads/site.min.css.11ty.js
try { (() => {
/* site.min.css — FIRST-CLASS Eleventy template (round-17 Cloudflare CSS fix).
 *
 * WHY THIS FILE EXISTS: site.min.css was previously generated by a side-effect
 * `fs.writeFileSync` inside an `eleventy.before` hook — writing straight to the
 * output dir OUTSIDE Eleventy's own write pipeline. That file is not tracked by
 * Eleventy as build output, which makes it fragile on CI/Cloudflare (it can be
 * absent from the deployed artifact even when HTML deploys). A fresh-clone
 * `npm ci --omit=dev && npm run build` proved the SOURCE + build are correct, so
 * the only remaining failure surface was that non-canonical write. Moving the
 * bundle into a normal Eleventy template makes site.min.css a first-class build
 * output that flows through Eleventy's writer and is always in _site → always
 * deployed by Cloudflare. Page content is untouched; this is build-pipeline only.
 *
 * Bundles the 10 design-handoff CSS sources (foundations verbatim, components
 * curated per round) in load order, minified via esbuild. 58KB minified hard
 * gate (throws if exceeded); 70KB source soft-cap (flagged, non-blocking). */
const fs = require("fs");
const path = require("path");
const CSS_ORDER = ["00-fonts.css", "01-tokens.css", "02-base.css", "03-conversion.css", "04-chrome.css", "05-tiers.css", "06-motif-rules.css", "07-motion.css", "08-additions.css", "09-extensions.css"];
const CSS_BUDGET_MIN = 58 * 1024; // minified, hard build gate (ceiling — final)
const CSS_BUDGET_SRC = 70 * 1024; // source soft-cap, flagged only

module.exports = class {
  data() {
    return {
      permalink: "/assets/css/site.min.css",
      eleventyExcludeFromCollections: true
    };
  }
  async render() {
    const esbuild = require("esbuild");
    const srcDir = __dirname; // this file lives in src/assets/css alongside the sources
    const source = CSS_ORDER.map(f =>
    // strip per-file BOMs — a U+FEFF mid-concatenation corrupts the next
    // selector after minification (esbuild escapes it into the selector)
    fs.readFileSync(path.join(srcDir, f), "utf8").replace(/^﻿/, "")).join("\n");
    const srcBytes = Buffer.byteLength(source);
    const {
      code
    } = await esbuild.transform(source, {
      loader: "css",
      minify: true
    });
    const minBytes = Buffer.byteLength(code);
    if (minBytes > CSS_BUDGET_MIN) {
      throw new Error(`CSS minified budget exceeded: ${minBytes} > ${CSS_BUDGET_MIN} bytes`);
    }
    const srcFlag = srcBytes > CSS_BUDGET_SRC ? " ⚠ SOURCE OVER 70KB SOFT-CAP (flagged)" : "";
    console.log(`[css] minified ${minBytes}B / hard gate ${CSS_BUDGET_MIN}B · source ${srcBytes}B${srcFlag} → assets/css/site.min.css (first-class template)`);
    return code;
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/site.min.css.11ty.js", error: String((e && e.message) || e) }); }

__ds_ns.AiSummary = __ds_scope.AiSummary;

__ds_ns.BuyerCard = __ds_scope.BuyerCard;

__ds_ns.BylineBlock = __ds_scope.BylineBlock;

__ds_ns.CallBand = __ds_scope.CallBand;

__ds_ns.ChecksList = __ds_scope.ChecksList;

__ds_ns.DisclosureBanner = __ds_scope.DisclosureBanner;

__ds_ns.ErrorBadge = __ds_scope.ErrorBadge;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.FixSteps = __ds_scope.FixSteps;

__ds_ns.GuideTOC = __ds_scope.GuideTOC;

__ds_ns.LeadMagnet = __ds_scope.LeadMagnet;

__ds_ns.ProofStrip = __ds_scope.ProofStrip;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.VsTable = __ds_scope.VsTable;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.DataFigure = __ds_scope.DataFigure;

__ds_ns.DecisionTree = __ds_scope.DecisionTree;

__ds_ns.JudgmentChart = __ds_scope.JudgmentChart;

__ds_ns.LedgerMotif = __ds_scope.LedgerMotif;

__ds_ns.LedgerStack = __ds_scope.LedgerStack;

__ds_ns.ReconciliationFlow = __ds_scope.ReconciliationFlow;

__ds_ns.StateMap = __ds_scope.StateMap;

__ds_ns.TAccount = __ds_scope.TAccount;

})();

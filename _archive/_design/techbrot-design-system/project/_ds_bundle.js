/* @ds-bundle: {"format":3,"namespace":"TechBrotDesignSystem_905404","components":[{"name":"BuyerCard","sourcePath":"components/cards/BuyerCard.jsx"},{"name":"GuideCard","sourcePath":"components/cards/GuideCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"CtaBand","sourcePath":"components/conversion/CtaBand.jsx"},{"name":"Disclosure","sourcePath":"components/conversion/Disclosure.jsx"},{"name":"PhoneCta","sourcePath":"components/conversion/PhoneCta.jsx"},{"name":"TrustRow","sourcePath":"components/conversion/TrustRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Faq","sourcePath":"components/disclosure/Faq.jsx"},{"name":"Framework","sourcePath":"components/editorial/Framework.jsx"},{"name":"InBrief","sourcePath":"components/editorial/InBrief.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"Stat","sourcePath":"components/editorial/Stat.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Related","sourcePath":"components/navigation/Related.jsx"},{"name":"Toc","sourcePath":"components/navigation/Toc.jsx"}],"sourceHashes":{"components/cards/BuyerCard.jsx":"7ebc01169a99","components/cards/GuideCard.jsx":"e5661722b11b","components/cards/ServiceCard.jsx":"b4a228d59f62","components/conversion/CtaBand.jsx":"3f53b92568f1","components/conversion/Disclosure.jsx":"a5f2e776c904","components/conversion/PhoneCta.jsx":"fd37de396283","components/conversion/TrustRow.jsx":"c52866466890","components/core/Button.jsx":"4d060f134ab9","components/core/Eyebrow.jsx":"810df295d49c","components/core/SectionHeader.jsx":"f3f8f38cf632","components/disclosure/Faq.jsx":"b0ee11499749","components/editorial/Framework.jsx":"e99c032a5977","components/editorial/InBrief.jsx":"07b36b380aa9","components/editorial/PullQuote.jsx":"91f5775c69d7","components/editorial/Stat.jsx":"b3e86e74652f","components/navigation/Breadcrumb.jsx":"89e5f1337629","components/navigation/Related.jsx":"d71af7e00e11","components/navigation/Toc.jsx":"d0cc4dea04d8","ui_kits/website/kit.js":"0f2ce916f708"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TechBrotDesignSystem_905404 = window.TechBrotDesignSystem_905404 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/BuyerCard.jsx
try { (() => {
/** Buyer-routing card opening with an italic serif situation signal. */
function BuyerCard({
  signal,
  heading,
  href = "#",
  body,
  cta = "This is me"
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "buyer-card"
  }, signal ? /*#__PURE__*/React.createElement("p", {
    className: "buyer-card__signal"
  }, signal) : null, /*#__PURE__*/React.createElement("h3", {
    className: "buyer-card__heading"
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, heading)), body ? /*#__PURE__*/React.createElement("p", {
    className: "buyer-card__body"
  }, body) : null, /*#__PURE__*/React.createElement("a", {
    className: "buyer-card__cta",
    href: href
  }, cta, " \u2192"));
}
Object.assign(__ds_scope, { BuyerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BuyerCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/GuideCard.jsx
try { (() => {
/** Editorial guide/article card with oxblood category label. */
function GuideCard({
  category,
  heading,
  href = "#",
  excerpt,
  cta = "Read the guide"
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "guide-card"
  }, category ? /*#__PURE__*/React.createElement("p", {
    className: "guide-card__category"
  }, category) : null, /*#__PURE__*/React.createElement("h3", {
    className: "guide-card__heading"
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, heading)), excerpt ? /*#__PURE__*/React.createElement("p", {
    className: "guide-card__excerpt"
  }, excerpt) : null, /*#__PURE__*/React.createElement("a", {
    className: "guide-card__cta",
    href: href
  }, cta, " \u2192"));
}
Object.assign(__ds_scope, { GuideCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/GuideCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
/** Service offering card: eyebrow, serif heading, body, arrow link list, CTA. */
function ServiceCard({
  eyebrow,
  heading,
  href = "#",
  body,
  links = [],
  cta = "Explore the service"
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "service-card"
  }, /*#__PURE__*/React.createElement("header", {
    className: "service-card__header"
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "service-card__eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h3", {
    className: "service-card__heading"
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, heading))), body ? /*#__PURE__*/React.createElement("p", {
    className: "service-card__body"
  }, body) : null, links.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "service-card__list"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || "#"
  }, l.label))) : null, /*#__PURE__*/React.createElement("a", {
    className: "service-card__cta",
    href: href
  }, cta));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/conversion/Disclosure.jsx
try { (() => {
/** "We are not Intuit" independence banner — locked pattern. */
function Disclosure({
  eyebrow = "Independent disclosure",
  children
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "disclosure"
  }, /*#__PURE__*/React.createElement("p", {
    className: "disclosure__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("p", {
    className: "disclosure__text"
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "TechBrot is an independent accounting firm and Certified QuickBooks ProAdvisor practice."), " We are not Intuit, and we are not affiliated with, endorsed by, or sponsored by Intuit Inc. QuickBooks and Intuit are registered trademarks of Intuit Inc., used here for identification only.")));
}
Object.assign(__ds_scope, { Disclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conversion/Disclosure.jsx", error: String((e && e.message) || e) }); }

// components/conversion/PhoneCta.jsx
try { (() => {
/** Phone conversion unit — always "Talk to a Certified ProAdvisor". */
function PhoneCta({
  label = "Talk to a Certified ProAdvisor",
  number = "(555) 014-0220",
  detail = "Mon–Fri, 9am–6pm ET",
  inverted = false
}) {
  const tel = "tel:" + String(number).replace(/[^+\d]/g, "");
  return /*#__PURE__*/React.createElement("div", {
    className: inverted ? "phone-cta phone-cta--inverted" : "phone-cta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "phone-cta__label"
  }, label), /*#__PURE__*/React.createElement("a", {
    className: "phone-cta__number",
    href: tel
  }, number), detail ? /*#__PURE__*/React.createElement("p", {
    className: "phone-cta__detail"
  }, detail) : null);
}
Object.assign(__ds_scope, { PhoneCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conversion/PhoneCta.jsx", error: String((e && e.message) || e) }); }

// components/conversion/TrustRow.jsx
try { (() => {
/** Horizontal proof strip: real review scores, credentials, counts. */
function TrustRow({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "trust-row"
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "trust-row__divider"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "trust-row__item"
  }, /*#__PURE__*/React.createElement("p", {
    className: "trust-row__value"
  }, item.value), /*#__PURE__*/React.createElement("p", {
    className: "trust-row__label"
  }, item.label)))));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conversion/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Brand button. Renders <a> when href is given, else <button>. */
function Button({
  variant = "primary",
  size = "md",
  inverted = false,
  full = false,
  href,
  children,
  className = "",
  ...rest
}) {
  const cls = ["btn", `btn--${variant}`, `btn--${size}`, inverted ? "btn--inverted" : null, full ? "btn--full" : null, className || null].filter(Boolean).join(" ");
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Uppercase tracked topic label that sits above headings. */
function Eyebrow({
  children,
  inverted = false,
  as = "p",
  className = ""
}) {
  const Tag = as;
  const cls = ["section__eyebrow", inverted ? "section__eyebrow--inverted" : null, className || null].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, {
    className: cls
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/conversion/CtaBand.jsx
try { (() => {
/** Dark conversion band: eyebrow, serif heading, lede, actions, disclaimer. */
function CtaBand({
  eyebrow,
  heading,
  lede,
  primary,
  primaryHref = "#",
  secondary,
  secondaryHref = "#",
  disclaimer
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "final-cta"
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    inverted: true
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "final-cta__heading"
  }, heading), lede ? /*#__PURE__*/React.createElement("p", {
    className: "final-cta__lede"
  }, lede) : null, /*#__PURE__*/React.createElement("div", {
    className: "final-cta__actions"
  }, primary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    inverted: true,
    href: primaryHref
  }, primary) : null, secondary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    inverted: true,
    variant: "ghost",
    href: secondaryHref
  }, secondary) : null), disclaimer ? /*#__PURE__*/React.createElement("p", {
    className: "final-cta__disclaimer"
  }, disclaimer) : null)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conversion/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
/** Standard section header: eyebrow + serif heading + lede. */
function SectionHeader({
  eyebrow,
  heading,
  lede,
  centered = false,
  className = ""
}) {
  const cls = ["section__header", centered ? "section__header--centered" : null, className || null].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("header", {
    className: cls
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "section__heading"
  }, heading), lede ? /*#__PURE__*/React.createElement("p", {
    className: "section__lede"
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Faq.jsx
try { (() => {
/** Accessible FAQ accordion using the production .faq__* system. */
function Faq({
  items = [],
  defaultOpen = -1
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: "faq__list"
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      className: "faq__item",
      key: i
    }, /*#__PURE__*/React.createElement("h3", {
      className: "faq__question"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "faq__trigger",
      "aria-expanded": isOpen ? "true" : "false",
      onClick: () => setOpen(isOpen ? -1 : i)
    }, item.question)), /*#__PURE__*/React.createElement("div", {
      className: "faq__answer",
      "data-open": isOpen ? "true" : "false"
    }, typeof item.answer === "string" ? /*#__PURE__*/React.createElement("p", null, item.answer) : item.answer));
  }));
}
Object.assign(__ds_scope, { Faq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Faq.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Framework.jsx
try { (() => {
/** DefinedTerm card: coined term + definition + firm attribution. */
function Framework({
  term,
  eyebrow = "Framework",
  children,
  attribution = "Defined by TechBrot — Certified QuickBooks ProAdvisor team"
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "framework"
  }, /*#__PURE__*/React.createElement("p", {
    className: "framework__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "framework__term"
  }, term), /*#__PURE__*/React.createElement("p", {
    className: "framework__definition"
  }, children), /*#__PURE__*/React.createElement("p", {
    className: "framework__attribution"
  }, attribution));
}
Object.assign(__ds_scope, { Framework });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Framework.jsx", error: String((e && e.message) || e) }); }

// components/editorial/InBrief.jsx
try { (() => {
/** Quotable AI-citation opener placed directly under the H1. */
function InBrief({
  children,
  source
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "in-brief"
  }, /*#__PURE__*/React.createElement("p", {
    className: "in-brief__text"
  }, children), source ? /*#__PURE__*/React.createElement("p", {
    className: "in-brief__source"
  }, source) : null);
}
Object.assign(__ds_scope, { InBrief });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/InBrief.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
/** Pull-quote / framework definition woven into long-form prose. */
function PullQuote({
  children,
  attribution
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "pull"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pull__text"
  }, children), attribution ? /*#__PURE__*/React.createElement("p", {
    className: "pull__attribution"
  }, attribution) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Stat.jsx
try { (() => {
/** Single proprietary number in Fraunces display with label + source. */
function Stat({
  number,
  label,
  source
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("p", {
    className: "stat__number"
  }, number), label ? /*#__PURE__*/React.createElement("p", {
    className: "stat__label"
  }, label) : null, source ? /*#__PURE__*/React.createElement("p", {
    className: "stat__source"
  }, source) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Stat.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Schema-backed breadcrumb trail. */
function Breadcrumb({
  items = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "breadcrumb",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "breadcrumb__list"
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement("li", {
      className: "breadcrumb__sep",
      "aria-hidden": "true"
    }, "/") : null, /*#__PURE__*/React.createElement("li", null, last ? /*#__PURE__*/React.createElement("span", {
      className: "breadcrumb__current",
      "aria-current": "page"
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href || "#"
    }, item.label)));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Related.jsx
try { (() => {
/** Internal-link cluster closing editorial pages. */
function Related({
  label = "Related reading",
  links = []
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "related"
  }, /*#__PURE__*/React.createElement("p", {
    className: "related__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "related__list"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || "#"
  }, l.label))));
}
Object.assign(__ds_scope, { Related });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Related.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toc.jsx
try { (() => {
/** Sticky table of contents for long-form guides. */
function Toc({
  label = "On this page",
  items = [],
  currentId
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "toc",
    "aria-label": "Table of contents"
  }, /*#__PURE__*/React.createElement("p", {
    className: "toc__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "toc__list"
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    href: item.href || "#",
    "aria-current": currentId && item.href === "#" + currentId ? "true" : undefined
  }, item.label))));
}
Object.assign(__ds_scope, { Toc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toc.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit.js
try { (() => {
// Minimal FAQ accordion behavior for tier mockups (matches production .faq__* contract).
document.addEventListener("click", function (e) {
  const trigger = e.target.closest(".faq__trigger");
  if (!trigger) return;
  const item = trigger.closest(".faq__item");
  const answer = item.querySelector(".faq__answer");
  const open = trigger.getAttribute("aria-expanded") === "true";
  // close siblings
  item.parentElement.querySelectorAll(".faq__trigger").forEach(function (t) {
    t.setAttribute("aria-expanded", "false");
  });
  item.parentElement.querySelectorAll(".faq__answer").forEach(function (a) {
    a.setAttribute("data-open", "false");
  });
  if (!open) {
    trigger.setAttribute("aria-expanded", "true");
    answer.setAttribute("data-open", "true");
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit.js", error: String((e && e.message) || e) }); }

__ds_ns.BuyerCard = __ds_scope.BuyerCard;

__ds_ns.GuideCard = __ds_scope.GuideCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.Disclosure = __ds_scope.Disclosure;

__ds_ns.PhoneCta = __ds_scope.PhoneCta;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Faq = __ds_scope.Faq;

__ds_ns.Framework = __ds_scope.Framework;

__ds_ns.InBrief = __ds_scope.InBrief;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Related = __ds_scope.Related;

__ds_ns.Toc = __ds_scope.Toc;

})();

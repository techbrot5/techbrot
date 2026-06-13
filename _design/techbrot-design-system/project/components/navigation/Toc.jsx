import React from "react";

/** Sticky table of contents for long-form guides. */
export function Toc({ label = "On this page", items = [], currentId }) {
  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc__label">{label}</p>
      <div className="toc__list">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href || "#"}
            aria-current={currentId && item.href === "#" + currentId ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

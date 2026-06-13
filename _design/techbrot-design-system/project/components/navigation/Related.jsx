import React from "react";

/** Internal-link cluster closing editorial pages. */
export function Related({ label = "Related reading", links = [] }) {
  return (
    <aside className="related">
      <p className="related__label">{label}</p>
      <div className="related__list">
        {links.map((l) => (
          <a key={l.label} href={l.href || "#"}>
            {l.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

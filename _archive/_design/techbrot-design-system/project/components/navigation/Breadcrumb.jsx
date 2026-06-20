import React from "react";

/** Schema-backed breadcrumb trail. */
export function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <React.Fragment key={i}>
              {i > 0 ? (
                <li className="breadcrumb__sep" aria-hidden="true">
                  /
                </li>
              ) : null}
              <li>
                {last ? (
                  <span className="breadcrumb__current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href || "#"}>{item.label}</a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

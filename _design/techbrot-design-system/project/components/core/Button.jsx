import React from "react";

/** Brand button. Renders <a> when href is given, else <button>. */
export function Button({
  variant = "primary",
  size = "md",
  inverted = false,
  full = false,
  href,
  children,
  className = "",
  ...rest
}) {
  const cls = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    inverted ? "btn--inverted" : null,
    full ? "btn--full" : null,
    className || null,
  ]
    .filter(Boolean)
    .join(" ");
  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}

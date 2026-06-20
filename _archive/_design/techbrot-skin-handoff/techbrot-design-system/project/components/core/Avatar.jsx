import React from "react";

const tbAvatarSizes = { sm: 24, md: 32, lg: 40, xl: 56 };

export function Avatar({ name = "", size = "md", src, style }) {
  const px = tbAvatarSizes[size] || tbAvatarSizes.md;
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
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
    ...style,
  };
  if (src) {
    return <img src={src} alt={name} style={{ ...base, objectFit: "cover" }} />;
  }
  return (
    <span style={base} role="img" aria-label={name}>
      {initials}
    </span>
  );
}

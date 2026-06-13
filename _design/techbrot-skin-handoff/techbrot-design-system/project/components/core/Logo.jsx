import React from "react";

const TB_MARK = (fill) => (
  <g fill={fill}>
    <path d="M8 10 H38 V54 H26 V22 H8 Z" />
    <rect x="42" y="10" width="14" height="12" />
  </g>
);

/** TechBrot logo. Inline SVG so it inherits page fonts and needs no asset path. */
export function Logo({ variant = "horizontal", theme = "light", height = 32, style }) {
  const ink = theme === "dark" ? "#F5F3EC" : "#1A1915";
  if (variant === "monogram") {
    return (
      <svg viewBox="0 0 64 64" height={height} role="img" aria-label="TechBrot" style={style}>
        {TB_MARK(ink)}
      </svg>
    );
  }
  if (variant === "tile") {
    return (
      <svg viewBox="0 0 64 64" height={height} role="img" aria-label="TechBrot" style={style}>
        <rect width="64" height="64" rx="14" fill={theme === "dark" ? "#F5F3EC" : "#1A1915"} />
        <g transform="translate(12.16 12.16) scale(0.62)">
          {TB_MARK(theme === "dark" ? "#1A1915" : "#F5F3EC")}
        </g>
      </svg>
    );
  }
  // horizontal lockup
  return (
    <svg viewBox="0 0 248 64" height={height} role="img" aria-label="TechBrot" style={style}>
      <g fill={ink}>
        <path d="M8 14 H30.5 V47 H21.5 V23 H8 Z" />
        <rect x="33.5" y="14" width="10.5" height="9" />
      </g>
      <text
        x="58"
        y="44"
        fontFamily="Fraunces, 'Iowan Old Style', Georgia, serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="-0.4"
        fill={ink}
        style={{ fontVariationSettings: "'opsz' 40" }}
      >
        TechBrot
      </text>
    </svg>
  );
}

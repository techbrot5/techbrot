/**
 * Brand button. Ink fill primary (oxblood on hover), hairline ghost,
 * underlined text variant. Sentence case labels, never pill radius.
 */
export interface ButtonProps {
  /** Visual style. Default "primary". */
  variant?: "primary" | "ghost" | "text";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  /** For dark surfaces (.section--final-cta etc). Default false. */
  inverted?: boolean;
  /** Full-width. Default false. */
  full?: boolean;
  /** Renders an <a> instead of <button>. */
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

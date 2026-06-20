/**
 * Uppercase tracked topic label ("WHAT WE DO") placed above a heading.
 */
export interface EyebrowProps {
  /** For dark surfaces. Default false. */
  inverted?: boolean;
  /** Rendered element. Default "p". */
  as?: string;
  className?: string;
  children?: React.ReactNode;
}

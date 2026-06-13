/**
 * TechBrot button. Primary is INK (near-black), never cobalt.
 * Sentence-case, verb-first labels ("Book a systems review").
 */
export interface ButtonProps {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** @default "md" — heights 32 / 40 / 48 */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Renders an <a> instead of <button> */
  href?: string;
  onClick?: (e: any) => void;
  /** @default "button" */
  type?: "button" | "submit";
  children?: any;
  style?: any;
}

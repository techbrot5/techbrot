/** Small tinted status/category label. Semantic colors stay muted and rare. */
export interface BadgeProps {
  /** @default "neutral" */
  variant?: "neutral" | "accent" | "brass" | "positive" | "warning" | "critical";
  children?: any;
  style?: any;
}

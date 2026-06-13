/** Tinted aside for editorial notes. Full hairline border — never a colored left border. */
export interface CalloutProps {
  /** @default "note" */
  tone?: "note" | "info" | "positive" | "warning" | "critical";
  title?: string;
  children?: any;
  style?: any;
}

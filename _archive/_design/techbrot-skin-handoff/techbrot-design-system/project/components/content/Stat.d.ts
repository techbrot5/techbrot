/** Big mono figure + muted label. Figures are content — always specific, always sourced. */
export interface StatProps {
  /** e.g. "247", "$48,210", "5 days" */
  value: string;
  label: string;
  /** Small annotation beside the value, e.g. "−18 days" */
  delta?: string;
  /** @default "positive" */
  deltaTone?: "positive" | "critical" | "neutral";
  style?: any;
}

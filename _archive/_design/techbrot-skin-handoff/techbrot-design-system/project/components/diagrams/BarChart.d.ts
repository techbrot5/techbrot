/** Horizontal bar chart for research findings. Ink bars; cobalt for the highlighted row. */
export interface BarChartProps {
  data?: { label: string; value: number; display?: string; highlight?: boolean }[];
  /** Scale max; defaults to largest value */
  max?: number;
  caption?: string;
  /** Appended to values when display is not set, e.g. " days" */
  unit?: string;
  style?: any;
}

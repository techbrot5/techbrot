/** Horizontal workflow/process map — hairline boxes, mono sublabels, cobalt highlight step. */
export interface ProcessFlowProps {
  steps?: { label: string; sublabel?: string; highlight?: boolean }[];
  /** Renders as a figcaption and the figure's aria-label */
  title?: string;
  style?: any;
}

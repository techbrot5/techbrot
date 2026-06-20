/** Software comparison matrix — dot scale (0 none / 1 partial / 2 full) or mono text values. */
export interface ComparisonGridProps {
  /** Column headers, e.g. product names */
  options?: string[];
  criteria?: { label: string; values: (0 | 1 | 2 | string)[] }[];
  caption?: string;
  /** Index of the column to tint cobalt */
  highlightColumn?: number;
  style?: any;
}

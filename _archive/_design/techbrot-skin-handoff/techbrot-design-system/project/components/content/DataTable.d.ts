/** Hairline-ruled data table. Numeric columns right-align in mono with tabular figures. */
export interface DataTableProps {
  columns?: { key: string; label: string; numeric?: boolean }[];
  /** Objects keyed by column key; cell values may be JSX */
  rows?: any[];
  caption?: string;
  style?: any;
}

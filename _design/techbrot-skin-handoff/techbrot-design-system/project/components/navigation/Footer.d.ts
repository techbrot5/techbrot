/** Inverted ink footer — the brand's dark band. Includes trademark disclaimer line. */
export interface FooterProps {
  /** Short positioning line under the logo */
  note?: string;
  columns?: { title: string; links: string[] }[];
  style?: any;
}

/**
 * Framework — DefinedTerm card for coined terminology a silo owns.
 * Oxblood top rule, serif term, prose definition, italic attribution.
 */
export interface FrameworkProps {
  /** The coined term, e.g. "The Reconciliation Standard". */
  term: string;
  /** Eyebrow label. Default "Framework". */
  eyebrow?: string;
  /** The definition prose. */
  children: React.ReactNode;
  /** Attribution line. Defaults to the firm attribution. */
  attribution?: string;
}

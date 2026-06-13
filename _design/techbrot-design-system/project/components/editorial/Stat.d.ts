/**
 * Stat — single proprietary number, Fraunces display over an ink rule.
 * Tabular numerals. Use <em> inside number for the oxblood part.
 */
export interface StatProps {
  /** The figure, e.g. "312" or JSX with <em> for accent. */
  number: React.ReactNode;
  label?: string;
  /** Italic provenance line — stats must be real and sourced. */
  source?: string;
}

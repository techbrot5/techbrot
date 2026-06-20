/**
 * Trust row — hairline-bounded strip of REAL proof points (Clutch score,
 * ProAdvisor certification, years, file counts). Never fabricated.
 */
export interface TrustRowProps {
  /** Proof items. Values support JSX (<em> for oxblood accent). */
  items: { value: React.ReactNode; label: string }[];
}

/**
 * Disclosure — the "We are not Intuit" independence banner. LOCKED pattern:
 * warm-paper field, hairline border, 3px oxblood left rule. Required on
 * every /quickbooks/* page.
 */
export interface DisclosureProps {
  /** Default "Independent disclosure". */
  eyebrow?: string;
  /** Custom disclosure text; defaults to the canonical independence statement. */
  children?: React.ReactNode;
}

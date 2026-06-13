/**
 * CTA band — the dark (--color-surface-dark) conversion block that closes
 * every page. Inverted buttons; mandatory trademark disclaimer on
 * QuickBooks-related pages.
 */
export interface CtaBandProps {
  eyebrow?: string;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  /** Primary button label. */
  primary?: string;
  primaryHref?: string;
  /** Ghost button label. */
  secondary?: string;
  secondaryHref?: string;
  /** Independence / trademark disclaimer text. */
  disclaimer?: React.ReactNode;
}

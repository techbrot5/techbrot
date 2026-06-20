/**
 * Service offering card — hairline border, flat paper, ink-border lift on
 * hover. Arrow (→) link list and arrow CTA.
 */
export interface ServiceCardProps {
  /** Uppercase category label, e.g. "Bookkeeping". */
  eyebrow?: string;
  heading: string;
  href?: string;
  body?: string;
  /** Sub-service arrow links. */
  links?: { label: string; href?: string }[];
  /** CTA label. Default "Explore the service". */
  cta?: string;
}

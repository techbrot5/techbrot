/**
 * Related — two-column arrow-link cluster under an ink rule; the internal
 * linking block that closes guides and service pages.
 */
export interface RelatedProps {
  /** Default "Related reading". */
  label?: string;
  links: { label: string; href?: string }[];
}

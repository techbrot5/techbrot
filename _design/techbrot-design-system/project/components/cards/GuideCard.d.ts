/**
 * Editorial guide/article card — oxblood uppercase category, serif title,
 * excerpt, text CTA.
 */
export interface GuideCardProps {
  /** Uppercase category, e.g. "QuickBooks". */
  category?: string;
  heading: string;
  href?: string;
  excerpt?: string;
  /** Default "Read the guide". */
  cta?: string;
}

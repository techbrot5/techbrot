/** Sticky site header — blurred paper, hairline bottom rule, ink CTA. */
export interface NavbarProps {
  links?: { label: string; href: string }[];
  /** Label of the current page */
  active?: string;
  /** @default "Book a systems review" */
  cta?: string;
  onCta?: () => void;
  /** If set, link clicks call this with the label instead of navigating */
  onNavigate?: (label: string) => void;
  style?: any;
}

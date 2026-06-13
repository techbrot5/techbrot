/**
 * Standard section header: uppercase eyebrow, regular-weight Fraunces
 * heading, secondary-ink lede. Left-aligned by default.
 */
export interface SectionHeaderProps {
  /** Terse uppercase topic label. */
  eyebrow?: string;
  /** Sentence-case declarative heading. */
  heading: React.ReactNode;
  /** One-or-two-sentence supporting line. */
  lede?: React.ReactNode;
  /** Center the header (used on tldr-style sections). Default false. */
  centered?: boolean;
  className?: string;
}

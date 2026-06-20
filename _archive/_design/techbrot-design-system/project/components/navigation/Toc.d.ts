/**
 * Toc — sticky table of contents for guide pages; current section gets an
 * oxblood left rule.
 */
export interface TocProps {
  /** Default "On this page". */
  label?: string;
  items: { label: string; href?: string }[];
  /** id of the section currently in view (without #). */
  currentId?: string;
}

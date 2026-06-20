/** White card, hairline border, 10px radius. Flat by default; shadow only on hover when href is set. */
export interface CardProps {
  /** Brass uppercase overline */
  eyebrow?: string;
  /** Fraunces card title */
  title?: string;
  /** Makes the whole card a link with hover raise */
  href?: string;
  children?: any;
  style?: any;
}

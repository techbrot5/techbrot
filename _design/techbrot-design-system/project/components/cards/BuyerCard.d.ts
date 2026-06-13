/**
 * Buyer-routing card — opens with an italic Fraunces "situation signal"
 * describing the reader, then routes them to the right service.
 */
export interface BuyerCardProps {
  /** Italic serif situation line, e.g. "Your books are eight months behind." */
  signal?: string;
  heading: string;
  href?: string;
  body?: string;
  /** Default "This is me". */
  cta?: string;
}

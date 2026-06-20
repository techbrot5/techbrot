/**
 * Phone CTA — serif tabular phone number under an expert framing label.
 * Reads "Talk to a Certified ProAdvisor" — NEVER "support line".
 */
export interface PhoneCtaProps {
  /** Default "Talk to a Certified ProAdvisor". */
  label?: string;
  number?: string;
  /** Hours / expectation line. */
  detail?: string;
  /** For dark bands. Default false. */
  inverted?: boolean;
}

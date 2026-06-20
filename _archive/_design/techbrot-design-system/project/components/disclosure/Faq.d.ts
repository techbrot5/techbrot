/**
 * Faq — hairline-row accordion (serif questions, CSS plus/minus indicator,
 * animated grid-rows panel). One open at a time.
 */
export interface FaqProps {
  items: { question: string; answer: React.ReactNode }[];
  /** Index opened initially. Default -1 (all closed). */
  defaultOpen?: number;
}

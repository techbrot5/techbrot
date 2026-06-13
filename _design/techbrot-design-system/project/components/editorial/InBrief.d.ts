/**
 * In-brief — quotable, citation-ready opener placed directly under the H1.
 * Fraunces at fs-20/22, ≤56ch, oxblood left rule.
 */
export interface InBriefProps {
  /** The quotable summary sentence(s). Keep ≤56ch lines, factual, declarative. */
  children: React.ReactNode;
  /** Optional attribution line, e.g. "TechBrot · Certified ProAdvisor team". */
  source?: string;
}

/** Initials or image avatar. Sunken neutral fill — never brand colors. */
export interface AvatarProps {
  /** Full name; initials derived from first two words. */
  name?: string;
  /** @default "md" — 24 / 32 / 40 / 56 px */
  size?: "sm" | "md" | "lg" | "xl";
  /** Optional image URL */
  src?: string;
  style?: any;
}

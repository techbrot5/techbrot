/** TechBrot logo as inline SVG — monogram, tile (app icon), or horizontal lockup. */
export interface LogoProps {
  /** @default "horizontal" */
  variant?: "monogram" | "tile" | "horizontal";
  /** "dark" renders paper-on-ink for dark surfaces. @default "light" */
  theme?: "light" | "dark";
  /** Rendered height in px. @default 32 */
  height?: number;
  style?: any;
}

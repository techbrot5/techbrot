/** Native select with custom chevron — keeps OS accessibility for free. */
export interface SelectProps {
  /** Strings or {value,label} pairs */
  options?: (string | { value: string; label: string })[];
  id?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  style?: any;
}

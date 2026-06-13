/** Checkbox with built-in label. Ink fill when checked. */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  style?: any;
}

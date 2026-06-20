/** Toggle switch (role="switch"). Ink track when on. */
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  style?: any;
}

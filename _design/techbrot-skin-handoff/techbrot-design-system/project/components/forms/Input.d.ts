/** Text input / textarea. 40px tall, hairline-strong border, cobalt focus ring. */
export interface InputProps {
  /** Render a <textarea> instead. @default false */
  multiline?: boolean;
  /** Critical border + aria-invalid. @default false */
  invalid?: boolean;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  style?: any;
}

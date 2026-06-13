/** Label + control + hint/error wrapper. Error replaces hint and announces via role="alert". */
export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  /** id of the wrapped control, for the label's for= */
  htmlFor?: string;
  children?: any;
  style?: any;
}

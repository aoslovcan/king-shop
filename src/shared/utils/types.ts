export interface VariantClassesProps {
  [key: string]: string;
}

export type ColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'gradient'
  | 'light'
  | 'dark';

export type ShapeType = 'rounded' | 'square';

export type ApiResponse<T> = {
  /** The status of the response. */
  status: 'success' | 'fail';
  /** An optional message included in the response. */
  message?: string;
  /** An optional data object containing the response data. */
  data?: { data: T };
  /** An error object containing the error data. */
  error?: { error: T };
};

export type Option = {
  id: number,
  value: string | number,
  label: string,
}

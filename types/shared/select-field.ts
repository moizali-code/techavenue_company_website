export type SelectFieldOption = {
  label: string;
  value: string;
};

export type SelectFieldProps = {
  value: string | null;
  onValueChange: (value: string | null) => void;
  options: (string | SelectFieldOption)[];
  placeholder?: string;
  clearLabel?: string;
  disabled?: boolean;
  ariaLabel?: string;
  classNames?: {
    trigger?: string;
    content?: string;
    item?: string;
  };
};

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type {
  SelectFieldOption,
  SelectFieldProps,
} from "@/types/shared/select-field";

function toOption(option: string | SelectFieldOption): SelectFieldOption {
  return typeof option === "string" ? { label: option, value: option } : option;
}

function SelectField({
  value,
  onValueChange,
  options,
  placeholder,
  clearLabel,
  disabled,
  ariaLabel,
  classNames,
}: SelectFieldProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger
        aria-label={ariaLabel ?? placeholder}
        className={cn(
          "w-full rounded-[6px] border-[#E4E4E4] px-3 text-[14px] text-[#191C1E] data-[size=default]:h-11",
          classNames?.trigger,
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className={classNames?.content}>
        {clearLabel && (
          <SelectItem value={null} className={classNames?.item}>
            {clearLabel}
          </SelectItem>
        )}

        {options.map(toOption).map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className={classNames?.item}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export { SelectField };

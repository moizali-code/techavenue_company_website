"use client";

import {
  ComponentProps,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
} from "react";
import {
  Controller,
  Control,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ValidatedTextInputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
  id?: string;
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  name?: Path<T>;
  control?: Control<T>;
  defaultValue?: string;
  rules?: ControllerProps<T>["rules"];
  showPasswordToggle?: boolean;
  trailingElement?: ReactNode;
}

export function ValidatedTextInput<T extends FieldValues = FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  id,
  label,
  containerClassName,
  labelClassName,
  inputClassName,
  showPasswordToggle = false,
  trailingElement,
  type = "text",
  ...inputProps
}: ValidatedTextInputProps<T>) {
  const generatedId = useId();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputId = id ?? name ?? generatedId;
  const errorId = `${inputId}-error`;
  const resolvedType = showPasswordToggle
    ? isPasswordVisible
      ? "text"
      : "password"
    : type;

  const hasTrailingSlot = showPasswordToggle || Boolean(trailingElement);

  const renderField = (
    fieldProps: ComponentProps<"input">,
    errorMessage?: string,
  ) => (
    <div className={cn("flex w-full flex-col gap-1.5", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-sm font-medium text-foreground",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}

      <div className="relative w-full">
        <Input
          {...inputProps}
          {...fieldProps}
          id={inputId}
          type={resolvedType}
          aria-invalid={errorMessage ? true : undefined}
          aria-describedby={errorMessage ? errorId : undefined}
          className={cn(hasTrailingSlot && "pr-10", inputClassName)}
        />

        {hasTrailingSlot && (
          <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-2.5">
            {trailingElement}
            {showPasswordToggle && (
              <button
                type="button"
                onClick={() => setIsPasswordVisible((visible) => !visible)}
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                aria-pressed={isPasswordVisible}
                className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {isPasswordVisible ? (
                  <EyeOff className="size-4" aria-hidden="true" />
                ) : (
                  <Eye className="size-4" aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        )}
      </div>

      {errorMessage && (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );

  if (name && control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        {...(defaultValue !== undefined
          ? { defaultValue: defaultValue as never }
          : {})}
        render={({ field, fieldState }) =>
          renderField(
            {
              name: field.name,
              value: field.value ?? "",
              onChange: field.onChange,
              onBlur: field.onBlur,
              ref: field.ref,
              disabled: field.disabled,
            },
            fieldState.error?.message,
          )
        }
      />
    );
  }

  return renderField(defaultValue !== undefined ? { defaultValue } : {});
}

export default ValidatedTextInput;

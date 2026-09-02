"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "@/components/shared/modal";
import { SelectField } from "@/components/shared/select-field";
import { ValidatedTextInput } from "@/components/shared/validated-text-input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { requestDemo } from "@/mock/request-demo";
import { solutions } from "@/mock/solutions";
import type { RequestDemoModalProps } from "@/types/features/request-demo";
import {
  requestDemoSchema,
  type RequestDemoValues,
} from "@/validations/features/request-demo.zod";

const solutionOptions = solutions.map((solution) => solution.title);

const fieldClassNames = {
  label: "text-[13px] font-semibold text-[#191C1E]",
  input:
    "h-11 rounded-[6px] border-[#E4E6EB] bg-white px-3 text-[14px] text-[#191C1E] placeholder:text-[#9A9CA5]",
};

function RequestDemoModal({ trigger }: RequestDemoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { eyebrow, title, description, organizationSizes } = requestDemo;

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<RequestDemoValues>({
    resolver: zodResolver(requestDemoSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      solution: "",
      companyName: "",
      jobTitle: "",
      organizationSize: "",
      question: "",
      consent: false,
    },
  });

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  const onSubmit = handleSubmit(() => {
    closeModal();
  });

  return (
    <Modal
      trigger={trigger}
      open={isOpen}
      onOpenChange={(open) => (open ? setIsOpen(true) : closeModal())}
      classNames={{
        content:
          "font-poppins max-h-[90vh] w-full max-w-[calc(100%-2rem)] gap-0 overflow-y-auto rounded-[12px] p-0 md:max-w-[760px]",
      }}
    >
      <form onSubmit={onSubmit} noValidate className="flex flex-col">
        <div className="flex flex-col gap-3 px-5 pt-6 pb-5 lg:px-8 lg:pt-8">
          <Badge className="h-auto w-fit rounded-full bg-[#1E3C8C] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
            {eyebrow}
          </Badge>

          <DialogTitle className="font-poppins text-[22px] font-bold text-[#1E3C8C] lg:text-[26px]">
            {title}
          </DialogTitle>

          <DialogDescription className="text-[13px] leading-relaxed text-[#444651] lg:text-[14px]">
            {description}
          </DialogDescription>
        </div>

        <div className="flex flex-col gap-5 px-5 pb-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <ValidatedTextInput<RequestDemoValues>
              name="fullName"
              control={control}
              label="Full Name"
              placeholder="John Doe"
              labelClassName={fieldClassNames.label}
              inputClassName={fieldClassNames.input}
            />

            <ValidatedTextInput<RequestDemoValues>
              name="contactNumber"
              control={control}
              type="tel"
              label="Contact Number"
              placeholder="+1 (555) 000-0000"
              labelClassName={fieldClassNames.label}
              inputClassName={fieldClassNames.input}
            />

            <ValidatedTextInput<RequestDemoValues>
              name="email"
              control={control}
              type="email"
              label="Email Address"
              placeholder="john@company.com"
              labelClassName={fieldClassNames.label}
              inputClassName={fieldClassNames.input}
            />

            <Controller
              name="solution"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex w-full flex-col gap-1.5">
                  <label className={fieldClassNames.label}>
                    Solution for Demo
                  </label>

                  <SelectField
                    value={field.value || null}
                    onValueChange={(value) => field.onChange(value ?? "")}
                    options={solutionOptions}
                    placeholder="Select a solution"
                    ariaLabel="Solution for Demo"
                    classNames={{ trigger: fieldClassNames.input }}
                  />

                  {fieldState.error?.message && (
                    <p role="alert" className="text-sm text-destructive">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />

            <ValidatedTextInput<RequestDemoValues>
              name="companyName"
              control={control}
              label="Company Name"
              placeholder="Enterprise Corp"
              labelClassName={fieldClassNames.label}
              inputClassName={fieldClassNames.input}
            />

            <ValidatedTextInput<RequestDemoValues>
              name="jobTitle"
              control={control}
              label="Current Job Title"
              placeholder="Director of IT"
              labelClassName={fieldClassNames.label}
              inputClassName={fieldClassNames.input}
            />
          </div>

          <Controller
            name="organizationSize"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex w-full flex-col gap-1.5">
                <label className={fieldClassNames.label}>
                  Organization Size
                </label>

                <SelectField
                  value={field.value || null}
                  onValueChange={(value) => field.onChange(value ?? "")}
                  options={organizationSizes}
                  placeholder="Select size"
                  ariaLabel="Organization Size"
                  classNames={{ trigger: fieldClassNames.input }}
                />

                {fieldState.error?.message && (
                  <p role="alert" className="text-sm text-destructive">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="question"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex w-full flex-col gap-1.5">
                <label htmlFor="question" className={fieldClassNames.label}>
                  Ask a Question
                </label>

                <Textarea
                  {...field}
                  id="question"
                  rows={4}
                  placeholder="Tell us more about your specific needs..."
                  aria-invalid={fieldState.error ? true : undefined}
                  className="min-h-[110px] rounded-[6px] border-[#E4E6EB] bg-white px-3 py-3 text-[14px] text-[#191C1E] placeholder:text-[#9A9CA5]"
                />

                {fieldState.error?.message && (
                  <p role="alert" className="text-sm text-destructive">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="consent"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="demo-consent"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                    onBlur={field.onBlur}
                    aria-invalid={fieldState.error ? true : undefined}
                    className="mt-0.5"
                  />

                  <label
                    htmlFor="demo-consent"
                    className="text-[12px] leading-relaxed text-[#444651] lg:text-[13px]"
                  >
                    I agree to be contacted by Tech Avenue regarding this
                    request and receive relevant communications. I understand I
                    can unsubscribe at any time.
                  </label>
                </div>

                {fieldState.error?.message && (
                  <p role="alert" className="text-sm text-destructive">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-[#E4E6EB] px-5 py-5 md:flex-row md:justify-end lg:px-8">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={closeModal}
            className="h-11 w-full rounded-[4px] border-[#1E3C8C] text-[14px] font-medium tracking-normal text-[#1E3C8C] md:w-[150px]"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="brand"
            size="lg"
            disabled={isSubmitting}
            className="h-11 w-full rounded-[4px] text-[14px] font-medium tracking-normal md:w-[170px]"
          >
            Request Demo
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export { RequestDemoModal };

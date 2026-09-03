"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Container } from "@/components/shared/container";
import { Jumbotron } from "@/components/shared/jumbotron";
import { SelectField } from "@/components/shared/select-field";
import { ValidatedTextInput } from "@/components/shared/validated-text-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { industries } from "@/mock/industry";
import { serviceDetails } from "@/mock/services";
import type { ContactFormProps } from "@/types/features/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/validations/features/contact.zod";

const successStoriesHref = "/success-stories";

const industryOptions = industries.map((industry) => industry.title);

const serviceOptions = serviceDetails.map((service) => service.title);

const fieldClassNames = {
  label: "text-[13px] font-medium text-[#191C1E]",
  input:
    "h-11 rounded-[6px] border-transparent bg-[#F5F6F8] px-3 text-[14px] text-[#191C1E] placeholder:text-[#9A9CA5]",
};

function ContactForm({ title, description }: ContactFormProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      contactNumber: "",
      organization: "",
      industry: "",
      serviceOfInterest: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = handleSubmit(() => {
    reset();
  });

  return (
    <Container>
      <div className="flex justify-center">
        <div className="w-[900px]  font-poppins flex flex-col gap-8">
          <Jumbotron
            title={title}
            description={description}
            classNames={{
              mainWrapper: "px-0 py-0 lg:px-0 lg:py-0",
              content: "gap-3",
              title:
                "font-poppins text-[24px] font-bold text-[#191C1E] md:text-[28px] lg:text-[32px]",
              description: "text-[15px] leading-relaxed text-[#444651]",
            }}
          />
          <form
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-5 rounded-[12px] bg-white p-6 shadow-[0px_30px_60px_0px_rgba(0,0,0,0.06)] lg:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <ValidatedTextInput<ContactFormValues>
                name="fullName"
                control={control}
                label="Full Name*"
                placeholder="John Doe"
                labelClassName={fieldClassNames.label}
                inputClassName={fieldClassNames.input}
              />
              <ValidatedTextInput<ContactFormValues>
                name="companyName"
                control={control}
                label="Company Name"
                placeholder="Acme Corp"
                labelClassName={fieldClassNames.label}
                inputClassName={fieldClassNames.input}
              />
              <ValidatedTextInput<ContactFormValues>
                name="email"
                control={control}
                type="email"
                label="Email Address*"
                placeholder="john@company.com"
                labelClassName={fieldClassNames.label}
                inputClassName={fieldClassNames.input}
              />
              <ValidatedTextInput<ContactFormValues>
                name="contactNumber"
                control={control}
                type="tel"
                label="Contact Number*"
                placeholder="+92 300 0000000"
                labelClassName={fieldClassNames.label}
                inputClassName={fieldClassNames.input}
              />
              <ValidatedTextInput<ContactFormValues>
                name="organization"
                control={control}
                label="Organization*"
                placeholder="Organization Type"
                labelClassName={fieldClassNames.label}
                inputClassName={fieldClassNames.input}
              />
              <Controller
                name="industry"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="flex w-full flex-col gap-1.5">
                    <label className={fieldClassNames.label}>Industry</label>
                    <SelectField
                      value={field.value || null}
                      onValueChange={(value) => field.onChange(value ?? "")}
                      options={industryOptions}
                      placeholder="Select industry"
                      ariaLabel="Industry"
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
            </div>
            <Controller
              name="serviceOfInterest"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex w-full flex-col gap-1.5">
                  <label className={fieldClassNames.label}>
                    Service of Interest
                  </label>
                  <SelectField
                    value={field.value || null}
                    onValueChange={(value) => field.onChange(value ?? "")}
                    options={serviceOptions}
                    placeholder="Select a service"
                    ariaLabel="Service of Interest"
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
            <ValidatedTextInput<ContactFormValues>
              name="subject"
              control={control}
              label="Subject*"
              placeholder="Brief subject of inquiry"
              labelClassName={fieldClassNames.label}
              inputClassName={fieldClassNames.input}
            />
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex w-full flex-col gap-1.5">
                  <label htmlFor="message" className={fieldClassNames.label}>
                    Message*
                  </label>
                  <Textarea
                    {...field}
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    aria-invalid={fieldState.error ? true : undefined}
                    className="min-h-[140px] rounded-[6px] border-transparent bg-[#F5F6F8] px-3 py-3 text-[14px] text-[#191C1E] placeholder:text-[#9A9CA5]"
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
                      id="consent"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                      onBlur={field.onBlur}
                      aria-invalid={fieldState.error ? true : undefined}
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="consent"
                      className="text-[13px] leading-relaxed text-[#444651]"
                    >
                      I agree to be contacted by Tech Avenue regarding my
                      inquiry and understand that my information will be
                      processed according to the company&apos;s privacy policy.
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
            <div className="grid gap-4 md:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                size="lg"
                arrow
                nativeButton={false}
                render={<Link href={successStoriesHref} />}
                className="h-12 w-full text-[14px] font-medium tracking-normal"
              >
                View Success Stories
              </Button>
              <Button
                type="submit"
                variant="brand"
                size="lg"
                disabled={isSubmitting}
                className="h-12 w-full rounded-[4px] text-[14px] font-medium tracking-normal"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export { ContactForm };

import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  companyName: z.string().trim().optional(),
  email: z.email("Enter a valid email address"),
  contactNumber: z
    .string()
    .trim()
    .min(1, "Contact number is required")
    .regex(/^[+\d][\d\s-]{6,}$/, "Enter a valid contact number"),
  organization: z.string().trim().min(1, "Organization is required"),
  industry: z.string().trim().optional(),
  verticleOfInterest: z.string().trim().optional(),
  subject: z.string().trim().min(1, "Subject is required"),
  message: z.string().trim().min(20, "Message must be at least 20 characters"),
  consent: z
    .boolean()
    .refine((accepted) => accepted, "Please accept before submitting"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

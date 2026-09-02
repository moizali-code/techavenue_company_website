import { z } from "zod";

export const requestDemoSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  contactNumber: z
    .string()
    .trim()
    .min(1, "Contact number is required")
    .regex(/^[+\d][\d\s-]{6,}$/, "Enter a valid contact number"),
  email: z.email("Enter a valid email address"),
  solution: z.string().trim().min(1, "Select a solution"),
  companyName: z.string().trim().min(1, "Company name is required"),
  jobTitle: z.string().trim().optional(),
  organizationSize: z.string().trim().min(1, "Select an organization size"),
  question: z.string().trim().optional(),
  consent: z
    .boolean()
    .refine((accepted) => accepted, "Please accept before submitting"),
});

export type RequestDemoValues = z.infer<typeof requestDemoSchema>;

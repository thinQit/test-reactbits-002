import { z } from "zod";

export const contactTopicValues = [
  "Sales",
  "Enterprise",
  "Integrations",
  "Support",
  "Billing",
  "Partnerships",
] as const;

export const checkoutPlanValues = [
  "starter",
  "pro-monthly",
  "pro-annual",
  "team-monthly",
  "team-annual",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  topic: z.enum(contactTopicValues),
  company: z
    .string()
    .trim()
    .max(120, "Company is too long")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message is too long"),
});

export const checkoutSchema = z.object({
  planId: z.enum(checkoutPlanValues),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  fullName: z.string().trim().min(1, "Full name is required").max(120, "Full name is too long"),
  company: z
    .string()
    .trim()
    .max(120, "Company is too long")
    .optional()
    .or(z.literal("")),
  country: z.string().trim().min(2, "Country is required").max(100, "Country is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;

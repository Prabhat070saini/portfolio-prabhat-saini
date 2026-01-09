import * as z from "zod";

/**
 * Contact form validation schema
 * Validates name, email, phone number, and message fields
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),

  MobileNo: z
    .string()
    .refine(
      (val) => val === "" || (val.length === 10 && /^[0-9]+$/.test(val)),
      {
        message: "Phone number must be exactly 10 digits",
      }
    )
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

/**
 * Inferred TypeScript type from the contact form schema
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

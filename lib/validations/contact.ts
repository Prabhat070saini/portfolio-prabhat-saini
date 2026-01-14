import * as z from "zod";

/**
 * Input schema for Contact Form
 * Validates data sent from the client
 */
export const contactInputSchema = z.object({
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
 * Output schema for Contact Form API response
 * Validates data returned to the client
 */
export const contactOutputSchema = z.object({
  message: z.string(),
  data: z.null(),
});

/**
 * Inferred Types
 */
export type ContactInput = z.infer<typeof contactInputSchema>;
export type ContactOutput = z.infer<typeof contactOutputSchema>;

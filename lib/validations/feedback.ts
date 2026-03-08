import { z } from "zod";

export const feedbackInputSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  contact: z
    .string()
    .min(1, "Email or mobile number is required")
    .refine(
      (value) => {
        // Check if it's a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if it's a valid phone number (10+ digits)
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return emailRegex.test(value) || phoneRegex.test(value.replace(/\s/g, ""));
      },
      { message: "Please enter a valid email or mobile number" }
    ),
  feedback: z
    .string()
    .min(10, "Feedback must be at least 10 characters")
    .max(1000, "Feedback must be less than 1000 characters"),
});

export type FeedbackInput = z.infer<typeof feedbackInputSchema>;

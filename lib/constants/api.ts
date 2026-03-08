// API Response Messages and Status Codes

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const API_MESSAGES = {
  // Feedback API
  feedback: {
    success: "Feedback submitted successfully",
    fetchSuccess: "Feedbacks fetched successfully",
    validationFailed: "Validation failed",
    submitError: "Failed to submit feedback",
    fetchError: "Failed to fetch feedbacks",
  },

  // Visitor Tracking API
  tracking: {
    success: "Visit tracked successfully",
    fetchSuccess: "Visitor stats fetched successfully",
    trackError: "Failed to track visit",
    fetchError: "Failed to fetch visitor stats",
  },

  // Resume API
  resume: {
    notFound: "No active resume found",
    fetchError: "Failed to fetch resume",
  },

  // Contact/Send Email API
  contact: {
    success: "Message sent successfully",
    validationFailed: "Validation failed",
    sendError: "Failed to send message",
  },

  // General
  general: {
    internalError: "Something went wrong. Please try again later.",
  },
} as const;

// Anonymous IP placeholder
export const ANONYMOUS_IP = "anonymous";

"use client";

import { useEffect } from "react";

export function VisitorTracker() {
  useEffect(() => {
    // Track visit on component mount (page load)
    const trackVisit = async () => {
      try {
        await fetch("/api/track-visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        // Silently fail - tracking should not affect user experience
        console.error("Failed to track visit:", error);
      }
    };

    trackVisit();
  }, []);

  // This component doesn't render anything
  return null;
}

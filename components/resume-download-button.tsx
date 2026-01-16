"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeDownloadButtonProps extends ButtonProps {
  href?: string;
  loadingText?: string;
  children: React.ReactNode;
}

export function ResumeDownloadButton({
  href = siteConfig.socialLinks.resume,
  loadingText = "Downloading...",
  children,
  className,
  onClick,
  ...props
}: ResumeDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (!href) return;

    e.preventDefault();
    setIsLoading(true);

    // Trigger download
    window.location.href = href;

    // Reset loading state after a delay (3 seconds) to simulate checking
    // Since we can't track file download progress easily in browser
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading || props.disabled}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

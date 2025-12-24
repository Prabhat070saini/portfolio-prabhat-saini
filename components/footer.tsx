import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {siteConfig.copyrightText}
          </p>
          <div className="flex gap-6">
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Icons.GitHub className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.LinkedIn className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socialLinks.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Icons.Gmail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

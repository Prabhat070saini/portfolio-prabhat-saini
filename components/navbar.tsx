"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { uiText } from "@/data/ui-text";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="invisible">
        <Sun className="h-5 w-5" />
        <span className="sr-only">
          {uiText.components.navbar.ariaLabels.toggleTheme}
        </span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">
        {uiText.components.navbar.ariaLabels.toggleTheme}
      </span>
    </Button>
  );
}

function NavLinks({
  pathname,
  onClick,
}: {
  pathname: string;
  onClick?: () => void;
}) {
  return (
    <>
      {siteConfig.navLinks.map((item) => (
        <Link key={item.href} href={item.href} onClick={onClick}>
          <Button
            variant="ghost"
            className={cn(
              "relative w-full md:w-auto justify-start md:justify-center",
              pathname === item.href &&
                "text-foreground bg-accent md:bg-transparent"
            )}
          >
            {item.name}
            {pathname === item.href && (
              <motion.div
                layoutId="navbar-indicator-desktop"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary hidden md:block"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Button>
        </Link>
      ))}
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border backdrop-blur bg-background/80 supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            {siteConfig.logo}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLinks pathname={pathname} />
            <Link href="/contact" className="ml-4">
              <Button variant="default" size="sm">
                Hire Me
              </Button>
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label={uiText.components.navbar.ariaLabels.toggleMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-1">
                <NavLinks
                  pathname={pathname}
                  onClick={() => setMobileMenuOpen(false)}
                />
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block pt-2"
                >
                  <Button className="w-full justify-center">Hire Me</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

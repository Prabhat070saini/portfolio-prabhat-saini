"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeDownloadButton } from "@/components/resume-download-button";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <main className="container relative z-[99999] mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-sm text-muted-foreground"
          >
            {homeContent.role}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            {homeContent.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed text-pretty max-w-3xl"
          >
            {homeContent.heroDescription.prefix}{" "}
            <span className="text-foreground font-semibold">
              {homeContent.heroDescription.technologies[0].text}
            </span>{" "}
            {homeContent.heroDescription.technologies[1].text}{" "}
            <span className="text-foreground font-semibold">
              {homeContent.heroDescription.technologies[2].text}
            </span>
            {homeContent.heroDescription.suffix}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button size="lg" className="group" asChild>
              <Link href="/projects">
                {homeContent.buttons.viewProjects}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">{homeContent.buttons.contactMe}</Link>
            </Button>
            <ResumeDownloadButton size="lg" variant="outline">
              {homeContent.buttons.downloadCV}
              <FileText className="ml-2 h-4 w-4" />
            </ResumeDownloadButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">
                {homeContent.socialLinks.github.ariaLabel}
              </span>
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">
                {homeContent.socialLinks.linkedin.ariaLabel}
              </span>
            </a>
            <a
              href={siteConfig.socialLinks.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">
                {homeContent.socialLinks.email.ariaLabel}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

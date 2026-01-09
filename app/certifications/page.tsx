"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Certifications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Professional certifications and courses demonstrating technical
            expertise and continuous learning.
          </motion.p>

          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 border-border bg-card hover:bg-card/80 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div>
                        <h2 className="text-xl font-semibold mb-1">
                          {cert.title}
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="font-medium">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                      {cert.description && (
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {cert.description}
                        </p>
                      )}
                    </div>
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full md:w-auto gap-2 shrink-0"
                      >
                        View Credential
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

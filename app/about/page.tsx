"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { aboutContent } from "@/data/about";

export default function AboutPage() {
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
            {aboutContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            {aboutContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8">
              {aboutContent.highlights.sectionTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {aboutContent.highlights.items.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-6 h-full border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <highlight.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-8">
              {aboutContent.education.sectionTitle}
            </h2>
            <div className="space-y-4">
              {aboutContent.education.items.map((edu, index) => (
                <Card key={index} className="p-6 border-border bg-card">
                  <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.location}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {edu.duration}
                    </span>
                    <span className="font-medium">{edu.cgpa}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

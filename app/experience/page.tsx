"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { uiText } from "@/data/ui-text";

export default function ExperiencePage() {
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
            {uiText.pages.experience.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            {uiText.pages.experience.description}
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <Card className="p-6 border-border bg-card">
                  <div className="flex gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-1">{exp.role}</h2>
                      <p className="text-base text-muted-foreground mb-1">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-sm text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const name = typeof tech === "string" ? tech : tech.name;
                      const Icon = typeof tech === "object" ? tech.icon : null;

                      return (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="px-3 py-1.5 text-sm font-medium flex items-center gap-2"
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                          {name}
                        </Badge>
                      );
                    })}
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

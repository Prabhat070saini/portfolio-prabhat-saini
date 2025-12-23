"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Backend Frameworks",
    skills: ["NestJS", "Express.js", "Node.js", "Gin (Go)", "GORM"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"],
  },
  {
    title: "Technologies & Tools",
    skills: ["Microservices", "RabbitMQ", "Docker", "KrakenD API Gateway", "REST API", "Git/GitHub"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C/C++", "GOLang"],
  },
  {
    title: "Domain Expertise",
    skills: ["System Design", "Data Structures & Algorithms", "DBMS", "OOPS"],
  },
]

export default function SkillsPage() {
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
            Skills & Technologies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            A comprehensive toolkit for building scalable, high-performance backend systems and modern web applications.
          </motion.p>

          <div className="grid gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              >
                <Card className="p-6 border-border bg-card">
                  <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium cursor-default">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

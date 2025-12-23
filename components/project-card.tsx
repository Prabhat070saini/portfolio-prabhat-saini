"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  name: string
  description: string
  techStack: string[]
  achievements?: string[]
  githubLink?: string
  liveLink?: string
}

export function ProjectCard({ name, description, techStack, achievements, githubLink, liveLink }: ProjectCardProps) {
  return (
    <Card className="p-6 border-border bg-card hover:bg-accent/50 transition-colors h-full">
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

      {achievements && achievements.length > 0 && (
        <ul className="space-y-2 mb-4">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary"
            >
              {achievement}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <Badge key={index} variant="outline" className="font-normal">
            {tech}
          </Badge>
        ))}
      </div>

      {(githubLink || liveLink) && (
        <div className="flex gap-3">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="group bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="group bg-transparent">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      )}
    </Card>
  )
}

"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import React from "react";
import { uiText } from "@/data/ui-text";

interface ProjectCardProps {
  id: string;
  slug: string;
  name: string;
  description: string;
  techStack: (string | { name: string; icon?: React.ElementType })[];
  achievements?: string[];
  githubLink?: string;
  liveLink?: string;
}

export function ProjectCard({
  id,
  slug,
  name,
  description,
  techStack,
  achievements,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <Card className="p-6 border-border bg-card hover:bg-accent/50 transition-colors h-full flex flex-col">
      <Link
        href={`/projects/${slug}`}
        className="hover:underline decoration-primary decoration-2 underline-offset-4"
      >
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
      </Link>
      <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-grow">
        {description}
      </p>

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

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => {
          const name = typeof tech === "string" ? tech : tech.name;
          const Icon = typeof tech === "object" ? tech.icon : null;

          return (
            <Badge
              key={index}
              variant="outline"
              className="px-3 py-1.5 text-sm font-medium flex items-center gap-2"
            >
              {Icon && <Icon className="h-5 w-5" />}
              {name}
            </Badge>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <Link href={`/projects/${slug}`}>
          <Button variant="default" size="sm">
            {uiText.components.projectCard.buttons.viewDetails}
          </Button>
        </Link>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="group bg-transparent"
            >
              <Icons.GitHub className="mr-2 h-4 w-4" />
              {uiText.components.projectCard.buttons.code}
            </Button>
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="group bg-transparent"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {uiText.components.projectCard.buttons.liveDemo}
            </Button>
          </a>
        )}
      </div>
    </Card>
  );
}

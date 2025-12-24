import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Icons.GitHub className="h-4 w-4" />
                View Code
              </Button>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => {
                const name = typeof tech === "string" ? tech : tech.name;
                const Icon = typeof tech === "object" ? tech.icon : null;
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 flex items-center gap-2"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {name}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {project.achievements?.map((achievement, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="block h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

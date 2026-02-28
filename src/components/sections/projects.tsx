"use client";

import { MotionSection, MotionDiv } from "@/components/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code2, ImageIcon } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <MotionSection id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <MotionDiv>
          <p className="text-sm font-mono text-primary mb-2">
            {"// projects"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-12">
            Highlights from university research, freelance work, and AI
            automation systems.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <MotionDiv key={project.title} delay={i * 0.1}>
              <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors group h-full">
                <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary/10 border-b border-border flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
                    <ImageIcon className="size-8" />
                    <span className="text-xs font-mono">
                      architecture diagram
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="font-mono text-xs">
                      <Calendar className="size-3" />
                      {project.date}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Code2 className="size-3 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="font-mono text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

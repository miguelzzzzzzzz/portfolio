"use client";

import { MotionSection, MotionDiv } from "@/components/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <MotionSection id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <MotionDiv>
          <p className="text-sm font-mono text-primary mb-2">
            {"// experience"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Work History
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-12">
            From IT infrastructure to AI automation — a timeline of building,
            breaking, and shipping.
          </p>
        </MotionDiv>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <MotionDiv key={`${job.company}-${job.role}`} delay={i * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 size-3 rounded-full border-2 border-primary bg-background z-10" />

                  <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{job.role}</h3>
                          <div className="flex items-center gap-2 text-primary font-mono text-sm">
                            <Briefcase className="size-3.5" />
                            <span>{job.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                          <Badge
                            variant="secondary"
                            className="font-mono text-xs"
                          >
                            <Calendar className="size-3" />
                            {job.period}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="size-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.description.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-2 block size-1 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

"use client";

import { MotionSection, MotionDiv } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Bot, Wrench, Cpu } from "lucide-react";
import { skills } from "@/lib/data";

const skillGroups = [
  { title: "Languages", icon: Code, items: skills.languages },
  { title: "Frameworks & Libraries", icon: Cpu, items: skills.frameworks },
  { title: "Data & Analytics", icon: Database, items: skills.data },
  { title: "AI & Machine Learning", icon: Brain, items: skills.ai_ml },
  { title: "Automation", icon: Bot, items: skills.automation },
  { title: "Tools & Infrastructure", icon: Wrench, items: skills.tools },
];

export function Skills() {
  return (
    <MotionSection id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <MotionDiv>
          <p className="text-sm font-mono text-primary mb-2">
            {"// skills"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-12">
            A comprehensive toolkit built across full-stack development, data
            science, machine learning, and AI automation.
          </p>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <MotionDiv key={group.title} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-card p-6 h-full hover:border-primary/30 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <group.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

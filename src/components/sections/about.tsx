"use client";

import { MotionSection, MotionDiv } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Award, ExternalLink, KeyRound } from "lucide-react";
import { education, certifications } from "@/lib/data";

export function About() {
  return (
    <MotionSection id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <MotionDiv>
          <p className="text-sm font-mono text-primary mb-2">{"// about me"}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Engineering Background
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-12">
            I&apos;m a Computer Engineering graduate from the Technological
            Institute of the Philippines with a focus on Data Science. My journey
            spans from hands-on IT infrastructure to building AI-powered
            automation systems and full-stack web applications. I thrive at the
            intersection of machine learning, software engineering, and
            automation — always looking for ways to leverage technology to solve
            real-world problems.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-8">
          <MotionDiv delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Education</h3>
              </div>
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-primary font-mono">{edu.major}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <MapPin className="size-3" />
                    <span>
                      {edu.school}, {edu.location}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.period}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Award className="size-3 text-primary" />
                    <span className="text-sm">
                      {edu.honors} · GPA: {edu.gpa}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {edu.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 block size-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <span className="font-medium">{cert.name}</span>
                      {"url" in cert && cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 mt-0.5 text-xs text-primary hover:underline"
                        >
                          <ExternalLink className="size-3" />
                          View credential
                        </a>
                      ) : "credentialId" in cert && cert.credentialId ? (
                        <p className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                          <KeyRound className="size-3" />
                          <span className="font-mono">{cert.credentialId}</span>
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}

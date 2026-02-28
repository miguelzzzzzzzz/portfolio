"use client";

import { MotionSection, MotionDiv } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <MotionSection id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <MotionDiv>
          <p className="text-sm font-mono text-primary mb-2">
            {"// contact"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mb-12">
            Have a project in mind or just want to connect? Feel free to reach
            out.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12">
          <MotionDiv delay={0.1}>
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-card group-hover:border-primary/30 transition-colors">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    Email
                  </p>
                  <p className="text-sm group-hover:text-primary transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-card group-hover:border-primary/30 transition-colors">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    Phone
                  </p>
                  <p className="text-sm group-hover:text-primary transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-card">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    Location
                  </p>
                  <p className="text-sm">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-card" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-card"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-card"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-card resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="size-4" />
                Send Message
              </Button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}

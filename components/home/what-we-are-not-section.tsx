import { SectionReveal } from "@/components/section-reveal"
import { X } from "lucide-react"

const notList = [
  "We don’t interrupt people where they come to unwind",
  "We don’t chase clicks, impressions, or vanity metrics",
  "We don’t place ads in spaces that feel rushed or noisy",
  "We don’t believe attention can be forced",
  "We don’t try to reach everyone, everywhere",
]

const areList = [
  "We believe attention is earned over time",
  "We focus on calm, repeated visibility",
  "We respect the spaces and the people in them",
  "We work with brands that think long-term",
  "We build familiarity, not distraction",
]

export function WhatWeAreNotSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-primary">
              Our Approach
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
              A quieter, more thoughtful way to be seen.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* What We're Not */}
          <SectionReveal delay={100}>
            <div className="space-y-6">
              <h3 className="font-sans text-xl text-muted-foreground uppercase tracking-wide">
                What we don’t do
              </h3>
              <ul className="space-y-4">
                {notList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5"
                  >
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                      <X className="h-3 w-3" />
                    </span>
                    <span className="font-body text-lg text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* What We Are */}
          <SectionReveal delay={200}>
            <div className="space-y-6">
              <h3 className="font-sans text-xl text-primary uppercase tracking-wide">
                What we focus on
              </h3>
              <ul className="space-y-4">
                {areList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-primary/5"
                  >
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      ✓
                    </span>
                    <span className="font-body text-lg text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

import { SectionReveal } from "@/components/section-reveal"
import { MapPin, Clock, Eye } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Local Spaces",
    description: "Cafes, salons, clinics, gyms - places people visit regularly and trust.",
  },
  {
    icon: Clock,
    title: "Time Spent",
    description: "Not passing by, but actually spending time. Waiting, relaxing, being present.",
  },
  {
    icon: Eye,
    title: "Calm Attention",
    description: "No screens fighting for attention. Just a clean display, seen naturally.",
  },
]

export function WhatIsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-body text-sm uppercase tracking-widest text-primary">What is AdKaro</span>
                <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
                  A different kind of advertising platform.
                </h2>
              </div>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
                AdKaro places clean, minimal advertising displays in high-footfall real-world spaces. Not billboards.
                Not digital screens. Simple, elegant frames in places where people are already present and attentive.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
                We believe advertising should feel like a natural part of a space — noticed because it belongs, not
                because it interrupts.
              </p>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <SectionReveal key={feature.title} delay={index * 100}>
                  <div className="group flex gap-6 p-6 rounded-2xl bg-secondary/50 transition-all duration-300 hover:bg-secondary">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <feature.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-xl text-foreground">{feature.title}</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

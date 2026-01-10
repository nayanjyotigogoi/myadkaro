import { SectionReveal } from "@/components/section-reveal"
import Link from "next/link"
import { ArrowRight, Megaphone, Store } from "lucide-react"

export function AudienceSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-body text-sm uppercase tracking-widest text-primary">Who We Serve</span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
              Two sides of the same story.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Advertisers Card */}
          <SectionReveal delay={100}>
            <Link
              href="/advertisers"
              className="group relative block h-full rounded-3xl overflow-hidden bg-primary p-10 lg:p-14 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/20 text-primary-foreground mb-8">
                  <Megaphone className="h-7 w-7" />
                </div>

                <h3 className="font-sans text-3xl lg:text-4xl text-primary-foreground mb-4">For Advertisers</h3>
                <p className="font-body text-lg text-primary-foreground/80 leading-relaxed flex-grow">
                  Reach local audiences in spaces where they're relaxed, present, and paying attention. No algorithms.
                  No ad fatigue. Just genuine visibility that builds recognition over time.
                </p>

                <div className="mt-8 flex items-center gap-2 font-body text-primary-foreground">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary-foreground/5 transition-transform duration-500 group-hover:scale-150" />
            </Link>
          </SectionReveal>

          {/* Space Providers Card */}
          <SectionReveal delay={200}>
            <Link
              href="/spaces"
              className="group relative block h-full rounded-3xl overflow-hidden bg-card border-2 border-border p-10 lg:p-14 transition-all duration-500 hover:border-primary hover:shadow-2xl"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8">
                  <Store className="h-7 w-7" />
                </div>

                <h3 className="font-sans text-3xl lg:text-4xl text-foreground mb-4">For Space Providers</h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed flex-grow">
                  Turn unused wall space into passive income. We handle everything - from installation to content
                  curation - while you retain full approval over what's displayed.
                </p>

                <div className="mt-8 flex items-center gap-2 font-body text-primary">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "We partner with spaces",
    description:
      "We identify high-footfall locations where people spend meaningful time — cafes, salons, waiting rooms, fitness studios.",
  },
  {
    step: "02",
    title: "We install clean displays",
    description:
      "Minimal, elegant frames that complement the space. No screens, no flashing. Just beautiful, static presence.",
  },
  {
    step: "03",
    title: "Your brand gets seen",
    description:
      "Repeatedly, calmly, by the same local audience. Building recognition through natural, repeated exposure.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-body text-sm uppercase tracking-widest text-primary">How It Works</span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
              Simple. Intentional. Effective.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16 lg:mt-24">
          <div className="grid gap-6 lg:gap-0 lg:grid-cols-3">
            {steps.map((step, index) => (
              <SectionReveal key={step.step} delay={index * 150}>
                <div className="relative group">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-1/2 w-full h-px bg-border z-0">
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center p-8">
                    {/* Step Number */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-body text-lg font-medium transition-transform duration-300 group-hover:scale-110">
                      {step.step}
                    </div>

                    <h3 className="mt-6 font-sans text-2xl text-foreground">{step.title}</h3>
                    <p className="mt-3 font-body text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Visual Representation */}
        <SectionReveal>
          <div className="mt-20 lg:mt-32 relative rounded-3xl overflow-hidden bg-secondary p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="font-sans text-3xl lg:text-4xl text-foreground leading-tight">
                  Imagine your brand here.
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  In a quiet corner where guests settle in. 
                  On a table they pass every morning. 
                  Always present - never intrusive - building familiarity and trust over time.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/minimal-elegant-advertising-display-frame-in-cozy-.jpg"
                  alt="AdKaro display in a café setting"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

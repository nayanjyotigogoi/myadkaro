import { SectionReveal } from "@/components/section-reveal"
import { Sparkles, Target, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Focused Beginnings",
    description:
      "We start with a small number of carefully chosen neighborhoods and spaces to ensure every placement feels right.",
  },
  {
    icon: Lightbulb,
    title: "Learning by Doing",
    description:
      "Each space and partnership helps us refine how physical advertising should feel — calm, relevant, and respectful.",
  },
  {
    icon: Sparkles,
    title: "Growing Carefully",
    description:
      "We expand at a pace that keeps the experience consistent and the spaces respected.",
  },
]

export function PilotSection() {
  return (
    <section className="py-24 lg:py-32 bg-accent/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 font-body text-sm text-accent-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Early Phase
            </div>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
              Built carefully, not hurriedly.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              AdKaro is growing thoughtfully — starting small, learning deeply, and shaping a better way to place
              advertising in real spaces. 
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <SectionReveal key={pillar.title} delay={index * 100}>
              <div className="group text-center p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-accent hover:shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-sans text-xl text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Note */}
        <SectionReveal>
          <div className="mt-16 p-8 lg:p-12 rounded-2xl bg-card border border-border text-center">
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We’re currently opening a limited number of partnerships with advertisers and space owners who want to
              shape how AdKaro grows. Early collaborators play a meaningful role in defining the experience.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center mt-6 rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
            >
              Become an early partner
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

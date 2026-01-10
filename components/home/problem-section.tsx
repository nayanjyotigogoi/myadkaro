import { SectionReveal } from "@/components/section-reveal"

const problems = [
  {
    number: "01",
    title: "Attention is fragmented",
    description: "People scroll past thousands of ads daily. The brain has learned to ignore them.",
  },
  {
    number: "02",
    title: "Digital noise overwhelms",
    description: "Ad blockers, skip buttons - audiences are actively avoiding ads.",
  },
  {
    number: "03",
    title: "Local businesses struggle",
    description: "Big platforms favor big budgets. Local brands can't compete for attention online.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="space-y-4 max-w-3xl">
            <span className="font-body text-sm uppercase tracking-widest text-primary-foreground/60">The Problem</span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
              Modern advertising has a problem.
            </h2>
            <p className="font-body text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              It's everywhere, yet nowhere. Loud, yet ignored. Expensive, yet ineffective for the businesses that need
              it most.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 lg:mt-24">
          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <SectionReveal key={problem.number} delay={index * 150}>
                <div className="group relative p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-500 hover:bg-primary-foreground/10">
                  <span className="font-body text-5xl font-light text-primary-foreground/20">{problem.number}</span>
                  <h3 className="mt-4 font-sans text-2xl text-primary-foreground">{problem.title}</h3>
                  <p className="mt-3 font-body text-primary-foreground/70 leading-relaxed">{problem.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Pull Quote */}
        <SectionReveal>
          <div className="mt-20 lg:mt-32 relative">
            <div className="absolute -left-4 top-0 text-8xl text-primary-foreground/10 font-sans">"</div>
            <blockquote className="pl-8 lg:pl-16 border-l-2 border-primary-foreground/30">
              <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-snug max-w-4xl italic">
                The best advertising doesn't feel like advertising. It feels like it belongs.
              </p>
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

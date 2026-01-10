import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"

const values = [
  {
    title: "Attention matters",
    description:
      "We believe the quality of attention is more valuable than the quantity of impressions. One person truly seeing you is worth more than a thousand scrolling past.",
  },
  {
    title: "Presence over noise",
    description:
      "In a world getting louder, we choose stillness. Calm, consistent visibility that builds familiarity rather than fighting for fleeting attention.",
  },
  {
    title: "Craft over speed",
    description:
      "We're building something different, and that takes time. We'd rather be excellent in a few places than mediocre everywhere.",
  },
  {
    title: "Respect always",
    description:
      "Respect for spaces, for audiences, for partners, for attention itself. Every decision filtered through this lens.",
  },
]

const timeline = [
  {
    phase: "Listening",
    title: "Understanding spaces",
    description:
      "We begin by learning how real spaces function — how people move, pause, and spend time within them.",
  },
  {
    phase: "Refining",
    title: "Improving the experience",
    description:
      "Every placement helps us refine design, content, and process to better fit each environment.",
  },
  {
    phase: "Deepening",
    title: "Building lasting partnerships",
    description:
      "We focus on long-term relationships with spaces and brands that value quality and consistency.",
  },
]


export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-body text-sm text-primary mb-6">
                  About AdKaro
                </span>
                <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground text-balance">
                  Why we're building something different.
                </h1>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Manifesto */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl mx-auto space-y-8">
                <p className="font-body text-xl lg:text-2xl text-foreground leading-relaxed">
                  Advertising has lost its way.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Somewhere along the way, the industry decided that more is better. More impressions. More placements.
                  More frequency. More noise. The result? Audiences who've learned to tune everything out.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Banner blindness. Ad blockers. The skip button's muscle memory. We've all developed sophisticated
                  filters against the onslaught of messages fighting for our attention every waking moment.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  And while big brands can afford to buy their way through this noise, local businesses - the cafes, the
                  clinics, the shops that make communities vibrant - are left behind. They can't compete in the
                  attention arms race.
                </p>
                <p className="font-body text-xl lg:text-2xl text-foreground leading-relaxed">
                  We think there's a better way.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  What if advertising could be calm instead of loud? What if it could be present instead of intrusive?
                  What if it could build familiarity through patience instead of purchase?
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  That's the idea behind AdKaro. Simple, elegant displays in real spaces where real people spend real
                  time. Not competing for clicks, but earning recognition through quiet, consistent presence.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  We're not trying to revolutionize advertising. We're trying to remember what it was before it became
                  noise.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl mb-16">
                <h2 className="font-sans text-4xl md:text-5xl leading-tight">What we believe.</h2>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <SectionReveal key={value.title} delay={index * 100}>
                  <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <h3 className="font-sans text-xl text-primary-foreground mb-3">{value.title}</h3>
                    <p className="font-body text-primary-foreground/70 leading-relaxed">{value.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl mb-16">
                <h2 className="font-sans text-4xl md:text-5xl leading-tight text-foreground">Where we're going.</h2>
                <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
                  We're in the early days, and we're okay with that. Great things take time to build properly.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <SectionReveal key={item.phase} delay={index * 100}>
                  <div className="relative p-8 rounded-2xl bg-secondary/50 h-full">
                    <span className="font-body text-sm uppercase tracking-widest text-primary">{item.phase}</span>
                    <h3 className="mt-3 font-sans text-2xl text-foreground">{item.title}</h3>
                    <p className="mt-3 font-body text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-4xl mx-auto">
                <blockquote>
                  <p className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground italic">
                    "We're not building an advertising company. We're building a presence company."
                  </p>
                </blockquote>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-6">Want to be part of the story?</h2>
                <p className="font-body text-lg text-muted-foreground mb-8">
                  Whether you're interested in advertising with us, hosting a display, or just learning more — we'd love
                  to hear from you.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

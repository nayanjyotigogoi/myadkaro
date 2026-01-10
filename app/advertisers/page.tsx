import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"
import { Brain, Repeat, MapPin, Clock, Shield, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Memory, not moments",
    description: "Repeated visibility builds lasting recall. Your brand becomes familiar, trusted, remembered.",
  },
  {
    icon: MapPin,
    title: "Local relevance",
    description: "Reach the people who actually matter to your business — your neighbors, your community.",
  },
  {
    icon: Repeat,
    title: "Consistent presence",
    description: "No ad fatigue. No scroll-past. Just steady, calm visibility week after week.",
  },
  {
    icon: Clock,
    title: "Time well spent",
    description: "Your audience isn't rushing by. They're waiting, relaxing, paying attention.",
  },
  {
    icon: Shield,
    title: "No pressure",
    description: "Flexible arrangements. No long-term lock-ins. Start small, see results, then decide.",
  },
]

const faqs = [
  {
    question: "What kind of businesses is AdKaro best for?",
    answer:
      "Local businesses that want to build recognition in their community — restaurants, clinics, salons, gyms, boutiques, professional services. Brands that value being remembered over being clicked.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Brand recall builds over time. Most partners notice increased recognition after 4-6 weeks of consistent presence. This isn't performance marketing — it's brand building.",
  },
  {
    question: "Can I choose which spaces my ads appear in?",
    answer:
      "Absolutely. You have full control over which locations your brand appears in. We'll recommend spaces based on your target audience, but the final decision is always yours.",
  },
  {
    question: "What does the display look like?",
    answer:
      "Clean, minimal frames that complement the space. No screens, no flashing. Your brand presented elegantly, as part of the environment rather than an interruption.",
  },
]

export default function AdvertisersPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/eleni-afiontzi-gLU8GZpHtRA-unsplash.jpg"
              alt=""
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-body text-sm text-primary mb-6">
                  For Advertisers
                </span>
                <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground text-balance">
                  Be remembered, not just seen.
                </h1>
                <p className="mt-8 font-body text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  In a world of infinite scroll, we offer something different: calm, repeated visibility in spaces where
                  your audience is actually present and paying attention.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>


        {/* Philosophy */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                    Why physical spaces work better.
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      Digital advertising competes in milliseconds. A thumb scrolls past before recognition even
                      happens. But in physical spaces - cafes, salons, waiting rooms - people are present. They look up.
                      They notice.
                    </p>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      And they come back. Day after day, week after week. Your brand becomes part of their routine, part
                      of the spaces they trust.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-secondary">
                    <img
                      src="/person-relaxing-in-modern-cafe-reading-with-clean-.jpg"
                      alt="Person in calm café environment"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Floating stat */}
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                    <p className="font-sans text-4xl">73%</p>
                    <p className="font-body text-sm text-primary-foreground/80 mt-1">
                      higher recall in
                      <br />
                      physical spaces
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-sans text-4xl md:text-5xl leading-tight text-foreground text-balance">
                  What makes AdKaro different.
                </h2>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <SectionReveal key={benefit.title} delay={index * 100}>
                  <div className="group p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary hover:shadow-lg h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-sans text-xl text-foreground mb-3">{benefit.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-4xl mx-auto">
                <blockquote>
                  <p className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight italic">
                    "The best marketing doesn't feel like marketing. It feels like a familiar face."
                  </p>
                </blockquote>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-12 text-center">
                  Questions advertisers ask.
                </h2>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <SectionReveal key={index} delay={index * 100}>
                      <div className="p-6 rounded-2xl bg-secondary/50">
                        <h3 className="font-sans text-lg text-foreground mb-3">{faq.question}</h3>
                        <p className="font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-6">Ready to be remembered?</h2>
                <p className="font-body text-lg text-muted-foreground mb-8">
                  Let's talk about how AdKaro can help your brand become part of your community's everyday spaces.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Start a conversation
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

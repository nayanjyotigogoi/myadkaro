import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"
import { Shield, Eye, Wallet, Wrench, CheckCircle, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Full approval rights",
    description: "You see and approve every piece of content before it goes up. Your space, your standards.",
  },
  {
    icon: Eye,
    title: "Aesthetic integrity",
    description: "Our displays are designed to complement, not clash. Minimal, elegant, appropriate.",
  },
  {
    icon: Wallet,
    title: "Passive income",
    description: "Turn unused wall space into steady revenue without any operational effort.",
  },
  {
    icon: Wrench,
    title: "Zero burden",
    description: "We handle installation, maintenance, and content changes. You do nothing.",
  },
]

const spaceTypes = [
  "Homestays & Guesthouses",
  "Boutique Hotels",
  "Service Apartments",
  "Cafes & Coffee Shops",
  "Salons & Spas",
  "Medical & Dental Clinics",
  "Wellness & Fitness Studios",
  "Co-working Spaces",
  "Boutique Retail",
  "Community Spaces",
]


const faqs = [
  {
    question: "What does the display look like?",
    answer:
      "Clean, minimal frames that work with your interior design. Think gallery-quality presentation, not garish advertising. We work with you to ensure it enhances your space.",
  },
  {
    question: "What kind of content will be displayed?",
    answer:
      "Local businesses that align with your audience and values. You have full veto power over any content. We focus on tasteful, brand-appropriate advertising.",
  },
  {
    question: "How much space do I need?",
    answer:
      "A single frame can be as small as a standard poster. We'll assess your space and recommend the optimal setup that doesn't intrude on your operations.",
  },
  {
    question: "What's the commitment?",
    answer:
      "We offer flexible arrangements. Try it for a month, see how it feels, then decide. No pressure, no long contracts required to start.",
  },
]

export default function SpacesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/tom-dillon-4u2FS6dm0EM-unsplash.jpg"
              alt=""
              className="w-full h-full object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-4xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 font-body text-sm text-primary mb-6">
                  For Space Providers
                </span>
                <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground text-balance">
                  Your space, thoughtfully monetized.
                </h1>
                <p className="mt-8 font-body text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Partner with AdKaro to host clean, minimal advertising displays that respect your space while creating
                  passive income. No operational burden. Full content control.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>


        {/* Trust Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
                    <img
                      src="/elegant-minimal-interior-salon-or-cafe-with-clean-.jpg"
                      alt="Beautiful interior space"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                    We respect your space as much as you do.
                  </h2>
                  <div className="space-y-4">
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      Your space is your brand. It reflects who you are and how you want your customers to feel. We
                      understand that, which is why everything we do is designed to complement, never compromise.
                    </p>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      Our displays are architecturally considered. Our content is curated for appropriateness. And you
                      always have the final say.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-sans text-4xl md:text-5xl leading-tight text-balance">
                  What you get as a partner.
                </h2>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <SectionReveal key={benefit.title} delay={index * 100}>
                  <div className="group flex gap-6 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/10">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/20 text-primary-foreground">
                        <benefit.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-xl text-primary-foreground">{benefit.title}</h3>
                      <p className="font-body text-primary-foreground/70 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Space Types */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                    Spaces we partner with.
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    We look for locations where people spend meaningful time — places of comfort, care, and community.
                    If your space welcomes people who linger, we'd love to talk.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {spaceTypes.map((space, index) => (
                    <SectionReveal key={space} delay={index * 50}>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="font-body text-foreground">{space}</span>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-sans text-3xl md:text-4xl text-foreground">How it works for you.</h2>
              </div>
            </SectionReveal>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "We visit your space",
                    description: "We assess the environment, understand your brand, and discuss your comfort level.",
                  },
                  {
                    step: "02",
                    title: "We propose a setup",
                    description:
                      "Based on your space and preferences, we recommend display placement that enhances rather than intrudes.",
                  },
                  {
                    step: "03",
                    title: "You approve everything",
                    description:
                      "You see the display design and review all content before anything goes up. Full transparency.",
                  },
                  {
                    step: "04",
                    title: "We handle the rest",
                    description:
                      "Installation, maintenance, content updates — all managed by us. You just collect your share.",
                  },
                ].map((item, index) => (
                  <SectionReveal key={item.step} delay={index * 100}>
                    <div className="flex gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-lg font-medium">
                        {item.step}
                      </div>
                      <div className="flex-grow pt-3">
                        <h3 className="font-sans text-xl text-foreground mb-2">{item.title}</h3>
                        <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                        {index < 3 && <div className="ml-8 mt-6 w-px h-8 bg-border" />}
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-12 text-center">
                  Questions space providers ask.
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
                <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-6">Let's see your space.</h2>
                <p className="font-body text-lg text-muted-foreground mb-8">
                  Interested in partnering? We'd love to learn about your space and discuss how we might work together.
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

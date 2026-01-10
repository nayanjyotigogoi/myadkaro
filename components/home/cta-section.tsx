import { SectionReveal } from "@/components/section-reveal"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 p-12 lg:p-20">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary-foreground text-balance">
                Ready to be seen differently?
              </h2>
              <p className="mt-6 font-body text-xl text-primary-foreground/80 leading-relaxed">
                Whether you want to reach local audiences or monetize your space thoughtfully, let's start a
                conversation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 font-body text-base font-medium text-primary transition-all hover:shadow-lg"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/30 bg-transparent px-8 py-4 font-body text-base font-medium text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn our story
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

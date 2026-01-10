import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhatIsSection } from "@/components/home/what-is-section"
import { ProblemSection } from "@/components/home/problem-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { AudienceSection } from "@/components/home/audience-section"
import { WhatWeAreNotSection } from "@/components/home/what-we-are-not-section"
import { PilotSection } from "@/components/home/pilot-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsSection />
        <ProblemSection />
        <HowItWorksSection />
        <AudienceSection />
        <WhatWeAreNotSection />
        <PilotSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

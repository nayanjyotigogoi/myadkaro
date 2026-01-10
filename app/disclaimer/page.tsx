import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Disclaimer | AdKaro",
  description:
    "Important disclaimers regarding the use of AdKaro’s website, services, and advertising platform.",
}

export default function DisclaimerPage() {
  return (
    <>
    <Navigation />
    <main className="bg-background">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h1 className="font-sans text-5xl lg:text-6xl leading-tight text-balance">
              Disclaimer
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
              The information provided by AdKaro is intended for general
              understanding and transparency. Please read this disclaimer
              carefully.
            </p>
          </div>

          <div className="flex items-end">
            <p className="font-body text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-border/60" />
      </div>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
        <div className="space-y-16 font-body text-base leading-relaxed text-foreground/90">

          <PolicyBlock title="1. General Information">
            All information provided on the AdKaro website and through its
            services is offered on an “as is” and “as available” basis. While we
            strive for accuracy, AdKaro makes no warranties or guarantees
            regarding completeness, reliability, or suitability of the
            information.
          </PolicyBlock>

          <PolicyBlock title="2. No Professional Advice">
            Content on this website does not constitute legal, financial, or
            business advice. Users are encouraged to seek independent
            professional guidance before making decisions based on information
            provided by AdKaro.
          </PolicyBlock>

          <PolicyBlock title="3. Advertising Outcomes">
            AdKaro does not guarantee specific results, sales, leads, footfall,
            or return on investment from advertising campaigns. Outcomes depend
            on numerous external factors beyond our control.
          </PolicyBlock>

          <PolicyBlock title="4. Third-Party Locations & Partners">
            AdKaro collaborates with independent space providers and venue
            partners. We do not own or operate these locations and are not
            responsible for their business practices, availability, or
            operational decisions.
          </PolicyBlock>

          <PolicyBlock title="5. Third-Party Links">
            The AdKaro website may contain links to third-party websites.
            AdKaro does not endorse or assume responsibility for the content,
            accuracy, or policies of such external sites.
          </PolicyBlock>

          <PolicyBlock title="6. Limitation of Liability">
            To the maximum extent permitted by law, AdKaro shall not be liable
            for any direct, indirect, incidental, or consequential damages
            arising from the use of our website, services, or advertising
            placements.
          </PolicyBlock>

          <PolicyBlock title="7. Errors & Omissions">
            AdKaro does not warrant that the website or services will be free of
            errors, interruptions, or inaccuracies. We reserve the right to
            correct errors or update information at any time without prior
            notice.
          </PolicyBlock>

          <PolicyBlock title="8. Changes to This Disclaimer">
            This disclaimer may be updated periodically. Continued use of our
            website or services constitutes acceptance of the revised
            disclaimer.
          </PolicyBlock>

          <PolicyBlock title="9. Contact">
            For questions regarding this disclaimer, contact us at{" "}
            <a
              href="mailto:admin@anvayasolution.com"
              className="underline underline-offset-4"
            >
              admin@anvayasolution.com
            </a>.
          </PolicyBlock>

        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

/* ---------- Reusable Component ---------- */

function PolicyBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <h2 className="font-sans text-2xl lg:text-3xl leading-tight">
        {title}
      </h2>
      <div className="text-foreground/80">{children}</div>
    </div>
  )
}

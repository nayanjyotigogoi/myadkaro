import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | AdKaro",
  description:
    "Understand AdKaro’s refund and cancellation terms for advertising campaigns and services.",
}

export default function RefundPolicyPage() {
  return (
    <>
    <Navigation />
    <main className="bg-background">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h1 className="font-sans text-5xl lg:text-6xl leading-tight text-balance">
              Refund & Cancellation
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
              This policy explains when refunds may apply, how cancellations are
              handled, and what happens once a campaign is in motion.
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

          <PolicyBlock title="1. General Policy">
            AdKaro provides physical advertising services that involve design,
            printing, logistics, and placement. Due to the nature of these
            services, refunds are limited and subject to the conditions below.
          </PolicyBlock>

          <PolicyBlock title="2. Campaign Cancellations">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Cancellations requested <strong>before design or printing</strong> may
                be eligible for a partial refund, after deducting administrative
                or consultation costs.
              </li>
              <li>
                Once design work has started, design fees are
                <strong> non-refundable</strong>.
              </li>
              <li>
                No cancellations or refunds are allowed once printing,
                installation, or placement has begun.
              </li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="3. No Performance-Based Refunds">
            Refunds will not be issued based on campaign performance, footfall
            variation, customer response, or perceived return on investment.
          </PolicyBlock>

          <PolicyBlock title="4. Space Provider-Related Interruptions">
            In rare cases where a campaign is interrupted due to space provider
            issues (closure, relocation, or force majeure), AdKaro may offer a
            replacement location or adjusted campaign duration at its
            discretion. Monetary refunds are not guaranteed.
          </PolicyBlock>

          <PolicyBlock title="5. Early Termination by Client">
            If a client requests early termination after campaign execution has
            started, no refunds shall be applicable for the unused duration.
          </PolicyBlock>

          <PolicyBlock title="6. Payment Disputes">
            Any disputes related to billing or charges must be raised within
            <strong> 7 days</strong> of invoice issuance. Requests received after
            this period may not be considered.
          </PolicyBlock>

          <PolicyBlock title="7. Refund Processing">
            Approved refunds, if any, will be processed within
            <strong> 7–14 business days</strong> using the original payment
            method.
          </PolicyBlock>

          <PolicyBlock title="8. Policy Modifications">
            AdKaro reserves the right to modify this policy at any time.
            Continued use of our services implies acceptance of the updated
            policy.
          </PolicyBlock>

          <PolicyBlock title="9. Contact">
            For refund or cancellation-related questions, contact us at{" "}
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

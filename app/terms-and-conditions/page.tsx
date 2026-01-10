import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | AdKaro",
  description:
    "Understand the terms governing the use of AdKaro’s advertising platform, services, and space provider partnerships.",
}

export default function TermsAndConditionsPage() {
  return (
    <>
    <Navigation />
    <main className="bg-background">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h1 className="font-sans text-5xl lg:text-6xl leading-tight text-balance">
              Terms & Conditions
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
              These terms define how AdKaro operates, how campaigns are executed,
              and how advertisers and space providers work with us.
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
          
          <PolicyBlock title="1. About AdKaro">
            AdKaro is a physical advertising platform that designs, prints,
            installs, manages, and removes advertising displays in high-footfall
            physical locations through partner spaces.
          </PolicyBlock>

          <PolicyBlock title="2. Eligibility">
            You must be at least 18 years old and legally capable of entering
            into binding contracts to use AdKaro’s services.
          </PolicyBlock>

          <PolicyBlock title="3. Services Offered">
            <ul className="list-disc pl-5 space-y-2">
              <li>Physical advertising display services</li>
              <li>Creative design and branding</li>
              <li>Printing, installation, and removal of boards</li>
              <li>Campaign planning and management</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="4. Advertiser Responsibilities">
            Advertisers must ensure that all content provided is accurate,
            lawful, non-misleading, and approved in a timely manner. AdKaro is
            not responsible for delays caused by late approvals or incorrect
            materials.
          </PolicyBlock>

          <PolicyBlock title="5. Content Approval">
            All designs are shared for approval prior to printing. Once approved
            and printed, modifications or cancellations may not be possible.
          </PolicyBlock>

          <PolicyBlock title="6. Payments & Billing">
            Payments must be made as per agreed terms. AdKaro reserves the right
            to pause or terminate services in case of delayed or failed payments.
          </PolicyBlock>

          <PolicyBlock title="7. Campaign Performance Disclaimer">
            AdKaro does not guarantee sales, leads, or conversions. Advertising
            outcomes depend on multiple external factors including footfall,
            location, timing, and audience behavior.
          </PolicyBlock>

          {/* Space Provider Section */}
          <PolicyDivider label="Space Provider Terms" />

          <PolicyBlock title="8. Ownership of Advertising Assets">
            All boards, frames, stands, fixtures, and advertising materials
            supplied by AdKaro remain the exclusive property of AdKaro at all
            times.
          </PolicyBlock>

          <PolicyBlock title="9. Care & Protection">
            Space Providers must take reasonable care to prevent damage, loss,
            misuse, tampering, or theft of AdKaro-supplied assets.
          </PolicyBlock>

          <PolicyBlock title="10. Damage, Loss & Deductions">
            Any damage, breakage, loss, or misuse due to negligence will result
            in repair or replacement costs being deducted from payouts, adjusted
            against deposits, or invoiced directly.
          </PolicyBlock>

          <PolicyBlock title="11. Removal After Contract Completion">
            Upon completion or termination of the agreement, AdKaro will
            retrieve all supplied assets. Space Providers must provide
            unhindered access for removal.
          </PolicyBlock>

          <PolicyBlock title="12. Intellectual Property">
            Clients retain ownership of their brand assets. AdKaro retains
            ownership of its design systems, processes, and templates.
          </PolicyBlock>

          <PolicyBlock title="13. Limitation of Liability">
            AdKaro shall not be liable for indirect, incidental, or consequential
            damages including loss of revenue or business opportunity.
          </PolicyBlock>

          <PolicyBlock title="14. Termination">
            AdKaro reserves the right to terminate services in cases of
            non-payment, policy violations, or misuse of supplied assets.
          </PolicyBlock>

          <PolicyBlock title="15. Governing Law">
            These Terms are governed by the laws of India. Any disputes shall be
            subject to the jurisdiction of courts in India.
          </PolicyBlock>

          <PolicyBlock title="16. Contact">
            For legal or policy-related questions, contact us at{" "}
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

/* ---------- Reusable Components ---------- */

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

function PolicyDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 py-8">
      <div className="h-px flex-1 bg-border/60" />
      <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="h-px flex-1 bg-border/60" />
    </div>
  )
}

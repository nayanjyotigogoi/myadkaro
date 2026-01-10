import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Advertising Content Policy | AdKaro",
  description:
    "Guidelines outlining what advertising content is permitted, restricted, or prohibited on the AdKaro platform.",
}

export default function AdvertisingPolicyPage() {
  return (
    <>
    <Navigation />
    <main className="bg-background">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h1 className="font-sans text-5xl lg:text-6xl leading-tight text-balance">
              Advertising<br />Content Policy
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
              These guidelines define what advertising content is acceptable on
              AdKaro’s physical advertising network.
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

          <PolicyBlock title="1. Purpose">
            AdKaro aims to maintain a clean, respectful, and legally compliant
            advertising environment across all partner locations. This policy
            outlines the standards all advertising content must meet.
          </PolicyBlock>

          <PolicyBlock title="2. General Content Standards">
            All advertisements must:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Be truthful, accurate, and not misleading</li>
              <li>Comply with all applicable Indian laws and regulations</li>
              <li>Respect public sensibilities and community standards</li>
              <li>Not infringe on intellectual property rights</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="3. Prohibited Content">
            AdKaro does <strong>not allow</strong> advertisements that include:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Illegal, deceptive, or fraudulent products or services</li>
              <li>Hate speech, harassment, or discriminatory content</li>
              <li>Adult, sexually explicit, or obscene material</li>
              <li>Political or religious messaging</li>
              <li>Promotion of drugs, weapons, or illegal activities</li>
              <li>False claims or unverified guarantees</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="4. Restricted Categories">
            Certain categories may be allowed only with prior review and
            approval:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Alcohol or tobacco-related branding (where legally permitted)</li>
              <li>Financial, investment, or cryptocurrency promotions</li>
              <li>Medical, health, or wellness claims</li>
              <li>Gambling or betting-related content</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="5. Creative Guidelines">
            Advertisements must:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Be visually appropriate for public, mixed-age environments</li>
              <li>Not obstruct safety signage, exits, or public pathways</li>
              <li>Maintain reasonable size, clarity, and readability</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="6. Review & Approval">
            All advertising content is subject to review and approval by AdKaro
            before printing or placement. AdKaro reserves the right to request
            modifications or reject content at its sole discretion.
          </PolicyBlock>

          <PolicyBlock title="7. Removal of Content">
            AdKaro may remove or suspend any advertisement that:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Violates this policy or applicable laws</li>
              <li>Generates complaints or regulatory concerns</li>
              <li>Risks reputational or legal harm to AdKaro or partners</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="8. Responsibility & Liability">
            Advertisers are solely responsible for the legality and accuracy of
            their content. AdKaro shall not be liable for claims arising from
            advertiser-provided materials.
          </PolicyBlock>

          <PolicyBlock title="9. Policy Updates">
            This policy may be updated periodically. Continued use of AdKaro’s
            services implies acceptance of the revised policy.
          </PolicyBlock>

          <PolicyBlock title="10. Contact">
            For questions regarding advertising content approval, contact us at{" "}
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

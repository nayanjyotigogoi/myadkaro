import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | AdKaro",
  description:
    "Learn how AdKaro collects, uses, stores, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
     <>
    <Navigation />
    <main className="bg-background">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h1 className="font-sans text-5xl lg:text-6xl leading-tight text-balance">
              Privacy Policy
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
              Your trust matters. This policy explains what data we collect, why
              we collect it, and how we protect it across AdKaro’s platform.
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

          <PolicyBlock title="1. Introduction">
            This Privacy Policy describes how <strong>AdKaro</strong> collects,
            uses, stores, and protects your personal information when you visit
            our website, engage with our services, or communicate with us.
          </PolicyBlock>

          <PolicyBlock title="2. Information We Collect">
            <ul className="list-disc pl-5 space-y-2">
              <li>Personal information such as name, email address, and phone number</li>
              <li>Business details provided during onboarding or inquiries</li>
              <li>Billing and payment-related information</li>
              <li>Website usage data including IP address, browser type, and pages visited</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="3. How We Use Your Information">
            We use collected information to:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Provide and manage advertising services</li>
              <li>Communicate campaign updates and support requests</li>
              <li>Improve our website, offerings, and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="4. Cookies & Tracking">
            AdKaro uses cookies and similar technologies to enhance site
            performance and analyze user behavior. You may disable cookies
            through your browser settings; however, some features may not
            function properly.
          </PolicyBlock>

          <PolicyBlock title="5. Information Sharing">
            We do not sell your personal data. Information may be shared with:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Trusted service providers (printing, logistics, hosting)</li>
              <li>Payment gateways and financial institutions</li>
              <li>Legal or regulatory authorities when required by law</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="6. Data Security">
            We implement reasonable administrative, technical, and physical
            safeguards to protect your personal information. However, no method
            of transmission over the internet is completely secure.
          </PolicyBlock>

          <PolicyBlock title="7. Data Retention">
            Personal data is retained only for as long as necessary to fulfill
            the purposes outlined in this policy or as required by applicable
            laws.
          </PolicyBlock>

          <PolicyBlock title="8. Your Rights">
            You may request to:
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Access or update your personal information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="9. Third-Party Links">
            Our website may contain links to third-party websites. AdKaro is not
            responsible for the privacy practices or content of such websites.
          </PolicyBlock>

          <PolicyBlock title="10. Policy Updates">
            This Privacy Policy may be updated periodically. Continued use of
            our services constitutes acceptance of the revised policy.
          </PolicyBlock>

          <PolicyBlock title="11. Contact Us">
            For privacy-related questions or requests, contact us at{" "}
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

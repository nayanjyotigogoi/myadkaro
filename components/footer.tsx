import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  explore: [
    { href: "/advertisers", label: "For Advertisers" },
    { href: "/spaces", label: "For Space Providers" },
    { href: "/about", label: "About Us" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "https://instagram.com/adkaro", label: "Instagram" },
    { href: "https://linkedin.com/company/adkaro", label: "LinkedIn" },
  ],
  legal: [
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/advertising-policy", label: "Advertising Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
}


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-sans text-4xl lg:text-5xl leading-tight text-balance">
              Advertising that respects attention.
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-md leading-relaxed">
              AdKaro believes in presence over distraction, craft over mass production, and quality over quantity.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:justify-end">
            <div className="space-y-4">
              <h3 className="font-body text-sm uppercase tracking-widest text-primary-foreground/60">Explore</h3>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-base text-primary-foreground/90 transition-colors hover:text-primary-foreground inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
  <h3 className="font-body text-sm uppercase tracking-widest text-primary-foreground/60">
    Legal
  </h3>
  <ul className="space-y-3">
    {footerLinks.legal.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="font-body text-base text-primary-foreground/90 transition-colors hover:text-primary-foreground inline-flex items-center gap-1 group"
        >
          {link.label}
          <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
        </Link>
      </li>
    ))}
  </ul>
</div>
<div className="space-y-4">
              <h3 className="font-body text-sm uppercase tracking-widest text-primary-foreground/60">Connect</h3>
              <ul className="space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-base text-primary-foreground/90 transition-colors hover:text-primary-foreground inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <span className="font-sans text-6xl lg:text-8xl tracking-tight opacity-20">AdKaro</span>
          </div>
          <div className="space-y-2 text-right">
  <p className="font-body text-sm text-primary-foreground/60">
    © {new Date().getFullYear()} AdKaro. All rights reserved.
  </p>
  <p className="font-body text-sm text-primary-foreground/60">
    A product of{" "}
    <a
      href="https://www.anvayasolution.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-primary-foreground"
    >
      Anvaya Solution
    </a>.
  </p>
  <p className="font-body text-sm text-primary-foreground/60">
    Crafted with intention.
  </p>
</div>
                
        </div>
      </div>
    </footer>
  )
}

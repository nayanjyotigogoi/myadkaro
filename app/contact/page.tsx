"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/section-reveal"
import { Mail, MapPin, Clock, Send, CheckCircle, Phone } from "lucide-react"

const inquiryTypes = [
  { id: "advertiser", label: "I want to advertise", description: "Learn how AdKaro can help your brand be seen." },
  { id: "space", label: "I have a space", description: "Explore partnership opportunities for your location." },
  { id: "general", label: "General inquiry", description: "Questions, feedback, or just want to say hello." },
]

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const form = e.target as HTMLFormElement
  const formData = new FormData(form)

const payload = {
  inquiryType: selectedType || "Not specified",
  firstName: formData.get("firstName"),
  lastName: formData.get("lastName"),
  email: formData.get("email"),
  organization: formData.get("organization"),
  message: formData.get("message"),
}


  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (res.ok) {
    setSubmitted(true)
  } else {
    alert("Something went wrong. Please try again.")
  }
}


  if (submitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center bg-background">
          <SectionReveal>
            <div className="text-center max-w-md mx-auto px-6">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
              </div>
              <h1 className="font-sans text-3xl text-foreground mb-4">Message received.</h1>
              <p className="font-body text-muted-foreground leading-relaxed">
                Thank you for reaching out. We'll get back to you within 2-3 business days. In the meantime, feel free
                to explore more about AdKaro.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center mt-8 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Back to home
              </a>
            </div>
          </SectionReveal>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionReveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-body text-sm text-primary mb-6">
                  Contact
                </span>
                <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground text-balance">
                  Let's start a conversation.
                </h1>
                <p className="mt-8 font-body text-xl text-muted-foreground leading-relaxed">
                  Whether you're curious about advertising, want to explore a partnership, or just have questions —
                  we're here.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Form */}
              <div className="lg:col-span-2">
                <SectionReveal>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Inquiry Type */}
                    <div className="space-y-4">
                      <label className="font-body text-sm text-muted-foreground">What brings you here?</label>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                              selectedType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <h3 className="font-sans text-base text-foreground mb-1">{type.label}</h3>
                            <p className="font-body text-xs text-muted-foreground">{type.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="font-body text-sm text-muted-foreground">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Your first name"
                        />

                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="font-body text-sm text-muted-foreground">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Your last name"
                        />

                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-body text-sm text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="you@example.com"
                      />

                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <label htmlFor="organization" className="font-body text-sm text-muted-foreground">
                        Organization (optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your company or organization"
                      />

                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-body text-sm text-muted-foreground">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="Tell us what you're thinking..."
                      />

                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Send message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </SectionReveal>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <SectionReveal delay={100}>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <h3 className="font-sans text-lg text-foreground">Email us</h3>
                    </div>
                    <p className="font-body text-muted-foreground">connect@adkaro.com</p>
                    
                  </div>
                </SectionReveal>
                <SectionReveal delay={150}>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-4 w-4" />
                      </div>
                      <h3 className="font-sans text-lg text-foreground">Call us</h3>
                    </div>
                    <p className="font-body text-muted-foreground">
                      +91 97073 85552
                    </p>
                    <p className="font-body text-muted-foreground">
                      Available Mon–Sat, 7am–11pm
                    </p>

                  </div>
                </SectionReveal>


                <SectionReveal delay={200}>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Clock className="h-4 w-4" />
                      </div>
                      <h3 className="font-sans text-lg text-foreground">Response time</h3>
                    </div>
                    <p className="font-body text-muted-foreground">We typically respond within 2-3 business days.</p>
                  </div>
                </SectionReveal>

                <SectionReveal delay={300}>
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <h3 className="font-sans text-lg text-foreground">Location</h3>
                    </div>
                    <p className="font-body text-muted-foreground">
                      Currently working with a limited number of carefully selected locations.
                    </p>
                  </div>
                </SectionReveal>

                {/* Note */}
                <SectionReveal delay={400}>
                  <div className="p-6 rounded-2xl border border-border">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      We take a thoughtful approach to partnerships to ensure every collaboration feels like a good fit.
                    </p>
                  </div>
                </SectionReveal>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

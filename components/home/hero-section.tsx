"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (Grayscale) */}
<div className="absolute inset-0">
  <img
    src="/hero-img-1.png" // put image inside /public
    alt=""
    className="w-full h-full object-cover grayscale opacity-45"
  />
</div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
            <span className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-5 py-2.5 font-body text-sm text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-medium tracking-wide">
                ऐड करें,
                <span className="ml-1 opacity-80">AdKaro ke saath.</span>
              </span>
            </span>
          </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-balance font-sans text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl xl:text-9xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          Advertising people{" "}
          <span className="italic text-primary">actually</span> notice.
        </h1>

          {/* Subheadline */}
          <p
            className={`mt-8 font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Clean, minimal ads in real spaces where people slow down and pay attention.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="/advertisers"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-body text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              I want to advertise
            </a>
            <a
              href="/spaces"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground/20 bg-transparent px-8 py-4 font-body text-base font-medium text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
            >
              I have a space
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, DM_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "AdKaro — Advertising People Actually Notice",
  description:
    "AdKaro is a local physical advertising platform that places clean, minimal displays in high-footfall real-world spaces where people spend time, are relaxed, and are present.",
  generator: "Anvaya Solution",
  keywords: ["advertising", "local advertising", "physical advertising", "brand awareness", "attention marketing"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable} ${geistMono.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

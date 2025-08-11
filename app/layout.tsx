import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

// Initialize the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Aeroclub Jean Doudies | École de pilotage à Castelnaudary",
  description:
    "Apprenez à piloter avec l'Aeroclub Jean Doudies. Formations ULM, LAPL, PPL, vols découvertes et location d'avions à Castelnaudary.",
  generator: "v0.1dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      
      <body className="antialiased">{children}</body>
      <Analytics />
    </html>
  )
}

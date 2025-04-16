import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Aeroclub Jean Doudies",
  description: "Aeroclub Jean Doudies",
    generator: 'v0.1dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  )
}


import './globals.css'
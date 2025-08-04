// src/app/layout.tsx

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css" // Keep this import for global styles

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saleha Noor - AI Engineer Portfolio",
  description: "Official portfolio of Saleha Noor, an aspiring AI Engineer and BSCS student.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
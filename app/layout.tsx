import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Student Developer Toolkit",
  description: "Improve coding skills, choose suitable courses, and plan your career with AI-powered tools",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="system" storageKey="ai-toolkit-theme">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

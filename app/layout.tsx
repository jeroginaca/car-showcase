import './globals.css'
import type { Metadata } from 'next'
import { Footer, Navbar } from "@/components"

export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Code Hacker Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

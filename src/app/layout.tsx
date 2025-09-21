import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FTDM Framework - Fast-Track Development Methodology',
  description: 'Transform raw requirements into production-ready applications through our intelligent 7-stage development framework with domain intelligence and anti-hallucination safeguards.',
  authors: [{ name: 'FTDM Framework Team' }],
  keywords: ['FTDM', 'Fast-Track Development', 'AI Development', 'Domain Intelligence', 'Software Development Framework'],
  openGraph: {
    title: 'FTDM Framework - Fast-Track Development Methodology',
    description: 'Transform raw requirements into production-ready applications through our intelligent 7-stage development framework.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FTDM Framework - Fast-Track Development Methodology',
    description: 'Transform raw requirements into production-ready applications through our intelligent 7-stage development framework.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
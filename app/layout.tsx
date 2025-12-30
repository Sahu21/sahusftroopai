import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import { COMPANY_CONFIG } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: COMPANY_CONFIG.site.defaultTitle,
  description: COMPANY_CONFIG.site.defaultDescription,
  keywords: ['Salesforce', 'AI', 'CRM', 'Agentforce', 'Einstein', 'Salesforce Consulting', 'Salesforce Implementation'],
  authors: [{ name: COMPANY_CONFIG.name }],
  openGraph: {
    title: COMPANY_CONFIG.site.defaultTitle,
    description: COMPANY_CONFIG.site.defaultDescription,
    type: 'website',
    locale: 'en_US',
    url: COMPANY_CONFIG.site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_CONFIG.site.defaultTitle,
    description: COMPANY_CONFIG.site.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Salesforce Embedded Messaging Chat Widget */}
        <ChatWidget />
      </body>
    </html>
  )
}


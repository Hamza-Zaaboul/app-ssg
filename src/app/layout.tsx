import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://votre-domaine.com'),
  title: {
    default: 'Page Ultra-Performante | Next.js 15',
    template: '%s | Next.js 15'
  },
  description: 'Page SSG optimisée pour des performances maximales avec Next.js 15 et React 19',
  keywords: ['Next.js', 'React', 'Performance', 'SSG', 'TypeScript'],
  authors: [{ name: 'Votre Nom' }],
  creator: 'Votre Nom',
  publisher: 'Votre Entreprise',
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
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-domaine.com',
    siteName: 'Votre Site',
    title: 'Page Ultra-Performante | Next.js 15',
    description: 'Page SSG optimisée pour des performances maximales',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Page Ultra-Performante',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Ultra-Performante | Next.js 15',
    description: 'Page SSG optimisée pour des performances maximales',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
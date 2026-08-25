import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'KolikBeres.cz — Anonymní srovnání platů v ČR',
  description:
    'Anonymní databáze mezd a benefitů podle oborů a krajů České republiky. Zjisti, kolik reálně berou ostatní. Bez registrace, data pro rok 2026.',
  generator: 'v0.app',
  keywords: [
    'platy',
    'mzdy',
    'srovnání platů',
    'medián mzdy',
    'Česká republika',
    'anonymní databáze mezd',
  ],
  openGraph: {
    title: 'KolikBeres.cz — Anonymní srovnání platů v ČR',
    description:
      'Anonymní databáze mezd a benefitů podle oborů a krajů. Bez registrace.',
    locale: 'cs_CZ',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="cs"
      className={`light bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

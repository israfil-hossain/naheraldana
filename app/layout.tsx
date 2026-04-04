import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naheraldana.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Naher Aldana Project Management Services | Event Management, IT & Electronics Supply in Dubai',
    template: '%s | Naher Aldana Project Management Services'
  },
  description: 'Naher Aldana Project Management Services delivers reliable event execution, quality IT products, and trusted electronics supply for businesses and clients across Dubai and the UAE. Professional corporate events, technical setup, and electronics solutions.',
  keywords: [
    'event management company in Dubai',
    'IT products supplier in Dubai',
    'electronics supplier in Dubai',
    'project management services Dubai',
    'corporate event services UAE',
    'event planning Dubai',
    'IT equipment suppliers UAE',
    'electronics distribution Dubai',
    'technical event services',
    'business event management'
  ],
  authors: [{ name: 'Naher Aldana Project Management Services' }],
  creator: 'Naher Aldana Project Management Services',
  publisher: 'Naher Aldana Project Management Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    title: 'Naher Aldana Project Management Services | Event Management, IT & Electronics Supply',
    description: 'Professional Event Management, IT & Electronics Solutions in Dubai. Corporate events, technical setup, and quality electronics supply.',
    siteName: 'Naher Aldana Project Management Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Naher Aldana Project Management Services'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naher Aldana Project Management Services',
    description: 'Professional Event Management, IT & Electronics Solutions in Dubai',
    images: ['/og-image.jpg'],
    creator: '@naheraldana',
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
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Naher Aldana Project Management Services',
    description: 'Professional Event Management, IT & Electronics Solutions in Dubai',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: 'naherproject@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971554470608',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No. 101, King Hamad Mohammed Abdulrahman, Al-Bahr - Al-Khabisi - 155',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    sameAs: [
      // Add social media URLs when available
      // 'https://www.facebook.com/naheraldana',
      // 'https://www.linkedin.com/company/naheraldana',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Naher Aldana Project Management Services',
    image: `${SITE_URL}/images/logo.png`,
    description: 'Event Management, IT Products Supply, and Electronics Solutions in Dubai',
    email: 'naherproject@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office No. 101, King Hamad Mohammed Abdulrahman, Al-Bahr - Al-Khabisi - 155',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '155',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    url: SITE_URL,
    telephone: '+971554470608',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

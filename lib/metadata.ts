import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/constants'

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title =
    typeof overrides.title === 'string'
      ? overrides.title
      : SITE_CONFIG.name + ' — ' + SITE_CONFIG.tagline
  const description = (overrides.description as string) || SITE_CONFIG.description

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title,
    description,
    keywords: [
      'gold export Colombia',
      'emerald export Colombia',
      'precious minerals',
      'Fast Track Gold',
      'mineral exporter Palmira',
      'metalliferous products',
    ],
    authors: [{ name: SITE_CONFIG.fullName }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [{ url: '/og/og-default.jpg', width: 1200, height: 630, alt: SITE_CONFIG.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/og-default.jpg'],
    },
    alternates: { canonical: SITE_CONFIG.url },
    ...overrides,
  }
}

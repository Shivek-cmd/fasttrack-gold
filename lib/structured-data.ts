import { SITE_CONFIG } from '@/constants'

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.fullName,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/icons/logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palmira',
    addressRegion: 'Valle del Cauca',
    addressCountry: 'CO',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: SITE_CONFIG.email,
  },
  sameAs: Object.values(SITE_CONFIG.social),
})

export const articleSchema = (post: {
  title: string
  excerpt: string
  date: string
  author: string
  ogImage?: string
  slug: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { '@type': 'Person', name: post.author },
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/icons/logo.png` },
  },
  image: post.ogImage,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_CONFIG.url}/blog/${post.slug}`,
  },
})

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/structured-data'
import { SITE_CONFIG } from '@/constants'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: 'Home', url: SITE_CONFIG.url },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${SITE_CONFIG.url}${item.href}` : SITE_CONFIG.url,
    })),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaItems)) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}

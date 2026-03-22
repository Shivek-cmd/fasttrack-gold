'use client'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const els = document.querySelectorAll('article h2, article h3')
    const items: Heading[] = Array.from(els).map((el) => {
      if (!el.id) el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      return { id: el.id, text: el.textContent || '', level: parseInt(el.tagName[1]) }
    })
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0% -60% 0%' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
        On this page
      </p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '1rem' : '0' }}>
            <a
              href={`#${h.id}`}
              className={`text-sm block transition-colors hover:text-primary ${
                active === h.id ? 'text-primary font-medium' : 'text-muted'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

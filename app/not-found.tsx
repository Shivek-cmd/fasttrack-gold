import Link from 'next/link'
import { ArrowLeft, Gem } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-bg flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
          <Gem className="w-9 h-9 text-primary" />
        </div>

        {/* 404 */}
        <p
          className="font-display font-bold text-primary/20 leading-none mb-4"
          style={{ fontSize: 'clamp(5rem, 15vw, 10rem)' }}
        >
          404
        </p>

        <h1 className="font-display font-semibold text-3xl mb-4">
          Page Not Found
        </h1>
        <p className="text-muted leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. Let us help you find your
          way back.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-11 px-8 rounded-lg bg-primary text-black font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-11 px-8 rounded-lg border border-border hover:border-primary text-text font-medium text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted uppercase tracking-widest mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Gold',      href: '/products/oro' },
              { label: 'Emeralds',  href: '/products/esmeralda' },
              { label: 'Services',  href: '/services' },
              { label: 'About',     href: '/about' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

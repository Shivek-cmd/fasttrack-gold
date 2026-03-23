import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/constants'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      {/* Main footer */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Fast Track Gold"
                width={140}
                height={140}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-6">
              {SITE_CONFIG.fullName} — Premier precious minerals exporter based in Palmira, Valle
              del Cauca, Colombia. Loyalty, Honesty, Integrity.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {SITE_CONFIG.address}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/mission" className="text-sm text-muted hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="/vision" className="text-sm text-muted hover:text-primary transition-colors">Vision</Link></li>
              <li><Link href="/compliance" className="text-sm text-muted hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Products & Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 mb-8">
              <li>
                <Link
                  href="/products/oro"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Gold (Oro)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/esmeralda"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Emerald (Esmeralda)
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-md border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-md border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="h-9 w-9 rounded-md border border-border hover:border-primary hover:text-primary flex items-center justify-center text-muted transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-muted hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-muted hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

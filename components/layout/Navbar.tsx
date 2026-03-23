'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { NAV_LINKS, SITE_CONFIG } from '@/constants'
import ThemeToggle from '@/components/ui/ThemeToggle'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <>
      <header
        className={`fixed top-9 left-0 right-0 z-[200] transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Fast Track Gold"
                width={120}
                height={120}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children ? (
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-muted hover:text-text transition-colors rounded-md hover:bg-bg-secondary">
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-3 py-2 text-sm text-muted hover:text-text transition-colors rounded-md hover:bg-bg-secondary block"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 min-w-[180px] bg-bg-secondary border border-border rounded-lg shadow-lg overflow-hidden py-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-muted hover:text-text hover:bg-bg-tertiary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 h-9 px-5 rounded-md bg-primary text-black text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="md:hidden h-9 w-9 flex items-center justify-center rounded-md border border-border hover:border-border-hover transition-colors"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="block w-4 h-px bg-text" />
                  <span className="block w-5 h-px bg-text" />
                  <span className="block w-3 h-px bg-text" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

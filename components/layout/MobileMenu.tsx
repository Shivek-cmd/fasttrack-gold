'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/constants'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-72 z-[400] bg-bg-secondary border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <Image
                src="/logo.png"
                alt="Fast Track Gold"
                width={120}
                height={120}
                className="h-14 w-auto object-contain"
              />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:border-border-hover transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <p className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-widest">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-5 py-2.5 text-sm text-muted hover:text-text hover:bg-bg-tertiary rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block px-3 py-2.5 text-sm text-text hover:text-primary hover:bg-bg-tertiary rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="p-5 border-t border-border">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center h-11 leading-[44px] rounded-md bg-primary text-black text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

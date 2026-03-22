'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import { SITE_CONFIG } from '@/constants'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[500] flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-bg-secondary border border-border rounded-xl px-4 py-3 shadow-xl max-w-[200px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Close"
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-bg-elevated border border-border flex items-center justify-center text-muted hover:text-text transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-semibold text-text mb-0.5">Chat with us</p>
            <p className="text-xs text-muted leading-relaxed">
              We typically reply within minutes.
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-[7px] right-5 w-3 h-3 bg-bg-secondary border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={`https://wa.me/573000000000?text=Hello%2C%20I%27m%20interested%20in%20Fast%20Track%20Gold%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M24 4C12.95 4 4 12.95 4 24c0 3.55.93 6.88 2.55 9.77L4 44l10.48-2.51A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36a16 16 0 0 1-8.18-2.25l-.58-.35-6.22 1.49 1.52-5.99-.38-.61A15.93 15.93 0 0 1 8 24c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16zm8.77-11.85c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.85-2.36-1.42-1.26-2.38-2.82-2.66-3.3-.28-.48-.03-.74.21-.98.22-.22.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.94-.78-.81-1.08-.82h-.92c-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.5 2.04.79 2.74 1.01 1.15.36 2.2.31 3.03.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
        </svg>
      </motion.a>
    </div>
  )
}

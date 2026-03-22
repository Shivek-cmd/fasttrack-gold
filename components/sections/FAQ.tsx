'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/constants'
import { faqSchema } from '@/lib/structured-data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-bg py-24 lg:py-40">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          {/* Header */}
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              FAQ
            </p>
            <h2
              className="font-display font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Common
              <br />
              Questions
            </h2>
            <p className="text-muted leading-relaxed">
              Everything you need to know about exporting precious minerals with Fast Track Gold.
              Still have questions?{' '}
              <a href="/contact" className="text-primary hover:underline underline-offset-2">
                Contact us
              </a>
              .
            </p>
          </AnimatedSection>

          {/* Accordion */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-colors ${
                    open === i ? 'border-primary/30 bg-bg-secondary' : 'border-border bg-bg-secondary'
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={open === i}
                  >
                    <span className="font-medium text-text text-sm leading-snug">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bg-elevated flex items-center justify-center text-muted">
                      {open === i ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

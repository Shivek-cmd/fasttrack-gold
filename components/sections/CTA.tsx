'use client'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_CONFIG } from '@/constants'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-primary/5 border-y border-primary/15 py-24 lg:py-32 overflow-hidden">

      {/* ── Radial ambient glow ── */}
      <div className="glow-primary hidden md:block w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* ── Concentric SVG rings — desktop only, animated scale-in ── */}
      <motion.svg
        ref={ref}
        className="absolute inset-0 w-full h-full pointer-events-none select-none hidden md:block"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4 }}
      >
        <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.10" />
        <circle cx="50%" cy="50%" r="280" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.07" />
        <circle cx="50%" cy="50%" r="400" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.04" />
      </motion.svg>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
            Ready to Export?
          </p>
          <h2
            className="font-display font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
          >
            Let&apos;s Move Your
            <br />
            <span className="text-gold-shimmer">Precious Minerals</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join dozens of certified Colombian mineral suppliers who trust Fast Track Gold for
            fast, secure, and fully compliant international exports.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 h-14 px-10 rounded-lg bg-primary text-black font-semibold text-base hover:opacity-90 hover:shadow-glow transition-all group"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={SITE_CONFIG.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-14 px-10 rounded-lg border border-border hover:border-primary text-text font-medium text-base transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

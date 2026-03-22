'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1920&q=80"
          alt="Colombian gold mining landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark mode overlays */}
        <div className="absolute inset-0 [data-theme='dark'] bg-black/65 dark-overlay" />
        <div className="absolute inset-0 hero-gradient-lr" />
        <div className="absolute inset-0 hero-gradient-bt" />
      </div>

      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:pb-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Colombia&apos;s Premier Mineral Exporter
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-text mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            The World&apos;s
            <br />
            <span className="text-gold-shimmer">Finest Gold</span>
            <br />
            &amp; Emeralds
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted text-lg leading-relaxed max-w-prose mb-10"
          >
            Comercializadora Fast Track Gold S.A.S. connects certified Colombian mineral suppliers
            with global buyers — with full legal compliance, secure logistics, and uncompromising
            integrity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg bg-primary text-black font-semibold text-base hover:opacity-90 hover:shadow-glow transition-all group"
            >
              Start Exporting
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products/oro"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg border border-border hover:border-primary text-text font-medium text-base transition-colors hover:bg-bg-secondary"
            >
              View Products
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-5 mt-12 pt-8 border-t border-border"
          >
            {['Rucom Verified', 'Certificate of Origin', 'RUT Certified', 'Gov. Compliant'].map(
              (item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

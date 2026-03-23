'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

// ─── Staggered word reveal ──────────────────────────────────────
const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const lineVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
}

function StaggerLine({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.22em] ${className ?? ''}`}
      variants={lineVariants}
    >
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ─── Hero ───────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">

      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0 bg-black">
        {/*
          INSTRUCTIONS:
          1. Take your 151 PNG frames and convert them to a single MP4 using ezgif:
             ezgif.com → "GIF Maker" → upload all frames → "Make GIF" →
             then "Video" tab → download MP4
             OR use FFmpeg locally:
             ffmpeg -framerate 30 -i ezgif-frame-%03d.png -c:v libx264 -crf 20 -pf yuv420p -movflags faststart hero.mp4

          2. Place the file at: public/hero-video.mp4
          3. That's it — the video tag below handles everything natively.

          The video plays once and stops on the last frame.
          autoPlay + muted + playsInline are required for browsers to autoplay.
        */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(1.3) contrast(1.2)' }}
          onEnded={(e) => {
            // Pause on last frame — do not loop
            const vid = e.currentTarget
            vid.pause()
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 dark-overlay" />
        <div className="absolute inset-0 hero-gradient-lr" />
        <div className="absolute inset-0 hero-gradient-bt" />
        <div className="absolute inset-0 hero-diagonal hidden md:block" />
      </div>

      {/* ── Ambient glow ── */}
      <div className="glow-primary hidden md:block w-[600px] h-[500px] top-1/3 -left-20" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 lg:pb-40">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Colombia&apos;s Premier Mineral Exporter
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            className="font-display font-semibold leading-[1.08] tracking-[-0.03em] text-text mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            <StaggerLine text="The World's" className="block" />
            <motion.span variants={wordVariants} className="block text-shimmer">
              Finest Gold
            </motion.span>
            <StaggerLine text="& Emeralds" className="block" />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-muted text-lg leading-relaxed max-w-prose mb-10"
          >
            Comercializadora Fast Track Gold S.A.S. connects certified Colombian mineral suppliers
            with global buyers — with full legal compliance, secure logistics, and uncompromising
            integrity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
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
            transition={{ duration: 0.7, delay: 0.9 }}
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
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
